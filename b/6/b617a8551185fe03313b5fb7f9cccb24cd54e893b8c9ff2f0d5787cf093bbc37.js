.widget .unslider li,
.unslider li {
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    clear: none !important;
	/* Prevent "[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive"
	 * error in Chrome mobile emulator.
	 */
	touch-action: none;
}

.unslider img {
    position: relative !important;
}

ul.unslider-wrap { 
    padding: 0 !important; 
}

.custom-slider>ul>li:not(:first-child) {
    display: none;
}

.custom-slider>ul {
    list-style: none;
}

/* https://www.smashingmagazine.com/2009/07/the-definitive-guide-to-using-negative-margins/ */
.custom-slider.unslider-fade ul li {
    position: relative;
    float: left;
    margin-right: -100% !important;
    width: 100%;
}

.unslider-horizontal {
    direction: ltr;
}
