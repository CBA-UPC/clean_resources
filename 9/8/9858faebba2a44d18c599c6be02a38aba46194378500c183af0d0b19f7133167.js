@charset "UTF-8";
/* ========== Home 10 : Hero Section Style ============= */
@import url("https://fonts.cdnfonts.com/css/clash-display");
/* ========== Home 10 : Process Section Style ============= */
@import url("https://fonts.cdnfonts.com/css/clash-display");
/*======= Base Class ========*/
:root {
  --bs-primary:#3147FF;
  --bs-primary-rgb:49, 71, 255;
  --l2-primary:#A259FF;
  --l2-primary-rgb:162, 89, 255;
  --l2-secondary:#0A102F;
  --l2-secondary-rgb:10, 16, 47;
  --l3-primary:#FFC900;
  --l3-primary-rgb:255, 201, 0;
  --l4-primary:#4B2AAD;
  --l4-primary-rgb:75, 42, 173;
  --l5-primary:#FF9966;
  --l5-primary-rgb:255, 153, 102;
  --l5-secondary:#1B1C1D;
  --l5-secondary-rgb:27, 28, 29;
  --l6-primary:#3147FF;
  --l6-primary-rgb:49, 71, 255;
  --l7-primary:#191919;
  --l7-primary-rgb:25, 25, 25;
  --l7-secondary:#A259FF;
  --l7-secondary-rgb:162, 89, 255;
  --l8-primary:#C1FF00;
  --l8-primary-rgb:193, 255, 0;
  --l9-primary:#324438;
  --l9-primary-rgb:50, 68, 56;
  --l9-secondary:#F4B905;
  --l9-secondary-rgb:244, 185, 5;
  --l10-primary:#2D2B92;
  --l10-primary-rgb:45, 43, 146;
  --l10-secondary:#FFD874;
  --l10-secondary-rgb:255, 216, 116;
  --body-color:#0A102F;
  --body-color-rgb:10, 16, 47;
  --black-2:#121212;
  --black-2-rgb:18, 18, 18;
  --black-3:#1B1C1D;
  --black-3-rgb:27, 28, 29;
  --black-4:#191919;
  --black-4-rgb:25, 25, 25;
  --cream:#FDFBF9;
  --cream-rgb:253, 251, 249;
  --offwhite:#FAF9F5;
  --offwhite-rgb:250, 249, 245;
  --font-family-base:Inter, sans-serif;
  --font-family-heading:Plus Jakarta Sans, sans-serif;
  --font-wight-heading:800;
  --font-dm-sans:DM Sans, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family-base);
  font-size: 1rem;
  line-height: 1.56;
}

span,
a {
  display: inline-block;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: initial;
}

img {
  display: block;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-weight-heading);
  font-family: var(--font-family-heading);
}

p {
  font-size: 16px;
  line-height: 1.67;
  margin-bottom: initial;
  color: rgba(10, 16, 47, 0.8);
}
@media (min-width: 576px) {
  p {
    font-size: 18px;
  }
}

.position-relative {
  position: relative;
}

.list-style-bullet li {
  display: flex;
  column-gap: 8px;
}
.list-style-bullet li::before {
  content: "";
  width: 8px;
  height: 8px;
  min-width: 8px;
  min-width: 8px;
  min-height: 8px;
  max-height: 8px;
  border-radius: 500px;
  background-color: #0A102F;
  top: 10px;
  position: relative;
}

.inner-block-title {
  line-height: 1.5;
  letter-spacing: 0em;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.0208333333em;
  font-size: 20px;
  font-family: var(--font-family-base);
}
@media (min-width: 768px) {
  .inner-block-title {
    font-size: 22px;
  }
}
@media (min-width: 992px) {
  .inner-block-title {
    font-size: 24px;
  }
}

/*!
 * Bootstrap Grid v5.3.0-alpha3 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
.container,
.container-fluid {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 480px) {
  .container {
    max-width: 480px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}

.row > * {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 480px) {
  .col-xs {
    flex: 1 0 0%;
  }
  .row-cols-xs-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xs-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xs-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xs-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xs-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xs-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xs-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xs-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xs-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xs-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xs-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xs-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xs-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xs-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xs-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xs-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xs-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xs-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xs-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xs-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xs-0 {
    margin-left: 0;
  }
  .offset-xs-1 {
    margin-left: 8.33333333%;
  }
  .offset-xs-2 {
    margin-left: 16.66666667%;
  }
  .offset-xs-3 {
    margin-left: 25%;
  }
  .offset-xs-4 {
    margin-left: 33.33333333%;
  }
  .offset-xs-5 {
    margin-left: 41.66666667%;
  }
  .offset-xs-6 {
    margin-left: 50%;
  }
  .offset-xs-7 {
    margin-left: 58.33333333%;
  }
  .offset-xs-8 {
    margin-left: 66.66666667%;
  }
  .offset-xs-9 {
    margin-left: 75%;
  }
  .offset-xs-10 {
    margin-left: 83.33333333%;
  }
  .offset-xs-11 {
    margin-left: 91.66666667%;
  }
  .g-xs-0,
  .gx-xs-0 {
    --bs-gutter-x: 0;
  }
  .g-xs-0,
  .gy-xs-0 {
    --bs-gutter-y: 0;
  }
  .g-xs-1,
  .gx-xs-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xs-1,
  .gy-xs-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xs-2,
  .gx-xs-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xs-2,
  .gy-xs-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xs-3,
  .gx-xs-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xs-3,
  .gy-xs-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xs-4,
  .gx-xs-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xs-4,
  .gy-xs-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xs-5,
  .gx-xs-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xs-5,
  .gy-xs-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .g-sm-0,
  .gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .g-sm-0,
  .gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .g-sm-1,
  .gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-sm-1,
  .gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-sm-2,
  .gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-sm-2,
  .gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-sm-3,
  .gx-sm-3 {
    --bs-gutter-x: 1rem;
  }
  .g-sm-3,
  .gy-sm-3 {
    --bs-gutter-y: 1rem;
  }
  .g-sm-4,
  .gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-sm-4,
  .gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-sm-5,
  .gx-sm-5 {
    --bs-gutter-x: 3rem;
  }
  .g-sm-5,
  .gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .g-md-0,
  .gx-md-0 {
    --bs-gutter-x: 0;
  }
  .g-md-0,
  .gy-md-0 {
    --bs-gutter-y: 0;
  }
  .g-md-1,
  .gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-md-1,
  .gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-md-2,
  .gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-md-2,
  .gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-md-3,
  .gx-md-3 {
    --bs-gutter-x: 1rem;
  }
  .g-md-3,
  .gy-md-3 {
    --bs-gutter-y: 1rem;
  }
  .g-md-4,
  .gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-md-4,
  .gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-md-5,
  .gx-md-5 {
    --bs-gutter-x: 3rem;
  }
  .g-md-5,
  .gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .g-lg-0,
  .gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .g-lg-0,
  .gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .g-lg-1,
  .gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-lg-1,
  .gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-lg-2,
  .gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-lg-2,
  .gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-lg-3,
  .gx-lg-3 {
    --bs-gutter-x: 1rem;
  }
  .g-lg-3,
  .gy-lg-3 {
    --bs-gutter-y: 1rem;
  }
  .g-lg-4,
  .gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-lg-4,
  .gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-lg-5,
  .gx-lg-5 {
    --bs-gutter-x: 3rem;
  }
  .g-lg-5,
  .gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .g-xl-0,
  .gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .g-xl-0,
  .gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .g-xl-1,
  .gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xl-1,
  .gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xl-2,
  .gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xl-2,
  .gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xl-3,
  .gx-xl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xl-3,
  .gy-xl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xl-4,
  .gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xl-4,
  .gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xl-5,
  .gx-xl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xl-5,
  .gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }
  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }
  .g-xxl-0,
  .gx-xxl-0 {
    --bs-gutter-x: 0;
  }
  .g-xxl-0,
  .gy-xxl-0 {
    --bs-gutter-y: 0;
  }
  .g-xxl-1,
  .gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xxl-1,
  .gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xxl-2,
  .gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xxl-2,
  .gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xxl-3,
  .gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xxl-3,
  .gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xxl-4,
  .gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xxl-4,
  .gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xxl-5,
  .gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xxl-5,
  .gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0;
}

.feature-card {
  background: #FFFFFF;
  border: 2px solid #0A102F;
  border-radius: 10px;
  padding: 30px;
  cursor: pointer;
  transition: 300ms;
}
.feature-card__icon {
  padding-bottom: 30px;
}
.feature-card__title {
  padding-bottom: 15px;
  font-family: var(--font-family-base);
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: var(--body-color);
}
.feature-card p {
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: rgba(var(--body-color-rgb), 0.8);
  margin-bottom: 0;
}
.feature-card p span {
  font-weight: 600;
}
.feature-card:hover {
  box-shadow: 10px 10px rgba(var(--body-color-rgb));
  border-radius: 10px;
}

/* ========== Component : Feature Card Style 3============= */
.feature-card-3 {
  padding: 28px;
  border: 4px solid #0A102F;
  border-radius: 10px;
  height: 100%;
  transition: all 0.2s ease-in-out;
  background: #F5EFEB;
}
.feature-card-3__icon-wrapper {
  padding-bottom: 30px;
}
.feature-card-3__title {
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.0208333333em;
  font-size: 20px;
  color: var(--body-color);
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  .feature-card-3__title {
    font-size: 22px;
  }
}
@media (min-width: 992px) {
  .feature-card-3__title {
    font-size: 24px;
  }
}
@media (min-width: 992px) {
  .feature-card-3:hover {
    transform: rotate(-3deg);
    background-color: #fff;
  }
}

