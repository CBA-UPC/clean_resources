@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

body {
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
}

.adxad-container {
  position: relative;
  display: initial;
}

.adxad-watermark {
  opacity: .4;
  z-index: 2147483647 !important;
  text-align: right;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
  padding: 3px;

  transition: all .15s ease;
  -webkit-transition: all .15s ease;
  -o-transition: all .15s ease;
  -moz-transition: all .15s ease;

  background: #333;
  background: -moz-linear-gradient(top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.7) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.7) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#33000000', endColorstr='#b3000000',GradientType=0 ); /* IE6-9 */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  text-decoration: none;
  font-size: 14px;
}

.adxad-watermark:hover {
  opacity: 1;
  text-decoration: none;
  color: #f03c30;
  background: #000;
  background: -moz-linear-gradient(top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.5) 0%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80000000', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
}

