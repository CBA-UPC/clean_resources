
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
  "aboutlink": "https://time.com/subscribe",
  "abouttext": "Subscribe to TIME",
  "advertising": {
    "admessage": "This video will resume in xx seconds",
    "adscheduleid": "tlml45uq",
    "autoplayadsmuted": true,
    "client": "googima",
    "cuetext": "Advertisement",
    "endstate": "close",
    "outstream": false,
    "preloadAds": false,
    "rules": {
      "startOnSeek": "pre",
      "timeBetweenAds": 0
    },
    "schedule": [
      {
        "offset": "pre",
        "tag": "https://pubads.g.doubleclick.net/gampad/ads?iu=/21801468956/time.jw.vid.section&description_url=__page-url__&tfcd=0&npa=0&sz=640x360&ciu_szs=300x250%2C320x50%2C300x50&cmsid=2560025&gdfp_req=1&output=vast&unviewed_position_start=1&env=instream&ad_type=audio_video&impl=s&cust_params=tags%3D__item-tags__%26vid%3D__item-mediaid__&correlator=__timestamp__&vid=__item-mediaid__",
        "type": "linear"
      }
    ],
    "skipmessage": "Skip ad in xx seconds",
    "vpaidcontrols": true,
    "vpaidmode": "insecure"
  },
  "aspectratio": "16:9",
  "autoPause": {},
  "autostart": "viewable",
  "controls": true,
  "displayHeading": false,
  "displaydescription": false,
  "displaytitle": true,
  "ga": {
    "idstring": "title"
  },
  "height": 360,
  "key": "+dtqGGSo0QeP0KQirA9NekGydptJA/5RVWvhcT2Tj+vyrBZAyO5jGKfn83Euk3Qp",
  "mute": true,
  "ph": 1,
  "pid": "YIyEBgON",
  "playbackRateControls": false,
  "preload": "metadata",
  "repeat": false,
  "sharing": {
    "heading": "Share Video",
    "sites": [
      "facebook",
      "twitter",
      "email"
    ]
  },
  "skin": {
    "controlbar": {
      "background": "rgba(0, 0, 0, 0)",
      "icons": "rgba(255, 255, 255, 0.95)",
      "iconsActive": "#E90606",
      "text": "#F0F1F2"
    },
    "menus": {
      "background": "#141414",
      "text": "rgba(255, 255, 255, 0.95)",
      "textActive": "#E90606"
    },
    "timeslider": {
      "progress": "#E90606",
      "rail": "rgba(255, 255, 255, 0.3)"
    },
    "tooltips": {
      "background": "#141414",
      "text": "#FFFFFF"
    }
  },
  "stretching": "uniform",
  "width": "100%"
};
   }(jwDefaults, {
  "sendDomains": [
    {
      "128_sendDomainToFeedsOn": 1
    }
  ]
}));
jwplayer.defaults = jwDefaults;
