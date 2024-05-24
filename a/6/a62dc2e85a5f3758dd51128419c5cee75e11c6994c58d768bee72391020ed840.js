.tc-privacy-center-container,
.tc-privacy-wrapper .tc-privacy-banner {
  z-index: 999999999 !important;
}
#header_tc_privacy {
  border-radius: 8px;
  box-shadow: 0 0 6px 0 rgba(0, 14, 156, 0.2);
  background-color: #ffffff;
  padding: 15px;
  opacity: 1;
  box-sizing: border-box;
  width: 92%;
  margin: 4%;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#header_tc_privacy::-webkit-scrollbar {
  display: none;
}
.tc-privacy-wrapper .tc-privacy-banner {
  max-height: calc(100% - 4%);
  overflow-y: scroll;
}
.tc-privacy-wrapper .tc-privacy-text {
  padding: 0;
}
#header_tc_privacy * {
  line-height: 1.5;
}
#header_tc_privacy .privacy_center_img {
  text-align: right;
  width: 100%;
}
#header_tc_privacy img {
  width: 128px;
  height: 20px;
  margin: 0;
}
/*#header_tc_privacy .privacy_center_img svg {
  width: 128px;
  height: 20px;
  color: #000E9C;
  margin: 0;
}*/
#header_tc_privacy_text {
  padding: 0;
}
#header_tc_privacy_text h1 {
  font-size: 14px;
  line-height: 1.25;
  font-weight: 800;
  margin: 0;
  color: #00185e;
  text-align: left;
}
#header_tc_privacy_text p {
  margin: 0;
}
#header_tc_privacy_text p,
#header_tc_privacy_text ul li {
  font-size: 12px;
  font-weight: normal;
  line-height: 1.5;
}
#header_tc_privacy_text p a {
  font-size: inherit;
  font-weight: 600;
  color: #0050d7;
}
#header_tc_privacy_text ul {
  margin: 0;
  padding: 0 0 0 16px;
  list-style-type: disc;
}
#header_tc_privacy_container_text {
  display: unset; 
}
#header_tc_privacy_container_button {
  text-align: center;
  right: unset;
  width: 100%;
  margin-top: 5px;
}
#header_tc_privacy_container_button button {
  float: right;
  display: unset;
  border-radius: 8px;
  width: 100%;
  margin: 5px 0;
  padding: 5px 20px;
  height: auto;
  font-weight: 600;
  font-size: 12px;
  border: solid 2px #0050d7;
}
#header_tc_privacy_button_3 {
  background-color: #0050d7;
}
#header_tc_privacy_button_3:hover {
  background-color: #000E9C;
  border-color: #000E9C;
}
#header_tc_privacy_button,
#header_tc_privacy_button_2 {
  background-color: #ffffff !important;
  color: #0050d7 !important;
}
#header_tc_privacy_button_2:hover {
  background-color: #BEF1FF !important;
}
#header_tc_privacy_button {
  position: absolute;
  top: 10px;
  left: 15px;
  width: auto !important;
  padding: 5px 0 !important;
  font-size: 11px !important;
  border: none !important;
  text-decoration: underline;
}
#header_tc_privacy_button:hover {
  text-decoration: none;
}
@media only screen and (min-width: 1000px) {
  #header_tc_privacy {
    margin: auto;
    width: 40%;
    top: 10%;
    left: 30%;
  }
  .tc-privacy-wrapper .tc-privacy-banner {
    max-height: calc(100% - 20%);
  }
  #header_tc_privacy .privacy_center_img {
    margin: 0 auto;
  }
  #header_tc_privacy img {}
  #header_tc_privacy_text {
    padding: 10px;
  }
  #header_tc_privacy_text h1 {
    font-size: 16px;
  }
  #header_tc_privacy_text p,
  #header_tc_privacy_text ul li {
    font-size: 14px;
  }
  #header_tc_privacy_button {
    top: 15px;
    font-size: 12px !important;
  }
  #header_tc_privacy_container_button {
    margin-top: 0;
  }
  #header_tc_privacy_container_button button {
    width: auto;
    margin: 5px;
  }
  .tc-privacy-wrapper .tc-privacy-text {
    padding: 10px;
  }
}
