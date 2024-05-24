//tealium universal tag - utag.103 ut4.0.201809191812, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState==='complete'||this.readyState==='loaded')&&!b.hFlag){b.hFlag=1;o.cb();}};b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb();}};}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.map={"dom.title":"u1","dom.url":"u2"};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g;u.data={"qsp_delim":";","kvp_delim":"=","base_url":"","src":"5779616","type":"allpgs","cat":"allpa0","multicat":"","ord":"","cost":"","qty":0,"total_qty":0,"countertype":"standard","conversioncount":"single","order_id":"","order_subtotal":"","product_id":[],"product_quantity":[],"product_unit_price":[]};c=[];g=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(/^(cat|multicat|type|src|cost|qty|countertype|conversioncount|ord|order_id|order_subtotal|product_id|product_quantity|product_unit_price)$/.test(e[f])){u.data[e[f]]=b[d];}else{u.data[e[f]]=b[d];g.push(e[f]+u.data.kvp_delim+encodeURIComponent(b[d]))}}}}
u.data.order_id=u.data.order_id||u.data.ord||b._corder||"";u.data.order_subtotal=u.data.cost||u.data.order_subtotal||b._csubtotal||b._ctotal||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if((u.data.qty&&u.data.qty.length>0)||(u.data.product_quantity.length===0&&b._cquan!==undefined)){u.data.product_quantity=u.data.qty||b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
u.data.base_url='//'+u.data.src+'.fls.doubleclick.net/activityi;src='+u.data.src+';type='+u.data.type+';';if(u.data.multicat===""){u.data.multicat_arr=[u.data.cat];}else{u.data.multicat_arr=u.data.multicat.split(';');}
if(u.data.order_id){if(u.data.conversioncount==="multi"&&u.data.product_quantity.length>0){for(f=0;f<u.data.product_quantity.length;f++){u.data.total_qty+=parseInt(u.data.product_quantity[f]);}
u.data.qty=u.data.total_qty;}else{u.data.qty=1;}
var dc_fl_prd=[];for(var i=0;i<u.data.product_id.length;i++){var prod_num=i+1;dc_fl_prd.push("i"+prod_num+":"+u.data.product_id[i]+"|p"+prod_num+":"+u.data.product_unit_price[i]+"|q"+prod_num+":"+u.data.product_quantity[i])}
u.prd=dc_fl_prd.join('|');if(u.prd){c.push("prd="+u.prd);}
c.push('qty='+(u.data.qty));c.push('cost='+(u.data.order_subtotal));if(g.length>0){c.push(g.join(';'));}
c.push('ord='+(u.data.order_id));}else if(u.data.countertype==='standard'){if(g.length>0){c.push(g.join(';'));}
c.push('ord='+(Math.random()*10000000000000));}else if(u.data.countertype==='unique'){if(g.length>0){c.push(g.join(';'));}
c.push('ord=1');c.push('num='+(Math.random()*10000000000000));}else{if(g.length>0){c.push(g.join(';'));}
c.push('ord='+(u.data.order_id?u.data.order_id:window.utag.data['cp.utag_main_ses_id']));}
for(f=0;f<u.data.multicat_arr.length;f++){u.loader({"type":"iframe","src":u.data.base_url+'cat='+u.data.multicat_arr[f]+((c.length>0)?';'+c.join(u.data.qsp_delim):'')+'?',"loc":"body","id":'utag_103_iframe'});}}};utag.o[loader].loader.LOAD(id);}('103','fox.delta'));}catch(error){utag.DB(error);}
2"]{
        height: 275px;
    }
}
@media only screen and (max-width: 404px){
    .kg-card.kg-embed-card>iframe[width="612"]{
        height: 245px;
    }
}
@media only screen and (max-width: 380px){
    .kg-card.kg-embed-card>iframe[width="612"]{
        height: 200px;
    }
}
/* */

