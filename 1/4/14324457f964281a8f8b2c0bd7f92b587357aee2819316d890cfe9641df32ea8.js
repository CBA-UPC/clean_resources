// ############### CONSTANTES ###############
const PAYWALL_EI_DIV = '#paywall-dynamic';
const POOOL_WIDGET = '#poool-widget';
const PAYWALL_URL_ABONNEMENT = '/nos-offres-abonnements';
const PAYWALL_URL_ABONNEMENT_CLUB_ABO = '/nos-offres-leclub-premium';
const URL_LOGIN = '/e-services/Login';
const PAYWALL_URL_PLUS_INFOS_CLUB_ABO = '/leclub/pourquoi-le-club#faq';
// ############### END CONSTANTES ###############

// ############### DIDOMI ###############
window.didomiOnReady = window.didomiOnReady || [];
window.didomiOnReady.push(function (Didomi) {
  Didomi.getObservableOnUserConsentStatusForVendor("c:poool-ewZ66egf").subscribe(function (consentStatus) {
      if (consentStatus === undefined) {
          // The consent status for the vendor is unknown
      } else if (consentStatus === true) {
          PooolLoading();
      } else if (consentStatus === false) {
          if(getNiveauConsultation()=='Accroche'){
            // if paywall Poool not exists
            if(!(document.querySelector('#poool-widget .p3-component'))){
              paywallShow();
            }   
          }
      }
  });
});   
// ############### END DIDOMI ###############

function PooolLoading() {
  window["poool"] = window["poool"] || 
  script1();
  script2();
  script3();
  script31();
  script4();
};



function script2(){
  if(isDebug()) poool('config', 'debug', true);  
  poool("config", "user_is_premium", isAbonne());
  poool("config", "cookies_enabled", isPooolConsented());

  poool('config', 'app_name', getAppName());
  poool('config', 'subscription_url', PAYWALL_URL_ABONNEMENT +'?_cm_callback={return_url}');
  poool('config', 'login_url', URL_LOGIN +'?_cm_callback={return_url}');

  if ( isConnected() ) {
    	poool('config', 'login_button_enabled', false);
  }

  if(getTypeDePage() == 'Article'){
    var pwTxtDsc='<p></p>';
    if(pwRmnCnt!='100'){
      pwTxtDsc='Il vous reste '+pwRmnCnt+'% de cet article à lire.';
    }
    poool('variable','remaining_content',pwTxtDsc);
  }

  if(isAccountPooolCreatedBefore24h()){
    poool('config', 'force_widget', 'invisible');
  }  

  var contextID = getCustomContextID();
  // ---------- POOOL CONTEXT ----------
  if(contextID){
    console.log('Poool : context \"'+contextID+'\"');    
    poool('config','context',contextID);
  }

  // ---------- POOOL CUSTOM-SEGMENT ----------
  var segmentID = getCustomSegmentID();  
  if(segmentID){
    console.log('Poool : custom_segment \"'+segmentID+'\"');    
    poool('config','custom_segment',segmentID);
  }

  // Config styles par défault
  setConfigStyle();

  // Evite le débloquage d'article quand le webservice qui récupère le contenu n'est pas disponible, en mode preview
  if( window.location.href.includes("preview=true") ) {
    poool('config', 'force_widget', 'none');
  }
}

function script3(){
  // ---------- POOOL PAYWALL INFO ----------
  var pooolPaywall={};
    _at_event_pp = {
    'name': 'publisher.display',
    'params': {
      'onsitead_type': 'Publisher',
      'onsitead_category': 'Acquisition',
      'onsitead_campaign': 'Paywall',
      'onsitead_advertiser': 'Poool'
    }
  };
  poool('event', 'onIdentityAvailable', function(event) {
    pooolPaywall = {
      'journey': event.journey_name,
      'segment': event.segment_slug,
      'trigger': event.trigger
    }
    _at_event_pp['params']['onsitead_creation'] = (pooolPaywall.journey !== undefined) ? pooolPaywall.journey : pooolPaywall.trigger ;
    _at_event_pp['params']['onsitead_format'] = event.widget;
  });  
  // ---------- POOOL EVENTS ----------   
	poool('event', 'onError', function(error) { paywallShow(); });
  poool('event', 'onOutdatedBrows   });
  poool('event', 'onReady', function(event) {
    if(window.performance){
      performance.mark("Paywall Poool chargé et affiché");
    }
    paywallRemove();    
  });
  poool('event', 'onRegint) {});  

  // paywall display
  poool('event', 'onPaywall;
  });
  
  // paywall clicks
  poool('event', 'onSubscribeClick', function(event) {
    click_txt='découvrez-nos-offres';
    // AT Event
    _at_event_pp['name'] = 'publisher.click';
    _at_event_pp['params']['click_item_type'] = click_txt;
    sendATEvents([_at_event_pp]);
  });

  poool('event', 'onLoginClick', function(event) {
    click_txt='je-me-connecte';
    // AT Event
    _at_event_pp['name'] = 'publisher.click';
    _at_event_pp['params']['click_item_type'] = click_txt;
    sendATEvents([_at_event_pp]);
  });
    
  poool('event', 'onDiscoveryLinkClick', function(event) {
    click_txt='découverte-url';
    // AT Event
    _at_event_pp['name'] = 'publisher.click';
    _at_event_pp['params']['click_item_type'] = click_txt;
    sendATEvents([_at_event_pp]);
  });
  
  poool('event', 'onCustomButtonClick', function(event) {
    click_txt='Custom-button-clic';
    // AT Event
    _at_event_pp['name'] = 'publisher.click';
    _at_event_pp['params']['click_item_type'] = click_txt;
    sendATEvents([_at_event_pp]);
  });
  // Actions aux déblocage du contenu par le widget POOOL   
  poool('event', 'onRelease', function(event) {
      $('body').addClass('loadingContent');
      // Récupération du contenu via le webservice
      var $retrievedContent = jQuery.getJSON( 'https://' + window.location.host  + '/services/grdc/detail?key=' + getWebContentKey())
      .done(function( data ) {  
        var $contentDiv = $('article.viewPartial');
        $contentDiv.find('.fullDetailActions').remove();
        $contentDiv.find('.illustration').remove();
        var $dataHtml = data.html;
        $contentDiv.find('.infos').after($dataHtml);
        $('.retrievedBodyContent').insertBefore( $contentDiv.find('.col_main #poool-widget') );

        $contentDiv.removeClass('locked');

        // Retirer le preview content
        $("div.previewContent").remove();
  
        // Ajout du CSS et du JS qui INIT les éléments importés
        //$('head').append(data.css + data.js);
      $('head').append(data.js);
        formatWsContent();
      
        $('.mainContent .accroche').addClass('unlocked');
        $('body').removeClass('loadingContent');
  
        /* CODE TEMPORAIRE pour afficher les contenus media 
        Ce code doit être placé dans formatWsContent()*/
        ConsentContent();
        if ($('.digitekaContent').length > 0) {
          $('.digitekaContent').each(function () {
            var src = $(this).attr('data-src');
            var splitSrcBefore = src.split('mdtk/')[1]
            var splitSrcAfter = splitSrcBefore.split('/')[0];
            var initial_mdtk = splitSrcAfter;
            $(this).attr('src', src);
          });
        }
     page');
      });
        
  });
}

function script31(){
  // ---------- POOOL FORM EVENT ----------
  poool('event', 'onFormSubmit', function(event){
    form_name = event.name;
    if(form_name.match(/^Collect Lead/i)){    
      var optin=true;
      if(form_name.match(/sans optin/i)) optin=false;    
      invalid = myNewsletterWS(event.fields,optin);
    }else{
      console.log('Poool : form_name "'+form_name+'" not match');
      invalid.push({});
    }
    
    if(invalid.length>0){
      return invalid;
    }else{
    }
  });
}

function script4(){
  // For integrated mode, the page url doesn't change => WARNING => only chaging data is blocInfoTitle 
	var pagetitle = document.getElementsByClassName("ct_blocInfoTitle"); 
	var paymentOk = false;
  	if(pagetitle.length > 0 && window.location.pathname.toLowerCase() == "/e-services/boutique/commande"){
  		if(pagetitle[0].textContent.toLowerCase().indexOf('félicitation') >=0){
    		paymentOk = true;
    	}
  	}

  	//Manage every version of the conversion funnel 
	if(
    window.location.pathname.toLowerCase() == "/e-services/boutique/callbacktpeok" 
    || window.location.pathname.toLowerCase() == "/e-services/boutique/achatok" 
    || window.location.pathname.toLowerCase() == "/e-services/funnel/abonnement-active" 
    || window.location.pathname.toLowerCase() == "/e-services/funnel/abonnement-essentiel-active"
    || window.location.pathname.toLowerCase() == "/e-services/funnel/abonnement-integral-active"
    || window.location.pathname.toLowerCase() == "/e-services/funnel/abonnement-papier-active"
    || window.location.pathname.toLowerCase() == "/e-services/funnel/abonnement-premium-active"
    || paymentOk == true){

      	poool("config", "user_is_premium", false);
  		  poool("send", "conversion");
  	}
	poool("send", "page-view", getType());
}

function getType(){
  if(window.location.pathname.startsWith("/nos-offres-abonnements") || window.location.pathname.startsWith('/e-services/boutique/'))	{
    return "subscription";
  }
  if(getTypeDePage() == "Article" && getCommercialisation() == "Oui"){
      return "premium";
  }
  if(getTypeDePage() == "Article" && getCommercialisation() == "Non"){
  	return "free";
  }

  return "page";
}

function sendATEvents(params){  
  if(typeof _gtm_at_events === 'undefined'){
    _gtm_at_events = params;
  }else{
    if(_gtm_at_events.length>0)_events.push(x) });
    else
      _gtm_at_events = params;
  }
  dl={'event':'gtm.at.events'}
  dl['data'] = _gtm_at_events;
  dataLayer.push(dl);
} 

