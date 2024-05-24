/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 18216:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: componentPreFillRadFooter

// EXTERNAL MODULE: ./node_modules/lit/index.js
var lit = __webpack_require__(85862);
// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(33692);
;// CONCATENATED MODULE: ./node_modules/lit-html/directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=//# sourceMappingURL=directive.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directives/unsafe-html.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class unsafe_html_e extends i{constructor(i){if(super(i),this.et=lit_html/* nothing */.Ld,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const o=e(unsafe_html_e);
//# sourceMappingURL=unsafe-html.js.map

;// CONCATENATED MODULE: ./src/js/component-pre-fill-rad-footer.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var componentPreFillRadFooter = /*#__PURE__*/function (_LitElement) {
  _inherits(componentPreFillRadFooter, _LitElement);
  function componentPreFillRadFooter() {
    _classCallCheck(this, componentPreFillRadFooter);
    return _callSuper(this, componentPreFillRadFooter);
  }
  _createClass(componentPreFillRadFooter, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      //If this.props comes as object means it is coming from the page-builder
      if (Array.isArray(this.props)) {
        var customPrefill = this.props.filter(;
        if (customPrefill.length > 0) this.props = customPrefill[0].prefill_rad_settings_group;
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.props = this.props ? this.props : {};
      return (0,lit/* html */.dy)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div\n        class=\"pre-fill-rad-footer font-override pre_fill_rad_form pre-fill-rad pre-fill-rad-footer variant-", "\"\n        style=\"background-image: url('", "/pre-fill-rad-footer-art", ".svg');\"\n      >\n        <span class=\"pre-fill-rad-footer-text\">\n          ", "\n        </span>\n        ", "\n      </div>\n    "])), this.variant, localize_script.THEME_IMAGES, this.variant ? "-for-".concat(this.variant, "-bg") : "", this.props.use_global_data ? o(this.global_data.text) : (0,lit/* html */.dy)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([" ", " "])), this.props.text ? o(this.props.text) : "Join The World's Fastest-Growing Brands"), this.props.use_dual_cta && !this.props.use_global_data ? (0,lit/* html */.dy)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n              <div class=\"rad-cta-container\">\n                ", "\n              </div>\n            "])), this.props.dual_ctas.map(function (cta) {
        return (0,lit/* html */.dy)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n                    ", "\n                  "])), cta.use_rad ? (0,lit/* html */.dy)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n                          <button class=\"dual-rad-btn pre_fill_rad_v3_btn\">\n                            ", "\n                          </button>\n                        "])), cta.custom_cta.title ? cta.custom_cta.title : "Request a demo") : (0,lit/* html */.dy)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n                          <a\n                            class=\"dual-rad-btn\"\n                            href=\"", "\"\n                            target=\"", "\"\n                            @click=\"", "\"\n                          >\n                            ", "\n                            ", "\n                          </a>\n                        "])), cta.custom_cta.url, cta.custom_cta.target, function () {
          return window.redcrossOnLink({
            btnName: "Custom CTA",
            btnLocation: "Prefill rad footer",
            product: page_title ? page_title : ""
          });
        }, cta.custom_cta.title, cta.with_icon && cta.icon ? (0,lit/* html */.dy)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([" <span class=\"btn-icon\" style=\"background-image:url('", "')\"></span> "])), cta["icon"]) : ""));
      })) : (0,lit/* html */.dy)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n              <form\n                class=\"radform\"\n                novalidate\n                form-id=\"", "\"\n                action=\"", "\"\n                method=\"post\"\n              >\n                <input class=\"\" type=\"email\" name=\"rad_email\" placeholder=\"Enter your email\" />\n                <div class=\"pre-fill-rad-cta-wrapper\">\n                  <button\n                    type=\"submit\"\n                    class=\"pre_fill_rad_v3_btn\"\n                    data-location=\"RAD Footer\"\n                    data-text=\"", "\"\n                  >\n                    ", "\n                  </button>\n                </div>\n              </form>\n            "])), Date.now(), window.location.origin.includes("localhost") ? "http://localhost/yotpo/request-a-demo" : window.location.origin + "/request-a-demo", this.props.cta_text ? this.props.cta_text : "Request a demo", this.props.use_global_data ? (0,lit/* html */.dy)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([" ", ""])), this.global_data.cta_text) : (0,lit/* html */.dy)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([" ", " "])), this.props.cta_text ? this.props.cta_text : "Request a demo")));
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this;
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        props: {
          type: Object
        },
        variant: {
          type: String
        },
        global_data: {
          type: Object
        }
      };
    }
  }]);
  return componentPreFillRadFooter;
}(lit/* LitElement */.oi);
window.customElements.define("component-pre-fill-rad-footer", componentPreFillRadFooter);

/***/ }),

/***/ 30814:
/***/ (function() {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HubSpot = /*#__PURE__*/function () {
  function HubSpot() {
    var _this = this;
    _classCallCheck(this, HubSpot);
    _defineProperty(this, "formIds", window.hsForms || []);
    // Rad
    _defineProperty(this, "radFirstStepFormId", "aa5f43b1-3616-403e-b0af-07ffdeb8d05f");
    _defineProperty(this, "radSecondStepFormId", "7668c16d-0032-450f-b204-9d9e820a910e");
    // Chilipiper data
    _defineProperty(this, "chiliPiperFormData", {});
    window.addEventListener("message", function (event) {
      if (event.data.type === "hsFormCallback") {
        if (event.data.eventName === "onBeforeFormInit") {
          //push Hubspot form ID to array
          _this.formIds.push(event.data.id);
        }
        if (event.data.eventName === "onReady") {
          if (_this.formIds.length === 0) {
            return;
          }
          var _formId = event.data.id;
          // const mainFormElement = $("#hsForm_" + formId);
          // mainFormElement.css("visibility", "visible");
          _this.hsFormChain(_formId);
          window.handleFormReady(_formId);
        }
        if (event.data.eventName === "onBeforeFormSubmit") {
          var formId = event.data.id;
          window.handleBeforeFormSubmit(formId, event.data.data);
        }
      }
    });
  }
  _createClass(HubSpot, [{
    key: "hsFormChain",
    value: function hsFormChain(formId) {
      if (this.formIds.length === 0) {
        return;
      }
      var formElement = $("#hsForm_" + formId);
      var formEl = document.getElementById("hsForm_" + formId);
      var uid = "_" + Math.floor(Math.random() * Date.now());
      var arrayFrom = Function.prototype.call.bind(Array.prototype.slice);
      arrayFrom(formEl.querySelectorAll("label[for]")).forEach(function (labelEl) {
        var forEl = formEl.querySelector('[id="' + labelEl.htmlFor + '"]');
        if (forEl) {
          var forElWrapper = forEl.closest(".hs-form-field");
          forElWrapper.classList.add("form-group");
          labelEl.htmlFor = forEl.id = forEl.id + uid;

          // Set autocomplete off for each input field
          // if (forEl.tagName === "INPUT") {
          //   forEl.setAttribute("autocomplete", "off");
          // }
        }
      });
      formElement.find("select").each(function () {
        var $this = $(this); // the select element
        var $wrapper = $this.parent().parent(); // assuming the select element is wrapped
        // MutationObserver logic to check aria-invalid attribute
        var observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
              // Check if the target element has the 'invalid' class
              if ($(mutation.target).hasClass("invalid")) {
                $wrapper.addClass("blurInvalid");
              } else {
                $wrapper.removeClass("blurInvalid");
              }
            }
          });
        });
        observer.observe(this, {
          attributes: true
        });
        // Collecting options
        var options = [];
        $this.find("option").each(function () {
          var $option = $(this);
          if ($option.val()) {
            var item = {};
            item.value = $option.val();
            item.label = $option.text();
            options.push(item);
          }
        });
        // Create custom select component and hide original
        var selectComponent = document.createElement("select-component");
        selectComponent.id = $this.attr("id") + "-select-component";
        selectComponent.options = options;
        selectComponent.isMultiSelect = $this.attr("multiple") ? true : false;
        selectComponent.placeholder = $this.find("option").first().text();
        $this.hide();
        $this.before(selectComponent);
        // Listen for 'pick' event
        document.querySelector("#".concat(selectComponent.id)).addEventListener("pick", function (e) {
          var _e$detail = e.detail,
            oldVal = _e$detail.oldVal,
            newVal = _e$detail.newVal;
          var forEl = document.querySelector("#".concat($this.attr("id")));
          //select component with ID of $this
          if (!$this.attr("multiple")) {
            $this.val(newVal ? newVal.value : "");
            forEl.value = newVal ? newVal.value : "";
            // Trigger a "change" event on the HubSpot select field
            var changeEvent = new Event("change", {
              bubbles: true
            });
            forEl.dispatchEvent(changeEvent);
          } else {
            var values = newVal.map(function (obj) {
              return obj.value;
            });
            $this.find("option").each(function () {
              var $option = $(this);
              $option.prop("selected", values.includes($option.val()));
            });
          }
        });
      });
      //find all form checkboxes
      formElement.find("input[type=checkbox]").each(function () {
        //if there is attribute checked
        var isAnyCheckboxChecked = false;
        var forElWrapper = this.closest(".hs-fieldtype-booleancheckbox") || this.closest(".hs-form-checkbox");
        forElWrapper.classList.add("form-group-checkbox", "form-group");
        if (formElement.checked) {
          console.log("formElement checked", formElement);
          isAnyCheckboxChecked = true;
          forElWrapper.classList.add("checked");
        }
        this.addEventListener("change", function () {
          if (this.checked) {
            forElWrapper.classList.add("checked");
            isAnyCheckboxChecked = true;
          } else {
            forElWrapper.classList.remove("checked");
          }
        });
      });

      //set country code from cookie
      var $countryCodes = formElement.find("[name='country_phone_code']");
      if ($countryCodes && $countryCodes.length > 0) {
        var countryCodes = document.getElementById($countryCodes.attr("id") + "-select-component");

        // Customize the select-component
        countryCodes.isHideRemove = true;
        countryCodes.isDisplaySelectedValue = true;
        countryCodes.isWithSearch = true;
        var timeRuns = 0;
        var setCountry = setInterval(function () {
          timeRuns++;
          // Extract country name from DY cookie
          var _dy_df_geo = window.Cookies.get("_dy_df_geo") || false;
          var options = countryCodes.options;
          if (_dy_df_geo) {
            var _dy_df_geo_country = _dy_df_geo.split(".")[0];
            // Find a match in the list of options
            options.forEach(function (option) {
              var value = option.label;
              if (value.search(_dy_df_geo_country) > -1) {
                countryCodes.pick(option.value);
                countryCodes.forceCb();
                clearInterval(setCountry); // Stop the interval after setting the country
                $countryCodes.addClass("loaded");
              }
            });
          }
          if (timeRuns === 2) {
            // Set "+1" (United States) as default country code if no cookie is found
            countryCodes.pick("1");
            countryCodes.forceCb();
            $countryCodes.addClass("loaded");
            clearInterval(setCountry); // Stop the interval
          }
        }, 750);
      }

      //hide checkbox for GDPR countries
      var checkboxEl = formElement.find('input[name^="newsletter_opt_in"]');
      if (checkboxEl.length > 0) {
        formElement.addClass("hideCheckbox");
        formElement.find(checkboxEl).prop("checked", true).closest(".form-group-checkbox").addClass("checked");
        check_gdpr();
      }
      function check_gdpr() {
        var gdpr_checker = setInterval(function () {
          var _dy_df_geo = window.Cookies.get("_dy_df_geo");
          if (_dy_df_geo) {
            var _checkboxEl = formElement.find('input[name^="newsletter_opt_in"]');
            $.each(["Australia", "Austria", "Belgium", "Bulgaria", "Croatia", "Republic of Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "United Kingdom"], function (index, country) {
              if (_dy_df_geo.search(country) > -1) {
                formElement.removeClass("hideCheckbox");
                $(_checkboxEl).prop("checked", true).closest(".form-group-checkbox").addClass("checked");
                // $(checkboxEl).prop("checked", true).closest(".form-group-checkbox").removeClass("checked");
              }
            });
            clearInterval(gdpr_checker);
          }
        }, 1000);
      }

      // if (formId === this.radFirstStepFormId) {
      //   console.log("in radFirstStepFormId", formId);
      // }
      // if (formId === this.radSecondStepFormId) {
      //   $(".step-2 .hs-fieldtype-booleancheckbox")
      //     .wrapAll('<div class="checkboxes-wrapper-group"></div>')
      //     .wrapAll('<div class="checkboxes-wrapper"></div>');
      //   console.log("in radSecondStepFormId", formId);
      // }
    }
  }]);
  return HubSpot;
}();
document.addEventListener("DOMContentLoaded", function () {
  new HubSpot();
});

/***/ }),

