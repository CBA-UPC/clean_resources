@charset "UTF-8";
html {
  color: #1a4066;
  background: #fff;
  overflow-y: scroll;
}
blockquote,
body,
button,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
legend,
li,
ol,
p,
pre,
select,
td,
textarea,
th,
time,
ul {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: 0 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  font-size: inherit;
  font: 100%;
}
fieldset,
img {
  border: 0;
}
address,
button,
caption,
cite,
code,
dfn,
em,
input,
optgroup,
option,
select,
strong,
textarea,
th,
var {
  font: inherit;
}
address,
caption,
cite,
code,
dfn,
th,
var {
  font-style: normal;
  font-weight: 400;
}
del,
ins {
  text-decoration: none;
}
li {
  list-style: none;
}
ol {
  list-style-position: inside;
}
blockquote:after,
bloqkquote:before,
q:after,
q:before {
  content: "";
}
blockquote,
q {
  quotes: none;
}
caption,
th {
  text-align: left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: 400;
}
q:after,
q:before {
  content: "";
}
abbr,
acronym {
  border: 0;
  font-variant: normal;
}
legend {
  color: #000;
}
label {
  cursor: pointer;
}
em {
  font-style: normal;
  font-weight: 700;
}
:focus {
  outline: 0;
}
body {
  position: relative;
  width: 100%;
  background-color: #fff;
  color: #1a4066;
  font-size: 80%;
  font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif;
  line-height: 2em;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
a {
  color: #1a4066;
  text-decoration: none;
}
div.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  color: #fff;
  z-index: 999;
  font-size: 14px;
  font-weight: 700;
}
div.modal em {
  font-style: italic;
}
div.modal div.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.7;
  -ms-filter: "alpha(opacity=70)";
  -moz-opacity: 0.7;
  -khtml-opacity: 0.7;
  zoom: 1;
}
div.modal div.dialogue,
div.modal div.spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #1a4066;
  overflow: hidden;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
}
@media (-webkit-min-device-pixel-ratio: 1.8) {
  div.modal div.dialogue,
  div.modal div.spinner {
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
  }
}
div.modal div.dialogue p,
div.modal div.spinner p {
  text-align: center;
}
div.modal div.dialogue p.spin,
div.modal div.spinner p.spin {
  width: 50px;
  height: 50px;
  margin: 37px auto 0 auto;
}
div.modal div.dialogue p.align-left,
div.modal div.spinner p.align-left {
  text-align: left;
}
div.modal div.dialogue p + p,
div.modal div.spinner p + p {
  margin-top: 15px;
}
div.modal div.dialogue p.spin-label,
div.modal div.spinner p.spin-label {
  margin-top: 6px;
}
div.modal div.dialogue p.label,
div.modal div.spinner p.label {
  width: 90%;
  margin-left: 5%;
  margin-top: 18px;
  line-height: 22px;
}
div.modal div.dialogue div.buttons,
div.modal div.spinner div.buttons {
  margin-top: 10px;
  text-align: center;
}
div.modal div.dialogue div.buttons .cancel,
div.modal div.dialogue div.buttons .ok,
div.modal div.spinner div.buttons .cancel,
div.modal div.spinner div.buttons .ok {
  display: inline-block;
  height: 39px;
  background-color: #fff;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  color: #1a4066;
  font-size: 18px;
  line-height: 40px;
  cursor: pointer;
}
@media (-webkit-min-device-pixel-ratio: 1.8) {
  div.modal div.dialogue div.buttons .cancel,
  div.modal div.dialogue div.buttons .ok,
  div.modal div.spinner div.buttons .cancel,
  div.modal div.spinner div.buttons .ok {
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
  }
}
div.modal div.dialogue div.buttons .cancel:hover,
div.modal div.dialogue div.buttons .ok:hover,
div.modal div.spinner div.buttons .cancel:hover,
div.modal div.spinner div.buttons .ok:hover {
  opacity: 0.7;
  -ms-filter: "alpha(opacity=70)";
  -moz-opacity: 0.7;
  -khtml-opacity: 0.7;
  zoom: 1;
}
div.modal div.dialogue div.buttons .ok,
div.modal div.spinner div.buttons .ok {
  width: 80px;
}
div.modal div.dialogue div.buttons .cancel,
div.modal div.spinner div.buttons .cancel {
  width: 110px;
}
div.modal div.dialogue div.buttons .darken,
div.modal div.spinner div.buttons .darken {
  background-color: #bec9d3;
}
div.modal div.dialogue div.buttons div + div,
div.modal div.spinner div.buttons div + div {
  margin-left: 5px;
}
div.modal div.dialogue {
  width: 280px;
  margin-left: -140px;
  padding-bottom: 20px;
}
div.modal div.spinner {
  width: 130px;
  height: 130px;
  margin-left: -65px;
}

/* PC */
@media screen and (min-width: 600px) {
  html {
    color: #1a4066;
    background: #fff;
    overflow-y: scroll;
  }
  blockquote,
  body,
  button,
  code,
  dd,
  div,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  pre,
  select,
  td,
  textarea,
  th,
  time,
  ul {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: 0 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: inherit;
    font: 100%;
  }
  fieldset,
  img {
    border: 0;
  }
  address,
  button,
  caption,
  cite,
  code,
  dfn,
  em,
  input,
  optgroup,
  option,
  select,
  strong,
  textarea,
  th,
  var {
    font: inherit;
  }
  address,
  caption,
  cite,
  code,
  dfn,
  th,
  var {
    font-style: normal;
    font-weight: 400;
  }
  del,
  ins {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  ol {
    list-style-position: inside;
  }
  blockquote:after,
  bloqkquote:before,
  q:after,
  q:before {
    content: "";
  }
  blockquote,
  q {
    quotes: none;
  }
  caption,
  th {
    text-align: left;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: 400;
  }
  q:after,
  q:before {
    content: "";
  }
  abbr,
  acronym {
    border: 0;
    font-variant: normal;
  }
  legend {
    color: #000;
  }
  label {
    cursor: pointer;
  }
  em {
    font-style: normal;
    font-weight: 700;
  }
  :focus {
    outline: 0;
  }
  body {
    position: relative;
    width: 100%;
    background-color: #fff;
    color: #1a4066;
    font-size: 80%;
    font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif;
    line-height: 2em;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  a {
    color: #1a4066;
    text-decoration: none;
  }
  div.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    color: #fff;
    z-index: 999;
    font-size: 14px;
    font-weight: 700;
  }
  div.modal em {
    font-style: italic;
  }
  div.modal div.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.7;
    -ms-filter: "alpha(opacity=70)";
    -moz-opacity: 0.7;
    -khtml-opacity: 0.7;
    zoom: 1;
  }
  div.modal div.dialogue,
  div.modal div.spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: #1a4066;
    overflow: hidden;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
  }
}

