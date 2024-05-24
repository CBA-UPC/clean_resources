@font-face {
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/l/font?kit=-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj757A2Ve-LyMW-V3kzkTPubWG1Q&skey=72472b0eb8793570&v=v52) format('woff2');
}
-align: right;
}

@media screen and (max-width:480px) {
  .ogp-body {
    max-width: 350px;
    width: 100%;
    height: 105px;
    border: 1px solid #e5e5e5;
    background-color: #FFFFFF;
    box-sizing : border-box;
  }
  .ogp-image {
    width: 103px;
    height: 103px;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .ogp-box {
    padding: 13px;
    flex: 1;
    -webkit-flex: 1;
    overflow: hidden;
  }
  .ogp-title {
    height: 35px;
    max-height: 35px;
    font-weight: bold;
    font-size: 13px;
    color: #272727;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow:hidden;
  }
  .ogp-sub {
    height: 13px;
    max-height: 13px;
    color: #737373;
    font-size: 9px;
    margin-top: 6px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .ogp-sub-error {
    height: 13px;
    max-height: 13px;
    color: #737373;
    font-size: 9px;
    margin-top: -8px;
    padding: 0;
    list-style: none;
  }
  .ogp-url {
    margin-top: 8px;
    color: #c8c8c8;
    font-size: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .logo {
    padding-top: 14px;
  }
}

@media screen and (min-width:481px) {
  .ogp-body {
    width: 100%;
    height: 120px;
    border: 1px solid #e5e5e5;
    background-color: #FFFFFF;
    box-sizing : border-box;
    line-height: 1.7em;
  }
  .ogp-image {
    width: 118px;
    height: 118px;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .ogp-box {
    padding: 22px;
    -webkit-flex: 1;
    flex: 1;
    overflow: hidden;
  }
  .ogp-title {
    font-weight: bold;
    font-size: 17px;
    color: #272727;
    vertical-align: middle;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .ogp-sub {
    height: 22px;
    color: #737373;
    font-size: 13px;
    margin-bottom: 10px;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .ogp-sub-error {
    height: 22px;
    color: #737373;
    font-size: 11px;
    line-height: 1.3em;
    padding: 0;
    margin-top: 8px;
    list-style: none;
  }
  .ogp-url {
    color: #c8c8c8;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
