.gdpr-container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
	box-sizing: border-box;
}
.gdpr-row {
	display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.gdpr-col-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}
.gdpr-col-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
}
.gdpr-align-items-stretch {
    -ms-flex-align: stretch!important;
    align-items: stretch!important;
}
.gdpr-d-flex {
    display: -ms-flexbox!important;
    display: flex!important;
}
.gdpr-px-0 {
	padding-left: 0;
	padding-right: 0;
}
.modal-open {
    overflow: hidden
}

.modal-open .gdpr-modal {
    overflow-x: hidden;
    overflow-y: auto
}

.gdpr-modal.fade .gdpr-modal-dialog {
    transition: -webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out;
    -webkit-transform: translate(0,-25%);
    transform: translate(0,-25%)
}

.gdpr-modal.show .gdpr-modal-dialog {
    -webkit-transform: translate(0,0);
    transform: translate(0,0)
}

.gdpr-modal {
	position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden; 
	outline:none;
}
.gdpr-modal a {
	text-decoration: none;
}
.gdpr-modal .gdpr-modal-dialog {
	position: relative;
    width: auto;
    margin: .5rem;
    pointer-events: none;
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
	text-align: left;
	display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    min-height: calc(100% - (.5rem * 2))
}
@media (min-width: 576px) {
    .gdpr-modal .gdpr-modal-dialog {
        max-width:500px;
		margin: 1.75rem auto;
        min-height: calc(100% - (1.75rem * 2));		
    }
}
@media (min-width: 992px) {
	.gdpr-modal .gdpr-modal-dialog {
		max-width: 900px;			
	}
}
.gdpr-modal-content {
	position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
	box-sizing: border-box;
    outline: 0
}
.gdpr-modal .row {
	margin: 0 -15px;
}
.gdpr-modal .modal-body {
	padding: 0;
	position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}
.gdpr-modal .close {
	position: absolute;
	right: 10px;
	top: 10px;
	z-index: 1;
	padding: 0;
    background-color: transparent;
    border: 0;
	-webkit-appearance: none;
	font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
}
.gdpr-modal .close:focus {
	outline: 0;
}
.gdpr-switch {
	display: inline-block;
	position: relative;
	min-height: 1px;
	padding-left: 70px;
	font-size: 14px;
}
.gdpr-switch input[type="checkbox"] {
	display:none;
}
.gdpr-switch .gdpr-slider {
	background-color: #e3e1e8;
	height: 24px;
	width: 50px;
	bottom: 0;
	cursor: pointer;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	transition: .4s;
}
.gdpr-switch .gdpr-slider:before {
	background-color: #fff;
	bottom: 2px;
	content: "";
	height: 20px;
	left: 2px;
	position: absolute;
	transition: .4s;
	width: 20px;
}
.gdpr-switch input:checked + .gdpr-slider {
	background-color:rgb(99, 179, 95);
}
.gdpr-switch input:checked + .gdpr-slider:before {
	transform: translateX(26px);
}
.gdpr-switch .gdpr-slider {
	border-radius: 34px;
}
.gdpr-switch .gdpr-slider:before {
	border-radius: 50%;
}
.gdpr-tab-content>.gdpr-tab-pane {
    display: none;
}
.gdpr-tab-content>.active {
    display: block;
}
.gdpr-fade {
    transition: opacity .15s linear;
}
.gdpr-nav-pills {
	display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
	list-style: none;
	-ms-flex-direction: column !important;
    flex-direction: column !important;
    align-items: stretch !important;
    -ms-align-items: stretch !important;
}
.nav.gdpr-nav-pills, .gdpr-tab-content {
	width: 100%;
	padding: 30px;
	box-sizing: border-box;
}
.nav.gdpr-nav-pills {
	background: #f3f3f3;
}
.nav.gdpr-nav-pills .gdpr-nav-link {
	border: 1px solid #0070ad;
	margin-bottom: 10px;
	color: #0070ad;
	font-size: 14px;
	display: block;
	padding: .5rem 1rem;
	border-radius: .25rem;
}
.nav.gdpr-nav-pills .gdpr-nav-link.active, .nav.gdpr-nav-pills .show>.gdpr-nav-link {
	background-color: #0070ad;
	border: 1px solid #0070ad;
}
.nav.gdpr-nav-pills .gdpr-nav-link.active {
	color: #ffffff;
}
.gdpr-tab-content .gdpr-button-wrapper {
	padding-top: 30px;
	margin-top: 30px;
	border-top: 1px solid #d6d6d6;
}
.gdpr-tab-content .gdpr-button-wrapper .btn-gdpr {
	background-color: #0070ad;
	border-color: #0070ad;
	color: #ffffff;
	display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
	box-sizing: border-box;
}
.gdpr-tab-content p {
	color: #343438;
	font-size: 14px;
	margin-top: 0;
}
.gdpr-tab-content h4 {
	font-size: 20px;
	margin-bottom: .5rem;
	margin-top: 0;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
}


