const WHITELIST_PARsecurepubads", "adnxs.com", "criteo", "google", "doubleclick", "pagead2", 'ampproject', 'rubicon'];
const SCRIPT_TAG = 'SCRIPT';
const IFRAME_TAG = 'IFRAME';
const LINK_TAG = 'LINK';

function addUnblockiaTrueToUrl(url) {
  const u = url.startsWith("//") ? 'https:' + url : url;
  try {
    const formattedUrl = new URL(u);
    if (!formattedUrl.search.includes(WHITELIST_PARAM)) {
      if (!formattedUrl.search) {
        return u + '?' + WHITELIST_PARAM
      } else {
        return u + '?' + WHITELIST_PARAM
      }
    }
  } catch (e) {
     if (!u.includes(WHITELIST_PARAM)) {
       return u + '?' + WHITELIST_PARAM
     }
  }
}

function initProxies() {
  try {

    const sendBeaconProxy = navigator.sendBeacon;
    navigator.sendBeacon = function() {
      if (arguments[0].includes('bidder.criteo')) {
        arguments[0] = addUnblockiaTrueToUrl(arguments[0])
      }
      return sendBeaconProxy.apply(this, arguments);
    };

    const appendChildProxy = window.HTMLElement.prototype.appendChild;
    window.HTMLElement.prototype.appendChildOld = window.HTMLElement.prototype.appendChild;
    window.HTMLElement.prototype.appendChild = function() {
      if (arguments[0].tagName === LINK_TAG) {
        arguments[0].href = addUnblockiaTrueToUrl(arguments[0].href)
      }
      if ([SCRIPT_TAG, IFRAME_TAG].includes(arguments[0].tagName)) {
        if (arguments[0].src && arguments[0].src !== 'about:blank' && !arguments[0].src.includes('pubstack')) {
          arguments[0].src = addUnblockiaTrueToUrl(arguments[0].src)
        }
      }
      return appendChildProxy.apply(this, arguments);
    };
    window.HTMLElement.prototype.insertBeforeproxyOld = window.HTMLElement.prototype.insertBefore;
    const insertBeforeproxy = window.HTMLElement.prototype.insertBefore;
    window.HTMLElement.prototype.insertBefore = function() {
      if (arguments[0].tagName === LINK_TAG) {
        arguments[0].href = addUnblockiaTrueToUrl(arguments[0].href)
      }
      if ([SCRIPT_TAG, IFRAME_TAG].includes(arguments[0].tagName)) {

        if (arguments[0].src && arguments[0].src !== 'about:blank') {
          const url = new URL(arguments[0].src);
          if (!url.search) {
            arguments[0].src = arguments[0].src + '?' + WHITELIST_PARAM
          } else {
            arguments[0].src = arguments[0].src + '&' + WHITELIST_PARAM
          }
        }
      }
      return insertBeforeproxy.apply(this, arguments);
    };

    const appendProxy = window.HTMLElement.prototype.append;
    window.HTMLElement.prototype.appendOld = window.HTMLElement.prototype.append;
    window.HTMLElement.prototype.append = function() {
      if (arguments[0].tagName === LINK_TAG) {
        arguments[0].href = addUnblockiaTrueToUrl(arguments[0].href)
      }
      if ([SCRIPT_TAG, IFRAME_TAG].includes(arguments[0].tagName)) {
        if (arguments[0].src && arguments[0].src !== 'about:blank') {
          const url = new URL(arguments[0].src);
          if (!url.search) {
            arguments[0].src = arguments[0].src + '?' + WHITELIST_PARAM
          } else {
            arguments[0].src = arguments[0].src + '&' + WHITELIST_PARAM
          }
        }
      }
      return appendProxy.apply(this, arguments);
    };

    const proxiedOpen = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.openOld = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function() {
      let newArg = arguments[1];
      if (TO_INTERCEPT_STRINGS.some(x => arguments[1].includes(x))) {
        newArg = addUnblockiaTrueToUrl(arguments[1]);
      }
      return proxiedOpen.apply(this, [arguments[0], newArg]);
    };
    
    window.fetch = new Proxy(window.fetch, {
      apply: function (target, that, args) {
        if (args && args[0]) {
          if (TO_INTERCEPT_STRINGS.some(x => args[0].includes(x))) {
            args[0] = addUnblockiaTrueToUrl(args[0]) 
          }
        }
          
        let temp = target.apply(that, args);
        return temp;
      },
    });

  } catch (e) {
  }
}
text.bad,#pass1.bad{border-color:#f78b53}#pass1-text.good,#pass1.good{border-color:#ffc733}#pass1-text.strong,#pass1.strong{border-color:#83c373}.acf-relationship .selection li{position:relative}.acf-relationship .selection .choices .acf-icon{position:absolute;top:4px;display:none;opacity:1}body:not(.rtl) .acf-relationship .selection .choices .acf-icon{right:7px}body.rtl .acf-relationship .selection .choices .acf-icon{left:7px}.acf-relationship .selection .choices li:hover span.acf-rel-item.disabled{opacity:1;color:rgb(208,208,208,.75)}.acf-relationship .selection .choices li:hover span.acf-rel-item.temporary{color:rgb(208,208,208,1)}.acf-relationship .selection .choices li span.acf-rel-item:hover>.acf-icon{display:inline-block}body:not(.rtl) .acf-relationship .selection .values .acf-icon.edit-rel-post{right:30px}body.rtl .acf-relationship .selection .values .acf-icon.edit-rel-post{left:30px}.related-term .render-form{display:none;margin:auto 3px;border:none;vertical-align:bottom}.related-term:hover .render-form{display:inline-block}.acf-relationship .selection .acf-icon.shown{display:inline-block!important}div.loading{text-align:center}.fea-modal-inner span.acf-icon{border:none}.fea-submit-button{cursor:pointer}button.disabled:not(.temporary){color:#a0a5aa!important;background:#f7f7f7!important;border-color:#ddd!important;box-shadow:none!important;text-shadow:none!important;cursor:default}.file-drop input{visibility:hidden;color:transparent;flex-grow:1;width:0}.file-drop{position:relative;display:inline-block;cursor:pointer;height:2.5rem}.file-custom{position:absolute;top:.075rem;left:0;z-index:6;width:max-content}.rtl .file-custom{right:0;left:auto}.acf-uploads .button{display:inline-block}.upload-fail{color:#bb2124;font-size:100px;line-height:1;position:absolute;top:0;left:0;text-align:center;margin:0;width:100%}.not-valid img{opacity:.5}.fea-uploads-attachment.not-valid .errors{position:absolute;bottom:0;color:#bb2124;padding:0 15px;background:rgba(255,255,255,.6);font-weight:600;line-height:1}.form-load{position:absolute;top:50%;left:50%}.form-load .acf-spinner{position:sticky;top:50px;width:30px;height:30px;background-size:30px 30px;margin-left:-15px}a.change-step{cursor:pointer}.uploads-progress{float:right;height:22px;margin:0;width:100%;line-height:2em;padding:0;overflow:hidden;border-radius:22px;background:#ddd;box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.uploads-progress .bar{z-index:9;width:0;height:100%;margin-top:-22px;border-radius:22px;background-color:#0073aa;box-shadow:inset 0 0 2px rgba(0,0,0,.3)}.uploads-progress .percent{z-index:10;position:relative;padding:0;color:#fff;text-align:center;line-height:22px;font-weight:400;text-shadow:0 1px 2px rgba(0,0,0,.2)}.acf-uploading .margin{opacity:.5}.change-step-loading{position:absolute;top:100px;left:50%;right:50%;width:30px;height:30px;margin-left:-15px;margin-right:-15px;background-size:30px 30px}.acf-loading{margin:auto 5px}.draft-saved{height:auto;margin:auto 5px;color:#49ad52}.preview-display{background:repeating-linear-gradient(325deg,rgba(0,0,0,.05),rgba(0,0,0,.05) 1px,transparent 2px,transparent 9px);opacity:.5}.quarter-width>div{width:25%}.acf-custom_terms-input{display:none!important}.gi-file-name{background:#f9f9f9;color:#555;position:absolute;bottom:0;top:auto;width:100%;padding:3px}.disabled.temporary{color:#000!important}.acf-field[data-dynamic_values="1"] .acf-input-wrap{overflow:initial}.acf-list-items>table{margin:0 0 8px;background:#F9F9F9}.acf-list-items .acf-row-handle{width:16px;text-align:center!important;vertical-align:middle!important;position:relative}.acf-list-items .acf-row-handle .acf-icon{display:none;position:absolute;top:0;margin:-8px 0 0 -2px}.acf-list-items .acf-row-handle .acf-icon.-minus{top:50%}body.browser-msie .acf-list-items .acf-row-handle .acf-icon.-minus{top:25px}.acf-list-items .acf-row-handle.order{background:#f4f4f4;cursor:move;color:#aaa;text-shadow:#fff 0 1px 0}.acf-list-items .acf-row-handle.order:hover{color:#666}.acf-list-items .acf-row-handle.order+td{border-left-color:#DFDFDF}.acf-list-items .acf-row-handle.remove{background:#F9F9F9;border-left-color:#DFDFDF}.acf-list-items th.acf-row-handle:before{content:"";width:16px;display:block;height:1px}.acf-list-items .acf-row.acf-clone{display:none!important}.acf-list-items .acf-row:hover>.acf-row-handle .acf-icon,.acf-list-items .acf-row.-hover>.acf-row-handle .acf-icon{display:block}.acf-list-items .acf-row:hover>.acf-row-handle .acf-icon.show-on-shift,.acf-list-items .acf-row.-hover>.acf-row-handle .acf-icon.show-on-shift{display:none}body.acf-keydown-shift .acf-list-items .acf-row:hover>.acf-row-handle .acf-icon.show-on-shift,body.acf-keydown-shift .acf-list-items .acf-row.-hover>.acf-row-handle .acf-icon.show-on-shift{display:block}body.acf-keydown-shift .acf-list-items .acf-row:hover>.acf-row-handle .acf-icon.hide-on-shift,body.acf-keydown-shift .acf-list-items .acf-row.-hover>.acf-row-handle .acf-icon.hide-on-shift{display:none}.acf-list-items>table>tbody>tr.ui-sortable-helper{box-shadow:0 1px 5px rgba(0,0,0,.2)}.acf-list-items>table>tbody>tr.ui-sortable-placeholder{visibility:visible!important}.acf-list-items>table>tbody>tr.ui-sortable-placeholder td{background:#F9F9F9}.acf-list-items.-row>table>tbody>tr>td,.acf-list-items.-block>table>tbody>tr>td{border-top-color:#E1E1E1}.acf-list-items.-empty>table>thead>tr>th{border-bottom:0 none}.acf-list-items.-empty.-row>table,.acf-list-items.-empty.-block>table{display:none}.acf-list-items .acf-row.-collapsed>.acf-field{display:none!important}.acf-list-items .acf-row.-collapsed>td.acf-field.-collapsed-target{display:table-cell!important}.acf-list-items .acf-row.-collapsed>.acf-fields>*{display:none!important}.acf-list-items .acf-row.-collapsed>.acf-fields>.acf-field.-collapsed-target{display:block!important}.acf-list-items .acf-row.-collapsed>.acf-fields>.acf-field.-collapsed-target[data-width]{float:none!important;width:auto!important}.acf-list-items.-table .acf-row.-collapsed .acf-field.-collapsed-target{border-left-color:#dfdfdf}.acf-list-items.-max .acf-icon[data-event="add-row"]{display:none!important}.acf-related-terms-field{position:relative}.acf-related-terms-field .categorychecklist-holder{border:#ccd0d4 solid 1px;border-radius:3px;max-height:200px;overflow:auto}.acf-related-terms-field .acf-checkbox-list{margin:0;padding:10px}.acf-related-terms-field .acf-checkbox-list ul.children{padding-left:18px}.acf-related-terms-field:hover .acf-actions{display:block}.acf-related-terms-field[data-ftype=select] .acf-actions{padding:0;margin:-9px}.toplevel_page_fea-settings .acf-tab-wrap{background:none!important}.toplevel_page_fea-settings .acf-tab-button{background:#dcdcde!important}.toplevel_page_fea-settings li.active .acf-tab-button{background:none!important}.toplevel_page_fea-settings .acf-tab-wrap{background:none!important}.toplevel_page_fea-settings .acf-tab-button{background:#dcdcde!important}.toplevel_page_fea-settings li.active .acf-tab-button{background:none!important}.frontend-admin-addon-form{padding:20px}.acf-step-fields{width:100%;padding:15px 12px}.frontend-form .acf-fields>.acf-field{border-top:none}.frontend-form .acf-field[data-width]{float:none!important}.frontend-form.disabled{pointer-events:none;opacity:.5}.fea-list-item{text-align:center;border:solid 1px #e3e3e3;padding:15px;position:relative}.fea-list-item .actions{position:absolute;top:5px;right:5px}.fea-list-item .meta p{width:100%;font-size:17px;margin:auto}.fea-list-item .item-title{margin:10px 2px;display:inline-block;font-size:22px}.fea-display-field{position:relative;display:inline-block}.fea-display-field.editing:hover{border:1px solid #2a9bd9}.fea-display-field i.action{cursor:pointer;position:absolute;font-size:25px;width:25px;height:25px;right:10px}.fea-display-field .fea-inline-edit{display:none}.editing:hover .fea-inline-edit{color:#2a9bd9;display:inline-block;position:absolute;top:0;right:0}.fea-inline-cancel{color:#a00;background:#e5e5e5}.fixed-center{position:fixed;width:200px;height:200px;top:50%;left:50%;margin-top:-100px;margin-left:-100px}.file-meta-data{display:none}.file-meta-data img{max-width:50%;max-height:100px}.fea-uploads{border:#ccd0d4 solid 1px;height:400px;position:relative}.fea-uploads .fea-uploads-main{position:absolute;top:0;right:0;bottom:0;left:0;background:#fff;z-index:2}.fea-uploads .fea-uploads-attachments{position:absolute;top:0;right:0;bottom:48px;left:0;padding:5px;overflow:auto;overflow-x:hidden}.fea-uploads .fea-uploads-attachment{width:25%;float:left;cursor:pointer;position:relative}.fea-uploads .fea-uploads-attachment .margin{margin:5px;border:#d5d9dd solid 1px;position:relative;overflow:hidden;background:#eee}.fea-uploads .fea-uploads-attachment .margin:before{content:"";display:block;padding-top:100%}.fea-uploads .fea-uploads-attachment .thumbnail{position:absolute;top:0;left:0;width:100%;height:100%;transform:translate(50%,50%)}html[dir="rtl"] .fea-uploads .fea-uploads-attachment .thumbnail{transform:translate(-50%,50%)}.fea-uploads .fea-uploads-attachment .thumbnail img{display:block;height:auto;max-height:100%;width:auto;transform:translate(-50%,-50%)}html[dir="rtl"] .fea-uploads .fea-uploads-attachment .thumbnail img{transform:translate(50%,-50%)}.fea-uploads .fea-uploads-attachment .filename{position:absolute;bottom:0;left:0;right:0;padding:5%;background:#F4F4F4;background:rgba(255,255,255,.8);border-top:#DFDFDF solid 1px;font-weight:bold;text-align:center;word-wrap:break-word;max-height:90%;overflow:hidden}.fea-uploads .fea-uploads-attachment .actions{position:absolute;top:0;right:0;display:none}.fea-uploads .fea-uploads-attachment:hover .actions{display:block}.fea-uploads .fea-uploads-attachment.ui-sortable-helper .margin{border:none;box-shadow:0 1px 3px rgba(0,0,0,.3)}.fea-uploads .fea-uploads-attachment.ui-sortable-placeholder .margin{background:#F1F1F1;border:none}.fea-uploads .fea-uploads-attachment.ui-sortable-placeholder .margin *{display:none!important}.fea-uploads .fea-uploads-attachment.active .margin{box-shadow:0 0 0 1px #FFFFFF,0 0 0 5px #0073aa}.fea-uploads .fea-uploads-attachment.-icon .thumbnail img{transform:translate(-50%,-70%)}html[dir="rtl"] .fea-uploads .fea-uploads-attachment{float:right}.fea-uploads.sidebar-open .fea-uploads-attachment .actions{display:none}.fea-uploads.sidebar-open .fea-uploads-side{z-index:2}.fea-uploads .fea-uploads-toolbar{position:absolute;right:0;bottom:0;left:0;padding:10px;border-top:#d5d9dd solid 1px;background:#fff;max-height:33px}.fea-uploads .fea-uploads-toolbar .acf-hl li{line-height:24px}.fea-uploads .fea-uploads-toolbar .bulk-actions-select{width:auto;margin:0 1px 0 0}.fea-uploads .fea-uploads-side{position:absolute;top:0;right:0;bottom:0;width:0;background:#F9F9F9;border-left:#ccd0d4 solid 1px;z-index:1;overflow:hidden}.fea-uploads .fea-uploads-side .fea-uploads-side-inner{position:absolute;top:0;left:0;bottom:0;width:349px}.fea-uploads .fea-uploads-side-info{position:relative;width:100%;padding:10px;margin:-10px 0 15px -10px;background:#F1F1F1;border-bottom:#DFDFDF solid 1px}.fea-uploads .fea-uploads-side-info:after{display:block;clear:both;content:""}html[dir="rtl"] .fea-uploads .fea-uploads-side-info{margin-left:0;margin-right:-10px}.fea-uploads .fea-uploads-side-info img{float:left;width:auto;max-width:65px;max-height:65px;margin:0 10px 1px 0;background:#FFFFFF;padding:3px;border:#ccd0d4 solid 1px;border-radius:1px}html[dir="rtl"] .fea-uploads .fea-uploads-side-info img{float:right;margin:0 0 0 10px}.fea-uploads .fea-uploads-side-info p{font-size:13px;line-height:15px;margin:3px 0;word-break:break-all;color:#666}.fea-uploads .fea-uploads-side-info p strong{color:#000}.fea-uploads .fea-uploads-side-info a{text-decoration:none}.fea-uploads .fea-uploads-side-info a.fea-uploads-edit{color:#21759b}.fea-uploads .fea-uploads-side-info a.fea-uploads-remove{color:#bc0b0b}.fea-uploads .fea-uploads-side-info a:hover{text-decoration:underline}.fea-uploads .fea-uploads-side-data{position:absolute;top:0;right:0;bottom:48px;left:0;overflow:auto;overflow-x:inherit;padding:10px}.fea-uploads .fea-uploads-side-data .acf-label,.fea-uploads .fea-uploads-side-data th.label{font-size:14px;line-height:25px;padding:0!important;width:auto!important;vertical-align:top;margin:0}.fea-uploads .fea-uploads-side-data .acf-field .description{font-size:14px;margin-top:0}.fea-uploads .fea-uploads-side-data .acf-field{padding:8px 4px!important}.fea-uploads .fea-uploads-side-data textarea{min-height:0;height:60px}.fea-uploads .fea-uploads-side-data p.help{font-size:12px}.fea-uploads .fea-uploads-side-data p.help:hover{font-weight:normal}.fea-uploads[data-columns="1"] .fea-uploads-attachment{width:100%}.fea-uploads[data-columns="2"] .fea-uploads-attachment{width:50%}.fea-uploads[data-columns="3"] .fea-uploads-attachment{width:33.333%}.fea-uploads[data-columns="4"] .fea-uploads-attachment{width:25%}.fea-uploads[data-columns="5"] .fea-uploads-attachment{width:20%}.fea-uploads[data-columns="6"] .fea-uploads-attachment{width:16.666%}.fea-uploads[data-columns="7"] .fea-uploads-attachment{width:14.285%}.fea-uploads[data-columns="8"] .fea-uploads-attachment{width:12.5%}.fea-uploads .ui-resizable-handle{display:block;position:absolute}.fea-uploads .ui-resizable-s{bottom:-5px;cursor:ns-resize;height:7px;left:0;width:100%}.acf-fields.grouped{gap:10px}.acf-fields.grouped .acf-field{padding:0!important}.acf-display-values{width:100%}.field-group-settings-tab{width:100%}#acf-field-group-options .frontend-block .acf-fields>.acf-field,#acf-field-group-options .frontend-block .field-group-settings-tab .acf-field:last-of-type{padding:16px 20px}.acf-field-settings .acf-field-list-items .acf-field{padding-left:0;padding-right:0;width:auto}.fea-single-plan>a{display:none;width:10px;height:10px}.fea-single-plan:hover>a{display:inline-block}.fea-plan{margin-bottom:10px}.linkedin.com/company/forbesecuador" target="_blank" rel="noopener" aria-label="Linkedin"><i class="fab fa-linkedin"></i></a>
                     
                                            <a href="https://www.flickr.com/photos/195065184@N06/" target="_blank" rel="noopener" aria-label="Flickr"><i class="fab fa-flickr"></i></a>
                     
                                            <a href="https://www.tiktok.com/@forbesecuador?lang=es" target="_blank" rel="noopener" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
                                     
                </li>            
            </ul>
            <ol class="secundario">
                                                                                                <li><a href="https://www.forbes.com.ec/terminos-condiciones" title="TÈrminos y condiciones" >TÈrminos y condiciones</a></li>
                                                                                <li><a href="https://www.forbes.com.ec/politica-privacidad" title="Legales" >Legales</a></li>
                                                </ol>
        </nav>
        <p>&copy; 2024. Forbes Ecuador. <br> Todos los derechos reservados.</p>
    </div>
