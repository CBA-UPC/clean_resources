(function () {
  'use strict';

  // Merriam Webster

  // This helper function prevents strings from being over the GAM limit
  const trimValue = (value) => (value.length > 40 ? value.slice(0, 40) : value);

  const bodyClassValues = [...document.body.classList];

  const targetingValues = bodyClassValues.map((value) =>
    trimValue(`merweb_${value.toLowerCase()}`)
  );

  const pathNameList = ['words-at-play', 'thesaurus', 'dictionary', 'games'];

  const pathNameArray = window.location.pathname.split('/');

  pathNameArray.shift();

  if (pathNameArray[0] && pathNameList.includes(pathNameArray[0])) {
    targetingValues.push(trimValue(`merweb_${pathNameArray[0]}`));
  } else if (!pathNameArray[0]) {
    targetingValues.push('merweb_homepage');
  } else {
    targetingValues.push('merweb_other');
  }

  const targetSet = new Set(targetingValues);
  const value = [...targetSet];

  if (value.length) {
    window.adthrive.cmd.push(() => {
      window.adthrive.siteAds.targeting.push({
        key: 'at_custom_1',
        value,
      });
    });
  }

}());
