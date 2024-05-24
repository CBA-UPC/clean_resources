(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7466],{19410:98744:function(e,n,s){"use strict";s.d(n,{U:function(){return OfflineInstallCard},Z:function(){return OfflineInstallTabs}});var t=s(52322),a=s(2784),l=s(83122),i=s(70505);let r="(Optional) Right click on Navattic Launchpad in your dock and Press Options > Keep\n    in Dock",ChromeSteps=e=>{let{isMac:n}=e,{deferredPrompt:s,handleInstall:a}=(0,i.i)(),l="Open Chrome on ".concat(n?"your Mac computer":"the device you'd like to use the app");return s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("ol",{className:"mb-7",children:[(0,t.jsxs)("li",{children:["1) ",l]}),(0,t.jsx)("li",{children:"2) Open this page on the device"}),(0,t.jsx)("li",{children:'3) Press "Install Navattic Launchpad" below'})]}),(0,t.jsx)("button",{onClick:a,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:"Install Navattic Launchpad"}),n&&(0,t.jsx)("ol",{className:s?"mt-7":"",children:(0,t.jsxs)("li",{children:["4) ",r]})})]}):(0,t.jsxs)("ol",{children:[(0,t.jsxs)("li",{children:["1) ",l]}),(0,t.jsx)("li",{children:"2) Open this page on the device"}),(0,t.jsx)("li",{children:"3) Press download in the Chrome Navigation Bar"}),(0,t.jsx)("li",{children:"4) Press Install"}),n&&(0,t.jsxs)("li",{children:["5) ",r]})]})},SafariShareIcon=e=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,t.jsx)("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),(0,t.jsx)("polyline",{points:"16 6 12 2 8 6"}),(0,t.jsx)("line",{x1:"12",x2:"12",y1:"2",y2:"15"})]}),SafariAddToHomeScreenIcon=e=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,t.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,t.jsx)("path",{d:"M8 12h8"}),(0,t.jsx)("path",{d:"M12 8v8"})]}),o=[{label:"Computer / Tablet",Component:(0,t.jsx)(ChromeSteps,{})},{label:"Mac OS",Component:(0,t.jsx)(ChromeSteps,{isMac:!0})},{label:"iPad",Component:(0,t.jsx)(()=>(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:"1) Open Safari on your iPad"}),(0,t.jsx)("li",{children:"2) Open this page on your iPad"}),(0,t.jsxs)("li",{children:['3) Press "Share" in the Safari Navigation Bar'," ",(0,t.jsxs)("span",{className:"ml-2 text-gray-400",children:["(",(0,t.jsx)(SafariShareIcon,{className:"mx-[1px] inline h-3 w-3 text-gray-800"}),")"]})]}),(0,t.jsxs)("li",{children:['4) Press "Add to Home Screen"',(0,t.jsxs)("span",{className:"ml-2 text-gray-400",children:["(",(0,t.jsx)(SafariAddToHomeScreenIcon,{className:"mx-[1px] inline h-3 w-3 text-gray-800"}),")"]})]})]}),{})}],InstallTabs=e=>{let{selectedLabel:n,setSelectedLabel:s}=e;return(0,t.jsx)("nav",{className:"flex space-x-8 border-b","aria-label":"Nav",children:o.map(e=>(0,t.jsx)("div",{className:(0,l.AK)(n===e.label?"border-[#455CAD] text-zinc-900":"border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700","-mb-[1px] cursor-pointer whitespace-nowrap border-b-[1.5px] pb-3 text-[14px] text-base font-medium"),onClick:children:e.label},e.label))})};function OfflineInstallTabs(){let[e,n]=(0,a.useState)(o[0].label),s=o.find(||o[0];return(0,t.jsxs)("div",{children:[(0,t.jsx)(InstallTabs,{selectedLabel:e,setSelectedLabel:n}),(0,t.jsx)("div",{className:"mt-6 text-sm text-gray-600",children:s.Component})]})}function OfflineInstallCard(){return(0,t.jsxs)("div",{className:"rounded-md border px-10 py-6",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("h1",{className:"mb-1 text-base font-semibold",children:"Install offline app"}),(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Download Launchpad as an app on your computer or tablet device"})]}),(0,t.jsx)(OfflineInstallTabs,{})]})}},67576:function(e,n,s){"use strict";s.d(n,{Z:function(){return SideMenuLayout}});var t=s(52322),a=s(83122),l=s(39097),i=s.n(l),r=s(5632);function SideMenu(e){let{menuItems:n}=e,s=(0,r.useRouter)();return(0,t.jsx)(t.Fragment,{children:n.map(e=>(0,t.jsx)(i(),{href:"/launchpad".concat(e.href),className:(0,a.AK)(s.pathname.endsWith(e.href)?"font-semibold text-gray-800":"text-gray-500",e.hidden?"hidden":"","py-2 text-sm hover:text-gray-800"),children:e.label},e.label))})}function SideMenuLayout(e){let{title:n,description:s,children:a,menuItems:l}=e;return(0,t.jsx)("main",{className:"mx-auto w-full flex-1 py-10 xl:px-10",children:(0,t.jsxs)("div",{className:"flex h-full flex-row",children:[(0,t.jsx)("div",{className:"w-1/5 shrink-0 text-base",children:(0,t.jsx)("div",{className:"-mt-1 flex flex-col pr-2",children:(0,t.jsx)(SideMenu,{menuItems:l})})}),(0,t.jsxs)("section",{className:"w-full",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("h1",{className:"mb-1 text-base font-semibold",children:n}),(0,t.jsx)("p",{className:"text-sm text-gray-500",children:s})]}),(0,t.jsx)("div",{className:"flex-1 overflow-x-auto",children:a})]})]})})}},71309:function(e,n,s){"use strict";s.r(n),s.d(n,{default:);var t=s(52322),a=s(33800),l=s(98744),i=s(67576);let r=[{label:"Offline",href:"/settings/offline"}];function SettingsLayout(e){let{title:n,description:s,children:a}=e;return(0,t.jsx)(i.Z,{title:n,description:s,menuItems:r,children:a})}function SettingsInstallPage(){return(0,t.jsx)(SettingsLayout,{title:"Install offline app",description:"Download Launchpad as an app on your computer or tablet device",children:(0,t.jsx)("div",{className:"mt-5",children:(0,t.jsx)(l.Z,{})})})}SettingsInstallPage.getLayout=var o=SettingsInstallPage}},);
//# sourceMappingURL=offline-fda63e4e34217110.js.map