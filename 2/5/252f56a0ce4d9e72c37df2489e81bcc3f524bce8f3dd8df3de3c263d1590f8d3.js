/* Source and licensing information for the line(s) below can be found at https://www.navegg.com/themes/custom/navegg/js/global.js. */
/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {
  "use strict";
  new WOW().init();

  Drupal.behaviors.navegg = {
    attach: function (context, settings) {},
  };

  // Add row reverse propertie to accordions
  const rowAccordions = document.querySelectorAll('.sect-accordion .row')
  if(rowAccordions.length > 0){
    rowAccordions.forEach((item, i) => {
      if (i % 2 != 0) item.style.flexDirection = 'row-reverse'
    })
  }

  // Add z-index in pages with maps
  const componentsUbication = document.querySelectorAll('.paragraph--type--ubicacion')
  if(componentsUbication.length > 0){
    document.querySelector('header#mainHeader').style.zIndex = 9999
  }

  //Ordering menu languaje
  const menuLanguaje = document.querySelector('nav.navLanguage')
  if(menuLanguaje){

    const languajeSwitcher = menuLanguaje.querySelector('nav')
    const currentLanguajeSelected = languajeSwitcher.querySelector('span.is-active')
    languajeSwitcher.prepend(currentLanguajeSelected)
  
    //Add button dropdown languajes
    const buttonDropdownLanguajes = document.createElement('span')
    buttonDropdownLanguajes.id = 'buttonDropdownLanguajes'
    buttonDropdownLanguajes.addEventListener('click', function(event){
      languajeSwitcher.classList.toggle('languajeSwitcherActive')
    })
    menuLanguaje.append(buttonDropdownLanguajes)
  }

  //Organizando titulos de los menus del footer
  const mainFooterDesktop = document.querySelector('footer .footer-desktop')
  const footerMenusDesktop = mainFooterDesktop.querySelectorAll('.item-menu')
  footerMenusDesktop.forEach((menu) => {
    const menuTitle = menu.querySelector('h3')
    const menuTextTitle = menu.querySelector('li.menu-item--expanded span')
    menuTitle.textContent = menuTextTitle.textContent.trim()
    menuTextTitle.remove()
  })

  const mainFooterMobile = document.querySelector('footer .footer-mobile')
  const footerMenusMobile = mainFooterMobile.querySelectorAll('.accordion-item')
  footerMenusMobile.forEach((menu) => {
    const menuTitle = menu.querySelector('h2 button h4')
    const menuTextTitle = menu.querySelector('.accordion-collapse .menu-item--expanded span')
    menuTitle.textContent = menuTextTitle.textContent.trim()
    menuTextTitle.remove()
  })

  // Quitando padding top sel segundo elemento de CTA Hero
  if(window.innerWidth < 992){
    const ctaHero = document.querySelectorAll('.banner-general')
    ctaHero.forEach((banner, i) => {
      if (i > 0){
        banner.style.paddingTop = '30px'
        banner.querySelector('.img-main_banner').style.paddingTop = 0
      }
    })

  }

  var cookie_name = "cookienotice";
  if (document.cookie.search(cookie_name) == -1) {
    jQuery("#cookie-notice").show();
    document.cookie = cookie_name + "=1";
  }

  jQuery('#cookie-notice a.confirm').click(function () {
    jQuery(this).closest('#cookie-notice').fadeOut(200);
    return false;
  });
})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at https://www.navegg.com/themes/custom/navegg/js/global.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.navegg.com/themes/custom/navegg/js/social-proof.js. */
function activarClickTabs(tabsContenido, containerTabs) {
    containerTabs.querySelectorAll('a').forEach((tab) => {
        tab.addEventListener('click', function (ev) {
            ev.preventDefault()

            tabsContenido.forEach((contenido) => {
                if (contenido.dataset.tab === tab.dataset.totab) {
                    // Validar si hay algun elemento en el DOM con la clase .blazy para
                    // recargarlo y asi mostrar correctamente las imágenes
                    if (contenido.querySelector('.blazy')) {
                        setTimeout(function () {
                            Drupal.blazy.init.revalidate()
                        }, 100)
                    }
                    contenido.classList.add('d-block')
                } else {
                    contenido.classList.remove('d-block')
                }
            })

            const actualTabActivada = containerTabs.querySelector('a.active')
            if (actualTabActivada) {
                actualTabActivada.classList.remove('active')
            }
            tab.classList.add('active')

        })
    })
}