/* ========== Component : Feature Card 5 Style ============= */
/* ========== Component : process Card Style ============= */
.process-card {
  padding: 30px;
  display: flex;
  border-radius: 5px;
  border: 1px solid #fff;
  transition: 0.3s;
  flex-direction: column;
  row-gap: 20px;
}
@media (min-width: 768px) {
  .process-card {
    row-gap: 40px;
  }
}
@media (min-width: 992px) {
  .process-card {
    row-gap: 60px;
  }
}
.process-card:hover {
  transform: translateY(-10px);
}
.process-card__icon-block {
  max-width: 100px;
}
.process-card:hover .process-card__icon {
  color: #3147FF;
}
.process-card p {
  font-weight: 400;
  color: #fff;
  opacity: 0.8;
}
.process-card__heading {
  font-weight: 600;
  letter-spacing: 0em;
  font-family: "General Sans", sans-serif;
  line-height: 1.4;
  font-size: 24px;
  margin-bottom: 16px;
}
@media (min-width: 768px) {
  .process-card__heading {
    font-size: 26px;
  }
}
@media (min-width: 992px) {
  .process-card__heading {
    font-size: 28px;
  }
}
@media (min-width: 1200px) {
  .process-card__heading {
    font-size: 30px;
  }
}
.process-card__step {
  display: inline-block;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.0208333333em;
  font-size: 20px;
  color: #BEF8FC;
  position: relative;
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  .process-card__step {
    font-size: 22px;
  }
}
@media (min-width: 992px) {
  .process-card__step {
    font-size: 24px;
  }
}
@media (min-width: 992px) {
  .process-card__step {
    margin-bottom: 34px;
  }
}
.process-card__step::after {
  content: "";
  position: absolute;
  height: 3px;
  width: 100%;
  background: #BEF8FC;
  bottom: -4px;
  left: 0;
  border-radius: 500px;
}

/* ========== Component : Testimonial Card Style ============= */
.testimonial__widget {
  height: 100%;
  display: flex;
}
.testimonial__widget__rating-stars {
  width: 100%;
}

.testimonial-card {
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 10px;
}
.testimonial-card__star {
  margin-bottom: 25px;
}
.testimonial-card p {
  font-weight: 400;
  font-size: 18px;
  line-height: 1.67;
  color: #0A102F;
  margin-bottom: 24px;
}
.testimonial-card__title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.67;
  font-family: var(--font-family-base);
  font-weight: 600;
  color: var(--l2-secondary);
  margin-bottom: 5px;
}
@media (min-width: 576px) {
  .testimonial-card__title {
    font-size: 18px;
  }
}
.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 20px;
}
.testimonial-card__author-image img {
  border-radius: 50%;
}
.testimonial-card__author-info {
  display: flex;
  flex-direction: column;
}
.testimonial-card__author-info h4 {
  font-size: 16px;
  line-height: 1.4;
  font-weight: 600;
  font-family: var(--font-family-base);
  font-weight: 600;
  color: var(--l2-secondary);
}
@media (min-width: 576px) {
  .testimonial-card__author-info h4 {
    font-size: 18px;
  }
}
.testimonial-card__author-info span {
  font-family: var(--font-family-base);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(10, 16, 47, 0.7);
}

.testimonial-card-2 {
  background: #FFFFFF;
  border: 2px solid #191919;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
}
.testimonial-card-2__image {
  display: inline-flex;
  margin-bottom: 20px;
}
@media (min-width: 992px) {
  .testimonial-card-2__image {
    margin-bottom: 30px;
  }
}
.testimonial-card-2 p {
  color: rgba(10, 16, 47, 0.8);
  font-size: 16px;
  line-height: 1.67;
  font-weight: 400;
  margin-bottom: 20px;
}
@media (min-width: 576px) {
  .testimonial-card-2 p {
    font-size: 18px;
  }
}
@media (min-width: 992px) {
  .testimonial-card-2 p {
    margin-bottom: 30px;
  }
}
.testimonial-card-2__title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.67;
  font-family: var(--font-family-base);
  color: var(--l2-secondary);
  margin-bottom: 5px;
}
@media (min-width: 576px) {
  .testimonial-card-2__title {
    font-size: 18px;
  }
}
.testimonial-card-2__user-name {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.67;
  font-family: var(--font-family-base);
}
@media (min-width: 576px) {
  .testimonial-card-2__user-name {
    font-size: 18px;
  }
}
.testimonial-card-2__user-position {
  font-size: 14px;
  line-height: 1.43;
  color: rgba(10, 16, 47, 0.7);
}

/* ========== Component : Pricing Card Style 1============= */
.pricing-card {
  border: 2px solid #0A102F;
  border-radius: 10px;
  padding: 30px;
  transition: all 0.4s;
}
@media (min-width: 1200px) {
  .pricing-card {
    padding: 40px;
  }
}
.pricing-card__head {
  text-align: center;
  padding-bottom: 25px;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(10, 16, 47, 0.1);
  font-family: "Inter", sans-serif;
}
.pricing-card__plan {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 20px;
  font-family: "Inter", sans-serif;
}
.pricing-card__price-block {
  font-weight: 400;
  font-size: 28px;
  line-height: 2.86;
  font-family: "Inter", sans-serif;
}
.pricing-card__price-block span {
  font-weight: 700;
  font-size: 58px;
  line-height: 1.38;
}
.pricing-card p {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: rgba(10, 16, 47, 0.7);
}
.pricing-card__body {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
@media (min-width: 992px) {
  .pricing-card__body {
    row-gap: 35px;
  }
}
.pricing-card__list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
}
.pricing-card__list li {
  display: flex;
  column-gap: 12px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  font-family: "Inter", sans-serif;
  color: #0A102F;
}
.pricing-card__list li::before {
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  content: "\f005";
}
.pricing-card__list li.disabled {
  opacity: 0.2;
}
.pricing-card.active {
  box-shadow: 10px 10px rgba(var(--body-color-rgb));
  border-radius: 10px;
}
.pricing-card:hover {
  box-shadow: 10px 10px rgba(var(--body-color-rgb));
  border-radius: 10px;
}

/* ========== Component : Pricing Card Style 2 ============= */
.pricing-card-2 {
  background: #FDFBF9;
  border-radius: 5px;
  padding: 40px;
}
.pricing-card-2__head {
  padding-bottom: 25px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(27, 28, 29, 0.1);
}
.pricing-card-2__icon {
  margin-bottom: 30px;
}
.pricing-card-2__plan {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0em;
  font-family: "General Sans", sans-serif;
  margin-bottom: 10px;
  color: #1B1C1D;
}
@media (min-width: 576px) {
  .pricing-card-2__plan {
    font-size: 20px;
  }
}
.pricing-card-2__price {
  font-family: "General Sans", sans-serif;
  color: #1B1C1D;
  font-weight: 600;
  line-height: 1.18;
  font-size: 52px;
}
@media (min-width: 1200px) {
  .pricing-card-2__price {
    font-size: 56px;
  }
}
@media (min-width: 1400px) {
  .pricing-card-2__price {
    font-size: 72px;
  }
}
.pricing-card-2__time {
  font-weight: 400;
  font-size: 18px;
  line-height: 1.67;
  font-family: "Inter", sans-serif;
  color: rgba(27, 28, 29, 0.8);
}
.pricing-card-2 p {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: rgba(10, 16, 47, 0.7);
}
.pricing-card-2__body {
  display: flex;
  flex-direction: column;
  row-gap: 22px;
}
@media (min-width: 992px) {
  .pricing-card-2__body {
    row-gap: 13px;
  }
}
.pricing-card-2__list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 12px;
}
.pricing-card-2__list li {
  display: flex;
  column-gap: 5px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.67;
  color: rgba(27, 28, 29, 0.8);
}