/***/ 96125:
/***/ (function() {

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty ||  i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; try { define({}, ""); } catch (t) { define =  } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction =  e.mark =  e.awrap =  defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async =  defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, , define(g, "toString", function () { return "[object Generator]"; }), e.keys =  e.values = values, Context.prototype = { constructor: Context, reset:  stop:  dispatchException:  abrupt:  complete:  finish:  catch:  delegateYield: }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
Example of async class:
reference: https://javascript.info/async-await

class f {
    constructor() {
        this.dosome();
    }
    async dosome() {
        console.log("dosome");
        await this.dosomemore();
        console.log("dosome end");
    }
    dosomemore() {
        return new Promise((resolve) => {
        setTimeout(() => {
            console.log("dosomemore");
            resolve();
        }, 3000);
        });
    }
}
new f();

output:
dosome
dosomemore // after 3 seconds
dosome end
 */
/**
 * !! Chilipiper resource & documentation: https://help.chilipiper.com/hc/en-us/sections/360009757473-Snippet-and-API
 */
var Marketo = /*#__PURE__*/function () {
  // cpMatchedRules = false;

  function Marketo() {
    var _this = this;
    _classCallCheck(this, Marketo);
    _defineProperty(this, "formIds", window.mktoForms || []);
    // Rad
    _defineProperty(this, "radFirstStepFormId", window.rad_popup_form_id);
    _defineProperty(this, "radSecondStepFormId", window.second_step_form_id);
    // radABStepFormId = window.a_b_step_form_id;
    _defineProperty(this, "smsPaidFormId", 3333);
    _defineProperty(this, "productBundleFormId", 3656);
    // Chilipiper data
    _defineProperty(this, "chiliPiperFormData", {});
    /**
     * Applies to all the forms on the site registered under window.mktoForms - usually with the [marketo-form-js id="3009"] wp shortcode
     * this function will:
     * 1. remove the style (coming from marketo) from the form
     * 2. replace the select input with our own select component
     * 3. wrap the checkbox input with our own checkbox component
     * 4. will make the form visible after these changes
     * 5. validate that the form will be sent to marketo only once
     */
    this.mktoFormChain();
    MktoForms2.whenReady(function (form) {
      _this.MktoForms2WhenReady(form);
    });

    /**
     * Required to listen to CP event which will trigger the scheduler
     * This is only to know if the scheduler is going to be shown or not "availability-loaded" event
     * There are another 2 events: onSuccess & onError which provided by CP, but they don't provide the same information
     */
    window.addEventListener("message", captureEvent, false);
    function captureEvent(_ref) {
      var data = _ref.data;
      if (_typeof(data) === "object") {
        var action = Object.values(data)[0];
        if (action == "availability-loaded") {
          redcross.track("Chilipiper Routed", {
            isRouted: "Yes"
          });
          // after the scheduler is ready, hide the "Looking for available slots" window and load CP iframe
          // if ($("body").hasClass("rad_popup_form_is_open")) {
          if (window.location.href.indexOf("request-a-demo") > -1) {
            $(".rad-popup-v3 .step-3").addClass("chilipiper-ready");
          } else {
            $("component-header-form .step-3").addClass("chilipiper-ready");
            $("component-header-form .step-3 .loader").css("position", "absolute");
          }
        }
      }
    }
    /**
     * Handle marketo error if endpoint is returning an error
     * Since there is no "onError" event on marketo JS API
     * In this case we just re-enable the submit button and remove the "sending" class
     */

    // window.addEventListener("message", handleMarketoError, false);
    // function handleMarketoError({ data }) {
    //   if (typeof data !== "string" || !data) return;
    //   data = JSON.parse(data);
    //   if (data && data.mktoResponse) {
    //     if (!data.mktoResponse.error) return;
    //     document.querySelectorAll(".custom-marketo-form-js.sending").forEach((form) => {
    //       form.classList.remove("sending");
    //       const submitBtn = form.querySelector('button[type="submit"]');
    //       submitBtn.removeAttribute("disabled");
    //       submitBtn.innerHTML = submitBtn.getAttribute("data-submit");
    //     });
    //   }
    // }
  }
  _createClass(Marketo, [{
    key: "mktoFormChain",
    value: function mktoFormChain() {
      var _this2 = this;
      var that = this;
      if (this.formIds.length === 0) {
        return;
      }
      var arrayFrom = Function.prototype.call.bind(Array.prototype.slice);
      MktoForms2.whenRendered(function (form) {
        var _document$querySelect, _document$querySelect2, _document$querySelect3, _document$querySelect4, _document$querySelect5;
        if (!_this2.formIds.includes(form.getId())) {
          return;
        }
        var radFormID = form.getId();
        var formEl = form.getFormElem()[0],
          uid = "_" + Math.floor(Math.random() * Date.now());
        formEl.classList.remove("mktoForm");
        var styledEls = arrayFrom(formEl.querySelectorAll("[style]")).concat(formEl);
        styledEls.forEach(;
        var radFormIDValidation = "";
        if (radFormID == "1282" || radFormID == "3511") {
          radFormIDValidation = radFormID;
        }
        var scrolled = false;
        var fields = [{
          name: "Email",
          element: document.querySelector('[data-formid="' + radFormIDValidation + '"] [name="Email"]'),
          parent: (_document$querySelect = document.querySelector('[data-formid="' + radFormIDValidation + '"] [name="Email"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.parentNode,
          validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          errorMessage: "Please enter a valid email, \nsuch as email@example.com"
        }, {
          name: "FirstName",
          element: document.querySelector('[data-formid="' + radFormIDValidation + '"] [name="FirstName"]'),
          parent: (_document$querySelect2 = document.querySelector('[data-formid="' + radFormIDValidation + '"] [name="FirstName"]')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.parentNode,
          validation: /^.+$/,
          errorMessage: "First name is required"
        }, {
          name: "LastName",
          element: document.querySelector('[data-formid="' + radFormIDValidation + '"] [name="LastName"]'),
          parent: (_document$querySelect3 = document.querySelector('[data-formid="' + radFormIDValidation + '"] [name="LastName"]')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.parentNode,
          validation: /^.+$/,
          errorMessage: "Last name is required"
        }, {
          name: "Domain__c",
          element: document.querySelector('[data-formid="' + radFormIDValidation + '"] [name="Domain__c"]'),
          parent: (_document$querySelect4 = document.querySelector('[data-formid="' + radFormIDValidation + '"] [name="Domain__c"]')) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.parentNode,
          validation: /^(https?:\/\/)?(?:(?:(?:[a-zA-Z0-9][a-zA-Z0-9-]{0,62})?[a-zA-Z0-9])\.)+[a-zA-Z]{2,}\/?$/,
          errorMessage: "Please enter a valid domain, \nsuch as example.com"
        }, {
          name: "rADPhoneNumber",
          element: document.querySelector('[data-formid="' + radFormIDValidation + '"] [name="rADPhoneNumber"]'),
          parent: (_document$querySelect5 = document.querySelector('[data-formid="' + radFormIDValidation + '"] [name="rADPhoneNumber"]')) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.parentNode,
          validation: /^\d+$/,
          errorMessage: "Must be a phone number. \n503-555-1212"
        }];
        function createErrorDiv(field) {
          var errorParentDiv = document.createElement("div");
          errorParentDiv.className = "error-tooltip";
          var errorDiv = document.createElement("div");
          errorDiv.className = "error-text";
          errorDiv.innerHTML = field.errorMessage.replace(/\n/g, "<br>");
          errorParentDiv.appendChild(errorDiv);
          field.parent.appendChild(errorParentDiv);
        }
        function validateField(field) {
          var value = field.element.value.trim();
          var isValid = field.validation.test(value);
          field.element.classList.toggle("typing", field.element.matches(":focus"));
          field.element.classList.toggle("not-valid", !isValid && !field.element.matches(":focus"));
          field.element.classList.toggle("valid", isValid);
          if (field.parent) {
            field.parent.classList.toggle("typing", field.element.matches(":focus"));
            field.parent.classList.toggle("not-valid", !isValid && !field.element.matches(":focus"));
            field.parent.classList.toggle("valid", isValid);
          }
        }

        // Event handler for input events on fields
        function handleInput(event) {
          var field = fields.find(function (field) {
            return field.element === event.target;
          });
          if (field) {
            validateField(field);
            checkAllFieldsValid();
          }
        }

        // Event handler for blur events on fields
        function handleBlur(event) {
          var field = fields.find(function (field) {
            return field.element === event.target;
          });
          if (field) {
            var value = field.element.value.trim();
            var isValid = field.validation.test(value);
            if (value !== "") {
              // Field is not empty, apply the validation classes
              field.element.classList.toggle("not-valid", !isValid);
              field.element.classList.toggle("valid", isValid);
              field.element.classList.toggle("typing", isValid);
              if (field.parent) {
                field.parent.classList.toggle("not-valid", !isValid);
                field.parent.classList.toggle("valid", isValid);
                field.parent.classList.toggle("typing", isValid);
              }
            } else if (field.element.classList.contains("typing")) {
              // Field is empty, was previously typed, add not-valid class
              field.element.classList.remove("typing");
              field.element.classList.add("not-valid");
              if (field.parent) {
                field.parent.classList.remove("typing");
                field.parent.classList.add("not-valid");
              }
            }
          }
          checkAllFieldsValid();
        }
        var checkAllFieldsValid = function checkAllFieldsValid() {
          var allFieldsValid = fields.every(function (field) {
            var value = field.element.value.trim();
            return field.validation.test(value);
          });
          if (allFieldsValid) {
            // //select form with id = radFormID and add class open
            // const formEl = document.querySelector('[data-formid="' + radFormIDValidation + '"]');
            // formEl.classList.add("show-full-form");
            // //smooth scroll to the class .checkboxes-wrapper-group-span
            // const radContainer = document.querySelector(".rad-form-container");
            // if (radContainer && !scrolled && form.getId() == this.radABStepFormId) {
            //   console.log("scrolll");
            //   setTimeout(() => {
            //     radContainer.scrollBy({
            //       top: 400,
            //       behavior: "smooth",
            //     });
            //   }, 250);
            //   scrolled = true;
            //   const emailFieldVal = form.vals().Email;
            //   if (typeof redcross !== "undefined") {
            //     redcross.track("Form Submitted", {
            //       btnName: "RAD form step 2 revelation",
            //       formFieldEmail: emailFieldVal,
            //     });
            //   }
            // }
            $(".step-1 .mktoError").remove();
          }
        };
        if (form.getId() == radFormIDValidation) {
          fields.forEach(function (field) {
            if (field.element) {
              // Check if the field element exists
              createErrorDiv(field);
              field.element.addEventListener("input", handleInput);
              field.element.addEventListener("blur", handleBlur);
            }
          });
        }
        arrayFrom(formEl.querySelectorAll("label[for]")).forEach(function (labelEl) {
          var forEl = formEl.querySelector('[id="' + labelEl.htmlFor + '"]');
          if (forEl) {
            var forElWrapper = forEl.closest(".mktoFormRow");
            forElWrapper.classList.add("form-group");
            labelEl.htmlFor = forEl.id = forEl.id + uid;
            if (forEl.type !== "checkbox" || forEl.type !== "select-one" || forEl.type !== "select-multiple") {
              // Attach event listeners for input and blur events to all fields
              forEl.addEventListener("blur", function () {
                if (forEl.getAttribute("aria-invalid") === "true") {
                  forEl.classList.add("blurInvalid");
                } else {
                  forEl.classList.remove("blurInvalid");
                }
              });

              // add asterisk to required fields if not already present on marketo
              if (forEl.getAttribute("placeholder") && forEl.classList.contains("mktoRequired") && !forEl.placeholder.includes("*")) {
                forEl.placeholder = forEl.placeholder + "*";
              }
            }
            if (forEl.type === "select-one" || forEl.type === "select-multiple") {
              var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                  if (mutation.type === "attributes") {
                    if (mutation.attributeName === "aria-invalid") {
                      if (forEl.getAttribute("aria-invalid") === "true") {
                        if (form.getId() != "3511" && form.getId() != "1904") {
                          // form.getId() != "3579"
                          forElWrapper.classList.add("blurInvalid");
                        }
                      } else {
                        forElWrapper.classList.remove("blurInvalid");
                      }
                    }
                  }
                });
              });
              observer.observe(forEl, {
                attributes: true
              });
              var options = [];
              for (var index = 0; index < forEl.options.length; index++) {
                var option = forEl.options[index];
                if (option.value) {
                  var item = {};
                  item.value = option.value;
                  item.label = option.innerText;
                  options.push(item);
                }
              }
              var selectComponent = document.createElement("select-component");
              selectComponent.id = forEl.id + "-select-component";
              selectComponent.options = options;
              selectComponent.isMultiSelect = forEl.type === "select-multiple";
              selectComponent.placeholder = forEl.options[0].innerHTML;
              if (forEl.classList.contains("mktoRequired") && !forEl.options[0].innerHTML.includes("*")) {
                selectComponent.placeholder = forEl.options[0].innerHTML + "*";
              }
              forEl.style.display = "none";
              forEl.parentNode.insertBefore(selectComponent, forEl.previousSibling);
              document.querySelector("#".concat(forEl.id, "-select-component")).addEventListener("pick", function (e) {
                var _e$detail = e.detail,
                  oldVal = _e$detail.oldVal,
                  newVal = _e$detail.newVal;
                if (forEl.type === "select-one") {
                  forEl.value = newVal ? newVal.value : "";
                } else {
                  var values = newVal.map(function (obj) {
                    return obj.value;
                  });
                  for (var i = 0; i < forEl.options.length; i++) {
                    forEl.options[i].selected = values.indexOf(forEl.options[i].value) >= 0;
                  }
                }
              });

              /**
               * Listening to the toggle options event on the select component and define if user selected value or not
               * If the user didn't select any value, and the marketo field is required, then we will show the error
               * The logic is same for other input fields (see above) but with some adjustments for the select component
               */
              document.querySelector("#".concat(forEl.id, "-select-component")).addEventListener("toggleOptions", function (e) {
                if (e.detail.state === "close" && e.detail.selected.length === 0 && forEl.getAttribute("aria-invalid") === "true") {
                  var selectEl = document.querySelector("select[id^='Estimated_of_Orders']");
                  if (selectEl.nextElementSibling.classList.contains("mktoError")) {
                    // selectEl.nextElementSibling.remove();
                  } else {
                    forEl.classList.add("blurInvalid");
                  }
                } else {
                  forEl.classList.remove("blurInvalid");
                  forEl.nextElementSibling.classList.contains("mktoError") && forEl.nextElementSibling.remove();
                }
              });
            }
            if (forEl.type === "checkbox") {
              var isAnyCheckboxChecked = false;
              forElWrapper.classList.add("form-group-checkbox");
              if (forEl.checked) {
                isAnyCheckboxChecked = true;
                forElWrapper.classList.add("checked");
              }
              forEl.addEventListener("change", function () {
                if (this.checked) {
                  forElWrapper.classList.add("checked");
                  isAnyCheckboxChecked = true;
                } else {
                  forElWrapper.classList.remove("checked");
                }
                if (isAnyCheckboxChecked) {
                  //remove custom checkbox error message
                  // const checkboxesWrapperGroup = document.querySelector('[data-formid="3579"] .checkboxes-wrapper-group');
                  var checkboxesWrapperGroup = document.querySelector('[data-formid="1904"] .checkboxes-wrapper-group');
                  if (checkboxesWrapperGroup) {
                    var _checkboxesWrapperGro;
                    (_checkboxesWrapperGro = checkboxesWrapperGroup.querySelector(".mktoError")) === null || _checkboxesWrapperGro === void 0 ? void 0 : _checkboxesWrapperGro.remove();
                  }
                  var checkboxesWrapperGroupAB = document.querySelector('[data-formid="3511"] .checkboxes-wrapper-group');
                  if (checkboxesWrapperGroupAB) {
                    var _checkboxesWrapperGro2;
                    (_checkboxesWrapperGro2 = checkboxesWrapperGroupAB.querySelector(".mktoError")) === null || _checkboxesWrapperGro2 === void 0 ? void 0 : _checkboxesWrapperGro2.remove();
                  }
                }
              });
            }
          }
        });
      });
      MktoForms2.whenReady(function (form) {
        if (!_this2.formIds.includes(form.getId())) {
          return;
        }
        window.passUtmParams(form);
        var formEl = form.getFormElem()[0];
        formEl.style.visibility = "visible";
      });

      /* chain, ensuring only one #mktoForm_nnn exists at a time */
      arrayFrom(this.formIds).forEach(function (formId) {
        var loadForm = MktoForms2.loadForm.bind(MktoForms2, localize_script.marketo_endpoint, localize_script.munchkin_id, formId),
          formEls = arrayFrom(document.querySelectorAll("[data-formId=\"".concat(formId, "\"]")));
        (function loadFormCb(formEls) {
          var formEl = formEls.shift();
          formEl.id = "mktoForm_" + formId;
          loadForm(function (form) {
            // formEl.id = "";
            formEl.removeAttribute("id");
            if (formEls.length) {
              loadFormCb(formEls);
            }
            form.onSuccess(function () {
              var formHtmlEl = form.getFormElem()[0];
              if (formId !== that.radSecondStepFormId && formId !== that.radFirstStepFormId &&
              // formId !== that.radABStepFormId &&
              formId !== that.smsPaidFormId && formId !== that.productBundleFormId) {
                var submitBtn = formHtmlEl.querySelector('button[type="submit"]');
                submitBtn.innerHTML = submitBtn.getAttribute("data-submit");
                submitBtn.removeAttribute("disabled");
                formHtmlEl.classList.remove("sending");
              }
              if (window.marketo.success[formId]) {
                window.marketo.success[formId](formHtmlEl);
              }
              return false;
            });

            /**
             * The blurInvalid class is added to the field when the field is blurred and the value is empty.
             * This class is used to apply the error styling to the field and fix marketo aggressive erroring.
             * Whenever the user send the form, we add / remove the blurInvalid class from the field.
             * This is to ensure the error styling is removed when the user sends the form.
             */
            form.onValidate(function (valid) {
              var formHtmlEl = form.getFormElem()[0];
              formHtmlEl.querySelectorAll('[aria-invalid="true"]').forEach(function (el) {
                if (valid === false) {
                  el.classList.add("blurInvalid");
                } else {
                  el.classList.remove("blurInvalid");
                }
              });
            });
            form.onSubmit(function () {
              var formHtmlEl = form.getFormElem()[0];
              formHtmlEl.classList.add("sending");
              var submitBtn = formHtmlEl.querySelector('button[type="submit"]');
              submitBtn.setAttribute("data-submit", submitBtn.innerHTML);
            });
          });
        })(formEls);
      });
    }
  }, {
    key: "MktoForms2WhenReady",
    value: function MktoForms2WhenReady(form) {
      var _this3 = this;
      var form_id = form.getId();
      if (!this.formIds.includes(form_id)) {
        return;
      }
      var $form = $("[data-formid=\"".concat(form_id, "\"]"));

      /**
       * Automatically set up value for countryPhoneCode (specific marketo field) - can be on multiple places
       * using Dynamic Yield user country code
       * the interval will run every 750ms for two times
       * if the country code is found, it will stop the interval and will set it by user country code
       * if the country code is not found, it will show US as default
       * !we use 'loaded' class to reveal the select component label until the interval ends - see component-mkto-form.scss
       */
      var $countryCodes = $form.find("[name='countryPhoneCode']");
      if ($countryCodes && $countryCodes.length > 0) {
        var countryCodes = $("#" + $countryCodes.attr("id") + "-select-component");
        countryCodes[0].isHideRemove = true;
        countryCodes[0].isDisplaySelectedValue = true;
        countryCodes[0].isWithSearch = true;
        var timeRuns = 0;
        var setCountry = setInterval(function () {
          timeRuns++;
          // Extract country name from DY cookie
          var _dy_df_geo = window.Cookies.get("_dy_df_geo") || false;
          var options = countryCodes[0].options;
          if (_dy_df_geo) {
            var _dy_df_geo_country = _dy_df_geo.split(".")[0];
            // Get list of options from field

            // Find a match
            $.each(options, function (index, option) {
              // Get the option text
              var value = option.label;
              if (value.search(_dy_df_geo_country) > -1) {
                countryCodes[0].pick(option.value);
                countryCodes[0].forceCb();
              }
            });
            // Stop after one attempt once cookie has been set
            clearInterval(setCountry);
            $countryCodes.addClass("loaded");
          }
          if (timeRuns === 2) {
            // Set United States as default
            countryCodes[0].pick("+1");
            countryCodes[0].forceCb();
            $countryCodes.addClass("loaded");
            clearInterval(setCountry);
          }
        }, 750);
      }

      // this is for the GDPR checkbox that will be presented if you're reaching for example from the EU
      var checkboxEl = $form.find('input[name="acceptedtoReceivePromotionalEmails"]');
      if (checkboxEl.length > 0) {
        $form.addClass("hideCheckbox");
        $form.find(checkboxEl).prop("checked", true).closest(".form-group-checkbox").addClass("checked");
        this.check_gdpr(form_id);
      }
      if (form_id == this.radFirstStepFormId) {
        // Disable autocomplete (is this still relevant?)
        console.log("in 1rd form");
        $form.find("input").each(function () {
          $(this).attr("autocomplete", "off");
        });

        // add this to indicate that user is mid-market (for segment event)
        // form.addHiddenFields({ mm: "false" });

        /**
         * When the user enter his email, we're listening to Zoominfo's company website field to be modified
         * ! How Chilipipr works:
         * We send post request to Chilipiper to check if the user is aligned with the rules of engagement
         * Then, we'll waiting to the "availability-loaded" that we're listening to
         */
        //TODO - check if this is still relevant
        form.onValidate(function () {
          var values = form.vals();
          var email = values.Email;
          var firstName = values.FirstName;
          var lastName = values.LastName;
          var domain = values.Domain__c;
          var phoneNumber = values.rADPhoneNumber;
          var hasErrors = false; // Variable to track if any errors occurred

          // Check if any value is empty or has the "not-valid" class
          if (email === "" || firstName === "" || lastName === "" || domain === "" || phoneNumber === "" || $(".not-valid").length > 0) {
            // Clear any previous error messages
            $(".step-1 .mktoError").remove();

            // Check each field and display error messages
            if (email === "" || $(".not-valid[name='Email']").length > 0) {
              displayErrorMessage("Email", "Please enter a valid email, such as email@example.com");
              hasErrors = true;
            }
            if (firstName === "" || $(".not-valid[name='FirstName']").length > 0) {
              displayErrorMessage("FirstName", "First name is required");
              if (!hasErrors) {
                hasErrors = true;
                focusOnField("FirstName");
              }
            }
            if (lastName === "" || $(".not-valid[name='LastName']").length > 0) {
              displayErrorMessage("LastName", "Last name is required");
              if (!hasErrors) {
                hasErrors = true;
                focusOnField("LastName");
              }
            }
            if (domain === "" || $(".not-valid[name='Domain__c']").length > 0) {
              displayErrorMessage("Domain__c", "Please enter a valid domain, such as example.com");
              if (!hasErrors) {
                hasErrors = true;
                focusOnField("Domain__c");
              }
            }
            if (phoneNumber === "" || $(".not-valid[name='rADPhoneNumber']").length > 0) {
              displayErrorMessage("rADPhoneNumber", "Must be a phone number. 503-555-1212");
              if (!hasErrors) {
                hasErrors = true;
                focusOnField("rADPhoneNumber");
              }
            }
          } else {
            // All fields have the "valid" class, allow form submission
            form.submitable(true);
          }
          function displayErrorMessage(fieldName, errorMessage) {
            var field = document.querySelector("[name=\"".concat(fieldName, "\"]"));
            var parent = field === null || field === void 0 ? void 0 : field.parentNode;
            field.classList.remove("typing");
            parent.classList.remove("typing");
            field.classList.add("not-valid");
            parent.classList.add("not-valid");
            $('<div class="mktoError"></div>').text(errorMessage).insertAfter("[data-formid='1282'] input[id^='" + fieldName + "_']");
            $("[data-formid='1282'] input[id^='" + fieldName + "_']").addClass("blurInvalid").attr("aria-invalid", true);
          }
          function focusOnField(fieldName) {
            var field = document.querySelector("[name=\"".concat(fieldName, "\"]"));
            field.focus();
          }
          if (hasErrors) {
            form.submitable(false);
          } else {
            form.submitable(true);
          }
        });
        form.onSuccess( /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
            var domain, externalApiData, secondStepForm;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _this3.chiliPiperFormData.FirstName = values.FirstName;
                  _this3.chiliPiperFormData.LastName = values.LastName;
                  _this3.chiliPiperFormData.Email = values.Email;
                  // these are enriched by zoominfo
                  _this3.chiliPiperFormData.Country = values.Country;
                  _this3.chiliPiperFormData.Domain__c = values.Domain__c;
                  _this3.chiliPiperFormData.AnnualRevenue = values.AnnualRevenue;
                  domain = values.Domain__c.replace("http://", "").replace("https://", "").replace("www.", "").split(/[/?#]/)[0];
                  _context.next = 9;
                  return _this3.applyExternalDataToChilipiperFormData(domain);
                case 9:
                  externalApiData = _context.sent;
                  console.log("externalApiData: ", externalApiData);
                  _this3.chiliPiperFormData = _objectSpread(_objectSpread({}, _this3.chiliPiperFormData), externalApiData);
                  secondStepForm = MktoForms2.getForm(_this3.radSecondStepFormId);
                  $(".rad-popup-v3 .step-1").fadeOut(500, ;
                  secondStepForm.setValues({
                    Email: form.getValues().Email
                  });
                  return _context.abrupt("return", false);
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
      if (form_id == this.radSecondStepFormId) {
        console.log("in 2rd form");
        $(".step-2 .form-group-checkbox").wrapAll('<div class="checkboxes-wrapper-group"></div>').wrapAll('<div class="checkboxes-wrapper"></div>');
        form.onValidate(function () {
          // Get the values
          var values = form.vals();
          //Check your condition
          if (values.Estimated_of_Orders__c === "") {
            //insert error message after select element with id starts with "Estimated_of_Orders"
            var selectEl = document.querySelector("select[id^='Estimated_of_Orders']");
            var forElWrapper = selectEl.closest(".mktoFormRow");
            forElWrapper.classList.add("blurInvalid");
            var errorEl = document.createElement("div");
            errorEl.classList.add("mktoError");
            errorEl.innerHTML = "Please select your monthly order volume";
            //find select element with id starts with "Estimated_of_Orders"
            selectEl.insertAdjacentElement("afterend", errorEl);
            form.submitable(false);
          }
          if (values.qualificationQuestionReviewsandRatings === "no" &&
          // values.qualificationQuestionVMS === "no" &&
          values.qualificationQuestionLoyaltyandReferrals === "no" && values.qualificationQuestionSMS === "no" && values.qualificationQuestionEmail === "no" && values.Interested_in_Subscription__c === "no") {
            $('<div class="mktoError">Please select one or more products</div>').insertAfter(".step-2 .checkboxes-wrapper");
            form.submitable(false);
          } else {
            $(".step-2 .checkboxes-wrapper-group .mktoError").remove();
            form.submitable(true);
          }
        });
        form.onSuccess( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(values) {
            var emailFieldVal;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _this3.chiliPiperFormData.Interested_in_reviews__c = values.qualificationQuestionReviewsandRatings === "yes" ? true : false;
                  // this.chiliPiperFormData.Interested_in_VMS__c = values.qualificationQuestionVMS === "yes" ? true : false;
                  _this3.chiliPiperFormData.Interested_in_loyalty__c = values.qualificationQuestionLoyaltyandReferrals === "yes" ? true : false;
                  _this3.chiliPiperFormData.Interested_in_SMS__c = values.qualificationQuestionSMS === "yes" ? true : false;
                  _this3.chiliPiperFormData.Interested_in_Email__c = values.qualificationQuestionEmail === "yes" ? true : false;
                  _this3.chiliPiperFormData.Interested_in_Subscription__c = values.Interested_in_Subscription__c === "yes" ? true : false;
                  _this3.chiliPiperFormData.Orders_month_Estimate__c = parseInt(values.Estimated_of_Orders__c);
                  emailFieldVal = _this3.chiliPiperFormData.Email || "";
                  $(".rad-popup-v3 .step-2").fadeOut(500, ;
                  ChiliPiper.submit("yotpo", "rad-web", {
                    map: true,
                    domElement: "#chilipiper-yotpo-wrapper",
                    injectRootCss: true,
                    lead: _this3.chiliPiperFormData,
                    // This will call a function when a lead is submitted but does not match any queue rules and cannot be routed
                    // This function is equivalent to the window listener "availability-loaded" that we're listening to
                    onError: function onError() {
                      console.log("onError");
                      redcross.track("Chilipiper Routed", {
                        isRouted: "No"
                      });
                      $(".rad-popup-v3").addClass("show-thank-you");
                      $(".rad-popup-v3 .thank-you").delay(500).fadeIn(500);
                    },
                    // This will call a function after a successful booking when the scheduler is already open and the user selected time
                    onSuccess: function onSuccess(event) {
                      console.log("onSuccess");
                      var chilipiperEvent = _objectSpread({}, this.chiliPiperFormData);
                      chilipiperEvent["bookingTimeStart"] = new Date(event.slot.start).toLocaleString();
                      chilipiperEvent["email"] = emailFieldVal;
                      if (typeof redcross !== "undefined") {
                        redcross.track("Meeting Booked", chilipiperEvent);
                      }
                    }
                  });
                  return _context2.abrupt("return", false);
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function (_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      }
      if (form_id == this.smsPaidFormId) {
        console.log("in 3333 form");
        form.onSuccess( /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(values) {
            var domain;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  console.log("form.onSuccess 3333", values);
                  _this3.chiliPiperFormData.FirstName = values.FirstName;
                  _this3.chiliPiperFormData.LastName = values.LastName;
                  _this3.chiliPiperFormData.Email = values.Email;
                  _this3.chiliPiperFormData.Orders_month_Estimate__c = parseInt(values.Estimated_of_Orders__c);
                  $("component-header-form .step-1").fadeOut(500, function () {
                    $("component-header-form .form-footer").hide();
                    $("component-header-form .step-3").fadeIn(500);
                  });
                  domain = values.Domain__c.replace("http://", "").replace("https://", "").replace("www.", "").split(/[/?#]/)[0];
                  _this3.chiliPiperFormData = _objectSpread(_objectSpread({}, _this3.chiliPiperFormData), domain);
                  ChiliPiper.submit("yotpo", "sms-paid-lp", {
                    map: true,
                    domElement: "#chilipiper-yotpo-wrapper-sms-paid-lp",
                    injectRootCss: true,
                    lead: _this3.chiliPiperFormData,
                    // This will call a function when a lead is submitted but does not match any queue rules and cannot be routed
                    // This function is equivalent to the window listener "availability-loaded" that we're listening to
                    onError: function onError() {
                      console.log("sms-paid-lp onError");
                      redcross.track("Chilipiper Routed", {
                        isRouted: "No"
                      });
                      $("component-header-form .form-wrapper").addClass("show-thank-you");
                      $("component-header-form .form-wrapper .submit-thankyou").delay(500).fadeIn(500);
                    },
                    // This will call a function after a successful booking when the scheduler is already open and the user selected time
                    onSuccess: function onSuccess(event) {
                      console.log("sms-paid-lp onSuccess", this.chiliPiperFormData);
                      var chilipiperEvent = _objectSpread({}, this.chiliPiperFormData);
                      chilipiperEvent["bookingTimeStart"] = new Date(event.slot.start).toLocaleString();
                      if (typeof redcross !== "undefined") {
                        redcross.track("Meeting Booked", chilipiperEvent);
                      }
                    }
                  });
                  return _context3.abrupt("return", false);
                case 10:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return function (_x3) {
            return _ref4.apply(this, arguments);
          };
        }());
      }
      if (form_id == this.productBundleFormId) {
        console.log("in 3656 form");
        form.onSuccess( /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(values) {
            var domain;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  console.log("form.onSuccess 3656", values);
                  _this3.chiliPiperFormData.FirstName = values.FirstName;
                  _this3.chiliPiperFormData.LastName = values.LastName;
                  _this3.chiliPiperFormData.Email = values.Email;
                  _this3.chiliPiperFormData.Orders_month_Estimate__c = parseInt(values.Estimated_of_Orders__c);
                  _this3.chiliPiperFormData.Interested_in_reviews__c = true;
                  _this3.chiliPiperFormData.Interested_in_SMS__c = true;
                  _this3.chiliPiperFormData.Interested_in_loyalty__c = false;
                  _this3.chiliPiperFormData.Interested_in_Email__c = false;
                  _this3.chiliPiperFormData.Interested_in_Subscription__c = false;
                  console.log("this.chiliPiperFormData", _this3.chiliPiperFormData);
                  $("component-header-form .step-1").fadeOut(500, ;
                  domain = values.Domain__c.replace("http://", "").replace("https://", "").replace("www.", "").split(/[/?#]/)[0];
                  _this3.chiliPiperFormData = _objectSpread(_objectSpread({}, _this3.chiliPiperFormData), domain);
                  ChiliPiper.submit("yotpo", "rad-web", {
                    map: true,
                    domElement: "#chilipiper-yotpo-wrapper-product-bundle-lp",
                    injectRootCss: true,
                    lead: _this3.chiliPiperFormData,
                    // This will call a function when a lead is submitted but does not match any queue rules and cannot be routed
                    // This function is equivalent to the window listener "availability-loaded" that we're listening to
                    onError: function onError() {
                      console.log("rad-web onError");
                      redcross.track("Chilipiper Routed", {
                        isRouted: "No"
                      });
                      $("component-header-form .form-wrapper").addClass("show-thank-you");
                      $("component-header-form .form-wrapper .submit-thankyou").delay(500).fadeIn(500);
                    },
                    // This will call a function after a successful booking when the scheduler is already open and the user selected time
                    onSuccess: function onSuccess(event) {
                      console.log("rad-web onSuccess", this.chiliPiperFormData);
                      var chilipiperEvent = _objectSpread({}, this.chiliPiperFormData);
                      chilipiperEvent["bookingTimeStart"] = new Date(event.slot.start).toLocaleString();
                      if (typeof redcross !== "undefined") {
                        redcross.track("Meeting Booked", chilipiperEvent);
                      }
                    }
                  });
                  return _context4.abrupt("return", false);
                case 16:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          return 
        }());
      }

      /**
       * Fix - remove marketo width when window is resizing
       */
      window.addEventListener("resize", function () {
        setTimeout(function () {
          $form.each(function () {
            var $this = $(this);
            $this.css("width", "100%");
            $this.find("input").each(;
          });
        }, 200);
      });
    }

    // Look for a cookie until it's found and rule is applied
  }, {
    key: "check_gdpr",
    value: function check_gdpr(form_id) {
      var gdpr_checker = setInterval(function () {
        var _dy_df_geo = window.Cookies.get("_dy_df_geo");
        if (_dy_df_geo) {
          var checkboxEl = $("[data-formid=\"".concat(form_id, "\"]")).find('input[name="acceptedtoReceivePromotionalEmails"]');
          $.each(["Austria", "Belgium", "Bulgaria", "Croatia", "Republic of Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "United Kingdom"], function (index, country) {
            if (_dy_df_geo.search(country) > -1) {
              $("[data-formid=\"".concat(form_id, "\"]")).removeClass("hideCheckbox");
              $(checkboxEl).prop("checked", false).closest(".form-group-checkbox").removeClass("checked");
            }
          });
          clearInterval(gdpr_checker);
        }
      }, 1000);
    }
  }, {
    key: "applyExternalDataToChilipiperFormData",
    value: function applyExternalDataToChilipiperFormData(domain) {
      var _this4 = this;
      console.log("getExternalData");
      return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest();
        var that = _this4;
        xhr.addEventListener("readystatechange", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var response, result;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                if (!(this.readyState === 4)) {
                  _context5.next = 7;
                  break;
                }
                response = JSON.parse(this.responseText);
                _context5.next = 4;
                return that.prepareBuiltwithData(response["builtwith"]);
              case 4:
                response["builtwith"] = _context5.sent;
                // response["similarweb"] = await that.prepareSimilarWebData(response["similarweb"]);
                // const result = { ...response["builtwith"], ...response["similarweb"] };
                result = _objectSpread({}, response["builtwith"]);
                resolve(result);
              case 7:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        })));
        xhr.open("POST", localize_script.ajax_url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.send("action=marketo_external_data&domain=".concat(domain));
      });
    }
  }, {
    key: "prepareBuiltwithData",
    value: function prepareBuiltwithData(response) {
      return new Promise(function (resolve) {
        response = JSON.parse(response);
        if (response.Errors.length > 0) resolve({});
        var builtwithLookup = [{
          tag: "ads",
          lookup: ["Facebook", "Google"],
          mktoField: "Ads_Provider__c",
          technologies: [],
          found: []
        }, {
          tag: "shop",
          lookup: ["Shopify", "Magento", "Loox"],
          mktoField: "Platform__c",
          technologies: [],
          found: []
        }, {
          tag: "analytics",
          lookup: ["Klaviyo", "Capterra", "BirdEye", "TrustPilot", "Bazaarvoice"],
          mktoField: "Integrations_Email_Marketing__c",
          technologies: [],
          found: []
        }, {
          tag: "widgets",
          lookup: ["ResellerRatings", "Orankl", "Judge Me", "Clutch", "PriceGrabber", "PowerReviews", "Feefo", "Foxrate", "Ekomi", "Demandforce", "Avis Verifies", "Ausgezeichnet", "Shopper Approved", "TrustedShops", "Reevoo", "Stamped"],
          mktoField: "Reviews_Provider_from_list__c",
          technologies: [],
          found: []
        }];
        var builtwithLookupTags = builtwithLookup.map(function (obj) {
          return obj.tag;
        });
        console.log("builtwithLookupTags :", builtwithLookupTags);

        // map the builtwith response into tags
        response.Results[0].Result.Paths.forEach(function (path) {
          if (path.Technologies && path.Technologies.length === 0) {
            console.log("empty builtwith technology");
            return;
          }
          path.Technologies.forEach(function (technology) {
            if (builtwithLookupTags.includes(technology.Tag)) {
              var tagIndex = builtwithLookupTags.indexOf(technology.Tag);
              builtwithLookup[tagIndex].technologies.push(technology);
            }
          });
        });
        var reviewsProviderObj = builtwithLookup.find(;
        // iterate each tag.technologies to find if technology is being used
        builtwithLookup.forEach(function (item) {
          item.technologies.forEach(function (technology) {
            if (item.lookup.includes(technology.Name)) {
              if (technology.Name === "Capterra" || technology.Name === "BirdEye" || technology.Name === "TrustPilot" || technology.Name === "Bazaarvoice") {
                if (technology.Name === "TrustPilot") {
                  reviewsProviderObj.found.push("Trust Pilot");
                } else {
                  reviewsProviderObj.found.push(technology.Name);
                }
              } else if (technology.Name === "Loox") {
                reviewsProviderObj.found.push(technology.Name);
              } else {
                item.found.push(technology.Name);
              }
            }
          });
        });
        var builtwithLookupResult = {};
        builtwithLookup.forEach(function (item) {
          builtwithLookupResult[item.mktoField] = item.found.length > 0 ? item.found.join(", ") : "";
        });
        resolve(builtwithLookupResult);
      });
    }
    // prepareSimilarWebData(response) {
    //   return new Promise((resolve) => {
    //     try {
    //       response = JSON.parse(response);
    //       console.log("response: ", response);
    //       if (response.meta.status === "Error") {
    //         resolve({});
    //       } else {
    //         resolve({ SimilarWeb_Traffic_New__c: Math.floor(response.visits[0].visits) });
    //       }
    //     } catch (error) {
    //       // Handle JSON parsing error here
    //       console.error("Error parsing JSON:", error);
    //       resolve({});
    //     }
    //   });
    // }
  }]);
  return Marketo;
}();
document.addEventListener("DOMContentLoaded", ;

/***/ }),

/***/ 62988:
/***/ (,

/***/ 38177:
/***/ (,

/***/ 61755:
/***/ (function(module) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : 

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : 

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : 

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : 

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : 
};

module.exports = QueryHandler;


/***/ }),

/***/ 26665:
/***/ (function(module) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),

/***/ 24974:
/***/ (,

/***/ 79765:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/*!
 * validate.js 0.13.1
 *
 * (c) 2013-2019 Nicklas Ansman, 2013 Wrapp
 * Validate.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://validatejs.org/
 */

(function(exports, module, define) {
  "use strict";

  // The main function that calls the validators specified by the constraints.
  // The options are the following:
  //   - format (string) - An option that controls how the returned value is formatted
  //     * flat - Returns a flat array of just the error messages
  //     * grouped - Returns the messages grouped by attribute (default)
  //     * detailed - Returns an array of the raw validation data
  //   - fullMessages (boolean) - If `true` (default) the attribute name is prepended to the error.
  //
  // Please note that the options are also passed to each validator.
  var validate = function(attributes, constraints, options) {
    options = v.extend({}, v.options, options);

    var results = v.runValidations(attributes, constraints, options)
      , attr
      , validator;

    if (results.some() {
      throw new Error("Use validate.async if you want support for promises");
    }
    return validate.processValidationResults(results, options);
  };

  var v = validate;

  // Copies over attributes from one or more sources to a single destination.
  // Very much similar to underscore's extend.
  // The first argument is the target object and the remaining arguments will be
  // used as sources.
  v.extend = function(obj) {
    [].slice.call(arguments, 1).forEach(;
    return obj;
  };

  v.extend(validate, {
    // This is the version of the library as a semver.
    // The toString function will allow it to be coerced into a string
    version: {
      major: 0,
      minor: 13,
      patch: 1,
      metadata: null,
      toString: function() {
        var version = v.format("%{major}.%{minor}.%{patch}", v.version);
        if (!v.isEmpty(v.version.metadata)) {
          version += "+" + v.version.metadata;
        }
        return version;
      }
    },

    // Below is the dependencies that are used in validate.js

    // The constructor of the Promise implementation.
    // If you are using Q.js, RSVP or any other A+ compatible implementation
    // override this attribute to be the constructor of that promise.
    // Since jQuery promises aren't A+ compatible they won't work.
    Promise: typeof Promise !== "undefined" ? Promise : /* istanbul ignore next */ null,

    EMPTY_STRING_REGEXP: /^\s*$/,

    // Runs the validators specified by the constraints object.
    // Will return an array of the format:
    //     [{attribute: "<attribute name>", error: "<validation result>"}, ...]
    runValidations: function(attributes, constraints, options) {
      var results = []
        , attr
        , validatorName
        , value
        , validators
        , validator
        , validatorOptions
        , error;

      if (v.isDomElement(attributes) || v.isJqueryElement(attributes)) {
        attributes = v.collectFormValues(attributes);
      }

      // Loops through each constraints, finds the correct validator and run it.
      for (attr in constraints) {
        value = v.getDeepObjectValue(attributes, attr);
        // This allows the constraints for an attribute to be a function.
        // The function will be called with the value, attribute name, the complete dict of
        // attributes as well as the options and constraints passed in.
        // This is useful when you want to have different
        // validations depending on the attribute value.
        validators = v.result(constraints[attr], value, attributes, attr, options, constraints);

        for (validatorName in validators) {
          validator = v.validators[validatorName];

          if (!validator) {
            error = v.format("Unknown validator %{name}", {name: validatorName});
            throw new Error(error);
          }

          validatorOptions = validators[validatorName];
          // This allows the options to be a function. The function will be
          // called with the value, attribute name, the complete dict of
          // attributes as well as the options and constraints passed in.
          // This is useful when you want to have different
          // validations depending on the attribute value.
          validatorOptions = v.result(validatorOptions, value, attributes, attr, options, constraints);
          if (!validatorOptions) {
            continue;
          }
          results.push({
            attribute: attr,
            value: value,
            validator: validatorName,
            globalOptions: options,
            attributes: attributes,
            options: validatorOptions,
            error: validator.call(validator,
                value,
                validatorOptions,
                attr,
                attributes,
                options)
          });
        }
      }

      return results;
    },

    // Takes the output from runValidations and converts it to the correct
    // output format.
    processValidationResults: function(errors, options) {
      errors = v.pruneEmptyErrors(errors, options);
      errors = v.expandMultipleErrors(errors, options);
      errors = v.convertErrorMessages(errors, options);

      var format = options.format || "grouped";

      if (typeof v.formatters[format] === 'function') {
        errors = v.formatters[format](errors);
      } else {
        throw new Error(v.format("Unknown format %{format}", options));
      }

      return v.isEmpty(errors) ? undefined : errors;
    },

    // Runs the validations with support for promises.
    // This function will return a promise that is settled when all the
    // validation promises have been completed.
    // It can be called even if no validations returned a promise.
    async: function(attributes, constraints, options) {
      options = v.extend({}, v.async.options, options);

      var WrapErrors = options.wrapErrors || function(errors) {
        return errors;
      };

      // Removes unknown attributes
      if (options.cleanAttributes !== false) {
        attributes = v.cleanAttributes(attributes, constraints);
      }

      var results = v.runValidations(attributes, constraints, options);

      return new v.Promise(function(resolve, reject) {
        v.waitForResults(results).then(function() {
          var errors = v.processValidationResults(results, options);
          if (errors) {
            reject(new WrapErrors(errors, options, attributes, constraints));
          } else {
            resolve(attributes);
          }
        }, function(err) {
          reject(err);
        });
      });
    },

    single: function(value, constraints, options) {
      options = v.extend({}, v.single.options, options, {
        format: "flat",
        fullMessages: false
      });
      return v({single: value}, {single: constraints}, options);
    },

    // Returns a promise that is resolved when all promises in the results array
    // are settled. The promise returned from this function is always resolved,
    // never rejected.
    // This function modifies the input argument, it replaces the promises
    // with the value returned from the promise.
    waitForResults: function(results) {
      // Create a sequence of all the results starting with a resolved promise.
      return results.reduce(function(memo, result) {
        // If this result isn't a promise skip it in the sequence.
        if (!v.isPromise(result.error)) {
          return memo;
        }

        return memo.then(;
      }, new v.Promise(); // A resolved promise
    },

    // If the given argument is a call: function the and: function return the value
    // otherwise just return the value. Additional arguments will be passed as
    // arguments to the function.
    // Example:
    // ```
    // result('foo') // 'foo'
    // result(Math.max, 1, 2) // 2
    // ```
    result: function(value) {
      var args = [].slice.call(arguments, 1);
      if (typeof value === 'function') {
        value = value.apply(null, args);
      }
      return value;
    },

    // Checks if the value is a number. This function does not consider NaN a
    // number like many other `isNumber` functions do.
    isNumber: 

    // Returns false if the object is not a function
    isFunction: function(value) {
      return typeof value === 'function';
    },

    // A simple check to verify that the value is an integer. Uses `isNumber`
    // and a simple modulo check.
    isInteger: 

    // Checks if the value is a boolean
    isBoolean: function(value) {
      return typeof value === 'boolean';
    },

    // Uses the `Object` function to check if the given argument is an object.
    isObject: 

    // Simply checks if the object is an instance of a date
    isDate: 

    // Returns false if the object is `null` of `undefined`
    isDefined: 

    // Checks if the given argument is a promise. Anything with a `then`
    // function is considered a promise.
    isPromise: 

    isJqueryElement: 

    isDomElement: function(o) {
      if (!o) {
        return false;
      }

      if (!o.querySelectorAll || !o.querySelector) {
        return false;
      }

      if (v.isObject(document) && o === document) {
        return true;
      }

      // http://stackoverflow.com/a/384380/699304
      /* istanbul ignore else */
      if (typeof HTMLElement === "object") {
        return o instanceof HTMLElement;
      } else {
        return o &&
          typeof o === "object" &&
          o !== null &&
          o.nodeType === 1 &&
          typeof o.nodeName === "string";
      }
    },

    isEmpty: function(value) {
      var attr;

      // Null and undefined are empty
      if (!v.isDefined(value)) {
        return true;
      }

      // functions are non empty
      if (v.isFunction(value)) {
        return false;
      }

      // Whitespace only strings are empty
      if (v.isString(value)) {
        return v.EMPTY_STRING_REGEXP.test(value);
      }

      // For arrays we use the length property
      if (v.isArray(value)) {
        return value.length === 0;
      }

      // Dates have no attributes but aren't empty
      if (v.isDate(value)) {
        return false;
      }

      // If we find at least one property we consider it non empty
      if (v.isObject(value)) {
        for (attr in value) {
          return false;
        }
        return true;
      }

      return false;
    },

    // Formats the specified strings with the given values like so:
    // ```
    // format("Foo: %{foo}", {foo: "bar"}) // "Foo bar"
    // ```
    // If you want to write %{...} without having it replaced simply
    // prefix it with % like this `Foo: %%{foo}` and it will be returned
    // as `"Foo: %{foo}"`
    format: v.extend(function(str, vals) {
      if (!v.isString(str)) {
        return str;
      }
      return str.replace(v.format.FORMAT_REGEXP, function(m0, m1, m2) {
        if (m1 === '%') {
          return "%{" + m2 + "}";
        } else {
          return String(vals[m2]);
        }
      });
    }, {
      // Finds %{key} style patterns in the given string
      FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g
    }),

    // "Prettifies" the given string.
    // Prettifying means replacing [.\_-] with spaces as well as splitting
    // camel case words.
    prettify: function(str) {
      if (v.isNumber(str)) {
        // If there are more than 2 decimals round it to two
        if ((str * 100) % 1 === 0) {
          return "" + str;
        } else {
          return parseFloat(Math.round(str * 100) / 100).toFixed(2);
        }
      }

      if (v.isArray(str)) {
        return str.map(function(s) { return v.prettify(s); }).join(", ");
      }

      if (v.isObject(str)) {
        if (!v.isDefined(str.toString)) {
          return JSON.stringify(str);
        }

        return str.toString();
      }

      // Ensure the string is actually a string
      str = "" + str;

      return str
        // Splits keys separated by periods
        .replace(/([^\s])\.([^\s])/g, '$1 $2')
        // Removes backslashes
        .replace(/\\+/g, '')
        // Replaces - and - with space
        .replace(/[_-]/g, ' ')
        // Splits camel cased words
        .replace(/([a-z])([A-Z])/g, 
        .toLowerCase();
    },

    stringifyValue: 

    isString: 

    isArray: 

    // Checks if the object is a hash, which is equivalent to an object that
    // is neither an array nor a function.
    isHash: 

    contains: function(obj, value) {
      if (!v.isDefined(obj)) {
        return false;
      }
      if (v.isArray(obj)) {
        return obj.indexOf(value) !== -1;
      }
      return value in obj;
    },

    unique: function(array) {
      if (!v.isArray(array)) {
        return array;
      }
      return array.filter(;
    },

    forEachKeyInKeypath: function(object, keypath, callback) {
      if (!v.isString(keypath)) {
        return undefined;
      }

      var key = ""
        , i
        , escape = false;

      for (i = 0; i < keypath.length; ++i) {
        switch (keypath[i]) {
          case '.':
            if (escape) {
              escape = false;
              key += '.';
            } else {
              object = callback(object, key, false);
              key = "";
            }
            break;

          case '\\':
            if (escape) {
              escape = false;
              key += '\\';
            } else {
              escape = true;
            }
            break;

          default:
            escape = false;
            key += keypath[i];
            break;
        }
      }

      return callback(object, key, true);
    },

    getDeepObjectValue: function(obj, keypath) {
      if (!v.isObject(obj)) {
        return undefined;
      }

      return v.forEachKeyInKeypath(obj, keypath, function(obj, key) {
        if (v.isObject(obj)) {
          return obj[key];
        }
      });
    },

    // This returns an object with all the values of the form.
    // It uses the input name as key and the value as value
    // So for example this:
    // <input type="text" name="email" value="foo@bar.com" />
    // would return:
    // {email: "foo@bar.com"}
    collectFormValues: function(form, options) {
      var values = {}
        , i
        , j
        , input
        , inputs
        , option
        , value;

      if (v.isJqueryElement(form)) {
        form = form[0];
      }

      if (!form) {
        return values;
      }

      options = options || {};

      inputs = form.querySelectorAll("input[name], textarea[name]");
      for (i = 0; i < inputs.length; ++i) {
        input = inputs.item(i);

        if (v.isDefined(input.getAttribute("data-ignored"))) {
          continue;
        }

        var name = input.name.replace(/\./g, "\\\\.");
        value = v.sanitizeFormValue(input.value, options);
        if (input.type === "number") {
          value = value ? +value : null;
        } else if (input.type === "checkbox") {
          if (input.attributes.value) {
            if (!input.checked) {
              value = values[name] || null;
            }
          } else {
            value = input.checked;
          }
        } else if (input.type === "radio") {
          if (!input.checked) {
            value = values[name] || null;
          }
        }
        values[name] = value;
      }

      inputs = form.querySelectorAll("select[name]");
      for (i = 0; i < inputs.length; ++i) {
        input = inputs.item(i);
        if (v.isDefined(input.getAttribute("data-ignored"))) {
          continue;
        }

        if (input.multiple) {
          value = [];
          for (j in input.options) {
            option = input.options[j];
             if (option && option.selected) {
              value.push(v.sanitizeFormValue(option.value, options));
            }
          }
        } else {
          var _val = typeof input.options[input.selectedIndex] !== 'undefined' ? input.options[input.selectedIndex].value : /* istanbul ignore next */ '';
          value = v.sanitizeFormValue(_val, options);
        }
        values[input.name] = value;
      }

      return values;
    },

    sanitizeFormValue: function(value, options) {
      if (options.trim && v.isString(value)) {
        value = value.trim();
      }

      if (options.nullify !== false && value === "") {
        return null;
      }
      return value;
    },

    capitalize: function(str) {
      if (!v.isString(str)) {
        return str;
      }
      return str[0].toUpperCase() + str.slice(1);
    },

    // Remove all errors who's error attribute is empty (null or undefined)
    pruneEmptyErrors: 

    // In
    // [{error: ["err1", "err2"], ...}]
    // Out
    // [{error: "err1", ...}, {error: "err2", ...}]
    //
    // All attributes in an error with multiple messages are duplicated
    // when expanding the errors.
    expandMultipleErrors: function(errors) {
      var ret = [];
      errors.forEach(function(error) {
        // Removes errors without a message
        if (v.isArray(error.error)) {
          error.error.forEach(;
        } else {
          ret.push(error);
        }
      });
      return ret;
    },

    // Converts the error mesages by prepending the attribute name unless the
    // message is prefixed by ^
    convertErrorMessages: function(errors, options) {
      options = options || {};

      var ret = []
        , prettify = options.prettify || v.prettify;
      errors.forEach(function(errorInfo) {
        var error = v.result(errorInfo.error,
            errorInfo.value,
            errorInfo.attribute,
            errorInfo.options,
            errorInfo.attributes,
            errorInfo.globalOptions);

        if (!v.isString(error)) {
          ret.push(errorInfo);
          return;
        }

        if (error[0] === '^') {
          error = error.slice(1);
        } else if (options.fullMessages !== false) {
          error = v.capitalize(prettify(errorInfo.attribute)) + " " + error;
        }
        error = error.replace(/\\\^/g, "^");
        error = v.format(error, {
          value: v.stringifyValue(errorInfo.value, options)
        });
        ret.push(v.extend({}, errorInfo, {error: error}));
      });
      return ret;
    },

    // In:
    // [{attribute: "<attributeName>", ...}]
    // Out:
    // {"<attributeName>": [{attribute: "<attributeName>", ...}]}
    groupErrorsByAttribute: function(errors) {
      var ret = {};
      errors.forEach(function(error) {
        var list = ret[error.attribute];
        if (list) {
          list.push(error);
        } else {
          ret[error.attribute] = [error];
        }
      });
      return ret;
    },

    // In:
    // [{error: "<message 1>", ...}, {error: "<message 2>", ...}]
    // Out:
    // ["<message 1>", "<message 2>"]
    flattenErrorsToArray: 

    cleanAttributes: function(attributes, whitelist) {
      function whitelistCreator(obj, key, last) {
        if (v.isObject(obj[key])) {
          return obj[key];
        }
        return (obj[key] = last ? true : {});
      }

      function buildObjectWhitelist(whitelist) {
        var ow = {}
          , lastObject
          , attr;
        for (attr in whitelist) {
          if (!whitelist[attr]) {
            continue;
          }
          v.forEachKeyInKeypath(ow, attr, whitelistCreator);
        }
        return ow;
      }

      function cleanRecursive(attributes, whitelist) {
        if (!v.isObject(attributes)) {
          return attributes;
        }

        var ret = v.extend({}, attributes)
          , w
          , attribute;

        for (attribute in attributes) {
          w = whitelist[attribute];

          if (v.isObject(w)) {
            ret[attribute] = cleanRecursive(ret[attribute], w);
          } else if (!w) {
            delete ret[attribute];
          }
        }
        return ret;
      }

      if (!v.isObject(whitelist) || !v.isObject(attributes)) {
        return {};
      }

      whitelist = buildObjectWhitelist(whitelist);
      return cleanRecursive(attributes, whitelist);
    },

    exposeModule: function(validate, root, exports, module, define) {
      if (exports) {
        if (module && module.exports) {
          exports = module.exports = validate;
        }
        exports.validate = validate;
      } else {
        root.validate = validate;
        if (validate.isFunction(define) && define.amd) {
          define([], function () { return validate; });
        }
      }
    },

    warn: function(msg) {
      if (typeof console !== "undefined" && console.warn) {
        console.warn("[validate.js] " + msg);
      }
    },

    error: function(msg) {
      if (typeof console !== "undefined" && console.error) {
        console.error("[validate.js] " + msg);
      }
    }
  });

  validate.validators = {
    // Presence validates that the value isn't empty
    presence: function(value, options) {
      options = v.extend({}, this.options, options);
      if (options.allowEmpty !== false ? !v.isDefined(value) : v.isEmpty(value)) {
        return options.message || this.message || "can't be blank";
      }
    },
    length: function(value, options, attribute) {
      // Empty values are allowed
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var is = options.is
        , maximum = options.maximum
        , minimum = options.minimum
        , tokenizer = options.tokenizer || function(val) { return val; }
        , err
        , errors = [];

      value = tokenizer(value);
      var length = value.length;
      if(!v.isNumber(length)) {
        return options.message || this.notValid || "has an incorrect length";
      }

      // Is checks
      if (v.isNumber(is) && length !== is) {
        err = options.wrongLength ||
          this.wrongLength ||
          "is the wrong length (should be %{count} characters)";
        errors.push(v.format(err, {count: is}));
      }

      if (v.isNumber(minimum) && length < minimum) {
        err = options.tooShort ||
          this.tooShort ||
          "is too short (minimum is %{count} characters)";
        errors.push(v.format(err, {count: minimum}));
      }

      if (v.isNumber(maximum) && length > maximum) {
        err = options.tooLong ||
          this.tooLong ||
          "is too long (maximum is %{count} characters)";
        errors.push(v.format(err, {count: maximum}));
      }

      if (errors.length > 0) {
        return options.message || errors;
      }
    },
    numericality: function(value, options, attribute, attributes, globalOptions) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var errors = []
        , name
        , count
        , checks = {
            greaterThan:          
            greaterThanOrEqualTo: 
            equalTo:              function(v, c) { return v === c; },
            lessThan:             
            lessThanOrEqualTo:    
            divisibleBy:                    }
        , prettify = options.prettify ||
          (globalOptions && globalOptions.prettify) ||
          v.prettify;

      // Strict will check that it is a valid looking number
      if (v.isString(value) && options.strict) {
        var pattern = "^-?(0|[1-9]\\d*)";
        if (!options.onlyInteger) {
          pattern += "(\\.\\d+)?";
        }
        pattern += "$";

        if (!(new RegExp(pattern).test(value))) {
          return options.message ||
            options.notValid ||
            this.notValid ||
            this.message ||
            "must be a valid number";
        }
      }

      // Coerce the value to a number unless we're being strict.
      if (options.noStrings !== true && v.isString(value) && !v.isEmpty(value)) {
        value = +value;
      }

      // If it's not a number we shouldn't continue since it will compare it.
      if (!v.isNumber(value)) {
        return options.message ||
          options.notValid ||
          this.notValid ||
          this.message ||
          "is not a number";
      }

      // Same logic as above, sort of. Don't bother with comparisons if this
      // doesn't pass.
      if (options.onlyInteger && !v.isInteger(value)) {
        return options.message ||
          options.notInteger ||
          this.notInteger ||
          this.message ||
          "must be an integer";
      }

      for (name in checks) {
        count = options[name];
        if (v.isNumber(count) && !checks[name](value, count)) {
          // This picks the default message if specified
          // For example the greaterThan check uses the message from
          // this.notGreaterThan so we capitalize the name and prepend "not"
          var key = "not" + v.capitalize(name);
          var msg = options[key] ||
            this[key] ||
            this.message ||
            "must be %{type} %{count}";

          errors.push(v.format(msg, {
            count: count,
            type: prettify(name)
          }));
        }
      }

      if (options.odd && value % 2 !== 1) {
        errors.push(options.notOdd ||
            this.notOdd ||
            this.message ||
            "must be odd");
      }
      if (options.even && value % 2 !== 0) {
        errors.push(options.notEven ||
            this.notEven ||
            this.message ||
            "must be even");
      }

      if (errors.length) {
        return options.message || errors;
      }
    },
    datetime: v.extend(function(value, options) {
      if (!v.isFunction(this.parse) || !v.isFunction(this.format)) {
        throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");
      }

      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var err
        , errors = []
        , earliest = options.earliest ? this.parse(options.earliest, options) : NaN
        , latest = options.latest ? this.parse(options.latest, options) : NaN;

      value = this.parse(value, options);

      // 86400000 is the number of milliseconds in a day, this is used to remove
      // the time from the date
      if (isNaN(value) || options.dateOnly && value % 86400000 !== 0) {
        err = options.notValid ||
          options.message ||
          this.notValid ||
          "must be a valid date";
        return v.format(err, {value: arguments[0]});
      }

      if (!isNaN(earliest) && value < earliest) {
        err = options.tooEarly ||
          options.message ||
          this.tooEarly ||
          "must be no earlier than %{date}";
        err = v.format(err, {
          value: this.format(value, options),
          date: this.format(earliest, options)
        });
        errors.push(err);
      }

      if (!isNaN(latest) && value > latest) {
        err = options.tooLate ||
          options.message ||
          this.tooLate ||
          "must be no later than %{date}";
        err = v.format(err, {
          date: this.format(latest, options),
          value: this.format(value, options)
        });
        errors.push(err);
      }

      if (errors.length) {
        return v.unique(errors);
      }
    }, {
      parse: null,
      format: null
    }),
    date: function(value, options) {
      options = v.extend({}, options, {dateOnly: true});
      return v.validators.datetime.call(v.validators.datetime, value, options);
    },
    format: function(value, options) {
      if (v.isString(options) || (options instanceof RegExp)) {
        options = {pattern: options};
      }

      options = v.extend({}, this.options, options);

      var message = options.message || this.message || "is invalid"
        , pattern = options.pattern
        , match;

      // Empty values are allowed
      if (!v.isDefined(value)) {
        return;
      }
      if (!v.isString(value)) {
        return message;
      }

      if (v.isString(pattern)) {
        pattern = new RegExp(options.pattern, options.flags);
      }
      match = pattern.exec(value);
      if (!match || match[0].length != value.length) {
        return message;
      }
    },
    inclusion: function(value, options) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (v.isArray(options)) {
        options = {within: options};
      }
      options = v.extend({}, this.options, options);
      if (v.contains(options.within, value)) {
        return;
      }
      var message = options.message ||
        this.message ||
        "^%{value} is not included in the list";
      return v.format(message, {value: value});
    },
    exclusion: function(value, options) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (v.isArray(options)) {
        options = {within: options};
      }
      options = v.extend({}, this.options, options);
      if (!v.contains(options.within, value)) {
        return;
      }
      var message = options.message || this.message || "^%{value} is restricted";
      if (v.isString(options.within[value])) {
        value = options.within[value];
      }
      return v.format(message, {value: value});
    },
    email: v.extend(function(value, options) {
      options = v.extend({}, this.options, options);
      var message = options.message || this.message || "is not a valid email";
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (!v.isString(value)) {
        return message;
      }
      if (!this.PATTERN.exec(value)) {
        return message;
      }
    }, {
      PATTERN: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i
    }),
    equality: function(value, options, attribute, attributes, globalOptions) {
      if (!v.isDefined(value)) {
        return;
      }

      if (v.isString(options)) {
        options = {attribute: options};
      }
      options = v.extend({}, this.options, options);
      var message = options.message ||
        this.message ||
        "is not equal to %{attribute}";

      if (v.isEmpty(options.attribute) || !v.isString(options.attribute)) {
        throw new Error("The attribute must be a non empty string");
      }

      var otherValue = v.getDeepObjectValue(attributes, options.attribute)
        , comparator = options.comparator ||         , prettify = options.prettify ||
          (globalOptions && globalOptions.prettify) ||
          v.prettify;

      if (!comparator(value, otherValue, options, attribute, attributes)) {
        return v.format(message, {attribute: prettify(options.attribute)});
      }
    },
    // A URL validator that is used to validate URLs with the ability to
    // restrict schemes and some domains.
    url: function(value, options) {
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var message = options.message || this.message || "is not a valid url"
        , schemes = options.schemes || this.schemes || ['http', 'https']
        , allowLocal = options.allowLocal || this.allowLocal || false
        , allowDataUrl = options.allowDataUrl || this.allowDataUrl || false;
      if (!v.isString(value)) {
        return message;
      }

      // https://gist.github.com/dperini/729294
      var regex =
        "^" +
        // protocol identifier
        "(?:(?:" + schemes.join("|") + ")://)" +
        // user:pass authentication
        "(?:\\S+(?::\\S*)?@)?" +
        "(?:";

      var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";

      if (allowLocal) {
        tld += "?";
      } else {
        regex +=
          // IP address exclusion
          // private & local networks
          "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
          "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
          "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})";
      }

      regex +=
          // IP address dotted notation octets
          // excludes loopback network 0.0.0.0
          // excludes reserved space >= 224.0.0.0
          // excludes network & broacast addresses
          // (first & last IP address of each class)
          "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
          "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
          "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        "|" +
          // host name
          "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
          // domain name
          "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
          tld +
        ")" +
        // port number
        "(?::\\d{2,5})?" +
        // resource path
        "(?:[/?#]\\S*)?" +
      "$";

      if (allowDataUrl) {
        // RFC 2397
        var mediaType = "\\w+\\/[-+.\\w]+(?:;[\\w=]+)*";
        var urlchar = "[A-Za-z0-9-_.!~\\*'();\\/?:@&=+$,%]*";
        var dataurl = "data:(?:"+mediaType+")?(?:;base64)?,"+urlchar;
        regex = "(?:"+regex+")|(?:^"+dataurl+"$)";
      }

      var PATTERN = new RegExp(regex, 'i');
      if (!PATTERN.exec(value)) {
        return message;
      }
    },
    type: v.extend(function(value, originalOptions, attribute, attributes, globalOptions) {
      if (v.isString(originalOptions)) {
        originalOptions = {type: originalOptions};
      }

      if (!v.isDefined(value)) {
        return;
      }

      var options = v.extend({}, this.options, originalOptions);

      var type = options.type;
      if (!v.isDefined(type)) {
        throw new Error("No type was specified");
      }

      var check;
      if (v.isFunction(type)) {
        check = type;
      } else {
        check = this.types[type];
      }

      if (!v.isFunction(check)) {
        throw new Error("validate.validators.type.types." + type + " must be a function.");
      }

      if (!check(value, options, attribute, attributes, globalOptions)) {
        var message = originalOptions.message ||
          this.messages[type] ||
          this.message ||
          options.message ||
          (v.isFunction(type) ? "must be of the correct type" : "must be of type %{type}");

        if (v.isFunction(message)) {
          message = message(value, originalOptions, attribute, attributes, globalOptions);
        }

        return v.format(message, {attribute: v.prettify(attribute), type: type});
      }
    }, {
      types: {
        object: 
        array: v.isArray,
        integer: v.isInteger,
        number: v.isNumber,
        string: v.isString,
        date: v.isDate,
        boolean: v.isBoolean
      },
      messages: {}
    })
  };

  validate.formatters = {
    detailed: 
    flat: v.flattenErrorsToArray,
    grouped: function(errors) {
      var attr;

      errors = v.groupErrorsByAttribute(errors);
      for (attr in errors) {
        errors[attr] = v.flattenErrorsToArray(errors[attr]);
      }
      return errors;
    },
    constraint: function(errors) {
      var attr;
      errors = v.groupErrorsByAttribute(errors);
      for (attr in errors) {
        errors[attr] = errors[attr].map(function(result) {
          return result.validator;
        }).sort();
      }
      return errors;
    }
  };

  validate.exposeModule(validate, this, exports, module, __webpack_require__.amdD);
}).call(this,
         true ? /* istanbul ignore next */ exports : 0,
         true ? /* istanbul ignore next */ module : 0,
        __webpack_require__.amdD);


/***/ }),

/***/ 52732:
/***/ (function(module) {

!this,();


/***/ }),

/***/ 98701:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ec: function() { return /* binding */ S; },
/* harmony export */   i1: function() { return /* binding */ c; }
/* harmony export */ });
/* unused harmony exports CSSResult, css, supportsAdoptingStyleSheets, unsafeCSS */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;onst r=i=S=c=e?t=>t:
//# sourceMappingURL=css-tag.js.map


/***/ }),

/***/ 88732:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fl: function() { return /* binding */ u; }
/* harmony export */ });
/* unused harmony exports defaultConverter, notEqual */
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98701);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s;const e=window,r=e.trustedTypes,h=r?r.emptyScript:"",o=e.reactiveElementPolyfillSupport,n={toAttributefromAttribute,a=l={attribute:!0,type:String,converter:n,reflect:!1,hasChanged:a},d="finalized";class u extends HTMLElement{finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__/* .getCompatibleStyle */ .i1)(i))}else void 0!==i&&s.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__/* .getCompatibleStyle */ .i1)(i));return s}eRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__/* .adoptStyles */ .ec)(s,this.constructor.elementStyles),s}nableUpdating(t){}leUpdate(){return this.performUpdate()}illUpdate(t){}UpdateComplete(){return this._$E_}dated(t){}u[d]=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==o||o({ReactiveElement:u}),(null!==(s=e.reactiveElementVersions)&&void 0!==s?s:e.reactiveElementVersions=[]).push("1.6.3");
//# sourceMappingURL=reactive-element.js.map


/***/ }),

/***/ 8922:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dy: function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.dy; },
/* harmony export */   oi: function() { return /* binding */ s; }
/* harmony export */ });
/* unused harmony exports UpdatingElement, _$LE */
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88732);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33692);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;const r=(/* unused pure expression or super */ null && (t));class s extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__/* .ReactiveElement */ .fl{nectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});const h={_$AK:_$AL:;(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");
//# sourceMappingURL=lit-element.js.map


/***/ }),

