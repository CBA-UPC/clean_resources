

.pl__link {
  text-decoration: none;
  color: #1275ec;
  border: 0;
  outline: none
}

.pl__link img {
  border: none
}

.pl__content {

  vertical-align: top;
  position: fixed;
  top: 7%;
  margin: auto;
  width: 95%;
  max-width: 410px;
  min-height: 100px;
  font-size: 13px;
  text-align: left;
  white-space: normal;
  z-index: 3;
  color: #000;
  display: none;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  box-shadow:0 0 7px 1px #262525;
  align-items: end;
  padding: 8px 7px 8px 8px;
  border-radius: 5px;
  align-items: center;
  right:3%;

}
.pl__btn-block {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: flex-end;
}
.pl__content:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #262626;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 5px;
  z-index: -9;
}
.pl__message-icon {
  width: 12%;
  vertical-align: middle;
  width: 47px;
  height: 47px;
  margin: 8px 10px 5px 0px;
}
.pl__content
.pl__content .pl__message p{
  line-height: 17px;
}
.pl__content .pl__message {
  line-height: 17px;
  margin:8px 0;
  position: relative;

}
.pl__number {
  position: absolute;
  width: 23px;
      height: 23px;
      top: -5px;
      left: -4px;
}

.pl__content .pl__action {
  border-top: 1px solid rgb(153, 153, 153);
  text-align: center;
  color: #1275ec;
  font-weight: 700;
  font-size: 18px;
  padding: 23px 0;
  display: block
}

.pl__content .pl__content-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10
}

.pl__wrap {
  position: relative;
  width: auto;
  height: 100%;
  min-height: 100%;
  font-size: 0;
  line-height: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'San Francisco';
}
.pl__btn-first {
  margin-right: 15px;
  color: #ffffff;
  font-size: 13px;
  background: linear-gradient(360deg, #3297F9 0%, #56ACF7 100%) no-repeat 50% 50% / 100% 100%;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px solid #8c8c8c;
}
.pl__btn-second {
  font-size: 13px;
  padding: 5px 35px;
  border-radius: 5px;
  border: 1px solid #ababab;
  background: #fff;
  color: #473d3d;
}
.pl__bg {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: auto;
  z-index: 1
}

.pl__fade {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  background-color: #000;
  opacity: .2;
  z-index: 2
}

.pl__helper {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 100%;
  font-size: 0;
  line-height: 0
}

.pl__rtl .pl__content {
  text-align: right
}

.pl__sep {
  margin: 0 20px;
  color: #888;
  font-size: 22px
}
.pl__header_img {
  width: 100%;
}
@media screen and (orientation:portrait) {
  .pl__bg {
    width: auto;
    height: 100%
  }
}


.pl__header__content {
  width: 22%;
}
.pl__left {
  display: flex;
  align-items: center;
}

.pl__right {
  display: flex;
  width: 40%;
  justify-content: flex-end;
  font-size: 14px;
}

.pl__title {
  margin-left: 10px;
  font-size: 14px;

}

.pl__name__abonem {
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  margin: 0;
  position: relative;
  vertical-align: middle;
  letter-spacing: 0.5;
  line-height: 13px;
  max-height: 25px;
    overflow: hidden;

}


.pl__btn-bloc {
  color: #979797;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3;
  margin-top: 5px;
  display: flex;
}
.pl__message__desc {
  font-size: 13px;
  margin: 3px 0;
  color: #979797;
  letter-spacing: 0.5;
  max-height: 35px;
    overflow: hidden;
}
.pl__red-link {
  color: #6b6b6b;
  text-decoration: none;
  font-size: 14px;
  margin: 0;
  margin-bottom: 5px;
}
.pl__message {
  text-align: left;
  /* padding-right: 10px; */

}
.pl__message__footer {
  color: rgb(109, 107, 107);
  font-size: 12px;
}
.pl__closelink {
  position: absolute;
  top: 9px;
  right: 10px;
  z-index: 999;
}
.pl__close{
  width: 12px;
    height: 12px;
  cursor: pointer;
}
.pl__finlink {
  display: flex;
  text-decoration: none;
}
@media(max-width:420px;) {
  .pl__content {
    right: unset;
  }
}
