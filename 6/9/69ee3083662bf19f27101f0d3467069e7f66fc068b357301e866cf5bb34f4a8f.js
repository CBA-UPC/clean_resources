monetate.c.cr({"data": "(function(){\n\t\n\tvar a=document.createElement(\"script\");\n\ta.type=\"text/javascript\";\n\ta.async=!0;\n\ta.src=\"//unpkg.com/typed.js@2.1.0/dist/typed.umd.js\";\n\t\n\tvar b=document.getElementsByTagName(\"script\")[0];\n\tb.parentNode.insertBefore(a,b);\n\t\n  \tvar initSearchAnimation = function() {\n      \n      \t$('#search-input').blur();\n      \t$(\"#search-input\").attr(\"placeholder\", \"\");\n      \n      \tvar searchStrings = ['Search for Valentine\\'s Day', 'Search for Storage', 'Search for NFL','Search for Vitamins', 'Search for Sweaters'];\n      \n      \tvar devInfo = HSN.Instance().DeviceInformation;\n      \n      \tvar isMobile = (devInfo.IsMobile && !devInfo.IsTablet);\n      \n      \tvar placeholderText = isMobile ? \"Search\" : \"Search by Item # or keyword\";\n      \n          var typed = new Typed('#search-input', {\n            strings: searchStrings,\n            typeSpeed: 50,\n            backSpeed: 0,\n            attr: 'placeholder',\n    \t  bindInputFocusEvents: true,\n            loop: true,\n            onStop: function(pos, self) {              \n              setTimeout(function(){                  \n                  $(\"#search-input\").attr(\"placeholder\", placeholderText);\n              }, 50);\n              \n            }\n          });      \n      };\n  \n  \ta.addEventListener(\"load\", () => {\n        initSearchAnimation();\n      });\n\n})();\n\n(function(){\n\tHSN.DataLayer.helpers.metricEvent(null, 'MN:Prod', '313-InspireSearch', 'TestA', null, true);\n})();\n", "ref": "1022/5108380.js"});