/* ========== Component : Pricing Card Style 3 ============= */
.pricing-card-3 {
  background: #FFFFFF;
  border: 2px solid #191919;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  transition: all 0.4s;
}
.pricing-card-3__head {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  column-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(25, 25, 25, 0.1);
}
@media (min-width: 1200px) {
  .pricing-card-3__head {
    flex-direction: row;
  }
}
.pricing-card-3__plan {
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: -0.5px;
}
.pricing-card-3__price-block {
  text-align: center;
}
.pricing-card-3__price-sign {
  font-size: 28px;
  font-family: "Inter", sans-serif;
}
.pricing-card-3__price {
  font-weight: 700;
  font-size: 58px;
  line-height: 1.2;
  font-family: var(--font-family-base);
}
.pricing-card-3__price-time {
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: -0.5px;
}
.pricing-card-3__body {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
@media (min-width: 9px) {
  .pricing-card-3__body {
    row-gap: 50px;
  }
}
.pricing-card-3__list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 18px;
}
.pricing-card-3__list li {
  display: flex;
  column-gap: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
}
.pricing-card-3__list li::before {
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  content: "\f00c";
  min-width: 20px;
  max-width: 20px;
  min-height: 20px;
  max-height: 20px;
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--black-3);
  background-color: var(--black-3);
  color: #fff;
  font-size: 11px;
}
.pricing-card-3__list li.disabled::before {
  background-color: transparent;
  color: var(--black-3);
}
.pricing-card-3__button {
  margin-top: auto;
}
.pricing-card-3__button .btn-primary-l07 {
  pointer-events: none;
}
.pricing-card-3__button .btn-outline {
  --btn-hover-bg: #191919;
  --btn-hover-border: #191919;
}
.pricing-card-3.active {
  box-shadow: 10px 10px #A259FF;
  border-radius: 10px;
}
.pricing-card-3:hover {
  box-shadow: 10px 10px #A259FF;
  border-radius: 10px;
}

/* ========== Component : Pricing Card Style 4 ============= */
.pricing-card-4 {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  border-radius: 20px;
  padding: 40px;
}
@media (min-width: 992px) {
  .pricing-card-4 {
    row-gap: 40px;
  }
}
.pricing-card-4__head {
  color: #FFFFFF;
}
.pricing-card-4__plan {
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.0208333333em;
  font-size: 20px;
  margin-bottom: 10px;
}
@media (min-width: 768px) {
  .pricing-card-4__plan {
    font-size: 22px;
  }
}
@media (min-width: 992px) {
  .pricing-card-4__plan {
    font-size: 24px;
  }
}
.pricing-card-4__price {
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;
  font-family: var(--font-family-base);
}
@media (min-width: 768px) {
  .pricing-card-4__price {
    font-size: 36px;
  }
}
@media (min-width: 992px) {
  .pricing-card-4__price {
    font-size: 44px;
  }
}
@media (min-width: 1200px) {
  .pricing-card-4__price {
    font-size: 52px;
  }
}
@media (min-width: 1400px) {
  .pricing-card-4__price {
    font-size: 58px;
  }
}
.pricing-card-4__time {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0em;
  font-weight: 400;
  line-height: 1.6;
  font-family: "Inter", sans-serif;
}
@media (min-width: 576px) {
  .pricing-card-4__time {
    font-size: 20px;
  }
}
.pricing-card-4 p {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: rgba(10, 16, 47, 0.7);
}
.pricing-card-4__list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 12px;
}
.pricing-card-4__list li {
  display: flex;
  column-gap: 12px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0em;
  line-height: 1.4;
  color: #FFFFFF;
}
@media (min-width: 576px) {
  .pricing-card-4__list li {
    font-size: 20px;
  }
}
.pricing-card-4__list li::before {
  content: "";
  min-width: 6px;
  max-width: 6px;
  min-height: 6px;
  max-height: 6px;
  border-radius: 500px;
  position: relative;
  top: 12px;
  background-color: #FFFFFF;
}
.pricing-card-4__button {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  margin-top: auto;
}
.pricing-card-4__button-bottom-text {
  font-size: 16px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
}

/* ========== Component : Pricing Card Style 5 ============= */
.pricing-card-5 {
  background: #FFFFFF;
  border: 2px solid #191919;
  border-radius: 10px;
  padding: 30px;
}
.pricing-card-5__head {
  display: flex;
  row-gap: 20px;
  column-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(25, 25, 25, 0.1);
}
.pricing-card-5__plan {
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: -0.5px;
}
.pricing-card-5__price-block {
  text-align: center;
}
.pricing-card-5__price-sign {
  font-size: 28px;
  line-height: 2.86;
  font-family: "Inter", sans-serif;
}
.pricing-card-5__price {
  font-weight: 700;
  font-size: 58px;
  line-height: 1.38;
  font-family: var(--font-family-base);
}
.pricing-card-5__price-time {
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: -0.5px;
}
.pricing-card-5__body {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
@media (min-width: 992px) {
  .pricing-card-5__body {
    row-gap: 50px;
  }
}
.pricing-card-5__list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 18px;
}
.pricing-card-5__list li {
  display: flex;
  column-gap: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
}
.pricing-card-5__list li::before {
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  content: "\f058";
  height: 20px;
  min-height: 20px;
  max-height: 20px;
  width: 20px;
  min-width: 20px;
  max-width: 20px;
}
.pricing-card-5__list li.disabled::before {
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  content: "\f00c";
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #191919;
  height: 18px;
  min-height: 18px;
  max-height: 18px;
  width: 18px;
  min-width: 18px;
  max-width: 18px;
  border-radius: 500px;
}
.pricing-card-5.active {
  box-shadow: 10px 10px #A259FF;
  border-radius: 10px;
}