</div>            

<div class="search-area">
	<div class="log"><img src="https://statics.forbes.com.ec/forbes/img/global/forbes.ec.svg" alt="Forbes Ecuador"></div>
	<div class="box">
        <form id="search" method="get" action="https://www.forbes.com.ec/search">
            <input type="text" name="q" class="txt" placeholder="Buscar...">
            <button type="submit" aria-label="search"><i class="fas fa-arrow-right"></i></button>
        </form>
	</div>
	<a href="#" class="close-search"><i class="far fa-times-circle"></i></a>
</div>
    <div class="contoy">
    		<div class="front">
		<div class="wrapper">
												<div class="row">
     <div class="col-lg-12">
        <div class="my_box">
	    	        	    
    <div class="statics_module">
        <div id='div-gpt-ad-1625234950392-2' style='min-width: 970px; min-height: 90px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1625234950392-2'); });</script></div>
    </div>
  
          
   	
	        
	    	        	    <section class="micro-news negro">
        <div class="row">
                        <div class="col-md-12">
                <span class="tag">⁄LTIMAS NOTICIAS</span>
            </div>
                        <div class="col-md-12">
                <div class="slider-urgente">
                    <div class="swiper-wrapper">
                                                                    
                        <div class="swiper-slide">
                            <article>
                                <p class="date">1 dÌa</p>
                                <h2 class="tit"><a href="https://www.forbes.com.ec/liderazgo/historia-superacion-mesero-bartender-director-proyectos-accenture-eeuu-n46701" title="Historia de superaciÛn: De mesero y bartender a director de proyectos en Accenture, en EE.UU.">Historia de superaciÛn: De mesero y bartender a director de proyectos en Accenture, en EE.UU.</a></h2>
                            </article>
                        </div>
                                                                    
                        <div class="swiper-slide">
                            <article>
                                <p class="date">1 dÌa</p>
                                <h2 class="tit"><a href="https://www.forbes.com.ec/money/los-cinco-principales-sectores-invertir-2024-n46667" title="Los cinco principales sectores para invertir en 2024">Los cinco principales sectores para invertir en 2024</a></h2>
                            </article>
                        </div>
                                                                    
                        <div class="swiper-slide">
                            <article>
                                <p class="date">1 dÌa</p>
                                <h2 class="tit"><a href="https://www.forbes.com.ec/movimiento-inspirador/como-hizo-esta-directora-fotografia-ecuatoriana-abrirse-camino-hollywood-n46567" title="øCÛmo hizo esta directora de fotografÌa ecuatoriana para abrirse camino en Hollywood?">øCÛmo hizo esta directora de fotografÌa ecuatoriana para abrirse camino en Hollywood?</a></h2>
                            </article>
                        </div>
                                                                    
                        <div class="swiper-slide">
                            <article>
                                <p class="date">2 dÌas</p>
                                <h2 class="tit"><a href="https://www.forbes.com.ec/movimiento-inspirador/la-primera-mujer-kichwa-salasaca-mit-n46569" title="La primera mujer Kichwa Salasaca en el MIT">La primera mujer Kichwa Salasaca en el MIT</a></h2>
                            </article>
                        </div>
                                            </div>                    
                </div>
            </div>
        </div>
    </section>


  
          
   	
	        
</div>                       
</div>    

 
</div>   
                                  
									<div class="row">
     <div class="col-lg-8" > 
        <div class="my_box">
	    	        	            <section class="destacado-big primaryColor">
          <figure>
            <a href="https://www.forbes.com.ec/millonarios/tiene-mas-120-concesionarios-eeuu-pero-pocos-saben-sobre-el-quien-terry-taylor-n46703" title="Tiene m·s de 120 concesionarios en EE.UU. pero pocos saben sobre Èl: quiÈn es Terry Taylor" class="wlz">
                <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a582a05734e__825x507.webp" width="825" height="507" alt="Tiene m·s de 120 concesionarios en EE.UU. pero pocos saben sobre Èl: quiÈn es Terry Taylor">
            </a>
            <figcaption class="tag">Millonarios</figcaption>
          </figure>
          <article>
            <h1 class="tit"><a href="https://www.forbes.com.ec/millonarios/tiene-mas-120-concesionarios-eeuu-pero-pocos-saben-sobre-el-quien-terry-taylor-n46703" title="Tiene m·s de 120 concesionarios en EE.UU. pero pocos saben sobre Èl: quiÈn es Terry Taylor">Tiene m·s de 120 concesionarios en EE.UU. pero pocos saben sobre Èl: quiÈn es Terry Taylor</a></h1>
                                  </article>
        </section>
      
          
   	
	        
	    	        	    <div class="grilla-comon">
    <div class="row">
                    <div class="col-md-6">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/liderazgo/historia-superacion-mesero-bartender-director-proyectos-accenture-eeuu-n46701" title="Historia de superaciÛn: De mesero y bartender a director de proyectos en Accenture, en EE.UU." class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a026f950070__400x260.webp" alt="Historia de superaciÛn: De mesero y bartender a director de proyectos en Accenture, en EE.UU." width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/liderazgo/historia-superacion-mesero-bartender-director-proyectos-accenture-eeuu-n46701" title="Historia de superaciÛn: De mesero y bartender a director de proyectos en Accenture, en EE.UU.">Historia de superaciÛn: De mesero y bartender a director de proyectos en Accenture, en EE.UU.</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/daniela-garcia-a2175">Daniela GarcÌa</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                    <div class="col-md-6">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/money/los-cinco-principales-sectores-invertir-2024-n46667" title="Los cinco principales sectores para invertir en 2024" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a54eb0de3bf__400x260.webp" alt="Los cinco principales sectores para invertir en 2024" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/money/los-cinco-principales-sectores-invertir-2024-n46667" title="Los cinco principales sectores para invertir en 2024">Los cinco principales sectores para invertir en 2024</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/jason-kirsch-a2570">Jason Kirsch</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                    <div class="col-md-6">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/money/un-informe-vincula-baidu-ejercito-china-derrumbaron-acciones-empresa-n46686" title="Un informe que vincula Baidu con el ejÈrcito de China &quot;derrumbaron&quot; las acciones de la empresa" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a58bd904e32__400x260.webp" alt="Un informe que vincula Baidu con el ejÈrcito de China &quot;derrumbaron&quot; las acciones de la empresa" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/money/un-informe-vincula-baidu-ejercito-china-derrumbaron-acciones-empresa-n46686" title="Un informe que vincula Baidu con el ejÈrcito de China &quot;derrumbaron&quot; las acciones de la empresa">Un informe que vincula Baidu con el ejÈrcito de China &quot;derrumbaron&quot; las acciones de la empresa</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/yue-wang-a334">Yue Wang</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                    <div class="col-md-6">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/podcast/la-industria-cannabis-psicoactivo-mueve-us-5-millones-ecuador-n46663" title="&#039;La industria del cannabis no psicoactivo mueve hasta US$ 5 millones en Ecuador&#039;" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a56b4ba78ce__400x260.webp" alt="&#039;La industria del cannabis no psicoactivo mueve hasta US$ 5 millones en Ecuador&#039;" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/podcast/la-industria-cannabis-psicoactivo-mueve-us-5-millones-ecuador-n46663" title="&#039;La industria del cannabis no psicoactivo mueve hasta US$ 5 millones en Ecuador&#039;">&#039;La industria del cannabis no psicoactivo mueve hasta US$ 5 millones en Ecuador&#039;</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/pedro-maldonado-ordonez-a551">Pedro Maldonado OrdÛÒez</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                    <div class="col-md-6">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/innovacion/que-enfermedad-x-oms-podria-estar-preparandose-una-proxima-pandemia-n46698" title="QuÈ es la enfermedad X y por quÈ la OMS podrÌa estar prepar·ndose para una prÛxima pandemia" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a15071d083e__400x260.webp" alt="QuÈ es la enfermedad X y por quÈ la OMS podrÌa estar prepar·ndose para una prÛxima pandemia" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/innovacion/que-enfermedad-x-oms-podria-estar-preparandose-una-proxima-pandemia-n46698" title="QuÈ es la enfermedad X y por quÈ la OMS podrÌa estar prepar·ndose para una prÛxima pandemia">QuÈ es la enfermedad X y por quÈ la OMS podrÌa estar prepar·ndose para una prÛxima pandemia</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/brian-bushard-a1327">Brian Bushard</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                    <div class="col-md-6">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/negocios/el-foro-economico-mundial-advierte-desinformacion-sera-riesgo-global-mas-grave-proximos-dos-anos-n46679" title="El Foro EconÛmico Mundial advierte que la desinformaciÛn ser· el &quot;riesgo global m·s grave&quot; los prÛximos dos aÒos" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a5a5c226364__400x260.webp" alt="El Foro EconÛmico Mundial advierte que la desinformaciÛn ser· el &quot;riesgo global m·s grave&quot; los prÛximos dos aÒos" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/negocios/el-foro-economico-mundial-advierte-desinformacion-sera-riesgo-global-mas-grave-proximos-dos-anos-n46679" title="El Foro EconÛmico Mundial advierte que la desinformaciÛn ser· el &quot;riesgo global m·s grave&quot; los prÛximos dos aÒos">El Foro EconÛmico Mundial advierte que la desinformaciÛn ser· el &quot;riesgo global m·s grave&quot; los prÛximos dos aÒos</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/mark-littler-a2483">Mark Littler</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                    <div class="col-md-6">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/liderazgo/tres-formas-arreglar-una-estrategia-contenido-esta-logrando-frutos-n46689" title="Tres formas de arreglar una estrategia de contenido que no est· logrando frutos" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a5a086bf59f__400x260.webp" alt="Tres formas de arreglar una estrategia de contenido que no est· logrando frutos" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/liderazgo/tres-formas-arreglar-una-estrategia-contenido-esta-logrando-frutos-n46689" title="Tres formas de arreglar una estrategia de contenido que no est· logrando frutos">Tres formas de arreglar una estrategia de contenido que no est· logrando frutos</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/john-hall-a487">John Hall</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                    <div class="col-md-6">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/millonarios/el-grupo-oxfam-predijo-primer-billonario-historia-llegara-10-anos-n46672" title="El grupo Oxfam predijo que el primer billonario de la historia llegar· en 10 aÒos" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2023/12/crop/657b36cfe3930__400x260.webp" alt="El grupo Oxfam predijo que el primer billonario de la historia llegar· en 10 aÒos" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/millonarios/el-grupo-oxfam-predijo-primer-billonario-historia-llegara-10-anos-n46672" title="El grupo Oxfam predijo que el primer billonario de la historia llegar· en 10 aÒos">El grupo Oxfam predijo que el primer billonario de la historia llegar· en 10 aÒos</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/gonzalo-andres-castillo-a251">Gonzalo AndrÈs Castillo</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                           
    </div>
</div>

  
          
   	
	        
</div>   
</div> 
 <div class="col-lg-4">
        <div class="my_box">
	    	        	   <div class="tabbedPanels">  
        <ul class="tabs">
          <li class=""><a href="#" class="mas active" data-ref="vistas">M·s <span>vistas</span></a></li>
                        <li><a href="#" class="fav" data-ref="fav">Favoritas <span>del editor</span></a></li>
            
        </ul>
        <div class="panelContainer">
            <div class="vistas panel">
                                    <div class="box">
                        <div class="row">
                            <div class="col-3">
                                <span class="circ verde"></span>
                                <p>5785</p>
                            </div>
                            <div class="col-9">
                                <h3 class="tit"><a href="https://www.forbes.com.ec/podcast/la-industria-cannabis-psicoactivo-mueve-us-5-millones-ecuador-n46663" title="&#039;La industria del cannabis no psicoactivo mueve hasta US$ 5 millones en Ecuador&#039;">&#039;La industria del cannabis no psicoactivo mueve hasta US$ 5 millones en Ecuador&#039;</a></h1>
                            </div>
                        </div>
                    </div>
                                    <div class="box">
                        <div class="row">
                            <div class="col-3">
                                <span class="circ verde"></span>
                                <p>5175</p>
                            </div>
                            <div class="col-9">
                                <h3 class="tit"><a href="https://www.forbes.com.ec/columnistas/barriga-llena-barriga-vacia-n46631" title="Barriga llena, barriga vacÌa">Barriga llena, barriga vacÌa</a></h1>
                            </div>
                        </div>
                    </div>
                                    <div class="box">
                        <div class="row">
                            <div class="col-3">
                                <span class="circ verde"></span>
                                <p>5170</p>
                            </div>
                            <div class="col-9">
                                <h3 class="tit"><a href="https://www.forbes.com.ec/movimiento-inspirador/la-primera-mujer-kichwa-salasaca-mit-n46569" title="La primera mujer Kichwa Salasaca en el MIT">La primera mujer Kichwa Salasaca en el MIT</a></h1>
                            </div>
                        </div>
                    </div>
                                    <div class="box">
                        <div class="row">
                            <div class="col-3">
                                <span class="circ verde"></span>
                                <p>3595</p>
                            </div>
                            <div class="col-9">
                                <h3 class="tit"><a href="https://www.forbes.com.ec/money/como-hacerse-rico-siete-consejos-forbes-n23837" title="CÛmo hacerse rico: los siete consejos de Forbes">CÛmo hacerse rico: los siete consejos de Forbes</a></h1>
                            </div>
                        </div>
                    </div>
                                    <div class="box">
                        <div class="row">
                            <div class="col-3">
                                <span class="circ verde"></span>
                                <p>2760</p>
                            </div>
                            <div class="col-9">
                                <h3 class="tit"><a href="https://www.forbes.com.ec/columnistas/revolucionando-cadena-suministro-papel-tecnologias-emergentes-ingenieros-industriales-n46547" title="Revolucionando la Cadena de Suministro: El Papel de las tecnologÌas emergentes y los Ingenieros Industriales">Revolucionando la Cadena de Suministro: El Papel de las tecnologÌas emergentes y los Ingenieros Industriales</a></h1>
                            </div>
                        </div>
                    </div>
                            </div> 
                        <div  class="fav panel" style="display: none">
                                    <div class="item">
                        <div class="row">
                            <div class="col-4">
                                <figure>
                                    <a href="https://www.forbes.com.ec/innovacion/neurociencias-5-formas-optimizar-salud-cerebro-2024-n45919" title="Neurociencias: 5 formas de optimizar la salud del cerebro en 2024" class="wlz">
                                        <img data-src="https://statics.forbes.com.ec/2023/12/crop/658eff3a8c034__106x74.webp" width="106" height="74" alt="Neurociencias: 5 formas de optimizar la salud del cerebro en 2024">
                                    </a>
                                </figure>
                            </div>
                            <div class="col-8">
                                <article>
                                    <h2 class="tit"><a href="https://www.forbes.com.ec/innovacion/neurociencias-5-formas-optimizar-salud-cerebro-2024-n45919" title="Neurociencias: 5 formas de optimizar la salud del cerebro en 2024">Neurociencias: 5 formas de optimizar la salud del cerebro en 2024</a></h1>
                                </article>
                            </div>
                        </div>
                    </div>
                            </div>
                    </div> 
    </div>
  
          
   	
	        
	    	        	<span class="separador"></span>  
          
   	
	        
	    	        	            <div class="columnistas">
                            <h2 class="tit-area"><span>Columnistas</span></h2>
                         
            <div class="box">
                <div class="row">
                    <div class="col-4">
                        <figure>
                            <a href="https://www.forbes.com.ec/columnistas/como-afrontar-conflicto-social-n46568" title="CÛmo afrontar el conflicto social">
                                <img src="https://statics.forbes.com.ec/2022/03/crop/622245241c9de__80x80.webp" alt="SofÌa Zevallos Polo" width="80" height="80" loading="lazy">
                            </a>
                        </figure>
                    </div>
                    <div class="col-8">
                        <article>
                            <h3 class="name"><a href="https://www.forbes.com.ec/autor/sofia-zevallos-polo-a955" title="SofÌa Zevallos Polo">SofÌa Zevallos Polo</a></h3>
                            <p class="puesto"></p>
                            <h2 class="tit"><a href="https://www.forbes.com.ec/columnistas/como-afrontar-conflicto-social-n46568" title="CÛmo afrontar el conflicto social" >CÛmo afrontar el conflicto social</a></h2>
                        </article>
                    </div>
                </div>
            </div>
             
            <div class="box">
                <div class="row">
                    <div class="col-4">
                        <figure>
                            <a href="https://www.forbes.com.ec/columnistas/hablar-gente-n46637" title="Hablar con la gente">
                                <img src="https://statics.forbes.com.ec/2021/11/crop/61985b5595b18__80x80.webp" alt="Pedro Maldonado OrdÛÒez" width="80" height="80" loading="lazy">
                            </a>
                        </figure>
                    </div>
                    <div class="col-8">
                        <article>
                            <h3 class="name"><a href="https://www.forbes.com.ec/autor/pedro-maldonado-ordonez-a551" title="Pedro Maldonado OrdÛÒez">Pedro Maldonado OrdÛÒez</a></h3>
                            <p class="puesto"></p>
                            <h2 class="tit"><a href="https://www.forbes.com.ec/columnistas/hablar-gente-n46637" title="Hablar con la gente" >Hablar con la gente</a></h2>
                        </article>
                    </div>
                </div>
            </div>
             
            <div class="box">
                <div class="row">
                    <div class="col-4">
                        <figure>
                            <a href="https://www.forbes.com.ec/columnistas/revolucionando-cadena-suministro-papel-tecnologias-emergentes-ingenieros-industriales-n46547" title="Revolucionando la Cadena de Suministro: El Papel de las tecnologÌas emergentes y los Ingenieros Industriales">
                                <img src="https://statics.forbes.com.ec/2022/04/crop/624df22fdf161__80x80.webp" alt="Diego BuenaÒo" width="80" height="80" loading="lazy">
                            </a>
                        </figure>
                    </div>
                    <div class="col-8">
                        <article>
                            <h3 class="name"><a href="https://www.forbes.com.ec/autor/diego-buenano-a1044" title="Diego BuenaÒo">Diego BuenaÒo</a></h3>
                            <p class="puesto"></p>
                            <h2 class="tit"><a href="https://www.forbes.com.ec/columnistas/revolucionando-cadena-suministro-papel-tecnologias-emergentes-ingenieros-industriales-n46547" title="Revolucionando la Cadena de Suministro: El Papel de las tecnologÌas emergentes y los Ingenieros Industriales" >Revolucionando la Cadena de Suministro: El Papel de las tecnologÌas emergentes y los Ingenieros Industriales</a></h2>
                        </article>
                    </div>
                </div>
            </div>
             
            <div class="box">
                <div class="row">
                    <div class="col-4">
                        <figure>
                            <a href="https://www.forbes.com.ec/columnistas/barriga-llena-barriga-vacia-n46631" title="Barriga llena, barriga vacÌa">
                                <img src="https://statics.forbes.com.ec/2022/09/crop/63285456ebf89__80x80.webp" alt="Esteban Vivar" width="80" height="80" loading="lazy">
                            </a>
                        </figure>
                    </div>
                    <div class="col-8">
                        <article>
                            <h3 class="name"><a href="https://www.forbes.com.ec/autor/esteban-vivar-a1392" title="Esteban Vivar">Esteban Vivar</a></h3>
                            <p class="puesto"></p>
                            <h2 class="tit"><a href="https://www.forbes.com.ec/columnistas/barriga-llena-barriga-vacia-n46631" title="Barriga llena, barriga vacÌa" >Barriga llena, barriga vacÌa</a></h2>
                        </article>
                    </div>
                </div>
            </div>
             
            <div class="box">
                <div class="row">
                    <div class="col-4">
                        <figure>
                            <a href="https://www.forbes.com.ec/columnistas/el-impuesto-valor-agregado-iva-n46727" title="El Impuesto al Valor Agregado - IVA">
                                <img src="https://statics.forbes.com.ec/2021/08/crop/6116838e7de05__80x80.webp" alt="Diego Almeida Guzm·n" width="80" height="80" loading="lazy">
                            </a>
                        </figure>
                    </div>
                    <div class="col-8">
                        <article>
                            <h3 class="name"><a href="https://www.forbes.com.ec/autor/diego-almeida-guzman-a438" title="Diego Almeida Guzm·n">Diego Almeida Guzm·n</a></h3>
                            <p class="puesto"></p>
                            <h2 class="tit"><a href="https://www.forbes.com.ec/columnistas/el-impuesto-valor-agregado-iva-n46727" title="El Impuesto al Valor Agregado - IVA" >El Impuesto al Valor Agregado - IVA</a></h2>
                        </article>
                    </div>
                </div>
            </div>
                    </div>
    

  
          
   	
	        
	    	        	<div class="module_mm">
            <h4 class="titular-sep"><span>SUMMIT</span></h4>
       
        	<div class="mm_content">
					<a href="https://registro.forbes.com.ec/summit/registro/35f4a8d465e6e1edc05f3d8ab658c551" target="_blank"><img src="https://statics.forbes.com.ec/2024/01/65a56b659f17f.png" loading="lazy" alt="Panelistas mujeres power 2024"></a>
		              
        </div>              
	                
