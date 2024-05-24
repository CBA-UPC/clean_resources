Not Found1709204349441334912785025599046000450"}*/
/*

Primary Color:   #2e2e2e
Secondary Color: #0e6073

Search & Replace Primary Color to change colors of:
Toolbars
Page Back Button
Book Toolbar Title
Left Tabs
Social Tabs

Search & Replace Secondary Color to change colors of:
Input/Form Fields 'Glow'
TOC & Search Results Hover
Selected Thumbnail 'Glow'
AboutAccordion Hover
Progress Bar

*/

/*----------- MAIN BACKGROUND -----------*/
.applicationView,
.TpodMode .applicationView
{
	background: #f1f4f6;
}

/*----------- TOOLBARS -----------*/

/* DESKTOP & BOOKSHELF TOOLBARS */
.PlatformDesktop .tbContainer,
.PlatformTablet .tbContainer,
.bookshelfView_header,
.verticalToolbar  .tbCenterWrapper,
.verticalToolbar  .tbCenterWrapper .tbButton.spriteButton,
.verticalToolbar  .tbCenterWrapper,
.verticalToolbar  .tbCenterWrapper .tbButton.spriteButton,
.DarkToolbarButtonStyle.PlatformDesktop .tbContainer,
.DarkToolbarButtonStyle.PlatformTablet .tbContainer,
.DarkToolbarButtonStyle .bookshelfView_header,
.LightToolbarButtonStyle.PlatformDesktop .tbContainer,
.LightToolbarButtonStyle.PlatformTablet .tbContainer,
.LightToolbarButtonStyle .bookshelfView_header
.DarkMenuButtonStyle .verticalToolbar  .tbCenterWrapper,
.DarkMenuButtonStyle .verticalToolbar  .tbCenterWrapper .tbButton.spriteButton,
.LightMenuButtonStyle .verticalToolbar .tbCenterWrapper,
.LightMenuButtonStyle .verticalToolbar  .tbCenterWrapper .tbButton.spriteButton
{
	background: #0864a4;
    /****** UNCOMMENT THESE STYLES FOR TRANSPARENT TOOLBARS
	background: none  !important;
	border: none  !important;
    *****/
}

.verticalToolbar 
{ 
    /****** UNCOMMENT THESE STYLES FOR TRANSPARENT TOOLBARS
	background-color: rgba(0,0,0,0.10) !important;
	border: none  !important;
    *****/
}

.verticalToolbar .tbCenterWrapper .tbButton.spriteButton.minimalShowTip,
.verticalToolbar .tbCenterWrapper .tbPageInput.minimalShowTip,
.LightMenuButtonStyle .verticalToolbar .tbCenterWrapper tbButton:hover,
.DarkMenuButtonStyle .verticalToolbar .tbCenterWrapper tbButton:hover,
.LightToolbarButtonStyle .verticalToolbar .tbCenterWrapper .tbButton.spriteButton.radio-group.down,
.DarkToolbarButtonStyle .verticalToolbar .tbCenterWrapper .tbButton.spriteButton.radio-group.down 
{
    /****** UNCOMMENT THESE STYLES FOR TRANSPARENT TOOLBARS
	background-color: rgba(0,0,0,0.20) !important;
    *****/
}

/* MOBILE TOOLBARS */
.DarkToolbarButtonStyle.PlatformMobile .tbContainer,
.DarkToolbarButtonStyle.PlatformTablet7 .tbContainer,
.LightToolbarButtonStyle.PlatformMobile .tbContainer,
.LightToolbarButtonStyle.PlatformTablet7 .tbContainer
{
	background: #0864a4;
}

/* MOBILE MENU BUTTON */
.LightToolbarButtonStyle.PlatformMobile .mobilemenubtn .icon-bar,
.LightToolbarButtonStyle.PlatformTablet7 .mobilemenubtn .icon-bar
{
    background-color: #fff;
}
.DarkToolbarButtonStyle.PlatformMobile .mobilemenubtn .icon-bar,
.DarkToolbarButtonStyle.PlatformTablet7 .mobilemenubtn .icon-bar
{
    background-color: #4d4d4d;
}

/* PAGE BACK BUTTON */
.DarkToolbarButtonStyle .pageHistLeft .pageCtlButton,
.LightToolbarButtonStyle .pageHistLeft .pageCtlButton
{
	background-color: #2e2e2e;
}

