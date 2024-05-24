nvg90593.profile('141674d7b0b2c9598a6720ae7c10', '');./../fonts/muli/Muli-Light.eot');
    /* IE9 Compat Modes */
    src: url('../../fonts/muli/Muli-Light.woff2') format('woff2'),
        /* Super Modern Browsers */
        url('../../fonts/muli/Muli-Light.woff') format('woff');
    /* Pretty Modern Browsers */
    font-weight: 100;
}

@font-face {
    font-family: 'Muli';
    src: url('../../fonts/muli/Muli.eot');
    /* IE9 Compat Modes */
    src: url('../../fonts/muli/Muli.woff2') format('woff2'),
        /* Super Modern Browsers */
        url('../../fonts/muli/Muli.woff') format('woff');
    /* Pretty Modern Browsers */
    font-weight: normal;
}

/* Roboto */
@font-face {
    font-family: 'Roboto';
    src: url('../../fonts/roboto/Roboto-Light.eot'); /* IE9 Compat Modes */
    src: url('../../fonts/roboto/Roboto-Light.woff2') format('woff2'), /* Super Modern Browsers */
    url('../../fonts/roboto/Roboto-Light.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: 100;
}

@font-face {
    font-family: 'Roboto';
    src: url('../../fonts/roboto/Roboto-Regular.eot'); /* IE9 Compat Modes */
    src: url('../../fonts/roboto/Roboto-Regular.woff2') format('woff2'), /* Super Modern Browsers */
    url('../../fonts/roboto/Roboto-Regular.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url('../../fonts/roboto/Roboto-Medium.eot'); /* IE9 Compat Modes */
    src: url('../../fonts/roboto/Roboto-Medium.woff2') format('woff2'), /* Super Modern Browsers */
    url('../../fonts/roboto/Roboto-Medium.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: 600;
}

@font-face {
    font-family: 'Roboto';
    src: url('../../fonts/roboto/Roboto-Bold.eot'); /* IE9 Compat Modes */
    src: url('../../fonts/roboto/Roboto-Bold.woff2') format('woff2'), /* Super Modern Browsers */
    url('../../fonts/roboto/Roboto-Bold.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: 700;
}

/* Tajawal */
@font-face {
    font-family: 'Tajawal';
    src: url('../../fonts/tajawal/Tajawal-Regular.eot'); /* IE9 Compat Modes */
    src: url('../../fonts/tajawal/Tajawal-Regular.woff2') format('woff2'), /* Super Modern Browsers */
    url('../../fonts/tajawal/Tajawal-Regular.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: 400;
}

@font-face {
    font-family: 'Tajawal';
    src: url('../../fonts/tajawal/Tajawal-Medium.eot'); /* IE9 Compat Modes */
    src: url('../../fonts/tajawal/Tajawal-Medium.woff2') format('woff2'), /* Super Modern Browsers */
    url('../../fonts/tajawal/Tajawal-Medium.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: 500;
}

@font-face {
    font-family: 'Tajawal';
    src: url('../../fonts/tajawal/Tajawal-Bold.eot'); /* IE9 Compat Modes */
    src: url('../../fonts/tajawal/Tajawal-Bold.woff2') format('woff2'), /* Super Modern Browsers */
    url('../../fonts/tajawal/Tajawal-Bold.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: 700;
}

@font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url("../../fonts/material/MaterialIcons-Regular.eot");
    /* For IE6-8 */
    src: local("☺"), url("../../fonts/material/MaterialIcons-Regular.woff2") format("woff2"),
        url("../../fonts/material/MaterialIcons-Regular.woff") format("woff"),
        url("../../fonts/material/MaterialIcons-Regular.ttf") format("truetype");
}

body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: var(--font-family) !important;
}

.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
    /* Support for IE. */
    font-feature-settings: 'liga';
    font-display: block;
}

.f-width-100 {
    width: 100%;
}

.hidden {
    display: none;
}

/* fonts helper classes */
.f-text-content {
    font-size: 12px;
    line-height: 1.5em;
}

.f-text-medium-content {
    font-size: 14px;
    line-height: 1.5em;
}

.f-text-big-content {
    font-size: 16px;
    line-height: 1.5em;
}

.f-text-title {
    font-size: 24px;
    line-height: 1.5em;
}

.f-text-big-title {
    font-size: 32px;
    line-height: 1.1em;
}

.f-text-semibold {
    font-weight: 500;
}

.f-color-dark-gray-title {
    color: #180F33;
}

.f-color-text-primary {
    color: rgba(24, 15, 51, 0.7);
}

.f-color-dark-black-s80 {
    color: #5D5770;
}

.f-color-dark-black-s50 {
    color: #8B8799;
}

/* Page */
.c-notice-display-page {
    overflow: auto;
    color: #4C4E54;
    padding: 24px 16px;
}
.c-notice-display-page:not(.f-tile-view) {
    margin-top: 72px;
    max-height: calc(100vh - 72px);
}

/* Page header */
.f-page-header {
    padding-bottom: 24px;
}

.f-content-section .f-page-header img {
    max-width: 100px;
    margin-bottom: 24px;
}

.f-page-header .v-divider {
    display: none;
}

.f-section-dropdown {
    z-index: 300;
    padding: 24px 16px 16px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    border-bottom: 1px solid #F0F5F8;
}

/* notice page side nav */
.f-page-side-nav {
    top: 140px;
    right: 48px;
    display: none;
    overflow: auto;
    position: fixed;
    padding-left: 36px;
    width: calc(25% - 24px);
    max-height: calc(100vh - 150px);
    border-left: 4px solid #8F9094;
}

.f-page-side-nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.f-page-side-nav ul li a {
    color: currentColor;
    text-decoration: none;
}

.f-page-side-nav ul li a:hover {
    text-decoration: underline;
}

.f-page-side-nav ul li.active a {
    font-weight: 500 !important;
}

/* notice content section */
.f-content-section {
    font-size: 16px;
    line-height: 1.5em;
}

.f-org-logo {
    width: auto;
    max-height: 80px;
}

.f-content-section h1 {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 24px;
}

.f-content-section h2 {
    text-align: center;
    font-weight: 500;
    margin-bottom: 16px;
    margin-top: 0;
    font-size: 24px;
    line-height: 1.5em;
}

.f-content-section h2+h2 {
    margin-bottom: 16px;
}

.f-content-section h3 {
    margin-top: 0;
    font-weight: 500;
    margin-bottom: 8px;
    font-weight: 500 !important;
    font-size: 16px;
    line-height: 1.5em;
}

.f-content-section p {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.5em;
}

.f-content-section p+h2 {
    margin-top: 48px;
}

.f-content-section p+h3 {
    margin-top: 24px;
}

.f-content-section p.f-text-highlight,
.f-content-section p span.f-text-highlight {
    color: #0779A5;
}

.f-content-section a:not(.v-list__tile) {
    text-decoration: underline;
    color: #0779A5 !important;
}

.f-content-section a:hover {
    text-decoration: none;
}

.f-content-section a.f-btn-pri {
    padding: 16px 48px;
    display: inline-block;
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 500 !important;
    background-color: #1CA8DD;
    font-size: 12px;
    line-height: 1.5em;
}

.f-content-section strong {
    font-weight: 600 !important;
}

.f-content-section ul {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.5em;
}

.f-content-section table:not(.f-consumer-request):not(.f-notice-cookie-table) {
    border-spacing: 0;
    border-top: 1px solid #D2D3D4;
    border-left: 1px solid #D2D3D4;
}

.f-content-section table:not(.f-consumer-request):not(.f-notice-cookie-table) td,
.f-content-section table:not(.f-consumer-request):not(.f-notice-cookie-table) th {
    min-width: 1em;
    padding: 4px 8px;
    border-right: 1px solid #D2D3D4;
    border-bottom: 1px solid #D2D3D4;
}

.f-content-section table:not(.f-consumer-request):not(.f-notice-cookie-table) td p,
.f-content-section table:not(.f-consumer-request):not(.f-notice-cookie-table) th p {
    margin-bottom: 0;
}

.f-notice-cookie-table {
    width: 100%;
}

.f-notice-cookie-table th,
.f-notice-cookie-table td {
    padding: 8px;
    text-align: left;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
}

.f-notice-cookie-table th {
    color: #8F9094;
    background-color: #F4F6F8;
}

.f-content-section img {
    max-width: 100%;
}

/* purple chips */
.f-free-width-purple-chips .v-chip {
    margin: 4px;
    min-width: 36px;
    border-radius: 28px;
    align-items: center;
    display: inline-flex;
    justify-content: center;
}

.f-free-width-purple-chips .v-chip.theme--light {
    color: #4C4E54;
    background-color: #E9E9EA;
}

.f-free-width-purple-chips .v-chip.theme--light span {
    height: 32px;
    font-size: 12px;
    padding: 0 12px;
    line-height: 1.5em;
    align-items: center;
    display: inline-flex;
}

/* light pri chips */
.v-chip.f-chip-light-pri {
    color: #49B9E4;
    background-color: #D2EEF8;
}

.v-chip.f-chip-light-pri .v-chip__content .v-icon,
.v-chip.f-chip-light-pri .v-chip__content .svg-icon {
    color: #49B9E4;
}

.v-chip.f-chip-light-pri .v-chip__content .c-user-avatar .f-avatar {
    background-color: #FFFFFF;
}

.v-chip.f-chip-light-pri .v-chip__content .c-user-avatar .f-avatar .f-user-initials {
    color: #1CA8DD;
}

.v-chip.f-chip-light-pri:hover {
    color: #1CA8DD;
}

.v-chip.f-chip-light-pri:hover .v-chip__content .v-icon,
.v-chip.f-chip-light-pri:hover .v-chip__content .svg-icon {
    color: #1CA8DD;
}

/* notice cookie list style */
.f-notice-cookie-list-header {
    margin-left: -4px;
    margin-right: -4px;
}

.f-notice-cookie-list-header .f-card+.f-card {
    margin-top: 1px;
}

.f-notice-cookie-list-header .f-card.f-height-80 {
    height: 80px;
}

.f-notice-cookie-list-content {
    margin-left: -4px;
    margin-right: -4px;
}

.f-notice-cookie-list-content .f-card {
    border: 1px solid rgba(146, 153, 144, 0.3);
}

.f-notice-cookie-list-content+h2 {
    margin-top: 24px;
}

.f-card {
    box-shadow: none;
    border-radius: 0px;
}

.f-card.f-card-default {
    background-color: #F2F3F2;
}

/* consumer request table style */
.f-consumer-request {
    border-spacing: 0;
}

.f-consumer-request td,
.f-consumer-request th {
    color: #5D5770;
    text-align: left;
    font-size: 14px;
    line-height: 1.5em;
    font-weight: normal;
}

.f-consumer-request td {
    padding: 12px 0;
}

/* expansion panle override css */
.v-expansion-panel[class*=f-expansion-panel] {
    box-shadow: none;
    border-radius: 0;
}

.v-expansion-panel[class*=f-expansion-panel] .v-expansion-panel__header>div:not(.v-expansion-panel__header__icon) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: calc(100% - 24px);
    word-break: break-word;
}

.v-expansion-panel.f-expansion-panel-parted-contents .v-expansion-panel__container {
    border-top: none;
    margin-bottom: 16px;
    background-color: #F2F3F2;
}

.v-expansion-panel.f-expansion-panel-parted-contents .v-expansion-panel__container:last-child {
    margin-bottom: 0;
}

.v-expansion-panel.f-expansion-panel-parted-contents .v-expansion-panel__header {
    padding: 12px 8px;
}

.v-expansion-panel.f-epanel-content-box .v-expansion-panel__container {
    margin-bottom: 16px;
    border: 1px solid #F2F3F2;
}

.v-expansion-panel.f-epanel-content-box .v-expansion-panel__container:first-child {
    border-top: 1px solid #F2F3F2 !important;
}

.v-expansion-panel.f-epanel-content-box .v-expansion-panel__container:last-child {
    margin-bottom: 0;
}

/* left border hightlight css */
.f-left-border-highlight {
    padding-left: 12px;
    box-shadow: inset 3px 0 0 #EBBF23;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
}

.f-left-border-highlight:not([class*=justify-]) {
    justify-content: center;
}

.f-left-border-highlight[class*=f-color-] {
    box-shadow: inset 3px 0 0 currentColor;
}

/* content purpose label css */
.f-content-purpose-label {
    padding: 4px 8px;
    border-radius: 4px;
    color: #ffffff;
    background-color: #8B8799;
    font-weight: 500 !important;
    font-size: 12px;
    line-height: 1.5em;
}

.f-expansion-pannel-content-area {
    padding: 22px;
    border-bottom: 2px solid #fff;
}

.f-gray-bg-list>div {
    padding: 16px;
    background-color: #F2F3F2;
}

.f-gray-bg-list>div:not(:last-child) {
    margin-bottom: 8px;
}

/* select dropdown style */
.v-input.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) {
    white-space: nowrap;
}

.v-input.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot {
    padding: 0 8px;
    box-shadow: none;
    border: 1px solid rgba(0, 0, 0, 0.37);
}

.v-input.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot .v-text-field__slot {
    margin-right: -8px;
}

.v-input.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot:hover {
    background-color: #E4E9EA;
}

.v-input.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat).v-input--is-focused .v-input__slot {
    box-shadow: 0 0 0 1px #1CA8DD;
    border-color: #1CA8DD;
}

.v-input.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__control {
    min-height: 40px;
}

.v-input.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat):not(.v-input--is-disabled) input,
.v-input.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat):not(.v-input--is-disabled) textarea {
    color: rgba(0, 0, 0, 0.81);
}

