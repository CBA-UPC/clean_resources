#site-footer {
	position: relative;
}

.site-logo img {
	height: auto !important;
	max-width: 200px;
}

.primary-menu li.current-menu-item > a,
.primary-menu li.current-menu-item > .link-icon-wrapper > a {
	border-bottom: 2px solid currentColor;
	font-weight: 700;
	text-decoration: none;
}

.footer-nav-widgets-wrapper,
#site-footer {
	background: var(--c-black) !important;
	color: var(--c-white) !important;
}

.social-icons a,
#site-footer button:not(.toggle, #ot-sdk-btn),
#site-footer .button,
#site-footer .faux-button,
#site-footer .wp-block-button__link,
#site-footer .wp-block-file__button,
#site-footer input[type="button"],
#site-footer input[type="reset"],
#site-footer input[type="submit"] {
	background-color: var(--c-red) !important;
}

.social-icons a,
body:not(.overlay-header) .primary-menu ul,
.header-footer-group .button,
.header-footer-group .faux-button,
.header-footer-group .wp-block-button:not(.is-style-outline) .wp-block-button__link,
.header-footer-group .wp-block-file__button,
.header-footer-group input[type="reset"],
.header-footer-group input[type="submit"] {
	color: var(--c-white) !important;
}

body:not(.overlay-header) .primary-menu > li > a,
body:not(.overlay-header) .primary-menu > li > .icon,
.modal-menu a,
.footer-menu a,
#site-footer .wp-block-button.is-style-outline,
.wp-block-pullquote::before,
.singular:not(.overlay-header) .entry-header a,
.archive-header a,
.header-footer-group .color-accent,
.header-footer-group .color-accent-hover:hover {
	color: var(--c-red) !important;
}

.footer-widgets a,
.to-the-top {
	color: var(--c-white) !important;
}

.wp-custom-logo .header-titles {
	align-items: flex-end;
}

.footer-top-visible .footer-nav-widgets-wrapper {
	margin: 0;
}

.powered-by-wordpress {
	display: none;
}

.toggle-inner .toggle-text {
	display: none;
}

.pagination-single a {
	color: var(--c-red);
}
