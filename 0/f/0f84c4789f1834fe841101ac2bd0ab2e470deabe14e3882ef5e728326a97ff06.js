.pl__finlink {
  text-decoration: none;
  color: #157efb;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  cursor: pointer;
}
.pl__link {
  text-decoration: none;
  color: #1275ec;
  border: 0;
  outline: none;
}
.pl__desc {
  display: flex;
  flex-direction: column;
  padding: 15px 15px 15px;
}
.pl__content {
  vertical-align: top;
  position: fixed;
  padding: 0;
  width: 100%;
  display: none;
  box-sizing: border-box;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  top: 0;
  background: #000000db;
  justify-content: center;
}
.pl__content-block {
  font-size: 13px;
  max-width: 600px;
  text-align: left;
  white-space: normal;
  z-index: 3;
  color: #313131;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  line-height: 17px;
  background-color: #fff;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  margin: auto;
  left: 0;
  right: 0;
}
.pl__closelink {
  position: absolute;
  top: 9px;
  right: -3px;
  z-index: 999;
  width: 50px;
  height: 50px;
}
.pl__close {
  width: 14px;
  height: 14px;
  cursor: pointer;
  padding: 3px;
  border-radius: 3px;
}
.pl__top {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  align-items: center;
  padding-left: 25px;
  box-sizing: border-box;
}
.pl__message-icon {
  vertical-align: middle;
  border-radius: 5px;
  width: 140px;
  height: 140px;
  object-fit: cover;
}
.pl__content .pl__message {
  line-height: 17px;
  margin: 6px 0 0px;
  position: relative;
  width: 100%;
  text-align: left;
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
}
.pl__btn {
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
}
.pl__btn-one {
  border: 1px solid #b0b0b0;
  color: #0188fe;
  padding: 10px 40px;
}
.pl__btn-second {
  color: #ffffff;
  border: 1px solid #0188fe;
  margin-right: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 40px;
  font-size: 16px;
  background-color: #0188fe;
}
.pl__btn-second:hover {
  background-color: #34a0ff;
}
.pl__btn-block {
  display: flex;
  position: relative;
  justify-content: end;
}
.pl__name__abonem {
  font-size: 20px;
  font-weight: 400;
  color: #000;
  margin: 0;
  position: relative;
  vertical-align: middle;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.pl__message__desc {
  font-size: 15px;
  margin: 15px 0px 23px;
  color: #6e6e6e;
  width: 60%;
  font-weight: 300;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.pl__pic {
  margin-bottom: 15px;
}
@media(max-width: 540px) {
  .pl__content-block {
    width: 86%;
  }
  .pl__desc {
    padding: 25px;
  }
  .pl__message__desc {
    width: 100%;
  }
  .pl__btn-block {
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  .pl__btn-second {
    margin-right: 0px;
    margin-bottom: 12px;
  }
  .pl__btn {
    padding: 13px;
  }
  .pl__top{
    padding: 0;
  }
}
@media(max-width: 320px) {
  .pl__name__abonem {
    font-size: 18px;
  }
  .pl__message__desc {
    font-size: 14px;
  }
  .pl__message-icon {
    width: 100px;
    height: 100px;
  }
}