.v-input.v-text-field.f-text-field-primary.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__control {
    min-height: 36px;
    position: relative;
}

.v-input.v-text-field.f-text-field-primary.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot {
    padding: 0;
    border: none;
    border-radius: 0;
    margin-bottom: 0;
    border-radius: var(--dropdown-border-radius) !important;
    background-color: var(--dropdown-background-color) !important;
}

.v-input.v-text-field.f-text-field-primary.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot .v-text-field__slot {
    margin-right: 0;
}

.v-input.v-text-field.f-text-field-primary.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot .v-text-field__slot .v-input__icon .v-icon {
    color: rgba(24, 15, 51, 0.7);
}

.v-input.v-text-field.f-text-field-primary.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot .v-select__slot {
    padding: 0 12px;
}

.v-input.v-text-field.f-text-field-primary.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot .v-select__slot input,
.v-input.v-text-field.f-text-field-primary.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot .v-select__slot .v-select__selection {
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: 1.5em;
    font-weight: normal !important;
    color: var(--text-color) !important;
}

.v-input.v-text-field.f-text-field-primary.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-text-field__details {
    margin: 0;
    padding: 0;
    position: absolute;
    top: auto;
    bottom: -14px;
    left: 0;
}

.v-input.v-text-field.f-text-field-primary.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat).v-input--is-focused .v-input__slot {
    box-shadow: none;
}