document.addEventListener('DOMContentLoaded', function (ev) {
    const tabsContenidoVariado = document.querySelector('.paragraph--type--social-proof')
    if (!tabsContenidoVariado) {
        localStorage.removeItem('blazyInCustomTab')
        return
    }

    const tabsContenido = tabsContenidoVariado.querySelectorAll('.contenido-tabs')
    const containerTabs = document.getElementById('tabs-de-contenido-variado')
    tabsContenido.forEach((contenido) => {
        const tabData = {
            id: contenido.dataset.tab,
            titulo: contenido.querySelector('span.tabName img')
        }

        const navLink = document.createElement('a')
        navLink.classList.add('nav-link')
        navLink.href = '#'
        navLink.appendChild(tabData.titulo)
        navLink.dataset.totab = tabData.id
        const navItem = document.createElement('li')
        navItem.classList.add('nav-item')
        navItem.appendChild(navLink)

        containerTabs.appendChild(navItem)
    })

    activarClickTabs(tabsContenido, containerTabs)
    containerTabs.querySelector('li > a').click()



    //Validar si solo existe un tab en la sección Social Proof
    const secTabs = tabsContenidoVariado.getElementsByClassName('section-tabs')
    const tabImg = tabsContenidoVariado.querySelectorAll('.nav-item')
    
    if(tabImg.length == 1){
        secTabs[0].style.display = 'none';
    }
    else{
        secTabs[0].style.display = 'block';
    }
})
/* Source and licensing information for the above line(s) can be found at https://www.navegg.com/themes/custom/navegg/js/social-proof.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.navegg.com/themes/custom/navegg/js/main-menu.js. */
function clickElementsMenu(ev){
    ev.preventDefault()

    let target = ev.target
    if(!ev.target.classList.contains('menu-item--expanded')){
        target = target.closest('li.menu-item--expanded')
    }
    
    if(window.innerWidth <= 991){
        const subMenuMobile = target.querySelector('ul.dropdown-menu')
        if(subMenuMobile.classList.contains('d-flex')){
            subMenuMobile.classList.remove('d-flex')
        } else {
            const containerMenus = target.closest('ul.navbar-nav')
            const menus = containerMenus.querySelectorAll('ul.dropdown-menu')
            menus.forEach(menu => menu.classList.remove('d-flex'))
            subMenuMobile.classList.add('d-flex')
            //subMenuMobile.classList.toggle('d-flex')
        }
    }
}