.cli-container-fluid {
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
}
.cli-row {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
}
.cli-col-4 {
	-ms-flex: 0 0 33.333333%;
	flex: 0 0 33.333333%;
	max-width: 33.333333%;
}
.cli-col-8 {
	-ms-flex: 0 0 66.666667%;
	flex: 0 0 66.666667%;
	max-width: 66.666667%;
	flex-direction: column;
}
.cli-align-items-stretch {
	-ms-flex-align: stretch!important;
	align-items: stretch!important;
}
.cli-d-flex {
	display: -ms-flexbox!important;
	display: flex!important;
}
.cli-px-0 {
	padding-left: 0;
	padding-right: 0;
}
.cli-btn {
	cursor: pointer;
	font-size: 14px;
	display: inline-block;
	font-weight: 400;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border: 1px solid transparent;
	padding: .5rem 1.25rem;
	line-height: 1;
	border-radius: .25rem;
	transition: all .15s ease-in-out;
}
.cli-btn:hover {
  opacity: .8;
}
.cli-btn:focus {
	outline: 0;
}
.cli-read-more-link {
	cursor: pointer;
	font-size: 15px;
	font-weight: 500;
	text-decoration: underline;
}
.cli-modal-backdrop.cli-show {
  opacity: .8;
}
.cli-modal-open {
  overflow: hidden
}
.cli-barmodal-open {
  overflow: hidden
}
.cli-modal-open .cli-modal {
	overflow-x: hidden;
	overflow-y: auto
}
.cli-modal.cli-fade .cli-modal-dialog {
	transition: -webkit-transform .3s ease-out;
	transition: transform .3s ease-out;
	transition: transform .3s ease-out,-webkit-transform .3s ease-out;
	-webkit-transform: translate(0,-25%);
	transform: translate(0,-25%)
}
.cli-modal.cli-show .cli-modal-dialog {
	-webkit-transform: translate(0,0);
	transform: translate(0,0)
}
.cli-modal-backdrop {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1040;
    background-color: #000;
    -webkit-transform:scale(0);
    transform:scale(0);
    transition: opacity ease-in-out 0.5s;
}
.cli-modal-backdrop.cli-fade {
  opacity: 0;
  
}
.cli-modal-backdrop.cli-show {
	opacity: .5;
  -webkit-transform:scale(1);
  transform:scale(1);
}
.cli-modal {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99999;
    -webkit-transform:scale(0);
    transform:scale(0);
	overflow: hidden;
    outline: 0;
    visibility: hidden;
}
.cli-modal.cli-show {
    visibility: visible;
}
.cli-modal a {
	text-decoration: none;
}
.cli-modal .cli-modal-dialog {
	position: relative;
	width: auto;
	margin: .5rem;
	pointer-events: none;
	font-family: inherit;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #212529;
	text-align: left;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	min-height: calc(100% - (.5rem * 2))
}
@media (min-width: 576px) {
	.cli-modal .cli-modal-dialog {
		max-width:500px;
		margin: 1.75rem auto;
		min-height: calc(100% - (1.75rem * 2))
	}
}
.cli-modal-content {
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	width: 100%;
	pointer-events: auto;
	/* background-color: #fff; */
	background-clip: padding-box;
	border-radius: .2rem;
	box-sizing: border-box;
	outline: 0
}
.cli-modal .row {
	margin: 0 -15px;
}
.cli-modal-footer {
    position: relative;
}
.cli-modal .modal-body {
	padding: 0;
	position: relative;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
}
.cli-modal .cli-modal-close:focus {
	outline: 0;
}
.cli-switch {
    display: inline-block;
    position: relative;
    min-height: 1px;
    padding-left: 38px;
    font-size: 14px;
    width:auto;
}
.cli-switch input[type="checkbox"] {
    display:block;
    margin: 0;
    width: 0;
    position: absolute !important;
    left: 0 !important;
    opacity: 0 !important;
}
.cli-switch .cli-slider {
    background-color: #e3e1e8;
	height: 20px;
    width: 38px;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
}
.cli-switch .cli-slider:before {
    bottom: 2px;
    content: "";
    height: 15px;
    left: 3px;
    position: absolute;
    transition: .4s;
    width: 15px;
}
.cli-switch input:checked + .cli-slider {
	background-color: #28a745;
}
.cli-switch input:checked + .cli-slider:before {
	transform: translateX(18px);
}
.cli-switch .cli-slider {
    border-radius: 34px;
    font-size:0;
}
.cli-switch .cli-slider:before {
    border-radius: 50%;
}
.cli-tab-content {
    /* background: #ffffff; */
}
.cli-nav-pills {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    -ms-flex-direction: column;
    flex-direction: column;
}
.cli-nav-pills, .cli-tab-content {
    width: 100%;
    padding:5px 30px 5px 5px;
	box-sizing: border-box;
}
@media (max-width: 767px) {
	.cli-nav-pills, .cli-tab-content {
    padding: 30px 10px;
	}
}
.cli-nav-pills {
    background: #fff;
}
.cli-nav-pills .cli-nav-link {
    border: 1px solid #cccccc;
    margin-bottom: 10px;
    color:#2a2a2a;
    font-size: 14px;
    display: block;
    padding: .5rem 1rem;
    border-radius: .25rem;
    cursor: pointer
}
.cli-nav-pills .cli-nav-link.cli-active, .cli-nav-pills .cli-show>.cli-nav-link {
    background-color: #f6f6f9;
    border: 1px solid #cccccc;
}
.cli-nav-pills .cli-nav-link.cli-active {
    color:#2a2a2a;
}
.cli-tab-content .cli-button-wrapper {
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #d6d6d6;
}
.cli-tab-content p {
    color: #343438;
    font-size: 14px;
    margin-top: 0;
}
.cli-tab-content h4 {
    font-size: 20px;
    margin-bottom: 1.5rem;
    margin-top: 0;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
}
/* Cookie Settings In Bar */
#cookie-law-info-bar .cli-nav-pills,#cookie-law-info-bar .cli-tab-content,#cookie-law-info-bar .cli-nav-pills .cli-show>.cli-nav-link,#cookie-law-info-bar a.cli-nav-link.cli-active{
    background: transparent;
}

