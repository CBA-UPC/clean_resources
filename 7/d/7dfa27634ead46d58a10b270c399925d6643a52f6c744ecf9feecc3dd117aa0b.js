(self["webpackChunkhc_gov_gatsby"] = self["webpackChunkhc_gov_gatsby"] || []).push([[682],{

/***/ 1502:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UQ: function() { return /* reexport */ Accordion_Accordion; },
  Qd: function() { return /* reexport */ Accordion_AccordionItem; },
  bZ: function() { return /* reexport */ Alert_Alert; },
  zx: function() { return /* reexport */ Button; },
  Lv: function() { return /* reexport */ ChoiceList_Choice; },
  X3: function() { return /* reexport */ ChoiceList_ChoiceList; },
  Vq: function() { return /* reexport */ Dialog; },
  Lt: function() { return /* reexport */ Dropdown; },
  $_: function() { return /* reexport */ Footer; },
  lX: function() { return /* reexport */ FormLabel_FormLabel; },
  h4: function() { return /* reexport */ Header; },
  cv: function() { return /* reexport */ HelpDrawer; },
  uM: function() { return /* reexport */ InfoCircleIcon; },
  tl: function() { return /* reexport */ Pagination_Pagination; },
  bJ: function() { return /* reexport */ PrivacySettingsLink; },
  $j: function() { return /* reexport */ Spinner_Spinner; },
  x4: function() { return /* reexport */ Tabs_TabPanel; },
  iA: function() { return /* reexport */ Table_Table; },
  RM: function() { return /* reexport */ Table_TableBody; },
  Rn: function() { return /* reexport */ Table_TableCaption; },
  pj: function() { return /* reexport */ Table_TableCell; },
  ss: function() { return /* reexport */ Table_TableHead; },
  SC: function() { return /* reexport */ Table_TableRow; },
  mQ: function() { return /* reexport */ Tabs_Tabs; },
  nv: function() { return /* reexport */ TextField_TextField; },
  u: function() { return /* reexport */ Tooltip_Tooltip; },
  yg: function() { return /* reexport */ VerticalNav_VerticalNav; }
});

// UNUSED EXPORTS: AddIcon, AlertCircleIcon, ArrowIcon, ArrowsStackedIcon, Autocomplete, Badge, BuildingCircleIcon, CURRENCY_MASK, CalendarIcon, CheckCircleIcon, CheckIcon, CloseIcon, CloseIconThin, DATE_MASK, DateField, DateInput, DownloadIcon, Drawer, DrawerToggle, EventCategory, EventType, ExternalLinkIcon, FilterChip, HHSLogo, HelpDrawerToggle, IdleTimeout, IdleTimeoutDialog, ImageIcon, InfoCircleIconThin, InlineError, LinkIdentifier, LockCircleIcon, LockIcon, Logo, MAX_STRING_LENGTH, MenuIcon, MenuIconThin, MinusCircleIcon, MonthPicker, MultiInputDateField, NUM_MONTHS, NextIcon, PHONE_MASK, PdfIcon, PlusCircleIcon, PrivacySettingsDialog, RemoveIcon, Review, SSN_MASK, SingleInputDateField, SkipNav, StarIcon, StepList, SvgIcon, TextInput, ThirdPartyExternalLink, TooltipIcon, UsaBanner, UsaFlagIcon, UsaLogo, VARIATION_NAMES, WarningIcon, WhiteHouseLogo, ZIP_MASK, _detectDocumentLanguage, addTranslations, alertSendsAnalytics, buttonSendsAnalytics, defaultAnalyticsFunction, defaultMenuLinks, dialogSendsAnalytics, errorPlacementDefault, eventExtensionText, fallbackLocale, getAnalyticsContentFromRefs, getLanguage, getMonthNames, getTranslations, headerSendsAnalytics, helpDrawerSendsAnalytics, languageMatches, maskValue, privacySettingConfigs, sendAnalytics, sendLinkEvent, setAlertSendsAnalytics, setButtonSendsAnalytics, setDefaultAnalyticsFunction, setDialogSendsAnalytics, setErrorPlacementDefault, setHeaderSendsAnalytics, setHelpDrawerSendsAnalytics, setLanguage, t, tWithLanguage, translate, unmaskValue, useAnalyticsContent, useFormLabel, useId

;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/flags.js
// featureFlags.js
var flags = {
  ERROR_PLACEMENT_DEFAULT: 'top',
  ALERT_SENDS_ANALYTICS: false,
  BUTTON_SENDS_ANALYTICS: false,
  DIALOG_SENDS_ANALYTICS: false,
  HELP_DRAWER_SENDS_ANALYTICS: false
};
function errorPlacementDefault() {
  return flags.ERROR_PLACEMENT_DEFAULT;
}
function setErrorPlacementDefault(value) {
  flags.ERROR_PLACEMENT_DEFAULT = value;
}
function alertSendsAnalytics() {
  return flags.ALERT_SENDS_ANALYTICS;
}
function setAlertSendsAnalytics(value) {
  flags.ALERT_SENDS_ANALYTICS = value;
}
function buttonSendsAnalytics() {
  return flags.BUTTON_SENDS_ANALYTICS;
}
function setButtonSendsAnalytics(value) {
  flags.BUTTON_SENDS_ANALYTICS = value;
}
function dialogSendsAnalytics() {
  return flags.DIALOG_SENDS_ANALYTICS;
}
function setDialogSendsAnalytics(value) {
  flags.DIALOG_SENDS_ANALYTICS = value;
}
function helpDrawerSendsAnalytics() {
  return flags.HELP_DRAWER_SENDS_ANALYTICS;
}
function setHelpDrawerSendsAnalytics(value) {
  flags.HELP_DRAWER_SENDS_ANALYTICS = value;
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Accordion/Accordion.js


var handleKeyDown = function handleKeyDown(e) {
  var target = e.target;
  var accordionElement = e.currentTarget;
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    var triggers = Array.prototype.slice.call(accordionElement.querySelectorAll('.ds-c-accordion__button'));
    var direction = e.key === 'ArrowDown' ? 1 : -1;
    var index = triggers.indexOf(target);
    var length = triggers.length;
    var newIndex = (index + length + direction) % length;
    triggers[newIndex].focus();
    e.preventDefault();
  }
};

/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/accordion/).
 */
var Accordion = function Accordion(_ref) {
  var bordered = _ref.bordered,
    children = _ref.children,
    className = _ref.className;
  var classes = classnames_default()('ds-c-accordion', bordered && 'ds-c-accordion--bordered', className);
  return /*#__PURE__*/react.createElement("div", {
    onKeyDown: handleKeyDown,
    className: classes
  }, children);
};
/* harmony default export */ var Accordion_Accordion = (Accordion);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/locale/en.json
var en_namespaceObject = JSON.parse('{"accordion":{"close":"Close","open":"Open"},"alert":{"defaultLabel":"Notice","error":"Alert","success":"Success","warn":"Warning"},"autocomplete":{"ariaClearLabel":"Clear search to try again","clearInputText":"Clear search","loadingMessage":"Loading...","noResultsMessage":"No results"},"badge":{"alert":"Alert","info":"Notice","success":"Success","warn":"Warning"},"dateField":{"label":"Date","hint":"For example: 4 / 28 / 1986","dayLabel":"Day","monthLabel":"Month","yearLabel":"Year"},"dialog":{"ariaCloseLabel":"Close modal dialog","closeButtonText":"Close"},"drawer":{"ariaLabel":"Close help drawer","closeButtonText":"Close"},"filterChip":{"ariaClearLabel":"Remove","filter":"{{label}} filter"},"icons":{"add":"Add","alertCircle":"Alert","arrowsStacked":"Sort","calendar":"Calendar","upArrow":"up arrow","downArrow":"down arrow","leftArrow":"left arrow","rightArrow":"right arrow","buildingCircle":"Building in circle","checkCircle":"Checkmark in circle","check":"Checkmark","close":"Close","download":"Download","externalLink":"This link goes to an external site","hhsLogo":"Department of Health and Human Services","image":"Image","infoCircle":"Information","lockCircle":"Lock in circle","lock":"Lock","menu":"Menu Icon","next":"Next","remove":"Remove","star":"Star","starEmpty":"Empty Star","starFilled":"Filled Star","starHalf":"Half Star","usaLogo":"USA.gov - Government Made Easy","warning":"Warning"},"inlineError":{"prefix":"Error"},"monthPicker":{"selectAllText":"Select all","clearAllText":"Clear all"},"pagination":{"ariaLabel":"Pagination results","pageXOfY":"Page {{number}} of {{total}}","startLabelText":"Previous","startAriaLabel":"Previous Page","endLabelText":"Next","endAriaLabel":"Next Page"},"privacy":{"advertising":{"category":"Advertising","description":"We use digital advertising tools, such as web beacons, to track the effectiveness of our digital advertising outreach efforts. This helps us identify ads that are helpful to consumers and efficient for outreach. Select “Don’t allow” to block this tracking."},"allow":"Allow","category":"Category","description":"Description","dialogTitle":"{{domain}} privacy settings","dontAllow":"Don\'t allow","introText":"We take your privacy seriously. You can change the settings for each category to choose how we collect and use information while you’re on {{domain}}.","privacyPolicy":"For details, <a href=\\"{{url}}\\">review our full privacy policy</a>","thirdPartyPolicies":"or <a href=\\"{{url}}\\">get the list of specific tools in each category</a>","save":"Update my settings","socialMedia":{"category":"Social Media","description":"If you share our content on Facebook, Twitter, or other social media accounts, we may track what {{domain}} content you share. This helps us improve our social media outreach. Select “Don’t allow” to block this tracking."},"status":"Status","webAnalytics":{"category":"Web Analytics","description":"We use a variety of tools to count, track, and analyze visits to {{domain}}. This helps us understand how people use the site and where we should make improvements. Select “Don’t allow” to block this tracking."}},"review":{"editText":"Edit"},"singleInputDateField":{"close":"Close calendar picker dialog","open":"Open calendar picker dialog","arrowKeyInstructions":"Arrow keys can navigate dates"},"skipNav":{"default":"Skip to main content"},"spinner":{"ariaText":"Loading"},"thirdPartyExternalLink":{"dialogHeading":"You are leaving {{origin}}.","dialogBody":"You\'re about to connect to a third-party site. Select CONTINUE to proceed or CANCEL to stay on this site.","confirmationButtonText":"Continue","cancelButtonText":"Cancel","learnMoreText":"Learn more about links to third-party sites"},"verticalNav":{"expand":"Expand sub-navigation","collapse":"Collapse sub-navigation"},"usaBanner":{"flagIconTitle":"U.S. Flag","bannerLabel":"Official website of the United States government","bannerText":"An official website of the United States government","bannerActionText":"Here\'s how you know","domainHeaderText":"Official websites use .gov","domainAText":"A","govText":".gov","domainText":"website belongs to an official government organization in the United States.","httpsHeaderText":"Secure .gov websites use HTTPS","httpsAText":"A","httpsLockText":"lock","httpsOrText":"or","httpsText":"https://","httpsDetailText":"means you\'ve safely connected to the .gov website. Share sensitive information only on official, secure websites."}}');
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/locale/es.json
var es_namespaceObject = JSON.parse('{"accordion":{"close":"Cerrar","open":"Abrir"},"alert":{"defaultLabel":"Aviso","error":"Alerta","success":"Completado","warn":"Advertencia"},"autocomplete":{"ariaClearLabel":"Borrar búsqueda y volver a intentar","clearInputText":"Borrar búsqueda","loadingMessage":"Cargando...","noResultsMessage":"No hay resultados"},"badge":{"alert":"Alerta","info":"Aviso","success":"Completado","warn":"Advertencia"},"dateField":{"label":"Fecha","hint":"Por ejemplo: 28/4/1986","dayLabel":"Día","monthLabel":"Mes","yearLabel":"Año"},"dialog":{"ariaCloseLabel":"Cerrar cuadro de diálogo modal","closeButtonText":"Cerrar"},"drawer":{"ariaLabel":"Cerrar ventana de ayuda","closeButtonText":"Cerrar"},"filterChip":{"ariaClearLabel":"Eliminar","filter":"{{label}} del filtro"},"icons":{"add":"Añadir","alertCircle":"Alerta","arrowsStacked":"Ordenar","calendar":"Calendario","upArrow":"flecha hacía arriba","downArrow":"flecha hacía abajo","leftArrow":"flecha a la izquierda","rightArrow":"flecha a la derecha","buildingCircle":"edificio en un círculo","checkCircle":"Marca de verificación en círculo","check":" Marca de cotejo","close":"Cerrar","download":"Descargar","externalLink":"Este enlace lo lleva a un sitio externo","hhsLogo":"Departamento de Salud y Servicios Humanos de los Estados Unidos","image":"Imagen","infoCircle":"Información","lockCircle":"Candado en un círculo","lock":"Candado","menu":"Icono de menú","next":"Siguiente","remove":"Eliminar","star":"Estrella","starEmpty":"Estrella vacía","starFilled":"Estrella llena","starHalf":"Media Estrella","usaLogo":"USA.gov – Gobierno más simple","warning":"Advertencia"},"inlineError":{"prefix":"Error"},"monthPicker":{"selectAllText":"Seleccionar todo","clearAllText":"Borrar todo"},"pagination":{"ariaLabel":"Resultados de paginación","pageXOfY":"Página {{number}} de {{total}}","startLabelText":"Anterior","startAriaLabel":"Página anterior","endLabelText":"Siguiente","endAriaLabel":"Página siguiente"},"privacy":{"advertising":{"category":"Publicidad","description":"Usamos herramientas de publicidad digitales, tales como contadores de visitantes, para rastrear la efectividad de nuestros esfuerzos de publicidad digital. Esto nos ayuda a identificar los anuncios que son de utilidad para los consumidores y la difusión eficiente. Seleccione No perminir para bloquear este rastreo."},"allow":"Permitir","category":"Categoría","description":"Descripción","dialogTitle":"Configuración de privacidad de {{domain}}","dontAllow":"No permitir","introText":"Tomamos su privacidad en serio. Puede cambiar la configuración de cada categoría para elegir cómo recopilamos y usamos la información mientras está en {{domain}}.","privacyPolicy":"Para más detalles, <a href=\\"{{url}}\\">revise nuestra política de privacidad completa</a>","thirdPartyPolicies":"u <a href=\\"{{url}}\\">obtenga la lista de herramientas específicas en cada categoría</a>","save":"Actualizar mi configuración","socialMedia":{"category":"Redes Sociales","description":"Si comparte nuestro contenido en Facebook, Twitter u otras cuentas de redes sociales, podemos rastrear el contenido de {{domain}} que comparte. Esto nos ayuda a mejorar nuestro alcance en los medios de comunicación social. Seleccione No perminir para bloquear este rastreo."},"status":"Estatus","webAnalytics":{"category":"Análisis Web","description":"Usamos una variedad de herramientas para contar, rastrear y analizar las visitas a {{domain}}. Esto nos ayuda a entender cómo las personas usan el sitio y dónde debemos mejorar. Seleccione No perminir para bloquear este rastreo."}},"review":{"editText":"Editar"},"singleInputDateField":{"close":"Abrir el cuadro para seleccionar el calendario","open":"Cerrar el cuadra para seleccionar el calendario","arrowKeyInstructions":"Las teclas de flecha pueden navegar por las fechas"},"skipNav":{"default":"Ir al contenido principal"},"spinner":{"ariaText":"Cargando"},"thirdPartyExternalLink":{"dialogHeading":"Está saliendo de {{origin}}.","dialogBody":"Está a punto de conectarse a un sitio de terceros. Seleccione CONTINUAR para continuar o CANCELAR para permanecer en este sitio.","confirmationButtonText":"Continuar","cancelButtonText":"Cancelar","learnMoreText":"Más información sobre enlaces a sitios de terceros"},"verticalNav":{"expand":"expandir subnavegación","collapse":"cerrar subnavegación"},"usaBanner":{"flagIconTitle":"U.S. Bandera","bannerLabel":"Un sitio oficial del Gobierno de Estados Unidos","bannerText":"Un sitio oficial del Gobierno de Estados Unidos","bannerActionText":"Así es como usted puede verificarlo","domainHeaderText":"Los sitios web oficiales usan .gov","domainAText":"Un sitio web","govText":".gov","domainText":"pertenece a una organización oficial del Gobierno de Estados Unidos.","httpsHeaderText":"Los sitios web seguros .gov usan HTTPS","httpsAText":"Un","httpsLockText":"candado","httpsOrText":"o","httpsText":"https://","httpsDetailText":"significa que usted se conectó de forma segura a un sitio web .gov. Comparta información sensible sólo en sitios web oficiales y seguros."}}');
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(7361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/i18n.js
var _detectDocumentLangua;



function _detectDocumentLanguage() {
  var _document$querySelect, _document$querySelect2;
  if (typeof document === 'undefined') {
    return undefined;
  }
  var detectedLang = (_document$querySelect = (_document$querySelect2 = document.querySelector('html')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.lang) !== null && _document$querySelect !== void 0 ? _document$querySelect : '';
  var validLangs = ['en', 'es'];
  for (var _i = 0, _validLangs = validLangs; _i < _validLangs.length; _i++) {
    var lang = _validLangs[_i];
    if (languageMatches(lang, detectedLang)) {
      return lang;
    }
  }
  return undefined;
}
var language = (_detectDocumentLangua = _detectDocumentLanguage()) !== nuctDocumentLangua : 'en';
function getLanguage() {
  return language;
}
function setLanguage(lang) {
  language = lang;
}
function getTranslations() {
  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLanguage();
  return laranslations) {
  Object.assign(getTranslations(lang), translations);
}

/**
 * Because language strings can contain region subtags, we need a way to compare
 * just the language portion of two language strings. This function compares two
 * locale strings that may or may not contain subtags according to IETF BCP 47.
 * The second string defaults to our globally set language.
 */
function languageMatches(localeStringA) {
  var localeStringB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getLanguage();
  var langA = localeStringA.split('-')[0];
  var langB = localeStringB.split('-')[0];
  return langA === langB;
}

/**
 * Falls back to a more generic locale if the more specific one isn't
 * available in this browser. Testing platforms tend to have only a
 * few locales.
 */
function fallbackLocale(language, subtag) {
  try {
    var locale = "".concat(language, "-").concat(subtag);
    // If the locale string is invalid, the following line will fail and jump to
    // our catch block; otherwise, it is valid and safe to return it.
    new Date().toLocaleString(locale);
    return locale;
  } catch (error) {
    return language;
  }
}

/**
 * Returns the translation for a given key for a given language. For most
 * use cases, the `t` function will be more appropriate, where the language
 * is not a required parameter. Use this when you need a translation from
 * a specific language.
 */
function translate() {
  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLanguage();
  var key = arguments.length > 1 ? arguments[1] : undefined;
  var data = arguments.length > 2 ? arguments[2] : undefined;
  var rawTranslation = get_default()(getTranslations(lang), key);
  if (typeof rawTranslation !== 'string') {
    throw new Error("Translation key '".concat(key, "' does not resolve to a string."));
  }
  if (data) {
    // Replace template strings with prolatedString.replace("{{".concat(dataKey, "}}"), data[dataKey]);
    }, rawTranslation);
    return interpolatedTranslation;
  } else {
    return rawTranslation;
  }
}

/**
 * Retuunction t(key, data) {
  return translate(getLanguage(), key, data);
}
/**
 * Returns a translation function bound to a specific language.
 *
 * Note that we don't want to use this to create the default `t` function
 * because it will bind with whatever the default language is AT THAT TIME,
 * so if the global language changes after we call this function,
 * translations coming out if it wouldn't pick up on the change.
 */
function tWithLanguage(lang) {
  return function t(key, data) {
    return translate(lang, key, data);
  };
}
// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(3955);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/utilities/useId.js



/**
 * Generates a unique id.
 *
 * TODO: Once we're on React 18, we can use the `useId` hook instead of rolling
 * our own with `useRef` and lodash.
 */
function useId(prefix, providedId) {
  return (0,react.useRef)(providedId !== null && providedId !== void 0 ? providedId : uniqueId_default()(prefix)).current;
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/SvgIcon.js
var _excluded = ["ariaHidden", "className", "children", "description", "id", "inversed", "title", "viewBox"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




// a type for react icon components that makes the 'title' prop optional & removes 'children' from type

function SvgIcon(_ref) {
  var ariaHidden = _ref.ariaHidden,
    className = _ref.className,
    children = _ref.children,
    description = _ref.description,
    id = _ref.id,
    inversed = _ref.inversed,
    title = _ref.title,
    viewBox = _ref.viewBox,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var svgClasses = classnames_default()('ds-c-icon', {
    'ds-c-icon--inverse': inversed
  }, className);
  var rootId = useId('icon--', id);
  var titleId = "".concat(rootId, "__title");
  var descriptionId = "".concat(rootId, "__desc");
  var ariaLabelledBy = description ? "".concat(titleId, " ").concat(descriptionId) : titleId;
  var isSrVisible = !ariaHidden;
  var screenReaderProps = {};
  if (isSrVisible) {
    screenReaderProps['aria-labelledby'] = ariaLabelledBy;
    screenReaderProps['role'] = 'img';
  }
  return /*#__PURE__*/react.createElement("svg", _extends({
    "aria-hidden": ariaHidden,
    className: svgClasses,
    id: (id !== null && id !== void 0 ? id : isSrVisible) ? rootId : undefined,
    viewBox: viewBox,
    xmlns: "http://www.w3.org/2000/svg"
  }, screenReaderProps, otherProps), isSrVisible && /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title), isSrVisible && description && /*#__PURE__*/react.createElement("desc", {
    id: descriptionId
  }, description), children);
}
SvgIcon.defaultProps = {
  ariaHidden: true,
  inversed: false
};
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/RemoveIcon.js
function RemoveIcon_extends() { RemoveIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RemoveIcon_extends.apply(this, arguments); }



var defaultProps = {
  className: '',
  viewBox: '0 0 24 24'
};
function RemoveIcon(props) {
  var iconCssClasses = "ds-c-icon--remove ".concat(props.className || '');
  return /*#__PURE__*/react.createElement(SvgIcon, RemoveIcon_extends({
    title: t('icons.remove')
  }, defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19 13H5v-2h14v2z"
  }));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/AddIcon.js
function AddIcon_extends() { AddIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AddIcon_extends.apply(this, arguments); }



var AddIcon_defaultProps = {
  className: '',
  viewBox: '3 3 18 18'
};
function AddIcon(props) {
  var iconCssClasses = "ds-c-icon--add ".concat(props.className || '');
  return /*#__PURE__*/react.createElement(SvgIcon, AddIcon_extends({
    title: t('icons.add')
  }, AddIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  }));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Accordion/AccordionItem.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var AccordionItem_AccordionItem = function AccordionItem(_ref) {
  var buttonClassName = _ref.buttonClassName,
    children = _ref.children,
    contentClassName = _ref.contentClassName,
    defaultOpen = _ref.defaultOpen,
    heading = _ref.heading,
    headingLevel = _ref.headingLevel,
    id = _ref.id,
    isControlledOpen = _ref.isControlledOpen,
    onChange = _ref.onChange,
    closeIconComponent = _ref.closeIconComponent,
    openIconComponent = _ref.openIconComponent;
  var contentClasses = classnames_default()('ds-c-accordion__content', contentClassName);
  var buttonClasses = classnames_default()('ds-c-accordion__button', buttonClassName);
  var HeadingTag = "h".concat(headingLevel);
  var isControlled = !!onChange;
  var contentId = useId('accordion-item--', id);
  var buttonId = "".concat(contentId, "__button");
  var _useState = (0,react.useState)(isControlled ? isControlledOpen : defaultOpen),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];

  // Set the state for opening and closing an accordion item
  var handleClick = function handleClick() {
    if (isControlled) {
      onChange();
    } else {
      setIsOpen(!isOpen);
    }
  };
  var isItemOpen = isControlled ? isControlledOpen : isOpen;
  var CloseIconComponent = closeIconComponent;
  var OpenIconComponent = openIconComponent;
  var closeIcon = /*#__PURE__*/react.createElement(CloseIconComponent, {
    className: "ds-c-accordion__button-icon",
    title: t('accordion.close'),
    ariaHidden: false,
    id: "".concat(contentId, "__icon")
  });
  var openIcon = /*#__PURE__*/react.createElement(OpenIconComponent, {
    className: "ds-c-accordion__button-icon",
    title: t('accordion.open'),
    ariaHidden: false,
    id: "".concat(contentId, "__icon")
  });
  if (heading) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(HeadingTag, {
      className: "ds-c-accordion__heading"
    }, /*#__PURE__*/react.createElement("button", {
      className: buttonClasses,
      "aria-expanded": isItemOpen,
      "aria-controls": contentId,
      id: buttonId,
      onClick: handleClick,
      type: "button"
    }, heading, isItemOpen ? closeIcon : openIcon)), /*#__PURE__*/react.createElement("div", {
      className: contentClasses,
      "aria-labelledby": buttonId,
      id: contentId,
      hidden: isControlled ? !isControlledOpen : !isOpen
    }, children));
  }
};
AccordionItem_AccordionItem.defaultProps = {
  defaultOpen: false,
  headingLevel: '2',
  closeIconComponent: RemoveIcon,
  openIconComponent: AddIcon
};
/* harmony default export */ var Accordion_AccordionItem = (AccordionItem_AccordionItem);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Accordion/index.js


;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/utilities/mergeRefs.js
/**
 * Combines multiple refs into one, even old-style ref functions
 *
 * Borrowed from https://github.com/gregberge/react-merge-refs/blob/main/src/index.tsx
 */
function mergeRefs(refs) {
  return function (value) {
    refs.forEach(function (ref) {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/utilities/useAutoFocus.js


/**
 * Returns a ref and will focus on the element that ref is attached to
 * if the `autoFocus` boolean parameter is truthy.
 */
var useAutofocus = function useAutofocus(autoFocus) {
  var ref = (0,react.useRef)();
  (0,react.useEffect)(function () {
    var _ref$current;
    if (autoFocus && (_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.focus) {
      var _ref$current2;
      (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.focus();
    }
  }, [ref, autoFocus]);
  return ref;
};
/* harmony default export */ var useAutoFocus = (useAutofocus);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/analytics/events.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Functions for sending events to Tealium/Google Analytics
 * Based on HRA Tool & SEP screener & Coverage Tools analytics service:
 * - hra-tool/src/services/analytics.js
 * - screener/src/assets/js/utils/analytics-util.js
 * - coverage-tools-frontend/src/helpers/objectUtilities.ts
 */

var EventCategory = /*#__PURE__*/function (EventCategory) {
  EventCategory["UI_COMPONENTS"] = "ui components";
  EventCategory["UI_INTERACTION"] = "ui int EventType["UI_INTERACTION"] = "ui interaction";
  return EventType;
}({});

// This is the default event 'extension' for events arising from the DS
var eventExtensionText = 'Design system integration';
var MAX_STRING_LENGTH = 100;
/**
 * Clip all the string values to the MAX_STRING_LENGTH on an event object in place by mutation
 */
function clipStrings(event) {
  for (var key in event) {
    var value = event[key];
    if (typeof value === 'string') {
      event[key] = value.substring(0, MAX_STRING_LENGTH);
    }
  }
  return event;
}
var MAX_RETRIES = 3;
var TIMEOUT = 300;

/**
 * Use existing window.utag.link function to send analytics events. If the function does not
 * exist right away, try again after TIMEOUT milliseconds until we've reached MAX_RETRIES.
 */
function sendAnalytics(eventType, event) {
  var retry = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  // If we were to define this on the window object using `declare global { interface Window { utag: ... } }`
  // that type definition of window.utag can conflict with downstream declarations. This happened before, and
  // our fix is to only have a local type so we can get some type-checking without risk of conflicts. This
  // feature of TypeScript is well intentioned (because if you're using globals, you want to make sure every
  // module agrees on what they are), but in reality this type definition could vary in trivial ways but
  // break a build.
  var utag = window.utag;
  if (utag && utag[eventType]) {
    clipStrings(event);
    try {
      utag[eventType](_objectSpread({
        // Expand the event object to support the properties expected on healthcare.gov
        ga_eventValue: '',
        // default value
        ga_eventAction: event.event_action,
        ga_eventCategory: event.event_category,
        ga_eventLabel: event.event_label
      }, event));
    } catch (error) {
      console.warn('Error sending analytics event: ', erroron () {
        return sendAnalnction sendLinkEvent(event) {
  return sendAnalytics('link', event);
}
var defaultAnalyticsFunction = sendLinkEvent;

/**
 * Allows applications to override the default `onAnalyticsEvent` function
 * across the whole system. To override it for a singanalyticsFunction) {
  defaultAnalyticsFunction = analyticsFunction;
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/analytics/getAnalyticsContentFromRefs.js
functioll || _ref$current === void 0 ? void 0 : _ref$current.textContent;
  }).find(function (textContent) {
    return textContent;
  });
}
/* harmony default export */ var analytics_getAnalyticsContentFromRefs = (getAnalyticsContentFromRefs);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/analytics/useAnalyticsContent.js


/**
 * Use this hook to retrieve rendered content for use in analytics events.
 * It accepts `onMount` and `onUnmount` event handlers, which will be called
 * with the rendered textContent of the desired element. It grabs text content
 * from the first element that has it, in order of the returned refs array.
 * In the example below, it will favor content from `headingRef` (first ref)
 * but will fall back to `bodyRef` (second ref) if no content is found:
 *
 * const [headingRef, bodyRef] = useAnalyticsContent({
 *   onMount: (content: string | undefined) => {
 *     if (!content) {
 *       console.error('No content found for [component-name] analytics event');
 *       return;
 *     }
 *     sendLinkEvent({
 *       event_name: 'alert_impression',
 *       event_type: EventType.UI_INTERACTION,
 *       ga_eventAction: 'alert impression',
 *       ga_eventCategory: EventCategory.UI_COMPONENTS,
 *       ga_eventLabel: content,
 *       heading: content,
 *       type: variation,
 *     });
 *   }
 * })
 *
 * return (
 *   <div>
 *     <h1 ref={headingRef}>Hello World</h1>
 *     <p ref={bodyRef}>
 *       I'm some body text
 *     </p>
 *   </div>
 * )
 */
function useAnalyticsContent(_ref) {
  var componentName = _ref.componentName,
    onMount = _ref.onMount,
    onUnmount = _ref.onUnmount;
  // Three refs should be enough to support fallback content. Add more in the future if needed
  var refs = [(0,react.useRef)(), (0,react.useRef)(), (0,react.useRef)()];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // According to this lint rule, we need to include all the dependencies of this function in the
  // dependency array. However, in order for this useEffect to only fire on first render, we would
  // need to memoize the two callback functions. This is an unnecessary burden on the implementing
  // class, and there isn't a good way to memoize the props we receive here because they *also*
  // have dependencies that should be listed but are unknown. This assumes that the onMount and
  // onUnmount do not have a reason to change between renders.
  (0,react.useEffect)(function () {
    var content = analytics_getAnalytics   return function () {
      if (onUnmount) onUnmount(content);
    };
  }, []);
  return refs;
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Alert/useAlertAnalytics.js
function useAlertAnalytics_slicedToArray(arr, i) { return useAlertAnalytics_arrayWithHoles(arr) || useAlertAnalytics_iterableToArrayLimit(arr, i) || useAlertAnalytics_unsupportedIterableToArray(arr, i) || useAlertAnalytics_nonIterableRest(); }
function useAlertAnalytics_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useAlertAnalytics_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useAlertAnalytics_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useAlertAnalytics_arrayLikeToArray(o, minLen); }
function useAlertAnalytics_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function useAlertAnalytics_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function useAlertAnalytics_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useAlertAnalytics(_ref) {
  var analytics = _ref.analytics,
    analyticsLabelOverride = _ref.analyticsLabelOverride,
    _ref$onAnalyticsEvent = _ref.onAnalyticsEvent,
    onAnalyticsEvent = _ref$onAnalyticsEvent === void 0 ? defaultAnalyticsFunction : _ref$onAnalyticsEvent,
    variation = _ref.variation;
  // Order matters! Content comes from the heading first and falls back to body if heading doesn't exist
  var _useAnalyticsContent = useAnalyticsContent({
      componentName: 'Alert',
      onMount: function onMount(content) {
        if (analytics !== true && (!alertSendsAnalytics() || analytics === false)) {
          return;
        }

        // Do not send analytics event for default alerts
        if (!variation) {
          return;
        }
        var eventHeadingText = analyticsLabelOverride !== null && analyticsLabelOverride !== void 0 ? analyticsLabelOverride : content;
        if (!eventHeadingText) {
          console.error('No content found for Dialog analytics event');
          return;
        }
        onAnalyticsEvent({
          event_name: 'alert_impression',
          event_type: EventType.UI_INTERACTION,
          event_action: 'alert impression',
          event_extension: eventExtensionText,
          event_category: EventCategory.UI_COMPONENTS,
          event_label: eventHeadingText,
          heading: eventHeadingText,
          type: variation
        });
      }
    }),
    _useAnalyticsContent2 = useAlertAnalytics_slicedToArray(_useAnalyticsContent, 2),
    headingRef = _useAnalyticsContent2[0],
    bodyRef = _useAnalyticsContent2[1];
  return {
    headingRef: headingRef,
    bodyRef: bodyRef
  };
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/AlertCircleIcon.js
function AlertCircleIcon_extends() { AlertCircleIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AlertCircleIcon_extends.apply(this, arguments); }



var AlertCircleIcon_defaultProps = {
  className: '',
  viewBox: '37 2 135 135'
};
function AlertCircleIcon(props) {
  var iconCssClasses = "ds-c-icon--alert-circle ".concat(props.className || '');
  return /*#__PURE__*/react.createElement(SvgIcon, AlertCircleIcon_extends({
    title: t('icons.alertCircle')
  }, AlertCircleIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("path", {
    d: "M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.821 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.351 2.798 21.82 8.392 31.408 5.595 9.584 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771C167.773 94.82 170.57 84.35 170.57 73c0-11.351-2.797-21.822-8.39-31.408zm-43.75 70.433c0 .761-.246 1.398-.734 1.914s-1.086.773-1.793.773H100.26c-.706 0-1.331-.271-1.874-.814-.543-.543-.814-1.168-.814-1.873V96.546c0-.706.271-1.331.814-1.874.543-.543 1.168-.814 1.874-.814h15.643c.707 0 1.306.258 1.793.773.488.518.734 1.154.734 1.915v15.479zm-.164-28.026c-.055.543-.339 1.019-.854 1.426-.517.407-1.154.61-1.914.61h-15.073c-.761 0-1.413-.203-1.956-.61-.543-.407-.815-.883-.815-1.426l-1.385-50.595c0-.653.271-1.141.814-1.467.544-.434 1.196-.652 1.956-.652h17.926c.761 0 1.412.217 1.955.652.543.326.813.815.813 1.467l-1.467 50.595z"
  }));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/CheckCircleIcon.js
function CheckCircleIcon_extends() { CheckCircleIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CheckCircleIcon_extends.apply(this, arguments); }



var CheckCircleIcon_defaultProps = {
  className: '',
  viewBox: '38 7 135 135'
};
function CheckCircleIcon(props) {
  var iconCssClasses = "ds-c-icon--check-circle ".concat(props.className || '');
  return /*#__PURE__*/react.createElement(SvgIcon, CheckCircleIcon_extends({
    title: t('icons.checkCircle')
  }, CheckCircleIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("path", {
    d: "M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.822 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.352 2.798 21.82 8.392 31.408 5.595 9.585 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771 5.594-9.587 8.391-20.057 8.391-31.408 0-11.352-2.797-21.822-8.39-31.408zm-13.608 21.876l-44.239 44.239c-1.032 1.032-2.281 1.549-3.748 1.549-1.412 0-2.634-.517-3.666-1.549L67.425 78.215c-.977-.979-1.466-2.199-1.466-3.666 0-1.521.488-2.771 1.466-3.749l7.414-7.332c1.033-1.032 2.254-1.548 3.667-1.548s2.635.516 3.667 1.548l18.413 18.413 33.241-33.16c1.032-1.032 2.254-1.548 3.666-1.548 1.411 0 2.635.516 3.666 1.548l7.414 7.333c.979.977 1.467 2.226 1.467 3.747 0 1.467-.488 2.689-1.468 3.667z"
  }));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/WarningIcon.js
function WarningIcon_extends() { WarningIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return WarningIcon_extends.apply(this, arguments); }



var WarningIcon_defaultProps = {
  className: '',
  viewBox: '27 0 160 135'
};
function WarningIcon(props) {
  var iconCssClasses = "ds-c-icon--warning ".concat(props.className || '');
  return /*#__PURE__*/react.createElement(SvgIcon, WarningIcon_extends({
    title: t('icons.warning')
  }, WarningIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("path", {
    d: "M179.695 125.388L117.126 10.673a10.39 10.39 0 00-3.832-3.992 10.1 10.1 0 00-5.295-1.467c-1.901 0-3.667.49-5.296 1.467s-2.906 2.308-3.829 3.992L36.303 125.388c-1.901 3.423-1.847 6.845.163 10.267a10.24 10.24 0 003.789 3.746 10.188 10.188 0 005.174 1.387H170.57c1.849 0 3.572-.463 5.175-1.387a10.24 10.24 0 003.789-3.746c2.01-3.423 2.064-6.844.161-10.267zm-61.265-8.148c0 .76-.259 1.398-.773 1.914-.516.516-1.127.773-1.834.773H100.18c-.706 0-1.317-.257-1.833-.773-.516-.517-.774-1.154-.774-1.914v-15.48c0-.76.258-1.397.774-1.914.516-.516 1.126-.773 1.833-.773h15.642c.707 0 1.318.257 1.834.773.515.517.773 1.154.773 1.914v15.48zm-.162-30.47c-.056.543-.341.991-.856 1.344-.517.354-1.154.529-1.915.529h-15.073c-.76 0-1.412-.176-1.955-.529-.544-.354-.815-.801-.815-1.346l-1.385-37.231c0-.761.272-1.331.815-1.711.706-.597 1.358-.896 1.956-.896h17.924c.598 0 1.25.298 1.956.896.543.38.813.896.813 1.548l-1.465 37.396z"
  }));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/InfoCircleIcon.js
function InfoCircleIcon_extends() { InfoCircleIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return InfoCircleIcon_extends.apply(this, arguments); }



var InfoCircleIcon_defaultProps = {
  className: '',
  viewBox: '37 2 135 135'
};
function InfoCircleIcon(props) {
  var iconCssClasses = "ds-c-icon--info-circle ".concat(props.className || '');
  return /*#__PURE__*/react.createElement(SvgIcon, InfoCircleIcon_extends({
    title: t('icons.infoCircle')
  }, InfoCircleIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("path", {
    d: "M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.822 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.352 2.798 21.82 8.392 31.408 5.595 9.585 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771 5.594-9.587 8.391-20.057 8.391-31.408 0-11.352-2.797-21.822-8.39-31.408zM97.572 26.071c0-.761.244-1.385.733-1.874.489-.488 1.114-.733 1.874-.733h15.644c.76 0 1.385.245 1.872.733.488.489.734 1.113.734 1.874v13.036c0 .76-.246 1.385-.734 1.873-.487.489-1.112.733-1.872.733h-15.644c-.76 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.873V26.071zm31.285 86.036c0 .76-.246 1.385-.733 1.872-.487.489-1.112.733-1.874.733h-36.5c-.761 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.873V99.07c0-.762.244-1.385.733-1.874.489-.488 1.114-.733 1.874-.733h7.822V70.392H89.75c-.761 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.874V54.75c0-.761.244-1.385.733-1.874.489-.489 1.114-.733 1.874-.733h26.073c.76 0 1.385.244 1.872.733.488.489.734 1.113.734 1.874v41.714h7.82c.761 0 1.386.245 1.874.733.487.488.733 1.113.733 1.874v13.036z"
  }));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Alert/Alert.js
var Alert_excluded = ["children", "className", "autoFocus", "heading", "headingId", "headingLevel", "hideIcon", "alertRef", "role", "variation", "weight", "analytics", "analyticsLabelOverride", "analyticsEventTypeOverride", "onAnalyticsEvent"];
function Alert_extends() { Alert_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Alert_extends.apply(this, arguments); }
function Alert_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Alert_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Alert_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/alert/).
 */
var Alert = function Alert(props) {
  var _props$headingId;
  var _useAlertAnalytics = useAlertAnalytics(props),
    headingRef = _useAlertAnalytics.headingRef,
    bodyRef = _useAlertAnalytics.bodyRef;
  var focusRef = useAutoFocus(props.autoFocus);
  var rootId = useId('alert--', props.id);
  var headingId = (_props$headingId = props.headingId) !== null && _props$headingId !== void 0 ? _props$headingId : "".concat(rootId, "__heading");
  var a11yLabelId = "".concat(rootId, "__a11y-label");
  if (false) {}
  var children = props.children,
    className = props.className,
    autoFocus = props.autoFocus,
    heading = props.heading,
    _headingId = props.headingId,
    headingLevel = props.headingLevel,
    hideIcon = props.hideIcon,
    alertRef = props.alertRef,
    role = props.role,
    variation = props.variation,
    weight = props.weight,
    analytics = props.analytics,
    analyticsLabelOverride = props.analyticsLabelOverride,
    analyticsEventTypeOverride = props.analyticsEventTypeOverride,
    onAnalyticsEvent = props.onAnalyticsEvent,
    alertProps = Alert_objectWithoutProperties(props, Alert_excluded);
  var headingElement;
  if (heading) {
    var Heading = "h".concat(headingLevel);
    headingElement = /*#__PURE__*/react.createElement(Heading, {
      className: "ds-c-alert__heading"
    }, heading);
  }
  var classes = classnames_default()('ds-c-alert', hideIcon && 'ds-c-alert--hide-icon', variation && "ds-c-alert--".concat(variation), weight && "ds-c-alert--".concat(weight), className);
  var a11yLabelText = t("alert.".concat(variation !== null && variation !== void 0 ? variation : 'defaultLabel'));
  var a11yLabel = /*#__PURE__*/react.createElement("span", {
    className: "ds-c-alert__a11y-label ds-u-visibility--screen-reader",
    id: a11yLabelId
  }, "".concat(a11yLabelText, ": "));

  // getting proper icon for alert variation
  function getIcon() {
    var iconClass = 'ds-c-alert__icon';
    if (hideIcon) {
      return null;
    }
    switch (variation) {
      case 'error':
        return /*#__PURE__*/react.createElement(AlertCircleIcon, {
          className: iconClass
        });
      case 'success':
        return /*#__PURE__*/react.createElement(CheckCircleIcon, {
          className: iconClass
        });
      case 'warn':
        return /*#__PURE__*/react.createElement(WarningIcon, {
          className: iconClass
        });
      default:
        return /*#__PURE__*/react.createElement(InfoCircleIcon, {
          className: iconClass
        });
    }
  }
  return /*#__PURE__*/react.createElement("div", Alert_extends({
    className: classes,
    ref: mergeRefs([alertRef, focusRef]),
    tabIndex: alertRef || autoFocus ? -1 : null,
    role: role,
    "aria-labelledby": heading ? headingId : a11yLabelId
  }, alertProps), getIcon(), /*#__PURE__*/react.createElement("div", {
    className: "ds-c-alert__body",
    id: headingId,
    ref: bodyRef
  }, heading ? /*#__PURE__*/react.createElement("div", {
    className: "ds-c-alert__header ds-c-alert__heading",
    ref: headingRef
  }, a11yLabel, headingElement) : a11yLabel, children));
};
Alert.defaultProps = {
  role: 'region',
  headingLevel: '2'
};
/* harmony default export */ var Alert_Alert = (Alert);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Alert/index.js

;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Button/useButtonAnalytics.js
function useButtonAnalytics_typeof(obj) { "@babel/helpers - typeof"; return useButtonAnalytics_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, useButtonAnalytics_typeof(obj); }
function useButtonAnalytics_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function useButtonAnalytics_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useButtonAnalytics_ownKeys(Object(source), !0).forEach(function (key) { useButtonAnalytics_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useButtonAnalytics_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useButtonAnalytics_defineProperty(obj, key, value) { key = useButtonAnalytics_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function useButtonAnalytics_toPropertyKey(arg) { var key = useButtonAnalytics_toPrimitive(arg, "string"); return useButtonAnalytics_typeof(key) === "symbol" ? key : String(key); }
function useButtonAnalytics_toPrimitive(input, hint) { if (useButtonAnalytics_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (useButtonAnalytics_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



function useButtonAnalytics(_ref) {
  var analytics = _ref.analytics,
    analyticsLabelOverride = _ref.analyticsLabelOverride,
    analyticsParentHeading = _ref.analyticsParentHeading,
    analyticsParentType = _ref.analyticsParentType,
    href = _ref.href,
    _ref$onAnalyticsEvent = _ref.onAnalyticsEvent,
    onAnalyticsEvent = _ref$onAnalyticsEvent === void 0 ? defaultAnalyticsFunction : _ref$onAnalyticsEvent,
    type = _ref.type,
    variation = _ref.variation;
  var contentRef = (0,react.useRef)();
  function sendButtonEvent() {
    if (analytics !== true && (!buttonSendsAnalytics() || analytics === false)) {
      return;
    }
    var buttonText = analyticsLabelOverride !== null && analyticsLabelOverride !== void 0 ? analyticsLabelOverride : getAnalyticsContentFromRefs([contentRef]);
    var buttonStyle = variation !== null && variation !== void 0 ? variation : 'default';
    var buttonType = type !== null && type !== void 0 ? type : 'button';
    var buttonParentHeading = analyticsParentHeading !== null && analyticsParentHeading !== void 0 ? analyticsParentHeading : ' ';
    var buttonParentType = analyticsParentType !== null && analyticsParentType !== void 0 ? analyticsParentType : ' ';
    return onAnalyticsEvent(useButtonAnalytics_objectSpread({
      event_name: 'button_engagement',
      event_type: EventType.UI_INTERACTION,
      event_category: EventCategory.UI_INTERACTION,
      event_action: "engaged ".concat(buttonStyle, " button"),
      event_label: href ? "".concat(buttonText, ": ").concat(href) : buttonText,
      event_extension: eventExtensionText,
      text: buttonText,
      button_style: buttonStyle,
      button_type: href ? 'link' : buttonType,
      parent_component_heading: buttonParentHeading,
      parent_component_type: buttonParentType
    }, href ? {
      link_url: href
    } : {}));
  }
  return {
    contentRef: contentRef,
    sendButtonEvent: sendButtonEvent
  };
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Button/Button.js
function Button_typeof(obj) { "@babel/helpers - typeof"; return Button_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Button_typeof(obj); }
var Button_excluded = ["analytics", "analyticsLabelOverride", "analyticsEventTypeOverride", "analyticsParentHeading", "analyticsParentType", "onAnalyticsEvent", "children", "className", "inputRef", "isAlternate", "onClick", "onDark", "size", "variation"];
function Button_extends() { Button_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Button_extends.apply(this, arguments); }
function Button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Button_ownKeys(Object(source), !0).forEach(function (key) { Button_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Button_defineProperty(obj, key, value) { key = Button_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Button_toPropertyKey(arg) { var key = Button_toPrimitive(arg, "string"); return Button_typeof(key) === "symbol" ? key : String(key); }
function Button_toPrimitive(input, hint) { if (Button_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Button_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





// Collect all the additional properties that one could supply to a button component
// that will be passed down to whatever element or component is being used. This is
// generally permissive in order to keep the typing simple at the expense of being
// more accurate. In a previous version of this, `OtherProps` was generic so that we
// could extract any props from a custom component that is being passed in; however,
// we are deprecating that prop because it's not actually needed and creates
// unnecessary complexity that we have to maintain.
/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/button/).
 */
var Button = function Button(props) {
  var analytics = props.analytics,
    analyticsLabelOverride = props.analyticsLabelOverride,
    analyticsEventTypeOverride = props.analyticsEventTypeOverride,
    analyticsParentHeading = props.analyticsParentHeading,
    analyticsParentType = props.analyticsParentType,
    onAnalyticsEvent = props.onAnalyticsEvent,
    children = props.children,
    className = props.className,
    inputRef = props.inputRef,
    isAlternate = props.isAlternate,
    onClick = props.onClick,
    onDark = props.onDark,
    size = props.size,
    variation = props.variation,
    otherProps = Button_objectWithoutProperties(props, Button_excluded);
  var _useButtonAnalytics = useButtonAnalytics(props),
    contentRef = _useButtonAnalytics.contentRef,
    sendButtonEvent = _useButtonAnalytics.sendButtonEvent;
  var ComponentType = props.href ? 'a' : 'button';
  var colorSchemeClass = isAlternate && "ds-c-button--alternate";
  var modeClass = onDark && "ds-c-button--on-dark";
  var sizeClass = size && "ds-c-button--".concat(size);
  var variationClass = variation && "ds-c-button--".concat(variation);
  var allClassNames = classnames_default()('ds-c-button', colorSchemeClass, modeClass, sizeClass, variationClass, className);
  var attrs = Button_objectSpread(Button_objectSpread({}, otherProps), {}, {
    className: allClassNames
  });
  if (ComponentType !== 'button') {
    delete attrs.disabled;
    delete attrs.type;
    if (props.disabled) {
      attrs.role = 'link';
      attrs['aria-disabled'] = true;
      delete attrs.href;
    }
  }
  function handleClick(e) {
    if (!props.disabled) {
      sendButtonEvent();
      if (onClick) {
        onClick(e);
      }
    }
  }
  function handleKeyPress(e) {
    // Trigger onClick on space key event for `<a>` elements
    if (e.key === ' ') {
      handleClick(e);
    }
  }
  return /*#__PURE__*/react.createElement(ComponentType, Button_extends({
    ref: mergeRefs([inputRef, contentRef]),
    onClick: handleClick,
    onKeyPress: ComponentType === 'a' ? handleKeyPress : undefined
  }, attrs), children);
};
Button.defaultProps = {
  isAlternate: false,
  onDark: false,
  type: 'button'
};
/* harmony default export */ var Button_Button = (Button);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Button/index.js

// EXTERNAL MODULE: ./node_modules/ev-emitter/ev-emitter.js
var ev_emitter = __webpack_require__(7158);
var ev_emitter_default = /*#__PURE__*/__webpack_require__.n(ev_emitter);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/InlineError/InlineError.js






/**
 * <InlineError> is an internal component used by <FormLabel>
 * <InlineError> is also exported for advanced design system use cases, where the internal component can be leveraged to build custom form components
 */

function InlineError(_ref) {
  var children = _ref.children,
    className = _ref.className,
    id = _ref.id,
    inversed = _ref.inversed;
  var classes = classnames_default()('ds-c-inline-error', 'ds-c-field__error-message', {
    'ds-c-field__error-message--inverse': inversed
  }, className);
  var viewbox = '36 -12 186 186';
  return /*#__PURE__*/react.createElement("span", {
    className: classes,
    id: useId('inline-error--', id),
    "aria-live": "assertive",
    "aria-atomic": "true"
  }, /*#__PURE__*/react.createElement(AlertCircleIcon, {
    viewBox: viewbox
  }), /*#__PURE__*/react.createElement("span", {
    className: "ds-u-visibility--screen-reader"
  }, "".concat(t('inlineError.prefix'), ": ")), children);
}
/* harmony default export */ var InlineError_InlineError = (InlineError);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/FormLabel/FormLabel.js
var FormLabel_excluded = ["fieldId", "id", "children", "component", "hint", "textClassName", "className", "inversed", "errorMessage", "errorMessageClassName", "errorId", "requirementLabel"];
function FormLabel_extends() { FormLabel_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FormLabel_extends.apply(this, arguments); }
function FormLabel_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormLabel_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function FormLabel_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/form-label/).
 */
var FormLabel = function FormLabel(props) {
  var fieldId = props.fieldId,
    id = props.id,
    children = props.children,
    component = props.component,
    hint = props.hint,
    textClassName = props.textClassName,
    className = props.className,
    inversed = props.inversed,
    errorMessage = props.errorMessage,
    errorMessageClassName = props.errorMessageClassName,
    errorId = props.errorId,
    requirementLabel = props.requirementLabel,
    labelProps = FormLabel_objectWithoutProperties(props, FormLabel_excluded);
  var hintElement;
  if (hint || requirementLabel) {
    var hintClasses = classnames_default()('ds-c-field__hint', inversed && 'ds-c-field__hint--inverse');
    var hintPadding;
    var requirement = requirementLabel;
    if (requirementLabel && hint) {
      if (typeof requirementLabel === 'string') {
        // Remove any existing spacing and punctuation
        requirement = requirementLabel.trim().replace(/\.$/, '');
        // Add punctuation after the requirementLabel so it doesn't run into the hint
        requirement = requirementLabel + '.';
      }

      // Add space between hint and preceding requirementLabel
      hintPadding = ' ';
    }
    hintElement = /*#__PURE__*/react.createElement("span", {
      className: hintClasses
    }, requirement, hintPadding, hint);
  }
  var errorMessageElement;
  if (errorMessage) {
    // Include fallback for errorId
    var inlineErrorId;
    if (errorId) {
      inlineErrorId = errorId;
    } else if (fieldId) {
      inlineErrorId = "".concat(fieldId, "-error");
    }
    errorMessageElement = /*#__PURE__*/react.createElement(InlineError_InlineError, {
      id: inlineErrorId,
      inversed: inversed,
      className: errorMessageClassName
    }, errorMessage);
  }
  var ComponentType = component;
  var classes = classnames_default()('ds-c-label', className, inversed && 'ds-c-label--inverse');
  return /*#__PURE__*/react.createElement(ComponentType, FormLabel_extends({
    className: classes,
    htmlFor: fieldId,
    id: id
  }, labelProps), /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(textClassName)
  }, children), hintElement, errorMessageElement);
};
FormLabel.defaultProps = {
  component: 'label'
};
/* harmony default export */ var FormLabel_FormLabel = (FormLabel);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/ChoiceList/Choice.js
function Choice_typeof(obj) { "@babel/helpers - typeof"; return Choice_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Choice_typeof(obj); }
var Choice_excluded = ["aria-live", "aria-relevant", "aria-atomic", "checkedChildren", "className", "disabled", "errorMessage", "errorMessageClassName", "hint", "inversed", "inputClassName", "label", "labelClassName", "requirementLabel", "size", "uncheckedChildren", "inputRef"];
function Choice_extends() { Choice_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Choice_extends.apply(this, arguments); }
function Choice_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Choice_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Choice_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Choice_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Choice_toPropertyKey(arg) { var key = Choice_toPrimitive(arg, "string"); return Choice_typeof(key) === "symbol" ? key : String(key); }
function Choice_toPrimitive(input, hint) { if (Choice_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Choice_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (Choice_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/** Used to emit events to all Choice components */
var dsChoiceEmitter = new (ev_emitter_default())();

/**
 * This component passes any additional props to its underlying input element
 * as attributes. See the corresponding MDN documentation for
 * [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) for
 * a list of valid attributes.

 * For information about how and when to use this component, refer to the
 * [checkbox](https://design.cms.gov/components/checkbox/) and
 * [radio](https://design.cms.gov/components/radio/) documentation pages.
 */
var Choice = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Choice, _React$PureComponent);
  var _super = _createSuper(Choice);
  function Choice(props) {
    var _this$props$id;
    var _this;
    _classCallCheck(this, Choice);
    _this = _super.call(this, props);
    _this.input = null;
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleUncheck = _this.handleUncheck.bind(_assertThisInitialized(_this));
    _this.id = (_this$props$id = _this.props.id) !== null && _this$props$id !== void 0 ? _this$props$id : uniqueId_default()('choice--');
    if (typeof _this.props.checked === 'undefined') {
      _this.isControlled = false;
      // Since this isn't a controlled component, we need a way
      // to track when the value has changed. This can then be used
      // to identify when to toggle the visibility of (un)checkedChildren
      _this.state = {
        checked: _this.props.defaultChecked
      };
    } else {
      _this.isControlled = true;
    }
    return _this;
  }
  _createClass(Choice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Event emitters are only relevant for uncontrolled radio buttons
      if (!this.isControlled && this.props.type === 'radio') {
        this.uncheckEventName = "".concat(this.props.name, "-uncheck");
        dsChoiceEmitter.on(this.uncheckEventName, this.handleUncheck);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Unbind event emitters are only relevant for uncontrolled radio buttons
      if (!this.isControlled && this.props.type === 'radio') {
        dsChoiceEmitter.off(this.uncheckEventName, thurn this.props.checked;
      }
      return this.state.checked;
    }

    /**
     * A radio button doesn't receive an onChange event when it is unchecked,
     * so we fire an "uncheck" event when any radio option is selected. This
     * allows us to check each radio options' checked state.
     * @param {String} checkedId - ID of the checked radio option
     */
  }, {
    key: "handleUncheck",
    value: function handleUncheck(checkedId) {
      if (checkedId !== this.id && this.input.checked !== this.state.checked) {
        this.setState({
          checked: this.input.checked
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      if (this.props.onChange) {
        this.props.onChange(evt);
      }
      if (!this.isControlled) {
        this.setState({
          checked: evt.target.checked
        });
        if (this.props.type === 'radio' && evt.target.checked) {
          // Emit the uncheck event so other radio options update their state
          dsChoiceEmitter.emitEvent(this.uncheckEventName, [this.id]);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        ariaLive = _this$props['aria-live'],
        ariaRelevant = _this$props['aria-relevant'],
        ariaAtomic = _this$props['aria-atomic'],
        checkedChildren = _this$props.checkedChildren,
        className = _this$props.className,
        disabled = _this$props.disabled,
        errorMessage = _this$props.errorMessage,
        errorMessageClassName = _this$props.errorMessageClassName,
        hint = _this$props.hint,
        inversed = _this$props.inversed,
        inputClassName = _this$props.inputClassName,
        label = _this$props.label,
        labelClassName = _this$props.labelClassName,
        requirementLabel = _this$props.requirementLabel,
        size = _this$props.size,
        uncheckedChildren = _this$props.uncheckedChildren,
        inputRef = _this$props.inputRef,
        inputProps = Choice_objectWithoutProperties(_this$props, Choice_excluded);
      var inputClasses = classnames_default()(inputClassName, 'ds-c-choice', {
        'ds-c-choice--inverse': inversed,
        'ds-c-choice--small': size === 'small'
      });

      // Remove props we have our own implementations for
      if (inputProps.id) delete inputProps.id;
      if (inputProps.onChange) delete inputProps.onChange;
      return /*#__PURE__*/react.createElement("div", {
        className: className,
        "aria-live": ariaLive !== null && ariaLive !== void 0 ? ariaLive : checkedChildren ? 'polite' : null,
        "aria-relevant": ariaRelevant !== null && ariaRelevant !== void 0 ? ariaRelevant : checkedChildren ? 'additions text' : null,
        "aria-atomic": ariaAtomic !== null && ariaAtomic !== void 0 ? ariaAtomic : checkedChildren ? 'false' : null
      }, /*#__PURE__*/react.createElement("div", {
        className: "ds-c-choice-wrapper"
      }, /*#__PURE__*/react.createElement("input", Choice_extends({
        className: inputClasses,
        id: this.id,
        onChange: this.handleChange,
        disabled: disabled,
        ref: function ref(_ref) {
          _this2.input = _ref;
          if (inputRef) {
            inputRef(_ref);
          }
        }
      }, inputProps)), /*#__PURE__*/react.createElement(FormLabel_FormLabel, {
        className: labelClassName,
        fieldId: this.id,
        errorMessage: errorMessage,
        errorMessageClassName: errorMessageClassName,
        hint: hint,
        inversed: inversed,
        requirementLabel: requirementLabel
      }, label)), this.checked() ? checkedChildren : uncheckedChildren);
    }
  }]);
  return Choice;
}(react.PureComponent);
/* harmony default export */ var ChoiceList_Choice = (Choice);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/FormLabel/useFormLabel.js
function useFormLabel_typeof(obj) { "@babel/helpers - typeof"; return useFormLabel_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, useFormLabel_typeof(obj); }
var useFormLabel_excluded = ["className", "label", "labelClassName", "labelComponent", "labelId", "errorMessage", "errorMessageClassName", "errorPlacement", "hint", "requirementLabel", "inversed", "wrapperIsFieldset"];
function useFormLabel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function useFormLabel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useFormLabel_ownKeys(Object(source), !0).forEach(function (key) { useFormLabel_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useFormLabel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useFormLabel_defineProperty(obj, key, value) { key = useFormLabel_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function useFormLabel_toPropertyKey(arg) { var key = useFormLabel_toPrimitive(arg, "string"); return useFormLabel_typeof(key) === "symbol" ? key : String(key); }
function useFormLabel_toPrimitive(input, hint) { if (useFormLabel_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (useFormLabel_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function useFormLabel_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = useFormLabel_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function useFormLabel_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






// TODO: Reimplement focusTrigger in another place, like another hook

// Some of the FormLabel's props we pass on to the component prop definitions.
// TODO: This could use a better name
/**
 * This is the set of public-facing props that each component that uses `useFormLabel`
 * can include in its own props definition.
 */
/**
 * This is the full list of props accepted by `useFormLabel`. Components that use
 * `useFormLabel` should not include this entire set in their props but instead use
 * `FormFieldProps`, which is the set of public-facing props that a component can
 * include in its own props.
 */
/**
 * This hook contains business logic for how an input field relates to its label
 * and wrapping container element. It takes a component's props and generates
 * the specialized set of props for its label, field, wrapper element, and
 * possible detached "bottom error". While the order and structure of those
 * elements are different between components and are specific to their
 * implementation, much of the logic for prop/attribute generation is consistent
 * between components. The hook will return the relevant information as
 * properties of an object:
 *
 *   - labelProps:   Props to be applied to a `FormLabel` (where we get the name)
 *   - fieldProps:   Props to be applied to the field (a.k.a., the input)
 *   - wrapperProps: Props to be applied to the wrapping element
 *   - bottomError:  A rendered React element representing a bottom-placed error
 *   - errorId:      The id (string) of the error-message element, in case we
 *                   need to reference it (currently only necessary to support
 *                   the FormControl component, which this hook aims to replace)
 *
 * Note that while it's helpful now to abstract away this logic behind a shared
 * hook, that may not always be the case. The first step in creating this hook
 * was to allow an alternative to `FormControl` that allowed for more freedom in
 * how the component's individual elements were structured at to get rid of the
 * dichotomy it imposes on components where their implementation must be split
 * between an inner and outer component.
 */
function useFormLabel(props) {
  var _props$labelId, _props$errorId, _props$ariaInvalid;
  // TODO: Once we're on React 18, we can use the `useId` hook
  var id = useId('field--', props.id);
  var labelId = (_props$labelId = props.labelId) !== null && _props$labelId !== void 0 ? _props$labelId : "".concat(id, "__label");
  var errorId = (_props$errorId = props.errorId) !== null && _props$errorId !== void 0 ? _props$errorId : "".concat(id, "__error");
  var className = props.className,
    label = props.label,
    labelClassName = props.labelClassName,
    labelComponent = props.labelComponent,
    _labelId = props.labelId,
    errorMessage = props.errorMessage,
    errorMessageClassName = props.errorMessageClassName,
    _props$errorPlacement = props.errorPlacement,
    errorPlacement = _props$errorPlacement === void 0 ? errorPlacementDefault() : _props$errorPlacement,
    hint = props.hint,
    requirementLabel = props.requirementLabel,
    inversed = props.inversed,
    wrapperIsFieldset = props.wrapperIsFieldset,
    remainingProps = useFormLabel_objectWithoutProperties(props, useFormLabel_excluded);
  var hasBottomError = errorPlacement === 'bottom' && errorMessage;
  var bottomError = hasBottomError ? /*#__PURE__*/react.createElement(InlineError_InlineError, {
    id: errorId,
    inversed: inversed,
    className: classnames_default()('ds-c-field__error-message--bottom', errorMessageClassName)
  }, errorMessage) : undefined;
  // Bottom placed errors cannot be linked to Choices in ChoiceList,
  // so we add a hidden error message to the label
  var showHiddenError = wrapperIsFieldset && bottomError;
  var ariaInvalid = (_props$ariaInvalid = props['aria-invalid']) !== null && _props$ariaInvalid !== void 0 ? _props$ariaInvalid : !!errorMessage;
  var labelProps = {
    children: /*#__PURE__*/react.createElement(react.Fragment, null, label, showHiddenError && /*#__PURE__*/react.createElement("div", {
      className: "ds-u-visibility--screen-reader"
    }, errorMessage)),
    className: labelClassName,
    component: labelComponent,
    errorMessage: bottomError ? undefined : errorMessage,
    errorMessageClassName: bottomError ? undefined : errorMessageClassName,
    errorId: errorId,
    // Avoid using `for` attribute for components with multiple inputs
    // i.e. ChoiceList, DateField, and other components that use `fieldset`
    fieldId: wrapperIsFieldset ? undefined : id,
    hint: hint,
    id: labelId,
    requirementLabel: requirementLabel,
    inversed: inversed
  };
  var fieldProps = useFormLabel_objectSpread(useFormLabel_objectSpread({}, remainingProps), {}, {
    id: id,
    errorMessage: errorMessage,
    inversed: inversed,
    'aria-describedby': hasBottomError ? classnames_default()(props['aria-describedby'], errorId) : props['aria-describedby'],
    'aria-invalid': !wrapperIsFieldset ? ariaInvalid : undefined
  });
  var wrapperClassNames = classnames_default()({
    'ds-c-fieldset': wrapperIsFieldset
  }, className);
  var wrapperProps = {
    className: wrapperClassNames,
    'aria-invalid': wrapperIsFieldset ? ariaInvalid : undefined
  };
  return {
    labelProps: labelProps,
    fieldProps: fieldProps,
    wrapperProps: wrapperProps,
    bottomError: bottomError,
    errorId: errorId
  };
}
/* harmony default export */ var FormLabel_useFormLabel = ((/* unused pure expression or super */ null && (useFormLabel)));
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/ChoiceList/ChoiceList.js
function ChoiceList_typeof(obj) { "@babel/helpers - typeof"; return ChoiceList_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ChoiceList_typeof(obj); }
var ChoiceList_excluded = ["onBlur", "onComponentBlur", "choices"];
function ChoiceList_extends() { ChoiceList_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ChoiceList_extends.apply(this, arguments); }
function ChoiceList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ChoiceList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ChoiceList_ownKeys(Object(source), !0).forEach(function (key) { ChoiceList_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ChoiceList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ChoiceList_defineProperty(obj, key, value) { key = ChoiceList_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ChoiceList_toPropertyKey(arg) { var key = ChoiceList_toPrimitive(arg, "string"); return ChoiceList_typeof(key) === "symbol" ? key : String(key); }
function ChoiceList_toPrimitive(input, hint) { if (ChoiceList_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ChoiceList_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function ChoiceList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ChoiceList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function ChoiceList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






// Omit props that we override with values from the ChoiceList

/**
 * For information about how and when to use this component, refer to the
 * [checkbox](https://design.cms.gov/components/checkbox/) and
 * [radio](https://design.cms.gov/components/radio/) documentation pages.
 *
 * Checkboxes and radios can be managed as a group using `<ChoiceList>` or
 * individually using `<Choice>`. Note that each of the items in the `choices`
 * array represents props that will be passed to an individual `<Choice>`
 * component. You can therefore define any of the props listed in the `<Choice>`
 * props table below, including all valid attributes of the
 * [HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
 */
var ChoiceList = function ChoiceList(props) {
  var onBlur = props.onBlur,
    onComponentBlur = props.onComponentBlur,
    choices = props.choices,
    listProps = ChoiceList_objectWithoutProperties(props, ChoiceList_excluded);
  var id = useId('choice-list--', props.id);
  if (false) {}
  var choiceRefs = [];
  var handleBlur = function handleBlur(evt) {
    if (onBlur) onBlur(evt);
    if (onComponentBlur) handleComponentBlur(evt);
  };
  var handleComponentBlur = function handleComponentBlur(evt) {
    // The active element is always the document body during a focus
    // transition, so in order to check if the newly focused element
    // is one of our choices, we're going to have to wait a bit.
    setTimeout(function () {
      if (!choiceRefs.includes(document.activeElement)) {
        onComponentBlur(evt);
      }
    }, 20);
  };
  var _useFormLabel = useFormLabel(ChoiceList_objectSpread(ChoiceList_objectSpread({}, listProps), {}, {
      labelComponent: 'legend',
      wrapperIsFieldset: true,
      id: id
    })),
    labelProps = _useFormLabel.labelProps,
    fieldProps = _useFormLabel.fieldProps,
    wrapperProps = _useFormLabel.wrapperProps,
    bottomError = _useFormLabel.bottomError;
  var choiceItems = choices.map(function (choiceProps, index) {
    var completeChoiceProps = ChoiceList_objectSpread(ChoiceList_objectSpread({
      // Allow this to be overridden by the choiceProps
      id: "".concat(id, "__choice--").concat(index)
    }, choiceProps), {}, {
      inversed: props.inversed,
      name: props.name,
      // onBlur: (onBlur || onComponentBlur) && handleBlur,
      onBlur: handleBlur,
      onChange: props.onChange,
      size: props.size,
      type: props.type,
      inputClassName: classnames_default()(choiceProps.inputClassName, {
        'ds-c-choice--error': props.errorMessage
      }),
      disabled: choiceProps.disabled || props.disabled,
      // Individual choices can be disabled as well as the entire field
      inputRef: function inputRef(ref) {
        choiceRefs.push(ref);
        if (choiceProps.inputRef) {
          choiceProps.inputRef(ref);
        }
      }
    });
    return /*#__PURE__*/react.createElement(ChoiceList_Choice, ChoiceList_extends({
      key: choiceProps.value
    }, completeChoiceProps));
  });
  return /*#__PURE__*/react.createElement("fieldset", wrapperProps, /*#__PURE__*/react.createElement(FormLabel_FormLabel, labelProps), choiceItems, bottomError);
};
/* harmony default export */ var ChoiceList_ChoiceList = (ChoiceList);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/ChoiceList/index.js


;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/NativeDialog/polyfill/index.js
function polyfill_typeof(obj) { "@babel/helpers - typeof"; return polyfill_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, polyfill_typeof(obj); }
/**
 * This polyfill comes from https://github.com/GoogleChrome/dialog-polyfill/, but
 * we need to wrap it in a function and conditionally call it so we can support
 * server-side rendering in downstream applications. Because our code doesn't have
 * insight into the context in which it is used, we need to avoid executing the
 * code in this module before determining whether the environment can support it
 * (that is, whether `window` is defined). The polyfill team will not fix it on
 * their end: https://github.com/GoogleChrome/dialog-polyfill/issues/169
 */

/**
 * Define this outside and then fill it in inside our loadDialogPolyfill function
 */
var dialogPolyfill = {
  registerDialog: function registerDialog() {},
  forceRegisterDialog: function forceRegisterDialog() {}
};
/* harmony default export */ var polyfill = (dialogPolyfill);
function isNodeTestEnv() {
  return (typeof process === "undefined" ? "undefined" : polyfill_typeof(process)) === 'object' && polyfill_typeof(({})) === 'object' && "production" === 'test';
}

/**
 * Putting everything in this function allows us to defer executing the polyfill
 * code until we know that our environment has `window` defined.
 */
if (typeof window !== 'undefined') loadDialogPolyfill();
function loadDialogPolyfill() {
  // nb. This is for IE10 and lower _only_.
  var supportCustomEvent = window.CustomEvent;
  if (!supportCustomEvent || polyfi!!x.bubbles, !!x.cancelable, x.detail || null);
      return ev;
    };
    supportCustomEvent.prototype = window.Event.prototype;
  }

  /**
   * Dispatches the passed event to both an "on<type>" handler as well as via the
   * normal dispatch operation. Does not bubble.
   *
   * @param {!EventTarget} target
   * @param {!Event} event
   * @return {boolean}
   */
  function safeDispatchEvent(target, event) {
    var check = 'on' + event.type.toLowerCase();
    if (typeof target[check] === 'function') {
      target[check](event);
    }
    return target.dispatchEvent(event);
  }

  /**
   * @param {Element} el to check for stacking context
   * @return {boolean} whether this el or its parents creates a stacking context
   */
  function createsStackingContext(el) {
    while (el && el !== document.body) {
      var s = window.getComputedStyle(el);
      var invalid = function invalid(k, ok) {
        return !(s[k] === undefined || s[k] === ok);
      };
      if (s.opacity < 1 || invalid('zIndex', 'auto') || invalid('transform', 'none') || invalid('mixBlendMode', 'normal') || invalid('filter', 'none') || invalid('perspective', 'none') || s['isolation'] === 'isolate' || s.position === 'fixed' || s.webkitOverflowScrolling === 'touch') {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  /**
   * Finds the nearest <dialog> from the passed element.
   *
   * @param {Element} el to search from
   * @return {HTMLDialogElement} dialog found
   */
  function findNearestDialog(el) {
    while (el) {
      if (el.localName === 'dialog') {
        return (/** @type {HTMLDialogElement} */el
        );
      }
      if (el.parentElement) {
        el = el.parentElement;
      } else if (el.parentNode) {
        el = el.parentNode.host;
      } else {
        el = null;
      }
    }
    return null;
  }

  /**
   * Blur the specified element, as long as it's not the HTML body element.
   * This works around an IE9/10 bug - blurring the body causes Windows to
   * blur the whole application.
   *
   * @param {Element} el to blur
   */
  function safeBlur(el) {
    // Find the actual focused element when the active element is inside a shadow root
    while (el && el.shadowRoot && el.shadowRoot.activeElement) {
      el = el.shadowRoot.activeElement;
    }
    if (el && el.blur && el !== document.body) {
      el.blur();
    }
  }

  /**
   * @param {!NodeList} nodeList to search
   * @param {Node} node ] === node) {
        return true;
      }
    }
    return false;
  }

  /**
   * @param {HTMLFormElement} el to chec}
    return el.getAttribute('method').toLowerCase() === 'dialog';
  }

  /**
   * @param {!DocumentFragment|!Element} hostElement
   * @return {?Element}
   */
  function findFocusableElementWithin(hostElement) {
    // Note that this is 'any focusable area'. This list is probably not exhaustive, but the
    // alternative involves stepping through and trying to focus everything.
    var opts = ['butto= opts.map(function (el) {
      return el + ':not([disabled])';
    });
    // TODO(samthor): tabindex values that are not numeric are not focusable.
    query.push('[tabindex]:not([disabled]):not([tabindex=""])'); // tabindex != "", not disabled
    var target = hostElement.querySelector(query.join(', '));
    if (!target && 'attachShadow' in Element.prototype) {
      // If we haven't found a focusable target, see if the host element contains an element
      // which has a shadowRoot.
      // Recursively search for the first focusable item in shadow roots.
      var elems = hostElement.querySelectorAll('*');
      for (var i = 0; i < elems.length; i++) {
        if (elems[i].tagName && elems[i].shadowRoot) {
          target = findFocusableElementWithin(elems[i].shadowRoot);
          if (target) {
            break;
          }
        }
      }
    }
    return target;
  }

  /**
   * Determines if an element is attached to the DOM.
   * @param {Element} element    return element.isConnected || document.body.contains(element);
  }

  /**
   * @param {!Event} event
   * @return {?Element}
   */
  function findFormSubmitter(event) {
    if (event.submitter) {
      return event.submitter;
    }
    var form = event.target;
    if (!(form instanceof HTMLFormElement)) {
      return null;
    }
    var submitter = dialogPolyfill.formSubmitter;
    if (!submitter) {
      var target = event.target;
      var root = 'getRootNode' in target && target.getRootNode() || document;
      submitter = root.activeElement;
    }
    if (!submitter || submitter.form !== form) {
      return null;
    }
    return submitter;
  }

  /**
   * @param {!Event} event
   */
  function maybeHandleSubmit(event) {
    if (event.defaultPrevented) {
      return;
    }
    var form = /** @type {!HTMLFormElement} */event.target;

    // We'd have a value if we clicked on an imagemap.
    var value = dialogPolyfill.imagemapUseValue;
    var submitter = findFormSubmitter(event);
    if (value === null && submitter) {
      value = submitter.value;
    }

    // There should always be a dialog as this handler is added specifically on them, but check just
    // in case.
    var dialog = findNearestDialog(form);
    if (!dialog) {
      return;
    }

    // Prefer formmethod on the button.
    var formmethod = submitter && submitter.getAttribute('formmethod') || form.getAttribute('method');
    if (formmethod !== 'dialog') {
      return;
    }
    event.preventDefault();
    if (value != null) {
      // nb. we explicitly check against null/undefined
      dialog.close(value);
    } else {
      dialog.close();
    }
  }

  /**
   * @param {!HTMLDialogElement} dialog to upgrade
   * @constructor
   */
  function dialogPolyfillInfo(dialog) {
    this.dialog_ = dialog;
    this.replacedStyleTop_ = false;
    this.openAsModal_ = false;

    // Set a11y role. Browsers that support dialog implicitly know this already.
    if (!dialog.hasAttribute('role')) {
      dialog.setAttribute('role', 'dialog');
    }
    dialog.show = this.show.bind(this);
    dialog.showModal = this.showModal.bind(this);
    dialog.close = this.close.bind(this);
    dialog.addEventListener('submit', maybeHandleSubmit, false);
    if (!('returnValue' in dialog)) {
      dialog.returnValue = '';
    }
    if ('MutationObserver' in window) {
      var mo = new MutationObserver(this.maybeHideModal.bind(this));
      mo.observe(dialog, {
        attributes: true,
        attributeFilter: ['open']
      });
    } else {
      // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
      // seem to fire even if the element was removed as part of a parent removal. Use the removed
      // events to force downgrade (useful ifgradeModal() : this.maybeHideModal();
        removed = false;
      }.bind(this);
      var timeout;
      var delayModel = function delayModel(ev) {
        if (ev.target !== dialog) {
          return;
        } // not for a child element
        var cand = 'DOMNodeRemoved';
        removed |= ev.type.substr(0, cand.length) === cand;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(cb, 0);
      };
      ['DOMon (name) {
        dialog.addEventListener(name, delayModel);
      });
    }
    // Note that the DOM is observed inside DialogManager while any dialog
    // is being displayed as a modal, to catch modal removal from the DOM.

    Object.defineProperty(dialog, 'open', {
      set: this.setOpen.bind(this),
      get: dialog.hasAttribute.bind(dialog, 'open')
    });
    this.backdrop_ = document.createElement('div');
    this.backdrop_.className = 'backdrop';
    this.backdrop_.addEventListener('mouseup', this.backdropMouseEvent_.bind(this));
    this.backdrop_.addEventListener('mousedown', this.backdropMouseEvent_.bind(this));
    this.backdrop_.addEventListener('click', this.backdropMouseEvent_.bind(this));
  }
  dialogPolyfillInfoent.prototype} */{
    get dialog() {
      return this.dialog_;
    },
    /**
     * Maybe remove this dialog from the modal top layer. This is called when
     * a modal dialog may no longer be tenable, e.g., when the dialog is no
     * longer open or is no longer part of the DOM.
     */
    maybeHideModal: function maybeHideModal() {
      if (this.dialog_.hasAttribute('open') && isConnected(this.dialog_)) {
        return;
      }
      this.downgradeModal();
    },
    /**
     * Remove this dialog from the modal top layer, leaving it as a non-modal.
     */
    downgradeModal: function downgradeModal() {
      if (!this.openAsModal_) {
        return;
      }
      this.openAsModal_ = false;
      this.dialog_.style.zIndex = '';

      // This won't match the native <dialog> exactly because if the user set top on a centered
      // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's
      // possible to polyfill this perfectly.
      if (this.replacedStyleTop_) {
        this.dialog_.style.top = '';
        this.replacedStyleTop_ = false;
      }

      // Clear the backdrop and remove from the manager.
      this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
      dialogPolyfill.dm.removeDialog(this);
    },
    /**
     * @param {boolean} value whether to open or close this dialog
     */
    setOpen: function setOpen(value) {
      if (value) {
        this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
      } else {
        this.dialog_.removeAttribute('open');
        this.maybeHideModal(); // nb. redundant with MutationObserver
      }
    },

    /**
     * Handles mouse events ('mouseup', 'mousedown', 'click') on the fake .backdrop element, redirecting them as if
     * they were on the dialog itself.
     *
     * @param {!Event} e to redirect
     */
    backdropMouseEvent_: function backdropMouseEvent_(e) {
      if (!this.dialog_.hasAttribute('tabindex')) {
        // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
        // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
        // would not be needed - clicks would move the implicit cursor there.
        var fake = document.createElement('div');
        this.dialog_.insertBefore(fake, this.dialog_.firstChild);
        fake.tabIndex = -1;
        fake.focus();
        this.dialog_.removeChild(fake);
      } else {
        this.dialog_.focus();
      }
      var redirectedEvent = document.createEvent('MouseEvents');
      redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
      this.dialog_.dispatchEvent(redirectedEvent);
      e.stopPropagation();
    },
    /**
     * Focuses on the first focusable element within the dialog. This will always blur the current
     * focus, even if nothing within the dialog is found.
     */
    focus_: function focus_() {
      // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
      var target = this.dialog_.querySelector('[autofocus]:not([disabled])');
      if (!target && this.dialog_.tabIndex >= 0) {
        target = this.dialog_;
      }
      if (!target) {
        target = findFocusableElementWithin(this.dialog_);
      }
      safeBlur(document.activeElement);
      target && target.focus();
    },
    /**
     * Sets the zIndex for the backdrop and dialog.
     *
     * @param {number} dialogZ
     * @param {number} backdropZ
     */
    updateZIndex: function updateZIndex(dialogZ, backdropZ) {
      if (dialogZ < backdropZ) {
        throw new Error('dialogZ should never be < backdropZ');
      }
      this.dialog_.style.zIndex = dialogZ;
      this.backdrop_.style.zIndex = backdropZ;
    },
    /**
     * Shows the dialog. If the dialog is already open, this does nothing.
     */
    show: function show() {
      if (!this.dialog_.open) {
        this.setOpen(true);
        this.focus_();
      }
    },
    /**
     * Show this dialog modally.
     */
    showModal: function showModal() {
      if (this.dialog_.hasAttribute('open')) {
        throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");
      }
      if (!isConnected(this.dialog_)) {
        throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");
      }
      if (!dialogPolyfill.dm.pushDialog(this)) {
        throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");
      }
      if (createsStackingContext(this.dialog_.parentElement) && !isNodeTestEnv()) {
        console.warn('A dialog is being shown inside a stacking context. ' + 'This may cause it to be unusable. For more information, see this link: ' + 'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
      }
      this.setOpen(true);
      this.openAsModal_ = true;

      // Optionally center vertically, relative to the current viewport.
      if (dialogPolyfill.needsCentering(this.dialog_)) {
        dialogPolyfill.reposition(this.dialog_);
        this.replacedStyleTop_ = true;
      } else {
        this.replacedStyleTop_ = false;
      }

      // Insert backdrop.
      this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling);

      // Focus on whatever inside the dialog.
      this.focus_();
    },
    /**
     * Closes this HTMLDialogElement. This is optional vs clearing the open
     * attribute, however this fires a 'close' event.
     *
     * @param {string=} opt_returnValue to use as the returnValue
     */
    close: function close(opt_returnValue) {
      if (!this.dialog_.hasAttribute('open')) {
        throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");
      }
      this.setOpen(false);

      // Leave returnValue untouched in case it was set directly on the element
      if (opt_returnValue !== undefined) {
        this.dialog_.returnValue = opt_returnValue;
      }

      // Triggering "close" event for any attached listeners on the <dialog>.
      var closeEvent = new supportCustomEvent('close', {
        bubbles: false,
        cancelable: false
      });
      safeDispatchEve/ 2;
    element.style.top = Math.max(scrollTop, top{
          return true;
        }
   return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
  };

  /**
   * @param {!Element}new dialogPolyfillInfo( /** @type {!HTMLDialogElement} */element);
  };

  /**
   * @param {!Element} elwModal) {
      dialogPolyfill.forceRegisterDialog(element);
      });
        removed.length && checkDOM(removed);
      });
    }
  };

  /**
   * Called on the first modal dialog being shown. Adds the overlay and related
   * harve(document, {
      childList: true,
      subtree: true
    });
  };

  /**
   * Called on the first modal dialog being removed, i.e., when no more modal
   * dialogs are viskeydown', this.handleKey_);
    this.mo_ && this.mo_.disconnect();
  };

  /**
   * Updates the stacking of all known di) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  };

  /**
   * @param {Element} candidate to check if contained or is the top-most modal dialog
   * @return {boolean} whether candidate is contained in top dialog
      candidate = candidate.parentElement;
    }
    return false;
  };
  dialogPolyfill.DialogManager.prototype.handleFocus_ = function (event) {
    var target = event.composedPath ? event.composedPath()[0] : event.target;
    if (this.containedByTopDialog_(target)) {
      return;
    }
    if (document.activeElement === document.documentElement) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    safeBlur( /** @type {Element} */target);
    if (this.forwardTab_ === undefined) {
      return;
    } // move focus only from a tab key

    var dpi = this.pendingDialogStack[0];
    var dialog = dpi.dialog;
    var position = dialog.compareDocumentPosition(target);
    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      if (this.forwardTab_) {
        // forward
        dpi.focus_();
      } else if (target !== document.documentElement) {
        // backwards if we're not already focused on <html>
        document.documentElement.focus();
      }
    } else {
      // TODO: Focus after the dialog, is ignored.
    }
    return false;
  };
  dialogPolyfill.DialogManager.prototype.handleKey_ = function (event) {
    this.forwardTab_ = undefined;
    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
      var cancelEvent = new supportCustomEvent('cancel', {
        bubbles: false,
        cancelable: true
      });
      var dpi = this.pendingDialogStack[0];
      if (dpi && safeDispatchEvent(dpi.dialog, cancelEvent)) {
        dpi.dialog.close();
      }
    } else if (event.keyCode === 9) {
      this.forwardTab_ = !event.shiftKey;
    }
  };

  /**
   * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
   * removed and immediately readded don't stay modal, they become normal.
   *
   * @param {!Array<!HTMLDialogElement>} removed that have definitely bal();
      } else {
        dpi.maybeHideModal();
      }
    });
  };

  /**
   * @param {!dialogPolyfillInfo} dpi
   * @return {boolean} whether the dialog wblockDocument();
    }
    this.updateStacking();
    return true;
  };

  /**
   * @param {!dialogPolyfillI) {
      this.unblockDocument();
    }
    this.updateStacking();
  };
  dialogPolyfill.dm = new dialogPolyfill.DialogManager();
  dialogPolyfill.formSubmitter = null;
  dialogPolyfill.imagemapUseValue = null;

  /**
   * Installs global handlers, such as click listers and native method overrides. These are needed
   * even if a no dialog is registered, as they deal with <form method="dialog">.
   */
  if (window.HTMLDialogElement === undefined) {
    /**
     * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
     * one that returns the correct value.
     */
    var testForm = document.createElement('form');
    testForm.setAttribute('method', 'dialog');
    if (testForm.method !== 'dialog') {
      var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');
      if (methodDescriptor) {
        // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
        // and don't bother to update the element.
    n 'dialog';
          }
          return realGet.call(this);
        };
        var realSet = methodDescriptor.od', v);
          }
          return realSet.call(this, v);
        };
        Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
      }
    }

    /**
     * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
     * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
     * document.activeElement.
     */
    document.addEventListener('click', function (ev) {
      dialogPolyfill.formSubmitter = null;
      dialogPolyfill.imagemapUseValue = null;
      if (ev.defaultPrevented) {
        return;
      } // e.g. a submit which prevents default submission

      var target = /** @type {Element} */ev.target;
      if ('composedPath' in ev) {
        var path = ev.composedPath();
        target = path.shift() || target;
      }
      if (!target || !isFormMethodDialog(target.form)) {
        return;
      }
      var valid = target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1;
      if (!valid) {
        if (!(target.localName === 'input' && target.type === 'image')) {
          return;
        }
        // this is a <input type="image">, which can submit forms
        dialogPolyfill.imagemapUseValue = ev.offsetX + ',' + ev.offsetY;
      }
      var dialog = findNearestDialog(target);
      if (!dialog) {
        return;
      }
      dialogPolyfill.formSubmitter = target;
    }, false);

    /**
     * Global 'submit' handler. This handles submits of `method="dialog"` which are invalid, i.e.,
     * outside a dialog. They get prevented.
     */
    document.addEventListener('submit', function (ev) {
      var form = ev.target;
      var dialog = findNearestDialog(form);
      if (dialog) {
        return; // ignore, handle there
      }

      var submitter = findFormSubmitter(ev);
      var formmethod = submitter && submitter.getAttribute('formmethod') || form.getAttribute('method');
      if (formmethod === 'dialog') {
        ev.preventDefault();
      }
    });

    /**
     * Replace the native HTMLFormElement.submit() method, as it won't fire the
     * submit event and give us a chance to respond.
     */
    var nativeFormSubmit = HTMLFormElement.prototype.submit;
    var replacementFormSubmit = function replacementFormSubmit() {
      if (!isFormMethodDialog(this)) {
        return nativeFormSubmit.call(this);
      }
      var dialog = findNearestDialog(this);
      dialog && dialog.close();
    };
    HTMLFormElement.prototype.submit = replacementFormSubmit;
  }
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/NativeDialog/NativeDialog.js
var NativeDialog_excluded = ["children", "exit", "showModal", "backdropClickExits", "boundingBoxRef"];
function NativeDialog_extends() { NativeDialog_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return NativeDialog_extends.apply(this, arguments); }
function NativeDialog_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = NativeDialog_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function NativeDialog_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var NativeDialog = function NativeDialog(_ref) {
  var children = _ref.children,
    exit = _ref.exit,
    showModal = _ref.showModal,
    backdropClickExits = _ref.backdropClickExits,
    boundingBoxRef = _ref.boundingBoxRef,
    dialogProps = NativeDialog_objectWithoutProperties(_ref, NativeDialog_excluded);
  var dialogRef = (0,react.useRef)(null);

  // Regieeds to be applied
    polyfill.registerDialog(dialogRef.current);
  });

  // Open and close the dialog with the appropriate method on mount and unmount
  (0,react.useEffect)(function () {
    var dialogNode = dialogRef.current;
gNode.show();
    return function () {
      dialogNode.close();
    };
  }, [showModal]);

  // Bind and unbind cancel event listeners on mount and unmount
  (0,react.useEffect)(functiandleCancel(event) {
      event.preventDefault();
      exit();
    };
    dialogNode.addEventListener('cancel', handleCancel);
    return function () {
      dialogNode.removeEventListener('cancel', handleCancel);
    };
  }, [exit]);

  // Bind and unbind click event listeners on mount and unmount
  (0,react.useEffect)(function () {
    if (!backdropClickExits) {
      return;
    }
    var dialogNode = dialogRef.current;
    var handleClick = function handleClick(event) {
      var _boundingBoxRef$curre;
      var boundingNode = (_boundingBoxRef$curre = boundingBoxRef === null || boundingBoxRef === void 0 ? void 0 : boundingBoxRef.current) !== null && _boundingBoxRef$curre !== void 0 ? _boundingBoxRef$curre : dialogRef.current;
      var rect = boundingNode.getBoundingClientRect();
      var isInDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        exit();
      }
    };
    dialogNode.addEventListener('click', handleClick);
    return function () {
      dialogNode.removeEventListener('click', handleClick);
    };
  }, [exit, backdropClickExits]);
  return /*#__PURE__*/react.createElement("dialog", NativeDialog_extends({
    ref: dialogRef
  }, dialogProps), children);
};
/* harmony default export */ var NativeDialog_NativeDialog = (NativeDialog);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Dialog/useDialogAnalytics.js
function useDialogAnalytics_typeof(obj) { "@babel/helpers - typeof"; return useDialogAnalytics_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, useDialogAnalytics_typeof(obj); }
function useDialogAnalytics_slicedToArray(arr, i) { return useDialogAnalytics_arrayWithHoles(arr) || useDialogAnalytics_iterableToArrayLimit(arr, i) || useDialogAnalytics_unsupportedIterableToArray(arr, i) || useDialogAnalytics_nonIterableRest(); }
function useDialogAnalytics_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useDialogAnalytics_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useDialogAnalytics_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useDialogAnalytics_arrayLikeToArray(o, minLen); }
function useDialogAnalytics_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function useDialogAnalytics_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function useDialogAnalytics_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useDialogAnalytics_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function useDialogAnalytics_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useDialogAnalytics_ownKeys(Object(source), !0).forEach(function (key) { useDialogAnalytics_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useDialogAnalytics_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useDialogAnalytics_defineProperty(obj, key, value) { key = useDialogAnalytics_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function useDialogAnalytics_toPropertyKey(arg) { var key = useDialogAnalytics_toPrimitive(arg, "string"); return useDialogAnalytics_typeof(key) === "symbol" ? key : String(key); }
function useDialogAnalytics_toPrimitive(input, hint) { if (useDialogAnalytics_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (useDialogAnalytics_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function useDialogAnalytics(_ref) {
  var analytics = _ref.analytics,
    analyticsLabelOverride = _ref.analyticsLabelOverride,
    _ref$onAnalyticsEvent = _ref.onAnalyticsEvent,
    onAnalyticsEvent = _ref$onAnalyticsEvent === void 0 ? defaultAnalyticsFunction : _ref$onAnalyticsEvent;
  function sendDialogEvent(content, eventAttributes) {
    if (analytics !== true && (!dialogSendsAnalytics() || analytics === false)) {
      return;
    }
    var eventHeadingText = analyticsLabelOverride !== null && analyticsLabelOverride !== void 0 ? analyticsLabelOverride : content;
    if (!eventHeadingText) {
      console.error('No content found for Dialog analytics event');
      return;
    }
    onAnalyticsEvent(useDialogAnalytics_objectSpread({
      event_type: EventType.UI_INTERACTION,
      event_category: EventCategory.UI_COMPONENTS,
      event_label: eventHeadingText,
      event_extension: eventExtensionText,
      heading: eventHeadingText
    }, eventAttributes));
  }
  var _useAnalyticsContent = useAnalyticsContent({
      componentName: 'Dialog',
      onMount: function onMount(content) {
        sendDialogEvent(content, {
          event_name: 'modal_impression',
          event_action: 'modal impression'
        });
      },
      onUnmount: function onUnmount(content) {
        sendDialogEvent(content, {
          event_name: 'modal_closed',
          event_action: 'closed modal'
        });
      }
    }),
    _useAnalyticsContent2 = useDialogAnalytics_slicedToArray(_useAnalyticsContent, 1),
    headingRef = _useAnalyticsContent2[0];
  return headingRef;
}
/* harmony default export */ var Dialog_useDialogAnalytics = (useDialogAnalytics);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/CloseIcon.js
function CloseIcon_extends() { CloseIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CloseIcon_extends.apply(this, arguments); }



var CloseIcon_defaultProps = {
  className: '',
  viewBox: '0 0 16 16'
};
function CloseIcon(props) {
  var iconCssClasses = "ds-c-icon--close ".concat(props.className || '');
  return /*#__PURE__*/react.createElement(SvgIcon, CloseIcon_extends({
    title: t('icons.close')
  }, CloseIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("path", {
    d: "M14.647 11.213c.235.235.353.521.353.858 0 .337-.118.624-.353.859l-1.717 1.717a1.17 1.17 0 01-.86.354c-.336 0-.622-.118-.857-.354l-3.714-3.712-3.712 3.712A1.166 1.166 0 012.93 15c-.337 0-.622-.118-.859-.354L.353 12.93A1.165 1.165 0 010 12.07c0-.337.117-.623.353-.858L4.065 7.5.353 3.789A1.168 1.168 0 010 2.929c0-.336.117-.622.353-.857L2.07.353C2.307.118 2.592 0 2.93 0c.337 0 .623.118.858.353L7.5 4.065 11.213.353c.235-.235.521-.353.857-.353.337 0 .623.118.86.353l1.717 1.719c.235.235.353.521.353.857 0 .338-.118.623-.353.86L10.935 7.5l3.712 3.712z",
    fillRule: "evenodd"
  }));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Dialog/Dialog.js
var Dialog_excluded = ["actions", "actionsClassName", "alert", "analytics", "analyticsLabelOverride", "analyticsEventTypeOverride", "onAnalyticsEvent", "ariaCloseLabel", "children", "className", "closeButtonSize", "closeButtonText", "closeButtonVariation", "closeIconComponent", "headerClassName", "heading", "id", "onEnter", "onExit", "size"];
function Dialog_extends() { Dialog_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Dialog_extends.apply(this, arguments); }
function Dialog_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Dialog_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Dialog_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/modal-dialog/).
 */
var Dialog = function Dialog(props) {
  var actions = props.actions,
    actionsClassName = props.actionsClassName,
    alert = props.alert,
    analytics = props.analytics,
    analyticsLabelOverride = props.analyticsLabelOverride,
    analyticsEventTypeOverride = props.analyticsEventTypeOverride,
    onAnalyticsEvent = props.onAnalyticsEvent,
    ariaCloseLabel = props.ariaCloseLabel,
    children = props.children,
    className = props.className,
    closeButtonSize = props.closeButtonSize,
    closeButtonText = props.closeButtonText,
    closeButtonVariation = props.closeButtonVariation,
    closeIconComponent = props.closeIconComponent,
    headerClassName = props.headerClassName,
    heading = props.heading,
    id = props.id,
    onEnter = props.onEnter,
    onExit = props.onExit,
    size = props.size,
    modalProps = Dialog_objectWithoutProperties(props, Dialog_excluded);
  var rootId = useId('dialog--', id);
  var headingRef = Dialog_useDialogAnalytics(props);
  var headingId = "".concat(rootId, "__heading");
  var dialogClassNames = classnames_default()('ds-c-dialog', className, size && "ds-c-dialog--".concat(size));
  var headerClassNames = classnames_default()('ds-c-dialog__header', headerClassName);
  var actionsClassNames = classnames_default()('ds-c-dialog__actions', actionsClassName);
  var containerRef = (0,react.useRef)()t;
  (0,react.useEffect)(function () {
    if (onEnter) onEnter();
  }, []);

  // Set initial focus
  (0,react.useEffect)(function () {
    var _containerRef$current;
    (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.focus();
  }, [containerRef]);

  // Prevent scrolling the page behind the dialog. Needs to use useLayoutEffect
  // because we need to grab the window scroll position before the dialog renders
  // and messes it up.
  (0,react.useLayoutEffect)(function () {
    var _window$scrollY;
    // https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
    var y = (_window$scrollY = window.scrollY) !== null && _window$scrollY !== void 0 ? _window$scrollY : 0;
    var bodyClass = 'ds--dialog-open';
    document.body.classList.add(bodyClass);
    document.body.style.setProperty('--body_top--dialog-open', "-".concat(y, "px"));
    document.documentElement.style.setProperty('scroll-behavior', 'auto');
    return function () {
      document.body.classList.remove(bodyClass);
      window.scrollTo({
        top: y,
        behavior: 'auto'
      });
      document.documentElement.style.removeProperty('scroll-behavior');
    };
  }, []);
  return /*#__PURE__*/react.createElement(NativeDialog_NativeDialog, Dialog_extends({
    className: dialogClassNames,
    showModal: true,
    exit: onExit
  }, modalProps, {
    id: rootId,
    boundingBoxRef: containerRef
  }), /*#__PURE__*/react.createElement("div", {
    className: "ds-c-dialog__window",
    role: "document",
    ref: containerRef,
    tabIndex: -1,
    "aria-labelledby": headingId
  }, /*#__PURE__*/react.createElement("header", {
    className: headerClassNames
  }, heading && /*#__PURE__*/react.createElement("h1", {
    className: "ds-h2",
    id: headingId,
    ref: headingRef
  }, heading), /*#__PURE__*/react.createElement(Button_Button, {
    "aria-label": ariaCloseLabel !== null && ariaCloseLabel !== void 0 ? ariaCloseLabel : t('dialog.ariaCloseLabel'),
    className: "ds-c-dialog__close",
    onClick: onExit,
    size: closeButtonSize,
    variation: closeButtonVariation
  }, /*#__PURE__*/react.createElement(CloseIconComponent, null), closeButtonText !== null && closeButtonText !== void 0 ? closeButtonText : t('dialog.closeButtonText'))), /*#__PURE__*/react.createElement("main", {
    role: "main",
    className: "ds-c-dialog__body"
  }, /*#__PURE__*/react.createElement("div", {
    id: "dialog-content"
  }, children), actions && /*#__PURE__*/react.createElement("div", {
    className: actionsClassNames
  }, actions))));
};
Dialog.defaultProps = {
  closeButtonVariation: 'ghost',
  closeIconComponent: CloseIcon
};
/* harmony default export */ var Dialog_Dialog = ((/* unused pure expression or super */ null && (Dialog)));
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Dialog/index.js

;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Dropdown/utils.js
function utils_typeof(obj) { "@babel/helpers - typeof"; return utils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, utils_typeof(obj); }
var utils_excluded = ["value", "children"],
  _excluded2 = ["label"];
function utils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function utils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? utils_ownKeys(Object(source), !0).forEach(function (key) { utils_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : utils_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function utils_defineProperty(obj, key, value) { key = utils_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function utils_toPropertyKey(arg) { var key = utils_toPrimitive(arg, "string"); return utils_typeof(key) === "symbol" ? key : String(key); }
function utils_toPrimitive(input, hint) { if (utils_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (utils_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function utils_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = utils_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function utils_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || utils_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoleturn != null) it.return(); } finally { if (didErr) throw err; } } }; }
function utils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return utils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return utils_arrayLikeToArray(o, minLen); }
function utils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

p(optionsOrGroups) {
  return optionsOrGroups.options !== undefined;
}
function getFirstOptionValue(optionsAndGroups) {
  var _iterator = _createForOfIteratorHelper(optionsAndGroups),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var optOrGroup = _step.value;
      if (!isOptGroup(optOrGroup)) {
        return optOrGroup.value;
      } else if (optOrGroup.options[0]) {
        return optOrGroup.options[0].value;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  console.warn('Dropdown component could not determine a default selected option');
}
function findElementsOfType(types, node) {
  var _props;
  if (!node || !( /*#__PURE__*/react.isValidElement(node) || Array.isArray(node))) {
    // There's nothing to recurse on, and this is not the droid we're looking for
    return [];
  }
  if ( /*#__PURE__*/react.isValidElement(node) && types.includes(node.type)) {
    // We found it! Return an array because it will be flattened
    return [node];
  }
  if (Array.isArray(node)) {
    // Recurse on ray(acc), _toConsumableArray(findElementsOfType(types, child)));
    }, []);
  }

  // It's a React element, so recurse on its children (a ReactNode)
  return findElementsOfType(types, (_props = node.props) === null || _props === void 0 ? void 0 : _props.children);
}
function parseOptionElement(option) {
  var _option$props = option.props,
    value = _option$props.value,
    children = _option$props.children,
    extraAttributes = utils_objectWithoutProperties(_option$props, utils_excluded);
  return utils_objectSpread({
    value: value,
    label: children
  }, extraAttributes);
}
function parseOptGroupElement(optgroup) {
  var _optgroup$props = optgroup.props,
    label = _optgroup$props.label,
    extraProps = utils_objectWithoutProperties(_optgroup$props, _excluded2);
  if (!label) {
    throw new Error('Could not find a label on `<optgroup>` element');
  }
  return utils_objectSpread({
    label: label,
    options: findElementsOfType(['option'], optgroup).map(parseOptionElement)
  }, extraProps);
}
function parseChildren(node) {
  var elements = findElementsOfType(['optgroup', 'option'], node);
  if (elements.length) {
    return elements.map(function (element) {
      if (element.type === 'optgroup') {
        return parseOptGroupElement(element);
      }
      return parseOptionElement(element);
    });
  }
  return [];
}
// EXTERNAL MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/react-aria/index.js
var react_aria = __webpack_require__(8838);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Dropdown/DropdownMenuOption.js
var DropdownMenuOption_excluded = ["textValue"];
function DropdownMenuOption_extends() { DropdownMenuOption_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DropdownMenuOption_extends.apply(this, arguments); }
function DropdownMenuOption_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DropdownMenuOption_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function DropdownMenuOption_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = sourceotId, index) {
  return "".concat(rootId, "__item--").concat(index);
}
function DropdownMenuOption(_ref) {
  var componentClass = _ref.componentClass,
    item = _ref.item,
    state = _ref.state,
    rootId = _ref.rootId;
  var ref = (0,react.useRef)(null);
  var _useOption = (0,react_aria/* useOption */.Fv)({
      key: item.key
    }, state, ref),
    optionProps = _useOption.optionProps,
    isSelected = _useOption.isSelected,
    isFocused = _useOption.isFocused,
    isDisabled = _useOption.isDisabled;
  var selectedIndicator = /*#__PURE__*/react.createElement("span", {
    className: "".concat(componentClass, "__menu-item-selected-indicator")
  }, /*#__PURE__*/react.createElement(SvgIcon, {
    title: "selected option icon",
    viewBox: "0 0 448 512",
    className: "ds-u-font-size--sm"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4l260.7-260.7c6.2-6.2 16.4-6.2 22.6 0z"
  })));
  var _item$props = item.props,
    textValue = _item$props.textValue,
    extraAttrs = DropdownMenuOption_objectWithoutProperties(_item$props, DropdownMenuOption_excluded);

  // Work around [this issue](https://github.com/adobe/react-spectrum/issues/4974) by manually
  // scrolling the selected option into view. At the time of writing this, we are using
  // `@react-aria/selection` version 3.16.1
  (0,react.useEffect)(function () {
    if (state.isOpen && isSelected) {
      var _ref$current;
      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.scrollIntoView({
        block: 'nearest'
      });
    }
  }, [isSelected, state.isOpen]);
  return /*#__PURE__*/react.createElement("li", DropdownMenuOption_extends({}, optionProps, {
    id: getOptionId(rootId, item.index)
  }, extraAttrs, {
    ref: ref,
    className: classnames_default()(item.props.className, "".concat(componentClass, "__menu-item"), isFocused && "".concat(componentClass, "__menu-item--highlighted"), isSelected && "".concat(componentClass, "__menu-item--selected"), isDisabled && "".concat(componentClass, "__menu-item--disabled"))
  }), isSelected && selectedIndicator, /*#__PURE__*/react.createElement("span", null, item.rendered));
}
/* harmony default export */ var Dropdown_DropdownMenuOption = ((/* unused pure expression or super */ null && (DropdownMenuOption)));
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Dropdown/DropdownMenuSection.js
function DropdownMenuSection_toConsumableArray(arr) { return DropdownMenuSection_arrayWithoutHoles(arr) || DropdownMenuSection_iterableToArray(arr) || DropdownMenuSection_unsupportedIterableToArray(arr) || DropdownMenuSection_nonIterableSpread(); }
function DropdownMenuSection_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function DropdownMenuSection_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DropdownMenuSection_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DropdownMenuSection_arrayLikeToArray(o, minLen); }
function DropdownMenuSection_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function DropdownMenuSection_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return DropdownMenuSection_arrayLikeToArray(arr); }
function DropdownMenuSection_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function DropdownMenuSection_extends() { DropdownMenuSection_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DropdownMenuSection_extends.apply(this, arguments); }


// from react-stately
 // from react-aria

function DropdownMenuSection(_ref) {
  var _section$props$id;
  var componentClass = _ref.componentClass,
    section = _ref.section,
    state = _ref.state,
    rootId = _ref.rootId;
  var _useListBoxSection = (0,react_aria/* useListBoxSection */.TV)({
      heading: section.rendered,
      'aria-label': section['aria-label']
    }),
    itemProps = _useListBoxSection.itemProps,
    headingProps = _useListBoxSection.headingProps,
    groupProps = _useListBoxSection.groupProps;
  var headingId = (_section$props$id = section.props.id) !== null && _section$props$id !== void 0 ? _section$props$id : "".concat(rootId, "__group--").concat(section.index);
  var sharedProps = {
    state: state,
    rootId: rootId,
    componentClass: componentClass
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("li", DropdownMenuSection_extends({}, itemProps, {
    className: "".concat(componentClass, "__menu-item-group")
  }), section.rendered && /*#__PURE__*/react.createElement("div", DropdownMenuSection_extends({}, section.props, headingProps, {
    id: headingId,
    className: "".concat(componentClass, "__menu-item-group-label")
  }), section.rendered), /*#__PURE__*/react.createElement("ul", DropdownMenuSection_extends({}, groupProps, {
    "aria-labelledby": headingends({
      key: node.key,
      item: node
    }, sharedProps));
  }))));
}
/* harmony default export */ var Dropdown_DropdownMenuSection = ((/* unused pure expression or super */ null && (DropdownMenuSection)));
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/utilities/usePressEscapeHandler.js


/**
 * Calls a handler whenever the Escape key is pressed within an element. To capture
 * on the entire document, pass null or undefined for the ref.
 *
 * @param ref - Ref of the element to capture keystrokes in. Defaults to the document
 * @param handler - Function called if the escape key is pressed
 */
function usePressEscapeHandler(ref, handler) {
  function handleEscapeKey(event) {
    var ESCAPE_KEY = 27;
    if (event.keyCode === ESCAPE_KEY || event.key === 'Escape') {
      handler(event);
    }
  }
  (0,react.useEffect)(function () {
    var node = ref ? ref.current : document;
    if (!node) return;
    node.addEventListener('keydown', handleEscapeKey);
    return function () {
      node.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleEscapeKey]);
}
/* harmony default export */ var utilities_usePressEscapeHandler = (usePressEscapeHandler);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Dropdown/DropdownMenu.js
var DropdownMenu_excluded = ["children", "componentClass", "heading", "labelId", "menuId", "rootId", "size", "state"];
function DropdownMenu_extends() { DropdownMenu_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } runsupportedIterableToArray(arr) || DropdownMenu_nonIterableSpread(); }
function DropdownMenu_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function DropdownMenu_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DropdownMenu_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clampe{ if (Array.isArray(arr)) return DropdownMenu_arrayLikeToArray(arr); }
function DropdownMenu_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function DropdownMenu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DropdownMenu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function DropdownMenu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



// from react-stately
 // from react-aria


function DropdownMenu(_ref) {
  var _props$listBoxRef;
  var children = _ref.children,
    componentClass = _ref.componentClass,
    heading = _ref.heading,
    labelId = _ref.labelId,
    menuId = _ref.menuId,
    rootId = _ref.rootId,
    size = _ref.size,
    state = _ref.state,
    props = DropdownMenu_objectWithoutProperties(_ref, DropdownMenu_excluded);
  var fallbackListBoxRef = (0,react.useRef)(null);
  var listBoxRef = (_props$listBoxRef = props.listBoxRef) !== null && _props$listBoxRef !== void 0 ? _props$listBoxRef : fallbackListBoxRef;
  var _useListBox = (0,react_aria/* useListBox */.co)(props, state, listBoxRef),
    listBoxProps = _useListBox.listBoxProps;
  var headingId = "".concat(rootId, "__heading");
  var containerClass = classnames_default()("".concat(componentClass, "__menu-container"), size && "ds-c-field--".concat(size));
  var containerRef = (0,react.useRef)();
  utilities_usePressEscapeHandler(containerRef, function () {
    var _props$triggerRef$cur, _props$triggerRef$cur2;
    state.setOpen(false);
    (_props$triggerRef$cur = props.triggerRef.current) === null || _props$triggerRef$cur === void 0 ? void 0 : (_props$triggerRef$cur2 = _props$triggerRef$cur.focus) === null || _props$triggerRef$cur2 === void 0 ? void 0 : _props$triggerRef$cur2.call(_props$triggerRef$cur);
  });

  // Workaround for react/react-aria #1513
  (0,react.useEtener = function listener(event) {
      event.preventDefault();
    };
    (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.addEventListener('touchend', listener, {
      passive: false
    });
    return function () {
      var _containerRef$current2;
      (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeEventListener('touchend', listener);
    };
  }, []);
  function handleTabKey(event) {
    var TAB_KEY = 9;
    if (event.keyCode === TAB_KEY || event.key === 'Tab') {
      if (!state.selectionManager.selectedKeys.has(state.selectionManager.focusedKey)) {
        state.selectionManager.setSelectedKeys([state.selectionManager.focusedKey]);
      }
    }
  }
  var sharedProps = {
    state: state,
    rootId: rootId,
    componentClass: componentClass
  };

  // These must be mutually exclusive, because when we force the menu to render open when
  // react-aria's state doesn't consider it open (state.isOpen), it seems to actually
  // render unexpected items. Currently we don't have a reason to render both at the same
  // time, so this is fine.
  var contents = children !== null && children !== void 0 ? children : DropdownMenu_toConsumableArray(state.collection).map(function (item) {
    return item.type === 'section' ? /*#__PURE__*/react.createElement(DropdownMenuSection, DropdownMenu_extends({
      key: item.key,
      section: item
    }, sharedProps)) : /*#__PURE__*/react.createElement(DropdownMenuOption, DropdownMenu_extends({
      key: item.key,
      item: item
    }, sharedProps));
  });
  return /*#__PURE__*/react.createElement("div", {
    className: containerClass,
    ref: containerRef,
    onKeyDown: handleTabKey
  }, heading && /*#__PURE__*/react.createElement("h5", {
    className: "ds-c-autocomplete__label",
    id: headingId
  }, heading), /*#__PURE__*/react.createElement("ul", DropdownMenu_extends({}, listBoxProps, {
    id: menuId,
    "aria-labelledby": classnames_default()(labelId, heading && headingId),
    className: "".concat(componentClass, "__menu"),
    ref: listBoxRef
  }), contents));
}
/* harmony default export */ var Dropdown_DropdownMenu = (DropdownMenu);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/utilities/useClickOutsideHandler.js

/**
 * Listens for mouse and touch events on the document and calls the provided
 * handler function as long as the event did not originate in one of the
 * elements corresponding to the React Refs in the `insideRefs` array. For
 * example, if you want to know if the user clicked outside of a dialog or
 * its trigger, you can pass it an array containing the refs to the dialog
 * and the trigger.
 *
 * @param insideRefs - Refs to elements that are considered "inside"
 * @param handler - called when the event target was outside the "inside" elements
 */
function useClickOutsideHandler(insideRefs, handler) {
  function handleClickOutside(event) {
    if (!insideRefs.some(function (ref) {
      var _ref$current;
      return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.contains(event.target);
    })) {
      handler(event);
    }
  }
  (0,react.useEffect)(function () {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handleClickOutside]);
}
/* harmony default export */ var utilities_useClickOutsideHandler = (useClickOutsideHandler);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/utilities/debounce.js
function debounce(fn, ms) {
  var _this = this;
  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = t(function () {
      timer = null;
      fn.apply(_this, args);
    }, ms);
  };
}
/* harmony default export */ var utilities_debounce = (debounce);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Dropdown/Dropdown.js
function Dropdown_typeof(obj) { "@babel/helpers - typeof"; return Dropdown_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Dropdown_typeof(obj); }
var Dropdown_excluded = ["autoFocus", "children", "className", "fieldClassName", "onBlur", "onChange", "options", "size", "defaultValue", "value", "inputRef", "getA11yStatusMessage", "getA11ySelectionMessage"],
  Dropdown_excluded2 = ["label", "value"],
  _excluded3 = ["label", "options"];
function Dropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Dropdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Dropdown_ownKeys(Object(source), !0).forEach(function (key) { Dropdown_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Dropdown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Dropdown_defineProperty(obj, key, value) { key = Dropdown_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Dropdown_toPropertyKey(arg) { var key = Dropdown_toPrimitive(arg, "string"); return Dropdown_typeof(key) === "symbol" ? key : String(key); }
function Dropdown_toPrimitive(input, hint) { if (Dropdown_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Dropdown_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Dropdown_slicedToArray(arr, i) { return Dropdown_arrayWithHoles(arr) || Dropdown_iterableToArrayLimit(arr, i) || Dropdown_unsupportedIterableToArray(arr, i) || Dropdown_nonIterableRest(); }
function Dropdown_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Dropdown_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Dropdown_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dropdown_arrayLikeToArray(o, minLen); }
function Dropdown_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Dropdown_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Dropdown_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Dropdown_extends() { Dropdown_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Dropdown_extends.apply(this, arguments); }
function Dropdown_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Dropdown_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Dropdown_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







 // from react-stately
 // from react-aria




var caretIcon = /*#__PURE__*/react.createElement(SvgIcon, {
  title: "",
  viewBox: "0 0 448 512",
  className: "ds-u-font-size--sm"
}, /*#__PURE__*/react.createElement("path", {
  d: "M212.7 148.7c6.2-6.2 16.4-6.2 22.6 0l160 160c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 182.6 75.3 331.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160z"
}));
/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/dropdown/).
 */
var Dropdown = function Dropdown(props) {
  var _props$labelId;
  validateProps(props);
  var id = useId('dropdown__button--', props.id);
  var labelId = (_props$labelId = props.labelId) !== null && _props$labelId !== void 0 ? _props$labelId : "".concat(id, "__label");
  var buttonContentId = "".concat(id, "__button-content");
  var menuId = "".concat(id, "__menu");

  // Draw out certain props that we don't want to pass through as attributes
  var autoFocus = props.autoFocus,
    children = props.children,
    className = props.className,
    fieldClassName = props.fieldClassName,
    userOnBlur = props.onBlur,
    onChange = props.onChange,
    options = props.options,
    size = props.size,
    defaultValue = props.defaultValue,
    value = props.value,
    inputRef = props.inputRef,
    getA11yStatusMessage = props.getA11yStatusMessage,
    getA11ySelectionMessage = props.getA11ySelectionMessage,
    extraProps = Dropdown_objectWithoutProperties(props, Dropdown_excluded);
  var optionsAndGroups = options !== null && options !== void 0 ? options : parseChildren(children);
  var renderReactStatelyItem = function renderReactStatelyItem(item) {
    var label = item.label,
      value = item.value,
      extraAttrs = Dropdown_objectWithoutProperties(item, Dropdown_excluded2);
    return /*#__PURE__*/react.createElement(react_aria/* Item */.ck, Dropdown_extends({}, extraAttrs, {
      key: value
    }), label);
  };
  var reactStatelyItems = optionsAndGroups.map(function (item, index) {
    if (isOptGroup(item)) {
      var label = item.label,
        _options = item.options,
        extraAttrs = Dropdown_objectWithoutProperties(item, _excluded3);
      return /*#__PURE__*/react.createElement(react_aria/* Section */.$0, Dropdown_extends({}, extraAttrs, {
        key: "group-".concat(index),
        title: label
      }), _options.map(renderReactStatelyItem));
    } else {
      return renderReactStatelyItem(item);
    }
  });
  var isControlled = value !== undefined;
  var fallbackValue = defaultValue;
  if (!isControlled && fallbackValue === undefined) {
    fallbackValue = getFirstOptionValue(optionsAndGroups);
  }
  var _useState = (0,react.useState)(fallbackValue),
    _useState2 = Dropdown_slicedToArray(_useState, 2),
    internalValueState = _useState2[0],
    setInternalValueState = _useState2[1];
  var selectedKey = isControlled ? value : internalValueState;
  var onSelectionChange = function onSelectionChange(value) {
    var _triggerRef$current, _triggerRef$current$f;
    (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : (_triggerRef$current$f = _triggerRef$current.focus) === null || _triggerRef$current$f === void 0 ? void 0 : _triggerRef$current$f.call(_triggerRef$current);
    if (onChange) {
      // Try to support the old API that passed an event object
      var target = {
        value: value,
        name: props.name
      };
      onChange({
        target: target,
        currentTarget: target
      });
    }
    if (!isControlled) {
      setInternalValueState(value);
    }
  };
  var state = (0,react_aria/* useSelectState */.dW)(Dropdown_objectSpread(Dropdown_objectSpread({}, props), {}, {
    children: reactStatelyItems,
    selectedKey: selectedKey,
    onSelectionChange: onSelectionChange
  }));
  var useFormLabelProps = useFormLabel(Dropdown_objectSpread(Dropdown_objectSpread({}, extraProps), {}, {
    id: id,
    labelId: labelId,
    className: classnames_default()('ds-c-dropdown', className, state.isOpen && 'ds-c-dropdown--open'),
    labelComponent: 'label',
    wrapperIsFieldset: false
  }));

  // We don't want to pass these down to the button
  delete useFormLabelProps.fieldProps.errorMessage;
  delete useFormLabelProps.fieldProps.errorId;
  delete useFormLabelProps.fieldProps.inversed;
  var onBlur = (0,react.useCallback)(
  // The active element is always the document body during a focus transition,
  // so in order to check if the newly focused element is one of our other date
  // inputs, we're going to have to wait a bit. We also have an issue with
  // tabbing out firing two blur events, so debounce during that time too. In
  // order for the debounce to work, we need to wrap this in a useCallback so
  // don't create a new one on each render.
  utilities_debounce(function (event) {
    var _wrapperRef$current;
    // Only call the user's onBlur handler if focus leaves the whole component
    if (!((_wrapperRef$current = wrapperRef.current) !== null && _wrapperRef$current !== void 0 && _wrapperRef$current.contains(document.activeElement))) {
      userOnBlur === null || userOnBlur === void 0 ? void 0 : userOnBlur(event);
      state.setOpen(false);
    }
  }, 20), [userOnBlur, state]);
  var triggerRef = (0,react.useRef)();
  var useSelectProps = (0,react_aria/* useSelect */.L7)(Dropdown_objectSpread(Dropdown_objectSpread({}, props), {}, {
    onBlur: onBlur,
    isDisabled: props.disabled
  }), state, triggerRef);
  var useButtonProps = (0,react_aria/* useButton */.UW)(useSelectProps.triggerProps, triggerRef);
  var buttonProps = Dropdown_objectSpread(Dropdown_objectSpread(Dropdown_objectSpread({}, useButtonProps.buttonProps), useFormLabelProps.fieldProps), {}, {
    className: classnames_default()('ds-c-dropdown__button', 'ds-c-field', props.errorMessage && 'ds-c-field--error', props.inversed && 'ds-c-field--inverse', size && "ds-c-field--".concat(size), fieldClassName),
    ref: mergeRefs([triggerRef, inputRef, useAutoFocus(props.autoFocus)]),
    'aria-controls': menuId,
    'aria-labelledby': "".concat(buttonContentId, " ").concat(labelId)
    // TODO: Someday we may want to add this `combobox` role back to the button, but right
    // now desktop VoiceOver has an issue. It seems to interpret the selected value in the
    // button as user input that needs to be checked for spelling (default setting). It
    // therefore announces anything it deems misspelled as such. The `react-aria` authors
    // likely ran into the same issue, since they leave it off for `useSelect` buttons.
    // Adding the combobox role in the future can help because screen reader users are more
    // familiar with the combobox pattern.
    // role: 'combobox',
  });

  var labelProps = Dropdown_objectSpread(Dropdown_objectSpread(Dropdown_objectSpread({}, useSelectProps.labelProps), useFormLabelProps.labelProps), {}, {
    fieldId: useFormLabelProps.fieldProps.id
  });
  var wrapperRef ndler([wrapperRef], function () {
    return state.setOpen(false);
  });
  return /*#__PURE__*/react.createElement("div", Dropdown_extends({}, useFormLabelProps.wrapperProps, {
    ref: wrapperRef
  }), /*#__PURE__*/react.createElement(FormLabel_FormLabel, labelProps), /*#__PURE__*/react.createElement(react_aria/* HiddenSelect */.MG, {
    isDisabled: props.disabled,
    state: state,
    triggerRef: triggerRef,
    label: props.label,
    name: props.name
  }), /*#__PURE__*/react.createElement("button", buttonProps, /*#__PURE__*/react.createElement("span", {
    id: buttonContentId,
    className: "ds-u-truncate"
  }, state.selectedItem ? state.selectedItem.rendered : ''), /*#__PURE__*/react.createElement("span", {
    className: "ds-c-dropdown__caret"
  }, caretIcon)), state.isOpen && /*#__PURE__*/react.createElement(Dropdown_DropdownMenu, Dropdown_extends({}, useSelectProps.menuProps, {
    componentClass: "ds-c-dropdown",
    labelId: labelId,
    menuId: menuId,
    rootId: id,
    size: size,
    state: state,
    triggerRef: triggerRef
  })), useFormLabelProps.bottomError);
};
/* harmony default export */ var Dropdown_Dropdown = ((/* unused pure expression or super */ null && (Dropdown)));
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Dropdown/index.js

;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/FormLabel/index.js


;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Drawer/Drawer.js








// TODO: closeButtonText, heading should be a string, but it is being used as a node in MCT,
// until we provide a better solution for customization, we type it as a node.
/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/drawer/).
 */
var Drawer = function Drawer(props) {
  var _props$ariaLabel, _props$closeButtonTex;
  var headingRef = (0,react.useRef)(null);
  var headingId = useId('drawer--', props.headingId);
  var Heading = "h".concat(props.headingLevel);
  return /*#__PURE__*/react.createElement(NativeDialog_NativeDialog, {
    className: classnames_default()(props.className, 'ds-c-drawer'),
    exit: props.onCloseClick,
    showModal: props.hasFocusTrap,
    backdropClickExits: props.backdropClickExits
  }, /*#__PURE__*/react.createElement("div", {
    className: "ds-c-drawer__window",
    tabIndex: -1,
    "aria-labelledby": headingId
  }, /*#__PURE__*/react.createElement("div", {
    className: "ds-c-drawer__header"
  }, /*#__PURE__*/react.createElement(Heading, {
    id: headingId,
    className: "ds-c-drawer__header-heading",
    ref: function ref(el) {
      headingRef.current = el;
      if (props.headingRef) {
        props.headingRef.current = el;
      }
    }
  }, props.heading), /*#__PURE__*/react.createElement(Button_Button, {
    "aria-label": (_props$ariaLabel = props.ariaLabel) !== null && _props$ariaLabel !== void 0 ? _props$ariaLabel : t('drawer.ariaLabel'),
    className: "ds-c-drawer__close-button",
    size: "small",
    onClick: props.onCloseClick,
    variation: props.closeButtonVariation
  }, (_props$closeButtonTex = props.closeButtonText) !== null && _props$closeButtonTex !== void 0 ? _props$closeButtonTex : t('drawer.closeButtonText'))), /*#__PURE__*/react.createElement("div", {
    className: classnames_default()('ds-c-drawer__body', {
      'ds-c-drawer--is-sticky': props.isHeaderSticky || props.isFooterSticky
    }),
    tabIndex: 0
  }, props.children), (props.footerTitle || props.footerBody) && /*#__PURE__*/react.createElement("div", {
    className: "ds-c-drawer__footer"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "ds-c-drawer__footer-title"
  }, props.footerTitle), /*#__PURE__*/react.createElement("div", {
    className: "ds-c-drawer__footer-body"
  }, props.footerBody))));
};
Drawer.defaultProps = {
  headingLevel: '3',
  hasFocusTrap: false
};
/* harmony default export */ var Drawer_Drawer = (Drawer);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/HelpDrawer/useHelpDrawerAnalytics.js
function useHelpDrawerAnalytics_typeof(obj) { "@babel/helpers - typeof"; return useHelpDrawerAnalytics_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, useHelpDrawerAnalytics_typeof(obj); }
function useHelpDrawerAnalytics_slicedToArray(arr, i) { return useHelpDrawerAnalytics_arrayWithHoles(arr) || useHelpDrawerAnalytics_iterableToArrayLimit(arr, i) || useHelpDrawerAnalytics_unsupportedIterableToArray(arr, i) || useHelpDrawerAnalytics_nonIterableRest(); }
function useHelpDrawerAnalytics_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useHelpDrawerAnalytics_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useHelpDrawerAnalytics_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useHelpDrawerAnalytics_arrayLikeToArray(o, minLen); }
function useHelpDrawerAnalytics_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function useHelpDrawerAnalytics_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function useHelpDrawerAnalytics_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useHelpDrawerAnalytics_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function useHelpDrawerAnalytics_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useHelpDrawerAnalytics_ownKeys(Object(source), !0).forEach(function (key) { useHelpDrawerAnalytics_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useHelpDrawerAnalytics_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useHelpDrawerAnalytics_defineProperty(obj, key, value) { key = useHelpDrawerAnalytics_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function useHelpDrawerAnalytics_toPropertyKey(arg) { var key = useHelpDrawerAnalytics_toPrimitive(arg, "string"); return useHelpDrawerAnalytics_typeof(key) === "symbol" ? key : String(key); }
function useHelpDrawerAnalytics_toPrimitive(input, hint) { if (useHelpDrawerAnalytics_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (useHelpDrawerAnalytics_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function useHelpDrawerAnalytics(_ref) {
  var analytics = _ref.analytics,
    analyticsLabelOverride = _ref.analyticsLabelOverride,
    _ref$onAnalyticsEvent = _ref.onAnalyticsEvent,
    onAnalyticsEvent = _ref$onAnalyticsEvent === void 0 ? defaultAnalyticsFunction : _ref$onAnalyticsEvent;
  function sendHelpDrawerEvent(content, eventAttributes) {
    if (analytics !== true && (!helpDrawerSendsAnalytics() || analytics === false)) {
      return;
    }
    var eventHeadingText = analyticsLabelOverride !== null && analyticsLabelOverride !== void 0 ? analyticsLabelOverride : content;
    if (!eventHeadingText) {
      console.error('No content found for Dialog analytics event');
      return;
    }
    onAnalyticsEvent(useHelpDrawerAnalytics_objectSpread({
      event_type: EventType.UI_INTERACTION,
      event_category: EventCategory.UI_COMPONENTS,
      event_label: eventHeadingText,
      event_extension: eventExtensionText,
      heading: eventHeadingText
    }, eventAttributes));
  }
  var _useAnalyticsContent = useAnalyticsContent({
      componentName: 'Dialog',
      onMount: function onMount(content) {
        sendHelpDrawerEvent(content, {
          event_name: 'help_drawer_opened',
          evsed',
          event_action: 'closed help drawer'
        });
      }
    }),
    _useAnalyticsContent2 = useHelpDrawerAnalytics_slicedToArray(_useAnalyticsContent, 1),
    headingRef = _useAnalyticsContent2[0];
  return headingRef;
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/HelpDrawer/HelpDrawer.js
var HelpDrawer_excluded = ["analytics", "analyticsLabelOverride", "analyticsEventTypeOverride", "children", "className"];
function HelpDrawer_extends() { HelpDrawer_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HelpDrawer_extends.apply(this, arguments); }
function HelpDrawer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = HelpDrawer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function HelpDrawer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/drawer/).
 */
var HelpDrawer = function HelpDrawer(props) {
  var analytics = props.analytics,
    analyticsLabelOverride = props.analyticsLabelOverride,
    analyticsEventTypeOverride = props.analyticsEventTypeOverride,
    children = props.children,
    className = props.className,
    others = HelpDrawer_objectWithoutProperties(props, HelpDrawer_excluded);
  var headingRef = useHelpDrawerAnalytics(props);
  return /*#__PURE__*/react.createElement(Drawer_Drawer, HelpDrawer_extends({
    className: classnames_default()(className, 'ds-c-help-drawer'),
    headingRef: headingRef
  }, others), children);
};
/* harmony default export */ var HelpDrawer_HelpDrawer = ((/* unused pure expression or super */ null && (HelpDrawer)));
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/HelpDrawer/index.js


;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Pagination/Ellipses.js

var Ellipses = function Ellipses() {
  return /*#__PURE__*/react.createElement("span", {
    className: "ds-c-pagination__overflow"
  }, "\u2026");
};
/* harmony default export */ var Pagination_Ellipses = (Ellipses);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Pagination/Page.js


function Page(_ref) {
  var href = _ref.href,
    index = _ref.index,
    isActive = _ref.isActive,
    onPageChange = _ref.onPageChange;
  return /*#__PURE__*/react.createElement(react.Fragment, null, isActive ? /*#__PURE__*/react.createElement("span", {
    className: "ds-c-button ds-c-button--ghost ds-c-pagination__current-page",
    "aria-current": "page"
  }, index) : /*#__PURE__*/react.createElement(Button_Button, {
    variation: "ghost",
    href: href,
    onClick: onPageChange,
    "aria-label": "page ".concat(index)
  }, index));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/ArrowIcon.js
function ArrowIcon_extends() { ArrowIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ArrowIcon_extends.apply(this, arguments); }




var ArrowIcon_defaultProps = {
  className: '',
  direction: 'right',
  viewBox: '0 0 320 512'
};
function ArrowIcon(props) {
  var direction = props.direction || ArrowIcon_defaultProps.direction;
  var iconCssClasses = classnames_default()('ds-c-icon--arrow', "ds-c-icon--arrow-".concat(direction), props.className);
  return /*#__PURE__*/react.createElement(SvgIcon, ArrowIcon_extends({
    title: t("icons.".concat(direction, "Arrow"))
  }, ArrowIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
  }));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Pagination/Pagination.js
var Pagination_excluded = ["ariaLabel", "className", "compact", "currentPage", "renderHref", "onPageChange", "headingLevel", "isNavigationHidden", "startLabelText", "startAriaLabel", "endLabelText", "endAriaLabel", "totalPages"];
function Pagination_extends() { Pagination_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Pagination_extends.apply(this, arguments); }
function Pagination_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Pagination_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Pagination_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








// Determines number of pages visible to either side of active page.
var overflow = 1;

// Determines total number of visible pages without Ellipses.
var maxVisiblePages = 7;
function paginationBuilder(page, pages) {
  var paginationRange = [];
  var start = page - overflow;
  var end = page + overflow;
  var availableSlots = maxVisiblePages - 2;

  /**
   * If the current page is < `maxVisiblePages`,
   * add 1 - 5 pages.
   */
  if (page < availableSlots) {
    start = 1;
    end = availableSlots;
  }

  /**
   * If the current page equals `pages` - 1,
   * make sure `start` begins one page earlier.
   */
  if (page === pages - 2) {
    start -= 1;
    end += 1;
  }

  /**
   * If `end` page is two from the end,
   * make sure the last page shows instead of ellipsis.
   */
  if (end === pages - 2) {
    end += 1;
  }

  /**
   * If `end` > `pages`,
   * add last pages to `paginationRange[]`.
   */
  if (end >= pages) {
    start = pages - (availableSlots - 1);
    end = pages;
  }

  /**
   * If `pages` is 5 or fewer,
   * all pages added to `paginationRange[]`
   */
  if (pages <= maxVisiblePages) {
    start = 1;
    end = pages;
  }
  for (var i = start; i <= end; i++) {
    paginationRange.push(i);
  }
  return paginationRange;
}

/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/pagination/).
 */
function Pagination(_ref) {
  var ariaLabel = _ref.ariaLabel,
    className = _ref.className,
    compact = _ref.compact,
    currentPage = _ref.currentPage,
    renderHref = _ref.renderHref,
    onPageChange = _ref.onPageChange,
    headingLevel = _ref.headingLevel,
    isNavigationHidden = _ref.isNavigationHidden,
    startLabelText = _ref.startLabelText,
    startAriaLabel = _ref.startAriaLabel,
    endLabelText = _ref.endLabelText,
    endAriaLabel = _ref.endAriaLabel,
    totalPages = _ref.totalPages,
    rest = Pagination_objectWithoutProperties(_ref, Pagination_excluded);
  var classes = classnames_default()('ds-c-pagination', {
    'ds-c-pagination--compact': compact
  }, className);

  /**
   * `useState` and `useEffect` determine if
   * mobile layout of turn function (evt) {
      return onPageChange(evt, page);
    };
  }, [onPageChange]);
  var pages = [];

  /**
   * If `compact` is true, don't run code to populate `pages[]`.
   */
  if (!compact) {
    var pageRange = paginationBuilder(currentPage, totalPages);
    if (pageRange[0] >= 2) {
      /**
       * If `pageRange` begins with a page of 2 or greater,
       * begin Pagination with Page 1
       */
      pages.push( /*#__PURE__*/react.createElement(Page, {
        href: renderHref(1),
        key: "page-1",
        index: 1,
        isActive: currentPage === 1,
        onPageChange: pageChange(1)
      }));

      /**
       * If `pageRange` doesn't equal 2, second Pagination element is Ellipses,
       * otherwise page count continues.
       */
      if (pageRange[0] !== 2) {
        pages.push( /*#__PURE__*/react.createElement(Pagination_Ellipses, {
          key: "ellipses-1"
        }));
      }
    }

    /**
     * Renders all Page components in range (3 pages) to Pagination component.
     */

    pageRange.map(function (page) {
      pages.push( /*#__PURE__*/react.createElement(Page, {
        href: renderHref(page),
        key: "page-".concat(page),
        index: page,
        isActive: currentPage === page,
        onPageChange: pageChange(page)
      }));
    });

    /**
     * Defines if/when the Ellipses component appears
     * at the end of the Pagination component -
     * as long as there are fewer than 7 pages.
     */
    if (currentPage <= totalPages - 3 && totalPages > maxVisiblePages) {
      if (currentPage < totalPages - 3) {
        pages.push( /*#__PURE__*/react.createElement(Pagination_Ellipses, {
          key: "ellipses-2"
        }));
      }
      pages.push( /*#__PURE__*/react.createElement(Page, {
        href: renderHref(totalPages),
        key: "page-".concat(totalPages),
        index: totalPages,
        isActive: currentPage === totalPages,
        onPageChange: pageChange(totalPages)
      }));
    }
  }
  var startIcon = /*#__PURE__*/react.createElement(ArrowIcon, {
    direction: "left",
    className: "ds-c-pagination__nav--image"
  });
  var endIcon = /*#__PURE__*/react.createElement(ArrowIcon, {
    direction: "right",
    className: "ds-c-pagination__nav--image"
  });
  var Heading = "h".concat(headingLevel);
  var headingElement = /*#__PURE__*/react.createElement(Heading, {
    id: "pagination-heading"
  }, ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : t('pagination.ariaLabel'), " -", ' ', t('pagination.pageXOfY', {
    number: "".concat(currentPage),
    total: "".concat(totalPages)
  }));
  return /*#__PURE__*/react.createElement("nav", Pagination_extends({
    className: classes,
    "aria-labelledby": "pagination-heading"
  }, rest), /*#__PURE__*/react.createElement("span", {
    "aria-live": "polite",
    role: "status",
    className: "ds-u-visibility--screen-reader"
  }, headingElement), /*#__PURE__*/react.createElement(Button_Button, {
    variation: "ghost",
    href: renderHref(currentPage - 1),
    onClick: pageChange(currentPage - 1),
    "aria-label": startAriaLabel !== null && startAriaLabel !== void 0 ? startAriaLabel : t('pagination.startAriaLabel'),
    className: "ds-c-pagination__nav",
    disabled: currentPage === 1,
    style: {
      visibility: currentPage === 1 && isNavigationHidden ? 'hidden' : 'visible'
    },
    "aria-hidden": currentPage === 1 ? isNavigationHidden : false
  }, /*#__PURE__*/react.createElement("span", {
    className: "ds-c-pagination__nav--img-container ds-c-pagination__nav--img-container-previous"
  }, startIcon), startLabelText !== null && startLabelText !== void 0 ? startLabelText : t('pagination.startLabelText')), /*#__PURE__*/react.createElement("span", {
    className: "ds-c-pagination__page-count",
    dangerouslySetInnerHTML: {
      __html: t('pagination.pageXOfY', {
        number: "<strong>".concat(currentPage, "</strong>"),
        total: "<strong>".concat(totalPages, "</strong>")
      })
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "ds-c-pagination__pages"
  }, pages), /*#__PURE__*/react.createElement(Button_Button, {
    variation: "ghost",
    href: renderHref(currentPage + 1),
    onClick: pageChange(currentPage + 1),
    "aria-label": endAriaLabel !== null && endAriaLabel !== void 0 ? endAriaLabel : t('pagination.endAriaLabel'),
    className: "ds-c-pagination__nav",
    disabled: currentPage === totalPages,
    style: {
      visibility: currentPage === totalPages && isNavigationHidden ? 'hidden' : 'visible'
    },
    "aria-hidden": currentPage === totalPages ? isNavigationHidden : false
  }, endLabelText !== null && endLabelText !== void 0 ? endLabelText : t('pagination.endLabelText'), /*#__PURE__*/react.createElement("span", {
    className: "ds-c-pagination__nav--img-container ds-c-pagination__nav--img-container-next"
  }, endIcon)));
}
Pagination.defaultProps = {
  compact: false,
  headingLevel: '2',
  isNavigationHidden: false
};
/* harmony default export */ var Pagination_Pagination = (Pagination);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Pagination/index.js

;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Spinner/Spinner.js



/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/spinner/).
 */
var Spinner = function Spinner(props) {
  var _props$ariaValuetext;
  var className = classnames_default()('ds-c-spinner', props.size && "ds-c-spinner--".concat(props.size), props.inversed && 'ds-c-spinner--inverse', props.filled && 'ds-c-spinner--filled', props.className);
  return /*#__PURE__*/react.createElement("span", {
    className: className,
    role: props.role
  }, /*#__PURE__*/react.createElement("span", {
    className: "ds-u-visibility--screen-reader"
  }, (_props$ariaValuetext = props['aria-valuetext']) !== null && _props$ariaValuetext !== void 0 ? _props$ariaValuetext : t('spinner.ariaText')));
};
Spinner.defaultProps = {
  role: 'status'
};
/* harmony default export */ var Spinner_Spinner = (Spinner);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Spinner/index.js

;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Table/TableCaption.js
var TableCaption_excluded = ["children", "className", "_id", "_scrollActive", "_scrollableNotice"];
function TableCaption_extends() { TableCaption_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableCaption_extends.apply(this, arguments); }
function TableCaption_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableCaption_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableCaption_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var TableCaption = function TableCaption(_ref) {
  var children = _ref.children,
    className = _ref.className,
    _id = _ref._id,
    _scrollActive = _ref._scrollActive,
    _scrollableNotice = _ref._scrollableNotice,
    tableCaptionProps = TableCaption_objectWithoutProperties(_ref, TableCaption_excluded);
  var classes = classnames_default()('ds-c-table__caption', className);
  return /*#__PURE__*/react.createElement("caption", TableCaption_extends({
    className: classes,
    id: _id
  }, tableCaptionProps), children, _scrollActive && _scrollableNotice);
};

// Set component name to make child.type.displayName available to other components (eg. Table)
TableCaption.displayName = 'TableCaption';
/* harmony default export */ var Table_TableCaption = (TableCaption);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Table/TableContext.js

var TableContext = /*#__PURE__*/(0,react.createContext)({
  stackable: false,
  warningDisabled: false
});
/* harmony default export */ var Table_TableContext = (TableContext);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Table/Table.js
var Table_excluded = ["borderless", "className", "compact", "stackable", "stackableBreakpoint", "striped", "scrollable", "scrollableNotice", "warningDisabled", "children", "id"];
function Table_extends() { Table_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Table_extends.apply(this, arguments); }
function Table_slicedToArray(arr, i) { return Table_arrayWithHoles(arr) || Table_iterableToArrayLimit(arr, i) || Table_unsupportedIterableToArray(arr, i) || Table_nonIterableRest(); }
function Table_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Table_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Table_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Table_arrayLikeToArray(o, minLen); }
function Table_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Table_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Table_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Table_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Table_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Table_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/**
 * Determine if a ReactNode is a TableCaption
 */
function isTableCaption(child) {
  var _child$type, _child$type2;
  if (!child || ! /*#__PURE__*/react.isValidElement(child)) {
    return false;
  }

  // Check child.type first and as a fallback, check child.type.displayName follow by child.type.name
  var componentName = ((_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) || ((_child$type2 = child.type) === null || _child$type2 === void 0 ? void 0 : _child$type2.name);
  return child.type === Table_TableCaption || componentName === 'TableCaption';
}
/**
 * `Table` is a container component that contains `TableCaption`, `TableHead`
 * and `TableBody` as children, as well as `TableRow` and `TableCell` for the
 * table content. These components mostly follow ordinary HTML table semantics,
 * but also include some additional responsive features including horizontal
 * scrolling and vertically stacked rows.
 *
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/table/).
 */
var Table = function Table(_ref) {
  var borderless = _ref.borderless,
    className = _ref.className,
    compact = _ref.compact,
    stackable = _ref.stackable,
    stackableBreakpoint = _ref.stackableBreakpoint,
    striped = _ref.striped,
    scrollable = _ref.scrollable,
    scrollableNotice = _ref.scrollableNotice,
    warningDisabled = _ref.warningDisabled,
    children = _ref.children,
    id = _ref.id,
    tableProps = Table_objectWithoutProperties(_ref, Table_excluded);
  var _useState = (0,react.useState)(false),
    _useState2 = Table_slicedToArray(_useState, 2),
    scrollActive = _useState2[0],
    setScrollActive = _useState2[1];
  var captionId = useId('table-caption--', id);
  if (false) {}
  var containerRef = (0,react.useRef)();
  (0,react.useEffect)(function () {
    if (!window || !scrollable) {
      return;
    }
    var handleResize = function handleResize() {
      if (containerRef.current) {
        var _containerRef$current = containerRef.current,
          scrollWidth = _containerRef$current.scrollWidth,
          clientWidth = _containerRef$current.clientWidth;
        setScrollActive(scrollWidth > clientWidth);
      }
    };
    handleResize();
    var debounceHandleResize = utilities_debounce(handleResize, 500);
      window.removeEventListener('resize', debounceHandleResize);
    };
  }, [setScrollActive, scrollable]);
  var classes = classnames_default()('ds-c-table', borderless ? 'ds-c-table--borderless' : null, compact ? 'ds-c-table--compact' : null, striped ? 'ds-c-table--striped' : null, stackable ? "ds-c-".concat(stackableBreakpoint, "-table--stacked") : null, className);

  /**
   * Makes table container focusable and displays the scrollable notice when table width exceeds viewport
   * by setting `tabIndex = 0` attribute.
   * This provides context for screen readers to the table's <caption> via aria-labelleby
   */
  var attributeScrollable = scrollable && {
    className: 'ds-c-table__wrapper',
    role: 'region',
    'aria-labelledby': captionId,
    tabIndex: scrollActive ? 0 : null
  };
  var contextValue = {
    stackable: !!stackable,
    warningDisabled: !!warningDisabled
  };
  var renderedChildren = react.Children.map(children, function (child) {
    if (isTableCaption(child)) {
      // Extend props on TableCaption before rendering.
      if (scrollable) {
        return /*#__PURE__*/react.cloneElement(child, {
          _id: captionId,
          _scrollActive: scrollActive,
          _scrollableNotice: scrollableNotice
        });
      }
    }
    return child;
  });
  var table = /*#__PURE__*/react.createElement(Table_TableContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement("table", Table_extends({
    className: classes
  }, tableProps), renderedChildren));
  return scrollable ? /*#__PURE__*/react.createElement("div", Table_extends({
    ref: containerRef,
    "aria-live": "polite",
    "aria-relevant": "additions"
  }, attributeScrollable), table) : table;
};
Table.defaultProps = {
  scrollableNotice: /*#__PURE__*/react.createElement(Alert_Alert, {
    className: "ds-c-table__scroll-alert",
    role: "status"
  }, /*#__PURE__*/react.createElement("p", {
    className: "ds-c-alert__text"
  }, "Scroll using arrow keys to see more")),
  stackableBreakpoint: 'sm'
};
/* harmony default export */ var Table_Table = (Table);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Table/TableBody.js
var TableBody_excluded = ["children"];
function TableBody_extends() { TableBody_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableBody_extends.apply(this, arguments); }
function TableBody_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableBody_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableBody_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * `TableBody` renders the `<tbody>` element and will typically contain `TableRow` elements to define table data.
 */
var TableBody = function TableBody(_ref) {
  var children = _ref.children,
    tableBodyProps = TableBody_objectWithoutProperties(_ref, TableBody_excluded);
  return /*#__PURE__*/react.createElement("tbody", TableBody_extends({
    role: "rowgroup"
  }, tableBodyProps), children);
};
/* harmony default export */ var Table_TableBody = (TableBody);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Table/TableCell.js
var TableCell_excluded = ["align", "children", "className", "component", "headers", "id", "scope", "stackedTitle", "stackedClassName", "_isTableHeadChild"];
function TableCell_extends() { TableCell_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableCell_extends.apply(this, arguments); }
function TableCell_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableCell_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableCell_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * `TableCell` dynamically renders a `<th>` or `<td>` element based on the
 * parent component or user specified `component` prop. By default `TableCell`
 * will automatically render a `<th>` element if the parent component is
 * `TableHead`, otherwise it will render a `<td>` element.
 */
var TableCell = function TableCell(_ref) {
  var align = _ref.align,
    children = _ref.children,
    className = _ref.className,
    component = _ref.component,
    headers = _ref.headers,
    id = _ref.id,
    scope = _ref.scope,
    stackedTitle = _ref.stackedTitle,
    stackedClassName = _ref.stackedClassName,
    _isTableHeadChild = _ref._isTableHeadChild,
    tableCellProps = TableCell_objectWithoutProperties(_ref, TableCell_excluded);
  var _useContext = (0,react.useContext)(Table_TableContext),
    stackable = _useContext.stackable,
    warningDisabled = _useContext.warningDisabled;
  var Component;
  if (component) {
    Component = component;
  } else {
    Component = _isTableHeadChild ? 'th' : 'td';
  }
  if (false) {}
  var role = 'cell';
  if (_isTableHeadChild) {
    role = 'columnheader';
  } else if (component === 'th') {
    role = 'rowheader';
  }
  var defaultScope = scope;
  if (!defaultScope && _isTableHeadChild) {
    defaultScope = 'col';
  }
  var alignClassName = align ? "ds-u-text-align--".concat(align) : null;
  var classes = classnames_default()(alignClassName, className);

  // The data attributes `data-title` is access by CSS to generates row header content for stacked table
  return /*#__PURE__*/react.createElement(Component, TableCell_extends({
    className: classes,
    role: role,
    scope: defaultScope,
    headers: headers,
    id: id,
    "data-title": stackedTitle
  }, tableCellProps), children);
};
TableCell.defaultProps = {
  align: 'left'
};
/* harmony default export */ var Table_TableCell = (TableCell);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Table/TableHead.js
var TableHead_excluded = ["children"];
function TableHead_extends() { TableHead_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableHead_extends.apply(this, arguments); }
function TableHead_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableHead_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableHead_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableHead = function TableHead(_ref) {
  var children = _ref.children,
    tableHeadProps = TableHead_objectWithoutProperties(_ref, TableHead_excluded);
  var renderChildren = function renderChildren() {
    return react.Children.map(children, function (child) {
      // Extend props before rendering.
      if (child && child.props) {
        return /*#__PURE__*/react.cloneElement(child, {
          _isTableHeadChild: true
        });
      }
      return child;
    });
  };
  return /*#__PURE__*/react.createElement("thead", TableHead_extends({
    role: "rowgroup"
  }, tableHeadProps), renderChildren());
};
/* harmony default export */ var Table_TableHead = (TableHead);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Table/TableRow.js
var TableRow_excluded = ["children", "_isTableHeadChild"];
function TableRow_extends() { TableRow_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableRow_extends.apply(this, arguments); }
function TableRow_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableRow_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableRow_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
    _isTableHeadChild = _ref._isTableHeadChild,
    tableRowProps = TableRow_objectWithoutProperties(_ref, TableRow_excluded);
  var renderChildren = function renderChildren() {
    return react.Children.map(children, function (child) {
      // Extend props before rendering.
      if (child && child.props) {
        return /*#__PURE__*/react.cloneElement(child, {
          _isTableHeadChild: _isTableHeadChild
        });
      }
      return child;
    });
  };
  return /*#__PURE__*/react.createElement("tr", TableRow_extends({
    role: "row"
  }, tableRowProps), _isTableHeadChild ? renderChildren() : children);
};
/* harmony default export */ var Table_TableRow = (TableRow);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Table/index.js






;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Tabs/Tab.js
function Tab_extends() { Tab_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Tab_extends.apply(this, arguments); }


var Tab = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var defaultProps = {
    selected: false
  };
  var href = props.href || "#".concat(props.panelId);
  var classes = classnames_default()('ds-c-tabs__item', props.className);
  var sharedTabProps = {
    role: 'tab',
    className: classes,
    id: props.id,
    ref: ref
  };
  var handleClick = function handleClick(evt) {
    var onClick = props.onClick,
      panelId = props.panelId,
      id = props.id;
    if (onClick) {
      onClick(evt, panelId, id, href);
    }
  };
  var handleKeyDown = function handleKeyDown(evt) {
    var onKeyDown = props.onKeyDown,
      panelId = props.panelId,
      id = props.id;
    if (onKeyDown) {
      onKeyDown(evt, panelId, id, href);
    }
  };
  return !props.disabled ? /*#__PURE__*/react.createElement("a", Tab_extends({
    "aria-selected": props.selected || defaultProps.selected,
    "aria-controls": props.panelId,
    href: href,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, sharedTabProps), props.children) : /*#__PURE__*/react.createElement("span", Tab_extends({
    "aria-disabled": "true"
  }, sharedTabProps), props.children);
});
Tab.displayName = 'Tab';
/* harmony default export */ var Tabs_Tab = (Tab);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Tabs/TabPanel.js


var TabPanel = function TabPanel(props) {
  var classes = classnames_default()('ds-c-tabs__panel', props.className);
  return /*#__PURE__*/react.createElement("div", {
    "aria-labelledby": props.tabId,
    "aria-hidden": !props.selected,
    "aria-disabled": props.disabled,
    className: classes,
    id: props.id,
    role: "tabpanel"
  }, props.children);
};

// Set component name to make child.type.displayName available to other components (eg. Tab)
TabPanel.displayName = 'TabPanel';
TabPanel.defaultProps = {
  selected: false
};
/* harmony default export */ var Tabs_TabPanel = (TabPanel);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Tabs/Tabs.js
function Tabs_slicedToArray(arr, i) { return Tabs_arrayWithHoles(arr) || Tabs_iterableToArrayLimit(arr, i) || Tabs_unsupportedIterableToArray(arr, i) || Tabs_nonIterableRest(); }
function Tabs_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Tabs_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Tabs_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tabs_arrayLikeToArray(o, minLen); }
function Tabs_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Tabs_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Tabs_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/** CONSTANTS
 * Adding in the constant values for keycodes
 * to handle onKeyDown events
 */
var LEFT_ARROW = 'ArrowLeft';
var RIGHT_ARROW = 'ArrowRight';

/**
 * Determine if a React component is a TabPanel
 * @param {React.Node} child - a React component
 * @return {Boolean} Is this a TabPanel component?
 */
var isTabPanel = function isTabPanel(child) {
  var componentName = get_default()(child, 'type.displayName') || get_default()(child, 'type.name');

  // Check child.type first and as a fallback, check child.type.displayName follow by child.type.name
  return child && (child.type === Tabs_TabPanel || componentName === 'TabPanel');
};

/**
 * Get the id of the first TabPanel child
 * @param {Object} props
 * @return {String} The id
 */
var getDefaultSelectedId = function getDefaultSelectedId(props) {
  var selectedId;

  // TODO: Use the panelChildren method to pass in an array
  // of panels, instead of doing it here...
  react.Children.forEach(props.children, function (child) {
    if (isTabPanel(child) && !selectedId) {
      selectedId = child.props.id;
    }
  });
  return selectedId;
};

/**
 * Generate an id for a panel's associated tab if one doesn't yet exist
 * @param {Object} TabPanel component
 * @return {String} Tab ID
 */
var panelTabId = function panelTabId(panel) {
  var _panel$props$tabId;
  return (_panel$props$tabId = panel.props.tabId) !== null && _panel$props$tabId !== void 0 ? _panel$props$tabId : "".concat(panel.props.id, "__tab");
};

/**
 * `Tabs` is a container component that manages the state of your tabs for you.
 * In most cases, you'll want to use this component rather than the
 * presentational components (`Tab`, `TabPanel`) on their own.
 *
 * A `TabPanel` is a presentational component which accepts a tab's content as
 * its `children`.
 *
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/tabs/).
 */
var Tabs = function Tabs(props) {
  var initialSelectedId = props.defaultSelectedId || getDefaultSelectedId(props);
  var _useState = (0,react.useState)(initialSelectedId),
    _useState2 = Tabs_slicedToArray(_useState, 2),
    internalSelectedId = _useState2[0],
    setSelectedId = _useState2[1];
  var isControlled = props.selectedId !== undefined;
  var selectedId = isControlled ? props.selectedId : internalSelectedId;
  var listClasses = classnames_default()('ds-c-tabs', props.tablistClassName);
  // using useRef hook to keep track of elements to focus
  var tabsRef = (0,react.useRef)({});

  /**
   * Update the URL in the browser without adding a new entry to the history.
   * @param {String} url - Absolute or relative URL
   */
  var replaceState = function replaceState(url) {
    if (window.history) {
      window.history.r return react.Children.toArray(props.children).filter(isTabPanel);
  };
  var handleSelectedTabChange = function handleSelectedTabChange(newSelectedId) {
    var onChange = props.onChange;
    if (onChange) {
      onChange(newSelectedId, selectedId);
    }
    tabsRef.current[newSelectedId].focus();
    replaceState(tabsRef.current[newSelectedId {
    evt.preventDefault();
    handleSelectedTabChange(panelId);
  };
  var handleTabKeyDown = function handleTabKeyDown(evt, panelIdIndex(function (elem) {
      return elem.props.id === panelId;
    });
    var target;
    switch (evt.key) {
      case LEFT_ARROW:
        evt.preventDefault();
        if (tabIndex === 0) {
          var prevTab = tabs[tabs.length - 1];
          target = prevTab.props.id;
        } else {
          var _prevTab = tabs[tabIndex - 1];
          target = _prevTab.props.id;
        }
        handleSelectedTabChange(target);
        break;
      case RIGHT_ARROW:
        evt.preventDefault();
        if (tabIndex === tabs.length - 1) {
          var currentTab = tabs[0];
          target = currentTab.props.id;
        } else {
          var nextTab = tabs[tabIndex + 1];
          target = nextTab.props.id;
        }
        handleSelectedTabChange(target);
        break;
      default:
        break;
    }
  };
  var renderChildren = function renderChildren() {
    return react.Children.map(props.children, function (child) {
      if (isTabPanel(child) && /*#__PURE__*/react.isValidElement(child)) {
        // Extend props on panels before rendering. Also removes any props
        // that don't need passed into TabPanel but are used to generate
        // the Tab components
        return /*#__PURE__*/react.cloneElement(child, {
          selected: selectedId === child.props.id,
          tab: undefined,
          tabHref: undefined,
          tabId: panelTabId(child)
        });
      }
      return child;
    });
  };
  var renderTabs = function renderTabs() {
    var panels = panelChildren();
    var tabs = panels.map(function (panel) {
      return /*#__PURE__*/react.createElement(Tabs_Tab, {
        className: panel.props.tabClassName,
        href: panel.props.tabHref,
        disabled: panel.props.disabled,
        id: panelTabId(panel),
        key: panel.key,
        onClick: handleTabClick,
        onKe ref(tab) {
          tabsRef.current[panel.props.id] = tab;
        },
        selected: selectedId === panel.props.id
      }, panel.props.tab);
    });
    return tabs;
  };
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: listClasses,
    role: "tablist"
  }, renderTabs()), renderChildren());
};
/* harmony default export */ var Tabs_Tabs = (Tabs);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Tabs/index.js


;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/TextField/useLabelMask.js
function useLabelMask_typeof(obj) { "@babel/helpers - typeof"; return useLabelMask_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, useLabelMask_typeof(obj); }
function useLabelMask_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function useLabelMask_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useLabelMask_ownKeys(Object(source), !0).forEach(function (key) { useLabelMask_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useLabelMask_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useLabelMask_defineProperty(obj, key, value) { key = useLabelMask_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function useLabelMask_toPropertyKey(arg) { var key = useLabelMask_toPrimitive(arg, "string"); return useLabelMask_typeof(key) === "symbol" ? key : String(key); }
function useLabelMask_toPrimitive(input, hint) { if (useLabelMask_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (useLabelMask_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function useLabelMask_slicedToArray(arr, i) { return useLabelMask_arrayWithHoles(arr) || useLabelMask_iterableToArrayLimit(arr, i) || useLabelMask_unsupportedIterableToArray(arr, i) || useLabelMask_nonIterableRest(); }
function useLabelMask_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useLabelMask_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useLabelMask_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useLabelMask_arrayLikeToArray(o, minLen); }
function useLabelMask_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function useLabelMask_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function useLabelMask_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/**
 * Regular expressions for matching commonly used masks, ensure capture groups are
 * set for each set of items that are separated by a delimiter, delimiters are
 * optional and so should be shown as well with the `?` optional flag.
 */
var RE_DATE = /^(\d{1,2})[\D]?(\d{1,2})?[\D]?(\d{1,4})?/;
var RE_PHONE = /^\(?(\d{1,3})?\)?[\s.-]?(\d{1,3})?[\s.-]?(\d{1,4})?/;
var RE_SSN = /([*\d]{1,3})[\s.-]?([*\d]{1,2})?[\s.-]?([\d{1,4}]+)?/;
var RE_ZIP = /(\d{1,5})/;
var RE_CURRENCY = /\$?[\d,.-]*/;

/**
 * This function returns a mask function which returns either the formatted match only, or
 * the formatted match + the hint substring which the regular expressions above match against
 * when determining what content has been filled in.
 */
var makeMask = function makeMask(regex, hint, formatter) {
  return function () {
    var rawInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var valueOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var match = regex.exec(rawInput);
    var formattedMatch = match ? formatter(match) : '';
    if (valueOnly) {
      return formattedMatch;
    }
    var hintSub = hint.substring(formattedMatch.length);
    return formattedMatch + hintSub;
  };
};

/**
 * The date mask automatically pads months and days that are one digit
 */
var DATE_MASK = makeMask(RE_DATE, 'MM/DD/YYYY', function (match) {
  var _match$slice = match.slice(1),
    _match$slice2 = useLabelMask_slicedToArray(_match$slice, 3),
    month = _match$slice2[0],
    day = _match$slice2[1],
    year = _match$slice2[2];
  var formattedDate = [
  // We treat all non-numeric characters as a delimiter. If they're using a
  // delimiter after a month or day, we interpret that as the user supplying
  // a single digit for month or day, which we will automatically pad for them.
  month && month.padStart(2, '0'), day && day.padStart(2, '0'), year].filter(function (s) {
    return s;
  }).join('/');
  return formattedDate;
});

/**
 * Formatting for US phone numbers
 */
var PHONE_MASK = makeMask(RE_PHONE, '###-###-####', function (match) {
  return match.slice(1).filter(function (s) {
    return s;
  }).join('-');
});

/**
 * Formatting for US Postal codes, this could be expanded to SK = makeMask(RE_ZIP, '#####', function (match) {
  return match[1];
});

/**
 * Formatting for social security numbers.
 */
var SSN_MASK = makeMask(RE_SSN, '###-##-####', function (match) {
  /**
   * for future notice, there are rules regarding social security numbers, these could be validated
   * if we were to add error handling to useLabelMask as an additional set of functionality
   * The first part should have 3 digits and should not be 000, 666, or between 900 and 999.
   * The second part should have 2 digits and it should be from 01 to 99.
   * The third part should have 4 digits and it should be from 0001 to 9999.
   */
  return match.slice(1).filter(function (s) {
    return s;
  }).join('-');
});

/**
 * Does the same thing as SSN_MASK except that it obfuscates the first five digits
 */
var SSN_MASK_OBFUSCATED = function SSN_MASK_OBFUSCATED(rawInput, valueOnly) {
  // Use the normal SSN_MASK function just to clean the raw input and format it
  var formatted = SSN_MASK(rawInput, true);
  // We only hide the first five digits of the SSNs
  var obfuscation = '***-**';
  var obfuscated;
  if (formatted.length < obfuscation.length) {
    obfuscated = obfuscation.substring(0, formatted.length);
  } else {
    obfuscated = obfuscation + formatted.substring(obfuscation.length);
  }
  return SSN_MASK(obfuscated, valueOnly);
};

/**
 * Currency mask is a little different, we need to modify the incoming content to strip
 * out any commas or dollar signs before evaluating it via the Intl.NumberFormat function.
 */
var CURRENCY_MASK = makeMask(RE_CURRENCY, '$', function (match) {
  var signed = match[0].includes('-');
  var stripped = match[0].replace(/[^0-9.]/g, '');
  var clipped = stripped.includes('.') ? stripped.slice(0, stripped.indexOf('.') + 3) : stripped;
  var USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  var formatted = USDollar.format(Number(clipped)).replace(/\.00/, '');
  if (Number(clipped) > 0) {
    return signed ? '-' + formatted : formatted;
  } else {
    return '';
  }
});
function useLabelMask(maskFn, originalInputProps) {
  var _ref, _originalInputProps$v, _originalInputProps$v2, _originalInputProps$d;
  // TODO: Once we're on React 18, we can use the `useId` hook
  var generatedId = useId('label-mask--');
  var labelMaskId = originalInputProps.id ? "".concat(originalInputProps.id, "__label-mask") : generatedId;
  var _useState = (0,react.useState)(false),
    _useState2 = useLabelMask_slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  var _onFocus = originalInputProps.onFocus,
    _onBlur = originalInputProps.onBlur,
    _onChange = originalInputProps.onChange;
  var value = (_ref = (_originalInputProps$v = (_originalInputProps$v2 = originalInputProps.value) === null || _originalInputProps$v2 === void 0 ? void 0 : _originalInputProps$v2.toString()) !== null && _originalInputProps$v !== void 0 ? _originalInputProps$v : (_originalInputProps$d = originalInputProps.defaultValue) === null || _originalInputProps$d === void 0 ? void 0 : _originalInputProps$d.toString()) !== null && _ref !== void 0 ? _ref : '';
  var _useState3 = (0,react.useState)(value),
    _useState4 = useLabelMask_slicedToArray(_useState3, 2),
    currentValue = _us];
  (0,react.useEffect)(function () {
    setCurrentValue(value);
  }, [value, setCurrentValue]);
  var inputProps = useLabelMask_objectSpread(useLabelMask_objectSpread({}, originalInputProps), {}, {
    defaultValue: undefined,
    value: currentValue,
    onChange: function onChange(e) {
      setCurrentValue(e.currentTarget.value);
      if (_onChange) {
        _onChange(e);
      }
    },
    onFocus: function onFocus(e) {
      if (_onFocus) {
        _onFocus(e);
      }
      setFocused(true);
    },
    onBlur: function onBlur(e) {
      var maskedValue = maskFn(currentValue, true);
      e.currentTarget.value = maskedValue;
      e.target.value = maskedValue;
      setCurrentValue(maskedValue);
      if (_onChange) {
        _onChange(e);
      }
      if (_onBlur) {
        _onBlur(e);
      }
      setFocused(false);
    },
    type: 'text',
    inputMode: 'numeric',
    'aria-describedby': classnames_default()(originalInputProps['aria-describedby'], labelMaskId)
  });
  var currentMask = maskFn(currentValue);

  // Date mask needs to return the default empty mask when not focused
  if (maskFn === DATE_MASK && !focused) {
    currentMask = maskFn('');
  }

  // SSN mask needs to obfuscate the SSN when not focused
  if (maskFn === SSN_MASK && !focused && currentValue !== '') {
    currentMask = SSN_MASK_OBFUSCATED(currentValue);
    inputProps.value = SSN_MASK_OBFUSCATED(currentValue, true);
  }
  return {
    labelMask: /*#__PURE__*/react.createElement("div", {
      className: "ds-c-label-mask",
      id: labelMaskId
    }, /*#__PURE__*/react.createElement("span", {
      className: classnames_default()(focused && 'ds-u-visibility--screen-reader')
    }, currentMask), /*#__PURE__*/react.createElement("span", {
      className: classnames_default()(!focused && 'ds-u-display--none'),
      "aria-hidden": "true"
    }, currentMask)),
    inputProps: inputProps
  };
}
/* harmony default export */ var TextField_useLabelMask = ((/* unused pure expression or super */ null && (useLabelMask)));
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/TextField/LabelMask.js


var LabelMask = function LabelMask(props) {
  var field = react.Children.only(props.children);
  var _useLabelMask = useLabelMask(props.labelMask, field.props),
    labelMask = _useLabelMask.labelMask,
    inputProps = _useLabelMask.inputProps;
  var input = /*#__PURE__*/react.cloneElement(field, inputProps);
  return /*#__PURE__*/react.createElement(react.Fragment, null, labelMask, input);
};
/* harmony default export */ var TextField_LabelMask = (LabelMask);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/TextField/maskHelpers.js
function maskHelpers_slicedToArray(arr, i) { return maskHelpers_arrayWithHoles(arr) || maskHelpers_iterableToArrayLimit(arr, i) || maskHelpers_unsupportedIterableToArray(arr, i) || maskHelpers_nonIterableRest(); }
function maskHelpers_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function maskHelpers_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return maskHelpers_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return maskHelpers_arrayLikeToArray(o, minLen); }
function maskHelpers_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function maskHelpers_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function maskHelpers_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// Deliminate chunks of integers
var maskDeliminatedRegex = {
  phone: /(\d{3})(\d{1,3})?(\d+)?/,
  ssn: /([*\d]{3})([*\d]{1,2})?([*\d]+)?/,
  zip: /(\d{5})(\d*)/
};

/**
 * Remove everything that isn'ttoDigitsAndAsterisks(value) {
  return value.replace(/[^\d*]/g, '');
}

/**
 * Split value into groups and insert a hyphen deliminator between each
 * @param {String} value
 * @param {RegExp} rx - Regular expression with capturing groups
 * @returns {String}
 */
function deliminateRegexGroups(value, rx) {
  var matches = toDigitsAndAsterisks(value).match(rx);
  ifvalue = matches.slice(1).filter(function (a) {
      return !!a;
    }) // remove undefined groups
    .join('-');
  }
  return value;
}

/**
 * Determines if a value is a valid string with numeric digits
 * @param {String} value
 * @param {String} mask
 * @returns {Boolean}
 */
function isValueMaskable(value, mask) {
  if (value && typeof value === 'string') {
    var hasDigits = value.match(/\d/);
    var hasDigitsAsterisks = value.match(/[\d*]/g);
    if (hasDigits || hasDigitsAsterisks && mask === 'ssn') {
      return true;
    }
  }
  return false;
}

/**
 * Performs various transforms to format provided string as currency.
 * @param {String} value - a string containing at least one digit
 * @returns {String}
 */
function toCurrency(value) {
  // Determine if the value is positive or negative.
  var sign = value.indexOf('-') === 0 ? '-' : '';
  // Remove all characters except digits and decimal points.
  value = value.replace(/[^\d.]/g, '');
  // Remove all but the first decimal point.
  var firstDecimalPointIndex = value.indexOf('.');
  value = value.replace(/[.]/g, function (match, index) {
    return index > firstDecimalPointIndex ? '' : match;
  });
  // Remove leading zeroes (we'll add one back later if needed).
  value = value.replace(/^0+/g, '');
  // Split into whole number and fractional parts based on decimal point.
  var _value$split = value.split('.'),
    _value$split2 = maskHelpers_slicedToArray(_value$split, 2),
    whole = _value$split2[0],
    _value$split2$ = _value$split2[1],
    fractional = _value$split2$ === void 0 ? '' : _value$split2$;
  // Add commas for readability (if applicable), or simply return zero.
  // This "replaces" the zero-length space between groups of 3 digits with a comma.
  // Demo of this regex: https://regex101.com/r/JPocnt/2
  whole = whole === '' ? '0' : whole.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  if (fractional !== '') {
    if (fractional.length === 1) {
      // Pad with a zero for two decimal places.
      fractional = fractional.concat('0');
    } else if (fractional.length > 2) {
      // Cut all characters after the second decimal place.
      fractional = fractional.slice(0, 2);
    }
    // Clear the fractional if there's no cents. Add the decimal back here.
    fractional = fractional === '00' ? '' : ".".concat(fractional);
  }
  return "".concat(sign).concat(whole).concat(fractional);
}

/**
 * Returns the value with additional masking characters, or the same value back if invalid numeric string
 * @param {String} value
 * @returns {String}
 */
function maskValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var mask = arguments.length > 1 ? arguments[1] : undefined;
  if (isValueMaskable(value, mask)) {
    if (mask === 'currency') {
      value = toCurrency(value);
    } else if (maskDeliminatedRegex[mask]) {
      // Use deliminator regex to mask value and remove unwanted characters
      // If the regex does not match, return the numeric digits.
      value = deliminateRegexGroups(value, maskDeliminatedRegex[mask]);
    }
  }
  return value;
}

/**
 * Remove mask characters from value, or the same value back if invalid numeric string
 * @param {String} value
 * @param {String} mask
 * @returns {String}
 */
function unmaskValue(value, mask) {
  if (isValueMaskable(value, mask)) {
    if (mask === 'currency') {
      // Preserve only digits, decimal point, or negative symbol
      var matches = value.match(/^-|[\d.]/g);
      if (matches) {
        value = matches.join('');
      }
    } else if (maskDeliminatedRegex[mask]) {
      // Remove the deliminators and revert to single ungrouped string
      value = toDigitsAndAsterisks(value);
    }
  }
  return value;
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/TextField/Mask.js
function Mask_typeof(obj) { "@babel/helpers - typeof"; return Mask_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Mask_typeof(obj); }
function Mask_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Mask_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Mask_toPropertyKey(descriptor.key), descriptor); } }
function Mask_createClass(Constructor, protoProps, staticProps) { if (protoProps) Mask_defineProperties(Constructor.prototype, protoProps); if (staticProps) Mask_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Mask_toPropertyKey(arg) { var key = Mask_toPrimitive(arg, "string"); return Mask_typeof(key) === "symbol" ? key : String(key); }
function Mask_toPrimitive(input, hint) { if (Mask_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Mask_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Mask_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Mask_setPrototypeOf(subClass, superClass); }
function Mask_setPrototypeOf(o, p) { Mask_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Mask_setPrototypeOf(o, p); }
function Mask_createSuper(Derived) { var hasNativeReflectConstruct = Mask_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Mask_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Mask_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Mask_possibleConstructorReturn(this, result); }; }
function Mask_possibleConstructorReturn(self, call) { if (call && (Mask_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Mask_assertThisInitialized(self); }
function Mask_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function Mask_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function Mask_getPrototypeOf(o) { Mask_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Mask_getPrototypeOf(o); }




// TODO: Remove `maskValue` and `unmaskValue` exports with next major release (v3.x.x)

var maskPattern = {
  phone: '[0-9-]*',
  ssn: '[0-9-*]*',
  zip: '[0-9-]*',
  currency: '[0-9.,-]*'
};
var maskOverlayContent = {
  currency: '$'
};
var Mask = /*#__PURE__*/function (_React$PureComponent) {
  Mask_inherits(Mask, _React$PureComponent);
  var _super = Mask_createSuper(Mask);
  function Mask(props) {
    var _this;
    Mask_classCallCheck(this, Mask);
    _this = _super.call(this, props);
    var field = _this.field();
    var initialValue = field.props.value || field.props.defaultValue;
    _this.state = {
      value: maskValue(initialValue, props.mask)
    };
    return _this;
  }
  Mask_createClass(Mask, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.debouncedOnBlurEvent) {
        this.field().props.onBlur(this.debouncedOnBlurEvent);
        this.debouncedOnBlurEvent = null;
      }
      var fieldProps = this.field().props;
      var prevField = react.Children.only(prevProps.children);
      var prevFieldProps = /*#__PURE__*/react.isValidElement(prevField) ? prevField.props : {};
      var isControlled = fieldProps.value !== undefined;
      if (isControlled && prevFieldProps.value !== fieldProps.value) {
        var mask = this.props.mask;
        // For controlled components, the value prop should ideally be changed by
        // the controlling component once we've called onChange with our updates.
        // If the change was triggered this way through user input, then the prop
        // given should match our internal state when unmasked. If what we're
        // given and what we have locally don't match, that means the controlling
        // component has made its own unrelated change, so we should update our
        // state and mask this new value.
        if (unmaskValue(fieldProps.value, mask) !== unmaskValue(this.state.value, mask)) {
          var value = maskValue(fieldProps.value || '', mask);
          this.setState({
            value: value
          });
        }
      }
    }
  }, {
    key: "field",
    value:
    /**
     * Get the child text field. Called as a method so that
     * updates to the field cause the mask to re-rfield() {
      return react.Children.only(this.props.children);
    }

    /**
     * To avoid a jarring experience for screen readers, we only
     * add/remove characters after the field has been blurred,
     * rather than when the user is typing in the field
     * @param {Object} evt
     * @param {React.Element} field - Child TextField
     */
  }, {
    key: "handleBlur",
    value: function handleBlur(evt, field) {
      var value = maskValue(evt.target.value, this.props.mask);

      // We only debounce the onBlur when we know for sure that
      // this component will re-render (AKA when the value changes)
      // and when an onBlur callback is present
      var debounce = value !== this.state.value && typeof field.props.onBlur === 'function';
      if (debounce) {
        // We need to retain a reference to the event after the callback
        // has been called. We pass this onto the consuming app's onBlur
        // only after the value has been manipulated – this way, the
        // value returned by event.target.value is the value after masking
        evt.persist();
        this.debouncedOnBlurEvent = evt;
      }
      this.setState({
        value: value
      });
      if (!debounce && typeof field.props.onBlur === 'function') {
        // If we didn't debounce the onBlur event, then we need to
        // call the onBlur callback from here
        field.props.onBlur(evt);
      }
    }

    /**
     * @param {Object} evt
     * @param {React.Element} field - Child TextField
     */
  }, {
    key: "handleChange",
    value: function handleChange(evt, field) {
      this.setState({
        value: evt.target.value
      });
      if (typeof field.props.onChange === 'function') {
        field.props.onChange(evt);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var mask = this.props.mask;
      var field = this.field();
      var modifiedTextField = /*#__PURE__*/react.cloneElement(field, {
        defaultValue: undefined,
        fieldClassName: classnames_default()(field.props.fieldClassName, "ds-c-field--".concat(mask)),
        onBlur: function onBlur(evt) {
    hange(evt) {
          return _this2.handleChange(evt, field);
        },
        value: this.state.value,
        type: 'text',
        inputMode: 'numeric',
        pattern: maskPattern[this.props.mask]
      });

      // UI overlayed on top of a field to support certain masks
      var maskOverlay = maskOverlayContent[mask] ? /*#__PURE__*/react.createElement("div", {
        className: "ds-c-field__before ds-c-field__before--".concat(mask)
      }, maskOverlayContent[mask]) : null;
      return /*#__PURE__*/react.createElement("div", {
        className: "ds-c-field-mask ds-c-field-mask--".concat(mask)
      }, maskOverlay, modifiedTextField);
    }
  }]);
  return Mask;
}(react.PureComponent);
/* harmony default export */ var TextField_Mask = (Mask);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/TextField/TextInput.js
var TextInput_excluded = ["ariaLabel", "errorId", "errorMessage", "errorPlacement", "fieldClassName", "inversed", "multiline", "numeric", "onCopyCapture", "pattern", "rows", "inputRef", "size", "type"];
function TextInput_extends() { TextInput_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TextInput_extends.apply(this, arguments); }
function TextInput_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TextInput_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TextInput_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



// TODO: We don't want to remove these until a breaking change in case anyone
// was referencing these types directly from this file.
/**
 * `<TextInput>` is an internal component used by `<TextField>`, which wraps it and handles shared form UI like labels, error messages, etc
 * `<TextInput>` is also exported for advanced design system use cases, where the internal component can be leveraged to build custom form components
 * As an internal component, it's subject to more breaking changes. Exercise caution using `<TextInput>` outside of those special cases
 */
var TextInput = function TextInput(props) {
  var ariaLabel = props.ariaLabel,
    errorId = props.errorId,
    errorMessage = props.errorMessage,
    errorPlacement = props.errorPlacement,
    fieldClassName = props.fieldClassName,
    inversed = props.inversed,
    multiline = props.multiline,
    numeric = props.numeric,
    onCopyCapture = props.onCopyCapture,
    pattern = props.pattern,
    rows = props.rows,
    inputRef = props.inputRef,
    size = props.size,
    type = props.type,
    inputProps = TextInput_objectWithoutProperties(props, TextInput_excluded);
  var classes = classnames_default()('ds-c-field', {
    'ds-c-field--error': errorMessage,
    'ds-c-field--inverse': inversed
  }, size && "ds-c-field--".concat(size), fieldClassName);
  var inputType = type;
  if (numeric) {
    inputType = 'text';
  } else if (multiline) {
    inputType = undefined;
  }
  var ComponentType = multiline ? 'textarea' : 'input';
  var numberRows = typeof rows === 'string' ? parseInt(rows) : rows;
  return /*#__PURE__*/react.createElement(ComponentType, TextInput_extends({
    className: classes,
    ref: inputRef,
    rows: multiline && numberRows ? numberRows : undefined,
    inputMode: numeric ? 'numeric' : undefined,
    pattern: numeric && !pattern ? '[0-9]*' : pattern,
    type: inputType
    // @ts-ignore: The ClipboardEventHandler for textareas and inputs are incompatible, and TS
    // is failing to infer which one is being used here based on ComponentType.
    ,
    onCopyCapture: onCopyCapture
    // This can be purposefully overwritten by an 'aria-invalid' defined in inputProps
    ,
    "aria-invalid": !!errorMessage
  }, inputProps, {
    "aria-label": ariaLabel || props['aria-label']
    // Link input to bottom placed error message
    // Use of the classNames function for this is confusing
    ,
    "aria-describedby": classnames_default()(props['aria-describedby'], errorPlacement === 'bottom' && errorMessage && errorId) || undefined
  }));
};
/* harmony default export */ var TextField_TextInput = (TextInput);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/TextField/TextField.js
function TextField_typeof(obj) { "@babel/helpers - typeof"; return TextField_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, TextField_typeof(obj); }
var TextField_excluded = ["mask", "labelMask"];
function TextField_extends() { TextField_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TextField_extends.apply(this, arguments); }
function TextField_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function TextField_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? TextField_ownKeys(Object(source), !0).forEach(function (key) { TextField_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : TextField_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function TextField_defineProperty(obj, key, value) { key = TextField_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function TextField_toPropertyKey(arg) { var key = TextField_toPrimitive(arg, "string"); return TextField_typeof(key) === "symbol" ? key : String(key); }
function TextField_toPrimitive(input, hint) { if (TextField_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (TextField_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function TextField_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TextField_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TextField_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/text-field/).
 */
var TextField = function TextField(props) {
  var mask = props.mask,
    labelMask = props.labelMask,
    textFieldProps = TextField_objectWithoutProperties(props, TextField_excluded);
  if (false) {}
  var _useFormLabel = useFormLabel(TextField_objectSpread(TextField_objectSpread({}, textFieldProps), {}, {
      labelComponent: 'label',
      wrapperIsFieldset: false,
      id: useId('text-field--', textFieldProps.id)
    })),
    labelProps = _useFormLabel.labelProps,
    fieldProps = _useFormLabel.fieldProps,
    wrapperProps = _useFormLabel.wrapperProps,
    bottomError = _useFormLabel.bottomError;
  wrapperProps.className = classnames_default()('ds-u-clearfix',
  // fixes issue where the label's margin is collapsed
  wrapperProps.className);
  var input = /*#__PURE__*/react.createElement(TextField_TextInput, TextField_extends({
    type: TextField.defaultProps.type // Appeases TypeScript
    ,
    inversed: props.inversed
  }, fieldProps));
  return /*#__PURE__*/react.createElement("div", wrapperProps, /*#__PURE__*/react.createElement(FormLabel_FormLabel, labelProps), mask && /*#__PURE__*/react.createElement(TextField_Mask, {
    mask: mask
  }, input), labelMask && /*#__PURE__*/react.createElement(TextField_LabelMask, {
    labelMask: labelMask
  }, input), !mask && !labelMask && input, bottomError);
};
TextField.defaultProps = {
  type: 'text'
};
/* harmony default export */ var TextField_TextField = (TextField);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/TextField/index.js




// EXTERNAL MODULE: ./node_modules/core-js/stable/object/assign.js
var object_assign = __webpack_require__(4977);
// EXTERNAL MODULE: ./node_modules/core-js/stable/array/find.js
var find = __webpack_require__(3200);
// EXTERNAL MODULE: ./node_modules/core-js/features/promise/index.js
var promise = __webpack_require__(3867);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  extends_extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return extends_extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(1721);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 * 
al || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/addClass.js

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass_addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass_removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ var config = ({
  disabled: false
});
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ var TransitionGroupContext = (react.createContext(null));
;// CONCATENATED MODULE: ./nar forceReflow = function forceReflow(node) {
  return node.scrollTop;
};
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$ComponentnitialStatus
    };
    _this.nextCallbac    return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }omponentDidMount() {
    this.up;
        }
      }
    }

    thit = function componentWil {
      exit: exit,
     D) {
      this.setState({.onEntered(maybeNode, may     _this3.props.onExited(maybe   this.nextCallback.cances.setNextCallback(callback);
ion () {
      active = falsemeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  fale the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ var esm_Transition = (Transition);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js











var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function Each(function (c) {
    return removeClass_removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      {
        _this.props.on        _this.props.onEn
        _this.props.his.props.onExit) {
    ops.onExiting) {
      props.onExited) {
        _thisNode` is actually `appearingme: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) forceReflow(node);
    }

    if (className) {
      this.appliedClasses[type][phase] = className;  if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/react.createElement(esm_Transition, extends_extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? 0 : {};
/* harmony default export */ var esm_CSSTransition = (CSSTransition);
// EXTERNAL MODULE: ./node_modules/focus-trap-react/dist/focus-trap-react.js
var focus_trap_react = __webpack_require__(4483);
var focus_trap_react_default = /*#__PURE__*/__webpack_require__.n(focus_trap_react);
;// CONCAnt ? ownerDocument.defaultView || window : window;
  }

  return node;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


function isElement(node) {
  var OwnElement = getWindow(node).Eletot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
;// C" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}
;// CONCATENATED rt() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
;// CONCATENATED MODULE:  + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}
;// CONCATENATED;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
;// CONCATENATED MOD scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
;// CONCATENATED dowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
;// CONCATEt) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
;// CONCATENATED MOprop-missing]
  element.document) || window.document).documentElement;
}
;// CONCATENATED MODULtDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
;// CONCATENATED tyle(element) {
  return getWindow(element).getComputedStyle(element);
}
;// CONCATENATEn /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
;// CONCATENATED MODULE: t) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
llTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to itst,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
;// CONCATENATEDTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
;// CONCATENATED MO{
    return node;
  }

  return getScrollParent(getParentNode(node));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements t here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
;// CONCATENATE) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
;// CONCATENATED MODULEon === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for 
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handl;
  }

  return offsetParent || getContainingBlock(element) || window;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = '  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var c.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/ord (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
;//   resolve(fn());
        });
      });
    }

    return pending;
  };
}
;// CONObject.keys(merged).map(function (key) {
    return merged[key];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js









var DEFAULT_OPTIONe);
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/(/* unused pure expression or super */ null && (popperGenerator())); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-diswindow.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var eventListe 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
;// on.js
function getVariation(placement) {
  return placement.split('-')[1];
}
;// CONCATENATEDacement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
;// CONCATent[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
;// CONCATEcts.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a v =te.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStylesebute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: applyStyles_effect,
  requires: ['computeStyles']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/libxdifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
 (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
;// CONCATENATE    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending out

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
;// C   } while (next);
    } // Give up, the result is false


  return false;
}
;// CONC.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
;// CONCATENATED MODULE: .ntrategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (ongParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum arpingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
;// CONCATt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
;// CONCATEObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
;// CONn (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
;// CONCATENATEDlows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/monue;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}
;// CONCATENATED MODUAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js






 pser, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
;t,idden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/CloseIconThin.js
function CloseIconThin_extends() { CloseIconThin_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CloseIconThin_extends.apply(this, arguments); }



var CloseIconThin_defaultProps = {
  className: '',
  viewBox: '-2 -2 18 18'
};
function CloseIconThin(props) {
  var iconCssClasses = "ds-c-icon--close ds-c-icon--close-thin ".concat(props.className || '');
  return /*#__PURE__*/react.createElement(SvgIcon, CloseIconThin_extends({
    title: t('icons.close')
  }, CloseIconThin_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M0 13.0332964L13.0332964 0M13.0332964 13.0332964L0 0"
  }));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/utilities/usePrevious.js


// storing a previous version of a prop for comparison
// similar to the old previousProps param from `componentDidUpdate`
var usePrevious = functct.useRef)();
  (0,react.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
};
/* harmony default export */ var utilities_usePrevious = (usePrevious);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Tooltip/Tooltip.js
function Tooltip_typeof(obj) { "@babel/helpers - typeof"; return Tooltip_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Tooltip_typeof(obj); }
var Tooltip_excluded = ["activeClassName", "ariaLabel", "children", "className", "component", "dialog", "id", "offset", "onClose", "onOpen", "inversed", "interactiveBorder", "placement", "maxWidth", "title", "transitionDuration", "zIndex", "showCloseButton", "closeButtonLabel", "contentHeading"];
function Tooltip_extends() { Tooltip_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Tooltip_extends.apply(this, arguments); }
function Tooltip_defineProperty(obj, key, value) { key = Tooltip_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Tooltip_toPropertyKey(arg) { var key = Tooltip_toPrimitive(arg, "string"); return Tooltip_typeof(key) === "symbol" ? key : String(key); }
function Tooltip_toPrimitive(input, hint) { if (Tooltip_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Tooltip_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Tooltip_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Tooltip_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Tooltip_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Tooltip_slicedToArray(arr, i) { return Tooltip_arrayWithHoles(arr) || Tooltip_iterableToArrayLimit(arr, i) || Tooltip_unsupportedIterableToArray(arr, i) || Tooltip_nonIterableRest(); }
function Tooltip_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Tooltip_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Tooltip_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tooltip_arrayLikeToArray(o, minLen); }
function Tooltip_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Tooltip_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Tooltip_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Polyfills required for IE11 compatibility
// Features used by app or its dependencies (i.e. @popperjs/core in Tooltip)



// TODO: Update react-transition-group once we update react peer dep









/**
 * Tooltips provide additional information upon hover, focus or click.
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/tooltip/).
 *
 * When using the `<TooltipIcon>` as the only child of `<Tooltip>`, be sure to
 * provide an `aria-label` on the `<Tooltip>` to ensure an accessible name for
 * the trigger.
 */
var Tooltip = function Tooltip(props) {
  var popper = (0,react.useRef)(null);
  var contentId = useId('tooltip-trigger--', props.id);
  var triggerElement = (0,react.useRef)(null);
  var tooltipElement = (0,react.useRef)(null);
  var setTriggerElement = function setTriggerElent = function setTooltipElement(elem) {
    tooltipElement.current = elem;
  };
  var _useState = (0,react.useState)(false),
    _useState2 = Tooltip_slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = Tooltip_slicedToArray(_useState3, 2),
    isHover = _useState4[0],
    setIsHover = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = Tooltip_slicedToArray(_useState5, 2),
    isMobile = _useState6[0],
    setIsMobile = _useState6[1];
  var prevActiveStateVar = utilities_usePrevious(active);
  var handleEscapeKey = function handleEscapeKey(event) {
    var ESCAPE_KEY = 27;
    if (active && event.keyCode === ESCAPE_KEY) {
      setActive(false);
    }
  };
  var handleClickOutside = function handleClickOutside(event) {
    if (active && (props.dialog || isMobile)) {
      var _triggerElement$curre, _tooltipElement$curre;
      var clickedTrigger = (_triggerElement$curre = triggerElement.current) === null || _triggerElement$curre === void 0 ? void 0 : _triggerElement$curre.contains(event.target);
      var clickedTooltip = (_tooltipElement$curre = tooltipElement.current) === null || _tooltipElement$curre === void 0 ? void 0 : _tooltipElement$curre.contains(event.target);
      if (!clickedTooltip && !clickedTrigger) {
        setActive(false);
      }
    }
  };
  var handleCloseButtonClick = function handleCloseButtonClick() {
    if (active && (props.dialog || isMobile)) {
      setActive(false);
    }
  };
  var handleBlur = function handleBlur(event) {
    setTimeout(function () {
      if (!isHover && event.currentTarget !== event.target) setActive(false);
    }, 10);
  };
  var handleTouch = function handleTouch() {
    // On mobile, touch -> mouseenter -> click events can all be fired simultaneously
    // `isMobile` flag is used inside onClick and onMouseEnter handlers, so touch events can be used in isolation on mobile
    // https://stackoverflow.com/a/65055198
    setIsMobile(true);
    setActive(!active);
  };
  (0,react.useEffect)(function () {
    if (!triggerElement.current || !tooltipElement.current) return;
    popper.current = popper_createPopper(triggerElement.current, tooltipElement.current, {
      placement: props.placement,
      modifiers: [{
        name: 'offset',
        oreturn function () {
      if (popper.current) popper.current.destroy();
    };
  }, []);
  (0,react.useEffect)(function () {
    document.addEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleClickOutside, handleEscapeKey]);
  (0,react.useEffect)(function () {
    if (active) {
      props.onOpen && props.onOpen();
    } else {
      props.onClose && props.onClose();

      // if tooltip goes from active to inactive and is the dialog version, focus the trigger
      if (prevActiveStateVar && (props.dialog || isMobile) && props.showCloseButton) {
        if (triggerElement && triggerElement.current) {
          triggerElement.current.focus();
        }
      }
    }
  }, [active]);
  (0,react.useLayoutEffect)(function () {
    if (popper.current) {
      popper.current.setOptions(props);
      popper.current.forceUpdate();
    }
  });
  var renderTrigger = function renderTrigger(props) {
    var _classNames;
    var activeClassName = props.activeClassName,
      ariaLabel = props.ariaLabel,
      children = props.children,
      className = props.className,
      component = props.component,
      dialog = props.dialog,
      id = props.id,
      offset = props.offset,
      onClose = props.onClose,
      onOpen = props.onOpen,
      inversed = props.inversed,
      interactiveBorder = props.interactiveBorder,
      placement = props.placement,
      maxWidth = props.maxWidth,
      title = props.title,
      transitionDuration = props.transitionDuration,
      zIndex = props.zIndex,
      showCloseButton = props.showCloseButton,
      closeButtonLabel = props.closeButtonLabel,
      contentHeading = props.contentHeading,
      others = Tooltip_objectWithoutProperties(props, Tooltip_excluded);
    var TriggerComponent = component;
    var triggerClasses = classnames_default()('ds-c-tooltip__trigger', className, (_classNames = {}, Tooltip_defineProperty(_classNames, activeClassName, activeClassName && active), Tooltip_defineProperty(_classNames, 'ds-c-tooltip__trigger--inverse', inversed), _classNames));
    var linkTriggerOverrides = {
      tabIndex: TriggerComponent === 'a' ? 0 : undefined
    };
    var eventHandlers = dialog ? {
      onTouchStart: function onTouchStart() {
        return handleTouch();
      },
      onClick: function onClick() {
        if (!isMobile) { onTouchStart: function onTouchStart() {
        return handleTouch();
      },
      onClick: function onClick() {
        if (!isMobile) {
          setActive(!active);
        }
      },
      onFocus: function onFocus() {
        return setActive(true);
      },
      onBlur: function onBlur(event) {
        return handleBlur(event);
      }
    };
    return /*#__PURE__*/react.createElement(TriggerComponent, Tooltip_extends({
      type: TriggerComponent === 'button' ? 'button' : undefined,
      "aria-label": ariaLabel || undefined,
      "aria-describedby": dialog ? undefined : contentId,
      className: triggerClasses,
      ref: setTriggerElement
    }, others, linkTriggerOverrides, eventHandlers), children);
  };
  var renderContent = function renderContent(props) {
    var closeButtonLabel = props.closeButtonLabel,
      dialog = props.dialog,
      contentHeading = props.contentHeading,
      inversed = props.inversed,
      interactiveBorder = props.interactiveBorder,
      placement = props.placement,
      maxWidth = props.maxWidth,
      showCloseButton = props.showCloseButton,
      title = props.title,
      transitionDuration = props.transitionDuration,
      zIndex = props.zIndex;
    var tooltipStyle = {
      maxWidth: maxWidth,
      zIndex: zIndex
    };
    var interactiveBorderStyle = {
      left: "-".concat(interactiveBorder, "px"),
      top: "-".concat(interactiveBorder, "px"),
      border: "".concat(interactiveBorder, "px solid transparent"),
      zIndex: -999 // ensures interactive border doesnt cover    onBlur: function onBlur(event) {
        return handleBlur(event);
      }
    };
    var tooltipContent = /*#__PURE__*/react.createElement("div", Tooltip_extends({
      id: contentId,
      tabIndex: dialog ? -1 : null,
      ref: setTooltipElement,
      className: classnames_default()('ds-c-tooltip', {
        'ds-c-tooltip--inverse': inversed
      }),
      style: tooltipStyle,
      "data-placement": placement,
      "aria-hidden": !active,
      role: dialog ? 'dialog' : 'tooltip'
    }, eventHandlers), /*#__PURE__*/react.createElement("span", {
      className: "ds-c-tooltip__arrow",
      "data-popper-arrow": true
    }), /*#__PURE__*/react.createElement("div", {
      className: "ds-c-tooltip__content"
    }, contentHeading || showCloseButton ? /*#__PURE__*/react.createElement("div", {
      className: classnames_default()('ds-c-tooltip__header', {
        'ds-c-tooltip__header--right': !contentHeading
      })
    }, contentHeading, showCloseButton && /*#__PURE__*/react.createElement(Button, {
      variation: "ghost",
      size: "small",
      className: "ds-c-tooltip__close-button",
      onClick: handleCloseButtonClick,
      "aria-label": closeButtonLabel || 'Close'
    }, /*#__PURE__*/react.createElement(CloseIconThin, null))) : null, title), !dialog && /*#__PURE__*/react.createElement("span", {
      className: "ds-c-tooltip__interactive-border",
      style: interactiveBorderStyle
    }));
    return /*#__PURE__*/react.createElement(esm_CSSTransition, {
      in: active,
      classNames: "ds-c-tooltip",
      timeout: transitionDuration
    }, dialog ? /*#__PURE__*/react.createElement((focus_trap_react_defaul return document.getEle() {
          return document.getElementById("".concat(contentId));
        },
        clickOutsideDeactivates: true
      }
    }, tooltipContent) : tooltipContent);
  };
  var mainEventHandlers = props.dialog ? {} : {
    onMouseEnter: function onMouseEnter() {
      if (!isMobile) {
        setIsHover(true);
        setActive(true);
      }
    },
    onMouseLeave: function onMouseLeave() {
      if (!isMobile) {
        setIsHover(false);
        setActive(false);
      }
    }
  };
  return /*#__PURE__*/react.createElement("div", Tooltip_extends({
    className: "ds-c-tooltip__container"
  }, mainEventHandlers), renderTrigger(props), renderContent(props));
};
Tooltip.defaultProps = {
  component: 'button',
  interactiveBorder: 15,
  maxWidth: '300px',
  offset: [0, 5],
  placement: 'top',
  transitionDuration: 250,
  // Equivalent to $animation-speed-1
  zIndex: 9999
};
/* harmony default export */ var Tooltip_Tooltip = (Tooltip);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Tooltip/index.js


;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/VerticalNav/VerticalNavItemLabel.js
function VerticalNavItemLabel_extends() { VerticalNavItemLabel_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return VerticalNavItemLabel_extends.apply(this, arguments); }




var DEFAULT_COMPONENT_TYPE = 'div';
var VerticalNavItemLabel = function VerticalNavItemLabel(props) {
  /**
   * The type of element rendered ultimately depends on whether
   * this is meant to be a subnav toggle, link, or generic label
   * @return {String} The type of HTML tag
   */
  var componentType = function componentType() {
    if (props.hasSubnav) {
      return 'button';
    } else if (props.component) {
      return props.component;
    } else if (props.url) {
      return 'a';
    }
    return DEFAULT_COr handleClick = function handleClick(evt) {
    return props.onClick(evt);
  };
  var commonProps = {
    className: classnames_default()('ds-c-vertical-nav__label', {
      'ds-c-vertical-nav__label--current': props.selected,
      'ds-c-vertical-nav__label--parent': props.hasSubnav
    }),
    onClick: props.onClick ? handleClick : undefined
  };
  var otherProps;
  if (LabelComponent === 'button') {
    var _props$ariaCollapsedS, _props$ariaExpandedSt;
    var collapsedLabel = (_props$ariaCollapsedS = props.ariaCollapsedStateButtonLabel) !== null && _props$ariaCollapsedS !== void 0 ? _props$ariaCollapsedS : t('verticalNav.expand');
    var expandedLabel = (_props$ariaExpandedSt = props.ariaExpandedStateButtonLabel) !== null && _props$ariaExpandedSt !== void 0 ? _props$ariaExpandedSt : t('verticalNav.collapse');
    otherProps = {
      'aria-controls': props.subnavId,
      'aria-expanded': !props.collapsed,
      title: props.collapsed ? collapsedLabel : expandedLabel
    };
  } else if (LabelComponent !== DEFAULT_COMPONENT_TYPE) {
    // Apply href if <a> or custom component type
    otherProps = {
      'aria-current': props.selected,
      href: props.url
    };
  }
  return /*#__PURE__*/react.createElement(LabelComponent, VerticalNavItemLabel_extends({}, commonProps, otherProps), props.label, props.hasSubnav && /*#__PURE__*/react.createElement(ArrowIcon, {
    direction: props.collapsed ? 'down' : 'up'
  }));
};
/* harmony default export */ var VerticalNav_VerticalNavItemLabel = (VerticalNavItemLabel);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/VerticalNav/VerticalNavItem.js
function VerticalNavItem_slicedToArray(arr, i) { return VerticalNavItem_arrayWithHoles(arr) || VerticalNavItem_iterableToArrayLimit(arr, i) || VerticalNavItem_unsupportedIterableToArray(arr, i) || VerticalNavItem_nonIterableRest(); }
function VerticalNavItem_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function VerticalNavItem_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return VerticalNavItem_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return VerticalNavItem_arrayLikeToArray(o, minLen); }
function VerticalNavItem_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function VerticalNavItem_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function VerticalNavItem_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var VerticalNavItem = function VerticalNavItem(props) {
  var rootId = useId('vertical-nav-item--', props.id);
  var subnavId = "".concat(rootId, "__subnav");
  var _useState = (0,react.useState)(props.defaultCollapsed),
    _useState2 = VerticalNavItem_slicedToArray(_useState, 2),
    collapsed = _useState2[0],
    setCollapsed = _useState2[1];

  /**
   * Note: This event handler will only get called when the VerticalNavItemLabel
   * is a link or plain text
   */
  var handleClick = function handleClick(evt) {
    if (props.onClick) {
      props.onClick(evt, rootId, props.url);
    }
  };
  var handleToggleClick = function handleToggleClick() {
    setCollapsed(!collapsed);
    if (props.onSubnavToggle)n hasSubnav() {
    return Boolean(props.items && props.items.length > 0);
  };

  /**
   * Called when VerticalNavItemLabel is clicked. Since the "label" could be
   * a link, subnav toggle button, or plain text, we use this method to
   * determine what action to take and which event to actually fire.
   * @param {Object} SyntheticEvent
   */
  var handleLabelClick = function handleLabelClick(evt) {
    if (hasSubnav()) {
      return handleToggleClick();
    }
    return handleClick(evt);
  };

  /**
   * Checks if a descendant is selected
   * @param {Array} children - The nested items
   * @return {Boolean}
   */
  var childIsSelected = function childIsSelected(children) {
    if (children && children.length) {
      return children.some(function (child) {
        return child.id === props._selectedId || childIsSelected(child.items);
      });
    }
    return false;
  };

  /**
   * Check if this item is selected or if it is a parent of a selected item
   * @return {Boolean}
   */
  var isSelected = function isSelected() {
    if (props.selected) return props.selected;
    if (props._selectedId && hasSubnav()) {
      return childIsSelected(props.items);
    }
    return false;
  };
  var subnavItems = function subnavItems() {
    if (props.url) {
      // Since the VerticalNavItemLabel will just toggle the subnav, we
      // add a link to the top of the subnav for this item. Otherwise there
      // wouldn't be a way to actually visit its URL
      var item = Object.assign({}, props);
      delete item.items;
      return [item].concat(props.items);
    }
    return props.items;
  };
  var classes = classnames_default()('ds-c-vertical-nav__item', props.className);
  return /*#__PURE__*/react.createElement("li", {
    className: classes
  }, /*#__PURE__*/react.createElement(VerticalNav_VerticalNavItemLabel, {
    ariaCollapsedStateButtonLabel: props.ariaCollapsedStateButtonLabel,
    ariaExpandedStateButtonLabel: props.ariaExpandedStateButtonLabel,
    collapsed: collapsed,
    component: props.component,
    label: props.label,
    hasSubnav: hasSubnav(),
    onClick: handleLabelClick,
    selected: isSelected(),
    subnavId: subnavId,
    url: props.url
  }), hasSubnav() && /*#__PURE__*/react.createElement(VerticalNav_VerticalNav, {
    selectedId: props._selectedId,
    collapsed: collapsed,
    id: subnavId,
    items: subnavItems(),
    component: props.component,
    nested: true
  }));
};
VerticalNavItem.defaultProps = {
  // Unfortunately, we're defining these default ARIA props here and in
  // VerticalNavItemLabel. We define them here so they show in the docs.
  // TODO(sawyer): Update react-docgen so we don't have to do this
  ariaCollapsedStateButtonLabel: 'Expand sub-navigation',
  ariaExpandedStateButtonLabel: 'Collapse sub-navigation',
  defaultCollapsed: false
};
/* harmony default export */ var VerticalNav_VerticalNavItem = (VerticalNavItem);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/VerticalNav/VerticalNav.js
function VerticalNav_extends() { VerticalNav_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return VerticalNav_extends.apply(this, arguments); }



/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/vertical-navigation/).
 */
var VerticalNav = function VerticalNav(props) {
  var classes = classnames_default()({
    'ds-c-vertical-nav': !props.nested,
    'ds-c-vertical-nav__subnav': props.nested,
    'ds-c-vertical-nav--collapsed': props.collapsed
  }, props.className);
  var navProps = props.ariaNavLabel ? {
    'aria-label': props.ariaNavLabel
  } : {};
  var navList = /*#__PURE__*/react.createElement("ul", {
    role: "list",
    className: classes,
    id: props.id
  }, props.items.map(function (item) {
    var onClick = item.onClick || props.onLinkClick;
    if (!onClick) {
      onClick = undefined;
    }
    var selected = item.selected || props.selectedId && props.selectedId === item.id;
    return /*#__PURE__*/react.createElement(VerticalNav_VerticalNavItem, VerticalNav_extends({}, item, {
      component: props.component || item.component,
      _selectedId: props.selectedId,
      key: item.id + item.url + item.label,
      onClick: onClick,
      selected: selected
    }));
  }));
  return props.nested ? navList : /*#__PURE__*/react.createElement("nav", navProps, navList);
};
VerticalNav.defaultProps = {
  collapsed: false
};
/* harmony default export */ var VerticalNav_VerticalNav = (VerticalNav);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/VerticalNav/index.js

;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/index.js































;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/index.js


































;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/MinusCircleIcon.js
function MinusCircleIcon_extends() { MinusCircleIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MinusCircleIcon_extends.apply(this, arguments); }




var MinusCircleIcon_defaultProps = {
  className: '',
  viewBox: '0 0 20 20'
};
function MinusCircleIcon(props) {
  var iconCssClasses = classnames_default()('ds-c-icon--minus-circle', props.className);
  return /*#__PURE__*/react.createElement(SvgIcon, MinusCircleIcon_extends({
    title: t('icons.remove')
  }, MinusCircleIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(-47.000000, -360.000000)"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(49.000000, 362.000000)"
  }, /*#__PURE__*/react.createElement("circle", {
    className: "ds-c-icon--minus-circle__circle",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "#FFFFFF",
    cx: "8",
    cy: "8",
    r: "9"
  }), /*#__PURE__*/react.createElement("g", {
    className: "ds-c-icon--minus-circle__group",
    transform: "translate(2.823529, 7.223529)",
    fill: "currentColor"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M5.17647059,-4.4 C5.60530345,-4.4 5.95294118,-4.05236228 5.95294118,-3.62352941 L5.95294118,5.17647059 C5.95294118,5.60530345 5.60530345,5.95294118 5.17647059,5.95294118 C4.74763772,5.95294118 4.4,5.60530345 4.4,5.17647059 L4.4,0.132872909 L4.4,-3.62352941 C4.4,-4.05236228 4.74763772,-4.4 5.17647059,-4.4 Z",
    transform: "translate(5.176471, 0.776471) rotate(-270.000000) translate(-5.176471, -0.776471) "
  }))))));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/PlusCircleIcon.js
function PlusCircleIcon_extends() { PlusCircleIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PlusCircleIcon_extends.apply(this, arguments); }




var PlusCircleIcon_defaultProps = {
  className: '',
  viewBox: '0 0 20 20'
};
function PlusCircleIcon(props) {
  var iconCssClasses = classnames_default()('ds-c-icon--plus-circle', props.className);
  return /*#__PURE__*/react.createElement(SvgIcon, PlusCircleIcon_extends({
    title: t('icons.add')
  }, PlusCircleIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(-47.000000, -360.000000)"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(49.000000, 362.000000)"
  }, /*#__PURE__*/react.createElement("circle", {
    className: "ds-c-icon--plus-circle__circle",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "#FFFFFF",
    cx: "8",
    cy: "8",
    r: "9"
  }), /*#__PURE__*/react.createElement("g", {
    className: "ds-c-icon--plus-circle__group",
    transform: "translate(2.823529, 2.823529)",
    fill: "currentColor"
  }, /*#__PURE__*/react.createElement("rect", {
    x: "4.4",
    y: "0",
    width: "1.55294118",
    height: "10.3529412",
    rx: "0.776470588"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M5.17647059,-4.70734562e-14 C5.60530345,-4.71522316e-14 5.95294118,0.347637724 5.95294118,0.776470588 L5.95294118,9.57647059 C5.95294118,10.0053035 5.60530345,10.3529412 5.17647059,10.3529412 C4.74763772,10.3529412 4.4,10.0053035 4.4,9.57647059 L4.4,4.53287291 L4.4,0.776470588 C4.4,0.347637724 4.74763772,-4.69946809e-14 5.17647059,-4.70734562e-14 Z",
    transform: "translate(5.176471, 5.176471) rotate(-270.000000) translate(-5.176471, -5.176471) "
  }))))));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Accordion/AccordionItem.js
function AccordionItem_typeof(obj) { "@babel/helpers - typeof"; return AccordionItem_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AccordionItem_typeof(obj); }
function AccordionItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function AccordionItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AccordionItem_ownKeys(Object(source), !0).forEach(function (key) { AccordionItem_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AccordionItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function AccordionItem_defineProperty(obj, key, value) { key = AccordionItem_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function AccordionItem_toPropertyKey(arg) { var key = AccordionItem_toPrimitive(arg, "string"); return AccordionItem_typeof(key) === "symbol" ? key : String(key); }
function AccordionItem_toPrimitive(input, hint) { if (AccordionItem_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (AccordionItem_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

Accordion_AccordionItem.defaultProps = AccordionItem_objectSpread(AccordionItem_objectSpread({}, Accordion_AccordionItem.defaultProps), {}, {
  closeIconComponent: MinusCircleIcon,
  openIconComponent: PlusCircleIcon
});
/* harmony default export */ var esm_Accordion_AccordionItem = ((/* unused pure expression or super */ null && (AccordionItem)));
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Accordion/index.js


;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/PrivacySettingsDialog/PrivacySettingsTable.js




var PrivacySettingsTable = function PrivacySettingsTable(_ref) {
  var domain = _ref.domain,
    privacySettings = _ref.privacySettings,
    setPrivacySetting = _ref.setPrivacySetting;
  function renderToggle(settingsKey, value, category, description) {
    var choices = [{
      label: t('privacy.allow'),
      value: '0',
      checked: value === '0'
    }, {
      label: t('privacy.dontAllow'),
      value: '1',
      checked: value === '1'
    }];
    var label = /*#__PURE__*/react.createElement("span", {
      className: "ds-u-visibility--screen-reader"
    }, category);
    return /*#__PURE__*/react.createElement(ChoiceLe(event) {
        setPrivacySetting(settingsKey, event.target.value);
      },
      className: "ds-u-margin-top--0",
      label: label,
      "aria-label": description,
      name: "cookie-".concat(settingsKey)
    });
  }
  var categoryHeaderId = 'privacy-settings-header-category';
  var descriptionHeaderId = 'privacy-settings-header-description';
  var statusHeaderId = 'privacy-settings-header-status';
  function renderRow(_ref2) {
    var settingsKey = _ref2.settingsKey,
      translationKey = _ref2.translationKey,
      value = _ref2.value;
    var category = t("privacy.".concat(translationKey, ".category"));
    var description = t("privacy.".concat(translationKey, ".description"), {
      domain: domain
    });
    return /*#__PURE__*/react.createElement(Table_TableRow, {
      key: settingsKey
    }, /*#__PURE__*/react.createElement(Table_TableCell, {
      headers: categoryHeaderId,
      stackedTitle: t('privacy.category')
    }, category), /*#__PURE__*/react.createElement(Table_TableCell, {
      headers: descriptionHeaderId,
      stackedTitle: t('privacy.description')
    }, description), /*#__PURE__*/react.createElement(Table_TableCell, {
      headers: statusHeaderId,
      stackedTitle: t('privacy.status')
    }, renderToggle(settingsKey, value, category, description)));
  }
  return /*#__PURE__*/react.createElement(Table_Table, {
    className: "ds-c-privacy-settings-table ds-u-margin-top--2 ds-u-lg-margin--0",
    borderless: true,
    stackable: true,
    stackableBreakpoint: "md"
  }, /*#__PURE__*/react.createElement(Table_TableHead, null, /*#__PURE__*/react.createElement(Table_TableRow, null, /*#__PURE__*/react.createElement(Table_TableCell, {
    id: categoryHeaderId
  }, t('privacy.category')), /*#__PURE__*/react.createElement(Table_TableCell, {
    id: descriptionHeaderId
  }, t('privacy.description')), /*#__PURE__*/react.createElement(Table_TableCell, {
    id: statusHeaderId
  }, t('privacy.status')))), /*#__PURE__*/react.createElement(Table_TableBody, null, privacySettings.map(renderRow)));
};
/* harmony default export */ var PrivacySettingsDialog_PrivacySettingsTable = (PrivacySettingsTable);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/PrivacySettingsDialog/privacySettings.js
function privacySettings_slicedToArray(arr, i) { return privacySettings_arrayWithHoles(arr) || privacySettings_iterableToArrayLimit(arr, i) || privacySettings_unsupportedIterableToArray(arr, i) || privacySettings_nonIterableRest(); }
function privacySettings_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function privacySettings_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return privacySettings_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return privacySettings_arrayLikeToArray(o, minLen); }
function privacySettings_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function privacySettings_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function privacySettings_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var COOKIE_KEY = 'OPTOUTMULTI';
var COOKIE_MAX_AGE = 365 * 3; // 3 years
var COOKIE_DOMAIN = getCookieDomain();

/**
 * Returns a string for the cookie's domain that will work for all subdomains
 * of the current domain (e.g. "healthcare.gov") unless we're not on a .gov
 * site right now.
 */
function getCookieDomain() {
  if (typeof window === 'undefined') {
    return;
  }
  var parts = window.location.hostname.split('.');
  // Starting from the end and working back means that this logic will now support
  // any number of subdomains in the hostname (including zero).
  var tld = parts[parts.length - 1]; // Last item
  var domain = parts[parts.length - 2]; // Second to last item

  if (domain && tld === 'gov') {
    // From MDN:
    //   Contrary to earlier specifications, leading dots in domain names are ignored,
    //   but browsers may decline to set the cookie containing such dots.
    return "".concat(domain, ".").concat(tld);
  }
}
function readCookie(name) {
  if (typeof document cookie.split(';').map(function (item) {
    return item.trim().split('=');
  }).find(function (_ref) {
    var _ref2 = privacySettings_slicedToArray(_ref, 1),
      itemName = _ref2[0];
    return itemName === name;
  });
  var value = item === null || item === void 0 ? void 0 : item[1];
  if (typeof value === 'string') {
    return decodeURI(value);
  }
}
function writeCookie(name, value) {
  if (typeof document === 'undefined') {
    return;
  }

  // See https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
  var base = "".concat(name, "=").concat(encodeURI(value));
  var age = "; max-age=".concat(COOKIE_MAX_AGE);
  var domain = COOKIE_DOMAIN ? "; domain=".concat(COOKIE_DOMAIN) : '';
  var path = '; path=/'; // Should apply to any path on the site

  document.cookie = "".concat(base).concat(age).concat(domain).concat(path);
}
function getPrivacySettings() {
  var cookieString = readCookie(COOKIE_KEY);
  if (!cookieString && COOKIE_DOMAIN) {
    throw new Error("Privacy settings error: ".concat(COOKIE_KEY, " is not set. Check to make sure your app has Tealium enabled."));
  }
  var pairs = cookieString.split('|');
  var settings = pairs.reduce(function (obj, pair) {
    var _pair$split = pair.split(':'),
      _pair$split2 = privacySettings_slicedToArray(_pair$split, 2),
      key = _pair$split2[0],
      value = _pair$split2[1];
    obj[key] = value;
    return obj;
  }, {});
  return settings;
}
functionmap(function (key) {
    return "".concat(key, ":").concat(settings[key]);
  }).join('|');
  writeCookie(COOKIE_KEY, cookieString);
}

// Set a default if we're not on a .gov environment
if (!COOKIE_DOMAIN && !readCookie(COOKIE_KEY)) {
  setPrivacySettings({
    0: '0',
    c3: '0',
    c2: '0',
    c1: '0',
    c4: '0'
  });
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/PrivacySettingsDialog/PrivacySettingsDialog.js
function PrivacySettingsDialog_typeof(obj) { "@babel/helpers - typeof"; return PrivacySettingsDialog_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PrivacySettingsDialog_typeof(obj); }
var PrivacySettingsDialog_excluded = ["domain", "privacyPolicyUrl", "thirdPartyPoliciesUrl"];
function PrivacySettingsDialog_extends() { PrivacySettingsDialog_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } reded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function PrivacySettingsDialog_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(a primitive value."); } return (hint === "string" ? String : Number)(input); }
function PrivacySettingsDialog_slicedToArray(arr, i) { return PrivacySettingsDialog_arrayWithHoles(arr) || PrivacySettingsDialog_iterableToArrayLimit(arr, i) || PrivacySettingsDialog_unsupportedIterableToArray(arr, i) || PrivacySettingsDialog_nonIterableRest(); }
function PrivacySettingsDialog_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PrivacySettingsDialog_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PrivacySettingsDialog_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PrivacySettingsDialog_arrayLikeToArray(o, minLen); }
function PrivacySettingsDialog_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function PrivacySettingsDialog_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function PrivacySettingsDialog_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var privacySettingConfigs = [{
  settingsKey: 'c3',
  translationKey: 'advertising'
}, {
  settingsKey: 'c4',
  translationKey: 'socialMedia'
}, {
  settingsKey: 'c2',
  translationKey: 'webAnalytics'
}];
/**
 * The PrivacySettingsDialog allows users to adjust their privacy settings.
 * Typically these settings are accessed from a button in the footer of a CMS
 * website. Props allow for customizing on a per-domain basis.
 */
var PrivacySettingsDialog = function PrivacySettingsDialog(props) {
  var _useState = (0,react.useState)(getPrivacySettings()),
    _useState2 = PrivacySettingsDialog_slicedToArray(_useState, 2),
    localPrivacySettings = _useState2[0],
    setLocalPrivacySettings = _useState2[1];
  function setPrivacySetting(settingsKey, value) {
    setLocalPrivacySettings(PrivacySettingsDialog_objectSpread(PrivacySettingsDialog_objectSpread({}, localPrivacySettings), {}, PrivacySettingsDialog_defineProperty({}, settingsKey, value)));
  }
  function savePrivacySettings() {
    setPrivacySettings(localPrivacySettings);
    props.onExit();
  }
  var domain = props.domain,
    privacyPolicyUrl = props.privacyPolicyUrl,
    thirdPartyPoliciesUrl = props.thirdPartyPoliciesUrl,
    dialogProps = PrivacySettingsDialog_objectWithoutProperties(props, PrivacySettingnfig), {}, {
      value: localPrivacySettings[config.settingsKey]
    });
  });
  var intro = t('privacy.introText', {
    domain: domain
  });
  intro += ' ' + t('privacy.privacyPolicy', {
    url: privacyPolicyUrl
  });
  if (thirdPartyPoliciesUrl) {
    intro += ' ' + t('privacy.thirdPartyPolicies', {
      url: thirdPartyPoliciesUrl
    });
  }
  intro += '.';
  return /*#__PURE__*/react.createElement(Dialog, PrivacySettingsDialog_extends({}, dialogProps, {
    heading: t('privacy.dialogTitle', {
      domain: domain
    }),
    size: "full",
    actions: /*#__PURE__*/react.createElement(Button, {
      variation: "solid",
      onClick: savePrivacySettings
    }, t('privacy.save'))
  }), /*#__PURE__*/react.createElement("p", {
    className: "ds-u-margin-top--0",
    dangerouslySetInnerHTML: {
      __html: intro
    }
  }), /*#__PURE__*/react.createElement(PrivacySettingsDialog_PrivacySettingsTable, {
    domain: domain,
    privacySettings: privacySettingsProperties,
    setPrivacySetting: setPrivacySetting
  }));
};
/* harmony default export */ var PrivacySettingsDialog_PrivacySettingsDialog = ((/* unused pure expression or super */ null && (PrivacySettingsDialog)));
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/locale/en.json
var esm_locale_en_namespaceObject = JSON.parse('{"footer":{"contactUs":"Contact us","archive":"Archive","a11y":"Accessibility","privacyPolicy":"Privacy policy","privacySettings":"Privacy settings","usingThisSite":"Using this site","disclaimer":"An official website of the U.S. Centers for Medicare &amp; Medicaid Services."},"header":{"close":"Close","closeMenu":"Close menu","deBrokerNameFallback":"the enrollment partner","deConsumerMessage":"Be sure to finish your application before you return to {{brokerName}}\'s website.","español":"Español","langAriaLabel":"CuidadoDeSalud.gov en Español","login":"Log in","logout":"Log out","menu":"Menu","myApplicationsAndCoverage":"My applications & coverage","myProfile":"My profile","openMenu":"Open menu","skipNav":"Skip to main content"}}');
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/locale/es.json
var esm_locale_es_namespaceObject = JSON.parse('{"footer":{"contactUs":"Contáctenos","archive":"Archivo","a11y":"Accesibilidad","privacyPolicy":"Política de privacidad","privacySettings":"Configuración de privacidad","usingThisSite":"Usando este sitio","disclaimer":"Un sitio oficial de los Centros de Servicios de Medicare y Medicaid de EE.UU."},"header":{"close":"Cerca","closeMenu":"Cerrar menú","deBrokerNameFallback":"el socio de inscripción","deConsumerMessage":"Asegúrese de terminar su solicitud antes de regresar a la página web de {{brokerName}}","english":"English","langAriaLabel":"Healthcare.gov in English","login":"Iniciar sesión","logout":"Finalizar sesión","menu":"Menú","myApplicationsAndCoverage":"Mis solicitudes & cobertura","myProfile":"Mi perfil","openMenu":"Abrir menú","skipNav":"Ir al contenido principal"}}');
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/i18n.js
/**
 * @file Adds translations to core translation module and exports the i18n-
 * related functions. We want components in this child design system that use
 * translation to import their translation functions from this module so we
 * get the side-effects of adding our package-specific translations. It's not
 * the cleanest way to do things, probably, but it's compatible with unit
 * tests and Storybook, which expect each component to get everything it
 * needs from its imports.
 */



addTranslations('en', esm_locale_en_namespaceObject);
addTranslations('es', esm_locale_es_namespaceObject);

;// CONCATENATED MODULE: ./no} }
function PrivacySettingsLink_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var PrivacySettingsLink = function PrivacySettingsLink(props) {
  var _useState = (0,react.useState)(false),
    _useState2 = PrivacySettingsLink_slicedToArray(_useState, 2),
    showDialog = _useState2[0],
    setShowDialog = _useState2[1];
  var t = tWithLanguage();
  var orue);
  };
  var closeDialog = function closeDialog() {
    return setShowDialog(false);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("button", {
    className: props.className,
    onClick: openDialog
  }, props.children || t('footer.privacySettings')), showDialog && /*#__PURE__*/react.createElement(PrivacySettingsDialog, {
    onExit: closeDialog,
    domain: "HealthCare.gov",
    privacyPolicyUrl: "https://www.healthcare.gov/privacy/",
    thirdPartyPoliciesUrl: "https://www.healthcare.gov/third-party-privacy-policies/"
  }));
};
/* harmony default export */ var Footer_PrivacySettingsLink = (PrivacySettingsLink);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Footer/languages.js
var languages = {
  zh: {
    label: '中文',
    href: '/language-resource/#chinese'
  },
  ht: {
    label: 'Kreyòl',
    href: '/language-resource/#creole'
  },
  fr: {
    label: 'Français',
    href: '/language-resource/#french'
  },
  de: {
    label: 'Deutsch',
    href: '/language-resource/#german'
  },
  gu: {
    label: 'ગુજરાતી',
    href: '/language-resource/#gujarati'
  },
  hi: {
    label: 'हिंदी',
    href: '/language-resource/#hindi'
  },
  it: {
    label: 'Italiano',
    href: '/language-resource/#italian'
  },
  ja: {
    label: '日本語',
    href: '/language-resource/#japanese'
  },
  ko: {
    label: '한국어',
    href: '/language-resource/#korean'
  },
  pl: {
    label: 'Polski',
    href: '/language-resource/#polish'
  },
  pt: {
    label: 'Português',
    href: '/language-resource/#portuguese'
  },
  ru: {
    label: 'Русский',
    href: '/language-resource/#russian'
  },
  es: {
    label: 'Español',
    href: '/language-resource/#spanish'
  },
  tl: {
    label: 'Tagalog',
    href: '/language-resource/#tagalog'
  },
  vi: {
    label: 'tiếng việt',
    href: '/language-resource/#vietnamese'
  }
};
/* harmony default export */ var Footer_languages = (languages);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Footer/InlineLinkLists.js



var inlineLiClasses = 'hc-c-footer__inline-item';

/**
 * Create <li> nodes and inline links
 */
var renderBasicList = function renderBasicList(t, links) {
  return Object.getOwnPropertyNames(links).map(function (key, index) {
    var link = typeof links[key] === 'string' ? /*#__PURE__*/react.createElement("a", {
      href: links[key]
    }, t(key)) : links[key];
    return /*#__PURE__*/react.createElement("li", {
      key: key,
      className: inlineLiClasses
    }, link, index !== Object.getOwnPropertyNames(links).length - 1 ? /*#__PURE__*/react.createElement("span", {
      "aria-hidden": "true",
      className: "hc-c-footer__delimiter"
    }) : null);
  });
};

/**
 * Inline link lists are always rendered in the footer, no matter
 * what type of page a user is looking at. It includes required
 * links, like the Privacy Policy, and other helpful things like
 * links to a variety of different languages.
 */
var InlineLinkLists = function InlineLinkLists(props) {
  var primaryDomain = props.primaryDomain;
  var inlineLinksTop = {
    'footer.contactUs': "".concat(primaryDomain, "/contact-us"),
    'footer.archive': "".concat(primaryDomain, "/archive"),
    'footer.a11y': 'http://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/CMSNondiscriminationNotice.html',
    'footer.privacySettings': /*#__PURE__*/react.createElement(Footer_PrivacySettingsLink, null),
    'footer.privacyPolicy': "".concat(primaryDomain, "/privacy"),
    'footer.usingThisSite': "".concat(primaryDomain, "/using-this-site")
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "ds-l-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hc-c-footer__site-links-row"
  }, /*#__PURE__*/react.createElement("ul", {
    role: "list",
    className: "hc-c-footer__list"
  }, renderBasicList(props.t, inlineLinksTop))), /*#__PURE__*/react.createElement("div", {
    className: "hc-c-footer__language-resource-links-row"
  }, /*#__PURE__*/react.createElement("h4", {
    id: "hc-c-footer__language-resources",
    className: "ds-u-visibility--screen-reader"
  }, "Language resources"), /*#__PURE__*/react.createElement("ul", {
    role: "list",
    "aria-labelledby": "hc-c-footer__language-resources",
    className: "hc-c-footer__list"
  }, Object.getOwnPropertyNames(Footer_languages).map(function (lang, index) {
    return /*#__PURE__*/react.createElement("li", {
      key: lang,
      className: inlineLiClasses
    }, /*#__PURE__*/react.createElement("a", {
      lang: lang,
      href: primaryDomain + Footer_languages[lang].href
    }, Footer_languages[lang].label));
  }))));
};
InlineLinkLists.defaultProps = {
  primaryDomain: ''
};
/* harmony default export */ var Footer_InlineLinkLists = (InlineLinkLists);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Footer/Logo.js


/**
 * We use a Babel loader to turn SVG imports into strings.
 * This component renders those strings.
 *
 * Do not add a title to the `<a>` tag as a substitute for alt
 * text on the linked images. It is a best practice to include
 * a `<title>` tag inside the SVG to provide the text that will
 * be read out to assistive devices. This text is a functional
 * equivalent to `alt` text in a standard `<img />` tag.
 *
 * See https://css-tricks.com/accessible-svgs/ for guidance on
 * creating accessible SVG files. At a minimum you will need to
 * have the following elements in your SVG files:
 *
 * 1. `aria-labelledby="TITLE_ID"` attribute in the `<svg>` tag
 * 2. role="img" attribute in the `<svg>` tag
 * 3. focusable="false" attribute in the `<svg>` tag
 * 4. `<title id="TITLE_ID"> Description of the image link here </title>`
 *
 */
/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/logos/healthcare-logo/).
 */
var Logo = function Logo(props) {
  var style = {};
  if (props.width) {
    style.width = props.width;
  }
  return /*#__PURE__*/react.createElement("a", {
    className: classnames_default()('hc-c-footer__logo ds-u-display--inline-block', props.className),
    href: props.href,
    style: style
  }, props.children);
};
/* harmony default export */ var Footer_Logo = (Logo);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Logo/LogoEnSvg.js

var LogoEnSvg = function LogoEnSvg(_ref) {
  var titleId = _ref.titleId;
  // prettier-ignore
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "200",
    height: "25",
    viewBox: "0 0 253.05 31.65",
    "aria-labelledby": titleId
  }, /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, "HealthCare.gov"), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M0,.61H4.68V9.75H15.74V.61H20.4V24.85H15.74V14.22H4.67V24.85H0Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M41.41,17.18H27a4.8,4.8,0,0,0,1.67,3,5.25,5.25,0,0,0,3.47,1.13,6,6,0,0,0,4.33-1.76l3.79,1.78a8.92,8.92,0,0,1-3.39,3,10.56,10.56,0,0,1-4.69,1,9.25,9.25,0,0,1-6.87-2.66A9.06,9.06,0,0,1,22.62,16,9.35,9.35,0,0,1,25.26,9.2a8.89,8.89,0,0,1,6.63-2.71A9.21,9.21,0,0,1,38.77,9.2a9.78,9.78,0,0,1,2.65,7.16Zm-4.5-3.54a4.51,4.51,0,0,0-1.76-2.44,5.13,5.13,0,0,0-3-.94,5.41,5.41,0,0,0-3.3,1.05,5.88,5.88,0,0,0-1.65,2.32Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M57.28,6.92h4.5V24.85h-4.5V23a8.66,8.66,0,0,1-2.64,1.8,7.44,7.44,0,0,1-2.87.55,8,8,0,0,1-6-2.69,9.39,9.39,0,0,1-2.53-6.7,9.61,9.61,0,0,1,2.45-6.8,7.81,7.81,0,0,1,6-2.65,7.56,7.56,0,0,1,3,.61,8.26,8.26,0,0,1,2.59,1.78Zm-4.73,3.69a4.55,4.55,0,0,0-3.46,1.47,5.9,5.9,0,0,0,0,7.6,4.54,4.54,0,0,0,3.46,1.5,4.62,4.62,0,0,0,3.51-1.47,5.4,5.4,0,0,0,1.42-3.86,5.26,5.26,0,0,0-1.4-3.79,4.67,4.67,0,0,0-3.52-1.45Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M65,0h4.48V24.85H65Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M80.61,21.21a10.17,10.17,0,0,0,3-.48v2.48a6,6,0,0,1-4,1.71c-3.72,0-5.32-2.19-5.32-4.69V10.78H72V6.91h2.31V2.29h4.5V6.91h4.9v3.87h-4.9v7.63C78.79,20,78.93,21.21,80.61,21.21Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M86.77,0h4.46V8.73A10.28,10.28,0,0,1,93.88,7a6.78,6.78,0,0,1,2.7-.57,6.06,6.06,0,0,1,4.5,1.85A6.47,6.47,0,0,1,102.64,13V24.85H98.21V17a19.9,19.9,0,0,0-.3-4.22,2.93,2.93,0,0,0-1-1.65,2.87,2.87,0,0,0-1.77-.54,3.31,3.31,0,0,0-2.35.91A4.84,4.84,0,0,0,91.43,14a19.82,19.82,0,0,0-.2,3.69v7.2H86.77Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__care",
    d: "M129.77,4.85l-3.23,3.07a10,10,0,0,0-7.4-3.48,8.11,8.11,0,0,0-8.23,8v.24a8.61,8.61,0,0,0,1,4.3,7.47,7.47,0,0,0,3,3A8.64,8.64,0,0,0,119.24,21a8.77,8.77,0,0,0,3.67-.75,13,13,0,0,0,3.65-2.73l3.13,3.26a17.06,17.06,0,0,1-5.07,3.63,13.73,13.73,0,0,1-5.45,1,12.56,12.56,0,0,1-9.25-3.58,12.38,12.38,0,0,1-3.6-9.18A12.63,12.63,0,0,1,108,6.25a12.18,12.18,0,0,1,4.7-4.53A13.32,13.32,0,0,1,119.24,0,14,14,0,0,1,129.77,4.85Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__care",
    d: "M145,6.92h4.49V24.85H145V23a8.66,8.66,0,0,1-2.64,1.8,7.44,7.44,0,0,1-2.87.55,8,8,0,0,1-6-2.69,9.39,9.39,0,0,1-2.53-6.7,9.61,9.61,0,0,1,2.45-6.8,7.81,7.81,0,0,1,6-2.65,7.56,7.56,0,0,1,3,.61,8.37,8.37,0,0,1,2.62,1.83Zm-4.73,3.69a4.55,4.55,0,0,0-3.46,1.47,5.33,5.33,0,0,0-1.37,3.77,5.37,5.37,0,0,0,1.4,3.82,4.54,4.54,0,0,0,3.46,1.5,4.65,4.65,0,0,0,3.51-1.47,5.42,5.42,0,0,0,1.39-3.86,5.25,5.25,0,0,0-1.39-3.79,4.69,4.69,0,0,0-3.53-1.44Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__care",
    d: "M152.7,6.92h3.86v3.79a8.62,8.62,0,0,1,2.91-3.45c2.23-1.32,4.59.47,4.59.47v3.74a5.49,5.49,0,0,0-4.58.38c-1.54,1-2.31,2.71-2.31,5.21v7.79H152.7Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__care",
    d: "M183.82,17.18H169.38a4.8,4.8,0,0,0,1.67,3,5.21,5.21,0,0,0,3.43,1.17,6,6,0,0,0,4.33-1.76l3.79,1.78a8.92,8.92,0,0,1-3.39,3,10.6,10.6,0,0,1-4.7,1,9.25,9.25,0,0,1-6.87-2.66A9.06,9.06,0,0,1,165,16.05a9.34,9.34,0,0,1,2.65-6.81,8.89,8.89,0,0,1,6.63-2.71,9.21,9.21,0,0,1,6.89,2.71,9.82,9.82,0,0,1,2.65,7.16Zm-4.5-3.54a4.51,4.51,0,0,0-1.76-2.44,5.13,5.13,0,0,0-3-.94,5.41,5.41,0,0,0-3.3,1.05,5.88,5.88,0,0,0-1.65,2.32Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__gov",
    d: "M189.37,25.08a1.73,1.73,0,0,1-1.29-.54,1.85,1.85,0,0,1,0-2.61,1.82,1.82,0,0,1,2.57,0h0a1.85,1.85,0,0,1,0,2.61,1.73,1.73,0,0,1-1.29.54Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__gov",
    d: "M204.74,31.64a12.27,12.27,0,0,1-4.08-.64,8.12,8.12,0,0,1-2.92-1.71,10.05,10.05,0,0,1-2-2.87h2.07A6.88,6.88,0,0,0,200.52,29a8.79,8.79,0,0,0,4.1.88,8.6,8.6,0,0,0,4.08-.9,5.58,5.58,0,0,0,2.4-2.29,9.94,9.94,0,0,0,.72-4.38V20.85l-.36.45a8.51,8.51,0,0,1-3.11,2.47,9.26,9.26,0,0,1-8.46-.34,8.51,8.51,0,0,1-3.29-3.23,8.94,8.94,0,0,1-1.16-4.46,9.13,9.13,0,0,1,9.07-9.09,8.39,8.39,0,0,1,3.66.81,10.31,10.31,0,0,1,3.29,2.69l.35.41V7.11h1.91V21.19a17,17,0,0,1-.65,5.45A7,7,0,0,1,210,30.35a10.24,10.24,0,0,1-5.28,1.3Zm.08-23.18a7.52,7.52,0,0,0-3.73,1,7.07,7.07,0,0,0-2.71,2.69,7.45,7.45,0,0,0-1,3.71,6.75,6.75,0,0,0,2,5,8,8,0,0,0,10.51,0,7,7,0,0,0,2-5.16A7.51,7.51,0,0,0,211,12a6.72,6.72,0,0,0-2.59-2.59,7.24,7.24,0,0,0-3.61-1Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__gov",
    d: "M226.65,25.08a8.66,8.66,0,0,1-6.6-2.74,9.41,9.41,0,0,1-.14-12.75,9.16,9.16,0,0,1,12.94-.51c.18.17.35.33.51.51a9.41,9.41,0,0,1-.14,12.77,8.6,8.6,0,0,1-6.58,2.74Zm0-16.58a6.86,6.86,0,0,0-5.09,2.19A7.34,7.34,0,0,0,219.44,16a7.56,7.56,0,0,0,1,3.72,6.93,6.93,0,0,0,2.62,2.67,7.41,7.41,0,0,0,7.24,0,6.93,6.93,0,0,0,2.62-2.67,7.56,7.56,0,0,0,1-3.72,7.33,7.33,0,0,0-2.13-5.28,6.87,6.87,0,0,0-5.07-2.19Z"
  }), /*#__PURE__*/react.createElement("polygon", {
    className: "hc-c-logo__gov",
    points: "245.03 24.61 244.86 24.61 236.79 7.09 238.8 7.09 244.76 20.04 244.95 20.43 245.13 20.04 251.02 7.09 253.05 7.09 245.03 24.61 245.03 24.61"
  }));
};
LogoEnSvg.defaultProps = {
  titleId: 'hc-c-logo__title'
};
/* harmony default export */ var Logo_LogoEnSvg = (LogoEnSvg);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Logo/LogoEsSvg.js

var LogoEsSvg = function LogoEsSvg(_ref) {
  var titleId = _ref.titleId;
  // prettier-ignore

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "237",
    height: "25",
    viewBox: "0 0 313.54 31.74",
    "aria-labelledby": titleId
  }, /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, "CuidadoDeSalud.gov"), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M23,5.21l-3.15,3a9.78,9.78,0,0,0-7.25-3.4,7.94,7.94,0,0,0-8,8,8.44,8.44,0,0,0,1,4.21A7.42,7.42,0,0,0,8.46,20,8.42,8.42,0,0,0,12.64,21a8.6,8.6,0,0,0,3.59-.73,12.84,12.84,0,0,0,3.58-2.67l3.05,3.19a16.68,16.68,0,0,1-5,3.55,13.37,13.37,0,0,1-5.33,1,12.27,12.27,0,0,1-9-3.51,12.12,12.12,0,0,1-3.52-9,12.3,12.3,0,0,1,1.6-6.3A11.83,11.83,0,0,1,6.2,2.13,12.89,12.89,0,0,1,12.63.45a13.39,13.39,0,0,1,5.65,1.24A13.58,13.58,0,0,1,23,5.21Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M24.76,7.22h4.45v8.44a11.57,11.57,0,0,0,.34,3.43,3,3,0,0,0,1.09,1.49,3.13,3.13,0,0,0,1.85.53,3.21,3.21,0,0,0,1.86-.53,3.06,3.06,0,0,0,1.14-1.53,11.92,11.92,0,0,0,.28-3.24V7.22h4.39v7.43a18.33,18.33,0,0,1-.72,6.28,6.85,6.85,0,0,1-2.61,3.17,8,8,0,0,1-4.38,1.1,7.78,7.78,0,0,1-4.67-1.29,6.78,6.78,0,0,1-2.5-3.59,21.45,21.45,0,0,1-.52-5.8Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M44.65,0a2.68,2.68,0,0,1,2,.84,2.78,2.78,0,0,1,.83,2,2.76,2.76,0,0,1-.82,2,2.64,2.64,0,0,1-2,.83,2.7,2.7,0,0,1-2-.84,2.85,2.85,0,0,1-.83-2.06,2.7,2.7,0,0,1,.82-2A2.68,2.68,0,0,1,44.65,0Zm-2.2,7.22h4.39V24.75H42.45Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M62.13.45h4.4v24.3h-4.4V22.9a8.78,8.78,0,0,1-2.58,1.76,7.25,7.25,0,0,1-2.81.54,7.83,7.83,0,0,1-5.88-2.63A9.21,9.21,0,0,1,48.38,16a9.42,9.42,0,0,1,2.4-6.66,7.64,7.64,0,0,1,5.83-2.59,7.52,7.52,0,0,1,3,.59,8.2,8.2,0,0,1,2.56,1.79ZM57.51,10.83a4.45,4.45,0,0,0-3.39,1.44A5.19,5.19,0,0,0,52.77,16a5.29,5.29,0,0,0,1.37,3.74,4.47,4.47,0,0,0,3.38,1.46A4.54,4.54,0,0,0,61,19.73,5.27,5.27,0,0,0,62.32,16,5.1,5.1,0,0,0,61,12.25,4.57,4.57,0,0,0,57.51,10.83Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M82.26,7.22h4.4V24.75h-4.4V22.9a8.66,8.66,0,0,1-2.58,1.76,7.22,7.22,0,0,1-2.81.54A7.81,7.81,0,0,1,71,22.57,9.21,9.21,0,0,1,68.52,16a9.42,9.42,0,0,1,2.4-6.66,7.81,7.81,0,0,1,8.79-2,8.17,8.17,0,0,1,2.55,1.79Zm-4.62,3.61a4.45,4.45,0,0,0-3.39,1.44A5.19,5.19,0,0,0,72.9,16a5.25,5.25,0,0,0,1.38,3.74,4.46,4.46,0,0,0,3.38,1.46,4.52,4.52,0,0,0,3.43-1.44A5.27,5.27,0,0,0,82.46,16a5.11,5.11,0,0,0-1.37-3.7A4.57,4.57,0,0,0,77.64,10.83Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M102.4.45h4.4v24.3h-4.4V22.9a8.78,8.78,0,0,1-2.58,1.76A7.25,7.25,0,0,1,97,25.2a7.83,7.83,0,0,1-5.88-2.63A9.2,9.2,0,0,1,88.66,16a9.42,9.42,0,0,1,2.39-6.66,7.64,7.64,0,0,1,5.83-2.59,7.52,7.52,0,0,1,3,.59,8.2,8.2,0,0,1,2.56,1.79ZM97.78,10.83a4.45,4.45,0,0,0-3.39,1.44A5.19,5.19,0,0,0,93,16a5.29,5.29,0,0,0,1.37,3.74,4.47,4.47,0,0,0,3.38,1.46,4.54,4.54,0,0,0,3.44-1.44A5.27,5.27,0,0,0,102.59,16a5.1,5.1,0,0,0-1.36-3.7A4.57,4.57,0,0,0,97.78,10.83Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__health",
    d: "M117.83,6.77A9.24,9.24,0,0,1,122.49,8a9.12,9.12,0,0,1,4.64,8,9.23,9.23,0,0,1-1.23,4.64A9,9,0,0,1,122.54,24a9.22,9.22,0,0,1-4.69,1.22,8.74,8.74,0,0,1-6.44-2.68A8.9,8.9,0,0,1,108.74,16a8.88,8.88,0,0,1,3-6.85A8.78,8.78,0,0,1,117.83,6.77Zm.07,4.14a4.53,4.53,0,0,0-3.41,1.42A5.09,5.09,0,0,0,113.12,16a5.15,5.15,0,0,0,1.35,3.71,4.82,4.82,0,0,0,6.85,0A5.08,5.08,0,0,0,122.7,16a5.07,5.07,0,0,0-1.35-3.66A4.57,4.57,0,0,0,117.9,10.91Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__care",
    d: "M129.57,1.05h5.35c3.44,0,6,.42,7.67,1.28a9.93,9.93,0,0,1,4.14,4.16,13.45,13.45,0,0,1,1.63,6.74,13.44,13.44,0,0,1-.91,5,10.51,10.51,0,0,1-2.51,3.82,9.07,9.07,0,0,1-3.47,2.09,24.57,24.57,0,0,1-6.47.58h-5.43Zm4.48,4.35v15h2.09a10.53,10.53,0,0,0,4.49-.71,5.35,5.35,0,0,0,2.28-2.39,8.73,8.73,0,0,0,.89-4.13,7.88,7.88,0,0,0-2.11-5.85q-1.91-1.87-6.11-1.87Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__care",
    d: "M168.09,17.26H154a4.73,4.73,0,0,0,1.63,3,5.13,5.13,0,0,0,3.4,1.1,5.84,5.84,0,0,0,4.23-1.72l3.71,1.74a8.74,8.74,0,0,1-3.32,2.91,10.36,10.36,0,0,1-4.59.94,9.1,9.1,0,0,1-6.72-2.6,8.86,8.86,0,0,1-2.59-6.52,9.17,9.17,0,0,1,2.58-6.66,8.69,8.69,0,0,1,6.49-2.65,9,9,0,0,1,6.73,2.65,9.58,9.58,0,0,1,2.6,7Zm-4.4-3.47A4.4,4.4,0,0,0,162,11.41a5,5,0,0,0-3-.92,5.23,5.23,0,0,0-3.22,1,5.84,5.84,0,0,0-1.62,2.27Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__care",
    d: "M182.92,4.27l-3.34,3Q177.83,4.78,176,4.77a2.15,2.15,0,0,0-1.45.48A1.36,1.36,0,0,0,174,6.32a1.82,1.82,0,0,0,.41,1.12,29,29,0,0,0,3.3,3.05c1.73,1.44,2.77,2.35,3.14,2.72a9.6,9.6,0,0,1,1.94,2.65,6.7,6.7,0,0,1,.57,2.77,6.32,6.32,0,0,1-2,4.81,7.36,7.36,0,0,1-5.26,1.91,7.86,7.86,0,0,1-4.41-1.24,9.76,9.76,0,0,1-3.22-3.9l3.79-2.29q1.71,3.13,3.94,3.14a2.91,2.91,0,0,0,2-.68,2,2,0,0,0,.79-1.56,2.69,2.69,0,0,0-.6-1.61,16.6,16.6,0,0,0-2.63-2.47,26.44,26.44,0,0,1-5-4.87,6.22,6.22,0,0,1-1.13-3.42,5.59,5.59,0,0,1,1.88-4.23A6.51,6.51,0,0,1,176.07.45a7.43,7.43,0,0,1,3.38.82A12.25,12.25,0,0,1,182.92,4.27Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__care",
    d: "M198.45,7.22h4.4V24.75h-4.4V22.9a8.78,8.78,0,0,1-2.58,1.76,7.25,7.25,0,0,1-2.81.54,7.81,7.81,0,0,1-5.87-2.63A9.17,9.17,0,0,1,184.71,16a9.46,9.46,0,0,1,2.39-6.66,7.65,7.65,0,0,1,5.83-2.59,7.52,7.52,0,0,1,3,.59,8.2,8.2,0,0,1,2.56,1.79Zm-4.62,3.61a4.45,4.45,0,0,0-3.39,1.44,5.19,5.19,0,0,0-1.35,3.7,5.29,5.29,0,0,0,1.37,3.74,4.47,4.47,0,0,0,3.38,1.46,4.54,4.54,0,0,0,3.44-1.44A5.27,5.27,0,0,0,198.64,16a5.1,5.1,0,0,0-1.36-3.7A4.57,4.57,0,0,0,193.83,10.83Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__care",
    d: "M205.16.45h4.4v24.3h-4.4Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__care",
    d: "M211.89,7.22h4.45v8.44a11.57,11.57,0,0,0,.34,3.43,3,3,0,0,0,1.09,1.49,3.16,3.16,0,0,0,1.85.53,3.21,3.21,0,0,0,1.86-.53,3,3,0,0,0,1.14-1.53,11.51,11.51,0,0,0,.28-3.24V7.22h4.4v7.43q0,4.59-.73,6.28A6.85,6.85,0,0,1,224,24.1a8,8,0,0,1-4.38,1.1,7.8,7.8,0,0,1-4.67-1.29,6.84,6.84,0,0,1-2.5-3.59,21.45,21.45,0,0,1-.52-5.8Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__care",
    d: "M243,.45h4.4v24.3H243V22.9a8.78,8.78,0,0,1-2.58,1.76,7.25,7.25,0,0,1-2.81.54,7.85,7.85,0,0,1-5.88-2.63A9.2,9.2,0,0,1,229.26,16a9.46,9.46,0,0,1,2.39-6.66,7.64,7.64,0,0,1,5.83-2.59,7.52,7.52,0,0,1,3,.59A8.2,8.2,0,0,1,243,9.15Zm-4.62,10.38A4.45,4.45,0,0,0,235,12.27a5.19,5.19,0,0,0-1.35,3.7A5.29,5.29,0,0,0,235,19.71a4.47,4.47,0,0,0,3.38,1.46,4.54,4.54,0,0,0,3.44-1.44A5.27,5.27,0,0,0,243.19,16a5.1,5.1,0,0,0-1.36-3.7A4.57,4.57,0,0,0,238.38,10.83Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__gov",
    d: "M253,21.21a2,2,0,0,1,2,2,2,2,0,0,1-2,2,1.89,1.89,0,0,1-1.4-.59A1.92,1.92,0,0,1,251,23.2a2,2,0,0,1,2-2Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__gov",
    d: "M273.09,7.22h2.25v14a16.53,16.53,0,0,1-.64,5.4,7,7,0,0,1-3.08,3.72,10.12,10.12,0,0,1-5.27,1.3A12.21,12.21,0,0,1,262.3,31a8.07,8.07,0,0,1-2.92-1.72,9.88,9.88,0,0,1-2.08-3.14h2.45a6.4,6.4,0,0,0,2.58,2.58,8.27,8.27,0,0,0,3.92.84,8.1,8.1,0,0,0,3.89-.86,5.35,5.35,0,0,0,2.27-2.16,9.67,9.67,0,0,0,.68-4.2v-.91A8.6,8.6,0,0,1,270,23.89a9.27,9.27,0,0,1-8.46-.34,8.58,8.58,0,0,1-3.29-3.23,8.86,8.86,0,0,1-1.16-4.46,9.12,9.12,0,0,1,9.07-9.09,8.45,8.45,0,0,1,3.67.81,10.26,10.26,0,0,1,3.28,2.68Zm-6.66,1.72a7.11,7.11,0,0,0-3.56.93,6.82,6.82,0,0,0-2.58,2.56,7,7,0,0,0-.93,3.54,6.38,6.38,0,0,0,1.93,4.77,6.9,6.9,0,0,0,5,1.88,6.8,6.8,0,0,0,5-1.87,6.59,6.59,0,0,0,1.89-4.91,7.14,7.14,0,0,0-.87-3.54,6.37,6.37,0,0,0-2.46-2.45A6.81,6.81,0,0,0,266.43,8.94Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__gov",
    d: "M286.83,6.77a8.68,8.68,0,0,1,6.71,2.93A9.13,9.13,0,0,1,296,16a9.1,9.1,0,0,1-2.56,6.42,9.26,9.26,0,0,1-13.17,0A9.14,9.14,0,0,1,277.67,16a9.06,9.06,0,0,1,2.43-6.31A8.64,8.64,0,0,1,286.83,6.77Zm0,2.21A6.53,6.53,0,0,0,282,11.05a7,7,0,0,0-2,5,7.2,7.2,0,0,0,.92,3.55,6.58,6.58,0,0,0,2.49,2.53,7,7,0,0,0,6.89,0,6.45,6.45,0,0,0,2.49-2.53,7.09,7.09,0,0,0,.92-3.55,7,7,0,0,0-2-5A6.56,6.56,0,0,0,286.82,9Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "hc-c-logo__gov",
    d: "M296.83,7.22h2.4L305.11,20l5.82-12.78h2.41l-8,17.53h-.42Z"
  }));
};
LogoEsSvg.defaultProps = {
  titleId: 'hc-c-logo__title'
};
/* harmony default export */ var Logo_LogoEsSvg = (LogoEsSvg);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Logo/Logo.js





function Logo_Logo(props) {
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()('hc-c-logo', props.className)
  }, getLanguage() === 'es' ? /*#__PURE__*/react.createElement(Logo_LogoEsSvg, {
    titleId: props.titleId
  }) : /*#__PURE__*/react.createElement(Logo_LogoEnSvg, {
    titleId: props.titleId
  }));
}
/* harmony default export */ var esm_Logo_Logo = (Logo_Logo);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Logo/index.js

;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Footer/LogosRow.js




var LogosRow = function LogosRow(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: "ds-l-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "hc-c-footer__logo-row"
  }, /*#__PURE__*/react.createElement(Footer_Logo, {
    href: getLanguage() === 'es' ? 'https://www.cuidadodesalud.gov' : 'https://www.healthcare.gov'
  }, /*#__PURE__*/react.createElement(esm_Logo_Logo, {
    titleId: "hc-c-footer__logo-title"
  })), /*#__PURE__*/react.createElement("div", {
    className: "hc-c-footer__disclaimer"
  }, getLanguage() === 'en' && /*#__PURE__*/react.createElement("p", null, "Health Insurance Marketplace", /*#__PURE__*/react.createElement("sup", null, "\xAE"), " is a registered trademark of the Department of Health & Human Services."), /*#__PURE__*/react.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: props.t('footer.disclaimer')
    }
  }))));
};
/* harmony default export */ var Footer_LogosRow = (LogosRow);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Footer/Footer.js





/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/footer/healthcare-footer/?theme=healthcare).
 */
var Footer = function Footer(props) {
  var classes = classnames_default()('hc-c-footer', props.className);
  return /*#__PURE__*/react.createElement("footer", {
    className: classes,
    role: "contentinfo"
  }, props.footerTop, /*#__PURE__*/react.createElement(Footer_InlineLinkLists, {
    t: t,
    primaryDomain: props.primaryDomain
  }), /*#__PURE__*/react.createElement(Footer_LogosRow, {
    t: t
  }));
};
/* harmony default export */ var Footer_Footer = ((/* unused pure expression or super */ null && (Footer)));
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/di.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MenuIcon_extends.apply(this, arguments); }




var MenuIcon_defaultProps = {
  className: '',
  viewBox: '0 0 448 512'
};
function MenuIcon(props) {
  var classes = classnames_default()(props.className, 'ds-c-icon--menu');
  return /*#__PURE__*/react.createElement(SvgIcon, MenuIcon_extends({
    title: t('icons.menu')
  }, MenuIcon_defaultProps, props, {
    className: classes
  }), /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
  }));
}
;// CONlytics() {
  return flags_flags.HEADER_SENDS_ANALYTICS;
}
function setHeaderSendsAnalytics(value) {
  flags_flagmbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function analytics_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? analytics_ownKeys(Object(source), !0).forEach(function (key) { analytics_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : analytics_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function analytics_defineProperty(obj, key, value) { key = analytics_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function analytics_toPropertyKey(arg) { var key = analytics_toPrimitive(arg, "string"); return analytics_typeof(key) === "symbol" ? key : String(key); }
function analytics_toPrimitive(input, hint) { if (analytics_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (analytics_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



function sendHeaderEvent(linkText, linkUrl) {
  if (headerSendsAnalytics()) {
    defaultAnalyticsFunction(analytics_objectSpread({
      event_name: 'header_click',
      event_type: 'ui interaction',
      category: 'consistent header',
      event_action: 'click',
      event_category: 'consistent header',
      event_label: linkText,
      event_extension: eventExtensionText,
      text: linkText
    }, linkUrl ? {
      link_url: linkUrl
    } : {}));
  }
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Header/ActionMenu.js




var menuId = 'hc-c-menu';
/**
 * ActionMenu is displayed at the top-right of the header.
 * There are two variations of this component: One for logged-out
 * users, which displays a "Log in" & "Espanol" link on desktop.
 * And another for logged-in users, which includes the user's first
 * name. The logged-in variation always displays a "Menu" toggle
 * button, and the logged-out variation only displays it on mobile.
 */
var ActionMenu = function ActionMenu(props) {
  function onClick(event) {
    sendHeaderEvent(props.open ? 'menu closed' : 'menu opened');
    props.onMenuToggleClick(event);
  }
  var menuButton = /*#__PURE__*/react.createElement(Button, {
    "aria-controls": menuId,
    "aria-expanded": !!props.open,
    "aria-label": props.open ? props.t('header.closeMenu') : props.t('header.openMenu'),
    className: classnames_default()('hc-c-action-menu-button', 'ds-u-sm-margin-left--2', {
      'ds-u-display--inline-block ds-u-sm-display--none': !props.loggedIn
    }),
    onClick: onClick,
    size: "small"
  }, props.open ? /*#__PURE__*/react.createElement(CloseIconThin, {
    className: "ds-u-margin-right--1"
  }) : /*#__PURE__*/react.createElement(MenuIcon, {
    className: "ds-u-margin-right--1"
  }), /*#__PURE__*/react.createElement("span", null, props.t('header.menu')));
  var content;
  if (props.loggedIn) {
    content = /*#__PURE__*/react.createElement(react.Fragment, null, props.firstName && /*#__PURE__*/react.createElement("span", {
      className: "ds-u-display--none ds-u-sm-display--inline-block"
    }, props.firstName), menuButton);
  } else if (props.links.length) {
    content = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("ul", {
      role: "list",
      className: "hc-c-logged-out-links ds-c-list--bare ds-u-display--none ds-u-sm-display--flex"
    }, props.links.map(function (link) {
      return /*#__PURE__*/react.createElement("li", {
        key: link.href,
        className: "hc-c-logged-out-links__li"
      }, /*#__PURE__*/react.createElement("a", {
        href: link.href,
        "aria-label": link.ariaLabel
        // TODO: .toString() here pacifies TypeScript, but TypeScript has actually found a
        // potential bug here where we allow link.label to be a ReactNode, but a ReactNode
        // can't actually be coerced into a string. We've had to do a lot of extra work in
        // other cases to find the te/Alert/Alert.tsx#L114
        ,
        onClick: function onClick() {
          return sendHeaderEvent(link.label.toString(), link.href);
        },
        className: classnames_default()('hc-c-logged-out-links__link', link.className)
      }, link.label));
    })), menuButton);
  } else {
    content = null;
  }
  return content;
};
/* harmony default export */ var Header_ActionMenu = (ActionMenu);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Header/DeConsumerMessage.js

/**
 * Instead of coming to the Marketplace and seeing all plans that
 * an applicant is eligible for, a direct enrollment consumer is
 * someone who went directly to an issuer website, applied, and was
 * redirected to the Marketplace for verification services to be run.
 * This message is displayed to those consumers to provide guidance
 * on how to complete their application.
 */
var DeConsumerMessage = function DeConsumerMessage(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: "ds-u-fill--primary-darker ds-base--inverse ds-u-padding-y--2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ds-l-container"
  }, props.t('header.deConsumerMessage', {
    brokerName: props.deBrokerName || props.t('header.deBrokerNameFallback')
  })));
};
/* harmony default export */ var Header_DeConsumerMessage = (DeConsumerMessage);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Header/localeLink.js


/**
 * Returns a link pointing to the opposite locale
 */
function localeLink(t, locale) {
  var subpath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var switchLocaleLink = arguments.length > 3 ? arguments[3] : undefined;
  var defaultLocaleLink = languageMatches(locale, 'es') ? "https://www.healthcare.gov/".concat(subpath) : "https://www.cuidadodesalud.gov/es/".concat(subpath);
  return {
    label: languageMatches(locale, 'es') ? t('header.english') : t('header.español'),
    ariaLabel: t('header.langAriaLabel'),
    href: switchLocaleLink !== null && switchLocaleLink !== void 0 ? switchLocaleLink : defaultLocaleLink
  };
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Header/loginLink.js
/**
 * Returns a link pointing to the login page
 * @param {Function} translate - i18n translator
 * @param {Boolean} deConsumer - is the consumer coming from a Direct Enrollment flow?
 * @param {String} primaryDomain
 * @returns {Object}
 */
function loginLink(t, deConsumer) {
  var primaryDomain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return {
    label: t('header.login'),
    href: deConsumer ? "".concat(primaryDomain, "/login?check_de=1") : "".concat(primaryDomain, "/login")
  };
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Header/defaultMenuLinks.js




var LinkIdentifier = /*#__PURE__*/function (LinkIdentifier) {
  LinkIdentifier["LOGIN"] = "login";
  LinkIdentifier["LOGOUT"] = "logout";
  return LinkIdentifier;
}({});
/**
 * Default menu links for each header variation.
 * Apps can import this method into their app if they need to
 * extend the existing default list of menu links.
 */
function defaultMenuLinks() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var deConsumer = options.deConsumer,
    subpath = options.subpath,
    _options$primaryDomai = options.primaryDomain,
    primaryDomain = _options$primaryDomai === void 0 ? '' : _options$primaryDomai,
    switchLocaleLink = options.switchLocaleLink,
    hideLoginLink = options.hideLoginLink,
    hideLogoutLink = options.hideLogoutLink,
    hideLanguageSwitch = options.hideLanguageSwitch,
    customLinksPassedIn = options.customLinksPassedIn;
  var isSpanish = languageMatches('es', getLanguage());
  var ffmLocalePath = isSpanish ? 'es_MX' : 'en_US';

  // NOTE: order matters here and links will be displayed in order added to the arrays
  var loggedOut = [];
  var loggedIn = [];

  // Links other than the ones inside this if should need to be explicitly hidden for their
  // respective variations. This means the language and login will show even if a custom set
  // of links is passed in.
  if (!customLinksPassedIn) {
    loggedIn.push({
      label: t('header.myApplicationsAndCoverage'),
      href: "".concat(primaryDomain, "/marketplace/auth/global/").concat(ffmLocalePath, "/myProfile#landingPage")
    });
    loggedIn.push({
      label: t('header.myProfile'),
      href: "".concat(primaryDomain, "/marketplace/auth/global/").concat(ffmLocalePath, "/myProfile#settings")
    });
  }
  if (!hideLanguageSwitch) {
    var _getLanguage;
    var locLink = localeLink(t, (_getLanguage = getLanguage()) !== null && _getLanguage !== void 0 ? _getLanguage : getLanguage(), subpath, switchLocaleLink);
    loggedOut.push(locLink);
    loggedIn.push(locLink);
  }
  if (!hideLoginLink) {
    var logLink = loginLink(t, deConsumer, primaryDomain);
    loggedOut.push(Object.assign({
      identifier: LinkIdentifier.LOGIN
    }, logLink));
  }
  if (!hideLogoutLink) {
    loggedIn.push({
      identifier: LinkIdentifier.LOGOUT,
      label: t('header.logout'),
      href: "".concat(primaryDomain || '', "/logout")
    });
  }
  var links = {};
  links[VARIATION_NAMES.LOGGED_OUT] = loggedOut;
  links[VARIATION_NAMES.LOGGED_IN] = loggedIn;
  return links;
}
/* harmony default export */ var Header_defaultMenuLinks = (defaultMenuLinks);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Header/MenuLinks.js




/**
 * The primary list of menu links. This ensures a consistent styling
 * across header variations. On the homepage, this list is displayed
 * horizontally on desktop. In other versions, this list is visible
 * when the "Menu" button is toggled and displayed as a stacked list.
 */
var MenuLinks = function MenuLinks(props) {
  return /*#__PURE__*/react.createElement("ul", {
    role: "list",
    className: "hc-c-menu__links ds-c-list ds-c-list--bare"
  }, props.links.map(function (link) {
    var isLoginLogoutLink = link.identifier === LinkIdentifier.LOGIN || link.identifier === LinkIdentifier.LOGOUT;
    function onClick(event) {
      // TODO: .toString() here pacifies TypeScript, but TypeScript has actually found a
      // potential bug here where we allow link.label to be a ReactNode, but a ReactNode
      // can't actually be coerced into a string. We've had to do a lot of extra work in
      // other cases to find the text content of a ReactNode after rendering, like in
      // packages/design-system/src/components/Alert/Alert.tsx#L114
      sendHeaderEvent(link.label.toString(), link.href);
      if (link.onClick) {
        return link.onClick(event);
      }
    }
    return /*#__PURE__*/react.createElement("li", {
      key: link.href,
      className: "ds-u-margin--0 ".concat(isLoginLogoutLink ? 'ds-u-border-top--1' : '')
    }, /*#__PURE__*/react.createElement("a", {
      href: link.href,
      onClick: onClick,
      className: classnames_default()('hc-c-menu__link', link.className)
    }, link.label));
  }));
};
/* harmony default export */ var Header_MenuLinks = (MenuLinks);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Header/Menu.js



var Menu = function Menu(props) {
  var classes = classnames_default()('hc-c-menu', {
    'hc-c-menu--open': props.open
  });
  return /*#__PURE__*/react.createElement("div", {
    id: "hc-c-menu",
    hidden: !props.open,
    className: classes
  }, props.submenuTop, props.beforeLinks, props.links && /*#__PURE__*/react.createElement(Header_MenuLinks, {
    links: props.links
  }), props.submenuBottom);
};
/* harmony default export */ var Header_Menu = (Menu);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/UsaFlagIcon.js
function UsaFlagIcon_extends() { UsaFlagIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return UsaFlagIcon_extends.apply(this, arguments); }



var UsaFlagIcon_defaultProps = {
  className: '',
  viewBox: '0 0 16 11'
};
function UsaFlagIcon(props) {
  var iconCssClasses = "ds-c-icon--usa-flag ".concat(props.className || '');
  return /*#__PURE__*/react.createElement(SvgIcon, UsaFlagIcon_extends({
    title: t('usaBanner.flagIconTitle')
  }, UsaFlagIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#FFF",
    d: "M0 0h16v11H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#DB3E1F",
    d: "M8 0h8v1H8z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#1E33B1",
    d: "M0 0h8v7H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#DB3E1F",
    d: "M8 2h8v1H8zM8 4h8v1H8zM8 6h8v1H8zM0 8h16v1H0zM0 10h16v1H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFF",
    d: "M1 1h1v1H1zM2 3h1v1H2zM1 5h1v1H1zM3 1h1v1H3zM4 3h1v1H4zM3 5h1v1H3zM5 1h1v1H5zM6 3h1v1H6zM5 5h1v1H5z"
  })));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/BuildingCircleIcon.js
function BuildingCircleIcon_extends() { BuildingCircleIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BuildingCircleIcon_extends.apply(this, arguments); }



var BuildingCircleIcon_defaultProps = {
  className: '',
  viewBox: '0 0 54 54'
};
function BuildingCircleIcon(props) {
  var iconCssClasses = "ds-c-icon--building-circle ".concat(props.className || '');
  return /*#__PURE__*/react.createElement(SvgIcon, BuildingCircleIcon_extends({
    title: t('icons.buildingCircle')
  }, BuildingCircleIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    className: "ds-c-icon--building-circle__building",
    fill: "currentColor",
    d: "M36.5,20.91v1.36H35.15a0.71,0.71,0,0,1-.73.68H18.23a0.71,0.71,0,0,1-.73-0.68H16.14V20.91l10.18-4.07Zm0,13.57v1.36H16.14V34.48a0.71,0.71,0,0,1,.73-0.68h18.9A0.71,0.71,0,0,1,36.5,34.48ZM21.57,23.62v8.14h1.36V23.62h2.71v8.14H27V23.62h2.71v8.14h1.36V23.62h2.71v8.14h0.63a0.71,0.71,0,0,1,.73.68v0.68H17.5V32.45a0.71,0.71,0,0,1,.73-0.68h0.63V23.62h2.71Z"
  }), /*#__PURE__*/react.createElement("circle", {
    className: "ds-c-icon--building-circle__circle",
    fill: "none",
    cx: "50%",
    cy: "50%",
    r: "47%",
    stroke: "currentColor",
    strokeWidth: "1"
  })));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/LockCircleIcon.js
function LockCircleIcon_extends() { LockCircleIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LockCircleIcon_extends.apply(this, arguments); }



var LockCircleIcon_defaultProps = {
  className: '',
  viewBox: '0 0 54 54'
};
function LockCircleIcon(props) {
  var iconCssClasses = "ds-c-icon--lock-circle ".concat(props.className || '');
  return /*#__PURE__*/react.createElement(SvgIcon, LockCircleIcon_extends({
    title: t('icons.lockCircle')
  }, LockCircleIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M34.72,34.84a1.29,1.29,0,0,1-1.29,1.29H20.57a1.29,1.29,0,0,1-1.29-1.29V27.12a1.29,1.29,0,0,1,1.29-1.29H21V23.26a6,6,0,0,1,12,0v2.57h0.43a1.29,1.29,0,0,1,1.29,1.29v7.72Zm-4.29-9V23.26a3.43,3.43,0,0,0-6.86,0v2.57h6.86Z"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    cx: "50%",
    cy: "50%",
    r: "47%"
  }));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/Icons/LockIcon.js
function LockIcon_extends() { LockIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LockIcon_extends.apply(this, arguments); }



var LockIcon_defaultProps = {
  className: '',
  viewBox: '0 0 52 64'
};
function LockIcon(props) {
  var iconCssClasses = "ds-c-icon--lock ".concat(props.className || '');
  return /*#__PURE__*/react.createElement(SvgIcon, LockIcon_extends({
    title: t('icons.lock')
  }, LockIcon_defaultProps, props, {
    className: iconCssClasses
  }), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
  }));
}
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/UsaBanner/UsaBanner.js
function UsaBanner_slicedToArray(arr, i) { return UsaBanner_arrayWithHoles(arr) || UsaBanner_iterableToArrayLimit(arr, i) || UsaBanner_unsupportedIterableToArray(arr, i) || UsaBanner_nonIterableRest(); }
function UsaBanner_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function UsaBanner_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UsaBanner_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UsaBanner_arrayLikeToArray(o, minLen); }
function UsaBanner_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function UsaBanner_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function UsaBanner_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/usa-banner/).
 */
var UsaBanner = function UsaBanner(props) {
  var _useState = (0,react.useState)(false),
    _useState2 = UsaBanner_slicedToArray(_useState, 2),
    isBannerOpen = _useState2[0],
    setBannerOpen = _useState2[1];
  var classes = classnames_default()('dser--', props.id);
  var panelId = "".concat(rootId, "__panel");
  var toggleBanner = function toggleBanner() {
    setBannerOpen(!isBannerOpen);
  };
  var actionText = /*#__PURE__*/react.createElement(react.Fragment, null, t('usaBanner.bannerActionText'), /*#__PURE__*/react.createElement(ArrowIcon, {
    direction: isBannerOpen ? 'up' : 'down',
    className: "ds-c-usa-banner__action-icon"
  }));
  return /*#__PURE__*/react.createElement("section", {
    className: classes,
    "aria-label": t('usaBanner.bannerLabel')
  }, /*#__PURE__*/react.createElement("header", {
    className: classnames_default()('ds-c-usa-banner__header ds-u-font-size--sm', isBannerOpen && 'ds-c-usa-banner__header--expanded')
  }, /*#__PURE__*/react.createElement(UsaFlagIcon, {
    className: "ds-c-usa-banner__header-icon"
  }), /*#__PURE__*/react.createElement("p", {
    className: "ds-c-usa-banner__header-text"
  }, t('usaBanner.bannerText')), /*#__PURE__*/react.createElement("p", {
    className: classnames_default()('ds-c-usa-banner__action ds-u-align-items--center ds-u-md-display--none', !isBannerOpen && 'ds-u-display--flex')
  }, actionText), /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: toggleBanner,
    className: "ds-c-usa-banner__button",
    "aria-expanded": isBannerOpen,
    "aria-controls": panelId
  }, /*#__PURE__*/react.createElement("span", {
    className: "ds-c-usa-banner__button-text ds-u-md-display--flex ds-u-align-items--center"
  }, actionText), /*#__PURE__*/react.createElement("span", {
    className: "ds-c-usa-banner__button-icon-container",
    hidden: !isBannerOpen
  }, /*#__PURE__*/react.createElement(CloseIconThin, {
    className: "ds-c-usa-banner__button-icon"
  })))), /*#__PURE__*/react.createElement("div", {
    className: "ds-c-usa-banner__guidance [ ds-u-leading--base ds-u-font-size--base ]"
  }, /*#__PURE__*/react.createElement("div", {
    id: panelId,
    className: "ds-c-usa-banner__guidance-container",
    hidden: !isBannerOpen
  }, /*#__PURE__*/react.createElement("div", {
    className: "ds-c-usa-banner__guidance-item"
  }, /*#__PURE__*/react.createElement(BuildingCircleIcon, {
    className: "ds-c-usa-banner__guidance-icon"
  }), /*#__PURE__*/react.createElement("p", {
    className: "ds-c-usa-banner__guidance-text"
  }, /*#__PURE__*/react.createElement("strong", null, t('usaBanner.domainHeaderText')), /*#__PURE__*/react.createElement("br", null), "".concat(t('usaBanner.domainAText'), " "), /*#__PURE__*/react.createElement("strong", null, " ".concat(t('usaBanner.govText'), " ")), t('usaBanner.domainText'))), /*#__PURE__*/react.createElement("div", {
    className: "ds-c-usa-banner__guidance-item"
  }, /*#__PURE__*/react.createElement(LockCircleIcon, {
    className: "ds-c-usa-banner__guidance-icon"
  }), /*#__PURE__*/react.createElement("p", {
    className: "ds-c-usa-banner__guidance-text"
  }, /*#__PURE__*/react.createElement("strong", null, t('usaBanner.httpsHeaderText')), /*#__PURE__*/react.createElement("br", null), "".concat(t('usaBanner.httpsAText'), " "), /*#__PURE__*/react.createElement("strong", null, "".concat(t('usaBanner.httpsLockText'), " ")), "(", /*#__PURE__*/react.createElement(LockIcon, {
    className: "ds-c-usa-banner__inline-lock-icon"
  }), ")", /*#__PURE__*/react.createElement("span", null, " ".concat(t('usaBanner.httpsOrText'))), /*#__PURE__*/react.createElement("strong", null, " ".concat(t('usaBanner.httpsText'), " ")), t('usaBanner.httpsDetailText'))))));
};
/* harmony default export */ var UsaBanner_UsaBanner = (UsaBanner);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/design-system/dist/react-components/esm/SkipNav/SkipNav.js


/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/skip-nav/).
 */
var SkipNav = function SkipNav(_ref) {
  var children = _ref.children,
    href = _ref.href,
    onClick = _ref.onClick;
  return /*#__PURE__*/react.createElement("a", {
    className: "ds-c-skip-nav",
    href: href,
    onClick: onClick
  }, children !== null && children !== void 0 ? children : t('skipNav.default'));
};
/* harmony default export */ var SkipNav_SkipNav = (SkipNav);
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Header/Header.js
function Header_slicedToArray(arr, i) { return Header_arrayWithHoles(arr) || Header_iterableToArrayLimit(arr, i) || Header_unsupportedIterableToArray(arr, i) || Header_nonIterableRest(); }
function Header_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Header_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Header_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Header_arrayLikeToArray(o, minLen); }
function Header_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Header_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Header_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var VARIATION_NAMES = {
  LOGGED_IN: 'logged-in',
  LOGGED_OUT: 'logged-out'
};

/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/header/healthcare-header/?theme=healthcare).
 */
var Header = function Header(props) {
  var _props$logoClassName;
  var _useState = (0,react.useState)(false),
    _useState2 = Header_slicedToArray(_useState, 2),
    openMenu = _useState2[0],
    setOpenMenu = _useState2[1];
  var isControlledMenu = props.isMenuOpen !== undefined && props.onMenuToggle !== undefined;

  /**
   * Determines which variation of the header should be displayed,
   * based on the props being passed into the component.
   * @returns {String} Variation name
   */
  function variation() {
    if (props.loggedIn) {
      // Logged-in state, with minimal navigation
      rern or Product
      return VARIATION_NAMES.LOGGED_OUT;
    }
  }
  function isLoggedIn() {
    return variation() === VARIATION_NAMES.LOGGED_IN;
  }

  /**
   * Content rendered within <Menu>, before the list of links
   * @returns {Node}
   */
  function beforeMenuLinks() {
    if (isLoggedIn() && props.firstName) {
      return /*#__PURE__*/react.createElement("div", {
        className: "ds-u-sm-display--none ds-u-border-bottom--1 ds-u-margin-x--1 ds-u-padding-y--1 hc-c-header__name"
      }, props.firstName);
    }
  }

  /**
   * Event handler for when the "Menu" or "Close" button
   * within ActionMenu is clicked.
   */
  function handleMenuToggleClick() {
    if (!isControlledMenu) {
      setOpenMenu(!openMenu);
    } else {
      props.onMenuToggle();
    }
  }
  var classes = classnames_default()("hc-c-header hc-c-header--".concat(variation()), props.className);
  var hasCustomLinks = !!props.links;
  var defaultLinksForVariation = Header_defaultMenuLinks({
    deConsumer: props.deConsumer,
    subpath: props.subpath,
    primaryDomain: props.primaryDomain,
    switchLocaleLink: props.switchLocaleLink,
    hideLoginLink: props.hideLoginLink,
    hideLogoutLink: props.hideLogoutLink,
    hideLanguageSwitch: props.hideLanguageSwitch,
    customLinksPassedIn: hasCustomLinks
  })[variation()];
  var links = hasCustomLinks ? props.links.concat(defaultLinksForVariation) : defaultLinksForVariation;
  return /*#__PURE__*/react.createElement(react.Fragment, null, props.showUsaBanner && /*#__PURE__*/react.createElement(UsaBanner_UsaBanner, {
    id: "hc-c-header__usa-banner"
  }), /*#__PURE__*/react.createElement("header", {
    className: classes,
    role: "banner",
    "aria-label": "global"
  }, /*#__PURE__*/react.createElement(SkipNav_SkipNav, {
    href: props.skipNavHref,
    onClick: props.onSkipNavClick
  }, t('header.skipNav')), /*#__PURE__*/react.createElement("div", {
    className: "ds-l-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ds-l-row ds-u-align-items--center ds-u-flex-wrap--nowrap ds-u-padding-y--2"
  }, /*#__PURE__*/react.createElement("a", {
    href: props.primaryDomain ? props.primaryDomain : '/',
    className: "hc-c-logo-link ds-l-col ds-l-col--auto"
  }, /*#__PURE__*/react.createElement(esm_Logo_Logo, {
    className: (_props$logoClassName = props.logoClassName) !== null && _props$logoClassName !== void 0 ? _props$logoClassName : ''
  })), /*#__PURE__*/react.createElement("nav", {
    "aria-label": "Profile, applications, and coverage",
    id: "hc-c-header__actions",
    className: "hc-c-header__actions ds-l-col ds-l-col--auto ds-u-margin-left--auto ds-u-font-weight--bold"
  }, /*#__PURE__*/react.createElement(Header_ActionMenu, {
    t: t,
    firstName: props.firstName,
    onMenuToggleClick: handleMenuToggleClick,
    loggedIn: props.loggedIn,
    open: isControlledMenu ? props.isMenuOpen : openMenu,
    links: links
  }), /*#__PURE__*/react.createElement(Header_Menu, {
    beforeLinks: beforeMenuLinks(),
    links: links,
    open: isControlledMenu ? props.isMenuOpen : openMenu,
    submenuTop: props.submenuTop,
    submenuBottom: props.submenuBottom
  })))), props.deConsumer && /*#__PURE__*/react.createElement(Header_DeConsumerMessage, {
    t: t,
    deBrokerName: props.deBrokerName
  }), props.headerBottom));
};
Header.defaultProps = {
  showUsaBanner: true,
  skipNavHref: '#main'
};
/* harmony default export */ var Header_Header = ((/* unused pure expression or super */ null && (Header)));
;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/Header/index.js


;// CONCATENATED MODULE: ./node_modules/@cmsgov/ds-healthcare-gov/dist/react-components/esm/index.js


// Unfortunately we can't convert this module to TypeScript until we deprecate
// the `secondary` button variation and get rid of its TS definition file.

/**
 * This is the main entry file for a child design system's React components.
 * It should contain all exported JS from the core CMS design system
 * and all additional child design system code.
 *
 * The CMSDS build scripts rely on this entry file's location (`src/components/index.js`) to transpile JS.
 * Modify `babel.config.js` to configure the build files.
 *
 * Also included here are default flag settings for each subsystem
 *
 */








/**
 * Healthcare.gov Flags
 */
setErrorPlacementDefault('bottom');

/***/ }),

/***/ 4470:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var prefix = 'fab';
var iconName = 'facebook-f';
var width = 320;
var height = 512;
var aliases = [];
var unicode = 'f39e';
var svgPathData = 'M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z';

exports.DF = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.AY = exports.DF;
__webpack_unused_export__ = prefix;
__webpack_unused_export__ = iconName;
__webpack_unused_export__ = width;
__webpack_unused_export__ = height;
__webpack_unused_export__ = aliases;
__webpack_unused_export__ = unicode;
__webpack_unused_export__ = svgPathData;
__webpack_unused_export__ = aliases;

/***/ }),

/***/ 1719:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var prefix = 'fab';
var iconName = 'twitter';
var width = 512;
var height = 512;
var aliases = [];
var unicode = 'f099';
var svgPathData = 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z';

exports.DF = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.md = exports.DF;
__webpack_unused_export__ = prefix;
__webpack_unused_export__ = iconName;
__webpack_unused_export__ = width;
__webpack_unused_export__ = height;
__webpack_unused_export__ = aliases;
__webpack_unused_export__ = unicode;
__webpack_unused_export__ = svgPathData;
__webpack_unused_export__ = aliases;

/***/ }),

/***/ 147:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var prefix = 'fab';
var iconName = 'x-twitter';
var width = 512;
var height = 512;
var aliases = [];
var unicode = 'e61b';
var svgPathData = 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z';

exports.DF = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.NC = exports.DF;
__webpack_unused_export__ = prefix;
__webpack_unused_export__ = iconName;
__webpack_unused_export__ = width;
__webpack_unused_export__ = height;
__webpack_unused_export__ = aliases;
__webpack_unused_export__ = unicode;
__webpack_unused_export__ = svgPathData;
__webpack_unused_export__ = aliases;

/***/ }),

/***/ 8138:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var prefix = 'fab';
var iconName = 'youtube';
var width = 576;
var height = 512;
var aliases = [61802];
var unicode = 'f167';
var svgPathData = 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z';

exports.DF = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.op = exports.DF;
__webpack_unused_export__ = prefix;
__webpack_unused_export__ = iconName;
__webpack_unused_export__ = width;
__webpack_unused_export__ = height;
__webpack_unused_export__ = aliases;
__webpack_unused_export__ = unicode;
__webpack_unused_export__ = svgPathData;
__webpack_unused_export__ = aliases;

/***/ }),

/***/ 6759:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var source = __webpack_require__(8645);
exports.DF = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports.yh = exports.DF;
__webpack_unused_export__ = source.prefix;
__webpack_unused_export__ = source.iconName;
__webpack_unused_export__ = source.width;
__webpack_unused_export__ = source.height;
__webpack_unused_export__ = source.aliases;
__webpack_unused_export__ = source.unicode;
__webpack_unused_export__ = source.svgPathData;
__webpack_unused_export__ = source.aliases;

/***/ }),

/***/ 1308:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var source = __webpack_require__(7677);
exports.DF = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports._q = exports.DF;
__webpack_unused_export__ = source.prefix;
__webpack_unused_export__ = source.iconName;
__webpack_unused_export__ = source.width;
__webpack_unused_export__ = source.height;
__webpack_unused_export__ = source.aliases;
__webpack_unused_export__ = source.unicode;
__webpack_unused_export__ = source.svgPathData;
__webpack_unused_export__ = source.aliases;

/***/ }),

/***/ 8645:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'far';
var iconName = 'circle-chevron-down';
var width = 512;
var height = 512;
var aliases = ["chevron-circle-down"];
var unicode = 'f13a';
var svgPathData = 'M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241L239 345c9.4 9.4 24.6 9.4 33.9 0L377 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87-87-87c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faCircleChevronDown = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 7677:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'far';
var iconName = 'circle-chevron-up';
var width = 512;
var height = 512;
var aliases = ["chevron-circle-up"];
var unicode = 'f139';
var svgPathData = 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271L273 167c-9.4-9.4-24.6-9.4-33.9 0L135 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l87-87 87 87c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faCircleChevronUp = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 3718:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var prefix = 'far';
var iconName = 'circle-info';
var width = 512;
var height = 512;
var aliases = ["info-circle"];
var unicode = 'f05a';
var svgPathData = 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z';

exports.DF = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.DB = exports.DF;
__webpack_unused_export__ = prefix;
__webpack_unused_export__ = iconName;
__webpack_unused_export__ = width;
__webpack_unused_export__ = height;
__webpack_unused_export__ = aliases;
__webpack_unused_export__ = unicode;
__webpack_unused_export__ = svgPathData;
__webpack_unused_export__ = aliases;

/***/ }),

/***/ 231:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var source = __webpack_require__(2050);
exports.DF = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports.JY = exports.DF;
__webpack_unused_export__ = source.prefix;
__webpack_unused_export__ = source.iconName;
__webpack_unused_export__ = source.width;
__webpack_unused_export__ = source.height;
__webpack_unused_export__ = source.aliases;
__webpack_unused_export__ = source.unicode;
__webpack_unused_export__ = source.svgPathData;
__webpack_unused_export__ = source.aliases;

/***/ }),

/***/ 5298:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var prefix = 'fas';
var iconName = 'caret-down';
var width = 320;
var height = 512;
var aliases = [];
var unicode = 'f0d7';
var svgPathData = 'M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z';

exports.DF = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.eW = exports.DF;
__webpack_unused_export__ = prefix;
__webpack_unused_export__ = iconName;
__webpack_unused_export__ = width;
__webpack_unused_export__ = height;
__webpack_unused_export__ = aliases;
__webpack_unused_export__ = unicode;
__webpack_unused_export__ = svgPathData;
__webpack_unused_export__ = aliases;

/***/ }),

/***/ 4226:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var prefix = 'fas';
var iconName = 'caret-up';
var width = 320;
var height = 512;
var aliases = [];
var unicode = 'f0d8';
var svgPathData = 'M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z';

exports.DF = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.l1 = exports.DF;
__webpack_unused_export__ = prefix;
__webpack_unused_export__ = iconName;
__webpack_unused_export__ = width;
__webpack_unused_export__ = height;
__webpack_unused_export__ = aliases;
__webpack_unused_export__ = unicode;
__webpack_unused_export__ = svgPathData;
__webpack_unused_export__ = aliases;

/***/ }),

/***/ 903:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var prefix = 'fas';
var iconName = 'check';
var width = 448;
var height = 512;
var aliases = [10003,10004];
var unicode = 'f00c';
var svgPathData = 'M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z';

exports.DF = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.LE = exports.DF;
__webpack_unused_export__ = prefix;
__webpack_unused_export__ = iconName;
__webpack_unused_export__ = width;
__webpack_unused_export__ = height;
__webpack_unused_export__ = aliases;
__webpack_unused_export__ = unicode;
__webpack_unused_export__ = svgPathData;
__webpack_unused_export__ = aliases;

/***/ }),

/***/ 2050:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'circle-right';
var width = 512;
var height = 512;
var aliases = [61838,"arrow-alt-circle-right"];
var unicode = 'f35a';
var svgPathData = 'M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faCircleRight = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 4254:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var source = __webpack_require__(9066);
exports.DF = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports.YI = exports.DF;
__webpack_unused_export__ = source.prefix;
__webpack_unused_export__ = source.iconName;
__webpack_unused_export__ = source.width;
__webpack_unused_export__ = source.height;
__webpack_unused_export__ = source.aliases;
__webpack_unused_export__ = source.unicode;
__webpack_unused_export__ = source.svgPathData;
__webpack_unused_export__ = source.aliases;

/***/ }),

/***/ 3253:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var source = __webpack_require__(1402);
exports.DF = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports.Eg = exports.DF;
__webpack_unused_export__ = source.prefix;
__webpack_unused_export__ = source.iconName;
__webpack_unused_export__ = source.width;
__webpack_unused_export__ = source.height;
__webpack_unused_export__ = source.aliases;
__webpack_unused_export__ = source.unicode;
__webpack_unused_export__ = source.svgPathData;
__webpack_unused_export__ = source.aliases;

/***/ }),

/***/ 4372:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var prefix = 'fas';
var iconName = 'envelope';
var width = 512;
var height = 512;
var aliases = [128386,9993,61443];
var unicode = 'f0e0';
var svgPathData = 'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z';

exports.DF = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.FU = exports.DF;
__webpack_unused_export__ = prefix;
__webpack_unused_export__ = iconName;
__webpack_unused_export__ = width;
__webpack_unused_export__ = height;
__webpack_unused_export__ = aliases;
__webpack_unused_export__ = unicode;
__webpack_unused_export__ = svgPathData;
__webpack_unused_export__ = aliases;

/***/ }),

/***/ 9596:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var source = __webpack_require__(3540);
exports.DF = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports.Xj = exports.DF;
__webpack_unused_export__ = source.prefix;
__webpack_unused_export__ = source.iconName;
__webpack_unused_export__ = source.width;
__webpack_unused_export__ = source.height;
__webpack_unused_export__ = source.aliases;
__webpack_unused_export__ = source.unicode;
__webpack_unused_export__ = source.svgPathData;
__webpack_unused_export__ = source.aliases;

/***/ }),

/***/ 7050:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var prefix = 'fas';
var iconName = 'location-dot';
var width = 384;
var height = 512;
var aliases = ["map-marker-alt"];
var unicode = 'f3c5';
var svgPathData = 'M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z';

exports.DF = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.op = exports.DF;
__webpack_unused_export__ = prefix;
__webpack_unused_export__ = iconName;
__webpack_unused_export__ = width;
__webpack_unused_export__ = height;
__webpack_unused_export__ = aliases;
__webpack_unused_export__ = unicode;
__webpack_unused_export__ = svgPathData;
__webpack_unused_export__ = aliases;

/***/ }),

/***/ 5155:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'magnifying-glass';
var width = 512;
var height = 512;
var aliases = [128269,"search"];
var unicode = 'f002';
var svgPathData = 'M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faMagnifyingGlass = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 1402:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'message';
var width = 512;
var height = 512;
var aliases = ["comment-alt"];
var unicode = 'f27a';
var svgPathData = 'M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faMessage = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 7079:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var source = __webpack_require__(6086);
exports.DF = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports.DO = exports.DF;
__webpack_unused_export__ = source.prefix;
__webpack_unused_export__ = source.iconName;
__webpack_unused_export__ = source.width;
__webpack_unused_export__ = source.height;
__webpack_unused_export__ = source.aliases;
__webpack_unused_export__ = source.unicode;
__webpack_unused_export__ = source.svgPathData;
__webpack_unused_export__ = source.aliases;

/***/ }),

/***/ 6086:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'phone-flip';
var width = 512;
var height = 512;
var aliases = [128381,"phone-alt"];
var unicode = 'f879';
var svgPathData = 'M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faPhoneFlip = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 5633:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var prefix = 'fas';
var iconName = 'print';
var width = 512;
var height = 512;
var aliases = [128424,128438,9113];
var unicode = 'f02f';
var svgPathData = 'M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z';

exports.DF = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.wf = exports.DF;
__webpack_unused_export__ = prefix;
__webpack_unused_export__ = iconName;
__webpack_unused_export__ = width;
__webpack_unused_export__ = height;
__webpack_unused_export__ = aliases;
__webpack_unused_export__ = unicode;
__webpack_unused_export__ = svgPathData;
__webpack_unused_export__ = aliases;

/***/ }),

/***/ 6303:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var source = __webpack_require__(3872);
exports.DF = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports.Tw = exports.DF;
__webpack_unused_export__ = source.prefix;
__webpack_unused_export__ = source.iconName;
__webpack_unused_export__ = source.width;
__webpack_unused_export__ = source.height;
__webpack_unused_export__ = source.aliases;
__webpack_unused_export__ = source.unicode;
__webpack_unused_export__ = source.svgPathData;
__webpack_unused_export__ = source.aliases;

/***/ }),

/***/ 367:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var source = __webpack_require__(5155);
exports.DF = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports.wn = exports.DF;
__webpack_unused_export__ = source.prefix;
__webpack_unused_export__ = source.iconName;
__webpack_unused_export__ = source.width;
__webpack_unused_export__ = source.height;
__webpack_unused_export__ = source.aliases;
__webpack_unused_export__ = source.unicode;
__webpack_unused_export__ = source.svgPathData;
__webpack_unused_export__ = source.aliases;

/***/ }),

/***/ 3872:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'square-rss';
var width = 448;
var height = 512;
var aliases = ["rss-square"];
var unicode = 'f143';
var svgPathData = 'M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm0 120a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faSquareRss = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 8132:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var prefix = 'fas';
var iconName = 'star-sharp';
var width = 576;
var height = 512;
var aliases = [];
var unicode = 'e28b';
var svgPathData = 'M310.9 16.7C307.7 6.8 298.5 0 288 0s-19.7 6.8-22.9 16.7L214.5 176H56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L172.1 320.7 121.1 480.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L288 406.4 417.3 506.9c8.3 6.5 19.8 6.8 28.5 .7s12.3-16.9 9.1-27L403.9 320.7 534.7 218.9c8.1-6.3 11.3-17 8-26.7s-12.4-16.2-22.7-16.2H361.5L310.9 16.7z';

exports.DF = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.dH = exports.DF;
__webpack_unused_export__ = prefix;
__webpack_unused_export__ = iconName;
__webpack_unused_export__ = width;
__webpack_unused_export__ = height;
__webpack_unused_export__ = aliases;
__webpack_unused_export__ = unicode;
__webpack_unused_export__ = svgPathData;
__webpack_unused_export__ = aliases;

/***/ }),

/***/ 3540:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'up-right-from-square';
var width = 512;
var height = 512;
var aliases = ["external-link-alt"];
var unicode = 'f35d';
var svgPathData = 'M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faUpRightFromSquare = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 9066:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'xmark';
var width = 384;
var height = 512;
var aliases = [128473,10005,10006,10060,215,"close","multiply","remove","times"];
var unicode = 'f00d';
var svgPathData = 'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faXmark = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 9742:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, (validLen === -1) validLen = len

  var placeHoldersLen = valv 1o s.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 8764:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(9742)
var ieee754 = __webpack_require__(645)
var customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browssetPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Bffer
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8 argument must be of type string. Received type number'
       'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
/"typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(sizl{
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent tog r8umh | 0
}

function Stion isBuffer (b)  len; ++i) {
    if (  case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        Buffer.from(buf).copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new h ? -1 : utf8ToBytes(string).lenedCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances: https://github.com/ferossow new RangeError('Buffer se must be a multiple of 32-< len; i += 8) {
    swap(thi.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(thi{
  if (!Buffer.isBuffer(b))YTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return  !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffe f (read(arr, i + j) !== read(  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = frh; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - ofiength)
}

function ucs2WriedCase) throw new TypeError f00)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272 r dame as node.js)
  for (varwBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instanc offset < 0) throw new RangeError('offset is not uint')
  if ar val = this[offset]
  var mul = 1
  var i = 0
  while (++i s[offset + --byteLength]
  var mul = 1
  while (byteLength UInt8 = function readUInt8 (offset, noAssert) {
  offset = offset (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) ch (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) ch4, this.length)

  return ((this[offset]) |
      (this[offset + offset, 4, this.length)

  retength && (mul *= 0x100)) {
   > 0 && (mul *= 0x100)) {
      if (!noAssert) checkOffset(off!noAssert) checkOffset(offset, 2!noAssert) checkOffset(offset, 2ffset(offset, 4, this.length)

 ffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = oovalue < min) throw new RangeError('"value" argument is out of bffset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x10is[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0xue = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[ if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[t + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[t] = (value >>> 24)
  this[offs 0 && this[offset + i - 1] !==  0 && this[offset + i + 1] !==ssert) checkInt(this, value, offsnoAssert) checkInt(this, value, onoAssert) checkInt(this, value, ot] = (value & 0xff)
  this[offsettx, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAsserue, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleL
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writestart, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fil'" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
    ot -  {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts j.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable; i < 16; ++i) {
    var i16 = i * _AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ __webpack_exports__.Z = (clsx);

/***/ }),

/***/ 8346:
/***/ (function(module,pack_require__) {

__wack_exports, __webpackequire__(4668);
__webpack_require__(7727);
__webpack_require__(8783);
var path = __webpack_require__(857);

module.exports = path.Promise;


/***/ }),

/***/ 3867:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* unused reexport */ __webpack_require__(6470);


/***/ }),

/***/ 6470:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(8346);
__webpack_require__(5794);
// TODO: Remove from `core-js@4`
__webpack_require__(8628);
__webpack_require__(7314);
__webpack_require__(7479);
__webpack_require__(6290);

module.exports = parent;


/***/ }),

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument)ction (argument) {
  irgument == 'object' ||l)
  });
}

// add a k
module.exports = funcexports = function (ard(true),
  // `Array.pod(6),
  // `Array.pre, __unused_webpack_ex;
    else if (isObjece
module.exports = fun: ITERATION_SUPPORT = his({}.toString);
var classofRaw(O)
    // key) && !(exceptions & eslint-disable-next-l// https://tc39.es/ecmyModule.f(object, key, value) {
  return {
 rue });
  if (descriptalue,
      enumerableerty(global, key, { vaes/no-object-defineproLDDA = typeof documenect(document) && isObjngList: 0,
  SVGTransfctor && classList.cons_NODE = __webpack_requ/ (function(module) {
re__) {

var userAgent = __webpack_require__(8113);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';


/***/ }),

/***/ 6833:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(8113);

// eslint-k_require__) {

var clebpack_exports, __webp

/***/ }),

/***/ 811ch || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 2649:
/***/ (function(module, __unyThis = __webpack_require__(1702rts = [
  'constructorring' && !$Error.prepaStackTrace) captureSta/no-object-defineprope) {
      createNonEnu93:
/***/ (function(mo typeof Reflect == 'ob  return that === unde);
  // eslint-disabler call = Function.protcriptor(FunctionPrototptor -- safe
    returcore-js/issues/1128
  
module.exports = NATIon (namespace, method)n (it) {
  if (!isNulllable(iteratorMethod))62/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(fu 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslinne es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  able-next-line no-con_exports, __webpack_rety -- required for tesn !$Object('z').propere.inspectSource)) {
  unction (O, options) {    return hasOwn(it, ray iterator
module.ex-line es/no-array-isa{
  return typeof argurModern(Object)
    ||};

var data = isForce
// https://tc39.es/e it !== null : isCallaeturn typeof it == 'ob : function (it) {
    }
    if (typeof resrResult = error;
  }
 setToStringTag(IteratoneBuiltIn(IterableProt{
    return this;
  }torPrototype,
  BUGGY_` abstract operation
/ing = makeBuiltIn(funcnext-line es/no-math-tsk(flush);
    };
  }
act operation
// https.exports = function (a) {
      key = keysO] = O;
  } else resulys.length;
  var index || 'set' in Attribute  } catch (error) { /*tynames -- safe
exportbpack_module, exports)r) && object instanceosed_webpack_exports, _keys
  while (names.leble-next-line es/no-obable(V) {
  var descri   aPossiblePrototypetotype.tostring
modulele(fn = input.toStringgetOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 857:
/***/ (function(module,function (exec) {
  trle.exports = {
  CONSTnction(module, __unuseiseCapability = newPreckCorrectnessOfIteratr next = this.head = eectcoercible
module.exIES]) {
    defineBuile;
  if (target && !ha__webpack_require__(97uire__(3072);

var SHA (zloirock.ru)',
  licO).constructor;
  var eMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 6293:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);
var global = __webpack_require__(7854);

var $String = global.Stril) ||
    // Chrome 38-40 symbolssers
  } else {
    deon (index, length) {
 equireObjectCoercible  = +argument;
  // eslnction (argument) {
  tion
// https://tc39.eor("Can't convert objepropertykey
module.expTO_STRING_TAG = wellKnument) {
  if (classofing = String;

module.toString);

module.exp/
var NATIVE_SYMBOL = ing
  return Object.deror;

module.exports =le = __webpack_requireOL && hasOwn(Symbol, n//tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true, constructor: true, arity: 2 }, {
  AggregateError: $AggregateError
});


/***/ }),

/***/ 9170:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_requents.length > 1 ? arguRE && DESCRIPTORS && vbject-assign -- requir2/#sec-object.prototyp
      });
      --re
      });
      --rem(new AggregateError(er'];
  if (NativePromis_PROMISE_CONSTRUCTOR }  if (NativePromisePro3401);
__webpack_requiise).then(capability.
    var capability = n resolve(x) {
    retObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),

/***/ 8628:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(9170);


/***/ }),

/***/ 7314:
/***/ (function(__unused_webpack_tion(__unused_webpack_fn);
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});


/***/ }),

/***/ 5794:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var newPromiseCapabilityModule = __webpack_require__(8523);

// `Promise.w);
    return {
      promise: promi(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ 3200:
/***/ (function(module/***/ (function(modulenused_webpack_exports,, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ 4483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } :typeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var React = __webpack_require__(7294);
var PropTypes = __webpack_require__(5697);
var _require = __webpack_require__(5303),
  createFocusTrap = _require.createFocusTrap;
var _require2 = __webpack_require__(8388),
  isFocusable = _require2.isFocusable;
var FocusTrap = /*#__PURE__*/function (_React$Component) {
  _inherits(FocusTrap, _React$Component);
  var _super = _createSuper(FocusTrap);
  function FocusTrap(props) {
    var _this;
    _classCallCheck(this, FocusTrap);
    _this = _super.call(this, props);
    /**
     * Gets the node for the given option, which is expected to be an option that
     *  can be either a DOM node, a string that is a selector to get a node, `false`
     *  (if a node is explicitly NOT given), or a function that returns any of these
     *  values.
     * @param {string} optionName
     * @returns {undefined | false | HTMLElement | SVGElement} Returns
     *  `undefined` if the option is not specified; `false` if the option
     *  resolved to `false` (node explicitly not given); otherwise, the resolved
     *  DOM node.
     * @throws {Error} If the option is set, not `false`, and is not, or does not
     *  resolve to a node.
     */
    _defineProperty(_assertThisInitialized(_this), "getNodeForOption", function (optionName) {
      var _this$internalOptions;
      // use internal options first, falling back to original options
      var optionValue = (_this$internalOptions = this.internalOptions[optionName]) !== null && _this$internalOptions !== void 0 ? _this$internalOptions : this.originalOptions[optionName];
      if (typeof optionValue === 'function') {
        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          params[_key - 1] = arguments[_key];
        }
        optionValue = optionValue.apply(void 0, params);
      }
      if (optionValue === true) {
        optionValue = undefined; // use default value
      }

      if (!optionValue) {
        if (optionValue === undefined || optionValue === false) {
          return optionValue;
        }
        // else, empty string (invalid), null (invalid), 0 (invalid)

        throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
      }
      var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

      if (typeof optionValue === 'string') {
        var _this$getDocument;
        node = (_this$getDocument = this.getDocument()) === null || _this$getDocument === void 0 ? void 0 : _this$getDocument.querySelector(optionValue); // resolve to node, or null if fails
        if (!node) {
          throw new Error("`".concat(optionName, "` as selector refers to no known node"));
        }
      }
      return node;
    });
    _this.handleDeactivate = _this.handleDeactivate.bind(_assertThisInitialized(_this));
    _this.handlePostDeactivate = _this.handlePostDeactivate.bind(_assertThisInitialized(_this));
    _this.handleClickOutsideDeactivates = _this.handleClickOutsideDeactivates.bind(_assertThisInitialized(_this));

    // focus-trap options used internally when creating the trap
    _this.internalOptions = {
      // We need to hijack the returnFocusOnDeactivate option,
      // because React can move focus into the element before we arrived at
      // this lifecycle hook (e.g. with autoFocus inputs). So the component
      // captures the previouslyFocusedElement in componentWillMount,
      // then (optionally) returns focus to it in componentWillUnmount.
      returnFocusOnDeactivate: false,
      // the rest of these are also related to deactivation of the trap, and we
      //  need to use them and control them as well
      checkCanReturnFocus: null,
      onDeactivate: _this.handleDeactivate,
      onPostDeactivate: _this.handlePostDeactivate,
      // we need to special-case this setting as well so that we can know if we should
      //  NOT return focus if the trap gets auto-deactivated as the result of an
      //  outside click (otherwise, we'll always think we should return focus because
      //  of how we manage that flag internally here)
      clickOutsideDeactivates: _this.handleClickOutsideDeactivates
    };

    // original options provided by the consumer
    _this.originalOptions = {
      // because of the above `internalOptions`, we maintain our own flag for
      //  this option, and default it to `true` because that's focus-trap's default
      returnFocusOnDeactivate: true,
      // because of the above `internalOptions`, we keep these separate since
      //  they're part of the deactivation process which we configure (internally) to
      //  be shared between focus-trap and focus-trap-react
      onDeactivate: null,
      onPostDeactivate: null,
      checkCanReturnFocus: null,
      // the user's setting, defaulted to false since focus-trap defaults this to false
      clickOutsideDeactivates: false
    };
    var focusTrapOptions = props.focusTrapOptions;
    for (var optionName in focusTrapOptions) {
      if (!Object.prototype.hasOwnProperty.call(focusTrapOptions, optionName)) {
        continue;
      }
      if (optionName === 'returnFocusOnDeactivate' || optionName === 'onDeactivate' || optionName === 'onPostDeactivate' || optionName === 'checkCanReturnFocus' || optionName === 'clickOutsideDeactivates') {
        _this.originalOptions[optionName] = focusTrapOptions[optionName];
        continue; // exclude from internalOptions
      }

      _this.internalOptions[optionName] = focusTrapOptions[optionName];
    }

    // if set, `{ target: Node, allowDeactivation: boolean }` where `target` is the outside
    //  node that was clicked, and `allowDeactivation` is the result of the consumer's
    //  option (stored in `this.originalOptions.clickOutsideDeactivates`, which may be a
    //  function) whether to allow or deny auto-deactivation on click on this outside node
    _this.outsideClick = null;

    // elements from which to create the focus trap on mount; if a child is used
    //  instead of the `containerElements` prop, we'll get the child's related
    //  element when the trap renders and then is declared 'mounted'
    _this.focusTrapElements = props.containerElements || [];

    // now we remember what the currently focused element is, not relying on focus-trap
    _this.updatePreviousElement();
    return _this;
  }

  /**
   * Gets the configured document.
   * @returns {Document|undefined} Configured document, falling back to the main
   *  document, if it exists. During SSR, `undefined` is returned since the
   *  document doesn't exist.
   */
  _createClass(FocusTrap, [{
    key: "getDocument",
    value: function getDocument() {
      // SSR: careful to check if `document` exists before accessing it as a variable
      return this.props.focusTrapOptions.document || (typeof document !== 'undefined' ? document : undefined);
    }
  }, {
    key: "getReturnFocusNode",
    value: function getReturnFocusNode() {
      var node = this.getNodeForOption('setReturnFocus', this.previouslyFocusedElement);
      return node ? node : node === false ? false : this.previouslyFocusedElement;
    }

    /** Update the previously focused element with the currently focused element. */
  }, {
    key: "updatePreviousElement",
    value: function updatePreviousElement() {
      var currentDocument = this.getDocument();
      if (currentDocument) {
        this.previouslyFocusedElement = currentDocument.activeElement;
      }
    }
  }, {
    key: "deactivateTrap",
    value: function deactivateTrap() {
      // NOTE: it's possible the focus trap has already been deactivated without our knowing it,
      //  especially if the user set the `clickOutsideDeactivates: true` option on the trap,
      //  and the mouse was clicked on some element outside the trap; at that point, focus-trap
      //  will initiate its auto-deactivation process, which will call our own
      //  handleDeactivate(), which will call into this method
      if (!this.focusTrap || !this.focusTrap.active) {
        return;
      }
      this.focusTrap.deactivate({
        // NOTE: we never let the trap return the focus since we do that ourselves
        returnFocus: false,
        // we'll call this in our own post deactivate handler so make sure the trap doesn't
        //  do it prematurely
        checkCanReturnFocus: null,
        // let it call the user's original deactivate handler, if any, instead of
        //  our own which calls back into this function
        onDeactivate: this.originalOptions.onDeactivate
        // NOTE: for post deactivate, don't specify anything so that it calls the
        //  onPostDeactivate handler specified on `this.internalOptions`
        //  which will always be our own `handlePostDeactivate()` handler, which
        //  will finish things off by calling the user's provided onPostDeactivate
        //  handler, if any, at the right time
        // onPostDeactivate: NOTHING
      });
    }
  }, {
    key: "handleClickOutsideDeactivates",
    value: function handleClickOutsideDeactivates(event) {
      // use consumer's option (or call their handler) as the permission or denial
      var allowDeactivation = typeof this.originalOptions.clickOutsideDeactivates === 'function' ? this.originalOptions.clickOutsideDeactivates.call(null, event) // call out of context
      : this.originalOptions.clickOutsideDeactivates; // boolean

      if (allowDeactivation) {
        // capture the outside target that was clicked so we can use it in the deactivation
        //  process since the consumer allowed it to cause auto-deactivation
        this.outsideClick = {
          target: event.target,
          allowDeactivation: allowDeactivation
        };
      }
      return allowDeactivation;
    }
  }, {
    key: "handleDeactivate",
    value: function handleDeactivate() {
      if (this.originalOptions.onDeactivate) {
        this.originalOptions.onDeactivate.call(null); // call user's handler out of context
      }

      this.deactivateTrap();
    }
  }, {
    key: "handlePostDeactivate",
    value: function handlePostDeactivate() {
      var _this2 = this;
      var finishDeactivation = function finishDeactivation() {
        var returnFocusNode = _this2.getReturnFocusNode();
        var canReturnFocus = !!(
        // did the consumer allow it?

        _this2.originalOptions.returnFocusOnDeactivate && // can we actually focus the node?
        returnFocusNode !== null && returnFocusNode !== void 0 && returnFocusNode.focus && (
        // was there an outside click that allowed deactivation?
        !_this2.outsideClick ||
        // did the consumer allow deactivation when the outside node was clicked?
        _this2.outsideClick.allowDeactivation &&
        // is the outside node NOT focusable (implying that it did NOT receive focus
        //  as a result of the click-through) -- in which case do NOT restore focus
        //  to `returnFocusNode` because focus should remain on the outside node
        !isFocusable(_this2.outsideClick.target, _this2.internalOptions.tabbableOptions))

        // if no, the restore focus to `returnFocusNode` at this point
        );

        var _this2$internalOption = _this2.internalOptions.preventScroll,
          preventScroll = _this2$internalOption === void 0 ? false : _this2$internalOption;
        if (canReturnFocus) {
          // return focus to the element that had focus when the trap was activated
          returnFocusNode.focus({
            preventScroll: preventScroll
          });
        }
        if (_this2.originalOptions.onPostDeactivate) {
          _this2.originalOptions.onPostDeactivate.call(null); // don't call it in context of "this"
        }

        _this2.outsideClick = null; // reset: no longer needed
      };

      if (this.originalOptions.checkCanReturnFocus) {
        this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()) // call out of context
        .then(finishDeactivation, finishDeactivation);
      } else {
        finishDeactivation();
      }
    }
  }, {
    key: "setupFocusTrap",
    value: function setupFocusTrap() {
      if (this.focusTrap) {
        // trap already exists: it's possible we're in StrictMode and we're being remounted,
        //  in which case, we will have deactivated the trap when we got unmounted (remember,
        //  StrictMode, in development, purposely unmounts and remounts components after
        //  mounting them the first time to make sure they have reusable state,
        //  @see https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state) so now
        //  we need to restore the state of the trap according to our component state
        // NOTE: Strict mode __violates__ assumptions about the `componentWillUnmount()` API
        //  which clearly states -- even for React 18 -- that, "Once a component instance is
        //  unmounted, __it will never be mounted again.__" (emphasis ours). So when we get
        //  unmounted, we assume we're gone forever and we deactivate the trap. But then
        //  we get remounted and we're supposed to restore state. But if you had paused,
        //  we've now deactivated (we don't know we're amount to get remounted again)
        //  which means we need to reactivate and then pause. Otherwise, do nothing.
        if (this.props.active && !this.focusTrap.active) {
          this.focusTrap.activate();
          if (this.props.paused) {
            this.focusTrap.pause();
          }
        }
      } else {
        var nodesExist = this.focusTrapElements.some(Boolean);
        if (nodesExist) {
          // eslint-disable-next-line react/prop-types -- _createFocusTrap is an internal prop
          this.focusTrap = this.props._createFocusTrap(this.focusTrapElements, this.internalOptions);
          if (this.props.active) {
            this.focusTrap.activate();
          }
     o
      //  activate until they have obtained the document from a ref)
      //  @see https://github.com/focus-trap/focus-trap-react/issues/539
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.focusTrap) {
        if (prevProps.containerElements !== this.props.containerElements) {
          this.focusTrap.updateContainerElements(this.props.containerElements);
        }
        var hasActivated = !prevProps.active && this.props.active;
        var hasDeactivated = prevProps.active && !this.props.active;
        var hasPaused = !prevProps.paused && this.props.paused;
        var hasUnpaused = prevProps.paused && !this.props.paused;
        if (hasActivated) {
          this.updatePreviousElement();
          this.focusTrap.activate();
        }
        if (hasDeactivated) {
          this.deactivateTrap();
          return; // un/pause does nothing on an inactive trap
        }

        if (hasPaused) {
          this.focusTrap.pause();
        }
        if (hasUnpaused) {
          this.focusTrap.unpause();
        }
      } else {
        // NOTE: if we're in `componentDidUpdate` and we don't have a trap yet,
        //  it either means it shouldn't be active, or it should be but none of
        //  of given `containerElements` were present in the DOM the last time
        //  we tried to create the trap

        if (prevProps.containerElements !== this.props.containerElements) {
          this.focusTrapElements = this.props.containerElements;
        }

        // don't create the trap unless it should be active in case the consumer
        //  is still updating `focusTrapOptions`
        //  @see https://github.com/focus-trap/focus-trap-react/issues/539
        if (this.props.active) {
          this.updatePreviousElement();
          this.setupFocusTrap();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.deactivateTrap();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var child = this.props.children ? React.Children.only(this.props.children) : undefined;
      if (child) {
        if (child.type && child.type === React.Fragment) {
          throw new Error('A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.');
        }
        var callbackRef = function callbackRef(element) {
          var containerElements = _this3.props.containerElements;
          if (child) {
            if (typeof child.ref === 'function') {
              child.ref(element);
            } else if (child.ref) {
              child.ref.current = element;
            }
          }
          _this3.focusTrapElements = containerElements ? containerElements : [element];
        };
        var childWithRef = React.cloneElement(child, {
          ref: callbackRef
        });
        return childWithRef;
      }
      return null;
    }
  }]);
  return FocusTrap;
}(React.Component); // support server-side rendering where `Element` will not be defined
var ElementType = typeof Element === 'undefined' ? Function : Element;
FocusTrap.propTypes = {
  active: PropTypes.bool,
  paused: PropTypes.bool,
  focusTrapOptions: PropTypes.shape({
    document: PropTypes.object,
    onActivate: PropTypes.func,
    onPostActivate: PropTypes.func,
    checkCanFocusTrap: PropTypes.func,
    onPause: PropTypes.func,
    onPostPause: PropTypes.func,
    onUnpause: PropTypes.func,
    onPostUnpause: PropTypes.func,
    onDeactivate: PropTypes.func,
    onPostDeactivate: PropTypes.func,
    checkCanReturnFocus: PropTypes.func,
    initialFocus: PropTypes.oneOfType([PropTypes.instanceOf(ElementType), PropTypes.string, PropTypes.bool, PropTypes.func]),
    fallbackFocus: PropTypes.oneOfType([PropTypes.instanceOf(ElementType), PropTypes.string,
    // NOTE: does not support `false` as value (or return value from function)
    PropTypes.func]),
    escapeDeactivates: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    clickOutsideDeactivates: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    returnFocusOnDeactivate: PropTypes.bool,
    setReturnFocus: PropTypes.oneOfType([PropTypes.instanceOf(ElementType), PropTypes.string, PropTypes.bool, PropTypes.func]),
    allowOutsideClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    preventScroll: PropTypes.bool,
    tabbableOptions: PropTypes.shape({
      displayCheck: PropTypes.oneOf(['full', 'legacy-full', 'non-zero-area', 'none']),
      getShadowRoot: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
    }),
    trapStack: PropTypes.array,
    isKeyForward: PropTypes.func,
    isKeyBackward: PropTypes.func
  }),
  containerElements: PropTypes.arrayOf(PropTypes.instanceOf(ElementType)),
  // DOM element ONLY
  children: PropTypes.oneOfType([PropTypes.element,
  // React element
  PropTypes.instanceOf(ElementType) // DOM element
  ])

  // NOTE: _createFocusTrap is internal, for testing purposes only, so we don't
  //  specify it here. It's expected to be set to the function returned from
  //  require('focus-trap'), or one with a compatible interface.
};

FocusTrap.defaultProps = {
  active: true,
  paused: false,
  focusTrapOptions: {},
  _createFocusTrap: createFocusTrap
};
module.exports = FocusTrap;

/***/ }),

/***/ 5303:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFocusTrap: function() { return /* binding */ createFocusTrap; }
/* harmony export */ });
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8388);
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/


function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
  g : Number)(input);
}
function _toProperty;
    } else {
    ndex !== -1) {
      trapStbleInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};
var isEscapeEvent = function isEscapeEvent(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === 'Escape' || (e === null || e === void 0 ? void 0 : e.key) === 'Esc' || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
};
var isTabEvent = function isTabEvent(e) {
  return (e === null || e = ? void 0 : e.keyCode) === 9;
};

// checks for TAB by deent(e) && !e.r isKeyBackward = function isKeyBackward(e) {
  return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
  return ser.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }

    return true; // next
  });

  return idx;
};

/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] An= 1; _key < _len; _key+0] === event.target always).
  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};

// NOTE: this must be _outside_ `createFocusTrap()` to make sure all traps in this
//  current instance use the same stack if `userOptions.trapStack` isn't specified
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
  // SSR: a live trap shouldn't be created in this type of environment so this
  //  should be safe code to execute if the `document` option isn't specified
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isKeyForward: isKeyForward,
    isKeyBackward: isKeyBackward
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list

    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: undefined,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: undefined
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  /**
   * Gets a configuration option value.
   * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
   *  value will be taken from this object. Otherwise, value will be taken from base configuration.
   * @param {string} optionName Name of the option whose value is sought.
   * @param {string|undefined} [configOptionName] Name ofgOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  /**
   * Finds the index of the container that contains the element.
   * @param {HTMLElement} element
   * @param {Event} [event] If available, and `element` isn't directly found in any container,
   *  the event's composed path is used to see if includes any known trap containers in the
   *  case where the element is inside a Shadow DOM.
   * @returns {number} Index of the container in either `state.containers` or
   *  `state.containerGroups` (the order/length of these lists are the same); -1
   *  if the element isn't found.
   */
  var findContainerIndex = function findContainerIndex(element, event) {
    var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === 'function' ? event.composedPath() : undefined;
    // NOTE: search `containerGroups` because it's possible a group contains no tabbable
    //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
    //  and we still need to find the element in there
    return state.containerGroups.findIndex(function (_ref) {
      var container = _ref.container,
        tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || ( // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside wcomposedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function (node) {
        return node === element;
      });
    });
  };

  /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @returns {undefined | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `false` if the option
   *  resolved to `false` (node explicitly not given); otherwise, the resolved
  fails
      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getNodeForOption('initialFocus');

    // false explicitly indicates we want no initialFocus at all
    if (node === false) {
      return false;
    }
    if (node === undefined || !(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(node, config.tabbableOptions)) {
      // option not specified nor focusable: use fallback options
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;

        // NOTE: `fallbackFocus` option function cannot return `false` (not supported)
        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }
    }
    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes() {
    state.containerGroups = state.containers.map(function (container) {
      var tabbableNodes = (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.tabbable)(container, config.tabbableOptions);

      // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
      //  are a superset of tabbable nodes since nodes with negative `tabindex` attributes
      //  are focusable but not tabbable
      var focusableNodes = (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.focusable)(container, config.tabbableOptions);
      var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : undefined;
      var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : undefined;
      var firstDomTabbableNode = focusableNodes.find(function (node) {
        return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(node);
      });
      var lastDomTabbableNode = focusableNodes.slice().reverse().find(function (node) {
        return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(node);
      });
      var posTabIndexesFound = !!tabbableNodes.find(function (node) {
        return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(node) > 0;
      });
      return {
        container: container,
        tabbableNodes: tabbableNodes,
        focusableNodes: focusableNodes,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: posTabIndexesFound,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: firstTabbableNode,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: lastTabbableNode,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: firstDomTabbableNode,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: lastDomTabbableNode,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var nodeIdx = tabbableNodes.indexOf(node);
          if (nodeIdx < 0) {
            // either not tabbable nor focusable, or was focused but not tabbable (negative tabindex):
            //  since `node` should at least have been focusable, we assume that's the case and mimic
            //  what browsers do, which is set focus to the next node in __document position order__,
            //  regardless of positive tabindexes, if any -- and for reasons explained in the NOTE
            //  above related to `firstDomTabbable` and `lastDomTabbable` properties, we fall back to
            //  basic DOM order
            if (forward) {
              return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function (el) {
                return (0,tabbable__WEBPACK_IMPORTEsableNodes.indexOf(node)).reverse().find(function (el) {
              return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(el);
            });
            }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function (group) {
      return group.tabbableNodes.length > 0;
    });

    // throw if no groups have tabbable nodes and we don't have a fallback focus node either
    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
    ) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }

    // NOTE: Positive tabindexes are only properly supported in single-container traps because
    //  doing it across multiple containers where tabindexes could be all over the place
    //  would require Tabbable to support multiple containers, would require additional
    //  specialized Shadow DOM support, and would require Tabbable's multi-container support
    //  to look at those containers in document position order rather than user-provided
    //  order (as they are treated in Focus-trap, for legacy reasons). See discussion on
    //  https://github.com/focus-trap/focus-trap/issues/375 for more details.
    if (state.containerGroups.find(function (g) {
      return g.posTabIndexesFound;
    }) && state.containerGroups.length > 1) {
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
    }
  };

  /**
   * Gets the current activeElement. If it's a web-component and has open shadow-root
   * it will recursively search inside shadow roots for the "true" activeElement.
   *
   * @param {Document | ShadowRoot} el
   *
   * @returns {HTMLElement} The element that currently has the focus
   **/
  var getActiveElement = function getActiveElement(el) {
    var activeElement = el.activeElement;
    if (!activeElement) {
      return;
    }
    if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) {
      return getActiveElement(activeElement.shadowRoot);
    }
    return activeElement;
  };
  var tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === getActiveElement(document)) {
      return;
    }
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    // NOTE: focus() API does not trigger focusIn event so set MRU    var node = getNodeForOption('setReturnFocus', previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  };

  /**
   * Finds the next node (in either direction) where focus should move according to a
   *  keyboard focus-in event.
   * @param {Object} params
   * @param {Node} [params.target] Known target __from which__ to navigate, if any.
   * @param {KeyboardEvent|FocusEvent} [params.event] Event to use if `target` isn't known (event
   *  will be used to determine the `target`). Ignored if `target` is specified.
   * @param {boolean} [params.isBackward] True if focus should move backward.
   * @returns {Node|undefined} The next node, or `undefined` if a next node couldn't be
   *  determined given the current state of the trap.
   */
  var findNextNavNode = function findNextNavNode(_ref2) {
    var target = _ref2.target,
      event = _ref2.event,
      _ref2$isBackward = _ref2.isBackward,
      isBackward = _ref2$isBackward === void 0 ? false : _ref2$isBackward;
    target = target || getActualTarget(event);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's focusable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findContainerIndex(target, event);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;
      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back into...
        if (isBackward) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        // REVERSE

        // is the target the first tabbable node in a group?
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var firstTabbableNode = _ref3.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target, config.tabbableOptions) && !(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          // an exception case where the target is either the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } e.tabbableGroups, function (_ref4) {
          var lastTabbableNode = _ref4.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target, config.tabbableOptions) && !(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          // an exception case where the target is the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      // no groups available
      // NOTE: the fallbackFocus option does not support returning false to opt-out
      destinationNode = getNodeForOption('fallbackFocus');
    }
    return destinationNode;
  };

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  var checkPointerDown = function checkPointerDown(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      // allow the click since it ocurred inside the trap
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config.returnFocusOnDeactivate
      });
      return;
    }

    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    }

    // otherwise, prevent the click
    e.preventDefault();
  };

  // In case focus escapes the trap for some strange reason, pull it back in.
  // NOTE: the focusIn event is NOT cancelable, so if focus escapes, it may cause unexpected
  //  scrolling if the node that got focused was out of view; there's nothing we can do to
  //  prevent that from happening by the time we discover that focus escaped
  var checkFocusIn = function checkFocusIn(event) {
    var target = getActualTarget(event);
    var targetContained = findContainerIndex(target, event) >= 0;

    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      // escaped! pull it back in to where it just left
      event.stopImmediatePropagation();

      // focus will escape if the MRU node had a positive tab index and user tried to nav forward;
      //  it will also escape if the MRU node had a 0 tab index and user tried to nav backward
      //  toward a node with a positive tab index
      var nextNode; // next node to focus, if we find one
      var navAcrossContainers = true;
      if (state.mostRecentlyFocusedNode) {
        if ((0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(state.mostRecentlyFocusedNode) > 0) {
          // MRU container index must be >=0 otherwise we wouldn't have it as an MRU node...
          var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
          // there MAY not be any tabbable nodes in the container if there are at least 2 containers
          //  and the MRU node is focusable but not tabbable (focus-trap requires at least 1 container
          //  with at least one tabbable node in order to function, so this could be the other container
          //  with nothing tabbable in it)
          var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
          if (tabbableNodes.length > 0) {
            // MRU tab index MAY not be found if the MRU node is focusable but not tabbable
            var mruTabIdx = tabbableNodes.findIndex(function (node) {
              return node === state.mostRecentlyFocusedNode;
            });
            if (mruTabIdx >= 0) {
              if (config.isKeyForward(state.recentNavEvent)) {
                if (mruTabIdx + 1 < tabbableNodes.length) {
                  nextNode = tabbableNodes[mruTabIdx + 1];
                  navAcrossContainers = false;
                }
                // else, don't wrap within the container as focus should move to next/previous
                //  container
              } else {
                if (mruTabIdx - 1 >= 0) {
                  nextNode = tabbableNodes[mruTabIdx - 1];
                  navAcrossContainers = false;
                }
                // else, don't wrap within the container as focus should move to next/previous
                //  container
              }
              // else, don't find in container order without considering direction too
            }
          }
          // else, no tabbable nodes in that container (which means we must have at least one other
          //  container with at least one tabbable node in it, otherwise focus-trap would've thrown
          //  an error the last time updateTabbableNodes() was run): find next node among all known
          //  containers
        } else {
          // check to see if there's at least one tabbable node with a positive tab index inside
          //  the trap because focus seems to escape when navigating backward from a tabbable node
          //  with tabindex=0 when this is the case (rn g.tabbableNodes.some(function (n) {
              return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(n) > 0;
            });
          })) {
            // no containers with tabbable nodes with positive tab indexes which means the focus
            //  escaped for some other reason and we should just execute the fallback to the
            //  MRU node or initial focus node, if any
            navAcrossContainers = false;
          }
        }
      } else {
        // no MRU node means we're likely in some initial condition when the trap has just
        //  been activated and initial focus hasn't been given yet, in which case we should
        //  fall through to trying to focus the initial focus node, which is what should
        //  happen below at this point in the logic
        navAcrossContainers = false;
      }
      if (navAcrossContainers) {
        nextNode = findNextNavNode({
          // move FROM the MRU node, not event-related node (which will be the node that is
          //  outside the trap causing the focus escape we're trying to fix)
          target: state.mostRecentlyFocusedNode,
          isBackward: config.isKeyBackward(state.recentNavEvent)
        });
      }
      if (nextNode) {
        tryFocus(nextNode);
      } else {
        tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    }
    state.recentNavEvent = undefined; // clear
  };

  // Hijack key nav events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  var checkKeyNav = function checkKeyNav(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    state.recentNavEvent = event;
    var destinationNode = findNextNavNode({
      event: event,
      isBackward: isBackward
    });
    if (destinationNode) {
      if (isTabEvent(event)) {
        // since tab natively moves focus, we wouldn't have a destination node unless we
        //  were on the edge of a container and had to move to the next/previous edge, in
        //  which case we want to prevent default to keep the browser from moving focus
        //  to where it normally would
        event.preventDefa  return;
    }
    if (config.isKeyForward(event) || config.isKeyBackward(event)) {
      checkKeyNav(event, config.isKeyBackward(event));
    }
  };
  var checkClick = function checkClick(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutside,
      passive: false
  nterDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap.from(mutation.removedNodes);
      return removedNodes.some(function (node) {
        return node === state.mostRecentlyFocusedNode;
      });
    });

    // If the currently focused is removed then browsers will move focus to the
    // <body> element. If this happens, try to move focus back into the trap.
    if (isFocusedNodeRemoved) {
      tryFocus(getInitialFocusNode());
    }
  };

  // Use MutationObserver - if supported - to detect if focused node is removed
  // from the DOM.
  var mutationObserver = typeof window !== 'undefined' && 'MutationObserver' in window ? new MutationObserver(checkDomRemoval) : undefined;
  var updateObservedNodes = function updateObservedNodes() {
  iners.map(function (container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList:

  //
  // TRAP DEFINITION
  //

  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      onActivate === null || onActivate === void 0 || onActivate();
      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        updateObservedNodes();
        onPostActivate === null || onPostActivate === void 0 || onPostActivate();
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer); // noop if undefined
      state.delayInitialFocusTimer = undefined;
      removeListeners();
      state.active = false;
      state.paused = false;
      updateObservedNodes();
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, 'onDeactivate');
      var onPostDeactivate = getOption(options, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
      var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');
      onDeactivate === null || onDeactivate === void 0 || onDeactivate();
      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (state.paused || !state.active) {
        return this;
      }
      var onPause = getOption(pauseOptions, 'onPause');
      var onPostPause = getOption(pauseOptions, 'onPostPause');
      state.paused = true;
      onPause === null || onPause === void 0 || onPause();
      removeListeners();
      updateObservedNodes();
      onPostPause === null || onPostPause === void 0 || onPostPause();
      return this;
    },
    unpause: function unpause(unpauseOptions) {
      if (!state.paused || !state.active) {
        return this;
      }
      var onUnpause = getOption(unpauseOptions, 'onUnpause');
      var onPostUnpause = getOption(unpauseOptions, 'onPostUnpause');
      state.paused = false;
      onUnpause === null || onUnpause === void 0 || onUnpause();
      updateTabbableNodes();
      addListeners();
      updateObservedNodes();
      onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
      return this;
    },
    updateContainerElements: function updateContainetate.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      updateObservedNodes();
      return this;
    }
  };

  // initialize container elements
  trap.updateContainerElements(elements);
  return trap;
};


//# sourceMappingURL=focus-trap.esm.js.map


/***/ }),

/***/ 2701:
/***/ (functire__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ components_FontAwesomeIcon; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faFacebookF.js
var faFacebookF = __webpack_require__(4470);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js
var faTwitter = __webpack_require__(1719);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faXTwitter.js
var faXTwitter = __webpack_require__(147);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/faYoutube.js
var faYoutube = __webpack_require__(8138);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-regular-svg-icons/index.mjs
var pro_regular_svg_icons = __webpack_require__(8779);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-regular-svg-icons/faChevronCircleDown.js
var faChevronCircleDown = __webpack_require__(6759);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-regular-svg-icons/faChevronCircleUp.js
var faChevronCircleUp = __webpack_require__(1308);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-regular-svg-icons/faCircleInfo.js
var faCircleInfo = __webpack_require__(3718);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faArrowAltCircleRight.js
var faArrowAltCircleRight = __webpack_require__(231);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faCaretDown.js
var faCaretDown = __webpack_require__(5298);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faCaretUp.js
var faCaretUp = __webpack_require__(4226);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faCheck.js
var faCheck = __webpack_require__(903);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faClose.js
var faClose = __webpack_require__(4254);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faCommentAlt.js
var faCommentAlt = __webpack_require__(3253);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faEnvelope.js
var faEnvelope = __webpack_require__(4372);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faExternalLinkAlt.js
var faExternalLinkAlt = __webpack_require__(9596);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faLocationDot.js
var faLocationDot = __webpack_require__(7050);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faPhoneAlt.js
var faPhoneAlt = __webpack_require__(7079);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faPrint.js
var faPrint = __webpack_require__(5633);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faRssSquare.js
var faRssSquare = __webpack_require__(6303);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faSearch.js
var faSearch = __webpack_require__(367);
// EXTERNAL MODULE: ./node_modules/@fortawesome/pro-solid-svg-icons/faStarSharp.js
var faStarSharp = __webpack_require__(8132);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.mjs
var fontawesome_svg_core = __webpack_require__(3636);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var beat = props.beat,
      fade = props.fade,
      beatFade = props.beatFade,
      bounce = props.bounce,
      shake = props.shake,
      flash = props.flash,
      spin = props.spin,
      spinPulse = props.spinPulse,
      spinReverse = props.spinReverse,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-beat': beat,
    'fa-fade': fade,
    'fa-beat-fade': beatFade,
    'fa-bounce': bounce,
    'fa-shake': shake,
    'fa-flash': flash,
    'fa-spin': spin,
    'fa-spin-reverse': spinReverse,
    'fa-spin-pulse': spinPulse,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip': flip === true,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // maray of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(str-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCa 1).toLowerCase() + string.substr(1);
}

var _excluded = ["styln val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, _excluded);

  mixins.attrs['style'] = _objectSpread2(_objectSpread2({}, mixins.attrs['style']), existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2(_objectSpread2({}, mixins.attrs), remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = "production" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }

  if (fontawesome_svg_core/* parse */.Qc.icon) {
    return fontawesome_svg_core/* parse */.Qc.icon(icon);
  } // if the icon is null, there's nothing to do


  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
 t, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

var FontAwesomeIcon = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title,
      titleId = props.titleId,
      maskId = props.maskId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? fontawesome_svg_core/* parse */.Qc.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = (0,fontawesome_svg_core/* icon */.qv)(iconLookup, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
    symbol: symbol,
    title: title,
    titleId: titleId,
    maskId: maskId
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: ref
  };
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
});
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  beat: (prop_types_default()).bool,
  border: (prop_types_default()).bool,
  beatFade: (prop_types_default()).bool,
  bounce: (prop_types_default()).bool,
  className: (prop_types_default()).string,
  fade: (prop_types_default()).bool,
  flash: (prop_types_default()).bool,
  mask: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).array, (prop_types_default()).string]),
  maskId: (prop_types_default()).string,
  fixedWidth: (prop_types_default()).bool,
  inverse: (prop_types_default()).bool,
  flip: prop_types_default().oneOf([true, false, 'horizontal', 'vertical', 'both']),
  icon: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).array, (prop_types_default()).string]),
  listItem: (prop_types_default()).bool,
  pull: prop_types_default().oneOf(['right', 'left']),
  pulse: (prop_types_default()).bool,
  rotation: prop_types_default().oneOf([0, 90, 180, 270]),
  shake: (prop_types_default()).bool,
  size: prop_types_default().oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: (prop_types_default()).bool,
  spinPulse: (prop_types_default()).bool,
  spinReverse: (prop_types_default()).bool,
  symbol: prop_types_default().oneOfType([(prop_types_default()).bool, (prop_types_default()).string]),
  title: (prop_types_default()).string,
  titleId: (prop_types_default()).string,
  transform: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  swapOpacity: (prop_types_default()).bool
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  maskId: null,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  spinPulse: false,
  spinReverse: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: '',
  titleId: null,
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, react.createElement);



;// CONCATENATED MODULE: ./src/components/FontAwesomeIcon/index.tsx
// example use in separate component
// <FAIcon icon="arrow-left" title="Arrow Left" prefix="fas" />
const icons=[faEnvelope/* faEnvelope */.FU,faPrint/* faPrint */.wf,faRssSquare/* faRssSquare */.Tw,faCheck/* faCheck */.LE,faLocationDot/* faLocationDot */.op,faPhoneAlt/* faPhoneAlt */.DO,faExternalLinkAlt/* faExternalLinkAlt */.Xj,faCaretUp/* faCaretUp */.l1,faCaretDown/* faCaretDown */.eW,faSearch/* faSearch */.wn,faArrowAltCircleRight/* faArrowAltCircleRight */.JY,faCommentAlt/* faCommentAlt */.Eg,faStarSharp/* faStarSharp */.dH,faClose/* faClose */.YI,faFacebookF/* faFacebookF */.AY,faTwitter/* faTwitter */.md,faXTwitter/* faXTwitter */.NC,faYoutube/* faYoutube */.op,faChevronCircleUp/* faChevronCircleUp */._q,faChevronCircleDown/* faChevronCircleDown */.yh,faCircleInfo/* faCircleInfo */.DB,pro_regular_svg_icons/* faArrowLeft */.acZ];const FAIcon=props=>{const iconDef=icons.find(i=>{var _i$icon$;return i.prefix===props.prefix&&(// icon[2] is the definition of the aliases for the icon
i.iconName===props.icon||((_i$icon$=i.icon[2])===null||_i$icon$===void 0?void 0:_i$icon$.includes(props.icon)));});if(iconDef)return/*#__PURE__*/react.createElement(FontAwesomeIcon,Object.assign({},props,{icon:iconDef,"aria-hidden":"true"}));throw new Error(`Unsupported icon: ${props.prefix} ${props.icon}`);};/* harmony default export */ var components_FontAwesomeIcon = (FAIcon);

/***/ }),

/***/ 7287:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7842);
const Glyphicon=props=>{const{icon,className,...iconProps}={...props};const glyphiconClass=`glyphicon ${icon.replaceAll("_","-")}`;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",Object.assign({},iconProps,{className:(0,_utils_string__WEBPACK_IMPORTED_MODULE_1__/* .classnames */ .dh)(glyphiconClass,className)}));};/* harmony default export */ __webpack_exports__.Z = (Glyphicon);

/***/ }),

/***/ 1372:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _components_FontAwesomeIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2701);
/* harmony import */ var _components_Glyphicon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7287);
const index=_ref=>{let{icon,...otherProps}=_ref;if(!icon)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null);if("field_fa_icon"in icon){var _ref2,_field_fa_icon$field_,_field_fa_icon$field_2;const field_fa_icon=icon;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_FontAwesomeIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,Object.assign({prefix:(_ref2=(_field_fa_icon$field_=field_fa_icon.field_fa_icon)===null||_field_fa_icon$field_===void 0?void 0:_field_fa_icon$field_.style)!==null&&_ref2!==void 0?_ref2:"fas",icon:(_field_fa_icon$field_2=field_fa_icon.field_fa_icon)===null||_field_fa_icon$field_2===void 0?void 0:_field_fa_icon$field_2.icon_name},otherProps));}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Glyphicon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,Object.assign({icon:icon.field_glyphicon},otherProps));};/* harmony default export */ __webpack_exports__.Z = (index);

/***/ }),

/***/ 1094:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ components_Link; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(4160);
// EXTERNAL MODULE: ./node_modules/react-dom/server.browser.js
var server_browser = __webpack_require__(7762);
// EXTERNAL MODULE: ./src/context/HeaderContext.tsx
var HeaderContext = __webpack_require__(5618);
// EXTERNAL MODULE: ./src/utils/analytics/index.ts + 6 modules
var analytics = __webpack_require__(848);
// EXTERNAL MODULE: ./src/utils/file.ts
var file = __webpack_require__(478);
// EXTERNAL MODULE: ./src/config/index.ts + 17 modules
var config = __webpack_require__(4692);
// EXTERNAL MODULE: ./src/hooks/index.ts + 13 modules
var hooks = __webpack_require__(1366);
// EXTERNAL MODULE: ./src/utils/url.ts
var url = __webpack_require__(2351);
;// CONCATENATED MODULE: ./src/utils/link.ts
const isExternalLink=href=>{if(!href.startsWith("http"))return false;const url=new URL(href);const isHcGovHost=url.host.includes(config/* default */.Z.BASE_DOMAIN.en)||url.host.includes(config/* default */.Z.BASE_DOMAIN.es);// even absolute links shouldn't be marked external if the host is ourself
return!isHcGovHost;};/**
 * This function determines if the provided url is one managed by the current
 * Gatsby site
 * @param href
 * @returns true if this Gatsby site created the url
 */const isGatsbyPage=href=>{const pages=(0,hooks/* useAllPages */.uW)();return pages.includes((0,url/* normalizeUrl */.D5)(href));};/**
 * This function determines if a url is the same as the current page url with
 * the addition of a hash
 * @param url
 * @returns true if pathnames match and href has '#'
 */const isJumpLink=url=>{if(typeof window==="undefined")return false;const hasHash=!!url.match(/^#[A-Za-z]*/g);if(!hasHash)return false;const currentUrl=new URL(window.location.href);if(!url.startsWith("http"))return url===currentUrl.pathname;const linkUrl=new URL(url);if(linkUrl.host!==currentUrl.host)return false;return linkUrl.pathname===currentUrl.pathname;};const isRelatedContentClick=href=>{if(typeof window==="undefined")return false;const currentUrl=new URL(window.location.href);const isGlossaryPage=!!currentUrl.pathname.match(/^\/glossary\//g);if(!isGlossaryPage)return false;const urls=[];const links=document.querySelectorAll(".related-content-header ~ ul a");links.forEach(link=>{var _link$getAttribute;return urls.push((_link$getAttribute=link===null||link===void 0?void 0:link.getAttribute("href"))!==null&&_link$getAttribute!==void 0?_link$getAttribute:"");});return urls.includes(href);};
// EXTERNAL MODULE: ./src/components/FontAwesomeIcon/index.tsx + 1 modules
var FontAwesomeIcon = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/context/ExternalLinkModalContext.tsx
var ExternalLinkModalContext = __webpack_require__(76);
// EXTERNAL MODULE: ./src/utils/hash.ts
var hash = __webpack_require__(2550);
;// CONCATENATED MODULE: ./src/utils/reactChildren.ts
/**
 * Gets the string type of the component or core html (JSX) element. React Fragments will return type 'react.fragment'. Priority will be given to the prop '__TYPE'.
 *
 * @param {ReactNode} component - The component to type check
 * @returns {string} - The string representation of the type
 */const typeOfComponent=component=>{// Rules out ReactText when component is a child
if(typeof component==="string"||typeof component==="number")return"react.text";if(Object.hasOwn(component,"props")){var _element$props,_element$props2;const element=component;if((_element$props=element.props)!==null&&_element$props!==void 0&&_element$props.__TYPE)return(_element$props2=element.props)===null||_element$props2===void 0?void 0:_element$props2.__TYPE;const elementType=element.type;if(typeof elementType==="string")return elementType;// eslint-disable-next-line @typescript-eslint/no-explicit-any
const constructor=elementType;return constructor.name;}return undefined;};/**
 * Gets first child by specified type. This function will check the prop '__TYPE' first and then the 'type' string to match core html elements. To find a React Fragment, search for type 'react.fragment'.
 *
 * @param {ReactNode} children - JSX children
 * @param {string[]} types - Types of children to match
 * @returns {Array<ReactNode>} - The first matching child
 * @example
 * // Finds the first occurrence of either a ToDo (custom component), a div, or a React FragmenrenByType=(children,types)=>react.Children.toArray(children).filter(child=>{const type=typeOfComponent(child);return type?types.includes(type):false;});
;// CONCATENATED MODULE: ./src/components/Link/externalLink.module.scss
// extracted by mini-css-extract-plugin
var icon = "externalLink-module--icon--3f442";
;// CONCATENATED MODULE: ./src/components/Link/ExternalLink.tsx
const ExternalLink=_ref=>{let{to,children,hideIcon=false,...props}=_ref;const{setOpen,setUrl}=(0,ExternalLinkModalContext/* useExternalLinkModalState */.dQ)();const url=new URL(to);let isImageLink=false;const imageChildren=getChildrenByType(children,["img","LearnImage","GatsbyImage","FAIcon"]);if(imageChildren.length>0){isImageLink=true;}return url.hostname.includes(".gov")?/*#__PURE__*/react.createElement("a",Object.assign({href:url.href,rel:"external",target:"_blank"},props),children):/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("a",Object.assign({href:url.href,onClick:e=>{e.preventDefault();setUrl(url.href);setOpen(true);}},props),children),!hideIcon&&!isImageLink&&/*#__PURE__*/react.createElement(FontAwesomeIcon/* default */.Z,{className:icon,title:"External Link",prefix:"fas",icon:"external-link-alt",titleId:`external-link-title-${(0,hash/* sha1Short */.m)(url.href)}`}));};/* harmony default export */ var Link_ExternalLink = (ExternalLink);
;// CONCATENATED MODULE: ./src/components/Link/index.tsx
// Override Link so that it always navigates to a path with a trailing slash for pages created by Gatsby.
const Link=props=>{const{setOpen}=(0,HeaderContext/* useHeaderState */.ri)();const{to,analyticsOverride,hideExternalLinkIcon,...restProps}=props;if(isExternalLink(to))return/*#__PURE__*/react.createElement(Link_ExternalLink,Object.assign({to:to,hideIcon:hideExternalLinkIcon},restProps));const normalizedTo=(0,url/* addTrailingSlash */.mi)(to);const clickHandler=e=>{if(props.onClick)props.onClick(e);if(analyticsOverride)analyticsOverride(normalizedTo);else{const linkContent=server_browser.renderToStaticMarkup(/*#__PURE__*/react.createElement(react.Fragment,null,restProps.children));if(isJumpLink(normalizedTo))(0,analytics/* sendJumpLinkEvent */.Vv)(linkContent,normalizedTo);if(isRelatedContentClick(normalizedTo))(0,analytics/* sendRelatedContentClick */.Fm)(linkContent,normalizedTo);else (0,analytics/* sendInternalClick */.u9)(linkContent,normalizedTo);}setOpen(false);};// Only Gatsby pages should use the normalized to
if(isGatsbyPage(normalizedTo)){// Gatsby doesn't handle opening links in new tab well so this case just uses a regular link
return(restProps===null||restProps===void 0?void 0:restProps.target)==="_blank"?/*#__PURE__*/react.createElement("a",Object.assign({},restProps,{href:normalizedTo,onClick:clickHandler})):/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,Object.assign({},restProps,{to:normalizedTo,onClick:clickHandler}));}// correct url for local pdf usage if needed
const updatedUrl=(0,file/* localDevFileAdjustment */.K)(to);return/*#__PURE__*/react.createElement("a",Object.assign({},restProps,{href:updatedUrl,onClick:clickHandler}));};/* harmony default export */ var components_Link = (Link);

/***/ }),

/***/ 2033:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _cmsgov_ds_healthcare_gov__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1502);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4160);
/* harmony import */ var _components_FontAwesomeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2701);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1366);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(848);
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7842);
const SearchForm=_ref=>{let{searchPath,form,input,button}=_ref;const{field_search}=(0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useStaticContent */ .KF)();const{isEs}=(0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useIsEs */ .WD)();const prefixedSearchPath=isEs?`/es${searchPath}`:searchPath;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{role:"search",method:"get",action:prefixedSearchPath,className:form.classes,onSubmit:e=>{const{q}=Object.fromEntries(new FormData(e.target));e.preventDefault();(0,_utils_analytics__WEBPACK_IMPORTED_MODULE_5__/* .sendSearchFormEvent */ .Fx)(q);(0,gatsby__WEBPACK_IMPORTED_MODULE_2__/* .navigate */ .c4)(`${prefixedSearchPath}?q=${encodeURI(q)}`);if(form.onSubmit)form.onSubmit(q);}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{id:input.id,"aria-labelledby":`${input.id}-btn`,title:"Enter text to search",name:"q",className:(0,_utils_string__WEBPACK_IMPORTED_MODULE_6__/* .classnames */ .dh)(input.classes,"ds-c-field"),"aria-label":input.ariaLabel,placeholder:input.placeholder}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cmsgov_ds_healthcare_gov__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx,{id:`${input.id}-btn`,"aria-label":button.isText?undefined:field_search,type:"submit",variation:"solid",className:button.classes},button.isText?button.overrideText?button.overrideText:field_search:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_FontAwesomeIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{prefix:"fas",icon:"search",title:"Search icon",titleId:"search-icon-title",className:button.iconClasses,id:"search-form-icon"}))));};/* harmony default export */ __webpack_exports__.Z = (SearchForm);

/***/ }),

/***/ 4692:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ src_config; }
});

;// CONCATENATED MODULE: ./src/types/config.ts
let DeployEnvironment;(function(DeployEnvironment){DeployEnvironment["Dev"]="dev";DeployEnvironment["Test"]="test";DeployEnvironment["Imp"]="imp";DeployEnvironment["Prod"]="prod";DeployEnvironment["Prodprime"]=Environment["Prod"]="prod";DrupalEnvironment["Sandbox"]="sandbox";DrupalEnvironment["Test"]="test";DrupalEnvironment["FeatureImage"]="feature_image";})(DrupalEnvironment||(DrupalEnvironment={}));
;// CONCATENATED MODULE: ./src/config/deployEnvironments/dev.ts
const dev={ENVIRONMENT:DeployEnvironment.Dev,BASE_URL:{es:"https://dev.cuidadodesalud.gov",en:"https://dev.healthcare.gov"},TEALIUM_ENV:"dev",TEALIUM_LOG:true,NEW_RELIC_APPLICATION_ID:"1134106605",DRUPAL_RESOURCE_VERSION:"rel:working-copy"};/* harmony default export */ var deployEnvironments_dev = (dev);
;// CONCATENATED MODULE: ./src/config/deployEnvironments/imp.ts
const imp={ENVIRONMENT:DeployEnvironment.Imp,BASE_URL:{es:"https://imp.cuidadodesalud.gov",en:"https://imp.healthcare.gov"},TEALIUM_ENV:"dev",NEW_RELIC_APPLICATION_ID:"1134106605",DRUPAL_RESOURCE_VERSION:"rel:latest-version"};/* harmony default export */ var deployEnvironments_imp = (imp);
;// CONCATENATED MODULE: ./src/config/deployEnvironments/local.ts
const local={ENVIRONMENT:DeployEnvironment.Local,TEALIUM_LOG:true,TEALIUM_ENV:"dev",DRUPAL_RESOURCE_VERSION:"rel:working-copy",BASE_URL:{en:"http://localhost:8000",es:"http://localhost:8000"}};/* harmony default export */ var deployEnvironments_local = (local);
;// CONCATENATED MODULE: ./src/config/deployEnvironments/prime.ts
const prime={ENVIRONMENT:DeployEnvironment.Prime,BASE_URL:{es:"https://uat0.cuidadodesalud.gov",en:"https://uat0.healthcare.gov"},TEALIUM_ENV:"dev",NEW_RELIC_APPLICATION_ID:"1134106605",DRUPAL_RESOURCE_VERSION:"rel:latest-version"};/* harmony default export */ var deployEnvironments_prime = (prime);
;// CONCATENATED MODULE: ./src/config/deployEnvironments/prod.ts
const prod={ENVIRONMENT:DeployEnvironment.Prod,BASE_URL:{es:"https://www.cuidadodesalud.gov",en:"https://www.healthcare.gov"},TEALIUM_ENV:"prod",NEW_RELIC_APPLICATION_ID:"1134106606",DRUPAL_RESOURCE_VERSION:"rel:latest-version"};/* harmony default export */ var deployEnvironments_prod = (prod);
;// CONCATENATED MODULE: ./src/config/deployEnvironments/prodprime.ts
const prodprime={ENVIRONMENT:DeployEnvironment.Prodprime,BASE_URL:{es:"https://prodprime.cuidadodesalud.gov",en:"https://prodprime.healthcare.gov"},TEALIUM_ENV:"dev",NEW_RELIC_APPLICATION_ID:"1134106605",// this is sharing with IMP
DRUPAL_RESOURCE_VERSION:"rel:working-copy"};/* harmony default export */ var deployEnvironments_prodprime = (prodprime);
;// CONCATENATED MODULE: ./src/config/deployEnvironments/test.ts
const test={ENVIRONMENT:DeployEnvironment.Test,BASE_URL:{es:"https://test.cuidadodesalud.gov",en:"https://test.healthcare.gov"},TEALIUM_ENV:"dev",NEW_RELIC_APPLICATION_ID:"1134106605",DRUPAL_RESOURCE_VERSION:"rel:working-copy"};/* harmony default export */ var deployEnvironments_test = (test);
;// CONCATENATED MODULE: ./src/config/deployEnvironments/index.ts
const deployConfigs=[deployEnvironments_dev,deployEnvironments_imp,deployEnvironments_local,deployEnvironments_prod,deployEnvironments_prodprime,deployEnvironments_test,deployEnvironments_prime];function getDeployConfig(npmDeployEnv){for(let i=0;i<deployConfigs.length;i++){if(npmDeployEnv===deployConfigs[i].ENVIRONMENT)return deployConfigs[i];}return deployEnvironments_local;}
;// CONCATENATED MODULE: ./src/config/drupalEnvironments/dev.ts
const dev_dev={ENVIRONMENT:DrupalEnvironment.Dev,ENVIRONMENT_URL:"https://edit.dev.healthcare.gov"};/* harmony default export */ var drupalEnvironments_dev = (dev_dev);
;// CONCATENATED MODULE: ./src/config/drupalEnvironments/feature_image.ts
const featureImage={ENVIRONMENT:DrupalEnvironment.FeatureImage,ENVIRONMENT_URL:"https://healthcareode8.prod.acquia-sites.com"};/* harmony default export */ var feature_image = (featureImage);
;// CONCATENATED MODULE: ./src/config/drupalEnvironments/imp.ts
const imp_imp={ENVIRONMENT:DrupalEnvironment.Imp,ENVIRONMENT_URL:"https://edit.imp.healthcare.gov"};/* harmony default export */ var drupalEnvironments_imp = (imp_imp);
;// CONCATENATED MODULE: ./src/config/drupalEnvironments/local.ts
const local_local={ENVIRONMENT:DrupalEnvironment.Local,ENVIRONMENT_URL:"http://healthcare.lndo.site"};/* harmony default export */ var drupalEnvironments_local = (local_local);
;// CONCATENATED MODULE: ./src/config/drupalEnvironments/prod.ts
const prod_prod={ENVIRONMENT:DrupalEnvironment.Prod,ENVIRONMENT_URL:"https://edit.healthcare.gov"};/* harmony default export */ var drupalEnvironments_prod = (prod_prod);
;// CONCATENATED MODULE: ./src/config/drupalEnvironments/sandbox.ts
const sandbox={ENVIRONMENT:DrupalEnvironment.Sandbox,ENVIRONMENT_URL:"http://healthcareode3.prod.acquia-sites.com"};/* harmony default export */ var drupalEnvironments_sandbox = (sandbox);
;// CONCATENATED MODULE: ./src/config/drupalEnvironments/test.ts
const test_test={ENVIRONMENT:DrupalEnvironment.Test,ENVIRONMENT_URL:"https://edit.test.healthcare.gov"};/* harmony default export */ var drupalEnvironments_test = (test_test);
;// CONCATENATED MODULE: ./src/config/drupalEnvironments/index.ts
const drupalConfigs=[drupalEnvironments_dev,feature_image,drupalEnvironments_imp,drupalEnvironments_local,drupalEnvironments_prod,drupalEnvironments_sandbox,drupalEnvironments_test];function getDrupalConfig(npmDrupalEnv){for(let i=0;i<drupalConfigs.length;i++){if(npmDrupalEnv===drupalConfigs[i].ENVIRONMENT)return drupalConfigs[i];}return drupalEnvironments_prod;}
;// CONCATENATED MODULE: ./src/config/index.ts
var _deployConfig$TEALIUM,_deployConfig$TEALIUM2;// Can't use destructuring here due to a bug with webpack.
// https://github.com/webpack/webpack/issues/14800
const npmDeployEnv="prod";const npmDrupalEnv="prod";const deployConfig=getDeployConfig(npmDeployEnv);const drupalConfig=getDrupalConfig(npmDrupalEnv);const config={// Static strings used for replacement when locale switching.
BASE_DOMAIN:{en:"healthcare.gov",es:"cuidadodesalud.gov"},BASE_URL:deployConfig.BASE_URL,DRUPAL_URL:drupalConfig.ENVIRONMENT_URL,DRUPAL_RESOURCE_VERSION:deployConfig.DRUPAL_RESOURCE_VERSION,// Determines whether we should load Tealium, which provides some assets:
// - Google Analytics
// - Optimizely
// - New Relic (since Tealium is false, we don't provide defaults for NR)
TEALIUM_ENV:(_deployConfig$TEALIUM=deployConfig.TEALIUM_ENV)!==null&&_deployConfig$TEALIUM!==void 0?_deployConfig$TEALIUM:false,// [prod, dev, qa]; qa == local
TEALIUM_LOG:(_deployConfig$TEALIUM2=deployConfig.TEALIUM_LOG)!==null&&_deployConfig$TEALIUM2!==void 0?_deployConfig$TEALIUM2:false,NEW_RELIC_APPLICATION_ID:deployConfig.NEW_RELIC_APPLICATION_ID,IS_DEVELOPMENT:deployConfig.ENVIRONMENT===DeployEnvironment.Local};/* harmony default export */ var src_config = (config);

/***/ }),

/***/ 1366:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UL: function() { return /* reexport */ useAkamaiDiagnostics; },
  uW: function() { return /* reexport */ useAllPages; },
  kC: function() { return /* reexport */ useBreakpoints; },
  Af: function() { return /* reexport */ useBriefQuery; },
  O8: function() { return /* reexport */ useClickOutside; },
  p1: function() { return /* reexport */ useElementInView; },
  Ih: function() { return /* reexport */ useFooterQuery; },
  O_: function() { return /* reexport */ useIsClient; },
  WD: function() { return /* reexport */ useIsEs; },
  g: function() { return /* reexport */ useNavRibbonQuery; },
  x$: function() { return /* reexport */ useQualtricsLoader; },
  KF: function() { return /* reexport */ useStaticContent; },
  zY: function() { return /* reexport */ useWindow; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/hooks/useAkamaiDiagnostics.tsx
const encodeIpAddress=address=>{if(address){const octets=address.split(".");let encodedAddress=")+encodedAddress;}return encodedAddress;}return"";};const generateRefId=(address,time,requestId)=>`0.${encodeIpAddress(address)}.${time}.${requestId}`;const validators=[{cookieName:"time",isValid:cookieValue=>/^\d{10}$/.test(cookieValue)},{cookieName:"edgeip",isValid:cookieValue=>/^(([0-99]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(cookieValue)},{cookieName:"requestid",isVali+\.[a-zA-Z0-9_]+$/.test(cookieValue)}];const readCookieIfValid=(cookieName,cookieValue)=>{const validator=validators.find(v=>v.cookieName===cookieName);ifreturn"";return validator.isValid(cookieValue)?cookieValue:"";};function getCookie(c_name){const ARRcookies=document.cookie.split(";").map(c=>c.trim());let cookieName;let cookieValue;for(let i=0;i<ARRcookies.length;i++){const equalsIndex=ARRcookies[i].indexOf("=");cookieName=ARRcookies[i].substring(0,equalsIndex);cookieValue=ARRcookies[i].substring(equalsIndex+1);if(cookieName===c_name){return readCookieIfValid(cookieName,cookieValue);}}return"";}const useAkamaiDiagnostics=()=>{(0,react.useEffect)(()=>{const time=getCookie("time");const edgeIP=getCookie("edgeip");const request=getCookie("requestid");const refId=document.getElementById("refId");if(refId)refId.innerHTML=generateRefId(edgeIP,time,request);},[]);};
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(4160);
;// CONCATENATED MODULE: ./src/hooks/useAllPages.ts
// Create array of all pages created by Gatsby for use in components and pages
function useAllPages(){var _allSitePage$nodes$ma,_allSitePage$nodes;const{allSitePage}=(0,gatsby_browser_entry/* useStaticQuery */.K2)("2723231255");return(_allSitePage$nodes$ma=al 0?void 0:(_allSitePage$nodes=allSitePage.nodes)===null||_allSitePage$nodes===void 0?void 0:_allSitePage$nodes.map(_ref=>{let{path}=_ref;return path;}))!==null&&_allSitePage$nodes$ma!==void 0?_allSitePage$nodes$ma:[];}
;// CONCATENATED MODULE: ./src/hooks/useBreakpoints.ts
/**
 * This hook binds to the window resize and returns the current breakpoint name for the screen width.
 * Example: if screen width is at 500px and there's a breakpoint at 450px called "medium" and 600px called "large" then "medium" is returned
 * @param breakpoints named widths for things to happen at
 * @returns the name of the current width
 */function useBreakpoints(breakpoints){const{0:breakpointName,1:setBreakpointName}=(0,react.useState)();(0,react.useLayoutEffect)(()=>{function handleResize(){const currentBreakpoint=getCurrentBreakpoint(breakpoints);setBreakpointName(currentBreakpoint===null||currentBreakpoint===void 0?void 0:currentBreakpoint.name);}window.addEventListener("resize",handleResize);handleResize();return function EventListener("resize",handleResize);};},[]);return breakpointName;}function getCurrentBreakpoint(breakpoints){breakpoints.sort((a,b)=>a.width-b.width);const{innerWidth:screenWidth}=window;let previousBreakpoint=undefined;let breakpointFound=false;for(let i=0;i<breakpoints.length;i++){const breakpoint=breakpoints[i];if(screenWidth<breakpoint.width){breakpointFound=true;break;}previousBreakpoint=breakpoint;}return breakpointFound?previousBreakpoint:breakpoints[breakpoints.length-1];}
;// CONCATENATED MODULE: ./src/hooks/useClickOutside.ts
function useClickOutside(// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
ref,action){(0,react.useEffect)(()=>{const handleClicet)){action(false);}};document.addEventListener("mousedown",handleClickOutside);return()=>document.removeEventListener("mousedown",handleClickOutside);},[ref]);}
;// CONCATENATED MODULE: ./src/hooks/useElementInView.ts
function useElementInView(elScroll}=(0,react.useState)();const handleScroll=()=>{const elementInView=getElementInView(elementIds,scrollMargin);setElementInScroll(elementInView);};(0,react.e event listener once
document.addEventListener("scroll",handleScroll);return function cleanup(){document.removeEventListener("scroll",handleScroll);};},[scrollMargin]);return elementInScroll;}function getElementInView(elementIds,scrollMargin){let elementInView=undefined;for(const id in elementIds){var _element$offsetTop,_element$offsetHeight;const element=document.getElementById(elementIds[id]);const inViewScrollHeight=window.scrollY+scrollMargin;const elementTopScroll=(_element$offsetTop=element===null||element===void 0?void 0:element.offsetTop)!==null&&_element$offsetTop!==void 0?_element$offsetTop:0;const elementBottomScroll=((_element$offsetHeight=element===null||element===void 0?void 0:element.offsetHeight)!==null&&_element$offsetHeight!==void 0?_element$offsetHeight:0)+elementTopScroll;if(inViewScrollHeight>=elementTopScroll&&inViewScrollHeight<elementBottomScroll){elementInView=elementIds[id];break;}}return elementInView;}
;// CONCATENATED MODULE: ./src/hooks/useIsClient.ts
/**
 * Used to determine the method of page rendering
 * @returns true or false depending on wether the page is being rendered by the clien useIsClient(){const{0:isClient,1:setClient}=(0,react.useState)(false);const key=isClient?"client":"server";(0,react.useEffect)(()=>{setClient(true);},[]);return{isClient,key};}
// EXTERNAL MODULE: ./src/config/index.ts + 17 modules
var config = __webpack_require__(4692);
;// CONCATENATED MODULE: ./src/hooks/useIsEs.ts
function useIsEs(){const{0:isEs,1:setIsEs}=(0,react.useState)(false);(0,react.useEffect)(()=>{setIsEs(window.location.href.includes(config/* default */.Z.BASE_DOMAIN.es));},[]);return{isEs};}
;// CONCATENATED MODULE: ./src/hooks/useQualtricsLoader.ts
// Qualtrics survey comes along with lots of styles and classes set that
// end up getting mangled by our own styles. This method recurses through
// the elments and removes the class and style of each of the div elements.
// This has to be just the divs since there's an H2 that gets its styles
// set by class and we want to preserve those styles.
function stripStylingOfDivs(elements){const stripDiv=element=>{if(element.tagName.toLowerCase()!=="div")return;element.removeAttribute("class");element.removeAttribute("style");};elements.forEach(element=>{stripDiv(element);const children=Array.from(element.children);if(children.length>0)stripStylingOfDivs(children);});}function useQualtricsLoader(_ref){let{id,surveyClasses,containerClasses}=_ref;const{0:show,1:setShow}=(0,react.useState)(false);const{0:params,1:setParams}=(0,react.useState)({});(0,react.useEffect)(()=>{const qualtricsSurvey=document.getElementById(id);const surveyContainer=qualtricsSurvey===null||qualtricsSurvey===void 0?void 0:qualtricsSurvey.parentElement;// There's a module that gets loaded from qualtrics that triggers the "intercept-display"
// on the element with the id passed in (or "q-survey", if not present) in what's called "after display". This allows us to make sure
// the qualtrics survey has loaded before we do anything on our end.
// Module:
// https://gov1.siteintercept.qualtrics.com/dxjsmodule/CoreModule.js?Q_CLIENTVERSION=1.70.0&Q_CLIENTTYPE=web&Q_BRANDID=medicare
qualtricsSurvey===null||qualtricsSurvey===void 0?void 0:qualtricsSurvey.addEventListener("intercept-display",e=>{// Returning any parameters added to the custom event to the consumer
setParams((e===null||e===void 0?void 0:e.detail)||{});stripStylingOfDivs(Array.from(qualtricsSurvey.children));// This will inform the consumer of the hook that the survey is ready to show and
// and hiding classes can be removed
setShow(true);// add back classes for styling
surveyClasses===null||surveyClasses===void 0?void 0:surveyClasses.forEach(surveyCsses===null||containerClasses===void 0?void 0:containerClasses.forEach(containerClassName=>{surveyContainer.setAttribute("class",containerClassName);});});},[]);return{show,params};}
;// CONCATENATED MODULE: ./src/hooks/queries/useStaticContent.ts
/**
 * This hook performs a query to get a list of strings to be used instead of hardcoding them
 * @returns key value pairs for static content and its actual text
 */function useStaticContent(){const content=(0,gatsby_browser_entry/* useStaticQuery */.K2)("1300959836");return{...content.configPagesContentStrings,...content.configPagesOeControls,...content.configPagesSearchPages};}
;// CONCATENATED MODULE: ./src/hooks/queries/useNavRibbonQuery.ts
function useNavRibbonQuery(){return (0,gatsby_browser_entry/* useStaticQuery */.K2)("1214792417");}
;// CONCATENATED MODULE: ./src/hooks/queries/useBriefQuery.ts
functioTENATED MODULE: ./src/hooks/queries/useFooterQuery.ts
function useFooterQuery(){return (0,gatsby_browser_entry/* useStaticQuery */.K2)("2444429200");}
;// CONCATENATED MODULE: ./src/hooks/useWindow.ts
function useWindow(){const{0:origin,1:setOrigin}=(0,react.useState)(config/* default */.Z.BASE_URL.en);const{0:search,1:setSearch}=(0,react.useState)("");(0,react.useEffect)(()=>{setOrigin(window.location.origin);setSearch(window.location.search);},[]);return{origin,search};}
;// CONCATENATED MODULE: ./src/hooks/index.ts


/***/ }),

/***/ 848:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DZ: function() { return /* reexport */ PageViewCategory; },
  ug: function() { return /* reexport */ sendAccordionEvent; },
  pn: function() { return /* reexport */ sendButtonEngagementEvent; },
  Wb: function() { return /* reexport */ sendCheckboxSelectedEvent; },
  D6: function() { return /* reexport */ sendDropdownSelectionEvent; },
  $X: function() { return /* reexport */ sendEmailSubscriptionErrorEvent; },
  c$: function() { return /* reexport */ sendEmailSubscriptionEvent; },
  bS: function() { return /* reexport */ sendEmailSubscriptionImpression; },
  OJ: function() { return /* reexport */ sendFooterNav; },
  nW: function() { return /* reexport */ sendGlossarySkipNav; },
  ad: function() { return /* reexport */ sendGlossaryTooltipView; },
  y3: function() { return /* reexport */ sendHeaderToggle; },
  u9: function() { return /* reexport */ sendInternalClick; },
  Vv: function() { return /* reexport */ sendJumpLinkEvent; },
  cD: function() { return /* binding */ sendLinkEvent; },
  Vr: function() { return /* reexport */ sendNavEvent; },
  YT: function() { return /* binding */ sendPageView; },
  Fm: function() { return /* reexport */ sendRelatedContentClick; },
  Fx: function() { return /* reexport */ sendSearchFormEvent; },
  kJ: function() { return /* reexport */ sendSearchPaginationClick; },
  $V: function() { return /* reexport */ sendSearchResultClick; },
  rs: function() { return /* reexport */ sendStickyWidgetEvent; },
  Oq: function() { return /* reexport */ useAnalyticsPageView; }
});

// EXTERNAL MODULE: ./src/config/index.ts + 17 modules
var config = __webpack_require__(4692);
;// CONCATENATED MODULE: ./src/utils/analytics/footer.ts
/**
 * Functions for sending events to Tealium/Google Analytics
 *
 * @see @cmsgov/design-system/dist/components/analytics/SendAnalytics.js
 * @see https://confluence.cms.gov/display/BLSTANALYT/Navigation+Tracking+-+HealthCare.gov
 */const UTAG_FOOTER_CLICK={// constants
event_name:"footer_click",event_type:"ui interaction",event_label:"",// will be set to 'text'
event_action:"click",event_category:"footer navigation",// required fields for design-system analytics
ga_eventAction:"click",ga_eventCategory:"footer navigation",ga_eventLabel:"",// will be set to 'text'
ga_eventType:"cmsds",ga_eventValue:"",// defaults - should be populated in 'event'
text:"",category:"",// [resources footer, connect with us footer, lower footer]
link_url:""};function sendFooterNav(linkText,linkUrl,category){const event={...UTAG_FOOTER_CLICK};event.text=event.event_label=linkText.trim();event.category=category;event.link_url=linkUrl;sendLinkEvent(event);}
;// CONCATENATED MODULE: ./src/utils/analytics/glossary.ts
/**
 * Functions for sending events to Tealium/Google Analytics
 *
 * @see @cmsgov/design-system/dist/components/analytics/SendAnalytics.js
 * @see https://confluence.cms.gov/display/BLSTANALYT/Glossary+Redesign
 */const UTAG_SKIPNAV_CLICK={// GA4
event_name:"skip_nav_click",event_type:"ui interaction",event_label:"",// will be set to 'text'
event_action:"engaged skip nav",event_category:"content tools",// Universal
ga_eventAction:"engaged skip nav",ga_eventCategory:"content tools",ga_eventLabel:"",// will be set to 'text'
ga_eventType:"cmsds",ga_eventValue:"",// defaults - should be populated in 'event'
text:""};function sendGlossarySkipNav(linkText){const event={...UTAG_SKIPNAV_CLICK};event.text=event.event_label=event.ga_eventLabel=linkText.trim();sendLinkEvent(event);}const UTAG_TOOLTIP_VIEW={// GA4
event_name:"tooltip_viewed",event_type:"ui interaction",event_action:"viewed tooltip",event_category:"content tools",event_label:"",// Universal
ga_eventCategory:"content tools",ga_eventAction:"viewed tooltip",ga_eventType:"ui interaction",ga_eventValue:"",// Defaults
ga_eventLabel:"",text:""};function sendGlossaryTooltipView(linkText){const event={...UTAG_TOOLTIP_VIEW};event.text=linkText;event.event_label=linkText;event.ga_eventLabel=linkText;event.text=linkText;sendLinkEvent(event);}const UTAG_RELATED_CONTENT_CLICK={// GA4
event_name:"internal_link_clicked",event_type:"ui interaction",event_label:"",// will be set to 'text: link_url'
event_action:"followed related content link",event_category:"content tools",// Universal
ga_eventAction:"followed related content link",ga_eventCategory:"content tools",ga_eventLabel:"",// will be set to 'text: link_url'
// defaults - should be populated in 'event'
text:"",// this value should be the text of the link the user clicked on.
link_url:""// this value should be the url of the destination page for the link the user clicked on.
};function sendRelatedContentClick(linkText,linkUrl){const event={...UTAG_RELATED_CONTENT_CLICK};event.text=linkText.trim();event.link_url=linkUrl.trim();event.event_label=`${event.text}: ${event.link_url}`;event.ga_eventLabel=`${event.text}: ${event.link_url}`;sendLinkEvent(event);}
;// CONCATENATED MODULE: ./src/utils/analytics/header.ts
/**
 * Functions for sending events to Tealium/Google Analytics
 *
 * @see @cmsgov/design-system/dist/components/analytics/SendAnalytics.js
 * @see https://confluence.cms.gov/pages/viewpage.action?spaceKey=BLSTANALYT&title=Navigation+Tracking+-+HealthCare.gov
 * @see https://confluence.cms.gov/display/BLSTANALYT/Consistent+Header+%28MAX%29+Event+Tracking+Specifications
 */const UTAG_HEADER_CLICK={// constants
event_name:"header_click",event_type:"ui interaction",event_category:"consistent header",event_label:"",// will be set to 'text'
event_action:"",// will be set to category + 'click'
component:"header",ga_eventNoninteraction:true,// required fields for design-system analytics
ga_eventAction:"click",ga_eventCategory:"mega-menu",ga_eventLabel:"",// will be set to 'text'
ga_eventType:"cmsds",ga_eventValue:"",// defaults - should be populated in 'event'
text:"",category:""// [mega-menu, mobile mega-menu]
// non-mobile fields
// link_url: '',
// heading: '',
// subheading: '',
};function sendHeaderToggle(linkText,exposed,mobile){if(mobile===void 0){mobile=false;}const event={...UTAG_HEADER_CLICK};event.text=event.event_label=event.ga_eventLabel=`${exposed?"exposed":"closed"} ${linkText.toLowerCase()}`;event.category=mobile?"mobile mega-menu":"mega-menu";event.event_action=`${event.category} click`;sendLinkEvent(event);}
;// CONCATENATED MODULE: ./src/utils/analytics/search.ts
/**
 * Functions for sending events to Tealium/Google Analytics
 *
 * @see @cmsgov/design-system/dist/components/analytics/SendAnalytics.js
 * @see https://confluence.cms.gov/pages/viewpage.action?spaceKey=BLSTANALYT&title=GA4+Audit+-+Search
 */const UTAG_SEARCH_EVENT={// GA4
event_name:"view_search_results",event_type:"content tools",// Universal
ga_eventCategory:"content tools",ga_eventAction:"view search results",ga_eventLabel:"",// will be set to 'search_term'
ga_eventNoninteraction:true,// defaults - should be populated in 'event'
search_term:""};const UTAG_SEARCH_RESULT_CLICK={// GA4
event_name:"search_result_engaged",event_type:"content tools",// Universal
ga_eventCategory:"content tools",ga_eventAction:"search result engaged",ga_eventLabel:"",// will be set to 'text: url'
ga_eventNoninteraction:true,// defaults - should be populated in 'event'
search_result_count:0,search_result_position:0,text:"",link_url:""};const UTAG_SEARCH_PAGINATION={// GA4
event_name:"button_engagement",event_type:"ui interaction",// UA
ga_eventCategory:"ui interaction",ga_eventAction:"",// will be set to 'engaged text link'
ga_eventLabel:"",// will be set to 'text: link_url'
button_style:"default",button_type:"link",parent_component_type:"pagination",// defaults - should be populated in 'event'
text:"",link_url:""};function sendSearchFormEvent(searchTerm){const event={...UTAG_SEARCH_EVENT};event.search_term=event.ga_eventLabel=searchTerm.trim();sendLinkEvent(event);}function sendSearchResultClick(searchResultCount,searchResultPosition,linkText,linkUrl){const event={...UTAG_SEARCH_RESULT_CLICK};event.search_result_count=searchResultCount;event.search_result_position=searchResultPosition;event.text=linkText;event.link_url=linkUrl;event.ga_eventLabel=`${linkText}: ${linkUrl}`;sendLinkEvent(event);}function sendSearchPaginationClick(text,link_url){const event={...UTAG_SEARCH_PAGINATION};event.text=text;event.link_url=link_url;event.ga_eventAction=`engaged ${text} link`;event.ga_eventLabel=`${text}: ${link_url}`;sendLinkEvent(event);}
// EXTERNAL MODULE:Category["LandingPage"]="landing-page";PageViewCategory["Search"]="search";PageViewCategory["Help"]="help";PageViewCategory["Subscribe"]="subscribe";})(PageViewCategory||(PageViewCategory={}));function useAnalyticsPageView(params){(0,react.useEffect)(()=>{const site=new URL(window.location.href);const base=`${site(config/* default */.Z.BASE_URL).find(// ugly, horrible, disgusting abomination required by Typescript
key=>config/* default */.Z.BASE_URL[key]===base);const[subDomain]=site.host.split(".");const siteEnvironment=subDomain==="www"?"production":subDomain;const info={content_language:lang||"en",site_domain:site.host,site_environment:siteEnvironment,site_division:"learn"};const payload=Object.assign(params,info);sendPageView(payload);},[]);}
;// CONCATENATED MODULE: ./src/utils/analytics/global.ts
const UTAG_NAV_CLICK={event_name:"navigation_clicked",event_type:"ui interaction",navigation_type:"",heading:"",text:"",link_url:""};const UTAG_JUMP_LINK_CLICK={event_name:"jump_link_clicked",event_type:"ui interaction",text:"",link_url:""};const UTAG_ACCORDION_CLICK={event_name:"",event_type:"ui interaction",text:""};const UTAG_TAKE_ACTION_CLICK={event_name:"take_action_widget_clicked",event_type:"ui interaction",heading:"",text:"",link_url:""};const UTAG_INTERNAL_CLICK={// GA4
event_name:"internal_link_clicked",event_type:"ui interaction",event_label:"",// will be set to 'text: link_url'
event_action:"internal link clicked",event_category:"content tools",// Universal
ga_eventAction:"internal link clicked",ga_eventCategory:"content tools",ga_eventLabel:"",// will be set to 'text: link_url'
ga_eventType:"cmsds",ga_eventValue:"",// defaults - should be populated in 'event'
text:"",// this value should be the text of the link the user clicked on.
link_url:"",// this value should be the url of the destination page for the link the user clicked on.
parent_component_heading:"",// this will capture the title/heading of the parent component the button was a part of.
parent_component_type:""// this will capture the type of the parent component the button was a part of (ie., card, badge, etc).
};const UTAG_BUTTON_ENGAGEMENT={event_name:"button_engagement",event_type:"ui interaction",text:"",link_url:""};const UTAG_DROPDOWN_SELECTION={event_name:"dropdown_selection",event_type:"ui interaction",dropdown_title:"",dropdown_selection:"",link_url:""};const UTAG_CHECKBOX_SELECTED={event_name:"checkbox_selected",event_type:"ui interaction",text:"",heading:"",parent_component_type:""};const UTAG_EMAIL_SUBSCRIBE={event_name:"email_subscription_submitted",event_type:"conversion",user_state:""};const UTAG_EMAIL_SUBSCRIBE_ERROR={event_name:"email_subscription_submission_error",event_type:"content tools",error_type:"validation",error_message:""};const UTAG_EMAIL_SUBSCRIBE_IMPRESSION={event_name:"email_subscription_impression",event_type:"content tools",parent_component_heading:"",parent_component_type:"modal"};function sendInternalClick(linkText,linkUrl,parentType,parentHeading){const event={...UTAG_INTERNAL_CLICK};event.text=linkText.trim();event.link_url=linkUrl.trim();event.event_label=`${event.text}: ${event.link_url}`;event.ga_eventLabel=`${event.text}: ${event.link_url}`;if(parentType){event.parent_component_type=parentType.trim();}if(parentHeading){event.parent_component_heading=parentHeading.trim();}sendLinkEvent(event);}function sendNavEvent(headingText,linkText,linkUrl,navType){const event={...UTAG_NAV_CLICK};event.heading=headingText!==null&&headingText!==void 0?headingText:"";event.text=linkText.trim();event.link_url=linkUrl;event.navigation_type=navType;sendLinkEvent(event);}function sendAccordionEvent(text,open){sendLinkEvent({...UTAG_ACCORDION_CLICK,text,event_name:`accordion_${open?"opened":"closed"}`});}function sendStickyWidgetEvent(headingText,linkText,linkUrl){sendLinkEvent({...UTAG_TAKE_ACTION_CLICK,heading:headingText,text:linkText.trim(),link_url:linkUrl});}function sendButtonEngagementEvent(linkText,linkUrl,style,buttonType){sendLinkEvent({...UTAG_BUTTON_ENGAGEMENT,text:linkText,link_url:linkUrl!==null&&linkUrl!==void 0?linkUrl:"",button_style:style!==null&&style!==void 0?style:"",button_type:buttonType!==null&&buttonType!==void 0?buttonType:""});}function sendJumpLinkEvent(linkText,linkUrl){sendLinkEvent({...UTAG_JUMP_LINK_CLICK,text:linkText,link_url:linkUrl});}function sendDropdownSelectionEvent(title,selection,url){sendLinkEvent({...UTAG_DROPDOWN_SELECTION,dropdown_title:title,dropdown_selection:selection,link_url:url!==null&&url!==void 0?url:""});}function sendEmailSubscriptionEvent(userState,heading){sendLinkEvent({...UTAG_EMAIL_SUBSCRIBE,user_state:userState,heading:heading!==null&&heading!==void 0?heading:""});}function sendEmailSubscriptionErrorEvent(message){sendLinkEvent({...UTAG_EMAIL_SUBSCRIBE_ERROR,error_message:message});}function sendEmailSubscriptionImpression(parentComponentHeading,heading){sendLinkEvent({...UTAG_EMAIL_SUBSCRIBE_IMPRESSION,parent_component_heading:parentComponentHeading,heading});}function sendCheckboxSelectedEvent(text,heading,parentComponentType){sendLinkEvent({...UTAG_CHECKBOX_SELECTED,text,heading,parent_component_type:parentComponentType});}
;// CONCATENATED MODULE: ./src/utils/analytics/index.ts
function tealiumLog(){if(config/* default */.Z.TEALIUM_LOG){var _console;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}// eslint-disable-nextNALYTICS]:"].concat(args));}}function sendPageView(payload){sendAnalytics("view",payload);}function sendLinkEvent(event){sendAnalytics("link",event);}function sendAnalytics(eventType,event,retry){var _retry;tealiumLog(eventType.toUpperCase(),event);retry=(_retry=retry)!==null&&_retry!==void 0?_retry:0;retry++;if(retry>3||!config/* default */.Z.TEALIUM_ENV){tealiumLog("Retry limit exceeded.",evg[eventType]){utag[eventType](event);tealiumLog("utag event type call completed",event);return;}setTimeout(()=>{sendAnalytics(eventType,event,retry);},retry*300);}

/***/ }),

/***/ 2651:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ normalizeTz; }
/* harmony export */ });
function normalizeTz(date){const etDate=new Date(date.toLocaleString("en-US",{timeZone:"America/New_York"}));const diff=date.getTime()-etDate.getTime();return new Date(date.getTime()-diff);}

/***/ }),

/***/ 478:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ localDevFileAdjustment; },
/* harmony export */   d: function() { return /* binding */ correctImagePath; }
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4160);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4692);
/**
 * This grabs the local file location for files that Gatsby has as part of the
 * file download step during build. In a production build files get placed in
 * /downloads/\<filename\>.\<ext\> in netstorage but when running Gatsby locally
 * the files are located at /static/\<hash\>/\<filename\>.\<ext\>
 * @param url The file path you'd like adjusted
 * @returns The file path that Gatsby has locally
 */function localDevFileAdjustment(url){var _url$match;// Url only needs updated for local dev and preview server
if(!_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.IS_DEVELOPMENT)return url;const[fileName]=(_url$match=url.match(/[^/]+\.\w+/g))!==null&&_url$match!==void 0?_url$match:[];if(!fileName)return"";const{allFileFile}=(0,gatsby__WEBPACK_IMPORTED_MODULE_0__/* .useStaticQuery */ .K2)("3745464645");const translatableFileNameRegex=new RegExp(`/en/${fileName}`,"g");const translatableFile=allFileFile.nodes.find(node=>!!node.uri.url.match(translatableFileNameRegex));if(tre.publicURL;const basicFileNameRegex=new RegExp(fileName,"g");const standardFile=allFileFile.nodes.find(node=>!!node.uri.url.match(basicFileNameRegex));if(standardFile)return standardFile.localFile.publicURL;return url;}// Image src/srcset values that start with /sites/default/files will be updated
// to start with /assets/learn/static. This handles strings that start with the
// search or in the middle of strings where there's a space or comma like with
// srcset
const correctImagePath=src=>{const adjustedSrc=localDevFileAdjustment(src);// If the src has changed then we're in local dev and we can skip the next step
if(src!==adjustedSrc)return adjustedSrc;return src.startsWith("/es")?src.replace(/\B\/es\/sites\/default\/files/gim,"/assets/learn/static"):src.replace(/\B\/sites\/default\/files/gim,"/assets/learn/static");};

/***/ }),

/***/ 2550:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: function() { return /* binding */ sha1Short; }
/* harmony export */ });
/* harmony import */ var sha_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9072);
/* harmony import */ var sha_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sha_js__WEBPACK_IMPORTED_MODULE_0__);
function sha1Short(content){return sha_js__WEBPACK_IMPORTED_MODULE_0___default()("sha1").update(content).digest("hex").slice(0,8);}

/***/ }),

/***/ 7842:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jz: function() { return /* binding */ replaceSlugs; },
/* harmony export */   dh: function() { return /* binding */ classnames; },
/* harmony export */   hv: function() { return /* binding */ getAccessibleId; }
/* harmony export */ });
function replaceSlugs(str,replacements){const initial=str;return Object.keys(replacements).reduce((acc,key)=>acc.replaceAll(`{${key}}`,replacements[key]),initial);}function getAccessibleId(str){return str.replace(/[.,/#!'$%^?&*;:{}=_`~()]/g,"")// Strip out special characters
.replace(/\s+/g," ")// Consolidate any duplicate spaces
.split(" ").join("-").toLowerCase();}function classnames(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return[].concat(args).filter(Boolean).join(" ");}

/***/ }),

/***/ 2351:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D5: function() { return /* binding */ normalizeUrl; },
/* harmony export */   KI: function() { return /* binding */ getBaseRoute; },
/* harmony export */   Qj: function() { return /* binding */ removeTrailingSlash; },
/* harmony export */   mi: function() { return /* binding */ addTrailingSlash; }
/* harmony export */ });
/**
 *
 * @param path
 * @returns The path with a "/" appended if one does not already exist.
 */function addTrailingSlash(path){return path.endsWith("/")?path:path.concat("/");}/**
 *
 * @param path
 * @returns The path without a "/" at the end of it.
 */function removeTrailingSlash(path){return path.endsWith("/")?path.slice(0,-1):path;}// For a url like /quick-guide/one-page-guide-to-the-marketplace/, matches on /quick-guide/
function getBaseRoute(path){const re=/\/(.+?)\//;const[basePath]=path.match(re)||[];return basePath||path;}/**
 *
 * @param url
 * @returns a lowercased ur | m
  eLen += mLen
   {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ 1989:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hashClear = __webpack_require__(1789),
    hashDelete = __webpack_require__(401),
    hashGet = __webpack_require__(7667),
    hashHas = __webpack_require__(1327),
    hashSet = __webpack_require__(1866);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 8407:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var listCacheClear = __webpack_require__(7040),
    listCacheDelete = __webpack_require__(4125),
    listCacheGet = __webpack_require__(2117),
    listCacheHas = __webpack_require__(7518),
    listCacheSet = __webpack_require__(4705);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = list_require__(5639);

/* apCache.prototype.get k_require__) {

var ro;

  while (++index < gth;
  while (length--gth) {
    object = obturn (symToStringTag &  }
  var pattern = i'';
  }
  var result =Array(value)) {
    require__(5639);

/** Us__.g == 'object' && __map.__data__;
  returtNative(object, key) {     value[symToStringns the property value.Of Hash
 */
function {
  var result = this.t === HASH_UNDEFINED ?  var data = this.__da.has(key) ? 0 : 1;
  dreturn reIsPlainProp.te == 'number' || type f `func` is masked, elname clear
 * @memberOtIndex) {
    data.pop = this.__data__,
    ey` exists, else `fals {
    ++this.size;
  
  this.__data__ = {
 ) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 6000:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(5050);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the ry for `key` exists, e,
      size = data.siZE_SIZE) {
      cacheuilt-in method referenns the converted strinf;

/** Used as a refe  result.push(quote ?urn value;
  }
  var oString.call(func);
  aN);
 * // => true
 */result = object == nule
 *
 * _.isArray('abcvar tag = baseGetTag(vObject(value) {
  var ll);
 * // => false
 *bol(value) {
  return ed.cache = new (memoiz[1, 2, 3]);
 * // => 'ueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),

/***/ 7774:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=__webpack_require__(7294);function l(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var p=Object.prototype.hasOwnProperty,fa=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ha={},ia={};
function ja(a){if(p.call(ia,a))return!0;if(p.call(ha,a))return!1;if(fa.test(a))return ia[a]=!0;ha[a]=!0;return!1}function r(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g}var t={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){t[a]=new r(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];t[b]=new r(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){t[a]=new r(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){t[a]=new r(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){t[a]=new r(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){t[a]=new r(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){t[a]=new r(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){t[a]=new r(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){t[a]=new r(a,5,!1,a.toLowerCase(),null,!1,!1)});var ka=/[\-:]([a-z])/g;function la(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ka,
la);t[b]=new r(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ka,la);t[b]=new r(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ka,la);t[b]=new r(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){t[a]=new r(a,1,!1,a.toLowerCase(),null,!1,!1)});
t.xlinkHref=new r("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){t[a]=new r(a,1,!1,a.toLowerCase(),null,!0,!0)});
var u={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ma=["Webkit","ms","Moz","O"];Object.keys(u).forEach(function(a){ma.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);u[b]=u[a]})});var na=/["'&<>]/;
function v(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=na.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}var oa=/([A-Z])/g,pa=/^ms-/,qa=Array.isArray;function w(a,b){return{insertionMode:a,selectedValue:b}}
function ra(a,b,c){switch(b){case "select":return w(1,null!=c.value?c.value:c.defaultValue);case "svg":return w(2,null);case "math":return w(3,null);case "foreignObject":return w(1,null);case "table":return w(4,null);case "thead":case "tbody":case "tfoot":return w(5,null);case "colgroup":return w(7,null);case "tr":return w(6,null)}return 4<=a.insertionMode||0===a.insertionMode?w(1,null):a}var sa=new Map;
function ta(a,b,c){if("object"!==typeof c)throw Error(l(62));b=!0;for(var d in c)if(p.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=v(d);f=v((""+f).trim())}else{e=d;var g=sa.get(e);void 0!==g?e=g:(g=v(e.replace(oa,"-$1").toLowerCase().replace(pa,"-ms-")),sa.set(e,g),e=g);f="number"===typeof f?0===f||p.call(u,d)?""+f:f+"px":v((""+f).trim())}b?(b=!1,a.push(' style="',e,":",f)):a.push(";",e,":",f)}}b||a.push('"')}
function x(a,b,c,d){switch(c){case "style":ta(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=t.hasOwnProperty(c)?t[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=b.attributeName;switch(b.type){case 3:d&&a.push(" ",c,'=""');break;case 4:!0===d?a.push(" ",c,'=""'):
!1!==d&&a.push(" ",c,'="',v(d),'"');break;case 5:isNaN(d)||a.push(" ",c,'="',v(d),'"');break;case 6:!isNaN(d)&&1<=d&&a.push(" ",c,'="',v(d),'"');break;default:b.sanitizeURL&&(d=""+d),a.push(" ",c,'="',v(d),'"')}}else if(ja(c)){switch(typeo){if(null!=b){if(null!=c)throw Error(l(60));if("object"!==typeof b||!("__html"in b))throw Error(l(61));b=b.__html;null!==b&&void 0!==b&&a.push(""+b)}}function ua(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function va(a,b,c,d){a.push(A(c));var f=c=null,e;for(e in b)if(p.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHT^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,xa=new Map;function A(a){var b=xa.get(a);if(void 0===b){if(!wa.test(a))throw Error(l(65,a));b="<"+a;xa.set(a,b)}return b}
function ya(a,b,c,d,f){switch(b){case "select":a.push(A("select"));var e=null,g=null;for(n in c)if(p.call(c,n)){var h=c[n];if(null!=h)switch(n){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:x(a,d,n,h)}}a.push(">");y(a,g,e);return e;case "option":g=f.selectedValue;a.push(A("option"));var k=h=null,m=null;var n=null;for(e in c)if(p.call(c,e)){var q=c[e];if(null!=q)switch(e){case "children":h=q;break;case "selected":m=q;break;case "dangerouslySetInnerHTML":n=
q;break;case "value":k=q;default:x(a,d,e,q)}}if(null!=g)if(c=null!==k?""+k:ua(h),qa(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(' selected=""');break}}else""+g===c&&a.push(' selected=""');else m&&a.push(' selected=""');a.push(">");y(a,n,h);return h;case "textarea":a.push(A("textarea"));n=g=e=null;for(h in c)if(p.call(c,h)&&(k=c[h],null!=k))switch(h){case "children":n=k;break;case "value":e=k;break;case "defaultValue":g=k;break;case "dangerouslySetInnerHTML":throw Error(l(91));default:x(a,d,
h,k)}null===e&&null!==g&&(e=g);a.push(">");if(null!=n){if(null!=e)throw Error(l(92));if(qa(n)&&1<n.length)throw Error(l(93));e=""+n}"string"===typeof e&&"\n"===e[0]&&a.push("\n");null!==e&&a.push(v(""+e));return null;case "input":a.push(A("input"));k=n=h=e=null;for(g in c)if(p.call(c,g)&&(m=c[g],null!=m))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error(l(399,"input"));case "defaultChecked":k=m;break;case "defaultValue":h=m;break;case "checked":n=m;break;case "value":e=m;break;
default:x(a,d,g,m)}null!==n?x(a,d,"checked",n):null!==k&&x(a,d,"checked",k);null!==e?x(a,d,"value",e):null!==h&&x(a,d,"value",h);a.push("/>");return null;case "menuitem":a.push(A("menuitem"));for(var C in c)if(p.call(c,C)&&(e=c[C],null!=e))switch(C){case "children":case "dangerouslySetInnerHTML":throw Error(l(400));default:x(a,d,C,e)}a.push(">");return null;case "title":a.push(A("title"));e=null;for(q in c)if(p.call(c,q)&&(g=c[q],null!=g))switch(q){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error(l(434));
default:x(a,d,q,g)}a.push(">");return e;case "listing":case "pre":a.push(A(b));g=e=null;for(k in c)if(p.call(c,k)&&(h=c[k],null!=h))switch(k){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:x(a,d,k,h)}a.push(">");if(null!=g){if(null!=e)throw Error(l(60));if("object"!==typeof g||!("__html"in g))throw Error(l(61));c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push("\n",c):a.push(""+c))}"string"===typeof e&&"\n"===e[0]&&a.push("\n");return e;
case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(A(b));for(var D in c)if(p.call(c,D)&&(e=c[D],null!=e))switch(D){case "children":case "dangerouslySetInnerHTML":throw Error(l(399,b));default:x(a,d,D,e)}a.push("/>");return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return va(a,
c,b,d);case "html":return 0===f.insertionMode&&a.push("<!DOCTYPE html>"),va(a,c,b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return va(a,c,b,d);a.push(A(b));g=e=null;for(m in c)if(p.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":ta(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ja(m)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(" ",m,'="',v(h),'"')}a.push(">");
ye 5:return a.push("</tbody></table>");case 6:return a.push("</tr></table>");case 7:return a.push("</colgroup></table>");default:throw Error(l(397));}}var Ca=/[<\u2028\u2029]/g;
function Da(a){return JSON.stringify(a).replace(Ca,function(a){switch(a){case "<":return"\\u003c";case "\u2028":return"\\u2028";case "\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}
function Ea(a,b){b=void 0===b?"":b;return{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:b+"P:",segmentPrefix:b+"S:",boundaryPrefixicMarkup:a}}function Fa(a,b,c,d){if(c.generateStaticMarkup)return a.push(v(b)),!1;""===b?a=d:(d&&a.push("\x3c!-- --\x3e"),a.push(v(b)),a=!0);return a}
var B=Object.assign,Ga=Symbol.for("react.element"),Ha=Symbol.for("react.portal"),Ia=Symbol.for("react.fragment"),Ja=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),La=Symbol.for("react.provider"),Ma=Symbol.for("react.context"),Na=Symbol.for("react.forward_ref"),Oa=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),Ra=Symbol.for("react.lazy"),Sa=Symbol.for("react.scope"),Ta=Symbol.for("react.debug_trace_mode"),Ua=Symbol.for("react.legacy_hidden"),
Va=Symbol.for("react.default_value"),Wa=Symbol.iterator;
function Xa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ia:return"Fragment";case Ha:return"Portal";case Ka:return"Profiler";case Ja:return"StrictMode";case Oa:return"Suspense";case Pa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ma:return(a.displayName||"Context")+".Consumer";case La:return(a._context.displayName||"Context")+".Provider";case Na:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Qa:return b=a.displayName||null,null!==b?b:Xa(a.type)||"Memo";case Ra:b=a._payload;a=a._init;try{return Xa(a(b))}catch(c){}}return null}var Ya={};function Za(a,b){a=a.contextTypes;if(!a)return Ya;var c={},d;for(d in a)c[d]=b[d];return c}var E=null;
function F(a,b){if(a!==b){a.context._currentValue2=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error(l(401));}else{if(null===c)throw Error(l(401));F(a,c)}b.context._currentValue2=b.value}}function $a(a){a.context._currentValue2=a.parentValue;a=a.parent;null!==a&&$a(a)}function ab(a){var b=a.parent;null!==b&&ab(b);a.context._currentValue2=a.value}
function bb(a,b){a.context._currentValue2=a.parentValue;a=a.parent;if(null===a)throw Error(l(402));a.depth===b.depth?F(a,b):bb(a,b)}function cb(a,b){var c=b.parent;if(null===c)throw Error(l(402));a.depth===c.depth?F(a,c):cb(a,c);b.context._currentValue2=b.value}function G(a){var b=E;b!==a&&(null===b?ab(a):null===a?$a(b):b.depth===a.depth?F(b,a):b.depth>a.depth?bb(b,a):cb(b,a),E=a)}
var db={isMounted:function(){return!1},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b)},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=!0;a.queue=[b]},enqueueForceUpdate:function(){}};
function eb(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=db;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue2:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:B({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&db.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===b.length)a.state=b[0];else{e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=!1,e=B({},e,h)):B(e,h))}a.state=e}else e.queue=null}
var fb={id:1,overflow:""};function gb(a,b,c){var d=a.id;a=a.overflow;var f=32-H(d)-1;d&=~(1<<f);c+=1;var e=32-H(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return{id:1<<32-H(b)+f|c<<f|d,overflow:e+a}}return{id:1<<e|c<<f|d,overflow:a}}var H=Math.clz32?Math.clz32:hb,ib=Math.log,jb=Math.LN2;function hb(a){a>>>=0;return 0===a?32:31-(ib(a)/jb|0)|0}function kb(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var lb="function"===typeof Object.is?Object.is:kb,I=null,ob=null,J=null,K=null,L=!1,M=!1,N=0,O=null,P=0;function Q(){if(null===I)throw Error(l(321));return I}function pb(){if(0<P)throw Error(l(312));return{memoizedState:null,queue:null,next:null}}function qb(){null===K?null===J?(L=!1,J=K=pb()):(L=!0,K=J):null===K.next?(L=!1,K=K.next=pb()):(L=!0,K=K.next);return K}function rb(){ob=I=null;M=!1;J=null;P=0;K=O=null}function sb(a,b){return"function"===typeof b?b(a):b}
function tb(a,b,c){I=Q();K=qb();if(L){var d=K.queue;b=d.dispatch;if(null!==O&&(c=O.get(d),void 0!==c)){O.delete(d);d=K.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);K.memoizedState=d;return[d,b]}return[K.memoizedState,b]}a=a===sb?"function"===typeof b?b():b:void 0!==c?c(b):b;K.memoizedState=a;a=K.queue={last:null,dispatch:null};a=a.dispatch=ub.bind(null,I,a);return[K.memoizedState,a]}
function vb(a,b){I=Q();K=qb();b=void 0===b?null:b;if(null!==K){var c=K.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!lb(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=a();K.memoizedState=[a,b];return a}function ub(a,b,c){if(25<=P)throw Error(l(301));if(a===I)if(M=!0,a={action:c,next:null},null===O&&(O=new Map),c=O.get(b),void 0===c)O.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function wb(){throw Error(l(394));}
function R(){}
var xb={readContext:function(a){return a._currentValue2},useContext:function(a){Q();return a._currentValue2},useMemo:vb,useReducer:tb,useRef:function(a){I=Q();K=qb();var b=K.memoizedState;return null===b?(a={current:a},K.memoizedState=a):b},useState:function(a){return tb(sb,a)},useInsertionEffect:R,useLayoutEffect:function(){},useCallback:function(a,b){return vb(function(){return a},b)},useImperativeHandle:R,useEffect:R,useDebugValue:R,useDeferredValue:function(a){Q();return a},useTransition:function(){Q();return[!1,
wb]},useId:function(){var a=ob.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-H(a)-1)).toString(32)+b;var c=S;if(null===c)throw Error(l(404));b=N++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){Q();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error(l(407));return c()}},S=null,yb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function zb(a){console.error(a);return null}
function T(){}
function Ab(a,b,c,d,f,e,g,h,k){var m=[],n=new Set;b={destination:null,responseState:b,progressiveChunkSize:void 0===d?12800:d,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:n,pingedTasks:m,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===f?zb:f,onAllReady:void 0===e?T:e,onShellReady:void 0===g?T:g,onShellError:void 0===h?T:h,onFatalError:void 0===k?T:k};c=U(b,0,null,c,!1,!1);c.parentFlushed=
!0;a=Bb(b,a,null,c,n,Ya,null,fb);m.push(a);return b}function Bb(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var k={node:b,ping:function(){var b=a.pingedTasks;b.push(k);1===b.length&&Cb(a)},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(k);return k}function U(a,b,c,d,f,e){return{status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}
function V(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError shouunction W(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,a.destination.destroy(b)):(a.status=1,a.fatalError=b)}
function Db(a,b,c,d,f){I={};ob=b;N=0;for(a=c(d,f);M;)M=!1,N=0,P+=1,K=null,a=c(d,f);rb();return a}function Eb(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else{c=c.getChildContext();for(var h in c)if(!(h in e))throw Error(l(108,Xa(d)||"Unknown",h));d=B({},g,c)}b.legacyContext=d;X(a,b,f);b.legacyContext=g}else X(a,b,f)}
function Fb(a,b){if(a&&a.defaultProps){b=B({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
function Gb(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=Za(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue2:f);eb(e,c,d,f);Eb(a,b,e,c)}else{e=Za(c,b.legacyContext);f=Db(a,b,c,d,e);var g=0!==N;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)eb(f,c,d,e),Eb(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=gb(d,1,0);try{X(a,b,f)}finally{b.treeContext=d}}else X(a,b,f)}else if("string"===
typeof c){f=b.blockedSegment;e=ya(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=!1;g=f.formatContext;f.formatContext=ra(g,c,d);Hb(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push("</",c,">")}f.lastPushedText=!1}else{switch(c){case Ua:case Ta:case Ja:case Ka:case Ia:X(a,b,d.children);return;
case Pa:X(a,b,d.children);return;case Sa:throw Error(l(343));case Oa:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},k=U(a,f.chunks.length,h,f.formatContext,!1,!1);f.children.push(k);f.lastPushedText=!1;var m=U(a,0,null,f.formatContext,!1,!1);m.parentFlushed=!0;b.blockedBoundary=h;b.blockedSegment=m;try{if(Hb(a,
b,d),a.responseState.generateStaticMarkup||m.lastPushedText&&m.textEmbedded&&m.chunks.push("\x3c!-- --\x3e"),m.status=1,Y(h,m),0===h.pendingTasks)break a}catch(n){m.status=4,h.forceClientRender=!0,h.errorDigest=V(a,n)}finally{b.blockedBoundary=c,b.blockedSegment=f}b=Bb(a,e,c,k,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b)}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case Na:d=Db(a,b,c.render,d,f);if(0!==N){c=b.treeContext;b.treeContext=gb(c,1,0);try{X(a,b,d)}finally{b.treeContext=
c}}else X(a,b,d);return;case Qa:c=c.type;d=Fb(c,d);Gb(a,b,c,d,f);return;case La:f=d.children;c=c._context;d=d.value;e=c._currentValue2;c._currentValue2=d;g=E;E=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;X(a,b,f);a=E;if(null===a)throw Error(l(403));d=a.parentValue;a.context._currentValue2=d===Va?a.context._defaultValue:d;a=E=a.parent;b.context=a;return;case Ma:d=d.children;d=d(c._currentValue2);X(a,b,d);return;case Ra:f=c._init;c=f(c._payload);d=Fb(c,d);Gb(a,
b,c,d,void 0);return}throw Error(l(130,null==c?c:typeof c,""));}}
function X(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ga:Gb(a,b,c.type,c.props,c.ref);return;case Ha:throw Error(l(257));case Ra:var d=c._init;c=d(c._payload);X(a,b,c);return}if(qa(c)){Ib(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=Wa&&c[Wa]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=[];do f.push(c.value),c=d.next();while(!c.done);Ib(a,b,f)}return}a=Object.prototype.toString.call(c);throw Error(l(31,"[object Object]"===
a?"object with keys {"+Object.keys(c).join(", ")+"}":a));}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=Fa(b.blockedSegment.chunks,c,a.responseState,d.lastPushedText)):"number"===typeof c&&(d=b.blockedSegment,d.lastPushedText=Fa(b.blockedSegment.chunks,""+c,a.responseState,d.lastPushedText))}function Ib(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=gb(e,d,f);try{Hb(a,b,c[f])}finally{b.treeContext=e}}}
function Hb(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return X(a,b,c)}catch(k){if(rb(),"object"===typeof k&&null!==k&&"function"===typeof k.then){c=k;var g=b.blockedSegment,h=U(a,g.chunks.length,null,g.formatContext,g.lastPushedText,!0);g.children.push(h);g.lastPushedText=!1;a=Bb(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;G(e)}else throw b.blockedSegment.formatContext=
d,b.legacyContext=f,b.context=e,G(e),k;}}function Jb(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;Kb(this,b,a)}
function Lb(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.push(null))):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,a=void 0===c?Error(l(432)):c,d.errorDigest=b.onError(a),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return Lb(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,0===b.allPendingTasks&&(d=b.onAllReady,
d()))}function Y(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&Y(a,c)}else a.completedSegments.push(b)}
function Kb(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error(l(389));a.completedRootSegment=c}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=T,b=a.onShellReady,b())}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&Y(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(Jb,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&1===c.status&&(Y(b,c),1===b.completedSegments.length&&
b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a())}
function Cb(a){if(2!==a.status){var b=E,c=yb.current;yb.current=xb;var d=S;S=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,k=g.blockedSegment;if(0===k.status){G(g.context);try{X(h,g,g.node),h.responseState.generateStaticMarkup||k.lastPushedText&&k.textEmbedded&&k.chunks.push("\x3c!-- --\x3e"),g.abortSet.delete(g),k.status=1,Kb(h,g.blockedBoundary,k)}catch(z){if(rb(),"object"===typeof z&&null!==z&&"function"===typeof z.then){var m=g.ping;z.then(m,m)}else{g.abortSet.delete(g);
k.status=4;var n=g.blockedBoundary,q=z,C=V(h,q);null===n?W(h,q):(n.pendingTasks--,n.forceClientRender||(n.forceClientRender=!0,n.errorDigest=C,n.parentFlushed&&h.clientRenderedBoundaries.push(n)));h.allPendingTasks--;if(0===h.allPendingTasks){var D=h.onAllReady;D()}}}finally{}}}f.splice(0,e);null!==a.destination&&Mb(a,a.destination)}catch(z){V(a,z),W(a,z)}finally{S=d,yb.current=c,c===xb&&G(b)}}}
function Z(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=!1;c.textEmbedded=!1;a=a.responseState;b.push('<template id="');b.push(a.placeholderPrefix);a=d.toString(16);b.push(a);return b.push('"></template>');case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)b.push(d[e]);f=Nb(a,b,f)}for(;e<d.length-1;e++)b.push(d[e]);e<d.length&&(f=b.push(d[e]));return f;default:throw Error(l(390));}}
function Nb(a,b,c){var d=c.boundary;if(null===d)return Z(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)return a.responseState.generateStaticMarkup||(d=d.errorDigest,b.push("\x3c!--$!--\x3e"),b.push("<template"),d&&(b.push(' data-dgst="'),d=v(d),b.push(d),b.push('"')),b.push("></template>")),Z(a,b,c),a=a.responseState.generateStaticMarkup?!0:b.push("\x3c!--/$--\x3e"),a;if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;
var e=f.nextSuspenseID++;f=f.boundaryPrefix+e.toString(16);d=d.id=f;za(b,a.responseState,d);Z(a,b,c);return b.push("\x3c!--/$--\x3e")}if(d.byteSize>a.progressiveChunkSize)return d.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(d),za(b,a.responseState,d.id),Z(a,b,c),b.push("\x3c!--/$--\x3e");a.responseState.generateStaticMarkup||b.push("\x3c!--$--\x3e");c=d.completedSegments;if(1!==c.length)throw Error(l(391));Nb(a,b,c[0]);a=a.responseState.generateStaticMarkup?!0:b.push("\x3c!--/$--\x3e");
return a}function Ob(a,b,c){Aa(b,a.responseState,c.formatContext,c.id);Nb(a,b,c);return Ba(b,c.formatContext)}
function Pb(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)Qb(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;b.push(a.startInlineScript);a.sentCompleteBoundaryFunction?b.push('$RC("'):(a.sentCompleteBoundaryFunction=!0,b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));if(null===
d)throw Error(l(395));c=c.toString(16);b.push(d);b.push('","');b.push(a.segmentPrefix);b.push(c);return b.push('")\x3c/script>')}
function Qb(a,b,c,d){if(2===d.status)return!0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error(l(392));return Ob(a,b,d)}Ob(a,b,d);a=a.responseState;b.push(a.startInlineScript);a.sentCompleteSegmentFunction?b.push('$RS("'):(a.sentCompleteSegmentFunction=!0,b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));b.push(a.segmentPrefix);
f=f.toString(16);b.push(f);b.push('","');b.push(a.placeholderPrefix);b.push(f);return b.push('")\x3c/script>')}
function Mb(a,b){try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){Nb(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)b.push(d[c]);c<d.length&&b.push(d[c])}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,k=g.id,m=g.errorDigest,n=g.errorMessage,q=g.errorComponentStack;d.push(h.startInlineScript);h.sentClientRenderFunction?d.push('$RX("'):(h.sentClientRenderFunction=!0,d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
if(null===k)throw Error(l(395));d.push(k);d.push('"');if(m||n||q){d.push(",");var C=Da(m||"");d.push(C)}if(n||q){d.push(",");var D=Da(n||"");d.push(D)}if(q){d.push(",");var z=Da(q);d.push(z)}if(!d.push(")\x3c/script>")){a.destination=null;e++;f.splice(0,e);return}}f.splice(0,e);var ba=a.completedBoundaries;for(e=0;e<ba.length;e++)if(!Pb(a,b,ba[e])){a.destination=null;e++;ba.splice(0,e);return}ba.splice(0,e);var ca=a.partialBoundaries;for(e=0;e<ca.length;e++){var mb=ca[e];a:{f=a;g=b;var da=mb.completedSegments;
for(h=0;h<da.length;h++)if(!Qb(f,g,mb,da[h])){h++;da.splice(0,h);var nb=!1;break a}da.splice(0,h);nb=!0}if(!nb){a.destination=null;e++;ca.splice(0,e);return}}ca.splice(0,e);var ea=a.completedBoundaries;for(e=0;e<ea.length;e++)if(!Pb(a,b,ea[e])){a.destination=null;e++;ea.splice(0,e);return}ea.splice(0,e)}finally{0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&b.push(null)}}
function Rb(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return Lb(&&Mb(a,a{V(a,d),W(a,d)}}function Sb(){}
function Tb(a,b,c,d){var f=!1,e=null,g="",h={push:function(a){null!==a&,destroy:function(a){f=!0;e=a}},k=!1;a=Ab(a,Ea(c,b?b.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},Infinity,Sb,void 0,function(){k=!0},void 0,void 0);Cb(a);Rb(a,d);if(1===a.status)a.status=2,h.destroy(a.fatalError);else if(2!==a.status&&null===a.destination){a.destination=h;try{Mb(a,h)}catch(m){V(a,m),W(a,m)}}if(f)throw e;if(!k)throw Error(l(426));return g}
exports.renderToNodeStream=function(){throw Error(l(207));};exports.renderToStaticMarkup=function(a,b){return Tb(a,b,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the servet please switch to "renIf you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};
exports.version="18.2.0";


/***/ }),

/***/ 8698:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This sournified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=null,n=0;
function p(a,b){if(0!==b.length)if(512<b.length)0<n&&(a.enqueue(new Uint8Array(l.buffer,0,n)),l=new Uint8Array(512),n=0),a.enqueue(b);else{var c=l.length-n;c<b.length&&(0===c?at8Array(512),n=0);l.set(b,n);n+=b.length}}function t(a,bew TextEncoder;function u(a){return ca.encode(a)}function w(a){return ca.encode(a)}
function da(a,b){"function"===typeof a.error?a.error(b):a.close()}var x=Object.prototype.hasOwnProperty,ea=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u=b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(functioccept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new y(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new y(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new y(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new y(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a","download"].forEach(function(a){z[a]=new y(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(functirowSpan","start"].forEach(function(a){z[a]=new y(a,5,!1,a.toLowerCase(),null,!1,!1)});var ja=/[\-:]([a-z])/g;function ka(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ja,
ka);z[b]=new y(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split("1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ja,ka);z[b]=new y(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new y(a,1,!1,a.toLowerCank:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new y(a,1,!1,a.toLowerCase(),null,!0,!0)});
var B={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
fillOpacity:!0,floodOpacity:!0,stopOpach:!0},la=["Webkit",;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
var pa=/([A-Z])/g,qa=/^ms-/,ra=Array.isArray,sascript type="module" src="'),wa=w('" async="">\x3c/script>'),xa=/(<\/|<)(s)(cript)/gi;function ya(a,b,c,d){return""+b+("s"===c?"\\u0073":"\\u0053")+d}
function za(a,b,c,d,f){a=void 0===a?"":a;b=void 0===b?sa:w('<script nonce="'+C(b)+'">');var e=[];void 0!==c&&e.push(b,u((""+c).replace(xa,ya)),ta);if(void 0!==d)for(c=0;c<d.length;c++)e.push(ua,u(C(d[c])),wa);if(void 0!==f)for(d=0;d<f.length;d++)e.push(va,u(C(f[d])),wa);return{bootstrapChunks:e,startInlineScript:b,placeholderPrefix:w(a+"P:"),segmentPrefix:w(case "tfoot":return D(5,null);case "colgroup":return D(7,null);case "tr":return D(6,null)}return 4<=a.insertionMode||0===a.insertionMode?D(1,null):a}var Ca=w("\x3c!-- --\x3e");function Da(a,b,c,d){if(""===b)return d;d&&a.push(Ca);a.push(u(C(b)));return!0}
var Ea=new Map,Fa=w(' style="'),Ga=w(":"),Ha=w(";");
function Ia(a,b,c){if("object"!==typeof c)throw Error(k(62));b=!0;for(var d in c)if(x.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=u(C(d));f=u(C((""+f).trim()))}else{e=d;var g=Ea.get(e);void 0!==g?e=g:(g=w(C(e.replace(pa,"-$1").toLowerCase().replace(qa,"-ms-"))),Ea.set(e,g),e=g);f="number"===typeof f?0===f||x.call(B,d)?u(""+f):u(f+"px"):u(C((""+f).trim()))}b?(b=!1,a.push(Fa,e,Ga,f)):a.push(Ha,e,Ga,f)}}b||a.push(E)}
var H=w(" "),I=w('="'),E=w('"'),Ja=w('=""');
function J(a,b,c,d){switch(c){case "style":Ia(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=z.hasOwnProperty(c)?z[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=u(b.attributeName);switch(b.type){case 3:d&&a.push(H,c,Ja);break;case 4:!0===d?a.push(H,c,Ja):!1!==
d&&a.push(H,c,I,u(C(d)),E);break;case 5:isNaN(d)||a.push(H,c,I,u(C(d)),E);break;case 6:!isNaN(d)&&1<=d&&a.push(H,c,I,u(C(d)),E);break;default:b.sanitizeURL&&(d=""+d),a.push(H,c,I,u(C(d)),E)}}else if(ia(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(H,u(c),I,u(C(d)),E)}}var K=w(">"),Ka=w("/>");
function L(a,b,c){w Error(k(61));b=b.__html;null!==b&&void 0!==b&&a.push(u(""+b))}}function La(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Ma=w(' selected=""');
function Na(a,b,c,d){a.push(M(c));var f=c=null,e;for(e in b)if(x.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:J(a,d,e,g)}}a.push(K);L(a,f,c);return"string"===typeof c?(a.push(u(C(c))),null):c}var Oa=w("\n"),Pa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Qa=new Map;function M(a){var b=Qa.get(a);if(void 0===b){if(!Pa.test(a))throw Error(k(65,a));b=w("<"+a);Qa.set(a,b)}return b}var Ra=w("<!DOCTYPE html>");
function Sa(a,b,c,d,f){switch(b){case "select":a.push(M("select"));var e=null,g=null;for(r in c)if(x.call(c,r)){var h=c[r];if(null!=h)switch(r){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:J(a,d,r,h)}}a.push(K);L(a,g,e);return e;case "option":g=f.selectedValue;a.push(M("option"));var m=h=null,q=null;var r=null;for(e in c)if(x.call(c,e)){var v=c[e];if(null!=v)switch(e){case "children":h=v;break;case "selected":q=v;break;case "dangerouslySetInnerHTML":r=
v;break;case "value":m=v;default:J(a,d,e,v)}}if(null!=g)if(c=null!==m?""+m:La(h),ra(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(Ma);break}}else""+g===c&&a.push(Ma);else q&&a.push(Ma);a.push(K);L(a,r,h);return h;case "textarea":a.push(M("textarea"));r=g=e=null;for(h in c)if(x.call(c,h)&&(m=c[h],null!=m))switch(h){case "children":r=m;break;case "value":e=m;break;case "defaultValue":g=m;break;case "dangerouslySetInnerHTML":throw Error(k(91));default:J(a,d,h,m)}null===e&&null!==g&&(e=g);a.push(K);
if(null!=r){if(null!=e)throw Error(k(92));if(ra(r)&&1<r.length)throw Error(k(93));e=""+r}"string"===typeof e&&"\n"===e[0]&&a.push(Oa);null!==e&&a.push(u(C(""+e)));return null;case "input":a.push(M("input"));m=r=h=e=null;for(g in c)if(x.call(c,g)&&(q=c[g],null!=q))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error(k(399,"input"));case "defaultChecked":m=q;break;case "defaultValue":h=q;break;case "checked":r=q;break;case "value":e=q;break;default:J(a,d,g,q)}null!==r?J(a,d,"checked",
r):null!==m&&J(a,d,"checked",m);null!==e?J(a,d,"value",e):null!==h&&J(a,d,"value",h);a.push(Ka);return null;case "menuitem":a.push(M("menuitem"));for(var A in c)if(x.call(c,A)&&(e=c[A],null!=e))switch(A){case "children":case "dangerouslySetInnerHTML":throw Error(k(400));default:J(a,d,A,e)}a.push(K);return null;case "title":a.push(M("title"));e=null;for(v in c)if(x.call(c,v)&&(g=c[v],null!=g))switch(v){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error(k(434));default:J(a,d,v,g)}a.push(K);
return e;case "listing":case "pre":a.push(M(b));g=e=null;for(m in c)if(x.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:J(a,d,m,h)}a.push(K);if(null!=g){if(null!=e)throw Error(k(60));if("object"!==typeof g||!("__html"in g))throw Error(k(61));c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push(Oa,u(c)):a.push(u(""+c)))}"string"===typeof e&&"\n"===e[0]&&a.push(Oa);return e;case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(M(b));
for(var F in c)if(x.call(c,F)&&(e=c[F],null!=e))switch(F){case "children":case "dangerouslySetInnerHTML":throw Error(k(399,b));default:J(a,d,F,e)}a.push(Ka);return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return Na(a,c,b,d);case "html":return 0===f.insertionMode&&a.push(Ra),Na(a,c,b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return Na(a,c,b,d);a.push(M(b));
g=e=null;for(q in c)if(x.call(c,q)&&(h=c[q],null!=h))switch(q){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":Ia(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ia(q)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(H,u(q),I,u(C(h)),E)}a.push(K);L(a,g,e);return e}}
var Ta=w("</"),Ua=w(">"),Va=w('<template id="'),Wa=w('"></template>'),Xa=w("\x3c!--$--\x3e"),Ya=w('\x3c!--$?--\x3e<template id="'),Za=w('"></template>'),$a=w("\x3c!--$!--\x3e"),ab=w("\x3c!--/$--\x3e"),bb=w("<template"),cb=w('"'),db=w(' data-dgst="');w(' data-msg="');w(' data-stck="');var eb=w("></template>");function fb(a,b,c){p(a,Ya);if(null===c)throw Error(k(395));p(a,c);return t(a,Za)}
var gb=w('<div hidden id="'),hb=w('">'),ib=w("</div>"),jb=w('<svg aria-hidden="true" style="display:none" id="'),kb=w('">'),lb=w("</svg>"),mb=w('<math aria-hidden="true" style="display:none" id="'),nb=w('">'),ob=w("</math>"),pb=w('<table hidden id="'),qb=w('">'),rb=w("</table>"),sb=w('<table hidden><tbody id="'),tb=w('">'),ub=w("</tbody>< t(a,lb);case 3:return t(a,ob);case 4:return t(a,rb);case 5:return t(a,ub);case 6:return t(a,xb);case 7:return t(a,Ab);default:throw Error(k(397));}}
var Db=w('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),Eb=w('$RS("'),Gb=w('","'),Hb=w('")\x3c/script>'),Ib=w('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),
Jb=w('$RC("'),Kb=w('","'),Lb=w('")\x3c/script>'),Mb=w('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}
var N=Object.assign,Tb=Symbol.for("react.element"),Ub=Symbol.for("react.portal"),Vb=Symbol.for("react.fragment"),Wb=Symbol.for("react.strict_mode"),Xb=Symbol.for("react.profiler"),Yb=Symbol.for("react.provider"),Zb=Symbol.for("react.context"),$b=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),bc=Symbol.for("react.suspense_list"),cc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),ec=Symbol.forreturn a;case cc:return b=a.displayName||null,null!==b?b:jc(a.type)||"Memo";case dc:b=a._payload;a=a._init;try{r;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error(k(401));}else{iext._currentValua){var b=O;b!==a&&(null===b?nc(a):null===a?mc(b):b.depth===a.depth?P(b,a):b.depth>a.depth?oc(b,a):pc(b,a),O=a)}
var qc={isMounted:function(){return!1},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b)},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=!0;a.queue=[b]},enqueueForceUpdate:function(){}};
function rc(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=qc;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:N({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&qc.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===b.length)a.state=b[0];else{e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g32-uc(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString2:vc,wc=Math.log,xc=Math.LN2;function vc(a){a>>>=0;return 0===a?32:31-(wc(a)/xc|0)|0}function yc(a,b){retuull,queue:null,next:null}}function Fc(){null===S?next:null},null===V&&(V=new Map),c=V.get(b),void 0===c)V.set(b,a);else{for(b=c;nun Lc(){throw Error(k(394));}funcn a._currentValue},useMemo:Kc,useReducer:Ic,useRef:function(a){R=W();S=Fc();var b=S.memoizedState;ret,useState:function(a){return Ic(Hc,a)},useInsertionEffect:Mc,useLayoutlback:functionrn a},b)},useImperativeHandle:Mc,useEffect:Mc,useDebugValue:Mc,useDeferredValue:function(a){W();return a},useTransition:function(){W();
return[!1,Lc]},useId:function(){var a=Ac.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-uc(a=c)throw Error(k(404)turn a+":"},useMutableSource:function(a,b){W();return b(a._source)},useSyncExternalStore:07));return c()}},Nc=null,Pc=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Qc(a){console.error(a);return null}
function X(){}
function Rc(a,b,c,d,f,e,g,h,m){var q=[],r=new Set;b={destination:null,responseState:b,progressiveChunkSize:void 0===d?12800:d,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:r,pingedTasks:q,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===f?Qc:f,onAllReady:void 0===e?X:e,onShellReady:void 0===g?X:g,onShellError:void 0===h?X:h,onFatalError:void 0===m?X:m};c=Sc(b,0,null,c,!1,!1);c.parentFlushed=
!0;a=Tc(b,a,null,c,r,kc,null,sc);q.push(a);return b}function Tc(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var m={node:b,ping:function(){var btion Sc(a,b,c,d,f,e){return{status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}
function Y(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof a+'" instead');return a}function Vc(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,da(a.destination,b)):(a.status=1,a.fatalError=b)}
function Wc(a,b,c,d,f){R={};Ac=b;U=0;for(a=c(d,f);Cc;)Cc=!1,U=0,Dc+=1,S=null,a=c(d,f);Gc();return a}function Xc(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else{c=c.getChiontext=g}else Z(a,b,f)}
function Yc(a,b){if(a&&a.defaultProps){b=N({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
function Zc(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=lc(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue:f);rc(e,c,d,f);Xc(a,b,e,c)}else{e=lc(c,b.legacyContext);f=Wc(a,b,c,d,e);var g=0!==U;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)rc(f,c,d,e),Xc(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=tc(d,1,0);try{Z(a,b,f)}finally{b.treeContext=d}}else Z(a,b,f)}else if("string"===
typeof c){f=b.blockedSegment;e=Sa(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=!1;g=f.formatContext;f.formatContext=Ba(g,c,d);$c(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push(Ta,u(c),Ua)}f.lastPushedText=!1}else{switch(c){case gc:case fc:case Wb:case Xb:case Vb:Z(a,b,d.children);return;
case bc:Z(a,b,d.children);return;case ec:throw Error(k(343));case ac:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},m=Sc(a,f.chunks.length,h,f.formatContext,!1,!1);f.children.push(m);f.lastPushedText=!1;var q=Sc(a,0,null,f.formatContext,!1,!1);q.parentFlushed=!0;b.blockedBoundary=h;b.blockedSegment=q;try{if($c(a,
b,d),q.lastPushedText&&q.textEmbedded&&q.chunks.push(Ca),q.status=1,ad(h,q),0===h.pendingTasks)break a}catch(r){q.status=4,h.forceClientRender=!0,h.errorDigest=Y(a,r)}finally{b.blockedBoundary=c,b.blockedSegment=f}b=Tc(a,e,c,m,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b)}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case $b:d=Wc(a,b,c.render,d,f);if(0!==U){c=b.treeContext;b.treeContext=tc(c,1,0);try{Z(a,b,d)}finally{b.treeContext=c}}else Z(a,b,d);return;case cc:c=
c.type;d=Yc(c,d);Zc(a,b,c,d,f);return;case Yb:f=d.children;c=c._context;d=d.value;e=c._currentValue;c._currentValue=d;g=O;O=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;Z(a,b,f);a=O;if(null===a)throw Error(k(403));d=a.parentValue;a.context._currentValue=d===hc?a.context._defaultValue:d;a=O=a.parent;b.context=a;return;case Zb:d=d.children;d=d(c._currentValue);Z(a,b,d);return;case dc:f=c._init;c=f(c._payload);d=Yc(c,d);Zc(a,b,c,d,void 0);return}throw Error(k(130,
null==c?c:typeof c,""));}}
function Z(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Tb:Zc(a,b,c.type,c.props,c.ref);return;case Ub:throw Error(k(257));case dc:var d=c._init;c=d(c._payload);Z(a,b,c);return}if(ra(c)){bd(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=ic&&c[ic]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=[];do f.push(c.value),c=d.next();while(!c.done);bd(a,b,f)}return}a=Object.prototype.toString.call(c);throw Error(k(31,"[object Object]"===
a?"object with keys {"+Object.keys(c).join(", ")+"}":a));}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=Da(b.blockedSegment.chunks,c,a.responsushedText))}function bd(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=tc(e,d,f);try{$c(a,b,c[f])}finally{b.treeContext=e}}}
function $c(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return Z(a,b,c)}catch(m){if(Gc(),"object"===typeof m&&null!==m&&"function"===typeof m.then){c=m;var g=b.blockedSegment,h=Sc(a,g.chunks.length,null,g.formatContext,g.lastPushedText,!0);g.children.push(h);g.lastPushedText=!1;a=Tc(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;Q(e)}else throw b.blockedSegment.formatContext=
d,b.legacyContext=f,b.context=e,Q(e),m;}}function cd(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;dd(this,b,a)}
function ed(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.close())):(d.pendingTasks--,d.forceClientRender||(d.forceClientR432)):c,d.errorDigest=b.onError(a),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return ed(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,0===b.allPendingTasks&&(d=b.onAllReady,d()))}
function ad(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&ad(a,c)}else a.completedSegments.push(b)}
function dd(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error(k(389));a.completedRootSegment=c}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=X,b=a.onShellReady,b())}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&ad(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(cd,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&1===c.status&&(ad(b,c),1===b.completedSegments.length&&
b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a())}
function Uc(a){if(2!==a.status){var b=O,c=Pc.current;Pc.current=Oc;var d=Nc;Nc=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,m=g.blockedSegment;if(0===m.status){Q(g.context);try{Z(h,g,g.node),m.lastPushedText&&m.textEmbedded&&m.chunks.push(Ca),g.abortSet.delete(g),m.status=1,dd(h,g.blockedBoundary,m)}catch(G){if(Gc(),"object"===typeof G&&null!==G&&"function"===typeof G.then){var q=g.ping;G.then(q,q)}else{g.abortSet.delete(g);m.status=4;var r=g.blockedBoundary,
v=G,A=Y(h,v);null===r?Vc(h,v):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,r.errorDigest=A,r.parentFlushed&&h.clientRenderedBoundaries.push(r)));h.allPendingTasks--;if(0===h.allPendingTasks){var F=h.onAllReady;F()}}}finally{}}}f.splice(0,e);null!==a.destination&&fd(a,a.destination)}catch(G){Y(a,G),Vc(a,G)}finally{Nc=d,Pc.current=c,c===Oc&&Q(b)}}}
function gd(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=!1;c.textEmbedded=!1;a=a.responseState;p(b,Va);p(b,a.placeholderPrefix);a=u(d.toString(16));p(b,a);return t(b,Wa);case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)p(b,d[e]);f=hd(a,b,f)}for(;e<d.length-1;e++)p(b,d[e]);e<d.length&&(f=t(b,d[e]));return f;default:throw Error(k(390));}}
function hd(a,b,c){var d=c.boundary;if(null===d)return gd(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)d=d.errorDigest,t(b,$a),p(b,bb),d&&(p(b,db),p(b,u(C(d))),p(b,cb)),t(b,eb),gd(a,b,c);else if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;var e=f.nextSuspenseID++;f=w(f.boundaryPrefix+e.toString(16));d=d.id=f;fb(b,a.responseState,d);gd(a,b,c)}else if(d.byteSize>a.progressiveChunkSize)d.rootSegmentID=a.nextSegmentId++,
a.completedBoundaries.push(d),fb(b,a.responseState,d.id),gd(a,b,c);else{t(b,Xa);c=d.completedSegments;if(1!==c.length)throw Error(k(391));hd(a,b,c[0])}return t(b,ab)}function id(a,b,c){Bb(b,a.responseState,c.formatContext,c.id);hd(a,b,c);return Cb(b,c.formatContext)}
function jd(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)kd(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;p(b,a.startInlineScript);a.sentCompleteBoundaryFunction?p(b,Jb):(a.sentCompleteBoundaryFunction=!0,p(b,Ib));if(null===d)throw Error(k(395));c=u(c.toString(16));p(b,d);p(b,Kb);p(b,a.segmentPrefix);p(b,c);return t(b,Lb)}
function kd(a,b,c,d){if(2===d.status)return!0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error(k(392));return id(a,b,d)}id(a,b,d);a=a.responseState;p(b,a.startInlineScript);a.sentCompleteSegmentFunction?p(b,Eb):(a.sentCompleteSegmentFunction=!0,p(b,Db));p(b,a.segmentPrefix);f=u(f.toString(16));p(b,f);p(b,Gb);p(b,a.placeholderPrefix);p(b,f);return t(b,Hb)}
function fd(a,b){l=new Uint8Array(512);n=0;try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){hd(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)p(b,d[c]);c<d.length&&t(b,d[c])}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,m=g.id,q=g.errorDigest,r=g.errorMessage,v=g.errorComponentStack;p(d,h.startInlineScript);h.sentClientRenderFunction?p(d,Nb):(h.sentClientRenderFunction=!0,p(d,
Mb));if(null===m)throw Error(k(395));p(d,m);p(d,Ob);if(q||r||v)p(d,Qb),p(d,u(Sb(q||"")));if(r||v)p(d,Qb),p(d,u(Sb(r||"")));v&&(p(d,Qb),p(d,u(Sb(v))));if(!t(d,Pb)){a.destination=null;e++;f.splice(0,e);return}}f.splice(0,e);var A=a.completedBoundaries;for(e=0;e<A.length;e++)if(!jd(a,b,A[e])){a.destination=null;e++;A.splice(0,e);return}A.splice(0,e);ba(b);l=new Uint8Array(512);n=0;var F=a.partialBoundaries;for(e=0;e<F.length;e++){var G=F[e];a:{f=a;g=b;var ma=G.completedSegments;for(h=0;h<ma.length;h++)if(!kd(f,
g,G,ma[h])){h++;ma.splice(0,h);var Fb=!1;break a}ma.splice(0,h);Fb=!0}if(!Fb){a.destination=null;e++;F.splice(0,e);return}}F.splice(0,e);var na=a.completedBoundaries;for(e=0;e<na.length;e++)if(!jd(a,b,na[e])){a.destination=null;e++;na.splice(0,e);return}na.splice(0,e)}finally{ba(b),0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&b.close()}}
function ld(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return ed(c,a,b)});c.clear();null!==a.destinat)}catch(d){Y(a,d),Vc(a,d)}}
exports.renderToReadableStream=function(a,b){return new Promise(function(c,d){var f,e,g=new Promise(function(a,b){e=a;f=b}),h=Rc(a,za(b?b.identifierPrefix:void 0,b?b.nonce:void 0,b?b.bootstrapScriptContent:void 0,b?b.bootstrapScripts:void 0,b?b.bootstrapMn(a){if(1===h.status)h.status=2,da(a,h.fatalError);else if(2!==h.status&&null===h.destination){h.destination=
a;try{fd(h,a)}catch(A){Y(h,A),Vc(h,A)}}},cancel:function(){ld(h)}},{highWaterMark:0});a.allReady=g;c(a)},function(a){g.catch(function(){});d(a)},f);if(b&&b.signal){var m=b.signal,q=function(){ld(h,m.reason);m.removeEventListener("abort",q)};m.addEventListener("abort",q)}Uc(h)})};exports.version="18.2.0";


/***/ }),

/***/ 7762:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var l, s;
if (true) {
  l = __webpack_require__(7774);
  s = __webpack_require__(8698);
} else {}

exports.version = l.version;
exports.renderToString = l.renderToString;
exports.renderToStaticMarkup = l.renderToStaticMarkup;
exports.renderToNodeStream = l.renderToNodeStream;
expction (size) {
  if (t(enc) : hash
}

Hash.pire__(8432)
exports.sh 4)
  H.writeInt32BE(t4)
  H.writeInt32BE(thhis._d, 12)
  H.writeIhis._e, 16)
  H.writeIthis._dh, this._dl, 24this._fh, this._fl, 40)
  writeInt64BE(this._gh, this._gl, 48)
  writeInt64BE(this._hh, this._hl, 56)

  return H
}

module.exports = Sha512


/***/ }),

/***/ 8388:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusable: function() { return /* binding */ focusable; },
/* harmony export */   getTabIndex: function() { return /* binding */ getTabIndex; },
/* harmony export */   isFocusable: function() { return /* binding */ isFocusable; },
/* harmony export */   isTabbable: function() { return /* binding */ isTabbable; },
/* harmony export */   tabbable: function() { return /* binding */ tabbable; }
/* harmony export */ });
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matc0 d 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itskely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's contenull || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} ideContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContthe element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tdTabbables = futabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagNagName === 'DETAILS' &&dio(nodes, form) {
  foyfill: %s', errioSet, node.form);
  returut(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(nodeRootHost2.ownerDoce.getBoundingClirn isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fielntElement;
    }
  }

  // else, node'sh a summary, the summary element gets {
  if (isNonTabbableRadio(node) 
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targetble) {
    sortaates = getCandida{
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchi  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ 7907:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: function() { return /* binding */ $6db58dc88e78b024$export$2f817fcdc4b89ae0; },
/* harmony export */   J: function() { return /* binding */ $5b160d28a433310d$export$c17fa47878dc55b6; }
/* harmony export */ });
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and liet string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    constructor(messages, defaultLocale = "en-US"){
        // Clone messages so we don't modify the original object.
        this.strings = {
            ...messages
        };
        this.defaultLocale = defaultLocale;
    }
}
function $5b160d28a433310d$var$getStringsForLocale(locale, strings, defaultLocale = "en-US") {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $5b160d28a433310d$var$getLanguage(locale);
    if (strings[language]) return strings[language];
    for(let key in strings){
        if (key.startsWith(language + "-")) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $5b160d28a433310d$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).language;
    return locale.split("-")[0];
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $6db58dc88e78b024$var$pluralRulesCache = new Map();
const $6db58dc88e78b024$var$numberFormatCache = new Map();
class $6db58dc88e78b024$export$2f817fcdc4b89ae0 {
    /** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
        let message = this.strings.getStringForLocale(key, this.locale);
        return typeof message === "function" ? message(variables, this) : message;
    }
    plural(count, options, type = "cardinal") {
        let opt = options["=" + count];
        if (opt) return typeof opt === "function" ? opt() : opt;
        let key = this.locale + ":" + type;
        let pluralRules = $6db58dc88e78b024$var$pluralRulesCache.get(key);
        if (!pluralRules) {
            pluralRules = new Intl.PluralRules(this.locale, {
                type: type
            });
            $6db58dc88e78b024$var$pluralRulesCache.set(key, pluralRules);
        }
        let selocale);
            $6db58dc88e78b024$var$numberFormatCache.set(this.locale, numberFormat);
        }
        return numberFormat.format(value);
 n typeof opt === "function" ? opt() : opt;
    }
    constructor(locale, strings){
        this.locale = locale;
        this.strings = strings;
    }
}





//# sourceMappingURL=module.js.map


/***/ })

}]);