/*! Element Tracker - v1.2.1 - 2016-04-20
* Copyright (c) 2016 Globo.com; Licensed MIT */
!function(a,b){"use strict";var c=b(a);a._gaq=a._gaq||[],a.glb=a.glb||{},a.glb.ElementTracker=a.glb.ElementTracker||function(){function d(){return g(),h(),i(),this}function e(){b("body").off(".event-tracker"),b(a).off(".event-tracker")}function f(){return A}function g(){b("body").on("click.event-tracker","[data-track-click]",function(){return k(b(this)),!0})}function h(){p(),q(),r()}function i(){b("body").on("click.event-tracker","[data-track-links]",function(a){"A"===a.target.tagName&&m(b(a.target))})}function j(a){var b,c,d,e,f=[];for(e=0;e<A.scrollTrackItems.length;e++)b=A.scrollTrackItems[e],c=b.offset().top,d=a>c+y,d?l(b):f.push(b);A.scrollTrackItems=f}function k(a){var b=a.data("track-click");n(a,{label:b})}function l(a){var b=a.data("track-scroll");n(a,{label:b})}function m(a){var b={action:a.text(),label:a.attr("href")};n(a,b)}function n(c,d){w(c)&&(d=d||{},b.each(["category","action","value","noninteraction"],function(a,b){var e;d[b]||(e=x(c,b),d[b]=e||B[b])}),a._gaq.push(["_trackEvent",d.category,d.action,d.label,d.value,d.noninteraction]))}function o(a,b){A.scrollbarTrackingContext=a,A.scrollbarTrackingBreakpoints=b}function p(){var a,c,d=b("[data-track-scroll]");for(a=0;a<d.length;a++)c=d.eq(a),A.scrollTrackItems.push(c)}function q(){c.on("scroll.event-tracker",function(){s()})}function r(){var a=v();j(a)}function s(){z&&(z=!1,setTimeout(function(){var a=v();j(a),A.scrollbarTrackingBreakpoints&&t(a),z=!0},150))}function t(b){var c,d,e,f,g,h,i,j=A.scrollbarTrackingContext.height(),k=A.scrollbarTrackingBreakpoints,l=[];for(var m in k)c=k[m][0],e=k[m][1],f=k[m][2],g=k[m][3],h=k[m][4],d=c.toString(),i=c*j/100,i>b?l.push(k[m]):(a._gaq.push(["_setCustomVar",e,f,d,g]),a._gaq.push(["_trackEvent",f,d,h,!0]));A.scrollbarTrackingBreakpoints=l}function u(){return c.scrollTop.apply(c,arguments)}function v(){return u()+c.height()}function w(a){var b=a.closest("[data-track-disabled]");return 0===b.length}function x(a,b){var c=a.closest("[data-track-"+b+"]");return c.data("track-"+b)}var y=30,z=!0,A={scrollTrackItems:[],scrollbarTrackingBreakpoints:null,scrollbarTrackingContext:null},B={value:0,noninteraction:!1};return{init:d,destroy:e,initClicks:g,initScroll:h,initLinks:i,push:n,pushClick:k,pushScroll:l,pushLink:m,getInfo:f,removeElementsVisualized:j,enableScrollbarTrackingByBreakpoint:o}}(),a.glb.ElementTracker.init()}(this,jQuery);
sans-bold-normal.woff2" as="font" crossorigin type="font/woff2"><script>var utag_data = {"structure_tree":"[\"G1\", \"Previs\\u00e3o do Tempo\"]","editoria":"G1 \/ Previs\u00e3o do Tempo","ad_unit":"tvg_G1\/Utilidades\/Previsao_do_Tempo","complemento_ad_unit":".Home","ad_custom_data":"tvg_pgStr=g1\/previs\u00e3o do tempo","ad_site_page":"g1\/previsaodotempo","cor_pagina":"#C4170C","page_name":"index","tipo_pagina":"home","content_type":"Home Custom","ad_positions":"{\"mobile\": [\"banner_mobile_fim\", \"banner_materia2\"], \"desktop\": [\"banner_insert\", \"banner_materia2\"]}"};
    try { utag_data.ad_unit = utag_data.ad_unit + utag_data.complemento_ad_unit; }catch(err) { console.error(err.message); }
  </script><script src="//s3.glbimg.com/v1/AUTH_acd8438fd650434baa93efc372c066a1/libs/lib-pub-relay/g1/prod/lib-pub-relay-g1-latest.js" async></script><script>
    window.utag_data.gtm_loaded = true;
  </script><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5PWZB8V');</script><link rel="icon" href="https://s2-g1.glbimg.com/t2_E-_cSErv4fsbUVhwwEN0YMX0=/32x32/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png"><link rel="icon" sizes="128x128" href="https://s2-g1.glbimg.com/7_CSJ0a2BppGqptPkB7fE1Hacok=/128x128/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png"><link rel="icon" sizes="152x152" href="https://s2-g1.glbimg.com/szHLoTRvs6YWm9NNieGM7KU2eEE=/152x152/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png"><link rel="icon" sizes="167x167" href="https://s2-g1.glbimg.com/SU2Z6rs9rolyarVbXBSjaN6J0Jw=/167x167/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png"><link rel="icon" sizes="180x180" href="https://s2-g1.glbimg.com/S1o7u7ulLX54NM6X_pRUSid8yXg=/180x180/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png"><link rel="icon" sizes="192x192" href="https://s2-g1.glbimg.com/ANFXvAeR8V-2tbOMMP9tc2qFqJA=/192x192/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png"><link rel="icon" sizes="196x196" href="https://s2-g1.glbimg.com/LsuKXSXhHyq6vHO3DX_fXzijkCg=/196x196/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png"><link rel="apple-touch-icon" sizes="57x57" href="https://s2-g1.glbimg.com/GpmOCEG_6A1NUKWKtbzFpijsyR0=/57x57/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png"><link rel="apple-touch-icon" sizes="72x72" href="https://s2-g1.glbimg.com/ntE_GO6uMpnPlZ2uD5ueQavJQNE=/72x72/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png"><link rel="apple-touch-icon" sizes="114x114" href="https://s2-g1.glbimg.com/aFlLEuzGSYw2KtjvARZnCsFtgnk=/114x114/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png"><!-- Facebook --><meta property="fb:pages" content="180562885329138, 219182291443741, 116428248441032, 245000562218276, 192158074155314, 200292646669956, 182638081814153, 134115896703387, 131554330279675, 150737454992906, 159354314154963, 163750819397, 746858798714372, 246628845518037, 569361039814687, 252487748264782, 322744631148014, 718028201673172"><meta property="fb:app_id" content="289255557788943"><!-- Twitter --><meta property="twitter:description" content="Veja a previsão do tempo para hoje e para os próximos dias. No g1 você encontra informações sobre temperatura, clima, chuvas, umidade, vento e mais."><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title" content="Previsão do Tempo | Veja o clima e temperaturas pelo Brasil"><meta property="twitter:image" content="https://s.glbimg.com/jo/g1/static/live/imagens/img_facebook.png?g1"><title>Previsão do Tempo | Veja o clima e temperaturas pelo Brasil</title><meta name="title" content="Previsão do Tempo | Veja o clima e temperaturas pelo Brasil"><meta name="description" content="Veja a previsão do tempo para hoje e para os próximos dias. No g1 você encontra informações sobre temperatura, clima, chuvas, umidade, vento e mais."><meta itemprop="image" content="https://s.glbimg.com/jo/g1/static/live/imagens/img_facebook.png?g1"><link rel="canonical" href="https://g1.globo.com/previsao-do-tempo/"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:description" content="Veja a previsão do tempo para hoje e para os próximos dias. No g1 você encontra informações sobre temperatura, clima, chuvas, umidade, vento e mais."><meta property="og:title" content="Previsão do Tempo | Veja o clima e temperaturas pelo Brasil"><meta property="og:locale" content="pt_BR"><meta property="og:site_name" content="G1"><meta property="og:image" content="https://s.glbimg.com/jo/g1/static/live/imagens/img_facebook.png?g1"><meta property="og:image:width" content="1200"><meta property="og:url" content="https://g1.globo.com/previsao-do-tempo/"><meta name="robots" content="max-image-preview:large"><script type="application/ld+json">
  {
    "@context":"http://schema.org",
    "type":"WebPage",
    "name":"Previsão do Tempo | Veja o clima e temperaturas pelo Brasil",
    "description":"Veja a previsão do tempo para hoje e para os próximos dias. No g1 você encontra informações sobre temperatura, clima, chuvas, umidade, vento e mais.",
    "url":"https://g1.globo.com/previsao-do-tempo/",
    "image":"https://s.glbimg.com/jo/g1/static/live/imagens/img_facebook.png?g1"
  }
