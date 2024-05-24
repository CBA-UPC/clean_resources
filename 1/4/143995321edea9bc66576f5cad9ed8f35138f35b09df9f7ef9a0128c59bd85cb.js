/* @group Global */

body {
    font: 13px/18px "Lucida Grande", Lucida, Verdana, sans-serif;
    background-color: white;
    color: black;
    margin: 0;
    padding: 0;
}

li, ul, p {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-weight: normal;
    font-style: normal;
    text-decoration: none;
}

:active, :focus {
    outline: none;
}

a img, iframe {
    border: none;
}

div#header,div#footer,div#summary,div#uptime,div.box {
    position: relative;
}

h1,h2,h3,h4,h5,h6 {
    margin: 0;
    font-style: normal;
}

div#wrapper {
    width: 960px;
    height: 400px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 40px;
    padding-left: 40px;
}

div#spacer {
    float: left;
    width: 960px;
    height: 40px;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
}

.clear{
    clear: both;
}

.js-warning-top div {
    position: fixed;
    width: 100%;
    text-align: center;
    padding: 7px 0;
    background-color: #ae0000;
    color: #fff;
    z-index: 100;
}

/* @group Slice */

div.leftSlice {
    position: absolute;
    left: 0;
}

div.rightSlice {
    position: absolute;
    right: 0;
}

div.leftTopSlice {
    position: absolute;
    left: 0;
    top: 0;
}

div.leftBottomSlice {
    position: absolute;
    left: 0;
    bottom: 0;
}

div.rightTopSlice {
    position: absolute;
    right: 0;
    top: 0;
}

div.rightBottomSlice {
    position: absolute;
    bottom: 0;
    right: 0;
}

/* @end */

/* @group Rounded */

div.leftTopRounded {
    width: 8px;
    height: 8px;
    background: url(/images/ui-combined.png) -16px 0;
    position: absolute;
    left: 0;
    top: 0;
}

div.leftBottomRounded {
    width: 8px;
    height: 8px;
    background: url(/images/ui-combined.png) -16px -8px;
    left: 0;
    bottom: 0;
    position: absolute;
}

div.rightTopRounded {
    width: 8px;
    height: 8px;
    background: url(/images/ui-combined.png) -24px 0;
    position: absolute;
    right: 0;
    top: 0;
}

div.rightBottomRounded {
    width: 8px;
    height: 8px;
    background: url(/images/ui-combined.png) -24px -8px;
    bottom: 0;
    right: 0;
    position: absolute;
}

/* @end */

/* @end */

/* @group Header */

div#header {
    width: 960px;
    height: 100px;
    margin-top: 40px;
    float: left;
    background-image: url(/images/ui-horizontal.png);
}

div#header a {
    display: block;
    float: left;
    margin: 20px 0 0 20px;
    overflow: hidden;
    width: 500px;
    height: 60px;
}

/* @group Date */

div#date {
    float: right;
    margin-right: 20px;
    width: 300px;
    margin-top: 30px;
    text-align: right;
    white-space: nowrap;
}

div#date h3 {
    font-size: 16px;
    float: right;
}

div#date .timezone {
    font-weight: normal;
}

div#date p {
    font-size: 12px;
    float: right;
    margin-top: 4px;
}

/* @end */

/* @end */

/* @group Title */

h1.largeTitle {
    font-size: 24px;
    float: left;
    margin-top: 20px;
    color: #464646;
    margin-bottom: 0;
    height: 36px;
    line-height: 36px;
}

h2.mediumTitle {
    font-size: 18px;
    float: left;
    margin-top: 30px;
    color: #464646;
    margin-bottom: 0;
    height: 36px;
    line-height: 36px;
    clear: both;
}

h3.smallTitle {
    font-size: 14px;
    float: left;
    margin-top: 20px;
    color: #464646;
    margin-bottom: 0;
    height: 36px;
    line-height: 36px;
    margin-left: 10px;
}

/* @end */

/* @group Summary */

div#summary {
    width: 960px;
    height: 80px;
    margin-top: 20px;
    float: left;
    background: #ededed url(/images/ui-horizontal.png) 0 -100px;
    text-shadow: white 0 1px 0;
}

div#summary h3 {
    float: left;
    width: 210px;
    margin-top: 18px;
    margin-right: 10px;
    font-size: 13px;
    margin-left: 20px;
}

div#summary p {
    float: left;
    width: 210px;
    margin-left: 20px;
    margin-top: 4px;
    margin-right: 10px;
    font-size: 13px;
    height: 24px;
    line-height: 24px;
}

div#summary p.large {
    font-size: 20px;
    margin-top: 2px;
}

div#summary p.top {
    margin-top: 14px;
}

/* @group Last Checked */

div#lastChecked {
    float: left;
    width: 240px;
    height: 80px;
}

div#lastChecked h3 {
    width: 160px;
    margin-left: 8px;
}

div#lastChecked p {
    width: 160px;
    margin-left: 8px;
    font-size: 12px;
}

/* @group Status Icon */

div#lastChecked div#statusIcon {
    width: 32px;
    height: 32px;
    background: url(/images/ui-combined.png) no-repeat;
    margin-left: 20px;
    float: left;
    margin-top: 24px;
}

div#lastChecked div#statusIcon.up {
    background-position: -228px -248px;
}

div#lastChecked div#statusIcon.down {
    background-position: -228px -304px;
}

div#lastChecked div#statusIcon.paused {
    background-position: -228px -192px;
}

div#lastChecked div#statusIcon.unknown {
    background-position:  0px -88px;
}

/* @end */

/* @end */

/* @group Status */

div#summary p span {
    filter:progid:DXImageTransform.Microsoft.AlphaImageLoader;
    float: left;
    margin-right: 12px;
    padding-left: 28px;
    background: url(/images/ui-combined.png) no-repeat;
}

div#summary p span.up {
    background-position: -236px -280px;
    background-repeat: no-repeat;
}

div#summary p span.down {
    background-position: -236px -336px;
}

/* @end */

/* @group Columns */

div#summary div#columnOne {
    width: 240px;
    height: 80px;
    float: left;
    background: url(/images/ui-horizontal.png) no-repeat right -180px;
}

div#summary div#columnTwo {
    width: 240px;
    height: 80px;
    float: left;
    background: url(/images/ui-horizontal.png) no-repeat right -180px;
}

div#summary div#columnThree {
    width: 240px;
    height: 80px;
    float: left;
    background: url(/images/ui-horizontal.png) no-repeat right -180px;
}

div#summary div#columnFour {
    width: 240px;
    height: 80px;
    float: left;
}

/* @end */

/* @end */

/* @group Icon Legend */

ul#iconLegend {
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    margin-top: 20px;
    font-size: 11px;
    color: #4b4b4b;
    border: 1px solid #eee;
    padding: 10px;
    float: left;
}

ul#iconLegend span.iconSmall {
    margin-right: 4px;
    margin-top: 0;
    float: left;
}

ul#iconLegend li {
    float: left;
    margin-right: 10px;
}

/* @end */

/* @group Icons */

span.icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url(/images/ui-combined.png);

    /* hide icon text for non-css users */
    font-size:0;
    text-indent:-999em;
}
/*ie6 hack*/
* html span.icon {text-indent:0; line-height:0; font-size:0; overflow:hidden; }
/*ie7 hack*/
*:first-child+html span.icon { text-indent:0; line-height:0; font-size:0; overflow:hidden; }

span.iconSmall {
    width: 18px;
    height: 18px;
    float: left;
    margin-left: 8px;
    margin-top: -4px;
    background-image: url(/images/ui-combined.png);
}

span.iconSmall.green {
    background-position: -138px 0;
}

span.iconSmall.yellow {
    background-position: -138px -18px;
}

span.iconSmall.red {
    background-position: -138px -36px;
}

span.iconSmall.grey {
    background-position: -138px -54px;
}

span.icon.green {
    background-position: 0 -16px;
}

span.icon.yellow {
    background-position: 0 -40px;
}

span.icon.red {
    background-position: 0 -64px;
}

span.icon.grey {
    background-position: 0 -88px;
}



/* @end */

/* @end */

/* @group Footer */

div#footer {
    width: 960px;
    height: 60px;
    margin-top: 40px;
    float: left;
    clear: left;
    background-image: url(/images/ui-horizontal.png);
}

div#footer p {
    padding-left: 20px;
    padding-top: 19px;
}

/* @end */

/* @group Buttons */

div#buttons {
    float: right;
    height: 36px;
    margin-top: 20px;
}

div#buttons a#history {
    margin-left: 10px;
}

/* @group Button */

a.button {
    height: 36px;
    width: 106px;
    float: left;
    text-align: center;
    line-height: 36px;
    text-decoration: none;
    background: url(/images/ui-combined.png) -32px 0;
    color: black;
    text-shadow: white 0 1px 0;
}

a.button.disabled, a:hover.button.disabled, a:active.button.disabled {
    cursor: default;
    background-position: -32px -108px;
    color: #909090;
}

a:hover.button {
    background-position: -32px -36px;
}

a:active.button {
    background-position: -32px -72px;
}

/* @end */



/* @end */

/* @group Box */

div.box {
    width: 960px;
    float: left;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    background: #d7d7d7 url(/images/ui-horizontal.png) repeat-x 0 -260px;
}

/* @end */

/* @group Segment */

.segment {
    height: 32px;
    text-shadow: white 0 1px 0;
    float: left;
    font: 13px/30px "Lucida Grande", Lucida, Verdana, sans-serif;
    margin-right: -1px;
    margin-left: 10px;
}

.segment a {
    text-decoration: none;
    color: black;
    float: left;
    position: relative;
}

.segment a .arrow {
    width: 9px;
    height: 5px;
    position: absolute;
    background-image: url(/images/ui-combined.png);
    right: 12px;
    top: 12px;
}

.segment a .text {
    float: left;
    height: 20px;
    line-height: 20px;
    width: 80px;
    position: absolute;
    top: 5px;
    text-align: center;
    left: 0;
}

.dropdownOpen {
    z-index: 40;
    position: relative;
}

.segment .dropdownOpen.right {
    background: url(/images/ui-combined.png) right -456px;
}

.segment .divider {
    height: 32px;
    width: 1px;
    float: left;
    background: url(/images/ui-combined.png) 0 -424px;
}

.segment .left {
    height: 32px;
    float: left;
    background: url(/images/ui-combined.png) left -360px;
    padding-right: 16px;
    padding-left: 20px;
}

.segment .left.checked {
    background-position: left -392px;
}

.segment .right {
    height: 32px;
    padding-right: 26px;
    background: url(/images/ui-combined.png) right -360px;
    padding-left: 16px;
    float: left;
}

.segment .right.checked {
    background-position: right -392px;
}

.segment .middle {
    height: 32px;
    float: left;
    background: url(/images/ui-combined.png) -30px -360px;
    padding-right: 16px;
    padding-left: 16px;
}

.segment .middle.checked {
    background-position: -30px -392px;
}



/* @end */

/* @group Dropdown */

.dropdown {
    -moz-background-clip: padding;
    -webkit-background-clip: padding;
    background-clip: padding-box;
    border-radius: 4px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    -webkit-border-radius: 4px;
    -webkit-border-top-left-radius: 0px;
    -webkit-border-top-right-radius: 0px;
    -moz-border-radius: 4px;
    -moz-border-radius-topleft: 0px;
    -moz-border-radius-topright: 0px;
    box-shadow: 0px 4px 80px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 4px 80px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 4px 80px rgba(0,0,0,0.5);
    position: absolute;
    z-index: 30;
    background-color: white;
    border: 1px solid rgba(0,0,0,0.33);
}

.dropdown .link {
    text-align: center;
    width: 100%;
    float: left;
    height: 32px;
    line-height: 32px;
    border-top: 1px solid #f0f0f0;
    font-weight: bold;
    text-decoration: none;
    color: black;
    font-size: 12px;
}

.dropdown .wrapper {
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    margin-left: -1px;
    position: relative;
}

.dropdown a {
    display: block;
    color: black;
    text-decoration: none;
}

.dropdown ul {
    position: relative;
}

.dropdown ul a {
    padding: 6px 10px 6px 14px;
}

.dropdown ul li {
    cursor: pointer;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    margin-left: 0;
    border-left: 1px solid #949494;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
}

.dropdown ul li.last, .dropdown ul li:hover.last {
    border-bottom-style: none;
}

.dropdown ul li.alt {
    background-color: #f8f8f8;
}

.dropdown ul li:hover {
    background-color: black;
    color: white;
    z-index: 50;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
}

.dropdown ul li:hover a {
    color: white;
}

#historySelect,#checkSelect { display: none; }

/* @end */

/* @group Single Segment Button */

a.singleSegmentButton {
    text-shadow: white 0 1px 0;
    font: normal 13px/30px "Lucida Grande", Lucida, Verdana, sans-serif;
    height: 32px;
    float: left;
    position: relative;
    min-width: 100px;
    padding-right: 20px;
    width: 120px;
    text-decoration: none;
    color: black;
}

a.singleSegmentButton.dropdownOpen span.left {
    background-position: left -456px;
}

a.singleSegmentButton.dropdownOpen span.right {
    background-position: right -456px;
}

a.singleSegmentButton span.arrow {
    width: 9px;
    height: 5px;
    position: absolute;
    background-image: url(/images/ui-combined.png);
    right: 14px;
    top: 12px;
}

a.singleSegmentButton span.text {
    position: absolute;
    z-index: 10;
    height: 100%;
    text-indent: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
	left: 0;
	right: 30px;
}

a.singleSegmentButton span.left {
    height: 32px;
    position: absolute;
    left: -2px;
    right: 30px;
    background: url(/images/ui-combined.png) left -360px;
}

a.singleSegmentButton span.right {
    height: 32px;
    position: absolute;
    right: 0;
    width: 30px;
    background: url(/images/ui-combined.png) right -360px;
}

/* @end */

#currentCheckButton {
    width: 200px;
}

#historyTab {
    width: 62px;
}

/* @group Timeline Chart */

div.tooltip{
    background-color:#fff;
    border:1px solid #eee;
    padding: 8px;
    display:none;
    color:#222;
    text-align:left;
    font-size:13px;
    z-index: 20;

    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-box-shadow: 1px 2px 5px #666;
    -webkit-box-shadow: 1px 2px 5px #666;
    box-shadow: 1px 2px 5px #666
}

div.tooltipUP{
    background-color:#fff;
    border:1px solid #eee;
    padding: 5px 4px 5px 34px;
    width:110px;
    line-height: 25px;
    height: 25px;
    display:none;
    color:#222;
    text-align:left;
    font-size:14px;
    background-image: url('../images/timelineChart/status-up.png');
    background-repeat: no-repeat;

    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-box-shadow: 1px 2px 5px #666;
    -webkit-box-shadow: 1px 2px 5px #666;
    box-shadow: 1px 2px 5px #666

}
div.tooltipDOWN{
    background-color:#fff;
    border:1px solid #eee;
    padding: 5px 4px 5px 34px;
    width:110px;
    line-height: 25px;
    height: 25px;
    display:none;
    color:#222;
    text-align:left;
    font-size:14px;
    background-image: url('../images/timelineChart/status-down.png');
    background-repeat: no-repeat;

    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-box-shadow: 1px 2px 5px #666;
    -webkit-box-shadow: 1px 2px 5px #666;
    box-shadow: 1px 2px 5px #666

}
div.tooltipUNKNOWN{
    background-color:#fff;
    border:1px solid #eee;
    padding: 5px 4px 5px 34px;
    width:110px;
    line-height: 25px;
    height: 25px;
    display:none;
    color:#222;
    text-align:left;
    font-size:14px;
    background-image: url('../images/timelineChart/status-unknown.png');
    background-repeat: no-repeat;

    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-box-shadow: 1px 2px 5px #666;
    -webkit-box-shadow: 1px 2px 5px #666;
    box-shadow: 1px 2px 5px #666;
}
div.tooltipNONE {
    opacity: 0;
}

div#timelineChart, div#highchart {
    width: 900px;
    margin: 0 auto;
}
div#highchart {
    padding-right: 20px;
}
div#uptime div#timelineChartX{
    position: relative;
    text-align: left;
}
div#uptime div#timelineChartBody{
    width: 865px;
    padding: 12px 0px 0 0px;
    position: relative;
}
div#uptime div#timelineChartBody div#bodyTop{
    position: absolute;
    top: 0;
    left: 0;
    height: 12px;
    width: 885px;
    background: url('../images/timelineChart/back-top.png') no-repeat;
}
div#uptime div#timelineChartBody div#bodyMiddle{
    width: 885px;
    background: url('../images/timelineChart/back-fill.png') repeat-y;
}
div#uptime div#timelineChartBody div#bodyBottom{
    height: 12px;
    width: 885px;
    background: url('../images/timelineChart/back-bottom.png') no-repeat;
}
div#uptime div.row{
    height: 10px;
    padding: 5px 10px 5px 10px;
}
div#timelineChartX ul li.tick{
    float: left;
}
div#timelineChartY,
div#timelineChartX{
    color: #444;
    font-size: 11px;
}
div#timelineChartX{
    padding: 10px 0 0 0;
}
div#timelineChartY{
    padding: 12px 5px 0 0;
    line-height: 20px;
}
div#timelineChartY div.weekend{
    text-decoration: underline;
}
div#timelineChartBody div.NONE {
    opacity: 0;
}
.highcharts-tooltip text tspan{
    color: #00f;
}
/* @end */

/* @group Tables */

/* @group Specific tables */

div#outages, div#checks, div#months {
    width: 960px;
    float: left;
}

div#checks, div#month-table {
    margin-top: 30px;
}
div#checks.overview {
    margin-top: -36px;
}

div#outages th, div#outages td, #month-table th, #month-table td {
    padding: 14px;
    text-align: left;
}

div#outages .outage-duration, #month-table .month-response {
    text-align: right;
}

div#outages td, #month-table td {
    font-weight: bold;
}

#month-table td {
    font-size: 14px;
}
#month-table td.month-response, #month-table td.month-uptime, #outages td.outage-duration {
    font-size: 16px;
    color: #464646;
}
#month-table .month-response, #outages .outage-duration {
    padding-right: 100px;
}

/* @end */

table.dt {
    border-collapse: collapse;
    margin: 1em 0;
    -webkit-border-radius: 10px;
    -khtml-border-radius: 10px;
    -moz-border-radius: 10px;
    behavior: url(/css/PIE.htc);
    border-radius: 10px;
    font-size: 14px;
    position: relative;
    zoom: 1;
    table-layout: fixed;
}
.dt tbody {
    background-color: white;
    color: #464646;
}
.dt tr.even {
    background-color: #F8F8F8;
}
.dt tr {
    border-bottom: 1px solid #eee;
}
.dt th {
    font-weight: normal;
    text-align: center;
}
.dt td, .dt th {
    padding: 14px 0;
    overflow: hidden;
    white-space: nowrap;
}
.dt a {
    font-weight: bold;
    color: #353535;
    text-decoration: underline;
}
.dt a:hover {
    color: #676767;
}
.icons-only td, .icons-only th {
    padding: 14px 0;
}
thead {
    background-image: url(/images/ui-horizontal.png);
}
th.check-day {
    font-size: 13px;
}
th.check-name {
    text-align: left;
}
.dt td.check-status, .dt .check-name {
    padding-left: 14px;
}
.dt th.check-status {
    padding-left: 10px;
}
td.check-day {
    padding-left: 0;
    text-align: center;
    border-left: 1px solid #eee;
}
td.check-day.first {
    border-left: none;
}
.sorting, .sorting_asc, .sorting_desc {
    cursor: pointer;
}
.dt .triangle {
    font-size: 10px;
}
.paginate_button {
    background: url(/images/ui-combined.png) no-repeat 0 0 #FFFFFF;
    height: 36px;
    width: 36px;
    display: -moz-inline-stack;
    display: inline-block;
    vertical-align: middle;
}
.paginate_button.first {
    background-position: 0 -179px;
}
.paginate_button.first.disabled {
    background-position: 0 -287px;
}
.paginate_button.previous {
    background-position: -36px -179px;
}
.paginate_button.previous.disabled {
    background-position: -36px -287px;
}
.paginate_button.next {
    background-position: -72px -179px;
}
.paginate_button.next.disabled {
    background-position: -72px -287px;
}
.paginate_button.last {
    background-position: -108px -179px;
}
.paginate_button.last.disabled {
    background-position: -108px -287px;
}
.paginate_button.enabled {
    cursor: pointer;
}
.paginate_button.disabled {
    opacity: 0.6;
}
.dataTables_length {
    float: left;
}
.dataTables_paginate {
    text-align: right;
    font-size: 12px;
    font-weight: bold;
    color: #464646;
}
.dataTables_filter {
    text-align: right;
}
.dataTables_filter input {
    width: 154px;
    height: 26px;
    border-style: none;
    padding-left: 26px;
    background: url(/images/foundation.png) 0 -396px;
}
.dataTables_filter input:focus {
    background: white url(/images/foundation.png) 0 -424px;
}
.dataTables_processing {
    height: 36px;
    float: right;
    display: none;
    padding-left: 20px;
    background: url(/images/loader.gif) no-repeat;
}

/* @group Status icons */

.dt .status {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url(/images/ui-combined.png) no-repeat;
}
.dt .status.up {
    background-position: -236px -280px;
}
.dt .status.down {
    background-position: -236px -336px;
}
.dt .status.paused {
    background-position: -236px -224px;
}
.dt .status.unknown {
    background-position:  0px -88px;
}

div#checks.overview .dataTables_wrapper .fg-toolbar {
    height: 30px;
}
/* the first div after the table */
.dt + .fg-toolbar {
    height: 40px;
}

/* @end */

/* @end */

