(function () {
    BizTrackingA.XdcCallback({
        xdc: ""
    });
})();
;
,"Name":"Web Request - Contact Us - Playspace.Contact Us Form","Description":"","Layout":"above","GutterWidth":10,"OffsetWidth":10,"HasTwoButtons":true,"SubmitLabel":"Get in touch!","ResetLabel":"Clear","ButtonLocation":"10","LabelWidth":100,"FieldWidth":150,"ToolTipType":"none","FontFamily":"Helvetica, Arial, sans-serif","FontSize":"14px","FontColor":"#333","FontUrl":null,"LineMargin":10,"ProcessorVersion":2,"CreatedByUserid":null,"ProcessOptions":{"language":"English","locale":"en_US","profiling":{"isEnabled":false,"numberOfProfilingFields":3,"alwaysShowFields":[]},"socialSignOn":{"isEnabled":false,"enabledNetworks":[],"cfId":null,"codeSnippet":""}},"EnableDeferredMode":0,"EnableCaptcha":0,"EnableGlobalFormValidationRule":1,"ButtonType":null,"ButtonImageUrl":null,"ButtonText":null,"ButtonSubmissionText":"PLEASE WAIT...","ButtonStyle":{"id":15,"className":"mktoInset","css":".mktoForm .mktoButtonWrap.mktoInset .mktoButton {\ncolor:#000;\nbackground:#fff;\nborder:1px solid #aeb0b6;\npadding:0.4em 1em;\nfont-size:1em;\nbox-shadow: 1px 1px 6px 1px #ccc;\nbackground-color:#f5f5f5;\nbackground-image: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#dfdfdf));\nbackground-image: -webkit-linear-gradient(top, #f5f5f5, #dfdfdf);\nbackground-image: -moz-linear-gradient(top, #f5f5f5, #dfdfdf);\nbackground-image: linear-gradient(to bottom, #f5f5f5, #dfdfdf);\n}\n.mktoForm .mktoButtonWrap.mktoInset .mktoButton:hover {\nborder:1px solid #999;\n}\n.mktoForm .mktoButtonWrap.mktoInset .mktoButton:focus {\noutline:none;\nborder:1px solid #999;\n}\n.mktoForm .mktoButtonWrap.mktoInset .mktoButton:active{\nbox-shadow:inset 1px 1px 6px 1px #ccc;\nbackground-color:#dfdfdf;\nbackground-image: -webkit-gradient(linear, left top, left bottom, from(#dfdfdf), to(#f5f5f5));\nbackground-image: -webkit-linear-gradient(top, #dfdfdf, #f5f5f5);\nbackground-image: -moz-linear-gradient(top, #dfdfdf, #f5f5f5);\nbackground-image: linear-gradient(to bottom, #dfdfdf, #f5f5f5);\n}\n","buttonColor":"#e1b93c"},"ThemeStyle":{"id":4,"displayOrder":2,"name":"Inset:","backgroundColor":"#FFF","layout":"left","fontFamily":"Helvetica, Arial, sans-serif","fontSize":"13px","fontColor":"#333","offsetWidth":10,"gutterWidth":10,"labelWidth":100,"fieldWidth":150,"lineMargin":10,"useBackgroundColorOnPreview":false,"css":"","href":"css\/forms2-theme-inset.css","buttonStyleId":15},"ThemeStyleOverride":null,"LiveStreamSettings":null,"rows":[[{"Id":7180,"Name":"FirstName","IsRequired":true,"Datatype":"string","Maxlength":255,"InputLabel":"","InputInitialValue":"","InputSourceChannel":"constant","InputSourceSelector":"constant","VisibleRows":4,"FieldWidth":420,"LabelWidth":420,"PlaceholderText":"First Name","ValidationMessage":"This field is required."}],[{"Id":7181,"Name":"LastName","IsRequired":true,"Datatype":"string","Maxlength":255,"InputLabel":"","InputInitialValue":"","InputSourceChannel":"constant","InputSourceSelector":"constant","VisibleRows":0,"FieldWidth":420,"LabelWidth":420,"PlaceholderText":"Last Name","ValidationMessage":"This field is required."}],[{"Id":7179,"Name":"Email","IsRequired":true,"Datatype":"email","Maxlength":255,"InputLabel":"","InputInitialValue":"","InputSourceChannel":"constant","InputSourceSelector":"constant","VisibleRows":4,"FieldWidth":420,"LabelWidth":420,"PlaceholderText":"Email Address","ValidationMessage":"Must be valid email. \u003Cspan class='mktoErrorDetail'\u003Eexample@yourdomain.com\u003C\/span\u003E"}],[{"Id":7182,"Name":"Company","IsRequired":true,"Datatype":"string","Maxlength":255,"InputLabel":"","InputInitialValue":"","InputSourceChannel":"constant","InputSourceSelector":"constant","VisibleRows":4,"FieldWidth":420,"LabelWidth":420,"ProfilingFieldNumber":0,"PlaceholderText":"Company Name","ValidationMessage":"This field is required."}],[{"Id":7191,"Name":"Seniority__c","Description":"Seniority","IsRequired":true,"Datatype":"picklist","Maxlength":255,"PicklistValues":[{"label":"Seniority","value":"","selected":true,"isDefault":true},{"label":"Founder","value":"Founder"},{"label":"Executive","value":"Executive"},{"label":"VP","value":"VP"},{"label":"Director","value":"Director"},{"label":"Manager","value":"Manager"},{"label":"Specialist","value":"Specialist"},{"label":"Associate","value":"Associate"},{"label":"Intern","value":"Intern"},{"label":"Other","value":"Other"}],"DefaultValue":[""],"InputLabel":"","InputInitialValue":"","InputSourceChannel":"constant","VisibleRows":4,"FieldWidth":420,"LabelWidth":420,"ProfilingFieldNumber":0,"ValidationMessage":"This field is required."}],[{"Id":7192,"Name":"Role__c","Description":"Role","IsRequired":true,"Datatype":"picklist","Maxlength":255,"PicklistValues":[{"label":"Role","value":"","selected":true,"isDefault":true},{"label":"Account Management","value":"Account Management"},{"label":"Administration","value":"Administration"},{"label":"AdOps","value":"AdOps"},{"label":"Business Development","value":"Business Development"},{"label":"Creative","value":"Creative"},{"label":"DevOps","value":"DevOps"},{"label":"Digital","value":"Digital"},{"label":"Digital Activation","value":"Digital Activation"},{"label":"Editorial","value":"Editorial"},{"label":"Finance","value":"Finance"},{"label":"Human Resources","value":"Human Resources"},{"label":"Information Technology","value":"Information Technology"},{"label":"Innovation","value":"Innovation"},{"label":"Investment","value":"Investment"},{"label":"Legal","value":"Legal"},{"label":"Marketing","value":"Marketing"},{"label":"Marketing (in-house)","value":"Marketing (in-house)"},{"label":"Partnerships","value":"Partnerships"},{"label":"Product","value":"Product"},{"label":"Programmatic Buying","value":"Programmatic Buying"},{"label":"Revenue","value":"Revenue"},{"label":"Sales","value":"Sales"},{"label":"Strategy \/ Planning","value":"Strategy \/ Planning"},{"label":"Other","value":"Other"}],"DefaultValue":[""],"InputLabel":"","InputInitialValue":"","InputSourceChannel":"constant","VisibleRows":4,"FieldWidth":420,"LabelWidth":420,"ProfilingFieldNumber":0,"ValidationMessage":"This field is required."}],[{"Id":7190,"Name":"mkto71_Request_Type__c","Description":"Company Type","IsRequired":true,"Datatype":"picklist","Maxlength":255,"PicklistValues":[{"label":"Company Type","value":"","selected":true,"isDefault":true},{"label":"Publisher","value":"Publisher"},{"label":"Advertiser","value":"Advertiser"},{"label":"Agency","value":"Agency"},{"label":"Other","value":"Other"}],"DefaultValue":[""],"InputLabel":"","InputInitialValue":"","InputSourceChannel":"constant","VisibleRows":4,"FieldWidth":420,"ProfilingFieldNumber":0,"ValidationMessage":"This field is required."}],[{"Id":7193,"Name":"Domain__c","Description":"Company Domain","IsRequired":true,"Datatype":"string","Maxlength":2000,"InputLabel":"","InputInitialValue":"","InputSourceChannel":"constant","FieldWidth":420,"LabelWidth":420,"ProfilingFieldNumber":0,"PlaceholderText":"Company Domain","ValidationMessage":"This field is required.","VisibilityRule":{"defaultVisibility":"hide","rules":[{"subjectField":"mkto71_Request_Type__c","fieldLabel":"","operator":"equal","values":["Publisher"],"altLabel":"Company Domain"}]}}],[{"Id":7194,"Name":"Monthly_Page_Views__c","Description":"Monthly Page Views","IsRequired":true,"Datatype":"picklist","Maxlength":255,"PicklistValues":[{"label":"Monthly Page Views","value":"","selected":true,"isDefault":true},{"label":"0-1M","value":"0-1M"},{"label":"1M-10M","value":"1M-10M"},{"label":"10M-30M","value":"10M-30M"},{"label":"30M+","value":"30M+"}],"DefaultValue":[""],"InputLabel":"","InputInitialValue":"","InputSourceChannel":"constant","VisibleRows":4,"FieldWidth":420,"LabelWidth":420,"ProfilingFieldNumber":0,"ValidationMessage":"This field is required.","VisibilityRule":{"defaultVisibility":"hide","rules":[{"subjectField":"mkto71_Request_Type__c","fieldLabel":"","operator":"equal","values":["Publisher"],"altLabel":"Monthly Page Views","picklistFilterValues":[{"label":"Monthly Page Views","value":""},{"label":"0-1M","value":"0-1M"},{"label":"1M-10M","value":"1M-10M"},{"label":"10M-30M","value":"10M-30M"},{"label":"30M+","value":"30M+"}]}]}}],[{"Id":7183,"Name":"commentCapture","Description":"Interested in Playspace? Drop us a note!","IsRequired":true,"Datatype":"textarea","Maxlength":2000,"InputLabel":"","InputInitialValue":"","InputSourceChannel":"constant","VisibleRows":2,"FieldWidth":420,"LabelWidth":420,"ProfilingFieldNumber":0,"PlaceholderText":"Drop us a note! We'll be in touch soon.","ValidationMessage":"This field is required.","DisablePrefill":true}],[{"Id":7184,"Name":"uTMCampaign","Datatype":"hidden","Maxlength":255,"InputLabel":"UTM Campaign:","InputInitialValue":"","InputSourceChannel":"url","InputSourceSelector":"utm_campaign","ProfilingFieldNumber":0,"DisablePrefill":true}],[{"Id":7185,"Name":"uTMContent","Datatype":"hidden","Maxlength":255,"InputLabel":"UTM Content:","InputInitialValue":"","InputSourceChannel":"url","InputSourceSelector":"utm_content","ProfilingFieldNumber":0,"DisablePrefill":true}],[{"Id":7186,"Name":"uTMMedium","Datatype":"hidden","Maxlength":255,"InputLabel":"UTM Medium:","InputInitialValue":"","InputSourceChannel":"url","InputSourceSelector":"utm_medium","ProfilingFieldNumber":0,"DisablePrefill":true}],[{"Id":7187,"Name":"uTMSource","Datatype":"hidden","Maxlength":255,"InputLabel":"UTM Source:","InputInitialValue":"","InputSourceChannel":"url","InputSourceSelector":"utm_source","ProfilingFieldNumber":0,"DisablePrefill":true}],[{"Id":7188,"Name":"uTMTerm","Datatype":"hidden","Maxlength":255,"InputLabel":"UTM Term:","InputInitialValue":"","InputSourceChannel":"url","InputSourceSelector":"utm_term","ProfilingFieldNumber":0,"DisablePrefill":true}],[{"Id":7189,"Name":"gDPROptin","Datatype":"checkbox","PicklistValues":[{"label":"I would like to receive the latest expert insights and news from Connatix. See \u003Ca href=\"https:\/\/connatix.com\/privacy-policy\/\" target=\"_blank\"\u003EPrivacy Policy\u003C\/a\u003E.","value":"yes"}],"InputLabel":"","InputInitialValue":"","InputSourceChannel":"constant","FieldWidth":400,"LabelWidth":0,"ProfilingFieldNumber":0,"ValidationMessage":"This field is required.","DisablePrefill":true}]],"fieldsetRows":[],"action":null,"munchkinId":"733-VZA-777","dcJsUrl":"","invalidInputMsg":"Invalid Input","formSubmitFailedMsg":"Submission failed, please try again later."});