        // so this is not an issue any more.
        // var otherAxisModel = this.getOtherAxisModel();
        // if (dataZoomModel.get('$fromToolbox')
        //     && otherAxisModel
        //     && otherAxisModel.hasSeriesStacked
        // ) {
        //     filterMode = 'empty';
        // }

        // TODO
        // filterMode 'weakFilter' and 'empty' is not optimized for huge data yet.

        each$13(seriesModels, function (seriesModel) {
            var seriesData = seriesModel.getData();
            var dataDims = seriesData.mapDimension(axisDim, true);

            if (!dataDims.length) {
                return;
            }

            if (filterMode === 'weakFilter') {
                seriesData.filterSelf(function (dataIndex) {
                    var leftOut;
                    var rightOut;
                    var hasValue;
                    for (var i = 0; i < dataDims.length; i++) {
                        var value = seriesData.get(dataDims[i], dataIndex);
                        var thisHasValue = !isNaN(value);
                        var thisLeftOut = value < valueWindow[0];
                        var thisRightOut = value > valueWindow[1];
                        if (thisHasValue && !thisLeftOut && !thisRightOut) {
                            return true;
                        }
                        thisHasValue && (hasValue = true);
                        thisLeftOut && (leftOut = true);
                        thisRightOut && (rightOut = true);
                    }
                    // If both left out and right out, do not filter.
                    return hasValue && leftOut && rightOut;
                });
            }
            else {
                each$13(dataDims, function (dim) {
                    if (filterMode === 'empty') {
                        seriesModel.setData(
                            seriesData = seriesData.map(dim, function (value) {
                                return !isInWindow(value) ? NaN : value;
                            })
                        );
                    }
                    else {
                        var range = {};
                        range[dim] = valueWindow;

                        // console.time('select');
                        seriesData.selectRange(range);
                        // console.timeEnd('select');
                    }
                });
            }

            each$13(dataDims, function (dim) {
                seriesData.setApproximateExtent(valueWindow, dim);
            });
        });

        function isInWindow(value) {
            return value >= valueWindow[0] && value <= valueWindow[1];
        }
    }
};

function calculateDataExtent(axisProxy, axisDim, seriesModels) {
    var dataExtent = [Infinity, -Infinity];

    each$13(seriesModels, function (seriesModel) {
        var seriesData = seriesModel.getData();
        if (seriesData) {
            each$13(seriesData.mapDimension(axisDim, true), function (dim) {
                var seriesExtent = seriesData.getApproximateExtent(dim);
                seriesExtent[0] < dataExtent[0] && (dataExtent[0] = seriesExtent[0]);
                seriesExtent[1] > dataExtent[1] && (dataExtent[1] = seriesExtent[1]);
            });
        }
    });

    if (dataExtent[1] < dataExtent[0]) {
        dataExtent = [NaN, NaN];
    }

    // It is important to get "consistent" extent when more then one axes is
    // controlled by a `dataZoom`, otherwise those axes will not be synchronized
    // when zooming. But it is difficult to know what is "consistent", considering
    // axes have different type or even different meanings (For example, two
    // time axes are used to compare data of the same date in different years).
    // So basically dataZoom just obtains extent by series.data (in category axis
    // extent can be obtained from axis.data).
    // Nevertheless, user can set min/max/scale on axes to make extent of axes
    // consistent.
    fixExtentByAxis(axisProxy, dataExtent);

    return dataExtent;
}

function fixExtentByAxis(axisProxy, dataExtent) {
    var axisModel = axisProxy.getAxisModel();
    var min = axisModel.getMin(true);

    // For category axis, if min/max/scale are not set, extent is determined
    // by axis.data by default.
    var isCategoryAxis = axisModel.get('type') === 'category';
    var axisDataLen = isCategoryAxis && axisModel.getCategories().length;

    if (min != null && min !== 'dataMin' && typeof min !== 'function') {
        dataExtent[0] = min;
    }
    else if (isCategoryAxis) {
        dataExtent[0] = axisDataLen > 0 ? 0 : NaN;
    }

    var max = axisModel.getMax(true);
    if (max != null && max !== 'dataMax' && typeof max !== 'function') {
        dataExtent[1] = max;
    }
    else if (isCategoryAxis) {
        dataExtent[1] = axisDataLen > 0 ? axisDataLen - 1 : NaN;
    }

    if (!axisModel.get('scale', true)) {
        dataExtent[0] > 0 && (dataExtent[0] = 0);
        dataExtent[1] < 0 && (dataExtent[1] = 0);
    }

    // For value axis, if min/max/scale are not set, we just use the extent obtained
    // by series data, which may be a little different from the extent calculated by
    // `axisHelper.getScaleExtent`. But the different just affects the experience a
    // little when zooming. So it will not be fixed until some users require it strongly.

    return dataExtent;
}

function setAxisModel(axisProxy, isRestore) {
    var axisModel = axisProxy.getAxisModel();

    var percentWindow = axisProxy._percentWindow;
    var valueWindow = axisProxy._valueWindow;

    if (!percentWindow) {
        return;
    }

    // [0, 500]: arbitrary value, guess axis extent.
    var precision = getPixelPrecision(valueWindow, [0, 500]);
    precision = Math.min(precision, 20);
    // isRestore or isFull
    var useOrigin = isRestore || (percentWindow[0] === 0 && percentWindow[1] === 100);

    axisModel.setRange(
        useOrigin ? null : +valueWindow[0].toFixed(precision),
        useOrigin ? null : +valueWindow[1].toFixed(precision)
    );
}

function setMinMaxSpan(axisProxy) {
    var minMaxSpan = axisProxy._minMaxSpan = {};
    var dataZoomModel = axisProxy._dataZoomModel;
    var dataExtent = axisProxy._dataExtent;

    each$13(['min', 'max'], function (minMax) {
        var percentSpan = dataZoomModel.get(minMax + 'Span');
        var valueSpan = dataZoomModel.get(minMax + 'ValueSpan');
        valueSpan != null && (valueSpan = axisProxy.getAxisModel().axis.scale.parse(valueSpan));

        // minValueSpan and maxValueSpan has higher priority than minSpan and maxSpan
        if (valueSpan != null) {
            percentSpan = linearMap(
                dataExtent[0] + valueSpan, dataExtent, [0, 100], true
            );
        }
        else if (percentSpan != null) {
            valueSpan = linearMap(
                percentSpan, [0, 100], dataExtent, true
            ) - dataExtent[0];
        }

        minMaxSpan[minMax + 'Span'] = percentSpan;
        minMaxSpan[minMax + 'ValueSpan'] = valueSpan;
    });
}

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var each$12 = each$1;
var eachAxisDim = eachAxisDim$1;

var DataZoomModel = extendComponentModel({

    type: 'dataZoom',

    dependencies: [
        'xAxis', 'yAxis', 'zAxis', 'radiusAxis', 'angleAxis', 'singleAxis', 'series'
    ],

    /**
     * @protected
     */
    defaultOption: {
        zlevel: 0,
        z: 4,                   // Higher than normal component (z: 2).
        orient: null,           // Default auto by axisIndex. Possible value: 'horizontal', 'vertical'.
        xAxisIndex: null,       // Default the first horizontal category axis.
        yAxisIndex: null,       // Default the first vertical category axis.

        filterMode: 'filter',   // Possible values: 'filter' or 'empty' or 'weakFilter'.
                                // 'filter': data items which are out of window will be removed. This option is
                                //          applicable when filtering outliers. For each data item, it will be
                                //          filtered if one of the relevant dimensions is out of the window.
                                // 'weakFilter': data items which are out of window will be removed. This option
                                //          is applicable when filtering outliers. For each data item, it will be
                                //          filtered only if all  of the relevant dimensions are out of the same
                                //          side of the window.
                                // 'empty': data items which are out of window will be set to empty.
                                //          This option is applicable when user should not neglect
                                //          that there are some data items out of window.
                                // 'none': Do not filter.
                                // Taking line chart as an example, line will be broken in
                                // the filtered points when filterModel is set to 'empty', but
                                // be connected when set to 'filter'.

        throttle: null,         // Dispatch action by the fixed rate, avoid frequency.
                                // default 100. Do not throttle when use null/undefined.
                                // If animation === true and animationDurationUpdate > 0,
                                // default value is 100, otherwise 20.
        start: 0,               // Start percent. 0 ~ 100
        end: 100,               // End percent. 0 ~ 100
        startValue: null,       // Start value. If startValue specified, start is ignored.
        endValue: null,         // End value. If endValue specified, end is ignored.
        minSpan: null,          // 0 ~ 100
        maxSpan: null,          // 0 ~ 100
        minValueSpan: null,     // The range of dataZoom can not be smaller than that.
        maxValueSpan: null,     // The range of dataZoom can not be larger than that.
        rangeMode: null         // Array, can be 'value' or 'percent'.
    },

    /**
     * @override
     */
    init: function (option, parentModel, ecModel) {

        /**
         * key like x_0, y_1
         * @private
         * @type {Object}
         */
        this._dataIntervalByAxis = {};

        /**
         * @private
         */
        this._dataInfo = {};

        /**
         * key like x_0, y_1
         * @private
         */
        this._axisProxies = {};

        /**
         * @readOnly
         */
        this.textStyleModel;

        /**
         * @private
         */
        this._autoThrottle = true;

        /**
         * 'percent' or 'value'
         * @private
         */
        this._rangePropMode = ['percent', 'percent'];

        var rawOption = retrieveRaw(option);

        this.mergeDefaultAndTheme(option, ecModel);

        this.doInit(rawOption);
    },

    /**
     * @override
     */
    mergeOption: function (newOption) {
        var rawOption = retrieveRaw(newOption);

        //FIX #2591
        merge(this.option, newOption, true);

        this.doInit(rawOption);
    },

    /**
     * @protected
     */
    doInit: function (rawOption) {
        var thisOption = this.option;

        // Disable realtime view update if canvas is not supported.
        if (!env$1.canvasSupported) {
            thisOption.realtime = false;
        }

        this._setDefaultThrottle(rawOption);

        updateRangeUse(this, rawOption);

        each$12([['start', 'startValue'], ['end', 'endValue']], function (names, index) {
            // start/end has higher priority over startValue/endValue if they
            // both set, but we should make chart.setOption({endValue: 1000})
            // effective, rather than chart.setOption({endValue: 1000, end: null}).
            if (this._rangePropMode[index] === 'value') {
                thisOption[names[0]] = null;
            }
            // Otherwise do nothing and use the merge result.
        }, this);

        this.textStyleModel = this.getModel('textStyle');

        this._resetTarget();

        this._giveAxisProxies();
    },

    /**
     * @private
     */
    _giveAxisProxies: function () {
        var axisProxies = this._axisProxies;

        this.eachTargetAxis(function (dimNames, axisIndex, dataZoomModel, ecModel) {
            var axisModel = this.dependentModels[dimNames.axis][axisIndex];

            // If exists, share axisProxy with other dataZoomModels.
            var axisProxy = axisModel.__dzAxisProxy || (
                // Use the first dataZoomModel as the main model of axisProxy.
                axisModel.__dzAxisProxy = new AxisProxy(
                    dimNames.name, axisIndex, this, ecModel
                )
            );
            // FIXME
            // dispose __dzAxisProxy

            axisProxies[dimNames.name + '_' + axisIndex] = axisProxy;
        }, this);
    },

    /**
     * @private
     */
    _resetTarget: function () {
        var thisOption = this.option;

        var autoMode = this._judgeAutoMode();

        eachAxisDim(function (dimNames) {
            var axisIndexName = dimNames.axisIndex;
            thisOption[axisIndexName] = normalizeToArray(
                thisOption[axisIndexName]
            );
        }, this);

        if (autoMode === 'axisIndex') {
            this._autoSetAxisIndex();
        }
        else if (autoMode === 'orient') {
            this._autoSetOrient();
        }
    },

    /**
     * @private
     */
    _judgeAutoMode: function () {
        // Auto set only works for setOption at the first time.
        // The following is user's reponsibility. So using merged
        // option is OK.
        var thisOption = this.option;

        var hasIndexSpecified = false;
        eachAxisDim(function (dimNames) {
            // When user set axisIndex as a empty array, we think that user specify axisIndex
            // but do not want use auto mode. Because empty array may be encountered when
            // some error occured.
            if (thisOption[dimNames.axisIndex] != null) {
                hasIndexSpecified = true;
            }
        }, this);

        var orient = thisOption.orient;

        if (orient == null && hasIndexSpecified) {
            return 'orient';
        }
        else if (!hasIndexSpecified) {
            if (orient == null) {
                thisOption.orient = 'horizontal';
            }
            return 'axisIndex';
        }
    },

    /**
     * @private
     */
    _autoSetAxisIndex: function () {
        var autoAxisIndex = true;
        var orient = this.get('orient', true);
        var thisOption = this.option;
        var dependentModels = this.dependentModels;

        if (autoAxisIndex) {
            // Find axis that parallel to dataZoom as default.
            var dimName = orient === 'vertical' ? 'y' : 'x';

            if (dependentModels[dimName + 'Axis'].length) {
                thisOption[dimName + 'AxisIndex'] = [0];
                autoAxisIndex = false;
            }
            else {
                each$12(dependentModels.singleAxis, function (singleAxisModel) {
                    if (autoAxisIndex && singleAxisModel.get('orient', true) === orient) {
                        thisOption.singleAxisIndex = [singleAxisModel.componentIndex];
                        autoAxisIndex = false;
                    }
                });
            }
        }

        if (autoAxisIndex) {
            // Find the first category axis as default. (consider polar)
            eachAxisDim(function (dimNames) {
                if (!autoAxisIndex) {
                    return;
                }
                var axisIndices = [];
                var axisModels = this.dependentModels[dimNames.axis];
                if (axisModels.length && !axisIndices.length) {
                    for (var i = 0, len = axisModels.length; i < len; i++) {
                        if (axisModels[i].get('type') === 'category') {
                            axisIndices.push(i);
                        }
                    }
                }
                thisOption[dimNames.axisIndex] = axisIndices;
                if (axisIndices.length) {
                    autoAxisIndex = false;
                }
            }, this);
        }

        if (autoAxisIndex) {
            // FIXME
            // 这里是兼容ec2的写法（没指定xAxisIndex和yAxisIndex时把scatter和双数值轴折柱纳入dataZoom控制），
            // 但是实际是否需要Grid.js#getScaleByOption来判断（考虑time，log等axis type）？

            // If both dataZoom.xAxisIndex and dataZoom.yAxisIndex is not specified,
            // dataZoom component auto adopts series that reference to
            // both xAxis and yAxis which type is 'value'.
            this.ecModel.eachSeries(function (seriesModel) {
                if (this._isSeriesHasAllAxesTypeOf(seriesModel, 'value')) {
                    eachAxisDim(function (dimNames) {
                        var axisIndices = thisOption[dimNames.axisIndex];

                        var axisIndex = seriesModel.get(dimNames.axisIndex);
                        var axisId = seriesModel.get(dimNames.axisId);

                        var axisModel = seriesModel.ecModel.queryComponents({
                            mainType: dimNames.axis,
                            index: axisIndex,
                            id: axisId
                        })[0];

                        if (__DEV__) {
                            if (!axisModel) {
                                throw new Error(
                                    dimNames.axis + ' "' + retrieve(
                                        axisIndex,
                                        axisId,
                                        0
                                    ) + '" not found'
                                );
                            }
                        }
                        axisIndex = axisModel.componentIndex;

                        if (indexOf(axisIndices, axisIndex) < 0) {
                            axisIndices.push(axisIndex);
                        }
                    });
                }
            }, this);
        }
    },

    /**
     * @private
     */
    _autoSetOrient: function () {
        var dim;

        // Find the first axis
        this.eachTargetAxis(function (dimNames) {
            !dim && (dim = dimNames.name);
        }, this);

        this.option.orient = dim === 'y' ? 'vertical' : 'horizontal';
    },

    /**
     * @private
     */
    _isSeriesHasAllAxesTypeOf: function (seriesModel, axisType) {
        // FIXME
        // 需要series的xAxisIndex和yAxisIndex都首先自动设置上。
        // 例如series.type === scatter时。

        var is = true;
        eachAxisDim(function (dimNames) {
            var seriesAxisIndex = seriesModel.get(dimNames.axisIndex);
            var axisModel = this.dependentModels[dimNames.axis][seriesAxisIndex];

            if (!axisModel || axisModel.get('type') !== axisType) {
                is = false;
            }
        }, this);
        return is;
    },

    /**
     * @private
     */
    _setDefaultThrottle: function (rawOption) {
        // When first time user set throttle, auto throttle ends.
        if (rawOption.hasOwnProperty('throttle')) {
            this._autoThrottle = false;
        }
        if (this._autoThrottle) {
            var globalOption = this.ecModel.option;
            this.option.throttle
                = (globalOption.animation && globalOption.animationDurationUpdate > 0)
                ? 100 : 20;
        }
    },

    /**
     * @public
     */
    getFirstTargetAxisModel: function () {
        var firstAxisModel;
        eachAxisDim(function (dimNames) {
            if (firstAxisModel == null) {
                var indices = this.get(dimNames.axisIndex);
                if (indices.length) {
                    firstAxisModel = this.dependentModels[dimNames.axis][indices[0]];
                }
            }
        }, this);

        return firstAxisModel;
    },

    /**
     * @public
     * @param {Function} callback param: axisModel, dimNames, axisIndex, dataZoomModel, ecModel
     */
    eachTargetAxis: function (callback, context) {
        var ecModel = this.ecModel;
        eachAxisDim(function (dimNames) {
            each$12(
                this.get(dimNames.axisIndex),
                function (axisIndex) {
                    callback.call(context, dimNames, axisIndex, this, ecModel);
                },
                this
            );
        }, this);
    },

    /**
     * @param {string} dimName
     * @param {number} axisIndex
     * @return {module:echarts/component/dataZoom/AxisProxy} If not found, return null/undefined.
     */
    getAxisProxy: function (dimName, axisIndex) {
        return this._axisProxies[dimName + '_' + axisIndex];
    },

    /**
     * @param {string} dimName
     * @param {number} axisIndex
     * @return {module:echarts/model/Model} If not found, return null/undefined.
     */
    getAxisModel: function (dimName, axisIndex) {
        var axisProxy = this.getAxisProxy(dimName, axisIndex);
        return axisProxy && axisProxy.getAxisModel();
    },

    /**
     * If not specified, set to undefined.
     *
     * @public
     * @param {Object} opt
     * @param {number} [opt.start]
     * @param {number} [opt.end]
     * @param {number} [opt.startValue]
     * @param {number} [opt.endValue]
     * @param {boolean} [ignoreUpdateRangeUsg=false]
     */
    setRawRange: function (opt, ignoreUpdateRangeUsg) {
        var option = this.option;
        each$12([['start', 'startValue'], ['end', 'endValue']], function (names) {
            // If only one of 'start' and 'startValue' is not null/undefined, the other
            // should be cleared, which enable clear the option.
            // If both of them are not set, keep option with the original value, which
            // enable use only set start but not set end when calling `dispatchAction`.
            // The same as 'end' and 'endValue'.
            if (opt[names[0]] != null || opt[names[1]] != null) {
                option[names[0]] = opt[names[0]];
                option[names[1]] = opt[names[1]];
            }
        }, this);

        !ignoreUpdateRangeUsg && updateRangeUse(this, opt);
    },

    /**
     * @public
     * @return {Array.<number>} [startPercent, endPercent]
     */
    getPercentRange: function () {
        var axisProxy = this.findRepresentativeAxisProxy();
        if (axisProxy) {
            return axisProxy.getDataPercentWindow();
        }
    },

    /**
     * @public
     * For example, chart.getModel().getComponent('dataZoom').getValueRange('y', 0);
     *
     * @param {string} [axisDimName]
     * @param {number} [axisIndex]
     * @return {Array.<number>} [startValue, endValue] value can only be '-' or finite number.
     */
    getValueRange: function (axisDimName, axisIndex) {
        if (axisDimName == null && axisIndex == null) {
            var axisProxy = this.findRepresentativeAxisProxy();
            if (axisProxy) {
                return axisProxy.getDataValueWindow();
            }
        }
        else {
            return this.getAxisProxy(axisDimName, axisIndex).getDataValueWindow();
        }
    },

    /**
     * @public
     * @param {module:echarts/model/Model} [axisModel] If axisModel given, find axisProxy
     *      corresponding to the axisModel
     * @return {module:echarts/component/dataZoom/AxisProxy}
     */
    findRepresentativeAxisProxy: function (axisModel) {
        if (axisModel) {
            return axisModel.__dzAxisProxy;
        }

        // Find the first hosted axisProxy
        var axisProxies = this._axisProxies;
        for (var key in axisProxies) {
            if (axisProxies.hasOwnProperty(key) && axisProxies[key].hostedBy(this)) {
                return axisProxies[key];
            }
        }

        // If no hosted axis find not hosted axisProxy.
        // Consider this case: dataZoomModel1 and dataZoomModel2 control the same axis,
        // and the option.start or option.end settings are different. The percentRange
        // should follow axisProxy.
        // (We encounter this problem in toolbox data zoom.)
        for (var key in axisProxies) {
            if (axisProxies.hasOwnProperty(key) && !axisProxies[key].hostedBy(this)) {
                return axisProxies[key];
            }
        }
    },

    /**
     * @return {Array.<string>}
     */
    getRangePropMode: function () {
        return this._rangePropMode.slice();
    }

});

function retrieveRaw(option) {
    var ret = {};
    each$12(
        ['start', 'end', 'startValue', 'endValue', 'throttle'],
        function (name) {
            option.hasOwnProperty(name) && (ret[name] = option[name]);
        }
    );
    return ret;
}

function updateRangeUse(dataZoomModel, rawOption) {
    var rangePropMode = dataZoomModel._rangePropMode;
    var rangeModeInOption = dataZoomModel.get('rangeMode');

    each$12([['start', 'startValue'], ['end', 'endValue']], function (names, index) {
        var percentSpecified = rawOption[names[0]] != null;
        var valueSpecified = rawOption[names[1]] != null;
        if (percentSpecified && !valueSpecified) {
            rangePropMode[index] = 'percent';
        }
        else if (!percentSpecified && valueSpecified) {
            rangePropMode[index] = 'value';
        }
        else if (rangeModeInOption) {
            rangePropMode[index] = rangeModeInOption[index];
        }
        else if (percentSpecified) { // percentSpecified && valueSpecified
            rangePropMode[index] = 'percent';
        }
        // else remain its original setting.
    });
}

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var DataZoomView = Component$1.extend({

    type: 'dataZoom',

    render: function (dataZoomModel, ecModel, api, payload) {
        this.dataZoomModel = dataZoomModel;
        this.ecModel = ecModel;
        this.api = api;
    },

    /**
     * Find the first target coordinate system.
     *
     * @protected
     * @return {Object} {
     *                   grid: [
     *                       {model: coord0, axisModels: [axis1, axis3], coordIndex: 1},
     *                       {model: coord1, axisModels: [axis0, axis2], coordIndex: 0},
     *                       ...
     *                   ],  // cartesians must not be null/undefined.
     *                   polar: [
     *                       {model: coord0, axisModels: [axis4], coordIndex: 0},
     *                       ...
     *                   ],  // polars must not be null/undefined.
     *                   singleAxis: [
     *                       {model: coord0, axisModels: [], coordIndex: 0}
     *                   ]
     */
    getTargetCoordInfo: function () {
        var dataZoomModel = this.dataZoomModel;
        var ecModel = this.ecModel;
        var coordSysLists = {};

        dataZoomModel.eachTargetAxis(function (dimNames, axisIndex) {
            var axisModel = ecModel.getComponent(dimNames.axis, axisIndex);
            if (axisModel) {
                var coordModel = axisModel.getCoordSysModel();
                coordModel && save(
                    coordModel,
                    axisModel,
                    coordSysLists[coordModel.mainType] || (coordSysLists[coordModel.mainType] = []),
                    coordModel.componentIndex
                );
            }
        }, this);

        function save(coordModel, axisModel, store, coordIndex) {
            var item;
            for (var i = 0; i < store.length; i++) {
                if (store[i].model === coordModel) {
                    item = store[i];
                    break;
                }
            }
            if (!item) {
                store.push(item = {
                    model: coordModel, axisModels: [], coordIndex: coordIndex
                });
            }
            item.axisModels.push(axisModel);
        }

        return coordSysLists;
    }

});

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var SliderZoomModel = DataZoomModel.extend({

    type: 'dataZoom.slider',

    layoutMode: 'box',

    /**
     * @protected
     */
    defaultOption: {
        show: true,

        // ph => placeholder. Using placehoder here because
        // deault value can only be drived in view stage.
        right: 'ph',  // Default align to grid rect.
        top: 'ph',    // Default align to grid rect.
        width: 'ph',  // Default align to grid rect.
        height: 'ph', // Default align to grid rect.
        left: null,   // Default align to grid rect.
        bottom: null, // Default align to grid rect.

        backgroundColor: 'rgba(47,69,84,0)',    // Background of slider zoom component.
        // dataBackgroundColor: '#ddd',         // Background coor of data shadow and border of box,
                                                // highest priority, remain for compatibility of
                                                // previous version, but not recommended any more.
        dataBackground: {
            lineStyle: {
                color: '#2f4554',
                width: 0.5,
                opacity: 0.3
            },
            areaStyle: {
                color: 'rgba(47,69,84,0.3)',
                opacity: 0.3
            }
        },
        borderColor: '#ddd',                    // border color of the box. For compatibility,
                                                // if dataBackgroundColor is set, borderColor
                                                // is ignored.

        fillerColor: 'rgba(167,183,204,0.4)',     // Color of selected area.
        // handleColor: 'rgba(89,170,216,0.95)',     // Color of handle.
        // handleIcon: 'path://M4.9,17.8c0-1.4,4.5-10.5,5.5-12.4c0-0.1,0.6-1.1,0.9-1.1c0.4,0,0.9,1,0.9,1.1c1.1,2.2,5.4,11,5.4,12.4v17.8c0,1.5-0.6,2.1-1.3,2.1H6.1c-0.7,0-1.3-0.6-1.3-2.1V17.8z',
        /* eslint-disable */
        handleIcon: 'M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z',
        /* eslint-enable */
        // Percent of the slider height
        handleSize: '100%',

        handleStyle: {
            color: '#a7b7cc'
        },

        labelPrecision: null,
        labelFormatter: null,
        showDetail: true,
        showDataShadow: 'auto',                 // Default auto decision.
        realtime: true,
        zoomLock: false,                        // Whether disable zoom.
        textStyle: {
            color: '#333'
        }
    }

});

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var Rect$1 = Rect;
var linearMap$1 = linearMap;
var asc$2 = asc;
var bind$3 = bind;
var each$14 = each$1;

// Constants
var DEFAULT_LOCATION_EDGE_GAP = 7;
var DEFAULT_FRAME_BORDER_WIDTH = 1;
var DEFAULT_FILLER_SIZE = 30;
var HORIZONTAL = 'horizontal';
var VERTICAL = 'vertical';
var LABEL_GAP = 5;
var SHOW_DATA_SHADOW_SERIES_TYPE = ['line', 'bar', 'candlestick', 'scatter'];

