/* (C) 2010 CyberAgent, Inc. v6.3.50 */
!function(){"use strict"}();/
/*
 * Skin
 * The custom styles go here.
 */
/* Contents Width */
.rc-h-standard .rc-h-inner {
  width: 950px;
}

/* Minimum Contents Width */
.rc-h-standard, .rc-h-standard.rc-h-liquid .rc-h-noscript-bar,
.rc-h-standard.rc-h-liquid .rc-h-utility-bar,
.rc-h-standard.rc-h-liquid .rc-h-service-bar,
.rc-h-standard.rc-h-liquid .rc-h-search-bar,
.rc-h-standard.rc-h-liquid .rc-h-section-bar,
.rc-h-standard.rc-h-liquid .rc-h-subsection-bar {
  min-width: 950px;
}

/* Base Text Style */
.rc-h-standard {
  font-size: 12px;
  line-height: 1.6;
}

/* Base Font Color */
.rc-h-standard, .rc-h-standard a:link, .rc-h-standard a:visited, .rc-h-standard a:hover, .rc-h-standard a:active {
  color: #515151;
}

/* Skin Font Color */
.rc-h-standard .rc-h-action-nav .rc-h-action-btn:hover, .rc-h-standard .rc-h-section-nav a.rc-h-active, .rc-h-standard .rc-h-subsection-nav a.rc-h-active {
  color: #bf0000;
}

/* Skin Border Color */
.rc-h-standard .rc-h-action-nav .rc-h-action-btn.rc-h-strong-action {
  border-color: #bf0000;
}

/* Skin Border Bottom Color */
.rc-h-standard .rc-h-service-bar {
  border-bottom-color: #bf0000;
}

/* Skin Background Color */
.rc-h-standard .rc-h-action-nav .rc-h-action-btn.rc-h-strong-action, .rc-h-standard .rc-h-action-nav .rc-h-btn-group .rc-h-action-btn, .rc-h-standard .rc-h-search-bar {
  background-color: #bf0000;
}

/* Skin Highlight Background Color */
.rc-h-standard .rc-h-genre-dropdown:hover > a, .rc-h-standard .rc-h-genre-dropdown.rc-h-hover > a {
  background-color: #df0000;
}

/* Action Button Color */
.rc-h-standard .rc-h-action-nav .rc-h-action-btn.rc-h-books-action {
  background-color: #bf0000;
}
.rc-h-standard .rc-h-action-nav .rc-h-action-btn.rc-h-kobo-action {
  background-color: #63c8d5;
}

/*
 * End Skin
 */
/*
Icon classes can be used entirely standalone. They are named after their original file names.

```html
<i class="icon-home"></i>
```
*/
.rc-h-icon-browse {
  background-image: url(/img/common/navi/service/rc-h-sprites.png);
  background-position: 0px -22px;
  width: 18px;
  height: 18px;
}

.rc-h-icon-cart-white {
  background-image: url(/img/common/navi/service/rc-h-sprites.png);
  background-position: 0px 0px;
  width: 20px;
  height: 20px;
}

.rc-h-icon-cart {
  background-image: url(/img/common/navi/service/rc-h-sprites.png);
  background-position: -22px 0px;
  width: 20px;
  height: 20px;
}

.rc-h-icon-favorite {
  background-image: url(/img/common/navi/service/rc-h-sprites.png);
  background-position: -20px -22px;
  width: 18px;
  height: 18px;
}

.rc-h-icon-purchase {
  background-image: url(/img/common/navi/service/rc-h-sprites.png);
  background-position: -44px 0px;
  width: 18px;
  height: 18px;
}

