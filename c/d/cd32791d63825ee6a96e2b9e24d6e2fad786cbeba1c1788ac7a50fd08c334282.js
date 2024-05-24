@charset "UTF-8";
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
  margin: 0px;
  padding: 0px;
  border: 0px;
  outline: 0px;
  vertical-align: baseline;
  background: transparent;
}

@font-face {
  font-family: 'IberPangeaText-Bold';
  src: url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Bold.eot?#iefix") format("embedded-opentype"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Bold.ttf") format("truetype"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Bold.woff2") format("woff2"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Bold.woff") format("woff");
  font-weight: normal;
}
@font-face {
  font-family: 'IberPangeaText-Light';
  src: url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Light.eot?#iefix") format("embedded-opentype"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Light.ttf") format("truetype"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Light.woff2") format("woff2"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Light.woff") format("woff");
  font-weight: normal;
}
@font-face {
  font-family: 'IberPangeaText-Medium';
  src: url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Medium.eot?#iefix") format("embedded-opentype"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Medium.ttf") format("truetype"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Medium.woff2") format("woff2"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Medium.woff") format("woff");
  font-weight: normal;
}
@font-face {
  font-family: 'IberPangeaText-Regular';
  src: url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Regular.eot?#iefix") format("embedded-opentype"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Regular.ttf") format("truetype"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Regular.woff2") format("woff2"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-Regular.woff") format("woff");
  font-weight: normal;
}
@font-face {
  font-family: 'IberPangeaText-SmBold';
  src: url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-SmBold.eot?#iefix") format("embedded-opentype"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-SmBold.ttf") format("truetype"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-SmBold.woff2") format("woff2"), url("https://s0.2mdn.net/creatives/assets/4916839/IberPangeaText-SmBold.woff") format("woff");
  font-weight: normal;
}

* {
  position: absolute;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  -webkit-backface-visibility: hidden;
}

br{
  position: relative;
}

span{
  position: relative;
  display: contents;
}

html, body, #main {
  margin: 0px;
  overflow: hidden;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

a{
  position: absolute;
  width: 100%;
  height: 100%;
}

#res{
  opacity:1;
  position:absolute;
  background:#00a443;
  width:100%;
  height:100%; 
  z-index: 5;
}  

#border{
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #000000;
  box-sizing: border-box;
}

#banner_group {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

#content{
  position: relative;
  width: 100%;
  height: 100%;
}

#frame1, #frame2{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#title{
  position: absolute;
  font-family: "IberPangeaText-Medium";
  font-size: 24px;
  line-height: 22px;
  letter-spacing: -1.1px;
  text-align: left;
  color: #00a443;
}

#image{
  position: absolute;
  width: 100%;
  height: 100%;
}

#background{
  position: absolute;
  width: 210px;
  height: 102px;
  border-radius: 6px;
  right: 11px;
  bottom: 0;
  z-index: 1;
}

#blue_bubble{
  position: absolute;
  width: 31px;
  height: 35px;
  border-radius: 6px;
  bottom: 60px;
  right: 0px;
  background-color: #0da9ff;
  z-index: 2;
}

#green_bubble{
  position: absolute;
  width: 36px;
  height: 44px;
  border-radius: 6px;
  bottom: 70px;
  right: 6px;
  background-color: #00a443;
  z-index: 3;
}

#orange_bubble{
  position: absolute;
  width: 97px;
  height: 77px;
  border-radius: 6px;
  bottom: 4px;
  left: 0px;
  background-color: #ff9c1a;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#promo_group{
  position: relative;
}

#promo_text_1{
  position: relative;
  font-family: "IberPangeaText-Regular";
  font-size: 10px;
  line-height: 8px;
  text-align: left;
  color: #ffffff;
}

#promo_group_2{
  position: relative;
  display: flex;
  flex-direction: column;
}

#promo_text_2{
  position: relative;
  font-family: "IberPangeaText-Bold";
  letter-spacing: -0.6px;
  font-size: 26px;
  line-height: 26px;
  text-align: left;
  color: #ffffff;
}

#promo_text_3{
  position: relative;
  font-family: "IberPangeaText-Regular";
  font-size: 10px;
  line-height: 9px;
  text-align: left;
  color: #ffffff;
}

