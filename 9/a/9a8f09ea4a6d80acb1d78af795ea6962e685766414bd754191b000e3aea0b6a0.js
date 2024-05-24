#Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window {
    bottom: 20px;
}

#Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.hide_iframe {
    display: none
}

#Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.minimize_iframe {
    height: 0px;
    width: 0px
}

#Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.start_chat_button {
    height: 70px;
    width: 195px
}

#Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.proactive_chat_panel {
    /* keep the min height of proactive window to 214px */
    height: auto;
    min-height: 214px;
    width: 255px
  }

#Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.web_chat_panel {
    height: 560px;
    width: 360px
}

#Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.BottomRight {
    right: 20px;
    bottom: 20px
}

#Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.BottomLeft {
    left: 20px;
    bottom: 20px
}

@media screen and (max-height:600px) {
    #Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.web_chat_panel {
        height: calc(100vh - 40px)
    }
}

@media screen and (max-width:470px) {
    #Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.web_chat_panel.BottomLeft,
    #Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.web_chat_panel.BottomRight {
        right: 0;
        left: 0;
        bottom: 0
    }
    #Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.web_chat_panel {
        height: 100%;
        width: 100%;
        right: 0;
        left: 0;
        bottom: 0
    }
}

/* InApp */
@media screen and (max-height:600px) {
    #Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.inApp.web_chat_panel {
        height: calc(100vh - 40px);
    }

    @media screen and (orientation:landscape) {
        #Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.inApp.web_chat_panel {
            height: calc(100vh);
            width: calc(100vw);
        }
        #Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window.inApp.BottomRight {
            right: 0;
            bottom: 0;
        }
    }
}
