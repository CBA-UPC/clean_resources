try { 
	webengage.onReady(function () {
    webengage.notification.options({ notificationId: '~5586413a', 'defaultRender': false });
     webengage.notification.options({ notificationId: '~10cb58a26', 'defaultRender': false });
    webengage.notification.options({ notificationId: '20hm4ek', 'defaultRender': false });
   webengage.notification.options({ notificationId: '173048cc5', 'defaultRender': false });
   webengage.notification.options({ notificationId: '~1971503ac', 'defaultRender': false });
       console.log("notification on open67864540.");
    var xhr_1 = new XMLHttpRequest();
    var xhr_2 = new XMLHttpRequest();
    var xhr_3 = new XMLHttpRequest();
    var xhr_4 = new XMLHttpRequest();
    var xhr_5 = new XMLHttpRequest();
    var personalfinanceCatalogUrl = xhr_1.open("GET", "https://proxy.service.webengage.biz/api/bt/?licenseCode=in~~99199192&catalogSlug=catalog_38", true);
    xhr_1.setRequestHeader('Content-Type', 'application/json');
    xhr_1.setRequestHeader('Access-Control-Allow-Origin', '*');

    var industryCatalogUrl = xhr_2.open("GET", "https://proxy.service.webengage.biz/api/bt/?licenseCode=in~~99199192&catalogSlug=catalog_37", true);
    xhr_2.setRequestHeader('Content-Type', 'application/json');
    xhr_2.setRequestHeader('Access-Control-Allow-Origin', '*');

    var marketsCatalogUrl = xhr_3.open("GET", "https://proxy.service.webengage.biz/api/bt/?licenseCode=in~~99199192&catalogSlug=catalog_36", true);
    xhr_3.setRequestHeader('Content-Type', 'application/json');
    xhr_3.setRequestHeader('Access-Control-Allow-Origin', '*');

    var techTodayCatalogUrl = xhr_4.open("GET", "https://proxy.service.webengage.biz/api/bt/?licenseCode=in~~99199192&catalogSlug=catalog_35", true);
    xhr_4.setRequestHeader('Content-Type', 'application/json');
    xhr_4.setRequestHeader('Access-Control-Allow-Origin', '*');

    var latestCatalogUrl = xhr_5.open("GET", "https://proxy.service.webengage.biz/api/bt/?licenseCode=in~~99199192&catalogSlug=catalog_34", true);
    xhr_5.setRequestHeader('Content-Type', 'application/json');
    xhr_5.setRequestHeader('Access-Control-Allow-Origin', '*');

    if (window.location.href.startsWith("https://www.businesstoday.in/personal-finance/")) {
        xhr_1.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var template = JSON.parse(this.responseText);
                console.log("templatejson-->", array);
                var array = template.response.data.contents;
                console.log("templatejsonarray-->", array);
                array.sort(function (a, b) {
                    var c = new Date(a.pubDate);
                    var d = new Date(b.pubDate);
                    return d - c;
                });
               // console.log(array);
                var title_1 = array[0].title;
                //console.log("title_1", title_1);
                var img_1 = array[0].media_url;
                //console.log("img_1", img_1);
                var article_link_1 = array[0].link;
                //console.log("article_link_1", article_link_1);
                var title_2 = array[2].title;
               // console.log("title_2", title_2);
                var img_2 = array[2].media_url;
               // console.log("img_2", img_2);
                var article_link_2 = array[2].link;
               // console.log("article_link_2", article_link_2);
                var title_3 = array[1].title;
               // console.log("title_3", title_3);
                var img_3 = array[1].media_url;
               // console.log("img_3", img_3);
                var article_link_3 = array[1].link;
               // console.log("article_link_3", article_link_3);
                var title_4 = array[3].title;
               // console.log("title_4", title_4);
                var img_4 = array[3].media_url;
               // console.log("img_4", img_4);
                var article_link_4 = array[3].link;
               // console.log("article_link_4", article_link_4);
                var title_5 = array[4].title;
               // console.log("title_5", title_5);
                var img_5 = array[4].media_url;
               // console.log("img_5", img_5);
                var article_link_5 = array[4].link;
               // console.log("article_link_5", article_link_5);
                webengage.screen('Article Data personal-finance', {
                    "personal-finance_title_1": title_1,
                    "personal-finance_img_1": img_1,
                    "personal-finance_article_link_1": article_link_1,
                    "personal-finance_title_2": title_2,
                    "personal-finance_img_2": img_2,
                    "personal-finance_article_link_2": article_link_2,
                    "personal-finance_title_3": title_3,
                    "personal-finance_img_3": img_3,
                    "personal-finance_article_link_3": article_link_3,
                    "personal-finance_title_4": title_4,
                    "personal-finance_img_4": img_4,
                    "personal-finance_article_link_4": article_link_4,
                    "personal-finance_title_5": title_5,
                    "personal-finance_img_5": img_5,
                    "personal-finance_article_link_5": article_link_5
                });
                /*console.log('Article Data personal-finance', {
                    "personal-finance_title_1": title_1,
                    "personal-finance_img_1": img_1,
                    "personal-finance_article_link_1": article_link_1,
                    "personal-finance_title_2": title_2,
                    "personal-finance_img_2": img_2,
                    "personal-finance_article_link_2": article_link_2,
                    "personal-finance_title_3": title_3,
                    "personal-finance_img_3": img_3,
                    "personal-finance_article_link_3": article_link_3,
                    "personal-finance_title_4": title_4,
                    "personal-finance_img_4": img_4,
                    "personal-finance_article_link_4": article_link_4,
                    "personal-finance_title_5": title_5,
                    "personal-finance_img_5": img_5,
                    "personal-finance_article_link_5": article_link_5
                });*/
             //  webengage.notification.render('20hm4ek');
              webengage.notification.options({
              'defaultRender': true,
              'notificationId' : '~5586413a'
              
             });
             // console.log(notificationId1);

            }
        };
        xhr_1.send();
    }
    else if (window.location.href.startsWith("https://www.businesstoday.in/industry/")) {
        xhr_2.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var template = JSON.parse(this.responseText);
                //console.log("templatejson-->", array);
                var array = template.response.data.contents;
               // console.log("templatejsonarray-->", array);
                array.sort(function (a, b) {
                    var c = new Date(a.pubDate);
                    var d = new Date(b.pubDate);
                    return d - c;
                });
                //console.log(array);
                //console.log(_.sortBy(array, 'pubDate'));
                var title_1 = array[0].title;
               // console.log("title_1", title_1);
                var img_1 = array[0].media_url;
               // console.log("img_1", img_1);
                var article_link_1 = array[0].link;
               // console.log("article_link_1", article_link_1);
                var title_2 = array[2].title;
               // console.log("title_2", title_2);
                var img_2 = array[2].media_url;
               // console.log("img_2", img_2);
                var article_link_2 = array[2].link;
               // console.log("article_link_2", article_link_2);
                var title_3 = array[1].title;
               // console.log("title_3", title_3);
                var img_3 = array[1].media_url;
               // console.log("img_3", img_3);
                var article_link_3 = array[1].link;
               // console.log("article_link_3", article_link_3);
                var title_4 = array[3].title;
               // console.log("title_4", title_4);
                var img_4 = array[3].media_url;
               // console.log("img_4", img_4);
                var article_link_4 = array[3].link;
               // console.log("article_link_4", article_link_4);
                var title_5 = array[4].title;
               // console.log("title_5", title_5);
                var img_5 = array[4].media_url;
               // console.log("img_5", img_5);
                var article_link_5 = array[4].link;
               // console.log("article_link_5", article_link_5);
                webengage.screen('Article Data Industry', {
                    "industry_title_1": title_1,
                    "industry_img_1": img_1,
                    "industry_article_link_1": article_link_1,
                    "industry_title_2": title_2,
                    "industry_img_2": img_2,
                    "industry_article_link_2": article_link_2,
                    "industry_title_3": title_3,
                    "industry_img_3": img_3,
                    "industry_article_link_3": article_link_3,
                    "industry_title_4": title_4,
                    "industry_img_4": img_4,
                    "industry_article_link_4": article_link_4,
                    "industry_title_5": title_5,
                    "industry_img_5": img_5,
                    "industry_article_link_5": article_link_5
                });
                /*console.log('Article Data Industry', {
                    "industry_title_1": title_1,
                    "industry_img_1": img_1,
                    "industry_article_link_1": article_link_1,
                    "industry_title_2": title_2,
                    "industry_img_2": img_2,
                    "industry_article_link_2": article_link_2,
                    "industry_title_3": title_3,
                    "industry_img_3": img_3,
                    "industry_article_link_3": article_link_3,
                    "industry_title_4": title_4,
                    "industry_img_4": img_4,
                    "industry_article_link_4": article_link_4,
                    "industry_title_5": title_5,
                    "industry_img_5": img_5,
                    "industry_article_link_5": article_link_5
                });*/
             //   webengage.notification.render();
              webengage.notification.options({
              'defaultRender': true,
              'notificationId' : '173048cc5'
              
             });
            }
        };
        xhr_2.send();
    }
    else if (window.location.href.startsWith("https://www.businesstoday.in/markets/")) {
        xhr_3.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var template = JSON.parse(this.responseText);
               // console.log("templatejson-->", array);
                var array = template.response.data.contents;
               // console.log("templatejsonarray-->", array);
                array.sort(function (a, b) {
                    var c = new Date(a.pubDate);
                    var d = new Date(b.pubDate);
                    return d - c;
                });
               // console.log(array);
                //console.log(_.sortBy(array, 'pubDate'));
                var title_1 = array[0].title;
               // console.log("title_1", title_1);
                var img_1 = array[0].media_url;
               // console.log("img_1", img_1);
                var article_link_1 = array[0].link;
               // console.log("article_link_1", article_link_1);
                var title_2 = array[2].title;
               // console.log("title_2", title_2);
                var img_2 = array[2].media_url;
               // console.log("img_2", img_2);
                var article_link_2 = array[2].link;
               // console.log("article_link_2", article_link_2);
                var title_3 = array[1].title;
               // console.log("title_3", title_3);
                var img_3 = array[1].media_url;
               // console.log("img_3", img_3);
                var article_link_3 = array[1].link;
               // console.log("article_link_3", article_link_3);
                var title_4 = array[3].title;
               // console.log("title_4", title_4);
                var img_4 = array[3].media_url;
               // console.log("img_4", img_4);
                var article_link_4 = array[3].link;
               // console.log("article_link_4", article_link_4);
                var title_5 = array[4].title;
               // console.log("title_5", title_5);
                var img_5 = array[4].media_url;
               // console.log("img_5", img_5);
                var article_link_5 = array[4].link;
               // console.log("article_link_5", article_link_5);
                webengage.screen('Article Data Markets', {
                    "markets_title_1": title_1,
                    "markets_img_1": img_1,
                    "markets_article_link_1": article_link_1,
                    "markets_title_2": title_2,
                    "markets_img_2": img_2,
                    "markets_article_link_2": article_link_2,
                    "markets_title_3": title_3,
                    "markets_img_3": img_3,
                    "markets_article_link_3": article_link_3,
                    "markets_title_4": title_4,
                    "markets_img_4": img_4,
                    "markets_article_link_4": article_link_4,
                    "markets_title_5": title_5,
                    "markets_img_5": img_5,
                    "markets_article_link_5": article_link_5
                });
                /*console.log('Article Data Markets', {
                    "markets_title_1": title_1,
                    "markets_img_1": img_1,
                    "markets_article_link_1": article_link_1,
                    "markets_title_2": title_2,
                    "markets_img_2": img_2,
                    "markets_article_link_2": article_link_2,
                    "markets_title_3": title_3,
                    "markets_img_3": img_3,
                    "markets_article_link_3": article_link_3,
                    "markets_title_4": title_4,
                    "markets_img_4": img_4,
                    "markets_article_link_4": article_link_4,
                    "markets_title_5": title_5,
                    "markets_img_5": img_5,
                    "markets_article_link_5": article_link_5
                });*/
             //   webengage.notification.render('~10cb58a26');
               webengage.notification.options({
              'defaultRender': true,
              'notificationId' : '~10cb58a26'
              
             });
             // console.log(notificationId3);
            }
        };
        xhr_3.send();
    }
    else if (window.location.href.startsWith("https://www.businesstoday.in/tech-today/") || window.location.href.startsWith("https://www.businesstoday.in/technology/")) {
        xhr_4.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var template = JSON.parse(this.responseText);
              //  console.log("templatejson-->", array);
                var array = template.response.data.contents;
              // console.log("templatejsonarray-->", array);
                array.sort(function (a, b) {
                    var c = new Date(a.pubDate);
                    var d = new Date(b.pubDate);
                    return d - c;
                });
               // console.log(array);
                //console.log(_.sortBy(array, 'pubDate'));
                var title_1 = array[0].title;
                //console.log("title_1", title_1);
                var img_1 = array[0].media_url;
                //console.log("img_1", img_1);
                var article_link_1 = array[0].link;
                //console.log("article_link_1", article_link_1);
                var title_2 = array[2].title;
                //console.log("title_2", title_2);
                var img_2 = array[2].media_url;
                //console.log("img_2", img_2);
                var article_link_2 = array[2].link;
                //console.log("article_link_2", article_link_2);
                var title_3 = array[1].title;
                //console.log("title_3", title_3);
                var img_3 = array[1].media_url;
                //console.log("img_3", img_3);
                var article_link_3 = array[1].link;
                //console.log("article_link_3", article_link_3);
                var title_4 = array[3].title;
                //console.log("title_4", title_4);
                var img_4 = array[3].media_url;
                //console.log("img_4", img_4);
                var article_link_4 = array[3].link;
                //console.log("article_link_4", article_link_4);
                var title_5 = array[4].title;
                //console.log("title_5", title_5);
                var img_5 = array[4].media_url;
                //console.log("img_5", img_5);
                var article_link_5 = array[4].link;
                //console.log("article_link_5", article_link_5);*/
                webengage.screen('Article Data TechToday', {
                    "techToday_title_1": title_1,
                    "techToday_img_1": img_1,
                    "techToday_article_link_1": article_link_1,
                    "techToday_title_2": title_2,
                    "techToday_img_2": img_2,
                    "techToday_article_link_2": article_link_2,
                    "techToday_title_3": title_3,
                    "techToday_img_3": img_3,
                    "techToday_article_link_3": article_link_3,
                    "techToday_title_4": title_4,
                    "techToday_img_4": img_4,
                    "techToday_article_link_4": article_link_4,
                    "techToday_title_5": title_5,
                    "techToday_img_5": img_5,
                    "techToday_article_link_5": article_link_5
                });
                /*console.log('Article Data TechToday', {
                    "techToday_title_1": title_1,
                    "techToday_img_1": img_1,
                    "techToday_article_link_1": article_link_1,
                    "techToday_title_2": title_2,
                    "techToday_img_2": img_2,
                    "techToday_article_link_2": article_link_2,
                    "techToday_title_3": title_3,
                    "techToday_img_3": img_3,
                    "techToday_article_link_3": article_link_3,
                    "techToday_title_4": title_4,
                    "techToday_img_4": img_4,
                    "techToday_article_link_4": article_link_4,
                    "techToday_title_5": title_5,
                    "techToday_img_5": img_5,
                    "techToday_article_link_5": article_link_5
                });*/
              //  webengage.notification.render();
               webengage.notification.options({
              'defaultRender': true,
              'notificationId' : '~1971503ac'
              
             });
            }
        };
        xhr_4.send();
    }
    else if (window.location.href.startsWith("https://www.businesstoday.in/latest/")) {
        xhr_5.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var template = JSON.parse(this.responseText);
               // console.log("templatejson-->", array);
                var array = template.response.data.contents;
              //  console.log("templatejsonarray-->", array);
                array.sort(function (a, b) {
                    var c = new Date(a.pubDate);
                    var d = new Date(b.pubDate);
                    return d - c;
                });
              //  console.log(array);
                //console.log(_.sortBy(array, 'pubDate'));
                var title_1 = array[0].title;
               // console.log("title_1", title_1);
                var img_1 = array[0].media_url;
              //  console.log("img_1", img_1);
                var article_link_1 = array[0].link;
              //  console.log("article_link_1", article_link_1);
                var title_2 = array[2].title;
               // console.log("title_2", title_2);
                var img_2 = array[2].media_url;
              //  console.log("img_2", img_2);
                var article_link_2 = array[2].link;
               // console.log("article_link_2", article_link_2);
                var title_3 = array[1].title;
               // console.log("title_3", title_3);
                var img_3 = array[1].media_url;
               // console.log("img_3", img_3);
                var article_link_3 = array[1].link;
               // console.log("article_link_3", article_link_3);
                var title_4 = array[3].title;
               // console.log("title_4", title_4);
                var img_4 = array[3].media_url;
               // console.log("img_4", img_4);
                var article_link_4 = array[3].link;
               // console.log("article_link_4", article_link_4);
                var title_5 = array[4].title;
               // console.log("title_5", title_5);
                var img_5 = array[4].media_url;
               // console.log("img_5", img_5);
                var article_link_5 = array[4].link;
               // console.log("article_link_5", article_link_5);
                webengage.screen('Article Data Latest', {
                    "latest_title_1": title_1,
                    "latest_img_1": img_1,
                    "latest_article_link_1": article_link_1,
                    "latest_title_2": title_2,
                    "latest_img_2": img_2,
                    "latest_article_link_2": article_link_2,
                    "latest_title_3": title_3,
                    "latest_img_3": img_3,
                    "latest_article_link_3": article_link_3,
                    "latest_title_4": title_4,
                    "latest_img_4": img_4,
                    "latest_article_link_4": article_link_4,
                    "latest_title_5": title_5,
                    "latest_img_5": img_5,
                    "latest_article_link_5": article_link_5
                });
                /*console.log('Article Data Latest', {
                    "latest_title_1": title_1,
                    "latest_img_1": img_1,
                    "latest_article_link_1": article_link_1,
                    "latest_title_2": title_2,
                    "latest_img_2": img_2,
                    "latest_article_link_2": article_link_2,
                    "latest_title_3": title_3,
                    "latest_img_3": img_3,
                    "latest_article_link_3": article_link_3,
                    "latest_title_4": title_4,
                    "latest_img_4": img_4,
                    "latest_article_link_4": article_link_4,
                    "latest_title_5": title_5,
                    "latest_img_5": img_5,
                    "latest_article_link_5": article_link_5
                });*/
               // webengage.notification.render('31760177');
              webengage.notification.options({
              'defaultRender': true,
              'notificationId' : '31760177'
              
             });
             //  console.log(notificationId5);
            }
        };
        xhr_5.send();
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~5bjla54');
	 }
 }
