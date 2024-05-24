// 1220664
(function poma_20033() {
if (document.readyState === 'loading') {
return document.addEventListener('DOMContentLoaded', poma_20033, false);
}
var footerTerminationLink = document.querySelector(
'tef-footer [slot="legal-bar"] a[title="Vertrag kündigen"]'
);
if (footerTerminationLink) {
// the user has clicked on the button
footerTerminationLink.addEventListener('click',);
// button has entered the users viewport
var observer = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
observer.disconnect();
track('display', true);
}
});
});
observer.observe(footerTerminationLink);
}
function track(action, interaction) {
tefDataLayer.push({
event: 'contract_termination_' + action,
event_name: 'contract_termination',
eCat: 'service - contract_termination',
eAct: action + ' - contract termination button',
eLab: 'footer',
eVal: 0,
nonInteraction: interaction
});
}
})();