
/*!
   JW Player version 8.30.1
   Copyright (c) 2023, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.30.1/notice.txt
*/(})();

var jwDefaults = {
  "advertising": {
    "admessage": "Este video se cerrara en xx segundos",
    "adscheduleid": "92zZ5qTh",
    "autoplayadsmuted": true,
    "client": "googima",
    "cuetext": "Publicidad",
    "endstate": "suspended",
    "outstream": false,
    "preloadAds": false,
    "rules": {
      "startOnSeek": "pre",
      "timeBetweenAds": 0
    },
    "schedule": [
      {
        "offset": "pre",
        "tag": "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/242767168/ole/player3&description_url=https%3A%2F%2Fwww.ole.com.ar&tfcd=0&npa=0&sz=400x300%7C640x480%7C800x600%7C1280x720&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=",
        "type": "linear"
      }
    ],
    "skipmessage": "Skip ad in xx seconds",
    "vpaidcontrols": true,
    "vpaidmode": "enabled"
  },
  "aspectratio": "16:9",
  "autoPause": {
    "viewability": true
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
  "displaydescription": true,
  "displaytitle": true,
  "floating": {
    "mode": "never"
  },
  "generateSEOMetadata": true,
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
        "autoplaymessage": "__title__ se iniciar\u00e1 en xx",
        "heading": "M\u00e1s videos"
      },
      "sharing": {
        "heading": "Compartir"
      }
    }
  },
  "key": "yOhAtDMI7iad8pd0Muw6XOAx0EE4tGqFPMeHhj7xpbNthDsiII4RBMKh/w8cPA0G",
  "logo": {
    "hide": false,
    "position": "top-right"
  },
  "mute": true,
  "ph": 1,
  "pid": "WltVwZAr",
  "pipIcon": "disabled",
  "playbackRateControls": true,
  "preload": "metadata",
  "related": {
    "autoplaytimer": 10,
    "displayMode": "overlay",
    "file": "//cdn.jwplayer.com/v2/playlists/dE314ose?related_media_id=MEDIAID",
    "oncomplete": "autoplay"
  },
  "repeat": false,
  "setTimeEvents": true,
  "sharing": {
    "code": "",
    "sites": [
      "twitter",
      "facebook"
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