/***/ 33692:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jb: function() { return /* binding */ T; },
/* harmony export */   Ld: function() { return /* binding */ A; },
/* harmony export */   dy: function() { return /* binding */ x; },
/* harmony export */   sY: function() { return /* binding */ D; }
/* harmony export */ });
/* unused harmony exports _$LH, svg */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i=window,s=i.trustedTypes,e=s?s.createPolicy("lit-html",{createHTML:):void 0,o="$lit$",n=`lit$${(Math.random()+"").slice(9)}$`,l="?"+n,h=`<${l}>`,r=document,u=d=c=Array.isArray,v=a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);onst V=I=s?s.emptyScript:"";st j={O:o,P:n,A:l,C:1,M:V,L:M,R:v,D:S,I:R,V:k,H:L,N:z,U:H,F:Z},B=i.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i.litHtmlVersions)&&void 0!==t?t:i.litHtmlVersions=[]).push("2.8.0");const D=
//# sourceMappingURL=lit-html.js.map


/***/ }),

/***/ 85862:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dy: function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.dy; },
/* harmony export */   oi: /* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88732);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33692);
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8922);

//# sourceMappingURL=index.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	!);
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!);
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!);
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!);
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!);
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./node_modules/vanilla-lazyload/dist/lazyload.min.js
var lazyload_min = __webpack_require__(52732);
var lazyload_min_default = /*#__PURE__*/__webpack_require__.n(lazyload_min);
// EXTERNAL MODULE: ./node_modules/lit/index.js
var lit = __webpack_require__(85862);
;// CONCATENATED MODULE: ./src/js/shared/components/select.js
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

