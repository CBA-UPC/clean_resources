/**
 * In-Tag Unit
 */
(function () {
	var intag = window.$ice.products.$create('intag', {
		/**
  * locate existing product (related tag / tag cloud) markers in the dom
  */
		locateMarkers: function locateMarkers(prodId, lines) {
			var rt = this.$root,
			    st = rt.settings,
			    b = rt.browser,
			    i,
			    leni,
			    markers,
			    arrOfMarkers = [],
			    autoMarker = [],
			    mode,
			    stit = this.settings,
			    bh = rt.comm.settings.responses.impression.prs[this.settings.prodCode].behavior;
			if (rt.what(prodId) != 'array') prodId = [prodId];

			for (i = 0, leni = prodId.length; i < leni; i++) {
				markers = document.getElementsByName(prodId[i]);
				if (markers.length) {
					for (var j = 0; j < markers.length; j++) {
						if (!markers[j].marked) {
							arrOfMarkers[j] = j);
						}
					}
					break;
				}
			}

			stit.mode = mode = rt.helpers.getVar('intag_mode') || bh.mode || stit.mode;

			// there are no manually placed markers so try auto placement (IE6 not supported)
			//also, don't run auto mode if rtm doesn't exist but there are manual markers created by inContent
			if (!st.inContentSets.inContentAutoExecuted && (rt.comm.settings.responses.gsd.wd.rtm == 'b' || !markers.length && !st.inContentSets.inContentManualExist) && (!b.IE || b.getVersion(true) > 6)) {
				autoMarker = rt.autoPlacement.createMarker(prodId, lines, mode, true, bh);
				if (autoMarker.length) this.settings.autoPlacement = true;
			}

			//return an array of objects {node:value, refNode:value}
			return rt.utils.array.concat([], arrOfMarkers, autoMarker);
		},

		/**
   * render dom envelope of a In-Tag unit
   */
		renderUnit: function renderUnit(instanceIndex) {
			var rt = this.$root,
			    st = rt.settings,
			    stit = this.settings,
			    instance = stit.instances[instanceIndex],
			    i,
			    leni,
			    html = '';

			for (i = 0, leni = instance.lines; i < leni; i++) {
				html += this.renderUnitLine(instanceIndex, i, i == leni - 1);
			}

			return rt.utils.dom.createDOMFragment({
				tag: 'div', parent: instance.container, after: instance.marker, cls: st.baseClass,
				style: { /*position:'relative',*/margin: '0 auto', padding: '10px 0', width: instance.width + 'px' /*, height:(bh.tagHeight+2)+'px'*/ },
				innerHTML: html
			});
		},

		/**
   * render a single line of hooks for an In-Tag unit. A unit can contain either one or two lines of hooks.
   */
		renderUnitLine: function renderUnitLine(instanceIndex, line, withLogo) {
			var rt = this.$root,
			    st = rt.settings,
			    stit = this.settings,
			    b = rt.browser,
			    instance = stit.instances[instanceIndex],
			    bh = stit.behavior.merged,
			    skinPath;

			// todo: this is a hack only to deal with 'nologo' skin instead of 'nologo' theme
			if (bh.skin == 'nologo') {
				bh.skin = 'variant';
				bh.theme = 'nologo';
			} else if (bh.skin == 'cdtodg') {
				bh.skin = 'variant';
				bh.theme = 'cdtodg';
			} else if (bh.skin == 'yell') {
				bh.skin = 'variant';
				bh.theme = 'yell';
			}

			skinPath = rt.helpers.getSkinPath(bh.skin, 'intag');
			// todo: if white label - use white label settings for logo image and link
			var tpl = '<% if (withLogo){ %>\	<% if (bh.theme != \'nologo\'){ %>\	<div id="<%= prodId %>_LOGO_<%= instanceIndex %>" class="<%= baseCls %>" style="float:right; margin-right:15px; margin-top:8px; width:53px; height:12px; cursor:pointer; font-size:1px; <% if (oldIE || oldFF){ %>background:url(<%= skinPath %>logo<%= bh.darkBg ? \'-gray\' : "" %>.png) no-repeat scroll 0 0 transparent;\	<% } %>">\				<% if (!(oldIE || oldFF)){ %>\					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="53px" height="12px" viewBox="0 0 636 144" enable-background="new 0 0 636 144" xml:space="preserve">\					<g>\						<%-- dot (first) --%>\						<path id="<%= prodId %>_LOGO_<%= instanceIndex %>_DOT1" style="fill:<%= bh.theme == \'def\' ? \'#208CE5\' : themeColor %>" d="M16.918,24.865c5.848,0,10.57-4.735,10.57-10.583s-4.722-10.57-10.57-10.57 S6.334,8.434,6.334,14.282S11.07,24.865,16.918,24.865"/>\						<%-- in --%>\						<path style="fill:<%= logoColor %>" d="M88.085,43.784H77.024c-17.149,0-31.181,14.031-31.181,31.182v34.796 c0,0.218,0.016,0.415,0.027,0.618v5.185c0,5.71-4.672,10.382-10.382,10.382h-0.467c-5.71,0-10.382-4.672-10.382-10.382V92.608 h0.015V45.889v-0.025c0-1.124-0.885-2.033-2.01-2.08h-11.49c-1.09,0.047-1.949,0.907-1.986,1.996v46.828h0.04 c-0.015,0.355-0.04,0.707-0.04,1.066v22.246c0,14.031,11.479,25.512,25.511,25.512h1.151c14.031,0,25.511-11.48,25.511-25.512 v-5.466v-4.62v-28.89c0.082-9.872,8.159-17.948,18.031-17.948h6.366c9.871,0,17.948,8.076,18.042,17.948v28.89v4.62v28.873 c0.013,0.023,0.013,0.034,0.013,0.048c0,1.111,0.883,2.008,1.983,2.057h11.505c1.077-0.036,1.936-0.887,1.985-1.973v-27.966v-5.659 V74.966C119.267,57.815,105.234,43.784,88.085,43.784"/>\						<%-- f (part) --%>\						<path style="fill:<%= logoColor %>" d="M155.069,56.972v82.643c-0.072,0.992-0.886,1.78-1.903,1.818h-11.014 c-1.062-0.038-1.912-0.897-1.912-1.962c0-0.024,0-0.048-0.023-0.073V34.456c0.716-17.064,14.923-30.744,32.179-30.744h8.536 c0.025,0,0.038,0.011,0.06,0.011c1.053,0,1.915,0.849,1.974,1.901v11.037c-0.035,1.016-0.85,1.844-1.878,1.889h-8.692 c-9.509,0-17.327,7.75-17.327,17.268v6.301V56.972z"/>\						<%-- f (part) --%>\						<path style="fill:<%= logoColor %>" d="M151.99,59.104h28.873c0.023-0.012,0.034-0.012,0.047-0.012 c1.111,0,2.008-0.884,2.057-1.984V45.604c-0.036-1.078-0.887-1.938-1.973-1.986h-27.965"/>\						<%-- o --%>\						<path style="fill:<%= logoColor %>" d="M276.24,107.925h0.158V76.608c-0.37-18.164-15.248-32.825-33.494-32.825 h-16.756v0.022c-17.875,0.431-32.322,14.924-32.679,32.803h-0.026v31.316c0,18.213,14.601,33.064,32.705,33.496v0.012h16.589h0.021 h0.146C261.304,141.349,276.24,126.354,276.24,107.925 M208.93,107.925L208.93,107.925V77.289c0-9.914,8.096-18.02,18.021-18.02 h15.953c9.946,0,18.02,8.106,18.02,18.02v30.636h-0.167c0,9.949-8.074,18.021-17.999,18.021h-15.807 C217.026,125.946,208.93,117.874,208.93,107.925"/>\						<%-- l --%>\						<path style="fill:<%= logoColor %>" d="M312.844,139.376L312.844,139.376c0,1.064-0.798,1.938-1.829,2.045h-11.816 c-1.027-0.107-1.837-0.98-1.837-2.045h-0.013V5.769h0.013c0-1.135,0.908-2.033,2.031-2.057h11.432 c1.124,0.024,2.019,0.922,2.019,2.057V139.376z"/>\						<%-- dot (second) --%>\						<path id="<%= prodId %>_LOGO_<%= instanceIndex %>_DOT2" \							style="fill:<%= bh.theme == \'def\' ? \'#208CE5\' : themeColor %>" d="M341.662,24.865c5.848,0,10.57-4.735,10.57-10.583s-4.723-10.57-10.57-10.57 s-10.584,4.722-10.584,10.57S335.814,24.865,341.662,24.865"/>\						<%-- in (second) --%>\						<path style="fill:<%= logoColor %>" d="M412.829,43.784h-11.061c-17.149,0-31.181,14.031-31.181,31.182v34.796 c0,0.218,0.016,0.415,0.026,0.618v5.185c0,5.71-4.672,10.382-10.382,10.382h-0.468c-5.71,0-10.382-4.672-10.382-10.382V92.608 h0.016V45.723v-0.025c0-1.123-0.885-2.033-2.01-2.08h-11.49c-1.091,0.047-1.949,0.908-1.986,1.996v46.994h0.04 c-0.015,0.355-0.04,0.707-0.04,1.066v22.246c0,14.031,11.479,25.512,25.512,25.512h1.15c14.031,0,25.512-11.48,25.512-25.512 v-5.466v-4.62v-28.89c0.082-9.872,8.158-17.948,18.029-17.948h6.367c9.871,0,17.947,8.076,18.041,17.948v28.89v4.62v28.873 c0.014,0.023,0.014,0.034,0.014,0.048c0,1.111,0.883,2.008,1.982,2.057h11.506c1.076-0.036,1.936-0.887,1.984-1.973v-27.966v-5.659 V74.966C444.01,57.815,429.979,43.784,412.829,43.784"/>\						<%-- k --%>\						<path style="fill:<%= logoColor %>" d="M480.277,139.376L480.277,139.376V91.735h0.146h9.255l40.656,48.766 c0.599,0.549,1.15,0.906,1.841,0.932h16.073c0.882-0.025,2.869-0.322,1.794-2.056l-0.013-0.024l-47.58-56.777l44.599-36.815 c0.015-0.049,0.015-0.049,0.036-0.073c1.066-1.734-0.886-2.032-1.78-2.069H527.08c-0.621,0.024-1.15,0.324-1.666,0.791 l-36.812,31.075h-8.325V5.769c0-1.135-0.896-2.033-2.02-2.057h-11.422c-1.124,0.024-2.033,0.922-2.033,2.057v133.607 c0,1.064,0.803,1.938,1.844,2.045h11.802C479.476,141.313,480.277,140.44,480.277,139.376"/>\						<%-- s --%>\						<path style="fill:<%= logoColor %>" d="M603.208,84.782H577.99c-6.91-0.114-12.508-5.785-12.508-12.783 c0-6.996,5.598-12.895,12.508-12.895h39.271c1.146,0,2.08-0.959,2.08-2.111v0.191V45.752v-0.037c0-1.164-0.935-2.097-2.08-2.097 H577.99c-15.451,0-28.008,12.73-28.008,28.381c0,15.651,12.557,28.381,28.008,28.27h24.252c6.911,0.111,12.508,5.812,12.508,12.795 c0,6.996-5.597,12.896-12.508,12.896H591.56l0.001-0.014h-28.874c-0.022,0.014-0.034,0.014-0.047,0.014 c-1.11,0-2.007,0.896-2.056,2.01v11.449c0.035,1.092,0.886,1.963,1.973,2.014h0.225h27.74h12.224 c15.209-0.279,27.491-12.9,27.491-28.369C630.236,97.737,618.191,85.202,603.208,84.782"/>\					</g>\					</svg>\				<% } %>\			</div>\			<% } %>\			<% } %>\			<ul id="<%= prodId %>_LIST_<%= instanceIndex %>_<%= line %>" class="<%= baseCls %>" style="display:block; width:<%= instance.width - bh.logoWidth -30 %>px; height:<%= bh.tagHeight %>px; text-align:center; padding:0; margin:6px 0 0 0; font-size:0; overflow:hidden;"></ul>';
			return rt.utils.VeST(tpl, {
				prodId: stit.prodId,
				baseCls: st.baseClass,
				st: st,
				bh: bh,
				themeColor: stit.themes.color[bh.theme],
				instance: instance,
				instanceIndex: instanceIndex,
				oldIE: stit.oldIE,
				oldFF: b.Firefox && b.getVersion(true) < 4,
				skinPath: skinPath,
				line: line,
				withLogo: withLogo,
				logoColor: bh.darkBg ? '#888888' : '#003366'
			});
		},

		/**
   * handle hook mouse over/out
   */
		hookMouseStateChange: function hookMouseStateChange(event) {
			var el = event.element,
			    key;
			for (key in event.data) {
				el.style[key] = event.data[key];
			}
		}
	}, {
		settings: {
			prodId: 'IL_IN_TAG',
			tagCloud: 'IL_TAG_CLOUD', // backwards compatibility: id of the old tag cloud
			relatedTags: 'IL_RELATED_TAGS', // backwards compatibility: id of the old related tags
			prodCode: 't',
			prodName: 'intag',
			instances: [],
			sentences: {},
			// IE older than 9 or in compatibility mode
			oldIE: function () {
				var b = window.$ice.$root.browser;return b.IE && (document.compatMode == 'BackCompat' || b.getVersion(true) < 9);
			}(),

			behavior: {
				// default behavior settings
				def: {
					skin: 'variant',
					theme: 'def',
					fontFamily: 'Arial,sans-serif',
					fontWeight: 'normal',
					fontSize: 13,
					underline: 'single',
					logoHeight: 11,
					logoWidth: 48,
					height: 60,
					hookMargin: 15,
					lines: 2,
					darkBg: false // flag if the website background is dark (so that the logo will be gray)
				},

				// behavior sanitizer
				sanitizer: {
					fontFamily: 'str',
					fontWeight: ['normal', 'bold'],
					fontSize: 'int',
					underline: ['double', 'single', 'dotted', 'dashed', 'none'],
					logoHeight: 'int',
					logoWidth: 'int',
					height: 'int',
					hookMargin: 'int',
					lines: 'int',
					darkBg: 'bool'
				}
			},

			themes: {
				color: {
					def: '#003366',
					lightBlue: '#1b8ede',
					green: '#67b045',
					orange: '#f3933b',
					red: '#dd3c42',
					pink: '#d84189',
					purple: '#5939aa',
					cstm1: '#faa51b' // custom color for conduit bubble
				}
			},
			mode: 'default'
		}
	}, true);

	/**
  * In-Tag entry point
  */
	intag.bind({
		event: 'renderIntagProduct',
		listener: {
			renderIntag: function renderIntag() {
				var rt = this.$root,
				    prod = this.settings.prodCode;
				if (!rt.comm.settings.responses.impression.prs[prod]) {
					rt.event.fire('productRenderStatus', { prod: prod, status: 'none' });
					return;
				}
				rt.event.fire('productRenderStatus', { prod: prod, status: 'during' });

				rt.event.fire('initIntag');
			}
		}
	});

	intag.bind({
		event: 'destroy',
		listener: {
			destroy: function destroy(e) {
				var rt = this.$root,
				    stit = this.settings,
				    ut = rt.utils,
				    imp = stit.behavior.merged;
				try {
					if (imp.gptDestroySlots == 'true') {
						for (var i = 0; i < stit.instances.length; i++) {
							stit.instances[i].node.parentNode.removeChild(stit.instances[i].node);
							stit.status = 'none';
						}
					}
				} catch (err) {}
			}
		}
	});

	intag.bind({
		event: 'initIntag',
		listener: {
			init: function init() {
				var rt = this.$root,
				    st = rt.settings,
				    bh = st.behavior,
				    stit = this.settings,
				    prod = stit.prodCode,
				    hp = rt.helpers,
				    uto = rt.utils.object,
				    prodImp = rt.comm.settings.responses.impression.prs[prod],
				    bhr = stit.behavior,
				    i,
				    leni,
				    initialVars;
				// bubble not ready, product can't be initialized
				// fire event again from bubbleLoaded
				if (!rt.bubble) return;
				initialVars = {
					bottomPlacementAlgo: 'palgo',
					pn: 500,
					mwfa: 200,
					mp: 6,
					fbit: 'true'
				};

				var cbh = rt.helpers.getVar('related_tags') || {}; // read related tags behavior settings (for backwards compatibility)
				bhr.impression = rt.helpers.renameBehaviorProperties(prodImp.behavior || {});
				hp.initAlgoBehaviors(bhr.impression, initialVars);
				bhr.merged = uto.extend({}, bh.def, bhr.def, bh.impression, bhr.impression, bh.customer, cbh);
				bhr.merged.tagHeight = Math.max(Math.ceil(bhr.merged.fontSize * 1.3) + 2, 17);
				rt.helpers.sanitize(bhr.merged, uto.extend({}, bh.sanitizer, bhr.sanitizer));

				// todo: this is a hack only to deal with 'nologo' skin instead of 'nologo' theme
				if (!stit.themes.color[bhr.merged.theme]) {
					if (bhr.merged.theme == 'nologo' || bhr.merged.theme == 'cdtodg' || bhr.merged.theme == 'yell') {
						//do nothing, theme stays
					} else {
						bhr.merged.theme = 'def';
					}
				}

				if (!rt.bubble.initialized) {
					rt.event.fire('initBubble', stit.prodName);
				}

				// find embedded related tags markers or try to auto-place a marker
				var markers = this.locateMarkers([stit.prodId, stit.relatedTags], bhr.merged.lines);
				if (markers.length) {
					for (i = 0, leni = markers.length; i < leni; i++) {
						var o = {
							marker: markers[i].node,
							container: markers[i].refNode,
							lines: Math.min(parseInt(markers[i].node.value, 10) || bhr.def.lines, 4), // read value from marker, or use the default. Limit to a max of 4 lines
							hooksCount: 0 // counter for the number of hooks that will be created in this instance
						};
						// calculate instance width
						o.width = rt.utils.dom.element.getActualWidth(o.container);
						o.index = i;
						// check that width is adequate
						if (o.width < st.intagMinContentWidth) {
							rt.logger.warn('Warning: In-Tag instance does not have minimum required width.', this.init);
							continue;
						}

						rt.utils.array.push(stit.instances, o);
					}
				}
				// render In-Tag
				rt.event.fire('createIntagUnits');
			}
		}
	});

	intag.bind({
		event: 'createIntagUnits',
		listener: {
			createIntagUnits: function createIntagUnits() {
				var rt = this.$root,
				    st = rt.settings,
				    stit = this.settings,
				    bh = stit.behavior.merged,
				    ut = rt.utils,
				    dm = ut.dom,
				    dmel = dm.element,
				    i,
				    leni,
				    k,
				    lenk,
				    instance,
				    sentence,
				    liNode,
				    hook,
				    baseCls = st.baseClass,
				    hookId,
				    j,
				    lenj,
				    lines,
				    currentLine,
				    logo,
				    adNode,
				    ps,
				    b = rt.browser,
				    arrInstances = [];

				// build related tags style
				var underline = dm.style.buildHookUnderlineCSS(bh.underline, bh.linkColor, true);
				dm.style.addRule('.' + stit.prodId + '_AD', [underline, 'display:inline; color:', bh.linkColor, ' !important; cursor:pointer !important; font-family:', bh.fontFamily, '; font-weight:', bh.fontWeight, '; font-size:', bh.fontSize, 'px !important; white-space:nowrap !important; float:none !important;'].join(''));
				var liStyle = { display: 'inline', margin: 0, padding: 0, background: 'none', width: 'auto', cssFloat: 'none', styleFloat: 'none' };

				var currentSentenceIndex = 0,
				    imp = rt.comm.settings.responses.impression,
				    sentenceIndexes = imp.prs[stit.prodCode].sentences,
				    el,
				    ul,
				    computedWidth,
				    availWidth,
				    sentenceLoopCount,
				    sentencesKeys = ut.object.keys(imp.sentences);

				// iterate instances
				for (i = 0, leni = stit.instances.length; i < leni; i++) {
					instance = stit.instances[i];
					currentLine = 0;
					// create in-tag wrapper
					el = instance.node = this.renderUnit(i);
					ps = el.previousSibling;
					while (ps) {
						if (ps.nodeType == st.nodeTypes.ELEMENT && ps.tagName.toLowerCase() != 'input') {
							if (/left|right/.test(dmel.getStyle(ps, b.IE ? 'styleFloat' : 'cssFloat'))) dmel.setStyle(el, { clear: 'left' });
							break;
						}
						ps = ps.previousSibling;
					}

					instance.pos = dmel.offset(el);
					// get the instance's ul elements
					lines = [];
					for (j = 0, lenj = instance.lines; j < lenj; j++) {
						ul = dmel.$([stit.prodId, 'LIST', i, j].join('_'));
						if (ul) ut.array.push(lines, ul);
					}
					if (!lines.length) {
						rt.logger.warn('Error: In-Tag UL element not found.', this.createIntagUnits);
						rt.event.fire('productRenderStatus', { prod: stit.prodCode, status: 'none' });
						return;
					}

					// handle logo click
					logo = dmel.$([stit.prodId, 'LOGO', i].join('_'));

					if (logo) {
						rt.event.dom.bind(logo, {
							event: 'click', listener: function listener(event) {
								rt.utils.dom.event.stop(event.domEvent);
								if (st.homeUrl) window.open(rt.helpers.setKid(st.homeUrl, stit.prodCode), '_blank');
							}
						});
					}

					computedWidth = 0;
					availWidth = instance.width - bh.logoWidth - 30;

					//we don't want to display the same word more than 3 times in the related tag component so count the loops
					sentenceLoopCount = 0;

					// iterate product sentences to create hooks in the instance wrapper
					for (k = currentSentenceIndex, lenk = sentenceIndexes.length; k < lenk; k++) {
						sentence = sentencesKeys[sentenceIndexes[k]];

						// create a new hook
						hookId = ++st.hooksCount;
						liNode = dm.createDOMFragment({
							tag: 'li', parent: lines[currentLine], cls: baseCls, style: liStyle, children: {
								tag: 'span', cls: [baseCls, ' ', stit.prodId, '_AD'].join(''),
								style: { padding: ['0 ', bh.hookMargin, 'px'].join(''), fontWeight: 'normal' },
								id: [stit.prodId, '_AD', hookId].join(''), innerHTML: ut.string.capitalize(sentence)
							}
						});

						adNode = liNode.getElementsByTagName('span')[0];
						rt.event.dom.bind(adNode, { event: 'mouseover', data: { fontWeight: 'bold', padding: ['0 ', bh.hookMargin - 2, 'px'].join('') }, listener: this.hookMouseStateChange });
						rt.event.dom.bind(adNode, { event: 'mouseout', data: { fontWeight: 'normal', padding: ['0 ', bh.hookMargin, 'px'].join('') }, listener: this.hookMouseStateChange });

						// check if the added hook exceeds the available width
						computedWidth += /*bh.hookMargin * 2 +*/liNode.offsetWidth;
						// check if the new hook exceeds the width of the line
						if (computedWidth > availWidth || sentenceLoopCount >= 3 && currentLine >= lines.length - 1) {
							// if there are more lines to render - move the hook to the next line
							if (currentLine < lines.length - 1) {
								// move the liNode to the next ul
								lines[++currentLine].appendChild(liNode);
								computedWidth = bh.hookMargin * 2 + liNode.offsetWidth;
							}
							// if there are no more lines - remove the hook and end the instance
							else {
									lines[currentLine].removeChild(liNode);
									currentSentenceIndex = k;
									st.hooksCount--;
									break;
								}
						}

						instance.hooksCount++;
						hook = rt.helpers.createHook(hookId, sentence, liNode.firstChild, bh.fontSize, this, stit.prodCode, stit.prodName, true, instance);
						hook.line = currentLine + 1;
						hook.instanceIndex = instance.index;

						if (stit.autoPlacement) hook.pst = 'auto';

						/* There must be a line break between the links so that if the link's width exceeds
       * the available width it will break line in the DOM. */
						dm.createDOMFragment({ isTextNode: true, value: '\n', parent: lines[currentLine] });

						// if we've reached the last sentence - reset to the first and continue rendering
						if (k == lenk - 1) {
							k = -1;
							++sentenceLoopCount;
						}
					}

					arrInstances.push(instance);
				}

				var clObj = {},
				    aboveTheFold,
				    tempInstance,
				    docHeight;
				for (i = 0; i < arrInstances.length; i++) {
					tempInstance = arrInstances[i];
					clObj[i] = {
						aboveTheFold: dmel.isOnViewport(tempInstance.node),
						top: tempInstance.pos.top,
						docHeight: dm.viewport.getHeight(),
						width: tempInstance.width,
						index: tempInstance.index,
						hooksCount: tempInstance.hooksCount,
						lines: tempInstance.lines
					};
				}

				//send data to CL
				if (st.useClParams.itl) {
					rt.event.fire('sendClientLog', { params: { intag_markers: arrInstances.length, mode: stit.mode, clObj: clObj } });
				}
				// notify that tag cloud product has finished rendering
				this.$root.event.fire('productRenderStatus', { prod: stit.prodCode, status: 'after' });
			}
		}
	});
})();
/**
 * In-Line Unit
 */
