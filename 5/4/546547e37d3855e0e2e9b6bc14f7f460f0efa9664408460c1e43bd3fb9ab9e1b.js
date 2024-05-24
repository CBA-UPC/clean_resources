/**
 * @file
 * Visual styles for menu.
 */

ul.menu {
  margin-left: 1em; /* LTR */
  padding: 0;
  list-style: none outside;
  text-align: left; /* LTR */
}
[dir="rtl"] ul.menu {
  margin-right: 1em;
  margin-left: 0;
  text-align: right;
}
.menu-item--expanded {
  list-style-type: circle;
  list-style-image: url(../../images/misc/menu-expanded.png);
}
.menu-item--collapsed {
  list-style-type: disc;
  list-style-image: url(../../images/misc/menu-collapsed.png); /* LTR */
}
[dir="rtl"] .menu-item--collapsed {
  list-style-image: url(../../images/misc/menu-collapsed-rtl.png);
}
.menu-item {
  margin: 0;
  padding-top: 0.2em;
}
ul.menu a.is-active {
  color: #000;
}