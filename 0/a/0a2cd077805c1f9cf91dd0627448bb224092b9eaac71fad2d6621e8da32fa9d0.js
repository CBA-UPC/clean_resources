var ASCDP=window.ASCDP||{};ASCDP.adS=ASCDP.adS||{},ASCDP.adS.renderAd=function(t,r){let o=ASCDP.pageSet,n=ASCDP.adS;t||n.err({message:"call to renderAd without slotName param",stack:"https://www.asadcdn.com/adlib/libmodules/renderAd.js"},{caller:"renderAd"},"global"),window.adSSetup&&!1!==adSSetup.hasPageAdMi&&n.loadModules(["sightLoader","clearAdElt","defineTag"],function(){let e=n.adElts[t]||n.initAdElt(t),d=(new Date).getTime();if(!n.prevOn||-1!==location.search.indexOf(t)){e.relCount||o.placeholder.disablePlaceholders||t.match(/sky/)||e.plhldNode||n.addPlaceholder(t,r);var a=new RegExp(t+"($|\\|)","i");if(o.adPlacements.join("|").match(a)||o.adPlacements.push(t),e.isSightloader)n.sightLoader();else if(n.globalSet)if(e.renderAdReload||n.clearAdElt(t),n.v3loading)e.renderAdReload=setTimeout(function(){ASCDP.adS.renderAd(t)},50);else if(e.lastLoad+o.lblk<=d)if(n.tsn=Math.round(1e13*Math.random()),e&&(e.lastLoad=d),apntag.requests&&apntag.requests.cbCalled){for(var l in n.adElts)n.adElts.hasOwnProperty(l)&&clearTimeout(n.adElts[l].renderAdReload);e.renderAdReload=!1,n.sightLoader()}else e.renderAdReload=setTimeout(50)}})};