var SliderZoomView = DataZoomView.extend({

    type: 'dataZoom.slider',

    init: function (ecModel, api) {

        /**
         * @private
         * @type {Object}
         */
        this._displayables = {};

        /**
         * @private
         * @type {string}
         */
        this._orient;

        /**
         * [0, 100]
         * @private
         */
        this._range;

        /**
         * [coord of the first handle, coord of the second handle]
         * @private
         */
        this._handleEnds;

        /**
         * [length, thick]
         * @private
         * @type {Array.<number>}
         */
        this._size;

        /**
         * @private
         * @type {number}
         */
        this._handleWidth;

        /**
         * @private
         * @type {number}
         */
        this._handleHeight;

        /**
         * @private
         */
        this._location;

        /**
         * @private
         */
        this._dragging;

        /**
         * @private
         */
        this._dataShadowInfo;

        this.api = api;
    },

    /**
     * @override
     */
    render: function (dataZoomModel, ecModel, api, payload) {
        SliderZoomView.superApply(this, 'render', arguments);

        createOrUpdate(
            this,
            '_dispatchZoomAction',
            this.dataZoomModel.get('throttle'),
            'fixRate'
        );

        this._orient = dataZoomModel.get('orient');

        if (this.dataZoomModel.get('show') === false) {
            this.group.removeAll();
            return;
        }

        // Notice: this._resetInterval() should not be executed when payload.type
        // is 'dataZoom', origin this._range should be maintained, otherwise 'pan'
        // or 'zoom' info will be missed because of 'throttle' of this.dispatchAction,
        if (!payload || payload.type !== 'dataZoom' || payload.from !== this.uid) {
            this._buildView();
        }

        this._updateView();
    },

    /**
     * @override
     */
    remove: function () {
        SliderZoomView.superApply(this, 'remove', arguments);
        clear(this, '_dispatchZoomAction');
    },

    /**
     * @override
     */
    dispose: function () {
        SliderZoomView.superApply(this, 'dispose', arguments);
        clear(this, '_dispatchZoomAction');
    },

    _buildView: function () {
        var thisGroup = this.group;

        thisGroup.removeAll();

        this._resetLocation();
        this._resetInterval();

        var barGroup = this._displayables.barGroup = new Group();

        this._renderBackground();

        this._renderHandle();

        this._renderDataShadow();

        thisGroup.add(barGroup);

        this._positionGroup();
    },

    /**
     * @private
     */
    _resetLocation: function () {
        var dataZoomModel = this.dataZoomModel;
        var api = this.api;

        // If some of x/y/width/height are not specified,
        // auto-adapt according to target grid.
        var coordRect = this._findCoordRect();
        var ecSize = {width: api.getWidth(), height: api.getHeight()};
        // Default align by coordinate system rect.
        var positionInfo = this._orient === HORIZONTAL
            ? {
                // Why using 'right', because right should be used in vertical,
                // and it is better to be consistent for dealing with position param merge.
                right: ecSize.width - coordRect.x - coordRect.width,
                top: (ecSize.height - DEFAULT_FILLER_SIZE - DEFAULT_LOCATION_EDGE_GAP),
                width: coordRect.width,
                height: DEFAULT_FILLER_SIZE
            }
            : { // vertical
                right: DEFAULT_LOCATION_EDGE_GAP,
                top: coordRect.y,
                width: DEFAULT_FILLER_SIZE,
                height: coordRect.height
            };

        // Do not write back to option and replace value 'ph', because
        // the 'ph' value should be recalculated when resize.
        var layoutParams = getLayoutParams(dataZoomModel.option);

        // Replace the placeholder value.
        each$1(['right', 'top', 'width', 'height'], function (name) {
            if (layoutParams[name] === 'ph') {
                layoutParams[name] = positionInfo[name];
            }
        });

        var layoutRect = getLayoutRect(
            layoutParams,
            ecSize,
            dataZoomModel.padding
        );

        this._location = {x: layoutRect.x, y: layoutRect.y};
        this._size = [layoutRect.width, layoutRect.height];
        this._orient === VERTICAL && this._size.reverse();
    },

    /**
     * @private
     */
    _positionGroup: function () {
        var thisGroup = this.group;
        var location = this._location;
        var orient = this._orient;

        // Just use the first axis to determine mapping.
        var targetAxisModel = this.dataZoomModel.getFirstTargetAxisModel();
        var inverse = targetAxisModel && targetAxisModel.get('inverse');

        var barGroup = this._displayables.barGroup;
        var otherAxisInverse = (this._dataShadowInfo || {}).otherAxisInverse;

        // Transform barGroup.
        barGroup.attr(
            (orient === HORIZONTAL && !inverse)
            ? {scale: otherAxisInverse ? [1, 1] : [1, -1]}
            : (orient === HORIZONTAL && inverse)
            ? {scale: otherAxisInverse ? [-1, 1] : [-1, -1]}
            : (orient === VERTICAL && !inverse)
            ? {scale: otherAxisInverse ? [1, -1] : [1, 1], rotation: Math.PI / 2}
            // Dont use Math.PI, considering shadow direction.
            : {scale: otherAxisInverse ? [-1, -1] : [-1, 1], rotation: Math.PI / 2}
        );

        // Position barGroup
        var rect = thisGroup.getBoundingRect([barGroup]);
        thisGroup.attr('position', [location.x - rect.x, location.y - rect.y]);
    },

    /**
     * @private
     */
    _getViewExtent: function () {
        return [0, this._size[0]];
    },

    _renderBackground: function () {
        var dataZoomModel = this.dataZoomModel;
        var size = this._size;
        var barGroup = this._displayables.barGroup;

        barGroup.add(new Rect$1({
            silent: true,
            shape: {
                x: 0, y: 0, width: size[0], height: size[1]
            },
            style: {
                fill: dataZoomModel.get('backgroundColor')
            },
            z2: -40
        }));

        // Click panel, over shadow, below handles.
        barGroup.add(new Rect$1({
            shape: {
                x: 0, y: 0, width: size[0], height: size[1]
            },
            style: {
                fill: 'transparent'
            },
            z2: 0,
            onclick: bind(this._onClickPanelClick, this)
        }));
    },

    _renderDataShadow: function () {
        var info = this._dataShadowInfo = this._prepareDataShadowInfo();

        if (!info) {
            return;
        }

        var size = this._size;
        var seriesModel = info.series;
        var data = seriesModel.getRawData();

        var otherDim = seriesModel.getShadowDim
            ? seriesModel.getShadowDim() // @see candlestick
            : info.otherDim;

        if (otherDim == null) {
            return;
        }

        var otherDataExtent = data.getDataExtent(otherDim);
        // Nice extent.
        var otherOffset = (otherDataExtent[1] - otherDataExtent[0]) * 0.3;
        otherDataExtent = [
            otherDataExtent[0] - otherOffset,
            otherDataExtent[1] + otherOffset
        ];
        var otherShadowExtent = [0, size[1]];

        var thisShadowExtent = [0, size[0]];

        var areaPoints = [[size[0], 0], [0, 0]];
        var linePoints = [];
        var step = thisShadowExtent[1] / (data.count() - 1);
        var thisCoord = 0;

        // Optimize for large data shadow
        var stride = Math.round(data.count() / size[0]);
        var lastIsEmpty;
        data.each([otherDim], function (value, index) {
            if (stride > 0 && (index % stride)) {
                thisCoord += step;
                return;
            }

            // FIXME
            // Should consider axis.min/axis.max when drawing dataShadow.

            // FIXME
            // 应该使用统一的空判断？还是在list里进行空判断？
            var isEmpty = value == null || isNaN(value) || value === '';
            // See #4235.
            var otherCoord = isEmpty
                ? 0 : linearMap$1(value, otherDataExtent, otherShadowExtent, true);

            // Attempt to draw data shadow precisely when there are empty value.
            if (isEmpty && !lastIsEmpty && index) {
                areaPoints.push([areaPoints[areaPoints.length - 1][0], 0]);
                linePoints.push([linePoints[linePoints.length - 1][0], 0]);
            }
            else if (!isEmpty && lastIsEmpty) {
                areaPoints.push([thisCoord, 0]);
                linePoints.push([thisCoord, 0]);
            }

            areaPoints.push([thisCoord, otherCoord]);
            linePoints.push([thisCoord, otherCoord]);

            thisCoord += step;
            lastIsEmpty = isEmpty;
        });

        var dataZoomModel = this.dataZoomModel;
        // var dataBackgroundModel = dataZoomModel.getModel('dataBackground');
        this._displayables.barGroup.add(new Polygon({
            shape: {points: areaPoints},
            style: defaults(
                {fill: dataZoomModel.get('dataBackgroundColor')},
                dataZoomModel.getModel('dataBackground.areaStyle').getAreaStyle()
            ),
            silent: true,
            z2: -20
        }));
        this._displayables.barGroup.add(new Polyline({
            shape: {points: linePoints},
            style: dataZoomModel.getModel('dataBackground.lineStyle').getLineStyle(),
            silent: true,
            z2: -19
        }));
    },

    _prepareDataShadowInfo: function () {
        var dataZoomModel = this.dataZoomModel;
        var showDataShadow = dataZoomModel.get('showDataShadow');

        if (showDataShadow === false) {
            return;
        }

        // Find a representative series.
        var result;
        var ecModel = this.ecModel;

        dataZoomModel.eachTargetAxis(function (dimNames, axisIndex) {
            var seriesModels = dataZoomModel
                .getAxisProxy(dimNames.name, axisIndex)
                .getTargetSeriesModels();

            each$1(seriesModels, function (seriesModel) {
                if (result) {
                    return;
                }

                if (showDataShadow !== true && indexOf(
                        SHOW_DATA_SHADOW_SERIES_TYPE, seriesModel.get('type')
                    ) < 0
                ) {
                    return;
                }

                var thisAxis = ecModel.getComponent(dimNames.axis, axisIndex).axis;
                var otherDim = getOtherDim(dimNames.name);
                var otherAxisInverse;
                var coordSys = seriesModel.coordinateSystem;

                if (otherDim != null && coordSys.getOtherAxis) {
                    otherAxisInverse = coordSys.getOtherAxis(thisAxis).inverse;
                }

                otherDim = seriesModel.getData().mapDimension(otherDim);

                result = {
                    thisAxis: thisAxis,
                    series: seriesModel,
                    thisDim: dimNames.name,
                    otherDim: otherDim,
                    otherAxisInverse: otherAxisInverse
                };

            }, this);

        }, this);

        return result;
    },

    _renderHandle: function () {
        var displaybles = this._displayables;
        var handles = displaybles.handles = [];
        var handleLabels = displaybles.handleLabels = [];
        var barGroup = this._displayables.barGroup;
        var size = this._size;
        var dataZoomModel = this.dataZoomModel;

        barGroup.add(displaybles.filler = new Rect$1({
            draggable: true,
            cursor: getCursor(this._orient),
            drift: bind$3(this._onDragMove, this, 'all'),
            onmousemove: function (e) {
                // Fot mobile devicem, prevent screen slider on the button.
                stop(e.event);
            },
            ondragstart: bind$3(this._showDataInfo, this, true),
            ondragend: bind$3(this._onDragEnd, this),
            onmouseover: bind$3(this._showDataInfo, this, true),
            onmouseout: bind$3(this._showDataInfo, this, false),
            style: {
                fill: dataZoomModel.get('fillerColor'),
                textPosition: 'inside'
            }
        }));

        // Frame border.
        barGroup.add(new Rect$1({
            silent: true,
            subPixelOptimize: true,
            shape: {
                x: 0,
                y: 0,
                width: size[0],
                height: size[1]
            },
            style: {
                stroke: dataZoomModel.get('dataBackgroundColor')
                    || dataZoomModel.get('borderColor'),
                lineWidth: DEFAULT_FRAME_BORDER_WIDTH,
                fill: 'rgba(0,0,0,0)'
            }
        }));

        each$14([0, 1], function (handleIndex) {
            var path = createIcon(
                dataZoomModel.get('handleIcon'),
                {
                    cursor: getCursor(this._orient),
                    draggable: true,
                    drift: bind$3(this._onDragMove, this, handleIndex),
                    onmousemove: function (e) {
                        // Fot mobile devicem, prevent screen slider on the button.
                        stop(e.event);
                    },
                    ondragend: bind$3(this._onDragEnd, this),
                    onmouseover: bind$3(this._showDataInfo, this, true),
                    onmouseout: bind$3(this._showDataInfo, this, false)
                },
                {x: -1, y: 0, width: 2, height: 2}
            );

            var bRect = path.getBoundingRect();
            this._handleHeight = parsePercent$1(dataZoomModel.get('handleSize'), this._size[1]);
            this._handleWidth = bRect.width / bRect.height * this._handleHeight;

            path.setStyle(dataZoomModel.getModel('handleStyle').getItemStyle());
            var handleColor = dataZoomModel.get('handleColor');
            // Compatitable with previous version
            if (handleColor != null) {
                path.style.fill = handleColor;
            }

            barGroup.add(handles[handleIndex] = path);

            var textStyleModel = dataZoomModel.textStyleModel;

            this.group.add(
                handleLabels[handleIndex] = new Text({
                silent: true,
                invisible: true,
                style: {
                    x: 0, y: 0, text: '',
                    textVerticalAlign: 'middle',
                    textAlign: 'center',
                    textFill: textStyleModel.getTextColor(),
                    textFont: textStyleModel.getFont()
                },
                z2: 10
            }));

        }, this);
    },

    /**
     * @private
     */
    _resetInterval: function () {
        var range = this._range = this.dataZoomModel.getPercentRange();
        var viewExtent = this._getViewExtent();

        this._handleEnds = [
            linearMap$1(range[0], [0, 100], viewExtent, true),
            linearMap$1(range[1], [0, 100], viewExtent, true)
        ];
    },

    /**
     * @private
     * @param {(number|string)} handleIndex 0 or 1 or 'all'
     * @param {number} delta
     * @return {boolean} changed
     */
    _updateInterval: function (handleIndex, delta) {
        var dataZoomModel = this.dataZoomModel;
        var handleEnds = this._handleEnds;
        var viewExtend = this._getViewExtent();
        var minMaxSpan = dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
        var percentExtent = [0, 100];

        sliderMove(
            delta,
            handleEnds,
            viewExtend,
            dataZoomModel.get('zoomLock') ? 'all' : handleIndex,
            minMaxSpan.minSpan != null
                ? linearMap$1(minMaxSpan.minSpan, percentExtent, viewExtend, true) : null,
            minMaxSpan.maxSpan != null
                ? linearMap$1(minMaxSpan.maxSpan, percentExtent, viewExtend, true) : null
        );

        var lastRange = this._range;
        var range = this._range = asc$2([
            linearMap$1(handleEnds[0], viewExtend, percentExtent, true),
            linearMap$1(handleEnds[1], viewExtend, percentExtent, true)
        ]);

        return !lastRange || lastRange[0] !== range[0] || lastRange[1] !== range[1];
    },

    /**
     * @private
     */
    _updateView: function (nonRealtime) {
        var displaybles = this._displayables;
        var handleEnds = this._handleEnds;
        var handleInterval = asc$2(handleEnds.slice());
        var size = this._size;

        each$14([0, 1], function (handleIndex) {
            // Handles
            var handle = displaybles.handles[handleIndex];
            var handleHeight = this._handleHeight;
            handle.attr({
                scale: [handleHeight / 2, handleHeight / 2],
                position: [handleEnds[handleIndex], size[1] / 2 - handleHeight / 2]
            });
        }, this);

        // Filler
        displaybles.filler.setShape({
            x: handleInterval[0],
            y: 0,
            width: handleInterval[1] - handleInterval[0],
            height: size[1]
        });

        this._updateDataInfo(nonRealtime);
    },

    /**
     * @private
     */
    _updateDataInfo: function (nonRealtime) {
        var dataZoomModel = this.dataZoomModel;
        var displaybles = this._displayables;
        var handleLabels = displaybles.handleLabels;
        var orient = this._orient;
        var labelTexts = ['', ''];

        // FIXME
        // date型，支持formatter，autoformatter（ec2 date.getAutoFormatter）
        if (dataZoomModel.get('showDetail')) {
            var axisProxy = dataZoomModel.findRepresentativeAxisProxy();

            if (axisProxy) {
                var axis = axisProxy.getAxisModel().axis;
                var range = this._range;

                var dataInterval = nonRealtime
                    // See #4434, data and axis are not processed and reset yet in non-realtime mode.
                    ? axisProxy.calculateDataWindow({
                        start: range[0], end: range[1]
                    }).valueWindow
                    : axisProxy.getDataValueWindow();

                labelTexts = [
                    this._formatLabel(dataInterval[0], axis),
                    this._formatLabel(dataInterval[1], axis)
                ];
            }
        }

        var orderedHandleEnds = asc$2(this._handleEnds.slice());

        setLabel.call(this, 0);
        setLabel.call(this, 1);

        function setLabel(handleIndex) {
            // Label
            // Text should not transform by barGroup.
            // Ignore handlers transform
            var barTransform = getTransform(
                displaybles.handles[handleIndex].parent, this.group
            );
            var direction = transformDirection(
                handleIndex === 0 ? 'right' : 'left', barTransform
            );
            var offset = this._handleWidth / 2 + LABEL_GAP;
            var textPoint = applyTransform$1(
                [
                    orderedHandleEnds[handleIndex] + (handleIndex === 0 ? -offset : offset),
                    this._size[1] / 2
                ],
                barTransform
            );
            handleLabels[handleIndex].setStyle({
                x: textPoint[0],
                y: textPoint[1],
                textVerticalAlign: orient === HORIZONTAL ? 'middle' : direction,
                textAlign: orient === HORIZONTAL ? direction : 'center',
                text: labelTexts[handleIndex]
            });
        }
    },

    /**
     * @private
     */
    _formatLabel: function (value, axis) {
        var dataZoomModel = this.dataZoomModel;
        var labelFormatter = dataZoomModel.get('labelFormatter');

        var labelPrecision = dataZoomModel.get('labelPrecision');
        if (labelPrecision == null || labelPrecision === 'auto') {
            labelPrecision = axis.getPixelPrecision();
        }

        var valueStr = (value == null || isNaN(value))
            ? ''
            // FIXME Glue code
            : (axis.type === 'category' || axis.type === 'time')
                ? axis.scale.getLabel(Math.round(value))
                // param of toFixed should less then 20.
                : value.toFixed(Math.min(labelPrecision, 20));

        return isFunction$1(labelFormatter)
            ? labelFormatter(value, valueStr)
            : isString(labelFormatter)
            ? labelFormatter.replace('{value}', valueStr)
            : valueStr;
    },

    /**
     * @private
     * @param {boolean} showOrHide true: show, false: hide
     */
    _showDataInfo: function (showOrHide) {
        // Always show when drgging.
        showOrHide = this._dragging || showOrHide;

        var handleLabels = this._displayables.handleLabels;
        handleLabels[0].attr('invisible', !showOrHide);
        handleLabels[1].attr('invisible', !showOrHide);
    },

    _onDragMove: function (handleIndex, dx, dy) {
        this._dragging = true;

        // Transform dx, dy to bar coordination.
        var barTransform = this._displayables.barGroup.getLocalTransform();
        var vertex = applyTransform$1([dx, dy], barTransform, true);

        var changed = this._updateInterval(handleIndex, vertex[0]);

        var realtime = this.dataZoomModel.get('realtime');

        this._updateView(!realtime);

        // Avoid dispatch dataZoom repeatly but range not changed,
        // which cause bad visual effect when progressive enabled.
        changed && realtime && this._dispatchZoomAction();
    },

    _onDragEnd: function () {
        this._dragging = false;
        this._showDataInfo(false);

        // While in realtime mode and stream mode, dispatch action when
        // drag end will cause the whole view rerender, which is unnecessary.
        var realtime = this.dataZoomModel.get('realtime');
        !realtime && this._dispatchZoomAction();
    },

    _onClickPanelClick: function (e) {
        var size = this._size;
        var localPoint = this._displayables.barGroup.transformCoordToLocal(e.offsetX, e.offsetY);

        if (localPoint[0] < 0 || localPoint[0] > size[0]
            || localPoint[1] < 0 || localPoint[1] > size[1]
        ) {
            return;
        }

        var handleEnds = this._handleEnds;
        var center = (handleEnds[0] + handleEnds[1]) / 2;

        var changed = this._updateInterval('all', localPoint[0] - center);
        this._updateView();
        changed && this._dispatchZoomAction();
    },

    /**
     * This action will be throttled.
     * @private
     */
    _dispatchZoomAction: function () {
        var range = this._range;

        this.api.dispatchAction({
            type: 'dataZoom',
            from: this.uid,
            dataZoomId: this.dataZoomModel.id,
            start: range[0],
            end: range[1]
        });
    },

    /**
     * @private
     */
    _findCoordRect: function () {
        // Find the grid coresponding to the first axis referred by dataZoom.
        var rect;
        each$14(this.getTargetCoordInfo(), function (coordInfoList) {
            if (!rect && coordInfoList.length) {
                var coordSys = coordInfoList[0].model.coordinateSystem;
                rect = coordSys.getRect && coordSys.getRect();
            }
        });
        if (!rect) {
            var width = this.api.getWidth();
            var height = this.api.getHeight();
            rect = {
                x: width * 0.2,
                y: height * 0.2,
                width: width * 0.6,
                height: height * 0.6
            };
        }

        return rect;
    }

});

function getOtherDim(thisDim) {
    // FIXME
    // 这个逻辑和getOtherAxis里一致，但是写在这里是否不好
    var map$$1 = {x: 'y', y: 'x', radius: 'angle', angle: 'radius'};
    return map$$1[thisDim];
}

function getCursor(orient) {
    return orient === 'vertical' ? 'ns-resize' : 'ew-resize';
}

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

registerProcessor({

    // `dataZoomProcessor` will only be performed in needed series. Consider if
    // there is a line series and a pie series, it is better not to update the
    // line series if only pie series is needed to be updated.
    getTargetSeries: function (ecModel) {
        var seriesModelMap = createHashMap();

        ecModel.eachComponent('dataZoom', function (dataZoomModel) {
            dataZoomModel.eachTargetAxis(function (dimNames, axisIndex, dataZoomModel) {
                var axisProxy = dataZoomModel.getAxisProxy(dimNames.name, axisIndex);
                each$1(axisProxy.getTargetSeriesModels(), function (seriesModel) {
                    seriesModelMap.set(seriesModel.uid, seriesModel);
                });
            });
        });

        return seriesModelMap;
    },

    modifyOutputEnd: true,

    // Consider appendData, where filter should be performed. Because data process is
    // in block mode currently, it is not need to worry about that the overallProgress
    // execute every frame.
    overallReset: function (ecModel, api) {

        ecModel.eachComponent('dataZoom', function (dataZoomModel) {
            // We calculate window and reset axis here but not in model
            // init stage and not after action dispatch handler, because
            // reset should be called after seriesData.restoreData.
            dataZoomModel.eachTargetAxis(function (dimNames, axisIndex, dataZoomModel) {
                dataZoomModel.getAxisProxy(dimNames.name, axisIndex).reset(dataZoomModel, api);
            });

            // Caution: data zoom filtering is order sensitive when using
            // percent range and no min/max/scale set on axis.
            // For example, we have dataZoom definition:
            // [
            //      {xAxisIndex: 0, start: 30, end: 70},
            //      {yAxisIndex: 0, start: 20, end: 80}
            // ]
            // In this case, [20, 80] of y-dataZoom should be based on data
            // that have filtered by x-dataZoom using range of [30, 70],
            // but should not be based on full raw data. Thus sliding
            // x-dataZoom will change both ranges of xAxis and yAxis,
            // while sliding y-dataZoom will only change the range of yAxis.
            // So we should filter x-axis after reset x-axis immediately,
            // and then reset y-axis and filter y-axis.
            dataZoomModel.eachTargetAxis(function (dimNames, axisIndex, dataZoomModel) {
                dataZoomModel.getAxisProxy(dimNames.name, axisIndex).filterData(dataZoomModel, api);
            });
        });

        ecModel.eachComponent('dataZoom', function (dataZoomModel) {
            // Fullfill all of the range props so that user
            // is able to get them from chart.getOption().
            var axisProxy = dataZoomModel.findRepresentativeAxisProxy();
            var percentRange = axisProxy.getDataPercentWindow();
            var valueRange = axisProxy.getDataValueWindow();

            dataZoomModel.setRawRange({
                start: percentRange[0],
                end: percentRange[1],
                startValue: valueRange[0],
                endValue: valueRange[1]
            }, true);
        });
    }
});

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

registerAction('dataZoom', function (payload, ecModel) {

    var linkedNodesFinder = createLinkedNodesFinder(
        bind(ecModel.eachComponent, ecModel, 'dataZoom'),
        eachAxisDim$1,
        function (model, dimNames) {
            return model.get(dimNames.axisIndex);
        }
    );

    var effectedModels = [];

    ecModel.eachComponent(
        {mainType: 'dataZoom', query: payload},
        function (model, index) {
            effectedModels.push.apply(
                effectedModels, linkedNodesFinder(model).nodes
            );
        }
    );

    each$1(effectedModels, function (dataZoomModel, index) {
        dataZoomModel.setRawRange({
            start: payload.start,
            end: payload.end,
            startValue: payload.startValue,
            endValue: payload.endValue
        });
    });

});

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

DataZoomModel.extend({

    type: 'dataZoom.inside',

    /**
     * @protected
     */
    defaultOption: {
        disabled: false,   // Whether disable this inside zoom.
        zoomLock: false,   // Whether disable zoom but only pan.
        zoomOnMouseWheel: true, // Can be: true / false / 'shift' / 'ctrl' / 'alt'.
        moveOnMouseMove: true,   // Can be: true / false / 'shift' / 'ctrl' / 'alt'.
        moveOnMouseWheel: false, // Can be: true / false / 'shift' / 'ctrl' / 'alt'.
        preventDefaultMouseMove: true
    }
});

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var ATTR$1 = '\0_ec_interaction_mutex';

function take(zr, resourceKey, userKey) {
    var store = getStore(zr);
    store[resourceKey] = userKey;
}

function release(zr, resourceKey, userKey) {
    var store = getStore(zr);
    var uKey = store[resourceKey];

    if (uKey === userKey) {
        store[resourceKey] = null;
    }
}

function isTaken(zr, resourceKey) {
    return !!getStore(zr)[resourceKey];
}

function getStore(zr) {
    return zr[ATTR$1] || (zr[ATTR$1] = {});
}

/**
 * payload: {
 *     type: 'takeGlobalCursor',
 *     key: 'dataZoomSelect', or 'brush', or ...,
 *         If no userKey, release global cursor.
 * }
 */
registerAction(
    {type: 'takeGlobalCursor', event: 'globalCursorTaken', update: 'update'},
    function () {}
);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/**
 * @alias module:echarts/component/helper/RoamController
 * @constructor
 * @mixin {module:zrender/mixin/Eventful}
 *
 * @param {module:zrender/zrender~ZRender} zr
 */
function RoamController(zr) {

    /**
     * @type {Function}
     */
    this.pointerChecker;

    /**
     * @type {module:zrender}
     */
    this._zr = zr;

    /**
     * @type {Object}
     */
    this._opt = {};

    // Avoid two roamController bind the same handler
    var bind$$1 = bind;
    var mousedownHandler = bind$$1(mousedown, this);
    var mousemoveHandler = bind$$1(mousemove, this);
    var mouseupHandler = bind$$1(mouseup, this);
    var mousewheelHandler = bind$$1(mousewheel, this);
    var pinchHandler = bind$$1(pinch, this);

    Eventful.call(this);

    /**
     * @param {Function} pointerChecker
     *                   input: x, y
     *                   output: boolean
     */
    this.setPointerChecker = function (pointerChecker) {
        this.pointerChecker = pointerChecker;
    };

    /**
     * Notice: only enable needed types. For example, if 'zoom'
     * is not needed, 'zoom' should not be enabled, otherwise
     * default mousewheel behaviour (scroll page) will be disabled.
     *
     * @param  {boolean|string} [controlType=true] Specify the control type,
     *                          which can be null/undefined or true/false
     *                          or 'pan/move' or 'zoom'/'scale'
     * @param {Object} [opt]
     * @param {Object} [opt.zoomOnMouseWheel=true] The value can be: true / false / 'shift' / 'ctrl' / 'alt'.
     * @param {Object} [opt.moveOnMouseMove=true] The value can be: true / false / 'shift' / 'ctrl' / 'alt'.
     * @param {Object} [opt.moveOnMouseWheel=false] The value can be: true / false / 'shift' / 'ctrl' / 'alt'.
     * @param {Object} [opt.preventDefaultMouseMove=true] When pan.
     */
    this.enable = function (controlType, opt) {

        // Disable previous first
        this.disable();

        this._opt = defaults(clone(opt) || {}, {
            zoomOnMouseWheel: true,
            moveOnMouseMove: true,
            // By default, wheel do not trigger move.
            moveOnMouseWheel: false,
            preventDefaultMouseMove: true
        });

        if (controlType == null) {
            controlType = true;
        }

        if (controlType === true || (controlType === 'move' || controlType === 'pan')) {
            zr.on('mousedown', mousedownHandler);
            zr.on('mousemove', mousemoveHandler);
            zr.on('mouseup', mouseupHandler);
        }
        if (controlType === true || (controlType === 'scale' || controlType === 'zoom')) {
            zr.on('mousewheel', mousewheelHandler);
            zr.on('pinch', pinchHandler);
        }
    };

    this.disable = function () {
        zr.off('mousedown', mousedownHandler);
        zr.off('mousemove', mousemoveHandler);
        zr.off('mouseup', mouseupHandler);
        zr.off('mousewheel', mousewheelHandler);
        zr.off('pinch', pinchHandler);
    };

    this.dispose = this.disable;

    this.isDragging = function () {
        return this._dragging;
    };

    this.isPinching = function () {
        return this._pinching;
    };
}

mixin(RoamController, Eventful);


function mousedown(e) {
    if (isMiddleOrRightButtonOnMouseUpDown(e)
        || (e.target && e.target.draggable)
    ) {
        return;
    }

    var x = e.offsetX;
    var y = e.offsetY;

    // Only check on mosedown, but not mousemove.
    // Mouse can be out of target when mouse moving.
    if (this.pointerChecker && this.pointerChecker(e, x, y)) {
        this._x = x;
        this._y = y;
        this._dragging = true;
    }
}

function mousemove(e) {
    if (!this._dragging
        || !isAvailableBehavior('moveOnMouseMove', e, this._opt)
        || e.gestureEvent === 'pinch'
        || isTaken(this._zr, 'globalPan')
    ) {
        return;
    }

    var x = e.offsetX;
    var y = e.offsetY;

    var oldX = this._x;
    var oldY = this._y;

    var dx = x - oldX;
    var dy = y - oldY;

    this._x = x;
    this._y = y;

    this._opt.preventDefaultMouseMove && stop(e.event);

    trigger(this, 'pan', 'moveOnMouseMove', e, {
        dx: dx, dy: dy, oldX: oldX, oldY: oldY, newX: x, newY: y
    });
}

function mouseup(e) {
    if (!isMiddleOrRightButtonOnMouseUpDown(e)) {
        this._dragging = false;
    }
}

function mousewheel(e) {
    var shouldZoom = isAvailableBehavior('zoomOnMouseWheel', e, this._opt);
    var shouldMove = isAvailableBehavior('moveOnMouseWheel', e, this._opt);
    var wheelDelta = e.wheelDelta;
    var absWheelDeltaDelta = Math.abs(wheelDelta);
    var originX = e.offsetX;
    var originY = e.offsetY;

    // wheelDelta maybe -0 in chrome mac.
    if (wheelDelta === 0 || (!shouldZoom && !shouldMove)) {
        return;
    }

    // If both `shouldZoom` and `shouldMove` is true, trigger
    // their event both, and the final behavior is determined
    // by event listener themselves.

    if (shouldZoom) {
        // Convenience:
        // Mac and VM Windows on Mac: scroll up: zoom out.
        // Windows: scroll up: zoom in.

        // FIXME: Should do more test in different environment.
        // wheelDelta is too complicated in difference nvironment
        // (https://developer.mozilla.org/en-US/docs/Web/Events/mousewheel),
        // although it has been normallized by zrender.
        // wheelDelta of mouse wheel is bigger than touch pad.
        var factor = absWheelDeltaDelta > 3 ? 1.4 : absWheelDeltaDelta > 1 ? 1.2 : 1.1;
        var scale = wheelDelta > 0 ? factor : 1 / factor;
        checkPointerAndTrigger(this, 'zoom', 'zoomOnMouseWheel', e, {
            scale: scale, originX: originX, originY: originY
        });
    }

    if (shouldMove) {
        // FIXME: Should do more test in different environment.
        var absDelta = Math.abs(wheelDelta);
        // wheelDelta of mouse wheel is bigger than touch pad.
        var scrollDelta = (wheelDelta > 0 ? 1 : -1) * (absDelta > 3 ? 0.4 : absDelta > 1 ? 0.15 : 0.05);
        checkPointerAndTrigger(this, 'scrollMove', 'moveOnMouseWheel', e, {
            scrollDelta: scrollDelta, originX: originX, originY: originY
        });
    }
}

function pinch(e) {
    if (isTaken(this._zr, 'globalPan')) {
        return;
    }
    var scale = e.pinchScale > 1 ? 1.1 : 1 / 1.1;
    checkPointerAndTrigger(this, 'zoom', null, e, {
        scale: scale, originX: e.pinchX, originY: e.pinchY
    });
}

function checkPointerAndTrigger(controller, eventName, behaviorToCheck, e, contollerEvent) {
    if (controller.pointerChecker
        && controller.pointerChecker(e, contollerEvent.originX, contollerEvent.originY)
    ) {
        // When mouse is out of roamController rect,
        // default befavoius should not be be disabled, otherwise
        // page sliding is disabled, contrary to expectation.
        stop(e.event);

        trigger(controller, eventName, behaviorToCheck, e, contollerEvent);
    }
}

function trigger(controller, eventName, behaviorToCheck, e, contollerEvent) {
    // Also provide behavior checker for event listener, for some case that
    // multiple components share one listener.
    contollerEvent.isAvailableBehavior = bind(isAvailableBehavior, null, behaviorToCheck, e);
    controller.trigger(eventName, contollerEvent);
}

// settings: {
//     zoomOnMouseWheel
//     moveOnMouseMove
//     moveOnMouseWheel
// }
// The value can be: true / false / 'shift' / 'ctrl' / 'alt'.
function isAvailableBehavior(behaviorToCheck, e, settings) {
    var setting = settings[behaviorToCheck];
    return !behaviorToCheck || (
        setting && (!isString(setting) || e.event[setting + 'Key'])
    );
}

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

// Only create one roam controller for each coordinate system.
// one roam controller might be refered by two inside data zoom
// components (for example, one for x and one for y). When user
// pan or zoom, only dispatch one action for those data zoom
// components.