.v-input.v-text-field.f-text-field-primary.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot .v-label {
    left: 12px !important;
}

/* list dropdown style */
.f-list-dropdown.v-menu__content {
    border-radius: 0;
    border: 1px solid rgba(146, 153, 144, 0.12);
    box-shadow: 2px 2px 0px rgba(146, 153, 144, 0.5);
}

.f-list-dropdown .v-input input[role=checkbox] {
    pointer-events: none;
}

.f-list-dropdown .v-list {
    padding: 6px 0;
    background-color: var(--dropdown-background-color) !important;

}

.f-list-dropdown .v-list__tile {
    height: 36px;
    padding: 0 12px;
}

.f-list-dropdown .v-list__tile__title {
    height: auto;
    font-size: 12px;
    line-height: 1.5em;
    font-weight: normal !important;
    color: var(--text-color) !important;
}

.f-list-dropdown .v-list__tile__sub-title {
    font-size: 12px;
    line-height: 1.5em;
    font-weight: normal !important;
}

.f-list-dropdown .v-list__tile--active .v-list__tile__title {
    font-weight: normal !important;
    color: var(--text-color) !important;
}

.f-list-dropdown .v-list__tile--disabled .v-list__tile__title {
    opacity: 0.4;
}

.f-list-dropdown .v-list__tile img {
    vertical-align: top;
}

