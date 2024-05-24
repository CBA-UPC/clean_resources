;
(function() {
    // valida suporte do navegador
    if ("fetch" in window === false || Array.prototype.flat === undefined) {
        return false;
    }

    // Porcentagem de usuários que devem ter métricas acompanhadas.
    // De zero a 99 -- o sorteio é feito de 0 a 99.
    const AVG_USERS_OBSERVER = 15;

    // tipos de métricas que devem ser observadas
    const entryTypes = ["measure", "navigation", "mark", "paint"];

    // métricas que foram observadas e estão prontas para serem enviadas
    const measureMap = {};

    // Retorna o nome da central, usando a variável Config ou
    // o subdomínio / primeiro diretório.
    const getCentralName = () => {
        if (window.Config && window.Config.central) {
            return window.Config.central.slug;
        }

        // estação com subdomínio
        if (location.hostname !== "www.uol.com.br") {
            return location.hostname.split(".")[0];
        }

        // estação migrada para dentro de www.uol
        if (location.hostname === "www.uol.com.br" && location.pathname !== "/") {
            return location.pathname.split("/")[1];
        }

        // home do UOL
        if (location.hostname === "www.uol.com.br" && location.pathname === "/") {
            return 'home';
        }

        return '-';
    }

    const getABTestParams = function(qs) {
        qs = qs.split('+').join(' ');

        var params = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        if(params && params.abTest) {
            return params.abTest;
        }
        return false;
    }


    const parsePerformanceEntry = function(entry) {
        console.log("[performance observer] parsing entry", entry.entryType, entry);

        switch (entry.entryType) {
            case "mark":
            case "paint":
                // ignora marks com prefixo `_uol-`
                if (/^_uol-/.test(entry.name) === false) {
                    measureMap[entry.name] = entry.startTime.toString();
                }
                break;

            case "measure":
                // usa apenas measures com prefixo `uol`
                if (/^uol-/.test(entry.name) === true) {
                    measureMap[entry.name] = entry.duration.toString();
                }
                break;
            case "navigation":
                [
                    "domComplete",
                    "domInteractive",
                    "encodedBodySize",
                    "domContentLoadedEventStart",
                    "duration",
                    "loadEventStart",
                    "requestStart",
                    "responseStart",
                    "responseEnd",
                ].forEach((name) => {
                    measureMap[`nav-${name}`] = entry[name].toString();
                });

                // trata a métrica e adiciona na fila para ser enviada depois
                // https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing
                measureMap['nav-requestTime'] = (entry['responseStart'] - entry['requestStart']).toString();
                measureMap['nav-responseTime'] = (entry['responseEnd'] - entry['responseStart']).toString();
                measureMap['nav-requestResponseTime'] = (entry['responseEnd'] - entry['requestStart']).toString();
                break;
        }
    }

    const sendMetric = function() {
        // sem métricas para enviar, não prosseguir
        if (Object.keys(measureMap).length === 0) {
            return;
        }


        const data = [{
            "groupingMap": {
                "Agrupador dominio": "Métricas de Performance",
                "url": window.location.href,
                "host": window.location.hostname,
                "clientConnection":(window.navigator.connection && !!window.navigator.connection.effectiveType) && window.navigator.connection.effectiveType,
                "deviceMemory": (window.navigator && !!window.navigator.deviceMemory) && window.navigator.deviceMemory,
                "abTest": getABTestParams(document.location.search),
                "central": getCentralName(),
                "plataforma": window.Config && window.Config.platform || '-',
                "mediaType": window.universal_variable && window.universal_variable.aud && window.universal_variable.aud.mediaType || '-',
            },
            "measureMap": Object.assign({}, measureMap),
        }];

        console.log("[performance observer] sending metrics", JSON.stringify(data));

        fetch("https://logger.uol.com.br/v1/?prd=975", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "error",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        }).then(function(response) {
            // zera o objeto para que no próximo envio não seja enviado novamente
            response && Object.keys(ete measureMap[key]);
        });
    }

    const markWebVitalsMetric = function(metric) {
        measureMap[metric.name] = metric.value.toString();
    }

    const getWebVitalsMetrics = function() {
        // https://unpkg.com/web-vitals@2.1.0/dist/web-vitelf).wodule",{value:!0})}));

        webVitals.getCLS(markWebVitalsMetric, true);
        webVitals.getLCP(markWebVitalsMetric, true);
        webVitals.getFID(markWebVitalsMetric, true);
    }

    const init = function() {
        console.log("[performance observer] starting performance observer script");

        getWebVitalsMetrics();

        const performanceObserver = new PerformanceObserver(function(list) {
            const entries = list.getEntries();
            for (var i = 0; i < entries.length; i++) {
                parsePerformanceEntry(entries[i]);
            }
        });

        performanceObserver.observe({ entryTypes });

        // obtém as métricas que já foram registradas
getEntriesByType(type))
            .flat(Infinity)
            .map(parsePerformanceEntry);

        window.addEventListener("visibilitychange", () => document.visibilityState === "hidden" && sendMetric());
        window.addEventListener("pagehide", sendMetric);

    }

    // Limita o envio a uma certa porcentagem
    // Possível utilizar parâmetro ?debugWebVitals=true para forçar envio
    if (location.search.includes("debugWebVitals=true") === true || Math.floor(Math.random() * 100) < AVG_USERS_OBSERVER) {
        init();
    }
})();