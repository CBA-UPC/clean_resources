"use strict";(globalThis.webpackChunkweb=globalThis.webpackChunkweb||[]).push([[1873],{1873:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});const b={auth:s(5072),app:s(3106),firestore:s(3953)}}}]);tstrap/blob/main/LICENSE)
 */
@import url("bootstrap-reboot.css");
@import url("bootstrap-grid.css");
/*  $gray-header: #d9d9d9!default; */
.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto; }

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px; } }

@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px; } }

@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px; } }

@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px; } }

@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px; } }

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5); }
  .row > * {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y); }

.col {
  flex: 1 0 0%; }

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto; }

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%; }

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%; }

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%; }

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%; }

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%; }

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%; }

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%; }
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto; }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%; }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%; }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%; }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%; }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%; }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%; } }

@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%; }
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto; }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%; }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%; }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%; }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%; }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%; }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%; } }

@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%; }
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto; }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%; }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%; }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%; }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%; }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%; }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%; } }

@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%; }
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto; }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%; }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%; }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%; }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%; }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%; }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%; } }

@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%; }
  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto; }
  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%; }
  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%; }
  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%; }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%; }
  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%; }
  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%; } }

.col-auto {
  flex: 0 0 auto;
  width: auto; }

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%; }

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%; }

.col-3 {
  flex: 0 0 auto;
  width: 25%; }

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%; }

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%; }

.col-6 {
  flex: 0 0 auto;
  width: 50%; }

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%; }

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%; }

.col-9 {
  flex: 0 0 auto;
  width: 75%; }

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%; }

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%; }

.col-12 {
  flex: 0 0 auto;
  width: 100%; }

.offset-1 {
  margin-left: 8.33333333%; }

.offset-2 {
  margin-left: 16.66666667%; }

.offset-3 {
  margin-left: 25%; }

.offset-4 {
  margin-left: 33.33333333%; }

.offset-5 {
  margin-left: 41.66666667%; }

.offset-6 {
  margin-left: 50%; }

.offset-7 {
  margin-left: 58.33333333%; }

.offset-8 {
  margin-left: 66.66666667%; }

.offset-9 {
  margin-left: 75%; }

.offset-10 {
  margin-left: 83.33333333%; }

.offset-11 {
  margin-left: 91.66666667%; }

.g-0,
.gx-0 {
  --bs-gutter-x: 0; }

.g-0,
.gy-0 {
  --bs-gutter-y: 0; }

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem; }

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem; }

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem; }

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem; }

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem; }

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem; }

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem; }

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem; }

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem; }

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem; }

@media (min-width: 576px) {
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto; }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%; }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%; }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%; }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%; }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%; }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%; }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%; }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%; }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%; }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%; }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%; }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%; }
  .offset-sm-0 {
    margin-left: 0; }
  .offset-sm-1 {
    margin-left: 8.33333333%; }
  .offset-sm-2 {
    margin-left: 16.66666667%; }
  .offset-sm-3 {
    margin-left: 25%; }
  .offset-sm-4 {
    margin-left: 33.33333333%; }
  .offset-sm-5 {
    margin-left: 41.66666667%; }
  .offset-sm-6 {
    margin-left: 50%; }
  .offset-sm-7 {
    margin-left: 58.33333333%; }
  .offset-sm-8 {
    margin-left: 66.66666667%; }
  .offset-sm-9 {
    margin-left: 75%; }
  .offset-sm-10 {
    margin-left: 83.33333333%; }
  .offset-sm-11 {
    margin-left: 91.66666667%; }
  .g-sm-0,
.gx-sm-0 {
    --bs-gutter-x: 0; }
  .g-sm-0,
.gy-sm-0 {
    --bs-gutter-y: 0; }
  .g-sm-1,
.gx-sm-1 {
    --bs-gutter-x: 0.25rem; }
  .g-sm-1,
.gy-sm-1 {
    --bs-gutter-y: 0.25rem; }
  .g-sm-2,
.gx-sm-2 {
    --bs-gutter-x: 0.5rem; }
  .g-sm-2,
.gy-sm-2 {
    --bs-gutter-y: 0.5rem; }
  .g-sm-3,
.gx-sm-3 {
    --bs-gutter-x: 1rem; }
  .g-sm-3,
.gy-sm-3 {
    --bs-gutter-y: 1rem; }
  .g-sm-4,
.gx-sm-4 {
    --bs-gutter-x: 1.5rem; }
  .g-sm-4,
.gy-sm-4 {
    --bs-gutter-y: 1.5rem; }
  .g-sm-5,
.gx-sm-5 {
    --bs-gutter-x: 3rem; }
  .g-sm-5,
.gy-sm-5 {
    --bs-gutter-y: 3rem; } }

@media (min-width: 768px) {
  .col-md-auto {
    flex: 0 0 auto;
    width: auto; }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%; }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%; }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%; }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%; }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%; }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%; }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%; }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%; }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%; }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%; }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%; }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%; }
  .offset-md-0 {
    margin-left: 0; }
  .offset-md-1 {
    margin-left: 8.33333333%; }
  .offset-md-2 {
    margin-left: 16.66666667%; }
  .offset-md-3 {
    margin-left: 25%; }
  .offset-md-4 {
    margin-left: 33.33333333%; }
  .offset-md-5 {
    margin-left: 41.66666667%; }
  .offset-md-6 {
    margin-left: 50%; }
  .offset-md-7 {
    margin-left: 58.33333333%; }
  .offset-md-8 {
    margin-left: 66.66666667%; }
  .offset-md-9 {
    margin-left: 75%; }
  .offset-md-10 {
    margin-left: 83.33333333%; }
  .offset-md-11 {
    margin-left: 91.66666667%; }
  .g-md-0,
.gx-md-0 {
    --bs-gutter-x: 0; }
  .g-md-0,
.gy-md-0 {
    --bs-gutter-y: 0; }
  .g-md-1,
.gx-md-1 {
    --bs-gutter-x: 0.25rem; }
  .g-md-1,
.gy-md-1 {
    --bs-gutter-y: 0.25rem; }
  .g-md-2,
.gx-md-2 {
    --bs-gutter-x: 0.5rem; }
  .g-md-2,
.gy-md-2 {
    --bs-gutter-y: 0.5rem; }
  .g-md-3,
.gx-md-3 {
    --bs-gutter-x: 1rem; }
  .g-md-3,
.gy-md-3 {
    --bs-gutter-y: 1rem; }
  .g-md-4,
.gx-md-4 {
    --bs-gutter-x: 1.5rem; }
  .g-md-4,
.gy-md-4 {
    --bs-gutter-y: 1.5rem; }
  .g-md-5,
.gx-md-5 {
    --bs-gutter-x: 3rem; }
  .g-md-5,
.gy-md-5 {
    --bs-gutter-y: 3rem; } }

@media (min-width: 992px) {
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto; }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%; }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%; }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%; }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%; }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%; }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%; }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%; }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%; }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%; }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%; }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%; }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%; }
  .offset-lg-0 {
    margin-left: 0; }
  .offset-lg-1 {
    margin-left: 8.33333333%; }
  .offset-lg-2 {
    margin-left: 16.66666667%; }
  .offset-lg-3 {
    margin-left: 25%; }
  .offset-lg-4 {
    margin-left: 33.33333333%; }
  .offset-lg-5 {
    margin-left: 41.66666667%; }
  .offset-lg-6 {
    margin-left: 50%; }
  .offset-lg-7 {
    margin-left: 58.33333333%; }
  .offset-lg-8 {
    margin-left: 66.66666667%; }
  .offset-lg-9 {
    margin-left: 75%; }
  .offset-lg-10 {
    margin-left: 83.33333333%; }
  .offset-lg-11 {
    margin-left: 91.66666667%; }
  .g-lg-0,
.gx-lg-0 {
    --bs-gutter-x: 0; }
  .g-lg-0,
.gy-lg-0 {
    --bs-gutter-y: 0; }
  .g-lg-1,
.gx-lg-1 {
    --bs-gutter-x: 0.25rem; }
  .g-lg-1,
.gy-lg-1 {
    --bs-gutter-y: 0.25rem; }
  .g-lg-2,
.gx-lg-2 {
    --bs-gutter-x: 0.5rem; }
  .g-lg-2,
.gy-lg-2 {
    --bs-gutter-y: 0.5rem; }
  .g-lg-3,
.gx-lg-3 {
    --bs-gutter-x: 1rem; }
  .g-lg-3,
.gy-lg-3 {
    --bs-gutter-y: 1rem; }
  .g-lg-4,
.gx-lg-4 {
    --bs-gutter-x: 1.5rem; }
  .g-lg-4,
.gy-lg-4 {
    --bs-gutter-y: 1.5rem; }
  .g-lg-5,
.gx-lg-5 {
    --bs-gutter-x: 3rem; }
  .g-lg-5,
.gy-lg-5 {
    --bs-gutter-y: 3rem; } }

@media (min-width: 1200px) {
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto; }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%; }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%; }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%; }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%; }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%; }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%; }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%; }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%; }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%; }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%; }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%; }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%; }
  .offset-xl-0 {
    margin-left: 0; }
  .offset-xl-1 {
    margin-left: 8.33333333%; }
  .offset-xl-2 {
    margin-left: 16.66666667%; }
  .offset-xl-3 {
    margin-left: 25%; }
  .offset-xl-4 {
    margin-left: 33.33333333%; }
  .offset-xl-5 {
    margin-left: 41.66666667%; }
  .offset-xl-6 {
    margin-left: 50%; }
  .offset-xl-7 {
    margin-left: 58.33333333%; }
  .offset-xl-8 {
    margin-left: 66.66666667%; }
  .offset-xl-9 {
    margin-left: 75%; }
  .offset-xl-10 {
    margin-left: 83.33333333%; }
  .offset-xl-11 {
    margin-left: 91.66666667%; }
  .g-xl-0,
.gx-xl-0 {
    --bs-gutter-x: 0; }
  .g-xl-0,
.gy-xl-0 {
    --bs-gutter-y: 0; }
  .g-xl-1,
.gx-xl-1 {
    --bs-gutter-x: 0.25rem; }
  .g-xl-1,
.gy-xl-1 {
    --bs-gutter-y: 0.25rem; }
  .g-xl-2,
.gx-xl-2 {
    --bs-gutter-x: 0.5rem; }
  .g-xl-2,
.gy-xl-2 {
    --bs-gutter-y: 0.5rem; }
  .g-xl-3,
.gx-xl-3 {
    --bs-gutter-x: 1rem; }
  .g-xl-3,
.gy-xl-3 {
    --bs-gutter-y: 1rem; }
  .g-xl-4,
.gx-xl-4 {
    --bs-gutter-x: 1.5rem; }
  .g-xl-4,
.gy-xl-4 {
    --bs-gutter-y: 1.5rem; }
  .g-xl-5,
.gx-xl-5 {
    --bs-gutter-x: 3rem; }
  .g-xl-5,
.gy-xl-5 {
    --bs-gutter-y: 3rem; } }

@media (min-width: 1400px) {
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto; }
  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%; }
  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%; }
  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%; }
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%; }
  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%; }
  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%; }
  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%; }
  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%; }
  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%; }
  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%; }
  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%; }
  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%; }
  .offset-xxl-0 {
    margin-left: 0; }
  .offset-xxl-1 {
    margin-left: 8.33333333%; }
  .offset-xxl-2 {
    margin-left: 16.66666667%; }
  .offset-xxl-3 {
    margin-left: 25%; }
  .offset-xxl-4 {
    margin-left: 33.33333333%; }
  .offset-xxl-5 {
    margin-left: 41.66666667%; }
  .offset-xxl-6 {
    margin-left: 50%; }
  .offset-xxl-7 {
    margin-left: 58.33333333%; }
  .offset-xxl-8 {
    margin-left: 66.66666667%; }
  .offset-xxl-9 {
    margin-left: 75%; }
  .offset-xxl-10 {
    margin-left: 83.33333333%; }
  .offset-xxl-11 {
    margin-left: 91.66666667%; }
  .g-xxl-0,
.gx-xxl-0 {
    --bs-gutter-x: 0; }
  .g-xxl-0,
.gy-xxl-0 {
    --bs-gutter-y: 0; }
  .g-xxl-1,
.gx-xxl-1 {
    --bs-gutter-x: 0.25rem; }
  .g-xxl-1,
.gy-xxl-1 {
    --bs-gutter-y: 0.25rem; }
  .g-xxl-2,
.gx-xxl-2 {
    --bs-gutter-x: 0.5rem; }
  .g-xxl-2,
.gy-xxl-2 {
    --bs-gutter-y: 0.5rem; }
  .g-xxl-3,
.gx-xxl-3 {
    --bs-gutter-x: 1rem; }
  .g-xxl-3,
.gy-xxl-3 {
    --bs-gutter-y: 1rem; }
  .g-xxl-4,
.gx-xxl-4 {
    --bs-gutter-x: 1.5rem; }
  .g-xxl-4,
.gy-xxl-4 {
    --bs-gutter-y: 1.5rem; }
  .g-xxl-5,
.gx-xxl-5 {
    --bs-gutter-x: 3rem; }
  .g-xxl-5,
.gy-xxl-5 {
    --bs-gutter-y: 3rem; } }

.d-inline {
  display: inline !important; }

.d-inline-block {
  display: inline-block !important; }

.d-block {
  display: block !important; }

.d-grid {
  display: grid !important; }

.d-table {
  display: table !important; }

.d-table-row {
  display: table-row !important; }

.d-table-cell {
  display: table-cell !important; }

.d-flex {
  display: flex !important; }

.d-inline-flex {
  display: inline-flex !important; }

.d-none {
  display: none !important; }

.flex-fill {
  flex: 1 1 auto !important; }

.flex-row {
  flex-direction: row !important; }

.flex-column {
  flex-direction: column !important; }

.flex-row-reverse {
  flex-direction: row-reverse !important; }

.flex-column-reverse {
  flex-direction: column-reverse !important; }

.flex-grow-0 {
  flex-grow: 0 !important; }

.flex-grow-1 {
  flex-grow: 1 !important; }

.flex-shrink-0 {
  flex-shrink: 0 !important; }

.flex-shrink-1 {
  flex-shrink: 1 !important; }

.flex-wrap {
  flex-wrap: wrap !important; }

.flex-nowrap {
  flex-wrap: nowrap !important; }

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important; }

.justify-content-start {
  justify-content: flex-start !important; }

.justify-content-end {
  justify-content: flex-end !important; }

.justify-content-center {
  justify-content: center !important; }

.justify-content-between {
  justify-content: space-between !important; }

.justify-content-around {
  justify-content: space-around !important; }

.justify-content-evenly {
  justify-content: space-evenly !important; }

.align-items-start {
  align-items: flex-start !important; }

.align-items-end {
  align-items: flex-end !important; }

.align-items-center {
  align-items: center !important; }

.align-items-baseline {
  align-items: baseline !important; }

.align-items-stretch {
  align-items: stretch !important; }

.align-content-start {
  align-content: flex-start !important; }

.align-content-end {
  align-content: flex-end !important; }

.align-content-center {
  align-content: center !important; }

.align-content-between {
  align-content: space-between !important; }

.align-content-around {
  align-content: space-around !important; }

.align-content-stretch {
  align-content: stretch !important; }

.align-self-auto {
  align-self: auto !important; }

.align-self-start {
  align-self: flex-start !important; }

.align-self-end {
  align-self: flex-end !important; }

.align-self-center {
  align-self: center !important; }

.align-self-baseline {
  align-self: baseline !important; }

.align-self-stretch {
  align-self: stretch !important; }

.order-first {
  order: -1 !important; }

.order-0 {
  order: 0 !important; }

.order-1 {
  order: 1 !important; }

.order-2 {
  order: 2 !important; }

.order-3 {
  order: 3 !important; }

.order-4 {
  order: 4 !important; }

.order-5 {
  order: 5 !important; }

.order-last {
  order: 6 !important; }

.m-0 {
  margin: 0 !important; }

.m-1 {
  margin: 0.25rem !important; }

.m-2 {
  margin: 0.5rem !important; }

.m-3 {
  margin: 1rem !important; }

.m-4 {
  margin: 1.5rem !important; }

.m-5 {
  margin: 3rem !important; }

.m-auto {
  margin: auto !important; }

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important; }

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important; }

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important; }

.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important; }

.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important; }

.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important; }

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important; }

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important; }

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important; }

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important; }

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important; }

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important; }

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important; }

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important; }

.mt-0 {
  margin-top: 0 !important; }

.mt-1 {
  margin-top: 0.25rem !important; }

.mt-2 {
  margin-top: 0.5rem !important; }

.mt-3 {
  margin-top: 1rem !important; }

.mt-4 {
  margin-top: 1.5rem !important; }

.mt-5 {
  margin-top: 3rem !important; }

.mt-auto {
  margin-top: auto !important; }

.me-0 {
  margin-right: 0 !important; }

.me-1 {
  margin-right: 0.25rem !important; }

.me-2 {
  margin-right: 0.5rem !important; }

.me-3 {
  margin-right: 1rem !important; }

.me-4 {
  margin-right: 1.5rem !important; }

.me-5 {
  margin-right: 3rem !important; }

.me-auto {
  margin-right: auto !important; }

.mb-0 {
  margin-bottom: 0 !important; }

.mb-1 {
  margin-bottom: 0.25rem !important; }

.mb-2 {
  margin-bottom: 0.5rem !important; }

.mb-3 {
  margin-bottom: 1rem !important; }

.mb-4 {
  margin-bottom: 1.5rem !important; }

.mb-5 {
  margin-bottom: 3rem !important; }

.mb-auto {
  margin-bottom: auto !important; }

.ms-0 {
  margin-left: 0 !important; }

.ms-1 {
  margin-left: 0.25rem !important; }

.ms-2 {
  margin-left: 0.5rem !important; }

.ms-3 {
  margin-left: 1rem !important; }

.ms-4 {
  margin-left: 1.5rem !important; }

.ms-5 {
  margin-left: 3rem !important; }

.ms-auto {
  margin-left: auto !important; }

.p-0 {
  padding: 0 !important; }

.p-1 {
  padding: 0.25rem !important; }

.p-2 {
  padding: 0.5rem !important; }

.p-3 {
  padding: 1rem !important; }

.p-4 {
  padding: 1.5rem !important; }

.p-5 {
  padding: 3rem !important; }

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important; }

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important; }

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important; }

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important; }

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important; }

.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important; }

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important; }

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important; }

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important; }

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important; }

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important; }

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important; }

.pt-0 {
  padding-top: 0 !important; }

.pt-1 {
  padding-top: 0.25rem !important; }

.pt-2 {
  padding-top: 0.5rem !important; }

.pt-3 {
  padding-top: 1rem !important; }

.pt-4 {
  padding-top: 1.5rem !important; }

.pt-5 {
  padding-top: 3rem !important; }

.pe-0 {
  padding-right: 0 !important; }

.pe-1 {
  padding-right: 0.25rem !important; }

.pe-2 {
  padding-right: 0.5rem !important; }

.pe-3 {
  padding-right: 1rem !important; }

.pe-4 {
  padding-right: 1.5rem !important; }

.pe-5 {
  padding-right: 3rem !important; }

.pb-0 {
  padding-bottom: 0 !important; }

.pb-1 {
  padding-bottom: 0.25rem !important; }

.pb-2 {
  padding-bottom: 0.5rem !important; }

.pb-3 {
  padding-bottom: 1rem !important; }

.pb-4 {
  padding-bottom: 1.5rem !important; }

.pb-5 {
  padding-bottom: 3rem !important; }

.ps-0 {
  padding-left: 0 !important; }

.ps-1 {
  padding-left: 0.25rem !important; }

.ps-2 {
  padding-left: 0.5rem !important; }

.ps-3 {
  padding-left: 1rem !important; }

.ps-4 {
  padding-left: 1.5rem !important; }

.ps-5 {
  padding-left: 3rem !important; }

@media (min-width: 576px) {
  .d-sm-inline {
    display: inline !important; }
  .d-sm-inline-block {
    display: inline-block !important; }
  .d-sm-block {
    display: block !important; }
  .d-sm-grid {
    display: grid !important; }
  .d-sm-table {
    display: table !important; }
  .d-sm-table-row {
    display: table-row !important; }
  .d-sm-table-cell {
    display: table-cell !important; }
  .d-sm-flex {
    display: flex !important; }
  .d-sm-inline-flex {
    display: inline-flex !important; }
  .d-sm-none {
    display: none !important; }
  .flex-sm-fill {
    flex: 1 1 auto !important; }
  .flex-sm-row {
    flex-direction: row !important; }
  .flex-sm-column {
    flex-direction: column !important; }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important; }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important; }
  .flex-sm-grow-0 {
    flex-grow: 0 !important; }
  .flex-sm-grow-1 {
    flex-grow: 1 !important; }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important; }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important; }
  .flex-sm-wrap {
    flex-wrap: wrap !important; }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important; }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important; }
  .justify-content-sm-start {
    justify-content: flex-start !important; }
  .justify-content-sm-end {
    justify-content: flex-end !important; }
  .justify-content-sm-center {
    justify-content: center !important; }
  .justify-content-sm-between {
    justify-content: space-between !important; }
  .justify-content-sm-around {
    justify-content: space-around !important; }
  .justify-content-sm-evenly {
    justify-content: space-evenly !important; }
  .align-items-sm-start {
    align-items: flex-start !important; }
  .align-items-sm-end {
    align-items: flex-end !important; }
  .align-items-sm-center {
    align-items: center !important; }
  .align-items-sm-baseline {
    align-items: baseline !important; }
  .align-items-sm-stretch {
    align-items: stretch !important; }
  .align-content-sm-start {
    align-content: flex-start !important; }
  .align-content-sm-end {
    align-content: flex-end !important; }
  .align-content-sm-center {
    align-content: center !important; }
  .align-content-sm-between {
    align-content: space-between !important; }
  .align-content-sm-around {
    align-content: space-around !important; }
  .align-content-sm-stretch {
    align-content: stretch !important; }
  .align-self-sm-auto {
    align-self: auto !important; }
  .align-self-sm-start {
    align-self: flex-start !important; }
  .align-self-sm-end {
    align-self: flex-end !important; }
  .align-self-sm-center {
    align-self: center !important; }
  .align-self-sm-baseline {
    align-self: baseline !important; }
  .align-self-sm-stretch {
    align-self: stretch !important; }
  .order-sm-first {
    order: -1 !important; }
  .order-sm-0 {
    order: 0 !important; }
  .order-sm-1 {
    order: 1 !important; }
  .order-sm-2 {
    order: 2 !important; }
  .order-sm-3 {
    order: 3 !important; }
  .order-sm-4 {
    order: 4 !important; }
  .order-sm-5 {
    order: 5 !important; }
  .order-sm-last {
    order: 6 !important; }
  .m-sm-0 {
    margin: 0 !important; }
  .m-sm-1 {
    margin: 0.25rem !important; }
  .m-sm-2 {
    margin: 0.5rem !important; }
  .m-sm-3 {
    margin: 1rem !important; }
  .m-sm-4 {
    margin: 1.5rem !important; }
  .m-sm-5 {
    margin: 3rem !important; }
  .m-sm-auto {
    margin: auto !important; }
  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important; }
  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important; }
  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important; }
  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important; }
  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important; }
  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important; }
  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important; }
  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important; }
  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important; }
  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important; }
  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important; }
  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important; }
  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important; }
  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important; }
  .mt-sm-0 {
    margin-top: 0 !important; }
  .mt-sm-1 {
    margin-top: 0.25rem !important; }
  .mt-sm-2 {
    margin-top: 0.5rem !important; }
  .mt-sm-3 {
    margin-top: 1rem !important; }
  .mt-sm-4 {
    margin-top: 1.5rem !important; }
  .mt-sm-5 {
    margin-top: 3rem !important; }
  .mt-sm-auto {
    margin-top: auto !important; }
  .me-sm-0 {
    margin-right: 0 !important; }
  .me-sm-1 {
    margin-right: 0.25rem !important; }
  .me-sm-2 {
    margin-right: 0.5rem !important; }
  .me-sm-3 {
    margin-right: 1rem !important; }
  .me-sm-4 {
    margin-right: 1.5rem !important; }
  .me-sm-5 {
    margin-right: 3rem !important; }
  .me-sm-auto {
    margin-right: auto !important; }
  .mb-sm-0 {
    margin-bottom: 0 !important; }
  .mb-sm-1 {
    margin-bottom: 0.25rem !important; }
  .mb-sm-2 {
    margin-bottom: 0.5rem !important; }
  .mb-sm-3 {
    margin-bottom: 1rem !important; }
  .mb-sm-4 {
    margin-bottom: 1.5rem !important; }
  .mb-sm-5 {
    margin-bottom: 3rem !important; }
  .mb-sm-auto {
    margin-bottom: auto !important; }
  .ms-sm-0 {
    margin-left: 0 !important; }
  .ms-sm-1 {
    margin-left: 0.25rem !important; }
  .ms-sm-2 {
    margin-left: 0.5rem !important; }
  .ms-sm-3 {
    margin-left: 1rem !important; }
  .ms-sm-4 {
    margin-left: 1.5rem !important; }
  .ms-sm-5 {
    margin-left: 3rem !important; }
  .ms-sm-auto {
    margin-left: auto !important; }
  .p-sm-0 {
    padding: 0 !important; }
  .p-sm-1 {
    padding: 0.25rem !important; }
  .p-sm-2 {
    padding: 0.5rem !important; }
  .p-sm-3 {
    padding: 1rem !important; }
  .p-sm-4 {
    padding: 1.5rem !important; }
  .p-sm-5 {
    padding: 3rem !important; }
  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important; }
  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important; }
  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important; }
  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important; }
  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important; }
  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important; }
  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important; }
  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important; }
  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important; }
  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important; }
  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important; }
  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important; }
  .pt-sm-0 {
    padding-top: 0 !important; }
  .pt-sm-1 {
    padding-top: 0.25rem !important; }
  .pt-sm-2 {
    padding-top: 0.5rem !important; }
  .pt-sm-3 {
    padding-top: 1rem !important; }
  .pt-sm-4 {
    padding-top: 1.5rem !important; }
  .pt-sm-5 {
    padding-top: 3rem !important; }
  .pe-sm-0 {
    padding-right: 0 !important; }
  .pe-sm-1 {
    padding-right: 0.25rem !important; }
  .pe-sm-2 {
    padding-right: 0.5rem !important; }
  .pe-sm-3 {
    padding-right: 1rem !important; }
  .pe-sm-4 {
    padding-right: 1.5rem !important; }
  .pe-sm-5 {
    padding-right: 3rem !important; }
  .pb-sm-0 {
    padding-bottom: 0 !important; }
  .pb-sm-1 {
    padding-bottom: 0.25rem !important; }
  .pb-sm-2 {
    padding-bottom: 0.5rem !important; }
  .pb-sm-3 {
    padding-bottom: 1rem !important; }
  .pb-sm-4 {
    padding-bottom: 1.5rem !important; }
  .pb-sm-5 {
    padding-bottom: 3rem !important; }
  .ps-sm-0 {
    padding-left: 0 !important; }
  .ps-sm-1 {
    padding-left: 0.25rem !important; }
  .ps-sm-2 {
    padding-left: 0.5rem !important; }
  .ps-sm-3 {
    padding-left: 1rem !important; }
  .ps-sm-4 {
    padding-left: 1.5rem !important; }
  .ps-sm-5 {
    padding-left: 3rem !important; } }

@media (min-width: 768px) {
  .d-md-inline {
    display: inline !important; }
  .d-md-inline-block {
    display: inline-block !important; }
  .d-md-block {
    display: block !important; }
  .d-md-grid {
    display: grid !important; }
  .d-md-table {
    display: table !important; }
  .d-md-table-row {
    display: table-row !important; }
  .d-md-table-cell {
    display: table-cell !important; }
  .d-md-flex {
    display: flex !important; }
  .d-md-inline-flex {
    display: inline-flex !important; }
  .d-md-none {
    display: none !important; }
  .flex-md-fill {
    flex: 1 1 auto !important; }
  .flex-md-row {
    flex-direction: row !important; }
  .flex-md-column {
    flex-direction: column !important; }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important; }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important; }
  .flex-md-grow-0 {
    flex-grow: 0 !important; }
  .flex-md-grow-1 {
    flex-grow: 1 !important; }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important; }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important; }
  .flex-md-wrap {
    flex-wrap: wrap !important; }
  .flex-md-nowrap {
    flex-wrap: nowrap !important; }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important; }
  .justify-content-md-start {
    justify-content: flex-start !important; }
  .justify-content-md-end {
    justify-content: flex-end !important; }
  .justify-content-md-center {
    justify-content: center !important; }
  .justify-content-md-between {
    justify-content: space-between !important; }
  .justify-content-md-around {
    justify-content: space-around !important; }
  .justify-content-md-evenly {
    justify-content: space-evenly !important; }
  .align-items-md-start {
    align-items: flex-start !important; }
  .align-items-md-end {
    align-items: flex-end !important; }
  .align-items-md-center {
    align-items: center !important; }
  .align-items-md-baseline {
    align-items: baseline !important; }
  .align-items-md-stretch {
    align-items: stretch !important; }
  .align-content-md-start {
    align-content: flex-start !important; }
  .align-content-md-end {
    align-content: flex-end !important; }
  .align-content-md-center {
    align-content: center !important; }
  .align-content-md-between {
    align-content: space-between !important; }
  .align-content-md-around {
    align-content: space-around !important; }
  .align-content-md-stretch {
    align-content: stretch !important; }
  .align-self-md-auto {
    align-self: auto !important; }
  .align-self-md-start {
    align-self: flex-start !important; }
  .align-self-md-end {
    align-self: flex-end !important; }
  .align-self-md-center {
    align-self: center !important; }
  .align-self-md-baseline {
    align-self: baseline !important; }
  .align-self-md-stretch {
    align-self: stretch !important; }
  .order-md-first {
    order: -1 !important; }
  .order-md-0 {
    order: 0 !important; }
  .order-md-1 {
    order: 1 !important; }
  .order-md-2 {
    order: 2 !important; }
  .order-md-3 {
    order: 3 !important; }
  .order-md-4 {
    order: 4 !important; }
  .order-md-5 {
    order: 5 !important; }
  .order-md-last {
    order: 6 !important; }
  .m-md-0 {
    margin: 0 !important; }
  .m-md-1 {
    margin: 0.25rem !important; }
  .m-md-2 {
    margin: 0.5rem !important; }
  .m-md-3 {
    margin: 1rem !important; }
  .m-md-4 {
    margin: 1.5rem !important; }
  .m-md-5 {
    margin: 3rem !important; }
  .m-md-auto {
    margin: auto !important; }
  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important; }
  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important; }
  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important; }
  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important; }
  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important; }
  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important; }
  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important; }
  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important; }
  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important; }
  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important; }
  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important; }
  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important; }
  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important; }
  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important; }
  .mt-md-0 {
    margin-top: 0 !important; }
  .mt-md-1 {
    margin-top: 0.25rem !important; }
  .mt-md-2 {
    margin-top: 0.5rem !important; }
  .mt-md-3 {
    margin-top: 1rem !important; }
  .mt-md-4 {
    margin-top: 1.5rem !important; }
  .mt-md-5 {
    margin-top: 3rem !important; }
  .mt-md-auto {
    margin-top: auto !important; }
  .me-md-0 {
    margin-right: 0 !important; }
  .me-md-1 {
    margin-right: 0.25rem !important; }
  .me-md-2 {
    margin-right: 0.5rem !important; }
  .me-md-3 {
    margin-right: 1rem !important; }
  .me-md-4 {
    margin-right: 1.5rem !important; }
  .me-md-5 {
    margin-right: 3rem !important; }
  .me-md-auto {
    margin-right: auto !important; }
  .mb-md-0 {
    margin-bottom: 0 !important; }
  .mb-md-1 {
    margin-bottom: 0.25rem !important; }
  .mb-md-2 {
    margin-bottom: 0.5rem !important; }
  .mb-md-3 {
    margin-bottom: 1rem !important; }
  .mb-md-4 {
    margin-bottom: 1.5rem !important; }
  .mb-md-5 {
    margin-bottom: 3rem !important; }
  .mb-md-auto {
    margin-bottom: auto !important; }
  .ms-md-0 {
    margin-left: 0 !important; }
  .ms-md-1 {
    margin-left: 0.25rem !important; }
  .ms-md-2 {
    margin-left: 0.5rem !important; }
  .ms-md-3 {
    margin-left: 1rem !important; }
  .ms-md-4 {
    margin-left: 1.5rem !important; }
  .ms-md-5 {
    margin-left: 3rem !important; }
  .ms-md-auto {
    margin-left: auto !important; }
  .p-md-0 {
    padding: 0 !important; }
  .p-md-1 {
    padding: 0.25rem !important; }
  .p-md-2 {
    padding: 0.5rem !important; }
  .p-md-3 {
    padding: 1rem !important; }
  .p-md-4 {
    padding: 1.5rem !important; }
  .p-md-5 {
    padding: 3rem !important; }
  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important; }
  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important; }
  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important; }
  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important; }
  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important; }
  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important; }
  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important; }
  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important; }
  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important; }
  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important; }
  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important; }
  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important; }
  .pt-md-0 {
    padding-top: 0 !important; }
  .pt-md-1 {
    padding-top: 0.25rem !important; }
  .pt-md-2 {
    padding-top: 0.5rem !important; }
  .pt-md-3 {
    padding-top: 1rem !important; }
  .pt-md-4 {
    padding-top: 1.5rem !important; }
  .pt-md-5 {
    padding-top: 3rem !important; }
  .pe-md-0 {
    padding-right: 0 !important; }
  .pe-md-1 {
    padding-right: 0.25rem !important; }
  .pe-md-2 {
    padding-right: 0.5rem !important; }
  .pe-md-3 {
    padding-right: 1rem !important; }
  .pe-md-4 {
    padding-right: 1.5rem !important; }
  .pe-md-5 {
    padding-right: 3rem !important; }
  .pb-md-0 {
    padding-bottom: 0 !important; }
  .pb-md-1 {
    padding-bottom: 0.25rem !important; }
  .pb-md-2 {
    padding-bottom: 0.5rem !important; }
  .pb-md-3 {
    padding-bottom: 1rem !important; }
  .pb-md-4 {
    padding-bottom: 1.5rem !important; }
  .pb-md-5 {
    padding-bottom: 3rem !important; }
  .ps-md-0 {
    padding-left: 0 !important; }
  .ps-md-1 {
    padding-left: 0.25rem !important; }
  .ps-md-2 {
    padding-left: 0.5rem !important; }
  .ps-md-3 {
    padding-left: 1rem !important; }
  .ps-md-4 {
    padding-left: 1.5rem !important; }
  .ps-md-5 {
    padding-left: 3rem !important; } }

@media (min-width: 992px) {
  .d-lg-inline {
    display: inline !important; }
  .d-lg-inline-block {
    display: inline-block !important; }
  .d-lg-block {
    display: block !important; }
  .d-lg-grid {
    display: grid !important; }
  .d-lg-table {
    display: table !important; }
  .d-lg-table-row {
    display: table-row !important; }
  .d-lg-table-cell {
    display: table-cell !important; }
  .d-lg-flex {
    display: flex !important; }
  .d-lg-inline-flex {
    display: inline-flex !important; }
  .d-lg-none {
    display: none !important; }
  .flex-lg-fill {
    flex: 1 1 auto !important; }
  .flex-lg-row {
    flex-direction: row !important; }
  .flex-lg-column {
    flex-direction: column !important; }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important; }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important; }
  .flex-lg-grow-0 {
    flex-grow: 0 !important; }
  .flex-lg-grow-1 {
    flex-grow: 1 !important; }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important; }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important; }
  .flex-lg-wrap {
    flex-wrap: wrap !important; }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important; }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important; }
  .justify-content-lg-start {
    justify-content: flex-start !important; }
  .justify-content-lg-end {
    justify-content: flex-end !important; }
  .justify-content-lg-center {
    justify-content: center !important; }
  .justify-content-lg-between {
    justify-content: space-between !important; }
  .justify-content-lg-around {
    justify-content: space-around !important; }
  .justify-content-lg-evenly {
    justify-content: space-evenly !important; }
  .align-items-lg-start {
    align-items: flex-start !important; }
  .align-items-lg-end {
    align-items: flex-end !important; }
  .align-items-lg-center {
    align-items: center !important; }
  .align-items-lg-baseline {
    align-items: baseline !important; }
  .align-items-lg-stretch {
    align-items: stretch !important; }
  .align-content-lg-start {
    align-content: flex-start !important; }
  .align-content-lg-end {
    align-content: flex-end !important; }
  .align-content-lg-center {
    align-content: center !important; }
  .align-content-lg-between {
    align-content: space-between !important; }
  .align-content-lg-around {
    align-content: space-around !important; }
  .align-content-lg-stretch {
    align-content: stretch !important; }
  .align-self-lg-auto {
    align-self: auto !important; }
  .align-self-lg-start {
    align-self: flex-start !important; }
  .align-self-lg-end {
    align-self: flex-end !important; }
  .align-self-lg-center {
    align-self: center !important; }
  .align-self-lg-baseline {
    align-self: baseline !important; }
  .align-self-lg-stretch {
    align-self: stretch !important; }
  .order-lg-first {
    order: -1 !important; }
  .order-lg-0 {
    order: 0 !important; }
  .order-lg-1 {
    order: 1 !important; }
  .order-lg-2 {
    order: 2 !important; }
  .order-lg-3 {
    order: 3 !important; }
  .order-lg-4 {
    order: 4 !important; }
  .order-lg-5 {
    order: 5 !important; }
  .order-lg-last {
    order: 6 !important; }
  .m-lg-0 {
    margin: 0 !important; }
  .m-lg-1 {
    margin: 0.25rem !important; }
  .m-lg-2 {
    margin: 0.5rem !important; }
  .m-lg-3 {
    margin: 1rem !important; }
  .m-lg-4 {
    margin: 1.5rem !important; }
  .m-lg-5 {
    margin: 3rem !important; }
  .m-lg-auto {
    margin: auto !important; }
  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important; }
  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important; }
  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important; }
  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important; }
  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important; }
  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important; }
  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important; }
  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important; }
  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important; }
  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important; }
  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important; }
  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important; }
  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important; }
  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important; }
  .mt-lg-0 {
    margin-top: 0 !important; }
  .mt-lg-1 {
    margin-top: 0.25rem !important; }
  .mt-lg-2 {
    margin-top: 0.5rem !important; }
  .mt-lg-3 {
    margin-top: 1rem !important; }
  .mt-lg-4 {
    margin-top: 1.5rem !important; }
  .mt-lg-5 {
    margin-top: 3rem !important; }
  .mt-lg-auto {
    margin-top: auto !important; }
  .me-lg-0 {
    margin-right: 0 !important; }
  .me-lg-1 {
    margin-right: 0.25rem !important; }
  .me-lg-2 {
    margin-right: 0.5rem !important; }
  .me-lg-3 {
    margin-right: 1rem !important; }
  .me-lg-4 {
    margin-right: 1.5rem !important; }
  .me-lg-5 {
    margin-right: 3rem !important; }
  .me-lg-auto {
    margin-right: auto !important; }
  .mb-lg-0 {
    margin-bottom: 0 !important; }
  .mb-lg-1 {
    margin-bottom: 0.25rem !important; }
  .mb-lg-2 {
    margin-bottom: 0.5rem !important; }
  .mb-lg-3 {
    margin-bottom: 1rem !important; }
  .mb-lg-4 {
    margin-bottom: 1.5rem !important; }
  .mb-lg-5 {
    margin-bottom: 3rem !important; }
  .mb-lg-auto {
    margin-bottom: auto !important; }
  .ms-lg-0 {
    margin-left: 0 !important; }
  .ms-lg-1 {
    margin-left: 0.25rem !important; }
  .ms-lg-2 {
    margin-left: 0.5rem !important; }
  .ms-lg-3 {
    margin-left: 1rem !important; }
  .ms-lg-4 {
    margin-left: 1.5rem !important; }
  .ms-lg-5 {
    margin-left: 3rem !important; }
  .ms-lg-auto {
    margin-left: auto !important; }
  .p-lg-0 {
    padding: 0 !important; }
  .p-lg-1 {
    padding: 0.25rem !important; }
  .p-lg-2 {
    padding: 0.5rem !important; }
  .p-lg-3 {
    padding: 1rem !important; }
  .p-lg-4 {
    padding: 1.5rem !important; }
  .p-lg-5 {
    padding: 3rem !important; }
  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important; }
  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important; }
  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important; }
  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important; }
  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important; }
  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important; }
  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important; }
  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important; }
  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important; }
  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important; }
  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important; }
  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important; }
  .pt-lg-0 {
    padding-top: 0 !important; }
  .pt-lg-1 {
    padding-top: 0.25rem !important; }
  .pt-lg-2 {
    padding-top: 0.5rem !important; }
  .pt-lg-3 {
    padding-top: 1rem !important; }
  .pt-lg-4 {
    padding-top: 1.5rem !important; }
  .pt-lg-5 {
    padding-top: 3rem !important; }
  .pe-lg-0 {
    padding-right: 0 !important; }
  .pe-lg-1 {
    padding-right: 0.25rem !important; }
  .pe-lg-2 {
    padding-right: 0.5rem !important; }
  .pe-lg-3 {
    padding-right: 1rem !important; }
  .pe-lg-4 {
    padding-right: 1.5rem !important; }
  .pe-lg-5 {
    padding-right: 3rem !important; }
  .pb-lg-0 {
    padding-bottom: 0 !important; }
  .pb-lg-1 {
    padding-bottom: 0.25rem !important; }
  .pb-lg-2 {
    padding-bottom: 0.5rem !important; }
  .pb-lg-3 {
    padding-bottom: 1rem !important; }
  .pb-lg-4 {
    padding-bottom: 1.5rem !important; }
  .pb-lg-5 {
    padding-bottom: 3rem !important; }
  .ps-lg-0 {
    padding-left: 0 !important; }
  .ps-lg-1 {
    padding-left: 0.25rem !important; }
  .ps-lg-2 {
    padding-left: 0.5rem !important; }
  .ps-lg-3 {
    padding-left: 1rem !important; }
  .ps-lg-4 {
    padding-left: 1.5rem !important; }
  .ps-lg-5 {
    padding-left: 3rem !important; } }

@media (min-width: 1200px) {
  .d-xl-inline {
    display: inline !important; }
  .d-xl-inline-block {
    display: inline-block !important; }
  .d-xl-block {
    display: block !important; }
  .d-xl-grid {
    display: grid !important; }
  .d-xl-table {
    display: table !important; }
  .d-xl-table-row {
    display: table-row !important; }
  .d-xl-table-cell {
    display: table-cell !important; }
  .d-xl-flex {
    display: flex !important; }
  .d-xl-inline-flex {
    display: inline-flex !important; }
  .d-xl-none {
    display: none !important; }
  .flex-xl-fill {
    flex: 1 1 auto !important; }
  .flex-xl-row {
    flex-direction: row !important; }
  .flex-xl-column {
    flex-direction: column !important; }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important; }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important; }
  .flex-xl-grow-0 {
    flex-grow: 0 !important; }
  .flex-xl-grow-1 {
    flex-grow: 1 !important; }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important; }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important; }
  .flex-xl-wrap {
    flex-wrap: wrap !important; }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important; }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important; }
  .justify-content-xl-start {
    justify-content: flex-start !important; }
  .justify-content-xl-end {
    justify-content: flex-end !important; }
  .justify-content-xl-center {
    justify-content: center !important; }
  .justify-content-xl-between {
    justify-content: space-between !important; }
  .justify-content-xl-around {
    justify-content: space-around !important; }
  .justify-content-xl-evenly {
    justify-content: space-evenly !important; }
  .align-items-xl-start {
    align-items: flex-start !important; }
  .align-items-xl-end {
    align-items: flex-end !important; }
  .align-items-xl-center {
    align-items: center !important; }
  .align-items-xl-baseline {
    align-items: baseline !important; }
  .align-items-xl-stretch {
    align-items: stretch !important; }
  .align-content-xl-start {
    align-content: flex-start !important; }
  .align-content-xl-end {
    align-content: flex-end !important; }
  .align-content-xl-center {
    align-content: center !important; }
  .align-content-xl-between {
    align-content: space-between !important; }
  .align-content-xl-around {
    align-content: space-around !important; }
  .align-content-xl-stretch {
    align-content: stretch !important; }
  .align-self-xl-auto {
    align-self: auto !important; }
  .align-self-xl-start {
    align-self: flex-start !important; }
  .align-self-xl-end {
    align-self: flex-end !important; }
  .align-self-xl-center {
    align-self: center !important; }
  .align-self-xl-baseline {
    align-self: baseline !important; }
  .align-self-xl-stretch {
    align-self: stretch !important; }
  .order-xl-first {
    order: -1 !important; }
  .order-xl-0 {
    order: 0 !important; }
  .order-xl-1 {
    order: 1 !important; }
  .order-xl-2 {
    order: 2 !important; }
  .order-xl-3 {
    order: 3 !important; }
  .order-xl-4 {
    order: 4 !important; }
  .order-xl-5 {
    order: 5 !important; }
  .order-xl-last {
    order: 6 !important; }
  .m-xl-0 {
    margin: 0 !important; }
  .m-xl-1 {
    margin: 0.25rem !important; }
  .m-xl-2 {
    margin: 0.5rem !important; }
  .m-xl-3 {
    margin: 1rem !important; }
  .m-xl-4 {
    margin: 1.5rem !important; }
  .m-xl-5 {
    margin: 3rem !important; }
  .m-xl-auto {
    margin: auto !important; }
  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important; }
  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important; }
  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important; }
  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important; }
  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important; }
  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important; }
  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important; }
  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important; }
  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important; }
  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important; }
  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important; }
  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important; }
  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important; }
  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important; }
  .mt-xl-0 {
    margin-top: 0 !important; }
  .mt-xl-1 {
    margin-top: 0.25rem !important; }
  .mt-xl-2 {
    margin-top: 0.5rem !important; }
  .mt-xl-3 {
    margin-top: 1rem !important; }
  .mt-xl-4 {
    margin-top: 1.5rem !important; }
  .mt-xl-5 {
    margin-top: 3rem !important; }
  .mt-xl-auto {
    margin-top: auto !important; }
  .me-xl-0 {
    margin-right: 0 !important; }
  .me-xl-1 {
    margin-right: 0.25rem !important; }
  .me-xl-2 {
    margin-right: 0.5rem !important; }
  .me-xl-3 {
    margin-right: 1rem !important; }
  .me-xl-4 {
    margin-right: 1.5rem !important; }
  .me-xl-5 {
    margin-right: 3rem !important; }
  .me-xl-auto {
    margin-right: auto !important; }
  .mb-xl-0 {
    margin-bottom: 0 !important; }
  .mb-xl-1 {
    margin-bottom: 0.25rem !important; }
  .mb-xl-2 {
    margin-bottom: 0.5rem !important; }
  .mb-xl-3 {
    margin-bottom: 1rem !important; }
  .mb-xl-4 {
    margin-bottom: 1.5rem !important; }
  .mb-xl-5 {
    margin-bottom: 3rem !important; }
  .mb-xl-auto {
    margin-bottom: auto !important; }
  .ms-xl-0 {
    margin-left: 0 !important; }
  .ms-xl-1 {
    margin-left: 0.25rem !important; }
  .ms-xl-2 {
    margin-left: 0.5rem !important; }
  .ms-xl-3 {
    margin-left: 1rem !important; }
  .ms-xl-4 {
    margin-left: 1.5rem !important; }
  .ms-xl-5 {
    margin-left: 3rem !important; }
  .ms-xl-auto {
    margin-left: auto !important; }
  .p-xl-0 {
    padding: 0 !important; }
  .p-xl-1 {
    padding: 0.25rem !important; }
  .p-xl-2 {
    padding: 0.5rem !important; }
  .p-xl-3 {
    padding: 1rem !important; }
  .p-xl-4 {
    padding: 1.5rem !important; }
  .p-xl-5 {
    padding: 3rem !important; }
  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important; }
  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important; }
  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important; }
  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important; }
  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important; }
  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important; }
  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important; }
  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important; }
  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important; }
  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important; }
  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important; }
  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important; }
  .pt-xl-0 {
    padding-top: 0 !important; }
  .pt-xl-1 {
    padding-top: 0.25rem !important; }
  .pt-xl-2 {
    padding-top: 0.5rem !important; }
  .pt-xl-3 {
    padding-top: 1rem !important; }
  .pt-xl-4 {
    padding-top: 1.5rem !important; }
  .pt-xl-5 {
    padding-top: 3rem !important; }
  .pe-xl-0 {
    padding-right: 0 !important; }
  .pe-xl-1 {
    padding-right: 0.25rem !important; }
  .pe-xl-2 {
    padding-right: 0.5rem !important; }
  .pe-xl-3 {
    padding-right: 1rem !important; }
  .pe-xl-4 {
    padding-right: 1.5rem !important; }
  .pe-xl-5 {
    padding-right: 3rem !important; }
  .pb-xl-0 {
    padding-bottom: 0 !important; }
  .pb-xl-1 {
    padding-bottom: 0.25rem !important; }
  .pb-xl-2 {
    padding-bottom: 0.5rem !important; }
  .pb-xl-3 {
    padding-bottom: 1rem !important; }
  .pb-xl-4 {
    padding-bottom: 1.5rem !important; }
  .pb-xl-5 {
    padding-bottom: 3rem !important; }
  .ps-xl-0 {
    padding-left: 0 !important; }
  .ps-xl-1 {
    padding-left: 0.25rem !important; }
  .ps-xl-2 {
    padding-left: 0.5rem !important; }
  .ps-xl-3 {
    padding-left: 1rem !important; }
  .ps-xl-4 {
    padding-left: 1.5rem !important; }
  .ps-xl-5 {
    padding-left: 3rem !important; } }

@media (min-width: 1400px) {
  .d-xxl-inline {
    display: inline !important; }
  .d-xxl-inline-block {
    display: inline-block !important; }
  .d-xxl-block {
    display: block !important; }
  .d-xxl-grid {
    display: grid !important; }
  .d-xxl-table {
    display: table !important; }
  .d-xxl-table-row {
    display: table-row !important; }
  .d-xxl-table-cell {
    display: table-cell !important; }
  .d-xxl-flex {
    display: flex !important; }
  .d-xxl-inline-flex {
    display: inline-flex !important; }
  .d-xxl-none {
    display: none !important; }
  .flex-xxl-fill {
    flex: 1 1 auto !important; }
  .flex-xxl-row {
    flex-direction: row !important; }
  .flex-xxl-column {
    flex-direction: column !important; }
  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important; }
  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important; }
  .flex-xxl-grow-0 {
    flex-grow: 0 !important; }
  .flex-xxl-grow-1 {
    flex-grow: 1 !important; }
  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important; }
  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important; }
  .flex-xxl-wrap {
    flex-wrap: wrap !important; }
  .flex-xxl-nowrap {
    flex-wrap: nowrap !important; }
  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important; }
  .justify-content-xxl-start {
    justify-content: flex-start !important; }
  .justify-content-xxl-end {
    justify-content: flex-end !important; }
  .justify-content-xxl-center {
    justify-content: center !important; }
  .justify-content-xxl-between {
    justify-content: space-between !important; }
  .justify-content-xxl-around {
    justify-content: space-around !important; }
  .justify-content-xxl-evenly {
    justify-content: space-evenly !important; }
  .align-items-xxl-start {
    align-items: flex-start !important; }
  .align-items-xxl-end {
    align-items: flex-end !important; }
  .align-items-xxl-center {
    align-items: center !important; }
  .align-items-xxl-baseline {
    align-items: baseline !important; }
  .align-items-xxl-stretch {
    align-items: stretch !important; }
  .align-content-xxl-start {
    align-content: flex-start !important; }
  .align-content-xxl-end {
    align-content: flex-end !important; }
  .align-content-xxl-center {
    align-content: center !important; }
  .align-content-xxl-between {
    align-content: space-between !important; }
  .align-content-xxl-around {
    align-content: space-around !important; }
  .align-content-xxl-stretch {
    align-content: stretch !important; }
  .align-self-xxl-auto {
    align-self: auto !important; }
  .align-self-xxl-start {
    align-self: flex-start !important; }
  .align-self-xxl-end {
    align-self: flex-end !important; }
  .align-self-xxl-center {
    align-self: center !important; }
  .align-self-xxl-baseline {
    align-self: baseline !important; }
  .align-self-xxl-stretch {
    align-self: stretch !important; }
  .order-xxl-first {
    order: -1 !important; }
  .order-xxl-0 {
    order: 0 !important; }
  .order-xxl-1 {
    order: 1 !important; }
  .order-xxl-2 {
    order: 2 !important; }
  .order-xxl-3 {
    order: 3 !important; }
  .order-xxl-4 {
    order: 4 !important; }
  .order-xxl-5 {
    order: 5 !important; }
  .order-xxl-last {
    order: 6 !important; }
  .m-xxl-0 {
    margin: 0 !important; }
  .m-xxl-1 {
    margin: 0.25rem !important; }
  .m-xxl-2 {
    margin: 0.5rem !important; }
  .m-xxl-3 {
    margin: 1rem !important; }
  .m-xxl-4 {
    margin: 1.5rem !important; }
  .m-xxl-5 {
    margin: 3rem !important; }
  .m-xxl-auto {
    margin: auto !important; }
  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important; }
  .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important; }
  .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important; }
  .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important; }
  .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important; }
  .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important; }
  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important; }
  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important; }
  .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important; }
  .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important; }
  .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important; }
  .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important; }
  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important; }
  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important; }
  .mt-xxl-0 {
    margin-top: 0 !important; }
  .mt-xxl-1 {
    margin-top: 0.25rem !important; }
  .mt-xxl-2 {
    margin-top: 0.5rem !important; }
  .mt-xxl-3 {
    margin-top: 1rem !important; }
  .mt-xxl-4 {
    margin-top: 1.5rem !important; }
  .mt-xxl-5 {
    margin-top: 3rem !important; }
  .mt-xxl-auto {
    margin-top: auto !important; }
  .me-xxl-0 {
    margin-right: 0 !important; }
  .me-xxl-1 {
    margin-right: 0.25rem !important; }
  .me-xxl-2 {
    margin-right: 0.5rem !important; }
  .me-xxl-3 {
    margin-right: 1rem !important; }
  .me-xxl-4 {
    margin-right: 1.5rem !important; }
  .me-xxl-5 {
    margin-right: 3rem !important; }
  .me-xxl-auto {
    margin-right: auto !important; }
  .mb-xxl-0 {
    margin-bottom: 0 !important; }
  .mb-xxl-1 {
    margin-bottom: 0.25rem !important; }
  .mb-xxl-2 {
    margin-bottom: 0.5rem !important; }
  .mb-xxl-3 {
    margin-bottom: 1rem !important; }
  .mb-xxl-4 {
    margin-bottom: 1.5rem !important; }
  .mb-xxl-5 {
    margin-bottom: 3rem !important; }
  .mb-xxl-auto {
    margin-bottom: auto !important; }
  .ms-xxl-0 {
    margin-left: 0 !important; }
  .ms-xxl-1 {
    margin-left: 0.25rem !important; }
  .ms-xxl-2 {
    margin-left: 0.5rem !important; }
  .ms-xxl-3 {
    margin-left: 1rem !important; }
  .ms-xxl-4 {
    margin-left: 1.5rem !important; }
  .ms-xxl-5 {
    margin-left: 3rem !important; }
  .ms-xxl-auto {
    margin-left: auto !important; }
  .p-xxl-0 {
    padding: 0 !important; }
  .p-xxl-1 {
    padding: 0.25rem !important; }
  .p-xxl-2 {
    padding: 0.5rem !important; }
  .p-xxl-3 {
    padding: 1rem !important; }
  .p-xxl-4 {
    padding: 1.5rem !important; }
  .p-xxl-5 {
    padding: 3rem !important; }
  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important; }
  .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important; }
  .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important; }
  .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important; }
  .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important; }
  .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important; }
  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important; }
  .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important; }
  .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important; }
  .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important; }
  .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important; }
  .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important; }
  .pt-xxl-0 {
    padding-top: 0 !important; }
  .pt-xxl-1 {
    padding-top: 0.25rem !important; }
  .pt-xxl-2 {
    padding-top: 0.5rem !important; }
  .pt-xxl-3 {
    padding-top: 1rem !important; }
  .pt-xxl-4 {
    padding-top: 1.5rem !important; }
  .pt-xxl-5 {
    padding-top: 3rem !important; }
  .pe-xxl-0 {
    padding-right: 0 !important; }
  .pe-xxl-1 {
    padding-right: 0.25rem !important; }
  .pe-xxl-2 {
    padding-right: 0.5rem !important; }
  .pe-xxl-3 {
    padding-right: 1rem !important; }
  .pe-xxl-4 {
    padding-right: 1.5rem !important; }
  .pe-xxl-5 {
    padding-right: 3rem !important; }
  .pb-xxl-0 {
    padding-bottom: 0 !important; }
  .pb-xxl-1 {
    padding-bottom: 0.25rem !important; }
  .pb-xxl-2 {
    padding-bottom: 0.5rem !important; }
  .pb-xxl-3 {
    padding-bottom: 1rem !important; }
  .pb-xxl-4 {
    padding-bottom: 1.5rem !important; }
  .pb-xxl-5 {
    padding-bottom: 3rem !important; }
  .ps-xxl-0 {
    padding-left: 0 !important; }
  .ps-xxl-1 {
    padding-left: 0.25rem !important; }
  .ps-xxl-2 {
    padding-left: 0.5rem !important; }
  .ps-xxl-3 {
    padding-left: 1rem !important; }
  .ps-xxl-4 {
    padding-left: 1.5rem !important; }
  .ps-xxl-5 {
    padding-left: 3rem !important; } }

@media print {
  .d-print-inline {
    display: inline !important; }
  .d-print-inline-block {
    display: inline-block !important; }
  .d-print-block {
    display: block !important; }
  .d-print-grid {
    display: grid !important; }
  .d-print-table {
    display: table !important; }
  .d-print-table-row {
    display: table-row !important; }
  .d-print-table-cell {
    display: table-cell !important; }
  .d-print-flex {
    display: flex !important; }
  .d-print-inline-flex {
    display: inline-flex !important; }
  .d-print-none {
    display: none !important; } }
onstructor")&&t.constructor;return"function"==typeof n&&n.toString()===S}function P(e){var t=null==e?void 0:e.constructor;return!!t&&("GeneratorFunction"===t.name||"GeneratorFunction"===t.displayName)}function D(e,t,n){y(e,t,{enumerable:!1,writable:!0,configurable:!0,value:n})}function I(e,t,n){y(e,t,{enumerable:!1,writable:!1,configurable:!0,value:n})}function R(e,t){var n="isMobX"+e;return t.prototype[n]=!0,function(e){return A(e)&&!0===e[n]}}function j(e){return e instanceof Map}function M(e){return e instanceof Set}var L=void 0!==Object.getOwnPropertySymbols;function V(e){var t=Object.keys(e);if(!L)return t;var n=Object.getOwnPropertySymbols(e);return n.length?[].concat(t,n.filter(function(t){return b.propertyIsEnumerable.call(e,t)})):t}var B="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:L?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function U(e){return null===e?null:"object"==typeof e?""+e:e}function q(e,t){return b.hasOwnProperty.call(e,t)}var F=Object.getOwnPropertyDescriptors||function(e){var t={};return B(e).forEach(function(n){t[n]=v(e,n)}),t};function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Q(r.key),r)}}function z(e,t,n){return t&&Z(e.prototype,t),n&&Z(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function $(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,G(e,t)}function G(e,t){return(G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function W(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function J(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Y(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function X(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function Q(e){var t=X(e,"string");return"symbol"==typeof t?t:String(t)}var ee=Symbol("mobx-stored-annotations");function et(e){return Object.assign(function(t,n){en(t,n,e)},e)}function en(e,t,n){q(e,ee)||D(e,ee,H({},e[ee])),ep(n)||(e[ee][t]=n)}function er(e){return q(e,ee)||D(e,ee,H({},e[ee])),e[ee]}var ei=Symbol("mobx administration"),eo=function(){function e(e){void 0===e&&(e="Atom"),this.name_=void 0,this.isPendingUnobservation_=!1,this.isBeingObserved_=!1,this.observers_=new Set,this.batchId_=void 0,this.diffValue_=0,this.lastAccessedBy_=0,this.lowestObserverState_=l.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=e,this.batchId_=tO.inBatch?tO.batchId:NaN}var t=e.prototype;return t.onBO=function(){this.onBOL&&this.onBOL.forEach(function(e){return e()})},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(e){return e()})},t.reportObserved=function(){return tD(this)},t.reportChanged=function(){tO.inBatch&&this.batchId_===tO.batchId||(tO.stateVersion=tO.stateVersion<Number.MAX_SAFE_INTEGER?tO.stateVersion+1:Number.MIN_SAFE_INTEGER,this.batchId_=NaN),tN(),tI(this),tP()},t.toString=function(){return this.name_},e}(),ea=R("Atom",eo);function es(e,t,n){void 0===t&&(t=E),void 0===n&&(n=E);var r=new eo(e);return t!==E&&t9(r,t),n!==E&&ne(r,n),r}var el={identity:function(e,t){return e===t},structural:function(e,t){return rc(e,t)},default:function(e,t){return Object.is?Object.is(e,t):e===t?0!==e||1/e==1/t:e!=e&&t!=t},shallow:function(e,t){return rc(e,t,1)}};function eu(e,t,n){return ny(e)?e:Array.isArray(e)?e0.array(e,{name:n}):N(e)?e0.object(e,void 0,{name:n}):j(e)?e0.map(e,{name:n}):M(e)?e0.set(e,{name:n}):"function"!=typeof e||t3(e)||ng(e)?e:P(e)?np(e):t2(n,e)}function ec(e,t,n){return null==e||n5(e)||nF(e)||nG(e)||nJ(e)?e:Array.isArray(e)?e0.array(e,{name:n,deep:!1}):N(e)?e0.object(e,void 0,{name:n,deep:!1}):j(e)?e0.map(e,{name:n,deep:!1}):M(e)?e0.set(e,{name:n,deep:!1}):void 0}function ed(e){return e}function eh(e,t){return rc(e,t)?t:e}var ef="override";function ep(e){return e.annotationType_===ef}function em(e,t){return{annotationType_:e,options_:t,make_:eg,extend_:ev}}function eg(e,t,n,r){if(null!=(i=this.options_)&&i.bound)return null===this.extend_(e,t,n,!1)?0:1;if(r===e.target_)return null===this.extend_(e,t,n,!1)?0:2;if(t3(n.value))return 1;var i,o=eb(e,this,t,n,!1);return y(r,t,o),2}function ev(e,t,n,r){var i=eb(e,this,t,n);return e.defineProperty_(t,i,r)}function ey(e,t,n,r){t.annotationType_,r.value}function eb(e,t,n,r,i){void 0===i&&(i=tO.safeDescriptors),ey(e,t,n,r);var o,a,s,l,u,c,d,h,f=r.value;return null!=(o=t.options_)&&o.bound&&(f=f.bind(null!=(h=e.proxy_)?h:e.target_)),{value:te(null!=(a=null==(s=t.options_)?void 0:s.name)?a:n.toString(),f,null!=(l=null==(u=t.options_)?void 0:u.autoAction)&&l,null!=(c=t.options_)&&c.bound?null!=(d=e.proxy_)?d:e.target_:void 0),configurable:!i||e.isPlainObject_,enumerable:!1,writable:!i}}function ew(e,t){return{annotationType_:e,options_:t,make_:ex,extend_:ek}}function ex(e,t,n,r){if(r===e.target_)return null===this.extend_(e,t,n,!1)?0:2;if(null!=(i=this.options_)&&i.bound&&(!q(e.target_,t)||!ng(e.target_[t]))&&null===this.extend_(e,t,n,!1))return 0;if(ng(n.value))return 1;var i,o=e_(e,this,t,n,!1,!1);return y(r,t,o),2}function ek(e,t,n,r){var i,o=e_(e,this,t,n,null==(i=this.options_)?void 0:i.bound);return e.defineProperty_(t,o,r)}function eS(e,t,n,r){t.annotationType_,r.value}function e_(e,t,n,r,i,o){void 0===o&&(o=tO.safeDescriptors),eS(e,t,n,r);var a,s=r.value;return ng(s)||(s=np(s)),i&&((s=s.bind(null!=(a=e.proxy_)?a:e.target_)).isMobXFlow=!0),{value:s,configurable:!o||e.isPlainObject_,enumerable:!1,writable:!o}}function eO(e,t){return{annotationType_:e,options_:t,make_:eE,extend_:eC}}function eE(e,t,n){return null===this.extend_(e,t,n,!1)?0:1}function eC(e,t,n,r){return eT(e,this,t,n),e.defineComputedProperty_(t,H({},this.options_,{get:n.get,set:n.set}),r)}function eT(e,t,n,r){t.annotationType_,r.get}function eA(e,t){return{annotationType_:e,options_:t,make_:eN,extend_:eP}}function eN(e,t,n){return null===this.extend_(e,t,n,!1)?0:1}function eP(e,t,n,r){var i,o;return eD(e,this,t,n),e.defineObservableProperty_(t,n.value,null!=(i=null==(o=this.options_)?void 0:o.enhancer)?i:eu,r)}function eD(e,t,n,r){t.annotationType_}var eI="true",eR=ej();function ej(e){return{annotationType_:eI,options_:e,make_:eM,extend_:eL}}function eM(e,t,n,r){if(n.get)return e4.make_(e,t,n,r);if(n.set){var i,o,a,s,l,u=te(t.toString(),n.set);return r===e.target_?null===e.defineProperty_(t,{configurable:!tO.safeDescriptors||e.isPlainObject_,set:u})?0:2:(y(r,t,{configurable:!0,set:u}),2)}if(r!==e.target_&&"function"==typeof n.value)return P(n.value)?(null!=(s=this.options_)&&s.autoBind?np.bound:np).make_(e,t,n,r):(null!=(a=this.options_)&&a.autoBind?t2.bound:t2).make_(e,t,n,r);var c=(null==(i=this.options_)?void 0:i.deep)===!1?e0.ref:e0;return"function"==typeof n.value&&null!=(o=this.options_)&&o.autoBind&&(n.value=n.value.bind(null!=(l=e.proxy_)?l:e.target_)),c.make_(e,t,n,r)}function eL(e,t,n,r){var i,o,a;return n.get?e4.extend_(e,t,n,r):n.set?e.defineProperty_(t,{configurable:!tO.safeDescriptors||e.isPlainObject_,set:te(t.toString(),n.set)},r):("function"==typeof n.value&&null!=(i=this.options_)&&i.autoBind&&(n.value=n.value.bind(null!=(a=e.proxy_)?a:e.target_)),((null==(o=this.options_)?void 0:o.deep)===!1?e0.ref:e0).extend_(e,t,n,r))}var eV="observable",eB="observable.ref",eU="observable.shallow",eq="observable.struct",eF={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};function eZ(e){return e||eF}Object.freeze(eF);var ez=eA(eV),eH=eA(eB,{enhancer:ed}),e$=eA(eU,{enhancer:ec}),eG=eA(eq,{enhancer:eh}),eW=et(ez);function eY(e){return!0===e.deep?eu:!1===e.deep?ed:eJ(e.defaultDecorator)}function eK(e){var t;return e?null!=(t=e.defaultDecorator)?t:ej(e):void 0}function eJ(e){var t,n;return e&&null!=(t=null==(n=e.options_)?void 0:n.enhancer)?t:eu}function eX(e,t,n){if(T(t)){en(e,t,ez);return}return ny(e)?e:N(e)?e0.object(e,t,n):Array.isArray(e)?e0.array(e,t):j(e)?e0.map(e,t):M(e)?e0.set(e,t):"object"==typeof e&&null!==e?e:e0.box(e,t)}g(eX,eW);var eQ={box:function(e,t){var n=eZ(t);return new ts(e,eY(n),n.name,!0,n.equals)},array:function(e,t){var n=eZ(t);return(!1===tO.useProxies||!1===n.proxy?ri:nj)(e,eY(n),n.name)},map:function(e,t){var n=eZ(t);return new n$(e,eY(n),n.name)},set:function(e,t){var n=eZ(t);return new nK(e,eY(n),n.name)},object:function(e,t,n){return rl(function(){return na(!1===tO.useProxies||(null==n?void 0:n.proxy)===!1?n1({},n):nk({},n),e,t)})},ref:et(eH),shallow:et(e$),deep:eW,struct:et(eG)},e0=g(eX,eQ),e1="computed",e2="computed.struct",e3=eO(e1),e5=eO(e2,{equals:el.structural}),e4=function(e,t){if(T(t))return en(e,t,e3);if(N(e))return et(eO(e1,e));var n=N(t)?t:{};return n.get=e,n.name||(n.name=e.name||""),new tl(n)};Object.assign(e4,e3),e4.struct=et(e5);var e6=0,e8=1,e7=null!=(i=null==(o=v(function(){},"name"))?void 0:o.configurable)&&i,e9={value:"action",configurable:!0,writable:!1,enumerable:!1};function te(e,t,n,r){function i(){return tt(e,n,t,r||this,arguments)}return void 0===n&&(n=!1),i.isMobxAction=!0,e7&&(e9.value=e,y(i,"name",e9)),i}function tt(e,t,n,r,i){var o=tn(e,t,r,i);try{return n.apply(r,i)}catch(a){throw o.error_=a,a}finally{tr(o)}}function tn(e,t,n,r){var i=!1,o=0,a=tO.trackingDerivation,s=!t||!a;tN();var l=tO.allowStateChanges;s&&(tv(),l=to(!0));var u={runAsAction_:s,prevDerivation_:a,prevAllowStateChanges_:l,prevAllowStateReads_:tb(!0),notifySpy_:i,startTime_:o,actionId_:e8++,parentActionId_:e6};return e6=u.actionId_,u}function tr(e){e6!==e.actionId_&&r(30),e6=e.parentActionId_,void 0!==e.error_&&(tO.suppressReactionErrors=!0),ta(e.prevAllowStateChanges_),tw(e.prevAllowStateReads_),tP(),e.runAsAction_&&ty(e.prevDerivation_),tO.suppressReactionErrors=!1}function ti(e,t){var n=to(e);try{return t()}finally{ta(n)}}function to(e){var t=tO.allowStateChanges;return tO.allowStateChanges=e,t}function ta(e){tO.allowStateChanges=e}a=Symbol.toPrimitive;var ts=function(e){function t(t,n,r,i,o){var a;return void 0===r&&(r="ObservableValue"),void 0===i&&(i=!0),void 0===o&&(o=el.default),(a=e.call(this,r)||this).enhancer=void 0,a.name_=void 0,a.equals=void 0,a.hasUnreportedChange_=!1,a.interceptors_=void 0,a.changeListeners_=void 0,a.value_=void 0,a.dehancer=void 0,a.enhancer=n,a.name_=r,a.equals=o,a.value_=n(t,void 0,r),a}$(t,e);var n=t.prototype;return n.dehanceValue=function(e){return void 0!==this.dehancer?this.dehancer(e):e},n.set=function(e){this.value_,(e=this.prepareNewValue_(e))!==tO.UNCHANGED&&(tZ(),this.setNewValue_(e))},n.prepareNewValue_=function(e){if(nS(this)){var t=nO(this,{object:this,type:nP,newValue:e});if(!t)return tO.UNCHANGED;e=t.newValue}return e=this.enhancer(e,this.value_,this.name_),this.equals(this.value_,e)?tO.UNCHANGED:e},n.setNewValue_=function(e){var t=this.value_;this.value_=e,this.reportChanged(),nE(this)&&nT(this,{type:nP,object:this,newValue:e,oldValue:t})},n.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},n.intercept_=function(e){return n_(this,e)},n.observe_=function(e,t){return t&&e({observableKind:"value",debugObjectName:this.name_,object:this,type:nP,newValue:this.value_,oldValue:void 0}),nC(this,e)},n.raw=function(){return this.value_},n.toJSON=function(){return this.get()},n.toString=function(){return this.name_+"["+this.value_+"]"},n.valueOf=function(){return U(this.get())},n[a]=function(){return this.valueOf()},t}(eo);s=Symbol.toPrimitive;var tl=function(){function e(e){this.dependenciesState_=l.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.isBeingObserved_=!1,this.isPendingUnobservation_=!1,this.observers_=new Set,this.diffValue_=0,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=l.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new tc(null),this.name_=void 0,this.triggeredBy_=void 0,this.isComputing_=!1,this.isRunningSetter_=!1,this.derivation=void 0,this.setter_=void 0,this.isTracing_=u.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,e.get||r(31),this.derivation=e.get,this.name_=e.name||"ComputedValue",e.set&&(this.setter_=te("ComputedValue-setter",e.set)),this.equals_=e.equals||(e.compareStructural||e.struct?el.structural:el.default),this.scope_=e.context,this.requiresReaction_=e.requiresReaction,this.keepAlive_=!!e.keepAlive}var t=e.prototype;return t.onBecomeStale_=function(){tj(this)},t.onBO=function(){this.onBOL&&this.onBOL.forEach(function(e){return e()})},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(e){return e()})},t.get=function(){if(this.isComputing_&&r(32,this.name_,this.derivation),0!==tO.inBatch||0!==this.observers_.size||this.keepAlive_){if(tD(this),th(this)){var e=tO.trackingContext;this.keepAlive_&&!e&&(tO.trackingContext=this),this.trackAndCompute()&&tR(this),tO.trackingContext=e}}else th(this)&&(this.warnAboutUntrackedRead_(),tN(),this.value_=this.computeValue_(!1),tP());var t=this.value_;if(td(t))throw t.cause;return t},t.set=function(e){if(this.setter_){this.isRunningSetter_&&r(33,this.name_),this.isRunningSetter_=!0;try{this.setter_.call(this.scope_,e)}finally{this.isRunningSetter_=!1}}else r(34,this.name_)},t.trackAndCompute=function(){var e=this.value_,t=this.dependenciesState_===l.NOT_TRACKING_,n=this.computeValue_(!0),r=t||td(e)||td(n)||!this.equals_(e,n);return r&&(this.value_=n),r},t.computeValue_=function(e){this.isComputing_=!0;var t,n=to(!1);if(e)t=tf(this,this.derivation,this.scope_);else if(!0===tO.disableErrorBoundaries)t=this.derivation.call(this.scope_);else try{t=this.derivation.call(this.scope_)}catch(r){t=new tc(r)}return ta(n),this.isComputing_=!1,t},t.suspend_=function(){this.keepAlive_||(tm(this),this.value_=void 0)},t.observe_=function(e,t){var n=this,r=!0,i=void 0;return t5(function(){var o=n.get();if(!r||t){var a=tv();e({observableKind:"computed",debugObjectName:n.name_,type:nP,object:n,newValue:o,oldValue:i}),ty(a)}r=!1,i=o})},t.warnAboutUntrackedRead_=function(){},t.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},t.valueOf=function(){return U(this.get())},t[s]=function(){return this.valueOf()},e}(),tu=R("ComputedValue",tl);!function(e){e[e.NOT_TRACKING_=-1]="NOT_TRACKING_",e[e.UP_TO_DATE_=0]="UP_TO_DATE_",e[e.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",e[e.STALE_=2]="STALE_"}(l||(l={})),function(e){e[e.NONE=0]="NONE",e[e.LOG=1]="LOG",e[e.BREAK=2]="BREAK"}(u||(u={}));var tc=function(e){this.cause=void 0,this.cause=e};function td(e){return e instanceof tc}function th(e){switch(e.dependenciesState_){case l.UP_TO_DATE_:return!1;case l.NOT_TRACKING_:case l.STALE_:return!0;case l.POSSIBLY_STALE_:for(var t=tb(!0),n=tv(),r=e.observing_,i=r.length,o=0;o<i;o++){var a=r[o];if(tu(a)){if(tO.disableErrorBoundaries)a.get();else try{a.get()}catch(s){return ty(n),tw(t),!0}if(e.dependenciesState_===l.STALE_)return ty(n),tw(t),!0}}return tx(e),ty(n),tw(t),!1}}function tf(e,t,n){var r,i=tb(!0);tx(e),e.newObserving_=Array(e.observing_.length+100),e.unboundDepsCount_=0,e.runId_=++tO.runId;var o=tO.trackingDerivation;if(tO.trackingDerivation=e,tO.inBatch++,!0===tO.disableErrorBoundaries)r=t.call(n);else try{r=t.call(n)}catch(a){r=new tc(a)}return tO.inBatch--,tO.trackingDerivation=o,tp(e),tw(i),r}function tp(e){for(var t=e.observing_,n=e.observing_=e.newObserving_,r=l.UP_TO_DATE_,i=0,o=e.unboundDepsCount_,a=0;a<o;a++){var s=n[a];0===s.diffValue_&&(s.diffValue_=1,i!==a&&(n[i]=s),i++),s.dependenciesState_>r&&(r=s.dependenciesState_)}for(n.length=i,e.newObserving_=null,o=t.length;o--;){var u=t[o];0===u.diffValue_&&tT(u,e),u.diffValue_=0}for(;i--;){var c=n[i];1===c.diffValue_&&(c.diffValue_=0,tC(c,e))}r!==l.UP_TO_DATE_&&(e.dependenciesState_=r,e.onBecomeStale_())}function tm(e){var t=e.observing_;e.observing_=[];for(var n=t.length;n--;)tT(t[n],e);e.dependenciesState_=l.NOT_TRACKING_}function tg(e){var t=tv();try{return e()}finally{ty(t)}}function tv(){var e=tO.trackingDerivation;return tO.trackingDerivation=null,e}function ty(e){tO.trackingDerivation=e}function tb(e){var t=tO.allowStateReads;return tO.allowStateReads=e,t}function tw(e){tO.allowStateReads=e}function tx(e){if(e.dependenciesState_!==l.UP_TO_DATE_){e.dependenciesState_=l.UP_TO_DATE_;for(var t=e.observing_,n=t.length;n--;)t[n].lowestObserverState_=l.UP_TO_DATE_}}var tk=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.batchId=Number.MIN_SAFE_INTEGER,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0,this.stateVersion=Number.MIN_SAFE_INTEGER},tS=!0,t_=!1,tO=function(){var e=m();return(e.__mobxInstanceCount>0&&!e.__mobxGlobals&&(tS=!1),e.__mobxGlobals&&e.__mobxGlobals.version!==new tk().version&&(tS=!1),tS)?e.__mobxGlobals?(e.__mobxInstanceCount+=1,e.__mobxGlobals.UNCHANGED||(e.__mobxGlobals.UNCHANGED={}),e.__mobxGlobals):(e.__mobxInstanceCount=1,e.__mobxGlobals=new tk):(setTimeout(function(){t_||r(35)},1),new tk)}();function tE(){if((tO.pendingReactions.length||tO.inBatch||tO.isRunningReactions)&&r(36),t_=!0,tS){var e=m();0==--e.__mobxInstanceCount&&(e.__mobxGlobals=void 0),tO=new tk}}function tC(e,t){e.observers_.add(t),e.lowestObserverState_>t.dependenciesState_&&(e.lowestObserverState_=t.dependenciesState_)}function tT(e,t){e.observers_.delete(t),0===e.observers_.size&&tA(e)}function tA(e){!1===e.isPendingUnobservation_&&(e.isPendingUnobservation_=!0,tO.pendingUnobservations.push(e))}function tN(){0===tO.inBatch&&(tO.batchId=tO.batchId<Number.MAX_SAFE_INTEGER?tO.batchId+1:Number.MIN_SAFE_INTEGER),tO.inBatch++}function tP(){if(0==--tO.inBatch){tB();for(var e=tO.pendingUnobservations,t=0;t<e.length;t++){var n=e[t];n.isPendingUnobservation_=!1,0===n.observers_.size&&(n.isBeingObserved_&&(n.isBeingObserved_=!1,n.onBUO()),n instanceof tl&&n.suspend_())}tO.pendingUnobservations=[]}}function tD(e){var t=tO.trackingDerivation;return null!==t?(t.runId_!==e.lastAccessedBy_&&(e.lastAccessedBy_=t.runId_,t.newObserving_[t.unboundDepsCount_++]=e,!e.isBeingObserved_&&tO.trackingContext&&(e.isBeingObserved_=!0,e.onBO())),e.isBeingObserved_):(0===e.observers_.size&&tO.inBatch>0&&tA(e),!1)}function tI(e){e.lowestObserverState_!==l.STALE_&&(e.lowestObserverState_=l.STALE_,e.observers_.forEach(function(e){e.dependenciesState_===l.UP_TO_DATE_&&e.onBecomeStale_(),e.dependenciesState_=l.STALE_}))}function tR(e){e.lowestObserverState_!==l.STALE_&&(e.lowestObserverState_=l.STALE_,e.observers_.forEach(function(t){t.dependenciesState_===l.POSSIBLY_STALE_?t.dependenciesState_=l.STALE_:t.dependenciesState_===l.UP_TO_DATE_&&(e.lowestObserverState_=l.UP_TO_DATE_)}))}function tj(e){e.lowestObserverState_===l.UP_TO_DATE_&&(e.lowestObserverState_=l.POSSIBLY_STALE_,e.observers_.forEach(function(e){e.dependenciesState_===l.UP_TO_DATE_&&(e.dependenciesState_=l.POSSIBLY_STALE_,e.onBecomeStale_())}))}var tM=function(){function e(e,t,n,r){void 0===e&&(e="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=l.NOT_TRACKING_,this.diffValue_=0,this.runId_=0,this.unboundDepsCount_=0,this.isDisposed_=!1,this.isScheduled_=!1,this.isTrackPending_=!1,this.isRunning_=!1,this.isTracing_=u.NONE,this.name_=e,this.onInvalidate_=t,this.errorHandler_=n,this.requiresObservable_=r}var t=e.prototype;return t.onBecomeStale_=function(){this.schedule_()},t.schedule_=function(){this.isScheduled_||(this.isScheduled_=!0,tO.pendingReactions.push(this),tB())},t.isScheduled=function(){return this.isScheduled_},t.runReaction_=function(){if(!this.isDisposed_){tN(),this.isScheduled_=!1;var e=tO.trackingContext;if(tO.trackingContext=this,th(this)){this.isTrackPending_=!0;try{this.onInvalidate_()}catch(t){this.reportExceptionInDerivation_(t)}}tO.trackingContext=e,tP()}},t.track=function(e){if(!this.isDisposed_){tN(),tZ(),this.isRunning_=!0;var t=tO.trackingContext;tO.trackingContext=this;var n=tf(this,e,void 0);tO.trackingContext=t,this.isRunning_=!1,this.isTrackPending_=!1,this.isDisposed_&&tm(this),td(n)&&this.reportExceptionInDerivation_(n.cause),tP()}},t.reportExceptionInDerivation_=function(e){var t=this;if(this.errorHandler_){this.errorHandler_(e,this);return}if(tO.disableErrorBoundaries)throw e;var n="[mobx] uncaught error in '"+this+"'";tO.suppressReactionErrors||console.error(n,e),tO.globalReactionErrorHandlers.forEach(function(n){return n(e,t)})},t.dispose=function(){this.isDisposed_||(this.isDisposed_=!0,this.isRunning_||(tN(),tm(this),tP()))},t.getDisposer_=function(e){var t=this,n=function n(){t.dispose(),null==e||null==e.removeEventListener||e.removeEventListener("abort",n)};return null==e||null==e.addEventListener||e.addEventListener("abort",n),n[ei]=this,n},t.toString=function(){return"Reaction["+this.name_+"]"},t.trace=function(e){void 0===e&&(e=!1)},e}(),tL=100,tV=function(e){return e()};function tB(){tO.inBatch>0||tO.isRunningReactions||tV(tU)}function tU(){tO.isRunningReactions=!0;for(var e=tO.pendingReactions,t=0;e.length>0;){++t===tL&&(console.error("[mobx] cycle in reaction: "+e[0]),e.splice(0));for(var n=e.splice(0),r=0,i=n.length;r<i;r++)n[r].runReaction_()}tO.isRunningReactions=!1}var tq=R("Reaction",tM);function tF(e){var t=tV;tV=function(n){return e(function(){return t(n)})}}function tZ(){return!1}function tz(e){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var tH="action",t$="action.bound",tG="autoAction",tW="autoAction.bound",tY="<unnamed action>",tK=em(tH),tJ=em(t$,{bound:!0}),tX=em(tG,{autoAction:!0}),tQ=em(tW,{autoAction:!0,bound:!0});function t0(e){return function(t,n){return C(t)?te(t.name||tY,t,e):C(n)?te(t,n,e):T(n)?en(t,n,e?tX:tK):T(t)?et(em(e?tG:tH,{name:t,autoAction:e})):void 0}}var t1=t0(!1);Object.assign(t1,tK);var t2=t0(!0);function t3(e){return C(e)&&!0===e.isMobxAction}function t5(e,t){void 0===t&&(t=x);var n,r,i,o,a,s,l=null!=(n=null==(r=t)?void 0:r.name)?n:"Autorun";if(t.scheduler||t.delay){var u=t6(t),c=!1;s=new tM(l,function(){c||(c=!0,u(function(){c=!1,s.isDisposed_||s.track(d)}))},t.onError,t.requiresObservable)}else s=new tM(l,function(){this.track(d)},t.onError,t.requiresObservable);function d(){e(s)}return null!=(i=t)&&null!=(o=i.signal)&&o.aborted||s.schedule_(),s.getDisposer_(null==(a=t)?void 0:a.signal)}Object.assign(t2,tX),t1.bound=et(tJ),t2.bound=et(tQ);var t4=function(e){return e()};function t6(e){return e.scheduler?e.scheduler:e.delay?function(t){return setTimeout(t,e.delay)}:t4}var t8="onBO",t7="onBUO";function t9(e,t,n){return nt(t8,e,t,n)}function ne(e,t,n){return nt(t7,e,t,n)}function nt(e,t,n,r){var i="function"==typeof r?ro(t,n):ro(t),o=C(r)?r:n,a=e+"L";return i[a]?i[a].add(o):i[a]=new Set([o]),function(){var e=i[a];e&&(e.delete(o),0===e.size&&delete i[a])}}var nn="never",nr="always",ni="observed";function no(e){!0===e.isolateGlobalState&&tE();var t=e.useProxies,n=e.enforceActions;if(void 0!==t&&(tO.useProxies=t===nr||t!==nn&&"undefined"!=typeof Proxy),"ifavailable"===t&&(tO.verifyProxies=!0),void 0!==n){var r=n===nr?nr:n===ni;tO.enforceActions=r,tO.allowStateChanges=!0!==r&&r!==nr}["computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","disableErrorBoundaries","safeDescriptors"].forEach(function(t){t in e&&(tO[t]=!!e[t])}),tO.allowStateReads=!tO.observableRequiresReaction,e.reactionScheduler&&tF(e.reactionScheduler)}function na(e,t,n,r){var i=F(t);return rl(function(){var t=n1(e,r)[ei];B(i).forEach(function(e){t.extend_(e,i[e],!n||!(e in n)||n[e])})}),e}function ns(e,t){return nl(ro(e,t))}function nl(e){var t={name:e.name_};return e.observing_&&e.observing_.length>0&&(t.dependencies=nu(e.observing_).map(nl)),t}function nu(e){return Array.from(new Set(e))}var nc=0;function nd(){this.message="FLOW_CANCELLED"}nd.prototype=Object.create(Error.prototype);var nh=ew("flow"),nf=ew("flow.bound",{bound:!0}),np=Object.assign(function(e,t){if(T(t))return en(e,t,nh);var n=e,r=n.name||"<unnamed flow>",i=function(){var e,t=this,i=arguments,o=++nc,a=t1(r+" - runid: "+o+" - init",n).apply(t,i),s=void 0,l=new Promise(function(t,n){var i=0;function l(e){var t;s=void 0;try{t=t1(r+" - runid: "+o+" - yield "+i++,a.next).call(a,e)}catch(l){return n(l)}c(t)}function u(e){var t;s=void 0;try{t=t1(r+" - runid: "+o+" - yield "+i++,a.throw).call(a,e)}catch(l){return n(l)}c(t)}function c(e){if(C(null==e?void 0:e.then)){e.then(c,n);return}return e.done?t(e.value):(s=Promise.resolve(e.value)).then(l,u)}e=n,l(void 0)});return l.cancel=t1(r+" - runid: "+o+" - cancel",function(){try{s&&nm(s);var t=a.return(void 0),n=Promise.resolve(t.value);n.then(E,E),nm(n),e(new nd)}catch(r){e(r)}}),l};return i.isMobXFlow=!0,i},nh);function nm(e){C(e.cancel)&&e.cancel()}function ng(e){return(null==e?void 0:e.isMobXFlow)===!0}function nv(e,t){return!!e&&(void 0!==t?!!n5(e)&&e[ei].values_.has(t):n5(e)||!!e[ei]||ea(e)||tq(e)||tu(e))}function ny(e){return nv(e)}function nb(e,t){void 0===t&&(t=void 0),tN();try{return e.apply(t)}finally{tP()}}function nw(e){return e[ei]}np.bound=et(nf);var nx={has:function(e,t){return nw(e).has_(t)},get:function(e,t){return nw(e).get_(t)},set:function(e,t,n){var r;return!!T(t)&&(null==(r=nw(e).set_(t,n,!0))||r)},deleteProperty:function(e,t){var n;return!!T(t)&&(null==(n=nw(e).delete_(t,!0))||n)},defineProperty:function(e,t,n){var r;return null==(r=nw(e).defineProperty_(t,n))||r},ownKeys:function(e){return nw(e).ownKeys_()},preventExtensions:function(e){r(13)}};function nk(e,t){var n,r;return _(),null!=(r=(n=(e=n1(e,t))[ei]).proxy_)?r:n.proxy_=new Proxy(e,nx)}function nS(e){return void 0!==e.interceptors_&&e.interceptors_.length>0}function n_(e,t){var n=e.interceptors_||(e.interceptors_=[]);return n.push(t),O(function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)})}function nO(e,t){var n=tv();try{for(var i=[].concat(e.interceptors_||[]),o=0,a=i.length;o<a&&((t=i[o](t))&&!t.type&&r(14),t);o++);return t}finally{ty(n)}}function nE(e){return void 0!==e.changeListeners_&&e.changeListeners_.length>0}function nC(e,t){var n=e.changeListeners_||(e.changeListeners_=[]);return n.push(t),O(function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)})}function nT(e,t){var n=tv(),r=e.changeListeners_;if(r){r=r.slice();for(var i=0,o=r.length;i<o;i++)r[i](t);ty(n)}}function nA(e,t,n){return rl(function(){var r,i=n1(e,n)[ei];null!=(r=t)||(t=er(e)),B(t).forEach(function(e){return i.make_(e,t[e])})}),e}var nN="splice",nP="update",nD=1e4,nI={get:function(e,t){var n=e[ei];return t===ei?n:"length"===t?n.getArrayLength_():"string"!=typeof t||isNaN(t)?q(nM,t)?nM[t]:e[t]:n.get_(parseInt(t))},set:function(e,t,n){var r=e[ei];return"length"===t&&r.setArrayLength_(n),"symbol"==typeof t||isNaN(t)?e[t]=n:r.set_(parseInt(t),n),!0},preventExtensions:function(){r(15)}},nR=function(){function e(e,t,n,r){void 0===e&&(e="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=n,this.legacyMode_=r,this.atom_=new eo(e),this.enhancer_=function(e,n){return t(e,n,"ObservableArray[..]")}}var t=e.prototype;return t.dehanceValue_=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.dehanceValues_=function(e){return void 0!==this.dehancer&&e.length>0?e.map(this.dehancer):e},t.intercept_=function(e){return n_(this,e)},t.observe_=function(e,t){return void 0===t&&(t=!1),t&&e({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),nC(this,e)},t.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},t.setArrayLength_=function(e){("number"!=typeof e||isNaN(e)||e<0)&&r("Out of range: "+e);var t=this.values_.length;if(e!==t){if(e>t){for(var n=Array(e-t),i=0;i<e-t;i++)n[i]=void 0;this.spliceWithArray_(t,0,n)}else this.spliceWithArray_(e,t-e)}},t.updateArrayLength_=function(e,t){e!==this.lastKnownLength_&&r(16),this.lastKnownLength_+=t,this.legacyMode_&&t>0&&rr(e+t+1)},t.spliceWithArray_=function(e,t,n){var r=this;this.atom_;var i=this.values_.length;if(void 0===e?e=0:e>i?e=i:e<0&&(e=Math.max(0,i+e)),t=1==arguments.length?i-e:null==t?0:Math.max(0,Math.min(t,i-e)),void 0===n&&(n=w),nS(this)){var o=nO(this,{object:this.proxy_,type:nN,index:e,removedCount:t,added:n});if(!o)return w;t=o.removedCount,n=o.added}if(n=0===n.length?n:n.map(function(e){return r.enhancer_(e,void 0)}),this.legacyMode_){var a=n.length-t;this.updateArrayLength_(i,a)}var s=this.spliceItemsIntoValues_(e,t,n);return(0!==t||0!==n.length)&&this.notifyArraySplice_(e,n,s),this.dehanceValues_(s)},t.spliceItemsIntoValues_=function(e,t,n){if(n.length<nD){var r;return(r=this.values_).splice.apply(r,[e,t].concat(n))}var i=this.values_.slice(e,e+t),o=this.values_.slice(e+t);this.values_.length+=n.length-t;for(var a=0;a<n.length;a++)this.values_[e+a]=n[a];for(var s=0;s<o.length;s++)this.values_[e+n.length+s]=o[s];return i},t.notifyArrayChildUpdate_=function(e,t,n){var r=!this.owned_&&tZ(),i=nE(this),o=i||r?{observableKind:"array",object:this.proxy_,type:nP,debugObjectName:this.atom_.name_,index:e,newValue:t,oldValue:n}:null;this.atom_.reportChanged(),i&&nT(this,o)},t.notifyArraySplice_=function(e,t,n){var r=!this.owned_&&tZ(),i=nE(this),o=i||r?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:nN,index:e,removed:n,added:t,removedCount:n.length,addedCount:t.length}:null;this.atom_.reportChanged(),i&&nT(this,o)},t.get_=function(e){if(this.legacyMode_&&e>=this.values_.length){console.warn("[mobx] Out of bounds read: "+e);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[e])},t.set_=function(e,t){var n=this.values_;if(this.legacyMode_&&e>n.length&&r(17,e,n.length),e<n.length){this.atom_;var i=n[e];if(nS(this)){var o=nO(this,{type:nP,object:this.proxy_,index:e,newValue:t});if(!o)return;t=o.newValue}(t=this.enhancer_(t,i))!==i&&(n[e]=t,this.notifyArrayChildUpdate_(e,t,i))}else{for(var a=Array(e+1-n.length),s=0;s<a.length-1;s++)a[s]=void 0;a[a.length-1]=t,this.spliceWithArray_(n.length,0,a)}},e}();function nj(e,t,n,r){return void 0===n&&(n="ObservableArray"),void 0===r&&(r=!1),_(),rl(function(){var i=new nR(n,t,r,!1);I(i.values_,ei,i);var o=new Proxy(i.values_,nI);return i.proxy_=o,e&&e.length&&i.spliceWithArray_(0,0,e),o})}var nM={clear:function(){return this.splice(0)},replace:function(e){var t=this[ei];return t.spliceWithArray_(0,t.values_.length,e)},toJSON:function(){return this.slice()},splice:function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=this[ei];switch(arguments.length){case 0:return[];case 1:return o.spliceWithArray_(e);case 2:return o.spliceWithArray_(e,t)}return o.spliceWithArray_(e,t,r)},spliceWithArray:function(e,t,n){return this[ei].spliceWithArray_(e,t,n)},push:function(){for(var e=this[ei],t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.spliceWithArray_(e.values_.length,0,n),e.values_.length},pop:function(){return this.splice(Math.max(this[ei].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var e=this[ei],t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.spliceWithArray_(0,0,n),e.values_.length},reverse:function(){return tO.trackingDerivation&&r(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){tO.trackingDerivation&&r(37,"sort");var e=this.slice();return e.sort.apply(e,arguments),this.replace(e),this},remove:function(e){var t=this[ei],n=t.dehanceValues_(t.values_).indexOf(e);return n>-1&&(this.splice(n,1),!0)}};function nL(e,t){"function"==typeof Array.prototype[e]&&(nM[e]=t(e))}function nV(e){return function(){var t=this[ei];t.atom_.reportObserved();var n=t.dehanceValues_(t.values_);return n[e].apply(n,arguments)}}function nB(e){return function(t,n){var r=this,i=this[ei];return i.atom_.reportObserved(),i.dehanceValues_(i.values_)[e](function(e,i){return t.call(n,e,i,r)})}}function nU(e){return function(){var t=this,n=this[ei];n.atom_.reportObserved();var r=n.dehanceValues_(n.values_),i=arguments[0];return arguments[0]=function(e,n,r){return i(e,n,r,t)},r[e].apply(r,arguments)}}nL("concat",nV),nL("flat",nV),nL("includes",nV),nL("indexOf",nV),nL("join",nV),nL("lastIndexOf",nV),nL("slice",nV),nL("toString",nV),nL("toLocaleString",nV),nL("every",nB),nL("filter",nB),nL("find",nB),nL("findIndex",nB),nL("flatMap",nB),nL("forEach",nB),nL("map",nB),nL("some",nB),nL("reduce",nU),nL("reduceRight",nU);var nq=R("ObservableArrayAdministration",nR);function nF(e){return A(e)&&nq(e[ei])}var nZ={},nz="add",nH="delete";c=Symbol.iterator,d=Symbol.toStringTag;var n$=function(){function e(e,t,n){var i=this;void 0===t&&(t=eu),void 0===n&&(n="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[ei]=nZ,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=t,this.name_=n,C(Map)||r(18),rl(function(){i.keysAtom_=es("ObservableMap.keys()"),i.data_=new Map,i.hasMap_=new Map,e&&i.merge(e)})}var t=e.prototype;return t.has_=function(e){return this.data_.has(e)},t.has=function(e){var t=this;if(!tO.trackingDerivation)return this.has_(e);var n=this.hasMap_.get(e);if(!n){var r=n=new ts(this.has_(e),ed,"ObservableMap.key?",!1);this.hasMap_.set(e,r),ne(r,function(){return t.hasMap_.delete(e)})}return n.get()},t.set=function(e,t){var n=this.has_(e);if(nS(this)){var r=nO(this,{type:n?nP:nz,object:this,newValue:t,name:e});if(!r)return this;t=r.newValue}return n?this.updateValue_(e,t):this.addValue_(e,t),this},t.delete=function(e){var t=this;if(this.keysAtom_,nS(this)&&!nO(this,{type:nH,object:this,name:e}))return!1;if(this.has_(e)){var n=tZ(),r=nE(this),i=r||n?{observableKind:"map",debugObjectName:this.name_,type:nH,object:this,oldValue:this.data_.get(e).value_,name:e}:null;return nb(function(){var n;t.keysAtom_.reportChanged(),null==(n=t.hasMap_.get(e))||n.setNewValue_(!1),t.data_.get(e).setNewValue_(void 0),t.data_.delete(e)}),r&&nT(this,i),!0}return!1},t.updateValue_=function(e,t){var n=this.data_.get(e);if((t=n.prepareNewValue_(t))!==tO.UNCHANGED){var r=tZ(),i=nE(this),o=i||r?{observableKind:"map",debugObjectName:this.name_,type:nP,object:this,oldValue:n.value_,name:e,newValue:t}:null;n.setNewValue_(t),i&&nT(this,o)}},t.addValue_=function(e,t){var n=this;this.keysAtom_,nb(function(){var r,i=new ts(t,n.enhancer_,"ObservableMap.key",!1);n.data_.set(e,i),t=i.value_,null==(r=n.hasMap_.get(e))||r.setNewValue_(!0),n.keysAtom_.reportChanged()});var r=tZ(),i=nE(this),o=i||r?{observableKind:"map",debugObjectName:this.name_,type:nz,object:this,name:e,newValue:t}:null;i&&nT(this,o)},t.get=function(e){return this.has(e)?this.dehanceValue_(this.data_.get(e).get()):this.dehanceValue_(void 0)},t.dehanceValue_=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},t.values=function(){var e=this,t=this.keys();return rf({next:function(){var n=t.next(),r=n.done,i=n.value;return{done:r,value:r?void 0:e.get(i)}}})},t.entries=function(){var e=this,t=this.keys();return rf({next:function(){var n=t.next(),r=n.done,i=n.value;return{done:r,value:r?void 0:[i,e.get(i)]}}})},t[c]=function(){return this.entries()},t.forEach=function(e,t){for(var n,r=J(this);!(n=r()).done;){var i=n.value,o=i[0],a=i[1];e.call(t,a,o,this)}},t.merge=function(e){var t=this;return nG(e)&&(e=new Map(e)),nb(function(){N(e)?V(e).forEach(function(n){return t.set(n,e[n])}):Array.isArray(e)?e.forEach(function(e){var n=e[0],r=e[1];return t.set(n,r)}):j(e)?(e.constructor!==Map&&r(19,e),e.forEach(function(e,n){return t.set(n,e)})):null!=e&&r(20,e)}),this},t.clear=function(){var e=this;nb(function(){tg(function(){for(var t,n=J(e.keys());!(t=n()).done;){var r=t.value;e.delete(r)}})})},t.replace=function(e){var t=this;return nb(function(){for(var n,r=nW(e),i=new Map,o=!1,a=J(t.data_.keys());!(n=a()).done;){var s=n.value;if(!r.has(s)){if(t.delete(s))o=!0;else{var l=t.data_.get(s);i.set(s,l)}}}for(var u,c=J(r.entries());!(u=c()).done;){var d=u.value,h=d[0],f=d[1],p=t.data_.has(h);if(t.set(h,f),t.data_.has(h)){var m=t.data_.get(h);i.set(h,m),p||(o=!0)}}if(!o){if(t.data_.size!==i.size)t.keysAtom_.reportChanged();else for(var g=t.data_.keys(),v=i.keys(),y=g.next(),b=v.next();!y.done;){if(y.value!==b.value){t.keysAtom_.reportChanged();break}y=g.next(),b=v.next()}}t.data_=i}),this},t.toString=function(){return"[object ObservableMap]"},t.toJSON=function(){return Array.from(this)},t.observe_=function(e,t){return nC(this,e)},t.intercept_=function(e){return n_(this,e)},z(e,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:d,get:function(){return"Map"}}]),e}(),nG=R("ObservableMap",n$);function nW(e){if(j(e)||nG(e))return e;if(Array.isArray(e))return new Map(e);if(!N(e))return r(21,e);var t=new Map;for(var n in e)t.set(n,e[n]);return t}var nY={};h=Symbol.iterator,f=Symbol.toStringTag;var nK=function(){function e(e,t,n){var i=this;void 0===t&&(t=eu),void 0===n&&(n="ObservableSet"),this.name_=void 0,this[ei]=nY,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=n,C(Set)||r(22),this.enhancer_=function(e,r){return t(e,r,n)},rl(function(){i.atom_=es(i.name_),e&&i.replace(e)})}var t=e.prototype;return t.dehanceValue_=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.clear=function(){var e=this;nb(function(){tg(function(){for(var t,n=J(e.data_.values());!(t=n()).done;){var r=t.value;e.delete(r)}})})},t.forEach=function(e,t){for(var n,r=J(this);!(n=r()).done;){var i=n.value;e.call(t,i,i,this)}},t.add=function(e){var t=this;if(this.atom_,nS(this)&&!nO(this,{type:nz,object:this,newValue:e}))return this;if(!this.has(e)){nb(function(){t.data_.add(t.enhancer_(e,void 0)),t.atom_.reportChanged()});var n=!1,r=nE(this),i=r||n?{observableKind:"set",debugObjectName:this.name_,type:nz,object:this,newValue:e}:null;r&&nT(this,i)}return this},t.delete=function(e){var t=this;if(nS(this)&&!nO(this,{type:nH,object:this,oldValue:e}))return!1;if(this.has(e)){var n=!1,r=nE(this),i=r||n?{observableKind:"set",debugObjectName:this.name_,type:nH,object:this,oldValue:e}:null;return nb(function(){t.atom_.reportChanged(),t.data_.delete(e)}),r&&nT(this,i),!0}return!1},t.has=function(e){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(e))},t.entries=function(){var e=0,t=Array.from(this.keys()),n=Array.from(this.values());return rf({next:function(){var r=e;return e+=1,r<n.length?{value:[t[r],n[r]],done:!1}:{done:!0}}})},t.keys=function(){return this.values()},t.values=function(){this.atom_.reportObserved();var e=this,t=0,n=Array.from(this.data_.values());return rf({next:function(){return t<n.length?{value:e.dehanceValue_(n[t++]),done:!1}:{done:!0}}})},t.replace=function(e){var t=this;return nJ(e)&&(e=new Set(e)),nb(function(){Array.isArray(e)?(t.clear(),e.forEach(function(e){return t.add(e)})):M(e)?(t.clear(),e.forEach(function(e){return t.add(e)})):null!=e&&r("Cannot initialize set from "+e)}),this},t.observe_=function(e,t){return nC(this,e)},t.intercept_=function(e){return n_(this,e)},t.toJSON=function(){return Array.from(this)},t.toString=function(){return"[object ObservableSet]"},t[h]=function(){return this.values()},z(e,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:f,get:function(){return"Set"}}]),e}(),nJ=R("ObservableSet",nK),nX=Object.create(null),nQ="remove",n0=function(){function e(e,t,n,r){void 0===t&&(t=new Map),void 0===r&&(r=eR),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=e,this.values_=t,this.name_=n,this.defaultAnnotation_=r,this.keysAtom_=new eo("ObservableObject.keys"),this.isPlainObject_=N(this.target_)}var t=e.prototype;return t.getObservablePropValue_=function(e){return this.values_.get(e).get()},t.setObservablePropValue_=function(e,t){var n=this.values_.get(e);if(n instanceof tl)return n.set(t),!0;if(nS(this)){var r=nO(this,{type:nP,object:this.proxy_||this.target_,name:e,newValue:t});if(!r)return null;t=r.newValue}if((t=n.prepareNewValue_(t))!==tO.UNCHANGED){var i=nE(this),o=!1,a=i||o?{type:nP,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:n.value_,name:e,newValue:t}:null;n.setNewValue_(t),i&&nT(this,a)}return!0},t.get_=function(e){return tO.trackingDerivation&&!q(this.target_,e)&&this.has_(e),this.target_[e]},t.set_=function(e,t,n){return(void 0===n&&(n=!1),q(this.target_,e))?this.values_.has(e)?this.setObservablePropValue_(e,t):n?Reflect.set(this.target_,e,t):(this.target_[e]=t,!0):this.extend_(e,{value:t,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,n)},t.has_=function(e){if(!tO.trackingDerivation)return e in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var t=this.pendingKeys_.get(e);return t||(t=new ts(e in this.target_,ed,"ObservableObject.key?",!1),this.pendingKeys_.set(e,t)),t.get()},t.make_=function(e,t){if(!0===t&&(t=this.defaultAnnotation_),!1!==t){if(!(e in this.target_)){var n;if(null!=(n=this.target_[ee])&&n[e])return;r(1,t.annotationType_,this.name_+"."+e.toString())}for(var i=this.target_;i&&i!==b;){var o=v(i,e);if(o){var a=t.make_(this,e,o,i);if(0===a)return;if(1===a)break}i=Object.getPrototypeOf(i)}n4(this,t,e)}},t.extend_=function(e,t,n,r){if(void 0===r&&(r=!1),!0===n&&(n=this.defaultAnnotation_),!1===n)return this.defineProperty_(e,t,r);var i=n.extend_(this,e,t,r);return i&&n4(this,n,e),i},t.defineProperty_=function(e,t,n){void 0===n&&(n=!1),this.keysAtom_;try{tN();var r=this.delete_(e);if(!r)return r;if(nS(this)){var i=nO(this,{object:this.proxy_||this.target_,name:e,type:nz,newValue:t.value});if(!i)return null;var o=i.newValue;t.value!==o&&(t=H({},t,{value:o}))}if(n){if(!Reflect.defineProperty(this.target_,e,t))return!1}else y(this.target_,e,t);this.notifyPropertyAddition_(e,t.value)}finally{tP()}return!0},t.defineObservableProperty_=function(e,t,n,r){void 0===r&&(r=!1),this.keysAtom_;try{tN();var i=this.delete_(e);if(!i)return i;if(nS(this)){var o=nO(this,{object:this.proxy_||this.target_,name:e,type:nz,newValue:t});if(!o)return null;t=o.newValue}var a=n3(e),s={configurable:!tO.safeDescriptors||this.isPlainObject_,enumerable:!0,get:a.get,set:a.set};if(r){if(!Reflect.defineProperty(this.target_,e,s))return!1}else y(this.target_,e,s);var l=new ts(t,n,"ObservableObject.key",!1);this.values_.set(e,l),this.notifyPropertyAddition_(e,l.value_)}finally{tP()}return!0},t.defineComputedProperty_=function(e,t,n){void 0===n&&(n=!1),this.keysAtom_;try{tN();var r=this.delete_(e);if(!r)return r;if(nS(this)&&!nO(this,{object:this.proxy_||this.target_,name:e,type:nz,newValue:void 0}))return null;t.name||(t.name="ObservableObject.key"),t.context=this.proxy_||this.target_;var i=n3(e),o={configurable:!tO.safeDescriptors||this.isPlainObject_,enumerable:!1,get:i.get,set:i.set};if(n){if(!Reflect.defineProperty(this.target_,e,o))return!1}else y(this.target_,e,o);this.values_.set(e,new tl(t)),this.notifyPropertyAddition_(e,void 0)}finally{tP()}return!0},t.delete_=function(e,t){if(void 0===t&&(t=!1),this.keysAtom_,!q(this.target_,e))return!0;if(nS(this)&&!nO(this,{object:this.proxy_||this.target_,name:e,type:nQ}))return null;try{tN();var n,r,i,o=nE(this),a=!1,s=this.values_.get(e),l=void 0;if(!s&&(o||a)&&(l=null==(i=v(this.target_,e))?void 0:i.value),t){if(!Reflect.deleteProperty(this.target_,e))return!1}else delete this.target_[e];if(s&&(this.values_.delete(e),s instanceof ts&&(l=s.value_),tI(s)),this.keysAtom_.reportChanged(),null==(n=this.pendingKeys_)||null==(r=n.get(e))||r.set(e in this.target_),o||a){var u={type:nQ,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:l,name:e};o&&nT(this,u)}}finally{tP()}return!0},t.observe_=function(e,t){return nC(this,e)},t.intercept_=function(e){return n_(this,e)},t.notifyPropertyAddition_=function(e,t){var n,r,i=nE(this),o=!1;if(i||o){var a=i||o?{type:nz,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:e,newValue:t}:null;i&&nT(this,a)}null==(n=this.pendingKeys_)||null==(r=n.get(e))||r.set(!0),this.keysAtom_.reportChanged()},t.ownKeys_=function(){return this.keysAtom_.reportObserved(),B(this.target_)},t.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},e}();function n1(e,t){if(q(e,ei))return e;var n,r=null!=(n=null==t?void 0:t.name)?n:"ObservableObject",i=new n0(e,new Map,String(r),eK(t));return D(e,ei,i),e}var n2=R("ObservableObjectAdministration",n0);function n3(e){return nX[e]||(nX[e]={get:function(){return this[ei].getObservablePropValue_(e)},set:function(t){return this[ei].setObservablePropValue_(e,t)}})}function n5(e){return!!A(e)&&n2(e[ei])}function n4(e,t,n){var r;null==(r=e.target_[ee])||delete r[n]}var n6=rt(0),n8=function(){var e=!1,t={};return Object.defineProperty(t,"0",{set:function(){e=!0}}),Object.create(t)["0"]=1,!1===e}(),n7=0,n9=function(){};!function(e,t){Object.setPrototypeOf?Object.setPrototypeOf(e.prototype,t):void 0!==e.prototype.__proto__?e.prototype.__proto__=t:e.prototype=t}(n9,Array.prototype);var re=function(e,t,n){function r(t,n,r,i){var o;return void 0===r&&(r="ObservableArray"),void 0===i&&(i=!1),o=e.call(this)||this,rl(function(){var e=new nR(r,n,i,!0);e.proxy_=W(o),I(W(o),ei,e),t&&t.length&&o.spliceWithArray(0,0,t),n8&&Object.defineProperty(W(o),"0",n6)}),o}$(r,e);var i=r.prototype;return i.concat=function(){this[ei].atom_.reportObserved();for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.prototype.concat.apply(this.slice(),t.map(function(e){return nF(e)?e.slice():e}))},i[n]=function(){var e=this,t=0;return rf({next:function(){return t<e.length?{value:e[t++],done:!1}:{done:!0,value:void 0}}})},z(r,[{key:"length",get:function(){return this[ei].getArrayLength_()},set:function(e){this[ei].setArrayLength_(e)}},{key:t,get:function(){return"Array"}}]),r}(n9,Symbol.toStringTag,Symbol.iterator);function rt(e){return{enumerable:!1,configurable:!0,get:function(){return this[ei].get_(e)},set:function(t){this[ei].set_(e,t)}}}function rn(e){y(re.prototype,""+e,rt(e))}function rr(e){if(e>n7){for(var t=n7;t<e+100;t++)rn(t);n7=e}}function ri(e,t,n){return new re(e,t,n)}function ro(e,t){if("object"==typeof e&&null!==e){if(nF(e))return void 0!==t&&r(23),e[ei].atom_;if(nJ(e))return e.atom_;if(nG(e)){if(void 0===t)return e.keysAtom_;var n=e.data_.get(t)||e.hasMap_.get(t);return n||r(25,t,rs(e)),n}if(n5(e)){if(!t)return r(26);var i=e[ei].values_.get(t);return i||r(27,t,rs(e)),i}if(ea(e)||tu(e)||tq(e))return e}else if(C(e)&&tq(e[ei]))return e[ei];r(28)}function ra(e,t){return(e||r(29),void 0!==t)?ra(ro(e,t)):ea(e)||tu(e)||tq(e)||nG(e)||nJ(e)?e:e[ei]?e[ei]:void r(24,e)}function rs(e,t){var n;if(void 0!==t)n=ro(e,t);else{if(t3(e))return e.name;n=n5(e)||nG(e)||nJ(e)?ra(e):ro(e)}return n.name_}function rl(e){var t=tv(),n=to(!0);tN();try{return e()}finally{tP(),ta(n),ty(t)}}Object.entries(nM).forEach(function(e){var t=e[0],n=e[1];"concat"!==t&&D(re.prototype,t,n)}),rr(1e3);var ru=b.toString;function rc(e,t,n){return void 0===n&&(n=-1),rd(e,t,n)}function rd(e,t,n,r,i){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return!1;if(e!=e)return t!=t;var o=typeof e;if("function"!==o&&"object"!==o&&"object"!=typeof t)return!1;var a=ru.call(e);if(a!==ru.call(t))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":if(+e!=+e)return+t!=+t;return 0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return"undefined"!=typeof Symbol&&Symbol.valueOf.call(e)===Symbol.valueOf.call(t);case"[object Map]":case"[object Set]":n>=0&&n++}e=rh(e),t=rh(t);var s="[object Array]"===a;if(!s){if("object"!=typeof e||"object"!=typeof t)return!1;var l=e.constructor,u=t.constructor;if(l!==u&&!(C(l)&&l instanceof l&&C(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1}if(0===n)return!1;n<0&&(n=-1),i=i||[];for(var c=(r=r||[]).length;c--;)if(r[c]===e)return i[c]===t;if(r.push(e),i.push(t),s){if((c=e.length)!==t.length)return!1;for(;c--;)if(!rd(e[c],t[c],n-1,r,i))return!1}else{var d,h=Object.keys(e);if(c=h.length,Object.keys(t).length!==c)return!1;for(;c--;)if(!(q(t,d=h[c])&&rd(e[d],t[d],n-1,r,i)))return!1}return r.pop(),i.pop(),!0}function rh(e){return nF(e)?e.slice():j(e)||nG(e)||M(e)||nJ(e)?Array.from(e.entries()):e}function rf(e){return e[Symbol.iterator]=rp,e}function rp(){return this}["Symbol","Map","Set"].forEach(function(e){void 0===m()[e]&&r("MobX requires global '"+e+"' to be available or polyfilled")}),"object"==typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:tz,extras:{getDebugName:rs},$mobx:ei})},6570:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2564)}])},713:function(e,t,n){"use strict";n.d(t,{b:function(){return ec}});var r,i,o,a,s,l,u,c,d,h,f,p,m,g,v,y,b,w,x=n(2322),k=n(9835),S=n(2228),_=n(9453);function O(){let e=(0,S.Z)(["\n	filter: ",";\n"]);return O=function(){return e},e}let E=(0,_.ZP)(k.xu).withConfig({componentId:"sc-12a90441-0"})(O(),e=>{let{filter:t}=e;return t});var C=n(2784);function T(){return(T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var A=function(e){return C.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 48 40"},e),r||(r=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{d:"m39.7 33.9-6-5.8c1.8-2.2 2.9-5 2.9-8.1 0-7.1-5.8-12.9-12.9-12.9-7.1 0-12.9 5.8-12.9 12.9 0 7.1 5.8 12.9 12.9 12.9 3.1 0 5.9-1.1 8.1-2.9l6 5.8c.3.3.6.4.9.4.4 0 .7-.1 1-.4.5-.6.5-1.4 0-1.9zm-16-3.7c-5.6 0-10.2-4.6-10.2-10.2S18.1 9.8 23.7 9.8 33.9 14.4 33.9 20s-4.6 10.2-10.2 10.2z",className:"ic-burger-nav_suche-default_svg__st0"}),C.createElement("path",{d:"M29.2 14.3c-3.1-3.1-8.2-3-11.2.1-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0 1.1-1.1 2.6-1.8 4.2-1.8s3.1.6 4.2 1.7 1.8 2.6 1.8 4.2c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-2.1-.8-4.1-2.4-5.6z",className:"ic-burger-nav_suche-default_svg__st0"}))))};function N(){return(N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var P=function(e){return C.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),i||(i=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M0 0h20v20H0z"}),C.createElement("path",{fillRule:"nonzero",d:"M15.748 11.601a1.2 1.2 0 0 1-1.606 1.78l-.091-.083L9.95 9.196l-4.101 4.102a1.2 1.2 0 0 1-1.606.083l-.092-.083a1.2 1.2 0 0 1-.082-1.606l.082-.09 4.95-4.95a1.2 1.2 0 0 1 1.606-.083l.091.082 4.95 4.95Z"}))))};function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var I=function(e){return C.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),o||(o=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M0 0h20v20H0z"}),C.createElement("path",{fillRule:"nonzero",d:"M4.151 8.598a1.2 1.2 0 0 1 1.606-1.78l.092.083 4.1 4.102 4.102-4.102a1.2 1.2 0 0 1 1.606-.082l.091.082a1.2 1.2 0 0 1 .082 1.606l-.082.091-4.95 4.95a1.2 1.2 0 0 1-1.606.082l-.09-.082-4.95-4.95Z"}))))};function R(){return(R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j=function(e){return C.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),a||(a=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M20 0v20H0V0z"}),C.createElement("path",{fillRule:"nonzero",d:"M4.207 12.104a1.2 1.2 0 0 1 1.584-.242l.106.078 2.887 2.377V3.267a1.2 1.2 0 0 1 2.394-.124l.006.123v11.07l2.92-2.397a1.2 1.2 0 0 1 1.601.07l.089.096a1.2 1.2 0 0 1-.07 1.6l-.096.089-4.873 4a1.198 1.198 0 0 1-.763.272h-.008c-.332 0-.632-.135-.85-.352l-4.763-3.921a1.2 1.2 0 0 1-.164-1.69Z"}))))};function M(){return(M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var L=function(e){return C.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),s||(s=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M0 0h20v20H0z"}),C.createElement("path",{fillRule:"nonzero",d:"M7.963 4.274a1.2 1.2 0 0 1 .241 1.583l-.078.106L5.75 8.85H16.8a1.2 1.2 0 0 1 .123 2.394l-.123.006H5.73l2.398 2.92a1.2 1.2 0 0 1-.07 1.601l-.097.089a1.2 1.2 0 0 1-1.6-.07l-.089-.096-4-4.873A1.198 1.198 0 0 1 2 10.059v-.009c0-.332.135-.632.352-.85l3.922-4.763a1.2 1.2 0 0 1 1.689-.163Z"}))))};function V(){return(V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var B=function(e){return C.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),l||(l=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M0 0h20v20H0z"}),C.createElement("path",{fillRule:"nonzero",d:"M12.037 15.859a1.2 1.2 0 0 1-.241-1.584l.078-.105 2.377-2.888H3.2a1.2 1.2 0 0 1-.123-2.394l.123-.006h11.07l-2.398-2.92a1.2 1.2 0 0 1 .07-1.601l.097-.088a1.2 1.2 0 0 1 1.6.07l.089.096 4 4.873a1.2 1.2 0 0 1 .272.762v.008a1.2 1.2 0 0 1-.352.85l-3.922 4.763a1.2 1.2 0 0 1-1.689.164Z"}))))};function U(){return(U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var q=function(e){return C.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),u||(u=C.createElement("path",{d:"M14 4.5H7a1 1 0 0 0 0 2h4.57l-7.28 7.29a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0L13 7.9v4.6a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Z",fill:"#14334D",fillRule:"evenodd"})))};function F(){return(F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Z=function(e){return C.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),c||(c=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M0 0h20v20H0z"}),C.createElement("path",{fillRule:"nonzero",d:"M15.793 8.029a1.2 1.2 0 0 1-1.584.241l-.106-.077-2.887-2.378v11.051a1.2 1.2 0 0 1-2.394.123l-.006-.123V5.796l-2.92 2.398a1.2 1.2 0 0 1-1.601-.07l-.089-.096a1.2 1.2 0 0 1 .07-1.601l.096-.088 4.873-4a1.2 1.2 0 0 1 .763-.273h.008c.332 0 .632.135.85.353l4.763 3.92a1.2 1.2 0 0 1 .164 1.69Z"}))))};function z(){return(z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var H=function(e){return C.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),d||(d=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M0 0h20v20H0z"}),C.createElement("path",{fillRule:"nonzero",d:"M3.318 11.127a1.2 1.2 0 0 1 1.606-1.78l.091.083 3.04 3.04 6.93-6.93a1.2 1.2 0 0 1 1.606-.082l.092.083a1.2 1.2 0 0 1 .082 1.605l-.082.092-7.779 7.778a1.2 1.2 0 0 1-1.606.082l-.09-.082-3.89-3.89Z"}))))};function $(){return($=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var G=function(e){return C.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),h||(h=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M20 0v20H0V0z"}),C.createElement("path",{fillRule:"nonzero",d:"M5.074 7.8a1.2 1.2 0 0 1 1.583-.242l.106.077 2.026 1.67-.009-8.104a1.2 1.2 0 0 1 2.394-.125l.006.123.009 8.118 2.05-1.683a1.2 1.2 0 0 1 1.6.07l.089.097a1.2 1.2 0 0 1-.07 1.6l-.097.088-4.005 3.289a1.2 1.2 0 0 1-1.41.082l-.114-.084-3.995-3.288A1.2 1.2 0 0 1 5.074 7.8Zm11.869 8.6a1.2 1.2 0 0 1 .122 2.394l-.122.006H3.1a1.2 1.2 0 0 1-.123-2.394L3.1 16.4h13.843Z"}))))};function W(){return(W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Y=function(e){return C.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),f||(f=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M0 0h20v20H0z"}),C.createElement("path",{fillRule:"nonzero",d:"m16.725 4.007-.08-.086a1.365 1.365 0 0 1 .207.266c.135.226.197.482.188.736l-.001 7.95a1.35 1.35 0 0 1-2.694.13l-.006-.13.001-4.736-8.513 8.512a1.35 1.35 0 0 1-1.997-1.813l.088-.096 8.517-8.516-4.746-.002a1.35 1.35 0 0 1-1.344-1.22l-.006-.13a1.35 1.35 0 0 1 1.22-1.344l.13-.006h8c.416 0 .789.189 1.036.485Z"}))))};function K(){return(K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var J=function(e){return C.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},e),p||(p=C.createElement("g",{fill:"#FEBE00"},C.createElement("path",{d:"M9.38 1.87V5.5h3.97z"}),C.createElement("path",{d:"M8.63 7c-.41 0-.75-.34-.75-.75V1h-4.2C2.75 1 2 1.71 2 2.58v11.48c0 .87.75 1.58 1.68 1.58h8.29c.93 0 1.68-.71 1.68-1.58V7H8.63Z"}))))};function X(){return(X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Q=function(e){return C.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),m||(m=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M0 0h20v20H0z"}),C.createElement("path",{d:"M10 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2.125c.85 0 1.548.653 1.619 1.485l.006.14V16a1.625 1.625 0 0 1-3.244.14L8.375 16V9.25c0-.897.728-1.625 1.625-1.625Z"}))))};function ee(){return(ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var et=function(e){return C.createElement("svg",ee({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),g||(g=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M0 0h20v20H0z"}),C.createElement("path",{fillRule:"nonzero",d:"M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0Zm0 2.4a7.6 7.6 0 1 0 0 15.2 7.6 7.6 0 0 0 0-15.2Zm0 1.65a1.2 1.2 0 0 1 1.194 1.077l.006.123v5.5a1.2 1.2 0 0 1-1.077 1.194L10 11.95H7.25a1.2 1.2 0 0 1-.123-2.394l.123-.006 1.549-.001L8.8 5.25a1.2 1.2 0 0 1 1.077-1.194L10 4.05Z"}))))};function en(){return(en=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var er=function(e){return C.createElement("svg",en({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),v||(v=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M20 20H0V0h20z"}),C.createElement("path",{d:"M10 14a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm1.989-4.287.75-7A2 2 0 0 0 10.75.5h-1.5a2 2 0 0 0-1.989 2.213l.75 7c.256 2.383 3.722 2.383 3.978 0Z"}))))};function ei(){return(ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var eo=function(e){return C.createElement("svg",ei({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),y||(y=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),C.createElement("path",{fillRule:"nonzero",d:"M18.997 11.034 9.5 5.566a1.5 1.5 0 0 0-2.248 1.3v10.937a1.5 1.5 0 0 0 2.248 1.3l9.498-5.469a1.5 1.5 0 0 0 0-2.6Z"}))))};function ea(){return(ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var es=function(e){return C.createElement("svg",ea({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},e),b||(b=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fillRule:"nonzero",d:"m17.238 15.303.11.099 6.539 6.629 6.572-6.598a1.35 1.35 0 0 1 2.011 1.796l-.098.11-6.589 6.614 6.558 6.646a1.35 1.35 0 0 1-1.813 1.996l-.11-.1-6.54-6.629-6.572 6.598a1.35 1.35 0 0 1-2.01-1.795l.098-.11 6.587-6.615-6.556-6.646a1.35 1.35 0 0 1 1.813-1.995Z"}),C.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}))))};function el(){return(el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var eu=function(e){return C.createElement("svg",el({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},e),w||(w=C.createElement("g",{fill:"#14334D",fillRule:"evenodd"},C.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),C.createElement("path",{fillRule:"nonzero",d:"M34.174 22.685a1.35 1.35 0 0 1 .13 2.694l-.13.006h-21a1.35 1.35 0 0 1-.13-2.694l.13-.006h21Zm0 7a1.35 1.35 0 0 1 .13 2.694l-.13.006h-21a1.35 1.35 0 0 1-.13-2.694l.13-.006h21Zm0-14a1.35 1.35 0 0 1 .13 2.694l-.13.006h-21a1.35 1.35 0 0 1-.13-2.694l.13-.006h21Z"}))))};let ec=e=>{let t={"arrow-right":"/kikare-assets/svg/ic_btn_arrow-right.svg","arrow-up":"/kikare-assets/svg/ic_btn_arrow-up.svg","arrow-left":"/kikare-assets/svg/ic_btn_arrow-left.svg","arrow-right-up":"/kikare-assets/svg/ic_btn_arrow-right-up.svg",kikaninchen:"/kikare-assets/png/kikaninchen.png",kikaninchenapp:"/kikare-assets/png/kikaninchenapp.png",kikaplayerapp:"/kikare-assets/png/kikaplayerapp.png",kikaquizapp:"/kikare-assets/png/kikaquizapp.png",download:"/kikare-assets/svg/ic-download.svg",info:"/kikare-assets/svg/ic-info.svg"},n=()=>{let t=null;switch(e.id){case"download":t=(0,x.jsx)(G,{});break;case"time":t=(0,x.jsx)(et,{});break;case"check":t=(0,x.jsx)(H,{});break;case"info":t=(0,x.jsx)(Q,{});break;case"arrow-down":t=(0,x.jsx)(j,{});break;case"arrow-up":t=(0,x.jsx)(Z,{});break;case"arrow-right":t=(0,x.jsx)(B,{});break;case"arrow-right-up":t=(0,x.jsx)(q,{});break;case"arrow-left":t=(0,x.jsx)(L,{});break;case"chevron-down":t=(0,x.jsx)(I,{});break;case"chevron-up":t=(0,x.jsx)(P,{});break;case"play":t=(0,x.jsx)(eo,{});break;case"burger":t=(0,x.jsx)(eu,{});break;case"close":t=(0,x.jsx)(es,{});break;case"document":t=(0,x.jsx)(J,{});break;case"search":t=(0,x.jsx)(A,{});break;case"external-link":t=(0,x.jsx)(Y,{});break;case"warning":t=(0,x.jsx)(er,{})}return t};return"svg"===e.implementationType?(0,x.jsx)(k.xu,{...e,customCss:{svg:{width:"100%",height:"100%",display:"block"},...e.customCss,g:{fill:e.fill||null}},children:n()}):(0,x.jsx)(E,{src:t[null==e?void 0:e.id]||(null==e?void 0:e.src),as:"img",position:"relative",display:"block",width:"2rem",height:"2rem",alt:null==e?void 0:e.alt,...e})}},7125:function(e,t,n){"use strict";n.d(t,{g:function(){return m}});var r=n(2228),i=n(2322),o=n(2604),a=n(7576),s=n(6646),l=n(9097),u=n.n(l),c=n(5632),d=n(2784),h=n(9453);function f(){let e=(0,r.Z)([""]);return f=function(){return e},e}let p=(0,h.ZP)(o.xu).withConfig({componentId:"sc-ad3588d7-0"})(f()),m=e=>{var t,n,r,l,h,f,m,g;let v;let{href:y,target:b,title:w,children:x,index:k,isTemporaryStyleFix:S,..._}=e,O=(0,d.useRef)(),E=(0,d.useContext)(s.x),C=(0,d.useContext)(a.V),T=(0,c.useRouter)(),[A,N]=(0,d.useState)((null==v?void 0:v.matches)||!0),P=e.atiClickParams;v=null==window?void 0:window.matchMedia("(min-width: 768px)"),(0,d.useEffect)(()=>{let e=e=>N(e.matches);return v.addEventListener("change",e),()=>v.removeEventListener("change",e)},[]);let D=(null==e?void 0:null===(t=e.linkDetails)||void 0===t?void 0:null===(n=t.targetDocumentParameter)||void 0===n?void 0:n.length)>0?"".concat(y).concat(null===(r=e.linkDetails)||void 0===r?void 0:r.targetDocumentParameter):y;if(C&&(null==E?void 0:null===(l=E.docData)||void 0===l?void 0:null===(h=l.headerResponse)||void 0===h?void 0:h.type)==="theme"&&(P={type:"action",name:"Teaser",chapter1:encodeURIComponent(C.title||w||"unbekannt"),chapter2:D}),(null===(f=e.linkDetails)||void 0===f?void 0:f.linkType)&&-1!==e.linkDetails.linkType.indexOf("external")&&(P={type:"exit",name:"externer Link",chapter1:encodeURIComponent(w),chapter2:D}),C&&(null==E?void 0:E.searchResponse)&&(P={type:"action",name:encodeURIComponent(T.query.q),chapter1:"".concat(k,".").concat(w),chapter2:D}),!D)return(0,i.jsx)(o.xu,{color:"inherit",as:"span",title:w,...e,children:x});let I=D;(null==T?void 0:null===(m=T.query)||void 0===m?void 0:m.previewDate)&&D&&(I="".concat(D).concat(-1!==D.indexOf("?")?"&":"?","previewDate=").concat(null==T?void 0:null===(g=T.query)||void 0===g?void 0:g.previewDate));let R=b;-1!==I.indexOf("/eltern/")&&(R="_blank"),(null==E?void 0:E.isPreviewMode)===!0&&(R="_parent");let j={container:e=>({position:e?"absolute":"relative",right:e?"1rem":null})};return(0,i.jsx)(u(),{style:"/suche/suche104"!==I||S?null:j.container(A),target:R,href:I,scroll:null==e||!e.stopScrolling,children:(0,i.jsx)(p,{color:"inherit",ref:O,display:"block",style:{cursor:"pointer"},title:w,..._,onClick:t=>{e.onClick&&e.onClick(t),P&&E.setInteractionTracking(P),e.isExternal&&(t.preventDefault(),E.setToolTipActive(null),setTimeout(()=>{E.setToolTipActive({touchPosition:{x:t.clientX,y:t.clientY},ref:(null==O?void 0:O.current).getBoundingClientRect(),url:D,title:(null==C?void 0:C.title)||"unbekannt"})},0))},children:x})})}},7576:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(2784);let i=(0,r.createContext)(null)},6606:function(e,t,n){"use strict";n.d(t,{Im:function(){return on},zg:function(){return oe},_v:function(){return ot},WX:function(){return i9},qo:function(){return i1},CU:function(){return iz},Yc:function(){return i5},ve:function(){return iH},mp:function(){return ol},JB:function(){return iq},L4:function(){return iZ},Mo:function(){return i3},Cm:function(){return os},fv:function(){return i7},Tl:function(){return iJ},Qi:function(){return iW},aF:function(){return om},Ov:function(){return og},wU:function(){return op},qB:function(){return i$},Ib:function(){return i4},wK:function(){return i2},ls:function(){return iG},jI:function(){return iF},zS:function(){return or},RN:function(){return oo},Jl:function(){return i8},Gh:function(){return oc},$x:function(){return iY},Bt:function(){return i6},pn:function(){return od},Pv:function(){return oh},Hj:function(){return iX},Sq:function(){return i0},Zj:function(){return iQ},H7:function(){return iK},pU:function(){return ob},uZ:function(){return ov},kC:function(){return oy},QK:function(){return of},p_:function(){return ou},qm:function(){return oa},qh:function(){return oi}});var r,i=n(2322);class o extends Error{}class a extends o{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class s extends o{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class l extends o{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class u extends o{}class c extends o{constructor(e){super(`Invalid unit ${e}`)}}class d extends o{}class h extends o{constructor(){super("Zone is an abstract class")}}let f="numeric",p="short",m="long",g={year:f,month:f,day:f},v={year:f,month:p,day:f},y={year:f,month:p,day:f,weekday:p},b={year:f,month:m,day:f},w={year:f,month:m,day:f,weekday:m},x={hour:f,minute:f},k={hour:f,minute:f,second:f},S={hour:f,minute:f,second:f,timeZoneName:p},_={hour:f,minute:f,second:f,timeZoneName:m},O={hour:f,minute:f,hourCycle:"h23"},E={hour:f,minute:f,second:f,hourCycle:"h23"},C={hour:f,minute:f,second:f,hourCycle:"h23",timeZoneName:p},T={hour:f,minute:f,second:f,hourCycle:"h23",timeZoneName:m},A={year:f,month:f,day:f,hour:f,minute:f},N={year:f,month:f,day:f,hour:f,minute:f,second:f},P={year:f,month:p,day:f,hour:f,minute:f},D={year:f,month:p,day:f,hour:f,minute:f,second:f},I={year:f,month:p,day:f,weekday:p,hour:f,minute:f},R={year:f,month:m,day:f,hour:f,minute:f,timeZoneName:p},j={year:f,month:m,day:f,hour:f,minute:f,second:f,timeZoneName:p},M={year:f,month:m,day:f,weekday:m,hour:f,minute:f,timeZoneName:m},L={year:f,month:m,day:f,weekday:m,hour:f,minute:f,second:f,timeZoneName:m};class V{get type(){throw new h}get name(){throw new h}get ianaName(){return this.name}get isUniversal(){throw new h}offsetName(e,t){throw new h}formatOffset(e,t){throw new h}offset(e){throw new h}equals(e){throw new h}get isValid(){throw new h}}let B=null;class U extends V{static get instance(){return null===B&&(B=new U),B}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return eY(e,t,n)}formatOffset(e,t){return eQ(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return"system"===e.type}get isValid(){return!0}}let q={};function F(e){return q[e]||(q[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),q[e]}let Z={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function z(e,t){let n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,o,a,s,l,u,c]=r;return[a,i,o,s,l,u,c]}function H(e,t){let n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){let{type:o,value:a}=n[i],s=Z[o];"era"===o?r[s]=a:eE(s)||(r[s]=parseInt(a,10))}return r}let $={};class G extends V{static create(e){return $[e]||($[e]=new G(e)),$[e]}static resetCache(){$={},q={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(t){return!1}}constructor(e){super(),this.zoneName=e,this.valid=G.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return eY(e,t,n,this.name)}formatOffset(e,t){return eQ(this.offset(e),t)}offset(e){let t=new Date(e);if(isNaN(t))return NaN;let n=F(this.name),[r,i,o,a,s,l,u]=n.formatToParts?H(n,t):z(n,t);"BC"===a&&(r=-Math.abs(r)+1);let c=24===s?0:s,d=e$({year:r,month:i,day:o,hour:c,minute:l,second:u,millisecond:0}),h=+t,f=h%1e3;return(d-(h-=f>=0?f:1e3+f))/6e4}equals(e){return"iana"===e.type&&e.name===this.name}get isValid(){return this.valid}}let W={};function Y(e,t={}){let n=JSON.stringify([e,t]),r=W[n];return r||(r=new Intl.ListFormat(e,t),W[n]=r),r}let K={};function J(e,t={}){let n=JSON.stringify([e,t]),r=K[n];return r||(r=new Intl.DateTimeFormat(e,t),K[n]=r),r}let X={};function Q(e,t={}){let n=JSON.stringify([e,t]),r=X[n];return r||(r=new Intl.NumberFormat(e,t),X[n]=r),r}let ee={};function et(e,t={}){let{base:n,...r}=t,i=JSON.stringify([e,r]),o=ee[i];return o||(o=new Intl.RelativeTimeFormat(e,t),ee[i]=o),o}let en=null;function er(){return en||(en=new Intl.DateTimeFormat().resolvedOptions().locale)}function ei(e){let t=e.indexOf("-x-");-1!==t&&(e=e.substring(0,t));let n=e.indexOf("-u-");if(-1===n)return[e];{let r,i;try{r=J(e).resolvedOptions(),i=e}catch(a){let o=e.substring(0,n);r=J(o).resolvedOptions(),i=o}let{numberingSystem:s,calendar:l}=r;return[i,s,l]}}function eo(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function ea(e){let t=[];for(let n=1;n<=12;n++){let r=rO.utc(2009,n,1);t.push(e(r))}return t}function es(e){let t=[];for(let n=1;n<=7;n++){let r=rO.utc(2016,11,13+n);t.push(e(r))}return t}function el(e,t,n,r){let i=e.listingMode();return"error"===i?null:"en"===i?n(t):r(t)}function eu(e){return(!e.numberingSystem||"latn"===e.numberingSystem)&&("latn"===e.numberingSystem||!e.locale||e.locale.startsWith("en")||"latn"===new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)}class ec{constructor(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;let{padTo:r,floor:i,...o}=n;if(!t||Object.keys(o).length>0){let a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=Q(e,a)}}format(e){if(this.inf){let t=this.floor?Math.floor(e):e;return this.inf.format(t)}{let n=this.floor?Math.floor(e):eF(e,3);return eV(n,this.padTo)}}}class ed{constructor(e,t,n){let r;if(this.opts=n,this.originalZone=void 0,this.opts.timeZone)this.dt=e;else if("fixed"===e.zone.type){let i=-1*(e.offset/60),o=i>=0?`Etc/GMT+${i}`:`Etc/GMT${i}`;0!==e.offset&&G.create(o).valid?(r=o,this.dt=e):(r="UTC",this.dt=0===e.offset?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else"system"===e.zone.type?this.dt=e:"iana"===e.zone.type?(this.dt=e,r=e.zone.name):(r="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);let a={...this.opts};a.timeZone=a.timeZone||r,this.dtf=J(t,a)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(e=>{if("timeZoneName"!==e.type)return e;{let t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class eh{constructor(e,t,n){this.opts={style:"long",...n},!t&&eP()&&(this.rtf=et(e,n))}format(e,t){return this.rtf?this.rtf.format(e,t):tl(t,e,this.opts.numeric,"long"!==this.opts.style)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}}class ef{static fromOpts(e){return ef.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,t,n,r=!1){let i=e||eO.defaultLocale,o=i||(r?"en-US":er()),a=t||eO.defaultNumberingSystem,s=n||eO.defaultOutputCalendar;return new ef(o,a,s,i)}static resetCache(){en=null,K={},X={},ee={}}static fromObject({locale:e,numberingSystem:t,outputCalendar:n}={}){return ef.create(e,t,n)}constructor(e,t,n,r){let[i,o,a]=ei(e);this.locale=i,this.numberingSystem=t||o||null,this.outputCalendar=n||a||null,this.intl=eo(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}get fastNumbers(){return null==this.fastNumbersCached&&(this.fastNumbersCached=eu(this)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),t=(null===this.numberingSystem||"latn"===this.numberingSystem)&&(null===this.outputCalendar||"gregory"===this.outputCalendar);return e&&t?"en":"intl"}clone(e){return e&&0!==Object.getOwnPropertyNames(e).length?ef.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1):this}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1){return el(this,e,e5,()=>{let n=t?{month:e,day:"numeric"}:{month:e},r=t?"format":"standalone";return this.monthsCache[r][e]||(this.monthsCache[r][e]=ea(e=>this.extract(e,n,"month"))),this.monthsCache[r][e]})}weekdays(e,t=!1){return el(this,e,e7,()=>{let n=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},r=t?"format":"standalone";return this.weekdaysCache[r][e]||(this.weekdaysCache[r][e]=es(e=>this.extract(e,n,"weekday"))),this.weekdaysCache[r][e]})}meridiems(){return el(this,void 0,()=>e9,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[rO.utc(2016,11,13,9),rO.utc(2016,11,13,19)].map(t=>this.extract(t,e,"dayperiod"))}return this.meridiemCache})}eras(e){return el(this,e,tr,()=>{let t={era:e};return this.eraCache[e]||(this.eraCache[e]=[rO.utc(-40,1,1),rO.utc(2017,1,1)].map(e=>this.extract(e,t,"era"))),this.eraCache[e]})}extract(e,t,n){let r=this.dtFormatter(e,t),i=r.formatToParts(),o=i.find(e=>e.type.toLowerCase()===n);return o?o.value:null}numberFormatter(e={}){return new ec(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new ed(e,this.intl,t)}relFormatter(e={}){return new eh(this.intl,this.isEnglish(),e)}listFormatter(e={}){return Y(this.intl,e)}isEnglish(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}let ep=null;class em extends V{static get utcInstance(){return null===ep&&(ep=new em(0)),ep}static instance(e){return 0===e?em.utcInstance:new em(e)}static parseSpecifier(e){if(e){let t=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new em(eK(t[1],t[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return 0===this.fixed?"UTC":`UTC${eQ(this.fixed,"narrow")}`}get ianaName(){return 0===this.fixed?"Etc/UTC":`Etc/GMT${eQ(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,t){return eQ(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return"fixed"===e.type&&e.fixed===this.fixed}get isValid(){return!0}}class eg extends V{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function ev(e,t){if(eE(e)||null===e)return t;if(e instanceof V)return e;if(eA(e)){let n=e.toLowerCase();return"default"===n?t:"local"===n||"system"===n?U.instance:"utc"===n||"gmt"===n?em.utcInstance:em.parseSpecifier(n)||G.create(e)}return eC(e)?em.instance(e):"object"==typeof e&&"offset"in e&&"function"==typeof e.offset?e:new eg(e)}let ey=()=>Date.now(),eb="system",ew=null,ex=null,ek=null,eS=60,e_;class eO{static get now(){return ey}static set now(e){ey=e}static set defaultZone(e){eb=e}static get defaultZone(){return ev(eb,U.instance)}static get defaultLocale(){return ew}static set defaultLocale(e){ew=e}static get defaultNumberingSystem(){return ex}static set defaultNumberingSystem(e){ex=e}static get defaultOutputCalendar(){return ek}static set defaultOutputCalendar(e){ek=e}static get twoDigitCutoffYear(){return eS}static set twoDigitCutoffYear(e){eS=e%100}static get throwOnInvalid(){return e_}static set throwOnInvalid(e){e_=e}static resetCaches(){ef.resetCache(),G.resetCache()}}function eE(e){return void 0===e}function eC(e){return"number"==typeof e}function eT(e){return"number"==typeof e&&e%1==0}function eA(e){return"string"==typeof e}function eN(e){return"[object Date]"===Object.prototype.toString.call(e)}function eP(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function eD(e){return Array.isArray(e)?e:[e]}function eI(e,t,n){if(0!==e.length)return e.reduce((e,r)=>{let i=[t(r),r];return e&&n(e[0],i[0])===e[0]?e:i},null)[1]}function eR(e,t){return t.reduce((t,n)=>(t[n]=e[n],t),{})}function ej(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function eM(e,t,n){return eT(e)&&e>=t&&e<=n}function eL(e,t){return e-t*Math.floor(e/t)}function eV(e,t=2){let n=e<0;return n?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0")}function eB(e){if(!eE(e)&&null!==e&&""!==e)return parseInt(e,10)}function eU(e){if(!eE(e)&&null!==e&&""!==e)return parseFloat(e)}function eq(e){if(!eE(e)&&null!==e&&""!==e){let t=1e3*parseFloat("0."+e);return Math.floor(t)}}function eF(e,t,n=!1){let r=10**t,i=n?Math.trunc:Math.round;return i(e*r)/r}function eZ(e){return e%4==0&&(e%100!=0||e%400==0)}function ez(e){return eZ(e)?366:365}function eH(e,t){let n=eL(t-1,12)+1,r=e+(t-n)/12;return 2===n?eZ(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function e$(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t)).setUTCFullYear(e.year,e.month-1,e.day),+t}function eG(e){let t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,n=e-1,r=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400))%7;return 4===t||3===r?53:52}function eW(e){return e>99?e:e>eO.twoDigitCutoffYear?1900+e:2e3+e}function eY(e,t,n,r=null){let i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(o.timeZone=r);let a={timeZoneName:t,...o},s=new Intl.DateTimeFormat(n,a).formatToParts(i).find(e=>"timezonename"===e.type.toLowerCase());return s?s.value:null}function eK(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);let r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return 60*n+i}function eJ(e){let t=Number(e);if("boolean"==typeof e||""===e||Number.isNaN(t))throw new d(`Invalid unit value ${e}`);return t}function eX(e,t){let n={};for(let r in e)if(ej(e,r)){let i=e[r];if(null==i)continue;n[t(r)]=eJ(i)}return n}function eQ(e,t){let n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${eV(n,2)}:${eV(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${eV(n,2)}${eV(r,2)}`;default:throw RangeError(`Value format ${t} is out of range for property format`)}}function e0(e){return eR(e,["hour","minute","second","millisecond"])}let e1=["January","February","March","April","May","June","July","August","September","October","November","December"],e2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e3=["J","F","M","A","M","J","J","A","S","O","N","D"];function e5(e){switch(e){case"narrow":return[...e3];case"short":return[...e2];case"long":return[...e1];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}let e4=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],e6=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],e8=["M","T","W","T","F","S","S"];function e7(e){switch(e){case"narrow":return[...e8];case"short":return[...e6];case"long":return[...e4];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}let e9=["AM","PM"],te=["Before Christ","Anno Domini"],tt=["BC","AD"],tn=["B","A"];function tr(e){switch(e){case"narrow":return[...tn];case"short":return[...tt];case"long":return[...te];default:return null}}function ti(e){return e9[e.hour<12?0:1]}function to(e,t){return e7(t)[e.weekday-1]}function ta(e,t){return e5(t)[e.month-1]}function ts(e,t){return tr(t)[e.year<0?0:1]}function tl(e,t,n="always",r=!1){let i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=-1===["hours","minutes","seconds"].indexOf(e);if("auto"===n&&o){let a="days"===e;switch(t){case 1:return a?"tomorrow":`next ${i[e][0]}`;case -1:return a?"yesterday":`last ${i[e][0]}`;case 0:return a?"today":`this ${i[e][0]}`}}let s=Object.is(t,-0)||t<0,l=Math.abs(t),u=1===l,c=i[e],d=r?u?c[1]:c[2]||c[1]:u?i[e][0]:e;return s?`${l} ${d} ago`:`in ${l} ${d}`}function tu(e,t){let n="";for(let r of e)r.literal?n+=r.val:n+=t(r.val);return n}let tc={D:g,DD:v,DDD:b,DDDD:w,t:x,tt:k,ttt:S,tttt:_,T:O,TT:E,TTT:C,TTTT:T,f:A,ff:P,fff:R,ffff:M,F:N,FF:D,FFF:j,FFFF:L};class td{static create(e,t={}){return new td(e,t)}static parseFormat(e){let t=null,n="",r=!1,i=[];for(let o=0;o<e.length;o++){let a=e.charAt(o);"'"===a?(n.length>0&&i.push({literal:r||/^\s+$/.test(n),val:n}),t=null,n="",r=!r):r?n+=a:a===t?n+=a:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=a,t=a)}return n.length>0&&i.push({literal:r||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(e){return tc[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem());let n=this.systemLoc.dtFormatter(e,{...this.opts,...t});return n.format()}dtFormatter(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t})}formatDateTime(e,t){return this.dtFormatter(e,t).format()}formatDateTimeParts(e,t){return this.dtFormatter(e,t).formatToParts()}formatInterval(e,t){let n=this.dtFormatter(e.start,t);return n.dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t){return this.dtFormatter(e,t).resolvedOptions()}num(e,t=0){if(this.opts.forceSimple)return eV(e,t);let n={...this.opts};return t>0&&(n.padTo=t),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,t){let n="en"===this.loc.listingMode(),r=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,i=(t,n)=>this.loc.extract(e,t,n),o=t=>e.isOffsetFixed&&0===e.offset&&t.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,t.format):"",a=()=>n?ti(e):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),s=(t,r)=>n?ta(e,t):i(r?{month:t}:{month:t,day:"numeric"},"month"),l=(t,r)=>n?to(e,t):i(r?{weekday:t}:{weekday:t,month:"long",day:"numeric"},"weekday"),u=t=>{let n=td.macroTokenToFormatOpts(t);return n?this.formatWithSystemDefault(e,n):t},c=t=>n?ts(e,t):i({era:t},"era"),d=t=>{switch(t){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12==0?12:e.hour%12);case"hh":return this.num(e.hour%12==0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return a();case"d":return r?i({day:"numeric"},"day"):this.num(e.day);case"dd":return r?i({day:"2-digit"},"day"):this.num(e.day,2);case"c":case"E":return this.num(e.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return r?i({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return r?i({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return s("short",!0);case"LLLL":return s("long",!0);case"LLLLL":return s("narrow",!0);case"M":return r?i({month:"numeric"},"month"):this.num(e.month);case"MM":return r?i({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return s("short",!1);case"MMMM":return s("long",!1);case"MMMMM":return s("narrow",!1);case"y":return r?i({year:"numeric"},"year"):this.num(e.year);case"yy":return r?i({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return r?i({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return r?i({year:"numeric"},"year"):this.num(e.year,6);case"G":return c("short");case"GG":return c("long");case"GGGGG":return c("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return u(t)}};return tu(td.parseFormat(t),d)}formatDurationFromString(e,t){let n=e=>{switch(e[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},r=e=>t=>{let r=n(t);return r?this.num(e.get(r),t.length):t},i=td.parseFormat(t),o=i.reduce((e,{literal:t,val:n})=>t?e:e.concat(n),[]),a=e.shiftTo(...o.map(n).filter(e=>e));return tu(i,r(a))}}class th{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}let tf=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function tp(...e){let t=e.reduce((e,t)=>e+t.source,"");return RegExp(`^${t}$`)}function tm(...e){return t=>e.reduce(([e,n,r],i)=>{let[o,a,s]=i(t,r);return[{...e,...o},a||n,s]},[{},null,1]).slice(0,2)}function tg(e,...t){if(null==e)return[null,null];for(let[n,r]of t){let i=n.exec(e);if(i)return r(i)}return[null,null]}function tv(...e){return(t,n)=>{let r;let i={};for(r=0;r<e.length;r++)i[e[r]]=eB(t[n+r]);return[i,null,n+r]}}let ty=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,tb=`(?:${ty.source}?(?:\\[(${tf.source})\\])?)?`,tw=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,tx=RegExp(`${tw.source}${tb}`),tk=RegExp(`(?:T${tx.source})?`),tS=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,t_=/(\d{4})-?W(\d\d)(?:-?(\d))?/,tO=/(\d{4})-?(\d{3})/,tE=tv("weekYear","weekNumber","weekDay"),tC=tv("year","ordinal"),tT=/(\d{4})-(\d\d)-(\d\d)/,tA=RegExp(`${tw.source} ?(?:${ty.source}|(${tf.source}))?`),tN=RegExp(`(?: ${tA.source})?`);function tP(e,t,n){let r=e[t];return eE(r)?n:eB(r)}function tD(e,t){let n={year:tP(e,t),month:tP(e,t+1,1),day:tP(e,t+2,1)};return[n,null,t+3]}function tI(e,t){let n={hours:tP(e,t,0),minutes:tP(e,t+1,0),seconds:tP(e,t+2,0),milliseconds:eq(e[t+3])};return[n,null,t+4]}function tR(e,t){let n=!e[t]&&!e[t+1],r=eK(e[t+1],e[t+2]),i=n?null:em.instance(r);return[{},i,t+3]}function tj(e,t){let n=e[t]?G.create(e[t]):null;return[{},n,t+1]}let tM=RegExp(`^T?${tw.source}$`),tL=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function tV(e){let[t,n,r,i,o,a,s,l,u]=e,c="-"===t[0],d=l&&"-"===l[0],h=(e,t=!1)=>void 0!==e&&(t||e&&c)?-e:e;return[{years:h(eU(n)),months:h(eU(r)),weeks:h(eU(i)),days:h(eU(o)),hours:h(eU(a)),minutes:h(eU(s)),seconds:h(eU(l),"-0"===l),milliseconds:h(eq(u),d)}]}let tB={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function tU(e,t,n,r,i,o,a){let s={year:2===t.length?eW(eB(t)):eB(t),month:e2.indexOf(n)+1,day:eB(r),hour:eB(i),minute:eB(o)};return a&&(s.second=eB(a)),e&&(s.weekday=e.length>3?e4.indexOf(e)+1:e6.indexOf(e)+1),s}let tq=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function tF(e){let t;let[,n,r,i,o,a,s,l,u,c,d,h]=e,f=tU(n,o,i,r,a,s,l);return t=u?tB[u]:c?0:eK(d,h),[f,new em(t)]}function tZ(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}let tz=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,tH=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,t$=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function tG(e){let[,t,n,r,i,o,a,s]=e,l=tU(t,i,r,n,o,a,s);return[l,em.utcInstance]}function tW(e){let[,t,n,r,i,o,a,s]=e,l=tU(t,s,n,r,i,o,a);return[l,em.utcInstance]}let tY=tp(tS,tk),tK=tp(t_,tk),tJ=tp(tO,tk),tX=tp(tx),tQ=tm(tD,tI,tR,tj),t0=tm(tE,tI,tR,tj),t1=tm(tC,tI,tR,tj),t2=tm(tI,tR,tj);function t3(e){return tg(e,[tY,tQ],[tK,t0],[tJ,t1],[tX,t2])}function t5(e){return tg(tZ(e),[tq,tF])}function t4(e){return tg(e,[tz,tG],[tH,tG],[t$,tW])}function t6(e){return tg(e,[tL,tV])}let t8=tm(tI);function t7(e){return tg(e,[tM,t8])}let t9=tp(tT,tN),ne=tp(tA),nt=tm(tI,tR,tj);function nn(e){return tg(e,[t9,tQ],[ne,nt])}let nr="Invalid Duration",ni={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},no={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6},...ni},na=365.2425,ns=30.436875,nl={years:{quarters:4,months:12,weeks:na/7,days:na,hours:24*na,minutes:1440*na,seconds:86400*na,milliseconds:864e5*na},quarters:{months:3,weeks:na/28,days:na/4,hours:24*na/4,minutes:1440*na/4,seconds:86400*na/4,milliseconds:864e5*na/4},months:{weeks:ns/7,days:ns,hours:24*ns,minutes:1440*ns,seconds:86400*ns,milliseconds:864e5*ns},...ni},nu=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],nc=nu.slice(0).reverse();function nd(e,t,n=!1){let r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new nm(r)}function nh(e,t){let n=t.milliseconds??0;for(let r of nc.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function nf(e,t){let n=0>nh(e,t)?-1:1;nu.reduceRight((r,i)=>{if(eE(t[i]))return r;if(r){let o=t[r]*n,a=e[i][r],s=Math.floor(o/a);t[i]+=s*n,t[r]-=s*a*n}return i},null),nu.reduce((n,r)=>{if(eE(t[r]))return n;if(n){let i=t[n]%1;t[n]-=i,t[r]+=i*e[n][r]}return r},null)}function np(e){let t={};for(let[n,r]of Object.entries(e))0!==r&&(t[n]=r);return t}class nm{constructor(e){let t="longterm"===e.conversionAccuracy,n=t?nl:no;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||ef.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,t){return nm.fromObject({milliseconds:e},t)}static fromObject(e,t={}){if(null==e||"object"!=typeof e)throw new d(`Duration.fromObject: argument expected to be an object, got ${null===e?"null":typeof e}`);return new nm({values:eX(e,nm.normalizeUnit),loc:ef.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(e){if(eC(e))return nm.fromMillis(e);if(nm.isDuration(e))return e;if("object"==typeof e)return nm.fromObject(e);throw new d(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,t){let[n]=t6(e);return n?nm.fromObject(n,t):nm.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,t){let[n]=t7(e);return n?nm.fromObject(n,t):nm.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,t=null){if(!e)throw new d("need to specify a reason the Duration is invalid");let n=e instanceof th?e:new th(e,t);if(!eO.throwOnInvalid)return new nm({invalid:n});throw new l(n)}static normalizeUnit(e){let t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e];if(!t)throw new c(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){let n={...t,floor:!1!==t.round&&!1!==t.floor};return this.isValid?td.create(this.loc,n).formatDurationFromString(this,e):nr}toHuman(e={}){if(!this.isValid)return nr;let t=nu.map(t=>{let n=this.values[t];return eE(n)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:t.slice(0,-1)}).format(n)}).filter(e=>e);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(t)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return 0!==this.years&&(e+=this.years+"Y"),(0!==this.months||0!==this.quarters)&&(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),(0!==this.hours||0!==this.minutes||0!==this.seconds||0!==this.milliseconds)&&(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),(0!==this.seconds||0!==this.milliseconds)&&(e+=eF(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let t=this.toMillis();if(t<0||t>=864e5)return null;e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1};let n=rO.fromMillis(t,{zone:"UTC"});return n.toISOTime(e)}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?nh(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let t=nm.fromDurationLike(e),n={};for(let r of nu)(ej(t.values,r)||ej(this.values,r))&&(n[r]=t.get(r)+this.get(r));return nd(this,{values:n},!0)}minus(e){if(!this.isValid)return this;let t=nm.fromDurationLike(e);return this.plus(t.negate())}mapUnits(e){if(!this.isValid)return this;let t={};for(let n of Object.keys(this.values))t[n]=eJ(e(this.values[n],n));return nd(this,{values:t},!0)}get(e){return this[nm.normalizeUnit(e)]}set(e){if(!this.isValid)return this;let t={...this.values,...eX(e,nm.normalizeUnit)};return nd(this,{values:t})}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:n,matrix:r}={}){let i=this.loc.clone({locale:e,numberingSystem:t}),o={loc:i,matrix:r,conversionAccuracy:n};return nd(this,o)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return nf(this.matrix,e),nd(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=np(this.normalize().shiftToAll().toObject());return nd(this,{values:e},!0)}shiftTo(...e){let t;if(!this.isValid||0===e.length)return this;e=e.map(e=>nm.normalizeUnit(e));let n={},r={},i=this.toObject();for(let o of nu)if(e.indexOf(o)>=0){t=o;let a=0;for(let s in r)a+=this.matrix[s][o]*r[s],r[s]=0;eC(i[o])&&(a+=i[o]);let l=Math.trunc(a);n[o]=l,r[o]=(1e3*a-1e3*l)/1e3}else eC(i[o])&&(r[o]=i[o]);for(let u in r)0!==r[u]&&(n[t]+=u===t?r[u]:r[u]/this.matrix[t][u]);return nf(this.matrix,n),nd(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let t of Object.keys(this.values))e[t]=0===this.values[t]?0:-this.values[t];return nd(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function t(e,t){return void 0===e||0===e?void 0===t||0===t:e===t}for(let n of nu)if(!t(this.values[n],e.values[n]))return!1;return!0}}let ng="Invalid Interval";function nv(e,t){return e&&e.isValid?t&&t.isValid?t<e?ny.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null:ny.invalid("missing or invalid end"):ny.invalid("missing or invalid start")}class ny{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,t=null){if(!e)throw new d("need to specify a reason the Interval is invalid");let n=e instanceof th?e:new th(e,t);if(!eO.throwOnInvalid)return new ny({invalid:n});throw new s(n)}static fromDateTimes(e,t){let n=rE(e),r=rE(t),i=nv(n,r);return null==i?new ny({start:n,end:r}):i}static after(e,t){let n=nm.fromDurationLike(t),r=rE(e);return ny.fromDateTimes(r,r.plus(n))}static before(e,t){let n=nm.fromDurationLike(t),r=rE(e);return ny.fromDateTimes(r.minus(n),r)}static fromISO(e,t){let[n,r]=(e||"").split("/",2);if(n&&r){let i,o,a,s;try{o=(i=rO.fromISO(n,t)).isValid}catch(l){o=!1}try{s=(a=rO.fromISO(r,t)).isValid}catch(u){s=!1}if(o&&s)return ny.fromDateTimes(i,a);if(o){let c=nm.fromISO(r,t);if(c.isValid)return ny.after(i,c)}else if(s){let d=nm.fromISO(n,t);if(d.isValid)return ny.before(a,d)}}return ny.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return null===this.invalidReason}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(...[e]).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;let t=this.start.startOf(e),n=this.end.startOf(e);return Math.floor(n.diff(t,e).get(e))+(n.valueOf()!==this.end.valueOf())}hasSame(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return!!this.isValid&&this.s>e}isBefore(e){return!!this.isValid&&this.e<=e}contains(e){return!!this.isValid&&this.s<=e&&this.e>e}set({start:e,end:t}={}){return this.isValid?ny.fromDateTimes(e||this.s,t||this.e):this}splitAt(...e){if(!this.isValid)return[];let t=e.map(rE).filter(e=>this.contains(e)).sort(),n=[],{s:r}=this,i=0;for(;r<this.e;){let o=t[i]||this.e,a=+o>+this.e?this.e:o;n.push(ny.fromDateTimes(r,a)),r=a,i+=1}return n}splitBy(e){let t=nm.fromDurationLike(e);if(!this.isValid||!t.isValid||0===t.as("milliseconds"))return[];let{s:n}=this,r=1,i,o=[];for(;n<this.e;){let a=this.start.plus(t.mapUnits(e=>e*r));i=+a>+this.e?this.e:a,o.push(ny.fromDateTimes(n,i)),n=i,r+=1}return o}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return!!this.isValid&&+this.e==+e.s}abutsEnd(e){return!!this.isValid&&+e.e==+this.s}engulfs(e){return!!this.isValid&&this.s<=e.s&&this.e>=e.e}equals(e){return!!this.isValid&&!!e.isValid&&this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let t=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return t>=n?null:ny.fromDateTimes(t,n)}union(e){if(!this.isValid)return this;let t=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return ny.fromDateTimes(t,n)}static merge(e){let[t,n]=e.sort((e,t)=>e.s-t.s).reduce(([e,t],n)=>t?t.overlaps(n)||t.abutsStart(n)?[e,t.union(n)]:[e.concat([t]),n]:[e,n],[[],null]);return n&&t.push(n),t}static xor(e){let t=null,n=0,r=[],i=e.map(e=>[{time:e.s,type:"s"},{time:e.e,type:"e"}]),o=Array.prototype.concat(...i),a=o.sort((e,t)=>e.time-t.time);for(let s of a)1===(n+="s"===s.type?1:-1)?t=s.time:(t&&+t!=+s.time&&r.push(ny.fromDateTimes(t,s.time)),t=null);return ny.merge(r)}difference(...e){return ny.xor([this].concat(e)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:ng}toLocaleString(e=g,t={}){return this.isValid?td.create(this.s.loc.clone(t),e).formatInterval(this):ng}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:ng}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ng}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:ng}toFormat(e,{separator:t=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:ng}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):nm.invalid(this.invalidReason)}mapEndpoints(e){return ny.fromDateTimes(e(this.s),e(this.e))}}class nb{static hasDST(e=eO.defaultZone){let t=rO.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return G.isValidZone(e)}static normalizeZone(e){return ev(e,eO.defaultZone)}static months(e="long",{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i="gregory"}={}){return(r||ef.create(t,n,i)).months(e)}static monthsFormat(e="long",{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i="gregory"}={}){return(r||ef.create(t,n,i)).months(e,!0)}static weekdays(e="long",{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||ef.create(t,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||ef.create(t,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return ef.create(e).meridiems()}static eras(e="short",{locale:t=null}={}){return ef.create(t,null,"gregory").eras(e)}static features(){return{relative:eP()}}}function nw(e,t){let n=e=>e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(nm.fromMillis(r).as("days"))}function nx(e,t,n){let r,i;let o=[["years",(e,t)=>t.year-e.year],["quarters",(e,t)=>t.quarter-e.quarter+(t.year-e.year)*4],["months",(e,t)=>t.month-e.month+(t.year-e.year)*12],["weeks",(e,t)=>{let n=nw(e,t);return(n-n%7)/7}],["days",nw]],a={},s=e;for(let[l,u]of o)n.indexOf(l)>=0&&(r=l,a[l]=u(e,t),(i=s.plus(a))>t?(a[l]--,(e=s.plus(a))>t&&(i=e,a[l]--,e=s.plus(a))):e=i);return[e,a,i,r]}function nk(e,t,n,r){let[i,o,a,s]=nx(e,t,n),l=t-i,u=n.filter(e=>["hours","minutes","seconds","milliseconds"].indexOf(e)>=0);0===u.length&&(a<t&&(a=i.plus({[s]:1})),a!==i&&(o[s]=(o[s]||0)+l/(a-i)));let c=nm.fromObject(o,r);return u.length>0?nm.fromMillis(l,r).shiftTo(...u).plus(c):c}let nS={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},n_={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},nO=nS.hanidec.replace(/[\[|\]]/g,"").split("");function nE(e){let t=parseInt(e,10);if(!isNaN(t))return t;t="";for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(-1!==e[n].search(nS.hanidec))t+=nO.indexOf(e[n]);else for(let i in n_){let[o,a]=n_[i];r>=o&&r<=a&&(t+=r-o)}}return parseInt(t,10)}function nC({numberingSystem:e},t=""){return RegExp(`${nS[e||"latn"]}${t}`)}let nT="missing Intl.DateTimeFormat.formatToParts support";function nA(e,t=e=>e){return{regex:e,deser:([e])=>t(nE(e))}}let nN=String.fromCharCode(160),nP=`[ ${nN}]`,nD=RegExp(nP,"g");function nI(e){return e.replace(/\./g,"\\.?").replace(nD,nP)}function nR(e){return e.replace(/\./g,"").replace(nD," ").toLowerCase()}function nj(e,t){return null===e?null:{regex:RegExp(e.map(nI).join("|")),deser:([n])=>e.findIndex(e=>nR(n)===nR(e))+t}}function nM(e,t){return{regex:e,deser:([,e,t])=>eK(e,t),groups:t}}function nL(e){return{regex:e,deser:([e])=>e}}function nV(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function nB(e,t){let n=nC(t),r=nC(t,"{2}"),i=nC(t,"{3}"),o=nC(t,"{4}"),a=nC(t,"{6}"),s=nC(t,"{1,2}"),l=nC(t,"{1,3}"),u=nC(t,"{1,6}"),c=nC(t,"{1,9}"),d=nC(t,"{2,4}"),h=nC(t,"{4,6}"),f=e=>({regex:RegExp(nV(e.val)),deser:([e])=>e,literal:!0}),p=p=>{if(e.literal)return f(p);switch(p.val){case"G":return nj(t.eras("short"),0);case"GG":return nj(t.eras("long"),0);case"y":return nA(u);case"yy":case"kk":return nA(d,eW);case"yyyy":case"kkkk":return nA(o);case"yyyyy":return nA(h);case"yyyyyy":return nA(a);case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return nA(s);case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return nA(r);case"MMM":return nj(t.months("short",!0),1);case"MMMM":return nj(t.months("long",!0),1);case"LLL":return nj(t.months("short",!1),1);case"LLLL":return nj(t.months("long",!1),1);case"o":case"S":return nA(l);case"ooo":case"SSS":return nA(i);case"u":return nL(c);case"uu":return nL(s);case"uuu":case"E":case"c":return nA(n);case"a":return nj(t.meridiems(),0);case"EEE":return nj(t.weekdays("short",!1),1);case"EEEE":return nj(t.weekdays("long",!1),1);case"ccc":return nj(t.weekdays("short",!0),1);case"cccc":return nj(t.weekdays("long",!0),1);case"Z":case"ZZ":return nM(RegExp(`([+-]${s.source})(?::(${r.source}))?`),2);case"ZZZ":return nM(RegExp(`([+-]${s.source})(${r.source})?`),2);case"z":return nL(/[a-z_+-/]{1,256}?/i);case" ":return nL(/[^\S\n\r]/);default:return f(p)}},m=p(e)||{invalidReason:nT};return m.token=e,m}let nU={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function nq(e,t,n){let{type:r,value:i}=e;if("literal"===r){let o=/^\s+$/.test(i);return{literal:!o,val:o?" ":i}}let a=t[r],s=r;"hour"===r&&(s=null!=t.hour12?t.hour12?"hour12":"hour24":null!=t.hourCycle?"h11"===t.hourCycle||"h12"===t.hourCycle?"hour12":"hour24":n.hour12?"hour12":"hour24");let l=nU[s];if("object"==typeof l&&(l=l[a]),l)return{literal:!1,val:l}}function nF(e){let t=e.map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`,"");return[`^${t}$`,e]}function nZ(e,t,n){let r=e.match(t);if(!r)return[r,{}];{let i={},o=1;for(let a in n)if(ej(n,a)){let s=n[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(i[s.token.val[0]]=s.deser(r.slice(o,o+l))),o+=l}return[r,i]}}function nz(e){let t;let n=e=>{switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},r=null;eE(e.z)||(r=G.create(e.z)),eE(e.Z)||(r||(r=new em(e.Z)),t=e.Z),eE(e.q)||(e.M=(e.q-1)*3+1),eE(e.h)||(e.h<12&&1===e.a?e.h+=12:12!==e.h||0!==e.a||(e.h=0)),0===e.G&&e.y&&(e.y=-e.y),eE(e.u)||(e.S=eq(e.u));let i=Object.keys(e).reduce((t,r)=>{let i=n(r);return i&&(t[i]=e[r]),t},{});return[i,r,t]}let nH=null;function n$(){return nH||(nH=rO.fromMillis(1555555555555)),nH}function nG(e,t){if(e.literal)return e;let n=td.macroTokenToFormatOpts(e.val),r=nJ(n,t);return null==r||r.includes(void 0)?e:r}function nW(e,t){return Array.prototype.concat(...e.map(e=>nG(e,t)))}function nY(e,t,n){let r=nW(td.parseFormat(n),e),i=r.map(t=>nB(t,e)),o=i.find(e=>e.invalidReason);if(o)return{input:t,tokens:r,invalidReason:o.invalidReason};{let[a,s]=nF(i),l=RegExp(a,"i"),[c,d]=nZ(t,l,s),[h,f,p]=d?nz(d):[null,null,void 0];if(ej(d,"a")&&ej(d,"H"))throw new u("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:r,regex:l,rawMatches:c,matches:d,result:h,zone:f,specificOffset:p}}}function nK(e,t,n){let{result:r,zone:i,specificOffset:o,invalidReason:a}=nY(e,t,n);return[r,i,o,a]}function nJ(e,t){if(!e)return null;let n=td.create(t,e),r=n.dtFormatter(n$()),i=r.formatToParts(),o=r.resolvedOptions();return i.map(t=>nq(t,e,o))}let nX=[0,31,59,90,120,151,181,212,243,273,304,334],nQ=[0,31,60,91,121,152,182,213,244,274,305,335];function n0(e,t){return new th("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function n1(e,t,n){let r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);let i=r.getUTCDay();return 0===i?7:i}function n2(e,t,n){return n+(eZ(e)?nQ:nX)[t-1]}function n3(e,t){let n=eZ(e)?nQ:nX,r=n.findIndex(e=>e<t),i=t-n[r];return{month:r+1,day:i}}function n5(e){let{year:t,month:n,day:r}=e,i=n2(t,n,r),o=n1(t,n,r),a=Math.floor((i-o+10)/7),s;return a<1?a=eG(s=t-1):a>eG(t)?(s=t+1,a=1):s=t,{weekYear:s,weekNumber:a,weekday:o,...e0(e)}}function n4(e){let{weekYear:t,weekNumber:n,weekday:r}=e,i=n1(t,1,4),o=ez(t),a=7*n+r-i-3,s;a<1?a+=ez(s=t-1):a>o?(s=t+1,a-=ez(t)):s=t;let{month:l,day:u}=n3(s,a);return{year:s,month:l,day:u,...e0(e)}}function n6(e){let{year:t,month:n,day:r}=e,i=n2(t,n,r);return{year:t,ordinal:i,...e0(e)}}function n8(e){let{year:t,ordinal:n}=e,{month:r,day:i}=n3(t,n);return{year:t,month:r,day:i,...e0(e)}}function n7(e){let t=eT(e.weekYear),n=eM(e.weekNumber,1,eG(e.weekYear)),r=eM(e.weekday,1,7);return t?n?!r&&n0("weekday",e.weekday):n0("week",e.week):n0("weekYear",e.weekYear)}function n9(e){let t=eT(e.year),n=eM(e.ordinal,1,ez(e.year));return t?!n&&n0("ordinal",e.ordinal):n0("year",e.year)}function re(e){let t=eT(e.year),n=eM(e.month,1,12),r=eM(e.day,1,eH(e.year,e.month));return t?n?!r&&n0("day",e.day):n0("month",e.month):n0("year",e.year)}function rt(e){let{hour:t,minute:n,second:r,millisecond:i}=e,o=eM(t,0,23)||24===t&&0===n&&0===r&&0===i,a=eM(n,0,59),s=eM(r,0,59),l=eM(i,0,999);return o?a?s?!l&&n0("millisecond",i):n0("second",r):n0("minute",n):n0("hour",t)}let rn="Invalid DateTime",rr=864e13;function ri(e){return new th("unsupported zone",`the zone "${e.name}" is not supported`)}function ro(e){return null===e.weekData&&(e.weekData=n5(e.c)),e.weekData}function ra(e,t){let n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new rO({...n,...t,old:n})}function rs(e,t,n){let r=e-6e4*t,i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*6e4;let o=n.offset(r);return i===o?[r,i]:[e-6e4*Math.min(i,o),Math.max(i,o)]}function rl(e,t){e+=6e4*t;let n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function ru(e,t,n){return rs(e$(e),t,n)}function rc(e,t){let n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),o={...e.c,year:r,month:i,day:Math.min(e.c.day,eH(r,i))+Math.trunc(t.days)+7*Math.trunc(t.weeks)},a=nm.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=e$(o),[l,u]=rs(s,n,e.zone);return 0!==a&&(l+=a,u=e.zone.offset(l)),{ts:l,o:u}}function rd(e,t,n,r,i,o){let{setZone:a,zone:s}=n;if((!e||0===Object.keys(e).length)&&!t)return rO.invalid(new th("unparsable",`the input "${i}" can't be parsed as ${r}`));{let l=t||s,u=rO.fromObject(e,{...n,zone:l,specificOffset:o});return a?u:u.setZone(s)}}function rh(e,t,n=!0){return e.isValid?td.create(ef.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function rf(e,t){let n=e.c.year>9999||e.c.year<0,r="";return n&&e.c.year>=0&&(r+="+"),r+=eV(e.c.year,n?6:4),t?r+="-"+eV(e.c.month)+"-"+eV(e.c.day):r+=eV(e.c.month)+eV(e.c.day),r}function rp(e,t,n,r,i,o){let a=eV(e.c.hour);return t?(a+=":"+eV(e.c.minute),0===e.c.millisecond&&0===e.c.second&&n||(a+=":")):a+=eV(e.c.minute),0===e.c.millisecond&&0===e.c.second&&n||(a+=eV(e.c.second),0===e.c.millisecond&&r||(a+="."+eV(e.c.millisecond,3))),i&&(e.isOffsetFixed&&0===e.offset&&!o?a+="Z":e.o<0?a+="-"+eV(Math.trunc(-e.o/60))+":"+eV(Math.trunc(-e.o%60)):a+="+"+eV(Math.trunc(e.o/60))+":"+eV(Math.trunc(e.o%60))),o&&(a+="["+e.zone.ianaName+"]"),a}let rm={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},rg={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},rv={ordinal:1,hour:0,minute:0,second:0,millisecond:0},ry=["year","month","day","hour","minute","second","millisecond"],rb=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],rw=["year","ordinal","hour","minute","second","millisecond"];function rx(e){let t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new c(e);return t}function rk(e,t){let n,r;let i=ev(t.zone,eO.defaultZone),o=ef.fromObject(t),a=eO.now();if(eE(e.year))n=a;else{for(let s of ry)eE(e[s])&&(e[s]=rm[s]);let l=re(e)||rt(e);if(l)return rO.invalid(l);let u=i.offset(a);[n,r]=ru(e,u,i)}return new rO({ts:n,zone:i,loc:o,o:r})}function rS(e,t,n){let r=!!eE(n.round)||n.round,i=(e,i)=>{e=eF(e,r||n.calendary?0:2,!0);let o=t.loc.clone(n).relFormatter(n);return o.format(e,i)},o=r=>n.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r);if(n.unit)return i(o(n.unit),n.unit);for(let a of n.units){let s=o(a);if(Math.abs(s)>=1)return i(s,a)}return i(-0,n.units[n.units.length-1])}function r_(e){let t={},n;return e.length>0&&"object"==typeof e[e.length-1]?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}class rO{constructor(e){let t=e.zone||eO.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new th("invalid input"):null)||(t.isValid?null:ri(t));this.ts=eE(e.ts)?eO.now():e.ts;let r=null,i=null;if(!n){let o=e.old&&e.old.ts===this.ts&&e.old.zone.equals(t);if(o)[r,i]=[e.old.c,e.old.o];else{let a=t.offset(this.ts);r=(n=Number.isNaN((r=rl(this.ts,a)).year)?new th("invalid input"):null)?null:r,i=n?null:a}}this._zone=t,this.loc=e.loc||ef.create(),this.invalid=n,this.weekData=null,this.c=r,this.o=i,this.isLuxonDateTime=!0}static now(){return new rO({})}static local(){let[e,t]=r_(arguments),[n,r,i,o,a,s,l]=t;return rk({year:n,month:r,day:i,hour:o,minute:a,second:s,millisecond:l},e)}static utc(){let[e,t]=r_(arguments),[n,r,i,o,a,s,l]=t;return e.zone=em.utcInstance,rk({year:n,month:r,day:i,hour:o,minute:a,second:s,millisecond:l},e)}static fromJSDate(e,t={}){let n=eN(e)?e.valueOf():NaN;if(Number.isNaN(n))return rO.invalid("invalid input");let r=ev(t.zone,eO.defaultZone);return r.isValid?new rO({ts:n,zone:r,loc:ef.fromObject(t)}):rO.invalid(ri(r))}static fromMillis(e,t={}){if(eC(e))return e<-rr||e>rr?rO.invalid("Timestamp out of range"):new rO({ts:e,zone:ev(t.zone,eO.defaultZone),loc:ef.fromObject(t)});throw new d(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,t={}){if(eC(e))return new rO({ts:1e3*e,zone:ev(t.zone,eO.defaultZone),loc:ef.fromObject(t)});throw new d("fromSeconds requires a numerical input")}static fromObject(e,t={}){e=e||{};let n=ev(t.zone,eO.defaultZone);if(!n.isValid)return rO.invalid(ri(n));let r=eO.now(),i=eE(t.specificOffset)?n.offset(r):t.specificOffset,o=eX(e,rx),a=!eE(o.ordinal),s=!eE(o.year),l=!eE(o.month)||!eE(o.day),c=s||l,d=o.weekYear||o.weekNumber,h=ef.fromObject(t);if((c||a)&&d)throw new u("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new u("Can't mix ordinal dates with month/day");let f=d||o.weekday&&!c,p,m,g=rl(r,i);f?(p=rb,m=rg,g=n5(g)):a?(p=rw,m=rv,g=n6(g)):(p=ry,m=rm);let v=!1;for(let y of p){let b=o[y];eE(b)?v?o[y]=m[y]:o[y]=g[y]:v=!0}let w=f?n7(o):a?n9(o):re(o),x=w||rt(o);if(x)return rO.invalid(x);let k=f?n4(o):a?n8(o):o,[S,_]=ru(k,i,n),O=new rO({ts:S,zone:n,o:_,loc:h});return o.weekday&&c&&e.weekday!==O.weekday?rO.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${O.toISO()}`):O}static fromISO(e,t={}){let[n,r]=t3(e);return rd(n,r,t,"ISO 8601",e)}static fromRFC2822(e,t={}){let[n,r]=t5(e);return rd(n,r,t,"RFC 2822",e)}static fromHTTP(e,t={}){let[n,r]=t4(e);return rd(n,r,t,"HTTP",t)}static fromFormat(e,t,n={}){if(eE(e)||eE(t))throw new d("fromFormat requires an input string and a format");let{locale:r=null,numberingSystem:i=null}=n,o=ef.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0}),[a,s,l,u]=nK(o,e,t);return u?rO.invalid(u):rd(a,s,n,`format ${t}`,e,l)}static fromString(e,t,n={}){return rO.fromFormat(e,t,n)}static fromSQL(e,t={}){let[n,r]=nn(e);return rd(n,r,t,"SQL",e)}static invalid(e,t=null){if(!e)throw new d("need to specify a reason the DateTime is invalid");let n=e instanceof th?e:new th(e,t);if(!eO.throwOnInvalid)return new rO({invalid:n});throw new a(n)}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){let n=nJ(e,ef.fromObject(t));return n?n.map(e=>e?e.val:null).join(""):null}static expandFormat(e,t={}){let n=nW(td.parseFormat(e),ef.fromObject(t));return n.map(e=>e.val).join("")}get(e){return this[e]}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?ro(this).weekYear:NaN}get weekNumber(){return this.isValid?ro(this).weekNumber:NaN}get weekday(){return this.isValid?ro(this).weekday:NaN}get ordinal(){return this.isValid?n6(this.c).ordinal:NaN}get monthShort(){return this.isValid?nb.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?nb.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?nb.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?nb.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,t=6e4,n=e$(this.c),r=this.zone.offset(n-e),i=this.zone.offset(n+e),o=this.zone.offset(n-r*t),a=this.zone.offset(n-i*t);if(o===a)return[this];let s=n-o*t,l=n-a*t,u=rl(s,o),c=rl(l,a);return u.hour===c.hour&&u.minute===c.minute&&u.second===c.second&&u.millisecond===c.millisecond?[ra(this,{ts:s}),ra(this,{ts:l})]:[this]}get isInLeapYear(){return eZ(this.year)}get daysInMonth(){return eH(this.year,this.month)}get daysInYear(){return this.isValid?ez(this.year):NaN}get weeksInWeekYear(){return this.isValid?eG(this.weekYear):NaN}resolvedLocaleOptions(e={}){let{locale:t,numberingSystem:n,calendar:r}=td.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:r}}toUTC(e=0,t={}){return this.setZone(em.instance(e),t)}toLocal(){return this.setZone(eO.defaultZone)}setZone(e,{keepLocalTime:t=!1,keepCalendarTime:n=!1}={}){if((e=ev(e,eO.defaultZone)).equals(this.zone))return this;if(!e.isValid)return rO.invalid(ri(e));{let r=this.ts;if(t||n){let i=e.offset(this.ts),o=this.toObject();[r]=ru(o,i,e)}return ra(this,{ts:r,zone:e})}}reconfigure({locale:e,numberingSystem:t,outputCalendar:n}={}){let r=this.loc.clone({locale:e,numberingSystem:t,outputCalendar:n});return ra(this,{loc:r})}setLocale(e){return this.reconfigure({locale:e})}set(e){let t;if(!this.isValid)return this;let n=eX(e,rx),r=!eE(n.weekYear)||!eE(n.weekNumber)||!eE(n.weekday),i=!eE(n.ordinal),o=!eE(n.year),a=!eE(n.month)||!eE(n.day),s=o||a,l=n.weekYear||n.weekNumber;if((s||i)&&l)throw new u("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(a&&i)throw new u("Can't mix ordinal dates with month/day");r?t=n4({...n5(this.c),...n}):eE(n.ordinal)?(t={...this.toObject(),...n},eE(n.day)&&(t.day=Math.min(eH(t.year,t.month),t.day))):t=n8({...n6(this.c),...n});let[c,d]=ru(t,this.o,this.zone);return ra(this,{ts:c,o:d})}plus(e){if(!this.isValid)return this;let t=nm.fromDurationLike(e);return ra(this,rc(this,t))}minus(e){if(!this.isValid)return this;let t=nm.fromDurationLike(e).negate();return ra(this,rc(this,t))}startOf(e){if(!this.isValid)return this;let t={},n=nm.normalizeUnit(e);switch(n){case"years":t.month=1;case"quarters":case"months":t.day=1;case"weeks":case"days":t.hour=0;case"hours":t.minute=0;case"minutes":t.second=0;case"seconds":t.millisecond=0}if("weeks"===n&&(t.weekday=1),"quarters"===n){let r=Math.ceil(this.month/3);t.month=(r-1)*3+1}return this.set(t)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,t={}){return this.isValid?td.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):rn}toLocaleString(e=g,t={}){return this.isValid?td.create(this.loc.clone(t),e).formatDateTime(this):rn}toLocaleParts(e={}){return this.isValid?td.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:r=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;let o="extended"===e;return rf(this,o)+"T"+rp(this,o,t,n,r,i)}toISODate({format:e="extended"}={}){return this.isValid?rf(this,"extended"===e):null}toISOWeekDate(){return rh(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:r=!1,extendedZone:i=!1,format:o="extended"}={}){return this.isValid?(r?"T":"")+rp(this,"extended"===o,t,e,n,i):null}toRFC2822(){return rh(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return rh(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?rf(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let r="HH:mm:ss.SSS";return(t||e)&&(n&&(r+=" "),t?r+="z":e&&(r+="ZZ")),rh(this,r,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():rn}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t="milliseconds",n={}){if(!this.isValid||!e.isValid)return nm.invalid("created by diffing an invalid DateTime");let r={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=eD(t).map(nm.normalizeUnit),o=e.valueOf()>this.valueOf(),a=o?this:e,s=o?e:this,l=nk(a,s,i,r);return o?l.negate():l}diffNow(e="milliseconds",t={}){return this.diff(rO.now(),e,t)}until(e){return this.isValid?ny.fromDateTimes(this,e):this}hasSame(e,t){if(!this.isValid)return!1;let n=e.valueOf(),r=this.setZone(e.zone,{keepLocalTime:!0});return r.startOf(t)<=n&&n<=r.endOf(t)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let t=e.base||rO.fromObject({},{zone:this.zone}),n=e.padding?this<t?-e.padding:e.padding:0,r=["years","months","days","hours","minutes","seconds"],i=e.unit;return Array.isArray(e.unit)&&(r=e.unit,i=void 0),rS(t,this.plus(n),{...e,numeric:"always",units:r,unit:i})}toRelativeCalendar(e={}){return this.isValid?rS(e.base||rO.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(rO.isDateTime))throw new d("min requires all arguments be DateTimes");return eI(e,e=>e.valueOf(),Math.min)}static max(...e){if(!e.every(rO.isDateTime))throw new d("max requires all arguments be DateTimes");return eI(e,e=>e.valueOf(),Math.max)}static fromFormatExplain(e,t,n={}){let{locale:r=null,numberingSystem:i=null}=n,o=ef.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return nY(o,e,t)}static fromStringExplain(e,t,n={}){return rO.fromFormatExplain(e,t,n)}static get DATE_SHORT(){return g}static get DATE_MED(){return v}static get DATE_MED_WITH_WEEKDAY(){return y}static get DATE_FULL(){return b}static get DATE_HUGE(){return w}static get TIME_SIMPLE(){return x}static get TIME_WITH_SECONDS(){return k}static get TIME_WITH_SHORT_OFFSET(){return S}static get TIME_WITH_LONG_OFFSET(){return _}static get TIME_24_SIMPLE(){return O}static get TIME_24_WITH_SECONDS(){return E}static get TIME_24_WITH_SHORT_OFFSET(){return C}static get TIME_24_WITH_LONG_OFFSET(){return T}static get DATETIME_SHORT(){return A}static get DATETIME_SHORT_WITH_SECONDS(){return N}static get DATETIME_MED(){return P}static get DATETIME_MED_WITH_SECONDS(){return D}static get DATETIME_MED_WITH_WEEKDAY(){return I}static get DATETIME_FULL(){return R}static get DATETIME_FULL_WITH_SECONDS(){return j}static get DATETIME_HUGE(){return M}static get DATETIME_HUGE_WITH_SECONDS(){return L}}function rE(e){if(rO.isDateTime(e))return e;if(e&&e.valueOf&&eC(e.valueOf()))return rO.fromJSDate(e);if(e&&"object"==typeof e)return rO.fromObject(e);throw new d(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var rC=n(3279),rT=n(4926),rA=n(8398),rN=n(9644),rP=n.n(rN);let rD="https://dev.kika-ackley.ida-dev.de".replace(/\/+$/,"");class rI{constructor(e,t=rD,n=rP()){this.basePath=t,this.axios=n,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)}}class rR extends Error{constructor(e,t){super(t),this.field=e,this.name="RequiredError"}}let rj=function(e){return{getChannel(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getChannel.");let i="/v1/channels/{id}".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}}}},rM=function(e){return{getChannel(t,n){let r=rj(e).getChannel(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}}}};class rL extends rI{getChannel(e,t){return rM(this.configuration).getChannel(e,t)(this.axios,this.basePath)}}let rV=function(e){return{getDocumentType(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getDocumentType.");let i="/v1/documents/{id}/type".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getIndexDocument(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("urlpath","Required parameter urlpath was null or undefined when calling getIndexDocument.");let i="/v1/index",o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};void 0!==t&&(l.urlpath=t),o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}}}},rB=function(e){return{getDocumentType(t,n){let r=rV(e).getDocumentType(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getIndexDocument(t,n){let r=rV(e).getIndexDocument(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}}}};class rU extends rI{getDocumentType(e,t){return rB(this.configuration).getDocumentType(e,t)(this.axios,this.basePath)}getIndexDocument(e,t){return rB(this.configuration).getIndexDocument(e,t)(this.axios,this.basePath)}}let rq=function(e){return{getForm(t,n){let r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getForm.");if(null==n)throw new rR("userIp","Required parameter userIp was null or undefined when calling getForm.");let o="/v1/forms/{id}".replace("{id}",encodeURIComponent(String(t))),a=rA.parse(o,!0);e&&(r=e.baseOptions);let s={method:"GET",...r,...i},l={},u={};void 0!==n&&(u.userIp=n),a.query={...a.query,...u,...i.query},delete a.search;let c=r&&r.headers?r.headers:{};return s.headers={...l,...c,...i.headers},{url:rA.format(a),options:s}},postFormResults(t,n,r){let i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling postFormResults.");if(null==n)throw new rR("formResultRequest","Required parameter formResultRequest was null or undefined when calling postFormResults.");let a="/v1/forms/{id}".replace("{id}",encodeURIComponent(String(t))),s=rA.parse(a,!0);e&&(i=e.baseOptions);let l={method:"POST",...i,...o},u={},c={};void 0!==r&&(c.validateCaptcha=r),u["Content-Type"]="application/json",s.query={...s.query,...c,...o.query},delete s.search;let d=i&&i.headers?i.headers:{};l.headers={...u,...d,...o.headers};let h="string"!=typeof n||"application/json"===l.headers["Content-Type"];return l.data=h?JSON.stringify(void 0!==n?n:{}):n||"",{url:rA.format(s),options:l}}}},rF=function(e){return{getForm(t,n,r){let i=rq(e).getForm(t,n,r);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...i.options,url:t+i.url};return e.request(n)}},postFormResults(t,n,r,i){let o=rq(e).postFormResults(t,n,r,i);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...o.options,url:t+o.url};return e.request(n)}}}};class rZ extends rI{getForm(e,t,n){return rF(this.configuration).getForm(e,t,n)(this.axios,this.basePath)}postFormResults(e,t,n,r){return rF(this.configuration).postFormResults(e,t,n,r)(this.axios,this.basePath)}}let rz=function(e){return{getInteractive(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getInteractive.");let i="/v1/interactives/{id}".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}}}},rH=function(e){return{getInteractive(t,n){let r=rz(e).getInteractive(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}}}};class r$ extends rI{getInteractive(e,t){return rH(this.configuration).getInteractive(e,t)(this.axios,this.basePath)}}let rG=function(e){return{getCurrentDay(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getCurrentDay.");let i="/v1/livestreams/{id}/currentday".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getCurrentProgramItems(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getCurrentProgramItems.");let i="/v1/livestreams/{id}/currentprogramitems".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getLivestream(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getLivestream.");let i="/v1/livestreams/{id}".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}}}},rW=function(e){return{getCurrentDay(t,n){let r=rG(e).getCurrentDay(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getCurrentProgramItems(t,n){let r=rG(e).getCurrentProgramItems(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getLivestream(t,n){let r=rG(e).getLivestream(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}}}};class rY extends rI{getCurrentDay(e,t){return rW(this.configuration).getCurrentDay(e,t)(this.axios,this.basePath)}getCurrentProgramItems(e,t){return rW(this.configuration).getCurrentProgramItems(e,t)(this.axios,this.basePath)}getLivestream(e,t){return rW(this.configuration).getLivestream(e,t)(this.axios,this.basePath)}}let rK=function(e){return{getBurgerNavigation(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getBurgerNavigation.");let i="/v1/navigations/{id}/burger".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getFooterNavigation(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getFooterNavigation.");let i="/v1/navigations/{id}/footer".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getMainNavigation(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getMainNavigation.");let i="/v1/navigations/{id}/main".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getSubNavigation(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getSubNavigation.");let i="/v1/navigations/{id}/sub".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}}}},rJ=function(e){return{getBurgerNavigation(t,n){let r=rK(e).getBurgerNavigation(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getFooterNavigation(t,n){let r=rK(e).getFooterNavigation(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getMainNavigation(t,n){let r=rK(e).getMainNavigation(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getSubNavigation(t,n){let r=rK(e).getSubNavigation(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}}}};class rX extends rI{getBurgerNavigation(e,t){return rJ(this.configuration).getBurgerNavigation(e,t)(this.axios,this.basePath)}getFooterNavigation(e,t){return rJ(this.configuration).getFooterNavigation(e,t)(this.axios,this.basePath)}getMainNavigation(e,t){return rJ(this.configuration).getMainNavigation(e,t)(this.axios,this.basePath)}getSubNavigation(e,t){return rJ(this.configuration).getSubNavigation(e,t)(this.axios,this.basePath)}}let rQ=function(e){return{getExtendedRelatedVideo(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getExtendedRelatedVideo.");let i="/v1/relatedvideos/{id}/extended".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getVideo1(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getVideo1.");let i="/v1/relatedvideos/{id}".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}}}},r0=function(e){return{getExtendedRelatedVideo(t,n){let r=rQ(e).getExtendedRelatedVideo(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getVideo1(t,n){let r=rQ(e).getVideo1(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}}}};class r1 extends rI{getExtendedRelatedVideo(e,t){return r0(this.configuration).getExtendedRelatedVideo(e,t)(this.axios,this.basePath)}getVideo1(e,t){return r0(this.configuration).getVideo1(e,t)(this.axios,this.basePath)}}let r2=function(e){return{getSearchResultsPaged(t,n,r){let i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(null==t)throw new rR("searchId","Required parameter searchId was null or undefined when calling getSearchResultsPaged.");let a="/v1/search/{searchId}".replace("{searchId}",encodeURIComponent(String(t))),s=rA.parse(a,!0);e&&(i=e.baseOptions);let l={method:"GET",...i,...o},u={},c={};void 0!==n&&(c.q=n),void 0!==r&&(c.page=r),s.query={...s.query,...c,...o.query},delete s.search;let d=i&&i.headers?i.headers:{};return l.headers={...u,...d,...o.headers},{url:rA.format(s),options:l}}}},r3=function(e){return{getSearchResultsPaged(t,n,r,i){let o=r2(e).getSearchResultsPaged(t,n,r,i);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...o.options,url:t+o.url};return e.request(n)}}}};class r5 extends rI{getSearchResultsPaged(e,t,n,r){return r3(this.configuration).getSearchResultsPaged(e,t,n,r)(this.axios,this.basePath)}}let r4=function(e){return{getHeaderSettings(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getHeaderSettings.");let i="/v1/settings/{id}/header".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}}}},r6=function(e){return{getHeaderSettings(t,n){let r=r4(e).getHeaderSettings(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}}}};class r8 extends rI{getHeaderSettings(e,t){return r6(this.configuration).getHeaderSettings(e,t)(this.axios,this.basePath)}}let r7=function(e){return{getStory(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getStory.");let i="/v1/stories/{id}".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}}}},r9=function(e){return{getStory(t,n){let r=r7(e).getStory(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}}}};class ie extends rI{getStory(e,t){return r9(this.configuration).getStory(e,t)(this.axios,this.basePath)}}let it=function(e){return{getSubchannel(t,n){let r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getSubchannel.");let o="/v1/subchannels/{id}".replace("{id}",encodeURIComponent(String(t))),a=rA.parse(o,!0);e&&(r=e.baseOptions);let s={method:"GET",...r,...i},l={},u={};void 0!==n&&(u.referrer=n),a.query={...a.query,...u,...i.query},delete a.search;let c=r&&r.headers?r.headers:{};return s.headers={...l,...c,...i.headers},{url:rA.format(a),options:s}},getTeasersPaged(t,n,r){let i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getTeasersPaged.");let a="/v1/subchannels/{id}/teasers".replace("{id}",encodeURIComponent(String(t))),s=rA.parse(a,!0);e&&(i=e.baseOptions);let l={method:"GET",...i,...o},u={},c={};void 0!==n&&(c.page=n),void 0!==r&&(c.referrer=r),s.query={...s.query,...c,...o.query},delete s.search;let d=i&&i.headers?i.headers:{};return l.headers={...u,...d,...o.headers},{url:rA.format(s),options:l}}}},ir=function(e){return{getSubchannel(t,n,r){let i=it(e).getSubchannel(t,n,r);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...i.options,url:t+i.url};return e.request(n)}},getTeasersPaged(t,n,r,i){let o=it(e).getTeasersPaged(t,n,r,i);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...o.options,url:t+o.url};return e.request(n)}}}};class ii extends rI{getSubchannel(e,t,n){return ir(this.configuration).getSubchannel(e,t,n)(this.axios,this.basePath)}getTeasersPaged(e,t,n,r){return ir(this.configuration).getTeasersPaged(e,t,n,r)(this.axios,this.basePath)}}let io=function(e){return{getAtInternetTracking(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getAtInternetTracking.");let i="/v1/tracking/{id}/ati".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getAtInternetTrackingForError(t,n){let r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==t)throw new rR("statuscode","Required parameter statuscode was null or undefined when calling getAtInternetTrackingForError.");if(null==n)throw new rR("url","Required parameter url was null or undefined when calling getAtInternetTrackingForError.");let o="/v1/tracking/{statuscode}/atierrorpage".replace("{statuscode}",encodeURIComponent(String(t))),a=rA.parse(o,!0);e&&(r=e.baseOptions);let s={method:"GET",...r,...i},l={},u={};void 0!==n&&(u.url=n),a.query={...a.query,...u,...i.query},delete a.search;let c=r&&r.headers?r.headers:{};return s.headers={...l,...c,...i.headers},{url:rA.format(a),options:s}}}},ia=function(e){return{getAtInternetTracking(t,n){let r=io(e).getAtInternetTracking(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getAtInternetTrackingForError(t,n,r){let i=io(e).getAtInternetTrackingForError(t,n,r);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...i.options,url:t+i.url};return e.request(n)}}}};class is extends rI{getAtInternetTracking(e,t){return ia(this.configuration).getAtInternetTracking(e,t)(this.axios,this.basePath)}getAtInternetTrackingForError(e,t,n){return ia(this.configuration).getAtInternetTrackingForError(e,t,n)(this.axios,this.basePath)}}let il=function(e){return{getAssets(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getAssets.");let i="/v1/videos/{id}/assets".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getExtended(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getExtended.");let i="/v1/videos/{id}/extended".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getSubtitle(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getSubtitle.");let i="/v1/videos/{id}/subtitle".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getSubtitleWebvtt(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getSubtitleWebvtt.");let i="/v1/videos/{id}/webvtt".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getVideo(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getVideo.");let i="/v1/videos/{id}".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}}}},iu=function(e){return{getAssets(t,n){let r=il(e).getAssets(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getExtended(t,n){let r=il(e).getExtended(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getSubtitle(t,n){let r=il(e).getSubtitle(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getSubtitleWebvtt(t,n){let r=il(e).getSubtitleWebvtt(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getVideo(t,n){let r=il(e).getVideo(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}}}};class ic extends rI{getAssets(e,t){return iu(this.configuration).getAssets(e,t)(this.axios,this.basePath)}getExtended(e,t){return iu(this.configuration).getExtended(e,t)(this.axios,this.basePath)}getSubtitle(e,t){return iu(this.configuration).getSubtitle(e,t)(this.axios,this.basePath)}getSubtitleWebvtt(e,t){return iu(this.configuration).getSubtitleWebvtt(e,t)(this.axios,this.basePath)}getVideo(e,t){return iu(this.configuration).getVideo(e,t)(this.axios,this.basePath)}}let id=function(e){return{getVideoSubchannel(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getVideoSubchannel.");let i="/v1/videosubchannels/{id}".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}},getVideosPaged(t,n){let r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getVideosPaged.");let o="/v1/videosubchannels/{id}/videos".replace("{id}",encodeURIComponent(String(t))),a=rA.parse(o,!0);e&&(r=e.baseOptions);let s={method:"GET",...r,...i},l={},u={};void 0!==n&&(u.page=n),a.query={...a.query,...u,...i.query},delete a.search;let c=r&&r.headers?r.headers:{};return s.headers={...l,...c,...i.headers},{url:rA.format(a),options:s}}}},ih=function(e){return{getVideoSubchannel(t,n){let r=id(e).getVideoSubchannel(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}},getVideosPaged(t,n,r){let i=id(e).getVideosPaged(t,n,r);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...i.options,url:t+i.url};return e.request(n)}}}};class ip extends rI{getVideoSubchannel(e,t){return ih(this.configuration).getVideoSubchannel(e,t)(this.axios,this.basePath)}getVideosPaged(e,t,n){return ih(this.configuration).getVideosPaged(e,t,n)(this.axios,this.basePath)}}let im=function(e){return{getXml(t){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==t)throw new rR("id","Required parameter id was null or undefined when calling getXml.");let i="/v1/xmls/{id}".replace("{id}",encodeURIComponent(String(t))),o=rA.parse(i,!0);e&&(n=e.baseOptions);let a={method:"GET",...n,...r},s={},l={};o.query={...o.query,...l,...r.query},delete o.search;let u=n&&n.headers?n.headers:{};return a.headers={...s,...u,...r.headers},{url:rA.format(o),options:a}}}},ig=function(e){return{getXml(t,n){let r=im(e).getXml(t,n);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rP(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rD,n={...r.options,url:t+r.url};return e.request(n)}}}};class iv extends rI{getXml(e,t){return ig(this.configuration).getXml(e,t)(this.axios,this.basePath)}}var iy=n(7125),ib=n(2784),iw=n(9453),ix=n(713);let ik=e=>{let{linkDetails:t,children:n,isExternal:r,href:o,title:a}=e,s=(0,ib.useContext)(iw.Ni);return(0,i.jsx)(iy.g,{href:o,title:a||"link",target:r?"_blank":null,isExternal:r,linkDetails:t,color:s.palette.primaryLightMint,fontWeight:"bold",display:"inline-block",children:(0,i.jsxs)("span",{children:[n,(0,i.jsx)(ix.b,{implementationType:"svg",fill:s.palette.primaryLightMint,display:"inline-flex",top:"3px",position:"relative",margin:"0 0 0 3px",width:"18px",height:"18px",minWidth:"18px",minHeight:"18px",id:r?"external-link":"arrow-right",alt:""})]})})};var iS=n(2228),i_=n(9835);function iO(){let e=(0,iS.Z)(["\n					::marker {\n						color: ",";\n						font-weight: bold;\n					}\n			  "]);return iO=function(){return e},e}function iE(){let e=(0,iS.Z)(["\n					::before {\n						content: '';\n						background-image: url('/kikare-assets/img/arrow-right.png');\n						background-size: contain;\n						background-repeat: no-repeat;\n						display: inline-block;\n						width: 20px;\n						height: 20px;\n						margin-right: 0;\n						margin-top: 1px;\n						left: 0;\n						position: absolute;\n						flex-shrink: 0;\n					}\n			  "]);return iE=function(){return e},e}function iC(){let e=(0,iS.Z)(["\n	list-style: ",";\n\n	",";\n"]);return iC=function(){return e},e}let iT=(0,iw.ZP)(i_.xu).withConfig({componentId:"sc-b2748d12-0"})(iC(),e=>{let{isOrdered:t}=e;return t?"auto":"none"},e=>{let{isOrdered:t}=e;return t?(0,iw.iv)(iO(),e=>{var t;let{theme:n}=e;return(null==n?void 0:null===(t=n.palette)||void 0===t?void 0:t.primaryYellow)||"#ffffff"}):(0,iw.iv)(iE())});var iA=n(5739),iN=n(4406),iP=n(8834).lW;let iD=null!==(r=iN.env.NEXT_PUBLIC_API)&&void 0!==r?r:"",iI="/_next-api/proxy",iR=iN.env.NEXT_PUBLIC_API_USER,ij=iN.env.NEXT_PUBLIC_API_PASSWORD,iM="Basic",iL=iR&&ij?iP.from("".concat(iR,":").concat(ij),"utf8").toString("base64"):null,iV=()=>(0,rC.sk)()?iD:iI,iB=()=>{let e={};return(0,rC.sk)()&&iL&&(e.headers={Authorization:"".concat(iM," ").concat(iL)}),e},iU={basePath:iV(),baseOptions:iB()},iq=e=>{let t=null;return"application/pdf"===e&&(t="PDF"),"image/jpeg"===e&&(t="JPG"),"image/png"===e&&(t="PNG"),t},iF=(e,t)=>{let n=RegExp("[?&]".concat(t,"=([^&]+)"),"gm"),r=n.exec(e);return r&&r[1]||null};function iZ(e,t,n,r,i){let o=iN.env.NEXT_PUBLIC_ORIGIN_IMAGES||iN.env.NX_ORIGIN_IMAGES||"";if("kikaninchen"===r&&(o=i.origins.kkn||""),e)return o+e.split("**imageVariant**").join(t||"tlarge169").split("**width**").join(n||"1024")}let iz=(e,t,n)=>n||(e&&t?"".concat(e,"/").concat(t):null),iH=async e=>{let t=null;try{let n=new rL(iU),{data:r}=await n.getChannel(e);if(!r)return;return t=r}catch(i){return null}},i$=async e=>{let t=null;try{let n=new rY(iU),{data:r}=await n.getCurrentProgramItems(e);if(!r)return;return t=r}catch(i){return null}},iG=async e=>{let t=null;try{let n=new iv(iU),{data:r}=await n.getXml(e);if(!r)return;return t=iA.parse(r,{ignoreAttributes:!1})}catch(i){return null}},iW=async e=>{let t=null;try{let n=new r$(iU),{data:r}=await n.getInteractive(e);if(!r)return;return t=r}catch(i){return null}},iY=async(e,t,n)=>{try{let r=new ii(iU),{data:i}=await r.getTeasersPaged(e,t,n);if(!i)return;return i}catch(o){return null}},iK=async(e,t)=>{try{let n=new ip(iU),{data:r}=await n.getVideosPaged(e,t);if(!r)return;return r}catch(i){return null}},iJ=async e=>{let t=null;try{let n=new rU(iU),{data:r}=await n.getIndexDocument(e);if(!r)return;return t=r}catch(i){return null}},iX=async e=>{let t=null;try{let n=new ic(iU),{data:r}=await n.getVideo(e);if(!r)return;return t=r}catch(i){return null}},iQ=async e=>{let t=null;try{let n=new r1(iU),{data:r}=await n.getVideo1(e);if(!r)return;return t=r}catch(i){return null}},i0=async e=>{let t=null;try{let n=new ic(iU),{data:r}=await n.getAssets(e);if(!r)return;return t=r}catch(i){return null}},i1=(e,t)=>{if(!e)return;let n=new Date(e),r=Date.now(),i=(n.getTime()-r)/1e3,o=Math.floor(i/86400);if(isNaN(o))return;let a=rO.fromISO(rO.fromISO(e).toFormat("yyyy-MM-dd")),s=rO.fromISO(rO.now().toFormat("yyyy-MM-dd")),l=a.diff(s,["days"]).days,u=()=>{if(t){let e=new Date(t),n=(e.getTime()-r)/1e3,i=Math.floor(n/86400);return i<0}};if(l>=7){let c=n.toLocaleDateString("de-DE",{day:"numeric",month:"long",hour:"numeric",minute:"numeric",timeZone:"Europe/Berlin"});return"".concat(c," Uhr")}if(l<7&&l>0&&1!==l){let d=n.toLocaleDateString("de-DE",{weekday:"long",hour:"numeric",minute:"numeric",timeZone:"Europe/Berlin"});return"".concat(d," Uhr")}if(1===l){let h=n.toLocaleDateString("de-DE",{hour:"numeric",minute:"numeric",timeZone:"Europe/Berlin"}).split(", ")[1];return"Morgen, ".concat(h," Uhr")}if(o<=0&&i<=0&&!u())return"Live";if(0===l&&i>0){let f=n.toLocaleDateString("de-DE",{hour:"numeric",minute:"numeric",timeZone:"Europe/Berlin"}).split(", ")[1];return"Heute, ".concat(f," Uhr")}};function i2(e,t){if(!e)return;let n=new Date(e),r=Date.now(),i=(n.getTime()-r)/1e3,o=Math.floor(i/86400);if(!isNaN(o)&&!(o<0)&&o<t)return 0===o&&(i<7200&&"noch eine Stunde verf\xfcgbar"||i<86400&&"noch "+Math.floor(i/3600)+" Stunden verf\xfcgbar")||1===o&&"bis morgen verf\xfcgbar"||"noch "+o+" Tage verf\xfcgbar"}let i3=async e=>{let t=null;try{let n=new rX(iU),{data:r}=await n.getFooterNavigation(e);if(!r)return;return t=r}catch(i){}},i5=async e=>{let t=null;try{let n=new rX(iU),{data:r}=await n.getBurgerNavigation(e);if(!r)return;return t=r}catch(i){}},i4=async e=>{let t=null;try{let n=new rX(iU),{data:r}=await n.getMainNavigation(e);if(!r)return;return t=r}catch(i){}},i6=e=>{if(!e)return;let t=null==e?void 0:e.split(":"),n=+t[0],r=+t[1],i=+t[2],o=Math.floor(60*n+r+i/60),a="".concat(o," Min.");return o<1&&(a="".concat(i," Sek.")),a},i8=async e=>{let t=null;try{let n=new r8(iU),{data:r}=await n.getHeaderSettings(e);if(!r)return;return t=r}catch(i){return null}};function i7(e,t,n,r){switch(t){case"main":return"/kikare-assets/svg/ic-main-nav_".concat(e,"-").concat(!n&&r?"hover":n||r?"active":"default",".svg");case"sub":return"/kikare-assets/svg/ic-sub-nav_".concat(e,"-").concat(!n&&r?"hover":n||r?"active":"default",".svg");case"burger":return"/kikare-assets/svg/ic-burger-nav_".concat(e,"-").concat(!n&&r?"hover":n||r?"active":"default",".svg");default:return null}}let i9={image:[1,4,6],shad1:[0,1,11],shad2:[-1,2,9]},oe={image:[0,5,3],shad1:[-1,5,4],shad2:[1,2,1]},ot=[{image:[-3,4,-1],shad1:[6,-2,3],shad2:[-6,-2,8]},{image:[2,6,2],shad1:[-3,2,8],shad2:[-4,0,-1]},{image:[0,7,7],shad1:[-5,-1,-1],shad2:[3,-1,7]},{image:[-3,5,6],shad1:[3,2,3],shad2:[-3,-1,-1]},{image:[-3,5,10],shad1:[-2,2,5],shad2:[3,-1,-1]}],on=[{image:[1,7,1],shad1:[-3,2,2],shad2:[3,0,0]},{image:[1,8,2],shad1:[0,6,5],shad2:[-1,0,0]},{image:[1,8,2],shad1:[-2,2,4],shad2:[2,1,0]},{image:[-1,7,4],shad1:[1,0,3],shad2:[-1,8,0]}],or=e=>({transform:"rotate(".concat(e[0],"deg)"),bottom:"".concat(e[1],"%"),left:"".concat(e[2],"%")}),oi=(e,t,n)=>{let r="html.no-touch [data-id=".concat(e,"]:hover &"),i=n||{};return i[r]=t,i},oo=async(e,t,n)=>{var r,i,o;let a={data:null,statusCode:null,error:null,errorMessage:null};try{let s=new r5(iU),{data:l}=await s.getSearchResultsPaged(e,t,n);if(!l)return;if((null===(r=l.content)||void 0===r?void 0:r.length)===0)return a.data=l,a.statusCode=200,a.error=!0,a.errorMessage=null,a;return a.data=l,a.statusCode=200,a.error=!1,a.errorMessage=null,a}catch(u){return a.data=null===(i=u.response)||void 0===i?void 0:i.data,a.statusCode=null===(o=u.response)||void 0===o?void 0:o.status,a.error=!0,a.errorMessage=u.message,a}},oa=async(e,t,n)=>{let r=null;try{let i=new rZ(iU),{data:o}=await i.postFormResults(e,t,n);if(!o)return;return r=o}catch(a){return null}},os=async e=>{let t=null;try{var n;let r=new rZ(iU),i=await rP().get("/_next-api/userIp"),{data:o}=await r.getForm(e,null==i?void 0:null===(n=i.data)||void 0===n?void 0:n.ip,{withCredentials:!0});if(!o)return;return t=o}catch(a){return null}},ol=async e=>{try{let{data:t}=await rP().get(e,{withCredentials:!0});if(!t)return;let n={formEntries:[]};return n.legalNoticeDocument={id:t.legal},n.formHintDocument={id:t.privacy},t.fields.map((e,t)=>{n.formEntries.push({fieldName:e.name,fieldType:e.type,fieldLabel:e.label,required:e.required,defaultValue:e.value,placeHolder:e.label})}),n}catch(r){return null}},ou=async(e,t)=>{try{let{data:n,status:r}=await rP().post(e,t,{headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0});return{data:n,status:r}}catch(i){return null}},oc=async e=>{let t=null;try{let n=new ie(iU),{data:r}=await n.getStory(e);if(!r)return;return t=r}catch(i){return console.error("getStoryApiPayload load error",e),null}},od=async e=>{let t=null;try{let n=new is(iU),{data:r}=await n.getAtInternetTracking(e);if(!r)return;return t=r}catch(i){return console.error("getTrackingPayload load error",e),null}},oh=async(e,t)=>{let n=null;try{let r=new is(iU),{data:i}=await r.getAtInternetTrackingForError(e,t);if(!i)return;return n=i}catch(o){return console.error("getTrackingPayloadForError load error",t),null}},of=()=>({replace:e=>{var t,n,r,o;let a=(null==e?void 0:e.children)&&(null===(t=null==e?void 0:e.children[0])||void 0===t?void 0:null===(n=t.parent)||void 0===n?void 0:null===(r=n.parent)||void 0===r?void 0:r.name)==="ol";if("li"===e.name){let s=[];return null==e||e.children.forEach(e=>{"text"===e.type&&s.push(e.data),"tag"===e.type&&"strong"===e.name&&s.push((0,i.jsx)("strong",{children:e.children[0].data})),"tag"===e.type&&"em"===e.name&&s.push((0,i.jsx)("em",{children:e.children[0].data}))}),(0,i.jsx)(iT,{as:"li",fontSize:"1rem",lineHeight:"1.38",marginBottom:"1rem",marginLeft:a&&".5rem",paddingLeft:a?".125rem":"1.5rem",mStyle:{marginLeft:a&&"1rem",paddingLeft:a?"0.5rem":"1.875rem"},lStyle:{marginLeft:a&&"1rem",paddingLeft:a?"0.625rem":"2rem",fontSize:"1.125rem",lineHeight:"1.44"},isOrdered:a,children:s})}if("a"===e.name){let l=null!=e&&!!e.attribs["data-ctrl-link"]&&JSON.parse(null===(o=null==e?void 0:e.attribs["data-ctrl-link"])||void 0===o?void 0:o.replace(/'/g,'"'));return(0,i.jsx)(ik,{href:e.attribs.href,title:e.attribs.title,isExternal:(null==l?void 0:l.type)==="external",children:e.children[0].data})}if("em"===e.name)return(0,i.jsx)("em",{children:e.children[0].data})}}),op=e=>{var t,n,r;let i=(null==e?void 0:e.linkUrl)||(null==e?void 0:null===(t=e.targetDocument)||void 0===t?void 0:t.externalUrl)||iz(null==e?void 0:null===(n=e.targetDocument)||void 0===n?void 0:n.urlPath,null==e?void 0:null===(r=e.targetDocument)||void 0===r?void 0:r.id);return i},om=e=>(null==e?void 0:e.linkType.indexOf("external"))!==-1,og=e=>om(e)||(null==e?void 0:e.target)&&(null==e?void 0:e.target.toLowerCase().indexOf("blank"))!==-1?"_blank":"_self",ov=e=>e===rT.x.SUB_CHANNEL||e===rT.x.VIDEO_SUB_CHANNEL,oy=e=>e===rT.x.VIDEO||e===rT.x.RELATED_VIDEO||e===rT.x.EXTERNAL_VIDEO,ob=e=>"live"===e||"chat"===e},2564:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(2322),i=n(3279),o=n(1695),a=n(6776),s=n(2784),l=n(9453),u=n(5756);let c=(0,s.createContext)({themeState:!0});var d=n(5632),h=n.n(d);let f=e=>{let t=(0,s.useRef)(!0);(0,s.useEffect)(()=>{let n;if(!("scrollRestoration"in window.history))return;let r=window.navigator.userAgent.toLowerCase(),i=/safari/.test(r)&&/iphone|ipod|ipad/.test(r);window.history.scrollRestoration=i?"auto":"manual";let o=e=>{sessionStorage.setItem("scrollPos:".concat(e),JSON.stringify({x:window.scrollX,y:window.scrollY}))},a=e=>{let t=sessionStorage.getItem("scrollPos:".concat(e)),n=t?JSON.parse(t):void 0;n&&window.scrollTo(n.x,n.y)},s=t=>{o(e.asPath),delete t.returnValue},l=()=>{o(e.asPath)},u=e=>{t.current&&(n=setTimeout(()=>{t.current=!1,a(e)},1))};return window.addEventListener("beforeunload",s),h().events.on("routeChangeStart",l),h().events.on("routeChangeComplete",u),h().beforePopState(()=>(t.current=!0,!0)),t.current&&u(e.asPath),()=>{clearTimeout(n),window.removeEventListener("beforeunload",s),h().events.off("routeChangeStart",l),h().events.off("routeChangeComplete",u),h().beforePopState(()=>!0)}},[])};var p=n(5723),m=n(75),g=n(6606);class v{get hasBrowserBackButtonClicked(){return this.isBrowserBackButtonClicked}get lastScrollPosition(){return this.scrollY}get isBrandHeader(){var e,t;return(null===(e=this.docData)||void 0===e?void 0:null===(t=e.headerResponse)||void 0===t?void 0:t.type)==="brand"}constructor(){this.backButtonActive=!1,this.lastThemeChannel="",this.lastBrandChannel="",this.lastStructureBrand="",this.lastValidRoute="/",this.docData=null,this.burgerNaviBtnRef=null,this.referrer="",this.searchLetter="",this.paginationPage=1,this.isLoading=!1,this.isSearchSuggestionActive=!1,this.isChatbotOpen=!1,this.currentChatbotPosition={x:0,y:0},this.pageLoadActive=!1,this.shallowLoading=!1,this.isPreviewMode=!1,this.firstPaint=!1,this.modalContent=null,this.searchResponse=null,this.searchResults=null,this.cachedResults=new Map,this.paginatedBoxResponse=new Map,this.searchSuggestions=null,this.searchBroadcastResponse=null,this.searchFirstBroadcastResponse=null,this.programData=null,this.trackingResponse=null,this.tooltipActive=null,this.tick=0,this.origins={kkn:null},this.slideEvent=null,this.searchError=!1,this.videoPlayRef=null,this.userTypedInSearch=!1,this.currentSearchWord=null,this.scrollY=0,this.isBrowserBackButtonClicked=!1,this.resetSearch=()=>{this.setCurrentSearchWord(null),this.setSearchResults([])},this.setModalContent=e=>{this.modalContent=e,e&&this.setTracking("modal",e.id)},this.preparePlayerTag=()=>{this.videoPlayRef=(0,p.qS)("video",new Date().getTime())},this.resetPlayerTag=()=>{this.videoPlayRef=null},this.setPaginatedBoxResponse=async(e,t,n,r)=>{if(!e)return;let i=null;i="videos"===n?await (0,g.H7)(e,t):await (0,g.$x)(e,t,r);let o={...i,content:i.content.map(e=>({...e,pageIndex:t}))};this.paginatedBoxResponse.get(e)?this.appendPaginatedTeasers(e,o):this.paginatedBoxResponse.set(e,o)},this.appendPaginatedTeasers=(e,t)=>{t&&this.paginatedBoxResponse.set(e,{...t,content:[...this.paginatedBoxResponse.get(e).content,...t.content]})},this.search=async(e,t,n)=>{this.setShallowLoading(!0),this.setSearchError(!1),this.toggleSearchSuggestion(!1),this.setSearchResults([]),this.setLoading(!0),this.setPageLoadActive(!1);let{data:r,error:i}=await (0,g.RN)("".concat(e),"".concat(t));!0===i&&this.setSearchError(!0),this.setSearchResponse(r),this.cachedResults.get(t)?this.setSearchResults(this.cachedResults.get(t).results):this.setSearchResults(r.content),this.setLoading(!1),this.setShallowLoading(!1),this.toggleSearchSuggestion(!1)},this.setToolTipActive=e=>{this.tooltipActive=e},this.setTick=()=>{this.tick++},this.setProgramData=e=>{this.programData=e},this.setFirstBroadcastResponse=e=>{this.searchFirstBroadcastResponse=e},this.setSearchError=e=>{this.searchError=e},this.setShallowLoading=e=>{this.shallowLoading=e},this.setBackButton=e=>{this.backButtonActive=e},this.setTracking=async(e,t,n,r)=>{var i,a,s,l,u,c,d,h;if(!n&&!(null===(i=this.docData)||void 0===i?void 0:null===(a=i.trackingResponse)||void 0===a?void 0:a.atiTracking))return!1;let f={...null===(s=this.docData.trackingResponse)||void 0===s?void 0:s.atiTracking,cookieDomain:(null===(l=this.docData.trackingResponse)||void 0===l?void 0:l.atiTracking.cookieDomain)?null:null===(u=document.location)||void 0===u?void 0:u.hostname},p=JSON.parse(JSON.stringify(n||f));if((null==p?void 0:null===(c=p.customVars)||void 0===c?void 0:c.site)||(p.customVars.site={}),p.sendHitWhenOptOut=!1,p.customVars.site["2"]="[".concat(encodeURIComponent(this.referrer).replace(/-/g,"%2D").replace(/_/g,"%5F"),"]"),e){let m=e,g=e;-1!==m.indexOf("form")&&(m="form",g="".concat(m,".").concat(t,".").concat("form-success"===e?"Erfolg":"Fehler")),("modal"===m||"nachladen"===m)&&(g="".concat(m,".").concat(t)),"interactiveContent"===m&&(g=""),p.customVars.site["5"]="[".concat(m,"]"),g.length>0&&(p.customVars.site["6"]=(p.customVars.site["6"]||(null===(d=p.customVars)||void 0===d?void 0:null===(h=d.page)||void 0===h?void 0:h["4"])||"[unbekannt").replace("]",".tool.".concat(g,"]")))}this.firstPaint=!0,await (0,o.wN)(p,r)},this.setInteractionTracking=e=>{var t,n,r,i,a,s,l,u,c,d,h,f;if(!(null===(t=this.docData)||void 0===t?void 0:null===(n=t.trackingResponse)||void 0===n?void 0:n.atiTracking))return!1;e.level2=this.docData.trackingResponse.atiTracking.page.level2;let p=(null===(r=this.docData)||void 0===r?void 0:null===(i=r.trackingResponse)||void 0===i?void 0:null===(a=i.atiTracking)||void 0===a?void 0:null===(s=a.customVars)||void 0===s?void 0:null===(l=s.site)||void 0===l?void 0:l["6"])||(null===(u=this.docData)||void 0===u?void 0:null===(c=u.trackingResponse)||void 0===c?void 0:null===(d=c.atiTracking)||void 0===d?void 0:null===(h=d.customVars)||void 0===h?void 0:null===(f=h.page)||void 0===f?void 0:f["4"]);e.chapter3=p?p.replace("[","").replace("]",""):"unbekannt",(0,o.Tl)(e)},this.setSearchLetter=e=>{this.searchLetter=e},this.toggleSearchSuggestion=e=>{this.isSearchSuggestionActive=e},this.toggleChatbotOpenCloseState=e=>{this.isChatbotOpen=e},this.setCurrentChatbotPosition=e=>{this.currentChatbotPosition=e},this.setSearchBroadcastResponse=e=>{this.searchBroadcastResponse=e},this.setUserTypedInSearch=e=>{this.userTypedInSearch=e},this.setCurrentSearchWord=e=>{this.currentSearchWord=e},this.setSearchResults=(e,t)=>{this.searchResults=e},this.setCachedResults=(e,t,n)=>{this.cachedResults.set(e,{meta:n,results:t})},this.setPageLoadActive=e=>{this.pageLoadActive=e},this.appendSearchResults=(e,t,n)=>{e&&e.length>0&&e.map((e,t)=>{this.searchResults.push(e)}),this.setCachedResults(t,this.searchResults,n)},this.setSearchSuggestions=e=>{this.searchSuggestions=e},this.setSearchResponse=e=>{this.searchResponse=e},this.setPaginationPage=e=>{this.paginationPage=e},this.setLoading=e=>{this.isLoading=e},this.setDocData=e=>{this.docData=e},this.setScrollPositionY=e=>{this.scrollY=e},this.setIsBrowserBackButtonClicked=e=>{e?this.isBrowserBackButtonClicked=e:this.isBrowserBackButtonClicked=!this.isBrowserBackButtonClicked},(0,m.rC)(this,{modalContent:m.LO,setBackButton:m.LO,videoPlayRef:m.LO,setLoading:m.aD,searchLetter:m.LO,isLoading:m.LO,isSearchSuggestionActive:m.LO,pageLoadActive:m.LO,searchResponse:m.LO,searchResults:m.LO,searchBroadcastResponse:m.LO,searchFirstBroadcastResponse:m.LO,shallowLoading:m.LO,searchError:m.LO,currentSearchWord:m.LO,userTypedInSearch:m.LO,searchSuggestions:m.LO,paginationPage:m.LO,programData:m.LO,tick:m.LO,tooltipActive:m.LO,paginatedBoxResponse:m.LO,setCurrentSearchWord:m.aD,appendSearchResults:m.aD,setShallowLoading:m.aD,setSearchResponse:m.aD,setSearchError:m.aD,setSearchResults:m.aD,setUserTypedInSearch:m.aD,setToolTipActive:m.aD,setSearchSuggestions:m.aD,toggleSearchSuggestion:m.aD,toggleChatbotOpenCloseState:m.aD,setCurrentChatbotPosition:m.aD,setSearchBroadcastResponse:m.aD,setFirstBroadcastResponse:m.aD,setProgramData:m.aD,setTick:m.aD,setModalContent:m.aD,setPageLoadActive:m.aD,appendPaginatedTeasers:m.aD,resetSearch:m.aD,search:m.aD,setDocData:m.aD,setScrollPositionY:m.aD,setIsBrowserBackButtonClicked:m.aD,preparePlayerTag:m.aD,resetPlayerTag:m.aD})}}var y=n(6646),b=n(2228);function w(){let e=(0,b.Z)(["\n\n"]);return w=function(){return e},e}let x=(0,l.vJ)(w()),k=new v;(0,a.DT)(!1);let S=e=>{let{Component:t,pageProps:n,router:a}=e;f(a);let[d,h]=(0,s.useState)(!1),p=(0,s.useMemo)(()=>({themeState:d,setThemeState:h}),[d,h]);return(0,s.useEffect)(()=>{(0,i.sk)()||(document.documentElement.classList.add("js-active"),document.addEventListener("mousedown",function(e){-1===document.documentElement.className.indexOf("mouse-active")&&(document.documentElement.className+=" mouse-active")}),document.addEventListener("keydown",function(e){(9===e.keyCode||16===e.keyCode)&&(document.documentElement.className=document.documentElement.className.split("mouse-active").join(""),document.documentElement.querySelectorAll(".swiper-container").forEach(e=>{e.scrollLeft=0}))}),window.externalApi={tracking:o.ku},(0,i.b1)()||document.documentElement.classList.add("no-touch"))},[]),(0,r.jsxs)(l.f6,{theme:u.r9,children:[(0,r.jsx)(x,{}),(0,r.jsx)(c.Provider,{value:p,children:(0,r.jsx)(y.g,{store:k,children:(0,r.jsx)(t,{...n})})})]})};var _=S},6646:function(e,t,n){"use strict";n.d(t,{g:function(){return a},x:function(){return o}});var r=n(2322),i=n(2784);let o=(0,i.createContext)(void 0),a=e=>(0,r.jsx)(o.Provider,{value:e.store,children:e.children})},5756:function(e,t,n){"use strict";n.d(t,{r9:function(){return d},fK:function(){return c}});let r={fontSize:"1.625rem",fontWeight:"bold",lineHeight:1.15,tablet:{fontSize:"1.875rem",lineHeight:1.13},desktop:{fontSize:"2.625rem",lineHeight:1.1}},i={fontSize:"1.375rem",fontWeight:"bold",lineHeight:"1.75rem",letterSpacing:"0.01ch",tablet:{fontSize:"1.5rem",lineHeight:"1.8125rem"},desktop:{fontSize:"1.75rem",lineHeight:"2.125rem"}},o={fontSize:"1rem",fontWeight:"bold",lineHeight:"1.5rem",letterSpacing:"0.03ch",tablet:{fontSize:"1.25rem",lineHeight:"1.5625rem"},desktop:{fontSize:"1.375rem",lineHeight:"1.75rem"}},a={fontSize:"1rem",fontWeight:"bold",lineHeight:"1.375rem",letterSpacing:"0.04ch",desktop:{lineHeight:"1.625rem",letterSpacing:"0.04ch"}},s={TitleStage:{...o,tablet:i.tablet,desktop:i.desktop},SearchKey:{fontSize:"1rem",fontWeight:500,lineHeight:"normal",letterSpacing:"normal",tablet:{fontSize:"1.25rem"},desktop:{fontSize:"1.375rem"}},BrandingTitle:{fontSize:"1.625rem",fontWeight:"bold",lineHeight:1.15,letterSpacing:"normal",textAlign:"center",tablet:{fontSize:"1.875rem",lineHeight:1.13,textAlign:"left"},desktop:{fontSize:"2.625rem",lineHeight:1.1,textAlign:"left"}},Title1:r,TitleList:{fontSize:"1rem",fontWeight:"bold",lineHeight:1.31,tablet:{fontSize:"1.25rem",lineHeight:1.25},desktop:{fontSize:"1.75rem",lineHeight:1.29}},Title2:i,Title2_Games:{...a,tablet:i.tablet,desktop:o.desktop},Title3_Games:{...a,tablet:i.tablet,desktop:i.desktop},TitleFifty:{...i,tablet:o.tablet,desktop:i.desktop},Title3:o,Title4:{fontSize:"1rem",fontWeight:"bold",lineHeight:"1.375rem",letterSpacing:"0.04ch",desktop:{lineHeight:"1.625rem",letterSpacing:"0.04ch"}},Body:{fontSize:"1rem",lineHeight:1.31,desktop:{fontSize:"1.125rem",lineHeight:1.44,letterSpacing:"0.04ch"}},Topline:{fontSize:"0.75rem",fontWeight:500,letterSpacing:"normal",tablet:{fontSize:"0.6875rem",letterSpacing:"0.3px"},desktop:{fontSize:"0.875rem",letterSpacing:"normal"}},ToplineList:{fontSize:"0.75rem",fontWeight:500,desktop:{fontSize:"0.875rem"}},Caption:{fontSize:"0.75rem",fontWeight:"normal",lineHeight:1.17,letterSpacing:"0.06px",desktop:{fontSize:"0.875rem",lineHeight:1.17,letterSpacing:"0.08px"}},Label:{fontSize:"0.8125rem",fontWeight:500,lineHeight:1,letterSpacing:"0.075ch",desktop:{fontSize:"0.875rem"}},LabelSmall:{fontSize:"0.75rem",fontWeight:500,lineHeight:1,letterSpacing:"0",desktop:{fontSize:"0.8125rem"}}},l={default:{justifyContent:"flex-start",alignItems:"center",position:"relative",padding:"0.25rem 0.5rem 0.1875rem 0.5rem",borderRadius:"0.125rem",fontSize:"0.6875rem",fontWeight:500,lineHeight:.91,letterSpacing:"0.01ch",tablet:{padding:"0.375rem 0.5rem 0.313rem"},desktop:{fontSize:"0.75rem",lineHeight:.83,letterSpacing:"0.02ch",padding:"0.5rem 0.5rem 0.438rem"}},teaser:{position:"absolute",fontSize:"1rem",padding:"0px 0px 0px 11px",fontWeight:500,lineHeight:"0.83",letterSpacing:"0.02px"},mediaMarker:{position:"absolute",padding:"4px 3px",fontSize:"0.6rem",fontWeight:500,lineHeight:"0.83",letterSpacing:"0.02px"},play:{justifyContent:"center",clipPath:"circle",width:"35%"},tag:{borderRadius:"0.125rem",padding:"0.25rem",fontSize:".6875em",lineHeight:"1",letterSpacing:"0.02rem",fontVariant:"LabelSmall",display:"inline-flex"}},u={xs:0,s:480,m:768,l:1024,xl:1440},c={xs:{outerSpace:"13.333vw",gap:.75},m:{outerSpace:"14.58vw",gap:1},l:{outerSpace:"22vw",gap:2}};c.xs.outerSpace,c.m.outerSpace,c.l.outerSpace;let d={id:"DEFAULT_KIKA_THEME",typography:{fontFamily:"Mikado, sans-serif",variants:s},shadows:{level1:"2px 2px 4px 0 rgba(0, 0, 0, 0.5), 1px 1px 1px 0 rgba(0, 0, 0, 0.34)",level1Inset:"2px 2px 4px 0 rgba(0, 0, 0, 0.5), 1px 1px 1px 0 rgba(0, 0, 0, 0.34),inset 1px 1px 0px rgba(255,255,255,0.2)",level2:"5px 5px 10px 0 rgba(0, 0, 0, 0.3), 2px 2px 5px 0 rgba(0, 0, 0, 0.25), 1px 1px 2px 0 rgba(0, 0, 0, 0.12)",level3:"12px 12px 25px 0 rgba(0, 0, 0, 0.3), 3px 3px 6px 0 rgba(0, 0, 0, 0.2), 1px 1px 2px 0 rgba(0, 0, 0, 0.3)",level4:"25px 25px 50px 0 rgba(0, 0, 0, 0.3), 7px 7px 15px 0 rgba(0, 0, 0, 0.21), 2px 2px 4px 0 rgba(0, 0, 0, 0.15)",level5:"38px 38px 75px 0 rgba(0, 0, 0, 0.3), 16px 16px 32px 0 rgba(0, 0, 0, 0.2), 3px 3px 6px 0 rgba(0, 0, 0, 0.08)",level6:"40px 40px 100px 0 rgba(0, 0, 0, 0.35), 25px 25px 50px 0 rgba(0, 0, 0, 0.15), 5px 5px 10px 0 rgba(0, 0, 0, 0.1)",level4Filter:"drop-shadow(7px 7px 15px rgba(0, 0, 0, .5))",level3Filter:"drop-shadow(3px 3px 6px rgba(0,0,0,0.5))",level2Filter:"drop-shadow(2px 2px 5px rgba(0,0,0,0.5))"},palette:{primaryDarkBlue:"#14334d",primaryDarkBlueActiveColor:"#0a1926",primaryDarkBlueHoverBgColor:"#122433",primaryDarkBlueActiveBgColor:"#0e1b26",primaryYellow:"#febe00",primaryLightMint:"#2be8bc",primaryLightMintHover:"#21a690",primaryLighterMint:"rgba(43, 232, 188, 0.2)",primaryLightMintActive:"#19806f",primaryLightTurquoise:"#2be8bc",secondaryDarkMint:"#00ada4",secondaryDarkLila:"#8337c2",secondaryLightBlue:"#17f1ff",secondaryLightMint:"#2be8bc",secondaryLightYellow:"#ffea19",secondaryLightYellow_2:"#ffef94",functionOkay:"#bff800",functionAlert:"#ff8c42",functionError:"#e30613",secondaryRedLight:"#fd6570",white:"#ffffff",secondaryWhite:"rgba(255, 255, 255, 0.5)",whiteColorHover:"rgba(255,255,255,0.9)",liveColor:"#e53519",black:"#000000",secondaryGreenLight:"#bff800",secondaryRedDark:"#de1d8a",transparencyBlack05:"rgba(0,0,0,0.5)",transparencyBlack25:"rgba(0,0,0,0.25)",videoTeaserBackground:"#0E273D",transparent:"transparent",secondaryRedDarkWarm:"#d33117",secondaryRedDarkWarmHover:"#a62612",secondaryRedDarkWarmActive:"#8c200f"},breakpoints:u,label:{variants:l},viewports:{smartPhoneSmall:"(min-width: 0) and (max-width:".concat(u.s-1,"px)"),smartPhoneBig:"(min-width: ".concat(u.s,"px) and (max-width:").concat(u.m-1,"px)"),tablet:"(min-width: ".concat(u.m,"px) and (max-width:").concat(u.l-1,"px)"),tv:"(min-width: ".concat(u.xl,"px)"),smartPhone:"(min-width: 0) and (max-width:".concat(u.m-1,"px)"),smartPhoneToTablet:"(max-width:".concat(u.l-1,"px)"),desktop:"(min-width: ".concat(u.l,"px)")},player:{mainColor:"#fff",playerBgColor:"#0062ae",hoverColor:"#0062ae",bgColor:"rgba(0,0,0,.5)"},global:{iconFont:"kikons",client:"kika",icons:{close:"&#xe031;",play:"&#xe009;",playBig:"&#xf01d;",pause:"&#xe04a;",channel:"&#xe008;",arrowDown:"&#xe014;",arrowUp:"&#xe017;",arrowRight:"&#8594;",arrowLeft:"&#8592;",chevronLeft:"&#xe015;",chevronRight:"&#xe016;",playlist:"&#xe033;",info:"&#xe025;",live:"&#xe02e;",games:"&#xe01a;",burger:"&#8801;",diy:"&#xe00d",search:"&#xe004",home:"&#xe033"}}}},4926:function(e,t,n){"use strict";var r;n.d(t,{x:function(){return r}}),function(e){e.THEME="theme",e.CHANNEL="channel",e.DOWNLOAD="download",e.FORM="form",e.INFO_TEASER="infoTeaser",e.LINK="link",e.MULTIMEDIA_GALLERY="multimediaGallery",e.CONTENT_KIT="contentKit",e.VIDEO_SUB_CHANNEL="videoSubchannel",e.SUB_CHANNEL="subchannel",e.BROADCAST="broadcast",e.BROADCAST_SERIES="broadcastSeries",e.INTERACTIVE_CONTENT="interactiveContent",e.VIDEO="video",e.LIVESTREAM="livestream",e.EXTERNAL_VIDEO="externalVideo",e.RELATED_VIDEO="relatedVideo",e.BRAND="brand",e.EXTERNAL_APPLICATION="externalApplication",e.STORY="story",e.HTML="html"}(r||(r={}))},2219:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1088:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(3903).Z,i=n(5154).Z,o=r(n(2784)),a=n(4e3),s=n(4588),l=n(7003),u=n(7858),c=n(7826),d=n(8599),h=n(2219),f=n(2484);let p=new Set;function m(e,t,n,r){if(a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let i=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+i;if(p.has(o))return;p.add(o)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function g(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function v(e,t,n,r,i,s,l,u,c,d){let{nodeName:h}=e.currentTarget,f="A"===h.toUpperCase();if(f&&(g(e)||!a.isLocalURL(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:s,locale:u,scroll:l}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};c?o.default.startTransition(p):p()}function y(e){return"string"==typeof e?e:s.formatUrl(e)}let b=o.default.forwardRef(function(e,t){let n,r;let{href:s,as:p,children:g,prefetch:b,passHref:w,replace:x,shallow:k,scroll:S,locale:_,onClick:O,onMouseEnter:E,onTouchStart:C,legacyBehavior:T=!1}=e,A=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,T&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let N=!1!==b,P=o.default.useContext(u.RouterContext),D=o.default.useContext(c.AppRouterContext),I=null!=P?P:D,R=!P,{href:j,as:M}=o.default.useMemo(()=>{if(!P){let e=y(s);return{href:e,as:p?y(p):e}}let[t,n]=a.resolveHref(P,s,!0);return{href:t,as:p?a.resolveHref(P,p):n||t}},[P,s,p]),L=o.default.useRef(j),V=o.default.useRef(M);T&&(r=o.default.Children.only(n));let B=T?r&&"object"==typeof r&&r.ref:t,[U,q,F]=d.useIntersection({rootMargin:"200px"}),Z=o.default.useCallback(e=>{(V.current!==M||L.current!==j)&&(F(),V.current=M,L.current=j),U(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[M,B,j,F,U]);o.default.useEffect(()=>{I&&q&&N&&m(I,j,M,{locale:_})},[M,j,q,_,N,null==P?void 0:P.locale,I]);let z={ref:Z,onClick(e){T||"function"!=typeof O||O(e),T&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&v(e,I,j,M,x,k,S,_,R,N)},onMouseEnter(e){T||"function"!=typeof E||E(e),T&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(N||!R)&&m(I,j,M,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){T||"function"!=typeof C||C(e),T&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(N||!R)&&m(I,j,M,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!T||w||"a"===r.type&&!("href"in r.props)){let H=void 0!==_?_:null==P?void 0:P.locale,$=(null==P?void 0:P.isLocaleDomain)&&h.getDomainLocale(M,H,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);z.href=$||f.addBasePath(l.addLocale(M,H,null==P?void 0:P.defaultLocale))}return T?o.default.cloneElement(r,z):o.default.createElement("a",Object.assign({},A,z),n)});var w=b;t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8599:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=c;var r=n(2784),i=n(1424);let o="function"==typeof IntersectionObserver,a=new Map,s=[];function l(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=s.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let i=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:i},s.push(n),a.set(n,t),t}function u(e,t,n){let{id:r,observer:i,elements:o}=l(n);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),a.delete(r);let t=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&s.splice(t,1)}}}function c(e){let{rootRef:t,rootMargin:n,disabled:a}=e,s=a||!o,[l,c]=r.useState(!1),[d,h]=r.useState(null);r.useEffect(()=>{if(o){if(!s&&!l&&d&&d.tagName){let e=u(d,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!l){let r=i.requestIdleCallback(()=>c(!0));return()=>i.cancelIdleCallback(r)}},[d,s,n,t,l]);let f=r.useCallback(()=>{c(!1)},[]);return[h,l,f]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2604:function(e,t,n){"use strict";n.d(t,{kC:function(){return r.kC},le:function(){return i.l},xu:function(){return r.xu}});var r=n(9835);n(195);var i=n(6785)},195:function(e,t,n){"use strict";n.d(t,{Y:function(){return T},z:function(){return O}});var r=n(2322),i=n(2784),o=n(5887),a=n(8111),s=n(2228),l=n(9453),u=n(7031),c=n(3279);function d(){let e=(0,s.Z)(["\n			opacity: 0;\n			pointer-events: none;\n		"]);return d=function(){return e},e}function h(){let e=(0,s.Z)(["\n		&:hover {\n			background-color: ",";\n			color: ",";\n		}\n	"]);return h=function(){return e},e}function f(){let e=(0,s.Z)(["\n	width: ",";\n	height: ",";\n\n	top: ",";\n	left: ",";\n	right: ",";\n	bottom: ",";\n	box-shadow: ",";\n	border-radius: ",";\n\n	white-space: ",";\n	overflow: hidden;\n	max-width: ",";\n	min-width: ",";\n	flex-direction: ",";\n	font-family: ",";\n	text-overflow: ",";\n	display: ",";\n	justify-content: center;\n	align-items: center;\n	color: ",";\n	cursor: pointer;\n	padding: ",";\n	background-color: ",";\n	border: ",";\n	font-weight: ",";\n	position: ",";\n	margin: ",";\n	font-size: ",";\n\n	","\n\n	&:focus {\n		outline-color: ",";\n		outline-offset: 1px;\n		color: ",";\n	}\n\n	","\n"]);return f=function(){return e},e}function p(){let e=(0,s.Z)(["\n	transition: color 0.3s ease-out;\n	float: none;\n	padding: 0.5rem;\n	border-radius: 1px;\n	background: ",";\n	color: ",";\n	font-weight: bold;\n	overflow: hidden;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	margin: 0.25rem;\n	width: 7.75rem;\n"]);return p=function(){return e},e}function m(){let e=(0,s.Z)(["\n	border: 0.0625rem solid;\n	border-radius: 0.125rem;\n	background: none;\n	padding: 0.25rem 1rem;\n	color: ",";\n	font-weight: bold;\n	overflow: hidden;\n	display: flex;\n	align-items: center;\n	transition: all 0.3s ease-out;\n	justify-content: ",";\n	width: ",";\n	height: ",";\n	background-color: ",";\n"]);return m=function(){return e},e}function g(){let e=(0,s.Z)(["\n	width: ",";\n	min-width: ",";\n\n	white-space: nowrap;\n	overflow: hidden;\n	display: ",";\n	justify-content: center;\n	align-items: center;\n	color: ",";\n	margin-left: 0;\n	cursor: pointer;\n	padding: ",";\n	background-color: ",";\n	border-radius: 4px;\n	font-weight: bold;\n	font-size: ",";\n	letter-spacing: 0.4px;\n	text-transform: uppercase;\n"]);return g=function(){return e},e}function v(){let e=(0,s.Z)(["\n			transform: ",";\n		"]);return v=function(){return e},e}function y(){let e=(0,s.Z)(["\n	background: none;\n	border: 0;\n	background-color: ",";\n	border-radius: ",";\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	align-content: center;\n	text-align: center;\n	margin: ",";\n	opacity: ",";\n	width: ",";\n	height: ",";\n	font-size: ",";\n	",";\n\n	top: 50%;\n	cursor: pointer;\n"]);return y=function(){return e},e}let b=l.ZP.button.withConfig({componentId:"sc-830b95f5-0"})(f(),e=>e.width?e.width:null,e=>e.height?e.height:null,e=>e.top?e.top:null,e=>e.top?e.left:null,e=>e.right?e.right:null,e=>e.bottom?e.bottom:null,e=>e.boxShadow?e.boxShadow:null,e=>e.borderRadius?e.borderRadius:"4px",e=>e.whiteSpace?e.whiteSpace:"nowrap",e=>{let{maxWidth:t}=e;return t||null},e=>{let{minWidth:t}=e;return t||null},e=>{let{flexDirection:t}=e;return t||null},e=>{let{theme:t}=e;return t.textFont?t.textFont:null},e=>e.textOverflow?e.textOverflow:null,e=>e.display?e.display:"flex",e=>{let{color:t}=e;return t||"#313131"},e=>e.padding?e.padding:"0.5rem 1rem",e=>e.bgColor?e.bgColor:"#ebebeb",e=>e.border?e.border:"1px solid #dcdcdc",e=>e.fontWeight?e.fontWeight:"bold",e=>e.position?e.position:"relative",e=>e.margin?e.margin:"1rem 0",e=>{let{fontSize:t}=e;return t||"1rem"},e=>e.hidden&&(0,l.iv)(d()),e=>e.bgColor?e.bgColor:u.wL.blue,e=>e.activeColor?e.activeColor:null,!(0,c.b1)()&&(0,l.iv)(h(),e=>{let{activeBgColor:t}=e;return t||null},e=>{let{activeColor:t}=e;return t||null})),w=(0,l.ZP)(b).withConfig({componentId:"sc-830b95f5-1"})(p(),e=>e.bgColor?e.bgColor:"transparent",e=>e.color?e.color:u.wL.blue),x=(0,l.ZP)(b).withConfig({componentId:"sc-830b95f5-2"})(m(),e=>e.color?e.color:"#fff",e=>e.justifyContent?e.justifyContent:"space-between",e=>e.width?e.width:"auto",e=>e.height?e.height:"auto",e=>e.isLoading?e.activeBgColor:"transparent"),k=(0,l.ZP)(b).withConfig({componentId:"sc-830b95f5-3"})(g(),e=>{let{width:t}=e;return t||"auto"},e=>{let{minWidth:t}=e;return t||"auto"},e=>e.display?e.display:"flex",e=>e.color?e.color:"#313131",e=>{let{padding:t}=e;return t||"0.5rem"},e=>{let{bgColor:t}=e;return t||"#ebebeb"},e=>{let{fontSize:t}=e;return t||"0.75rem"}),S=l.ZP.button.withConfig({componentId:"sc-830b95f5-4"})(y(),e=>{let{bgColor:t}=e;return t||null},e=>{let{borderRadius:t}=e;return t||"50%"},e=>{let{margin:t}=e;return t||null},e=>{let{opacity:t}=e;return t||null},e=>{let{width:t}=e;return t||"1rem"},e=>{let{height:t}=e;return t||"1rem"},e=>{let{fontSize:t}=e;return t||"1rem"},e=>{let{transform:t}=e;return t&&(0,l.iv)(v(),t)}),_=e=>{let t=()=>e.isLoading?(0,r.jsx)(a.V5,{width:"2rem",height:"2rem",bgColor:"light"===e.variant?"#fff":null,state:"isLoading"}):e.children;return"submit"===e.variant?(0,r.jsx)(w,{...e,children:t()}):"light"===e.variant?(0,r.jsx)(x,{...e,width:e.isLoading?"64px":e.width,children:t()}):"icon"===e.variant?(0,r.jsx)(S,{...e,tabIndex:0,children:(0,r.jsx)(o.J,{code:e.icon,color:e.color})}):"standard"===e.variant||"standardWithIcon"===e.variant?(0,r.jsx)(b,{...e,width:e.isLoading?"64px":e.width,children:t()}):"playerStandard"===e.variant?(0,r.jsx)(k,{...e,width:e.isLoading?"64px":e.width,children:t()}):(0,r.jsxs)(b,{...e,onClick:()=>{e.onClick(e)},children:[e.icon?(0,r.jsx)(o.J,{code:e.icon}):null,t()]})};var O=_,E=n(9835);let C=(e,t)=>(0,r.jsx)(E.xu,{ref:t,cursor:"pointer",as:e.isLinkButton?"a":"button",border:0,display:"inline-flex",alignItems:"center",justifyContent:"center",...e,children:e.children});var T=i.forwardRef(C)},9580:function(e,t,n){"use strict";n.d(t,{x:function(){return A}});var r=n(2228),i=n(9453),o=n(3279);function a(){let e=(0,r.Z)(["\n	0% {\n		background-color: hsl(200, 20%, 70%);\n	}\n	100% {\n		background-color: hsl(200, 20%, 95%);\n	}\n"]);return a=function(){return e},e}function s(){let e=(0,r.Z)(["\n			&:before {\n				content: '';\n				pointer-events: none;\n\n				","\n			}\n		"]);return s=function(){return e},e}function l(){let e=(0,r.Z)(["\n			&:after {\n				content: '';\n				pointer-events: none;\n\n				","\n			}\n		"]);return l=function(){return e},e}function u(){let e=(0,r.Z)(["\n			","\n		"]);return u=function(){return e},e}function c(){let e=(0,r.Z)(["\n			@media (min-width: 0) {\n				","\n			}\n		"]);return c=function(){return e},e}function d(){let e=(0,r.Z)(["\n			@media (min-width: ",") {\n				","\n			}\n		"]);return d=function(){return e},e}function h(){let e=(0,r.Z)(["\n			@media (min-width: ",") {\n				","\n			}\n		"]);return h=function(){return e},e}function f(){let e=(0,r.Z)(["\n			@media (min-width: ",") {\n				","\n			}\n		"]);return f=function(){return e},e}function p(){let e=(0,r.Z)(["\n			@media (min-width: ",") {\n				","\n			}\n		"]);return p=function(){return e},e}function m(){let e=(0,r.Z)(["\n			@media "," {\n				","\n			}\n		"]);return m=function(){return e},e}function g(){let e=(0,r.Z)(["\n			@media "," {\n				","\n			}\n		"]);return g=function(){return e},e}function v(){let e=(0,r.Z)(["\n			@media "," {\n				","\n			}\n		"]);return v=function(){return e},e}function y(){let e=(0,r.Z)(["\n			@media "," {\n				","\n			}\n		"]);return y=function(){return e},e}function b(){let e=(0,r.Z)(["\n			@media "," {\n				","\n			}\n		"]);return b=function(){return e},e}function w(){let e=(0,r.Z)(["\n			@media "," {\n				","\n			}\n		"]);return w=function(){return e},e}function x(){let e=(0,r.Z)(["\n			@media "," {\n				","\n			}\n		"]);return x=function(){return e},e}function k(){let e=(0,r.Z)(["\n			&:hover {\n				","\n			}\n		"]);return k=function(){return e},e}function S(){let e=(0,r.Z)(["\n			&:focus {\n				","\n			}\n		"]);return S=function(){return e},e}function _(){let e=(0,r.Z)(["\n			&:focus:not(:active) {\n				","\n			}\n		"]);return _=function(){return e},e}function O(){let e=(0,r.Z)(["\n	",";\n	display: ",";\n	position: ",";\n	top: ",";\n	bottom: ",";\n	left: ",";\n	right: ",";\n	margin: ",";\n	margin-top: ",";\n	margin-bottom: ",";\n	margin-left: ",";\n	margin-right: ",";\n	padding: ",";\n	padding-top: ",";\n	padding-bottom: ",";\n	padding-left: ",";\n	padding-right: ",";\n	color: ",";\n	opacity: ",";\n	order: ",";\n\n	background-color: ",";\n	background: ",";\n	background-size: ",";\n	background-image: ",";\n\n	width: ",";\n	height: ",";\n	max-width: ",";\n	min-width: ",";\n	max-height: ",";\n	min-height: ",";\n	z-index: ",";\n	outline: ",";\n	outline-offset: ",";\n\n	box-shadow: ",";\n	text-shadow: ",";\n	border: ",";\n	border-top: ",";\n	border-radius: ",";\n	cursor: ",";\n	pointer-events: ",";\n	justify-content: ",";\n	align-items: ",";\n	align-self: ",";\n	flex-basis: ",";\n	flex: ",";\n	flex-wrap: ",";\n	flex-grow: ",";\n	flex-direction: ",";\n\n	flex-shrink: ",";\n	grid-area: ",";\n	grid-column: ",";\n	grid-row: ",";\n	grid-row-start: ",";\n	grid-row-end: ",";\n	grid-template-columns: ",";\n	grid-template-rows: ",";\n	grid-auto-rows: ",";\n	grid-auto-columns: ",";\n	grid-auto-flow: ",";\n\n	grid-template-areas: ",";\n	align-content: ",";\n\n	text-align: ",";\n\n	white-space: ",";\n	gap: ",";\n	column-gap: ",";\n	row-gap: ",";\n\n	transform: ",";\n	transform-origin: ",";\n\n	transition: ",";\n	animation: ",";\n\n	font-family: ",";\n	font-weight: ",";\n	font-size: ",";\n	line-height: ",";\n	text-align: ",";\n	text-transform: ",";\n\n	word-break: ",";\n	word-wrap: ",";\n	hyphens: ",";\n\n	letter-spacing: ",";\n	overflow: ",";\n	overflow-x: ",";\n	overflow-y: ",";\n	object-fit: ",";\n	object-position: ",";\n	filter: ",";\n	resize: ",";\n\n	&.skeleton {\n		opacity: 0.7;\n		animation: "," 1s linear infinite alternate;\n	}\n\n	",";\n	",";\n\n	",";\n	",";\n	",";\n	",";\n	",";\n	",";\n\n	",";\n	",";\n	",";\n	",";\n	",";\n	",";\n	",";\n\n	/** causes server / client mismatch in styled-comp - find better way */\n\n	",";\n	",";\n	",";\n"]);return O=function(){return e},e}let E=(0,i.F4)(a()),C=()=>["background: rgba(0, 255, 255, 0.1) !important;","border: 1px dashed rgba(255, 0, 255, 1) !important;"],T=["backgroundColor","display","fontSize","order","width","height","color","fontWeight"],A=i.ZP.div.withConfig({shouldForwardProp:(e,t)=>!T.includes(e)&&t(e)}).withConfig({componentId:"sc-2ee8b634-0"})(O(),e=>{let{debug:t}=e;return t&&C()},e=>{let{display:t}=e;return t},e=>{let{position:t}=e;return t},e=>{let{top:t}=e;return t},e=>{let{bottom:t}=e;return t},e=>{let{left:t}=e;return t},e=>{let{right:t}=e;return t},e=>{let{margin:t}=e;return t},e=>{let{marginTop:t}=e;return t},e=>{let{marginBottom:t}=e;return t},e=>{let{marginLeft:t}=e;return t},e=>{let{marginRight:t}=e;return t},e=>{let{padding:t}=e;return t},e=>{let{paddingTop:t}=e;return t},e=>{let{paddingBottom:t}=e;return t},e=>{let{paddingLeft:t}=e;return t},e=>{let{paddingRight:t}=e;return t},e=>{let{color:t}=e;return t},e=>{let{opacity:t}=e;return t},e=>{let{order:t}=e;return t},e=>{let{backgroundColor:t}=e;return t},e=>{let{background:t}=e;return t},e=>{let{backgroundSize:t}=e;return t},e=>{let{backgroundImage:t}=e;return t},e=>{let{width:t}=e;return t},e=>{let{height:t}=e;return t},e=>{let{maxWidth:t}=e;return t},e=>{let{minWidth:t}=e;return t},e=>{let{maxHeight:t}=e;return t},e=>{let{minHeight:t}=e;return t},e=>{let{zIndex:t}=e;return t},e=>{let{outline:t}=e;return t},e=>{let{outlineOffset:t}=e;return t},e=>{let{boxShadow:t}=e;return t},e=>{let{textShadow:t}=e;return t},e=>{let{border:t}=e;return t},e=>{let{borderTop:t}=e;return t},e=>{let{borderRadius:t}=e;return t},e=>{let{cursor:t}=e;return t},e=>{let{pointerEvents:t}=e;return t},e=>{let{justifyContent:t}=e;return t},e=>{let{alignItems:t}=e;return t},e=>{let{alignSelf:t}=e;return t},e=>{let{flexBasis:t}=e;return t},e=>{let{flex:t}=e;return t},e=>{let{flexWrap:t}=e;return t},e=>{let{flexGrow:t}=e;return t},e=>{let{flexDirection:t}=e;return t},e=>{let{flexShrink:t}=e;return t},e=>{let{gridArea:t}=e;return t},e=>{let{gridColumn:t}=e;return t},e=>{let{gridRow:t}=e;return t},e=>{let{gridRowStart:t}=e;return t},e=>{let{gridRowEnd:t}=e;return t},e=>{let{gridTemplateColumns:t}=e;return t},e=>{let{gridTemplateRows:t}=e;return t},e=>{let{gridAutoRows:t}=e;return t},e=>{let{gridAutoColumns:t}=e;return t},e=>{let{gridAutoFlow:t}=e;return t},e=>{let{gridTemplateAreas:t}=e;return t},e=>{let{alignContent:t}=e;return t},e=>{let{textAlign:t}=e;return t},e=>{let{whiteSpace:t}=e;return t},e=>{let{gap:t}=e;return t},e=>{let{columnGap:t}=e;return t},e=>{let{rowGap:t}=e;return t},e=>{let{transform:t}=e;return t},e=>{let{transformOrigin:t}=e;return t},e=>{let{transition:t}=e;return t},e=>{let{animation:t}=e;return t},e=>{let{fontFamily:t}=e;return t},e=>{let{fontWeight:t}=e;return t},e=>{let{fontSize:t}=e;return t},e=>{let{lineHeight:t}=e;return t},e=>{let{textAlign:t}=e;return t},e=>{let{textTransform:t}=e;return t},e=>{let{wordBreak:t}=e;return t},e=>{let{wordWrap:t}=e;return t},e=>{let{hyphens:t}=e;return t},e=>{let{letterSpacing:t}=e;return t},e=>{let{overflow:t}=e;return t},e=>{let{overflowX:t}=e;return t},e=>{let{overflowY:t}=e;return t},e=>{let{objectFit:t}=e;return t},e=>{let{objectPosition:t}=e;return t},e=>{let{filter:t}=e;return t},e=>{let{resize:t}=e;return t},E,e=>{let{beforeStyle:t}=e;return t&&(0,i.iv)(s(),t)},e=>{let{afterStyle:t}=e;return t&&(0,i.iv)(l(),t)},e=>{let{customCss:t}=e;return t&&(0,i.iv)(u(),t)},e=>{let{xsStyle:t}=e;return t&&(0,i.iv)(c(),t)},e=>{let{sStyle:t,theme:n}=e;return t&&(0,i.iv)(d(),"".concat(null==n?void 0:n.breakpoints.s,"px")||0,t)},e=>{let{mStyle:t,theme:n}=e;return t&&(0,i.iv)(h(),"".concat(null==n?void 0:n.breakpoints.m,"px")||0,t)},e=>{let{lStyle:t,theme:n}=e;return t&&(0,i.iv)(f(),"".concat(null==n?void 0:n.breakpoints.l,"px")||0,t)},e=>{let{xlStyle:t,theme:n}=e;return t&&(0,i.iv)(p(),"".concat(null==n?void 0:n.breakpoints.xl,"px")||0,t)},e=>{var t;let{desktop:n,theme:r}=e;return n&&(0,i.iv)(m(),null==r?void 0:null===(t=r.viewports)||void 0===t?void 0:t.desktop,n)},e=>{var t;let{tv:n,theme:r}=e;return n&&(0,i.iv)(g(),null==r?void 0:null===(t=r.viewports)||void 0===t?void 0:t.tv,n)},e=>{var t;let{tablet:n,theme:r}=e;return n&&(0,i.iv)(v(),null==r?void 0:null===(t=r.viewports)||void 0===t?void 0:t.tablet,n)},e=>{var t;let{smartPhone:n,theme:r}=e;return n&&(0,i.iv)(y(),null==r?void 0:null===(t=r.viewports)||void 0===t?void 0:t.smartPhone,n)},e=>{var t;let{smartPhoneBig:n,theme:r}=e;return n&&(0,i.iv)(b(),null==r?void 0:null===(t=r.viewports)||void 0===t?void 0:t.smartPhoneBig,n)},e=>{var t;let{smartPhoneSmall:n,theme:r}=e;return n&&(0,i.iv)(w(),null==r?void 0:null===(t=r.viewports)||void 0===t?void 0:t.smartPhoneSmall,n)},e=>{var t;let{smartPhoneToTablet:n,theme:r}=e;return n&&(0,i.iv)(x(),null==r?void 0:null===(t=r.viewports)||void 0===t?void 0:t.smartPhoneToTablet,n)},e=>{let{hover:t}=e;return t&&!(0,o.b1)()&&(0,i.iv)(k(),t)},e=>{let{focus:t}=e;return t&&(0,i.iv)(S(),t)},e=>{let{activeStyle:t}=e;return t&&(0,i.iv)(_(),t)})},9835:function(e,t,n){"use strict";n.d(t,{xu:function(){return s.x},kC:function(){return h}});var r=n(2322),i=n(2784),o=n(2228),a=n(9453),s=n(9580);function l(){let e=(0,o.Z)(['\n			// This technique is called "The holy Albatross"\n			// This allows us to reduce the amount of media-queries\n			// Plus, we are looking for the container-width instead if a viewport width\n			> * {\n				flex-basis: ',";\n				flex-grow: 1;\n			}\n		"]);return l=function(){return e},e}function u(){let e=(0,o.Z)(["\n	display: ",";\n	flex-direction: ",";\n	justify-content: ",";\n	align-items: ",";\n	justify-self: ",";\n	align-self: ",";\n	flex-wrap: ",";\n	flex-basis: ",";\n	flex: ",";\n\n	@supports not (gap: 1em) {\n		> * + * {\n			margin-left: ",";\n		}\n	}\n\n	","\n"]);return u=function(){return e},e}let c=(0,a.ZP)(s.x).withConfig({componentId:"sc-d9da03c9-0"})(u(),e=>{let{display:t}=e;return t||"flex"},e=>{let{flexDirection:t}=e;return t},e=>{let{justifyContent:t}=e;return t},e=>{let{alignItems:t}=e;return t},e=>{let{justifySelf:t}=e;return t},e=>{let{alignSelf:t}=e;return t},e=>{let{flexWrap:t}=e;return t},e=>{let{flexBasis:t}=e;return t},e=>{let{flex:t}=e;return t},e=>{let{gap:t}=e;return t||null},e=>{let{setContainerQueryAt:t}=e;return t&&(0,a.iv)(l(),"calc(calc(".concat(t," - 100%) * 9999)")||0)}),d=(e,t)=>(0,r.jsx)(c,{"data-testid":e.testId,ref:t,...e,children:e.children});var h=i.forwardRef(d);function f(){let e=(0,o.Z)(["\n						@media (min-width: ",") {\n							grid-template-columns: ",";\n							grid-template-rows: ",";\n						}\n					"]);return f=function(){return e},e}function p(){let e=(0,o.Z)(["\n						@media (min-width: ",") {\n							grid-area: ",";\n						}\n					"]);return p=function(){return e},e}function m(){let e=(0,o.Z)(["\n				grid-template-columns: ",";\n				grid-template-rows: ",";\n			"]);return m=function(){return e},e}function g(){let e=(0,o.Z)(["\n				grid-area: ",";\n			"]);return g=function(){return e},e}function v(){let e=(0,o.Z)(["\n	height: ",";\n	width: 100%;\n	display: grid;\n	gap: ",";\n	",";\n\n	","\n	border: ",";\n	border-color: ",";\n	border-radius: ",";\n	border-style: 'solid';\n	width: ",";\n	max-width: ",";\n	min-width: ",";\n	overflow: ",";\n	margin: ",";\n	padding: ",";\n"]);return v=function(){return e},e}function y(){let e=(0,o.Z)(["\n	",";\n\n	","\n"]);return y=function(){return e},e}function b(){let e=(0,o.Z)(["\n	display: ",";\n	grid-template-columns: ",";\n	grid-template-rows: ",";\n	grid-auto-rows: ",";\n	grid-template-areas: ",";\n	align-content: ",";\n"]);return b=function(){return e},e}let w=()=>["border: 2px dashed rgba(255, 0, 255, 1) !important;"],x=(e,t)=>{let n=e.split("/"),r=t.split("/");return"".concat(r[0]," / ").concat(n[0]," / ").concat(r[1]," / ").concat(n[1],"    }")};function k(e){if(0===e.length)return[];let t=e.filter(e=>null!=e);return t}function S(e,t){if(!Array.isArray(e))return t in e;{let n=k(e);return t in n[0]}}function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["extraSmall","small","medium","large","extraLarge"],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return Array.isArray(n)?S(n,"numberOfColumns")?n.map((n,r)=>{var i,o;return n&&(null==e?void 0:e.breakPoints)&&(0,a.iv)(f(),null===(i=null==e?void 0:e.breakPoints[t[r]])||void 0===i?void 0:null===(o=i.styles)||void 0===o?void 0:o.width,()=>"repeat(".concat(null==n?void 0:n.numberOfColumns,", 1fr)"),()=>"repeat(".concat(null==n?void 0:n.numberOfRows,", 1fr)"))}):n.map((n,r)=>{var i,o;return n&&(null==e?void 0:e.breakPoints)&&(0,a.iv)(p(),null===(i=null==e?void 0:e.breakPoints[t[r]])||void 0===i?void 0:null===(o=i.styles)||void 0===o?void 0:o.width,()=>x(n.spanOverColumns,n.spanOverRows))}):"number"==typeof n?(0,a.iv)(m(),()=>"repeat(".concat(n,", 1fr)"),()=>"repeat(".concat(r,", 1fr)")):"string"==typeof n?(0,a.iv)(g(),()=>x(n,r)):void 0}function O(){let e=(0,o.Z)(["\n	width: ",";\n	align-items: ",";\n	margin: ",";\n	justify-content: ",";\n	position: ",";\n	top: ",";\n	left: ",";\n\n	padding: ",";\n	background-color: ",";\n	height: ",";\n	display: flex;\n	flex-direction: column;\n	flex: 1 1 auto;\n\n	.fresnel-container {\n		width: 100%;\n	}\n"]);return O=function(){return e},e}function E(){let e=(0,o.Z)(["\n			> * {\n				flex-grow: ",";\n			}\n		"]);return E=function(){return e},e}function C(){let e=(0,o.Z)(["\n			&:after {\n				position: absolute;\n				bottom: 0;\n				pointer-events: none;\n				left: 0;\n				width: 100%;\n				height: 100%;\n				content: '';\n				background: ",";\n			}\n		"]);return C=function(){return e},e}function T(){let e=(0,o.Z)(["\n	display: flex;\n	position: relative;\n	padding: ",";\n\n	flex-direction: row;\n	align-items: ",";\n	justify-content: ",";\n\n	margin: ",";\n	background-color: ",";\n	flex-wrap: ",";\n	width: ",";\n	height: ",";\n	min-height: ",";\n\n	",";\n\n	",";\n"]);return T=function(){return e},e}a.ZP.div.withConfig({componentId:"sc-b9bec2f0-0"})(v(),e=>{let{height:t}=e;return t||null},e=>{let{gap:t}=e;return t||null},e=>{let{debug:t}=e;return t&&w()},e=>{let{numberOfRows:t,numberOfColumns:n,theme:r,extraSmall:i,small:o,medium:a}=e;return(t||n)&&r?_(r,void 0,n,t):i||o||a?_(r,void 0,[i,o,a]):void 0},e=>{let{border:t}=e;return t||null},e=>{let{borderColor:t}=e;return t||null},e=>{let{borderRadius:t}=e;return t||"10%"},e=>{let{width:t}=e;return t||"100%"},e=>{let{maxWidth:t}=e;return t||null},e=>{let{minWidth:t}=e;return t||null},e=>{let{overflow:t}=e;return t||null},e=>{let{margin:t}=e;return t||0},e=>{let{padding:t}=e;return t||0}),a.ZP.div.withConfig({componentId:"sc-b9bec2f0-1"})(y(),e=>{let{debug:t}=e;return t&&w()},e=>{let{spanOverColumns:t,spanOverRows:n,theme:r,extraSmall:i,small:o,medium:a}=e;return(t||n)&&r?_(r,void 0,t,n):r&&(i||o||a)?_(r,void 0,[i,o,a]):void 0}),(0,a.ZP)(s.x).withConfig({componentId:"sc-b9bec2f0-2"})(b(),e=>{let{display:t}=e;return t||"grid"},e=>{let{gridTemplateColumns:t}=e;return t},e=>{let{gridTemplateRows:t}=e;return t},e=>{let{gridAutoRows:t}=e;return t},e=>{let{gridTemplateAreas:t}=e;return t},e=>{let{alignContent:t}=e;return t}),a.ZP.div.withConfig({componentId:"sc-503fdec3-0"})(O(),e=>{let{width:t}=e;return t||"100%"},e=>{let{alignItems:t}=e;return t||""},e=>{let{margin:t}=e;return t||null},e=>{let{justifyContent:t}=e;return t||"flex-start"},e=>{let{position:t}=e;return t||"relative"},e=>{let{top:t}=e;return t||null},e=>{let{left:t}=e;return t||null},e=>{let{padding:t}=e;return t||"0"},e=>{let{bgColor:t}=e;return t||"transparent"},e=>{let{height:t}=e;return t||"100%"}),a.ZP.div.withConfig({componentId:"sc-9e7322c1-0"})(T(),e=>e.padding?e.padding:"0",e=>e.alignItems?e.alignItems:"flex-start",e=>e.justifyContent?e.justifyContent:"flex-start",e=>e.margin?e.margin:null,e=>e.bgColor?e.bgColor:null,e=>e.flexWrap?e.flexWrap:null,e=>e.width?e.width:"100%",e=>e.height?e.height:null,e=>e.minHeight?e.minHeight:null,e=>e.flexGrow&&(0,a.iv)(E(),e=>e.flexGrow?e.flexGrow:null),e=>e.shadowColor&&(0,a.iv)(C(),e=>e.shadowColor))},5887:function(e,t,n){"use strict";n.d(t,{J:function(){return c}});var r=n(2228),i=n(2322),o=n(2604),a=n(9453);function s(){let e=(0,r.Z)(["\n	display: flex;\n	height: ",";\n	width: ",";\n	font-weight: 200;\n	font-family: ",";\n	text-decoration: none !important;\n	align-items: center;\n	justify-content: center;\n	pointer-events: none;\n"]);return s=function(){return e},e}let l=(0,a.ZP)(o.xu).withConfig({componentId:"sc-6219040b-0"})(s(),e=>{let{height:t}=e;return t||"100%"},e=>{let{width:t}=e;return t||"auto"},e=>{var t,n;let{theme:r}=e;return(null==r?void 0:null===(t=r.global)||void 0===t?void 0:t.iconFont)?null==r?void 0:null===(n=r.global)||void 0===n?void 0:n.iconFont:"mdricons"}),u=e=>(0,i.jsx)(l,{...e,dangerouslySetInnerHTML:{__html:e.code}});var c=u},6785:function(e,t,n){"use strict";n.d(t,{l:function(){return M}});var r=n(2322),i=n(2784),o=n(2228),a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},s=function(e){return e.split(/ ?; ?/).reduce(function(e,t){var n=a(t.split(/ ?: ?/),2),r=n[0],i=n[1];return r&&i&&(e[r.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})]=Number.isNaN(Number(i))?i:Number(i)),e},{})};function l(e){void 0===e&&(e=6);for(var t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="",r=e;r>0;--r)n+=t[Math.round(Math.random()*(t.length-1))];return n}var u=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],c={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",typemustmatch:"typeMustMatch",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"},d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},h=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},f=function(e,t,n){if(n||2==arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};function p(e,t){var n={key:t};if(e instanceof Element){var r=e.getAttribute("class");r&&(n.className=r),f([],h(e.attributes),!1).forEach(function(e){switch(e.name){case"class":break;case"style":n[e.name]=s(e.value);break;case"allowfullscreen":case"allowpaymentrequest":case"async":case"autofocus":case"autoplay":case"checked":case"controls":case"default":case"defer":case"disabled":case"formnovalidate":case"hidden":case"ismap":case"itemscope":case"loop":case"multiple":case"muted":case"nomodule":case"novalidate":case"open":case"readonly":case"required":case"reversed":case"selected":case"typemustmatch":n[c[e.name]||e.name]=!0;break;default:n[c[e.name]||e.name]=e.value}})}return n}function m(e,t,n){var r=f([],h(e),!1).map(function(e,r){return v(e,d(d({},n),{index:r,level:t+1}))}).filter(Boolean);return r.length?r:null}function g(e){return/[a-z]+[A-Z]+[a-z]+/.test(e)?e:e.toLowerCase()}function v(e,t){if(void 0===t&&(t={}),!e||!(e instanceof Node))return null;var n,r=t.actions,o=void 0===r?[]:r,a=t.index,s=void 0===a?0:a,c=t.level,d=void 0===c?0:c,h=t.randomKey,f=e,v="".concat(d,"-").concat(s),y=[];if(h&&0===d&&(v="".concat(l(),"-").concat(v)),Array.isArray(o)&&o.forEach(function(t){t.condition(f,v,d)&&("function"!=typeof t.pre||(f=t.pre(f,v,d))instanceof Node||(f=e),"function"==typeof t.post&&y.push(t.post(f,v,d)))}),y.length)return y;switch(f.nodeType){case 1:return i.createElement(g(f.nodeName),p(f,v),m(f.childNodes,d,t));case 3:var b=(null===(n=f.nodeValue)||void 0===n?void 0:n.toString())||"";if(/^\s+$/.test(b)&&!/[\u00A0\u202F]/.test(b))return null;if(!f.parentNode)return b;var w=f.parentNode.nodeName.toLowerCase();if(u.includes(w))return/\S/.test(b)&&console.warn("A textNode is not allowed inside '".concat(w,"'. Your text \"").concat(b,'" will be ignored')),null;return b;default:return null}}function y(e,t){if(void 0===t&&(t={}),!e||"string"!=typeof e)return null;var n=t.nodeOnly,r=void 0!==n&&n,i=t.selector,o=void 0===i?"body > *":i,a=t.type,s=void 0===a?"text/html":a;try{var l=new DOMParser().parseFromString(e,s).querySelector(o);if(!(l instanceof Node))throw TypeError("Error parsing input");if(r)return l;return v(l,t)}catch(u){}return null}function b(e,t){return(void 0===t&&(t={}),"string"==typeof e)?y(e,t):e instanceof Node?v(e,t):null}var w=n(5978),x={FAILED:"failed",LOADED:"loaded",LOADING:"loading",PENDING:"pending",READY:"ready",UNSUPPORTED:"unsupported"};function k(){return w.canUseDOM}function S(){return _()&&"undefined"!=typeof window&&null!==window}function _(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",!!e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI}function O(e){for(var t="abcdefghijklmnopqrstuvwxyz",n="1234567890",r=""+t+t.toUpperCase()+n,i=function(e){return e[Math.floor(Math.random()*e.length)]},o="",a=0;a<e;a++)o+=i(r);return o}function E(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r={};for(var i in e)({}).hasOwnProperty.call(e,i)&&!t.includes(i)&&(r[i]=e[i]);return r}var C=function(){var e=function(t,n){return(e=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),T=function(){return(T=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},A=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},N=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},P=Object.create(null),D=function(e){function t(t){var n=e.call(this,t)||this;return n.isActive=!1,n.handleCacheQueue=function(e){if("string"==typeof e){n.handleLoad(e);return}n.handleError(e)},n.handleLoad=function(e){n.isActive&&n.setState({content:e,status:x.LOADED},n.getElement)},n.handleError=function(e){var t=n.props.onError,r="Browser does not support SVG"===e.message?x.UNSUPPORTED:x.FAILED;n.isActive&&n.setState({status:r},function(){"function"==typeof t&&t(e)})},n.request=function(){var e=n.props,t=e.cacheRequests,r=e.fetchOptions,i=e.src;try{return t&&(P[i]={content:"",status:x.LOADING,queue:[]}),fetch(i,r).then(function(e){var t=e.headers.get("content-type"),n=A((t||"").split(/ ?; ?/),1)[0];if(e.status>299)throw Error("Not found");if(!["image/svg+xml","text/plain"].some(function(e){return n.indexOf(e)>=0}))throw Error("Content type isn't valid: "+n);return e.text()}).then(function(e){var r=n.props.src;if(i===r&&(n.handleLoad(e),t)){var o=P[i];o&&(o.content=e,o.status=x.LOADED,o.queue=o.queue.filter(function(t){return t(e),!1}))}}).catch(function(e){if(n.handleError(e),t){var r=P[i];r&&(r.queue.forEach(function(t){t(e)}),delete P[i])}})}catch(o){return n.handleError(Error(o.message))}},n.state={content:"",element:null,hasCache:!!t.cacheRequests&&!!P[t.src],status:x.PENDING},n.hash=t.uniqueHash||O(8),n}return C(t,e),t.prototype.componentDidMount=function(){if(this.isActive=!0,k()){var e=this.state.status,t=this.props.src;try{if(e===x.PENDING){if(!S())throw Error("Browser does not support SVG");if(!t)throw Error("Missing src");this.load()}}catch(n){this.handleError(n)}}},t.prototype.componentDidUpdate=function(e,t){if(k()){var n=this.state,r=n.hasCache,i=n.status,o=this.props,a=o.onLoad,s=o.src;if(t.status!==x.READY&&i===x.READY&&a&&a(s,r),e.src!==s){if(!s){this.handleError(Error("Missing src"));return}this.load()}}},t.prototype.componentWillUnmount=function(){this.isActive=!1},t.prototype.processSVG=function(){var e=this.state.content,t=this.props.preProcessor;return t?t(e):e},t.prototype.updateSVGAttributes=function(e){var t=this,n=this.props,r=n.baseURL,i=void 0===r?"":r,o=n.uniquifyIDs,a=["id","href","xlink:href","xlink:role","xlink:arcrole"],s=["href","xlink:href"],l=function(e,t){return s.indexOf(e)>=0&&!!t&&0>t.indexOf("#")};return o&&N([],A(e.children)).map(function(e){if(e.attributes&&e.attributes.length){var n=Object.values(e.attributes).map(function(e){var n=e,r=e.value.match(/url\((.*?)\)/);return r&&r[1]&&(n.value=e.value.replace(r[0],"url("+i+r[1]+"__"+t.hash+")")),n});a.forEach(function(e){var r=n.find(function(t){return t.name===e});r&&!l(e,r.value)&&(r.value=r.value+"__"+t.hash)})}return e.children.length?t.updateSVGAttributes(e):e}),e},t.prototype.getNode=function(){var e=this.props,t=e.description,n=e.title;try{var r=this.processSVG(),i=b(r,{nodeOnly:!0});if(!i||!(i instanceof SVGSVGElement))throw Error("Could not convert the src to a DOM Node");var o=this.updateSVGAttributes(i);if(t){var a=o.querySelector("desc");a&&a.parentNode&&a.parentNode.removeChild(a);var s=document.createElement("desc");s.innerHTML=t,o.prepend(s)}if(n){var l=o.querySelector("title");l&&l.parentNode&&l.parentNode.removeChild(l);var u=document.createElement("title");u.innerHTML=n,o.prepend(u)}return o}catch(c){return this.handleError(c)}},t.prototype.getElement=function(){try{var e=this.getNode(),t=b(e);if(!t||!i.isValidElement(t))throw Error("Could not convert the src to a React element");this.setState({element:t,status:x.READY})}catch(n){this.handleError(Error(n.message))}},t.prototype.load=function(){var e=this;this.isActive&&this.setState({content:"",element:null,status:x.LOADING},function(){var t,n=e.props,r=n.cacheRequests,i=n.src,o=r&&P[i];if(o){o.status===x.LOADING?o.queue.push(e.handleCacheQueue):o.status===x.LOADED&&e.handleLoad(o.content);return}var a=i.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);if(a?t=a[1]?atob(a[2]):decodeURIComponent(a[2]):i.indexOf("<svg")>=0&&(t=i),t){e.handleLoad(t);return}e.request()})},t.prototype.render=function(){var e=this.state,t=e.element,n=e.status,r=this.props,o=r.children,a=void 0===o?null:o,s=r.innerRef,l=r.loader,u=void 0===l?null:l,c=E(this.props,"baseURL","cacheRequests","children","description","fetchOptions","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs");return k()?t?i.cloneElement(t,T({ref:s},c)):[x.UNSUPPORTED,x.FAILED].indexOf(n)>-1?a:u:u},t.defaultProps={cacheRequests:!0,uniquifyIDs:!1},t}(i.PureComponent),I=n(9453);function R(){let e=(0,o.Z)(["\n	width: ",";\n	height: ",";\n	min-width: ",";\n	min-height: ",";\n\n	position: ",";\n	top: ",";\n	bottom: ",";\n	left: ",";\n	right: ",";\n	margin: ",";\n	flex-grow: ",";\n	flex-shrink: ",";\n	pointer-events: none;\n\n	g#bg_1_ path,\n	g#bg {\n		fill: ",";\n	}\n	g#text path,\n	& > path {\n		fill: ",";\n	}\n	/* filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.4)); */\n\n	g#"," {\n		display: block;\n	}\n"]);return R=function(){return e},e}let j=(0,I.ZP)(D).withConfig({shouldForwardProp:(e,t)=>!["backgroundColor"].includes(e)&&t(e)}).withConfig({componentId:"sc-2b93bf06-0"})(R(),e=>{let{width:t}=e;return t||"100%"},e=>{let{height:t}=e;return t||"auto"},e=>{let{minWidth:t}=e;return t},e=>{let{minHeight:t}=e;return t},e=>{let{position:t}=e;return t||"relative"},e=>{let{top:t}=e;return t||null},e=>{let{bottom:t}=e;return t||null},e=>{let{left:t}=e;return t||null},e=>{let{right:t}=e;return t||null},e=>{let{margin:t}=e;return t||0},e=>{let{flexGrow:t}=e;return t},e=>{let{flexShrink:t}=e;return t},e=>{let{backgroundColor:t}=e;return t},e=>{let{color:t}=e;return t},e=>{let{variant:t}=e;return t&&t.split("-")[1]}),M=e=>{var t;let n="";return(null===(t=e.variant)||void 0===t?void 0:t.indexOf("eyecatcher"))!==-1&&(n="/svg/stoerer.svg"),e.src&&(n=e.src),(0,r.jsx)(j,{...e,src:n})}},8111:function(e,t,n){"use strict";n.d(t,{Dc:function(){return T},B0:function(){return Z},V5:function(){return E}});var r=n(2322),i=n(2228),o=n(9453),a=n(7031),s=n(9835);function l(){let e=(0,i.Z)(["\n    0% {\n\n        transform: translate3d(-100%,0,0);\n    }\n    36.6% {\n        transform: translate3d(0,0,0);\n      \n    }      \n    100% {\n        transform:translate3d(100%,0,0);\n    }\n"]);return l=function(){return e},e}function u(){let e=(0,i.Z)(["\n    0% {\n      transform : scale(0);\n      opacity   : 0;\n    }\n    	\n	5% {\n		  opacity : 1;\n		\n	}\n	\n    100% {\n      transform : scale(1);\n      opacity   : 0;\n    }\n"]);return u=function(){return e},e}function c(){let e=(0,i.Z)(["\n	width: ",";\n	height: ",";\n	position: ",";\n	z-index: 3;\n	margin-left: auto;\n	pointer-events: ",";\n	margin-right: auto;\n	margin: ",";\n	top: ",";\n	right: ",";\n	display: flex;\n\n	svg {\n		width: 100%;\n		vertical-align: middle;\n	}\n\n	.CircularProgressbar .CircularProgressbar-path {\n		stroke: ",";\n		stroke-linecap: round;\n		-webkit-transition: stroke-dashoffset 0.5s ease 0s;\n		transition: stroke-dashoffset 0.5s ease 0s;\n	}\n\n	.CircularProgressbar .CircularProgressbar-trail {\n		stroke: ",";\n		stroke-linecap: round;\n	}\n\n	.CircularProgressbar .CircularProgressbar-text {\n		fill: ",";\n		font-size: 1rem;\n		dominant-baseline: middle;\n		text-anchor: middle;\n	}\n\n	.CircularProgressbar .CircularProgressbar-background {\n		fill: ",';\n	}\n\n	/*\n * Sample background styles. Use these with e.g.:\n *\n *   <CircularProgressbar\n *     className="CircularProgressbar-inverted"\n *     background\n *     percentage={50}\n *   />\n */\n	.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {\n		fill: #3e98c7;\n	}\n\n	.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {\n		fill: #fff;\n	}\n\n	.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {\n		stroke: #fff;\n	}\n\n	.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {\n		stroke: transparent;\n	}\n']);return c=function(){return e},e}function d(){let e=(0,i.Z)(["\n	width: 100%;\n	height: 100%;\n	position: absolute;\n	left: 0;\n	top: 0;\n	animation: "," 1s 0s linear infinite;\n	animation-delay: ",";\n	animation-fill-mode: forwards;\n	background-color: ",";\n	border-radius: 50%;\n	opacity: 0;\n"]);return d=function(){return e},e}function h(){let e=(0,i.Z)(["\n	position: absolute;\n	background: transparent;\n	transition: transform 0.2s linear;\n	left: 0;\n	top: 0;\n	bottom: 0;\n	width: 100%;\n"]);return h=function(){return e},e}function f(){let e=(0,i.Z)([""]);return f=function(){return e},e}function p(){let e=(0,i.Z)(["\n	left: 0;\n	opacity: 0;\n	animation-fill-mode: forwards;\n	background-color: rgba(0, 98, 174, 0.25);\n	transform-origin: 0 0;\n	transform: translate3d(-100%, 0, 0);\n	animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n	&.isLoading {\n		opacity: 1;\n		animation: "," 2.5s infinite;\n	}\n"]);return p=function(){return e},e}function m(){let e=(0,i.Z)(["\n    0% {\n\n       transform:translate3d(-100%,0,0);\n    }\n    \n    100% {\n       transform:translate3d(100%,0,0);\n    }\n"]);return m=function(){return e},e}function g(){let e=(0,i.Z)(["\n	background-size: 100% 100%;\n	background-color: transparent;\n	border-radius: 0;\n	margin-bottom: 0.5rem;\n	display: block;\n	background-repeat: no-repeat;\n	line-height: 1;\n	width: 100%;\n	height: 100%;\n	background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 49%, rgba(255, 255, 255, 0) 100%);\n	animation: "," 1.5s ease-in-out infinite;\n	position: absolute;\n	top: 0;\n	left: 0;\n"]);return g=function(){return e},e}function v(){let e=(0,i.Z)(["\n	overflow: hidden;\n	position: relative;\n\n	background-color: rgba(0, 0, 0, 0.05);\n	display: flex;\n	min-height: 1.25rem;\n	border-radius: 0.25rem;\n	width: 100%;\n	margin: ",";\n"]);return v=function(){return e},e}let y=(0,o.F4)(l()),b=(0,o.F4)(u()),w=(0,o.ZP)(s.xu).withConfig({componentId:"sc-6577bf72-0"})(c(),e=>e.width?e.width:"100%",e=>e.height?e.height:"100%",e=>{let{position:t}=e;return t||"relative"},e=>{let{pointerEvents:t}=e;return t||null},e=>{let{margin:t}=e;return t||null},e=>{let{top:t}=e;return t||null},e=>{let{right:t}=e;return t||null},e=>{let{progressColor:t}=e;return t||a.wL.blue},e=>{let{progressBgColor:t}=e;return t||a.wL.blue},e=>{let{color:t}=e;return t||"#313131"},e=>{let{backgroundColor:t}=e;return t||"#dcdcdc"}),x=o.ZP.div.withConfig({componentId:"sc-6577bf72-1"})(d(),b,e=>{let{delay:t}=e;return t||"0s"},e=>{let{bgColor:t}=e;return t||"rgba(0, 0, 0, 0.25)"}),k=o.ZP.div.withConfig({componentId:"sc-6577bf72-2"})(h());o.ZP.span.withConfig({componentId:"sc-6577bf72-3"})(f());let S=(0,o.ZP)(k).withConfig({componentId:"sc-6577bf72-4"})(p(),y),_=(0,o.F4)(m());o.ZP.div.withConfig({componentId:"sc-6577bf72-5"})(g(),_),o.ZP.div.withConfig({componentId:"sc-6577bf72-6"})(v(),e=>{let{margin:t}=e;return t||"0 0 1.5rem 0"});let O=e=>(0,r.jsxs)(w,{...e,children:[(0,r.jsx)(x,{bgColor:e.bgColor}),(0,r.jsx)(x,{bgColor:e.bgColor,delay:"0.2s"}),(0,r.jsx)(x,{bgColor:e.bgColor,delay:"0.4s"}),(0,r.jsx)(x,{bgColor:e.bgColor,delay:"0.6s"})]});var E=O;let C=e=>(0,r.jsx)(w,{position:"absolute",pointerEvents:"none",children:(0,r.jsx)(S,{className:e.state})});var T=C,A=n(2784),N=function(e,t){return(N=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function P(e,t){function n(){this.constructor=e}N(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var D=function(){return(D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},I=100,R=100,j=50,M=50,L=50;function V(e){var t=e.className,n=e.counterClockwise,r=e.dashRatio,i=e.pathRadius,o=e.strokeWidth,a=e.style;return(0,A.createElement)("path",{className:t,style:Object.assign({},a,U({pathRadius:i,dashRatio:r,counterClockwise:n})),d:B({pathRadius:i,counterClockwise:n}),strokeWidth:o,fillOpacity:0})}function B(e){var t=e.pathRadius,n=e.counterClockwise,r=t,i=n?1:0;return"\n      M "+M+","+L+"\n      m 0,-"+r+"\n      a "+r+","+r+" "+i+" 1 1 0,"+2*r+"\n      a "+r+","+r+" "+i+" 1 1 0,-"+2*r+"\n    "}function U(e){var t=e.counterClockwise,n=e.dashRatio,r=2*Math.PI*e.pathRadius,i=(1-n)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-i:i)+"px"}}var q=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return P(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return j-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,r=e.classes,i=e.counterClockwise,o=e.styles,a=e.strokeWidth,s=e.text,l=this.getPathRadius(),u=this.getPathRatio();return(0,A.createElement)("svg",{className:r.root+" "+n,style:o.root,viewBox:"0 0 "+I+" "+R,"data-test-id":"CircularProgressbar"},this.props.background?(0,A.createElement)("circle",{className:r.background,style:o.background,cx:M,cy:L,r:j}):null,(0,A.createElement)(V,{className:r.trail,counterClockwise:i,dashRatio:t,pathRadius:l,strokeWidth:a,style:o.trail}),(0,A.createElement)(V,{className:r.path,counterClockwise:i,dashRatio:u*t,pathRadius:l,strokeWidth:a,style:o.path}),s?(0,A.createElement)("text",{className:r.text,style:o.text,x:M,y:L},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(A.Component);let F=e=>(0,r.jsxs)(w,{as:"button",margin:"0",...e,children:[(0,r.jsx)(q,{value:e.progress,strokeWidth:e.progressWidth,text:e.text?"".concat(e.text,"%"):null}),e.children]});var Z=F},3279:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function popoutUrl(e){let t={...e},n="top="+t.top+",left="+t.left+",width="+t.width+",height="+t.height+",toolbar="+t.toolbar+",scrollbars="+t.scroll+",status="+t.status+",resizable="+t.resizable+",location="+t.location+",menuBar=0,address=0",r=window.open(t.url,t.title,n);r.focus()}function openShareWindow(e){window.open(e,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")}function secondsToTimeCode(e,t,n,r){void 0===n?n=!1:void 0===r&&(r=25);let i=Math.floor(e/3600)%24,o=Math.floor(e/60)%60,a=Math.floor(e%60),s=Math.floor((e%1*r).toFixed(3)),l=(t||i>0?(i<10?"0"+i:i)+":":"")+(o<10?"0"+o:o)+":"+(a<10?"0"+a:a)+(n?":"+(s<10?"0"+s:s):"");return l}function isServer(){return!1}function getARDPrototypeConfig(node,nodeType){let base="data-ctrl",config=null,attr=node.getAttribute("".concat(base,"-").concat(nodeType));if(attr)try{config=eval("(".concat(attr,")"))}catch(e){console.error("#error config parsing",node,nodeType)}return config}function checkIndex(e){let t,n=0,r=0;return e&&e.map((e,i)=>{e.subItems.map((e,o)=>{e.paths.split(",").map((e,a)=>{isServer()||-1===document.location.href.indexOf(e)||(n=r=i,t=o)})})}),{index:n,initIndex:r,subIndex:t}}function checkFormatString(e){if(isServer())return"";let t=document.createElement("textarea");return t.innerHTML=e,t.value}function sortArrayAfterParam(e,t){return e.sort((e,n)=>e[t]>n[t]?-1:e[t]<n[t]?1:0)}function getRatioForVariant(e){let t="56.25%";switch(e){case"1xN":t="0";break;case"1x1":t="100%";break;case"24x9":t="37.5%"}return t}function getDeviceRatio(){let e=1;return void 0!==window.devicePixelRatio&&null!==window.devicePixelRatio&&window.devicePixelRatio>1&&(e=window.devicePixelRatio),e}function shouldShowDocTypeIcon(e){return!1}function fixEncoding(e){let t=document.createElement("textarea");return t.innerHTML=e,t.value}function getFinalImageUrl(e,t,n,r){let i=n,o=t||"16x9",a=i<512?"Small":"Big",s="variant"+a+o;if(r&&r.length>0){let l=r.filter(e=>e.imageType&&-1!==e.imageType.indexOf("tlarge169"));l||(l=r.filter(e=>e.imageType&&-1!==e.imageType.indexOf("original"))),l&&l[0]&&(s=l[0].imageType)}return e=(e=e.split("**imageVariant**").join(s)).split("**aspectRatio**").join("tlarge169"),i&&(e=e.split("**width**").join(String(i))),e}function getImageUrl(e,t,n){if(!e||void 0===e[t]||null===e[t])return"";let r=n<512?"small":"big",i="";return e[t]&&e[t][r]&&(i=e[t][r]),i}function absoluteMDRUrl(e){let t=-1!==document.location.host.indexOf("localhost");return t&&-1===e.indexOf("https://")?"https://www.mdr.de".concat(e):e}function getImageUrlFromArray(e,t,n){let r="",i=n<512?"Small":"Big",o="variant".concat(i).concat(t);return e.map((e,t)=>{(e.type===o||e===o)&&(r=e.url)}),r}function getImageUrlFromSophora(e,t,n){let r=n<512?"Small":"Big",i="variant"+r+t,o=e["16x9"];return e[i]&&(o=e[i]),o.split("_v").join("-resimage_v").replace(/_zc-(\w*)/,"")}function prefixMDRde(e){return -1===e.indexOf("http")?"https://www.mdr.de"+e:e}function isTouchDevice(){return!isServer()&&void 0!==window.orientation}function capitalizeFirstLetter(e){return e&&e.length>0?e[0].toUpperCase()+e.slice(1):""}function isIos(){let e=!1,t=RegExp(/iPhone/i),n=RegExp(/iPod/i),r=RegExp(/iPad/i);return(navigator.userAgent.match(t)||navigator.userAgent.match(n)||navigator.userAgent.match(r))&&(e=!0),e}function isStringDetected(e){let t=RegExp(e,"gi");return!!(t.test(navigator.appVersion)||t.test(navigator.userAgent))}function isTabconst(){return!!(isStringDetected("iPad|Windows NT|Kindle|PlayBook")||isStringDetected("Android")&&!isStringDetected("Mobile"))}function evalString(str){let config=null;try{config=eval("("+str+")")}catch(e){log("error parsing string to object")}return config}function log(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(isServer())return!1;window.console&&window.console.log&&window.console.log(...t)}async function loadScript(e){let t=new Promise((t,n)=>{let r=document.createElement("script");document.body.appendChild(r),r.onload=t,r.onerror=n,r.async=!0,r.src=e}),n=await t;return n}function hasNativeHlsSupport(e){return!!e.canPlayType("application/vnd.apple.mpegURL")}function timeCodeToSeconds(e,t,n){void 0===t?t=!1:void 0===n&&(n=25);let r=0,i=0,o=e.split(":"),a=parseInt(o[0],10),s=parseInt(o[1],10),l=parseInt(o[2],10);return"1"===o[0].substr(0,1)&&(a=parseInt("0"+o[0].substr(1),10)),t&&(r=parseInt(o[3],10)/n),i=3600*a+60*s+l+r}__webpack_require__.d(__webpack_exports__,{BI:function(){return evalString},KC:function(){return checkFormatString},Kp:function(){return fixEncoding},L4:function(){return getFinalImageUrl},Pt:function(){return getARDPrototypeConfig},R6:function(){return popoutUrl},Z3:function(){return getDeviceRatio},a5:function(){return getRatioForVariant},b1:function(){return isTouchDevice},cH:function(){return absoluteMDRUrl},cM:function(){return log},d0:function(){return timeCodeToSeconds},sB:function(){return shouldShowDocTypeIcon},sk:function(){return isServer},yV:function(){return secondsToTimeCode}});let serializeObjToQueryString=e=>Object.keys(e).map((t,n)=>(0===n?"?":"")+t+"="+encodeURIComponent(e[t])).join("&")},6329:function(e,t,n){"use strict";var r=n(3279);let i={};(0,r.sk)()||(i=window),t.Z=i},5723:function(e,t,n){"use strict";n.d(t,{qS:function(){return y},eV:function(){return x},D9:function(){return v},uO:function(){return O},fN:function(){return g}});var r=n(6329),i=n(6700),o=n(9785);function a(e){return(0,o.Z)(1,arguments),(0,i.Z)(e).getTime()}function s(e){return(0,o.Z)(1,arguments),Math.floor(a(e)/1e3)}var l=n(6522),u=n(2765);function c(e){(0,o.Z)(1,arguments);var t=(0,i.Z)(e),n=t.getFullYear(),r=t.getMonth(),a=new Date(0);return a.setFullYear(n,r+1,0),a.setHours(0,0,0,0),a.getDate()}function d(e,t){(0,o.Z)(2,arguments);var n=(0,i.Z)(e),r=(0,u.Z)(t),a=n.getFullYear(),s=n.getDate(),l=new Date(0);l.setFullYear(a,r,15),l.setHours(0,0,0,0);var d=c(l);return n.setMonth(r,Math.min(s,d)),n}function h(e,t){if((0,o.Z)(2,arguments),"object"!==(0,l.Z)(t)||null===t)throw RangeError("values parameter must be an object");var n=(0,i.Z)(e);return isNaN(n.getTime())?new Date(NaN):(null!=t.year&&n.setFullYear(t.year),null!=t.month&&(n=d(n,t.month)),null!=t.date&&n.setDate((0,u.Z)(t.date)),null!=t.hours&&n.setHours((0,u.Z)(t.hours)),null!=t.minutes&&n.setMinutes((0,u.Z)(t.minutes)),null!=t.seconds&&n.setSeconds((0,u.Z)(t.seconds)),null!=t.milliseconds&&n.setMilliseconds((0,u.Z)(t.milliseconds)),n)}var f=n(3279);let p=()=>({SANDEnabled:!0,SANDDebug:!0,mcdnType:"DNS",reporting:[{limiter:{endpoint:"https://sand-test.ard.de/auth/sand-token.json?apiKey=mdr"},endpoints:["https://sand-hub-test.ard.de/v1/projects/deo-mpm-dev-357814/topics/sand-topic:publish"],metrics:["RepSwitch","BufferLevel","Playback","Misc","LiveEdgeDelay","ErrorMetric","StartupTime"],schemeIdUri:"urn:mpeg:dash:sand:channel:gcp:xhr:2021",token:null},{limiter:{endpoint:"https://sand-test.ard.de/auth/sand-token.json?apiKey=mdr"},endpoints:["https://sand-hub-test.ard.de/v1/projects/deo-mpm-dev-357814/topics/sand-beacon:publish"],metrics:["Beacon"],schemeIdUri:"urn:mpeg:dash:sand:channel:gcp:xhr:2021",token:null}],configuration:{customerID:"mdr",enableHeaderReporting:!0,payloadTypeEnums:["text/xml","text/json"],payloadType:"text/json",defaults:{metricInterval:15e3,reportingInterval:15e3,beaconInterval:3e4,miscInterval:6e4,headInterval:3e4,errorTimeout:6e4},adaptiveInterval:{init:6e4,metricInterval:3e4,reportingInterval:3e4,threshold:{bufferLevelFactor:.66,liveEdgeDelayFactor:.66,memoryUsageFactor:.66}}}}),m=()=>({SANDEnabled:!0,SANDDebug:!0,mcdnType:"DNS",reporting:[{limiter:{endpoint:"https://sand.ard.de/auth/sand-token.json?apiKey=mdr"},endpoints:["https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-topic:publish"],metrics:["RepSwitch","BufferLevel","Playback","Misc","LiveEdgeDelay","ErrorMetric","StartupTime"],schemeIdUri:"urn:mpeg:dash:sand:channel:gcp:xhr:2021",token:null},{limiter:{endpoint:"https://sand.ard.de/auth/sand-token.json?apiKey=mdr"},endpoints:["https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-beacon:publish"],metrics:["Beacon"],schemeIdUri:"urn:mpeg:dash:sand:channel:gcp:xhr:2021",token:null}],configuration:{customerID:"mdr",enableHeaderReporting:!0,payloadTypeEnums:["text/xml","text/json"],payloadType:"text/json",defaults:{metricInterval:15e3,reportingInterval:15e3,beaconInterval:3e4,miscInterval:6e4,headInterval:3e4,errorTimeout:6e4},adaptiveInterval:{init:6e4,metricInterval:3e4,reportingInterval:3e4,threshold:{bufferLevelFactor:.66,liveEdgeDelayFactor:.66,memoryUsageFactor:.66}}}}),g=e=>null!=e&&!!e.transmissionType&&-1!==e.transmissionType.indexOf("live"),v=(e,t)=>{let n=t.avDocument||{},i={pluginData:{},generic:{isAutoplay:!0===e.preview,isDvrEnabled:!0,isMuted:!0===e.preview},web:{baseUrl:"/ardplayer/",isForcedAutoplay:!1,isAudioSticky:!0,enablePostMessage:!1}};if(i.pluginData={"airplay@all":{enabled:!0}},e.baseParams&&(e.baseParams.web&&(i.web=e.baseParams.web),e.baseParams.pluginData&&(i.pluginData={...e.baseParams.pluginData})),("download"===n.transmissionType||!0===n.downloadAvailable)&&(i.pluginData["download@web"]={isEnabled:!0}),"audio"!==n.type&&n["agf-tracking"]&&"true"!==localStorage.getItem("optOutNielsen")&&(i.pluginData["trackingAgf@web"]=w(n.sophoraId,n,e)),"kika"!==e.client){let o=m(),a=document.location.host;(-1!==a.indexOf("stg2.")||-1!==a.indexOf("mdr-dev.")||-1!==a.indexOf("localhost"))&&(o=p()),i.pluginData["trackingSAND@all"]=(null===r.Z||void 0===r.Z?void 0:r.Z.ardPlayerSandConfig)||o}let s=(null==n?void 0:n.title)?null==n?void 0:n.title.toLowerCase():"",l="kika"===e.client?"KIKA.de":"MDR.de",u=["url",{id:"whatsapp",title:"Auf Whatsapp wirklich teilen",class:"whatsappSpecial",target:"https://api.whatsapp.com/send?text=$text$",targetParams:{text:"Schau dir ".concat(s," auf ").concat(l," an: $link$")}},"fb-messenger","facebook","threema","telegram","twitter"];return"kika"===e.client&&(u=["url"]),i.pluginData["sharing@web"]={link:n.htmlUrl,params:"?start=$start$&ende=$ende$",legal:"",title:n.title||n.headline,body:"Unbedingt anschauen! Mein Tipp auf ".concat(l,": ").concat(n.title||n.headline," $link$"),subject:"Empfehlung von ".concat(l),services:u},i},y=(e,t)=>{let n="audio"===e?"audio":"video",r="".concat(n,"-").concat(t,"--").concat(String(new Date().getTime())),i="audio"===n?document.createElement("audio"):document.createElement("video");i.setAttribute("id",r),document.querySelector("body").appendChild(i);let o=null==i?void 0:i.play();return void 0!==o&&o.then(function(e){return!1}).catch(function(e){return!1}),r},b=(e,t,n)=>({type:e,meta:{images:[{kind:"preview",url:t}],title:"",synopsis:""},subtitles:[],tracking:[],pluginData:{},streams:[{media:[{url:n,mimeType:-1!==n.indexOf(".m3u8")?"application/vnd.apple.mpegurl":"video/mp4",audios:[{kind:"standard",languageCode:"de"}]}],kind:"main",isAudioOnly:!0}]}),w=(e,t,n)=>{if("audio"===t.type)return null;let r=t.channelOrRegionName||"MDR+",i=g(t)?"Livestream":t.title,o="",a=t.broadcast&&t.broadcast.broadcastName?i=t.broadcast.broadcastName:null,s=t.webTime?t.webTime:null,l=t.broadcast&&t.broadcast.broadcastStartDate?t.broadcast.broadcastStartDate:null,u=t.datetimeOfBroadcasting||null,c=t.broadcast&&t.broadcast.broadcastSeriesName?t.broadcast.broadcastSeriesName:"";if((o=null===l?u:l)&&""!==o||(o=s),o){let d=o.substr(0,2),h=o.substr(3,2),p=o.substr(6,4),m=o.substr(11,5),v=p+"-"+h+"-"+d+"T"+m+":00";o=v}if(g(t)){let y=new Date;o=y.toISOString().split(".")[0]}let b="MDR Fernsehen"===r?"N":"Y",w=t.htmlUrl||"",x=o,k=t.broadcast&&t.broadcast.formatId?t.broadcast.formatId:"",S="ARD_Sonstiges",_=t.duration&&!g(t)?Number((0,f.d0)("00:"+t.duration)):86400,O=t.contributionNumber||null,E=g(t)?"":"_"+o,C={nol_c0:"p0,0",nol_c2:"p2,"+b,nol_c5:"p5,"+w,nol_c10:"p10,"+r,nol_c12:"p12,Content",nol_c14:"p14,"+x,nol_c15:"p15,"+k,nol_c16:"p16,"+S};"0"===O?C.nol_c9=C.nol_c9+E:C.nol_c9=a+"_"+i+E;let T=t["agf-tracking"];for(let A in T)"c14"!==A&&"c"===A.substring(0,1)&&"clientId"!==A&&"vcid"!==A&&(C[-1===A.indexOf("nol")?"nol_"+A:A]="p".concat(A.split("c").join(""),",").concat(T[A]));T.program&&(c=T.program),T.length&&(_=T.length),T.c14&&"kika"===n.client&&(C.nol_c14="p14,".concat(T.c14)),g(t)&&(C.nol_c8="p8,86400",c="Livestream");let N="P3D9A6264-5D0D-4FCA-9C87-C9197B844BED";n&&"kika"===n.client&&(N="P945EA7D9-6619-4B5A-A454-33069A153141");let P=T.appId;((null==P?void 0:P.substring(0,1))==="P"||(null==P?void 0:P.substring(0,1))==="T")&&(N=P);let D={tracker:"AGFdebug",appId:N,playerID:e,permLive:g(t),clipData:{type:"content",assetid:e||T.assetid||T.assetId||"",program:c,title:T.title?T.title:T.c10+"_"+T.c9,length:_,...C}};return D},x=(e,t)=>{var n,i,o,a,l,u,c,d,p,m,v,y;let b=t||"16x9",w=e.avDocument,x=w.type||"video",S=w.assets;w.assets.asset&&(S=w.assets.asset),w.assets.assets&&(S=w.assets.assets);let _={assets:S,isLive:g(w),type:x,geoData:e.geoData},O="";(null===(n=w.broadcast)||void 0===n?void 0:n.productPlacementTitle)&&(O="\n\n ".concat(w.broadcast.productPlacementTitle,": ").concat(w.broadcast.productPlacementDescription)),w.hasProductPlacement&&(O="\n\n Diese Sendung enth\xe4lt Produktplatzierungen.");let E={isGeoBlocked:!1,live:null,meta:{images:[{kind:"preview",url:(0,f.L4)((null==w?void 0:null===(i=w.teaserimages)||void 0===i?void 0:null===(o=i.teaserimageResponsive)||void 0===o?void 0:o.url)||(null==w?void 0:null===(a=w.teaserimages)||void 0===a?void 0:null===(l=a.teaserimage)||void 0===l?void 0:l.url)||(null==w?void 0:null===(u=w.teaserImage)||void 0===u?void 0:u.urlScheme)||(null==w?void 0:null===(c=w.image)||void 0===c?void 0:c.urlScheme)||"",b,768,null==w?void 0:null===(d=w.teaserImage)||void 0===d?void 0:d.variants)}],maturityContentRating:null,title:w.title,synopsis:"".concat(w.teaserText," ").concat(O)},subtitles:[],tracking:[],pluginData:{},streams:[{media:k(_),isAudioOnly:!!w&&!!w.type&&-1!==w.type.indexOf("audio"),kind:"main"}]};if(e.adAvDocument){let C=e.adAvDocument.assets.assets||e.adAvDocument.assets.asset,T={assets:C,isLive:g(e.adAvDocument),type:x,geoData:e.geoData,audioKind:"audio-description"};E.streams.push({media:k(T),isAudioOnly:!1,kind:"audio-description"})}if(e.dgsAvDocument){let A=(null===(p=e.dgsAvDocument)||void 0===p?void 0:null===(m=p.assets)||void 0===m?void 0:m.assets)||(null===(v=e.dgsAvDocument)||void 0===v?void 0:null===(y=v.assets)||void 0===y?void 0:y.asset),N={assets:A,isLive:g(null==e?void 0:e.dgsAvDocument),geoData:null==e?void 0:e.geoData,type:x};E.streams.push({media:k(N),isAudioOnly:!1,kind:"sign-language"})}let P=!1;if("audio"===w.type&&E.streams[0].media&&(E.streams[0].media.map((e,t)=>{-1!==e.url.indexOf(".mp4")&&(P=!0)}),P&&(E.streams[0].isAudioOnly=!1)),(null==w?void 0:w.fsk)&&Number(w.fsk)>12){let D=Number(w.fsk),I=20,R=6,j=!0;16===D&&(I=22),18===D&&(I=23);let M=s(new Date((null===r.Z||void 0===r.Z?void 0:r.Z.SERVER_TIME)||Date.now())),L=s(h(new Date((null===r.Z||void 0===r.Z?void 0:r.Z.SERVER_TIME)||Date.now()),{hours:I})),V=s(h(new Date((null===r.Z||void 0===r.Z?void 0:r.Z.SERVER_TIME)||Date.now()),{hours:R}));(M>=L||M<=V)&&(j=!1),E.meta.maturityContentRating={kind:"fsk",age:D,isBlocked:j}}if(E.isGeoBlocked=e.geoData&&"de"!==e.geoData,"audio"===x&&(E.pluginData["plugin-hls@web"]={maxBufferSize:1e7}),g(w)){E.live={dvrWindowSeconds:7200};let B={kind:"normal",languageCode:"de",sources:[{kind:"webvtt",url:""}]};E.subtitles.push(B)}else delete E.live;if(w.videoSubtitleUrl||w.webvttUrl){let U={kind:"normal",languageCode:"de",sources:[]};w.videoSubtitleUrl&&U.sources.push({kind:"ebutt",url:w.videoSubtitleUrl}),w.webvttUrl&&U.sources.push({kind:"webvtt",url:w.webvttUrl}),E.subtitles.push(U)}return E},k=e=>{let t=[],n="csmilHlsStreamingRedirectorUrl",r="adaptiveHttpStreamingRedirectorUrl",i=0,o=!1;if(e.isLive&&"audio"===e.type&&(n="icecastHttpStreamUrl"),i>0){let a={data:e.assets[i],url:e.assets[i][n],target:t,mediaType:e.type,audioKind:e.audioKind,geoData:e.geoData};return _(a),t}if(e.assets.length&&e.assets.length>0)e.assets.map((i,a)=>{if(i.url){let s={data:i,url:i.url,target:t,mediaType:e.type,audioKind:e.audioKind,geoData:e.geoData};_(s)}else{let l=null;if(i[n]&&(l=i[n]),i[n]||(l=i[r]),!1===o&&l){let u={data:i,url:l,target:t,mediaType:e.type,audioKind:e.audioKind,geoData:e.geoData},c=_(u);null!==c&&(o=!0)}if(i.progressiveDownloadUrl&&!i.downloadUrl){let d={data:i,url:i.progressiveDownloadUrl,target:t,mediaType:e.type,geoData:e.geoData,audioKind:e.audioKind};_(d)}}});else if("object"==typeof e.assets){let s={data:e.assets,url:e.assets[n]||e.assets[r]||e.assets.progressiveDownloadUrl,target:t,mediaType:e.type,geoData:e.geoData,audioKind:e.audioKind};_(s)}return t},S=(e,t)=>{let n=null;return(45e4===e||t&&e>480&&e<=640)&&(n="niedrige Qualit\xe4t"),(18e5===e||115e4===e||t&&e>640)&&(n="mittlere Qualit\xe4t"),(3584e3===e||225e4===e||t&&e>=1280)&&(n="hohe Qualit\xe4t"),n},_=e=>{var t;let n="application/vnd.apple.mpegurl",{url:r,data:i,mediaType:o,target:a,audioKind:s}=e,l=6e4,u=i.bitrateVideo;u&&-1!==u||(u=i.frameWidth);let c=S(u,!i.bitrateVideo||-1===i.bitrateVideo);if(-1!==r.indexOf(".mp4")&&-1===r.indexOf(".m3u8")&&(n="video/mp4"),(-1!==r.indexOf(".mp3")||-1!==r.indexOf("/mp3/"))&&-1===r.indexOf(".m3u8")&&(n="audio/mpeg"),-1===n.indexOf("mpegurl")&&null===c&&"audio"!==o||-1!==r.indexOf(".m3u")&&-1===r.indexOf(".m3u8")&&"audio"===o||e.geoData&&e.data.geoZone&&e.data.geoZone.toLowerCase()!==e.geoData||!e.geoData&&e.data.geoZone&&"ww"===e.data.geoZone.toLowerCase()||(null===(t=e.data)||void 0===t?void 0:t.icecastHttpStreamUrl)&&e.data.bitrateAudio<l)return null;a.push({url:r,downloadUrl:void 0,mimeType:n,maxHResolutionPx:-1!==n.indexOf("mpegurl")?void 0:i.frameWidth,audios:[{kind:s||"standard",languageCode:"deu"}]})},O=(e,t)=>{var n,r,i,o,a,s,l,u,c,d,h,f,p,m,g,y,w,k,S;let _={all:{url:"",title:"",name:"",icon:""}},O={title:"",avDocuments:null,podcast:{url:"",podcastProvider:{provider:null}},topline:"",headline:"",sophoraId:"",teaserImage:"",teaserImageAltText:""};if(_.all={title:"RSS Feed",name:"rss",icon:"rss",url:""},t.rss){let E=t.rss.channel.image.url,C=t.rss.channel.image.title,T=t.rss.channel.item[0];O={title:null,avDocuments:null,topline:t.rss.channel.title,headline:T["itunes:title"],sophoraId:"player"+new Date().getTime(),teaserImage:E,teaserImageAltText:C,podcast:{url:e.mmgXml,podcastProvider:null}},_.all.url=e.mmgXml;let A=v(e,t.rss),N=T.enclosure["@_url"],P=b("audio",E,N);e.platforms&&e.platforms instanceof Array&&e.platforms.length>0?e.platforms.map((e,t)=>_[e.icon]={title:e.title,name:e.title,url:e.url,icon:e.icon}):(null===(m=e.platforms)||void 0===m?void 0:m.icon)&&(_[e.platforms.icon]={title:e.platforms.title,name:e.platforms.title,url:e.platforms.url,icon:e.platforms.icon});let D={...O,pods:_};return{...D,pc:A,mc:P}}t.multimediagallery&&(O=t.multimediagallery),O&&O.podcast&&O.podcast.podcastProvider&&O.podcast.podcastProvider.provider instanceof Array&&O.podcast.podcastProvider.provider?(_.all.url=null===(g=O.podcast)||void 0===g?void 0:g.url,O.podcast.podcastProvider.provider.map((e,t)=>_[e.providerName]={title:e.providerTitle,name:e.providerName,url:e.providerUrl,icon:e.providerName})):(_.all.url=null===(y=O.podcast)||void 0===y?void 0:y.url,(null===(w=O.podcast)||void 0===w?void 0:null===(k=w.podcastProvider)||void 0===k?void 0:null===(S=k.provider)||void 0===S?void 0:S.providerName)&&(_[O.podcast.podcastProvider.provider.providerName]={url:O.podcast.podcastProvider.provider.providerUrl,title:O.podcast.podcastProvider.provider.providerName}));let I=null===(n=O.avDocuments)||void 0===n?void 0:n.avDocument;if((null===(r=O.avDocuments)||void 0===r?void 0:r.avDocument.length)&&(null===(i=O.avDocuments)||void 0===i?void 0:i.avDocument.length)&&(I=O.avDocuments.avDocument[0]),t.forceAudio&&(I=t.forceAudio),!I)return null;let R={mmgData:O,topline:O&&O.title,headline:I&&I.headline,teaserImageBaseUrl:null==I?void 0:null===(o=I.teaserimages)||void 0===o?void 0:null===(a=o.teaserimageResponsive)||void 0===a?void 0:a.url,teaserImage:null==I?void 0:null===(s=I.teaserimages)||void 0===s?void 0:null===(l=s.teaserimageResponsive)||void 0===l?void 0:l.url,teaserImageAltText:"".concat(null==I?void 0:null===(u=I.teaserimages)||void 0===u?void 0:null===(c=u.teaserimageResponsive)||void 0===c?void 0:c.alttext).concat((null==I?void 0:null===(d=I.teaserimages)||void 0===d?void 0:null===(h=d.teaserimageResponsive)||void 0===h?void 0:h.rights)?" | Bildrechte:"+(null==I?void 0:null===(f=I.teaserimages)||void 0===f?void 0:null===(p=f.teaserimageResponsive)||void 0===p?void 0:p.rights):""),mediaUrl:I&&I.assets&&I.assets.asset[0]&&I.assets.asset[0].progressiveDownloadUrl,measure:{atInternet:I.atiTracking,pianoAnalyticsProps:I.pianoAnalyticsProps},sophoraId:I.sophoraId},j={avDocument:I},M=v(e,j),L=x(j);return{...R,pods:_,pc:M,mc:L}}},7031:function(e,t,n){"use strict";n.d(t,{FK:function(){return m},PJ:function(){return f},X2:function(){return v},sg:function(){return g},tK:function(){return y},wL:function(){return p}});var r=n(2228),i=n(9453);function o(){let e=(0,r.Z)(["\n    0% {\n    transform: translate3d(0,-100%,0);\n    }\n    100% {\n       transform: translate3d(0,0,0);\n    }\n"]);return o=function(){return e},e}function a(){let e=(0,r.Z)(["\n    0% {\n      opacity:0;\n    }\n    100% {\n       opacity:1;\n    }\n"]);return a=function(){return e},e}function s(){let e=(0,r.Z)(["\n    0% {\n      opacity:1;\n    }\n    100% {\n       opacity:0;\n    }"]);return s=function(){return e},e}function l(){let e=(0,r.Z)(["\n	width: ",";\n	align-items: ",";\n	margin: ",";\n	margin-bottom: ",";\n	margin-left: ",";\n	margin-top: ",";\n	justify-content: ",";\n	position: relative;\n	padding: ",";\n	background-color: ",";\n	height: ",";\n	overflow: hidden;\n	display: flex;\n	flex-direction: column;\n	flex: 1 1 auto;\n"]);return l=function(){return e},e}function u(){let e=(0,r.Z)(["\n	position: ",";\n	right: ",";\n	top: ",";\n	left: ",";\n	bottom: ",";\n	display: flex;\n"]);return u=function(){return e},e}function c(){let e=(0,r.Z)(["\n			&:after {\n				position: absolute;\n				bottom: 0;\n				pointer-events: none;\n				left: 0;\n				width: 100%;\n				height: 100%;\n				content: '';\n				background: ",";\n			}\n		"]);return c=function(){return e},e}function d(){let e=(0,r.Z)(["\n	display: flex;\n	position: relative;\n	padding: ",";\n\n	flex-direction: row;\n	align-items: ",";\n	margin-bottom: ",";\n	margin-top: ",";\n	z-index: ",";\n	background-color: ",";\n\n	width: 100%;\n	flex-wrap: ",";\n	height: ",";\n	transition: ",";\n\n	",";\n"]);return d=function(){return e},e}function h(){let e=(0,r.Z)(["\n	color: ",";\n\n	overflow: hidden;\n	font-size: 0.75rem;\n	white-space: nowrap;\n	text-overflow: ellipsis;\n	line-height: 1.21;\n	margin-top: ",";\n"]);return h=function(){return e},e}let f={video:"&#xe60e;",internalLink:"&#xe617;",audio:"&#xe60b;",audioTeaser:"&#xF672",share:"&#xe668;",shareBoxOutline:"&#63064;",popout:"&#xe665;",info:"&#xe613;",menu:"&#xe666;",close:"&#xe608;",play:"&#xe61c;",home:"&#xe612;",pause:"&#xe61b;",image:"&#xe60c;",imageGallery:"&#xf64a;",skipRew:"&#xf63b;",skipFwd:"&#xf63c;",playlist:"&#xe913;",arrowLeft:"&#xf802;",arrowRight:"&#xf803;",arrowRightFull:"&#10132;",arrowUp:"&#xe633;",arrowDown:"&#xe630;",chevronLeftScroll:"&#xf808;",chevronRightScroll:"&#xf809;",subscribe:"&#xf63f;",search:"&#xe629;",minus:"&#xe619;",plus:"&#xe625;",burger:"&#xe600;",refresh:"&#xe628",volume:"&#xe6f6;",volumeMuted:"&#xe60a",checked:"&#xe61A",fullscreen:"&#xF64C",fullscreenExit:"&#xF64B",facebook:"&#xe636",twitter:"&#xe63a",pinterest:"&#xe914",instagram:"&#xe90D",google:"&#xe637",mail:"&#xe618",whatsapp:"&#xe900",mdr:"&#xe639",print:"&#xe626",commentOutline:"&#xf712",podcast:{rss:"&#xf640;",apple:"&#xf645;",audiothek:"&#xf644;",google:"&#xf643;",overCast:"&#xf642;",pocketCast:"&#xf641;",antennaPod:"&#xf646;",spotify:"&#xf647;"}},p={playerBgGrey:"#e8ebec",playerGrey:"#626262",lightBg:"rgba(0,0,0,.2)",grey:"#827e7c",darkGrey:"#ccc",blue:"#0682d1;",white:"#fff;",red:"#ef412f",default:"#313131",mdrDarkBlue:"#004e8b",mdrLightBlue:"#1a72b6",cdu:"#000000",spd:"#e4000f",linke:"#e80099",gruene:"#65a12d",afd:"#019de0",fdp:"#feed00",electionTooldefault:"#0062ae",electionToolBeige:"#f9f9f9"},m={moveInFromTop:(0,i.F4)(o()),fadeIn:(0,i.F4)(a()),fadeOut:(0,i.F4)(s())},g=i.ZP.div.withConfig({componentId:"sc-a809b2ab-0"})(l(),e=>e.width?e.width:"100%",e=>e.align?e.align:"",e=>e.margin?e.margin:null,e=>e.marginBottom?e.marginBottom:null,e=>e.marginLeft?e.marginLeft:null,e=>e.marginTop?e.marginTop:null,e=>e.justify?e.justify:"flex-start",e=>e.innerPadding?e.innerPadding:"0",e=>e.bgColor?e.bgColor:"transparent",e=>e.height?e.height:"100%");i.ZP.div.withConfig({componentId:"sc-a809b2ab-1"})(u(),e=>e.posType?e.posType:"relative",e=>e.posRight?e.posRight:"auto",e=>e.posTop?e.posTop:"auto",e=>e.posLeft?e.posLeft:"auto",e=>e.posBottom?e.posBottom:"auto");let v=i.ZP.div.withConfig({componentId:"sc-a809b2ab-2"})(d(),e=>e.innerPadding?e.innerPadding:"0",e=>e.align?e.align:"center",e=>e.marginBottom?e.marginBottom:"0",e=>e.marginTop?e.marginTop:"0",e=>e.zIndex?e.zIndex:null,e=>e.bgColor?e.bgColor:null,e=>!0===e.canWrap?"wrap":null,e=>e.height?e.height:null,e=>e.animate?"all .3s ease-out":null,e=>e.shadowColor&&(0,i.iv)(c(),e=>e.shadowColor)),y=i.ZP.div.withConfig({componentId:"sc-a809b2ab-3"})(h(),e=>e.fontColor?e.fontColor:"#fff",e=>e.marginTop?e.marginTop:"0")},1695:function(e,t,n){"use strict";function r(e){return new Date(e).toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})}function i(e){let t=null,n=-1!==["aktion","audio","buchtipp","chat","darsteller","download","experimente","hinter_den_kulissen","hilfe","link_extern","malen","musik","pfeil_rechts","rezept","selbermachen","serie","spiele","tipp","trailer","uebersicht","video","live"].indexOf(e);return n&&(t=e),t}function o(e){let t="56.25%";return"1/1"===e&&(t="100%"),"4/3"===e&&(t="75%"),"3/4"===e&&(t="133.333%"),"16/7"===e&&(t="43.57%"),"24/9"===e&&(t="37.5%"),"32/9"===e&&(t="28.125%"),t}n.d(t,{QZ:function(){return g},Dh:function(){return r},Dc:function(){return o},MK:function(){return i},rA:function(){return a},b3:function(){return v},Tl:function(){return m},wN:function(){return p},ku:function(){return h}}),n(9644);let a=(e,t)=>{try{if(0===e.length)throw Error("replaceEmptySpacesWith: text is empty");return null==e?void 0:e.replace(/\s/g,t||"-").toLowerCase()}catch(n){return n.message}};var s=n(6329),l=n(3857),u=n.n(l);function c(e){return e.split("[").join("").split("]").join("")}function d(e,t,n){return"[".concat(c(e.customVars.site[t])).concat(n,"]")}async function h(e){if((null==e?void 0:e.type)!=="click"&&(null==e?void 0:e.type)!=="hidden"){let t={site:596354,page:{name:"kikastartseite100",level2:"1",chapter1:"",chapter2:"",chapter3:"",customObject:{G1:"",G2:"",G3:"",G4:"",G5:"",G6:"",G7:"",G8:"",G9:"",G10:""}},customVars:{site:{1:"[http%3A%2F%2Ftest.kika.de%2Findex.html]",2:"[]",3:"[Web]",4:"0",5:"[]",6:"[kika.kikastartseite100]",7:"[kika.startseite]",8:"[kikastartseite100]",9:"[a9bd8551%2D06cb%2D4d58%2Da672%2Df2400776381f]",10:"[Startseite]",11:"[2014.11.05T14%3A05]",12:"[2022.04.06T14%3A59]",13:"[indexPage]",14:"[]",15:"[no%5Fepisodetitle]",16:"[no%5Fseriestitle]",17:"",18:"[]",19:"[]",20:""}}};t.customVars.site["5"]=d(t,"5","tool.".concat(e.name)),t.customVars.site["6"]=d(t,"6",".tool.".concat(e.path?e.path:e.name)),p(t)}}function f(){return localStorage.getItem("optOutAti")&&"true"===localStorage.getItem("optOutAti")}async function p(e,t){var n,r,i;if(f())return;if(s.Z.measurement=s.Z.measurement||{},s.Z.measurement.atInternet=s.Z.measurement.atInternet||{player:{}},void 0===s.Z.ATInternet)try{await Promise.all([u().js("https://www.kika.de/resources/js/smarttag.js")])}catch(o){console.error("#ati lib load Error",o)}e.cookieSecure||(e.cookieSecure=!0),e.secure||(e.secure=!0);let a=document.location.hostname.substring(document.location.hostname.lastIndexOf(".",document.location.hostname.lastIndexOf(".")-1)+1);e.cookieDomain||(e.cookieDomain="."+a,console.warn("No Cookie Domain set in /shared-library/src/lib/tracking/index.ts, using: ".concat(e.cookieDomain))),s.Z.measurement.atInternet.tag||(s.Z.measurement.atInternet.tag=new s.Z.ATInternet.Tracker.Tag(e)),s.Z.measurement.atInternet.tag.page.set(e.page),document.referrer&&(e.customVars.site["2"]="["+encodeURIComponent(document.referrer).replace(/-/g,"%2D").replace(/_/g,"%5F")+"]"),t&&(null===(i=s.Z.measurement)||void 0===i||i.atInternet.tag.internalSearch.set(t)),null===(n=s.Z.measurement)||void 0===n||n.atInternet.tag.customVars.set(e.customVars),null===(r=s.Z.measurement)||void 0===r||r.atInternet.tag.dispatch()}function m(e){var t;if(f())return;let n={elem:null,callback:null,name:e.name,chapter1:e.chapter1||"unbekannt",chapter2:e.chapter2,chapter3:e.chapter3,level2:e.level2,type:e.type};return null===(t=s.Z.measurement)||void 0===t||t.atInternet.tag.click.send(n),!1}function g(e,t){var n;if(f())return;if(!e)return!1;let r={...e.richMedia,playerId:t},i=r.refreshDuration.split(","),o={};for(let a=0;a<i.length;a++){let l=i[a].split(":");o[l[0]]=l[1]}r.refreshDuration=o,r.mediaLevel2=null==e?void 0:null===(n=e.page)||void 0===n?void 0:n.level2,s.Z.measurement.atInternet.player[t]=r,s.Z.measurement.atInternet.tag.richMedia.add(s.Z.measurement.atInternet.player[t])}function v(e,t,n){if(f())return;let r=s.Z.measurement.atInternet.player[e];r&&(r.action=t,r.isBuffering=n,s.Z.measurement.atInternet.tag.richMedia.send(r))}n(4302)},4302:function(e,t,n){"use strict";n.d(t,{YH:function(){return o},xG:function(){return i}});var r=n(6329);n(3857);let i=()=>{let e=!0;try{if(window.localStorage){let t=window.localStorage.getItem("mdrSettings");if(null!==t){var n;let r=JSON.parse(t);(null==r?void 0:null===(n=r.tracking)||void 0===n?void 0:n.ati)===!1&&(e=!1)}}}catch(i){return}return e},o=()=>void 0===r.Z.atiTracking},8398:function(e,t,n){var r="/";!function(){var t={477:function(e){"use strict";e.exports=n(176)}},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}},a=!0;try{t[e](r,r.exports,o),a=!1}finally{a&&delete i[e]}return r.exports}o.ab=r+"/";var a={};!function(){var e,t=a,n=(e=o(477))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function i(e){"string"==typeof e&&(e=b(e));var t=function(e,t,n){var r=e.auth,i=e.hostname,o=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",u=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?u=r+e.host:i&&(u=r+(~i.indexOf(":")?"["+i+"]":i),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=t.encode(l));var c=e.search||l&&"?"+l||"";return o&&":"!==o.substr(-1)&&(o+=":"),e.slashes||(!o||n.test(o))&&!1!==u?(u="//"+(u||""),a&&"/"!==a[0]&&(a="/"+a)):u||(u=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),{protocol:o,host:u,pathname:a=a.replace(/[?#]/g,encodeURIComponent),search:c=c.replace("#","%23"),hash:s}}(e,n,r);return""+t.protocol+t.host+t.pathname+t.search+t.hash}var s="http://",l="w.w",u=s+l,c=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,d=/https?|ftp|gopher|file/;function h(e,t){var n="string"==typeof e?b(e):e;e="object"==typeof e?i(e):e;var r=b(t),o="";n.protocol&&!n.slashes&&(o=n.protocol,e=e.replace(n.protocol,""),o+="/"===t[0]||"/"===e[0]?"/":""),o&&r.protocol&&(o="",r.slashes||(o=r.protocol,t=t.replace(r.protocol,"")));var a=e.match(c);a&&!r.protocol&&(e=e.substr((o=a[1]+(a[2]||"")).length),/^\/\/[^/]/.test(t)&&(o=o.slice(0,-1)));var l=new URL(e,u+"/"),h=new URL(t,l).toString().replace(u,""),f=r.protocol||n.protocol;return f+=n.slashes||r.slashes?"//":"",!o&&f?h=h.replace(s,f):o&&(h=h.replace(s,"")),d.test(h)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==h.slice(-1)||(h=h.slice(0,-1)),o&&(h=o+("/"===h[0]?h.substr(1):h)),h}function f(){}f.prototype.parse=b,f.prototype.format=i,f.prototype.resolve=h,f.prototype.resolveObject=h;var p=/^https?|ftp|gopher|file/,m=/^(.*?)([#?].*)/,g=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,v=/^([a-z0-9.+-]*:)?\/\/\/*/i,y=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function b(e,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!1),e&&"object"==typeof e&&e instanceof f)return e;var o=(e=e.trim()).match(m);e=o?o[1].replace(/\\/g,"/")+o[2]:e.replace(/\\/g,"/"),y.test(e)&&"/"!==e.slice(-1)&&(e+="/");var a=!/(^javascript)/.test(e)&&e.match(g),s=v.test(e),c="";a&&(p.test(a[1])||(c=a[1].toLowerCase(),e=""+a[2]+a[3]),a[2]||(s=!1,p.test(a[1])?(c=a[1],e=""+a[3]):e="//"+a[3]),3!==a[2].length&&1!==a[2].length||(c=a[1],e="/"+a[3]));var d,h=(o?o[1]:e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),b=h&&h[1],w=new f,x="",k="";try{d=new URL(e)}catch(_){x=_,c||r||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(k="/",e=e.substr(1));try{d=new URL(e,u)}catch(S){return w.protocol=c,w.href=c,w}}w.slashes=s&&!k,w.host=d.host===l?"":d.host,w.hostname=d.hostname===l?"":d.hostname.replace(/(\[|\])/g,""),w.protocol=x?c||null:d.protocol,w.search=d.search.replace(/\\/g,"%5C"),w.hash=d.hash.replace(/\\/g,"%5C");var O=e.split("#");!w.search&&~O[0].indexOf("?")&&(w.search="?"),w.hash||""!==O[1]||(w.hash="#"),w.query=t?n.decode(d.search.substr(1)):w.search.substr(1),w.pathname=k+(a?function(e){return e.replace(/['^|`]/g,function(e){return"%"+e.charCodeAt().toString(16).toUpperCase()}).replace(/((?:%[0-9A-F]{2})+)/g,function(e,t){try{return decodeURIComponent(t).split("").map(function(e){var t=e.charCodeAt();return t>256||/^[a-z0-9]$/i.test(e)?e:"%"+t.toString(16).toUpperCase()}).join("")}catch(n){return t}})}(d.pathname):d.pathname),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),c&&!p.test(c)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[d.username,d.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=d.port,b&&!w.host.endsWith(b)&&(w.host+=b,w.port=b.slice(1)),w.href=k?""+w.pathname+w.search+w.hash:i(w);var E=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~E.indexOf(e)||(w[e]=w[e]||null)}),w}t.parse=b,t.format=i,t.resolve=h,t.resolveObject=function(e,t){return b(h(e,t))},t.Url=f}(),e.exports=a}()},176:function(e){var t="/";!function(){"use strict";var n={815:function(e){function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,r,i,o){r=r||"&",i=i||"=";var a={};if("string"!=typeof e||0===e.length)return a;var s=/\+/g;e=e.split(r);var l=1e3;o&&"number"==typeof o.maxKeys&&(l=o.maxKeys);var u=e.length;l>0&&u>l&&(u=l);for(var c=0;c<u;++c){var d,h,f,p,m=e[c].replace(s,"%20"),g=m.indexOf(i);g>=0?(d=m.substr(0,g),h=m.substr(g+1)):(d=m,h=""),f=decodeURIComponent(d),p=decodeURIComponent(h),t(a,f)?n(a[f])?a[f].push(p):a[f]=[a[f],p]:a[f]=p}return a};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},577:function(e){var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,o,a,s){return(o=o||"&",a=a||"=",null===e&&(e=void 0),"object"==typeof e)?r(i(e),function(i){var s=encodeURIComponent(t(i))+a;return n(e[i])?r(e[i],function(e){return s+encodeURIComponent(t(e))}).join(o):s+encodeURIComponent(t(e[i]))}).join(o):s?encodeURIComponent(t(s))+a+encodeURIComponent(t(e)):""};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function r(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var i=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}},a=!0;try{n[e](o,o.exports,i),a=!1}finally{a&&delete r[e]}return o.exports}i.ab=t+"/";var o={};!function(){var e=o;e.decode=e.parse=i(815),e.encode=e.stringify=i(577)}(),e.exports=o}()},9097:function(e,t,n){e.exports=n(1088)},5632:function(e,t,n){e.exports=n(2203)},4406:function(e){var t,n,r,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function l(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(r){n=a}}();var u=[],c=!1,d=-1;function h(){c&&r&&(c=!1,r.length?u=r.concat(u):d=-1,u.length&&f())}function f(){if(!c){var e=s(h);c=!0;for(var t=u.length;t;){for(r=u,u=[];++d<t;)r&&r[d].run();d=-1,t=u.length}r=null,c=!1,l(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||c||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}},6866:function(e,t){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n,r=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case s:case a:case h:case f:return e;default:switch(e=e&&e.$$typeof){case c:case u:case d:case m:case p:case l:return e;default:return t}}case i:return t}}}n=Symbol.for("react.module.reference"),t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===h||e===f||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===l||e.$$typeof===u||e.$$typeof===d||e.$$typeof===n||void 0!==e.getModuleId)},t.typeOf=v},8570:function(e,t,n){"use strict";e.exports=n(6866)},8665:function(e){e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0}},5580:function(e){let t=/^[-+]?0x[a-fA-F0-9]+$/,n=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);let r={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function i(e,i={}){if(i=Object.assign({},r,i),!e||"string"!=typeof e)return e;let a=e.trim();if(void 0!==i.skipLike&&i.skipLike.test(a))return e;if(i.hex&&t.test(a))return Number.parseInt(a,16);{let s=n.exec(a);if(!s)return e;{let l=s[1],u=s[2],c=o(s[3]),d=s[4]||s[6];if(!i.leadingZeros&&u.length>0&&l&&"."!==a[2])return e;{if(!i.leadingZeros&&u.length>0&&!l&&"."!==a[1])return e;let h=Number(a),f=""+h;return -1!==f.search(/[eE]/)||d?i.eNotation?h:e:-1!==a.indexOf(".")?"0"===f&&""===c?h:f===c?h:l&&f==="-"+c?h:e:u?c===f?h:l+c===f?h:e:a===f?h:a===l+f?h:e}}}}function o(e){return e&&-1!==e.indexOf(".")&&("."===(e=e.replace(/0+$/,""))?e="0":"."===e[0]?e="0"+e:"."===e[e.length-1]&&(e=e.substr(0,e.length-1))),e}e.exports=i},9453:function(e,t,n){"use strict";n.d(t,{Ni:function(){return eN},f6:function(){return eP},vJ:function(){return eM},iv:function(){return eb},ZP:function(){return eV},F4:function(){return eL}});var r=n(8570),i=n(2784),o=n(8665),a=n.n(o),s=function(e){function t(e,r,l,u,c){for(var f,p,m,g,v,x=0,S=0,_=0,O=0,E=0,C=0,I=m=f=0,j=0,L=0,V=0,B=0,U=l.length,q=U-1,F="",Z="",z="",H="";j<U;){if(p=l.charCodeAt(j),j===q&&0!==S+O+_+x&&(0!==S&&(p=47===S?10:47),O=_=x=0,U++,q++),0===S+O+_+x){if(j===q&&(0<L&&(F=F.replace(h,"")),0<F.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:F+=l.charAt(j)}p=59}switch(p){case 123:for(f=(F=F.trim()).charCodeAt(0),m=1,B=++j;j<U;){switch(p=l.charCodeAt(j)){case 123:m++;break;case 125:m--;break;case 47:switch(p=l.charCodeAt(j+1)){case 42:case 47:e:{for(I=j+1;I<q;++I)switch(l.charCodeAt(I)){case 47:if(42===p&&42===l.charCodeAt(I-1)&&j+2!==I){j=I+1;break e}break;case 10:if(47===p){j=I+1;break e}}j=I}}break;case 91:p++;case 40:p++;case 34:case 39:for(;j++<q&&l.charCodeAt(j)!==p;);}if(0===m)break;j++}if(m=l.substring(B,j),0===f&&(f=(F=F.replace(d,"").trim()).charCodeAt(0)),64===f){switch(0<L&&(F=F.replace(h,"")),p=F.charCodeAt(1)){case 100:case 109:case 115:case 45:L=r;break;default:L=D}if(B=(m=t(r,L,m,p,c+1)).length,0<R&&(L=n(D,F,V),v=s(3,m,L,r,A,T,B,p,c,u),F=L.join(""),void 0!==v&&0===(B=(m=v.trim()).length)&&(p=0,m="")),0<B)switch(p){case 115:F=F.replace(k,a);case 100:case 109:case 45:m=F+"{"+m+"}";break;case 107:m=(F=F.replace(y,"$1 $2"))+"{"+m+"}",m=1===P||2===P&&o("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=F+m,112===u&&(Z+=m,m="")}else m=""}else m=t(r,n(r,F,V),m,u,c+1);z+=m,m=V=L=I=f=0,F="",p=l.charCodeAt(++j);break;case 125:case 59:if(1<(B=(F=(0<L?F.replace(h,""):F).trim()).length))switch(0===I&&(45===(f=F.charCodeAt(0))||96<f&&123>f)&&(B=(F=F.replace(" ",":")).length),0<R&&void 0!==(v=s(1,F,r,e,A,T,Z.length,u,c,u))&&0===(B=(F=v.trim()).length)&&(F="\0\0"),f=F.charCodeAt(0),p=F.charCodeAt(1),f){case 0:break;case 64:if(105===p||99===p){H+=F+l.charAt(j);break}default:58!==F.charCodeAt(B-1)&&(Z+=i(F,f,p,F.charCodeAt(2)))}V=L=I=f=0,F="",p=l.charCodeAt(++j)}}switch(p){case 13:case 10:47===S?S=0:0===1+f&&107!==u&&0<F.length&&(L=1,F+="\0"),0<R*M&&s(0,F,r,e,A,T,Z.length,u,c,u),T=1,A++;break;case 59:case 125:if(0===S+O+_+x){T++;break}default:switch(T++,g=l.charAt(j),p){case 9:case 32:if(0===O+x+S)switch(E){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===O+S+x&&(L=V=1,g="\f"+g);break;case 108:if(0===O+S+x+N&&0<I)switch(j-I){case 2:112===E&&58===l.charCodeAt(j-3)&&(N=E);case 8:111===C&&(N=C)}break;case 58:0===O+S+x&&(I=j);break;case 44:0===S+_+O+x&&(L=1,g+="\r");break;case 34:case 39:0===S&&(O=O===p?0:0===O?p:O);break;case 91:0===O+S+_&&x++;break;case 93:0===O+S+_&&x--;break;case 41:0===O+S+x&&_--;break;case 40:0===O+S+x&&(0===f&&(2*E+3*C==533||(f=1)),_++);break;case 64:0===S+_+O+x+I+m&&(m=1);break;case 42:case 47:if(!(0<O+x+_))switch(S){case 0:switch(2*p+3*l.charCodeAt(j+1)){case 235:S=47;break;case 220:B=j,S=42}break;case 42:47===p&&42===E&&B+2!==j&&(33===l.charCodeAt(B+2)&&(Z+=l.substring(B,j+1)),g="",S=0)}}0===S&&(F+=g)}C=E,E=p,j++}if(0<(B=Z.length)){if(L=r,0<R&&void 0!==(v=s(2,Z,L,e,A,T,B,u,c,u))&&0===(Z=v).length)return H+Z+z;if(Z=L.join(",")+"{"+Z+"}",0!=P*N){switch(2!==P||o(Z,2)||(N=0),N){case 111:Z=Z.replace(w,":-moz-$1")+Z;break;case 112:Z=Z.replace(b,"::-webkit-input-$1")+Z.replace(b,"::-moz-$1")+Z.replace(b,":-ms-input-$1")+Z}N=0}}return H+Z+z}function n(e,t,n){var i=t.trim().split(g);t=i;var o=i.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<o;++s)t[s]=r(e,t[s],n).trim();break;default:var l=s=0;for(t=[];s<o;++s)for(var u=0;u<a;++u)t[l++]=r(e[u]+" ",i[s],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(v,"$1"+e.trim());case 58:return e.trim()+t.replace(v,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(v,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,n,r){var a=e+";",s=2*t+3*n+4*r;if(944===s){e=a.indexOf(":",9)+1;var l=a.substring(e,a.length-1).trim();return l=a.substring(0,e).trim()+l+";",1===P||2===P&&o(l,1)?"-webkit-"+l+l:l}if(0===P||2===P&&!o(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(C,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(l=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+l+a;case 1005:return p.test(a)?a.replace(f,":-webkit-")+a.replace(f,":-moz-")+a:a;case 1e3:switch(t=(l=a.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=a.replace(x,"tb");break;case 232:l=a.replace(x,"tb-rl");break;case 220:l=a.replace(x,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+l+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(l=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:a=a.replace(l,"-webkit-"+l)+";"+a;break;case 207:case 102:a=a.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(l,"-webkit-"+l)+";"+a.replace(l,"-ms-"+l+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return l=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+l+"-ms-flex-"+l+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(_,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(_,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===E.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):a.replace(l,"-webkit-"+l)+a.replace(l,"-moz-"+l.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===n+r&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+a}return a}function o(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),j(2!==t?r:r.replace(O,"$1"),n,t)}function a(e,t){var n=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(S," or ($1)").substring(4):"("+t+")"}function s(e,t,n,r,i,o,a,s,l,u){for(var d,h=0,f=t;h<R;++h)switch(d=I[h].call(c,e,f,n,r,i,o,a,s,l,u)){case void 0:case!1:case!0:case null:break;default:f=d}if(f!==t)return f}function l(e){switch(e){case void 0:case null:R=I.length=0;break;default:if("function"==typeof e)I[R++]=e;else if("object"==typeof e)for(var t=0,n=e.length;t<n;++t)l(e[t]);else M=0|!!e}return l}function u(e){return void 0!==(e=e.prefix)&&(j=null,e?"function"!=typeof e?P=1:(P=2,j=e):P=0),u}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[L=r],0<R){var i=s(-1,n,r,r,A,T,0,0,0,0);void 0!==i&&"string"==typeof i&&(n=i)}var o=t(D,r,n,0,0);return 0<R&&void 0!==(i=s(-2,o,r,r,A,T,o.length,0,0,0))&&(o=i),L="",N=0,T=A=1,o}var d=/^\0+/g,h=/[\0\r\f]/g,f=/: */g,p=/zoo|gra/,m=/([,: ])(transform)/g,g=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,w=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,_=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,E=/stretch|:\s*\w+\-(?:conte|avail)/,C=/([^-])(image-set\()/,T=1,A=1,N=0,P=1,D=[],I=[],R=0,j=null,M=0,L="";return c.use=l,c.set=u,void 0!==e&&u(e),c},l={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},u=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}(function(e){return u.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)}),d=n(3463),h=n.n(d),f=n(4406);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},g=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,r.typeOf)(e)},v=Object.freeze([]),y=Object.freeze({});function b(e){return"function"==typeof e}function w(e){return e.displayName||e.name||"Component"}function x(e){return e&&"string"==typeof e.styledComponentId}var k=void 0!==f&&(f.env.REACT_APP_SC_ATTR||f.env.SC_ATTR)||"data-styled",S="undefined"!=typeof window&&"HTMLElement"in window,_=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==f&&void 0!==f.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==f.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==f.env.REACT_APP_SC_DISABLE_SPEEDY&&f.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==f&&void 0!==f.env.SC_DISABLE_SPEEDY&&""!==f.env.SC_DISABLE_SPEEDY&&"false"!==f.env.SC_DISABLE_SPEEDY&&f.env.SC_DISABLE_SPEEDY),O={};function E(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var C=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)(i<<=1)<0&&E(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=0,l=t.length;s<l;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+=this.tag.getRule(o)+"/*!sc*/\n";return t},e}(),T=new Map,A=new Map,N=1,P=function(e){if(T.has(e))return T.get(e);for(;A.has(N);)N++;var t=N++;return T.set(e,t),A.set(t,e),t},D=function(e){return A.get(e)},I=function(e,t){t>=N&&(N=t+1),T.set(e,t),A.set(t,e)},R="style["+k+'][data-styled-version="5.3.6"]',j=RegExp("^"+k+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),M=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},L=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(j);if(s){var l=0|parseInt(s[1],10),u=s[2];0!==l&&(I(u,l),M(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},V=function(){return n.nc},B=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(k))return r}}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(k,"active"),r.setAttribute("data-styled-version","5.3.6");var a=V();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},U=function(){function e(e){var t=this.element=B(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}E(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(n){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),q=function(){function e(e){var t=this.element=B(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),F=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Z=S,z={isServer:!S,useCSSOMInjection:!_},H=function(){function e(e,t,n){void 0===e&&(e=y),void 0===t&&(t={}),this.options=p({},z,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&S&&Z&&(Z=!1,function(e){for(var t=document.querySelectorAll(R),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute(k)&&(L(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return P(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(p({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){var e,t,n,r,i;return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,i=t.target,e=n?new F(i):r?new U(i):new q(i),new C(e)))},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(P(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(P(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(P(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=0;i<n;i++){var o=D(i);if(void 0!==o){var a=e.names.get(o),s=t.getGroup(i);if(a&&s&&a.size){var l=k+".g"+i+'[id="'+o+'"]',u="";void 0!==a&&a.forEach(function(e){e.length>0&&(u+=e+",")}),r+=""+s+l+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),$=/(a)(d)/gi,G=function(e){return String.fromCharCode(e+(e>25?39:97))};function W(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=G(t%52)+n;return(G(t%52)+n).replace($,"$1-$2")}var Y=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},K=function(e){return Y(5381,e)};function J(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!x(n))return!1}return!0}var X=K("5.3.6"),Q=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&J(e),this.componentId=t,this.baseHash=Y(X,t),this.baseStyle=n,H.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash){if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))i.push(this.staticRulesId);else{var o=ev(this.rules,e,t,n).join(""),a=W(Y(this.baseHash,o)>>>0);if(!t.hasNameForId(r,a)){var s=n(o,"."+a,void 0,r);t.insertRules(r,a,s)}i.push(a),this.staticRulesId=a}}else{for(var l=this.rules.length,u=Y(this.baseHash,n.hash),c="",d=0;d<l;d++){var h=this.rules[d];if("string"==typeof h)c+=h;else if(h){var f=ev(h,e,t,n),p=Array.isArray(f)?f.join(""):f;u=Y(u,p+d),c+=p}}if(c){var m=W(u>>>0);if(!t.hasNameForId(r,m)){var g=n(c,"."+m,void 0,r);t.insertRules(r,m,g)}i.push(m)}}return i.join(" ")},e}(),ee=/^\s*\/\/.*$/gm,et=[":","[",".","#"];function en(e){var t,n,r,i,o=void 0===e?y:e,a=o.options,l=void 0===a?y:a,u=o.plugins,c=void 0===u?v:u,d=new s(l),h=[],f=function(e){function t(t){if(t)try{e(t+"}")}catch(n){}}return function(n,r,i,o,a,s,l,u,c,d){switch(n){case 1:if(0===c&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(i[0]+r),"";default:return r+(0===d?"/*|*/":"")}case -2:r.split("/*|*/}").forEach(t)}}}(function(e){h.push(e)}),p=function(e,r,o){return 0===r&&-1!==et.indexOf(o[n.length])||o.match(i)?e:"."+t};function m(e,o,a,s){void 0===s&&(s="&");var l=e.replace(ee,""),u=o&&a?a+" "+o+" { "+l+" }":l;return t=s,r=RegExp("\\"+(n=o)+"\\b","g"),i=RegExp("(\\"+n+"\\b){2,}"),d(a||!o?"":o,u)}return d.use([].concat(c,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(n)>0&&(i[0]=i[0].replace(r,p))},f,function(e){if(-2===e){var t=h;return h=[],t}}])),m.hash=c.length?c.reduce(function(e,t){return t.name||E(15),Y(e,t.name)},5381).toString():"",m}var er=i.createContext(),ei=(er.Consumer,i.createContext()),eo=(ei.Consumer,new H),ea=en();function es(){return(0,i.useContext)(er)||eo}function el(){return(0,i.useContext)(ei)||ea}function eu(e){var t=(0,i.useState)(e.stylisPlugins),n=t[0],r=t[1],o=es(),s=(0,i.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,i.useMemo)(function(){return en({options:{prefix:!e.disableVendorPrefixes},plugins:n})},[e.disableVendorPrefixes,n]);return(0,i.useEffect)(function(){a()(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]),i.createElement(er.Provider,{value:s},i.createElement(ei.Provider,{value:l},e.children))}var ec=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ea);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return E(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ea),this.name+e.hash},e}(),ed=/([A-Z])/,eh=/([A-Z])/g,ef=/^ms-/,ep=function(e){return"-"+e.toLowerCase()};function em(e){return ed.test(e)?e.replace(eh,ep).replace(ef,"-ms-"):e}var eg=function(e){return null==e||!1===e||""===e};function ev(e,t,n,r){if(Array.isArray(e)){for(var i,o,a=[],s=0,u=e.length;s<u;s+=1)""!==(o=ev(e[s],t,n,r))&&(Array.isArray(o)?a.push.apply(a,o):a.push(o));return a}return eg(e)?"":x(e)?"."+e.styledComponentId:b(e)?"function"!=typeof(i=e)||i.prototype&&i.prototype.isReactComponent||!t?e:ev(e(t),t,n,r):e instanceof ec?n?(e.inject(n,r),e.getName(r)):e:g(e)?function e(t,n){var r,i,o=[];for(var a in t)t.hasOwnProperty(a)&&!eg(t[a])&&(Array.isArray(t[a])&&t[a].isCss||b(t[a])?o.push(em(a)+":",t[a],";"):g(t[a])?o.push.apply(o,e(t[a],a)):o.push(em(a)+": "+(r=a,null==(i=t[a])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||r in l?String(i).trim():i+"px")+";"));return n?[n+" {"].concat(o,["}"]):o}(e):e.toString()}var ey=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function eb(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||g(e)?ey(ev(m(v,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:ey(ev(m(e,n)))}var ew=function(e,t,n){return void 0===n&&(n=y),e.theme!==n.theme&&e.theme||t||n.theme},ex=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ek=/(^-|-$)/g;function eS(e){return e.replace(ex,"-").replace(ek,"")}var e_=function(e){return W(K(e)>>>0)};function eO(e){return"string"==typeof e}var eE=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},eC=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function eT(e,t,n){var r=e[n];eE(t)&&eE(r)?eA(r,t):e[n]=t}function eA(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(eE(a))for(var s in a)eC(s)&&eT(e,a[s],s)}return e}var eN=i.createContext();function eP(e){var t=(0,i.useContext)(eN),n=(0,i.useMemo)(function(){return function(e,t){return e?b(e)?e(t):Array.isArray(e)||"object"!=typeof e?E(8):t?p({},t,{},e):e:E(14)}(e.theme,t)},[e.theme,t]);return e.children?i.createElement(eN.Provider,{value:n},e.children):null}eN.Consumer;var eD={};function eI(e,t,n){var r=x(e),o=!eO(e),a=t.attrs,s=void 0===a?v:a,l=t.componentId,u=void 0===l?function(e,t){var n="string"!=typeof e?"sc":eS(e);eD[n]=(eD[n]||0)+1;var r=n+"-"+e_("5.3.6"+n+eD[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):l,d=t.displayName,f=void 0===d?function(e){return eO(e)?"styled."+e:"Styled("+w(e)+")"}(e):d,m=t.displayName&&t.componentId?eS(t.displayName)+"-"+t.componentId:t.componentId||u,g=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(n,r,i){return e.shouldForwardProp(n,r,i)&&t.shouldForwardProp(n,r,i)}:e.shouldForwardProp);var S,_=new Q(n,m,r?e.componentStyle:void 0),O=_.isStatic&&0===s.length,E=function(e,t){return function(e,t,n,r){var o=e.attrs,a=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,u=e.shouldForwardProp,d=e.styledComponentId,h=e.target,f=function(e,t,n){void 0===e&&(e=y);var r=p({},t,{theme:e}),i={};return n.forEach(function(e){var t,n,o,a=e;for(t in b(a)&&(a=a(r)),a)r[t]=i[t]="className"===t?(n=i[t],o=a[t],n&&o?n+" "+o:n||o):a[t]}),[r,i]}(ew(t,(0,i.useContext)(eN),s)||y,t,o),m=f[0],g=f[1],v=function(e,t,n,r){var i=es(),o=el();return t?e.generateAndInjectStyles(y,i,o):e.generateAndInjectStyles(n,i,o)}(a,r,m,0),w=n,x=g.$as||t.$as||g.as||t.as||h,k=eO(x),S=g!==t?p({},t,{},g):t,_={};for(var O in S)"$"!==O[0]&&"as"!==O&&("forwardedAs"===O?_.as=S[O]:(u?u(O,c,x):!k||c(O))&&(_[O]=S[O]));return t.style&&g.style!==t.style&&(_.style=p({},t.style,{},g.style)),_.className=Array.prototype.concat(l,d,v!==d?v:null,t.className,g.className).filter(Boolean).join(" "),_.ref=w,(0,i.createElement)(x,_)}(S,e,t,O)};return E.displayName=f,(S=i.forwardRef(E)).attrs=g,S.componentStyle=_,S.displayName=f,S.shouldForwardProp=k,S.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):v,S.styledComponentId=m,S.target=r?e.target:e,S.withComponent=function(e){var r=t.componentId,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(t,["componentId"]),o=r&&r+"-"+(eO(e)?e:eS(w(e)));return eI(e,p({},i,{attrs:g,componentId:o}),n)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=r?eA({},e.defaultProps,t):t}}),S.toString=function(){return"."+S.styledComponentId},o&&h()(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var eR=function(e){return function e(t,n,i){if(void 0===i&&(i=y),!(0,r.isValidElementType)(n))return E(1,String(n));var o=function(){return t(n,i,eb.apply(void 0,arguments))};return o.withConfig=function(r){return e(t,n,p({},i,{},r))},o.attrs=function(r){return e(t,n,p({},i,{attrs:Array.prototype.concat(i.attrs,r).filter(Boolean)}))},o}(eI,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){eR[e]=eR(e)});var ej=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=J(e),H.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var i=r(ev(this.rules,t,n,r).join(""),""),o=this.componentId+e;n.insertRules(o,o,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&H.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function eM(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=eb.apply(void 0,[e].concat(n)),a="sc-global-"+e_(JSON.stringify(o)),s=new ej(o,a);function l(e){var t=es(),n=el(),r=(0,i.useContext)(eN),o=(0,i.useRef)(t.allocateGSInstance(a)).current;return t.server&&u(o,e,t,r,n),(0,i.useLayoutEffect)(function(){if(!t.server)return u(o,e,t,r,n),function(){return s.removeStyles(o,t)}},[o,e,t,r,n]),null}function u(e,t,n,r,i){if(s.isStatic)s.renderStyles(e,O,n,i);else{var o=p({},t,{theme:ew(t,r,l.defaultProps)});s.renderStyles(e,o,n,i)}}return i.memo(l)}function eL(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=eb.apply(void 0,[e].concat(n)).join(""),o=e_(i);return new ec(o,i)}!function(){var e=(function(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=V();return"<style "+[n&&'nonce="'+n+'"',k+'="true"','data-styled-version="5.3.6"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?E(2):e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)return E(2);var t,n=((t={})[k]="",t["data-styled-version"]="5.3.6",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=V();return r&&(n.nonce=r),[i.createElement("style",p({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new H({isServer:!0}),this.sealed=!1}).prototype;e.collectStyles=function(e){return this.sealed?E(2):i.createElement(eu,{sheet:this.instance},e)},e.interleaveWithNodeStream=function(e){return E(3)}}();var eV=eR},3857:function(e){!function(t,n){e.exports=n()}(0,function(){return new(function(){function e(){}return e.prototype.all=function(e){var t=this;return Promise.all(e.map(function(e){switch(e.split(".").pop().toLowerCase()){case"css":return t.css(e);case"js":return t.js(e);default:return Promise.reject(Error("Unable to detect extension of '"+e+"'"))}}))},e.prototype.css=function(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,document.querySelector("head").appendChild(t),this.promise(t)},e.prototype.js=function(e){var t=document.createElement("script");return t.src=e,document.querySelector("head").appendChild(t),this.promise(t)},e.prototype.promise=function(e){return new Promise(function(t,n){e.addEventListener("load",function(){t(e)}),e.addEventListener("error",function(){n()})})},e}())})},6522:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return r}})},2228:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})},9521:function(e){"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6570),t(2203)}),_N_E=e.O()}]);