#cookie-law-info-bar .cli-nav-pills .cli-nav-link.cli-active,#cookie-law-info-bar  .cli-nav-link,#cookie-law-info-bar .cli-tab-container p,#cookie-law-info-bar span.cli-necessary-caption,#cookie-law-info-bar .cli-switch .cli-slider:after
{
    color:inherit;
}
#cookie-law-info-bar .cli-tab-header a:before
{
	border-right: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
}
#cookie-law-info-bar .cli-row
{
	margin-top:20px;
}
#cookie-law-info-bar .cli-col-4
{
	-webkit-box-flex: 0;
	-ms-flex: 0 0 auto;
	flex: 0 0 auto;
	width: auto;
	max-width: none;
}
#cookie-law-info-bar .cli-col-8
{
	flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
}
.cli-wrapper {
    max-width: 100%;
    float: none;
    margin: 0 auto;
}
#cookie-law-info-bar .cli-tab-content h4
{
	margin-bottom:0.5rem;
}
#cookie-law-info-bar .cli-nav-pills .cli-nav-link
{
	padding: .2rem 0.5rem;
}
#cookie-law-info-bar .cli-tab-container
{
	display:none;
	text-align:left;
}

/* Popup Footer Styles */
.cli-tab-footer .cli-btn {
    padding: 10px 15px;
    width: auto;
    text-decoration: none;
}
.cli-tab-footer {
	width:100%;
	text-align:right;
    padding: 20px 0;
}
/* version 2.0 */
.cli-col-12
{
	width:100%;
}
.cli-tab-header
{
	display: flex;
	justify-content: space-between;
}
.cli-tab-header a:before {
    width: 10px;
    height: 2px;
    left: 0;
    top: calc(50% - 1px);
}
.cli-tab-header a:after {
    width: 2px;
    height: 10px;
    left: 4px;
    top: calc(50% - 5px);
    -webkit-transform: none;
    transform: none;
}
.cli-tab-header a:before {
	width: 7px;
    height: 7px;
    border-right: 1px solid #4a6e78;
    border-bottom: 1px solid #4a6e78;
    content: " ";
    transform: rotate(-45deg);
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	margin-right:10px;
}
.cli-tab-header a.cli-nav-link  {               
    position: relative;
	display: flex;
    align-items: center;
	font-size:14px;
    color:#000;
    text-decoration: none;  
}
.cli-tab-header.cli-tab-active .cli-nav-link:before
{
    transform: rotate(45deg);
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}
.cli-tab-header {
    border-radius: 5px;
    padding: 12px 15px;
    cursor: pointer;
    transition: background-color 0.2s ease-out 0.3s, color 0.2s ease-out 0s;
    background-color:#f2f2f2;
}
.cli-modal .cli-modal-close {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    -webkit-appearance: none;
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;
	padding: 10px;
	background: transparent;
	border:none;
}
.cli-tab-container h4 {
	font-family: inherit;
    font-size: 16px;
    margin-bottom: 15px;
	margin:10px 0;
}
.cli-tab-container p, .cli-privacy-content-text{
    font-size: 14px;
    line-height: 1.4;
    margin-top: 0;
    padding: 0;
    color: #000;
}
.cli-tab-content
{
	display:none;
}
.cli-tab-section .cli-tab-content
{
	padding: 10px 20px 5px 20px;
}
.cli-tab-section
{
	margin-top:5px;
}
@media (min-width: 992px) {
	.cli-modal .cli-modal-dialog {
		max-width: 645px;
	}
}
.cli-switch .cli-slider:after{
	content: attr(data-cli-disable);
    position: absolute;
    right: 50px;
	font-size:12px;
    text-align:right;
    min-width: 120px;
}
.cli-switch input:checked + .cli-slider:after
{
	content: attr(data-cli-enable);
}

