
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
    "adscheduleid": "2cEPhaU7",
    "autoplayadsmuted": false,
    "bids": {
      "bidders": [
        {
          "formatId": 88656,
          "name": "SmartAdServer",
          "networkId": 3673,
          "pageId": 1599665,
          "siteId": 508768
        },
        {
          "id": "822689",
          "name": "IndexExchange",
          "type": "OpenRTB"
        },
        {
          "name": "Rubicon",
          "pubid": 22904,
          "siteId": 427190,
          "zoneId": 2435014
        },
        {
          "id": "4366333",
          "name": "PubMatic",
          "pubid": "161681",
          "type": "OpenRTB"
        },
        {
          "id": 26547973,
          "name": "AppNexus",
          "publisherId": 12125
        },
        {
          "id": "254572110",
          "name": "MediaNet",
          "pubid": "8CU8VQ01D"
        },
        {
          "id": "11",
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
    "endstate": "suspended",
    "outstream": false,
    "rules": {
      "startOnSeek": "pre",
      "timeBetweenAds": 0
    },
    "schedule": [
      {
        "offset": "pre",
        "tag": "https://pubads.g.doubleclick.net/gampad/ads?iu=/1001866/vCL&url=__referrer__&description_url=__page-url__&tfcd=0&npa=0&sz=400x300%7C640x480&cust_params=vP%3D0%26vT%3Di&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&gdpr=__gdpr__&gdpr_consent=__gdpr_consent__&addtl_consent=__addtl_consent__",
        "type": "nonlinear"
      }
    ],
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
  "controls": true,
  "displayHeading": false,
  "displaydescription": false,
  "displaytitle": false,
  "floating": {
    "mode": "notVisible"
  },
  "ga": {},
  "generateSEOMetadata": false,
  "include_compatibility_script": false,
  "interactive": false,
  "intl": {
    "en": {
      "advertising": {
        "admessage": "",
        "cuetext": "",
        "skipmessage": ""
      },
      "related": {
        "autoplaymessage": "",
        "heading": "More Videos"
      },
      "sharing": {
        "heading": "Share Video"
      }
    }
  },
  "key": "6tP5xK2pf7sBjaRCoUt8L+VzKGcug0mV74r8fdQCOeJxyZzzLuTWxIU9YmjTtdpw",
  "logo": {
    "file": "https://cdn.jwplayer.com/images/sNT9AHQp.png",
    "hide": false,
    "link": "https://www.clara.es/",
    "position": "top-right"
  },
  "mute": true,
  "ph": 1,
  "pid": "1pkeWPQQ",
  "pipIcon": "disabled",
  "playbackRateControls": true,
  "preload": "metadata",
  "related": {
    "displayMode": "shelf",
    "file": "//cdn.jwplayer.com/v2/playlists/AKvWI3MV?related_media_id=MEDIAID",
    "oncomplete": "hide"
  },
  "repeat": false,
  "sharing": {
    "code": "",
    "sites": [
      "facebook",
      "twitter",
      "email"
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
  "width": "100%"
};
jwplayer.defaults = jwDefaults;
