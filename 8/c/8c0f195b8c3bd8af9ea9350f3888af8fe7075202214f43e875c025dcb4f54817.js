.facetwp-facet {
    margin-bottom: 40px;
}

.facetwp-facet.is-loading {
    opacity: 0.6;
}

.facetwp-overlay {
    position: absolute;
}

.facetwp-pager-label {
    display: inline-block;
    margin-right: 12px;
}

.facetwp-page {
    display: inline-block;
    padding: 0px 4px;
    margin-right: 6px;
    cursor: pointer;
}

.facetwp-page.dots {
    cursor: default;
}

.facetwp-page.active {
    font-weight: bold;
    cursor: default;
}

/* Checkboxes */

.facetwp-type-checkboxes .facetwp-depth {
    display: none;
}

.facetwp-type-checkboxes .facetwp-depth.visible {
    display: inherit;
}

.facetwp-checkbox {
    background: url('../images/checkbox.png') 0 50% no-repeat;
    background-size: 14px 14px;
    margin-bottom: 4px;
    padding-left: 20px;
    cursor: pointer;
}

.facetwp-checkbox.checked {
    background-image: url('../images/checkbox-on.png');
}

.facetwp-checkbox.disabled,
.facetwp-radio.disabled {
    opacity: 0.4;
    cursor: default;
}

.facetwp-checkbox .facetwp-expand {
    float: right;
}

.facetwp-display-value {
    padding-right: 5px;
}

/* Radio */

.facetwp-radio {
    background: url('../images/radio.png') 0 50% no-repeat;
    background-size: 14px 14px;
    margin-bottom: 4px;
    padding-left: 20px;
    cursor: pointer;
}

.facetwp-radio.checked {
    background-image: url('../images/radio-on.png');
}

/* fSelect */

.facetwp-type-fselect.is-loading {
    opacity: 1; /* prevent stack order issues */
}

.facetwp-type-fselect.is-loading .fs-label-wrap,
.facetwp-type-fselect.is-loading .fs-search,
.facetwp-type-fselect.is-loading .fs-no-results,
.facetwp-type-fselect.is-loading .fs-options {
    opacity: 0.6;
}

.facetwp-type-fselect.is-loading .fs-option {
    cursor: wait;
}

.facetwp-type-fselect .fs-wrap.fs-disabled .fs-option {
    opacity: 0.4;
    cursor: wait;
}

.facetwp-type-fselect .fs-option .fs-option-label {
    white-space: nowrap;
}

.facetwp-type-fselect .fs-option.d1 .fs-option-label {
    padding-left: 20px;
}

.facetwp-type-fselect .fs-option.d2 .fs-option-label {
    padding-left: 40px;
}

.facetwp-type-fselect .fs-option.d3 .fs-option-label {
    padding-left: 60px;
}

/* Hierarchy */

.facetwp-depth {
    margin-left: 12px;
}

.facetwp-link {
    cursor: pointer;
}

.facetwp-link.checked {
    font-weight: bold;
    cursor: default;
}

.facetwp-toggle {
    cursor: pointer;
}

.facetwp-hidden {
    display: none;
}

/* Slider */

.facetwp-slider-wrap {
    padding-bottom: 15px;
}

.facetwp-slider-reset {
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    background: #fff;
    box-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ebebeb, 0 3px 6px -3px #bbb;
    padding: 4px 8px;
    cursor: pointer;
}

.facetwp-slider[data-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
}

.facetwp-slider[data-disabled="true"] .noUi-handle {
    cursor: not-allowed;
}

/* Search */

.facetwp-input-wrap {
    display: inline-block;
    position: relative;
}

.facetwp-facet input.facetwp-search,
.facetwp-facet input.facetwp-location {
    margin: 0;
    padding-right: 30px;
    min-width: 240px;
}

.facetwp-icon {
    right: 0;
    height: 100%;
    line-height: 1;
    position: absolute;
    cursor: pointer;
    opacity: 0.5;
}

.facetwp-icon:before {
    display: inline-block;
    content: '';
    width: 30px;
    height: 100%;
    background: url('../images/icon-search.png') no-repeat;
    background-position: 5px 50%;
    background-size: 20px 20px;
}

/* Proximity */

.location-results {
    position: absolute;
    background: #fff;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    overflow: hidden;
    width: 100%;
}

.location-result {
    font-size: 11px;
    border-bottom: 1px solid #ddd;
    padding: 5px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #888;
}

.location-result:hover {
    background-color: #f8f8f8;
}

.location-result.active {
    background-color: #EBF2FE;
}

.location-result .result-main {
    font-size: 13px;
    color: #222;
}

.facetwp-icon.locate-me:before {
    background-image: url('../images/icon-locate.png');
}

.facetwp-icon.f-reset:before {
    background-image: url('../images/icon-close.png');
}

.facetwp-icon.f-loading:before {
    background-image: url('../images/loading.png');
    animation: spin 700ms infinite linear;
}

.location-attribution {
    border-bottom: 1px solid #ddd;
    padding: 5px;
}

.powered-by-google {
    height: 15px;
    background: url('../images/powered-by-google.png') top right no-repeat;
    background-size: auto 15px;
}

/* Rating */

.facetwp-stars {
    display: inline-block;
    line-height: 1;
    padding-right: 4px;
    user-select: none;
    unicode-bidi: bidi-override;
    direction: rtl;
}

.facetwp-star {
    cursor: pointer;
    font-size: 20px;
    color: #ccc;
}

.facetwp-star:not(.disabled):hover,
.facetwp-star:not(.disabled):hover ~ .facetwp-star,
.facetwp-star.selected,
.facetwp-star.selected ~ .facetwp-star {
    color: #000;
}

.facetwp-star.selected:hover,
.facetwp-star.selected:hover ~ .facetwp-star {
    color: red;
}

.facetwp-star.disabled,
.facetwp-star.disabled:hover {
    cursor: auto;
    color: #eeeeee;
}

/* Listing Builder */

.fwpl-btn {
    text-decoration: none;
}

/* CSS animations */

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* Selections shortcode */

.facetwp-selections li {
    display: inline-block;
    line-height: 1;
}

.facetwp-selections .facetwp-selection-value {
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;

    padding-right: 16px;
    background-image: url('../images/icon-close.png');
    background-size: 12px 12px;
    background-repeat: no-repeat;
    background-position: right center;
}

/* Layout builder */

@media (max-width: 480px) {
    body .facetwp-template .fwpl-layout,
    body .facetwp-template-static .fwpl-layout {
        grid-template-columns: 1fr;
    }
}
