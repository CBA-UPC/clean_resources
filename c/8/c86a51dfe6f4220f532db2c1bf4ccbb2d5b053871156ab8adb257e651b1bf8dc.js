(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5312],{35589:65312:function(e,t,a){"use strict";a.d(t,{Z:);var d=a(1413),r=a(86854),l=a(96421),s=a(94184),n=a.n(s),i=a(67294),c=a(70131),o=(a(58966),a(35589)),m=function(e){var t=e.loader,a=e.item,d=e.isActive,r=e.onClick,l=e.editAddress;return i.createElement("div",{className:n()("relative mx-1 md:p-3 p-4 border transition-colors duration-300 cursor-pointer",{"border-dashed border-blue-400 bg-blue-50":d,"border-dashed border-grey-200":!d}),onClick:"aria-hidden":!0},i.createElement("div",null,i.createElement("div",{className:"flex items-center justify-between"},i.createElement("h6",{className:"text-14 font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis"},a.address_name),i.createElement("img",{src:o,alt:"Edit Icon",className:"w-4 h-4",onClick:"aria-hidden":!0})),i.createElement("p",{className:"mt-2 text-12 text-grey-600 whitespace-nowrap overflow-hidden overflow-ellipsis"},a.first_name,"\xa0",a.last_name,",\xa0",a.address_line_1,",\xa0",a.locality_area_street,",\xa0",window.innerWidth>=768?"".concat(a.city,", ").concat(a.territory,", ").concat(a.country,", ").concat(a.pincode):""),window.innerWidth<768?i.createElement("p",{className:"text-12 text-grey-600 whitespace-nowrap overflow-hidden overflow-ellipsis"},a.city,",\xa0",a.territory,",\xa0",a.country,"\xa0",a.pincode):""))},u=function(){return i.createElement("div",{className:"-mx-2 flex"},[0,1,2].map((function(e){return i.createElement("div",{key:e,className:"mx-2"},i.createElement("h6",{className:"skeleton dark",style:{height:16,width:60},"aria-hidden":!0}),i.createElement("p",{className:"skeleton",style:{height:14,width:100},"aria-hidden":!0}),i.createElement("p",{className:"skeleton mb-1",style:{height:14,width:220},"aria-hidden":!0}),i.createElement("p",{className:"skeleton mb-1",style:{height:14,width:180},"aria-hidden":!0}),i.createElement("p",{className:"skeleton mb-1",style:{height:14,width:160},"aria-hidden":!0}),i.createElement("p",{className:"skeleton mb-1",style:{height:14,width:100},"aria-hidden":!0}))})))},M=a(78255),h=a.n(M),p=function(e){var t=e.skeletonLoader,a=e.loader,s=e.addressList,o=e.activeAddressId,M=e.disabledAddressId,p=e.setEditAddress,w=e.setEditAddressType,N=e.toggleAddNewAddress,f=e.onClick,E=e.isSameAddress,g=e.addressType,y=e.addressLocationText,D=e.totalAddresses,v={threshold:0},A=(0,c.YD)((0,d.default)({},v)),k=(0,r.default)(A,2),x=k[0],b=k[1],I=(0,c.YD)((0,d.default)({},v)),z=(0,r.default)(I,2),T=z[0],_=z[1],j=(0,i.useState)(!1),C=(0,r.default)(j,2),S=C[0],L=C[1],U=(0,i.useState)(!1),Z=(0,r.default)(U,2),W=Z[0],Q=Z[1];return(0,i.useEffect)((,[b,_]),i.createElement("div",{className:"relative"},i.createElement(l.Hi,null,S&&!t&&D>0&&i.createElement("div",{className:"sticky top-0 ".concat(h().upperShadow)})),i.createElement("div",null),i.createElement("div",{className:"".concat(h().addressScrollBar," overflow-auto ").concat(E?"":"cn-199")},i.createElement("div",{className:"flex md:flex-col pb-1 gap-2"},t?i.createElement("div",{className:"px-2"},i.createElement(u,null)):i.createElement(i.Fragment,null,D>0?i.createElement("div",{className:"pb-2 md:pb-0 flex flex-start md:flex-col overflow-y-auto"},i.createElement("div",{ref:x}),s.map((function(e,t){return i.createElement("div",{className:"w-3/4 md:w-auto md:pt-3 md:first:pt-0",key:e.address_id},i.createElement(m,{loader:a,key:e.address_id,item:e,editAddress:onClick:f,isActive:o===e.address_id,disabled:M===e.address_id}))})),i.createElement("div",{ref:T})):i.createElement(i.Fragment,null,i.createElement(l.wy,null,i.createElement("p",{className:"mb-0 text-grey-500 w-full text-center font-medium"},y)))))),i.createElement(l.Hi,null,W&&!t&&D>0&&i.createElement("div",{className:n()("sticky ".concat(E?"bottom-0":"cn-49","  ").concat(h().lowerShadow),{"cn-50":"Billing"===g})})))}},78255:]);