@media screen and (min-width: 600px) and (-webkit-min-device-pixel-ratio: 1.8) {
  div.modal div.dialogue,
  div.modal div.spinner {
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
  }
}
@media screen and (min-width: 600px) {
  div.modal div.dialogue p,
  div.modal div.spinner p {
    text-align: center;
  }
  div.modal div.dialogue p.spin,
  div.modal div.spinner p.spin {
    width: 50px;
    height: 50px;
    margin: 37px auto 0 auto;
  }
  div.modal div.dialogue p.align-left,
  div.modal div.spinner p.align-left {
    text-align: left;
  }
  div.modal div.dialogue p + p,
  div.modal div.spinner p + p {
    margin-top: 15px;
  }
  div.modal div.dialogue p.spin-label,
  div.modal div.spinner p.spin-label {
    margin-top: 6px;
  }
  div.modal div.dialogue p.label,
  div.modal div.spinner p.label {
    width: 90%;
    margin-left: 5%;
    margin-top: 18px;
    line-height: 22px;
  }
  div.modal div.dialogue div.buttons,
  div.modal div.spinner div.buttons {
    margin-top: 10px;
    text-align: center;
  }
  div.modal div.dialogue div.buttons .cancel,
  div.modal div.dialogue div.buttons .ok,
  div.modal div.spinner div.buttons .cancel,
  div.modal div.spinner div.buttons .ok {
    display: inline-block;
    height: 39px;
    background-color: #fff;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    color: #1a4066;
    font-size: 18px;
    line-height: 40px;
    cursor: pointer;
  }
}
@media screen and (min-width: 600px) and (-webkit-min-device-pixel-ratio: 1.8) {
  div.modal div.dialogue div.buttons .cancel,
  div.modal div.dialogue div.buttons .ok,
  div.modal div.spinner div.buttons .cancel,
  div.modal div.spinner div.buttons .ok {
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
  }
}
@media screen and (min-width: 600px) {
  div.modal div.dialogue div.buttons .cancel:hover,
  div.modal div.dialogue div.buttons .ok:hover,
  div.modal div.spinner div.buttons .cancel:hover,
  div.modal div.spinner div.buttons .ok:hover {
    opacity: 0.7;
    -ms-filter: "alpha(opacity=70)";
    -moz-opacity: 0.7;
    -khtml-opacity: 0.7;
    zoom: 1;
  }
  div.modal div.dialogue div.buttons .ok,
  div.modal div.spinner div.buttons .ok {
    width: 80px;
  }
  div.modal div.dialogue div.buttons .cancel,
  div.modal div.spinner div.buttons .cancel {
    width: 110px;
  }
  div.modal div.dialogue div.buttons .darken,
  div.modal div.spinner div.buttons .darken {
    background-color: #bec9d3;
  }
  div.modal div.dialogue div.buttons div + div,
  div.modal div.spinner div.buttons div + div {
    margin-left: 5px;
  }
  div.modal div.dialogue {
    width: 280px;
    margin-left: -140px;
    padding-bottom: 20px;
  }
  div.modal div.spinner {
    width: 130px;
    height: 130px;
    margin-left: -65px;
  }
  ul#table {
    position: relative;
    width: 424px;
    height: 424px;
    padding-bottom: 3px;
    border-top: 1px solid #1a4066;
    border-left: 1px solid #1a4066;
    background-color: #1a4066;
    z-index: 0;
    zoom: 1;
  }
  ul#table:after {
    display: block;
    clear: both;
    content: "";
  }
  ul#table li {
    display: block;
    position: relative;
    width: 46px;
    height: 46px;
    float: left;
    border: 1px solid #1a4066;
    background-color: #fff;
    z-index: 0;
  }
  ul#table li span.print {
    display: none;
  }
  ul#table li.sprc {
    margin-left: 2px;
  }
  ul#table li.sprr {
    margin-top: 2px;
  }
  ul#table li.n1 {
    background-image: url(../images/pc/main_num_a_01.png);
  }
  ul#table li.n2 {
    background-image: url(../images/pc/main_num_a_02.png);
  }
  ul#table li.n3 {
    background-image: url(../images/pc/main_num_a_03.png);
  }
  ul#table li.n4 {
    background-image: url(../images/pc/main_num_a_04.png);
  }
  ul#table li.n5 {
    background-image: url(../images/pc/main_num_a_05.png);
  }
  ul#table li.n6 {
    background-image: url(../images/pc/main_num_a_06.png);
  }
  ul#table li.n7 {
    background-image: url(../images/pc/main_num_a_07.png);
  }
  ul#table li.n8 {
    background-image: url(../images/pc/main_num_a_08.png);
  }
  ul#table li.n9 {
    background-image: url(../images/pc/main_num_a_09.png);
  }
  ul#table li.edit {
    cursor: pointer;
  }
  ul#table li.edit:hover {
    background-color: #f9a;
  }
  ul#table li.grouped {
    background-color: #ebebeb;
  }
  ul#table li.fixed {
    background-position: -50px 0;
  }
  ul#table li.matched {
    background-position: -100px 0;
    background-color: #5c7a99;
  }
  ul#table li.selected {
    background-position: -100px 0;
    background-color: #1a4066;
    z-index: 20;
  }
  ul#table li.selected:hover {
    background-color: #ff4d6a;
  }
  ul#table li.wronged {
    background-position: -150px 0;
  }
  ul#table li.expand {
    position: absolute;
    width: 54px;
    height: 54px;
    margin: 0;
    padding: 0;
    border: none;
    background-color: #1a4066;
    z-index: 10 !important;
  }
  ul#table li div.memo {
    position: relative;
    margin-left: 1px;
    margin-top: 1px;
  }
  ul#table li div.memo div {
    position: absolute;
    width: 14px;
    height: 0;
    padding-top: 14px;
    overflow: hidden;
    background: url(../images/pc/main_memo_a_01.png) no-repeat;
  }
  ul#table li div.memo div.m2 {
    left: 14px;
    background-image: url(../images/pc/main_memo_a_02.png);
  }
  ul#table li div.memo div.m3 {
    left: 28px;
    background-image: url(../images/pc/main_memo_a_03.png);
  }
  ul#table li div.memo div.m4 {
    top: 14px;
    background-image: url(../images/pc/main_memo_a_04.png);
  }
  ul#table li div.memo div.m5 {
    left: 14px;
    top: 14px;
    background-image: url(../images/pc/main_memo_a_05.png);
  }
  ul#table li div.memo div.m6 {
    left: 28px;
    top: 14px;
    background-image: url(../images/pc/main_memo_a_06.png);
  }
  ul#table li div.memo div.m7 {
    top: 28px;
    background-image: url(../images/pc/main_memo_a_07.png);
  }
  ul#table li div.memo div.m8 {
    left: 14px;
    top: 28px;
    background-image: url(../images/pc/main_memo_a_08.png);
  }
  ul#table li div.memo div.m9 {
    left: 28px;
    top: 28px;
    background-image: url(../images/pc/main_memo_a_09.png);
  }
  ul#table li.selected .memo div {
    background-position: -20px 0;
  }
  #header {
    width: 100%;
    background-color: #fff;
    border-bottom: 3px solid #cc5454;
  }
  #header .wrapper {
    width: 724px;
    margin: 0 auto;
    padding: 25px 0 13px 0;
    zoom: 1;
  }
  #header .wrapper:after {
    display: block;
    clear: both;
    content: "";
  }
  #header .wrapper h1 {
    float: left;
  }
  #header .wrapper h1 a {
    display: block;
    width: 211px;
    background: url(../images/pc/head_ttl_02.png) no-repeat;
    height: 0;
    padding-top: 37px;
    overflow: hidden;
  }
  #header .wrapper a.back {
    display: block;
    width: 152px;
    float: right;
    background: url(../images/pc/head_btn_01.png) no-repeat 0 0;
    height: 0;
    padding-top: 42px;
    overflow: hidden;
  }
  #header .wrapper a.back:hover {
    background-position: 0 -50px;
  }
  #game {
    width: 100%;
    padding: 33px 0 60px 0;
    border-bottom: 1px solid #1a4066;
    -webkit-tap-highlight-color: transparent;
  }
  #game a {
    cursor: pointer;
  }
  #game .wrapper {
    width: 724px;
    margin: 0 auto;
  }
  #game .wrapper p.print {
    display: none;
  }
  #game .wrapper h2 {
    width: 350px;
    margin-left: 189px;
    background: url(../images/pc/head_ttl_01.png) no-repeat;
    height: 0;
    padding-top: 62px;
    overflow: hidden;
  }
  #game .wrapper .hgroup {
    width: 173px;
    margin: 13px auto 0 auto;
    zoom: 1;
  }
  #game .wrapper .hgroup:after {
    display: block;
    clear: both;
    content: "";
  }
  #game .wrapper .hgroup h3 {
    width: 82px;
    margin-top: 1px;
    float: left;
    zoom: 1;
  }
  #game .wrapper .hgroup h3:after {
    display: block;
    clear: both;
    content: "";
  }
  #game .wrapper .hgroup h3 span {
    display: block;
    width: 9px;
    height: 12px;
    background: url(../images/pc/head_num_01.png) no-repeat 0 0;
    float: left;
    height: 0;
    padding-top: 12px;
    overflow: hidden;
  }
  #game .wrapper .hgroup h4 {
    width: 81px;
    margin-left: 10px;
    float: left;
    height: 0;
    padding-top: 14px;
    overflow: hidden;
    background: url(../images/pc/head_num_02.png) no-repeat 0 0;
  }
  #game .wrapper .hgroup h4.n1 {
    background-position: 0 0;
  }
  #game .wrapper .hgroup h4.n2 {
    background-position: 0 -20px;
  }
  #game .wrapper .hgroup h4.n3 {
    background-position: 0 -40px;
  }
  #game .wrapper .hgroup h4.n4 {
    background-position: 0 -60px;
  }
  #game .wrapper .hgroup h4.n5 {
    background-position: 0 -80px;
  }
  #game .wrapper .hgroup h4.n0 {
    background-position: 0 -100px;
  }
  #game .wrapper #main-menu {
    height: 54px;
    margin-top: 35px;
    background: url(../images/pc/menu_head_01_00.png) no-repeat;
    padding-left: 64px;
  }
  #game .wrapper #main-menu a.toggle {
    display: none;
  }
  #game .wrapper #main-menu ul {
    zoom: 1;
  }
  #game .wrapper #main-menu ul:after {
    display: block;
    clear: both;
    content: "";
  }
  #game .wrapper #main-menu ul li {
    float: left;
    margin-left: 2px;
  }
  #game .wrapper #main-menu ul li a {
    display: block;
    height: 54px;
    background: url(../images/pc/menu_head_01_01.png) no-repeat 0 0;
  }
  #game .wrapper #main-menu ul li a:hover {
    background-position: 0 -70px;
  }
  #game .wrapper #main-menu ul li a#newgame {
    width: 147px;
  }
  #game .wrapper #main-menu ul li a#giveup {
    width: 133px;
    background-image: url(../images/pc/menu_head_01_02.png);
  }
  #game .wrapper #main-menu ul li a#continue {
    width: 136px;
    background-image: url(../images/pc/menu_head_01_03.png);
  }
  #game .wrapper #main-menu ul li a#help {
    width: 110px;
    background-image: url(../images/pc/menu_head_01_04.png);
  }
  #game .wrapper #main-menu ul li a#print {
    width: 124px;
    background-image: url(../images/pc/menu_head_01_05.png);
  }
  #game .wrapper #main-board {
    height: 424px;
    margin-top: 50px;
    zoom: 1;
    opacity: 0;
    -ms-filter: "alpha(opacity=0)";
    -moz-opacity: 0;
    -khtml-opacity: 0;
    zoom: 1;
  }
  #game .wrapper #main-board:after {
    display: block;
    clear: both;
    content: "";
  }
  #game .wrapper #main-board ul#table {
    margin-left: 47px;
    float: left;
    -webkit-box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.05);
  }
  #game .wrapper #main-board #side-menu {
    position: relative;
    width: 169px;
    height: 424px;
    margin-right: 48px;
    float: right;
    background-color: #f2f2f2;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
  }
}
@media screen and (min-width: 600px) and (-webkit-min-device-pixel-ratio: 1.8) {
  #game .wrapper #main-board #side-menu {
    border-radius: 2.5px;
    -webkit-border-radius: 2.5px;
    -moz-border-radius: 2.5px;
  }
}
@media screen and (min-width: 600px) {
  #game .wrapper #main-board #side-menu h4 {
    display: block;
    background: url(../images/pc/side_ttl_01.png) no-repeat;
    height: 0;
    padding-top: 35px;
    overflow: hidden;
  }
  #game .wrapper #main-board #side-menu a.disabled {
    opacity: 0.15;
    -ms-filter: "alpha(opacity=15)";
    -moz-opacity: 0.15;
    -khtml-opacity: 0.15;
    zoom: 1;
    cursor: default;
  }
  #game .wrapper #main-board #side-menu #nums {
    position: relative;
    width: 129px;
    height: 165px;
    margin-top: 20px;
    margin-left: 20px;
    padding-top: 4px;
    padding-left: 4px;
    background: url(../images/pc/side_num_bg_01.png) no-repeat;
    zoom: 1;
  }
  #game .wrapper #main-board #side-menu #nums:after {
    display: block;
    clear: both;
    content: "";
  }
  #game .wrapper #main-board #side-menu #nums div {
    width: 39px;
    height: 39px;
    margin-top: 1px;
    margin-left: 1px;
    float: left;
    background: url(../images/pc/side_num_01.png) no-repeat;
    cursor: pointer;
  }
  #game .wrapper #main-board #side-menu #nums div.switch {
    position: absolute;
    top: 130px;
    left: 0px;
    width: 40px;
    height: 34px;
    background-color: none;
    background-image: none;
  }
  #game .wrapper #main-board #side-menu #nums div.switch button {
    background-color: green;
    border: none;
    outline: none;
    appearance: none;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 2.5px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
  #game .wrapper #main-board #side-menu #nums div.n0 {
    position: absolute;
    top: 136px;
    right: 5px;
    width: 78px;
    height: 24px;
    margin-top: 0;
    margin-left: 0;
    background-image: url(../images/pc/side_num_x.png);
    background-position: -20px 0 !important;
    float: none;
  }
  #game .wrapper #main-board #side-menu #nums div.n0.disabled {
    background-position: -20px 0 !important;
  }
  #game .wrapper #main-board #side-menu #nums div.n0.hovered {
    background-position: -140px 0 !important;
  }
  #game .wrapper #main-board #side-menu #nums div.n2 {
    background-image: url(../images/pc/side_num_02.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n3 {
    background-image: url(../images/pc/side_num_03.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n4 {
    background-image: url(../images/pc/side_num_04.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n5 {
    background-image: url(../images/pc/side_num_05.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n6 {
    background-image: url(../images/pc/side_num_06.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n7 {
    background-image: url(../images/pc/side_num_07.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n8 {
    background-image: url(../images/pc/side_num_08.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n9 {
    background-image: url(../images/pc/side_num_09.png);
  }
  #game .wrapper #main-board #side-menu #nums div.disabled {
    cursor: default;
    opacity: 0.2;
    -ms-filter: "alpha(opacity=20)";
    -moz-opacity: 0.2;
    -khtml-opacity: 0.2;
    zoom: 1;
  }
  #game .wrapper #main-board #side-menu #nums div.selected {
    background-color: #5c7a99;
  }
  #game .wrapper #main-board #side-menu #nums div.hovered {
    background-position: -120px 0;
    background-color: #fff;
  }
  #game .wrapper #main-board #side-menu #side-menu-misc a#check,
  #game .wrapper #main-board #side-menu #side-menu-misc a#memo,
  #game .wrapper #main-board #side-menu #side-menu-misc a#save {
    display: block;
    width: 129px;
    height: 42px;
    margin-top: 10px;
    margin-left: 20px;
    background: url(../images/pc/side_memo.png) no-repeat 0 0;
  }
  #game .wrapper #main-board #side-menu #side-menu-misc a#save {
    background-image: url(../images/pc/side_save.png);
  }
  #game .wrapper #main-board #side-menu #side-menu-misc a#check {
    background-image: url(../images/pc/side_check.png);
  }
  #game .wrapper #main-board #side-menu #side-menu-misc a.selected {
    background-position: 0 -50px !important;
  }
  #game .wrapper a.back {
    display: none;
  }
  #game-footer {
    width: 100%;
    padding: 10px 0 35px 0;
  }
  #game-footer .wrapper {
    width: 724px;
    margin: 0 auto;
    zoom: 1;
  }
  #game-footer .wrapper:after {
    display: block;
    clear: both;
    content: "";
  }
  #game-footer .wrapper .lft {
    font-weight: 700;
    float: left;
  }
  #game-footer .wrapper .rgt {
    float: right;
  }
}

