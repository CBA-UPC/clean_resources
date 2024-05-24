document.write('<SCR' + 'IPT src="'+ location.protocol +'//img.ak.impact-ad.jp/bta/b/aone_combo_general.js"></SCR' + 'IPT>');
ents{
  background-color: #fff;
}
#paymethod .contentsh2.registHl {
  font-weight: bold;
  font-size: 250%;
  color: #505050;
  letter-spacing: 1px;
}
#paymethod a:visited,#paymethod a:link,#paymethod a:hover,#paymethod a:active {
  text-decoration: none;
}
#paymethod .contents .tipWm{
  z-index: 10;
}
/*.plan_select
-------------------------------- */
.plan_select ul{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 900px;
  margin: 60px auto 0;
}
.plan_select ul li{
  width: calc(100% / 2 - 20px);
}
.plan_select ul li input {
  display: none;
  vertical-align: middle;
  -webkit-appearance: none;
}
.plan_select ul li label {
  position: relative;
  display: block;
  text-align: center;
  padding: 30px 0 20px 10px;
  border: 2px solid #e5e4dd;
  border-radius: 7px;
  cursor: pointer;
}
.plan_select ul li input[type='radio']:checked + label {
  color: #fff;
  background-color: #3251bc;
}
.plan_select ul li .tag {
  position: absolute;
  display: block;
  font-size: 150%;
  font-weight: bold;
  line-height: 1;
  color: #ec7357;
  top: -34px;
  padding: 0 14px;
  right: 50%;
  -webkit-transform: translateX(50%);
  -ms-transform: translateX(50%);
  transform: translateX(50%);
}
.plan_select ul li .tag:before,
.plan_select ul li .tag:after{
  content: '';
  position: absolute;
  height: 34px;
  width: 4px;
  background-color: #ec7357;
  top: -6px;
}
.plan_select ul li .tag:before{
  right: 0;
  -webkit-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  transform: rotate(25deg);
}
.plan_select ul li .tag:after{
  left: 0;
  -webkit-transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  transform: rotate(-25deg);
}
.plan_select h3.plan {
  font-size: 130%;
  font-weight: bold;
}
.plan_select ul li label p {
  font-size: 190%;
  font-weight: bold;
}
.plan_select .price span.small {
  font-size: 60%;
}
.plan_select ul li label:before {
  content: "";
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  left: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 39px;
  background-color: #fff;
}
.plan_select ul li label:after {
  content: "";
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  left: 18px;
  border-radius: 114px;
  background-color: #eee;
}
.plan_select ul li input[type='radio']:checked + label:after {
  background-color: #3251bc;
}
/*.plan_detail
-------------------------------- */
.plan_detail {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 900px;
  margin: 50px auto 0;
  padding: 20px 0;
  border: 2px solid #e5e4dd;
  border-radius: 7px;
  align-items: center;
}
.plan_detail > div {
  width: calc(100% / 2);
  text-align: left;
  padding: 20px 0 20px 70px;
}
.plan_detail .PlanTitle {
  text-align: left;
  line-height: 1;
}
.plan_detail .PlanTitle h3 {
  font-size: 150%;
  font-weight: bold;
}
.plan_detail .PlanTitle .tag {
  display: inline-block;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  padding: 4px 10px;
  background-color: #e4e4e4;
  border-radius: 18px;
  margin-top: 6px;
}
.plan_detail .PlanTitle .tag + .tag{
  margin-left: 6px;
}
.plan_detail .price {
  font-size: 300%;
  font-weight: bold;
  padding-right: 50px;
  margin-top: 20px;
}
.month .plan_detail .price{
  margin-top: 10px;
}
.plan_detail .price span.small {
  font-size: 60%;
}
.plan_detail .notice {
  font-size: 61.11%;
  padding-right: 40px;
 /*margin-top: -38px;*/
  text-align: right;
  letter-spacing: -0.5px;
}
.plan_detail .notice span{
  color: #fe6a4d;
  font-size: 143.184%;
}
.plan_detail .credit_Benefits {
  position: relative;
  margin-top: 30px;
  font-size: 100%;
  padding-left: 30px;
}
.month .plan_detail .credit_Benefits{
  margin-top: 10px;
}
.plan_detail .credit_Benefits em {
  font-size: 184.623%;
  color: #fe6a4d;
  font-weight: bold;
}
.plan_detail .credit_Benefits em .small {
  font-size: 75%;
}
.plan_detail .credit_Benefits:before {
  content: '';
  width: 23px;
  height: 30px;
  background: url(/common/img/regist/icon_cashless.png) no-repeat 0 0;
  background-size: 23px auto;
  position: absolute;
  top: 60%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
}
.plan_detail .Benefits {
  border-left: solid 1px #e3e3e3;
  padding: 10px 0 10px 70px;
}
.plan_detail .Benefits li {
  text-align: left;
  font-weight: bold;
  font-size: 125%;
  line-height: 1.3;
  position: relative;
}
.plan_detail .Benefits li + li {
  margin-top: 20px;
}
.plan_detail .Benefits li.point {
  font-size: 112.5%;
  letter-spacing: -1px;
}
.plan_detail .Benefits li:before {
  content: '';
  position: absolute;
  width: 25px;
  height: 20px;
  background: url(https://imgzregist.netkeiba.com/common/img/premium_nk01/Icon_Select03.png) no-repeat;
  background-size: 25px auto;
  top: 0;
  left: -30px;
  background-position: 0px -50px;
}
.plan_detail .Benefits .tips {
  font-weight: normal;
  font-size: 70%;
}
.plan_detail .Benefits .tips em {
  font-weight: bold;
}
/*.pay_select
-------------------------------- */
.settleSelectArea.pay_select{
  padding: 0;
  margin: 0 auto;
  border: none;
}
.settleSelectArea .settleSelectContent{
  margin-top: 50px;
  position: relative;
}
.settleSelectArea .settleSelectContent:before,
.settleSelectArea .settleSelectContent:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc(50vw - 450px);
  background: #fee9e8;
}
.settleSelectArea .settleSelectContent:before {
  left: 100%;
}
.settleSelectArea .settleSelectContent:after {
  right: 100%;
}
.settleSelectArea.pay_select .card_tips {
  margin: 0px;
  color: #fefefe;
  display: inline-block;
  font-size: 150%;
  line-height: 1;
  padding: 14px 30px;
  font-weight: bold;
  text-align: center;
  height: auto;
  margin-top: 20px;
  border-radius: 30px;
  background-color: #d05049;
}
.settleSelectArea .settleSelectContent .settleSelectBox {
  background: #fff;
  position: relative;
  padding: 40px 20px 40px 30px;
  margin: 30px 20px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.settleSelectArea.pay_select .SelectPay_Txt{
  font-size: 75%;
  margin: 10px 26px 0 46px;
}
.settleSelectBox .button_box {
  position: relative;
  top: 10px;
}
.settleSelectBox .baloon {
  width: 132px;
  text-align: center;
  font-weight: bold;
  color: #3251bc;
  font-size: 87.5%;
  position: absolute;
  top: -17px;
  right: 50%;
  -webkit-transform: translateX(50%);
  -ms-transform: translateX(50%);
  transform: translateX(50%);
}
.settleSelectBox .baloon:before,
.settleSelectBox .baloon:after{
  content: '';
  position: absolute;
  bottom: 2px;
  width: 2px;
  height: 18px;
  border-radius: 2px;
  background: #3251bc;
}
.settleSelectBox .baloon:before {
  right: 100%;
  -webkit-transform: rotate(-30deg);
  -ms-transform: rotate(-30deg);
  transform: rotate(-30deg);
}
.settleSelectBox .baloon:after {
  left: 100%;
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
.settleSelectBox .button a {
  width: 260px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 100%;
  line-height: 1;
  color: #fff;
  border-radius: 7px;
  background-color: #3251bc;
  margin-top: 7px;
  padding: 16px 0;
  -webkit-box-shadow: 0 3px 0 0 #1f347b;
  box-shadow: 0 3px 0 0 #1f347b;
  position: relative;
  -webkit-transition: all .15s ease;
  transition: all .15s ease;
  top: 0;
}
.settleSelectBox .button a:hover {
  -webkit-box-shadow: 0 0 0 0 #071d69;
  box-shadow: 0 0 0 0 #071d69;
  top: 3px;
}
.settleSelectBox .button a:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  -webkit-transform: top .2s ease;
  -ms-transform: top .2s ease;
  transform: top .2s ease;
}
.settleSelectBox .button a:hover:before{
  top: -3px;
}
/*.payment_other
-------------------------------- */
.payment_other{
  width: 900px;
  margin: 50px auto 0;
}
.payment_other h4 {
  font-size: 125%;
  font-weight: bold;
}
.payment_other .settleSelectBox .button a{
  padding: 7px 0;
  width: 270px;
  line-height: 1.2;
  margin: 0;
}
.payment_other .settleSelectBox{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 30px;
  margin: 30px 20px 0;
  padding: 10px 20px
}
.payment_other .settleSelectBox span.small {
  font-size: 87.5%;
}
.pay_select .payment_other02{
  margin-top: 50px;
}
.pay_select .payment_other02 h4 {
  font-size: 125%;
  margin-top: 30px;
  font-weight: bold;
}
.payment_other02 .tlbox {position: relative;}
.payment_other02 .toolTip {
  color: #b29c5a;
  font-size: 81%;
  font-weight: normal;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 28%;
  transform: translate(50%, -50%);
  z-index: 10;
}
.payment_other02 .toolTip .tipWm {
  pointer-events: none;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease;
  background: #efe1b7;
  border: 2px solid #d5c288;
  font-size: 81%;
  top: 50%;
  transform: translateY(-50%);
  left: calc(100% + 10px);
  width: 195px;
  padding: 15px;
  font-weight: normal;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.10);
  -moz-box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.10);
  -webkit-box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.10);
}
.settleSelectArea.pay_select .payment_other02 .settleSelectBox{
  margin: 10px 30px 0;
}
.settleSelectArea.pay_select .payment_other02 .InfoText{
    padding: 20px 0 0 40px;
}
.settleSelectArea.pay_select .payment_other02 .InfoText + .settleSelectBox{
  margin-top: 4px;
}
.payment_other02 .settletTrialTextBox span.settletTrialText.blue{
  background-color: #3251bc;
}
.payment_other02 .settletTrialTextBox span.settletTrialText.blue:after{
    border-color: #3251bc transparent transparent transparent;
}
.payment_other02 .toolTip:hover p.tipWm {
  visibility: visible;
  opacity: 1;
}
.payment_other02 .settleSelectBox dt.SelectPay_Type {
  line-height: 1.2;
  text-align: center;
  font-weight: bold;
  font-size: 125%;
  padding: 12px 0px;
}
.payment_other02 .settleSelectBox dd p.price{
    font-size: 87.5%;
    line-height: 45px;
    color: #9a9a9a;
    padding-right: 10px;
}
.payment_other02 .SelectPay_Type .tag {
  display: inline-block;
  font-size: 60%;
  font-weight: bold;
  line-height: 18px;
  padding: 0 14px;
  background-color: #e4e4e4;
  border-radius: 18px;
  margin-left: 6px;
}

