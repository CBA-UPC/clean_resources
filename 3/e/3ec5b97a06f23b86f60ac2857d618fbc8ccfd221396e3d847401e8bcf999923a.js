
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
    "admessage": "This video will resume in xx seconds",
    "adscheduleid": "9HjlOmQA",
    "autoplayadsmuted": false,
    "client": "googima",
    "cuetext": "Advertisement",
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
        "tag": "https://pubads.g.doubleclick.net/gampad/ads?iu=/18981092/24_Video_PreRoll_JWPlayer&description_url=https%3A%2F%2Fwww.24sata.hr&tfcd=0&npa=0&sz=400x300%7C504x338%7C600x400%7C620x380%7C640x360%7C640x380%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=",
        "type": "linear"
      },
      {
        "offset": 25,
        "tag": "https://pubads.g.doubleclick.net/gampad/ads?iu=/18981092/24m_Video_MidRoll&description_url=https%3A%2F%2Fwww.24sata.hr&tfcd=0&npa=0&sz=400x300%7C504x338%7C600x400%7C620x380%7C640x360%7C640x380%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=",
        "type": "linear"
      }
    ],
    "skipmessage": "Skip ad in xx seconds",
    "vpaidcontrols": false,
    "vpaidmode": "insecure"
  },
  "aspectratio": "16:9",
  "autoPause": {
    "viewability": false
  },
  "autostart": false,
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
  "displaydescription": true,
  "displaytitle": true,
  "floating": {
    "mode": "never"
  },
  "ga": {
    "idstring": "title"
  },
  "generateSEOMetadata": false,
  "height": 360,
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
  "key": "bV9MhiXPDXrR+Xg3vZ8zcCZ1cm85gBMXk/MCyhpQqUnoci6tzvgjXJj6e4mf36YW",
  "logo": {
    "hide": false,
    "position": "top-right"
  },
  "mute": false,
  "ph": 1,
  "pid": "dHawOEvp",
  "pipIcon": "disabled",
  "playbackRateControls": true,
  "preload": "metadata",
  "related": {
    "autoplaytimer": 10,
    "displayMode": "shelf",
    "file": "//cdn.jwplayer.com/v2/playlists/l7tr1J1v?related_media_id=MEDIAID",
    "onclick": "play",
    "oncomplete": "autoplay"
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
      "progress": "#C63131",
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