</div>  
          
   	
	        
	    	        	<div class="module_mm">
            <h4 class="titular-sep"><span>°SUSCRÕBETE A LA REVISTA #1 DEL MUNDO!</span></h4>
       
        	<div class="mm_content">
					<a href="https://registro.forbes.com.ec/summit/showFormSuscripcion1" target="_blank"><img src="https://statics.forbes.com.ec/2023/12/6572e70d223b6.png" loading="lazy" alt="Forbes Ecuador 015"></a>
		              
        </div>              
	                
</div>  
          
   	
	        
	    	        	    
    <div class="statics_module">
        <div id='div-gpt-ad-1625234950392-10' style='min-width: 300px; min-height: 600px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1625234950392-10'); });  </script></div>
    </div>
  
          
   	
	        
</div>   
</div>
         
 
</div>   
                                  
									<div class="row">
     <div class="col-lg-12">
        <div class="my_box">
	    	        	    
    <div class="statics_module">
        <div id='div-gpt-ad-1625234950392-3' style='min-width: 970px; min-height: 90px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1625234950392-3'); });</script></div>
    </div>
  
          
   	
	        
	    	        	            <style>
    #forbes .mod-carousel::before {
        background-color:transparent;
        width:auto;
        opacity:inherit;
        position: relative;
    }
    #forbes .mod-carousel .tit-mod {
        color: #000;
    }
    #forbes .mod-carousel .sw-carousel .swiper-slide .item::after {
        background: rgba(255,255,255,0.3);
    }
    #forbes .mod-carousel .sw-carousel .swiper-slide.swiper-slide-active .item::after {
        background: rgba(0,0,0,0.3);
    }
    </style> 
    <section class="mod-carousel cont_2439011" data-item=0>
        <h1 class="tit-mod"></h1>
        <div class="sw-carousel">           
            <div class="swiper-wrapper">
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/macroeconomia/came-solicito-una-modificacion-ley-omnibus-beneficiar-economias-regionales-n46729" title="CAME solicitÛ una modificaciÛn de la Ley ”mnibus para beneficiar a las economÌas regionales" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2024/01/crop/65a6bef44e4ea__400x260.webp" alt="CAME solicitÛ una modificaciÛn de la Ley ”mnibus para beneficiar a las economÌas regionales">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> </h3>
                                <h2 class="tit">CAME solicitÛ una modificaciÛn de la Ley ”mnibus para beneficiar a las economÌas regionales </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/lifestyle/donde-esta-asiento-mas-seguro-avion-n46726" title="øDÛnde est· el asiento m·s seguro en un aviÛn?" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2024/01/crop/65a698baa8fa6__400x260.webp" alt="øDÛnde est· el asiento m·s seguro en un aviÛn?">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> </h3>
                                <h2 class="tit">øDÛnde est· el asiento m·s seguro en un aviÛn? </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/millonarios/unicornios-iniciales-por-algunos-afirman-peter-beck-mas-inteligente-elon-musk-n46724" title="Unicornios iniciales: øPor quÈ algunos afirman que Peter Beck es m·s inteligente que Elon Musk?" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2024/01/crop/65a18fda4b7a8__400x260.webp" alt="Unicornios iniciales: øPor quÈ algunos afirman que Peter Beck es m·s inteligente que Elon Musk?">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> </h3>
                                <h2 class="tit">Unicornios iniciales: øPor quÈ algunos afirman que Peter Beck es m·s inteligente que Elon Musk? </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/today/fuerte-apoyo-fmi-milei-davos-estamos-viendo-progresos-todos-frentes-n46721" title="Fuerte apoyo del FMI a Milei en Davos: ìEstamos viendo progresos en todos los frentesî" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2022/04/crop/6260248e803f6__400x260.webp" alt="Fuerte apoyo del FMI a Milei en Davos: ìEstamos viendo progresos en todos los frentesî">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> </h3>
                                <h2 class="tit">Fuerte apoyo del FMI a Milei en Davos: ìEstamos viendo progresos en todos los frentesî </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/negocios/la-habilidad-mas-importante-jovenes-deben-desarrollar-tener-exito-negocios-vida-n46719" title="La habilidad m·s importante que los jÛvenes deben desarrollar para tener Èxito en los negocios y la vida" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2023/11/crop/655f8dfacbf49__400x260.webp" alt="La habilidad m·s importante que los jÛvenes deben desarrollar para tener Èxito en los negocios y la vida">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> </h3>
                                <h2 class="tit">La habilidad m·s importante que los jÛvenes deben desarrollar para tener Èxito en los negocios y la vida </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/millonarios/este-multimillonario-wall-street-afirma-nunca-haber-leido-libro-sobre-inversiones-como-logro-su-fortuna-n46714" title="Este multimillonario de Wall Street afirma nunca haber leÌdo un solo libro sobre inversiones: cÛmo logrÛ su fortuna" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2023/12/crop/6585b40c09b08__400x260.webp" alt="Este multimillonario de Wall Street afirma nunca haber leÌdo un solo libro sobre inversiones: cÛmo logrÛ su fortuna">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> </h3>
                                <h2 class="tit">Este multimillonario de Wall Street afirma nunca haber leÌdo un solo libro sobre inversiones: cÛmo logrÛ su fortuna </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/money/cuatro-acciones-gran-potencial-recuperacion-n46711" title="Cuatro acciones con gran potencial de recuperaciÛn" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2024/01/crop/65a682a1dc3fb__400x260.webp" alt="Cuatro acciones con gran potencial de recuperaciÛn">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> </h3>
                                <h2 class="tit">Cuatro acciones con gran potencial de recuperaciÛn </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/innovacion/los-10-principales-descubrimientos-revolucionarios-ces-2024-ia-robotica-web3-n46682" title="Los 10 principales descubrimientos revolucionarios en CES 2024: IA, robÛtica, Web3" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2024/01/crop/65a55d07d884d__400x260.webp" alt="Los 10 principales descubrimientos revolucionarios en CES 2024: IA, robÛtica, Web3">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> </h3>
                                <h2 class="tit">Los 10 principales descubrimientos revolucionarios en CES 2024: IA, robÛtica, Web3 </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/negocios/estos-son-autos-electricos-nuevos-usados-mas-vendidos-ee-uu-n46675" title="Estos son los autos elÈctricos nuevos y usados m·s vendidos en EE. UU." class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2024/01/crop/65a582f9e5721__400x260.webp" alt="Estos son los autos elÈctricos nuevos y usados m·s vendidos en EE. UU.">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> </h3>
                                <h2 class="tit">Estos son los autos elÈctricos nuevos y usados m·s vendidos en EE. UU. </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                            </div>
            <div class="swiper-button-next"><i class="fas fa-arrow-right"></i></div>
            <div class="swiper-button-prev"><i class="fas fa-arrow-left"></i></div>            
        </div>
    </section>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        var swiper = new Swiper('.mod-carousel.cont_2439011 .sw-carousel', {
          slidesPerView: 3,
          centeredSlides: true,
          loop: true,
          navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',           
              },        
          breakpoints: {
                300: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 1.8,
                },
                1250: {
                    slidesPerView: 3,
                },
              },
          on: {
            slideChange: function() {
              $(".mod-carousel.cont_2439011").animate({opacity: 0.7}, 0).attr("data-item", this.realIndex).animate({opacity: 1}, 500);
            }
          }
        }); 
     });     
    </script>  

  
  
          
   	
	        
</div>                       
</div>    

 
</div>   
                                  
									<div class="row">
     <div class="col-lg-12">
        <div class="my_box">
	    	        	    
    <div class="statics_module">
        <div id='div-gpt-ad-1625234950392-4' style='min-width: 970px; min-height: 90px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1625234950392-4'); });</script></div>
    </div>
  
          
   	
	        
</div>                       
</div>    

 
</div>   
                                  
									<div class="row">
     <div class="col-lg-12">
        <div class="my_box">
	    	        	<div class="heading">
    <h1 class="tit-sep ocre">
                    <a href="https://www.forbes.com.ec/innovacion/" target="_blank">InnovaciÛn <i class="fa fa-chevron-right"></i></a>
                 
            </h1>
</div>
  
          
   	
	        
</div>                       
</div>    

 
</div>   
                                  
									<div class="row">
     <div class="col-lg-8" > 
        <div class="my_box">
	    	        	            <section class="destacado-big primaryColor">
          <figure>
            <a href="https://www.forbes.com.ec/innovacion/cuatro-tendencias-daran-forma-impresion-3d-2024-n46614" title="Cuatro tendencias que dar·n forma a la impresiÛn 3D en 2024" class="wlz">
                <img data-src="https://statics.forbes.com.ec/2023/12/crop/6585de4570aca__825x507.webp" width="825" height="507" alt="Cuatro tendencias que dar·n forma a la impresiÛn 3D en 2024">
            </a>
            <figcaption class="tag">Innovacion</figcaption>
          </figure>
          <article>
            <h1 class="tit"><a href="https://www.forbes.com.ec/innovacion/cuatro-tendencias-daran-forma-impresion-3d-2024-n46614" title="Cuatro tendencias que dar·n forma a la impresiÛn 3D en 2024">Cuatro tendencias que dar·n forma a la impresiÛn 3D en 2024</a></h1>
                            <p class="autor">
            <a href="https://www.forbes.com.ec/autor/victoria-terzaghi-a75">Victoria Terzaghi</a> 
            
    </p>        
          </article>
        </section>
      
          
   	
	        
	    	        	                    <div class="grilla-list fba">
        <div class="row">
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/innovacion/la-tecnologia-esta-empresa-podria-hacer-nunca-mas-cargues-tu-celular-n46575" title="La tecnologÌa de esta empresa podrÌa hacer que nunca m·s cargues tu celular" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2024/01/crop/659ea0e7d967a__106x74.webp" width="100" height="74" alt="La tecnologÌa de esta empresa podrÌa hacer que nunca m·s cargues tu celular">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/innovacion/la-tecnologia-esta-empresa-podria-hacer-nunca-mas-cargues-tu-celular-n46575" title="La tecnologÌa de esta empresa podrÌa hacer que nunca m·s cargues tu celular">La tecnologÌa de esta empresa podrÌa hacer que nunca m·s cargues tu celular</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/innovacion/por-cada-vez-mas-empresas-optan-outsourcing-tecnologia-n46564" title="øPor quÈ cada vez m·s empresas optan por el outsourcing de tecnologÌa?" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2024/01/crop/659ec17112e27__106x74.webp" width="100" height="74" alt="øPor quÈ cada vez m·s empresas optan por el outsourcing de tecnologÌa?">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/innovacion/por-cada-vez-mas-empresas-optan-outsourcing-tecnologia-n46564" title="øPor quÈ cada vez m·s empresas optan por el outsourcing de tecnologÌa?">øPor quÈ cada vez m·s empresas optan por el outsourcing de tecnologÌa?</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/innovacion/revolucionara-cardiologia-farmaco-ensayo-clinico-promete-erradicar-colesterol-malo-una-sola-pastilla-n46559" title="øRevolucionar· la cardiologÌa? F·rmaco en ensayo clÌnico promete erradicar el colesterol malo con una sola pastilla" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a18828b0422__106x74.webp" width="100" height="74" alt="øRevolucionar· la cardiologÌa? F·rmaco en ensayo clÌnico promete erradicar el colesterol malo con una sola pastilla">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/innovacion/revolucionara-cardiologia-farmaco-ensayo-clinico-promete-erradicar-colesterol-malo-una-sola-pastilla-n46559" title="øRevolucionar· la cardiologÌa? F·rmaco en ensayo clÌnico promete erradicar el colesterol malo con una sola pastilla">øRevolucionar· la cardiologÌa? F·rmaco en ensayo clÌnico promete erradicar el colesterol malo con una sola pastilla</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/innovacion/google-continuara-su-plan-eliminacion-cuentas-gmail-photos-como-preservar-su-material-n46553" title="Google continuar· con su plan de &quot;eliminaciÛn&quot; de cuentas en Gmail y Photos: cÛmo preservar su material" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a18f643ff8f__106x74.webp" width="100" height="74" alt="Google continuar· con su plan de &quot;eliminaciÛn&quot; de cuentas en Gmail y Photos: cÛmo preservar su material">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/innovacion/google-continuara-su-plan-eliminacion-cuentas-gmail-photos-como-preservar-su-material-n46553" title="Google continuar· con su plan de &quot;eliminaciÛn&quot; de cuentas en Gmail y Photos: cÛmo preservar su material">Google continuar· con su plan de &quot;eliminaciÛn&quot; de cuentas en Gmail y Photos: cÛmo preservar su material</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
        </div>
    </div>


  
          
   	
	        
</div>   
</div> 
 <div class="col-lg-4">
        <div class="my_box">
	    	        	    <div class="grilla-comon">
    <div class="row">
                    <div class="col-md-12">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/innovacion/vacuna-dengue-dosis-precios-todo-lo-tenes-saber-respecto-n46578" title="Vacuna contra el dengue: dosis, precios y todo lo que tenÈs que saber al respecto" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2023/04/crop/64347decda282__400x260.webp" alt="Vacuna contra el dengue: dosis, precios y todo lo que tenÈs que saber al respecto" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/innovacion/vacuna-dengue-dosis-precios-todo-lo-tenes-saber-respecto-n46578" title="Vacuna contra el dengue: dosis, precios y todo lo que tenÈs que saber al respecto">Vacuna contra el dengue: dosis, precios y todo lo que tenÈs que saber al respecto</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/agustin-jamele-a683">AgustÌn Jamele</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                    <div class="col-md-12">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/innovacion/como-increible-simulador-golf-jugar-casa-n46516" title="CÛmo es este increÌble simulador de golf para jugar desde casa" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a016a6d2302__400x260.webp" alt="CÛmo es este increÌble simulador de golf para jugar desde casa" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/innovacion/como-increible-simulador-golf-jugar-casa-n46516" title="CÛmo es este increÌble simulador de golf para jugar desde casa">CÛmo es este increÌble simulador de golf para jugar desde casa</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/larry-olmsted-a344">Larry Olmsted</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                           
    </div>
</div>

  
          
   	
	        
</div>   
</div>
         
 
</div>   
                                  
									<div class="row">
     <div class="col-lg-12">
        <div class="my_box">
	    	        	    
    <div class="statics_module">
        <div id='div-gpt-ad-1625234950392-5' style='min-width: 970px; min-height: 90px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1625234950392-5'); });</script></div>
    </div>
  
          
   	
	        
</div>                       
</div>    

 
</div>   
                                  
									<div class="row">
     <div class="col-lg-12">
        <div class="my_box">
	    	        	<div class="heading">
    <h1 class="tit-sep negro">
                    BrandVoice <i class="fa fa-chevron-right"></i>
                 
            </h1>
</div>
  
          
   	
	        
	    	        	            <style>
    #forbes .mod-carousel::before {
        background-color:transparent;
        width:auto;
        opacity:inherit;
        position: relative;
    }
    #forbes .mod-carousel .tit-mod {
        color: #000;
    }
    #forbes .mod-carousel .sw-carousel .swiper-slide .item::after {
        background: rgba(255,255,255,0.3);
    }
    #forbes .mod-carousel .sw-carousel .swiper-slide.swiper-slide-active .item::after {
        background: rgba(0,0,0,0.3);
    }
    </style> 
    <section class="mod-carousel cont_2439047" data-item=0>
        <h1 class="tit-mod"></h1>
        <div class="sw-carousel">           
            <div class="swiper-wrapper">
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/brandvoice/de-filas-papel-lo-digital-cambiando-juego-movilidad-urbana-n46411" title="De Filas y Papel a lo Digital: Cambiando el Juego en Movilidad Urbana" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2024/01/crop/659ecc6fdb15f__400x260.webp" alt="De Filas y Papel a lo Digital: Cambiando el Juego en Movilidad Urbana">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> <span style="color: #C41A23">BRANDVOICE</span></h3>
                                <h2 class="tit">De Filas y Papel a lo Digital: Cambiando el Juego en Movilidad Urbana </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/brandvoice/la-cooperativa-sac-engancha-socios-aroma-cafe-n46338" title="La cooperativa SAC engancha a los socios con el aroma del cafÈ" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2024/01/crop/65a17427c2360__400x260.webp" alt="La cooperativa SAC engancha a los socios con el aroma del cafÈ">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> <span style="color: #C41A23">BRANDVOICE</span></h3>
                                <h2 class="tit">La cooperativa SAC engancha a los socios con el aroma del cafÈ </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/brandvoice/tetra-pak-potencia-comercio-electronico-desarrollar-industria-envasado-n46286" title="Tetra Pak potencia el comercio electrÛnico para desarrollar la industria del envasado" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2024/01/crop/659c53c95e8fb__400x260.webp" alt="Tetra Pak potencia el comercio electrÛnico para desarrollar la industria del envasado">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> <span style="color: #C41A23">BRANDVOICE</span></h3>
                                <h2 class="tit">Tetra Pak potencia el comercio electrÛnico para desarrollar la industria del envasado </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/brandvoice/la-inteligencia-artificial-navidad-tiktok-hacen-clic-gracias-claro-n45824" title="La inteligencia artificial, la Navidad y TikTok hacen clic gracias a Claro" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2023/12/crop/658f0abf3f48f__400x260.webp" alt="La inteligencia artificial, la Navidad y TikTok hacen clic gracias a Claro">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> <span style="color: #C41A23">BRANDVOICE</span></h3>
                                <h2 class="tit">La inteligencia artificial, la Navidad y TikTok hacen clic gracias a Claro </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/brandvoice/produbanco-incorpora-red-financiera-amazonia-n45712" title="Produbanco se incorpora a la Red Financiera para la AmazonÌa" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2023/12/crop/658ca0f4778b7__400x260.webp" alt="Produbanco se incorpora a la Red Financiera para la AmazonÌa">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> <span style="color: #C41A23">BRANDVOICE</span></h3>
                                <h2 class="tit">Produbanco se incorpora a la Red Financiera para la AmazonÌa </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/brandvoice/ochos-centros-comerciales-activan-ocho-proyectos-sociales-n45454" title="Ochos centros comerciales activan ocho proyectos sociales" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2023/12/crop/6584b743b7e0b__400x260.webp" alt="Ochos centros comerciales activan ocho proyectos sociales">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> <span style="color: #C41A23">BRANDVOICE</span></h3>
                                <h2 class="tit">Ochos centros comerciales activan ocho proyectos sociales </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/brandvoice/el-cliente-brujula-grupo-induauto-indusur-n44892" title="El cliente es la br˙jula del Grupo Induauto Indusur" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2023/12/crop/65772537095fa__400x260.webp" alt="El cliente es la br˙jula del Grupo Induauto Indusur">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> <span style="color: #C41A23">BRANDVOICE</span></h3>
                                <h2 class="tit">El cliente es la br˙jula del Grupo Induauto Indusur </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                    
                    
                    <div class="swiper-slide">
                        <div class="swiper-scrim"></div>
                        <article class="item">
                            <a href="https://www.forbes.com.ec/brandvoice/el-agua-una-oportunidad-privilegio-n43732" title="&#039;El agua es una oportunidad, no un privilegio&#039;" class="">
                            <figure class="wlz">
                                <img src="https://statics.forbes.com.ec/2023/11/crop/6554e10862596__400x260.webp" alt="&#039;El agua es una oportunidad, no un privilegio&#039;">                                                              
                            </figure>
                            <div class="info">
                                <h3 class="subtit"> <span style="color: #C41A23">BRANDVOICE</span></h3>
                                <h2 class="tit">&#039;El agua es una oportunidad, no un privilegio&#039; </h2>
                            </div>  
                          </a>  
                        </article>                        
                    </div>                
                            </div>
            <div class="swiper-button-next"><i class="fas fa-arrow-right"></i></div>
            <div class="swiper-button-prev"><i class="fas fa-arrow-left"></i></div>            
        </div>
    </section>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        var swiper = new Swiper('.mod-carousel.cont_2439047 .sw-carousel', {
          slidesPerView: 3,
          centeredSlides: true,
          loop: true,
          navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',           
              },        
          breakpoints: {
                300: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 1.8,
                },
                1250: {
                    slidesPerView: 3,
                },
              },
          on: {
            slideChange: function() {
              $(".mod-carousel.cont_2439047").animate({opacity: 0.7}, 0).attr("data-item", this.realIndex).animate({opacity: 1}, 500);
            }
          }
        }); 
     });     
    </script>  

  
  
          
   	
	        
