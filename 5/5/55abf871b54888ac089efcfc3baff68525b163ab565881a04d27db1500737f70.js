var c=upScore.config;c.trackArticles=!1,c.version=0,upScore.track();var onePlayerElements=document.querySelectorAll(".iframeWrap");onePlayerElements.length>0&&upScore.addScript("//files.upscore.com/player/onnetwork_particle.js");var youtubeElements=Array.prototype.slice.call(document.querySelectorAll("iframe[src*=youtube]"),0);youtubeElements.length>0&&(youtubeElements.map((),upScore.addScript("//files.upscore.com/player/youtube_particle.js"));