/**
 * TODO: Make it accessible!
 * see reference: https://medium.com/lego-engineering/building-accessible-select-component-in-react-b61dbdf5122f
 */
var selectComponent = /*#__PURE__*/function (_LitElement) {
  _inherits(selectComponent, _LitElement);
  function selectComponent() {
    var _this;
    _classCallCheck(this, selectComponent);
    _this = _callSuper(this, selectComponent);
    _this.placeholder = "Select";

    // flags
    _this.isMultiSelect = false;
    _this.isShowOptions = false;
    _this.isHasOption = false;
    _this.isForm = false; // if is apart of marketo form
    _this.isHideRemove = false;
    _this.isWithSearch = false;
    _this.isAccessible = true;
    _this.isDisplaySelectedValue = false;
    _this.selectedOptions = [];
    _this.optionsStore = [];
    _this.focused = 0;
    var that = _assertThisInitialized(_this);
    window.addEventListener("click", function (e) {
      if (e.pointerType !== "" && !that.contains(e.target)) {
        that.toggleOptions(e, true);
      }
    });
    return _this;
  }
  _createClass(selectComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      if (this.selected) {
        this.pick(this.selected);
      }
      if (this.isAccessible) {
        var that = this;
        var options = this.querySelector("ul").children;
        var optionSelected;
        var next;
        window.addEventListener("keydown", function (e) {
          if (that.isShowOptions) {
            if (e.key === "ArrowDown") {
              if (optionSelected) {
                optionSelected.classList.remove("focused");
                next = optionSelected.nextElementSibling;
                if (next) {
                  optionSelected = next;
                  next.classList.add("focused");
                } else {
                  optionSelected = options[0];
                  options[0].classList.add("focused");
                }
              } else {
                optionSelected = options[0];
                options[0].classList.add("focused");
              }
            } else if (e.key === "ArrowUp") {
              if (optionSelected) {
                optionSelected.classList.remove("focused");
                next = optionSelected.previousElementSibling;
                if (next) {
                  optionSelected = next;
                  next.classList.add("focused");
                } else {
                  optionSelected = options[options.length - 1];
                  options[options.length - 1].classList.add("focused");
                }
              } else {
                optionSelected = options[options.length - 1];
                options[options.length - 1].classList.add("focused");
              }
            } else if (e.key === "Enter") {
              optionSelected.click();
            }
            if (optionSelected) {
              that.scrollIntoViewIfNeeded(optionSelected);
            }
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return (0,lit/* html */.dy)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div\n        class=\"select-component\n        ", "\n        ", "\n        ", "\n        ", " ", "\n        ", "\n        \"\n      >\n        ", "\n\n        <input\n          type=\"hidden\"\n          id=\"", "\"\n          name=\"", "\"\n          value=\"", "\"\n          data-label=\"", "\"\n          ", "\n        />\n        <div class=\"input\" @click=\"", "\">\n          <span class=\"label\">", "</span>\n          <div class=\"controllers\">\n            ", "\n            <span class=\"separator\"></span>\n            <button class=\"open\" type=\"button\"></button>\n          </div>\n        </div>\n\n        ", "\n\n        <div\n          class=\"options\n                ", "\n        \"\n        >\n          ", "\n          <ul class=\"", "\">\n            ", "\n          </ul>\n        </div>\n      </div>\n    "])), this.isDark ? "is-dark" : "", this.isMultiSelect ? "multi-select-component" : "", this.isHideRemove ? "no-remove" : "", this.isHasOption ? "has-option" : "", this.isForm ? "form-group" : "", this.isShowOptions ? "active" : "", this.isForm && this.inputId && this.inputLabel ? (0,lit/* html */.dy)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<label for=\"", "\">", "</label>"])), this.inputId, this.inputLabel) : "", this.inputId ? this.inputId : "", this.inputName ? this.inputName : "", this.selected ? this.selected.value : "", this.selected ? this.selected.label : "", this.validation, function (e) {
        return _this2.toggleOptions(e);
      }, this.label ? this.label : this.placeholder, !this.isHideRemove ? (0,lit/* html */.dy)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([" <button class=\"remove\" type=\"button\" @click=\"", "\"></button> "])), this.remove) : "", this.isForm ? (0,lit/* html */.dy)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<div class=\"input-messages\"></div>"]))) : "", this.isShowOptions ? "active" : "", this.isWithSearch ? (0,lit/* html */.dy)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<input class=\"input-search\" placeholder=\"Search\" @input=\"", "\" />"])),  : "", this.isShowOptions ? "active" : "", this.options && this.options.map(function (option, i) {
        return (0,lit/* html */.dy)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<li\n                  value=\"", "\"\n                  class=\"", "\"\n                  @click=\"", "\"\n                >\n                  ", "\n                  ", "\n                </li>"])), option.value, _this2.isSelected(option) ? "active" : "",  option.label, _this2.isMultiSelect ? (0,lit/* html */.dy)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<span><span class=\"check\"></span><span class=\"un-check\"></span></span>"]))) : "");
      }));
    }
  }, {
    key: "scrollIntoViewIfNeeded",
    value: function scrollIntoViewIfNeeded(child) {
      var parent = this.querySelector(".options");
      // Where is the parent on page
      var parentRect = parent.getBoundingClientRect();
      // What can you see?
      var parentViewableArea = {
        height: parent.clientHeight,
        width: parent.clientWidth
      };

      // Where is the child
      var childRect = child.getBoundingClientRect();
      // Is the child viewable?
      var isViewable = childRect.top >= parentRect.top && childRect.bottom <= parentRect.top + parentViewableArea.height;

      // if you can't see the child try to scroll parent
      if (!isViewable) {
        // Should we scroll using top or bottom? Find the smaller ABS adjustment
        var scrollTop = childRect.top - parentRect.top;
        var scrollBot = childRect.bottom - parentRect.bottom;
        if (Math.abs(scrollTop) < Math.abs(scrollBot)) {
          // we're near the top of the list
          parent.scrollTop += scrollTop;
        } else {
          // we're near the bottom of the list
          parent.scrollTop += scrollBot;
        }
      }
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this;
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      if (this.optionsStore.length == 0) {
        this.optionsStore = this.options;
      } else {
        this.options = this.optionsStore;
      }
      var value = e.target.value.toLowerCase();
      this.options = this.options.filter(;
    }
  }, {
    key: "toggleOptions",
    value: function toggleOptions(e) {
      var clickOutside = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (e && e.target.classList.contains("remove")) {
        return;
      }
      if (clickOutside) {
        this.isShowOptions = false;
      } else {
        this.isShowOptions = !this.isShowOptions;
        var radContainer = document.querySelector(".rad-form-container");
        if (window.innerWidth < 768 && radContainer && this.isShowOptions) {
          console.log("scroll", this.isShowOptions);
          radContainer.scrollBy({
            top: 150,
            behavior: "smooth"
          });
        }
      }
      var event = new CustomEvent("toggleOptions", {
        detail: {
          state: this.isShowOptions ? "open" : "close",
          selected: this.selectedOptions
        },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.isHasOption = false;
      var current = this.selectedOptions; // []
      this.selectedOptions = [];
      this.label = this.placeholder;
      //   triggerEvent(input);

      this.cb({
        oldVal: this.isMultiSelect ? current : current[0],
        newVal: this.isMultiSelect ? [] : null
      });
    }
  }, {
    key: "optionSelect",
    value: function optionSelect(i) {
      var programmaticPick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var current = _toConsumableArray(this.selectedOptions); // []
      var selected = this.options[i]; // {}

      if (this.isMultiSelect) {
        // multiselect has more than 1 option selected
        if (current.length > 0) {
          // if already selected - remove it
          if (this.isSelected(selected)) {
            this.removeArrayItem(selected);
          } else {
            this.selectedOptions.push(selected);
          }
          if (this.selectedOptions.length > 1) {
            this.label = "".concat(this.selectedOptions.length, " Options selected");
          } else if (this.selectedOptions.length === 1) {
            this.label = this.selectedOptions[0].label;
          } else {
            this.isHasOption = false;
            this.label = this.placeholder;
          }
          this.cb({
            oldVal: current,
            newVal: this.selectedOptions
          });
        } else {
          // first time select
          this.isHasOption = true;
          this.label = selected.label;
          this.selectedOptions = [];
          this.selectedOptions.push(selected);
          this.cb({
            oldVal: [],
            newVal: this.selectedOptions
          });
        }
      } else {
        this.isHasOption = true;
        this.label = this.isDisplaySelectedValue ? selected.value : selected.label;
        this.selectedOptions = [];
        this.selectedOptions.push(selected);
        if (!programmaticPick) {
          this.toggleOptions();
        }
        this.cb({
          oldVal: current.length > 0 ? current[0] : null,
          newVal: selected
        });
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected(option) {
      return this.selectedOptions.some(;
    }
  }, {
    key: "removeArrayItem",
    value: function removeArrayItem(selected) {
      this.selectedOptions = this.selectedOptions.filter(;
    }
  }, {
    key: "cb",
    value: function cb(obj) {
      var event = new CustomEvent("pick", {
        detail: obj,
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "forceCb",
    value: function forceCb() {
      if (this.isMultiSelect) {
        this.cb({
          oldVal: [],
          newVal: this.selectedOptions
        });
      } else {
        this.cb({
          oldVal: null,
          newVal: this.selectedOptions[0]
        });
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.isHasOption = false;
      this.selectedOptions = [];
      this.label = this.placeholder;
    }

    // Pass value like 'foo' of object like {value: 'foo', label: 'Foo'}
  }, {
    key: "pick",
    value: function pick(val) {
      var index = this.options.findIndex(function (o) {
        return o.value === (typeof val === "string" ? val : val.value);
      });
      if (index !== -1) {
        this.optionSelect(index, true);
      }
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        label: {
          type: String
        },
        placeholder: {
          type: String
        },
        // flags
        isMultiSelect: {
          type: Boolean
        },
        isShowOptions: {
          type: Boolean
        },
        isHasOption: {
          type: Boolean
        },
        isForm: {
          type: Boolean
        },
        // if is apart of marketo form
        isHideRemove: {
          type: Boolean
        },
        isWithSearch: {
          type: Boolean
        },
        isDark: {
          type: Boolean
        },
        inputLabel: {
          type: String
        },
        inputId: {
          type: String
        },
        inputName: {
          type: String
        },
        selected: {
          type: String || Object
        },
        options: {
          converter: function converter(value, type) {
            if (typeof value === "string") {
              return JSON.parse(value);
            }
            return value;
          }
        }
      };
    }
  }]);
  return selectComponent;
}(lit/* LitElement */.oi);
customElements.define("select-component", selectComponent);
// EXTERNAL MODULE: ./node_modules/enquire.js/src/index.js
var src = __webpack_require__(24974);
var src_default = /*#__PURE__*/__webpack_require__.n(src);
;// CONCATENATED MODULE: ./node_modules/ssr-window/ssr-window.esm.js
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */

const ssrDocument = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: '',
    },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent
    createElement
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function ssr_window_esm_getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}

const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState() { },
        pushState() { },
        go() { },
        back() { },
    },
    CustomEvent: 
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout
    matchMedia
    requestAnimationFrame
    cancelAnimationFrame
};



;// CONCATENATED MODULE: ./node_modules/dom7/dom7.esm.js
/**
 * Dom7 4.0.6
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2023, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: February 2, 2023
 */


/* eslint-disable no-proto */



// eslint-disable-next-line



dom7_esm_$.fn = Dom7.prototype;

// eslint-disable-next-line

function addClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.add(...classNames);
  });
  return this;
}