function paywallShow(){
  divpd = document.querySelector(PAYWALL_EI_DIV);
  if(!(divpd)){
      if(e=document.querySelector(POOOL_WIDGET)){
      divpd=document.createElement('div');
      divpd.style.minHeight='400px';
      divpd.id = PAYWALL_EI_DIV; 
      if(trigramme === 'JDE'){
        divpd.innerHTML=(isEspaceEnseignants()) ? myPaywallEspaceEnseignants() : myPaywallHTML(); 
      }
      else {
        divpd.innerHTML=(isClubAbo()) ? myPaywallLeClubHTML() : myPaywallHTML(); 
      }      
      e.parentNode.insertBefore(divpd,e);
      console.log('paywall added');
      }
  }
  divpd.style.display='block';
  dataLayer.push({'event':'paywall-ready'});
}

function paywallRemove(){
  if(e=document.querySelector(PAYWALL_EI_DIV)){
    e.parentElement.removeChild(e);
  }
}

function myNewsletterWS(fields,optin){
  var code=undefined,invalid=[],ws_url='/services/pren/pooolnewsletter',fieldkey_err='newsletter';
  var messages={
    '1H24': "Vous ne pouvez débloquer qu'un article toutes les deux semaines.",
    'NL1': "Une erreur technique s'est produite, veuillez réessayer plus tard.",
    'NL2': "Vous êtes déjà inscrit à la Newsletter.",
    'NL3': "Vous devez saisir un e-mail valide.",
    '404': "Une erreur s'est produite, veuillez réessayer plus tard."
  }

  var data = '{';
  if(optin) data += 'optin:true,';
  data += "url:\"" + window.location.href.split('?')[0]
    + "\",section:\"" + getThematiquePrincipale()
    + "\",title:\"" + getMetaTitle()
    + "\",image:\"" + getMetaImage()
    + "\",newsletter:\"" + fields.newsletter
    + "\",mail:\"";
  if(fields.mail){
    data += fields.mail;
    fieldkey_err='mail';
  }
  data += "\"}";

   jQuery.ajax({
    type: "POST",
    url: ws_url,
    cache: "false",
    async: false,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    data: data,
    success: function(data){
      if(data.messages.length > 0){
        code=data.messages[0];
   
      code='404'
    }
  });
  
  if(code){
    text=messages[code];
    invalid.push({ fieldKey: fieldkey_err, message: (text) ? text : code });
  }
  return invalid;
}

// ############### FONCTIONS GET ###############
function getNiveauConsultation(){
  return dataLayer[0].dimension23;
}

function getTypeDePage(){
  return dataLayer[0].dimension24;
}

function getCommercialisation(){
  return dataLay></div>';
  return html;
}

function getWebContentKey(){
  return dataLayer[0].dimension38;
}

function getOriginCreationAccount(){
  return dataLayer[0].OriginCreationAccount;
}

function getMetaTitle(){
  if(m=document.querySelector("meta[property='og:title']"))
  return m.content.replaceAll('"','\'');
}

function getMetaImage() {
  if(m=document.querySelector("meta[property='og:image']"))
  return m.content;
}

function getEnvironnement() {
  var hostname = window.location.host;
  var env = hostname.match(/(^|\/)(\w+)-/i);
  if(env){
    if(env[2] == 'dev' ){
      return 'Dev';
    }
    if(env[2] == 'sit'){
      return 'Test';
    }
    if(env[2] == 'uat'){
      return 'Recette';
    }
  }
  return 'Prod';
}

function getAncienAbonneJours(){
  return dataLayer[0].dimension63;
}

function getInscriptionsNL(){
  return dataLayer[0].Inscriptions;
}

function getDateCreationAccount(){
  return dataLayer[0].DateCreationAccount;
}

function getThematiquePrincipale(){
  return dataLayer[0].dimension15;
}

function getEditionLocale(){
  return dataLayer[0].dimension43;
}

function getUtmSource(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const utmSource = urlParams.get('utm_source')
  return utmSource;
}

function getUtmMedium(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const utmMedium = urlParams.get('utm_medium')
  return utmMedium;
}

function getFbclid(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if(urlParams.has('fbclid')){
      return urlParams.get('fbclid');
  }
}

function isArticleCrimesEpinal(){
  return window.document.URL.includes('il-y-a-40-ans-trois-crimes-non-resolus-boayer[0].content_keywords;
}

function getUrlLogo(){
  switch(trigramme){
    case 'JDE':
      return 'https://files.prsmedia.fr/files/JDE/images/logo.png';
      break;
    case 'LBP':
      return 'https://cdn.poool.fr/uploads/5ccaaa6a44b8360031ef93a9/LOGO-BIENPUBLIC.jpg';
      break;
    case 'DNA':
      return 'https://cdn.poool.fr/uploads/5cc6a74244b8360031d2c6eb/LOGO-DNA.jpg';
      break;
    case 'ALS':
      return 'https://cdn.poool.fr/uploads/5ccaaa96685f4c003666011d/LOGO-ALSACE.jpg';
      break;
    case 'LER':
      return 'https://cdn.poool.fr/uploads/5ccaaab6f159130036ba3406/LOGO-ESTREPUBLICAIN.jpg';
      break;
    case 'LDL':
      return 'https://cdn.poool.fr/uploads/5c8a13a93afcfa0030436a0b/LOGO-DAUPHINE.jpg';
      break;
    case 'JSL':
      return 'https://cdn.poool.fr/uploads/5ccaaa7caf672d0036619e23/LOGO-JSL.jpg';
      break;
    case 'LPR':
      return 'https://cdn.poool.fr/uploads/5ccaaa87f3de380030ef3fd9/LOGO-LEPROGRES.jpg';
      break;
    case 'LRL':
      return 'https://cdn.poool.fr/uploads/5ccaaaa9c3d746003135d4cb/LOGO-RL.jpg';
      break;
    case 'VOM':
      return 'https://cdn.poool.fr/uploads/5ccaaac244b8360031ef9689/LOGO-VOSGESMATIN.jpg';
      break;
    default:
      return '';
  }
}

function getUrlLogoClubAbo(){
  switch(trigramme){
      case 'LBP':
          return 'https://cdn-files.prsmedia.fr/files/REDAC/min/images/logos/2022/leClub_LBP.svg';
          break;
      case 'DNA':
          return 'https://cdn-files.prsmedia.fr/files/REDAC/min/images/logos/2022/leClub_DNA-V2.svg';
          break;
      case 'ALS':
          return 'https://cdn-files.prsmedia.fr/files/REDAC/min/images/logos/2022/leClub_ALS-V2.svg';
          break;
      case 'LER':
          return 'https://cdn-files.prsmedia.fr/files/REDAC/min/images/logos/2022/leClub_LER-V2.svg';
          break;
      case 'LDL':
          return 'https://cdn-files.prsmedia.fr/files/REDAC/min/images/logos/2022/leClub_LDL.svg';
          break;
      case 'JSL':
          return 'https://cdn-files.prsmedia.fr/files/REDAC/min/images/logos/2022/leClub_JSL.svg';
          break;
      case 'LPR':
          return 'https://cdn-files.prsmedia.fr/files/REDAC/min/images/logos/2022/leClub_LPR.svg';
          break;
      case 'LRL':
          return 'https://cdn-files.prsmedia.fr/files/REDAC/min/images/logos/2022/leClub_LRL-V2.svg';
          break;
      case 'VOM':
          return 'https://cdn-files.prsmedia.fr/files/REDAC/min/images/logos/2022/leClub_VOM-V2.svg';
          break;
      default:
          return '';
  }
}

function getPooolID(){
  switch(trigramme){
      case 'JDE':
          return "cUX2nyCrSUTFqUwZ5GwOBSRu3nVFcLuRvu3u4Gqn3NgpVlZM6HJ3SmjL65dqnBy5";
          break
      case 'LBP':
          return (getEnvironnement() == 'Prod') ? "5CCW8-8UMJ9-ZEIME-6AG3K" : "VUV4B-EG3R4-UP2AD-E7TBI";
          break;
      case 'DNA':
          return (getEnvironnement() == 'Prod') ? "9ND1J-LIQQB-5DQ5T-SUEWU" : "FwC0VQwprIzzBS9cg7BZhKCjjGeO7pZCMRRYbLFPKXyWkOqeBZKEuIVAnTPSg6j9"; 
          break;
      case 'ALS':
          return (getEnvironnement() == 'Prod') ? "CY5GV-8BZMT-MSID9-WJRLH" : "Q915V-PYE3T-53F85-W23YH";
          break;
      case 'LER':
          return (getEnvironnement() == 'Prod') ? "O6SMX-O0MCA-KMPOM-CMVS4" : "J6KG7-VUYCO-705XG-ZSAER";
          break;
      case 'LDL':
         return (getEnvironnement() == 'Prod') ? "2SQA9-L2U0H-7X45I-CMERT" : "D9WBF-II3WU-OTV8O-SQN05";
          break;
      case 'JSL':
          return (getEnvironnement() == 'Prod') ? "AFNFL-NIFR1-3J6XA-3DZ8X" : "SQ8ZG-WRF0A-E7X55-1Z73Z";
          break;
      case 'LPR':
          return (getEnvironnement() == 'Prod') ? "A0KIM-H1U9H-W51WV-C22EZ" : "WXIJR-05K63-FDUQA-NKNDN";
          break;
      case 'LRL':
          return (getEnvironnement() == 'Prod') ? "QOLRN-36PYE-R608R-98VWB" : "B73RT-7VQCZ-IXBDO-BV1W7";
          break;
      case 'VOM':
          return (getEnvironnement() == 'Prod') ? "MC0PD-LE1R0-L1J6A-0IFVD" : "VIZ40-388HT-VQ35F-XX9AY";
          break;
      default:
          return "";
  }
}

function getAppName(){
  switch(trigramme){
      case 'JDE':
        return "JDE";
        break;
      case 'LBP':
          return "le Bien Public";
          break;
      case 'DNA':
          return "les Dernières Nouvelles d'Alsace";
          break;
      case 'ALS':
          return "l'Alsace";
          break;
      case 'LER':
          return "l'Est Républicain";
          break;
      case 'LDL':
          return "le Dauphiné Libéré";
          break;
      case 'JSL':
          return "le Journal de Saône et Loire";
          break;
      case 'LPR':
          return "le Progrès";
          break;
      case 'LRL':
          return "le Républicain Lorrain";
          break;
      case 'VOM':
          return "Vosges Matin";
          break;
      default:
          return "";
  }
}


function getCustomContextID(){
  switch(trigramme){
      case 'JDE':
        if(isSemainePresse()) return 'semaine_presse';
        if(isEspaceEnseignants()) return 'espace_enseignants';
        return null;
      case 'LBP':
          if(isClubAbo()) return 'club-abo';
          if(isEducation()) return 'education';
          if(isEconomie()) return 'economie';
          if(isFaitsDiversJustice()) return 'faits-divers';
          if(isEnvironnement() && isIciOnAgit()) return 'ici-on-agit';
          if(isEnvironnement()) return 'environnement';
          if(isSport() && isRugby()) return 'rugby';
          if(isSport()) return 'sport';
          if(isPolitique()) return 'politique';
          if(isCulture()) return 'culture';
          break;
      case 'DNA':
          if(isLeLab()) return 'le-lab';
          if(isSport()) return 'sport';
          if(isClubAbo()) return 'club-abo';
          if(isFaitsDiversJustice()) return 'faits-divers';
          if(isEducation()) return 'education';
          if(isCulture()) return 'culture';
          if(isRCSA()) return 'rcsa';
          if(isPolitique()) return 'politique';
          if(isEconomie()) return 'economie';
          if(isSociete()) return 'société';
          if(isEditionStrasbourg()) return 'edition-strasbourg';
          if(isEditionSaverne()) return 'edition-saverne';
          if(isEditionHaguenau()) return 'edition-haguenau';
          if(isEditionMolsheim()) return 'edition-molsheim';
          if(isEditionSelestat()) return 'edition-selestat';
          if(isEditionColmar()) return 'edition-colmar';
          break;
      case 'ALS':
          if(isSport()) return 'sport';
          if(isFaitsDiversJustice()) return 'faits-divers';
          if(isEconomie()) return 'economie';
          if(isCulture()) return 'culture';
          if(isClubAbo()) return 'club-abo';
          if(isEducation()) return 'education';
          if(isPolitique()) return 'politique';
          break;
      case 'LER':
          if(isClubAbo()) return 'club-abo';
          if(isArticleAffaireNarumi()) return 'affaire-narumi';
          if(isEducation()) return 'education';
          if(isPolitique()) return 'politique';
          break;
      case 'LDL':
          if(isClubAbo()) return 'club-abo';
          if(isEducation()) return 'education';
          if(isPolitique()) return 'politique';
          if(isSport()) return 'sport';
          if(isEconomie()) return 'economie';
          if(isCulture()) return 'culture';
          if(isMontagne()) return 'montagne';
          if(isDepartement('38')) return 'isere';
          if(isDepartement('74')) return 'haute-savoie';
          if(isDepartement('73')) return 'savoie';
          if(isDepartement('26')) return 'drome';
          if(isDepartement('07')) return 'ardeche';
          if(isDepartement('84')) return 'vaucluse';
          if(isDepartement('05')) return 'hautes-alpes';
          if(isDepartement('04')) return 'alpes-de-haute-provence';
          if(isDepartement('01')) return 'ain';
          if(isDepartement('69')) return 'rhone';
          break;
      case 'JSL':
          if(isClubAbo()) return 'club-abo';
          if(isEducation()) return 'education';
          if(isCulture()) return 'culture';
          if(isEconomie()) return 'economie';
          if(isPolitique()) return 'politique';
          if(isFaitsDiversJustice()) return 'faits-divers';
          if(isEnvironnement() && isIciOnAgit()) return 'ici-on-agit';
          if(isEnvironnement()) return 'environnement';
          if(isSport() && isRugby()) return 'rugby';
          if(isSport()) return 'sport';
          break;
      case 'LPR':
          if(isClubAbo()) return 'club-abo';
          if(isEducation()) return 'education';
          if(isDirectEntreprises()) return 'direct-entreprises';
          if(isEconomie()) return 'economie';
          if(isFaitsDiversJustice()) return 'faits-divers';
          if(isCulture()) return 'culture';
          if(isEnvironnement() && isIciOnAgit()) return 'ici-on-agit';
          if(isEnvironnement()) return 'environnement';
          if(isSport() && isRugby()) return 'rugby';
          if(isSport()) return 'sport';
          if(isPolitique()) return 'politique';
          if(isDepartement('01')) return 'ain';
          if(isDepartement('38')) return 'nord-isere';
          if(isDepartement('39')) return 'jura';
          if(isDepartement('42')) return 'loire';
          if(isDepartement('43')) return 'haute-loire';
          if(isDepartement('69')) return 'rhone';
          break;
      case 'LRL':
          if(isClubAbo()) return 'club-abo';
          if(isArticleAffaireNarumi()) return 'affaire-narumi';
          if(isEducation()) return 'education';
          if(isPolitique()) return 'politique';
          break;
      case 'VOM':
          if(isArticleCrimesEpinal()) return 'article-crimes-epinal';
          if(isClubAbo()) return 'club-abo';
          if(isArticleAffaireNarumi()) return 'affaire-narumi';
          if(isEducation()) return 'education';
          if(isPolitique()) return 'politique';
          break;
      default:
          return null;
  }
}

function getCustomSegmentID(){
  var us= (getUtmSource() !== null) ? getUtmSource().toLowerCase() : '';
  var um= (getUtmMedium() !== null) ? getUtmMedium().toLowerCase() : '';
  var fbclid=getFbclid();
  var ancien_abonne=getAncienAbonneJours();  
  if(ancien_abonne>=1 && ancien_abonne<=180) return 'ancien-abonné-max-180j';
  if(trigramme !== 'JDE'){
    if(isAccountPooolCreatedAfter24h()) return 'connecté-non-abonné';;  
    if(isSubscribedNL() && isConnected()) return 'connecté-inscrit-nl';
  }  
  if(isConnected() && !isAbonne()) return 'connecté-non-abonné';
  if(/^google$/i.test(us)) return 'source-sea';
  if(/^taboola$/i.test(us) && /native_ads/i.test(um)) return 'source-taboola';
  if(trigramme == 'JDE'){
    if(/ED/i.test(us) && /email_acquisition/i.test(um)) return 'source-email-paid';
  } else {
    if(/ed/i.test(us) && /email_acquisition/i.test(um)) return 'source-email-paid';
  }  
  if(/^facebook$/i.test(us)){
      if(/social_ads/i.test(um)) return 'source-facebook-ads';
      if(/^echobox$/i.test(um)) return 'source-facebook-organic';
  }
  if(typeof fbclid !== "undefined") return 'source-facebook-organic';
  if(trigramme == 'LBP' || trigramme == 'JSL' || trigramme == 'LPR'){
      if(/^adobe$/i.test(us) && /newsletter/i.test(um)) return 'campagne_newsletter';
      if(/^facebook$/i.test(us) && /^social$/i.test(um)) return 'social-media';
      if(isGoogleDiscover()) return 'news-google';
  } 
  return null;
}

// ############### END FONCTIONS GET ###############

// ############### FONCTIONS SET ###############

function isPooolConsented() {
  if(typeof Didomi === "undefined"){
    return false;  
  }
  var status1 = Didomi.getUserStatusForVendorAndLinkedPurposes('c:poool-VyhCit7N');
  var status2 = Didomi.getUserStatusForVendorAndLinkedPurposes('c:poool-ewZ66egf');
  return (status1 === true || status2 === true) ? true : false;
}

function setConfigStyle(){
  // Config style par défaut
  switch(trigramme){
      case 'JDE':
        poool('style', {
          brand_logo: '',
          button_color: '#fec900',
          button_hover_color: '#fec900',
          skin_color: '#2577BF',
          premium_color: '#fec900',
          layout: 'portrait'
        });
        break;
      case 'LBP':
          poool('style', {
              brand_logo: 'https://cdn.poool.fr/uploads/5ccaaa6a44b8360031ef93a9/LOGO-BIENPUBLIC.jpg',
              button_color: '#fec900',
              button_hover_color: '#fec900',
              skin_color: '#2577BF',
              premium_color: '#fec900',
              layout: 'portrait'
              });
          break;
      case 'DNA':
          poool('style', {
              brand_logo: 'https://cdn.poool.fr/uploads/5cc6a74244b8360031d2c6eb/LOGO-DNA.jpg',      
              button_color: '#fec900',
              button_hover_color: '#fec900',
              skin_color: '#d63732',
              premium_color: '#fec900',
              layout: 'portrait'
              });
          break;
      case 'ALS':
          poool('style', {
              brand_logo: 'https://cdn.poool.fr/uploads/5ccaaa96685f4c003666011d/LOGO-ALSACE.jpg',
              button_color: '#fec900',
              button_hover_color: '#fec900',
              skin_color: '#d63732',
              premium_color: '#fec900',
              layout: 'portrait'
              });
          break;
      case 'LER':
          poool('style', {
              brand_logo: 'https://cdn.poool.fr/uploads/5ccaaab6f159130036ba3406/LOGO-ESTREPUBLICAIN.jpg',
              button_color: '#fec900',
              button_hover_color: '#fec900',
              skin_color: '#d63732',
              premium_color: '#fec900',
              layout: 'portrait'
              });
          break;
      case 'LDL':
          poool('style', {
              brand_logo: 'https://cdn.poool.fr/uploads/5c8a13a93afcfa0030436a0b/LOGO-DAUPHINE.jpg',
              button_color: '#fec900',
              button_hover_color: '#fec900',
              skin_color: '#d63732',
              premium_color: '#fec900',
              layout: 'portrait'
              });  
          break;
      case 'JSL':
          poool('style', {
              brand_logo: 'https://cdn.poool.fr/uploads/5ccaaa7caf672d0036619e23/LOGO-JSL.jpg',
              button_color: '#fec900',
              button_hover_color: '#fec900',
              skin_color: '#d63732',
              premium_color: '#fec900',
              layout: 'portrait'
              });
          break;
      case 'LPR':
          poool('style', {
              brand_logo: 'https://cdn.poool.fr/uploads/5ccaaa87f3de380030ef3fd9/LOGO-LEPROGRES.jpg',
              button_color: '#fec900',
              button_hover_color: '#fec900',
              skin_color: '#d63732',
              premium_color: '#fec900',
              layout: 'portrait'
              });
          break;
      case 'LRL':
          poool('style', {
              brand_logo: 'https://cdn.poool.fr/uploads/5ccaaaa9c3d746003135d4cb/LOGO-RL.jpg',
              button_color: '#fec900',
              button_hover_color: '#fec900',
              skin_color: '#d63732',
              premium_color: '#fec900',
              layout: 'portrait'
              });
          break;
      case 'VOM':
          poool('style', {
              brand_logo: 'https://cdn.poool.fr/uploads/5ccaaac244b8360031ef9689/LOGO-VOSGESMATIN.jpg',
              button_color: '#fec900',
              button_hover_color: '#fec900',
              skin_color: '#d63732',
              premium_color: '#fec900',
              layout: 'portrait'
              });
          break;
      default:
          // pas de configuration
  }
}

// ############### END FONCTIONS SET ###############

function isAccountPooolCreatedBefore24h(){
  if(days=getDaysAccountPooolCreated()){
      if(days <= 1) return true;
  }
return false;
}

function isAccountPooolCreatedAfter24h(){
  if(days=getDaysAccountPooolCreated()){
      if(days > 1) return true;
  }
return false;
}

function getDaysAccountPooolCreated(){
  var origin=(getOriginCreationAccount()||[''])[0];
var date=(getDateCreationAccount()||[''])[0];
if(origin=='Poool'){
  var d1 = new Date(date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
  return dateDiffDays(new Date(), d1);
}
return false;
}


// ############### FONCTIONS IS ###############

function isDepartement(numDpt){
    if(cd=dataLayer[0].content_department){ 
        cd_s=cd.toString();
        if(cd_s=='') cd_s='00';
        return numDpt == cd_s;
    }
}

function isEditionStrasbourg(){
    return getEditionLocale() === 'Strasbourg';
}

function isEditionSaverne(){
    return getEditionLocale() === 'Saverne - Sarre-Union';
}

function isEditionHaguenau(){
    return getEditionLocale() === 'Haguenau - Wissembourg';
}

function isEditionMolsheim(){
    return getEditionLocale() === 'Molsheim - Obernai';
}

function isEditionSelestat(){
    return getEditionLocale() === 'Sélestat - Erstein';
}

function isEditionColmar(){
    return getEditionLocale() === 'Colmar - Guebwiller';
}

function isGoogleDiscover(){
    return window.document.referrer.includes('news.google.com');
}

function isEconomie(){
    return getThematiquePrincipale() === 'Economie';
}

function isSport(){
    return getThematiquePrincipale() === 'Sport';
}

function isFaitsDiversJustice(){
    return getThematiquePrincipale() === 'Faits-divers - Justice';
}

function isSociete(){
    return getThematiquePrincipale() === 'Société';
}

function isPolitique(){
    return getThematiquePrincipale() === 'Politique';
}

function isEnvironnement(){
    return getThematiquePrincipale() === 'Environnement';
}

function isMontagne(){
    return dataLayer[0].dimension17.includes('Montagne');
}

function isDirectEntreprises(){
    return dataLayer[0].dimension17.includes('Direct Entreprises');
}

function isSemainePresse(){
    return dataLayer[0].dimension17.includes('Semaine de la presse');
}

function isLeLab(){
    return dataLayer[0].dimension17.includes('Le Lab');
}

function isIciOnAgit(){
    return dataLayn dataLayer[0].dimension17.includes('Rugby');
}

function isEspaceEnseignants(){
    return getThematindow.location.search.includes('dl_debug=1');
}

function isAbonne(){
    return (dataLayer[0].dimension11 == 'Oui') ? true : false;
}

function isClubAbo(){
    return getThematiquePrincipale() === 'LeCLUB';
}

function isCulture(){
    return getThematiquePrincipale() === 'Culture - Loisirs';
}

function isRCSA(){
    return (getThematiquePrincipale()=='Sport' && /rcsa-racing-club-strasbourg/i.test(getContentKeywords())) ? true : false;
}

function isArticleAffaireNarumi(){
    return (getThematiquePrincipale()=='Faits-divers - Justice' && /narumi-kurosaki/i.trn getThematiquePrincipale() === 'Education';
}

function isConnected(){
    return (dataLayer[0] return (getInscriptionsNL()) ? true : false;
}

// // ############### END FONCTIONS IS ###############

// // ############### CUSTOM PAYWALL ###############

function myPaywallHTML(){
  switch(trigramme){
    case 'JDE':
      var html='<div class="widget" style="margin:auto; width:497px; background:#d43333">\
      <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#ffffff"> \
      <div class="container" style="padding:40px 30px; align-self:center"> \
      <div class="brand-logo" style="justify-content:center; display: flex;"><img style="width:100px; height:60px" src="'+ getUrlLogo() +'"></div> \
      <h3 class="title" style="text-align:center; margin:30px auto 30px">Pour lire la suite, abonnez-vous : </h3> \
      <div class="action" style="margin-bottom:20px"><a href="'+ PAYWALL_URL_ABONNEMENT +'" class="subscribe" style="background-color:#fec900; color:#2a303b; padding:9px 11px 11px; display:block; text-align:center"><span>Découvrez nos offres</span></a></div>';
      if(!isConnected()){
        html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:9px 11px 11px; display:block; text-align:center; text-decoration:underline"><span>Je me connecte</span></a></div>';  
      }
      html+='</div></div></div>';
      return html;
    case 'LBP':
        var html='<div class="widget" style="margin:auto; width:497px; background:#0071b6">\
        <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#ffffff"> \
        <div class="container" style="padding:40px 30px; align-self:center"> \
        <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px; background-color:#0071b6; padding:5px" src="'+ getUrlLogo() +'"></div> \
        <p style="text-align:center; margin:30px auto 30px;">Cet article est réservé aux abonnés <br>\
        Pour un accès immédiat, abonnez-vous. \
        <div class="action" style="margin-bottom:20px"><a href="'+ PAYWALL_URL_ABONNEMENT +'" class="subscribe" style="background-color:#fec900; color:#2a303b; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne pour lire la suite</span></a></div>';
        if(!isConnected()){
            html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:9px 11px 11px; display:block; text-align:center; text-decoration:underline"><span>Je me connecte</span></a></div>';
        }
        html+='</div></div></div>';
        return html;
    case 'DNA':
        var html='<div class="widget" style="margin:auto; width:497px; background:#d43333">\
        <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#ffffff"> \
        <div class="container" style="padding:40px 30px; align-self:center"> \
        <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px; background-color:#d43333; padding:5px" src="'+ getUrlLogo() +'"></div> \
        <p style="text-align:center; margin:30px auto 30px;">Cet article est réservé aux abonnés <br>\
        Pour un accès immédiat, abonnez-vous. \
        <div class="action" style="margin-bottom:20px"><a href="'+ PAYWALL_URL_ABONNEMENT +'" class="subscribe" style="background-color:#fec900; color:#2a303b; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne pour lire la suite</span></a></div>';
        if(!isConnected()){
            html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:9px 11px 11px; display:block; text-align:center; text-decoration:underline"><span>Je me connecte</span></a></div>';
        }
        html+='</div></div></div>';
        return html;
    case 'ALS':
        var html='<div class="widget" style="margin:auto; width:497px; background:#d43333">\
        <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#ffffff"> \
        <div class="container" style="padding:40px 30px; align-self:center"> \
        <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px" src="'+ getUrlLogo() +'"></div> \
        <p style="text-align:center; margin:30px auto 30px;">Cet article est réservé aux abonnés <br>\
        Pour un accès immédiat, abonnez-vous. \
        <div class="action" style="margin-bottom:20px"><a href="'+ PAYWALL_URL_ABONNEMENT +'" class="subscribe" style="background-color:#fec900; color:#2a303b; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne pour lire la suite</span></a></div>';
        if(!isConnected()){
            html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:9px 11px 11px; display:block; text-align:center; text-decoration:underline"><span>Je me connecte</span></a></div>';
        }
        html+='</div></div></div>';
        return html;
    case 'LER':
        var html='<div class="widget" style="margin:auto; width:497px; background:#d43333">\
        <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#ffffff"> \
        <div class="container" style="padding:40px 30px; align-self:center"> \
        <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px; background-color:#d43333; padding:5px" src="'+ getUrlLogo() +'"></div> \
        <p style="text-align:center; margin:30px auto 30px;">Cet article est réservé aux abonnés <br>\
        Pour un accès immédiat, abonnez-vous. \
        <div class="action" style="margin-bottom:20px"><a href="'+ PAYWALL_URL_ABONNEMENT +'" class="subscribe" style="background-color:#fec900; color:#2a303b; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne pour lire la suite</span></a></div>';
        if(!isConnected()){
            html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:9px 11px 11px; display:block; text-align:center; text-decoration:underline"><span>Je me connecte</span></a></div>';
        }
        html+='</div></div></div>';
        return html;
    case 'LDL':
        var html='<div class="widget" style="margin:auto; width:497px; background:#d43333">\
        <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#ffffff"> \
        <div class="container" style="padding:40px 30px; align-self:center"> \
        <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px;" src="'+ getUrlLogo() +'"></div> \
        <p style="text-align:center; margin:30px auto 30px;">Cet article est réservé aux abonnés <br>\
        Pour un accès immédiat, abonnez-vous. \
        <div class="action" style="margin-bottom:20px"><a href="'+ PAYWALL_URL_ABONNEMENT +'" class="subscribe" style="background-color:#fec900; color:#2a303b; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne pour lire la suite</span></a></div>';
        if(!isConnected()){
            html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:9px 11px 11px; display:block; text-align:center; text-decoration:underline"><span>Je me connecte</span></a></div>';
        }
        html+='</div></div></div>';
        return html;
    case 'JSL':
        var html='<div class="widget" style="margin:auto; width:497px; background:#d43333">\
        <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#ffffff"> \
        <div class="container" style="padding:40px 30px; align-self:center"> \
        <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px; background-color:#d43333; padding:5px" src="'+ getUrlLogo() +'"></div> \
        <p style="text-align:center; margin:30px auto 30px;">Cet article est réservé aux abonnés <br>\
        Pour un accès immédiat, abonnez-vous. \
        <div class="action" style="margin-bottom:20px"><a href="'+ PAYWALL_URL_ABONNEMENT +'" class="subscribe" style="background-color:#fec900; color:#2a303b; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne pour lire la suite</span></a></div>';
        if(!isConnected()){
            html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:9px 11px 11px; display:block; text-align:center; text-decoration:underline"><span>Je me connecte</span></a></div>';
        }
        html+='</div></div></div>';
        return html;
    case 'LPR':
        var html='<div class="widget" style="margin:auto; width:497px; background:#0071b6">\
        <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#ffffff"> \
        <div class="container" style="padding:40px 30px; align-self:center"> \
        <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px; background-color:#0071b6; padding:5px" src="'+ getUrlLogo() +'"></div> \
        <p style="text-align:center; margin:30px auto 30px;">Cet article est réservé aux abonnés <br>\
        Pour un accès immédiat, abonnez-vous. \
        <div class="action" style="margin-bottom:20px"><a href="'+ PAYWALL_URL_ABONNEMENT +'" class="subscribe" style="background-color:#fec900; color:#2a303b; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne pour lire la suite</span></a></div>';
        if(!isConnected()){
            html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:9px 11px 11px; display:block; text-align:center; text-decoration:underline"><span>Je me connecte</span></a></div>';
        }
        html+='</div></div></div>';
        return html;
    case 'LRL':
        var html='<div class="widget" style="margin:auto; width:497px; background:#d43333">\
        <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#ffffff"> \
        <div class="container" style="padding:40px 30px; align-self:center"> \
        <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px; background-color:#d43333; padding:5px" src="'+ getUrlLogo() +'"></div> \
        <p style="text-align:center; margin:30px auto 30px;">Cet article est réservé aux abonnés <br>\
        Pour un accès immédiat, abonnez-vous. \
        <div class="action" style="margin-bottom:20px"><a href="'+ PAYWALL_URL_ABONNEMENT +'" class="subscribe" style="background-color:#fec900; color:#2a303b; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne pour lire la suite</span></a></div>';
        if(!isConnected()){
            html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:9px 11px 11px; display:block; text-align:center; text-decoration:underline"><span>Je me connecte</span></a></div>';
        }
        html+='</div></div></div>';
        return html;
    case 'VOM':
        var html='<div class="widget" style="margin:auto; width:497px; background:#d43333">\
        <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#ffffff"> \
        <div class="container" style="padding:40px 30px; align-self:center"> \
        <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px; background-color:#d43333; padding:5px" src="'+ getUrlLogo() +'"></div> \
        <p style="text-align:center; margin:30px auto 30px;">Cet article est réservé aux abonnés <br>\
        Pour un accès immédiat, abonnez-vous. \
        <div class="action" style="margin-bottom:20px"><a href="'+ PAYWALL_URL_ABONNEMENT +'" class="subscribe" style="background-color:#fec900; color:#2a303b; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne pour lire la suite</span></a></div>';
        if(!isConnected()){
            html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:9px 11px 11px; display:block; text-align:center; text-decoration:underline"><span>Je me connecte</span></a></div>';
        }
        html+='</div></div></div>';
        return html;
    default:
        return '';
  }
}

function myPaywallLeClubHTML(){
  switch(trigramme){
      case 'LBP':
          var html='<div class="widget" style="margin:auto; width:497px;">\
          <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#212121"> \
          <div class="container" style="padding:40px 30px; align-self:center"> \
          <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px" src="'+ getUrlLogoClubAbo() +'"></div> \
          <p style="text-align:center; margin:30px auto 30px; color: #ffffff">La suite est réservée à nos abonnés aux formules Premium, Integrale et Papier. <a role="link" href="'+ PAYWALL_URL_PLUS_INFOS_CLUB_ABO +'" class="login" style="text-decoration:underline; color: #ffffff">Plus d\'infos</a></p> \
          <div class="action" style="margin-bottom:10px"><a href="'+ PAYWALL_URL_ABONNEMENT_CLUB_ABO +'" class="subscribe" style="background-color:#ffe800; color:#212121; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne</span></a></div>';
          if(!isConnected()){
              html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:0 11px 11px; display:block; text-align:center; text-decoration:underline; color: #ffffff"><span>Déjà abonné ? Connectez-vous</span></a></div>';
          }
          html+='</div></div></div>';
          return html;
      case 'DNA':
          var html='<div class="widget" style="margin:auto; width:497px;">\
          <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#212121"> \
          <div class="container" style="padding:40px 30px; align-self:center"> \
          <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px" src="'+ getUrlLogoClubAbo() +'"></div> \
          <p style="text-align:center; margin:30px auto 30px; color: #ffffff">La suite est réservée à nos abonnés aux formules Premium, Integrale et Papier. <a role="link" href="'+ PAYWALL_URL_PLUS_INFOS_CLUB_ABO +'" class="login" style="text-decoration:underline; color: #ffffff">Plus d\'infos</a></p> \
          <div class="action" style="margin-bottom:10px"><a href="'+ PAYWALL_URL_ABONNEMENT_CLUB_ABO +'" class="subscribe" style="background-color:#ffe800; color:#212121; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne</span></a></div>';
          if(!isConnected()){
              html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:0 11px 11px; display:block; text-align:center; text-decoration:underline; color: #ffffff"><span>Déjà abonné ? Connectez-vous</span></a></div>';
          }
          html+='</div></div></div>';
          return html;
      case 'ALS':
          var html='<div class="widget" style="margin:auto; width:497px;">\
          <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#212121"> \
          <div class="container" style="padding:40px 30px; align-self:center"> \
          <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px" src="'+ getUrlLogoClubAbo() +'"></div> \
          <p style="text-align:center; margin:30px auto 30px; color: #ffffff">La suite est réservée à nos abonnés aux formules Premium, Integrale et Papier. <a role="link" href="'+ PAYWALL_URL_PLUS_INFOS_CLUB_ABO +'" class="login" style="text-decoration:underline; color: #ffffff">Plus d\'infos</a></p> \
          <div class="action" style="margin-bottom:10px"><a href="'+ PAYWALL_URL_ABONNEMENT_CLUB_ABO +'" class="subscribe" style="background-color:#ffe800; color:#212121; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne</span></a></div>';
          if(!isConnected()){
              html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:0 11px 11px; display:block; text-align:center; text-decoration:underline; color: #ffffff"><span>Déjà abonné ? Connectez-vous</span></a></div>';
          }
          html+='</div></div></div>';
          return html;
      case 'LER':
          var html='<div class="widget" style="margin:auto; width:497px;">\
          <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#212121"> \
          <div class="container" style="padding:40px 30px; align-self:center"> \
          <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px" src="'+ getUrlLogoClubAbo() +'"></div> \
          <p style="text-align:center; margin:30px auto 30px; color: #ffffff">La suite est réservée à nos abonnés aux formules Premium, Integrale et Papier. <a role="link" href="'+ PAYWALL_URL_PLUS_INFOS_CLUB_ABO +'" class="login" style="text-decoration:underline; color: #ffffff">Plus d\'infos</a></p> \
          <div class="action" style="margin-bottom:10px"><a href="'+ PAYWALL_URL_ABONNEMENT_CLUB_ABO +'" class="subscribe" style="background-color:#ffe800; color:#212121; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne</span></a></div>';
          if(!isConnected()){
              html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:0 11px 11px; display:block; text-align:center; text-decoration:underline; color: #ffffff"><span>Déjà abonné ? Connectez-vous</span></a></div>';
          }
          html+='</div></div></div>';
          return html;
      case 'LDL':
          var html='<div class="widget" style="margin:auto; width:497px;">\
          <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#212121"> \
          <div class="container" style="padding:40px 30px; align-self:center"> \
          <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px" src="'+ getUrlLogoClubAbo() +'"></div> \
          <p style="text-align:center; margin:30px auto 30px; color: #ffffff">La suite est réservée à nos abonnés aux formules Premium, Integrale et Papier. <a role="link" href="'+ PAYWALL_URL_PLUS_INFOS_CLUB_ABO +'" class="login" style="text-decoration:underline; color: #ffffff">Plus d\'infos</a></p> \
          <div class="action" style="margin-bottom:10px"><a href="'+ PAYWALL_URL_ABONNEMENT_CLUB_ABO +'" class="subscribe" style="background-color:#ffe800; color:#212121; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne</span></a></div>';
          if(!isConnected()){
              html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:0 11px 11px; display:block; text-align:center; text-decoration:underline; color: #ffffff"><span>Déjà abonné ? Connectez-vous</span></a></div>';
          }
          html+='</div></div></div>';
          return html;
      case 'JSL':
          var html='<div class="widget" style="margin:auto; width:497px;">\
          <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#212121"> \
          <div class="container" style="padding:40px 30px; align-self:center"> \
          <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px" src="'+ getUrlLogoClubAbo() +'"></div> \
          <p style="text-align:center; margin:30px auto 30px; color: #ffffff">La suite est réservée à nos abonnés aux formules Premium, Integrale et Papier. <a role="link" href="'+ PAYWALL_URL_PLUS_INFOS_CLUB_ABO +'" class="login" style="text-decoration:underline; color: #ffffff">Plus d\'infos</a></p> \
          <div class="action" style="margin-bottom:10px"><a href="'+ PAYWALL_URL_ABONNEMENT_CLUB_ABO +'" class="subscribe" style="background-color:#ffe800; color:#212121; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne</span></a></div>';
          if(!isConnected()){
              html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:0 11px 11px; display:block; text-align:center; text-decoration:underline; color: #ffffff"><span>Déjà abonné ? Connectez-vous</span></a></div>';
          }
          html+='</div></div></div>';
          return html;
      case 'LPR':
          var html='<div class="widget" style="margin:auto; width:497px;">\
          <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#212121"> \
          <div class="container" style="padding:40px 30px; align-self:center"> \
          <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px" src="'+ getUrlLogoClubAbo() +'"></div> \
          <p style="text-align:center; margin:30px auto 30px; color: #ffffff">La suite est réservée à nos abonnés aux formules Premium, Integrale et Papier. <a role="link" href="'+ PAYWALL_URL_PLUS_INFOS_CLUB_ABO +'" class="login" style="text-decoration:underline; color: #ffffff">Plus d\'infos</a></p> \
          <div class="action" style="margin-bottom:10px"><a href="'+ PAYWALL_URL_ABONNEMENT_CLUB_ABO +'" class="subscribe" style="background-color:#ffe800; color:#212121; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne</span></a></div>';
          if(!isConnected()){
              html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:0 11px 11px; display:block; text-align:center; text-decoration:underline; color: #ffffff"><span>Déjà abonné ? Connectez-vous</span></a></div>';
          }
          html+='</div></div></div>';
          return html;
      case 'LRL':
          var html='<div class="widget" style="margin:auto; width:497px;">\
          <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#212121"> \
          <div class="container" style="padding:40px 30px; align-self:center"> \
          <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px" src="'+ getUrlLogoClubAbo() +'"></div> \
          <p style="text-align:center; margin:30px auto 30px; color: #ffffff">La suite est réservée à nos abonnés aux formules Premium, Integrale et Papier. <a role="link" href="'+ PAYWALL_URL_PLUS_INFOS_CLUB_ABO +'" class="login" style="text-decoration:underline; color: #ffffff">Plus d\'infos</a></p> \
          <div class="action" style="margin-bottom:10px"><a href="'+ PAYWALL_URL_ABONNEMENT_CLUB_ABO +'" class="subscribe" style="background-color:#ffe800; color:#212121; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne</span></a></div>';
          if(!isConnected()){
              html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:0 11px 11px; display:block; text-align:center; text-decoration:underline; color: #ffffff"><span>Déjà abonné ? Connectez-vous</span></a></div>';
          }
          html+='</div></div></div>';
          return html;
      case 'VOM':
          var html='<div class="widget" style="margin:auto; width:497px;">\
          <div class="wrapper" style="box-shadow:0 3px 31px rgba(0,0,0,.2); margin:auto; width:485px; background:#212121"> \
          <div class="container" style="padding:40px 30px; align-self:center"> \
          <div class="brand-logo" style="justify-content:center; display: flex;"><img style="max-width:150px; max-height:60px" src="'+ getUrlLogoClubAbo() +'"></div> \
          <p style="text-align:center; margin:30px auto 30px; color: #ffffff">La suite est réservée à nos abonnés aux formules Premium, Integrale et Papier. <a role="link" href="'+ PAYWALL_URL_PLUS_INFOS_CLUB_ABO +'" class="login" style="text-decoration:underline; color: #ffffff">Plus d\'infos</a></p> \
          <div class="action" style="margin-bottom:10px"><a href="'+ PAYWALL_URL_ABONNEMENT_CLUB_ABO +'" class="subscribe" style="background-color:#ffe800; color:#212121; padding:9px 11px 11px; display:block; text-align:center"><span>Je m\'abonne</span></a></div>';
          if(!isConnected()){
              html+='<div class="subactions"><a role="link" href="'+ URL_LOGIN +'" class="login" style="padding:0 11px 11px; display:block; text-align:center; text-decoration:underline; color: #ffffff"><span>Déjà abonné ? Connectez-vous</span></a></div>';
          }
          html+='</div></div></div>';
          return html;
      default:
          return '';
  }
}