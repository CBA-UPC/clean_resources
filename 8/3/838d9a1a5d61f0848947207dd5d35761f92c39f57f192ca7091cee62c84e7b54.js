video {
    max-width: 100%;
    vertical-align: bottom;
}
.ub-unloaded {
    display: none;
}
.ub-loaded {
    display: flex;
    justify-content: center;
}
#ubvideoFrame {
    margin-bottom: 15px !important;
}
.pcFrame iframe #unibots-video {
    display: none !important;
}
#unibots-video {
    margin:auto !important;
    z-index: 2147483999 !important;
    margin-top: 24px !important;
    max-width: 640px !important; 
}
.ubsticky_right {
    position: fixed; 
    right: 5px;
    bottom:0px;
    z-index: 2147483647 !important;
    /*transform: translateX(100%);*/
    animation: fade-in-up 0.6s ease-in-out forwards;
}
.ubsticky_left {
    position: fixed;
    left: 5px;
    bottom:0px;
    z-index: 2147483647 !important;
    /*transform: translateY(100%);*/
    animation: fade-in-up 0.6s ease-in-out forwards;
}
.unsticky{
    transform: translateZ(50%);
    animation: fade-in-d 0.6s ease forwards;
}
@keyframes fade-in-up {
    0% {
        opacity: 0;
   }
    100% {
        transform: translateY(0);
        opacity: 1;
   }
}
@keyframes fade-in-d {
    0% {
        opacity: 0;
   }
    100% {
        transform: translateZ(0);
        opacity: 1;
   }
}
.ubClose-left{ left: 0!important; }
.ubClose-right{ right: 0!important; }

.video-js .vjs-control.vjs-close-button {
    top: -20px !important;
    height: 2em !important;
    width: 4em !important;
    background: url(https://unibots.b-cdn.net/ubplayer/logo/new/logo_2.svg);
    left: 0px;
    background-repeat: no-repeat;
}

.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,
.vjs-icon-cancel:before {
    display: none;
    /* color: black !important;
    top: -4px;
    font-size: 14px;
    font-weight: 700;
    content: "\2716" !important; */
}

/* #ubp_logo {
    position: absolute;
    padding: 0px 0px 0px 0px;
    right: 0px !important;
    bottom: 35px ;
    top : -21px;
    width: 120px ;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    transition: bottom 0.4s ease-in-out;
    height: 14.5px !important;
    font-size: 10px;
    box-sizing: content-box !important;
    line-height: 11px !important;
}
#ubp_logo img {
    margin: 0px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
    padding: 0px !important;
    width: 100% !important;
    height: 21px !important;
    height: 28px !important;
    object-fit: unset !important;
    border: none !important;
} */


#ubp_logo {
    position: absolute;
    padding: 0px 0px 0px 0px;
    right: 0px;
    top: -19px;
    /* bottom: 35px; */
    width: 120px !important;
    transition: bottom 0.4s ease-in-out;
    height: 20px !important;
    font-size: 10px;
    box-sizing: content-box !important;
    line-height: 11px !important;
}

#ubp_logo img {
    margin: 0px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
    padding: 0px !important;
    width: 100% !important;
    height: 20px !important;
    object-fit: unset !important;
    border: none !important;
}

/* @media (max-width: 481px) {
    #ubp_logo {
         height: 13px !important; 
         top: -13px
    }
    #ubp_logo img {
         height: 13px !important;   
    }
}

@media (min-width: 481px) {
    #ubp_logo {
         height: 20px !important;  
         top: -20px;
    }
    #ubp_logo img {
         height: 20px !important;   
    }   
} */



.ubp-cbutton {
    height: 30px !important;
    border: solid 1px;
    width: 26% !important;
    position: absolute !important;
    background-image: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.7) 40%,
      rgba(0, 0, 0, 0) 99%
    ) !important;
    color: #fff !important;
    cursor: pointer !important;
    display: inline-block !important;
    font-family: arial, sans-serif !important;
    font-weight: normal !important;
    font-size: 14px !important;
    line-height: normal !important;
    padding: 5px !important;
    top: 0;
}
.videoAdUi-mobile .raisedSkipButton.videoAdUiSkipWidgetV2 .videoAdUiPreSkipContainer, .videoAdUi-mobile .raisedSkipButton.videoAdUiSkipWidgetV2 .videoAdUiSkipContainer{
    bottom:20px !important;
}
div.vast-skip-button {
    display: block;
    position: absolute;
    bottom: 20%;
    right: 0;
    background-color: #000;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    width: auto;
    padding: 8px;
    z-index: 1;
    border: 1px solid #fff;
    border-right: none;
}

.vast-skip-button.enabled {
    cursor: pointer;
    color: #fff;
}

.vast-skip-button.enabled:after {
    content: ">>";
    position: relative;
    top: 1px;
    margin-left: 8px;
}
.vjs-ads-label{
    width: 8em !important;
    padding-top: 9px !important;
}
