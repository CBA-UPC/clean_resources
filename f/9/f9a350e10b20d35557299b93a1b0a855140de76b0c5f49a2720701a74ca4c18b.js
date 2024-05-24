var script=document.getElementById('consent-tag').getAttribute('data-tag');var CONSENT_API_URL=document.getElementById('consent-tag').getAttribute('data-api-url')||"https://consent.navegg.com";var url=`${CONSENT_API_URL}/api/tags/alert/get?id=${script}`;var request=new XMLHttpRequest();var isTag=document.getElementById('consent-tag-consented');request.open('GET',url,false);var cookie=getCookie();if(cookie!=undefined||cookie!=null){cookie=JSON.parse(cookie);}
var tagsData=cookie?.tags?cookie?.tags:null;request.onload=function(){if(request.status>=200&&request.status<400){var data=JSON.parse(this.response);let channel=data?.instalation_tab?.channel_url;let host=window.location.host;if(channel.includes(host)!=true){return 0;}
const html=document.createElement('div');var body={channel_id:data?.instalation_tab?.channel_id,cookie:cookie?cookie?.cookie:null,tags:tagsData,};html.innerHTML=`<link rel="stylesheet" href="https://tag-provider.navegg.com/tag/styles.css">
      <button class="consent-tag-consented" id="consent-tag-consented" onclick="openPopUp()" style="width: 60px; height: 60px; z-index: 9999; display: none; align-items: center; justify-content: center; position: fixed;bottom: 20px; left: 10px; color: #fff; background: rgb(29, 155, 240); box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.08) 0px 6px 16px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px; border: 1px solid rgb(29, 155, 240); border-radius: 6px;">
        <img src="https://tag-provider.navegg.com/tag/icon-consented.svg" alt="consent" />
      </button>

      <div class="consent-popup" id="home-tag-consent" style=" left: 10px;width: 100%;bottom: 20px;display: none;padding: 20px;z-index: 99999;position: fixed;max-width: 380px;background: #fff!important;border-radius: 4px;flex-direction: column;box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.08) 0px 6px 16px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
        <div class="header-popup" style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 18px; font-weight: 700; color: #333 !important;">Controle sua privacidade</span>
          <button class="consent-btn-blank" style="padding: 0!important;height: auto!important;border: 0; background: transparent; font-size: 18px; font-weight: 700; color: rgb(29, 155, 240) !important; line-height: normal;box-shadow: none;cursor: pointer;" onclick="closePopUp()">X</button>
        </div>
        <p style="font-size: 12px; font-weight: 400; color: #333 !important; line-height: normal;margin-bottom: 0;">${
data?.instalation_tab?.channel_text
}</p>
        <div class="links-consent" style="display: flex;margin-top: 20px;align-items: center;justify-content: space-between;">
          <a class="consent-link" style="font-size: 12px;cursor: pointer;font-weight: 700;text-decoration: underline;color: rgb(29, 155, 240) !important;line-height: normal;" href="${
data?.terms_tab?.privacy_url
}" target="_blank">Política de privacidade</a>
          <a class="consent-link" style="font-size: 12px;cursor: pointer;font-weight: 700;text-decoration: underline;color: rgb(29, 155, 240) !important;line-height: normal;" href="${
data?.terms_tab?.terms_url
}" target="_blank">Termos de uso</a>
          <button style="text-transform: none;font-family: inherit;font-size: 12px;padding: 0!important;height: auto!important;border: 0; background: transparent; box-shadow: none;line-height: normal;color: rgb(29, 155, 240) !important;" onclick="openOptOut()">
            <a class="consent-link" style="font-size: 12px;cursor: pointer;font-weight: 700;text-decoration: underline;color: rgb(29, 155, 240) !important;line-height: normal;">Opt-Out</a>
          </button>
        </div>
        <div class="consent-buttons" style="margin-top: 20px;display: flex;align-items: center;justify-content: space-between;">
          <button class="consent-btn-blank" style="height: auto !important;width: 48%;display: flex;align-items: center; border-radius: 4px;justify-content: center;padding: 15px;line-height: normal;cursor: pointer;font-size: 12px;font-weight: bold;text-align: center;background: #fff!important; color: rgb(29, 155, 240) !important;border: 1px solid rgb(29, 155, 240) !important; box-shadow: none;font-size: 11px;font-family: inherit;text-transform: uppercase;" onclick="openTagOptions()">Ver opções</button>
          <button class="consent-btn" id="consent-save-all" style="height: auto;width: 48%;padding: 15px;color: #fff !important;display: flex; border-radius: 4px;justify-content: center;align-items: center;line-height: normal;cursor: pointer;font-weight: 500;text-align: center;background: rgb(29, 155, 240);border: 1px solid rgb(29, 155, 240);box-shadow: none;font-size: 11px;text-transform: uppercase;font-family: inherit;" onclick="saveAllOptions()">Aceitar Todos</button>
        </div>
      </div>

      <div class="consent-popup-tags" id="consent-tags" style="z-index: 99999;left: 10px;width: 100%;bottom: 20px;display: none;padding: 20px;max-width: 380px;background: #fff;border-radius: 4px;position: fixed;flex-direction: column;box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.08) 0px 6px 16px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
        <div class="consent-header-tags" style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 18px; font-weight: 700; color: #333;">Quem pode usar seus dados?</span>
          <button class="consent-btn-blank" style="padding: 0!important;height: auto!important;border: 0; background: transparent; font-size: 18px; font-weight: 700; color: rgb(29, 155, 240) !important; line-height: normal;box-shadow: none;cursor: pointer;"  onclick="closeTagOptions()">X</button>
        </div>
        <div class="consent-tags-body" style="display: flex; flex-direction:column; margin-top: 20px; max-height: 350px; overflow:auto;">
        </div>
        <div class="cosent-terms" style="margin: 20px 0;display: flex;align-items: center;justify-content: flex-start;">
          <label style="display: flex;align-items: center;justify-content: center;display: block;margin: 0;color: rgb(29, 155, 240);margin: 0 30px 0 0;">
          <input type="checkbox" checked required value="true" style="appearance: auto;visibility: visible;opacity: 1;height: 20px;width: 20px;background: rgb(29, 155, 240);"/>
          </label>
          <span style="font-size: 14px;">Aceito os <a href="${
data?.terms_tab?.terms_url
}" class="consent-link">termos de uso</a> deste site</span>
        </div>
        <button class="consent-btn" style="height: auto;width: 100%;padding: 15px;color: #fff !important;display: flex; border-radius: 4px;justify-content: center;align-items: center;line-height: normal;cursor: pointer;font-weight: 500;text-align: center;background: rgb(29, 155, 240);border: 1px solid rgb(29, 155, 240);box-shadow: none;font-size: 11px;text-transform: uppercase;font-family: inherit;" onclick="saveOptions()">Salvar Preferências</button>
      </div>

      <div class="consent-opt-out" id="consent-opt-out" style="top: 50%; left: 50%; width: 100%; max-width: 600px; max-height: 600px; height: 100%; display: none; background: #fff; position: fixed; z-index: 99999; flex-direction: column; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;padding: 0 40px 40px 40px;transform: translate(-50%, -50%);border-radius: 6px;">
        <div class="consent-header-opt-out" style="height: 90px; padding: 20px 0;display: flex; justify-content: space-between; align-items: center; box-shadow: none;">
          <span style="font-size: 16px; font-weight: 500; color: #333;padding: 0 0 0 20px;font-family: inherit;">Central de Privacidade</span>
          <button class="consent-btn-blank" style="border: 0; background: transparent; font-size: 18px; font-weight: 500; color: rgb(29, 155, 240) !important;padding: 0;box-shadow: none;font-family: inherit;cursor: pointer;" onclick="closeOptOut()">X</button>
        </div>
        <div class="consent-opt-out-body" style="display: block;padding: 0;overflow: auto;margin: 0 auto;">
        <section class="consent-opt-out-section" style="margin: 0 20px 0 0;display: flex;
        flex-direction: column;">
          <img class="consent-logo-opt-out" style="margin: 0 auto;" src="${
data?.optout_tab?.logo!=null&&data?.optout_tab?.logo!=undefined?data?.optout_tab?.logo:"https://tag-provider.navegg.com/tag/logo.svg"
}" alt="${data?.instalation_tab?.channel_name}" />
          <p style="font-size: 14px; font-weight: 400;font-family: inherit;line-height: 22px;margin-top: 15px;">${
data?.optout_tab?.intro_text
}</p>
          <div class="consent-buttons" style="display: flex;justify-content: space-between;align-items: center;">
            <a class="consent-btn" href="${data?.terms_tab?.privacy_url}" style="border-radius: 4px;height: auto;width: 48%;padding: 15px;color: #fff !important;display: flex; border-radius: 4px;justify-content: center;align-items: center;line-height: normal;cursor: pointer;font-weight: 500;text-align: center;background: rgb(29, 155, 240);border: 1px solid rgb(29, 155, 240);box-shadow: none;font-size: 11px;text-transform: uppercase;font-family: inherit;" target="_blank">Política de Privacidade</a>
            <a class="consent-btn" href="${data?.terms_tab?.terms_url}" style="border-radius: 4px;height: auto;width: 48%;padding: 15px;color: #fff !important;display: flex; border-radius: 4px;justify-content: center;align-items: center;line-height: normal;cursor: pointer;font-weight: 500;text-align: center;background: rgb(29, 155, 240);border: 1px solid rgb(29, 155, 240);box-shadow: none;font-size: 11px;text-transform: uppercase;font-family: inherit;" target="_blank">Termos de Uso</a>
          </div>
        </section>

        <section class="consent-opt-out-section" style="margin: 30px 20px 0 0;display: flex;flex-direction: column;">
          <span style="font-size: 16px; font-weight: 500; color: #333;font-family: inherit;">Baixe os seus dados</span>
          <p style="font-size: 14px; font-weight: 400;font-family: inherit;line-height: 22px;margin-top: 15px;">${
data?.optout_tab?.data_req_text
}
          </p>
          <input style="height: 40px;margin: 10px 0;padding: 10px;border: 1px solid rgb(29, 155, 240);border-radius: 4px;color: #333;"  type="email" placeholder="Insira aqui o seu e-mail..." name="email-download" required  id="email-download"/>
          <button class="consent-btn" id="consent-save-all" style="height: auto;width: 100%;padding: 15px;color: #fff !important;display: flex; border-radius: 4px;justify-content: center;align-items: center;line-height: normal;cursor: pointer;font-weight: 500;text-align: center;background: rgb(29, 155, 240);border: 1px solid rgb(29, 155, 240);box-shadow: none;font-size: 11px;text-transform: uppercase;font-family: inherit;" onclick="sendDownload()">Solicitar Dados</button>
        </section>

          <section class="consent-opt-out-section" style="margin: 30px 20px 0 0;display: flex;flex-direction: column;">
            <span style="font-size: 16px; font-weight: 500; color: #333;font-family: inherit;">Exclua seus dados</span>
            <p style="font-size: 14px; font-weight: 400;font-family: inherit;line-height: 22px;margin-top: 15px;">${
data?.optout_tab?.data_exc_text
}</p>
            <input style="height: 40px;margin: 10px 0;padding: 10px;border: 1px solid rgb(29, 155, 240);border-radius: 4px;color: #333;" type="email" placeholder="Insira aqui o seu e-mail..." name="email-exclusion" required  id="email-exclusion"/>
            <button class="consent-btn" id="consent-save-all" style="height: auto;width: 100%;padding: 15px;color: #fff !important;display: flex; border-radius: 4px;justify-content: center;align-items: center;line-height: normal;cursor: pointer;font-weight: 500;text-align: center;background: rgb(29, 155, 240);border: 1px solid rgb(29, 155, 240);box-shadow: none;font-size: 11px;text-transform: uppercase;font-family: inherit;" onclick="sendExclusion()">Solicitar Exclusão</button>
          </section>

          <section class="consent-opt-out-section" style="margin: 30px 20px 0 0;display: flex;flex-direction: column;">
            <span style="font-size: 16px; font-weight: 500; color: #333;font-family: inherit;">Ainda precisa de ajuda? Fale com os responsáveis</span>
            <p style="font-size: 14px; font-weight: 400;font-family: inherit;line-height: 22px;margin-top: 15px;">Ao solicitar a exclusão dos dados, o ${
data?.instalation_tab?.channel_name
} enviará uma solicitação para os responsáveis do site a fim de que removam o e-mail, se informado, e todos os demais dados associados a você. Além disso, você receberá instruções através de um link de como remover todos os cookies do ${
data?.instalation_tab?.channel_name
} do seu navegador.</p>

            ${data?.optout_tab?.operator_email!=null&&data?.optout_tab?.operator_email!=''?` <span style="font-family: inherit;font-family: inherit;margin-top: 20px;color: rgb(29, 155, 240); font-size: 12px; font-weight: 600; line-height: 24px;">${
data?.optout_tab?.operator_name
} <br/>Operador de Dados</span>
            <a class="consent-link" style="font-size: 12px;cursor: pointer;font-weight: 700;text-decoration: underline;color: rgb(29, 155, 240) !important;line-height: normal;" href="mailto:${
data?.optout_tab?.operator_email
}">${data?.optout_tab?.operator_email}</a>`:''}
           
            ${data?.optout_tab?.controller_email!=null&&data?.optout_tab?.controller_email!=''?`<span style="font-family: inherit;margin-top: 30px;color: rgb(29, 155, 240); font-size: 12px; font-weight: 600; line-height: 24px;">${
data?.optout_tab?.controller_name
} <br/>Controlador de Dados</span>
            <a class="consent-link" style="font-size: 12px;cursor: pointer;font-weight: 700;text-decoration: underline;color: rgb(29, 155, 240) !important;line-height: normal;" href="mailto:${
data?.optout_tab?.controller_email
}">${data?.optout_tab?.controller_email}</a>`:''}
            
          </section>
        </div>
      </div>

      <div class="consent-opt-out-succes close" id="consent-opt-out-succes" style="top: 50%; left: 50%; width: 100%; max-width: 600px; max-height: 600px; height: 100%; display: none; background: #fff; position: fixed; z-index: 99999; flex-direction: column; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;padding: 0 40px 40px 40px;transform: translate(-50%, -50%);border-radius: 6px;">
        <div class="consent-header-opt-out" style="height: 90px; padding: 20px 0;display: flex; justify-content: space-between; align-items: center; box-shadow: none;">
          <span style="font-size: 16px; font-weight: 500; color: #333;font-family: inherit;">Central de Privacidade</span>
          <button class="consent-btn-blank" style="padding: 0!important;height: auto!important;border: 0; background: transparent; font-size: 18px; font-weight: 700; color: rgb(29, 155, 240) !important; line-height: normal;box-shadow: none;cursor: pointer;" onclick="closeOptOutSuccess()">X</button>
        </div>
        <div class="consent-opt-out-body" style="display: block;padding: 0;overflow: auto;margin: 0 auto;">
          <section class="consent-opt-out-section" style="margin: 0 20px 0 0;display: flex;flex-direction: column;">
            <span style="font-size: 18px; font-weight: 700; line-height: 40px;">Tudo certo!</span>
            <p style="font-size: 14px; font-weight: 400;font-family: inherit;line-height: 22px;margin-top: 15px;">Sua solicitação foi registrada com sucesso, em breve você será receberá um e-mail da nossa equipe de governança de dados.</p>
            <div class="consent-buttons" style="justify-content: flex-end; align-items: center; display: flex;">
              <button onclick="closeOptOutSuccess()" class="consent-btn" style="height: auto;width: 100%;padding: 15px;color: #fff !important;display: flex; border-radius: 4px;justify-content: center;align-items: center;line-height: normal;cursor: pointer;font-weight: 500;text-align: center;background: rgb(29, 155, 240);border: 1px solid rgb(29, 155, 240);box-shadow: none;font-size: 11px;text-transform: uppercase;font-family: inherit;">Entendi, quero fechar a janela</button>
            </div>
          </section>
        </div>
      </div>
      `;if(isTag){document.body.replaceChild(html,isTag);}else{document.body.appendChild(html);}
if(tagsData==null){tagsData={};Object.keys(data?.tags_tab).forEach((item)=>{tagsData[item]=false;});}
Object.keys(data?.tags_tab).forEach((item)=>{const listTags=document.querySelector('.consent-tags-body');const tags=document.createElement('div');tags.setAttribute('class','consent-tags');tags.setAttribute('data-key',item);tags.innerHTML=`
          <div class="consent-wrapper-tag" id="${
data?.tags_tab[item]?._id
}" style="display: flex; align-items: center; margin: 10px 0;">
            <div class="consent-header-tag" style="display: flex; flex-direction:column; width: 310px;">
              <span style="font-size: 16px; font-weight: 400; color: rgb(29, 155, 240); line-height: 36px;">${
data?.tags_tab[item]?.name
}</span>
              <span style="font-size: 12px; font-weight: 400; color: #333;">${
data?.tags_tab[item]?.required==true?data?.tags_tab[item]?.description!=null?data?.tags_tab[item]?.description+'(Obrigatório)':'(Obrigatório)':data?.tags_tab[item]?.description!=null?data?.tags_tab[item]?.description:''
}</span>
            </div>
            <label class="consent-tag-switch" style="position: relative;display: inline-block;width: 60px;height: 34px;">
              <input type="checkbox" id="tag-${
