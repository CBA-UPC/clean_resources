borlabsCookiePrioritized=function(){"use strict";var e=borlabsCookiePrioritized,o={},t=!1,i=document.createDocumentFragment(),n={prioritizedCodeUnblocked:null};n.prioritizedCodeUnblocked=document.createEvent("Event"),n.prioritizedCodeUnblocked.initEvent("borlabs-cookie-prioritized-code-unblocked",!0,!0);var r,d=function(e){var o=e.split("<script");for(var t in o)if(-1!==o[t].indexOf("script>")){o[t]="<script"+o[t];var n=document.createElement("div"),r=document.createRange();r.selectNodeContents(n);var d=r.createContextualFragment(o[t]);n.appendChild(d),i.appendChild(n.firstElementChild)}};if(document.cookie.length){for(var a=document.cookie.split(";"),c=0;c<a.length;c++)try{a[c]=decodeURIComponent(a[c]);var l=a[c].split("="),s=void 0!==l[0]?l[0].trim():"",p=void 0!==l[1]?l[1].trim():"";if("borlabs-cookie"===s){var v=JSON.parse(decodeURIComponent(p));void 0!==v.domainPath&&v.domainPath===e.domain+e.path&&(o=v)}}catch(e){console.log("The cookie is spoiled:"),console.dir(a[c]),console.dir(e)}if(e.bots&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent.toLowerCase())&&(t=!0),Object.keys(o).length>0&&o.version===e.version&&(t=!0),t){for(var m in o.consents)for(var b in o.consents[m]){var u=o.consents[m][b];void 0!==e.optInJS[m]&&void 0!==e.optInJS[m][u]&&(d((r=e.optInJS[m][u],decodeURIComponent(Array.prototype.map.call(window.atob(r),(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join("")))),delete e.optInJS[m][u])}document.getElementsByTagName("head")[0].appendChild(i),document.dispatchEvent(n.prioritizedCodeUnblocked)}}return e}(borlabsCookiePrioritized);","contentType":"text/html; charset=utf-8","contentUrl":"https://content.pendo.statista.com/guide-content/C_tceRSJwyV-L44NUX6YrqeAMns/s6WRhVBqI6xJdyvXWzdkeLz02Lo/sGmTBBCqGGFL_oRVIy8bjGsDn80","contentUrlCss":"https://content.pendo.statista.com/guide-content/C_tceRSJwyV-L44NUX6YrqeAMns/s6WRhVBqI6xJdyvXWzdkeLz02Lo/HO4edbxV7SzfCQPUaqt3a18cNaQ.guide.css?sha256=S3pdl0Nvc46oOhCwMiUpAli0pQABWdIxTcj4L9ePrEM","contentUrlJs":"https://content.pendo.statista.com/guide-content/C_tceRSJwyV-L44NUX6YrqeAMns/s6WRhVBqI6xJdyvXWzdkeLz02Lo/Ik0AjwPejrhXhyzCK8ayVy_9QgE.guide.js?sha256=cc4knkl4CzVCpBgykE8qEUOE60aHErmhGC-BtrL9kh0","buildingBlocksUrl":"https://content.pendo.statista.com/guide-content/C_tceRSJwyV-L44NUX6YrqeAMns/s6WRhVBqI6xJdyvXWzdkeLz02Lo/Eypoh5PFeaJF-cAJ9SI-iawwSe8.buildingBlocks.json","domUrl":"https://content.pendo.statista.com/guide-content/C_tceRSJwyV-L44NUX6YrqeAMns/s6WRhVBqI6xJdyvXWzdkeLz02Lo/plLhns7igOBv28t12cPw0QfY0rk.dom.json?sha256=4BAhr0i-9XH0rVpeZ9qWx-kewcjzDHm_0r6Ei64PK7c","domJsonpUrl":"https://content.pendo.statista.com/guide-content/C_tceRSJwyV-L44NUX6YrqeAMns/s6WRhVBqI6xJdyvXWzdkeLz02Lo/909gQFwTo7B4mfm5OYiYUZ92YdY.dom.jsonp?sha256=XVQBJN-xkYFWTayKd7_tW7KiiEFLbkZNjHnUqhw9sow","rank":5000000,"advanceMethod":"button","attributes":{"advanceActions":null,"blockOutUI":{"additionalElements":".box.updateNewsFeed__trigger","enabled":true,"padding":{"bottom":100,"left":5,"right":5,"top":195}},"elementSelectionType":"custom","layoutDir":"right"},"lastUpdatedAt":1633511182601,"resetAt":0}],"guideDismissCount":0},{"createdByUser":{"id":"","username":"","first":"","last":"","role":0,"userType":"","hasLoggedIn":false},"createdAt":1633012003392,"lastUpdatedByUser":{"id":"","username":"","first":"","last":"","role":0,"userType":"","hasLoggedIn":false},"lastUpdatedAt":1700809616514,"appId":-323232,"id":"JLGysTr93NRZTs4ZAovOWmdCbT4","name":"Feedback_Poll_#262_Cancellation Form_Api_EnDeFrEs_Sia","description":"","state":"public","emailState":"","launchMethod":"dom","isMultiStep":true,"isTraining":false,"attributes":{"type":"building-block","capping":{"maxSessionImpressions":1,"maxImpressions":1},"dates":{"de":"Juni 24, 2021","en-US":"Jun 24, 2021","es-ES":"jun. 24, 2021","fr-FR":"juin 24, 2021"},"device":{"type":"all"},"priority":169,"sharedServiceVersion":"4.8.7","dom":{"isOnlyShowOnce":false,"showGuideOnlyOnElementClick":true},"activation":{"selector":"[data-gtm=\"profile__buttonSiaCancel\"]","inheritStepOne":false,"event":["click"]},"elementSelectionType":"custom"},"audience":[{"source":{"visitors":null}},{"eval":{"accountId":"metadata.auto.accountids"}},{"unwind":{"field":"accountId","keepEmpty":true}},{"select":{"visitorId":"visitorId"}}],"audienceUiHint":{"filters":[{"kind":"visitor","segmentId":"everyone"}]},"authoredLanguage":"de","recurrence":0,"recurrenceEligibilityWindow":0,"resetAt":1642675901658,"publishedAt":1670919663063,"publishedEver":true,"currentFirstEligibleToBeSeenAt":1637771255559,"polls":[{"id":"775xkl3rzov","question":"\n","idResponses":{"000k9jd6kqtnr9":"Daten sind nicht umfangreich genug.","001hx3e7tv17m":"Fehlender Zugriff auf benötigte Daten.","002csn0kmjise8":"Gewünschte Daten nicht gefunden.","003k8eydtg24pe":"Kein regelmäßiger Bedarf.","004uc8nz61tx0g":"Aus wirtschaftlichen Gründen.","005mcr5vib6tu":"Andere Kündigungsgründe."},"attributes":{"display":"radio","type":"PickList"},"resetAt":1642675901658},{"id":"6chqwhb6o3b","question":"Wir haben Ihre Kündigung registriert und schicken Ihnen in den nächsten Tagen eine Bestätigung per E-Mail zu.\nHätten Sie abschließend noch Zeit für ein kurzes Feedback?","attributes":{"type":"FreeForm"},"resetAt":1642675901658}],"isTopLevel":false,"isModule":false,"editorType":"visualDesignStudio","dependentMetadata":[],"language":"es-ES","steps":[{"id":"AHqKHeD7ZUoBKqpXZdwh6Qf-yXE","guideId":"JLGysTr93NRZTs4ZAovOWmdCbT4","templateId":"building-block-guide","type":"building-block","name":"Reason","elementPathRule":"","triggerElementPathRule":"","confirmationElementPathRule":"","contentType":"text/html; charset=utf-8","contentUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/AHqKHeD7ZUoBKqpXZdwh6Qf-yXE/2jmj7l5rSw0yVb_vlWAYkK_YBwk","buildingBlocksUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/AHqKHeD7ZUoBKqpXZdwh6Qf-yXE/oIextHXwy0vwWykHRw3qMCWkAPo-ceTt7WpdYSODdlSZEUwqtvtHC8M-es-ES.buildingBlocks.json","domUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/AHqKHeD7ZUoBKqpXZdwh6Qf-yXE/W0Do2M8pCEsOU0OfDCTS37cvM9s-6L7z6dRkU4d0mOJvAnkCHG8Jfp0-es-ES.dom.json?sha256=BLy4fZ7ha7_iQIPNGrWzHb4RDYGZ4-49z4MR-f7uXAc","domJsonpUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/AHqKHeD7ZUoBKqpXZdwh6Qf-yXE/EWK7x2jhzYQ39ow_yGbHp23LfJw-HQXPwQaSiGW6wrktotTKoOWQR5Q-es-ES.dom.jsonp?sha256=Wl2h3fy1JUKzog-VNtqDio6bNa9MR5OgVgjmqrQ7l3w","rank":0,"pollIds":["775xkl3rzov"],"advanceMethod":"button","attributes":{"blockOutUI":{"additionalElements":"","enabled":false,"padding":{"bottom":0,"left":0,"right":0,"top":0}},"isAutoFocus":true,"themeId":"WH7GyizTMzD3tFuNIzvqLcHyiv0"},"lastUpdatedAt":1695986599266,"resetAt":1642675901658},{"id":"1lous_ffSTla7GNkdkHv_lgIAf0","guideId":"JLGysTr93NRZTs4ZAovOWmdCbT4","templateId":"building-block-guide","type":"building-block","name":"Advertorial","elementPathRule":"","triggerElementPathRule":"","confirmationElementPathRule":"","contentType":"text/html; charset=utf-8","contentUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/1lous_ffSTla7GNkdkHv_lgIAf0/G9mPTsOp0M8XstiXMA6gbCUC0n4","contentUrlCss":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/1lous_ffSTla7GNkdkHv_lgIAf0/V6sEuh3-PE41kUHvzDZnyl_bTaw.guide.css?sha256=m7ss8IRtzajZkEJNPdJB-WCCQ-zlE19o8NTOERyiHkU","contentUrlJs":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/1lous_ffSTla7GNkdkHv_lgIAf0/tZDX9Src0K1XtOMnwuuPY1uLHt0.guide.js?sha256=6m41LJ76RnO_5g4928HD-KDcCyx0N4eYidOhy-A-_vE","buildingBlocksUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/1lous_ffSTla7GNkdkHv_lgIAf0/piscEBcAfJBeIV-1vK6cg6btZQM-4EUZ8dYhiGnkNPMplctA5v5QKw8-es-ES.buildingBlocks.json","domUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/1lous_ffSTla7GNkdkHv_lgIAf0/H28cO_-FcpzMPFgFvdUvOH0qfyo-Kw29-9DVVwPYOUin0e8cY9vcFyM-es-ES.dom.json?sha256=QbXfUl7RB3vWY58RJbCSAellbC5VwOVVlTr19x6y0UY","domJsonpUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/1lous_ffSTla7GNkdkHv_lgIAf0/lajWbHhFbn7YuJUDrX5UHxtLCqw-UG6z10LRkw09smwRdKYy-v7w55w-es-ES.dom.jsonp?sha256=6--tpoIr4bXr78fKK8wE6rb4SYSgAp5eYYNTtBLu0m8","rank":1,"advanceMethod":"button","attributes":{"blockOutUI":{"additionalElements":"","enabled":false,"padding":{"bottom":0,"left":0,"right":0,"top":0}},"isAutoFocus":true,"themeId":"WH7GyizTMzD3tFuNIzvqLcHyiv0"},"lastUpdatedAt":1695995817607,"resetAt":1642675901658},{"id":"6UQL1TeedZCAxyjSzf6WeMnXLdQ","guideId":"JLGysTr93NRZTs4ZAovOWmdCbT4","templateId":"building-block-guide","type":"building-block","name":"Free form feedback","elementPathRule":"","triggerElementPathRule":"","confirmationElementPathRule":"","contentType":"text/html; charset=utf-8","contentUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/6UQL1TeedZCAxyjSzf6WeMnXLdQ/_1wqM8x6RCM_qusNvdgss6WJ9qg","contentUrlJs":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/6UQL1TeedZCAxyjSzf6WeMnXLdQ/dIayhFGFRFV6o56u-HgFFlToKM8.guide.js?sha256=2VkGwTIoHOV9OyHekJQqtqzoxm8dnhxA94Iu7CiqfTI","buildingBlocksUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/6UQL1TeedZCAxyjSzf6WeMnXLdQ/XpNU0YVs-IKWZXUnVPPA71vGZik-VAuyQ9V288pc9_THcztneg68Q8M-es-ES.buildingBlocks.json","domUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/6UQL1TeedZCAxyjSzf6WeMnXLdQ/MCc8T0v390f5I_tQe-7YkOKU4o0-yhblFevsWqtUvhaIyFX3a63jeuA-es-ES.dom.json?sha256=IITAV3sMwtBhe1V9C0fJu5bSkExIWtagiw2ycwiOEsU","domJsonpUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/6UQL1TeedZCAxyjSzf6WeMnXLdQ/Lsbq5JAoW3kDRYIXwyv2bU-whJs-W8Zm74xPMWn5Kijd9OAGJQZ7qro-es-ES.dom.jsonp?sha256=yr5WlNFrdAsyytMsEUeJZsQ3w8sa4V19Vy-kw8lfUO0","rank":2,"pollIds":["6chqwhb6o3b"],"advanceMethod":"button","attributes":{"blockOutUI":{"additionalElements":"","enabled":false,"padding":{"bottom":0,"left":0,"right":0,"top":0}},"isAutoFocus":true,"themeId":"custom"},"lastUpdatedAt":1695890195162,"resetAt":1642675901658},{"id":"B1EltV3xloilJPyo9kcBn3iJiAk","guideId":"JLGysTr93NRZTs4ZAovOWmdCbT4","templateId":"building-block-guide","type":"building-block","name":"Thanks (canceling)","elementPathRule":"","triggerElementPathRule":"","confirmationElementPathRule":"","contentType":"text/html; charset=utf-8","contentUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/B1EltV3xloilJPyo9kcBn3iJiAk/2jmj7l5rSw0yVb_vlWAYkK_YBwk","buildingBlocksUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/B1EltV3xloilJPyo9kcBn3iJiAk/0-MsPCb8Y4WMAyPb3IxpM_ne1H8-xgZZxEb-r476RHs9eqPO33filGA-es-ES.buildingBlocks.json","domUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/B1EltV3xloilJPyo9kcBn3iJiAk/ATqJ_NtM0rH0fxyOwmSCWkCoeUM--X1DmLf6lM5vMvdB6MGuIYlE4OA-es-ES.dom.json?sha256=LCkp8SjlZY9_EPsqbSXMhSWqJE_FMDhctxyioGVHQFM","domJsonpUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/B1EltV3xloilJPyo9kcBn3iJiAk/qz2dnJSN-CNMuQMbhIn_-mCMJ3Y-EWzLTML4LvVuyjna2ZryyfZiN_8-es-ES.dom.jsonp?sha256=DwesL01PPYbYN-UPL_m85YrBO4mmMoqbFAXbkkN4aes","rank":3,"advanceMethod":"button","attributes":{"blockOutUI":{"additionalElements":"","enabled":false,"padding":{"bottom":0,"left":0,"right":0,"top":0}},"isAutoFocus":true,"themeId":"WH7GyizTMzD3tFuNIzvqLcHyiv0"},"lastUpdatedAt":1695890194739,"resetAt":1642675901658},{"id":"RC9kfJTk9MtEnAUBhlNUewoRtmE","guideId":"JLGysTr93NRZTs4ZAovOWmdCbT4","templateId":"building-block-guide","type":"building-block","name":"Thanks (staying)","elementPathRule":"","triggerElementPathRule":"","confirmationElementPathRule":"","contentType":"text/html; charset=utf-8","buildingBlocksUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/RC9kfJTk9MtEnAUBhlNUewoRtmE/JDwuyin80EvtYBQE1kFNfJrXuHA-pWbTx7-r-egusehb9Kr3tFmgKwM-es-ES.buildingBlocks.json","domUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/RC9kfJTk9MtEnAUBhlNUewoRtmE/x28F2ke5jiIaWeuX-0XRqf67Sfg-DN2hFDZsmhkt8pedj33Cx6SKJ6Y-es-ES.dom.json?sha256=mhMjW3YARtDwjvsQX-MB65eodVWIqi6hlIHu6ah6kDQ","domJsonpUrl":"https://content.pendo.statista.com/guide-content/JLGysTr93NRZTs4ZAovOWmdCbT4/RC9kfJTk9MtEnAUBhlNUewoRtmE/uz97LxSEWChY9v_71M-eVhHS-jE--BcGGSKAZ6TdU5b8hKH7dx1fCng-es-ES.dom.jsonp?sha256=RDpUGecdIPd0KJRsgll_e7lEQUOYCzmRCF3QnccLHgk","rank":4,"advanceMethod":"button","attributes":{"blockOutUI":{"additionalElements":"","enabled":false,"padding":{"bottom":0,"left":0,"right":0,"top":0}},"isAutoFocus":true,"themeId":"custom"},"lastUpdatedAt":1696867040141,"resetAt":1642675901658}],"guideDismissCount":0},{"createdByUser":{"id":"","username":"","first":"","last":"","role":0,"userType":"","hasLoggedIn":false},"createdAt":1684484701367,"lastUpdatedByUser":{"id":"","username":"","first":"","last":"","role":0,"userType":"","hasLoggedIn":false},"lastUpdatedAt":1688387640428,"appId":-323232,"id":"OdmtWNSSafwWZpMt4d8kwjhwQSE","name":"Announcement: New Search","description":"","state":"public","emailState":"","launchMethod":"launcher","isMultiStep":false,"isTraining":false,"attributes":{"dates":{"de":"Mai 19, 2023","en-US":"May 19, 2023","es-ES":"may. 19, 2023","fr-FR":"mai 19, 2023"},"device":{"type":"all"},"isAnnouncement":true,"priority":444,"sharedServiceVersion":"4.6.4","type":"building-block"},"audienceUiHint":{"filters":[]},"authoredLanguage":"de","recurrence":0,"recurrenceEligibilityWindow":0,"resetAt":0,"publishedAt":1688387640428,"publishedEver":true,"currentFirstEligibleToBeSeenAt":1684486447582,"isTopLevel":false,"isModule":false,"editorType":"visualDesignStudio","dependentMetadata":[],"language":"de","steps":[{"id":"WGiYlu3wLZQHmF2nHQuwSod6wSM","guideId":"OdmtWNSSafwWZpMt4d8kwjhwQSE","templateId":"building-block-guide","type":"building-block","elementPathRule":"","triggerElementPathRule":"","confirmationElementPathRule":"","contentType":"text/html; charset=utf-8","buildingBlocksUrl":"https://content.pendo.statista.com/guide-content/OdmtWNSSafwWZpMt4d8kwjhwQSE/WGiYlu3wLZQHmF2nHQuwSod6wSM/9iwUlWkoy-fO_DdMun2_GdMDfUQ.buildingBlocks.json","domUrl":"https://content.pendo.statista.com/guide-content/OdmtWNSSafwWZpMt4d8kwjhwQSE/WGiYlu3wLZQHmF2nHQuwSod6wSM/CE8BHKXKTTxLnZ-Vrb6MHtFVOAw.dom.json?sha256=iCMwFfENaP9Kdo-C-ojlrT8C3ahfi50jOO_26GpP2KQ","domJsonpUrl":"https://content.pendo.statista.com/guide-content/OdmtWNSSafwWZpMt4d8kwjhwQSE/WGiYlu3wLZQHmF2nHQuwSod6wSM/2XL4685LEohreguQUettw-mUivA.dom.jsonp?sha256=hUnNeGa697CYg4YfdJ6su_sbFAByzs9JhmWN8ElfKaU","rank":10000000,"advanceMethod":"button","attributes":{"isAutoFocus":true,"themeId":"unthemed"},"lastUpdatedAt":1688387616869,"resetAt":0}],"guideDismissCount":0},{"createdByUser":{"id":"","username":"","first":"","last":"","role":0,"userType":"","hasLoggedIn":false},"createdAt":1611580807818,"lastUpdatedByUser":{"id":"","username":"","first":"","last":"","role":0,"userType":"","hasLoggedIn":false},"lastUpdatedAt":1689239653773,"appId":-323232,"id":"zDMImWzYP2GXAzajhpsWgjLnuAA","name":"Feedback_NPS_#150_AskStatista_Api_EnDe_Pml","description":"","state":"public","emailState":"draft","launchMethod":"api","isMultiStep":true,"isTraining":false,"attributes":{"activation":null,"badge":null,"capping":{"maxImpressions":1,"maxSessionImpressions":1},"dates":{"de":"Okt. 13, 2021","en-US":"Oct 13, 2021","es-ES":"oct. 13, 2021","fr-FR":"oct. 13, 2021"},"device":{"type":"desktop"},"email":false,"priority":0,"sharedServiceVersion":"3.0.31","type":"building-block"},"audience":[{"source":{"visitors":null}},{"eval":{"accountId":"metadata.auto.accountids"}},{"unwind":{"field":"accountId","keepEmpty":true}},{"select":{"visitorId":"visitorId"}}],"audienceUiHint":{"filters":[{"kind":"visitor","segmentId":"everyone"}]},"authoredLanguage":"de","recurrence":7776000000,"recurrenceEligibilityWindow":0,"resetAt":0,"publishedAt":1637230521612,"publishedEver":true,"currentFirstEligibleToBeSeenAt":1612257809062,"showsAfter":1590579600000,"polls":[{"id":"e8nv44l4ma","question":"Wie zufrieden sind Sie mit AskStatista?","numericResponses":[0,1,2,3,4,5,6,7,8,9,10],"attributes":{"type":"NPSRating","leftLabel":"Gar nicht zufrieden","rightLabel":"   Sehr zufrieden","followUp":"bhs90i2h64c"},"resetAt":0},{"id":"bhs90i2h64c","question":"Welche Verbesserungen wünschen Sie sich für unser AskStatista Angebot?\n","attributes":{"type":"NPSReason"},"resetAt":0}],"isTopLevel":false,"isModule":false,"editorType":"","dependentMetadata":[],"language":"de","steps":[{"id":"KhkbI7zGVGoFNKEkksLpZwKt_pI","guideId":"zDMImWzYP2GXAzajhpsWgjLnuAA","type":"","elementPathRule":"","triggerElementPathRule":"","confirmationElementPathRule":"","contentType":"text/html; charset=utf-8","contentUrl":"https://content.pendo.statista.com/guide-content/zDMImWzYP2GXAzajhpsWgjLnuAA/KhkbI7zGVGoFNKEkksLpZwKt_pI/4cxKx7oKiAMOUSoOq1nfg88yX5M","contentUrlCss":"https://content.pendo.statista.com/guide-content/zDMImWzYP2GXAzajhpsWgjLnuAA/KhkbI7zGVGoFNKEkksLpZwKt_pI/ygDjoR3KNHRs-wuifb7bpDENbyI.guide.css?sha256=hsBl9u0R7GC3jN6YwnY7QUsc4XxNOYsNC5SAHc-vsZY","contentUrlJs":"https://content.pendo.statista.com/guide-content/zDMImWzYP2GXAzajhpsWgjLnuAA/KhkbI7zGVGoFNKEkksLpZwKt_pI/UbJu4alC4YtpFhbxikwoihJ1xkI.guide.js?sha256=xiDhauXzl_DNjV0FTTLLLN-8JalRRyEl0ihWbX012U8","buildingBlocksUrl":"https://content.pendo.statista.com/guide-content/zDMImWzYP2GXAzajhpsWgjLnuAA/KhkbI7zGVGoFNKEkksLpZwKt_pI/_7-2J5mxraeZn4lKZxIHPSyYog0.buildingBlocks.json","domUrl":"https://content.pendo.statista.com/guide-content/zDMImWzYP2GXAzajhpsWgjLnuAA/KhkbI7zGVGoFNKEkksLpZwKt_pI/3KM6FYp5hFaO8p_N-s-bTlhuhuI.dom.json?sha256=gyIyO0h8IAwwqvDSPgstJzZrt0VDi4PZ0-4JE0FNfuw","domJsonpUrl":"https://content.pendo.statista.com/guide-content/zDMImWzYP2GXAzajhpsWgjLnuAA/KhkbI7zGVGoFNKEkksLpZwKt_pI/zZ2a5NZqt-r__G6Wkum4nKPLH98.dom.jsonp?sha256=yUSq0aiNvZufUcpgVdoDDB3jGTdePQLdVVvQp4Mk4kM","rank":5000000,"pollIds":["e8nv44l4ma","bhs90i2h64c"],"advanceMethod":"button","attributes":{"autoHeight":true,"blockOutUI":{"additionalElements":"","enabled":false,"padding":{"bottom":0,"left":0,"right":0,"top":0}},"elementSelectionType":"suggested","height":500,"position":"top","themeId":"custom","variables":{"company":"us","receivesRecommendation":"a friend or coworker","followUpType":"standard","followUpStandard":"Please tell us why you gave this rating:","followUpDetractor":"Can you share any specific feedback about this score?","followUpNeutral":"What is one thing we could do differently to improve the experience?","followUpPromoter":"Mind sharing the main reason for your score?","enableSuccessMessage":true,"successMessage":"Thanks for your response!"},"width":500},"lastUpdatedAt":1635430012176,"resetAt":0},{"id":"a98SgHhxZNpbK5as6AwnChE5vGo","guideId":"zDMImWzYP2GXAzajhpsWgjLnuAA","type":"","elementPathRule":"","triggerElementPathRule":"","confirmationElementPathRule":"","contentType":"text/html; charset=utf-8","contentUrl":"https://content.pendo.statista.com/guide-content/zDMImWzYP2GXAzajhpsWgjLnuAA/a98SgHhxZNpbK5as6AwnChE5vGo/hA4xvMBPNnxYjhfjVX5figjaDCM","contentUrlJs":"https://content.pendo.statista.com/guide-content/zDMImWzYP2GXAzajhpsWgjLnuAA/a98SgHhxZNpbK5as6AwnChE5vGo/cZ4OtKVlBi-swIUu6RUdybBL7E8.guide.js?sha256=-Yrjn6fYznC__XUNPwZRTsEUGtHxQEyMILC41Ufb6OE","buildingBlocksUrl":"https://content.pendo.statista.com/guide-content/zDMImWzYP2GXAzajhpsWgjLnuAA/a98SgHhxZNpbK5as6AwnChE5vGo/7nOpZG4cuJKEYLBaahZY812dEwI.buildingBlocks.json","domUrl":"https://content.pendo.statista.com/guide-content/zDMImWzYP2GXAzajhpsWgjLnuAA/a98SgHhxZNpbK5as6AwnChE5vGo/JJaKyRby40rUM-tpIqCq_Y-lJkQ.dom.json?sha256=txpgqHORCDHPN1hFWwqXTTXQJs4kXi5jRtEDslVfu-4","domJsonpUrl":"https://content.pendo.statista.com/guide-content/zDMImWzYP2GXAzajhpsWgjLnuAA/a98SgHhxZNpbK5as6AwnChE5vGo/w8tinexoqVNEc3EG0khbHpfVA_0.dom.jsonp?sha256=p03s-Es7T8wGvrDJ3r4FQIjhFRUghB6SVNpcFclQh5E","rank":10000000,"advanceMethod":"button","attributes":{"autoHeight":true,"blockOutUI":{"additionalElements":"","enabled":false,"padding":{"bottom":0,"left":0,"right":0,"top":0}},"height":500,"position":"top","themeId":"custom","width":500},"lastUpdatedAt":1611581013199,"resetAt":0}],"guideDismissCount":0}],"normalizedUrl":"http://es.statista.com/temas/10559/shein#topicOverview","lastGuideStepSeen":{"isMultiStep":false,"state":""},"guideWidget":{"enabled":false,"hidePoweredBy":false,"data":{"guideCssUrl":"","onboarding":false}},"guideCssUrl":"","throttling":{"count":1,"enabled":true,"interval":4,"unit":"Hour"},"autoOrdering":[],"globalJsUrl":"","segmentFlags":[],"designerEnabled":false,"features":[{"eventProperties":[{"name":"email_adress_complete","rule":"{\"name\":\"email_adress_complete\",\"source\":\"[href=\\\"mailto:fr.support@statista.com\\\"]\",\"path\":\"innerText\"}","isActive":true,"path":"innerText","selector":"[href=\"mailto:fr.support@statista.com\"]","type":"","pattern":""}],"pageId":"","featureId":"xa8Rmc0MZW0mCpvsYC92TrmHgyw","featureRule":["[href^=\"mailto\"]"]}],"id":"5","preventCodeInjection":false});