/* SP */
@media screen and (max-width: 599px) {
  html {
    color: #1a4066;
    background: #fff;
    overflow-y: scroll;
  }
  blockquote,
  body,
  button,
  code,
  dd,
  div,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  pre,
  select,
  td,
  textarea,
  th,
  time,
  ul {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: 0 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: inherit;
    font: 100%;
  }
  fieldset,
  img {
    border: 0;
  }
  address,
  button,
  caption,
  cite,
  code,
  dfn,
  em,
  input,
  optgroup,
  option,
  select,
  strong,
  textarea,
  th,
  var {
    font: inherit;
  }
  address,
  caption,
  cite,
  code,
  dfn,
  th,
  var {
    font-style: normal;
    font-weight: 400;
  }
  del,
  ins {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  ol {
    list-style-position: inside;
  }
  blockquote:after,
  bloqkquote:before,
  q:after,
  q:before {
    content: "";
  }
  blockquote,
  q {
    quotes: none;
  }
  caption,
  th {
    text-align: left;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: 400;
  }
  q:after,
  q:before {
    content: "";
  }
  abbr,
  acronym {
    border: 0;
    font-variant: normal;
  }
  legend {
    color: #000;
  }
  label {
    cursor: pointer;
  }
  em {
    font-style: normal;
    font-weight: 700;
  }
  :focus {
    outline: 0;
  }
  body {
    position: relative;
    width: 100%;
    background-color: #fff;
    color: #1a4066;
    font-size: 80%;
    font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif;
    line-height: 2em;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  a {
    color: #1a4066;
    text-decoration: none;
  }
  div.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    color: #fff;
    z-index: 999;
    font-size: 14px;
    font-weight: 700;
  }
  div.modal em {
    font-style: italic;
  }
  div.modal div.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.7;
    -ms-filter: "alpha(opacity=70)";
    -moz-opacity: 0.7;
    -khtml-opacity: 0.7;
    zoom: 1;
  }
  div.modal div.dialogue,
  div.modal div.spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: #1a4066;
    overflow: hidden;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
  }
}

