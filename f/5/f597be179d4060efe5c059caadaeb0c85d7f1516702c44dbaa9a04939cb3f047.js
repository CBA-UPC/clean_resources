(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5275],{29189:18406:21215:function(e,a,n){"use strict";n.d(a,{Z:function(){return SettingsHeader}});var t=n(52322);,86045:function(e,a,n){"use strict";n.d(a,{Z:function(){return SettingsTabs}});var t=n(52322),s=n(51830),r=n(47330),l=n(83122),i=n(53954),d=n(5632);,81291:9602:function(e,a,n){"use strict";n.d(a,{M:function(){return useUpdateWorkspaceMutation}});var t=n(73235),s=n(66547),r=n(52793),l=n(26806);et i=(0,s.ZP)(_templateObject(),r.L);,35557:function(e,a,n){"use strict";n.r(a);var t=n(52322),s=n(2784),r=n(18406),l=n(97185),i=n(21215),d=n(86045),c=n(32517),o=n(81291),u=n(13683),m=n(9602),p=n(47330),h=n(82002),f=n(53954),g=n(81021),x=n(77512);function AccountPage(){let{currentUser:e}=(0,f.xJ)(),{workspace:a}=(0,f.cF)(),[n,l]=(0,s.useState)(!1),[b,v]=(0,s.useState)(!0),[N,w]=(0,s.useState)(!1),y={firstName:null==e?void 0:e.firstName,lastName:null==e?void 0:e.lastName,workspaceName:null==a?void 0:a.name,workspaceSlug:null==a?void 0:a.slug},[S,j]=(0,s.useState)(y),[,k]=(0,u.k)(),[,T]=(0,m.M)(),E=(0,f.j_)(p.KG.Account),$=(0,f.Ps)(),reset=()=>{j({firstName:null==e?void 0:e.firstName,lastName:null==e?void 0:e.lastName,workspaceName:null==a?void 0:a.name,workspaceSlug:null==a?void 0:a.slug})},onSubmit=async n=>{n.preventDefault();let{firstName:t,lastName:s,workspaceName:r,workspaceSlug:i}=S,d=i&&i!==(null==a?void 0:a.slug),o=r&&r!==(null==a?void 0:a.name),update=async()=>{let{error:n}=await k({firstName:t,lastName:s,userId:e.id});if(n){console.error(n),(0,c.Rn)("Failed to update first and/or last name");return}if(o||d){let{error:e}=await T({id:a.id,name:r,slug:i});if(e){var u,m;if((null===(u=e.message)||void 0===u?void 0:u.includes(g.YI.EXISTING_SLUG))||(null===(m=e.message)||void 0===m?void 0:m.includes(g.YI.EXISTING_REDIRECT))){l(!0);return}console.error(e),(0,c.Rn)("Error saving account details");return}}(0,c.Vp)("Saved account details"),v(!0)};w(!0),update().finally(},handleChange=(e,a)=>{"workspaceSlug"===e&&l(!1);let n={...S,[e]:a};v(Object.entries(n).every(e=>{let[a,n]=e;return n===y[a]})),j(n)};if(!e)return(0,t.jsx)("div",{});let _={handler:disable:b,cancelEvent:!0,shouldHandleFocusEscape:!0};return(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(o.Z,{title:"Account",includeSlug:!0}),(0,t.jsx)(d.Z,{children:(0,t.jsxs)("div",{className:"mx-auto w-full max-w-3xl",children:[(0,t.jsx)(i.Z,{title:"Account",description:"Manage your profile and workspace details."}),(0,t.jsxs)("form",{onSubmit:onSubmit,children:[(0,t.jsx)("div",{className:"mb-3 font-semibold",children:"Profile"}),(0,t.jsxs)("div",{className:"flex w-full",children:[(0,t.jsx)("div",{className:"col-span-6 mr-2 flex-1",children:(0,t.jsx)(x.oi,{labelText:"First name",name:"firstName",id:"firstName",autoComplete:"given-name",disabled:$,value:S.firstName||void 0,onChange:e=>handleChange("firstName",e),className:"w-full",...(0,h.uT)(_)})}),(0,t.jsx)("div",{className:"col-span-6 flex-1",children:(0,t.jsx)(x.oi,{labelText:"Last name",name:"lastName",id:"lastName",disabled:$,autoComplete:"family-name",value:S.lastName||void 0,onChange:e=>handleChange("lastName",e),className:"w-full",...(0,h.uT)(_)})})]}),(0,t.jsxs)("div",{className:"pt-6",children:[E===p.KA.Edit&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"my-3 font-semibold",children:"Workspace"}),(0,t.jsxs)("div",{className:"flex w-full",children:[(0,t.jsx)("div",{className:"col-span-6 mr-2 flex-1",children:(0,t.jsx)(x.oi,{className:"w-full",labelText:"Company Name",value:S.workspaceName,name:"workspaceName",id:"workspaceName",onChange:e=>handleChange("workspaceName",e),...(0,h.uT)(_)})}),(0,t.jsx)("div",{className:"col-span-6 flex-1",children:(0,t.jsx)(x.oi,{name:"workspaceSlug",id:"workspaceSlug",labelText:"Company Workspace",error:n?"This workspace name has already been taken":"",left:"app.navattic.com/",className:"w-full",placeholder:"company-name","aria-invalid":n,value:S.workspaceSlug,onChange:)})]})]}),(0,t.jsxs)("div",{className:"mt-10 flex justify-end border-t border-gray-200/60 pt-5",children:[(0,t.jsx)("button",{onClick:className:"btn-gray-border mr-2 px-3 py-2 text-base",disabled:b,children:"Cancel"}),(0,t.jsx)("button",{className:"btn-blue px-3 py-2 text-base",disabled:b||N,type:"submit",children:"Save"})]})]})]})]})})]})}AccountPage.getLayout=a.default=AccountPage},81021:function(e,a,n){"use strict";n.d(a,{Dx:function(){return isVanitySubdomain},YI:function(){return s},qz:);var t,s,r=n(60696);let l=new Set(["app","capture","c","knowledgebase","www","logo","staging","test","demo","guide","flow","live","production","prod","docs","doc","static","assets","js","css","styles","public","private","admin","api","cdn","web","analytics","insights","backend","frontend","browser","bug","bugs","data","deploy","ui","monty",...[...Array(26)].map(]),isReservedSlug=isValidSlugAndSubdomain=(t=s||(s={})).RESERVED_SLUG="workspace slug is reserved",t.INVALID_SLUG="workspace slug has invalid character(s)",t.EXISTING_SLUG="workspace slug already exists",t.EXISTING_REDIRECT="workspace slug already exists as redirect";let validateSlugValue=isVanitySubdomain=i=[r.WorkspaceItem.CUSTOMERS,r.WorkspaceItem.SSO]}},function(e){e.O(0,[3211,8426,3265,1617,4637,5837,696,4054,7330,9219,5306,6870,7156,6456,7185,9774,2888,179],,_N_E=e.O()}]);
//# sourceMappingURL=account-b81c257c7f8e97d2.js.map