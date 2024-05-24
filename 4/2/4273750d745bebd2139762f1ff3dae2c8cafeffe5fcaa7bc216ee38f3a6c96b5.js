import { X as a } from "../extension.a9e3aa75.mjs";
import "../icons.74076ddd.mjs";
export {
  a as default
};
-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">


<link rel="shortcut icon" href="/static/branding/g2t_favicon.png" />
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link type="text/css" rel="stylesheet" href="/static/css/login.css?v=062621"/>


    <style type="text/css"> #submit, #continue-button, #next-button, #submit-button { background-color: #992977; } </style>





    <style type="text/css"> #submit:hover, #continue-button:hover, #submit:focus, #continue-button:focus,
    #next-button:hover, #next-button:focus { background-color: #A63684; } </style>



</head>
<body id="login">
<div class="center">

    <script type="text/javascript" src="/static/scripts/castle.browser.js"></script>
    <script type="text/javascript">
        
        if (document.all && !document.addEventListener) {
            window.location.href = "ielt9";
        }
    </script>

    
    

    
    
    <input type="hidden" id="samlUrl" value="https://authentication.logmeininc.com/saml/sp/client?service=https%3a%2f%2fglobal.gototraining.com%2fverify_sso"/>
    <form id="credentials" novalidate="true" action="/login?service=https%3A%2F%2Fglobal.gototraining.com%2Fverify_sso" method="post" onsubmit="return checkView()">
        <input type="hidden" id="castle_request_token" name="castle_request_token"/>
        <div class="row">
            <div id="productLogo" class="col-xs-12">
                
                
                <img src="/static/branding/g2tlogo.svg" alt="GoToTraining">
            </div>
            <div class="col-xs-2"></div>
        </div>

        
        

        <!-- @TODO - hide this section if there is an error message and refactor error messages to avoid confusion
        during social linkage flow -->
        

        <div class="errorContent row">
            
            
        </div>

        

        

        <div class="slide-in from-left" id="step1" style="padding: 0 5px">
            <div id="step1content">

                <div class="fieldContainerFirst" id="emailField">
                    <label class="fieldLabel" for="emailAddress">Email address</label>
                    <input id="emailAddress" name="emailAddress" title="Email" name="emailAddress" type="email" aria-label="Email address" value=""/>
                </div>

                <div id="continuediv" class="row">
                    <div class="col-xs-12">
                        <input id="next-button" name="next-button" type="button" class="btn btn-block"
                               value="Next" onclick="return checkLoginOptions()">

                    </div>
                </div>

                <p id="samlalert" name="samlalert" class="hidden">We'll take you to your company's sign-in page.</p>

                <div id="samlcontinue" name="samlcontinue" class="row hidden">
                    <div class="col-xs-12">
                        <input id="continue-button" name="continue-button" type="button" class="btn btn-block"
                               value="Continue"
                               onclick="navToSamlSsoLoginUrl()">
                    </div>
                </div>
            </div>
        </div>

        <div class="slide-in from-right hidden" id="step2" style="padding: 0 5px">
            <div class="slide-in-content" id="step2content">

                <div id="continueWith" class="continueWith hidden">
                    <div style="display: table-row">
                        <div class="avatarContainer" style="display: table-cell; width: 54px">
                            <img class="avatar" src="/static/images/avatar-medium.jpg"/>
                            <img class="avatar" id="avatar" onerror="this.style.display='none'"
                                 src="/static/images/avatar-medium.jpg"/>
                        </div>
                        <div class="signInTextContainer" style="display: table-cell">
    