/* ========== Component : Pricing Card Style 6 ============= */
.pricing-card-6 {
  background: #FFFFFF;
  border: 1px solid var(--black-2);
  border-radius: 5px;
}
@media (min-width: 992px) {
  .pricing-card-6 {
    display: flex;
    flex-wrap: wrap;
  }
}
.pricing-card-6__head, .pricing-card-6__body {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media (min-width: 480px) {
  .pricing-card-6__head, .pricing-card-6__body {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
@media (min-width: 992px) {
  .pricing-card-6__head, .pricing-card-6__body {
    padding-top: 50px;
    padding-bottom: 50px;
    width: 50%;
  }
}
@media (min-width: 1200px) {
  .pricing-card-6__head, .pricing-card-6__body {
    padding-left: 70px;
    padding-right: 70px;
  }
}
.pricing-card-6__head {
  border-bottom: 1px solid rgba(27, 28, 29, 0.1);
}
@media (min-width: 992px) {
  .pricing-card-6__head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid rgba(27, 28, 29, 0.1);
    border-bottom: 0;
  }
}
.pricing-card-6__head p {
  font-size: 16px;
  line-height: 1.4;
  font-weight: 600;
  color: rgba(var(--body-color-rgb), 0.8);
  max-width: 381px;
}
@media (min-width: 576px) {
  .pricing-card-6__head p {
    font-size: 18px;
  }
}
.pricing-card-6__plan {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.025em;
  margin-bottom: 20px;
  color: var(--black-2);
}
@media (min-width: 576px) {
  .pricing-card-6__plan {
    font-size: 20px;
  }
}
.pricing-card-6__price {
  font-family: "Public Sans", sans-serif;
  font-size: 32px;
  line-height: 1.14;
  font-weight: 700;
}
@media (min-width: 576px) {
  .pricing-card-6__price {
    font-size: 42px;
  }
}
@media (min-width: 992px) {
  .pricing-card-6__price {
    font-size: 52px;
  }
}
@media (min-width: 1200px) {
  .pricing-card-6__price {
    font-size: 56px;
  }
}
.pricing-card-6__price-plan {
  margin-bottom: 24px;
}
.pricing-card-6__time {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.67;
  font-family: "Inter", sans-serif;
  color: rgba(var(--black-2), 0.8);
}
@media (min-width: 576px) {
  .pricing-card-6__time {
    font-size: 18px;
  }
}
.pricing-card-6__body {
  display: flex;
  flex-direction: column;
}
@media (min-width: 1400px) {
  .pricing-card-6__body {
    padding-left: 128px;
  }
}
.pricing-card-6__badge {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.67;
  font-family: "Inter", sans-serif;
  margin-bottom: 24px;
  color: var(--black-2);
}
@media (min-width: 576px) {
  .pricing-card-6__badge {
    font-size: 18px;
  }
}
.pricing-card-6__list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 12px;
  margin-bottom: 30px;
}
@media (min-width: 992px) {
  .pricing-card-6__list {
    margin-bottom: 50px;
  }
}
.pricing-card-6__list li {
  display: flex;
  column-gap: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.67;
  align-items: flex-start;
}
@media (min-width: 576px) {
  .pricing-card-6__list li {
    font-size: 18px;
  }
}
.pricing-card-6__list li .icon {
  margin-top: 3px;
}
.pricing-card-6__list li span {
  color: rgba(var(--black-2), 0.8);
}

/* ========== Component : Course Card ============= */
.course-card {
  padding: 30px;
  border-radius: 10px;
  background: #FDFBF9;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.course-card__image {
  border-radius: 10px;
  position: relative;
}
.course-card__image::before {
  content: "";
  background-color: rgba(10, 16, 47, 0.1);
  position: absolute;
  inset: 0;
  border-radius: inherit;
}
.course-card__image img {
  border-radius: inherit;
}
.course-card__meta {
  display: flex;
  column-gap: 10px;
  justify-content: space-between;
  margin-bottom: 15px;
  color: rgb(var(--body-color-rgb), 0.8);
  font-weight: 600;
  line-height: 1.43;
  font-size: 14px;
}
.course-card__meta-tag {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  column-gap: 8px;
}
@media (min-width: 576px) {
  .course-card__meta-tag {
    flex-direction: row;
    align-items: center;
  }
  .course-card__meta-tag > *:not(:last-child) {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
  .course-card__meta-tag > *:not(:last-child):after {
    content: "";
    background-color: rgb(var(--body-color-rgb), 0.8);
    display: block;
    border-radius: 500px;
    min-width: 6px;
    max-width: 6px;
    min-height: 6px;
    max-height: 6px;
    border-radius: 500px;
  }
}
.course-card__meta-rating {
  display: flex;
  column-gap: 8px;
  align-items: center;
}
.course-card__meta-rating i {
  color: #FFC900;
}
.course-card__title {
  font-family: var(--font-family-base);
  font-weight: 700;
  line-height: 1.33;
  font-size: 20px;
}
@media (min-width: 768px) {
  .course-card__title {
    font-size: 22px;
  }
}
@media (min-width: 992px) {
  .course-card__title {
    font-size: 24px;
  }
}
.course-card__footer {
  margin-top: auto;
}

/* ========== Component : Blog Card ============= */
.blog-card {
  padding: 20px;
  background: #FFFFFF;
  border: 1px solid #121212;
  border-radius: 5px;
}
.blog-card__image {
  position: relative;
  margin-bottom: 24px;
}
.blog-card__image img {
  width: 100%;
}
.blog-card__badge {
  position: absolute;
  top: 3%;
  right: 2%;
  padding: 10.5px 20.5px;
  background: #FDFBF9;
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  color: #121212;
}
.blog-card__meta {
  display: flex;
  column-gap: 15px;
  margin-bottom: 15px;
}
.blog-card__meta span {
  display: flex;
  column-gap: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #121212;
}
.blog-card__title {
  font-weight: 600;
  font-family: "Public Sans", sans-serif;
  line-height: 1.36;
  font-size: 22px;
  font-weight: 700;
  color: var(--black-2);
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  .blog-card__title {
    font-size: 26px;
  }
}
@media (min-width: 992px) {
  .blog-card__title {
    font-size: 28px;
  }
}
@media (min-width: 992px) {
  .blog-card__title {
    margin-bottom: 30px;
  }
}
.blog-card__link {
  display: flex;
  column-gap: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #121212;
}
.blog-card__link i {
  position: relative;
  top: 5px;
}

/* ========== Component : Blog Card Large ============= */
.blog-card-large {
  background: #FFFFFF;
  border: 1px solid #E1E1E1;
  border-radius: 10px;
  transition: 0.4s;
}
.blog-card-large a {
  color: #0A102f;
}
.blog-card-large:hover {
  box-shadow: 0px 4px 60px rgba(10, 16, 47, 0.08);
}
.blog-card-large__image img {
  width: 100%;
}
.blog-card-large__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 15px;
  column-gap: 24px;
  margin-bottom: 30px;
}
.blog-card-large__meta span {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
}
.blog-card-large__user {
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
}
.blog-card-large__user img {
  height: 45px;
}
.blog-card-large__time {
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
}
.blog-card-large__category {
  padding: 5.5px 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  background: rgba(10, 16, 47, 0.05);
  color: rgba(10, 16, 47, 0.6);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
}
.blog-card-large__body {
  padding: 30px;
}
.blog-card-large__body p {
  margin-bottom: 30px;
}
@media (min-width: 992px) {
  .blog-card-large__body p {
    max-width: 760px;
  }
}
.blog-card-large__title {
  font-weight: 700;
  letter-spacing: -0.0333em;
  font-family: "General Sans", sans-serif;
  line-height: 1.4;
  font-size: 24px;
  margin-bottom: 15px;
  font-family: var(--font-family-base);
}
@media (min-width: 768px) {
  .blog-card-large__title {
    font-size: 26px;
  }
}
@media (min-width: 992px) {
  .blog-card-large__title {
    font-size: 28px;
  }
}
@media (min-width: 1200px) {
  .blog-card-large__title {
    font-size: 30px;
  }
}
.blog-card-large__link {
  display: flex;
  column-gap: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #0A102F;
}
.blog-card-large__link:hover {
  color: #3147FF;
}
.blog-card-large__link i {
  position: relative;
  top: 5px;
}
.blog-card-large-row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  row-gap: 30px;
}
@media (min-width: 992px) {
  .blog-card-large-row {
    row-gap: 40px;
  }
}

.blog-card-large-2__image img {
  width: 100%;
}
.blog-card-large-2__meta {
  display: flex;
  column-gap: 24px;
}
.blog-card-large-2__meta span {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
}
.blog-card-large-2__user {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
}
.blog-card-large-2__time {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
}
.blog-card-large-2__category {
  padding: 5.5px 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  background: rgba(10, 16, 47, 0.05);
  color: rgba(10, 16, 47, 0.6);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
}
.blog-card-large-2__body {
  padding: 30px;
}
.blog-card-large-2__body p {
  margin-bottom: 30px;
}

/* ========== Component : Team Card Style ============= */
.team-card {
  overflow: hidden;
  position: relative;
}
.team-card img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
@media (min-width: 768px) {
  .team-card img {
    border-radius: 0px;
  }
}
.team-card__name {
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: var(--black-2);
  margin-bottom: 5px;
}
.team-card__position {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: rgba(var(--black-2-rgb), 0.8);
}
.team-card__body {
  padding: 20px;
  background: #F5F3EA;
  border-radius: 5px;
  transition: 0.5s;
}
@media (min-width: 768px) {
  .team-card__body {
    position: absolute;
    left: 30px;
    right: 30px;
    bottom: 30px;
  }
}
@media (min-width: 992px) {
  .team-card__body {
    padding: 20px;
    bottom: 0px;
    transform: translateY(100%);
  }
}
.team-card__body-bottom {
  display: flex;
  align-items: center;
  column-gap: 10px;
  row-gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
}
.team-card__social-links {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}
.team-card__social-links a {
  color: var(--black-2);
  transition: 0.4s;
}
.team-card__social-links a:hover {
  color: var(--l5-primary);
}
@media (min-width: 992px) {
  .team-card:hover .team-card__body {
    bottom: 20px;
    transform: translateY(0);
  }
}

/* ========== Component : Team Card 2 Style ============= */
.team-card-2 {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  background: #FAF9F5;
  border-radius: 10px;
  padding: 20px;
  transition: all 0.4s;
}
.team-card-2:hover {
  background: #FFFFFF;
  box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.08);
}
.team-card-2 img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.team-card-2__body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  column-gap: 10px;
}
.team-card-2__name {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0em;
  color: #0A102F;
  margin-bottom: 5px;
  font-family: "Inter", sans-serif;
}
@media (min-width: 576px) {
  .team-card-2__name {
    font-size: 20px;
  }
}
.team-card-2__position {
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  color: rgba(10, 16, 47, 0.8);
  margin-bottom: 15px;
}
@media (min-width: 576px) {
  .team-card-2__position {
    font-size: 18px;
  }
}
.team-card-2__social-links {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}
.team-card-2__social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  max-width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  max-height: 35px;
  border-radius: 500px;
  color: var(--black-2);
  background-color: rgba(10, 16, 47, 0.05);
  transition: 0.4s;
}
.team-card-2__social-links a:hover {
  color: #FFFFFF;
  background-color: var(--black-2);
}
.team-card-2__social-links.hvr-blue a:hover {
  color: #FFFFFF;
  background-color: var(--bs-primary);
}

.team-card-2-row {
  justify-content: center;
  --bs-gutter-y: 30px;
}

/* ========== Component : service Card Style ============= */
.service-card {
  padding: 40px;
  display: flex;
  column-gap: 40px;
  border-radius: 10px;
  border: 1px solid #E6E6E6;
  transition: 0.3s;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 25px;
  background: #FFFFFF;
}
@media (min-width: 576px) {
  .service-card {
    flex-direction: initial;
    align-items: initial;
    text-align: initial;
  }
}
@media (min-width: 992px) {
  .service-card {
    padding: 40px;
  }
}
.service-card__icon {
  color: #0A102F;
  max-width: 250px;
}
.service-card__icon svg,
.service-card__icon img {
  width: 100%;
}
.service-card__icon svg path,
.service-card__icon img path {
  fill: currentColor;
}

@media (min-width: 992px) {
  .service-card__body {
    max-width: 420px;
    }
}

.service-card__title {
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.0208333333em;
  font-size: 20px;
  font-family: "Inter", sans-serif;
  color: #0A102F;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .service-card__title {
    font-size: 22px;
  }
}
@media (min-width: 992px) {
  .service-card__title {
    font-size: 24px;
  }
}
.service-card p {
  margin-bottom: 14px;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: rgba(10, 16, 47, 0.8);
}
@media (min-width: 576px) {
  .service-card p {
    margin-bottom: 20px;
  }
}
@media (min-width: 1200px) {
  .service-card p {
    margin-bottom: 30px;
  }
}
.service-card:hover .service-card__icon {
  color: #3147FF;
}
.service-card:hover .service-card__link {
  color: #3147FF;
}
.service-card:hover .service-card__link:after {
  left: 4px;
}
.service-card.hvr-fill:hover {
  background: #FAF9F5;
  border-color: #FAF9F5;
}
.service-card.background-2 {
  background: #FFFFFF;
  border: 0px;
  border-radius: 10px;
}
.service-card.background-2:hover {
  box-shadow: 0px 4px 60px rgba(10, 16, 47, 0.06);
}

