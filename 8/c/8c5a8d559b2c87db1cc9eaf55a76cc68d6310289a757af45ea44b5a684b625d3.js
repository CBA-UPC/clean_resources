(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{KnP7:function(n,i,o){"use strict";o.r(i),o.d(i,"onGoogleAuthLogin",(function(){return s})),o.d(i,"onFacebookAuthLogin",(function(){return f})),o.d(i,"onAppleAuthLogin",(function(){return v}));var e=Object({API_KEY:"AIzaSyB3DrzuizZS3QzIWfEq2A3jbi1__M32RlI",AUTH_DOMAIN:"int-smaker.firebaseapp.com",PROJECT_ID:"int-smaker",STORAGE_BUCKET:"int-smaker.appspot.com",MESSAGING_SENDER_ID:"482409607388",APP_ID:"1:482409607388:web:c2897e899919be04dcc419",MEASUREMENT_ID:"G-BCMBRW8KM5"}),a={apiKey:e.API_KEY,authDomain:e.AUTH_DOMAIN,projectId:e.PROJECT_ID,storageBucket:e.STORAGE_BUCKET,messagingSenderId:e.MESSAGING_SENDER_ID,appId:e.APP_ID,measurementId:e.MEASUREMENT_ID},t=o("Jgta"),u=(o("6nsN"),t.a.auth.GoogleAuthProvider),r=t.a.auth.FacebookAuthProvider,d=t.a.auth.OAuthProvider,l=new u,c=new r,p=new d("apple.com");l.addScope("email"),c.addScope("email"),p.addScope("email"),t.a.initializeApp(a),p.setCustomParameters({locale:"pl"});var I=function(n){var i,o,e,a,t,u,r,d;return{uid:n.user.uid,email:(null===(o=null===(i=n.additionalUserInfo)||void 0===i?void 0:i.profile)||void 0===o?void 0:o.email)?null===(a=null===(e=n.additionalUserInfo)||void 0===e?void 0:e.profile)||void 0===a?void 0:a.email:n.user.email,name:null===(u=null===(t=n.additionalUserInfo)||void 0===t?void 0:t.profile)||void 0===u?void 0:u.given_name,surname:null===(d=null===(r=n.additionalUserInfo)||void 0===r?void 0:r.profile)||void 0===d?void 0:d.family_name,provider:n.credential.providerId}},s=function(n,i){return t.a.auth().signInWithPopup(l).then((function(i){n(I(i))})).catch((function(){i&&i()}))},f=function(n,i){return t.a.auth().signInWithPopup(c).then((function(i){n(I(i))})).catch((function(){i&&i()}))},v=function(n,i){return t.a.auth().signInWithPopup(p).then((function(i){n(I(i))})).catch((function(){i&&i()}))}}}]);ews-big:hover figcaption {
        padding: 100px 25px 10px 25px;
    }
    .main-news-big img, .main-news-small img {
        width: 100%;
        position: absolute;
    }
    .main-news-small {
        width: 24.10%;
        margin-bottom: 1%;
        float: right;
        position: relative;
        overflow: hidden;
        height: auto;
    }
    .main-news-small--last {
        display: none;
    }
    .main-news-small:before {
        content: '';
        display: block;
        width: 100%;
        padding-top: 56.25%;
    }
    .main-news-small figcaption {
        position: absolute;
        width: 100%;
        bottom: 0;
        right: 0;
        padding: 10px 10px 10px 10px;
        text-align: right;
        box-sizing: border-box;
        background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.9)));
        background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 100%);
        background: -o-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 100%);
        background: -ms-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 100%);
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 100%);
        transition: all .3s;
    }
    .main-news-small:hover figcaption {
        padding: 20px 10px 10px 10px;
    }
    .main-news-small-title {
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-shadow: 0 0px 1px #000;
        width: 100%;
        display: block;
    }

    .news-extra-title {
        color: #afafaf;
        float: left;
        font-family: 'GPP Text', sans-serif;
        font-size: 24px;
        margin: 0 0 15px 0;
        line-height: 29px;
        font-weight: 300;
        width: 100%;
    }
    .news-extra-preview {
        color: #6f6f6f;
        font-weight: bold;
        margin: 0 0 14px 0;
        font-size: 17px;
    }
    .news-extra-list {
        width: 100%;
        display: inline-block;
        margin-top: 5px;
    }
    .news-list {
        width: 100%;
        float: left;
	    list-style-type: none;
        column-count: 3;
        -moz-column-count: 3;
        -webkit-column-count: 3;
    }
    .news-list li:before {
	    width: 4px;
    height: 4px;
    background: #ffc700;
    display: block;
    content: " ";
    /* float: left; */
    position: relative;
    top: 13px;
    border-radius:2px;
    -moz-border-radius:2px;
    left: -20px;
    }
    .news-list li {
        width: 100%;
        box-sizing: border-box;
        padding: 0 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #ffc700;
        padding: 0 35px 2px 35px;
        margin: 0 0 15px 0;
        font-size: 10px;
        font-weight: 300;
    }
