video {
    max-width: 100%;
    vertical-align: bottom;
}
.ub-unloaded {
    display: none;
}
.ubresp{
    /* max-width: 640px !important; */
    margin: 0px auto;
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
    /* height: 385px;
    width: 640px; */
    /* z-index: 2147483999;
    margin-top: 24px; */
    margin:auto !important;
    z-index: 2147483999 !important;
    margin-top: 24px !important;
    max-width: 640px; 
    /* padding:10px 0px; */
}
/* #ubVideo{
    box-shadow: 0px 2px 8px #8c8c95;
} */
.ubsticky_right {
    position: fixed; 
    right: 5px;
    z-index: 2147483647 !important;
    /*transform: translateX(100%);*/
    animation: fade-in-up 0.6s ease-in-out forwards;
}
.ubsticky_left {
    position: fixed;
    left: 5px;
    z-index: 2147483647 !important;
    /*transform: translateY(100%);*/
    animation: fade-in-up 0.6s ease-in-out forwards;
}
    
/*pbsticky_right {
    position: fixed;
    right: 5px;
    bottom: 0px;
    z-index: 2147483647 !important;
    transform: translateY(100%);
    animation: fade-in-up 1.5s ease forwards;
}*/
.pbsticky_left {
    position: fixed;
    left: 5px;
    bottom: 0px;
    z-index: 2147483647 !important;
    transform: translateY(100%);
    animation: fade-in-up 1.5s ease forwards;
    width: 400px !important;
    height: 225px !important;
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
.unsticky{
    transform: translateZ(50%);
    animation: fade-in-d 0.6s ease forwards;
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
    width: 3em !important;
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
    bottom: 35px !important;
    top : -25px !important;
    width: 120px !important;
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
    /* top: -20px; */
    /* bottom: 35px; */
    /* width: 120px !important; */
    transition: bottom 0.4s ease-in-out;
    height: 20px;
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
    height: 20px;
    object-fit: unset !important;
    border: none !important;
}

@media (max-width: 481px) {
    #ubp_logo {
         width: 80px !important;
         height: 13px !important; 
         top: -13px
    }
    #ubp_logo img {
         height: 13px !important;   
    }
}

@media (min-width: 481px) {
    #ubp_logo {
         width: 120px !important;
         height: 20px !important;  
         top: -19px;
    }
    #ubp_logo img {
         height: 20px !important;   
    }   
}


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
/* @media (max-width: 481px) {
    #unibots-video{
        margin: auto;
        height: 203px;
        width: 360px;
    }
} */


/* @media (max-width: 481px) {
    #unibots-video {
        margin: 7px !important;
        margin-top: 24px !important;
    }

    #ubvideoFrame {
        margin-left: 7px !important;
        margin-right: 7px !important;
    }  
} */


#rvimg{
    position: absolute !important;
    top: -33px;
    width: 60px;
    height: 34px;
    left: 30px;
}

.rvimgc_desk{
    animation-name: move;
    animation-duration: 8s;
    animation-direction: initial; 
    animation-delay: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: 5;
}

.rvimgc_mob{
    animation-name: move_mob;
    animation-duration: 8s;
    animation-direction: initial; 
    animation-delay: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: 5;
}

@keyframes move {
    from {
        left: 5%;
    }
    to {
        left: calc(90% - 135px);
    }
}
@keyframes move_mob {
    from {
        left: 5%;
    }
    to {
        left: 55%;
    }
}
.ubsticky_right .rvimgc_desk, .ubsticky_left .rvimgc_desk{
    animation-name: move_sticky_desk;
    animation-duration: 8s;
    animation-delay:2s;
    animation-fill-mode: forwards;
    animation-iteration-count: 5;
}
.ubsticky_right .rvimgc_mob, .ubsticky_left .rvimgc_mob{
    display: none;
    /*animation-name: move_sticky_mob;
    animation-duration: 8s;
    animation-delay:2s;
    animation-fill-mode: forwards;
    animation-iteration-count: 5;*/
}

@keyframes move_sticky {
    from {
        left: 5%;
    }
    to {
        left: 50%;
    }
}
@keyframes move_sticky {
    from {
        left: 5%;
    }
    to {
        left: 25%;
    }
}