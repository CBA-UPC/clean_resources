const n={},t={CHANGE:"blibli.member.address.change",SHOW:"blibli.member.address.show"};function i({detail:s}){window.dispatchEvent(new CustomEvent(t.CHANGE,{detail:s}))}function r(s,e){n[s]!==e&&(window.addEventListener(s,e),n[s]=e)}function d(s,e){window.removeEventListener(s,e),n[s]=null}export{t as A,r as a,i as e,d as r};
//# sourceMappingURL=address-event.0a54fb2b.js.map
