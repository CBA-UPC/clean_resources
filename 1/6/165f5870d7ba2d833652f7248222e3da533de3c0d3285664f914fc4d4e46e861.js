try { 
	webengage.onReady(function () {
    webengage.webPersonalization.options('defaultRender', false);
    var weq = webengage.require('webengage/state');
    var region = weq.getForever().uattr;
    console.log(region);
    var country = region.we_country;
    console.log(country);
    var state = region.we_region;
    console.log(state);
    var city = region.we_city;
    console.log(city);
    var xhr_1 = new XMLHttpRequest();
    var xhr_2 = new XMLHttpRequest();
    var KarnatakaCatalogUrl = xhr_1.open("GET", "https://deccan.service.webengage.biz/?licenseCode=11b5648c1&catalogSlug=catalog_4&pageNo=1&pageSize=10", true);
    xhr_1.setRequestHeader('Content-Type', 'application/json');
    xhr_1.setRequestHeader('Access-Control-Allow-Origin', '*');

    var BangloreCatalogUrl = xhr_2.open("GET", "https://deccan.service.webengage.biz/?licenseCode=11b5648c1&catalogSlug=catalog_3&pageNo=1&pageSize=10", true);
    xhr_2.setRequestHeader('Content-Type', 'application/json');
    xhr_2.setRequestHeader('Access-Control-Allow-Origin', '*');

    if (state === 'Karnataka' && city !== 'Bengaluru') {
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
                console.log(array);
                var title_1 = array[0].title;
                var img_1 = array[0].media_url;
                var article_link_1 = array[0].link;
                var title_2 = array[2].title;
                var img_2 = array[2].media_url;
                var article_link_2 = array[2].link;
                var title_3 = array[1].title;
                var img_3 = array[1].media_url;
                var article_link_3 = array[1].link;
                var title_4 = array[3].title;
                var img_4 = array[3].media_url;
                var article_link_4 = array[3].link;
                webengage.screen('Article Data Karnataka', {
                    "title_1": title_1,
                    "img_1": img_1,
                    "article_link_1": article_link_1,
                    "title_2": title_2,
                    "img_2": img_2,
                    "article_link_2": article_link_2,
                    "title_3": title_3,
                    "img_3": img_3,
                    "article_link_3": article_link_3,
                    "title_4": title_4,
                    "img_4": img_4,
                    "article_link_4": article_link_4
                });
                console.log('Article Data Karnataka', {
                    "title_1": title_1,
                    "img_1": img_1,
                    "article_link_1": article_link_1,
                    "title_2": title_2,
                    "img_2": img_2,
                    "article_link_2": article_link_2,
                    "title_3": title_3,
                    "img_3": img_3,
                    "article_link_3": article_link_3,
                    "title_4": title_4,
                    "img_4": img_4,
                    "article_link_4": article_link_4
                });
                webengage.webPersonalization.render();

            }
        };
        xhr_1.send();
    }
    else if ((state === 'Karnataka' && city === 'Bengaluru') || (country === 'India' && state !== 'Karnataka')) {
        xhr_2.onreadystatechange = function () {
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
                console.log(array);
                //console.log(_.sortBy(array, 'pubDate'));
                var title_1 = array[0].title;
                var img_1 = array[0].media_url;
                var article_link_1 = array[0].link;
                var title_2 = array[2].title;
                var img_2 = array[2].media_url;
                var article_link_2 = array[2].link;
                var title_3 = array[1].title;
                var img_3 = array[1].media_url;
                var article_link_3 = array[1].link;
                var title_4 = array[3].title;
                var img_4 = array[3].media_url;
                var article_link_4 = array[3].link;
                webengage.screen('Article Data Bangalore', {
                    "bang_title_1": title_1,
                    "bang_img_1": img_1,
                    "bang_article_link_1": article_link_1,
                    "bang_title_2": title_2,
                    "bang_img_2": img_2,
                    "bang_article_link_2": article_link_2,
                    "bang_title_3": title_3,
                    "bang_img_3": img_3,
                    "bang_article_link_3": article_link_3,
                    "bang_title_4": title_4,
                    "bang_img_4": img_4,
                    "bang_article_link_4": article_link_4
                });
                console.log('Article Data Bangalore', {
                    "bang_title_1": title_1,
                    "bang_img_1": img_1,
                    "bang_article_link_1": article_link_1,
                    "bang_title_2": title_2,
                    "bang_img_2": img_2,
                    "bang_article_link_2": article_link_2,
                    "bang_title_3": title_3,
                    "bang_img_3": img_3,
                    "article_link_3": article_link_3,
                    "bang_title_4": title_4,
                    "bang_img_4": img_4,
                    "bang_article_link_4": article_link_4
                });
                webengage.webPersonalization.render();
            }
        };
        xhr_2.send();
    }

});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~f05d4ek');
	 }
 }