@media screen and (max-width: 599px) and (-webkit-min-device-pixel-ratio: 1.8) {
  div.modal div.dialogue,
  div.modal div.spinner {
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
  }
}
@media screen and (max-width: 599px) {
  div.modal div.dialogue p,
  div.modal div.spinner p {
    text-align: center;
  }
  div.modal div.dialogue p.spin,
  div.modal div.spinner p.spin {
    width: 50px;
    height: 50px;
    margin: 37px auto 0 auto;
  }
  div.modal div.dialogue p.align-left,
  div.modal div.spinner p.align-left {
    text-align: left;
  }
  div.modal div.dialogue p + p,
  div.modal div.spinner p + p {
    margin-top: 15px;
  }
  div.modal div.dialogue p.spin-label,
  div.modal div.spinner p.spin-label {
    margin-top: 6px;
  }
  div.modal div.dialogue p.label,
  div.modal div.spinner p.label {
    width: 90%;
    margin-left: 5%;
    margin-top: 18px;
    line-height: 22px;
  }
  div.modal div.dialogue div.buttons,
  div.modal div.spinner div.buttons {
    margin-top: 10px;
    text-align: center;
  }
  div.modal div.dialogue div.buttons .cancel,
  div.modal div.dialogue div.buttons .ok,
  div.modal div.spinner div.buttons .cancel,
  div.modal div.spinner div.buttons .ok {
    display: inline-block;
    height: 39px;
    background-color: #fff;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    color: #1a4066;
    font-size: 18px;
    line-height: 40px;
    cursor: pointer;
  }
}
@media screen and (max-width: 599px) and (-webkit-min-device-pixel-ratio: 1.8) {
  div.modal div.dialogue div.buttons .cancel,
  div.modal div.dialogue div.buttons .ok,
  div.modal div.spinner div.buttons .cancel,
  div.modal div.spinner div.buttons .ok {
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
  }
}
@media screen and (max-width: 599px) {
  div.modal div.dialogue div.buttons .cancel:hover,
  div.modal div.dialogue div.buttons .ok:hover,
  div.modal div.spinner div.buttons .cancel:hover,
  div.modal div.spinner div.buttons .ok:hover {
    opacity: 0.7;
    -ms-filter: "alpha(opacity=70)";
    -moz-opacity: 0.7;
    -khtml-opacity: 0.7;
    zoom: 1;
  }
  div.modal div.dialogue div.buttons .ok,
  div.modal div.spinner div.buttons .ok {
    width: 80px;
  }
  div.modal div.dialogue div.buttons .cancel,
  div.modal div.spinner div.buttons .cancel {
    width: 110px;
  }
  div.modal div.dialogue div.buttons .darken,
  div.modal div.spinner div.buttons .darken {
    background-color: #bec9d3;
  }
  div.modal div.dialogue div.buttons div + div,
  div.modal div.spinner div.buttons div + div {
    margin-left: 5px;
  }
  div.modal div.dialogue {
    width: 280px;
    margin-left: -140px;
    padding-bottom: 20px;
  }
  div.modal div.spinner {
    width: 130px;
    height: 130px;
    margin-left: -65px;
  }
  ul#table {
    position: relative;
    width: 302px;
    padding-bottom: 2px;
    margin-top: 36px !important;
    background-color: #1a4066;
    zoom: 1;
  }
  ul#table:after {
    display: block;
    clear: both;
    content: "";
  }
  ul#table li {
    display: block;
    width: 33px;
    height: 33px;
    float: left;
    border-top: 1px solid #1a4066;
    border-left: 1px solid #1a4066;
    background-color: #fff;
    z-index: 0;
    background-size: 137px 100%;
  }
  ul#table li:active {
    background-color: #f9a;
  }
  ul#table li span.print {
    display: none;
  }
  ul#table li.sprc {
    margin-left: 1px;
  }
  ul#table li.sprr {
    margin-top: 1px;
  }
  ul#table li.n1 {
    background-image: url(../images/sp/main_num_a_01.png);
  }
  ul#table li.n2 {
    background-image: url(../images/sp/main_num_a_02.png);
  }
  ul#table li.n3 {
    background-image: url(../images/sp/main_num_a_03.png);
  }
  ul#table li.n4 {
    background-image: url(../images/sp/main_num_a_04.png);
  }
  ul#table li.n5 {
    background-image: url(../images/sp/main_num_a_05.png);
  }
  ul#table li.expand {
    position: absolute;
    width: 54px;
    height: 54px;
    margin: 0;
    padding: 0;
    border: none;
    background-color: #1a4066;
    z-index: 10 !important;
  }
  ul#table li.n6 {
    background-image: url(../images/sp/main_num_a_06.png);
  }
  ul#table li.n7 {
    background-image: url(../images/sp/main_num_a_07.png);
  }
  ul#table li.n8 {
    background-image: url(../images/sp/main_num_a_08.png);
  }
  ul#table li.n9 {
    background-image: url(../images/sp/main_num_a_09.png);
  }
  ul#table li.grouped {
    background-color: #ebebeb;
  }
  ul#table li.fixed {
    background-position: -35px 0;
  }
  ul#table li.matched {
    background-position: -70px 0;
    background-color: #5c7a99;
  }
  ul#table li.selected {
    background-position: -70px 0;
    background-color: #1a4066;
    z-index: 20;
  }
  ul#table li.wronged {
    background-position: -105px 0;
  }
  ul#table li.expand {
    position: absolute;
    width: 38px;
    height: 38px;
    margin: 0;
    padding: 0;
    border: none;
    background-color: #1a4066;
    z-index: 10 !important;
  }
  ul#table li div.memo {
    position: relative;
    margin-left: 1px;
    margin-top: 1px;
  }
  ul#table li div.memo div {
    position: absolute;
    top: 0;
    width: 10px;
    height: 0;
    padding-top: 10px;
    overflow: hidden;
    background: url(../images/sp/main_memo_a_01.png) no-repeat 0 0;
    background-size: 20px 10px;
  }
  ul#table li div.memo div.m2 {
    left: 10px;
    background-image: url(../images/sp/main_memo_a_02.png);
  }
  ul#table li div.memo div.m3 {
    left: 20px;
    background-image: url(../images/sp/main_memo_a_03.png);
  }
  ul#table li div.memo div.m4 {
    top: 10px;
    background-image: url(../images/sp/main_memo_a_04.png);
  }
  ul#table li div.memo div.m5 {
    left: 10px;
    top: 10px;
    background-image: url(../images/sp/main_memo_a_05.png);
  }
  ul#table li div.memo div.m6 {
    left: 20px;
    top: 10px;
    background-image: url(../images/sp/main_memo_a_06.png);
  }
  ul#table li div.memo div.m7 {
    top: 20px;
    background-image: url(../images/sp/main_memo_a_07.png);
  }
  ul#table li div.memo div.m8 {
    left: 10px;
    top: 20px;
    background-image: url(../images/sp/main_memo_a_08.png);
  }
  ul#table li div.memo div.m9 {
    left: 20px;
    top: 20px;
    background-image: url(../images/sp/main_memo_a_09.png);
  }
  ul#table li.selected .memo div {
    background-position: -10px 0;
  }
  #header {
    width: 100%;
    background-color: #fff;
    border-bottom: 2px solid #cc5454;
  }
  #header .wrapper {
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 7px 10px 5px 7px;
    zoom: 1;
  }
  #header .wrapper:after {
    display: block;
    clear: both;
    content: "";
  }
  #header .wrapper h1 {
    margin-top: 3px;
    float: right;
  }
  #header .wrapper h1 a {
    display: block;
    width: 136px;
    background: url(../images/sp/head_ttl_02.png) no-repeat;
    background-size: 100%;
    height: 0;
    padding-top: 24px;
    overflow: hidden;
  }
  #header .wrapper p.print {
    display: none;
  }
  #header .wrapper a.back {
    display: block;
    width: 78px;
    float: left;
    background: url(../images/sp/head_btn_01.png) no-repeat 0 0;
    background-size: 100%;
    height: 0;
    padding-top: 32px;
    overflow: hidden;
  }
  #header .wrapper a.back:active {
    background-position: 0 -35px;
  }
  #game {
    width: 100%;
    padding: 24px 0 0 0;
    border-bottom: 1px solid #1a4066;
    -webkit-tap-highlight-color: transparent;
  }
  #game a {
    cursor: pointer;
  }
  #game .wrapper {
    width: 310px;
    margin: 0 auto;
  }
  #game .wrapper p.print {
    display: none;
  }
  #game .wrapper h2 {
    width: 175px;
    margin-left: 67px;
    background: url(../images/pc/head_ttl_01.png) no-repeat;
    background-size: 100%;
    height: 0;
    padding-top: 31px;
    overflow: hidden;
  }
  #game .wrapper .hgroup {
    width: 164px;
    margin: 8px auto 0 auto;
    zoom: 1;
  }
  #game .wrapper .hgroup:after {
    display: block;
    clear: both;
    content: "";
  }
  #game .wrapper .hgroup h3 {
    width: 82px;
    margin-top: 1px;
    float: left;
    zoom: 1;
  }
  #game .wrapper .hgroup h3:after {
    display: block;
    clear: both;
    content: "";
  }
  #game .wrapper .hgroup h3 span {
    display: block;
    width: 9px;
    height: 12px;
    background: url(../images/sp/head_num_01.png) no-repeat 0 0;
    background-size: 9px 162px;
    float: left;
    height: 0;
    padding-top: 12px;
    overflow: hidden;
  }
  #game .wrapper .hgroup h4 {
    width: 74px;
    margin-left: 8px;
    float: left;
    background: url(../images/sp/head_num_02.png) no-repeat 0 0;
    background-size: 74px 88px;
    height: 0;
    padding-top: 14px;
    overflow: hidden;
  }
  #game .wrapper .hgroup h4.n1 {
    background-position: 0 0;
  }
  #game .wrapper .hgroup h4.n2 {
    background-position: 0 -15px;
  }
  #game .wrapper .hgroup h4.n3 {
    background-position: 0 -30px;
  }
  #game .wrapper .hgroup h4.n4 {
    background-position: 0 -45px;
  }
  #game .wrapper .hgroup h4.n5 {
    background-position: 0 -60px;
  }
  #game .wrapper .hgroup h4.n0 {
    background-position: 0 -75px;
  }
  #game .wrapper #main-menu {
    position: relative;
    height: 35px;
    margin-top: 16px;
    margin-left: 102px;
    z-index: 10;
  }
  #game .wrapper #main-menu a {
    -webkit-tap-highlight-color: rgba(26, 64, 102, 0.5);
  }
  #game .wrapper #main-menu a:active {
    background-color: rgba(26, 64, 102, 0.5);
  }
  #game .wrapper #main-menu a.off,
  #game .wrapper #main-menu a.on {
    display: block;
    position: absolute;
    width: 105px;
    height: 35px;
    background: url(../images/sp/menu_head_01_00.png) no-repeat;
    background-size: 100%;
    z-index: 0;
  }
  #game .wrapper #main-menu #main-menu-on {
    display: none;
    position: absolute;
    z-index: 10;
  }
  #game .wrapper #main-menu #main-menu-on a.off {
    position: relative;
    background-image: url(../images/sp/menu_head_01_00_a.png);
  }
  #game .wrapper #main-menu ul {
    margin-top: -2px;
  }
  #game .wrapper #main-menu ul li a {
    display: block;
    width: 146px;
    background: url(../images/sp/menu_head_01_01.png) no-repeat 0 0;
    background-size: 100%;
  }
  #game .wrapper #main-menu ul li a#newgame {
    height: 45px;
  }
  #game .wrapper #main-menu ul li a#giveup {
    height: 43px;
    background-image: url(../images/sp/menu_head_01_02.png);
  }
  #game .wrapper #main-menu ul li a#continue {
    height: 43px;
    background-image: url(../images/sp/menu_head_01_03.png);
  }
  #game .wrapper #main-menu ul li a#help {
    height: 44px;
    background-image: url(../images/sp/menu_head_01_04.png);
  }
  #game .wrapper #main-menu ul li a#print {
    display: none;
  }
  #game .wrapper #main-board {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  #game .wrapper #main-board ul#table {
    margin-left: 4px;
    margin-top: 10px;
    -webkit-box-shadow: 2px 4px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 2px 4px 0 rgba(0, 0, 0, 0.05);
  }
  #game .wrapper #main-board #side-menu {
    position: relative;
    width: 310px;
    height: 82px;
  }
  #game .wrapper #main-board #side-menu h4 {
    display: none;
  }
  #game .wrapper #main-board #side-menu a.disabled {
    opacity: 0.15;
    -ms-filter: "alpha(opacity=15)";
    -moz-opacity: 0.15;
    -khtml-opacity: 0.15;
    zoom: 1;
    cursor: default;
  }
  #game .wrapper #main-board #side-menu #nums {
    position: absolute;
    top: 47px;
    width: 308px;
    height: 33px;
    padding-top: 2px;
    padding-left: 2px;
    background: url(../images/sp/side_num_bg_01.png) no-repeat;
    background-size: 100%;
    zoom: 1;
  }
  #game .wrapper #main-board #side-menu #nums:after {
    display: block;
    clear: both;
    content: "";
  }
  #game .wrapper #main-board #side-menu #nums div {
    width: 33px;
    height: 31px;
    float: left;
    background: url(../images/sp/side_num_01.png) no-repeat;
    background-size: 68px 31px;
    background-position: 1px 0;
    margin-left: 1px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(26, 64, 102, 0.5);
  }
  #game .wrapper #main-board #side-menu #nums div:active {
    background-color: rgba(26, 64, 102, 0.5);
  }
  #game .wrapper #main-board #side-menu #nums div.switch {
    position: absolute;
    top: 38px;
    right: 0;
    width: 90px;
    height: 24px;
    background-color: none;
    background-image: none;
  }
  #game .wrapper #main-board #side-menu #nums div.switch button {
    background-color: green;
    border: none;
    outline: none;
    appearance: none;
    width: 100%;
    height: 100%;
    border-radius: 2.5px;
    color: #fff;
    font-size: 11px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
  #game .wrapper #main-board #side-menu #nums div.switch button::before {
    content: "ヒント ";
  }
  #game .wrapper #main-board #side-menu #nums div.n0 {
    position: absolute;
    top: -47px;
    left: 0;
    width: 37px;
    height: 37px;
    float: none;
    background-image: url(../images/sp/side_num_x.png);
    background-position: 0 0;
    background-size: 100%;
  }
  #game .wrapper #main-board #side-menu #nums div.n1 {
    background-position: 0 0;
    margin-left: 0;
  }
  #game .wrapper #main-board #side-menu #nums div.n2 {
    background-image: url(../images/sp/side_num_02.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n3 {
    background-image: url(../images/sp/side_num_03.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n4 {
    background-image: url(../images/sp/side_num_04.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n5 {
    background-image: url(../images/sp/side_num_05.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n6 {
    background-image: url(../images/sp/side_num_06.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n7 {
    background-image: url(../images/sp/side_num_07.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n8 {
    background-image: url(../images/sp/side_num_08.png);
  }
  #game .wrapper #main-board #side-menu #nums div.n9 {
    background-image: url(../images/sp/side_num_09.png);
  }
  #game .wrapper #main-board #side-menu #nums div.disabled {
    cursor: default;
    opacity: 0.2;
    -ms-filter: "alpha(opacity=20)";
    -moz-opacity: 0.2;
    -khtml-opacity: 0.2;
    zoom: 1;
  }
  #game .wrapper #main-board #side-menu #nums div.selected {
    cursor: default;
    background-color: #5c7a99;
  }
  #game .wrapper #main-board #side-menu #side-menu-misc a#check,
  #game .wrapper #main-board #side-menu #side-menu-misc a#memo,
  #game .wrapper #main-board #side-menu #side-menu-misc a#save {
    display: block;
    position: absolute;
    width: 86px;
    height: 37px;
    background: url(../images/sp/side_memo.png) no-repeat;
    background-size: 100%;
  }
  #game .wrapper #main-board #side-menu #side-menu-misc a {
    -webkit-tap-highlight-color: rgba(26, 64, 102, 0.5);
  }
  #game .wrapper #main-board #side-menu #side-menu-misc a:active {
    background-color: rgba(26, 64, 102, 0.5);
  }
  #game .wrapper #main-board #side-menu #side-menu-misc a#memo {
    left: 42px;
  }
  #game .wrapper #main-board #side-menu #side-menu-misc a#save {
    left: 133px;
    background-image: url(../images/sp/side_save.png);
  }
  #game .wrapper #main-board #side-menu #side-menu-misc a#check {
    left: 224px;
    background-image: url(../images/sp/side_check.png);
  }
  #game .wrapper #main-board #side-menu #side-menu-misc a.selected {
    background-position: 0 -40px !important;
  }
  #game .wrapper > a.back {
    display: block;
    margin: 0 0 4px 0;
    width: 76px;
    background: url(../images/sp/head_btn_02.png) no-repeat 0 0;
    background-size: 100%;
    height: 0;
    padding-top: 30px;
    overflow: hidden;
  }
  #game .wrapper > a.back:active {
    background-position: 0 -35px;
  }
  #game-footer {
    width: 100%;
    font-size: 9px;
  }
  #game-footer .wrapper {
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 5px 10px 15px 10px;
    zoom: 1;
  }
  #game-footer .wrapper:after {
    display: block;
    clear: both;
    content: "";
  }
  #game-footer .wrapper .lft {
    font-weight: 700;
    float: left;
  }
  #game-footer .wrapper .rgt {
    float: right;
  }
}

