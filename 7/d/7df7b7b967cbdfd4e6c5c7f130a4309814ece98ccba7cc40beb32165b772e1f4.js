
      const amsConfig = JSON.parse(`{
  "_metadata": {
    "version": 22,
    "createdAt": "2023-07-28 12:09:55",
    "updatedAt": "2024-01-02 13:14:29",
    "domain": "motofakty.pl"
  },
  "company": {
    "name": "Polska Press Sp. z o.o.",
    "customer": false,
    "gamIds": [
      "134579212"
    ]
  },
  "rules": {
    "pageTypes": {
      "HOME_PAGE": {
        "path": {
          "includes": [
            "^/$"
          ]
        }
      },
      "ARTICLE": {
        "path": {
          "includes": [
            "/ar/"
          ]
        }
      },
      "GALLERY": {
        "path": {
          "includes": [
            "/ga/"
          ]
        }
      },
      "GALLERY_HYBRID": {
        "path": {
          "includes": [
            "/gh/"
          ]
        }
      },
      "PLEBISCITES_CANDIDATE": {
        "path": {
          "includes": [
            "/pk/"
          ]
        }
      },
      "PLEBISCITES_CANDIDATES": {
        "path": {
          "includes": [
            "/pl/"
          ]
        }
      },
      "PLEBISCITES_PLEBISCITE": {
        "path": {
          "includes": [
            "/pp/"
          ]
        }
      }
    }
  },
  "setups": {
    "main": {
      "headerBidding": {
        "general": {
          "bidders": {
            "configs": {
              "sigmaBis": {
                "schain": {
                  "validation": "strict",
                  "config": {
                    "ver": "1.0",
                    "complete": 1,
                    "nodes": [
                      {
                        "asi": "sigma-media.com.pl",
                        "sid": "20",
                        "hp": 1
                      }
                    ]
                  }
                }
              }
            }
          },
          "enabled": true
        }
      },
      "inventory": {
        "general": {
          "enabled": true
        },
        "adUnits": {
          "mobile": {
            "topweb": {
              "enabled": true
            },
            "sponsoringweb": {
              "enabled": true
            },
            "middleweb": {
              "enabled": true
            }
          },
          "desktop": {
            "gora1": {
              "enabled": true
            },
            "sponsoring": {
              "enabled": true
            },
            "srodek1": {
              "enabled": true
            }
          }
        }
      }
    },
    "variants": {
      "HOME_PAGE": {
        "inventoryPart": "stronaglowna",
        "headerBidding": {
          "general": {
            "enabled": false
          }
        }
      },
      "PLEBISCITES_CANDIDATE": {
        "inventoryPart": "plebiscytykandydat",
        "headerBidding": {
          "general": {
            "enabled": false
          }
        }
      },
      "PLEBISCITES_CANDIDATES": {
        "inventoryPart": "plebiscytylista",
        "headerBidding": {
          "general": {
            "enabled": false
          }
        }
      },
      "PLEBISCITES_PLEBISCITE": {
        "inventoryPart": "plebiscytylokalizacja",
        "headerBidding": {
          "general": {
            "enabled": false
          }
        }
      }
    }
  }
}`);
      
      function mergeConfig(c, u) {
        for (k of Object.keys(u)) {
            if (!c.hasOwnProperty(k) || typeof u[k] !== 'object') c[k] = u[k];
            else mergeConfig(c[k], u[k]);
        }
        return c;
      }
      
      window.PPAdsConfig = window.PPAdsConfig ? mergeConfig(window.PPAdsConfig, amsConfig) : amsConfig;
      
      (() => {
        let adsEngineUrl = null;

        if (
            PPAdsConfig &&
            PPAdsConfig.setups &&
            PPAdsConfig.setups.main &&
            PPAdsConfig.setups.main.engine &&
            PPAdsConfig.setups.main.engine.url
        ) {
            adsEngineUrl = PPAdsConfig.setups.main.engine.url;
        }

        if (adsEngineUrl) {
          const script = document.createElement('script');
          script.src = adsEngineUrl;
          script.async = true;
          script.type = 'text/javascript';
          const addScript = document.getElementsByTagName('script')[0];
          addScript.parentNode.insertBefore(script, addScript);
        } else {
            throw new Error('Empty file adsEngineUrl.');
        }
      })();
    ("canvas");try{t=e.getContext("2d")}catch(t){return""}var n="IaID,org <canvas> 1.0";return t.textBaseline="top",t.font="14px 'Arial'",t.textBaseline="alphabetic",t.fillStyle="#f60",t.fillRect(125,1,62,20),t.fillStyle="#069",t.fillText(n,2,15),t.fillStyle="rgba(102, 204, 0, 0.7)",t.fillText(n,4,17),e.toDataURL()}(),function(){if(!a.allowLockedId||!a.consent)return"";var t,e,n,i,o=document.createElement("canvas");try{t=o.getContext("webgl")||o.getContext("experimental-webgl")}catch(t){}t&&(e=t.getExtension("WEBGL_debug_renderer_info"),n=t.getParameter(e.UNMASKED_VENDOR_WEBGL),i=t.getParameter(e.UNMASKED_RENDERER_WEBGL));return n+"~"+i}(),navigator.language,navigator.languages,navigator.systemLanguage||window.navigator.language,navigator.hardwareConcurrency],o="";for(let t=0;t<n.length;t++)o+=n[t]?"1":"0";var c=n.join("|");return e.lIatId=t&&t.split(".")[1]||0,e.lIatIdB=t&&t.split(".")[3]||0,e.lIatIdM=t&&t.split(".")[5]||0,e.lIatIdV=t&&t.split(".")[6]||0,e.controlHash=t&&t.split(".")[4]?t.split(".")[4]:a.controlHash?a.controlHash:"",e.iatId=u(c,256),e.iatIdB=u(c+"|"+e.controlHash,256),e.iatIdM=o,e.iatIdV="1.0",e.parts=n,e}(l);c(a.vcn,a.vcd,a.sessionId+"."+I.iatId+"."+a.ts+"."+I.iatIdB+"."+I.controlHash+"."+I.iatIdM+"."+I.iatIdV);var h,v,f,g=a.rootPath+"/initcb?v=1.0.12&appId="+a.appId+"&vId="+a.sessionId+"&s="+r(a.section||"")+"&fpc="+(s?1:0)+"&nv="+(e?0:1)+"&h="+r(n.location||"")+"&tcfc="+(a.consent||0)+"&lts="+(l&&l.split(".")[2]||0)+"&ts="+ +new Date+"&iatId="+I.iatId+"&iatIdB="+I.iatIdB+"&iatIdM="+I.iatIdM+"&iatIdV="+I.iatIdV+"&lIatId="+I.lIatId+"&lIatIdB="+I.lIatIdB+"&lIatIdM="+I.lIatIdM+"&lIatIdV="+I.lIatIdV+"&lch="+I.controlHash;h=g,v=null,f=function(){void 0!==n.document.addEventListener&&"prerender"===n.document.visibilityState||(d(h,!0),v&&n.document.removeEventListener(v,f))},void 0===n.document.addEventListener||"prerender"!==n.document.visibilityState?f():(void 0!==n.document.hidden?v="visibilitychange":void 0!==n.document.mozHidden?v="mozvisibilitychange":void 0!==n.document.msHidden?v="msvisibilitychange":void 0!==n.document.webkitHidden&&(v="webkitvisibilitychange"),n.document.addEventListener(v,f))},n===window.top?function t(e){if(void 0===n.__tcfapi&&e<20)n.setTimeout(function(){t(++e)});else if(e>=20)s("timeout waiting for tcfapi to be available");else{var a=n.setTimeout(function(){s("timeout waiting for TCF listener")},2e3);n.__tcfapi("addEventListener",2,function(t,e){if(n.clearTimeout(a),t.gdprApplies){if(e&&("tcloaded"===t.eventStatus||"useractioncomplete"===t.eventStatus)){var i=t.vendor&&t.vendor.consents&&t.vendor.consents[596],o=t.purpose&&t.purpose.consents&&Object.keys(t.purpose.consents).length>=8,c=t.tcString&&i&&o;s(c?"consent granted":"no valid consent",t,!c)}}else s("gdpr does not apply",t)})}}(0):l("unable to load bootstrap script")}();