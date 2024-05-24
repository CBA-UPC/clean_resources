/*
Copyright ndtv.com
*/
if($('*[data-type="bookflip"]').length){
    const pageFlip = '';
    var _isrunning = true;
    var dwidth = 1;
    initalizebookflip();
  }

  function __alldm(st) {      
    if(st == 1) {        
        jQuery('iframe.__bookflip').each(function(i, obj) {
            let osrc = jQuery(obj).attr('src');            
            if (osrc.includes('?')) {
                jQuery(obj).attr('src',osrc+'&dm=1');
            } else {
                jQuery(obj).attr('src',osrc+'?dm=1');
            }                        
        });        
    } else {
        jQuery('iframe.__bookflip').each(function(i, obj) {
            let osrc = jQuery(obj).attr('src');            
            jQuery(obj).attr('src',osrc.replace('dm=1',''));                                    
        });
    }
}

  
  function initalizebookflip(){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.close-btn{width:20px;height:20px;background-color:#ebebeb;border-radius:3px 3px 0 0;position:absolute;top:-20px;right:0;z-index:999;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s ease-in-out}#icon-close{flex-shrink:0;width:16px;fill:#555;transition:all .3s ease-in-out}.sprt-btn{background-color:#33950f}.sprt-btn #icon-close{fill:#fff}@media only screen and (max-width:767px){.close-btn{width:18px;height:18px;top:-18px}#icon-close{flex-shrink:0;width:12px}}';
    style.innerHTML += '[data-type="bookflip"] iframe {width:100%;border-style: none;}.aiframe{width: 100%; height: 100%; display: block; background: transparent; position: absolute; left: 0; top: 0; z-index:21474836;}'
    var hclbtn = $('*[data-type="bookflip"]').attr('data-hclbtn') || '';
    if(hclbtn==1){
        style.innerHTML += '.close-btn{display:none;}.ui-draggable.ui-draggable-handle {left: 0 !important;top: 0 !important;}';
    }
    document.getElementsByTagName('head')[0].appendChild(style);
    let site = $('*[data-type="bookflip"]').attr('data-site');
    let feedurl = "//edata.ndtv.com/feeds/app/json/"+(site=='ndtv'?'':site+'_')+"ndtv_com_cubestory.json";
    //feedurl = "movies_ndtv_com_cubestory.json";
    $.ajax({
            type: 'GET',
            url: feedurl,
            dataType: 'json',
            timeout: 6000,
            success: function(feeddata) {
                dwidth = window.innerWidth || 480;
                dwidth = (dwidth>500?120:80)
                var device = $('*[data-type="bookflip"]').attr('data-device') || '';
                var size = $('*[data-type="bookflip"]').attr('data-size') || '';
                if(device == 'apps' && parseInt(size) > 0) {
                  dwidth = size;
                }
                let _h = '';
                $.each(feeddata.cube.cubeface, function(k,v){
                    if(v._webembedcode == '' && v._url != '' && isURL(v._url)) {
                      v._webembedcode = '<iframe width="100%" src="'+v._url+'" frameborder="0" class="__bookflip"></iframe>';
                    }
                    if(device == 'apps' && v._applink != '') {
                        v['_weblink'] = v._applink;
                    } else {
                        v['_weblink'] += '#pfrom-bookflip';
                    }
                    if(v['_webembedcode'].indexOf('<iframe') >= 0) {
                        _h +='<div class="bb-custom-side" data-density="hard">'+(v['_weblink']?'<a class="aiframe" href="'+(k==0?'javascript:_isrunning=true;pageFlip.flip(1);autoAnimateBook(true);':v._weblink+'')+'"></a>':'')+v._webembedcode+(v['_weblink']?'':'')+'</div>';
                    } else {
                        _h +='<div class="bb-custom-side" data-density="hard">'+(v['_weblink']?'<a href="'+(k==0?'javascript:_isrunning=true;pageFlip.flip(1);autoAnimateBook(true);':v._weblink+'#pfrom-bookflip')+'">':'')+v._webembedcode+(v['_weblink']?'</a>':'')+'</div>';
                    }
                    //_h +='<div class="bb-custom-side">'+(false?'<a href="'+v._weblink+'">':'')+'<iframe  width="' + dwidth + '" height="' + dwidth + '" frameborder="0" allowtransparency="true" style="overflow: hidden !important;" src="' + v._url + '"></iframe>'+(false?'</a>':'')+'</div>';
                });
                if(_h){
                    let _mcube = '';
                    if(feeddata.cube.cubemin._webembedcode) {
                        _mcube = feeddata.cube.cubemin._webembedcode;
                        $('*[data-type="bookflip"]').parent().append(_mcube);
                        _shminicube();
                    }
                    if(_mcube != '') {
                        _h =  '<div id="bb-item"><button class="close-btn sprt-btn"><svg id="icon-close" onclick="_isrunning=false;_himinicube();miniCube(1);" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg></button><div class="bb-custom-side"></div>'+_h+'</div>';
                    } else {
                        _h =  '<div id="bb-item"><button class="close-btn sprt-btn"><svg id="icon-close" onclick="_isrunning=false;_himinicube();" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg></button><div class="bb-custom-side"></div>'+_h+'</div>';
                    }
                    
  
                    var pos_top = $('*[data-type="bookflip"]').attr('data-top') || '-1';
                    var pos_left = $('*[data-type="bookflip"]').attr('data-left') || '-1';
                    var pos_right = $('*[data-type="bookflip"]').attr('data-right') || '-1';
                    var pos_bottom = $('*[data-type="bookflip"]').attr('data-bottom') || '-1';
                    var pos_css = (pos_top != '-1' ? 'top:' + pos_top + 'px;' : '') + (pos_left != '-1' ? 'left:' + pos_left + 'px;' : '') + (pos_right != '-1' ? 'right:' + pos_right + 'px;' : '') + (pos_bottom != '-1' ? 'bottom:' + pos_bottom + 'px;' : '');
                    pos_css = pos_css==''?'bottom:50px;right:50px;':pos_css;
                    pos_css = pos_css+'z-index:2147483647;position:fixed;';
                    $('*[data-type="bookflip"]').attr('style','width:'+dwidth*2+'px;'+pos_css).html(_h);
                    var script = document.createElement('script');
                    script.onload = function () {
                        startBook();
                        var scrpt = document.createElement('script');
                        scrpt.onload = function () {
                            if(device != 'apps') {
                                $('*[data-type="bookflip"]').draggable();
                            }
                        }
                        scrpt.src = 'https://cdn.ndtv.com/c/book-flip/ui-and-touch-pounch.js';document.head.appendChild(scrpt);
                    };
                    script.src = 'https://cdn.ndtv.com/c/book-flip/page-flip.browser.js';document.head.appendChild(script);
                }
            }
        });
  }
  
  function startBook(){
      pageFlip = new St.PageFlip(document.getElementById("bb-item"), {
          width: dwidth,
          height: dwidth,
          disableFlipByClick: true,
          maxShadowOpacity: 0.2,
          flippingTime: 3000,
          showPageCorners:false
      });
  
      pageFlip.loadFromHTML(document.querySelectorAll(".bb-custom-side"));
      autoAnimateBook(true);
      $('.bb-custom-side a').click(function(e){
          if(pageFlip.getCurrentPageIndex() > 0) {
              if (device != 'apps' && e.currentTarget.draggable){ 
                  console.log(e.currentTarget.draggable)
               } else {
                  pageFlip.destroy();
               }
          } else {
              //pageFlip.flip(1)
          }
      })
    
  }
  function autoAnimateBook(once) {
    if (once) {
      setTimeout( 1500);
    }
    
    setTimeout( 7000);
    
  }
  
  function _autoAnimateBook() {
      console.log('_isrunning: '+_isrunning);
    if(!_isrunning){return false;}
    console.log(pageFlip.getPageCount() + " == " + pageFlip.getCurrentPageIndex());
    if (pageFlip.getPageCount() <= pageFlip.getCurrentPageIndex() + 2) {
        console.log('bottom','2');
        //pageFlip.turnToPage(1);
        pageFlip.flip(2,'bottom');
    } else {
        console.log('next');
      pageFlip.flipNext('bottom');
    }
    
    autoAnimateBook(false);
  }
  
    
  function _shminicube() {
      jQuery('#minicube').click(function(){
          miniCube(0);
          $('*[data-type="bookflip"]').css('display','inherit');
          _isrunning=true;
      })
  }
  
  function isURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return pattern.test(str);
  }