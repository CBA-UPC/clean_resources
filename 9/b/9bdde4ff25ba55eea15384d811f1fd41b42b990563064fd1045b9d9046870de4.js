window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/newCurrency/CurrencyConvert.js'] = window.SLM['theme-shared/utils/newCurrency/CurrencyConvert.js'] || function () {
  const _exports = {};
  const { setCurrencyConfig, setStoreCurrency, setDefaultToCurrency, getConvertPrice: originGetConvertPrice, convertFormat: originConvertFormat, covertCalc, convertFormatWithoutCurrency: originConvertFormatWithoutCurrency } = window['@sl/currency-tools-core'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const storeCurrency = window.Shopline.currency;
  const toDefault = SL_State.get('currencyCode') || storeCurrency;
  const {
    currencyDetailList
  } = window.Shopline.currencyConfig;
  setCurrencyConfig(currencyDetailList);
  setStoreCurrency(storeCurrency);
  setDefaultToCurrency(toDefault);
  SL_State.on('currencyCode', ;

  const setDefault = () => {
    const toDefault = SL_State.get('currencyCode') || SL_State.get('storeInfo.currency');
    setDefaultToCurrency(toDefault);
  };

  const convertFormat = (...args) => {
    setDefault();
    return originConvertFormat(...args);
  };

  const getConvertPrice = (...args) => {
    setDefault();
    return originGetConvertPrice(...args);
  };

  const convertFormatWithoutCurrency = 

  _exports.convertFormat = convertFormat;
  _exports.convertFormatWithoutCurrency = convertFormatWithoutCurrency;
  _exports.covertCalc = covertCalc;
  _exports.getConvertPrice = getConvertPrice;
  return _exports;
}();