var ATTR = '\0_ec_dataZoom_roams';


/**
 * @public
 * @param {module:echarts/ExtensionAPI} api
 * @param {Object} dataZoomInfo
 * @param {string} dataZoomInfo.coordId
 * @param {Function} dataZoomInfo.containsPoint
 * @param {Array.<string>} dataZoomInfo.allCoordIds
 * @param {string} dataZoomInfo.dataZoomId
 * @param {Object} dataZoomInfo.getRange
 * @param {Function} dataZoomInfo.getRange.pan
 * @param {Function} dataZoomInfo.getRange.zoom
 * @param {Function} dataZoomInfo.getRange.scrollMove
 * @param {boolean} dataZoomInfo.dataZoomModel
 */
function register$1(api, dataZoomInfo) {
    var store = giveStore(api);
    var theDataZoomId = dataZoomInfo.dataZoomId;
    var theCoordId = dataZoomInfo.coordId;

    // Do clean when a dataZoom changes its target coordnate system.
    // Avoid memory leak, dispose all not-used-registered.
    each$1(store, function (record, coordId) {
        var dataZoomInfos = record.dataZoomInfos;
        if (dataZoomInfos[theDataZoomId]
            && indexOf(dataZoomInfo.allCoordIds, theCoordId) < 0
        ) {
            delete dataZoomInfos[theDataZoomId];
            record.count--;
        }
    });

    cleanStore(store);

    var record = store[theCoordId];
    // Create if needed.
    if (!record) {
        record = store[theCoordId] = {
            coordId: theCoordId,
            dataZoomInfos: {},
            count: 0
        };
        record.controller = createController(api, record);
        record.dispatchAction = curry(dispatchAction, api);
    }

    // Update reference of dataZoom.
    !(record.dataZoomInfos[theDataZoomId]) && record.count++;
    record.dataZoomInfos[theDataZoomId] = dataZoomInfo;

    var controllerParams = mergeControllerParams(record.dataZoomInfos);
    record.controller.enable(controllerParams.controlType, controllerParams.opt);

    // Consider resize, area should be always updated.
    record.controller.setPointerChecker(dataZoomInfo.containsPoint);

    // Update throttle.
    createOrUpdate(
        record,
        'dispatchAction',
        dataZoomInfo.dataZoomModel.get('throttle', true),
        'fixRate'
    );
}

/**
 * @public
 * @param {module:echarts/ExtensionAPI} api
 * @param {string} dataZoomId
 */
function unregister$1(api, dataZoomId) {
    var store = giveStore(api);

    each$1(store, function (record) {
        record.controller.dispose();
        var dataZoomInfos = record.dataZoomInfos;
        if (dataZoomInfos[dataZoomId]) {
            delete dataZoomInfos[dataZoomId];
            record.count--;
        }
    });

    cleanStore(store);
}

/**
 * @public
 */
function generateCoordId(coordModel) {
    return coordModel.type + '\0_' + coordModel.id;
}

/**
 * Key: coordId, value: {dataZoomInfos: [], count, controller}
 * @type {Array.<Object>}
 */
function giveStore(api) {
    // Mount store on zrender instance, so that we do not
    // need to worry about dispose.
    var zr = api.getZr();
    return zr[ATTR] || (zr[ATTR] = {});
}

function createController(api, newRecord) {
    var controller = new RoamController(api.getZr());

    each$1(['pan', 'zoom', 'scrollMove'], function (eventName) {
        controller.on(eventName, function (event) {
            var batch = [];

            each$1(newRecord.dataZoomInfos, function (info) {
                // Check whether the behaviors (zoomOnMouseWheel, moveOnMouseMove,
                // moveOnMouseWheel, ...) enabled.
                if (!event.isAvailableBehavior(info.dataZoomModel.option)) {
                    return;
                }

                var method = (info.getRange || {})[eventName];
                var range = method && method(newRecord.controller, event);

                !info.dataZoomModel.get('disabled', true) && range && batch.push({
                    dataZoomId: info.dataZoomId,
                    start: range[0],
                    end: range[1]
                });
            });

            batch.length && newRecord.dispatchAction(batch);
        });
    });

    return controller;
}

function cleanStore(store) {
    each$1(store, function (record, coordId) {
        if (!record.count) {
            record.controller.dispose();
            delete store[coordId];
        }
    });
}

/**
 * This action will be throttled.
 */
function dispatchAction(api, batch) {
    api.dispatchAction({
        type: 'dataZoom',
        batch: batch
    });
}

/**
 * Merge roamController settings when multiple dataZooms share one roamController.
 */
function mergeControllerParams(dataZoomInfos) {
    var controlType;
    // DO NOT use reserved word (true, false, undefined) as key literally. Even if encapsulated
    // as string, it is probably revert to reserved word by compress tool. See #7411.
    var prefix = 'type_';
    var typePriority = {
        'type_true': 2,
        'type_move': 1,
        'type_false': 0,
        'type_undefined': -1
    };
    var preventDefaultMouseMove = true;

    each$1(dataZoomInfos, function (dataZoomInfo) {
        var dataZoomModel = dataZoomInfo.dataZoomModel;
        var oneType = dataZoomModel.get('disabled', true)
            ? false
            : dataZoomModel.get('zoomLock', true)
            ? 'move'
            : true;
        if (typePriority[prefix + oneType] > typePriority[prefix + controlType]) {
            controlType = oneType;
        }

        // Prevent default move event by default. If one false, do not prevent. Otherwise
        // users may be confused why it does not work when multiple insideZooms exist.
        preventDefaultMouseMove &= dataZoomModel.get('preventDefaultMouseMove', true);
    });

    return {
        controlType: controlType,
        opt: {
            // RoamController will enable all of these functionalities,
            // and the final behavior is determined by its event listener
            // provided by each inside zoom.
            zoomOnMouseWheel: true,
            moveOnMouseMove: true,
            moveOnMouseWheel: true,
            preventDefaultMouseMove: !!preventDefaultMouseMove
        }
    };
}

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var bind$4 = bind;

var InsideZoomView = DataZoomView.extend({

    type: 'dataZoom.inside',

    /**
     * @override
     */
    init: function (ecModel, api) {
        /**
         * 'throttle' is used in this.dispatchAction, so we save range
         * to avoid missing some 'pan' info.
         * @private
         * @type {Array.<number>}
         */
        this._range;
    },

    /**
     * @override
     */
    render: function (dataZoomModel, ecModel, api, payload) {
        InsideZoomView.superApply(this, 'render', arguments);

        // Hence the `throttle` util ensures to preserve command order,
        // here simply updating range all the time will not cause missing
        // any of the the roam change.
        this._range = dataZoomModel.getPercentRange();

        // Reset controllers.
        each$1(this.getTargetCoordInfo(), function (coordInfoList, coordSysName) {

            var allCoordIds = map(coordInfoList, function (coordInfo) {
                return generateCoordId(coordInfo.model);
            });

            each$1(coordInfoList, function (coordInfo) {
                var coordModel = coordInfo.model;

                var getRange = {};
                each$1(['pan', 'zoom', 'scrollMove'], function (eventName) {
                    getRange[eventName] = bind$4(roamHandlers[eventName], this, coordInfo, coordSysName);
                }, this);

                register$1(
                    api,
                    {
                        coordId: generateCoordId(coordModel),
                        allCoordIds: allCoordIds,
                        containsPoint: function (e, x, y) {
                            return coordModel.coordinateSystem.containPoint([x, y]);
                        },
                        dataZoomId: dataZoomModel.id,
                        dataZoomModel: dataZoomModel,
                        getRange: getRange
                    }
                );
            }, this);

        }, this);
    },

    /**
     * @override
     */
    dispose: function () {
        unregister$1(this.api, this.dataZoomModel.id);
        InsideZoomView.superApply(this, 'dispose', arguments);
        this._range = null;
    }

});

var roamHandlers = {

    /**
     * @this {module:echarts/component/dataZoom/InsideZoomView}
     */
    zoom: function (coordInfo, coordSysName, controller, e) {
        var lastRange = this._range;
        var range = lastRange.slice();

        // Calculate transform by the first axis.
        var axisModel = coordInfo.axisModels[0];
        if (!axisModel) {
            return;
        }

        var directionInfo = getDirectionInfo[coordSysName](
            null, [e.originX, e.originY], axisModel, controller, coordInfo
        );
        var percentPoint = (
            directionInfo.signal > 0
                ? (directionInfo.pixelStart + directionInfo.pixelLength - directionInfo.pixel)
                : (directionInfo.pixel - directionInfo.pixelStart)
            ) / directionInfo.pixelLength * (range[1] - range[0]) + range[0];

        var scale = Math.max(1 / e.scale, 0);
        range[0] = (range[0] - percentPoint) * scale + percentPoint;
        range[1] = (range[1] - percentPoint) * scale + percentPoint;

        // Restrict range.
        var minMaxSpan = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();

        sliderMove(0, range, [0, 100], 0, minMaxSpan.minSpan, minMaxSpan.maxSpan);

        this._range = range;

        if (lastRange[0] !== range[0] || lastRange[1] !== range[1]) {
            return range;
        }
    },

    /**
     * @this {module:echarts/component/dataZoom/InsideZoomView}
     */
    pan: makeMover(function (range, axisModel, coordInfo, coordSysName, controller, e) {
        var directionInfo = getDirectionInfo[coordSysName](
            [e.oldX, e.oldY], [e.newX, e.newY], axisModel, controller, coordInfo
        );

        return directionInfo.signal
            * (range[1] - range[0])
            * directionInfo.pixel / directionInfo.pixelLength;
    }),

    /**
     * @this {module:echarts/component/dataZoom/InsideZoomView}
     */
    scrollMove: makeMover(function (range, axisModel, coordInfo, coordSysName, controller, e) {
        var directionInfo = getDirectionInfo[coordSysName](
            [0, 0], [e.scrollDelta, e.scrollDelta], axisModel, controller, coordInfo
        );
        return directionInfo.signal * (range[1] - range[0]) * e.scrollDelta;
    })
};

function makeMover(getPercentDelta) {
    return function (coordInfo, coordSysName, controller, e) {
        var lastRange = this._range;
        var range = lastRange.slice();

        // Calculate transform by the first axis.
        var axisModel = coordInfo.axisModels[0];
        if (!axisModel) {
            return;
        }

        var percentDelta = getPercentDelta(
            range, axisModel, coordInfo, coordSysName, controller, e
        );

        sliderMove(percentDelta, range, [0, 100], 'all');

        this._range = range;

        if (lastRange[0] !== range[0] || lastRange[1] !== range[1]) {
            return range;
        }
    };
}

var getDirectionInfo = {

    grid: function (oldPoint, newPoint, axisModel, controller, coordInfo) {
        var axis = axisModel.axis;
        var ret = {};
        var rect = coordInfo.model.coordinateSystem.getRect();
        oldPoint = oldPoint || [0, 0];

        if (axis.dim === 'x') {
            ret.pixel = newPoint[0] - oldPoint[0];
            ret.pixelLength = rect.width;
            ret.pixelStart = rect.x;
            ret.signal = axis.inverse ? 1 : -1;
        }
        else { // axis.dim === 'y'
            ret.pixel = newPoint[1] - oldPoint[1];
            ret.pixelLength = rect.height;
            ret.pixelStart = rect.y;
            ret.signal = axis.inverse ? -1 : 1;
        }

        return ret;
    },

    polar: function (oldPoint, newPoint, axisModel, controller, coordInfo) {
        var axis = axisModel.axis;
        var ret = {};
        var polar = coordInfo.model.coordinateSystem;
        var radiusExtent = polar.getRadiusAxis().getExtent();
        var angleExtent = polar.getAngleAxis().getExtent();

        oldPoint = oldPoint ? polar.pointToCoord(oldPoint) : [0, 0];
        newPoint = polar.pointToCoord(newPoint);

        if (axisModel.mainType === 'radiusAxis') {
            ret.pixel = newPoint[0] - oldPoint[0];
            // ret.pixelLength = Math.abs(radiusExtent[1] - radiusExtent[0]);
            // ret.pixelStart = Math.min(radiusExtent[0], radiusExtent[1]);
            ret.pixelLength = radiusExtent[1] - radiusExtent[0];
            ret.pixelStart = radiusExtent[0];
            ret.signal = axis.inverse ? 1 : -1;
        }
        else { // 'angleAxis'
            ret.pixel = newPoint[1] - oldPoint[1];
            // ret.pixelLength = Math.abs(angleExtent[1] - angleExtent[0]);
            // ret.pixelStart = Math.min(angleExtent[0], angleExtent[1]);
            ret.pixelLength = angleExtent[1] - angleExtent[0];
            ret.pixelStart = angleExtent[0];
            ret.signal = axis.inverse ? -1 : 1;
        }

        return ret;
    },

    singleAxis: function (oldPoint, newPoint, axisModel, controller, coordInfo) {
        var axis = axisModel.axis;
        var rect = coordInfo.model.coordinateSystem.getRect();
        var ret = {};

        oldPoint = oldPoint || [0, 0];

        if (axis.orient === 'horizontal') {
            ret.pixel = newPoint[0] - oldPoint[0];
            ret.pixelLength = rect.width;
            ret.pixelStart = rect.x;
            ret.signal = axis.inverse ? 1 : -1;
        }
        else { // 'vertical'
            ret.pixel = newPoint[1] - oldPoint[1];
            ret.pixelLength = rect.height;
            ret.pixelStart = rect.y;
            ret.signal = axis.inverse ? -1 : 1;
        }

        return ret;
    }
};

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



// Do not include './dataZoomSelect',
// since it only work for toolbox dataZoom.

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var features = {};

function register$2(name, ctor) {
    features[name] = ctor;
}

function get$1(name) {
    return features[name];
}

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var ToolboxModel = extendComponentModel({

    type: 'toolbox',

    layoutMode: {
        type: 'box',
        ignoreSize: true
    },

    optionUpdated: function () {
        ToolboxModel.superApply(this, 'optionUpdated', arguments);

        each$1(this.option.feature, function (featureOpt, featureName) {
            var Feature = get$1(featureName);
            Feature && merge(featureOpt, Feature.defaultOption);
        });
    },

    defaultOption: {

        show: true,

        z: 6,

        zlevel: 0,

        orient: 'horizontal',

        left: 'right',

        top: 'top',

        // right
        // bottom

        backgroundColor: 'transparent',

        borderColor: '#ccc',

        borderRadius: 0,

        borderWidth: 0,

        padding: 5,

        itemSize: 15,

        itemGap: 8,

        showTitle: true,

        iconStyle: {
            borderColor: '#666',
            color: 'none'
        },
        emphasis: {
            iconStyle: {
                borderColor: '#3E98C5'
            }
        },
        // textStyle: {},

        // feature

        tooltip: {
            show: false
        }
    }
});

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

extendComponentView({

    type: 'toolbox',

    render: function (toolboxModel, ecModel, api, payload) {
        var group = this.group;
        group.removeAll();

        if (!toolboxModel.get('show')) {
            return;
        }

        var itemSize = +toolboxModel.get('itemSize');
        var featureOpts = toolboxModel.get('feature') || {};
        var features = this._features || (this._features = {});

        var featureNames = [];
        each$1(featureOpts, function (opt, name) {
            featureNames.push(name);
        });

        (new DataDiffer(this._featureNames || [], featureNames))
            .add(processFeature)
            .update(processFeature)
            .remove(curry(processFeature, null))
            .execute();

        // Keep for diff.
        this._featureNames = featureNames;

        function processFeature(newIndex, oldIndex) {
            var featureName = featureNames[newIndex];
            var oldName = featureNames[oldIndex];
            var featureOpt = featureOpts[featureName];
            var featureModel = new Model(featureOpt, toolboxModel, toolboxModel.ecModel);
            var feature;

            if (featureName && !oldName) { // Create
                if (isUserFeatureName(featureName)) {
                    feature = {
                        model: featureModel,
                        onclick: featureModel.option.onclick,
                        featureName: featureName
                    };
                }
                else {
                    var Feature = get$1(featureName);
                    if (!Feature) {
                        return;
                    }
                    feature = new Feature(featureModel, ecModel, api);
                }
                features[featureName] = feature;
            }
            else {
                feature = features[oldName];
                // If feature does not exsit.
                if (!feature) {
                    return;
                }
                feature.model = featureModel;
                feature.ecModel = ecModel;
                feature.api = api;
            }

            if (!featureName && oldName) {
                feature.dispose && feature.dispose(ecModel, api);
                return;
            }

            if (!featureModel.get('show') || feature.unusable) {
                feature.remove && feature.remove(ecModel, api);
                return;
            }

            createIconPaths(featureModel, feature, featureName);

            featureModel.setIconStatus = function (iconName, status) {
                var option = this.option;
                var iconPaths = this.iconPaths;
                option.iconStatus = option.iconStatus || {};
                option.iconStatus[iconName] = status;
                // FIXME
                iconPaths[iconName] && iconPaths[iconName].trigger(status);
            };

            if (feature.render) {
                feature.render(featureModel, ecModel, api, payload);
            }
        }

        function createIconPaths(featureModel, feature, featureName) {
            var iconStyleModel = featureModel.getModel('iconStyle');
            var iconStyleEmphasisModel = featureModel.getModel('emphasis.iconStyle');

            // If one feature has mutiple icon. they are orginaized as
            // {
            //     icon: {
            //         foo: '',
            //         bar: ''
            //     },
            //     title: {
            //         foo: '',
            //         bar: ''
            //     }
            // }
            var icons = feature.getIcons ? feature.getIcons() : featureModel.get('icon');
            var titles = featureModel.get('title') || {};
            if (typeof icons === 'string') {
                var icon = icons;
                var title = titles;
                icons = {};
                titles = {};
                icons[featureName] = icon;
                titles[featureName] = title;
            }
            var iconPaths = featureModel.iconPaths = {};
            each$1(icons, function (iconStr, iconName) {
                var path = createIcon(
                    iconStr,
                    {},
                    {
                        x: -itemSize / 2,
                        y: -itemSize / 2,
                        width: itemSize,
                        height: itemSize
                    }
                );
                path.setStyle(iconStyleModel.getItemStyle());
                path.hoverStyle = iconStyleEmphasisModel.getItemStyle();

                var tooltipModel = toolboxModel.getModel('tooltip');
                if (tooltipModel && tooltipModel.get('show')) {
                    path.attr('tooltip', extend({
                        content: titles[iconName],
                        formatter: tooltipModel.get('formatter', true)
                            || function () {
                                return titles[iconName];
                            },
                        formatterParams: {
                            componentType: 'toolbox',
                            name: iconName,
                            title: titles[iconName],
                            $vars: ['name', 'title']
                        },
                        position: tooltipModel.get('position', true) || 'bottom'
                    }, tooltipModel.option));
                }

                setHoverStyle(path);

                if (toolboxModel.get('showTitle')) {
                    path.__title = titles[iconName];
                    path.on('mouseover', function () {
                            // Should not reuse above hoverStyle, which might be modified.
                            var hoverStyle = iconStyleEmphasisModel.getItemStyle();
                            path.setStyle({
                                text: titles[iconName],
                                textPosition: iconStyleEmphasisModel.get('textPosition') || 'bottom',
                                textFill: iconStyleEmphasisModel.get('textFill') || hoverStyle.fill || hoverStyle.stroke || '#000',
                                textAlign: iconStyleEmphasisModel.get('textAlign') || 'center',
                                textBackgroundColor: iconStyleEmphasisModel.get('textBackgroundColor'),
                                textBorderRadius: iconStyleEmphasisModel.get('textBorderRadius'),
                                textPadding: iconStyleEmphasisModel.get('textPadding')
                            });
                        })
                        .on('mouseout', function () {
                            path.setStyle({
                                textFill: null,
                                textBackgroundColor: null
                            });
                        });
                }
                path.trigger(featureModel.get('iconStatus.' + iconName) || 'normal');

                group.add(path);
                path.on('click', bind(
                    feature.onclick, feature, ecModel, api, iconName
                ));

                iconPaths[iconName] = path;
            });
        }

        layout$2(group, toolboxModel, api);
        // Render background after group is layout
        // FIXME
        group.add(makeBackground(group.getBoundingRect(), toolboxModel));

        // Adjust icon title positions to avoid them out of screen
        group.eachChild(function (icon) {
            var titleText = icon.__title;
            var hoverStyle = icon.hoverStyle;
            // May be background element
            if (hoverStyle && titleText) {
                var rect = getBoundingRect(
                    titleText, makeFont(hoverStyle)
                );
                var offsetX = icon.position[0] + group.position[0];
                var offsetY = icon.position[1] + group.position[1] + itemSize;

                var needPutOnTop = false;
                if (offsetY + rect.height > api.getHeight()) {
                    hoverStyle.textPosition = 'top';
                    needPutOnTop = true;
                }
                var topOffset = needPutOnTop ? (-5 - rect.height) : (itemSize + 8);
                if (offsetX + rect.width / 2 > api.getWidth()) {
                    hoverStyle.textPosition = ['100%', topOffset];
                    hoverStyle.textAlign = 'right';
                }
                else if (offsetX - rect.width / 2 < 0) {
                    hoverStyle.textPosition = [0, topOffset];
                    hoverStyle.textAlign = 'left';
                }
            }
        });
    },

    updateView: function (toolboxModel, ecModel, api, payload) {
        each$1(this._features, function (feature) {
            feature.updateView && feature.updateView(feature.model, ecModel, api, payload);
        });
    },

    // updateLayout: function (toolboxModel, ecModel, api, payload) {
    //     zrUtil.each(this._features, function (feature) {
    //         feature.updateLayout && feature.updateLayout(feature.model, ecModel, api, payload);
    //     });
    // },

    remove: function (ecModel, api) {
        each$1(this._features, function (feature) {
            feature.remove && feature.remove(ecModel, api);
        });
        this.group.removeAll();
    },

    dispose: function (ecModel, api) {
        each$1(this._features, function (feature) {
            feature.dispose && feature.dispose(ecModel, api);
        });
    }
});

function isUserFeatureName(featureName) {
    return featureName.indexOf('my') === 0;
}

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/* global Uint8Array */

var saveAsImageLang = lang.toolbox.saveAsImage;

function SaveAsImage(model) {
    this.model = model;
}

SaveAsImage.defaultOption = {
    show: true,
    icon: 'M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0',
    title: saveAsImageLang.title,
    type: 'png',
    // Default use option.backgroundColor
    // backgroundColor: '#fff',
    connectedBackgroundColor: '#fff',
    name: '',
    excludeComponents: ['toolbox'],
    pixelRatio: 1,
    lang: saveAsImageLang.lang.slice()
};

SaveAsImage.prototype.unusable = !env$1.canvasSupported;

var proto$2 = SaveAsImage.prototype;

proto$2.onclick = function (ecModel, api) {
    var model = this.model;
    var title = model.get('name') || ecModel.get('title.0.text') || 'echarts';
    var type = model.get('type', true) || 'png';
    var url = api.getConnectedDataURL({
        type: type,
        backgroundColor: model.get('backgroundColor', true)
            || ecModel.get('backgroundColor') || '#fff',
        connectedBackgroundColor: model.get('connectedBackgroundColor'),
        excludeComponents: model.get('excludeComponents'),
        pixelRatio: model.get('pixelRatio')
    });
    // Chrome and Firefox
    if (typeof MouseEvent === 'function' && !env$1.browser.ie && !env$1.browser.edge) {
        var $a = document.createElement('a');
        $a.download = title + '.' + type;
        $a.target = '_blank';
        $a.href = url;
        var evt = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: false
        });
        $a.dispatchEvent(evt);
    }
    // IE
    else {
        if (window.navigator.msSaveOrOpenBlob) {
            var bstr = atob(url.split(',')[1]);
            var n = bstr.length;
            var u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            var blob = new Blob([u8arr]);
            window.navigator.msSaveOrOpenBlob(blob, title + '.' + type);
        }
        else {
            var lang$$1 = model.get('lang');
            var html = ''
                + '<body style="margin:0;">'
                + '<img src="' + url + '" style="max-width:100%;" title="' + ((lang$$1 && lang$$1[0]) || '') + '" />'
                + '</body>';
            var tab = window.open();
            tab.document.write(html);
        }
    }
};

register$2(
    'saveAsImage', SaveAsImage
);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var magicTypeLang = lang.toolbox.magicType;

function MagicType(model) {
    this.model = model;
}

MagicType.defaultOption = {
    show: true,
    type: [],
    // Icon group
    icon: {
        /* eslint-disable */
        line: 'M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4',
        bar: 'M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7',
        stack: 'M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z', // jshint ignore:line
        tiled: 'M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z'
        /* eslint-enable */
    },
    // `line`, `bar`, `stack`, `tiled`
    title: clone(magicTypeLang.title),
    option: {},
    seriesIndex: {}
};

var proto$3 = MagicType.prototype;

proto$3.getIcons = function () {
    var model = this.model;
    var availableIcons = model.get('icon');
    var icons = {};
    each$1(model.get('type'), function (type) {
        if (availableIcons[type]) {
            icons[type] = availableIcons[type];
        }
    });
    return icons;
};

var seriesOptGenreator = {
    'line': function (seriesType, seriesId, seriesModel, model) {
        if (seriesType === 'bar') {
            return merge({
                id: seriesId,
                type: 'line',
                // Preserve data related option
                data: seriesModel.get('data'),
                stack: seriesModel.get('stack'),
                markPoint: seriesModel.get('markPoint'),
                markLine: seriesModel.get('markLine')
            }, model.get('option.line') || {}, true);
        }
    },
    'bar': function (seriesType, seriesId, seriesModel, model) {
        if (seriesType === 'line') {
            return merge({
                id: seriesId,
                type: 'bar',
                // Preserve data related option
                data: seriesModel.get('data'),
                stack: seriesModel.get('stack'),
                markPoint: seriesModel.get('markPoint'),
                markLine: seriesModel.get('markLine')
            }, model.get('option.bar') || {}, true);
        }
    },
    'stack': function (seriesType, seriesId, seriesModel, model) {
        if (seriesType === 'line' || seriesType === 'bar') {
            return merge({
                id: seriesId,
                stack: '__ec_magicType_stack__'
            }, model.get('option.stack') || {}, true);
        }
    },
    'tiled': function (seriesType, seriesId, seriesModel, model) {
        if (seriesType === 'line' || seriesType === 'bar') {
            return merge({
                id: seriesId,
                stack: ''
            }, model.get('option.tiled') || {}, true);
        }
    }
};

var radioTypes = [
    ['line', 'bar'],
    ['stack', 'tiled']
];

proto$3.onclick = function (ecModel, api, type) {
    var model = this.model;
    var seriesIndex = model.get('seriesIndex.' + type);
    // Not supported magicType
    if (!seriesOptGenreator[type]) {
        return;
    }
    var newOption = {
        series: []
    };
    var generateNewSeriesTypes = function (seriesModel) {
        var seriesType = seriesModel.subType;
        var seriesId = seriesModel.id;
        var newSeriesOpt = seriesOptGenreator[type](
            seriesType, seriesId, seriesModel, model
        );
        if (newSeriesOpt) {
            // PENDING If merge original option?
            defaults(newSeriesOpt, seriesModel.option);
            newOption.series.push(newSeriesOpt);
        }
        // Modify boundaryGap
        var coordSys = seriesModel.coordinateSystem;
        if (coordSys && coordSys.type === 'cartesian2d' && (type === 'line' || type === 'bar')) {
            var categoryAxis = coordSys.getAxesByScale('ordinal')[0];
            if (categoryAxis) {
                var axisDim = categoryAxis.dim;
                var axisType = axisDim + 'Axis';
                var axisModel = ecModel.queryComponents({
                    mainType: axisType,
                    index: seriesModel.get(name + 'Index'),
                    id: seriesModel.get(name + 'Id')
                })[0];
                var axisIndex = axisModel.componentIndex;

                newOption[axisType] = newOption[axisType] || [];
                for (var i = 0; i <= axisIndex; i++) {
                    newOption[axisType][axisIndex] = newOption[axisType][axisIndex] || {};
                }
                newOption[axisType][axisIndex].boundaryGap = type === 'bar';
            }
        }
    };

    each$1(radioTypes, function (radio) {
        if (indexOf(radio, type) >= 0) {
            each$1(radio, function (item) {
                model.setIconStatus(item, 'normal');
            });
        }
    });

    model.setIconStatus(type, 'emphasis');

    ecModel.eachComponent(
        {
            mainType: 'series',
            query: seriesIndex == null ? null : {
                seriesIndex: seriesIndex
            }
        }, generateNewSeriesTypes
    );
    api.dispatchAction({
        type: 'changeMagicType',
        currentType: type,
        newOption: newOption
    });
};

registerAction({
    type: 'changeMagicType',
    event: 'magicTypeChanged',
    update: 'prepareAndUpdate'
}, function (payload, ecModel) {
    ecModel.mergeOption(payload.newOption);
});

register$2('magicType', MagicType);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var dataViewLang = lang.toolbox.dataView;

var BLOCK_SPLITER = new Array(60).join('-');
var ITEM_SPLITER = '\t';
/**
 * Group series into two types
 *  1. on category axis, like line, bar
 *  2. others, like scatter, pie
 * @param {module:echarts/model/Global} ecModel
 * @return {Object}
 * @inner
 */
function groupSeries(ecModel) {
    var seriesGroupByCategoryAxis = {};
    var otherSeries = [];
    var meta = [];
    ecModel.eachRawSeries(function (seriesModel) {
        var coordSys = seriesModel.coordinateSystem;

        if (coordSys && (coordSys.type === 'cartesian2d' || coordSys.type === 'polar')) {
            var baseAxis = coordSys.getBaseAxis();
            if (baseAxis.type === 'category') {
                var key = baseAxis.dim + '_' + baseAxis.index;
                if (!seriesGroupByCategoryAxis[key]) {
                    seriesGroupByCategoryAxis[key] = {
                        categoryAxis: baseAxis,
                        valueAxis: coordSys.getOtherAxis(baseAxis),
                        series: []
                    };
                    meta.push({
                        axisDim: baseAxis.dim,
                        axisIndex: baseAxis.index
                    });
                }
                seriesGroupByCategoryAxis[key].series.push(seriesModel);
            }
            else {
                otherSeries.push(seriesModel);
            }
        }
        else {
            otherSeries.push(seriesModel);
        }
    });

    return {
        seriesGroupByCategoryAxis: seriesGroupByCategoryAxis,
        other: otherSeries,
        meta: meta
    };
}

/**
 * Assemble content of series on cateogory axis
 * @param {Array.<module:echarts/model/Series>} series
 * @return {string}
 * @inner
 */
