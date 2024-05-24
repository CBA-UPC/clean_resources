
/*!
   JW Player version 8.31.0
   Copyright (c) 2024, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.31.0/notice.txt
*/(})();

var jwDefaults = {
  "advertising": {
    "admessage": "This video will resume in xx seconds",
    "adscheduleid": "XnfFdoeI",
    "autoplayadsmuted": false,
    "bids": {
      "bidders": [
        {
          "id": "4366333",
          "name": "PubMatic",
          "pubid": "161681",
          "type": "OpenRTB"
        },
        {
          "id": 25231835,
          "name": "AppNexus",
          "publisherId": 12125
        },
        {
          "id": "822692",
          "name": "IndexExchange",
          "type": "OpenRTB"
        },
        {
          "name": "Rubicon",
          "pubid": 22904,
          "siteId": 427182,
          "zoneId": 2435006
        },
        {
          "formatId": 88656,
          "name": "SmartAdServer",
          "networkId": 3673,
          "pageId": 1599675,
          "siteId": 508763
        },
        {
          "id": "254572110",
          "name": "MediaNet",
          "pubid": "8CU8VQ01D"
        },
        {
          "id": "16",
          "name": "MediaGrid",
          "pubid": "HS9O5eFh",
          "type": "OpenRTB"
        }
      ],
      "ortbParams": {
        "plcmt": 1
      },
      "settings": {
        "bidTimeout": 3000,
        "buckets": [
          {
            "increment": 0.1,
            "max": 30,
            "min": 2
          },
          {
            "increment": 0.5,
            "max": 50,
            "min": 30
          }
        ],
        "consentManagement": {
          "gdpr": {
            "cmpApi": "iab",
            "defaultGdprScope": true,
            "rules": [
              {
                "enforcePurpose": true,
                "enforceVendor": true,
                "purpose": "storage"
              },
              {
                "enforcePurpose": true,
                "enforceVendor": true,
                "purpose": "basicAds",
                "vendorExceptions": [
                  "MediaGrid",
                  "SpotX"
                ]
              },
              {
                "enforcePurpose": true,
                "enforceVendor": true,
                "purpose": "measurement"
              }
            ],
            "timeout": 10000
          },
          "usp": {
            "cmpApi": "iab",
            "timeout": 10000
          }
        },
        "disableConsentManagementOnNoCmp": false,
        "floorPriceCents": 200,
        "mediationLayerAdServer": "dfp",
        "sendAllBids": true
      }
    },
    "client": "googima",
    "cuetext": "Advertisement",
    "endstate": "suspended",
    "outstream": false,
    "preloadAds": false,
    "rules": {
      "frequency": 4,
      "startOnSeek": "pre",
      "timeBetweenAds": 0
    },
    "schedule": [
      {
        "offset": "pre",
        "tag": "https://pubads.g.doubleclick.net/gampad/ads?iu=/1001866/vLE&url=__referrer__&description_url=__page-url__&tfcd=0&npa=0&sz=400x300%7C640x480&cust_params=vP%3D0%26vT%3Di&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&gdpr=__gdpr__&gdpr_consent=__gdpr_consent__&addtl_consent=__addtl_consent__",
        "type": "linear"
      }
    ],
    "skipmessage": "Skip ad in xx seconds",
    "vpaidcontrols": true,
    "vpaidmode": "insecure"
  },
  "aspectratio": "16:9",
  "autoPause": {
    "viewability": false
  },
  "autostart": "viewable",
  "captions": {
    "backgroundColor": "#000000",
    "backgroundOpacity": 75,
    "color": "#FFFFFF",
    "edgeStyle": "none",
    "fontFamily": "sans-serif",
    "fontOpacity": 100,
    "fontSize": 15,
    "windowColor": "#000000",
    "windowOpacity": 0
  },
  "cast": {},
  "controls": true,
  "displayHeading": false,
  "displaydescription": false,
  "displaytitle": false,
  "floating": {
    "mode": "never"
  },
  "ga": {
    "idstring": "title"
  },
  "generateSEOMetadata": false,
  "height": 270,
  "include_compatibility_script": false,
  "interactive": false,
  "intl": {
    "en": {
      "advertising": {
        "admessage": "",
        "cuetext": "",
        "skipmessage": ""
      },
      "sharing": {
        "heading": "Share Video"
      }
    }
  },
  "key": "cLVX9iRz5xk4gBeG+rMQPoW8NODmb8tH0CFVYJMDFBJk4MrPcy7XLhbmhe3tErj2",
  "logo": {
    "file": "https://assets-jpcust.jwpsrv.com/watermarks/QIrzQf1O.png",
    "hide": false,
    "link": "https://www.lecturas.com",
    "margin": "10",
    "position": "top-right"
  },
  "mute": true,
  "ph": 1,
  "pid": "eVTufTNN",
  "pipIcon": "disabled",
  "playbackRateControls": true,
  "preload": "metadata",
  "related": {
    "autoplaymessage": "siguiente v\u00eddeo en 10 segundos",
    "onclick": "play"
  },
  "repeat": false,
  "sharing": {
    "code": "",
    "sites": [
      "facebook",
      "twitter",
      "email",
      "linkedin",
      "pinterest"
    ]
  },
  "skin": {
    "controlbar": {
      "background": "rgba(0,0,0,0)",
      "icons": "rgba(255,255,255,0.8)",
      "iconsActive": "#FFFFFF",
      "text": "#FFFFFF"
    },
    "menus": {
      "background": "#333333",
      "text": "rgba(255,255,255,0.8)",
      "textActive": "#FFFFFF"
    },
    "timeslider": {
      "progress": "#F2F2F2",
      "rail": "rgba(255,255,255,0.3)"
    },
    "tooltips": {
      "background": "#FFFFFF",
      "text": "#000000"
    }
  },
  "stretching": "uniform",
  "width": "100%"
};
jwplayer.defaults = jwDefaults;