.f-list-dropdown .v-list.theme--light .v-list__tile--link:hover {
    background-color: #fdf5e2;
}

.f-list-dropdown .v-list.theme--light .v-list__tile__mask {
    font-weight: 500 !important;
    color: currentColor;
    background-color: transparent;
}

.f-list-dropdown.f-small .v-list__tile {
    height: 30px;
}

.f-list-dropdown.f-small .v-list__tile__title {
    font-size: 13px;
    line-height: 24px;
}

.f-list-dropdown .v-select-list .v-list__tile__action,
.f-list-dropdown .v-select-list .v-list__tile__avatar {
    min-width: 36px;
}

.f-list-dropdown .v-select-list .v-list__tile__title {
    font-size: font-size(medium-content);
    line-height: line-height(medium-content);
}

.f-list-dropdown .v-select-list .primary--text {
    color: #1CA8DD !important;
    caret-color: currentColor !important;
}

.f-notice-tile {
    height: 180px;
    border-radius: 3px;
    background-color: #F4F6F8;
    display: flex;
    align-items: center;
    justify-content: center;
}

.f-notice-tile .svg-icon {
    width: 82px;
    height: 82px;
    fill: #4C4E54;
}

.f-notice-tile img {
    max-width: 72px;
    max-height: 72px;
}