#green_rect{
  position: absolute;
  width: 100%;
  height: 130px;
  border-radius: 6px;
  right: 0px;
  background-color: #00a443;
  bottom: 0px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#rtb{
  position: absolute;
  font-family: "IberPangeaText-Regular";
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #fff5ec;
  padding: 5px;
  top: 50%;
  transform: translate(0, -50%);
}

#rtb_dos{
  display: none;
  position: absolute;
  font-family: "IberPangeaText-Regular";
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #fff5ec;
  padding: 5px;
  top: 50%;
  transform: translate(0, -50%);
}

#cta_container{
  position: absolute;
  width: 142px;
  height: 30px;
  background-color: #fff5ec;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

#cta_text{
  position: relative;
  font-family: "IberPangeaText-Light";
  font-size: 12px;
  line-height: 29px;
  text-align: center;
  color: #00402a;
}

#cta_arrow{
  position: relative;
  height: 9px;
  padding-left: 4px;
}

#orange_bubble_2{
  position: absolute;
  width: 80px;
  height: 36px;
  border-radius: 6px;
  top: 0px;
  left: 20px;
  background-color: #ff9c1a;
  z-index: 3;
}

#text_bubble_2{
  position: absolute;
  font-family: "IberPangeaText-Medium";
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.6px;
  text-align: left;
  color: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#blue_bubble_2{
  display: none;
  z-index: 1;
}

#logos{
  position: relative;
  width: 100%;
  height: 49px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}

#logo_patrocinio{
  position: relative;
  width: 97px;
  height: 49px;
}

#logo_iberdrola{
  position: relative;
  width: 132px;
  height: 32px;
}


@media (min-width: 290px) and (min-height: 500px) and (orientation:portrait){
  
  #title{
    font-size: 35px;
    line-height: 34px;
  }
  
  #background{
    width: 260px;
    height: 346px;
    border-radius: 10px;
    right: 0px;
    bottom: 24px;
  }

  #blue_bubble{
    width: 85px;
    height: 62px;
    border-radius: 10px;
    bottom: 326px;
    right: 14px;
  }

  #green_bubble{
    width: 107px;
    height: 66px;
    border-radius: 10px;
    bottom: 291px;
    right: 33px;
  }

  #orange_bubble{
    width: 125px;
    height: 124px;
    border-radius: 10px;
    bottom: 0;
    left: 23px;
  }

  #promo_text_1{
    font-size: 12px;
    line-height: 10px;
  }

  #promo_text_2{
    position: relative;
    font-family: "IberPangeaText-Bold";
    font-size: 46px;
    line-height: 46px;
    text-align: left;
    color: #ffffff;
  }

  #promo_text_3{
    font-size: 12px;
    line-height: 12px;
  }
  
  #green_rect{
    height: 421px;
    border-radius: 10px;
    bottom: 16px;
  }

  #rtb{
    position: relative;
    font-size: 27px;
    line-height: 27px;
    top: 37px;
    transform: translate(0,0);
    height: 69%;
    display: flex;
    align-items: center;
  }
  
  #cta_container{
    width: 156px;
    height: 40px;
    top: auto;
    left: 50%;
    transform: translate(-50%,0);
    bottom: 44px;
  }

  #cta_text{
    line-height: 39px;
  }

  #orange_bubble_2{
    width: 119px;
    height: 80px;
    border-radius: 10px;
    top: 20px;
    left: 20px;
  }

  #text_bubble_2{
    font-size: 23px;
    line-height: 21px;
  }

  #blue_bubble_2{
    display: block;
    position: absolute;
    width: 78px;
    height: 64px;
    border-radius: 10px;
    background-color: #0da9ff;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  
  #logos{
    height: 50px;
    padding-top: 10px;
  }

  #logo_patrocinio{
    width: 99px;
    height: 50px;
  }

  #logo_iberdrola{
    width: 135px;
    height: 33px;
  }
}

