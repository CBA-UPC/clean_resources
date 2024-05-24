/* Space out content a bit */
body {
  padding-bottom: 20px;
    font-family: "Helvetica Neue";
    font-weight: 100;
    letter-spacing: .25px;
    margin-left: auto;
    margin-right: auto;
}

/* GIF on Modal */

.gif-modal {
    width:100%;
}
/* Everything but the jumbotron gets side spacing for mobile first views */
.bgtexture {
  width: 100%;
}




.herotxt {
  margin-top: 20px;
  text-align: center;
  padding: 15px;
  color: white;
}

.herotxt .logo {
  margin: auto;
}

.heroimage {
  text-align: center;
  padding-right: 36px;
}
.heroimage img {
  max-height: 250px;
}

@media screen and (min-width: 992px) {
  .heroimage {
    text-align: right;
  }
  .heroimage img {
    max-height: 350px;
  }

  .herotxt {
    text-align: left;
  }

  .herotxt .logo {
    margin: inherit;
    max-width: 450px;
  }


  .aggiemobile .headerbutton {
    text-align: left;
  }
}

@media screen and (min-width: 420px) {

  .questions-image {
    max-width: 300px;
    margin: auto;
  }
}

.container{
padding-bottom: 30px;
padding-top: 50px;}

.aggiemobile{
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    line-height: 26px;
    letter-spacing: 1.45px;
    background-image: url(images/background_blue.png);
    background-color: #37658F;
}

.aggiemobile p {

   font-size: 18px;
    padding-top: 7px;
    padding-left: 5px;
    line-height: 26px;



}

.aggiemobile h1 img{
    font-size: 20px;
    width: 100%;
    height: 400px;
    line-height: 30px;

}





.footerbutton{
    text-align: center;
    background-image:url(images/background_blue_footer.png);
    padding-top: 30px;
    padding-bottom: 60px;
    margin-top: 20px;

   }
.footerbutton header{

    padding-left: 25px;
    padding-right: 25px;
    margin-top: 40px;
    text-align: center;}

.footerbutton p{
    color: white;
    font-size: 18px;
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 10px;
    text-align: center;}

.headerbutton{
    text-align: center;
    margin-left: 20px;
    margin-top: :10px;

   }
.contacttext{
  font-weight: 200;
}


.centercontent{
text-align: center;}

.centercontent img{
margin-bottom: 5px;}

.title-container .col-md-4 {margin-top: 50px;}



.header,
.marketing,
.footer {
  padding-right: 50px;
  padding-left: 50px;
}



/* Custom page header */
.header {
  border-bottom: 1px solid #e5e5e5;
}
/* Make the masthead heading the same height as the navigation */
.header h3 {
  padding-bottom: 19px;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 40px;
}

/* Custom page footer */
.footer {
  padding-top: 19px;
  color: #777;
  border-top: 1px solid #e5e5e5;
}

/* Customize container */
.container {
  background-color: 37658F;

}
.container-narrow > hr {
  margin: 30px 0;
}

/* Main marketing message and sign up button */
.jumbotron {
  text-align: center;
  background-color: white;
  border-bottom: 1px solid #e5e5e5;
}
.jumbotron .btn {
  padding: 14px 24px;
  font-size: 21px;
}

/* Supporting marketing content */
.marketing {
  margin: 40px 0;
}
.marketing p + h4 {
  margin-top: 28px;
}

/* Responsive: Portrait tablets and up */
@media screen and (min-width: 768px) {
  /* Remove the padding we set earlier */
  .header,
  .marketing,
  .footer {
    padding-right: 0;
    padding-left: 0;
  }
  /* Space out the masthead */
  .header {
    margin-bottom: 30px;
  }
  /* Remove the bottom border on the jumbotron for visual effect */
  .jumbotron {
    border-bottom: 0;
  }
}

.jumbotron h1 {
    font-size: 50pt;

}

.title-container {
  margin-bottom: 2em;

}

.title-container p {
 letter-spacing: 1px;
 line-height:24px;
  font-size: 16px;

}

.title-container header {
  font-size: 24pt;
  letter-spacing: 3pt;
  font-weight: 200;
  text-align:center;

}

@media screen and (min-width: 768px) {
  .features-row .col-md-4 {
    height: 14em;
  }
}

.featureheader img {
  margin: auto;
}

.featureheader header{
  font-weight: 100;
  letter-spacing: 2px;
  font-size: 40px;
  color: grey;
  }

.questionheader header{
font-size: 60px;
color: white;}

.featurefooter footer{
text-align: center;}