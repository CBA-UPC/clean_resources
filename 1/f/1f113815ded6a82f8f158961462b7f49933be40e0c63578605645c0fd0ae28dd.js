/*! elementor-pro - v3.18.0 - 06-12-2023 */
"use strict";(self.webpackChunkelementor_pro=self.webpackChunkelementor_pro||[]).push([[26],{3663:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,window.elementorCommon&&window.elementorCommon.helpers.softDeprecated('Scroll util from "/dev/js/frontend/utils/scroll"',"3.1.0","elementorModules.utils.Scroll");t.default=elementorModules.utils.Scroll},629:(e,t,i)=>{var n=i(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(i(3663));t.default=elementorModules.frontend.handlers.Base.extend({svgPaths:{circle:["M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"],underline_zigzag:["M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"],x:["M497.4,23.9C301.6,40,155.9,80.6,4,144.4","M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"],strikethrough:["M3,75h493.5"],curly:["M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6"],diagonal:["M13.5,15.5c131,13.7,289.3,55.5,475,125.5"],double:["M8.4,143.1c14.2-8,97.6-8.8,200.6-9.2c122.3-0.4,287.5,7.2,287.5,7.2","M8,19.4c72.3-5.3,162-7.8,216-7.8c54,0,136.2,0,267,7.8"],double_underline:["M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6","M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"],underline:["M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"]},getDefaultSettingsgetDefaultElementsgetNextWord:switchWordsingleLettersshowLetterhideLettershowWordhideWord(e){var t=this,i=t.getSettings(),n=i.classes,s="."+n.dynamicLetter;if(this.isLoopMode||!e.is(":last-child")){var a=t.getElementSettings("animation_type"),l=t.getNextWord(e);if("typing"===a)t.elements.$dynamicWrapper.addClass(n.typeSelected),setTimeout((,i.selectionDuration),setTimeout((,i.typeAnimationDelay);else if(t.elements.$headline.hasClass(n.letters)){var r=e.children(s).length>=l.children(s).length;t.hideLetter(e.find(s).eq(0),e,r,i.lettersDelay),t.showLetter(l.find(s).eq(0),l,r,i.lettersDelay),t.setDynamicWrapperWidth(l)}else"clip"===a?t.elements.$dynamicWrapper.animate({width:"2px"},i.revealDuration,():(t.switchWord(e,l),setTimeout((,i.animationDelay))}},setDynamicWrapperWidthanimateHeadlinegetSvgPathsaddHighlightrotateHeadlineinitHeadlineactivateHighlightAnimationactivateScrollListenerdeactivateScrollListeneronInit)}}]);