/* Input Switch */
.v-input--selection-controls {
    margin-top: 0;
    padding-top: 0;
}

.v-input--selection-controls__input {
    margin-right: 4px;
}

.v-input--selection-controls .v-input__control .v-input__slot {
    margin-bottom: 0;
}

.v-input--selection-controls .v-messages {
    min-height: 0;
}

.v-input--selection-controls.v-input--is-disabled {
    opacity: 0.75;
}

.v-input--selection-controls.v-input .v-label {
    top: 1px;
}

.v-input--selection-controls.f-no-input-label .v-input--selection-controls__input {
    margin-right: 0;
}

.v-input--selection-controls.theme--light .v-icon,
.v-input--selection-controls.theme--light .accent--text,
.v-input--selection-controls.theme--light [aria-checked=mixed]~.v-icon {
    color: #1CA8DD !important;
}

.v-input--selection-controls.theme--light .v-label {
    color: #4C4E54;
}

.v-input--selection-controls .v-icon {
    font-size: 20px;
}

.v-input--selection-controls .v-input--selection-controls__input {
    width: 20px;
    height: 20px;
}

.v-input--selection-controls .v-label {
    font-size: 14px;
    line-height: 1.5em;
}

.v-input--selection-controls.f-large .v-icon,
.v-input--selection-controls .f-large .v-icon {
    font-size: 24px;
}

.v-input--selection-controls.f-large .v-input--selection-controls__input,
.v-input--selection-controls .f-large .v-input--selection-controls__input {
    width: 24px;
    height: 24px;
}

.v-input--selection-controls.f-large .v-label,
.v-input--selection-controls .f-large .v-label {
    font-size: 16px;
    line-height: 1.5em;
}

.v-input--selection-controls.v-input--switch {
    position: relative;
}

.v-input--selection-controls.v-input--switch .v-messages {
    white-space: nowrap;
    position: absolute;
    top: auto;
    bottom: -22px;
    left: 0;
    font-size: 12px;
    line-height: 1.5em;
}

.v-input--selection-controls.v-input--switch .v-messages.error--text {
    color: #c6532a !important;
}

.v-input--selection-controls.v-input--switch .v-input--selection-controls__input {
    width: 32px;
    height: calc(32px / 2);
}

.v-input--selection-controls.v-input--switch .v-input--switch__track {
    left: 0;
    right: 0;
    opacity: 1;
    border-radius: 15px;
    height: calc(32px / 2);
    top: calc(50% - calc(32px / 2) / 2);
}

.v-input--selection-controls.v-input--switch .v-input--switch__thumb {
    left: 3px;
    box-shadow: none;
    width: calc(calc(32px / 2) - 6px);
    height: calc(calc(32px / 2) - 6px);
    top: calc(50% - calc(calc(32px / 2) - 6px) / 2.2);
}

.v-input--selection-controls.v-input--switch.v-input--is-dirty .v-input--switch__track {
    opacity: 1;
}

.v-input--selection-controls.v-input--switch.v-input--is-dirty .v-input--switch__thumb {
    -webkit-transform: translate(calc(32px / 2));
    -moz-transform: translate(calc(32px / 2));
    -ms-transform: translate(calc(32px / 2));
    -o-transform: translate(calc(32px / 2));
    transform: translate(calc(32px / 2));
}

.v-input--selection-controls.v-input--switch.theme--light .v-input--switch__track {
    background-color: #F4F6F8;
}

.v-input--selection-controls.v-input--switch.theme--light .v-input--switch__thumb {
    background-color: #1CA8DD;
}

.v-input--selection-controls.v-input--switch.theme--light.v-input--is-dirty .v-input--switch__track {
    background-color: #1CA8DD;
}

.v-input--selection-controls.v-input--switch.theme--light.v-input--is-dirty .v-input--switch__thumb {
    background-color: #F4F6F8;
}

.v-input--selection-controls.v-input--switch.f-multi-switch.theme--light .v-input--switch__track {
    background-color: #1CA8DD;
}

