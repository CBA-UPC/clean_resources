if (typeof gemius_hcconn != 'undefined' && typeof gemius_hcconn.fpdata != 'undefined' && (gemius_hcconn.fpdata=='' || gemius_hcconn.fpdata[0]=='-')) {
	gemius_hcconn.fpdata = "4XYRhQK8o.bsutkv756zeJUlq2O__ta.iRZFI7DeQKX.q7|1705579668";
	gemius_hcconn.fpcdomain = 'money.pl';
}
operty('richNotification')) {
            event.waitUntil(
                self.registration.showNotification(dataJson.richNotification.title, dataJson.richNotification.options)
            );
            display(
              dataJson.richNotification.user.pushId,
              dataJson.richNotification.user.userId,
              'RICH_WEB_PUSH',
              dataJson.richNotification.user.webPushMessageIntId,
              getProductId(dataJson.richNotification)
            );

        } else if (dataJson.hasOwnProperty('notification')) {
            if (dataJson.notification.hasOwnProperty('options')) {
                event.waitUntil(
                    self.registration.showNotification(dataJson.notification.title, dataJson.notification.options)
                );
            } else {
                var additionalData = {
                    targetUrl: dataJson.notification.targetUrl,
                    pushId: dataJson.notification.user.pushId,
                    userId: dataJson.notification.user.userId,
                    webPushMessageIntId: dataJson.notification.user.webPushMessageIntId
                };
                event.waitUntil(
                    self.registration.showNotification(dataJson.notification.title, {
                        body: dataJson.notification.message,
                        icon: dataJson.notification.icon,
                        requireInteraction: true,
                        data: additionalData
                    })
                );
            }
            display(
              dataJson.notification.user.pushId,
              dataJson.notification.user.userId,
              'WEB_PUSH',
              dataJson.notification.user.webPushMessageIntId,
              getProductId(dataJson.notification)
            );
        }
    }
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    var url = event.notification.data.targetUrl;
    var actionType;
    var productId;

    if (event.action) {
        var action = event.notification.data.actions
          .find(function(action) {
              return action.action === event.action;
          });

        if (action  && action.url) {
            url = action.url;
            actionType = action.contentType;
        } else {
            actionType = event.notification.data.targetUrlContentType;
        }
    } else {
        actionType = event.notification.data.targetUrlContentType;
    }

    if (actionType === 1) {
        productId = event.notification.data.productId;
    }

    event.waitUntil(
        clients.matchAll({
            type: 'window'
        }).then(function (windowClients) {
            windowClients.forEach(function (client) {
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            });

            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
    click(event.notification.data.pushId, event.notification.data.userId, event.notification.data.webPushType,
        event.notification.data.webPushMessageIntId, event.action || 'MAIN', productId);
});

function getProductId(data) {
    if (data.hasOwnProperty('options') && data.options.hasOwnProperty('data')) {
        return data.options.data.productId;
    }
    return null;
}

function display(pushId, userId, type, webPushMessageIntId, productId) {
    var productIdParam = '';

    if (productId) {
        productIdParam = '&productId=' + productId;
    }

    fetch('https://pilot.salesmanago.pl/api/push/display.json?pushId=' + pushId + '&userId=' + userId + '&type=' + type
      + '&webPushMessageIntId=' + webPushMessageIntId + productIdParam, {
        method: 'GET',
        mode: 'no-cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    });
}

function click(pushId, userId, type, webPushMessageIntId, pushAction, productId) {
    var productIdParam = '';

    if (productId) {
        productIdParam = '&productId=' + productId;
    }

    fetch('https://pilot.salesmanago.pl/api/push/click.json?pushId=' + pushId + '&userId=' + userId + '&type='
        + type + '&webPushMessageIntId=' + webPushMessageIntId + '&webPushAction=' + pushAction + productIdParam, {
        method: 'GET',
        mode: 'no-cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    });
}

ser:"MM/DD/YYYY HH:mm",stepSize:1,tooltipFormat:"ll HH:mm"},distribution:"series",ticks:{source:"auto",maxTicksLimit:8,maxRotation:0,minRotation:0,labelOffset:30}}],yAxes:[{type:"linear",display:!0,position:"left",id:"y-axis-1",scaleLabel:{display:!0,labelString:this.$t("priceAxis")}},{type:"linear",display:!0,position:"right",id:"y-axis-2",scaleLabel:{display:!0,labelString:this.$t("turnoverAxis")},gridLines:{drawOnChartArea:!1}}]}}}},onChartScroll:function(){this.hideDragIcon=!0}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("configuratorN2cr/getConfig",{configName:"6741095459685440",hasTitle:!0});case 3:return e.next=5,n.dispatch("dynamicConfig/updateConfig",{page:{imgUrl:"https://holding.wpcdn.pl/backgrounds/18.jpg"}});case 5:case"end":return e.stop()}}),e)})))()},beforeMount:function(){var t=this;this.$axios({url:"https://www.money.pl/api/graphql",method:"post",headers:{"x-api":"timevalue"},data:{variables:{interval:60,points:750,symbol:"PLWRTPL00027",date_start:"-1 week",date_end:null},operationName:"timevalue_chart_data",query:"\n          query timevalue_chart_data($symbol: String!, $date_start: String!, $date_end: String, $interval: Int = 2, $points: Int = 0) {\n  chart_summary(symbol: $symbol, date_start: $date_start, date_end: $date_end) {\n    name: name_symbol\n    value\n    symbol\n    label: name_symbol\n    update: max_date\n    precision\n    diffLastAbs: diff_last_abs\n    diffLast: diff_last\n    diffPeriod: diff_period\n    diffYTD: diff_ytd\n    open\n    prevClose: prev_close\n    min\n    max\n    avg\n    ask\n    bid\n    start: intraday_start\n    end: intraday_end\n    turnover\n    url: dst_url_rel\n    intraday\n    unit\n    min52\n    max52\n    startPl: intraday_pl_start\n    endPl: intraday_pl_end\n    updatePl: last_update_pl\n    country\n    idxSummary: idx_summary {\n      up\n      down\n      neutral\n      __typename\n    }\n    transactions\n    volume\n    timeline(interval: $interval, points: $points) {\n      time\n      open\n      close\n      min\n      max\n      turnover\n      __typename\n    }\n    __typename\n  }\n}\n      "}}).then((function(e){var summary=e.data.data.chart_summary,data=summary.timeline,n=new Date(1e3*summary.update),o=function(time){return time<10&&(time="0"+time),time};t.lastUpdate="".concat(o(n.getHours()),":").concat(o(n.getMinutes())),t.TKO="".concat(summary.value.toFixed(2)," PLN (").concat(summary.diffLast.toFixed(2),"%)"),t.volume=summary.volume,t.min="".concat(summary.min.toFixed(2)," PLN"),t.max="".concat(summary.max.toFixed(2)," PLN"),t.opening="".concat(summary.open.toFixed(2)," PLN");for(var i=0;i<data.length;i++)t.chartData.datasets[0].data.push({x:new Date(1e3*data[i].time),y:data[i].close}),t.chartData.datasets[1].data.push({x:new Date(1e3*data[i].time),y:(data[i].turnover/1e3).toFixed(3)});t.$refs.chartStockQuotes&&t.$refs.chartStockQuotes.initChart(t.getConfig())}))},head:function(){return Object(m.a)(this.$route.path,this.$t("seo.title"),this.$t("seo.desc"))},nuxtI18n:{paths:{en:"/investor/stock-quotes"}}},h=(n(1098),n(1099)),_=Object(l.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-9 chartwrapper"},[n("h4",{staticClass:"mb-5"},[t._v(t._s(t.$t("quotes")))]),t._v(" "),n("div",{staticClass:"scroller",on:{scroll:function(e){return t.onChartScroll()}}},[n("no-ssr",[n("div",{staticClass:"chart"},[n("chartjs",{ref:"chartStockQuotes",attrs:{manualInit:!0}})],1)]),t._v(" "),n("drag-icon",{staticClass:"drag-icon",attrs:{hide:t.hideDragIcon}})],1),t._v(" "),n("p",{staticClass:"mt-5"},[t._v(t._s(t.$t("status"))+" "),n("strong",[t._v(" "+t._s(t.lastUpdate))])]),t._v(" "),n("p",{staticClass:"m-t-10"},[t._v(t._s(t.$t("notice")))])]),t._v(" "),n("div",{staticClass:"col-lg-3"},[n("h4",{staticClass:"mb-5"},[t._v(t._s(t.$t("sharePrice")))]),t._v(" "),n("div",{staticClass:"card"},[n("ul",{staticClass:"list"},[n("li",[n("p",[n("strong",[t._v("TKO: "+t._s(t.TKO))])])]),t._v(" "),n("li",[n("span",[t._v(t._s(t.$t("volume")))]),t._v(" "),n("p",[n("strong",[t._v(t._s(t.volume))])])]),t._v(" "),n("li",[n("span",[t._v(t._s(t.$t("max")))]),t._v(" "),n("p",[n("strong",[t._v(t._s(t.max))])])]),t._v(" "),n("li",[n("span",[t._v(t._s(t.$t("opening")))]),t._v(" "),n("p",[n("strong",[t._v(t._s(t.opening))])])]),t._v(" "),n("li",[n("span",[t._v(t._s(t.$t("min")))]),t._v(" "),n("p",[n("strong",[t._v(t._s(t.min))])])])])])])])}),[],!1,null,"48c090b2",null);"function"==typeof h.default&&Object(h.default)(_);e.default=_.exports},396:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"pl":{"seo":{"title":"Bieżące notowania","desc":"Bieżące notowania"},"quotes":"Notowania","status":"Stan na godzinę: ","notice":"Uwaga: Dane giełdowe są opóźnione o ok. 15 minut","sharePrice":"Cena akcji: WPH","volume":"wolumen","min":"minimalna","max":"maksymalna","opening":"otwarcia","priceAxis":"cena PLN","turnover":"Obroty","turnoverAxis":"obroty w tys."},"en":{"seo":{"title":"Stock quotes","desc":"Stock quotes"},"quotes":"Stock quotes","status":"Share price information: ","notice":"Notice: Stock market data is delayed about 15 minutes","sharePrice":"Share price: WPH","volume":"volume","min":"bed-rock","max":"peak","opening":"opening","priceAxis":"price PLN","turnover":"Turnover","turnoverAxis":"turnover K"}}'),delete t.options._Ctor}},620:function(t,e,n){},621:function(t,e,n){}}]);