function data(key, value) {
  let el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    const dataKey = el.getAttribute(`data-${key}`);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (let i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}











function transitionStart(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionstart', fireCallBack);
  }

  if (callback) {
    dom.on('transitionstart', fireCallBack);
  }

  return this;
}

function transitionEnd(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}


function width() {
  const window = getWindow();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function dom7_esm_outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  const window = getWindow();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}




function show() {
  const window = getWindow();

  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}











function appendTo(parent) {
  dom7_esm_$(parent).append(this);
  return this;
}






function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return dom7_esm_$([]);

  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if (dom7_esm_$(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);

    el = next;
  }

  return dom7_esm_$(nextEls);
}











function add(...els) {
  const dom = this;
  let i;
  let j;

  for (i = 0; i < els.length; i += 1) {
    const toAdd = dom7_esm_$(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}


// eslint-disable-next-line

function scrollTo(...args) {
  const window = getWindow();
  let [left, top, duration, easing, callback] = args;

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    [left, top, duration, callback, easing] = args;
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    const el = this;
    let currentTop;
    let currentLeft;
    let maxTop;
    let maxLeft;
    let newTop;
    let newLeft;
    let scrollTop; // eslint-disable-line

    let scrollLeft; // eslint-disable-line

    let animateTop = top > 0 || top === 0;
    let animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    let startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time = new Date().getTime()) {
      if (startTime === null) {
        startTime = time;
      }

      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      let done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop(...args) {
  let [top, duration, easing, callback] = args;

  if (args.length === 3 && typeof easing === 'function') {
    [top, duration, callback, easing] = args;
  }

  const dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}


// eslint-disable-next-line

function animate(initialProps, initialParams) {
  const window = getWindow();
  const els = this;
  const a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],

    easingProgress

    stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(el => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },

    done(complete) {
      a.animating = false;
      a.elements.each(;
      if (complete) complete(els);

      if (a.que.length > 0) {
        const que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },

    animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      const elements = []; // Define & Cache Initials & Units

      a.elements.each(;
      let startTime = null;
      let time;
      let elementsDone = 0;
      let propsDone = 0;
      let done;
      let began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        let progress;
        let easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(;
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }

  };

  if (a.elements.length === 0) {
    return els;
  }

  let animateInstance;

  for (let i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}


const noTrigger = 'resize scroll'.split(' ');


const click = shortcut('click');
const dom7_esm_blur = shortcut('blur');
const dom7_esm_focus = shortcut('focus');
const focusin = shortcut('focusin');
const focusout = shortcut('focusout');
const keyup = shortcut('keyup');
const keydown = shortcut('keydown');
const keypress = shortcut('keypress');
const dom7_esm_submit = shortcut('submit');
const change = shortcut('change');
const mousedown = shortcut('mousedown');
const mousemove = shortcut('mousemove');
const mouseup = shortcut('mouseup');
const mouseenter = shortcut('mouseenter');
const mouseleave = shortcut('mouseleave');
const mouseout = shortcut('mouseout');
const mouseover = shortcut('mouseover');
const touchstart = shortcut('touchstart');
const touchend = shortcut('touchend');
const touchmove = shortcut('touchmove');
const resize = shortcut('resize');
const dom7_esm_scroll = shortcut('scroll');

/* harmony default export */ var dom7_esm = ((/* unused pure expression or super */ null && (dom7_esm_$)));


;// CONCATENATED MODULE: ./node_modules/swiper/shared/dom.js

const Methods = {
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  toggleClass: toggleClass,
  attr: attr,
  removeAttr: removeAttr,
  transform: transform,
  transition: transition,
  on: on,
  off: off,
  trigger: trigger,
  transitionEnd: transitionEnd,
  outerWidth: dom7_esm_outerWidth,
  outerHeight: dom7_esm_outerHeight,
  styles: styles,
  offset: offset,
  css: css,
  each: each,
  html: html,
  text: dom7_esm_text,
  is: is,
  index: index,
  eq: eq,
  append: append,
  prepend: prepend,
  next: next,
  nextAll: nextAll,
  prev: prev,
  prevAll: prevAll,
  parent: dom7_esm_parent,
  parents: parents,
  closest: closest,
  find: find,
  children: children,
  filter: filter,
  remove: remove
};
Object.keys(Methods).forEach(;
/* harmony default export */ var dom = (dom7_esm_$);
;// CONCATENATED MODULE: ./node_modules/swiper/shared/utils.js






function utils_getTranslate(el, axis = 'x') {
  const window = ssr_window_esm_getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = utils_getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(.join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}







;// CONCATENATED MODULE: ./node_modules/swiper/shared/get-support.js

let support;




;// CONCATENATED MODULE: ./node_modules/swiper/shared/get-device.js


let deviceCached;




;// CONCATENATED MODULE: ./node_modules/swiper/shared/get-browser.js

let browser;


function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}


;// CONCATENATED MODULE: ./node_modules/swiper/core/modules/resize/resize.js

function Resize({
  swiper,
  on,
  emit
}) {
  const window = ssr_window_esm_getWindow();
  let observer = null;

  const resizeHandler = 

  const createObserver = 

  const removeObserver = 

  const orientationChangeHandler = 

  on('init', ;
  on('destroy', ;
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/modules/observer/observer.js

;// CONCATENATED MODULE: ./node_modules/swiper/core/events-emitter.js
/* eslint-disable no-underscore-dangle */
/* harmony default export */ var events_emitter = ({
  on

  once

  onAny

  offAny

  off

  emit
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSize.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlides.js

function updateSlides() {
  const swiper = this;

  
  
  const params = swiper.params;
  const {
    $wrapperEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  let offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  }); // reset cssMode offsets

  if (params.centeredSlides && params.cssMode) {
    utils_setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
    utils_setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
  }

  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  } // Calc slides


  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(.length > 0;

  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);

    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = ``;
      }

      const slideStyles = getComputedStyle(slide[0]);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide[0];
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (params.setWrapperSize) {
    $wrapperEl.css({
      [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    const newSlidesGrid = [];

    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter(.css({
      [key]: `${spaceBetween}px`
    });
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(;
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(;
    allSlidesSize -= params.spaceBetween;

    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach(;
      slidesGrid.forEach(;
    }
  }

  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });

  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    utils_setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    utils_setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(;
  }

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateAutoHeight.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlidesOffset.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlidesProgress.js

function updateSlidesProgress(translate = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;

    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }

    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides.eq(i).addClass(params.slideVisibleClass);
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }

  swiper.visibleSlides = dom(swiper.visibleSlides);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateProgress.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlidesClasses.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateActiveIndex.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateClickedSlide.js

;// CONCATENATED MODULE: ./node_modules/swiper/core/update/index.js









/* harmony default export */ var update = ({
  updateSize: updateSize,
  updateSlides: updateSlides,
  updateAutoHeight: updateAutoHeight,
  updateSlidesOffset: updateSlidesOffset,
  updateSlidesProgress: updateSlidesProgress,
  updateProgress: updateProgress,
  updateSlidesClasses: updateSlidesClasses,
  updateActiveIndex: updateActiveIndex,
  updateClickedSlide: updateClickedSlide
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/getTranslate.js

;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/setTranslate.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/minTranslate.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/maxTranslate.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/translateTo.js

;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/index.js





/* harmony default export */ var translate = ({
  getTranslate: getSwiperTranslate,
  setTranslate: setTranslate,
  minTranslate: minTranslate,
  maxTranslate: maxTranslate,
  translateTo: translateTo
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/setTransition.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/transitionEmit.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/transitionStart.js

;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/transitionEnd.js

;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/index.js



/* harmony default export */ var core_transition = ({
  setTransition: setTransition,
  transitionStart: transitionStart_transitionStart,
  transitionEnd: transitionEnd_transitionEnd
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideTo.js

function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    const indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    const isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  const translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;

    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }

      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

      if (isVirtual) {
        requestAnimationFrame(;
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }

    return true;
  }

  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);

  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;

    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = 
    }

    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
  }

  return true;
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideToLoop.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideNext.js
/* eslint no-unused-vars: "off" */
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slidePrev.js
/* eslint no-unused-vars: "off" */
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    animating,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  const translate = rtlTranslate ? swiper.translate : -swiper.translate;

  
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(;
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach(;

    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }

  let prevIndex = 0;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }

  if (params.rewind && swiper.isBeginning) {
    return swiper.slideTo(swiper.slides.length - 1, speed, runCallbacks, internal);
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideReset.js
/* eslint no-unused-vars: "off" */
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideToClosest.js
/* eslint no-unused-vars: "off" */
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideToClickedSlide.js


;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/index.js







/* harmony default export */ var slide = ({
  slideTo: slideTo,
  slideToLoop: slideToLoop,
  slideNext: slideNext,
  slidePrev: slidePrev,
  slideReset: slideReset,
  slideToClosest: slideToClosest,
  slideToClickedSlide: slideToClickedSlide
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/loop/loopCreate.js


;// CONCATENATED MODULE: ./node_modules/swiper/core/loop/loopFix.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/loop/loopDestroy.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/loop/index.js



/* harmony default export */ var loop = ({
  loopCreate: loopCreate,
  loopFix: loopFix,
  loopDestroy: loopDestroy
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/grab-cursor/setGrabCursor.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/grab-cursor/index.js


/* harmony default export */ var grab_cursor = ({
  setGrabCursor: setGrabCursor,
  unsetGrabCursor: unsetGrabCursor
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onTouchStart.js


 // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

function closestElement(selector, base = this) {
  
  return __closestFrom(base);
}

function onTouchStart(event) {
  const swiper = this;
  const document = ssr_window_esm_getDocument();
  const window = ssr_window_esm_getWindow();
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }

  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let $targetEl = dom(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = dom(event.path[0]);
  }

  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = utils_now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    let preventDefault = true;
    if ($targetEl.is(data.focusableElements)) preventDefault = false;

    if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onTouchMove.js



function onTouchMove(event) {
  const document = ssr_window_esm_getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = utils_now();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop && !params.cssMode) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onTouchEnd.js

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  const touchEndTime = utils_now();
  const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = utils_now();
  utils_nextTick(;

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  } // Find current slide


  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];

  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onResize.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onClick.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onScroll.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/index.js







let dummyEventAttached = false;

function dummyEventListener() {}

const events = 



/* harmony default export */ var core_events = ({
  attachEvents,
  detachEvents
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/breakpoints/setBreakpoint.js


const isGridEnabled = 

;// CONCATENATED MODULE: ./node_modules/swiper/core/breakpoints/getBreakpoint.js

;// CONCATENATED MODULE: ./node_modules/swiper/core/breakpoints/index.js


/* harmony default export */ var breakpoints = ({
  setBreakpoint: setBreakpoint,
  getBreakpoint: getBreakpoint
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/classes/addClasses.js

;// CONCATENATED MODULE: ./node_modules/swiper/core/classes/removeClasses.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/classes/index.js


/* harmony default export */ var classes = ({
  addClasses: addClasses,
  removeClasses: removeClasses
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/images/loadImage.js


;// CONCATENATED MODULE: ./node_modules/swiper/core/images/preloadImages.js
;// CONCATENATED MODULE: ./node_modules/swiper/core/images/index.js


/* harmony default export */ var core_images = ({
  loadImage: loadImage,
  preloadImages: preloadImages
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/check-overflow/index.js

/* harmony default export */ var check_overflow = ({
  checkOverflow
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/defaults.js
/* harmony default export */ var defaults = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/moduleExtendParams.js

;// CONCATENATED MODULE: ./node_modules/swiper/core/core.js
/* eslint no-param-reassign: "off" */






















const prototypes = {
  eventsEmitter: events_emitter,
  update: update,
  translate: translate,
  transition: core_transition,
  slide: slide,
  loop: loop,
  grabCursor: grab_cursor,
  events: core_events,
  breakpoints: breakpoints,
  checkOverflow: check_overflow,
  classes: classes,
  images: core_images
};
const extendedDefaults = {};

class Swiper {
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  static get extendedDefaults() {
    return extendedDefaults;
  }

  
  
  
}

Object.keys(prototypes).forEach(;
Swiper.use([Resize, Observer]);
/* harmony default export */ var core = (Swiper);
;// CONCATENATED MODULE: ./node_modules/swiper/modules/virtual/virtual.js


function Virtual({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };

  
  
  
  
  
  
  on('beforeInit', ;
  on('setTranslate', ;
  on('init update resize', ;
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/keyboard/keyboard.js
/* eslint-disable consistent-return */


function Keyboard({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = getDocument();
  const window = getWindow();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });

  
  
  
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', ;
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/mousewheel/mousewheel.js
/* eslint-disable consistent-return */



function Mousewheel({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];

  
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }

  
  
  
  
  
  
  
  on('init', ;
  on('destroy', ;
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/shared/create-element-if-not-defined.js

;// CONCATENATED MODULE: ./node_modules/swiper/modules/navigation/navigation.js


function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };

  
  
  
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
  }

  
  
  
  on('init', ;
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', ;
  on('click', ;
  Object.assign(swiper.navigation, {
    update,
    init,
    destroy
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/shared/classes-to-selector.js
;// CONCATENATED MODULE: ./node_modules/swiper/modules/pagination/pagination.js



function Pagination({
  swiper,
  extendParams,
  on,
  emit
}) {
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`
    }
  });
  swiper.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;

  
  
  
  
  
  
  on('init', () => {
    init();
    render();
    update();
  });
  on('activeIndexChange', ;
  on('snapIndexChange', ;
  on('slidesLengthChange', ;
  on('snapGridLengthChange', ;
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $el
    } = swiper.pagination;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', ;
  Object.assign(swiper.pagination, {
    render,
    update,
    init,
    destroy
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/scrollbar/scrollbar.js




function Scrollbar({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null,
    $el: null,
    $dragEl: null
  };

  
  
  
  
  
  
  
  
  
  function enableDraggable() {
    if (!swiper.params.scrollbar.el) return;
    events('on');
  }

  
  
  
  on('init', ;
  on('update resize observerUpdate lock unlock', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', ;
  on('enable disable', ;
  on('destroy', () => {
    destroy();
  });
  Object.assign(swiper.scrollbar, {
    updateSize,
    setTranslate,
    init,
    destroy
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/parallax/parallax.js

function Parallax({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    parallax: {
      enabled: false
    }
  });

  const setTransform = 

  const setTranslate = 

  const setTransition = (duration = swiper.params.speed) => {
    const {
      $el
    } = swiper;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(;
  };

  on('beforeInit', ;
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', ;
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/zoom/zoom.js



function Zoom({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = getWindow();
  extendParams({
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let gesturesEnabled;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const gesture = {
    $slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    $imageEl: undefined,
    $imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },

    set
  });

  // Events


  
  
  
  
  
  
  
  
  // Toggle Zoom


  
  
  
  
  
  // Attach/Detach Events


  
  
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', ;
  on('doubleTap', ;
  on('transitionEnd', ;
  on('slideChange', ;
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/lazy/lazy.js


function Lazy({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    lazy: {
      checkInView: false,
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      scrollingElement: '',
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  });
  swiper.lazy = {};
  let scrollHandlerAttached = false;
  let initialImageLoaded = false;

  function loadInSlide(index, loadInDuplicate = true) {
    const params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
    const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(;
  }

  
  
  on('beforeInit', ;
  on('init', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('scroll', ;
  on('scrollbarDragMove resize _freeModeNoMomentumRelease', ;
  on('transitionStart', ;
  on('transitionEnd', ;
  on('slideChange', ;
  Object.assign(swiper.lazy, {
    load,
    loadInSlide
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/controller/controller.js
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/a11y/a11y.js


function A11y({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group'
    }
  });
  let liveRegion = ne);r);
  }

  function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
  }

  function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
  }

  function addElRole($el, role) {
    $el.attr('role', role);
  }

  function addElRoleDescription($el, description) {
    $el.attr('aria-roledescription', description);
  }

  function addElControls($el, controls) {
    $el.attr('aria-controls', controls);
  }

  function addElLabel($el, label) {
    $el.attr('aria-label', label);
  }

  function addElId($el, id) {
    $el.attr('id', id);e);
  }

  function disableEl($el) {
    $el.attr('aria-disabled', true);e);  }  }th;le;});
  }

  const initd);
  };

  function init() {
    const params = swiper.params.a11y;
    swiper.$el.append(liveRegion); // Container

    const $containerEl = swiper.$el;

    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }

    if (params.containerMessage) {
      addElLabel($containerEl, params.containerMessage);
    } // Wrapper


    const $wrapperEl = swiper.$wrapperEl;
    const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId($wrapperEl, wrapperId);
    addElLive($wrapperEl, live); // Slide

    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
    }

    addElRole($(swiper.slides), params.slideRole);
    const slidesLength = swiper.params.loop ? swiper.slideseClass)).length : swiper.slides.length;
    swiper.slid;
    }); // Navigation

    let $nextEl;
    let $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl && $nextEl.length) {
      initNavEl($nextEl, wrapperId, params.nextSlideMessage);
    }

    if ($prevEl && $prevEl.length) {
      initNavEl($prevEl, wrapperId, params.prevSlideMessage);
    } // Pagination


    if (hasClickablePagination()) {
      swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    }
  }

  function destroy() {
    if (liveRegion && liveRegion.length > 0) liveRegion.remove();
    let $nextEl;
    let $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', onEnterOrSpaceKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', onEnterOrSpaceKey);
    } // Pagination


    if (hasClickablePagination()) {
      swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    }
  }

  on('befor`);
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
    updateNavigation();
  });
  on('toEdge', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('fromEdge', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('de();
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/history/history.js

function History({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides'
    }
  });
  let initialized = false;
  let paths = {};

  const sl');
  };

  const getPathV };
  };

  const setHi  }
  };

  const scrollTo  }
  };

  const setHistoryPope);
  };

  const  }
  };

  const de  }
  };

  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRe  }
  });
  on('slideC  }
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/hash-navigation/hash-navigation.js


function HashNavigation({
  swiper,
  extendParams,
  emit,
  on
}) {
  let initialized = false;
  const document = getDocument();
  const window = getWindow();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  });

  const onHashC  }
  };

  const se  }
  };

  const  }
  };

  const de  }
  };

  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('de  }
  });
  on('transitionEnd _freeModeNoMomentumRe  }
  });
  on('slideC  }
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/autoplay/autoplay.js
/* eslint no-underscore-dangle: "off" */

/* eslint no-use-before-define: "off" */


function Autoplay({
  swiper,
  extendParams,
  on,
  emit
}) {
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
 y);ue;ue;  }  }  }});();  }e);
  }

  on(  }
  });
  on('beforeTransition  }
  });
  on('sliderFirs  }
  });
  on('tou  }
  });
  on('dee);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run,
    start,
    stop
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/thumbs/thumbs.js


function Thumb({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
x);ue;
  }

  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      let currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();

        if (typeof prevThumbsIndex === 'undefined') {
          newThumbsIndex = nextThumbsIndex;
        } else if (typeof nextThumbsIndex === 'undefined') {
          newThumbsIndex = prevThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = nextThumbsIndex;
        } else {
          newThumbsIndex = prevThumbsIndex;
        }

        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }

      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {// newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    } // Activate thumbs


    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
      }
    }
  }

  on('before);
  });
  on('slideChange update resize observerU();
  });
  on('setTransn);
  });
  on('beforeDe  }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/free-mode/free-mode.js

function freeMode({
  swiper,
  extendParams,
  emit,
  once
}) {
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
 });
  }

  function onTouchEnd({
    currentPos
  }) {
    const {
      params,
      $wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper; // Time diff

    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;

    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;

        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        once('transiti      });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transi      });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transi      });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }

  Object.assign(swiper, {
    freeMode: {
      onTouchMove,
      onTouchEnd
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-cube/effect-cube.js


function EffectCube({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });

  const setTran`);
  };

  const setTrans  }
  };

  effectInit({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwrite
    })
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/shared/create-shaowEl;
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-flip/effect-flip.js




function EffectFlip({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
      transformEl: null
    }
  });

  const setTran  }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.flipEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl
    });
  };

  effectInit({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwrite
    })
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js



function EffectCoverflow({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true,
      transformEl: null
    }
  });

  const setTran  }
  };

  const setTransn);
  };

  effectInit({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwrite
    })
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-creative/effect-creative.js




function EffectCreative({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    creativeEffect: {
      transformEl: null,
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });

  const getTranslatex`;
  };

  const setTran  }
  };

  const setTrans});
  };

  effectInit({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    persppective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-cards/effect-cards.js




function EffectCards({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cardsEffect: {
      slideShadows: true,
      transformEl: null
    }
  });

  const setTran  }
  };

  const setTrans});
  };

  effectInit({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    persp=> true,
    overwrite
    })
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/swiper.esm.js
/**
 * Swiper 7.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 24, 2021
 */


























