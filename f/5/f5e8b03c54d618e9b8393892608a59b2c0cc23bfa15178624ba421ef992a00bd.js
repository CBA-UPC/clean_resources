var ASCDP=window.ASCDP||{};ASCDP.adS=ASCDP.adS||{},ASCDP.adS.rejectIds=function(){let e=document.querySelector('[data-adlibElement="rejectIds"]');e&&(e.href="javascript:void(0);",e.onclick=function(){return function(){let e=ASCDP.pageSet,t=[],n=[],i=new Date,o=i.getTime(),r="#rejectLayer a, #rejectLayer a:visited, #rejectLayer a:hover {text-decoration: underline; color: #000000;}",a=i.getMonth()+3,d=i.getFullYear(),s=(11<a&&(a-=12,d+=1),new Date(d,a,i.getDate()));ASCDP.adS.sendEvent("reject_clicked"),ASCDP.tcf.customVendors.se.store.ids=ASCDP.tcf.customVendors.se.store.ids||{};ASCDP.tcf.customVendors.se.store.ids.mtid&&(ASCDP.tcf.customVendors.se.store.ids.mtid="rejected",ASCDP.tcf.customVendors.se.store.craftDates.mtid=o,ASCDP.tcf.customVendors.se.store.validDates.mtid=s.getTime(),t.push("mtid"),n.push("der TrustPID"),ASCDP.adS.loadModules(["tmi"],function(){ASCDP.partners.tmi.reject()},"partners"));var l=ASCDP.tcf.customVendors.se.store.ids.hans;if(l){let e=new XMLHttpRequest;e.open("DELETE","https://production.la.welt.de/la-interactive-api/participants/advertisement-consent/"+l),e.send(),ASCDP.tcf.customVendors.se.store.ids.hans="rejected",ASCDP.tcf.customVendors.se.store.craftDates.hans=o,ASCDP.tcf.customVendors.se.store.validDates.hans=s.getTime(),t.push("hans"),n.push("der Axel Springer Nutzerkennung")}if(!t.length)return;ASCDP.adS.sendToStore(["se"],t),ASCDP.adS.loadModules(["kobel"],;var c,l=document.querySelectorAll("*"),p=(Array.prototype.slice.call(l).filter(function(e){e.textContent.match(/datenschutz/i)&&"A"===e.tagName&&(c=e.href)}),e.pageCSS+=r,ASCDP.adS.addCSS(r),document.createElement("div")),l=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),h=document.createElement("div"),x=document.createElement("div"),g=document.createElement("div"),f=document.createElement("div");p.id="rejectLayer",p.style.cssText="position: fixed;top: 0px;left: 0px;background: rgba(22, 22, 22, 0.6);height: 100%;width: 100%;z-index: 2000000;",l.style.cssText="position: absolute;width: "+("m"===e.view?"96%":"540px")+";height: "+("m"===e.view?"100%":"270px")+";margin: auto;left: 0;right: 0;"+("m"===e.view?"":"bottom: 0px;top: 0px;background: #FFFFFF;border-radius: 4px;padding: 20px;")+"box-sizing: border-box;box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);",u.style.cssText="m"===e.view?"position: absolute;padding: 0 20px;background: rgb(255, 255, 255);bottom: 0;border-radius: 4px 4px 0 0;":"position: relative;",m.style.cssText="font: bold 16px / 130% Arial;color: #202020;padding: 15px 0;display: flex;justify-content: space-between;",h.style.cssText="height: 25px;"+("m"===e.view?"right: 20px; top: 10px; position: absolute;":"right: 70px; top: 0px;"),x.style.cssText="font: 14px / 18px Arial;color: #1D1D1D; overflow-y: auto;",g.style.cssText="text-align: center;margin:"+("m"===e.view?"20px 0":"20px")+";"+("m"===e.view?"display: flex; flex-direction: column-reverse;":""),f.style.cssText="cursor:pointer;background: "+e.layerConfig.buttonColor+";border: 1px solid "+e.layerConfig.buttonColor+";box-sizing: border-box;border-radius: 3px;display: inline-block;width: "+("m"===e.view?"100%":"200px")+";height: "+("m"===e.view?"35px":"49px")+";"+("m"===e.view?"margin-bottom: 5px;":"margin-left: 15px;")+"position: relative;",h.innerHTML="<img style='width:auto; height:100%;' src='"+e.layerConfig.logoUrl+"' />",m.innerHTML="<span style='max-width: 460px;'>Einwilligung zur Nutzung "+n.join(" und ")+" auf "+e.layerConfig.headerName+" erfolgreich widerrufen</span>",x.innerHTML="<span>Sie haben erfolgreich Ihre Einwilligung zur Nutzung "+n.join(" und ")+" auf "+e.layerConfig.headerName+" widerrufen.<br/><br/><span>Weitere Informationen zu "+n.join(" und ")+" finden Sie in unserer <a href='"+c+"' target='_blank'>Datenschutzerklärung</a>.</span>",f.innerHTML="<span style='color: #FFFFFF;text-decoration: none;height: 16px;display: block;margin: auto;position: absolute;bottom: 0;top: 0;right: 0;left: 0;line-height: 18px;font-size: 16px;font-weight: bold;font-family: Arial;'>Schließen</span>",f.onclic},g.appendChild(f),m.appendChild(h),u.appendChild(m),u.appendChild(x),u.appendChild(g),l.appendChild(u),p.appendChild(l),document.body.appendChild(p)}(),!1})};