.explanation {
    float: left;
    margin-top: 10px;
    font-style: italic;
    font-size: 12px;
    color: #676767;
}
der-radius: 0em .2em .2em 0em;
  -moz-border-radius: 0em .2em .2em 0em;
  -webkit-border-radius: 0em .2em .2em 0em;
}
.dropdown > span > a + a:link,
.dropdown > span > a + a:visited,
.dropdown > span > a + a:active {
  color: #fcfcfc;
}
.dropdown > span > a + a:hover {
  background: #2980b9;
}
.dropdown > ul {
  display: none;
  position: absolute;
  top: 100%;
  left: -8px;
  margin-top: 16px;
  padding: .3em;
  z-index: 1005;
  min-width: 128px;
  background: #343131;
  border-radius: .3em;
  box-shadow: 0px 0px 0.5em 0.3em rgba(0, 0, 0, 0.2);
}
.dropdown > ul > li {
  padding: .5em;
  border-bottom: 1px solid #e3e3e3;
  background: #fcfcfc;
}
.dropdown > ul.js-open {
  display: block;
}
.dropdown > ul:before {
  position: absolute;
  top: -16px;
  left: 104px;
  border: .5em solid transparent;
  border-bottom-color: #343131;
  visibility: visible;
  content: ' ';
}
.notification {
  font-family: Lato;
  font-size: 1em;
  background: #fcfcfc;
  color: #343131;
  padding: 1em 0em;
}
.notification a {
  text-decoration: none;
}
.notification a:link,
.notification a:visited {
  color: #2980b9;
}
.notification a:hover,
.notification a:active {
  color: #7db2d4;
}
.notification .row .fill {
  font-family: Lato;
  font-size: 1em;
  background: #33aa33;
  color: #fcfcfc;
  padding: 2em 0em;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
}
.notification .row .fill a {
  text-decoration: none;
}
.notification .row .fill a:link,
.notification .row .fill a:visited {
  color: #fcfcfc;
}
.notification .row .fill a:hover,
.notification .row .fill a:active {
  color: #acdbac;
}
.notification .row .fill a {
  text-decoration: underline;
}
.notification .row .fill p {
  margin: 0em 2em;
  text-align: center;
}
#content {
  background: #fcfcfc;
}
#content > .wrapper {
  width: 61.81818182%;
  margin-left: 19.09090909%;
  margin-right: 0.90909091%;
  *zoom: 1;
}
#content > .wrapper:before,
#content > .wrapper:after {
  content: "";
  display: table;
}
#content > .wrapper:after {
  clear: both;
}
#content > .wrapper div.row {
  overflow: hidden;
}
#content > .wrapper div.col-bisect {
  display: block;
  float: left;
  width: 50%;
}
@media (max-width: 640px), (max-device-width: 640px) {
  #content > .wrapper div.col-bisect {
    float: none;
    width: 100%;
  }
}
#content > .wrapper div.col-trisect {
  display: block;
  float: left;
  width: 33.3%;
}
@media (max-width: 640px), (max-device-width: 640px) {
  #content > .wrapper div.col-trisect {
    float: none;
    width: 100%;
  }
}
#content > .wrapper div.col-major {
  display: block;
  float: left;
  width: 65%;
}
@media (max-width: 640px), (max-device-width: 640px) {
  #content > .wrapper div.col-major {
    float: none;
    width: 100%;
  }
}
#content > .wrapper div.col-minor {
  display: block;
  overflow: hidden;
  padding-left: 1.5em;
}
@media (max-width: 1000px) {
  #content > .wrapper {
    width: 80%;
    margin-left: 10%;
    margin-right: 0.90909091%;
  }
}
@media (max-width: 700px), (max-device-width: 700px), (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 1.25), (max-device-width: 900px) and (min-resolution: 120dpi) {
  #content > .wrapper {
    width: 98.18181818%;
    margin-left: 0.90909091%;
    margin-right: 0.90909091%;
  }
}
#content > form input[type="text"],
#content > form input[type="url"],
#content > form input[type="email"],
#content > form input[type="number"],
#content > form input[type="password"],
#content > form select,
#content > form textarea {
  padding: .45em;
  width: 20em;
  border: none;
  margin-top: 0.1666665em;
  background: #e3e3e3;
  color: #343131;
  border: 1px solid #c0bfbf;
  font-family: Lato, sans-serif;
  font-size: 1em;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
}
#content > form input[type="text"]:focus,
#content > form input[type="url"]:focus,
#content > form input[type="email"]:focus,
#content > form input[type="number"]:focus,
#content > form input[type="password"]:focus,
#content > form select:focus,
#content > form textarea:focus {
  border: 1px solid #f05330;
  box-shadow: inset 2px 2px #c9c9c9;
  outline: none;
}
div.col-bisect #content > form input[type="text"],
div.col-bisect #content > form input[type="url"],
div.col-bisect #content > form input[type="email"],
div.col-bisect #content > form input[type="number"],
div.col-bisect #content > form input[type="password"],
div.col-bisect #content > form select,
div.col-bisect #content > form textarea {
  width: 96%;
  box-sizing: border-box;
}
#content > form label {
  display: block;
  margin: .1em .3em .1em 0em;
  font-size: 1em;
}
#content > form span.helptext {
  display: block;
  margin: .3em 0em;
  font-style: italic;
  font-size: .9em;
  color: #696262;
}
#content > form input[type="radio"] {
  display: inline-block;
}
#content > form input[type="radio"] + label {
  display: inline;
}
#content > form input[type="checkbox"] {
  float: left;
  display: block;
  height: 1.2em;
  margin: .3em .5em;
  width: 1.2em;
  line-height: 1.5em;
}
#content > form input[type="checkbox"] + span.helptext {
  display: block;
  overflow: hidden;
  margin: 0em;
  font-style: normal;
  color: #343131;
}
#content > form input[type="number"] {
  width: 5em;
}
#content > form input[type="text"].search {
  padding-left: 2em;
  background-repeat: no-repeat;
  background-position: .25em center;
  background-size: 24px 24px;
}
#content > form input[type="text"].search {
  background-image: url('../img/icon-search.png');
}
#content > form input[type="submit"],
#content > form button {
  position: relative;
  padding: .33em 1em;
  border: none;
  top: -0.165em;
  font-family: Lato;
  font-size: 1.1em;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: -1px 1px #20638f;
  cursor: pointer;
  /* Raised button stuff */
  transition: all 0s ease-out;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  border-radius: .2em;
  -moz-border-radius: .2em;
  box-shadow: 0px 0.2em 0px 0px #20638f;
  -webkit-box-shadow: 0px 0.2em 0px 0px #20638f;
  margin: 1em 0em;
}
#content > form input[type="submit"]:active,
#content > form button:active {
  top: -0.015em;
  -webkit-box-shadow: 0px 0.05em 0px 0px #20638f;
  box-shadow: 0px 0.05em 0px 0px #20638f;
  outline: none;
}
#content > form input[type="submit"]:hover,
#content > form button:hover {
  background: #409ad5;
}
#content > form textarea {
  width: 40em;
  height: 10em;
}
#content > form .errorlist {
  color: orangered;
}
#content > form > p {
  display: block;
  margin: .65em 0em;
  clear: both;
}
#content > form > p + p {
  margin-top: 1em;
}
#content > form input::-webkit-input-placeholder {
  color: #c0bfbf;
}
#content > form input:-moz-placeholder {
  color: #c0bfbf;
  opacity: 1;
}
#content > form input::-moz-placeholder {
  color: #c0bfbf;
  opacity: 1;
}
#content > form input:-ms-input-placeholder {
  color: #c0bfbf;
}
/*
Legacy modular item listing.

Example:
<div class="module">
  <div class="module-header">
    <form>
      <input type="submit" value="Create foo" />
    </form>
    <p>This is a header for the module listing</p>
  </div>
  <div class="module-list-wrapper">
    <ul>
      <li class="module-item">
        Left text
        <span class="module-item-secondary">
          <form>
            <input type="submit" value="Action button" />
          </form>
        </span>
      </li>
      <li class="module-item">
        Left text
        <span class="module-item-secondary">
          <form>
            <input type="submit" value="Action button" />
          </form>
        </span>
        <span class="module-item-secondary">
          <span class="quiet">
            Secondary info
          </span>
        </span>
        <span class="module-item-secondary">
          <span class="quiet">
            Ternary info
          </span>
        </span>
      </li>
    </ul>
  </div>
</div>

Styleguide 2.1
*/
.module {
  font-family: Lato;
  font-size: 1em;
  background: #fcfcfc;
  color: #343131;
  margin: 1.5em auto;
}
.module a {
  text-decoration: none;
}
.module a:link,
.module a:visited {
  color: #2980b9;
}
.module a:hover,
.module a:active {
  color: #7db2d4;
}
.module div.module-header,
.module div.module-list {
  overflow: hidden;
}
.module div.module-header {
  color: #343131;
}
.module div.module-header .small_head {
  font-size: .6em;
}
.module div.module-header form {
  float: right;
  margin: 0em 1em;
  font-size: .8em;
}
.module h1,
.module h2,
.module h3 {
  margin: .6em .3em;
}
.module p {
  padding: 0em .3em;
}
.module p:first-child {
  margin-top: 0em;
}
.module p.empty {
  padding: .6em;
}
.module div.module-list-wrapper {
  padding: 0em .6em;
  /* DEPRECATED -- avoid using this absolute positioning style */
}
.module div.module-list-wrapper > ul {
  background: #fff;
  border: 1px solid #e3e3e3;
}
.module div.module-list-wrapper li.module-item {
  padding: 0em .4em;
  position: relative;
  border-bottom: 1px solid #e3e3e3;
  overflow: hidden;
  line-height: 2.25em;
}
.module div.module-list-wrapper li.module-item:last-child {
  border-bottom: none;
}
.module div.module-list-wrapper li.module-item a.module-item-title:hover {
  text-decoration: underline;
}
.module div.module-list-wrapper li.module-item form {
  display: inline-block;
}
.module div.module-list-wrapper li.module-item input[type="submit"] {
  padding: .33em 1em;
  border: none;
  top: 0em;
  font-size: 1.2em;
  font-weight: bold;
  background: #a3a3a3;
  color: #fcfcfc;
  text-shadow: 0px 1px 0px #707070;
  cursor: pointer;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
  box-shadow: none;
  -webkit-box-shadow: : none;
  font-size: 14px;
  line-height: 18px;
  margin: 0em;
  vertical-align: middle;
}
.module div.module-list-wrapper li.module-item input[type="submit"]:hover,
.module div.module-list-wrapper li.module-item input[type="submit"]:active {
  top: 0em;
  outline: none;
  box-shadow: none;
  background: #b5b5b5;
  color: #fcfcfc;
}
.module div.module-list-wrapper li.module-item h2,
.module div.module-list-wrapper li.module-item h3 {
  font-family: Lato;
  font-size: 1.1em;
  margin: 0em 0em .3em 0em;
}
.module div.module-list-wrapper li.module-item p {
  margin: .3em 0em 0em 0em;
  padding: 0em;
  font-size: 16px;
  line-height: 16px;
}
.module div.module-list-wrapper li.module-item .success {
  float: right;
}
.module div.module-list-wrapper li.module-item span.module-item-secondary {
  float: right;
  margin-left: .4em;
}
.module div.module-list-wrapper li.module-item span.module-item-secondary > span {
  margin-left: .4em;
  margin-right: .4em;
}
.module div.module-list-wrapper ul.module-item-menu {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;
  padding: .2em 0em .2em 0em;
}
.module div.module-list-wrapper ul.module-item-menu li {
  display: block;
  position: relative;
  float: left;
  margin: 0em .3em;
}
.module div.module-list-wrapper ul.module-item-menu li a {
  display: block;
  padding: .33em 1em;
  border: none;
  top: 0em;
  font-size: 1.2em;
  font-weight: bold;
  background: #bcbcbc;
  color: #fcfcfc;
  text-shadow: 0px 1px 0px #898989;
  cursor: pointer;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
  box-shadow: none;
  -webkit-box-shadow: : none;
  font-size: 15px;
  line-height: 1.3em;
}
.module div.module-list-wrapper ul.module-item-menu li a:hover,
.module div.module-list-wrapper ul.module-item-menu li a:active {
  top: 0em;
  outline: none;
  box-shadow: none;
  background: #c9c9c9;
  color: #fcfcfc;
}
.module div.module-list-wrapper ul.module-item-menu li input {
  margin: .06em;
}
.module div.module-list-wrapper ul.module-item-menu span.item-disabled {
  padding: .6em;
  font-style: italic;
  font-size: .9em;
  line-height: 2em;
  color: #5b5656;
}
.module div.module-list-wrapper ul.module-item-menu span.item-disabled:before {
  width: 1em;
  height: 1em;
  padding-right: .1em;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  content: '\e03c';
  font-size: 1.2em;
}
.module div.module-list-wrapper li.module-item.col-span {
  padding-left: 0em;
  padding-right: 0em;
  text-decoration: none;
}
.module div.module-list-wrapper li.module-item.col-span a {
  display: block;
  padding-left: .4em;
  padding-right: .4em;
}
.module div.module-list-wrapper li.module-item.col-span a:hover {
  background-color: #efefef;
}
.module div.module-list-wrapper li.module-item.col-span span.col-right {
  float: right;
  width: 10em;
  font-size: .9em;
  text-align: right;
  color: #b0b0b0;
}
.module div.module-list .count {
  float: right;
}
#dashboard_bar {
  font-family: Lato;
  background: #2980b9;
  color: #fcfcfc;
  font-size: 1em;
  border-bottom: 1px solid #20638f;
  border-top: 1px solid #409ad5;
}
#dashboard_bar a {
  text-decoration: none;
}
#dashboard_bar a:link,
#dashboard_bar a:visited {
  color: #fcfcfc;
}
#dashboard_bar a:hover,
#dashboard_bar a:active {
  color: #a8cae1;
}
#dashboard_bar a {
  text-decoration: underline;
}
#dashboard_bar .wrapper {
  width: 61.81818182%;
  margin-left: 19.09090909%;
  margin-right: 0.90909091%;
  *zoom: 1;
  text-align: center;
  overflow: hidden;
}
#dashboard_bar .wrapper:before,
#dashboard_bar .wrapper:after {
  content: "";
  display: table;
}
#dashboard_bar .wrapper:after {
  clear: both;
}
#dashboard_bar .wrapper div.row {
  overflow: hidden;
}
#dashboard_bar .wrapper div.col-bisect {
  display: block;
  float: left;
  width: 50%;
}
@media (max-width: 640px), (max-device-width: 640px) {
  #dashboard_bar .wrapper div.col-bisect {
    float: none;
    width: 100%;
  }
}
#dashboard_bar .wrapper div.col-trisect {
  display: block;
  float: left;
  width: 33.3%;
}
@media (max-width: 640px), (max-device-width: 640px) {
  #dashboard_bar .wrapper div.col-trisect {
    float: none;
    width: 100%;
  }
}
#dashboard_bar .wrapper div.col-major {
  display: block;
  float: left;
  width: 65%;
}
@media (max-width: 640px), (max-device-width: 640px) {
  #dashboard_bar .wrapper div.col-major {
    float: none;
    width: 100%;
  }
}
#dashboard_bar .wrapper div.col-minor {
  display: block;
  overflow: hidden;
  padding-left: 1em;
}
@media (max-width: 1000px) {
  #dashboard_bar .wrapper {
    width: 80%;
    margin-left: 10%;
    margin-right: 0.90909091%;
  }
}
@media (max-width: 700px), (max-device-width: 700px), (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 1.25), (max-device-width: 900px) and (min-resolution: 120dpi) {
  #dashboard_bar .wrapper {
    width: 98.18181818%;
    margin-left: 0.90909091%;
    margin-right: 0.90909091%;
  }
}
#dashboard_bar ul {
  display: block;
  float: left;
}
#dashboard_bar ul li {
  display: block;
  padding: .6em 1em;
  float: left;
}
#dashboard_bar ul li.active {
  background: #2472a4;
}
#dashboard_bar a {
  text-decoration: none;
}
.navigable {
  *zoom: 1;
  position: relative;
  padding-top: 1em;
  padding-bottom: 1em;
}
.navigable:before,
.navigable:after {
  content: "";
  display: table;
}
.navigable:after {
  clear: both;
}
.navigable > div {
  display: block;
  overflow: hidden;
}
.navigable > div .module .module-wrapper {
  width: 100%;
  margin: 0em;
}
.navigable > ul {
  width: 12em;
  margin-right: 1em;
  float: left;
}
.navigable > ul li {
  font-family: Lato;
  font-size: 1em;
  background: #fcfcfc;
  color: #343131;
  border-bottom: 1px solid #e3e3e3;
  position: relative;
  word-break: break-all;
  line-height: 1.5em;
}
.navigable > ul li a {
  text-decoration: none;
}
.navigable > ul li a:link,
.navigable > ul li a:visited {
  color: #2980b9;
}
.navigable > ul li a:hover,
.navigable > ul li a:active {
  color: #7db2d4;
}
.navigable > ul li:last-child {
  border-bottom: none;
}
.navigable > ul li.active {
  font-family: Lato;
  font-size: 1em;
  background: #2980b9;
  color: #fcfcfc;
}
.navigable > ul li.active a {
  text-decoration: none;
}
.navigable > ul li.active a:link,
.navigable > ul li.active a:visited {
  color: #fcfcfc;
}
.navigable > ul li.active a:hover,
.navigable > ul li.active a:active {
  color: #a8cae1;
}
.navigable > ul li.active a {
  text-decoration: underline;
}
.navigable > ul li.active a:visited,
.navigable > ul li.active a:active {
  color: #fcfcfc !important;
}
.navigable > ul li.active:after {
  content: "•";
  position: absolute;
  right: .5em;
  top: .25em;
}
.navigable > ul li a {
  display: block;
  padding: .3em;
}
.navigable > ul li a:hover {
  background: #d2e7f5;
}
.navigable > ul .edit {
  position: absolute;
  top: .2em;
  left: -1.5em;
  opacity: 0.25;
  text-transform: uppercase;
  text-decoration: underline;
  transition: opacity 0.2s ease-in-out;
  -webkit-transition: opacity 0.2s ease-in-out;
  -moz-transition: opacity 0.2s ease-in-out;
  -ms-transition: opacity 0.2s ease-in-out;
  -o-transition: opacity 0.2s ease-in-out;
}
.navigable > ul li:hover .edit {
  opacity: 1;
}
.navigable > ul h3.editable {
  padding: .2em 0em;
}
.navigable .profile_image img {
  border-radius: 5px;
}
.empty {
  font-family: Lato;
  font-size: 1em;
  background: #f5f2e9;
  color: #343131;
  padding: 1em;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
.empty a {
  text-decoration: none;
}
.empty a:link,
.empty a:visited {
  color: #409ad5;
}
.empty a:hover,
.empty a:active {
  color: #89bddd;
}
.edit-field .edit {
  width: 16px;
  height: 16px;
  background: url(/media/images/edit.png) no-repeat;
  overflow: hidden;
  position: relative;
  display: block;
  background-size: 100% 100%;
  cursor: pointer;
  -webkit-user-select: none;
}
.edit-field .edit > span {
  display: block;
  text-indent: -9999em;
  text-direction: ltr;
}
.edit-field .edit-toggle {
  display: none !important;
}
.edit-field .edit-input {
  display: none;
}
.edit-field .edit-toggle + .editable .edit-input {
  display: none;
}
.edit-field .edit-toggle + .editable .edit-target {
  display: auto;
}
.edit-field .edit-toggle:checked + .editable .edit-input {
  display: inline;
}
.edit-field .edit-toggle:checked + .editable .edit-target {
  display: none;
}
.when-editing {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  -webkit-transition: opacity 0.2s ease-in-out;
  -moz-transition: opacity 0.2s ease-in-out;
  -ms-transition: opacity 0.2s ease-in-out;
  -o-transition: opacity 0.2s ease-in-out;
  pointer-events: none;
  -webkit-user-select: none;
}
.editing .when-editing {
  opacity: 1;
}
/* Old styles not yet cleaned up below */
/* text editor */
.editor {
  width: 500px;
  height: 600px;
}
/* file tree */
li.depth-1 {
  padding-left: 0px;
}
li.depth-2 {
  padding-left: 20px;
}
li.depth-3 {
  padding-left: 40px;
}
li.depth-4 {
  padding-left: 60px;
}
li.depth-5 {
  padding-left: 80px;
}
li.depth-6 {
  padding-left: 100px;
}
li.depth-7 {
  padding-left: 120px;
}
li.depth-8 {
  padding-left: 140px;
}
li.depth-9 {
  padding-left: 160px;
}
li.depth-10 {
  padding-left: 180px;
}
/* pagination */
.pagination {
  float: left;
  padding: .5em;
  margin: 1em 0em;
}
.pagination a,
.pagination span {
  background: #fff;
  display: block;
  color: #444;
  text-decoration: none;
  float: left;
  padding: 8px 10px;
  border: 1px solid #bfbfbf;
  border-right: none;
}
.pagination a.disabled,
.pagination span.disabled,
.pagination a.disabled:hover,
.pagination span.disabled:hover {
  color: #999;
  background: #fff;
}
.pagination a:hover {
  background: #f6f6f6;
}
.pagination .next {
  border-right: 1px solid #bfbfbf;
}
.pagination .current.page,
.pagination .current.page:hover {
  color: #444;
  background: #d9d9d9;
}
/* call out */
.call-out {
  display: block;
  float: right;
  padding: 8px 12px 6px;
  font-weight: bold;
  font-size: 15px;
  height: 20px;
  line-height: 20px;
  text-decoration: none;
  color: #fff;
  background: #8CA1AF url(../images/gradient-light.png) bottom left repeat-x;
  border-bottom: 1px solid #465158;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}
.call-out:hover {
  color: #fff;
  background-color: #697983;
}
/* history page */
.content-panel {
  float: left;
  width: 45%;
  height: 400px;
  padding: 10px;
  overflow: auto;
}
.content-panel .original {
  border-right: 1px solid #ccc;
}
.content-panel h3.panel-text {
  border-bottom: 6px solid #ccc;
  height: 32px;
}
.content-panel select.revision-select {
  display: inline;
  max-width: 250px;
}
.content-panel input[type="submit"].revision-revert {
  display: inline;
  margin: 0 0 0 5px;
  padding: 0px 3px;
  font-size: .75em;
}
/* autocomplete */
.ui-autocomplete {
  background: #fff;
  text-align: left;
  border: 1px solid #bfbfbf;
}
.ui-state-hover {
  background: #eee;
}
.ui-menu-item a {
  display: block;
  padding: 3px 10px;
}
/* utils */
.clear {
  clear: both;
}
.hide {
  display: none;
}
.left {
  float: left;
}
.right {
  float: right;
}
.right-menu {
  float: right;
  margin-right: 132px;
}
.quiet {
  color: #999;
}
.highlighted {
  background-color: #ee9;
  padding: 0 1px;
  margin: 0 1px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}
.first {
  margin-left: 0;
  padding-left: 0;
}
.last {
  margin-right: 0;
  padding-right: 0;
}
.top {
  margin-top: 0;
  padding-top: 0;
}
.bottom {
  margin-bottom: 0;
  padding-bottom: 0;
}
/* project detail */
div.project-bar li.project-admin > a:before {
  width: 1em;
  height: 1em;
  padding-right: .1em;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  content: '\e04f';
}
div.project-bar div.project-view-docs {
  padding: .75em;
  margin: 1em;
  float: right;
  font-size: 1.1em;
  background: #e5ddc6;
}
div.project-bar div.project-view-docs > a:before {
  width: 1em;
  height: 1em;
  padding-right: .1em;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  content: '\e062';
}
#project_details {
  font-family: Lato;
  font-size: 1em;
  background: #fcfcfc;
  color: #343131;
  padding-top: 1em;
  padding-bottom: 1em;
}
#project_details a {
  text-decoration: none;
}
#project_details a:link,
#project_details a:visited {
  color: #2980b9;
}
#project_details a:hover,
#project_details a:active {
  color: #7db2d4;
}
#project_details > h3 {
  font-size: 1.5em;
}
#project_details #project_description {
  padding-top: 0em;
  padding-bottom: .6em;
  font-size: 1.1em;
  font-style: italic;
  color: #837b7b;
}
#project_details .search {
  padding-top: .6em;
  margin-bottom: .6em;
  text-align: right;
}
#project_details .search form {
  font-size: .9em;
}
#project_details .search form input[type="text"],
#project_details .search form input[type="url"],
#project_details .search form input[type="email"],
#project_details .search form input[type="number"],
#project_details .search form input[type="password"],
#project_details .search form select,
#project_details .search form textarea {
  padding: .45em;
  width: 20em;
  border: none;
  margin-top: 0.1666665em;
  background: #e3e3e3;
  color: #343131;
  border: 1px solid #c0bfbf;
  font-family: Lato, sans-serif;
  font-size: 1em;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
}
#project_details .search form input[type="text"]:focus,
#project_details .search form input[type="url"]:focus,
#project_details .search form input[type="email"]:focus,
#project_details .search form input[type="number"]:focus,
#project_details .search form input[type="password"]:focus,
#project_details .search form select:focus,
#project_details .search form textarea:focus {
  border: 1px solid #f05330;
  box-shadow: inset 2px 2px #c9c9c9;
  outline: none;
}
div.col-bisect #project_details .search form input[type="text"],
div.col-bisect #project_details .search form input[type="url"],
div.col-bisect #project_details .search form input[type="email"],
div.col-bisect #project_details .search form input[type="number"],
div.col-bisect #project_details .search form input[type="password"],
div.col-bisect #project_details .search form select,
div.col-bisect #project_details .search form textarea {
  width: 96%;
  box-sizing: border-box;
}
#project_details .search form label {
  display: block;
  margin: .1em .3em .1em 0em;
  font-size: 1em;
}
#project_details .search form span.helptext {
  display: block;
  margin: .3em 0em;
  font-style: italic;
  font-size: .9em;
  color: #696262;
}
#project_details .search form input[type="radio"] {
  display: inline-block;
}
#project_details .search form input[type="radio"] + label {
  display: inline;
}
#project_details .search form input[type="checkbox"] {
  float: left;
  display: block;
  height: 1.2em;
  margin: .3em .5em;
  width: 1.2em;
  line-height: 1.5em;
}
#project_details .search form input[type="checkbox"] + span.helptext {
  display: block;
  overflow: hidden;
  margin: 0em;
  font-style: normal;
  color: #343131;
}
#project_details .search form input[type="number"] {
  width: 5em;
}
#project_details .search form input[type="text"].search {
  padding-left: 2em;
  background-repeat: no-repeat;
  background-position: .25em center;
  background-size: 24px 24px;
}
#project_details .search form input[type="text"].search {
  background-image: url('../img/icon-search.png');
}
#project_details .search form input[type="submit"],
#project_details .search form button {
  position: relative;
  padding: .33em 1em;
  border: none;
  top: -0.165em;
  font-family: Lato;
  font-size: 1.1em;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: -1px 1px #20638f;
  cursor: pointer;
  /* Raised button stuff */
  transition: all 0s ease-out;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  border-radius: .2em;
  -moz-border-radius: .2em;
  box-shadow: 0px 0.2em 0px 0px #20638f;
  -webkit-box-shadow: 0px 0.2em 0px 0px #20638f;
  margin: 1em 0em;
}
#project_details .search form input[type="submit"]:active,
#project_details .search form button:active {
  top: -0.015em;
  -webkit-box-shadow: 0px 0.05em 0px 0px #20638f;
  box-shadow: 0px 0.05em 0px 0px #20638f;
  outline: none;
}
#project_details .search form input[type="submit"]:hover,
#project_details .search form button:hover {
  background: #409ad5;
}
#project_details .search form textarea {
  width: 40em;
  height: 10em;
}
#project_details .search form .errorlist {
  color: orangered;
}
#project_details .search form > p {
  display: block;
  margin: .65em 0em;
  clear: both;
}
#project_details .search form > p + p {
  margin-top: 1em;
}
#project_details .search form input::-webkit-input-placeholder {
  color: #c0bfbf;
}
#project_details .search form input:-moz-placeholder {
  color: #c0bfbf;
  opacity: 1;
}
#project_details .search form input::-moz-placeholder {
  color: #c0bfbf;
  opacity: 1;
}
#project_details .search form input:-ms-input-placeholder {
  color: #c0bfbf;
}
#project_details > .wrapper {
  *zoom: 1;
}
#project_details > .wrapper:before,
#project_details > .wrapper:after {
  content: "";
  display: table;
}
#project_details > .wrapper:after {
  clear: both;
}
#project_details > .wrapper > .module {
  width: 65%;
  float: left;
  margin-right: 1em;
  padding-top: 0em;
}
#project_details > .wrapper > .module .module-header {
  margin-top: 0em;
  margin-bottom: 0em;
}
#project_details > .wrapper > .module .module-header h3 {
  padding: 0em;
}
#project_details > .wrapper > .module .module-item-menu > li a {
  padding: .33em 1em;
  border: none;
  top: 0em;
  font-size: 1.2em;
  font-weight: bold;
  background: #bcbcbc;
  color: #fcfcfc;
  text-shadow: 0px 1px 0px #898989;
  cursor: pointer;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
  box-shadow: none;
  -webkit-box-shadow: : none;
  font-size: 1em;
}
#project_details > .wrapper > .module .module-item-menu > li a:hover,
#project_details > .wrapper > .module .module-item-menu > li a:active {
  top: 0em;
  outline: none;
  box-shadow: none;
  background: #c9c9c9;
  color: #fcfcfc;
}
#project_details > .wrapper > .module .build_a_version h3 {
  padding-bottom: .5em;
}
#project_details > .wrapper > .module .build_a_version form {
  font-size: .9em;
}
#project_details > .wrapper > .module .build_a_version form input[type="text"],
#project_details > .wrapper > .module .build_a_version form input[type="url"],
#project_details > .wrapper > .module .build_a_version form input[type="email"],
#project_details > .wrapper > .module .build_a_version form input[type="number"],
#project_details > .wrapper > .module .build_a_version form input[type="password"],
#project_details > .wrapper > .module .build_a_version form select,
#project_details > .wrapper > .module .build_a_version form textarea {
  padding: .45em;
  width: 20em;
  border: none;
  margin-top: 0.1666665em;
  background: #e3e3e3;
  color: #343131;
  border: 1px solid #c0bfbf;
  font-family: Lato, sans-serif;
  font-size: 1em;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
}
#project_details > .wrapper > .module .build_a_version form input[type="text"]:focus,
#project_details > .wrapper > .module .build_a_version form input[type="url"]:focus,
#project_details > .wrapper > .module .build_a_version form input[type="email"]:focus,
#project_details > .wrapper > .module .build_a_version form input[type="number"]:focus,
#project_details > .wrapper > .module .build_a_version form input[type="password"]:focus,
#project_details > .wrapper > .module .build_a_version form select:focus,
#project_details > .wrapper > .module .build_a_version form textarea:focus {
  border: 1px solid #f05330;
  box-shadow: inset 2px 2px #c9c9c9;
  outline: none;
}
div.col-bisect #project_details > .wrapper > .module .build_a_version form input[type="text"],
div.col-bisect #project_details > .wrapper > .module .build_a_version form input[type="url"],
div.col-bisect #project_details > .wrapper > .module .build_a_version form input[type="email"],
div.col-bisect #project_details > .wrapper > .module .build_a_version form input[type="number"],
div.col-bisect #project_details > .wrapper > .module .build_a_version form input[type="password"],
div.col-bisect #project_details > .wrapper > .module .build_a_version form select,
div.col-bisect #project_details > .wrapper > .module .build_a_version form textarea {
  width: 96%;
  box-sizing: border-box;
}
#project_details > .wrapper > .module .build_a_version form label {
  display: block;
  margin: .1em .3em .1em 0em;
  font-size: 1em;
}
#project_details > .wrapper > .module .build_a_version form span.helptext {
  display: block;
  margin: .3em 0em;
  font-style: italic;
  font-size: .9em;
  color: #696262;
}
#project_details > .wrapper > .module .build_a_version form input[type="radio"] {
  display: inline-block;
}
#project_details > .wrapper > .module .build_a_version form input[type="radio"] + label {
  display: inline;
}
#project_details > .wrapper > .module .build_a_version form input[type="checkbox"] {
  float: left;
  display: block;
  height: 1.2em;
  margin: .3em .5em;
  width: 1.2em;
  line-height: 1.5em;
}
#project_details > .wrapper > .module .build_a_version form input[type="checkbox"] + span.helptext {
  display: block;
  overflow: hidden;
  margin: 0em;
  font-style: normal;
  color: #343131;
}
#project_details > .wrapper > .module .build_a_version form input[type="number"] {
  width: 5em;
}
#project_details > .wrapper > .module .build_a_version form input[type="text"].search {
  padding-left: 2em;
  background-repeat: no-repeat;
  background-position: .25em center;
  background-size: 24px 24px;
}
#project_details > .wrapper > .module .build_a_version form input[type="text"].search {
  background-image: url('../img/icon-search.png');
}
#project_details > .wrapper > .module .build_a_version form input[type="submit"],
#project_details > .wrapper > .module .build_a_version form button {
  position: relative;
  padding: .33em 1em;
  border: none;
  top: -0.165em;
  font-family: Lato;
  font-size: 1.1em;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: -1px 1px #20638f;
  cursor: pointer;
  /* Raised button stuff */
  transition: all 0s ease-out;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  border-radius: .2em;
  -moz-border-radius: .2em;
  box-shadow: 0px 0.2em 0px 0px #20638f;
  -webkit-box-shadow: 0px 0.2em 0px 0px #20638f;
  margin: 1em 0em;
}
#project_details > .wrapper > .module .build_a_version form input[type="submit"]:active,
#project_details > .wrapper > .module .build_a_version form button:active {
  top: -0.015em;
  -webkit-box-shadow: 0px 0.05em 0px 0px #20638f;
  box-shadow: 0px 0.05em 0px 0px #20638f;
  outline: none;
}
#project_details > .wrapper > .module .build_a_version form input[type="submit"]:hover,
#project_details > .wrapper > .module .build_a_version form button:hover {
  background: #409ad5;
}
#project_details > .wrapper > .module .build_a_version form textarea {
  width: 40em;
  height: 10em;
}
#project_details > .wrapper > .module .build_a_version form .errorlist {
  color: orangered;
}
#project_details > .wrapper > .module .build_a_version form > p {
  display: block;
  margin: .65em 0em;
  clear: both;
}
#project_details > .wrapper > .module .build_a_version form > p + p {
  margin-top: 1em;
}
#project_details > .wrapper > .module .build_a_version form input::-webkit-input-placeholder {
  color: #c0bfbf;
}
#project_details > .wrapper > .module .build_a_version form input:-moz-placeholder {
  color: #c0bfbf;
  opacity: 1;
}
#project_details > .wrapper > .module .build_a_version form input::-moz-placeholder {
  color: #c0bfbf;
  opacity: 1;
}
#project_details > .wrapper > .module .build_a_version form input:-ms-input-placeholder {
  color: #c0bfbf;
}
#project_details > .wrapper > .module .build_a_version form select {
  width: 10em;
}
#project_details > .wrapper > .project_details {
  margin-left: 1em;
  overflow: hidden;
}
#project_details > .wrapper > .project_details > h3 {
  padding: .3em .3em;
  margin: .3em 0em;
  border-top: 1px solid #e3e3e3;
  background: #f7f7f7;
  font-size: 1em;
}
#project_details > .wrapper > .project_details > h3:first-child {
  margin-top: 0em;
}
#project_details > .wrapper > .project_details > p,
#project_details > .wrapper > .project_details > div > p {
  margin: .3em;
}
#project_details > .wrapper > .project_details > p + h3,
#project_details > .wrapper > .project_details > div + h3 {
  margin-top: .65em;
}
#project_details > .wrapper > .project_details > p.detail-long {
  display: block;
  padding: .4em;
  border: 1px solid #d6d6d6;
  overflow: auto;
  white-space: nowrap;
  background: #efefef;
  font-size: .9em;
}
#project_import {
  font-family: Lato;
  font-size: 1em;
  background: #fcfcfc;
  color: #343131;
}
#project_import a {
  text-decoration: none;
}
#project_import a:link,
#project_import a:visited {
  color: #2980b9;
}
#project_import a:hover,
#project_import a:active {
  color: #7db2d4;
}
#project_import form input[type="text"],
#project_import form input[type="url"],
#project_import form input[type="email"],
#project_import form input[type="number"],
#project_import form input[type="password"],
#project_import form select,
#project_import form textarea {
  padding: .45em;
  width: 20em;
  border: none;
  margin-top: 0.1666665em;
  background: #e3e3e3;
  color: #343131;
  border: 1px solid #c0bfbf;
  font-family: Lato, sans-serif;
  font-size: 1em;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
}
#project_import form input[type="text"]:focus,
#project_import form input[type="url"]:focus,
#project_import form input[type="email"]:focus,
#project_import form input[type="number"]:focus,
#project_import form input[type="password"]:focus,
#project_import form select:focus,
#project_import form textarea:focus {
  border: 1px solid #f05330;
  box-shadow: inset 2px 2px #c9c9c9;
  outline: none;
}
div.col-bisect #project_import form input[type="text"],
div.col-bisect #project_import form input[type="url"],
div.col-bisect #project_import form input[type="email"],
div.col-bisect #project_import form input[type="number"],
div.col-bisect #project_import form input[type="password"],
div.col-bisect #project_import form select,
div.col-bisect #project_import form textarea {
  width: 96%;
  box-sizing: border-box;
}
#project_import form label {
  display: block;
  margin: .1em .3em .1em 0em;
  font-size: 1em;
}
#project_import form span.helptext {
  display: block;
  margin: .3em 0em;
  font-style: italic;
  font-size: .9em;
  color: #696262;
}
#project_import form input[type="radio"] {
  display: inline-block;
}
#project_import form input[type="radio"] + label {
  display: inline;
}
#project_import form input[type="checkbox"] {
  float: left;
  display: block;
  height: 1.2em;
  margin: .3em .5em;
  width: 1.2em;
  line-height: 1.5em;
}
#project_import form input[type="checkbox"] + span.helptext {
  display: block;
  overflow: hidden;
  margin: 0em;
  font-style: normal;
  color: #343131;
}
#project_import form input[type="number"] {
  width: 5em;
}
#project_import form input[type="text"].search {
  padding-left: 2em;
  background-repeat: no-repeat;
  background-position: .25em center;
  background-size: 24px 24px;
}
#project_import form input[type="text"].search {
  background-image: url('../img/icon-search.png');
}
#project_import form input[type="submit"],
#project_import form button {
  position: relative;
  padding: .33em 1em;
  border: none;
  top: -0.165em;
  font-family: Lato;
  font-size: 1.1em;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: -1px 1px #20638f;
  cursor: pointer;
  /* Raised button stuff */
  transition: all 0s ease-out;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  border-radius: .2em;
  -moz-border-radius: .2em;
  box-shadow: 0px 0.2em 0px 0px #20638f;
  -webkit-box-shadow: 0px 0.2em 0px 0px #20638f;
  margin: 1em 0em;
}
#project_import form input[type="submit"]:active,
#project_import form button:active {
  top: -0.015em;
  -webkit-box-shadow: 0px 0.05em 0px 0px #20638f;
  box-shadow: 0px 0.05em 0px 0px #20638f;
  outline: none;
}
#project_import form input[type="submit"]:hover,
#project_import form button:hover {
  background: #409ad5;
}
#project_import form textarea {
  width: 40em;
  height: 10em;
}
#project_import form .errorlist {
  color: orangered;
}
#project_import form > p {
  display: block;
  margin: .65em 0em;
  clear: both;
}
#project_import form > p + p {
  margin-top: 1em;
}
#project_import form input::-webkit-input-placeholder {
  color: #c0bfbf;
}
#project_import form input:-moz-placeholder {
  color: #c0bfbf;
  opacity: 1;
}
#project_import form input::-moz-placeholder {
  color: #c0bfbf;
  opacity: 1;
}
#project_import form input:-ms-input-placeholder {
  color: #c0bfbf;
}
div.project-import-remote ul.remote-repos-empty div.project-import-providers {
  margin-top: 1em;
  text-align: center;
}
div.project-import-remote ul.remote-repos-empty div.project-import-providers button {
  margin-top: 0em;
  margin-bottom: 0em;
}
div.project-import-remote ul.remote-repos li.remote-repo {
  padding: .4em 3em;
  line-height: 1em;
}
div.project-import-remote ul.remote-repos li.remote-repo div.remote-repo-info {
  height: 2.875em;
}
div.project-import-remote ul.remote-repos li.remote-repo span.remote-repo-extra {
  font-size: .9em !important;
}
div.project-import-remote ul.remote-repos li.remote-repo a.remote-repo-import,
div.project-import-remote ul.remote-repos li.remote-repo a.remote-repo-view,
div.project-import-remote ul.remote-repos li.remote-repo span.remote-repo-locked {
  display: block;
  margin: .25em 0em;
  padding: .25em .5em;
  font-size: 1.25em !important;
  font-weight: normal;
  line-height: 1em;
}
div.project-import-remote ul.remote-repos li.remote-repo a.remote-repo-import span,
div.project-import-remote ul.remote-repos li.remote-repo a.remote-repo-view span,
div.project-import-remote ul.remote-repos li.remote-repo span.remote-repo-locked span {
  display: none;
}
div.project-import-remote ul.remote-repos li.remote-repo a.remote-repo-import:before,
div.project-import-remote ul.remote-repos li.remote-repo a.remote-repo-view:before,
div.project-import-remote ul.remote-repos li.remote-repo span.remote-repo-locked:before {
  width: 1em;
  height: 1em;
  padding-right: .1em;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
div.project-import-remote ul.remote-repos li.remote-repo a.remote-repo-import:before {
  content: "\e07b";
}
div.project-import-remote ul.remote-repos li.remote-repo a.remote-repo-view:before {
  content: "\e11d";
}
div.project-import-remote ul.remote-repos li.remote-repo span.remote-repo-locked:before {
  content: "\e0a1";
}
div.project-import-remote ul.remote-repos li.remote-repo span.remote-repo-extra.remote-repo-extra-url:before {
  width: 1em;
  height: 1em;
  padding-right: .1em;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  content: "\e078";
}
div.project-import-remote ul.remote-repos li.remote-repo span.remote-repo-extra.remote-repo-extra-locked:before {
  width: 1em;
  height: 1em;
  padding-right: .1em;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  content: "\e137";
}
div.project-import-remote button.remote-sync {
  position: relative;
  padding: .33em 1em;
  border: none;
  top: -0.165em;
  font-family: Lato;
  font-size: 1.1em;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: -1px 1px #20638f;
  cursor: pointer;
  /* Raised button stuff */
  transition: all 0s ease-out;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  border-radius: .2em;
  -moz-border-radius: .2em;
  box-shadow: 0px 0.2em 0px 0px #20638f;
  -webkit-box-shadow: 0px 0.2em 0px 0px #20638f;
  margin: 1em !important;
}
div.project-import-remote button.remote-sync:active {
  top: -0.015em;
  -webkit-box-shadow: 0px 0.05em 0px 0px #20638f;
  box-shadow: 0px 0.05em 0px 0px #20638f;
  outline: none;
}
div.project-import-remote button.remote-sync:hover {
  background: #409ad5;
}
div.project-import-remote button.remote-sync span {
  display: none;
}
div.project-import-remote button.remote-sync:before {
  width: 1em;
  height: 1em;
  padding-right: .1em;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  content: "\e020";
  font-size: 1.25em;
}
div.project-import-remote span.remote-sync-loader {
  margin: 1em !important;
}
div.project-import-sidebar ul.remote-orgs li.remote-org {
  font-size: 1em;
  line-height: 1.5em;
}
#build_list {
  *zoom: 1;
}
#build_list:before,
#build_list:after {
  content: "";
  display: table;
}
#build_list:after {
  clear: both;
}
#build_list .module-header form {
  font-size: .8em;
}
#build_list .module-header form input[type="text"],
#build_list .module-header form input[type="url"],
#build_list .module-header form input[type="email"],
#build_list .module-header form input[type="number"],
#build_list .module-header form input[type="password"],
#build_list .module-header form select,
#build_list .module-header form textarea {
  padding: .45em;
  width: 20em;
  border: none;
  margin-top: 0.1666665em;
  background: #e3e3e3;
  color: #343131;
  border: 1px solid #c0bfbf;
  font-family: Lato, sans-serif;
  font-size: 1em;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
}
#build_list .module-header form input[type="text"]:focus,
#build_list .module-header form input[type="url"]:focus,
#build_list .module-header form input[type="email"]:focus,
#build_list .module-header form input[type="number"]:focus,
#build_list .module-header form input[type="password"]:focus,
#build_list .module-header form select:focus,
#build_list .module-header form textarea:focus {
  border: 1px solid #f05330;
  box-shadow: inset 2px 2px #c9c9c9;
  outline: none;
}
div.col-bisect #build_list .module-header form input[type="text"],
div.col-bisect #build_list .module-header form input[type="url"],
div.col-bisect #build_list .module-header form input[type="email"],
div.col-bisect #build_list .module-header form input[type="number"],
div.col-bisect #build_list .module-header form input[type="password"],
div.col-bisect #build_list .module-header form select,
div.col-bisect #build_list .module-header form textarea {
  width: 96%;
  box-sizing: border-box;
}
#build_list .module-header form label {
  display: block;
  margin: .1em .3em .1em 0em;
  font-size: 1em;
}
#build_list .module-header form span.helptext {
  display: block;
  margin: .3em 0em;
  font-style: italic;
  font-size: .9em;
  color: #696262;
}
#build_list .module-header form input[type="radio"] {
  display: inline-block;
}
#build_list .module-header form input[type="radio"] + label {
  display: inline;
}
#build_list .module-header form input[type="checkbox"] {
  float: left;
  display: block;
  height: 1.2em;
  margin: .3em .5em;
  width: 1.2em;
  line-height: 1.5em;
}
#build_list .module-header form input[type="checkbox"] + span.helptext {
  display: block;
  overflow: hidden;
  margin: 0em;
  font-style: normal;
  color: #343131;
}
#build_list .module-header form input[type="number"] {
  width: 5em;
}
#build_list .module-header form input[type="text"].search {
  padding-left: 2em;
  background-repeat: no-repeat;
  background-position: .25em center;
  background-size: 24px 24px;
}
#build_list .module-header form input[type="text"].search {
  background-image: url('../img/icon-search.png');
}
#build_list .module-header form input[type="submit"],
#build_list .module-header form button {
  position: relative;
  padding: .33em 1em;
  border: none;
  top: -0.165em;
  font-family: Lato;
  font-size: 1.1em;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: -1px 1px #20638f;
  cursor: pointer;
  /* Raised button stuff */
  transition: all 0s ease-out;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  border-radius: .2em;
  -moz-border-radius: .2em;
  box-shadow: 0px 0.2em 0px 0px #20638f;
  -webkit-box-shadow: 0px 0.2em 0px 0px #20638f;
  margin: 1em 0em;
}
#build_list .module-header form input[type="submit"]:active,
#build_list .module-header form button:active {
  top: -0.015em;
  -webkit-box-shadow: 0px 0.05em 0px 0px #20638f;
  box-shadow: 0px 0.05em 0px 0px #20638f;
  outline: none;
}
#build_list .module-header form input[type="submit"]:hover,
#build_list .module-header form button:hover {
  background: #409ad5;
}
#build_list .module-header form textarea {
  width: 40em;
  height: 10em;
}
#build_list .module-header form .errorlist {
  color: orangered;
}
#build_list .module-header form > p {
  display: block;
  margin: .65em 0em;
  clear: both;
}
#build_list .module-header form > p + p {
  margin-top: 1em;
}
#build_list .module-header form input::-webkit-input-placeholder {
  color: #c0bfbf;
}
#build_list .module-header form input:-moz-placeholder {
  color: #c0bfbf;
  opacity: 1;
}
#build_list .module-header form input::-moz-placeholder {
  color: #c0bfbf;
  opacity: 1;
}
#build_list .module-header form input:-ms-input-placeholder {
  color: #c0bfbf;
}
#build_list .module-header form select {
  width: 10em;
}
div.project-dashboard-right div.module.search {
  font-family: Lato;
  font-size: 1em;
  background: #f5f2e9;
  color: #343131;
  padding: .5em;
  margin-bottom: .2em;
  border-radius: .3em;
}
div.project-dashboard-right div.module.search a {
  text-decoration: none;
}
div.project-dashboard-right div.module.search a:link,
div.project-dashboard-right div.module.search a:visited {
  color: #409ad5;
}
div.project-dashboard-right div.module.search a:hover,
div.project-dashboard-right div.module.search a:active {
  color: #89bddd;
}
div.project-dashboard-right div.module.search input[type="text"] {
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
div.project-dashboard-right div.onboard-accounts {
  margin-bottom: .2em;
}
div.project-dashboard-right div.module.organizations {
  margin-top: 0em;
}
div.project-dashboard-right div.module.organizations ul {
  padding: 0em 1em;
  list-style: none;
}
div.project-dashboard-right div.module.organizations ul li {
  margin: .3em 0em;
}
span.build-state {
  padding: .1em .3em;
  margin-left: .3em;
  border-radius: .3em;
  color: #fff;
  font-style: italic;
}
span.build-state.build-state-passing {
  background: rgba(0, 180, 0, 0.6);
}
span.build-state.build-state-failing {
  background: rgba(230, 80, 40, 0.6);
}
#team_project_edit #id_projects > li > label {
  clear: left;
}
dl.project-key-detail dd.project-key-fingerprint pre,
dl.project-key-detail dd.project-key-public pre {
  word-break: break-all;
}
div.module.project-keys-list li.project-keys-key {
  font-family: monospace;
  font-size: .9em;
  word-break: break-all;
}
div.module.project-keys-list li.project-keys-key:before {
  width: 1em;
  height: 1em;
  padding-right: .1em;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  content: '\e096';
}
div.module-list-wrapper.httpexchanges li span.status {
  padding: .2em .4em;
  margin-right: .3em;
  border-radius: .3em;
  color: #fff;
}
div.module-list-wrapper.httpexchanges li span.status.status-pass {
  background: #5a5;
}
div.module-list-wrapper.httpexchanges li span.status.status-fail {
  background: #a55;
}
div.integration-details {
  margin: 1em;
}
div.integration-details dl dt,
div.httpexchange dl dt {
  display: inline-block;
  font-weight: bold;
}
div.integration-details dl dd,
div.httpexchange dl dd {
  display: inline;
}
div.httpexchange dl dt {
  font-size: .9em;
  margin-top: 0em;
}
div.httpexchange dl dd {
  font-size: .9em;
}
div.httpexchange dl dd:after {
  display: block;
  content: '';
}
div.httpexchange div.highlight pre {
  padding: 1em;
  background: #f4f4f4;
  border: 1px solid #ccc;
  font-size: .9em;
  white-space: pre;
}
/* Pygments */
div.highlight pre .hll {
  background-color: #ffffcc;
}
div.highlight pre .c {
  color: #60a0b0;
  font-style: italic;
}
/* Comment */
div.highlight pre .err {
  border: 1px solid #FF0000;
}
/* Error */
div.highlight pre .k {
  color: #007020;
  font-weight: bold;
}
/* Keyword */
div.highlight pre .o {
  color: #666666;
}
/* Operator */
div.highlight pre .cm {
  color: #60a0b0;
  font-style: italic;
}
/* Comment.Multiline */
div.highlight pre .cp {
  color: #007020;
}
/* Comment.Preproc */
div.highlight pre .c1 {
  color: #60a0b0;
  font-style: italic;
}
/* Comment.Single */
div.highlight pre .cs {
  color: #60a0b0;
  background-color: #fff0f0;
}
/* Comment.Special */
div.highlight pre .gd {
  color: #A00000;
}
/* Generic.Deleted */
div.highlight pre .ge {
  font-style: italic;
}
/* Generic.Emph */
div.highlight pre .gr {
  color: #FF0000;
}
/* Generic.Error */
div.highlight pre .gh {
  color: #000080;
  font-weight: bold;
}
/* Generic.Heading */
div.highlight pre .gi {
  color: #00A000;
}
/* Generic.Inserted */
div.highlight pre .go {
  color: #888888;
}
/* Generic.Output */
div.highlight pre .gp {
  color: #c65d09;
  font-weight: bold;
}
/* Generic.Prompt */
div.highlight pre .gs {
  font-weight: bold;
}
/* Generic.Strong */
div.highlight pre .gu {
  color: #800080;
  font-weight: bold;
}
/* Generic.Subheading */
div.highlight pre .gt {
  color: #0044DD;
}
/* Generic.Traceback */
div.highlight pre .kc {
  color: #007020;
  font-weight: bold;
}
/* Keyword.Constant */
div.highlight pre .kd {
  color: #007020;
  font-weight: bold;
}
/* Keyword.Declaration */
div.highlight pre .kn {
  color: #007020;
  font-weight: bold;
}
/* Keyword.Namespace */
div.highlight pre .kp {
  color: #007020;
}
/* Keyword.Pseudo */
div.highlight pre .kr {
  color: #007020;
  font-weight: bold;
}
/* Keyword.Reserved */
div.highlight pre .kt {
  color: #902000;
}
/* Keyword.Type */
div.highlight pre .m {
  color: #40a070;
}
/* Literal.Number */
div.highlight pre .s {
  color: #4070a0;
}
/* Literal.String */
div.highlight pre .na {
  color: #4070a0;
}
/* Name.Attribute */
div.highlight pre .nb {
  color: #007020;
}
/* Name.Builtin */
div.highlight pre .nc {
  color: #0e84b5;
  font-weight: bold;
}
/* Name.Class */
div.highlight pre .no {
  color: #60add5;
}
/* Name.Constant */
div.highlight pre .nd {
  color: #555555;
  font-weight: bold;
}
/* Name.Decorator */
div.highlight pre .ni {
  color: #d55537;
  font-weight: bold;
}
/* Name.Entity */
div.highlight pre .ne {
  color: #007020;
}
/* Name.Exception */
div.highlight pre .nf {
  color: #06287e;
}
/* Name.Function */
div.highlight pre .nl {
  color: #002070;
  font-weight: bold;
}
/* Name.Label */
div.highlight pre .nn {
  color: #0e84b5;
  font-weight: bold;
}
/* Name.Namespace */
div.highlight pre .nt {
  color: #062873;
  font-weight: bold;
}
/* Name.Tag */
div.highlight pre .nv {
  color: #bb60d5;
}
/* Name.Variable */
div.highlight pre .ow {
  color: #007020;
  font-weight: bold;
}
/* Operator.Word */
div.highlight pre .w {
  color: #bbbbbb;
}
/* Text.Whitespace */
div.highlight pre .mb {
  color: #40a070;
}
/* Literal.Number.Bin */
div.highlight pre .mf {
  color: #40a070;
}
/* Literal.Number.Float */
div.highlight pre .mh {
  color: #40a070;
}
/* Literal.Number.Hex */
div.highlight pre .mi {
  color: #40a070;
}
/* Literal.Number.Integer */
div.highlight pre .mo {
  color: #40a070;
}
/* Literal.Number.Oct */
div.highlight pre .sb {
  color: #4070a0;
}
/* Literal.String.Backtick */
div.highlight pre .sc {
  color: #4070a0;
}
/* Literal.String.Char */
div.highlight pre .sd {
  color: #4070a0;
  font-style: italic;
}
/* Literal.String.Doc */
div.highlight pre .s2 {
  color: #4070a0;
}
/* Literal.String.Double */
div.highlight pre .se {
  color: #4070a0;
  font-weight: bold;
}
/* Literal.String.Escape */
div.highlight pre .sh {
  color: #4070a0;
}
/* Literal.String.Heredoc */
div.highlight pre .si {
  color: #70a0d0;
  font-style: italic;
}
/* Literal.String.Interpol */
div.highlight pre .sx {
  color: #c65d09;
}
/* Literal.String.Other */
div.highlight pre .sr {
  color: #235388;
}
/* Literal.String.Regex */
div.highlight pre .s1 {
  color: #4070a0;
}
/* Literal.String.Single */
div.highlight pre .ss {
  color: #517918;
}
/* Literal.String.Symbol */
div.highlight pre .bp {
  color: #007020;
}
/* Name.Builtin.Pseudo */
div.highlight pre .vc {
  color: #bb60d5;
}
/* Name.Variable.Class */
div.highlight pre .vg {
  color: #bb60d5;
}
/* Name.Variable.Global */
div.highlight pre .vi {
  color: #bb60d5;
}
/* Name.Variable.Instance */
div.highlight pre .il {
  color: #40a070;
}
/* Literal.Number.Integer.Long */
div.module.organizations.organizations-list ul > li {
  margin: .5em;
}
div.module.organizations.organizations-list ul > li img {
  vertical-align: top;
}
div.module.organizations.organizations-list ul > li a {
  font-size: 1.2em;
  line-height: 48px;
}
div.module.teams.teams-list h3 {
  margin-bottom: .3em;
  font-family: Lato;
  font-size: 1.1em;
  font-weight: bold;
}
div.module.teams.teams-list p {
  margin-top: .3em;
}
div.module.teams.teams-list span.detail.detail-team-projects {
  float: right;
  font-size: .8em;
  font-family: Lato;
  line-height: 1.6em;
}
div.module.teams.teams-list-large h3 {
  font-family: 'Bree Serif';
  font-size: 1.3em;
  font-weight: normal;
  margin: 1em 1em .65em 1em;
}
div.module.teams.teams-list-large p {
  padding: .8em;
  margin: 0em 1em 1em 1em;
  background: #fff;
  border: 1px solid #e3e3e3;
  line-height: 1em;
}
div.module.team-member-list img.gravatar {
  float: left;
  margin-right: 1em;
  height: 3em;
  width: 3em;
}
div.module.team-member-list span.detail {
  line-height: 1.5em;
  display: block;
}
div.module.team-member-list span.detail.detail-name {
  font-size: .9em;
}
div.module.team-member-list li.module-item {
  padding: .4em;
}
div.module.team-member-list li.team-member-invite {
  background-color: #efefef;
  color: #9c9595;
  font-style: italic;
}
div.module.team-member-list li.team-member-member {
  padding: .4em;
  line-height: 1.5em;
}
#organization_edit dl dd span.subscription-plan-description {
  display: block;
}
#organization_edit dl dd span.subscription-plan-description span.plan-detail {
  margin-right: .5em;
}
#organization_edit div.module.subscription-plan ul li.module-item {
  padding-left: 1.7em;
}
#organization_edit div.module.subscription-plan ul li.module-item label {
  display: inline-block;
  line-height: 1.5em;
}
#organization_edit div.module.subscription-plan ul li.module-item input[type="radio"] {
  width: 1.1em;
  height: 4em;
  margin-left: -1.5em;
  margin-right: .4em;
  vertical-align: top;
}
#organization_edit div.module.subscription-plan ul li.module-item span.subscription-plan-description {
  display: block;
  color: #9c9595;
  font-style: italic;
}
#organization_edit div.module.subscription-plan ul li.module-item span.subscription-plan-description ul {
  margin: .65em;
}
#organization_edit div.module.subscription-plan ul li.module-item span.plan-detail {
  margin-right: .5em;
}
#organization_edit div.module.subscription-plan ul li.module-item span.plan-detail:before {
  font-size: 1.2em;
}
#organization_edit div.module.subscription-plan ul li.module-item.plan-disabled {
  background: #efefef;
  color: #9c9595;
}
#organization_edit div.module.subscription-plan ul li.module-item.plan-disabled span.plan-warning:before {
  width: 1em;
  height: 1em;
  padding-right: .1em;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  content: '\e136';
  color: orangered;
}
#organization_edit div.module.subscription-plan ul li.module-item.plan-custom {
  padding: .75em;
  line-height: 1.5em;
}
#organization_edit div.module.subscription-plan ul li.module-item.plan-custom a.plan-custom-contact {
  padding: .33em 1em;
  border: none;
  top: 0em;
  font-size: 1.2em;
  font-weight: bold;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: 0px 1px 0px #164666;
  cursor: pointer;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
  box-shadow: none;
  -webkit-box-shadow: : none;
  display: inline-block;
  width: auto;
  margin-top: .75em;
  font-size: 1em;
}
#organization_edit div.module.subscription-plan ul li.module-item.plan-custom a.plan-custom-contact:hover,
#organization_edit div.module.subscription-plan ul li.module-item.plan-custom a.plan-custom-contact:active {
  top: 0em;
  outline: none;
  box-shadow: none;
  background: #5399c6;
  color: #fcfcfc;
}
#organization_edit span.plan-detail:before {
  width: 1em;
  height: 1em;
  padding-right: .1em;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  height: auto;
}
#organization_edit span.plan-detail.plan-detail-users:before {
  content: '\e12c';
}
#organization_edit span.plan-detail.plan-detail-pageviews:before {
  content: '\e06f';
}
ul.socialaccount_providers a.socialaccount-provider {
  padding: .33em 1em;
  border: none;
  top: 0em;
  font-size: 1.2em;
  font-weight: bold;
  background: #a3a3a3;
  color: #fcfcfc;
  text-shadow: 0px 1px 0px #707070;
  cursor: pointer;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
  box-shadow: none;
  -webkit-box-shadow: : none;
  display: inline-block;
  font-size: 1em;
  line-height: 2em;
  margin: 0em .3em .3em .3em;
}
ul.socialaccount_providers a.socialaccount-provider:hover,
ul.socialaccount_providers a.socialaccount-provider:active {
  top: 0em;
  outline: none;
  box-shadow: none;
  background: #b5b5b5;
  color: #fcfcfc;
}
div.module.connected-services li.module-item input[type="submit"] {
  line-height: 1.5em;
  font-size: 1em;
  margin: .2em .3em;
}
div.module.connected-services img.account-gravatar {
  vertical-align: middle;
  width: 1.5em;
  height: 1.5em;
}
.homepage-ads-large,
.homepage-ads-small,
.homepage-users,
.homepage-cta,
.homepage-cta-top,
.homepage-features,
.homepage-pricing-questions,
.homepage-feature-questions {
  overflow: hidden;
}
.homepage-ads-large .row,
.homepage-ads-small .row,
.homepage-users .row,
.homepage-cta .row,
.homepage-cta-top .row,
.homepage-features .row,
.homepage-pricing-questions .row,
.homepage-feature-questions .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
.homepage-ads-large .row:before,
.homepage-ads-small .row:before,
.homepage-users .row:before,
.homepage-cta .row:before,
.homepage-cta-top .row:before,
.homepage-features .row:before,
.homepage-pricing-questions .row:before,
.homepage-feature-questions .row:before,
.homepage-ads-large .row:after,
.homepage-ads-small .row:after,
.homepage-users .row:after,
.homepage-cta .row:after,
.homepage-cta-top .row:after,
.homepage-features .row:after,
.homepage-pricing-questions .row:after,
.homepage-feature-questions .row:after {
  content: "";
  display: table;
}
.homepage-ads-large .row:after,
.homepage-ads-small .row:after,
.homepage-users .row:after,
.homepage-cta .row:after,
.homepage-cta-top .row:after,
.homepage-features .row:after,
.homepage-pricing-questions .row:after,
.homepage-feature-questions .row:after {
  clear: both;
}
.homepage-ads-large .row .col.fill,
.homepage-ads-small .row .col.fill,
.homepage-users .row .col.fill,
.homepage-cta .row .col.fill,
.homepage-cta-top .row .col.fill,
.homepage-features .row .col.fill,
.homepage-pricing-questions .row .col.fill,
.homepage-feature-questions .row .col.fill,
.homepage-ads-large .row .col.col-fill,
.homepage-ads-small .row .col.col-fill,
.homepage-users .row .col.col-fill,
.homepage-cta .row .col.col-fill,
.homepage-cta-top .row .col.col-fill,
.homepage-features .row .col.col-fill,
.homepage-pricing-questions .row .col.col-fill,
.homepage-feature-questions .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
.homepage-ads-large .row .col.fill:before,
.homepage-ads-small .row .col.fill:before,
.homepage-users .row .col.fill:before,
.homepage-cta .row .col.fill:before,
.homepage-cta-top .row .col.fill:before,
.homepage-features .row .col.fill:before,
.homepage-pricing-questions .row .col.fill:before,
.homepage-feature-questions .row .col.fill:before,
.homepage-ads-large .row .col.col-fill:before,
.homepage-ads-small .row .col.col-fill:before,
.homepage-users .row .col.col-fill:before,
.homepage-cta .row .col.col-fill:before,
.homepage-cta-top .row .col.col-fill:before,
.homepage-features .row .col.col-fill:before,
.homepage-pricing-questions .row .col.col-fill:before,
.homepage-feature-questions .row .col.col-fill:before,
.homepage-ads-large .row .col.fill:after,
.homepage-ads-small .row .col.fill:after,
.homepage-users .row .col.fill:after,
.homepage-cta .row .col.fill:after,
.homepage-cta-top .row .col.fill:after,
.homepage-features .row .col.fill:after,
.homepage-pricing-questions .row .col.fill:after,
.homepage-feature-questions .row .col.fill:after,
.homepage-ads-large .row .col.col-fill:after,
.homepage-ads-small .row .col.col-fill:after,
.homepage-users .row .col.col-fill:after,
.homepage-cta .row .col.col-fill:after,
.homepage-cta-top .row .col.col-fill:after,
.homepage-features .row .col.col-fill:after,
.homepage-pricing-questions .row .col.col-fill:after,
.homepage-feature-questions .row .col.col-fill:after {
  content: "";
  display: table;
}
.homepage-ads-large .row .col.fill:after,
.homepage-ads-small .row .col.fill:after,
.homepage-users .row .col.fill:after,
.homepage-cta .row .col.fill:after,
.homepage-cta-top .row .col.fill:after,
.homepage-features .row .col.fill:after,
.homepage-pricing-questions .row .col.fill:after,
.homepage-feature-questions .row .col.fill:after,
.homepage-ads-large .row .col.col-fill:after,
.homepage-ads-small .row .col.col-fill:after,
.homepage-users .row .col.col-fill:after,
.homepage-cta .row .col.col-fill:after,
.homepage-cta-top .row .col.col-fill:after,
.homepage-features .row .col.col-fill:after,
.homepage-pricing-questions .row .col.col-fill:after,
.homepage-feature-questions .row .col.col-fill:after {
  clear: both;
}
.homepage-ads-large .row .col.center,
.homepage-ads-small .row .col.center,
.homepage-users .row .col.center,
.homepage-cta .row .col.center,
.homepage-cta-top .row .col.center,
.homepage-features .row .col.center,
.homepage-pricing-questions .row .col.center,
.homepage-feature-questions .row .col.center,
.homepage-ads-large .row .col.col-center,
.homepage-ads-small .row .col.col-center,
.homepage-users .row .col.col-center,
.homepage-cta .row .col.col-center,
.homepage-cta-top .row .col.col-center,
.homepage-features .row .col.col-center,
.homepage-pricing-questions .row .col.col-center,
.homepage-feature-questions .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
.homepage-ads-large .row .col.center:before,
.homepage-ads-small .row .col.center:before,
.homepage-users .row .col.center:before,
.homepage-cta .row .col.center:before,
.homepage-cta-top .row .col.center:before,
.homepage-features .row .col.center:before,
.homepage-pricing-questions .row .col.center:before,
.homepage-feature-questions .row .col.center:before,
.homepage-ads-large .row .col.col-center:before,
.homepage-ads-small .row .col.col-center:before,
.homepage-users .row .col.col-center:before,
.homepage-cta .row .col.col-center:before,
.homepage-cta-top .row .col.col-center:before,
.homepage-features .row .col.col-center:before,
.homepage-pricing-questions .row .col.col-center:before,
.homepage-feature-questions .row .col.col-center:before,
.homepage-ads-large .row .col.center:after,
.homepage-ads-small .row .col.center:after,
.homepage-users .row .col.center:after,
.homepage-cta .row .col.center:after,
.homepage-cta-top .row .col.center:after,
.homepage-features .row .col.center:after,
.homepage-pricing-questions .row .col.center:after,
.homepage-feature-questions .row .col.center:after,
.homepage-ads-large .row .col.col-center:after,
.homepage-ads-small .row .col.col-center:after,
.homepage-users .row .col.col-center:after,
.homepage-cta .row .col.col-center:after,
.homepage-cta-top .row .col.col-center:after,
.homepage-features .row .col.col-center:after,
.homepage-pricing-questions .row .col.col-center:after,
.homepage-feature-questions .row .col.col-center:after {
  content: "";
  display: table;
}
.homepage-ads-large .row .col.center:after,
.homepage-ads-small .row .col.center:after,
.homepage-users .row .col.center:after,
.homepage-cta .row .col.center:after,
.homepage-cta-top .row .col.center:after,
.homepage-features .row .col.center:after,
.homepage-pricing-questions .row .col.center:after,
.homepage-feature-questions .row .col.center:after,
.homepage-ads-large .row .col.col-center:after,
.homepage-ads-small .row .col.col-center:after,
.homepage-users .row .col.col-center:after,
.homepage-cta .row .col.col-center:after,
.homepage-cta-top .row .col.col-center:after,
.homepage-features .row .col.col-center:after,
.homepage-pricing-questions .row .col.col-center:after,
.homepage-feature-questions .row .col.col-center:after {
  clear: both;
}
.homepage-ads-large .row .col.bisect,
.homepage-ads-small .row .col.bisect,
.homepage-users .row .col.bisect,
.homepage-cta .row .col.bisect,
.homepage-cta-top .row .col.bisect,
.homepage-features .row .col.bisect,
.homepage-pricing-questions .row .col.bisect,
.homepage-feature-questions .row .col.bisect,
.homepage-ads-large .row .col.col-bisect,
.homepage-ads-small .row .col.col-bisect,
.homepage-users .row .col.col-bisect,
.homepage-cta .row .col.col-bisect,
.homepage-cta-top .row .col.col-bisect,
.homepage-features .row .col.col-bisect,
.homepage-pricing-questions .row .col.col-bisect,
.homepage-feature-questions .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
.homepage-ads-large .row .col.bisect:before,
.homepage-ads-small .row .col.bisect:before,
.homepage-users .row .col.bisect:before,
.homepage-cta .row .col.bisect:before,
.homepage-cta-top .row .col.bisect:before,
.homepage-features .row .col.bisect:before,
.homepage-pricing-questions .row .col.bisect:before,
.homepage-feature-questions .row .col.bisect:before,
.homepage-ads-large .row .col.col-bisect:before,
.homepage-ads-small .row .col.col-bisect:before,
.homepage-users .row .col.col-bisect:before,
.homepage-cta .row .col.col-bisect:before,
.homepage-cta-top .row .col.col-bisect:before,
.homepage-features .row .col.col-bisect:before,
.homepage-pricing-questions .row .col.col-bisect:before,
.homepage-feature-questions .row .col.col-bisect:before,
.homepage-ads-large .row .col.bisect:after,
.homepage-ads-small .row .col.bisect:after,
.homepage-users .row .col.bisect:after,
.homepage-cta .row .col.bisect:after,
.homepage-cta-top .row .col.bisect:after,
.homepage-features .row .col.bisect:after,
.homepage-pricing-questions .row .col.bisect:after,
.homepage-feature-questions .row .col.bisect:after,
.homepage-ads-large .row .col.col-bisect:after,
.homepage-ads-small .row .col.col-bisect:after,
.homepage-users .row .col.col-bisect:after,
.homepage-cta .row .col.col-bisect:after,
.homepage-cta-top .row .col.col-bisect:after,
.homepage-features .row .col.col-bisect:after,
.homepage-pricing-questions .row .col.col-bisect:after,
.homepage-feature-questions .row .col.col-bisect:after {
  content: "";
  display: table;
}
.homepage-ads-large .row .col.bisect:after,
.homepage-ads-small .row .col.bisect:after,
.homepage-users .row .col.bisect:after,
.homepage-cta .row .col.bisect:after,
.homepage-cta-top .row .col.bisect:after,
.homepage-features .row .col.bisect:after,
.homepage-pricing-questions .row .col.bisect:after,
.homepage-feature-questions .row .col.bisect:after,
.homepage-ads-large .row .col.col-bisect:after,
.homepage-ads-small .row .col.col-bisect:after,
.homepage-users .row .col.col-bisect:after,
.homepage-cta .row .col.col-bisect:after,
.homepage-cta-top .row .col.col-bisect:after,
.homepage-features .row .col.col-bisect:after,
.homepage-pricing-questions .row .col.col-bisect:after,
.homepage-feature-questions .row .col.col-bisect:after {
  clear: both;
}
.homepage-ads-large .row .col.trisect,
.homepage-ads-small .row .col.trisect,
.homepage-users .row .col.trisect,
.homepage-cta .row .col.trisect,
.homepage-cta-top .row .col.trisect,
.homepage-features .row .col.trisect,
.homepage-pricing-questions .row .col.trisect,
.homepage-feature-questions .row .col.trisect,
.homepage-ads-large .row .col.col-trisect,
.homepage-ads-small .row .col.col-trisect,
.homepage-users .row .col.col-trisect,
.homepage-cta .row .col.col-trisect,
.homepage-cta-top .row .col.col-trisect,
.homepage-features .row .col.col-trisect,
.homepage-pricing-questions .row .col.col-trisect,
.homepage-feature-questions .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
.homepage-ads-large .row .col.trisect:before,
.homepage-ads-small .row .col.trisect:before,
.homepage-users .row .col.trisect:before,
.homepage-cta .row .col.trisect:before,
.homepage-cta-top .row .col.trisect:before,
.homepage-features .row .col.trisect:before,
.homepage-pricing-questions .row .col.trisect:before,
.homepage-feature-questions .row .col.trisect:before,
.homepage-ads-large .row .col.col-trisect:before,
.homepage-ads-small .row .col.col-trisect:before,
.homepage-users .row .col.col-trisect:before,
.homepage-cta .row .col.col-trisect:before,
.homepage-cta-top .row .col.col-trisect:before,
.homepage-features .row .col.col-trisect:before,
.homepage-pricing-questions .row .col.col-trisect:before,
.homepage-feature-questions .row .col.col-trisect:before,
.homepage-ads-large .row .col.trisect:after,
.homepage-ads-small .row .col.trisect:after,
.homepage-users .row .col.trisect:after,
.homepage-cta .row .col.trisect:after,
.homepage-cta-top .row .col.trisect:after,
.homepage-features .row .col.trisect:after,
.homepage-pricing-questions .row .col.trisect:after,
.homepage-feature-questions .row .col.trisect:after,
.homepage-ads-large .row .col.col-trisect:after,
.homepage-ads-small .row .col.col-trisect:after,
.homepage-users .row .col.col-trisect:after,
.homepage-cta .row .col.col-trisect:after,
.homepage-cta-top .row .col.col-trisect:after,
.homepage-features .row .col.col-trisect:after,
.homepage-pricing-questions .row .col.col-trisect:after,
.homepage-feature-questions .row .col.col-trisect:after {
  content: "";
  display: table;
}
.homepage-ads-large .row .col.trisect:after,
.homepage-ads-small .row .col.trisect:after,
.homepage-users .row .col.trisect:after,
.homepage-cta .row .col.trisect:after,
.homepage-cta-top .row .col.trisect:after,
.homepage-features .row .col.trisect:after,
.homepage-pricing-questions .row .col.trisect:after,
.homepage-feature-questions .row .col.trisect:after,
.homepage-ads-large .row .col.col-trisect:after,
.homepage-ads-small .row .col.col-trisect:after,
.homepage-users .row .col.col-trisect:after,
.homepage-cta .row .col.col-trisect:after,
.homepage-cta-top .row .col.col-trisect:after,
.homepage-features .row .col.col-trisect:after,
.homepage-pricing-questions .row .col.col-trisect:after,
.homepage-feature-questions .row .col.col-trisect:after {
  clear: both;
}
.homepage-ads-large .row .col.major,
.homepage-ads-small .row .col.major,
.homepage-users .row .col.major,
.homepage-cta .row .col.major,
.homepage-cta-top .row .col.major,
.homepage-features .row .col.major,
.homepage-pricing-questions .row .col.major,
.homepage-feature-questions .row .col.major,
.homepage-ads-large .row .col.col-major,
.homepage-ads-small .row .col.col-major,
.homepage-users .row .col.col-major,
.homepage-cta .row .col.col-major,
.homepage-cta-top .row .col.col-major,
.homepage-features .row .col.col-major,
.homepage-pricing-questions .row .col.col-major,
.homepage-feature-questions .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
.homepage-ads-large .row .col.major:before,
.homepage-ads-small .row .col.major:before,
.homepage-users .row .col.major:before,
.homepage-cta .row .col.major:before,
.homepage-cta-top .row .col.major:before,
.homepage-features .row .col.major:before,
.homepage-pricing-questions .row .col.major:before,
.homepage-feature-questions .row .col.major:before,
.homepage-ads-large .row .col.col-major:before,
.homepage-ads-small .row .col.col-major:before,
.homepage-users .row .col.col-major:before,
.homepage-cta .row .col.col-major:before,
.homepage-cta-top .row .col.col-major:before,
.homepage-features .row .col.col-major:before,
.homepage-pricing-questions .row .col.col-major:before,
.homepage-feature-questions .row .col.col-major:before,
.homepage-ads-large .row .col.major:after,
.homepage-ads-small .row .col.major:after,
.homepage-users .row .col.major:after,
.homepage-cta .row .col.major:after,
.homepage-cta-top .row .col.major:after,
.homepage-features .row .col.major:after,
.homepage-pricing-questions .row .col.major:after,
.homepage-feature-questions .row .col.major:after,
.homepage-ads-large .row .col.col-major:after,
.homepage-ads-small .row .col.col-major:after,
.homepage-users .row .col.col-major:after,
.homepage-cta .row .col.col-major:after,
.homepage-cta-top .row .col.col-major:after,
.homepage-features .row .col.col-major:after,
.homepage-pricing-questions .row .col.col-major:after,
.homepage-feature-questions .row .col.col-major:after {
  content: "";
  display: table;
}
.homepage-ads-large .row .col.major:after,
.homepage-ads-small .row .col.major:after,
.homepage-users .row .col.major:after,
.homepage-cta .row .col.major:after,
.homepage-cta-top .row .col.major:after,
.homepage-features .row .col.major:after,
.homepage-pricing-questions .row .col.major:after,
.homepage-feature-questions .row .col.major:after,
.homepage-ads-large .row .col.col-major:after,
.homepage-ads-small .row .col.col-major:after,
.homepage-users .row .col.col-major:after,
.homepage-cta .row .col.col-major:after,
.homepage-cta-top .row .col.col-major:after,
.homepage-features .row .col.col-major:after,
.homepage-pricing-questions .row .col.col-major:after,
.homepage-feature-questions .row .col.col-major:after {
  clear: both;
}
.homepage-ads-large .row .col.minor,
.homepage-ads-small .row .col.minor,
.homepage-users .row .col.minor,
.homepage-cta .row .col.minor,
.homepage-cta-top .row .col.minor,
.homepage-features .row .col.minor,
.homepage-pricing-questions .row .col.minor,
.homepage-feature-questions .row .col.minor,
.homepage-ads-large .row .col.col-minor,
.homepage-ads-small .row .col.col-minor,
.homepage-users .row .col.col-minor,
.homepage-cta .row .col.col-minor,
.homepage-cta-top .row .col.col-minor,
.homepage-features .row .col.col-minor,
.homepage-pricing-questions .row .col.col-minor,
.homepage-feature-questions .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
.homepage-ads-large .row .col.minor:before,
.homepage-ads-small .row .col.minor:before,
.homepage-users .row .col.minor:before,
.homepage-cta .row .col.minor:before,
.homepage-cta-top .row .col.minor:before,
.homepage-features .row .col.minor:before,
.homepage-pricing-questions .row .col.minor:before,
.homepage-feature-questions .row .col.minor:before,
.homepage-ads-large .row .col.col-minor:before,
.homepage-ads-small .row .col.col-minor:before,
.homepage-users .row .col.col-minor:before,
.homepage-cta .row .col.col-minor:before,
.homepage-cta-top .row .col.col-minor:before,
.homepage-features .row .col.col-minor:before,
.homepage-pricing-questions .row .col.col-minor:before,
.homepage-feature-questions .row .col.col-minor:before,
.homepage-ads-large .row .col.minor:after,
.homepage-ads-small .row .col.minor:after,
.homepage-users .row .col.minor:after,
.homepage-cta .row .col.minor:after,
.homepage-cta-top .row .col.minor:after,
.homepage-features .row .col.minor:after,
.homepage-pricing-questions .row .col.minor:after,
.homepage-feature-questions .row .col.minor:after,
.homepage-ads-large .row .col.col-minor:after,
.homepage-ads-small .row .col.col-minor:after,
.homepage-users .row .col.col-minor:after,
.homepage-cta .row .col.col-minor:after,
.homepage-cta-top .row .col.col-minor:after,
.homepage-features .row .col.col-minor:after,
.homepage-pricing-questions .row .col.col-minor:after,
.homepage-feature-questions .row .col.col-minor:after {
  content: "";
  display: table;
}
.homepage-ads-large .row .col.minor:after,
.homepage-ads-small .row .col.minor:after,
.homepage-users .row .col.minor:after,
.homepage-cta .row .col.minor:after,
.homepage-cta-top .row .col.minor:after,
.homepage-features .row .col.minor:after,
.homepage-pricing-questions .row .col.minor:after,
.homepage-feature-questions .row .col.minor:after,
.homepage-ads-large .row .col.col-minor:after,
.homepage-ads-small .row .col.col-minor:after,
.homepage-users .row .col.col-minor:after,
.homepage-cta .row .col.col-minor:after,
.homepage-cta-top .row .col.col-minor:after,
.homepage-features .row .col.col-minor:after,
.homepage-pricing-questions .row .col.col-minor:after,
.homepage-feature-questions .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  .homepage-ads-large,
  .homepage-ads-small,
  .homepage-users,
  .homepage-cta,
  .homepage-cta-top,
  .homepage-features,
  .homepage-pricing-questions,
  .homepage-feature-questions {
    overflow: hidden;
  }
  .homepage-ads-large .row,
  .homepage-ads-small .row,
  .homepage-users .row,
  .homepage-cta .row,
  .homepage-cta-top .row,
  .homepage-features .row,
  .homepage-pricing-questions .row,
  .homepage-feature-questions .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  .homepage-ads-large .row:before,
  .homepage-ads-small .row:before,
  .homepage-users .row:before,
  .homepage-cta .row:before,
  .homepage-cta-top .row:before,
  .homepage-features .row:before,
  .homepage-pricing-questions .row:before,
  .homepage-feature-questions .row:before,
  .homepage-ads-large .row:after,
  .homepage-ads-small .row:after,
  .homepage-users .row:after,
  .homepage-cta .row:after,
  .homepage-cta-top .row:after,
  .homepage-features .row:after,
  .homepage-pricing-questions .row:after,
  .homepage-feature-questions .row:after {
    content: "";
    display: table;
  }
  .homepage-ads-large .row:after,
  .homepage-ads-small .row:after,
  .homepage-users .row:after,
  .homepage-cta .row:after,
  .homepage-cta-top .row:after,
  .homepage-features .row:after,
  .homepage-pricing-questions .row:after,
  .homepage-feature-questions .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  .homepage-ads-large,
  .homepage-ads-small,
  .homepage-users,
  .homepage-cta,
  .homepage-cta-top,
  .homepage-features,
  .homepage-pricing-questions,
  .homepage-feature-questions {
    overflow: hidden;
  }
  .homepage-ads-large .row,
  .homepage-ads-small .row,
  .homepage-users .row,
  .homepage-cta .row,
  .homepage-cta-top .row,
  .homepage-features .row,
  .homepage-pricing-questions .row,
  .homepage-feature-questions .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  .homepage-ads-large .row:before,
  .homepage-ads-small .row:before,
  .homepage-users .row:before,
  .homepage-cta .row:before,
  .homepage-cta-top .row:before,
  .homepage-features .row:before,
  .homepage-pricing-questions .row:before,
  .homepage-feature-questions .row:before,
  .homepage-ads-large .row:after,
  .homepage-ads-small .row:after,
  .homepage-users .row:after,
  .homepage-cta .row:after,
  .homepage-cta-top .row:after,
  .homepage-features .row:after,
  .homepage-pricing-questions .row:after,
  .homepage-feature-questions .row:after {
    content: "";
    display: table;
  }
  .homepage-ads-large .row:after,
  .homepage-ads-small .row:after,
  .homepage-users .row:after,
  .homepage-cta .row:after,
  .homepage-cta-top .row:after,
  .homepage-features .row:after,
  .homepage-pricing-questions .row:after,
  .homepage-feature-questions .row:after {
    clear: both;
  }
  .homepage-ads-large .row .col.fill,
  .homepage-ads-small .row .col.fill,
  .homepage-users .row .col.fill,
  .homepage-cta .row .col.fill,
  .homepage-cta-top .row .col.fill,
  .homepage-features .row .col.fill,
  .homepage-pricing-questions .row .col.fill,
  .homepage-feature-questions .row .col.fill,
  .homepage-ads-large .row .col.col-fill,
  .homepage-ads-small .row .col.col-fill,
  .homepage-users .row .col.col-fill,
  .homepage-cta .row .col.col-fill,
  .homepage-cta-top .row .col.col-fill,
  .homepage-features .row .col.col-fill,
  .homepage-pricing-questions .row .col.col-fill,
  .homepage-feature-questions .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  .homepage-ads-large .row .col.fill:before,
  .homepage-ads-small .row .col.fill:before,
  .homepage-users .row .col.fill:before,
  .homepage-cta .row .col.fill:before,
  .homepage-cta-top .row .col.fill:before,
  .homepage-features .row .col.fill:before,
  .homepage-pricing-questions .row .col.fill:before,
  .homepage-feature-questions .row .col.fill:before,
  .homepage-ads-large .row .col.col-fill:before,
  .homepage-ads-small .row .col.col-fill:before,
  .homepage-users .row .col.col-fill:before,
  .homepage-cta .row .col.col-fill:before,
  .homepage-cta-top .row .col.col-fill:before,
  .homepage-features .row .col.col-fill:before,
  .homepage-pricing-questions .row .col.col-fill:before,
  .homepage-feature-questions .row .col.col-fill:before,
  .homepage-ads-large .row .col.fill:after,
  .homepage-ads-small .row .col.fill:after,
  .homepage-users .row .col.fill:after,
  .homepage-cta .row .col.fill:after,
  .homepage-cta-top .row .col.fill:after,
  .homepage-features .row .col.fill:after,
  .homepage-pricing-questions .row .col.fill:after,
  .homepage-feature-questions .row .col.fill:after,
  .homepage-ads-large .row .col.col-fill:after,
  .homepage-ads-small .row .col.col-fill:after,
  .homepage-users .row .col.col-fill:after,
  .homepage-cta .row .col.col-fill:after,
  .homepage-cta-top .row .col.col-fill:after,
  .homepage-features .row .col.col-fill:after,
  .homepage-pricing-questions .row .col.col-fill:after,
  .homepage-feature-questions .row .col.col-fill:after {
    content: "";
    display: table;
  }
  .homepage-ads-large .row .col.fill:after,
  .homepage-ads-small .row .col.fill:after,
  .homepage-users .row .col.fill:after,
  .homepage-cta .row .col.fill:after,
  .homepage-cta-top .row .col.fill:after,
  .homepage-features .row .col.fill:after,
  .homepage-pricing-questions .row .col.fill:after,
  .homepage-feature-questions .row .col.fill:after,
  .homepage-ads-large .row .col.col-fill:after,
  .homepage-ads-small .row .col.col-fill:after,
  .homepage-users .row .col.col-fill:after,
  .homepage-cta .row .col.col-fill:after,
  .homepage-cta-top .row .col.col-fill:after,
  .homepage-features .row .col.col-fill:after,
  .homepage-pricing-questions .row .col.col-fill:after,
  .homepage-feature-questions .row .col.col-fill:after {
    clear: both;
  }
  .homepage-ads-large .row .col.center,
  .homepage-ads-small .row .col.center,
  .homepage-users .row .col.center,
  .homepage-cta .row .col.center,
  .homepage-cta-top .row .col.center,
  .homepage-features .row .col.center,
  .homepage-pricing-questions .row .col.center,
  .homepage-feature-questions .row .col.center,
  .homepage-ads-large .row .col.col-center,
  .homepage-ads-small .row .col.col-center,
  .homepage-users .row .col.col-center,
  .homepage-cta .row .col.col-center,
  .homepage-cta-top .row .col.col-center,
  .homepage-features .row .col.col-center,
  .homepage-pricing-questions .row .col.col-center,
  .homepage-feature-questions .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  .homepage-ads-large .row .col.center:before,
  .homepage-ads-small .row .col.center:before,
  .homepage-users .row .col.center:before,
  .homepage-cta .row .col.center:before,
  .homepage-cta-top .row .col.center:before,
  .homepage-features .row .col.center:before,
  .homepage-pricing-questions .row .col.center:before,
  .homepage-feature-questions .row .col.center:before,
  .homepage-ads-large .row .col.col-center:before,
  .homepage-ads-small .row .col.col-center:before,
  .homepage-users .row .col.col-center:before,
  .homepage-cta .row .col.col-center:before,
  .homepage-cta-top .row .col.col-center:before,
  .homepage-features .row .col.col-center:before,
  .homepage-pricing-questions .row .col.col-center:before,
  .homepage-feature-questions .row .col.col-center:before,
  .homepage-ads-large .row .col.center:after,
  .homepage-ads-small .row .col.center:after,
  .homepage-users .row .col.center:after,
  .homepage-cta .row .col.center:after,
  .homepage-cta-top .row .col.center:after,
  .homepage-features .row .col.center:after,
  .homepage-pricing-questions .row .col.center:after,
  .homepage-feature-questions .row .col.center:after,
  .homepage-ads-large .row .col.col-center:after,
  .homepage-ads-small .row .col.col-center:after,
  .homepage-users .row .col.col-center:after,
  .homepage-cta .row .col.col-center:after,
  .homepage-cta-top .row .col.col-center:after,
  .homepage-features .row .col.col-center:after,
  .homepage-pricing-questions .row .col.col-center:after,
  .homepage-feature-questions .row .col.col-center:after {
    content: "";
    display: table;
  }
  .homepage-ads-large .row .col.center:after,
  .homepage-ads-small .row .col.center:after,
  .homepage-users .row .col.center:after,
  .homepage-cta .row .col.center:after,
  .homepage-cta-top .row .col.center:after,
  .homepage-features .row .col.center:after,
  .homepage-pricing-questions .row .col.center:after,
  .homepage-feature-questions .row .col.center:after,
  .homepage-ads-large .row .col.col-center:after,
  .homepage-ads-small .row .col.col-center:after,
  .homepage-users .row .col.col-center:after,
  .homepage-cta .row .col.col-center:after,
  .homepage-cta-top .row .col.col-center:after,
  .homepage-features .row .col.col-center:after,
  .homepage-pricing-questions .row .col.col-center:after,
  .homepage-feature-questions .row .col.col-center:after {
    clear: both;
  }
  .homepage-ads-large .row .col.bisect,
  .homepage-ads-small .row .col.bisect,
  .homepage-users .row .col.bisect,
  .homepage-cta .row .col.bisect,
  .homepage-cta-top .row .col.bisect,
  .homepage-features .row .col.bisect,
  .homepage-pricing-questions .row .col.bisect,
  .homepage-feature-questions .row .col.bisect,
  .homepage-ads-large .row .col.col-bisect,
  .homepage-ads-small .row .col.col-bisect,
  .homepage-users .row .col.col-bisect,
  .homepage-cta .row .col.col-bisect,
  .homepage-cta-top .row .col.col-bisect,
  .homepage-features .row .col.col-bisect,
  .homepage-pricing-questions .row .col.col-bisect,
  .homepage-feature-questions .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  .homepage-ads-large .row .col.bisect:before,
  .homepage-ads-small .row .col.bisect:before,
  .homepage-users .row .col.bisect:before,
  .homepage-cta .row .col.bisect:before,
  .homepage-cta-top .row .col.bisect:before,
  .homepage-features .row .col.bisect:before,
  .homepage-pricing-questions .row .col.bisect:before,
  .homepage-feature-questions .row .col.bisect:before,
  .homepage-ads-large .row .col.col-bisect:before,
  .homepage-ads-small .row .col.col-bisect:before,
  .homepage-users .row .col.col-bisect:before,
  .homepage-cta .row .col.col-bisect:before,
  .homepage-cta-top .row .col.col-bisect:before,
  .homepage-features .row .col.col-bisect:before,
  .homepage-pricing-questions .row .col.col-bisect:before,
  .homepage-feature-questions .row .col.col-bisect:before,
  .homepage-ads-large .row .col.bisect:after,
  .homepage-ads-small .row .col.bisect:after,
  .homepage-users .row .col.bisect:after,
  .homepage-cta .row .col.bisect:after,
  .homepage-cta-top .row .col.bisect:after,
  .homepage-features .row .col.bisect:after,
  .homepage-pricing-questions .row .col.bisect:after,
  .homepage-feature-questions .row .col.bisect:after,
  .homepage-ads-large .row .col.col-bisect:after,
  .homepage-ads-small .row .col.col-bisect:after,
  .homepage-users .row .col.col-bisect:after,
  .homepage-cta .row .col.col-bisect:after,
  .homepage-cta-top .row .col.col-bisect:after,
  .homepage-features .row .col.col-bisect:after,
  .homepage-pricing-questions .row .col.col-bisect:after,
  .homepage-feature-questions .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  .homepage-ads-large .row .col.bisect:after,
  .homepage-ads-small .row .col.bisect:after,
  .homepage-users .row .col.bisect:after,
  .homepage-cta .row .col.bisect:after,
  .homepage-cta-top .row .col.bisect:after,
  .homepage-features .row .col.bisect:after,
  .homepage-pricing-questions .row .col.bisect:after,
  .homepage-feature-questions .row .col.bisect:after,
  .homepage-ads-large .row .col.col-bisect:after,
  .homepage-ads-small .row .col.col-bisect:after,
  .homepage-users .row .col.col-bisect:after,
  .homepage-cta .row .col.col-bisect:after,
  .homepage-cta-top .row .col.col-bisect:after,
  .homepage-features .row .col.col-bisect:after,
  .homepage-pricing-questions .row .col.col-bisect:after,
  .homepage-feature-questions .row .col.col-bisect:after {
    clear: both;
  }
  .homepage-ads-large .row .col.trisect,
  .homepage-ads-small .row .col.trisect,
  .homepage-users .row .col.trisect,
  .homepage-cta .row .col.trisect,
  .homepage-cta-top .row .col.trisect,
  .homepage-features .row .col.trisect,
  .homepage-pricing-questions .row .col.trisect,
  .homepage-feature-questions .row .col.trisect,
  .homepage-ads-large .row .col.col-trisect,
  .homepage-ads-small .row .col.col-trisect,
  .homepage-users .row .col.col-trisect,
  .homepage-cta .row .col.col-trisect,
  .homepage-cta-top .row .col.col-trisect,
  .homepage-features .row .col.col-trisect,
  .homepage-pricing-questions .row .col.col-trisect,
  .homepage-feature-questions .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  .homepage-ads-large .row .col.trisect:before,
  .homepage-ads-small .row .col.trisect:before,
  .homepage-users .row .col.trisect:before,
  .homepage-cta .row .col.trisect:before,
  .homepage-cta-top .row .col.trisect:before,
  .homepage-features .row .col.trisect:before,
  .homepage-pricing-questions .row .col.trisect:before,
  .homepage-feature-questions .row .col.trisect:before,
  .homepage-ads-large .row .col.col-trisect:before,
  .homepage-ads-small .row .col.col-trisect:before,
  .homepage-users .row .col.col-trisect:before,
  .homepage-cta .row .col.col-trisect:before,
  .homepage-cta-top .row .col.col-trisect:before,
  .homepage-features .row .col.col-trisect:before,
  .homepage-pricing-questions .row .col.col-trisect:before,
  .homepage-feature-questions .row .col.col-trisect:before,
  .homepage-ads-large .row .col.trisect:after,
  .homepage-ads-small .row .col.trisect:after,
  .homepage-users .row .col.trisect:after,
  .homepage-cta .row .col.trisect:after,
  .homepage-cta-top .row .col.trisect:after,
  .homepage-features .row .col.trisect:after,
  .homepage-pricing-questions .row .col.trisect:after,
  .homepage-feature-questions .row .col.trisect:after,
  .homepage-ads-large .row .col.col-trisect:after,
  .homepage-ads-small .row .col.col-trisect:after,
  .homepage-users .row .col.col-trisect:after,
  .homepage-cta .row .col.col-trisect:after,
  .homepage-cta-top .row .col.col-trisect:after,
  .homepage-features .row .col.col-trisect:after,
  .homepage-pricing-questions .row .col.col-trisect:after,
  .homepage-feature-questions .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  .homepage-ads-large .row .col.trisect:after,
  .homepage-ads-small .row .col.trisect:after,
  .homepage-users .row .col.trisect:after,
  .homepage-cta .row .col.trisect:after,
  .homepage-cta-top .row .col.trisect:after,
  .homepage-features .row .col.trisect:after,
  .homepage-pricing-questions .row .col.trisect:after,
  .homepage-feature-questions .row .col.trisect:after,
  .homepage-ads-large .row .col.col-trisect:after,
  .homepage-ads-small .row .col.col-trisect:after,
  .homepage-users .row .col.col-trisect:after,
  .homepage-cta .row .col.col-trisect:after,
  .homepage-cta-top .row .col.col-trisect:after,
  .homepage-features .row .col.col-trisect:after,
  .homepage-pricing-questions .row .col.col-trisect:after,
  .homepage-feature-questions .row .col.col-trisect:after {
    clear: both;
  }
  .homepage-ads-large .row .col.major,
  .homepage-ads-small .row .col.major,
  .homepage-users .row .col.major,
  .homepage-cta .row .col.major,
  .homepage-cta-top .row .col.major,
  .homepage-features .row .col.major,
  .homepage-pricing-questions .row .col.major,
  .homepage-feature-questions .row .col.major,
  .homepage-ads-large .row .col.col-major,
  .homepage-ads-small .row .col.col-major,
  .homepage-users .row .col.col-major,
  .homepage-cta .row .col.col-major,
  .homepage-cta-top .row .col.col-major,
  .homepage-features .row .col.col-major,
  .homepage-pricing-questions .row .col.col-major,
  .homepage-feature-questions .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  .homepage-ads-large .row .col.major:before,
  .homepage-ads-small .row .col.major:before,
  .homepage-users .row .col.major:before,
  .homepage-cta .row .col.major:before,
  .homepage-cta-top .row .col.major:before,
  .homepage-features .row .col.major:before,
  .homepage-pricing-questions .row .col.major:before,
  .homepage-feature-questions .row .col.major:before,
  .homepage-ads-large .row .col.col-major:before,
  .homepage-ads-small .row .col.col-major:before,
  .homepage-users .row .col.col-major:before,
  .homepage-cta .row .col.col-major:before,
  .homepage-cta-top .row .col.col-major:before,
  .homepage-features .row .col.col-major:before,
  .homepage-pricing-questions .row .col.col-major:before,
  .homepage-feature-questions .row .col.col-major:before,
  .homepage-ads-large .row .col.major:after,
  .homepage-ads-small .row .col.major:after,
  .homepage-users .row .col.major:after,
  .homepage-cta .row .col.major:after,
  .homepage-cta-top .row .col.major:after,
  .homepage-features .row .col.major:after,
  .homepage-pricing-questions .row .col.major:after,
  .homepage-feature-questions .row .col.major:after,
  .homepage-ads-large .row .col.col-major:after,
  .homepage-ads-small .row .col.col-major:after,
  .homepage-users .row .col.col-major:after,
  .homepage-cta .row .col.col-major:after,
  .homepage-cta-top .row .col.col-major:after,
  .homepage-features .row .col.col-major:after,
  .homepage-pricing-questions .row .col.col-major:after,
  .homepage-feature-questions .row .col.col-major:after {
    content: "";
    display: table;
  }
  .homepage-ads-large .row .col.major:after,
  .homepage-ads-small .row .col.major:after,
  .homepage-users .row .col.major:after,
  .homepage-cta .row .col.major:after,
  .homepage-cta-top .row .col.major:after,
  .homepage-features .row .col.major:after,
  .homepage-pricing-questions .row .col.major:after,
  .homepage-feature-questions .row .col.major:after,
  .homepage-ads-large .row .col.col-major:after,
  .homepage-ads-small .row .col.col-major:after,
  .homepage-users .row .col.col-major:after,
  .homepage-cta .row .col.col-major:after,
  .homepage-cta-top .row .col.col-major:after,
  .homepage-features .row .col.col-major:after,
  .homepage-pricing-questions .row .col.col-major:after,
  .homepage-feature-questions .row .col.col-major:after {
    clear: both;
  }
  .homepage-ads-large .row .col.minor,
  .homepage-ads-small .row .col.minor,
  .homepage-users .row .col.minor,
  .homepage-cta .row .col.minor,
  .homepage-cta-top .row .col.minor,
  .homepage-features .row .col.minor,
  .homepage-pricing-questions .row .col.minor,
  .homepage-feature-questions .row .col.minor,
  .homepage-ads-large .row .col.col-minor,
  .homepage-ads-small .row .col.col-minor,
  .homepage-users .row .col.col-minor,
  .homepage-cta .row .col.col-minor,
  .homepage-cta-top .row .col.col-minor,
  .homepage-features .row .col.col-minor,
  .homepage-pricing-questions .row .col.col-minor,
  .homepage-feature-questions .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  .homepage-ads-large .row .col.minor:before,
  .homepage-ads-small .row .col.minor:before,
  .homepage-users .row .col.minor:before,
  .homepage-cta .row .col.minor:before,
  .homepage-cta-top .row .col.minor:before,
  .homepage-features .row .col.minor:before,
  .homepage-pricing-questions .row .col.minor:before,
  .homepage-feature-questions .row .col.minor:before,
  .homepage-ads-large .row .col.col-minor:before,
  .homepage-ads-small .row .col.col-minor:before,
  .homepage-users .row .col.col-minor:before,
  .homepage-cta .row .col.col-minor:before,
  .homepage-cta-top .row .col.col-minor:before,
  .homepage-features .row .col.col-minor:before,
  .homepage-pricing-questions .row .col.col-minor:before,
  .homepage-feature-questions .row .col.col-minor:before,
  .homepage-ads-large .row .col.minor:after,
  .homepage-ads-small .row .col.minor:after,
  .homepage-users .row .col.minor:after,
  .homepage-cta .row .col.minor:after,
  .homepage-cta-top .row .col.minor:after,
  .homepage-features .row .col.minor:after,
  .homepage-pricing-questions .row .col.minor:after,
  .homepage-feature-questions .row .col.minor:after,
  .homepage-ads-large .row .col.col-minor:after,
  .homepage-ads-small .row .col.col-minor:after,
  .homepage-users .row .col.col-minor:after,
  .homepage-cta .row .col.col-minor:after,
  .homepage-cta-top .row .col.col-minor:after,
  .homepage-features .row .col.col-minor:after,
  .homepage-pricing-questions .row .col.col-minor:after,
  .homepage-feature-questions .row .col.col-minor:after {
    content: "";
    display: table;
  }
  .homepage-ads-large .row .col.minor:after,
  .homepage-ads-small .row .col.minor:after,
  .homepage-users .row .col.minor:after,
  .homepage-cta .row .col.minor:after,
  .homepage-cta-top .row .col.minor:after,
  .homepage-features .row .col.minor:after,
  .homepage-pricing-questions .row .col.minor:after,
  .homepage-feature-questions .row .col.minor:after,
  .homepage-ads-large .row .col.col-minor:after,
  .homepage-ads-small .row .col.col-minor:after,
  .homepage-users .row .col.col-minor:after,
  .homepage-cta .row .col.col-minor:after,
  .homepage-cta-top .row .col.col-minor:after,
  .homepage-features .row .col.col-minor:after,
  .homepage-pricing-questions .row .col.col-minor:after,
  .homepage-feature-questions .row .col.col-minor:after {
    clear: both;
  }
}
.homepage-ads-large {
  font-family: Lato;
  font-size: 1em;
  background: #fcfcfc;
  color: #343131;
  padding: 0em;
  background-image: none;
}
.homepage-ads-large a {
  text-decoration: none;
}
.homepage-ads-large a:link,
.homepage-ads-large a:visited {
  color: #2980b9;
}
.homepage-ads-large a:hover,
.homepage-ads-large a:active {
  color: #7db2d4;
}
.homepage-ads-large .row .tagline {
  padding-bottom: 235px;
  background-image: url('../img/tagline-back.png');
  background-repeat: no-repeat;
  background-position: center bottom -85px;
  font-size: 1.4em;
}
.homepage-ads-large .row .tagline h1 {
  padding: .3em 0em .6em 0em;
  margin-bottom: 0em;
  text-align: center;
}
.homepage-ads-large .row .tagline p {
  margin: 1em 10%;
  text-align: center;
  font-family: Lato, sans-serif;
  line-height: 1.5em;
  background-color: rgba(255, 255, 255, 0.6);
}
@media (max-width: 640px), (max-device-width: 640px) {
  .homepage-ads-large .row .tagline {
    padding-bottom: 165px;
    font-size: 1.1em;
    background-position: center bottom;
    background-size: 315px 150px;
  }
  .homepage-ads-large .row .tagline p {
    margin: 1em .5em;
  }
}
.homepage-ads-large .subscribe {
  font-family: Lato;
  font-size: 1em;
  background: #f5f2e9;
  color: #343131;
  display: none;
  padding: .5em;
  border-radius: .3em;
  -moz-border-radius: .3em;
  -webkit-border-radius: .3em;
}
.homepage-ads-large .subscribe a {
  text-decoration: none;
}
.homepage-ads-large .subscribe a:link,
.homepage-ads-large .subscribe a:visited {
  color: #409ad5;
}
.homepage-ads-large .subscribe a:hover,
.homepage-ads-large .subscribe a:active {
  color: #89bddd;
}
.homepage-ads-large .subscribe h1 {
  margin: 0em;
  padding: 0em 0em .5em;
  text-align: center;
}
.homepage-ads-large .subscribe p {
  margin: 0em 0em 1em 0em;
  font-family: Lato, sans-serif;
  line-height: 1.5em;
  text-align: center;
  font-size: 1.1em;
}
.homepage-ads-large .subscribe form {
  padding: 1em;
  position: relative;
  text-align: right;
}
.homepage-ads-large .subscribe form input[type="text"],
.homepage-ads-large .subscribe form input[type="url"],
.homepage-ads-large .subscribe form input[type="email"],
.homepage-ads-large .subscribe form input[type="number"],
.homepage-ads-large .subscribe form input[type="password"],
.homepage-ads-large .subscribe form select,
.homepage-ads-large .subscribe form textarea {
  padding: .45em;
  width: 20em;
  border: none;
  margin-top: 0.1666665em;
  background: #fcfcfc;
  color: #343131;
  border: 1px solid #d4d3d3;
  font-family: Lato, sans-serif;
  font-size: 1em;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
}
.homepage-ads-large .subscribe form input[type="text"]:focus,
.homepage-ads-large .subscribe form input[type="url"]:focus,
.homepage-ads-large .subscribe form input[type="email"]:focus,
.homepage-ads-large .subscribe form input[type="number"]:focus,
.homepage-ads-large .subscribe form input[type="password"]:focus,
.homepage-ads-large .subscribe form select:focus,
.homepage-ads-large .subscribe form textarea:focus {
  border: 1px solid #f05330;
  box-shadow: inset 2px 2px #e3e3e3;
  outline: none;
}
div.col-bisect .homepage-ads-large .subscribe form input[type="text"],
div.col-bisect .homepage-ads-large .subscribe form input[type="url"],
div.col-bisect .homepage-ads-large .subscribe form input[type="email"],
div.col-bisect .homepage-ads-large .subscribe form input[type="number"],
div.col-bisect .homepage-ads-large .subscribe form input[type="password"],
div.col-bisect .homepage-ads-large .subscribe form select,
div.col-bisect .homepage-ads-large .subscribe form textarea {
  width: 96%;
  box-sizing: border-box;
}
.homepage-ads-large .subscribe form label {
  display: block;
  margin: .1em .3em .1em 0em;
  font-size: 1em;
}
.homepage-ads-large .subscribe form span.helptext {
  display: block;
  margin: .3em 0em;
  font-style: italic;
  font-size: .9em;
  color: #696262;
}
.homepage-ads-large .subscribe form input[type="radio"] {
  display: inline-block;
}
.homepage-ads-large .subscribe form input[type="radio"] + label {
  display: inline;
}
.homepage-ads-large .subscribe form input[type="checkbox"] {
  float: left;
  display: block;
  height: 1.2em;
  margin: .3em .5em;
  width: 1.2em;
  line-height: 1.5em;
}
.homepage-ads-large .subscribe form input[type="checkbox"] + span.helptext {
  display: block;
  overflow: hidden;
  margin: 0em;
  font-style: normal;
  color: #343131;
}
.homepage-ads-large .subscribe form input[type="number"] {
  width: 5em;
}
.homepage-ads-large .subscribe form input[type="text"].search {
  padding-left: 2em;
  background-repeat: no-repeat;
  background-position: .25em center;
  background-size: 24px 24px;
}
.homepage-ads-large .subscribe form input[type="text"].search {
  background-image: url('../img/icon-search.png');
}
.homepage-ads-large .subscribe form input[type="submit"],
.homepage-ads-large .subscribe form button {
  position: relative;
  padding: .33em 1em;
  border: none;
  top: -0.165em;
  font-family: Lato;
  font-size: 1.1em;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: -1px 1px #20638f;
  cursor: pointer;
  /* Raised button stuff */
  transition: all 0s ease-out;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  border-radius: .2em;
  -moz-border-radius: .2em;
  box-shadow: 0px 0.2em 0px 0px #20638f;
  -webkit-box-shadow: 0px 0.2em 0px 0px #20638f;
  margin: 1em 0em;
}
.homepage-ads-large .subscribe form input[type="submit"]:active,
.homepage-ads-large .subscribe form button:active {
  top: -0.015em;
  -webkit-box-shadow: 0px 0.05em 0px 0px #20638f;
  box-shadow: 0px 0.05em 0px 0px #20638f;
  outline: none;
}
.homepage-ads-large .subscribe form input[type="submit"]:hover,
.homepage-ads-large .subscribe form button:hover {
  background: #409ad5;
}
.homepage-ads-large .subscribe form textarea {
  width: 40em;
  height: 10em;
}
.homepage-ads-large .subscribe form .errorlist {
  color: orangered;
}
.homepage-ads-large .subscribe form > p {
  display: block;
  margin: .65em 0em;
  clear: both;
}
.homepage-ads-large .subscribe form > p + p {
  margin-top: 1em;
}
.homepage-ads-large .subscribe form input::-webkit-input-placeholder {
  color: #d4d3d3;
}
.homepage-ads-large .subscribe form input:-moz-placeholder {
  color: #d4d3d3;
  opacity: 1;
}
.homepage-ads-large .subscribe form input::-moz-placeholder {
  color: #d4d3d3;
  opacity: 1;
}
.homepage-ads-large .subscribe form input:-ms-input-placeholder {
  color: #d4d3d3;
}
.homepage-ads-large .subscribe form input[type='submit'] {
  padding: .33em 1em;
  border: none;
  top: 0em;
  font-weight: bold;
  background: #f05330;
  color: #fcfcfc;
  text-shadow: 0px 1px 0px #ad2a0d;
  cursor: pointer;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
  box-shadow: none;
  -webkit-box-shadow: : none;
  display: inline-block;
  font-size: 1.2em;
}
.homepage-ads-large .subscribe form input[type='submit']:hover,
.homepage-ads-large .subscribe form input[type='submit']:active {
  top: 0em;
  outline: none;
  box-shadow: none;
  background: #f27559;
  color: #fcfcfc;
}
.homepage-ads-large .subscribe form input[type='text'],
.homepage-ads-large .subscribe form input[type='email'] {
  display: block;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 100%;
  margin: 0em auto;
  font-size: 1.2em;
}
.homepage-ads-small {
  padding: 2em 0em 1em 0em;
  font-family: Lato;
  font-size: 1em;
  background: #efefef;
  color: #343131;
}
.homepage-ads-small a {
  text-decoration: none;
}
.homepage-ads-small a:link,
.homepage-ads-small a:visited {
  color: #20638f;
}
.homepage-ads-small a:hover,
.homepage-ads-small a:active {
  color: #739bb6;
}
.homepage-ads-small .row {
  padding-top: 1.5em;
  padding-bottom: .5em;
}
.homepage-ads-small .col.ad h1 {
  margin: 0em 0em 1em;
  text-align: center;
  color: #f05330;
}
.homepage-ads-small .col.ad p {
  margin: 1em 0em 2em 0em;
  font-family: Lato, sans-serif;
  line-height: 1.5em;
  font-size: 1.1em;
}
.homepage-ads-small .col.ad p b {
  background: #d2e7f5;
  padding: .2em;
}
.homepage-ads-small div.ad.ad-write h1 {
  padding-top: 120px;
  background-image: url('../img/feat-write.png');
  background-repeat: no-repeat;
  background-position: center 0em;
  background-size: 200px 100px;
}
.homepage-ads-small div.ad.ad-build h1 {
  padding-top: 120px;
  background-image: url('../img/feat-build.png');
  background-repeat: no-repeat;
  background-position: center 0em;
  background-size: 200px 100px;
}
.homepage-ads-small div.ad.ad-private h1 {
  padding-top: 120px;
  background-image: url('../img/feat-private.png');
  background-repeat: no-repeat;
  background-position: center 0em;
  background-size: auto 100px;
}
/* CTA */
div.homepage-cta-top {
  font-family: Lato;
  font-size: 1em;
  background: #f05330;
  color: #fcfcfc;
  padding: 1em 1em;
}
div.homepage-cta-top a {
  text-decoration: none;
}
div.homepage-cta-top a:link,
div.homepage-cta-top a:visited {
  color: #fcfcfc;
}
div.homepage-cta-top a:hover,
div.homepage-cta-top a:active {
  color: #f7b8aa;
}
div.homepage-cta-top p {
  margin: 0em 0em;
  text-align: center;
  font-size: 1.2em;
  line-height: 1.5em;
}
div.homepage-cta-top a {
  display: inline-block;
  padding: .3em .5em;
  margin: 0em .2em;
  border: .1em solid #fff;
  border-radius: .3em;
  -moz-border-radius: .3em;
  -webkit-border-radius: .3em;
}
div.homepage-cta {
  font-family: Lato;
  font-size: 1em;
  background: #343131;
  color: #fcfcfc;
  padding: 1em 0em 2em 0em;
}
div.homepage-cta a {
  text-decoration: none;
}
div.homepage-cta a:link,
div.homepage-cta a:visited {
  color: #6ab0de;
}
div.homepage-cta a:hover,
div.homepage-cta a:active {
  color: #547d99;
}
div.homepage-signup {
  font-size: 1.1em;
  line-height: 1.3em;
}
div.homepage-signup form input[type="submit"] {
  padding: .33em 1em;
  border: none;
  top: 0em;
  font-size: 1.2em;
  font-weight: bold;
  background: #f05330;
  color: #fcfcfc;
  text-shadow: 0px 1px 0px #ad2a0d;
  cursor: pointer;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
  box-shadow: none;
  -webkit-box-shadow: : none;
}
div.homepage-signup form input[type="submit"]:hover,
div.homepage-signup form input[type="submit"]:active {
  top: 0em;
  outline: none;
  box-shadow: none;
  background: #f27559;
  color: #fcfcfc;
}
div.homepage-signup form input[type="email"] {
  width: 80%;
}
div.homepage-testimonial {
  padding: 2em 0em;
}
div.homepage-testimonial blockquote {
  display: block;
  margin: .3em 1em;
  font-family: Georgia, serif;
  font-style: italic;
  font-size: 1.3em;
  line-height: 1.5em;
  text-align: right;
}
div.homepage-testimonial blockquote b {
  font-size: 1.3em;
}
div.homepage-testimonial img.profile {
  display: block;
  float: right;
  width: 72px;
  height: 72px;
  margin-left: 1em;
  /*border-radius: 36px;*/
}
div.homepage-testimonial cite {
  display: block;
  overflow: auto;
  text-align: right;
  margin: 1em;
}
div.homepage-testimonial cite span {
  display: block;
  line-height: 1.3em;
  white-space: nowrap;
}
div.homepage-testimonial cite span.profile-name {
  font-size: 1.2em;
  font-weight: bold;
}
div.homepage-features {
  overflow: hidden;
}
div.homepage-features .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.homepage-features .row:before,
div.homepage-features .row:after {
  content: "";
  display: table;
}
div.homepage-features .row:after {
  clear: both;
}
div.homepage-features .row .col.fill,
div.homepage-features .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-features .row .col.fill:before,
div.homepage-features .row .col.col-fill:before,
div.homepage-features .row .col.fill:after,
div.homepage-features .row .col.col-fill:after {
  content: "";
  display: table;
}
div.homepage-features .row .col.fill:after,
div.homepage-features .row .col.col-fill:after {
  clear: both;
}
div.homepage-features .row .col.center,
div.homepage-features .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-features .row .col.center:before,
div.homepage-features .row .col.col-center:before,
div.homepage-features .row .col.center:after,
div.homepage-features .row .col.col-center:after {
  content: "";
  display: table;
}
div.homepage-features .row .col.center:after,
div.homepage-features .row .col.col-center:after {
  clear: both;
}
div.homepage-features .row .col.bisect,
div.homepage-features .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-features .row .col.bisect:before,
div.homepage-features .row .col.col-bisect:before,
div.homepage-features .row .col.bisect:after,
div.homepage-features .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.homepage-features .row .col.bisect:after,
div.homepage-features .row .col.col-bisect:after {
  clear: both;
}
div.homepage-features .row .col.trisect,
div.homepage-features .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-features .row .col.trisect:before,
div.homepage-features .row .col.col-trisect:before,
div.homepage-features .row .col.trisect:after,
div.homepage-features .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.homepage-features .row .col.trisect:after,
div.homepage-features .row .col.col-trisect:after {
  clear: both;
}
div.homepage-features .row .col.major,
div.homepage-features .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-features .row .col.major:before,
div.homepage-features .row .col.col-major:before,
div.homepage-features .row .col.major:after,
div.homepage-features .row .col.col-major:after {
  content: "";
  display: table;
}
div.homepage-features .row .col.major:after,
div.homepage-features .row .col.col-major:after {
  clear: both;
}
div.homepage-features .row .col.minor,
div.homepage-features .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-features .row .col.minor:before,
div.homepage-features .row .col.col-minor:before,
div.homepage-features .row .col.minor:after,
div.homepage-features .row .col.col-minor:after {
  content: "";
  display: table;
}
div.homepage-features .row .col.minor:after,
div.homepage-features .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.homepage-features {
    overflow: hidden;
  }
  div.homepage-features .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.homepage-features .row:before,
  div.homepage-features .row:after {
    content: "";
    display: table;
  }
  div.homepage-features .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.homepage-features {
    overflow: hidden;
  }
  div.homepage-features .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.homepage-features .row:before,
  div.homepage-features .row:after {
    content: "";
    display: table;
  }
  div.homepage-features .row:after {
    clear: both;
  }
  div.homepage-features .row .col.fill,
  div.homepage-features .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.homepage-features .row .col.fill:before,
  div.homepage-features .row .col.col-fill:before,
  div.homepage-features .row .col.fill:after,
  div.homepage-features .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.homepage-features .row .col.fill:after,
  div.homepage-features .row .col.col-fill:after {
    clear: both;
  }
  div.homepage-features .row .col.center,
  div.homepage-features .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.homepage-features .row .col.center:before,
  div.homepage-features .row .col.col-center:before,
  div.homepage-features .row .col.center:after,
  div.homepage-features .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.homepage-features .row .col.center:after,
  div.homepage-features .row .col.col-center:after {
    clear: both;
  }
  div.homepage-features .row .col.bisect,
  div.homepage-features .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.homepage-features .row .col.bisect:before,
  div.homepage-features .row .col.col-bisect:before,
  div.homepage-features .row .col.bisect:after,
  div.homepage-features .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.homepage-features .row .col.bisect:after,
  div.homepage-features .row .col.col-bisect:after {
    clear: both;
  }
  div.homepage-features .row .col.trisect,
  div.homepage-features .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.homepage-features .row .col.trisect:before,
  div.homepage-features .row .col.col-trisect:before,
  div.homepage-features .row .col.trisect:after,
  div.homepage-features .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.homepage-features .row .col.trisect:after,
  div.homepage-features .row .col.col-trisect:after {
    clear: both;
  }
  div.homepage-features .row .col.major,
  div.homepage-features .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.homepage-features .row .col.major:before,
  div.homepage-features .row .col.col-major:before,
  div.homepage-features .row .col.major:after,
  div.homepage-features .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.homepage-features .row .col.major:after,
  div.homepage-features .row .col.col-major:after {
    clear: both;
  }
  div.homepage-features .row .col.minor,
  div.homepage-features .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.homepage-features .row .col.minor:before,
  div.homepage-features .row .col.col-minor:before,
  div.homepage-features .row .col.minor:after,
  div.homepage-features .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.homepage-features .row .col.minor:after,
  div.homepage-features .row .col.col-minor:after {
    clear: both;
  }
}
div.homepage-features div.row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
}
div.homepage-features div.row:before,
div.homepage-features div.row:after {
  content: "";
  display: table;
}
div.homepage-features div.row:after {
  clear: both;
}
div.homepage-features div.row div.col {
  display: inline;
  float: left;
  width: 53.33333333%;
  margin-left: 23.33333333%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-features div.row div.col:before,
div.homepage-features div.row div.col:after {
  content: "";
  display: table;
}
div.homepage-features div.row div.col:after {
  clear: both;
}
@media (max-width: 900px) {
  div.homepage-features div.row div.col {
    display: inline;
    float: left;
    width: 97.77777778%;
    margin-left: 1.11111111%;
    margin-right: 1.11111111%;
    *zoom: 1;
  }
  div.homepage-features div.row div.col:before,
  div.homepage-features div.row div.col:after {
    content: "";
    display: table;
  }
  div.homepage-features div.row div.col:after {
    clear: both;
  }
}
div.homepage-features h2 {
  margin: 1.5em 0em 0em 0em;
  font-size: 1.5em;
  color: #f05330;
  text-align: center;
}
div.homepage-features dl {
  margin: 0em auto;
}
div.homepage-features dl > dt {
  margin: 3em 0em .65em 0em;
  padding: 0em .65em;
  font-size: 1.4em;
  font-style: italic;
  color: #f05330;
}
div.homepage-features dl > dd {
  display: block;
  margin-bottom: 3em;
  padding: .2em .65em;
  font-size: 1.2em;
  line-height: 1.3em;
}
@media (max-width: 1200px) {
  div.homepage-features dl > dt {
    margin-top: 2em;
    font-size: 1.3em;
  }
  div.homepage-features dl > dd {
    margin-bottom: 2em;
    font-size: 1.1em;
  }
}
div.homepage-pricing-questions,
div.homepage-feature-questions {
  overflow: hidden;
  font-family: Lato;
  font-size: 1em;
  background: #343131;
  color: #fcfcfc;
  margin: 0em;
  font-size: 1.2em;
  text-align: center;
}
div.homepage-pricing-questions .row,
div.homepage-feature-questions .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.homepage-pricing-questions .row:before,
div.homepage-feature-questions .row:before,
div.homepage-pricing-questions .row:after,
div.homepage-feature-questions .row:after {
  content: "";
  display: table;
}
div.homepage-pricing-questions .row:after,
div.homepage-feature-questions .row:after {
  clear: both;
}
div.homepage-pricing-questions .row .col.fill,
div.homepage-feature-questions .row .col.fill,
div.homepage-pricing-questions .row .col.col-fill,
div.homepage-feature-questions .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-pricing-questions .row .col.fill:before,
div.homepage-feature-questions .row .col.fill:before,
div.homepage-pricing-questions .row .col.col-fill:before,
div.homepage-feature-questions .row .col.col-fill:before,
div.homepage-pricing-questions .row .col.fill:after,
div.homepage-feature-questions .row .col.fill:after,
div.homepage-pricing-questions .row .col.col-fill:after,
div.homepage-feature-questions .row .col.col-fill:after {
  content: "";
  display: table;
}
div.homepage-pricing-questions .row .col.fill:after,
div.homepage-feature-questions .row .col.fill:after,
div.homepage-pricing-questions .row .col.col-fill:after,
div.homepage-feature-questions .row .col.col-fill:after {
  clear: both;
}
div.homepage-pricing-questions .row .col.center,
div.homepage-feature-questions .row .col.center,
div.homepage-pricing-questions .row .col.col-center,
div.homepage-feature-questions .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-pricing-questions .row .col.center:before,
div.homepage-feature-questions .row .col.center:before,
div.homepage-pricing-questions .row .col.col-center:before,
div.homepage-feature-questions .row .col.col-center:before,
div.homepage-pricing-questions .row .col.center:after,
div.homepage-feature-questions .row .col.center:after,
div.homepage-pricing-questions .row .col.col-center:after,
div.homepage-feature-questions .row .col.col-center:after {
  content: "";
  display: table;
}
div.homepage-pricing-questions .row .col.center:after,
div.homepage-feature-questions .row .col.center:after,
div.homepage-pricing-questions .row .col.col-center:after,
div.homepage-feature-questions .row .col.col-center:after {
  clear: both;
}
div.homepage-pricing-questions .row .col.bisect,
div.homepage-feature-questions .row .col.bisect,
div.homepage-pricing-questions .row .col.col-bisect,
div.homepage-feature-questions .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-pricing-questions .row .col.bisect:before,
div.homepage-feature-questions .row .col.bisect:before,
div.homepage-pricing-questions .row .col.col-bisect:before,
div.homepage-feature-questions .row .col.col-bisect:before,
div.homepage-pricing-questions .row .col.bisect:after,
div.homepage-feature-questions .row .col.bisect:after,
div.homepage-pricing-questions .row .col.col-bisect:after,
div.homepage-feature-questions .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.homepage-pricing-questions .row .col.bisect:after,
div.homepage-feature-questions .row .col.bisect:after,
div.homepage-pricing-questions .row .col.col-bisect:after,
div.homepage-feature-questions .row .col.col-bisect:after {
  clear: both;
}
div.homepage-pricing-questions .row .col.trisect,
div.homepage-feature-questions .row .col.trisect,
div.homepage-pricing-questions .row .col.col-trisect,
div.homepage-feature-questions .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-pricing-questions .row .col.trisect:before,
div.homepage-feature-questions .row .col.trisect:before,
div.homepage-pricing-questions .row .col.col-trisect:before,
div.homepage-feature-questions .row .col.col-trisect:before,
div.homepage-pricing-questions .row .col.trisect:after,
div.homepage-feature-questions .row .col.trisect:after,
div.homepage-pricing-questions .row .col.col-trisect:after,
div.homepage-feature-questions .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.homepage-pricing-questions .row .col.trisect:after,
div.homepage-feature-questions .row .col.trisect:after,
div.homepage-pricing-questions .row .col.col-trisect:after,
div.homepage-feature-questions .row .col.col-trisect:after {
  clear: both;
}
div.homepage-pricing-questions .row .col.major,
div.homepage-feature-questions .row .col.major,
div.homepage-pricing-questions .row .col.col-major,
div.homepage-feature-questions .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-pricing-questions .row .col.major:before,
div.homepage-feature-questions .row .col.major:before,
div.homepage-pricing-questions .row .col.col-major:before,
div.homepage-feature-questions .row .col.col-major:before,
div.homepage-pricing-questions .row .col.major:after,
div.homepage-feature-questions .row .col.major:after,
div.homepage-pricing-questions .row .col.col-major:after,
div.homepage-feature-questions .row .col.col-major:after {
  content: "";
  display: table;
}
div.homepage-pricing-questions .row .col.major:after,
div.homepage-feature-questions .row .col.major:after,
div.homepage-pricing-questions .row .col.col-major:after,
div.homepage-feature-questions .row .col.col-major:after {
  clear: both;
}
div.homepage-pricing-questions .row .col.minor,
div.homepage-feature-questions .row .col.minor,
div.homepage-pricing-questions .row .col.col-minor,
div.homepage-feature-questions .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.homepage-pricing-questions .row .col.minor:before,
div.homepage-feature-questions .row .col.minor:before,
div.homepage-pricing-questions .row .col.col-minor:before,
div.homepage-feature-questions .row .col.col-minor:before,
div.homepage-pricing-questions .row .col.minor:after,
div.homepage-feature-questions .row .col.minor:after,
div.homepage-pricing-questions .row .col.col-minor:after,
div.homepage-feature-questions .row .col.col-minor:after {
  content: "";
  display: table;
}
div.homepage-pricing-questions .row .col.minor:after,
div.homepage-feature-questions .row .col.minor:after,
div.homepage-pricing-questions .row .col.col-minor:after,
div.homepage-feature-questions .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.homepage-pricing-questions,
  div.homepage-feature-questions {
    overflow: hidden;
  }
  div.homepage-pricing-questions .row,
  div.homepage-feature-questions .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.homepage-pricing-questions .row:before,
  div.homepage-feature-questions .row:before,
  div.homepage-pricing-questions .row:after,
  div.homepage-feature-questions .row:after {
    content: "";
    display: table;
  }
  div.homepage-pricing-questions .row:after,
  div.homepage-feature-questions .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.homepage-pricing-questions,
  div.homepage-feature-questions {
    overflow: hidden;
  }
  div.homepage-pricing-questions .row,
  div.homepage-feature-questions .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.homepage-pricing-questions .row:before,
  div.homepage-feature-questions .row:before,
  div.homepage-pricing-questions .row:after,
  div.homepage-feature-questions .row:after {
    content: "";
    display: table;
  }
  div.homepage-pricing-questions .row:after,
  div.homepage-feature-questions .row:after {
    clear: both;
  }
  div.homepage-pricing-questions .row .col.fill,
  div.homepage-feature-questions .row .col.fill,
  div.homepage-pricing-questions .row .col.col-fill,
  div.homepage-feature-questions .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.homepage-pricing-questions .row .col.fill:before,
  div.homepage-feature-questions .row .col.fill:before,
  div.homepage-pricing-questions .row .col.col-fill:before,
  div.homepage-feature-questions .row .col.col-fill:before,
  div.homepage-pricing-questions .row .col.fill:after,
  div.homepage-feature-questions .row .col.fill:after,
  div.homepage-pricing-questions .row .col.col-fill:after,
  div.homepage-feature-questions .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.homepage-pricing-questions .row .col.fill:after,
  div.homepage-feature-questions .row .col.fill:after,
  div.homepage-pricing-questions .row .col.col-fill:after,
  div.homepage-feature-questions .row .col.col-fill:after {
    clear: both;
  }
  div.homepage-pricing-questions .row .col.center,
  div.homepage-feature-questions .row .col.center,
  div.homepage-pricing-questions .row .col.col-center,
  div.homepage-feature-questions .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.homepage-pricing-questions .row .col.center:before,
  div.homepage-feature-questions .row .col.center:before,
  div.homepage-pricing-questions .row .col.col-center:before,
  div.homepage-feature-questions .row .col.col-center:before,
  div.homepage-pricing-questions .row .col.center:after,
  div.homepage-feature-questions .row .col.center:after,
  div.homepage-pricing-questions .row .col.col-center:after,
  div.homepage-feature-questions .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.homepage-pricing-questions .row .col.center:after,
  div.homepage-feature-questions .row .col.center:after,
  div.homepage-pricing-questions .row .col.col-center:after,
  div.homepage-feature-questions .row .col.col-center:after {
    clear: both;
  }
  div.homepage-pricing-questions .row .col.bisect,
  div.homepage-feature-questions .row .col.bisect,
  div.homepage-pricing-questions .row .col.col-bisect,
  div.homepage-feature-questions .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.homepage-pricing-questions .row .col.bisect:before,
  div.homepage-feature-questions .row .col.bisect:before,
  div.homepage-pricing-questions .row .col.col-bisect:before,
  div.homepage-feature-questions .row .col.col-bisect:before,
  div.homepage-pricing-questions .row .col.bisect:after,
  div.homepage-feature-questions .row .col.bisect:after,
  div.homepage-pricing-questions .row .col.col-bisect:after,
  div.homepage-feature-questions .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.homepage-pricing-questions .row .col.bisect:after,
  div.homepage-feature-questions .row .col.bisect:after,
  div.homepage-pricing-questions .row .col.col-bisect:after,
  div.homepage-feature-questions .row .col.col-bisect:after {
    clear: both;
  }
  div.homepage-pricing-questions .row .col.trisect,
  div.homepage-feature-questions .row .col.trisect,
  div.homepage-pricing-questions .row .col.col-trisect,
  div.homepage-feature-questions .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.homepage-pricing-questions .row .col.trisect:before,
  div.homepage-feature-questions .row .col.trisect:before,
  div.homepage-pricing-questions .row .col.col-trisect:before,
  div.homepage-feature-questions .row .col.col-trisect:before,
  div.homepage-pricing-questions .row .col.trisect:after,
  div.homepage-feature-questions .row .col.trisect:after,
  div.homepage-pricing-questions .row .col.col-trisect:after,
  div.homepage-feature-questions .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.homepage-pricing-questions .row .col.trisect:after,
  div.homepage-feature-questions .row .col.trisect:after,
  div.homepage-pricing-questions .row .col.col-trisect:after,
  div.homepage-feature-questions .row .col.col-trisect:after {
    clear: both;
  }
  div.homepage-pricing-questions .row .col.major,
  div.homepage-feature-questions .row .col.major,
  div.homepage-pricing-questions .row .col.col-major,
  div.homepage-feature-questions .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.homepage-pricing-questions .row .col.major:before,
  div.homepage-feature-questions .row .col.major:before,
  div.homepage-pricing-questions .row .col.col-major:before,
  div.homepage-feature-questions .row .col.col-major:before,
  div.homepage-pricing-questions .row .col.major:after,
  div.homepage-feature-questions .row .col.major:after,
  div.homepage-pricing-questions .row .col.col-major:after,
  div.homepage-feature-questions .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.homepage-pricing-questions .row .col.major:after,
  div.homepage-feature-questions .row .col.major:after,
  div.homepage-pricing-questions .row .col.col-major:after,
  div.homepage-feature-questions .row .col.col-major:after {
    clear: both;
  }
  div.homepage-pricing-questions .row .col.minor,
  div.homepage-feature-questions .row .col.minor,
  div.homepage-pricing-questions .row .col.col-minor,
  div.homepage-feature-questions .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.homepage-pricing-questions .row .col.minor:before,
  div.homepage-feature-questions .row .col.minor:before,
  div.homepage-pricing-questions .row .col.col-minor:before,
  div.homepage-feature-questions .row .col.col-minor:before,
  div.homepage-pricing-questions .row .col.minor:after,
  div.homepage-feature-questions .row .col.minor:after,
  div.homepage-pricing-questions .row .col.col-minor:after,
  div.homepage-feature-questions .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.homepage-pricing-questions .row .col.minor:after,
  div.homepage-feature-questions .row .col.minor:after,
  div.homepage-pricing-questions .row .col.col-minor:after,
  div.homepage-feature-questions .row .col.col-minor:after {
    clear: both;
  }
}
div.homepage-pricing-questions a,
div.homepage-feature-questions a {
  text-decoration: none;
}
div.homepage-pricing-questions a:link,
div.homepage-feature-questions a:link,
div.homepage-pricing-questions a:visited,
div.homepage-feature-questions a:visited {
  color: #6ab0de;
}
div.homepage-pricing-questions a:hover,
div.homepage-feature-questions a:hover,
div.homepage-pricing-questions a:active,
div.homepage-feature-questions a:active {
  color: #547d99;
}
@media (max-width: 1000px) {
  div.homepage-pricing-questions,
  div.homepage-feature-questions {
    font-size: 1.1em;
  }
}
div.homepage-pricing-questions p > a,
div.homepage-feature-questions p > a {
  display: inline-block;
  padding: .3em .65em;
  margin: 0em .3em;
  background: #f05330;
  color: #fcfcfc;
  border-radius: .3em;
}
div.homepage-pricing-questions p > a:link,
div.homepage-feature-questions p > a:link,
div.homepage-pricing-questions p > a:visited,
div.homepage-feature-questions p > a:visited,
div.homepage-pricing-questions p > a:hover,
div.homepage-feature-questions p > a:hover,
div.homepage-pricing-questions p > a:active,
div.homepage-feature-questions p > a:active {
  color: #fcfcfc;
}
div.homepage-pricing-questions p > a:hover,
div.homepage-feature-questions p > a:hover,
div.homepage-pricing-questions p > a:active,
div.homepage-feature-questions p > a:active {
  background: #b0b0b0;
}
div.homepage-pricing-questions sup,
div.homepage-feature-questions sup {
  display: block;
  margin: .65em;
  font-size: .8em;
}
div.features {
  overflow: hidden;
}
div.features .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.features .row:before,
div.features .row:after {
  content: "";
  display: table;
}
div.features .row:after {
  clear: both;
}
div.features .row .col.fill,
div.features .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.features .row .col.fill:before,
div.features .row .col.col-fill:before,
div.features .row .col.fill:after,
div.features .row .col.col-fill:after {
  content: "";
  display: table;
}
div.features .row .col.fill:after,
div.features .row .col.col-fill:after {
  clear: both;
}
div.features .row .col.center,
div.features .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.features .row .col.center:before,
div.features .row .col.col-center:before,
div.features .row .col.center:after,
div.features .row .col.col-center:after {
  content: "";
  display: table;
}
div.features .row .col.center:after,
div.features .row .col.col-center:after {
  clear: both;
}
div.features .row .col.bisect,
div.features .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.features .row .col.bisect:before,
div.features .row .col.col-bisect:before,
div.features .row .col.bisect:after,
div.features .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.features .row .col.bisect:after,
div.features .row .col.col-bisect:after {
  clear: both;
}
div.features .row .col.trisect,
div.features .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.features .row .col.trisect:before,
div.features .row .col.col-trisect:before,
div.features .row .col.trisect:after,
div.features .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.features .row .col.trisect:after,
div.features .row .col.col-trisect:after {
  clear: both;
}
div.features .row .col.major,
div.features .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.features .row .col.major:before,
div.features .row .col.col-major:before,
div.features .row .col.major:after,
div.features .row .col.col-major:after {
  content: "";
  display: table;
}
div.features .row .col.major:after,
div.features .row .col.col-major:after {
  clear: both;
}
div.features .row .col.minor,
div.features .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.features .row .col.minor:before,
div.features .row .col.col-minor:before,
div.features .row .col.minor:after,
div.features .row .col.col-minor:after {
  content: "";
  display: table;
}
div.features .row .col.minor:after,
div.features .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.features {
    overflow: hidden;
  }
  div.features .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.features .row:before,
  div.features .row:after {
    content: "";
    display: table;
  }
  div.features .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.features {
    overflow: hidden;
  }
  div.features .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.features .row:before,
  div.features .row:after {
    content: "";
    display: table;
  }
  div.features .row:after {
    clear: both;
  }
  div.features .row .col.fill,
  div.features .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.features .row .col.fill:before,
  div.features .row .col.col-fill:before,
  div.features .row .col.fill:after,
  div.features .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.features .row .col.fill:after,
  div.features .row .col.col-fill:after {
    clear: both;
  }
  div.features .row .col.center,
  div.features .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.features .row .col.center:before,
  div.features .row .col.col-center:before,
  div.features .row .col.center:after,
  div.features .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.features .row .col.center:after,
  div.features .row .col.col-center:after {
    clear: both;
  }
  div.features .row .col.bisect,
  div.features .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.features .row .col.bisect:before,
  div.features .row .col.col-bisect:before,
  div.features .row .col.bisect:after,
  div.features .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.features .row .col.bisect:after,
  div.features .row .col.col-bisect:after {
    clear: both;
  }
  div.features .row .col.trisect,
  div.features .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.features .row .col.trisect:before,
  div.features .row .col.col-trisect:before,
  div.features .row .col.trisect:after,
  div.features .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.features .row .col.trisect:after,
  div.features .row .col.col-trisect:after {
    clear: both;
  }
  div.features .row .col.major,
  div.features .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.features .row .col.major:before,
  div.features .row .col.col-major:before,
  div.features .row .col.major:after,
  div.features .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.features .row .col.major:after,
  div.features .row .col.col-major:after {
    clear: both;
  }
  div.features .row .col.minor,
  div.features .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.features .row .col.minor:before,
  div.features .row .col.col-minor:before,
  div.features .row .col.minor:after,
  div.features .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.features .row .col.minor:after,
  div.features .row .col.col-minor:after {
    clear: both;
  }
}
div.features p {
  font-size: 1.1em;
}
div.features h2 {
  font-size: 1.3em;
}
div.features ul.features-list {
  font-size: 1.1em;
}
@media (max-width: 800px), (max-device-width: 800px) {
  div.features p {
    font-size: 1em;
  }
  div.features h2 {
    font-size: 1.2em;
  }
  div.features ul.features-list {
    font-size: 1em;
  }
}
div.features {
  font-family: Lato;
  font-size: 1em;
  background: #fcfcfc;
  color: #343131;
  padding: 2em 0em;
}
div.features a {
  text-decoration: none;
}
div.features a:link,
div.features a:visited {
  color: #2980b9;
}
div.features a:hover,
div.features a:active {
  color: #7db2d4;
}
div.features h2 {
  text-align: center;
  margin-bottom: 1.5em;
  color: #343131;
}
div.features p i {
  font-style: italic;
}
ul.features-list {
  padding-left: 1.5em;
  padding-right: .5em;
}
ul.features-list > li {
  line-height: 1.5em;
}
ul.features-list > li:before {
  width: 1em;
  height: 1em;
  padding-right: .1em;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  margin: 0.3em 0.3em 0.3em -1.3em;
  font-size: 1.1em;
  content: '\e11d';
}
ul.features-list > li.feature-rst:before {
  content: '\e04c';
}
ul.features-list > li.feature-markdown:before {
  content: '\e04c';
}
ul.features-list > li.feature-sphinx:before {
  content: '\e0c3';
}
ul.features-list > li.feature-languages:before {
  content: '\e09b';
}
ul.features-list > li.feature-github:before {
  content: '\e0e9';
}
ul.features-list > li.feature-bitbucket:before {
  content: '\e126';
}
ul.features-list > li.feature-vcs:before {
  content: '\e077';
}
ul.features-list > li.feature-secure:before {
  content: '\e0a1';
}
ul.features-list > li.feature-private:before {
  content: '\e06e';
}
ul.features-list > li.feature-public:before {
  content: '\e080';
}
ul.features-list > li.feature-i18n:before {
  content: '\e073';
}
ul.features-list > li.feature-offline:before {
  content: '\e064';
}
div.features-pricing {
  overflow: hidden;
  font-family: Lato;
  font-size: 1em;
  background: #343131;
  color: #fcfcfc;
  margin: 0em;
  font-size: 1.2em;
  text-align: center;
}
div.features-pricing .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.features-pricing .row:before,
div.features-pricing .row:after {
  content: "";
  display: table;
}
div.features-pricing .row:after {
  clear: both;
}
div.features-pricing .row .col.fill,
div.features-pricing .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.features-pricing .row .col.fill:before,
div.features-pricing .row .col.col-fill:before,
div.features-pricing .row .col.fill:after,
div.features-pricing .row .col.col-fill:after {
  content: "";
  display: table;
}
div.features-pricing .row .col.fill:after,
div.features-pricing .row .col.col-fill:after {
  clear: both;
}
div.features-pricing .row .col.center,
div.features-pricing .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.features-pricing .row .col.center:before,
div.features-pricing .row .col.col-center:before,
div.features-pricing .row .col.center:after,
div.features-pricing .row .col.col-center:after {
  content: "";
  display: table;
}
div.features-pricing .row .col.center:after,
div.features-pricing .row .col.col-center:after {
  clear: both;
}
div.features-pricing .row .col.bisect,
div.features-pricing .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.features-pricing .row .col.bisect:before,
div.features-pricing .row .col.col-bisect:before,
div.features-pricing .row .col.bisect:after,
div.features-pricing .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.features-pricing .row .col.bisect:after,
div.features-pricing .row .col.col-bisect:after {
  clear: both;
}
div.features-pricing .row .col.trisect,
div.features-pricing .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.features-pricing .row .col.trisect:before,
div.features-pricing .row .col.col-trisect:before,
div.features-pricing .row .col.trisect:after,
div.features-pricing .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.features-pricing .row .col.trisect:after,
div.features-pricing .row .col.col-trisect:after {
  clear: both;
}
div.features-pricing .row .col.major,
div.features-pricing .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.features-pricing .row .col.major:before,
div.features-pricing .row .col.col-major:before,
div.features-pricing .row .col.major:after,
div.features-pricing .row .col.col-major:after {
  content: "";
  display: table;
}
div.features-pricing .row .col.major:after,
div.features-pricing .row .col.col-major:after {
  clear: both;
}
div.features-pricing .row .col.minor,
div.features-pricing .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.features-pricing .row .col.minor:before,
div.features-pricing .row .col.col-minor:before,
div.features-pricing .row .col.minor:after,
div.features-pricing .row .col.col-minor:after {
  content: "";
  display: table;
}
div.features-pricing .row .col.minor:after,
div.features-pricing .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.features-pricing {
    overflow: hidden;
  }
  div.features-pricing .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.features-pricing .row:before,
  div.features-pricing .row:after {
    content: "";
    display: table;
  }
  div.features-pricing .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.features-pricing {
    overflow: hidden;
  }
  div.features-pricing .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.features-pricing .row:before,
  div.features-pricing .row:after {
    content: "";
    display: table;
  }
  div.features-pricing .row:after {
    clear: both;
  }
  div.features-pricing .row .col.fill,
  div.features-pricing .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.features-pricing .row .col.fill:before,
  div.features-pricing .row .col.col-fill:before,
  div.features-pricing .row .col.fill:after,
  div.features-pricing .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.features-pricing .row .col.fill:after,
  div.features-pricing .row .col.col-fill:after {
    clear: both;
  }
  div.features-pricing .row .col.center,
  div.features-pricing .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.features-pricing .row .col.center:before,
  div.features-pricing .row .col.col-center:before,
  div.features-pricing .row .col.center:after,
  div.features-pricing .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.features-pricing .row .col.center:after,
  div.features-pricing .row .col.col-center:after {
    clear: both;
  }
  div.features-pricing .row .col.bisect,
  div.features-pricing .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.features-pricing .row .col.bisect:before,
  div.features-pricing .row .col.col-bisect:before,
  div.features-pricing .row .col.bisect:after,
  div.features-pricing .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.features-pricing .row .col.bisect:after,
  div.features-pricing .row .col.col-bisect:after {
    clear: both;
  }
  div.features-pricing .row .col.trisect,
  div.features-pricing .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.features-pricing .row .col.trisect:before,
  div.features-pricing .row .col.col-trisect:before,
  div.features-pricing .row .col.trisect:after,
  div.features-pricing .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.features-pricing .row .col.trisect:after,
  div.features-pricing .row .col.col-trisect:after {
    clear: both;
  }
  div.features-pricing .row .col.major,
  div.features-pricing .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.features-pricing .row .col.major:before,
  div.features-pricing .row .col.col-major:before,
  div.features-pricing .row .col.major:after,
  div.features-pricing .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.features-pricing .row .col.major:after,
  div.features-pricing .row .col.col-major:after {
    clear: both;
  }
  div.features-pricing .row .col.minor,
  div.features-pricing .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.features-pricing .row .col.minor:before,
  div.features-pricing .row .col.col-minor:before,
  div.features-pricing .row .col.minor:after,
  div.features-pricing .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.features-pricing .row .col.minor:after,
  div.features-pricing .row .col.col-minor:after {
    clear: both;
  }
}
div.features-pricing a {
  text-decoration: none;
}
div.features-pricing a:link,
div.features-pricing a:visited {
  color: #6ab0de;
}
div.features-pricing a:hover,
div.features-pricing a:active {
  color: #547d99;
}
@media (max-width: 1000px) {
  div.features-pricing {
    font-size: 1.1em;
  }
}
div.features-pricing p > a {
  display: inline-block;
  padding: .3em .65em;
  margin: 0em .3em;
  background: #f05330;
  color: #fcfcfc;
  border-radius: .3em;
}
div.features-pricing p > a:link,
div.features-pricing p > a:visited,
div.features-pricing p > a:hover,
div.features-pricing p > a:active {
  color: #fcfcfc;
}
div.features-pricing p > a:hover,
div.features-pricing p > a:active {
  background: #b0b0b0;
}
div.features-pricing sup {
  display: block;
  margin: .65em;
  font-size: .8em;
}
div.pricing-faq {
  overflow: hidden;
}
div.pricing-faq .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.pricing-faq .row:before,
div.pricing-faq .row:after {
  content: "";
  display: table;
}
div.pricing-faq .row:after {
  clear: both;
}
div.pricing-faq .row .col.fill,
div.pricing-faq .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing-faq .row .col.fill:before,
div.pricing-faq .row .col.col-fill:before,
div.pricing-faq .row .col.fill:after,
div.pricing-faq .row .col.col-fill:after {
  content: "";
  display: table;
}
div.pricing-faq .row .col.fill:after,
div.pricing-faq .row .col.col-fill:after {
  clear: both;
}
div.pricing-faq .row .col.center,
div.pricing-faq .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing-faq .row .col.center:before,
div.pricing-faq .row .col.col-center:before,
div.pricing-faq .row .col.center:after,
div.pricing-faq .row .col.col-center:after {
  content: "";
  display: table;
}
div.pricing-faq .row .col.center:after,
div.pricing-faq .row .col.col-center:after {
  clear: both;
}
div.pricing-faq .row .col.bisect,
div.pricing-faq .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing-faq .row .col.bisect:before,
div.pricing-faq .row .col.col-bisect:before,
div.pricing-faq .row .col.bisect:after,
div.pricing-faq .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.pricing-faq .row .col.bisect:after,
div.pricing-faq .row .col.col-bisect:after {
  clear: both;
}
div.pricing-faq .row .col.trisect,
div.pricing-faq .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing-faq .row .col.trisect:before,
div.pricing-faq .row .col.col-trisect:before,
div.pricing-faq .row .col.trisect:after,
div.pricing-faq .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.pricing-faq .row .col.trisect:after,
div.pricing-faq .row .col.col-trisect:after {
  clear: both;
}
div.pricing-faq .row .col.major,
div.pricing-faq .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing-faq .row .col.major:before,
div.pricing-faq .row .col.col-major:before,
div.pricing-faq .row .col.major:after,
div.pricing-faq .row .col.col-major:after {
  content: "";
  display: table;
}
div.pricing-faq .row .col.major:after,
div.pricing-faq .row .col.col-major:after {
  clear: both;
}
div.pricing-faq .row .col.minor,
div.pricing-faq .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing-faq .row .col.minor:before,
div.pricing-faq .row .col.col-minor:before,
div.pricing-faq .row .col.minor:after,
div.pricing-faq .row .col.col-minor:after {
  content: "";
  display: table;
}
div.pricing-faq .row .col.minor:after,
div.pricing-faq .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.pricing-faq {
    overflow: hidden;
  }
  div.pricing-faq .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.pricing-faq .row:before,
  div.pricing-faq .row:after {
    content: "";
    display: table;
  }
  div.pricing-faq .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.pricing-faq {
    overflow: hidden;
  }
  div.pricing-faq .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.pricing-faq .row:before,
  div.pricing-faq .row:after {
    content: "";
    display: table;
  }
  div.pricing-faq .row:after {
    clear: both;
  }
  div.pricing-faq .row .col.fill,
  div.pricing-faq .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing-faq .row .col.fill:before,
  div.pricing-faq .row .col.col-fill:before,
  div.pricing-faq .row .col.fill:after,
  div.pricing-faq .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.pricing-faq .row .col.fill:after,
  div.pricing-faq .row .col.col-fill:after {
    clear: both;
  }
  div.pricing-faq .row .col.center,
  div.pricing-faq .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing-faq .row .col.center:before,
  div.pricing-faq .row .col.col-center:before,
  div.pricing-faq .row .col.center:after,
  div.pricing-faq .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.pricing-faq .row .col.center:after,
  div.pricing-faq .row .col.col-center:after {
    clear: both;
  }
  div.pricing-faq .row .col.bisect,
  div.pricing-faq .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing-faq .row .col.bisect:before,
  div.pricing-faq .row .col.col-bisect:before,
  div.pricing-faq .row .col.bisect:after,
  div.pricing-faq .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.pricing-faq .row .col.bisect:after,
  div.pricing-faq .row .col.col-bisect:after {
    clear: both;
  }
  div.pricing-faq .row .col.trisect,
  div.pricing-faq .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing-faq .row .col.trisect:before,
  div.pricing-faq .row .col.col-trisect:before,
  div.pricing-faq .row .col.trisect:after,
  div.pricing-faq .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.pricing-faq .row .col.trisect:after,
  div.pricing-faq .row .col.col-trisect:after {
    clear: both;
  }
  div.pricing-faq .row .col.major,
  div.pricing-faq .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing-faq .row .col.major:before,
  div.pricing-faq .row .col.col-major:before,
  div.pricing-faq .row .col.major:after,
  div.pricing-faq .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.pricing-faq .row .col.major:after,
  div.pricing-faq .row .col.col-major:after {
    clear: both;
  }
  div.pricing-faq .row .col.minor,
  div.pricing-faq .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing-faq .row .col.minor:before,
  div.pricing-faq .row .col.col-minor:before,
  div.pricing-faq .row .col.minor:after,
  div.pricing-faq .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.pricing-faq .row .col.minor:after,
  div.pricing-faq .row .col.col-minor:after {
    clear: both;
  }
}
div.pricing {
  overflow: hidden;
  padding: 2em 0em 4em 0em;
}
div.pricing .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.pricing .row:before,
div.pricing .row:after {
  content: "";
  display: table;
}
div.pricing .row:after {
  clear: both;
}
div.pricing .row .col.fill,
div.pricing .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing .row .col.fill:before,
div.pricing .row .col.col-fill:before,
div.pricing .row .col.fill:after,
div.pricing .row .col.col-fill:after {
  content: "";
  display: table;
}
div.pricing .row .col.fill:after,
div.pricing .row .col.col-fill:after {
  clear: both;
}
div.pricing .row .col.center,
div.pricing .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing .row .col.center:before,
div.pricing .row .col.col-center:before,
div.pricing .row .col.center:after,
div.pricing .row .col.col-center:after {
  content: "";
  display: table;
}
div.pricing .row .col.center:after,
div.pricing .row .col.col-center:after {
  clear: both;
}
div.pricing .row .col.bisect,
div.pricing .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing .row .col.bisect:before,
div.pricing .row .col.col-bisect:before,
div.pricing .row .col.bisect:after,
div.pricing .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.pricing .row .col.bisect:after,
div.pricing .row .col.col-bisect:after {
  clear: both;
}
div.pricing .row .col.trisect,
div.pricing .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing .row .col.trisect:before,
div.pricing .row .col.col-trisect:before,
div.pricing .row .col.trisect:after,
div.pricing .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.pricing .row .col.trisect:after,
div.pricing .row .col.col-trisect:after {
  clear: both;
}
div.pricing .row .col.major,
div.pricing .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing .row .col.major:before,
div.pricing .row .col.col-major:before,
div.pricing .row .col.major:after,
div.pricing .row .col.col-major:after {
  content: "";
  display: table;
}
div.pricing .row .col.major:after,
div.pricing .row .col.col-major:after {
  clear: both;
}
div.pricing .row .col.minor,
div.pricing .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing .row .col.minor:before,
div.pricing .row .col.col-minor:before,
div.pricing .row .col.minor:after,
div.pricing .row .col.col-minor:after {
  content: "";
  display: table;
}
div.pricing .row .col.minor:after,
div.pricing .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.pricing {
    overflow: hidden;
  }
  div.pricing .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.pricing .row:before,
  div.pricing .row:after {
    content: "";
    display: table;
  }
  div.pricing .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.pricing {
    overflow: hidden;
  }
  div.pricing .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.pricing .row:before,
  div.pricing .row:after {
    content: "";
    display: table;
  }
  div.pricing .row:after {
    clear: both;
  }
  div.pricing .row .col.fill,
  div.pricing .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing .row .col.fill:before,
  div.pricing .row .col.col-fill:before,
  div.pricing .row .col.fill:after,
  div.pricing .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.pricing .row .col.fill:after,
  div.pricing .row .col.col-fill:after {
    clear: both;
  }
  div.pricing .row .col.center,
  div.pricing .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing .row .col.center:before,
  div.pricing .row .col.col-center:before,
  div.pricing .row .col.center:after,
  div.pricing .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.pricing .row .col.center:after,
  div.pricing .row .col.col-center:after {
    clear: both;
  }
  div.pricing .row .col.bisect,
  div.pricing .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing .row .col.bisect:before,
  div.pricing .row .col.col-bisect:before,
  div.pricing .row .col.bisect:after,
  div.pricing .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.pricing .row .col.bisect:after,
  div.pricing .row .col.col-bisect:after {
    clear: both;
  }
  div.pricing .row .col.trisect,
  div.pricing .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing .row .col.trisect:before,
  div.pricing .row .col.col-trisect:before,
  div.pricing .row .col.trisect:after,
  div.pricing .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.pricing .row .col.trisect:after,
  div.pricing .row .col.col-trisect:after {
    clear: both;
  }
  div.pricing .row .col.major,
  div.pricing .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing .row .col.major:before,
  div.pricing .row .col.col-major:before,
  div.pricing .row .col.major:after,
  div.pricing .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.pricing .row .col.major:after,
  div.pricing .row .col.col-major:after {
    clear: both;
  }
  div.pricing .row .col.minor,
  div.pricing .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing .row .col.minor:before,
  div.pricing .row .col.col-minor:before,
  div.pricing .row .col.minor:after,
  div.pricing .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.pricing .row .col.minor:after,
  div.pricing .row .col.col-minor:after {
    clear: both;
  }
}
div.pricing h1,
div.pricing h2,
div.pricing h3 {
  margin: .6em 0em 1em 0em;
  padding-top: 0em;
  text-align: center;
  text-shadow: 0px 2px #efefef;
}
div.pricing p {
  line-height: 1.3em;
}
div.pricing div.pricing-intro p {
  padding: 0em;
  margin-top: .3em;
  text-align: center;
  line-height: 1.5em;
  font-size: 1.1em;
}
div.pricing div.pricing-intro p b {
  text-decoration: underline;
}
div.pricing ul {
  margin: 1.5em;
}
div.pricing-plans table.plans {
  margin-top: 2em;
}
div.pricing-plans table.plans td {
  width: 25%;
  display: table-cell;
  float: none;
  padding: 0em .5em;
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.pricing-plans table.plans td {
    width: auto;
    display: block;
    margin-top: 2em;
    margin-left: 1em;
    margin-right: 1em;
    padding: 0em;
  }
  div.pricing-plans table.plans td div.plan {
    padding: 1em 0em 6em 0em;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.pricing-plans table.plans {
    display: block;
    height: auto;
    margin-top: 0em;
  }
}
div.pricing-plans table.plans div.plan {
  font-family: Lato;
  font-size: 1em;
  background: #343131;
  color: #fcfcfc;
  margin: 0em;
  padding: 1em 0em 6em 0em;
  position: relative;
  height: 100%;
  overflow: auto;
  border-radius: .5em;
  -moz-border-radius: .5em;
  -webkit-border-radius: .5em;
}
div.pricing-plans table.plans div.plan a {
  text-decoration: none;
}
div.pricing-plans table.plans div.plan a:link,
div.pricing-plans table.plans div.plan a:visited {
  color: #6ab0de;
}
div.pricing-plans table.plans div.plan a:hover,
div.pricing-plans table.plans div.plan a:active {
  color: #547d99;
}
div.pricing-plans table.plans div.plan h1,
div.pricing-plans table.plans div.plan h2,
div.pricing-plans table.plans div.plan h3 {
  text-align: left;
  text-shadow: 0px 2px #272525;
  padding-bottom: .5em;
  border-bottom: 1px dashed #4e4a4a;
}
div.pricing-plans table.plans div.plan h1 {
  margin: 0em .625em;
}
div.pricing-plans table.plans div.plan h2 {
  margin: 0em .666em;
}
div.pricing-plans table.plans div.plan h3 {
  margin: 0em .714em;
}
div.pricing-plans table.plans div.plan p {
  margin: 1em;
}
div.pricing-plans table.plans div.plan p.plan-suggestion {
  padding: .35em .65em;
  margin: 1.25em;
  font-size: .9em;
  font-style: italic;
}
div.pricing-plans table.plans div.plan a.plan-more {
  font-size: .9em;
  font-style: italic;
}
div.pricing-plans table.plans div.plan ul {
  margin: 1em;
}
div.pricing-plans table.plans div.plan ul li {
  line-height: 1.25em;
  margin: .5em 0em;
  font-size: 1em;
}
div.pricing-plans table.plans div.plan ul li.plan-feature-users,
div.pricing-plans table.plans div.plan ul li.plan-feature-pageviews {
  font-size: .9em;
  color: #9c9595;
}
div.pricing-plans table.plans div.plan div.plan-cost {
  position: absolute;
  bottom: 1em;
  width: 100%;
  padding: 1em 0em;
  background: #413d3d;
  font-size: 1.2em;
  text-align: center;
}
div.pricing-plans table.plans div.plan div.plan-cost > sup {
  display: block;
  font-size: .8em;
}
div.pricing-plans table.plans div.plan.plan-custom ul {
  margin: 1em 1em 1em 1.5em;
}
div.pricing-plans table.plans div.plan.plan-custom div.plan-cost {
  line-height: 1.8em;
}
div.pricing-plans table.plans td.plans-features {
  text-align: center;
  font-size: 1.1em;
}
div.pricing-plans table.plans td.plans-features p:first-child {
  font-weight: bold;
}
div.pricing-plans table.plans td.plans-features p.plans-features-open {
  font-size: .9em;
}
div.pricing-plans table.plans td.plans-features ul {
  margin: 0em;
  display: inline-block;
  text-align: left;
}
div.pricing-plans table.plans td.plans-features ul li {
  margin: .6em 0em;
}
div.pricing-plans table.plans td.plans-features ul li:before {
  width: 1em;
  height: 1em;
  padding-right: .1em;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  color: #2980b9;
  font-size: 1.2em;
  line-height: 1em;
  padding-right: .4em;
}
div.pricing-plans table.plans td.plans-features ul li.plans-features-projects:before {
  content: '\e08f';
}
div.pricing-plans table.plans td.plans-features ul li.plans-features-teams:before {
  content: '\e083';
}
div.pricing-plans table.plans td.plans-features ul li.plans-features-versions:before {
  content: '\e10e';
}
div.pricing-plans table.plans td.plans-features ul li.plans-features-builds:before {
  content: '\e103';
}
div.pricing-plans table.plans td.plans-features ul li.plans-features-search:before {
  content: '\e14f';
}
div.pricing-plans table.plans td.plans-features ul li.plans-features-support:before {
  content: '\e10d';
}
div.pricing-plans table.plans td.plans-features ul li.plans-features-trial:before {
  content: '\e10c';
}
div.pricing-faq {
  font-family: Lato;
  font-size: 1em;
  background: #fcfcfc;
  color: #343131;
  padding: 2em 0em;
}
div.pricing-faq a {
  text-decoration: none;
}
div.pricing-faq a:link,
div.pricing-faq a:visited {
  color: #2980b9;
}
div.pricing-faq a:hover,
div.pricing-faq a:active {
  color: #7db2d4;
}
div.pricing-faq h2 {
  text-align: center;
  margin-bottom: 1.5em;
}
div.pricing-faq dl > dt {
  margin: 1em 0em .65em 0em;
  font-size: 1.3em;
}
div.pricing-faq dl > dd {
  padding: .3em .65em;
  font-size: 1.1em;
  line-height: 1.3em;
}
div.pricing-questions {
  overflow: hidden;
  font-family: Lato;
  font-size: 1em;
  background: #343131;
  color: #fcfcfc;
  margin: 0em;
  font-size: 1.2em;
  text-align: center;
}
div.pricing-questions .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.pricing-questions .row:before,
div.pricing-questions .row:after {
  content: "";
  display: table;
}
div.pricing-questions .row:after {
  clear: both;
}
div.pricing-questions .row .col.fill,
div.pricing-questions .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing-questions .row .col.fill:before,
div.pricing-questions .row .col.col-fill:before,
div.pricing-questions .row .col.fill:after,
div.pricing-questions .row .col.col-fill:after {
  content: "";
  display: table;
}
div.pricing-questions .row .col.fill:after,
div.pricing-questions .row .col.col-fill:after {
  clear: both;
}
div.pricing-questions .row .col.center,
div.pricing-questions .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing-questions .row .col.center:before,
div.pricing-questions .row .col.col-center:before,
div.pricing-questions .row .col.center:after,
div.pricing-questions .row .col.col-center:after {
  content: "";
  display: table;
}
div.pricing-questions .row .col.center:after,
div.pricing-questions .row .col.col-center:after {
  clear: both;
}
div.pricing-questions .row .col.bisect,
div.pricing-questions .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing-questions .row .col.bisect:before,
div.pricing-questions .row .col.col-bisect:before,
div.pricing-questions .row .col.bisect:after,
div.pricing-questions .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.pricing-questions .row .col.bisect:after,
div.pricing-questions .row .col.col-bisect:after {
  clear: both;
}
div.pricing-questions .row .col.trisect,
div.pricing-questions .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing-questions .row .col.trisect:before,
div.pricing-questions .row .col.col-trisect:before,
div.pricing-questions .row .col.trisect:after,
div.pricing-questions .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.pricing-questions .row .col.trisect:after,
div.pricing-questions .row .col.col-trisect:after {
  clear: both;
}
div.pricing-questions .row .col.major,
div.pricing-questions .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing-questions .row .col.major:before,
div.pricing-questions .row .col.col-major:before,
div.pricing-questions .row .col.major:after,
div.pricing-questions .row .col.col-major:after {
  content: "";
  display: table;
}
div.pricing-questions .row .col.major:after,
div.pricing-questions .row .col.col-major:after {
  clear: both;
}
div.pricing-questions .row .col.minor,
div.pricing-questions .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.pricing-questions .row .col.minor:before,
div.pricing-questions .row .col.col-minor:before,
div.pricing-questions .row .col.minor:after,
div.pricing-questions .row .col.col-minor:after {
  content: "";
  display: table;
}
div.pricing-questions .row .col.minor:after,
div.pricing-questions .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.pricing-questions {
    overflow: hidden;
  }
  div.pricing-questions .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.pricing-questions .row:before,
  div.pricing-questions .row:after {
    content: "";
    display: table;
  }
  div.pricing-questions .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.pricing-questions {
    overflow: hidden;
  }
  div.pricing-questions .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.pricing-questions .row:before,
  div.pricing-questions .row:after {
    content: "";
    display: table;
  }
  div.pricing-questions .row:after {
    clear: both;
  }
  div.pricing-questions .row .col.fill,
  div.pricing-questions .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing-questions .row .col.fill:before,
  div.pricing-questions .row .col.col-fill:before,
  div.pricing-questions .row .col.fill:after,
  div.pricing-questions .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.pricing-questions .row .col.fill:after,
  div.pricing-questions .row .col.col-fill:after {
    clear: both;
  }
  div.pricing-questions .row .col.center,
  div.pricing-questions .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing-questions .row .col.center:before,
  div.pricing-questions .row .col.col-center:before,
  div.pricing-questions .row .col.center:after,
  div.pricing-questions .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.pricing-questions .row .col.center:after,
  div.pricing-questions .row .col.col-center:after {
    clear: both;
  }
  div.pricing-questions .row .col.bisect,
  div.pricing-questions .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing-questions .row .col.bisect:before,
  div.pricing-questions .row .col.col-bisect:before,
  div.pricing-questions .row .col.bisect:after,
  div.pricing-questions .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.pricing-questions .row .col.bisect:after,
  div.pricing-questions .row .col.col-bisect:after {
    clear: both;
  }
  div.pricing-questions .row .col.trisect,
  div.pricing-questions .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing-questions .row .col.trisect:before,
  div.pricing-questions .row .col.col-trisect:before,
  div.pricing-questions .row .col.trisect:after,
  div.pricing-questions .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.pricing-questions .row .col.trisect:after,
  div.pricing-questions .row .col.col-trisect:after {
    clear: both;
  }
  div.pricing-questions .row .col.major,
  div.pricing-questions .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing-questions .row .col.major:before,
  div.pricing-questions .row .col.col-major:before,
  div.pricing-questions .row .col.major:after,
  div.pricing-questions .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.pricing-questions .row .col.major:after,
  div.pricing-questions .row .col.col-major:after {
    clear: both;
  }
  div.pricing-questions .row .col.minor,
  div.pricing-questions .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.pricing-questions .row .col.minor:before,
  div.pricing-questions .row .col.col-minor:before,
  div.pricing-questions .row .col.minor:after,
  div.pricing-questions .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.pricing-questions .row .col.minor:after,
  div.pricing-questions .row .col.col-minor:after {
    clear: both;
  }
}
div.pricing-questions a {
  text-decoration: none;
}
div.pricing-questions a:link,
div.pricing-questions a:visited {
  color: #6ab0de;
}
div.pricing-questions a:hover,
div.pricing-questions a:active {
  color: #547d99;
}
@media (max-width: 1000px) {
  div.pricing-questions {
    font-size: 1.1em;
  }
}
div.pricing-questions p > a {
  display: inline-block;
  padding: .3em .65em;
  margin: 0em .3em;
  background: #f05330;
  color: #fcfcfc;
  border-radius: .3em;
}
div.pricing-questions p > a:link,
div.pricing-questions p > a:visited,
div.pricing-questions p > a:hover,
div.pricing-questions p > a:active {
  color: #fcfcfc;
}
div.pricing-questions p > a:hover,
div.pricing-questions p > a:active {
  background: #b0b0b0;
}
div.pricing-questions sup {
  display: block;
  margin: .65em;
  font-size: .8em;
}
div.enterprise,
div.enterprise-header {
  overflow: hidden;
}
div.enterprise .row,
div.enterprise-header .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.enterprise .row:before,
div.enterprise-header .row:before,
div.enterprise .row:after,
div.enterprise-header .row:after {
  content: "";
  display: table;
}
div.enterprise .row:after,
div.enterprise-header .row:after {
  clear: both;
}
div.enterprise .row .col.fill,
div.enterprise-header .row .col.fill,
div.enterprise .row .col.col-fill,
div.enterprise-header .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.enterprise .row .col.fill:before,
div.enterprise-header .row .col.fill:before,
div.enterprise .row .col.col-fill:before,
div.enterprise-header .row .col.col-fill:before,
div.enterprise .row .col.fill:after,
div.enterprise-header .row .col.fill:after,
div.enterprise .row .col.col-fill:after,
div.enterprise-header .row .col.col-fill:after {
  content: "";
  display: table;
}
div.enterprise .row .col.fill:after,
div.enterprise-header .row .col.fill:after,
div.enterprise .row .col.col-fill:after,
div.enterprise-header .row .col.col-fill:after {
  clear: both;
}
div.enterprise .row .col.center,
div.enterprise-header .row .col.center,
div.enterprise .row .col.col-center,
div.enterprise-header .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.enterprise .row .col.center:before,
div.enterprise-header .row .col.center:before,
div.enterprise .row .col.col-center:before,
div.enterprise-header .row .col.col-center:before,
div.enterprise .row .col.center:after,
div.enterprise-header .row .col.center:after,
div.enterprise .row .col.col-center:after,
div.enterprise-header .row .col.col-center:after {
  content: "";
  display: table;
}
div.enterprise .row .col.center:after,
div.enterprise-header .row .col.center:after,
div.enterprise .row .col.col-center:after,
div.enterprise-header .row .col.col-center:after {
  clear: both;
}
div.enterprise .row .col.bisect,
div.enterprise-header .row .col.bisect,
div.enterprise .row .col.col-bisect,
div.enterprise-header .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.enterprise .row .col.bisect:before,
div.enterprise-header .row .col.bisect:before,
div.enterprise .row .col.col-bisect:before,
div.enterprise-header .row .col.col-bisect:before,
div.enterprise .row .col.bisect:after,
div.enterprise-header .row .col.bisect:after,
div.enterprise .row .col.col-bisect:after,
div.enterprise-header .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.enterprise .row .col.bisect:after,
div.enterprise-header .row .col.bisect:after,
div.enterprise .row .col.col-bisect:after,
div.enterprise-header .row .col.col-bisect:after {
  clear: both;
}
div.enterprise .row .col.trisect,
div.enterprise-header .row .col.trisect,
div.enterprise .row .col.col-trisect,
div.enterprise-header .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.enterprise .row .col.trisect:before,
div.enterprise-header .row .col.trisect:before,
div.enterprise .row .col.col-trisect:before,
div.enterprise-header .row .col.col-trisect:before,
div.enterprise .row .col.trisect:after,
div.enterprise-header .row .col.trisect:after,
div.enterprise .row .col.col-trisect:after,
div.enterprise-header .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.enterprise .row .col.trisect:after,
div.enterprise-header .row .col.trisect:after,
div.enterprise .row .col.col-trisect:after,
div.enterprise-header .row .col.col-trisect:after {
  clear: both;
}
div.enterprise .row .col.major,
div.enterprise-header .row .col.major,
div.enterprise .row .col.col-major,
div.enterprise-header .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.enterprise .row .col.major:before,
div.enterprise-header .row .col.major:before,
div.enterprise .row .col.col-major:before,
div.enterprise-header .row .col.col-major:before,
div.enterprise .row .col.major:after,
div.enterprise-header .row .col.major:after,
div.enterprise .row .col.col-major:after,
div.enterprise-header .row .col.col-major:after {
  content: "";
  display: table;
}
div.enterprise .row .col.major:after,
div.enterprise-header .row .col.major:after,
div.enterprise .row .col.col-major:after,
div.enterprise-header .row .col.col-major:after {
  clear: both;
}
div.enterprise .row .col.minor,
div.enterprise-header .row .col.minor,
div.enterprise .row .col.col-minor,
div.enterprise-header .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.enterprise .row .col.minor:before,
div.enterprise-header .row .col.minor:before,
div.enterprise .row .col.col-minor:before,
div.enterprise-header .row .col.col-minor:before,
div.enterprise .row .col.minor:after,
div.enterprise-header .row .col.minor:after,
div.enterprise .row .col.col-minor:after,
div.enterprise-header .row .col.col-minor:after {
  content: "";
  display: table;
}
div.enterprise .row .col.minor:after,
div.enterprise-header .row .col.minor:after,
div.enterprise .row .col.col-minor:after,
div.enterprise-header .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.enterprise,
  div.enterprise-header {
    overflow: hidden;
  }
  div.enterprise .row,
  div.enterprise-header .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.enterprise .row:before,
  div.enterprise-header .row:before,
  div.enterprise .row:after,
  div.enterprise-header .row:after {
    content: "";
    display: table;
  }
  div.enterprise .row:after,
  div.enterprise-header .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.enterprise,
  div.enterprise-header {
    overflow: hidden;
  }
  div.enterprise .row,
  div.enterprise-header .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.enterprise .row:before,
  div.enterprise-header .row:before,
  div.enterprise .row:after,
  div.enterprise-header .row:after {
    content: "";
    display: table;
  }
  div.enterprise .row:after,
  div.enterprise-header .row:after {
    clear: both;
  }
  div.enterprise .row .col.fill,
  div.enterprise-header .row .col.fill,
  div.enterprise .row .col.col-fill,
  div.enterprise-header .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.enterprise .row .col.fill:before,
  div.enterprise-header .row .col.fill:before,
  div.enterprise .row .col.col-fill:before,
  div.enterprise-header .row .col.col-fill:before,
  div.enterprise .row .col.fill:after,
  div.enterprise-header .row .col.fill:after,
  div.enterprise .row .col.col-fill:after,
  div.enterprise-header .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.enterprise .row .col.fill:after,
  div.enterprise-header .row .col.fill:after,
  div.enterprise .row .col.col-fill:after,
  div.enterprise-header .row .col.col-fill:after {
    clear: both;
  }
  div.enterprise .row .col.center,
  div.enterprise-header .row .col.center,
  div.enterprise .row .col.col-center,
  div.enterprise-header .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.enterprise .row .col.center:before,
  div.enterprise-header .row .col.center:before,
  div.enterprise .row .col.col-center:before,
  div.enterprise-header .row .col.col-center:before,
  div.enterprise .row .col.center:after,
  div.enterprise-header .row .col.center:after,
  div.enterprise .row .col.col-center:after,
  div.enterprise-header .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.enterprise .row .col.center:after,
  div.enterprise-header .row .col.center:after,
  div.enterprise .row .col.col-center:after,
  div.enterprise-header .row .col.col-center:after {
    clear: both;
  }
  div.enterprise .row .col.bisect,
  div.enterprise-header .row .col.bisect,
  div.enterprise .row .col.col-bisect,
  div.enterprise-header .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.enterprise .row .col.bisect:before,
  div.enterprise-header .row .col.bisect:before,
  div.enterprise .row .col.col-bisect:before,
  div.enterprise-header .row .col.col-bisect:before,
  div.enterprise .row .col.bisect:after,
  div.enterprise-header .row .col.bisect:after,
  div.enterprise .row .col.col-bisect:after,
  div.enterprise-header .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.enterprise .row .col.bisect:after,
  div.enterprise-header .row .col.bisect:after,
  div.enterprise .row .col.col-bisect:after,
  div.enterprise-header .row .col.col-bisect:after {
    clear: both;
  }
  div.enterprise .row .col.trisect,
  div.enterprise-header .row .col.trisect,
  div.enterprise .row .col.col-trisect,
  div.enterprise-header .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.enterprise .row .col.trisect:before,
  div.enterprise-header .row .col.trisect:before,
  div.enterprise .row .col.col-trisect:before,
  div.enterprise-header .row .col.col-trisect:before,
  div.enterprise .row .col.trisect:after,
  div.enterprise-header .row .col.trisect:after,
  div.enterprise .row .col.col-trisect:after,
  div.enterprise-header .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.enterprise .row .col.trisect:after,
  div.enterprise-header .row .col.trisect:after,
  div.enterprise .row .col.col-trisect:after,
  div.enterprise-header .row .col.col-trisect:after {
    clear: both;
  }
  div.enterprise .row .col.major,
  div.enterprise-header .row .col.major,
  div.enterprise .row .col.col-major,
  div.enterprise-header .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.enterprise .row .col.major:before,
  div.enterprise-header .row .col.major:before,
  div.enterprise .row .col.col-major:before,
  div.enterprise-header .row .col.col-major:before,
  div.enterprise .row .col.major:after,
  div.enterprise-header .row .col.major:after,
  div.enterprise .row .col.col-major:after,
  div.enterprise-header .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.enterprise .row .col.major:after,
  div.enterprise-header .row .col.major:after,
  div.enterprise .row .col.col-major:after,
  div.enterprise-header .row .col.col-major:after {
    clear: both;
  }
  div.enterprise .row .col.minor,
  div.enterprise-header .row .col.minor,
  div.enterprise .row .col.col-minor,
  div.enterprise-header .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.enterprise .row .col.minor:before,
  div.enterprise-header .row .col.minor:before,
  div.enterprise .row .col.col-minor:before,
  div.enterprise-header .row .col.col-minor:before,
  div.enterprise .row .col.minor:after,
  div.enterprise-header .row .col.minor:after,
  div.enterprise .row .col.col-minor:after,
  div.enterprise-header .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.enterprise .row .col.minor:after,
  div.enterprise-header .row .col.minor:after,
  div.enterprise .row .col.col-minor:after,
  div.enterprise-header .row .col.col-minor:after {
    clear: both;
  }
}
div.enterprise {
  font-family: Lato;
  font-size: 1em;
  background: #fcfcfc;
  color: #343131;
  padding: 2em 0em;
}
div.enterprise a {
  text-decoration: none;
}
div.enterprise a:link,
div.enterprise a:visited {
  color: #2980b9;
}
div.enterprise a:hover,
div.enterprise a:active {
  color: #7db2d4;
}
div.enterprise h1 {
  margin: .6em 0em 1em 0em;
  padding-top: 0em;
  text-align: center;
  text-shadow: 0px 2px #efefef;
}
div.enterprise p {
  padding: 0em;
  margin-top: .3em;
  font-size: 1.1em;
  line-height: 1.5em;
}
div.enterprise p b {
  text-decoration: underline;
}
div.enterprise form {
  text-align: center;
  padding: 1em;
  position: relative;
}
div.enterprise form input[type="text"],
div.enterprise form input[type="url"],
div.enterprise form input[type="email"],
div.enterprise form input[type="number"],
div.enterprise form input[type="password"],
div.enterprise form select,
div.enterprise form textarea {
  padding: .45em;
  width: 20em;
  border: none;
  margin-top: 0.1666665em;
  background: #343131;
  color: #fcfcfc;
  border: 1px solid #5c5a5a;
  font-family: Lato, sans-serif;
  font-size: 1em;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
}
div.enterprise form input[type="text"]:focus,
div.enterprise form input[type="url"]:focus,
div.enterprise form input[type="email"]:focus,
div.enterprise form input[type="number"]:focus,
div.enterprise form input[type="password"]:focus,
div.enterprise form select:focus,
div.enterprise form textarea:focus {
  border: 1px solid #f05330;
  box-shadow: inset 2px 2px #1a1818;
  outline: none;
}
div.col-bisect div.enterprise form input[type="text"],
div.col-bisect div.enterprise form input[type="url"],
div.col-bisect div.enterprise form input[type="email"],
div.col-bisect div.enterprise form input[type="number"],
div.col-bisect div.enterprise form input[type="password"],
div.col-bisect div.enterprise form select,
div.col-bisect div.enterprise form textarea {
  width: 96%;
  box-sizing: border-box;
}
div.enterprise form label {
  display: block;
  margin: .1em .3em .1em 0em;
  font-size: 1em;
}
div.enterprise form span.helptext {
  display: block;
  margin: .3em 0em;
  font-style: italic;
  font-size: .9em;
  color: #ffffff;
}
div.enterprise form input[type="radio"] {
  display: inline-block;
}
div.enterprise form input[type="radio"] + label {
  display: inline;
}
div.enterprise form input[type="checkbox"] {
  float: left;
  display: block;
  height: 1.2em;
  margin: .3em .5em;
  width: 1.2em;
  line-height: 1.5em;
}
div.enterprise form input[type="checkbox"] + span.helptext {
  display: block;
  overflow: hidden;
  margin: 0em;
  font-style: normal;
  color: #fcfcfc;
}
div.enterprise form input[type="number"] {
  width: 5em;
}
div.enterprise form input[type="text"].search {
  padding-left: 2em;
  background-repeat: no-repeat;
  background-position: .25em center;
  background-size: 24px 24px;
}
div.enterprise form input[type="text"].search {
  background-image: url('../img/icon-search.png');
}
div.enterprise form input[type="submit"],
div.enterprise form button {
  position: relative;
  padding: .33em 1em;
  border: none;
  top: -0.165em;
  font-family: Lato;
  font-size: 1.1em;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: -1px 1px #20638f;
  cursor: pointer;
  /* Raised button stuff */
  transition: all 0s ease-out;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  border-radius: .2em;
  -moz-border-radius: .2em;
  box-shadow: 0px 0.2em 0px 0px #20638f;
  -webkit-box-shadow: 0px 0.2em 0px 0px #20638f;
  margin: 1em 0em;
}
div.enterprise form input[type="submit"]:active,
div.enterprise form button:active {
  top: -0.015em;
  -webkit-box-shadow: 0px 0.05em 0px 0px #20638f;
  box-shadow: 0px 0.05em 0px 0px #20638f;
  outline: none;
}
div.enterprise form input[type="submit"]:hover,
div.enterprise form button:hover {
  background: #409ad5;
}
div.enterprise form textarea {
  width: 40em;
  height: 10em;
}
div.enterprise form .errorlist {
  color: orangered;
}
div.enterprise form > p {
  display: block;
  margin: .65em 0em;
  clear: both;
}
div.enterprise form > p + p {
  margin-top: 1em;
}
div.enterprise form input::-webkit-input-placeholder {
  color: #5c5a5a;
}
div.enterprise form input:-moz-placeholder {
  color: #5c5a5a;
  opacity: 1;
}
div.enterprise form input::-moz-placeholder {
  color: #5c5a5a;
  opacity: 1;
}
div.enterprise form input:-ms-input-placeholder {
  color: #5c5a5a;
}
div.enterprise form input[type="submit"],
div.enterprise form button {
  margin-top: 0em;
  margin-bottom: 0em;
}
div.enterprise-intro {
  margin: 2em 0em;
}
div.enterprise-details {
  margin: 3em 0em;
}
div.about {
  overflow: hidden;
}
div.about .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.about .row:before,
div.about .row:after {
  content: "";
  display: table;
}
div.about .row:after {
  clear: both;
}
div.about .row .col.fill,
div.about .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.about .row .col.fill:before,
div.about .row .col.col-fill:before,
div.about .row .col.fill:after,
div.about .row .col.col-fill:after {
  content: "";
  display: table;
}
div.about .row .col.fill:after,
div.about .row .col.col-fill:after {
  clear: both;
}
div.about .row .col.center,
div.about .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.about .row .col.center:before,
div.about .row .col.col-center:before,
div.about .row .col.center:after,
div.about .row .col.col-center:after {
  content: "";
  display: table;
}
div.about .row .col.center:after,
div.about .row .col.col-center:after {
  clear: both;
}
div.about .row .col.bisect,
div.about .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.about .row .col.bisect:before,
div.about .row .col.col-bisect:before,
div.about .row .col.bisect:after,
div.about .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.about .row .col.bisect:after,
div.about .row .col.col-bisect:after {
  clear: both;
}
div.about .row .col.trisect,
div.about .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.about .row .col.trisect:before,
div.about .row .col.col-trisect:before,
div.about .row .col.trisect:after,
div.about .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.about .row .col.trisect:after,
div.about .row .col.col-trisect:after {
  clear: both;
}
div.about .row .col.major,
div.about .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.about .row .col.major:before,
div.about .row .col.col-major:before,
div.about .row .col.major:after,
div.about .row .col.col-major:after {
  content: "";
  display: table;
}
div.about .row .col.major:after,
div.about .row .col.col-major:after {
  clear: both;
}
div.about .row .col.minor,
div.about .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.about .row .col.minor:before,
div.about .row .col.col-minor:before,
div.about .row .col.minor:after,
div.about .row .col.col-minor:after {
  content: "";
  display: table;
}
div.about .row .col.minor:after,
div.about .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.about {
    overflow: hidden;
  }
  div.about .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.about .row:before,
  div.about .row:after {
    content: "";
    display: table;
  }
  div.about .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.about {
    overflow: hidden;
  }
  div.about .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.about .row:before,
  div.about .row:after {
    content: "";
    display: table;
  }
  div.about .row:after {
    clear: both;
  }
  div.about .row .col.fill,
  div.about .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.about .row .col.fill:before,
  div.about .row .col.col-fill:before,
  div.about .row .col.fill:after,
  div.about .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.about .row .col.fill:after,
  div.about .row .col.col-fill:after {
    clear: both;
  }
  div.about .row .col.center,
  div.about .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.about .row .col.center:before,
  div.about .row .col.col-center:before,
  div.about .row .col.center:after,
  div.about .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.about .row .col.center:after,
  div.about .row .col.col-center:after {
    clear: both;
  }
  div.about .row .col.bisect,
  div.about .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.about .row .col.bisect:before,
  div.about .row .col.col-bisect:before,
  div.about .row .col.bisect:after,
  div.about .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.about .row .col.bisect:after,
  div.about .row .col.col-bisect:after {
    clear: both;
  }
  div.about .row .col.trisect,
  div.about .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.about .row .col.trisect:before,
  div.about .row .col.col-trisect:before,
  div.about .row .col.trisect:after,
  div.about .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.about .row .col.trisect:after,
  div.about .row .col.col-trisect:after {
    clear: both;
  }
  div.about .row .col.major,
  div.about .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.about .row .col.major:before,
  div.about .row .col.col-major:before,
  div.about .row .col.major:after,
  div.about .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.about .row .col.major:after,
  div.about .row .col.col-major:after {
    clear: both;
  }
  div.about .row .col.minor,
  div.about .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.about .row .col.minor:before,
  div.about .row .col.col-minor:before,
  div.about .row .col.minor:after,
  div.about .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.about .row .col.minor:after,
  div.about .row .col.col-minor:after {
    clear: both;
  }
}
div.about {
  font-family: Lato;
  font-size: 1em;
  background: #fcfcfc;
  color: #343131;
  padding: 1em 0em 2em 0em;
  margin: 0em;
  position: relative;
}
div.about a {
  text-decoration: none;
}
div.about a:link,
div.about a:visited {
  color: #2980b9;
}
div.about a:hover,
div.about a:active {
  color: #7db2d4;
}
div.about > .wrapper {
  overflow: hidden;
  width: 100%;
}
div.about h1 {
  padding-top: 0em;
  text-align: center;
}
div.about h2,
div.about h3 {
  padding-top: 0em;
  margin-bottom: .5em;
  text-align: left;
}
div.about h2 {
  font-size: 1.2em;
}
div.about h3 {
  font-size: 1.1em;
}
div.about p {
  font-size: 1em;
  text-align: left;
  line-height: 1.5em;
  margin-top: .5em;
}
div.about p b {
  padding: .2em;
  background: #e7f2fa;
  font-weight: normal;
}
div.about img {
  margin: 1em 0em;
  width: 100%;
  height: auto;
}
div.about > .wrapper > .row > .col.fill img {
  display: block;
  margin: 1em auto;
  width: 33%;
  height: auto;
}
div.about > .wrapper > .row > .col.bisect img {
  display: block;
  margin: 1em auto;
  width: 50%;
  height: auto;
}
#content > .wrapper > .build {
  *zoom: 1;
  padding: 1em 0em;
}
#content > .wrapper > .build:before,
#content > .wrapper > .build:after {
  content: "";
  display: table;
}
#content > .wrapper > .build:after {
  clear: both;
}
#content > .wrapper > .build pre {
  font-family: Lato;
  font-size: 1em;
  background: #efefef;
  color: #343131;
  padding: 1em;
  font-family: monospace;
  font-size: .8em;
  overflow: auto;
  border-radius: .2em;
  -moz-border-radius: .2em;
}
#content > .wrapper > .build pre a {
  text-decoration: none;
}
#content > .wrapper > .build pre a:link,
#content > .wrapper > .build pre a:visited {
  color: #20638f;
}
#content > .wrapper > .build pre a:hover,
#content > .wrapper > .build pre a:active {
  color: #739bb6;
}
div.services-faq {
  overflow: hidden;
}
div.services-faq .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.services-faq .row:before,
div.services-faq .row:after {
  content: "";
  display: table;
}
div.services-faq .row:after {
  clear: both;
}
div.services-faq .row .col.fill,
div.services-faq .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services-faq .row .col.fill:before,
div.services-faq .row .col.col-fill:before,
div.services-faq .row .col.fill:after,
div.services-faq .row .col.col-fill:after {
  content: "";
  display: table;
}
div.services-faq .row .col.fill:after,
div.services-faq .row .col.col-fill:after {
  clear: both;
}
div.services-faq .row .col.center,
div.services-faq .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services-faq .row .col.center:before,
div.services-faq .row .col.col-center:before,
div.services-faq .row .col.center:after,
div.services-faq .row .col.col-center:after {
  content: "";
  display: table;
}
div.services-faq .row .col.center:after,
div.services-faq .row .col.col-center:after {
  clear: both;
}
div.services-faq .row .col.bisect,
div.services-faq .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services-faq .row .col.bisect:before,
div.services-faq .row .col.col-bisect:before,
div.services-faq .row .col.bisect:after,
div.services-faq .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.services-faq .row .col.bisect:after,
div.services-faq .row .col.col-bisect:after {
  clear: both;
}
div.services-faq .row .col.trisect,
div.services-faq .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services-faq .row .col.trisect:before,
div.services-faq .row .col.col-trisect:before,
div.services-faq .row .col.trisect:after,
div.services-faq .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.services-faq .row .col.trisect:after,
div.services-faq .row .col.col-trisect:after {
  clear: both;
}
div.services-faq .row .col.major,
div.services-faq .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services-faq .row .col.major:before,
div.services-faq .row .col.col-major:before,
div.services-faq .row .col.major:after,
div.services-faq .row .col.col-major:after {
  content: "";
  display: table;
}
div.services-faq .row .col.major:after,
div.services-faq .row .col.col-major:after {
  clear: both;
}
div.services-faq .row .col.minor,
div.services-faq .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services-faq .row .col.minor:before,
div.services-faq .row .col.col-minor:before,
div.services-faq .row .col.minor:after,
div.services-faq .row .col.col-minor:after {
  content: "";
  display: table;
}
div.services-faq .row .col.minor:after,
div.services-faq .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.services-faq {
    overflow: hidden;
  }
  div.services-faq .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.services-faq .row:before,
  div.services-faq .row:after {
    content: "";
    display: table;
  }
  div.services-faq .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.services-faq {
    overflow: hidden;
  }
  div.services-faq .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.services-faq .row:before,
  div.services-faq .row:after {
    content: "";
    display: table;
  }
  div.services-faq .row:after {
    clear: both;
  }
  div.services-faq .row .col.fill,
  div.services-faq .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services-faq .row .col.fill:before,
  div.services-faq .row .col.col-fill:before,
  div.services-faq .row .col.fill:after,
  div.services-faq .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.services-faq .row .col.fill:after,
  div.services-faq .row .col.col-fill:after {
    clear: both;
  }
  div.services-faq .row .col.center,
  div.services-faq .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services-faq .row .col.center:before,
  div.services-faq .row .col.col-center:before,
  div.services-faq .row .col.center:after,
  div.services-faq .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.services-faq .row .col.center:after,
  div.services-faq .row .col.col-center:after {
    clear: both;
  }
  div.services-faq .row .col.bisect,
  div.services-faq .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services-faq .row .col.bisect:before,
  div.services-faq .row .col.col-bisect:before,
  div.services-faq .row .col.bisect:after,
  div.services-faq .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.services-faq .row .col.bisect:after,
  div.services-faq .row .col.col-bisect:after {
    clear: both;
  }
  div.services-faq .row .col.trisect,
  div.services-faq .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services-faq .row .col.trisect:before,
  div.services-faq .row .col.col-trisect:before,
  div.services-faq .row .col.trisect:after,
  div.services-faq .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.services-faq .row .col.trisect:after,
  div.services-faq .row .col.col-trisect:after {
    clear: both;
  }
  div.services-faq .row .col.major,
  div.services-faq .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services-faq .row .col.major:before,
  div.services-faq .row .col.col-major:before,
  div.services-faq .row .col.major:after,
  div.services-faq .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.services-faq .row .col.major:after,
  div.services-faq .row .col.col-major:after {
    clear: both;
  }
  div.services-faq .row .col.minor,
  div.services-faq .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services-faq .row .col.minor:before,
  div.services-faq .row .col.col-minor:before,
  div.services-faq .row .col.minor:after,
  div.services-faq .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.services-faq .row .col.minor:after,
  div.services-faq .row .col.col-minor:after {
    clear: both;
  }
}
div.services-contact {
  overflow: hidden;
  font-family: Lato;
  font-size: 1em;
  background: #343131;
  color: #fcfcfc;
  margin: 0em;
  font-size: 1.2em;
  text-align: center;
}
div.services-contact .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.services-contact .row:before,
div.services-contact .row:after {
  content: "";
  display: table;
}
div.services-contact .row:after {
  clear: both;
}
div.services-contact .row .col.fill,
div.services-contact .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services-contact .row .col.fill:before,
div.services-contact .row .col.col-fill:before,
div.services-contact .row .col.fill:after,
div.services-contact .row .col.col-fill:after {
  content: "";
  display: table;
}
div.services-contact .row .col.fill:after,
div.services-contact .row .col.col-fill:after {
  clear: both;
}
div.services-contact .row .col.center,
div.services-contact .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services-contact .row .col.center:before,
div.services-contact .row .col.col-center:before,
div.services-contact .row .col.center:after,
div.services-contact .row .col.col-center:after {
  content: "";
  display: table;
}
div.services-contact .row .col.center:after,
div.services-contact .row .col.col-center:after {
  clear: both;
}
div.services-contact .row .col.bisect,
div.services-contact .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services-contact .row .col.bisect:before,
div.services-contact .row .col.col-bisect:before,
div.services-contact .row .col.bisect:after,
div.services-contact .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.services-contact .row .col.bisect:after,
div.services-contact .row .col.col-bisect:after {
  clear: both;
}
div.services-contact .row .col.trisect,
div.services-contact .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services-contact .row .col.trisect:before,
div.services-contact .row .col.col-trisect:before,
div.services-contact .row .col.trisect:after,
div.services-contact .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.services-contact .row .col.trisect:after,
div.services-contact .row .col.col-trisect:after {
  clear: both;
}
div.services-contact .row .col.major,
div.services-contact .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services-contact .row .col.major:before,
div.services-contact .row .col.col-major:before,
div.services-contact .row .col.major:after,
div.services-contact .row .col.col-major:after {
  content: "";
  display: table;
}
div.services-contact .row .col.major:after,
div.services-contact .row .col.col-major:after {
  clear: both;
}
div.services-contact .row .col.minor,
div.services-contact .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services-contact .row .col.minor:before,
div.services-contact .row .col.col-minor:before,
div.services-contact .row .col.minor:after,
div.services-contact .row .col.col-minor:after {
  content: "";
  display: table;
}
div.services-contact .row .col.minor:after,
div.services-contact .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.services-contact {
    overflow: hidden;
  }
  div.services-contact .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.services-contact .row:before,
  div.services-contact .row:after {
    content: "";
    display: table;
  }
  div.services-contact .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.services-contact {
    overflow: hidden;
  }
  div.services-contact .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.services-contact .row:before,
  div.services-contact .row:after {
    content: "";
    display: table;
  }
  div.services-contact .row:after {
    clear: both;
  }
  div.services-contact .row .col.fill,
  div.services-contact .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services-contact .row .col.fill:before,
  div.services-contact .row .col.col-fill:before,
  div.services-contact .row .col.fill:after,
  div.services-contact .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.services-contact .row .col.fill:after,
  div.services-contact .row .col.col-fill:after {
    clear: both;
  }
  div.services-contact .row .col.center,
  div.services-contact .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services-contact .row .col.center:before,
  div.services-contact .row .col.col-center:before,
  div.services-contact .row .col.center:after,
  div.services-contact .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.services-contact .row .col.center:after,
  div.services-contact .row .col.col-center:after {
    clear: both;
  }
  div.services-contact .row .col.bisect,
  div.services-contact .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services-contact .row .col.bisect:before,
  div.services-contact .row .col.col-bisect:before,
  div.services-contact .row .col.bisect:after,
  div.services-contact .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.services-contact .row .col.bisect:after,
  div.services-contact .row .col.col-bisect:after {
    clear: both;
  }
  div.services-contact .row .col.trisect,
  div.services-contact .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services-contact .row .col.trisect:before,
  div.services-contact .row .col.col-trisect:before,
  div.services-contact .row .col.trisect:after,
  div.services-contact .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.services-contact .row .col.trisect:after,
  div.services-contact .row .col.col-trisect:after {
    clear: both;
  }
  div.services-contact .row .col.major,
  div.services-contact .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services-contact .row .col.major:before,
  div.services-contact .row .col.col-major:before,
  div.services-contact .row .col.major:after,
  div.services-contact .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.services-contact .row .col.major:after,
  div.services-contact .row .col.col-major:after {
    clear: both;
  }
  div.services-contact .row .col.minor,
  div.services-contact .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services-contact .row .col.minor:before,
  div.services-contact .row .col.col-minor:before,
  div.services-contact .row .col.minor:after,
  div.services-contact .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.services-contact .row .col.minor:after,
  div.services-contact .row .col.col-minor:after {
    clear: both;
  }
}
div.services-contact a {
  text-decoration: none;
}
div.services-contact a:link,
div.services-contact a:visited {
  color: #6ab0de;
}
div.services-contact a:hover,
div.services-contact a:active {
  color: #547d99;
}
@media (max-width: 1000px) {
  div.services-contact {
    font-size: 1.1em;
  }
}
div.services-contact p > a {
  display: inline-block;
  padding: .3em .65em;
  margin: 0em .3em;
  background: #f05330;
  color: #fcfcfc;
  border-radius: .3em;
}
div.services-contact p > a:link,
div.services-contact p > a:visited,
div.services-contact p > a:hover,
div.services-contact p > a:active {
  color: #fcfcfc;
}
div.services-contact p > a:hover,
div.services-contact p > a:active {
  background: #b0b0b0;
}
div.services-contact sup {
  display: block;
  margin: .65em;
  font-size: .8em;
}
div.services {
  overflow: hidden;
}
div.services .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.services .row:before,
div.services .row:after {
  content: "";
  display: table;
}
div.services .row:after {
  clear: both;
}
div.services .row .col.fill,
div.services .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services .row .col.fill:before,
div.services .row .col.col-fill:before,
div.services .row .col.fill:after,
div.services .row .col.col-fill:after {
  content: "";
  display: table;
}
div.services .row .col.fill:after,
div.services .row .col.col-fill:after {
  clear: both;
}
div.services .row .col.center,
div.services .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services .row .col.center:before,
div.services .row .col.col-center:before,
div.services .row .col.center:after,
div.services .row .col.col-center:after {
  content: "";
  display: table;
}
div.services .row .col.center:after,
div.services .row .col.col-center:after {
  clear: both;
}
div.services .row .col.bisect,
div.services .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services .row .col.bisect:before,
div.services .row .col.col-bisect:before,
div.services .row .col.bisect:after,
div.services .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.services .row .col.bisect:after,
div.services .row .col.col-bisect:after {
  clear: both;
}
div.services .row .col.trisect,
div.services .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services .row .col.trisect:before,
div.services .row .col.col-trisect:before,
div.services .row .col.trisect:after,
div.services .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.services .row .col.trisect:after,
div.services .row .col.col-trisect:after {
  clear: both;
}
div.services .row .col.major,
div.services .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services .row .col.major:before,
div.services .row .col.col-major:before,
div.services .row .col.major:after,
div.services .row .col.col-major:after {
  content: "";
  display: table;
}
div.services .row .col.major:after,
div.services .row .col.col-major:after {
  clear: both;
}
div.services .row .col.minor,
div.services .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.services .row .col.minor:before,
div.services .row .col.col-minor:before,
div.services .row .col.minor:after,
div.services .row .col.col-minor:after {
  content: "";
  display: table;
}
div.services .row .col.minor:after,
div.services .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.services {
    overflow: hidden;
  }
  div.services .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.services .row:before,
  div.services .row:after {
    content: "";
    display: table;
  }
  div.services .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.services {
    overflow: hidden;
  }
  div.services .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.services .row:before,
  div.services .row:after {
    content: "";
    display: table;
  }
  div.services .row:after {
    clear: both;
  }
  div.services .row .col.fill,
  div.services .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services .row .col.fill:before,
  div.services .row .col.col-fill:before,
  div.services .row .col.fill:after,
  div.services .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.services .row .col.fill:after,
  div.services .row .col.col-fill:after {
    clear: both;
  }
  div.services .row .col.center,
  div.services .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services .row .col.center:before,
  div.services .row .col.col-center:before,
  div.services .row .col.center:after,
  div.services .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.services .row .col.center:after,
  div.services .row .col.col-center:after {
    clear: both;
  }
  div.services .row .col.bisect,
  div.services .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services .row .col.bisect:before,
  div.services .row .col.col-bisect:before,
  div.services .row .col.bisect:after,
  div.services .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.services .row .col.bisect:after,
  div.services .row .col.col-bisect:after {
    clear: both;
  }
  div.services .row .col.trisect,
  div.services .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services .row .col.trisect:before,
  div.services .row .col.col-trisect:before,
  div.services .row .col.trisect:after,
  div.services .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.services .row .col.trisect:after,
  div.services .row .col.col-trisect:after {
    clear: both;
  }
  div.services .row .col.major,
  div.services .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services .row .col.major:before,
  div.services .row .col.col-major:before,
  div.services .row .col.major:after,
  div.services .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.services .row .col.major:after,
  div.services .row .col.col-major:after {
    clear: both;
  }
  div.services .row .col.minor,
  div.services .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.services .row .col.minor:before,
  div.services .row .col.col-minor:before,
  div.services .row .col.minor:after,
  div.services .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.services .row .col.minor:after,
  div.services .row .col.col-minor:after {
    clear: both;
  }
}
div.services p {
  font-size: 1.1em;
}
div.services h2 {
  font-size: 1.3em;
}
div.services ul.services-list {
  font-size: 1.1em;
}
@media (max-width: 800px), (max-device-width: 800px) {
  div.services p {
    font-size: 1em;
  }
  div.services h2 {
    font-size: 1.2em;
  }
  div.services ul.services-list {
    font-size: 1em;
  }
}
div.services {
  font-family: Lato;
  font-size: 1em;
  background: #fcfcfc;
  color: #343131;
  padding: 2em 0em;
}
div.services a {
  text-decoration: none;
}
div.services a:link,
div.services a:visited {
  color: #2980b9;
}
div.services a:hover,
div.services a:active {
  color: #7db2d4;
}
div.services h2 {
  text-align: center;
  margin-bottom: 1.5em;
  color: #343131;
}
div.services p i {
  font-style: italic;
}
h3:target {
  background-color: #ffa;
}
div.support-faq {
  overflow: hidden;
}
div.support-faq .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.support-faq .row:before,
div.support-faq .row:after {
  content: "";
  display: table;
}
div.support-faq .row:after {
  clear: both;
}
div.support-faq .row .col.fill,
div.support-faq .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.support-faq .row .col.fill:before,
div.support-faq .row .col.col-fill:before,
div.support-faq .row .col.fill:after,
div.support-faq .row .col.col-fill:after {
  content: "";
  display: table;
}
div.support-faq .row .col.fill:after,
div.support-faq .row .col.col-fill:after {
  clear: both;
}
div.support-faq .row .col.center,
div.support-faq .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.support-faq .row .col.center:before,
div.support-faq .row .col.col-center:before,
div.support-faq .row .col.center:after,
div.support-faq .row .col.col-center:after {
  content: "";
  display: table;
}
div.support-faq .row .col.center:after,
div.support-faq .row .col.col-center:after {
  clear: both;
}
div.support-faq .row .col.bisect,
div.support-faq .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.support-faq .row .col.bisect:before,
div.support-faq .row .col.col-bisect:before,
div.support-faq .row .col.bisect:after,
div.support-faq .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.support-faq .row .col.bisect:after,
div.support-faq .row .col.col-bisect:after {
  clear: both;
}
div.support-faq .row .col.trisect,
div.support-faq .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.support-faq .row .col.trisect:before,
div.support-faq .row .col.col-trisect:before,
div.support-faq .row .col.trisect:after,
div.support-faq .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.support-faq .row .col.trisect:after,
div.support-faq .row .col.col-trisect:after {
  clear: both;
}
div.support-faq .row .col.major,
div.support-faq .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.support-faq .row .col.major:before,
div.support-faq .row .col.col-major:before,
div.support-faq .row .col.major:after,
div.support-faq .row .col.col-major:after {
  content: "";
  display: table;
}
div.support-faq .row .col.major:after,
div.support-faq .row .col.col-major:after {
  clear: both;
}
div.support-faq .row .col.minor,
div.support-faq .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.support-faq .row .col.minor:before,
div.support-faq .row .col.col-minor:before,
div.support-faq .row .col.minor:after,
div.support-faq .row .col.col-minor:after {
  content: "";
  display: table;
}
div.support-faq .row .col.minor:after,
div.support-faq .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.support-faq {
    overflow: hidden;
  }
  div.support-faq .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.support-faq .row:before,
  div.support-faq .row:after {
    content: "";
    display: table;
  }
  div.support-faq .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.support-faq {
    overflow: hidden;
  }
  div.support-faq .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.support-faq .row:before,
  div.support-faq .row:after {
    content: "";
    display: table;
  }
  div.support-faq .row:after {
    clear: both;
  }
  div.support-faq .row .col.fill,
  div.support-faq .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.support-faq .row .col.fill:before,
  div.support-faq .row .col.col-fill:before,
  div.support-faq .row .col.fill:after,
  div.support-faq .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.support-faq .row .col.fill:after,
  div.support-faq .row .col.col-fill:after {
    clear: both;
  }
  div.support-faq .row .col.center,
  div.support-faq .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.support-faq .row .col.center:before,
  div.support-faq .row .col.col-center:before,
  div.support-faq .row .col.center:after,
  div.support-faq .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.support-faq .row .col.center:after,
  div.support-faq .row .col.col-center:after {
    clear: both;
  }
  div.support-faq .row .col.bisect,
  div.support-faq .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.support-faq .row .col.bisect:before,
  div.support-faq .row .col.col-bisect:before,
  div.support-faq .row .col.bisect:after,
  div.support-faq .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.support-faq .row .col.bisect:after,
  div.support-faq .row .col.col-bisect:after {
    clear: both;
  }
  div.support-faq .row .col.trisect,
  div.support-faq .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.support-faq .row .col.trisect:before,
  div.support-faq .row .col.col-trisect:before,
  div.support-faq .row .col.trisect:after,
  div.support-faq .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.support-faq .row .col.trisect:after,
  div.support-faq .row .col.col-trisect:after {
    clear: both;
  }
  div.support-faq .row .col.major,
  div.support-faq .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.support-faq .row .col.major:before,
  div.support-faq .row .col.col-major:before,
  div.support-faq .row .col.major:after,
  div.support-faq .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.support-faq .row .col.major:after,
  div.support-faq .row .col.col-major:after {
    clear: both;
  }
  div.support-faq .row .col.minor,
  div.support-faq .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.support-faq .row .col.minor:before,
  div.support-faq .row .col.col-minor:before,
  div.support-faq .row .col.minor:after,
  div.support-faq .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.support-faq .row .col.minor:after,
  div.support-faq .row .col.col-minor:after {
    clear: both;
  }
}
div.support {
  overflow: hidden;
}
div.support .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
div.support .row:before,
div.support .row:after {
  content: "";
  display: table;
}
div.support .row:after {
  clear: both;
}
div.support .row .col.fill,
div.support .row .col.col-fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.support .row .col.fill:before,
div.support .row .col.col-fill:before,
div.support .row .col.fill:after,
div.support .row .col.col-fill:after {
  content: "";
  display: table;
}
div.support .row .col.fill:after,
div.support .row .col.col-fill:after {
  clear: both;
}
div.support .row .col.center,
div.support .row .col.col-center {
  display: inline;
  float: left;
  width: 75.55555556%;
  margin-left: 12.22222222%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.support .row .col.center:before,
div.support .row .col.col-center:before,
div.support .row .col.center:after,
div.support .row .col.col-center:after {
  content: "";
  display: table;
}
div.support .row .col.center:after,
div.support .row .col.col-center:after {
  clear: both;
}
div.support .row .col.bisect,
div.support .row .col.col-bisect {
  display: inline;
  float: left;
  width: 47.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.support .row .col.bisect:before,
div.support .row .col.col-bisect:before,
div.support .row .col.bisect:after,
div.support .row .col.col-bisect:after {
  content: "";
  display: table;
}
div.support .row .col.bisect:after,
div.support .row .col.col-bisect:after {
  clear: both;
}
div.support .row .col.trisect,
div.support .row .col.col-trisect {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.support .row .col.trisect:before,
div.support .row .col.col-trisect:before,
div.support .row .col.trisect:after,
div.support .row .col.col-trisect:after {
  content: "";
  display: table;
}
div.support .row .col.trisect:after,
div.support .row .col.col-trisect:after {
  clear: both;
}
div.support .row .col.major,
div.support .row .col.col-major {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.support .row .col.major:before,
div.support .row .col.col-major:before,
div.support .row .col.major:after,
div.support .row .col.col-major:after {
  content: "";
  display: table;
}
div.support .row .col.major:after,
div.support .row .col.col-major:after {
  clear: both;
}
div.support .row .col.minor,
div.support .row .col.col-minor {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
div.support .row .col.minor:before,
div.support .row .col.col-minor:before,
div.support .row .col.minor:after,
div.support .row .col.col-minor:after {
  content: "";
  display: table;
}
div.support .row .col.minor:after,
div.support .row .col.col-minor:after {
  clear: both;
}
@media (max-width: 1000px) {
  div.support {
    overflow: hidden;
  }
  div.support .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.support .row:before,
  div.support .row:after {
    content: "";
    display: table;
  }
  div.support .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  div.support {
    overflow: hidden;
  }
  div.support .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  div.support .row:before,
  div.support .row:after {
    content: "";
    display: table;
  }
  div.support .row:after {
    clear: both;
  }
  div.support .row .col.fill,
  div.support .row .col.col-fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.support .row .col.fill:before,
  div.support .row .col.col-fill:before,
  div.support .row .col.fill:after,
  div.support .row .col.col-fill:after {
    content: "";
    display: table;
  }
  div.support .row .col.fill:after,
  div.support .row .col.col-fill:after {
    clear: both;
  }
  div.support .row .col.center,
  div.support .row .col.col-center {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.support .row .col.center:before,
  div.support .row .col.col-center:before,
  div.support .row .col.center:after,
  div.support .row .col.col-center:after {
    content: "";
    display: table;
  }
  div.support .row .col.center:after,
  div.support .row .col.col-center:after {
    clear: both;
  }
  div.support .row .col.bisect,
  div.support .row .col.col-bisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.support .row .col.bisect:before,
  div.support .row .col.col-bisect:before,
  div.support .row .col.bisect:after,
  div.support .row .col.col-bisect:after {
    content: "";
    display: table;
  }
  div.support .row .col.bisect:after,
  div.support .row .col.col-bisect:after {
    clear: both;
  }
  div.support .row .col.trisect,
  div.support .row .col.col-trisect {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.support .row .col.trisect:before,
  div.support .row .col.col-trisect:before,
  div.support .row .col.trisect:after,
  div.support .row .col.col-trisect:after {
    content: "";
    display: table;
  }
  div.support .row .col.trisect:after,
  div.support .row .col.col-trisect:after {
    clear: both;
  }
  div.support .row .col.major,
  div.support .row .col.col-major {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.support .row .col.major:before,
  div.support .row .col.col-major:before,
  div.support .row .col.major:after,
  div.support .row .col.col-major:after {
    content: "";
    display: table;
  }
  div.support .row .col.major:after,
  div.support .row .col.col-major:after {
    clear: both;
  }
  div.support .row .col.minor,
  div.support .row .col.col-minor {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  div.support .row .col.minor:before,
  div.support .row .col.col-minor:before,
  div.support .row .col.minor:after,
  div.support .row .col.col-minor:after {
    content: "";
    display: table;
  }
  div.support .row .col.minor:after,
  div.support .row .col.col-minor:after {
    clear: both;
  }
}
div.support p {
  font-size: 1.1em;
}
div.support h2 {
  font-size: 1.3em;
}
div.support ul.support-list {
  font-size: 1.1em;
}
@media (max-width: 800px), (max-device-width: 800px) {
  div.support p {
    font-size: 1em;
  }
  div.support h2 {
    font-size: 1.2em;
  }
  div.support ul.support-list {
    font-size: 1em;
  }
}
h3:target {
  background-color: #ffa;
}
#header,
#footer {
  overflow: hidden;
}
#header .row,
#footer .row {
  display: block;
  width: 81.81818182%;
  margin-left: 9.09090909%;
  *zoom: 1;
  overflow: hidden;
}
#header .row:before,
#footer .row:before,
#header .row:after,
#footer .row:after {
  content: "";
  display: table;
}
#header .row:after,
#footer .row:after {
  clear: both;
}
#header .row .fill,
#footer .row .fill {
  display: inline;
  float: left;
  width: 97.77777778%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
#header .row .fill:before,
#footer .row .fill:before,
#header .row .fill:after,
#footer .row .fill:after {
  content: "";
  display: table;
}
#header .row .fill:after,
#footer .row .fill:after {
  clear: both;
}
@media (max-width: 1000px) {
  #header,
  #footer {
    overflow: hidden;
  }
  #header .row,
  #footer .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  #header .row:before,
  #footer .row:before,
  #header .row:after,
  #footer .row:after {
    content: "";
    display: table;
  }
  #header .row:after,
  #footer .row:after {
    clear: both;
  }
}
@media (max-width: 640px), (max-device-width: 640px) {
  #header,
  #footer {
    overflow: hidden;
  }
  #header .row,
  #footer .row {
    display: block;
    width: 100%;
    margin-left: 0%;
    *zoom: 1;
  }
  #header .row:before,
  #footer .row:before,
  #header .row:after,
  #footer .row:after {
    content: "";
    display: table;
  }
  #header .row:after,
  #footer .row:after {
    clear: both;
  }
  #header .row .fill,
  #footer .row .fill {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  #header .row .fill:before,
  #footer .row .fill:before,
  #header .row .fill:after,
  #footer .row .fill:after {
    content: "";
    display: table;
  }
  #header .row .fill:after,
  #footer .row .fill:after {
    clear: both;
  }
}
#header {
  overflow: hidden;
}
#header .row .logo {
  display: inline;
  float: left;
  width: 31.11111111%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