function assembleSeriesWithCategoryAxis(series) {
    var tables = [];
    each$1(series, function (group, key) {
        var categoryAxis = group.categoryAxis;
        var valueAxis = group.valueAxis;
        var valueAxisDim = valueAxis.dim;

        var headers = [' '].concat(map(group.series, function (series) {
            return series.name;
        }));
        var columns = [categoryAxis.model.getCategories()];
        each$1(group.series, function (series) {
            columns.push(series.getRawData().mapArray(valueAxisDim, function (val) {
                return val;
            }));
        });
        // Assemble table content
        var lines = [headers.join(ITEM_SPLITER)];
        for (var i = 0; i < columns[0].length; i++) {
            var items = [];
            for (var j = 0; j < columns.length; j++) {
                items.push(columns[j][i]);
            }
            lines.push(items.join(ITEM_SPLITER));
        }
        tables.push(lines.join('\n'));
    });
    return tables.join('\n\n' + BLOCK_SPLITER + '\n\n');
}

/**
 * Assemble content of other series
 * @param {Array.<module:echarts/model/Series>} series
 * @return {string}
 * @inner
 */
function assembleOtherSeries(series) {
    return map(series, function (series) {
        var data = series.getRawData();
        var lines = [series.name];
        var vals = [];
        data.each(data.dimensions, function () {
            var argLen = arguments.length;
            var dataIndex = arguments[argLen - 1];
            var name = data.getName(dataIndex);
            for (var i = 0; i < argLen - 1; i++) {
                vals[i] = arguments[i];
            }
            lines.push((name ? (name + ITEM_SPLITER) : '') + vals.join(ITEM_SPLITER));
        });
        return lines.join('\n');
    }).join('\n\n' + BLOCK_SPLITER + '\n\n');
}

/**
 * @param {module:echarts/model/Global}
 * @return {Object}
 * @inner
 */
function getContentFromModel(ecModel) {

    var result = groupSeries(ecModel);

    return {
        value: filter([
                assembleSeriesWithCategoryAxis(result.seriesGroupByCategoryAxis),
                assembleOtherSeries(result.other)
            ], function (str) {
                return str.replace(/[\n\t\s]/g, '');
            }).join('\n\n' + BLOCK_SPLITER + '\n\n'),

        meta: result.meta
    };
}


function trim$1(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
/**
 * If a block is tsv format
 */
function isTSVFormat(block) {
    // Simple method to find out if a block is tsv format
    var firstLine = block.slice(0, block.indexOf('\n'));
    if (firstLine.indexOf(ITEM_SPLITER) >= 0) {
        return true;
    }
}

var itemSplitRegex = new RegExp('[' + ITEM_SPLITER + ']+', 'g');
/**
 * @param {string} tsv
 * @return {Object}
 */
function parseTSVContents(tsv) {
    var tsvLines = tsv.split(/\n+/g);
    var headers = trim$1(tsvLines.shift()).split(itemSplitRegex);

    var categories = [];
    var series = map(headers, function (header) {
        return {
            name: header,
            data: []
        };
    });
    for (var i = 0; i < tsvLines.length; i++) {
        var items = trim$1(tsvLines[i]).split(itemSplitRegex);
        categories.push(items.shift());
        for (var j = 0; j < items.length; j++) {
            series[j] && (series[j].data[i] = items[j]);
        }
    }
    return {
        series: series,
        categories: categories
    };
}

/**
 * @param {string} str
 * @return {Array.<Object>}
 * @inner
 */
function parseListContents(str) {
    var lines = str.split(/\n+/g);
    var seriesName = trim$1(lines.shift());

    var data = [];
    for (var i = 0; i < lines.length; i++) {
        var items = trim$1(lines[i]).split(itemSplitRegex);
        var name = '';
        var value;
        var hasName = false;
        if (isNaN(items[0])) { // First item is name
            hasName = true;
            name = items[0];
            items = items.slice(1);
            data[i] = {
                name: name,
                value: []
            };
            value = data[i].value;
        }
        else {
            value = data[i] = [];
        }
        for (var j = 0; j < items.length; j++) {
            value.push(+items[j]);
        }
        if (value.length === 1) {
            hasName ? (data[i].value = value[0]) : (data[i] = value[0]);
        }
    }

    return {
        name: seriesName,
        data: data
    };
}

/**
 * @param {string} str
 * @param {Array.<Object>} blockMetaList
 * @return {Object}
 * @inner
 */
function parseContents(str, blockMetaList) {
    var blocks = str.split(new RegExp('\n*' + BLOCK_SPLITER + '\n*', 'g'));
    var newOption = {
        series: []
    };
    each$1(blocks, function (block, idx) {
        if (isTSVFormat(block)) {
            var result = parseTSVContents(block);
            var blockMeta = blockMetaList[idx];
            var axisKey = blockMeta.axisDim + 'Axis';

            if (blockMeta) {
                newOption[axisKey] = newOption[axisKey] || [];
                newOption[axisKey][blockMeta.axisIndex] = {
                    data: result.categories
                };
                newOption.series = newOption.series.concat(result.series);
            }
        }
        else {
            var result = parseListContents(block);
            newOption.series.push(result);
        }
    });
    return newOption;
}

/**
 * @alias {module:echarts/component/toolbox/feature/DataView}
 * @constructor
 * @param {module:echarts/model/Model} model
 */
function DataView(model) {

    this._dom = null;

    this.model = model;
}

DataView.defaultOption = {
    show: true,
    readOnly: false,
    optionToContent: null,
    contentToOption: null,

    icon: 'M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28',
    title: clone(dataViewLang.title),
    lang: clone(dataViewLang.lang),
    backgroundColor: '#fff',
    textColor: '#000',
    textareaColor: '#fff',
    textareaBorderColor: '#333',
    buttonColor: '#c23531',
    buttonTextColor: '#fff'
};

DataView.prototype.onclick = function (ecModel, api) {
    var container = api.getDom();
    var model = this.model;
    if (this._dom) {
        container.removeChild(this._dom);
    }
    var root = document.createElement('div');
    root.style.cssText = 'position:absolute;left:5px;top:5px;bottom:5px;right:5px;';
    root.style.backgroundColor = model.get('backgroundColor') || '#fff';

    // Create elements
    var header = document.createElement('h4');
    var lang$$1 = model.get('lang') || [];
    header.innerHTML = lang$$1[0] || model.get('title');
    header.style.cssText = 'margin: 10px 20px;';
    header.style.color = model.get('textColor');

    var viewMain = document.createElement('div');
    var textarea = document.createElement('textarea');
    viewMain.style.cssText = 'display:block;width:100%;overflow:auto;';

    var optionToContent = model.get('optionToContent');
    var contentToOption = model.get('contentToOption');
    var result = getContentFromModel(ecModel);
    if (typeof optionToContent === 'function') {
        var htmlOrDom = optionToContent(api.getOption());
        if (typeof htmlOrDom === 'string') {
            viewMain.innerHTML = htmlOrDom;
        }
        else if (isDom(htmlOrDom)) {
            viewMain.appendChild(htmlOrDom);
        }
    }
    else {
        // Use default textarea
        viewMain.appendChild(textarea);
        textarea.readOnly = model.get('readOnly');
        textarea.style.cssText = 'width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;';
        textarea.style.color = model.get('textColor');
        textarea.style.borderColor = model.get('textareaBorderColor');
        textarea.style.backgroundColor = model.get('textareaColor');
        textarea.value = result.value;
    }

    var blockMetaList = result.meta;

    var buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = 'position:absolute;bottom:0;left:0;right:0;';

    var buttonStyle = 'float:right;margin-right:20px;border:none;'
        + 'cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px';
    var closeButton = document.createElement('div');
    var refreshButton = document.createElement('div');

    buttonStyle += ';background-color:' + model.get('buttonColor');
    buttonStyle += ';color:' + model.get('buttonTextColor');

    var self = this;

    function close() {
        container.removeChild(root);
        self._dom = null;
    }
    addEventListener(closeButton, 'click', close);

    addEventListener(refreshButton, 'click', function () {
        var newOption;
        try {
            if (typeof contentToOption === 'function') {
                newOption = contentToOption(viewMain, api.getOption());
            }
            else {
                newOption = parseContents(textarea.value, blockMetaList);
            }
        }
        catch (e) {
            close();
            throw new Error('Data view format error ' + e);
        }
        if (newOption) {
            api.dispatchAction({
                type: 'changeDataView',
                newOption: newOption
            });
        }

        close();
    });

    closeButton.innerHTML = lang$$1[1];
    refreshButton.innerHTML = lang$$1[2];
    refreshButton.style.cssText = buttonStyle;
    closeButton.style.cssText = buttonStyle;

    !model.get('readOnly') && buttonContainer.appendChild(refreshButton);
    buttonContainer.appendChild(closeButton);

    root.appendChild(header);
    root.appendChild(viewMain);
    root.appendChild(buttonContainer);

    viewMain.style.height = (container.clientHeight - 80) + 'px';

    container.appendChild(root);
    this._dom = root;
};

DataView.prototype.remove = function (ecModel, api) {
    this._dom && api.getDom().removeChild(this._dom);
};

DataView.prototype.dispose = function (ecModel, api) {
    this.remove(ecModel, api);
};

/**
 * @inner
 */
function tryMergeDataOption(newData, originalData) {
    return map(newData, function (newVal, idx) {
        var original = originalData && originalData[idx];
        if (isObject$1(original) && !isArray(original)) {
            if (isObject$1(newVal) && !isArray(newVal)) {
                newVal = newVal.value;
            }
            // Original data has option
            return defaults({
                value: newVal
            }, original);
        }
        else {
            return newVal;
        }
    });
}

register$2('dataView', DataView);

registerAction({
    type: 'changeDataView',
    event: 'dataViewChanged',
    update: 'prepareAndUpdate'
}, function (payload, ecModel) {
    var newSeriesOptList = [];
    each$1(payload.newOption.series, function (seriesOpt) {
        var seriesModel = ecModel.getSeriesByName(seriesOpt.name)[0];
        if (!seriesModel) {
            // New created series
            // Geuss the series type
            newSeriesOptList.push(extend({
                // Default is scatter
                type: 'scatter'
            }, seriesOpt));
        }
        else {
            var originalData = seriesModel.get('data');
            newSeriesOptList.push({
                name: seriesOpt.name,
                data: tryMergeDataOption(seriesOpt.data, originalData)
            });
        }
    });

    ecModel.mergeOption(defaults({
        series: newSeriesOptList
    }, payload.newOption));
});

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var curry$5 = curry;
var each$16 = each$1;
var map$2 = map;
var mathMin$4 = Math.min;
var mathMax$4 = Math.max;
var mathPow$2 = Math.pow;

var COVER_Z = 10000;
var UNSELECT_THRESHOLD = 6;
var MIN_RESIZE_LINE_WIDTH = 6;
var MUTEX_RESOURCE_KEY = 'globalPan';

var DIRECTION_MAP = {
    w: [0, 0],
    e: [0, 1],
    n: [1, 0],
    s: [1, 1]
};
var CURSOR_MAP = {
    w: 'ew',
    e: 'ew',
    n: 'ns',
    s: 'ns',
    ne: 'nesw',
    sw: 'nesw',
    nw: 'nwse',
    se: 'nwse'
};
var DEFAULT_BRUSH_OPT = {
    brushStyle: {
        lineWidth: 2,
        stroke: 'rgba(0,0,0,0.3)',
        fill: 'rgba(0,0,0,0.1)'
    },
    transformable: true,
    brushMode: 'single',
    removeOnClick: false
};

var baseUID = 0;

/**
 * @alias module:echarts/component/helper/BrushController
 * @constructor
 * @mixin {module:zrender/mixin/Eventful}
 * @event module:echarts/component/helper/BrushController#brush
 *        params:
 *            areas: Array.<Array>, coord relates to container group,
 *                                    If no container specified, to global.
 *            opt {
 *                isEnd: boolean,
 *                removeOnClick: boolean
 *            }
 *
 * @param {module:zrender/zrender~ZRender} zr
 */
function BrushController(zr) {

    if (__DEV__) {
        assert$1(zr);
    }

    Eventful.call(this);

    /**
     * @type {module:zrender/zrender~ZRender}
     * @private
     */
    this._zr = zr;

    /**
     * @type {module:zrender/container/Group}
     * @readOnly
     */
    this.group = new Group();

    /**
     * Only for drawing (after enabledBrush).
     *     'line', 'rect', 'polygon' or false
     *     If passing false/null/undefined, disable brush.
     *     If passing 'auto', determined by panel.defaultBrushType
     * @private
     * @type {string}
     */
    this._brushType;

    /**
     * Only for drawing (after enabledBrush).
     *
     * @private
     * @type {Object}
     */
    this._brushOption;

    /**
     * @private
     * @type {Object}
     */
    this._panels;

    /**
     * @private
     * @type {Array.<nubmer>}
     */
    this._track = [];

    /**
     * @private
     * @type {boolean}
     */
    this._dragging;

    /**
     * @private
     * @type {Array}
     */
    this._covers = [];

    /**
     * @private
     * @type {moudule:zrender/container/Group}
     */
    this._creatingCover;

    /**
     * `true` means global panel
     * @private
     * @type {module:zrender/container/Group|boolean}
     */
    this._creatingPanel;

    /**
     * @private
     * @type {boolean}
     */
    this._enableGlobalPan;

    /**
     * @private
     * @type {boolean}
     */
    if (__DEV__) {
        this._mounted;
    }

    /**
     * @private
     * @type {string}
     */
    this._uid = 'brushController_' + baseUID++;

    /**
     * @private
     * @type {Object}
     */
    this._handlers = {};
    each$16(mouseHandlers, function (handler, eventName) {
        this._handlers[eventName] = bind(handler, this);
    }, this);
}

BrushController.prototype = {

    constructor: BrushController,

    /**
     * If set to null/undefined/false, select disabled.
     * @param {Object} brushOption
     * @param {string|boolean} brushOption.brushType 'line', 'rect', 'polygon' or false
     *                          If passing false/null/undefined, disable brush.
     *                          If passing 'auto', determined by panel.defaultBrushType.
     *                              ('auto' can not be used in global panel)
     * @param {number} [brushOption.brushMode='single'] 'single' or 'multiple'
     * @param {boolean} [brushOption.transformable=true]
     * @param {boolean} [brushOption.removeOnClick=false]
     * @param {Object} [brushOption.brushStyle]
     * @param {number} [brushOption.brushStyle.width]
     * @param {number} [brushOption.brushStyle.lineWidth]
     * @param {string} [brushOption.brushStyle.stroke]
     * @param {string} [brushOption.brushStyle.fill]
     * @param {number} [brushOption.z]
     */
    enableBrush: function (brushOption) {
        if (__DEV__) {
            assert$1(this._mounted);
        }

        this._brushType && doDisableBrush(this);
        brushOption.brushType && doEnableBrush(this, brushOption);

        return this;
    },

    /**
     * @param {Array.<Object>} panelOpts If not pass, it is global brush.
     *        Each items: {
     *            panelId, // mandatory.
     *            clipPath, // mandatory. function.
     *            isTargetByCursor, // mandatory. function.
     *            defaultBrushType, // optional, only used when brushType is 'auto'.
     *            getLinearBrushOtherExtent, // optional. function.
     *        }
     */
    setPanels: function (panelOpts) {
        if (panelOpts && panelOpts.length) {
            var panels = this._panels = {};
            each$1(panelOpts, function (panelOpts) {
                panels[panelOpts.panelId] = clone(panelOpts);
            });
        }
        else {
            this._panels = null;
        }
        return this;
    },

    /**
     * @param {Object} [opt]
     * @return {boolean} [opt.enableGlobalPan=false]
     */
    mount: function (opt) {
        opt = opt || {};

        if (__DEV__) {
            this._mounted = true; // should be at first.
        }

        this._enableGlobalPan = opt.enableGlobalPan;

        var thisGroup = this.group;
        this._zr.add(thisGroup);

        thisGroup.attr({
            position: opt.position || [0, 0],
            rotation: opt.rotation || 0,
            scale: opt.scale || [1, 1]
        });
        this._transform = thisGroup.getLocalTransform();

        return this;
    },

    eachCover: function (cb, context) {
        each$16(this._covers, cb, context);
    },

    /**
     * Update covers.
     * @param {Array.<Object>} brushOptionList Like:
     *        [
     *            {id: 'xx', brushType: 'line', range: [23, 44], brushStyle, transformable},
     *            {id: 'yy', brushType: 'rect', range: [[23, 44], [23, 54]]},
     *            ...
     *        ]
     *        `brushType` is required in each cover info. (can not be 'auto')
     *        `id` is not mandatory.
     *        `brushStyle`, `transformable` is not mandatory, use DEFAULT_BRUSH_OPT by default.
     *        If brushOptionList is null/undefined, all covers removed.
     */
    updateCovers: function (brushOptionList) {
        if (__DEV__) {
            assert$1(this._mounted);
        }

        brushOptionList = map(brushOptionList, function (brushOption) {
            return merge(clone(DEFAULT_BRUSH_OPT), brushOption, true);
        });

        var tmpIdPrefix = '\0-brush-index-';
        var oldCovers = this._covers;
        var newCovers = this._covers = [];
        var controller = this;
        var creatingCover = this._creatingCover;

        (new DataDiffer(oldCovers, brushOptionList, oldGetKey, getKey))
            .add(addOrUpdate)
            .update(addOrUpdate)
            .remove(remove)
            .execute();

        return this;

        function getKey(brushOption, index) {
            return (brushOption.id != null ? brushOption.id : tmpIdPrefix + index)
                + '-' + brushOption.brushType;
        }

        function oldGetKey(cover, index) {
            return getKey(cover.__brushOption, index);
        }

        function addOrUpdate(newIndex, oldIndex) {
            var newBrushOption = brushOptionList[newIndex];
            // Consider setOption in event listener of brushSelect,
            // where updating cover when creating should be forbiden.
            if (oldIndex != null && oldCovers[oldIndex] === creatingCover) {
                newCovers[newIndex] = oldCovers[oldIndex];
            }
            else {
                var cover = newCovers[newIndex] = oldIndex != null
                    ? (
                        oldCovers[oldIndex].__brushOption = newBrushOption,
                        oldCovers[oldIndex]
                    )
                    : endCreating(controller, createCover(controller, newBrushOption));
                updateCoverAfterCreation(controller, cover);
            }
        }

        function remove(oldIndex) {
            if (oldCovers[oldIndex] !== creatingCover) {
                controller.group.remove(oldCovers[oldIndex]);
            }
        }
    },

    unmount: function () {
        if (__DEV__) {
            if (!this._mounted) {
                return;
            }
        }

        this.enableBrush(false);

        // container may 'removeAll' outside.
        clearCovers(this);
        this._zr.remove(this.group);

        if (__DEV__) {
            this._mounted = false; // should be at last.
        }

        return this;
    },

    dispose: function () {
        this.unmount();
        this.off();
    }
};

mixin(BrushController, Eventful);

function doEnableBrush(controller, brushOption) {
    var zr = controller._zr;

    // Consider roam, which takes globalPan too.
    if (!controller._enableGlobalPan) {
        take(zr, MUTEX_RESOURCE_KEY, controller._uid);
    }

    each$16(controller._handlers, function (handler, eventName) {
        zr.on(eventName, handler);
    });

    controller._brushType = brushOption.brushType;
    controller._brushOption = merge(clone(DEFAULT_BRUSH_OPT), brushOption, true);
}

function doDisableBrush(controller) {
    var zr = controller._zr;

    release(zr, MUTEX_RESOURCE_KEY, controller._uid);

    each$16(controller._handlers, function (handler, eventName) {
        zr.off(eventName, handler);
    });

    controller._brushType = controller._brushOption = null;
}

function createCover(controller, brushOption) {
    var cover = coverRenderers[brushOption.brushType].createCover(controller, brushOption);
    cover.__brushOption = brushOption;
    updateZ$1(cover, brushOption);
    controller.group.add(cover);
    return cover;
}

function endCreating(controller, creatingCover) {
    var coverRenderer = getCoverRenderer(creatingCover);
    if (coverRenderer.endCreating) {
        coverRenderer.endCreating(controller, creatingCover);
        updateZ$1(creatingCover, creatingCover.__brushOption);
    }
    return creatingCover;
}

function updateCoverShape(controller, cover) {
    var brushOption = cover.__brushOption;
    getCoverRenderer(cover).updateCoverShape(
        controller, cover, brushOption.range, brushOption
    );
}

function updateZ$1(cover, brushOption) {
    var z = brushOption.z;
    z == null && (z = COVER_Z);
    cover.traverse(function (el) {
        el.z = z;
        el.z2 = z; // Consider in given container.
    });
}

function updateCoverAfterCreation(controller, cover) {
    getCoverRenderer(cover).updateCommon(controller, cover);
    updateCoverShape(controller, cover);
}

function getCoverRenderer(cover) {
    return coverRenderers[cover.__brushOption.brushType];
}

// return target panel or `true` (means global panel)
function getPanelByPoint(controller, e, localCursorPoint) {
    var panels = controller._panels;
    if (!panels) {
        return true; // Global panel
    }
    var panel;
    var transform = controller._transform;
    each$16(panels, function (pn) {
        pn.isTargetByCursor(e, localCursorPoint, transform) && (panel = pn);
    });
    return panel;
}

// Return a panel or true
function getPanelByCover(controller, cover) {
    var panels = controller._panels;
    if (!panels) {
        return true; // Global panel
    }
    var panelId = cover.__brushOption.panelId;
    // User may give cover without coord sys info,
    // which is then treated as global panel.
    return panelId != null ? panels[panelId] : true;
}

function clearCovers(controller) {
    var covers = controller._covers;
    var originalLength = covers.length;
    each$16(covers, function (cover) {
        controller.group.remove(cover);
    }, controller);
    covers.length = 0;

    return !!originalLength;
}

function trigger$1(controller, opt) {
    var areas = map$2(controller._covers, function (cover) {
        var brushOption = cover.__brushOption;
        var range = clone(brushOption.range);
        return {
            brushType: brushOption.brushType,
            panelId: brushOption.panelId,
            range: range
        };
    });

    controller.trigger('brush', areas, {
        isEnd: !!opt.isEnd,
        removeOnClick: !!opt.removeOnClick
    });
}

function shouldShowCover(controller) {
    var track = controller._track;

    if (!track.length) {
        return false;
    }

    var p2 = track[track.length - 1];
    var p1 = track[0];
    var dx = p2[0] - p1[0];
    var dy = p2[1] - p1[1];
    var dist = mathPow$2(dx * dx + dy * dy, 0.5);

    return dist > UNSELECT_THRESHOLD;
}

function getTrackEnds(track) {
    var tail = track.length - 1;
    tail < 0 && (tail = 0);
    return [track[0], track[tail]];
}

function createBaseRectCover(doDrift, controller, brushOption, edgeNames) {
    var cover = new Group();

    cover.add(new Rect({
        name: 'main',
        style: makeStyle(brushOption),
        silent: true,
        draggable: true,
        cursor: 'move',
        drift: curry$5(doDrift, controller, cover, 'nswe'),
        ondragend: curry$5(trigger$1, controller, {isEnd: true})
    }));

    each$16(
        edgeNames,
        function (name) {
            cover.add(new Rect({
                name: name,
                style: {opacity: 0},
                draggable: true,
                silent: true,
                invisible: true,
                drift: curry$5(doDrift, controller, cover, name),
                ondragend: curry$5(trigger$1, controller, {isEnd: true})
            }));
        }
    );

    return cover;
}

function updateBaseRect(controller, cover, localRange, brushOption) {
    var lineWidth = brushOption.brushStyle.lineWidth || 0;
    var handleSize = mathMax$4(lineWidth, MIN_RESIZE_LINE_WIDTH);
    var x = localRange[0][0];
    var y = localRange[1][0];
    var xa = x - lineWidth / 2;
    var ya = y - lineWidth / 2;
    var x2 = localRange[0][1];
    var y2 = localRange[1][1];
    var x2a = x2 - handleSize + lineWidth / 2;
    var y2a = y2 - handleSize + lineWidth / 2;
    var width = x2 - x;
    var height = y2 - y;
    var widtha = width + lineWidth;
    var heighta = height + lineWidth;

    updateRectShape(controller, cover, 'main', x, y, width, height);

    if (brushOption.transformable) {
        updateRectShape(controller, cover, 'w', xa, ya, handleSize, heighta);
        updateRectShape(controller, cover, 'e', x2a, ya, handleSize, heighta);
        updateRectShape(controller, cover, 'n', xa, ya, widtha, handleSize);
        updateRectShape(controller, cover, 's', xa, y2a, widtha, handleSize);

        updateRectShape(controller, cover, 'nw', xa, ya, handleSize, handleSize);
        updateRectShape(controller, cover, 'ne', x2a, ya, handleSize, handleSize);
        updateRectShape(controller, cover, 'sw', xa, y2a, handleSize, handleSize);
        updateRectShape(controller, cover, 'se', x2a, y2a, handleSize, handleSize);
    }
}

function updateCommon(controller, cover) {
    var brushOption = cover.__brushOption;
    var transformable = brushOption.transformable;

    var mainEl = cover.childAt(0);
    mainEl.useStyle(makeStyle(brushOption));
    mainEl.attr({
        silent: !transformable,
        cursor: transformable ? 'move' : 'default'
    });

    each$16(
        ['w', 'e', 'n', 's', 'se', 'sw', 'ne', 'nw'],
        function (name) {
            var el = cover.childOfName(name);
            var globalDir = getGlobalDirection(controller, name);

            el && el.attr({
                silent: !transformable,
                invisible: !transformable,
                cursor: transformable ? CURSOR_MAP[globalDir] + '-resize' : null
            });
        }
    );
}

function updateRectShape(controller, cover, name, x, y, w, h) {
    var el = cover.childOfName(name);
    el && el.setShape(pointsToRect(
        clipByPanel(controller, cover, [[x, y], [x + w, y + h]])
    ));
}

function makeStyle(brushOption) {
    return defaults({strokeNoScale: true}, brushOption.brushStyle);
}

function formatRectRange(x, y, x2, y2) {
    var min = [mathMin$4(x, x2), mathMin$4(y, y2)];
    var max = [mathMax$4(x, x2), mathMax$4(y, y2)];

    return [
        [min[0], max[0]], // x range
        [min[1], max[1]] // y range
    ];
}

function getTransform$1(controller) {
    return getTransform(controller.group);
}

function getGlobalDirection(controller, localDirection) {
    if (localDirection.length > 1) {
        localDirection = localDirection.split('');
        var globalDir = [
            getGlobalDirection(controller, localDirection[0]),
            getGlobalDirection(controller, localDirection[1])
        ];
        (globalDir[0] === 'e' || globalDir[0] === 'w') && globalDir.reverse();
        return globalDir.join('');
    }
    else {
        var map$$1 = {w: 'left', e: 'right', n: 'top', s: 'bottom'};
        var inverseMap = {left: 'w', right: 'e', top: 'n', bottom: 's'};
        var globalDir = transformDirection(
            map$$1[localDirection], getTransform$1(controller)
        );
        return inverseMap[globalDir];
    }
}

function driftRect(toRectRange, fromRectRange, controller, cover, name, dx, dy, e) {
    var brushOption = cover.__brushOption;
    var rectRange = toRectRange(brushOption.range);
    var localDelta = toLocalDelta(controller, dx, dy);

    each$16(name.split(''), function (namePart) {
        var ind = DIRECTION_MAP[namePart];
        rectRange[ind[0]][ind[1]] += localDelta[ind[0]];
    });

    brushOption.range = fromRectRange(formatRectRange(
        rectRange[0][0], rectRange[1][0], rectRange[0][1], rectRange[1][1]
    ));

    updateCoverAfterCreation(controller, cover);
    trigger$1(controller, {isEnd: false});
}

function driftPolygon(controller, cover, dx, dy, e) {
    var range = cover.__brushOption.range;
    var localDelta = toLocalDelta(controller, dx, dy);

    each$16(range, function (point) {
        point[0] += localDelta[0];
        point[1] += localDelta[1];
    });

    updateCoverAfterCreation(controller, cover);
    trigger$1(controller, {isEnd: false});
}

function toLocalDelta(controller, dx, dy) {
    var thisGroup = controller.group;
    var localD = thisGroup.transformCoordToLocal(dx, dy);
    var localZero = thisGroup.transformCoordToLocal(0, 0);

    return [localD[0] - localZero[0], localD[1] - localZero[1]];
}

function clipByPanel(controller, cover, data) {
    var panel = getPanelByCover(controller, cover);

    return (panel && panel !== true)
        ? panel.clipPath(data, controller._transform)
        : clone(data);
}

function pointsToRect(points) {
    var xmin = mathMin$4(points[0][0], points[1][0]);
    var ymin = mathMin$4(points[0][1], points[1][1]);
    var xmax = mathMax$4(points[0][0], points[1][0]);
    var ymax = mathMax$4(points[0][1], points[1][1]);

    return {
        x: xmin,
        y: ymin,
        width: xmax - xmin,
        height: ymax - ymin
    };
}

function resetCursor(controller, e, localCursorPoint) {
    // Check active
    if (!controller._brushType) {
        return;
    }

    var zr = controller._zr;
    var covers = controller._covers;
    var currPanel = getPanelByPoint(controller, e, localCursorPoint);

    // Check whether in covers.
    if (!controller._dragging) {
        for (var i = 0; i < covers.length; i++) {
            var brushOption = covers[i].__brushOption;
            if (currPanel
                && (currPanel === true || brushOption.panelId === currPanel.panelId)
                && coverRenderers[brushOption.brushType].contain(
                    covers[i], localCursorPoint[0], localCursorPoint[1]
                )
            ) {
                // Use cursor style set on cover.
                return;
            }
        }
    }

    currPanel && zr.setCursorStyle('crosshair');
}

function preventDefault(e) {
    var rawE = e.event;
    rawE.preventDefault && rawE.preventDefault();
}

function mainShapeContain(cover, x, y) {
    return cover.childOfName('main').contain(x, y);
}

function updateCoverByMouse(controller, e, localCursorPoint, isEnd) {
    var creatingCover = controller._creatingCover;
    var panel = controller._creatingPanel;
    var thisBrushOption = controller._brushOption;
    var eventParams;

    controller._track.push(localCursorPoint.slice());

    if (shouldShowCover(controller) || creatingCover) {

        if (panel && !creatingCover) {
            thisBrushOption.brushMode === 'single' && clearCovers(controller);
            var brushOption = clone(thisBrushOption);
            brushOption.brushType = determineBrushType(brushOption.brushType, panel);
            brushOption.panelId = panel === true ? null : panel.panelId;
            creatingCover = controller._creatingCover = createCover(controller, brushOption);
            controller._covers.push(creatingCover);
        }

        if (creatingCover) {
            var coverRenderer = coverRenderers[determineBrushType(controller._brushType, panel)];
            var coverBrushOption = creatingCover.__brushOption;

            coverBrushOption.range = coverRenderer.getCreatingRange(
                clipByPanel(controller, creatingCover, controller._track)
            );

            if (isEnd) {
                endCreating(controller, creatingCover);
                coverRenderer.updateCommon(controller, creatingCover);
            }

            updateCoverShape(controller, creatingCover);

            eventParams = {isEnd: isEnd};
        }
    }
    else if (
        isEnd
        && thisBrushOption.brushMode === 'single'
        && thisBrushOption.removeOnClick
    ) {
        // Help user to remove covers easily, only by a tiny drag, in 'single' mode.
        // But a single click do not clear covers, because user may have casual
        // clicks (for example, click on other component and do not expect covers
        // disappear).
        // Only some cover removed, trigger action, but not every click trigger action.
        if (getPanelByPoint(controller, e, localCursorPoint) && clearCovers(controller)) {
            eventParams = {isEnd: isEnd, removeOnClick: true};
        }
    }

    return eventParams;
}

function determineBrushType(brushType, panel) {
    if (brushType === 'auto') {
        if (__DEV__) {
            assert$1(
                panel && panel.defaultBrushType,
                'MUST have defaultBrushType when brushType is "atuo"'
            );
        }
        return panel.defaultBrushType;
    }
    return brushType;
}

var mouseHandlers = {

    mousedown: function (e) {
        if (this._dragging) {
            // In case some browser do not support globalOut,
            // and release mose out side the browser.
            handleDragEnd.call(this, e);
        }
        else if (!e.target || !e.target.draggable) {

            preventDefault(e);

            var localCursorPoint = this.group.transformCoordToLocal(e.offsetX, e.offsetY);

            this._creatingCover = null;
            var panel = this._creatingPanel = getPanelByPoint(this, e, localCursorPoint);

            if (panel) {
                this._dragging = true;
                this._track = [localCursorPoint.slice()];
            }
        }
    },

    mousemove: function (e) {
        var localCursorPoint = this.group.transformCoordToLocal(e.offsetX, e.offsetY);

        resetCursor(this, e, localCursorPoint);

        if (this._dragging) {

            preventDefault(e);

            var eventParams = updateCoverByMouse(this, e, localCursorPoint, false);

            eventParams && trigger$1(this, eventParams);
        }
    },

    mouseup: handleDragEnd //,

    // FIXME
    // in tooltip, globalout should not be triggered.
    // globalout: handleDragEnd
};

function handleDragEnd(e) {
    if (this._dragging) {

        preventDefault(e);

        var localCursorPoint = this.group.transformCoordToLocal(e.offsetX, e.offsetY);
        var eventParams = updateCoverByMouse(this, e, localCursorPoint, true);

        this._dragging = false;
        this._track = [];
        this._creatingCover = null;

        // trigger event shoule be at final, after procedure will be nested.
        eventParams && trigger$1(this, eventParams);
    }
}

/**
 * key: brushType
 * @type {Object}
 */
var coverRenderers = {

    lineX: getLineRenderer(0),

    lineY: getLineRenderer(1),

    rect: {
        createCover: function (controller, brushOption) {
            return createBaseRectCover(
                curry$5(
                    driftRect,
                    function (range) {
                        return range;
                    },
                    function (range) {
                        return range;
                    }
                ),
                controller,
                brushOption,
                ['w', 'e', 'n', 's', 'se', 'sw', 'ne', 'nw']
            );
        },
        getCreatingRange: function (localTrack) {
            var ends = getTrackEnds(localTrack);
            return formatRectRange(ends[1][0], ends[1][1], ends[0][0], ends[0][1]);
        },
        updateCoverShape: function (controller, cover, localRange, brushOption) {
            updateBaseRect(controller, cover, localRange, brushOption);
        },
        updateCommon: updateCommon,
        contain: mainShapeContain
    },

    polygon: {
        createCover: function (controller, brushOption) {
            var cover = new Group();

            // Do not use graphic.Polygon because graphic.Polyline do not close the
            // border of the shape when drawing, which is a better experience for user.
            cover.add(new Polyline({
                name: 'main',
                style: makeStyle(brushOption),
                silent: true
            }));

            return cover;
        },
        getCreatingRange: function (localTrack) {
            return localTrack;
        },
        endCreating: function (controller, cover) {
            cover.remove(cover.childAt(0));
            // Use graphic.Polygon close the shape.
            cover.add(new Polygon({
                name: 'main',
                draggable: true,
                drift: curry$5(driftPolygon, controller, cover),
                ondragend: curry$5(trigger$1, controller, {isEnd: true})
            }));
        },
        updateCoverShape: function (controller, cover, localRange, brushOption) {
            cover.childAt(0).setShape({
                points: clipByPanel(controller, cover, localRange)
            });
        },
        updateCommon: updateCommon,
        contain: mainShapeContain
    }
};

function getLineRenderer(xyIndex) {
    return {
        createCover: function (controller, brushOption) {
            return createBaseRectCover(
                curry$5(
                    driftRect,
                    function (range) {
                        var rectRange = [range, [0, 100]];
                        xyIndex && rectRange.reverse();
                        return rectRange;
                    },
                    function (rectRange) {
                        return rectRange[xyIndex];
                    }
                ),
                controller,
                brushOption,
                [['w', 'e'], ['n', 's']][xyIndex]
            );
        },
        getCreatingRange: function (localTrack) {
            var ends = getTrackEnds(localTrack);
            var min = mathMin$4(ends[0][xyIndex], ends[1][xyIndex]);
            var max = mathMax$4(ends[0][xyIndex], ends[1][xyIndex]);

            return [min, max];
        },
        updateCoverShape: function (controller, cover, localRange, brushOption) {
            var otherExtent;
            // If brushWidth not specified, fit the panel.
            var panel = getPanelByCover(controller, cover);
            if (panel !== true && panel.getLinearBrushOtherExtent) {
                otherExtent = panel.getLinearBrushOtherExtent(
                    xyIndex, controller._transform
                );
            }
            else {
                var zr = controller._zr;
                otherExtent = [0, [zr.getWidth(), zr.getHeight()][1 - xyIndex]];
            }
            var rectRange = [localRange, otherExtent];
            xyIndex && rectRange.reverse();

            updateBaseRect(controller, cover, rectRange, brushOption);
        },
        updateCommon: updateCommon,
        contain: mainShapeContain
    };
}

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var IRRELEVANT_EXCLUDES = {'axisPointer': 1, 'tooltip': 1, 'brush': 1};

/**
 * Avoid that: mouse click on a elements that is over geo or graph,
 * but roam is triggered.
 */
function onIrrelevantElement(e, api, targetCoordSysModel) {
    var model = api.getComponentByElement(e.topTarget);
    // If model is axisModel, it works only if it is injected with coordinateSystem.
    var coordSys = model && model.coordinateSystem;
    return model
        && model !== targetCoordSysModel
        && !IRRELEVANT_EXCLUDES[model.mainType]
        && (coordSys && coordSys.model !== targetCoordSysModel);
}

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

function makeRectPanelClipPath(rect) {
    rect = normalizeRect(rect);
    return function (localPoints, transform) {
        return clipPointsByRect(localPoints, rect);
    };
}

function makeLinearBrushOtherExtent(rect, specifiedXYIndex) {
    rect = normalizeRect(rect);
    return function (xyIndex) {
        var idx = specifiedXYIndex != null ? specifiedXYIndex : xyIndex;
        var brushWidth = idx ? rect.width : rect.height;
        var base = idx ? rect.x : rect.y;
        return [base, base + (brushWidth || 0)];
    };
}

function makeRectIsTargetByCursor(rect, api, targetModel) {
    rect = normalizeRect(rect);
    return function (e, localCursorPoint, transform) {
        return rect.contain(localCursorPoint[0], localCursorPoint[1])
            && !onIrrelevantElement(e, api, targetModel);
    };
}

// Consider width/height is negative.
function normalizeRect(rect) {
    return BoundingRect.create(rect);
}

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var each$17 = each$1;
var indexOf$2 = indexOf;
var curry$6 = curry;

var COORD_CONVERTS = ['dataToPoint', 'pointToData'];

// FIXME
// how to genarialize to more coordinate systems.
var INCLUDE_FINDER_MAIN_TYPES = [
    'grid', 'xAxis', 'yAxis', 'geo', 'graph',
    'polar', 'radiusAxis', 'angleAxis', 'bmap'
];

/**
 * [option in constructor]:
 * {
 *     Index/Id/Name of geo, xAxis, yAxis, grid: See util/model#parseFinder.
 * }
 *
 *
 * [targetInfo]:
 *
 * There can be multiple axes in a single targetInfo. Consider the case
 * of `grid` component, a targetInfo represents a grid which contains one or more
 * cartesian and one or more axes. And consider the case of parallel system,
 * which has multiple axes in a coordinate system.
 * Can be {
 *     panelId: ...,
 *     coordSys: <a representitive cartesian in grid (first cartesian by default)>,
 *     coordSyses: all cartesians.
 *     gridModel: <grid component>
 *     xAxes: correspond to coordSyses on index
 *     yAxes: correspond to coordSyses on index
 * }
 * or {
 *     panelId: ...,
 *     coordSys: <geo coord sys>
 *     coordSyses: [<geo coord sys>]
 *     geoModel: <geo component>
 * }
 *
 *
 * [panelOpt]:
 *
 * Make from targetInfo. Input to BrushController.
 * {
 *     panelId: ...,
 *     rect: ...
 * }
 *
 *
 * [area]:
 *
 * Generated by BrushController or user input.
 * {
 *     panelId: Used to locate coordInfo directly. If user inpput, no panelId.
 *     brushType: determine how to convert to/from coord('rect' or 'polygon' or 'lineX/Y').
 *     Index/Id/Name of geo, xAxis, yAxis, grid: See util/model#parseFinder.
 *     range: pixel range.
 *     coordRange: representitive coord range (the first one of coordRanges).
 *     coordRanges: <Array> coord ranges, used in multiple cartesian in one grid.
 * }
 */

/**
 * @param {Object} option contains Index/Id/Name of xAxis/yAxis/geo/grid
 *        Each can be {number|Array.<number>}. like: {xAxisIndex: [3, 4]}
 * @param {module:echarts/model/Global} ecModel
 * @param {Object} [opt]
 * @param {Array.<string>} [opt.include] include coordinate system types.
 */
function BrushTargetManager(option, ecModel, opt) {
    /**
     * @private
     * @type {Array.<Object>}
     */
    var targetInfoList = this._targetInfoList = [];
    var info = {};
    var foundCpts = parseFinder$1(ecModel, option);

    each$17(targetInfoBuilders, function (builder, type) {
        if (!opt || !opt.include || indexOf$2(opt.include, type) >= 0) {
            builder(foundCpts, targetInfoList, info);
        }
    });
}

var proto$5 = BrushTargetManager.prototype;

proto$5.setOutputRanges = function (areas, ecModel) {
    this.matchOutputRanges(areas, ecModel, function (area, coordRange, coordSys) {
        (area.coordRanges || (area.coordRanges = [])).push(coordRange);
        // area.coordRange is the first of area.coordRanges
        if (!area.coordRange) {
            area.coordRange = coordRange;
            // In 'category' axis, coord to pixel is not reversible, so we can not
            // rebuild range by coordRange accrately, which may bring trouble when
            // brushing only one item. So we use __rangeOffset to rebuilding range
            // by coordRange. And this it only used in brush component so it is no
            // need to be adapted to coordRanges.
            var result = coordConvert[area.brushType](0, coordSys, coordRange);
            area.__rangeOffset = {
                offset: diffProcessor[area.brushType](result.values, area.range, [1, 1]),
                xyMinMax: result.xyMinMax
            };
        }
    });
};

proto$5.matchOutputRanges = function (areas, ecModel, cb) {
    each$17(areas, function (area) {
        var targetInfo = this.findTargetInfo(area, ecModel);

        if (targetInfo && targetInfo !== true) {
            each$1(
                targetInfo.coordSyses,
                function (coordSys) {
                    var result = coordConvert[area.brushType](1, coordSys, area.range);
                    cb(area, result.values, coordSys, ecModel);
                }
            );
        }
    }, this);
};

proto$5.setInputRanges = function (areas, ecModel) {
    each$17(areas, function (area) {
        var targetInfo = this.findTargetInfo(area, ecModel);

        if (__DEV__) {
            assert$1(
                !targetInfo || targetInfo === true || area.coordRange,
                'coordRange must be specified when coord index specified.'
            );
            assert$1(
                !targetInfo || targetInfo !== true || area.range,
                'range must be specified in global brush.'
            );
        }

        area.range = area.range || [];

        // convert coordRange to global range and set panelId.
        if (targetInfo && targetInfo !== true) {
            area.panelId = targetInfo.panelId;
            // (1) area.range shoule always be calculate from coordRange but does
            // not keep its original value, for the sake of the dataZoom scenario,
            // where area.coordRange remains unchanged but area.range may be changed.
            // (2) Only support converting one coordRange to pixel range in brush
            // component. So do not consider `coordRanges`.
            // (3) About __rangeOffset, see comment above.
            var result = coordConvert[area.brushType](0, targetInfo.coordSys, area.coordRange);
            var rangeOffset = area.__rangeOffset;
            area.range = rangeOffset
                ? diffProcessor[area.brushType](
                    result.values,
                    rangeOffset.offset,
                    getScales(result.xyMinMax, rangeOffset.xyMinMax)
                )
                : result.values;
        }
    }, this);
};

proto$5.makePanelOpts = function (api, getDefaultBrushType) {
    return map(this._targetInfoList, function (targetInfo) {
        var rect = targetInfo.getPanelRect();
        return {
            panelId: targetInfo.panelId,
            defaultBrushType: getDefaultBrushType && getDefaultBrushType(targetInfo),
            clipPath: makeRectPanelClipPath(rect),
            isTargetByCursor: makeRectIsTargetByCursor(
                rect, api, targetInfo.coordSysModel
            ),
            getLinearBrushOtherExtent: makeLinearBrushOtherExtent(rect)
        };
    });
};

proto$5.controlSeries = function (area, seriesModel, ecModel) {
    // Check whether area is bound in coord, and series do not belong to that coord.
    // If do not do this check, some brush (like lineX) will controll all axes.
    var targetInfo = this.findTargetInfo(area, ecModel);
    return targetInfo === true || (
        targetInfo && indexOf$2(targetInfo.coordSyses, seriesModel.coordinateSystem) >= 0
    );
};

/**
 * If return Object, a coord found.
 * If reutrn true, global found.
 * Otherwise nothing found.
 *
 * @param {Object} area
 * @param {Array} targetInfoList
 * @return {Object|boolean}
 */
proto$5.findTargetInfo = function (area, ecModel) {
    var targetInfoList = this._targetInfoList;
    var foundCpts = parseFinder$1(ecModel, area);

    for (var i = 0; i < targetInfoList.length; i++) {
        var targetInfo = targetInfoList[i];
        var areaPanelId = area.panelId;
        if (areaPanelId) {
            if (targetInfo.panelId === areaPanelId) {
                return targetInfo;
            }
        }
        else {
            for (var i = 0; i < targetInfoMatchers.length; i++) {
                if (targetInfoMatchers[i](foundCpts, targetInfo)) {
                    return targetInfo;
                }
            }
        }
    }

    return true;
};

function formatMinMax(minMax) {
    minMax[0] > minMax[1] && minMax.reverse();
    return minMax;
}

function parseFinder$1(ecModel, option) {
    return parseFinder(
        ecModel, option, {includeMainTypes: INCLUDE_FINDER_MAIN_TYPES}
    );
}

var targetInfoBuilders = {

    grid: function (foundCpts, targetInfoList) {
        var xAxisModels = foundCpts.xAxisModels;
        var yAxisModels = foundCpts.yAxisModels;
        var gridModels = foundCpts.gridModels;
        // Remove duplicated.
        var gridModelMap = createHashMap();
        var xAxesHas = {};
        var yAxesHas = {};

        if (!xAxisModels && !yAxisModels && !gridModels) {
            return;
        }

        each$17(xAxisModels, function (axisModel) {
            var gridModel = axisModel.axis.grid.model;
            gridModelMap.set(gridModel.id, gridModel);
            xAxesHas[gridModel.id] = true;
        });
        each$17(yAxisModels, function (axisModel) {
            var gridModel = axisModel.axis.grid.model;
            gridModelMap.set(gridModel.id, gridModel);
            yAxesHas[gridModel.id] = true;
        });
        each$17(gridModels, function (gridModel) {
            gridModelMap.set(gridModel.id, gridModel);
            xAxesHas[gridModel.id] = true;
            yAxesHas[gridModel.id] = true;
        });

        gridModelMap.each(function (gridModel) {
            var grid = gridModel.coordinateSystem;
            var cartesians = [];

            each$17(grid.getCartesians(), function (cartesian, index) {
                if (indexOf$2(xAxisModels, cartesian.getAxis('x').model) >= 0
                    || indexOf$2(yAxisModels, cartesian.getAxis('y').model) >= 0
                ) {
                    cartesians.push(cartesian);
                }
            });
            targetInfoList.push({
                panelId: 'grid--' + gridModel.id,
                gridModel: gridModel,
                coordSysModel: gridModel,
                // Use the first one as the representitive coordSys.
                coordSys: cartesians[0],
                coordSyses: cartesians,
                getPanelRect: panelRectBuilder.grid,
                xAxisDeclared: xAxesHas[gridModel.id],
                yAxisDeclared: yAxesHas[gridModel.id]
            });
        });
    },

    geo: function (foundCpts, targetInfoList) {
        each$17(foundCpts.geoModels, function (geoModel) {
            var coordSys = geoModel.coordinateSystem;
            targetInfoList.push({
                panelId: 'geo--' + geoModel.id,
                geoModel: geoModel,
                coordSysModel: geoModel,
                coordSys: coordSys,
                coordSyses: [coordSys],
                getPanelRect: panelRectBuilder.geo
            });
        });
    }
};

var targetInfoMatchers = [

    // grid
    function (foundCpts, targetInfo) {
        var xAxisModel = foundCpts.xAxisModel;
        var yAxisModel = foundCpts.yAxisModel;
        var gridModel = foundCpts.gridModel;

        !gridModel && xAxisModel && (gridModel = xAxisModel.axis.grid.model);
        !gridModel && yAxisModel && (gridModel = yAxisModel.axis.grid.model);

        return gridModel && gridModel === targetInfo.gridModel;
    },

    // geo
    function (foundCpts, targetInfo) {
        var geoModel = foundCpts.geoModel;
        return geoModel && geoModel === targetInfo.geoModel;
    }
];

var panelRectBuilder = {

    grid: function () {
        // grid is not Transformable.
        return this.coordSys.grid.getRect().clone();
    },

    geo: function () {
        var coordSys = this.coordSys;
        var rect = coordSys.getBoundingRect().clone();
        // geo roam and zoom transform
        rect.applyTransform(getTransform(coordSys));
        return rect;
    }
};

var coordConvert = {

    lineX: curry$6(axisConvert, 0),

    lineY: curry$6(axisConvert, 1),

    rect: function (to, coordSys, rangeOrCoordRange) {
        var xminymin = coordSys[COORD_CONVERTS[to]]([rangeOrCoordRange[0][0], rangeOrCoordRange[1][0]]);
        var xmaxymax = coordSys[COORD_CONVERTS[to]]([rangeOrCoordRange[0][1], rangeOrCoordRange[1][1]]);
        var values = [
            formatMinMax([xminymin[0], xmaxymax[0]]),
            formatMinMax([xminymin[1], xmaxymax[1]])
        ];
        return {values: values, xyMinMax: values};
    },

    polygon: function (to, coordSys, rangeOrCoordRange) {
        var xyMinMax = [[Infinity, -Infinity], [Infinity, -Infinity]];
        var values = map(rangeOrCoordRange, function (item) {
            var p = coordSys[COORD_CONVERTS[to]](item);
            xyMinMax[0][0] = Math.min(xyMinMax[0][0], p[0]);
            xyMinMax[1][0] = Math.min(xyMinMax[1][0], p[1]);
            xyMinMax[0][1] = Math.max(xyMinMax[0][1], p[0]);
            xyMinMax[1][1] = Math.max(xyMinMax[1][1], p[1]);
            return p;
        });
        return {values: values, xyMinMax: xyMinMax};
    }
};

function axisConvert(axisNameIndex, to, coordSys, rangeOrCoordRange) {
    if (__DEV__) {
        assert$1(
            coordSys.type === 'cartesian2d',
            'lineX/lineY brush is available only in cartesian2d.'
        );
    }

    var axis = coordSys.getAxis(['x', 'y'][axisNameIndex]);
    var values = formatMinMax(map([0, 1], function (i) {
        return to
            ? axis.coordToData(axis.toLocalCoord(rangeOrCoordRange[i]))
            : axis.toGlobalCoord(axis.dataToCoord(rangeOrCoordRange[i]));
    }));
    var xyMinMax = [];
    xyMinMax[axisNameIndex] = values;
    xyMinMax[1 - axisNameIndex] = [NaN, NaN];

    return {values: values, xyMinMax: xyMinMax};
}

var diffProcessor = {
    lineX: curry$6(axisDiffProcessor, 0),

    lineY: curry$6(axisDiffProcessor, 1),

    rect: function (values, refer, scales) {
        return [
            [values[0][0] - scales[0] * refer[0][0], values[0][1] - scales[0] * refer[0][1]],
            [values[1][0] - scales[1] * refer[1][0], values[1][1] - scales[1] * refer[1][1]]
        ];
    },

    polygon: function (values, refer, scales) {
        return map(values, function (item, idx) {
            return [item[0] - scales[0] * refer[idx][0], item[1] - scales[1] * refer[idx][1]];
        });
    }
};

function axisDiffProcessor(axisNameIndex, values, refer, scales) {
    return [
        values[0] - scales[axisNameIndex] * refer[0],
        values[1] - scales[axisNameIndex] * refer[1]
    ];
}

// We have to process scale caused by dataZoom manually,
// although it might be not accurate.
function getScales(xyMinMaxCurr, xyMinMaxOrigin) {
    var sizeCurr = getSize(xyMinMaxCurr);
    var sizeOrigin = getSize(xyMinMaxOrigin);
    var scales = [sizeCurr[0] / sizeOrigin[0], sizeCurr[1] / sizeOrigin[1]];
    isNaN(scales[0]) && (scales[0] = 1);
    isNaN(scales[1]) && (scales[1] = 1);
    return scales;
}

function getSize(xyMinMax) {
    return xyMinMax
        ? [xyMinMax[0][1] - xyMinMax[0][0], xyMinMax[1][1] - xyMinMax[1][0]]
        : [NaN, NaN];
}

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var each$18 = each$1;

var ATTR$2 = '\0_ec_hist_store';

/**
 * @param {module:echarts/model/Global} ecModel
 * @param {Object} newSnapshot {dataZoomId, batch: [payloadInfo, ...]}
 */
function push(ecModel, newSnapshot) {
    var store = giveStore$1(ecModel);

    // If previous dataZoom can not be found,
    // complete an range with current range.
    each$18(newSnapshot, function (batchItem, dataZoomId) {
        var i = store.length - 1;
        for (; i >= 0; i--) {
            var snapshot = store[i];
            if (snapshot[dataZoomId]) {
                break;
            }
        }
        if (i < 0) {
            // No origin range set, create one by current range.
            var dataZoomModel = ecModel.queryComponents(
                {mainType: 'dataZoom', subType: 'select', id: dataZoomId}
            )[0];
            if (dataZoomModel) {
                var percentRange = dataZoomModel.getPercentRange();
                store[0][dataZoomId] = {
                    dataZoomId: dataZoomId,
                    start: percentRange[0],
                    end: percentRange[1]
                };
            }
        }
    });

    store.push(newSnapshot);
}

/**
 * @param {module:echarts/model/Global} ecModel
 * @return {Object} snapshot
 */
function pop(ecModel) {
    var store = giveStore$1(ecModel);
    var head = store[store.length - 1];
    store.length > 1 && store.pop();

    // Find top for all dataZoom.
    var snapshot = {};
    each$18(head, function (batchItem, dataZoomId) {
        for (var i = store.length - 1; i >= 0; i--) {
            var batchItem = store[i][dataZoomId];
            if (batchItem) {
                snapshot[dataZoomId] = batchItem;
                break;
            }
        }
    });

    return snapshot;
}

/**
 * @param {module:echarts/model/Global} ecModel
 */
function clear$1(ecModel) {
    ecModel[ATTR$2] = null;
}

/**
 * @param {module:echarts/model/Global} ecModel
 * @return {number} records. always >= 1.
 */
function count(ecModel) {
    return giveStore$1(ecModel).length;
}

/**
 * [{key: dataZoomId, value: {dataZoomId, range}}, ...]
 * History length of each dataZoom may be different.
 * this._history[0] is used to store origin range.
 * @type {Array.<Object>}
 */
function giveStore$1(ecModel) {
    var store = ecModel[ATTR$2];
    if (!store) {
        store = ecModel[ATTR$2] = [{}];
    }
    return store;
}

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

DataZoomModel.extend({
    type: 'dataZoom.select'
});

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

DataZoomView.extend({
    type: 'dataZoom.select'
});

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/**
 * Only work for toolbox dataZoom. User
 * MUST NOT import this module directly.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

// Use dataZoomSelect
var dataZoomLang = lang.toolbox.dataZoom;
var each$15 = each$1;

// Spectial component id start with \0ec\0, see echarts/model/Global.js~hasInnerId
var DATA_ZOOM_ID_BASE = '\0_ec_\0toolbox-dataZoom_';

function DataZoom(model, ecModel, api) {

    /**
     * @private
     * @type {module:echarts/component/helper/BrushController}
     */
    (this._brushController = new BrushController(api.getZr()))
        .on('brush', bind(this._onBrush, this))
        .mount();

    /**
     * @private
     * @type {boolean}
     */
    this._isZoomActive;
}