.v-input--selection-controls.v-input--switch.f-multi-switch.theme--light .v-input--switch__thumb {
    background-color: #F4F6F8;
}

.v-input--selection-controls.v-input--switch.f-multi-switch.theme--dark .v-input--switch__track {
    background-color: #1CA8DD;
}

.v-input--selection-controls.v-input--switch.f-multi-switch.theme--dark .v-input--switch__thumb {
    background-color: #F4F6F8;
}

.v-input--selection-controls.v-input--switch.f-multi-switch.f-switch-des.theme--light .v-input--switch__track,
.v-input--selection-controls.v-input--switch.f-multi-switch.f-switch-des.theme--dark .v-input--switch__track {
    background-color: #D96758;
}

.v-input--selection-controls.v-input--switch.f-multi-switch.f-switch-des.theme--light .v-input--switch__thumb,
.v-input--selection-controls.v-input--switch.f-multi-switch.f-switch-des.theme--dark .v-input--switch__thumb {
    background-color: #F4F6F8;
}

.v-input--selection-controls.v-input--switch.f-large .v-input--selection-controls__input {
    width: 48px;
    height: calc(48px / 2);
}

.v-input--selection-controls.v-input--switch.f-large .v-input--switch__track {
    height: calc(48px / 2);
    top: calc(50% - calc(48px / 2) / 2);
}

.v-input--selection-controls.v-input--switch.f-large .v-input--switch__thumb {
    width: calc(calc(48px / 2) - 6px);
    height: calc(calc(48px / 2) - 6px);
    top: calc(50% - calc(calc(48px / 2) - 6px) / 2);
}

.v-input--selection-controls.v-input--switch.f-large.v-input--is-dirty .v-input--switch__thumb {
    -webkit-transform: translate(calc(48px / 2));
    -moz-transform: translate(calc(48px / 2));
    -ms-transform: translate(calc(48px / 2));
    -o-transform: translate(calc(48px / 2));
    transform: translate(calc(48px / 2));
}

/* Input Switch */

/* v-btn style */
.v-btn {
    height: 32px;
    min-width: 84px;
    padding: 0 24px;
}

.v-btn[class*=f-btn-] {
    max-width: 100%;
    border-radius: 2px;
    text-transform: none;
    font-weight: 500 !important;
    font-size: 12px;
    line-height: 1.5em;
}

.v-btn[class*=f-btn-] .v-btn__content {
    max-width: 100%;
}

.v-btn[class*=f-btn-]:not(.v-btn--outline):not(.v-btn--flat) {
    box-shadow: none;
}

.v-btn[class*=f-btn-]:before {
    opacity: 0;
}

.v-btn[class*=f-btn-] a {
    color: currentColor;
    text-decoration: none;
}

.v-btn[class*=f-btn-].v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline),
.v-btn[class*=f-btn-].v-btn--disabled .v-btn__loading:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline),
.v-btn[class*=f-btn-].v-btn--disabled .v-icon:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) {
    opacity: 0.3;
    pointer-events: none;
}

.v-btn[class*=f-btn-].v-btn--loader:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) .v-btn__loading .v-progress-circular {
    color: #4C4E54;
}

.v-btn[class*=f-btn-].f-btn-loading {
    pointer-events: none;
}

.v-btn[class*=f-btn-].v-btn--large {
    font-size: 14px;
    line-height: 1.5em;
}

.v-btn.f-btn-pri.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline),
.v-btn.f-btn-pri.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) {
    color: #FFFFFF;
    background-color: #1CA8DD;
}

.v-btn.f-btn-pri.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) .v-icon,
.v-btn.f-btn-pri.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) .svg-icon,
.v-btn.f-btn-pri.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) .v-icon,
.v-btn.f-btn-pri.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) .svg-icon {
    fill: currentColor;
    color: #FFFFFF;
}

.v-btn.f-btn-pri.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline):hover,
.v-btn.f-btn-pri.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline):hover {
    background-color: #49B9E4;
}

.v-btn.f-btn-pri.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline):active,
.v-btn.f-btn-pri.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline):active {
    background-color: #33B1E0;
}

.v-btn.f-btn-pri.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled,
.v-btn.f-btn-pri.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .v-btn__loading,
.v-btn.f-btn-pri.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .v-icon,
.v-btn.f-btn-pri.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled,
.v-btn.f-btn-pri.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .v-btn__loading,
.v-btn.f-btn-pri.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .v-icon {
    color: #FFFFFF !important;
    background-color: #1CA8DD !important;
}

