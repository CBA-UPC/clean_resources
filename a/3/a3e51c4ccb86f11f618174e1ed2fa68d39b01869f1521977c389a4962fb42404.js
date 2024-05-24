(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5806],{54875:18406:15329:function(e,s,t){"use strict";t.d(s,{Z:function(){return MissingViewPermission}});var n=t(52322),a=t(99219),r=t(51830);,21215:function(e,s,t){"use strict";t.d(s,{Z:function(){return SettingsHeader}});var n=t(52322);,86045:function(e,s,t){"use strict";t.d(s,{Z:function(){return SettingsTabs}});var n=t(52322),a=t(51830),r=t(47330),l=t(83122),i=t(53954),o=t(5632);,81291:78066:function(e,s,t){"use strict";t.d(s,{Z:function(){return Modal}});var n=t(52322),a=t(2784),r=t(68810),l=t(64529),i=t(83122),o=t(82002),d=t(89370);}},3852:function(e,s,t){"use strict";t.d(s,{Z:function(){return useGetWorkspaceRolesQuery}});var n=t(73235),a=t(66547),r=t(66254),l=t(26806);function _templateObject(){let e=(0,n._)(["\n    query GetWorkspaceRoles($workspaceId: String!) {\n  workspaceRoles(workspaceId: $workspaceId) {\n    ...WorkspaceRole\n  }\n}\n    ",""]);return _templateObject=function(){return e},e}let i=(0,a.ZP)(_templateObject(),r.O}},76454:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return A}});var n=t(52322),a=t(18406),r=t(97185),l=t(2784),i=t(15329),o=t(21215),d=t(3852),c=t(47330),m=t(53954),u=t(46319),p=t(99219),x=t(78066),h=t(51830),g=t(73235),b=t(66547),f=t(66254),v=t(26806);function _templateObject(){let e=(0,g._)(["\n    mutation CreateWorkspaceRole($data: WorkspaceRoleCreateInput!) {\n  createWorkspaceRole(data: $data) {\n    ...WorkspaceRole\n  }\n}\n    ",""]);return _templateObject=function(){return e},e}let w=(0,b.ZP)(_templateObject(),f.O}let j=(0,b.ZP)(deleteWorkspaceRole_templateObject()}let k=(0,b.ZP)(updateWorkspaceRole_templateObject(),f.O);var y=t(83122),N=t(77512),R=t(56958),S=t(69260);let generateRolesString=e=>{let{permissions:s}=e;if(!s.length)return"";let t=[];return s.map(e=>{let{action:s,workspaceItem:n}=e,a=s.toLowerCase(),r=n.toLowerCase();if("customers"===r&&(r="visitors"),a.includes("none"))return;let l="".concat(r,"_").concat(a);t.push(l)}),t.join(", ")};var SettingsRole_RolesList=e=>{let{editAccess:s,workspace:t,workspaceRoles:a,openEditRoleModal:r}=e,l=(0,m.NK)(t,c.TT.Launchpad);return(0,n.jsx)("ul",{role:"list",className:"divide-y divide-slate-100",children:(null==a?void 0:a.length)>0&&a.map(e=>{if(l||e.name!==S.PD)return(0,n.jsx)("li",{className:"py-4",children:(0,n.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,n.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,n.jsx)("p",{className:"truncate text-base font-medium text-gray-900",children:e.name}),e.permissions&&(0,n.jsx)("div",{className:"w-96 truncate whitespace-normal text-sm leading-5 text-gray-400",children:generateRolesString({permissions:e.permissions})})]}),(0,n.jsx)("div",{children:s&&"admin"!==e.name.toLowerCase()&&(0,n.jsx)("button",{onClic),className:"inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-base font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50",children:"Edit"})})]})},e.id)})})},I=t(68810),C=t(3016),_=t(81021);let generateSections=e=>{let{ssoEnabled:s}=e;return[{name:"Projects",workspaceItem:c.KG.Projects,children:[{name:"Builder",workspaceItem:c.KG.Projects},{name:"Analytics",workspaceItem:c.KG.Analytics},{name:"Guides",workspaceItem:c.KG.Guides},{name:"Captures",workspaceItem:c.KG.Captures},{name:"Themes",workspaceItem:c.KG.Themes}]},{name:"Visitors",workspaceItem:c.KG.Customers,children:[{name:"Data",workspaceItem:c.KG.Customers}]},{name:"Settings",workspaceItem:c.KG.Account,children:[{name:"Team",workspaceItem:c.KG.Team},{name:"Billing",workspaceItem:c.KG.Billing},{name:"API Keys",workspaceItem:c.KG.ApiKeys},{name:"Integrations",workspaceItem:c.KG.Integrations},{name:"SSO",hidden:!s,workspaceItem:c.KG.Sso}]}]},E=[{name:"Edit",value:c.KA.Edit},{name:"View",value:c.KA.View},{name:"None",value:c.KA.None}],generateOptions=e=>_.qz.includes(e)?E.filte}):E;var RoleEditModal_PermissionsEdit=e=>{let{handleBack:s,onActionSelect:t,permissionsLookup:a}=e,{workspace:r}=(0,m.cF)(),i=(0,m.NK)(r,c.TT.Sso),[o,d]=(0,l.useState)(null),toggleSectio},u=generateSections({ssoEnabled:i}),countChildrenEditView=e=>{let s=0,t=0;return null==e||e.map(e=>{var n;let{workspaceItem:r}=e,l=null===(n=a.get(r))||void 0===n?void 0:n.action;l===c.KA.Edit?s++:l===c.KA.View&&t++}),{editCount:s,viewCount:t}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{onClick:s,className:"text-blue-primary mb-3 text-sm",children:"← Back"}),(0,n.jsx)("div",{className:"",children:u.map(e=>{let s=o===e.workspaceItem,{editCount:r,viewCount:l}=countChildrenEditView(e.children);return(0,n.jsxs)("div",{className:(0,y.AK)("border-b border-gray-100 text-sm"),children:[(0,n.jsxs)("div",{className:"flex items-center justify-between py-3",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("div",{className:"mr-4 font-medium text-slate-700",children:e.name}),(0,n.jsxs)("div",{className:"rounded bg-lime-100 px-1 text-[11px] font-medium leading-4 text-emerald-600",children:[r>0&&"".concat(r," Edit"),l>0&&r>0&&", ",l>0&&"".concat(l," View")]})]}),(0,n.jsxs)("button",{className:"flex",onClem),children:[(0,n.jsxs)("div",{className:"mr-3 text-slate-400",children:[e.children.length," permissions"]}),(0,n.jsx)(p.v4q,{className:(0,y.AK)(s&&"rotate-180","h-4 w-4 text-slate-600")})]})]}),(0,n.jsx)(I.u,{show:s,children:(0,n.jsx)("div",{className:"py-2",children:e.children.map(e=>{let{workspaceItem:s,name:r,hidden:l}=e,i=a.get(s),o=generateOptions(s);return(0,n.jsxs)("div",{className:(0,y.AK)(l&&"hidden","flex w-full items-center justify-between py-1"),children:[(0,n.jsx)("div",{className:"text-slate-500",children:r.toLowerCase()}),(0,n.jsx)("div",{children:(0,n.jsx)(C.Z,{items:o,placeHolder:"Set permission",field:"name",mb:0,className:"w-36 text-sm",onChange:e=>{let{value:n}=e;return t({workspaceItem:s,newAction:n})},selected:null==i?void 0:i.action})})]},s)})})})]},e.workspaceItem)})})]})};let createPermissionsLookup=e=>{let s=new Map;return e.forE,e)),s},previewMutations=e=>{let{permissionsMap:s,pendingMutations:t}=e;for(let{workspaceItem:e,newAction:n}of t){let t=s.get(e);s.set(e,{...t,action:n})}return s},DangerZone=e=>{let{roleId:s,workspaceId:t,onDelete:a}=e,[r,i]=(0,l.useState)(!1),[o,d]=(0,l.useState)(!1),[,c]=v.Db(j),m=(0,l.useCallback)(async()=>{var e;i(!1),d(!0);let{data:n}=await c({roleId:s,workspaceId:t}),r=null==n?void 0:null===(e=n.deleteWorkspaceRole)||void 0===e?void 0:e.error;if(null==r?void 0:r.includes("Members have role")){i(!0);return}d(!1),R.A.success("Role deleted"),null==a||a()},[c,a,s,t]);return(0,n.jsx)("div",{className:"mt-8 w-full",children:(0,n.jsx)("div",{className:"mx-auto w-full max-w-lg rounded-2xl bg-white",children:(0,n.jsx)(u.p,{children:e=>{let{open:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.p.Button,{className:"flex w-full justify-between rounded-lg bg-slate-50 px-4 py-2 text-left text-base font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75",children:[(0,n.jsx)("span",{children:"Danger zone"}),(0,n.jsx)(p.v4q,{className:"".concat(s?"":"rotate-180 transform"," h-5 w-5")})]}),(0,n.jsxs)(u.p.Panel,{className:" pb-2 pt-4",children:[r&&(0,n.jsx)("div",{className:"mb-5 rounded-sm border border-yellow-200 bg-yellow-50 p-2",children:(0,n.jsxs)("div",{className:"text-sm text-yellow-900",children:["Unable to delete. Please make sure no members have this role assigned before deleting.",(0,n.jsx)(h.Z,{href:"/settings/members",children:(0,n.jsx)("a",{className:"ml-1 font-semibold",children:"View team"})})]})}),(0,n.jsx)("button",{disabled:o,onClick:m,className:"btn-red",children:"Delete role"})]})]})}})})})};var SettingsRole_RoleEditModal=e=>{var s;let{open:t,handleClose:a,workspaceId:r,selectedRole:i}=e,{workspace:o}=(0,m.cF)(),[d,c]=(0,l.useState)([]),[,u]=v.Db(k),[p,h]=(0,l.useState)(!1),[g,b]=(0,l.useState)(),f=createPermissionsLookup(null!==(s=null==i?void 0:i.permissions)&&void 0!==s?s:[]);previewMutations({permissionsMap:f,pendingMutations:d});let[,j]=v.Db(w),S=!(null==i?void 0:i.id);(0,l.useEffect)(()=>{t||(h(!1),c([]))},[t]),(0,l.useEffee)},[i]);let saveChanges=async()=>{S?await handleCreateRole():await handleUpdateRole(),a()},handleUpdateRole=async()=>{R.A.promise(new Promise((e,s)=>{u({workspaceId:r,roleId:i.id,name:g,permissionUpdates:d}).then(t=>{let{data:n}=t;(null==n?void 0:n.updateWorkspaceRole)!==null?e():s("Error updating role")})}),{loading:"Saving changes...",success:"Updated role!",error:e=>e})},handleCreateRole=async()=>{g&&R.A.promise(new Promise((e,s)=>{j({data:{workspaceId:r,name:g,permissionUpdates:d}}).then(t=>{let{data:n}=t;(null==n?void 0:n.createWorkspaceRole)!==null?e():s("Error creating role")})}),{loading:"Creating role...",success:"Created role!",er=>e})};return(0,n.jsx)(x.Z,{title:"Editing Role",containerClass:"mt-10",open:t,handleClose:a,handleNext:saveChanges,nextDisabled:!g||0===d.length,nextText:"Save",children:p?(0,n.jsx)(RoleEditModal_PermissionsEdit,{permissionsLookup:f,pendingMutations:d,setPendingMutations:c,onActionSelect:e=>{let{workspaceItem:s,newAction:t}=e,n=d.fil==s);c([...n,{workspaceItem:s,newAction:t}])},handleBack:()=>h(!1)}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.oi,{labelText:"Name",className:"mb-4 w-full",autoFocus:!0,placeholder:"Enter name",value:g,onChange:b}),(null==i?void 0:i.permissions)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("label",{className:"label-small",children:"Permissions"}),(0,n.jsx)("div",{className:"w-96 truncate whitespace-normal text-sm leading-5 text-gray-400",children:generateRolesString({permissions:i.permissions})})]}),(null==d?void 0:d.length)>0&&(0,n.jsxs)("div",{className:"mt-3 rounded border border-slate-100 px-3 py-3",children:[(0,n.jsx)("div",{className:"mb-2 text-sm font-medium",children:"Pending permission changes"}),d.map(e=>{let{newAction:s,workspaceItem:t}=e;return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:(0,y.AK)(s.includes("NONE")?"bg-rose-50 text-rose-600":"bg-lime-100 text-emerald-600","inline-block rounded px-1 text-[11px] font-medium leading-4"),children:[null==t?void 0:t.toLowerCase(),"_",null==s?void 0:s.toLowerCase()]})},"".concat(s,"_").concat(t))})]}),(0,n.jsx)("button",{className:"text-blue-primary mt-3 text-sm",onClick:()=>h(!0),children:"Edit permissions →"}),(null==i?void 0:i.id)&&(null==o?void 0:o.id)&&(0,n.jsx)(DangerZone,{roleId:null==i?void 0:i.id,workspaceId:null==o?void 0:o.id,onDelete:a})]})})};function RolesTable(){let{workspace:e}=(0,m.cF)(),[s,t]=(0,l.useState)(!1),a=(0,m.j_)(c.KG.Team),[r,u]=(0,l.useState)(null),p=a===c.KA.Edit,[{data:x}]=(0,d.Z)({variables:{workspaceId:e.id},pause:!(null==e?void 0:e.id)}),h=(0,m.NK)(e,c.TT.EnhancedPermissions);return a===c.KA.None?(0,n.jsx)(i.Z,{}):(0,n.jsxs)("div",{"data-testid":"roles-".concat(p?"edit":"view"),className:"relative mx-auto w-full max-w-3xl",children:[(0,n.jsx)(o.Z,{title:"Roles",description:"Manage the permissions of members in your workspace.",Actions:(0,n.jsx)(CreateButton,{enabled:h,handlet(!0)})}),e&&(null==x?void 0:x.workspaceRoles)&&(0,n.jsx)(SettingsRole_RolesList,{editAccess:p&&h,workspace:e,workspaceRoles:x.workspaceRoles,openEditRole(!0)}}),h?(0,n.jsx)("div",{"data-testid":"ff-enhanced-permissions"}):(0,n.jsx)("div",{className:"mt-14",children:(0,n.jsx)("div",{"data-testid":"ff-no-enhanced-permissions"})}),(0,n.jsx)(SettingsRole_RoleEditModal,{workspaceId:null==e?void 0:e.id,open:s,selectedRole:r,handleull)}})]})}let CreateButton=e=>{let{enabled:s,handleClick:t}=e;return s?(0,n.jsx)("button",{className:"duration-70 flex items-center justify-between rounded-md border border-zinc-900 bg-zinc-900 px-3 py-2 text-base font-medium text-white transition-all hover:bg-zinc-700 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-300",onClick:t,children:"Create Role"}):(0,n.jsx)("div",{})};var K=t(86045),T=t(81291);function RolePage(){return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(T.Z,{title:"Roles",includeSlug:!0}),(0,n.jsx)(K.Z,{children:(0,n.jsx)(RolesTable,{})})]})}RolePage.getL:e})};var A=RolePage},81021:function(e,s,t){"use strict";t.d(s,{Dx:function(){return isVanitySubdomain},YI:function(){return rn i}});var n,a,r=t(60696);let l=new Set(["app","capture","c","knowledgebase","www","logo","staging","test","demo","guide","flow","live","production","prod","docs","doc","static","assets","js","css","styles","public","private","admin","api","cdn","web","analytics","insights","backend","frontend","browser","bug","bugs","data","deploy","ui","monty",...[...Array(26)97+s))]),isReserveas(e),isValidSlugAndSubdst(e);(n=a||(a={})).RESERVED_SLUG="workspace slug is reserved",n.INVALID_SLUG="workspace slug has invalid character(s)",n.EXISTING_SLUG="workspace slug already exists",n.EXISTING_REDIRECT="workspace slug already exists as redirect";let validateSlugr(s)",isVanitySubdue(e),i=[r.WorkspaceItem.CUSTOMERS,r.WorkspaceItem.SSO]}},function(e){e.O(0,[3211,8426,3265,1617,4637,5837,696,4054,7330,9219,5306,6870,7156,6456,7185,9774,2888875)}),_N_E=e.O()}]);
//# sourceMappingURL=roles-a3a9a00245c7b12b.js.map