DataZoom.defaultOption = {
    show: true,
    // Icon group
    icon: {
        zoom: 'M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1',
        back: 'M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26'
    },
    // `zoom`, `back`
    title: clone(dataZoomLang.title)
};

var proto$4 = DataZoom.prototype;

proto$4.render = function (featureModel, ecModel, api, payload) {
    this.model = featureModel;
    this.ecModel = ecModel;
    this.api = api;

    updateZoomBtnStatus(featureModel, ecModel, this, payload, api);
    updateBackBtnStatus(featureModel, ecModel);
};

proto$4.onclick = function (ecModel, api, type) {
    handlers[type].call(this);
};

proto$4.remove = function (ecModel, api) {
    this._brushController.unmount();
};

proto$4.dispose = function (ecModel, api) {
    this._brushController.dispose();
};

/**
 * @private
 */
var handlers = {

    zoom: function () {
        var nextActive = !this._isZoomActive;

        this.api.dispatchAction({
            type: 'takeGlobalCursor',
            key: 'dataZoomSelect',
            dataZoomSelectActive: nextActive
        });
    },

    back: function () {
        this._dispatchZoomAction(pop(this.ecModel));
    }
};

/**
 * @private
 */
proto$4._onBrush = function (areas, opt) {
    if (!opt.isEnd || !areas.length) {
        return;
    }
    var snapshot = {};
    var ecModel = this.ecModel;

    this._brushController.updateCovers([]); // remove cover

    var brushTargetManager = new BrushTargetManager(
        retrieveAxisSetting(this.model.option), ecModel, {include: ['grid']}
    );
    brushTargetManager.matchOutputRanges(areas, ecModel, function (area, coordRange, coordSys) {
        if (coordSys.type !== 'cartesian2d') {
            return;
        }

        var brushType = area.brushType;
        if (brushType === 'rect') {
            setBatch('x', coordSys, coordRange[0]);
            setBatch('y', coordSys, coordRange[1]);
        }
        else {
            setBatch(({lineX: 'x', lineY: 'y'})[brushType], coordSys, coordRange);
        }
    });

    push(ecModel, snapshot);

    this._dispatchZoomAction(snapshot);

    function setBatch(dimName, coordSys, minMax) {
        var axis = coordSys.getAxis(dimName);
        var axisModel = axis.model;
        var dataZoomModel = findDataZoom(dimName, axisModel, ecModel);

        // Restrict range.
        var minMaxSpan = dataZoomModel.findRepresentativeAxisProxy(axisModel).getMinMaxSpan();
        if (minMaxSpan.minValueSpan != null || minMaxSpan.maxValueSpan != null) {
            minMax = sliderMove(
                0, minMax.slice(), axis.scale.getExtent(), 0,
                minMaxSpan.minValueSpan, minMaxSpan.maxValueSpan
            );
        }

        dataZoomModel && (snapshot[dataZoomModel.id] = {
            dataZoomId: dataZoomModel.id,
            startValue: minMax[0],
            endValue: minMax[1]
        });
    }

    function findDataZoom(dimName, axisModel, ecModel) {
        var found;
        ecModel.eachComponent({mainType: 'dataZoom', subType: 'select'}, function (dzModel) {
            var has = dzModel.getAxisModel(dimName, axisModel.componentIndex);
            has && (found = dzModel);
        });
        return found;
    }
};

/**
 * @private
 */
proto$4._dispatchZoomAction = function (snapshot) {
    var batch = [];

    // Convert from hash map to array.
    each$15(snapshot, function (batchItem, dataZoomId) {
        batch.push(clone(batchItem));
    });

    batch.length && this.api.dispatchAction({
        type: 'dataZoom',
        from: this.uid,
        batch: batch
    });
};

function retrieveAxisSetting(option) {
    var setting = {};
    // Compatible with previous setting: null => all axis, false => no axis.
    each$1(['xAxisIndex', 'yAxisIndex'], function (name) {
        setting[name] = option[name];
        setting[name] == null && (setting[name] = 'all');
        (setting[name] === false || setting[name] === 'none') && (setting[name] = []);
    });
    return setting;
}

function updateBackBtnStatus(featureModel, ecModel) {
    featureModel.setIconStatus(
        'back',
        count(ecModel) > 1 ? 'emphasis' : 'normal'
    );
}

function updateZoomBtnStatus(featureModel, ecModel, view, payload, api) {
    var zoomActive = view._isZoomActive;

    if (payload && payload.type === 'takeGlobalCursor') {
        zoomActive = payload.key === 'dataZoomSelect'
            ? payload.dataZoomSelectActive : false;
    }

    view._isZoomActive = zoomActive;

    featureModel.setIconStatus('zoom', zoomActive ? 'emphasis' : 'normal');

    var brushTargetManager = new BrushTargetManager(
        retrieveAxisSetting(featureModel.option), ecModel, {include: ['grid']}
    );

    view._brushController
        .setPanels(brushTargetManager.makePanelOpts(api, function (targetInfo) {
            return (targetInfo.xAxisDeclared && !targetInfo.yAxisDeclared)
                ? 'lineX'
                : (!targetInfo.xAxisDeclared && targetInfo.yAxisDeclared)
                ? 'lineY'
                : 'rect';
        }))
        .enableBrush(
            zoomActive
            ? {
                brushType: 'auto',
                brushStyle: {
                    // FIXME user customized?
                    lineWidth: 0,
                    fill: 'rgba(0,0,0,0.2)'
                }
            }
            : false
        );
}


register$2('dataZoom', DataZoom);