/* instagram */
.kg-embed-instagram-card {
    height: auto !important;
}
.kg-embed-instagram-card iframe {
    width: 100% !important;
    display: inline-block;
    height: 160vh;
}
@media only screen and (max-width: 768px){
    /* For desktop: */
    /*.kg-embed-instagram-card{
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 740px !important;
    }
    figure.kg-card.kg-embed-card>iframe.instagram-media{
        margin:auto !important;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 740px !important;
    }
    figure.kg-card.kg-embed-card>iframe.instagram-media {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }*/
    .kg-embed-instagram-card iframe  {
        width: 100% !important;
        display: inline-block;
        height: 125vh !important;
    }
}
.section-bar {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #010003;
    color: #fff;
    font-family: open sans, segoe ui, Tahoma, Geneva, Verdana, sans-serif;
    font-size: x-large;
    z-index: 10000;
  }
  .content-bar {
      margin: 0 auto;
      max-width: 1250px;
      vertical-align: middle;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
  }
  .content-bar-logo {
      width: fit-content;
      display: inline-block;
      border: 0 solid red;
      width: 100px;
      height: 40px;
      position: relative;
  }
  .text-sm-bar{
      font-family: 'DinLTPro', sans-serif;
      font-size: 15px;
      font-weight: bold;
  }

  #gotoTop{
      z-index: 100000 !important;
  }

  owl-stage .owl-stage{
    padding-left: 0px !important;
  }

  .gam-ad-hz-bg {
    background-color: #eff2f5;
  }

  .centered-gam{
    margin-left: 0px !important;
}

.custom-h1{
    color: black;
    font-size: 30px;
}

.secondary-h1{
    color: #a9a9a9 !important;
    font-size: 12px !important;
}

.main-h1{
    color: #002c54!important;
    line-height: 26px!important;
    font-size: 25px;
    font-weight: 700;
}
.main-h1 .main-desc{
    color: black !important;
    font-size: 20px;
    font-family: DinLTNextNormal !important;
}

.main-subtitle{
    color: #002c54!important;
    font-size: 30px;
    font-weight: 700;
    font-family: DinLTNextBold!important;
}

.sub-title{
    color: black;
    font-size: 20px;
    font-family: DinLTNextNormal !important;
}

@media (max-width: 767px){
    .main-subtitle{
        font-size: 25px;
    }
    .sub-title{
        font-size: 17px;
    }
    .main-h1 .main-desc{
        font-size: 17px;
    }
}

.mtn-30{
    margin-top: -30px;
}

.mtn-40{
    margin-top: -40px;
}

/* page style */
.page-content *[data-md-text-align="center"]{
    text-align: center;
}

.page-content *[data-md-text-align="justify"]{
    text-align: justify;
}

.page-content *[data-md-text-align="right"]{
    text-align: right;
}

.page-content h2{
    color: #444 !important;
}

.page-content strong{
    color: #080808 !important;
}

.custom-sz-img {
    height: auto !important;
    width: 100% !important;
}

.text-black{
    color: black !important;
}

.text-black a{
    color: black !important;
}

.text-fixed p{
    color: black;
    font-size: large;
}
.text-fixed p{
    margin-bottom: 0px;
}
.text-fixed a{
   color: #2E75B6;
   text-decoration: underline !important;
}
.text-fixed a:hover{
    color: #2E75B6;
 }

@media (max-width: 639px){
    .infography .owl-prev{
        left: 0px !important;
    }
    
    .infography .owl-next{
        right: 0px !important;
    }
}
@media (min-width: 768px) and (max-width: 1057px){
    .infography .owl-prev{
        left: -10px !important;
    }
    
    .infography .owl-next{
        right: -10px !important;
    }
}

@media(max-width:767px){
    .infography .owl-prev, .infography .owl-next{
        transform: scale(.7);
    }
}

.valign-middle{
    vertical-align: middle;
}

.vcenter-item{
    display: flex;
    align-items: center;
}

.pointer{
    cursor: pointer;
}

.kg-embed-card-tiktok{
    width: 100% !important;
    height: 780px !important;
}

.kg-embed-card-tiktok iframe{
    height: 100% !important;
    width: 100% !important;
}