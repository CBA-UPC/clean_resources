
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
    "adscheduleid": "1UZkwJY0",
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
        "tag": "https://pubads.g.doubleclick.net/gampad/ads?iu=/55964524/lv_amp/__item-section__&description_url=__page-url__&env=instream&tfcd=0&npa=0&sz=480x360&gdfp_req=1&output=vast&unviewed_position_start=1&impl=s&correlator=__random-number__&vpos=preroll&ppos=1&gdpr=__gdpr__&gdpr_consent=__gdpr_consent__&addtl_consent=__addtl_consent__&url=__page-url__&trt=2&vconp=1&cust_params=player%3Djwplayer%26au1%3Dlv_amp%26au2%3D%2Fn%26cat%3Dstory%26t%3DvideoMain",
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
  "displaytitle": true,
  "floating": {
    "mode": "never"
  },
  "generateSEOMetadata": false,
  "height": 360,
  "include_compatibility_script": false,
  "interactivity": false,
  "intl": {
    "en": {
      "advertising": {
        "admessage": "",
        "cuetext": "",
        "skipmessage": ""
      },
      "related": {
        "autoplaymessage": "M\u00e1s v\u00eddeos en La Vanguardia",
        "heading": "More Videos"
      },
      "sharing": {
        "heading": "Share Video"
      }
    }
  },
  "key": "BGKB0URMKvNfts05JphjiqTsuCSnOH3Dfa0e8SNsiHV4esKByE1BLyi0h631BFBS",
  "logo": {
    "file": "https://assets-jpcust.jwpsrv.com/watermarks/IcVjS9HA.png",
    "hide": true,
    "margin": "10",
    "position": "top-left"
  },
  "mute": true,
  "ph": 1,
  "pid": "hTFJ4MdY",
  "pipIcon": "disabled",
  "playbackRateControls": false,
  "preload": "none",
  "related": {
    "autoplaytimer": 0,
    "displayMode": "overlay",
    "file": "//cdn.jwplayer.com/v2/playlists/RPOlwxJ4?related_media_id=MEDIAID",
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