a.cli-privacy-readmore {
    font-size: 12px;
    margin-top: 12px;
    display: inline-block;
    cursor: pointer;
    text-decoration: underline;
}
.cli-privacy-overview
{
    padding-bottom:12px;
}
a.cli-privacy-readmore:before {
    content: attr(data-readmore-text);
}
.cli-collapsed a.cli-privacy-readmore:before {
    content: attr(data-readless-text);
}

.cli-collapsed .cli-privacy-content
{
    transition: max-height 0.25s ease-in;

}
.cli-privacy-content p
{
	margin-bottom:0;
}
.cli-modal-close svg {
    fill: #000;
}
span.cli-necessary-caption {
    color: #000;
    font-size: 12px;
}
.cli-tab-section.cli-privacy-tab {
    display: none;
}
#cookie-law-info-bar .cli-tab-section.cli-privacy-tab {
    display: block;
}
#cookie-law-info-bar .cli-privacy-overview {
    display: none;
}
.cli-tab-container .cli-row
{
	max-height: 500px;
    overflow-y: auto;	
}
.cli-modal.cli-blowup.cli-out {
    z-index: -1;
}
.cli-modal.cli-blowup {
    z-index: 999999;
    -webkit-transform:scale(1);
    transform:scale(1);
  }
  .cli-modal.cli-blowup .cli-modal-dialog {
    animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }
  .cli-modal.cli-blowup.cli-out .cli-modal-dialog
  {
    animation: blowUpModalTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }
  @keyframes blowUpContent {
    0% {
        -webkit-transform:scale(1);
        transform:scale(1);
      opacity: 1;
    }
    99.9% {
        -webkit-transform:scale(2);
        transform:scale(2);
      opacity: 0;
    }
    100% {
        -webkit-transform:scale(0);
        transform:scale(0);
    }
  }
  @keyframes blowUpContentTwo {
    0% {
        -webkit-transform:scale(2);
        transform:scale(2);
      opacity: 0;
    }
    100% {
        -webkit-transform:scale(1);
        transform:scale(1);
      opacity: 1;
    }
  }
  @keyframes blowUpModal {
    0% {
        -webkit-transform:scale(0);
        transform:scale(0);
    }
    100% {
        -webkit-transform:scale(1);
        transform:scale(1);
    }
  }
  @keyframes blowUpModalTwo {
    0% {
        -webkit-transform:scale(1);
        transform:scale(1);
      opacity: 1;
    }
    50% {
        -webkit-transform:scale(0.5);
    transform:scale(0.5);
        opacity: 0;
      }
    100% {
        -webkit-transform:scale(0);
        transform:scale(0);
      opacity: 0;
    }
  }
  /* GDPR Bar Version 2 */