// Create special dataZoom option for select
// FIXME consider the case of merge option, where axes options are not exists.
registerPreprocessor(function (option) {
    if (!option) {
        return;
    }

    var dataZoomOpts = option.dataZoom || (option.dataZoom = []);
    if (!isArray(dataZoomOpts)) {
        option.dataZoom = dataZoomOpts = [dataZoomOpts];
    }

    var toolboxOpt = option.toolbox;
    if (toolboxOpt) {
        // Assume there is only one toolbox
        if (isArray(toolboxOpt)) {
            toolboxOpt = toolboxOpt[0];
        }

        if (toolboxOpt && toolboxOpt.feature) {
            var dataZoomOpt = toolboxOpt.feature.dataZoom;
            // FIXME: If add dataZoom when setOption in merge mode,
            // no axis info to be added. See `test/dataZoom-extreme.html`
            addForAxis('xAxis', dataZoomOpt);
            addForAxis('yAxis', dataZoomOpt);
        }
    }

    function addForAxis(axisName, dataZoomOpt) {
        if (!dataZoomOpt) {
            return;
        }

        // Try not to modify model, because it is not merged yet.
        var axisIndicesName = axisName + 'Index';
        var givenAxisIndices = dataZoomOpt[axisIndicesName];
        if (givenAxisIndices != null
            && givenAxisIndices !== 'all'
            && !isArray(givenAxisIndices)
        ) {
            givenAxisIndices = (givenAxisIndices === false || givenAxisIndices === 'none') ? [] : [givenAxisIndices];
        }

        forEachComponent(axisName, function (axisOpt, axisIndex) {
            if (givenAxisIndices != null
                && givenAxisIndices !== 'all'
                && indexOf(givenAxisIndices, axisIndex) === -1
            ) {
                return;
            }
            var newOpt = {
                type: 'select',
                $fromToolbox: true,
                // Id for merge mapping.
                id: DATA_ZOOM_ID_BASE + axisName + axisIndex
            };
            // FIXME
            // Only support one axis now.
            newOpt[axisIndicesName] = axisIndex;
            dataZoomOpts.push(newOpt);
        });
    }

    function forEachComponent(mainType, cb) {
        var opts = option[mainType];
        if (!isArray(opts)) {
            opts = opts ? [opts] : [];
        }
        each$15(opts, cb);
    }
});

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var restoreLang = lang.toolbox.restore;

function Restore(model) {
    this.model = model;
}

Restore.defaultOption = {
    show: true,
    /* eslint-disable */
    icon: 'M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5',
    /* eslint-enable */
    title: restoreLang.title
};

var proto$6 = Restore.prototype;

proto$6.onclick = function (ecModel, api, type) {
    clear$1(ecModel);

    api.dispatchAction({
        type: 'restore',
        from: this.uid
    });
};

register$2('restore', Restore);

registerAction(
    {type: 'restore', event: 'restore', update: 'prepareAndUpdate'},
    function (payload, ecModel) {
        ecModel.resetOption('recreate');
    }
);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var urn = 'urn:schemas-microsoft-com:vml';
var win = typeof window === 'undefined' ? null : window;

var vmlInited = false;

var doc = win && win.document;

function createNode(tagName) {
    return doCreateNode(tagName);
}

// Avoid assign to an exported variable, for transforming to cjs.
var doCreateNode;

if (doc && !env$1.canvasSupported) {
    try {
        !doc.namespaces.zrvml && doc.namespaces.add('zrvml', urn);
        doCreateNode = function (tagName) {
            return doc.createElement('<zrvml:' + tagName + ' class="zrvml">');
        };
    }
    catch (e) {
        doCreateNode = function (tagName) {
            return doc.createElement('<' + tagName + ' xmlns="' + urn + '" class="zrvml">');
        };
    }
}

// From raphael
function initVML() {
    if (vmlInited || !doc) {
        return;
    }
    vmlInited = true;

    var styleSheets = doc.styleSheets;
    if (styleSheets.length < 31) {
        doc.createStyleSheet().addRule('.zrvml', 'behavior:url(#default#VML)');
    }
    else {
        // http://msdn.microsoft.com/en-us/library/ms531194%28VS.85%29.aspx
        styleSheets[0].addRule('.zrvml', 'behavior:url(#default#VML)');
    }
}

// http://www.w3.org/TR/NOTE-VML
// TODO Use proxy like svg instead of overwrite brush methods

var CMD$3 = PathProxy.CMD;
var round$2 = Math.round;
var sqrt = Math.sqrt;
var abs$1 = Math.abs;
var cos = Math.cos;
var sin = Math.sin;
var mathMax$5 = Math.max;

if (!env$1.canvasSupported) {

    var comma = ',';
    var imageTransformPrefix = 'progid:DXImageTransform.Microsoft';

    var Z = 21600;
    var Z2 = Z / 2;

    var ZLEVEL_BASE = 100000;
    var Z_BASE = 1000;

    var initRootElStyle = function (el) {
        el.style.cssText = 'position:absolute;left:0;top:0;width:1px;height:1px;';
        el.coordsize = Z + ',' + Z;
        el.coordorigin = '0,0';
    };

    var encodeHtmlAttribute = function (s) {
        return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    };

    var rgb2Str = function (r, g, b) {
        return 'rgb(' + [r, g, b].join(',') + ')';
    };

    var append = function (parent, child) {
        if (child && parent && child.parentNode !== parent) {
            parent.appendChild(child);
        }
    };

    var remove = function (parent, child) {
        if (child && parent && child.parentNode === parent) {
            parent.removeChild(child);
        }
    };

    var getZIndex = function (zlevel, z, z2) {
        // z 的取值范围为 [0, 1000]
        return (parseFloat(zlevel) || 0) * ZLEVEL_BASE + (parseFloat(z) || 0) * Z_BASE + z2;
    };

    var parsePercent$3 = function (value, maxValue) {
        if (typeof value === 'string') {
            if (value.lastIndexOf('%') >= 0) {
                return parseFloat(value) / 100 * maxValue;
            }
            return parseFloat(value);
        }
        return value;
    };

    /***************************************************
     * PATH
     **************************************************/

    var setColorAndOpacity = function (el, color, opacity) {
        var colorArr = parse(color);
        opacity = +opacity;
        if (isNaN(opacity)) {
            opacity = 1;
        }
        if (colorArr) {
            el.color = rgb2Str(colorArr[0], colorArr[1], colorArr[2]);
            el.opacity = opacity * colorArr[3];
        }
    };

    var getColorAndAlpha = function (color) {
        var colorArr = parse(color);
        return [
            rgb2Str(colorArr[0], colorArr[1], colorArr[2]),
            colorArr[3]
        ];
    };

    var updateFillNode = function (el, style, zrEl) {
        // TODO pattern
        var fill = style.fill;
        if (fill != null) {
            // Modified from excanvas
            if (fill instanceof Gradient) {
                var gradientType;
                var angle = 0;
                var focus = [0, 0];
                // additional offset
                var shift = 0;
                // scale factor for offset
                var expansion = 1;
                var rect = zrEl.getBoundingRect();
                var rectWidth = rect.width;
                var rectHeight = rect.height;
                if (fill.type === 'linear') {
                    gradientType = 'gradient';
                    var transform = zrEl.transform;
                    var p0 = [fill.x * rectWidth, fill.y * rectHeight];
                    var p1 = [fill.x2 * rectWidth, fill.y2 * rectHeight];
                    if (transform) {
                        applyTransform(p0, p0, transform);
                        applyTransform(p1, p1, transform);
                    }
                    var dx = p1[0] - p0[0];
                    var dy = p1[1] - p0[1];
                    angle = Math.atan2(dx, dy) * 180 / Math.PI;
                    // The angle should be a non-negative number.
                    if (angle < 0) {
                        angle += 360;
                    }

                    // Very small angles produce an unexpected result because they are
                    // converted to a scientific notation string.
                    if (angle < 1e-6) {
                        angle = 0;
                    }
                }
                else {
                    gradientType = 'gradientradial';
                    var p0 = [fill.x * rectWidth, fill.y * rectHeight];
                    var transform = zrEl.transform;
                    var scale$$1 = zrEl.scale;
                    var width = rectWidth;
                    var height = rectHeight;
                    focus = [
                        // Percent in bounding rect
                        (p0[0] - rect.x) / width,
                        (p0[1] - rect.y) / height
                    ];
                    if (transform) {
                        applyTransform(p0, p0, transform);
                    }

                    width /= scale$$1[0] * Z;
                    height /= scale$$1[1] * Z;
                    var dimension = mathMax$5(width, height);
                    shift = 2 * 0 / dimension;
                    expansion = 2 * fill.r / dimension - shift;
                }

                // We need to sort the color stops in ascending order by offset,
                // otherwise IE won't interpret it correctly.
                var stops = fill.colorStops.slice();
                stops.sort(function (cs1, cs2) {
                    return cs1.offset - cs2.offset;
                });

                var length$$1 = stops.length;
                // Color and alpha list of first and last stop
                var colorAndAlphaList = [];
                var colors = [];
                for (var i = 0; i < length$$1; i++) {
                    var stop = stops[i];
                    var colorAndAlpha = getColorAndAlpha(stop.color);
                    colors.push(stop.offset * expansion + shift + ' ' + colorAndAlpha[0]);
                    if (i === 0 || i === length$$1 - 1) {
                        colorAndAlphaList.push(colorAndAlpha);
                    }
                }

                if (length$$1 >= 2) {
                    var color1 = colorAndAlphaList[0][0];
                    var color2 = colorAndAlphaList[1][0];
                    var opacity1 = colorAndAlphaList[0][1] * style.opacity;
                    var opacity2 = colorAndAlphaList[1][1] * style.opacity;

                    el.type = gradientType;
                    el.method = 'none';
                    el.focus = '100%';
                    el.angle = angle;
                    el.color = color1;
                    el.color2 = color2;
                    el.colors = colors.join(',');
                    // When colors attribute is used, the meanings of opacity and o:opacity2
                    // are reversed.
                    el.opacity = opacity2;
                    // FIXME g_o_:opacity ?
                    el.opacity2 = opacity1;
                }
                if (gradientType === 'radial') {
                    el.focusposition = focus.join(',');
                }
            }
            else {
                // FIXME Change from Gradient fill to color fill
                setColorAndOpacity(el, fill, style.opacity);
            }
        }
    };

    var updateStrokeNode = function (el, style) {
        // if (style.lineJoin != null) {
        //     el.joinstyle = style.lineJoin;
        // }
        // if (style.miterLimit != null) {
        //     el.miterlimit = style.miterLimit * Z;
        // }
        // if (style.lineCap != null) {
        //     el.endcap = style.lineCap;
        // }
        if (style.lineDash) {
            el.dashstyle = style.lineDash.join(' ');
        }
        if (style.stroke != null && !(style.stroke instanceof Gradient)) {
            setColorAndOpacity(el, style.stroke, style.opacity);
        }
    };

    var updateFillAndStroke = function (vmlEl, type, style, zrEl) {
        var isFill = type === 'fill';
        var el = vmlEl.getElementsByTagName(type)[0];
        // Stroke must have lineWidth
        if (style[type] != null && style[type] !== 'none' && (isFill || (!isFill && style.lineWidth))) {
            vmlEl[isFill ? 'filled' : 'stroked'] = 'true';
            // FIXME Remove before updating, or set `colors` will throw error
            if (style[type] instanceof Gradient) {
                remove(vmlEl, el);
            }
            if (!el) {
                el = createNode(type);
            }

            isFill ? updateFillNode(el, style, zrEl) : updateStrokeNode(el, style);
            append(vmlEl, el);
        }
        else {
            vmlEl[isFill ? 'filled' : 'stroked'] = 'false';
            remove(vmlEl, el);
        }
    };

    var points$1 = [[], [], []];
    var pathDataToString = function (path, m) {
        var M = CMD$3.M;
        var C = CMD$3.C;
        var L = CMD$3.L;
        var A = CMD$3.A;
        var Q = CMD$3.Q;

        var str = [];
        var nPoint;
        var cmdStr;
        var cmd;
        var i;
        var xi;
        var yi;
        var data = path.data;
        var dataLength = path.len();
        for (i = 0; i < dataLength;) {
            cmd = data[i++];
            cmdStr = '';
            nPoint = 0;
            switch (cmd) {
                case M:
                    cmdStr = ' m ';
                    nPoint = 1;
                    xi = data[i++];
                    yi = data[i++];
                    points$1[0][0] = xi;
                    points$1[0][1] = yi;
                    break;
                case L:
                    cmdStr = ' l ';
                    nPoint = 1;
                    xi = data[i++];
                    yi = data[i++];
                    points$1[0][0] = xi;
                    points$1[0][1] = yi;
                    break;
                case Q:
                case C:
                    cmdStr = ' c ';
                    nPoint = 3;
                    var x1 = data[i++];
                    var y1 = data[i++];
                    var x2 = data[i++];
                    var y2 = data[i++];
                    var x3;
                    var y3;
                    if (cmd === Q) {
                        // Convert quadratic to cubic using degree elevation
                        x3 = x2;
                        y3 = y2;
                        x2 = (x2 + 2 * x1) / 3;
                        y2 = (y2 + 2 * y1) / 3;
                        x1 = (xi + 2 * x1) / 3;
                        y1 = (yi + 2 * y1) / 3;
                    }
                    else {
                        x3 = data[i++];
                        y3 = data[i++];
                    }
                    points$1[0][0] = x1;
                    points$1[0][1] = y1;
                    points$1[1][0] = x2;
                    points$1[1][1] = y2;
                    points$1[2][0] = x3;
                    points$1[2][1] = y3;

                    xi = x3;
                    yi = y3;
                    break;
                case A:
                    var x = 0;
                    var y = 0;
                    var sx = 1;
                    var sy = 1;
                    var angle = 0;
                    if (m) {
                        // Extract SRT from matrix
                        x = m[4];
                        y = m[5];
                        sx = sqrt(m[0] * m[0] + m[1] * m[1]);
                        sy = sqrt(m[2] * m[2] + m[3] * m[3]);
                        angle = Math.atan2(-m[1] / sy, m[0] / sx);
                    }

                    var cx = data[i++];
                    var cy = data[i++];
                    var rx = data[i++];
                    var ry = data[i++];
                    var startAngle = data[i++] + angle;
                    var endAngle = data[i++] + startAngle + angle;
                    // FIXME
                    // var psi = data[i++];
                    i++;
                    var clockwise = data[i++];

                    var x0 = cx + cos(startAngle) * rx;
                    var y0 = cy + sin(startAngle) * ry;

                    var x1 = cx + cos(endAngle) * rx;
                    var y1 = cy + sin(endAngle) * ry;

                    var type = clockwise ? ' wa ' : ' at ';
                    if (Math.abs(x0 - x1) < 1e-4) {
                        // IE won't render arches drawn counter clockwise if x0 == x1.
                        if (Math.abs(endAngle - startAngle) > 1e-2) {
                            // Offset x0 by 1/80 of a pixel. Use something
                            // that can be represented in binary
                            if (clockwise) {
                                x0 += 270 / Z;
                            }
                        }
                        else {
                            // Avoid case draw full circle
                            if (Math.abs(y0 - cy) < 1e-4) {
                                if ((clockwise && x0 < cx) || (!clockwise && x0 > cx)) {
                                    y1 -= 270 / Z;
                                }
                                else {
                                    y1 += 270 / Z;
                                }
                            }
                            else if ((clockwise && y0 < cy) || (!clockwise && y0 > cy)) {
                                x1 += 270 / Z;
                            }
                            else {
                                x1 -= 270 / Z;
                            }
                        }
                    }
                    str.push(
                        type,
                        round$2(((cx - rx) * sx + x) * Z - Z2), comma,
                        round$2(((cy - ry) * sy + y) * Z - Z2), comma,
                        round$2(((cx + rx) * sx + x) * Z - Z2), comma,
                        round$2(((cy + ry) * sy + y) * Z - Z2), comma,
                        round$2((x0 * sx + x) * Z - Z2), comma,
                        round$2((y0 * sy + y) * Z - Z2), comma,
                        round$2((x1 * sx + x) * Z - Z2), comma,
                        round$2((y1 * sy + y) * Z - Z2)
                    );

                    xi = x1;
                    yi = y1;
                    break;
                case CMD$3.R:
                    var p0 = points$1[0];
                    var p1 = points$1[1];
                    // x0, y0
                    p0[0] = data[i++];
                    p0[1] = data[i++];
                    // x1, y1
                    p1[0] = p0[0] + data[i++];
                    p1[1] = p0[1] + data[i++];

                    if (m) {
                        applyTransform(p0, p0, m);
                        applyTransform(p1, p1, m);
                    }

                    p0[0] = round$2(p0[0] * Z - Z2);
                    p1[0] = round$2(p1[0] * Z - Z2);
                    p0[1] = round$2(p0[1] * Z - Z2);
                    p1[1] = round$2(p1[1] * Z - Z2);
                    str.push(
                        // x0, y0
                        ' m ', p0[0], comma, p0[1],
                        // x1, y0
                        ' l ', p1[0], comma, p0[1],
                        // x1, y1
                        ' l ', p1[0], comma, p1[1],
                        // x0, y1
                        ' l ', p0[0], comma, p1[1]
                    );
                    break;
                case CMD$3.Z:
                    // FIXME Update xi, yi
                    str.push(' x ');
            }

            if (nPoint > 0) {
                str.push(cmdStr);
                for (var k = 0; k < nPoint; k++) {
                    var p = points$1[k];

                    m && applyTransform(p, p, m);
                    // 不 round 会非常慢
                    str.push(
                        round$2(p[0] * Z - Z2), comma, round$2(p[1] * Z - Z2),
                        k < nPoint - 1 ? comma : ''
                    );
                }
            }
        }

        return str.join('');
    };

    // Rewrite the original path method
    Path.prototype.brushVML = function (vmlRoot) {
        var style = this.style;

        var vmlEl = this._vmlEl;
        if (!vmlEl) {
            vmlEl = createNode('shape');
            initRootElStyle(vmlEl);

            this._vmlEl = vmlEl;
        }

        updateFillAndStroke(vmlEl, 'fill', style, this);
        updateFillAndStroke(vmlEl, 'stroke', style, this);

        var m = this.transform;
        var needTransform = m != null;
        var strokeEl = vmlEl.getElementsByTagName('stroke')[0];
        if (strokeEl) {
            var lineWidth = style.lineWidth;
            // Get the line scale.
            // Determinant of this.m_ means how much the area is enlarged by the
            // transformation. So its square root can be used as a scale factor
            // for width.
            if (needTransform && !style.strokeNoScale) {
                var det = m[0] * m[3] - m[1] * m[2];
                lineWidth *= sqrt(abs$1(det));
            }
            strokeEl.weight = lineWidth + 'px';
        }

        var path = this.path || (this.path = new PathProxy());
        if (this.__dirtyPath) {
            path.beginPath();
            path.subPixelOptimize = false;
            this.buildPath(path, this.shape);
            path.toStatic();
            this.__dirtyPath = false;
        }

        vmlEl.path = pathDataToString(path, this.transform);

        vmlEl.style.zIndex = getZIndex(this.zlevel, this.z, this.z2);

        // Append to root
        append(vmlRoot, vmlEl);

        // Text
        if (style.text != null) {
            this.drawRectText(vmlRoot, this.getBoundingRect());
        }
        else {
            this.removeRectText(vmlRoot);
        }
    };

    Path.prototype.onRemove = function (vmlRoot) {
        remove(vmlRoot, this._vmlEl);
        this.removeRectText(vmlRoot);
    };

    Path.prototype.onAdd = function (vmlRoot) {
        append(vmlRoot, this._vmlEl);
        this.appendRectText(vmlRoot);
    };

    /***************************************************
     * IMAGE
     **************************************************/
    var isImage = function (img) {
        // FIXME img instanceof Image 如果 img 是一个字符串的时候，IE8 下会报错
        return (typeof img === 'object') && img.tagName && img.tagName.toUpperCase() === 'IMG';
        // return img instanceof Image;
    };

    // Rewrite the original path method
    ZImage.prototype.brushVML = function (vmlRoot) {
        var style = this.style;
        var image = style.image;

        // Image original width, height
        var ow;
        var oh;

        if (isImage(image)) {
            var src = image.src;
            if (src === this._imageSrc) {
                ow = this._imageWidth;
                oh = this._imageHeight;
            }
            else {
                var imageRuntimeStyle = image.runtimeStyle;
                var oldRuntimeWidth = imageRuntimeStyle.width;
                var oldRuntimeHeight = imageRuntimeStyle.height;
                imageRuntimeStyle.width = 'auto';
                imageRuntimeStyle.height = 'auto';

                // get the original size
                ow = image.width;
                oh = image.height;

                // and remove overides
                imageRuntimeStyle.width = oldRuntimeWidth;
                imageRuntimeStyle.height = oldRuntimeHeight;

                // Caching image original width, height and src
                this._imageSrc = src;
                this._imageWidth = ow;
                this._imageHeight = oh;
            }
            image = src;
        }
        else {
            if (image === this._imageSrc) {
                ow = this._imageWidth;
                oh = this._imageHeight;
            }
        }
        if (!image) {
            return;
        }

        var x = style.x || 0;
        var y = style.y || 0;

        var dw = style.width;
        var dh = style.height;

        var sw = style.sWidth;
        var sh = style.sHeight;
        var sx = style.sx || 0;
        var sy = style.sy || 0;

        var hasCrop = sw && sh;

        var vmlEl = this._vmlEl;
        if (!vmlEl) {
            // FIXME 使用 group 在 left, top 都不是 0 的时候就无法显示了。
            // vmlEl = vmlCore.createNode('group');
            vmlEl = doc.createElement('div');
            initRootElStyle(vmlEl);

            this._vmlEl = vmlEl;
        }

        var vmlElStyle = vmlEl.style;
        var hasRotation = false;
        var m;
        var scaleX = 1;
        var scaleY = 1;
        if (this.transform) {
            m = this.transform;
            scaleX = sqrt(m[0] * m[0] + m[1] * m[1]);
            scaleY = sqrt(m[2] * m[2] + m[3] * m[3]);

            hasRotation = m[1] || m[2];
        }
        if (hasRotation) {
            // If filters are necessary (rotation exists), create them
            // filters are bog-slow, so only create them if abbsolutely necessary
            // The following check doesn't account for skews (which don't exist
            // in the canvas spec (yet) anyway.
            // From excanvas
            var p0 = [x, y];
            var p1 = [x + dw, y];
            var p2 = [x, y + dh];
            var p3 = [x + dw, y + dh];
            applyTransform(p0, p0, m);
            applyTransform(p1, p1, m);
            applyTransform(p2, p2, m);
            applyTransform(p3, p3, m);

            var maxX = mathMax$5(p0[0], p1[0], p2[0], p3[0]);
            var maxY = mathMax$5(p0[1], p1[1], p2[1], p3[1]);

            var transformFilter = [];
            transformFilter.push('M11=', m[0] / scaleX, comma,
                        'M12=', m[2] / scaleY, comma,
                        'M21=', m[1] / scaleX, comma,
                        'M22=', m[3] / scaleY, comma,
                        'Dx=', round$2(x * scaleX + m[4]), comma,
                        'Dy=', round$2(y * scaleY + m[5]));

            vmlElStyle.padding = '0 ' + round$2(maxX) + 'px ' + round$2(maxY) + 'px 0';
            // FIXME DXImageTransform 在 IE11 的兼容模式下不起作用
            vmlElStyle.filter = imageTransformPrefix + '.Matrix('
                + transformFilter.join('') + ', SizingMethod=clip)';

        }
        else {
            if (m) {
                x = x * scaleX + m[4];
                y = y * scaleY + m[5];
            }
            vmlElStyle.filter = '';
            vmlElStyle.left = round$2(x) + 'px';
            vmlElStyle.top = round$2(y) + 'px';
        }

        var imageEl = this._imageEl;
        var cropEl = this._cropEl;

        if (!imageEl) {
            imageEl = doc.createElement('div');
            this._imageEl = imageEl;
        }
        var imageELStyle = imageEl.style;
        if (hasCrop) {
            // Needs know image original width and height
            if (!(ow && oh)) {
                var tmpImage = new Image();
                var self = this;
                tmpImage.onload = function () {
                    tmpImage.onload = null;
                    ow = tmpImage.width;
                    oh = tmpImage.height;
                    // Adjust image width and height to fit the ratio destinationSize / sourceSize
                    imageELStyle.width = round$2(scaleX * ow * dw / sw) + 'px';
                    imageELStyle.height = round$2(scaleY * oh * dh / sh) + 'px';

                    // Caching image original width, height and src
                    self._imageWidth = ow;
                    self._imageHeight = oh;
                    self._imageSrc = image;
                };
                tmpImage.src = image;
            }
            else {
                imageELStyle.width = round$2(scaleX * ow * dw / sw) + 'px';
                imageELStyle.height = round$2(scaleY * oh * dh / sh) + 'px';
            }

            if (!cropEl) {
                cropEl = doc.createElement('div');
                cropEl.style.overflow = 'hidden';
                this._cropEl = cropEl;
            }
            var cropElStyle = cropEl.style;
            cropElStyle.width = round$2((dw + sx * dw / sw) * scaleX);
            cropElStyle.height = round$2((dh + sy * dh / sh) * scaleY);
            cropElStyle.filter = imageTransformPrefix + '.Matrix(Dx='
                    + (-sx * dw / sw * scaleX) + ',Dy=' + (-sy * dh / sh * scaleY) + ')';

            if (!cropEl.parentNode) {
                vmlEl.appendChild(cropEl);
            }
            if (imageEl.parentNode !== cropEl) {
                cropEl.appendChild(imageEl);
            }
        }
        else {
            imageELStyle.width = round$2(scaleX * dw) + 'px';
            imageELStyle.height = round$2(scaleY * dh) + 'px';

            vmlEl.appendChild(imageEl);

            if (cropEl && cropEl.parentNode) {
                vmlEl.removeChild(cropEl);
                this._cropEl = null;
            }
        }

        var filterStr = '';
        var alpha = style.opacity;
        if (alpha < 1) {
            filterStr += '.Alpha(opacity=' + round$2(alpha * 100) + ') ';
        }
        filterStr += imageTransformPrefix + '.AlphaImageLoader(src=' + image + ', SizingMethod=scale)';

        imageELStyle.filter = filterStr;

        vmlEl.style.zIndex = getZIndex(this.zlevel, this.z, this.z2);

        // Append to root
        append(vmlRoot, vmlEl);

        // Text
        if (style.text != null) {
            this.drawRectText(vmlRoot, this.getBoundingRect());
        }
    };

    ZImage.prototype.onRemove = function (vmlRoot) {
        remove(vmlRoot, this._vmlEl);

        this._vmlEl = null;
        this._cropEl = null;
        this._imageEl = null;

        this.removeRectText(vmlRoot);
    };

    ZImage.prototype.onAdd = function (vmlRoot) {
        append(vmlRoot, this._vmlEl);
        this.appendRectText(vmlRoot);
    };


    /***************************************************
     * TEXT
     **************************************************/

    var DEFAULT_STYLE_NORMAL = 'normal';

    var fontStyleCache = {};
    var fontStyleCacheCount = 0;
    var MAX_FONT_CACHE_SIZE = 100;
    var fontEl = document.createElement('div');

    var getFontStyle = function (fontString) {
        var fontStyle = fontStyleCache[fontString];
        if (!fontStyle) {
            // Clear cache
            if (fontStyleCacheCount > MAX_FONT_CACHE_SIZE) {
                fontStyleCacheCount = 0;
                fontStyleCache = {};
            }

            var style = fontEl.style;
            var fontFamily;
            try {
                style.font = fontString;
                fontFamily = style.fontFamily.split(',')[0];
            }
            catch (e) {
            }

            fontStyle = {
                style: style.fontStyle || DEFAULT_STYLE_NORMAL,
                variant: style.fontVariant || DEFAULT_STYLE_NORMAL,
                weight: style.fontWeight || DEFAULT_STYLE_NORMAL,
                size: parseFloat(style.fontSize || 12) | 0,
                family: fontFamily || 'Microsoft YaHei'
            };

            fontStyleCache[fontString] = fontStyle;
            fontStyleCacheCount++;
        }
        return fontStyle;
    };

    var textMeasureEl;
    // Overwrite measure text method
    $override$1('measureText', function (text, textFont) {
        var doc$$1 = doc;
        if (!textMeasureEl) {
            textMeasureEl = doc$$1.createElement('div');
            textMeasureEl.style.cssText = 'position:absolute;top:-20000px;left:0;'
                + 'padding:0;margin:0;border:none;white-space:pre;';
            doc.body.appendChild(textMeasureEl);
        }

        try {
            textMeasureEl.style.font = textFont;
        }
        catch (ex) {
            // Ignore failures to set to invalid font.
        }
        textMeasureEl.innerHTML = '';
        // Don't use innerHTML or innerText because they allow markup/whitespace.
        textMeasureEl.appendChild(doc$$1.createTextNode(text));
        return {
            width: textMeasureEl.offsetWidth
        };
    });

    var tmpRect$2 = new BoundingRect();

    var drawRectText = function (vmlRoot, rect, textRect, fromTextEl) {

        var style = this.style;

        // Optimize, avoid normalize every time.
        this.__dirty && normalizeTextStyle(style, true);

        var text = style.text;
        // Convert to string
        text != null && (text += '');
        if (!text) {
            return;
        }

        // Convert rich text to plain text. Rich text is not supported in
        // IE8-, but tags in rich text template will be removed.
        if (style.rich) {
            var contentBlock = parseRichText(text, style);
            text = [];
            for (var i = 0; i < contentBlock.lines.length; i++) {
                var tokens = contentBlock.lines[i].tokens;
                var textLine = [];
                for (var j = 0; j < tokens.length; j++) {
                    textLine.push(tokens[j].text);
                }
                text.push(textLine.join(''));
            }
            text = text.join('\n');
        }

        var x;
        var y;
        var align = style.textAlign;
        var verticalAlign = style.textVerticalAlign;

        var fontStyle = getFontStyle(style.font);
        // FIXME encodeHtmlAttribute ?
        var font = fontStyle.style + ' ' + fontStyle.variant + ' ' + fontStyle.weight + ' '
            + fontStyle.size + 'px "' + fontStyle.family + '"';

        textRect = textRect || getBoundingRect(
            text, font, align, verticalAlign, style.textPadding, style.textLineHeight
        );

        // Transform rect to view space
        var m = this.transform;
        // Ignore transform for text in other element
        if (m && !fromTextEl) {
            tmpRect$2.copy(rect);
            tmpRect$2.applyTransform(m);
            rect = tmpRect$2;
        }

        if (!fromTextEl) {
            var textPosition = style.textPosition;
            // Text position represented by coord
            if (textPosition instanceof Array) {
                x = rect.x + parsePercent$3(textPosition[0], rect.width);
                y = rect.y + parsePercent$3(textPosition[1], rect.height);

                align = align || 'left';
            }
            else {
                var res = this.calculateTextPosition
                    ? this.calculateTextPosition({}, style, rect)
                    : calculateTextPosition({}, style, rect);
                x = res.x;
                y = res.y;

                // Default align and baseline when has textPosition
                align = align || res.textAlign;
                verticalAlign = verticalAlign || res.textVerticalAlign;
            }
        }
        else {
            x = rect.x;
            y = rect.y;
        }

        x = adjustTextX(x, textRect.width, align);
        y = adjustTextY(y, textRect.height, verticalAlign);

        // Force baseline 'middle'
        y += textRect.height / 2;

        // var fontSize = fontStyle.size;
        // 1.75 is an arbitrary number, as there is no info about the text baseline
        // switch (baseline) {
            // case 'hanging':
            // case 'top':
            //     y += fontSize / 1.75;
            //     break;
        //     case 'middle':
        //         break;
        //     default:
        //     // case null:
        //     // case 'alphabetic':
        //     // case 'ideographic':
        //     // case 'bottom':
        //         y -= fontSize / 2.25;
        //         break;
        // }

        // switch (align) {
        //     case 'left':
        //         break;
        //     case 'center':
        //         x -= textRect.width / 2;
        //         break;
        //     case 'right':
        //         x -= textRect.width;
        //         break;
            // case 'end':
                // align = elementStyle.direction == 'ltr' ? 'right' : 'left';
                // break;
            // case 'start':
                // align = elementStyle.direction == 'rtl' ? 'right' : 'left';
                // break;
            // default:
            //     align = 'left';
        // }

        var createNode$$1 = createNode;

        var textVmlEl = this._textVmlEl;
        var pathEl;
        var textPathEl;
        var skewEl;
        if (!textVmlEl) {
            textVmlEl = createNode$$1('line');
            pathEl = createNode$$1('path');
            textPathEl = createNode$$1('textpath');
            skewEl = createNode$$1('skew');

            // FIXME Why here is not cammel case
            // Align 'center' seems wrong
            textPathEl.style['v-text-align'] = 'left';

            initRootElStyle(textVmlEl);

            pathEl.textpathok = true;
            textPathEl.on = true;

            textVmlEl.from = '0 0';
            textVmlEl.to = '1000 0.05';

            append(textVmlEl, skewEl);
            append(textVmlEl, pathEl);
            append(textVmlEl, textPathEl);

            this._textVmlEl = textVmlEl;
        }
        else {
            // 这里是在前面 appendChild 保证顺序的前提下
            skewEl = textVmlEl.firstChild;
            pathEl = skewEl.nextSibling;
            textPathEl = pathEl.nextSibling;
        }

        var coords = [x, y];
        var textVmlElStyle = textVmlEl.style;
        // Ignore transform for text in other element
        if (m && fromTextEl) {
            applyTransform(coords, coords, m);

            skewEl.on = true;

            skewEl.matrix = m[0].toFixed(3) + comma + m[2].toFixed(3) + comma
                            + m[1].toFixed(3) + comma + m[3].toFixed(3) + ',0,0';

            // Text position
            skewEl.offset = (round$2(coords[0]) || 0) + ',' + (round$2(coords[1]) || 0);
            // Left top point as origin
            skewEl.origin = '0 0';

            textVmlElStyle.left = '0px';
            textVmlElStyle.top = '0px';
        }
        else {
            skewEl.on = false;
            textVmlElStyle.left = round$2(x) + 'px';
            textVmlElStyle.top = round$2(y) + 'px';
        }

        textPathEl.string = encodeHtmlAttribute(text);
        // TODO
        try {
            textPathEl.style.font = font;
        }
        // Error font format
        catch (e) {}

        updateFillAndStroke(textVmlEl, 'fill', {
            fill: style.textFill,
            opacity: style.opacity
        }, this);
        updateFillAndStroke(textVmlEl, 'stroke', {
            stroke: style.textStroke,
            opacity: style.opacity,
            lineDash: style.lineDash || null // style.lineDash can be `false`.
        }, this);

        textVmlEl.style.zIndex = getZIndex(this.zlevel, this.z, this.z2);

        // Attached to root
        append(vmlRoot, textVmlEl);
    };

    var removeRectText = function (vmlRoot) {
        remove(vmlRoot, this._textVmlEl);
        this._textVmlEl = null;
    };

    var appendRectText = function (vmlRoot) {
        append(vmlRoot, this._textVmlEl);
    };

    var list = [RectText, Displayable, ZImage, Path, Text];

    // In case Displayable has been mixed in RectText
    for (var i$1 = 0; i$1 < list.length; i$1++) {
        var proto$7 = list[i$1].prototype;
        proto$7.drawRectText = drawRectText;
        proto$7.removeRectText = removeRectText;
        proto$7.appendRectText = appendRectText;
    }

    Text.prototype.brushVML = function (vmlRoot) {
        var style = this.style;
        if (style.text != null) {
            this.drawRectText(vmlRoot, {
                x: style.x || 0, y: style.y || 0,
                width: 0, height: 0
            }, this.getBoundingRect(), true);
        }
        else {
            this.removeRectText(vmlRoot);
        }
    };

    Text.prototype.onRemove = function (vmlRoot) {
        this.removeRectText(vmlRoot);
    };

    Text.prototype.onAdd = function (vmlRoot) {
        this.appendRectText(vmlRoot);
    };
}

