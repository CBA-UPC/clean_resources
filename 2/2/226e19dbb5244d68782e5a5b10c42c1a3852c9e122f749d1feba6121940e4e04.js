(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[953],{ejZx:function(e,t,o){"use strict";o.r(t);var r=o("LexE"),n=o("dvPJ"),l=o("DU/N"),u=o("MqQ1"),a=o("kTxb"),i=o("mXGw"),c=o.n(i);function s(e,t){return e.filter((function(e){return!function(e,t){return!!t.length&&t.filter(().length>0}(e,t)}))}var d=t.default=function(e){var t=e.dropdownTitle,o=e.locResources,g=e.maxSuggestions,p=e.onPersonSelected,f=e.getOrCreateUpnNameMap,b=e.fetchPictureData,h=e.iconName,x=e.pickerKey,y=e.ariaDescribedbyId,m=Object(i.useRef)(null),k=Object(i.useState)(!1),2),v=k[0],T=k[1],w=Object(i.useMemo)((function(){var e=f(),t=[];return e.forEach((function(e,o){t.push({key:o,text:e,secondaryText:o,styles:{primaryText:{color:l.a.colorNeutralForeground2},secondaryText:{color:l.a.colorNeutralForeground4}}})})),t}),[f]),O=Object(i.useMemo)((function(){return g>0?g:w.length}),[g,w.length]),P=Object(i.useCallback)((function(e){return e&&e.length?b?Promise.all(e.map((function(e){return b(e.key).then((function(t){return t?d(d({},e),{imageUrl:Object(a.a)("image/png",t)}):e})).catch((function(t){return e}))}))):e:[]}),[b]),C=Object(i.useCallback)((function(e){var t=s(w,e||[]).slice(0,O);return P(t)}),[P,O,w]),N=Object(i.useCallback)((function(e,t){if(t&&e){var o=function(e,t){return t.filter((function(t){return!(!t||!t.text)&&t.text.toLowerCase().indexOf(e.toLowerCase())>=0}))}(e,w);return o=(o=s(o,t)).slice(0,O),P(o)}return[]}),[w,O,P]),S=Object(i.useMemo)((function(){return c.a.createElement(r.a,{onEmptyResolveSuggestions:C,key:x,pickerCalloutProps:{doNotLayer:!0,styles:{root:{position:"static",width:260,boxShadow:"",borderTop:"1px solid",borderTopColor:l.a.colorNeutralStroke2},calloutMain:{backgroundColor:l.a.colorNeutralBackground1}},preventDismissOnEvent:function(e){return e&&"scroll"===e.type}},inputProps:{placeholder:o.peoplePickerHint,style:{paddingLeft:10,height:37}},onItemSelected:function(e){return e&&(p(e),T(!1)),null},pickerSuggestionsProps:{suggestionsHeaderText:o.suggestedPeopleText,mostRecentlyUsedHeaderText:o.suggestedPeopleText,noResultsFoundText:o.noResultsFoundText,loadingText:o.loadingText,showRemoveButtons:!1,suggestionsAvailableAlertText:o.suggestionsAvailableAlertText,suggestionsContainerAriaLabel:o.suggestedPeopleText,styles:{title:{height:40,borderBottom:"0px",fontSize:"12px",color:l.a.colorNeutralForeground2}}},onResolveSuggestions:N,styles:{text:{width:260,height:36,fontSize:"14px",color:l.a.colorNeutralForeground3,border:"0px",":after":{border:"0px"},backgroundColor:l.a.colorNeutralBackground1},input:{height:36}}})}),[C,x,o.peoplePickerHint,o.suggestedPeopleText,o.noResultsFoundText,o.loadingText,o.suggestionsAvailableAlertText,N,p]),j=Object(i.useCallback)((,[S]);return w.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{ref:m,title:t,iconName:h,isActive:v,onClick:isDropdown:!0,ariaLabel:t,ariaDescribedbyId:y}),c.a.createElement(n.a,{items:[{key:"peoplePicker"}],onRenderMenuList:j,shouldFocusOnMount:!0,target:m.current,hidden:!v,doNotLayer:!0,onDismiss:calloutProps:{styles:{root:{zIndex:10,width:260},calloutMain:{overflowY:"hidden"}},preventDismissOnEvent:,focusZoneProps:{style:{backgroundColor:l.a.colorNeutralBackground1}},gapSpace:5})):null}}}]);
//# sourceMappingURL=953.2e0b0a57fc8e2da2e537.chunk.v7.js.map