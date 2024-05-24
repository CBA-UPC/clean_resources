
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
    "adscheduleid": "blUHQSib",
    "autoplayadsmuted": true,
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
        "tag": "https://pubads.g.doubleclick.net/gampad/ads?iu=/38681514/Messaggero/video/videomobile&description_url=__page-url__&cust_params=UrlFull%3D__page-url__%26vast_id%3D__vast_id__&tfcd=0&npa=0&sz=640x360&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&ad_rule=1",
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
  "autostart": true,
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
  "key": "3PuJ8KjZGTxDv+zOPf2LwiHWBJp/O3YS5ZSZSyVRoB61r367cwEUwCs3hGavE2i9",
  "logo": {
    "hide": false,
    "position": "top-right"
  },
  "mute": true,
  "ph": 1,
  "pid": "xTUu4Kma",
  "pipIcon": "disabled",
  "playbackRateControls": false,
  "preload": "metadata",
  "related": {
    "autoplaytimer": 0,
    "displayMode": "shelf",
    "file": "//cdn.jwplayer.com/v2/playlists/BAmTNmED?related_media_id=MEDIAID",
    "onclick": "play",
    "oncomplete": "autoplay"
  },
  "repeat": true,
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
  "stretching": "uniform",
  "width": "100%"
};
jwplayer.defaults = jwDefaults;
