
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
    "adscheduleid": "PW6mJtCP",
    "autoplayadsmuted": false,
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
        "tag": "https://pubads.g.doubleclick.net/gampad/ads?sz=640x360|1280x720|640x480&iu=/31040149/dobruchut/responsive/pre-roll&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&description_url=__page-url__&correlator=__random-number__&cust_params=m_cid%3D__item-mediaid__%26m_sec%3D__item-tags__",
        "type": "linear"
      },
      {
        "offset": "post",
        "tag": "https://pubads.g.doubleclick.net/gampad/ads?sz=640x360|1280x720|640x480&iu=/31040149/dobruchut/responsive/post-roll&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&description_url=__page-url__&correlator=__random-number__&cust_params=m_cid%3D__item-mediaid__%26m_sec%3D__item-tags__",
        "type": "linear"
      }
    ],
    "vpaidcontrols": true,
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
  "controls": true,
  "displayHeading": false,
  "displaydescription": true,
  "displaytitle": true,
  "floating": {
    "mode": "notVisible"
  },
  "ga": {},
  "generateSEOMetadata": true,
  "height": 270,
  "include_compatibility_script": false,
  "interactivity": false,
  "intl": {
    "en": {
      "advertising": {
        "admessage": "Reklama skon\u010d\u00ed za xxs",
        "cuetext": "Reklama",
        "skipmessage": "Presko\u010di\u0165 reklamu za xxs"
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
  "key": "njCRsrp4F2vVX9ONQRCyWuAAJErDYvBsaIeoZwU0J+nhGagWtbwSp+IQWR5tT7p0",
  "logo": {
    "file": "https://cdn.jwplayer.com/images/HzNvYL3v.png",
    "hide": true,
    "link": "https://dobruchut.aktuality.sk/recepty/",
    "position": "top-right"
  },
  "mute": true,
  "ph": 1,
  "pid": "7c42QSww",
  "pipIcon": "enabled",
  "playbackRateControls": true,
  "preload": "metadata",
  "related": {
    "autoplaytimer": 10,
    "displayMode": "overlay",
    "file": "//cdn.jwplayer.com/v2/playlists/pS4GYjAp?related_media_id=MEDIAID",
    "oncomplete": "autoplay"
  },
  "repeat": false,
  "sharing": {
    "code": "",
    "sites": [
      "facebook",
      "linkedin",
      "twitter",
      "tumblr",
      "reddit",
      "pinterest",
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