;// CONCATENATED MODULE: ./src/js/shared/components/resources.js
function resources_typeof(o) { "@babel/helpers - typeof"; return resources_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, resources_typeof(o); }
var resources_templateObject, resources_templateObject2;
function resources_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function resources_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function resources_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, resources_toPropertyKey(descriptor.key), descriptor); } }
function resources_createClass(Constructor, protoProps, staticProps) { if (protoProps) resources_defineProperties(Constructor.prototype, protoProps); if (staticProps) resources_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function resources_toPropertyKey(t) { var i = resources_toPrimitive(t, "string"); return "symbol" == resources_typeof(i) ? i : String(i); }
function resources_toPrimitive(t, r) { if ("object" != resources_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != resources_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function resources_callSuper(t, o, e) { return o = resources_getPrototypeOf(o), resources_possibleConstructorReturn(t, resources_isNativeReflectConstruct() ? Reflect.construct(o, e || [], resources_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function resources_possibleConstructorReturn(self, call) { if (call && (resources_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return resources_assertThisInitialized(self); }
function resources_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function resources_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (resources_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function resources_getPrototypeOf(o) { resources_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return resources_getPrototypeOf(o); }
function resources_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) resources_setPrototypeOf(subClass, superClass); }
function resources_setPrototypeOf(o, p) { resources_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return resources_setPrototypeOf(o, p); }



var componentResources = /*#__PURE__*/function (_LitElement) {
  resources_inherits(componentResources, _LitElement);
  function componentResources() {
    resources_classCallCheck(this, componentResources);
    return resources_callSuper(this, componentResources);
  }
  resources_createClass(componentResources, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var that = this;
      var resourcesSwiper = null;
      var resourcesSwiperArgs = {
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 23,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      };
      src_default().register("(max-width:767px)", {
        match: function match() {
          var el = that.querySelector(".resources-component-slider");
          resourcesSwiper = new core(el, resourcesSwiperArgs);
        },
        unmatch: function unmatch() {
          if (typeof resourcesSwiper !== "undefined") {
            resourcesSwiper.destroy(true, true);
            resourcesSwiper = null;
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0,lit/* html */.dy)(resources_templateObject || (resources_templateObject = resources_taggedTemplateLiteral(["\n      <div class=\"resources-component resources-v1\">\n        <div class=\"swiper resources-component-slider\">\n          <div class=\"swiper-wrapper\">\n            ", "\n          </div>\n          <div class=\"swiper-pagination d-md-none\"></div>\n        </div>\n      </div>\n    "])), this.posts.map(function (post) {
        return (0,lit/* html */.dy)(resources_templateObject2 || (resources_templateObject2 = resources_taggedTemplateLiteral(["\n                  <a\n                    href=\"", "\"\n                    class=\"swiper-slide\"\n                    @click=\"", "\"\n                  >\n                    <div\n                      class=\"image\"\n                      data-2x=\"", "\"\n                      style=\"background-image: url('", "');\"\n                    ></div>\n                    <div class=\"content-wrapper\">\n                      <span class=\"type\">", "</span>\n                      <span class=\"title\">", "</span>\n                      <p>", "</p>\n                    </div>\n                  </a>\n                "])), post.url, function () {
          return window.redcrossOnLink({
            btnLocation: "Component resources",
            btnName: post.title,
            btnContext: post.url
          });
        }, post.image["2x"], post.image["1x"], post.type, post.title, post.content);
      }));
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this;
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        posts: {
          type: Array
        }
      };
    }
  }]);
  return componentResources;
}(lit/* LitElement */.oi);
customElements.define("component-resources", componentResources);
;// CONCATENATED MODULE: ./src/js/shared/helpers/formValidation.js
function formValidation_typeof(o) { "@babel/helpers - typeof"; return formValidation_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, formValidation_typeorn e; }
function _defineProperty(obj, key, value) { key = formValidation_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function formValidation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function formValidation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, formValidation_toPropertyKey(descriptor.key), descriptor); } }
function formValidation_createClass(Constructor, protoProps, staticProps) { if (protoProps) formValidation_defineProperties(Constructor.prototype, protoProps); if (staticProps) formValidation_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function formValidation_toPropertyKey(t) { var i = formValidation_toPrimitive(t, "string"); return "symbol" == formValidation_typeof(i) ? i : String(i); }
function formValidation_toPrimitive(t, r) { if ("object" != formValidation_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != formValidation_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var validate = __webpack_require__(79765);
var FormValidation = /*#__PURE__*/function () {
  /**
   * Class for validating specific form based on rules
   * Based on:
   * https://github.com/ansman/validate.js/blob/master/examples.html
   */

  function FormValidation(form, rules, cb) {
    var _this = this;
    formValidation_classCallCheck(this, FormValidation);
    // Custom messages that are in use:
    validate.validators.presence.message = 'This field is required';
    validate.validators.email.message = 'Email is not valid';
    validate.validators.url.message = 'URL is not valid';
    validate.validators.length.tooLong = 'Please enter no more than %{count} characters';
    validate.validators.length.tooShort = 'Please enter at least %{count} characters';
    /**
     * Can be added whenever needed:
     * date: Please enter a valid date.
     * number: Please enter a valid number.
     * digits: Please enter only digits.
     * equalTo: Please enter the same value again.
     */

    this.rules = {};
    this.useInputRules = true;
    if (rules) {
      this.rules = rules;
      this.useInputRules = false;
    }
    this.cb = cb;
    // const el = document.querySelector(form);
    this.collectFormInput(form);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.classList.add("sending");
      _this.handleFormSubmit(e.target);
    });
  }

  // Hook up the inputs to validate on the fly
  formValidation_createClass(FormValidation, [{
    key: "collectFormInput",
    value: function collectFormInput(form) {
      var _this2 = this;
      var inputs = form.querySelectorAll("input, textarea, select");
      if (this.useInputRules) {
        var _loop = function _loop(i) {
          if (!inputs.item(i).dataset.validation) {
            return 1; // continue
          }
          _this2.collectFormInputRules(inputs.item(i).dataset.validation).then(function (res) {
            _this2.rules[inputs.item(i).name] = _objectSpread(_objectSpread({}, _this2.rules[inputs.item(i).name]), res);
            if (inputs.item(i).value !== "") {
              _this2.validateInput(inputs.item(i), form);
            }
            inputs.item(i).addEventListener("input", function (e) {
              _this2.validateInput(e, form);
            });
          });
        };
        for (var i = 0; i < inputs.length; ++i) {
          if (_loop(i)) continue;
        }
      } else {
        for (var _i = 0; _i < inputs.length; ++_i) {
          if (this.rules[inputs.item(_i).name] !== undefined) {
            if (inputs.item(_i).value !== "") {
              this.validateInput(inputs.item(_i), form);
            }
            inputs.item(_i).addEventListener("input", function (e) {
              _this2.validateInput(e, form);
            });
          }
        }
      }
    }
  }, {
    key: "collectFormInputRules",
    value: function collectFormInputRules(rules) {
      var obj = {};
      if (rules.indexOf('|') === -1) {
        rules = rules.split(',');
      } else {
        rules = rules.split('|');
      }
      for (var i = 0; i < rules.length; i++) {
        if (rules[i].indexOf('[') !== -1) {
          var ruleName = rules[i].substr(0, rules[i].indexOf(':'));
          var ruleValue = rules[i].substr(rules[i].indexOf(':') + 1);
          ruleValue = ruleValue.substring(1, ruleValue.length - 1);
          ruleValue = this.collectFormInputRules(ruleValue);
          obj[ruleName] = this.toPrimitive(ruleValue);
        } else {
          var rule = rules[i].split(":");
          var _ruleName = rule[0];
          var _ruleValue = rule[1];
          obj[_ruleName] = this.toPrimitive(_ruleValue);
        }
      }
      return Promise.resolve(obj);
    }
  }, {
    key: "toPrimitive",
    value: function toPrimitive(value) {
      if (value === 'true') {
        return true;
      }
      if (value === 'false') {
        return false;
      }
      if (/^\d+$/.test(value)) {
        return parseInt(value);
      }
      return value;
    }
  }, {
    key: "validateInput",
    value: function validateInput(e, form) {
      var el = e;
      var name = e.name;
      if (e.type === "input") {
        el = e.target;
        name = e.target.name;
      }
      var errors = validate(form, this.rules, {
        fullMessages: false
      }) || {};
      this.showErrorsForInput(el, errors[name]);
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit(form, input) {
      // validate the form against the constraints
      var errors = validate(form, this.rules, {
        fullMessages: false
      });
      // then we update the form to reflect the results
      this.showErrors(form, errors || {});
      if (!errors) {
        this.onSuccess(form);
      } else {
        form.classList.remove("sending");
      }
    }

    // Updates the inputs with the validation errors
  }, {
    key: "showErrors",
    value: function showErrors(form, errors) {
      var _this3 = this;
      // We loop through all the inputs and show the errors for that input
      form.querySelectorAll("input[name],textarea[name],select[name]") // input[name]:not([type=hidden])
      .forEach(function (input) {
        if (_this3.rules[input.name] !== undefined) {
          _this3.showErrorsForInput(input, errors && errors[input.name]);
        }
      });
    }

    // Shows the errors for a specific input
  }, {
    key: "showErrorsForInput",
    value: function showErrorsForInput(input, errors) {
      var _this4 = this;
      // This is the root of the input
      var formGroup = this.closestParent(input.parentNode, "form-group"),
        // Find where the error messages will be insert into
        messages = formGroup.querySelector(".input-messages");
      // First we remove any old messages and resets the classes
      this.resetFormGroup(formGroup);
      // If we have errors
      if (errors) {
        // we first mark the group has having errors
        formGroup.classList.add("has-error");
        // then we append all the errors

        errors.      });
      } else {
        // otherwise we simply mark it as success
        formGroup.classList.add("has-success");
      }
    }

    // Recusively finds the closest parent that has the specified class
  }, {
    key: "closestParent",
   ;
    }(function (child, className) {
      if (!child || child == document) {
        return null;
      }
      if (child.classList.contains(className)) {
        return child;
      } else {
        return closestParent(child.parentNode, className);
      }
    })
  }, {
    key: "resetFormGroup",
    value: function resetFormGroup(formGroup) {
      // Remove the success and error classes
      formGroup.classList.remove("has-error");
      formGroup.classList.remove("has-success");
      // and remove any old messages

      formGroup.querySelectorAll(".help-block.error").      });
    }

    // Adds the specified error with the following markup
    // <p className="help-block error">[message]</p>
  }, {
    key: "addError",
    value: function addError(messages, error) {
      var block = document.createElement("span");
      block.classList.add("help-block");
      block.classList.add("error");
      block.innerText = error;
      messages.appendChild(block);
    }
  }, {
    key: "onSuccess",
   ;
    }
  }]);
  return FormValidation;
}();
/* harmony default export */ var formValidation = (FormValidation);
;// CONCATENATED MODULE: ./src/js/shared/helpers/marketo-global.js
function marketo_global_typeof(o) { "@babel/helpers - typeof"; return marketo_global_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, marketo_global_typeof(o); }