/* Dropdown Module */
.rc-h-standard .rc-h-dropdown {
  position: relative;
}
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  position: absolute;
  margin: 0;
  padding: 1px;
  background: #ffffff;
  border: 1px solid #cccccc;
  z-index: 1;
  white-space: nowrap;
  -webkit-box-shadow: 1px 1px 2px 0 #cecece;
          box-shadow: 1px 1px 2px 0 #cecece;
  display: none;
  top: 100%;
  left: 0;
}
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li {
  position: relative;
  float: none;
  margin: 0;
  padding: 0;
}
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li > a,
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li > span {
  display: block;
  position: relative;
  padding: 4px 14px 4px 10px;
  cursor: pointer;
}
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li:hover > a, .rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li:hover > span, .rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-hover > a, .rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-hover > span, .rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-active > a, .rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-active > span,
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li a.rc-h-active,
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li span.rc-h-active {
  background: #f6f6f6;
  color: #000000;
  text-decoration: none;
}
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-dropdown-child > a,
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-dropdown-child > span {
  padding-right: 28px;
}
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-dropdown-child > a:after,
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-dropdown-child > span:after {
  position: absolute;
  top: 50%;
  right: 8px;
  display: inline-block;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 4px;
  border-right-width: 0;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-color: transparent transparent transparent #686868;
  margin-top: -4px;
  vertical-align: middle;
}
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-dropdown-child > .rc-h-dropdown-panel {
  display: none;
  top: 0;
  left: 100%;
  margin-left: -5px;
}
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-dropdown-child:hover > a:after,
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-dropdown-child:hover > span:after, .rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-dropdown-child.rc-h-hover > a:after,
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-dropdown-child.rc-h-hover > span:after {
  border-left-color: #f2ab00;
}
.rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-dropdown-child:hover > .rc-h-dropdown-panel, .rc-h-standard .rc-h-dropdown .rc-h-dropdown-panel > li.rc-h-dropdown-child.rc-h-hover > .rc-h-dropdown-panel {
  display: block;
}
.rc-h-standard .rc-h-dropdown:hover .rc-h-dropdown-panel, .rc-h-standard .rc-h-dropdown.rc-h-hover .rc-h-dropdown-panel {
  display: block;
}

/* Combobox Module */
.rc-h-standard .rc-h-combobox-module {
  position: relative;
}
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-label {
  position: relative;
  padding: 0 22px 0 8px;
  background: #ffffff;
  line-height: 26px;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-label:after {
  position: absolute;
  top: 50%;
  right: 8px;
  display: inline-block;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 4px;
  border-right-width: 4px;
  border-bottom-width: 0;
  border-left-width: 4px;
  border-color: #686868 transparent transparent transparent;
  margin-top: -2px;
  vertical-align: middle;
}
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  position: absolute;
  margin: 0;
  padding: 1px;
  background: #ffffff;
  border: 1px solid #cccccc;
  z-index: 1;
  white-space: nowrap;
  -webkit-box-shadow: 1px 1px 2px 0 #cecece;
          box-shadow: 1px 1px 2px 0 #cecece;
  overflow-y: scroll;
  overflow-x: hidden;
  display: none;
  min-width: 100%;
  max-height: 280px;
  top: 100%;
  left: 0;
}
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li {
  position: relative;
  float: none;
  margin: 0;
  padding: 0;
}
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li > a,
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li > span {
  display: block;
  position: relative;
  padding: 4px 14px 4px 10px;
  cursor: pointer;
}
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li:hover > a, .rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li:hover > span, .rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-hover > a, .rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-hover > span, .rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-active > a, .rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-active > span,
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li a.rc-h-active,
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li span.rc-h-active {
  background: #f6f6f6;
  color: #000000;
  text-decoration: none;
}
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-dropdown-child > a,
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-dropdown-child > span {
  padding-right: 28px;
}
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-dropdown-child > a:after,
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-dropdown-child > span:after {
  position: absolute;
  top: 50%;
  right: 8px;
  display: inline-block;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 4px;
  border-right-width: 0;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-color: transparent transparent transparent #686868;
  margin-top: -4px;
  vertical-align: middle;
}
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-dropdown-child > .rc-h-dropdown-panel {
  display: none;
  top: 0;
  left: 100%;
  margin-left: -5px;
}
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-dropdown-child:hover > a:after,
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-dropdown-child:hover > span:after, .rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-dropdown-child.rc-h-hover > a:after,
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-dropdown-child.rc-h-hover > span:after {
  border-left-color: #f2ab00;
}
.rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-dropdown-child:hover > .rc-h-dropdown-panel, .rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel > li.rc-h-dropdown-child.rc-h-hover > .rc-h-dropdown-panel {
  display: block;
}
* + html .rc-h-standard .rc-h-combobox-module .rc-h-combobox-panel {
  margin-top: -4px;
}
.rc-h-standard .rc-h-combobox-module:hover .rc-h-combobox-label:after {
  border-top-color: #f2ab00;
}
.rc-h-standard .rc-h-combobox-module.rc-h-active .rc-h-combobox-panel {
  display: block;
}