/* #13459 397.数独機能改修 */
/* PC */
@media screen and (min-width: 600px) {
  /* 高さ自動調整に変更上書き */
  #side-menu {
    padding-bottom: 20px;
    height: auto !important;
  }
  #side-menu-misc {
    line-height: 0;
  }

  #reward-apply {
    display: inline-block;
    margin-top: 10px;
    margin-left: 20px;
    width: 129px;
    height: 42px;
    background-image: url(../images/pc/side_apply.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 100%;
  }
  #reward-apply.disable {
    display: none;
  }
  #game .wrapper #main-board #side-menu {
    height: 446px;
  } /* 高さ確保の為、上書き */
  #game .wrapper {
    position: relative;
  }
  #game .wrapper .reward {
    position: absolute;
    top: 12px;
    left: 0;
    display: block;
    width: 80px;
    height: 80px;
    background-image: url(../images/pc/head_reward.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
  }
  .modal .dialogue {
    width: 400px !important;
    margin-left: -200px !important;
    transform: translateY(-50%);
  }
  .modal .dialogue .dialogue-reward {
    padding: 15px;
  }
  .modal .dialogue .dialogue-reward__icon {
    padding: 10px 0;
    text-align: center;
  }
  .modal .dialogue .dialogue-reward__text {
    font-weight: bold;
    font-size: 24px;
  }
  .modal .dialogue .dialogue-reward__ex {
    padding: 0 20px;
    text-align: left;
    line-height: 1.4;
  }
  .modal .dialogue .dialogue-reward__keyword {
    display: block;
    margin: 15px auto 20px auto;
    padding: 30px 20px;
    width: 120px;
    border: 2px solid white;
    font-size: 45px;
    font-weight: bold;
    text-align: center;
  }
  .modal .dialogue .dialogue-reward__link {
    text-align: center;
  }
  .modal .dialogue .dialogue-reward__link .dialogue-reward__link-apply {
    display: block;
    margin: auto;
    width: 200px;
    height: 42px;
    background-image: url(../images/pc/dialog_apply.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 100%;
  }
  .modal .close {
    display: inline-block;
    position: absolute;
    top: 15px;
    right: 15px;
    width: 26px;
    height: 26px;
    background-image: url(../images/pc/dialog_close.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
    cursor: pointer;
  }
  #note {
    clear: both;
    padding: 10px 40px 0 40px;
    font-size: 12px;
    text-align: center;
    line-height: 1.4;
    color: #999;
  }
}