/*
    .news-list li:nth-child(3n+1) {
        padding: 0 35px 2px 21px;
    }
    .news-list li:nth-child(3n+3) {
        padding: 0 0 2px 35px;
    }
*/
    .news-list-category {
        font-size: 10px;
        text-transform: uppercase;
        margin: 0 6px 0 -10px;
        position: relative;
        padding-top: 8px;
        box-sizing: border-box;
        top: 2px;
        font-weight: bold;
    }
    /*.news-list-category:hover {
        text-decoration: underline;
    }*/
    .news-list-link, .wynik .cboxElement {
        font-size: 13px;
        position: relative;
        top: 2px;
        color: #6f6f6f;
    }
    .news-list-link:hover, .wynik .cboxElement:hover {
        text-decoration: underline;
    }
    .news-list-filters {
        float: right;
        margin: 5px 0 10px 0;
    }
    .sort-list {
        cursor: pointer;
        font-weight: bold;
        color: #8f8f8f;
        font-size: 12px;
        margin: 0 0 0 6px;
    }
    .sort-list--active {
        color: #ffc700;
    }
    .news-list-filters, .sort-list {
        display: inline-block;
    }
    .news-list-filters span {
        font-size: 12px;
        color: #8f8f8f;
    }
    .sort-show-current {
        display: inline-block;
        border: 1px solid #e9e9e9;
        padding: 5px 10px;
        border-radius: 2px;
        cursor: pointer;
        position: relative;
        z-index: 9;
    }
    .sort-show-current span {
        color: #ffc700;
        font-weight: bold;
        position: relative;
    }
    .sort-show-current span:after {
        content: '';
        display: inline-block;
        width: 4px;
        height: 4px;
        border-left: 2px solid #969696;
        border-bottom: 2px solid #969696;
        margin: 0 0 3px 10px;
        transform: rotate(-45deg);
    }
    .sort-show, .sort-by {
        display: inline-block;
    }
    .sort-show {
        margin: 0 10px 0 0;
    }
    .sort-show-choice {
        display: none;
        position: absolute;
        box-sizing: border-box;
        border-radius: 2px;
        background: #fff;
        border: 1px solid #e9e9e9;
        z-index: 0;
        top: 24px;
        left: -1px;
        list-style-type: none;
        width: calc(100% + 2px);
    }
    .active {
        display: inline-block;
    }
    .sort-show-current {
        color: #8f8f8f;
        font-size: 12px;
    }
    .sort-show-current li {
        padding: 5px 10px;
        box-sizing: border-box;
        border-top: 1px solid #e9e9e9;
    }
    .sort-show-current li:first-child {
        border-top: 0;
    }
    .sort-show-current li:hover {
        background: #f6f6f6;
    }
    .sort-choiced {
        color: #ffc700;
        font-weight: bold;
    }

    .external-portal {
        width: 50%;
        float: left;
    }
    .external-portal-header {
        font-size: 24px;
        color: #afafaf;
        text-transform: uppercase;
        margin: 0 0 25px 0;
	height: 34px;
    }
    .external-news {
        width: 46%;
        height: auto;
        margin: 0 2% 10px 0;
        float: left;
        position: relative;
        line-height: 1;
    }
    .result-thisIsGal .link-gal:before,
    .result-thisIsVod .link-vod:before{
		content: '';
		background: url('../gfx/img_gal.png');
		width: 43px;
		height: 43px;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 999;
		transform: translate(-50%,-50%);
		background-position: 0 0;
    }
	.result-thisIsGal:hover .link-gal:before,
    .result-thisIsVod:hover .link-vod:before{
        background-position: 0 100%;
    }

    .result-thisIsVod .link-vod:before {
		background: url('../gfx/img_vod.png');
    }

	.hover-orange {

	}

	.slider-news-imp {
		text-align: left !important;
	}
	.news-pager-none {display:none;}

    .box-extra-news .swiper-button-next:hover:after, .box-extra-news .swiper-button-next:hover:before, .box-extra-news .swiper-button-prev:hover:after, .box-extra-news .swiper-button-prev:hover:before {
        background: #000;
    }
    @media screen and (max-width: 1390px) {

    }

	@media screen and (max-width: 1390px) {
		.content {
			width: -moz-calc(100% - 35px);
		    width: -webkit-calc(100% - 35px);
		    width: calc(100% - 35px);
		}
		.box-extra-news .swiper-button-next {
			/*display: none !important;*/
            right: 20px !important;
            top: 30px !important;
		}
        .box-extra-news .swiper-button-prev {
            right: 60px !important;
            left: auto !important;
            top: 30px !important;
        }
        .slider-news-imp {
            margin-top: 30px;
        }
	}

    @media screen and (max-width: 850px) {
        .news-list li {
            width: 100%;
            padding: 0 0 0 21px;
        }
        .news-list li:nth-child(3n+3) {
            padding: 0 0 0 21px;
        }
        .flex {
            flex-wrap: wrap;
        }
        .morenews {
            width: -moz-calc(25% - 7px);
            width: -webkit-calc(25% - 7px);
            width: calc(50% - 7px);
            margin-bottom: 24px;
        }
        .news-list-filters {
            margin: 0 0 10px 0;
        }
        .news-list-filters {
            float: left;
            width: 100%;
            margin: 5px 0 10px 0;
        }
        .main-news-big {
            width: 100%;
        }
        .main-news-small {
            width: 49%;
            margin-top: 10px;
            float: left;
        }
        .main-news-small--last {
            display: block;
        }
        .main-news-small--last, .main-news-small--second {
            margin-left: 2%;
        }
        .see-more-title {
            margin: 0 0 10px 0;
        }
        .external-news {
            width: 93%;
        }
        .news-extra-title {
            padding-right: 75px;
            box-sizing: border-box;
            font-size: 22px;
        }
        .slider-news-imp {
            margin-top: 0;
        }
    }

    @media screen and (max-width: 700px){
        .news-list{
            column-count: 2;
            -moz-column-count: 2;
            -webkit-column-count: 2;
        }
    }

    @media screen and (max-width: 550px) {
        .main-news-small {
            width: 100%;
        }
        .main-news-small figcaption {
            width: 100%;
            text-align: left;
        }
        .main-news-big figcaption {
            padding: 10px 10px 10px 10px;
        }
        .main-news-small--last, .main-news-small--second {
            margin-left: 0;
        }
        .main-news-big-title {
            font-size: 16px;
        }
        .main-news-big-preview {
            display: none;
        }

        .sort-show-current {
            margin: 0 0 10px 0;
        }
        .external-portal {
            width: 100%;
        }
        .external-portal:nth-child(2) {
            margin-top: 40px;
        }
        .external-news {
            width: 100%;
        }
        .external-news .result_subTitle a {
            font-size: 16px;
        }
        .external-portal-header {
            margin: 0 0 15px 0;
        }
    }

     @media screen and (max-width: 490px){
        .news-list{
            column-count: 1;
            -moz-column-count: 1;
            -webkit-column-count: 1;
        }
    }

	@media screen and (min-width: 850px) and (max-width: 1080px) {
		.result-subGallery {
			width: 48% !important;
		}
		.result-subGallery:nth-of-type(3n) {
			margin: 0 4% 10px 0;
		}
        .result-subGallery:nth-of-type(2n+1) {
            margin: 0 4% 10px 0 !important;
        }
        .news-extra-list .result-subGallery:nth-child(2n) {
            margin: 0 0 10px 0 !important;
        }
	}
    @media screen and (max-width: 860px) {
        .box-extra-news .swiper-button-next {
            top: 45px !important;
            right: 0 !important;
        }
        .box-extra-news .swiper-button-prev {
            top: 45px !important;
            right: 40px !important;
        }
    }