/* BOOK TOOLBAR TITLE */
.DarkToolbarButtonStyle  .titleControl .center,
.LightToolbarButtonStyle .titleControl .center,
.DarkToolbarButtonStyle .titleControl .titleControlTab,
.LightToolbarButtonStyle .titleControl .titleControlTab
{
	background-color: #2e2e2e;
}

/*---- LEFT & SOCIAL TABS ----*/

.DarkToolbarButtonStyle .tab-bar-wrapper1 li
{
	color: #fff;
}

.LightToolbarButtonStyle .tab-bar-wrapper1 li
{
	color: #fff;
}

.tab-bar-wrapper1 li:not(.tab-selected)
{
	background-color: #2e2e2e;
	font-weight: 400;
}

.tab-bar-wrapper1 li:hover:not(.tab-selected)
{
background-color: #333; /* Hover color of unselected tab */
margin-top: 0px;
}

.tab-bar-wrapper1 li.tab-selected
{
	color: #fff;
	background-color: #333;
	font-weight: 400;
}

#SocialWidgets #social-tabs .social-tabs li
{
background-color: #2e2e2e;
}

/*---- ACCENTS / INPUT 'GLOW' ----*/

.form-control:focus
{
	border-color: #0e6073 !important;
}

.form-control:focus
{
	-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(73, 186, 215, 0.6);
	box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(73, 186, 215, 0.6);
}

.listview_link:hover,
.listview_nextLevel:hover
{
	background-color: #0e6073;
}

#AboutAccordion_DialogContent .panel-default > .panel-heading:hover,
#AboutAccordion_DialogContent .panel-default > .panel-heading:focus,
#AboutAccordion_DialogContent .panel-default > .panel-heading:active
{
	background-color: #0e6073 !important;
}

.SearchResults .item:hover
{
	-webkit-box-shadow: 0 1px 7px #0e6073;
	-moz-box-shadow: 0 1px 7px #0e6073;
	-o-box-shadow: 0 1px 7px #0e6073;
	box-shadow: 0 1px 7px #0e6073;
	border-color: #0e6073;
}

#headingResultsForm label:hover
{
	color: #0e6073;
}

#headingResultsForm label.headingCheckboxLabel
{
	background-color: #0e6073 !important;
	color: #fff;
}

.progress-bar
{
	background-color: #0e6073;
}

.PlatformIE8 .thumbSelection
{
	border: 5px solid #0e6073;
}

.thumbSelection
{
	-moz-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.55), 0 0 3px 5px #0e6073, 0 1px 5px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.55), 0 0 3px 5px #0e6073, 0 1px 5px rgba(0, 0, 0, 0.75);
	box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.55), 0 0 3px 5px #0e6073, 0 1px 5px rgba(0, 0, 0, 0.75);
}

/*----------- START NEWSPAPERS ----------- */

.ProductNews .tocContentsTable .supp
{
	color: #0e6073;
}

.ProductNews .tocContentsTable a:hover .supp
{
	color: #fff;
}

div.calendar div.active,
div.calendar div.hilite
{
    color: #000;
    border: 1px solid #0e6073;
    background: #0e6073;
}
div.calendar div.active:hover,
div.calendar div.hilite:hover
{
    color: #000;
    border: 1px solid #0e6073;
    background: #0e6073;
	opacity: 0.7;
}
div.calendar div.valid
{
	border: 1px solid #0e6073;
	background: #0e6073;
	opacity: 0.7;
}
div.calendar div.valid:hover
{
	border: 1px solid #0e6073;
	background: #0e6073;
	opacity: 1;
}

/*----------- END NEWSPAPERS ----------- */

/*----------- START TPOD ----------- */
/*
#TpodPubsTabPanel_Content .allPubsPanel .listview_link:hover,
#TpodPubsTabPanel_Content .allPubsPanel .listview_link:focus,
#TpodPubsTabPanel_Content .allPubsPanel .listview_link:active 
{
	background-color: #0e6073 !important;
}
.listview_link:hover
{
	background: #0e6073;
}
#TpodStudiesTabPanel_Content .studiesPanel .tpodLabelWrapper:hover span
{
	color: #0e6073 !important; 
}
#TpodPubsTabPanel_Content .allPubsPanel li.listview_nextlevel:hover
{
	background-color: #0e6073 !important;
	color: #fff;
}
#TpodPubsTabPanel_Content .allPubsPanel .listview_link:hover,
#TpodPubsTabPanel_Content .allPubsPanel .listview_link:focus,
#TpodPubsTabPanel_Content .allPubsPanel .listview_link:active
{
	background-color: #0e6073 !important;
}
#TpodPubsTabPanel_Content .favoritesPanel label span:hover
{
	color: #0e6073;
}

.TpodImageResourceSelected {
	border: 4px solid #0e6073 !important;
}

/*----------- END TPOD ----------- */

