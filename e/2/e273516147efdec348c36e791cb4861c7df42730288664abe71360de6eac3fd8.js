!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("video.js")):"function"==typeof define&&define.amd?define(["video.js"],i):e.parsely=i(e.videojs)}(this,function(n){"use strict";n=n&&n.hasOwnProperty("default")?n["default"]:n;var o={apikey:null,apikeyMappings:null,autodetectApikey:!1,iframeOnly:!0,trackerSrc:undefined},e=n.registerPlugin||n.plugin,t=function t(e){for(var i in e){var n=e[i];e[i]="true"===n||"false"!==n&&n}return e},c=function c(e,i){var n=void 0,o={},t=function t(e){return e.replace(/[\.-]/g,"")},r=function r(e){return i.autodetectApikey?e.replace("www.",""):undefined};if(e){var d=document.createElement("a");d.href=document.referrer,n=d.hostname}else n=window.location.hostname;if(Array.isArray(i.apikeyMappings)){var a=t(n);o=i.apikeyMappings.find(function(e){return a.includes(t(e.domain))})||{}}return o.apikey||i.apikey||r(n)},a=function a(e,i){window.PARSELY=window.PARSELY||{};var n,o,t,r,d=window.top!==window;!0===i.iframeOnly&&!1==d||(Array.isArray(i.apikeyMappings)&&i.apikeyMappings.forEach(function(e){e.hasOwnProperty("tld")&&(e.domain=e.tld)}),(n=c(d,i))!==undefined&&(window.PARSELY.autotrack=!1,window.PARSELY.config={heartbeat_should_honor_autotrack:!0},window.PARSELY.onload=function(){var e=window.PARSELY.video._strategies.find(function(e){return"brightcove"===e.platform});window.PARSELY.video._strategies=[],window.PARSELY.video._subscribedElements=[],window.PARSELY.video.detectVideos?(window.PARSELY.video.addStrategy(e),window.PARSELY.video.detectVideos(),window.setInterval(window.PARSELY.video.detectVideos,2e3)):(window.PARSELY.video.autotrack=!0,window.PARSELY.video.addStrategy(e))},window.PARSELY.video={autotrack:!1,onPlay:function(e,i,n){var o=d?document.referrer:window.location.href;window.PARSELY.video.trackPlay(i,n,o)}},o=document,t=o.body,(r=o.createElement("script")).src=i.trackerSrc||"//cdn.parsely.com/keys/"+n+"/p.js",r.id="parsely-cfg",t.appendChild(r)))},r=function r(e){var i=this;this.addClass("vjs-parsely"),this.ready(function(){a(i,t(n.mergeOptions(o,e)))})};return e("parsely",r),r.VERSION="1.2.3",r});9tYXRjaC9pbWFnZS5qcGVn

00:25.000 --> 00:30.000
https://app-video.stuff.co.nz/image/v1/jit/3921507366001/1b257485-7236-4428-9976-c61ef2dbc3ab/main/480x270/25s/match/image.jpeg?fastly_token=NjViYjczNjlfYTI5Y2U2ODMxZWVkNzIxMzA0NTNjNWY4ZDA2NDJjNWI5NzE2YzQ5M2JlMTA2N2M1MDg3ZTljMzYxNjFmZWY2MV8vL2FwcC12aWRlby5zdHVmZi5jby5uei9pbWFnZS92MS9qaXQvMzkyMTUwNzM2NjAwMS8xYjI1NzQ4NS03MjM2LTQ0MjgtOTk3Ni1jNjFlZjJkYmMzYWIvbWFpbi80ODB4MjcwLzI1cy9tYXRjaC9pbWFnZS5qcGVn

