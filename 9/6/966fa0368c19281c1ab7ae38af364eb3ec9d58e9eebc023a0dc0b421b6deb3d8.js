// For license information, see `https://assets.adobedtm.com/1e5bed4d9376/ab173ddb68b1/31f3c7c5d3cb/RC466011e41ae348f79d523128ee0a2db3-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/1e5bed4d9376/ab173ddb68b1/31f3c7c5d3cb/RC466011e41ae348f79d523128ee0a2db3-source.min.js', "<!-- Piano Script Start -->\n<script>\nif (typeof window.bpTrackVars.config !== 'undefined' && typeof window.bpTrackVars.config.pianoComposer !== 'undefined' && typeof window.bpTrackVars.config.pianoComposer.applicationId !== 'undefined' && window.bpTrackVars.config.pianoComposer.applicationId !== ''){\n  var tp = window.tp || [];\n  \n  // コンテンツセグメント情報設定\n  pianoComposerContentsSegmentation(tp);\n  \n  // Pianoライブラリの読み込みと初期設定\n  tp.push([\"setAid\", window.bpTrackVars.config.pianoComposer.applicationId]);\n  tp.push([\"setSandbox\", false]);\n  tp.push([\"setUseTinypassAccounts\", false]);\n  tp.push([\"setEndpoint\", 'https://buy-ap.piano.io/api/v3']);\n  tp.push([\"setPianoIdUrl\", 'https://id-ap.piano.io']);\n  tp.push([\"setEspEndpoint\", 'https://api-esp-ap.piano.io']);\n  if (typeof window.bpTrackVars.config.cx !== 'undefined' && typeof window.bpTrackVars.config.cx.siteId !== 'undefined' && window.bpTrackVars.config.cx.siteId !== ''){\n    tp.push([\"setCxenseSiteId\", window.bpTrackVars.config.cx.siteId]);\n  }\n  tp.push([\"init\", function() {\n    tp.experience.init();\n  }]);\n  (function(a){var b=document.createElement(\"script\");b.type=\"text/javascript\";b.async=!0;b.src=a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(\"//code.piano.io/api/tinypass.min.js\");\n  \n  // コンテンツセグメント情報設定用関数\n  function pianoComposerContentsSegmentation(tp){\n    if (typeof window.bpTrackVars !== 'undefined'){\n      // setTags\n      var setTagsList = [];\n      if (typeof window.bpTrackVars.mediaId !== 'undefined'){\n        var mediaIdList = window.bpTrackVars.mediaId.split(',');\n        mediaIdList.forEach(function(value){\n          setTagsList.push(\"mediaId-\" + value);\n        });\n      }\n      if (typeof window.bpTrackVars.subSite !== 'undefined'){\n        setTagsList.push(\"subSite-\" + window.bpTrackVars.subSite);\n      }\n      if (typeof window.bpTrackVars.themeId !== 'undefined'){\n        setTagsList.push(\"themeId-\" + window.bpTrackVars.themeId);\n      }\n      if (typeof window.bpTrackVars.themeName !== 'undefined'){\n        setTagsList.push(\"themeName-\" + window.bpTrackVars.themeName);\n      }\n      if (typeof window.bpTrackVars.genre !== 'undefined'){\n        setTagsList.push(\"genre-\" + window.bpTrackVars.genre);\n      }\n      if (typeof window.bpTrackVars.category !== 'undefined'){\n        setTagsList.push(\"category-\" + window.bpTrackVars.category);\n      }\n      if (typeof window.bpTrackVars.categorizedThemeId !== 'undefined'){\n        var categorizedThemeIdList = window.bpTrackVars.categorizedThemeId.split(';');\n        categorizedThemeIdList.forEach(function(value){\n          setTagsList.push(\"categorizedThemeId-\" + value);\n        });\n      }\n      if (typeof window.bpTrackVars.tagName !== 'undefined'){\n        var tagNameList = window.bpTrackVars.tagName.split(';');\n        tagNameList.forEach(function(value){\n          setTagsList.push(\"tagName-\" + value);\n        });\n      }\n      if (typeof window.bpTrackVars.pageStatus !== 'undefined'){\n        setTagsList.push(\"pageStatus-\" + window.bpTrackVars.pageStatus);\n      }\n      if (typeof window.bpTrackVars.articlePageTotalNo !== 'undefined'){\n        setTagsList.push(\"articlePageTotalNo-\" + window.bpTrackVars.articlePageTotalNo);\n      }\n      if (typeof window.bpTrackVars.pageNumber !== 'undefined'){\n        setTagsList.push(\"pageNumber-\" + window.bpTrackVars.pageNumber);\n      }\n      if (typeof window.bpTrackVars.publishDate !== 'undefined'){\n        setTagsList.push(\"publishDate-\" + window.bpTrackVars.publishDate);\n      }\n      if (typeof window.bpTrackVars.tieupId !== 'undefined'){\n        setTagsList.push(\"tieupId-\" + window.bpTrackVars.tieupId);\n      }\n      if (typeof window.bpTrackVars.repTieupId !== 'undefined'){\n        setTagsList.push(\"repTieupId-\" + window.bpTrackVars.repTieupId);\n      }\n      if (typeof window.bpTrackVars.trackReadTarget !== 'undefined'){\n        setTagsList.push(\"trackReadTarget-\" + window.bpTrackVars.trackReadTarget);\n      }\n      if (typeof window.bpTrackVars.authKind !== 'undefined'){\n        setTagsList.push(\"authKind-\" + window.bpTrackVars.authKind);\n      }\n      if (typeof window.bpTrackVars.authKindRaw !== 'undefined'){\n        setTagsList.push(\"authKindRaw-\" + window.bpTrackVars.authKindRaw);\n      }\n      if (typeof window.bpTrackVars.searchKeyword !== 'undefined'){\n        setTagsList.push(\"searchKeyword-\" + window.bpTrackVars.searchKeyword);\n      }\n      if (typeof window.bpTrackVars.searchTagName !== 'undefined'){\n        var searchTagNameList = window.bpTrackVars.searchTagName.split(';');\n        searchTagNameList.forEach(function(value){\n          setTagsList.push(\"searchTagName-\" + value);\n        });\n      }\n      if (typeof window.bpTrackVars.subDomain !== 'undefined'){\n        setTagsList.push(\"subDomain-\" + window.bpTrackVars.subDomain);\n      }\n      if (typeof window.bpTrackVars.pageReferrer !== 'undefined'){\n        setTagsList.push(\"pageReferrer-\" + window.bpTrackVars.pageReferrer);\n      }\n      if (typeof window.bpTrackVars.userAgent !== 'undefined'){\n        setTagsList.push(\"userAgent-\" + window.bpTrackVars.userAgent);\n      }\n      if (typeof window.bpTrackVars.exrTrackingCode !== 'undefined'){\n        setTagsList.push(\"exrTrackingCode-\" + window.bpTrackVars.exrTrackingCode);\n      }\n      if (typeof window.bpTrackVars.inTrackingCode !== 'undefined'){\n        setTagsList.push(\"inTrackingCode-\" + window.bpTrackVars.inTrackingCode);\n      }\n      if (typeof window.bpTrackVars.sTrackingCode !== 'undefined'){\n        setTagsList.push(\"sTrackingCode-\" + window.bpTrackVars.sTrackingCode);\n      }\n      if (typeof window.bpTrackVars.maTrackingCode !== 'undefined'){\n        setTagsList.push(\"maTrackingCode-\" + window.bpTrackVars.maTrackingCode);\n      }\n      if (typeof window.navigator.userAgent !== 'undefined'){\n        var ua = window.navigator.userAgent;\n        setTagsList.push(\"device-\" + ((ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) ? 'SP' : 'PC'));\n      }\n      tp.push([\"setTags\",setTagsList]);\n      // setContentCreated\n      if (typeof window.bpTrackVars.publishDateTime !== 'undefined'){\n        var ex = /(\\d{4}-\\d{2}-\\d{2}) (\\d{2}:\\d{2}:\\d{2})/g;\n        tp.push([\"setContentCreated\", window.bpTrackVars.publishDateTime.replace(ex, '$1T$2+09:00')]);\n      }\n      // setCustomVariable\n      if (typeof window.bpTrackVars.userId !== 'undefined'){\n        tp.push([\"setCustomVariable\", \"userId\", window.bpTrackVars.userId]);\n      }\n      if (typeof window.bpTrackVars.userStatus !== 'undefined'){\n        tp.push([\"setCustomVariable\", \"userStatus\", window.bpTrackVars.userStatus]);\n      }\n      if (typeof window.bpTrackVars.authResult !== 'undefined'){\n        tp.push([\"setCustomVariable\", \"authResult\", window.bpTrackVars.authResult]);\n      }\n    }\n  }\n  \n  // コンテンツ逐次読み込み時用関数\n  function pianoComposerLoadingSequential(){\n    var tp = window.tp || [];\n  \n    // コンテンツセグメント情報設定\n    pianoComposerContentsSegmentation(tp);\n  \n    // Composerエクスペリエンス実行\n    tp.push([\"init\", function() {\n      tp.experience.execute();\n    }]);\n  }\n}\n</script>\n<!-- Piano Script End -->");