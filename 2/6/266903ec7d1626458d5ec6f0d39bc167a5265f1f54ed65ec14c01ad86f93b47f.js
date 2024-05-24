.boxed {
    border-width: thin;
    border-style: solid;
    border-color: lightgray;
    padding: 50px;
    text-align: center;
}

.validation-error {
    color: red;
}

header#masthead {
    margin-bottom: 25px;
}

#data-portal {
    margin-bottom: 25px;
}

.reset-container {
    text-align: right;
    align-content: right;
}

.page-content .medium-paragraph p {
    margin: 0 0 25px;
    font-size: 20px;
    line-height: 1.5;
}

.captcha-input {
    margin-bottom: 25px;
}

.button {
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    letter-spacing: normal;
}
.page-content h2 {
    font-size: 25px;
    text-transform: initial;
    font-weight: 300;
}

.page-content h3 {
    color: #009ade;
    font-size: 18px;
    font-weight: 300;
}

#opt-out .button {
    margin-bottom: 15px;
    font-size: 15px;
    color: #ffffff;
    padding: 13px 22px 13px 22px;
    background-color: #009ade;
    font-weight: 500;
}

#data-portal .button{
    font-size: 15px;
    color: #ffffff;
    padding: 13px 22px 13px 22px;
    background-color: #009ade;
    font-weight: 500;
    margin: 10px;
}

#data-portal .reset {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 5px;
    border-bottom-width: 2px;
    border-bottom-color: #009ade;
    border-bottom-style: solid;
    color: #616366;
    background: transparent;
    margin: 0;
}

#data-portal #download-data {
    font-size: 17px;
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
}
.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #1D9ADB;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #1D9ADB transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}