00:30.000 --> 00:35.000
https://app-video.stuff.co.nz/image/v1/jit/3921507366001/1b257485-7236-4428-9976-c61ef2dbc3ab/main/480x270/30s/match/image.jpeg?fastly_token=NjViYjczNjlfZjAwYThkZDZlZDlmYTNhMzI1ZTM3ZjhiNGY4MDk3NWVkYmRjZGM4YWJiYjgyYTNjZjMzZTE2YzIxOGEyMjQ1N18vL2FwcC12aWRlby5zdHVmZi5jby5uei9pbWFnZS92MS9qaXQvMzkyMTUwNzM2NjAwMS8xYjI1NzQ4NS03MjM2LTQ0MjgtOTk3Ni1jNjFlZjJkYmMzYWIvbWFpbi80ODB4MjcwLzMwcy9tYXRjaC9pbWFnZS5qcGVn

00:35.000 --> 00:40.000
https://app-video.stuff.co.nz/image/v1/jit/3921507366001/1b257485-7236-4428-9976-c61ef2dbc3ab/main/480x270/35s/match/image.jpeg?fastly_token=NjViYjczNjlfYmQwZmJhOGY2NDc0MTQyNWNlMzAxMjNkOGUzMGNiYWExN2U3N2UwYzZjZWRhZTI4NjExOWY5ODYwNDEyNWExYl8vL2FwcC12aWRlby5zdHVmZi5jby5uei9pbWFnZS92MS9qaXQvMzkyMTUwNzM2NjAwMS8xYjI1NzQ4NS03MjM2LTQ0MjgtOTk3Ni1jNjFlZjJkYmMzYWIvbWFpbi80ODB4MjcwLzM1cy9tYXRjaC9pbWFnZS5qcGVn

00:40.000 --> 00:45.000
https://app-video.stuff.co.nz/image/v1/jit/3921507366001/1b257485-7236-4428-9976-c61ef2dbc3ab/main/480x270/40s/match/image.jpeg?fastly_token=NjViYjczNjlfNDVlZTJmYmE4MGQ5M2ZmNGM1NDY1YjQ3ZjJiYzRmMDZlNGE0OGI4MGYyZWRiNGRiODNmZDk1NWRmOGUyOTJjY18vL2FwcC12aWRlby5zdHVmZi5jby5uei9pbWFnZS92MS9qaXQvMzkyMTUwNzM2NjAwMS8xYjI1NzQ4NS03MjM2LTQ0MjgtOTk3Ni1jNjFlZjJkYmMzYWIvbWFpbi80ODB4MjcwLzQwcy9tYXRjaC9pbWFnZS5qcGVn

00:45.000 --> 00:50.000
https://app-video.stuff.co.nz/image/v1/jit/3921507366001/1b257485-7236-4428-9976-c61ef2dbc3ab/main/480x270/45s/match/image.jpeg?fastly_token=NjViYjczNjlfYzYwNWQwYmQ2NjdmZDc3NWE5ODBmMjkyODY2ODQzMWMwNGRhNDhhMDZjMDFkMzM5ZTc1ZjA4N2RhYzc4ZjExNF8vL2FwcC12aWRlby5zdHVmZi5jby5uei9pbWFnZS92MS9qaXQvMzkyMTUwNzM2NjAwMS8xYjI1NzQ4NS03MjM2LTQ0MjgtOTk3Ni1jNjFlZjJkYmMzYWIvbWFpbi80ODB4MjcwLzQ1cy9tYXRjaC9pbWFnZS5qcGVn

00:50.000 --> 00:55.000
https://app-video.stuff.co.nz/image/v1/jit/3921507366001/1b257485-7236-4428-9976-c61ef2dbc3ab/main/480x270/50s/match/image.jpeg?fastly_token=NjViYjczNjlfOGIwN2JkNmMzOGNmOTc3YTdmMGYyZjlmNjMxYjliY2Y3OGMyZDUzNGZkNjM2ZDM5OTgxY2YzMmEzMjI4YzU5N18vL2FwcC12aWRlby5zdHVmZi5jby5uei9pbWFnZS92MS9qaXQvMzkyMTUwNzM2NjAwMS8xYjI1NzQ4NS03MjM2LTQ0MjgtOTk3Ni1jNjFlZjJkYmMzYWIvbWFpbi80ODB4MjcwLzUwcy9tYXRjaC9pbWFnZS5qcGVn

