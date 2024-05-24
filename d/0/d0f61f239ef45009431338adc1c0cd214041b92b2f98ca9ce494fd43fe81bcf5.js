/*
** 需要先引入微信分享的js，再引入本js，分享的数据定义在引用本js时，
** <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
** <script id="wx-share-data" type="text/javascript" src="js/wxshare.js" data-title="提案议案排行榜" data-desc="中国网一点资讯联合推出2017年全国两会特别报道——提案议案排行榜" data-img="http://m.china.com.cn/plug/20170228/images/share.jpg"></script>
** 版本：1.1.0，增加了分享成功时的客户端统计事件；
*/


;(function(){
  var s = document.getElementById('wx-share-data');
  if(/micromessenger/ig.test(navigator.userAgent) && !!s){ //is weixin 
    var checkUrl = "";
    
    if( s.hasAttribute('check-url') ){
      checkUrl = s.getAttribute('check-url') + '?host=m.feawin.com&url=' + encodeURIComponent(window.location.href);
    }else{
      // checkUrl = "https://share.m.china.com.cn/doCheck?url="+encodeURIComponent(window.location.href);
      checkUrl = "https://share.m.china.com.cn/doCheck?url="+encodeURIComponent(window.location.href);
    }

    var wxData = {
      wxUrl: checkUrl,
      title: s.hasAttribute('data-title')?s.getAttribute('data-title'):document.getElementsByTagName('title')[0].innerText||'请设置微信分享标题',
      desc: s.hasAttribute('data-desc')?s.getAttribute('data-desc'):document.getElementsByName('description')[0].getAttribute('content') || '请设'https://m.china.com.cn/images/app/appicon.png',
      link: window.location.href
    };

    loadJSON(wxData.wxUrl,function(data) {
        // console.log(data,wxData);
        setData(data,wxData);
      },function(xhr) {
        console.error(xhr);
      }
    );
  }

  function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          if (success)
            success(JSON.parse(xhr.responseText));
        } else {
          if (error)
            error(xhr);
        }
      }
   }

  // 分享成功，触发dplus统计
  function dplusEvent(shareTo){
    if(dplus && dplus.track){
      dplus.track("weixinShare",{
        shareTo: shareTo
      },function(){
        console.log('d-plus 送达.');
      });
    }
  }

  // 分享成功，触发客户端的sdk统计
  function sdkEvent(shareTo){
    var shareData = window.sdkShareData || {};
    shareData.shareResult = '1';
    shareData.sharePlatform = shareTo;
    var language = shareData.language || 'zh';
    var eventName = '';
    if(window.JSsdk){

      // 根据分享数据里的字段，判断是哪种页面分享，使用不同的分享事件名称
      if(shareData.subjectId){
       Data.menuId){
        eventName = 'shareMenu';
      }else if(shareData.newsId){
        eventName = 'shareNews';
      }

      if(eventName){
        JSsdk.sendData(language, {
          "eventName": eventName, // 专题阅读
          "eventData": shareData
        }, function (res) {
          console.log(res);
        });
      }
    }
  }

  function setData(data,shareData){
    var wxdebug = false;
    if (location.href.indexOf('wxdebug=1') >= 0){
      wxdebug = true;
    }

    wx.config({
      debug: wxdebug,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: ['checkJsApi','onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone']
    });
    // ,'startRecord','stopRecord','onVoiceRecordEnd',
    // 'playVoice','pauseVoice','stopVoice','onVoicePlayEnd','uploadVoice','downloadVoice','chooseImage','previewImage','uploadImage','downloadImage',
    // 'translateVoice','getNetworkType','openLocation','getLocation','hideOptionMenu','showOptionMenu','hideMenuItems','showMenuItems','hideAllNonBaseMenuItem',
    // 'showAllNonBaseMenuItemrd','chooseCard','openCard'

    console.log("wx config done");

    wx.ready(function () {
      // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
      wx.checkJsApi({
        jsApiList: [
          'getNetworkType',
          'previewImage'
        ],
        success: function (res) {
          console.log("wx checkJsApi success");
        }
      });

      // 2. 分享接口
      // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareAppMessage({
        title: shareData.title,
        desc: shareData.desc,
        link: shareData.link,
        imgUrl: shareData.imgUrl,
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function(){
          // 分享成功，触发dplus统计
          dplusEvent('wxFriend');

          // 分享成功，触发客户端的sdk统计
          sdkEvent('wxFriends');
        }
      });

      // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareTimeline({
        title: shareData.title,
        link: shareData.link,
        imgUrl: shareData.imgUrl,
        success: function(){
          // 分享成功，触发dplus统计
          dplusEvent('wxCircle');

          // 分享成功，触发客戊分享结果接口
      wx.onMenuShareQQ({
        title: shareData.title,
        desc: shareData.desc,
        link: shareData.link,
        imgUrl: shareData.imgUrl,
        success: function(){
          // 分享成功，触发dplus统计
          dplusEvent('qq');

          // 分享成功，触发客户及分享结果接口
      wx.onMenuShareWeibo({
              desc: shareData.desc,
    imgUrl,
        success: function(){
          // 分享成功，触发dplus统计
          dplusEvent('qqweibo');

          // 分享成功，触发客户端的sdk统计
          sdkEvent('qqweibo');
        }
      });

      // 2.5 监听“分享到qq空间”按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareQZone({
        title: shareData.title,
        desc: shareData.desc,
        link: shareData.link,
        imgUrl: shareData.imgUrl,
        trigger: function(res) {
        },
        complete: function(res) {
        },
        success: function(res) {
          // 分享成功，触发dplus统计
          dplusEvent('QZone');

          // 分享成功，触发客户端的sdk统计
          sdkEvent('QZone');
        },
        cancel: function(res) {
        },
        fail: function(res) {
        }
      });
    });

    wx.error(function(res) {
      console.log(res,error);
    });
  }
})();