.bookshelfView_body {
	background-color:#f5f5f5;
}

/*----------- BOOKSHELF BACKGROUND COLOR BEHIND LEFT TABS  -----------*/
.BookshelfView_gridBody {
    background-color: #ffffff;
}

.BookshelfView_gridWrapper, .BookshelfView_listWrapper {
    border: 0px solid #ffffff;
    background-color: #ffffff;
}

/*-------- BOOKSHELF POPOVER ------- */

.NewBookCtlView_container .popover-title
{
	background-color: #0e6073;
	color: #fff;
}
.NewBookCtlView_container .popover.left > .arrow
{
	border-left-color: #fff;
}
.NewBookCtlView_container .popover.right > .arrow
{
	border-left-color: #fff;
}
.NewBookCtlView_container .popover.bottom > .arrow:after
{
	border-bottom-color: #0e6073;
}
.NewBookCtlView_container .bookCtlView_price
{
	color: #0e6073;
}

/*--------- BOOKSHELF GRID --------- */

.NewBookCtlView_cover_open_btn.btn.btn-primary {
	background-color: #0e6073;
}
.NewBookCtlView_title_container.selected {
	background-color: #0e6073;
}

.NewBookCtlView_multiCheck {
	color: #0e6073;
}

/*-------- BOOKSHELF FILTERS ------- */

#BookshelfFilterTabView_Content .searchFilterTitle,
#BookshelfCategories_DialogContent .searchFilterTitle
{
	background: #393939;
}
#BookshelfFilterTabView_Content .searchFilterElement.checked,
#BookshelfCategories_DialogContent .searchFilterElement.checked
{
	background-color: #393939;
	color: #fff;
}
#BookshelfFilterTabView_Content .accordion .toggler.filterExists {
    background-color: #393939;
    color: #fff;
}
#BookshelfFilterTabView_Content li.filterGroupStart
{
	border-color: #0e6073;
}
#BookshelfFilterTabView_Content .applyFiltersBtn,
#BookshelfFilterTabView_Content .clearFiltersBtn
{
	background-color: #0e6073;
}

/*-------- COMPOSER ------- */

.ProductModule .template-header
{
	background-color: #0e6073;	
}
.ProductModule .template-footer
{
	background-color: #2e2e2e;
}
.ProductModule .hotspot:hover div 
{
	outline: thick solid #2e2e2e;
}

/*----------- CUSTOM -----------*/