</div>                       
</div>    

 
</div>   
                                  
									<div class="row">
     <div class="col-lg-12">
        <div class="my_box">
	    	        	    
    <div class="statics_module">
        <div id='div-gpt-ad-1625234950392-6' style='min-width: 970px; min-height: 90px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1625234950392-6'); });</script></div>
    </div>
  
          
   	
	        
	    	        	<div class="heading">
    <h1 class="tit-sep violeta">
                    <a href="https://www.forbes.com.ec/liderazgo/" target="_blank">Liderazgo <i class="fa fa-chevron-right"></i></a>
                 
            </h1>
</div>
  
          
   	
	        
</div>                       
</div>    

 
</div>   
                                  
									<div class="row">
     <div class="col-lg-4">
        <div class="my_box">
	    	        	    <div class="grilla-comon">
    <div class="row">
                    <div class="col-md-12">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/liderazgo/los-secretos-construir-una-red-clientes-leales-reducir-desercion-n46660" title="Los &quot;secretos&quot; para construir una red de clientes leales y reducir la deserciÛn" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2024/01/crop/65984c6508dc7__400x260.webp" alt="Los &quot;secretos&quot; para construir una red de clientes leales y reducir la deserciÛn" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/liderazgo/los-secretos-construir-una-red-clientes-leales-reducir-desercion-n46660" title="Los &quot;secretos&quot; para construir una red de clientes leales y reducir la deserciÛn">Los &quot;secretos&quot; para construir una red de clientes leales y reducir la deserciÛn</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/micah-logan-a2614">Micah Logan</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                    <div class="col-md-12">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/liderazgo/las-claves-delegar-adecuadamente-ser-buen-lider-n46653" title="Las claves para delegar adecuadamente y ser un buen lÌder" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2023/11/crop/6544e10e828b4__400x260.webp" alt="Las claves para delegar adecuadamente y ser un buen lÌder" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/liderazgo/las-claves-delegar-adecuadamente-ser-buen-lider-n46653" title="Las claves para delegar adecuadamente y ser un buen lÌder">Las claves para delegar adecuadamente y ser un buen lÌder</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/nikola-minkov-a2601">Nikola Minkov</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                           
    </div>
</div>

  
          
   	
	        
</div>   
</div>
 <div class="col-lg-8"> 
        <div class="my_box">
	    	        	            <section class="destacado-big azul">
          <figure>
            <a href="https://www.forbes.com.ec/liderazgo/cinco-ideas-ingresos-pasivos-2024-aprovechando-amazon-chatgpt-otras-tendencias-n46626" title="Cinco ideas de ingresos pasivos para 2024 aprovechando Amazon, ChatGPT y otras tendencias" class="wlz">
                <img data-src="https://statics.forbes.com.ec/2024/01/crop/659d519b123cb__825x507.webp" width="825" height="507" alt="Cinco ideas de ingresos pasivos para 2024 aprovechando Amazon, ChatGPT y otras tendencias">
            </a>
            <figcaption class="tag">Liderazgo</figcaption>
          </figure>
          <article>
            <h1 class="tit"><a href="https://www.forbes.com.ec/liderazgo/cinco-ideas-ingresos-pasivos-2024-aprovechando-amazon-chatgpt-otras-tendencias-n46626" title="Cinco ideas de ingresos pasivos para 2024 aprovechando Amazon, ChatGPT y otras tendencias">Cinco ideas de ingresos pasivos para 2024 aprovechando Amazon, ChatGPT y otras tendencias</a></h1>
                            <p class="autor">
            <a href="https://www.forbes.com.ec/autor/rachel-wells-a2310">Rachel Wells</a> 
            
    </p>        
          </article>
        </section>
      
          
   	
	        
	    	        	                    <div class="grilla-list fba">
        <div class="row">
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/liderazgo/cinco-tendencias-liderazgo-empresarial-equipos-ano-n46595" title="Cinco tendencias en liderazgo empresarial y de equipos para este aÒo" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2023/12/crop/6585c396bb906__106x74.webp" width="100" height="74" alt="Cinco tendencias en liderazgo empresarial y de equipos para este aÒo">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/liderazgo/cinco-tendencias-liderazgo-empresarial-equipos-ano-n46595" title="Cinco tendencias en liderazgo empresarial y de equipos para este aÒo">Cinco tendencias en liderazgo empresarial y de equipos para este aÒo</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/liderazgo/las-20-tendencias-mercado-laboral-tener-cuenta-2024-n46588" title="Las 20 tendencias del mercado laboral a tener en cuenta en 2024" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2023/11/crop/655628475cd38__106x74.webp" width="100" height="74" alt="Las 20 tendencias del mercado laboral a tener en cuenta en 2024">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/liderazgo/las-20-tendencias-mercado-laboral-tener-cuenta-2024-n46588" title="Las 20 tendencias del mercado laboral a tener en cuenta en 2024">Las 20 tendencias del mercado laboral a tener en cuenta en 2024</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/liderazgo/cinco-preguntas-tenes-hacerte-elegir-herramienta-gestion-proyectos-tu-equipo-n46585" title="Cinco preguntas que tenÈs que hacerte al elegir la herramienta de gestiÛn de proyectos de tu equipo" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2024/01/crop/659ea6e70181f__106x74.webp" width="100" height="74" alt="Cinco preguntas que tenÈs que hacerte al elegir la herramienta de gestiÛn de proyectos de tu equipo">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/liderazgo/cinco-preguntas-tenes-hacerte-elegir-herramienta-gestion-proyectos-tu-equipo-n46585" title="Cinco preguntas que tenÈs que hacerte al elegir la herramienta de gestiÛn de proyectos de tu equipo">Cinco preguntas que tenÈs que hacerte al elegir la herramienta de gestiÛn de proyectos de tu equipo</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/liderazgo/seis-herramientas-gratuitas-software-diagrama-gantt-directores-proyectos-n46524" title="Seis herramientas gratuitas de software de diagrama de Gantt para directores de proyectos" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a028406c8d5__106x74.webp" width="100" height="74" alt="Seis herramientas gratuitas de software de diagrama de Gantt para directores de proyectos">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/liderazgo/seis-herramientas-gratuitas-software-diagrama-gantt-directores-proyectos-n46524" title="Seis herramientas gratuitas de software de diagrama de Gantt para directores de proyectos">Seis herramientas gratuitas de software de diagrama de Gantt para directores de proyectos</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
        </div>
    </div>


  
          
   	
	        
</div>   
</div>          
 
</div>   
                                  
									<div class="row">
     <div class="col-lg-12">
        <div class="my_box">
	    	        	    
    <div class="statics_module">
        <div id='div-gpt-ad-1625234950392-7' style='min-width: 970px; min-height: 90px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1625234950392-7'); });</script></div>
    </div>
  
          
   	
	        
	    	        	<div class="heading">
    <h1 class="tit-sep negro">
                    <a href="https://www.forbes.com.ec/money/" target="_blank">Money <i class="fa fa-chevron-right"></i></a>
                 
            </h1>
</div>
  
          
   	
	        
</div>                       
</div>    

 
</div>   
                                  
									<div class="row">
     <div class="col-lg-8" > 
        <div class="my_box">
	    	        	            <section class="destacado-big primaryColor">
          <figure>
            <a href="https://www.forbes.com.ec/money/el-ceo-blackrock-revela-plan-masivo-luego-etf-bitcoin-provocara-cambios-precios-n46670" title="El CEO de BlackRock revela un &quot;plan masivo&quot; luego que el ETF de Bitcoin provocara cambios en los precios" class="wlz">
                <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a538c329fe3__825x507.webp" width="825" height="507" alt="El CEO de BlackRock revela un &quot;plan masivo&quot; luego que el ETF de Bitcoin provocara cambios en los precios">
            </a>
            <figcaption class="tag">Money</figcaption>
          </figure>
          <article>
            <h1 class="tit"><a href="https://www.forbes.com.ec/money/el-ceo-blackrock-revela-plan-masivo-luego-etf-bitcoin-provocara-cambios-precios-n46670" title="El CEO de BlackRock revela un &quot;plan masivo&quot; luego que el ETF de Bitcoin provocara cambios en los precios">El CEO de BlackRock revela un &quot;plan masivo&quot; luego que el ETF de Bitcoin provocara cambios en los precios</a></h1>
                            <p class="autor">
            <a href="https://www.forbes.com.ec/autor/billy-bambrough-a185">Billy Bambrough</a> 
            
    </p>        
          </article>
        </section>
      
          
   	
	        
	    	        	                    <div class="grilla-list fba">
        <div class="row">
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/money/por-esta-crypto-convirtio-favorita-blanqueadores-dinero-n46658" title="Por quÈ esta crypto se convirtiÛ en la favorita de los &quot;blanqueadores&quot; de dinero" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a53bc95eef0__106x74.webp" width="100" height="74" alt="Por quÈ esta crypto se convirtiÛ en la favorita de los &quot;blanqueadores&quot; de dinero">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/money/por-esta-crypto-convirtio-favorita-blanqueadores-dinero-n46658" title="Por quÈ esta crypto se convirtiÛ en la favorita de los &quot;blanqueadores&quot; de dinero">Por quÈ esta crypto se convirtiÛ en la favorita de los &quot;blanqueadores&quot; de dinero</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/money/las-cinco-mejores-opi-seguir-ano-n46640" title="Las cinco mejores OPI a seguir este aÒo" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a148f354713__106x74.webp" width="100" height="74" alt="Las cinco mejores OPI a seguir este aÒo">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/money/las-cinco-mejores-opi-seguir-ano-n46640" title="Las cinco mejores OPI a seguir este aÒo">Las cinco mejores OPI a seguir este aÒo</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/money/asi-fueron-primeras-negociaciones-tan-esperados-etf-bitcoins-n46623" title="AsÌ fueron las primeras negociaciones de los tan esperados ETF de Bitcoins" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2024/01/crop/659d5f5de56c2__106x74.webp" width="100" height="74" alt="AsÌ fueron las primeras negociaciones de los tan esperados ETF de Bitcoins">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/money/asi-fueron-primeras-negociaciones-tan-esperados-etf-bitcoins-n46623" title="AsÌ fueron las primeras negociaciones de los tan esperados ETF de Bitcoins">AsÌ fueron las primeras negociaciones de los tan esperados ETF de Bitcoins</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/money/las-perspectivas-mercado-carne-2024-quita-cepo-exportador-n46603" title="Las perspectivas del mercado de la carne para 2024 con la quita del cepo exportador" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2020/06/crop/5ee0fcd24db81__106x74.webp" width="100" height="74" alt="Las perspectivas del mercado de la carne para 2024 con la quita del cepo exportador">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/money/las-perspectivas-mercado-carne-2024-quita-cepo-exportador-n46603" title="Las perspectivas del mercado de la carne para 2024 con la quita del cepo exportador">Las perspectivas del mercado de la carne para 2024 con la quita del cepo exportador</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
        </div>
    </div>


  
          
   	
	        
</div>   
</div> 
 <div class="col-lg-4">
        <div class="my_box">
	    	        	    <div class="grilla-comon">
    <div class="row">
                    <div class="col-md-12">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/money/la-startup-argentina-certifica-sustentabilidad-cultivos-tecnologia-blockchain-hoy-opera-9-paises-n46591" title="La startup argentina que certifica la sustentabilidad de los cultivos con tecnologÌa blockchain y hoy opera en 9 paÌses" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a1870da0fc5__400x260.webp" alt="La startup argentina que certifica la sustentabilidad de los cultivos con tecnologÌa blockchain y hoy opera en 9 paÌses" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/money/la-startup-argentina-certifica-sustentabilidad-cultivos-tecnologia-blockchain-hoy-opera-9-paises-n46591" title="La startup argentina que certifica la sustentabilidad de los cultivos con tecnologÌa blockchain y hoy opera en 9 paÌses">La startup argentina que certifica la sustentabilidad de los cultivos con tecnologÌa blockchain y hoy opera en 9 paÌses</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/fernando-heredia-a2077">Fernando Heredia</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                    <div class="col-md-12">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/money/refugio-valor-oro-subio-precio-crecientes-tensiones-geopoliticas-n46581" title="Refugio de valor: el oro subiÛ de precio por las crecientes tensiones geopolÌticas" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2023/12/crop/65708eddf1247__400x260.webp" alt="Refugio de valor: el oro subiÛ de precio por las crecientes tensiones geopolÌticas" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/money/refugio-valor-oro-subio-precio-crecientes-tensiones-geopoliticas-n46581" title="Refugio de valor: el oro subiÛ de precio por las crecientes tensiones geopolÌticas">Refugio de valor: el oro subiÛ de precio por las crecientes tensiones geopolÌticas</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/forbes-digital-a71">Forbes Digital</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                           
    </div>
</div>

  
          
   	
	        
</div>   
</div>
         
 
</div>   
                                  
									<div class="row">
     <div class="col-lg-12">
        <div class="my_box">
	    	        	    
    <div class="statics_module">
        <div id='div-gpt-ad-1625234950392-8' style='min-width: 970px; min-height: 90px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1625234950392-8'); });</script></div>
    </div>
  
          
   	
	        
	    	        	<div class="heading">
    <h1 class="tit-sep fuxia">
                    <a href="https://www.forbes.com.ec/negocios/" target="_blank">Negocios <i class="fa fa-chevron-right"></i></a>
                 
            </h1>
</div>
  
          
   	
	        
</div>                       
</div>    

 
</div>   
                                  
									<div class="row">
     <div class="col-lg-4">
        <div class="my_box">
	    	        	    <div class="grilla-comon">
    <div class="row">
                    <div class="col-md-12">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/negocios/cuatro-consejos-esenciales-tener-exito-negocios-n46629" title="Cuatro consejos esenciales para tener Èxito en los negocios" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2023/09/crop/64f9df704daee__400x260.webp" alt="Cuatro consejos esenciales para tener Èxito en los negocios" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/negocios/cuatro-consejos-esenciales-tener-exito-negocios-n46629" title="Cuatro consejos esenciales para tener Èxito en los negocios">Cuatro consejos esenciales para tener Èxito en los negocios</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/peter-done-a2590">Peter Done</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                    <div class="col-md-12">
                <article class="box">
                    <figure>
                        <a href="https://www.forbes.com.ec/negocios/como-esta-mujer-paso-ser-una-persona-hogar-recaudar-casi-us-30-millones-invertir-nuevas-empresas-n46620" title="CÛmo esta mujer pasÛ de ser una persona sin hogar a recaudar casi US$ 30 millones para invertir en nuevas empresas" class="wlz">
                            <img data-src="https://statics.forbes.com.ec/2024/01/crop/65a1734b87235__400x260.webp" alt="CÛmo esta mujer pasÛ de ser una persona sin hogar a recaudar casi US$ 30 millones para invertir en nuevas empresas" width="400" height="260" >
                        </a>                    
                    </figure>
                    <div class="info">
                        <h2 class="tit"><a href="https://www.forbes.com.ec/negocios/como-esta-mujer-paso-ser-una-persona-hogar-recaudar-casi-us-30-millones-invertir-nuevas-empresas-n46620" title="CÛmo esta mujer pasÛ de ser una persona sin hogar a recaudar casi US$ 30 millones para invertir en nuevas empresas">CÛmo esta mujer pasÛ de ser una persona sin hogar a recaudar casi US$ 30 millones para invertir en nuevas empresas</a></h1>
                                                    <p class="autor">
            <a href="https://www.forbes.com.ec/autor/holly-corbett-a2376">Holly Corbett</a> 
            
    </p>        
                    </div>
                </article>
            </div>
                           
    </div>
</div>

  
          
   	
	        
</div>   
</div>
 <div class="col-lg-8"> 
        <div class="my_box">
	    	        	            <section class="destacado-big negro">
          <figure>
            <a href="https://www.forbes.com.ec/negocios/las-tres-reglas-eternas-aristoteles-desarrollar-buenas-presentaciones-negocios-n46611" title="Las tres reglas eternas de AristÛteles para desarrollar buenas presentaciones de negocios" class="wlz">
                <img data-src="https://statics.forbes.com.ec/2023/05/crop/6474fb3314ee5__825x507.webp" width="825" height="507" alt="Las tres reglas eternas de AristÛteles para desarrollar buenas presentaciones de negocios">
            </a>
            <figcaption class="tag">Negocios</figcaption>
          </figure>
          <article>
            <h1 class="tit"><a href="https://www.forbes.com.ec/negocios/las-tres-reglas-eternas-aristoteles-desarrollar-buenas-presentaciones-negocios-n46611" title="Las tres reglas eternas de AristÛteles para desarrollar buenas presentaciones de negocios">Las tres reglas eternas de AristÛteles para desarrollar buenas presentaciones de negocios</a></h1>
                            <p class="autor">
            <a href="https://www.forbes.com.ec/autor/dileep-rao-a1863">Dileep Rao</a> 
            
    </p>        
          </article>
        </section>
      
          
   	
	        
	    	        	                    <div class="grilla-list fba">
        <div class="row">
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/negocios/por-grandes-empresas-siguen-quebrando-como-evitar-caer-misma-trampa-n46608" title="Por quÈ las grandes empresas siguen quebrando y cÛmo evitar caer en la misma trampa" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2023/12/crop/658eeed9f3d11__106x74.webp" width="100" height="74" alt="Por quÈ las grandes empresas siguen quebrando y cÛmo evitar caer en la misma trampa">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/negocios/por-grandes-empresas-siguen-quebrando-como-evitar-caer-misma-trampa-n46608" title="Por quÈ las grandes empresas siguen quebrando y cÛmo evitar caer en la misma trampa">Por quÈ las grandes empresas siguen quebrando y cÛmo evitar caer en la misma trampa</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/negocios/ya-estan-seis-paises-siguiente-canal-sera-amazon-n46550" title="Ya est·n en seis paÌses y el siguiente canal ser· Amazon" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2024/01/crop/6596adc1a2947__106x74.webp" width="100" height="74" alt="Ya est·n en seis paÌses y el siguiente canal ser· Amazon">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/negocios/ya-estan-seis-paises-siguiente-canal-sera-amazon-n46550" title="Ya est·n en seis paÌses y el siguiente canal ser· Amazon">Ya est·n en seis paÌses y el siguiente canal ser· Amazon</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/negocios/desde-amazon-blackrock-cuales-son-grandes-corporaciones-wall-street-recortaran-miles-empleos-2024-n46527" title="Desde Amazon hasta BlackRock: cu·les son las grandes corporaciones de Wall Street que recortar·n miles de empleos en 2024" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2022/08/crop/6307f738c5b65__106x74.webp" width="100" height="74" alt="Desde Amazon hasta BlackRock: cu·les son las grandes corporaciones de Wall Street que recortar·n miles de empleos en 2024">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/negocios/desde-amazon-blackrock-cuales-son-grandes-corporaciones-wall-street-recortaran-miles-empleos-2024-n46527" title="Desde Amazon hasta BlackRock: cu·les son las grandes corporaciones de Wall Street que recortar·n miles de empleos en 2024">Desde Amazon hasta BlackRock: cu·les son las grandes corporaciones de Wall Street que recortar·n miles de empleos en 2024</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
            <div class="col-md-6">
                <div class="box">
                    <div class="row">
                        <div class="col-4">
                            <figure>
                                <a href="https://www.forbes.com.ec/negocios/por-capacidad-mundial-energia-renovable-alcanzaria-objetivo-cop28-2030-n46521" title="Por quÈ la capacidad mundial de energÌa renovable no alcanzarÌa el objetivo de la COP28 para 2030" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2023/11/crop/6566029b81c36__106x74.webp" width="100" height="74" alt="Por quÈ la capacidad mundial de energÌa renovable no alcanzarÌa el objetivo de la COP28 para 2030">
                                </a>
                            </figure>
                        </div>
                        <div class="col-8">
                            <article>
                                <p class="name"></p>                            
                                <h2 class="tit"><a href="https://www.forbes.com.ec/negocios/por-capacidad-mundial-energia-renovable-alcanzaria-objetivo-cop28-2030-n46521" title="Por quÈ la capacidad mundial de energÌa renovable no alcanzarÌa el objetivo de la COP28 para 2030">Por quÈ la capacidad mundial de energÌa renovable no alcanzarÌa el objetivo de la COP28 para 2030</a></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>  
             
        </div>
    </div>


  
          
   	
	        
