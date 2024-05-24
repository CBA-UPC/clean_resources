
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
    "adscheduleid": "6aCta0ab",
    "client": "vast",
    "cuetext": "Advertisement",
    "outstream": false,
    "preloadAds": false,
    "rules": {
      "startOnSeek": "pre",
      "timeBetweenAds": 0
    },
    "schedule": [
      {
        "offset": "pre",
        "skipoffset": 5,
        "tag": [
          "https://pubads.g.doubleclick.net/gampad/ads?iu=/5349/ta.cc.com.s/video&description_url=https%3A%2F%2Fwww.cruisecritic.com%2F&tfcd=0&npa=0&sz=300x250%7C400x300%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=94647&vpos=preroll&ad_rule=1"
        ],
        "type": "linear"
      },
      {
        "offset": "post",
        "skipoffset": 5,
        "tag": [
          "https://pubads.g.doubleclick.net/gampad/ads?iu=/5349/ta.cc.com.s/video&description_url=https%3A%2F%2Fwww.cruisecritic.com%2F&tfcd=0&npa=0&sz=300x250%7C400x300%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=94647&vpos=postroll&ad_rule=1"
        ],
        "type": "linear"
      }
    ],
    "skipmessage": "Skip ad in xx seconds",
    "vpaidcontrols": false,
    "vpaidmode": "insecure"
  },
  "aspectratio": "16:9",
  "autostart": "viewable",
  "cast": {},
  "controls": true,
  "displayHeading": false,
  "displaydescription": true,
  "displaytitle": true,
  "height": 360,
  "key": "29x5ZWKLj7OxFP8sL4r/flybqTSbYyvhAFjXy3QAMcH8lvaU2guNw6wkJSFr//fO",
  "mute": true,
  "ph": 1,
  "pid": "gDjitifs",
  "playbackRateControls": false,
  "preload": "metadata",
  "related": {
    "autoplaytimer": 10,
    "displayMode": "shelfWidget",
    "file": "//cdn.jwplayer.com/v2/playlists/gGkKk7LH?related_media_id=MEDIAID",
    "onclick": "play",
    "oncomplete": "autoplay"
  },
  "repeat": false,
  "sharing": {
    "code": "%3Ciframe%20src%3D%22//content.jwplatform.com/players/MEDIAID-gDjitifs.html%22%20width%3D%22640%22%20height%3D%22360%22%20frameborder%3D%220%22%20scrolling%3D%22auto%22%3E%3C/iframe%3E",
    "sites": [
      "facebook",
      "twitter",
      "email",
      "linkedin",
      "pinterest",
      "reddit",
      "tumblr"
    ]
  },
  "skin": {
    "controlbar": {
      "icons": "#FFFFFF",
      "iconsActive": "#FFFFFF",
      "text": "#FFFFFF"
    },
    "timeslider": {
      "progress": "#FFFFFF"
    }
  },
  "stretching": "uniform",
  "width": "100%"
};
jwplayer.defaults = jwDefaults;