data?.tags_tab[item]?._id
}" checked="${data?.tags_tab[item]?.required}" required="${
data?.tags_tab[item]?.required
}" value="true" style="opacity: 0;width: 0;height: 0;">
              <span class="consent-tag-slider consent-tag-round"></span>
            </label>
          </div>
        `;listTags.appendChild(tags);if(cookie?.tags){document.getElementById('tag-'+item).checked=cookie?.tags[item];}
if(data?.tags_tab[item].required==true){document.getElementById('tag-'+item).checked=true;document.getElementById('tag-'+item).disabled=true;}});body={channel_id:data?.instalation_tab?.channel_id,cookie:cookie?cookie?.cookie:null,tags:tagsData,};if(!cookie){closeConsentBtn();openPopUp();}else{openConsentBtn();}
sendAcept(body);}else{return;}};request.send();var response=JSON.parse(request?.response);function closePopUp(){const element=document.getElementById('home-tag-consent');element.style.display='none';}
function closeTagOptions(){const element=document.getElementById('consent-tags');element.style.display='none';openConsentBtn();}
function closeOptOut(){const element=document.getElementById('consent-opt-out');element.style.display='none';openConsentBtn();}
function closeConsentBtn(){const element=document.getElementById('consent-tag-consented');element.style.display='none';}
function openConsentBtn(){const element=document.getElementById('consent-tag-consented');element.style.display='flex';}
function openPopUp(){closeConsentBtn();const element=document.getElementById('home-tag-consent');element.style.display='flex';}
function openTagOptions(){closePopUp();const element=document.getElementById('consent-tags');element.style.display='flex';}
function openOptOut(){closePopUp();const element=document.getElementById('consent-opt-out');element.style.display='flex';}
function closeOptOutSuccess(){const element=document.getElementById('consent-opt-out-succes');element.style.display='none';openConsentBtn();}
function openOptOutSuccess(){closeOptOut();const element=document.getElementById('consent-opt-out-succes');element.style.display='flex';}
function getCookie(){let name='consent.tag';let cookie={};document.cookie.split(';').forEach(function(el){let[k,v]=el.split('=');cookie[k.trim()]=v;});return cookie[name];}
function setCookie(data){let body=data;let date=new Date();date.setTime(date.getTime()+60*60*24*350);let expires='; expires='+date.toGMTString();let coo='consent.tag'+'='+JSON.stringify(body)+expires+'; path=/';document.cookie=coo;}
async function sendAcept(body){const request=new XMLHttpRequest();const url=`${CONSENT_API_URL}/api/tags/access/`;request.open('POST',url,true);request.setRequestHeader('Content-Type','application/json');cookie=getCookie();request.onload=function(){if(!cookie){const userCookie=JSON.parse(this.responseText);const coo={cookie:userCookie?.user_cookie};setCookie(coo);}};request.send(JSON.stringify(body));return request.response;}
function saveAllOptions(){cookie=JSON.parse(getCookie());const btn=document.getElementById('consent-save-all');let data={channel_id:response?.instalation_tab?.channel_id,cookie:cookie?.cookie,nvg_id:null,tags:tagsData,};Object.keys(response.tags_tab).forEach((item)=>{tagsData[item]=true;});Object.keys(response.tags_tab).forEach((item)=>{document.getElementById(`tag-${item}`).checked=true;if(document.getElementById(`tag-${item}`).checked==true){btn.classList.add(item);}else{btn.classList.remove(item);}});setCookie(data);const request=new XMLHttpRequest();const url=`${CONSENT_API_URL}/api/tags/save-options/`;request.open('POST',url,true);request.setRequestHeader('Content-Type','application/json');request.send(JSON.stringify(data));closePopUp();closeTagOptions();}
function saveOptions(){cookie=JSON.parse(getCookie());const btn=document.getElementById('consent-save-all');let data={channel_id:response?.instalation_tab?.channel_id,cookie:cookie?.cookie,nvg_id:null,tags:tagsData,};Object.keys(response.tags_tab).forEach((item)=>{tagsData[item]=document.getElementById(`tag-${item}`).checked;if(document.getElementById(`tag-${item}`).checked==true){btn.classList.add(item);}else{btn.classList.remove(item);}});setCookie(data);const request=new XMLHttpRequest();const url=`${CONSENT_API_URL}/api/tags/save-options/`;request.open('POST',url,true);request.setRequestHeader('Content-Type','application/json');request.send(JSON.stringify(data));closePopUp();closeTagOptions();}
function sendDownload(){cookie=JSON.parse(getCookie());let data={id:cookie?.cookie,email:document.getElementById('email-download').value,channel_id:response?.instalation_tab?.channel_id,request_type:'download',};const request=new XMLHttpRequest();const url=`${CONSENT_API_URL}/api/request/download-request/`;request.open('POST',url,true);request.setRequestHeader('Content-Type','application/json');request.send(JSON.stringify(data));openOptOutSuccess();}
function sendExclusion(){cookie=JSON.parse(getCookie());let data={id:cookie?.cookie,email:document.getElementById('email-exclusion').value,channel_id:response?.instalation_tab?.channel_id,request_type:'exclusion',};const request=new XMLHttpRequest();const url=`${CONSENT_API_URL}/api/request/new-request/`;request.open('POST',url,true);request.setRequestHeader('Content-Type','application/json');request.send(JSON.stringify(data));openOptOutSuccess();}