/**
 * VML Painter.
 *
 * @module zrender/vml/Painter
 */

function parseInt10$1(val) {
    return parseInt(val, 10);
}

/**
 * @alias module:zrender/vml/Painter
 */
function VMLPainter(root, storage) {

    initVML();

    this.root = root;

    this.storage = storage;

    var vmlViewport = document.createElement('div');

    var vmlRoot = document.createElement('div');

    vmlViewport.style.cssText = 'display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;';

    vmlRoot.style.cssText = 'position:absolute;left:0;top:0;';

    root.appendChild(vmlViewport);

    this._vmlRoot = vmlRoot;
    this._vmlViewport = vmlViewport;

    this.resize();

    // Modify storage
    var oldDelFromStorage = storage.delFromStorage;
    var oldAddToStorage = storage.addToStorage;
    storage.delFromStorage = function (el) {
        oldDelFromStorage.call(storage, el);

        if (el) {
            el.onRemove && el.onRemove(vmlRoot);
        }
    };

    storage.addToStorage = function (el) {
        // Displayable already has a vml node
        el.onAdd && el.onAdd(vmlRoot);

        oldAddToStorage.call(storage, el);
    };

    this._firstPaint = true;
}

VMLPainter.prototype = {

    constructor: VMLPainter,

    getType: function () {
        return 'vml';
    },

    /**
     * @return {HTMLDivElement}
     */
    getViewportRoot: function () {
        return this._vmlViewport;
    },

    getViewportRootOffset: function () {
        var viewportRoot = this.getViewportRoot();
        if (viewportRoot) {
            return {
                offsetLeft: viewportRoot.offsetLeft || 0,
                offsetTop: viewportRoot.offsetTop || 0
            };
        }
    },

    /**
     * 刷新
     */
    refresh: function () {

        var list = this.storage.getDisplayList(true, true);

        this._paintList(list);
    },

    _paintList: function (list) {
        var vmlRoot = this._vmlRoot;
        for (var i = 0; i < list.length; i++) {
            var el = list[i];
            if (el.invisible || el.ignore) {
                if (!el.__alreadyNotVisible) {
                    el.onRemove(vmlRoot);
                }
                // Set as already invisible
                el.__alreadyNotVisible = true;
            }
            else {
                if (el.__alreadyNotVisible) {
                    el.onAdd(vmlRoot);
                }
                el.__alreadyNotVisible = false;
                if (el.__dirty) {
                    el.beforeBrush && el.beforeBrush();
                    (el.brushVML || el.brush).call(el, vmlRoot);
                    el.afterBrush && el.afterBrush();
                }
            }
            el.__dirty = false;
        }

        if (this._firstPaint) {
            // Detached from document at first time
            // to avoid page refreshing too many times

            // FIXME 如果每次都先 removeChild 可能会导致一些填充和描边的效果改变
            this._vmlViewport.appendChild(vmlRoot);
            this._firstPaint = false;
        }
    },

    resize: function (width, height) {
        var width = width == null ? this._getWidth() : width;
        var height = height == null ? this._getHeight() : height;

        if (this._width !== width || this._height !== height) {
            this._width = width;
            this._height = height;

            var vmlViewportStyle = this._vmlViewport.style;
            vmlViewportStyle.width = width + 'px';
            vmlViewportStyle.height = height + 'px';
        }
    },

    dispose: function () {
        this.root.innerHTML = '';

        this._vmlRoot =
        this._vmlViewport =
        this.storage = null;
    },

    getWidth: function () {
        return this._width;
    },

    getHeight: function () {
        return this._height;
    },

    clear: function () {
        if (this._vmlViewport) {
            this.root.removeChild(this._vmlViewport);
        }
    },

    _getWidth: function () {
        var root = this.root;
        var stl = root.currentStyle;

        return ((root.clientWidth || parseInt10$1(stl.width))
                - parseInt10$1(stl.paddingLeft)
                - parseInt10$1(stl.paddingRight)) | 0;
    },

    _getHeight: function () {
        var root = this.root;
        var stl = root.currentStyle;

        return ((root.clientHeight || parseInt10$1(stl.height))
                - parseInt10$1(stl.paddingTop)
                - parseInt10$1(stl.paddingBottom)) | 0;
    }
};

// Not supported methods
function createMethodNotSupport(method) {
    return function () {
        zrLog('In IE8.0 VML mode painter not support method "' + method + '"');
    };
}

// Unsupported methods
each$1([
    'getLayer', 'insertLayer', 'eachLayer', 'eachBuiltinLayer', 'eachOtherLayer', 'getLayers',
    'modLayer', 'delLayer', 'clearLayer', 'toDataURL', 'pathToImage'
], function (name) {
    VMLPainter.prototype[name] = createMethodNotSupport(name);
});

registerPainter('vml', VMLPainter);

var svgURI = 'http://www.w3.org/2000/svg';

function createElement(name) {
    return document.createElementNS(svgURI, name);
}

// TODO
// 1. shadow
// 2. Image: sx, sy, sw, sh

var CMD$4 = PathProxy.CMD;
var arrayJoin = Array.prototype.join;

var NONE = 'none';
var mathRound = Math.round;
var mathSin$3 = Math.sin;
var mathCos$3 = Math.cos;
var PI$3 = Math.PI;
var PI2$5 = Math.PI * 2;
var degree = 180 / PI$3;

var EPSILON$4 = 1e-4;

function round4(val) {
    return mathRound(val * 1e4) / 1e4;
}

function isAroundZero$1(val) {
    return val < EPSILON$4 && val > -EPSILON$4;
}

function pathHasFill(style, isText) {
    var fill = isText ? style.textFill : style.fill;
    return fill != null && fill !== NONE;
}

function pathHasStroke(style, isText) {
    var stroke = isText ? style.textStroke : style.stroke;
    return stroke != null && stroke !== NONE;
}

function setTransform(svgEl, m) {
    if (m) {
        attr(svgEl, 'transform', 'matrix(' + arrayJoin.call(m, ',') + ')');
    }
}

function attr(el, key, val) {
    if (!val || val.type !== 'linear' && val.type !== 'radial') {
        // Don't set attribute for gradient, since it need new dom nodes
        el.setAttribute(key, val);
    }
}

function attrXLink(el, key, val) {
    el.setAttributeNS('http://www.w3.org/1999/xlink', key, val);
}

function bindStyle(svgEl, style, isText, el) {
    if (pathHasFill(style, isText)) {
        var fill = isText ? style.textFill : style.fill;
        fill = fill === 'transparent' ? NONE : fill;
        attr(svgEl, 'fill', fill);
        attr(svgEl, 'fill-opacity', style.fillOpacity != null ? style.fillOpacity * style.opacity : style.opacity);
    }
    else {
        attr(svgEl, 'fill', NONE);
    }

    if (pathHasStroke(style, isText)) {
        var stroke = isText ? style.textStroke : style.stroke;
        stroke = stroke === 'transparent' ? NONE : stroke;
        attr(svgEl, 'stroke', stroke);
        var strokeWidth = isText
            ? style.textStrokeWidth
            : style.lineWidth;
        var strokeScale = !isText && style.strokeNoScale
            ? el.getLineScale()
            : 1;
        attr(svgEl, 'stroke-width', strokeWidth / strokeScale);
        // stroke then fill for text; fill then stroke for others
        attr(svgEl, 'paint-order', isText ? 'stroke' : 'fill');
        attr(svgEl, 'stroke-opacity', style.strokeOpacity != null ? style.strokeOpacity : style.opacity);
        var lineDash = style.lineDash;
        if (lineDash) {
            attr(svgEl, 'stroke-dasharray', style.lineDash.join(','));
            attr(svgEl, 'stroke-dashoffset', mathRound(style.lineDashOffset || 0));
        }
        else {
            attr(svgEl, 'stroke-dasharray', '');
        }

        // PENDING
        style.lineCap && attr(svgEl, 'stroke-linecap', style.lineCap);
        style.lineJoin && attr(svgEl, 'stroke-linejoin', style.lineJoin);
        style.miterLimit && attr(svgEl, 'stroke-miterlimit', style.miterLimit);
    }
    else {
        attr(svgEl, 'stroke', NONE);
    }
}

/***************************************************
 * PATH
 **************************************************/
function pathDataToString$1(path) {
    var str = [];
    var data = path.data;
    var dataLength = path.len();
    for (var i = 0; i < dataLength;) {
        var cmd = data[i++];
        var cmdStr = '';
        var nData = 0;
        switch (cmd) {
            case CMD$4.M:
                cmdStr = 'M';
                nData = 2;
                break;
            case CMD$4.L:
                cmdStr = 'L';
                nData = 2;
                break;
            case CMD$4.Q:
                cmdStr = 'Q';
                nData = 4;
                break;
            case CMD$4.C:
                cmdStr = 'C';
                nData = 6;
                break;
            case CMD$4.A:
                var cx = data[i++];
                var cy = data[i++];
                var rx = data[i++];
                var ry = data[i++];
                var theta = data[i++];
                var dTheta = data[i++];
                var psi = data[i++];
                var clockwise = data[i++];

                var dThetaPositive = Math.abs(dTheta);
                var isCircle = isAroundZero$1(dThetaPositive - PI2$5)
                    && !isAroundZero$1(dThetaPositive);

                var large = false;
                if (dThetaPositive >= PI2$5) {
                    large = true;
                }
                else if (isAroundZero$1(dThetaPositive)) {
                    large = false;
                }
                else {
                    large = (dTheta > -PI$3 && dTheta < 0 || dTheta > PI$3)
                        === !!clockwise;
                }

                var x0 = round4(cx + rx * mathCos$3(theta));
                var y0 = round4(cy + ry * mathSin$3(theta));

                // It will not draw if start point and end point are exactly the same
                // We need to shift the end point with a small value
                // FIXME A better way to draw circle ?
                if (isCircle) {
                    if (clockwise) {
                        dTheta = PI2$5 - 1e-4;
                    }
                    else {
                        dTheta = -PI2$5 + 1e-4;
                    }

                    large = true;

                    if (i === 9) {
                        // Move to (x0, y0) only when CMD.A comes at the
                        // first position of a shape.
                        // For instance, when drawing a ring, CMD.A comes
                        // after CMD.M, so it's unnecessary to move to
                        // (x0, y0).
                        str.push('M', x0, y0);
                    }
                }

                var x = round4(cx + rx * mathCos$3(theta + dTheta));
                var y = round4(cy + ry * mathSin$3(theta + dTheta));

                // FIXME Ellipse
                str.push('A', round4(rx), round4(ry),
                    mathRound(psi * degree), +large, +clockwise, x, y);
                break;
            case CMD$4.Z:
                cmdStr = 'Z';
                break;
            case CMD$4.R:
                var x = round4(data[i++]);
                var y = round4(data[i++]);
                var w = round4(data[i++]);
                var h = round4(data[i++]);
                str.push(
                    'M', x, y,
                    'L', x + w, y,
                    'L', x + w, y + h,
                    'L', x, y + h,
                    'L', x, y
                );
                break;
        }
        cmdStr && str.push(cmdStr);
        for (var j = 0; j < nData; j++) {
            // PENDING With scale
            str.push(round4(data[i++]));
        }
    }
    return str.join(' ');
}

var svgPath = {};
svgPath.brush = function (el) {
    var style = el.style;

    var svgEl = el.__svgEl;
    if (!svgEl) {
        svgEl = createElement('path');
        el.__svgEl = svgEl;
    }

    if (!el.path) {
        el.createPathProxy();
    }
    var path = el.path;

    if (el.__dirtyPath) {
        path.beginPath();
        path.subPixelOptimize = false;
        el.buildPath(path, el.shape);
        el.__dirtyPath = false;

        var pathStr = pathDataToString$1(path);
        if (pathStr.indexOf('NaN') < 0) {
            // Ignore illegal path, which may happen such in out-of-range
            // data in Calendar series.
            attr(svgEl, 'd', pathStr);
        }
    }

    bindStyle(svgEl, style, false, el);
    setTransform(svgEl, el.transform);

    if (style.text != null) {
        svgTextDrawRectText(el, el.getBoundingRect());
    }
};

/***************************************************
 * IMAGE
 **************************************************/
var svgImage = {};
svgImage.brush = function (el) {
    var style = el.style;
    var image = style.image;

    if (image instanceof HTMLImageElement) {
        var src = image.src;
        image = src;
    }
    if (!image) {
        return;
    }

    var x = style.x || 0;
    var y = style.y || 0;

    var dw = style.width;
    var dh = style.height;

    var svgEl = el.__svgEl;
    if (!svgEl) {
        svgEl = createElement('image');
        el.__svgEl = svgEl;
    }

    if (image !== el.__imageSrc) {
        attrXLink(svgEl, 'href', image);
        // Caching image src
        el.__imageSrc = image;
    }

    attr(svgEl, 'width', dw);
    attr(svgEl, 'height', dh);

    attr(svgEl, 'x', x);
    attr(svgEl, 'y', y);

    setTransform(svgEl, el.transform);

    if (style.text != null) {
        svgTextDrawRectText(el, el.getBoundingRect());
    }
};

/***************************************************
 * TEXT
 **************************************************/
var svgText = {};
var tmpRect$3 = new BoundingRect();
var tmpTextPositionResult = {};

var svgTextDrawRectText = function (el, rect, textRect) {
    var style = el.style;

    el.__dirty && normalizeTextStyle(style, true);

    var text = style.text;
    // Convert to string
    if (text == null) {
        // Draw no text only when text is set to null, but not ''
        return;
    }
    else {
        text += '';
    }

    var textSvgEl = el.__textSvgEl;
    if (!textSvgEl) {
        textSvgEl = createElement('text');
        el.__textSvgEl = textSvgEl;
    }

    var x;
    var y;
    var textPosition = style.textPosition;
    var align = style.textAlign || 'left';

    if (typeof style.fontSize === 'number') {
        style.fontSize += 'px';
    }
    var font = style.font
        || [
            style.fontStyle || '',
            style.fontWeight || '',
            style.fontSize || '',
            style.fontFamily || ''
        ].join(' ')
        || DEFAULT_FONT$1;

    var verticalAlign = style.textVerticalAlign;

    textRect = getBoundingRect(
        text, font, align,
        verticalAlign, style.textPadding, style.textLineHeight
    );

    var lineHeight = textRect.lineHeight;
    // Text position represented by coord
    if (textPosition instanceof Array) {
        x = rect.x + textPosition[0];
        y = rect.y + textPosition[1];
    }
    else {
        var newPos = el.calculateTextPosition
            ? el.calculateTextPosition(tmpTextPositionResult, style, rect)
            : calculateTextPosition(tmpTextPositionResult, style, rect);
        x = newPos.x;
        y = newPos.y;
        verticalAlign = newPos.textVerticalAlign;
        align = newPos.textAlign;
    }

    setVerticalAlign(textSvgEl, verticalAlign);

    if (font) {
        textSvgEl.style.font = font;
    }

    var textPadding = style.textPadding;

    // Make baseline top
    attr(textSvgEl, 'x', x);
    attr(textSvgEl, 'y', y);

    bindStyle(textSvgEl, style, true, el);
    if (el instanceof Text || el.style.transformText) {
        // Transform text with element
        setTransform(textSvgEl, el.transform);
    }
    else {
        if (el.transform) {
            tmpRect$3.copy(rect);
            tmpRect$3.applyTransform(el.transform);
            rect = tmpRect$3;
        }
        else {
            var pos = el.transformCoordToGlobal(rect.x, rect.y);
            rect.x = pos[0];
            rect.y = pos[1];
            el.transform = identity(create$1());
        }

        // Text rotation, but no element transform
        var origin = style.textOrigin;
        if (origin === 'center') {
            x = textRect.width / 2 + x;
            y = textRect.height / 2 + y;
        }
        else if (origin) {
            x = origin[0] + x;
            y = origin[1] + y;
        }
        var rotate$$1 = -style.textRotation || 0;
        var transform = create$1();
        // Apply textRotate to element matrix
        rotate(transform, transform, rotate$$1);

        var pos = [el.transform[4], el.transform[5]];
        translate(transform, transform, pos);
        setTransform(textSvgEl, transform);
    }

    var textLines = text.split('\n');
    var nTextLines = textLines.length;
    var textAnchor = align;
    // PENDING
    if (textAnchor === 'left') {
        textAnchor = 'start';
        textPadding && (x += textPadding[3]);
    }
    else if (textAnchor === 'right') {
        textAnchor = 'end';
        textPadding && (x -= textPadding[1]);
    }
    else if (textAnchor === 'center') {
        textAnchor = 'middle';
        textPadding && (x += (textPadding[3] - textPadding[1]) / 2);
    }

    var dy = 0;
    if (verticalAlign === 'bottom') {
        dy = -textRect.height + lineHeight;
        textPadding && (dy -= textPadding[2]);
    }
    else if (verticalAlign === 'middle') {
        dy = (-textRect.height + lineHeight) / 2;
        textPadding && (y += (textPadding[0] - textPadding[2]) / 2);
    }
    else {
        textPadding && (dy += textPadding[0]);
    }

    // Font may affect position of each tspan elements
    if (el.__text !== text || el.__textFont !== font) {
        var tspanList = el.__tspanList || [];
        el.__tspanList = tspanList;
        for (var i = 0; i < nTextLines; i++) {
            // Using cached tspan elements
            var tspan = tspanList[i];
            if (!tspan) {
                tspan = tspanList[i] = createElement('tspan');
                textSvgEl.appendChild(tspan);
                setVerticalAlign(tspan, verticalAlign);
                attr(tspan, 'text-anchor', textAnchor);
            }
            else {
                tspan.innerHTML = '';
            }
            attr(tspan, 'x', x);
            attr(tspan, 'y', y + i * lineHeight + dy);
            tspan.appendChild(document.createTextNode(textLines[i]));
        }
        // Remove unsed tspan elements
        for (; i < tspanList.length; i++) {
            textSvgEl.removeChild(tspanList[i]);
        }
        tspanList.length = nTextLines;

        el.__text = text;
        el.__textFont = font;
    }
    else if (el.__tspanList.length) {
        // Update span x and y
        var len = el.__tspanList.length;
        for (var i = 0; i < len; ++i) {
            var tspan = el.__tspanList[i];
            if (tspan) {
                attr(tspan, 'x', x);
                attr(tspan, 'y', y + i * lineHeight + dy);
            }
        }
    }
};

function setVerticalAlign(textSvgEl, verticalAlign) {
    switch (verticalAlign) {
        case 'middle':
            attr(textSvgEl, 'dominant-baseline', 'middle');
            attr(textSvgEl, 'alignment-baseline', 'middle');
            break;

        case 'bottom':
            attr(textSvgEl, 'dominant-baseline', 'ideographic');
            attr(textSvgEl, 'alignment-baseline', 'ideographic');
            break;

        default:
            attr(textSvgEl, 'dominant-baseline', 'hanging');
            attr(textSvgEl, 'alignment-baseline', 'hanging');
    }
}

svgText.drawRectText = svgTextDrawRectText;

svgText.brush = function (el) {
    var style = el.style;
    if (style.text != null) {
        // 强制设置 textPosition
        style.textPosition = [0, 0];
        svgTextDrawRectText(el, {
            x: style.x || 0, y: style.y || 0,
            width: 0, height: 0
        }, el.getBoundingRect());
    }
};

// Myers' Diff Algorithm
// Modified from https://github.com/kpdecker/jsdiff/blob/master/src/diff/base.js

function Diff() {}

Diff.prototype = {
    diff: function (oldArr, newArr, equals) {
        if (!equals) {
            equals = function (a, b) {
                return a === b;
            };
        }
        this.equals = equals;

        var self = this;

        oldArr = oldArr.slice();
        newArr = newArr.slice();
        // Allow subclasses to massage the input prior to running
        var newLen = newArr.length;
        var oldLen = oldArr.length;
        var editLength = 1;
        var maxEditLength = newLen + oldLen;
        var bestPath = [{ newPos: -1, components: [] }];

        // Seed editLength = 0, i.e. the content starts with the same values
        var oldPos = this.extractCommon(bestPath[0], newArr, oldArr, 0);
        if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
            var indices = [];
            for (var i = 0; i < newArr.length; i++) {
                indices.push(i);
            }
            // Identity per the equality and tokenizer
            return [{
                indices: indices, count: newArr.length
            }];
        }

        // Main worker method. checks all permutations of a given edit length for acceptance.
        function execEditLength() {
            for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
                var basePath;
                var addPath = bestPath[diagonalPath - 1];
                var removePath = bestPath[diagonalPath + 1];
                var oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
                if (addPath) {
                    // No one else is going to attempt to use this value, clear it
                    bestPath[diagonalPath - 1] = undefined;
                }

                var canAdd = addPath && addPath.newPos + 1 < newLen;
                var canRemove = removePath && 0 <= oldPos && oldPos < oldLen;
                if (!canAdd && !canRemove) {
                    // If this path is a terminal then prune
                    bestPath[diagonalPath] = undefined;
                    continue;
                }

                // Select the diagonal that we want to branch from. We select the prior
                // path whose position in the new string is the farthest from the origin
                // and does not pass the bounds of the diff graph
                if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {
                    basePath = clonePath(removePath);
                    self.pushComponent(basePath.components, undefined, true);
                }
                else {
                    basePath = addPath;   // No need to clone, we've pulled it from the list
                    basePath.newPos++;
                    self.pushComponent(basePath.components, true, undefined);
                }

                oldPos = self.extractCommon(basePath, newArr, oldArr, diagonalPath);

                // If we have hit the end of both strings, then we are done
                if (basePath.newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
                    return buildValues(self, basePath.components, newArr, oldArr);
                }
                else {
                    // Otherwise track this path as a potential candidate and continue.
                    bestPath[diagonalPath] = basePath;
                }
            }

            editLength++;
        }

        while (editLength <= maxEditLength) {
            var ret = execEditLength();
            if (ret) {
                return ret;
            }
        }
    },

    pushComponent: function (components, added, removed) {
        var last = components[components.length - 1];
        if (last && last.added === added && last.removed === removed) {
            // We need to clone here as the component clone operation is just
            // as shallow array clone
            components[components.length - 1] = {count: last.count + 1, added: added, removed: removed };
        }
        else {
            components.push({count: 1, added: added, removed: removed });
        }
    },
    extractCommon: function (basePath, newArr, oldArr, diagonalPath) {
        var newLen = newArr.length;
        var oldLen = oldArr.length;
        var newPos = basePath.newPos;
        var oldPos = newPos - diagonalPath;
        var commonCount = 0;

        while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newArr[newPos + 1], oldArr[oldPos + 1])) {
            newPos++;
            oldPos++;
            commonCount++;
        }

        if (commonCount) {
            basePath.components.push({count: commonCount});
        }

        basePath.newPos = newPos;
        return oldPos;
    },
    tokenize: function (value) {
        return value.slice();
    },
    join: function (value) {
        return value.slice();
    }
};

function buildValues(diff, components, newArr, oldArr) {
    var componentPos = 0;
    var componentLen = components.length;
    var newPos = 0;
    var oldPos = 0;

    for (; componentPos < componentLen; componentPos++) {
        var component = components[componentPos];
        if (!component.removed) {
            var indices = [];
            for (var i = newPos; i < newPos + component.count; i++) {
                indices.push(i);
            }
            component.indices = indices;
            newPos += component.count;
            // Common case
            if (!component.added) {
                oldPos += component.count;
            }
        }
        else {
            var indices = [];
            for (var i = oldPos; i < oldPos + component.count; i++) {
                indices.push(i);
            }
            component.indices = indices;
            oldPos += component.count;
        }
    }

    return components;
}

function clonePath(path) {
    return { newPos: path.newPos, components: path.components.slice(0) };
}

var arrayDiff = new Diff();

var arrayDiff$1 = function (oldArr, newArr, callback) {
    return arrayDiff.diff(oldArr, newArr, callback);
};

/**
 * @file Manages elements that can be defined in <defs> in SVG,
 *       e.g., gradients, clip path, etc.
 * @author Zhang Wenli
 */

var MARK_UNUSED = '0';
var MARK_USED = '1';

/**
 * Manages elements that can be defined in <defs> in SVG,
 * e.g., gradients, clip path, etc.
 *
 * @class
 * @param {number}          zrId      zrender instance id
 * @param {SVGElement}      svgRoot   root of SVG document
 * @param {string|string[]} tagNames  possible tag names
 * @param {string}          markLabel label name to make if the element
 *                                    is used
 */
function Definable(
    zrId,
    svgRoot,
    tagNames,
    markLabel,
    domName
) {
    this._zrId = zrId;
    this._svgRoot = svgRoot;
    this._tagNames = typeof tagNames === 'string' ? [tagNames] : tagNames;
    this._markLabel = markLabel;
    this._domName = domName || '_dom';

    this.nextId = 0;
}


Definable.prototype.createElement = createElement;


/**
 * Get the <defs> tag for svgRoot; optionally creates one if not exists.
 *
 * @param {boolean} isForceCreating if need to create when not exists
 * @return {SVGDefsElement} SVG <defs> element, null if it doesn't
 * exist and isForceCreating is false
 */
Definable.prototype.getDefs = function (isForceCreating) {
    var svgRoot = this._svgRoot;
    var defs = this._svgRoot.getElementsByTagName('defs');
    if (defs.length === 0) {
        // Not exist
        if (isForceCreating) {
            defs = svgRoot.insertBefore(
                this.createElement('defs'), // Create new tag
                svgRoot.firstChild // Insert in the front of svg
            );
            if (!defs.contains) {
                // IE doesn't support contains method
                defs.contains = function (el) {
                    var children = defs.children;
                    if (!children) {
                        return false;
                    }
                    for (var i = children.length - 1; i >= 0; --i) {
                        if (children[i] === el) {
                            return true;
                        }
                    }
                    return false;
                };
            }
            return defs;
        }
        else {
            return null;
        }
    }
    else {
        return defs[0];
    }
};


/**
 * Update DOM element if necessary.
 *
 * @param {Object|string} element style element. e.g., for gradient,
 *                                it may be '#ccc' or {type: 'linear', ...}
 * @param {Function|undefined} onUpdate update callback
 */
Definable.prototype.update = function (element, onUpdate) {
    if (!element) {
        return;
    }

    var defs = this.getDefs(false);
    if (element[this._domName] && defs.contains(element[this._domName])) {
        // Update DOM
        if (typeof onUpdate === 'function') {
            onUpdate(element);
        }
    }
    else {
        // No previous dom, create new
        var dom = this.add(element);
        if (dom) {
            element[this._domName] = dom;
        }
    }
};


