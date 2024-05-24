!this,(function(e){"use strict";var t,n,i,a,r=o=u=c=f="function"==typeof WeakSet?new WeakSet:new Set,s=d=-1,p=m=v=l={passive:!0,capture:!0},h=new Date,y=g=S=E=e.getCLS=e.getFCP=e.getFID=e.getLCP=e.getTTFB=Object.defineProperty(e,"__esModule",{value:!0})}));

if( typeof $ !="undefined"){

$(document).on('click', '.tnt_hr_tabs', function(){

var ID= $(this).attr("id");

var newID= $("#v-pills-tab").parents(".tnt_hr_tabs_panel").attr("id");

if(ID == newID){

$("#v-pills-tab .tnt_nav_link").first().click();

}

});

$(document).on('click', '#v-pills-tab .tnt_nav_link', function(){
    var j = $(this).next().attr("href");
    var i = $(this).attr("id");
    var k = $(this).find('i.fa-lock').hasClass('fa-lock-open');
    if($("iframe#"+i).length > 0){
     $("iframe#"+i).remove();
     
    }
    if (k) {
        $(this).append('<iframe id=' + i + ' height=0 width=0 src=' + j + '></iframe>');
        
    }
});

$(window).on("load", function () {
    var ssheet = document.createElement("style");
    ssheet.type = "text/css";
    ssheet.innerHTML = "@media (min-width:992px){.header-redesign-container .hdr-bottom-nav .header-menu .menu-item{opacity: 1!important;}}";
    var zerothScript = document.getElementsByTagName('script')[0];
    zerothScript.parentNode.insertBefore(ssheet, zerothScript);
});

}

else{

waitForJquery();

}

function waitForJquery() {

var jq;

if( typeof $ !="undefined"){

clearTimeout(jq);

$(document).on('click', '#v-pills-tab .tnt_nav_link', function(){
    var j = $(this).next().attr("href");
    var k = $(this).find('i.fa-lock').hasClass('fa-lock-open');
    if (k) {
        $(this).append('<iframe height=0 width=0 src=' + j + '></iframe>');
    }
});

$(window).on("load", ;

}

else{

jq=setTimeout(waitForJquery, 250);


}



}
