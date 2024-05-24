.top-cat-news{
  width: 100%;
  height: 200px;
  position: relative;
}
.top-cat-news.feature{
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  z-index: 1;
}
.top-cat-news.feature:after{
  content: ' ';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.4);
  z-index: -1;
}
.top-cat-news.feature a{
  display: block;
}
.top-cat-news.feature a span.subtitle{
  display: block;
  text-align: center;
  color: #FFF;
  padding: 80px 0 5px 0;
  border-bottom: 3px solid rgba(255,255,255,.3);
  margin: 0 25px 20px 25px;
  font-size: 14px;
  font-size: 1.4rem;
  text-shadow: 1px 1px 1px #000;
}
.top-cat-news.feature a span.title{
  display: block;
  text-align: center;
  color: #FFF;
  padding: 0;
  margin: 0 25px 15px 25px;
  font-size: 18px;
  font-size: 1.8rem;
  text-shadow: 1px 1px 1px #000;
}
.top-cat-news.feature a span.author{
  display: block;
  text-align: center;
  color: #FFF;
  padding: 0;
  margin: 0 25px 0px 25px;
  font-size: 11px;
  font-size: 1.1rem;
}

/*トップ記事 画像＋テキスト*/
.panel-top-article{
  position:relative;
}
.panel-top-article.fixed-height-2{
  width: 100%;
  height: 63vw;
}
.panel-top-article .bg-blur{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right:0;
  bottom:0;
  left: 0;
  margin:auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  z-index:1;
}

.panel-top-article a{
  position:relative;
  display:block;
}
.panel-top-article .img-header{
  position:relative;
  z-index:99;
}
.panel-top-article .inner div.title .label-icon p:before{
  content: "";
  height: inherit;
  position: absolute;
  top: 0;
  left: 100%;
  border: 11px;
  border-style: solid;
}
.panel-top-article .inner div.title .label-icon p:after{
  content: "";
  position: absolute;
  top: 100%;
  right: calc(100% - 10px);
  border-style: solid;
  border-width: 0 10px 8px 0;
}
/*.panel-top-article .inner div.scoop:before*/
.panel-top-article .inner div.scoop .label-icon{
  height: 22px;
  position: absolute;
  top: 7px;
  left: 9px;
  background: #ffed23;
  z-index:10;
}
.panel-top-article .inner div.scoop .label-icon p{
  height: 22px;
  position: relative;
  color: #333;
  font-size:12px;
  font-size:1.2rem;
  font-weight: 700;
  line-height:22px;
  font-style:italic;
  padding: 0 2px 0 12px;
  vertical-align: top;
}
.panel-top-article .inner div.scoop .label-icon p:before{
  border-color: #ffed23 transparent #ffed23 #ffed23;
}
.panel-top-article .inner div.scoop .label-icon p:after{
  border-color: transparent #8d8105 transparent transparent;
}
/*.panel-top-article .inner h2.new:before*/
.panel-top-article .inner div.new .label-icon{
  height: 22px;
  position: absolute;
  top: 7px;
  left: 9px;
  background: #f83f3f;
  z-index:10;
}
.panel-top-article .inner div.new .label-icon p{
  height: 22px;
  position: relative;
  color: #FFF;
  font-size:12px;
  font-size:1.2rem;
  font-weight: 700;
  line-height:22px;
  font-style:italic;
  padding: 0 2px 0 12px;
  vertical-align: top;
}
.panel-top-article .inner div.new .label-icon p:before{
  border-color: #f83f3f transparent #f83f3f #f83f3f;
}
.panel-top-article .inner div.new .label-icon p:after{
  border-color: transparent #831515 transparent transparent;
}
.panel-top-article .img-header img{
  display:block;
  width:100%;
  margin:0 auto;
}
.panel-top-article.fixed-height-2 img{
  width: auto;
  height:63vw;
}
.panel-top-article .img-header:after{
  content: ' ';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.4);
}
.panel-top-article .inner{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index:99;
}
.panel-top-article .inner div.title{
  padding:20px 20px 10px 20px;
  color:#FFF;
  text-align:center;
  font-weight:700;
  position: absolute;
  /*top: 50%;*/
  bottom:0;
  left: 0;
  right: 0;
  margin: auto;
  /*
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  */
}
.panel-top-article .inner div.title span{
  padding-right:15px;
  display:inline-block;
  color:#FFF;
  font-size:1.2rem;
}
.panel-top-article .inner div.title span:last-child{
  padding-right:0;
}
.panel-top-article .inner div.title span.series{
  border-bottom: 3px solid rgba(255,255,255,.3);
  margin-bottom: 10px;
  padding-bottom: 5px;
  display:inline-block;
  font-weight:500;
}
.panel-top-article .inner div.title h2{
  padding: 4% 4%;
  position: relative;
  background-color: rgba(0,0,0,.25);
  border: solid 1px #fff;
  text-align: left;
}
.panel-top-article .inner div.title span.author{
  margin-top: 10px;
  font-weight:200;
}
.panel-top-article .inner div.title span.author span.icon-author{
  display: inline-block;
  width: 30px;
  height: 30px;
  background-repeat:no-repeat;
  background-position:center center;
  background-size: contain;
  vertical-align: middle;
  margin-right: 5px;
  border-radius:50%;
}
.panel-top-article .inner div.title span.author span.list-item.pr{
  display:inline-block;
  margin-left:10px;
  padding:0 5px;
  font-size: 1.4rem;
  line-height:1.4;
  background: #c7c6c6;
}

/*LIST THUMB*/
/* TYPE 4(SIDE-CLUMN thumb+title) */
ul.list-thumb,
ul.sp-list-thumb{
  padding: 0 10px;
  margin: 0;
  background: #FFF;
}
ul.list-thumb li,
ul.sp-list-thumb li{
  display: block;
  font-size: 12px;
  font-size: 1.2rem;
  border-bottom: 1px solid #E0E0E0;
}
ul.list-thumb li.upcoming{
  display: block;
  padding: 15px 0;
  min-height: 110px;
  color:#333;
}
ul.list-thumb li.first,
ul.sp-list-thumb li.first{
  border-top: 1px solid #E0E0E0;
}
ul.list-thumb li.ad.banner{
  margin: 10px auto;
  padding-bottom: 10px;
}
ul.list-thumb li.ad.banner ins, ul.list-thumb li.ad.banner ins iframe{
  display:block;
  margin:0 auto;
}
ul.list-thumb li.ad div{
  margin:0 auto;
}
ul.list-thumb.feature li:first-child{
  border-top: 1px solid #E0E0E0;
}

ul.list-thumb li.ad-banner{
  border:0;
  padding-top: 15px;
}

ul.list-thumb li a,
ul.sp-list-thumb li a{
  display: block;
  padding: 15px 0;
  min-height: 110px;
  color:#333;
  overflow:hidden;
}
ul.list-thumb li a.flex{
  padding: 15px 5px;
  height: inherit;
  position: relative;
  align-items: center;
}
ul.list-thumb li.thumb-large a{
  padding-top:30px;
}
ul.list-thumb li a:hover,ul.list-thumb li a:visited,
ul.sp-list-thumb li a:hover,ul.sp-list-thumb li a:visited{
  color:#333;
}
ul.list-thumb li a.upcoming{
  pointer-events: none;
}
ul.list-thumb li.present a,
ul.sp-list-thumb li.present a{
  min-height: auto;
}
ul.list-thumb li.present a .title,
ul.sp-list-thumb li.present a .title{
  display: block;
  font-size: 15px;
  font-size: 1.5rem;
  line-height: 22px;
  line-height: 2.2rem;
  font-weight: 700;
}
ul.list-thumb li div.left,
ul.sp-list-thumb li div.left{
  width: 100px;
  /*height: 80px;*/
  float: left;
  margin-right: 10px;
  overflow: hidden;
  position:relative;
  height: 62.7px;
}
ul.list-thumb li div.left .image{
  overflow: hidden;
  position:relative;
  height: 100%;
}
ul.list-thumb li div.left img, ul.sp-list-thumb li div.left a img{
  object-fit:cover;
  height:100%;
  border:1px solid #f5f5f5;
}
ul.list-thumb li a.flex div.left.leafs-video-cover img{
  object-fit: contain;
}
ul.list-thumb li a.flex div.left{
  overflow: visible;
}
ul.list-thumb li div.left.magazine-cover{
  height:auto;
}
ul li .left.leafs-video-cover::after,
ul li .left .inner.leafs-video-cover::after,
.header-panel-list .panel-list li .panel-img.video::after{
  content: "";
  width: 30px;
  height: 20px;
  display: block;
  position: absolute;
  bottom: 8%;
  left: 5%;
  background:url(/common/images/bunshun/v1/common/icon_triangle_right.png) no-repeat center center ;
  background-size:22%;
  background-color: rgba(0,0,0,.7);
  border-radius: 2px;
  border: solid 1px #fff;
  color: #fff;
}
ul li.thumb-large .left.leafs-video-cover::after{
  width: 60px;
  height: 40px;
}
ul.list-thumb li div.left img,
ul.sp-list-thumb li div.left img{
  display: block;
  width: 100px;
}
ul.list-thumb li div.left img.height{
  width: auto !important;
}
ul.list-thumb li div.left img.fixed-height{
  display: block;
  margin: 0 auto;
  position: relative;
  width: auto;
  height: 62.7px;
  z-index: 2;
}
ul.list-thumb li.thumb-large div.left{
  width: 100%;
  float: none;
  margin-right: 0;
  margin-bottom: 10px;
  overflow: hidden;
  position:relative;
}
ul.list-thumb li.thumb-large div.left a img{
  object-fit: cover;
  height:100%;
}
.block ul.list-thumb li.thumb-large a div.left{
  height: 216px;
}
ul.list-thumb li.thumb-large a.flex div.left{
  overflow: visible;
}
ul.list-thumb li a.upcoming div.left img{
  opacity: .4;
}
.category ul.list-thumb li.thumb-large div.left{
  height:216px;
}
ul.list-thumb.feature li.thumb-large div.left{
  height:auto;
  overflow:visible;
}
ul.list-thumb li.thumb-large div.left img{
  display: block;
  width: 100%;
  margin: 0 auto;
}
ul.list-thumb li.thumb-large div.left img.height{
  width: auto !important;
}
ul.list-thumb li.thumb-large div.left img.fixed-height{
  display: block;
  margin: 0 auto;
  position: relative;
  width: auto;
  height: 290px;
  z-index: 2;
}
ul.list-thumb li.thumb-large a.flex div.right{
  width: 100%;
}

ul.list-thumb li div.left .image .bg-blur{
  position: absolute;
  width: 120%;
  height: 120%;
  top: 0px;
  right: 0px;
  bottom: 0;
  left: -10px;
  margin: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-filter: blur(4px);
  -moz-filter: blur(4px);
  -o-filter: blur(4px);
  -ms-filter: blur(4px);
  filter: blur(4px);
  z-index: 1;
  opacity: .5;
}

ul.list-thumb li div.left .label-icon p:before{
  content: "";
  height: inherit;
  position: absolute;
  top: 0;
  left: 100%;
  border: 7px;
  border-style: solid;
}
ul.list-thumb li.thumb-large div.left .label-icon p:before{
  border: 12px;
  border-style: solid;
}
ul.list-thumb li div.left .label-icon p:after{
  content: "";
  position: absolute;
  top: 100%;
  right: calc(100% - 5px);
  border-style: solid;
  border-width: 0 5px 4px 0;
}
/*ul.list-thumb li div.left.new:before*/
ul.list-thumb li div.left.new .label-icon{
  height: 14px;
  position: absolute;
  top: -10px;
  left: -5px;
  background: #f83f3f;
  z-index: 10;
}
ul.list-thumb li.thumb-large div.left.new .label-icon{
  height: 24px;
  top: -16px;
}
ul.list-thumb li div.left.new .label-icon p{
  height: 14px;
  position: relative;
  color: #FFF;
  font-weight: 700;
  line-height:14px;
  font-style:italic;
  padding: 0 2px 0 10px;
  vertical-align: top;
  font-size: 10px;
  font-size: 1.0rem;
}
ul.list-thumb li.thumb-large div.left.new .label-icon p{
  height: 24px;
  line-height: 22px;
  padding: 0 4px 0 20px;
  font-size: 16px;
  font-size: 1.6rem;
}
ul.list-thumb li div.left.new .label-icon p:before{
  border-color: #f83f3f transparent #f83f3f #f83f3f;
}
ul.list-thumb li div.left.new .label-icon p:after{
  border-color: transparent #831515 transparent transparent;
}

/*PC右カラムのSPECIAL枠に、ピノPRのみSCOOP!帯をつけるため、ラベルのoverflowをvisibleに*/
ul.list-thumb li.scoop.pino a,
ul.list-thumb li.scoop.pino div.left.scoop.pino{
  overflow:visible;
}
/*ここまで*/

/*ul.list-thumb li div.left.scoop:before*/
ul.list-thumb li div.left.scoop .label-icon{
  height: 14px;
  position: absolute;
  top: -10px;
  left: -5px;
  background: #ffed23;
  z-index: 10;
}
ul.list-thumb li.thumb-large div.left.scoop .label-icon{
  height: 24px;
  top: -16px;
}
ul.list-thumb li div.left.scoop .label-icon p{
  height: 14px;
  position: relative;
  color: #333;
  font-weight: 700;
  line-height:15px;
  font-style:italic;
  padding: 0 2px 0 10px;
  vertical-align: top;
  font-size: 10px;
  font-size: 1.0rem;
}
ul.list-thumb li.thumb-large div.left.scoop .label-icon p{
  height: 24px;
  line-height: 22px;
  padding: 0 4px 0 20px;
  font-size: 16px;
  font-size: 1.6rem;
}
ul.list-thumb li div.left.scoop .label-icon p:before{
  border-color: #ffed23 transparent #ffed23 #ffed23;
}
ul.list-thumb li div.left.scoop .label-icon p:after{
  border-color: transparent #8d8105 transparent transparent;
}
ul.list-thumb li div.left.hit .label-icon{
  height: 18px;
  position: absolute;
  top: -10px;
  left: -5px;
  background-image: url("/common/images/bunshun/v1/baseball/2019/sd/ribbon-long.svg");
  background-size: cover;
  background-position: right top;
  border-left: 1px solid #666;
  z-index: 10;
}
ul.list-thumb li.thumb-large div.left.hit .label-icon{
  height: 24px;
  top: -16px;
}
ul.list-thumb li div.left.hit .label-icon p{
  height: 18px;
  position: relative;
  font-weight: 700;
  line-height: 18px;
  padding: 0 15px 0 25px;
  vertical-align: top;
  font-size: 10px;
  font-size: 1.0rem;
}
ul.list-thumb li.thumb-large div.left.hit .label-icon p{
  height: 24px;
  line-height: 24px;
  padding: 0 20px 0 25px;
  font-size: 16px;
  font-size: 1.6rem;
}
ul.list-thumb li div.left.hit .label-icon p span{
  padding-left: 2px;
}
ul.list-thumb li div.left.hit .label-icon p:before{
  height: 27px;
  width: 26px;
  background-image: url("/common/images/bunshun/v1/baseball/2019/sd/fire-ball.png");
  background-size: contain;
  background-repeat: no-repeat;
  left: 4px;
  top: -10px;
  border: 0;
}
ul.list-thumb li div.left.hit .label-icon p:after{
  border-color: transparent #666 transparent transparent;
}
/*ul.list-thumb li div.left.upcoming:before*/
ul.list-thumb li a.upcoming div.right .label-icon{
  display: inline-block;
  height: 22px;
  margin-bottom: 10px;
  background: #02a5d4;
}
ul.list-thumb li a.upcoming div.right .label-icon p{
  display: inline-block;
  height: 22px;
  position: relative;
  color: #FFF;
  font-weight: 700;
  line-height:22px;
  padding: 0 10px 0 10px;
  vertical-align: top;
}
ul.list-thumb li div.left.pr .label-icon{
  height: 14px;
  position: absolute;
  top: -10px;
  left: -5px;
  background: #c7c6c6;
  z-index: 10;
}
ul.list-thumb li.thumb-large div.left.pr .label-icon{
  height: 24px;
  top: -16px;
}
ul.list-thumb li div.left.pr .label-icon p{
  height: 14px;
  position: relative;
  color: #FFF;
  font-weight: 700;
  line-height:15px;
  font-style:italic;
  padding: 0 2px 0 10px;
  vertical-align: top;
  font-size: 10px;
  font-size: 1.0rem;
}
ul.list-thumb li.thumb-large div.left.pr .label-icon p{
  height: 24px;
  line-height: 22px;
  padding: 0 4px 0 20px;
  font-size: 16px;
  font-size: 1.6rem;
}
ul.list-thumb li div.left.pr .label-icon p:before{
  border-color: #c7c6c6 transparent #c7c6c6 #c7c6c6;
}
ul.list-thumb li div.left.pr .label-icon p:after{
  border-color: transparent #716969 transparent transparent;
}
ul.list-thumb li div.left.tokin .label-icon{
  height: 18px;
  position: absolute;
  top: -10px;
  left: -5px;
  background-image: url("/common/images/bunshun/v1/shogi/ribbon-long.svg");
  background-size: cover;
  background-position: right top;
  border-left: 1px solid #666;
  z-index: 10;
}
ul.list-thumb li.thumb-large div.left.tokin .label-icon{
  height: 24px;
  top: -16px;
}
ul.list-thumb li div.left.tokin .label-icon p{
  height: 18px;
  position: relative;
  font-weight: 700;
  line-height: 18px;
  padding: 1px 15px 0 28px;
  vertical-align: top;
  font-size: 10px;
  font-size: 1.1rem;
}
ul.list-thumb li.thumb-large div.left.tokin .label-icon p{
  height: 24px;
  line-height: 24px;
  padding: 0 20px 0 25px;
  font-size: 16px;
  font-size: 1.6rem;
}
ul.list-thumb li div.left.tokin .label-icon p span{
  padding-left: 2px;
}
ul.list-thumb li div.left.tokin .label-icon p:before{
  height: 27px;
  width: 26px;
  background-image: url("/common/images/bunshun/v1/shogi/icon-tokin.png");
  background-size: contain;
  background-repeat: no-repeat;
  left: 2px;
  top: -10px;
  border: 0;
}
ul.list-thumb li div.left.tokin .label-icon p:after{
  border-color: transparent #666 transparent transparent;
}

ul.list-thumb li div.right,
ul.sp-list-thumb li div.right{
  position: relative;
  overflow: hidden;
  /*min-height: 80px;*/
}
ul.list-thumb li a.flex div.right{
  width: calc(100% - 110px);
}

ul.list-thumb li div.right .text-header,
ul.sp-list-thumb li div.right .text-header{
  min-height:15px;
}
ul.list-thumb li div.right .title,
ul.sp-list-thumb li div.right .title{
  display: block;
  font-size: 16px;
  font-size: 1.6rem;
  line-height: 20px;
  line-height: 2.0rem;
  padding: 0 0 5px;
  font-weight:700;
}
ul.list-thumb li a.upcoming div.right .title{
  opacity: .4;
}
ul.list-thumb li div.right .subtitle{
  display: block;
  font-size: 10px;
  font-size: 1.0rem;
  line-height: 13px;
  line-height: 1.3rem;
  padding-bottom: 5px;
  color: #7a7a7a;
}


ul.list-thumb li div.right .cat,
ul.sp-list-thumb li div.right .cat{
  padding-right: 10px;
  display:inline-block;
  position: relative;
  line-height: 15px;
  font-size: 10px;
  font-size: 1.0rem;
  color: #7a7a7a;
}
ul.list-thumb li div.right .cat-box{
  float: left;
  width: 65%;
}
ul.list-thumb li div.right.pr .cat-box{
  width: 100%;
}
ul.list-thumb li div.right .list-author-icon{
  display: inline-block;
  width: 15px;
  height: 15px;
  float: left;
  margin-right: 5px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
}

ul.list-thumb li div.right .date{
  float: right;
  width: 35%;
  display: inline-block;
  font-size: 10px;
  font-size: 1.0rem;
  color: #7a7a7a;
  line-height:15px;
  text-align: right;
}
ul.list-thumb li div.right .pr,
ul.sp-list-thumb li div.right .pr{
  display: inline-block;
  float: right;
  font-size: 10px;
  font-size: 1.0rem;
  color: #FFF;
  background: #c7c6c6;
  padding: 0 5px;
}

/*list-vote(questionnaire) from 20210929*/
ul.list-vote{
  padding: 0;
  overflow: hidden;
}
ul.list-vote li{
  list-style: none;
  position: relative;
  display:block;
  width: 100%;
  border: 3px solid #f72b2b;
  margin-bottom: 10px;
}
ul.list-vote.sd li{
  width: auto;
}
ul.list-vote li a{
  display: flex;
  margin:0 auto;
}
ul.list-vote.sd li a{
  width: 100%;
}
ul.list-vote li a .icon-vote{
  color: #fff;
  width: 110px;
  background-position: left center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f72b2b;
}
ul.list-vote.sd li a .icon-vote{
  width: 80px;
}
ul.list-vote li a .icon-vote span{
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-size: 1.8rem;
}
ul.list-vote.sd li a .icon-vote span{
  font-size: 16px;
  font-size: 1.6rem;
}
ul.list-vote li a .icon-vote span::before{
  content: '';
  display: block;
  width: 43px;
  height:29px;
  margin: 0 auto 10px;
  background-image: url(/common/images/bunshun/v1/common/icon_questionnaire.png);
  background-repeat: no-repeat;
  background-size: contain;
}
ul.list-vote.sd li a .icon-vote span::before{
  width: 35px;
  height:25px;
}
ul.list-vote li a .text-side{
  text-align:left;
  overflow:hidden;
  width: calc(100% - 110px);
}
ul.list-vote.sd li a .text-side{
  width: calc(100% - 80px);
}
ul.list-vote li a .text-side p.title{
  display:inline-block;
  text-align:left;
  line-height: 1.2;
  font-size: 25px;
  font-size: 2.5rem;
  font-weight: 700;
  padding: 20px 10px;
}
ul.list-vote.sd li a .text-side p.title{
  font-size: 17px;
  font-size:1.7rem;
  font-weight: 700;
  padding: 10px;
}
ul.list-vote li a .text-side span{
  display: inline-block;
}

ul.list-vote li a .text-side span.subtitle{
  font-size:19px;
  font-size:1.9rem;
  padding-bottom: 10px;
  font-weight: 500;
}
ul.list-vote.sd li a .text-side span.subtitle{
  font-size: 12px;
  font-size: 1.2rem;
}

/*list-ranking(old type.text only)*/
ul.list-ranking{
  padding: 0 10px;
  margin: 0;
  background: #FFF;
  counter-reset: ranking;
}
ul.list-ranking li{
  list-style: none;
  padding: 15px 0px 15px 50px;
  position: relative;
  border-bottom: 1px solid #E0E0E0;
}
ul.list-ranking li.first{
  border-top: 1px solid #E0E0E0;
}
ul.list-ranking li:before{
  display: block;
  position: absolute;
  width:30px;
  height:50px;
  top: 0;
  bottom:0;
  left: 6px;
  margin:auto;
  counter-increment: ranking;
  content: counter(ranking);
  font-size: 40px;
  font-size: 4.0rem;
  color: #000;
}

ul.list-ranking li a{
  display: block;
  padding: 10px 0;
  position:relative;
}

/*list-ranking(for new PC page. with thumb)*/
/*RANKING TAB(for PC)*/
.ranking-genre-tab ul{
  justify-content: center;
  overflow: hidden;
  margin-bottom: 10px;
}
.ranking-genre-tab ul li{
  padding: 0 12px;
  margin-bottom: 5px;
  border-right: solid 2px #000;
  font-weight: bold;
  color: #b2b2b2;
}
.ranking-genre-tab.sp ul li{
  font-size: 14px;
  font-size: 1.4rem;
}
.sub-ranking .ranking-genre-tab.pc ul li:nth-child(3){
  border-right: none;
}
.ranking-genre-tab ul li.current,.ranking-genre-tab ul li.is-selected{
  color: #000;
}
.ranking-genre-tab ul li:first-child{
  padding-left: 10px;
}
.ranking-genre-tab ul li:last-child{
  border-right: none;
  padding-right: 10px;
}
.ranking-genre-tab ul li:hover{
  cursor: pointer;
}
.ranking-page-tab ul{
  justify-content: space-between;
  overflow: hidden;
  background: #f4f4f4;
  border-radius: 4px;
}
.ranking-page-tab ul li{
  float: left;
  width: calc(100% / 6);
  padding: 1.8% 0;
  position: relative;
  text-align: center;
}
.ranking-page-tab.sp ul li{
  width: calc(100% / 3);
}
.ranking-page-tab ul li a{
  font-size:20px;
  font-size:2.0rem;
  font-weight: 700;
  color: #b2b2b2;
}
.ranking-page-tab ul li a.current{
  pointer-events: none;
  color: #f83e3f;
}
.ranking-page-tab ul li a.current::after{
  content: "";
  width: 70%;
  height: 4px;
  position: absolute;
  margin: 0 auto;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f83f3f;
  border-radius: 3px;
}


/*RANKING-PAGE-LIST(for PC)*/
#category-ranking.progressive{
  visibility: hidden;
}
#category-ranking-loading{
  text-align: center;
}
#category-ranking-loading img{
  width: 100px;
}
ul.list-thumb.pc.ranking{
  width: 100%;
  counter-reset: ranking;
}
ul.list-thumb.pc.ranking li{
  border: 0;
  padding: 40px 0 0 0;
  position:relative;
  border-bottom:1px solid #d4d4d4;
  padding-bottom: 40px;
  /*margin-bottom: 20px;*/
}
ul.list-thumb.pc.ranking li.loading,
ul.list-thumb.pc.ranking li.error{
  min-height: 0 !important;
  padding: 0;
  border: 0;
  text-align: center;
}
ul.list-thumb.pc.ranking li.loading img{
  width: 100px;
}
ul.list-thumb.pc.ranking li:nth-child(-n+3){
  min-height:265px;
}
ul.list-thumb.pc.ranking li:nth-child(12){
  border-top:1px solid #d4d4d4;
}
ul.list-thumb.pc.ranking li .icon{
  width: 115px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
ul.list-thumb.pc.ranking li .icon:before{
  display: block;
  width: 45px;
  height: 45px;
  line-height: 180%;
  border: solid 2px #B5B5B5;
  border-radius: 100%;
  counter-increment: ranking;
  content: counter(ranking);
  font-size: 22px;
  font-size: 2.2rem;
  line-height: 4.2rem;
  color: #B5B5B5;
  text-align:center;
}
ul.list-thumb.pc.ranking li.loading .icon:before,
ul.list-thumb.pc.ranking li.error .icon:before{
  display: none;
}

ul.list-thumb.pc.ranking li:first-child .icon:before{
  content:'';
  background:url(/common/images/bunshun/v1/ranking/icon_rank1.png) no-repeat center center ;
  background-size:100%;
  width:55px;
  height:55px;
  border:0;
}
ul.list-thumb.pc.ranking li:nth-child(2) .icon:before{
  content:'';
  background:url(/common/images/bunshun/v1/ranking/icon_rank2.png) no-repeat center center ;
  background-size:100%;
  width:55px;
  height:55px;
  border:0;
}
ul.list-thumb.pc.ranking li:nth-child(3) .icon:before{
  content:'';
  background:url(/common/images/bunshun/v1/ranking/icon_rank3.png) no-repeat center center ;
  background-size:100%;
  width:55px;
  height:55px;
  border:0;
}

ul.list-thumb.pc.ranking li a{
  padding: 0;
  min-height: inherit;
  align-items: center;
  border:0;
}
ul.list-thumb.pc li a:hover{
/* opacity: .2; */
  color: #F73B3B;
  border:0;
}
ul.list-thumb.pc li a:hover img{
  opacity: .5;
  transition: .2s;
}

ul.list-thumb.pc.ranking li .left{
  overflow: visible;
  margin: 0 30px 0 0;

}
ul.list-thumb.pc.ranking li .left .inner{
  width: 350px;
  position: relative;
  background: #262626;
}
ul.list-thumb.pc.ranking li .left a{
  width: 100%;
  display:block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
}

ul.list-thumb.pc.ranking li .left .bg-blur{
  position: absolute;
  width: 120%;
  height: 120%;
  top: 0px;
  right: 0px;
  bottom: 0;
  left: -28px;
  margin: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  -webkit-filter: blur(8px);
  -moz-filter: blur(8px);
  -o-filter: blur(8px);
  -ms-filter: blur(8px);
  filter: blur(8px);
  z-index: 1;
  opacity: .5;
}
ul.list-thumb.pc.ranking li .left .inner img.normal{
  width: 100%;
  display: block;
}
ul.list-thumb.pc.ranking li .left .inner img.fixed-height{
  display: block;
  margin: 0 auto;
  position: relative;
  width: auto;
  z-index: 999;
}
ul.list-thumb.pc.ranking li .left:before{
  z-index: 9999;
}

ul.list-thumb.pc.ranking li div.right .right-top{
  padding:15px 0 0 0;
  position:relative;
}
ul.list-thumb.pc.ranking li div.right .right-center{
  position:relative;
}
ul.list-thumb.pc.ranking li div.right .right-bottom{
  position:relative;
}

/*thumb-large*/
ul.list-thumb.pc.ranking li.thumb-large div.left{
  width:300px;
  align-items: center;
  height: auto;
}
ul.list-thumb.pc.ranking li.thumb-large div.left .inner{
  width:300px;
  height: 185px;
}
ul.list-thumb.pc.ranking li.thumb-large div.left img.fixed-height{
  height: 185px;
}
ul.list-thumb.pc.ranking li.thumb-large div.right{
  width:385px;
  float:left;
  align-items: center;
}
ul.list-thumb.pc.ranking li.thumb-large div.right .right-top{
  width:385px;
}
ul.list-thumb.pc.ranking li.thumb-large div.right .right-center{
  width:385px;
}
ul.list-thumb.pc.ranking li.thumb-large div.right .right-bottom{
  width:385px;
}
/*thumb-middle*/
ul.list-thumb.pc.ranking li.thumb-middle div.left{
  width:300px;
  justify-content: center;
  align-items: center;
  height: auto;
}
ul.list-thumb.pc.ranking li.thumb-middle div.left .inner{
  width:260px;
  height:158px;
}
ul.list-thumb.pc.ranking li.thumb-middle div.left img.fixed-height{
  height:170px;
}
ul.list-thumb.pc.ranking li.thumb-middle div.right{
  width:435px;
  min-height:170px;
  float: left;
}
ul.list-thumb.pc.ranking li.thumb-middle div.right .right-top{
  width:435px;
}
ul.list-thumb.pc.ranking li.thumb-middle div.right .right-center{
  width:435px;
}
ul.list-thumb.pc.ranking li.thumb-middle div.right .right-bottom{
  width:435px;
}
ul.list-thumb.pc.ranking li.thumb-middle div.right .right-bottom.fbtwshare-exists{
  padding:15px 0 30px;
}
/*thumb-small*/
ul.list-thumb.pc.ranking li.thumb-small div.left{
  width:300px;
  justify-content: center;
  align-items: center;
  height:auto;
}
ul.list-thumb.pc.ranking li.thumb-small div.left .inner{
  width:225px;
  height:140px;
}
ul.list-thumb.pc.ranking li.thumb-small div.left img.fixed-height{
  height:140px;
}
ul.list-thumb.pc.ranking li.thumb-small div.right{
  width:435px;
  min-height:140px;
}
ul.list-thumb.pc.ranking li div.right .inner{
  opacity:1;
}
ul.list-thumb.pc.ranking li.thumb-small div.right .right-top{
  width:435px;
}
ul.list-thumb.pc.ranking li.thumb-small div.right .right-center{
  width:435px;
}
ul.list-thumb.pc.ranking li.thumb-small div.right .right-bottom{
  width:435px;
}
ul.list-thumb.pc.ranking li.thumb-small div.right .right-bottom.fbtwshare-exists{
  padding:15px 0 30px;
}



ul.list-thumb.pc.ranking li div.right h2.title{
  padding:0;
}
ul.list-thumb.pc.ranking li div.right .right-center h2.title{
  font-size:26px;
  font-size:2.6rem;
  line-height:3.6rem;
}
ul.list-thumb.pc.ranking li div.right .right-center h2.title.v-align{
}
/*)*/
ul.list-thumb.pc.ranking li.thumb-middle div.right .right-center h3.title{
  font-size:24px;
  font-size:2.4rem;
  line-height:3.6rem;
}
ul.list-thumb.pc.ranking li.thumb-small div.right .right-center h3.title{
  font-size:22px;
  font-size:2.2rem;
  line-height:3.6rem;
}


ul.list-thumb.pc.ranking li div.right .right-bottom .subtitle{
  font-size:16px;
  font-size:1.6rem;
  line-height:1.6rem;
  padding:15px 0;
}
ul.list-thumb.pc.ranking li div.right .right-bottom.fbtwshare-exists .subtitle{
  padding:0;
}


ul.list-thumb.pc.ranking li div.right .cat{
  font-size:14px;
  font-size:1.4rem;
  min-height: 40px;
  width: auto;
  padding-left: 40px;
  padding-right: 20px;
  line-height: 20px;
}

ul.list-thumb.pc.ranking li div.right .list-author-icon{
  width: 30px;
  height: 30px;
  margin-right: 0;
  position:absolute;
  top:50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  left:0;
}

/*)*/

ul.list-thumb.pc.ranking li div.right .list-item{
  display: inline-block;
  font-size:14px;
  font-size:1.4rem;
  position: relative;
  float: right;
  line-height: 40px;
  vertical-align: top;
}

ul.list-thumb.pc.ranking li div.icon p.fbtw-share-num{
  display: block;
  line-height: 23px;
  /* width: 61px; */
  /* padding-left: 30px; */
  font-size: 14px;
  color: #7a7a7a;
}
ul.list-thumb.pc.ranking li div.icon p.fbtw-share-num:after{
  content:'';
  display: block;
  background:url(/common/images/bunshun/v1/ranking/share-icon@2x.png) no-repeat;
  background-size:100%;
  width:54px;
  height:37px;
  margin:0 auto;
}
ul.list-thumb.pc.ranking li div.icon p.fbtw-share-num .box{
  min-width: 55px;
  margin: 5px 0 8px;
  padding: 2px 5px;
  display: block;
  position: relative;
  border: solid 1px #d8d8d8;
  text-align: center;
}
ul.list-thumb.pc.ranking li div.icon p.fbtw-share-num .box:before,
ul.list-thumb.pc.ranking li div.icon p.fbtw-share-num .box:after{
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  width: 0;
  height: 0;
  margin: auto;
}
ul.list-thumb.pc.ranking li div.icon p.fbtw-share-num .box:before{
  bottom: -5px;
  border-style: solid;
  border-color: #d8d8d8 transparent transparent transparent;
  border-width: 5px 5px 0 5px;
}

/* RANKING COMMENT NUM */
ul.list-thumb.pc.ranking .comment-num{
  position:relative;
  display: block;
  line-height: 23px;
  font-size: 14px;
  color: #7a7a7a;
  padding-bottom:15px;
}
ul.list-thumb.pc.ranking .comment-num::after{
  content:"コメント";
  display:block;
  font-size:11px;
  position:absolute;
  bottom:0;
  left:5px;
  color:#444;
}

ul.list-thumb.pc.ranking .comment-num .box{
  min-width: 55px;
  margin: 5px 0 8px;
  padding: 2px 5px;
  display: block;
  position: relative;
  border: solid 1px #d8d8d8;
  text-align: center;
}
ul.list-thumb.pc.ranking .comment-num .box:before,
ul.list-thumb.pc.ranking .comment-num .box:after{
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  width: 0;
  height: 0;
  margin: auto;
}
ul.list-thumb.pc.ranking .comment-num .box:before{
  bottom: -5px;
  border-style: solid;
  border-color: #d8d8d8 transparent transparent transparent;
  border-width: 5px 5px 0 5px;
}

ul.list-thumb.pc.ranking li div.right .list-item.pr{
  height: auto;
  line-height: normal;
  margin-top: 5px;
}
ul.list-thumb.pc.ranking li div.right .list-item span.pr{
  background: #c7c6c6;
  color: #fff;
  padding: 0 5px;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

ul.list-thumb.pc.ranking li div.left .inner .label-icon p:before{
  content: "";
  height: inherit;
  position: absolute;
  top: 0;
  left: 100%;
  border: 11px;
  border-style: solid;
}
ul.list-thumb.pc.ranking li div.left .inner .label-icon p:after{
  content: "";
  position: absolute;
  top: 100%;
  right: calc(100% - 10px);
  border-style: solid;
  border-width: 0 10px 8px 0;
}
/*ul.list-thumb.pc.ranking li div.left .inner.scoop:before*/
ul.list-thumb.pc.ranking li div.left .inner.scoop .label-icon{
  height: 22px;
  position: absolute;
  top: -14px;
  left: -10px;
  background: #ffed23;
  z-index: 1000;
}
ul.list-thumb.pc.ranking li div.left .inner.scoop .label-icon p{
  display: inline-block;
  height: 22px;
  position: relative;
  color: #333;
  font-size:16px;
  font-size:1.6rem;
  font-weight: 700;
  line-height:1.4;
  font-style:italic;
  padding: 1px 2px 0 12px;
}
ul.list-thumb.pc.ranking li div.left .inner.scoop .label-icon p:before{
  border-color: #ffed23 transparent #ffed23 #ffed23;
}
ul.list-thumb.pc.ranking li div.left .inner.scoop .label-icon p:after{
  border-color: transparent #8d8105 transparent transparent;
}

/*ul.list-thumb.pc.ranking li div.left .inner.new:before*/
ul.list-thumb.pc.ranking li div.left .inner.new .label-icon{
  height: 22px;
  position: absolute;
  top: -14px;
  left: -10px;
  background: #f83f3f;
  z-index: 1000;
}
ul.list-thumb.pc.ranking li div.left .inner.new .label-icon p{
  display: inline-block;
  height: 22px;
  position: relative;
  color: #FFF;
  font-size:16px;
  font-size:1.6rem;
  font-weight: 700;
  line-height:1.2;
  font-style:italic;
  padding: 2px 4px 0 12px;
}
ul.list-thumb.pc.ranking li div.left .inner.new .label-icon p:before{
  border-color: #f83f3f transparent #f83f3f #f83f3f;
}
ul.list-thumb.pc.ranking li div.left .inner.new .label-icon p:after{
  border-color: transparent #831515 transparent transparent;
}

ul.list-thumb.pc.ranking .insert-ad{
  margin-top:40px;
}

.ranking h1.title{
  font-size: 20px;
  font-size: 2.0rem;
  font-weight: 700;
  margin: .5em;
  text-align:center;
}

/*RANKING TAB(for SP)*/
.ranking-page-tab.sp{
  margin-left:10px;
  margin-right:10px;
  overflow: hidden;
}
.ranking-page-tab.sp ul li a{
  font-size:14px;
  font-size:1.4rem;
  font-weight: 700;
}
.ranking-page-tab.sp ul li a.current::after{
  width: 50%;
  height: 3px;
}


/*RANKING LIST(for SP)*/
#category-ranking-loading.sp img{
  width: 25%;
}
ul.list-ranking-sp{
  width: 100%;
  display:block;
  margin-bottom: 20px;
  padding:0 10px;
  counter-reset: ranking;
}

ul.list-ranking-sp li{
  position:relative;
  display: block;
  font-size: 12px;
  font-size: 1.2rem;
  border-bottom: 1px solid #E0E0E0;
}
ul.list-ranking-sp li.loading,
ul.list-ranking-sp li.error{
  padding: 0;
  border: 0;
  text-align: center;
}
ul.list-ranking-sp li.error{
  padding-top: 20px;
}
ul.list-ranking-sp li.loading img{
  width: 25%;
}
ul.list-ranking-sp li .icon{
  width: 45px;
}
ul.list-ranking-sp li .icon:before{
  display: block;
  width: 25px;
  height: 25px;
  margin:0 auto;
  counter-increment: ranking;
  content: counter(ranking);
  font-size: 16px;
  font-size: 1.6rem;
  color: #B5B5B5;
  text-align:center;
  line-height:2.4rem;
  border: 1px solid #B5B5B5;
  border-radius:50%;
}
ul.list-ranking-sp li.loading .icon:before,
ul.list-ranking-sp li.error .icon:before{
  display: none;
}

ul.list-ranking-sp li:first-child .icon:before{
  content:'';
  background:url(/common/images/bunshun/v1/ranking/icon_rank1.png) no-repeat center center ;
  background-size:100%;
  width:28px;
  height:28px;
  border: 0;
}
ul.list-ranking-sp li:nth-child(2) .icon:before{
  content:'';
  background:url(/common/images/bunshun/v1/ranking/icon_rank2.png) no-repeat center center ;
  background-size:100%;
  width:28px;
  height:28px;
  border:0;
}
ul.list-ranking-sp li:nth-child(3) .icon:before{
  content:'';
  background:url(/common/images/bunshun/v1/ranking/icon_rank3.png) no-repeat center center ;
  background-size:100%;
  width:28px;
  height:28px;
  border:0;
}
ul.list-ranking-sp li:nth-child(n+10) .icon:before{
  font-size: 14px;
  font-size: 1.4rem;
}

ul.list-ranking-sp li:nth-child(12){
  border-top:1px solid #E0E0E0;
}

ul.list-ranking-sp li a{
  padding:20px 0 20px 0;
  display:block;
  min-height: 110px;
  align-items: center;
  color: #333;
  overflow: hidden;
}

ul.list-ranking-sp li .left{
  width:100px;
  min-height:62.5px;
  background-color:#fff;
  float:none;
  margin-right: 10px;
}

ul.list-ranking-sp li.thumb-middle .left{
  width:calc(100vw * .32);
  height: calc(100vw * .32 * .62);
}

ul.list-ranking-sp li .left .inner{
  width: 100px;
  height:62.5px;
  position: relative;
}

/*)*/

ul.list-ranking-sp li.thumb-middle .left .inner{
  width:calc(100vw * .32);
  height:calc(100vw * .32 * .62);
}
ul.list-ranking-sp li .left .inner .label-icon p:before{
  content: "";
  height: inherit;
  position: absolute;
  top: 0;
  left: 100%;
  border: 7px;
  border-style: solid;
}
ul.list-ranking-sp li .left .inner .label-icon p:after{
  content: "";
  position: absolute;
  top: 100%;
  right: calc(100% - 5px);
  border-style: solid;
  border-width: 0 5px 4px 0;
}
/*ul.list-ranking-sp li .left .inner.scoop:before*/
ul.list-ranking-sp li .left .inner.scoop .label-icon{
  height: 14px;
  position: absolute;
  top: -10px;
  left: -5px;
  background: #ffed23;
  z-index: 1;
}
ul.list-ranking-sp li .left .inner.scoop .label-icon p{
  height: 14px;
  position: relative;
  color: #333;
  font-weight: 700;
  line-height:15px;
  font-style:italic;
  padding: 0 2px 0 10px;
  vertical-align: top;
  font-size: 10px;
  font-size: 1.0rem;
}
ul.list-ranking-sp li .left .inner.scoop .label-icon p:before{
  border-color: #ffed23 transparent #ffed23 #ffed23;
}
ul.list-ranking-sp li .left .inner.scoop .label-icon p:after{
  border-color: transparent #8d8105 transparent transparent;
}

/*ul.list-ranking-sp li .left .inner.new:before*/
ul.list-ranking-sp li .left .inner.new .label-icon{
  height: 14px;
  position: absolute;
  top: -10px;
  left: -5px;
  background: #f83f3f;
  z-index: 1;
}
ul.list-ranking-sp li .left .inner.new .label-icon p{
  height: 14px;
  position: relative;
  color: #FFF;
  font-weight: 700;
  line-height:14px;
  font-style:italic;
  padding: 0 2px 0 10px;
  vertical-align: top;
  font-size: 10px;
  font-size: 1.0rem;
}
ul.list-ranking-sp li .left .inner.new .label-icon p:before{
  border-color: #f83f3f transparent #f83f3f #f83f3f;
}
ul.list-ranking-sp li .left .inner.new .label-icon p:after{
  border-color: transparent #831515 transparent transparent;
}

ul.list-ranking-sp li .left .inner img{
  display:block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
}

/*)*/
ul.list-ranking-sp li .right{
  width:calc(100vw - 175px);
  position:relative;
}

ul.list-ranking-sp li.thumb-middle .right{
  width:calc(100vw * .61 - 45px);
}


ul.list-ranking-sp li .right .title{
  display: block;
  font-size: 16px;
  font-size: 1.6rem;
  line-height: 20px;
  line-height: 2.0rem;
  font-weight: 700;
}

ul.list-ranking-sp li .right .list-author-icon{
  display: inline-block;
  width: 15px;
  height: 15px;
  float: left;
  margin-right: 5px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%
}

ul.list-ranking-sp .right .cat-box{
  float: left;
  width: 65%;
  display: inline-block;
}
ul.list-ranking-sp .right .cat{
  padding-right: 10px;
  display: inline-block;
  position: relative;
  line-height: 15px;
  font-size: 10px;
  font-size: 1.0rem;
  color: #7a7a7a;
}

ul.list-ranking-sp .right .date{
  float: right;
  width: 35%;
  display: inline-block;
  font-size: 10px;
  font-size: 1.0rem;
  color: #7a7a7a;
  line-height: 15px;
  text-align: right;
}



/*)*/

ul.list-ranking-sp li div.icon p.fbtw-share-num{
  display: block;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
  font-size: 1.2rem;
  color:#7a7a7a;
}
ul.list-ranking-sp li div.icon p.fbtw-share-num:after{
  content:'';
  margin: 0 auto;
  display: block;
  background:url(/common/images/bunshun/v1/ranking/share-icon@2x.png) no-repeat;
  background-size:100%;
width: 27px;
height: 18.5px;
}
ul.list-ranking-sp li div.icon p.fbtw-share-num span.box{
  display: inline-block;
  margin: 5px 0 8px;
  padding: 0 1px;
  position: relative;
  line-height: 20px;
  text-align: center;
  font-size: 10px;
  color: #7a7a7a;
  border: solid 1px #d8d8d8;
}
ul.list-ranking-sp li div.icon p.fbtw-share-num span.box:before,
ul.list-ranking-sp li div.icon p.fbtw-share-num span.box:after{
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  width: 0;
  height: 0;
  margin: auto;
}
ul.list-ranking-sp li div.icon p.fbtw-share-num span.box:before{
  bottom: -5px;
  border-style: solid;
  border-color: #d8d8d8 transparent transparent transparent;
  border-width: 5px 5px 0 5px;
}
ul.list-ranking-sp li div.icon p.fbtw-share-num span.box:after{
  bottom: -4px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
  border-width: 5px 5px 0 5px;
  z-index: 10;
}

/* RANKING COMMENT NUM(for SP) */
ul.list-ranking-sp li div.icon p.comment-num{
  display: block;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
  font-size: 1.2rem;
  color: #7a7a7a;
  position:relative;
  padding-bottom:12px;
}
ul.list-ranking-sp li div.icon p.comment-num::after{
  content:"コメント";
  display:block;
  font-size:9px;
  letter-spacing:-1px;
  position:absolute;
  bottom:0;
  left:4px;
  color:#444;
}
ul.list-ranking-sp li div.icon p.comment-num span.box{
  display: inline-block;
  margin: 5px 0 8px;
  padding: 0 2px;
  position: relative;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  color: #7a7a7a;
  border: solid 1px #d8d8d8;
}
ul.list-ranking-sp li div.icon p.comment-num span.box:before,
ul.list-ranking-sp li div.icon p.comment-num span.box:after{
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  width: 0;
  height: 0;
  margin: auto;
}
ul.list-ranking-sp li div.icon p.comment-num span.box:before{
  bottom: -5px;
  border-style: solid;
  border-color: #d8d8d8 transparent transparent transparent;
  border-width: 5px 5px 0 5px;
}
ul.list-ranking-sp li div.icon p.comment-num span.box:after{
  bottom: -4px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
  border-width: 5px 5px 0 5px;
  z-index: 10;
}

ul.list-ranking-sp .insert-ad{
  margin:20px auto;
}


/*RANKING WIDGET*/
/*RANKING TAB(WIDGET)*/
.ranking-page-tab.widget{
  overflow: hidden;
}
.ranking-page-tab.widget ul li.tab{
  float: left;
  width: calc(100% / 3);
  padding: 2.8% 0;
  position: relative;
  text-align: center;
  cursor:pointer;
  font-size: 12px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #b2b2b2;
}
.ranking-page-tab.widget ul li.tab.is-selected{
  color: #f72b2b;
}
.ranking-page-tab.widget ul li.tab.is-selected::after{
  content: "";
  width: 70%;
  height: 4px;
  position: absolute;
  margin: 0 auto;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f83f3f;
  border-radius: 3px;
}
.leafs-on .ranking-page-tab.widget ul li.tab{
  width: calc(100% / 4);
}
.leafs-on .ranking-page-tab.widget ul li.tab:nth-child(4),.leafs-on .ranking-page-tab.widget ul li.tab:nth-child(6){
  display: none;
}

/*RANKING TAB(for SP)*/
.ranking-page-tab.sp.widget ul li.tab{
  padding: 1.8% 0;
  font-size: 14px;
  font-size: 1.4rem;
  font-weight: 700;
}


/*RANKING LIST(WIDGET)*/
.list-carousel.sp{
  padding:0 10px;
}
[v-cloak] {
  display: none;
}
ul.list-ranking-widget{
  display:block;
  margin-bottom: 12px;
  width:300px;
  counter-reset: ranking;
}

ul.list-ranking-widget li{
  position:relative;
  display: block;
  font-size: 12px;
  font-size: 1.2rem;
  border-bottom: 1px solid #E0E0E0;
  overflow-wrap: break-word;
}
ul.list-ranking-widget li.loading{
 text-align: center;
 border-bottom: none;
}
ul.list-ranking-widget li .icon{
  width: 45px;
}
ul.list-ranking-widget li .icon:before{
  display: block;
  width: 25px;
  height: 25px;
  margin: 0 auto;
  counter-increment: ranking;
  content: counter(ranking);
  font-size: 14px;
  font-size: 1.4rem;
  color: #B5B5B5;
  text-align:center;
  line-height:2.5rem;
  border-radius:50%;
}

ul.list-ranking-widget li:first-child .icon:before{
  content:'';
  background:url(/common/images/bunshun/v1/ranking/icon_rank1.png) no-repeat center center ;
  background-size:100%;
}
ul.list-ranking-widget li:nth-child(2) .icon:before{
  content:'';
  background:url(/common/images/bunshun/v1/ranking/icon_rank2.png) no-repeat center center ;
  background-size:100%;
}
ul.list-ranking-widget li:nth-child(3) .icon:before{
  content:'';
  background:url(/common/images/bunshun/v1/ranking/icon_rank3.png) no-repeat center center ;
  background-size:100%;
}
ul.list-ranking-widget li:nth-child(n+4) .icon:before{
  background-color:#fff;
  border:1px solid #B5B5B5;
}

ul.list-ranking-widget li a{
  padding: 10px 0;
  display:block;
  min-height: 100px;
  align-items: center;
  color: #333;
}
ul.list-ranking-widget.sp li a{
  padding:10px 0 10px 0;
}

ul.list-ranking-widget li .left{
  width: 88px;
  min-height: 49.5px;
  background-color:#fff;
  float:none;
  margin-right: 10px;
}

ul.list-ranking-widget li .left .inner{
  width: 88px;
  height:49.5px;
  position: relative;
}
ul.list-ranking-widget li .left .inner .image{
  overflow: hidden;
  position:relative;
  height: 100%;
}
/*スマホ下部のSPECIAL枠に、ピノPRのみSCOOP!帯をつける*/
ul.sp-list-thumb li.scoop.pino a,
ul.sp-list-thumb li.scoop.pino div.left{
  overflow:visible;
}

ul.list-ranking-widget li .left .inner .image .bg-blur{
  position: absolute;
  width: 120%;
  height: 120%;
  top: 0px;
  right: 0px;
  bottom: 0;
  left: -10px;
  margin: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-filter: blur(4px);
  -moz-filter: blur(4px);
  -o-filter: blur(4px);
  -ms-filter: blur(4px);
  filter: blur(4px);
  z-index: 1;
  opacity: .5;
}


ul.list-ranking-widget li .left .inner .label-icon p:before,
ul.sp-list-thumb li .left.scoop.pino .label-icon p:before{
  content: "";
  height: inherit;
  position: absolute;
  top: 0;
  left: 100%;
  border: 7px;
  border-style: solid;
}
ul.list-ranking-widget li .left .inner .label-icon p:after,
ul.sp-list-thumb li .left.scoop.pino .label-icon p:after{
  content: "";
  position: absolute;
  top: 100%;
  right: calc(100% - 5px);
  border-style: solid;
  border-width: 0 5px 4px 0;
}
/*ul.list-ranking-widget li .left .inner.scoop:before*/
ul.list-ranking-widget li .left .inner.scoop .label-icon,
ul.sp-list-thumb li .left.scoop.pino .label-icon{
  height: 14px;
  position: absolute;
  top: -10px;
  left: -5px;
  background: #ffed23;
  z-index: 10;
}
ul.list-ranking-widget li .left .inner.scoop .label-icon p,
ul.sp-list-thumb li .left.scoop.pino .label-icon p{
  height: 14px;
  position: relative;
  color: #333;
  font-weight: 700;
  line-height:15px;
  font-style:italic;
  padding: 0 2px 0 10px;
  vertical-align: top;
  font-size: 10px;
  font-size: 1.0rem;
}
ul.list-ranking-widget li .left .inner.scoop .label-icon p:before,
ul.sp-list-thumb li .left.scoop.pino .label-icon p:before{
  border-color: #ffed23 transparent #ffed23 #ffed23;
}
ul.list-ranking-widget li .left .inner.scoop .label-icon p:after,
ul.sp-list-thumb li .left.scoop.pino .label-icon p:after{
  border-color: transparent #8d8105 transparent transparent;
}
/*ピノPRのみSCOOP!帯をつける　ここまで*/

/*ul.list-ranking-widget li .left .inner.new:before*/
ul.list-ranking-widget li .left .inner.new .label-icon{
  height: 14px;
  position: absolute;
  top: -10px;
  left: -5px;
  background: #f83f3f;
  z-index: 10;
}
ul.list-ranking-widget li .left .inner.new .label-icon p{
  height: 14px;
  position: relative;
  color: #FFF;
  font-weight: 700;
  line-height:14px;
  font-style:italic;
  padding: 0 3px 0 10px;
  vertical-align: top;
  font-size: 10px;
  font-size: 1.0rem;
}
ul.list-ranking-widget li .left .inner.new .label-icon p:before{
  border-color: #f83f3f transparent #f83f3f #f83f3f;
}
ul.list-ranking-widget li .left .inner.new .label-icon p:after{
  border-color: transparent #831515 transparent transparent;
}

ul.list-ranking-widget li .left .inner img{
  display:block;
  position: relative;
  width: 100%;
}
ul.list-ranking-widget li .left .inner img.fixed-height{
  display: block;
  margin: 0 auto;
  position: relative;
  width: auto;
  height: 62.7px;
  z-index: 2;
}

/*)*/
ul.list-ranking-widget li .right{
  width: 157px;
  position:relative;
  opacity:1;
}
ul.list-ranking-widget li .right.second{
  width: 260px;
  }

ul.list-ranking-widget li .right .title{
  padding-top:0;
  display: block;
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 20px;
  line-height: 2.0rem;
  font-weight: 700;
}

ul.list-ranking-widget li .right .inner{
  opacity:1;
}

/*)*/

ul.list-ranking-widget li div.icon .fbtwshare-align-right{
  text-align: center;
}
ul.list-ranking-widget li div.icon .fbtwshare-align-right:after{
  content:'';
  display: block;
  background:url(/common/images/bunshun/v1/ranking/share-icon@2x.png) no-repeat;
  background-size:100%;
  width: 27px;
  height: 18.5px;
  margin: 0 auto;
}
ul.list-ranking-widget li div.icon span.fbtw-share-num{
  display: inline-block;
  margin: 5px 0 8px;
  padding: 0 1px;
  position: relative;
  line-height: 20px;
  text-align: center;
  font-size: 10px;
  color: #7a7a7a;
  border: solid 1px #d8d8d8;
}
ul.list-ranking-widget li div.icon span.fbtw-share-num:before,
ul.list-ranking-widget li div.icon span.fbtw-share-num:after{
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  width: 0;
  height: 0;
  margin: auto;
}
ul.list-ranking-widget li div.icon span.fbtw-share-num:before{
  bottom: -5px;
  border-style: solid;
  border-color: #d8d8d8 transparent transparent transparent;
  border-width: 5px 5px 0 5px;
}
ul.list-ranking-widget li div.icon span.fbtw-share-num:after{
  bottom: -4px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
  border-width: 5px 5px 0 5px;
  z-index: 10;
}
ul.list-ranking-widget li div.icon .comment-align-right{
  text-align:center;
  position:relative;
  display:block;
  padding-bottom:7px;
}
ul.list-ranking-widget li div.icon .comment-align-right::after{
  content:"コメント";
  display:block;
  position:absolute;
  bottom:0;
  right:4px;
  font-size: 9px;
  color:#444;
}
ul.list-ranking-widget li div.icon span.comment-num{
  display: inline-block;
  margin: 5px 0 8px;
  padding: 0 2px;
  position: relative;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  color: #7a7a7a;
  border: solid 1px #d8d8d8;
}
ul.list-ranking-widget li div.icon span.comment-num:before,
ul.list-ranking-widget li div.icon span.comment-num:after{
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  width: 0;
  height: 0;
  margin: auto;
}
ul.list-ranking-widget li div.icon span.comment-num:before{
  bottom: -5px;
  border-style: solid;
  border-color: #d8d8d8 transparent transparent transparent;
  border-width: 5px 5px 0 5px;
}
ul.list-ranking-widget li div.icon span.comment-num:after{
  bottom: -4px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
  border-width: 5px 5px 0 5px;
  z-index: 10;
}

.author-widget .list-author{
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.author-widget .list-author li{
  float: left;
  width: 16vw;
  text-align: center;
}
.author-widget .list-author-link{
  display: block;
}
.author-widget .list-author-icon{
  width: 16vw;
  height: 16vw;
  display: inline-block;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
}
.author-widget .list-author-name{
  padding-top: 3%;
  font-size: 12px;
  font-size: 1.2rem;
}
.author-widget .list-author-job{
  padding-top: 1%;
  font-size: 8px;
  font-size: .8rem;
  color: #7a7a7a;
}

.ranking-widget.sp .btn.show-more{
  margin:0 auto;
}
.ranking-widget .list-carousel{
  margin-bottom: 14px;
}
.ranking-widget .flickity-viewport{
  height: 100%!important;
}
.flickity-viewport{
  transition: height .2s linear .3s;
}

/*For SP*/
.ranking-widget.sp{
  margin-top:2.4rem;
  margin-bottom:2.4rem;
  overflow:hidden;
}
.ranking-widget.sp .list-carousel.sp{
  overflow:hidden;
}
.ranking-page-tab.widget.sp{
  margin: 0 10px 10px 10px;
}

.list-carousel.sp ul.list-ranking-widget{
  width:auto;
}
.list-carousel.sp ul.list-ranking-widget li .right{
  width: calc(100vw - 163px);
}
.list-carousel.sp ul.list-ranking-widget li .right.second{
  width: calc(100vw - 55px);
}
.ranking-banner {
  margin-top: 20px;
}
.ranking-banner img{
  width: 100%;
}



/*block-feature*/
.block-feature{
  background: #FFF;
  margin-bottom: 30px;
}
/*
.block-feature .img-header{
  width: 100%;
  height: 200px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  z-index: 1;
  text-align: center;
}
.block-feature .img-header:after{
  content: ' ';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.4);
  z-index: -1;
}

.block-feature .img-header span.series{
  padding: 25px 0 5px 0;
  margin: 0px auto 25px auto;
  border-bottom: 3px solid rgba(255,255,255,.3);
  text-align: center;
  display: inline-block;
  color: #FFF;
  font-size: 14px;
  font-size: 1.4rem;
}
.block-feature .img-header div.title{
  display: block;
  text-align: center;
  color: #FFF;
  padding: 0;
  margin: 0 25px 15px 25px;
  font-size: 18px;
  font-size: 1.8rem;
  text-shadow: 1px 1px 1px #000;
  min-height: 50px;
  position: relative;
}
.block-feature .img-header div.title span{
  display: block;
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
}
.block-feature .img-header span.subtitle{
  display: block;
  text-align: center;
  color: #FFF;
  padding: 0;
  margin: 0 25px 0px 25px;
  font-size: 14px;
  font-size: 1.4rem;
}
*/
.block-feature p.desc{
  padding: 0 20px 24px 20px;
  font-size: 16px;
  font-size: 1.6rem;
  line-height: 1.4;
}
.block-feature .latest-list{
  padding: 0 20px;
}
.block-feature .latest-list span{
  display: block;
  color: #fe3939;
  font-size: 12px;
  font-size: 1.2rem;
  margin-bottom:5px;
}
.block-feature .latest-list ul{
  padding: 0;
  margin: 0;
}
.block-feature .latest-list ul li{
  list-style: none;
}
.block-feature .latest-list ul li a{
  font-size: 16px;
  font-size: 1.6rem;
  line-height:1.4;
  color:#7a7a7a;
}

.cinema-chart{
/*  margin: 0 20px;*/
}
.list-cinema-review li{
  display: block;
  padding: 2.4rem;
  margin-bottom: 2.4rem;
  border: 1px solid #ddd;
}
.list-cinema-review li h5{
  font-size: 20px;
  font-size: 2.0rem;
  margin-bottom: 2.0rem;
}
.list-cinema-review li p{
  margin-bottom: 0;
  line-height: 1.5;
}
.list-cinema-review li p span.star{
  color: #f72b2b;
  margin-right: 10px;
}
.cinema-chart .notes ul li{
  text-align: right;
  font-size: 12px;
  font-size: 1.2rem;
  line-height: 1.5;
}
.cinema-chart .notes ul li span.star{
  color: #f72b2b;
  margin-left: 10px;
}

table.header-bg,table.border{
  width: 100%;
}
table th{
  font-weight: 400;
}
table.header-bg th{
  background: #e9e9e9;
}
table.header-bg th,table.header-bg td{
  border: 1px solid #ddd;
  padding: .64rem 1.28rem;
}

table.border th,table.border td{
  border-bottom: 1px solid #ddd;
  padding: .64rem 1.28rem;	
}

ul.list-text li{
  padding:20px 0;
  border-bottom:1px solid #ddd;
}
ul.list-text li .date{
  display:block;
  margin-bottom:15px;
  font-size:14px;
  font-size:1.4rem;
}
ul.list-text .title{
  font-size:20px;
  font-size:2.0rem;
  font-weight:700;
}

p.list-alert{
  margin:40px 10px;
}




/*RECOMMEND LIST(SP)*/
.recommend-articles.sp{
  margin:10px 10px 0 10px;
}
.recommend-articles.sp .title{
  font-size:20px;
  font-size:2.0rem;
  margin-bottom:15px;
}
.recommend-articles.sp ul.list-thumb{
  background-color:transparent;
  clear:both;
}
.recommend-articles.sp ul.list-thumb li{
  float:left;
  width: 48.5%;
  margin:0 3% 20px 0;
  padding:0;
  border-bottom:none;
}
.recommend-articles.sp ul.list-thumb li:nth-child(2n){
  margin-right:0;
}
.recommend-articles.sp ul.list-thumb li:nth-child(2n+1){
  clear:both;
}
.recommend-articles.sp ul.list-thumb li a{
  padding-top:0;
  padding-bottom:0;
  min-height:auto;
}
.recommend-articles.sp ul.list-thumb li div.image{
  margin-bottom:8px;
  padding-top:62.5%;
  position:relative;
  overflow:hidden;
  background: #262626;
}
.recommend-articles.sp ul.list-thumb li div.image img.normal{
  width:100%;
  margin:auto 0;
  position:absolute;
  top:0;
  bottom:0;
}
.recommend-articles.sp ul.list-thumb li div.image img.fixed-height{
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}
.recommend-articles.sp ul.list-thumb li div.image .bg-blur{
  position: absolute;
  width: 120%;
  height: 120%;
  top: 0px;
  right: 0px;
  bottom: 0;
  left: -28px;
  margin: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  -webkit-filter: blur(8px);
  -moz-filter: blur(8px);
  -o-filter: blur(8px);
  -ms-filter: blur(8px);
  filter: blur(8px);
  z-index: 1;
  opacity: .5;
}
.recommend-articles.sp ul.list-thumb li div.title{
  margin-bottom:0;
  font-size:14px;
  font-size:1.4rem;
  line-height:1.4;
}
.recommend-articles.sp ul.list-thumb li div.title h4{
  font-weight: 500;
}
.recommend-articles.sp ul.list-thumb li div.title .text-header{
  position:relative;
}
.recommend-articles.sp ul.list-thumb li div.title .pr{
  margin: 3px 0 0 0;
  font-size: 10px;
  line-height: 1.5;
  font-weight: normal;
  overflow: hidden;
  color: #AAA;
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;
  height: 15px;
}
.recommend-articles.sp ul.list-thumb li a .cat{
  padding:0;
  margin:0;
  position:absolute;
}


/*SOCIAL FOLLOW BAR(PC)*/
ul.social-follow-bar{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
}
ul.social-follow-bar li{
  display:block;
  width:145px;
  height:35px;
  margin-bottom:10px;
}
ul.social-follow-bar li a{
  display:block;
  width:100%;
  height:100%;
  background-repeat:no-repeat;
  background-position:center center;
  background-size:300px;
  position:relative;
  color: #fff;
  font-size: 15px;
  font-size: 1.5rem;
  border-radius: 6px;
  text-align: center;
}
ul.social-follow-bar li a.tw{
  background: #000;
}
ul.social-follow-bar li a.mm{
  background: #f72c2b;
}
ul.social-follow-bar li a.fb{
  background: #1a76f2;
}
ul.social-follow-bar li a.yt{
  background: #fff;
  color: #FF0000;
  border: solid 2px #FF0000;
}
ul.social-follow-bar li a.tw::before{
  content: '';
  display: inline-block;
  width: 19px;
  height: 23px;
  position: relative;
  top: 8px;
  left: -20px;
  background-image:url(/common/images/bunshun/v1/common/socials/icon_x_white.png);
  background-size: 19px auto;
  background-repeat: no-repeat;
}
ul.social-follow-bar li a.mm::before{
  content: '';
  display: inline-block;
  width: 20px;
  height: 23px;
  position: relative;
  top: 10px;
  left: -9px;
  background-image:url(/common/images/bunshun/v1/common/socials/icon_mail_white.png);
  background-size: 20px auto;
  background-repeat: no-repeat;
}
ul.social-follow-bar li a.fb::before{
  content: '';
  display: inline-block;
  width: 17px;
  height: 23px;
  position: relative;
  top: 7px;
  left: -20px;
  background-image:url(/common/images/bunshun/v1/common/socials/icon_fb_white.png);
  background-size: 12px auto;
  background-repeat: no-repeat;
}
ul.social-follow-bar li a.yt::before{
  content: '';
  display: inline-block;
  width: 22px;
  height: 22px;
  position: relative;
  top: 5px;
  left: -4px;
  background-image:url(/common/images/bunshun/v1/common/socials/youtube_social_circle_red.png);
  background-size: 22px auto;
  background-repeat: no-repeat;
}

/*SOCIAL FOLLOW BAR(SP)*/
.social-follow-bar-block{
  margin: 2.4rem 10px;
  border: 5px solid #e9e9e9;
  padding: 20px;
}
.social-follow-bar-block .block-header{
  text-align:center;
}

ul.social-follow-bar.sp {
  justify-content: space-evenly;
}
ul.social-follow-bar.sp li{
  display:block;
  max-width:375px;
  height:46px;
  margin: 1px 0 0 0;
  width: auto;
}
ul.social-follow-bar.sp li a{
  display:block;
  width: 145px;
  height:38px;
  position:relative;
  border-radius:6px;
  line-height:40px;
  font-weight:bold;
  color: #fff;
}
ul.social-follow-bar.sp li a.yt{
  background: #fff;
  color: #FF0000;
  border: solid 2px #FF0000;
  line-height: 36px;
}
ul.social-follow-bar.sp li a.tw::before{
  content: '';
  display: inline-block;
  width: 18px;
  height: 19px;
  position: relative;
  top: 4px;
  left: -20px;
  background-image:url(/common/images/bunshun/v1/common/socials/icon_x_white.png);
  background-size: 19px auto;
  background-repeat: no-repeat;
}
ul.social-follow-bar.sp li a.mm::before{
  width: 20px;
  height: 23px;
  top: 10px;
  left: -9px;
  background-size: 20px auto;
}
ul.social-follow-bar.sp li a.fb::before{
  width: 17px;
  height: 22px;
  top: 6px;
  left: -18px;
  background-size: 12px auto;
}
ul.social-follow-bar.sp li a.yt::before{
  width: 22px;
  height: 23px;
  top: 6px;
  left: -8px;
  background-size: 22px auto;
}

/*NEW PAGINATION*/
/*--------------------------------------------
 pagination & prev,next
----------------------------------------------*/
.pagination.black{
  width: 100%;
  margin:20px 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
}
.pagination.black.article{
  width: 750px;
  margin-left:auto;
  margin-right:auto;
  margin-top: 0;
}
.pagination.black .page-num{
  max-width: 100%;
  min-height: 38px;
  max-height: 38px;
  margin:20px 0;
}
.pagination.black .page-num a{
   display: block;
  background: #fff;
  color: #000;
  text-align: center;
  margin: 0 5px;
  height: 38px;
  line-height: 33px;
  width: 38px;
  border: 1px solid #000;
  border-radius:4px;
  color: #414141;
  font-size: 18px;
  font-size: 1.8rem;
}
.pagination.black .page-num a:hover{
  background: #f2f2f2;
}
.pagination.black .page-num span.ellipsis{
  width: 38px;
  color: #414141;
  font-size: 16px;
  font-size: 1.6rem;
  text-align: center;
  margin: 0;
  height: 38px;
  line-height: 33px;
}

.pagination.black .page-num a.active{
  background: #000;
  border-color:#000;
  color: #fff;
  cursor: default;
  pointer-events: none;
}
.pagination.black .page-num a.prev{
  width: 38px;
  background: #FFF;
  position: absolute;
  left:0;
  border:0;
}
.pagination.black .page-num a.prev:after{
  content: "";
  border: 2px solid #b1b1b1;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%) rotate(135deg);
  -moz-transform: translateY(-50%) rotate(135deg);
  -webkit-transform: translateY(-50%) rotate(135deg);
  -o-transform: translateY(-50%) rotate(135deg);
  -ms-transform: translateY(-50%) rotate(135deg);
  border-top: medium none;
  border-left: medium none;
}
.pagination.black .page-num a.next{
  width: 38px;
  background: #FFF;
  position: absolute;
  top:auto;
  right: 0;
  border:0;
}
.pagination.black .page-num a.next:after{
  content: "";
  border: 2px solid #b1b1b1;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: auto;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%) rotate(-45deg);
  -moz-transform: translateY(-50%) rotate(-45deg);
  -webkit-transform: translateY(-50%) rotate(-45deg);
  -o-transform: translateY(-50%) rotate(-45deg);
  -ms-transform: translateY(-50%) rotate(-45deg);
  border-top: medium none;
  border-left: medium none;
}
.pagination.black.article .page-num a:after{
  bottom:auto;
}

/*SD Adjuster*/
.pagination.black.sp{
  width: calc(100vw - 10px);
  margin-left: auto;
  margin-right: auto;
}
.pagination.black.sp.article{
  margin-top:0;
}
.pagination.black.sp .page-num a{
  line-height:38px !important;
}
.pagination.black.sp .page-num a.prev, .pagination.black.sp .page-num a.next{
  width: 30px !important;
}
.pagination.black.sp .page-num a.prev:after{
  left:10px;
}
.pagination.black.sp .page-num a.next:after{
  right:10px;
}
.pagination.black.sp .page-num span.ellipsis{
  width: 20px !important;
  margin:0;
}

/* namikoshi ONLINE_DEV-1108 */
.pagination_ab.black{
  width: 100%;
  margin:20px 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  display: none;
}


/*PC YakyuSchool*/
.yakyu_school.block{
  margin-top: 40px;
}

/*SD YakyuSchool*/
.yakyu_school.block.sp{
  width: calc(100vw - 20px);
  margin: 20px auto;
}

/*SD stand-out-ticker*/
#stand-out-ticker{
  height: 1em;
  padding: 2% 0 2% 0;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-sizing: content-box;
}
#stand-out-ticker .stand-out-ticker-txt{
  float: left;
  width: 12%;
  margin: 0 2% 0 2%;
  text-align: center;
}
#stand-out-ticker .stand-out-ticker-txt span{
  padding: .3em .6em .2em .6em;
  display: block;
  font-size: 10px;
  font-size: 1.0rem;
  background: #ffed23;
}
#stand-out-ticker .stand-out-ticker-main{
  float: left;
  width: 82%;
  height: inherit;
  position: relative;
  overflow: hidden;
}
#stand-out-ticker .stand-out-ticker-main li{
  width: inherit;
  white-space: nowrap;
}
#stand-out-ticker .stand-out-ticker-main li a{
  display: block;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  font-size: 12px;
  font-size: 1.2rem;
  line-height: 16px;
  line-height: 1.6rem;
  color: #2379ca;
}

/* -- Shukan Key Visual (2023.10追加) -- */
.shukan-kv {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/common/images/bunshun/v1/shukan/kv_bg_sp.webp');
  padding: 40px 10px 44px;
}
.shukan-kv_logo {
  width: 90%;
  max-width: 350px;
  line-height: 0;
  margin: 0 auto;
}
.shukan-kv_logo-img {
  width: 100%;
}
.shukan-kv_text {
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-top: 10px;
}
.shukan-kv_text span {
  font-size: 2.1rem;
  color: #FFED23;
}
.shukan-kv_button {
  text-align: center;
  margin-top: 16px;
}
.shukan-kv_link {
  display: inline-block;
  background-color: var(--color-shukan-primary);
  padding: 0.95em 2.3em;
  border-radius: 9999px;
  border: 2px solid #fff;
}
.shukan-kv_link span {
  color: #fff;
  font-size: 2.2rem;
  font-weight: bold;
}

/* -- Gekkan Key Visual (2018.11追加) -- */
/* -- Gekkan Key Visual (2021.05変更) -- */
#gekkan-kv{
  margin: 0 auto;
  padding: 0.5% 0 0 0;
  background-image: url(/common/images/bunshun/v1/gekkan/sp/kv_bg_note_new.png);
  background-color: transparent;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100%;
}
#gekkan-kv .logo{
  width: 56%;
  margin: 0 auto;
  padding: 2%;
}
#gekkan-kv .explain{
  width: 54%;
  margin: 0 auto 1%;
}
#gekkan-kv .social{
  text-align: center;
}
#gekkan-kv .social a{
  width: 35%;
  padding: 1.5% 0;
  display: inline-block;
  border-radius: 3px;
  font-size: 10px;
  font-size: 1.0rem;
  color: #fff;
}
#gekkan-kv .social .fb{
  background-color: #3b5998;
}
#gekkan-kv .social .fb::before{
  content: "";
  width: 6px;
  height: 12px;
  margin-right: 5px;
  display: inline-block;
  background-image: url(/common/images/bunshun/v1/gekkan/fb.png);
  background-color: transparent;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 100%;
  vertical-align: middle;
}
#gekkan-kv .social .tw{
  background-color: #55acee;
}
#gekkan-kv .social .tw::before{
  content: "";
  width: 15px;
  height: 12px;
  margin-right: 5px;
  display: inline-block;
  background-image: url(/common/images/bunshun/v1/gekkan/tw.png);
  background-color: transparent;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 100%;
  vertical-align: middle;
}
#gekkan-kv .social .bungeishunju-btn{
  width: 40%;
  padding: 0;
}

#gekkan-latest-issue{
  margin: 15px 10px;
  display: flex;
  align-items: stretch;
}
#gekkan-latest-issue .cover{
  width: 120px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  line-height: 0;
  border: 1px solid #ddd;
}
#gekkan-latest-issue .explain{
  width: calc(100% - 130px);
  display: flex;
  flex-direction: column;
}
#gekkan-latest-issue .explain .subtitle{
  margin-bottom: 1.5%;
  font-size: 10px;
  font-size: 1.0rem;
  color: #7e7e7e;
}
#gekkan-latest-issue .explain .title{
  margin-bottom: 1.5%;
  line-height: 20px;
  line-height: 2.0rem;
}
#gekkan-latest-issue .explain .notes{
  font-size: 10px;
  font-size: 1.0rem;
  color: #7e7e7e;
}
#gekkan-latest-issue .explain .link{
  margin-top: auto;
  overflow: hidden;
}
#gekkan-latest-issue .explain .link a{
  width: 49%;
  padding: 5% 0;
  display: block;
  border: solid 2px #aeaeae;
  text-align: center;
  font-size: 12px;
  font-size: 1.2rem;
  color: #2379ca;
}
#gekkan-latest-issue .explain .link a span{
  text-decoration: none;
  padding-bottom: .05em;
  border-bottom: 1px dotted #2379ca;
}
#gekkan-latest-issue .explain .link a.contents{
  float: left;
}
#gekkan-latest-issue .explain .link a.back-number{
  float: right;
}

/* -- Woman Key Visual (2019.4追加) -- */
#woman-kv{
  height: 162px;
  margin: 0 auto;
  padding: 2.5% 0 0 0;
  background-color: transparent;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: auto 100%;
}
#woman-kv .logo{
  width: 34%;
  margin: 0 auto;
}
#woman-kv .explain{
  width: 60%;
  margin: 1.5% auto;
  font-size: 10px;
  font-size: 1.0rem;
  text-align: center;
  color: #fff;
}
#woman-kv .social{
  text-align: center;
}
#woman-kv .social a{
  width: 35%;
  padding: 1.5% 0;
  display: inline-block;
  border-radius: 3px;
  font-size: 10px;
  font-size: 1.0rem;
  color: #fff;
}
#woman-kv .social .tw{
  background-color: #000000;
  /* 背景色が黒の場合に同化してしまうので白枠を追加 */
  border: 1px solid #ffffff;
}
#woman-kv .social .tw::before{
  content: "";
  width: 15px;
  height: 12px;
  margin-right: 5px;
  display: inline-block;
  background-image: url(/common/images/common/ico-x-white.svg);
  background-color: transparent;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 75%;
  vertical-align: middle;
}

#woman-latest-issue{
  margin: 15px 10px;
  display: flex;
  align-items: stretch;
}
#woman-latest-issue .cover{
  width: 120px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  line-height: 0;
}
#woman-latest-issue .cover a{
  border: 1px solid #ddd;
}
@media all and (-ms-high-contrast:none){
  *::-ms-backdrop, #woman-latest-issue .cover a { min-height: 0%; } /* IE11 */
}
#woman-latest-issue .explain{
  width: calc(100% - 130px);
  display: flex;
  flex-direction: column;
}
#woman-latest-issue .explain .subtitle{
  margin-bottom: 1.5%;
  font-size: 10px;
  font-size: 1.0rem;
  color: #7e7e7e;
}
#woman-latest-issue .explain .title{
  margin-bottom: 1.5%;
  line-height: 20px;
  line-height: 2.0rem;
}
#woman-latest-issue .explain .notes{
  margin-bottom: 5%;
  font-size: 10px;
  font-size: 1.0rem;
  color: #7e7e7e;
}
#woman-latest-issue .explain .link{
  margin-top: auto;
  overflow: hidden;
}
#woman-latest-issue .explain .link a{
  width: 49%;
  padding: 5% 0;
  display: block;
  border: solid 2px #aeaeae;
  text-align: center;
  font-size: 12px;
  font-size: 1.2rem;
  color: #2379ca;
}
#woman-latest-issue .explain .link a span{
  text-decoration: none;
  padding-bottom: .05em;
  border-bottom: 1px dotted #2379ca;
}
#woman-latest-issue .explain .link a.contents{
  float: left;
}
#woman-latest-issue .explain .link a.back-number{
  float: right;
}
/* -- Feature SDGs Main Visual (2020.09追加) -- */
#feature-sdg-mv{
  margin-top: 104px;
}
#feature-sdg-mv .title-area{
  margin: 0;
}
#feature-sdg-mv .title-area p{
  padding: 10px 15px;
}
#feature-sdg-mv .title-area .title-description-area{
  padding: 10px 0;
}
#feature-sdg-mv .title-area .title-description{
  font-size: 14px;
  line-height: 1.4;
}
#feature-sdg-mv .hr_grad{
  background: linear-gradient(to right, rgba(229, 36, 59), rgba(253, 157, 36), rgba(252,195, 11), rgba(86, 192, 43), rgba(10, 151, 217));
  background-color: gray;
  width: 100%;
  height: 10px;
  margin: auto 0;
}
#feature-sdg-mv .hr_grad.reverse{
  background: linear-gradient(to left, rgba(229, 36, 59), rgba(253, 157, 36), rgba(252,195, 11), rgba(86, 192, 43), rgba(10, 151, 217));
  background-color: gray;
  width: 100%;
  height: 10px;
  margin: auto 0;
}

/* -- Feature ファッション Main Visual (2020.12追加) -- */
#feature-fashion-mv{
  margin-top: 104px;
}
#feature-fashion-mv .title-area{
  margin: 20px 0 15px;
  text-align: center;
}
#feature-fashion-mv .title-area p{
  padding: 10px 15px;
}
#feature-fashion-mv .title-area .title-description-area{
  display: inline-block;
  position: relative;
  padding: 7px 25px 7px 42px;
  background: #000;
  line-height: 1.3;
  z-index:-2;
  transform: rotate(-3.8deg);
}
#feature-fashion-mv .title-area .title-description-area:before{
  position: absolute;
  content: '';
  left: -2px;
  top: -2px;
  width: 0;
  height: 0;
  border: none;
  border-left: solid 35px white;
  border-bottom: solid 79px transparent;
  z-index: -1;
}
#feature-fashion-mv .title-area .title-description-area:after{
  position: absolute;
  content: '';
  right: -3px;
  top: -7px;
  width: 0;
  height: 0;
  border: none;
  border-left: solid 35px transparent;
  border-bottom: solid 79px white;
  z-index: -1;
}
#feature-fashion-mv .title-area .title-description{
  color: #FFF;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  padding: 0;
}

/* -- 無料メールマガジンLP (2021.3追加) -- */
#member-free-wrapper {
  text-align: center;
  line-height: 1.7;
  font-weight: 600;
  margin: 0 auto 60px;
}
#member-free-wrapper .line {
  width: 220px;
  height: 2px;
  border-top: dashed 2px #000;
  margin: 60px auto;
}
#member-free-wrapper #page-content {
  margin: 150px 5% 0;
}
#member-free-wrapper .section {
  width: auto;
}
#member-free-wrapper .button-register {
  display: inline-block;
  width: 100%;
  height: 60px;
  margin: 70px auto;
  background: #F72C2B;
  padding: 22px 67px;
  border-radius: 40px;
  position: relative;
}
#member-free-wrapper .button-register span {
  width: 100%;
  color: #FFF;
  font-size: 1.8rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#member-free-wrapper .button-register:before {
  content: '';
  display: inline-block;
  width: 52px;
  height: 46px;
  background: no-repeat 0 0/52px 46px url(/common/images/bunshun/v1/mailmagazine/member-free/icon-mail.png);
  position: absolute;
  top: -23px;
  left: 7px;
}
#member-free-wrapper .section-what {
  border: solid 3px #000;
  border-radius: 23px;
  position: relative;
  padding: 35px 21px 30px;
  text-align: left;
  font-weight: 400;
}
#member-free-wrapper .section-what:before {
  content: '';
  display: inline-block;
  width: 267px;
  height: 45px;
  background: #FFF no-repeat 50% 50%/241px 38px url(/common/images/bunshun/v1/mailmagazine/member-free/title-whats.png);
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
}
#member-free-wrapper .section-service .service-description {
  display: inline-block;
  position: relative;
  margin-bottom: 30px;
}
#member-free-wrapper .section-service .service-description span {
  color: #F72C2B;
}
#member-free-wrapper .section-service .service-description:before {
  content: '';
  display: inline-block;
  border: solid 1px #000;
  width: 1px;
  height: 33px;
  transform: rotate(145deg);
  position: absolute;
  bottom: 0;
  left: -25px;
}
#member-free-wrapper .section-service .service-description:after {
  content: '';
  display: inline-block;
  border: solid 1px #000;
  width: 1px;
  height: 33px;
  transform: rotate(-145deg);
  position: absolute;
  bottom: 0;
  right: -25px;
}
#member-free-wrapper .section-service .service-point p {
  display: inline-block;
}
#member-free-wrapper .section-service .service-point p .marker {
  background: linear-gradient(transparent 60%, #D8E2ED 0%);
}
#member-free-wrapper .section-service .service-point .img {
  position: relative;
  top: 5px;
}
#member-free-wrapper .section-service .service-point .img img {
  width: 113px;
  height: 113px;
}
#member-free-wrapper .section-service .service-point .inner {
  background: #F2F2F2;
  padding: 63px 25px 40px;
  border-radius: 34px;
  margin-top: -55px;
}
#member-free-wrapper .section-service .service-point .title {
  display: inline-block;
  background: #333;
  color: #FFF;
  border-radius: 40px;
  padding: 7px 19px 5px 22px;
  margin: 10px 0 20px;
}
#member-free-wrapper .section-service .service-point .text {
  display: block;
  text-align: left;
  font-weight: 400;
}
#member-free-wrapper .social {
  margin: 40px 0 0;
}
#member-free-wrapper .social img {
  width: 40px;
  height: 40px;
}
#member-free-wrapper .social a {
  margin-right: 40px;
}
#member-free-wrapper .social a:last-of-type {
  margin-right: 0;
}
#member-free-wrapper .bunshunleaks {
  width: 324px;
  background: url(/common/images/bunshun/v1/article/leaks/sd-leaks-middle.png) repeat-y;
  margin: 60px auto;
  background-size: contain;
}
#member-free-wrapper .bunshunleaks::before {
  height: 61px;
}
#member-free-wrapper .animation {
  visibility: hidden;
}
#member-free-wrapper .first-in, #member-free-wrapper .scroll-in {
  animation: bound 1.5s ease-out;
  opacity: 1;
}
@keyframes bound {
  0%, 40%, 60%, 80% {
    transform: scale(1.0);
  }
  50%, 70% {
    transform: scale(0.95);
  }
}"1#1:44387","OADD2.7353107730286_15PFGQ7FRP6EB6YRJ7":"1#1:44387","OAIP.d46902fa6cdea22508413990c7cc3ea2":"1#1:44387","OADD2.9964446369929_1A9UDUYJ6TJM6KRWML":"1#1:44387","OADD2.7353103531579_1PRMQFSBEI9WBF1P6N":"1#1:44387","OADD2.9964455635666_1MG6EQNULEPZN8JHK8":"1#1:44387","OADD2.9964454544864_1WYYXHYO5587H5XDGC":"1#1:44387","OADD2.9964445685501_169QVIFKCVUG22B21T":"1#1:44387","OADD2.9964447560761_100095B3T391EDA491":"1#1:44387","OADD2.9964455437499_1N7NZET0IBHCV0MC5H":"1#1:44387","OADD2.7353108175090_174N90OKW1M3I918WT":"1#1:44387","OAIP.a25933e0fda14608ad85431f6dde7102":"1#1:44387","OADD2.7353102205041_18984ZDH6Y4V4YUUAT":"1#1:44387","OADD2.7353084937669_12RBLOBR8M7M9LX7SW":"1#1:44387","OADD2.7353108387139_1BJRE7P0DUZGZ702EG":"1#1:44387","OADD2.9964455694677_1WRS5NBDI6IKHF0S8C":"1#1:44387","OADD2.9964454905428_1C27QP4UFNE6YFRSJT":"1#1:44387","OADD2.7353093087307_15HM3OEONVCBP4IMM5":"1#1:44387","OAIP.b03b006bad99f4ce15a74e54a058a73c":"1#1:44387","OADD2.9964455711874_193IXHEDL3XJ882L9J":"1#1:44387","OADD2.9964445685553_13RKF94NMPH6M4K1XT":"1#1:44387","OADD2.9964453696719_1D08D5XBD52TFSELT8":"1#1:44387","OADD2.7353105959347_1HW4QH0COXCKILU7LB":"1#1:44387","OADD2.7353107094630_1QHG8QXUWAT9JY739S":"1#1:44387","OADD2.8246392783022_1V15GZ0KI7AOITX858":"1#1:44387","OADD2.9964455175379_11MC5ZTO0C0YUSWQPV":"1#1:44387","OADD2.7353107959647_15Y3LUR94H36TOJFLP":"1#1:44387","OADD2.9964454908405_1KZDLD3Z6D3KTY716D":"1#1:44387","OADD2.8246392900128_1DLUXGD7T6SPBX2U8W":"1#1:44387","OADD2.8246392428778_1NK3SQR9A1CYVIOQAW":"1#1:44387","OADD2.7353107730285_17DPT8WWVTDR6OWIV9":"1#1:44387","OADD2.9964456155406_17PA7K75GX1CZAQ0MH":"1#1:44387","OADD2.9964454229511_1N9FF63JLGYBWRC8XT":"1#1:44387","OADD2.7353107094631_1CWG5HQA82EYJF9JQP":"1#1:44387","OAIP.7bc890be7b36226ef0ee09f9269b9dc0":"1#1:44387","OADD2.8246392783023_14O3QI9DFE0U4L154G":"1#1:44387","OADD2.9964455567405_12EG3DUGBHZD4GHKLP":"1#1:44387","OADD2.9964455694675_1WP99DQ75QZSQL1CH0":"1#1:44387","OADD2.7353102990915_1VQB3V5LA6KJD1FLP9":"1#1:44387","OADD2.7353108408334_1KYQV3F30ITKBM56LN":"1#1:44387","OADD2.9964454237239_1XUXRWLX18SL5JIQ0W":"1#1:44387","OADD2.7353108290195_1N0CTYYN2S8OZMSCVA":"1#1:44387","OADD2.7353109025279_1I0SXNBFZ6NH5PBT6S":"1#1:44387","OADD2.9964453438754_150LG9JE1RI1FNQI9F":"1#1:44387","OADD2.7353108164725_1QPC58BEOSPZI7EH7E":"1#1:44387","OADD2.7353097872407_1BPLPS6VAMJPE3FWZ5":"1#1:44387","OADD2.9964446553002_11GXYYXMSAD6ZF4Y61":"1#1:44387","OADD2.7353096485489_1ZOK9BY67UOAV1SYN0":"1#1:44387","OADD2.9964455567403_1L07Y7NV0GFUW4YB4S":"1#1:44387","OADD2.7353108572221_170KSDJN3NN9VJETR1":"1#1:44387","OADD2.7353108409488_12QF1LPIZEKPJEQQTH":"1#1:44387","OADD2.7353089140529_1KU5O3U6930MO23OQW":"1#1:44387","OADD2.8246383179811_1CBOQS7UFLF630VMQ9":"1#1:44387","OADD2.7353103300024_19BXCNO6EOHTKL4B9W":"1#1:44387","OADD2.9964454229261_1A5WMC29IRY8R0QG7U":"1#1:44387","OADD2.9964455774705_1115E63Z4TFZSR92Q1":"1#1:44387","OADD2.7353102990916_1PB27XT52PDES9V7GW":"1#1:44387","OADD2.7353107542011_1UHEEFFPL80C7Q9XX4":"1#1:44387","OADD2.7353109490710_11KDBY8RHVUO9MO96U":"1#1:44387","OADD2.9964454237626_1CGUMCO13959DFXQEP":"1#1:44387","OADD2.7353108227049_1OQYV4VLU4M05WVUC2":"1#1:44387","OADD2.7353103232729_1T5CZXPKGG468EOBA1":"1#1:44387","OADD2.7353108229270_1BLXMTHCFAWHRCOHDH":"1#1:44387","OADD2.9964456155693_1NWDKVDFU5UI3IXQG1":"1#1:44387","OAIP.075c4255f7388f001cc64bf46f25ecef":"1#1:44387","OAIP.1fb66991f223401709b4fbd6402e22eb":"1#1:44387","OADD2.9964447560732_1KWVT4CM4NW9A5TYAM":"1#1:44387","OADD2.9964446263612_1WKGAZHMRWP13L3J1Y":"1#1:44387","OAIP.ebb018862056cda2daddb5c2b1411a21":"1#1:44387","OADD2.9964447562432_1LUHPGEW0U9HKO824V":"1#1:44387","OADD2.9964454543357_12B4JFPQWKSEWO024V":"1#1:44387","OADD2.7353108179670_1ZNRW4GKU50J6FKLV7":"1#1:44387","OADD2.7353108044122_16BI3B5OYKU8Z2W8Z6":"1#1:44387","OADD2.7353103327858_1M4FMYL58UVI4PWKJV":"1#1:44387","OADD2.7353108290197_13TLHX63LJT1WEZZKB":"1#1:44387","OADD2.7353108164726_13919KMQW0AFOYY7BD":"1#1:44387","OADD2.7353108290200_1Q7WSUVA6ZQ9GV4VYG":"1#1:44387","OADD2.9964455438033_1HT99MNO1ZU68W56SA":"1#1:44387","OADD2.9964455490741_1JZ6IN99EC0EPPF84K":"1#1:44387","OADD2.8246392516291_191B52CHEPGALWNKS9":"1#1:44387","OADD2.8246392815031_1HWAXMLYH18XG907ED":"1#1:44387","OADD2.7353106830275_1092MDXL2MVCIF3B3V":"1#1:44387","OADD2.7353108290189_1UFMWPZKLBRX5K4LDZ":"1#1:44387","OADD2.8246389332367_1OYDO5KFKUGJVGD5DM":"1#1:44387","OADD2.7353108161040_12631LRLC99N6B7RVE":"1#1:44387","OADD2.8246392838660_1G8EPJ13IIDFUVA4B9":"1#1:44387","OADD2.7353107992214_1LS3G4NZPHHRSOGNQ3":"1#1:44387","OADD2.7353109496212_1OHXDEWZ1KTTCRB9UC":"1#1:44387","OAIP.24e4722096751e2fd18160ac44881e71":"1#1:44387","OADD2.7353106866821_17P3L43392XC7MHB3T":"1#1:44387","OADD2.7353098567145_1SZZUUV2Y379O7SN09":"1#1:44387","OADD2.7353108043501_1KWF63FNY0GHJ77CGS":"1#1:44387","OADD2.9964454445880_1PO7C21C2WME49SO4A":"1#1:44387","OAIP.3e6c52cd7308d8582c2967588820ec01":"1#1:44387","OADD2.7353102204203_189R5LLC7IQJ8AHYVF":"1#1:44387","OADD2.9964454446347_1EHV5J05FLEQ7341LU":"1#1:44387","OADD2.7353096469962_1P6CIH3J7C26KXC3GW":"1#1:44387","OADD2.8246394457633_1SY5FDXXZI15Q96OF0":"1#1:44387","OADD2.7353107028731_18AVN4Z8E9K2C24R6T":"1#1:44387","OADD2.9964455652436_1KX5Y79OL3FB3KS65S":"1#1:44387","OADD2.7353098567147_1LG01H6A1K2RCSG1CX":"1#1:44387","OAIP.3a3ad9b0422543e5a157ac156fa12d53":"1#1:44387","OADD2.9964454133048_1YGGYQRHICTXK152EO":"1#1:44387","OADD2.8246394457634_1LPBVGEX69B6VHI6AY":"1#1:44387","OADD2.9964456155694_1V5D8LQ9CFOF6O7DTT":"1#1:44387","OADD2.8246392771545_1IQT2RNZLJ7ITSDOGB":"1#1:44387","OADD2.8246395017529_1AZBOAASQW6B307GTD":"1#1:44387","OADD2.7353099093237_1TJ93YECLPMKZAGLY4":"1#1:44387","OADD2.7353099051047_13DA4PTVOX6540LP7C":"1#1:44387","OAIP.a6ea411a86e6b253059626838299c9be":"1#1:44387","OADD2.9964455711873_1QRWD1943Y91L72WM4":"1#1:44387","OADD2.7353103232721_10XUV30GT1V3VI8IE9":"1#1:44387","OADD2.8246392900130_10XN2BI5LIID4MCK13":"1#1:44387","OADD2.7353107992641_1P4OQ5TYURH1GOMH53":"1#1:44387","OADD2.7353097872404_1L8XBZH34555WNCYML":"1#1:44387","OADD2.9964455625711_1182R4I6R5EOZ9IHPB":"1#1:44387","OADD2.8246395017515_1G7Z5SQIZD4SX5NGPB":"1#1:44387","OADD2.7353110012043_13P67ZDKSQW1U92ZYK":"1#1:44387","OADD2.8246395017528_1IRE9RZ5QVTMGDDPFD":"1#1:44387","OAIP.d72aad633c4bf48234354956b49fdb53":"1#1:44387","OAIP.ede7b74717635903250a8bb356873972":"1#1:44387","OAIP.5586496c7562573c07a6be1fa6ef2a4f":"1#1:44387","OAIP.bf3ca5d1ca3f8db54665e0de3c76fcce":"1#1:44387","OAIP.de55fbdbf54f875f32859467a4cd3a49":"1#1:44387","OAIP.7eed34fb3bcb8143b8cac780c721842c":"1#1:44387","OAIP.d1c33fa368bee0f128fc3fe702e040e5":"1#1:44387","OAIP.c6040c6c4050116dfc3bda9c5f0877d9":"1#1:44387","OAIP.06d8878ccd467d6fb047bdc1254c52d7":"1#1:44387","OAIP.7362831de20aa1f362adecc1576168b5":"1#1:44387","OAIP.cad2c3c0f9470766210c2fe3655fed6c":"1#1:44387","OAIP.33aafb1fc5b7cd9fc29f57ee5cb7d996":"1#1:44387","OAIP.5b6e7f20f88b054bd693e9ab13884fec":"1#1:44387","OADD2.8246383216692_1JDFOMN8RD7EUB9UR5":"1#1:44387","OPHS.J3jhFwx1bHxmRA474C474":"1#1:44387","OADD2.7353098134949_1MKGEJTF50CPCEN3QU":"1#1:44387","OPHS.3tDIouPq0x8wWg474C474":"1#1:44387","OPHS.u4AhNBInYnVocg474C474":"1#1:44387","OAIP.4727360f62f65856510e54a911a49c2e":"1#1:44387","OPHS.ygAm15H3JOX5pw474C474":"1#1:44387","OPHS.FRV6hxnduDyAlQ474C474":"1#1:44387","OPHS.mxWs06a7xGWoBg474C474":"1#1:44387","OPHS.vtKHxrrm5sN1jw474C474":"1#1:44387","OADD2.8246383420859_1RS1N0PGGBELMI0B8X":"1#1:44387","OAIP.44ecdcdd0b0d0d4dd6c785efdb223965":"1#1:44387","OPHS.fKSURLGEFxjHgw474C474":"1#1:44387","OPHS.fODJQhVzNRF57Q474C474":"1#1:44387","OPHS.PsuMH5Y7rbPrng474C474":"1#1:44387","OPHS.gUghXZCSEik9bg474C474":"1#1:44387","OADD2.8246383420861_1D2A7ZDJ2NUHX25OP0":"1#1:44387","OPHS.moFJWFm6Qx5yOA474C474":"1#1:44387","OADD2.7353098134956_1HGUHOF4ZA25WDLMB7":"1#1:44387","OPHS.pexJizAm81npbg474C474":"1#1:44387","OPHS.mFb1xN62Ii6BEw474C474":"1#1:44387","OPHS.Fj91kw4B3XEWOw474C474":"1#1:44387","OADD2.7353098134955_194B128VIFSFR6220P":"1#1:44387","OPHS.cucepChPzl3vcg474C474":"1#1:44387","OPHS.5d8NS1vw8jTAKQ474C474":"1#1:44387","OPHS.cvZpE5j2y9soQQ474C474":"1#1:44387","OADD2.9964455636815_1MFAWA1ZE9VIVBW8SN":"1#1:44387","OADD2.7353103296846_13O5FXBZ864PIUXICR":"1#1:44387","OAIP.70690a54fcc7d83fb1e2c41495fc8f6d":"1#1:44387","OAIP.b1f2f254fd5393f1a4d4017fa5794811":"1#1:44387","OAIP.2d9c514d5e551a15bab1967c17b5993b":"1#1:44387","OADD2.7353107140336_1P80RHJ0Q6N0PLBA3Q":"1#1:44387","OAIP.aa132cdd4dd24153dab27018906b7f7b":"1#1:44387","OADD2.7559439818412_1ZUYIQHBMHDH372SKF":"1#1:44387","OADD2.9964454398600_1VR0O7I0NNGVCG97SM":"1#1:44387","OADD2.8246394568871_1MQLWQF3MSMP4KI9V6":"1#1:44387","OADD2.8246392881981_1AXA60OW6QVS3OJT21":"1#1:44387","OAIP.1bf145e0ee751c938c519f2938ed8261":"1#1:44387","OAIP.a5e121725b9ca247d2155748112e755c":"1#1:44387","OADD2.7353108300877_16DXG6CS911TMBUVFJ":"1#1:44387","OAIP.a6ce99db7008f3583ae69d762c61cf42":"1#1:44387","OADD2.7559439617415_1FXUSSE68APYRLLGD3":"1#1:44387","OADD2.7559504236340_1D6XAXQQZ0SL8ZH3KY":"1#1:44387","OADD2.9964456130853_1OWT086I9ZGO0BMNST":"1#1:44387","OAIP.3c16c8146844e3470dbe076edb9db84d":"1#1:44387","OADD2.7559465785900_1Q236PF1WOOIHXNTS5":"1#1:44387","OADD2.7353108234532_1T1DYHGMK6907LY7JR":"1#1:44387","OADD2.7353107140458_17LNL0RXAJGREI0Y9W":"1#1:44387","OADD2.8246392881979_1U1UH2YV96NNYDOINA":"1#1:44387","OAIP.bef5d86093a581489e9b72bfcb72bec5":"1#1:44387","OADD2.9964454398521_1F9X496T342F19CB6P":"1#1:44387","OAIP.60c7fd163fbccd678ae78fdace56df21":"1#1:44387","OADD2.8246392881983_1LM6K1GGKRYAIKECF4":"1#1:44387","OADD2.7353105956852_17FKUXSG1I1NCC9NFU":"1#1:44387","OADD2.8246394568875_1CM262A07M9YH9KTU7":"1#1:44387","OADD2.7353103320509_1J4HQ1JIV7MWNHI0WQ":"1#1:44387","OADD2.7559504235980_1YMEMGPNUL80EW6ZJX":"1#1:44387","OADD2.7559513168123_1TDRD4KFKRKX7NIVJJ":"1#1:44387","OADD2.7559504048387_1VC23RYN460CEO749V":"1#1:44387","OAIP.1878b6a41fd7c7565f67899831c574c2":"1#1:44387","OPE.z19lyOQRFvXfQg300C300":"1#1:44387","OAIP.0ef42848195c5cad95db436a5f440804":"1#1:44387","OADD2.7422351616114_12IFE8P9JSGQPKH2OY":"1#1:44387","OADD2.7559513168126_1IN9KK0DQAO7FIICCC":"1#1:44387","OADD2.7353108235036_1NGRKX6PI5YJN2EXE9":"1#1:44387","OADD2.7353108588168_1OFBDJ75L1RRZJ5OC7":"1#1:44387","OADD2.7353103320512_18V77PRCQRYKW8G00D":"1#1:44387","OADD2.9964454114460_153AY944GW4O2G664C":"1#1:44387","OAIP.94480628fa27f346055f7d68f8f3b48a":"1#1:44387","OADD2.8246392881980_180775K05KA7HAOQU7":"1#1:44387","OAIP.f2c5fecf301c160523d95ba69d0ca58a":"1#1:44387","OADD2.8246392881985_1IR2P1V5TOH5DHNIFI":"1#1:44387","OAIP.5ca4d0c65e9aba02d864b327c0eab6b2":"1#1:44387","OADD2.7353103169664_1CTNUZB3WWV25A2PCZ":"1#1:44387","OADD2.8246394568872_1VJYYGUQR606EJ5SS9":"1#1:44387","OADD2.8246394568870_11KB63F39NNPNFWBC4":"1#1:44387","OADD2.9964454398516_1QWCOC8OMYB37M80V0":"1#1:44387","OAIP.97523e16ae3a51cec0ab17c0793eb3ab":"1#1:44387","OADD2.8246394539497_1FAG86QQEVYB7Q1202":"1#1:44387","OAIP.72c1de7d43f7da5fb049233e81a84114":"1#1:44387","OAIP.0d8eb2f4bb6474d472db7b59eef0318a":"1#1:44387","OADD2.7215929793633_1ZSPXWIPNHOQ95EFDX":"1#1:44387","OADD2.7353103296839_1Q18FCQHDPXPPROGUW":"1#1:44387","OADD2.7353108588080_1M1TIFIZTEOT7FSDV8":"1#1:44387","OAIP.a33a76f56be1bd30e2dbcb0b9ca7b4f8":"1#1:44387","OADD2.9964456209217_1Q0Q6TV34F5H39A3LD":"1#1:44387","OADD2.8246392881978_13GWLN19DG4RR9D3CC":"1#1:44387","OADD2.8246392881982_1PK1ABWLSLPWU1FXQB":"1#1:44387","OADD2.7559177671889_11C2YYAPVWDU48PCGA":"1#1:44387","OAIP.763050f6a30e85e48a07df3646b20731":"1#1:44387","OADD2.7353108588187_1TXUX4Y4PGQCJJH7VD":"1#1:44387","OAIP.e9d6bdaff679b64dc25a5f2981da4ebe":"1#1:44387","OADD2.9964453784106_1ZMI2OIF0CS4X3LDG9":"1#1:44387","OPE.4p2F0HXaiL8IXg300C300":"1#1:44387","OADD2.9964455710114_12Z7K10TNYYL5YO5RA":"1#1:44387","OAIP.5789588cc69f7a5b2689fdd4f883972d":"1#1:44387","OADD2.7559505414522_1LWRZFSGXDXD4TJ9WD":"1#1:44387","OAIP.ecc8c497cefcc3a00f328da9ef671ed7":"1#1:44387","OADD2.7353103169663_17G8E3ZG7V81UZ4V1A":"1#1:44387","OAIP.7629dc179e04775c92e3f2b0c46a0d7b":"1#1:44387","OADD2.9964454398519_1JFQ0ZN9SS37K96XEP":"1#1:44387","OADD2.8246392881976_1Q7GUAPP9N0KO7GVF6":"1#1:44387","OADD2.7353107140419_1DZ4EKBYSMBGCS0456":"1#1:44387","OADD2.7559504047777_15XAKM0KT91FWSSKF3":"1#1:44387","OADD2.7215929794444_1RBM7XKUGD30T5ZWG5":"1#1:44387","OAIP.1f8f7164984d2fa066784c91ad486df8":"1#1:44387","OADD2.7353107140459_1CGUK93B4ED39OG18I":"1#1:44387","OADD2.8246392881975_1PATE40XYXL4BTX94Z":"1#1:44387","OADD2.7559177671862_1VOK2D2S7XHEYT9P1O":"1#1:44387","OADD2.7353107140335_1G4C00SG21SI1E55EO":"1#1:44387","OADD2.9964456209057_1ITXB1D4B2OUSBGY0V":"1#1:44387","OADD2.8246394568873_1GA316SB4M6F1TUC6U":"1#1:44387","OADD2.8246394568874_1T2XHFPCZ4FD7KDKLE":"1#1:44387","OADD2.7353108300880_1A4PGZ7PBHX1X4INF1":"1#1:44387","OADD2.7559505414274_1DG4FZW5YOST2GOKGF":"1#1:44387","OADD2.7559177671807_1XOEWY52G2Q5W4GZFD":"1#1:44387","OADD2.7559504236395_19B2ABTU8E1Q9EQPGC":"1#1:44387","OADD2.7215929793634_15859LI4BFN3U7FNSY":"1#1:44387","OADD2.7422351616112_13WHU94OV1TO7XE0WQ":"1#1:44387","OADD2.8246394975711_1SGUZWR3GNOE85RPGA":"1#1:44387","OADD2.7353103169676_18NOH4T8WOU8L56VNJ":"1#1:44387","OADD2.7353106993350_1KC3D3XKAKJT9TRMXM":"1#1:44387","OADD2.7215935667829_1A8OKVXJNB7KHO0ZUO":"1#1:44387","OAIP.dc38cfa8f5ab8532aeec45b6c105010a":"1#1:44387","OADD2.9964453784105_1L87KDWG1XDNTP1SSA":"1#1:44387","OPE.nhpLpRtov2SHxA300C300":"1#1:44387","OAIP.8d31abfa5bc80376d2932d2c53a36945":"1#1:44387","OADD2.9964454398520_1TQ3ZCRK2QBJQMC5A6":"1#1:44387","OADD2.9964453784108_1RPZTDESWODUZD0OJL":"1#1:44387","OAIP.c9d929b629853220cc4a86cdf018822c":"1#1:44387","OADD2.8246394568869_1W3NNDZNVQ3H84OSJB":"1#1:44387","OAIP.407e97f05583e9af6c9358b6df5e7c50":"1#1:44387","OAIP.faeec206883952b1290b6a2c3e993ad4":"1#1:44387","OADD2.7353109083379_185EG3HF2LQHN7EB0J":"1#1:44387","OADD2.7353103320511_1ZHXJLTB1LV9ETVVHW":"1#1:44387","OADD2.7353103169690_1YG31WJXQR5CUB2MMV":"1#1:44387","OADD2.7559479628407_1TC0NEZ6IO5X1PQH06":"1#1:44387","OADD2.7215929041969_1IUA5KOXR3RHZNTB9V":"1#1:44387","OADD2.8246392881977_1P4DEZOATQKURQJ0CF":"1#1:44387","OADD2.8246392881984_1PX1PGWRJ9FAH6O0PL":"1#1:44387","OADD2.7559431242068_1FAJAE3LXRXA0R89PI":"1#1:44387","OAIP.d18f02d0d08b6a67314701018e92e067":"1#1:44387","OADD2.7559557737418_1AF3GPI65Y8NZRGMTA":"1#1:44387","OAIP.7c37245d7feeba9c0eb5321bcd886135":"1#1:44387","OADD2.7215935667828_1QS75CA0YNC8WT6EC6":"1#1:44387","OAIP.503780ec8a04fc59f5c5c9bd4c26cf46":"1#1:44387","OAIP.9222f84a6c22e39ff8bdca2387a3b52c":"1#1:44387","OAIP.bab963978307139a6981a1faff03f5b6":"1#1:44387","OADD2.9964456209209_19CWG3PI7J8B1JH5FN":"1#1:44387","OADD2.7215929794445_1J0QZDF9LYU8B294U9":"1#1:44387","OADD2.7559465785965_1HK2NB8YQ5Y3L4ZMC2":"1#1:44387","OAIP.28eaf9881d01e02d0d61667821e8c7fe":"1#1:44387","OADD2.9964455710243_15QQ4OUK7X8C7YP0FJ":"1#1:44387","OADD2.8246394568876_1MSBFG4NV544NJY2PM":"1#1:44387","OADD2.9964456131552_1HUC4VFJJN113T51H7":"1#1:44387","OADD2.7559431242067_15OKSIYKDP39PVIESU":"1#1:44387","OAIP.4e8e60162cd2f3bcc9cf276af33f223f":"1#1:44387","OADD2.7353106993347_1NYGB1AJX0J96A631Z":"1#1:44387","OADD2.7559439818240_1QH4WMICJM6LBSR1ZP":"1#1:44387","OADD2.7559439617636_1ZE2XJUWPYY75X70RJ":"1#1:44387","OAIP.a95b6ad20d53604aa182f39e806703e9":"1#1:44387","OAIP.04e3e65565a6239f1a2f90f78f4159de":"1#1:44387","OADD2.9964455710112_1R9WHZG8WFXL9SGUNZ":"1#1:44387","OADD2.8177657951674_12N8XGABMV88AZD8GC":"1#1:44387","OADD2.7353103169689_1UMCSQ9C4GCJQA35TC":"1#1:44387","OADD2.9964453784109_1Z33CB1REK95A2T9PR":"1#1:44387","OADD2.7559505414405_1K5CEJVGSBQMJYWJ4T":"1#1:44387","OADD2.9964454590894_1R23NIYDKF74OPWKMJ":"1#1:44387","OPHS.yGn8pEMAGd5lMA474C474":"1#1:44387","OADD2.9964455439310_1F1N6EWMMGJJ94P7TG":"1#1:44387","OPHS.pl38OgJuc3HY6Q474C474":"1#1:44387","OADD2.9964455553123_17RHNUZK5MKP8B1FAH":"1#1:44387","OAIP.59c0023ba4def96483a4704a055ada66":"1#1:44387","OPHS.T9oJiAt7euIVsg474C474":"1#1:44387","OPHS.zffTHvQ1zWTgqg474C474":"1#1:44387","OADD2.9964454257560_10X4M54FJ1H3WXZR0J":"1#1:44387","OADD2.9964454590896_1IAWSF1CP6A54VGWV5":"1#1:44387","OAIP.9be311462be38d994146c9b06a41e8a0":"1#1:44387","OPHS.kjV2RSP2aXu7DQ474C474":"1#1:44387","OADD2.8246344385185_1TNT8X4EDFF4EHIRFL":"1#1:44387","OPHS.gf7CuaVnTG7u0Q474C474":"1#1:44387","OADD2.9964455603382_1DCCXU23679KL8UM7N":"1#1:44387","OADD2.9964455553121_16P1LH8S3E4LNE468B":"1#1:44387","OADD2.7353108631808_16H9RSG9MIALO2FB7S":"1#1:44387","OPHS.EYnCBtruBE6aXg474C474":"1#1:44387","OPHS.9EX3TQWXHJZlNg474C474":"1#1:44387","OADD2.7490508432920_1USU9O3PCLSUMS6F6C":"1#1:44387","OPHS.EIhgj41t0pOzfQ474C474":"1#1:44387","OADD2.10239312594706_11KTTZHV95S62XIHR":"1#1:44387","OPHS.nPgHcArSKyROww474C474":"1#1:44387","OADD2.8246344385187_1W5YIWM7DV17PT9JSX":"1#1:44387","OADD2.7353108631810_1E7IZ4DH6Z8AESY1CO":"1#1:44387","OPHS.7fXQ8t0RIzqtYg474C474":"1#1:44387","OADD2.9964455553122_10IRZ4VEZRU03KY2AO":"1#1:44387","OADD2.9964455553119_1MSC01WVNY9D4IVFRA":"1#1:44387","OAIP.0a87abfc013cdc1d92801a6b82561258":"1#1:44387","OPHS.2PtSw0bVYr85yw474C474":"1#1:44387","OAIP.8d5c89bccfd2bfe4a55e5aabf83ebf0e":"1#1:44387","OPHS.Pmzglnc4nfYccw474C474":"1#1:44387","OPHS.t1bBUtOHojDN4Q474C474":"1#1:44387","OADD2.9964455553124_17JI2FHA2IKA38SNCT":"1#1:44387","OADD2.9964454046722_19VERI54I19PFO3TML":"1#1:44387","OPHS.ujXdiEpEW50nFQ474C474":"1#1:44387","OPHS.P0xi5yMpHRIftg474C474":"1#1:44387","OADD2.9964455439308_1UVC8BW02I45SMS5N8":"1#1:44387","OPHS.QnXC3PgPxcVClg474C474":"1#1:44387","OPHS.RDreRAUiBuQ4ew474C474":"1#1:44387","OADD2.10239375885645_1YS20EMYUXHZTOWAC":"1#1:44387","OADD2.10239375885644_17P36TR61R98LMUJM":"1#1:44387","OADD2.9964455440601_1HGF0XYA3PKL0I6OMQ":"1#1:44387","OPHS.CVdbDHiQ4mHFfw474C474":"1#1:44387","OPHS.6cvKY84URgqIGQ474C474":"1#1:44387","OADD2.9964455439803_1C9SWCGT8L575WVK68":"1#1:44387","OPHS.vu2DzWMjHGelnw474C474":"1#1:44387","OADD2.9964454590852_1VF9A1CLRAR5265CHD":"1#1:44387","OADD2.7353108631807_15L9A734TTX2LIGI6D":"1#1:44387","OADD2.7353110008748_1OAIR19RONHN5CR7MP":"1#1:44387","OADD2.9964455553120_1TP0AUMYAQ3OC6S2J3":"1#1:44387","OPHS.w50l7esg1rycXw474C474":"1#1:44387","OPHS.Lrcd0qotzR6bGg474C474":"1#1:44387","OADD2.9964454257559_1F9NU54ULTZFNM3VUH":"1#1:44387","OADD2.9964455439804_1E7KPHH2XT1UGZ9110":"1#1:44387","OPHS.BJMKjW90icRCfg474C474":"1#1:44387","OADD2.7353107537027_11OLZAJ4DW4HUL0CP8":"1#1:44387","OPHS.Z9qj0inAhn7eLw474C474":"1#1:44387","OADD2.10239377535262_1YWN3UAAD95G75Q85":"1#1:44387","OADD2.8246357248020_1V97O870GVT3A49YOI":"1#1:44387","OPHS.GHmH2ChYMNpujQ474C474":"1#1:44387","OPHS.fbOvtUG5TgZStA474C474":"1#1:44387","OPHS.cdaIISj8a9OvmQ474C474":"1#1:44387","OPHS.co6LLYxUwHEKPg474C474":"1#1:44387","OPHS.XxYnTRTYIbfpwA474C474":"1#1:44387","OPHS.ytWJ49SdJ6SqLw474C474":"1#1:44387","OADD2.7353107536754_1RXBOSIGTXATHS9TI7":"1#1:44387","OPHS.xnsp8rZJPHphLQ474C474":"1#1:44387","OADD2.9964455439309_12RUQ6Z3TMB3NVT6DN":"1#1:44387","OAIP.31940eb8f06321fe684d0ba67a846fc7":"1#1:44387","OAIP.0216565237a32c846a566c4e2cd67680":"1#1:44387","OADD2.8246344199591_1EI7D4KXBX48ZJEE52":"1#1:44387","OADD2.10239377535261_13O40WLSJFNWEEK8W":"1#1:44387","OADD2.9964455439805_14558UBNL18HVF788V":"1#1:44387","OADD2.7490508432925_1LVPC10P4JPBI7G03X":"1#1:44387","OPHS.UyQ8MBFiI4Ym5A474C474":"1#1:44387","OPHS.u7uWf2HBkrh26w474C474":"1#1:44387","OADD2.7834084460358_1IJEH8306JQOGWNYAQ":"1#1:44387","OAIP.8c54efe105109f0f1aee849a95ac713f":"1#1:44387","OAIP.8311e400882dece0d4fdedd19442b236":"1#1:44387","OAIP.0d9bd3a06270d5f9fb9aee5f260d473c":"1#1:44387","OPHS.rNamfqvlglwTtQ474C474":"1#1:44387","OADD2.8246389545489_1GXLY7G6GD9N2SS39W":"1#1:44387","OPHS.nbERQOl4MvxB2Q474C474":"1#1:44387","OADD2.7490508432922_1ZZZ43KRK86DJLRV15":"1#1:44387","OADD2.7490508432924_1MXHNTMOQ0BGM5FHX9":"1#1:44387","OAIP.b5f5d20b324ce318cfaa050325fdfeed":"1#1:44387","OPHS.5cSqt597FqGw4Q474C474":"1#1:44387","OPHS.4ELIgBv75BtOqA474C474":"1#1:44387","OADD2.9964454257558_1C5ICM3AHUMKUCBWQA":"1#1:44387","OPHS.ijkn0ZL9irqY8Q474C474":"1#1:44387","OPHS.4eAfBzigUYTOBA474C474":"1#1:44387","OPHS.JozVOSpC2iSdfw474C474":"1#1:44387","OADD2.9964455553126_1HTN2C3QKLDR42Q26J":"1#1:44387","OADD2.9964455440600_1QJOWHP7ILSQYFS7WE":"1#1:44387","OADD2.7353108260625_14RAJNPDHIC4FPR72T":"1#1:44387","OADD2.8246389545443_15974POL6X8EN0Z3C3":"1#1:44387","OPHS.Mc6R44adaNRyAA474C474":"1#1:44387","OADD2.9964455440599_1GJ9VQUQXT8EFGPYNY":"1#1:44387","OADD2.7353108034889_1JW9MMG764DL127OXV":"1#1:44387","OPHS.Hh2hzGa9Q21Sjw474C474":"1#1:44387","OPHS.7FKiYbSYxRDhmA474C474":"1#1:44387","OPHS.4nOZXcGh07sczQ474C474":"1#1:44387","OPHS.RY2nCeDvHyn9DA474C474":"1#1:44387","OAIP.a79ab00c78494782229dd98b06e9063a":"1#1:44387","OPHS.tqh45shCxsqAcQ474C474":"1#1:44387","OPHS.VaG4cS4VdT3ERg474C474":"1#1:44387","OADD2.7353108410553_1VQQQI0SV73KR2GBAJ":"1#1:44387","OPHS.QVfIkodUMjglyw474C474":"1#1:44387","OADD2.7902794689058_1A20P5LG7EXGF7Z8CH":"1#1:44387","OADD2.7902806698007_138MO1ET00UODVXJZE":"1#1:44387","OAIP.bcc02bac31331d23cf81ffd9c2e7c316":"1#1:44387","OADD2.7902794689060_1XRG46UFYMKDIGJK2L":"1#1:44387","OAIP.0bbbf29142bc4cd20b5c2bfd89a45a1e":"1#1:44387","OAIP.5125c19c7d01e8db1550cf352b110aca":"1#1:44387","OAIP.f6a501cc79e899ad9b60049ac7040519":"1#1:44387","OPE.TBIt4yJiBnav8w300C300":"1#1:44387","OAIP.19721a0c916a4c9f59a782001f45da08":"1#1:44387","OAIP.755a2dfccc87f3256ed9725d34931bb9":"1#1:44387","OAIP.9d018540452d0b23cd3018a9cfe216ab":"1#1:44387","OAIP.1b2b8b03ec924b3cde8a1eb67df8a7ad":"1#1:44387","OAIP.64640411ae75e726c1b7cdb8e8ef7aa0":"1#1:44387","OAIP.8edaed16bb0125ee142a07e49ebaf22f":"1#1:44387","OPE.ExuZ734jvx9hiQ300C300":"1#1:44387","OAIP.036003bff37febb4d240131fb50583ee":"1#1:44387","OAIP.0d60f56a13f205691ddc5b3ba3121264":"1#1:44387","OAIP.28b6ff543fbd9ab2e2943554f7d00bbe":"1#1:44387","OAIP.0f541e855335d847844b04878e7f6385":"1#1:44387","OAIP.f9e50c6f63f1ca839bee167b69825c91":"1#1:44387","OAIP.8513c98cf4354ef5c119fcd19dce3ebd":"1#1:44387","OADD2.9964453939779_1995JF0RZQLD2VZHK9":"1#1:44387","OADD2.7353108048691_16CIISN9SW40QAFNZM":"1#1:44387","OADD2.7353106855499_1FAUKZLA4DA1NABPL2":"1#1:44387","OADD2.7353102958147_1S1AEUZVLCR56HTQNP":"1#1:44387","OADD2.7353089182097_12FNIWZITV47INO5JS":"1#1:44387","OADD2.7559555628045_1JGJR20PVQSI3HX9LG":"1#1:44387","OADD2.7353107959648_10AGIQXHPAK681EIL1":"1#1:44387","OADD2.7353107963971_1AAFSAQFQ5SO4QMB2O":"1#1:44387","OAIP.35ad92ec0f377a37b2d2aa2bea5ee9ec":"1#1:44387","OAIP.b8d89b81579317ce4a05006e35a121dc":"1#1:44387","OADD2.9964445685433_1K9Y63H53PL3EAUBFZ":"1#1:44387","OADD2.7559555628044_1KIRPPQ6QHB2NCL8YK":"1#1:44387","OADD2.7353103299630_1LAMAPNY03C1WZ6V0X":"1#1:44387","OADD2.7353102958170_16KUSQ7L2P6HU1FGID":"1#1:44387","OADD2.9964453988979_1CCP5Z2B7EK5XG4DKP":"1#1:44387","OAIP.16f5be19df0b2efa20227c44c245dc72":"1#1:44387","OADD2.8246387408548_13GMPZEUH9NR9H4NHT":"1#1:44387","OADD2.9964455731278_1SKCHY6HZC5ZG3J39H":"1#1:44387","OAIP.9ef0994745cc72e59829b63e9e93f3ec":"1#1:44387","OADD2.7353107976118_10YXW27W5CNZXY44Q7":"1#1:44387","OADD2.7353102958185_1KTFWHPXZOJHZC68IM":"1#1:44387","OADD2.7353099100201_1KZMWZ8JRF7N3AHN1O":"1#1:44387","OADD2.7353102958184_19S6MS8Q726SJDUVYH":"1#1:44387","OADD2.7353102958167_1CW2KW5HJQV1ALINEN":"1#1:44387","OADD2.7559555628046_15DKCCCXGVP4JI73XB":"1#1:44387","OADD2.7353103292090_1XCVBZEJIXUECSD4MF":"1#1:44387","OADD2.8246392423054_1S4DLIT6MZYWJ2NHHH":"1#1:44387","OADD2.7353108161041_1T5KP2O61LTVQZJN2F":"1#1:44387","OADD2.7353108188516_1OM21J1P3E4JBR0J18":"1#1:44387","OADD2.9964454643169_1EBY6CNK7G7FX0CVQZ":"1#1:44387","OADD2.7559555628043_1G3NNX6S024LPS2FUN":"1#1:44387","OADD2.7353089182075_1KCXF0WFDZMQK3EGDY":"1#1:44387","OAIP.0f88fac741aeb1266896c2a249e5a6cd":"1#1:44387","OADD2.7559555628041_1LS6WIGN2WIYR1DRNJ":"1#1:44387","OADD2.9964454607239_1DWZCHV5GVFF6WXOPU":"1#1:44387","OADD2.7353103327885_1DZ56R52426F96FFCV":"1#1:44387","OADD2.7353102958173_12SUW8JCZYEVI2VSRF":"1#1:44387","OADD2.7353102958164_1KD2JI0BJHLSY7ABPA":"1#1:44387","OADD2.7353108175109_1113YFX6NZF7IET49P":"1#1:44387","OADD2.7559555628050_146381FNB71JJMZ9II":"1#1:44387","OADD2.7353089182068_1XWSQCHYDJNLV0H4CX":"1#1:44387","OADD2.7353089182042_1TGUHEN7D9N72MFRIK":"1#1:44387","OADD2.7353089182083_18FR81GYPSPC2V23YH":"1#1:44387","OADD2.9964455437630_1JPTLO1JMTUE5ZR4V5":"1#1:44387","OADD2.7353102958168_1D12WXJHOYAJIGXWY2":"1#1:44387","OADD2.9964455730995_1HL8CZV7NBAY400UQ4":"1#1:44387","OADD2.7353108156227_1FCGYOMO240T3S0CAH":"1#1:44387","OADD2.9964453523415_1UGZ23R4NGY32WI6VX":"1#1:44387","OADD2.7353108259517_1RMBS0JZK6E8OG6WQ1":"1#1:44387","OADD2.9964456000169_1MY6GP8B0EUFA1HD9F":"1#1:44387","OADD2.8246393422660_1M7HXSTMSFFTK7XTNE":"1#1:44387","OADD2.7559555628049_14WBY9FQTBO6D75D9G":"1#1:44387","OADD2.7353102958171_1WU1VP56HLSGLQ7BSK":"1#1:44387","OADD2.7353107946995_1HCP1KQ0GC4WY9BYWM":"1#1:44387","OADD2.7353102958166_1ZTMAF0DXDO0OFDKKC":"1#1:44387","OADD2.8246393336949_14700IZFHQK2YXJTOG":"1#1:44387","OADD2.8246394563775_1TVNS8L9GM3KMBLKR7":"1#1:44387","OADD2.8246393422666_1EDGV346SN0YEGXDG6":"1#1:44387","OADD2.9964455437631_13GIIA1U0DYRHJH0AK":"1#1:44387","OADD2.7353089182036_1V1KAS7NS1GJYZOWAQ":"1#1:44387","OADD2.9964453988967_1HY3Z66NV3UFHZZO6X":"1#1:44387","OADD2.9964456099361_18C89JBLDLLSPCA5Y8":"1#1:44387","OADD2.7353102958145_1B62SXEUYEFK3GENYL":"1#1:44387","OADD2.9964454588855_1DUTL4QI3F0110Q5EZ":"1#1:44387","OADD2.7353107992215_1704QPWC9OVC23OTAB":"1#1:44387","OADD2.8246383407691_12LCMKO09Z0CWB7KKG":"1#1:44387","OADD2.8246393336887_1M46G50UHR9CB42YMC":"1#1:44387","OADD2.9964444893509_1MSQORBQ3G9C5FVT6J":"1#1:44387","OADD2.7353102958187_1BVZ6BXJ3KV3O49YQU":"1#1:44387","OADD2.7353089181942_12D5WPCX4BAKTZ3SMO":"1#1:44387","OADD2.7353089182098_110J6IH1IHK95HRX1X":"1#1:44387","OADD2.7353103115846_1G9NWCDPGEDYN6QPCY":"1#1:44387","OADD2.9964454071333_1EP1AZ13GO5PPL12H1":"1#1:44387","OADD2.7353102958186_1PWBYWBOHJGP258YE8":"1#1:44387","OADD2.7559555628042_1I9K5Y5N4QMLFRLSP7":"1#1:44387","OADD2.7559555628048_1DHF55MP51BEF0J9LH":"1#1:44387","OADD2.9964446553023_1YPM8UGV9ZTVFFWAJS":"1#1:44387","OADD2.9964456099562_1L77RKPY7L29OFJUDS":"1#1:44387","OADD2.7353107992213_175I0A6106CI0HAWJX":"1#1:44387","OADD2.9964456099553_1XOMR18LWPSYOA9IOL":"1#1:44387","OADD2.8246393373187_1C7ORFU155K90U1DH2":"1#1:44387","OADD2.8246392428777_1C2TMMA3KNF56EPBZX":"1#1:44387","OADD2.7353102958148_12KFHMH9QQZHMOSPTS":"1#1:44387","OADD2.7353089182039_1VH56GOSVT8BXIS8AP":"1#1:44387","OADD2.7353097714030_18ZX4HFSS4O3GUILIT":"1#1:44387","OADD2.7353089309239_16R90G6FPWBCI1UKMA":"1#1:44387","OADD2.9964454641972_1VRJ4CV9VPGWP32N9G":"1#1:44387","OADD2.7353108049002_1ZRS7T533B5UATI5CD":"1#1:44387","OADD2.7353089182038_12VB0SMWDN5K5DEQ0A":"1#1:44387","OADD2.9964455730994_1AC217JELVNHE4P1LW":"1#1:44387","OADD2.9964454314052_1SVQWMPD3XHFPS8QLU":"1#1:44387","OADD2.9964455730993_1HZGQVYKYR9AJD6UOV":"1#1:44387","OADD2.7353107946994_1AOS4P60JZ9QNWPVYC":"1#1:44387","OADD2.7353102958146_16LFVPZBB3ITOZJXDE":"1#1:44387","OADD2.9964453781018_1FL8ULEKDEFEJJNLWE":"1#1:44387","OADD2.7353089182040_1E0GP168OSBRUM6L10":"1#1:44387","OADD2.8246394230700_146IRIKIPSAYGM71QW":"1#1:44387","OADD2.8246393336932_16MADEUYSLTSU15OGK":"1#1:44387","OADD2.9964453641715_1GNFHUTAND3U5XDWQT":"1#1:44387","OADD2.7353102958165_18OYBFNMO5B7E5G046":"1#1:44387","OADD2.7353103292092_1506JL1C4NIQ29Y7NX":"1#1:44387","OADD2.9964456099527_19NUV5RFB1MEHFA0UB":"1#1:44387","OADD2.9964455711161_1D1NHZXQO4S8KP3QMW":"1#1:44387","OADD2.7353108110211_1B7NK4L3YAK65JBLI1":"1#1:44387","OADD2.9964456099222_1PV8B08KMVYJ189RT9":"1#1:44387","OADD2.7353102958172_1P0N2G6ISBN0QG7DCK":"1#1:44387","OADD2.9964455730991_19KSMS7Y0B2T8QUTOY":"1#1:44387","OADD2.7353089182001_10K7L57F9AQ0PD5PVZ":"1#1:44387","OADD2.7353107946997_1IXU0UW8KAF4F6VN4M":"1#1:44387","OADD2.7353093160106_1X9WO04L55UT7ZAVRR":"1#1:44387","OADD2.7353110008747_145ZSLRY607ZF80LGD":"1#1:44387","OADD2.7353089182073_1FTEA67BGMIT3N2DN5":"1#1:44387","OAIP.141856f3ab22854f83bfe577df152a29":"1#1:44387","OADD2.7559555628047_1LD2U7S5SFA676TF31":"1#1:44387","OADD2.7353107946996_1OFOV9MP76BUVXYPTA":"1#1:44387","OADD2.7353089182103_1QH8UMEIBS5GVB1SVD":"1#1:44387","OADD2.7353089182032_16PBVFVB99GXRP36IB":"1#1:44387","OADD2.9964438899619_1PSSF7JY1C5XO72VNH":"1#1:44387","OADD2.9964455730990_11ARQEZ653KJPB1QP6":"1#1:44387","OADD2.7353102958183_19RPWCZVR69ESOFV82":"1#1:44387","OADD2.9964455730989_1UW8D0XWGHIM94KH49":"1#1:44387","OADD2.7353102204213_1D25OB72K0G0CEX36H":"1#1:44387","OADD2.7353102204210_1JMN4CB6C0AM3E7BAG":"1#1:44387","OADD2.7353089182002_1ZR80K7YX4ZFYXY7BE":"1#1:44387","OADD2.7353102958169_12USQBMUMCKXU3JDMQ":"1#1:44387","OADD2.7353091327795_1AK232SI3FLDB9Y114":"1#1:44387","OADD2.7353108164727_1WQ2JB14GFTIMRT75V":"1#1:44387","OADD2.7353102958149_1CNTM61FPR92XB35ZG":"1#1:44387","OADD2.7353108386161_1LXKKBZHPRWK7R79KF":"1#1:44387","OAIP.fd7b00896585fcff1c21697acb6bda32":"1#1:44387","OAIP.1db7151bc2aba9862e2245cd684f84dd":"1#1:44387","OPHS.RSHT3fFzLj1SRw474C474":"1#1:44387","OAIP.d5e7f592169346feed4358f2d0e22823":"1#1:44387","OPHS.HyGssr80t1oZkA474C474":"1#1:44387","OPHS.J3UNNiPxUDK4PA474C474":"1#1:44387","OADD2.8108971066932_1CV7JH29VCIER6AQY3":"1#1:44387","OADD2.8108971066933_19GVG1K8SB7KRD1DFQ":"1#1:44387","OAIP.7983c92ba5df33881368cc2e392d4158":"1#1:44387","OADD2.8108971066930_1Q3CM3EYVW3FKJXAHB":"1#1:44387","OADD2.8108971066935_1281ELCNK1EO0JPWG4":"1#1:44387","OAIP.ed47b45989a5803d4234af4d3c358a5b":"1#1:44387","OAIP.0f6a6efc5112c058600a9c705152e2ec":"1#1:44387","OADD2.8108971066557_1A9LHF8RGVKQJJQP44":"1#1:44387","OPHS.KTj9YC8hQ09jFg474C474":"1#1:44387","OAIP.9a0e94347ad1ead7e54d66029e320737":"1#1:44387","OADD2.8108971066939_113RN7SPDPDW6ZXSAI":"1#1:44387","OAIP.5eda76ada241bae0512d9da1ba577beb":"1#1:44387","OADD2.8108971066568_1WU5I3AXA2HZY8R5KF":"1#1:44387","OAIP.a91a51093d656c7adce36be976561f55":"1#1:44387","OAIP.575f847683b198f93bc8bace49f47e8b":"1#1:44387","OAIP.9f5c93163e7398f47e4dd1dae7b7bfff":"1#1:44387","OAIP.d7aa42b8bb0e55da4fb2986f79ed813d":"1#1:44387","OAIP.1930f706e134943ad7a68c87807aad79":"1#1:44387","OAIP.5334987afcc71812778d626ae1130580":"1#1:44387","OAIP.9af56c84297db46381907c7c0206ce25":"1#1:44387","OAIP.b2581630ee70a719173a17496ab5d621":"1#1:44387","OAIP.e6a82315d1baed9d0e567189c8cefef4":"1#1:44387","OAIP.73be68f83160be0fe8b0fff8d89ceb23":"1#1:44387","OAIP.9ef139a4bdc8f38bc228c6c357318822":"1#1:44387","OAIP.1d63d7a8b4f661099cd97d88c4cdeb86":"1#1:44387","OAIP.f3871c0a0738afd64bbec46e9075fa00":"1#1:44387","OAIP.337683f6eb7bceeaf32747b8c05a8064":"1#1:44387","OAIP.52e8652184f6a4015fafcf623cd157e3":"1#1:44387","OAIP.116a3bb06a5c7a7523872c1ad44b2d05":"1#1:44387","OAIP.b8f7a21e845065df694010c06324781f":"1#1:44387","OAIP.6ddace8bc07c26be38d0bf65d67217b6":"1#1:44387","OAIP.f681e6cd09d396904c75bf60d2970d44":"1#1:44387","OAIP.637476662d16f6d90324bffda33c797d":"1#1:44387","OAIP.018c711ba21b12e76b0ff5651e8aedb0":"1#1:44387","OAIP.c4cce56c40f401c10e418ce8dd0113be":"1#1:44387","OAIP.1603ed2492c8a0e90c2c1efbba5f6c44":"1#1:44387","OAIP.197875f6c58d134fb73bd8e7571788e6":"1#1:44387","OAIP.98215fc5707622e49073715f4b6d6860":"1#1:44387","OAIP.43238f98853378506c45a9fb7a727e51":"1#1:44387","OADD2.8108971066940_1M6UY0L7YKBT879PK1":"1#1:44387","OADD2.8108970848169_13Z01FSYWPH6MNCMOV":"1#1:44387","OAIP.62545a8f380c721b2ead5765ce0346c8":"1#1:44387","OAIP.1a1720361cab059a1ba588ffcadbf3ba":"1#1:44387","OAIP.5116e457a73d7db31a7abd776a0dca32":"1#1:44387","OAIP.0b9b0acbf178734953a89df03dcb3aba":"1#1:44387","OAIP.ec5b3771edc2e8424e2993273d80fd9a":"1#1:44387","OAIP.689be8194a9ffa8eeea89671d1ffe09f":"1#1:44387","OADD2.8108970848164_1HR2ATAR870871BT0T":"1#1:44387","OAIP.b6575997bdec8773955c3197346ebe18":"1#1:44387","OADD2.8177828100093_1TL3Z6IUOKN0XU9KZZ":"1#1:44387","OAIP.8fb21468d4b1ddbb357e765907486ee2":"1#1:44387","OAIP.b51ee155e85119b22531e887df2719c6":"1#1:44387","OAIP.6df3407e70b6911ca60315f1421807c1":"1#1:44387","OAIP.88d295b0f5f1e5752a637b862f2be44a":"1#1:44387","OAIP.30a5326c6e172875877c24443f3fd760":"1#1:44387","OAIP.25484e940d954f58807fa331000f0fce":"1#1:44387","OAIP.e80a99b972947aeccca47ec3c25b2cb3":"1#1:44387","OAIP.21a35f85fcfe0976d3c691e4d0ae4f11":"1#1:44387","OAIP.09aebc50fe1c2dff1018a3b92f18a236":"1#1:44387","OAIP.2c01958acb6578ab901c0eec24cf0441":"1#1:44387","OAIP.99f668943c80b46557b873aa71474568":"1#1:44387","OAIP.9532dadae51fa5751c1cc50977d63a24":"1#1:44387","OADD2.8108970463333_199KJNXQVH49RBTGW2":"1#1:44387","OAIP.5e9227df6a3fea428eeb7a72aad36b1c":"1#1:44387","OAIP.51cbdddbdc545a3c5c047a4f19ec9add":"1#1:44387","OAIP.9f0fb36e53af81b223ba91d7804dab90":"1#1:44387","OADD2.7765387502356_1MH51HZTZVBH5Y41US":"1#1:44387","OADD2.8108902161844_1YNO68YFFJU29KHAFW":"1#1:44387","OADD2.7353042988005_1TXS4DLPV3MOHZ7ABW":"1#1:44387","OADD2.7215897866335_14OO0T01XEGYSZXG3I":"1#1:44387","OPHS.5t4i6LDlYHKaeA474C474":"1#1:44387","OADD2.8246389567285_1JYIRZNFNO29R4WOOG":"1#1:44387","OADD2.8246380003052_1XP2YTY5AV7CSJF5XQ":"1#1:44387","OADD2.8246389567252_1B240WNZZERYW6YLHX":"1#1:44387","OAIP.978d663b1e69067f607cf8caaf0e7bf7":"1#1:44387","OADD2.8246389567251_15ELFN48B5DACFP66P":"1#1:44387","OADD2.8246380003034_17YTU3A2DMG7QWD8S3":"1#1:44387","OADD2.8246389567284_1KFYPZHYZ0OXK1461U":"1#1:44387","OADD2.8246380770170_1PGLARVC2NXT03SD1B":"1#1:44387","OADD2.8246380003050_1SBLRAIR2EDRRX0E1I":"1#1:44387"},"ten.tnorfduolc.ix4qyaay71yp3d":{"/dsp-material/159449068_android_320x50_3b4015e4-382d-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/158546702_ios_320x50_91fa5374-2a63-11ec-84e2-02281b3ba838.png":"1#1:44387","/dsp-material/159449068_android_320x50_1be30674-382e-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/145196126_android_320x50_46a43eb2-5e4b-11ec-a645-02281b3ba838.png":"1#1:44387","/dsp-material/159871988_android_320x50_16136c9e-382f-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/159871988_android_320x50_e000638b-382e-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/159449068_android_320x50_5a3d002d-382d-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/155870069_android_320x50_eae8d6ac-5e4a-11ec-a645-02281b3ba838.png":"1#1:44387","/dsp-material/159449068_android_320x50_44613eea-382e-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/158702679_android_320x50_c1828988-4e9a-11ec-9735-02281b3ba838.png":"1#1:44387","/dsp-material/159449068_android_320x50_60bcfb03-382d-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/158365903_android_320x50_fe0e9681-4e97-11ec-9735-02281b3ba838.png":"1#1:44387","/dsp-material/158546702_ios_320x50_39e18cd6-51cd-11ec-99b5-02281b3ba838.png":"1#1:44387","/dsp-material/158365903_android_320x50_05d76109-4e98-11ec-9735-02281b3ba838.png":"1#1:44387","/dsp-material/155870069_android_320x50_6cc6a798-42d9-11ec-9023-02281b3ba838.png":"1#1:44387","/dsp-material/159871988_android_320x50_0afd9bfb-382f-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/158702679_android_320x50_b8a82dcf-4e9a-11ec-9735-02281b3ba838.png":"1#1:44387","/dsp-material/159449068_android_320x50_5257a3d3-382d-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/159449068_android_320x50_0ed94510-382e-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/159449068_android_320x50_0246e3f1-382e-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/159871988_android_320x50_fb633986-382e-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/159871988_android_320x50_ebf6ce55-382e-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/159688415_android_320x50_c56c14d2-bf1e-11ed-97d1-025d0ffe55c3.png":"1#1:44387","/dsp-material/143194321_android_320x50_5e1563bf-4921-11ec-92f1-02281b3ba838.png":"1#1:44387","/dsp-material/159449068_android_320x50_2a196290-382e-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/159449068_android_320x50_2c27962e-382d-11ee-9c1f-025d0ffe55c3.png":"1#1:44387","/dsp-material/159688415_android_320x50_6816c2e5-be60-11ed-97d1-025d0ffe55c3.png":"1#1:44387","/dsp-material/103057511_android_320x50_7ae078d8-3712-11ec-8ac5-02281b3ba838.png":"1#1:44387","/dsp-material/159449068_android_320x50_3418c982-382d-11ee-9c1f-025d0ffe55c3.png":"1#1:44387"},"moc.noitacidnyselgoog.cpt":{"/17925626013284087237":"1#1:44387","/17981238470455832618":"1#1:44387","/1333707146281874936":"1#1:44387","/9619185334699790859":"1#1:44387","/17201409866862789037":"1#1:44387","/12371490027494001532":"1#1:44387","/4525397463319547314":"1#1:44387","/9463975118483990082":"1#1:44387","/6477744117785062046":"1#1:44387","/4561335084747303061":"1#1:44387","/6693428671549231509":"1#1:44387","/3395533629092623221":"1#1:44387","/556163378143287590":"1#1:44387","/780274143710972164":"1#1:44387","/18015515288223441540":"1#1:44387","/10656084052191312629":"1#1:44387","/5550895602041335452":"1#1:44387","/12253557480691583774":"1#1:44387","/3381579516535275361":"1#1:44387","/14867794047367685118":"1#1:44387","/4335690529486486807":"1#1:44387","/17854794143440710709":"1#1:44387","/14791969798575698554":"1#1:44387","/9572824771367963899":"1#1:44387","/11402362079838599094":"1#1:44387","/3572503567847927233":"1#1:44387","/246697094656365125":"1#1:44387","/4265740019825248357":"1#1:44387","/8022318433593050343":"1#1:44387","/14870495925898010020":"1#1:44387","/4005448831548414254":"1#1:44387","/4212755386825445110":"1#1:44387","/2616013321384384252":"1#1:44387","/547877256127221487":"1#1:44387","/3610705186203059600":"1#1:44387","/5229332377135088134":"1#1:44387","/11154135937891399669":"1#1:44387","/10918477261362530081":"1#1:44387","/15898986374864420169":"1#1:44387","/5813683787425537162":"1#1:44387","/11830869928917545203":"1#1:44387","/11637687187714904177":"1#1:44387","/16511947757523127117":"1#1:44387","/17300640074299510935":"1#1:44387","/12812203550883091254":"1#1:44387","/4968366679481510954":"1#1:44387","/12645546371092921989":"1#1:44387","/8976446803374161541":"1#1:44387","/16594136430820125893":"1#1:44387","/7735830246384339856":"1#1:44387","/8618522248286280884":"1#1:44387","/3490974739233893480":"1#1:44387","/12508665433562610436":"1#1:44387","/7737285707223030295":"1#1:44387","/16795505492407897108":"1#1:44387","/10489344973524560799":"1#1:44387","/11632803546817160562":"1#1:44387","/2943360099959749733":"1#1:44387","/15784812481028859281":"1#1:44387","/4022678807524030875":"1#1:44387","/593891623939021416":"1#1:44387","/13457350263239564139":"1#1:44387","/10951385100134108493":"1#1:44387","/12875034483382584833":"1#1:44387","/5465192376702260984":"1#1:44387","/10271756440663084806":"1#1:44387","/4643421181915185240":"1#1:44387","/3694440380645525369":"1#1:44387","/12866026473882603721":"1#1:44387","/8849951698240565910":"1#1:44387","/4615443639908044784":"1#1:44387","/17950368717763195560":"1#1:44387","/11385615946945426525":"1#1:44387","/13410893236220635375/":"1#1:44387","/7337070732441226032":"1#1:44387","/2066347262019615641":"1#1:44387","/16418682762135294501":"1#1:44387","/4118732604543904294":"1#1:44387","/244323036456130487":"1#1:44387","/1342262010545069786":"1#1:44387","/12563338749842123313":"1#1:44387","/3719130220455551209":"1#1:44387","/3381234603626224533":"1#1:44387","/5838921229031769217":"1#1:44387","/2771141423627130063":"1#1:44387","/754294614545389550":"1#1:44387","/10234882875486676987":"1#1:44387","/3323108016697302428":"1#1:44387","/18167553667483750215":"1#1:44387","/13909055638210437051/":"1#1:44387","/3067395723243006717":"1#1:44387","/12804642087930390921":"1#1:44387","/612585774054307540":"1#1:44387","/3070567618874066132":"1#1:44387","/5324536507048099397":"1#1:44387","/8426812370251482065":"1#1:44387","/16166519421853237518":"1#1:44387","/15286355341070196030":"1#1:44387","/13853589161787134618":"1#1:44387","/7815530384108908710":"1#1:44387","/5713642994540986173":"1#1:44387","/9354878756764004011":"1#1:44387","/17057583285736516286":"1#1:44387","/11187942458314999996/":"1#1:44387","/445392028818544380":"1#1:44387","/5456462641106528227":"1#1:44387","/15199467828282440966":"1#1:44387","/3723372624917679307":"1#1:44387","/4650964670995596943":"1#1:44387","/1275679465510249857":"1#1:44387","/1546959312479438542":"1#1:44387","/11265025029059775853":"1#1:44387","/5584337921079174060":"1#1:44387","/7878878018728957761":"1#1:44387","/2914349705548515401":"1#1:44387","/8705789078262744522":"1#1:44387","/6914672973017035696":"1#1:44387","/10776015528954394522":"1#1:44387","/12135459439551441439":"1#1:44387","/4284557500609649659":"1#1:44387","/13592200180336572123":"1#1:44387","/15239455592521635864":"1#1:44387","/14619098781836861218":"1#1:44387","/2620743590714683720":"1#1:44387","/17524309313815949449":"1#1:44387","/14935558873396860203":"1#1:44387","/14575854364684479961":"1#1:44387","/7650948964168512481":"1#1:44387","/7812451706179863583":"1#1:44387","/7681154680251284162":"1#1:44387","/8092246175248987661":"1#1:44387","/3766798105118998735":"1#1:44387","/8839786533216161157":"1#1:44387","/8668380858447793672":"1#1:44387","/4177544977937214302":"1#1:44387","/5500696850393377714":"1#1:44387","/12691353002778233998":"1#1:44387","/8228761325942174531":"1#1:44387","/11402941152556382739":"1#1:44387","/11413859590342228000":"1#1:44387","/17083463124650443169":"1#1:44387","/3367250947063294907":"1#1:44387","/16080657494629751693":"1#1:44387","/3143637958025868886":"1#1:44387","/16162937878392879105":"1#1:44387","/14667627783151414176":"1#1:44387","/6481173974818610891":"1#1:44387","/7339370177568060109":"1#1:44387","/7468306048722466175":"1#1:44387","/6963840533742899561":"1#1:44387","/11784360829312655288":"1#1:44387","/7610570124718069511":"1#1:44387","/5111243467515226329":"1#1:44387","/12711965307866809677":"1#1:44387","/1344145639969275228":"1#1:44387","/321950681652384287":"1#1:44387","/13645081470320125766":"1#1:44387","/1903186505192842453":"1#1:44387","/12999548147428353337":"1#1:44387","/3412068638577065271":"1#1:44387","/6022606550742497904":"1#1:44387","/5418859117723405806":"1#1:44387","/4063971475064201284":"1#1:44387","/415744777176750887":"1#1:44387","/13409718147005529107":"1#1:44387","/8027944732556115450":"1#1:44387","/10513626834497848168":"1#1:44387","/142989743402840517/":"1#1:44387","/10552099363083207055":"1#1:44387","/8792536329002014194":"1#1:44387","/14014210917293597636":"1#1:44387","/1393814231770157593":"1#1:44387","/8754376713794235102":"1#1:44387","/6321203437702444815":"1#1:44387","/10783207874331308246":"1#1:44387","/1986529346328449500":"1#1:44387","/14002880775878087842":"1#1:44387","/11167429467413882075":"1#1:44387","/14097222408404729319":"1#1:44387","/16408167201327991012":"1#1:44387","/4776341766412203994":"1#1:44387","/15383398979663157000":"1#1:44387","/10175651914309287282":"1#1:44387","/15418425601270268552":"1#1:44387","/14093492409975544134":"1#1:44387","/62081471303965579":"1#1:44387","/10848539278398154829":"1#1:44387","/10107084137305725826":"1#1:44387","/8754508239713770665":"1#1:44387","/11552033023222983680":"1#1:44387","/9240172844786533929":"1#1:44387","/6233466453337427025":"1#1:44387","/9512354323782119490":"1#1:44387","/7939716275644381978":"1#1:44387","/9791474411133711848":"1#1:44387","/6499293392099286822":"1#1:44387","/2162699677361184444":"1#1:44387","/1262367926742539878":"1#1:44387","/6579947126966836177":"1#1:44387","/52184471771042478":"1#1:44387","/11163469092636176258":"1#1:44387","/4433116755886941108":"1#1:44387","/15015118121192200528/":"1#1:44387","/12587490342708819635":"1#1:44387","/13719935392890367515":"1#1:44387","/7812356871462515344":"1#1:44387","/3347755336263880592":"1#1:44387","/10618393210419083044":"1#1:44387","/13413634032006127969":"1#1:44387","/15282516428381492489":"1#1:44387","/3675723011930230760":"1#1:44387","/8777846136298875445":"1#1:44387","/6182813862666793331":"1#1:44387","/9683439123214735077":"1#1:44387","/16004641827812045164":"1#1:44387","/14724272020528646611":"1#1:44387","/12891643376738250759":"1#1:44387","/3219846048932941905":"1#1:44387","/7001155547429189576":"1#1:44387","/11028603491204999861":"1#1:44387","/17778428214473455902/":"1#1:44387","/13499101930237485478":"1#1:44387","/13420896663663767130":"1#1:44387","/14315259118026689090":"1#1:44387","/4444157769341008139":"1#1:44387","/14320491361581264516":"1#1:44387","/15058648985661858131":"1#1:44387","/6700975407234338379":"1#1:44387","/16501381666097574253":"1#1:44387","/2047052073186400374":"1#1:44387","/936995064815702108":"1#1:44387","/5634545065747613666":"1#1:44387","/5339127182058535517":"1#1:44387","/10638282260584882890":"1#1:44387","/11825831840866044628/":"1#1:44387","/2677872596691663791/":"1#1:44387","/2383676476035879241":"1#1:44387","/9546823617037731060":"1#1:44387","/1970949716621356855":"1#1:44387","/15647590822321670271":"1#1:44387","/18020646906814221190/":"1#1:44387","/1877507204741590381":"1#1:44387","/6066362702559102195":"1#1:44387","/8851567470563635225":"1#1:44387","/10855648985818989689":"1#1:44387","/4282488969923357888":"1#1:44387","/5058437542686668643":"1#1:44387","/4507788682632722151":"1#1:44387","/10794828645064125404":"1#1:44387","/13044785893997529433":"1#1:44387","/2478531672594190259/":"1#1:44387","/14522149437113957961":"1#1:44387","/15712197707844417945":"1#1:44387","/1809688151235471903":"1#1:44387","/10566579592053020359":"1#1:44387","/11047385377355200121":"1#1:44387","/6183455444039633804":"1#1:44387","/10421273283044159489":"1#1:44387","/18079486660434355329":"1#1:44387","/1420238374349433058":"1#1:44387","/11656775098785854547":"1#1:44387","/16906137394740881667":"1#1:44387","/7436242451093036874":"1#1:44387","/2073008148558361137":"1#1:44387","/14243833128626027839":"1#1:44387","/15761559910433586334":"1#1:44387","/12039467531384955":"1#1:44387","/13136467581693560528/":"1#1:44387","/870587729704976438":"1#1:44387","/2030101134552216704":"1#1:44387","/5051258263553714161/":"1#1:44387","/9022992575709728680":"1#1:44387","/9011973141296958473":"1#1:44387","/11778604948800383788":"1#1:44387","/13058379177621163612":"1#1:44387","/6957570441310572261":"1#1:44387","/13614683500107625578":"1#1:44387","/17151688359600450257":"1#1:44387","/5747216550603277319":"1#1:44387","/3140595037778349031":"1#1:44387","/15322697374689473928":"1#1:44387","/9647415926601713338":"1#1:44387","/7709554495884803859":"1#1:44387","/16596424019123045473":"1#1:44387","/8315005477253174019":"1#1:44387","/15409323552279401348":"1#1:44387","/14015775643817497667":"1#1:44387","/9119114932533656539":"1#1:44387","/15419841100965996467":"1#1:44387","/4976937934947841342":"1#1:44387","/12134274385881462433":"1#1:44387","/2019165109521900538":"1#1:44387","/4798473564691242192/":"1#1:44387","/12687820996023704024":"1#1:44387","/8744215292562851042/":"1#1:44387","/6732225881888599580":"1#1:44387","/8347135060255913557":"1#1:44387","/16578408589426237900":"1#1:44387","/3965314917699967368/":"1#1:44387","/14551897954233987153":"1#1:44387","/15723650208283760322":"1#1:44387","/18230028592588344047":"1#1:44387","/6710411841599413033/":"1#1:44387","/8406377672998162973":"1#1:44387","/2194324356176915650":"1#1:44387","/13327661589503225912/":"1#1:44387","/6032316346100937751":"1#1:44387","/12499889131844479573":"1#1:44387","/15850028484080512521":"1#1:44387","/12620628783374559704/":"1#1:44387","/7242333998234988791":"1#1:44387","/18070406543962082461":"1#1:44387","/7563999477531971545":"1#1:44387","/5758947542427490226":"1#1:44387","/6505366991111570866/":"1#1:44387","/17000462650365476358":"1#1:44387","/8089740613231155000":"1#1:44387","/9857668954313303473":"1#1:44387","/8029699704370353197/":"1#1:44387","/9040310803721975001":"1#1:44387","/5969126527334958979":"1#1:44387","/1299117664592764593":"1#1:44387","/11553009347655670278":"1#1:44387","/7412417151008531577/":"1#1:44387","/6280018848509163658":"1#1:44387","/6561492549046551347/":"1#1:44387","/4998447701757511783/":"1#1:44387","/16304526972860923879/":"1#1:44387","/9949592802009796272/":"1#1:44387","/17341353923110443981/":"1#1:44387","/5966057495349233935":"1#1:44387","/8762237186883507655/":"1#1:44387","/12921865089416699827/":"1#1:44387","/7824562317572318366":"1#1:44387","/4293573340737415880/":"1#1:44387","/9563147108238267949/":"1#1:44387","/16718798861290012714/":"1#1:44387","/10001671073566401460":"1#1:44387","/7424484981158775432/":"1#1:44387","/6632152944589523733":"1#1:44387","/2554811389955515850":"1#1:44387","/15471064959563632125":"1#1:44387","/10445932817176579431":"1#1:44387","/1862084422734724889":"1#1:44387","/9329036107849000551":"1#1:44387","/8728290213493675259":"1#1:44387","/3284201602859216276":"1#1:44387","/6901256967665340715":"1#1:44387","/13255408285800008924":"1#1:44387","/15145462202486264023":"1#1:44387","/12205819690773246955":"1#1:44387","/12538349759610200358/":"1#1:44387","/16510032890962576980":"1#1:44387","/4798719385172145691":"1#1:44387","/16282472001146786994":"1#1:44387","/4494198970510502904":"1#1:44387","/5510720985615057782/":"1#1:44387","/438411233801373602/":"1#1:44387","/2052366985179388279":"1#1:44387","/7377010250600491881":"1#1:44387","/17241984928572148538":"1#1:44387","/11222647795298889912":"1#1:44387","/5709552520747779059":"1#1:44387","/12035341095661242252":"1#1:44387","/2469440796401301347":"1#1:44387","/9157186830445098548":"1#1:44387","/15813059863037576809":"1#1:44387","/6225036499695912930":"1#1:44387","/6382367118404524846":"1#1:44387","/17844909616123995312":"1#1:44387","/3972999672710954707":"1#1:44387","/13903705106229471736":"1#1:44387","/11147226424705957129":"1#1:44387","/4418578742349402907":"1#1:44387","/7934641958870556182":"1#1:44387","/5346626588948287142":"1#1:44387","/1749481401172391947":"1#1:44387","/12313813008560976848":"1#1:44387","/2073743076065697924":"1#1:44387","/12446293635342676882":"1#1:44387","/11830371670237588509":"1#1:44387","/4342296297760589464":"1#1:44387","/10836778101702966040":"1#1:44387","/5896980717482433736":"1#1:44387","/11049690486710894622":"1#1:44387","/10878672742975376432":"1#1:44387","/1723635443550058231":"1#1:44387","/9060764608718366166":"1#1:44387","/18201580409592043037":"1#1:44387","/3264303241208012943":"1#1:44387","/17302507807570912345":"1#1:44387","/8583400674121622503":"1#1:44387","/1678430683881366318":"1#1:44387","/4816406387765094878":"1#1:44387","/10082694367518752761":"1#1:44387","/7431243867419340683":"1#1:44387","/17971110171682744105":"1#1:44387","/6490130926877952793":"1#1:44387","/18332589009980087712":"1#1:44387","/16481168550419245283":"1#1:44387","/14874519280793752886":"1#1:44387","/14489666773465481930":"1#1:44387","/8361266280919418222":"1#1:44387","/17750600641444695511":"1#1:44387","/8114011480598570455":"1#1:44387","/3884908429105794945":"1#1:44387","/15289016828649790039":"1#1:44387","/138479211032323558":"1#1:44387","/15522933920310391346":"1#1:44387","/6869172240117296723":"1#1:44387","/12254422359420933046":"1#1:44387","/9837719906733148060":"1#1:44387","/10102299632399021468":"1#1:44387","/16897063707928183365":"1#1:44387","/11508254844973714465":"1#1:44387","/14737227087273285794":"1#1:44387","/11265817536423757947":"1#1:44387","/11666265562210964105":"1#1:44387","/9348715740480615547":"1#1:44387","/16751115715291817266":"1#1:44387","/339399348070322344":"1#1:44387","/17633392122871224178":"1#1:44387","/328445310536807789":"1#1:44387","/17525508210597404169":"1#1:44387","/9295135160416694341":"1#1:44387","/2333776279958078014":"1#1:44387","/16020681492432527433":"1#1:44387","/16348117726989339106":"1#1:44387","/11098995479791345987":"1#1:44387","/17376493877724495029":"1#1:44387","/10777827147662766034":"1#1:44387","/18365311843599199262":"1#1:44387","/4993519716099240401":"1#1:44387","/2430409286971831491":"1#1:44387","/17728359870882885394":"1#1:44387","/12736029560014736858":"1#1:44387","/10812433054841809914":"1#1:44387","/13042705553244356803":"1#1:44387","/5696069700026907272":"1#1:44387","/15312132534327647420":"1#1:44387","/7457915181485282656":"1#1:44387","/1221545488649727825":"1#1:44387","/808485767821296257":"1#1:44387","/16761531441611544362":"1#1:44387","/17621674360880488991":"1#1:44387","/9670461743886952616":"1#1:44387","/14664889335504633935":"1#1:44387","/7029735249053379908":"1#1:44387","/139304221388928000":"1#1:44387","/13282715046477002662":"1#1:44387","/6670312851133319227":"1#1:44387","/16439016033271923915":"1#1:44387","/10667064920371707172":"1#1:44387","/10518928225327755675":"1#1:44387","/2197271032714474653":"1#1:44387","/16218079848891220487":"1#1:44387","/5674811941433627211":"1#1:44387","/17528293366413704801":"1#1:44387","/106011206476223909":"1#1:44387","/10281276774136567224":"1#1:44387","/229057046400532567":"1#1:44387","/6440790401772578498":"1#1:44387","/1702934776226220689":"1#1:44387","/18339184174789685630":"1#1:44387","/12257849678367101317":"1#1:44387","/13366659386689858409":"1#1:44387","/2612845205598518109":"1#1:44387","/15406753368582719160":"1#1:44387","/9019699205900680834":"1#1:44387","/13044911185161672813":"1#1:44387","/2230073403654528359":"1#1:44387","/7308679001611989002":"1#1:44387","/7112110956178934754":"1#1:44387","/2104122555344888693":"1#1:44387","/6515964479470900608":"1#1:44387","/8237546064416925380":"1#1:44387","/7072812460372272014":"1#1:44387","/7650045285124758341":"1#1:44387","/2177627544495393760":"1#1:44387","/17799240750199342972":"1#1:44387","/3678583086700816738":"1#1:44387","/6342726423285100596":"1#1:44387","/2976505706263634473":"1#1:44387","/17524856686312945881":"1#1:44387","/14452967419201544469":"1#1:44387","/9752642561646265075":"1#1:44387","/17401715278398038443":"1#1:44387","/15578927944906288263":"1#1:44387","/2968543651976777982":"1#1:44387","/8219473060945393988":"1#1:44387","/16362626455652691905":"1#1:44387","/17227142668001114783":"1#1:44387","/13000294673182951934":"1#1:44387","/2596637109658913023":"1#1:44387","/9928780885534204998":"1#1:44387","/15878466700682861226":"1#1:44387","/12235235636619995651":"1#1:44387","/10394992290394056009":"1#4:44798","/10344110205457084750":"1#11:30478","/1599230664305966976":"1#11:30478","/548444687097634923":"1#11:30478$15:34287","/17253511205243551007":"1#11:30478","/7197925617069577093":"1#11:30478","/155564621813906775":"1#12:35415","/14582296664855075098":"1#12:35415","/5342322815048352210":"1#12:35415","/18089284836721300906":"1#12:35415","/1573066898995566174":"1#15:34287","/4453445408644277426":"1#15:34287","/7649859632321204491":"1#15:34287","/12924613321731312396":"1#20:34260","/1767059509162078758":"1#20:34260","/18409309905905287801":"1#20:34260","/6747106918380482787":"1#20:34260","/13903748646499608351":"1#20:34260","/16679161064467022438":"1#20:34260","/4149582302766770689":"1#20:34260","/9993271030751370251":"1#20:34260","/1623285009167777142":"1#20:34260","/2296391091021836582":"1#20:34260","/12836374614120960320":"1#20:34260","/8582114374616206152":"1#20:34260","/2172456353704132405":"1#20:34260","/6570121925497122207":"1#20:34260","/16172443194292190878":"1#20:34260","/9892801061113748823":"1#20:34260","/12830704311702609016":"1#20:34260","/14012397346073887157":"1#20:34260","/8386717523279455161":"1#20:34260","/6918717706216284166":"1#20:34260","/8076356995619539359":"1#20:34260","/5831084049485416192":"1#20:34260","/2857884758320862399":"1#20:34260","/6342138793341650977":"1#20:34260","/15521485123309971970":"1#20:34260","/15254329265625666200":"1#20:34260","/10764163983587120792":"1#20:34260","/2437868324456657957":"1#20:34260","/5706042563438024988":"1#20:34260","/17046996587311744138":"1#20:34260","/14225301960410734869":"1#20:34260","/424064236306642928":"1#20:34260","/12969538579589563412":"1#20:34260","/7486805019005997004":"1#21:34230","/13888165382829236247":"1#21:34230","/7509469178521290841":"1#21:34230","/14431695991188072540":"1#21:34230","/1412488634921570155":"1#21:34230","/3879606196576037702":"1#21:34230","/11312020431316926432":"1#21:34230","/7793300416379203799":"1#21:34230","/13487540643746929500":"1#21:34230","/12114009111358871901":"1#21:34230","/5766781225855511984":"1#21:34230","/13428126255354988989":"1#21:34230","/14001194796332103783":"1#21:34230","/13502606341467757575":"1#21:34230","/2964505293343592171":"1#21:34230","/16995248090076391103":"1#21:34230","/4651267103700246034":"1#21:34230","/14514129872158058465":"1#22:33969","/14375077370025408096":"1#22:33969","/17595705118829508072":"1#26:29155","/109588791773452319":"1#35:10828","/12207225334261595808":"1#515:21419"},"ten.kcilcelbuod.g.sdaelgoog":{"solarnienergie.co":"1#1:44387","are.cupidmobi.com":"1#1:44387","77snowmeprona.za.com":"1#1:44387","crazemob.com":"1#1:44387","commonsearches.net":"1#1:44387","micromad.es":"1#1:44387","uk.topcontentmusic.com":"1#1:44387","gr.mobioappz.cloud":"1#1:44387","www.mobioclub.com":"1#1:44387","promo.unlimited-streaming-qa.com":"1#1:44387","liff-gateway.lineml.jp":"1#1:44387","www.atarsuccess.com.au":"1#1:44387","babobake.com":"1#1:44387","testirs.com":"1#1:44387","ustoupit.co":"1#1:44387","www.toolost.com":"1#1:44387","loginonline.co":"1#1:44387","ichkanndichhoren.co":"1#1:44387","getrecipesearch.com":"1#1:44387","free.webcompanion.com":"1#1:44387","flighttabpro.com":"1#1:44387","allbestrecipes.net":"1#1:44387","secure.jouvo.com":"1#1:44387","media-zone.stream":"1#1:44387","gethowtoguides.com":"1#1:44387","getcalendarsnow.com":"1#1:44387","get.allbestrecipes.net":"1#1:44387","www.electroplanet.ma":"1#1:44387","easyview.app":"1#1:44387","installapps.com":"1#1:44387","getconvertpdf.com":"1#1:44387","mobileportalcontent-sa.fun":"1#1:44387","getmanualssearch.com":"1#1:44387","downloadinghere.com":"1#1:44387","allmediaaccess.com":"1#1:44387","drivingdirectionsab.com":"1#1:44387","readfav.com":"1#1:44387","geteasyemail.com":"1#1:44387","ke.movfan.com":"1#1:44387","userecipesonline.com":"1#1:44387","register.content-sync.com":"1#1:44387","www.motea.com":"1#1:44387","gettemplatesfast.com":"1#1:44387","endlesslivesports.com":"1#1:44387","geteasypdf.com":"1#1:44387","viewrecipe.net":"1#1:44387","printnowapp.com":"1#1:44387","vodbucket.com":"1#1:44387","tryeasyrecipes.com":"1#1:44387","gettvsearch.org":"1#1:44387","easyloginnow.com":"1#1:44387","pdfixers.com":"1#1:44387","infinitelycontent.com":"1#1:44387","taskmanagertab.com":"1#1:44387","lux.goplaybay.com":"1#1:44387","frompdftodoc.com":"1#1:44387","getquickmanuals.com":"1#1:44387","dulcetty.com":"1#1:44387","unlimited-download.net":"1#1:44387","getexpressinbox.com":"1#1:44387","pdftab.com":"1#1:44387","promo.streaming-illimite-ci.com":"1#1:44387","download4.online":"1#1:44387","streamify.pro":"1#1:44387","www.swengines.com":"1#1:44387","upfics.com":"1#1:44387","zustik.com":"1#1:44387","alltopcontent.com":"1#1:44387","zaf.videoslands.com":"1#1:44387","thcos.equip-videos.com":"1#1:44387","unlimitedvod.com":"1#1:44387","unloadmax.com":"1#1:44387","streamfy.pro":"1#1:44387","iqonlinetool.org":"1#1:44387","kwt.bidiotv.com":"1#1:44387","cr.fountain-content.com":"1#1:44387","flashrewardsca.com":"1#1:44387","enter.prizegrab.com":"1#1:44387","www.fnac.es":"1#1:44387","urlaubscafe.de":"1#1:44387","aisfibreforyou.com":"1#1:44387","dependableresilience4you.com":"1#1:44387","energizedresilience.com":"1#1:44387","healthy-guru.com":"1#1:44387","headphoneseast.com":"1#1:44387","jommasukuniti.com":"1#1:44387","www.piplbharat.com":"1#1:44387","roezer.com":"1#1:44387","www.oggibenessere.com":"1#1:44387","daytimerevelations.com":"1#1:44387","pursuehealthyliving.com":"1#1:44387","www.hoeren-heute.de":"1#1:44387","www.asterhospitals.in":"1#1:44387","netastrol.com":"1#1:44387","www.move2gozo.com":"1#1:44387","www.wakefit.co":"1#1:44387","easyprintapp.net":"1#1:44387","uiywa.shop":"1#1:44387","beyond4.tech":"1#1:44387","exportvehiculos.com":"1#1:44387","www.dandyrecipes.com":"1#1:44387","iqtestinfo.com":"1#1:44387","benefitdiscoveries.com":"1#1:44387","u-cola.com":"1#1:44387","mssg.me":"1#1:44387","www.moj-posao.net":"1#1:44387","amani17.shop":"1#1:44387","marywleach.xyz":"1#1:44387","sharontwalters.xyz":"1#1:44387","denisejadamo.icu":"1#1:44387","www.evaair.com":"1#1:44387","alanmruggles.icu":"1#1:44387","static-cf.rummycircle.com":"1#1:44387","www.toppermfg.com":"1#1:44387","www.rakuten.co.jp":"1#11:30478","itwo-mall.com":"1#11:30478$1:m","galcomi.jp":"1#12:35415","www.cloudpoint.co.jp":"1#20:34260","10mtv.jp":"1#20:34260","entm.auone.jp":"1#20:34260","www.chiso.co.jp":"1#20:34260","myluxurycard.co.jp":"1#21:34230","jp.acrobiosystems.com":"1#21:34230","takasaki-sekkotsuin.com":"1#22:33969","www.j-base.net":"1#22:33969","www.sbivc.co.jp":"1#26:29155","www.vincentmotors.com.hk":"1#1:m"},"moc.oetirc":{"?creative=11284141&":"1#1:44387","?creative=11373513&":"1#1:44387","?creative=11023581&":"1#1:44387","?creative=11258205&":"1#1:44387","?creative=11332558&":"1#1:44387","?creative=11386505&":"1#1:44387","?creative=10970215&":"1#1:44387","?creative=11042979&":"1#1:44387","?creative=11135546&":"1#1:44387"},"hcet.elgnuoy.ldg":{"/as/web-source/4hc/18yXBf.png":"1#1:44387","/as/web-source/4hc/2hFoWQ.png":"1#1:44387","/as/web-source/4hd/216V00m.png":"1#1:44387","/as/web-source/4hd/16Eswe2.png":"1#1:44387","/as/web-source/4hd/01iyiz.jpeg":"1#1:44387","/as/web-source/4hd/1LPDKZq.png":"1#1:44387","/as/web-source/4hd/0DdJ7x.jpeg":"1#1:44387","/as/web-source/4hd/03kbfE.png":"1#1:44387","/as/web-source/4hc/1j0S57.png":"1#1:44387","/as/web-source/4hb/0jI6gw.png":"1#1:44387","/as/web-source/4hd/06A5GLc.png":"1#1:44387","/as/web-source/4hb/0uaavN.jpeg":"1#1:44387","/as/web-source/4hd/29BMfXA.jpeg":"1#1:44387","/as/web-source/4hb/2xSJQG.png":"1#1:44387","/as/web-source/4hd/123iz3t.png":"1#1:44387","/as/web-source/4hb/2iD3y2.jpeg":"1#1:44387","/as/web-source/4hc/1qkaIM.png":"1#1:44387","/as/web-source/4hb/1f05Wb.png":"1#1:44387","/as/web-source/4hd/2LSt8wq.png":"1#1:44387","/as/web-source/4hc/1sUDpB.png":"1#1:44387","/as/web-source/4hd/2AI6z6R.png":"1#1:44387","/as/web-source/4hd/0uz0QCs.png":"1#1:44387","/as/web-source/4hc/2ip4Vc.jpeg":"1#1:44387","/as/web-source/4hc/0legVc.jpeg":"1#1:44387","/as/web-source/4hd/2EuzSx.png":"1#1:44387","/as/web-source/4hd/219jeMy.jpeg":"1#1:44387","/as/web-source/4hd/226pz4.jpeg":"1#1:44387","/as/web-source/4hd/22Ayqit.png":"1#1:44387","/as/web-source/4hd/19CSKMM.png":"1#1:44387","/as/web-source/4hd/025YeX7.jpeg":"1#1:44387","/as/web-source/4hd/2uzwTW6.png":"1#1:44387","/as/web-source/4hd/15AOLOW.png":"1#1:44387","/as/web-source/4hb/0lfIPZ.jpeg":"1#1:44387","/as/web-source/4hd/0YD6tu.png":"1#1:44387","/as/web-source/4hd/1aH5qb.png":"1#1:44387","/as/web-source/4hd/2GPOEFZ.png":"1#1:44387","/as/web-source/4hc/2kiATn.jpeg":"1#1:44387","/as/web-source/4hd/127SYw7.jpeg":"1#1:44387","/as/web-source/4hd/29Gdc2w.png":"1#1:44387","/as/web-source/4hd/29GmTIw.png":"1#1:44387"},"if.ilpmis":{"/ads/3290127/34767476":"1#1:44387","/ads/3290146/34767480":"1#1:44387","/ads/3290147/34767488":"1#1:44387","/ads/3795717/34866961":"1#1:44387","/ads/3290154/34767894":"1#1:44387","/ads/3392857/34767945":"1#1:44387","/ads/3392857/34767942":"1#1:44387","/ads/3290152/34767693":"1#1:44387","/ads/3290150/34767494":"1#1:44387","/ads/3785619/34721597":"1#1:44387","/ads/3633957/33053694":"1#1:44387","/ads/3600962/35112331":"1#1:44387","/ads/3600962/34602996":"1#1:44387","/ads/3785629/34722021":"1#1:44387","/ads/3547781/34197703":"1#1:44387","/ads/3785619/34721600":"1#1:44387","/ads/3624370/32951078":"1#1:44387","/ads/3548385/34197767":"1#1:44387","/ads/3785565/34721073":"1#1:44387","/ads/3649879/33250738":"1#1:44387","/ads/3785616/34721550":"1#1:44387","/ads/3785565/34721072":"1#1:44387","/ads/2668669/32703612":"1#1:44387","/ads/2983660/34923160":"1#1:44387","/ads/3785565/34721071":"1#1:44387","/ads/3618671/32885613":"1#1:44387","/ads/3449148/31192211":"1#1:44387","/ads/3449148/31192210":"1#1:44387","/ads/3819593/35203837":"1#1:44387","/ads/3819593/35203836":"1#1:44387","/ads/3785629/34722016":"1#1:44387","/ads/3819593/35203834":"1#1:44387","/ads/3455333/33253517":"1#1:44387","/ads/2983492/33341119":"1#1:44387","/ads/3748964/34332647":"1#1:44387","/ads/3785629/34722017":"1#1:44387","/ads/3455333/33253516":"1#1:44387","/ads/3727483/34198625":"1#1:44387","/ads/3806362/35015877":"1#1:44387","/ads/3785628/34721991":"1#1:44387","/ads/3547781/34197702":"1#1:44387","/ads/3785629/34722018":"1#1:44387","/ads/2983492/34924216":"1#1:44387","/ads/3819592/35203838":"1#1:44387","/ads/3819592/35203840":"1#1:44387","/ads/3691237/33727932":"1#1:44387","/ads/3621690/32913121":"1#1:44387","/ads/3621690/33973113":"1#1:44387","/ads/3621690/32913120":"1#1:44387","/ads/3621690/32913123":"1#1:44387"},"ac.elgoog.www":{"www.toolost.com":"1#1:44387"},"moc.nideknil.tsew-su-btr":{"crid=366495196":"1#1:44387","crid=366163416":"1#1:44387","crid=349824443":"1#1:44387","crid=366467886":"1#1:44387","crid=182828676":"1#1:44387","crid=367079266":"1#1:44387","crid=369413086":"1#1:44387","crid=348351416":"1#1:44387","crid=341152593":"1#1:44387","crid=355385833":"1#1:44387","crid=341133163":"1#1:44387","crid=369355166":"1#1:44387"},"moc.tnetnocresuelgoog":{"0NQsvadrIdvVWXSHp9qXkSYYn6gTuK4h2snJ_ISC8E3qg11LV3":"1#1:44387","LMFl-LU6vyjkaWOLQrD34Qhi4Z0n45QjIPyyED9sh7L_qRGyQU":"1#1:44387","fm97kFyl2rKV-yVkvnwGUEZ_U7Prn07Of4ybAQs3yybePgrlat":"1#1:44387","pOF_33ghzbc0VdEugySb8jPWEwe1lKYe98TdOTzzP4N6V6PKGC":"1#1:44387","XtHoH4e_trhshhVdLAH9CqC3xhFutnHUzoyMFZMemuqVRuDwFr":"1#1:44387","_Wc1zez-cqoFYMoYvaWLIenO6iM-WzHhx9fP2CuSlCa7bkRggG":"1#1:44387","dRrCl1kU90kzDuMwER1ZToyPbvOd2_Y2_3O2pVO3lyQ40ihHk4":"1#1:44387","wXIKiaa9TJgabwQE0WHVNMcOGhAUcQyOpMFpZkYdsKYw9SB5jN":"1#1:44387","CvUP-4Bkom5JS7tebd0Y7mYsgI9MjkWd0OXri5Y1-95BakAZKP":"1#1:44387","hFIjrnmIUeyIpY3IDtpFY54y_d7BzCqj9CgalZafdmUcFr2j_E":"1#1:44387","mINTC1glWEP-Vj-_prOyNJSo4wyJWDj_qo7opsys8M34cNoi2B":"1#1:44387","PjXqPwQhfrzwrwQhxXiJ0DxuzL8YY_olbjfXRwJrQkAh0WYvwu":"1#1:44387","uFOA_8_OEckGm0U4Ln1C6D9ikTPE3U3IMWnpcTzlZxWuoaTQH_":"1#1:44387","JwEJ3yREYhFgyOrBXGalpBnWivbRsCen-MQRy5rVZ04QIp3GTO":"1#1:44387","siPkFlHKu0PWh8SJ34AqPHEo89HCGHRpqEiYtgw3gJZv7n0ikO":"1#1:44387","b3i4mA8yqiLoQgMCLU4ojJykW-yHc14AyVphCukKQRcfHGNPQO":"1#1:44387","FX9z034oqRe3AxGkWLbVu815UgLCC6Htp3IfduqZQaY07hr114":"1#1:44387","YetEM8JNS28FN5hs01cnzgAKhsNKWd6NgU4F4zxePzZGkdbxVf":"1#1:44387","jczklAkrQU4PyF4HQG-XvThJVa8KitCxF1wRj5Rlvyr-V1gKfM":"1#1:44387","ZMYN9Yv07sfA0oUtSFfl-FVifhTTzYlxOBvCY7v_T1swPS9JDl":"1#1:44387","R2StQPAnrcvNUoZcjsdI7IIBPd64bDo1cAiIT6Okevz_j4uCsB":"1#1:44387","-5tYnj144CfZnAD5no9Jwj4F7byCuBJeO_L4Zsdid2YniiT7wp":"1#1:44387","UdM7HGKJoZCB9NGRYbN8uFYrWWfX4l3GWtqkl4EfkUDDAmeIXX":"1#1:44387","s6ZWDJ8O1PByad0hKQGWOq3Rgd5pmKNgZDLrhvTV7DGjxF-bcU":"1#1:44387","7x9OlAAMMLhp1jyUObwLXIGWT6zP5U4BWA9qXnHoekfbBOBz5c":"1#1:44387","Q2-aDowBEwa0Mejf74CJQzWgThrXd2ipDNGT4V9YyyeOAu0IdB":"1#1:44387","TQCmuZyf43i4OVvNDNRT6q1NL2VVFK8MUlx_BxfBf_N9qQxQ2J":"1#1:44387","Q88P1SNLiiYZk39tcq2fKSHzD3TTC-ZryN3ah-T2kTw0HPHn1m":"1#1:44387","8dIIIFCwrGrwLbiRFRhDdZa8w3ZScg-vOqG7JoS4CLW9AQWcMq":"1#1:44387","kvD_8owoCvbW21Iqc1AW8hQkStHZtS-es2vuxkknp2ckf-aZ_6":"1#1:44387","mXeyeHQg7Mhmg4xXt4TSUl0ZTq0iMpLIMS0e6qot23JcvWSytF":"1#1:44387","X3-VsQnku47mcyvDKA3-C7xBYTMVj3O5HORRB6xamoL1vpDh7S":"1#1:44387","lrbXwWatDY2iYyg_QLblja3zceGctUeIYvp4TuoN8--UXEb2Li":"1#1:44387","9YXDc369whxqux2R_p_dPGOZTJ7PwWaRAWPdJp7-SX5askFvmi":"1#1:44387","SZn3639ejIrupHCyzrcT13t4dmedY8K_eKz6oSKVmcfJk_MSoI":"1#1:44387","Ywh5hzlFfFJj0lDlQKL5W3tBb1YDCdx1W3bgGOsSk5nEPNWpaX":"1#1:44387","kk2CaaJsYdSEGMQd2_S17RZuq8a9SDZyLjZ3fR3embZSCtBAZ2":"1#1:44387","9K1gD8N6SRwwwOE1_oUXYW2CasBl0bi4xYdRPYLbJVY-amePmy":"1#1:44387","I_Q1WjddP4KW2SXMj5w_7IU94HfP-99Sl5GQZ6ZNPob8um4RoS":"1#1:44387","HHCpYKw7hyRs3TDIGNdA0y99nzng1PBHyZiq7HZxlRVh24W4I_":"1#1:44387","LhNuJqcWgykCqKJgoi3UHLzpSFi9mDaur-CCsPGwmXXLy6wNbG":"1#1:44387","bQedTudYc2YR0qkD3_OjVAM4DfpyFDDsfXUzERYyHjTrQyLzcz":"1#1:44387","FU2nLULdHVQ7mGBcVYwf_IEq_OBYppQR8yKafVwX1bnSWfkyFz":"1#1:44387","5r0dP64MWlDtYAAUQ5_qr-M2mq_W5x1QimqpnSm4Epb3T7u0BO":"1#1:44387","wH_pajpBNQw_BRcVBbySByw2EyTaRTfYX1CCvS72KCgpuIFkrf":"1#1:44387","5ulSpZwQhtLSeGzgmBXOq4aRMcMm-I5EZ3KOp6YUy-RZw0_sed":"1#1:44387","bFG5E5LWOaNt1IIW3m6tNKfxO5_lu1Ir14215qAMwZilWX1pFL":"1#1:44387","MmPmtOExBfiqK5VJOhTuhQmd5FOF71wZanmv5eBPgFbbKk6LpQ":"1#1:44387","QH0DAM2X7w_hAPvX02OecHIXsuMI_EOqvW85qaqZsbUmZRRLK3":"1#1:44387","aFyft8HTT1mFy-vp8mBytCcZzI7Zn5m_wi2h8SLMiO-562oQmn":"1#1:44387","UaDDfvKRjV-76LH6FumknNrW040D1b8eLmjHTZIuu9IgR7TSQH":"1#1:44387","gpCl0-VD_xq3E8bgkI9dBRBgtHQmLR1jifYkYcJECnUL5b-khm":"1#1:44387","1Ih5wc0O5sqAuH0PvSDV3BGf3nYQ32fq2O9mbM_aKAyUu5kltw":"1#1:44387","a37XHG_KoGcDz5zeRx8hJQTTGq5ELsyvh02dVazyhGUgjdNv2r":"1#1:44387","njOXhU4QVzEMJHHGa6VoRQdHEw7DzAgNDlCDovRl_qVHcsjocK":"1#1:44387","Kh_b7kwuDimlrswOTGJ387J6gDXkJj1t2NoAIj_dj92vZDqQIt":"1#1:44387","XTC2xiFf3mqV25kdVIEwF4cxOXFPZUVpORFoLnJcx6EISgPUZ5":"1#1:44387","uLPuCPPoCfsMknAFuKomQP-fCQGGxcMUWCTx6on92P6wem3Ebq":"1#1:44387","kVBti2m9o6l63JSS2OK3oOdKGZqfjSvykRDO8whrLbdc9bXZFQ":"1#1:44387","ggF8UURG992Vxt-vgYPvdNQLBpXJqLnK60pOCnWP1ywrK629HZ":"1#1:44387","-dPLVOED2sNPlbFEsBf3Td31kwsTTGIcTSsy9nZ-RNHi6Cd_f8":"1#1:44387","93fu67NXJBx-8DM-CLiBZLNseB-8vbM8Dfkh9E6GQcY8YPqfK5":"1#1:44387","mFsrWkSUqlbv7pQWIHgh7xBFWLNV3VEjDTZBFkDy-Rw4_S-5c5":"1#1:44387","W1xIcAP3xn_o0bx4pUKPrM4w77XkWkXFDVZ1L1pXOKb2iANXPD":"1#1:44387","gMmHtBovvJ0o0Ll2oAei1yoYtOiJgqgbXInT2ZWRUCHbsrg4TP":"1#1:44387","kF0tM-BT-5v6b-0snpMuAv7huHFB5DFT20W8Spwwg4iyyOmmFR":"1#1:44387","iI1e-0RvnrGE-f0TJcXjjUucjC2XzoPVw2meSqliyd13L2prUN":"1#1:44387","-4sAcSxfnMu5tfJMWIDRZofaSbh4YjRO0Vv-J4Aojiz_nYbYNa":"1#1:44387","U5MFA6yKTDgfvxJJLothtcmtNbzFW4JE5b4YPVQjvs76tRkvbX":"1#1:44387","j1OTNTG4vpZWPdisCd3JV2b-XF4eb_e87ZY5QlfJdQ1aFQS4bc":"1#1:44387","YgrleuUqVi7Yw8aHaMMr_Gt9ahQxzlaFr7Stg8RHBZaB9q3wxX":"1#1:44387","wmO8WwH__mROCN9IY6gvyH74CJ7NX7l-NiRx6TIJ8sdnUmweqB":"1#1:44387","8r3tNEDzy5RtiiJZHOksTQV9rIr3Ok9z5aj8Bf0fdo4q_edjgt":"1#1:44387","ugJ9-eHJPfvBc2rfBHoWS5-5urfNGXrM0nnnA84xt9Ypk46lXU":"1#1:44387","wzmHTLU1K-t8IdrHUFlzXBJJHrp2ic5O-iuTkDMy1F2ix3z53-":"1#1:44387","lW7VEX2ppzisDwN1H9cArh2Hwvsu4d2eb_Ps9Dl7fkYiNGOWXT":"1#1:44387","PaOTm7ErDx8PGj-Nv1kjPOW-GvH9s3kki9trRGdgH-NosPOkiX":"1#1:44387","2AsWWXNsdZVmjmOu7xdEdtbfuNCLtNsNegroDdPA3PDJ3ajUXI":"1#1:44387","sGs67dtniytrm63q3R9B0_XkRKrawIUseqqyCeathNmWeLE8E1":"1#1:44387","MwPcO8_fJ48RcS74mZmGjkg7L3qypvwxDeG7yULJ7cAGzUiHaR":"1#1:44387","O55WyKPJtuWULqcBRB1nlbS-ihiqChRJ9YJbC3I7GOYEKK4nXx":"1#1:44387","fNSUBwAKlqSQFVWPe6IfA_r8DO-7Y0DU-W4IooY7dzSXE_PpmV":"1#1:44387","K6F2c0AZ1tuXHCcx6j6YeZfB98kNGbwtDe8iIZ7hU41roS1slV":"1#1:44387","G1Gj2ZYrAjPNDyab_cELrSLcHUAGxM2loc11tst-W5dsdkxVKh":"1#1:44387","d6ylXhdhvWtLBSKsb7QrUQjNEioCBmLfGHEAh48Ua9MqQFSN7R":"1#1:44387","6UTVGMPI5oFJwAFfmUkdIj0tHly815SEqo0ZaxIQ4xYbM6Wa8T":"1#1:44387","hjpZsIVGmGeLNuEKeI-WYwjqAvtNJ9fa5Ju-BqjPd0jkIUp3QZ":"1#1:44387","Vr8VQ9-6FRzwnneqqP5SDGhy9T-iXCLIYc9UJdFSv7jfdJYpTG":"1#1:44387","XVRzOuJ8LGQVqNFv0-ikRu5rwumj_kOC2ELRBb-ffk5UmpQw1j":"1#1:44387","UvHQcRkmAdNO8BCLJZnqjKD21Alxrx4F8WO198C56cEOsIveot":"1#1:44387","K595fuOO8ab40KMPCx5jp3qB1BJwT5-d8x_Vf2Z9CxyJZ2TLRm":"1#1:44387","-6BGFbRfeEAuuMvvMXSB7jqtZ-K4Q5FcY8EeUB-b2WLGsLUelo":"1#1:44387","RWi3j5KMndNwBewxpAKf9Hg-yuzhSdhGc093XAogYTNeadYGPr":"1#1:44387","cu_8qH8TpwOpbjCmPjhgYTZllcR8RQjvqNpSKYwMqeFo_eIRPJ":"1#1:44387","Tt-ver2yA1RzBhB5ZlhhnQJDN6_RIHiAZkEXw2PM8GQYfQLA49":"1#1:44387","P6vQNGRCacqm6ydXhv2z_fE1TUrjs6cvbG_Gp2sNTvYuNGCNQ3":"1#1:44387","CNwxWn3jLwRiTXNQXGsmyQvwS1IWRVCz9o3LmtlgTHcCCjl2Tb":"1#1:44387","Gdx_HjhOoNl_qD85sG0HnC37M6zjiUf6_fCY7hDnMapH0HHy_G":"1#1:44387","pCFxhK1tJ7XZz0i8gbQ9OjL1Dg8tH8k55UC_z6Z2_g0UjNOOxG":"1#1:44387","NB8nGfAvXtnLI6tMi7U8C6ENzdv51F8VnZYtsHpFMBR28VMiZD":"1#1:44387","tB5ct6E5ud1eQI2k5kfxFRmB3-J2oBVwJWqtwdsZQnScnDKOe5":"1#1:44387","xVU51oK0_b2Vlu5AoX8gK98QsQ-TMJOB7SwdV91P5TbmVMAEQG":"1#1:44387","Xa3XgtfFeuCHVMi3Jgp9m_YfGgDrzBT_imZU01Gop-XtxbGTmf":"1#1:44387","Vh5a_rUiH46AYRdGrSNPUt623mx-F-0tBtrex2kWBgs9sXxGmU":"1#1:44387","MbIeA3UKyuVeTHu7jPCiJ3sBoENTlrUanQFmDByEiHpgDCc4aO":"1#1:44387","DM6JCr-RIWWK1bG1AEsDPh3C2-87i6GrtHcPgnZ-yjJApbqvVD":"1#1:44387","inmSP-XYesdp9Yxseh-xu1s1BaFBv82DzgP2r4JoxWjgl55-7C":"1#1:44387","vBcVlFZuo_oTxC_8J1DrIUmXIiDWjwyZisVzs22TNpdWP5MKkk":"1#1:44387","Y5GGpiIU_0WOWQxJV_DEliBkio8eDJTQxBvhgbk_xZp0GtPrB9":"1#1:44387","OtFU98L6blaWMWbvH0iXUTPZE69JVTBhhtV_gC4a48Y9YVP0f-":"1#1:44387","gWgEgCrwo-pcHxOaaMh2egci0lRu_bk6a3CsBnllEPIgPo5OMr":"1#1:44387","yjQUGkr_lcAIeg2i2nFDlvkEES3Q0XcnV5652VbOpNJhuHMQH8":"1#1:44387","gt65lTIyYQhEnHzBgSiTCDS77ZSJN5qeQnJF7-IFXVI9t-WYP9":"1#1:44387","Cw9XmKLp6vPiGHnl44wzGss-e3ng8ZsrCAbiHZLDrpW-FY0zfG":"1#1:44387","ZsuaDH9bX8GgKItych2uwNc1RjyLJx89QzZRwd7vJ-7oEv3umf":"1#1:44387","59U4Udcw958MBzaAWy57XOuh33KCDI2dsDtkEnohRlMDFOO6E2":"1#1:44387","Eynclgwilx3HsISW-qoroSCUxCF3rRFFowpRF5KhZpq3JAdKV7":"1#1:44387","nlXFH4dIoISTKWXDCOI0mVKU0otjEVkloQ_Ytl6OMAshtFCnbO":"1#1:44387","0LO3FWEGdO0WHVA09bY9bCGN4Us1nN3xp_5w3m3b1N2JSOk4SZ":"1#1:44387","2x_hgQssCihpbiu5K5MW-ilK18IU69uFDdbTW3amZcKjERwF3o":"1#1:44387","NwPGL1Ni8O9llMykKxvY0QGLoJy_Ib4AM7DNKDEcxlRC_hwTnx":"1#1:44387","uCiY5Oa3crW1BfuDvb72b_MGl3jKZd-_Wf4lXig-Wfbs-IKv8f":"1#1:44387","_VsvqD-g4EQC8wH3bi-EtkfBbl18Vr0kaCfKS17_EUctecBaMl":"1#1:44387","FPSF1i8R7PIpe5JJQNccR80XkyXrV0x8GpJIhmOaqcnDfig4MA":"1#1:44387","IRGYYBMgc-AO2dNMgRoSx7jukTQt1TKTnEBHu0jRemig9Pt8p0":"1#1:44387","6nn14FgkEITcm50nVbaSZvh1X9HGH8nY_NCxdsW5-r1-LUogS_":"1#1:44387","FgayQjvgmReYhEH410Ie9f18Tt7kMpTeCRGcoQLBBcsTQJL60a":"1#1:44387","ZAFYnnt1XdptHSty5SSRFxVFIgl2zEV9UJ_IW-ULjpiGw37fbx":"1#1:44387","s1_cretC_gTBywcy6hYkKrWkyXamg1hw8IUTwXHVLwvJbXYbDN":"1#1:44387","zIyanmld9MsZUM-RKa4Dszn357GEKkZ77k0W1V6POjzhppt2hq":"1#1:44387","dqREDwExlx7PnfyIujs175GODyEaE8vhzAQL287ucltCaKHjmO":"1#1:44387","eaUBVGTPBwQAQr73AwEqufUlvPkU-vDtusagEbAGStPvEweXNf":"1#1:44387","7UqrrLlg_36k8rLiwRxa09_IHSqcJIWTOvhUrqOrbOPSuj84OI":"1#1:44387","8ghEvFwdn4E7Mp_g8NCACq36W1l5bI4tBMV98fiy52OSykyg0p":"1#1:44387","QtZd-Ly5yL4Fwoo4mUnu6yhNMDeZtc9eMuOF_aTWALWxCtkXCa":"1#12:35415","DhLzIvcHXPDhARl5tTDQRWncdUf56qcuUkhSWZaHEy26gNd1Tr":"1#20:34260","AsTQAuvLmhcaeqfroNnmHhcT8ONyc348qILMN8QYc9wKO-3bj3":"1#34:11010","GG8-y-BB4NorYw0TI4QDD32yqHXq1MdfxmzsYavusd8-TwajAY":"1#34:11010"},"moc.gmietybi.av-matt-61p":{"e7df974ae0c5d248d217982717bc1622":"1#1:44387","00cc21b571fabb4dfaff8f15fe267cb4":"1#1:44387","f091fb56a5e0331ff696cb6bf3dd70a9":"1#1:44387","07a4bac83d50262b54ca792a31a7b571":"1#1:44387","7e9b55e8addcad552da4eb20b2f82c52":"1#1:44387","bcf5bf53b3152b7934d1cb712d883349":"1#1:44387","77a6c06339cb4ac619a8179649fb43de":"1#1:44387","fa1b26906ce66f0f3ccef0be8e492375":"1#1:44387"},"moc.oetirc.sa.1gs.tac":{"sportsstation.id%2Fpdp%2FSP230629024728":"1#1:44387","sportsstation.id%2Fpdp%2FSP230630030325":"1#1:44387","sportsstation.id%2Fpdp%2FSP230411884043":"1#1:44387","www.delta.exchange%2F":"1#1:44387","sportsstation.id%2Fpdp%2FSP230911300716":"1#1:44387"},"moc.elpmis-sxnda.10ndcrc":{"/43645896/":"1#1:44387","/40713523/":"1#1:44387"},"moc.oetirc.sa.2pj.tac":{"www.aucentic.com":"1#1:44387","item.rakuten.co.jp%252Fnadecicosp%252F10000001%252F":"1#11:30478","item.rakuten.co.jp%252Febitai%252Fkingin200%252F":"1#11:30478","item.rakuten.co.jp%252Fshinrindo%252Flifebread50%252F":"1#11:30478","www.minnanokaigo.com%2Ffacility%2F000-0321964602%2F":"1#11:30478","item.rakuten.co.jp%252Fokawari88%252Fota_1980%252F":"1#11:30478","item.rakuten.co.jp%252Ftoucher-home%252F10000264%252F":"1#11:30478","item.rakuten.co.jp%252Fgreengiantenergy%252Fljn-tm2%252F":"1#11:30478","item.rakuten.co.jp%252Fninohome%252Fni-018-90201-140%252F":"1#11:30478","www.minnanokaigo.com%2Ffacility%2F000-5208974457%2F":"1#11:30478","item.rakuten.co.jp%252Fnisso-online%252F64863%252F":"1#11:30478","car.rakuten.co.jp%2Fshaken%2Fshop%2F914%2F":"1#11:30478","item.rakuten.co.jp%252Fgoondocks%252Fsb101_c%252F":"1#11:30478","item.rakuten.co.jp%252Fcomodesukoyaka%252Fcm574-armleg-silk-s%252F":"1#11:30478","item.rakuten.co.jp%252Fmeisai-commerce%252Fms-jjl-0396%252F":"1#11:30478","item.rakuten.co.jp%252Fimport-garden%252F10000371%252F":"1#11:30478","www.minnanokaigo.com%2Fcontact-lp%2F":"1#11:30478","item.rakuten.co.jp%252Fhaneya%252F10002020%252F":"1#11:30478","item.rakuten.co.jp%252Fasyu%252F052134%252F":"1#11:30478","item.rakuten.co.jp%252Fwavecontactlenses%252Fjj1dam90-2%252F":"1#11:30478","item.rakuten.co.jp%252Fsuper-sports%252Frccr%252F":"1#11:30478","item.rakuten.co.jp%252Ff222224-izu%252Fa-6%252F":"1#11:30478","item.rakuten.co.jp%252Foutloud%252Ftun-ot-000035%252F":"1#11:30478","item.rakuten.co.jp%252Funderarmour%252Fu13718130410%252F":"1#11:30478","travel.rakuten.co.jp%2FHOTEL%2F9591%2F9591.html":"1#11:30478","item.rakuten.co.jp%252Fbrightlele%252Fly65%252F":"1#11:30478","item.rakuten.co.jp%252Fringenshop%252Ffashion02%252F":"1#11:30478","house.goo.ne.jp%2F":"1#20:34260","house.goo.ne.jp%2Fbuy%2Fuh%2Fdetail%2F4%2F11206%2F1187160002281%2F118716%2Fx41187160002281.html":"1#20:34260","www.calpis-shop.jp%2Fproducts%2Fshinayaka.html%2F":"1#21:34230","www.ravijour.com%2F":"1#34:11010","www.wakudoki.ne.jp%2Fec%2Fpro%2Fdisp%2F1%2Fc2223hm019br":"1#34:11010","unthreed.com":"1#34:11010","www.dmm.com%252Fpr%252Fpremium%252F-%252Fdmmtv%252Fseason%252Fnyui61f6mts1ieb6m6tvcp62b%252F":"1#515:21419"},"moc.ndcil.aidem":{"D4E0BAQEQOevRVb2QMw*company-logo_100_100*1694003836965*ipt_holdings_logo":"1#1:44387","C4D0BAQH09kxJaZZGAA*company-logo_100_100*1653274330699*telcoinabox_logo":"1#1:44387","D4D18AQF6cbz1K01CPQ*companyUpdate-article-image-shrink_1280*1663284039523*OneFocusYourSuccess_IFCLinkedInjpg":"1#1:44387","D4E10AQF9h8TqHgjlqg*image-shrink_800*1703076482845*thebenefitsofAIinITservicemanagementjpg":"1#1:44387","C4E0BAQHuXN9tBVoidA*company-logo_100_100*1630644407534*ifc_logo":"1#1:44387","C4D0BAQEdd_gGrQ1LAg*company-logo_100_100*1640327838059*isegrim_it_logo":"1#1:44387","C4D0BAQFgIiUzENGjlw*company-logo_100_100*1630492490554*instituto_maua_de_tecnologia_logo":"1#1:44387","D4D10AQEmjHHhF2uH_w*image-shrink_800*1693925046170*01HZJ_eB-shop_1200x675px_3jpg":"1#1:44387","D4E0BAQGO3yKeQ9pAKg*company-logo_100_100*1688455978635*springernaturegroup_logo":"1#1:44387","D4D10AQGlydYG6hPrAg*image-shrink_800*1693925152048*01HZJ_eB-shop_1200x675px_5jpg":"1#1:44387","D4D10AQEqPer0-jaJ2Q*image-shrink_800*1696262890796*JP_01HZJ_eB-shop_VisualCreation_3rd1200x675px_4jpg":"1#1:44387","D4D10AQHoCOaa63iLKw*image-shrink_800*1696262778736*JP_01HZJ_eB-shop_VisualCreation_3rd1200x675px_3jpg":"1#1:44387","D4D10AQHmVEiY6jMzGg*image-shrink_800*1693924934297*01HZJ_eB-shop_1200x675px_2jpg":"1#1:44387","D4D10AQH-3EPgyvhwJQ*image-shrink_800*1694087647746*01HZJ_eB-shop_1200x675px_4jpg":"1#1:44387","D5610AQEkUdC906nwZA*image-shrink_1280*1683838921900*WinterJamFlyer10801080px1png":"1#1:44387","D4E10AQHwmNUBbv0M9Q*image-shrink_800*1705425799561*Group-19449-1png":"1#1:44387","C4E0BAQF4a-hIgYwwJA*company-logo_100_100*1642005480600*interscriptscom_logo":"1#1:44387","D560BAQFRkh3AOvr7WA*company-logo_100_100*1695411327685*komodo_systems_logo":"1#1:44387","C4E0BAQEgTAuSqwAfTw*company-logo_100_100*1630618473951*inapp2020_logo":"1#1:44387","D560BAQH4MD2nRw6oTw*company-logo_100_100*1696885669733*smilesondemand_logo":"1#1:44387","C4E0BAQHloXopfzprZA*company-logo_100_100*1630576008620*power_retail_media_logo":"1#1:44387","D5610AQHbcrMQRKK_4w*image_627_1200*1705040213559*GeneralOutsourcing_Post1jpg":"1#1:44387","D5610AQE8ZRfhDaNquQ*image-shrink_1280*1706306955980*KomodoSNMPWalkDecoder-LinkedInpng":"1#1:44387","D5610AQE8ZRfhDaNquQ*image_627_1200*1706307294652*KomodoSNMPWalkDecoder-LinkedInpng":"1#1:44387","D5610AQF2mrWC8Xnn7Q*image_627_1200*1705044973367*WhyOutsource_Post1jpg":"1#1:44387","C4E0BAQEiVjfYfFmwXQ*company-logo_100_100*1630648352851*university_of_louisville_logo":"1#1:44387","C4E0BAQHb_lbUt5tVzw*company-logo_100_100*1630637613665*vgl_2_logo":"1#1:44387","D5618AQESEj1FiaHeqw*companyUpdate-article-image-shrink_1280*1677579096825*thumbnail_1jpg":"1#1:44387","C510BAQHhxCP6Py1gXg*company-logo_100_100*1630606832308*muppa_projects_india_private_limited_logo":"1#1:44387","D5610AQE0ZmqgVjH_Ug*image-shrink_800*1700594757735*1png":"1#1:44387","D5610AQFqOBMy9_ouFg*image-shrink_800*1706663447927*WhatsAppImage2024-01-31at081024jpeg":"1#1:44387","C4E0BAQHrUh5JhsJkyg*company-logo_100_100*1674557125220*reloopuk_logo":"1#1:44387","D5610AQFWlmdhQUTFJw*image-shrink_800*1706599078193*shutterstock_1892669737jpg":"1#1:44387","D4E0BAQGVLI6gKgAIDw*company-logo_100_100*1698756740742*avnet_abacus_logo":"1#1:44387"},"se.elgoog.www":{"micromad.es":"1#1:44387"},"moc.yfirevelbuod.0btr":{"plc=360001419":"1#1:44387","plc=7762933":"0#3:42573","plc=383345770":"0#3:42573","plc=379444768":"0#3:42573","plc=383344219":"0#3:42573"},"ten.ypotaerc.gat-evil":{"xee61px":"1#1:44387"},"moc.liarmaerts.k":{"cri=386_3603829":"1#1:44387","cri=685314749756":"1#1:44387","cri=78827815":"1#1:44387","cri=325036_7012050":"1#1:44387","cri=471001729_xandr":"1#1:44387","cri=488349922":"1#1:44387","cri=488350649":"1#1:44387","cri=5450579":"1#1:44387"},"ten.oetirc.citats":{"/design/dt/100426/4900411/888c26a6a5e0440d941d423e6d1764ed_image_ad_320x480.png":"1#1:44387","/design/dt/100426/4900411/cc6e54e2a5a0483f96caf58d30914a91_image_ad_300x250.png":"1#1:44387","/design/dt/107581/5173969/c5e579f279e0490c8074da0cbd2306f5_image_ad_300x250.jpeg":"1#11:30478","/design/dt/3242/4970058/fb7bb5493e1647658d22b79c02b8916e_cpn_300x250_1.png":"1#11:30478","/design/dt/53543/200904/6f92470859834832b652c1421d4d7d63_cpn_336x280_1.jpg":"1#12:35415"},"moc.tenalprediw.gtia-ndc":{"v3*creative*d2*8e":"1#1:44387"},"ten.aidem.glbh":{"thewalletwatcher.com&":"1#1:44387","renogy.com&":"1#1:44387","well-being-review.com&":"1#1:44387","healthywealthhappy.com&":"1#1:44387","nurseyard.com&":"1#1:44387","stock-daily.com&":"1#1:44387","evaair.com&":"1#1:44387"},"tm.moc.elgoog.www":{"installapps.com":"1#1:44387"},"moc.oetirc.ue.3rf.tac":{"www.superprof.fr%2Fr%2F":"1#1:44387","www.electroplanet.ma%2Fp1200660-zanussi-zwh7120s.html":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-boulevard-vitoria":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-cordoba-medina-azahara":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-atlantis-barcelona":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-arenal":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-sercotel-madrid-aeropuerto":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-sercotel-aura-algeciras":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-codina":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-kalma-sitges":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-amister":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-sercotel-tribuna-malaga":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-cordoba-delicias":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-arrahona-sabadell":"1#1:44387","www.electroplanet.ma":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-convention-plaza-madrid":"1#1:44387","www.electroplanet.ma%2Fp1994015-arthur-martin-asf5206lox.html":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-Ultra-5G-6-8-256GB-Gris-Titanium-Telefono-movil-Smartphone%2Fa10707161":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-5G-6-7-512GB-Violeta-Cobalt-Telefono-movil-Smartphone%2Fa10707157":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-5G-6-2-256GB-Violeta-Cobalt-Telefono-movil-Smartphone%2Fa10707149":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-5G-6-7-512GB-Negro-Onyx-Telefono-movil-Smartphone%2Fa10707159":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-5G-6-2-256GB-Negro-Onyx-Telefono-movil-Smartphone%2Fa10707151":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-Ultra-5G-6-8-256GB-Negro-Titanium-Telefono-movil-Smartphone%2Fa10707160":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-Ultra-5G-6-8-512GB-Violeta-Titanium-Telefono-movil-Smartphone%2Fa10707166":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-5G-6-2-128GB-Negro-Onyx-Telefono-movil-Smartphone%2Fa10707147":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-5G-6-2-256GB-Gris-Marble-Telefono-movil-Smartphone%2Fa10707150":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-Ultra-5G-6-8-512GB-Gris-Titanium-Telefono-movil-Smartphone%2Fa10707165":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-Ultra-5G-6-8-256GB-Amarillo-Titanium-Telefono-movil-Smartphone%2Fa10707163":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-5G-6-7-512GB-Gris-Marble-Telefono-movil-Smartphone%2Fa10707158":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-Ultra-5G-6-8-256GB-Violeta-Titanium-Telefono-movil-Smartphone%2Fa10707162":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-Ultra-5G-6-8-512GB-Negro-Titanium-Telefono-movil-Smartphone%2Fa10707164":"1#1:44387","www.fnac.es":"1#1:44387","www.fnac.es%2FSamsung-Galaxy-S24-5G-6-7-256GB-Negro-Onyx-Telefono-movil-Smartphone%2Fa10707155":"1#1:44387","www.drmax.cz":"1#1:44387","www.drmax.cz%2Ftouchbeauty-1613a-masazni-valecek-na-oblicej-zlaty":"1#1:44387","fabrykaform.pl%2Frosendahl-organizer-kuchenny-ra":"1#1:44387","fabrykaform.pl%2Fkarlsson-zegar-klapkowy-no-case-mosiadz":"1#1:44387","fabrykaform.pl%2F":"1#1:44387","www.xtrawine.com%2Fit%2Fvini%2Fmarchesi-antinori-tignanello-2020%2Fp44249":"1#1:44387","www.moj-posao.net%2FPosao%2F728291%2FPostar-mz%2F":"1#1:44387","www.moj-posao.net%2FPosao%2F731609%2FVozac-mz%2F":"1#1:44387","www.moj-posao.net%2FPosao%2F733001%2FAsistent-u-ljudskim-resursima-Asistent-za-zastitu-osobnih-podataka-mz%2F":"1#1:44387","www.moj-posao.net%2FPosao%2F730230%2FVoditelj-trgovine-mz%2F":"1#1:44387","www.moj-posao.net%2FPosao%2F726088%2FPerac-sudja-mz%2F":"1#1:44387","www.moj-posao.net%2FPosao%2F571644%2FFarmaceut-mz%2F":"1#1:44387","www.moj-posao.net%2FPosao%2F731264%2FStrucni-analiticar-za-financijske-institucije-i-ekonomska-istrazivanja-samostalni-strucni-analiticar-za-financijske-institucije-i-ekonomska-istrazivanja-mz%2F":"1#1:44387","www.moj-posao.net":"1#1:44387","www.moj-posao.net%2FPosao%2F728525%2FAdministrator-ureda-i-poslova-ljudskih-potencijala-Office-and-Human-Resources-Administrator-mf%2F":"1#1:44387","www.moj-posao.net%2FPosao%2F732094%2FVisi-Analiticar-za-regulatorno-izvjescivanje-mz%2F":"1#1:44387","www.moj-posao.net%2FPosao%2F731117%2FSuradnik-za-poslove-prijevoza-novca-mz%2F":"1#1:44387"},"moc.oetirc.ue.3ln.tac":{"www.sercotelhoteles.com%2Fes":"1#1:44387","www.electroplanet.ma%2Fp1899186-tnb-film-de-protection-en-verre-iphonex.html":"1#1:44387","www.superprof.fr%2Fr%2F":"1#1:44387","www.sercotelhoteles.com%2Fes%2Fhotel-cordoba-delicias":"1#1:44387","www.fnac.es":"1#1:44387","puntorigenera.com%2Fmateriale-elettrico%2Fmultiprese%2Fmultipresa-ciabatta-elettrica-4-posti-con-interruttore-generale-cavo-da-5metri-spina-10a-250v-presa-5-way-p1711.html":"1#1:44387","www.xtrawine.com%2Fit":"1#1:44387","www.refrigiwear.it%2Fit%2Fparka-donna%2Fagnes-jacket-6385":"1#1:44387","www.xtrawine.com%2Fde":"1#1:44387","www.refrigiwear.it%2F":"1#1:44387"},"ln.elgoog.www":{"installapps.com":"1#1:44387"},"moc.elgoog.www":{"installapps.com":"1#1:44387"},"da.elgoog.www":{"installapps.com":"1#1:44387"},"ig.moc.elgoog.www":{"installapps.com":"1#1:44387"},"moc.mroftalpytiuca.ndc":{"/BP_1554195/":"1#1:44387"},"moc.detcetorpefasda":{"advEntityId=1944175":"1#1:44387","advEntityId=1860521":"0#8:41493","advEntityId=1926197":"0#8:41493","advEntityId=1919297":"0#8:41493"},"moc.artlec.lss-ehcac":{"/71f2c1ff/":"1#1:44387","/3e97cbd6/":"0#8:41493","/c0772f12/":"0#8:41493","/03c9ac06/":"0#8:41493","/d7ae38b0/":"0#8:41493","/dfb64bd0/":"0#8:41493","/fce1861a/":"0#8:41493","/231a46ba/":"0#8:41493","/45117f6a/":"0#8:41493","/dd01aa8e/":"0#8:41493","/887042ad/":"0#8:41493","/4fee61bb/":"0#8:41493","/7d85e7f6/":"0#8:41493","/84662baa/":"0#8:41493"},"moc.ndcsas.sppa":{"fnac.es":"1#1:44387","renogy.com":"1#1:44387","royalcourttheatre.com":"1#1:44387","meltfatfast.pro":"1#1:44387","palaceresorts.com":"1#1:44387","bahigo1891.com":"1#1:44387","loja.electrolux.com.br":"1#1:44387","pdf-tool.com":"1#1:44387","cryptocrazy.care":"1#1:44387"},"ten.ndm2.ndcg":{"/6cf103bc1c616dde/":"1#1:44387"},"moc.oetirc.su.av.tac":{"www.renogy.com%2Frenogy-72000mah-266wh-power-bank%2F":"1#1:44387","www.renogy.com%2F":"1#1:44387","www.renogy.com%2Frego-12v-400ah-lifepo4-battery%2F":"1#1:44387","www.renogy.com%2Fopen-box-new-200-watt-12-volt-solar-premium-kit%2F":"1#1:44387","lp.sculptnation.com%2Fsp%2Ftest-boost-max%2Ftest-ripped-fbk-cpc-eco-bb":"1#1:44387","sculptnation.com%2Fproducts%2Fburn-evolved%2F":"1#1:44387","www.netshoes.com.br%2Fpdp%2FFB8-4355-026":"1#1:44387","loja.electrolux.com.br%2Far-condicionado-electrolux-color-adapt-inverter-24-000-btus-quente-frio--ji24r-je24r-%2Fp":"1#1:44387","loja.electrolux.com.br%2Ffreezer-electrolux-vertical-uma-porta-197l--fe23-%2Fp":"1#1:44387","loja.electrolux.com.br%2Fmaquina-de-lavar-14kg-electrolux-perfect-care-com-cesto-inox-jatos-poderosos-time-control-lej14%2Fp":"1#1:44387","loja.electrolux.com.br%2Fgeladeira-refrigerador-frost-free-310-litros-platinum-tf39s-electrolux%2Fp":"1#1:44387","loja.electrolux.com.br%2Fgeladeira-refrigerador-if55s-inverter-top-freezer-431l-platinum%2Fp":"1#1:44387"},"ten.kcilcelbuod.da":{"/B31061299":"1#1:44387","www.fnac.es":"1#1:44387","/B27793146":"1#1:44387","packages.palaceresorts.com":"1#1:44387","www.palaceresorts.com":"1#1:44387","/B31238191":"1#1:44387","/B31341672":"1#1:44387","/B30727668":"1#1:44387","/B24961242":"0#3:42573","/B31129235":"0#3:42573","/B30851597":"0#3:42573","/B31309256":"0#3:42573","/B30168945":"0#3:42573","/B31176797":"0#8:41493","/B31193725":"0#8:41493","/B31122435":"0#8:41493","/B31127982":"0#8:41493","/B31173583":"0#8:41493","/B29205376":"0#8:41493","/B31186084":"0#8:41493","www.nysaves.org":"0#8:41493","www.kfc.com":"0#8:41493","www.verizon.com":"0#8:41493","/B30182212":"0#8:41493","/B31175687":"0#8:41493","nylottery.ny.gov":"0#8:41493","/B31237695":"0#8:41493","/B31235973":"0#8:41493","/B31056572":"1#23:33427","/B31192920":"1#23:33427"},"ten.deziamaka":{"/assets/video-optimized/d791f3dc-6bd4-4ffa-93fb-5db8dc1d7e18.mp4":"1#1:44387","/assets/video-optimized/e2d5d86e-eaba-40b2-afab-dc888b552b3b.mp4":"1#1:44387","/assets/video-optimized/72d88f5b-6e29-48cb-bab6-a26baf85eabd.mp4":"1#1:44387","/assets/0be806d4-65b2-4fa0-a2a2-f20f9c57d112.mp4":"1#1:44387","/assets/video-optimized/ae9ce25b-1f42-470c-8be1-181ab5b282dd.mp4":"1#1:44387","/assets/video-optimized/0f23b195-c426-4b82-9900-9e5f06c4e89d.mp4":"1#1:44387"},"moc.psdipsnixda":{"/2100187b72309273bb744e.gif":"1#1:44387","/2107782470c506bf48a7c4.gif":"1#1:44387","/2107767b72309273bb744e.gif":"1#1:44387","/2089847b72309273bb744e.gif":"1#1:44387","/210770d535367df65108e4.gif":"1#1:44387","/2105560489c2f03fcf0366.gif":"1#1:44387"},"moc.aidemtsfl.ndc":{"/~cdn/Ads/b5/76/a14180-100x100.png":"1#1:44387","/~cdn/Assets/190299/14/a14052-TimHortons-NativeIcon100x100.png":"1#1:44387"},"ten.deziamaka.ndcnezyak":{"/assets/0be806d4-65b2-4fa0-a2a2-f20f9c57d112.mp4":"1#1:44387"},"se.tramsaidem.aidem":{"/cozvc2wke9kmllp0xuxzeyxw4tylpdsi.png":"1#1:44387"},"pj.oc.ylgol.ndc":{"/001/403/191/":"1#1:44387","/001/410/968/":"1#1:44387","/001/410/974/":"1#1:44387","/001/409/454/":"1#1:44387","/001/410/399/":"1#1:44387","/001/410/969/":"1#1:44387","/001/400/477/":"1#1:44387","/001/410/397/":"1#1:44387","/001/410/405/":"1#1:44387","/001/349/706/":"1#1:44387","/001/409/515/":"1#1:44387","/001/410/094/":"1#1:44387","/001/410/406/":"1#1:44387","/001/410/295/":"1#1:44387","/001/409/888/":"1#1:44387","/001/409/507/":"1#1:44387","/001/409/519/":"1#1:44387","/001/410/296/":"1#1:44387","/001/410/973/":"1#1:44387","/001/410/967/":"1#1:44387","/001/410/298/":"1#1:44387","/001/402/293/":"1#1:44387","/001/400/990/":"1#1:44387","/001/410/407/":"1#1:44387","/001/410/398/":"1#1:44387","/001/410/089/":"1#1:44387","/001/407/839/":"1#1:44387","/001/407/836/":"1#1:44387","/001/410/092/":"1#1:44387","/001/410/400/":"1#1:44387"},"moc.psdal.dc":{"/native-image/00/248/109/7815815884.jpg":"1#1:44387","/02/691/431/9985846668.gif":"1#1:44387","/02/806/710/6178184237.gif":"1#1:44387","/native-image/00/258/098/1743365179.jpg":"1#1:44387","/native-image/00/281/566/6239182272.gif":"1#1:44387","/02/806/706/8519246324.gif":"1#1:44387","/native-image/00/280/762/7349992702.gif":"1#1:44387","/native-image/00/281/557/1545459646.gif":"1#1:44387","/native-image/00/259/261/5740574222.jpg":"1#1:44387","/native-image/00/259/262/4953218344.jpg":"1#1:44387","/02/705/172/4831628903.gif":"1#1:44387","/native-image/00/243/675/0393658632.jpg":"1#1:44387","/native-image/00/228/373/3160830667.gif":"1#1:44387","/native-image/00/282/233/6154506320.jpg":"1#1:44387","/native-image/00/264/875/1426691998.jpg":"1#1:44387","/native-image/00/278/068/6225087568.gif":"1#1:44387","/native-image/00/281/562/7994224871.gif":"1#1:44387","/02/988/138/0836811632.gif":"1#1:44387","/02/838/087/2640979200.gif":"1#1:44387","/native-image/00/281/568/3385205354.gif":"1#1:44387","/native-image/00/279/587/3371854166.gif":"1#1:44387","/native-image/00/279/429/3019821398.gif":"1#1:44387","/native-image/00/264/815/1476907360.jpg":"1#1:44387","/02/988/128/3554323483.gif":"1#1:44387","/native-image/00/281/556/3501487350.gif":"1#1:44387","/02/948/104/3271280494.gif":"1#1:44387","/03/089/563/5401008821.gif":"1#1:44387","/native-image/00/281/560/1379613819.gif":"1#1:44387","/native-image/00/282/232/0259376766.jpg":"1#1:44387","/native-image/00/272/196/3211641076.jpg":"1#1:44387","/native-image/00/279/439/5308734292.gif":"1#1:44387","/native-image/00/271/316/3798580432.jpg":"1#1:44387","/03/016/450/8324095663.gif":"1#1:44387","/02/807/257/5566058879.gif":"1#1:44387","/native-image/00/272/209/6993455281.jpg":"1#1:44387","/native-image/00/282/231/6044260528.jpg":"1#1:44387","/native-image/00/279/589/4649023256.gif":"1#1:44387","/native-image/00/278/066/2427960249.gif":"1#1:44387","/native-image/00/257/926/6319069013.jpg":"1#1:44387","/03/104/409/8430152835.gif":"1#1:44387","/native-image/00/278/067/8231842193.gif":"1#1:44387","/02/838/095/2838594469.gif":"1#1:44387","/02/691/417/9593597143.gif":"1#1:44387","/native-image/00/279/427/4800699791.jpg":"1#1:44387","/native-image/00/265/887/2075565824.jpg":"1#1:44387","/native-image/00/257/927/8589800722.jpg":"1#1:44387","/native-image/00/279/419/9489767631.jpg":"1#1:44387","/02/807/253/9273455786.gif":"1#1:44387","/native-image/00/248/110/2532178414.jpg":"1#1:44387","/02/806/708/5099880882.gif":"1#1:44387","/02/988/131/4169698853.gif":"1#1:44387","/02/988/129/1204575722.gif":"1#1:44387","/native-image/00/282/990/8696256577.gif":"1#1:44387","/native-image/00/281/690/0955244453.gif":"1#1:44387","/03/161/358/5322076981.gif":"1#1:44387","/native-image/00/281/691/2088054013.gif":"1#1:44387","/native-image/00/281/694/6751062483.gif":"1#1:44387","/native-image/00/280/105/5298854858.gif":"1#1:44387","/native-image/00/282/992/8285043779.gif":"1#1:44387$4:44798","/native-image/00/279/300/2033691931.gif":"1#1:44387","/03/161/361/8995542365.gif":"1#1:44387","/native-image/00/277/932/2776511271.gif":"1#1:44387","/native-image/00/280/110/8480039392.gif":"1#1:44387","/native-image/00/280/108/0546895402.gif":"1#1:44387","/native-image/00/281/693/3314169656.gif":"1#1:44387","/native-image/00/278/386/2778860887.gif":"1#1:44387","/native-image/00/281/550/5626400270.gif":"1#1:44387","/native-image/00/281/552/0462060558.gif":"1#1:44387","/native-image/00/279/304/8759275629.gif":"1#1:44387","/native-image/00/281/554/5412446626.gif":"1#1:44387","/03/161/355/9673920037.gif":"1#1:44387","/native-image/00/281/692/1957556512.gif":"1#1:44387","/native-image/00/280/106/9912498747.gif":"1#1:44387","/native-image/00/280/103/9303606217.gif":"1#1:44387","/03/092/325/7445825249.gif":"1#1:44387","/native-image/00/280/107/4392503337.gif":"1#1:44387","/native-image/00/281/553/0672139060.gif":"1#1:44387","/native-image/00/282/993/5377848568.gif":"1#1:44387","/native-image/00/277/143/2455432055.gif":"1#1:44387","/native-image/00/278/366/8291528601.jpg":"1#1:44387","/native-image/00/281/555/5876574223.gif":"1#1:44387","/native-image/00/279/630/6871919987.gif":"1#1:44387","/native-image/00/279/296/1699006218.gif":"1#1:44387","/native-image/00/269/559/9713526518.png":"1#1:44387","/native-image/00/280/111/9279724829.gif":"1#1:44387","/native-image/00/282/991/9960663372.gif":"1#1:44387","/native-image/00/281/695/4730502457.gif":"1#1:44387","/native-image/00/278/364/0978716839.jpg":"1#1:44387","/native-image/00/251/623/9592587542.jpg":"1#4:44798","/03/131/870/1694076153.png":"1#4:44798","/02/440/194/6215213647.jpg":"1#4:44798","/03/131/868/4677822282.png":"1#4:44798","/02/440/091/5519081315.jpg":"1#4:44798","/03/131/867/1743880745.png":"1#4:44798","/native-image/00/251/610/1248680261.png":"1#4:44798","/native-image/00/278/098/9632320209.png":"1#11:30478","/native-image/00/280/841/6057078221.jpg":"1#11:30478","/native-image/00/279/441/5960869906.jpg":"1#11:30478","/native-image/00/272/339/5517774143.gif":"1#11:30478","/native-image/00/264/849/6516451731.jpg":"1#11:30478","/03/147/648/9565892312.gif":"1#12:35415","/native-image/00/272/883/9005797146.jpg":"1#12:35415","/03/109/171/5459185182.gif":"1#12:35415","/03/153/130/3880443366.gif":"1#12:35415","/native-image/00/255/949/2541067663.jpg":"1#12:35415","/03/083/496/9977341654.gif":"1#12:35415","/02/807/099/8661764668.jpg":"1#15:34287","/02/693/656/0516041441.jpg":"1#21:34230","/02/467/779/7143430804.jpg":"1#21:34230","/native-image/00/267/994/5336606991.jpg":"1#25:30129","/native-image/00/270/259/1045262574.jpg":"1#25:30129","/native-image/00/279/389/2537419050.jpg":"1#25:30129","/native-image/00/279/396/4337329891.gif":"1#25:30129"},"moc.ebutuoy.gmi":{"LEkzpTVRYFs":"1#1:44387","NYQBgXSyIV4":"1#1:44387","_IdCNp-CrH8":"1#1:44387"},"oi.xed4":{"7255070":"1#1:44387","68177799":"1#1:44387","71064993":"1#1:44387","71065027":"1#1:44387","467049221":"1#4:44798$34:11010","4016%3A6923841":"1#1:44387","4016%3A7276285":"1#1:44387","4016%3A7292350":"1#1:44387","4016%3A7249919":"1#1:44387","4016%3A7276280":"1#1:44387","4016%3A7260946":"1#1:44387","4016%3A7260855":"1#1:44387","4016%3A7242321":"1#1:44387","2249%3A547614504":"1#1:44387","2_19317":"0#3:42573","2_17846":"0#3:42573"},"pj.gmiy.c.mi":{"1002631052*14176652*28a54b62f0e6e0d679cf67afd260e2c8.jpg":"1#1:44387","1002502069*9260065*8996dd73a8b2d2c917a4f6e1d4048b4d.jpg":"1#1:44387","1002591620*13791350*e2be05e784aa404c4d61e85880ed924c.jpg":"1#1:44387","1002591620*13791351*2227b391e7dc2273846999a3e31a196c.jpg":"1#1:44387","1002502069*14196514*032c01866dd08e0fd692d7bd668f5401.jpg":"1#1:44387","1002502069*14196517*f0dd64ae961aa955f7bdc8ec3b496ef7.jpg":"1#1:44387","1002459954*14733981*4c76b38a6c758a4082a13de46b1f5f27.jpg":"1#1:44387","1001829940*7892381*3c70b2d6e7dbca6c9dabd678d4729b43.jpg":"1#1:44387","1001469869*9430830*99cf1b5a4ca316fcda2c127515933aa6.png":"1#11:30478","1001159808*10359360*157d7e62b98cbca3b9c3973d5e249d2c.jpg":"1#11:30478","1002574624*12325076*985a081a6ee7b3cfac9f18398b669621.jpg":"1#11:30478","1002639118*15009799*dc155699570ca753dff45b1187285f65.jpg":"1#12:35415","1002595642*14792606*7002374d337f71320359f7ac891929d4.jpg":"1#15:34287","1002595642*13219900*cfaf3b8b222588ac42dd6f7ba349ccb1.jpg":"1#15:34287","1002603015*15007017*e4027843f67cc7f1b111118a0943848a.jpg":"1#15:34287","1002394249*13108514*f844d1aadffa71bdab41892add981467.jpg":"1#15:34287","1001368495*14322500*c7fa582f55aba6f5dcc56d7016502713.jpg":"1#21:34230","1002627615*14625854*803bfd1c588e96207d1d9a08728f862e.jpg":"1#21:34230","1001857765*14365633*3529ffb3f921f3cde0ef07f42e8cafe0.png":"1#21:34230"},"pj.ssapyb.gmi":{"9987*1235249*1877c6be.jpeg":"1#1:44387","9987*1235295*ebe3f64c.jpeg":"1#1:44387","9987*1235260*ace0c1b.jpeg":"1#1:44387","9987*1235264*69762821.jpeg":"1#1:44387","9901*1233699*fbe27631.jpeg":"1#1:44387","9987*1235256*8cb7d5f0.jpeg":"1#1:44387","9987*1235282*f8b50f5f.jpeg":"1#1:44387","9987*1235267*281c88c2.jpeg":"1#1:44387","9987*1235258*2186f023.jpeg":"1#1:44387","9987*1235255*7ee03808.jpeg":"1#1:44387","9987*1235268*bd40d74b.jpeg":"1#1:44387","9987*1235251*c47ecb6c.jpeg":"1#1:44387","9987*1235289*9f534c0d.jpeg":"1#1:44387","9901*1234381*9a7bf785.jpeg":"1#1:44387","9987*1235263*b1b55307.jpeg":"1#1:44387","9987*1235285*2ca42685.jpeg":"1#1:44387","9987*1235266*3cadafe1.jpeg":"1#1:44387","9987*1235283*19b0ce47.jpeg":"1#1:44387","4601*1231375*13576afa.gif":"1#12:35415","9403*906328*4d3834a8.jpeg":"1#21:34230"},"moc.maertseralfduolc.o6o8uh1chaf2t0pp-remotsuc":{"s=RRDCrcO9wqTDlwHCnlXCq8K3L8OAw6BwO8O9e8OpE8OfQ2I0GsKlwoZcwqzCsljDiA":"1#1:44387","s=wqp6w58bwo3Dm8K":"1#1:44387","s=wr_Dq11pwqZyw5g7wqTCj8OYw6nDpUsyCXh5wpTDjX7DhMO9w6HDjnc":"1#1:44387","s=PG3Cu8Kfw4_DrHZ_RcKuDgnCpWfCp21gw4Inw580bsKbw7zCjkDDjDwbc8Ozw4s":"1#1:44387"},"moc.gminiarbtuo.segami":{"/transform/v3/eyJpdSI6IjBkZDg4OWI5NTU1ODgxYmZlNmU2MGJkMjEyNzk3MTYyN2NiNzY4YjhiYjFhNzI5NTE4N2E0YWRiZmQyZTFmMWYiLCJ3IjozMDAsImgiOjIwMCwiZCI6MS41LCJjcyI6MiwiZiI6NX0.mp4":"1#1:44387","/transform/v3/eyJpdSI6IiIsIml1ZSI6Imh0dHBzOi8vd3d3LmJpbmcuY29tL3RoP2lkPU9BSVAuNzYzMDUwZjZhMzBlODVlNDhhMDdkZjM2NDZiMjA3MzEmcGlkPUFkc05hdGl2ZSZjPTMmdz01MCZoPTI2JmR5bnNpemU9MSZxbHQ9OTAiLCJ3Ijo1MCwiaCI6NTAsImQiOjEuNSwiY3MiOjAsImYiOjB9.jpg":"1#1:44387","/transform/v3/eyJpdSI6ImNhZGQzNjkyN2RlM2FlOTVjOTQxYzMzMjhlY2YwZmY4ZmI0NmUxMzE4OWRlNTNjNDk0ZTAzZGRhYTVjOGM5OGYiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjY2NjhjNGJmZmE1NjAyMTBiN2Y1N2NiMjk1MTEzOTJiYWNhMjc5ZTY3MWI4MTRiN2MxYjBmYjVkOWE5ZWExMWQiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjaCI6MTA2MzcxNzMwOSwiY3MiOjAsImYiOjB9.jpg":"1#1:44387","/transform/v3/eyJpdSI6ImViN2Q4Nzc1MzZiZWNjMzA3MDE1Mjk0ZWRkYjFhOWVhMTk4NDhjZmEzNmYwZTczNGVmZTMzMTY4MmU0NzliOGMiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IjQ1NjY2ZTA4NWFiOGMxMjJkMGY4NDA2ZDczNzU2YjY4ODI4YTllNWZkNTFhY2NkYjk3NjY5ODExOGNmMzU3OGEiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjI5ODc5OGM1N2MxOGViNGQxZDcwZjAyNmVmMmUyYjUyZjRhNjgyNzg2ZjdkNTAzNTg4OTFlNWJlMDc5Yjc4ZDMiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS4wLCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IjViMDdjYjE1OGQ1MmQ4ZmQyYzAyYzU4NTk2ZTJkZjMyNWRlZjUzOTRkNjYzYzA4YjY3YzQwMGNjZDMyMzlkMTMiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjaCI6MTM1NjkyNTU3LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6ImVlN2ViODM3NTM5ZjJjMTdlMjA3NDI5OTZjZGFlZmI5OGJlNWQzMjMxY2IwNGVkZDc0OGI1ODhiOTQwODAxZjMiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS4wLCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IjFjMzM0YTAzODAxNDM2NTgxYTMxOWY5YmM3YzBlYzgxNmIwZWQyYzc4MGNhZDFlODQyMWViYWQ2ZTQ4ZGIyODgiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MywiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6Ijc0OGY3ZGJlYWQ1OTAzOWQ2NzdiZWIyNTg4MjVmYTUwMTRjZWU4ZTEwNWI3MmNiYTNiMDljN2Y0NTc0ZjAwMDEiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6Ijg2NDY1OTVlYmI1OTBjMDc4MDcwMGM1ZDI5ZjZjNzRmYmVjYjg0Mzc1OTRlMzQ0YWU0N2ZiNDUwYjdjNzczZTAiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6ImQ4NjAxOWEwOGYxM2YyOTI4YjY2MWViNmM3YmQ5MzViZDcwMDY5ODc1YjIzNGY0MDBlZWY4Y2ExNjgxZWQxNTUiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjljZjI1YmE0OTc0ZDg1OGJkNzAxMTZmOWVjMzY2ZTBjMTZhOGUxYjE1ZDk2ZjcyZjBjMWY1NGY4NTc0ZjA2YTgiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjaCI6MzYwMDE3NTYsImNzIjowLCJmIjowfQ.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjFjMzM0YTAzODAxNDM2NTgxYTMxOWY5YmM3YzBlYzgxNmIwZWQyYzc4MGNhZDFlODQyMWViYWQ2ZTQ4ZGIyODgiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MywiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IjdlMjU5N2FiM2M3NDBlMjNhNjVlYTFhMWM0Mjg1NmJlNDkxYmZiOTkwZWZkNjg3OGUwMzBiMDM1ZTg0OGI3NGIiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjZhMzFkOTVlMzJiMmM4MGRiYTA2OGI1MWVhMzE0OWNjM2U2NzMwODdkYTZhOTllNGE4M2Y4ODM3NmU0ODYwNTciLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MywiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6Ijg5ODQ0ZDI5NjU3NjI4OGZkZDQxMTVkOGQ5NjAyODJjODJjNDQyZjAzM2I2ZDdkMmVkZGVkY2U2N2MxMTBkMjMiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MiwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjM2NWY4NTUwYTEyYmM4ZDE0OTAwYTRmZmZiNTE5MzhmYzBjNDk1MWQ4NDFlMzRkNTdkYzI2MTk2MDkyYTVkMjQiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjM3ZWM1NzRmNjYwMjgwMDg5Y2RkNWJmY2FhZWU5M2NjMGVkZDc5MzU2NGIxMWY5MmFkMjg3MWU0ZTliNTg3YWMiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjkzYjlmYWIzNDVmOGZkNWY3YTFlMTI2OGI0Yjc3M2QyNTNmNjgwYzFlMWUyYzM0NjBjYjBiZmQ0YjAyMmQ4OTYiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjliNDkwZTU5NDgyMTA2NzUwMjQ1Yzg0MzE1MzJlOGU4MzE0MzY1NWJjNjgxNzgxNTk5MTAyMGFhMTJjMjc4ODUiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjM4MGI3ZTA0M2VlYWMyYTA3YjY5YmMwOTlkMTk2NGMxMzQ4OGRiYWE2OGIyY2ViNmQ0M2M0ZTc5NmFjZjk0MWMiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6ImViN2Q4Nzc1MzZiZWNjMzA3MDE1Mjk0ZWRkYjFhOWVhMTk4NDhjZmEzNmYwZTczNGVmZTMzMTY4MmU0NzliOGMiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjljZjI1YmE0OTc0ZDg1OGJkNzAxMTZmOWVjMzY2ZTBjMTZhOGUxYjE1ZDk2ZjcyZjBjMWY1NGY4NTc0ZjA2YTgiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS4wLCJjaCI6MzYwMDE3NTYsImNzIjowLCJmIjo0fQ.webp":"1#1:44387","/transform/v3/eyJpdSI6IjA5YWZjNmQ5YmE4MTNiNjQ2MjZjZmIyMWVmYmRkMWE5Mzg1ODZkOTE2MDQxMDMwYWJlY2FlODRlNjM2NjYzMjUiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6ImYyMTA4MDlmMWM1ZTJhZWZkMDU4YWY4OWFlZDNkMzY4MTVlMDY0OWJlNTIwYTVlMDY1ODk1ZGYxZTMyNTc3ZDYiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6ImFlNDEzMDMxNzJmN2MyZmFlMTdhMTBjYmNiNjU0ZmZhMjMxMTVkMTE4YTdlZDEwOWRmNTlmNzI3MTI4Yjg3NTYiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6ImFkZTlkMDYwNDE1OTEzNjViZjliNGU4Y2JkZWFmODAxMTZkMTVkMDlhNDQ5ZWNiOTU4YzJkMGYzOTNjYTNlZjYiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS4wLCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IjUyODQxYjAzZGJjYTVmN2NlOTViMjFmNDJmZDU3NjQyNGJhZWY4N2ZiMDc0YzQzOTFmZDc4MWM3ZTQyMGExZmIiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6ImQyMzhkY2NjMjYyOGUwZmRjZTgwZDA1OTQxMDViNmUzM2JlZDVkMjljNmNmNWEzMjkxYWYyNDgwMjMyMmY2YmUiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjljZjI1YmE0OTc0ZDg1OGJkNzAxMTZmOWVjMzY2ZTBjMTZhOGUxYjE1ZDk2ZjcyZjBjMWY1NGY4NTc0ZjA2YTgiLCJ3Ijo0MDAsImgiOjQwMCwiZCI6MS4wLCJjaCI6MzYwMDE3NTYsImNzIjowLCJmIjo0fQ.webp":"1#1:44387","/transform/v3/eyJpdSI6Ijg5MGQ0ZGE3ZDM2Y2Y2YzEwYWVlYjI5NzY1N2YwNjZlOWM0YjgzNmVhOWFlY2Y4NzM0NjZmMmI3NThmYzcyZjEiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjA1Yzg4NjMwYTA0MTQwYTI3N2Q3YjhlY2Q1NjZlZTA3YzU5MDU3ZmZhMDJkZGViNWY4ZWU5ZWE5M2U5NmMxYjQiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6ImEzZTQ0Nzk2MmViYWRhOTdiZTJkYTcwNmE2NjgxZGFkYzFhNjgyZGM3NDFlOTdlZDMyY2I0NjdhNjA5YzUxYmQiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MiwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6ImI1MDdlZGYwNzg3ZWE4ZTY5MDgxNzBhZmU2NWRlNWI0ODNkZDE5YzMwYmRkMzYxYTE0ODU4MzllNGQ4NWUwZGQiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjaCI6MTYzMjQ4OTMyMCwiY3MiOjAsImYiOjB9.jpg":"1#1:44387","/transform/v3/eyJpdSI6ImQ2MWMyM2VkZjFjZjhjMjhkOWQ3NDA3MmFiYzMzMjE4MDI3MTA1NDhhN2JhMTJlZjdmNjI3N2U5NjBiMTlhZjQiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6ImIzMmI4MDQ0NjRmZWI5YTQzZDNhYTMwYzhmYmFlYmEzNDk0YWViMzAyZDIxYWJiMWFkYTJjZmYzNjRiYTVhMGIiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjaCI6LTIxNDUyODE4MjYsImNzIjowLCJmIjo0fQ.webp":"1#1:44387","/transform/v3/eyJpdSI6ImM3NmUwOGJmMmVkODQ5MzBkMjljNmE3YTEwZGY3NjJkOWY2ZDg5N2Y4NWJmMTY3M2YwZTk0OGZmNjhhZDE3NzgiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS4wLCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6Ijk2ZWFkYTcxNDQwNWRkNjRhZTQ4ODMyZWRlMDM2MDA1OWM4MTM3ODAxODVlNjBhZDc1MmRlODU0ZmJhNmUxZTIiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IjljZjI1YmE0OTc0ZDg1OGJkNzAxMTZmOWVjMzY2ZTBjMTZhOGUxYjE1ZDk2ZjcyZjBjMWY1NGY4NTc0ZjA2YTgiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjaCI6MzYwMDE3NTYsImNzIjowLCJmIjo0fQ.webp":"1#1:44387","/transform/v3/eyJpdSI6ImFiYmNkYjU4NjZmYmE0YzljMWM5YmQ2OGQ3NTUzOWUwMzE5ZjdjZDJhYTk4YjVhMjQ2MmFmNjU3M2ViNjE2NjAiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IjY2OTdlZmRmNzllMWYwYzY5NWI2ZDAwMzcxZTg5MWU5ZjMzNzUzMDFkNzFjNWQ5Y2E2MWQyMjM2ODI0MGMyZTEiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS4wLCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6ImViYjg5MDZhOTFlNGVjYmM0MDNlNDI4YjM5ZDljYTdjMjkzYmJkYTU5YTQ3NGRmOGRiN2Q0MWZiOTI4ZTBmNGYiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6ImYyMTA4MDlmMWM1ZTJhZWZkMDU4YWY4OWFlZDNkMzY4MTVlMDY0OWJlNTIwYTVlMDY1ODk1ZGYxZTMyNTc3ZDYiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IjA2MTgyYzY0ZDgxZGFhMTMwMjY4NDNkZWM5MjNhZTYwZTMxZmJiZTA0N2Y0MTkwMTJhOWMxMWVkNDBhMjk0MGMiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjVjNjg2ZjBhYjIwMWNlZjNiOWEzOTM2MmE5NzA5MDQ2NzUzMDk1NDU2MzRhYTJmMjdlYThjYmQ3YTIxM2RmZDEiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MiwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6ImMxNGQyOTM5ZmU4NjYwZmNkYjM2ODExODhjOTdjMmYwYmE5ZjEwZWYxNGMwZGJkMGVjYTY3NTg0MWQ3MzBmZGQiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS4wLCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6Ijc3ZjIxNjYyMmM4ODM2MWQ4ZjJjOGMzMzJhZGZlOTQ1Y2EyNzA1NDFkMzhkNzA1NTc0Y2M2MWYyYWE3YmQwYmIiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS4wLCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6ImZjMzY4OTEyNzE5MzM4OTljNTIyYTFlYWZiNTIwMTg3YTk3MDJiYzRjYmZiODgxYjE2YmQ0NjA4MDBhMjI3MzkiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjA0NGNjYmYyNzMyMDllMTUwOWQ2NjkxMWY3M2VlNmJlY2YxZjI4MDVlNmIyNTIwODIwM2FlY2YyM2Y5Y2Q5NGEiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IiIsIml1ZSI6Imh0dHBzOi8vd3d3LmJpbmcuY29tL3RoP2lkPU9QSFMuJTJmMUJmZXlhUWNSQTBudzQ3NEM0NzQmbz01JnBpZD0yMS4xJnc9MzAwJmg9MTU3JmR5bnNpemU9MSZxbHQ9OTAmYz0xNyIsInciOjMwMCwiaCI6MjUwLCJkIjoxLjUsImNzIjowLCJmIjowfQ.jpg":"1#1:44387","/transform/v3/eyJpdSI6ImEyODhmZjVmOWQzNTBmYjhhNjgwYzQ0ZWU2MDRhZTMyNTM4ZGZlZTQ2NjM4MzZhMzhkNTc3NjExY2IyZDdkM2UiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6ImRlMTVhZTZkNTFlMzVhNzJmMmU0NmYwMDE3MWJlMDc3Y2JmOGJkMWM4ZTc2ZDA0MGVjY2FmZWU2Zjk2OGNhMmUiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS4wLCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IjBjNTM2MDM0NDM1ZjM0OGY1Mzg2MWU0Zjg4OTkzZWFiY2UxNGU4ZWNjYWY4YWEyYzc3YTFhZTFkNjI1OTgwYmYiLCJ3Ijo1MDAsImgiOjI4MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6Ijg5YmZhMWE0MzgxMDAyMTJhYjc0NGE3ZThmNjdkMTM3MjQ0NzU4ZGQ2YjJiZDBmZjEwMjk2ODBiNDE0MjFmYzciLCJ3Ijo1MDAsImgiOjI4MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IiIsIml1ZSI6Imh0dHBzOi8vd3d3LmJpbmcuY29tL3RoP2lkPU9BREQyLjczNTMxMDgyNTk1MTdfMVJNQlMwSlpLNkU4T0c2V1ExJnBpZD0yMS4yJmM9MTYmcm9pbD0wJnJvaXQ9MC4xMDc5JnJvaXI9MSZyb2liPTAuODkzNiZ3PTMwMCZoPTE1NyZkeW5zaXplPTEmcWx0PTkwIiwidyI6MzAwLCJoIjoyNTAsImQiOjEuNSwiY3MiOjAsImYiOjB9.jpg":"1#1:44387","/transform/v3/eyJpdSI6IjI5YTk3Njc0YzM3YWE0MzU2Y2I5MDgzMDU4ZDYyOWFmMzA0MjY2MjVhNmUxYTliNGVmMDc3ZDQxNTMwMDY0YjIiLCJ3Ijo1MDAsImgiOjI4MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IjU5MWQ0OTZjZjgzZjU5NDU0ZDY3ZTUzNDk0YTk4MGY0ZDIxNDMzMzVjNTA3OTEzNzcyOTcxYWVmNjFmYzdkZGMiLCJ3IjozMDAsImgiOjMwMCwiZCI6MS41LCJjcyI6MiwiZiI6NH0.webp":"1#1:44387","/transform/v3/eyJpdSI6IiIsIml1ZSI6Imh0dHBzOi8vd3d3LmJpbmcuY29tL3RoP2lkPU9BSVAuOTNkOGYwYTM5M2JkNTA1MmRmZjVlYTk4NTNkMGNiZmEmcGlkPUFkc05hdGl2ZSZjPTMmdz01MCZoPTI2JmR5bnNpemU9MSZxbHQ9OTAiLCJ3Ijo1MCwiaCI6NTAsImQiOjEuNSwiY3MiOjAsImYiOjB9.jpg":"1#1:44387","/transform/v3/eyJpdSI6IiIsIml1ZSI6Imh0dHBzOi8vd3d3LmJpbmcuY29tL3RoP2lkPU9BSVAuODI3M2I5MTZhYzU2ZWI3OTE1ZDVmYTI2ZTdlMjI5ZmQmcGlkPUFkc05hdGl2ZSZjPTMmdz01MCZoPTI2JmR5bnNpemU9MSZxbHQ9OTAiLCJ3Ijo1MCwiaCI6NTAsImQiOjEuNSwiY3MiOjAsImYiOjB9.jpg":"1#1:44387","/transform/v3/eyJpdSI6IiIsIml1ZSI6Imh0dHBzOi8vd3d3LmJpbmcuY29tL3RoP2lkPU9BREQyLjgxMDg5MDIxNjE4NDRfMVlOTzY4WUZGSlUyOUtIQUZXJnBpZD0yMS4yJmM9MyZ3PTMwMCZoPTE1NyZkeW5zaXplPTEmcWx0PTkwIiwidyI6MzAwLCJoIjoyNTAsImQiOjEuNSwiY3MiOjAsImYiOjB9.jpg":"1#1:44387"},"ten.sxnda.rtfhs":{"F9b3154acec9cba4d327f8f7f4a9dde31a6.png":"1#1:44387","F18286871498439705804&":"1#1:44387","Fbp_us_ret-rtb-house_ongoing-q1-2024_v1_150x150.png&":"1#1:44387","Fj_150x150.png&":"1#1:44387"},"moc.sjgatinmo.20asu-nyd-gat":{"zem.outbrainimg.com%2Fp%2Fsrv%2Fsha%2Fc9%2Fdb%2F13%2F735e6c1a17e4b3a5d23a140201b77036b5":"1#1:44387","zem.outbrainimg.com%2Fp%2Fsrv%2Fsha%2F03%2F11%2F0d%2F2a382cab0b1e3a87625e303eb0af5ef9a6":"1#1:44387","zem.outbrainimg.com%2Fp%2Fsrv%2Fsha%2Fe6%2Fc1%2F32%2F383d56a7c15989ad569ca12b5dbceb4730":"1#1:44387"},"pj.da-omeer.psd.egami":{"096*728*c3ffa219a.jpeg":"1#1:44387","096*731*c0dfd92da.jpg":"1#1:44387","094*374*c48b74241.jpg":"1#1:44387"},"moc.metsysda-nozama":{"1001914":"1#1:m","1002139":"1#1:m","&crid=Bypass_8560616":"1#1:44387","&crid=29270323":"1#1:44387","crid=1002139":"1#1:m","6126_207512_7e0sVyCkW/z4zEfdfstbOZwdEbxVzbXqJ5G50Fgeg98=":"1#1:m","6126_207512_8DjTcJMVLB22Jgl24ESu":"1#1:m","tn07NtY7IvqpOz4yL32D8KpLPX4nYmvy2U02TXurDfk":"1#1:m","fpIO7rUFPYOs/otUvtKOGI zD3tQp9gDMtZc7ooM=":"1#1:m","8DjTcJMVLB22Jgl24ESu/u44ZLcB/MCbLVatyXTJzUo=":"1#1:m","&crid=250_535882_ssl":"1#11:m","&crid=676174760530":"1#11:m"},"moc.gniklathsalf.ybdevres":{";8094081":"1#1:44387",";8094083":"1#1:44387",";8094082":"1#1:44387",";8094084":"1#1:44387",";7762933":"0#3:42573",";8043529":"1#11:30478$23:33427",";8043404":"1#23:33427"},"dib.ylanosrep.ndc.tnetnoc":{"balemaro_watt_saver_aos*companion*B.png":"1#1:44387","balemaro_watt_saver_aos*video*3-SUB.mp4":"1#1:44387","balemaro_watt_saver_aos*video*10-1311_BF.mp4":"1#1:44387","balemaro_keto_aos_2024*video*6_NYE_291223_DE.mp4":"1#1:44387","balemaro_keto_aos_2024*video*2_NYE_291223_DE.mp4":"1#1:44387","balemaro_keto_aos_2024*companion*EC2_NYE_291223_DE.png":"1#1:44387","com.yolo247.app*appstoreicon*247.png":"1#1:44387","com.yolo247.app*video*low":"1#1:44387"},"moc.xarret-ndcralop":{"7856e2082e9c4b5ba66d222192a10086":"1#1:44387","6529774b02d6413756ece817":"1#1:44387","6529774b02d6413756ece816":"1#1:44387"},"moc.ocolomsda.f-ndc":{"lidwvm3n_ekalpgw_lb4zema7wczfijlp_transcoded.mp4":"1#1:44387","lrz10wk0_v6cbata_w2z9qxxsaveodjhc_transcoded.mp4":"1#1:44387","lrz10fgw_sqboxyu_mhe6jhezl9kz1um3_transcoded.mp4":"1#1:44387","lrz17izd_qg9dfrr_a61ctj6qbbbwusvb_transcoded.mp4":"1#1:44387","lrz16f77_jyhcd44_isqgutz0qjtxg1qv_transcoded.mp4":"1#1:44387","ll6nbeaq_g8jarpl_gj3sxh65jb4skryk.jpg":"1#1:44387"},"moc.sjgatinmo.nyd-gat":{"6b878771cb1519b2e6d2c418eb129c20f5.jpg":"1#1:44387"},"moc.oetirc.su.ad.tac":{"lp.sculptnation.com%2Fsp%2Ftest-boost-max%2Ftest-ripped-fbk-cpc-eco-bb":"1#1:44387","loja.electrolux.com.br%2Fbatedeira-planetaria-electrolux-750w-cinza-experience-com-tigela-inox-5l--ekm40-%2Fp":"1#1:44387","loja.electrolux.com.br%2Ffogao-electrolux-5-bocas-experience-com-perfectcook360-prata--fe5dc-%2Fp":"1#1:44387","banyanhill.com%2Fexclusives%2Fbuy-alert-invest-in-this-coin-before%2F":"1#20:34260","www.hankypanky.com":"1#34:11010"},"ten.xednay.sdm.sratava":{"/HotQETh66k9IR9VAYDsjNQ/":"1#1:44387","/j6zn3Q8OmZXfWHMAQP3nXg/":"1#1:44387","/QfKZopYCpxZIQCYacoobzA/":"1#1:44387","/UUVji4m49ZVogQdbg55YgA/":"1#1:44387","/LMVyEfKDMrFGhria-Mf0Ww/":"1#1:44387","/Jxe0z8zEzdeaiXaADdV8Mw/":"1#1:44387","/FVowbXudvMUa0LGOUDJS7g/":"1#1:44387","/9cgfkn_6paioubv3xF9H9g/":"1#1:44387","/FfAuQJAOF6lzx1t7UgQrKg/":"1#1:44387","/4TmfCXFqPXs0v31QNN1VAg/":"1#1:44387","/pxG-oWqM7_le1xQb4KRc1A/":"1#1:44387","/ByVdONS2EHp4RxRL-hSTVw/":"1#1:44387","/ZiXSMzSyb6srM_C_3FzJHQ/":"1#1:44387","/XmQ58sFhp-PcZLxVrpY2Kw/":"1#1:44387","/2ggCx4yRpNc7BPKrbSeIoQ/":"1#1:44387","/4iEFPEcXt_KA7Fn6MAxmFw/":"1#1:44387","/KEAm-Xg01CmTxek0_xCwVA/":"1#1:44387","/6ZLWtRKAPuw8VIVOqXqzMw/":"1#1:44387","/DRQ-5F5ourIQC2eOITTEPQ/":"1#1:44387","/j06c0Uk7Y4lZfGtw_Z8I-g/":"1#1:44387","/yjFME-rkkNEbGOjKfcg2Sw/":"1#1:44387","/g6Y2JJMK4KXKnCKquFvKmA/":"1#1:44387","/DHwyqOcB5AAbA0IExm2uQg/":"1#1:44387","/CCrYIJYUm6i52FT_4NQrKQ/":"1#1:44387","/ZZlmKYGc3kkRx3aquRinFQ/":"1#1:44387","/clAnKpgpti1cbQ8uXMENXg/":"1#1:44387","/pic62bf404ee70c26775ec4d858f8c89de1/":"1#1:44387","/t7w5UtvSbuo1vkba_Pe2Pw/":"1#1:44387","/wZcPAT_2zh8WIL8BDVQfXA/":"1#1:44387","/6ZAvKoIg_tts202PtmYJqA/":"1#1:44387","/18QAxK7IkW7_zqGRgecfDQ/":"1#1:44387","/3fN0m_mWcxrAhwEwNXxKVw/":"1#1:44387","/2a0000018c8d229ffa29722dfa5c72fe93d6/":"1#1:44387","/mZ-ar5GlWsgOa5xzFauxWw/":"1#1:44387","/ZZ3xYiJh8BV0spUmgy7XSQ/":"1#1:44387","/-OCACRu05v7-8dBWI6U59g/":"1#1:44387","/1IxJJN0WiXreK1adkHFFLA/":"1#1:44387","/cPI76iQhRUh60-ycetsiyg/":"1#1:44387"},"moc.enigne-ndcralop":{"pevtbt=940658":"1#1:44387","pevtbt=688777":"1#1:44387"},"ten.hctiwsdib":{"www.adamshoop.com":"1#1:44387","nurseyard.com":"1#1:44387","clientaccelerators.com":"1#1:44387","www.iseatz.com":"1#1:44387","www.hardwoodbargains.com":"1#1:44387"},"moc.tensntc":{"sid=80936749":"1#1:44387"},"ten.tnorfduolc.ui9pq9vtkadj3d":{"/c/12360472/VxB9nNBRDQRtNUTYOP8urwhz-low.mp4":"1#1:44387"},"moc.llorda":{"FOQAAJIP4JCWRFLRPWICLG":"1#1:44387","OOYP7OCZQVAMPEHVREV424":"1#1:44387","OXAKHUY3JZFKRDIBM6YQUT":"1#1:44387","VZIET4ZU6JDSLHPJBORTR2":"1#1:44387","V5BT5M3UM5DEBLKMRFKD7J":"1#1:44387","CVKYWBEWNBEV3CU3GCORCA":"1#1:44387","WGC2J24H3RDQHKC7HXLRVD":"1#1:44387","BFST6V2XLZBMVF4USZG4LN":"1#1:44387"},"moc.xovij.sa":{"campaignId=177340&":"1#1:44387"},"ten.xednay.nocivaf":{"/favicon/domofon-key.ru":"1#1:44387","/favicon/prima-alabay.ru":"1#1:44387","/favicon/sontorg.ru":"1#1:44387","/favicon/bontur-arm.ru":"1#1:44387"},"moc.xedams.sevitaerc":{"/2166323/":"1#1:44387"},"moc.noitida":{"&cid=6121278&":"1#1:44387","&cid=6121279&":"1#1:44387","&cid=5864601&":"1#1:44387"},"moc.gnivresradartrops.sevitaerc":{"/e7d7ed80-aa69-11ee-a795-f3d50511beed.gif":"1#1:44387"},"ten.tnorfduolc":{"/c/12360472/VxB9nNBRDQRtNUTYOP8urwhz-low.mp4":"1#1:44387","/c/12360472/VxB9nNBRDQRtNUTYOP8urwhz-high.mp4":"1#1:44387","/vm/24/01/25/13/b10ff455-6fb5-480f-bd4e-26dbd42e3b80.mp4":"1#1:44387","/vm/23/10/17/00/4ee8851c-ba58-4760-abdb-2d97b3806eea.mp4":"1#1:44387","/vm/24/01/25/13/b36daee1-faf3-49a0-bb54-283d456c1b52.mp4":"1#1:44387","/vm/23/10/17/01/aa663f58-78f7-4dca-b438-34db9ff93d06.mp4":"1#1:44387","/vm/23/10/17/01/ab68acf8-44ba-4b2c-aab4-89aa15aa8d56.mp4":"1#1:44387","/vm/24/01/29/20/0254f3be-4a2f-4186-9075-16df29f6f4c7.mp4":"1#1:44387"},"ten.buhifr.1c":{"5398655_608954978272276939":"1#1:44387","5398657_362198266657952340":"1#1:44387","5398667_309119092006997103":"1#1:44387","5398673_644451947911793393":"1#1:44387","5398669_770211411486212708":"1#1:44387","5398671_536015322560652574":"1#1:44387","5407545_151778957547439569":"0#3:42573"},"moc.swanozama.1-tsew-ue.3s.stessa-redliub-evitaerc-ka":{"80fb378dc0874ec286940bbd3858baed.png":"1#1:44387","4adb4377bc4a45fea490068e22d2bdef.png":"1#1:44387","be01074daf804b9d81b884a15d98ff01.jpg":"1#1:44387","5feacee3eb1c4275aa9620946f77433d.png":"1#1:44387","170269f3fb5f493a876ed51e27d2499e.png":"1#1:44387"},"gro.rvrsda":{"crid=sz41lb1a":"1#1:44387","crid=ptmb9j7n":"1#20:34260","crid=yovxeybh":"1#21:34230","crid=usg4my11":"1#21:34230","crid=84wqoora":"1#15:m","crid=dpv5ac4l":"1#15:m","crid=ydmeu2mf":"1#15:m"},"moc.buhifr.a":{"&ai=5398657":"1#1:44387","&ai=5398655":"1#1:44387","&ai=5398671":"1#1:44387","&ai=5398673":"1#1:44387","&ai=5398667":"1#1:44387","&ai=5398669":"1#1:44387"},"ten.ndcibomni.psd-l.i":{"c40fe6cd087f4f8ab842a91adbe0a617*original.gif":"1#1:44387","77c32a405f9d48a6883d16cbee5e501e*original.gif":"1#1:44387","72d6138cdb4648d981b12ac89c9ea45b*original.gif":"1#1:44387","e994a6f6a02e473d8d2c5fb29989716d*original.gif":"1#1:44387","03fcaf1447fa4278b6677a87014ff2a5*original.gif":"1#1:44387"},"ten.largetnim.wen-sptth-nda-ndc":{"/vm/23/12/25/18/4c8a79c2-0a62-454c-a8de-888d904dcb1c.mp4":"1#1:44387"},"ten.largetnim":{"/vm/23/12/25/18/4c8a79c2-0a62-454c-a8de-888d904dcb1c.mp4":"1#1:44387"},"oi.rdib.aidem":{"/deseret/2/246/13000_CafeRio.PolloAsado.Meat_300x250_12.28.23.jpg":"1#1:44387","/deseret/2/246/12995_CafeRio.PolloAsado.Meat_320x50_12.28.23.jpg":"1#1:44387"},"moc.kitamsdib.ndc":{"/chime_320x50.png":"1#1:44387"},"moc.tsujda.weiv":{"ehdw2a9":"1#1:44387","15welimj":"1#1:44387","14ofl462":"1#1:44387","18wm6hox":"1#1:44387","uld4tme":"1#4:44798","pzlcd8p":"1#12:35415"},"ten.reippa.da":{"/qWVXOjG_1700191730404_0.gif":"1#1:44387"},"moc.slabolggtm":{"/vm/23/10/17/01/ab68acf8-44ba-4b2c-aab4-89aa15aa8d56.mp4":"1#1:44387","/vm/24/01/11/11/6534e234-5edd-4e00-85b7-f22d88be65dd.mp4":"1#1:44387","/vm/24/01/11/10/033e4635-5c6a-40ea-9147-39b3fac31af5.mp4":"1#1:44387","/vm/23/10/17/00/4ee8851c-ba58-4760-abdb-2d97b3806eea.mp4":"1#1:44387","/vm/24/01/25/13/b10ff455-6fb5-480f-bd4e-26dbd42e3b80.mp4":"1#1:44387","/vm/24/01/25/13/b36daee1-faf3-49a0-bb54-283d456c1b52.mp4":"1#1:44387","/vm/23/10/17/00/b4d743ec-6323-4efb-83fa-9f0f7217a16a.mp4":"1#1:44387","/vm/24/01/11/10/ea48f0ea-0651-4d2f-b6c2-d1364264e571.mp4":"1#1:44387"},"ur.0ft48o.ldg":{"/as/web-source/4hb/22GchT.png":"1#1:44387"},"moc.slabolggtm.wen-sptth-nda-ndc":{"/vm/24/01/25/13/b10ff455-6fb5-480f-bd4e-26dbd42e3b80.mp4":"1#1:44387","/vm/24/01/11/10/ea48f0ea-0651-4d2f-b6c2-d1364264e571.mp4":"1#1:44387","/vm/23/10/17/01/ab68acf8-44ba-4b2c-aab4-89aa15aa8d56.mp4":"1#1:44387"},"moc.yfinrae.citats":{"/m/1403c986-8482-45ba-a550-d2a6566f86c7/8d7d63d1-fd89-4e3c-b09d-7dee57cf3737/im-bf250a91890c5f395fba7c91a5c8f33c.jpg":"1#1:44387"},"ur.zedqmz.ldg":{"/as/web-source/4hd/2LTxy34.png":"1#1:44387","/as/web-source/4hb/2tD8jN.png":"1#1:44387"},"ten.tnorfduolc.qq310nlf43iz2d":{"/vm/23/10/17/01/aa663f58-78f7-4dca-b438-34db9ff93d06.mp4":"1#1:44387","/vm/24/01/25/13/b10ff455-6fb5-480f-bd4e-26dbd42e3b80.mp4":"1#1:44387","/vm/23/10/17/01/ab68acf8-44ba-4b2c-aab4-89aa15aa8d56.mp4":"1#1:44387","/vm/24/01/29/20/0254f3be-4a2f-4186-9075-16df29f6f4c7.mp4":"1#1:44387"},"moc.imikse.aidem-psd":{"115096_1893696581":"1#1:44387"},"moc.tpadakcats.ndc":{"17517*777ab69a26d2260903afd0c0748d8f37.gif":"1#1:44387"},"moc.tpadakcats.vrs":{"404714":"1#1:44387","475904":"0#8:41493"},"hcet.elgnuoy":{"/as/web-source/4hc/0kPALu.mp4":"1#1:44387","/as/web-source/4hd/29Bw78A.mp4":"1#1:44387","/as/web-source/4hd/212U7E0.mp4":"1#1:44387","/as/web-source/4hc/18bvrj.mp4":"1#1:44387"},"moc.ippauoy.psd.ndc":{"/games/1884/variations/8671/49539_64b8869a-c468-4d34-bb52-a3be635a7e57.jpg":"1#1:44387","/games/1884/variations/7329/42242_08d8d7d1-14e1-4b18-9803-60212a03434a.jpg":"1#1:44387"},"moc.esaedib.tcerider-evitaerc":{"/creative.bidease.com/media/res/2024/01/41893778-acd6.jpg":"1#1:44387","/creative-cdn77.bidease.com/media/res/2023/04/a715c24c-6d4c-720x1280.mp4":"1#1:44387","/creative-cdn77.bidease.com/media/res/2023/11/962d15aa-bcf0.jpeg":"1#1:44387"},"moc.ocolomsda.c-ndc":{"lqgnry8b_v80rvub_dyttdpq57zinrpyq.png":"1#1:44387","lp06s50l_ednu0vz_jhwmemwkwirjcr34_transcoded.mp4":"1#1:44387","lkjkmph3_qphg7tw_ecoswgzj5btqwkdj.mp4":"1#1:44387","lnwxybuj_l9jwwc5_lqz3a09zkbmutw1y_transcoded.mp4":"1#1:44387","lqkmfkke_smciagl_rqxvcwoqfjugtdx3_transcoded.mp4":"1#1:44387","lpkjuyhj_xzthfyo_gyy7jyyhb2ucwnru_transcoded.mp4":"1#1:44387"},"moc.esaedib":{"/creative-cdn77.bidease.com/media/res/2023/04/350fede7-0ccc-1080x1920.mp4":"1#1:44387","/creative-cdn77.bidease.com/media/res/2023/04/a715c24c-6d4c-720x1280.mp4":"1#1:44387"},"moc.ippauoy.psd.sevitaerc":{"1884*7331*42251":"1#1:44387","1884*8671*49539_ec105264-e606-42e9-80de-d84c892484df.png":"1#1:44387","1884*8671*49539_64b8869a-c468-4d34-bb52-a3be635a7e57.jpg":"1#1:44387"},"moc.xedams.1-tnetnoc-citats":{"ef8ee298feb0c5bdfc6474b87efdc0db10d1c25fa30d3bc8c16520dc4015ab93.png":"1#1:44387"},"moc.swanozama":{"/jscache/":"1#1:34074"},"moc.dibpt.c":{"4405*03bceac68727153c89d23901e353a660.jpg":"0#3:42573","3549*f0226561657e2327eadd7a555462155a.jpg":"0#3:42573","4613*3d86c2cf041f1aa7b4e4cc034d7fac85.jpg":"0#3:42573","3549*ebdfa70726f476c9a334d68b1d8f43b0.jpg":"0#3:42573","4613*cf01f4f39263b67f7f9651df99fa804b.jpg":"0#3:42573","3549*56b8fd9b322c7657f3a6f00421671b37.jpg":"0#3:42573","2569*f26fd3102afcfd4a72328e5715c94729.jpg":"0#3:42573","2569*4e8169f657542802ad73383b16329123.jpg":"0#3:42573","3549*701a4434ddc9908e8009a6d373d25f6f.jpg":"0#3:42573","4405*4e2acf6b57b9ae383d3ee3317a1ca3e4.jpg":"0#3:42573","3549*570a0eb3a468ee3752d37e014a82c366.jpg":"0#3:42573","3549*bc15842d2cc242c3d33de14f470b533e.jpg":"0#3:42573"},"moc.evitciderpi.ndc-aidem":{"87961*18cd5e23932_PaidAds_Programmatic_SC_Viant_320x50.jpg":"0#3:42573"},"moc.lexiptaom":{"p-PMfpcAySfecwk":"0#3:42573","p-UewJrewWcHNc8":"0#3:42573"},"gro.rvrsda.5lmth":{"/4e2voai/2c7d0ub/":"0#3:42573","/hjbgyor/6207oeu/":"0#3:42573"},"pj.ncnu":{"pk0InCPw/_dui7s0hif4o.mp4":"1#4:44798","Bq3xEAVH/_khvdv149fg8.mp4":"1#4:44798","pk0InCPw/5hj1tior328.jpg":"1#4:44798","pjKUw_RR/_gumhn9higs8.mp4":"1#4:44798","pk1Afq9P/_1lh7j9g2hio.mp4":"1#4:44798","pk2AkzWn/_9ine18b34k.mp4":"1#4:44798","pk2AkzWn/uapr2mmeguo.jpg":"1#4:44798","pk2Akw_a/imrv618dp0g.jpg":"1#4:44798","pk0IHCWg/v0jbesf0hf.jpg":"1#4:44798","Bq3xEAVH/y0xty9nj4kg.jpg":"1#4:44798","pk0IHCWg/_asmhkj4vs6g.mp4":"1#4:44798","pk2Akw_a/_l0c83oq9rfo.mp4":"1#4:44798","piXH42ts/l879vmk48vg.jpg":"1#11:30478$23:33427","ppU7s3T9/9mg8qrji45o.jpg":"1#12:35415","pnXGWhcm/_0gjpoi48g4o.mp4":"1#12:35415","ppU7s3T9/_s5fjtfbaotg.mp4":"1#12:35415","pmXsyN9W/_so5fd6gac2g.mp4":"1#12:35415"},"moc.yrotria.ndc":{"/d066ae0fc7146c4c5d9f1fd5f452ab33_index/1188fad49179182a5a4bc4949f22ab48__.jpg":"0#8:41493","/6071fbf22e348fbddd0df3f0b3256465_scroller/f50420cfa58ba1c885a9795c0e26fdf1__.jpg":"0#8:41493","/653f4a3c29e6423f3a6cfa1ab50a395e_index/c701d86024688422fbd421f895e4e16b__.png":"0#8:41493","/fb0bf6b0d951d799a09d358e354d6e27_scroller/a4bd4729d0fe3f02296540d81dfdd7ce__.jpg":"0#8:41493","/a764c9614a89c3bcfc6d353879e7fd02_index/b69f54630304684e4665e86af4d2728d__.mp4":"0#8:41493","/a764c9614a89c3bcfc6d353879e7fd02_index/40a5cc49fa3fc6dd5eae95efb2aa05d9__.jpg":"0#8:41493","/f7d9c95cb1e2586cd4acfc55da7a6d2f_index/67ceed9f47c971498720538d476a346c__.mp4":"0#8:41493","/04bd532af645ce8ba080cbdb8cb12f5f_index/330cf2138a70b076194189e76029beae__.png":"0#8:41493","/85fa7ae2737ee9efff1e17a9b2af66d5_index/1f0c1c03bd8ee5bd8483ae85d2ff3419__.mp4":"0#8:41493","/489df5e83343e1d59e4cbfdd7e1274d8_index/8f4b89f78ea1ac12a564d990ef94e832__.png":"0#8:41493","/cd3f34e0c241687a9655e226ebf4112d_index/2acc3ac624a9566df98bf1e3ea5fd1e2__.png":"0#8:41493","/60c65ebdbb1a9f1ce479fc31da0bd47b_index/3416329cac786bcacf15d3c25a6cb44a__.png":"0#8:41493"},"ten.oetirc":{"/design/dt/24065/4827014/04a445d9ffaa425194e492a9149992a4_2d12cbdc-4fda-4f6b-a564-2e474fdff69a.mp4":"1#11:30478","/design/dt/24065/4827014/0f37d6b4b3c14530b2ea571a2e9997b2_8dcfbbc7-c6e6-421d-bda9-8fa95fb9f572.mp4":"1#11:30478","/design/dt/24065/5066384/b45cb61486e842a89f35d5d95cede10c_b1c70467-c13d-4173-a9fa-9c62bcbd6212.mp4":"1#11:30478","/design/dt/24065/5082084/37740565c3e64ecfa58e1c2861dc8160_b1c70467-c13d-4173-a9fa-9c62bcbd6212.mp4":"1#11:30478","/design/dt/24065/5082084/a074afa9efd644c39e0769625890a89e_ff6c5e8b-0f18-4e56-ac85-f9fe3b47eccb.mp4":"1#11:30478"},"pj.tuof.psd":{"12955":"1#23:33427","40980":"1#11:30478$23:33427","50181":"1#21:34230"},"cc.nipop.swaegami":{"/ML/09134e6f90ccf0cf554aa6360bfc0616__scv1__300x175.png":"1#11:30478","/ML/c5665cab6420aff42e2fb6e75f2f7e2a__scv1__300x175.png":"1#11:30478","/ML/63820dd4696fa9a4eb65af6ba499e177__scv1__300x175.png":"1#11:30478","/ML/d9a1f9fd8ffffbfce9d1b00e435a44e4__scv1__300x175.png":"1#11:30478","/ML/7aa54bdddf4b277ab948528c7abce09a__scv1__300x175.png":"1#11:30478","/ML/e69e5c0ec1c86cb41bd0e78d48f8de75__scv1__300x175.png":"1#11:30478","/ML/071b20b79a9843240d6cfec3779dcded__scv1__300x175.png":"1#11:30478","/ML/caeb87c381e92ae4c9a139156c4938e0__scv1__300x175.png":"1#25:30129","/ML/f1c3a873fe1d86e83bb902b0f13de726__scv1__300x175.png":"1#25:30129","/ML/b719d8dd410da2589982c011d483772d__scv1__300x175.png":"1#25:30129"},"ten.wolfrennab.c":{"657728b8cb17717656961706":"1#11:30478$15:34287"},"pj.vnoc-ac.etis":{"3160*79e82dfae6681f255809e451fdde568f*230802_MM_video_640-100_02_6s.jpeg":"1#12:35415"},"moc.artxennoc.lss":{"DDM_BW_CAS_ACQ_JP_300x250":"1#15:34287"},"ten.mrofda.2s":{"60833766*60833766.png":"1#15:34287"},"ten.sisab.10ndc":{"/112100/112053/KpJripbXyDttvdTG.gif":"1#15:34287"},"moc.nozama-aidem.m":{"al-jp-eb5039ce-f881*dadb447c-41f6-4618-bee3-a0680c0697c9.jpg":"1#19:33845"},"pj.daorcim.ndc":{"15*143596_e806846287288aa7f2f76dd6a88a65c9.png":"1#20:34260","16*158037_a285d30445eb37121f3b3d72c006f50f.jpg":"1#20:34260","16*158036_86135ca568dfa1ffe8f7ff15c39ebd86.jpg":"1#20:34260","16*155036_451de49ef33027e01060dbb05e7c6724.jpg":"1#20:34260","16*157738_4ef4259f11b67f66b442411e487ed254.jpg":"1#20:34260","15*143597_7d319b2a522578c0f8e7ea63244a011d.png":"1#20:34260","16*153659_7beebf5489ec3ddb539b30b4230967cc.jpg":"1#20:34260","16*155035_2b1ed626f23870784afc02a729a90f97.jpg":"1#20:34260"},"moc.mdcos.i":{"2*2318*2415176*20230706070843-e4e598f68518a1.png":"1#20:34260","2*2312*2403942*20230609083617-c8b0831f22425e.png":"1#20:34260","2*2318*2415181*20230706071208-32ccd90146bd48.png":"1#20:34260","2*2209*2243719*20220613042259-f66bb77d62f8bf.png":"1#20:34260","2*2318*2415178*20230706070957-72ca380623f380.png":"1#20:34260"},"aisa.m-da.psd-tluserdib":{"tpsid=8c610fdef65bd3275799fcd89ea04a06":"1#20:34260"},"zyx.klcymkrt":{"/":"1#1:m"},"ten.egdeeruza":{"/":"0#1:s"},"ten.egdeeruza.11sk":{"/":"1#1:m"},"ten.egdeeruza.bmys":{"/":"1#1:m"},"ten.egdeeruza.i31fd":{"/":"1#1:m"},"ten.egdeeruza.dleu":{"/":"1#1:m"},"ten.egdeeruza.btfl":{"/":"1#1:m"},"ten.egdeeruza.nilo":{"/":"1#1:m"},"ten.egdeeruza.nebr":{"/":"1#1:m"},"ten.egdeeruza.eijhi":{"/":"1#1:m"},"ten.egdeeruza.dyqk":{"/":"1#1:m"},"ten.egdeeruza.uher":{"/":"1#1:m"},"ten.egdeeruza.nayvw":{"/":"1#1:m"},"ten.egdeeruza.mitu":{"/":"1#1:m"},"ten.egdeeruza.tsbcd":{"/":"1#1:m"},"ten.egdeeruza.tski":{"/":"1#1:m"},"ten.egdeeruza.eijs":{"/":"1#1:m"},"ten.egdeeruza.ixakak":{"/":"1#1:m"},"ten.egdeeruza.9redcv":{"/":"1#1:m"},"ten.egdeeruza.eno3bw":{"/":"1#1:m"},"ten.egdeeruza.muxkj":{"/":"1#1:m"},"ten.egdeeruza.6xiske":{"/":"1#1:m"},"ten.egdeeruza.izl":{"/":"1#1:m"},"ten.egdeeruza.tsebov":{"/":"1#1:m"},"ten.egdeeruza.ubub":{"/":"1#1:m"},"ten.egdeeruza.pyu":{"/":"1#1:m"},"ten.egdeeruza.iucl":{"/":"1#1:m"},"ten.egdeeruza.obz":{"/":"1#1:m"},"ten.egdeeruza.aixl":{"/":"1#1:m"},"ten.egdeeruza.gnods":{"/":"1#1:m"},"ten.egdeeruza.edmvv":{"/":"1#1:m"},"ten.egdeeruza.atfig":{"/":"1#1:m"},"ten.egdeeruza.botco":{"/":"1#1:m"},"ten.egdeeruza.relk":{"/":"1#1:m"},"ten.egdeeruza.olbkm":{"/":"1#1:m"},"ten.egdeeruza.ilew":{"/":"1#1:m"},"ten.egdeeruza.nivy":{"/":"1#1:m"},"ten.egdeeruza.nijb":{"/":"1#1:m"},"ten.egdeeruza.dixal":{"/":"1#1:m"},"ten.egdeeruza.uilw":{"/":"1#1:m"},"ten.egdeeruza.resy":{"/":"1#1:m"},"ten.egdeeruza.ssik":{"/":"1#1:m"},"ten.egdeeruza.aliseg":{"/":"1#1:m"},"ten.egdeeruza.oulof":{"/":"1#1:m"},"ten.egdeeruza.kinb":{"/":"1#1:m"},"ten.egdeeruza.tsdlt":{"/":"1#1:m"},"ten.egdeeruza.birl":{"/":"1#1:m"},"ten.egdeeruza.kei":{"/":"1#1:m"},"ten.egdeeruza.atla":{"/":"1#1:m"},"ten.egdeeruza.daol":{"/":"1#1:m"},"ten.egdeeruza.cpvi":{"/":"1#1:m"},"ten.egdeeruza.nazu":{"/":"1#1:m"},"ten.egdeeruza.nasvi":{"/":"1#1:m"},"ten.egdeeruza.zugnil":{"/":"1#1:m"},"ten.egdeeruza.dalm":{"/":"1#1:m"},"ten.egdeeruza.yliefk":{"/":"1#1:m"},"ten.egdeeruza.udk":{"/":"1#1:m"},"ten.egdeeruza.nixv":{"/":"1#1:m"},"ten.egdeeruza.sakt":{"/":"1#1:m"},"ten.egdeeruza.b-ue":{"/":"1#1:m"},"ten.egdeeruza.vb-te":{"/":"1#1:m"},"ten.egdeeruza.siats":{"/":"1#1:m"},"ten.egdeeruza.dv-ot":{"/":"1#1:m"},"ten.egdeeruza.datt":{"/":"1#1:m"},"ten.egdeeruza.ab":{"/":"1#1:m"},"ten.egdeeruza.isidak":{"/":"1#1:m"},"ten.egdeeruza.aijuj":{"/":"1#1:m"},"ten.egdeeruza.iugc":{"/":"1#1:m"},"ten.egdeeruza.abasna":{"/":"1#1:m"},"ten.egdeeruza.egmsg":{"/":"1#1:m"},"ten.egdeeruza.unay":{"/":"1#1:m"},"ten.egdeeruza.bbcl":{"/":"1#1:m"},"ten.egdeeruza.egog":{"/":"1#1:m"},"ten.egdeeruza.ejbr":{"/":"1#1:m"},"ten.egdeeruza.sdrig":{"/":"1#1:m"},"ten.egdeeruza.mb-nk":{"/":"1#1:m"},"ten.egdeeruza.datrih":{"/":"1#1:m"},"ten.egdeeruza.butr":{"/":"1#1:m"},"ten.egdeeruza.dadd":{"/":"1#1:m"},"ten.egdeeruza.saud":{"/":"1#1:m"},"ten.egdeeruza.nalw":{"/":"1#1:m"},"ten.egdeeruza.kv":{"/":"1#1:m"},"ten.egdeeruza.naq":{"/":"1#1:m"},"ten.egdeeruza.hf":{"/":"1#1:m"},"ten.egdeeruza.kw":{"/":"1#1:m"},"ten.egdeeruza.trwp":{"/":"1#1:m"},"ytuaeb.zs81m2nbuyq":{"/":"0#1:s"},"ten.egdeeruza.as-mb":{"/":"1#1:m"},"ten.egdeeruza.euom":{"/":"1#1:m"},"ten.egdeeruza.jf":{"/":"1#1:m"},"ten.eralgda.ndc.3ayinudlatigid":{"/":"1#1:m"},"ten.eralgda.enigne.3ayinudlatigid":{"/":"1#1:m"},"ten.eralgda":{"/":"0#1:s"},"ten.egdeeruza.kb":{"/":"1#1:m"},"ten.egdeeruza.ab-ya":{"/":"1#1:m"},"ten.egdeeruza.nx":{"/":"1#1:m"},"ten.egdeeruza.fb":{"/":"1#1:m"},"ten.egdeeruza.ahah":{"/":"1#1:m"},"ten.egdeeruza.cz":{"/":"1#1:m"},"ten.egdeeruza.yv":{"/":"1#1:m"},"ten.egdeeruza.iw-b":{"/":"1#1:m"},"ten.egdeeruza.sftr":{"/":"1#1:m"},"ten.egdeeruza.dv-bi":{"/":"1#1:m"},"ten.egdeeruza.dv-vx":{"/":"1#1:m"},"ten.egdeeruza.ovd":{"/":"1#1:m"},"ten.egdeeruza.zr-dv":{"/":"1#1:m"},"ten.egdeeruza.mis":{"/":"1#1:m"},"dlrow.yfikcart":{"/":"1#1:m"},"enilno.hg3pj54m17":{"/":"1#1:m"},"cc.retsamkcart":{"/":"1#1:m"},"ofni.buhgnikcart":{"/":"1#1:m"},"zyx.rekcartklxip":{"/":"1#1:m"},"ten.egdeeruza.zo-b":{"/":"1#1:m"},"ten.egdeeruza.nb":{"/":"1#1:m"},"ten.egdeeruza.tx":{"/":"1#1:m"},"ten.eralgda.enigne.elibomvtl":{"/":"1#1:m"},"ten.tnorfduolc.m88y3q5wczaod":{"/":"1#1:m"},"ten.egdeeruza.ol":{"/":"1#1:m"},"moc.deepsda.www":{"/webroot/freq/ufast/28712/":"1#1:m"},"ten.eralgda.enigne.ihcrimdnarb":{"/":"1#1:m"},"ten.egdeeruza.idr":{"/":"1#1:m"},"ten.eralgda.ndc.elibomvtl":{"/":"1#1:m"},"ten.eralgda.ndc.ihcrimdnarb":{"/":"1#1:m"},"ten.egdeeruza.el":{"/":"1#1:m"},"moc.063retsamdib.btr":{"/":"1#1:m"},"efil.wonemkcart":{"/":"1#1:m"},"ecaps.hfokz.kcart":{"/":"1#1:m"},"ecaps.kmooiv.kcart":{"/":"1#1:m"},"pohs.ertjm.kcart":{"/":"1#1:m"},"riah.iepx.kcart":{"/":"1#1:m"},"scip.ngrk.kcart":{"/":"1#1:m"},"niks.gbry.kcart":{"/":"1#1:m"},"semoh.tsafkt.kcart":{"/":"1#1:m"},"pohs.snbk.kcart":{"/":"1#1:m"},"enilno.eromsv.kcart":{"/":"1#1:m"},"scip.tactw.kcart":{"/":"1#1:m"},"semoh.kmtfos.kcart":{"/":"1#1:m"},"puekam.kmeerf.kcart":{"/":"1#1:m"},"semoh.hwiz.kcart":{"/":"1#1:m"},"niks.jdov.kcart":{"/":"1#1:m"},"enilno.niwemoh.kcart":{"/":"1#1:m"},"enilno.popwh.kcart":{"/":"1#1:m"},"semoh.nilecin.kcart":{"/":"1#1:m"},"niks.nufsa.kcart":{"/":"1#1:m"},"semoh.ylfjd.kcart":{"/":"1#1:m"},"staob.yadia.kcart":{"/":"1#1:m"},"scip.bohds.kcart":{"/":"1#1:m"},"efil.buhrotcetedtaerht":{"/":"1#1:m"},"enilno.loot-nacs-metsys":{"/":"1#1:m"},"efil.gnirotinom-metsys-emit-laer":{"/":"1#1:m"},"ecaps.kcul-htiw-desselb":{"/":"1#1:m"},"zyx.ytinutroppo-nedlog":{"/":"1#1:m"},"zzub.nacs-ytiruces-metsys":{"/":"1#1:m"},"moc.aidemakok.6krt":{"/":"1#1:m"},"ten.nacs-ytiruces-metsys":{"/":"1#1:m"},"ecaps.ykcul-ti-ekirts":{"/":"1#1:m"},"zyx.kcul-fo-ekorts":{"/":"1#1:m"},"zyx.revres-krt":{"/":"1#1:m"},"efil.hctapytiruces":{"/":"1#1:m"},"ecaps.loot-nacs-metsys":{"/":"1#1:m"},"ecaps.reknilkcart":{"/":"1#1:m"},"efil.stnemssessaytilibarenluv":{"/":"1#1:m"},"enilno.buhrotcetedtaerht":{"/":"1#1:m"},"efil.slootmetsystcetorp":{"/":"1#1:m"},"moc.ipasdaoffob.tsaesu-btr":{"/":"1#1:m"},"moc.sdnuosos":"1#11:m","moc.opotonim":"1#11:m","moc.yrogalab":"1#11:m","moc.auserp":"1#11:m","moc.apogac":"1#11:m","moc.nosydne":"1#11:m","moc.nosydoy":"1#11:m","pj.ucep":"1#11:m","moc.afosuy":"1#11:m","moc.pohsoyop":"1#11:m","moc.nibyd":"1#11:m","moc.erotstupmoc":"1#11:m","pj.iyom":"1#11:m","moc.muatub":"1#11:m","moc.ffogibyojne":"1#11:m","moc.pjksed":"1#11:m","moc.pjoywol":"1#11:m","moc.senilonpohs":"1#11:m","moc.moosoon":"1#11:m","moc.eninenon":"1#11:m","pj.wontiyub":"1#11:m","pj.oy-ow":"1#11:m","pj.oy-ol":"1#11:m","pj.aywol":"1#11:m","moc.oy-wol":"1#11:m","moc.ap-aj":"1#11:m","moc.oq-inu":"1#11:m","moc.serotsay-wol":"1#11:m","moc.afosaywol":"1#11:m","moc.pjaywal":"1#11:m","moc.senilnoafos":"1#11:m","moc.oytokom":"1#11:m","moc.c3xateerf":"1#11:m","zyx.nivedarg":"1#11:m","pot.secalpdoog.pohsno":"1#11:m","zyx.folam":"1#11:m","zyx.eracecalp.yub":"1#11:m","pj.erotsukoto":"1#11:m","pj.erotsimukat":"1#11:m","pj.erotsgnimag":"1#11:m","pj.erotstceles":"1#11:m","pj.serotse":"1#11:m","pj.oc.erotstrams":"1#11:m","pj.erots1":"1#11:m","pj.erotsulp":"1#11:m","moc.xooy":"1#11:m","moc.yfipohsym":"1#11:m","ofni.dnoy-eb":"1#11:m","moc.bal-iketib":"1#11:m","gro.pj-fpu":"1#11:m","moc.pungisxf.mex":"1#11:m","moc.onitsym":"1#11:m","moc.soqi.pj":"1#11:m","pj.laiciffo-ijukarakat":"1#11:m","moc.iekkin":"1#11:m","moc.rewolf-siria":"1#11:m","moc.bal-esirprus":"1#11:m","moc.elkraps-gnitanicsaf":"1#11:m","etis.namow-niksaga":"1#11:m","pj.oc.akayokus":"1#11:m","pj.rellife":"1#11:m","moc.01yrev":"1#11:m","etis.ngiapmacpo-feeb-nacirema-gnirps":"1#11:m","pj.dohtemrotcod":"1#11:m","etis.syllut":"1#11:m","moc.patyelims":"1#11:m","oykot.swen-revocsid.egellocubak-bs":"1#11:m","moc.metiikemikot":"1#11:m","moc.labolgcetib":"1#11:m","etis.ynapmocgnifoornapaj":"1#11:m","moc.hsaleyegnol-ytuaeb":"1#11:m","enilno.eihconihsaruk-otuni":"1#11:m","etis.eriternapaj":"1#11:m","zyx.ezeerb-wen":"1#11:m","pohs.siledarb":"1#11:m","zyx.deecorp-efil":"1#11:m","krow.emsoconihsataw.b":"1#11:m","etis.ukakihiekuoh":"1#11:m","zyx.nak-ohoj-emususo.b":"1#11:m","krow.edihcuo-ireagnolas.b":"1#11:m","oykot.aifamytuaeb.bs":"1#11:m","gro.lennahcdnert":"1#11:m","moc.egap-nwoym.ivannijib-bs":"1#11:m","moc.ababila":"1#11:m","pj.oc.mpbiekkin":"1#11:m","pj.oc.iekkin":"1#11:m","moc.6494iekkin":"1#11:m","pj.ca.iekkin-n":"1#11:m","moc.skobloot":"1#11:m","pj.oc.netukar":"1#11:m","pj.liam-anah":"1#11:m","moc.gnithgilnaol.ne":"1#11:m","moc.gnithgilnaol":"1#11:m","moc.nhojarev":"1#11:m","pj.pn-oykot":"1#11:m","pj.oc.iruimoy.bay":"1#11:m","pj.oc.iruimoy.ofni":"1#11:m","moc.llam-owti":"1#11:m","pj.oc.dirbativ":"1#11:m","moc.ofniqivocel":"1#11:m","pj.oc.iruimoy":"1#11:m","moc.enilno-nusavon":"1#11:m","etis.bew-sna52":"1#11:m","kcilc.elppalla":"1#11:m","zyx.iesiakihconema":"1#11:m","moc.rewolf-lufituaeb":"1#11:m","zyx.eripme-ytuaeb":"1#11:m","zyx.nihtiw-morf-ytuaeb":"1#11:m","zyx.citsiloh-ytuaeb":"1#11:m","zyx.enizagam-redisni-ytuaeb":"1#11:m","zyx.etis-ytuaeb":"1#11:m","zyx.mossolbytuaeb":"1#11:m","oykot.thgie-gib":"1#11:m","oykot.etalocohc-yrrambob":"1#11:m","zyx.hcnul-ot-amulub":"1#11:m","etis.fdsub":"1#11:m","zyx.napaj-sehctaw-dlosnu-yub":"1#11:m","ten.efil-zzub":"1#11:m","oykot.ytuaebrevolc":"1#11:m","enilno.allerbmuregnahtaoc":"1#11:m","etis.65eloc":"1#11:m","etis.ralupoptsom-gniknaremsoc":"1#11:m","zyx.ivan-ituc":"1#11:m","kcilc.anatnas-d":"1#11:m","pj.lliw-d":"1#11:m","etis.napaj-snoitpo-stnalpmi-latned":"1#11:m","zyx.2-asu-stnalpmi-latned":"1#11:m","moc.tuognah-edud":"1#11:m","zyx.45114-lavorppa-drac-tiderc-ysae":"1#11:m","zyx.420napaj-boj-sreenigne":"1#11:m","zyx.snoitulostopsedaf":"1#11:m","moc.yadlataf":"1#11:m","ten.pohserolf":"1#11:m","oykot.irarikylf":"1#11:m","oykot.emityna-eerf":"1#11:m","etis.napaj-snoitpo-secivres-larenuf":"1#11:m","oykot.oyamanut-omorogah":"1#11:m","etis.20swen-yppah":"1#11:m","etis.amat-amat-yppah":"1#11:m","ten.tsrif-semoc-htlaeh":"1#11:m","zyx.61114-stnemtaert-c-sititapeh":"1#11:m","zyx.420napaj-secivres-ytiruces-emoh":"1#11:m","moc.ococ-ukaknoh":"1#11:m","etis.saksph":"1#11:m","pj.ips-ni":"1#11:m","zyx.ediug-ytuaeb-renni":"1#11:m","etis.siefuhsi":"1#11:m","zyx.1-egarotsduolc-napaj":"1#11:m","etis.srac-desu-pj":"1#11:m","etis.elas-efil":"1#11:m","oykot.ytuaebdnaefil":"1#11:m","oykot.dnuorakool":"1#11:m","zyx.yretsam-puekam":"1#11:m","etis.uyohs-ustoknot-ahccem":"1#11:m","etis.secruoserhtlaehlatnem":"1#11:m","oykot.laroctnemom":"1#11:m","etis.agnomom":"1#11:m","krow.slrigetom":"1#11:m","zyx.yenruoj-ytuaeb-larutan":"1#11:m","etis.aarawasago":"1#11:m","etis.sessalcgnidocenilno":"1#11:m","etis.saediepicerdesabtnalp":"1#11:m","etis.napaj-srotagitsevni-etavirp":"1#11:m","etis.foijq":"1#11:m","zyx.5499344-aj-pj-retaeh-retaw-riaper":"1#11:m","zyx.3636419-aj-pj-retaeh-retaw-riaper":"1#11:m","zyx.4110764-aj-pj-retaeh-retaw-ecalper":"1#11:m","etis.pl-drawer":"1#11:m","etis.svdor":"1#11:m","zyx.ottorop-imis":"1#11:m","kcilc.imakoooris":"1#11:m","zyx.sterces-eracniks":"1#11:m","oykot.tercespans":"1#11:m","oykot.dleiftirips":"1#11:m","krow.zefil-ebusebus":"1#11:m","etis.teg-ydob-irikkus":"1#11:m","moc.efil-irikkus":"1#11:m","etis.irnegonoket":"1#11:m","zyx.ialiqgnit":"1#11:m","zyx.yppah-adarak-ikemikot":"1#11:m","ofni.sulp-dnert":"1#11:m","etis.pot-skcurt":"1#11:m","zyx.napaj-ahsiak-iatiru":"1#11:m","etis.ohcnop-agav":"1#11:m","oykot.ikemarikteloiv":"1#11:m","pj.xraenoiv":"1#11:m","zyx.83114-slairt-laicnilc-ssolthgiew":"1#11:m","etis.vdkow":"1#11:m","oykot.egnuol-x":"1#11:m","etis.kfkdbz":"1#11:m","pj.nootpot":"1#11:m","moc.aiplevon":"1#11:m","moc.nootpot":"1#11:m","ten.nootpot":"1#11:m","pj.annautut":"1#11:m","moc.scimoot":"1#11:m","ofni.zzubytuaeb":"1#11:m","pj.obal-yot.bs":"1#11:m","moc.llamecah":"1#11:m","moc.napajskcirtdnaspit":"1#11:m","pj.oc.sunevllew.pc":"1#11:m","moc.gnidartmx":"1#11:m","nolas.adahiber.bs":"1#11:m","gro.ogakiruy-uganust":"1#11:m","moc.esiwtsevni-f":"1#11:m","moc.001ytuaebytuaeb":"1#11:m","oykot.swen-revocsid":"1#11:m","etis.apcda":"1#11:m","etis.aabosaruba":"1#11:m","etis.fnjkfa":"1#11:m","moc.100sogla":"1#11:m","ofni.tfarcdna":"1#11:m","etis.ttivauqa":"1#11:m","ten.ivanofni-plasa":"1#11:m","moc.ekahgkfsa":"1#11:m","etis.nnodnnadukab":"1#11:m","moc.relevart-lufituaeb":"1#11:m","oykot.gnortseb":"1#11:m","oykot.maerdxob":"1#11:m","oykot.dnertxob":"1#11:m","zyx.niksrethgirb":"1#11:m","oykot.pansthgirb":"1#11:m","zyx.wt-29-eromonekorb":"1#11:m","etis.emsocyub":"1#11:m","ten.moozzub":"1#11:m","etis.icides-egabbac":"1#11:m","oykot.otamlac":"1#11:m","moc.ndnsecnahc":"1#11:m","oykot.krapettolrahc":"1#11:m","zyx.cnisroloc":"1#11:m","etis.oirbnoc":"1#11:m","zyx.wen-reerac-noitcurtsnoc":"1#11:m","zyx.wen-sreerac-noitcurtsnoc":"1#11:m","oykot.teg-nopuoc":"1#11:m","oykot.nop-nopuoc":"1#11:m","oykot.ps-nopuoc":"1#11:m","etis.321ikusiadacerc":"1#11:m","etis.dniafpuc":"1#11:m","oykot.dniafpuc":"1#11:m","etis.ewtgnoloaixc":"1#11:m","enilno.oifiad":"1#11:m","moc.jkzncgmdd":"1#11:m","etis.gruhd":"1#11:m","zyx.wpqkd":"1#11:m","moc.tsi-og-e":"1#11:m","etis.346098641-pot-sesuoh-oce":"1#11:m","zyx.iuhje":"1#11:m","ten.der-lanoitome":"1#11:m","zyx.twttwe":"1#11:m","ten.thgirb-tnellecxe":"1#11:m","zyx.jahsgf":"1#11:m","etis.syadenif":"1#11:m","zyx.erotssdniftif":"1#11:m","oykot.rolaof":"1#11:m","moc.hcaep-nezorf":"1#11:m","zyx.6062149-aj-pj-larenuf":"1#11:m","etis.tcejorp-erutuf":"1#11:m","zyx.njeyf":"1#11:m","etis.nniig":"1#11:m","etis.urupnaytayuog":"1#11:m","etis.nnodarakiah":"1#11:m","zyx.22-napaj-tnalpsnart-riah":"1#11:m","moc.101balyppah":"1#11:m","moc.201balyppah":"1#11:m","oykot.anaek-ir-im-akurah":"1#11:m","oykot.efil-htlaeh":"1#11:m","zyx.jfdkgjh":"1#11:m","etis.buhuotuornoh":"1#11:m","moc.ydobosohosoh":"1#11:m","zyx.eudjsh":"1#11:m","zyx.llages-hguh":"1#11:m","zyx.qeyhvh":"1#11:m","moc.wurefi":"1#11:m","etis.uuynuokugusami":"1#11:m","etis.niks-tneconni":"1#11:m","moc.topsstsevni":"1#11:m","zyx.yreva-gnivri":"1#11:m","etis.amijikagisi":"1#11:m","etis.isabati":"1#11:m","zyx.pj-iromustim-ukaykiab-ahsodij":"1#11:m","zyx.selmj":"1#11:m","zyx.qycnj":"1#11:m","etis.dofbdsj":"1#11:m","etis.uoyjuyj":"1#11:m","oykot.yrtnuocihcumik":"1#11:m","zyx.kiwqpk":"1#11:m","etis.ugguyruk":"1#11:m","zyx.tekramefilnael":"1#11:m","etis.yxunil":"1#11:m","ten.efil-evil":"1#11:m","zyx.jlkml":"1#11:m","enilno.revilevol":"1#11:m","etis.ootaihccam":"1#11:m","zyx.mota-cigam":"1#11:m","etis.sorc-idem":"1#11:m","zyx.2033202-pj-syenrotta-tnedicca-lacidem":"1#11:m","etis.aatim":"1#11:m","zyx.janzm":"1#11:m","zyx.dbnibn":"1#11:m","etis.iropinisin":"1#11:m","etis.iooisin":"1#11:m","zyx.hducjn":"1#11:m","oykot.arikariksuon":"1#11:m","etis.avitaircetnemavon":"1#11:m","moc.jljdo":"1#11:m","moc.urupurup-adaho":"1#11:m","kcilc.efefbhuho":"1#11:m","zyx.lalaip":"1#11:m","zyx.mhqkp":"1#11:m","zyx.wen-semoh-detacirbaferp":"1#11:m","pj.hsurerp":"1#11:m","hcet.ti-ecneserp":"1#11:m","ofni.5875175-aj-pj-rotagitsevni-etavirp":"1#11:m","zyx.ytuaeb-nirup":"1#11:m","zyx.vucoq":"1#11:m","etis.oiv-r":"1#11:m","zyx.xiferacnikstnaidar":"1#11:m","nolas.adahiber":"1#11:m","oykot.teloivedir":"1#11:m","etis.2amor":"1#11:m","etis.3amor":"1#11:m","moc.tpeas":"1#11:m","ten.sigea-ekusato-umias":"1#11:m","zyx.dilosjakas":"1#11:m","zyx.rtegds":"1#11:m","zyx.1-snoitacilppa-ytiruces":"1#11:m","zyx.8010338-aj-pj-draug-ytiruces":"1#11:m","etis.obukoonis":"1#11:m","zyx.pohsyawahsimelbniks":"1#11:m","zyx.ytiralcniks":"1#11:m","zyx.buhnoitcefrepniks":"1#11:m","etis.nam-yppans":"1#11:m","etis.mvdos":"1#11:m","etis.ltni-slenap-ralos":"1#11:m","moc.trams-laiceps":"1#11:m","etis.awagat":"1#11:m","kcilc.usayimotorihekat":"1#11:m","pj.air-anulet":"1#11:m","etis.aaliuqet":"1#11:m","zyx.qhqnt":"1#11:m","etis.efil-dnert":"1#11:m","zyx.imihsonnikseurt":"1#11:m","kcilc.erom-yrt":"1#11:m","etis.dnihsugwt":"1#11:m","etis.iisumnnawayt":"1#11:m","etis.nnnnodu":"1#11:m","zyx.pzmku":"1#11:m","pj.wonaru":"1#11:m","enilno.uaetalpylilnihcru":"1#11:m","zyx.rrdbv":"1#11:m","moc.esir-sunev":"1#11:m","zyx.stnemtaertnikstnarbiv":"1#11:m","zyx.irjv":"1#11:m","zyx.2884851-pj-sboj-tnemeganam-etsaw":"1#11:m","zyx.0489328-aj-pj-reliob-retaw":"1#11:m","etis.ykssihw":"1#11:m","pot.ocohc-etihw":"1#11:m","etis.eeniw":"1#11:m","zyx.tteetw":"1#11:m","zyx.b47ob6848bboo3gkcn--nx":"1#11:m","pj.c5n0a031qv8cuc4m9-atoz--nx":"1#11:m","enilno.llonkfeerenohpolyx":"1#11:m","enilno.elawsfeerenohpolyx":"1#11:m","zyx.ylaoy":"1#11:m","zyx.buhwolglufhtuoy":"1#11:m","etis.daeh-yppaz":"1#11:m","pj.ianaruesnez":"1#11:m","etis.iaznez":"1#11:m","etis.oobfnf":"1#11:m","moc.ilc-ubihs":"1#11:m","moc.ogiakonannim":"1#11:m","oi.tebstrops":"1#11:m","oykot.swen-revocsid.ierik-etihw-bs":"1#11:m","moc.cifikniht":"1#11:m","moc.cifikniht.1b5c-etis-s-neelloc":"1#11:m"},"bidders":{},"navigations":{"cc.retsamkcart":"1#1:m","ofni.buhgnikcart":"1#1:m","zyx.rekcartklxip":"1#1:m","scip.bohds.kcart":"1#1:m","staob.yadia.kcart":"1#1:m","semoh.ylfjd.kcart":"1#1:m","niks.nufsa.kcart":"1#1:m","semoh.nilecin.kcart":"1#1:m","enilno.popwh.kcart":"1#1:m","enilno.niwemoh.kcart":"1#1:m","niks.jdov.kcart":"1#1:m","semoh.hwiz.kcart":"1#1:m","puekam.kmeerf.kcart":"1#1:m","semoh.kmtfos.kcart":"1#1:m","scip.tactw.kcart":"1#1:m","enilno.eromsv.kcart":"1#1:m","pohs.snbk.kcart":"1#1:m","semoh.tsafkt.kcart":"1#1:m","niks.gbry.kcart":"1#1:m","scip.ngrk.kcart":"1#1:m","riah.iepx.kcart":"1#1:m","enilno.hg3pj54m17":"1#1:m","moc.agyynqzkbf":"1#1:m","enilno.elosekims":"1#1:m","evil.di-enilnouhbmahs":"1#1:m","dlrow.yfikcart":"1#1:m","pohs.ertjm.kcart":"1#1:m","moc.gnidnalrefas":"1#1:m","efil.wonemkcart":"1#1:m","ecaps.kmooiv.kcart":"1#1:m","ecaps.hfokz.kcart":"1#1:m","efil.slootmetsystcetorp":"1#1:m","enilno.buhrotcetedtaerht":"1#1:m","efil.stnemssessaytilibarenluv":"1#1:m","ecaps.reknilkcart":"1#1:m","ecaps.loot-nacs-metsys":"1#1:m","efil.hctapytiruces":"1#1:m","zyx.revres-krt":"1#1:m","zyx.kcul-fo-ekorts":"1#1:m","ecaps.ykcul-ti-ekirts":"1#1:m","ten.nacs-ytiruces-metsys":"1#1:m","moc.aidemakok.6krt":"1#1:m","zzub.nacs-ytiruces-metsys":"1#1:m","zyx.ytinutroppo-nedlog":"1#1:m","ecaps.kcul-htiw-desselb":"1#1:m","efil.gnirotinom-metsys-emit-laer":"1#1:m","enilno.loot-nacs-metsys":"1#1:m","efil.buhrotcetedtaerht":"1#1:m"},"clkDomains":{"ten.ppa2g.og":"1#1:44439","moc.sdnifsuolubafsnna":"1#1:44439","moc.reylfsppa.ppa":"1#1:44439","moc.4202syadot":"1#1:44439","erots.weivkcalb.ym":"1#1:44439","moc.emvresda.lmx":"1#1:44439","lp.42eicrapswewordz":"1#1:44439","erots.hcetsc":"1#1:44439"},"arWL":["adclick.g.doubleclick.net","googleads.g.doubleclick.net","www.googleadservices.com","tags-prod.vrvm.com","tags.vrvm.com","vervewireless.com","verve.com","dsp-trk.eskimi.com","paid.outbrain.com","uncn.jp","rd.ane.yahoo.co.jp","feedback.promotionalads.yahoo.co.jp","trc.taboola.com","cdn-javascript.net","adsd.amanad.adtdp.com","www.alibaba.com","cat.fr.eu.criteo.com","cat.nl.eu.criteo.com","www.paypal.com","www.aboutyou.de","www.bonprix.de","www.mediaworld.it","offer.hearingaidsolvers.com","www.alltechradar.com","tpc.googlesyndication.com","logly.co.jp","jprtb.c.appier.net","sg.c.appier.net","tw.c.appier.net","appier.net"],"bdTs":1706722240,"rates":{"default":0.05,"hfilter":0.00005,"dwrp":0.0004,"fallback_tag":0.0004,"intop":0.0004,"observer":0.0004,"refresh_tag":0.0004,"noad":0.0004,"eventsTimeline":0.000004,"net_err":0.0004,"pimp":0.0004,"slow_cl":0.0004,"bidwon":0.0004,"wraperr_so_hook":0.0004,"wraperr_sf":0.0004,"wraperr_so":0.0004,"noresinfo":0.0004,"headertag":0.0004,"wraperr":0.0004,"error":0.01,"sdk_crash":0.5,"integration_test":0.0004,"oldcdn":0.0004,"diffcdn":0.0004,"sdk_exception":0.5,"debug":0.0004,"unsupported_sdk":0.01,"app_crash":0.5,"webview_missing":0.01,"sdk_anr":0.5,"app_anr":0.5},"refreshLimit":1};},{}],6:[function(e,t,n){var r={pbjs:"pbjs",pbjsModule:"pbjs-module",dfp:"dfp",gpt:"gpt",papi:"papi",na:"N/A"};t.exports=r},{}],7:[function(e,t,n){var d,u=e("./session.js"),p=u.tag,r=document.write,o=document.body.appendChild,i=e("./config.js"),a=i.altTags,f=(e("./utils.js"),e("./jsUtils.js")),s=e("./ajax.js"),c=e("./constants"),e=e("./jsUtils.js").once;function l(e,t){"function"==typeof r.call?r.call(e,t):e.write(t)}function m(t){var e=document.getElementsByTagName("head")[0],n=u.meta.w+"x"+u.meta.h,n=u.scriptHost+u.key+"/"+(i.defaultFallback||n)+".json",r=(window.jspfacb=function(e){s.sendEvent({type:"fallback_tag",w:u.meta.w,h:u.meta.h,meta:JSON.stringify(u.meta)}),t.open(),window.metadata=u.meta,l(t,unescape(e)),t.close()},document.createElement("script"));r.src=n,r.onerror=function(){var e;if(a&&0<a.length)return s.sendEvent({type:"alt_tags",w:u.meta.w,h:u.meta.h}),e=a[Math.floor(Math.random()*a.length)],t.open(),l(t,e)},e&&o.call(e,r)}t.exports={writeCreative:function(t,n){var r,o,e,i,a,s;function c(e){!0!==e&&t.open();try{r&&r()}catch(e){}n.trust?l(t,p):t.write(p);try{window.frameElement&&-1<window.frameElement.id.indexOf("google_ads_")&&"100%"===window.frameElement.style.minWidth&&"0"===window.frameElement.height&&(window.frameElement.height=t.body.offsetHeight)}catch(e){}try{o&&o()}catch(e){}t.close()}u.fsRan||(d=t,r=n&&n.beforeWrite,o=n&&n.afterWrite,u.async?(e=c,a=!!d.readyState,s="complete"===d.readyState,a&&s?e():a&&!s?(i=window.onload,window.onload=function(){f.once(e)(),"function"==typeof(window.onload=i)&&i.apply(this,arguments)}):a||e()):c(!0))},writeAltAd:e(function(t){var e;t.close(),u.meta.imp=u.imp,u.targetWindow.postMessage({key:u.key,el:u.meta.adElId,blocked:!0,limit:i.refreshLimit,rate:i.rates.refresh_tag,meta:u.meta,hb:u.hbTag},"*"),u.isPAPI||(t.body&&(t.body.innerHTML=""),e=u.wver.substring(4)<"75",u.wtype===c.gpt&&!e?window.addEventListener("message",function(e){e.data.key===u.key&&"fallbackTag"===e.data.evType&&(u.meta.blocksCount=e.data.blocksCount,m(t))}):m(t))})}},{"./ajax.js":3,"./config.js":5,"./constants":6,"./jsUtils.js":13,"./session.js":18,"./utils.js":21}],8:[function(e,t,n){var o=e("./session.js"),r=e("./urlParser.js"),c=e("./utils.js");function i(t,e){if(e(t),t&&1===t.nodeType&&"IFRAME"===t.tagName)try{t=t.contentWindow.document.documentElement}catch(e){t=t.firstChild}else t=t.firstChild;for(;t;)i(t,e),t=t.nextSibling||t.frameElement&&t.frameElement.nextSibling}function a(n){window.addEventListener("load",function e(t){window.removeEventListener("load",e),n(t)})}function s(e,t){var n;try{t(e)}catch(e){}if(e.frames&&e.frames.length)for(n=0;n<e.frames.length;n++)s(e[n],t)}function d(e){return e&&function(e){try{return-1===r.parse(e).hostname.indexOf(".geoedge.be")}catch(e){return!0}}(e)}function u(e){var n=[];return s(e,function(e){var t=c.map(e.performance.getEntriesByType("resource"),function(e){return e.name}),e=c.map(e.document.getElementsByTagName("a"),function(e){return e.href}),t=t.concat(e);n.push(t)}),c.filter(c.flatten(n),d)}function p(){return document.documentElement||document.getElementsByTagName("html")[0]||document.body}function f(e){i(p(),e)}function l(e){return 1===e.nodeType&&e.tagName&&"IFRAME"===e.tagName.toUpperCase()}function m(e){try{return e.document}catch(e){}return!1}function h(e){return l(e)&&m(e.contentWindow)}function g(e){var t=e.outerHTML;return e.srcdoc||!h(e)?t:(e=e.contentWindow.document.getElementsByTagName("html")[0].innerHTML,t.replace(/<iframe/i,'<iframe srcdoc="'+e.replace(/"/g,"&quot;")+'"'))}t.exports={getElements:function(e){var t;return e.getElementsByTagName?(t=[].slice.call(e.getElementsByTagName("*")),[e].concat(t)):[e]},walkTheDOM:i,getTopHostname:function(){var e;try{return top.location.hostname}catch(e){}return location.ancestorOrigins&&0<location.ancestorOrigins.length?(e=location.ancestorOrigins[0]).substr(e.indexOf("://")+3):window.sf_&&window.sf_.cfg?r.parse(sf_.cfg.hostPeerName).hostname:o.meta.topUrl?r.parse(o.meta.topUrl).hostname:void 0},createEvent:function(e){try{return new Event(e)}catch(t){}try{var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}catch(t){}},executeOrWait:function(e){"loading"===document.readyState?addEventListener("DOMContentLoaded",e):e()},addOnLoad:a,addOnLoadAsync:function(e){var t=setTimeout(function(){a(function(){clearTimeout(t),e()})},0)},walkFrames:s,getAllUrls:u,getAllUrlsFromAllWindows:function(){return c.flatten(c.map(o.attachedWins,u).concat(o.urls))},isIframe:l,isSameOriginWin:m,getAdHtml:function(){var t,n,r,e=p();return e?o.isPAPI?"":(t=e.outerHTML,f(function(e){if(1===e.nodeType&&h(e))try{n=e.outerHTML,r=g(e),t=t.replace(n,r)}catch(e){}}),c.trim(t)):'<div id="not-found"></>'},getAdIframe:function(i,a){var s;return f(function(e){var t,n,r,o;n=i,r=a,l(t=e)&&window.getComputedStyle&&(o=(t=window.getComputedStyle(t)).width.toUpperCase().replace("PX",""),t=t.height.toUpperCase().replace("PX",""),n===o)&&r===t&&(s=e)}),s?c.trim(g(s)):null},getLargestIframe:function(){var t=[];return f(function(e){l(e)&&t.push(e)}),t.length?(t.sort(function(e,t){e=e.getBoundingClientRect(),t=t.getBoundingClientRect();return e.width*e.height-t.width*t.height}),c.trim(g(t[t.length-1]))):null}}},{"./session.js":18,"./urlParser.js":20,"./utils.js":21}],9:[function(e,t,n){var r=e("./session.js"),o=e("./config.js");t.exports={load:function(e){window.grumi={key:r.key,advs:o.advs,cfg:{fromGrumi:!0},overrides:{adUnitPath:r.meta.adup,clickUrl:r.meta.dest,lineItemId:r.meta.li,advertiser:r.meta.adv,campaignId:r.meta.ord,creativeId:r.meta.cr,slotElementId:r.meta.adElId,site:r.site,topUrl:r.meta.topUrl,pageViewId:r.pimp}};var t=o.ipUrl,n=document.createElement("script");n.src=t,n.async=e&&!0,(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(n,t)},shouldLoad:function(){var e="true"!==r.isAmp;return void 0!==window.googletag&&e}}},{"./config.js":5,"./session.js":18}],10:[function(e,t,n){t.exports={get:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=0|(t=window.crypto&&window.crypto.getRandomValues?(t=new Uint8Array(1),window.crypto.getRandomValues(t),t[0]%16):16*Math.random());return("x"==e?t:3&t|8).toString(16)})}}},{}],11:[function(e,t,n){var r=e("./utils.js"),e=e("./constants.js"),o={".headertag":"indexExchange",listenAdFromPrebid:e.pbjs,"pbjs.renderAd(":e.pbjs,"ucTag.renderAd(":e.pbjs,postbid_iframe:e.pbjs,"PWT.displayCreative":"openwrap",amzn_win:"amazon","oxhbjs.cmds":"openx","AdBridg.render":"adBridge","jitaJS.":"rtk",hbTargetingParams:"media.net",".rubicontag.renderCreative(":"rubicon"};t.exports={identifyVendor:function(t){var e=r.fluent(o).keys().find(function(e){return 1<t.indexOf(e)}).val();return o[e]}}},{"./constants.js":6,"./utils.js":21}],12:[function(e,t,n){t.exports={parse:function(t){var n;try{return(new DOMParser).parseFromString(t,"text/html")}catch(e){return n=document.implementation.createHTMLDocument(""),-1<t.toLowerCase().indexOf("<!doctype")?n.documentElement.innerHTML=t:n.body.innerHTML=t,n}}}},{}],13:[function(e,t,n){function r(e){try{return"function"==typeof Object.getPrototypeOf?Object.getPrototypeOf(e):"object"==typeof e.__proto__?e.__proto__:e.constructor&&"object"==typeof e.constructor.prototype?e.constructor.prototype:null}catch(e){return null}}t.exports={getPrototypeOf:r,getOwner:function(e,t){if(e&&t in e){for(var n=e;n&&!{}.hasOwnProperty.call(n,t);)n=r(n);return n}},findGetter:function(e,t){if(Object.getOwnPropertyDescriptor)try{return Object.getOwnPropertyDescriptor(e,t).get}catch(e){}try{if(e.__lookupGetter__)return e.__lookupGetter__(t)}catch(e){}},defineGetter:function(e,t,n){if(Object.defineProperty)try{return Object.defineProperty(e,t,{get:n})}catch(e){}if(e.__defineGetter__)try{return e.__defineGetter__(t,n)}catch(e){}},findSetter:function(e,t){if(Object.getOwnPropertyDescriptor)try{return Object.getOwnPropertyDescriptor(e,t).set}catch(e){}try{if(e.__lookupSetter__)return e.__lookupSetter__(t)}catch(e){}},defineSetter:function(e,t,n){if(Object.defineProperty)try{return Object.defineProperty(e,t,{set:n})}catch(e){}if(e.__defineSetter__)try{return e.__defineGetter__(t,n)}catch(e){}},once:function(e,t){var n=!1;return function(){n||e.apply(t||this,arguments),n=!0}}}},{}],14:[function(e,t,n){t.exports={excepting:function(e){return function(t){return function(){try{if(!e.apply(this,arguments))return t.apply(this,arguments)}catch(e){return t.apply(this,arguments)}}}},exceptingCtor:function(e){return function(t){return function(){try{if(!e.apply(this,arguments))return new t(arguments[0],arguments[2],arguments[3])}catch(e){return new t(arguments[0],arguments[2],arguments[3])}}}},aroundGet:function(e){return function(t){return function(){try{return e.call(this,t)}catch(e){return t.call(this)}}}},after:function(n){return function(t){return function(){var e=t.apply(this,arguments);try{n.apply(this,arguments)}catch(e){}return e}}},before:function(t){return function(e){return function(){return t.apply(this,arguments),e.apply(this,arguments)}}}}},{}],15:[function(e,t,n){e("./ajax.js"),e("./session.js"),e("./utils.js");var r=window.ReportingObserver,o={types:["intervention"],buffered:!0};t.exports={reporting:{shouldLoad:function(){return"function"==typeof r},load:function(e){new r(e,o).observe(),this.loaded=!0},loaded:!1}}},{"./ajax.js":3,"./session.js":18,"./utils.js":21}],16:[function(e,t,n){var o;e("./session.js");t.exports={getPrebidData:function(e,t){var n,r;o&&e(o),n=e,r=t,window.addEventListener("message",function(e){e=e.data;e.pbjsResponse&&e.key===r.key&&(o={winningBid:e.auction.winningBid,preWinningBid:e.auction.preWinningBid},n(o))}),r.targetWindow.postMessage({pbjsRequset:!0,key:r.key,adElId:r.meta.adElId},"*")}}},{"./session.js":18}],17:[function(e,t,n){var r,o,i,a,s,c,d=e("./session.js"),u=e("./config.js"),p=e("./ajax.js"),f=e("./domUtils.js"),l=(e("./utils.js"),e("./creative.js")),m=e("./tagSelector.js").getTag,h="//rumcdn.geoedge.be/rbu/popup.html",g="//gw.geoedge.be/api/report",y=u.rbuConfig,v=Math.random(),b=y&&y.widget.widgetIcon;function w(){return 1===u.onRbu}function j(e){var t=!(e=e||{}).silent&&w(),n=!!e.silent,r=f.getAllUrls(window);if(r&&r.length)return{tag:m(),is:!1,rbu:!0,b:t,rbuc:e.rbuc,silent:n,meta:JSON&&JSON.stringify(d.meta)}}function x(){i.addEventListener("mouseover",function e(){i.appendChild(o),i.removeEventListener("mouseover",e)})}function E(){x(),i.addEventListener("mouseleave",function(){T(),x()}),i.addEventListener("click",function(){T(),document.body.removeChild(i),d.targetWindow.postMessage({key:d.key,rbuRequest:!0,rbuConfig:y,rbuReport:function(e){if(e=j(e))return p.getReport(e)}(),showPopup:!0},"*")})}function k(){var e;(r=document.createElement("button")).style.position="absolute",r.style.bottom="0",r.style.left="0",r.style.zIndex="99999",r.style.width="15px",r.style.height="15px",r.style.background="transparent",r.style.backgroundSize="cover",r.style.border="0px",r.style.paddingTop="1px",r.style.paddingBottom="1px",r.style.paddingLeft="6px",r.style.paddingRight="6px",r.style.backgroundImage="url("+b+")",(o=document.createElement("button")).style.position="fixed",o.style.bottom="0",o.style.left="16px",o.style.zIndex="99999",o.style.width="auto",o.style.height="15px",o.style.fontSize="12px",o.style.border="0",o.style.backgroundColor=y.widget.backgroundColor,o.style.color=y.widget.fontColor,o.textContent=y.widget.hoverText,a=document.createElement("div"),e=document.createElement("span"),a.appendChild(e),a.style.position="fixed",a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.style.textAlign="center",a.style.backgroundColor=y.thankYou.backgroundColor,e.style.position="relative",e.style.top="50%",e.style.color=y.thankYou.fontColor,e.textContent=y.thankYou.message,(i=document.createElement("div")).style.position="absolute",i.style.bottom="0",i.style.left="0",i.style.width="100px",i.style.height="15px",E()}function O(){i.appendChild(r),document.body.appendChild(i)}function T(){i.removeChild(o)}function A(){window.addEventListener("message",function(e){e=e.data;e.key===d.key&&e.rbuResponse&&(e.closed?(O(),x()):(document.body.appendChild(a),w()&&setTimeout(function(){l.writeAltAd(document)},2e3)))})}function L(e){var e=e.split("\x3c!----\x3e"),t=e[0],e=e[1];t=t,e=e,d.targetWindow.document.body.insertAdjacentHTML("beforeend",t),(t=d.targetWindow.document.createElement("script")).textContent=e,d.targetWindow.document.body.appendChild(t)}function C(t){if(c)return t();var n;s||(s=!0,n=function(e){L(e),c=!0,t()},d.targetWindow.fetch(h).then(function(e){return e.text()}).then(function(e){n(e)}))}function S(e){function t(e){var t=!(o.rbuc=e);e&&fetch(g,{method:"POST",mode:"no-cors",body:new URLSearchParams(o)}),n.postMessage({key:r,rbuResponse:!0,closed:t},"*")}var n,r,o,i=e.data.rbuConfig,a=e.data.showPopup;n=e.source,r=e.data.key,o=e.data.rbuReport;C(function(){a&&d.targetWindow.rbuPopUp(i,t,t)})}!d.frameApi||"gpt"===d.wtype&&"1.1.95"!==d.wver||d.targetWindow.addEventListener("message",function(e){var t;(t=(t=e).data)&&t.key===d.key&&t.rbuRequest&&S(e)}),t.exports={shouldLoad:function(){return v<=u.rbu},load:function(){d.targetWindow.postMessage({key:d.key,rbuRequest:!0,rbuConfig:y},"*"),k(),O(),A()}}},{"./ajax.js":3,"./config.js":5,"./creative.js":7,"./domUtils.js":8,"./session.js":18,"./tagSelector.js":19,"./utils.js":21}],18:[function(e,t,n){var r=e("./config.js"),o=e("./guid.js"),i=e("./headerBidding.js"),a=e("./utils.js"),s=e("./constants.js"),c=e("./prebid.js"),d=window.grumi,e=(delete window.grumi,d.imp=o.get(),document.currentScript||a.find(document.getElementsByTagName("script"),function(e){return e.src&&-1<e.src.indexOf(d.key+"/grumi.js")})),o="async"in document.createElement("script");if(d.async=o&&e&&e.async,d.scriptHost||(d.scriptHost="//rumcdn.geoedge.be/"),window.performance&&window.performance.getEntriesByName&&document.currentScript&&(o=performance.getEntriesByName(document.currentScript.src))&&1===o.length&&(d.isc=0===o[0].transferSize&&0<o[0].decodedBodySize,d.client_size=o[0].encodedBodySize),d.tag=d.tag||"",d.pbGlobal=d.pbGlobal||s.pbjs,d.hbVendor=i.identifyVendor(d.tag),d.hbCpm=a.isDefinedMacro(d.hbPb)?d.hbPb:void 0,d.pbBidder=a.isDefinedMacro(d.pbBidder)?d.pbBidder:void 0,d.hbCurrency=a.isDefinedMacro(d.hbCurrency)?d.hbCurrency:void 0,d.hbSize=a.isDefinedMacro(d.hbSize)?d.hbSize:void 0,d.pbAdId=a.isDefinedMacro(d.pbAdId)?d.pbAdId:void 0,d.pbjsTag=d.hbVendor===s.pbjs||"openwrap"===d.hbVendor,d.a9Tag=-1<d.tag.indexOf("apstag.renderImp("),d.aDomains=a.isDefinedMacro(d.hbAdomains)?"string"==typeof(e=d.hbAdomains)?e.split(","):e:void 0,d.isPrebidIntegration=d.wtype===s.pbjs||d.wtype===s.pbjsModule,d.isPAPI=d.wtype===s.papi,d.meta.topUrl=a.isDefinedMacro(d.meta.topUrl)?d.meta.topUrl:void 0,d.meta.adv=d.meta.adv||s.na,d.meta.cr=d.meta.cr||s.na,d.meta.li=d.meta.li||s.na,d.meta.ord=d.meta.ord||s.na,"network"!==r.accountType&&d.meta&&(delete d.meta.di,delete d.meta.dn,delete d.meta.pid,delete d.meta.dcid,delete d.meta.pn),"dfp"===d.sp&&d.meta.qid&&"%"===d.meta.qid.charAt(0)){try{var u=frameElement.parentElement.parentElement.getAttribute("data-google-query-id")}catch(e){}d.meta.qid=u||d.meta.qid}d.attachedWins=[window],d.urls=[],d.targetWindow=window.parent,d.whenReady=function(n){return"gpt"!==d.wtype?(d.hbTag=d.isPrebidIntegration,n(d)):d.ready?n(d):void c.getPrebidData(function(e){var t=e.winningBid||e.preWinningBid;if(t)try{d.hbTag=!!e.winningBid,d.hbAd=t.ad,d.pbAdId=t.adId,d.pbBidder=t.bidder||t.bidderCode,d.hbCid=t.creativeId,d.aDomains=t.meta&&t.meta.advertiserDomains,d.hbCpm=t.cpm,d.hbCurrency=t.currency,d.meta.w=t.width,d.meta.h=t.height}catch(e){}d.ready=!0,n(d)},d)},t.exports=d},{"./config.js":5,"./constants.js":6,"./guid.js":10,"./headerBidding.js":11,"./prebid.js":16,"./utils.js":21}],19:[function(e,t,n){var r=e("./session.js"),o=e("./domUtils.js");t.exports={getTag:function(){return r.hbTag&&r.hbAd?r.hbAd:r.a9Found&&(o.getAdIframe(r.meta.w,r.meta.h)||o.getLargestIframe())||r.tag}}},{"./domUtils.js":8,"./session.js":18}],20:[function(e,t,n){t.exports={parse:function(e){try{var t,n;return function(){try{return window.URL&&"example.com"===new URL("http://example.com").hostname}catch(e){}}()?e instanceof URL?e:-1<e.indexOf("://")?new URL(e):(t=window.location.origin,new URL(e,t)):((n=document.createElement("a")).href=e,{host:n.host,hostname:n.hostname,pathname:n.pathname,search:n.search,hash:n.hash})}catch(e){}}}},{}],21:[function(e,t,n){function r(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t);return n}function o(e,t){for(var n=0;n<e.length;n++)t(e[n],n,e)}function i(e,t,n){var r;if(null==e)throw new TypeError("provided null udefined");var o=Object(e),i=o.length>>>0;if(0!=i){e=0|n;if(!(i<=e))for(r=Math.max(0<=e?e:i-Math.abs(e),0);r<i;){if(r in o&&o[r]===t)return r;r++}}return-1}var a={keys:function(e){var t,n=[];for(t in e)n.push(t);return n},ownKeys:r,forEach:o,map:function(e,t){for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r,e));return n},filter:function(e,t){for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n},every:function(e,t){for(var n=0;n<e.length;n++)if(!t(e[n],n,e))return!1;return!0},indexOf:i,unique:function(e){for(var t=[],n=0;n<e.length;n++)-1===i(t,e[n])&&t.push(e[n]);return t},some:function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return!0;return!1},find:function(e,t){for(var n=0;n<e.length;n++)if(t(e[n],n,e))return e[n];return!1},findLast:function(e,t){for(var n=e.length-1;0<=n;n--)if(t(e[n],n,e))return e[n];return!1},trim:function(e){return e.replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g,"").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},flatten:function(e){return[].concat.apply([],e)},get:function e(t,n,r){try{return t&&n?(t=t[(n=Array.isArray(n)?n:n.split("."))[0]])&&1<n.length?e(t,n.slice(1),r):void 0===t||null==t?r:t:r}catch(e){return r}},isDefinedMacro:function(e){return!("string"==typeof e)||-1===e.indexOf("%%")&&-1===e.indexOf("%_")},isTrueMacro:function(e){return!!e&&("true"===e.toLowerCase()||"1"===e)},removeCaspr:function(e){if(-1<(n=e.indexOf("casprInvocation"))){var t=e.lastIndexOf("<script>",n),n=e.indexOf("<\/script>",n);if(-1<(t<n))return e.slice(0,t)+e.slice(n+9,e.length)}return e}};function s(e){this._val=e}o(r(a),function(e){var t;s.prototype[e]=(t=a[e],function(){var e=[this._val].concat([].slice.call(arguments));return this._val=t.apply(this,e),this})}),s.prototype.val=function(){return this._val},a.fluent=function(e){return this instanceof s?this:new s(e)},t.exports=a},{}],22:[function(e,M,N){var n=+new Date,t=e("./app/methodCombinators.js"),r=e("./app/blackList.js"),f=e("./app/jsUtils.js"),o=e("./app/htmlParser.js"),l=e("./app/domUtils.js"),m=e("./app/utils.js"),u=e("./app/ajax.js"),p=e("./app/session.js"),h=e("./app/config.js"),B=r.matchAgainst(h.navigations),a=e("./app/creative.js"),g=e("./app/urlParser.js"),i=e("./app/gptAdapterLoader.js"),s=e("./app/observers"),c=e("./app/a9.js"),d=e("./app/reportByUser.js"),y=e("./app/afcBuster.js"),e=e("./app/constants.js"),v=0,U=0,P=(m.forEach(m.ownKeys(p.cfg),function(e){"imp"===e?p[e]=p.cfg[e]:h[e]=p.cfg[e]}),h.c_ver="1.1.139",[]),D={store:window.WeakSet&&new WeakSet||[],add:function(e){this.store.add?this.store.add(e):this.store.push(e)},has:function(e){return this.store.has?this.store.has(e):-1<this.store.indexOf(e)}};function J(e){var t=l.getTopHostname();return t&&g.parse(e).hostname===t}function q(){return!(p.fsRan||(h.hostFilter&&h.hostFilter.length&&!m.some(h.hostFilter,J)?(u.sendEvent({type:"hfilter",meta:JSON.stringify(p.meta)},h.rates.hfilter),1):h.creativeWhitelist&&!0===h.creativeWhitelist[p.cid])||(e=p.meta.adv.toLowerCase(),h.advs&&"object"==typeof h.advs&&0<m.ownKeys(h.advs).length&&(!0===h.advs.exclude?!0===h.advs[e]:!0!==h.advs[e])));var e}var F=Math.random()<=h.impSampleRate,V=Math.random()<=h.statRate;function b(e,t){e="hb"===t?r.matchHB(e):r.match(e,t);return e.match,e}function w(e){return p.hc=function(e){var t=h.hcpmConfig;if(t&&e.ver){t=t[e.ver.charAt(2)];if(t&&p.hbCpm&&p.hbCpm>t.cpm&&p.hbCurrency===t.cur)return!0}return!1}(e),e.match&&e.ver&&"1"===e.ver.charAt(0)&&h.blocking&&!p.hc}function z(e){return t=e,e=l.getElements(t),e=m.fluent(e).map(function(e){return{tagName:e.tagName,url:e.src||e.href||e.data}}).filter(function(e){return e.url&&!J(e.url)}).val(),m.some(e,function(e){return E(e.url,e.tagName,void 0,t)})&&h.blocking;var t}function G(e){var t=l.getElements(e),t=m.filter(t,l.isIframe),t=(m.forEach(t,function(e){e.addEventListener("load",f.once(function(){try{e.contentWindow&&C(e.contentWindow)}catch(e){}}))}),z(e));return t&&a.writeAltAd(document),t}function j(e){e=z(o.parse(e));return e&&a.writeAltAd(document),e}var x=[];function E(e,t,n,r){var o,t=b(e,t),i=w(t);return r&&(o=r.documentElement&&r.documentElement.outerHTML,o=r.outerHTML||o),t.match&&(u.sendReport({html:o?l.getAdHtml()+o:l.getAdHtml(),r:e,bdmn:t.bdmn,bcid:t.bcid,rdType:t.rdType,is:!1,b:i,meta:JSON&&JSON.stringify(p.meta),blVer:t.ver||h.blVer}),i)&&!n&&a.writeAltAd(document),i}var X=f.once(function(e,t,n){u.sendReport({r:e,bdmn:t.bdmn,bcid:t.bcid,rdType:3,is:!1,b:n,meta:JSON&&JSON.stringify(p.meta),blVer:t.ver})});function K(){return window.performance&&window.performance.getEntries?m.fluent(S.getEntries()).filter(function(e){return"xmlhttprequest"===e.initiatorType&&-1===e.name.indexOf(h.apiUrl)}).map(function(e){return e.name.split("?")[0]}).val().slice(0,10):[]}function k(e,t,n){e[t]=n(e[t])}function Q(e,t,n){var r=f.findGetter(e,t);return f.defineGetter(e,t,n(r))}function O(e,t,n){var r=f.findSetter(e,t);return f.defineSetter(e,t,n(r))}function Y(e){e=l.getElements(e),m.forEach(e,function(e){if(l.isIframe(e)&&e.contentWindow)try{C(e.contentWindow)}catch(e){}})}var T=t.after(Y);var $,Z=t.after(($=Y,function(){return $.call(this,arguments[1])})),A=t.excepting(G),ee=t.excepting(j),te=t.excepting(function(e){var t=[].slice,t=1===arguments.length?e:t.call(arguments).join(""),t=(x.push(t),x.join("")),n=o.parse(t);return n.body&&n.body.hasChildNodes()&&(x=[],y.shouldBust({html:t}))?(y.bust({html:t,doc:this}),!0):G(n)}),ne=function(){var e=/msie\s|trident\//i.test(window.navigator.userAgent);try{if(e){var t=window.navigator.appVersion.split("NT");if(0<t.length){var n=t[1].split(";")[0].trim();if(parseInt(n)<10)return 1}}}catch(e){}}()?ee:te,L=t.excepting(function(){var e,t,n=this.target||this.formTarget,r=this.href||this.action,o=(s=this.tagName)&&"A"===s,i="FORM"===s,a=arguments[0]&&"click"===arguments[0].type||0===arguments.length,o=(o&&a||i)&&n&&"_top"===n.toLowerCase(),a=h.blocking&&h.rdrBlock,i=this.outerHTML,s=(n={tagName:s,tag:i,arg0:arguments[0],it:arguments[0]&&arguments[0].isTrusted,type:arguments[0]&&arguments[0].type,ini:document.currentScript&&(document.currentScript.src||document.currentScript.id),stack:Error&&(new Error).stack}).stack&&-1<n.stack.indexOf("userscript:Scraper"),c=m.some(P,function(e){return e.isTrusted}),d=!1;return!((d=r&&h.arWL&&(e=g.parse(r),t=e&&e.hostname)?m.some(h.arWL,function(e){return-1<t.indexOf(e)}):d)||c||!o||s)&&(u.sendReport({html:l.getAdHtml()+i+["\x3c!-- ",JSON&&JSON.stringify(n),"--\x3e"].join(""),r:"ardr",rdrTarget:r,rdType:1,is:!1,meta:JSON&&JSON.stringify(p.meta),blVer:h.blVer,b:a}),a)}),re=t.exceptingCtor(E),oe=t.excepting(function(e,t){return E(t)}),ie=t.excepting(function(e){return E(e.url||e)}),ae=t.aroundGet(function(e){var t=e.call(this);try{C(t.defaultView||t)}catch(e){}return e.call(this)}),se=t.excepting(function(e){var t="javascript:";return e&&0===m.trim(e.toLowerCase()).indexOf(t)?(t=e.substring(t.length,e.length),(t=this.contentWindow.eval(t))&&j(t)):y.shouldBust({iframe:this,url:e})?(y.bust({iframe:this,url:e,inspectHtml:j}),!0):E(e)}),ce=t.excepting(function(e){var t=this;return t.addEventListener("load",f.once(function(){C(t.contentWindow)})),j(e)}),de=t.excepting(function(e,t){var n=e&&"src"===e.toLowerCase(),r=e&&"href"===e.toLowerCase(),r=n||r;return n&&y.shouldBust({iframe:this,url:t})?(y.bust({iframe:this,url:t,inspectHtml:j}),!0):"srcdoc"===e.toLowerCase()?j(t):r&&E(t)}),ue=t.excepting(function(e){return this.name&&"src"===this.name.toLowerCase()&&E(e)});function C(e){if(!D.has(e)&&l.isSameOriginWin(e))try{var t=e.document.createElement("script"),n=e.document.createElement("a"),r=[e.document.body,e.document.getElementsByTagName("head")[0],t],o=e.HTMLIFrameElement&&e.HTMLIFrameElement.prototype,i=e.document.createElement("img"),a=e.XMLHttpRequest&&e.XMLHttpRequest.prototype,s=e.Attr&&e.Attr.prototype||e.document.createAttribute("src");function c(e,t){return e&&"function"==typeof e[t]}function d(e,t){return"function"==typeof f.findSetter(e,t)}function u(e,t){return"function"==typeof f.findGetter(e,t)}var p={appendChild:{objs:r,hooks:[A,T],setHook:k,condition:c},replaceChild:{objs:r,hooks:[A,T],setHook:k,condition:c},insertBefore:{objs:r,hooks:[A,T],setHook:k,condition:c},insertAdjacentElement:{objs:r,hooks:[Z],setHook:k,condition:c},write:{objs:[e.document],hooks:[ne],setHook:k,condition:c},writeln:{objs:[e.document],hooks:[ne],setHook:k,condition:c},innerHTML:{objs:[e.document.createElement("div")],hooks:[ee],setHook:O,condition:d},submit:{objs:[e.document.createElement("form")],hooks:[L],setHook:k,condition:c},click:{objs:[n],hooks:[L],setHook:k,condition:c},dispatchEvent:{objs:[n],hooks:[L],setHook:k,condition:c},contentWindow:{objs:[o],hooks:[ae],setHook:Q,condition:u},contentDocument:{objs:[o],hooks:[ae],setHook:Q,condition:u},src:{objs:[t,o,i],hooks:[se],setHook:O,condition:d},srcdoc:{objs:[o],hooks:[ce],setHook:O,condition:d},setAttribute:{objs:[t,o,i,n],hooks:[de],setHook:k,condition:c},value:{objs:[s],hooks:[ue],setHook:O,condition:d},nodeValue:{objs:[s],hooks:[ue],setHook:O,condition:d},open:{objs:[a],hooks:[oe],setHook:k,condition:c},WebSocket:{objs:[e],hooks:[re],setHook:k,condition:c},fetch:{objs:[e],hooks:[ie],setHook:k,condition:c}};m.forEach(m.keys(p),function(n){var e=p[n],t=e.objs,r=e.setHook,o=e.hooks,i=e.condition;return m.fluent(t).map(function(e){return f.getOwner(e,n)}).filter(function(e){return i(e,n)}).unique().forEach(function(t){m.forEach(o,function(e){r(t,n,e)})})}),D.add(e)}catch(e){}}function pe(e){lastIframeTag=l.getAdIframe(p.w,p.h),sampleReport=Object.assign({r:"sample",bdmn:"sample",is:!0,meta:JSON&&JSON.stringify(p.meta),blVer:h.blVer,xh:JSON&&JSON.stringify(K())},e),lastIframeTag&&(sampleReport.ltag=lastIframeTag),u.sendReport(sampleReport)}function fe(){window.addEventListener("message",function(e){var t;(t=e).data&&t.data.geoedge&&t.data.sample&&pe({rdType:3,nes:e.data.nes,r:e.data.url})})}function le(){var e,t;R({event:"onLoad",time:S.now()}),F&&(e=setTimeout(function(){pe(),clearTimeout(e)},1e3)),d.shouldLoad()&&d.load(),t=document.body,m.some(t.children,function(e){return 1===e.nodeType})||u.sendEvent({type:"noad"},1),V&&(p.meta.pt={},p.meta.pt.navigationStart=be("beforeWriteCreative"),p.meta.pt.loadEventEnd=be("onLoad"),p.meta.ua=navigator.userAgent,u.sendStats({net:n-p.start,exec:U,cr:v,meta:JSON.stringify&&JSON.stringify(p.meta)}))}function me(){var t,e;q()&&("complete"===document.readyState?le():l.addOnLoad(le)),p.async&&(t=function(){clearTimeout(e)},document.onreadystatechange=function(){"complete"===document.readyState&&(e=setTimeout(function(){window.removeEventListener("load",t);var e=l.createEvent("load");window.dispatchEvent&&window.dispatchEvent(e)},100))},window.addEventListener("load",t))}function he(e){return e.data&&e.data.key===p.key&&e.data.imp===p.imp}function ge(e){var t=e.name.indexOf("://securepubads.g.doubleclick.net/pcs/view?xai=");return"resource"===e.entryType&&0<t&&t<=5}function ye(e){var t=p.scriptHost+p.key+"/grumi.js";return"resource"===e.entryType&&e.name===t}var S=window.performance,I=[],_=[],ve=0,H=S&&S.timeOrigin&&Math.random()<=(h.rates.eventsTimeline||h.rates.default);function R(e){(H||V)&&_.push(e)}function be(t){return(m.findLast(_,function(e){return e.event===t})||{}).time}var we,je=f.once(R);function xe(){"gpt"===p.wtype&&p.targetWindow.postMessage&&(window.addEventListener("message",function(e){var t;he(t=e)&&"eventsTimelineRes"===t.data.evType&&(I=I.concat(e.data.timeline),ve=e.data.timeOrigin),he(t=e)&&"gptEvent"===t.data.evType&&I.push(e.data.eventTiming)}),window.addEventListener("beforeunload",function(){var e=m.map(_,function(e){var t;return e.time=(t=e.time,S.timeOrigin-ve+t),e}),e=I.concat(e).sort(function(e,t){return e.time-t.time}).map(function(e,t,n){n=n[t-1];return n&&(e.delta=e.time-n.time),e});p.meta.timeline=e,H&&u.sendEvent({type:"eventsTimeline",meta:JSON.stringify(p.meta)},h.rates.eventsTimeline)},!1),p.targetWindow.postMessage({evType:"eventsTimelineReq",key:p.key,adElId:p.meta.adElId,imp:p.imp},"*"))}function Ee(e,t){var e=e.getEntries(),n=m.find(e,ge),n=(n&&je({event:"impressionCounted",time:n.connectEnd}),m.filter(e,function(e){var t=b(e.name,e.initiatorType).match;return t&&e.blocked&&(p.meta.url=e.name,u.sendEvent({type:"observer-blocked",meta:JSON.stringify(p.meta)},h.rates.observer)),!e.blocked&&t}));m.forEach(n,function(e){var t,n;p.meta.observer=!0,p.meta.initiatorType=e.initiatorType,p.meta.url=e.name,t=e.name,n=e.initiatorType,w(b(t,n))&&(e.blocked=!0,p.meta.blocked=!0),u.sendEvent({type:"observer",meta:JSON.stringify(p.meta)},h.rates.observer),E(e.name,e.initiatorType)}),m.some(n,function(e){return e.blocked})&&t.disconnect()}function ke(e){var t,e=e.PerformanceObserver;function n(){t.observe({buffered:!0,type:"resource"})}e&&(t=new e(Ee),p.dwrp?l.executeOrWait(n):n())}if(top===self&&u.sendEvent({type:"intop"}),p.tag&&-1<p.tag.indexOf("grumi-container"))try{var Oe,W=/\b(key:){1}"\s*([a-f0-9\\-]*){1}\s*"/g.exec(p.tag);W&&W[0]&&(Oe=W[0].trim().slice(5,W[0].length-1)),p.dwrp=!0,p.meta.innerKey=Oe||"na",u.sendEvent({type:"dwrp",meta:JSON.stringify(p.meta)},h.rates.dwrp)}catch(e){}if(q()){document.currentScript&&document.currentScript.src&&-1===document.currentScript.src.indexOf("rumcdn.geoedge.be")&&u.sendEvent({type:"oldcdn",meta:JSON.stringify(p.meta)},h.rates.oldcdn);try{p.meta.ua=navigator.userAgent,u.sendInit({}),c.addRenderImpListener(function(){c.removeRenderImpListener(),p.a9Found=!0});try{p.pl&&H&&I.push({event:"grumiPreloaded",time:parseFloat(p.pl)});var Te=S.getEntries(),Ae=m.find(Te,ye);Ae&&R({event:"grumiDownloaded",time:Ae.duration})}catch(e){}a.writeCreative(document,{beforeWrite:function(){C(window),R({event:"beforeWriteCreative",time:S.now()}),we=+new Date},afterWrite:function(){v=+new Date-we,R({event:"afterWriteCreative",time:S.now()}),fe(),l.executeOrWait(function(){p.whenReady(function(e){e.targetWindow.postMessage({impression:!0,key:e.key,adId:e.pbAdId,impressionId:e.imp,type:"gam-impression",transactionId:"n/a",auctionId:"n/a",requestId:"n/a"},"*"),e.hbTag&&(e.aDomains&&e.aDomains.forEach(function(e){return E("https://"+e)}),E(e.pbBidder.toLowerCase()+":"+e.hbCid,"hb")),u.processQueue()}),i.shouldLoad()&&i.load(!0)}),window.addEventListener("DOMContentLoaded",function(){R({event:"domContentLoaded",time:S.now()})}),s.reporting.shouldLoad()&&s.reporting.load(function(e){e=m.filter(e,function(e){return e.body&&"HeavyAdIntervention"===e.body.id});m.forEach(e,function(e){window.addEventListener("pagehide",function(){p.meta.report=e,u.sendEvent({type:"heavy-ad",meta:JSON.stringify(p.meta)}),a.writeAltAd(document)})})}),me(),ke(window)}}),xe(),U=+new Date-n}catch(e){a.writeCreative(document,{trust:!0}),u.sendError({m:e})}R({event:"grumiExecuted",time:S.now()}),document.addEventListener&&document.addEventListener("click",function(e){P.push(e)})}else u.processQueue(),a.writeCreative(document,{trust:!0,afterWrite:me});var Le=f.once(function(t){var n,e=p.targetWindow.googletag;e&&e.cmd.push(function(){(n=e.pubads().getSlots().filter(function(e){return e.getResponseInformation()})).map(function(e){e=e.getSlotElementId();return p.targetWindow.document.getElementById(e).getElementsByTagName("iframe")[0]}).forEach(function(e){e&&e.contentWindow&&e.contentWindow.postMessage({geoedge:!0,sample:!0,url:t,nes:n.length},"*")})})});function Ce(){try{top.navigation.addEventListener("navigate",function(e){var t,n,r=!e.userInitiated&&"push"===e.navigationType&&!e.canIntercept,o=e.destination.url;r&&(t=B(r=o),n=w(t),t.match&&X(r,t,n),n)&&(e.preventDefault(),e.stopImmediatePropagation(),Le(o))})}catch(e){}}p.frameApi&&Ce(),p.wtype===e.papi&&(window.grumiInstance.inspectUrl=function(e){return p.urls.push(e),E(e,"vast",!0)},window.grumiInstance.initHooks=function(e){p.attachedWins.push(e),C(e),ke(e)},window.grumiInstance.setTargetWindow=function(e){p.targetWindow=e}),window.grumiInstance.createInstance=function(e,t,n){return e.grumi=n,createInstance(e,t),grumiInstance}},{"./app/a9.js":1,"./app/afcBuster.js":2,"./app/ajax.js":3,"./app/blackList.js":4,"./app/config.js":5,"./app/constants.js":6,"./app/creative.js":7,"./app/domUtils.js":8,"./app/gptAdapterLoader.js":9,"./app/htmlParser.js":12,"./app/jsUtils.js":13,"./app/methodCombinators.js":14,"./app/observers":15,"./app/reportByUser.js":17,"./app/session.js":18,"./app/urlParser.js":20,"./app/utils.js":21}]},{},[22]);
})(window, document);
grumiInstance.loaded = true;
grumiInstance.q.pop();
grumiInstance.q.forEach(function (cmd) {
	cmd();
});
grumiInstance.q.push = function (cmd) {
	cmd();
};