/* ========== Component : Service Card Style ============= */
.service-card-2 {
  background: #FFFFFF;
  border: 2px solid #191919;
  border-radius: 10px;
  padding: 30px;
  transition: 300ms;
  height: 100%;
}
.service-card-2__icon {
  padding-bottom: 30px;
}
.service-card-2__title {
  margin-bottom: 15px;
  font-family: var(--font-family-base);
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.0208333333em;
  font-size: 20px;
  color: var(--body-color);
}
@media (min-width: 768px) {
  .service-card-2__title {
    font-size: 22px;
  }
}
@media (min-width: 992px) {
  .service-card-2__title {
    font-size: 24px;
  }
}
.service-card-2 p {
  color: rgba(25, 25, 25, 0.8);
  margin-bottom: 0;
}
.service-card-2:hover {
  box-shadow: 10px 10px #A259FF;
  border-radius: 10px;
}

/* ========== Component : Career Card Style ============= */
.career-card {
  padding: 30px;
  display: flex;
  border-radius: 10px;
  border: 1px solid #E6E6E6;
  transition: 0.3s;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 25px;
  background: #FFFFFF;
}
@media (min-width: 576px) {
  .career-card {
    align-items: initial;
    text-align: initial;
  }
}
@media (min-width: 992px) {
  .career-card {
    padding: 40px;
    row-gap: 30px;
  }
}
.career-card__title {
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.0208333333em;
  font-size: 20px;
  font-family: "Inter", sans-serif;
  color: #0A102F;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .career-card__title {
    font-size: 22px;
  }
}
@media (min-width: 992px) {
  .career-card__title {
    font-size: 24px;
  }
}
.career-card__job-info {
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 15px;
}
.career-card__job-info span {
  display: flex;
  column-gap: 5px;
  font-size: 16px;
  line-height: 1.67;
  font-weight: 400;
  color: #0A102F;
}
@media (min-width: 576px) {
  .career-card__job-info span {
    font-size: 18px;
  }
}
.career-card:hover {
  background: #FAF9F5;
}
.career-card:hover .career-card__link {
  color: #3147FF;
}

.career-card-row {
  display: flex;
  flex-wrap: wrap;
  --bs-gutter-y: 18px;
}
@media (min-width: 992px) {
  .career-card-row {
    --bs-gutter-y: 24px;
  }
}

/* ========== Component : List Style  ============= */
.list-style-check {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  text-align: left;
  margin-bottom: 0;
}
.list-style-check li {
  display: flex;
  column-gap: 12px;
  font-weight: 600;
  line-height: 1.67;
  color: #0A102F;
  font-size: 16px;
}
@media (min-width: 576px) {
  .list-style-check li {
    font-size: 18px;
  }
}
.list-style-check li img {
  max-width: 22px;
  max-height: 22px;
}
@media (min-width: 576px) {
  .list-style-check li img {
    max-width: 34px;
    max-height: 34px;
  }
}

.list-social {
  --color: #0A102F;
  --backgroundColor: rgba(10, 16, 47, 0.1);
  --hovBackground: #3147FF;
  --hovColor: #FFFFFF;
  display: inline-flex;
  column-gap: 12px;
  list-style: none;
  flex-wrap: wrap;
  margin-bottom: 0;
  position: relative;
  z-index: 99;
}
.list-social li a {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  max-width: 30px;
  min-height: 30px;
  max-height: 30px;
  border-radius: 500px;
  font-size: 13px;
  background: var(--backgroundColor);
  color: var(--color);
  transition: 0.4s;
}
.list-social li a:hover {
  color: var(--hovColor);
  background-color: var(--hovBackground);
  border-color: var(--hovBackground);
}
.list-social--dark {
  --border-color: rgba(255, 255, 255, 0.1);
  --color: #FFFFFF;
  --hovBackground: #FFFFFF;
  --hovColor: #0A102F;
}
.list-social--hvr-black {
  --hovBackground: #0A102F;
  --hovColor: #FFFFFF;
}
.list-social--hvr-primary-l3 {
  --hovBackground: var(--l3-primary);
  --hovColor: #0A102F;
}
.list-social--primary-l5 {
  --backgroundColor: rgba(253, 251, 249, 0.1);
  --border-color: rgba(255, 255, 255, 0);
  --color: #FFFFFF;
  --hovBackground: #FF9966;
  --hovColor: var(--black-2);
}

.navigation-list .btn {
  background-color: rgba(10, 16, 47, 0.0392156863);
  color: rgba(10, 16, 47, 0.6);
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
}
.navigation-list li.active .btn {
  color: white !important;
}
.navigation-list--inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-bottom: 80px;
}
.navigation-list--inline li.active {
  background-color: #3147FF;
  color: #fff;
  border-radius: 500px;
}
.navigation-list--inline li .nav-list-btn {
  font-weight: 700;
}
.navigation-list--inline .nav-list-btn-2 {
  background-color: rgba(10, 16, 47, 0.0392156863);
  color: #fff;
}
.navigation-list--block {
  display: flex;
  flex-direction: row;
  gap: 20px;
  text-align: left;
  margin-bottom: 40px;
  justify-content: center;
}
@media (min-width: 1200px) {
  .navigation-list--block {
    flex-direction: column;
    margin-bottom: 0;
  }
}
.navigation-list--block li.active .nav-list-btn {
  color: #3147FF;
}
.navigation-list--block li .nav-list-btn {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  padding: 0;
  outline: none;
  background: none;
  border: none;
}
@media (min-width: 1200px) {
  .navigation-list--block li .nav-list-btn {
    font-size: 30px;
  }
}
.navigation-list--block li .nav-list-btn:active {
  border: none;
}

/* Sideabr List Styles */
.sidebar-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.sidebar-tag-list-item a {
  padding: 4.5px 23px;
  border-radius: 500px;
  background: rgba(10, 16, 47, 0.04);
  font-size: 18px;
  line-height: 1.43;
  color: rgba(10, 16, 47, 0.8);
  transition: 0.4s;
}
.sidebar-tag-list-item a:hover {
  background-color: var(--bs-primary);
  color: #FFF;
}

.sidebar-category-list {
  display: flex;
  flex-direction: column;
}
.sidebar-category-list > * {
  padding-top: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(10, 16, 47, 0.1);
}
.sidebar-category-list > *:last-child {
  border-bottom: 0px solid rgba(10, 16, 47, 0.1);
  padding-bottom: 0px;
}

