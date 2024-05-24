24*
 * at_cosme site - video
 *
 * @author      kojimay
 * @require     jQuery 1.3.2+
 * @require     /js/cosme.js
 * @version     1.0.0
 */

$.extend({YOUTUBE: "youtube"});
$.extend({YOUTUBE_REGEXP_URLS: [/^https?:\/\/(?:www\.)youtube\.com\/watch\?(?:.+?&v|v)=([^&#:\/\.\?]+)/,
                                /^https?:\/\/(?:www\.)youtube\.com\/v\/([^&#:\/\.\?]+)/,
                                /^https?:\/\/youtu\.be\/([^&#:\/\.\?]+)/,
                                /^https?:\/\/(?:m\.)youtube\.com\/watch\?(?:.+?&v|v)=([^&#:\/\.\?]+)/]});
$.extend({MAX_LEN_CONTENT: 256});
// ↓読み込み画像ファイル名共通文字列
$.extend({RELOAD_IMAGE_FILENAME_BASE: "ico_prg_cmn_video"});
// ↑読み込み画像ファイル名共通文字列
// ↓動画表示パターン
$.extend({GET_CONTENT: "get_content"});
$.extend({RIGHT_CONTENT: "right_content"});
$.extend({BOTTOM_CONTENT: "bottom_content"});
$.extend({NO_CONTENT: "no_content"});
$.extend({NO_LINK_BOTTOM_CONTENT: "no_link_bottom_content"});
$.extend({MY_BOTTOM_CONTENT: "my_bottom_content"});
$.extend({MY_NO_CONTENT: "my_no_content"});
// ↑動画表示パターン
$.extend({SIZE_L: [120, 0]}); /* [横, 縦] 0の場合はセットしない */
$.extend({SIZE_M: [100, 0]});
$.extend({SIZE_S: [70, 0]});
$.extend({SIZE_XS: [50, 0]});
// 再生時間HTML
$.extend({PLAYBACK_TIME_HTML: '<span class="time" />'});
// ↓エラー文言
$.extend({ERR_INVALID_URL_MSG: 'YouTubeの動画URLを入力してください。'});
$.extend({ERR_INVALID_THUMBNAIL_KEY_MSG: '動画の取得ができません。'});
var YOUTUBE = $.YOUTUBE;
var YOUTUBE_REGEXP_URLS = $.YOUTUBE_REGEXP_URLS;
var RELOAD_IMAGE_FILENAME_BASE = $.RELOAD_IMAGE_FILENAME_BASE;
var GET_CONTENT = $.GET_CONTENT;
var RIGHT_CONTENT = $.RIGHT_CONTENT;
var BOTTOM_CONTENT = $.BOTTOM_CONTENT;
var NO_CONTENT = $.NO_CONTENT;
var NO_LINK_BOTTOM_CONTENT = $.NO_LINK_BOTTOM_CONTENT;
var MY_BOTTOM_CONTENT = $.MY_BOTTOM_CONTENT;
var MY_NO_CONTENT = $.MY_NO_CONTENT;
var SIZE_L = $.SIZE_L;
var SIZE_M = $.SIZE_M;
var SIZE_S = $.SIZE_S;
var SIZE_XS = $.SIZE_XS;
var PLAYBACK_TIME_HTML = $.PLAYBACK_TIME_HTML;
var ERR_INVALID_URL_MSG = $.ERR_INVALID_URL_MSG;
var ERR_INVALID_THUMBNAIL_KEY_MSG = $.ERR_INVALID_THUMBNAIL_KEY_MSG;
// ↑エラー文言
// URLが無効の時、セットする値
var INVALID_URL_VAL = "invalid_url";
// 登録時、動画情報を取得出来なかった時、セットする値
var INVALID_THUMBNAIL_KEY_VAL = "invalid_thumbnail_key";
// YouTube Data API v3のブラウザキー
var API_BROWSER_KEY = 'AIzaSyDcxob4CPntC_j1hB5B1Wo7s6LHFJqgpRg';
// ↓パターン別引数リスト
$.extend({REQUIRE_PARAMS: {
    youtube: {
        get_content: ["site", "pattern", "size", "contentDomId", "thumbnailKeyDomId", "youtubeUrl"],
        right_content: ["site", "pattern", "size", "thumbnailBoxDomId", "contentDomId", "noImageUrl", "timeOutImageUrl", "videoPlayIcon", "thumbnailKey", "linkUrl", "content", "altContent"],
        my_bottom_content: ["site", "pattern", "size", "thumbnailBoxDomId", "contentDomId", "noImageUrl", "timeOutImageUrl", "videoPlayIcon", "thumbnailKey", "linkUrl", "content", "altContent", "timeContent"],
        bottom_content: ["site", "pattern", "size", "displayType", "thumbnailBoxDomId", "contentDomId", "noImageUrl", "timeOutImageUrl", "videoPlayIcon", "displayTime", "thumbnailKey", "linkUrl", "content", "altContent"],
        no_content: ["site", "pattern", "size", "thumbnailBoxDomId", "noImageUrl", "timeOutImageUrl", "videoPlayIcon", "displayTime", "thumbnailKey", "linkUrl", "altContent"],
        no_link_bottom_content: ["site", "pattern", "size", "thumbnailBoxDomId", "contentDomId", "noImageUrl", "timeOutImageUrl", "videoPlayIcon", "thumbnailKey", "content", "altContent"]
    }
}});
// ↑パターン別引数リスト
// ↑定数
var trim = $.trim;
var isArray = $.isArray;
var ajax = $.ajax;
var jq = $();

// Youtube動画情報取得メソッド
$.fn.extend({
    _getYoutubeInfo: function(params){
        var defaults = {
            site: "youtube", pattern: "", size: [0, 0], displayType: "",
            thumbnailBoxDomId: "", contentDomId: "", thumbnailKeyDomId: "",
            timeOutImageUrl: "", noImageUrl: "", videoPlayIcon: "", displayTime:"",
            thumbnailKey: "", youtubeUrl: "", linkUrl: "", content: "", altContent: "", titleContent: "",
            emptyUrlMsgDomId: "", invalidUrlMsgDomId: "", overLenContentMsgDomId: "",
            timeoutMs: 5000, onSuccess: null, isSubmit: false
        };
        var that = this;
        var k, trimmedUrl, key;
        var i = 0;
        var errno  = '';  // エラー用
        var errmsg = '';  // エラー用
        if (typeof(this.defaults) != 'object') that.defaults = defaults;
        // デフォルト引数セット
        for (k in that.defaults) {
            if (typeof(params[k]) === "undefined") {
                params[k] = that.defaults[k];
            } else {
                if (typeof(params[k]) === "string" && params[k].indexOf("DomId") > -1 && "#" != params[k].charAt(0)) {
                    // DomId指定引数の先頭に#がなければセット
                    params[k] = "#" + params[k];
                }
            }
        }
        // 引数にthumbnailKeyDomIdがあれば更新系処理とみなす
        if (params["thumbnailKeyDomId"]) {
            if(document.getElementById("sys_message_erea") != null){
                $("#sys_message_erea").html("");
                // エラーメッセージ出力要素準備
                if($("#sys_message_erea").html().replace(/(\r\n|\r|\n)+/, '') == '' ) {
                    $("#sys_message_erea").append('<div id="flash_messenger_message" class="errorMsg"></div>');
                }
            }
            // エラーメッセーの先頭文字列の設定
            errno = params["thumbnailKeyDomId"].replace(/^#(.*)_/, '');
             if(errno) errmsg = "動画" + errno + "：";

            // 追加登録処理の場合
            trimmedUrl = trim(params["youtubeUrl"]);
            if (trimmedUrl.length === 0) {
                if (!params["isSubmit"]) {
                     $("#flash_messenger_message").append('<p class="errorAlert">' + errmsg + ERR_INVALID_URL_MSG + '</p>');
                 } else {
                     $(params["thumbnailKeyDomId"]).val(INVALID_URL_VAL + "_" + errno);
                 }
                return false;
            }
            // サムネイルキー抽出
            var isYoutubeUrl = false;
            for (i=0; i<YOUTUBE_REGEXP_URLS.length; i++) {
                if (YOUTUBE_REGEXP_URLS[i].test(trimmedUrl)) {
                    trimmedUrl.match(YOUTUBE_REGEXP_URLS[i]);
                    params["thumbnailKey"] = RegExp.$1;
                    isYoutubeUrl = true;
                    break;
                }
            }
            if (!isYoutubeUrl) {
                if (!params["isSubmit"]) {
                     $("#flash_messenger_message").append('<p class="errorAlert">'  + errmsg + ERR_INVALID_URL_MSG + '</p>');
                 } else {
                    $(params["thumbnailKeyDomId"]).val(INVALID_URL_VAL + "_" + errno);
                }
                return false;
            }
            if (params["pattern"] == GET_CONTENT) {
                if (trimmedUrl.length && !params["thumbnailKey"]) {
                    if (!params["isSubmit"]) {
                        // URLが空だった場合は、ダブるので表示しない
                        $("#flash_messenger_message").append('<p class="errorAlert">' + errmsg + ERR_INVALID_THUMBNAIL_KEY_MSG + '</p>');
                    } else {
                        $(params["thumbnailKeyDomId"]).val(INVALID_THUMBNAIL_KEY_VAL + "_" + errno);
                    }
                }
            }
        }
        // 更新でも参照でもサムネイルキーが取れなかったら終了
        if (!params["thumbnailKey"]) {
            return false;
        }
        // エラー時に読み込み画像からNoImage画像に差し替え
        // エラー判別→タイムアウト秒後に<img>のsrcに読み込み画像のファイル名の一部が含まれている
        if (params["pattern"] != GET_CONTENT) {
            setTimeout(function() {
                // クチコミ動画挿入の削除時のエラー対策
                if ($(params["thumbnailBoxDomId"] + " img:first")[0].getAttribute("src")) {
                    if ($(params["thumbnailBoxDomId"] + " img:first").attr("src").indexOf(RELOAD_IMAGE_FILENAME_BASE) > -1) {
                        $(params["thumbnailBoxDomId"] + " img:first").attr("src", params["noImageUrl"]);
                        if (params["rawContent"] && params["rawContent"] == true) {
                            $(params["contentDomId"]).text(params["content"]);
                        } else {
                            $(params["contentDomId"]).html(params["content"]);
                        }
                    }
                }
            }, params["timeoutMs"]);
        }
        // 登録エラー時、タイムアウト秒後サムネイルキーの値にエラーをセット
        if (params["thumbnailKeyDomId"]) {
            setTimeout(function() {
                if ($(params["thumbnailKeyDomId"]).val() === '') {
                    if(($("#flash_messenger_message").html()).indexOf(errmsg + ERR_INVALID_THUMBNAIL_KEY_MSG) == -1){
                        if (!params["isSubmit"]) {
                            $("#flash_messenger_message").append('<p class="errorAlert">' + errmsg + ERR_INVALID_THUMBNAIL_KEY_MSG + '</p>');
                        } else {
                            $(params["thumbnailKeyDomId"]).val(INVALID_THUMBNAIL_KEY_VAL + "_" + errno);
                        }
                    }
                }
            }, params["timeoutMs"] * 0.8);
        }

        return ajax({
            timeout: params["timeoutMs"],
            url: "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=" + params["thumbnailKey"] + "&key=" + API_BROWSER_KEY,
            dataType: "jsonp",
            scriptCharset:'utf-8',
            cache: false,
            success: function(data) {
                var duration, displayDuration, item, arr;
                var $thumbnailElem, $linkElem;
                var i=0, imgWidth=0, imgHeight=0;
            if(params["onSuccess"]) params["onSuccess"]();
                // jsonp内のプロパティは配列形式で指定する
                // プロパティのキーの先頭が$で始まっている時があるから
                if (params["thumbnailBoxDomId"]) {
                    $thumbnailElem = $(params["thumbnailBoxDomId"] + " img:first");
                }
                // 表示画像サイズ準備
                if (isArray(params["size"])) {
                    if (typeof(parseInt(params["size"][0])) === "number")
                        imgWidth = parseInt(params["size"][0]);
                    if (typeof(parseInt(params["size"][1])) === "number")
                        imgHeight = parseInt(params["size"][1]);
                }
                if (data["error"]) {
                    // <error>があった場合
                    if (params["pattern"] == GET_CONTENT) {
                        if (!params["isSubmit"]) {
                            $("#flash_messenger_message").append('<p class="errorAlert">' + errmsg + ERR_INVALID_THUMBNAIL_KEY_MSG + '</p>');
                        } else {
                            $(params["thumbnailKeyDomId"]).val(INVALID_THUMBNAIL_KEY_VAL);
                        }
                    } else {
                        if ($thumbnailElem.length) {
                            $($thumbnailElem).attr("alt", "");
                            $($thumbnailElem).attr("title", "");
                            $($thumbnailElem).attr("src", params["noImageUrl"]);
                        }
                        if (params["contentDomId"]) {
                            $(params["contentDomId"]).text(params["content"]);
                        }
                        // 正方形、説明文なし、虫眼鏡アイコンあり
                        if (params["pattern"] == NO_CONTENT || params["pattern"] == MY_NO_CONTENT) {
                            $(params["thumbnailBoxDomId"]).closest(".js-video-item").addClass("video-nolink");
                        }
                    }
                    return;
                }
                item = data["items"][0];
                if (data["pageInfo"]["totalResults"] == 0 || !item["snippet"]["title"].length || !item["contentDetails"]["duration"].length ) {
                    // 動画タイトルがとれないもしくは、再生時間がとれない
                    if (params["pattern"] == GET_CONTENT) {
                        if (!params["isSubmit"]) {
                            $("#flash_messenger_message").append('<p class="errorAlert">' + errmsg + ERR_INVALID_THUMBNAIL_KEY_MSG + '</p>');
                        } else {
                            $(params["thumbnailKeyDomId"]).val(INVALID_THUMBNAIL_KEY_VAL);
                        }
                        // 成功/失敗の判別としてサムネイルキーをセット
                        $(params["thumbnailKeyDomId"]).val(params["thumbnailKey"]);
                    } else {
                        if ($thumbnailElem.length) {
                            $($thumbnailElem).attr("alt", "");
                            $($thumbnailElem).attr("title", "");
                            $($thumbnailElem).attr("src", params["noImageUrl"]);
                        }
                        if (params["contentDomId"]) {
                            $(params["contentDomId"]).text(params["content"]);
                        }
                        // 正方形、説明文なし、虫眼鏡アイコンあり
                        if (params["pattern"] == NO_CONTENT || params["pattern"] == MY_NO_CONTENT) {
                            $(params["thumbnailBoxDomId"]).closest(".js-video-item").addClass("video-nolink");
                        }
                    }
                    return;
                }
                // 動画更新処理用
                if (params["pattern"] == GET_CONTENT) {
                    // 成功/失敗の判別としてサムネイルキーをセット
                    $(params["thumbnailKeyDomId"]).val(params["thumbnailKey"]);
                    if (!params["isSubmit"]) {
                        // 初回＝説明文がフォームにセットされていければ
                        if ($(params["contentDomId"]).val() == "") {
                            $(params["contentDomId"]).val(item["snippet"]["title"]);
                        }
                        // 説明文文字数、256文字以内、ph2.js内のメソッドを呼んでいる
                        arr = params["contentDomId"].split('_');
                        // _数字の形式で，個別編集の場合は空文字
                        i = isNaN(arr[arr.length-1]) ? '' : '_' + arr[arr.length-1];
                        temp = "";
                        // 文字数表示部分のID要素があるか？
                        if ($('#sys_input_length' + i) != null) {
                            jq.getInputLength({data:[params["contentDomId"], '#sys_input_length'+i, 256]});
                        }
                    }
                    return;
                } else {
                    // 更新以外
                    if ($thumbnailElem && $thumbnailElem.length) {
                        // 横サイズ指定があればセット
                        if (imgWidth)
                            $($thumbnailElem).attr("width", imgWidth);
                        // 縦サイズ指定があればセット
                        if (imgHeight)
                            $($thumbnailElem).attr("height", imgHeight);
                        $($thumbnailElem).attr("alt", params["altContent"]);
                        $($thumbnailElem).attr("title", params["titleContent"]);
                        if (params['displayType'] == 'pictures') {
                            $($thumbnailElem).attr("src", "https://img.youtube.com/vi/" +  params["thumbnailKey"] + "/mqdefault.jpg");
                        } else {
                            $($thumbnailElem).attr("src", "https://img.youtube.com/vi/" +  params["thumbnailKey"] + "/default.jpg");
                        }
                        $($thumbnailElem).attr("onerror", "this.src='"+params["timeOutImageUrl"]+"'");
                        if (params["linkUrl"]) {
                            // 動画再生画面へリンクをはる
                            if (params["pattern"] == NO_CONTENT) {
                                // thumbnailBoxDomId→aタグ…自分自身
                                $(params["thumbnailBoxDomId"]).attr('href', params["linkUrl"]);
                            } else if (params["pattern"] == MY_NO_CONTENT) {
                                // thumbnailBoxDomId→aタグ…<div class="pic-wrap">→<div class="pic-border">→aタグ
                                $(params["thumbnailBoxDomId"]).parent().parent().attr('href', params["linkUrl"]);
                            } else if (params["pattern"] == BOTTOM_CONTENT) {
                                // thumbnailBoxDomId→aタグ…自分自身
                                $(params["thumbnailBoxDomId"]).attr('href', params["linkUrl"]);
                            } else if (params["pattern"] == MY_BOTTOM_CONTENT) {
                                // thumbnailBoxDomId→aタグ…<div class="pic-wrap">→<div class="pic-border">→aタグ
                                $(params["thumbnailBoxDomId"]).parent().parent().attr('href', params["linkUrl"]);
                            } else if (params["pattern"] == RIGHT_CONTENT) {
                                // thumbnailBoxDomId→aタグ…<div class="pic-wrap">→<div class="pic-border">→aタグ
                                $(params["thumbnailBoxDomId"]).parent().parent().attr('href', params["linkUrl"]);
                            }
                        }
                    }

                    if (params['displayTime'] != 'no') {
                        // 動画の再生時間をISO8601から配列へ変換
                        duration = item["contentDetails"]["duration"];
                        displayDuration = convertISO8601ToDisplayDuration(duration);
                        if (params["timeContent"]) {
                            $(params["timeContent"]).text(displayDuration);
                        } else {
                            $(params["thumbnailBoxDomId"]).append($(PLAYBACK_TIME_HTML).text(displayDuration));
                        }
                    }

                    // 説明文セット
                    if (params["contentDomId"]) {
                        if (params["rawContent"] && params["rawContent"] == true) {
                            $(params["contentDomId"]).text(params["content"]);
                        } else {
                            $(params["contentDomId"]).html(params["content"]);
                        }
                        if (params["pattern"] == RIGHT_CONTENT) {
                            $(params["contentDomId"]).wrapInner('<a href="' + params["linkUrl"] + '"></a>');
                        }
                    }
                }
            },
            error: function(xhr, status) {
                var $thumbnailElem, $linkElem;
                var imgWidth=0, imgHeight=0;
                // 引数にthumbnailKeyDomIdがあれば更新系処理とみなす
                if (params["thumbnailKeyDomId"]) {
                    if(($("#flash_messenger_message").html()).indexOf(errmsg + ERR_INVALID_THUMBNAIL_KEY_MSG) == -1){
                        if(document.getElementById("sys_message_erea") != null){
                            $("#sys_message_erea").html("");
                            // エラーメッセージ出力要素準備
                            if($("#sys_message_erea").html().replace(/(\r\n|\r|\n)+/, '') == '' ) {
                                $("#sys_message_erea").append('<div id="flash_messenger_message" class="errorMsg"></div>');
                            }
                        }
                        if (!params["isSubmit"]) {
                            $("#flash_messenger_message").append('<p class="errorAlert">' + errmsg + ERR_INVALID_THUMBNAIL_KEY_MSG + '</p>');
                        } else {
                            $(params["thumbnailKeyDomId"]).val(INVALID_THUMBNAIL_KEY_VAL + "_" + errno);
                        }
                    }
                }
                if (isArray(params["size"])) {
                    if (typeof(parseInt(params["size"][0])) === "number")
                        imgWidth = parseInt(params["size"][0]);
                    if (typeof(parseInt(params["size"][1])) === "number")
                        imgHeight = parseInt(params["size"][1]);
                }
                if (params["thumbnailBoxDomId"]) {
                    $thumbnailElem = $('img',params["thumbnailBoxDomId"]);
                } else {
                    $thumbnailElem = $([]);
                }
                if (status == 'timeout' && params["linkUrl"]) {
                    // 動画再生画面へリンクをはる
                    if (params["pattern"] == NO_CONTENT) {
                        // thumbnailBoxDomId→aタグ…自分自身
                        $(params["thumbnailBoxDomId"]).attr('href', params["linkUrl"]);
                    } else if (params["pattern"] == MY_NO_CONTENT) {
                        // thumbnailBoxDomId→aタグ…<div class="pic-wrap">→<div class="pic-border">→aタグ
                        $(params["thumbnailBoxDomId"]).parent().parent().attr('href', params["linkUrl"]);
                    } else if (params["pattern"] == BOTTOM_CONTENT) {
                        // thumbnailBoxDomId→aタグ…自分自身
                        $(params["thumbnailBoxDomId"]).attr('href', params["linkUrl"]);
                    } else if (params["pattern"] == MY_BOTTOM_CONTENT) {
                        // thumbnailBoxDomId→aタグ…<div class="pic-wrap">→<div class="pic-border">→aタグ
                        $(params["thumbnailBoxDomId"]).parent().parent().attr('href', params["linkUrl"]);
                    } else if (params["pattern"] == RIGHT_CONTENT) {
                        // thumbnailBoxDomId→aタグ…<div class="pic-wrap">→<div class="pic-border">→aタグ
                        $(params["thumbnailBoxDomId"]).parent().parent().attr('href', params["linkUrl"]);
                    }
                }

                var timeout = 0;

                if (status == 'timeout') {
                    timeout =1;
                }

                if (params["timeoutMsgDomId"]) {
                    if (params["timeoutMs"] <= 1e3 / 2) {
                        timeout = params["timeoutMs"];
                    }
                }
                // エラー時でも説明文はセットする
                if (params["contentDomId"]) {
                    $(params["contentDomId"]).text(params["content"]);
                }
                // エラー時でも何らかの代替画像は表示させるので、縦横サイズをセット
                if (imgWidth) {
                    $($thumbnailElem).attr("width", imgWidth);
                }
                if (imgHeight) {
                    $($thumbnailElem).attr("height", imgHeight);
                }
                // 正方形、説明文なし、虫眼鏡アイコンあり
                if (params["pattern"] == NO_CONTENT || params["pattern"] == MY_NO_CONTENT) {
                    $videoNolinkElm = $(params["thumbnailBoxDomId"]).parent().parent().get(0);
                    if ($videoNolinkElm.tagName =='li') {
                        $videoNolinkElm.setAttribute("class", "video-nolink");
                    } else {
                        $(params["thumbnailBoxDomId"]).parent().get(0).setAttribute("class", "video-nolink");
                    }
                }
                if (timeout === 1 && $thumbnailElem.length !== 0 && params["timeOutImageUrl"]) {
                    // タイムアウト画像
                    $($thumbnailElem).attr("alt", params["altContent"]);
                    $($thumbnailElem).attr("title", params["titleContent"]);
                    $($thumbnailElem).attr("src", params["noImageUrl"]);
//                    $($thumbnailElem).attr("src", params["timeOutImageUrl"]);
                } else {
                    if ($thumbnailElem.length && params["noImageUrl"]) {
                        $($thumbnailElem).attr("alt", params["altContent"]);
                        $($thumbnailElem).attr("title", params["titleContent"]);
                        $($thumbnailElem).attr("src", params["noImageUrl"]);
                    }
                }
            }
        });
    },

    getVideoInfo: function(params){
        // API処理メソッドへ渡す
        if (params.site == "youtube") {
            return this._getYoutubeInfo(params);
        }
    }
});

function setOnError(imgElm, imgSrc, imgWidth, linkUrl) {
    imgElm.src=imgSrc;
    imgElm.width=imgWidth;
    if (imgElm.parentElement) {
        liElm = getParentLi(imgElm.parentElement);
        liElm.setAttribute('class','video-nolink');
        if (linkUrl) {
            aElm = getParentA(imgElm.parentElement);
            aElm.href = linkUrl;
        }
    }
//    aParentElm = aElm.parentElement;
//    aParentElm.removeChild(aElm);
    return false;
}
function getParentLi(elem) {
    if (elem.tagName == 'LI') {
        return elem;
    } else {
        return getParentLi(elem.parentElement);
    }
}

function getParentA(elem) {
    if (elem.tagName == 'A') {
        return elem;
    } else {
        return getParentA(elem.parentElement);
    }
}

// youtube apiから返されたISO8601形式のdurationから"hh:mm:ss"の形式に変換する
function convertISO8601ToDisplayDuration (input) {

    var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    var displayDuration = "";

    if (reptms.test(input)) {
        var matches = reptms.exec(input);
        displayDuration = matches[1] ? ("0" +  Number(matches[1])).slice(-2) + ":" : "";
        displayDuration += matches[2] ? ("0" +  Number(matches[2])).slice(-2) + ":" : "00:";
        displayDuration += matches[3] ? ("0" +  Number(matches[3])).slice(-2) : "00";
    }

    return (displayDuration);
}
