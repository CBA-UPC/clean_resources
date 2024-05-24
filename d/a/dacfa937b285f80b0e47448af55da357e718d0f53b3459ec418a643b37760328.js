(self.webpackChunkweb=self.webpackChunkweb||[]).push([[72261],{45188:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>N});var o,s,n,r,l,a=t(67294),d=t(37974),c=t(16708),p=t(42947),h=t(6048),m=t(12615),u=t(46066),f=t(94829),v=t(55518),g=t(50551),b=t.n(g);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},w.apply(this,arguments)}function y(e,i,t,o){l||(l="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,n=arguments.length-3;if(i||0===n||(i={children:void 0}),1===n)i.children=o;else if(n>1){for(var r=new Array(n),a=0;a<n;a++)r[a]=arguments[a+3];i.children=r}if(i&&s)for(var d in s)void 0===i[d]&&(i[d]=s[d]);else i||(i=s||{});return{$$typeof:l,type:e,key:void 0===t?null:""+t,ref:null,props:i,_owner:null}}function S(e){const{onClick:i}=e;return a.createElement("div",w({},e,{onClick:()=>{"function"==typeof i&&i()}}),o||(o=y("i",{})))}function $(e){const{onClick:i}=e;return a.createElement("div",w({},e,{onClick:()=>{"function"==typeof i&&i()}}),s||(s=y("i",{})))}let k=(n=(0,v.GA)({}),r=class extends a.Component{constructor(){super(),this.myFunction=()=>{document.getElementsByTagName("body")[0].className.indexOf("bgImg")>-1&&this.setState({slidesToShow:3,slidesToScroll:3,callResizeFn:!1})},this.getGA=(e,i)=>{let t="related_videos-video_<msid-url>";const o=e.wu||e.su;if(-1!==o.indexOf("/")){const e=o.split("/").reverse().slice(0,1).join("").replace(".cms","");t=e.match(/\d+/)?t.replace("<msid-url>",`${e}`):`${t.replace("<msid-url>",`${window.location.href}`)}`}return`${t}-position_${i+1}|story_msid_${this.props.msid}`},this.state={bottomVideosSliderData:void 0,slidesToShow:3,slidesToScroll:3,callResizeFn:!0},this.handleVideoOnClick=this.handleVideoOnClick.bind(this)}componentDidMount(){if(this.setState({slidesToShow:Math.round((window.outerWidth-30)/270),slidesToScroll:Math.round((window.outerWidth-30)/270)}),!this.props.isWapView&&this.props.widgets){const e=this.props.widgets.filter((e=>"videoslider"===e.tn));if(e.length>=3){const i=e[0],t=(0,c.Z)({path:i.path,perpage:10});p.Z.get(t).then((e=>{if(200===e.status){const t=Object.assign({},e.data);t.tn=i.tn,t.name=i.name,t.suffix=i.suffix,this.setState({bottomVideosSliderData:t})}}))}}}handleVideoOnClick(e,i,t){e.preventDefault(),i&&this.props.openVideoTheatre(i,t)}render(){const{bottomVideosSliderData:e}=this.state,{isWapView:i}=this.props,t=/^(http\:|https\:)(\/\/timesofindia.indiatimes.com\/)(\D+)(\/\D+\/)(videoshow\/\d+.cms)$/,o=e&&e.data&&e.data.items;if(!i&&e){const i={dots:!1,infinite:!1,speed:500,slidesToShow:(0,f.Em)()?3:this.state.slidesToShow,slidesToScroll:(0,f.Em)()?3:this.state.slidesToScroll,touchMove:!0,nextArrow:a.createElement(S,this.props),prevArrow:a.createElement($,this.props),responsive:[{breakpoint:1e3,settings:{slidesToShow:3,slidesToScroll:3}}]};return y("div",{className:`${b().trendingvdo} trendingvdo`,onResize:this.state.callResizeFn?this.myFunction():null},void 0,y("h3",{},void 0,e.name," ",y("span",{},void 0," ",e.suffix)),a.createElement(u.default,i,o&&o.map(((e,i)=>y("div",{className:`${b().parentContainer} ${e.primeid?b().prime:""}`},void 0,y(h.Z,{to:e.wu||e.su,className:"",title:e.hl,"data-ga":this.getGA(e,i),spa:!0,onClick:i=>{const o=(e.wu||e.su).replace(t,"/$3");this.handleVideoOnClick(i,o,e.id)}},void 0,y("div",{className:b().vdothumb},void 0,y("div",{className:b().content},void 0,function(e){let i,t="https://static.toiimg.com/photo/34824568.cms";return e.imageid?(i=e.imageid.split("&"),t=i.length>1?`https://static.toiimg.com/thumb/msid-${i[0]},${i[1]},width-280,resizemode-4/${i[0]}.jpg`:`https://static.toiimg.com/photo/msid-${i[0]},width-280,resizemode-4/${i[0]}.jpg`):t=`https://static.toiimg.com/photo/msid-${e.id},width-280,resizemode-4/${e.id}.jpg`,y(m.Z,{src:t,alt:e.hl,placeHolderSrc:"https://static.toiimg.com/photo/34824568.cms",offsetVertical:100})}(e),y("span",{className:b().playicon},void 0,e.du))),y("div",{className:b().vdoinfo},void 0,y("span",{className:b().discription},void 0,e.hl),y("span",{className:b().time},void 0,function(e){const i=e.upd||e.lpt||e.dl;return(0,f.NK)(i)}(e)))))))))}return""}},O=r.prototype,C="handleVideoOnClick",V=[n],T=Object.getOwnPropertyDescriptor(r.prototype,"handleVideoOnClick"),z=r.prototype,j={},Object.keys(T).forEach((function(e){j[e]=T[e]})),j.enumerable=!!j.enumerable,j.configurable=!!j.configurable,("value"in j||j.initializer)&&(j.writable=!0),j=V.slice().reverse().reduce((function(e,i){return i(O,C,e)||e}),j),z&&void 0!==j.initializer&&(j.value=j.initializer?j.initializer.call(z):void 0,j.initializer=void 0),void 0===j.initializer&&(Object.defineProperty(O,C,j),j=null),r);var O,C,V,T,z,j;k.defaultProps={isWapView:!1,widgets:[],openVideoTheatre:void 0,isMobile:!1};const N=(0,d.$j)((e=>({isMobile:e.isMobile})))(k)},50551:e=>{e.exports={trendingvdo:"z9HWP",parentContainer:"DvmOh",prime:"WZfC3",vdothumb:"ebk6k",content:"PN0I6",prev:"Ko8Sa",next:"C02hC",disable:"j1JaW",playicon:"b6lAp",vdoinfo:"E_OSI",discription:"flaSS",time:"OoVsM",carditem:"qgGhP"}}}]);
//# sourceMappingURL=TrendingVideo_v2_es6_module.e1917050.chunk.js.mappplied to active dots
            		d_slideid:"active",
            		btnclass:"disable",
            		startAt:1,
            		slidesInView: ($shopslider.find("[data-slidesinview]").length > 0) ? parseInt($shopslider.find("[data-slidesinview]").data("slidesinview")) : 5,
            		slideAtOnce: ($shopslider.find("[data-slidesinview]").length > 0) ? parseInt($shopslider.find("[data-slidesinview]").data("slidesinview")) : 5,
            		slideTime:400,
            		syncTo:[],
            		scrollbar:true
            	};
                $shopslider.slider(s);
            });
          $('#ga_slider').on('click', '[data-slider="next"]:not(.disable)', function(){
            var $shopslider = $("#ga_slider");
            var cc=0;
            var slideinview= parseInt($shopslider.find("[data-slidesinview]").data("slidesinview"));
            
            $shopslider.find('[data-slider="slides"] img[__src]').each(function(){
                if(cc < slideinview){
                    $(this).attr('src',$(this).attr('__src'));
                    $(this).removeAttr('__src');cc++;
                }
            });
});
            
            }
        })
    },
    
    // User vote done or not
    userVotedDone: function(params,extraparams) {
        var reqData = {'PRadio': params.PRadio, 'txtPolliD' :params.txtPolliD}
        var $selctedUlStart = $('.scroller').find("[catid="+reqData.txtPolliD+"]");
        $selctedUlStart.addClass('voteddone').attr('isvoted', true);
        var req = $.ajax({
            url: '/json/r-' + Math.random() + '/gnawards_vote.cms',
            //timeout:1,
            data: reqData,
            type: "POST"});
            
            req.done(function(data){
                 times.mobile.toisa.user_preference.cookie.set(extraparams.ckname, extraparams.ckval, 15);
                 var $selctedUl = $('.scroller').find("[catid="+reqData.txtPolliD+"]");
                 //$selctedUl.addClass('voteddone').attr('isvoted', true);
                 $selctedUl.find('.votebtn').addClass("uservoted");// all li in Ul
                 $selctedUl.find("[data-polloptionid="+reqData.PRadio+"]").addClass('votOpt').find('small').text('Voted!');// particular li
                 
                 times.mobile.toisa.showTheSocialSharing();
                 
            });
            req.fail(function(){
                 console.log('Service Temporarily Unavailable'); 
                 var splitckname = extraparams.ckname.split("_");

            });
      
    },
    
    // Filter information   
    filterNomination: function(){
        $('.idnomination .nomination_category ').removeClass('disable');
        times.mobile.toisa.updateDom();
        
        this.config.dom.nominCategory.on('click',function(){
            $(this).parent('.nomination_category').toggleClass('disable');
        })
        
        this.config.dom.playerBio.on('click',function(e){
            e.preventDefault();
            e.stopPropagation();
           var catid = $(this).parents('ul').attr('catid');
           var msid = $(this).attr('msid');
           var optid = $(this).attr('optid');
           var isvoted = $(this).parents('ul').attr('isvoted'); 
           var currentvoted = $(this).closest('li').find('.votebtn').hasClass('votOpt') ? 1 : 0; 
           
           times.mobile.toisa.playerBio({'catid': catid, 'msid' :msid,'isvoted':isvoted,'optid':optid, 'currentvoted' : currentvoted});
           $('body').addClass('disable-scroll');
           $('.biodetails').addClass('active loader');
           $('body').append("<div class='biodetailsgrey'  data-btn='close-profile'></div>");
            
        });
        this.disabletheVotingButtons();
        times.mobile.toisa.voteButton();
    },
    disabletheVotingButtons: function(){
        var $votingSections = $('.scroller ul');
        var  ckey= '' ,$ul;
        var isCookieSet = false;
        $votingSections.each(function(k,v){
            $ul = $(v);
            ckey= 'toispoll_'+ $ul.attr('catid');
            if(times.mobile.toisa.user_preference.cookie.get(ckey)){
                isCookieSet = true;
                var elId = times.mobile.toisa.user_preference.cookie.get(ckey);
                $ul.addClass('voteddone').attr('isvoted', true);
                $ul.find('.votebtn').addClass('uservoted');
                $ul.find('.votebtn small').text('Vote');
                $ul.find("[data-polloptionid="+elId+"]").addClass('votOpt').find('small').text('Voted');
            }
        });
        
        if(isCookieSet){ this.showTheSocialSharing(); }
    },
    // Vote option
    voteButton: function (){
            times.mobile.toisa.updateDom();
            var $voteButton = times.mobile.toisa.config.dom.voteProfile
            //$('.nominationcont').on('click', '.votebtn:not(".uservoted")', function(e){
            $voteButton.on('click', function(e){
                 e.preventDefault();
                 e.stopPropagation();
                if( $(this).hasClass('uservoted') || $(this).hasClass('triggerlogin')){return;}
                var ckname = 'toispoll_'+ $(this).attr('data-catid');
                var ckval = $(this).attr('data-polloptionid');
                var categoryid = $(this).attr('data-catid');
                if ($(this).hasClass('votebtnPopup')){
                    var elem =  $('[data-catid="'+categoryid+'"][data-polloptionid="'+ckval+'"]:not(.votebtnPopup)');
                    $(this).attr('data-pollname', elem.attr('data-pollname'))
                    $(this).attr('data-polloption', elem.attr('data-polloption'))
                }
                
                var utmMedium = $(this).attr('data-pollutmmedium');
                var utmSource = $(this).attr('data-pollutmsource');
                var eventLabel = $(this).attr('data-polloption');
                if ( utmMedium && utmSource){
                    eventLabel = utmSource + '_' + utmMedium + '_' + $(this).attr('data-polloption');
                }
                
                ga('send', 'event', 'Web_GNAwards', $(this).attr('data-pollname'), eventLabel);
                //ga('send', 'event', 'Web_GNAwards', $(this).attr('data-pollname'), eventLabel + '_1');
                //ga('send', 'event', 'Web_GNAwards', $(this).attr('data-pollname'), eventLabel + '_2');
                const dataLayer = window.dataLayer || [];
                dataLayer.push({
                  event: 'user_click',
                  type: 'GN Awards Vote',
                  category: $(this).attr('data-pollname'),
                  label: eventLabel,
                });
                $(this).addClass('uservoted votOpt').find('small').text('Voted!');
                
                times.mobile.toisa.userVotedDone({'PRadio': ckval, 'txtPolliD' :categoryid},{'ckname' : ckname , 'ckval' : ckval});
                //times.mobile.toisa.userVotedDone({'PRadio': ckval, 'txtPolliD' :categoryid},{'ckname' : ckname , 'ckval' : ckval});
                //times.mobile.toisa.userVotedDone({'PRadio': ckval, 'txtPolliD' :categoryid},{'ckname' : ckname , 'ckval' : ckval});
        });
        
    },
    
    // Vote category
    votedCat : function(){
        $('.nomination_category .scroller ul').each(function(i,v){
            var ckname = 'toispoll_'+ $(this).attr('catid');
            var ckvalue = null;//times.mobile.user_preference.cookie.get(ckname);
            if(ckvalue !=null){
                $(this).addClass('voteddone').attr('isvoted', true).find(".votebtn[data-polloptionid='"+ckvalue+"']").addClass('uservoted').addClass('votOpt').find('small').text('Voted!');
                //console.log(ckvalue);
            }
        });
        
        times.mobile.toisa.updateDom();
       this.config.dom.errorClose.on('click',function(){
            $(this).parent().parent().removeClass('someerror');
            
        });
    },
    
    addLogin : function () {
         if(!times.mobile.toisa.checkRequestFrmApp()){
        
         $('.nomination_category .scroller li a.votebtn').addClass('triggerlogin');
         }
    },
    
    removeLogin : function () {
        $(".nomination_category .scroller .triggerlogin").removeClass('triggerlogin');
    },
    
    trackLoginLogout : function () {
        require(['jquery','tiljs/event'],function($, event) {
            event.subscribe("user.login",function(user) {
                if(user){
                    times.mobile.toisa.removeLogin();
                    if (times.mobile.toisa.clickedVoteBtnElem !='') {
                       var curelemid =  $("#"+times.mobile.toisa.clickedVoteBtnElem);
                       curelemid.trigger('click');
                       times.mobile.toisa.clickedVoteBtnElem = '';
                    }
                } 
           });
           event.subscribe("user.logout",function(user) {
              
                     times.mobile.toisa.addLogin();
               
              
           });
       });
    },
    
    checkRequestFrmApp:function(){
        var url_string = window.location.href
        var url = new URL(url_string);
        var frmapp = url.searchParams.get("frmapp");
        if(frmapp==='yes'||frmapp==='y'){
            return true     
        } 
        
        return false;
       
    },
    
    clickHandler : function () {
        $("body").on("click", '.triggerlogin', function () {
            times.mobile.toisa.isLoginthroughVoteButton = true;
            times.mobile.toisa.clickedVoteBtnElem = $(this).attr('id');
            $("[data-plugin='user-login']").trigger('click');
        });
        
        $("#nominationdrpdown").on('change', function () {
            location.href = $(this).val();
        });
        $('.tnc .close').on("click",function(){
            $('.tnc').hide();
        })
        
        $(document).on('click', function(){
           times.mobile.toisa.updateDom();
           $('.biodetails').removeClass('active').empty();
           $('body').removeClass('disable-scroll');
           $('.biodetailsgrey').remove();
        });
        
        $(document).on('click', '.biodetails.active', function(e){
            e.stopPropagation();
        })
        
        // // todo --> modify the binding logic
        // $('.scroller').on("click",'.votebtn',function(e){
        //   var pollcat = $(this).data('pollcatid'),
        //   pollopt = $(this).data('polloptionid');
        //   if(login.getUser() !== null && typeof login.getUser() !== 'undefined'){
        //       submitVote(pollcat, pollopt);
        //       return false;
        //   }
        //   else{
        //       login.login();
        //   }
        // });
    },
    
    checkUserLoginDoAction : function () {
        var ssoid = this.getUserSSOId(); 
        if (ssoid == '') {
            this.addLogin();
        }
    },
    
     getUserSSOId : function () {
        var userCookie = document.cookie.match(/(?:\s)?ssoid=(\w+);?/);
        if(!!(userCookie)) {
            return userCookie[1];
        } else {
            return '';
        }
    },
    
    showTheSocialSharing : function(){
        $("[data-plugin=social]").css("display","block");
    },
    
    init: function () {
        this.filterNomination();
        this.votedCat();
        this.clickHandler();
        this.checkUserLoginDoAction();
        this.trackLoginLogout();
    }
}

