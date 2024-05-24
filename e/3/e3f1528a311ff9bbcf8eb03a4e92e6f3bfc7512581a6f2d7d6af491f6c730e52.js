.pl__finlink {
    text-decoration: none;
    color: #157efb;
}

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
    display: inline-block;
    vertical-align: top;
    position: fixed;
    bottom: 3%;
    right: 3%;
    margin: auto;
    width: 95%;
    max-width: 300px;
    font-size: 13px;
    text-align: left;
    white-space: normal;
    z-index: 3;
    color: #000;
    justify-content: space-between;
    display: none;
    box-sizing: border-box;
    font-family: 'SF UI Display';
    align-items: center;
    border-radius: 15px;
    font-family: 'Roboto', sans-serif;
}

.pl__content:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fffffff5;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 15px;
    z-index: -9;
}

.pl__top {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    align-items: center;
    padding: 17px;
    justify-content: center;
    flex-direction: column;
    background-color: #1c1c1e;
    border-radius: 10px;
    height: 100%;
    box-sizing: border-box;
    justify-content: space-between;
}

.pl__picture {
    text-align: center;
}

.pl__picture img {
    width: 100px;
    height: 100px;
}

.pl__line {
    width: 100%;
    height: 1px;
    background: #d2d2d2;
}

.pl__message-icon {
    width: 9%;
    height: 9%;
    vertical-align: middle;
    margin-right: 12px;
}

.pl__content .pl__content .pl__message p {
    line-height: 17px;
}

.pl__content .pl__message {
    line-height: 17px;
    margin: 8px 0 8px;
    position: relative;
    text-align: center;
    width: 100%;
    overflow: hidden;
}

.pl__btn a {
    color: #fff;
}

.pl__btn-block {
    width: 100%;
    background-color: #1275ec;
    color: #fff;
    border-radius: 10px;
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
    font-family: 'SF UI Display';
}

.pl__btn {
    color: #157efb;
    font-size: 15px;
    font-weight: 400;
    padding: 2px 0;
}

.pl__title {
    position: absolute;
    top: -16px;
    font-size: 18px;
    margin-left: 10px;
    font-weight: 700;
    color: #ffffff;
}

.pl__img-mess {
    width: 55%;
}

.pl__btn-second {
    color: #ffffff;
}

.pl__btn-block {
    text-align: center;
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

.pl__rtl .pl__content {
    text-align: right
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

.pl__name__abonem {
    font-size: 16px;
    font-weight: 800;
    color: rgb(255, 255, 255);
    margin: 0;
    position: relative;
    vertical-align: middle;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.pl__img-small {
    margin-left: 5px;
    width: 6.5%;
    vertical-align: middle;
}

.pl__message__desc {
    font-size: 14px;
    margin: 0;
    color: rgb(222 222 222);
    margin-bottom: 10px;
    margin-top: 10px;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.pl__red {
    color: #fe3c31;
}

.pl__close {
    width: 16px;
    height: 12px;
}

.pl__closelink {
    position: absolute;
    right: 2%;
    top: 3%;
    cursor: pointer;
    z-index: 10000;
}

.pl__message {
    text-align: center;
}

.pl__message__footer {
    color: rgb(109, 107, 107);
    font-size: 12px;
}

@media (max-width:321px) {}