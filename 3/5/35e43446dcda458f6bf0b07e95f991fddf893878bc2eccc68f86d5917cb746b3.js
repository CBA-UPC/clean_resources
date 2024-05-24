/* column filtering */
html:not(.et-fb-root-ancestor) .df-area:not(.et_section_specialty):not(.df-rows):not(.df-post):not(.df-show) > .et_pb_row:not(.df-buttons) > .et_pb_column:not([class^='df-elementindex-']):not([class*=' df-elementindex-']) {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  height: 0 !important;
  box-shadow: none !important;
}

/* row filtering */
html:not(.et-fb-root-ancestor) .df-area.df-rows:not(.et_section_specialty):not(.df-post):not(.df-show) > .et_pb_row:not(.df-buttons):not([class^='df-elementindex-']):not([class*=' df-elementindex-'])  {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  height: 0 !important;
  box-shadow: none !important;
}

/* blog filtering */
html:not(.et-fb-root-ancestor) .df-area.df-post:not(.et_section_specialty):not(.df-rows):not(.df-show) > .et_pb_row:not(.df-buttons) article:not([class^='df-elementindex-']):not([class*=' df-elementindex-']) {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  height: 0 !important;
  box-shadow: none !important;
  border: none !important;
}

/* hide elements while loading */
/* column filtering */
html:not(.et-fb-root-ancestor) .df-area:not(.et_section_specialty):not(.df-rows):not(.df-loaded) > .et_pb_row > .et_pb_column {
  visibility: hidden;
}
/* row filtering */
html:not(.et-fb-root-ancestor) .df-area:not(.et_section_specialty).df-rows:not(.df-loaded) > .et_pb_row {
  visibility: hidden;
}
/* row filtering */
html:not(.et-fb-root-ancestor) .df-area.df-post:not(.et_section_specialty).df-rows:not(.df-loaded) > .et_pb_row {
  visibility: hidden;
}

/* change cursor for df-button */
.df-button {
  cursor: pointer;
}

/* fix hidden modules problem */
.df-area .et_animated, .df-area:not(.et_section_specialty) .et-waypoint:not(.et_pb_counters) {
  opacity: 1 !important;
}

/* show gallery items */
.df-area .et_pb_gallery_grid .et_pb_gallery_item, 
.df-area .et_pb_filterable_portfolio_grid .et_pb_portfolio_item {
  display: block !important;
}