/* Page Dropshadow */
.PlatformDesktop #PageScrollWrapperDesktopScroll,
.PlatformTablet #PageScrollWrapperDesktopScroll {
    -webkit-box-shadow: 0 10px 10px -10px black;
    -moz-box-shadow: 0 10px 10px -10px black;
    box-shadow: 0 10px 10px -10px black;
}6lMA2f9l5L4H5jog3qwnYI0z8B5xkspBeg-NrPF42jiY02-ksvKKVYGjcM9V5G4O7jzqMa5uKYeang6Za78Vjt8EMzP-dkL-a6Nh9mvv4WP6FbRqZpVXBCkSmDOOKWCkgYjtKnU-O39VVH-nfbLTzeYNoNJeARcZ31k7M00KfBODNnprBX7hAwBLdjbd0mB5vG6LttAFkyfXreBFkpRd1jupOyWdiSsCaroKeUjRFZ9SvC595DOa7k2eyRR3VV7wrzGCDmvUgmaXwl-iTp1zkXTPRjLNyHK0USu47InqaWq0a34xWTHNTFu9daPMmFqpX6IvqWhaPSc2XDuyscbdmBu7y3DAYFadlghJcOqALjJd-UYO99F00mUiBYgl5OlZTcU3MPrsYAD1L64XkXUq8UTX4i11y97ZK4r9v65rqf6w_Zm-_E_KlhFO9MzIbZ7V_GLkPdmubqzNoJfxoDVQCkTAzGbVieAAfbHkcz1VsgBLFTW62sRZouA7W-99EIkmBa0eKLrIpQAQNA66gHvnZb4np5RfpRdmG3Rs2hQ-oy_NpOtcol79Q_E4NAu65WVnTtBJwvsTL6AjAsyyvGGgs_8g98TW1OJfTyZHudSvI2YO2Yp-eH27gs58f2vY9H9xaV04IsPgpV76n66LkJQTkbyvn3mO4I--J3ajOFLszATTNjnYE8-qV0-25QOsj6MRY0snJwJS-PsLiyvU",cRq: {ru: 'aHR0cHM6Ly9zZXJ2aWNlc2h1Yi5zYW1zY2x1Yi5jb20vZmF2aWNvbi5wbmc=',ra: 'TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgNi4xOyBXT1c2NDsgcnY6NDUuMCkgR2Vja28vMjAxMDAxMDEgRmlyZWZveC80NS4w',rm: 'R0VU',d: 'Erj9b67qG7XgHZcVl/58dmzSeIr9nEQbGylPhVnoMSr2nFpvPMsDJim4fvkJTKQGwNP32t7mfy3B/W1JfAh4ivjDfzKbl0dV14rQZJABFAe1Wy3TXXWWCaedDXnWgX2MWGGHJK14i42jPFJTYHKnx2boGbQ08WQyPS5D/tvljfCStHL8pYN2qxMV08BDaFpm8JROLDzT2W/+QauwRGjKtL9MJFnUkK+EkddAAO/dXhLP2beoZO7XGm89BhVTNbj7wlXdGzZAX4W3iLf5BmN5G09EjjdotB2NcDIOCRaftg6SqKfn8oC2gi+cjrSd1b1hbNaZy75UkGxF/crjmPgiNne+3NkUCzUJhSsA+UV0hXQw9tavJ7pOVzvo3VbdO6zufaZf+Nm2r5aU7cMPiKFh0znNqPzrjjBI8qGh199ir7J1berUYwVT1mBAH7vHkJqQutMRSqyc/kAs0V3aFp3huhWgGXd/hjbZ9skpL1i/46+mpjLhZ1XpdWBiwp8HdsiC/LH0fCqGDpjyW/KW6+yO/rOJI2gfKTihuVM7AIGf0SVV1m73Ppg/qsQm6/TleVh62duX/tWZiJ4vX1EuVqL1QA==',t: 'MTcwNjcxMzU1NC40ODMwMDA=',cT: Math.floor(Date.now() / 1000),m: 'X8+3SiSpSrqbSvnLZ/FkU3Ly1ZSFSm/3PuOgR7NZ52Y=',i1: 'j7E6Zc6kOpUlrejZFQx2Ig==',i2: '0eeZTaULxXCEjLT9yLJ0Lw==',zh: '1M+SiO8rD2292VsHz5B/5ATM5QJzrfT7n86bmtzBNqc=',uh: 'wuTXTOnLAeHZ1pu4MPfYN2m+aF4ZjFpylH5Ml5+UhCE=',hh: '3Qb14P0Jh0tlkdGObr9LDdNidLn9GrnAmajqQsT9xEY=',}};var cpo = document.createElement('script');cpo.src = '/cdn-cgi/challenge-platform/h/b/orchestrate/chl_page/v1?ray=84e2db0369e01946';window._cf_chl_opt.cOgUHash = location.hash === '' && location.href.indexOf('#') !== -1 ? '#' : location.hash;window._cf_chl_opt.cOgUQuery = location.search === '' && location.href.slice(0, location.href.length - window._cf_chl_opt.cOgUHash.length).indexOf('?') !== -1 ? '?' : location.search;if (window.history && window.history.replaceState) {var ogU = location.pathname + window._cf_chl_opt.cOgUQuery + window._cf_chl_opt.cOgUHash;history.replaceState(null, null, "\/favicon.png?__cf_chl_rt_tk=tO6NK36tUh8YO8WKKzPYwq_LEI0XB20k.4Ul2d1G16Y-1706713554-0-gaNycGzNC9A" + window._cf_chl_opt.cOgUHash);cpo.onload = function() {history.replaceState(null, null, ogU);}}document.getElementsByTagName('head')[0].appendChild(cpo);}());</script></body></html>