.settleWm p.price{
  padding-top:4px;
}

.corse_alert{
	color:#FA7A7D;
	font-size: 14px;
	padding: 9px 10px;
	margin-bottom:20px; 
	font-weight: bold;
	background-color: #F3F3F3;
	border-radius: 4px;
}
.corse_alert.multiple {
	color:#fff;
	background-color: #d96c5c;
}
.corse_alert img{
	position: relative;
	top:-2px;
	margin-right: 6px;
}




/*.regist_information
-------------------------------- */
.regist_information{
  text-align: left;
}
.regist_information .planbox{
  border:2px solid #e5e4dd;
  border-radius: 5px;
  width: 860px;
  margin:80px auto  30px;
}
.regist_information h2{
  color: #777;
  position: relative;
  text-align: center;

    height: 60px;
    line-height: 60px;
}
.regist_information h2:after{
  display: block;
  content:'';
  position: absolute;
  width:20px;
  height: 20px;
  border-left:2px solid #e5e4dd;
  border-bottom:2px solid #e5e4dd;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
 
  top: 15px;
  right: 40px;
}
.regist_information h2.on:after{
  top:25px;
  transform: rotate(-225deg);
  -webkit-transform: rotate(-225deg);

}
.regist_information .toggle{
  padding:30px;
}
.regist_information p{
  text-align: left;
  line-height: 1.5;
}
.regist_information p + p{
  margin-top:30px;
}
.regist_information p img{
  display: block;
  margin:auto;
  max-width: 100%;
}
.regist_information h3{
  font-weight: bold;
  margin-top:50px;
}