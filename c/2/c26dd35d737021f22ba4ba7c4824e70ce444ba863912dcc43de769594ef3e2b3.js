(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"+vLc":function(t,e,n){var r=n("86OQ")(n("k3Kw"),"DataView");t.exports=r},"/C4c":"/Xb4":"1ajc":"1luR":"4cCW":"5HKf":"6gVr":"6lqi":"7S4N":"8RC1":"8qng":"9BlF":"9j/V":function(t,e){t.exports=function(t){return this.__data__.has(t)}},AH9L:AiqX:Cqvr:CyEC:FhyA:function(t,e,n){var r=n("86OQ")(n("k3Kw"),"Promise");t.exports=r},HB6T:JD77:K5Ur:function(t,e,n){var r=n("86OQ")(n("k3Kw"),"WeakMap");t.exports=r},Kdlp:LfdN:function(t,e){t.exports=function(t){return this.__data__.has(t)}},Mo8i:OGZZ:Otch:Pue9:Q14s:QaI2:"Qb+0":"Qdt+":SL9w:XJZ4:XQPB:Xukh:YLSs:ZIP7:ahfy:d7Dj:e1G9:eJGV:iBWD:jp1t:ncNt:function(t,e,n){"use strict";n.d(e,"a",();var r=n("f0GD"),o=n("Bvwu");const i=(t=[])=>((t=[])=>Boolean(t.some((t=>null===t||void 0===t?void 0:t.isTrialingTeams))))(t)||((t=[])=>Boolean(t.some((t=>!(null===t||void 0===t||!t.teamTrialEndDate)))))(t),a=(t=[])=>Boolean(t.some(()),u=(t=[])=>a(t)||((t=[])=>Boolean(t.some((t=>!(null===t||void 0===t||!t.teamAccountEndDate)))))(t),c=(t=[])=>Boolean(t.some((t=>null===t||void 0===t?void 0:t.isTrialingCompanies))),s=(t=[])=>Boolean(t.some(()),f=(t=[])=>c(t)||s(t),l=(t=[])=>Boolean(t.some((t=>{var e;return null===t||void 0===t||null===(e=t.plan)||void 0===e?void 0:e.allowCompanies}))),p=(t=[])=>l(t)||((t=[])=>Boolean(t.some(()))(t),v=(t=[])=>Boolean(t.some((t=>!Object(o.isAdminRole)(null===t||void 0===t?void 0:t.currentUserRole)))),d=(t=[])=>Boolean(t.some(()),b=t=>!i(t)&&!f(t)&&!u(t)&&!p(t)&&!v(t),h=t=>!a(t)&&!v(t),y=j=const g=n("P0XC").a`
  query CurrentUserBFFQuery {
    self {
      email
      fullName
      id
      gravatarUrl
      isAuthenticated
      isDeveloper
      isStaff
      isMasquerade
      accounts {
        results {
          companyAccountEndDate
          currentUserRole
          hasBeenInCompaniesTrial
          companiesTrialEndDate
          id
          isTrialing
          isTrialingCompanies
          plan {
            allowCompanies
            hasTeams
            name
            id
          }
          teamAccountEndDate
        }
      }
    }
  }
  #  NOTE: this is necessary, at least for the time being, because our direct graphql dependency is being overruled by (our direct dependency) graphql-tag's own dependency of graphql (https://github.com/apollographql/apollo-link/issues/601)
`,m=()=>{const{data:t,loading:e}=Object(r.c)(g,{ssr:!1});return{currentUser:(t=>{if(!t||!t.self)return null;const{email:e,fullName:n,id:r,gravatarUrl:o,isDeveloper:i,isAuthenticated:a,isMasquerade:u,isStaff:f,accounts:g}=t.self,m=null===g||void 0===g?void 0:g.results,_=null===m||void 0===m?void 0:m.find((),x=_&&_.companiesTrialEndDate;return{email:e,fullName:n,hasBeenInCompaniesTrial:s(m),hasMemberRole:v(m),hasTeamAccount:d(m),id:r,imageUrl:o,isCompaniesAccount:l(m),isDeveloper:Boolean(i),isEligibleForCompanyPurchase:j(m),isEligibleForCompanyTrial:y(m),isEligibleForTeamPurchase:h(m),isEligibleForTeamTrial:b(m),isLoggedIn:a,isMasquerade:u,isOrWasCompaniesAccount:p(m),isStaff:Boolean(f),isTrialingCompanies:c(m),companiesTrialEndDate:x}})(t),isLoading:e}},_=t=>{const e=m();return t.children(e)};e.b=m},o2S2:ot69:p1fS:pyZk:"s54/":s7Ek:tzZW:u395:vi9O:wiyC:]);