</script><script data-schema="Organization" type="application/ld+json">
  {
    "@type":"Organization",
    "@context":"http://schema.org",
    "name": "G1",
    "url": "https://g1.globo.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://s.glbimg.com/jo/g1/static/live/g1_amp/img/g1_logo_json_ld.png",
      "width": "94",
      "height": "60"
    },
    "parentOrganization": {
      "@type": "Organization",
      "@id": "https://redeglobo.globo.com/",
      "name": "Globo Comunicação e Participações S.A."
    }
  }
</script><script id="globalWebdepsScript" data-version="2.3.0">((()=>(e,t=document,r=window.performance,n=!1)=>{const s=()=>{let e,t
return{p:new Promise((r,n)=>{e=r,t=n}),s:e,j:t}}
e.serverError&&console.error(`[global-webdeps] Error\n${e.serverError}`)
const o=e=>new Map(e.map(([e,t,r])=>[e,a({name:e,url:t,detectionExpression:r})])),a=e=>{const t=s(),r=t.p.then(()=>c(e)),n=s(),o=i.then(()=>n.p).then(()=>l(e)).then(()=>u(e).then(t=>p(e,t))).catch(()=>(t.s(),r))
return Object.assign({},e,{request:()=>(n.s(),Promise.race([r,o]))})},i=new Promise(e=>t.addEventListener("DOMContentLoaded",e)),l=({url:e})=>new Promise((r,n)=>{[...t.scripts].find(t=>(t.getAttribute("src")||t.getAttribute("data-src")||"//@").split("//")[1]===e.split("//")[1])?r():n()}),c=({url:e})=>new Promise((r,n)=>{const s=t.createElement("script")
s.src=`${e}${e.includes("?")?"&":"?"}loading-agent=global-webdeps`,s.async=!0,s.onload=r,s.onerror=n,s.setAttribute("data-agent","global-webdeps"),t.head.appendChild(s)}),d=[],p=({name:e},t)=>{const o=t=>`[global-webdeps] ${e} detection ${t}`,{p:a,s:i,j:l}=s()
return d.push([i,l,t,()=>{r.mark(o("end")),r.measure(o(),o("start"),o("end"))},r.now(),e]),r.mark(o("start")),n||m(),a},m=()=>{n=!0
const e=r.now()
let t,s=d.length
for(;s--;)if(t=d.shift()){const[r,n,s,a,i,l]=t
let c
try{c=s()}catch(o){n(o)}!0===c?(a(),r()):e-i>6e4?(a(),n(Error(`[global-webdeps] Detection for "${l}" timed out`))):d.push(t)}d.length?setTimeout(m,100):n=!1},u=({name:e,detectionExpression:t})=>{let r,n
"string"==typeof t&&0!==t.length||(n=Error(`[global-webdeps] "${e}" hasn't a detection expression`))
try{r=Function(`return ${t}`)}catch(s){n=s}return new Protry {
		node[name] = value;
	} catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
var mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Invoke queued componentDidMount lifecycle methods */
function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
 *	@returns {Element} dom			The created/mutated element
 *	@private
 */
function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	// append the element if its a new parent
	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	// diffLevel being reduced to 0 means we're exiting the diff
	if (! --diffLevel) {
		hydrating = false;
		// invoke queued componentDidMount lifecycle methods
		if (!componentRoot) flushMounts();
	}

	return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	// empty values (null, undefined, booleans) render as empty Text nodes
	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === 'string' || typeof vnode === 'number') {

		// update if it's already a Text node:
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			// it wasn't a Text node: replace it with one and recycle the old Element
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	// If there's no existing element or it's the wrong type, create a new one:
	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			// move children into the replacement node
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			} // if the previous Element was mounted into the DOM, replace it inline
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			// recycle the old element (skips non-Element node types)
			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	}
	// otherwise, if there are existing or new children, diff them:
	else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	// Apply attributes/props from VNode to the DOM Element:
	diffAttributes(out, vnode.attributes, props);

	// restore previous SVG mode: (in case we're exiting an SVG namespace)
	isSvgMode = prevSvgMode;

	return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *	@param {Element} dom			Element whose children should be compared & mutated
 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
 *	@param {Boolean} mountAll
 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			}
			// attempt to pluck a node of the same type from the existing children
			else if (!child && min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			// morph the matched/found/created DOM child to match vchild (deep)
			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	// remove unused keyed children:
	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	// remove orphaned unkeyed children:
	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *	@param {Node} node						DOM node to start unmount/removal from
 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		// if node is owned by a Component, unmount that component (ends up recursing back here)
		unmountComponent(component);
	} else {
		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

/** Recollect/unmount all children.
 *	- we use .lastChild here because it causes less reflow than .firstChild
 *	- it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *	@param {Element} dom		Element with attributes to diff `attrs` against
 *	@param {Object} attrs		The desired end-state key-value attribute pairs
 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old) {
	var name;

	// remove attributes no longer present on the vnode by setting them to undefined
	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	// add new & update changed attributes
	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
	var name = component.constructor.name;
	(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
	var list = components[Ctor.name],
	    inst;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	if (list) {
		for (var i = list.length; i--;) {
			if (list[i].constructor === Ctor) {
				inst.nextBase = list[i].nextBase;
				list.splice(i, 1);
				break;
			}
		}
	}
	return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	if (component.__ref = props.ref) delete props.ref;
	if (component.__key = props.key) delete props.key;

	if (!component.base || mountAll) {
		if (component.componentWillMount) component.componentWillMount();
	} else if (component.componentWillReceiveProps) {
		component.componentWillReceiveProps(props, context);
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (opts !== 0) {
		if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    rendered,
	    inst,
	    cbase;

	// if updating
	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		// context to pass to the child, can be updated via (grand-)parent component
		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {
			// set up high order component link

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			// destroy high order component link
			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || opts === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {
		// Ensure that pending componentDidMount() hooks of child components
		// are called before the componentDidUpdate() hook in the parent.
		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
		// flushMounts();

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, previousContext);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	if (component._renderCallbacks != null) {
		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}
	}

	if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;
			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	// recursively tear down & recollect high-order component children:
	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		collectComponent(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, state) {
 *			return <div />;
 *		}
 *	}
 */
function Component(props, context) {
	this._dirty = true;

	/** @public
  *	@type {object}
  */
	this.context = context;

	/** @public
  *	@type {object}
  */
	this.props = props;

	/** @public
  *	@type {object}
  */
	this.state = this.state || {};
}

extend(Component.prototype, {

	/** Returns a `boolean` indicating if the component should re-render when receiving the given `props` and `state`.
  *	@param {object} nextProps
  *	@param {object} nextState
  *	@param {object} nextContext
  *	@returns {Boolean} should the component re-render
  *	@name shouldComponentUpdate
  *	@function
  */

	/** Update component state by copying properties from `state` to `this.state`.
  *	@param {object} state		A hash of state properties to update with new values
  *	@param {function} callback	A function to be called once component state is updated
  */
	setState: function setState(state, callback) {
		var s = this.state;
		if (!this.prevState) this.prevState = extend({}, s);
		extend(s, typeof state === 'function' ? state(s, this.props) : state);
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		enqueueRender(this);
	},


	/** Immediately perform a synchronous re-render of the component.
  *	@param {function} callback		A function to be called after component is re-rendered.
  *	@private
  */
	forceUpdate: function forceUpdate(callback) {
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		renderComponent(this, 2);
	},


	/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
  *	@param {object} state		The component's current state
  *	@param {object} context		Context object (if a parent component has provided context)
  *	@returns VNode
  */
	render: function render() {}
});

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};


/* harmony default export */ __webpack_exports__["default"] = (preact);
//# sourceMappingURL=preact.esm.js.map


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e){t.exports=__webpack_require__(0)},function(t,e,n){"use strict";function i(t,e){var n=[t];return e.className&&n.push(e.className),e.class&&n.push(e.class),n.join(" ")}function o(t){return(0,f.h)("div",{className:i(h.classPrefix,t)},t.children)}function a(t){return(0,f.h)("div",{className:i(h.classPrefix+"__header",t)},t.children)}function r(t){return(0,f.h)("h2",{className:i(h.classPrefix+"__title",t)},t.children)}function l(t){return(0,f.h)("div",{className:i(h.classPrefix+"__content",t)},t.children)}function s(t){return(0,f.h)("section",d({},t,{className:i(h.classPrefix+"__section",t)}),t.children)}function c(t){var e="left"==t.renderThumbnail?"right":"left",n=t.thumbnailFormat?t.thumbnailFormat:"squad",o={device_group:_,"feed-type":"COMPONENTE","post-id":t.post&&t.post.id?t.post.id:"null","post-type":t.post&&t.post.type?t.post.type:"null"};return(0,f.h)(l,{className:"\n        "+i(h.classPrefix+"__content",t)+"\n        post-list--align-"+e+"\n      "},(0,f.h)("ul",null,t.item.map(function(e,i){return(0,f.h)(m.default,{horizonData:Object.assign({"post-url":e.url,"post-has-photo":e.thumbnail?"true":"false"},o,t.horizonData),key:i,position:i+1,renderThumbnail:t.renderThumbnail,bastianToolkit:t.bastianToolkit,thumbnailFormat:n,svg:t.svg,item:e,gaLabel:t.gaLabel,gaAction:t.gaAction})})))}function u(t){return(0,f.h)("footer",{className:i(h.classPrefix+"__footer theme",t)},t.children)}Object.defineProperty(e,"__esModule",{value:!0});var d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};e.Post=o,e.Header=a,e.Title=r,e.Content=l,e.Section=s,e.ListPost=c,e.Footer=u;var f=n(0),h=n(5),p=n(2),m=function(t){return t&&t.__esModule?t:{default:t}}(p),_=window.SETTINGS.BASTIAN.DEVICE_GROUP;u.Link=function(t){return(0,f.h)("a",{className:i(h.classPrefix+"__footer-link",t),href:t.href},t.children,(0,f.h)("span",{className:h.classPrefix+"__arrow"},(0,f.h)("svg",{viewBox:"2 2 18 18"},(0,f.h)("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}))))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n(1),a=n(3),r=function(t){var e=t.thumbnailFormat,n=t.item,o=t.svg;return n.thumbnail?(0,i.h)("div",{className:"post-list__column-right"},(0,i.h)("div",{className:"post-list__column-right__image-"+e},l(o),(0,i.h)("img",{src:n.thumbnail,alt:n.title}))):null},l=function(t){return t?(0,i.h)("svg",{className:"post-list__column-right__image-squad__icon_player",width:"30px",height:"27px",viewBox:"0 0 30 27",version:"1.1"},(0,i.h)("g",{id:"Post-Playlist",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},(0,i.h)("g",{id:"BBB-AUTOMATICO-Copy",transform:"translate(-258.000000, -604.000000)",fill:"#FFFFFF"},(0,i.h)("g",{id:"Group-2",transform:"translate(16.000000, 315.000000)"},(0,i.h)("g",{id:"Group-8-Copy"},(0,i.h)("g",{id:"Group",transform:"translate(234.000000, 230.000000)"},(0,i.h)("g",{id:"SINALIZACAO"},(0,i.h)("g",{id:"icon",transform:"translate(8.000000, 58.000000)"},(0,i.h)("polygon",{id:"Fill-3",points:"0.934261363 12.3903949 23.4727793 12.3903949 23.4727793 8.63514534 0.934261363 8.63514534"}),(0,i.h)("polygon",{id:"Fill-6",points:"0.934261363 4.87876905 23.4727793 4.87876905 23.4727793 1.12351946 0.934261363 1.12351946"}),(0,i.h)("polygon",{id:"Fill-9",points:"0.934261363 19.9014575 15.9595644 19.9014575 15.9595644 16.1462079 0.934261363 16.1462079"}),(0,i.h)("polygon",{id:"Fill-12",points:"19.7165663 27.413027 29.1078033 21.7795893 19.7165663 16.1461515"}))))))))):null},s=function(t){var e=t.headline;return e?(0,i.h)("div",{className:"post-list__column-left__headline"},(0,i.h)("p",null,e)):null},c=function(t){var e=t.item;return e.title?(0,i.h)("div",{className:"post-list__column-left__title theme"},(0,i.h)("p",null,e.title)):null},u=function(t){var e=t.description;return e?(0,i.h)("div",{className:"post-list__column-left__description"},(0,i.h)("span",null,e)):null},d=function(t){var e=function(t){return(0,i.h)("a",t," ",t.children)},n=(0,a.withTracking)(e,"onClick",!1),l="clique | post 1 | "+t.gaLabel+" | posicao ",d=t.bastianToolkit?"clique | "+t.bastianToolkit.getAreaId()+" | post "+t.position+" | "+t.gaLabel+" | posicao "+t.bastianToolkit.getItemPosition()+" ":l,f=t.bastianToolkit?Object.assign({"post-position":t.bastianToolkit.getItemPosition()+""},t.horizonData):t.horizonData,h=t.item.className||"";return(0,i.h)(o.Section,{className:"post-list__section "+h},(0,i.h)(n,{horizonData:f,href:t.item.url,gaCategory:"feed",gaAction:t.gaAction,gaLabel:d},(0,i.h)("li",{className:"post-list__item"},(0,i.h)("div",{className:"post-list__column-left"},s(t.item),c(t),u(t.item)),r(t))))};e.default=d},function(t,e,n){"use strict";function i(){f||(f=!0,window.requestIdleCallback(o,{timeout:2e3}))}function o(t){for(f=!1,void 0===t&&(t={timeRemaining:function(){return Number.MAX_VALUE}});t.timeRemaining()>0&&d.length>0;){a(d.pop())}d.length>0&&i()}function a(t){window.ga(c+"_portal.send","event",t.gaEv_category,t.gaEv_action,t.gaEv_label)}function r(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(i){var o=function(t){var o=i.horizonData;i[e]&&i[e](t),h(i.gaCategory,i.gaAction,i.gaLabel,n),p(o)},a=Object.assign({},i);return a[e]=o,(0,l.h)(t,a,i.children)}}Object.defineProperty(e,"__esModule",{value:!0}),e.sendToHorizon=e.sendToGa=void 0,e.withTracking=r;var l=n(0),s=window.cdaaas.SETTINGS,c=s.SITE_ID,u=s.CANONICAL_URL;window.requestIdleCallback=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(t){clearTimeout(t)};var d=[],f=!1,h=e.sendToGa=function(t,e,n){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r={gaEv_category:t,gaEv_action:e,gaEv_label:n};o?(d.push(r),i()):a(r)},p=e.sendToHorizon=function(t){window.Horizon.Client().sendPostClick({attributes:t,object:u,product:c})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})});var o=n(3);Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})});var a=n(2);Object.keys(a).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return a[t]}})}),n(6)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.classPrefix="post-bastian-products"},function(t,e){}]);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){function t(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,o){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/Users/camyla.romao/Documents/Globo/post-economia-bolsa/dist",t(t.s=2)}([function(e,t){e.exports=__webpack_require__(0)},function(e,t,a){"use strict";t.__esModule=!0,t.PostName="post-economia-bolsa"},function(e,t,a){"use strict";function o(e,t,a){(0,n.render)((0,n.h)(s.default,{bastianToolkit:a,data:e.externalData}),t)}t.__esModule=!0,t.name=t.PostSection=void 0,t.render=o;var n=a(0),r=a(1);a(3);var i=a(4),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t.PostSection=i.PostSection,t.name=r.PostName},function(e,t){},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){return(0,s.h)("a",e,e.children)}function r(e){return(0,s.h)(c.Post,{className:l.PostName+" "+(!e.data.stockExchangeData.variation&&"hidden-post")},(0,s.h)(c.Content,null,i(e)))}function i(e){var t="clique | "+e.bastianToolkit.getAreaId()+" | ibovespa | com anexo | sem resumo | posicao "+e.bastianToolkit.getItemPosition();return(0,s.h)(c.Section,null,(0,s.h)(f,{href:p,gaCategory:"feed",gaAction:"post economia",gaLabel:t,className:"post-economia-link"},(0,s.h)("p",{className:l.PostName+"__header"},"Ibovespa",e.isNotPost?"":(0,s.h)("div",{className:l.PostName+"__logo"})),(0,s.h)(h.default,{quote:e.data.stockExchangeData,timeSeries:e.data.series}),(0,s.h)(m.default,{lastUpdated:e.data.stockExchangeData.lastUpdated})))}t.__esModule=!0,t.default=r,t.PostSection=i;var s=a(0),c=a(5),l=a(1),u=a(6),h=o(u),d=a(8),m=o(d),p="http://www.valor.com.br/valor-data/",f=(0,c.withTracking)(n,"onClick",!1)},function(e,t){e.exports=__webpack_require__(1)},function(e,t,a){"use strict";function o(e){var t=e.quote.variation||"N/A",a=t.includes("-")?"negative":"positive",o=t.includes("-")||t.includes("+")||"N/A"===t?t:"+"+t,i=e.quote.points;return(0,n.h)("div",{className:r.PostName+"__quote"},(0,n.h)("div",{className:r.PostName+"__quote-summary"},(0,n.h)("div",{className:r.PostName+"__quote-percentage"},(0,n.h)("span",{className:r.PostName+"--"+a},(0,n.h)("span",{className:r.PostName+"__quote-percentage-symbol"},o))),(0,n.h)("div",{className:r.PostName+"__quote-last-value",title:i},i)),(0,n.h)("div",{className:r.PostName+"__quote-chart"},(0,n.h)(s.default,{tipo:a,timeSeries:e.timeSeries})))}t.__esModule=!0,t.default=o;var n=a(0),r=a(1),i=a(7),s=function(e){return e&&e.__esModule?e:{default:e}}(i)},function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(0),s=a(1),c=function(e){function t(a){o(this,t);var r=n(this,e.call(this,a));return r.state={hasHighcharts:window.Highcharts||!1,hasData:!0},r}return r(t,e),t.prototype.loadChartLib=function(){var e=this;return new Promise(function(t,a){if(e.state.hasHighcharts)return void t(e);var o=!1,n=document.getElementsByTagName("script")[0],r=document.createElement("script");r.type="text/javascript",r.src="//s3.glbimg.com/cdn/libs/highcharts/4.2.7/highcharts.js",r.async=!0,r.onload=r.onreadystatechange=function(){o||this.readyState&&"complete"!=this.readyState||(o=!0,t(this))},r.onerror=r.onabort=a,n.parentNode.insertBefore(r,n)})},t.prototype._createChartConfig=function(e){var t=new Date(e[0][0]).getTimezoneOffset();window.Highcharts.setOptions({global:{timezoneOffset:t}});var a={positive:"#6ebf17",negative:"#c31313"},o=new Date(e[0][0]);e.forEach(function(e){var t=new Date(e[0]);t>o&&(o=t)});var n=e.filter(function(e){return new Date(e[0]).getDay()===o.getDay()}),r=n[0][0],i=n.slice(-1).pop()[0],s=parseFloat(n[0][1]),c=new Date(r);c.setHours(10,0,0,0);var l=(i-c.getTime())/36e5;return{chart:{type:"spline",spacingLeft:12,spacingRight:12,spacingBottom:0,spacingTop:8,animation:{duration:1200}},colors:[a[this.props.tipo]],credits:{enabled:!1},navigation:{buttonOptions:!1},xAxis:{tickInterval:36e5,type:"datetime",min:r,labels:{overflow:"right",step:Math.ceil(l