/* ========== Component  : Portfolio Widget Style ============= */
.portfolio-widget_image-block {
  margin-bottom: 24px;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
}
.portfolio-widget_image-block img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center top;
  transition: all 0.4s;
}
.portfolio-widget_image-block img:hover {
  transform: scale(1.1) rotate(3deg);
}
.portfolio-widget__title {
  font-family: var(--font-family-base);
  color: #0A102F;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.0208333333em;
  font-size: 20px;
}
@media (min-width: 768px) {
  .portfolio-widget__title {
    font-size: 22px;
  }
}
@media (min-width: 992px) {
  .portfolio-widget__title {
    font-size: 24px;
  }
}
.portfolio-widget__title a {
  color: inherit;
}
.portfolio-widget__title a:hover {
  color: inherit;
}
.portfolio-widget__title-block {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-direction: column;
  row-gap: 10px;
}
@media (min-width: 576px) {
  .portfolio-widget__title-block {
    row-gap: 20px;
    margin-bottom: 20px;
  }
}
@media (min-width: 992px) {
  .portfolio-widget__title-block {
    flex-direction: initial;
    margin-bottom: 20px;
    column-gap: 20px;
  }
}
.portfolio-widget__category {
  font-size: 16px;
  line-height: 1.4;
  font-weight: 600;
  line-height: 1.67;
  color: #0A102F;
}
@media (min-width: 576px) {
  .portfolio-widget__category {
    font-size: 18px;
  }
}
.portfolio-widget:hover .btn-link {
  color: var(--bs-primary);
}
.portfolio-widget:hover .btn-link:after {
  left: 10px;
}
.portfolio-widget--overlay {
  position: relative;
}
.portfolio-widget--overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 24px);
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}
.portfolio-widget--overlay:hover::before {
  opacity: 1;
}
.portfolio-widget--overlay:hover .portfolio-widget__title-block {
  opacity: 1;
}
.portfolio-widget--overlay .portfolio-widget__title-block {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 40px;
  flex-direction: column;
  margin-bottom: initial;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.portfolio-widget--overlay .portfolio-widget__title-block h3,
.portfolio-widget--overlay .portfolio-widget__title-block span {
  color: #fff;
}
.portfolio-widget--shadow .portfolio-widget_image-block {
  transition: all 0.2s ease-in-out;
}
.portfolio-widget--shadow:hover .portfolio-widget_image-block {
  box-shadow: 10px 10px rgba(var(--body-color-rgb));
  border-radius: 10px;
}

/* ========== Component  : TastimonharAt(0).toUpperCase()+e.slice(1),n=et.length;n--;)if((e=et[n]+t)in tt)return e}function rt(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)(r=e[a]).style&&(o[a]=p._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&V(r)&&(o[a]=p._data(r,"olddisplay",Pe(r.nodeName)))):(i=V(r),(n&&"none"!==n||!i)&&p._data(r,"olddisplay",i?n:p.css(r,"display"))));for(a=0;a<s;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function it(e,t,n){var r=Qe.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function ot(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=p.css(e,n+U[o],!0,i)),r?("content"===n&&(a-=p.css(e,"padding"+U[o],!0,i)),"margin"!==n&&(a-=p.css(e,"border"+U[o]+"Width",!0,i))):(a+=p.css(e,"padding"+U[o],!0,i),"padding"!==n&&(a+=p.css(e,"border"+U[o]+"Width",!0,i)));return a}function at(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=ze(e),a=f.boxSizing&&"border-box"===p.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=Xe(e,t,o))<0||null==i)&&(i=e.style[t]),We.test(i))return i;r=a&&(f.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+ot(e,t,n||(a?"border":"content"),r,o)+"px"}function st(e,t,n,r,i){return new st.prototype.init(e,t,n,r,i)}p.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Xe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:f.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=p.camelCase(t),u=e.style;if(t=p.cssProps[s]||(p.cssProps[s]=nt(s)||s),a=p.cssHooks[t]||p.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t];if(!("string"===(o=typeof n)&&(i=X.exec(n))&&i[1]&&(n=Y(e,t,i),o="number"),null==n||n!=n||("number"===o&&(n+=i&&i[3]||(p.cssNumber[s]?"":"px")),f.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,r){var i,o,a,s=p.camelCase(t);return t=p.cssProps[s]||(p.cssProps[s]=nt(s)||s),(a=p.cssHooks[t]||p.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=Xe(e,t,r)),"normal"===o&&t in Ze&&(o=Ze[t]),""===n||n?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o}}),p.each(["height","width"],(function(e,t){p.cssHooks[t]={get:function(e,n,r){if(n)return Ge.test(p.css(e,"display"))&&0===e.offsetWidth?Ie(e,Ke,(function(){return at(e,t,r)})):at(e,t,r)},set:function(e,n,r){var i=r&&ze(e);return it(0,n,r?ot(e,t,r,f.boxSizing&&"border-box"===p.css(e,"boxSizing",!1,i),i):0)}}})),f.opacity||(p.cssHooks.opacity={get:function(e,t){return Je.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=p.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===p.trim(o.replace(Ye,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=Ye.test(o)?o.replace(Ye,i):o+" "+i)}}),p.cssHooks.marginRight=Ve(f.reliableMarginRight,(function(e,t){if(t)return Ie(e,{display:"inline-block"},Xe,[e,"marginRight"])})),p.cssHooks.marginLeft=Ve(f.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Xe(e,"marginLeft"))||(p.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-Ie(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})):0))+"px"})),p.each({margin:"",padding:"",border:"Width"},(function(e,t){p.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+U[r]+t]=o[r]||o[r-2]||o[0];return i}},Be.test(e)||(p.cssHooks[e+t].set=it)})),p.fn.extend({css:function(e,t){return K(this,(function(e,t,n){var r,i,o={},a=0;if(p.isArray(t)){for(r=ze(e),i=t.length;a<i;a++)o[t[a]]=p.css(e,t[a],!1,r);return o}return void 0!==n?p.style(e,t,n):p.css(e,t)}),e,t,arguments.length>1)},show:function(){return rt(this,!0)},hide:function(){return rt(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){V(this)?p(this).show():p(this).hide()}))}}),p.Tween=st,st.prototype={constructor:st,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||p.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(p.cssNumber[n]?"":"px")},cur:function(){var e=st.propHooks[this.prop];return e&&e.get?e.get(this):st.propHooks._default.get(this)},run:function(e){var t,n=st.propHooks[this.prop];return this.options.duration?this.pos=t=p.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):st.propHooks._default.set(this),this}},st.prototype.init.prototype=st.prototype,st.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=p.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){p.fx.step[e.prop]?p.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[p.cssProps[e.prop]]&&!p.cssHooks[e.prop]?e.elem[e.prop]=e.now:p.style(e.elem,e.prop,e.now+e.unit)}}},st.propHooks.scrollTop=st.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},p.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},p.fx=st.prototype.init,p.fx.step={};var ut,lt,ct=/^(?:toggle|show|hide)$/,ft=/queueHooks$/;function dt(){return e.setTimeout((function(){ut=void 0})),ut=p.now()}function pt(e,t){var n,r={height:e},i=0;for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=U[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function ht(e,t,n){for(var r,i=(gt.tweeners[t]||[]).concat(gt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function gt(e,t,n){var r,i,o=0,a=gt.prefilters.length,s=p.Deferred().always((function(){delete u.elem})),u=function(){if(i)return!1;for(var t=ut||dt(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:p.extend({},t),opts:p.extend(!0,{specialEasing:{},easing:p.easing._default},n),originalProperties:t,originalOptions:n,startTime:ut||dt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=p.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=p.camelCase(n)],o=e[n],p.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=p.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=gt.prefilters[o].call(l,e,c,l.opts))return p.isFunction(r.stop)&&(p._queueHooks(l.elem,l.opts.queue).stop=p.proxy(r.stop,r)),r;return p.map(c,ht,l),p.isFunction(l.opts.start)&&l.opts.start.call(e,l),p.fx.timer(p.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}p.Animation=p.extend(gt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return Y(n.elem,e,X.exec(t),n),n}]},tweener:function(e,t){p.isFunction(e)?(t=e,e=["*"]):e=e.match(q);for(var n,r=0,i=e.length;r<i;r++)n=e[r],gt.tweeners[n]=gt.tweeners[n]||[],gt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c=this,d={},h=e.style,g=e.nodeType&&V(e),m=p._data(e,"fxshow");for(r in n.queue||(null==(s=p._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,c.always((function(){c.always((function(){s.unqueued--,p.queue(e,"fx").length||s.empty.fire()}))}))),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],"inline"===("none"===(l=p.css(e,"display"))?p._data(e,"olddisplay")||Pe(e.nodeName):l)&&"none"===p.css(e,"float")&&(f.inlineBlockNeedsLayout&&"inline"!==Pe(e.nodeName)?h.zoom=1:h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.shrinkWrapBlocks()||c.always((function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}))),t)if(i=t[r],ct.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}d[r]=m&&m[r]||p.style(e,r)}else l=void 0;if(p.isEmptyObject(d))"inline"===("none"===l?Pe(e.nodeName):l)&&(h.display=l);else for(r in m?"hidden"in m&&(g=m.hidden):m=p._data(e,"fxshow",{}),o&&(m.hidden=!g),g?p(e).show():c.done((function(){p(e).hide()})),c.done((function(){var t;for(t in p._removeData(e,"fxshow"),d)p.style(e,t,d[t])})),d)a=ht(g?m[r]:0,r,c),r in m||(m[r]=a.start,g&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}],prefilter:function(e,t){t?gt.prefilters.unshift(e):gt.prefilters.push(e)}}),p.speed=function(e,t,n){var r=e&&"object"==typeof e?p.extend({},e):{complete:n||!n&&t||p.isFunction(e)&&e,duration:e,easing:n&&t||t&&!p.isFunction(t)&&t};return r.duration=p.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in p.fx.speeds?p.fx.speeds[r.duration]:p.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){p.isFunction(r.old)&&r.old.call(this),r.queue&&p.dequeue(this,r.queue)},r},p.fn.extend({fadeTo:function(e,t,n,r){return this.filter(V).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=p.isEmptyObject(e),o=p.speed(t,n,r),a=function(){var t=gt(this,p.extend({},e),o);(i||p._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",o=p.timers,a=p._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ft.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||p.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=p._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=p.timers,a=r?r.length:0;for(n.finish=!0,p.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),p.each(["toggle","show","hide"],(function(e,t){var n=p.fn[t];p.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(pt(t,!0),e,r,i)}})),p.each({slideDown:pt("show"),slideUp:pt("hide"),slideToggle:pt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){p.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),p.timers=[],p.fx.tick=function(){var e,t=p.timers,n=0;for(ut=p.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||p.fx.stop(),ut=void 0},p.fx.timer=function(e){p.timers.push(e),e()?p.fx.start():p.timers.pop()},p.fx.interval=13,p.fx.start=function(){lt||(lt=e.setInterval(p.fx.tick,p.fx.interval))},p.fx.stop=function(){e.clearInterval(lt),lt=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fn.delay=function(t,n){return t=p.fx&&p.fx.speeds[t]||t,n=n||"fx",this.queue(n,(function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}}))},function(){var e,t=r.createElement("input"),n=r.createElement("div"),i=r.createElement("select"),o=i.appendChild(r.createElement("option"));(n=r.createElement("div")).setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=n.getElementsByTagName("a")[0],t.setAttribute("type","checkbox"),n.appendChild(t),(e=n.getElementsByTagName("a")[0]).style.cssText="top:1px",f.getSetAttribute="t"!==n.className,f.style=/top/.test(e.getAttribute("style")),f.hrefNormalized="/a"===e.getAttribute("href"),f.checkOn=!!t.value,f.optSelected=o.selected,f.enctype=!!r.createElement("form").enctype,i.disabled=!0,f.optDisabled=!o.disabled,(t=r.createElement("input")).setAttribute("value",""),f.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),f.radioValue="t"===t.value}();var mt=/\r/g,vt=/[\x20\t\r\n\f]+/g;p.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=p.isFunction(e),this.each((function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,p(this).val()):e)?i="":"number"==typeof i?i+="":p.isArray(i)&&(i=p.map(i,(function(e){return null==e?"":e+""}))),(t=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=p.valHooks[i.type]||p.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(mt,""):null==n?"":n:void 0}}),p.extend({valHooks:{option:{get:function(e){var t=p.find.attr(e,"value");return null!=t?t:p.trim(p.text(e)).replace(vt," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(((n=r[u]).selected||u===i)&&(f.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!p.nodeName(n.parentNode,"optgroup"))){if(t=p(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=p.makeArray(t),a=i.length;a--;)if(r=i[a],p.inArray(p.valHooks.option.get(r),o)>-1)try{r.selected=n=!0}catch(e){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),p.each(["radio","checkbox"],(function(){p.valHooks[this]={set:function(e,t){if(p.isArray(t))return e.checked=p.inArray(p(e).val(),t)>-1}},f.checkOn||(p.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}));var yt,xt,bt=p.expr.attrHandle,wt=/^(?:checked|selected)$/i,Tt=f.getSetAttribute,Ct=f.input;p.fn.extend({attr:function(e,t){return K(this,p.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){p.removeAttr(this,e)}))}}),p.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?p.prop(e,t,n):(1===o&&p.isXMLDoc(e)||(t=t.toLowerCase(),i=p.attrHooks[t]||(p.expr.match.bool.test(t)?xt:yt)),void 0!==n?null===n?void p.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=p.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!f.radioValue&&"radio"===t&&p.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(q);if(o&&1===e.nodeType)for(;n=o[i++];)r=p.propFix[n]||n,p.expr.match.bool.test(n)?Ct&&Tt||!wt.test(n)?e[r]=!1:e[p.camelCase("default-"+n)]=e[r]=!1:p.attr(e,n,""),e.removeAttribute(Tt?n:r)}}),xt={set:function(e,t,n){return!1===t?p.removeAttr(e,n):Ct&&Tt||!wt.test(n)?e.setAttribute(!Tt&&p.propFix[n]||n,n):e[p.camelCase("default-"+n)]=e[n]=!0,n}},p.each(p.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=bt[t]||p.find.attr;Ct&&Tt||!wt.test(t)?bt[t]=function(e,t,r){var i,o;return r||(o=bt[t],bt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,bt[t]=o),i}:bt[t]=function(e,t,n){if(!n)return e[p.camelCase("default-"+t)]?t.toLowerCase():null}})),Ct&&Tt||(p.attrHooks.value={set:function(e,t,n){if(!p.nodeName(e,"input"))return yt&&yt.set(e,t,n);e.defaultValue=t}}),Tt||(yt={set:function(e,t,n){var r=e.getAttributeNode(n);if(r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n))return t}},bt.id=bt.name=bt.coords=function(e,t,n){var r;if(!n)return(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},p.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:yt.set},p.attrHooks.contenteditable={set:function(e,t,n){yt.set(e,""!==t&&t,n)}},p.each(["width","height"],(function(e,t){p.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}}))),f.style||(p.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Et=/^(?:input|select|textarea|button|object)$/i,Nt=/^(?:a|area)$/i;p.fn.extend({prop:function(e,t){return K(this,p.prop,e,t,arguments.length>1)},removeProp:function(e){return e=p.propFix[e]||e,this.each((function(){try{this[e]=void 0,delete this[e]}catch(e){}}))}}),p.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&p.isXMLDoc(e)||(t=p.propFix[t]||t,i=p.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=p.find.attr(e,"tabindex");return t?parseInt(t,10):Et.test(e.nodeName)||Nt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.hrefNormalized||p.each(["href","src"],(function(e,t){p.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),f.optSelected||(p.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),p.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){p.propFix[this.toLowerCase()]=this})),f.enctype||(p.propFix.enctype="encoding");var kt=/[\t\r\n\f]/g;function St(e){return p.attr(e,"class")||""}p.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(p.isFunction(e))return this.each((function(t){p(this).addClass(e.call(this,t,St(this)))}));if("string"==typeof e&&e)for(t=e.match(q)||[];n=this[u++];)if(i=St(n),r=1===n.nodeType&&(" "+i+" ").replace(kt," ")){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=p.trim(r))&&p.attr(n,"class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(p.isFunction(e))return this.each((function(t){p(this).removeClass(e.call(this,t,St(this)))}));if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(q)||[];n=this[u++];)if(i=St(n),r=1===n.nodeType&&(" "+i+" ").replace(kt," ")){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=p.trim(r))&&p.attr(n,"class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):p.isFunction(e)?this.each((function(n){p(this).toggleClass(e.call(this,n,St(this),t),t)})):this.each((function(){var t,r,i,o;if("string"===n)for(r=0,i=p(this),o=e.match(q)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||((t=St(this))&&p._data(this,"__className__",t),p.attr(this,"class",t||!1===e?"":p._data(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+St(n)+" ").replace(kt," ").indexOf(t)>-1)return!0;return!1}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),(function(e,t){p.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})),p.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var At=e.location,Dt=p.now(),jt=/\?/,Lt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;p.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=p.trim(t+"");return i&&!p.trim(i.replace(Lt,(function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")})))?Function("return "+i)():p.error("Invalid JSON: "+t)},p.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{e.DOMParser?n=(new e.DOMParser).parseFromString(t,"text/xml"):((n=new e.ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(t))}catch(e){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||p.error("Invalid XML: "+t),n};var Ht=/#.*$/,qt=/([?&])_=[^&]*/,_t=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ft=/^(?:GET|HEAD)$/,Mt=/^\/\//,Ot=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Rt={},Pt={},Bt="*/".concat("*"),Wt=At.href,It=Ot.exec(Wt.toLowerCase())||[];function $t(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(q)||[];if(p.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function zt(e,t,n,r){var i={},o=e===Pt;function a(s){var u;return i[s]=!0,p.each(e[s]||[],(function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)})),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Xt(e,t){var n,r,i=p.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&p.extend(!0,e,n),e}function Ut(e){return e.style&&e.style.display||p.css(e,"display")}p.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Wt,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(It[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Bt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Xt(Xt(e,p.ajaxSettings),t):Xt(p.ajaxSettings,e)},ajaxPrefilter:$t(Rt),ajaxTransport:$t(Pt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,i,o,a,s,u,l,c,f=p.ajaxSetup({},n),d=f.context||f,h=f.context&&(d.nodeType||d.jquery)?p(d):p.event,g=p.Deferred(),m=p.Callbacks("once memory"),v=f.statusCode||{},y={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c)for(c={};t=_t.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)v[t]=[v[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return l&&l.abort(t),C(0,t),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,f.url=((t||f.url||Wt)+"").replace(Ht,"").replace(Mt,It[1]+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=p.trim(f.dataType||"*").toLowerCase().match(q)||[""],null==f.crossDomain&&(r=Ot.exec(f.url.toLowerCase()),f.crossDomain=!(!r||r[1]===It[1]&&r[2]===It[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(It[3]||("http:"===It[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=p.param(f.data,f.traditional)),zt(Rt,f,n,T),2===b)return T;for(i in(u=p.event&&f.global)&&0==p.active++&&p.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Ft.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(jt.test(o)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=qt.test(o)?o.replace(qt,"$1_="+Dt++):o+(jt.test(o)?"&":"?")+"_="+Dt++)),f.ifModified&&(p.lastModified[o]&&T.setRequestHeader("If-Modified-Since",p.lastModified[o]),p.etag[o]&&T.setRequestHeader("If-None-Match",p.etag[o])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&T.setRequestHeader("Content-Type",f.contentType),T.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Bt+"; q=0.01":""):f.accepts["*"]),f.headers)T.setRequestHeader(i,f.headers[i]);if(f.beforeSend&&(!1===f.beforeSend.call(d,T,f)||2===b))return T.abort();for(i in w="abort",{success:1,error:1,complete:1})T[i](f[i]);if(l=zt(Pt,f,n,T)){if(T.readyState=1,u&&h.trigger("ajaxSend",[T,f]),2===b)return T;f.async&&f.timeout>0&&(s=e.setTimeout((function(){T.abort("timeout")}),f.timeout));try{b=1,l.send(y,C)}catch(e){if(!(b<2))throw e;C(-1,e)}}else C(-1,"No Transport");function C(t,n,r,i){var c,y,x,w,C,E=n;2!==b&&(b=2,s&&e.clearTimeout(s),l=void 0,a=i||"",T.readyState=t>0?4:0,c=t>=200&&t<300||304===t,r&&(w=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){u.unshift(a);break}if(u[0]in n)o=u[0];else{for(a in n){if(!u[0]||e.converters[a+" "+u[0]]){o=a;break}r||(r=a)}o=o||r}if(o)return o!==u[0]&&u.unshift(o),n[o]}(f,T,r)),w=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(f,w,T,c),c?(f.ifModified&&((C=T.getResponseHeader("Last-Modified"))&&(p.lastModified[o]=C),(C=T.getResponseHeader("etag"))&&(p.etag[o]=C)),204===t||"HEAD"===f.type?E="nocontent":304===t?E="notmodified":(E=w.state,y=w.data,c=!(x=w.error))):(x=E,!t&&E||(E="error",t<0&&(t=0))),T.status=t,T.statusText=(n||E)+"",c?g.resolveWith(d,[y,E,T]):g.rejectWith(d,[T,E,x]),T.statusCode(v),v=void 0,u&&h.trigger(c?"ajaxSuccess":"ajaxError",[T,f,c?y:x]),m.fireWith(d,[T,E]),u&&(h.trigger("ajaxComplete",[T,f]),--p.active||p.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return p.get(e,t,n,"json")},getScript:function(e,t){return p.get(e,void 0,t,"script")}}),p.each(["get","post"],(function(e,t){p[t]=function(e,n,r,i){return p.isFunction(n)&&(i=i||r,r=n,n=void 0),p.ajax(p.extend({url:e,type:t,dataType:i,data:n,success:r},p.isPlainObject(e)&&e))}})),p._evalUrl=function(e){return p.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},p.fn.extend({wrapAll:function(e){if(p.isFunction(e))return this.each((function(t){p(this).wrapAll(e.call(this,t))}));if(this[0]){var t=p(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e})).append(this)}return this},wrapInner:function(e){return p.isFunction(e)?this.each((function(t){p(this).wrapInner(e.call(this,t))})):this.each((function(){var t=p(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=p.isFunction(e);return this.each((function(n){p(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(){return this.parent().each((function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)})).end()}}),p.expr.filters.hidden=function(e){return f.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:function(e){if(!p.contains(e.ownerDocument||r,e))return!0;for(;e&&1===e.nodeType;){if("none"===Ut(e)||"hidden"===e.type)return!0;e=e.parentNode}return!1}(e)},p.expr.filters.visible=function(e){return!p.expr.filters.hidden(e)};var Vt=/%20/g,Yt=/\[\]$/,Jt=/\r?\n/g,Gt=/^(?:submit|button|image|reset|file)$/i,Qt=/^(?:input|select|textarea|keygen)/i;function Kt(e,t,n,r){var i;if(p.isArray(t))p.each(t,(function(t,i){n||Yt.test(e)?r(e,i):Kt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}));else if(n||"object"!==p.type(t))r(e,t);else for(i in t)Kt(e+"["+i+"]",t[i],n,r)}p.param=function(e,t){var n,r=[],i=function(e,t){t=p.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=p.ajaxSettings&&p.ajaxSettings.traditional),p.isArray(e)||e.jquery&&!p.isPlainObject(e))p.each(e,(function(){i(this.name,this.value)}));else for(n in e)Kt(n,e[n],t,i);return r.join("&").replace(Vt,"+")},p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=p.prop(this,"elements");return e?p.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!p(this).is(":disabled")&&Qt.test(this.nodeName)&&!Gt.test(e)&&(this.checked||!Z.test(e))})).map((function(e,t){var n=p(this).val();return null==n?null:p.isArray(n)?p.map(n,(function(e){return{name:t.name,value:e.replace(Jt,"\r\n")}})):{name:t.name,value:n.replace(Jt,"\r\n")}})).get()}}),p.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return this.isLocal?rn():r.documentMode>8?nn():/^(get|post|head|put|delete|options)$/i.test(this.type)&&nn()||rn()}:nn;var Zt=0,en={},tn=p.ajaxSettings.xhr();function nn(){try{return new e.XMLHttpRequest}catch(e){}}function rn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}e.attachEvent&&e.attachEvent("onunload",(function(){for(var e in en)en[e](void 0,!0)})),f.cors=!!tn&&"withCredentials"in tn,(tn=f.ajax=!!tn)&&p.ajaxTransport((function(t){var n;if(!t.crossDomain||f.cors)return{send:function(r,i){var o,a=t.xhr(),s=++Zt;if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)void 0!==r[o]&&a.setRequestHeader(o,r[o]+"");a.send(t.hasContent&&t.data||null),n=function(e,r){var o,u,l;if(n&&(r||4===a.readyState))if(delete en[s],n=void 0,a.onreadystatechange=p.noop,r)4!==a.readyState&&a.abort();else{l={},o=a.status,"string"==typeof a.responseText&&(l.text=a.responseText);try{u=a.statusText}catch(e){u=""}o||!t.isLocal||t.crossDomain?1223===o&&(o=204):o=l.text?200:404}l&&i(o,u,l,a.getAllResponseHeaders())},t.async?4===a.readyState?e.setTimeout(n):a.onreadystatechange=en[s]=n:n()},abort:function(){n&&n(void 0,!0)}}})),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return p.globalEval(e),e}}}),p.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)})),p.ajaxTransport("script",(function(e){if(e.crossDomain){var t,n=r.head||p("head")[0]||r.documentElement;return{send:function(i,o){(t=r.createElement("script")).async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||o(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}}));var on=[],an=/(=)\?(?=&|$)|\?\?/;p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=on.pop()||p.expando+"_"+Dt++;return this[e]=!0,e}}),p.ajaxPrefilter("json jsonp",(function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(an.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&an.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=p.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(an,"$1"+i):!1!==t.jsonp&&(t.url+=(jt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||p.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always((function(){void 0===o?p(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,on.push(i)),a&&p.isFunction(o)&&o(a[0]),a=o=void 0})),"script"})),p.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||r;var i=C.exec(e),o=!n&&[];return i?[t.createElement(i[1])]:(i=fe([e],t,o),o&&o.length&&p(o).remove(),p.merge([],i.childNodes))};var sn=p.fn.load;function un(e){return p.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}p.fn.load=function(e,t,n){if("string"!=typeof e&&sn)return sn.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=p.trim(e.slice(s,e.length)),e=e.slice(0,s)),p.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&p.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){o=arguments,a.html(r?p("<div>").append(p.parseHTML(e)).find(r):e)})).always(n&&function(e,t){a.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},p.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){p.fn[t]=function(e){return this.on(t,e)}})),p.expr.filters.animated=function(e){return p.grep(p.timers,(function(t){return e===t.elem})).length},p.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=p.css(e,"position"),c=p(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=p.css(e,"top"),u=p.css(e,"left"),("absolute"===l||"fixed"===l)&&p.inArray("auto",[o,u])>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),p.isFunction(t)&&(t=t.call(e,n,p.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},p.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){p.offset.setOffset(this,e,t)}));var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(t=o.documentElement,p.contains(t,i)?(void 0!==i.getBoundingClientRect&&(r=i.getBoundingClientRect()),n=un(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===p.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),p.nodeName(e[0],"html")||(n=e.offset()),n.top+=p.css(e[0],"borderTopWidth",!0),n.left+=p.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-p.css(r,"marginTop",!0),left:t.left-n.left-p.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&!p.nodeName(e,"html")&&"static"===p.css(e,"position");)e=e.offsetParent;return e||$e}))}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n=/Y/.test(t);p.fn[e]=function(r){return K(this,(function(e,r,i){var o=un(e);if(void 0===i)return o?t in o?o[t]:o.document.documentElement[r]:e[r];o?o.scrollTo(n?p(o).scrollLeft():i,n?i:p(o).scrollTop()):e[r]=i}),e,r,arguments.length,null)}})),p.each(["top","left"],(function(e,t){p.cssHooks[t]=Ve(f.pixelPosition,(function(e,n){if(n)return n=Xe(e,t),We.test(n)?p(e).position()[t]+"px":n}))})),p.each({Height:"height",Width:"width"},(function(e,t){p.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){p.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===i?"margin":"border");return K(this,(function(t,n,r){var i;return p.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?p.css(t,n,a):p.style(t,n,r,a)}),t,o?r:void 0,o,null)}}))})),p.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),p.fn.size=function(){return this.length},p.fn.andSelf=p.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],(function(){return p}));var ln=e.jQuery,cn=e.$;return p.noConflict=function(t){return e.$===p&&(e.$=cn),t&&e.jQuery===p&&(e.jQuery=ln),p},t||(e.jQuery=e.$=p),p}));