00:55.000 --> 01:00.000
https://app-video.stuff.co.nz/image/v1/jit/3921507366001/1b257485-7236-4428-9976-c61ef2dbc3ab/main/480x270/55s/match/image.jpeg?fastly_token=NjViYjczNjlfZDU4NTAzYTZlYzEwZmFmOGNkODZjNWFiMzQxODU1ZWU2ZjA2ZTBlNzUxNzI5YTE4ZDU0YTJkYzc0ZjJkNzY1MF8vL2FwcC12aWRlby5zdHVmZi5jby5uei9pbWFnZS92MS9qaXQvMzkyMTUwNzM2NjAwMS8xYjI1NzQ4NS03MjM2LTQ0MjgtOTk3Ni1jNjFlZjJkYmMzYWIvbWFpbi80ODB4MjcwLzU1cy9tYXRjaC9pbWFnZS5qcGVn

01:00.000 --> 01:05.000
https://app-video.stuff.co.nz/image/v1/jit/3921507366001/1b257485-7236-4428-9976-c61ef2dbc3ab/main/480x270/1m0s/match/image.jpeg?fastly_token=NjViYjczNjlfZDY3YTc5ODQ4NmEwNTgzM2RlZTg2ZDE3YTU0NGQ5MzljZmIzY2FmODdlNzU3YTZhNGVhM2Q1N2NkNjFhMmU4Y18vL2FwcC12aWRlby5zdHVmZi5jby5uei9pbWFnZS92MS9qaXQvMzkyMTUwNzM2NjAwMS8xYjI1NzQ4NS03MjM2LTQ0MjgtOTk3Ni1jNjFlZjJkYmMzYWIvbWFpbi80ODB4MjcwLzFtMHMvbWF0Y2gvaW1hZ2UuanBlZw%3D%3D

01:05.000 --> 01:08.160
https://app-video.stuff.co.nz/image/v1/jit/3921507366001/1b257485-7236-4428-9976-c61ef2dbc3ab/main/480x270/1m5s/match/image.jpeg?fastly_token=NjViYjczNjlfZTcyY2NhYmRiYTk5YWIwNzk0OTMwNWVhMzc3NWU2MGI4ZmNmMmVlM2RiZWRjNmMyMjIwNWZhYzA3NGUxZWJlMF8vL2FwcC12aWRlby5zdHVmZi5jby5uei9pbWFnZS92MS9qaXQvMzkyMTUwNzM2NjAwMS8xYjI1NzQ4NS03MjM2LTQ0MjgtOTk3Ni1jNjFlZjJkYmMzYWIvbWFpbi80ODB4MjcwLzFtNXMvbWF0Y2gvaW1hZ2UuanBlZw%3D%3D

