const widgetsInstances = [];
const initiatorsInstances = [];
let displayedProducts = [];
let useFallback = false;
let rbpResponse;
let rbpFetchTry = false;
let checkInterval = false;

// Important, any change in this function must also be implemented in the Initiator component too
const getTestGroupData = (initiator) => {
    // if there is no match for containerId and testGroup, return default config or undefined
    // in no-test case for any container, test group is -1
    // The config must be activated
    let testGroupData;
    const widgets = rbpResponse.widgets;
    if (
        widgets &&
        widgets[initiator.containerId] &&
        widgets[initiator.containerId]['testGroups']
    ) {
        let tempTestGroupData =
            widgets[initiator.containerId]['testGroups'][initiator.testGroup];
        if (tempTestGroupData?.activate) {
            // if it is test group config, it must be test case
            if (
                initiator.testGroup === -1 ||
                tempTestGroupData.config?.abTest?.enabled
            ) {
                testGroupData = tempTestGroupData;
            }
        }
        // try to get the default config if there is no match to test group
        if (!testGroupData && initiator.testGroup !== -1) {
            tempTestGroupData =
                widgets[initiator.containerId]['testGroups'][-1];
            if (tempTestGroupData?.activate) {
                testGroupData = tempTestGroupData;
            }
        }
        // if it is default config, make sure to turn off test case
        if (
            testGroupData?.config?.abTest?.testGroup === -1 &&
            testGroupData?.config?.abTest?.enabled
        ) {
            testGroupData.config.abTest['enabled'] = false;
        }
    }
    return testGroupData;
};

// Important, any change in this function must also be implemented in the Initiator component too
const getApcConf = async (message, fetchUrl, port, testGroup) => {
    let widgets;
    let filters;
    let successfulResponse;

    const startMillis = new Date().getTime();
    const request = await fetch(fetchUrl, { method: 'GET' });
    if (!request.ok) {
        // status 400 - 599
        successfulResponse = false;
        const errorMessage = `An error has occured: ${request.status}`;
        initiatorsInstances[0] = {
            ...initiatorsInstances[0],
            lastMessageSent: message,
            lastMessageReceived: {
                type: 'error',
                reason: 'rbp',
                errorMessage,
                errorStatus: request.status,
                requestUrl: fetchUrl,
                testGroup,
                containerId: message.containerId,
            },
        };
        port.postMessage(initiatorsInstances[0].lastMessageReceived);
    } else {
        // status 200-299
        successfulResponse = true;
        const endMillis = new Date().getTime();
        const response = await request.json();
        widgets = response.body?.widgets;
        filters = response.body?.filters;
        let responseBody;

        widgets &&
            Object.keys(widgets).forEach((widget) => {
                if (!responseBody) {
                    responseBody = {};
                }
                responseBody[widget] = {};
                responseBody[widget]['testGroups'] = [];
                Object.keys(widgets[widget]['testGroups']).forEach(
                    (widgetTestGroup) => {
                        responseBody[widget]['testGroups'].push(
                            widgetTestGroup,
                        );
                    },
                );
            });
        initiatorsInstances[0] = {
            ...initiatorsInstances[0],
            lastMessageSent: message,
            lastMessageReceived: {
                type: 'success',
                startMillis,
                endMillis,
                responseBody: {
                    ...responseBody,
                    includeWidgets: Boolean(responseBody),
                },
                testGroup,
                containerId: message.containerId,
            },
        };
        port.postMessage(initiatorsInstances[0].lastMessageReceived);
    }

    return { successfulResponse, widgets, filters };
};