#header .row .logo:before,
#header .row .logo:after {
  content: "";
  display: table;
}
#header .row .logo:after {
  clear: both;
}
#header .row .nav {
  display: inline;
  float: left;
  width: 64.44444444%;
  margin-left: 1.11111111%;
  margin-right: 1.11111111%;
  *zoom: 1;
}
#header .row .nav:before,
#header .row .nav:after {
  content: "";
  display: table;
}
#header .row .nav:after {
  clear: both;
}
@media (max-width: 640px), (max-device-width: 640px) {
  #header {
    overflow: hidden;
  }
  #header .row .logo {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  #header .row .logo:before,
  #header .row .logo:after {
    content: "";
    display: table;
  }
  #header .row .logo:after {
    clear: both;
  }
  #header .row .nav {
    display: inline;
    float: left;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    *zoom: 1;
  }
  #header .row .nav:before,
  #header .row .nav:after {
    content: "";
    display: table;
  }
  #header .row .nav:after {
    clear: both;
  }
}
#header {
  font-family: Lato;
  font-size: 1em;
  background: #fff;
  color: #343131;
  overflow: visible;
}
#header a {
  text-decoration: none;
}
#header a:link,
#header a:visited {
  color: #2980b9;
}
#header a:hover,
#header a:active {
  color: #7fb3d5;
}
#header .row {
  padding: 5px 0em;
  overflow: visible;
}
#header .row .logo {
  padding: 5px 0em;
}
#header .row .logo img {
  height: 46px;
  outline: none;
}
@media (max-width: 640px), (max-device-width: 640px) {
  #header .row .logo {
    text-align: center;
  }
}
#header .row .nav {
  text-align: right;
  padding: 13px 0px;
  line-height: 32px;
  height: 32px;
  position: relative;
  font-size: 1.1em;
}
#header .row .nav > ul {
  display: inline;
}
@media (max-width: 640px), (max-device-width: 640px) {
  #header .row .nav {
    font-size: .9em;
    margin: 0em;
    width: 100%;
    height: auto;
  }
  #header .row .nav > ul {
    display: block;
    text-align: center;
  }
}
@media (max-width: 800px), (max-device-width: 800px) {
  #header .row .nav {
    font-size: 1em;
  }
}
#header .row form {
  display: inline;
}
#header .row form input[type="text"],
#header .row form input[type="url"],
#header .row form input[type="email"],
#header .row form input[type="number"],
#header .row form input[type="password"],
#header .row form select,
#header .row form textarea {
  padding: .45em;
  width: 20em;
  border: none;
  margin-top: 0.1666665em;
  background: #343131;
  color: #fcfcfc;
  border: 1px solid #5c5a5a;
  font-family: Lato, sans-serif;
  font-size: 1em;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
}
#header .row form input[type="text"]:focus,
#header .row form input[type="url"]:focus,
#header .row form input[type="email"]:focus,
#header .row form input[type="number"]:focus,
#header .row form input[type="password"]:focus,
#header .row form select:focus,
#header .row form textarea:focus {
  border: 1px solid #f05330;
  box-shadow: inset 2px 2px #1a1818;
  outline: none;
}
div.col-bisect #header .row form input[type="text"],
div.col-bisect #header .row form input[type="url"],
div.col-bisect #header .row form input[type="email"],
div.col-bisect #header .row form input[type="number"],
div.col-bisect #header .row form input[type="password"],
div.col-bisect #header .row form select,
div.col-bisect #header .row form textarea {
  width: 96%;
  box-sizing: border-box;
}
#header .row form label {
  display: block;
  margin: .1em .3em .1em 0em;
  font-size: 1em;
}
#header .row form span.helptext {
  display: block;
  margin: .3em 0em;
  font-style: italic;
  font-size: .9em;
  color: #ffffff;
}
#header .row form input[type="radio"] {
  display: inline-block;
}
#header .row form input[type="radio"] + label {
  display: inline;
}
#header .row form input[type="checkbox"] {
  float: left;
  display: block;
  height: 1.2em;
  margin: .3em .5em;
  width: 1.2em;
  line-height: 1.5em;
}
#header .row form input[type="checkbox"] + span.helptext {
  display: block;
  overflow: hidden;
  margin: 0em;
  font-style: normal;
  color: #fcfcfc;
}
#header .row form input[type="number"] {
  width: 5em;
}
#header .row form input[type="text"].search {
  padding-left: 2em;
  background-repeat: no-repeat;
  background-position: .25em center;
  background-size: 24px 24px;
}
#header .row form input[type="text"].search {
  background-image: url('../img/icon-search.png');
}
#header .row form input[type="submit"],
#header .row form button {
  position: relative;
  padding: .33em 1em;
  border: none;
  top: -0.165em;
  font-family: Lato;
  font-size: 1.1em;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: -1px 1px #20638f;
  cursor: pointer;
  /* Raised button stuff */
  transition: all 0s ease-out;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  border-radius: .2em;
  -moz-border-radius: .2em;
  box-shadow: 0px 0.2em 0px 0px #20638f;
  -webkit-box-shadow: 0px 0.2em 0px 0px #20638f;
  margin: 1em 0em;
}
#header .row form input[type="submit"]:active,
#header .row form button:active {
  top: -0.015em;
  -webkit-box-shadow: 0px 0.05em 0px 0px #20638f;
  box-shadow: 0px 0.05em 0px 0px #20638f;
  outline: none;
}
#header .row form input[type="submit"]:hover,
#header .row form button:hover {
  background: #409ad5;
}
#header .row form textarea {
  width: 40em;
  height: 10em;
}
#header .row form .errorlist {
  color: orangered;
}
#header .row form > p {
  display: block;
  margin: .65em 0em;
  clear: both;
}
#header .row form > p + p {
  margin-top: 1em;
}
#header .row form input::-webkit-input-placeholder {
  color: #5c5a5a;
}
#header .row form input:-moz-placeholder {
  color: #5c5a5a;
  opacity: 1;
}
#header .row form input::-moz-placeholder {
  color: #5c5a5a;
  opacity: 1;
}
#header .row form input:-ms-input-placeholder {
  color: #5c5a5a;
}
#header .row form input[type="submit"] {
  margin: 0em;
}
#header .row .nav > ul {
  margin: 0em;
  list-style: none;
  font-weight: 400;
  line-height: 1.5em;
}
#header .row .nav > ul li {
  display: inline;
  margin: 0px;
  padding: 0em .4em;
  list-style: none;
}
#header .row a.link.signup {
  padding: .33em 1em;
  border: none;
  top: 0em;
  font-size: 1.2em;
  font-weight: bold;
  background: #f05330;
  color: #fcfcfc;
  text-shadow: 0px 1px 0px #ad2a0d;
  cursor: pointer;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
  box-shadow: none;
  -webkit-box-shadow: : none;
  font-size: 1em;
}
#header .row a.link.signup:hover,
#header .row a.link.signup:active {
  top: 0em;
  outline: none;
  box-shadow: none;
  background: #f27559;
  color: #fcfcfc;
}
#header div.menu-user {
  display: inline-block;
  position: relative;
  line-height: 32px;
  margin-left: .5em;
}
#header div.menu-button {
  height: 32px;
  line-height: 32px;
  display: inline-block;
}
#header div.menu-button > a {
  display: block;
  height: 24px;
  padding: 4px 1em 4px 4px;
  float: left;
  background: rgba(240, 240, 240, 0.1);
  line-height: 24px;
  vertical-align: top;
}
#header div.menu-button > a img {
  display: block;
  margin-right: .6em;
  float: left;
}
#header div.menu-button button.menu-drop {
  font-family: Lato;
  font-size: 1em;
  background: #2980b9;
  color: #fcfcfc;
  width: 32px;
  height: 32px;
  padding-left: 8px;
  padding-right: 8px;
  border: none;
  line-height: 32px;
  background-image: url('../img/dropdown.png');
  background-repeat: no-repeat;
  background-position: 8px 0px;
  border-radius: 0em .3em .3em 0em;
  vertical-align: top;
}
#header div.menu-button button.menu-drop a {
  text-decoration: none;
}
#header div.menu-button button.menu-drop a:link,
#header div.menu-button button.menu-drop a:visited {
  color: #fcfcfc;
}
#header div.menu-button button.menu-drop a:hover,
#header div.menu-button button.menu-drop a:active {
  color: #a8cae1;
}
#header div.menu-button button.menu-drop a {
  text-decoration: underline;
}
#header div.menu-button button.menu-drop:hover {
  background-color: #409ad5;
  cursor: pointer;
}
#header div.menu-dropdown {
  font-family: Lato;
  font-size: 1em;
  background: #2980b9;
  color: #fcfcfc;
  display: block;
  position: absolute;
  height: 0em;
  right: 0em;
  top: 36px;
  padding: .6em 1em;
  z-index: 1000;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.1s, opacity 0.1s;
  -webkit-transition: visibility 0.1s, opacity 0.1s;
  -moz-transition: visibility 0.1s, opacity 0.1s;
  -ms-transition: visibility 0.1s, opacity 0.1s;
  -o-transition: visibility 0.1s, opacity 0.1s;
  font-size: 1.1em;
}
#header div.menu-dropdown a {
  text-decoration: none;
}
#header div.menu-dropdown a:link,
#header div.menu-dropdown a:visited {
  color: #fcfcfc;
}
#header div.menu-dropdown a:hover,
#header div.menu-dropdown a:active {
  color: #a8cae1;
}
#header div.menu-dropdown a {
  text-decoration: underline;
}
#header div.menu-dropdown ul + ul {
  border-top: 1px solid #409ad5;
}
#header div.menu-dropdown li {
  line-height: 1.75em;
  margin: .3em 0em;
}
#header div.menu-dropdown a {
  text-decoration: none;
}
#header div.menu-dropdown.menu-dropped {
  height: auto;
  visibility: visible;
  opacity: 1;
}
#footer {
  font-family: Lato;
  font-size: 1em;
  background: #fcfcfc;
  color: #343131;
  padding: 2em 0em;
  line-height: 1.5em;
  color: #696262;
  background-color: #fff;
}
#footer a {
  text-decoration: none;
}
#footer a:link,
#footer a:visited {
  color: #2980b9;
}
#footer a:hover,
#footer a:active {
  color: #7db2d4;
}
#footer .row {
  padding: 1em 0em .65em 0em;
  text-align: center;
}
#footer ul {
  display: inline;
  margin: 0em;
  list-style: none;
}
#footer ul li {
  display: inline;
  margin: 0px;
  padding: 0em 0em 0em 1em;
  list-style: none;
}
#footer form {
  font-size: .8em;
}
#footer form input[type="text"],
#footer form input[type="url"],
#footer form input[type="email"],
#footer form input[type="number"],
#footer form input[type="password"],
#footer form select,
#footer form textarea {
  padding: .45em;
  width: 20em;
  border: none;
  margin-top: 0.1666665em;
  background: #c9c9c9;
  color: #fcfcfc;
  border: 1px solid #d3d3d3;
  font-family: Lato, sans-serif;
  font-size: 1em;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
}
#footer form input[type="text"]:focus,
#footer form input[type="url"]:focus,
#footer form input[type="email"]:focus,
#footer form input[type="number"]:focus,
#footer form input[type="password"]:focus,
#footer form select:focus,
#footer form textarea:focus {
  border: 1px solid #f05330;
  box-shadow: inset 2px 2px #b0b0b0;
  outline: none;
}
div.col-bisect #footer form input[type="text"],
div.col-bisect #footer form input[type="url"],
div.col-bisect #footer form input[type="email"],
div.col-bisect #footer form input[type="number"],
div.col-bisect #footer form input[type="password"],
div.col-bisect #footer form select,
div.col-bisect #footer form textarea {
  width: 96%;
  box-sizing: border-box;
}
#footer form label {
  display: block;
  margin: .1em .3em .1em 0em;
  font-size: 1em;
}
#footer form span.helptext {
  display: block;
  margin: .3em 0em;
  font-style: italic;
  font-size: .9em;
  color: #ffffff;
}
#footer form input[type="radio"] {
  display: inline-block;
}
#footer form input[type="radio"] + label {
  display: inline;
}
#footer form input[type="checkbox"] {
  float: left;
  display: block;
  height: 1.2em;
  margin: .3em .5em;
  width: 1.2em;
  line-height: 1.5em;
}
#footer form input[type="checkbox"] + span.helptext {
  display: block;
  overflow: hidden;
  margin: 0em;
  font-style: normal;
  color: #fcfcfc;
}
#footer form input[type="number"] {
  width: 5em;
}
#footer form input[type="text"].search {
  padding-left: 2em;
  background-repeat: no-repeat;
  background-position: .25em center;
  background-size: 24px 24px;
}
#footer form input[type="text"].search {
  background-image: url('../img/icon-search.png');
}
#footer form input[type="submit"],
#footer form button {
  position: relative;
  padding: .33em 1em;
  border: none;
  top: -0.165em;
  font-family: Lato;
  font-size: 1.1em;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: -1px 1px #20638f;
  cursor: pointer;
  /* Raised button stuff */
  transition: all 0s ease-out;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  border-radius: .2em;
  -moz-border-radius: .2em;
  box-shadow: 0px 0.2em 0px 0px #20638f;
  -webkit-box-shadow: 0px 0.2em 0px 0px #20638f;
  margin: 1em 0em;
}
#footer form input[type="submit"]:active,
#footer form button:active {
  top: -0.015em;
  -webkit-box-shadow: 0px 0.05em 0px 0px #20638f;
  box-shadow: 0px 0.05em 0px 0px #20638f;
  outline: none;
}
#footer form input[type="submit"]:hover,
#footer form button:hover {
  background: #409ad5;
}
#footer form textarea {
  width: 40em;
  height: 10em;
}
#footer form .errorlist {
  color: orangered;
}
#footer form > p {
  display: block;
  margin: .65em 0em;
  clear: both;
}
#footer form > p + p {
  margin-top: 1em;
}
#footer form input::-webkit-input-placeholder {
  color: #d3d3d3;
}
#footer form input:-moz-placeholder {
  color: #d3d3d3;
  opacity: 1;
}
#footer form input::-moz-placeholder {
  color: #d3d3d3;
  opacity: 1;
}
#footer form input:-ms-input-placeholder {
  color: #d3d3d3;
}
#footer form select {
  color: #343131;
  width: 10em;
  font-size: 1em;
  line-height: 1.5em;
}
#footer form input[type="submit"],
#footer form button {
  padding: .33em 1em;
  border: none;
  top: 0em;
  font-size: 1.2em;
  font-weight: bold;
  background: #b0b0b0;
  color: #fcfcfc;
  text-shadow: 0px 1px 0px #7d7d7d;
  cursor: pointer;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
  box-shadow: none;
  -webkit-box-shadow: : none;
  font-size: 1em;
  line-height: 1.5em;
}
#footer form input[type="submit"]:hover,
#footer form button:hover,
#footer form input[type="submit"]:active,
#footer form button:active {
  top: 0em;
  outline: none;
  box-shadow: none;
  background: #bfbfbf;
  color: #fcfcfc;
}
.info-bar > .wrapper {
  width: 61.81818182%;
  margin-left: 19.09090909%;
  margin-right: 0.90909091%;
  *zoom: 1;
  width: initial !important;
  margin: 0em;
  padding: .65em;
  text-align: center;
}
.info-bar > .wrapper:before,
.info-bar > .wrapper:after {
  content: "";
  display: table;
}
.info-bar > .wrapper:after {
  clear: both;
}
.info-bar > .wrapper div.row {
  overflow: hidden;
}
.info-bar > .wrapper div.col-bisect {
  display: block;
  float: left;
  width: 50%;
}
@media (max-width: 640px), (max-device-width: 640px) {
  .info-bar > .wrapper div.col-bisect {
    float: none;
    width: 100%;
  }
}
.info-bar > .wrapper div.col-trisect {
  display: block;
  float: left;
  width: 33.3%;
}
@media (max-width: 640px), (max-device-width: 640px) {
  .info-bar > .wrapper div.col-trisect {
    float: none;
    width: 100%;
  }
}
.info-bar > .wrapper div.col-major {
  display: block;
  float: left;
  width: 65%;
}
@media (max-width: 640px), (max-device-width: 640px) {
  .info-bar > .wrapper div.col-major {
    float: none;
    width: 100%;
  }
}
.info-bar > .wrapper div.col-minor {
  display: block;
  overflow: hidden;
  padding-left: 1em;
}
@media (max-width: 1000px) {
  .info-bar > .wrapper {
    width: 80%;
    margin-left: 10%;
    margin-right: 0.90909091%;
  }
}
@media (max-width: 700px), (max-device-width: 700px), (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 1.25), (max-device-width: 900px) and (min-resolution: 120dpi) {
  .info-bar > .wrapper {
    width: 98.18181818%;
    margin-left: 0.90909091%;
    margin-right: 0.90909091%;
  }
}
.info-bar > .wrapper p {
  margin: 0em;
}
.info-bar {
  font-family: Lato;
  font-size: 1em;
  background: #33aa33;
  color: #fcfcfc;
  border-bottom: 2px solid #278327;
}
.info-bar a {
  text-decoration: none;
}
.info-bar a:link,
.info-bar a:visited {
  color: #fcfcfc;
}
.info-bar a:hover,
.info-bar a:active {
  color: #acdbac;
}
.info-bar a {
  text-decoration: underline;
}
.info-bar.important {
  font-family: Lato;
  font-size: 1em;
  background: #2980b9;
  color: #fcfcfc;
  border-bottom: 2px solid #20638f;
}
.info-bar.important a {
  text-decoration: none;
}
.info-bar.important a:link,
.info-bar.important a:visited {
  color: #fcfcfc;
}
.info-bar.important a:hover,
.info-bar.important a:active {
  color: #a8cae1;
}
.info-bar.important a {
  text-decoration: underline;
}
/*
For notification blocks generated from Django messages.

.notification-30  - Warning level notification
.notification-40  - Warning level notification

Example:
<div class="notifications">
  <div class="notification $modifier_class">
    This is a notification
  </div>
</div>

Styleguide 1.5
*/
.notifications > .notification {
  padding: .5em;
  margin-top: 1em;
  margin-bottom: 1em;
  background: #bedcf0;
  color: #343131;
  border-top: 3px solid #7fbbe3;
}
.notifications > .notification-30,
.notifications > .notification-31,
.notifications > .notification-32,
.notifications > .notification-40,
.notifications > .notification-41,
.notifications > .notification-42 {
  background: #ffdacc;
  color: #343131;
  border-top: 3px solid #ffa280;
}
#content {
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
}
/*
General hyperlink styling

:link     - Link
:visited  - Visited link
:hover    - Link on hover
:active   - Link on mouse down

Example:
<a href="" class="$modifier_class">This is a link.</a>

Styleguide 1.1
*/
a {
  text-decoration: none;
}
a:link {
  color: #2980b9;
}
a:visited {
  color: #20638f;
}
a:hover,
a:active {
  color: #2e8ece;
}
input[type='text'],
input[type='email'] {
  padding: .5em;
  border: none;
  margin-top: 0.1666665em;
  background: #20638f;
  color: #fcfcfc;
  font-family: Lato, sans-serif;
}
input[type='text'].sec,
input[type='email'].sec {
  width: 15em;
  margin: 0em 1em;
  background: #ee3f18;
  font-size: 1.5em;
}
img.gravatar {
  background: #f0f0f0;
}
form input[type="text"],
form input[type="url"],
form input[type="email"],
form input[type="number"],
form input[type="password"],
form select,
form textarea {
  padding: .45em;
  width: 20em;
  border: none;
  margin-top: 0.1666665em;
  background: #ffffff;
  color: #343131;
  border: 1px solid #d6d6d6;
  font-family: Lato, sans-serif;
  font-size: 1em;
  border-radius: .2em;
  -moz-border-radius: .2em;
  -webkit-border-radius: .2em;
}
form input[type="text"]:focus,
form input[type="url"]:focus,
form input[type="email"]:focus,
form input[type="number"]:focus,
form input[type="password"]:focus,
form select:focus,
form textarea:focus {
  border: 1px solid #f05330;
  box-shadow: inset 2px 2px #e6e6e6;
  outline: none;
}
div.col-bisect form input[type="text"],
div.col-bisect form input[type="url"],
div.col-bisect form input[type="email"],
div.col-bisect form input[type="number"],
div.col-bisect form input[type="password"],
div.col-bisect form select,
div.col-bisect form textarea {
  width: 96%;
  box-sizing: border-box;
}
form label {
  display: block;
  margin: .1em .3em .1em 0em;
  font-size: 1em;
}
form span.helptext {
  display: block;
  margin: .3em 0em;
  font-style: italic;
  font-size: .9em;
  color: #696262;
}
form input[type="radio"] {
  display: inline-block;
}
form input[type="radio"] + label {
  display: inline;
}
form input[type="checkbox"] {
  float: left;
  display: block;
  height: 1.2em;
  margin: .3em .5em;
  width: 1.2em;
  line-height: 1.5em;
}
form input[type="checkbox"] + span.helptext {
  display: block;
  overflow: hidden;
  margin: 0em;
  font-style: normal;
  color: #343131;
}
form input[type="number"] {
  width: 5em;
}
form input[type="text"].search {
  padding-left: 2em;
  background-repeat: no-repeat;
  background-position: .25em center;
  background-size: 24px 24px;
}
form input[type="text"].search {
  background-image: url('../img/icon-search.png');
}
form input[type="submit"],
form button {
  position: relative;
  padding: .33em 1em;
  border: none;
  top: -0.165em;
  font-family: Lato;
  font-size: 1.1em;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: -1px 1px #20638f;
  cursor: pointer;
  /* Raised button stuff */
  transition: all 0s ease-out;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  border-radius: .2em;
  -moz-border-radius: .2em;
  box-shadow: 0px 0.2em 0px 0px #20638f;
  -webkit-box-shadow: 0px 0.2em 0px 0px #20638f;
  margin: 1em 0em;
}
form input[type="submit"]:active,
form button:active {
  top: -0.015em;
  -webkit-box-shadow: 0px 0.05em 0px 0px #20638f;
  box-shadow: 0px 0.05em 0px 0px #20638f;
  outline: none;
}
form input[type="submit"]:hover,
form button:hover {
  background: #409ad5;
}
form textarea {
  width: 40em;
  height: 10em;
}
form .errorlist {
  color: orangered;
}
form > p {
  display: block;
  margin: .65em 0em;
  clear: both;
}
form > p + p {
  margin-top: 1em;
}
form input::-webkit-input-placeholder {
  color: #d6d6d6;
}
form input:-moz-placeholder {
  color: #d6d6d6;
  opacity: 1;
}
form input::-moz-placeholder {
  color: #d6d6d6;
  opacity: 1;
}
form input:-ms-input-placeholder {
  color: #d6d6d6;
}
pre,
code {
  background: #f7f7f7;
  border: 1px solid #e3e3e3;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1em;
  margin: 1em 0em;
  white-space: pre-line;
  border-radius: .2em;
  font-family: 'DejaVu Sans Mono', 'Droid Sans Mono', monospace;
}
pre {
  font-size: .8em;
}
code {
  padding: .2em;
}
/*
General paragraph styles. Bold formatting is accomplished with highlighting,
as if to mimic taking notes inside documentation.

.info     - Paragraph block for prominent information. Notification messages
            should use a notification block instead of this info block.

Example:
<p class="$modifier_class">
  This paragraph has information in it about stuff.
  <b>You should be pulled to this,</b>
  because it was important.
</p>

Styleguide 1.2
*/
p,
dl {
  line-height: 1.5em;
}
p b,
dl b {
  padding: .2em .2em;
  margin: 0em -0.2em;
  background: #d2e7f5;
  color: #000000;
  font-weight: normal;
  text-decoration: none;
}
p {
  margin: 1em 0em;
}
p.info {
  font-family: Lato;
  font-size: 1em;
  background: #f5f2e9;
  color: #343131;
  padding: 1em;
  border-radius: .3em;
  -moz-border-radius: .3em;
  -webkit-border-radius: .3em;
}
p.info a {
  text-decoration: none;
}
p.info a:link,
p.info a:visited {
  color: #409ad5;
}
p.info a:hover,
p.info a:active {
  color: #89bddd;
}
p.info b {
  padding: .2em;
  background: #d2e7f5;
  color: #000000;
  font-weight: normal;
  text-decoration: none;
}
/*
Defnition lists. Used in some cases to provide bullet list with microheadings

Example:
<dl>
  <dt>Foo</dt>
  <dd>Foo option</dd>

  <dt>Bar</dt>
  <dd>Some more about bar here</dd>
</dl>

Styleguide 1.2
*/
dl dt {
  margin-top: .65em;
  font-weight: bold;
}
div.button-bar ul {
  list-style: none;
  text-align: right;
}
div.button-bar ul li {
  display: inline-block;
}
div.button-bar li a.button,
div.button-bar li input[type="submit"],
div.button-bar li input[type="button"],
div.button-bar li button {
  position: relative;
  padding: .33em 1em;
  border: none;
  top: -0.165em;
  font-family: Lato;
  font-size: 1.1em;
  background: #2980b9;
  color: #fcfcfc;
  text-shadow: -1px 1px #20638f;
  cursor: pointer;
  /* Raised button stuff */
  transition: all 0s ease-out;
  -webkit-transition: all 0s ease-out;
  -moz-transition: all 0s ease-out;
  -o-transition: all 0s ease-out;
  -ms-transition: all 0s ease-out;
  border-radius: .2em;
  -moz-border-radius: .2em;
  box-shadow: 0px 0.2em 0px 0px #20638f;
  -webkit-box-shadow: 0px 0.2em 0px 0px #20638f;
  margin-top: .5em;
  margin-bottom: .5em;
}
div.button-bar li a.button:active,
div.button-bar li input[type="submit"]:active,
div.button-bar li input[type="button"]:active,
div.button-bar li button:active {
  top: -0.015em;
  -webkit-box-shadow: 0px 0.05em 0px 0px #20638f;
  box-shadow: 0px 0.05em 0px 0px #20638f;
  outline: none;
}
div.button-bar li a.button:hover,
div.button-bar li input[type="submit"]:hover,
div.button-bar li input[type="button"]:hover,
div.button-bar li button:hover {
  background: #409ad5;
}