</div>   
</div>          
 
</div>   
                                  
									<div class="row">
     <div class="col-lg-12">
        <div class="my_box">
	    	        	<div class="heading">
    <h1 class="tit-sep violeta">
                    <a href="https://www.forbes.com.ec/lifestyle/" target="_blank">Lifestyle <i class="fa fa-chevron-right"></i></a>
                 
            </h1>
</div>
  
          
   	
	        
</div>                       
</div>    

 
</div>   
                                  
									<div class="row">
     <div class="col-lg-8" > 
        <div class="my_box">
	    	        	            <section class="destacado-big azul">
          <figure>
            <a href="https://www.forbes.com.ec/lifestyle/la-revista-cultural-mundo-diners-llego-su-edicion-500-n46429" title="La revista cultural Mundo Diners llegÛ a su ediciÛn 500" class="wlz">
                <img data-src="https://statics.forbes.com.ec/2024/01/crop/659f0c146070e__825x507.webp" width="825" height="507" alt="La revista cultural Mundo Diners llegÛ a su ediciÛn 500">
            </a>
            <figcaption class="tag">Lifestyle</figcaption>
          </figure>
          <article>
            <h1 class="tit"><a href="https://www.forbes.com.ec/lifestyle/la-revista-cultural-mundo-diners-llego-su-edicion-500-n46429" title="La revista cultural Mundo Diners llegÛ a su ediciÛn 500">La revista cultural Mundo Diners llegÛ a su ediciÛn 500</a></h1>
                            <p class="autor">
            <a href="https://www.forbes.com.ec/autor/forbes-digital-a71">Forbes Digital</a> 
            
    </p>        
          </article>
        </section>
      
          
   	
	        
</div>   
</div> 
 <div class="col-lg-4">
        <div class="my_box">
	    	        	    <div class="grilla-comon primaryColor">
        <div class="row">
            <div class="col-md-12">
                <article class="box">
                      
                                                    <figure>
                                <a href="https://www.forbes.com.ec/lifestyle/us-100000-inversion-moda-horizontal-n46161" title="US$ 100.000  de inversiÛn en la moda horizontal" class="wlz">
                                    <img data-src="https://statics.forbes.com.ec/2023/12/crop/65787c36b280a__400x260.webp" alt="US$ 100.000  de inversiÛn en la moda horizontal" width="400" height="260">
                                </a>
                            </figure>
                            <div class="info">
                                <h2 class="tit"><a href="https://www.forbes.com.ec/lifestyle/us-100000-inversion-moda-horizontal-n46161" title="US$ 100.000  de inversiÛn en la moda horizontal">US$ 100.000  de inversiÛn en la moda horizontal</a></h2>
                                                                                            </div>
                        
                      
                                                    <div class="item-rel">
                                <h2 class="txt"><a href="https://www.forbes.com.ec/lifestyle/comprar-toda-una-isla-una-semana-oferta-four-seasons-bolsillos-extraordinarios-n46151" title="Comprar toda una isla por una semana: la oferta del Four Seasons para bolsillos extraordinarios">Comprar toda una isla por una semana: la oferta del Four Seasons para bolsillos extraordinarios</a></h2>
                            </div>
                        
                      
                                                    <div class="item-rel">
                                <h2 class="txt"><a href="https://www.forbes.com.ec/lifestyle/llego-sexto-local-wellness-una-inversion-us-1-millon-n46149" title="LlegÛ el sexto local wellness con una inversiÛn de US$ 1 millÛn">LlegÛ el sexto local wellness con una inversiÛn de US$ 1 millÛn</a></h2>
                            </div>
                        
                                    
                </article>
            </div>
        </div>
    </div> 


  
          
   	
	        
</div>   
</div>
         
 
</div>   
                                  
				                              
			      
		</div> 
	</div>  

    
    </div>
        <footer>
	<div class="wrapper">
        
        <div class="footer__nav">
                                                                        <a href="https://www.forbes.com.ec/suscribe" title="Suscribirse"   class="footer__nav-item">Suscribirse</a>
                                                                                                            <a href="https://www.forbes.com.ec/podcast/" title="Podcast"   class="footer__nav-item">Podcast</a>
                                                                                                            <a href="https://www.forbes.com.ec/especial/today" title="Today"   class="footer__nav-item">Today</a>
                                                                                                            <a href="https://www.forbes.com.ec/especial/innovacion" title="InnovaciÛn"   class="footer__nav-item">InnovaciÛn</a>
                                                                                                            <a href="https://www.forbes.com.ec/especial/liderazgo" title="Liderazgo"   class="footer__nav-item">Liderazgo</a>
                                                                                                            <a href="https://www.forbes.com.ec/especial/money" title="Money"   class="footer__nav-item">Money</a>
                                                                                                            <a href="https://www.forbes.com.ec/especial/negocios" title="Negocios"   class="footer__nav-item">Negocios</a>
                                                                                                            <a href="https://www.forbes.com.ec/especial/lifestyle" title="Lifestyle"   class="footer__nav-item">Lifestyle</a>
                                                                                                            <a href="https://www.forbes.com.ec/especial/millonarios" title="Millonarios"   class="footer__nav-item">Millonarios</a>
                                                                                                            <a href="https://www.forbes.com.ec/especial/rankings" title="Rankings"   class="footer__nav-item">Rankings</a>
                                                                                                            <a href="https://www.forbes.com.ec/especial/summit" title="Summit"   class="footer__nav-item">Summit</a>
                                                        </div>
        
        <div class="footer__content">
            <div class="footer__column">
                <div class="footer__column-header">
                    <a href="https://www.forbes.com.ec/" class="logo">
                        <img src="https://statics.forbes.com.ec/forbes/img/global/forbes.ec-black.svg" alt="Forbes Ecuador" width="133" height="34">
                    </a>
                </div>
                <div>
                    <div class="footer__column__title">Contactos</div>
                    <div class="footer__column__sub"><span>Av. de los Shyris N34-152 y Holanda Edificio Shyris Center | Quito, Ecuador </span> | TelÈfono: <span>(02) 452 7863</span> | Correo: <a href="mailto:info@forbes.com.ec">info@forbes.com.ec</a></div>
                    
                    <div class="footer__column__sub">QUITO</div>
                    <div class="footer__column__sub"><span>Carlos Mantilla</span> | Correo: <a href="mailto:cfmantilla@forbes.com.ec">cfmantilla@forbes.com.ec</a></div>                    
                    <div class="footer__column__sub"><span>Liz Giler</span> | Celular: <span>099 626 0063</span> | Correo: <a href="mailto:lgiler@forbes.com.ec">lgiler@forbes.com.ec</a></div>
                    <div class="footer__column__sub"><span>Paula Torres</span> | Celular: <span>099 980 5319</span> | Correo: <a href="mailto:ptorres@forbes.com.ec">ptorres@forbes.com.ec</a></div>
					
					<div class="footer__column__sub"><span>Gabriela PÈrez</span> | Celular: <span>593 99 271 8221</span> | Correo: <a href="mailto:gperez@forbes.com.ec">gperez@forbes.com.ec</a></div>
                    
                    <div class="footer__column__sub">Suscripciones</div>
                    <div class="footer__column__sub"><a href="mailto:suscripciones@forbes.com.ec">suscripciones@forbes.com.ec</a></div> 
                    <div class="footer__column__sub"><span>099 001 8110</span></div>
                </div>
            </div>
                            <div class="footer__column--right">
                    <div class="footer__magazine-promo">
                                                                                    <a class="footer__magazine-image" href="https://www.pressreader.com/es/magazines/m/forbes-ecuador" title="Forbes Ecuador 015" target="_blank" rel="noopener">
                                    <progressive-image src="https://statics.forbes.com.ec/2023/12/crop/6572e70d223b6__350x472.webp" alt="Forbes Ecuador 015" class="show-img" enhanced="">
                                        <img src="https://statics.forbes.com.ec/2023/12/crop/6572e70d223b6__350x472.webp" alt="Forbes Ecuador 015" loading="lazy">
                                    </progressive-image>
                                </a>
                                                                                                                <a class="footer__magazine-image" href="https://www.pressreader.com/ecuador/forbes-ecuador" title="Forbes Ecuador 014" target="_blank" rel="noopener">
                                    <progressive-image src="https://statics.forbes.com.ec/2023/10/crop/651ddaef868de__350x472.webp" alt="Forbes Ecuador 014" class="show-img" enhanced="">
                                        <img src="https://statics.forbes.com.ec/2023/10/crop/651ddaef868de__350x472.webp" alt="Forbes Ecuador 014" loading="lazy">
                                    </progressive-image>
                                </a>
                                                                        </div>
                </div>
                    </div>
		<div class="row  mt-4">
			<div class="col-md-9">
				<p class="copy text-left">
                                                                
                                                                        <a href="https://www.forbes.com.ec/terminos-condiciones" title="TÈrminos y condiciones" >TÈrminos y condiciones</a> |
                                            
                                                                        <a href="https://www.forbes.com.ec/politica-privacidad" title="Legales" >Legales</a> |
                                            
                                        
                    <span>&copy; 2024. Forbes Ecuador. Todos los derechos reservados.</span>
                </p>
			</div>
			<div class="col-md-3">
				<div class="redes">
                                            <a href="https://www.facebook.com/RevistaForbesEcuador" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-square"></i></a>
                     
                                            <a href="https://twitter.com/forbesecuador" target="_blank" rel="noopener" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                                        
                                            <a href="https://www.instagram.com/forbesecuador/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                     
                                            <a href="https://www.youtube.com/channel/UCOaA7k-c9KySaoiLjjUuMgw" target="_blank" rel="noopener" aria-label="Youtube"><i class="fab fa-youtube"></i></a>
                                         
                                            <a href="https://www.linkedin.com/company/forbesecuador" target="_blank" rel="noopener" aria-label="Linkedin"><i class="fab fa-linkedin"></i></a>
                     
                                            <a href="https://www.flickr.com/photos/195065184@N06/" target="_blank" rel="noopener" aria-label="Flickr"><i class="fab fa-flickr"></i></a>
                     
                                            <a href="https://www.tiktok.com/@forbesecuador?lang=es" target="_blank" rel="noopener" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
                                        
	            </div>
			</div>
		</div>
	
        <div class="powered">
            <a href="https://www.amuracms.com" rel="noopener" target="_blank" title="Power by AmuraCMS"><img src="https://statics.forbes.com.ec/forbes/img/global/amura.svg" alt="AmuraCMS" width="100" height="13"></a>
        </div>
    </div>	
</footer></main> 
         <div class="publicidad_footer_sticky" >
        <div class="close_sticky">
            <div class="closes">
                <img src="https://statics.forbes.com.ec/forbes/img/global/cancel.svg" style="width: 14px; height: auto; vertical-align: top">
            </div>      
        </div> 
        <div class="cont_sticky">
            <div class="contenedor_publicidad">
                                    
                                    <!-- Desktop_Zocalo -->
                    <div id='div-gpt-ad-1625234950392-11' style='min-width: 970px; min-height: 90px;'>
                      <script>
                        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1625234950392-11'); });
                      </script>
                    </div>
                            	
                    </div>                
        </div>  
    </div> 
        <style>