times.mobile.toisa.init();  

define("techslider",['jquery','util','is','logger','event'], function($,util,is,logger,event) {
            $.fn.slider = function(options) {
                return this.each(function() {
                    if(typeof(this._init) === "boolean" && this._init===true) {
                        return this;
                    }
                    this._init=true;
                    var s = $.extend({},{
                        // These are the defaults. Data-Slider Properties to be applied
                        d_slides:"", //Div that contain all the slides
                        d_nextbtn:"", //Next Buttons
                        d_prevbtn:"", //Prev Buttons
                        d_current:"", //Current Slide Display Box (Optional)
                        d_total:"", //Total Slide Display Box (Optional)
                        d_slide_active:"", //Class to be applied on active slide
                        d_dots_container:false, //Container for dots or false to disable by default
                        //d_dots_li_class:"", //Class to be applied to li dots
                        d_dots_active:"", //Class to be applied to active dots
                        d_slideid:"",
                        btnclass:"", //Class to apply on disabled/hidden buttons
                        events:false,
                        master:true,
                        startAt:1,
                        slidesInView:1,
                        slideAtOnce:1,
                        slideTime:400,
                        syncTo:[],
                        scrollbar:false
                    }, options );
                    var o=this;
                    o.container=$(this);
        
                    o.sliderid=$(o).data("sliderid");
                    o.slides=o.container.find("[data-slider='"+s.d_slides+"']");
                    o.slide=o.slides.children();
                    o.slideAtOnce=parseInt(s.slideAtOnce);
                    o.slidesInView=parseInt(s.slidesInView);
                    o.e_currentSlide=o.container.find("[data-slider='"+s.d_current+"']");
                    o.e_totalSlide=o.container.find("[data-slider='"+s.d_total+"']");
                    o.e_dots_container=o.container.find("[data-slider='"+s.d_dots_container+"']");
                    o.nextbtn=o.container.find("[data-slider='"+s.d_nextbtn+"']");
                    o.prevbtn=o.container.find("[data-slider='"+s.d_prevbtn+"']");
                    o.currentSlide=parseInt(s.startAt);
                    o.totalSlide=o.slide.length;
        
                    //Create li
                    if(!is.empty(o.e_dots_container)) {
                        o.dothtml="";
                        o.totalDot=Math.ceil(o.totalSlide/o.slidesInView);
                        for(i=0;i<o.totalDot;i++) {
                            o.dothtml+="<li data-dotno='"+i+"'>"+(parseInt(i)+1)+"</li>";
                        }
                        o.e_dots_container.append(o.dothtml);
                    }
        
                    //Function to update UI on any change in slider
                    o.updateUI=function(source) {
                        if(o.slidesInView>1 && source.indexOf("next")=="-1" && source.indexOf("prev")=="-1") {
                            if(!is.empty(s.d_slide_active)) {
                                o.slides.find("."+s.d_slide_active).removeClass(s.d_slide_active);
                                o.slides.find(":nth-child("+o.currentSlide+")").addClass(s.d_slide_active);
                            }
                        }
                        if(!is.empty(o.e_currentSlide)) {
                            o.e_currentSlide.text(o.currentSlide);
                        }
                        if(!is.empty(o.e_totalSlide)) {
                            o.e_totalSlide.text(o.totalSlide);
                        }
                        if(!is.empty(o.e_dots_container)) {
                            //Deativate previous dots
                            o.e_dots_container.find("."+s.d_dots_active).removeClass(s.d_dots_active);
                            //Calculate currentDot Position
                            if(o.currentSlide<=o.totalSlide-o.slidesInView)
                            { 
                                o.currentDot=Math.ceil(o.currentSlide/o.slidesInView)-1; //Start from zero
                            } else { //Make it last slide
                                o.currentDot=Math.ceil(o.totalSlide/o.slidesInView)-1; //Start from zero
                            }
                            //Make currentDot Active
                            o.e_dots_container.find(":eq("+o.currentDot+")").addClass(s.d_dots_active);
                        }
                        //Manage Buttons Hiding
                        o.nextbtn.removeClass(s.btnclass);
                        o.prevbtn.removeClass(s.btnclass);
                        if(parseInt(o.currentSlide)===1) {
                            o.prevbtn.addClass(s.btnclass);
                        }
                        if(parseInt(o.currentSlide)>parseInt(o.totalSlide)-parseInt(o.slidesInView)) {
                            o.nextbtn.addClass(s.btnclass);
                        }
                    }
                    if(s.events) {
                        event.subscribe("slider.slideto",function(sliderobj) {
                            if(parseInt(sliderobj.sliderid)===parseInt(o.sliderid)) {
                                if(is.number(parseInt(sliderobj.val))) {
                                    o.slideTo(sliderobj.val,"event_no");
                                } else if(is.string(sliderobj.val)) {
                                    if(sliderobj.val==="next") {
                                        o.slideNext("event_");
                                    } else if (sliderobj.val==="previous") {
                                        o.slidePrev("event_");
                                    }
                                } else {
                                    logger.log("Invalid Slider Event:");
                                    logger.log(sliderobj);
                                }
                            }
                        });
                    }
                    //Function to change slides
                    o.slideTo=function(val,source) {
                        if(val>0 && val<=o.totalSlide) {
                            // o.slide.outerWidth(true);
                            // var slideOuterWidth=$(o).find('ul').width();
                            var slideOuterWidth=o.slide.outerWidth(true);
                            var lp=o.totalSlide-o.slidesInView;
                            // var mlTo=Math.ceil(val/o.slidesInView);
                            // var mlTo=Math.ceil(o.totalSlide/o.slidesInView)+1;
                            var mlTo=Math.ceil(o.totalSlide/o.slideAtOnce)+1;
                            // var moveTo=val;
                            // if(val>lp) {
                            //     moveTo=lp+1;
                            // } 
                            // // else if(val == 1) {
                            // //     moveTo = 1;
                            // // }
                            // else {
                            //     // moveTo=mlTo;
                            //     moveTo = parseInt(val);
                            // }
                            var moveTo = $(o.slide[1]).outerWidth();
                            
                            var moveLeftTo=(slideOuterWidth*(val-1));
                            if (source=='event_next'){
                                moveLeftTo= moveLeftTo + 60;
                            }
                            
                            o.slides.animate({
                                marginLeft: '-'+moveLeftTo +'px'
                            });
                            o.currentSlide=val;
                            o.updateUI(source);
                            if(s.events) {
                                o.sliderobj={
                                    no:val,
                                    sliderid:o.sliderid,
                                    slideid:$(o.slide[val-1]).data("slideid"),
                                    source:source,
                                    master:s.master
                                };
                                event.publish("slider.slided",o.sliderobj);
                            }
                            if(!is.empty(s.syncTo)) {
                                $(s.syncTo).each(function(index,v){
                                    var sid=$(o).data("sliderid");
                                    $(v).each(function(index,vl){
                                        var vid=$(vl).data("sliderid");
                                        if(sid===vid) {
                                            $(vl).slider()[0].slideTo(val,"sync");
                                        }
                                    });
                                });
                            }
                        } else {
                            logger.log("Invalid Slide Number");
                        }
                    }
        
                    o.slideNext=function(source) {
                        var sn=parseInt(o.currentSlide)+parseInt(o.slideAtOnce);
                        var max=parseInt(o.totalSlide)-parseInt(o.slidesInView);
                        if(sn>max) {
                            o.slideTo(max+1,source+"next");
                        } else {
                            o.slideTo(sn,source+"next");
                        }
                    }
                    o.slidePrev=function(source) {
                        var sn;
                        sn=parseInt(o.currentSlide)-parseInt(o.slideAtOnce);
                        if(sn<1) {
                            o.slideTo(1,source+"prev");
                        } else {
                            o.slideTo(sn,source+"prev");
                        }
                    }
                    //Updating the UI
                    o.updateUI("default");
        
                    //Throttler function
                    o.throttledslide = util.throttle(s.slideTime,function(type,val){
                        if(type==="next") {
                            // o.slideNext();
                            o.slideNext("event_");
                        } else if(type==="prev") {
                            //o.slidePrev();
                            o.slidePrev("event_");
                        } else if(type==="to") {
                            o.slideTo(val,"main");
                        } else {
                            logger.log("Invalid throttledslide value!");
                        }
                    });
        
                    //Track links on container
                    o.container.on("click","[data-slider]",function(){
                        var component=$(this).data("slider");
                        if(component===s.d_nextbtn) {
                            o.throttledslide("next");
                        } else if (component===s.d_prevbtn) {
                            o.throttledslide("prev");
                        }
                    });
                    o.e_dots_container.on("click","*",function(){
                        var count=parseInt($(this).data("dotno"));
                        var stocount=(count*o.slidesInView)+1;
                        if(stocount>o.totalSlide)
                        {
                            stocount=o.totalSlide;
                        } else if (stocount<1) {
                            stocount=1;
                        }
                        o.throttledslide("to",stocount);
                    });
                });
            }
            return $;
    });
    
    /*$(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
           $('#videoPlayerContainer').addClass('videoSticky');
        } else {
           $('#videoPlayerContainer').removeClass('videoSticky');
        }
    });*/
    
    $(document).ready(function(){
        // accordin
        $('.accordion-header').toggleClass('inactive-header');
    	//Set The Accordion Content Width
    	var contentwidth = $('.accordion-header').width();
    	$('.accordion-content').css({'width' : contentwidth });
    	
    	//Open The First Accordion Section When Page Loads
    	$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
    	$('.accordion-content').first().slideDown().toggleClass('open-content');
    	
    	// The Accordion Effect
    	$('.accordion-header').click(function () {
    		if($(this).is('.inactive-header')) {
    			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
    			$(this).toggleClass('active-header').toggleClass('inactive-header');
    			$(this).next().slideToggle().toggleClass('open-content');
    		}
    		
    		else {
    			$(this).toggleClass('active-header').toggleClass('inactive-header');
    			$(this).next().slideToggle().toggleClass('open-content');
    		}
    	});
        //endaccordin
       /* var countDownDate = new Date("Mar 10, 2023 17:00:00").getTime();
        var x = setInterval(function() {
        
          // Get today's date and time
          var now = new Date().getTime();
        
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
        
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          if (hours<10) hours = "0" + hours;
          if (minutes<10) minutes = "0" + minutes;
          if (seconds<10) seconds = "0" + seconds;
        
          document.getElementById("videoCTimer").innerHTML = "<div class='videtimebox'><div class='videohead'>The game changers have been decided</div><div class='videosubhead'>Watch GN Awards Live in:</div><div class='vidoetimebox'><div class='hour'>"+hours + "<span>HOURS</span></div><div class='timedot'>:</div><div class='min'>"
          + minutes + "<span>MINUTES</span></div><div class='timedot'>:</div><div class='sec'>" + seconds + "<span>SECONDS</span><div></div></div>";
        
          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
            //document.getElementById("videoCTimer").innerHTML = "<div class='videtimebox'><div class='videohead'>The game changers have been decided</div><div class='videosubhead'>Gadgets Now Awards 2022</div><div class='vidoetimeboxs'>STREMING SOON</div>";
            document.getElementById("videoCTimer").innerHTML = "";
            $getIframeattr = $('#videoPlayerContainerIframe').attr('data-videosrc');
            $('#videoPlayerContainerIframe').attr('hidden', false);
            $('#videoPlayerContainerIframe').attr('src', $getIframeattr);
          }
        }, 1000);*/
        $getIframeattr = $('#videoPlayerContainerIframe').attr('data-videosrc');
        $('#videoPlayerContainerIframe').attr('hidden', false);
        $('#videoPlayerContainerIframe').attr('src', $getIframeattr);
        if (typeof(ga) == "function") {
            ga('send','event','Awards_Desktop','load', 'load');
        }
            var elemObserver;
            var elem = document.getElementsByClassName('videoPlayerContainer');
            if ("IntersectionObserver" in window) {
                elemObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        console.log('in view');
                        let tthis = entry.target; 
                        if (typeof(ga) == "function") {
                            ga('send', {
                               'hitType': 'pageview',
                               'page': 'https://www.gadgetsnow.com/awards',
                               'title':  'Awards Live Video',
                               'location': 'https://www.gadgetsnow.com/awards'
                            });
                            ga('send','event','Awards_Desktop','VideoWidget', 'View');
                        }   
                    }
                    });
                }, {rootMargin: '50% 0px 0px 0px'});
                elemObserver.observe(elem[0]);
            }
            /*$(".chroma").on('click', function(e){
                var label = $(this).attr('data-chromagname');
                ga('send','event','Awards_Desktop','croma_buyclick', label);
            });*/
    });
    

		
	
		
		    // Remove prc when user come from other website
		    $(function(){
    		    require(['jquery', 'tiljs/login', 'tiljs/page', 'cookie'], function($, login, page, cookie) {
                    var user = login.getUser();
                    login.onStatusChange( function ( _user ) {
    					if(!_user){
                            var domain = page.getDomain();
                            cookie.remove( 'prc', "/", domain );
                            cookie.remove( 'prc' );
                            cookie.remove( 'ipr', "/", domain );
                            cookie.remove( 'ipr' );
                        }
    				} );
                });
            });
		
	