@media (min-width: 300px) and (max-height: 500px) and (orientation:portrait){
  
  #title{
    font-size: 35px;
    line-height: 34px;
  }
  
  #background{
    width: 280px;
    height: 222px;
    border-radius: 8px;
    right: 0px;
    bottom: 44px;
  }

  #blue_bubble{
    width: 62px;
    height: 45px;
    border-radius: 8px;
    bottom: 250px;
    right: 10px;
  }

  #green_bubble{
    width: 78px;
    height: 48px;
    border-radius: 8px;
    bottom: 224px;
    right: 23px;
  }

  #orange_bubble{
    width: 115px;
    height: 111px;
    border-radius: 8px;
    bottom: 0px;
    left: 17px;
  }
  
  #promo_text_1{
    font-size: 12px;
    line-height: 10px;
  }

  #promo_text_2{
    position: relative;
    font-family: "IberPangeaText-Bold";
    font-size: 46px;
    line-height: 46px;
    text-align: left;
    color: #ffffff;
  }

  #promo_text_3{
    font-size: 12px;
    line-height: 12px;
  }
  
  #green_rect{
    height: 317px;
    border-radius: 8px;
    bottom: 19px;
  }

  #rtb{
    position: relative;
    font-size: 22px;
    line-height: 22px;
    top: 34px;
    transform: translate(0,0);
    height: 63%;
    display: flex;
    align-items: center;
  }
  
  #cta_container{
    width: 156px;
    height: 40px;
    top: auto;
    left: 50%;
    transform: translate(-50%,0);
    bottom: 33px;
  }

  #cta_text{
    line-height: 39px;
  }

  #orange_bubble_2{
    width: 119px;
    height: 80px;
    border-radius: 8px;
    top: 0px;
    left: 30px;
  }

  #text_bubble_2{
    font-size: 23px;
    line-height: 21px;
  }

  #blue_bubble_2{
    display: block;
    position: absolute;
    width: 78px;
    height: 64px;
    border-radius: 8px;
    background-color: #0da9ff;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  
  #logos{
    height: 49px;
    padding-top: 9px;
  }
  
}

@media (min-width: 600px) and (max-height: 150px) and (orientation:landscape){
  
  #banner_group {
    padding: 10px 20px;
    flex-direction: row;
  }
  
  #frame1, #frame2{
    flex-direction: row;
    align-items: center;
  }

  #title{
    font-size: 22px;
    line-height: 20px;
  }

  #background{
    width: 196px;
    height: 70px;
    right: 13px;
  }

  #blue_bubble{
    width: 24px;
    height: 29px;
    top: 22px;
    right: 0px;
  }

  #green_bubble{
    width: 28px;
    height: 34px;
    top: 10px;
    right: 6px;
  }

  #orange_bubble{
    width: 156px;
    height: 49px;
    top: 10px;
    left: auto;
    right: 145px;
  }
  
  #promo_text_1{
    top: -3px;
  }

  #promo_group_2{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  #promo_text_2{
    font-size: 32px;
    line-height: 24px;
    padding-right: 2px;
  }

  #promo_text_3{
    font-size: 10px;
    line-height: 8px;
  }
  
  #green_rect{
    width: 447px;
    height: 100%;
  }

  #rtb{
    width: 58%;
    font-size: 14px;
    line-height: 14px;
    text-align: left;
    padding: 0;
    top: 50%;
    left: 64px;
    transform: translate(0, -50%);
    display: flex;
    justify-content: center;
  }
  
  #rtb_dos{
    display: block;
    width: 58%;
    font-size: 14px;
    line-height: 14px;
    text-align: left;
    padding: 0;
    top: 50%;
    left: 64px;
    transform: translate(0, -50%);
    display: flex;
    justify-content: center;
  }
  
  #cta_container{
    width: 110px;
    height: 24px;
    top: 50%;
    left: auto;
    transform: translate(0,-50%);
    right: 15px;
  }

  #cta_text{
    font-size: 10px;
    line-height: 23px;
  }

  #cta_arrow{
    height: 7px;
  }

  #orange_bubble_2{
    width: 80px;
    height: 36px;
    left: 0px;
    top: 50%;
    transform: translate(0%, -50%);
  }
  
  #logos{
    width: 208px;
    height: 100%;
    padding-top: 0px;
    padding-left: 17px;
  }

  #logo_patrocinio{
    width: 81px;
    height: 40px;
  }

  #logo_iberdrola{
    width: 110px;
    height: 27px;
    padding-left: 17px;
  }
}