articleid":"350165089","category0":"nz-news","description":"The woman, now in her 50s, told a police officer she gave into the abuse as she was terrified Tai Harawira would kill her mother. He denies all charges.","collection":"Temp All Site collection for recent relaunch","title":"Girl terrified Tai Harawira would kill her mother, court hears","url":"https://www.stuff.co.nz/nz-news/350165089/girl-terrified-tai-harawira-would-kill-her-mother-if-she-didnt-comply-abuse-court","dominantimage":"https://www.stuff.co.nz/media/images/9Tzi8ywRz924XE3uHaD6DZ3Ef+IdbOiYlvIROR5vlqUeRrexTocZGobKRJ9od%2Fgnk3B%2FCeKTmTAsIjj6Q0YaYRKkTjl4YXiKemWuE2Oji59DbelFIAjer%2Fhrr1GUsN20cPXRIc+FO54ExPOqTpuqEY2rVjIvTfd1evrVrC6NKGFc2bx4OlAM1ANyY+l6kqTBB4qc0vEIueQxW8QwoP3b1JwZ9Infdo99nc4HcGb3JG8=?resolution=1240x700","pn-tags":["article","nz-news","Crime","ARTICLE","NEWS","sensitive"],"publishtime":"2024-02-01T00:09:50.000Z","dominantthumbnail":"https://content-thumbnail.cxpublic.com/content/dominantthumbnail/bed10393811ee6ab7162feeca92e0d141e2c67e4.jpg?65bafdab","campaign":"1","testId":"48","id":"bed10393811ee6ab7162feeca92e0d141e2c67e4","kw-category":"nz-news","placement":"1000","click_url":"https://api.cxense.com/public/widget/click/X1KAKZlGP1yXKYRhqCCqNHXZ_d0scqlL68pmRxEthBPARDUp0VQdKcDDXPu8IHdlrVspeROmIa-S15rou2wEzuS9HuZa6VjEx8YNwe_1ggu659qwO5sUMCRCdD69XK16yg01wgbvrdKGIxjfWg-twGqbd8XgYicre2Lv3Q-FPs1I8Htois5als_TXuvpogJFH6SCHEKpjCPxQNTBgmICBaTR0cFWSkB5apZUNf12Uw38qIXg3SHTrNeXsKYWh6U5abPreQeQ-gBKYRyvD3_lMI0nm8XXIy-ggNY6RZbqX09iKvJdbgzxVhpsYUjbQj4NDokHb9ZAJk13qqG02y5LlGvzF4i4t5XpCSFu8wB1glQEdjk6Jp40iboc0_0v9_wa0m9P9GqAClwd97hUAJhYwr1GFVSo1iA_Ik3TpTUTch_Q7oZytEBpObnlfa8i36wB3N2GeXD2SF_qtJCFmClyrv590qGHBjOZI2MFGroRf7B0Gg7XZ4Az2UxU2Y5CGxv-hpurM-sWpY-ou4Ot8aeHmK1gSbsga6kadTf4iyoQDsd3qaraWxB3BdwLWJpQ_eiEzsKhOz06XBTGfPfF8IkjwiieeZ3M0_Lt2ILA94MdZtFnqh8XPy-TW88Pfsl87Rmr-Ft_kDDDsE-YDITBx-_bOZVUCblGVPQ_EYhWwFUt8Z-cePo6ZFbsLtSQ7tBq9_dPUjLxVBYOk5cJkGyq94Mmuh-Db7cF-6qrfBj5u5D6cvUiAXmKQF57wSb5q5M6U8_RYtm9XTW9J47KL3Tgp_QZTYNRPO6uEfm7BqFvGd1Lff0BHnOzMttWH8y8vA0"},{"recs-articleid":"350164491","category0":"politics","description":"A briefing to Education Minister Erica Stanford noted the current fiscal position in education was “extremely tight”.","collection":"Temp All Site collection for recent relaunch","title":"Live: Education ministry's warning over cost-cutting push","url":"https://www.stuff.co.nz/politics/350164491/live-government-releases-tranche-early-briefings-new-ministers","dominantimage":"https://www.stuff.co.nz/media/images/9Tzi8ywRz924XE3uHaD6DZ3Ef+IdbOiYlvIROR5vlqUeRrexTocZGobKRJ9od%2Fgnk3B%2FCeKTmTAsIjj6Q0YaYY6Rbl3N1V6AxaFo8hwnjoZznBsOSOhZBWKIho4s711PGa3mneL7AoB6hLEU2bTCTswfJJ0jgIS1SbPqLIPqENDsVSEP3C1%2Fe+J9X8iqGMGFMhxZq+9AFn%2FxZ3%2F8VCvJHeLlf%2FR+TeUDp8JD8u9fgNyI7CjpvvCS8wyp%2FApn1BoPwKsf7RlsxpcLQKvf3jeb96Sajolnbwhb6hinQQsyrgbyOT%2FeXB75iHolW9H8WpHqdJ5a2F5FIw+iUOhfo1ho6Uxr54jxhfSb69sj7oFax%2Fpf5eYJIZOZMBhOaoVVvzyPoM%2Fy1no4bai3kvDeyZ6WOA==?resolution=1240x700","pn-tags":["article","politics","Politics","Living room","NEWS","normal","Christopher Luxon"],"publishtime":"2024-02-01T00:56:36.000Z","dominantthumbnail":"https://content-thumbnail.cxpublic.com/content/dominantthumbnail/cb16e25106b4a6f63ed5dc613ba1283b7521c2c9.jpg?65bb0e6c","campaign":"1","testId":"48","id":"cb16e25106b4a6f63ed5dc613ba1283b7521c2c9","kw-category":"politics","placement":"1000","click_url":"https://api.cxense.com/public/widget/click/KwmnIQKD9uc_RnjkcGVsB3W_0Py7VyhBlAdARnIkoiQxKhB5OXDM2ZceBbkbhtl6554euxoWt0C3RBtUyeZ0rfWwfM_UwqxAEFpo_Rv2IPIyvYTAatxWmd3vhEL_cVTWgGAbiH1LlMtpL3ZK1nRpABsa8LSUkzZqCtOF_IFj7s-8NFdREArZTX9MBON6F-hojN3r-ITGeN7V6yZb0c_oBZNvL4_FWjAA8JqI2HZICKuGxKtSBrSVX8e_nEH-R-BTuZ0Uw9Xfz3IhJk8METFa9Ufth_NtpqGsvZKqhJAgWWIXP6Z49ZLipfxy3zQ9f4_C53Cql2jNu7hvPABsK-1H9qnBlIL7iAH7XtC8yODoqly9WWb-Ho4ASh_bx-RyRGB7FTfx33kMKdQg7_LFidWVldvQ-wgOEWy0H1O3GSiyOAyZZ85PnekPUU7PsiLT4rSMqOWw2kkQUvS3H2fuh_fCFv2D4JLioRhC5l-WF8U_23AYgZgUUp2rxXUYfphVdrtuBw5U_EqzT6TiWp8XQKLgzIF1ytnduGBtAWS9gP9AdpFGRerfuO7wJU4MEmd1Zm4Gs6xsvWoosyfTw5GTYu8cfOHrBsL38dZRZBGXPg4AxiYPsd76CCEoYHPqiCNwBrajFkpcDPZXDnQWek7q_BrVN_TKURFagYHrmeaSnTt53bG5cCfebXrsxpvW0Fd_lUMAsd-DdXxp4qZ2NxmYWGWtopUODH9-agPoCizxBy4inCsBwJ3NRQ6Jtt9uSQvgcdMr-85Ya9UuLBLXsU7lPBVRZMs7jijdDQYpBg0"},{"recs-articleid":"350165262","category0":"nz-news","description":"Gurjit Singh was stabbed multiple times by a “sharp instrument”, police have confirmed.","collection":"Temp All Site collection for recent relaunch","title":"Gurjit Singh’s death a homicide - police","url":"https://www.stuff.co.nz/nz-news/350165262/gurjit-singhs-death-homicide-police","dominantimage":"https://www.stuff.co.nz/media/images/9Tzi8ywRz924XE3uHaD6DZ3Ef+IdbOiYlvIROR5vlqUeRrexTocZGobKRJ9od%2Fgnk3B%2FCeKTmTAsIjj6Q0YaYfjzwXPZwVX7FGh6xST6XTmJpCwLMk%2FALdyD+elaafSyHYXwu4HfU2XYE+i+aHHX3q21vrg1dCXSzFB081DUSWVzaP8EdI2r0Ou%2FQzEMvAgCu50bWvCpRLcWzTMkbmMXP7mtg5lN45BmOcj8dbIYi3+VggbeY6Edl2xf2ISbc3EWHlcwEmyGAFbaZfChMQqpCa8WmV1Ah5D68RRdmPvjsn1ZFopvh7rxH4%2FaW%2FKvXsVvcqNil+bTRVGx7fkFegzICdC27re7UbsXz3It76%2FBE+65eEr+hxRT52bSixawJZFU?resolution=1240x700","pn-tags":["article","nz-news","Crime","NEWS","normal","Dunedin","Otago Region"],"publishtime":"2024-02-01T00:31:41.000Z","dominantthumbnail":"https://content-thumbnail.cxpublic.com/content/dominantthumbnail/d4fe2ae66e609b3e869f9bc8ced5c6fad7f9538e.jpg?65bb0300","campaign":"1","testId":"48","id":"d4fe2ae66e609b3e869f9bc8ced5c6fad7f9538e","kw-category":"nz-news","placement":"1000","click_url":"https://api.cxense.com/public/widget/click/P3pn2JryyH5Msx693BxXXxUCTW_VC7M-DJFjT3ZqZcChblxs6xCwtygAY2GAP_pa6ljDHDa16B4ruSiVkJJFcJsuEfEIDeN2BFYUqvxDpBa74jE1ntPLP9nESQ7VemkeDjH6JdA1rqXqtMkSdWalo3vDPvZEcb9nWuHyJmq0S37FRmzCkpo53p7Hgi4u8EYl8PsgXfDsvdhbnV98qWoKRuJ9cyFevREkdHN0q-Ah5_8_as2pjIquirXLmxYp1Id9JNF99qKqfPGPkLwuAnPQZVC8lY2nslgvWdTB6zIXY77lRgZWjXAJTEQk2hksML5VsNu1Nhko444j-CItuGQ-vMVNe-wN2BrrRW2wg5GdXVMCHR3asavxf7s9rqNhQzcWr7efqj8NR0_cqUwFLjX90vWS7e2w4b5lHL_fS6TlyOK7MIlQ49HhZsjgO0WYuIAktEtC3OLA7v9ncNood75sqDcwvJi0s3qRlUWRxjfm3RBZgBydT3SoRxtkwP2a1vtxejzQBLHsx2o-tODwcCriyw1A1U3PNQ7u71_frMO_ptMbc7J0DGdiZRmjIvdpeq8onk7vB_JNSRD0eJMLyD0ssKpHdR1VvHUOYE5QxAFui96tKPhAf7MwAYq6HX7b9txzN9Hre4n_wMdx2XznhKb3B6uPoC_M08xx01srL_-Pg8ioUDYaTYggOCqNp7mYySlKEJL_9Y5JVelLokNk7C3AqRnyhTYYp66BO9TnM_LOKuWPi4H8VObpWXa155wO0"}],"template":"<div class=\"more-from-stuff-container\">\n<div class=\"more-from-stuff-title\">More from Stuff</div>\n<div data-cx_r3ym tmp:class=\"cx-flex-module\">\n  <!--%\n  var items = data.response.items;\n  for (var i = 0; i < items.length; i++) {\n    var item = items[i];\n    var itemImage = item.dominantthumbnail || '';\n %-->\n  <a tmp:id=\"{{cX.CCE.clickTracker(item)}}\" tmp:class=\"cx-item\" tmp:href=\"{{item.url}}\" tmp:target=\"_top\"\n    tmp:title=\"{{item.title}}\">\n    <img tmp:srcset=\"{{itemImage}} 300w, {{item.dominantimage}} 960w\" tmp:sizes=\"(max-width: 600px) 300px, 960px\"\n      tmp:src=\"{{itemImage}}\" tmp:alt=\"\">\n    <div class=\"more-from-stuff-text-container\">\n      <div class=\"title\">{{item.title}}</div>\n      <!--%\n      var publishedTime = new Date(item.publishtime);\n      var now = new Date();\n      var diffMs = now - publishedTime;\n\t  var diffMins = Math.floor(diffMs / 1000 / 60);\n      var diffHrs = Math.floor(diffMins / 60);\n      function getTimestamp (diffMins, diffHrs, publishedTime) {\n          if (diffMins === 1) {\n              return diffMins + \" min ago\";\n          } else if (diffMins < 60) {\n              return diffMins + \" mins ago\";\n          } else if (diffMins > 120) {\n              return undefined;\n          }  else {\n              return publishedTime.toLocaleString(\"en-NZ\", {\n              hour: \"numeric\",\n              minute: \"numeric\",\n              hour12: true,\n              });\n          }\n      }\n      var timestamp = getTimestamp(diffMins, diffHrs, publishedTime);\n      if(timestamp){  \n\t%-->\n      <div class=\"timestamp\">{{timestamp}}</div>\n      <!--% } %-->\n\n    </div>\n  </a>\n  <div class=\"divider\"></div>\n  <!--% } %-->\n</div>\n</div>","style":"@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');\n\n#piano-article-more-from-stuff .more-from-stuff-container{\n  margin: 1em 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  max-width:  var(--stuff-article-text-max-width);\n  padding: var(--stuff-article-content-padding);\n}\n\n.more-from-stuff-title{\n  color: var(--colors-base-colours-theme-color-primary, #6443AB);\n  font-family: Stuff Sans Condensed, sans-serif;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 100%;\n  text-transform: uppercase;\n}\n\n.cx-flex-module[data-cx_r3ym] {\n  display: flex;  \n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.cx-flex-module[data-cx_r3ym] .cx-item {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-self: stretch;\n  text-decoration: none;\n  padding-bottom: 12px;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #B2A1D5;\n}\n\n.cx-flex-module[data-cx_r3ym] .cx-item .more-from-stuff-text-container {\n  order:1;\n  width: 100%;\n  color: var(--color-text-text-color-default, #0D0D0D);\n  font-family: Fjalla One, sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 130%; \n}\n\n.cx-flex-module[data-cx_r3ym] img {\n  order: 2;\n  justify-self: flex-end;\n  width: 126px;\n  aspect-ratio: 1;\n  object-fit: cover;\n  margin: 4px 0 8px 16px;\n}\n\n.cx-flex-module[data-cx_r3ym] .timestamp {\n  order: 3;\n  margin-top: 8px;\n  font-family: Stuff Sans;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 135%;\n  color: #737373;\n}  \n\n@media screen and (min-width:576px) {\n  .cx-flex-module[data-cx_r3ym] {\n    --cx-divider-gap: 16px;\n    --cx-divider-thickness: 1px;\n    --cx-num-of-col: 2;\n    --cx-num-of-divider: calc(var(--cx-num-of-col) - 1);\n    --cx-divider-gap-space: calc((var(--cx-divider-gap) * 2 * var(--cx-num-of-divider)) - (var(--cx-divider-thickness) * var(--cx-num-of-divider)));\n  }\n\n  .cx-flex-module[data-cx_r3ym] .cx-item {\n    flex-direction: column;\n    align-items: flex-start;\n    width: calc((100% - var(--cx-divider-gap-space)) / (var(--cx-num-of-col)));\n    border-bottom: none;\n  }\n\n  .cx-flex-module[data-cx_r3ym] img {\n    order: 1;\n    width: 100%;\n    aspect-ratio: 16 / 9;\n    margin: 0;\n  }\n\n  .cx-flex-module[data-cx_r3ym] .cx-item .more-from-stuff-text-container {\n    order:2;\n    margin-top: 12px;\n  }\n\n  .cx-flex-module[data-cx_r3ym] .timestamp {\n    display: none;\n  }  \n\n  .cx-flex-module[data-cx_r3ym] .divider{\n    background: #B2A1D5;\n    width:1px;\n  }\n\n  .cx-flex-module[data-cx_r3ym] .divider:nth-child(4),\n  .cx-flex-module[data-cx_r3ym] .divider:nth-child(8) {\n    width: 100%;\n    height: 1px;\n    margin: 16px 0;\n  }\n\n  .cx-flex-module[data-cx_r3ym] .divider:nth-child(12) {\n    display: none;\n  }\n\n}\n\n\n@media screen and (min-width:992px) {\n  .cx-flex-module[data-cx_r3ym] {\n    --cx-divider-gap: 24px;\n    --cx-divider-thickness: 1px;\n    --cx-num-of-col: 3;\n  }\n\n  .cx-flex-module[data-cx_r3ym] .divider:nth-child(4),\n  .cx-flex-module[data-cx_r3ym] .divider:nth-child(8)  {\n    background: #B2A1D5;\n    width:1px;\n    height: initial;\n    margin: 0;\n  }\n\n  .cx-flex-module[data-cx_r3ym] .divider:nth-child(6) {\n    width: 100%;\n    height: 1px;\n    margin: 24px 0;\n  }\n\n}","prnd":"ls2pftqkfnwbfptr"}})