document.addEventListener('DOMContentLoaded', function(ev){
    const blockMainMenu = document.getElementById('block-mainnavigation')
    if(!blockMainMenu){
        return
    }

    const dropdowns = blockMainMenu.querySelectorAll('li.menu-item--expanded.dropdown')
    dropdowns.forEach((dropdown) => {
        const mainItem = dropdown.querySelector('a')
        mainItem.addEventListener('click', clickElementsMenu)


        const items = dropdown.querySelectorAll('.dropdown-menu .dropdown-item a')
        items.forEach((item) => {
            if(window.innerWidth > 991){
                const titleLink = item.getAttribute('title').trim()
        
                const descriptionItem = document.createElement('p')
                descriptionItem.textContent = titleLink
                item.appendChild(descriptionItem)
            }
        })
    })

    const buttonMenuInMobile = document.querySelector('#navbar-main .navbar-toggler')
    buttonMenuInMobile.addEventListener('click', function(ev){
        const menuMobile = document.getElementById('CollapsingNavbar')
        if(menuMobile.classList.contains('d-block')){
            menuMobile.classList.remove('d-block')
            buttonMenuInMobile.querySelector('span.navbar-toggler-icon').classList.remove('activeSubmenu')
        } else {
            menuMobile.classList.add('d-block')
            buttonMenuInMobile.querySelector('span.navbar-toggler-icon').classList.add('activeSubmenu')

            const subMenusMobile = document.querySelectorAll('.main-nav ul.dropdown-menu')
            subMenusMobile.forEach(menu => menu.classList.remove('d-flex'))
        }
    })

    if(window.innerWidth <= 991){
        const accountNavItems = document.querySelectorAll('.account-nav a')
        const newListItem = document.createElement('li')
        newListItem.classList.add('nav-item' , 'border-0')
        newListItem.appendChild(accountNavItems[0])
        accountNavItems[0].classList.add('customLoginResponsive')
        blockMainMenu.querySelector('ul').appendChild(newListItem)

        const btnSchedule = accountNavItems[1]
        btnSchedule.classList.add('btnScheduleResponsive')
        blockMainMenu.querySelector('ul').appendChild(btnSchedule)

        // Cambiando la pocisión de los menus principal y de lenguaje para sus adecuadas visualizaciones de movil
        const languajeMenu = document.querySelector('#mainHeader .menu-languaje')
        const menuParent = languajeMenu.parentElement
        const mainMenu = document.querySelector('#mainHeader .main-nav')
        menuParent.insertBefore(languajeMenu, mainMenu)
        
        
    }

    const mainNav = document.querySelector('.main-nav')
    const links = mainNav.querySelectorAll('li.dropdown-item a')
    links.forEach((link) => {
        if(link.href === location.href){
            const mainLinkParent = link.closest('li.nav-item.dropdown')
            mainLinkParent.querySelector('a.dropdown-toggle').classList.add('active')
        }
    })

    // Clic por fuera del menu





})
/* Source and licensing information for the above line(s) can be found at https://www.navegg.com/themes/custom/navegg/js/main-menu.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.navegg.com/themes/custom/navegg/js/prism.js. */
/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var E=w.value;if(n.length>e.length)return;if(!(E instanceof i)){var P,L=1;if(y){if(!(P=l(b,A,e,m))||P.index>=e.length)break;var S=P.index,O=P.index+P[0].length,j=A;for(j+=w.value.length;S>=j;)j+=(w=w.next).value.length;if(A=j-=w.value.length,w.value instanceof i)continue;for(var C=w;C!==n.tail&&(j<O||"string"==typeof C.value);C=C.next)L++,j+=C.value.length;L--,E=e.slice(A,j),P.index-=A}else if(!(P=l(b,0,E,m)))continue;S=P.index;var N=P[0],_=E.slice(0,S),M=E.slice(S+N.length),W=A+E.length;g&&W>g.reach&&(g.reach=W);var z=w.prev;if(_&&(z=u(n,z,_),A+=_.length),c(n,z,L),w=u(n,z,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),L>1){var I={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,I),g&&I.reach>g.reach&&(g.reach=I.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){return a})),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
!function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|"+e.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript;

/* Source and licensing information for the above line(s) can be found at https://www.navegg.com/themes/custom/navegg/js/prism.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.navegg.com/themes/custom/navegg/js/map.js. */
document.addEventListener("DOMContentLoaded", function (eev) {
  const maps = document.querySelectorAll(".map")
  if (maps.length > 0) {
    maps.forEach((mapElement, indexMap) => {
      const idMap = mapElement.id
      const lat = parseFloat(mapElement.dataset.latitud)
      const lon = parseFloat(mapElement.dataset.longitud)

      const map = L.map(idMap).setView([lat, lon], 16);
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      const marker = L.marker([lat, lon]).addTo(map)
    })
  }
})

/* Source and licensing information for the above line(s) can be found at https://www.navegg.com/themes/custom/navegg/js/map.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.navegg.com/themes/custom/navegg/js/tabs-testimonials.js. */
function activarClickTabs(tabsContenido, containerTabs) {
    containerTabs.querySelectorAll('a').forEach((tab) => {
        tab.addEventListener('click', function (ev) {
            ev.preventDefault()

            tabsContenido.forEach((contenido) => {
                if (contenido.dataset.tab === tab.dataset.totab) {
                    // Validar si hay algun elemento en el DOM con la clase .blazy para
                    // recargarlo y asi mostrar correctamente las imágenes
                    if (contenido.querySelector('.blazy')) {
                        setTimeout(function () {
                            Drupal.blazy.init.revalidate()
                        }, 100)
                    }
                    contenido.classList.add('d-block')
                } else {
                    contenido.classList.remove('d-block')
                }
            })

            const actualTabActivada = containerTabs.querySelector('a.active')
            if (actualTabActivada) {
                actualTabActivada.classList.remove('active')
            }
            tab.classList.add('active')

        })
    })
}