.cli-bar-container{
    float: none;
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.cli-style-v2 a
{
    cursor: pointer;
}
.cli-style-v2 .cli-plugin-main-link 
{
    font-weight:inherit;
}
.cli-style-v2 
{
    font-size:11pt;
    font-weight:normal;
}
#cookie-law-info-bar[data-cli-type="widget"] .cli-bar-container,#cookie-law-info-bar[data-cli-type="popup"] .cli-bar-container{
    display: block;
}
.cli-bar-message {
    width: 70%;
    text-align: left;
}
#cookie-law-info-bar[data-cli-type="widget"] .cli-bar-message,#cookie-law-info-bar[data-cli-type="popup"] .cli-bar-message
{
    width:100%;
}
#cookie-law-info-bar[data-cli-style="cli-style-v2"] .cli_messagebar_head{
    text-align:left;
    margin-left:5%;
    margin-bottom: 10px;
}
@media (max-width: 985px) {
    .cli-bar-message
    {
        width:100%;
    }
    .cli-bar-container
    {
        justify-content:center;
    }
}
#cookie-law-info-bar[data-cli-style="cli-style-v2"] .wt-cli-ccpa-checkbox {
    display: block;
}
/* Cookie Style Version 3 */
.wt-cli-form-group input:disabled
{
    opacity:0.5;
}
.wt-cli-custom-checkbox input[type="checkbox"] {
    border: 1px solid #b4b9be;
    background: #fff;
    color: #555;
    clear: none;
    cursor: pointer;
    display: inline-block !important;
    line-height: 0;
    height: 16px;
    margin: -4px 4px 0 0;
    padding: 0!important;
    text-align: center;
    vertical-align: middle;
    width: 16px;
    min-width: 16px;
    -webkit-appearance: none;
    box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
    transition: .05s border-color ease-in-out;
}
.wt-cli-custom-checkbox input[type=checkbox]:checked:before {
    content: '';
    display: block;
    border: solid #61a229;
    width: 5px;
    height: 10px;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin: 1px 0 0 5px;
    box-sizing: border-box;
}
.wt-cli-form-group {
    margin-right: 15px;
}
.cli-style-v3 .cli-bar-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.cli-style-v3 .cli-bar-btn_container,.cli-style-v3 .wt-cli-category-widget {
    margin-top: 10px;
 }
.cli-style-v3 {
    text-align: left;
}
#cookie-law-info-bar a,.wt-cli-category-widget .wt-cli-form-group label
{
    cursor:pointer;
}
.wt-cli-category-widget .wt-cli-form-group label {
    font-size: inherit;
}
#cookie-law-info-bar[data-template-id="cli-style-v3"]
{
    padding: 10px 90px;
}
#cookie-law-info-bar[data-template-id="cli-style-v3"][data-cli-type="widget"]
{
    padding: 10px 20px;
}
#cookie-law-info-bar[data-template-id="cli-style-v3"][data-cli-type="popup"]
{
    padding: 10px 20px;
}
#cookie-law-info-bar[data-template-id="cli-style-v3"] .wt-cli-category-widget {
    display: flex;
    flex-wrap: wrap;
}
#cookie-law-info-bar[data-template-id="cli-style-v3"]
{
    text-align:left;
    font-size:11pt;
    border:1px solid #ffffffe6;
}
#cookie-law-info-bar[data-template-id="cli-style-v3"] h5
{
    margin:10px 0;
}
.wt-cli-category-widget-active .cli-switch,.wt-cli-category-widget-active .wt-cli-necessary-checkbox,.wt-cli-category-widget-active .cli-necessary-caption
{
    display:none !important;
}
@media (max-width: 985px) {
    #cookie-law-info-bar[data-template-id="cli-style-v3"]
    {
        padding:10px 20px;
    }
}
/* Cookie settings popup */
.wt-cli-sr-only
{
    display: none;
}
.wt-cli-cookie-bar-container.wt-cli-hide-bar {
    display: none !important;
}
.wt-cli-privacy-accept-btn {
    margin-left: 10px;
}
/* ADA changes */

.cli_settings_button:focus,#cookie-law-info-again:focus,#wt-cli-cookie-banner-title:focus,.cli-plugin-main-link,.cli_action_button,.cli-privacy-readmore,.cli-tab-header a,.cli-switch .cli-slider,.cli-tab-content .cli-tab-pane:focus
{
    outline: 0;
}
.cli-plugin-button:focus
{
    outline: 0;
    opacity: 0.7;
}
/* Settings popup footer section */
.wt-cli-ckyes-brand-logo {
    display: flex;
    align-items: center;
    font-size: 9px;
    color: #111111;
    font-weight: normal;
}
.wt-cli-ckyes-brand-logo img{
    width: 65px;
    margin-left: 2px;
}
.wt-cli-privacy-overview-actions {
    padding-bottom:0;
}

/* Fix: HTML validation error due to the enclosing of <p> tags on category description */
.wt-cli-cookie-description {
    font-size: 14px;
    line-height: 1.4;
    margin-top: 0;
    padding: 0;
    color: #000;
}