@media (min-width: 800px) and (max-height: 300px) and (orientation:landscape){
  
  #banner_group {
    flex-direction: row;
  }
  
  #frame1, #frame2{
    flex-direction: row;
    align-items: center;
  }

  #title{
    font-size: 55px;
    line-height: 47px;
  }

  #background{
    width: 314px;
    height: 210px;
    border-radius: 10px;
    right: 20px;
  }

  #blue_bubble{
    width: 57px;
    height: 55px;
    border-radius: 10px;
    top: 72px;
    right: -25px;
  }

  #green_bubble{
    width: 59px;
    height: 74px;
    border-radius: 10px;
    top: 88px;
    right: -4px;
  }

  #orange_bubble{
    width: 145px;
    height: 135px;
    border-radius: 10px;
    top: 49px;
    left: auto;
    right: 233px;
  }

  #promo_text_1{
    font-size: 14px;
    line-height: 10px;
  }

  #promo_text_2{
    font-size: 54px;
    line-height: 54px;
  }

  #promo_text_3{
    font-size: 14px;
    line-height: 14px;
  }
  
  #green_rect{
    width: 688px;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #rtb{
    width: 63%;
    font-size: 23px;
    line-height: 25px;
    text-align: left;
    padding: 0;
    top: 50%;
    left: 40px;
    transform: translate(0, -50%);
    display: flex;
    justify-content: center;
  }
  
  #cta_container{
    width: 172px;
    height: 34px;
    top: 50%;
    left: auto;
    transform: translate(0,-50%);
    right: 44px;
  }

  #cta_text{
    font-size: 12px;
    line-height: 33px;
  }

  #cta_arrow{
    height: 9px;
  }

  #orange_bubble_2{
    width: 119px;
    height: 80px;
    border-radius: 10px;
    top: 37px;
    left: 0px;
  }

  #text_bubble_2{
    font-size: 23px;
    line-height: 21px;
  }
  
  #logos{
    width: 135px;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 0px;
    padding-left: 27px;
  }

  #logo_patrocinio{
    width: 99px;
    height: 50px;
  }

  #logo_iberdrola{
    width: 135px;
    height: 33px;
  }
}

@media (max-width: 330px) and (max-height: 150px) and (orientation:landscape){
  #banner_group {
    padding: 10px;
  }

  #title{
    font-size: 21px;
    line-height: 20px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  #background{
    width: 137px;
    height: 80px;
    border-radius: 6px;
    right: 15px;
  }

  #blue_bubble{
    width: 21px;
    height: 32px;
    top: 8px;
    right: 5px;
    z-index: 0;
  }

  #green_bubble{
    width: 35px;
    height: 40px;
    border-radius: 6px;
    top: 31px;
    left: 140px;
    z-index: 0;
  }

  #orange_bubble{
    width: 154px;
    height: 46px;
    top: 18px;
    left: 10px;
  }

  #promo_text_1{
    font-size: 11px;
    line-height: 10px;
  }

  #promo_group_2{
    flex-direction: row;
    align-items: flex-end;
  }

  #promo_text_2{
    font-size: 31px;
    line-height: 29px;
    padding-right: 3px;
  }
  
  #green_rect{
    height: 70px;
    right: 0px;
  }

  #rtb{
    height: 46px;
    font-size: 15px;
    line-height: 15px;
    padding: 0px;
    top: auto;
    bottom: 0;
    transform: translate(0, 0);
    display: flex;
    align-items: center;
  }

  #rtb_dos{
    height: 46px;
    font-size: 15px;
    line-height: 15px;
    padding: 0px;
    top: auto;
    bottom: 0;
    transform: translate(0, 0);
    display: flex;
    align-items: center;
  }

  #cta_container{
    width: 126px;
    height: 26px;
    top: auto;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%,0);
  }

  #cta_text{
    font-size: 10px;
    line-height: 25px;
  }

  #cta_arrow{
    height: 7px;
  }

  #orange_bubble_2{
    width: 64px;
    height: 34px;
    left: 14px;
  }

  #text_bubble_2{
    font-size: 12px;
    line-height: 12px;
  }
  
  #logos{
    position: absolute;
    width: 300px;
    height: 80px;
    padding-top: 0px;
  }

  #logo_patrocinio{
    width: 79px;
    height: 39px;
  }

  #logo_iberdrola{
    width: 126px;
    height: 31px;
  }
}
