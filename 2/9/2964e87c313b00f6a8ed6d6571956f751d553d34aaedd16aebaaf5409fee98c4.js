
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
    "adscheduleid": "JPKNj7fx",
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
        "tag": "https://pubads.g.doubleclick.net/gampad/ads?iu=/4145/tmz.videos/share/clip&description_url=https%3A%2F%2Ftmz.com&tfcd=0&npa=0&sz=1001x1001&max_ad_duration=180000&mpt=JWPlayer&ppid=&pp=TMZ&cmsid=2593975&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear&vpos=preroll&nofb=1&mpt=JWPlayer&vid=__item-id__&vid_doc_id=__item-id__&ad_rule=1&cust_params=categories%3D__item-categories__%26people%3D__item-people__",
        "type": "linear"
      }
    ],
    "skipmessage": "Skip ad in xx seconds",
    "vpaidcontrols": false,
    "vpaidmode": "disabled"
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
  "controls": true,
  "displayHeading": false,
  "displaydescription": true,
  "displaytitle": true,
  "floating": {
    "mode": "never"
  },
  "generateSEOMetadata": false,
  "height": 360,
  "include_compatibility_script": false,
  "intl": {
    "en": {
      "advertising": {
        "admessage": "",
        "cuetext": "",
        "skipmessage": ""
      }
    }
  },
  "key": "a4XcJFjGXEjt8aA88kf2rh9nZyIt1bMnpDX3r5PY9OIrzYyeQMgD0S8TKgbilI94",
  "logo": {
    "hide": false,
    "position": "top-right"
  },
  "mute": false,
  "ph": 1,
  "pid": "Rb5Rg8wp",
  "pipIcon": "disabled",
  "playbackRateControls": false,
  "preload": "metadata",
  "repeat": false,
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