var loadForm = function loadForm(ourForm) {
  // collect form data
  var fid = parseInt(ourForm.dataset.formid);
  var uid = ourForm.dataset.uniqid;
  var onSuccess = function onSuccess(values, followUpUrl) {
    ourForm.classList.remove("sending");
    if (window.marketo.success[fid + "-" + uid]) {
      window.marketo.success[fid + "-" + uid](ourForm);
      return false;
    }
    if (window.marketo.success[fid]) {
      window.marketo.success[fid](ourForm);
      return false;
    }
    return false;
  };
  /**
   * Check if form is already loaded
   * Marketo is injecting form element to the dom after each loadForm function
   * if so - we track the one that's already loaded and re-submit them
   */
  var mktoForm = MktoForms2.getForm(fid);
  if (mktoForm) {
    /**
     * Marketo forms2.js
     * https://gist.github.com/dyroffk/86e1f09b10334f9f414a425770556c27
     * The onSuccess function pushes the callback to a "onSuccess" array,
     * We pass here an empty onSuccess function (will reset the array)
     * and then pass another cb to the onSuccess
     * According to the Marketo forms2.js the onSuccess is per Form and not global!
     */
    mktoForm.onSuccess();
    mktoForm.onSuccess(onSuccess);

    // form is loaded already, just submit it with new values
    setAndSubmit(ourForm, mktoForm);
  } else {
    MktoForms2.loadForm(localize_script.marketo_endpoint, localize_script.munchkin_id, fid, function (form) {
      if (form.getId() !== fid) {
        return;
      }
      passUtmParams(form);
      form.onSuccess(onSuccess);
    }).whenReady(function (form) {
      if (form.getId() !== fid) {
        return;
      }
      setAndSubmit(ourForm, form);
    });
  }
};
var setAndSubmit = function setAndSubmit(ourForm, mktoForm) {
  // get our form data
  // const formData = new FormData(ourForm);
  var elements = ourForm.elements;
  var data = {};
  // for (var pair of formData.entries()) {
  //   data[pair[0]] = pair[1];
  // }
  for (var i = 0; i < elements.length; i++) {
    var item = elements.item(i);
    data[item.name] = item.value;
  }

  // match form data with marketo fields
  var values = {};
  var formValues = mktoForm.getValues();
  for (var key in formValues) {
    if (!data[key]) {
      continue;
    }
    if (marketo_global_typeof(formValues[key]) === "object") {
      values[key] = data[key].split(",");
    } else {
      values[key] = data[key];
    }
  }

  /**
   * Add Custom object params - this is relevant only for Elementor event pages
   */
  formValues.hasOwnProperty("eventNameforCO") ? formValues["eventNameforCO"] = typeof eventNameCustomObject !== "undefined" ? eventNameCustomObject : "No event mentioned" : null;
  formValues.hasOwnProperty("eventURLforCO") ? formValues["eventURLforCO"] = window.location.origin + window.location.pathname : null;
  if (formValues.hasOwnProperty("registrationDateforCO")) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    var res = "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
    formValues["registrationDateforCO"] = res;
  }
  formValues.hasOwnProperty("uTMCampaignforCO") ? formValues["uTMCampaignforCO"] = mktoForm.getValues().utm_campaign__c : null;
  formValues.hasOwnProperty("uTMMediumforCO") ? formValues["uTMMediumforCO"] = mktoForm.getValues().utm_medium__c : null;
  formValues.hasOwnProperty("uTMSourceforCO") ? formValues["uTMSourceforCO"] = mktoForm.getValues().utm_source__c : null;

  // assign and submit
  mktoForm.setValues(Object.assign({}, formValues, values)).submit();
};
var marketo = {
  init: function init() {
    var mc = document.querySelectorAll('.form-group input[type="checkbox"]');
    mc.forEach(function (element) {
      element.addEventListener("click", function (e) {
        if (e.target.value === "yes") {
          e.target.value = "no";
          e.checked = false;
          e.target.removeAttribute("checked");
        } else {
          e.target.value = "yes";
          e.checked = true;
          e.target.setAttribute("checked", "");
        }
      });
    });
    var forms = document.querySelectorAll(".custom-marketo-form");
    forms.forEach(function (form) {
      new formValidation(form, null, loadForm);
    });
  }
};
window.marketo = {
  onSuccess: function onSuccess(fid, cb) {
    var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    window.marketo.success[fid + (prefix ? "-" + prefix : null)] = cb;
  },
  success: {},
  init: function init() {
    marketo.init();
  },
  r();
  }
};
/* harmony default export */ var marketo_global = ((/* unused pure expression or super */ null && (marketo)));
// EXTERNAL MODULE: ./src/js/shared/helpers/marketo.class.js
var marketo_class = __webpack_require__(96125);
// EXTERNAL MODULE: ./src/js/shared/helpers/hs.class.js
var hs_class = __webpack_require__(30814);
// EXTERNAL MODULE: ./src/js/component-pre-fill-rad-footer.js + 2 modules
var component_pre_fill_rad_footer = __webpack_require__(18216);
;// CONCATENATED MODULE: ./src/js/shared/components/dropdown.js
function dropdown_typeof(o) { "@babel/helpers - typeof"; return dropdown_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, dropdown_typeof(o); }
var dropdown_templateObject, dropdown_templateObject2, dropdown_templateObject3, dropdown_templateObject4;
function dropdown_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function dropdown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function dropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, dropdown_toPropertyKey(descriptor.key), descriptor); } }
function dropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) dropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) dropdown_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function dropdown_toPropertyKey(t) { var i = dropdown_toPrimitive(t, "string"); return "symbol" == dropdown_typeof(i) ? i : String(i); }
function dropdown_toPrimitive(t, r) { if ("object" != dropdown_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != dropdown_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function dropdown_callSuper(t, o, e) { return o = dropdown_getPrototypeOf(o), dropdown_possibleConstructorReturn(t, dropdown_isNativeReflectConstruct() ? Reflect.construct(o, e || [], dropdown_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function dropdown_possibleConstructorReturn(self, call) { if (call && (dropdown_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return dropdown_assertThisInitialized(self); }
function dropdown_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function dropdown_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (dropdown_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function dropdown_getPrototypeOf(o) { dropdown_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dropdown_getPrototypeOf(o); }
function dropdown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) dropdown_setPrototypeOf(subClass, superClass); }
function dropdown_setPrototypeOf(o, p) { dropdown_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dropdown_setPrototypeOf(o, p); }

var dropdownComponent = /*#__PURE__*/function (_LitElement) {
  dropdown_inherits(dropdownComponent, _LitElement);
  function dropdownComponent() {
    var _this;
    dropdown_classCallCheck(this, dropdownComponent);
    _this = dropdown_callSuper(this, dropdownComponent);
    _this.dropItemsArray = [];
    _this.dropItemsParams = {};
    // this.mobileUrl = "https://yotpo.com/signup-mobile-lp";
    _this.availableItems = {
      yotpo_lobby: {
        url: "http://accounts.yotpo.com/#/signup",
        target: "_blank",
        title: "Sign up with Yotpo",
        icon: "yotpo",
        name: "Yotpo"
      },
      shopify_sms: {
        url: "https://apps.shopify.com/smsbump",
        target: "_blank",
        title: "Sign up with Shopify",
        icon: "shopify",
        name: "Shopify"
      },
      shopify_reviews: {
        url: "https://apps.shopify.com/yotpo-social-reviews",
        target: "_blank",
        title: "Sign up with Shopify",
        icon: "shopify",
        name: "Shopify"
      },
      shopify_subscriptions: {
        url: "https://apps.shopify.com/yotpo-subscription",
        target: "_blank",
        title: "Sign up with Shopify",
        icon: "shopify",
        name: "Shopify"
      },
      shopify_loyalty: {
        url: "https://apps.shopify.com/swell",
        target: "_blank",
        title: "Sign up with Shopify",
        icon: "shopify",
        name: "Shopify"
      }
    };
    _this.icons = {
      yotpo: function yotpo() {
        return (0,lit/* html */.dy)(dropdown_templateObject || (dropdown_templateObject = dropdown_taggedTemplateLiteral(["\n        <svg\n          viewBox=\"0 0 200 200\"\n          version=\"1.1\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        >\n          <title>yotpo</title>\n          <g id=\"yotpo\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"Yotpo-Logo-/-Lettermark\">\n              <circle id=\"Oval\" fill=\"currentColor\" cx=\"100.212838\" cy=\"100.212838\" r=\"100.212838\"></circle>\n              <polygon\n                id=\"Combined-Shape\"\n                fill=\"#FFFFFF\"\n                points=\"62.130289 52.2576159 85.1896822 52.2576159 100.212838 93.6762627 115.951026 52.2576159 138.295386 52.2576159 100.087768 148.168059 77.989627 148.168059 89.2904841 118.450033\"\n              ></polygon>\n            </g>\n          </g>\n        </svg>\n      "])));
      },
      shopify: function shopify() {
        return (0,lit/* html */.dy)(dropdown_templateObject2 || (dropdown_templateObject2 = dropdown_taggedTemplateLiteral(["\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 38 43\">\n          <g fill=\"none\" fill-rule=\"evenodd\">\n            <g fill-rule=\"nonzero\">\n              <g>\n                <path\n                  fill=\"currentColor\"\n                  d=\"M32.556 8.11c-.03-.212-.215-.33-.37-.343-.152-.013-3.151-.058-3.151-.058s-2.508-2.436-2.755-2.683c-.248-.248-.732-.173-.92-.117l-1.26.39c-.132-.428-.326-.954-.603-1.482-.893-1.704-2.2-2.604-3.78-2.607h-.006c-.11 0-.218.01-.328.02-.047-.056-.094-.11-.143-.165C18.552.33 17.67-.03 16.612.002c-2.04.058-4.072 1.532-5.72 4.15-1.16 1.841-2.041 4.155-2.291 5.946l-4.018 1.245c-1.183.371-1.22.407-1.374 1.522C3.094 13.708 0 37.635 0 37.635l25.931 4.485 11.24-2.794S32.584 8.323 32.555 8.11zM22.802 5.7l-2.012.624c-.016-1.033-.138-2.47-.62-3.713 1.549.294 2.31 2.045 2.632 3.09zm-3.369 1.044l-4.33 1.34c.419-1.601 1.212-3.196 2.187-4.242.362-.39.87-.823 1.47-1.07.564 1.177.687 2.845.673 3.972zm-2.78-5.384c.48-.01.882.094 1.227.321-.552.286-1.084.698-1.585 1.234C15 4.305 14.006 6.464 13.61 8.546c-1.235.382-2.443.758-3.556 1.101.703-3.278 3.45-8.196 6.599-8.287z\"\n                  transform=\"translate(-735.000000, -157.000000) translate(735.000000, 157.000000)\"\n                />\n                <path\n                  fill=\"currentColor\"\n                  d=\"M32.188 7.768c-.153-.013-3.152-.058-3.152-.058s-2.508-2.436-2.755-2.683c-.093-.093-.218-.14-.349-.16l.002 37.252 11.238-2.793S32.586 8.324 32.557 8.112c-.03-.213-.216-.331-.37-.344z\"\n                  transform=\"translate(-735.000000, -157.000000) translate(735.000000, 157.000000)\"\n                />\n                <path\n                  fill=\"#FFF\"\n                  d=\"M19.703 13.547l-1.305 4.883s-1.456-.663-3.182-.554c-2.531.16-2.558 1.756-2.533 2.157.138 2.184 5.884 2.661 6.207 7.777.253 4.024-2.135 6.778-5.577 6.995-4.13.26-6.405-2.176-6.405-2.176l.876-3.723s2.289 1.727 4.121 1.611c1.197-.075 1.624-1.049 1.581-1.737-.18-2.85-4.859-2.68-5.154-7.362-.25-3.94 2.338-7.931 8.046-8.29 2.2-.142 3.325.419 3.325.419z\"\n                  transform=\"translate(-735.000000, -157.000000) translate(735.000000, 157.000000)\"\n                />\n              </g>\n            </g>\n          </g>\n        </svg>\n      "])));
      }
    };
    _this._isMobile();
    window.addEventListener("r;
    });
    return _this;
  }
  dropdown_createClass(dropdownComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this2 = this;
      var anchors = document.querySelectorAll('a[href^="#dropdown"]');
      //Set event listeners for all anchors with href starting with #dropdown
      anchors.forEach(function (anchor) {
        // Remove any existing event listeners
        // anchor.onclick = null;
        // Add event listener for click only for mobile
        // anchor.addEventListener("click", (e) => {
        //   e.preventDefault();
        //   let redcrossObject = {
        //     btnName: "Sign up mobile",
        //     btnContext: this.mobileUrl,
        //   };
        //   const anchorRedcrossOnLink = anchor.getAttribute("onclick");
        //   if (anchorRedcrossOnLink && anchorRedcrossOnLink.includes("redcrossOnLink")) {
        //     const match = anchorRedcrossOnLink.match(/\{.*?}/);
        //     if (match) {
        //       const result = JSON.parse(match[0]);
        //       redcrossObject = Object.assign(result, redcrossObject);
        //     }
        //   }

        //   window.redcrossOnLink(redcrossObject, this.mobileUrl);
        // });
        // Click won't work on desktop, so we need to add a hover event listener for desktop
        anchor.addEventListener("mouseenter", function () {
          if (_this2.isMobile) {
            return;
          }
          //Get the position of an element relative to the document
          var anchorPosition = anchor.getBoundingClientRect();
          var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          _this2.top = anchorPosition.top + scrollTop;
          _this2.left = anchorPosition.left + scrollLeft;
          //Get height of element
          _this2.elementHeight = anchor.offsetHeight;
          _this2.elementWidth = anchor.offsetWidth;
          //Get href value
          var href = anchor.getAttribute("href");
          //Get text inside brackets (square brackets are converted to in acf fields)
          var dropItems = href.match(/\((.*?)\)/);
          var dropItemsArray = [];
          var dropItemsParams = [];
          dropItems[1].split("|").forEach(function (item) {
            var url = item.split("?");
            dropItemsArray.push(url[0]);
            if (url[1]) {
              dropItemsParams[url[0]] = "?" + url[1];
            }
          });
          _this2.dropItemsArray = dropItemsArray;
          _this2.dropItemsParams = dropItemsParams;
          set      }, 500);
          _this2.visible = true;
        });
      });
    }
  }, {
    key: "_isMobile",
    value: function _isMobile() {
      if (window.innerWidth < 1280) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return (0,lit/* html */.dy)(dropdown_templateObject3 || (dropdown_templateObject3 = dropdown_taggedTemplateLiteral(["\n      <div\n        class=\"dropdown-component ", "\"\n        style=\"top:", "px;\n        left:", "px;\n        width: ", "px;\n        padding-top: ", "px;\n        \"\n        @mouseleave=\"", "\"\n      >\n        <ul>\n          ", "\n        </ul>\n      </div>\n    "])), this.visible && !this.isMobile ? "visible" : "", this.top ? this.top : 0, this.left ? this.left : 0, this.elementWidth ? this.elementWidth : 0, this.elementHeight ? this.elementHeight +       }, this.dropItemsArray.map(function (item) {
        return (0,lit/* html */.dy)(dropdown_templateObject4 || (dropdown_templateObject4 = dropdown_taggedTemplateLiteral(["\n              <li>\n                <a\n                  class=\"dropdown-link\"\n                  href=\"", "\"\n                  target=\"", "\"\n                  @click=\"", "\"\n                >\n                  ", " ", "\n                </a>\n              </li>\n            "])), _this3.availableItems[item].url + (_this3.dropItemsParams[item] ? _this3.dropItemsParams[item] : ""), _this3.availableItems[item].target, function () {
          return window.redcrossOnLink({
            btnName: "Sign up ".concat(_this3.availableItems[item].name),
            btnLocation: "Sign up dropdown desktop"
          });
        }, _this3.icons[_this3.availableItems[item].icon](), _this3.availableItems[item].title);
      }));
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this;
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        top: {
          type: Number
        },
        left: {
          type: Number
        },
        elementHeight: {
          type: Number
        },
        elementWidth: {
          type: Number
        },
        dropItemsArray: {
          type: Array
        },
        dropItemsParams: {
          type: Object
        },
        availableItems: {
          type: Array
        },
        visible: {
          type: Boolean
        },
        isMobile: {
          type: Boolean
        },
        icons: {
          type: Object
        }
        // mobileUrl: { type: String },
      };
    }
  }]);
  return dropdownComponent;
}(lit/* LitElement */.oi);
customElements.define("dropdown-component", dropdownComponent);
;// CONCATENATED MODULE: ./src/js/shared/components/floating-popup-widget.js
var floating_popup_widget_templateObject;
function floating_popup_widget_typeof(o) { "@babel/helpers - typeof"; return floating_popup_widget_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, floating_popup_widget_typeof(o); }
function floating_popup_widget_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function floating_popup_widget_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function floating_popup_widget_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, floating_popup_widget_toPropertyKey(descriptor.key), descriptor); } }
function floating_popup_widget_createClass(Constructor, protoProps, staticProps) { if (protoProps) floating_popup_widget_defineProperties(Constructor.prototype, protoProps); if (staticProps) floating_popup_widget_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function floating_popup_widget_callSuper(t, o, e) { return o = floating_popup_widget_getPrototypeOf(o), floating_popup_widget_possibleConstructorReturn(t, floating_popup_widget_isNativeReflectConstruct() ? Reflect.construct(o, e || [], floating_popup_widget_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function floating_popup_widget_possibleConstructorReturn(self, call) { if (call && (floating_popup_widget_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return floating_popup_widget_assertThisInitialized(self); }
function floating_popup_widget_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (floating_popup_widget_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function floating_popup_widget_getPrototypeOf(o) { floating_popup_widget_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return floating_popup_widget_getPrototypeOf(o); }
function floating_popup_widget_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function floating_popup_widget_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) floating_popup_widget_setPrototypeOf(subClass, superClass); }
function floating_popup_widget_setPrototypeOf(o, p) { floating_popup_widget_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return floating_popup_widget_setPrototypeOf(o obj; }
function floating_popup_widget_toPropertyKey(t) { var i = floating_popup_widget_toPrimitive(t, "string"); return "symbol" == floating_popup_widget_typeof(i) ? i : String(i); }
function floating_popup_widget_toPrimitive(t, r) { if ("object" != floating_popup_widget_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != floating_popup_widget_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var bfcmAppBackWidget = /*#__PURE__*/function (_LitElement) {
  floating_popup_widget_inherits(bfcmAppBackWidget, _LitElement);
  function bfcmAppBackWidget() {
    var _this;
    floating_popup_widget_classCallCheck(this, bfcmAppBackWidget);
    _this = floating_popup_widget_callSuper(this, bfcmAppBackWidget);
    floating_popup_widget_defineProperty(floating_popup_widget_assertThisInitialized(_this), "deleteCookie", function () {
      window.Cookies.set("floating-popup-closed", "true");
      document.getElementById("floating-popup-widget").classList.remove("visible");
    });
    floating_popup_widget_defineProperty(floating_popup_widget_assertThisInitialized(_this), "setCooki;
    });
    _this.floatingPopupClosed = false;
    return _this;
  }
  floating_popup_widget_createClass(bfcmAppBackWidget, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var closed = window.Cookies.get("floating-popup-closed");
      if (closed) {
        this.floatingPopupClosed = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return (0,lit/* html */.dy)(floating_popup_widget_templateObject || (floating_popup_widget_templateObject = floating_popup_widget_taggedTemplateLiteral(["\n      <div id=\"floating-popup-widget\" class=\"font-override ", "\">\n        <div class=\"floating-popup-widget-wrap\" @click=", ">\n          <div class=\"floating-popup-widget-close\" @click=", "></div>\n          <div class=\"floating-popup-widget-content\">\n            <div class=\"floating-popup-widget-icon\"></div>\n            <a\n              href=\"https://www.yotpo.com/retain-forward/dec-6\"\n              class=\"link-back\"\n              target=\"_blank\"\n              @click=\"", "\"\n            >\n              <div class=\"text\">\n                <span class=\"font-override\">Check out our latest product updates</span>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    "])), !this.floatingPopupClosed ? "visible" : "", function () {
        return _this2.setCookieBFCM();
        });
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this;
    }
  }], [{
    key: "properties",
 ;
    }
  }]);
  return bfcmAppBackWidget;
}(lit/* LitElement */.oi);
customElements.define("floating-popup-component", bfcmAppBackWidget);
;// CONCATENATED MODULE: ./src/js/layout.js








// import "./shared/components/bfcm-widget";

var $document = $(document);
var $body = $("body");
var $headerBtn = $(".header-btn");
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  //Hide navbar on platform pages version for paid with source=google&medium=cpc parameters
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("utm_source") === "google" && urlParams.get("utm_medium") === "cpc" && window.location.href.indexOf("/platform/") !== -1) {
    // Check if navbar was hidden before
    if (!sessionStorage.getItem("hideNavbar")) {
      // Hide navbar and set flag to remember it
      document.querySelector(".header-menu").style.display = "none";
      document.querySelector(".header-menu-toggler").style.display = "none";
      sessionStorage.setItem("hideNavbar", true);
    }
  }

  // Check if session storage is supported
  if (typeof sessionStorage !== "undefined") {
    // Store the previous page's URL
    sessionStorage.setItem("previousPage", document.referrer);
  }

  //static RAD page on "x" button click back to home page
  var closeBackButton = document.querySelector(".rad-popup-v3 .close-button-back");
  if (closeBackButton) {
    closeBackButton.addEventListener("click", function () {
      // Retrieve the stored previous page's URL
      var previousPage = sessionStorage.getItem("previousPage");
      // Check if the previous page's URL is from the same domain
      if (previousPage && previousPage.startsWith(window.location.origin)) {
        // Redirect the user back to the previous page
        window.location.href = previousPage;
      } else {
        // If the previous page's URL is not available or not from the same domain, redirect to homepage
        window.location.href = "/";
      }
    });
  }
  $(".rad-popup-v3 .close-button-back").click(function () {
    if (typeof window.redcross !== "undefined") {
      window.redcross.track("Button Clicked", {
        btnText: "X Button",
        btnName: "RAD X Button",
        btnLocation: "Rad form"
      });
    }
  });
  $(".rad-popup-v3 .close-button").click(function () {
    $(".rad-popup-v3").fadeOut(250);
    $body.removeClass("rad_popup_form_is_open");
    if (typeof window.redcross !== "undefined") {
      window.redcross.track("Button Clicked", {
        btnText: "X Button",
        btnName: "RAD X Button",
        btnLocation: "Rad form"
      });
    }

    // BFCM addition
    setTimeout(function () {
      $(".rad-popup-v3 [data-text]      });
      $(".rad-popup-v3").attr("data-variation", "default");
      $(".rad-popup-v3 [data-formid='1282'] button[type='submit']").text("Request a demo");
    }, 250);
  });

  //platform banner in menu
  $("header .platform-banner").click(function () {
    if (typeof window.redcross !== "undefined") {
      window.redcross.track("Button Clicked", {
        btnText: "Request a demo",
        btnName: "Request a demo",
        btnLocation: "Menu",
        btnContext: "(Platform) CTA box",
        originalSource: "Yotpo",
        ctaType: "Button",
        ctaText: "Request a demo"
      });
    }
  });

  // Handle pre fill RAD input and show RAD
  $document.on("click", ".rad_popup_open, .pre_fill_rad_v2_btn, .pre_fill_rad_v3_btn", function (event) {
    var formUrl = window.location.origin.includes("localhost") ? "http://localhost/yotpo/request-a-demo/" : "".concat(window.location.origin, "/request-a-demo/");
    var params = new URLSearchParams(window.location.search);
    var queryParams = params.toString();
    if (queryParams) {
      formUrl += "?" + queryParams;
    }
    var formsWithUTM = document.querySelectorAll(".radform");
    formsWithUTM.forEach(function (form) {
      form.action = formUrl;
    });
    var v = radVersion;
    var formElement = $(this).closest("[form-id]");
    var form_id = formElement.attr("form-id");
    var ctaLocation = formElement.data("location") || $(this).data("location");
    var ctaText = $(this).data("text") || "Request a demo";
    var email;

    // if (form_id) {
    //   email = $("form[form-id='" + form_id + "'] input[type='email']").val();
    //   if (email) {
    //     let mktoFields = {};
    //     mktoFields["Email"] = email;
    //     const form = MktoForms2.getForm(rad_popup_form_id);
    //     form.setValues(mktoFields);
    //     // trigger Zoominfo call
    //     console.log('input[name="Email"]');
    //     form.getFormElem()[0].querySelector('input[name="Email"]').dispatchEvent(new Event("input"));
    //   }
    // }

    // $(".rad-popup-v" + v)
    //   .fadeIn(250)
    //   .css("display", "flex");
    // $body.addClass("rad_popup_form_is_open");

    if (typeof redcross !== "undefined" && !event.target.classList.contains("custom_track")) {
      var redcrossObj = {
        originalSource: "Yotpo",
        ctaType: "Button",
        btnName: "Request a demo",
        btnText: event.target.innerText,
        ctaText: ctaText,
        // only for legacy purposes - not used in marketo
        btnLocation: ""
      };

      /**
       * Add custom data to the redcross object - example:
       * <button data-segment="{key: "value"}"></button>
       */
      var segmentData = this.dataset.segment;
      if (segmentData) {
        console.log("segmentData", segmentData);
        var jsonStr = segmentData.replace(/(\w+:)|(\w      });
        redcrossObj = Object.assign(redcrossObj, JSON.parse(jsonStr));
      }
      if (ctaLocation) {
        redcrossObj["ctaLocation"] = ctaLocation;
        redcrossObj["btnLocation"] = ctaLocation;
      }
      redcrossObj["radPrefillEmail"] = email ? email : "empty";
      redcross.track("Button Clicked", redcrossObj);
    }
    if (!form_id) {
      var _params = new URLSearchParams(window.location.search);
      var _queryParams = _params.toString();
      console.log(_queryParams);
      if (_queryParams) {
        formUrl += "?" + _queryParams;
      }
      window.location.href = formUrl;
      return;
    }
  });

  // Submit button as link to Growth
  var params = top.location.search ? URLToArray(top.location.href) : [];
  var url = "https://yap.yotpo.com/get-started/#/signup/register";
  $(".pre_fill_rad_v2_form input").keyup(function () {
    params["email"] = $(this).val();
    var buildUrl = url + "?" + ArrayToURL(params);
    $(".pre_fill_rad_v2_form a.pre_fill_rad_v2_link").attr("href", buildUrl);
  });

  //------------------------------------------------------------
  // Header menu
  //------------------------------------------------------------

  // Fix for IOS devices that have toolbar on initial load
  var mobileSubmenuFix = function mobileSubmenuFix() {
    var doc = document.documentElement;
    doc.style.setProperty("--mobile-submenu-height", "".concat(window.innerHeight, "px"));
  };
  window.addEventListener("resize", mobileSubmenuFix);
  mobileSubmenuFix();
  var $siteHeader = $(".site-header");
  // prevent users from clicking the menu before it's fully loaded
  $siteHeader.removeClass("disabled");
  $(".header-menu-toggler").click(function () {
    $siteHeader.toggleClass("menu-open");
    $(".header-menu .menu-item-has-children").removeClass("active-submenu");
    $body.toggleClass("active-menu");
  });
  window.addEventListener("resize", function () {
    $siteHeader.removeClass("menu-open");
    $(".header-menu .menu-item-has-children").removeClass("active-submenu");
    $body.removeClass("active-menu");
  });
  $(".header-menu .menu-item-has-children>a").on("click", function () {
    $(this).parent().siblings().removeClass("active-submenu");
    if (window.innerWidth <= 1024) {
      $(this).parent().toggleClass("active-submenu");
    }
  });
  $(".menu-item:not(#menu-item-85395)").click(function () {
    // Check if any menu item has the active-submenu class
    var activeSubmenuExists = $(".menu-item:not(#menu-item-85395)").hasClass("active-submenu");
    if (activeSubmenuExists) {
      // Add hide-btn class to header-btn
      $(".header-btn").addClass("hide-btn");
    } else {
      // Remove hide-btn class from header-btn
      $(".header-btn").removeClass("hide-btn");
    }
  });
  //customers sub menu
  $(".menu-item#menu-item-85395").click(function () {
    // Check if any menu item has the active-submenu class
    var activeSubmenuExistsCustomers = $(".menu-item#menu-item-85395");

    // Add hide-btn class to header-btn
    $(".header-btn").removeClass("hide-btn");
  });
  var $menuItemsWithChildren = $(".header-menu .menu-item-has-children");
  $menuItemsWithChildren.on("mouseenter", function () {
    if (window.innerWidth > 1024) {
      $body.toggleClass("active-menu");
    }
  });
  $menuItemsWithChildren.on("mouseleave", function () {
    if (window.innerWidth > 1024) {
      $body.toggleClass("active-menu");
    }
  });

  //------------------------------------------------------------
  // Footer
  //------------------------------------------------------------

  document.querySelectorAll("footer .footer-menu-title").forEach(function (el) {
    el.addEventListener("click", function () {
      var content = this.nextSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
      this.classList.toggle("active");
    });
  });

  //------------------------------------------------------------
  // Lazy load
  //------------------------------------------------------------
  window.LazyLoad = new (lazyload_min_default())({
    elements_selector: ".lazy"
  });
  window.LazyLoadBg = new (lazyload_min_default())({
    elements_selector: "[data-lazy-bg]"
  });

  //create dropdown component
  var setDropDown = document.querySelector('a[href^="#dropdown"]');
  if (setDropDown) {
    var dropdownComponent = document.createElement("dropdown-component");
    document.body.appendChild(dropdownComponent);
  }

  //create bfcm widget component if not closed
  // const bfcmComponent = document.createElement("bfcm-component");
  // document.body.appendChild(bfcmComponent);

  //create floating popup widget component if not closed
  var floatingPopupComponent = document.createElement("floating-popup-component");
  document.body.appendChild(floatingPopupComponent);
});
function URLToArray(url) {
  var request = {};
  var pairs = url.substring(url.indexOf("?") + 1).split("&");
  for (var i = 0; i < pairs.length; i++) {
    if (!pairs[i]) continue;
    var pair = pairs[i].split("=");
    request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return request;
}
function ArrayToURL(array) {
  var pairs = [];
  for (var key in array) if (array.hasOwnProperty(key)) pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(array[key]));
  return pairs.join("&");
}

//------------------------------------------------------------
// Segment events
//------------------------------------------------------------
window.redcrossOnLink = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var customRedirect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (typeof window.redcross !== "undefined") {
    var event = window.event;
    var eventCurrentTarget = event.currentTarget;
    event.preventDefault();
    var redcrossObject = {
      btnText: eventCurrentTarget.innerText,
      btnContext: eventCurrentTarget.href,
      btnName: eventCurrentTarget.innerText,
      btnLocation: ""
    };
    redcrossObject = Object.assign(redcrossObject, data);
    var redirect = customRedirect ? customRedirect : eventCurrentTarget.href;
    window.redcross.track("Button Clicked", redcrossObject, {}, function () {
      if (redirect === undefined) return;
      if (eventCurrentTarget.getAttribute("target") === "_blank") {
        window.open(redirect); // new tab
      } else {
        window.location = redirect;
      }
    });
  }
};

/**
 * Get the value of a querystring, considering if the url contains hashtags and any other problematic characts[1];
}
window.getParameterB "));
};
}();
/******/ })()
;