onconnect = function (e) {
    const port = e.ports[0];

    port.onmessage = function (event) {
        const message = event.data;

        switch (message?.messageType) {
            case 'subscribe':
                if (
                    !widgetsInstances.find(
                        (widget) => widget.containerId === message.containerId,
                    )
                ) {
                    widgetsInstances.push({
                        widgetType: message.widgetType,
                        containerId: message.containerId,
                        subscriptionDate: Date.now(),
                        subscribed: true,
                        rendered: false,
                        intersected: message.intersected,
                        lastMessageSent: message,
                        lastMessageReceived: {
                            type: 'sub_ack',
                            containerId: message.containerId,
                        },
                    });

                    port.postMessage(
                        widgetsInstances[widgetsInstances.length - 1]
                            .lastMessageReceived,
                    );
                }

                break;
            case 'widgetIntersected':
                const intersectedWidgetIndex = widgetsInstances.findIndex(
                    (widget) => widget.containerId === message.containerId,
                );
                if (intersectedWidgetIndex >= 0) {
                    widgetsInstances[intersectedWidgetIndex] = {
                        ...widgetsInstances[intersectedWidgetIndex],
                        lastMessageSent: message,
                        intersected: true,
                    };
                }
                break;
            case 'getDisplayedProducts':
                const interval = setInterval(() => {
                    const firstInQueueWidget = widgetsInstances.find(
                        (widget) =>
                            widget.widgetType === message.widgetType &&
                            widget.subscribed &&
                            !widget.rendered &&
                            widget.intersected,
                    );
                    const currentWidgetIndex = widgetsInstances.findIndex(
                        (widget) => widget.containerId === message.containerId,
                    );
                    if (
                        firstInQueueWidget &&
                        currentWidgetIndex >= 0 &&
                        firstInQueueWidget.containerId ===
                        widgetsInstances[currentWidgetIndex].containerId
                    ) {
                        {
                            widgetsInstances[currentWidgetIndex] = {
                                ...widgetsInstances[currentWidgetIndex],
                                lastMessageSent: message,
                                lastMessageReceived: {
                                    type: 'getContainers',
                                    containerId: message.containerId,
                                    displayedProducts: displayedProducts
                                        .filter(
                                            (product) =>
                                                product.includeInBlackList ===
                                                true,
                                        )
                                        .map((product) => product.productCode),
                                },
                            };

                            port.postMessage(
                                widgetsInstances[currentWidgetIndex]
                                    .lastMessageReceived,
                            );
                            clearInterval(interval);
                        }
                    }
                }, 200);
                break;
            case 'updateDisplayedProducts':
                if (message.products.length > 0) {
                    displayedProducts = displayedProducts.concat(
                        message.products.map((product) => {
                            return {
                                productCode: product.productCode,
                                includeInBlackList: message.includeInBlackList,
                            };
                        }),
                    );
                }

                const widgetIndex = widgetsInstances.findIndex(
                    (widget) => widget.containerId === message.containerId,
                );

                if (widgetIndex >= 0) {
                    widgetsInstances[widgetIndex] = {
                        ...widgetsInstances[widgetIndex],
                        lastMessageSent: message,
                        rendered: true,
                    };
                }
                break;
            case 'cancelSubscription': // Cancel widget subscription when the subscription duration is longer than 2 seconds
                const deleteWidgetIndex = widgetsInstances.findIndex(
                    (widget) =>
                        widget.containerId === message.containerId,
                );
                if (deleteWidgetIndex >= 0) {
                    widgetsInstances.splice(deleteWidgetIndex, 1);
                }
                break;
            case 'subscribeInitiator': // Subscribe the initiator and add it to the rendering queue
                if (
                    !initiatorsInstances.find(
                        (initiator) =>
                            initiator.containerId === message.containerId,
                    )
                ) {
                    initiatorsInstances.push({
                        containerId: message.containerId,
                        testGroup: message.testGroup,
                        lastMessageSent: message,
                        configChecked: false,
                        lastMessageReceived: {
                            type: 'subInitAck',
                            containerId: message.containerId,
                            sendTime: message.sendTime,
                        },
                    });

                    port.postMessage(
                        initiatorsInstances[initiatorsInstances.length - 1]
                            .lastMessageReceived,
                    );
                }
                break;
            case 'getWidgetData': // Make RBP request and start interval to render widgets according to queue
                if (!rbpFetchTry) {
                    // Only the first initiator will make the RBP request
                    rbpFetchTry = true;
                    const currentInitiatorIndex = initiatorsInstances.findIndex(
                        (initiator) =>
                            initiator.containerId === message.containerId,
                    );

                    const rbpServiceURL = message.rbpServiceURL;
                    const fetchUrl = `${rbpServiceURL}&sflyDtl=${encodeURIComponent(
                        JSON.stringify(message.SFLY_DTL),
                    )}${message.userSegment
                        ? `&userSegmnet=${message.userSegment}`
                        : ``
                        }`;
                    const testGroup =
                        initiatorsInstances[currentInitiatorIndex].testGroup;

                    getApcConf(message, fetchUrl, port, testGroup)
                        .then((res) => {
                            if (res.successfulResponse) {
                                rbpResponse = res;
                            } else {
                                useFallback = true;
                            }
                        })
                        .catch((err) => {
                            useFallback = true;
                            initiatorsInstances[currentInitiatorIndex] = {
                                ...initiatorsInstances[currentInitiatorIndex],
                                lastMessageSent: message,
                                lastMessageReceived: {
                                    type: 'error',
                                    reason: 'getApcConf',
                                    errorMessage: err.message,
                                    requestUrl: fetchUrl,
                                    testGroup,
                                    containerId: message.containerId,
                                },
                            };
                            port.postMessage(
                                initiatorsInstances[currentInitiatorIndex]
                                    .lastMessageReceived,
                            );
                        });
                }

                // Interval to check if the current initiator is the first in the queue.
                // If yes, send the config/fallback trigger to the initiator
                // If no, keep waiting
                const InitiatorsInterval = setInterval(() => {
                    if (checkInterval) {
                        const firstInQueueInitiator = initiatorsInstances.find(
                            (initiator) => !initiator.configChecked,
                        );
                        const currentInitiatorIndex =
                            initiatorsInstances.findIndex(
                                (initiator) =>
                                    initiator.containerId ===
                                    message.containerId,
                            );
                        if (
                            firstInQueueInitiator &&
                            currentInitiatorIndex >= 0
                        ) {
                            if (
                                firstInQueueInitiator.containerId ===
                                initiatorsInstances[currentInitiatorIndex]
                                    .containerId
                            ) {
                                let testGroupData;
                                if (rbpResponse) {
                                    testGroupData = getTestGroupData(
                                        firstInQueueInitiator,
                                    );
                                }

                                initiatorsInstances[currentInitiatorIndex] = {
                                    ...initiatorsInstances[
                                    currentInitiatorIndex
                                    ],
                                    lastMessageSent: message,
                                    configChecked: true,
                                    lastMessageReceived: {
                                        type: useFallback
                                            ? 'fallbackRender'
                                            : 'widgetRender',
                                        testGroupData,
                                        containerId: message.containerId,
                                        filters: rbpResponse?.filters,
                                    },
                                };
                                port.postMessage(
                                    initiatorsInstances[currentInitiatorIndex]
                                        .lastMessageReceived,
                                );
                                clearInterval(InitiatorsInterval);
                            }
                        }
                    }
                }, 200);
                break;
            case 'cancelInitiatorSubscription': // Cancel initiator subscription when the subscription duration is longer than 2 seconds
                const deleteInitiatorIndex = initiatorsInstances.findIndex(
                    (initiator) =>
                        initiator.containerId === message.containerId,
                );
                if (deleteInitiatorIndex >= 0) {
                    initiatorsInstances.splice(deleteInitiatorIndex, 1);
                }
                break;
            case 'checkInterval': // Allow to check interval content to get widgets configs according to queue
                checkInterval = true;
                break;
        }
    };
};