document.addEventListener('DOMContentLoaded', function (ev) {
    const tabsContenidoVariado = document.querySelector('.paragraph--type--testimonials-of-form')
    if (!tabsContenidoVariado) {
        localStorage.removeItem('blazyInCustomTab')
        return
    }

    const tabsContenido = tabsContenidoVariado.querySelectorAll('.contenido-tabs')
    const containerTabs = document.getElementById('tabs-de-contenido-variado')
    tabsContenido.forEach((contenido) => {
        const tabData = {
            id: contenido.dataset.tab,
            titulo: contenido.querySelector('span.tabName img')
        }

        const navLink = document.createElement('a')
        navLink.classList.add('nav-link')
        navLink.href = '#'
        navLink.appendChild(tabData.titulo)
        navLink.dataset.totab = tabData.id
        const navItem = document.createElement('li')
        navItem.classList.add('nav-item')
        navItem.appendChild(navLink)

        containerTabs.appendChild(navItem)
    })

    activarClickTabs(tabsContenido, containerTabs)
    containerTabs.querySelector('li > a').click()

    if(window.innerWidth < 770){
        const parentTabs = tabsContenidoVariado.parentElement
        parentTabs.removeChild(tabsContenidoVariado)

        const introTestimonials = document.querySelector('.introduction-testimonials')
        parentIntro = introTestimonials.parentElement
        parentIntro.removeChild(introTestimonials)

        const responsiveTestimonials = document.getElementById('responsive-testimonials-form')
        responsiveTestimonials.appendChild(introTestimonials)
        responsiveTestimonials.appendChild(tabsContenidoVariado)
    }
})
/* Source and licensing information for the above line(s) can be found at https://www.navegg.com/themes/custom/navegg/js/tabs-testimonials.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.navegg.com/themes/custom/navegg/js/acordion.js. */



document.addEventListener('DOMContentLoaded', function(ev){
    const paragraph = document.querySelector('.paragraph--type--highlight-accordion-left')
    if(!paragraph){
        return
    }

    // const items = paragraph.querySelectorAll('.paragraph--type--accordion-item')
    // items.forEach((item, i) => {
    //     if(i == 0){
    //         item.querySelector('.accordion-button').click()
    //     }
    // })
})
/* Source and licensing information for the above line(s) can be found at https://www.navegg.com/themes/custom/navegg/js/acordion.js. */;
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\x22],null,[\x22conf\x22,null,\x226LdGZJsoAAAAAIwMJHRwqiAHA6A_6ZP6bTYpbgSX\x22,0,null,null,null,1,[21,73,95,87,41,43,42,83,102,109],[262244,640],0,null,null,null,25,0,null,0,null,700],\x22https://zetaglobal.com:443\x22,[\x22ctask\x22,[[\x22hctask\x22,\x226768a915\x22,\x229dc295e8480839fdf7b6c786ccaeba7816ecfcff9570c47e905662f5d869e837\x22,0,100],[\x22hctask\x22,\x22a5f82756\x22,\x2205a104752a6e5f79722b9262f0043cd91579f80b90d4d13b29658152e00b68c1\x22,0,100],[\x22hctask\x22,\x22a2c56e69\x22,\x225af08615aa5a625f4e3f417f0ba452c4474e118117476d2150f7ca62f25145e1\x22,0,100]]],[3,1,3],null,null,null,1,3600,[\x22https://www.google.com/intl/en/policies/privacy/\x22,\x22https://www.google.com/intl/en/policies/terms/\x22],\x22wAXxbUux6W2nyn7ufeaisbew/VBPaRbNDvMZmJmX8tQ\\u003d\x22,0,0,null,1,1705643053362,0,0,[144,181,214,28,23],null,[150,215,224],\x22RC-S7UderNPbwJd-A\x22,null,0]");
    </script></body></html>