.v-btn.f-btn-pri.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .f-premium-label,
.v-btn.f-btn-pri.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .v-btn__loading .f-premium-label,
.v-btn.f-btn-pri.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .v-icon .f-premium-label,
.v-btn.f-btn-pri.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .f-premium-label,
.v-btn.f-btn-pri.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .v-btn__loading .f-premium-label,
.v-btn.f-btn-pri.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .v-icon .f-premium-label {
    opacity: 0.8;
}

.v-btn.f-btn-pri.theme--light.v-btn--loader:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) .v-btn__loading .v-progress-circular,
.v-btn.f-btn-pri.theme--dark.v-btn--loader:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) .v-btn__loading .v-progress-circular {
    color: #FFFFFF;
}

.v-btn.v-btn--large {
    height: 48px;
    min-width: 100px;
    padding: 0 32px;
}

.v-btn.f-btn-pri-outline.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline),
.v-btn.f-btn-pri-outline.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) {
    color: #5F767C;
    background-color: transparent;
    box-shadow: inset 0 0 0 1px #5F767C;
}

.v-btn.f-btn-pri-outline.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline):hover,
.v-btn.f-btn-pri-outline.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline):hover {
    background-color: #F4F6F8;
}

.v-btn.f-btn-pri-outline.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline):active,
.v-btn.f-btn-pri-outline.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline):active {
    background-color: #EDF0F0;
}

.v-btn.f-btn-pri-outline.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled,
.v-btn.f-btn-pri-outline.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled {
    box-shadow: inset 0 0 0 1px #5F767C !important;
}

.v-btn.f-btn-pri-outline.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled,
.v-btn.f-btn-pri-outline.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .v-btn__loading,
.v-btn.f-btn-pri-outline.theme--light:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .v-icon,
.v-btn.f-btn-pri-outline.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled,
.v-btn.f-btn-pri-outline.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .v-btn__loading,
.v-btn.f-btn-pri-outline.theme--dark:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline).v-btn--disabled .v-icon {
    color: #5F767C !important;
    background-color: transparent !important;
}

.v-btn.f-btn-pri-outline.theme--light.v-btn--loader:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) .v-btn__loading .v-progress-circular,
.v-btn.f-btn-pri-outline.theme--dark.v-btn--loader:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) .v-btn__loading .v-progress-circular {
    color: #5F767C;
}

/* v-btn style */

/* screen-lg */
@media (min-width: 992px) {
    .c-notice-display-page {
        padding: 24px 48px;
    }

    .c-notice-display-page:not(.f-tile-view) {
        margin-top: 0;
        max-height: 100%;
    }

    .f-section-dropdown {
        display: none;
    }

    .f-page-side-nav {
        display: block;
    }

    .f-page-header {
        padding-bottom: 48px;
    }

    .f-page-header img {
        max-width: 148px;
        margin-bottom: 0;
    }

    .f-page-header .v-divider {
        order: 2;
        display: block;
    }

    .f-page-header .spacer {
        order: 4;
    }

    .f-content-section {
        padding-right: 48px;
    }

    .f-content-section h2 {
        text-align: left;
    }
}

/* screen-xl */
@media (min-width: 1200px) {
    .f-content-section {
        padding-right: 144px;
    }
}

@media print {
    .f-section-dropdown,
    .f-language-list {
        display: none;
    }
}

/* RTL Page Styling */
.c-notice-display-page.f-lang-ar {
    direction: rtl;
    text-align: right;
}

.f-lang-ar .f-page-side-nav {
    left: 48px;
    right: auto;
    border-left: none;
    padding-left: 4px;
    padding-right: 36px;
    border-right: 4px solid #8F9094;
}

.f-lang-ar .f-content-section .f-notice-cookie-table th,
.f-lang-ar .f-content-section .f-notice-cookie-table td {
    text-align: right;
}

@media (min-width: 992px) {
    .f-lang-ar .f-content-section {
        padding-right: 0;
        padding-left: 48px;
    }

    .f-lang-ar .f-content-section h2 {
        text-align: right;
    }
}

@media (min-width: 1200px) {
    .f-lang-ar .f-content-section {
        padding-right: 0;
        padding-left: 144px;
    }
}