/* Main */
.rc-h-standard {
  font-family: "Hiragino Kaku Gothic ProN", Meiryo, MS-PGothic, sans-serif;
}
.rc-h-standard input,
.rc-h-standard button,
.rc-h-standard select {
  font-family: inherit;
}
.rc-h-standard a {
  text-decoration: none;
}
.rc-h-standard a img {
  border: none;
}
.rc-h-standard a:hover {
  text-decoration: underline;
}
.rc-h-standard li {
  list-style: none;
}
.rc-h-standard .rc-h-inner {
  margin: 0 auto;
}
.rc-h-standard.rc-h-liquid .rc-h-noscript-bar,
.rc-h-standard.rc-h-liquid .rc-h-utility-bar,
.rc-h-standard.rc-h-liquid .rc-h-service-bar,
.rc-h-standard.rc-h-liquid .rc-h-search-bar,
.rc-h-standard.rc-h-liquid .rc-h-section-bar,
.rc-h-standard.rc-h-liquid .rc-h-subsection-bar {
  padding-left: 10px;
  padding-right: 10px;
}
.rc-h-standard.rc-h-liquid .rc-h-inner {
  width: auto;
}
.rc-h-standard .rc-h-noscript-bar {
  padding: 3px 0 2px;
  border-top: 2px solid #d8b6b6;
  border-bottom: 2px solid #d8b6b6;
  background: #faeaea;
  color: #b03434;
}
.rc-h-standard .rc-h-noscript-bar p {
  margin: 0;
  padding: 0;
  text-align: center;
}
.rc-h-standard .rc-h-noscript-bar a:link, .rc-h-standard .rc-h-noscript-bar a:visited, .rc-h-standard .rc-h-noscript-bar a:hover, .rc-h-standard .rc-h-noscript-bar a:active {
  color: #bf0000;
}
.rc-h-standard .rc-h-utility-bar {
  position: relative;
  z-index: 2;
  background: #f9f9f9;
}
.rc-h-standard .rc-h-group-nav {
  float: right;
  margin: 0;
  padding: 0;
}
.rc-h-standard .rc-h-group-nav li {
  position: relative;
  float: left;
}
.rc-h-standard .rc-h-group-nav li a {
  display: block;
  padding: 3px 10px;
}
.rc-h-standard .rc-h-group-nav li a:hover {
  text-decoration: none;
}
.rc-h-standard .rc-h-group-nav li:hover, .rc-h-standard .rc-h-group-nav li.rc-h-hover {
  background: #f0f0f0;
}
.rc-h-standard .rc-h-group-dropdown > a:after {
  display: inline-block;
  content: "";
  margin-left: 5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 4px;
  border-right-width: 4px;
  border-bottom-width: 0;
  border-left-width: 4px;
  border-color: #686868 transparent transparent transparent;
  margin-top: -2px;
  vertical-align: middle;
}
.rc-h-standard .rc-h-group-dropdown .rc-h-dropdown-panel {
  left: auto;
  right: 0;
}
.rc-h-standard .rc-h-group-dropdown:hover > a:after, .rc-h-standard .rc-h-group-dropdown.rc-h-hover > a:after {
  border-top-color: #333333;
}
.rc-h-standard .rc-h-service-bar {
  padding-bottom: 12px;
  background: #ffffff;
  border-bottom-width: 2px;
  border-bottom-style: solid;
}
.rc-h-standard .rc-h-service-bar img {
  vertical-align: top;
}
.rc-h-standard .rc-h-site-id {
  float: left;
  margin-top: 25px;
}
.rc-h-standard .rc-h-logo,
.rc-h-standard .rc-h-title,
.rc-h-standard .rc-h-icon {
  display: inline-block;
  vertical-align: middle;
}
* + html .rc-h-standard .rc-h-logo, * + html
.rc-h-standard .rc-h-title, * + html
.rc-h-standard .rc-h-icon {
  display: inline;
  zoom: 1;
}
.rc-h-standard .rc-h-logo {
  margin-right: 11px;
}
.rc-h-standard .rc-h-site-menu {
  float: right;
  margin-top: 8px;
}
.rc-h-standard .rc-h-menu-btns {
  float: left;
}
.rc-h-standard .rc-h-help-nav {
  margin: 0;
  padding: 0;
  text-align: right;
}
.rc-h-standard .rc-h-help-nav a:link, .rc-h-standard .rc-h-help-nav a:visited, .rc-h-standard .rc-h-help-nav a:hover, .rc-h-standard .rc-h-help-nav a:active {
  color: #0033cc;
}
.rc-h-standard .rc-h-help-nav li {
  display: inline;
  margin-left: 15px;
}
.rc-h-standard .rc-h-action-nav {
  margin: 4px 0 0 0;
  padding: 0;
  text-align: right;
}
.rc-h-standard .rc-h-action-nav li {
  display: inline-block;
  line-height: 20px;
}
* + html .rc-h-standard .rc-h-action-nav li {
  display: inline;
  zoom: 1;
}
* + html .rc-h-standard .rc-h-action-nav li {
  margin-left: 4px;
}
.rc-h-standard .rc-h-action-nav .rc-h-btn-icon {
  display: inline-block;
  margin-right: 4px;
  vertical-align: middle;
}
* + html .rc-h-standard .rc-h-action-nav .rc-h-btn-icon {
  display: inline;
  zoom: 1;
}
.rc-h-standard .rc-h-action-nav .rc-h-btn-label {
  display: inline-block;
  vertical-align: middle;
}
* + html .rc-h-standard .rc-h-action-nav .rc-h-btn-label {
  display: inline;
  zoom: 1;
}
.rc-h-standard .rc-h-action-nav .rc-h-action-btn {
  display: inline-block;
  padding: 3px 7px;
  border-width: 1px;
  border-style: solid;
  border-color: #cccccc;
  cursor: pointer;
}
* + html .rc-h-standard .rc-h-action-nav .rc-h-action-btn {
  display: inline;
  zoom: 1;
}
.rc-h-standard .rc-h-action-nav .rc-h-action-btn:hover .rc-h-btn-label {
  text-decoration: underline;
}
.rc-h-standard .rc-h-action-nav .rc-h-action-btn.rc-h-strong-action {
  font-weight: bold;
  color: #ffffff;
}
.rc-h-standard .rc-h-action-nav .rc-h-action-btn.rc-h-strong-action:hover {
  color: #ffffff;
}
.rc-h-standard .rc-h-action-nav .rc-h-btn-group {
  display: inline-block;
  margin: 0;
  padding: 3px 3px 3px 7px;
  border: 1px solid #cccccc;
}
* + html .rc-h-standard .rc-h-action-nav .rc-h-btn-group {
  display: inline;
  zoom: 1;
}
.rc-h-standard .rc-h-action-nav .rc-h-btn-group .rc-h-action-btn {
  padding: 0 4px;
  border: none;
}
.rc-h-standard .rc-h-action-nav .rc-h-btn-group .rc-h-action-btn:link, .rc-h-standard .rc-h-action-nav .rc-h-btn-group .rc-h-action-btn:visited, .rc-h-standard .rc-h-action-nav .rc-h-btn-group .rc-h-action-btn:hover, .rc-h-standard .rc-h-action-nav .rc-h-btn-group .rc-h-action-btn:active {
  color: white;
}
.rc-h-standard .rc-h-promotion {
  float: left;
  margin-top: 4px;
  padding-left: 10px;
  vertical-align: bottom;
}
.rc-h-standard .rc-h-search-bar {
  position: relative;
  z-index: 1;
  min-height: 44px;
}
.rc-h-standard .rc-h-search-bar input[type="text"] {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  width: 100%;
  height: 26px;
  line-height: 26px;
  margin: 0;
  padding: 0 8px;
  border: 0;
  background: #ffffff;
  vertical-align: top;
}
* + html .rc-h-standard .rc-h-search-bar input[type="text"] {
  margin-top: -1px;
  margin-bottom: -1px;
  padding: 0;
}
.rc-h-standard .rc-h-search-bar select {
  border: 0;
  background: #ffffff;
  width: 100%;
  height: 26px;
  cursor: pointer;
}
.rc-h-standard .rc-h-search-bar button {
  height: 26px;
  padding: 0;
  border: 0;
  background: #f6f6f6;
  vertical-align: top;
  cursor: pointer;
}
.rc-h-standard .rc-h-search-bar button:hover {
  background: #ffffff;
}
.rc-h-standard .rc-h-service-bar + .rc-h-search-bar {
  margin-top: -2px;
}
.rc-h-standard .rc-h-subsection-bar + .rc-h-search-bar {
  margin-top: -1px;
}
.rc-h-standard .rc-h-genre-dropdown {
  float: left;
  margin-right: 15px;
  z-index: 2;
}
.rc-h-standard .rc-h-genre-dropdown > a {
  display: block;
  padding: 0 13px;
  line-height: 44px;
  font-weight: bold;
}
.rc-h-standard .rc-h-genre-dropdown > a:link, .rc-h-standard .rc-h-genre-dropdown > a:visited, .rc-h-standard .rc-h-genre-dropdown > a:hover, .rc-h-standard .rc-h-genre-dropdown > a:active {
  color: white;
}
.rc-h-standard .rc-h-genre-dropdown > a:after {
  display: inline-block;
  content: "";
  margin-left: 5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 4px;
  border-right-width: 4px;
  border-bottom-width: 0;
  border-left-width: 4px;
  border-color: white transparent transparent transparent;
  margin-top: -2px;
  vertical-align: middle;
}
.rc-h-standard .rc-h-genre-dropdown:hover > a, .rc-h-standard .rc-h-genre-dropdown.rc-h-hover > a {
  text-decoration: none;
}
.rc-h-standard .rc-h-search-form {
  position: relative;
  padding-top: 9px;
}
.rc-h-standard .rc-h-search-form .rc-h-search-type {
  position: relative;
  float: left;
  min-width: 200px;
  height: 26px;
  margin-right: 5px;
  background: #ffffff;
}
.rc-h-standard .rc-h-search-form .rc-h-search-type select.rc-h-type-select {
  position: absolute;
  top: 0;
  left: 0;
}
.rc-h-standard .rc-h-search-form .rc-h-search-query {
  overflow: hidden;
  margin-right: 75px;
}
.rc-h-standard .rc-h-search-form .rc-h-search-btn {
  position: absolute;
  top: 9px;
  right: 0;
}
.rc-h-standard .rc-h-search-form .rc-h-search-btn button {
  width: 70px;
}
.rc-h-standard .rc-h-section-bar {
  border-bottom: 1px solid #cccccc;
  background: #f0f0f0;
}
.rc-h-standard .rc-h-section-nav {
  position: relative;
  top: 1px;
  margin: 0 0 0 -4px;
  padding: 3px 0 0 0;
}
.rc-h-standard .rc-h-section-nav li {
  float: left;
  margin-left: 4px;
}
.rc-h-standard .rc-h-section-nav a {
  display: block;
  padding: 5px 8px;
  border: 1px solid transparent;
  font-weight: bold;
}
.rc-h-standard .rc-h-section-nav a.rc-h-active {
  background: #ffffff;
  border-color: #cccccc;
  border-bottom-color: #ffffff;
}
.rc-h-standard .rc-h-subsection-bar {
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
}
.rc-h-standard .rc-h-subsection-nav {
  margin: 0;
  padding: 0;
}
.rc-h-standard .rc-h-subsection-nav li {
  float: left;
}
.rc-h-standard .rc-h-subsection-nav a {
  display: block;
  padding: 8px 10px 6px;
}

.rc-h-clearfix:before, .rc-h-standard .rc-h-utility-bar:before, .rc-h-standard .rc-h-service-bar:before, .rc-h-standard .rc-h-search-bar:before, .rc-h-standard .rc-h-section-nav:before, .rc-h-standard .rc-h-subsection-nav:before, .rc-h-clearfix:after, .rc-h-standard .rc-h-utility-bar:after, .rc-h-standard .rc-h-service-bar:after, .rc-h-standard .rc-h-search-bar:after, .rc-h-standard .rc-h-section-nav:after, .rc-h-standard .rc-h-subsection-nav:after {
  content: " ";
  display: table;
}
.rc-h-clearfix:after, .rc-h-standard .rc-h-utility-bar:after, .rc-h-standard .rc-h-service-bar:after, .rc-h-standard .rc-h-search-bar:after, .rc-h-standard .rc-h-section-nav:after, .rc-h-standard .rc-h-subsection-nav:after {
  clear: both;
}