/**
 * Add gradient dom to defs
 *
 * @param {SVGElement} dom DOM to be added to <defs>
 */
Definable.prototype.addDom = function (dom) {
    var defs = this.getDefs(true);
    defs.appendChild(dom);
};


/**
 * Remove DOM of a given element.
 *
 * @param {SVGElement} element element to remove dom
 */
Definable.prototype.removeDom = function (element) {
    var defs = this.getDefs(false);
    if (defs && element[this._domName]) {
        defs.removeChild(element[this._domName]);
        element[this._domName] = null;
    }
};


/**
 * Get DOMs of this element.
 *
 * @return {HTMLDomElement} doms of this defineable elements in <defs>
 */
Definable.prototype.getDoms = function () {
    var defs = this.getDefs(false);
    if (!defs) {
        // No dom when defs is not defined
        return [];
    }

    var doms = [];
    each$1(this._tagNames, function (tagName) {
        var tags = defs.getElementsByTagName(tagName);
        // Note that tags is HTMLCollection, which is array-like
        // rather than real array.
        // So `doms.concat(tags)` add tags as one object.
        doms = doms.concat([].slice.call(tags));
    });

    return doms;
};


/**
 * Mark DOMs to be unused before painting, and clear unused ones at the end
 * of the painting.
 */
Definable.prototype.markAllUnused = function () {
    var doms = this.getDoms();
    var that = this;
    each$1(doms, function (dom) {
        dom[that._markLabel] = MARK_UNUSED;
    });
};


/**
 * Mark a single DOM to be used.
 *
 * @param {SVGElement} dom DOM to mark
 */
Definable.prototype.markUsed = function (dom) {
    if (dom) {
        dom[this._markLabel] = MARK_USED;
    }
};


/**
 * Remove unused DOMs defined in <defs>
 */
Definable.prototype.removeUnused = function () {
    var defs = this.getDefs(false);
    if (!defs) {
        // Nothing to remove
        return;
    }

    var doms = this.getDoms();
    var that = this;
    each$1(doms, function (dom) {
        if (dom[that._markLabel] !== MARK_USED) {
            // Remove gradient
            defs.removeChild(dom);
        }
    });
};


/**
 * Get SVG proxy.
 *
 * @param {Displayable} displayable displayable element
 * @return {Path|Image|Text} svg proxy of given element
 */
Definable.prototype.getSvgProxy = function (displayable) {
    if (displayable instanceof Path) {
        return svgPath;
    }
    else if (displayable instanceof ZImage) {
        return svgImage;
    }
    else if (displayable instanceof Text) {
        return svgText;
    }
    else {
        return svgPath;
    }
};


/**
 * Get text SVG element.
 *
 * @param {Displayable} displayable displayable element
 * @return {SVGElement} SVG element of text
 */
Definable.prototype.getTextSvgElement = function (displayable) {
    return displayable.__textSvgEl;
};


/**
 * Get SVG element.
 *
 * @param {Displayable} displayable displayable element
 * @return {SVGElement} SVG element
 */
Definable.prototype.getSvgElement = function (displayable) {
    return displayable.__svgEl;
};

/**
 * @file Manages SVG gradient elements.
 * @author Zhang Wenli
 */

/**
 * Manages SVG gradient elements.
 *
 * @class
 * @extends Definable
 * @param   {number}     zrId    zrender instance id
 * @param   {SVGElement} svgRoot root of SVG document
 */
function GradientManager(zrId, svgRoot) {
    Definable.call(
        this,
        zrId,
        svgRoot,
        ['linearGradient', 'radialGradient'],
        '__gradient_in_use__'
    );
}


inherits(GradientManager, Definable);


/**
 * Create new gradient DOM for fill or stroke if not exist,
 * but will not update gradient if exists.
 *
 * @param {SvgElement}  svgElement   SVG element to paint
 * @param {Displayable} displayable  zrender displayable element
 */
GradientManager.prototype.addWithoutUpdate = function (
    svgElement,
    displayable
) {
    if (displayable && displayable.style) {
        var that = this;
        each$1(['fill', 'stroke'], function (fillOrStroke) {
            if (displayable.style[fillOrStroke]
                && (displayable.style[fillOrStroke].type === 'linear'
                || displayable.style[fillOrStroke].type === 'radial')
            ) {
                var gradient = displayable.style[fillOrStroke];
                var defs = that.getDefs(true);

                // Create dom in <defs> if not exists
                var dom;
                if (gradient._dom) {
                    // Gradient exists
                    dom = gradient._dom;
                    if (!defs.contains(gradient._dom)) {
                        // _dom is no longer in defs, recreate
                        that.addDom(dom);
                    }
                }
                else {
                    // New dom
                    dom = that.add(gradient);
                }

                that.markUsed(displayable);

                var id = dom.getAttribute('id');
                svgElement.setAttribute(fillOrStroke, 'url(#' + id + ')');
            }
        });
    }
};


/**
 * Add a new gradient tag in <defs>
 *
 * @param   {Gradient} gradient zr gradient instance
 * @return {SVGLinearGradientElement | SVGRadialGradientElement}
 *                            created DOM
 */
GradientManager.prototype.add = function (gradient) {
    var dom;
    if (gradient.type === 'linear') {
        dom = this.createElement('linearGradient');
    }
    else if (gradient.type === 'radial') {
        dom = this.createElement('radialGradient');
    }
    else {
        zrLog('Illegal gradient type.');
        return null;
    }

    // Set dom id with gradient id, since each gradient instance
    // will have no more than one dom element.
    // id may exists before for those dirty elements, in which case
    // id should remain the same, and other attributes should be
    // updated.
    gradient.id = gradient.id || this.nextId++;
    dom.setAttribute('id', 'zr' + this._zrId
        + '-gradient-' + gradient.id);

    this.updateDom(gradient, dom);
    this.addDom(dom);

    return dom;
};


/**
 * Update gradient.
 *
 * @param {Gradient} gradient zr gradient instance
 */
GradientManager.prototype.update = function (gradient) {
    var that = this;
    Definable.prototype.update.call(this, gradient, function () {
        var type = gradient.type;
        var tagName = gradient._dom.tagName;
        if (type === 'linear' && tagName === 'linearGradient'
            || type === 'radial' && tagName === 'radialGradient'
        ) {
            // Gradient type is not changed, update gradient
            that.updateDom(gradient, gradient._dom);
        }
        else {
            // Remove and re-create if type is changed
            that.removeDom(gradient);
            that.add(gradient);
        }
    });
};


/**
 * Update gradient dom
 *
 * @param {Gradient} gradient zr gradient instance
 * @param {SVGLinearGradientElement | SVGRadialGradientElement} dom
 *                            DOM to update
 */
GradientManager.prototype.updateDom = function (gradient, dom) {
    if (gradient.type === 'linear') {
        dom.setAttribute('x1', gradient.x);
        dom.setAttribute('y1', gradient.y);
        dom.setAttribute('x2', gradient.x2);
        dom.setAttribute('y2', gradient.y2);
    }
    else if (gradient.type === 'radial') {
        dom.setAttribute('cx', gradient.x);
        dom.setAttribute('cy', gradient.y);
        dom.setAttribute('r', gradient.r);
    }
    else {
        zrLog('Illegal gradient type.');
        return;
    }

    if (gradient.global) {
        // x1, x2, y1, y2 in range of 0 to canvas width or height
        dom.setAttribute('gradientUnits', 'userSpaceOnUse');
    }
    else {
        // x1, x2, y1, y2 in range of 0 to 1
        dom.setAttribute('gradientUnits', 'objectBoundingBox');
    }

    // Remove color stops if exists
    dom.innerHTML = '';

    // Add color stops
    var colors = gradient.colorStops;
    for (var i = 0, len = colors.length; i < len; ++i) {
        var stop = this.createElement('stop');
        stop.setAttribute('offset', colors[i].offset * 100 + '%');

        var color = colors[i].color;
        if (color.indexOf('rgba' > -1)) {
            // Fix Safari bug that stop-color not recognizing alpha #9014
            var opacity = parse(color)[3];
            var hex = toHex(color);

            // stop-color cannot be color, since:
            // The opacity value used for the gradient calculation is the
            // *product* of the value of stop-opacity and the opacity of the
            // value of stop-color.
            // See https://www.w3.org/TR/SVG2/pservers.html#StopOpacityProperty
            stop.setAttribute('stop-color', '#' + hex);
            stop.setAttribute('stop-opacity', opacity);
        }
        else {
            stop.setAttribute('stop-color', colors[i].color);
        }

        dom.appendChild(stop);
    }

    // Store dom element in gradient, to avoid creating multiple
    // dom instances for the same gradient element
    gradient._dom = dom;
};

/**
 * Mark a single gradient to be used
 *
 * @param {Displayable} displayable displayable element
 */
GradientManager.prototype.markUsed = function (displayable) {
    if (displayable.style) {
        var gradient = displayable.style.fill;
        if (gradient && gradient._dom) {
            Definable.prototype.markUsed.call(this, gradient._dom);
        }

        gradient = displayable.style.stroke;
        if (gradient && gradient._dom) {
            Definable.prototype.markUsed.call(this, gradient._dom);
        }
    }
};

/**
 * @file Manages SVG clipPath elements.
 * @author Zhang Wenli
 */

/**
 * Manages SVG clipPath elements.
 *
 * @class
 * @extends Definable
 * @param   {number}     zrId    zrender instance id
 * @param   {SVGElement} svgRoot root of SVG document
 */
function ClippathManager(zrId, svgRoot) {
    Definable.call(this, zrId, svgRoot, 'clipPath', '__clippath_in_use__');
}


inherits(ClippathManager, Definable);


/**
 * Update clipPath.
 *
 * @param {Displayable} displayable displayable element
 */
ClippathManager.prototype.update = function (displayable) {
    var svgEl = this.getSvgElement(displayable);
    if (svgEl) {
        this.updateDom(svgEl, displayable.__clipPaths, false);
    }

    var textEl = this.getTextSvgElement(displayable);
    if (textEl) {
        // Make another clipPath for text, since it's transform
        // matrix is not the same with svgElement
        this.updateDom(textEl, displayable.__clipPaths, true);
    }

    this.markUsed(displayable);
};


/**
 * Create an SVGElement of displayable and create a <clipPath> of its
 * clipPath
 *
 * @param {Displayable} parentEl  parent element
 * @param {ClipPath[]}  clipPaths clipPaths of parent element
 * @param {boolean}     isText    if parent element is Text
 */
ClippathManager.prototype.updateDom = function (
    parentEl,
    clipPaths,
    isText
) {
    if (clipPaths && clipPaths.length > 0) {
        // Has clipPath, create <clipPath> with the first clipPath
        var defs = this.getDefs(true);
        var clipPath = clipPaths[0];
        var clipPathEl;
        var id;

        var dom = isText ? '_textDom' : '_dom';

        if (clipPath[dom]) {
            // Use a dom that is already in <defs>
            id = clipPath[dom].getAttribute('id');
            clipPathEl = clipPath[dom];

            // Use a dom that is already in <defs>
            if (!defs.contains(clipPathEl)) {
                // This happens when set old clipPath that has
                // been previously removed
                defs.appendChild(clipPathEl);
            }
        }
        else {
            // New <clipPath>
            id = 'zr' + this._zrId + '-clip-' + this.nextId;
            ++this.nextId;
            clipPathEl = this.createElement('clipPath');
            clipPathEl.setAttribute('id', id);
            defs.appendChild(clipPathEl);

            clipPath[dom] = clipPathEl;
        }

        // Build path and add to <clipPath>
        var svgProxy = this.getSvgProxy(clipPath);
        if (clipPath.transform
            && clipPath.parent.invTransform
            && !isText
        ) {
            /**
             * If a clipPath has a parent with transform, the transform
             * of parent should not be considered when setting transform
             * of clipPath. So we need to transform back from parent's
             * transform, which is done by multiplying parent's inverse
             * transform.
             */
            // Store old transform
            var transform = Array.prototype.slice.call(
                clipPath.transform
            );

            // Transform back from parent, and brush path
            mul$1(
                clipPath.transform,
                clipPath.parent.invTransform,
                clipPath.transform
            );
            svgProxy.brush(clipPath);

            // Set back transform of clipPath
            clipPath.transform = transform;
        }
        else {
            svgProxy.brush(clipPath);
        }

        var pathEl = this.getSvgElement(clipPath);

        clipPathEl.innerHTML = '';
        /**
         * Use `cloneNode()` here to appendChild to multiple parents,
         * which may happend when Text and other shapes are using the same
         * clipPath. Since Text will create an extra clipPath DOM due to
         * different transform rules.
         */
        clipPathEl.appendChild(pathEl.cloneNode());

        parentEl.setAttribute('clip-path', 'url(#' + id + ')');

        if (clipPaths.length > 1) {
            // Make the other clipPaths recursively
            this.updateDom(clipPathEl, clipPaths.slice(1), isText);
        }
    }
    else {
        // No clipPath
        if (parentEl) {
            parentEl.setAttribute('clip-path', 'none');
        }
    }
};

/**
 * Mark a single clipPath to be used
 *
 * @param {Displayable} displayable displayable element
 */
ClippathManager.prototype.markUsed = function (displayable) {
    var that = this;
    // displayable.__clipPaths can only be `null`/`undefined` or an non-empty array.
    if (displayable.__clipPaths) {
        each$1(displayable.__clipPaths, function (clipPath) {
            if (clipPath._dom) {
                Definable.prototype.markUsed.call(that, clipPath._dom);
            }
            if (clipPath._textDom) {
                Definable.prototype.markUsed.call(that, clipPath._textDom);
            }
        });
    }
};

/**
 * @file Manages SVG shadow elements.
 * @author Zhang Wenli
 */

/**
 * Manages SVG shadow elements.
 *
 * @class
 * @extends Definable
 * @param   {number}     zrId    zrender instance id
 * @param   {SVGElement} svgRoot root of SVG document
 */
function ShadowManager(zrId, svgRoot) {
    Definable.call(
        this,
        zrId,
        svgRoot,
        ['filter'],
        '__filter_in_use__',
        '_shadowDom'
    );
}


inherits(ShadowManager, Definable);


/**
 * Create new shadow DOM for fill or stroke if not exist,
 * but will not update shadow if exists.
 *
 * @param {SvgElement}  svgElement   SVG element to paint
 * @param {Displayable} displayable  zrender displayable element
 */
ShadowManager.prototype.addWithoutUpdate = function (
    svgElement,
    displayable
) {
    if (displayable && hasShadow(displayable.style)) {
        var style = displayable.style;

        // Create dom in <defs> if not exists
        var dom;
        if (style._shadowDom) {
            // Gradient exists
            dom = style._shadowDom;

            var defs = this.getDefs(true);
            if (!defs.contains(style._shadowDom)) {
                // _shadowDom is no longer in defs, recreate
                this.addDom(dom);
            }
        }
        else {
            // New dom
            dom = this.add(displayable);
        }

        this.markUsed(displayable);

        var id = dom.getAttribute('id');
        svgElement.style.filter = 'url(#' + id + ')';
    }
};


/**
 * Add a new shadow tag in <defs>
 *
 * @param {Displayable} displayable  zrender displayable element
 * @return {SVGFilterElement} created DOM
 */
ShadowManager.prototype.add = function (displayable) {
    var dom = this.createElement('filter');
    var style = displayable.style;

    // Set dom id with shadow id, since each shadow instance
    // will have no more than one dom element.
    // id may exists before for those dirty elements, in which case
    // id should remain the same, and other attributes should be
    // updated.
    style._shadowDomId = style._shadowDomId || this.nextId++;
    dom.setAttribute('id', 'zr' + this._zrId
        + '-shadow-' + style._shadowDomId);

    this.updateDom(displayable, dom);
    this.addDom(dom);

    return dom;
};


/**
 * Update shadow.
 *
 * @param {Displayable} displayable  zrender displayable element
 */
ShadowManager.prototype.update = function (svgElement, displayable) {
    var style = displayable.style;
    if (hasShadow(style)) {
        var that = this;
        Definable.prototype.update.call(this, displayable, function (style) {
            that.updateDom(displayable, style._shadowDom);
        });
    }
    else {
        // Remove shadow
        this.remove(svgElement, style);
    }
};


/**
 * Remove DOM and clear parent filter
 */
ShadowManager.prototype.remove = function (svgElement, style) {
    if (style._shadowDomId != null) {
        this.removeDom(style);
        svgElement.style.filter = '';
    }
};


/**
 * Update shadow dom
 *
 * @param {Displayable} displayable  zrender displayable element
 * @param {SVGFilterElement} dom DOM to update
 */
ShadowManager.prototype.updateDom = function (displayable, dom) {
    var domChild = dom.getElementsByTagName('feDropShadow');
    if (domChild.length === 0) {
        domChild = this.createElement('feDropShadow');
    }
    else {
        domChild = domChild[0];
    }

    var style = displayable.style;
    var scaleX = displayable.scale ? (displayable.scale[0] || 1) : 1;
    var scaleY = displayable.scale ? (displayable.scale[1] || 1) : 1;

    // TODO: textBoxShadowBlur is not supported yet
    var offsetX, offsetY, blur, color;
    if (style.shadowBlur || style.shadowOffsetX || style.shadowOffsetY) {
        offsetX = style.shadowOffsetX || 0;
        offsetY = style.shadowOffsetY || 0;
        blur = style.shadowBlur;
        color = style.shadowColor;
    }
    else if (style.textShadowBlur) {
        offsetX = style.textShadowOffsetX || 0;
        offsetY = style.textShadowOffsetY || 0;
        blur = style.textShadowBlur;
        color = style.textShadowColor;
    }
    else {
        // Remove shadow
        this.removeDom(dom, style);
        return;
    }

    domChild.setAttribute('dx', offsetX / scaleX);
    domChild.setAttribute('dy', offsetY / scaleY);
    domChild.setAttribute('flood-color', color);

    // Divide by two here so that it looks the same as in canvas
    // See: https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-shadowblur
    var stdDx = blur / 2 / scaleX;
    var stdDy = blur / 2 / scaleY;
    var stdDeviation = stdDx + ' ' + stdDy;
    domChild.setAttribute('stdDeviation', stdDeviation);

    // Fix filter clipping problem
    dom.setAttribute('x', '-100%');
    dom.setAttribute('y', '-100%');
    dom.setAttribute('width', Math.ceil(blur / 2 * 200) + '%');
    dom.setAttribute('height', Math.ceil(blur / 2 * 200) + '%');

    dom.appendChild(domChild);

    // Store dom element in shadow, to avoid creating multiple
    // dom instances for the same shadow element
    style._shadowDom = dom;
};

/**
 * Mark a single shadow to be used
 *
 * @param {Displayable} displayable displayable element
 */
ShadowManager.prototype.markUsed = function (displayable) {
    var style = displayable.style;
    if (style && style._shadowDom) {
        Definable.prototype.markUsed.call(this, style._shadowDom);
    }
};

function hasShadow(style) {
    // TODO: textBoxShadowBlur is not supported yet
    return style
        && (style.shadowBlur || style.shadowOffsetX || style.shadowOffsetY
            || style.textShadowBlur || style.textShadowOffsetX
            || style.textShadowOffsetY);
}

/**
 * SVG Painter
 * @module zrender/svg/Painter
 */

function parseInt10$2(val) {
    return parseInt(val, 10);
}

function getSvgProxy(el) {
    if (el instanceof Path) {
        return svgPath;
    }
    else if (el instanceof ZImage) {
        return svgImage;
    }
    else if (el instanceof Text) {
        return svgText;
    }
    else {
        return svgPath;
    }
}

function checkParentAvailable(parent, child) {
    return child && parent && child.parentNode !== parent;
}

function insertAfter(parent, child, prevSibling) {
    if (checkParentAvailable(parent, child) && prevSibling) {
        var nextSibling = prevSibling.nextSibling;
        nextSibling ? parent.insertBefore(child, nextSibling)
            : parent.appendChild(child);
    }
}

function prepend(parent, child) {
    if (checkParentAvailable(parent, child)) {
        var firstChild = parent.firstChild;
        firstChild ? parent.insertBefore(child, firstChild)
            : parent.appendChild(child);
    }
}

function remove$1(parent, child) {
    if (child && parent && child.parentNode === parent) {
        parent.removeChild(child);
    }
}

function getTextSvgElement(displayable) {
    return displayable.__textSvgEl;
}

function getSvgElement(displayable) {
    return displayable.__svgEl;
}

/**
 * @alias module:zrender/svg/Painter
 * @constructor
 * @param {HTMLElement} root 绘图容器
 * @param {module:zrender/Storage} storage
 * @param {Object} opts
 */
var SVGPainter = function (root, storage, opts, zrId) {

    this.root = root;
    this.storage = storage;
    this._opts = opts = extend({}, opts || {});

    var svgRoot = createElement('svg');
    svgRoot.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgRoot.setAttribute('version', '1.1');
    svgRoot.setAttribute('baseProfile', 'full');
    svgRoot.style.cssText = 'user-select:none;position:absolute;left:0;top:0;';

    this.gradientManager = new GradientManager(zrId, svgRoot);
    this.clipPathManager = new ClippathManager(zrId, svgRoot);
    this.shadowManager = new ShadowManager(zrId, svgRoot);

    var viewport = document.createElement('div');
    viewport.style.cssText = 'overflow:hidden;position:relative';

    this._svgRoot = svgRoot;
    this._viewport = viewport;

    root.appendChild(viewport);
    viewport.appendChild(svgRoot);

    this.resize(opts.width, opts.height);

    this._visibleList = [];
};

SVGPainter.prototype = {

    constructor: SVGPainter,

    getType: function () {
        return 'svg';
    },

    getViewportRoot: function () {
        return this._viewport;
    },

    getViewportRootOffset: function () {
        var viewportRoot = this.getViewportRoot();
        if (viewportRoot) {
            return {
                offsetLeft: viewportRoot.offsetLeft || 0,
                offsetTop: viewportRoot.offsetTop || 0
            };
        }
    },

    refresh: function () {

        var list = this.storage.getDisplayList(true);

        this._paintList(list);
    },

    setBackgroundColor: function (backgroundColor) {
        // TODO gradient
        this._viewport.style.background = backgroundColor;
    },

    _paintList: function (list) {
        this.gradientManager.markAllUnused();
        this.clipPathManager.markAllUnused();
        this.shadowManager.markAllUnused();

        var svgRoot = this._svgRoot;
        var visibleList = this._visibleList;
        var listLen = list.length;

        var newVisibleList = [];
        var i;
        for (i = 0; i < listLen; i++) {
            var displayable = list[i];
            var svgProxy = getSvgProxy(displayable);
            var svgElement = getSvgElement(displayable)
                || getTextSvgElement(displayable);
            if (!displayable.invisible) {
                if (displayable.__dirty) {
                    svgProxy && svgProxy.brush(displayable);

                    // Update clipPath
                    this.clipPathManager.update(displayable);

                    // Update gradient and shadow
                    if (displayable.style) {
                        this.gradientManager
                            .update(displayable.style.fill);
                        this.gradientManager
                            .update(displayable.style.stroke);

                        this.shadowManager
                            .update(svgElement, displayable);
                    }

                    displayable.__dirty = false;
                }
                newVisibleList.push(displayable);
            }
        }

        var diff = arrayDiff$1(visibleList, newVisibleList);
        var prevSvgElement;

        // First do remove, in case element moved to the head and do remove
        // after add
        for (i = 0; i < diff.length; i++) {
            var item = diff[i];
            if (item.removed) {
                for (var k = 0; k < item.count; k++) {
                    var displayable = visibleList[item.indices[k]];
                    var svgElement = getSvgElement(displayable);
                    var textSvgElement = getTextSvgElement(displayable);
                    remove$1(svgRoot, svgElement);
                    remove$1(svgRoot, textSvgElement);
                }
            }
        }
        for (i = 0; i < diff.length; i++) {
            var item = diff[i];
            if (item.added) {
                for (var k = 0; k < item.count; k++) {
                    var displayable = newVisibleList[item.indices[k]];
                    var svgElement = getSvgElement(displayable);
                    var textSvgElement = getTextSvgElement(displayable);
                    prevSvgElement
                        ? insertAfter(svgRoot, svgElement, prevSvgElement)
                        : prepend(svgRoot, svgElement);
                    if (svgElement) {
                        insertAfter(svgRoot, textSvgElement, svgElement);
                    }
                    else if (prevSvgElement) {
                        insertAfter(
                            svgRoot, textSvgElement, prevSvgElement
                        );
                    }
                    else {
                        prepend(svgRoot, textSvgElement);
                    }
                    // Insert text
                    insertAfter(svgRoot, textSvgElement, svgElement);
                    prevSvgElement = textSvgElement || svgElement
                        || prevSvgElement;

                    this.gradientManager
                        .addWithoutUpdate(svgElement, displayable);
                    this.shadowManager
                        .addWithoutUpdate(prevSvgElement, displayable);
                    this.clipPathManager.markUsed(displayable);
                }
            }
            else if (!item.removed) {
                for (var k = 0; k < item.count; k++) {
                    var displayable = newVisibleList[item.indices[k]];
                    prevSvgElement =
                        svgElement =
                        getTextSvgElement(displayable)
                        || getSvgElement(displayable)
                        || prevSvgElement;

                    this.gradientManager.markUsed(displayable);
                    this.gradientManager
                        .addWithoutUpdate(svgElement, displayable);

                    this.shadowManager.markUsed(displayable);
                    this.shadowManager
                        .addWithoutUpdate(svgElement, displayable);

                    this.clipPathManager.markUsed(displayable);
                }
            }
        }

        this.gradientManager.removeUnused();
        this.clipPathManager.removeUnused();
        this.shadowManager.removeUnused();

        this._visibleList = newVisibleList;
    },

    _getDefs: function (isForceCreating) {
        var svgRoot = this._svgRoot;
        var defs = this._svgRoot.getElementsByTagName('defs');
        if (defs.length === 0) {
            // Not exist
            if (isForceCreating) {
                var defs = svgRoot.insertBefore(
                    createElement('defs'), // Create new tag
                    svgRoot.firstChild // Insert in the front of svg
                );
                if (!defs.contains) {
                    // IE doesn't support contains method
                    defs.contains = function (el) {
                        var children = defs.children;
                        if (!children) {
                            return false;
                        }
                        for (var i = children.length - 1; i >= 0; --i) {
                            if (children[i] === el) {
                                return true;
                            }
                        }
                        return false;
                    };
                }
                return defs;
            }
            else {
                return null;
            }
        }
        else {
            return defs[0];
        }
    },

    resize: function (width, height) {
        var viewport = this._viewport;
        // FIXME Why ?
        viewport.style.display = 'none';

        // Save input w/h
        var opts = this._opts;
        width != null && (opts.width = width);
        height != null && (opts.height = height);

        width = this._getSize(0);
        height = this._getSize(1);

        viewport.style.display = '';

        if (this._width !== width || this._height !== height) {
            this._width = width;
            this._height = height;

            var viewportStyle = viewport.style;
            viewportStyle.width = width + 'px';
            viewportStyle.height = height + 'px';

            var svgRoot = this._svgRoot;
            // Set width by 'svgRoot.width = width' is invalid
            svgRoot.setAttribute('width', width);
            svgRoot.setAttribute('height', height);
        }
    },

    /**
     * 获取绘图区域宽度
     */
    getWidth: function () {
        return this._width;
    },

    /**
     * 获取绘图区域高度
     */
    getHeight: function () {
        return this._height;
    },

    _getSize: function (whIdx) {
        var opts = this._opts;
        var wh = ['width', 'height'][whIdx];
        var cwh = ['clientWidth', 'clientHeight'][whIdx];
        var plt = ['paddingLeft', 'paddingTop'][whIdx];
        var prb = ['paddingRight', 'paddingBottom'][whIdx];

        if (opts[wh] != null && opts[wh] !== 'auto') {
            return parseFloat(opts[wh]);
        }

        var root = this.root;
        // IE8 does not support getComputedStyle, but it use VML.
        var stl = document.defaultView.getComputedStyle(root);

        return (
            (root[cwh] || parseInt10$2(stl[wh]) || parseInt10$2(root.style[wh]))
            - (parseInt10$2(stl[plt]) || 0)
            - (parseInt10$2(stl[prb]) || 0)
        ) | 0;
    },

    dispose: function () {
        this.root.innerHTML = '';

        this._svgRoot =
            this._viewport =
            this.storage =
            null;
    },

    clear: function () {
        if (this._viewport) {
            this.root.removeChild(this._viewport);
        }
    },

    pathToDataUrl: function () {
        this.refresh();
        var html = this._svgRoot.outerHTML;
        return 'data:image/svg+xml;charset=UTF-8,' + html;
    }
};

// Not supported methods
function createMethodNotSupport$1(method) {
    return function () {
        zrLog('In SVG mode painter not support method "' + method + '"');
    };
}

// Unsuppoted methods
each$1([
    'getLayer', 'insertLayer', 'eachLayer', 'eachBuiltinLayer',
    'eachOtherLayer', 'getLayers', 'modLayer', 'delLayer', 'clearLayer',
    'toDataURL', 'pathToImage'
], function (name) {
    SVGPainter.prototype[name] = createMethodNotSupport$1(name);
});

registerPainter('svg', SVGPainter);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

exports.version = version;
exports.dependencies = dependencies;
exports.PRIORITY = PRIORITY;
exports.init = init;
exports.connect = connect;
exports.disConnect = disConnect;
exports.disconnect = disconnect;
exports.dispose = dispose;
exports.getInstanceByDom = getInstanceByDom;
exports.getInstanceById = getInstanceById;
exports.registerTheme = registerTheme;
exports.registerPreprocessor = registerPreprocessor;
exports.registerProcessor = registerProcessor;
exports.registerPostUpdate = registerPostUpdate;
exports.registerAction = registerAction;
exports.registerCoordinateSystem = registerCoordinateSystem;
exports.getCoordinateSystemDimensions = getCoordinateSystemDimensions;
exports.registerLayout = registerLayout;
exports.registerVisual = registerVisual;
exports.registerLoading = registerLoading;
exports.extendComponentModel = extendComponentModel;
exports.extendComponentView = extendComponentView;
exports.extendSeriesModel = extendSeriesModel;
exports.extendChartView = extendChartView;
exports.setCanvasCreator = setCanvasCreator;
exports.registerMap = registerMap;
exports.getMap = getMap;
exports.dataTool = dataTool;
exports.zrender = zrender;
exports.number = number;
exports.format = format;
exports.throttle = throttle;
exports.helper = helper;
exports.matrix = matrix;
exports.vector = vector;
exports.color = color;
exports.parseGeoJSON = parseGeoJSON;
exports.parseGeoJson = parseGeoJson;
exports.util = ecUtil;
exports.graphic = graphic$1;
exports.List = List;
exports.Model = Model;
exports.Axis = Axis;
exports.env = env$1;

})));