.pre-home-amura.ready {
    display: block;
}
.pre-home-amura {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 1);
    z-index: 1010;
    display: none;
}
.pre-home-amura .inner-flex-container {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.pre-home-amura .close-banner {
    position: absolute;
    top: 1rem;
    right: 1rem;    
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #181716;
    transition: all .2s ease-in-out;
    padding: 0.5rem 1rem;
    color: #fefefe;
    font-size: .75rem;
    font-weight: 700;
    border-radius: 0.25rem;
    outline: none;
    border: 1px solid #181716;
    cursor: pointer;
    text-transform: uppercase;
    z-index: 10;
}
.pre-home-amura .count-down {
    position: absolute;
    top: 3rem;
    right: 1rem;    
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 2rem;
    color: #181716;
    font-size: .75rem;
}
.pre-home-amura .close-banner:hover {
    color: #e6e6e6;
}
.no-display {
    display: none
}
</style>

<div class="pre-home-amura">
    <div class="inner-flex-container">
        <button class="close-banner" aria-label="Cerrar">
            <span>CERRAR</span>            
        </button>
        <div class="count-down">10</div>
        <div id="div-gpt-ad-1625234950392-0">
          <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1625234950392-0'); });
          </script>
        </div>
    </div>
</div>


<script>
    const phAmura = document.querySelector(".pre-home-amura");
    const btnClose = document.querySelector(".pre-home-amura .close-banner");
    window.onload = function(event) {
        setTimeout((function () {
            if(active_pre){
                phAmura.classList.add("ready");
                var timeleft = 10;
                var downloadTimer = setInterval(function(){
                    if(timeleft <= 0){
                        clearInterval(downloadTimer);
                        phAmura.classList.remove("ready");
                        phAmura.classList.add("no-display");
                    } else {
                        document.querySelector(".count-down").innerHTML  = timeleft;
                    }              
                    timeleft -= 1;
                }, 1e3);            
            }        
        }), 1e3)
    };     


    btnClose.addEventListener("click", (function () {
        phAmura.classList.remove("ready") 
        phAmura.classList.add("no-display")
    })) 
</script>     




 

 
 
   

<script src="https://unpkg.com/swiper@6.0.0/swiper-bundle.min.js" defer></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.4.0/dist/lazyload.min.js" defer></script>
<script src="https://statics.forbes.com.ec/forbes/js/plugins/jquery.cookie.js?v=1648146157" defer></script>
<script src="https://statics.forbes.com.ec/forbes/js/plugins/iframeResizer.js?v=1648146157" defer></script>
<script src="https://statics.forbes.com.ec/forbes/js/init.js?v=1700771444" defer></script>
<script src="https://statics.forbes.com.ec/forbes/js/front.js?v=1699460779" defer></script>

</body>
</html>n los \u003cstrong\u003ecortes de barber√≠a\u003c/strong\u003e, es decir,\u003cstrong\u003e la vieja escuela\u003c/strong\u003e. ‚ÄúLo que vienen mucho ahorita son los\u003cstrong\u003e cortes s√∫per pulidos con terminaci√≥n en V\u003c/strong\u003e, con \u003cstrong\u003emuchas texturas\u003c/strong\u003e y \u003cstrong\u003emucho color en el cabello\u003c/strong\u003e‚Äù para dar un \u003cstrong\u003easpecto m√°s desenfadado\u003c/strong\u003e, aunque se manejan los laterales hechos a m√°quina con degradados.\u003c/p\u003e\n\n\n\n\u003cdiv class=\"wp-block-group is-layout-constrained wp-block-group-is-layout-constrained\"\u003e\u003cdiv class=\"wp-block-group__inner-container\"\u003e\n\u003cfigure class=\"wp-block-image size-large\"\u003e\u003cimg loading=\"lazy\" decoding=\"async\" width=\"1024\" height=\"911\" src=\"https://editorial.forbes.do/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-12-at-10.17.42-AM-e1682003681824-1024x911.jpeg\" alt=\"Corte de cabello para hombre\" class=\"wp-image-7316\" srcset=\"https://editorial.forbes.do/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-12-at-10.17.42-AM-e1682003681824-1024x911.jpeg 1024w, https://editorial.forbes.do/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-12-at-10.17.42-AM-e1682003681824-300x267.jpeg 300w, https://editorial.forbes.do/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-12-at-10.17.42-AM-e1682003681824-768x683.jpeg 768w, https://editorial.forbes.do/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-12-at-10.17.42-AM-e1682003681824.jpeg 1080w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /\u003e\u003cfigcaption class=\"wp-element-caption\"\u003eFoto: Jorge Beltr√°n\u003c/figcaption\u003e\u003c/figure\u003e\n\u003c/div\u003e\u003c/div\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e\u003cem\u003e¬°Descubre m√°s!\u003c/em\u003e\u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e\u003cem\u003e\u003ca href=\"https://www.forbes.com.mx/forbes-life/moda-colores-de-tinte-para-el-cabello-en-tendencia-esta-primavera/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003eTendencias de color en cabello para la primavera: recomendaciones de expertos\u003c/a\u003e\u003c/em\u003e\u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003ca href=\"https://www.forbes.com.mx/forbes-life/salud-tecnicas-ejercicio-barre-padel-rpm-2023/\"\u003e\u003cem\u003e\u003cstrong\u003e3 t√©cnicas de ejercicio que no puedes perder de vista este 2023\u003c/strong\u003e\u003c/em\u003e\u003c/a\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003eAunado a ello, nos cuenta que tambi√©n \u003cstrong\u003eel K-pop est√° influyendo mucho en los cortes de caballero\u003c/strong\u003e, ‚Äúla gente joven, m√°s o menos hasta los 30 y tantos traen esos \u003cstrong\u003ecortes muy asi√°ticos\u003c/strong\u003e‚Äù.\u003c/p\u003e\n\n\n\n\u003cdiv class=\"wp-block-group is-layout-constrained wp-block-group-is-layout-constrained\"\u003e\u003cdiv class=\"wp-block-group__inner-container\"\u003e\n\u003cfigure class=\"wp-block-image size-large\"\u003e\u003cimg loading=\"lazy\" decoding=\"async\" width=\"966\" height=\"1024\" src=\"https://editorial.forbes.do/wp-content/uploads/2023/04/ksalsns-966x1024.jpeg\" alt=\"K-pop corte de cabello\" class=\"wp-image-7320\" srcset=\"https://editorial.forbes.do/wp-content/uploads/2023/04/ksalsns-966x1024.jpeg 966w, https://editorial.forbes.do/wp-content/uploads/2023/04/ksalsns-283x300.jpeg 283w, https://editorial.forbes.do/wp-content/uploads/2023/04/ksalsns-768x814.jpeg 768w, https://editorial.forbes.do/wp-content/uploads/2023/04/ksalsns.jpeg 1280w\" sizes=\"(max-width: 966px) 100vw, 966px\" /\u003e\u003cfigcaption class=\"wp-element-caption\"\u003eFoto: Jorge Beltr√°n\u003c/figcaption\u003e\u003c/figure\u003e\n\u003c/div\u003e\u003c/div\u003e\n\n\n\n\u003cp\u003eOtro tipo de ‚Äúcorte‚Äù que se est√° usando mucho en los caballeros, nos cuenta Beltr√°n, son los \u003cstrong\u003ecabellos rapados \u003c/strong\u003eque se combinan con \u003cstrong\u003ebarbas largas y cuidadas\u003c/strong\u003e.\u003c/p\u003e\n\n\n\n\u003cdiv class=\"wp-block-group is-layout-constrained wp-block-group-is-layout-constrained\"\u003e\u003cdiv class=\"wp-block-group__inner-container\"\u003e\n\u003cfigure class=\"wp-block-image size-large\"\u003e\u003cimg loading=\"lazy\" decoding=\"async\" width=\"846\" height=\"1024\" src=\"https://editorial.forbes.do/wp-content/uploads/2023/04/saklwejdspas-846x1024.jpeg\" alt=\"Rapado con barba\" class=\"wp-image-7321\" srcset=\"https://editorial.forbes.do/wp-content/uploads/2023/04/saklwejdspas-846x1024.jpeg 846w, https://editorial.forbes.do/wp-content/uploads/2023/04/saklwejdspas-248x300.jpeg 248w, https://editorial.forbes.do/wp-content/uploads/2023/04/saklwejdspas-768x929.jpeg 768w, https://editorial.forbes.do/wp-content/uploads/2023/04/saklwejdspas-1269x1536.jpeg 1269w, https://editorial.forbes.do/wp-content/uploads/2023/04/saklwejdspas.jpeg 1280w\" sizes=\"(max-width: 846px) 100vw, 846px\" /\u003e\u003cfigcaption class=\"wp-element-caption\"\u003eFoto: Jorge Beltr√°n\u003c/figcaption\u003e\u003c/figure\u003e\n\u003c/div\u003e\u003c/div\u003e\n\n\n\n\u003cp\u003eEl especialista tambi√©n se√±ala que se est√°n usando muchos los \u003cstrong\u003etonos pastel en rosas, verdes y azules\u003c/strong\u003e para darle m√°s vida al cabello.\u003c/p\u003e\n\n\n\n\u003cp\u003eAs√≠ que ya sabes, estos son los \u003cstrong\u003ecortes de caballero\u003c/strong\u003e que se encuentran en tendencia.\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cem\u003e\u003cstrong\u003eS√≠guenos en:\u003c/strong\u003e\u003c/em\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003ca href=\"https://www.instagram.com/forbeslifelatam/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003eInstagram\u003c/a\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003ca href=\"https://www.facebook.com/ForbesLifeLatam/?ref=page_internal\" target=\"_blank\" rel=\"noreferrer noopener\"\u003eFacebook\u003c/a\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003ca href=\"https://mobile.twitter.com/ForbesLifeLatam\" target=\"_blank\" rel=\"noreferrer noopener\"\u003eTwitter\u003c/a\u003e\u003c/p\u003e\n","uri":"/forbes-life/2023-04-22/tendencias-cortes-de-cabello-para-caballero-que-son-tendencia-este-2","excerpt":"Esto tres cortes de cabello para caballero est√°n en tendencia este 2023 y seguro durar√°n muchos a√±os m√°s.","type":"post","date":"2023-04-22 07:04:00","published_date":"2023-04-22T07:00:00-04:00","modified_date":"2023-04-26T13:48:48-04:00","categories":[{"ID":1024,"name":"Forbes Life","slug":"forbes-life","acf_metas":null}],"meta":{"isSpotlight":["breaking"],"den_videos_oembed":[""],"is_advertorial":["no"],"show_in_fesp":["yes"],"post_views_count":["492"]},"tags":[{"ID":2307,"name":"barba","slug":"barba"},{"ID":2308,"name":"barber√≠a","slug":"barberia"},{"ID":2306,"name":"cabello desenfadado","slug":"cabello-desenfadado"},{"ID":2304,"name":"Cortes de cabello para caballero","slug":"cortes-de-cabello-para-caballero"},{"ID":1215,"name":"Forbes Life","slug":"forbes-life"},{"ID":2305,"name":"tendencias 2023","slug":"tendencias-2023"}],"image":{"featured_image":"https://editorial.forbes.do/wp-content/uploads/2023/04/barber-shop-g5d147fde1_1280-1-e1682004198645.jpg","image_alt":"Corte caballero","image_title":"Corte caballero","image_description":"Corte caballero","image_caption":"Foto: mostafa_meraji/Pixabay","srcset":"https://editorial.forbes.do/wp-content/uploads/2023/04/barber-shop-g5d147fde1_1280-1-e1682004198645.jpg 1280w, https://editorial.forbes.do/wp-content/uploads/2023/04/barber-shop-g5d147fde1_1280-1-e1682004198645-300x169.jpg 300w, https://editorial.forbes.do/wp-content/uploads/2023/04/barber-shop-g5d147fde1_1280-1-e1682004198645-1024x576.jpg 1024w, https://editorial.forbes.do/wp-content/uploads/2023/04/barber-shop-g5d147fde1_1280-1-e1682004198645-768x432.jpg 768w","width":1280,"height":720},"taxonomies":[],"yoast_info":{"_yoast_wpseo_primary_category":["1024"],"_yoast_wpseo_focuskw":["Caballero"],"_yoast_wpseo_title":["Cortes para cabellero que son tendencia este 2023"],"_yoast_wpseo_metadesc":["Esto tres cortes de cabello para caballero est√°n en tendencia este 2023 y seguro durar√°n muchos a√±os m√°s."],"_yoast_wpseo_linkdex":["74"],"_yoast_wpseo_content_score":["90"],"_yoast_wpseo_focuskeywords":["[]"],"_yoast_wpseo_keywordsynonyms":["[\"Cortes\"]"],"_yoast_wpseo_estimated-reading-time-minutes":["3"],"_yoast_wpseo_wordproof_timestamp":[""],"_yoast_indexnow_last_ping":["1682534929"]},"author":{"author_id":19,"author_name":"Blanca M√©ndez","author_uri":"/author/blanca-mendez/"},"den_videos_oembed":{"den_videos_oembed":null},"is_advertorial":{"is_advertorial":"no"},"show_in_fesp":{"show_in_fesp":"yes"},"text_advertorial":""},{"ID":7329,"slug":"cual-fue-la-ensenanza-que-jenny-polanco-le-dejo-a-su-hija-sobre-el-negocio-de-la-moda","title":"¬øCu√°l fue la ense√±anza que Jenny Polanco le dej√≥ a su hija sobre el negocio de la moda?","content":"\n\u003cp\u003eCarla Qui√±ones Polanco, Directora Ejecutiva de Jenny Polanco nos comparte tres ense√±anzas que le dej√≥ su madre sobre el negocio de la moda.\u003c/p\u003e\n","uri":"/video/2023-04-20/cual-fue-la-ensenanza-que-jenny-polanco-le-dejo-a-su-hija-sobre-el-negocio-de-la-moda","excerpt":null,"type":"post","date":"2023-04-20 15:04:12","published_date":"2023-04-20T15:18:12-04:00","modified_date":"2023-04-26T13:48:52-04:00","categories":[{"ID":1027,"name":"Video","slug":"video","acf_metas":null}],"meta":{"isSpotlight":["breaking"],"den_videos_oembed":["https://www.youtube.com/shorts/VbutHAFq-gc"],"is_advertorial":["no"],"show_in_fesp":["yes"],"post_views_count":["131"]},"tags":null,"image":{"featured_image":"https://editorial.forbes.do/wp-content/uploads/2023/04/36A8736.jpg","image_alt":"","image_title":"Carla Qui√±ones","image_description":"","image_caption":"","srcset":"https://editorial.forbes.do/wp-content/uploads/2023/04/36A8736.jpg 1080w, https://editorial.forbes.do/wp-content/uploads/2023/04/36A8736-300x200.jpg 300w, https://editorial.forbes.do/wp-content/uploads/2023/04/36A8736-1024x683.jpg 1024w, https://editorial.forbes.do/wp-content/uploads/2023/04/36A8736-768x512.jpg 768w","width":1080,"height":720},"taxonomies":[],"yoast_info":{"_yoast_indexnow_last_ping":["1682534933"],"_yoast_wpseo_content_score":["90"],"_yoast_wpseo_focuskeywords":["[]"],"_yoast_wpseo_keywordsynonyms":["[\"\"]"],"_yoast_wpseo_estimated-reading-time-minutes":["1"],"_yoast_wpseo_wordproof_timestamp":[""],"_yoast_wpseo_primary_category":["1027"]},"author":{"author_id":7,"author_name":"Ariadna Castro","author_uri":"/author/ariadna-castro/"},"den_videos_oembed":{"den_videos_oembed":"https://www.youtube.com/shorts/VbutHAFq-gc"},"is_advertorial":{"is_advertorial":"no"},"show_in_fesp":{"show_in_fesp":"yes"},"text_advertorial":""},{"ID":7303,"slug":"paises-y-sectores-con-mas-innovaciones-basadas-en-el-hidrogeno","title":"Pa√≠ses y sectores con m√°s innovaciones basadas en el hidr√≥geno","content":"\n\u003cp\u003eEl hidr√≥geno es una tecnolog√≠a que cada vez cobra m√°s fuerza en el campo de la energ√≠a limpia, desplazando incluso alternativas que se consideraban ideales para la transici√≥n energ√©tica como el gas natural, cuyo apogeo parece estar llegando a su fin.\u003c/p\u003e\n\n\n\n\u003cp\u003eLas proyecciones del \u003ca href=\"https://www.iea.org/reports/world-energy-outlook-2022/executive-summary?itid=lk_inline_enhanced-template\u0026amp;language=es\"\u003eAgencia Internacional de la Energ√≠a\u003c/a\u003e (IEA, por sus siglas en ingl√©s) indican que la demanda del gas natural y petr√≥leo podr√≠a reducirse alrededor de 20% en esta d√©cada, solo en la Uni√≥n Europea (UE). Su crecimiento tambi√©n se ha ralentizado en las econom√≠as en desarrollo, sobre todo en el sur y el sureste de Asia.\u003c/p\u003e\n\n\n\n\u003cp\u003eTodo esto ‚Äúhace mella en las credenciales del gas como combustible de transici√≥n‚Äù, se√±ala la IEA.\u003c/p\u003e\n\n\n\n\u003cp\u003eEn este contexto el hidr√≥geno ha comenzado a ganar terreno y muestra de ello es que \u003cstrong\u003edurante el per√≠odo 2011-2020 se registr√≥ la mayor cantidad de patentes de producci√≥n de energ√≠a en base a esta tecnolog√≠a\u003c/strong\u003e, seg√∫n un \u003ca href=\"https://iea.blob.core.windows.net/assets/1b7ab289-ecbc-4ec2-a238-f7d4f022d60f/Hydrogenpatentsforacleanenergyfuture.pdf\"\u003eestudio\u003c/a\u003e publicado este a√±o por la Oficina Europea de Patentes (EPO) y la IEA.\u003c/p\u003e\n\n\n\n\u003cp\u003eEl informe encontr√≥ que \u003cstrong\u003eel patentamiento global de tecnolog√≠as basadas en este elemento, el m√°s abundante en la Tierra, est√° liderado por la Uni√≥n Europea y Jap√≥n\u003c/strong\u003e, con el 28% y el 24% respectivamente, se√±ala un \u003ca href=\"https://www-iea-org.translate.goog/news/hydrogen-patents-indicate-shift-towards-clean-technologies-such-as-electrolysis-according-to-new-joint-study-by-iea-and-epo?_x_tr_sl=en\u0026amp;_x_tr_tl=es\u0026amp;_x_tr_hl=es-419\u0026amp;_x_tr_pto=sc\"\u003ecomunicado\u003c/a\u003e de la \u0026nbsp;IEA.\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003eLos pa√≠ses l√≠deres en Europa son Alemania (11% del total mundial), Francia (6%) y Holanda (3%). \u003c/strong\u003eTambi√©n se incluyen en la lista Reino Unido, Suiza y Canad√°, aunque en menor medida. En Corea del Sur y China la actividad sigui√≥ siendo modesta, pero est√° en aumento, se√±ala la nota.\u003c/p\u003e\n\n\n\n\u003cp\u003eEstados Unidos, en cambio, a pesar de que registra el 20 % de todas las patentes relacionadas con el hidr√≥geno, \u003cstrong\u003ees el √∫nico centro de innovaci√≥n importante que vio disminuir las solicitudes internacionales en la √∫ltima d√©cada.\u003c/strong\u003e\u003cstrong\u003e\u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003ch2 class=\"wp-block-heading\" id=\"h-sectores-y-empresas-que-mas-han-avanzado\"\u003e\u003cstrong\u003eSectores y empresas que m√°s han avanzado\u003c/strong\u003e\u003c/h2\u003e\n\n\n\n\u003cp\u003eLa IEA se√±ala que \u003cstrong\u003eel sector automotriz es uno de los que est√° m√°s activos en el registro de patentes de tecnolog√≠as de hidr√≥geno\u003c/strong\u003e. En este caso la se destacan las empresas japonesas \u003cstrong\u003eToyota\u003c/strong\u003e y \u003cstrong\u003eHonda\u003c/strong\u003e, y la coreana \u003cstrong\u003eHyundai.\u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003eLas universidades y los institutos p√∫blicos de investigaci√≥n, principalmente francesas y coreanas, son los sectores que le siguen a la industria de autom√≥viles con el 13.5 \u0026nbsp;de las patentes registradas.\u003c/p\u003e\n\n\n\n\u003ch2 class=\"wp-block-heading\"\u003e\u003cstrong\u003eMotivaci√≥n\u003c/strong\u003e\u003c/h2\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003eEl aumento del uso del hidr√≥geno responde en casi un 80% a motivaciones clim√°ticas \u003c/strong\u003eporque se considera una fuente de energ√≠a limpia que puede contribuir a la reducci√≥n de emisiones de gases contaminantes a la atm√≥sfera.\u003c/p\u003e\n","uri":"/estrategia/2023-04-19/paises-y-sectores-con-mas-innovaciones-basadas-en-el-hidrogeno","excerpt":"La IEA se√±ala que el sector automotriz es uno de los que est√° m√°s activos en el registro de patentes de tecnolog√≠as de hidr√≥geno. En este caso la se destacan las empresas japonesas Toyota y Honda, y la coreana Hyundai.","type":"post","date":"2023-04-19 12:04:10","published_date":"2023-04-19T12:42:10-04:00","modified_date":"2023-04-26T13:48:56-04:00","categories":[{"ID":1034,"name":"Estrategia","slug":"estrategia","acf_metas":{"colour_category":"#000"}}],"meta":{"isSpotlight":["breaking"],"den_videos_oembed":[""],"is_advertorial":["no"],"show_in_fesp":["yes"],"post_views_count":["141"]},"tags":[{"ID":2303,"name":"Energ√≠a limpia","slug":"energia-limpia"},{"ID":1414,"name":"Gas natural","slug":"gas-natural"},{"ID":2302,"name":"Hidr√≥geno","slug":"hidrogeno"}],"image":{"featured_image":"https://editorial.forbes.do/wp-content/uploads/2023/04/Hidrogeno-1.jpg","image_alt":"Hidr√≥geno Energ√≠a Innovaci√≥n","image_title":"Hidr√≥geno","image_description":"El hidr√≥geno es una fuente de energ√≠a limpia en crecimiento. Foto: Pixabay.","image_caption":"El hidr√≥geno es una fuente de energ√≠a limpia en crecimiento. Foto: Pixabay.","srcset":"https://editorial.forbes.do/wp-content/uploads/2023/04/Hidrogeno-1.jpg 1280w, https://editorial.forbes.do/wp-content/uploads/2023/04/Hidrogeno-1-300x187.jpg 300w, https://editorial.forbes.do/wp-content/uploads/2023/04/Hidrogeno-1-1024x637.jpg 1024w, https://editorial.forbes.do/wp-content/uploads/2023/04/Hidrogeno-1-768x478.jpg 768w","width":1280,"height":796},"taxonomies":[],"yoast_info":{"_yoast_indexnow_last_ping":["1682534937"],"_yoast_wpseo_primary_category":["1034"],"_yoast_wpseo_focuskw":["Hidr√≥geno"],"_yoast_wpseo_title":["Pa√≠ses y sectores con m√°s innovaciones basadas en el hidr√≥geno"],"_yoast_wpseo_metadesc":["El sector automotriz es uno de los que est√° m√°s activos en el registro de patentes de tecnolog√≠as de hidr√≥geno."],"_yoast_wpseo_linkdex":["77"],"_yoast_wpseo_content_score":["60"],"_yoast_wpseo_focuskeywords":["[]"],"_yoast_wpseo_keywordsynonyms":["[\"Patentes\"]"],"_yoast_wpseo_estimated-reading-time-minutes":["2"],"_yoast_wpseo_wordproof_timestamp":[""]},"author":{"author_id":11,"author_name":"Lilian Tejeda","author_uri":"/author/lilian-tejeda/"},"den_videos_oembed":{"den_videos_oembed":null},"is_advertorial":{"is_advertorial":"no"},"show_in_fesp":{"show_in_fesp":"yes"},"text_advertorial":""},{"ID":7289,"slug":"porque-marriott-hyatt-y-otros-gigantes-hoteleros-apuestan-por-los-resorts-todo-incluido","title":"Porqu√© Marriott, Hyatt y otros gigantes hoteleros apuestan por los resorts todo incluido","content":"\n\u003cp\u003eAl igual que los jeans acampanados y los tel√©fonos plegables, las modas de viaje a menudo retroceden, pero nunca exactamente de la misma manera que antes. Los resorts todo incluido actualmente disfrutan de un enorme aumento en popularidad, menos los buffets mediocres, las pi√±as coladas de bajo nivel y el entretenimiento cursi de d√©cadas pasadas.\u003c/p\u003e\n\n\n\n\u003cp\u003eEsta nueva ola de todo incluido tiene que ver con el lujo y ofrece una gran cantidad de atractivos, desde cenas gourmet a la carta hasta servicio de mayordomo personal y experiencias de alto nivel √∫nicas en sus lugares. En particular, muchas de estas propiedades est√°n siendo lanzadas por marcas de hospitalidad de lujo que ingresan al campo de todo incluido por primera vez.\u003c/p\u003e\n\n\n\n\u003cp\u003eAtrib√∫yalo a un cambio posterior a la pandemia en la mentalidad del consumidor, impulsado por una demanda de viajes alt√≠sima junto con una gran fatiga de decisiones. ‚ÄúLa gente realmente no busca sorpresas cuando se trata de lo que est√° incluido‚Äù, dice Brian King, presidente de la regi√≥n del Caribe y Am√©rica Latina de Marriott International. ‚ÄúQuieren simplemente ir y descubrir, disfrutar y realmente quieren pagar una vez y terminar‚Äù. Si bien el todo incluido no es un segmento nuevo, contin√∫a: \u0026#8220;Creo que las tendencias han cambiado de forma bastante dr√°stica\u0026#8221;.\u003c/p\u003e\n\n\n\n\u003cp\u003eEn d√©cadas pasadas, muchos resorts todo incluido eran trampas para moscas, dise√±adas para mantener a los hu√©spedes en la propiedad. En 2023, dice King, los hu√©spedes \u0026#8220;quieren ir m√°s all√° de la puerta\u0026#8221; y buscan un servicio de cuasi-conserjer√≠a creado en torno a experiencias curadas y dise√±adas. Estos vacacionistas quieren opciones fabulosas, pero nunca quieren sentirse demasiado programados.\u003c/p\u003e\n\n\n\n\u003cp\u003eKing llama a la f√≥rmula \u0026#8220;E al cuadrado\u0026#8221;, como en Entretenimiento x Educaci√≥n. En el Westin en Costa Rica, por ejemplo, los hu√©spedes pueden jugar al golf en un campo dise√±ado por Robert Trent Jones II, descubrir la vida silvestre en los parques nacionales en un veh√≠culo todoterreno o en un tour de canopy. Tambi√©n hay sesiones de aprendizaje de espa√±ol, demostraciones de cocina, degustaciones de c√≥cteles y clases de tai-chi y yoga. ‚ÄúEstamos creando estos eventos que deben ser tanto entretenidos como educativos‚Äù, dice King. \u0026#8220;Cuando obtienes la \u0026#8216;E al cuadrado\u0026#8217;, has ganado al consumidor\u0026#8221;.\u003c/p\u003e\n\n\n\n\u003ch2 class=\"wp-block-heading\" id=\"h-marriott-todo-incluido\"\u003eMarriott todo incluido\u003c/h2\u003e\n\n\n\n\u003cp\u003eCREMA OF THE CAP\u003cstrong\u003e: El nuevo Sanctuary Cap Cana solo para adultos en la Rep√∫blica Dominicana es una joya en la corona todo incluido de Marriott. \u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003eEl a√±o pasado, Marriott, \u003cstrong\u003ela empresa hotelera m√°s grande del mundo\u003c/strong\u003e, registr√≥ $21 mil millones en ingresos, un aumento del 50 % con respecto a 2021. El \u003cstrong\u003edirector ejecutivo de Marriott, Anthony Capuano, ha se√±alado que el segmento de todo incluido es un √°rea de crecimiento clave para el compa√±√≠a,\u003c/strong\u003e con muchas de las marcas de lujo de Marriott ingresando al espacio todo incluido. \u003cstrong\u003e‚ÄúEstamos trabajando en nuestra primera oferta con todo incluido de Ritz-Carlton.\u003c/strong\u003e Estamos muy entusiasmados con eso‚Äù, dice King, se√±alando el √©xito que ha tenido el yate Ritz-Carlton, con un barco de lujo lanzado en 2021 y un segundo en 2024.\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e‚ÄúTambi√©n estamos poniendo W en el espacio todo incluido, y ese ser√° un patio de recreo solo para adultos‚Äù, dice King sobre el primer W Hotel todo incluido. Est√° programado para abrir en 2025 en Rep√∫blica Dominicana con 349 habitaciones y suites, once restaurantes y bares, tres piscinas y un spa. \u003c/strong\u003e‚ÄúTambi√©n tenemos nuestro Westin que abrimos el a√±o pasado en Brasil, y que ha tenido un gran √©xito como un todo incluido familiar‚Äù.\u003c/p\u003e\n\n\n\n\u003cp\u003eSer√≠a f√°cil acreditar el √©xito de Marriott con todo incluido como un pivote brillante en tiempos posteriores a la pandemia. Pero la planificaci√≥n en realidad comenz√≥ mucho antes de la llegada del Covid, cuando los ejecutivos de la empresa reconocieron que su negocio de ocio estaba creciendo m√°s r√°pidamente que otros segmentos. Como parte de la fusi√≥n de Marriott con Starwood Hotels en 2016, hered√≥ lo que entonces era el √∫nico resort todo incluido de Westin, el Westin Golf Resort \u0026amp; Spa, Playa Conchal en Costa Rica. Posteriormente, el resort se convirti√≥ en un laboratorio de capacitaci√≥n para que Marriott ganara su experiencia con todo incluido. Al presentar nuevas propiedades, Marriott se encuentra en la posici√≥n envidiable de poder aprovechar su programa de lealtad Marriott Bonvoy, que cuenta con la asombrosa cifra de 177 millones de miembros.\u003c/p\u003e\n\n\n\n\u003cp\u003eLos asesores de viajes dicen que\u003cstrong\u003e el gran cambio de la industria es imposible de ignorar\u003c/strong\u003e. \u003cstrong\u003e‚ÄúEn una ventana de tres a√±os, Marriott pas√≥ de tener un todo incluido a 30, con m√°s en preparaci√≥n‚Äù\u003c/strong\u003e, dice Cory Hagopian, vicepresidente senior de ventas y asociaciones de Virtuoso, la red de viajes de lujo m√°s grande del mundo. Agrega que el gigante hotelero franc√©s Accor planea cuadriplicar el n√∫mero de propiedades Rixos con todo incluido en su establo.\u003c/p\u003e\n\n\n\n\u003cp\u003eApenas pasa un mes sin que un gigante de lujo se asocie con una marca con todo incluido. A finales del a√±o pasado, \u003cstrong\u003eInterContinental Hotels anunci√≥ un acuerdo a largo plazo con Iberostar Hotels \u0026amp; Resorts de Espa√±a, incorporando a IHG unos 70 hoteles con todo incluido. Hilton ahora opera una docena de propiedades de panader√≠a con todo incluido\u003c/strong\u003e, incluido el Hilton Tulum Riviera Maya de 735 habitaciones, el complejo m√°s grande de la compa√±√≠a en el Caribe.\u003c/p\u003e\n\n\n\n\u003cp\u003eY luego est√° \u003cstrong\u003eHyatt\u003c/strong\u003e, cuya adquisici√≥n de Apple Leisure Group por $2.7 mil millones en 2021 lo convirti√≥ en el mayor operador mundial de todo incluido de lujo, ahora distribuido en nueve marcas con m√°s de 120 resorts en 40 destinos frente al mar y 11 pa√≠ses.\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003ePara fines de 2023, la Colecci√≥n Inclusiva de Hyatt incluir√° m√°s de 45 resorts solo en M√©xico.\u003c/strong\u003e Las pr√≥ximas aperturas en M√©xico incluyen escondites √≠ntimos solo para adultos como Secrets Tulum Resort \u0026amp; Beach Club, as√≠ como Dreams Estrella Del Mar Mazatl√°n, ideal para familias, un resort que cuenta con un parque acu√°tico, un r√≠o lento, varias piscinas y 350 suites, cada una con al oc√©ano Pac√≠fico.\u003c/p\u003e\n\n\n\n\u003cp\u003e‚ÄúHacer crecer la huella de nuestra marca todo incluido con intenci√≥n es fundamental para el compromiso de Hyatt de brindar nuevas experiencias de viaje de lujo‚Äù, dice Erica Doyne, vicepresidenta s√©nior de marketing para la cartera todo incluido de la compa√±√≠a. \u003cstrong\u003e‚ÄúPlaneamos abrir cinco resorts Inclusive Collection en M√©xico y el Caribe este a√±o\u003c/strong\u003e, as√≠ como cinco propiedades adicionales en Bulgaria‚Äù. Tambi√©n en la pizarra est√° el muy esperado debut de la lujosa marca Dreams en Portugal, con Dreams Madeira Resort Spa \u0026amp; Marina que abrir√° a principios de 2024.\u003c/p\u003e\n\n\n\n\u003ch2 class=\"wp-block-heading\"\u003eHyatt todo incluido\u003cbr\u003e\u003c/h2\u003e\n\n\n\n\u003cp\u003eSi bien \u003cstrong\u003eM√©xico, el Caribe y Am√©rica Latina constituyen ‚Äúel granero del todo incluido‚Äù,\u003c/strong\u003e dice King de Marriott, Europa no se queda atr√°s. ‚ÄúY, eventualmente, veo que todo incluido tambi√©n se expande globalmente en Asia. As√≠ que esta es una tendencia mundial, no hay duda al respecto‚Äù.\u003c/p\u003e\n\n\n\n\u003cp\u003eDoyne ve los todo incluido como un motor de crecimiento potencialmente importante para Hyatt en Europa. ‚ÄúCon 46 resorts europeos con todo incluido en la cartera de Inclusive Collection, actualmente ofrecemos resorts en Espa√±a y Grecia, y se espera que Bulgaria y Portugal sigan pronto‚Äù, dice.\u003c/p\u003e\n\n\n\n\u003cp\u003eHagopian cree que \u003cstrong\u003elas condiciones econ√≥micas globales tambi√©n est√°n contribuyendo al auge del todo incluido\u003c/strong\u003e, se√±alando que la recesi√≥n de 2008 tambi√©n aceler√≥ la atracci√≥n de los viajeros acaudalados hacia el segmento de todo incluido. ‚ÄúM√°s consumidores de alto nivel se mostraron dispuestos a experimentar resorts con todo incluido‚Äù, dice. ‚ÄúHoy existe un nuevo conjunto de prioridades de los consumidores en torno a la conexi√≥n, el bienestar y la autenticidad.\u003cstrong\u003e Los resorts todo incluido deben atender estas nuevas prioridades, yendo m√°s all√° del modelo original que estaba m√°s orientado hacia la comodidad y el presupuesto‚Äù.\u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003ePara ver su punto, no busque m√°s all√° de Club Med, un pionero del concepto de todo incluido en la d√©cada de 1950, que acaba de anunciar una \u0026#8220;identidad de marca totalmente renovada y modernizada\u0026#8221; llamada L\u0026#8217;Esprit Libre (El esp√≠ritu libre) que promete una experiencia premium para los hu√©spedes. La expansi√≥n de Club Med incluye el lanzamiento de su cartera Exclusive Collection de resorts, villas, chal√©s e incluso un yate de cinco estrellas, ‚Äúllevando el lujo al siguiente nivel, desde platos individuales ingeniosamente elaborados hasta suites de varios dormitorios m√°s grandes y de alto dise√±o‚Äù.\u003c/p\u003e\n\n\n\n\u003cp\u003eEl cambio de marca llega en el momento perfecto, dice Kevin Armstrong, director s√©nior de marca y comunicaciones de Club Med North America and the Caribbean. ‚ÄúClub Med est√° redefiniendo el mercado de los resorts todo incluido que ofrecen unas vacaciones y felicidad exclusivas y premium, ya que los viajeros est√°n hambrientos de felicidad en este momento‚Äù.\u003c/p\u003e\n\n\n\n\u003cp\u003eDespu√©s de todo, a diferencia de los jeans acampanados, la felicidad nunca pasar√° de moda.\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e\u003cem\u003ePor Suzanne Rowan Kelleher\u003c/em\u003e\u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cem\u003eEste art√≠culo fue publicado originalmente por \u003ca href=\"https://www.forbes.com/?sh=52fbaef12254\"\u003eForbes US\u003c/a\u003e\u003c/em\u003e\u003c/p\u003e\n","uri":"/negocios/2023-04-17/porque-marriott-hyatt-y-otros-gigantes-hoteleros-apuestan-por-los-resorts-todo-incluido","excerpt":null,"type":"post","date":"2023-04-17 17:04:55","published_date":"2023-04-17T17:31:55-04:00","modified_date":"2023-04-26T13:49:12-04:00","categories":[{"ID":1035,"name":"Negocios","slug":"negocios","acf_metas":{"colour_category":"#000"}}],"meta":{"isSpotlight":["breaking"],"den_videos_oembed":[""],"is_advertorial":["no"],"show_in_fesp":["yes"],"post_views_count":["203"]},"tags":[{"ID":1057,"name":"Hoteles","slug":"hoteles"},{"ID":2091,"name":"Hyatt","slug":"hyatt"},{"ID":2298,"name":"Marriott","slug":"marriott"},{"ID":2297,"name":"Todo incluido","slug":"todo-incluido"}],"image":{"featured_image":"https://editorial.forbes.do/wp-content/uploads/2023/04/Hoteles-2.jpg","image_alt":"Todo incluido Hoteles Marriott Hyatt","image_title":"Hoteles 2","image_description":"","image_caption":"","srcset":"https://editorial.forbes.do/wp-content/uploads/2023/04/Hoteles-2.jpg 960w, https://editorial.forbes.do/wp-content/uploads/2023/04/Hoteles-2-300x169.jpg 300w, https://editorial.forbes.do/wp-content/uploads/2023/04/Hoteles-2-768x432.jpg 768w","width":960,"height":540},"taxonomies":[],"yoast_info":{"_yoast_wpseo_primary_category":["1035"],"_yoast_wpseo_focuskw":["Todo incluido"],"_yoast_wpseo_title":["Por qu√© Marriott, Hyatt apuestan por los resorts todo incluido"],"_yoast_wpseo_metadesc":["El nuevo Sanctuary Cap Cana solo para adultos en la Rep√∫blica Dominicana es una joya en la corona todo incluido de Marriott."],"_yoast_wpseo_linkdex":["77"],"_yoast_wpseo_content_score":["30"],"_yoast_wpseo_focuskeywords":["[]"],"_yoast_wpseo_keywordsynonyms":["[\"\"]"],"_yoast_wpseo_estimated-reading-time-minutes":["7"],"_yoast_wpseo_wordproof_timestamp":[""],"_yoast_indexnow_last_ping":["1682534953"]},"author":{"author_id":3,"author_name":"Forbes Staff","author_uri":"/author/forbes-staff/"},"den_videos_oembed":{"den_videos_oembed":null},"is_advertorial":{"is_advertorial":"no"},"show_in_fesp":{"show_in_fesp":"yes"},"text_advertorial":""},{"ID":6667,"slug":"entretenimiento-premios-oscar-mejores-presentadores","title":"Premios Oscar: Ellos han sido los mejores presentadores","content":"\n\u003cp\u003e\u003cstrong\u003eTras 94 ediciones\u003c/strong\u003e, diferentes anfitriones han \u003cstrong\u003etomado la batuta de la ceremonia \u003c/strong\u003em√°s imporante del\u003cstrong\u003e s√©ptimo arte\u003c/strong\u003e y estos son considerados como algunos de los\u003cstrong\u003e mejores presentadores \u003c/strong\u003een la historia de lo\u003cstrong\u003e Premios Oscar\u003c/strong\u003e. \u003c/p\u003e\n\n\n\n\u003cp\u003e\u003ca href=\"https://newsletter.forbes.com.mx/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003e\u003cstrong\u003e\u003cem\u003eSuscr√≠bete a nuestro newsletter semanal aqu√≠\u003c/em\u003e\u003c/strong\u003e\u003c/a\u003e\u003c/p\u003e\n\n\n\n\u003ch2 class=\"wp-block-heading\" id=\"h-hugh-jackman-2009\"\u003eHugh Jackman (2009)\u003c/h2\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003eHugh Jackman\u003c/strong\u003e solo ha sido anfitri√≥n de los Oscar \u003cstrong\u003euna vez\u003c/strong\u003e, pero el papel que desempe√±√≥ en esa ocasi√≥n\u003cstrong\u003e se volvi√≥ trascendental\u003c/strong\u003e, pues le brind√≥ \u003cstrong\u003euna serenta a Kate Winslet\u003c/strong\u003e, levant√≥ a Anne Hathawey de su asiento \u003cstrong\u003epara llevarla al escenario\u003c/strong\u003e, hizo un uso adecuado del humor y \u003cstrong\u003ecant√≥ una oda a las cintas nominadas\u003c/strong\u003e.\u003c/p\u003e\n\n\n\n\u003cfigure class=\"wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter\"\u003e\u003cdiv class=\"wp-block-embed__wrapper\"\u003e\n\u003cblockquote class=\"twitter-tweet\" data-width=\"550\" data-dnt=\"true\"\u003e\u003cp lang=\"es\" dir=\"ltr\"\u003eBuen momento para recordar que Hugh Jackman es tan bueno que fue el mejor presentador de los Oscar de los √∫ltimos 30 a√±os. En 2009 cant√≥, bail√≥, actu√≥ las pel√≠culas nominadas e hizo la ceremonia m√°s entretenida. \u003ca href=\"https://t.co/W01w70naP3\"\u003epic.twitter.com/W01w70naP3\u003c/a\u003e\u003c/p\u003e\u0026mdash; Pablo Planovsky (@PabloPlanovsky) \u003ca href=\"https://twitter.com/PabloPlanovsky/status/1448101393865248775?ref_src=twsrc%5Etfw\"\u003eOctober 13, 2021\u003c/a\u003e\u003c/blockquote\u003e\u003cscript async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"\u003e\u003c/script\u003e\n\u003c/div\u003e\u003c/figure\u003e\n\n\n\n\u003ch2 class=\"wp-block-heading\"\u003eEllen DeGeneres (2007, 2014)\u003c/h2\u003e\n\n\n\n\u003cp\u003eEllen ha sido\u003cstrong\u003e anfitriona de dos ceremonias\u003c/strong\u003e y en la √∫ltima de ellas se consagr√≥ como u\u003cstrong\u003ena de las mejores presentadoras\u003c/strong\u003e, no solo porque consigui√≥\u003cstrong\u003e empatizar con el p√∫blico\u003c/strong\u003e y pidi√≥ pizzas para las \u003cstrong\u003ecelebridades que asistieron\u003c/strong\u003e, sino porque adem√°s captur√≥\u003cstrong\u003e una de las selfies m√°s ic√≥nicas\u003c/strong\u003e de la historia junto a \u003cstrong\u003eAngelina Jolie\u003c/strong\u003e, Jennifer Lawrence,\u0026nbsp;\u003cstrong\u003eMeryl Streep\u003c/strong\u003e, Brad Pitt,\u003cstrong\u003e\u0026nbsp;Lupita Nyong‚Äôo\u003c/strong\u003e, entre otros.\u003c/p\u003e\n\n\n\n\u003cfigure class=\"wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter\"\u003e\u003cdiv class=\"wp-block-embed__wrapper\"\u003e\n\u003cblockquote class=\"twitter-tweet\" data-width=\"550\" data-dnt=\"true\"\u003e\u003cp lang=\"es\" dir=\"ltr\"\u003eImagens que entraram para a hist√≥ria XIX: A selfie do Oscar, por Ellen Degeneres (2019). \u003ca href=\"https://t.co/NOOJ3VSNR7\"\u003epic.twitter.com/NOOJ3VSNR7\u003c/a\u003e\u003c/p\u003e\u0026mdash; Roberto Queiroz (@Roberto83501127) \u003ca href=\"https://twitter.com/Roberto83501127/status/1573069718784819201?ref_src=twsrc%5Etfw\"\u003eSeptember 22, 2022\u003c/a\u003e\u003c/blockquote\u003e\u003cscript async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"\u003e\u003c/script\u003e\n\u003c/div\u003e\u003c/figure\u003e\n\n\n\n\u003ch2 class=\"wp-block-heading\"\u003eWhoopi Goldberg (1994, 1996, 1999 y 2002)\u003c/h2\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003eWhoopi Goldberg\u003c/strong\u003e ha sido anfitriona en \u003cstrong\u003ecuatro ocasiones\u003c/strong\u003e. En cada una de ellas\u003cstrong\u003e ha conquistado a la audiencia\u003c/strong\u003e con el humor que le inyecta a la ceremonia y con los \u003cstrong\u003edistintos cambios de vestuario que ha lucido\u003c/strong\u003e, mismos que se han vuelto ic√≥nicos.\u003c/p\u003e\n\n\n\n\u003cfigure class=\"wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter\"\u003e\u003cdiv class=\"wp-block-embed__wrapper\"\u003e\n\u003cblockquote class=\"twitter-tweet\" data-width=\"550\" data-dnt=\"true\"\u003e\u003cp lang=\"es\" dir=\"ltr\"\u003eA ra√≠z de la pol√©mica sobre Cleopatra recuerdo la gala de los Oscar de 1999 donde Whoopi Goldberg dijo que si Elisabeth Taylor pod√≠a interpretar a Cleopatra ella pod√≠a hacer de Elisabeth II. \u003ca href=\"https://t.co/tPKrR0uHJi\"\u003epic.twitter.com/tPKrR0uHJi\u003c/a\u003e\u003c/p\u003e\u0026mdash; Txema San (@Txm_San) \u003ca href=\"https://twitter.com/Txm_San/status/1215258812954939392?ref_src=twsrc%5Etfw\"\u003eJanuary 9, 2020\u003c/a\u003e\u003c/blockquote\u003e\u003cscript async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"\u003e\u003c/script\u003e\n\u003c/div\u003e\u003c/figure\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e\u003cem\u003e¬°Descubre m√°s!\u003c/em\u003e\u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e\u003cem\u003e\u003ca href=\"https://www.forbes.com.mx/forbes-life/entretenimiento-premios-oscar-2023-peliculas-nominadas/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003ePremios Oscar 2023: En d√≥nde ver la pel√≠culas con m√°s nominaciones\u003c/a\u003e\u003c/em\u003e\u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e\u003cem\u003e\u003ca href=\"https://www.forbes.com.mx/forbes-life/entretenimiento-cuando-donde-ver-premios-oscar-2023/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003e¬øCu√°ndo y d√≥nde ver los Premios Oscar 2023?\u003c/a\u003e\u003c/em\u003e\u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003ch2 class=\"wp-block-heading\"\u003eBilly Crystal (1990, 1991, 1992, 1993, 1997, 1998, 2000, 2004 y 2012)\u003c/h2\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003eBilly Crystal \u003c/strong\u003ees uno de los presentadores que cuenta con\u003cstrong\u003e m√°s participaciones en los Premios Oscar\u003c/strong\u003e. En cada una de ellas ha compartido \u003cstrong\u003esu humor y simpat√≠a\u003c/strong\u003e, incluso, lo hemos visto \u003cstrong\u003erecrear los pensamientos internos\u003c/strong\u003e de actores como Jack Nicholson y \u003cstrong\u003ehasta portar un bozal \u003c/strong\u003eal mismo estilo de \u003cstrong\u003eHannibal Lecter\u003c/strong\u003e.\u003c/p\u003e\n\n\n\n\u003cfigure class=\"wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter\"\u003e\u003cdiv class=\"wp-block-embed__wrapper\"\u003e\n\u003cblockquote class=\"twitter-tweet\" data-width=\"550\" data-dnt=\"true\"\u003e\u003cp lang=\"es\" dir=\"ltr\"\u003eBilly Crystal con la m√°scara de Hannibal abraza a Anthony Hopkins durante la ceremonia 64 de los premios \u003ca href=\"https://twitter.com/hashtag/Oscars?src=hash\u0026amp;ref_src=twsrc%5Etfw\"\u003e#Oscars\u003c/a\u003e de 1992 \u003ca href=\"https://t.co/fmO8by4viT\"\u003epic.twitter.com/fmO8by4viT\u003c/a\u003e\u003c/p\u003e\u0026mdash; The Film Fellas Club (@FilmFellasClub) \u003ca href=\"https://twitter.com/FilmFellasClub/status/1507541597432524806?ref_src=twsrc%5Etfw\"\u003eMarch 26, 2022\u003c/a\u003e\u003c/blockquote\u003e\u003cscript async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"\u003e\u003c/script\u003e\n\u003c/div\u003e\u003c/figure\u003e\n\n\n\n\u003ch2 class=\"wp-block-heading\"\u003eSteve Martin (2000, 2002 y 2010)\u003c/h2\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003eSteve Martin \u003c/strong\u003eha dirigido esta ceremonia tres veces, \u003cstrong\u003eaunque una de ellas \u003c/strong\u003elo hizo en compa√±√≠a del actor y comediante \u003cstrong\u003eAlec Baldwin\u003c/strong\u003e, sus participaciones m√°s destacadas \u003cstrong\u003eson las que desempe√±√≥ en solitario\u003c/strong\u003e, pues su \u003cstrong\u003ehumor c√°lido y su ingenio\u003c/strong\u003e fue recibido de la mejor manera para convertirlo en uno de los \u003cstrong\u003emejores presentadores\u003c/strong\u003e de los \u003cstrong\u003ePremios Oscar\u003c/strong\u003e.\u003c/p\u003e\n\n\n\n\u003cfigure class=\"wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter\"\u003e\u003cdiv class=\"wp-block-embed__wrapper\"\u003e\n\u003cblockquote class=\"twitter-tweet\" data-width=\"550\" data-dnt=\"true\"\u003e\u003cp lang=\"es\" dir=\"ltr\"\u003e‚ÄúFaltan vaginas‚Äù: el duro reclamo de Steve Martin y Chris Rock por la falta de directoras nominadas en los Premios Oscar\u003ca href=\"https://t.co/3UILPK1wdx\"\u003ehttps://t.co/3UILPK1wdx\u003c/a\u003e \u003ca href=\"https://t.co/Hmd7Vd8J2m\"\u003epic.twitter.com/Hmd7Vd8J2m\u003c/a\u003e\u003c/p\u003e\u0026mdash; LA 100 (@la100fm) \u003ca href=\"https://twitter.com/la100fm/status/1226701179876499456?ref_src=twsrc%5Etfw\"\u003eFebruary 10, 2020\u003c/a\u003e\u003c/blockquote\u003e\u003cscript async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"\u003e\u003c/script\u003e\n\u003c/div\u003e\u003c/figure\u003e\n\n\n\n\u003cp\u003e¬øEst√°s listo para descubrir las\u003cstrong\u003e grandes sopresas\u003c/strong\u003e que guarda la pr√≥xima edici√≥n de los \u003cstrong\u003ePremios Oscar?\u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cem\u003e\u003cstrong\u003eS√≠guenos en:\u003c/strong\u003e\u003c/em\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003ca href=\"https://www.instagram.com/forbeslifelatam/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003eInstagram\u003c/a\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003ca href=\"https://www.facebook.com/ForbesLifeLatam/?ref=page_internal\" target=\"_blank\" rel=\"noreferrer noopener\"\u003eFacebook\u003c/a\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003ca href=\"https://mobile.twitter.com/ForbesLifeLatam\" target=\"_blank\" rel=\"noreferrer noopener\"\u003eTwitter\u003c/a\u003e\u003c/p\u003e\n","uri":"/forbes-life/2023-03-11/entretenimiento-premios-oscar-mejores-presentadores","excerpt":"Ellen DeGeneres no solo capt√≥ una de las selfies m√°s ic√≥nicas, tambi√©n figura entre los mejores presentadores de los Premios Oscar.","type":"post","date":"2023-03-11 08:03:00","published_date":"2023-03-11T08:00:00-04:00","modified_date":"2023-03-12T19:12:58-04:00","categories":[{"ID":1024,"name":"Forbes Life","slug":"forbes-life","acf_metas":null}],"meta":{"isSpotlight":["breaking"],"den_videos_oembed":[""],"is_advertorial":["no"],"show_in_fesp":["yes"],"post_views_count":["139"]},"tags":[{"ID":2199,"name":"Ellen DeGeneres","slug":"ellen-degeneres"},{"ID":2198,"name":"Hugh Jackman","slug":"hugh-jackman"},{"ID":2196,"name":"Premios Oscar","slug":"premios-oscar"},{"ID":2197,"name":"Presentadores","slug":"presentadores"},{"ID":2200,"name":"Whoopi Goldberg","slug":"whoopi-goldberg"}],"image":{"featured_image":"https://editorial.forbes.do/wp-content/uploads/2023/03/mejores-presentadores-premios-oscar.webp","image_alt":"Mejores presentadores de los Premios Oscar","image_title":"mejores-presentadores-premios-oscar","image_description":"Mejores presentadores de los Premios Oscar","image_caption":"Foto: CAROLINE BREHMAN/EFE","srcset":"https://editorial.forbes.do/wp-content/uploads/2023/03/mejores-presentadores-premios-oscar.webp 1280w, https://editorial.forbes.do/wp-content/uploads/2023/03/mejores-presentadores-premios-oscar-300x169.webp 300w, https://editorial.forbes.do/wp-content/uploads/2023/03/mejores-presentadores-premios-oscar-1024x576.webp 1024w, https://editorial.forbes.do/wp-content/uploads/2023/03/mejores-presentadores-premios-oscar-768x432.webp 768w","width":1280,"height":720},"taxonomies":[],"yoast_info":{"_yoast_wpseo_primary_category":["1024"],"_yoast_wpseo_focuskw":["Premios Oscar"],"_yoast_wpseo_title":["Premios Oscar: Ellos han sido los mejores presentadores"],"_yoast_wpseo_metadesc":["Ellen DeGeneres no solo capt√≥ una de las selfies m√°s ic√≥nicas, tambi√©n figura entre los mejores presentadores de los Premios Oscar."],"_yoast_wpseo_linkdex":["78"],"_yoast_wpseo_content_score":["60"],"_yoast_wpseo_focuskeywords":["[]"],"_yoast_wpseo_keywordsynonyms":["[\"mejores presentadores\"]"],"_yoast_wpseo_estimated-reading-time-minutes":["2"],"_yoast_wpseo_wordproof_timestamp":[""],"_yoast_indexnow_last_ping":["1678669937"]},"author":{"author_id":3,"author_name":"Forbes Staff","author_uri":"/author/forbes-staff/"},"den_videos_oembed":{"den_videos_oembed":null},"is_advertorial":{"is_advertorial":"no"},"show_in_fesp":{"show_in_fesp":"yes"},"text_advertorial":""},{"ID":6346,"slug":"cuatro-acciones-para-formar-lideres-dentro-de-tu-empresa","title":"Cuatro acciones para formar l√≠deres dentro de tu empresa","content":"\n\u003cp\u003eA pesar de los exhaustivos procesos de contrataci√≥n, encontrar l√≠deres resistentes y pragm√°ticos puede resultar especialmente dif√≠cil. Seg√∫n un estudio de\u003ca href=\"https://www.gallup.com/workplace/231593/why-great-managers-rare.aspx\"\u003e \u003c/a\u003e\u003ca href=\"https://www.gallup.com/workplace/231593/why-great-managers-rare.aspx\"\u003eGallup\u003c/a\u003e, el 82% de las veces las organizaciones se equivocan y esto repercute en sus ingresos y rendimiento generales.\u0026nbsp;\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003eLos malos l√≠deres le cuestan a los negocios mucho dinero\u003c/strong\u003e y, si hay varios al frente de equipos, tienen la posibilidad de hacer que una organizaci√≥n fracase.\u003c/p\u003e\n\n\n\n\u003cp\u003ePocos nacen con una pericia innata para el liderazgo, por lo que \u003cstrong\u003elas empresas deben desarrollar las habilidades necesarias \u003c/strong\u003epara que sus l√≠deres se desenvuelvan bien al frente de un equipo, todo ello mientras las necesidades de las empresas y los entornos econ√≥micos m√°s amplios cambian constantemente.\u003c/p\u003e\n\n\n\n\u003cp\u003eDe esto habla el ebook de Udemy Business \u0026#8220;\u003ca href=\"https://business.udemy.com/resources/reimagining-leadership-development/?utm_source=organic-search\u0026amp;utm_medium=google\"\u003eReimagining Leadership Development for a Multi-Generational Workforce\u0026#8221;\u003c/a\u003e, que describe cuatro acciones que las empresas deben tener en cuenta para desarrollar l√≠deres estrat√©gicos e influyentes, especialmente cuando varias generaciones trabajan juntas.\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e1. Conocer a los miembros de la fuerza laboral. \u003c/strong\u003ePara formar a sus l√≠deres, las empresas necesitan conocer a las distintas generaciones que hoy conforman a la fuerza laboral, desde los nacidos antes de 1946, hasta los m√°s j√≥venes, los millennials y la generaci√≥n Z, los cuales cada vez ocupan m√°s puestos laborales.\u003c/p\u003e\n\n\n\n\u003cp\u003eEstos dos √∫ltimos valoran los beneficios que favorecen su desarrollo general, por encima incluso de las recompensas econ√≥micas, por lo que, a la hora de formarlos, es crucial que los l√≠deres les ofrezcan oportunidades que realmente les aporten valor y contribuyan a aumentar su fidelidad al puesto de trabajo.\u003c/p\u003e\n\n\n\n\u003cp\u003eParticularmente, los miembros de la GenZ son nativos digitales y buscan experiencias de aprendizaje personalizadas y flexibles para poder adquirir las competencias necesarias y mantenerse a la vanguardia.\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e\u003cem\u003eLee m√°s: \u003ca href=\"https://forbes.do/rankings/2023-02-13/lista-forbes-estos-son-los-10-artistas-mejor-pagados-del-mundo-en-2022\" target=\"_blank\" rel=\"noreferrer noopener\"\u003eLista Forbes | Estos son los 10 artistas mejor pagados del mundo en 2022\u003c/a\u003e\u003c/em\u003e\u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003ch2 class=\"wp-block-heading\" id=\"h-cuatro-acciones-para-formar-lideres-dentro-de-tu-empresa\"\u003eCuatro acciones para formar l√≠deres dentro de tu empresa\u003c/h2\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003eLa flexibilidad es tambi√©n una prioridad para ellos\u003c/strong\u003e ‚Äìincluso antes de la pandemia lo era‚Äì por lo que les gusta trabajar a distancia y tener un buen equilibrio entre la vida laboral y personal, con tiempo para hacer ejercicio o relajarse, por lo que a la hora de formarlos es importante tener en cuenta que trabajan con flexibilidad y por resultados.\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e2. Las habilidades que hoy se necesitan. \u003c/strong\u003ePero, ¬øen qu√© habilidades deben centrarse los empleados para liderar con equidad y crear una cultura positiva y de aprendizaje? Aunque hoy en d√≠a la educaci√≥n es cada vez m√°s personalizada, hay ciertas habilidades que pueden servir para todas las generaciones.\u003c/p\u003e\n\n\n\n\u003cp\u003eLa primera es diversidad, equidad e inclusi√≥n. \u003cstrong\u003eCada vez m√°s los colaboradores desean trabajar en un ambiente diverso\u003c/strong\u003e, de hecho, 67% de las personas afirman que √©ste es un factor determinante a la hora de evaluar ofertas de empleo, seg√∫n una encuesta de \u003ca href=\"https://www.glassdoor.com/employers/blog/diversity/\"\u003eGlassdoor\u003c/a\u003e. En este sentido, los l√≠deres son quienes definen la cultura y los valores organizacionales a trav√©s de sus acciones, por lo que \u003cstrong\u003ees importante que aprendan la importancia de incluir a todos\u003c/strong\u003e y valorar las distintas ideas, opiniones y or√≠genes. El primer consejo para lograrlo es prestar atenci√≥n a romper los prejuicios incondicionales que existen.\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003eOtro de los valores que necesitan aprender las personas para convertirse en l√≠deres es la empat√≠a\u003c/strong\u003e, ya que son los l√≠deres exitosos los que adecuan su forma de liderar a cada uno de sus colaboradores. Esto se conoce como \u0026#8220;liderazgo situacional\u0026#8221; y fomenta un mayor intercambio de ideas y la innovaci√≥n. Esto es fundamental porque \u003cstrong\u003esi los empleados se sienten bien haciendo su trabajo -y el l√≠der que tienen es consciente de su motivaci√≥n- ser√°n m√°s productivos.\u003c/strong\u003e\u003c/p\u003e\n\n\n\n\u003cp\u003eLa comunicaci√≥n es fundamental para que un equipo funcione bien, por lo que \u003cstrong\u003eun buen l√≠der debe comunicar claramente sus expectativas\u003c/strong\u003e, abordar las conversaciones dif√≠ciles con empat√≠a pero con firmeza y hacer las preguntas adecuadas para mantener una comunicaci√≥n bidireccional con sus empleados.\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e3. Oportunidades de aprender trabajando.\u003c/strong\u003e \u0026#8220;Una de las mejores formas de desarrollar a sus l√≠deres es darles la oportunidad de aprender en el trabajo\u0026#8221;, explica este e-book. De este modo, los empleados pueden \u0026#8220;aprender haciendo\u0026#8221;, lo que aumentar√° su retenci√≥n.\u003c/p\u003e\n\n\n\n\u003cp\u003eEllos pueden aprender distintas competencias mediante actividades pr√°cticas, ya sea d√°ndoles la oportunidad de dirigir un proyecto espec√≠fico, ayud√°ndoles a desarrollar una nueva funci√≥n dentro de la empresa, anim√°ndolos a crear un nuevo proceso interno o permiti√©ndoles cubrir el puesto de un colega.\u003c/p\u003e\n\n\n\n\u003cp\u003eSi la empresa tiene los recursos, puede tambi√©n apoyar programas de ‚Äòintraemprendimiento‚Äô que permitan a los empleados crear nuevos productos y servicios, y que puedan tomarse en paralelo al trabajo habitual.\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e4. Oportunidades de aprendizaje uno a uno. \u003c/strong\u003e\u0026#8220;Los buenos l√≠deres aprenden observando, hablando y obteniendo retroalimentaci√≥n de aquellos que ya recorrieron su camino\u0026#8221;, se√±ala el ebook.\u003c/p\u003e\n\n\n\n\u003cp\u003ePor ello, para ense√±arle a los colaboradores a ser l√≠deres un programa de mentor√≠a es adecuado: las organizaciones que tienen mentora formal, tienen en 46% una mejor calidad de liderazgo, de acuerdo con un reporte realizado por \u003ca href=\"https://www.forbes.com/sites/kathycaprino/2018/02/28/the-changing-face-of-leadership-10-new-research-findings-all-leaders-need-to-understand/?sh=725810061974\"\u003eEY\u003c/a\u003e, entre otras organizaciones.¬†\u003c/p\u003e\n\n\n\n\u003cp\u003e\u003cstrong\u003e\u003cem\u003eTe puede interesar: \u003ca href=\"https://forbes.do/estrategia/2023-02-17/cinco-gastos-innecesarios-que-danan-el-rendimiento-de-su-empresa\" target=\"_blank\" rel=\"noreferrer noopener\"\u003eCinco gastos innecesarios que da√±an el rendimiento de su empresa\u003c/a\u003e\u003c/em\u003e\u003c/strong\u003e\u003c/p\u003e\n","uri":"/estrategia/2023-02-25/cuatro-acciones-para-formar-lideres-dentro-de-tu-empresa","excerpt":null,"type":"post","date":"2023-02-25 13:02:00","published_date":"2023-02-25T13:14:00-04:00","modified_date":"2023-02-27T09:17:24-04:00","categories":[{"ID":1034,"name":"Estrategia","slug":"estrategia","acf_metas":{"colour_category":"#000"}}],"meta":{"isSpotlight":["breaking"],"den_videos_oembed":[""],"is_advertorial":["no"],"show_in_fesp":["yes"],"post_views_count":["482"]},"tags":[{"ID":1240,"name":"Empresas","slug":"empresas"},{"ID":2139,"name":"Equipos","slug":"equipos"},{"ID":1548,"name":"Liderazgo","slug":"liderazgo"},{"ID":2141,"name":"L√≠deres","slug":"lideres"},{"ID":1132,"name":"Negocios","slug":"negocios"},{"ID":2142,"name":"Recursos Humanos","slug":"recursos-humanos"}],"image":{"featured_image":"https://editorial.forbes.do/wp-content/uploads/2023/02/lideres.webp","image_alt":"","image_title":"lideres","image_description":"","image_caption":"","srcset":"https://editorial.forbes.do/wp-content/uploads/2023/02/lideres.webp 1745w, https://editorial.forbes.do/wp-content/uploads/2023/02/lideres-300x174.webp 300w, https://editorial.forbes.do/wp-content/uploads/2023/02/lideres-1024x593.webp 1024w, https://editorial.forbes.do/wp-content/uploads/2023/02/lideres-768x445.webp 768w, https://editorial.forbes.do/wp-content/uploads/2023/02/lideres-1536x890.webp 1536w","width":1745,"height":1011},"taxonomies":[],"yoast_info":{"_yoast_wpseo_primary_category":["1034"],"_yoast_wpseo_focuskw":["L√≠deres"],"_yoast_wpseo_title":["Cuatro acciones para formar l√≠deres dentro de tu empresa"],"_yoast_wpseo_metadesc":["A pesar de los exhaustivos procesos de contrataci√≥n, encontrar l√≠deres resistentes y pragm√°ticos puede resultar especialmente dif√≠cil."],"_yoast_wpseo_linkdex":["78"],"_yoast_wpseo_content_score":["30"],"_yoast_wpseo_focuskeywords":["[]"],"_yoast_wpseo_keywordsynonyms":["[\"Empresa\"]"],"_yoast_wpseo_estimated-reading-time-minutes":["4"],"_yoast_wpseo_wordproof_timestamp":[""],"_yoast_indexnow_last_ping":["1677510975"],"_yoast_post_redirect_info":["a:4:{s:6:\"origin\";s:78:\"estrategia/2023-02-17/cuatro-acciones-para-formar-lideres-dentro-de-tu-empresa\";s:6:\"target\";s:78:\"estrategia/2023-02-25/cuatro-acciones-para-formar-lideres-dentro-de-tu-empresa\";s:4:\"type\";i:301;s:6:\"format\";s:5:\"plain\";}"]},"author":{"author_id":3,"author_name":"Forbes Staff","author_uri":"/author/forbes-staff/"},"den_videos_oembed":{"den_videos_oembed":null},"is_advertorial":{"is_advertorial":"no"},"show_in_fesp":{"show_in_fesp":"yes"},"text_advertorial":""}],"spotlight":[{"ID":10680,"slug":"ocho-consejos-para-ahorrar-en-este-2024","title":"Ocho consejos para ahorrar en este 2024","content":"\n\u003cp\u003eEl 2024 no ser√° un a√±o f√°cil para ahorrar. La inflaci√≥n sigue golpeando a muchos pa√≠ses de Am√©rica Latina, por lo que muchas familias tendr√°n que seguir haciendo lo imposible solo para llegar a fin de mes.\u003c/p\u003e\n\n\n\n\u003cp\u003e\u0026#8220;No es un momento de muchas alegr√≠as porque la inflaci√≥n, a pesar de que est√° controlada, todav√≠a es alta\u0026#8221;, a