/* SP */
@media screen and (max-width: 599px) {
  /* 位置を左寄せに変更上書き */
  #main-menu {
    margin-left: 0 !important;
  }
  /* マージン変更上書き */
  #main-board {
    margin-bottom: 15px !important;
  }

  #reward-apply {
    z-index: 10;
    position: absolute;
    top: -56px;
    right: 0;
    display: block;
    width: 86px;
    height: 37px;
    background-image: url(../images/sp/side_apply.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 100%;
  }
  #reward-apply.disable {
    display: none;
  }
  #game .wrapper {
    position: relative;
  }
  #game .wrapper .reward {
    position: absolute;
    top: 60px;
    left: calc(50% - 25px);
    display: block;
    width: 50px;
    height: 50px;
    background-image: url(../images/sp/head_reward.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
  }
  .modal .dialogue {
    width: 300px !important;
    margin-left: -150px !important;
    transform: translateY(-50%);
  }
  .modal .dialogue .dialogue-reward {
    padding: 15px;
  }
  .modal .dialogue .dialogue-reward__icon {
    padding: 10px 0;
    text-align: center;
  }
  .modal .dialogue .dialogue-reward__text {
    font-weight: bold;
    font-size: 20px;
  }
  .modal .dialogue .dialogue-reward__ex {
    padding: 0 20px;
    text-align: left;
    font-size: 12px;
    line-height: 1.4;
  }
  .modal .dialogue .dialogue-reward__keyword {
    margin: 15px auto 20px auto;
    padding: 20px 10px;
    width: 80px;
    border: 2px solid white;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }
  .modal .dialogue .dialogue-reward__link {
    text-align: center;
  }
  .modal .dialogue .dialogue-reward__link .dialogue-reward__link-apply {
    display: block;
    margin: auto;
    width: 200px;
    height: 42px;
    background-image: url(../images/pc/dialog_apply.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 100%;
  }
  .modal .close {
    display: inline-block;
    position: absolute;
    top: 15px;
    right: 15px;
    width: 26px;
    height: 26px;
    background-image: url(../images/pc/dialog_close.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
    cursor: pointer;
  }
  #note {
    clear: both;
    padding: 0 10px 10px 10px;
    font-size: 12px;
    text-align: left;
    line-height: 1.4;
    color: #999;
  }
}