(function () {
    var incontent = window.$ice.products.$create('incontent', {
        /**
         * locate existing product markers in the dom
         */
        locateMarkers: function locateMarkers(prod, lines) {
            var rt = this.$root,
                b = rt.browser,
                i,
                st = rt.settings,
                leni,
                markers,
                arrOfMarkers = [],
                autoMarker = [],
                mode,
                stic = this.settings,
                hp = rt.helpers,
                oldProdId,
                ut = rt.utils,
                oldMarkers,
                prodId,
                wd = rt.comm.settings.responses.gsd.wd,
                bh = stic.behavior.merged,
                resImp = rt.comm.settings.responses.impression;

            if (prod == 'c') {
                prodId = stic.intagProdId; //For product testing, we need to use IN_TAG markers for inContent placement
                oldProdId = stic.intagOldProdId; //We need to support intags with the old name - RELATED_TAGS
            } else {
                prodId = stic.prodId[prod];
            }

            if (rt.what(prodId) != 'array') prodId = [prodId];

            for (i = 0, leni = prodId.length; i < leni; i++) {
                markers = document.getElementsByName(prodId[i]);
                oldMarkers = document.getElementsByName(oldProdId);

                if (oldProdId) {
                    markers = ut.array.concat(markers, oldMarkers);
                }

                if (markers.length) {
                    if (prod == 'n') {
                        //get the last marker in the array - as designed
                        //this is where multiple in recomment markers were defined
                        arrOfMarkers[0] = {
                            node: markers[markers.length - 1],
                            refNode: markers[markers.length - 1].parentNode
                        };
                    } else if (prod == 'a') {
                        //render only inarticle products that have sentences in the doq response
                        for (var j = 0; j < resImp.prs[prod].sentences.length && j < markers.length; j++) {
                            arrOfMarkers[j] = { node: markers[j], refNode: markers[j].parentNode };
                        }
                        // arrOfMarkers[0] = { node: markers[0], refNode: markers[0].parentNode };
                    } else {
                        for (j = 0; j < markers.length; j++) {
                            arrOfMarkers[j] = function (n) {
                                markers[n].IL_isManual = true;
                                return { node: markers[n], refNode: markers[n].parentNode };
                            }(j);
                        }
                    }

                    break;
                }
            }

            mode = rt.helpers.getVar('in_' + prod + '_mode') || stic.behavior.merged.mode || stic.mode[prod];
            // there are no manually placed markers so try auto placement (IE6 not supported)
            if ((wd.rtm == 'b' || !markers.length) && (!b.IE || b.getVersion(true) > 6)) {

                if (prod == 'c') {
                    this.settings.autoPlacement = true;
                    if (this.showAutoIncontentInstance(mode)) {
                        autoMarker = rt.autoPlacement.createMarker(prodId, lines, mode, true, bh);
                        if (autoMarker.length) {
                            //marked inContent as executed, no need to run auto placment again in inTag
                            st.inContentSets.inContentAutoExecuted = true;
                            if (mode == 'headerM' || mode == 'topM') {
                                autoMarker = this.checkMultipuleInstances(autoMarker);
                                autoMarker.mode = 'auto';
                            }
                        }
                    }
                } else //other products like 'n' or 'a'
                    {
                        if (!markers.length) {
                            this.settings.autoPlacement = true;
                            autoMarker = rt.autoPlacement.createMarker(prodId, lines, mode, true, bh);
                        }
                    }

                if (!markers.length && !autoMarker.length) {
                    delete st.singleGetAdsPrs[prod];
                }
            }

            //return an array of objects {node:value, refNode:value}
            return rt.utils.array.concat([], arrOfMarkers, autoMarker);
        },
        /**
         * render dom envelope of a In-Content unit
         */
        renderHtmlUnit: function renderHtmlUnit(instanceIndex, prod, ad) {
            var rt = this.$root,
                st = rt.settings,
                stic = this.settings,
                instance = stic.instances[prod][instanceIndex],
                html;

            ad.instanceWidth = instance.width;

            html = this.templates.container(instanceIndex, prod, ad);
            w = instance.width + 'px';
            var containerId = stic.prodId[prod] + "_" + instanceIndex;

            return rt.utils.dom.createDOMFragment({
                tag: 'div',
                parent: instance.container,
                after: instance.marker,
                cls: st.baseClass,
                id: containerId,
                style: {
                    margin: '0 auto',
                    padding: "10px 0",
                    cursor: 'pointer',
                    height: ad.height,
                    width: w
                },
                innerHTML: html
            });
        },
        /**
         * render dom envelope of a In-Content unit
         */
        renderTextUnit: function renderTextUnit(instanceIndex, hook, adIdx, node, lastAdInInstance, prod, ad, scale) {
            var rt = this.$root,
                ut = rt.utils,
                st = rt.settings,
                stic = this.settings,
                floatLeft = '',
                adNode,
                instance = stic.instances[prod][instanceIndex],
                html,
                hp = rt.helpers,
                bh = stic.behavior.merged,
                fixedSize;
            ad.instanceWidth = instance.width;

            if (instance.marker.getAttribute('data-as')) {
                // for 320*50~728*90 => 320*50
                //@TODO remove replace when prod fixes x to *
                fixedSize = {
                    w: instance.marker.getAttribute('data-as').split("~")[0].split("x")[0].replace(/x/g, '*'),
                    h: instance.marker.getAttribute('data-as').split("~")[0].split("x")[1].replace(/x/g, '*')
                };
            }

            html = this.templates.text(hook, instanceIndex, adIdx, lastAdInInstance, node, prod, ad);

            if (lastAdInInstance > 1) {
                floatLeft = 'left';
            }

            var containerId = stic.prodId[prod] + "_CONTAINER_" + instanceIndex;
            adNode = rt.utils.dom.createDOMFragment({
                tag: 'div', parent: node, cls: st.baseClass, id: containerId,
                style: {
                    borderStyle: 'solid',
                    borderWidth: ad.template == 'text' ? '0' : '1.33333px',
                    borderColor: '#cacaca',
                    position: 'relative',
                    margin: '0 auto',
                    width: instance.marker.getAttribute('data-as') ? fixedSize.w + 'px' : hook.attributes.w + 'px',
                    height: instance.marker.getAttribute('data-as') ? fixedSize.h + 'px' : hook.attributes.h + 'px',
                    webkitTransform: "scale(" + scale + ")",
                    transform: "scale(" + scale + ")",
                    msTransform: "scale(" + scale + ")",
                    webkitTransformOrigin: "0 0",
                    transformOrigin: "0 0",
                    msTransformOrigin: "0 0",
                    perspective: 1000,
                    webkitPerspective: 1000,
                    cssFloat: floatLeft,
                    cursor: 'pointer'
                },
                innerHTML: html
            });

            if (ad.useExternalIframe || bh.useExternalIframe == 'true') {
                //ad_frame_IL_IN_ARTICLE1_0
                var textIframeName = 'ad_frame_' + hook.id + '_' + hook.currentAdIndex;
                var ifobj = {
                    name: textIframeName,
                    width: hook.attributes.w,
                    height: hook.attributes.h,
                    hookId: hook.id
                };
                rt.loggly.deprecatedLog({
                    'deprecatedError': {
                        'type': 'incontent',
                        'template': 'external_iframe.html'
                    }
                });
                var textIframe = ut.VeST('$$external_iframe.html', ifobj);
                // IL_IN_ARTICLE_CONTAINER_1
                var textContainer = document.getElementById(hook.node.id + '_CONTAINER_' + instanceIndex);
                var textHtml = textContainer.innerHTML;
                textContainer.innerHTML = textIframe;
                hp.createExternalIframe(hook, textIframeName, hook.currentAdIndex, textHtml, ad.rsb);
            }

            return adNode;
        },
        bindMouseActions: function bindMouseActions(adNode, hook, url, midx, instance) {
            var rt = this.$root,
                hp = rt.helpers,
                cleanHookID = hook.id.replace(/[0-9]/g, ''),
                buttonOn = [],
                buttonOff = [],
                buttonOn2 = [],
                adText = [],
                adURL = [],
                ed = rt.event.dom,
                that = this;
            if (adNode) {
                rt.event.dom.bind(adNode, {
                    event: 'click', listener: function listener(e) {
                        var rt = that.$root,
                            reuseWindow = rt.helpers.getHookBehavior(hook.id).adsReuseWindow,
                            logObj = {},
                            clickedElement;
                        //ignore click on buttons.
                        clickedElement = e.domEvent.target || e.domEvent.srcElement;
                        if (clickedElement && clickedElement.id == 'IL_BUTTONS' || !url || instance.isShowingVideo) {
                            return;
                        }
                        //If no protocol on redirect url, add http.
                        url = hp.validateProtocol(url);

                        hook.currentAdIndex = midx;

                        rt.event.fire('productClick', {
                            hookId: hook.id,
                            clickType: 'onWin',
                            url: url,
                            cleanHookID: cleanHookID,
                            capara: logObj
                        });
                    }
                });
            }

            buttonOn = rt.utils.dom.filterByClass('IL_BUTTON_ON');
            buttonOff = rt.utils.dom.filterByClass('IL_BUTTON_OFF');
            buttonOn2 = rt.utils.dom.filterByClass('IL_BUTTON_ON2');
            adText = rt.utils.dom.filterByClass('IC_AD_TEXT');
            adURL = rt.utils.dom.filterByClass('IC_AD_URL');
            var that = this;

            //there will always be the same button items
            for (var i = 0; i < buttonOn.length; i++) {
                (function (i) {
                    ed.bind(buttonOff[i], {
                        event: 'mouseover',
                        data: { context: buttonOn2[i], visibility: 'visible' },
                        listener: that.toggleButton
                    });
                    ed.bind(buttonOff[i], {
                        event: 'mouseout',
                        data: { context: buttonOn2[i], visibility: 'hidden' },
                        listener: that.toggleButton
                    });
                    ed.bind(buttonOff[i], {
                        event: 'click',
                        data: {
                            context: [buttonOn2[i], buttonOff[i]],
                            swapto: buttonOn[i],
                            hide: buttonOn2[i],
                            adText: adText[i],
                            adURL: adURL[i]
                        },
                        listener: that.swapButtons
                    });
                    ed.bind(buttonOn[i], {
                        event: 'click', listener: function listener(e) {
                            that.$root.utils.dom.event.stop(e.domEvent);
                        }
                    });
                })(i);
            }
        },

        toggleButton: 

        swapButtons: function swapButtons(e) {
            this.$root.utils.dom.event.stop(e.domEvent);

            //swap ad text/url text
            var adTextVisibility = e.data.adText.style.visibility;
            e.data.adText.style.visibility = e.data.adURL.style.visibility;
            e.data.adURL.style.visibility = adTextVisibility;
            e.data.hide.style.visibility = 'hidden';
            var bottom = e.data.context[0].style.bottom,
                left = e.data.context[0].style.left;

            for (var i = 0; i < e.data.context.length; i++) {
                e.data.context[i].style.bottom = e.data.swapto.style.bottom;
                e.data.context[i].style.left = e.data.swapto.style.left;
            }

            e.data.swapto.style.bottom = bottom;
            e.data.swapto.style.left = left;
        },

        handleLogoClick: function handleLogoClick(logo) {
            var rt = this.$root,
                st = rt.settings,
                link,
                lang = rt.helpers.getSiteLanguage();
            if (logo) {
                rt.event.dom.bind(logo, {
                    event: 'click', listener: function listener(event) {
                        rt.utils.dom.event.stop(event.domEvent);
                        link = rt.utils.VeST(st.defaultHelpUrl, {
                            cid: st.customerId,
                            wsid: st.websiteId,
                            lang: lang != 'en' ? lang + '/' : ''
                        });
                        if (st.defaultHelpUrl) window.open(link, '_blank');
                    }
                });
            }
        },
        //Overrides dimension object with attributes defined manually.
        getDimensionFromStyle: function getDimensionFromStyle(node) {
            var dim = {};
            if (node) {
                if (node.style.width) {
                    dim.maw = parseInt(node.style.width.replace(/^\D+/g, ''));
                }
                if (node.style.height) {
                    dim.mah = parseInt(node.style.height.replace(/^\D+/g, ''));
                }
                return dim;
            }
        },
        /**
         * this function renders the html ads content of a bubble
         */
        renderAdsContent: function renderAdsContent(hook, ad, prod, isPassBack) {
            var rt = this.$root,
                adsHTML = '',
                hp = rt.helpers,
                st = rt.settings,
                noif;

            noif = hp.findComment(st.noIframe, ad);
            rt.helpers.setActualTemplate(ad);

            //If a comment with NO_IFRAME is included in the content
            if (noif) {
                ad.actualTemplate = 'html';
            }
            hook.unfriendlyIframe = ad.unfriendlyIframe;
            if (ad.actualTemplate != 'text') {
                var adIndex = 0;
                var instanceIndex = null;

                if (ad.actualTemplate == "html") {
                    adsHTML += this.templates.html(hook, ad, adIndex, instanceIndex, prod);
                } else {
                    adsHTML += this.templates[ad.actualTemplate](hook, adIndex, instanceIndex, prod, ad, isPassBack);
                }
            }

            hp.evalJSFromHtml(adsHTML, noif);
            return adsHTML;
        },

        /**
         * set css rules for in-content
         */
        setIncontentStylesheet: function setIncontentStylesheet() {
            var rt = this.$root,
                dms = rt.utils.dom.style,
                hdrCss,
                btnCss;
            hdrCss = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB+hJREFUeNrEV3tMm9cVP7Y/29gY/MBvg3klgFJGAnFeBUpok03NOhJeaVcSdVvGEu2fbdqmNm23bkmqRk1bbVm0PiKtTaVtSkLTh9SQlLY0CWSDpkugy8MmCY+AwRiwzbDBYJudc+FzP0e0+W+70pG/ex733Hvuub9zLPr9/gPAj/n5edDr9TA2NmbG6fJF9i3kuZEHIpEorvvbZ59hv7y9WCyGWCwGJpMJPB5PBrKykWJITp1O652Y8DE9fg0OEscGpIOl999fbjQaUEMEXq8Xbjid7ch/Guk8fPP4DtKBB8rLHXp9Gm5knjYRc7qcnyD/KaR/8YpCx3vWrllzZN26tRIJ7p4fmfYMKCkuLv380qXWf3Z0/AxZR77G6TMPlJftL161SiSMTFamXby6pGRz+8WLFZevXPkRsv4qdFyBix9ZuXKlZGYmzBh+v5+FXqvVsnlhYaE4Eo0cvnTpCydOW+5yWrdhw/oD+fkFEJqeWXJXDodDFolE/vLvq1ev08m55ORkkMvkLxcUFEimF40+bvkYOjo62HdJSQk8vOVh9p2fly/q6+v/QzAYvE+wpsRisbycnZUDZD/q8YA8SQ5qtYYJMdSQtDgvLPyWrH9g4EWplNtEMc2z2qyrZ2dnIRyewcTyQmdnJzz51K9h794nobu7G0ZGRpgsHA6D1WpdgTZFvFeZTFaabrPZF+Qz4Ha74bXXXofhYTc4nTfg6BtHYXJykskikTmyfxDNzFw0EimkU/Mhlkg42LZtKwSD00CbofuibOXlqmQV8Urws3vBsdQhtF+etxzm5ubg2Ftvo6MI7NjRwE7Ly1FX1NMTyOPkSUkKUiAn/DAYjeByuqC19VNYsWIFyOXyuBzvGRQKhSoeZwknj0SicTn9yBVJbJ6UlASRWJRFih9R1MWDiLg0ne5OIDAJKSkpCckQDE1BUVERONY4YCb8VcIEAgFIVipd/BxP0OsP+EEqk7I5hfps81loaHic8ABOHj8J1TXVkJK6sH4Aw45ZPinChy1veueUJzc3Vy10HJ5ZcIYRSdjQzVs3p6q3VlkMBsMUzZ0ul+n8hbaB3JxcGXM8NIQRM4AMo8ThtY16RhAOxOx1zKP89q2b7sYf78qg5Aqr1al/HB4exjBG4xSbj7GwCnkjuAjqvoo2U4K9eJRKxTEvno50bOnpIEaHc3MRmMbNa7Q6JC2TDQ4OEjK+RIgmordKBzt+sukTVC4lyFxqjI+PI6bGOhoe/34lTqd5/sxCZNRo34a5UKjRaJe0p2elUinP1lZXf5eumnfMEvZ085lXh9zuBsw3kVKpBAKgUCjEFjebTccf2bJlN12TcMFFx5Tp+rMftbzpGR19hGwVCiUCUAxfRwgTLRyzZ6Qf/fbmzT8nk7shk8K389H6ukNd3d31Pp+/gJho4EIYbDp34cLle+D0GNL36mtr1l3p6qqZnPxPLpaOWG5O1tXiVcXH29rbbgiVhSf+nw4x/J8Gt+/A8wn1eHEzhEz5FBF6MUhfUCbyNZfGc795NqEecxzHkIowBWkt0jJKIqRrSF20/DfV49qUlNRDaWm6bEoQGqHQNExMjPcj3u7F6d/vcZBdGo1mn1arsyoQvegcWFDI3jk1NfULlDcvVY9/l5WV9ZzRaEpYSaVKAaPRmInF4299fX1UHPYu4ZCO8edly5bv0el0CQJCRLPZnI848eGdOwO/QtYrwjveSk7NZgtrYYgI7sa8Y/E5bSg7O5u6iMeWcLwbkW8PYQCvfzfZbDaR3W4n8KhkJ0bAB6lU9qLVaouvcrG9HaFulBmkYQtTWlbG+LSx8fGJF/x+34nFfoqBT1qafr9eb2ATQkCZVMbsaAwhWimxehFkpqdniHw+30EspevoxEWIu3lSTA6iWawkg3cG4Qc/fAJ27twBHqzFM9Mh4OXYi2WhoYPfJKJVhclk1PPyZKUCmk+fhglEut7bt+H8ufNYSpOZTCaVgj5NT4mXyeHl5KtTU+PVRSvTwqOP1cMs1lRKDCpvKrwnXq7B2orO6K47aS6VSldiQsXlVpsNtm+vgxMnmjDTJdDYuCseGnbnWKX6B/qzOKwiHMd2I4sL1WotuFwuONN8BjZteghSMMF4oCFddBxXxrlEykkT7Cd8fqzTEpZz3rFxwNYIBPpMJraYzX2hUJAVeyHRm9y4cSOsdjiovYnzg6ir0aivfZW1KmdQYN/X18t6tp/sboR6PPmpd06xGs7LQxhF7GbHCDIlb751bKi0tNQkbEspuQgszBZzAsBgm+rbVlVl0Wo1rK3o7x/QII67N6xfr6B5b28vqFPVoEvTMbCg+sxhRKhGx6IxaP9H+217hj2XkiuKz+BgT08PKLDo84QlDFiVEfBoUa1Gc4hquODa/Cg7TLWWdKhVstms7DsJT5iTkwP2TDubX8fmz2K27KeejC8S4nffe78J25hqbEsS/qrwJ73cdYV67Q/qampqFqFQOOQnTjY149+XysLC+/BmE+0pch2fd0I0Gn0b8+GJu6sT99m5c/uwk/glprwMn8hCAR8dBe+odxb/kvzpwcpK+hsz+zVwqfyopeUlfyDQaDaZOYNBzxyOYAMwMT4xjfX8+fKyshf49y+ETEL4p+traw9fvXatyu0ezqONWSzmm5UVFe9/2trqvgdOh5B+ur2u7mD3l19WDQ25cygyGRnp1x+qrPzgQlvbmFD5vwIMAAZsT2nNzBrxAAAAAElFTkSuQmCC';
            btnCss = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABICAYAAACUavnrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JJREFUeNrsnL9u01AUxs+xbxOS1LQVBQkGJBgQMPUNGCshMiB1zgqoOwMViBfoxMYGqjqwMIBgYqC8AQsStAyVaAmllDZN4j+xL/fGdsgD9J4I8X1SFDvZfv70+dxzj60eP3119vXGx9V6rXLzdP2U0gSdtNh8umEct/ePXn7ebt9nutZ6dvHyhdZsUKcsA3JX8n2mvV/HtLN38ET5Qb1prgJ1+xHIuHS7sXuSZvagqcy5l//IIOMYOudB4ivSpG2seGDuVgZ4kd5a2TOtNSHO3d9MM51DHlYrWZYRjC5gdp3l0K3t7QWA0SWgF06nwumQ80inEvMwXlINn0soG3e6xl1UyO3j8QKnyzrdhvsgRaaLBfsoXuB0UXlAAOiADgE6oEOA/s9B94FBVL6p03mLmBfAQmqBpDcVZ/EKJ701s0CaAxHHseJxW081HilD/c1sw1vu9JMl4/qGbREAz8nzZtKdoF5Z/51kGyqhynxXBYtXrp+7MV2rKrQETl52U7obJtGX7fbPOI7e2UxfNb+3dvcO0YNxCt5uiOq75iBR7FEzihMKowRkBBxvZOde2GNDHmMvAtDNJ6XUloykAVy2aFTlFYDkpP6GPCSSLyV0DzN1MrlScFcMp8tSHzkd0OWYs4XOebxgWSRBvRjBGMaLgc6gLpQubOOFTbyYxRG2MwSMXk54FfGCWBdLlzxefEOcUTYKOt3Gi4/ei6jT82hntALkynRMA0xCgA7o/w90zL3Iylea9JapFxfQCnCr4WPq8cAebqo0Dh909neeK6XmCRvTTqn3++Gu1pWHitL47XHv6B771dvmn4Aw9+IoxvWhTsMXVJ35oGiqMR/MnLl19dL5xelaBe97cWJytm8ZiT993e12euF7uzhaNaBb334c5I/cgbob8Pk98445ipU5afbjhHphDDIC4M3SP597sQ0v7aMR4Bw62bkXKude0HsRlMYIhiTt4luVhTskFzFw+gSsnm9MI9FFrZ47Hb1GWadb8ogXWeqj7TpILl+KWUagkBRKxslA5+Gd1EOjSyDRxzLdQwUzieoFETOBTEf9Ig+dMEAqCr18/AXQ3cc5jznd57wBg4hxuiQa7fj7SmvaYs/OvaB8cQ3dzr2YsnFTZYNopXfwfc1An8OutFtFcdJmXbXve0nfVDlZPu4NlgxyvO/FjTyPdSeoVdbTRG/8EWAAta8y0OqpUAcAAAAASUVORK5CYII=';
            dms.addRule('.IL_SR_BG', ['background-image : url("', hdrCss, '")'].join(''));
            dms.addRule('.il_sr_btn', ['background : url("', btnCss, '") no-repeat scroll 0 0 !important'].join(''));
            dms.addRule('.il_sr_btn_over', 'background-position : 0 -24px !important;');
        },

        /**
         * @Description In case of passback ad, we need to remove the old container (inContent).
         * @param instance
         * @param container
         * @param isPassback
         */
        removeOldContainer: function removeOldContainer(instance, container, isPassback, ad) {
            var rt = this.$root,
                st = rt.settings,
                hp = rt.helpers,
                hn,
                deleted;
            if (ad && ad.hn) {
                hn = ad.hn;
            }
            if (isPassback) {
                if (container && container.nextSibling && container.nextSibling.parentNode && container.nextSibling.className == st.baseClass) {
                    deleted = hp.moveAndHideElement(container.nextSibling, hn);
                    if (!deleted) {
                        container.nextSibling.style.display = 'none';
                        rt.event.dom.unbind(window, 'scroll', this.scrollAnimationHandler);
                        rt.event.dom.unbind(window, 'scroll', this.scrollDisableHandler);
                    }
                }
            }
        },

        showIncontentInstance: function showIncontentInstance(marker) {
            var rt = this.$root,
                stic = this.settings,
                containerWidth = rt.utils.dom.element.getActualWidth(marker.refNode),
                bhm = stic.behavior.merged,
                st = rt.settings;
            return marker.node.className.indexOf(st.autoMarkerCls) != -1 || marker.node.className.indexOf('IL_OPTIMIZED') != -1 || bhm.smic == 'true' && marker.node.className.indexOf('IL_STANDARD') == -1;
        },

        showAutoIncontentInstance: function showAutoIncontentInstance(mode) {
            var stic = this.settings,
                bhr = stic.behavior;
            if (mode == 'default') {
                return bhr.merged.embedBottom;
            } else if (mode == 'header' || mode == 'top') {
                return bhr.merged.embedTop;
            } else if (mode == 'topM' || mode == 'headerM') {
                return bhr.merged.embedTop || bhr.merged.embedBottom;
            }
        },

        createTextAd: function createTextAd(instance, index, hook, ad, isPassback, prod) {
            var rt = this.$root,
                st = rt.settings,
                ut = rt.utils,
                dm = ut.dom,
                dmel = dm.element,
                container,
                lastAdInInstance,
                lines,
                logo,
                showThumbs = true,
                adUnit,
                hp = rt.helpers,
                clObj,
                stic = this.settings,
                parentHeight,
                childrenNodesHeight = 0,
                scale,
                attr,
                bh = stic.behavior.merged,
                data = rt.helpers.getHookData(hook.id),
                adheight,
                location,
                adviewUrl,
                pixels = [],
                bhs = rt.settings.behavior;

            if (instance.width < ad.aco) {
                data.theme = 'narrow';
                ad.title = ut.string.truncateToChar(ad.title, 45, ' ', '...');
                ad.text = ut.string.truncateToChar(ad.text, 80, ' ', '...');
                ad.noEllipsis = true;
            }

            attr = rt.helpers.initTheme(st.hooksMap[hook.id], incontent.skins[bh.skin]);
            attr.w = attr.w || Math.min(instance.width, stic.maxTextAdWidth);
            attr.h = attr.h || stic.maxTextAdHeight;
            //if we have video pending force render 400x300 text template
            if (instance.vastTags.length > 0 && bhs.impression.prepareVideoPlayer) {
                // here @TODO fixed size for video as well
                attr.w = 400;
                attr.h = 300;
            }
            scale = hp.getCustomScale(instance.width, stic.textAdWidth, stic.textAdWidth);
            var containerId = stic.prodId[prod] + "_" + index;
            container = rt.utils.dom.createDOMFragment({
                tag: 'div', parent: instance.container, after: instance.marker, cls: st.baseClass, id: containerId,
                style: {
                    margin: '5px auto',
                    height: attr.h * scale + 'px',
                    textAlign: "center",
                    display: 'inline-block',
                    padding: "0px",
                    width: "100%"
                }
            });
            hook.adContainer = container;
            hook.adContainer.setAttribute("data-hook-id", hook.id);

            //Remove old container if passback ad is shown.
            this.removeOldContainer(instance, container, isPassback, ad.dn);

            lastAdInInstance = 1;

            //Change container size to fit the ads width.
            container.style.width = attr.w * scale;

            //If text ads don't fit.
            if (lastAdInInstance == 0) {
                //Change back to inTag.
                instance.marker.name = stic.intagProdId;
                //take off unused container div.
                instance.marker.nextSibling.parentNode.removeChild(instance.marker.nextSibling);
            }

            lines = [];

            //Logging params.
            clObj = {
                docHeight: dm.viewport.getHeight(),
                width: instance.width,
                index: index
            };

            if (!ad.thumbURL) {
                showThumbs = false;
            }

            rt.helpers.setAdThumbnail(ad);

            if (ad.thumbURL === 'no-image') {
                delete ad.thumbURL;
            }

            hook.prod = prod;
            if (hook.prod != 'a' || hook.prod == "a" && (ad.aos && ad.aos != "true" || !ad.aos && bh.aos != "true")) {
                adviewUrl = rt.helpers.createAdViewUrl({
                    hookId: hook.id, capara: clObj, params: {
                        prod_t: hook.prod,
                        bdc: hook.bdc,
                        midx: ad.midx,
                        emd: ad.emd || ''
                    }
                });
                //send tracker URL
                rt.comm.sendAjaxRequest({ url: adviewUrl });
                rt.settings.observer.observe(hook.adContainer);
            }

            if (rt.what(ad.trackerURL) == "array") {
                for (var i = 0; i < ad.trackerURL.length; i++) {
                    pixels.push(ad.trackerURL[i]);
                }
            } else if (ad.trackerURL) {
                pixels.push(ad.trackerURL);
            }

            rt.helpers.hitURL(pixels);

            dm.createDOMFragment({ isTextNode: true, parent: lines[0] });

            //We must collect the parent height before the adUnit Height so we calculate it twice.
            parentHeight = dmel.getStyle(instance.marker.parentNode, 'height');
            parentHeight = parentHeight ? parseInt(parentHeight, 10) : 0;

            //Sum all the inner nodes.
            childrenNodesHeight = this.sumInnerNodes(instance.marker.parentNode);

            for (var i = 0; i < lastAdInInstance; i++) {
                ad.showThumbs = !!showThumbs;
                adUnit = this.renderTextUnit(index, hook, i, container, lastAdInInstance, prod, ad, scale);
                this.bindMouseActions(adUnit, hook, ad.redirectURL, i, instance);
            }

            //Sets parentHeight to fit the ad.
            this.setParentHeight(instance, parentHeight, childrenNodesHeight, adUnit);

            for (var z = 0; z < lastAdInInstance; z++) {
                hp.saveForMsgCap(ad.emd, 'fc');
                //hook.bdc = st.bdc;
            }

            hp.saveForMsgCap(prod, 'pv');

            if (isPassback) {
                //If is passback, we need to start counting the midx without the external tag ad.
                start = 1;
                midxLength = lastAdInInstance;
            } else {
                midxLength = lastAdInInstance - 1;
            }

            logo = dmel.$([stic.prodId[prod], 'LOGO', index].join('_'));

            adheight = dmel.getStyle(adUnit, 'height');
            adheight = parseInt(adheight);
            adheight = adheight * scale;
            adheight += 5; //Add buffer.
            this.handleLogoClick(logo);

            if (prod == 'a') {
                location = dmel.offset(container).top;
                if (ad.aos == "true" || !ad.aos && bh.aos == "true") {
                    container.style.padding = "0px";
                    container.style.height = "0px";
                }
                hook.clObj = clObj;

                this.runInArticleOnInitialViewPort(location, container, ad, adheight, hook, isPassback);
                if (!hook.doneAnimating) {
                    var bindData = {
                        ad: ad,
                        container: container,
                        adHeight: adheight,
                        hook: hook,
                        isPassback: isPassback,
                        instance: instance,
                        type: "text"
                    };
                    this.bindScrollEvent(bindData);
                }

                if (bh.ss && bh.ss === 'true') {
                    // enableStopScroll
                    var bindScrollDisableEventData = {
                        container: container,
                        hook: hook,
                        adHeight: adheight,
                        scrollStopAnimationPixels: bh.ssapx,
                        scrollStopAnimationDuration: bh.ssad,
                        scrollStopUserFreezeDuration: bh.ssufd
                    };

                    this.bindScrollDisableEvent(bindScrollDisableEventData);
                }
            }
            if (!lines.length) {
                rt.logger.warn('Error: In-Content element not found.');
                rt.event.fire('productRenderStatus', { prod: prod, status: 'none' });
                return;
            }
        },

        createHTMLAd: function createHTMLAd(instance, index, hook, ad, isPassback, prod) {
            var rt = this.$root,
                st = rt.settings,
                ut = rt.utils,
                dm = ut.dom,
                dmel = dm.element,
                el,
                ps,
                b = rt.browser,
                stic = this.settings,
                bh = stic.behavior.merged,
                lines,
                container,
                parentHeight,
                clObj,
                adviewUrl,
                pixels = [],
                hp = rt.helpers,
                form,
                logo,
                childrenNodesHeight,
                adHTML = '',
                mw,
                scale;
            el = this.renderHtmlUnit(index, prod, ad); //so ugly
            ps = el.previousSibling;

            hook.adContainer = el;
            hook.adContainer.setAttribute("data-hook-id", hook.id);

            while (ps) {
                if (ps.nodeType == st.nodeTypes.ELEMENT && ps.tagName.toLowerCase() != 'input') {
                    if (/left|right/.test(dmel.getStyle(ps, b.IE ? 'styleFloat' : 'cssFloat'))) {
                        dmel.setStyle(el, { clear: 'left', styleFloat: 'left', cssFloat: 'left' });
                        el.style.display = 'inline-block';
                    }
                    break;
                }
                ps = ps.previousSibling;
            }

            //Remove old container if passback ad is shown.
            this.removeOldContainer(instance, el, isPassback, ad.dn);
            if (prod != 'a') {
                adHTML += this.renderAdsContent(hook, ad, prod, isPassback);
                mw = hp.findComment(st.maxWidth, ad);
                scale = hp.getCustomScale(ad.instanceWidth, ad.width, ad.width);
                ad.height = ad.height * scale;
                lines = [];
                container = dmel.$([stic.prodId[prod], '_CONTAINER_', index].join(''));

                //We must collect the parent height before the container Height so we calculate it twice.
                parentHeight = dmel.getStyle(instance.marker.parentNode, 'height');
                parentHeight = parentHeight ? parseInt(parentHeight, 10) : 0;

                //Sum all the inner nodes.
                childrenNodesHeight = this.sumInnerNodes(instance.marker.parentNode);

                if (container) {
                    container.innerHTML += adHTML;
                    //Check if container is larger then ads container, if so, change container size.
                    if (container.parentNode.offsetWidth > ad.width && ad.maxWidth != 'true' && !mw) {
                        container.style.width = ad.width + 'px';
                    }

                    container.style.height = ad.height + 'px';
                    ut.array.push(lines, container);
                    ad.customCode = hook.customCode;
                    hp.renderCustomCode(ad, true, container);
                }

                //Sets parentHeight to fit the ad.
                if (hook.prod != 'a') {
                    this.setParentHeight(instance, parentHeight, childrenNodesHeight, container);
                }
                container.style.height = ad.height + 'px';
                //Logging params.
                clObj = {
                    docHeight: dm.viewport.getHeight(),
                    width: instance.width,
                    index: index
                };

                adviewUrl = rt.helpers.createAdViewUrl({
                    hookId: hook.id, capara: clObj, params: {
                        prod_t: prod,
                        bdc: hook.bdc,
                        midx: ad.midx,
                        emd: ad.emd || ''
                    }
                });

                //send tracker URL
                rt.comm.sendAjaxRequest({ url: adviewUrl });

                if (rt.what(ad.trackerURL) == "array") {
                    for (var i = 0; i < ad.trackerURL.length; i++) {
                        pixels.push(ad.trackerURL[i]);
                    }
                } else if (ad.trackerURL) {
                    pixels.push(ad.trackerURL);
                }

                rt.helpers.hitURL(pixels);
                rt.settings.observer.observe(hook.adContainer);

                if (ad.actualTemplate == 'iframe') {
                    if (ad.unfriendlyIframe) {
                        form = container.getElementsByTagName('form');
                        if (form.length && form[0].className.indexOf('ad_form') != -1) {
                            form[0].submit();
                        }
                    } else {
                        //this is the friendly iframe method
                        var adIndex = hook.currentAdIndex;
                        var content = rt.helpers.parseTokens(hook, null, adIndex);
                        if (hook.prod == 'n') {
                            //check if content has a sponsered content string and remove it
                            index = content.indexOf('IL_LOGO_SPONSORED');
                            if (index != -1) {
                                //remove IL_LOGO_SPONSORED div
                                content = content.replace(content.substr(content.lastIndexOf('<div', index), content.indexOf('</div>', index) + 6), '');
                            }
                        }
                        var iframeName = ['ad_frame', hook.id, 0].join('_');

                        if (ad.useExternalIframe || bh.useExternalIframe == 'true') {
                            hp.createExternalIframe(hook, iframeName, adIndex, content, ad.rsb);
                        } else {
                            hp.createFriendlyIframe(hook, iframeName, adIndex, content, ad.rsb);
                        }

                        document.getElementsByName(iframeName)[0].style.marginLeft = (instance.firstAdWidth - ad.initialWidth) / 2 + "px";
                        document.getElementsByName(iframeName)[0].style.marginTop = (instance.firstAdHeight - ad.initialHeight) / 2 + "px";
                    }
                    dm.createDOMFragment({ isTextNode: true, parent: lines[0] });
                }
                if (ad.actualTemplate == 'html') {
                    // PATCH JOB FOR BYPASSING DUPLICATED DIV ID'S
                    for (var i = 0; i < document.getElementById(container.id).children.length; i++) {
                        if (document.getElementById(container.id).children[i].id === container.id) {
                            document.getElementById(container.id).children[i].style.marginTop = (instance.firstAdHeight - ad.initialHeight) / 2 * scale + "px";
                            document.getElementById(container.id).children[i].style.marginLeft = (instance.firstAdWidth - ad.initialWidth) / 2 * scale + "px";
                        }
                    }
                }
                //hook.bdc = st.bdc;
                if (ad && ad.template == 'external') {
                    if (!ad.waitForViewEvent) {
                        hp.saveForMsgCap(ad.emd, 'fc');
                        hp.saveForMsgCap(prod, 'pv');
                    }
                } else {
                    if (isPassback) {
                        midxLength = 1;
                    }
                    hp.saveForMsgCap(ad.emd, 'fc');
                    hp.saveForMsgCap(prod, 'pv');
                }

                this.bindMouseActions(container, hook, ad.redirectURL, 0, instance);
                logo = dmel.$([stic.prodId[prod], 'LOGO', index].join('_'));
                this.handleLogoClick(logo);

                //If inArticle
            } else if (prod == 'a') {
                el.style.display = '';

                if (ad.aos == "true" || !ad.aos && bh.aos == "true") {
                    el.style.height = "0px";
                } else {
                    rt.settings.observer.observe(hook.adContainer);
                }

                var bindData = {
                    ad: ad,
                    container: el,
                    adHeight: ad.height,
                    hook: hook,
                    index: index,
                    isPassback: isPassback,
                    instance: instance,
                    type: "html"
                };

                this.runInArticleOnInitialViewPortHTML(bindData);
                if (!hook.doneAnimating) {
                    this.bindScrollEvent(bindData);
                }

                if (bh.ss && bh.ss === 'true') {
                    // enableStopScroll
                    var bindScrollDisableEventData = {
                        container: el,
                        hook: hook,
                        adHeight: ad.height,
                        scrollStopAnimationPixels: bh.ssapx,
                        scrollStopAnimationDuration: bh.ssad,
                        scrollStopUserFreezeDuration: bh.ssufd
                    };

                    this.bindScrollDisableEvent(bindScrollDisableEventData);
                }
            }
        },

        runInArticleOnInitialViewPortHTML: function runInArticleOnInitialViewPortHTML(bindData) {
            var scrollHeight = document.documentElement.clientHeight + document.documentElement.scrollTop,
                rt = this.$root,
                b = rt.browser,
                ut = rt.utils,
                dm = ut.dom,
                dmel = dm.element,
                container,
                ad,
                adHeight,
                hook,
                location;

            container = bindData.container;
            ad = bindData.ad;
            adHeight = bindData.adHeight;
            hook = bindData.hook;

            location = dmel.offset(container).top;

            if (b.Chrome) {
                scrollHeight = window.innerHeight + window.scrollY;
            }

            if (!hook.doneAnimating && scrollHeight >= location + adHeight) {
                this.createAdContainer(bindData);
                this.slideDown(container, adHeight, ad, hook, bindData.isPassback);
                this.slideUp(container, adHeight, ad);
                hook.doneAnimating = true;
            }
        },

        runInArticleOnInitialViewPort: function runInArticleOnInitialViewPort(location, el, ad, adHeight, hook, isPassback) {
            var scrollHeight = document.documentElement.clientHeight + document.documentElement.scrollTop,
                rt = this.$root,
                b = rt.browser;
            if (b.Chrome) {
                scrollHeight = window.innerHeight + window.scrollY;
            }
            if (!hook.doneAnimating && scrollHeight >= location + adHeight) {
                this.slideDown(el, adHeight, ad, hook, isPassback);
                this.slideUp(el, adHeight, ad);
                hook.doneAnimating = true;
            }
        },

        createAdContainer: function createAdContainer(bindData) {
            var adHTML = '',
                mw,
                lines,
                container,
                parentHeight,
                childrenNodesHeight,
                rt = this.$root,
                pixels = [],
                clObj,
                adviewUrl,
                form,
                logo,
                stic = this.settings,
                midxLength = 0,
                st = rt.settings,
                scale,
                hp = rt.helpers,
                ut = rt.utils,
                dm = ut.dom,
                dmel = dm.element,
                ad,
                hook,
                isPassback,
                index,
                instance,
                bh = stic.behavior.merged;

            if (this.settings.state == 'destroyed') return;

            ad = bindData.ad;
            hook = bindData.hook;
            isPassback = bindData.isPassback;
            index = bindData.index;
            instance = bindData.instance;

            scale = hp.getCustomScale(ad.instanceWidth, ad.width, ad.width);
            ad.height = ad.height * scale;
            hook.unfriendlyIframe = ad.unfriendlyIframe;

            adHTML += this.renderAdsContent(hook, ad, hook.prod, isPassback);
            mw = hp.findComment(st.maxWidth, ad);

            lines = [];

            container = dmel.$([stic.prodId[hook.prod], '_CONTAINER_', index].join(''));

            //We must collect the parent height before the container Height so we calculate it twice.
            parentHeight = dmel.getStyle(instance.marker.parentNode, 'height');
            parentHeight = parentHeight ? parseInt(parentHeight, 10) : 0;

            //Sum all the inner nodes.
            childrenNodesHeight = this.sumInnerNodes(instance.marker.parentNode);

            if (container) {
                container.innerHTML += adHTML;
                //Check if container is larger then ads container, if so, change container size.
                if (container.parentNode.offsetWidth > ad.width && ad.maxWidth != 'true' && !mw) {
                    container.style.width = ad.width * scale + 'px';
                }

                container.style.height = ad.height + 'px';

                ut.array.push(lines, container);
                ad.customCode = hook.customCode;
                hp.renderCustomCode(ad, true, container);
            }

            //Sets parentHeight to fit the ad.
            if (hook.prod != 'a') {
                this.setParentHeight(instance, parentHeight, childrenNodesHeight, container);
            }

            //Logging params.
            clObj = {
                docHeight: dm.viewport.getHeight(),
                width: instance.width,
                index: index
            };
            if (hook.prod != "a" || hook.prod == "a" && (ad.aos && ad.aos != "true" || !ad.aos && bh.aos != "true")) {
                adviewUrl = rt.helpers.createAdViewUrl({
                    hookId: hook.id, capara: clObj, params: {
                        prod_t: hook.prod,
                        bdc: hook.bdc,
                        midx: ad.midx,
                        emd: ad.emd || ''
                    }
                });

                //send tracker URL
                rt.comm.sendAjaxRequest({ url: adviewUrl });
            }

            if (rt.what(ad.trackerURL) == "array") {
                for (var i = 0; i < ad.trackerURL.length; i++) {
                    pixels.push(ad.trackerURL[i]);
                }
            } else if (ad.trackerURL) {
                pixels.push(ad.trackerURL);
            }

            rt.helpers.hitURL(pixels);

            if (ad.actualTemplate == 'iframe') {
                if (ad.unfriendlyIframe) {
                    form = container.getElementsByTagName('form');
                    if (form.length && form[0].className.indexOf('ad_form') != -1) {
                        form[0].submit();
                    }
                } else {
                    var adIndex = hook.currentAdIndex;
                    var content = rt.helpers.parseTokens(hook, null, adIndex);
                    if (hook.prod == 'n') {
                        //check if content has a sponsered content string and remove it
                        index = content.indexOf('IL_LOGO_SPONSORED');
                        if (index != -1) {
                            //remove IL_LOGO_SPONSORED div
                            content = content.replace(content.substr(content.lastIndexOf('<div', index), content.indexOf('</div>', index) + 6), '');
                        }
                    }

                    var iframeName = ['ad_frame', hook.id, 0].join('_');
                    if (ad.useExternalIframe || bh.useExternalIframe == 'true') {
                        hp.createExternalIframe(hook, iframeName, adIndex, content, ad.rsb);
                        var il_if_click = document;
                        var il_if_click = document.createElement('div');
                        il_if_click.id = 'IL_IF_CLICK';
                        il_if_click.style = 'width:100%;height:100%;opacity:0;position:absolute';
                        document.getElementsByName(iframeName)[0].parentNode.prepend(il_if_click);
                    } else {
                        hp.createFriendlyIframe(hook, iframeName, adIndex, content, ad.rsb);
                    }

                    document.getElementsByName(iframeName)[0].style.marginLeft = (instance.firstAdWidth - ad.initialWidth) / 2 + "px";
                    document.getElementsByName(iframeName)[0].style.marginTop = (instance.firstAdHeight - ad.initialHeight) / 2 + "px";
                }
                dm.createDOMFragment({ isTextNode: true, parent: lines[0] });
            } else {
                // PATCH JOB FOR BYPASSING DUPLICATED DIV ID'S
                for (var i = 0; i < document.getElementById(container.id).children.length; i++) {
                    if (document.getElementById(container.id).children[i].id === container.id) {
                        document.getElementById(container.id).children[i].style.marginTop = (instance.firstAdHeight - ad.initialHeight) / 2 * scale + "px";
                        document.getElementById(container.id).children[i].style.marginLeft = (instance.firstAdWidth - ad.initialWidth) / 2 * scale + "px";
                    }
                }
                // container.style.marginTop = (instance.firstAdHeight - ad.initialHeight) / 2 + "px";
                // container.style.marginLeft = (instance.firstAdWidth - ad.initialWidth) / 2 + "px";
            }

            //hook.bdc = st.bdc;
            if (ad && ad.template == 'external') {
                if (!ad.waitForViewEvent) {
                    hp.saveForMsgCap(ad.emd, 'fc');
                    hp.saveForMsgCap(hook.prod, 'pv');
                }
            } else {
                if (isPassback) {
                    midxLength = 1;
                }
                hp.saveForMsgCap(ad.emd, 'fc');
                hp.saveForMsgCap(hook.prod, 'pv');
            }

            this.bindMouseActions(container, hook, ad.redirectURL, 0, instance);
            logo = dmel.$([stic.prodId[hook.prod], 'LOGO', index].join('_'));
            this.handleLogoClick(logo);

            rt.event.fire('prepareIncontentVideo', { ad: ad, hook: hook });
        },

        bindScrollEvent: function bindScrollEvent(bindData) {
            var rt = this.$root,
                stic = this.settings,
                bh = stic.behavior.merged,
                ut = rt.utils,
                dm = ut.dom,
                dmel = dm.element,
                location,
                e = {},
                ad,
                container,
                adHeight,
                hook,
                index,
                isPassback,
                instance,
                type;

            ad = bindData.ad;
            container = bindData.container;
            adHeight = bindData.adHeight;
            hook = bindData.hook;
            index = bindData.index;
            isPassback = bindData.isPassback;
            instance = bindData.instance;
            type = bindData.type;

            if (ad.aos == "true" || !ad.aos && bh.aos == "true") {
                //Animate on sight.
                this.prepereForslideDown(container);
                location = dmel.offset(container).top;
                if (!isPassback) {
                    rt.event.dom.bind(window, {
                        event: 'scroll',
                        data: { adHeight: adHeight, el: container, ad: ad, hook: hook, location: location, index: index, instance: instance, isPassback: isPassback, type: type },
                        listener: this.scrollAnimationHandler
                    });
                } else {
                    //We need to run the animation handler manually once without binding because of the passback messages.
                    e.data = { adHeight: adHeight, el: container, ad: ad, hook: hook, location: location, type: type, instance: instance, isPassback: isPassback, index: index };
                    this.scrollAnimationHandler(e);
                }
            } else {
                this.slideUp(container, adHeight, ad);
                hook.doneAnimating = true;
            }
        },
        bindScrollDisableEvent: function bindScrollDisableEvent(bindData) {
            var rt = this.$root,
                ut = rt.utils,
                dm = ut.dom,
                dmel = dm.element;

            var container = bindData.container;
            var hook = bindData.hook;
            var adHeight = bindData.adHeight;
            var location = dmel.offset(container).top;
            var scrollStopAnimationPixels = bindData.scrollStopAnimationPixels ? parseInt(bindData.scrollStopAnimationPixels) : 100;
            var scrollStopAnimationDuration = bindData.scrollStopAnimationDuration ? parseInt(bindData.scrollStopAnimationDuration) : 0;
            var scrollStopUserFreezeDuration = bindData.scrollStopUserFreezeDuration ? parseInt(bindData.scrollStopUserFreezeDuration) : 600;

            rt.event.dom.bind(window, {
                event: 'scroll',
                data: { hook: hook, container: container, adHeight: adHeight, location: location, scrollStopAnimationPixels: scrollStopAnimationPixels, scrollStopAnimationDuration: scrollStopAnimationDuration, scrollStopUserFreezeDuration: scrollStopUserFreezeDuration },
                listener: this.scrollDisableHandler
            });
        },

        prepereForslideDown: 

        slideDown: function slideDown(container, adHeight, ad, hook, isPassback) {
            var stic = this.settings,
                bh = stic.behavior.merged,
                oduration,
                rt = this.$root,
                b = rt.browser;
            if (ad.aos == "true" || !ad.aos && bh.aos == "true") {
                //Animate on sight.
                if (!b.detectCSSFeature("transform") || !b.detectCSSFeature("transition") || !b.detectCSSFeature("perspective")) {
                    container.style.display = 'inline-block';
                }
                oduration = this.setSetting(ad, "oduration"); //duration of slide (opening)
                this.prepereForslideDown(container);
                this.slideDownAnimation(container, oduration, adHeight, ad, hook, isPassback);
            }
        },

        slideUp: function slideUp(container, adHeight, ad) {
            var stic = this.settings,
                that,
                bhr = stic.behavior.merged,
                cduration,
                rt = this.$root,
                b = rt.browser;
            if (ad.cat == 'true' || !ad.cat && bhr.cat == 'true') {
                //do not close after time out
                if (!b.detectCSSFeature("transform") || !b.detectCSSFeature("transition") || !b.detectCSSFeature("perspective")) {
                    container.style.display = 'inline-block';
                }
                cduration = this.setSetting(ad, "cduration"); //duration of slide (closing)
                that = this;
                setTimeout( ad.sut || bhr.sut || 60000);
            }
        },

        setParentHeight: function setParentHeight(instance, parentHeight, childrenNodesHeight, adUnit) {
            var rt = this.$root,
                st = rt.settings,
                ut = rt.utils,
                dm = ut.dom,
                dmel = dm.element,
                adHeight;
            //This is only for dealing with autoMarkers
            if (instance.marker.className == st.autoMarkerCls) {

                try {
                    //temp hack until we fix the getStyle func
                    if (rt.browser.IE) {
                        adHeight = this.getNodeHeightIE(adUnit);
                        adHeight = parseInt(adHeight, 10);
                    } else {
                        //Set new height to parent according to ad height
                        adHeight = dmel.getStyleFixed(adUnit, 'height');
                        adHeight = adHeight ? parseInt(adHeight, 10) : 0;
                    }
                } catch (e) {
                    adHeight = 0;
                }

                //Check if this is the first time we are running this function.
                if (instance.marker.parentNode.className.indexOf("IL_IC_MIN") == -1) {
                    instance.prevParentHeight = parentHeight;

                    //If white space in parent is smaller than ad we need to change the minHeight of the parent.
                    if (parentHeight - childrenNodesHeight < adHeight) {
                        dmel.setStyle(instance.marker.parentNode, { minHeight: adHeight + parentHeight + "px" });
                    }

                    if (rt.browser.IE) {
                        instance.marker.parentNode.style.marginBottom = '20px';
                    }

                    instance.marker.parentNode.className += " IL_IC_MIN";
                } else {
                    if (instance.prevParentHeight - childrenNodesHeight < adHeight) {
                        //If this is the second time we are running the setParentHeight function on the instance, we need to use the original parent height.
                        dmel.setStyle(instance.marker.parentNode, { minHeight: instance.prevParentHeight + adHeight + "px" });
                    }
                }
            }
        },

        sumInnerNodes: function sumInnerNodes(node) {
            var rt = this.$root,
                ut = rt.utils,
                st = rt.settings,
                dm = ut.dom,
                dmel = dm.element,
                childHeight,
                childrenNodesHeight = 0;
            for (var ind = 0; ind < node.childNodes.length; ind++) {
                try {
                    //temp hack until we fix the getStyle func
                    if (rt.browser.IE) {
                        childHeight = this.getNodeHeightIE(node.childNodes[ind]);
                        childHeight = parseInt(childHeight, 10);
                    } else {
                        childHeight = dmel.getStyleFixed(node.childNodes[ind], 'height');
                        childHeight = parseInt(childHeight, 10);
                    }
                } catch (e) {
                    childHeight = 0;
                }

                if (childHeight && node.childNodes[ind].className != st.baseClass) {
                    childrenNodesHeight += childHeight;
                }
            }
            return childrenNodesHeight;
        },

        getNodeHeightIE: function getNodeHeightIE(node) {
            var adHeight,
                rt = this.$root;
            if (rt.browser.IE < 9) {
                adHeight = node.getBoundingClientRect().bottom - node.getBoundingClientRect().top;
            } else {
                adHeight = node.getBoundingClientRect().height;
            }
            return adHeight;
        },
        skipInViewContainers: function skipInViewContainers() {
            var rt = this.$root,
                ut = rt.utils,
                st = rt.settings,
                dm = ut.dom,
                dmel = dm.element;

            Object.values(st.hooksMap).forEach(function (h) {
                if (h.prod != 'a') {
                    return;
                }
                // var location = dmel.offset(hook.el).top;
                // if ((window.pageYOffset + window.innerHeight > location) && (window.pageYOffset < location + e.data.adHeight)) {
                h.instance.scrollStopUp = false;
                h.instance.scrollStopDown = false;
                // }
            });
        },
        scrollDisableHandler: function scrollDisableHandler(e) {
            var rt = this.$root,
                ut = rt.utils,
                dm = ut.dom,
                dmel = dm.element,
                hook = e.data.hook,
                container = e.data.container,
                scrollStopAnimationPixels = e.data.scrollStopAnimationPixels,
                scrollStopAnimationDuration = e.data.scrollStopAnimationDuration,
                scrollStopUserFreezeDuration = e.data.scrollStopUserFreezeDuration;

            var location = dmel.offset(container).top;

            
            function preventDefaultForScrollKeys(e) {
                // left: 37, up: 38, right: 39, down: 40,
                // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
                var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
                if (keys[e.keyCode]) {
                    preventDefault(e);
                    return false;
                }
            }

            // modern Chrome requires { passive: false } when adding event
            var supportsPassive = false;
            try {
                window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                    get:                 }));
            } catch (e) {}

            var wheelOpt = supportsPassive ? { passive: false } : false;
            var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

            function disableScroll() {
                window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
                window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
                window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
                window.addEventListener('keydown', preventDefaultForScrollKeys, false);

                hook.instance.scrollStopped = true;
            }

            function enableScroll() {
                window.onscroll = 
                window.removeEventListener('DOMMouseScroll', preventDefault, false);
                window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
                window.removeEventListener('touchmove', preventDefault, wheelOpt);
                window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
                // hook.instance.scrollStopped = false;
                hook.instance.scrollStopUp = false;
                hook.instance.scrollStopDown = false;
            }

            if (window.pageYOffset + window.innerHeight < location) {
                hook.instance.scrollStopUp = true;
                hook.instance.scrollStopped = false;
            }

            if (window.pageYOffset > location + e.data.adHeight) {
                hook.instance.scrollStopDown = true;
                hook.instance.scrollStopped = false;
            }

            var animationFrameInterval = scrollStopAnimationPixels != 0 ? scrollStopAnimationDuration / scrollStopAnimationPixels : 0;

            if (!hook.instance.scrollStopped) {
                if (hook.instance.scrollStopUp && (window.innerHeight - e.data.adHeight) / 2 + window.pageYOffset >= location - scrollStopAnimationPixels) {
                    // stop when scroll from up
                    hook.instance.scrollStopUp = false;
                    this.skipInViewContainers();

                    disableScroll();

                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

                    window.onscroll = function () {
                        window.scrollTo(scrollLeft, scrollTop);
                    };

                    if (animationFrameInterval > 0) {
                        var scrollTheshold = 0;
                        var animate = function animate() {
                            scrollTheshold += 1;
                            scrollTop += 1;
                            window.scrollTo(scrollLeft, scrollTop);
                            if (scrollTheshold < scrollStopAnimationPixels) {
                                setTimeout(animate, animationFrameInterval);
                            } else {
                                setTimeout(enableScroll, Math.max(scrollStopUserFreezeDuration - scrollStopAnimationDuration, 0));
                            }
                        };
                        animate();
                    } else {
                        setTimeout(enableScroll, scrollStopUserFreezeDuration);
                    }
                } else if (hook.instance.scrollStopDown && (window.innerHeight - e.data.adHeight) / 2 + window.pageYOffset <= location + scrollStopAnimationPixels) {
                    // stop when scroll down
                    hook.instance.scrollStopDown = false;
                    this.skipInViewContainers();
                    disableScroll();

                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

                    window.onscroll = 

                    if (animationFrameInterval > 0) {
                        var scrollTheshold = 0;
                        var animate = function animate() {
                            scrollTheshold += 1;
                            scrollTop -= 1;
                            window.scrollTo(scrollLeft, scrollTop);
                            if (scrollTheshold < scrollStopAnimationPixels) {
                                setTimeout(animate, animationFrameInterval);
                            } else {
                                setTimeout(enableScroll, Math.max(scrollStopUserFreezeDuration - scrollStopAnimationDuration, 0));
                            }
                        };
                        animate();
                    } else {
                        setTimeout(enableScroll, scrollStopUserFreezeDuration);
                    }
                }
            }
        },
        scrollAnimationHandler: function scrollAnimationHandler(e) {
            var rt = this.$root,
                ut = rt.utils,
                dm = ut.dom,
                scrollTop = dm.document.getScrollTop(),
                clientHeight = ut.dom.viewport.getHeight(),
                docHeight = dm.document.getHeight(),
                ptbv,
                ad = e.data.ad,
                hook = e.data.hook,
                location = e.data.location;

            ptbv = this.setSetting(ad, "ptbv");
            ptbv = ptbv / 100; //Percentage that needs to be visible
            if (!hook.doneAnimating && window.innerHeight + window.pageYOffset >= location + e.data.adHeight * ptbv) {
                if (e.data.type == "html") {
                    var data = {
                        ad: ad,
                        hook: hook,
                        isPassback: e.data.isPassback,
                        index: e.data.index,
                        instance: e.data.instance
                    };
                    this.createAdContainer(data);
                }

                this.startAnimation(e, ad);
            } else if (!hook.doneAnimating && parseInt(docHeight - scrollTop) == clientHeight) //Reached the end of the document - do nothing even if manual ad is there (by design).
                {
                    return;
                }
        },

        startAnimation: function startAnimation(e, ad) {
            var that,
                stic = this.settings,
                oduration,
                cduration,
                bhr = stic.behavior.merged,
                hook = e.data.hook;

            oduration = this.setSetting(ad, "oduration"); //duration of slide (opening)
            cduration = this.setSetting(ad, "cduration"); //duration of slide (closing)

            this.prepereForslideDown(e.data.el);
            this.slideDownAnimation(e.data.el, oduration, e.data.adHeight, e.data.ad, hook, e.data.isPassback);

            if (ad.cat == "true" || !ad.cat && bhr.cat == "true") {
                //do not close after time out
                that = this;
                setTimeout(function () {
                    that.slideUpAnimation(e.data.el, cduration, e.data.adHeight, ad);
                }, ad.sut || bhr.sut || 60000);
            }

            hook.doneAnimating = true;
        },

        /**
         * returns site setting - gives priority to params that arrive on ad.
         * default values must be assigned to
         * @param ad
         * @param setting
         * @returns {*}
         */
        setSetting: function setSetting(ad, setting) {
            var stic = this.settings,
                bhr = stic.behavior.merged;
            if (ad[setting]) {
                return ad[setting];
            } else if (bhr[setting]) {
                return bhr[setting];
            } else {
                return stic[setting];
            }
        },

        /**
         * Slide Down animation
         * @param element
         * @param duration
         * @param finalheight
         * @param ad
         */
        slideDownAnimation: function slideDownAnimation(element, duration, finalheight, ad, hook, isPassback) {
            var rt = this.$root,
                ut = rt.utils,
                s = element.style,
                y = 0,
                framerate,
                totalframes,
                heightincrement,
                oneSecond = 1000,
                interval,
                _animate,
                b = rt.browser,
                dm = ut.dom;
            s.height = '0px';

            if (isPassback) {
                element.style.height = finalheight + "px";
            } else {
                if (!b.detectCSSFeature("transform") || !b.detectCSSFeature("transition") || !b.detectCSSFeature("perspective") || b.Safari || b.MobileSafari) {
                    framerate = this.setSetting(ad, "ofrt"); //Number of framerates for animation (opening)

                    totalframes = duration / framerate;
                    heightincrement = finalheight / totalframes;
                    interval = oneSecond / framerate;
                    _animate = function animate() {
                        y += heightincrement;
                        s.height = y + 'px';
                        if (y < finalheight) {
                            setTimeout(_animate, interval);
                        }
                    };
                    _animate();
                } else {
                    element.style["-webkit-perspective"] = 1000;
                    element.style["-webkit-transform-style"] = "preserve-3d";
                    element.style["-moz-transition-duration"] = duration + "ms";
                    element.style["-webkit-transition-duration"] = duration + "ms";
                    element.style["-o-transition-duration"] = duration + "ms";
                    element.style["transition-duration"] = duration + "ms";
                    element.style["-moz-transition-timing-function"] = "ease-in";
                    element.style["-webkit-transition-timing-function"] = "ease-in";
                    element.style["-o-transition-timing-function"] = "ease-in";
                    element.style["transition-timing-function"] = "ease-in";
                    element.style.height = finalheight + "px";
                }
            }

            var adviewUrl = rt.helpers.createAdViewUrl({
                hookId: hook.id, capara: hook.clObj, params: {
                    prod_t: hook.prod,
                    bdc: hook.bdc,
                    midx: ad.midx,
                    emd: ad.emd || ''
                }
            });
            rt.comm.sendAjaxRequest({ url: adviewUrl });

            setTimeout( duration);
        },

        slideUpAnimation: function slideUpAnimation(element, duration, finalheight, ad) {
            var rt = this.$root,
                s = element.style,
                hp = rt.helpers,
                y = finalheight,
                framerate,
                totalframes,
                heightincrement,
                oneSecond = 1000,
                interval,
                _animate2,
                hot,
                b = rt.browser,
                transitionEnd;
            s.height = finalheight + 'px';
            s.overflow = "hidden";
            if (!b.detectCSSFeature("transform") || !b.detectCSSFeature("transition") || !b.detectCSSFeature("perspective")) {
                framerate = this.setSetting(ad, "cfrt"); //Number of framerates for animation (closing)
                hot = this.setSetting(ad, "hot"); //Hide on timeout (as opposed to delete)

                totalframes = duration / framerate;
                heightincrement = finalheight / totalframes;
                interval = oneSecond / framerate;
                _animate2 = function animate() {
                    y -= heightincrement;
                    s.height = y + 'px';
                    if (y > 0) {
                        setTimeout(_animate2, interval);
                    } else {
                        element.style.padding = "0px 0px";
                        element.style.height = 0;
                        element.style.overflow = "hidden";
                        element.style.display = '';
                        if (hot == "false") {
                            rt.settings.observer.unobserve(element);
                            element.parentNode.removeChild(element);
                        }
                    }
                };

                _animate2();
            } else {
                hot = this.setSetting(ad, "hot"); //Hide on timeout (as opposed to delete)
                element.style["-webkit-transform-style"] = "preserve-3d";
                element.style["height"] = "0px";
                element.style.padding = "0px 0px";
                element.style["-moz-transition-duration"] = duration + "ms";
                element.style["-webkit-transition-duration"] = duration + "ms";
                element.style["-o-transition-duration"] = duration + "ms";
                element.style["transition-duration"] = duration + "ms";
                element.style["-moz-transition-timing-function"] = "ease-in";
                element.style["-webkit-transition-timing-function"] = "ease-in";
                element.style["-o-transition-timing-function"] = "ease-in";
                element.style["transition-timing-function"] = "ease-in";

                transitionEnd = hp.transitionEndEventName();
                element.addEventListener(transitionEnd, function () {
                    try {
                        rt.settings.observer.unobserve(element);
                        this.removeChild(element, hot, duration);
                    } catch (e) {
                        rt.loggly.errorLog(e, "in_content slideUpAnimation unexpected error in handler for event " + transitionEnd);
                    }
                }.bind(this));
            }
        },

        removeChild: function removeChild(element, hot, duration) {
            if (hot == "false") {
                setTimeout(function () {
                    if (element.parentNode) {
                        element.parentNode.removeChild(element);
                        element.removeEventListener(element, this.removeChild);
                    }
                }, duration);
            }
        },

        /**
         * Leaves inContent markers only where demanded from site setting.
         **/
        checkMultipuleInstances: function checkMultipuleInstances(autoMarker) {
            var stic = this.settings,
                bhr = stic.behavior;
            //The values are received from R/T as string - we need to convert them to bool.
            bhr.merged.embedTop = bhr.merged.embedTop === 'true';
            bhr.merged.embedBottom = bhr.merged.embedBottom === 'true';

            if (bhr.merged.embedTop && !bhr.merged.embedBottom) {
                autoMarker = autoMarker.splice(0, 1);
            }
            if (!bhr.merged.embedTop && bhr.merged.embedBottom) {
                autoMarker = autoMarker.splice(1, 1);
            }
            return autoMarker;
        }
    }, {
        skinSettings: {

            variant: {
                rv: 1, // resources version

                // define theme sets. when using a theme set means that a random theme from the set will be used.
                themesets: {
                    incontent: {
                        // cross-rider theme set
                        //crx : ['gglglg', 'gglggr', 'gglgbl', 'gglgdg', 'ggdglg', 'ggdggr', 'ggdgbl', 'ggdgdg', 'appnts', 'clrdrd', 'clgrgr', 'cloror', 'clprpr', 'clpipi', 'cllblb', 'mtlmtl', 'blpink', 'blcyan']
                        crx: ['gglgdg', 'mtlmtl']
                    }
                },

                // pre-defined themes
                themes: {
                    incontent: {
                        base: {
                            adc: '#666666', //ad description color
                            adfs: 16, //ad description font size
                            adml: 21, //text margin left
                            admt: 5, //text margin top
                            admr: 135, //text margin right
                            aub: 12, //ad display url bottom
                            uc: '#009933', //ad display url color
                            aufs: 18, //ad display url font size
                            auh: 20, //ad display url height
                            atl: 15, //ad text left
                            tc: '#1122CC', //ad title color
                            atfs: 18, //ad title font size
                            atlh: 20, //ad title line height
                            atmh: 31, //ad title max height
                            atml: 21, //title margin left
                            atmr: 135, //title margin right
                            atmt: 7, //title margin top
                            umr: 135, //url margin right
                            uml: 21, //url margin left
                            umt: -21, //url margin top
                            bgc: '#ffffff', //background color (todo future: comma separated list of colors for gradient effect)
                            bbc: '#cacaca', //body border color (the bubble border on the body side)
                            bbw: 1, //body border width (the bubble border on the body side)
                            blc: '#a7a9ab', //border left color
                            blw: 1, //border left width
                            brc: '#a7a9ab', //border right color
                            brw: 1, //border right width
                            hbc: '#a7a9ab', //head border color (the bubble border on the head side)
                            hbw: 1, //head border width (the bubble border on the head side)
                            bbp: 0, //button bottom
                            bc: '#ffffff', //button color
                            bfs: 9, //button font size
                            bwd: 93, //button width
                            brp: 13, //button right
                            bt: 'clickHere', //button text
                            bht: 24, //button height
                            ff: 'Arial,sans-serif', //font family
                            bte: true, //has button
                            ht: true, //has tail
                            hbgc: '#f1f1f2', //header background color (can be a comma separated list of colors for gradient effect)
                            //hgt	: 176,								//height (todo: future support for height here)
                            //wdh	: 316,								//width (todo: future support for width here)
                            hpcn: '_bg', //help button class name
                            xbcn: '_bg', //x button class name
                            hpp: '0 0', //help button background position
                            xbp: '-15px 0', //x button background position
                            hppo: '0 -15px', //help button background position over
                            xbpo: '-15px -15px', //x button background position over
                            hph: 15, //help button height
                            hpw: 15, //help button width
                            hpr: 29, //help button width
                            hpt: 7, //help button top
                            hpl: null, //help button link (value is set in initTheme)
                            lgl: null, //logo link (value is set in initTheme)
                            sdw: '0 0 8px 0 rgba(0, 0, 0, 0.25)', //shadow
                            sdwo: '0 0 8px 0 rgba(0, 0, 0, 0.5)', //shadow over
                            xbh: 15, //x button height
                            xbw: 15, //x button width
                            xbr: 13, //x button width
                            xbt: 7, //x button top
                            bol: 21, //button on left
                            bob: 5, //button on bottom
                            bofl: 40, //button off left
                            bct: 20, //button click top
                            bcr: 20, //button click right
                            rbdl: 0, //radio button div left
                            rbdb: 0 //radio button div bottom
                        },

                        // brand themes
                        brand: {
                            hbw: 2, bcn: '_btn', bcno: '_btn_over', lgu: 'svg', tt: 'svg'
                        },
                        // brand is the inheritance base for all brand themes
                        def: {
                            inherit: ['brand'], hbc: '#003366', lbc: '#003366'
                        },

                        lightBlue: {
                            inherit: ['brand'], hbc: '#1b8ede', lbc: '#1b8ede'
                        },

                        green: {
                            inherit: ['brand'], hbc: '#67b045', lbc: '#67b045'
                        },

                        orange: {
                            inherit: ['brand'], hbc: '#f3933b', lbc: '#f3933b'
                        },

                        red: {
                            inherit: ['brand'], hbc: '#dd3c42', lbc: '#dd3c42'
                        },

                        pink: {
                            inherit: ['brand'], hbc: '#d84189', lbc: '#d84189'
                        },

                        purple: {
                            inherit: ['brand'], hbc: '#5939aa', lbc: '#5939aa'
                        },

                        cstm1: {
                            inherit: ['brand'], hbc: '#faa51b', lbc: '#faa51b'
                        },

                        nologo: {
                            inherit: ['brand'], lgu: null
                        },

                        yell: {
                            inherit: ['brand'],
                            lgu: null,
                            bt: 'Visit us on Yell.com',
                            bwd: 130,
                            bcn: null,
                            bbgc: '#1192BC',
                            auh: 0,
                            tc: '#1495BF',
                            attd: 'underline',
                            adc: '#7f7f7f',
                            bgi: 'yell_head.png',
                            atmt: 70,
                            atfs: 17,
                            adfs: 12,
                            atmh: 36,
                            adbt: 80,
                            adt: 27,
                            adw: 288,
                            adh: 35
                        },

                        narrow: {
                            inherit: ['def'],
                            w: 300,
                            h: 250,
                            bct: 183,
                            bcr: 107,
                            atml: 35,
                            atmr: 35,
                            atmt: 7,
                            admt: 20,
                            admr: 21,
                            adml: 21,
                            uml: 21,
                            umr: 21,
                            umt: -45,
                            rbdl: 115
                        },

                        crx: {
                            adfs: 10,
                            aufs: 10,
                            bfs: 10,
                            bbrr: 2,
                            auh: 12,
                            lgl: null,
                            hpl: null,
                            tt: 'triangle',
                            bbr: '1px solid rgba(0, 0, 0, 0.1)',
                            tcl: '#a7a9ab',
                            ff: 'Trebuchet MS,Arial,sans-serif',
                            hpcn: null,
                            hpbi: 'icons/help4.png',
                            hppo: null,
                            hph: 16,
                            hpw: 16,
                            hpr: 29,
                            xbcn: null,
                            xbi: 'icons/x4.png',
                            xbpo: null,
                            xbp: '0 0',
                            xbh: 16,
                            xbw: 16,
                            xbr: 11,
                            cpt: 'Ads',
                            cph: 15,
                            cptp: 7,
                            cprt: 53,
                            cpcl: '#cccccc',
                            cpfs: 8,
                            cpfw: 'normal',
                            hpcb:                         },

                        gglglg: {
                            inherit: ['crx'],
                            tc: '#1122CC',
                            adc: '#222222',
                            uc: '#009933',
                            hbgc: '#F1F1F1',
                            bc: '#444444',
                            bbgc: '#F5F5F5',
                            bbco: '#F0F0F0',
                            cpcl: '#555555'
                        },

                        gglggr: {
                            inherit: ['crx'],
                            tc: '#1122CC',
                            adc: '#222222',
                            uc: '#009933',
                            hbgc: '#F1F1F1',
                            bc: '#FFFFFF',
                            bbgc: '#009933',
                            bbco: 'rgba(0, 153, 51, 0.9)',
                            cpcl: '#555555'
                        },

                        gglgbl: {
                            inherit: ['crx'],
                            tc: '#1122CC',
                            adc: '#222222',
                            uc: '#009933',
                            hbgc: '#F1F1F1',
                            bc: '#FFFFFF',
                            bbgc: '#1122CC',
                            bbco: 'rgba(17, 34, 204, 0.9)',
                            cpcl: '#555555'
                        },

                        gglgdg: {
                            inherit: ['crx'],
                            tc: '#1122CC',
                            adc: '#222222',
                            uc: '#009933',
                            hbgc: '#F1F1F1',
                            bc: '#FFFFFF',
                            bbgc: '#575757',
                            bbco: 'rgba(87, 87, 87, 0.9)',
                            cpcl: '#555555'
                        },

                        ggdglg: {
                            inherit: ['crx'],
                            tc: '#1122CC',
                            adc: '#222222',
                            uc: '#009933',
                            hbgc: '#575757',
                            bc: '#444444',
                            bbgc: '#F5F5F5',
                            bbco: '#F0F0F0',
                            tcl: '#575757',
                            hbc: '#575757'
                        },

                        ggdggr: {
                            inherit: ['crx'],
                            tc: '#1122CC',
                            adc: '#222222',
                            uc: '#009933',
                            hbgc: '#575757',
                            bc: '#FFFFFF',
                            bbgc: '#009933',
                            bbco: 'rgba(0, 153, 51, 0.9)',
                            tcl: '#575757',
                            hbc: '#575757'
                        },

                        ggdgbl: {
                            inherit: ['crx'],
                            tc: '#1122CC',
                            adc: '#222222',
                            uc: '#009933',
                            hbgc: '#575757',
                            bc: '#FFFFFF',
                            bbgc: '#1122CC',
                            bbco: 'rgba(17, 34, 204, 0.9)',
                            tcl: '#575757',
                            hbc: '#575757'
                        },

                        ggdgdg: {
                            inherit: ['crx'],
                            tc: '#1122CC',
                            adc: '#222222',
                            uc: '#009933',
                            hbgc: '#575757',
                            bc: '#FFFFFF',
                            bbgc: '#575757',
                            bbco: 'rgba(87, 87, 87, 0.9)',
                            tcl: '#575757',
                            hbc: '#575757'
                        },

                        appnts: {
                            inherit: ['crx'],
                            tc: '#222222',
                            adc: '#222222',
                            uc: '#222222',
                            auh: 14,
                            atmh: 32,
                            hbgc: ['top', '#8C6252', '#563D36', '#48362C'],
                            bc: '#FFFFFF',
                            bgc: ['top', '#FAFABA', '#F8F594', '#FAF7A6'],
                            bbgc: '#413029',
                            bbco: '#563D36',
                            ff: 'Comic Sans MS,Arial,sans-serif',
                            tcl: function tcl(hook) {
                                return hook.orientationY == 'T' ? '#48362C' : '#8C6252';
                            },

                            hbc: '#8C6252'
                        },

                        clrdrd: {
                            inherit: ['crx'],
                            tc: '#222222',
                            adc: '#222222',
                            uc: '#000080',
                            hbgc: '#dc3b41',
                            bc: '#FFFFFF',
                            hbc: '#dc3b41',
                            bbc: '#dc3b41',
                            blc: '#dc3b41',
                            brc: '#dc3b41',
                            bbgc: '#dc3b41',
                            bbco: '#e35056',
                            tcl: '#dc3b41',
                            cpcl: '#FFFFFF'
                        },

                        clgrgr: {
                            inherit: ['crx'],
                            tc: '#222222',
                            adc: '#222222',
                            uc: '#000080',
                            hbgc: '#66af44',
                            bc: '#FFFFFF',
                            hbc: '#66af44',
                            bbc: '#66af44',
                            blc: '#66af44',
                            brc: '#66af44',
                            bbgc: '#66af44',
                            bbco: 'rgba(102, 175, 68, 0.9)',
                            tcl: '#66af44',
                            cpcl: '#FFFFFF'
                        },

                        cloror: {
                            inherit: ['crx'],
                            tc: '#222222',
                            adc: '#222222',
                            uc: '#000080',
                            hbgc: '#f2923a',
                            bc: '#FFFFFF',
                            hbc: '#f2923a',
                            bbc: '#f2923a',
                            blc: '#f2923a',
                            brc: '#f2923a',
                            bbgc: '#f2923a',
                            bbco: 'rgba(242, 146, 58, 0.9)',
                            tcl: '#f2923a',
                            cpcl: '#FFFFFF'
                        },

                        clprpr: {
                            inherit: ['crx'],
                            tc: '#222222',
                            adc: '#222222',
                            uc: '#000080',
                            hbgc: '#5838a9',
                            bc: '#FFFFFF',
                            hbc: '#5838a9',
                            bbc: '#5838a9',
                            blc: '#5838a9',
                            brc: '#5838a9',
                            bbgc: '#5838a9',
                            bbco: 'rgba(88, 56, 169, 0.9)',
                            tcl: '#5838a9',
                            cpcl: '#FFFFFF'
                        },

                        clpipi: {
                            inherit: ['crx'],
                            tc: '#222222',
                            adc: '#222222',
                            uc: '#000080',
                            hbgc: '#d74088',
                            bc: '#FFFFFF',
                            hbc: '#d74088',
                            bbc: '#d74088',
                            blc: '#d74088',
                            brc: '#d74088',
                            bbgc: '#d74088',
                            bbco: 'rgba(215, 64, 136, 0.9)',
                            tcl: '#d74088',
                            cpcl: '#FFFFFF'
                        },

                        cllblb: {
                            inherit: ['crx'],
                            tc: '#222222',
                            adc: '#222222',
                            uc: '#000080',
                            hbgc: '#1a8ddd',
                            bc: '#FFFFFF',
                            hbc: '#1a8ddd',
                            bbc: '#1a8ddd',
                            blc: '#1a8ddd',
                            brc: '#1a8ddd',
                            bbgc: '#1a8ddd',
                            bbco: 'rgba(26, 141, 221, 0.9)',
                            tcl: '#1a8ddd',
                            cpcl: '#FFFFFF'
                        },

                        mtlmtl: {
                            inherit: ['crx'],
                            tc: '#222222',
                            adc: '#222222',
                            uc: '#FFFFFF',
                            hbgc: ['top', '#A4A2A3', '#6F6F6F', '#565656', '#555555'],
                            bc: '#FFFFFF',
                            bgc: ['top', '#C9C9C9', '#F3F3F3', '#A7A7A7', '#7F7F7F'],
                            hbc: '#A4A2A3',
                            bbc: '#A4A2A3',
                            blc: '#A4A2A3',
                            brc: '#A4A2A3',
                            bbgc: ['top', '#A4A2A3', '#6F6F6F', '#565656', '#555555'],
                            bbco: ['top', '#555555', '#565656', '#6F6F6F', '#A4A2A3'],
                            tcl: function tcl(hook) {
                                return hook.orientationY == 'T' ? '#555555' : '#A4A2A3';
                            }
                        },

                        blpink: {
                            inherit: ['crx'],
                            tc: '#FFFFFF',
                            adc: '#75715e',
                            uc: '#f92672',
                            hbgc: '#3e3d32',
                            bc: '#FFFFFF',
                            bgc: '#272822',
                            hbc: '#3e3d32',
                            bbc: '#272822',
                            blc: '#272822',
                            brc: '#272822',
                            bbgc: '#f92672',
                            bbco: 'rgba(249, 38, 114, 0.7)',
                            tcl: '#3e3d32'
                        },

                        blcyan: {
                            inherit: ['crx'],
                            tc: '#FFFFFF',
                            adc: '#75715e',
                            uc: '#66d9ef',
                            hbgc: '#3e3d32',
                            bc: '#272822',
                            bgc: '#272822',
                            hbc: '#3e3d32',
                            bbc: '#272822',
                            blc: '#272822',
                            brc: '#272822',
                            bbgc: '#66d9ef',
                            bbco: 'rgba(102, 217, 239, 0.9)',
                            tcl: '#3e3d32'
                        },

                        cdtolg: {
                            inherit: ['crx'],
                            tc: '#316DB5',
                            adc: '#222222',
                            uc: '#009933',
                            hbgc: '#F1F1F1',
                            bc: '#FFFFFF',
                            bbgc: '#f2923a',
                            bbco: '#FFAC54',
                            cpcl: '#555555',
                            bt: 'Click to Search',
                            bwd: 103,
                            bbp: 6
                        },

                        cdtodg: {
                            inherit: ['crx'],
                            tc: '#222222',
                            adc: '#222222',
                            uc: '#009933',
                            hbgc: '#575757',
                            bc: '#FFFFFF',
                            bbgc: '#f2923a',
                            bbco: '#FFAC54',
                            cpcl: '#FFFFFF',
                            bt: 'Click to Search',
                            bwd: 103,
                            bbp: 6,
                            tcl: '#575757',
                            hbc: '#575757',
                            cpt: 'RelatedTags'
                        },

                        cdtbl: {
                            inherit: ['crx'],
                            tc: '#2e66af',
                            adc: '#222222',
                            uc: '#000080',
                            hbgc: '#2e66af',
                            bc: '#FFFFFF',
                            hbc: '#2e66af',
                            bbc: '#2e66af',
                            blc: '#2e66af',
                            brc: '#2e66af',
                            bbgc: '#2e66af',
                            bbco: 'rgba(26, 141, 221, 0.9)',
                            tcl: '#2e66af',
                            cpcl: '#FFFFFF',
                            rc: 10,
                            bt: 'Click to Search',
                            bwd: 103
                        },

                        cdtlgbl: {
                            inherit: ['crx'],
                            tc: '#2e66af',
                            adc: '#222222',
                            uc: '#000080',
                            hbgc: '#F1F1F1',
                            bc: '#FFFFFF',
                            hbc: '#2e66af',
                            bbc: '#2e66af',
                            blc: '#2e66af',
                            brc: '#2e66af',
                            bbgc: '#2e66af',
                            bbco: 'rgba(26, 141, 221, 0.9)',
                            tcl: '#2e66af',
                            cpcl: '#555555',
                            rc: 10,
                            bt: 'Click to Search',
                            bwd: 103
                        },
                        gglgdg_c: {
                            inherit: ['crx', 'gglgdg'], cpt: 'RelatedTags'
                        },
                        mtlmtl_c: {
                            inherit: ['crx', 'mtlmtl'], cpt: 'RelatedTags'
                        }
                    }
                }
            }
        },
        settings: {
            intagProdId: 'IL_IN_TAG',
            intagOldProdId: "IL_RELATED_TAGS",
            prodId: {
                'c': 'IL_IN_CONTENT', 'n': 'IL_IN_RECOMMEND', 'a': 'IL_IN_ARTICLE'
            },

            prodCode: 'c',
            prodName: {
                'c': 'incontent', 'n': 'inrecommend', 'a': 'inarticle'
            },

            instances: {
                'c': [], 'n': [], 'a': []
            },

            containerMinWidth: 200,
            sentences: {},

            bdc: 0,
            // IE older than 9 or in compatibility mode
            oldIE: function () {
                var b = window.$ice.$root.browser;
                return b.IE && (document.compatMode == 'BackCompat' || b.getVersion(true) < 9);
            }(),

            numOfAds: 0,
            titleChars: 25,
            descChars: 200,
            thumbLeftWithThumb: 14,
            thumbLeftWithOutThumb: 15,
            btnLeftWithThumb: 194,
            btnLeftWithOutThumb: 15,
            logoMarginTop: -12,
            logoMarginTopSecondary: 103,
            logoMarginLeftWithoutThumb: 230,
            logoMarginLeftWithThumbSecondary: 6,
            logoMarginLeftWithThumb: 300,
            logoMarginTopIE: 120,
            logoMarginTopIESecondary: 10,
            displayURLChars: 23,
            textAdHeight: 100,
            textAdWidth: 300,
            maxTextAdWidth: 728,
            maxTextAdHeight: 100,
            adWin: null,
            logData: {},

            LongLogoW: 20,
            numberOfICMessages: 5,
            ptbv: 50,
            oduration: 1000,
            cduration: 1000,
            ofrt: 40,
            cfrt: 40,
            hot: "false",

            behavior: {
                // default behavior settings
                def: {
                    skin: 'variant',
                    theme: 'def',
                    fontFamily: 'Arial,sans-serif',
                    fontWeight: 'normal',
                    fontSize: 13,
                    underline: 'single',
                    logoHeight: 11,
                    logoWidth: 48,
                    height: 60,
                    hookMargin: 5,
                    top: 0,
                    lines: 1,
                    darkBg: false // flag if the website background is dark (so that the logo will be gray)
                },

                // behavior sanitizer
                sanitizer: {
                    fontFamily: 'str',
                    fontWeight: ['normal', 'bold'],
                    fontSize: 'int',
                    underline: ['double', 'single', 'dotted', 'dashed', 'none'],
                    logoHeight: 'int',
                    logoWidth: 'int',
                    height: 'int',
                    hookMargin: 'int',
                    lines: 'int',
                    darkBg: 'bool'
                }
            },

            themes: {
                color: {
                    def: '#003366',
                    lightBlue: '#1b8ede',
                    green: '#67b045',
                    orange: '#f3933b',
                    red: '#dd3c42',
                    pink: '#d84189',
                    purple: '#5939aa',
                    cstm1: '#faa51b' // custom color for conduit bubble
                }
            },

            mode: {
                'c': 'default', 'n': 'default', 'a': 'default'
            },

            products: 'cna',

            instanceCounter: 0
        }
    }, true);

    incontent.bind({
        event: 'renderInContentProduct',
        listener: {
            renderIncontent: function renderIncontent() {
                var rt = this.$root,
                    prod,
                    hp = rt.helpers,
                    stic = this.settings;

                //TODO: loop over content products
                for (var i = 0; i < stic.products.length; i++) {
                    if (stic.products.charAt(i) in rt.comm.settings.responses.impression.prs) {
                        rt.event.fire('productRenderStatus', { prod: stic.products.charAt(i), status: 'during' });
                        rt.event.fire('initIncontent', { prod: stic.products.charAt(i) });
                    } else {
                        rt.event.fire('productRenderStatus', { prod: stic.products.charAt(i), status: 'none' });
                    }
                }
            }
        }
    });

    incontent.bind({
        event: 'incontentHideVideo',
        listener: {
            incontentHideVideo: function incontentHideVideo(event) {
                var videoContainerId = event.data.videoContainerId,
                    videoParentId = event.data.videoParentId,
                    stic = this.settings,
                    rt = this.$root,
                    hook = document.getElementById(videoParentId);
                for (var i = 1; i < hook.children.length; i++) {
                    hook.children[i].style.display = 'block';
                }
                document.getElementById(videoContainerId).style.display = 'block';
                document.getElementById(videoContainerId).style.opacity = '0';
                document.getElementById(videoContainerId).style.height = stic.firstAdHeight + "px";
            }
        }
    });

    incontent.bind({
        event: 'incontentShowVideo',
        listener: {
            incontentShowVideo: function incontentShowVideo(event) {
                var rt = this.$root,
                    st = rt.settings,
                    instance = event.data.instance,
                    videoContainerId = instance.videoContainerId,
                    videoParentId = instance.videoParentId,
                    adAreaId = instance.adAreaId,
                    hook = document.getElementById(videoParentId);
                instance.isShowingVideo = true;
                for (var i = 1; i < hook.children.length; i++) {
                    var elem = hook.children[i];

                    if (elem.id == adAreaId) {
                        elem.parentElement.removeChild(elem);
                    } else {
                        elem.style.display = 'none';
                    }
                }

                document.getElementById(videoContainerId).style.display = 'block';
                document.getElementById(videoContainerId).style.opacity = '1';
                document.getElementById(videoContainerId).style.height = instance.firstAdHeight + "px";
            }
        }
    });

    incontent.bind({
        event: 'renderInContentVideoProducts',
        listener: {
            renderVideoProducts: function renderVideoProducts(event) {
                var rt = this.$root,
                    stic = this.settings,
                    instance = event.data.instance;
                instance.isShowingVideo = false;

                if (instance.player || !window.ILVideo || !document.getElementById(instance.videoContainerId)) return;
                // as soon as one ad is loaded use this flag on getAdsResponse refresh call to postpone it until video ads are finished
                instance.vastAdCounter = 0;
                if (instance.vastTags.length > 0) {
                    instance.videoAdsPlaying = true;
                    instance.hideVideoEvtHandler = 'incontentHideVideo';
                    instance.showVideoEvtHandler = 'incontentShowVideo';
                }
                var player = rt.inplayer.create({
                    container: instance.videoTagId,
                    autoplay: 'muted',
                    settings: instance,
                    root: rt
                });

                instance.player = player;
            }
        }
    });

    incontent.bind({
        event: 'preRenderVideoProducts',
        listener: {
            preRenderVideoProducts: function preRenderVideoProducts() {
                var rt = this.$root,
                    stic = this.settings;

                stic.preRenderVideoProducts = true;
                for (var prod in stic.instances) {
                    if (stic.instances[prod].length > 0) {
                        for (var index = 0; index < stic.instances[prod].length; index++) {
                            if (stic.instances[prod][index].vastTags && stic.instances[prod][index].vastTags.length > 0) {
                                rt.event.fire('renderInContentVideoProducts', { instance: stic.instances[prod][index] });
                            }
                        }
                    }
                }
            }
        }
    });

    incontent.bind({
        event: 'destroy',
        listener: {
            destroy: function destroy(e) {
                var rt = this.$root,
                    st = rt.settings,
                    stic = this.settings;
                try {
                    for (var i in st.hooksMap) {
                        if (st.hooksMap[i].prod == 'a' || st.hooksMap[i].prod == 'c') {
                            var producGptDestroySlots = rt.comm.settings.responses.impression.prs[st.hooksMap[i].prod].behavior.gptDestroySlots;
                            var globalGptDestroySlots = rt.comm.settings.responses.impression.behavior_imp.gptDestroySlots;
                            var gptDestroySlots = producGptDestroySlots ? producGptDestroySlots : globalGptDestroySlots;
                            if (gptDestroySlots == 'true') {
                                // IL_IN_ARTICLE_CONTAINER_1 or IL_IN_CONTENT_CONTAINER_0
                                var index = st.hooksMap[i].id.substr(st.hooksMap[i].id.length - 1, st.hooksMap[i].id.length);
                                var hook = document.getElementById(st.hooksMap[i].id.substr(0, st.hooksMap[i].id.length - 1) + "_CONTAINER_" + index);
                                hook.parentNode.parentNode.removeChild(hook.parentNode);
                                stic.state = 'destroyed';
                            }
                        }
                    }
                } catch (e) {}
            }
        }
    });

    incontent.bind({
        event: 'initIncontent',
        listener: {
            init: function init(e) {
                var rt = this.$root,
                    st = rt.settings,
                    hp = rt.helpers,
                    bh = st.behavior,
                    stic = this.settings,
                    prod = e.data.prod,
                    uto = rt.utils.object,
                    prodImp = rt.comm.settings.responses.impression.prs[prod],
                    resImp = rt.comm.settings.responses.impression,
                    ut = rt.utils,
                    dm = ut.dom,
                    senteceIndex,
                    instance,
                    bhr = stic.behavior,
                    i,
                    leni,
                    getadsDelay = 0,
                    contentWidth = [],
                    dimStyle = [],
                    dimObj = {},
                    containerWidth,
                    h = ut.dom.viewport.getHeight(),
                    cbh = rt.helpers.getVar('related_tags') || {},
                    instanceObj,
                    capara = [],
                    initialVars; // read related tags behavior settings (for backwards compatibility)

                initialVars = {
                    bottomPlacementAlgo: 'palgo',
                    pn: 2,
                    mwfa: 200,
                    mp: 6
                };

                if (prod == 'c') {
                    initialVars.fbit = 'true';
                }

                if (prod == 'a') {
                    initialVars.cat = 'true';
                    initialVars.aos = 'true';
                    initialVars.ptbv = 50;
                    initialVars.oduration = 1000;
                    initialVars.cduration = 1000;
                    initialVars.ofrt = 40;
                    initialVars.cfrt = 40;
                    initialVars.sut = 60000;
                }

                bhr.impression = rt.helpers.renameBehaviorProperties(prodImp.behavior || {});
                hp.initAlgoBehaviors(bhr.impression, initialVars);
                bhr.merged = uto.extend({}, bh.def, bhr.def, bh.impression, bhr.impression, bh.customer, cbh);
                bhr.merged.tagHeight = Math.max(Math.ceil(bhr.merged.fontSize * 1.3) + 2, 17);
                rt.helpers.sanitize(bhr.merged, uto.extend({}, bh.sanitizer, bhr.sanitizer));
                stic.bhr = bhr;

                // build style
                dm.style.addRule('.' + stic.prodId[prod] + '_AD', ['display:inline; color:', bh.linkColor, ' !important; cursor:pointer !important; font-family:', bh.fontFamily, '; font-weight:', bh.fontWeight, '; font-size:', bh.fontSize, 'px !important; white-space:nowrap !important; float:none !important;'].join(''));

                // todo: this is a hack only to deal with 'nologo' skin instead of 'nologo' theme
                if (!stic.themes.color[bhr.merged.theme]) {
                    if (bhr.merged.theme == 'nologo') {
                        //do nothing, theme stays
                    } else {
                        bhr.merged.theme = 'def';
                    }
                }
                // find embedded tags markers or try to auto-place a marker
                var markers = this.locateMarkers(prod, bhr.merged.lines);
                if (markers && markers.length) {
                    for (i = 0, leni = markers.length; i < leni; i++) {
                        containerWidth = rt.utils.dom.element.getActualWidthFixed(markers[i].refNode);

                        if (prod != 'c' || this.showIncontentInstance(markers[i])) {
                            //showIncontentInstance is for c product only
                            var o = {
                                marker: markers[i].node,
                                container: markers[i].refNode,
                                hooksCount: 1, // counter for the number of hooks that will be created in this instance
                                capara: markers[i].capara
                            };

                            o.marker.name = stic.prodId[prod];
                            rt.utils.array.push(dimStyle, this.getDimensionFromStyle(markers[i].node));

                            // calculate instance width
                            o.width = containerWidth;

                            rt.utils.array.push(contentWidth, o.width);
                            rt.utils.array.push(stic.instances[prod], o);
                            rt.utils.array.push(capara, o.capara);
                        }
                    }

                    //Start process only if there is at least one instance that fits the width.
                    if (stic.instances[prod].length) {
                        for (i = 0; i < stic.instances[prod].length; i++) {
                            instanceObj = stic.instances[prod][i];
                            senteceIndex = resImp.prs[prod].sentences[i];
                            // create an instance and enter its data into it
                            // for multiple inarticle we need to have different sentences
                            instance = {
                                sentence: ut.object.keys(resImp.sentences)[senteceIndex],
                                node: dm.createDOMFragment({
                                    tag: 'div', id: stic.prodId[prod], cls: rt.settings.baseClass, after: instanceObj.marker
                                })
                            };

                            dimObj = function (i) {
                                var width, height;

                                if (instanceObj.marker.getAttribute("width")) {
                                    //get width from the tag  dimObj.maw
                                    width = instanceObj.marker.getAttribute("width");
                                } else if (ut.object.size(dimStyle[i])) {
                                    if (dimStyle[i].maw) {
                                        width = dimStyle[i].maw;
                                    }
                                } else {
                                    width = contentWidth[i];
                                }
                                height = instanceObj.marker.getAttribute("height") || h; //get height from the tag, if exist

                                dimObj = new hp.dimObj(prod, null, { width: width, height: height });
                                return dimObj;
                            }(i);

                            hp.setViews('fc', 'msgvwcoo');
                            hp.setViews('pv', 'prodvw');
                            var hook = instance.hook = rt.helpers.createHook(stic.prodId[prod] + i, instance.sentence, instance.node, 0, incontent, prod, 'incontent', false, instance);

                            rt.event.fire('callGetAds', {
                                //@TODO change this replace when prod fixes x to *
                                params: { as: instanceObj.marker.getAttribute('data-as') ? instanceObj.marker.getAttribute('data-as').replace(/x/g, '*') : null },
                                hookId: hook.id,
                                dim: dimObj,
                                prod: prod,
                                size: stic.instances[prod].length - 1,
                                callback: 'getadsResponseIncontent',
                                capara: capara[i]
                            }, getadsDelay);
                        }
                    } else {
                        dimObj = new hp.dimObj(prod);

                        if (prod == 'c') {
                            hp.runInTag();
                        }

                        rt.event.fire('callGetAds', {
                            hookId: stic.prodId[prod],
                            dim: dimObj,
                            prod: prod,
                            size: 0,
                            callback: 'getadsResponseIncontent'
                        }, getadsDelay);
                    }
                } else {

                    if (prod == 'c') {
                        hp.runInTag();
                    }

                    rt.event.fire('callGetAds', {
                        hookId: stic.prodId[prod],
                        dim: dimObj,
                        prod: prod,
                        size: 0,
                        callback: 'getadsResponseIncontent'
                    }, getadsDelay);
                }
                //send data to CL
                rt.event.fire('sendClientLog', { params: { mode: stic.mode[prod], markers: markers.length } });
            }
        }
    });

    incontent.bind({
        event: 'getadsResponseIncontent',
        listener: {
            setAdData: function setAdData(event) {
                var rt = this.$root,
                    st = rt.settings,
                    data = event.data,
                    hookId = data.lid,
                    hook = st.hooksMap[hookId],
                    ad,
                    i,
                    stic = this.settings,
                    ut = rt.utils,
                    index,
                    instance,
                    hp = rt.helpers,
                    prod = data.prod;

                // get the hook
                if (!hook) {
                    rt.logger.error('Error: Missing hook.', this.setAdData);
                    return false;
                }

                hook.currentAdIndex = 0;
                hook.mrc50URL = data.ads[0] && data.ads[0].mrc50URL ? data.ads[0].mrc50URL : undefined;
                // use data external tag
                // get the first non video ad to render
                while (data.ads[hook.currentAdIndex] && data.ads[hook.currentAdIndex].template === "video") {
                    hook.currentAdIndex++;
                }

                stic.instanceCounter++;
                index = parseInt(hookId.replace(/^\D+/g, ''));
                instance = stic.instances[prod][index];
                instance.vastTags = [];

                if (data.ads.length > 0) {
                    if (data.ads[0].template === "video") {
                        if (!data.ads[0].width || data.ads[0].width === -1) {
                            instance.firstAdWidth = stic.defaultWidth;
                        } else {
                            instance.firstAdWidth = data.ads[0].width;
                        }

                        if (!data.ads[0].height || data.ads[0].height === -1) {
                            instance.firstAdHeight = stic.defaultHeight;
                        } else {
                            instance.firstAdHeight = data.ads[0].height;
                        }
                        instance.isVideoTemplate = true;
                        data.ads[1].initialWidth = data.ads[1].width;
                        data.ads[1].initialHeight = data.ads[1].height;
                        data.ads[1].width = data.ads[0].width;
                        data.ads[1].height = data.ads[0].height;
                    } else {
                        data.ads[0].initialWidth = data.ads[0].width;
                        data.ads[0].initialHeight = data.ads[0].height;
                    }
                    //st.bdc = hook.bdc;
                    for (i = 0; i < data.ads.length; i++) {
                        ad = data.ads[i];
                        ad.midx = i;
                        ad.aco = data.ads[i].aco || 500; //ad cut-off, default is 500
                        //create product.settings.vastTags array
                        if (ad.template === "video") {
                            var vastTag = {
                                emd: ad.emd,
                                midx: ad.midx,
                                vastTag: ad.content,
                                postLoadVideo: ad.postLoadVideo
                            };
                            instance.vastTags.push(vastTag);
                        }
                    }

                    if (ad.content) {
                        ad.content = ut.string.replaceAll(ad.content, "${midx}", ad.midx);
                    }

                    rt.helpers.setHookData(hookId, data);
                    rt.event.fire('createIncontentUnit', { hookId: hookId, hook: hook, prod: prod });

                    if (!st.inContentSets.inContentManualExist) {
                        //if there's a valid manual inContent unit, mark it to be used later in inTag
                        st.inContentSets.inContentManualExist = instance.marker.IL_isManual;
                    }
                } else if (prod == 'c' && instance) {
                    //No ads, revert the instance to inTag.
                    instance.marker.name = stic.intagProdId;
                }

                //If we are done going over all instances, run intag.
                if (prod == 'c' && stic.instanceCounter == stic.instances[prod].length) {
                    hp.runInTag();
                }
            }
        }
    });

    incontent.bind({
        event: 'createIncontentUnit',
        listener: {
            createIncontentUnits: function createIncontentUnits(event) {
                var rt = this.$root,
                    stic = this.settings,
                    bh = stic.behavior.merged,
                    ut = rt.utils,
                    dm = ut.dom,
                    instance,
                    hook = event.data.hook,
                    data,
                    firstAd,
                    index = parseInt(event.data.hookId.replace(/^\D+/g, '')),
                    isPassback = event.data.isPassback,
                    st = rt.settings,
                    prod = event.data.prod,
                    firstMessageIndex,
                    ad;

                //this.setIncontentStylesheet();
                dm.style.addRule('.' + stic.prodId[prod] + '_AD', ['display:inline; color:', bh.linkColor, '; cursor:pointer !important; font-family:', bh.fontFamily, '; font-weight:', bh.fontWeight, 'important; font-size:', bh.fontSize, 'px !important; white-space:nowrap !important; float:none !important;'].join(''));
                data = rt.helpers.getHookData(event.data.hookId);
                instance = stic.instances[prod][index];
                hook.instance = instance;
                hook.instance.scrollStopped = false;
                hook.instance.scrollStopUp = false;

                stic.instance = instance;
                ad = data.ads[hook.currentAdIndex];

                if (data && instance) {
                    firstMessageIndex = data.ads[0];
                    //Remove messages that are not going to be used.
                    data.ads.splice(0, firstMessageIndex);
                    firstAd = data.ads[hook.currentAdIndex];
                    if (firstAd.waitForViewEvent) st.waitForViewEvent = firstAd.waitForViewEvent;

                    if (firstAd.template == "text") {
                        this.createTextAd(instance, index, hook, firstAd, isPassback, prod);
                    } else if (firstAd.template == "html") {
                        this.createHTMLAd(instance, index, hook, firstAd, isPassback, prod);
                    } else if (firstAd.template == "external") {
                        data = rt.externalTags.setExternalTagData(hook, data);
                        this.createHTMLAd(instance, index, hook, firstAd, isPassback, prod);
                    }
                }

                if (hook.prod != 'a') {
                    hook.instance.vastTags = instance.vastTags;
                    rt.event.fire('prepareIncontentVideo', { ad: ad, hook: hook });
                }

                this.$root.event.fire('productRenderStatus', { prod: prod, status: 'after' });
            }
        }
    });
    /**
     * create video container and prepare to render
     */
    incontent.bind({
        event: 'prepareIncontentVideo',
        listener: {
            prepareIncontentVideo: function prepareIncontentVideo(event) {
                var rt = this.$root,
                    stic = this.settings,
                    ut = rt.utils,
                    hook = event.data.hook,
                    instance = hook.instance,
                    ad = event.data.ad,
                    hp = rt.helpers,
                    st = rt.settings,
                    index = parseInt(event.data.hook.id.replace(/^\D+/g, '')),
                    prod = hook.prod,
                    bhs = rt.settings.behavior;

                if (instance.vastTags.length > 0 || instance.isVideoTemplate) {
                    //prepare container to center smaller than video ads
                    // instance.node.style.overflow = 'hidden';
                    var scale = hp.getCustomScale(ad.instanceWidth, ad.width, ad.width);
                    var webkitTransform = '-webkit-transform:scale(' + scale + ') ; transform:scale(' + scale + ') ; -ms-transform:scale(' + scale + ')';
                    var webkitTransformOrigin = st.webkitTransformOrigin;
                    instance.firstAdHeight = ad.template !== "text" ? instance.firstAdHeight * scale : instance.firstAdHeight;
                    var obj = {
                        postLoadVideo: instance.vastTags[0].postLoadVideo || this.settings.defaultPostLoadVideo,
                        baseCls: rt.settings.baseClass,
                        firstAdHeight: instance.firstAdHeight,
                        ad: ad,
                        id: hook.node.id + '_VIDEO_CONTAINER_' + index
                    };
                    instance.videoTagId = hook.node.id + '_VIDEO_CONTAINER_' + index;
                    // tine minte////
                    var html = ut.VeST('<div style="width:100%; height:100%;background: black; margin-top: 0px; overflow: hidden;">\    <video style="width:100%; height:100%; margin: 0 auto; display: block;" playsinline id="<%= id %>"\        class="vjs-infolinks vjs-tech video-js vjs-default-skin" muted preload="auto">\        <source src="<%= postLoadVideo %>" type="video/mp4" />\    </video>\</div>', obj);
                    ut.dom.createDOMFragment({
                        tag: 'div',
                        id: hook.node.id + '_VIDEO_' + index,
                        parent: document.getElementById(hook.node.id + '_CONTAINER_' + index),
                        innerHTML: html
                    });
                    var videoContainerId = hook.node.id + '_VIDEO_' + index;
                    var videoParentId = hook.node.id + '_CONTAINER_' + index;
                    var adAreaId = hook.node.id + '_AD_AREA_' + index;

                    if (ad.template !== "text") {
                        document.getElementById(videoContainerId).style.height = instance.firstAdHeight + "px";
                        document.getElementById(videoParentId).parentElement.style.height = instance.firstAdHeight + "px";
                    } else {
                        document.getElementById(videoParentId).parentElement.style.transform = "scale(" + scale + ")";
                    }

                    //mark instance with video
                    stic.instances[prod][index].videoContainerId = videoContainerId;
                    stic.instances[prod][index].videoParentId = videoParentId;
                    stic.instances[prod][index].adAreaId = adAreaId;
                    //add these for inplayer events
                    stic.instances[prod][index].behavior = stic.bhr;
                    stic.instances[prod][index].instance = { hook: hook };
                    // hide video container
                    rt.event.fire('incontentHideVideo', { videoContainerId: videoContainerId, videoParentId: videoParentId });
                    //check for video ads and if we can start rendering in video container
                    if (instance.vastTags.length > 0 && bhs.impression.prepareVideoPlayer) {
                        // check if we can start rendering in video container
                        rt.event.fire('renderInContentVideoProducts', { instance: stic.instances[prod][index] });
                        setTimeout( bhs.impression.videoPreLoadBannerDuration * 1000);
                    }
                }
            }
        }
    });
    /**
     * create incontent skins
     */
    var incontentSkins = incontent.$create('skins', {}, null, false);

    /**
     * variant skin
     */
    incontentSkins.$create('variant', {}, { settings: incontent.skinSettings.variant }, true);

    /**
     * define the incontent templates
     */
    incontent.$create('templates', {
        // main container template
        container: function container(instanceIndex, prod, ad) {
            var rt = this.$root,
                st = rt.settings,
                content,
                stic = incontent.settings,
                b = rt.browser,
                bh = stic.behavior.merged,
                skinPath,
                logo,
                ut = rt.utils,
                withLogo = true,
                dm = ut.dom,
                dmel = dm.element,
                webkitTransform,
                scale,
                hp = rt.helpers;

            // todo: this is a hack only to deal with 'nologo' skin instead of 'nologo' theme
            if (bh.skin == 'nologo') {
                bh.skin = 'variant';
                bh.theme = 'nologo';
            }

            //Check that logo is created only once.
            logo = dmel.$([stic.prodId[prod], 'LOGO', instanceIndex].join('_'));
            if (logo) {
                withLogo = false;
            }

            skinPath = rt.helpers.getSkinPath(bh.skin, 'incontent');

            // todo: if white label - use white label settings for logo image and link
            var tpl = '<div id="<%= prodId %>_CONTAINER_<%= instanceIndex %>" class="<%= baseCls %>" style=";position:relative;display:block;text-align:center; padding:0;margin: 0 auto; font-size:0; overflow:hidden;">\    <% if (!ad.nologo && withLogo){ %>\            <% if (!(oldIE || oldFF)){ %>\                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="<%= prodId %>_LOGO_<%= instanceIndex %>" class="<%= baseCls %> IL_LOGO" style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000" x="0px" y="0px"\                        width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184" style="z-index: 1000; enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\                        xml:space="preserve">\                <g id="Logo_PlaceHolder">\                    <% if (!oldLogo){ %>\                        <path id="Circle" style="opacity:0.8; fill:#E2E2E2" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\                            C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z"/>\                    <% } %>\                    <g id="logo">\                        <circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844"/>\                        <path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\                            v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\                            c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\                            c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\                            h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\                            h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z"/>\                    </g>\                </g>\                <g id="Layer_2">\                    <rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1"/>\                    <rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1"/>\                    <rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1"/>\                    <rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1"/>\                    <rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1"/>\                    <rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1"/>\                    <rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1"/>\                    <rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1"/>\                    <rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1"/>\                    <rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1"/>\                    <rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1"/>\                    <rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1"/>\                    <rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1"/>\                    <rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1"/>\                    <rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1"/>\                    <rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1"/>\                    <rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1"/>\                    <rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1"/>\                    <rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1"/>\                    <rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                    <rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                    <rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                    <rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                    <rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                    <rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                    <rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                </g>\                </svg>\            <% } %>\    <% } %>\</div>';
            var html = rt.utils.VeST(tpl, {
                prodId: stic.prodId[prod],
                baseCls: st.baseClass,
                st: st,
                bh: bh,
                ad: ad,
                themeColor: stic.themes.color[bh.theme],
                instanceIndex: instanceIndex,
                oldIE: stic.oldIE,
                oldFF: b.Firefox && b.getVersion(true) < 4,
                skinPath: skinPath,
                withLogo: withLogo,
                logoColor: bh.darkBg ? '#888888' : '#003366',
                oldLogo: prod == 'n' ? true : false,
                sponsoredText: prod == 'n' ? 'Sponsored Content by Infolinks' : ''
            });

            return html;
        },
        // text template
        text: function text(hook, instanceIndex, adIndex, lastAdInInstance, node, prod) {
            var rt = this.$root,
                st = rt.settings,
                ut = rt.utils,
                stic = incontent.settings,
                b = rt.browser,
                data = rt.helpers.getHookData(hook.id);
            var ad = data.ads[hook.currentAdIndex],
                thumbURL = '',
                hasThumb = false,
                bh = stic.behavior.merged,
                attr,
                withLogo = false,
                titleChars = stic.titleChars,
                bhs = rt.settings.behavior,
                descChars = stic.descChars,
                displayURLChars = stic.displayURLChars,
                skinPath,
                noButton = bh.noButton,
                hp = rt.helpers,
                instance = stic.instances[prod][instanceIndex];

            attr = hook.attributes;
            attr.thumbLeft = stic.thumbLeftWithThumb;
            attr.logoMarginTop = stic.logoMarginTop;
            attr.logoMarginLeft = stic.logoMarginLeftWithoutThumb;
            attr.logoMarginTopIE = stic.logoMarginTopIESecondary;

            if (ad.thumbURL != 'no-image') {
                thumbURL = ad.thumbURL;
                if (!ad.showThumbs) {
                    hasThumb = false;
                    attr.thumbLeft = stic.thumbLeftWithOutThumb;
                    attr.btnLeft = stic.btnLeftWithOutThumb;
                } else {
                    hasThumb = true;
                    attr.logoMarginLeft = stic.logoMarginLeftWithThumb;
                    attr.btnLeft = stic.btnLeftWithThumb;
                    titleChars = 20;
                    //In case logo doesn't fit in parent div, move it to bottom left.
                    if (node && node.parentNode && node.parentNode.offsetWidth > 300 && node.parentNode.offsetWidth < 380) {
                        attr.logoMarginTop = stic.logoMarginTopSecondary;
                        attr.logoMarginLeft = stic.logoMarginLeftWithThumbSecondary;
                        attr.logoMarginTopIE = stic.logoMarginTopIE;
                    }
                }
            } else {
                hasThumb = false;
                attr.thumbLeft = stic.thumbLeftWithOutThumb;
                attr.btnLeft = stic.btnLeftWithOutThumb;
            }

            /*ad.title = ut.string.truncateToChar(ad.title, titleChars, ' ', '...');
             ad.text = ut.string.truncateToChar(ad.text, descChars, ' ', '...');
             ad.displayedURL = ut.string.truncate(ad.displayedURL, displayURLChars, '...');*/

            // todo: this is a hack only to deal with 'nologo' skin instead of 'nologo' theme
            if (bh.skin == 'nologo') {
                bh.skin = 'variant';
                bh.theme = 'nologo';
            }

            //Put logo on the last ad on the right.
            //If theme or skin is 'nologo', don't show logo.
            if (lastAdInInstance - 1 == adIndex && (!bh.nologo || bh.nologo == "false")) {
                withLogo = true;
            }
            //If more then three ads appear, move the logo to the bottom.
            if (lastAdInInstance >= 3) {
                attr.paddingTop = 118;
            }

            skinPath = rt.helpers.getSkinPath(bh.skin, 'incontent');

            var tpl;
            if (instance.marker.getAttribute('data-as')) {
                //@TODO change split to * when prod fixes x to *
                // 320x50~728x90 => 320x50
                var nativeSize = instance.marker.getAttribute('data-as').split("~")[0].split("x")[0] + 'x' + instance.marker.getAttribute('data-as').split("~")[0].split("x")[1];
                if (this.htmlStructure.native.hasOwnProperty(nativeSize)) {
                    tpl = this.htmlStructure.native[nativeSize];
                } else {
                    // remove banner ad and log error
                    hook.adContainer.remove();
                    rt.loggly.errorLog(null, "Inarticle size not supported", nativeSize);
                    return;
                }
            } else {
                if (attr.w <= 400) {
                    if (data.ads[0].template == 'video') {
                        tpl = '<style>\	@charset "UTF-8";\\	body {\		margin: 0px;\		padding: 0;\		box-sizing: border-box;\	}\\	/* New Class Added Feb 9 2022 Starts */\	.il-ic-info-ad-choices {\		width: 19px;\		height: 15px;\		padding: 1px 1px 0 0px;\		position: absolute;\		right: 0;\		top: 0;\		z-index: 1000000;\	}\\	/* New Class Added Feb 9 2022 Ends */\\	.il-ic-info-native-wrapper {\		position: absolute;\		font-family: Arial, Helvetica, "sans-serif";\		font-size: 15px;\		line-height: 1.2;\		font-weight: normal;\		background: #ffffff;\		text-align: left;\		-webkit-box-shadow: inset 0px 0px 0px 1px #cccccc;\		-moz-box-shadow: inset 0px 0px 0px 1px #cccccc;\		box-shadow: inset 0px 0px 0px 1px #cccccc;\		overflow: hidden;\	}\\	.il-ic-info-native-headline-blue {\		font-size: 17px;\		font-weight: bold;\		color: #1122cc;\		width: 100%;\		margin: 0px;\		float: left;\		white-space: nowrap;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-copy-grey {\		font-size: 14px;\		color: #666666;\		width: 100%;\		max-height: 50px;\		margin: 8px 0 0 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-link-green {\		font-size: 13px;\		color: #009933;\		width: 100%;\		margin: 8px 0 0 0px;\		float: left;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	/*Image Thumbnail Start*/\	.il-ic-info-native-photo {\		margin: 15px 0 0 0px;\		overflow: hidden;\		float: left;\	}\\	.il-ic-info-thumbnail-img {\		width: 100%;\		height: 100%;\		object-fit: cover;\		object-position: bottom;\	}\\	/*Image Thumbnail Ends*/\\	/*Button Animation Start*/\	.il-ic-info-blue-pulse {\		background-color: #1122cc !important;\		background-image: linear-gradient(90deg, #1122cc, #1122cc);\	}\\	.il-ic-info-banner-native-play-btn {\		height: 60px;\		width: 60px;\		position: absolute;\		text-align: center;\		margin: -30px 0 0 -30px;\		border-radius: 100px;\		z-index: 1;\	}\\	.il-ic-info-banner-native-play-btn i {\		font-size: 30px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 700;\		margin: 0 0 0 6px;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple {\		position: absolute;\		width: 160px;\		height: 160px;\		z-index: -1;\		left: 50%;\		top: 50%;\		opacity: 0;\		margin: -80px 0 0 -80px;\		border-radius: 100px;\		-webkit-animation: il-ic-ripple 3.0s infinite;\		animation: il-ic-ripple 3.0s infinite;\	}\\	@-webkit-keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	@keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(2) {\		animation-delay: .4s;\		-webkit-animation-delay: .4s;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(3) {\		animation-delay: .8s;\		-webkit-animation-delay: .8s;\	}\\	span.il-ic-info-stretch {\		margin: 0 auto !important;\		height: 4px !important;\		align-items: center !important;\		display: inline-block !important;\		-webkit-transform: scale(1, 1.75) !important;\		-moz-transform: scale(1, 1.75) !important;\		-o-transform: scale(1, 1.75) !important;\		transform: scale(1, 1.75) !important;\		font: 30px "Times New Roman", "serif" !important;\		font-weight: 700 !important;\	}\\	.il-ic-info-banner-native-play-btn i::before {\		font-size: 0px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 0;\		margin: 0 0 0 0px;\	}\\	/*Button Animation Ends*/\\	/* 400x300 Styles Start */\	.il-ic-info-native-wrapper.il-ic-native-wrapper-400x300 {\		width: 400px;\		height: 300px;\		padding: 0px;\		top: 0px;\		right: -2px;\	}\\	.il-ic-info-native-headline-blue.il-ic-native-headline-blue-400x300 {\		max-width: 370px;\		margin: 15px 15px 0 15px;\	}\\	.il-ic-info-native-copy-grey.il-ic-native-copy-grey-400x300 {\		max-height: 52px;\		max-width: 370px;\		margin: 8px 15px 0 15px;\	}\\	.il-ic-info-native-link-green.il-ic-native-link-green-400x300 {\		font-size: 14px;\		max-width: 370px;\		margin: 10px 15px 0 15px;\	}\\	.il-ic-info-native-photo.il-ic-native-photo-size-400x300 {\		width: 200px;\		height: 145px;\		margin: 15px 15px 0px 15px;\		position: absolute;\		bottom: 15px;\	}\\	.il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-400x300 {\		bottom: 20%;\		left: 76%;\	}\\	/* 300x400 Styles End */\</style>\	<% if (!ad.nologo && withLogo){ %>\		<% if (oldIE || oldFF){ %>\			<div id="<%= prodId %>_LOGO_<%= insIdx %>" class="<%= baseCls %> IL_LOGO"\				style="z-index: 1000; width:70px; height:60px; margin-left: <%= 7 + attr.logoMarginLeft %>px; margin-top: <%= attr.logoMarginTopIE %>px;position: absolute; cursor:pointer;padding-top:<%= attr.paddingTop %>px; font-size:1px; <% if (oldIE || oldFF){ %>background:url(<%= skinPath %>logo.png) no-repeat scroll 0 0 transparent;<% } %>"\			>\			</div>\		<% } else { %>\			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\				id="<%= prodId %>_LOGO_<%= insIdx %>"\				style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000"\				class="<%= baseCls %> IL_LOGO" x="0px" y="0px" width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184"\				style="z-index: 1000;enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\				xml:space="preserve"\			>\				<g id="Logo_PlaceHolder">\					<path id="Circle" style="opacity:0.8;fill:#E2E2E2;" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\						C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z"\					/>\					<g id="logo">\						<circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844" />\						<path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\								v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\								c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\								c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\								h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\								h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z"\						/>\					</g>\				</g>\				<g id="Layer_2">\					<rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\				</g>\			</svg>\		<% } %>\	<% } %>\	<!-- NATIVE 400x300 STARTS -->\	<div class="il-ic-info-native-wrapper il-ic-native-wrapper-400x300">\		<div class="il-ic-info-native-headline-blue il-ic-native-headline-blue-400x300">\			<%= ad.title %>\		</div>\		<div class="il-ic-info-native-copy-grey il-ic-native-copy-grey-400x300">\			<%= ad.text %>\		</div>\		<div class="il-ic-info-native-link-green il-ic-native-link-green-400x300">\			<%= ad.displayedURL %>\		</div>\\		<div class="il-ic-info-native-photo il-ic-native-photo-size-400x300"><img class="il-ic-info-thumbnail-img"\				src="<%= ad.thumbURL %>" alt=""></div>\\		<div class="il-ic-info-banner-native-play-btn il-ic-pulse-btn-location-400x300 il-ic-info-blue-pulse">\			<i class="glyphicon glyphicon-play whiteText" aria-hidden="true"><span\					class="il-ic-info-stretch">&gt;</span></i>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\		</div>\\	<!-- NATIVE 400x300 ENDS -->\</div>';
                    } else {
                        tpl = '<style>\	@charset "UTF-8";\\	body {\		margin: 0px;\		padding: 0;\		box-sizing: border-box;\	}\\	/* New Class Added Feb 9 2022 Starts */\	.il-ic-info-ad-choices {\		width: 19px;\		height: 15px;\		padding: 1px 1px 0 0px;\		position: absolute;\		right: 0;\		top: 0;\		z-index: 1000000;\	}\\	/* New Class Added Feb 9 2022 Ends */\\	.il-ic-info-native-wrapper {\		position: absolute;\		font-family: Arial, Helvetica, "sans-serif";\		font-size: 15px;\		line-height: 1.2;\		font-weight: normal;\		background: #ffffff;\		text-align: left;\		-webkit-box-shadow: inset 0px 0px 0px 1px #cccccc;\		-moz-box-shadow: inset 0px 0px 0px 1px #cccccc;\		box-shadow: inset 0px 0px 0px 1px #cccccc;\		overflow: hidden;\	}\\	.il-ic-info-native-headline-blue {\		font-size: 17px;\		font-weight: bold;\		color: #1122cc;\		width: 100%;\		margin: 0px;\		float: left;\		white-space: nowrap;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-copy-grey {\		font-size: 14px;\		color: #666666;\		width: 100%;\		max-height: 50px;\		margin: 8px 0 0 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-link-green {\		font-size: 13px;\		color: #009933;\		width: 100%;\		margin: 8px 0 0 0px;\		float: left;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	/*Image Thumbnail Start*/\	.il-ic-info-native-photo {\		margin: 15px 0 0 0px;\		overflow: hidden;\		float: left;\	}\\	.il-ic-info-thumbnail-img {\		width: 100%;\		height: 100%;\		object-fit: cover;\		object-position: bottom;\	}\\	/*Image Thumbnail Ends*/\\	/*Button Animation Start*/\	.il-ic-info-blue-pulse {\		background-color: #1122cc !important;\		background-image: linear-gradient(90deg, #1122cc, #1122cc);\	}\\	.il-ic-info-banner-native-play-btn {\		height: 60px;\		width: 60px;\		position: absolute;\		text-align: center;\		margin: -30px 0 0 -30px;\		border-radius: 100px;\		z-index: 1;\	}\\	.il-ic-info-banner-native-play-btn i {\		font-size: 30px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 700;\		margin: 0 0 0 6px;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple {\		position: absolute;\		width: 160px;\		height: 160px;\		z-index: -1;\		left: 50%;\		top: 50%;\		opacity: 0;\		margin: -80px 0 0 -80px;\		border-radius: 100px;\		-webkit-animation: il-ic-ripple 3.0s infinite;\		animation: il-ic-ripple 3.0s infinite;\	}\\	@-webkit-keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	@keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(2) {\		animation-delay: .4s;\		-webkit-animation-delay: .4s;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(3) {\		animation-delay: .8s;\		-webkit-animation-delay: .8s;\	}\\	span.il-ic-info-stretch {\		margin: 0 auto !important;\		height: 3px !important;\		align-items: center !important;\		display: inline-block !important;\		-webkit-transform: scale(1, 1.75) !important;\		-moz-transform: scale(1, 1.75) !important;\		-o-transform: scale(1, 1.75) !important;\		transform: scale(1, 1.75) !important;\		font: 30px "Times New Roman", "serif" !important;\		font-weight: 700 !important;\	}\\	.il-ic-info-banner-native-play-btn i::before {\		font-size: 0px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 0;\		margin: 0 0 0 0px;\	}\\	/*Button Animation Ends*/\\	/*300x250 Styles Start*/\	.il-ic-info-native-wrapper.il-ic-native-wrapper-300x250 {\		width: 300px;\		height: 250px;\		padding: 15px;\		right: -2px;\		top: 1px;\	}\\	.il-ic-info-native-headline-blue.il-ic-native-headline-blue-300x250 {}\\	.il-ic-info-native-copy-grey.il-ic-native-copy-grey-300x250 {}\\	.il-ic-info-native-link-green.il-ic-native-link-green-300x250 {}\\	.il-ic-info-native-photo.il-ic-native-photo-size-300x250 {\		width: 130px;\		height: 105px;\		position: absolute;\		bottom: 15px;\	}\\	.il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-300x250 {\		top: 75%;\		left: 72%;\	}\\	/*300x250 Styles End*/\</style>\\	<% if (!ad.nologo && withLogo){ %>\		<% if (oldIE || oldFF){ %>\			<div id="<%= prodId %>_LOGO_<%= insIdx %>" class="<%= baseCls %> IL_LOGO"\				style="z-index: 1000; width:70px; height:60px; margin-left: <%= 7 + attr.logoMarginLeft %>px; margin-top: <%= attr.logoMarginTopIE %>px;position: absolute; cursor:pointer;padding-top:<%= attr.paddingTop %>px; font-size:1px; <% if (oldIE || oldFF){ %>background:url(<%= skinPath %>logo.png) no-repeat scroll 0 0 transparent;<% } %>">\			</div>\		<% }else { %>\			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\				id="<%= prodId %>_LOGO_<%= insIdx %>"\				style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000"\				class="<%= baseCls %> IL_LOGO" x="0px" y="0px" width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184"\				style="z-index: 1000;enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\				xml:space="preserve">\				<g id="Logo_PlaceHolder">\					<path id="Circle" style="opacity:0.8;fill:#E2E2E2;" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\								C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z" />\					<g id="logo">\						<circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844" />\						<path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\										v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\										c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\										c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\										h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\										h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z" />\					</g>\				</g>\				<g id="Layer_2">\					<rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\				</g>\			</svg>\		<% } %>\	<% } %>\	<!-- NATIVE 300x250 STARTS -->\	<div class="il-ic-info-native-wrapper il-ic-native-wrapper-300x250">\		<div class="il-ic-info-native-headline-blue il-ic-native-headline-blue-300x250">\			<%= ad.title %>\		</div>\		<div class="il-ic-info-native-copy-grey il-ic-native-copy-grey-300x250">\			<%= ad.text %>\		</div>\		<div class="il-ic-info-native-link-green il-ic-native-link-green-300x250">\			<%= ad.displayedURL %>\		</div>\\		<div class="il-ic-info-native-photo il-ic-native-photo-size-300x250"><img class="il-ic-info-thumbnail-img"\				src="<%= ad.thumbURL %>" alt=""></div>\\		<div\			class="il-ic-info-banner-native-play-btn il-ic-info-banner-native-play-text il-ic-pulse-btn-location-300x250 il-ic-info-blue-pulse">\			<i class="glyphicon glyphicon-play whiteText" aria-hidden="true"><span\					class="il-ic-info-stretch">&gt;</span></i>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\		</div>\</div>';
                    }
                } else {
                    tpl = '<style>\	@charset "UTF-8";\\	body {\		margin: 0px;\		padding: 0;\		box-sizing: border-box;\	}\\	/* New Class Added Feb 9 2022 Starts */\	.il-ic-info-ad-choices {\		width: 19px;\		height: 15px;\		padding: 1px 1px 0 0px;\		position: absolute;\		right: 0;\		top: 0;\		z-index: 1000000;\	}\\	/* New Class Added Feb 9 2022 Ends */\\	.il-ic-info-native-wrapper {\		padding: 0px;\		position: absolute;\		font-family: Arial, Helvetica, "sans-serif";\		font-size: 15px;\		line-height: 1.2;\		font-weight: normal;\		background: #ffffff;\		text-align: left;\		-webkit-box-shadow: inset 0px 0px 0px 1px #cccccc;\		-moz-box-shadow: inset 0px 0px 0px 1px #cccccc;\		box-shadow: inset 0px 0px 0px 1px #cccccc;\		overflow: hidden;\		top: 7px;\	}\\	.il-ic-info-native-headline-blue {\		font-size: 16px;\		font-weight: bold;\		color: #1122cc;\		width: 100%;\		margin: 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-copy-grey {\		font-size: 14px;\		color: #666666;\		width: 100%;\		max-height: 50px;\		margin: 6px 0 0 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-link-green {\		font-size: 12px;\		color: #009933;\		width: 100%;\		margin: 5px 0 0 0px;\		float: left;\		overflow: hidden;\		text-overflow: ellipsis;\		text-align: left;\	}\\	/*Image Thumbnail Start*/\	.il-ic-info-native-photo {\		margin: 10px 15px 10px 10px;\		overflow: hidden;\		float: left;\	}\\	.il-ic-info-thumbnail-img {\		width: 100%;\		height: 100%;\		object-fit: cover;\		object-position: bottom;\	}\\	/*Image Thumbnail Ends*/\\	/*Button Animation Start*/\	.il-ic-info-blue-pulse {\		background-color: #1122cc !important;\		background-image: linear-gradient(90deg, #1122cc, #1122cc);\	}\\	.il-ic-info-banner-native-play-btn {\		height: 60px;\		width: 60px;\		position: absolute;\		text-align: center;\		margin: -30px 0 0 -30px;\		border-radius: 100px;\		z-index: 1;\	}\\	.il-ic-info-banner-native-play-btn i {\		font-size: 30px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 700;\		margin: 0 0 0 6px;\	}\\	.il-ic-info-banner-native-play-btn i::before {\		font-size: 0px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 0;\		margin: 0 0 0 0px;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple {\		position: absolute;\		width: 160px;\		height: 160px;\		z-index: -1;\		left: 50%;\		top: 50%;\		opacity: 0;\		margin: -80px 0 0 -80px;\		border-radius: 100px;\		-webkit-animation: il-ic-ripple 3.0s infinite;\		animation: il-ic-ripple 3.0s infinite;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(2) {\		animation-delay: .4s;\		-webkit-animation-delay: .4s;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(3) {\		animation-delay: .8s;\		-webkit-animation-delay: .8s;\	}\\	span.il-ic-info-stretch {\		margin: 0 auto !important;\		height: 4px !important;\		align-items: center !important;\		display: inline-block !important;\		-webkit-transform: scale(1, 1.75) !important;\		-moz-transform: scale(1, 1.75) !important;\		-o-transform: scale(1, 1.75) !important;\		transform: scale(1, 1.75) !important;\		font: 30px "Times New Roman", "serif" !important;\		font-weight: 700 !important;\	}\\	/*Button Animation Ends*/\\	/* 500x100 Styles Start */\	@media screen and (min-width: 500px) {\		.il-ic-info-native-wrapper.il-ic-native-wrapper-500x100-728x100 {\			width: 100%;\			height: 100px;\			margin-top: -7px;\		}\\		.il-ic-info-native-headline-blue.il-ic-native-headline-blue-500x100-728x100 {\			font-size: 16px;\			width: 48%;\			max-height: 18px;\			margin: 10px 0 0 0px;\		}\\		.il-ic-info-native-copy-grey.il-ic-native-copy-grey-500x100-728x100 {\			font-size: 14px;\			width: 48%;\			max-height: 36px;\			margin: 6px 0 0 0px;\		}\\		.il-ic-info-native-link-green.il-ic-native-link-green-500x100-728x100 {\			width: 48%;\			font-size: 12px;\			margin: 5px 0 0 0px;\		}\\		.il-ic-info-native-photo.il-ic-native-photo-size-500x100-728x100 {\			margin: 10px 10px 10px 10px;\			width: 100px;\			height: 80px;\		}\\		.il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-500x100-728x100 {\			top: 50%;\			right: 7%;\		}\\		@-webkit-keyframes il-ic-ripple {\			0% {\				opacity: 1;\				-webkit-transform: scale(0);\				transform: scale(0);\			}\\			100% {\				opacity: 0;\				-webkit-transform: scale(.8);\				transform: scale(.8);\			}\		}\\		@keyframes il-ic-ripple {\			0% {\				opacity: 1;\				-webkit-transform: scale(0);\				transform: scale(0);\			}\\			100% {\				opacity: 0;\				-webkit-transform: scale(.8);\				transform: scale(.8);\			}\		}\	}\\	/* 500x100 Styles End */\\\\	/* 550x100 Styles Start */\	@media screen and (min-width: 550px) {\		.il-ic-info-native-headline-blue.il-ic-native-headline-blue-500x100-728x100 {\			width: 52%;\		}\\		.il-ic-info-native-copy-grey.il-ic-native-copy-grey-500x100-728x100 {\			width: 52%;\		}\\		.il-ic-info-native-link-green.il-ic-native-link-green-500x100-728x100 {\			width: 52%;\		}\\		.il-ic-info-native-photo.il-ic-native-photo-size-500x100-728x100 {\			width: 110px;\		}\	}\\	/* 550x100 Styles End */\\	/* 600x100 Styles Start */\	@media screen and (min-width: 600px) {\		.il-ic-info-native-headline-blue.il-ic-native-headline-blue-500x100-728x100 {\			width: 58%;\		}\\		.il-ic-info-native-copy-grey.il-ic-native-copy-grey-500x100-728x100 {\			width: 58%;\		}\\		.il-ic-info-native-link-green.il-ic-native-link-green-500x100-728x100 {\			width: 58%;\		}\	}\\	/* 600x100 Styles End */\\	/* 650x100 Styles Start */\	@media screen and (min-width: 675px) {\		.il-ic-info-native-headline-blue.il-ic-native-headline-blue-500x100-728x100 {\			width: 60%;\		}\\		.il-ic-info-native-copy-grey.il-ic-native-copy-grey-500x100-728x100 {\			width: 60%;\		}\\		.il-ic-info-native-link-green.il-ic-native-link-green-500x100-728x100 {\			width: 60%;\		}\	}\\	/* 650x100 Styles End */\\	/* 500x100-728x100 Styles Start */\	@media screen and (min-width: 728px) {\		.il-ic-info-native-wrapper.il-ic-native-wrapper-500x100-728x100 {\			width: 100%;\			height: 100px;\			margin-top: -7px;\		}\\		.il-ic-info-native-headline-blue.il-ic-native-headline-blue-500x100-728x100 {\			font-size: 16px;\			width: 58%;\			max-height: 18px;\			margin: 10px 0 0 0px;\		}\\		.il-ic-info-native-copy-grey.il-ic-native-copy-grey-500x100-728x100 {\			font-size: 14px;\			width: 58%;\			max-height: 50px;\			margin: 6px 0 0 0px;\		}\\		.il-ic-info-native-link-green.il-ic-native-link-green-500x100-728x100 {\			width: 58%;\			font-size: 12px;\			margin: 5px 0 0 0px;\		}\\		.il-ic-info-native-photo.il-ic-native-photo-size-500x100-728x100 {\			margin: 10px 15px 10px 10px;\			width: 120px;\			height: 80px;\		}\\		.il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-500x100-728x100 {\			top: 50%;\			right: 7%;\		}\\		@-webkit-keyframes il-ic-ripple {\			0% {\				opacity: 1;\				-webkit-transform: scale(0);\				transform: scale(0);\			}\\			100% {\				opacity: 0;\				-webkit-transform: scale(1);\				transform: scale(1);\			}\		}\\		@keyframes il-ic-ripple {\			0% {\				opacity: 1;\				-webkit-transform: scale(0);\				transform: scale(0);\			}\\			100% {\				opacity: 0;\				-webkit-transform: scale(1);\				transform: scale(1);\			}\		}\	}\</style>\\	<% if (!ad.nologo && withLogo) { %>\		<% if (oldIE || oldFF){ %>\			<div id="<%= prodId %>_LOGO_<%= insIdx %>" class="<%= baseCls %> IL_LOGO"\				style="z-index: 1000; width:70px; height:60px; margin-left: <%= 7 + attr.logoMarginLeft %>px; margin-top: <%= attr.logoMarginTopIE %>px;position: absolute; cursor:pointer;padding-top:<%= attr.paddingTop %>px; font-size:1px; <% if (oldIE || oldFF){ %>background:url(<%= skinPath %>logo.png) no-repeat scroll 0 0 transparent;<% } %>"\			>\			</div>\		<% } else { %>\			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\				id="<%= prodId %>_LOGO_<%= insIdx %>"\				style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000"\				class="<%= baseCls %> IL_LOGO" x="0px" y="0px" width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184"\				style="z-index: 1000;enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\				xml:space="preserve">\				<g id="Logo_PlaceHolder">\					<path id="Circle" style="opacity:0.8;fill:#E2E2E2;" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\								C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z" />\					<g id="logo">\						<circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844" />\						<path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\										v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\										c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\										c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\										h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\										h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z" />\					</g>\				</g>\				<g id="Layer_2">\					<rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\				</g>\			</svg>\		<% } %>\			<!--</div>-->\	<% } %>\	<!-- NATIVE 500x100-728x100 STARTS -->\	<div class="il-ic-info-native-wrapper il-ic-native-wrapper-500x100-728x100">\\		<div class="il-ic-info-native-photo il-ic-native-photo-size-500x100-728x100"><img\				class="il-ic-info-thumbnail-img" src="<%= ad.thumbURL %>" alt=""></div>\\		<div class="il-ic-info-native-headline-blue il-ic-native-headline-blue-500x100-728x100">\			<%= ad.title %>\		</div>\		<div class="il-ic-info-native-copy-grey il-ic-native-copy-grey-500x100-728x100">\			<%= ad.text %>\		</div>\		<div class="il-ic-info-native-link-green il-ic-native-link-green-500x100-728x100">\			<%= ad.displayedURL %>\		</div>\\		<div\			class="il-ic-info-banner-native-play-btn il-ic-pulse-btn-location-500x100-728x100 il-ic-info-blue-pulse">\			<i class="glyphicon glyphicon-play whiteText" aria-hidden="true"><span\					class="il-ic-info-stretch">&gt;</span></i>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\		</div>\\	<!-- NATIVE 500x100-728x100 ENDS -->\</div>';
                }
            }

            attr.thumbHeight = "70";
            attr.thumbWidth = "90";
            attr.maxThumbWidth = "105";
            attr.lt = "88";
            if (instance.vastTags.length > 0 && bhs.impression.prepareVideoPlayer) {
                attr.thumbHeight = "73";
                attr.thumbWidth = "97";
                attr.bcr = 150;
                attr.bct = 200;
                attr.atmt = 25;
                attr.admt = 50;
                attr.aufs = 13;
                attr.adfs = 15;
            }

            var compiledHtml = rt.utils.VeST(tpl, {
                prodId: stic.prodId[prod],
                baseCls: st.baseClass,
                oldIE: stic.oldIE,
                oldFF: b.Firefox && b.getVersion(true) < 4,
                rt: rt,
                st: st,
                b: b,
                bh: bh,
                cls: st.baseClass,
                hookId: hook.id,
                attr: attr,
                data: data,
                ad: ad,
                withLogo: withLogo,
                thumbURL: thumbURL,
                skinPath: skinPath,
                insIdx: instanceIndex,
                hasThumb: hasThumb,
                noButton: noButton,
                display: adIndex != hook.currentAdIndex ? 'none' : 'block'
            });

            var scale = hp.getCustomScale(ad.instanceWidth, ad.width, ad.width);
            compiledHtml = hp.addUniqeTag(compiledHtml, hook.id, hook.bdc, ad.midx, ad.emd);

            return compiledHtml;
        },

        // inner html content template
        html: function html(hook, ad, adIndex, instanceIndex, prod) {
            var rt = this.$root,
                st = rt.settings,
                content,
                stic = incontent.settings,
                bh = stic.behavior.merged,
                skinPath,
                withLogo = true,
                hp = rt.helpers;

            var content = rt.helpers.parseTokens(hook, null, adIndex);

            if (!instanceIndex) {
                instanceIndex = parseInt(hook.id.replace(/^\D+/g, ''));
            }

            var template = '<div id="<%= prodId %>_AD_AREA_<%= instanceIndex %>" class="<%= baseCls %>" style="cursor:pointer;<%= webkitTransformOrigin%> <%= webkitTransform%>">\    <%= content %>\    <% if (!ad.nologo && sponsoredText){ %>\        <div id="IL_LOGO_SPONSORED_<%= instanceIndex %>" style="bottom:-1px; right:20px; position:absolute; font-family:Arial Regular; font-size:11px; line-height:14px; color:#989898; cursor:default; pointer-events:none;">Sponsored content by Infolinks</div>\    <% } %>\</div>';

            var scale = hp.getCustomScale(ad.instanceWidth, ad.width, ad.width);
            var webkitTransform = '-webkit-transform:scale(' + scale + ') ; transform:scale(' + scale + ') ; -ms-transform:scale(' + scale + ')';

            var html = rt.utils.VeST(template, {
                baseCls: st.baseClass,
                prodId: stic.prodId[prod],
                st: st,
                bh: bh,
                ad: ad,
                themeColor: stic.themes.color[bh.theme],
                instanceIndex: instanceIndex,
                content: content,
                skinPath: skinPath,
                withLogo: withLogo,
                logoColor: bh.darkBg ? '#888888' : '#003366',
                webkitTransformOrigin: st.webkitTransformOrigin,
                webkitTransform: webkitTransform,
                oldLogo: prod == 'n' ? true : false,
                sponsoredText: prod == 'n' ? 'Sponsored Content by Infolinks' : ''
            });

            html = hp.addUniqeTag(html, hook.id, hook.bdc, ad.midx, ad.emd);

            return html;
        },
        // iframe template
        iframe: function iframe(hook, adIndex, ii, prod, ad, isPassback) {
            var rt = this.$root,
                st = rt.settings,
                content = rt.helpers.parseTokens(hook, null, adIndex),
                index,
                mw = content.indexOf(['<!--', st.maxWidth, '-->'].join(''));
            var html = '$$incontent_iframe.html',
                hp = rt.helpers,
                scale,
                webkitTransform;

            scale = hp.getCustomScale(ad.instanceWidth, ad.width, ad.width);
            webkitTransform = '-webkit-transform:scale(' + scale + ') ; transform:scale(' + scale + ') ; -ms-transform:scale(' + scale + ')';

            var data = rt.helpers.getHookData(hook.id);

            if (mw != -1) {
                data.width = '100%';
            }
            if (ad.unfriendlyIframe) {
                //We're creating a new index for the iframe and form when the passback is activated to prevent overriding.
                hook.iframeIndex = hook.currentAdIndex;
                if (isPassback) {
                    hook.iframeIndex = hook.iframeIndex + 'p';
                }

                if (hook.prod == 'n') {
                    //check if content has a sponsered content string and remove it
                    index = content.indexOf('IL_LOGO_SPONSORED');
                    if (index != -1) {
                        //remove IL_LOGO_SPONSORED div
                        content = content.replace(content.substr(content.lastIndexOf('<div', index), content.indexOf('</div>', index) + 6), '');
                    }
                }
                rt.loggly.deprecatedLog({
                    'deprecatedError': {
                        'type': 'incontent',
                        'template': 'incontent_iframe.html'
                    }
                });
                var html = '$$incontent_iframe.html';

                return rt.utils.VeST(html, {
                    rt: rt,
                    version: rt.version,
                    cls: st.baseClass,
                    adIndex: adIndex,
                    data: data,
                    hookId: hook.id,
                    ad: ad,
                    display: adIndex != hook.currentAdIndex ? 'none' : 'block',
                    content: content,
                    webkitTransformOrigin: st.webkitTransformOrigin,
                    webkitTransform: webkitTransform,
                    iframeName: ['ad_frame', hook.id, hook.iframeIndex].join('_'),
                    formCls: 'ad_form',
                    st: st,
                    hook: hook
                });
            } else {
                var html = '<div class="<%= cls %>" style="display:<%= display %>;<%= webkitTransformOrigin%> <%= webkitTransform%>;">\    <div cls="<%= cls %>" style="width:<%= data.width %>px; height:<%= data.height %>px;">\        <iframe name="<%= iframeName %>" width="<%= data.width %>" height="<%= data.height %>" frameborder="0"\                scrolling="no" sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation" data-hookid="<%= hookId %>" style="height: 100% !important; width: 100% !important;">\        </iframe>\    </div>\\</div>';
                return rt.utils.VeST(html, {
                    cls: st.baseClass,
                    hookId: hook.id,
                    data: data,
                    display: adIndex != hook.currentAdIndex ? 'none' : 'block',
                    webkitTransformOrigin: st.webkitTransformOrigin,
                    webkitTransform: webkitTransform,
                    iframeName: ['ad_frame', hook.id, adIndex].join('_'),
                    formCls: 'ad_form'
                });
            }
        },
        // external url template
        external: function external(hook, adIndex) {
            var rt = this.$root,
                st = rt.settings,
                data = rt.helpers.getHookData(hook.id),
                bst = this.$parent.settings,
                ad = rt.helpers.getAdByMidx(data.ads, data.ads[adIndex].midx),
                html = '$$incontent_external.html',
                content = "",
                contentURL = st.blankURL,
                scale,
                webkitTransform,
                hp = rt.helpers;

            scale = hp.getCustomScale(ad.instanceWidth, ad.width, ad.width);
            webkitTransform = '-webkit-transform:scale(' + scale + ') ; transform:scale(' + scale + ') ; -ms-transform:scale(' + scale + ')';

            if (ad.content) {
                content = rt.helpers.parseTokens(hook);
            } else {
                contentURL = rt.helpers.parseTokens(hook, ad.contentUrl);
            }
            rt.loggly.deprecatedLog({
                'deprecatedError': {
                    'type': 'incontent',
                    'template': 'incontent_external.html'
                }
            });
            var html = rt.utils.VeST(html, {
                content: content,
                rt: rt,
                hook: hook,
                cls: st.baseClass,
                data: data,
                ad: ad,
                formCls: 'ad_form',
                webkitTransformOrigin: st.webkitTransformOrigin,
                webkitTransform: webkitTransform,
                display: adIndex != hook.currentAdIndex ? 'none' : 'block',
                contentUrl: contentURL,
                iframeName: "IN_CONTENT_FORM"
            });
            return hp.addUniqeTag(html, hook.id, hook.bdc, ad.midx, ad.emd);
        },
        htmlStructure: {
            container: '<div id="<%= prodId %>_CONTAINER_<%= instanceIndex %>" class="<%= baseCls %>" style=";position:relative;display:block;text-align:center; padding:0;margin: 0 auto; font-size:0; overflow:hidden;">\    <% if (!ad.nologo && withLogo){ %>\            <% if (!(oldIE || oldFF)){ %>\                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="<%= prodId %>_LOGO_<%= instanceIndex %>" class="<%= baseCls %> IL_LOGO" style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000" x="0px" y="0px"\                        width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184" style="z-index: 1000; enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\                        xml:space="preserve">\                <g id="Logo_PlaceHolder">\                    <% if (!oldLogo){ %>\                        <path id="Circle" style="opacity:0.8; fill:#E2E2E2" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\                            C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z"/>\                    <% } %>\                    <g id="logo">\                        <circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844"/>\                        <path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\                            v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\                            c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\                            c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\                            h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\                            h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z"/>\                    </g>\                </g>\                <g id="Layer_2">\                    <rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1"/>\                    <rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1"/>\                    <rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1"/>\                    <rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1"/>\                    <rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1"/>\                    <rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1"/>\                    <rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1"/>\                    <rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1"/>\                    <rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1"/>\                    <rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1"/>\                    <rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1"/>\                    <rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1"/>\                    <rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1"/>\                    <rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1"/>\                    <rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1"/>\                    <rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1"/>\                    <rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1"/>\                    <rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1"/>\                    <rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1"/>\                    <rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                    <rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                    <rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                    <rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                    <rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                    <rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                    <rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1"/>\                </g>\                </svg>\            <% } %>\    <% } %>\</div>',
            external: '$$external_iframe.html',
            friendlyIframe: '<div class="<%= cls %>" style="display:<%= display %>;<%= webkitTransformOrigin%> <%= webkitTransform%>;">\    <div cls="<%= cls %>" style="width:<%= data.width %>px; height:<%= data.height %>px;">\        <iframe name="<%= iframeName %>" width="<%= data.width %>" height="<%= data.height %>" frameborder="0"\                scrolling="no" sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation" data-hookid="<%= hookId %>" style="height: 100% !important; width: 100% !important;">\        </iframe>\    </div>\\</div>',
            html: '$$incontent_html',
            text: '$$incontent_text',
            video: '$$incontent_video',
            native: {
                '160x600': '<style>\	@charset "UTF-8";\\	body {\		margin: 0px;\		padding: 0;\		box-sizing: border-box;\	}\\	/* New Class Added Feb 9 2022 Starts */\	.il-ic-info-ad-choices {\		width: 19px;\		height: 15px;\		padding: 1px 1px 0 0px;\		position: absolute;\		right: 0;\		top: 0;\		z-index: 1000000;\	}\\	/* New Class Added Feb 9 2022 Ends */\\	.il-ic-info-native-wrapper {\		position: absolute;\		font-family: Arial, Helvetica, "sans-serif";\		font-size: 15px;\		line-height: 1.2;\		font-weight: normal;\		background: #ffffff;\		text-align: left;\		-webkit-box-shadow: inset 0px 0px 0px 1px #cccccc;\		-moz-box-shadow: inset 0px 0px 0px 1px #cccccc;\		box-shadow: inset 0px 0px 0px 1px #cccccc;\		overflow: hidden;\	}\\	.il-ic-info-native-headline-blue {\		font-size: 17px;\		font-weight: bold;\		color: #1122cc;\		width: 100%;\		margin: 0px;\		float: left;\		white-space: nowrap;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-copy-grey {\		font-size: 14px;\		color: #666666;\		width: 100%;\		max-height: 50px;\		margin: 8px 0 0 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-link-green {\		font-size: 13px;\		color: #009933;\		width: 100%;\		margin: 8px 0 0 0px;\		float: left;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	/*Image Thumbnail Start*/\	.il-ic-info-native-photo {\		margin: 15px 0 0 0px;\		overflow: hidden;\		float: left;\	}\\	.il-ic-info-thumbnail-img {\		width: 100%;\		height: 100%;\		object-fit: cover;\		object-position: bottom;\	}\\	/*Image Thumbnail Ends*/\\	/*Button Animation Start*/\	.il-ic-info-blue-pulse {\		background-color: #1122cc !important;\		background-image: linear-gradient(90deg, #1122cc, #1122cc);\	}\\	.il-ic-info-banner-native-play-btn {\		height: 60px;\		width: 60px;\		position: absolute;\		text-align: center;\		margin: -30px 0 0 -30px;\		border-radius: 100px;\		z-index: 1;\	}\\	.il-ic-info-banner-native-play-btn i {\		font-size: 30px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 700;\		margin: 0 0 0 6px;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple {\		position: absolute;\		width: 160px;\		height: 160px;\		z-index: -1;\		left: 50%;\		top: 50%;\		opacity: 0;\		margin: -80px 0 0 -80px;\		border-radius: 100px;\		-webkit-animation: il-ic-ripple 3.0s infinite;\		animation: il-ic-ripple 3.0s infinite;\	}\\	@-webkit-keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	@keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(2) {\		animation-delay: .4s;\		-webkit-animation-delay: .4s;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(3) {\		animation-delay: .8s;\		-webkit-animation-delay: .8s;\	}\\	span.il-ic-info-stretch {\		margin: 0 auto !important;\		height: 3px !important;\		align-items: center !important;\		display: inline-block !important;\		-webkit-transform: scale(1, 1.75) !important;\		-moz-transform: scale(1, 1.75) !important;\		-o-transform: scale(1, 1.75) !important;\		transform: scale(1, 1.75) !important;\		font: 30px "Times New Roman", "serif" !important;\		font-weight: 700 !important;\	}\\	.il-ic-info-banner-native-play-btn i::before {\		font-size: 0px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 0;\		margin: 0 0 0 0px;\	}\	/*Button Animation Ends*/\	\	/* 160x600 Styles Start */\	.il-ic-info-native-wrapper.il-ic-native-wrapper-160x600 {\		width: 130px;\		height: 570px;\		padding: 15px;\	}\	.il-ic-info-native-headline-blue.il-ic-native-headline-blue-160x600 {\		max-height: 60px;\		white-space: normal;\	}\	.il-ic-info-native-copy-grey.il-ic-native-copy-grey-160x600 {\		max-height: 98px;\		margin: 12px 0 0 0px;\	}\	.il-ic-info-native-link-green.il-ic-native-link-green-160x600 {\		font-size: 12px;\		margin: 12px 0 0 0px;\	}\	.il-ic-info-native-photo.il-ic-native-photo-size-160x600 {\		width: 130px;\		height: 105px;\	}\	.il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-160x600 {\		top:75%;\		left:50%;\	}\	/* 160x600 Styles End */\	\	</style>\		<% if (!ad.nologo && withLogo){ %>\			<% if (oldIE || oldFF){ %>\				<div id="<%= prodId %>_LOGO_<%= insIdx %>" class="<%= baseCls %> IL_LOGO"\					style="z-index: 1000; width:70px; height:60px; margin-left: <%= 7 + attr.logoMarginLeft %>px; margin-top: <%= attr.logoMarginTopIE %>px;position: absolute; cursor:pointer;padding-top:<%= attr.paddingTop %>px; font-size:1px; <% if (oldIE || oldFF){ %>background:url(<%= skinPath %>logo.png) no-repeat scroll 0 0 transparent;<% } %>">\				</div>\			<% }else { %>\				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\					id="<%= prodId %>_LOGO_<%= insIdx %>"\					style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000"\					class="<%= baseCls %> IL_LOGO" x="0px" y="0px" width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184"\					style="z-index: 1000;enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\					xml:space="preserve">\					<g id="Logo_PlaceHolder">\						<path id="Circle" style="opacity:0.8;fill:#E2E2E2;" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\									C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z" />\						<g id="logo">\							<circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844" />\							<path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\											v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\											c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\											c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\											h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\											h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z" />\						</g>\					</g>\					<g id="Layer_2">\						<rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\						<rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\						<rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\						<rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\						<rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\						<rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\						<rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\						<rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\						<rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\						<rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\						<rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\						<rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\						<rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\						<rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\						<rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\						<rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\						<rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\						<rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\						<rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\						<rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\						<rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\						<rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\						<rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\						<rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\						<rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\						<rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					</g>\				</svg>\			<% } %>\		<% } %>\\	<div class="il-ic-info-native-wrapper il-ic-native-wrapper-160x600">\		<div class="il-ic-info-native-headline-blue il-ic-native-headline-blue-160x600"><%= ad.title %></div>\		<div class="il-ic-info-native-copy-grey il-ic-native-copy-grey-160x600"><%= ad.text %></div>\		<div class="il-ic-info-native-link-green il-ic-native-link-green-160x600"><%= ad.displayedURL %></div>\		\		<div class="il-ic-info-native-photo il-ic-native-photo-size-160x600"><img class="il-ic-info-thumbnail-img" src="<%= ad.thumbURL %>" alt=""></div>\	\		<div\			class="il-ic-info-banner-native-play-btn il-ic-info-banner-native-play-text il-ic-pulse-btn-location-160x600 il-ic-info-blue-pulse">\			<i class="glyphicon glyphicon-play whiteText" aria-hidden="true"><span\					class="il-ic-info-stretch">&gt;</span></i>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\		</div>\</div>',
                '300x250': '<style>\	@charset "UTF-8";\\	body {\		margin: 0px;\		padding: 0;\		box-sizing: border-box;\	}\\	/* New Class Added Feb 9 2022 Starts */\	.il-ic-info-ad-choices {\		width: 19px;\		height: 15px;\		padding: 1px 1px 0 0px;\		position: absolute;\		right: 0;\		top: 0;\		z-index: 1000000;\	}\\	/* New Class Added Feb 9 2022 Ends */\\	.il-ic-info-native-wrapper {\		position: absolute;\		font-family: Arial, Helvetica, "sans-serif";\		font-size: 15px;\		line-height: 1.2;\		font-weight: normal;\		background: #ffffff;\		text-align: left;\		-webkit-box-shadow: inset 0px 0px 0px 1px #cccccc;\		-moz-box-shadow: inset 0px 0px 0px 1px #cccccc;\		box-shadow: inset 0px 0px 0px 1px #cccccc;\		overflow: hidden;\	}\\	.il-ic-info-native-headline-blue {\		font-size: 17px;\		font-weight: bold;\		color: #1122cc;\		width: 100%;\		margin: 0px;\		float: left;\		white-space: nowrap;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-copy-grey {\		font-size: 14px;\		color: #666666;\		width: 100%;\		max-height: 50px;\		margin: 8px 0 0 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-link-green {\		font-size: 13px;\		color: #009933;\		width: 100%;\		margin: 8px 0 0 0px;\		float: left;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	/*Image Thumbnail Start*/\	.il-ic-info-native-photo {\		margin: 15px 0 0 0px;\		overflow: hidden;\		float: left;\	}\\	.il-ic-info-thumbnail-img {\		width: 100%;\		height: 100%;\		object-fit: cover;\		object-position: bottom;\	}\\	/*Image Thumbnail Ends*/\\	/*Button Animation Start*/\	.il-ic-info-blue-pulse {\		background-color: #1122cc !important;\		background-image: linear-gradient(90deg, #1122cc, #1122cc);\	}\\	.il-ic-info-banner-native-play-btn {\		height: 60px;\		width: 60px;\		position: absolute;\		text-align: center;\		margin: -30px 0 0 -30px;\		border-radius: 100px;\		z-index: 1;\	}\\	.il-ic-info-banner-native-play-btn i {\		font-size: 30px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 700;\		margin: 0 0 0 6px;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple {\		position: absolute;\		width: 160px;\		height: 160px;\		z-index: -1;\		left: 50%;\		top: 50%;\		opacity: 0;\		margin: -80px 0 0 -80px;\		border-radius: 100px;\		-webkit-animation: il-ic-ripple 3.0s infinite;\		animation: il-ic-ripple 3.0s infinite;\	}\\	@-webkit-keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	@keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(2) {\		animation-delay: .4s;\		-webkit-animation-delay: .4s;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(3) {\		animation-delay: .8s;\		-webkit-animation-delay: .8s;\	}\\	span.il-ic-info-stretch {\		margin: 0 auto !important;\		height: 3px !important;\		align-items: center !important;\		display: inline-block !important;\		-webkit-transform: scale(1, 1.75) !important;\		-moz-transform: scale(1, 1.75) !important;\		-o-transform: scale(1, 1.75) !important;\		transform: scale(1, 1.75) !important;\		font: 30px "Times New Roman", "serif" !important;\		font-weight: 700 !important;\	}\\	.il-ic-info-banner-native-play-btn i::before {\		font-size: 0px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 0;\		margin: 0 0 0 0px;\	}\\	/*Button Animation Ends*/\\	/*300x250 Styles Start*/\	.il-ic-info-native-wrapper.il-ic-native-wrapper-300x250 {\		width: 300px;\		height: 250px;\		padding: 15px;\		right: -2px;\		top: 1px;\	}\\	.il-ic-info-native-headline-blue.il-ic-native-headline-blue-300x250 {}\\	.il-ic-info-native-copy-grey.il-ic-native-copy-grey-300x250 {}\\	.il-ic-info-native-link-green.il-ic-native-link-green-300x250 {}\\	.il-ic-info-native-photo.il-ic-native-photo-size-300x250 {\		width: 130px;\		height: 105px;\		position: absolute;\		bottom: 15px;\	}\\	.il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-300x250 {\		top: 75%;\		left: 72%;\	}\\	/*300x250 Styles End*/\</style>\\	<% if (!ad.nologo && withLogo){ %>\		<% if (oldIE || oldFF){ %>\			<div id="<%= prodId %>_LOGO_<%= insIdx %>" class="<%= baseCls %> IL_LOGO"\				style="z-index: 1000; width:70px; height:60px; margin-left: <%= 7 + attr.logoMarginLeft %>px; margin-top: <%= attr.logoMarginTopIE %>px;position: absolute; cursor:pointer;padding-top:<%= attr.paddingTop %>px; font-size:1px; <% if (oldIE || oldFF){ %>background:url(<%= skinPath %>logo.png) no-repeat scroll 0 0 transparent;<% } %>">\			</div>\		<% }else { %>\			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\				id="<%= prodId %>_LOGO_<%= insIdx %>"\				style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000"\				class="<%= baseCls %> IL_LOGO" x="0px" y="0px" width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184"\				style="z-index: 1000;enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\				xml:space="preserve">\				<g id="Logo_PlaceHolder">\					<path id="Circle" style="opacity:0.8;fill:#E2E2E2;" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\								C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z" />\					<g id="logo">\						<circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844" />\						<path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\										v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\										c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\										c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\										h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\										h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z" />\					</g>\				</g>\				<g id="Layer_2">\					<rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\				</g>\			</svg>\		<% } %>\	<% } %>\	<!-- NATIVE 300x250 STARTS -->\	<div class="il-ic-info-native-wrapper il-ic-native-wrapper-300x250">\		<div class="il-ic-info-native-headline-blue il-ic-native-headline-blue-300x250">\			<%= ad.title %>\		</div>\		<div class="il-ic-info-native-copy-grey il-ic-native-copy-grey-300x250">\			<%= ad.text %>\		</div>\		<div class="il-ic-info-native-link-green il-ic-native-link-green-300x250">\			<%= ad.displayedURL %>\		</div>\\		<div class="il-ic-info-native-photo il-ic-native-photo-size-300x250"><img class="il-ic-info-thumbnail-img"\				src="<%= ad.thumbURL %>" alt=""></div>\\		<div\			class="il-ic-info-banner-native-play-btn il-ic-info-banner-native-play-text il-ic-pulse-btn-location-300x250 il-ic-info-blue-pulse">\			<i class="glyphicon glyphicon-play whiteText" aria-hidden="true"><span\					class="il-ic-info-stretch">&gt;</span></i>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\		</div>\</div>',
                '300x600': '<style>\	@charset "UTF-8";\\	body {\		margin: 0px;\		padding: 0;\		box-sizing: border-box;\	}\\	/* New Class Added Feb 9 2022 Starts */\	.il-ic-info-ad-choices {\		width: 19px;\		height: 15px;\		padding: 1px 1px 0 0px;\		position: absolute;\		right: 0;\		top: 0;\		z-index: 1000000;\	}\\	/* New Class Added Feb 9 2022 Ends */\\	.il-ic-info-native-wrapper {\		position: absolute;\		font-family: Arial, Helvetica, "sans-serif";\		font-size: 15px;\		line-height: 1.2;\		font-weight: normal;\		background: #ffffff;\		text-align: left;\		-webkit-box-shadow: inset 0px 0px 0px 1px #cccccc;\		-moz-box-shadow: inset 0px 0px 0px 1px #cccccc;\		box-shadow: inset 0px 0px 0px 1px #cccccc;\		overflow: hidden;\	}\\	.il-ic-info-native-headline-blue {\		font-size: 17px;\		font-weight: bold;\		color: #1122cc;\		width: 100%;\		margin: 0px;\		float: left;\		white-space: nowrap;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-copy-grey {\		font-size: 14px;\		color: #666666;\		width: 100%;\		max-height: 50px;\		margin: 8px 0 0 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-link-green {\		font-size: 13px;\		color: #009933;\		width: 100%;\		margin: 8px 0 0 0px;\		float: left;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	/*Image Thumbnail Start*/\	.il-ic-info-native-photo {\		margin: 15px 0 0 0px;\		overflow: hidden;\		float: left;\	}\\	.il-ic-info-thumbnail-img {\		width: 100%;\		height: 100%;\		object-fit: cover;\		object-position: bottom;\	}\\	/*Image Thumbnail Ends*/\\	/*Button Animation Start*/\	.il-ic-info-blue-pulse {\		background-color: #1122cc !important;\		background-image: linear-gradient(90deg, #1122cc, #1122cc);\	}\\	.il-ic-info-banner-native-play-btn {\		height: 60px;\		width: 60px;\		position: absolute;\		text-align: center;\		margin: -30px 0 0 -30px;\		border-radius: 100px;\		z-index: 1;\	}\\	.il-ic-info-banner-native-play-btn i {\		font-size: 30px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 700;\		margin: 0 0 0 6px;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple {\		position: absolute;\		width: 160px;\		height: 160px;\		z-index: -1;\		left: 50%;\		top: 50%;\		opacity: 0;\		margin: -80px 0 0 -80px;\		border-radius: 100px;\		-webkit-animation: il-ic-ripple 3.0s infinite;\		animation: il-ic-ripple 3.0s infinite;\	}\\	@-webkit-keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	@keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(2) {\		animation-delay: .4s;\		-webkit-animation-delay: .4s;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(3) {\		animation-delay: .8s;\		-webkit-animation-delay: .8s;\	}\\	span.il-ic-info-stretch {\		margin: 0 auto !important;\		height: 3px !important;\		align-items: center !important;\		display: inline-block !important;\		-webkit-transform: scale(1, 1.75) !important;\		-moz-transform: scale(1, 1.75) !important;\		-o-transform: scale(1, 1.75) !important;\		transform: scale(1, 1.75) !important;\		font: 30px "Times New Roman", "serif" !important;\		font-weight: 700 !important;\	}\\	.il-ic-info-banner-native-play-btn i::before {\		font-size: 0px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 0;\		margin: 0 0 0 0px;\	}\    /*Button Animation Ends*/\\    /* 300x600 Styles Start */\    .il-ic-info-native-wrapper.il-ic-native-wrapper-300x600 {\        width: 270px;\        height: 570px;\        padding: 20px;\    }\    .il-ic-info-native-headline-blue.il-ic-native-headline-blue-300x600 {\        \    }\    .il-ic-info-native-copy-grey.il-ic-native-copy-grey-300x600 {\        max-height: 66px;\        margin: 8px 0 0 0px;\    }\    .il-ic-info-native-link-green.il-ic-native-link-green-300x600 {\        font-size: 14px;\        margin: 10px 0 0 0px;\    }\    .il-ic-info-native-photo.il-ic-native-photo-size-300x600 {\        width: 260px;\        height: 210px;\    }\    .il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-300x600 {\        top:80%;\        left:50%;\    }\    /* 300x600 Styles End */\\\</style>\    <% if (!ad.nologo && withLogo){ %>\        <% if (oldIE || oldFF){ %>\            <div id="<%= prodId %>_LOGO_<%= insIdx %>" class="<%= baseCls %> IL_LOGO"\                style="z-index: 1000; width:70px; height:60px; margin-left: <%= 7 + attr.logoMarginLeft %>px; margin-top: <%= attr.logoMarginTopIE %>px;position: absolute; cursor:pointer;padding-top:<%= attr.paddingTop %>px; font-size:1px; <% if (oldIE || oldFF){ %>background:url(<%= skinPath %>logo.png) no-repeat scroll 0 0 transparent;<% } %>">\            </div>\        <% }else { %>\            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\                id="<%= prodId %>_LOGO_<%= insIdx %>"\                style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000"\                class="<%= baseCls %> IL_LOGO" x="0px" y="0px" width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184"\                style="z-index: 1000;enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\                xml:space="preserve">\                <g id="Logo_PlaceHolder">\                    <path id="Circle" style="opacity:0.8;fill:#E2E2E2;" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\                                C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z" />\                    <g id="logo">\                        <circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844" />\                        <path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\                                        v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\                                        c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\                                        c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\                                        h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\                                        h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z" />\                    </g>\                </g>\                <g id="Layer_2">\                    <rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\                    <rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\                    <rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\                    <rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\                    <rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\                    <rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\                    <rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\                    <rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\                    <rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                </g>\            </svg>\        <% } %>\    <% } %>\    <div class="il-ic-info-native-wrapper il-ic-native-wrapper-300x600">\        <div class="il-ic-info-native-headline-blue il-ic-native-headline-blue-300x600"><%= ad.title %></div>\        <div class="il-ic-info-native-copy-grey il-ic-copy-grey-300x600"><%= ad.text %></div>\        <div class="il-ic-info-native-link-green il-ic-native-link-green-300x600"><%= ad.displayedURL %></div>\\        <div class="il-ic-info-native-photo il-ic-native-photo-size-300x600"><img class="il-ic-info-thumbnail-img" src="<%= ad.thumbURL %>" alt=""></div>\        \        <div class="il-ic-info-banner-native-play-btn il-ic-pulse-btn-location-300x600 il-ic-info-blue-pulse">\            <i class="glyphicon glyphicon-play whiteText" aria-hidden="true"><span class="il-ic-info-stretch">&gt;</span></i>\            <span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\            <span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\            <span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\        </div>\</div>',
                '320x50': '<style>\	@charset "UTF-8";\\	body {\		margin: 0px;\		padding: 0;\		box-sizing: border-box;\	}\\	/* New Class Added Feb 9 2022 Starts */\	.il-ic-info-ad-choices {\		width: 19px;\		height: 15px;\		padding: 1px 1px 0 0px;\		position: absolute;\		right: 0;\		top: 0;\		z-index: 1000000;\	}\\	/* New Class Added Feb 9 2022 Ends */\\	.il-ic-info-native-wrapper {\		position: absolute;\		font-family: Arial, Helvetica, "sans-serif";\		font-size: 15px;\		line-height: 1.2;\		font-weight: normal;\		background: #ffffff;\		text-align: left;\		-webkit-box-shadow: inset 0px 0px 0px 1px #cccccc;\		-moz-box-shadow: inset 0px 0px 0px 1px #cccccc;\		box-shadow: inset 0px 0px 0px 1px #cccccc;\		overflow: hidden;\	}\\	.il-ic-info-native-headline-blue {\		font-size: 17px;\		font-weight: bold;\		color: #1122cc;\		width: 100%;\		margin: 0px;\		float: left;\		white-space: nowrap;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-copy-grey {\		font-size: 14px;\		color: #666666;\		width: 100%;\		max-height: 50px;\		margin: 8px 0 0 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-link-green {\		font-size: 13px;\		color: #009933;\		width: 100%;\		margin: 8px 0 0 0px;\		float: left;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	/*Image Thumbnail Start*/\	.il-ic-info-native-photo {\		margin: 15px 0 0 0px;\		overflow: hidden;\		float: left;\	}\\	.il-ic-info-thumbnail-img {\		width: 100%;\		height: 100%;\		object-fit: cover;\		object-position: bottom;\	}\\	/*Image Thumbnail Ends*/\\	/*Button Animation Start*/\	.il-ic-info-blue-pulse {\		background-color: #1122cc !important;\		background-image: linear-gradient(90deg, #1122cc, #1122cc);\	}\\	.il-ic-info-banner-native-play-btn {\		height: 60px;\		width: 60px;\		position: absolute;\		text-align: center;\		margin: -30px 0 0 -30px;\		border-radius: 100px;\		z-index: 1;\	}\\	.il-ic-info-banner-native-play-btn i {\		font-size: 30px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 700;\		margin: 0 0 0 6px;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple {\		position: absolute;\		width: 160px;\		height: 160px;\		z-index: -1;\		left: 50%;\		top: 50%;\		opacity: 0;\		margin: -80px 0 0 -80px;\		border-radius: 100px;\		-webkit-animation: il-ic-ripple 3.0s infinite;\		animation: il-ic-ripple 3.0s infinite;\	}\\	@-webkit-keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	@keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(2) {\		animation-delay: .4s;\		-webkit-animation-delay: .4s;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(3) {\		animation-delay: .8s;\		-webkit-animation-delay: .8s;\	}\\	span.il-ic-info-stretch-320x50 {\		margin: 0 auto !important;\		height: 3px !important;\		align-items: center !important;\		display: inline-block !important;\		-webkit-transform: scale(1, 1.75) !important;\		-moz-transform: scale(1, 1.75) !important;\		-o-transform: scale(1, 1.75) !important;\		transform: scale(1, 1.75) !important;\		font: 12px "Times New Roman", "serif" !important;\		font-weight: 700 !important;\	}\\	.il-ic-info-banner-native-play-btn i::before {\		font-size: 0px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 0;\		margin: 0 0 0 0px;\	}\\	/*Button Animation Ends*/\\   /* 320x50 Styles Start */\   .il-ic-info-mobile-leader-half {\        float: left;\        width:50%;\    }\    .il-ic-info-native-wrapper.il-ic-native-wrapper-320x50 {\        width: 320px;\        height: 50px;\		box-sizing: border-box;\        padding: 5px 10px 5px 10px;\    }\    .il-ic-info-native-headline-blue.il-ic-native-headline-blue-320x50 {\        font-size: 12px;\        max-height: 14px;\        white-space: normal;\    }\    .il-ic-info-native-copy-grey.il-ic-native-copy-grey-320x50 {\        font-size: 11px;\        max-height: 26px;\        margin: 0px 0 0 0px;\        line-height: 12px;\        white-space: nowrap;\        overflow: hidden;\        text-overflow: ellipsis;\    }\    .il-ic-info-native-link-green.il-ic-native-link-green-320x50 {\        font-size: 12px;\        margin: 5px 0 0 0px;\        text-align: left;\    }\    .il-ic-info-native-photo.il-ic-native-photo-size-320x50 {\        margin: 0 10px 0 0px;\        width: 60px;\        height: 40px;\        float: left;\    }\    .il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-320x50 {\        top:50%;\        right:8%;\    }\    .il-ic-info-banner-native-play-btn.il-ic-info-banner-native-play-btn-320x50{\        height:40px;\        width:40px;\        margin:-20px 0 0 -20px;\    }\    .il-ic-info-banner-native-play-btn.il-ic-info-banner-native-play-btn-320x50 i{\        /*line-height:26px;*/\        font-size:22px;\        margin: 0px;\    }\    span.il-ic-info-stretch.il-ic-info-stretch-320x50 {\    margin: 8px;\    }\    /* 320x50 Styles End */\\\</style>\\    <% if (!ad.nologo && withLogo){ %>\        <% if (oldIE || oldFF){ %>\            <div id="<%= prodId %>_LOGO_<%= insIdx %>" class="<%= baseCls %> IL_LOGO"\                style="z-index: 1000; width:70px; height:60px; margin-left: <%= 7 + attr.logoMarginLeft %>px; margin-top: <%= attr.logoMarginTopIE %>px;position: absolute; cursor:pointer;padding-top:<%= attr.paddingTop %>px; font-size:1px; <% if (oldIE || oldFF){ %>background:url(<%= skinPath %>logo.png) no-repeat scroll 0 0 transparent;<% } %>">\            </div>\        <% }else { %>\            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\                id="<%= prodId %>_LOGO_<%= insIdx %>"\                style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000"\                class="<%= baseCls %> IL_LOGO" x="0px" y="0px" width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184"\                style="z-index: 1000;enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\                xml:space="preserve">\                <g id="Logo_PlaceHolder">\                    <path id="Circle" style="opacity:0.8;fill:#E2E2E2;" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\                                C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z" />\                    <g id="logo">\                        <circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844" />\                        <path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\                                        v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\                                        c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\                                        c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\                                        h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\                                        h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z" />\                    </g>\                </g>\                <g id="Layer_2">\                    <rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\                    <rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\                    <rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\                    <rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\                    <rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\                    <rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\                    <rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\                    <rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\                    <rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                </g>\            </svg>\        <% } %>\    <% } %>\\    <div class="il-ic-info-native-wrapper il-ic-native-wrapper-320x50">\\        <div class="il-ic-info-native-photo il-ic-native-photo-size-320x50"><img class="il-ic-info-thumbnail-img" src="<%= ad.thumbURL %>" alt=""></div>\\        <div class="il-ic-info-mobile-leader-half">\            <div class="il-ic-info-native-headline-blue il-ic-native-headline-blue-320x50"><%= ad.title %></div>\            <div class="il-ic-info-native-copy-grey il-ic-native-copy-grey-320x50"><%= ad.text %></div>\            <div class="il-ic-info-native-link-green il-ic-native-link-green-320x50"><%= ad.displayedURL %></div>\        </div>\        \        <div class="il-ic-info-banner-native-play-btn il-ic-info-banner-native-play-btn-320x50 il-ic-pulse-btn-location-320x50 il-ic-info-blue-pulse">\            <i class="glyphicon glyphicon-play whiteText" aria-hidden="true"><span class="il-ic-info-stretch-320x50">&gt;</span></i>\            <span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\            <span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\            <span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\        </div>\</div>',
                '320x100': '<style>\    @charset "UTF-8";\    body {\        margin: 0px;\        padding: 0;\        box-sizing: border-box;\    }\\    .il-ic-info-native-wrapper {\        padding: 0px;\		position: absolute;\		font-family: Arial, Helvetica, "sans-serif";\		font-size: 15px;\		line-height: 1.2;\		font-weight: normal;\		background: #ffffff;\		text-align: left;\		-webkit-box-shadow: inset 0px 0px 0px 1px #cccccc;\		-moz-box-shadow: inset 0px 0px 0px 1px #cccccc;\		box-shadow: inset 0px 0px 0px 1px #cccccc;\		overflow: hidden;\		top: 7px;\    }\    .il-ic-info-native-headline-blue {\        font-size: 16px;\		font-weight: bold;\		color: #1122cc;\		width: 100%;\		margin: 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\    }\    .il-ic-info-native-copy-grey {\        font-size: 14px;\		color: #666666;\		width: 100%;\		max-height: 50px;\		margin: 6px 0 0 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\    }\    .il-ic-info-native-link-green {\        font-size: 12px;\		color: #009933;\		width: 100%;\		margin: 5px 0 0 0px;\		float: left;\		overflow: hidden;\		text-overflow: ellipsis;\		text-align: left;\    }\\    /*Image Thumbnail Start*/\    .il-ic-info-native-photo {\        margin: 10px 15px 10px 10px;\		overflow: hidden;\		float: left;\		width: 100px;\		height: 80px;\    }\    .il-ic-info-thumbnail-img {\        width: 100%;\		height: 100%;\		object-fit: cover;\		object-position: bottom;\    }\    /*Image Thumbnail Ends*/\\    /*Button Animation Start*/\    .il-ic-info-blue-pulse {\        background-color: #1122cc!important;\        background-image: linear-gradient(90deg, #1122cc, #1122cc);\    }\    .il-ic-info-banner-native-play-btn{\        height: 60px;\		width: 60px;\		position: absolute;\		text-align: center;\		margin: -30px 0 0 -30px;\		border-radius: 100px;\		z-index: 1;\    }\    .il-ic-info-banner-native-play-btn i{\        font-size: 30px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 700;\		margin: 0 0 0 6px;\    }\    .il-ic-info-banner-native-play-btn .info-ripple{\        position:absolute;\        width:160px;\        height:160px;\        z-index:-1;\        left:50%;\        top:50%;\        opacity:0;\        margin:-80px 0 0 -80px;\        border-radius:100px;\        -webkit-animation:il-ic-ripple 3.0s infinite;\        animation:il-ic-ripple 3.0s infinite;\    }\    @-webkit-keyframes il-ic-ripple{\        0%{\            opacity:1;\            -webkit-transform:scale(0);\            transform:scale(0);\        }\        100%{\            opacity:0;\            -webkit-transform:scale(1);\            transform:scale(1);\        }\    }\    @keyframes ripple{\        0%{\            opacity:1;\            -webkit-transform:scale(0);\            transform:scale(0);\        }\        100%{\            opacity:0;\            -webkit-transform:scale(1);\            transform:scale(1);\        }\    }\    .il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(2){\        animation-delay:.4s;\        -webkit-animation-delay:.4s;\    }\    .il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(3){\        animation-delay:.8s;\        -webkit-animation-delay:.8s;\    }\    span.il-ic-info-stretch {\        margin: 0 auto !important;\		height: 4px !important;\		align-items: center !important;\		display: inline-block !important;\		-webkit-transform: scale(1, 1.75) !important;\		-moz-transform: scale(1, 1.75) !important;\		-o-transform: scale(1, 1.75) !important;\		transform: scale(1, 1.75) !important;\		font: 30px "Times New Roman", "serif" !important;\		font-weight: 700 !important;\    }\    /*Button Animation Ends*/\\   /* 320x100 Styles Start */\   .il-ic-info-mobile-leader-half {\        float: left;\        width:50%;\    }\    .il-ic-info-native-wrapper.il-ic-native-wrapper-320x100 {\        width: 100%;\        height: 100px;\        margin-top: -7px;\    }\    .il-ic-info-native-headline-blue.il-ic-native-headline-blue-320x100 {\        font-size: 12px;\        width: 75%;\        max-height: 30px;\        margin: 7px 0 0 0px;\    }\    .il-ic-info-native-copy-grey.il-ic-native-copy-grey-320x100 {\        font-size: 12px;\        width: 75%;\        max-height: 40px;\        margin: 3px 0 0 0px;\    }\    .il-ic-info-native-link-green.il-ic-native-link-green-320x100 {\        width: 75%;\		font-size: 10px;\		margin: 3px 0 0 0px;\    }\    .il-ic-info-native-photo.vnative-photo-size-320x100 {\        margin: 10px 10px 10px 10px;\        width: 100px;\        height: 80px;\    }\    .il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-320x100 {\        top:50%;\        right:4%;\    }\    .il-ic-info-banner-native-play-btn.il-ic-info-banner-native-play-btn-320x100 i{\        /*line-height:26px;*/\        font-size:22px;\        margin: 0px;\    }\    span.il-ic-info-stretch.il-ic-info-stretch-320x100 {\    margin: 8px;\    }\    /* 320x100 Styles End */\\\</style>\<% if (!ad.nologo && withLogo){ %>\	<% if (oldIE || oldFF){ %>\		<div id="<%= prodId %>_LOGO_<%= insIdx %>" class="<%= baseCls %> IL_LOGO"\			style="z-index: 1000; width:70px; height:60px; margin-left: <%= 7 + attr.logoMarginLeft %>px; margin-top: <%= attr.logoMarginTopIE %>px;position: absolute; cursor:pointer;padding-top:<%= attr.paddingTop %>px; font-size:1px; <% if (oldIE || oldFF){ %>background:url(<%= skinPath %>logo.png) no-repeat scroll 0 0 transparent;<% } %>">\		</div>\	<% }else { %>\		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\			id="<%= prodId %>_LOGO_<%= insIdx %>"\			style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000"\			class="<%= baseCls %> IL_LOGO" x="0px" y="0px" width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184"\			style="z-index: 1000;enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\			xml:space="preserve">\			<g id="Logo_PlaceHolder">\				<path id="Circle" style="opacity:0.8;fill:#E2E2E2;" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\							C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z" />\				<g id="logo">\					<circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844" />\					<path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\									v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\									c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\									c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\									h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\									h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z" />\				</g>\			</g>\			<g id="Layer_2">\				<rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\				<rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\				<rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\				<rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\				<rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\				<rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\				<rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\				<rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\				<rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\				<rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\				<rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\				<rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\				<rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\				<rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\				<rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\				<rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\				<rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\				<rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\				<rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\				<rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\				<rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\				<rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\				<rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\				<rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\				<rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\				<rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\			</g>\		</svg>\	<% } %>\<% } %>\<div class="il-ic-info-native-wrapper il-ic-native-wrapper-320x100">\\    <div class="il-ic-info-native-photo il-ic-native-photo-size-320x100"><img class="il-ic-info-thumbnail-img" src="<%= ad.thumbURL %>" alt=""></div>\\    <div class="il-ic-info-mobile-leader-half">\        <div class="il-ic-info-native-headline-blue il-ic-native-headline-blue-320x100"><%= ad.title %></div>\        <div class="il-ic-info-native-copy-grey il-ic-native-copy-grey-320x100"><%= ad.text %></div>\		<div class="il-ic-info-native-link-green il-ic-native-link-green-320x100"><%= ad.displayedURL %></div>\    </div>\    \    <div class="il-ic-info-banner-native-play-btn il-ic-nfo-banner-native-play-btn-320x100 il-ic-pulse-btn-location-320x100 il-ic-info-blue-pulse">\        <i class="glyphicon glyphicon-play whiteText" aria-hidden="true"><span class="il-ic-info-stretch il-ic-info-stretch-320x100">&gt;</span></i>\        <span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\        <span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\        <span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\    </div>\    \</div>',
                '400x300': '<style>\	@charset "UTF-8";\\	body {\		margin: 0px;\		padding: 0;\		box-sizing: border-box;\	}\\	/* New Class Added Feb 9 2022 Starts */\	.il-ic-info-ad-choices {\		width: 19px;\		height: 15px;\		padding: 1px 1px 0 0px;\		position: absolute;\		right: 0;\		top: 0;\		z-index: 1000000;\	}\\	/* New Class Added Feb 9 2022 Ends */\\	.il-ic-info-native-wrapper {\		position: absolute;\		font-family: Arial, Helvetica, "sans-serif";\		font-size: 15px;\		line-height: 1.2;\		font-weight: normal;\		background: #ffffff;\		text-align: left;\		-webkit-box-shadow: inset 0px 0px 0px 1px #cccccc;\		-moz-box-shadow: inset 0px 0px 0px 1px #cccccc;\		box-shadow: inset 0px 0px 0px 1px #cccccc;\		overflow: hidden;\	}\\	.il-ic-info-native-headline-blue {\		font-size: 17px;\		font-weight: bold;\		color: #1122cc;\		width: 100%;\		margin: 0px;\		float: left;\		white-space: nowrap;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-copy-grey {\		font-size: 14px;\		color: #666666;\		width: 100%;\		max-height: 50px;\		margin: 8px 0 0 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-link-green {\		font-size: 13px;\		color: #009933;\		width: 100%;\		margin: 8px 0 0 0px;\		float: left;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	/*Image Thumbnail Start*/\	.il-ic-info-native-photo {\		margin: 15px 0 0 0px;\		overflow: hidden;\		float: left;\	}\\	.il-ic-info-thumbnail-img {\		width: 100%;\		height: 100%;\		object-fit: cover;\		object-position: bottom;\	}\\	/*Image Thumbnail Ends*/\\	/*Button Animation Start*/\	.il-ic-info-blue-pulse {\		background-color: #1122cc !important;\		background-image: linear-gradient(90deg, #1122cc, #1122cc);\	}\\	.il-ic-info-banner-native-play-btn {\		height: 60px;\		width: 60px;\		position: absolute;\		text-align: center;\		margin: -30px 0 0 -30px;\		border-radius: 100px;\		z-index: 1;\	}\\	.il-ic-info-banner-native-play-btn i {\		font-size: 30px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 700;\		margin: 0 0 0 6px;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple {\		position: absolute;\		width: 160px;\		height: 160px;\		z-index: -1;\		left: 50%;\		top: 50%;\		opacity: 0;\		margin: -80px 0 0 -80px;\		border-radius: 100px;\		-webkit-animation: il-ic-ripple 3.0s infinite;\		animation: il-ic-ripple 3.0s infinite;\	}\\	@-webkit-keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	@keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(2) {\		animation-delay: .4s;\		-webkit-animation-delay: .4s;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(3) {\		animation-delay: .8s;\		-webkit-animation-delay: .8s;\	}\\	span.il-ic-info-stretch {\		margin: 0 auto !important;\		height: 4px !important;\		align-items: center !important;\		display: inline-block !important;\		-webkit-transform: scale(1, 1.75) !important;\		-moz-transform: scale(1, 1.75) !important;\		-o-transform: scale(1, 1.75) !important;\		transform: scale(1, 1.75) !important;\		font: 30px "Times New Roman", "serif" !important;\		font-weight: 700 !important;\	}\\	.il-ic-info-banner-native-play-btn i::before {\		font-size: 0px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 0;\		margin: 0 0 0 0px;\	}\\	/*Button Animation Ends*/\\	/* 400x300 Styles Start */\	.il-ic-info-native-wrapper.il-ic-native-wrapper-400x300 {\		width: 400px;\		height: 300px;\		padding: 0px;\		top: 0px;\		right: -2px;\	}\\	.il-ic-info-native-headline-blue.il-ic-native-headline-blue-400x300 {\		max-width: 370px;\		margin: 15px 15px 0 15px;\	}\\	.il-ic-info-native-copy-grey.il-ic-native-copy-grey-400x300 {\		max-height: 52px;\		max-width: 370px;\		margin: 8px 15px 0 15px;\	}\\	.il-ic-info-native-link-green.il-ic-native-link-green-400x300 {\		font-size: 14px;\		max-width: 370px;\		margin: 10px 15px 0 15px;\	}\\	.il-ic-info-native-photo.il-ic-native-photo-size-400x300 {\		width: 200px;\		height: 145px;\		margin: 15px 15px 0px 15px;\		position: absolute;\		bottom: 15px;\	}\\	.il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-400x300 {\		bottom: 20%;\		left: 76%;\	}\\	/* 300x400 Styles End */\</style>\	<% if (!ad.nologo && withLogo){ %>\		<% if (oldIE || oldFF){ %>\			<div id="<%= prodId %>_LOGO_<%= insIdx %>" class="<%= baseCls %> IL_LOGO"\				style="z-index: 1000; width:70px; height:60px; margin-left: <%= 7 + attr.logoMarginLeft %>px; margin-top: <%= attr.logoMarginTopIE %>px;position: absolute; cursor:pointer;padding-top:<%= attr.paddingTop %>px; font-size:1px; <% if (oldIE || oldFF){ %>background:url(<%= skinPath %>logo.png) no-repeat scroll 0 0 transparent;<% } %>"\			>\			</div>\		<% } else { %>\			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\				id="<%= prodId %>_LOGO_<%= insIdx %>"\				style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000"\				class="<%= baseCls %> IL_LOGO" x="0px" y="0px" width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184"\				style="z-index: 1000;enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\				xml:space="preserve"\			>\				<g id="Logo_PlaceHolder">\					<path id="Circle" style="opacity:0.8;fill:#E2E2E2;" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\						C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z"\					/>\					<g id="logo">\						<circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844" />\						<path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\								v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\								c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\								c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\								h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\								h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z"\						/>\					</g>\				</g>\				<g id="Layer_2">\					<rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\				</g>\			</svg>\		<% } %>\	<% } %>\	<!-- NATIVE 400x300 STARTS -->\	<div class="il-ic-info-native-wrapper il-ic-native-wrapper-400x300">\		<div class="il-ic-info-native-headline-blue il-ic-native-headline-blue-400x300">\			<%= ad.title %>\		</div>\		<div class="il-ic-info-native-copy-grey il-ic-native-copy-grey-400x300">\			<%= ad.text %>\		</div>\		<div class="il-ic-info-native-link-green il-ic-native-link-green-400x300">\			<%= ad.displayedURL %>\		</div>\\		<div class="il-ic-info-native-photo il-ic-native-photo-size-400x300"><img class="il-ic-info-thumbnail-img"\				src="<%= ad.thumbURL %>" alt=""></div>\\		<div class="il-ic-info-banner-native-play-btn il-ic-pulse-btn-location-400x300 il-ic-info-blue-pulse">\			<i class="glyphicon glyphicon-play whiteText" aria-hidden="true"><span\					class="il-ic-info-stretch">&gt;</span></i>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\		</div>\\	<!-- NATIVE 400x300 ENDS -->\</div>',
                '728x90': '<style>\	@charset "UTF-8";\\	body {\		margin: 0px;\		padding: 0;\		box-sizing: border-box;\	}\\	/* New Class Added Feb 9 2022 Starts */\	.il-ic-info-ad-choices {\		width: 19px;\		height: 15px;\		padding: 1px 1px 0 0px;\		position: absolute;\		right: 0;\		top: 0;\		z-index: 1000000;\	}\\	/* New Class Added Feb 9 2022 Ends */\\	.il-ic-info-native-wrapper {\		position: absolute;\		font-family: Arial, Helvetica, "sans-serif";\		font-size: 15px;\		line-height: 1.2;\		font-weight: normal;\		background: #ffffff;\		text-align: left;\		-webkit-box-shadow: inset 0px 0px 0px 1px #cccccc;\		-moz-box-shadow: inset 0px 0px 0px 1px #cccccc;\		box-shadow: inset 0px 0px 0px 1px #cccccc;\		overflow: hidden;\	}\\	.il-ic-info-native-headline-blue {\		font-size: 17px;\		font-weight: bold;\		color: #1122cc;\		width: 100%;\		margin: 0px;\		float: left;\		white-space: nowrap;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-copy-grey {\		font-size: 14px;\		color: #666666;\		width: 100%;\		max-height: 50px;\		margin: 8px 0 0 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-link-green {\		font-size: 13px;\		color: #009933;\		width: 100%;\		margin: 8px 0 0 0px;\		float: left;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	/*Image Thumbnail Start*/\	.il-ic-info-native-photo {\		margin: 15px 0 0 0px;\		overflow: hidden;\		float: left;\	}\\	.il-ic-info-thumbnail-img {\		width: 100%;\		height: 100%;\		object-fit: cover;\		object-position: bottom;\	}\\	/*Image Thumbnail Ends*/\\	/*Button Animation Start*/\	.il-ic-info-blue-pulse {\		background-color: #1122cc !important;\		background-image: linear-gradient(90deg, #1122cc, #1122cc);\	}\\	.il-ic-info-banner-native-play-btn {\		height: 60px;\		width: 60px;\		position: absolute;\		text-align: center;\		margin: -30px 0 0 -30px;\		border-radius: 100px;\		z-index: 1;\	}\\	.il-ic-info-banner-native-play-btn i {\		font-size: 30px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 700;\		margin: 0 0 0 6px;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple {\		position: absolute;\		width: 160px;\		height: 160px;\		z-index: -1;\		left: 50%;\		top: 50%;\		opacity: 0;\		margin: -80px 0 0 -80px;\		border-radius: 100px;\		-webkit-animation: il-ic-ripple 3.0s infinite;\		animation: il-ic-ripple 3.0s infinite;\	}\\	@-webkit-keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	@keyframes il-ic-ripple {\		0% {\			opacity: 1;\			-webkit-transform: scale(0);\			transform: scale(0);\		}\\		100% {\			opacity: 0;\			-webkit-transform: scale(.9);\			transform: scale(.9);\		}\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(2) {\		animation-delay: .4s;\		-webkit-animation-delay: .4s;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(3) {\		animation-delay: .8s;\		-webkit-animation-delay: .8s;\	}\\	span.il-ic-info-stretch {\		margin: 0 auto !important;\		height: 3px !important;\		align-items: center !important;\		display: inline-block !important;\		-webkit-transform: scale(1, 1.75) !important;\		-moz-transform: scale(1, 1.75) !important;\		-o-transform: scale(1, 1.75) !important;\		transform: scale(1, 1.75) !important;\		font: 30px "Times New Roman", "serif" !important;\		font-weight: 700 !important;\	}\\	.il-ic-info-banner-native-play-btn i::before {\		font-size: 0px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 0;\		margin: 0 0 0 0px;\	}\\	/*Button Animation Ends*/\\    /* 728x90 Styles Start */\    .il-ic-info-native-wrapper.il-ic-native-wrapper-728x90 {\        width: 698px;\        height: 70px;\        padding: 10px 15px 10px 15px;\    }\    .il-ic-info-native-headline-blue.il-ic-native-headline-blue-728x90 {\        font-size: 16px;\        width: 60%;\        max-height: 18px;\        white-space: normal;\    }\    .il-ic-info-native-copy-grey.il-ic-native-copy-grey-728x90 {\        width: 60%;\        max-height: 32px;\        margin: 4px 0 0 0px;\    }\    .il-ic-info-native-link-green.il-ic-native-link-green-728x90 {\        width: 60%;\        font-size: 12px;\        margin: 5px 0 0 0px;\        text-align: left;\    }\    .il-ic-info-native-photo.il-ic-native-photo-size-728x90 {\        margin: 0 15px 0 0px;\        width: 120px;\        height: 70px;\        float: left;\    }\    .il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-728x90 {\        top:50%;\        right:7%;\    }\    /* 728x90 Styles End */\\    \\</style>\    <% if (!ad.nologo && withLogo){ %>\        <% if (oldIE || oldFF){ %>\            <div id="<%= prodId %>_LOGO_<%= insIdx %>" class="<%= baseCls %> IL_LOGO"\                style="z-index: 1000; width:70px; height:60px; margin-left: <%= 7 + attr.logoMarginLeft %>px; margin-top: <%= attr.logoMarginTopIE %>px;position: absolute; cursor:pointer;padding-top:<%= attr.paddingTop %>px; font-size:1px; <% if (oldIE || oldFF){ %>background:url(<%= skinPath %>logo.png) no-repeat scroll 0 0 transparent;<% } %>">\            </div>\        <% }else { %>\            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\                id="<%= prodId %>_LOGO_<%= insIdx %>"\                style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000"\                class="<%= baseCls %> IL_LOGO" x="0px" y="0px" width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184"\                style="z-index: 1000;enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\                xml:space="preserve">\                <g id="Logo_PlaceHolder">\                    <path id="Circle" style="opacity:0.8;fill:#E2E2E2;" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\                                C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z" />\                    <g id="logo">\                        <circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844" />\                        <path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\                                        v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\                                        c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\                                        c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\                                        h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\                                        h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z" />\                    </g>\                </g>\                <g id="Layer_2">\                    <rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\                    <rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\                    <rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\                    <rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\                    <rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\                    <rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\                    <rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\                    <rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\                    <rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\                    <rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                    <rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\                </g>\            </svg>\        <% } %>\    <% } %>\\    <div class="il-ic-info-native-wrapper il-ic-native-wrapper-728x90">\        <div class="il-ic-info-native-photo il-ic-native-photo-size-728x90"><img class="il-ic-info-thumbnail-img" src="<%= ad.thumbURL %>" alt=""></div>\\        <div class="il-ic-info-native-headline-blue il-ic-native-headline-blue-728x90"><%= ad.title %></div>\        <div class="il-ic-info-native-copy-grey il-ic-native-copy-grey-728x90"><%= ad.text %></div>\        <div class="il-ic-info-native-link-green il-ic-native-link-green-728x90"><%= ad.displayedURL %></div>\        \        <div class="il-ic-info-banner-native-play-btn il-ic-pulse-btn-location-728x90 il-ic-info-blue-pulse">\            <i class="glyphicon glyphicon-play whiteText" aria-hidden="true"><span class="il-ic-info-stretch">&gt;</span></i>\            <span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\            <span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\            <span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\        </div>\</div>',
                '728x100': '<style>\	@charset "UTF-8";\\	body {\		margin: 0px;\		padding: 0;\		box-sizing: border-box;\	}\\	/* New Class Added Feb 9 2022 Starts */\	.il-ic-info-ad-choices {\		width: 19px;\		height: 15px;\		padding: 1px 1px 0 0px;\		position: absolute;\		right: 0;\		top: 0;\		z-index: 1000000;\	}\\	/* New Class Added Feb 9 2022 Ends */\\	.il-ic-info-native-wrapper {\		padding: 0px;\		position: absolute;\		font-family: Arial, Helvetica, "sans-serif";\		font-size: 15px;\		line-height: 1.2;\		font-weight: normal;\		background: #ffffff;\		text-align: left;\		-webkit-box-shadow: inset 0px 0px 0px 1px #cccccc;\		-moz-box-shadow: inset 0px 0px 0px 1px #cccccc;\		box-shadow: inset 0px 0px 0px 1px #cccccc;\		overflow: hidden;\		top: 7px;\	}\\	.il-ic-info-native-headline-blue {\		font-size: 16px;\		font-weight: bold;\		color: #1122cc;\		width: 100%;\		margin: 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-copy-grey {\		font-size: 14px;\		color: #666666;\		width: 100%;\		max-height: 50px;\		margin: 6px 0 0 0px;\		float: left;\		white-space: normal;\		overflow: hidden;\		text-overflow: ellipsis;\	}\\	.il-ic-info-native-link-green {\		font-size: 12px;\		color: #009933;\		width: 100%;\		margin: 5px 0 0 0px;\		float: left;\		overflow: hidden;\		text-overflow: ellipsis;\		text-align: left;\	}\\	/*Image Thumbnail Start*/\	.il-ic-info-native-photo {\		margin: 10px 15px 10px 10px;\		overflow: hidden;\		float: left;\	}\\	.il-ic-info-thumbnail-img {\		width: 100%;\		height: 100%;\		object-fit: cover;\		object-position: bottom;\	}\\	/*Image Thumbnail Ends*/\\	/*Button Animation Start*/\	.il-ic-info-blue-pulse {\		background-color: #1122cc !important;\		background-image: linear-gradient(90deg, #1122cc, #1122cc);\	}\\	.il-ic-info-banner-native-play-btn {\		height: 60px;\		width: 60px;\		position: absolute;\		text-align: center;\		margin: -30px 0 0 -30px;\		border-radius: 100px;\		z-index: 1;\	}\\	.il-ic-info-banner-native-play-btn i {\		font-size: 30px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 700;\		margin: 0 0 0 6px;\	}\\	.il-ic-info-banner-native-play-btn i::before {\		font-size: 0px;\		color: #fff;\		font-family: "Times New Roman", "serif";\		font-weight: 0;\		margin: 0 0 0 0px;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple {\		position: absolute;\		width: 160px;\		height: 160px;\		z-index: -1;\		left: 50%;\		top: 50%;\		opacity: 0;\		margin: -80px 0 0 -80px;\		border-radius: 100px;\		-webkit-animation: il-ic-ripple 3.0s infinite;\		animation: il-ic-ripple 3.0s infinite;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(2) {\		animation-delay: .4s;\		-webkit-animation-delay: .4s;\	}\\	.il-ic-info-banner-native-play-btn .il-ic-info-ripple:nth-child(3) {\		animation-delay: .8s;\		-webkit-animation-delay: .8s;\	}\\	span.il-ic-info-stretch {\		margin: 0 auto !important;\		height: 4px !important;\		align-items: center !important;\		display: inline-block !important;\		-webkit-transform: scale(1, 1.75) !important;\		-moz-transform: scale(1, 1.75) !important;\		-o-transform: scale(1, 1.75) !important;\		transform: scale(1, 1.75) !important;\		font: 30px "Times New Roman", "serif" !important;\		font-weight: 700 !important;\	}\\	/*Button Animation Ends*/\\	/* 500x100 Styles Start */\	@media screen and (min-width: 500px) {\		.il-ic-info-native-wrapper.il-ic-native-wrapper-500x100-728x100 {\			width: 100%;\			height: 100px;\			margin-top: -7px;\		}\\		.il-ic-info-native-headline-blue.il-ic-native-headline-blue-500x100-728x100 {\			font-size: 16px;\			width: 48%;\			max-height: 18px;\			margin: 10px 0 0 0px;\		}\\		.il-ic-info-native-copy-grey.il-ic-native-copy-grey-500x100-728x100 {\			font-size: 14px;\			width: 48%;\			max-height: 36px;\			margin: 6px 0 0 0px;\		}\\		.il-ic-info-native-link-green.il-ic-native-link-green-500x100-728x100 {\			width: 48%;\			font-size: 12px;\			margin: 5px 0 0 0px;\		}\\		.il-ic-info-native-photo.il-ic-native-photo-size-500x100-728x100 {\			margin: 10px 10px 10px 10px;\			width: 100px;\			height: 80px;\		}\\		.il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-500x100-728x100 {\			top: 50%;\			right: 7%;\		}\\		@-webkit-keyframes il-ic-ripple {\			0% {\				opacity: 1;\				-webkit-transform: scale(0);\				transform: scale(0);\			}\\			100% {\				opacity: 0;\				-webkit-transform: scale(.8);\				transform: scale(.8);\			}\		}\\		@keyframes il-ic-ripple {\			0% {\				opacity: 1;\				-webkit-transform: scale(0);\				transform: scale(0);\			}\\			100% {\				opacity: 0;\				-webkit-transform: scale(.8);\				transform: scale(.8);\			}\		}\	}\\	/* 500x100 Styles End */\\\\	/* 550x100 Styles Start */\	@media screen and (min-width: 550px) {\		.il-ic-info-native-headline-blue.il-ic-native-headline-blue-500x100-728x100 {\			width: 52%;\		}\\		.il-ic-info-native-copy-grey.il-ic-native-copy-grey-500x100-728x100 {\			width: 52%;\		}\\		.il-ic-info-native-link-green.il-ic-native-link-green-500x100-728x100 {\			width: 52%;\		}\\		.il-ic-info-native-photo.il-ic-native-photo-size-500x100-728x100 {\			width: 110px;\		}\	}\\	/* 550x100 Styles End */\\	/* 600x100 Styles Start */\	@media screen and (min-width: 600px) {\		.il-ic-info-native-headline-blue.il-ic-native-headline-blue-500x100-728x100 {\			width: 58%;\		}\\		.il-ic-info-native-copy-grey.il-ic-native-copy-grey-500x100-728x100 {\			width: 58%;\		}\\		.il-ic-info-native-link-green.il-ic-native-link-green-500x100-728x100 {\			width: 58%;\		}\	}\\	/* 600x100 Styles End */\\	/* 650x100 Styles Start */\	@media screen and (min-width: 675px) {\		.il-ic-info-native-headline-blue.il-ic-native-headline-blue-500x100-728x100 {\			width: 60%;\		}\\		.il-ic-info-native-copy-grey.il-ic-native-copy-grey-500x100-728x100 {\			width: 60%;\		}\\		.il-ic-info-native-link-green.il-ic-native-link-green-500x100-728x100 {\			width: 60%;\		}\	}\\	/* 650x100 Styles End */\\	/* 500x100-728x100 Styles Start */\	@media screen and (min-width: 728px) {\		.il-ic-info-native-wrapper.il-ic-native-wrapper-500x100-728x100 {\			width: 100%;\			height: 100px;\			margin-top: -7px;\		}\\		.il-ic-info-native-headline-blue.il-ic-native-headline-blue-500x100-728x100 {\			font-size: 16px;\			width: 58%;\			max-height: 18px;\			margin: 10px 0 0 0px;\		}\\		.il-ic-info-native-copy-grey.il-ic-native-copy-grey-500x100-728x100 {\			font-size: 14px;\			width: 58%;\			max-height: 50px;\			margin: 6px 0 0 0px;\		}\\		.il-ic-info-native-link-green.il-ic-native-link-green-500x100-728x100 {\			width: 58%;\			font-size: 12px;\			margin: 5px 0 0 0px;\		}\\		.il-ic-info-native-photo.il-ic-native-photo-size-500x100-728x100 {\			margin: 10px 15px 10px 10px;\			width: 120px;\			height: 80px;\		}\\		.il-ic-info-banner-native-play-btn.il-ic-pulse-btn-location-500x100-728x100 {\			top: 50%;\			right: 7%;\		}\\		@-webkit-keyframes il-ic-ripple {\			0% {\				opacity: 1;\				-webkit-transform: scale(0);\				transform: scale(0);\			}\\			100% {\				opacity: 0;\				-webkit-transform: scale(1);\				transform: scale(1);\			}\		}\\		@keyframes il-ic-ripple {\			0% {\				opacity: 1;\				-webkit-transform: scale(0);\				transform: scale(0);\			}\\			100% {\				opacity: 0;\				-webkit-transform: scale(1);\				transform: scale(1);\			}\		}\	}\</style>\\	<% if (!ad.nologo && withLogo) { %>\		<% if (oldIE || oldFF){ %>\			<div id="<%= prodId %>_LOGO_<%= insIdx %>" class="<%= baseCls %> IL_LOGO"\				style="z-index: 1000; width:70px; height:60px; margin-left: <%= 7 + attr.logoMarginLeft %>px; margin-top: <%= attr.logoMarginTopIE %>px;position: absolute; cursor:pointer;padding-top:<%= attr.paddingTop %>px; font-size:1px; <% if (oldIE || oldFF){ %>background:url(<%= skinPath %>logo.png) no-repeat scroll 0 0 transparent;<% } %>"\			>\			</div>\		<% } else { %>\			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\				id="<%= prodId %>_LOGO_<%= insIdx %>"\				style="position: absolute;left:auto;top:auto;bottom:0px;right:0px;max-width:19px;max-height:19px;z-index:1000000"\				class="<%= baseCls %> IL_LOGO" x="0px" y="0px" width="20.033px" height="19.184px" viewBox="0 0 20.033 19.184"\				style="z-index: 1000;enable-background:new 0 0 20.033 19.184;position: absolute;bottom: 0;right: 0;"\				xml:space="preserve">\				<g id="Logo_PlaceHolder">\					<path id="Circle" style="opacity:0.8;fill:#E2E2E2;" d="M20.033,0.015v19.168H0.009C0,19.184,0,19.043,0,18.989\								C0,8.509,8.543,0,19.032,0C19.356,0,20.033-0.003,20.033,0.015z" />\					<g id="logo">\						<circle style="fill:#208CE5;" cx="8.515" cy="6.883" r="0.844" />\						<path style="fill:#003366;" d="M14.194,9.237h-0.883c-1.368,0-2.488,1.12-2.488,2.488v2.776c0,0.017,0.001,0.033,0.002,0.049\										v0.414c0,0.456-0.373,0.828-0.828,0.828H9.96c-0.456,0-0.828-0.373-0.828-0.828v-1.832h0.001V9.405c0-0.001,0-0.002,0-0.002\										c0-0.09-0.071-0.162-0.16-0.166H8.055C7.968,9.24,7.9,9.309,7.897,9.396v3.736H7.9c-0.001,0.028-0.003,0.056-0.003,0.085v1.775\										c0,1.12,0.916,2.036,2.036,2.036h0.092c1.12,0,2.036-0.916,2.036-2.036v-0.436v-0.369v-2.305c0.007-0.788,0.651-1.432,1.439-1.432\										h0.508c0.788,0,1.432,0.644,1.44,1.432v2.305v0.369v2.304c0.001,0.002,0.001,0.003,0.001,0.004c0,0.089,0.071,0.16,0.158,0.164\										h0.918c0.086-0.003,0.155-0.071,0.158-0.157v-2.231v-0.452v-2.463C16.682,10.356,15.562,9.237,14.194,9.237z" />\					</g>\				</g>\				<g id="Layer_2">\					<rect x="8.033" y="7.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="8.033" y="5.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="6.184" style="opacity:0.6;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="5.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="7.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="7.184" style="opacity:0.2;fill:#208CE5;" width="1" height="1" />\					<rect x="9.033" y="9.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="12.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="13.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="14.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="15.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="15.033" y="16.184" style="opacity:0.6;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="10.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="11.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="12.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="13.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="9.033" y="14.184" style="opacity:0.2;fill:#003366;" width="1" height="1" />\					<rect x="7.033" y="9.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="10.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="11.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="12.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="13.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="14.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\					<rect x="7.033" y="15.184" style="opacity:0.3;fill:#E2E2E2;" width="1" height="1" />\				</g>\			</svg>\		<% } %>\			<!--</div>-->\	<% } %>\	<!-- NATIVE 500x100-728x100 STARTS -->\	<div class="il-ic-info-native-wrapper il-ic-native-wrapper-500x100-728x100">\\		<div class="il-ic-info-native-photo il-ic-native-photo-size-500x100-728x100"><img\				class="il-ic-info-thumbnail-img" src="<%= ad.thumbURL %>" alt=""></div>\\		<div class="il-ic-info-native-headline-blue il-ic-native-headline-blue-500x100-728x100">\			<%= ad.title %>\		</div>\		<div class="il-ic-info-native-copy-grey il-ic-native-copy-grey-500x100-728x100">\			<%= ad.text %>\		</div>\		<div class="il-ic-info-native-link-green il-ic-native-link-green-500x100-728x100">\			<%= ad.displayedURL %>\		</div>\\		<div\			class="il-ic-info-banner-native-play-btn il-ic-pulse-btn-location-500x100-728x100 il-ic-info-blue-pulse">\			<i class="glyphicon glyphicon-play whiteText" aria-hidden="true"><span\					class="il-ic-info-stretch">&gt;</span></i>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\			<span class="il-ic-info-ripple il-ic-info-blue-pulse"></span>\		</div>\\	<!-- NATIVE 500x100-728x100 ENDS -->\</div>'
            }
        }
    }, null, false);
})();