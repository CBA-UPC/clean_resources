<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <script>
   atch(/quantum-(\w+)-worker/);
if(d&&d[1]){var e=new Worker("quantum-"+d[1]+"-worker.js");e.onerror=function(a){console.error("Quantum Web Worker error:",a)};e.addEventListener("message",function(a){var b=a.data;b&&"object"==typeof b&&"quantum_worker"==b.namespace&&c.postMessage(a.data,"*")});window.addEventListener("message",function(a){var b=a.data;b&&"object"==typeof b&&"quantum_worker"==b.namespace&&e.postMessage(a.data)});e.postMessage({action:"install",namespace:"quantum_worker",token:Date.now()})}else throw Error("Invalid setup for worker-frame");

        </script>
    </head>
    <body>
    </body>
</html>play: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 1rem 1.5rem;
}

@media (min-width: 64.25rem) {
  .c-top-banner__inner {
    padding: 0.5rem 1.875rem;
  }
}

.c-top-banner__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: inherit;
}

@media (min-width: 64.25rem) {
  .c-top-banner__content {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
  }
}

.c-top-banner__actions {
  -ms-flex-negative: 0;
      flex-shrink: 0;
  margin-left: 1rem;
}

.c-top-banner__meta {
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: baseline;
      -ms-flex-align: baseline;
          align-items: baseline;
  padding-bottom: 0.8rem;
  margin-bottom: 0.6rem;
  margin-right: 2rem;
}

@media (min-width: 64.25rem) {
  .c-top-banner__meta {
    -ms-flex-negative: 0;
        flex-shrink: 0;
    padding-bottom: 0;
    padding-right: 0.8rem;
    margin-bottom: 0;
    margin-right: 0.6rem;
  }
}

.c-top-banner__meta::after {
  content: ' ';
  position: absolute;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: .125rem;
  background-color: currentColor;
  opacity: 0.4;
}

@media (min-width: 64.25rem) {
  .c-top-banner__meta::after {
    top: 0;
    right: 0;
    bottom: 0;
    left: auto;
    width: .125rem;
    height: 100%;
  }
}

.c-top-banner__meta .e-icon {
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.5rem;
}

.c-top-banner__text {
  width: 100%;
}

@media (min-width: 64.25rem) {
  .c-top-banner__text {
    width: auto;
  }
}

.c-top-banner--system {
  border-bottom: 3px solid #cdcdcd;
}

.c-top-banner--tout .c-top-banner__inner {
  -webkit-box-align: baseline;
      -ms-flex-align: baseline;
          align-items: baseline;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.c-top-banner--tout .c-top-banner__actions {
  position: absolute;
  right: 1.5rem;
  margin-left: 1.25rem;
  -webkit-transform: translateY(0.2ex);
          transform: translateY(0.2ex);
}

@media (min-width: 64.25rem) {
  .c-top-banner--tout .c-top-banner__actions {
    position: static;
  }
}

.c-top-banner--bg-yellow {
  background-color: #fdb913;
}

.c-top-banner--bg-orange {
  background-color: #f36f21;
}

.c-top-banner--bg-red {
  background-color: #c9234a;
}

.c-top-banner--bg-purple {
  background-color: #645faa;
}

.c-top-banner--bg-blue {
  background-color: #0089cf;
}

.c-top-banner--bg-green {
  background-color: #0db14b;
}

.c-top-banner--fg-black {
  color: #000;
}

.c-top-banner--fg-dark {
  color: #000;
}

.c-top-banner--fg-light {
  color: #fff;
}

.c-top-banner--fg-white {
  color: #fff;
}

.c-top-banner--fg-info {
  color: #0089cf;
}

.c-top-banner--fg-on-info {
  color: #fff;
}

.c-top-banner--fg-warning {
  color: #f36f21;
}

.c-top-banner--fg-on-warning {
  color: #000;
}

.c-top-banner--fg-alert {
  color: #c9234a;
}

.c-top-banner--fg-on-alert {
  color: #fff;
}

.c-top-banner--fg-success {
  color: #0db14b;
}

.c-top-banner--fg-on-success {
  color: #fff;
}