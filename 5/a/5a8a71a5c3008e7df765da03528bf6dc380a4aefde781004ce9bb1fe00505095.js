@import url(//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,400,300,700,600);
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  width: 100%;
  line-height: 1;
  word-wrap: break-word;
  background: white;
}

body, td, tr, th, table {
  color: #2c2c2c;
  font-size: 15px;
  line-height: 130%;
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  text-align: left;
}

footer .inner, .title-area .inner, #main-content > .inner, .home-banner .inner {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}

a:link, a:visited, a:hover {
  color: #386cbd;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

/**************************************************************************************************/
/*                                            Page Content                                        */
/**************************************************************************************************/
.content {
  max-width: 750px;
  margin: 0 auto;
  padding: 20px;
}

.content p {
  margin-top: 0;
}

#logo-popup img {
  max-width: 120px;
  margin-bottom: 5px;
  height: auto;
}

.top-section {
  margin-top: 10px;
  padding-bottom: 0px;
}

.top-section p {
  font-size: 14px;
  line-height: 19px;
}

.marketers-section {
  padding: 20px;
  border: 1px solid #ddd;
  margin-top: 15px;
}

.marketers-section h2 {
  color: #386cbd;
  font-size: 21px;
  font-weight: 200;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
}

.marketers-section .get-started {
  text-align: center;
}

.marketers-section .button-large {
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  display: inline-block;
  border: 1px solid #386cbd;
  padding: 5px 20px;
  border-radius: 5px;
  transition: 300ms;
}

.marketers-section .button-large:hover {
  background: #386cbd;
  color: white;
}

.adchoices-section {
  overflow: hidden;
  margin-top: 20px;
}

.adchoices-section p {
  margin-top: 0;
}

.adchoices-section .adchoice-logo {
  float: left;
  width: 25px;
  height: auto;
  margin-right: 10px;
  margin-top: 0px;
}

.adchoices-section .left-col {
  font-size: 12px;
  margin-bottom: 10px;
  line-height: 120%;
}

.adchoices-section .right-col {
  font-size: 12px;
  line-height: 120%;
}

.adchoices-section .right-col .logo {
  max-width: 70px;
  height: auto;
  display: block;
}

.adchoices-section .right-col .partner-link {
  font-size: 12px;
  text-align: center;
}

.adchoices-section .right-col .criteo-logo {
  margin-right: 5px;
}

.adchoices-section .right-col h5 {
  font-size: 12px;
  margin: 0;
}

.adchoices-section .right-col p {
  margin-top: 0;
}

.footer {
  margin-top: 10px;
  font-size: 11px;
  border-top: 1px solid #ddd;
  padding-top: 5px;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.footer .privacy,
.footer .learn-more {
  color: #386cbd;
  text-decoration: none;
}

.footer a {
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  font-weight: normal;
}


.text-section {
  font-size: 14px;
  line-height: 16px;
}
