"use strict";(self.webpackChunkkoa2_react_redux_dom=self.webpackChunkkoa2_react_redux_dom||[]).push([[9147],{99147:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var l=n(67294),o=n(54154),a=n.n(o),r=n(67851),i=n(71893),c=n(89692);const m=i.default.div.withConfig({displayName:"RoomCountStatisticComponnet__Wrapper",componentId:"sc-ob8rru-0"})(["display:flex;flex-direction:column;gap:20px;margin:20px 0;"]),d=i.default.div.withConfig({displayName:"RoomCountStatisticComponnet__RowWrapper",componentId:"sc-ob8rru-1"})(["display:flex;gap:20px;align-items:center;> div:first-child{width:135px;min-width:135px;text-align:right;}"]),p=i.default.div.withConfig({displayName:"RoomCountStatisticComponnet__ChartWrapper",componentId:"sc-ob8rru-2"})(["display:flex;flex-direction:column;gap:5px;> div{display:flex;gap:15px;}"]),u=i.default.div.withConfig({displayName:"RoomCountStatisticComponnet__ChartLine",componentId:"sc-ob8rru-3"})(["height:20px;width:","px;background-color:",";border-radius:15px;"],(e=>e.width),(e=>e.bgColor)),s=i.default.div.withConfig({displayName:"RoomCountStatisticComponnet__StatInfo",componentId:"sc-ob8rru-4"})(["display:flex;align-items:center;gap:15px;"]),h=i.default.div.withConfig({displayName:"RoomCountStatisticComponnet__Legend",componentId:"sc-ob8rru-5"})(["display:flex;align-items:center;gap:30px;> div{display:flex;}"]),g=i.default.div.withConfig({displayName:"RoomCountStatisticComponnet__OrangeCircle",componentId:"sc-ob8rru-6"})(["height:20px;width:20px;border-radius:50%;background-color:#F59127;margin-right:15px;"]),x=i.default.div.withConfig({displayName:"RoomCountStatisticComponnet__BlueCircle",componentId:"sc-ob8rru-7"})(["height:20px;width:20px;border-radius:50%;background-color:#8FC9F6;margin-right:15px;"]);class C extends l.Component{renderRow(e){const{roomCount:t,min:n,max:o,count:i,oldMin:m=0,oldMax:h=0,minArea:g=0,maxArea:x=0}=e,{pricesByRoomCount:C,maximumValue:f}=this.props;if(!C.length)return null;const E=e=>Math.round(450*e/f);return l.createElement(d,{key:t},l.createElement("div",null,l.createElement("b",null,t,"-кімнатна"),l.createElement("div",null,"(",`${i} `,(0,r.pluralize)([" пропозиція "," пропозиції "," пропозицій "],i),")")),l.createElement(p,null,l.createElement("div",null,l.createElement(u,{bgColor:"#F59127",width:E(n)}),l.createElement(s,null,a()(n)," грн ",`(${g} м²) `,l.createElement(c.Z,{first:n,second:m}))),l.createElement("div",null,l.createElement(u,{bgColor:"#8FC9F6",width:E(o)}),l.createElement(s,null,a()(o)," грн ",`(${x} м²) `,l.createElement(c.Z,{first:o,second:h})))))}render(){const{pricesByRoomCount:e}=this.props;return e.length?l.createElement(m,null,l.createElement(d,null,l.createElement("div",null),l.createElement(h,null,l.createElement("div",null,l.createElement(g,null),"Мінімальна ціна"),l.createElement("div",null,l.createElement(x,null),"Максимальна ціна"))),e.map((e=>this.renderRow(e)))):null}}C.defaultProps={pricesByRoomCount:[],maximumValue:1};const f=C;var E=n(91129);const w=i.default.div.withConfig({displayName:"BottomInfoComponent__InfoBlock",componentId:"sc-wnvcyc-0"})(["display:flex;gap:20px;padding:10px;font-size:18px;color:#000;line-height:28px;background:#F59127;width:100%;margin:20px auto;svg{min-width:50px;}"]),v=e=>{let{children:t}=e;return l.createElement(w,null,l.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 88 88",width:50},l.createElement("path",{d:"m15.095 34.684.77 28.376s19.807 3.822 29.933 4.113c10.126.29 13.469.162 15.13-2.645a5.93 5.93 0 0 0-.19-6.245 5.6 5.6 0 0 0 3.596-2.34c2.109-3.097-.198-6.395-.198-6.395a5.449 5.449 0 0 0 3.708-2.731c1.873-3.243-.731-6.94-.731-6.94l12.576-.28a4.64 4.64 0 0 0 3.687-4.917c-.02-4.822-4.912-4.843-4.912-4.843l-24.4.675s-.965-9.081-7.136-10.327c-6.17-1.245-11.685 1.354-16.84 6.126-5.156 4.772-6.02 5.194-8.84 6.514a26.193 26.193 0 0 1-6.153 1.858Z",fill:"#F59127",stroke:"#003B59",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"m54.696 30.546-14.17.426M67.668 39.918l-16.977.43M64.736 49.637l-14.273.138M61.35 58.388l-13.471.126",stroke:"#003B59",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})),t)};n(22462);const b=e=>{let{pricesByRoomCount:t,currentMonthlocativeName:n,prevMontAhblativeName:o,titleGeo:a}=e;const r=[],i=[];t.forEach((e=>{let{roomCount:t,avg:n,oldPrice:l}=e;Math.abs(Math.floor((n-l)/l*100))&&(n>l&&r.push(t),n<l&&i.push(t))}));const c=()=>i.length&&!r.length?l.createElement("span",null,"Спостерігається ",l.createElement("b",null,`незначне зниження середньої вартості серед ${i.join(", ")} - кімнатних квартир`),` в ${n} в порівнянні з ${o}`):i.length&&r.length?l.createElement("span",null,"Спостерігається ",l.createElement("b",null,`незначне зниження середньої вартості серед ${i.join(", ")} - кімнатних квартир`),", а також ",l.createElement("b",null,`підвищення вартості серед ${r.join(", ")} - кімнатних квартир`),` в ${n} в порівнянні з ${o}`):!i.length&&r.length?l.createElement("span",null,"Спостерігається ",l.createElement("b",null,`незначне підвищення середньої вартості серед ${r.join(", ")} - кімнатних квартир`),` в ${n} в порівнянні з ${o}`):l.createElement("span",null,`Коливань ціни в той чи інший бік у ${n} в порівнянні з ${o} не було`),m=Math.max(...t.map((e=>e.max))),d=()=>l.createElement(l.Fragment,null,l.createElement(f,{pricesByRoomCount:t,maximumValue:m}),l.createElement(v,null,l.createElement(c,null)));return l.createElement(E.Z,{titleTop:"Вартість квартири в новобудові",titleBot:"Динаміка середньої ціни в розрізі кімнатності",titleGeo:a},l.createElement(d,null))};b.defaultProps={pricesByRoomCount:[]};const y=b}}]);entById('label_tickerfile');
            input.remove();

            if(inputs.length !== 5){
                label.classList.remove("hide");
            }
            var tickerfilelabel = document.getElementById(idName);
            tickerfilelabel.parentNode.remove();
            countLabel();
            validateFiles();
        }
        function countLabel(){
            var inputs = document.getElementsByClassName('tickerfile_input');
            var label = document.getElementById('label_tickerfile');
            var removes = document.getElementsByClassName('symbol-remove');

            for (var i = 0; i < inputs.length; i++) {
                inputs[i].name = 'tickerfile' + i;
                inputs[i].id =  'tickerfile' + i;
                if(removes[i] && removes[i].id){
                    removes[i].id = 'label_tickerfile' + i;
                }
                label.htmlFor = 'tickerfile' + i;

            }
        }
        function addInput(){
            var inputContainer = document.getElementById('input-file-container');
            var inputs = document.getElementsByClassName('tickerfile_input');
            var label = document.getElementById('label_tickerfile');

            label.htmlFor = 'tickerfile' + inputs.length;
            var new_input = '<input type="file" name="tickerfile'+inputs.length+'" id="tickerfile'+inputs.length+'" class="tickerfile_input" onchange="fileCounter(this.id)" accept=".jpg, .jpeg, .png, .pdf"/>';
            inputContainer.insertAdjacentHTML('afterbegin',new_input);
        }
        function validateFiles(){
            var noValidData = 0;
            var inputs = document.getElementsByClassName('tickerfile_input');
            var button = document.getElementById('kayako_submit');
            var error_file = document.getElementById('error_file');
            var labels = document.getElementsByClassName('tickerfile_label');
            var allow_types = ['image/jpeg', 'application/pdf', 'image/png'];
            for (var i = 0; i < inputs.length; i++) {
                if((inputs[i] && inputs[i].files[0] && inputs[i].files[0].type && !allow_types.includes(inputs[i].files[0].type)) || !inputs[i].files || inputs[i].files[0].type == "" ){
                    noValidData = 1;
                    error_file.classList.remove("hide");
                    error_file.innerText = "Неверный тип файла"
                }

                if(inputs[i].files[0] && inputs[i].files[0].size > 2000000){
                    noValidData = 1;
                    error_file.classList.remove("hide");
                    error_file.innerText = "Максимальний размер файла 2Мб"
                }
            }
            if(noValidData) {
                button.classList.add("disabled");
            } else {
                button.classList.remove("disabled");
                error_file.classList.add("hide") ;
            }
        }
    </script>
<!--    <script src='https://www.google.com/recaptcha/api.js?onload=CaptchaCallback&render=explicit&hl=ru' async defer></script>-->
<!--    <script type="text/javascript">-->
<!--        var recaptcha1;-->
<!--        var recaptcha2;-->
<!--        var CaptchaCallback = function(){-->
<!--            recaptcha1 = grecaptcha.render('recaptcha1', {-->
<!--                'sitekey' : '6LfjywkTAAAAAH4cxNEJv61WqwKdlTP8Qy_5CIYp'-->
<!--            });-->
<!--            recaptcha2 = grecaptcha.render('recaptcha2', {-->
<!--                'sitekey' : '6LfjywkTAAAAAH4cxNEJv61WqwKdlTP8Qy_5CIYp'-->
<!--            });-->
<!--        };-->
<!--    </script>-->
<!-- <script src="//code.jivosite.com/widget/77uE1GPrR9" async></script> -->
</head>

<body>
    
    <style type="text/css">
    .false_input{
        width: 91% !important;
        margin-left: -99.5% !important;
		padding-top: 4px !important;
		padding-bottom: 4px !important;
		margin-top: 2px !important;
		margin-bottom: 2px !important;
        border: none !important;
        float: left !important;
		background-color: #fff;
    }
    .false_input_select{
        width: 100% !important;
        float: left !important;
        text-indent: 5px;
		background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAFAQMAAACdEUUJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTlBRDIyMEFDQkVFMTFFNDlDQ0VFQkQ2QzA2Q0IyNkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTlBRDIyMEJDQkVFMTFFNDlDQ0VFQkQ2QzA2Q0IyNkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OUFEMjIwOENCRUUxMUU0OUNDRUVCRDZDMDZDQjI2QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5OUFEMjIwOUNCRUUxMUU0OUNDRUVCRDZDMDZDQjI2QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PumiYSEAAAAGUExURf///7a2tgSMTlsAAAABdFJOUwBA5thmAAAAGUlEQVQI12P438DAUM/AwGAHxDJAzMHAAAAm+AJhY4/E3wAAAABJRU5ErkJggg==") 100% 50% no-repeat;
    }
    .rotator_spinner {
        background:url("knowledgebase/web/images/bigrotation2.gif") no-repeat scroll 50% 50% #E4E4E4;
        height:100%;
        opacity:0.6;
        position:absolute;
        width:100%;
        z-index:1500;
    }
    #beesenderchat-widget-startbutton {
        display: none !important;
        visibility: hidden  !important;
    }
</style>

<svg aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0; overflow: hidden;">
	<symbol id="svg-support_h_chat" viewBox="0 0 20 20"><g><path d="M13,6a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H8v1H8l-1.07-.8L6.67,16H2a1,1,0,0,1-1-1V7A1,1,0,0,1,2,6H13m0-1H2A2,2,0,0,0,0,7v8a2,2,0,0,0,2,2H6.33L9,19V17h4a2,2,0,0,0,2-2V7a2,2,0,0,0-2-2Z"/></g><path d="M19,3a2,2,0,0,0-2-2H6A2,2,0,0,0,4,3V4H5V3A1,1,0,0,1,6,2H17a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H16v1h1a2,2,0,0,0,2-2Z"/></g></symbol>
	<symbol id="svg-support_chat" viewBox="0 0 16 16"><rect width="16" height="16" fill="black" fill-opacity="0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.41421 12L7 13.5858V12H10C10.5523 12 11 11.5523 11 11V6C11 5.44772 10.5523 5 10 5H2C1.44772 5 1 5.44772 1 6V11C1 11.5523 1.44772 12 2 12H5.41421ZM8 14.7929C8 15.2383 7.46143 15.4614 7.14645 15.1464L5 13H2C0.895431 13 0 12.1046 0 11V6C0 4.89543 0.895431 4 2 4H10C11.1046 4 12 4.89543 12 6V11C12 12.1046 11.1046 13 10 13H8V14.7929Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 1C5.44772 1 5 1.44772 5 2V3H4V2C4 0.895431 4.89543 0 6 0H14C15.1046 0 16 0.895431 16 2V7C16 8.10457 15.1046 9 14 9H13V8H14C14.5523 8 15 7.55229 15 7V2C15 1.44772 14.5523 1 14 1H6Z"/></symbol>
    <symbol id="svg-support_viber" viewBox="0 0 20 20"><g><path d="M17.68,5.71h0A5.52,5.52,0,0,0,14,2.13h0a20.7,20.7,0,0,0-7.79,0h0A5.51,5.51,0,0,0,2.36,5.69h0a15.25,15.25,0,0,0,0,6.56h0a5.57,5.57,0,0,0,3.51,3.54v1.75A.71.71,0,0,0,7.08,18L8.85,16.2H10a20.66,20.66,0,0,0,3.9-.37h0a5.52,5.52,0,0,0,3.72-3.59h0A15.45,15.45,0,0,0,17.68,5.71Zm-1.4,6.2a4.15,4.15,0,0,1-2.62,2.52,19.3,19.3,0,0,1-4.14.33.08.08,0,0,0-.07,0l-1.3,1.41L6.78,17.58a.17.17,0,0,1-.24,0,.15.15,0,0,1,0-.11V14.59a.11.11,0,0,0-.08-.1h0A4.13,4.13,0,0,1,3.79,12,13.74,13.74,0,0,1,3.79,6,4.15,4.15,0,0,1,6.42,3.52a19.16,19.16,0,0,1,7.24,0A4.13,4.13,0,0,1,16.28,6a13.83,13.83,0,0,1,0,5.93Z"/><path d="M13.54,11.46a7.51,7.51,0,0,0-.67-.5c-.24-.17-.47-.33-.71-.49a.63.63,0,0,0-.76,0c-.23.18-.34.55-.66.59a1,1,0,0,1-.54-.13A3.75,3.75,0,0,1,8.13,8.6a.45.45,0,0,1,0-.41A.62.62,0,0,1,8.29,8l.22-.17a.67.67,0,0,0,.18-.91,8.48,8.48,0,0,0-1-1.41A.52.52,0,0,0,7,5.37,2.46,2.46,0,0,0,6.21,6,1,1,0,0,0,5.9,7c.17.4.33.81.52,1.2a10,10,0,0,0,1.5,2.29,10.32,10.32,0,0,0,3.92,2.62c.15.06.3.1.45.15a2.75,2.75,0,0,0,.41-.13,2.19,2.19,0,0,0,1-1A.52.52,0,0,0,13.54,11.46Z"/><path d="M10,4.9H9.93a.24.24,0,0,0-.24.24v0c0,.17.21.17.35.2a3.29,3.29,0,0,1,.65.07,3.47,3.47,0,0,1,2.79,2.89c0,.27.05.55.07.83s.08.27.24.27A.23.23,0,0,0,14,9.19a.07.07,0,0,0,0,0,3.72,3.72,0,0,0-.1-1A3.94,3.94,0,0,0,10,4.9Z"/><path d="M12.53,8.68a.51.51,0,0,0,0,.18.22.22,0,0,0,.41,0,.54.54,0,0,0,0-.13V8.28a2.56,2.56,0,0,0-1.4-2,3,3,0,0,0-1.27-.33.21.21,0,0,0-.22.18v0a.21.21,0,0,0,.17.24h0l.37.06a2.66,2.66,0,0,1,.73.23,2.19,2.19,0,0,1,.92.86A2.37,2.37,0,0,1,12.53,8.68Z"/><path d="M12,8.53a.51.51,0,0,0,0-.18A1.34,1.34,0,0,0,10.63,7h0a.24.24,0,0,0-.25.18.22.22,0,0,0,.17.26h0a1,1,0,0,1,.36.05.84.84,0,0,1,.26.12.87.87,0,0,1,.32.5,2.83,2.83,0,0,1,0,.31.24.24,0,0,0,.24.24h0A.18.18,0,0,0,12,8.53Z"/></g></symbol>
	<symbol id="svg-support_write" viewBox="0 0 16 16">	<rect width="16" height="16" fill="black" fill-opacity="0"/><rect x="0.5" y="2.5" width="15" height="11" rx="1.5" fill="none" stroke="white"/><path d="M1 3L6 8M15 3L10 8M6 8L7.29289 9.29289C7.68342 9.68342 8.31658 9.68342 8.70711 9.29289L10 8M6 8L1 13M10 8L15 13" stroke="white"/></symbol>
	<symbol id="svg-support_call" viewBox="0 0 19 19"><path data-name="path0 fill" d="M12.87,17c-2.3,0-4.67-2.33-6.36-4.07l-.68-.67C4.08,10.6,3,8.6,3,7,3,3.27,5.64,3,5.77,3h.14c1.69.67,2.64,1.47,2.77,2.53C8.88,6.87,7.73,8.07,7,8.67c-.07,0-.07.07-.07.13s0,.07.07.13l4.06,4a.24.24,0,0,0,.14.07c.07,0,.07,0,.14-.07a4.7,4.7,0,0,1,2.91-1.53c1.22,0,2.1.93,2.77,2.67v.13C16.93,14.33,16.59,16.93,12.87,17Z" fill="none" stroke-miterlimit="10"/></symbol>
	<symbol id="svg-search" viewBox="0 0 20 20"><g><path d="M16.56,15.63v-.94h-.94v-.94h-.94v-.94h-.24a6.57,6.57,0,1,0-1.63,1.63v.24h.94v.94h.94v.94h.94v.94h.94v-.94h.94v-.94Zm-7.5-1.91A4.69,4.69,0,1,1,13.75,9,4.69,4.69,0,0,1,9.06,13.72Z"/></g></symbol>
    <symbol id="svg-support_like" viewBox="0 0 18 18"><g id="Like"><path d="M15,7H11l1-2V3L11,1,10,0,8,1V4L5,9H0v8H5l3,1h6l2-3,1-3V9Zm1,5-1,3-1,2H8L5,16H4V10H5L9,4V1h1l1,2V5L10,8h4l2,1Z" fill="#256799"/></g></symbol>
    <symbol id="svg-support_dislike" viewBox="0 0 18 18"><g id="Like"><path d="M17,9V6L16,3,14,0H8L5,1H0V9H5l3,5v3l2,1,1-1,1-2V13l-1-2h4ZM16,9l-2,1H10l1,3v2l-1,2H9V14L5,8H4V2H5L8,1h6l1,2,1,3Z" fill="#256799"/></g></symbol>
	<symbol id="svg-list" viewBox="0 0 16 16" fill="none">
		<rect width="16" height="16" fill="black" fill-opacity="0"/>
		<path d="M3 14V2C3 1.44772 3.44772 1 4 1H9V5H13V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14Z" fill="#256799"/>
		<path d="M10 4V1L13 4H10Z" fill="#256799"/>
	</symbol>
    <symbol id="i16_chat" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.41421 12L7 13.5858V12H10C10.5523 12 11 11.5523 11 11V6C11 5.44772 10.5523 5 10 5H2C1.44772 5 1 5.44772 1 6V11C1 11.5523 1.44772 12 2 12H5.41421ZM8 14.7929C8 15.2383 7.46143 15.4614 7.14645 15.1464L5 13H2C0.895431 13 0 12.1046 0 11V6C0 4.89543 0.895431 4 2 4H10C11.1046 4 12 4.89543 12 6V11C12 12.1046 11.1046 13 10 13H8V14.7929Z" fill="#256799"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 1C5.44772 1 5 1.44772 5 2V3H4V2C4 0.895431 4.89543 0 6 0H14C15.1046 0 16 0.895431 16 2V7C16 8.10457 15.1046 9 14 9H13V8H14C14.5523 8 15 7.55229 15 7V2C15 1.44772 14.5523 1 14 1H6Z" fill="#256799"/>
    </symbol>
    <symbol id="i24_chat" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5998 13.7143H20.3998V12.5714H21.5998C22.3198 12.5714 22.7998 12.1143 22.7998 11.4286V2.28571C22.7998 1.6 22.3198 1.14286 21.5998 1.14286H7.1998C6.4798 1.14286 5.9998 1.6 5.9998 2.28571V4.57143H4.7998V2.28571C4.7998 1.02857 5.8798 0 7.1998 0H21.5998C22.9198 0 23.9998 1.02857 23.9998 2.28571V11.4286C23.9998 12.6857 22.9198 13.7143 21.5998 13.7143Z" fill="#256799"/>
        <path d="M13.2 18.9282H12.7V19.4282V22.8329L8.74483 19.0661L8.6 18.9282H8.4H2C1.17157 18.9282 0.5 18.2566 0.5 17.4282V7.71387C0.5 6.88544 1.17157 6.21387 2 6.21387H17.2C18.0284 6.21387 18.7 6.88544 18.7 7.71387V17.4282C18.7 18.2566 18.0284 18.9282 17.2 18.9282H13.2ZM13.0379 23.1548L13.0375 23.1544L13.0379 23.1548Z" stroke="#256799"/>
    </symbol>
    <symbol id="i24_telegram" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.35338 11.6301L6.96044 13.4079L8.74725 19.3337C8.8606 19.7127 9.31397 19.8505 9.60733 19.6024L12.1742 17.4388C12.4409 17.2114 12.8276 17.1976 13.1076 17.4113L17.7413 20.8909C18.0614 21.1321 18.5147 20.953 18.5948 20.5533L21.9884 3.67854C22.075 3.24444 21.6617 2.87925 21.2616 3.03773L2.34671 10.5828C1.88001 10.7688 1.88667 11.451 2.35338 11.6301ZM8.46056 12.4639L17.468 6.73102C17.628 6.62766 17.7947 6.85505 17.6547 6.98597L10.2207 14.1314C9.96069 14.3794 9.79401 14.7171 9.74067 15.0823L9.48732 17.0185C9.45398 17.2803 9.10062 17.301 9.03395 17.0529L8.06053 13.5181C7.95385 13.1185 8.11387 12.6844 8.46056 12.4639Z" fill="#0088CC"/>
    </symbol>
    <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="i24_viber">
      <g clip-path="url(#clip0_284_1957)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.22175 20.4448C6.21667 20.7986 6.21159 21.1525 6.2082 21.5064C6.20652 21.6805 6.20442 21.8551 6.20231 22.0299C6.19595 22.5586 6.18956 23.0892 6.19465 23.616C6.19465 23.6276 6.19426 23.64 6.19385 23.6528C6.19257 23.6931 6.19115 23.7375 6.20143 23.774C6.24885 23.9939 6.43855 24.0626 6.62147 23.9389C6.69599 23.8908 6.76374 23.8221 6.82472 23.7534C7.40058 23.08 7.98322 22.3997 8.56586 21.7194C9.03999 21.1698 9.50734 20.6202 9.9747 20.0706L9.97503 20.0702C10.036 19.9946 10.1038 19.9671 10.1986 19.974C10.4541 20.0035 10.7096 20.0026 10.9651 20.0018C11.0077 20.0016 11.0503 20.0015 11.0929 20.0015C11.4813 19.9969 11.8697 19.9984 12.2582 20C12.4524 20.0007 12.6466 20.0015 12.8408 20.0015C13.7893 20.0015 14.7378 19.9259 15.6727 19.7679C16.8651 19.5617 18.0033 19.1838 19.0669 18.5791C20.3541 17.8438 21.3365 16.8268 21.9869 15.48C22.5153 14.3805 22.7592 13.2055 22.8337 11.9892C22.8424 11.8007 22.8474 11.6122 22.8524 11.4238C22.859 11.1725 22.8657 10.9212 22.8812 10.6699C22.9218 10.0308 22.9354 9.38488 22.9421 8.73895C22.9489 8.12738 22.9083 7.52268 22.8066 6.91798C22.6644 6.10026 22.4476 5.31003 22.0885 4.56102C21.5126 3.34475 20.659 2.3896 19.5412 1.66808C18.6198 1.07025 17.6171 0.664827 16.5534 0.410578C15.4356 0.135714 14.2974 0.0257685 13.1457 0.0120253C12.2446 -0.00171785 11.3503 -0.00858955 10.456 0.0188968C9.70404 0.0395116 8.9588 0.108227 8.21357 0.231916C7.00764 0.431192 5.86946 0.816002 4.79903 1.4207C3.37631 2.23155 2.33298 3.38598 1.69614 4.91147C1.249 5.98344 1.04575 7.11038 1.0051 8.26481C0.99381 8.54731 1.00343 8.82981 1.01305 9.11231C1.02074 9.33831 1.02844 9.56431 1.02543 9.79031C1.01865 10.0377 1.02543 10.2919 1.0322 10.5393C1.03536 10.7029 1.04885 10.8664 1.06234 11.0299C1.07776 11.2168 1.09318 11.4038 1.09318 11.5907C1.09318 11.9617 1.12027 12.3328 1.1677 12.7039C1.29642 13.6521 1.52677 14.5729 1.94003 15.4388C2.37363 16.3389 2.96304 17.1086 3.71505 17.7614C4.42641 18.3798 5.23262 18.8196 6.0998 19.17C6.17741 19.2043 6.21132 19.2163 6.22581 19.2402C6.24042 19.2642 6.2353 19.3003 6.2353 19.3831C6.23191 19.737 6.22683 20.0909 6.22175 20.4448ZM18.3323 9.35573V9.35575V9.35577V9.3558C18.3364 9.45932 18.3401 9.55075 18.3286 9.63999C18.2812 10.0317 17.9424 10.2378 17.5834 10.0866C17.3666 9.99731 17.2988 9.8049 17.2785 9.59188L17.2785 9.59185C17.2582 9.33074 17.2378 9.06963 17.1972 8.80852C17.0617 8.00455 16.8449 7.22806 16.4181 6.52715C16.0997 6.00491 15.6864 5.57887 15.1715 5.24217C14.5753 4.85049 13.9114 4.62372 13.2204 4.46568C12.9223 4.39696 12.6174 4.34199 12.3125 4.3145C12.238 4.30763 12.1702 4.29389 12.1025 4.2664C11.8925 4.19081 11.7841 4.03276 11.7976 3.806C11.8247 3.40745 12.0483 3.2494 12.3532 3.2494C13.5117 3.22879 14.5686 3.53801 15.5374 4.17707C16.1064 4.55501 16.6146 5.00166 17.0346 5.54452C17.8476 6.59587 18.3218 7.79153 18.3286 9.09026C18.3257 9.18894 18.3291 9.27592 18.3323 9.35571V9.35573ZM5.28012 6.29433C5.30044 5.456 5.67983 4.82381 6.3641 4.37029C6.64864 4.17788 6.96029 4.02671 7.29903 3.95799C7.65132 3.88241 7.99007 3.93051 8.28816 4.15727C8.48463 4.30157 8.64722 4.48023 8.80982 4.65889L8.80982 4.6589C9.35181 5.2636 9.81251 5.9164 10.1851 6.64479C10.2461 6.76848 10.3003 6.89904 10.3409 7.03647C10.4561 7.42815 10.368 7.77173 10.1106 8.07408C10.0158 8.18402 9.90735 8.28023 9.79218 8.36956C9.68378 8.44514 9.57539 8.5276 9.47376 8.62381C9.23664 8.85057 9.16889 9.12543 9.24342 9.44153C9.27052 9.57209 9.31794 9.69578 9.36537 9.81259C9.64314 10.431 10.0158 10.9876 10.4968 11.4686C10.7813 11.7504 11.0862 11.9978 11.4249 12.2108C11.7501 12.4169 12.0753 12.6093 12.4412 12.7399C12.7799 12.8636 13.0373 12.788 13.2609 12.4994C13.2925 12.4582 13.3226 12.4162 13.3528 12.3742C13.413 12.2902 13.4732 12.2062 13.5455 12.1283C13.7487 11.9084 13.9791 11.7435 14.2704 11.6748C14.5888 11.5992 14.8937 11.6542 15.185 11.7847C15.4421 11.8929 15.6703 12.054 15.8962 12.2137L15.9505 12.252C16.4383 12.5956 16.9126 12.9598 17.3733 13.3377C17.4952 13.4408 17.6036 13.5576 17.7052 13.6882C17.9424 14.0043 17.9898 14.3547 17.8882 14.7258C17.7933 15.0831 17.6172 15.3923 17.3868 15.6741C16.9871 16.1688 16.4993 16.5399 15.8963 16.7392C15.7337 16.7941 15.5711 16.8285 15.4018 16.8422C15.2111 16.8604 15.0309 16.8041 14.8519 16.7482L14.8516 16.7481C14.8272 16.7404 14.8029 16.7328 14.7785 16.7254C14.6261 16.6828 14.4818 16.6153 14.3394 16.5487C14.2982 16.5294 14.2572 16.5103 14.2162 16.4918C13.3016 16.0795 12.4208 15.5916 11.5875 15.0281C10.3342 14.1829 9.21632 13.1934 8.24074 12.0321C7.51582 11.1663 6.88576 10.2318 6.35055 9.22851C6.00503 8.58945 5.70016 7.92978 5.44271 7.24949C5.34109 6.95401 5.28012 6.57607 5.28012 6.29433ZM16.5731 9.09191C16.5724 9.04732 16.5717 9.00522 16.5739 8.96683C16.5671 8.54766 16.5062 8.16972 16.391 7.79179C16.2284 7.3039 15.9777 6.87099 15.6458 6.47931C15.2528 6.02579 14.7921 5.66159 14.2569 5.40047C13.8369 5.20119 13.3965 5.08438 12.9426 5.01566C12.78 4.98818 12.6174 4.96069 12.4548 4.9813C12.2583 5.00192 12.1161 5.10499 12.0483 5.29053C11.967 5.49667 11.9602 5.69595 12.1093 5.88148C12.1432 5.92958 12.1906 5.96394 12.2448 5.99143C12.3532 6.0464 12.4683 6.07389 12.5903 6.0945C13.0374 6.16322 13.471 6.29378 13.8911 6.47244C14.494 6.73356 14.9344 7.15273 15.1783 7.77117C15.3544 8.20408 15.4628 8.65761 15.5103 9.118C15.5147 9.15186 15.5177 9.18571 15.5207 9.21932C15.5267 9.28804 15.5327 9.35575 15.5509 9.42035C15.6119 9.6746 15.788 9.79829 16.0658 9.79142C16.33 9.78455 16.5062 9.64024 16.5536 9.386C16.5763 9.2845 16.5746 9.183 16.5731 9.09191ZM14.8869 8.83532C14.8869 8.97275 14.8869 9.11018 14.8395 9.24074C14.7717 9.44002 14.6295 9.55684 14.4262 9.58432C14.2162 9.61181 14.0468 9.53622 13.9316 9.35756C13.8707 9.26823 13.8436 9.17203 13.83 9.06895L13.8194 8.99964C13.7966 8.84969 13.7735 8.69734 13.7148 8.56046C13.5726 8.21 13.3016 8.00386 12.9493 7.90765C12.8911 7.88996 12.828 7.87732 12.7684 7.86541L12.7684 7.8654L12.7393 7.85955C12.7122 7.85268 12.6834 7.84581 12.6546 7.83894C12.6258 7.83207 12.597 7.8252 12.5699 7.81832C12.3192 7.74274 12.1905 7.58469 12.1905 7.3648C12.1905 7.10368 12.3328 6.89066 12.5699 6.82194C12.8002 6.75323 13.0374 6.76697 13.2677 6.82881C13.8165 6.98686 14.223 7.33731 14.5414 7.80458C14.7514 8.10693 14.8869 8.45051 14.8869 8.83532Z" fill="#7365EE"></path>
      </g>
      <defs>
        <clipPath id="clip0_284_1957">
          <rect width="24" height="24" fill="white"></rect>
        </clipPath>
      </defs>
    </symbol>
    <symbol id="i24_messenger" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_320_684)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.241 0 0 4.953 0 11.64C0 15.138 1.434 18.162 3.768 20.25C3.963 20.424 4.083 20.67 4.089 20.934L4.155 23.07C4.176 23.751 4.878 24.195 5.502 23.919L7.884 22.869C8.085 22.779 8.313 22.764 8.526 22.821C9.621 23.121 10.785 23.283 12 23.283C18.759 23.283 24 18.33 24 11.643C24 4.956 18.759 0 12 0Z" fill="url(#paint0_radial_320_684)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.79389 15.0451L8.31888 9.45309C8.87988 8.56209 10.0799 8.34309 10.9229 8.97309L13.7279 11.0761C13.9859 11.2681 14.3399 11.2681 14.5949 11.0731L18.3808 8.19909C18.8848 7.81509 19.5448 8.42109 19.2088 8.95809L15.6809 14.5471C15.1199 15.4381 13.9199 15.6571 13.0769 15.0271L10.2719 12.9241C10.0139 12.7321 9.65987 12.7321 9.40488 12.9271L5.61889 15.8011C5.11489 16.1851 4.45489 15.5821 4.79389 15.0451Z" fill="white"/>
        </g>
        <defs>
            <radialGradient id="paint0_radial_320_684" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.62 23.8693) scale(26.1504)">
                <stop stop-color="#0099FF"/>
                <stop offset="0.6098" stop-color="#A033FF"/>
                <stop offset="0.9348" stop-color="#FF5280"/>
                <stop offset="1" stop-color="#FF7061"/>
            </radialGradient>
            <clipPath id="clip0_320_684">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </symbol>
    <symbol id="i24_email" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.1 6.7998L14.1 2.3998C12.8 1.5998 11.1 1.5998 9.8 2.3998L2.8 6.7998C1.7 7.5998 1 8.7998 1 10.1998V17.9998C1 19.6998 2.3 20.9998 4 20.9998H20C21.7 20.9998 23 19.6998 23 17.9998V10.1998C23 8.7998 22.3 7.5998 21.1 6.7998ZM21.7 19.0998L17.2 15.2998L22 11.1998V17.9998C22 18.3998 21.9 18.6998 21.7 19.0998ZM2.4 19.0998C2.1 18.7998 2 18.3998 2 17.9998V11.1998L6.8 15.2998L2.4 19.0998ZM4 19.9998C3.7 19.9998 3.4 19.8998 3.1 19.7998L10.4 13.5998C11.3 12.7998 12.7 12.7998 13.7 13.5998L21.1 19.7998C20.8 19.9998 20.4 20.0998 20.1 20.0998H4V19.9998Z" fill="#256799"/>
    </symbol>
    <symbol id="i16_phone" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8571 9.5C13.7912 9.5 14.5901 10.1911 15.2816 11.9406C15.2788 11.9514 15.2763 11.961 15.2738 11.9707C15.2688 11.9898 15.2639 12.009 15.2564 12.0368C15.2346 12.1176 15.2039 12.2227 15.1585 12.3448C15.0676 12.5897 14.9177 12.9019 14.666 13.2109C14.1777 13.8102 13.2507 14.4657 11.4241 14.5C10.374 14.4985 9.25136 13.9521 8.12886 13.1167C7.01419 12.2872 5.96854 11.2259 5.0747 10.2963L5.07477 10.2962L5.06784 10.2893L4.35355 9.57502L4.35362 9.57495L4.34655 9.56816C2.53774 7.82891 1.5 5.80776 1.5 4.28571C1.5 2.41653 2.14292 1.49741 2.72306 1.03329C3.28852 0.580922 3.85909 0.508949 3.9231 0.500874C3.92812 0.50024 3.93003 0.5 3.92857 0.5H3.92899H3.92941H3.92983H3.93025H3.93066H3.93108H3.9315H3.93192H3.93234H3.93276H3.93317H3.93359H3.93401H3.93443H3.93485H3.93527H3.93568H3.9361H3.93652H3.93694H3.93736H3.93777H3.93819H3.93861H3.93903H3.93944H3.93986H3.94028H3.9407H3.94111H3.94153H3.94195H3.94236H3.94278H3.9432H3.94361H3.94403H3.94445H3.94486H3.94528H3.94569H3.94611H3.94653H3.94694H3.94736H3.94777H3.94819H3.9486H3.94902H3.94943H3.94985H3.95026H3.95067H3.95109H3.9515H3.95192H3.95233H3.95274H3.95316H3.95357H3.95398H3.95439H3.95481H3.95522H3.95563H3.95604H3.95645H3.95686H3.95728H3.95769H3.9581H3.95851H3.95892H3.95933H3.95974H3.96015H3.96056H3.96096H3.96137H3.96178H3.96219H3.9626H3.96301H3.96341H3.96382H3.96423H3.96463H3.96504H3.96545H3.96585H3.96626H3.96666H3.96707H3.96747H3.96788H3.96828H3.96868H3.96909H3.96949H3.96989H3.97029H3.9707H3.9711H3.9715H3.9719H3.9723H3.9727H3.9731H3.9735H3.9739H3.97416C5.67202 1.19437 6.39964 1.94254 6.50386 2.7763L6.50371 2.77632L6.50553 2.78846C6.58795 3.33792 6.40042 3.89268 6.06218 4.41614C5.74612 4.90529 5.32363 5.32655 4.96787 5.62617C4.93344 5.64254 4.8992 5.66322 4.86602 5.68903C4.75483 5.77551 4.7023 5.88339 4.67744 5.95796C4.63962 6.07143 4.64236 6.19186 4.64281 6.21176C4.64284 6.213 4.64286 6.21385 4.64286 6.21429C4.64286 6.215 4.64285 6.21593 4.64285 6.21708C4.6428 6.22982 4.64264 6.2683 4.64645 6.30645C4.65198 6.36174 4.6664 6.43297 4.70457 6.50932C4.73847 6.57712 4.77948 6.62492 4.80135 6.64922C4.82062 6.67063 4.84287 6.69285 4.85725 6.70722L4.86073 6.7107L9.14645 10.9964L9.47215 10.6707C9.14645 10.9964 9.14653 10.9965 9.14662 10.9966L9.14679 10.9968L9.14715 10.9971L9.1479 10.9979L9.14949 10.9994L9.15311 11.003L9.16205 11.0115C9.16873 11.0177 9.17706 11.0252 9.18688 11.0336C9.20599 11.05 9.23331 11.0719 9.26729 11.0946C9.31898 11.1291 9.45685 11.2143 9.64286 11.2143C9.64357 11.2143 9.64451 11.2143 9.64565 11.2143C9.65839 11.2143 9.69687 11.2145 9.73502 11.2107C9.79032 11.2052 9.86155 11.1907 9.93789 11.1526C10.0057 11.1187 10.0535 11.0777 10.0778 11.0558C10.0992 11.0365 10.1214 11.0143 10.1357 10.9999L10.1393 10.9964C10.4126 10.723 10.8295 10.3409 11.3211 10.0296C11.8181 9.71479 12.3483 9.5 12.8571 9.5Z" stroke="#256799"/>
    </symbol>
    <symbol id="i24_close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18L18 6M6 6L18 18" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round"/>
    </symbol>
    <symbol id="i24_phone_full" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.8116 22C13.3623 22 9.81159 18.5 7.27536 15.9C6.86957 15.5 6.56522 15.2 6.26087 14.9C3.62319 12.4 2 9.4 2 7C2 1.4 5.95652 1 6.15942 1C6.26087 1 6.36232 1 6.36232 1C8.89855 2 10.3188 3.2 10.5217 4.8C10.8261 6.8 9.10145 8.6 7.98551 9.5C7.88406 9.5 7.88406 9.6 7.88406 9.7C7.88406 9.8 7.88406 9.8 7.98551 9.9L14.0725 15.9C14.0725 15.9 14.1739 16 14.2754 16C14.3768 16 14.3768 16 14.4783 15.9C15.2899 15.1 17.0145 13.6 18.8406 13.6C20.6667 13.6 21.9855 15 23 17.6C23 17.7 23 17.7 23 17.8C22.8985 18 22.3913 21.9 16.8116 22Z" fill="#79BE00"/>
    </symbol>
    <symbol id="i24_callback" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_320_837)">
            <path d="M16.8116 22C13.3623 22 9.81159 18.5 7.27536 15.9C6.86957 15.5 6.56522 15.2 6.26087 14.9C3.62319 12.4 2 9.4 2 7C2 1.4 5.95652 1 6.15942 1C6.26087 1 6.36232 1 6.36232 1C8.89855 2 10.3188 3.2 10.5217 4.8C10.8261 6.8 9.10145 8.6 7.98551 9.5C7.88406 9.5 7.88406 9.6 7.88406 9.7C7.88406 9.8 7.88406 9.8 7.98551 9.9L14.0725 15.9C14.0725 15.9 14.1739 16 14.2754 16C14.3768 16 14.3768 16 14.4783 15.9C15.2899 15.1 17.0145 13.6 18.8406 13.6C20.6667 13.6 21.9855 15 23 17.6C23 17.7 23 17.7 23 17.8C22.8985 18 22.3913 21.9 16.8116 22Z" fill="#256799"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9645 9.63714L14.9513 9.63714C14.5823 9.63714 14.2832 9.33801 14.2832 8.96901L14.2832 2.95581C14.2832 2.58681 14.5823 2.28767 14.9513 2.28767C15.3203 2.28767 15.6195 2.58681 15.6195 2.95581L15.6195 7.35599L22.4965 0.478965C22.7574 0.218043 23.1804 0.218043 23.4414 0.478965C23.7023 0.739888 23.7023 1.16293 23.4414 1.42385L16.5643 8.30088L20.9645 8.30088C21.3335 8.30088 21.6327 8.60001 21.6327 8.96901C21.6327 9.33801 21.3335 9.63714 20.9645 9.63714Z" fill="#256799"/>
        </g>
        <defs>
            <clipPath id="clip0_320_837">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </symbol>
    <symbol id="i24_phone" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.02649 17.0322C8.92384 20.0021 12.9801 24 16.9205 24C23.2947 23.8858 24.106 19.431 23.9901 19.2025C22.8311 16.2326 21.3245 14.405 19.2384 14.405C17.1523 14.405 15.1821 16.1184 14.255 17.0322C14.1391 17.1464 14.1043 17.1464 13.9884 17.1464C13.8725 17.1464 13.7914 17.0322 13.7914 17.0322L6.83775 10.1786C6.72185 10.0644 6.72185 10.0296 6.72185 9.95017C6.72185 9.87075 6.7523 9.79062 6.83775 9.72172C8.11258 8.69368 10.0828 6.63762 9.7351 4.35309C9.50331 2.52547 7.88079 1.15476 4.98344 0.0124962C4.72992 -0.103514 0 0.469402 0 6.86607C0 9.6075 1.8543 13.0343 4.86755 15.8899L6.02649 17.0322ZM4.75875 1.15549C7.44402 2.24911 8.44231 3.36885 8.58511 4.49477L8.58687 4.50868L8.58898 4.52253C8.70551 5.28825 8.44469 6.09055 7.92145 6.88866C7.40078 7.68287 6.68635 8.36794 6.10386 8.83766C5.74243 9.12912 5.56291 9.5371 5.56291 9.95017C5.56291 9.9509 5.56288 9.95226 5.56283 9.9542C5.56192 9.99097 5.55574 10.2393 5.67317 10.506C5.77964 10.7479 5.94288 10.912 6.01825 10.9863L12.9337 17.8023C12.9736 17.8473 13.0305 17.906 13.1045 17.9668C13.2366 18.0753 13.5435 18.2887 13.9884 18.2887C13.9878 18.2887 13.9885 18.2887 13.9884 18.2887C14.008 18.2895 14.2699 18.2998 14.5377 18.1983C14.818 18.092 15.0008 17.9125 15.0745 17.8399C15.5094 17.4112 16.1651 16.8197 16.9322 16.3409C17.7116 15.8544 18.5059 15.5473 19.2384 15.5473C19.8902 15.5473 20.4983 15.8169 21.1137 16.4684C21.7174 17.1075 22.288 18.0781 22.8174 19.3838C22.8008 19.4548 22.7748 19.5473 22.7361 19.6572C22.6171 19.9944 22.3925 20.4506 22.0014 20.9096C21.2505 21.7913 19.7838 22.8037 16.9104 22.8577C15.3203 22.8543 13.575 22.0342 11.7743 20.7134C9.99149 19.4058 8.31283 17.7277 6.86189 16.2405L6.85402 16.2324L5.67901 15.0743L5.67082 15.0666C2.7696 12.3171 1.15894 9.16831 1.15894 6.86607C1.15894 3.98344 2.20444 2.58964 3.107 1.89957C3.58163 1.53669 4.06013 1.3353 4.42151 1.2317C4.56023 1.19193 4.67522 1.16845 4.75875 1.15549Z" fill="#256799"/>
    </symbol>
</svg>

<header class="app-header" id="header">
    <div class="container">
        <div class="app-head-bar">
            <input id="help-write" type="checkbox" name="header-links" class="hide">
            <label for="help-write" class="item link with-arrow help-write">
                <svg class="svg size16 mhide"><use href="#i16_chat"></use></svg>
                <svg class="svg size24 dhide"><use href="#i24_chat"></use></svg>
                <span class="mhide">Написати</span>
            </label>
            <div class="hidden hidden-links">
                <label for="help-write" class="dhide hidden-backdrop"></label>
                <div class="hidden-container">
                    <label for="help-write" class="dhide hidden-close"><svg class="svg size24"><use href="#i24_close"></use></svg></label>
                    <div class="dhide hidden-head">
                        <strong class="size18">Написати</strong>
                    </div>
                    <ul class="nowrap unstyle">
                        <li>
                            <a style="display: " href="https://t.me/HelpRIA_bot" id="telegram_link_button_h" class="item-link unlink">
                                <svg class="svg size24"><use href="#i24_telegram"></use></svg>
                                Написати в Telegram
                            </a>
                        </li>
                        <li>
                            <a style="" href="viber://pa?chatURI=riacom" id="viber_link_button_h" class="item-link unlink">
                                <svg class="svg size24"><use href="#i24_viber"></use></svg>
                                Написати в Viber
                            </a>
                        </li>
                        <li>
                            <a  style="display: " href="https://www.messenger.com/t/207201232627998/" class="item-link unlink">
                                <svg class="svg size24"><use href="#i24_messenger"></use></svg>
                                Написати в Messenger
                            </a>
                        </li>
                        <li>
                            <a  style="display: " href="javascript:void(0);" class="item-link unlink" id="contact_us_button_2" onclick="_gaq.push(['_trackEvent', 'help_header', 'click_mail', 'help_header_clickmail'])">
                                <svg class="svg size24"><use href="#i24_email"></use></svg>
                                Написати на пошту                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <input type="checkbox" class="hide" name="header-links" id="m-show-phones">
            <label for="m-show-phones" style="display: table-cell" class="item link with-arrow help-write show-contacts-popup " onclick="gtag('event', 'click_button', { 'category': 'header', 'name_button': 'call_phone'})">
                <svg class="svg size24 dhide"><use href="#i24_phone"></use></svg>
                <svg class="svg size16 mhide"><use href="#i16_phone"></use></svg>
                <span class="mhide">Подзвонити</span>
            </label>
            <ul class="hidden nowrap unstyle mhide" style="left: 50%;right: -15px">
                <li class="item-link">
                    (067) 431 82 29                </li>
                <li class="item-link">
                    0 (800) 21 00 12                </li>
                <li class="item-link">
                    (093) 170 77 40                </li>
                <li class="item-link">
                    (050) 416 86 88                </li>
                <li class="item-link">
                    (372) 698 04 66 <br>
                    <span class="grey size13">естонський офіс</span>
                </li>
            </ul>
            <div class="phones-popup  ">
                <div class="phones-in">
                    <a href="tel:+380674318229" class="phone-item ga-phone-click" onclick="_gaq.push(['_trackEvent', 'help_phone', 'click_call_number_mobile', 'help_popup'])">
                        <svg class="svg svg-header svg-call"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-support_call" class="change-stroke"></use></svg>
                        +38 (067) 431 82 29                    </a>
                    <a href="tel:0800210012" class="phone-item ga-phone-click" onclick="_gaq.push(['_trackEvent', 'help_phone', 'click_call_number_mobile', 'help_popup'])">
                        <svg class="svg svg-header svg-call"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-support_call" class="change-stroke"></use></svg>
                        0 (800) 21 00 12                    </a>
                    <a href="tel:+380931707740" class="phone-item ga-phone-click" onclick="_gaq.push(['_trackEvent', 'help_phone', 'click_call_number_mobile', 'help_popup'])">
                        <svg class="svg svg-header svg-call"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-support_call" class="change-stroke"></use></svg>
                        +38 (093) 170 77 40                    </a>
                    <a href="tel:+380504168688" class="phone-item ga-phone-click" onclick="_gaq.push(['_trackEvent', 'help_phone', 'click_call_number_mobile', 'help_popup'])">
                        <svg class="svg svg-header svg-call"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-support_call" class="change-stroke"></use></svg>
                        +38 (050) 416 86 88                    </a>

                    <label class="close-phones phone-item" for="m-show-phones" onclick="_gaq.push(['_trackEvent', 'help_phone', 'click_call_cancelmobile', 'help_popup'])">Закрити</label>
                </div>
                <label class="close-phones-layer" for="m-show-phones"></label>
            </div>
        </div>
        <div class="heading">
            <a class="unlink" id="home_link" href="https://help.ria.com/index.php?" title="Головна">
                <i class="logo-ria-svg"></i>
            </a>
            <span class="size15 ms13" onclick="$('#home_link')[0].click();" style="cursor: pointer;">
                Служба турботи <span class="i-block">про користувачів RIA.com</span>
            </span>
        </div>
    </div>

</header>

<script>
    $("input:checkbox").on('click', function() {
        const $box = $(this);
        if ($box.is(":checked")) {
            let group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    });
</script>

    <section class="main-page m-bg-none">
	<div class="container">
		<div class="header-page"> 
                    <h1>Довідковий центр RIA.com</h1> 
                    <span class="fl-r multilang">
                                                    <a class="mr5" href="#" id="desktop-lang-ru">Рус</a>
                            Укр                                            </span>
                </div>
		<div class="qw-wrap">
			<ul class="unstyle help__menu">
                                    <li class="item-menu active" id="category_articles_header_popular">
                        <a href="javascript:void(0);" class="item__qw category_articles_header_link" category_id="popular">
                            <svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
                            Популярні запити                        </a>

                        <ul class="unstyle questions__list" id="category_articles_popular">
                                                            <li class="item-list">
                                    <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/847/139#start_content">
                                        Що таке публікації? Умови публікації на RIA.com                                    </a>
                                </li>
                                                            <li class="item-list">
                                    <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/608/170#start_content">
                                        Як додавати оголошення з допомогою Google-таблиць                                    </a>
                                </li>
                                                            <li class="item-list">
                                    <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/604/140#start_content">
                                        Як додати/змінити контактні дані?                                    </a>
                                </li>
                                                            <li class="item-list">
                                    <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/600/138#start_content">
                                        Що робити, якщо ви забули пароль?                                    </a>
                                </li>
                                                            <li class="item-list">
                                    <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/601/139#start_content">
                                        Які правила розміщення оголошень на сайті RIA.com?                                    </a>
                                </li>
                                                            <li class="item-list">
                                    <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/605/140#start_content">
                                        Як створити/видалити профілі розсилки?                                    </a>
                                </li>
                                                            <li class="item-list">
                                    <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/602/139#start_content">
                                        Як додати оголошення на сайт RIA.com?                                    </a>
                                </li>
                                                            <li class="item-list">
                                    <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/606/140#start_content">
                                        Як використовувати сервіс "Кошик"?                                    </a>
                                </li>
                                                            <li class="item-list">
                                    <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/633/147#start_content">
                                        Як очистити кеш/куки?                                    </a>
                                </li>
                                                            <li class="item-list">
                                    <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/599/138#start_content">
                                        Як увійти на сайт?                                    </a>
                                </li>
                                                    </ul>
                    </li>
                
				                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            					<li class="item-menu " id="category_articles_header_138">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="138">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Реєстрація. Вхід						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_138">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/600/138#start_content">
                                            Що робити, якщо ви забули пароль?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/599/138#start_content">
                                            Як увійти на сайт?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/598/138#start_content">
                                            Як зареєструватися на сайті RIA.com                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_139">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="139">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Публікація оголошень						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_139">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/847/139#start_content">
                                            Що таке публікації? Умови публікації на RIA.com                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/601/139#start_content">
                                            Які правила розміщення оголошень на сайті RIA.com?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/602/139#start_content">
                                            Як додати оголошення на сайт RIA.com?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/751/139#start_content">
                                            Ціни в національній валюті                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/801/139#start_content">
                                            Скільки оголошень можна безкоштовно опублікавати на RIA.com?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/752/139#start_content">
                                            Автоматична переопублікація оголошення                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/871/139#start_content">
                                            Що таке пакет публікацій?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/746/139#start_content">
                                            Як встановити знижку на товар?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/846/139#start_content">
                                            Про видалення однакових оголошень                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/848/139#start_content">
                                            Як підняти оголошення в пошуку                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/874/139#start_content">
                                            Правила публікації оголошень                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_140">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="140">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Особистий кабінет						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_140">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/604/140#start_content">
                                            Як додати/змінити контактні дані?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/605/140#start_content">
                                            Як створити/видалити профілі розсилки?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/606/140#start_content">
                                            Як використовувати сервіс "Кошик"?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/740/140#start_content">
                                            Налаштування курсу валют                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_141">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="141">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Пошук товарів на сайті						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_141">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/697/141#start_content">
                                            Як сортуються оголошення в пошуку?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/748/141#start_content">
                                            Як працює текстовий пошук?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/779/141#start_content">
                                            Як працювати із замовленнями і отримувати відгуки?                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_142">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="142">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Дії з оголошеннями						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_142">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/853/142#start_content">
                                            Автоматичне просування оголошень комерційних клієнтів                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/780/142#start_content">
                                            Послуга “Перетелефонуйте мені”                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/816/142#start_content">
                                            Автоматичне оновлення дати публікації                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/815/142#start_content">
                                            Автоматичне видалення оголошень з архіву                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/824/142#start_content">
                                            Корисні функції чату RIA.com                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/970/142#start_content">
                                            Як працює підбір запчастин до авто?                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_147">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="147">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Системна інформація						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_147">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/633/147#start_content">
                                            Як очистити кеш/куки?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/635/147#start_content">
                                            Як увімкнути JavaScript в популярних браузерах                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/632/147#start_content">
                                            Як оновити версію браузера?                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_151">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="151">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Рівні ТОП						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_151">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/694/151#start_content">
                                            Як використовувати Промо рахунок на RIA.com?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/695/151#start_content">
                                            Пакети просування                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/693/151#start_content">
                                            Промо рахунок                                          </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/696/151#start_content">
                                            Що таке рівні ТОП?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/698/151#start_content">
                                            Як відображаються кілька рівнів ТОП на оголошенні?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/699/151#start_content">
                                            Як підняти оголошення в пошуку                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_164">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="164">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Доставка з «Нова пошта»						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_164">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/756/164#start_content">
                                            Доставка з "Нова Пошта"                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/857/164#start_content">
                                            Інструкція: Як отримати API key (ключ) в кабінеті Нової пошти                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_167">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="167">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Безпечні покупки на RIA.com						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_167">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/804/167#start_content">
                                            Як повідомити про неунікальний контент?                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_168">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="168">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Оплата сервісів RIA.com						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_168">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/724/168#start_content">
                                            Приват24                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/722/168#start_content">
                                            За допомогою банківської карти ПриватБанк                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/753/168#start_content">
                                            Перевірка продавця на DIM.RIA системою BankID                                         </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/803/168#start_content">
                                            Apple Pay                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_170">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="170">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Імпорт						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_170">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/608/170#start_content">
                                            Як додавати оголошення з допомогою Google-таблиць                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/814/170#start_content">
                                            Вимоги до файлів імпорту                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_172">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="172">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Дзвінки на RIA.com						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_172">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/781/172#start_content">
                                            Акційна вартість розміщення для Перевірених продавців                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/825/172#start_content">
                                            Що таке колтрекінг?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/844/172#start_content">
                                            Як присвоюється статус частоти відповідей на дзвінки                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/828/172#start_content">
                                            Як використовувати бюджет дзвінків на RIA.com                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/839/172#start_content">
                                             Як відключити автовідповідач, щоб не оплачувати дзвінки без відповіді                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/829/172#start_content">
                                            Журнал дзвінків                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/877/172#start_content">
                                            Тарифікація дзвінків                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/878/172#start_content">
                                            Послуга “Дзвінки на RIA.com” та її переваги                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_174">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="174">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Замовлення на RIA.com						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_174">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/864/174#start_content">
                                            Правила оскарження (Товарні категорії, НЕ запчастини)                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/872/174#start_content">
                                            Автоматизація роботи через API                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/873/174#start_content">
                                            Як працює автоматичне вимкнення?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/920/174#start_content">
                                            Тарифікація замовлень через Кошик                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/921/174#start_content">
                                            Чому продавцям варто працювати з кошиком?                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_179">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="179">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Рейтинг продавця						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_179">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/765/179#start_content">
                                            Відгуки на RIA.com                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/856/179#start_content">
                                            Про успішні доставки в рейтингу продавця                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/840/179#start_content">
                                            Що таке рейтинг продавця?                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/922/179#start_content">
                                            Оцінка дзвінків покупцями                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/975/179#start_content">
                                            Компенсація за повернення товарів Новою поштою для Перевірених продавців                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
									<li class="item-menu " id="category_articles_header_182">
                        						<a href="javascript:void(0)" class="item__qw category_articles_header_link" category_id="182">
							<svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-list"></use></svg>
							Чат RIA.com						</a>

                                                    <ul class="unstyle questions__list" id="category_articles_182">
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/935/182#start_content">
                                            Правила користування Чатом                                        </a>
                                    </li>
                                                                    <li class="item-list">
                                        <a class="" href="https://help.ria.com/index.php?/Knowledgebase/Article/View/934/182#start_content">
                                            Корисні функції Чату RIA.com                                        </a>
                                    </li>
                                                            </ul>
                        					</li>
					
							</ul>

			<form class="search-question" action="https://help.ria.com/index.php?/Base/Search/Index" method="POST">
				<div>
					<input class="" type="text" placeholder="Введіть ключові слова пошуку"  name ="question" value="">
					<input type="hidden" name="main_category" value="137"/>
					<button onclick="_gaq.push(['_trackEvent', 'help_search', 'click_search', 'help_search_ria'])" class="btn-send no-style" type="submit" title="Пошук">
						<svg class="svg svg-header"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-search"></use></svg>
					</button>
				</div>
			</form>

		</div>
	</div>
</section>

<script type="text/javascript">
    $('.category_articles_header_link').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        var category_id = $(e.target).attr('category_id');
        var subcategories_list = $('#category_articles_' + category_id);
        if(subcategories_list){
            $('.item-menu').removeClass('active');
            $('#category_articles_header_' + category_id).toggleClass('active');
            $('html,body').animate({scrollTop: $('#category_articles_header_' + category_id).offset().top}, 500);
        };
    });
</script>
    
<div class="wrapper__support m-padding">
    <div class="container">
        <div class="row support__nav">
            <div class="item support_managers">
                <div class="data lh24 bold mb10">
                    Служба турботи <br>
                    про користувачів RIA.com 24/7
                </div>
                <img src="https://help.ria.com/app/assets/images/manager/photo_group_desk.svg?v=0.01" alt="Служба турботи про користувачів RIA.com" width="160" height="62">
            </div>
            <div class="item btns-wrap">
                <a href="viber://pa?chatURI=riacom" id="viber_link_button" class="btn_nav " onclick="_gaq.push(['_trackEvent', 'help_footer', 'click_viber', 'help_footer_viber'])">
                    <svg class="svg svg-support size24"><use href="#i24_viber"></use></svg>
                    <span class="dhide480">Написати в</span> Viber
                </a>
                <a href="https://t.me/HelpRIA_bot" id="telegram_link_button" class="btn_nav   " onclick="_gaq.push(['_trackEvent', 'help_footer', 'click_telegram', 'help_footer_telegram'])">
                  <svg class="svg svg-support size24"><use href="#i24_telegram"></use></svg>
                            <span class="dhide480">Написати в</span> Telegram
                </a>
                <a href="https://www.messenger.com/t/207201232627998/" id="messenger_link_button" class="btn_nav  " onclick="_gaq.push(['_trackEvent', 'help_footer', 'click_messenger', 'help_footer_messanger'])">
                    <svg class="svg svg-support size24"><use href="#i24_messenger"></use></svg>
                    <span class="dhide480">Написати в</span> Messenger
                </a>
				 <a href="javascript:void(0);"  class="btn_nav  "  id="contact_us_button_1" onclick="_gaq.push(['_trackEvent', 'help_footer', 'click_mail', 'help_footer_clickmail'])">
                    <svg class="svg svg-support size24"><use href="#i24_email"></use></svg>
					Написати <span class="dhide480">на пошту</span>
				</a>
				<!-- DESCTOP -->
				<a href="javascript:void(0);" class="btn_nav mhide  " id="show_call_numbers_button" onclick="gtag('event', 'click_button', { 'category': 'footer', 'name_button': 'call_phone'})">
                    <svg class="svg svg-support size24"><use href="#i24_phone_full"></use></svg>
					Подзвонити				</a>
				<!-- MOBILE -->
				<a href="javascript:void(0);" class="btn_nav dhide  "  id="show_mobile_call_numbers_button" onclick="gtag('event', 'click_button', { 'category': 'footer', 'name_button': 'call_phone'})">
                    <svg class="svg svg-support size24"><use href="#i24_phone_full"></use></svg>
					Подзвонити				</a>
				<a href="javascript:void(0);" class="btn_nav  " id="call_ticket_form_button" onclick="_gaq.push(['_trackEvent', 'help_footer', 'click_callback', 'help_footer_callback'])">
					<svg class="svg svg-support size24"><use href="#i24_callback"></use></svg>
					Сallback
				</a>
            </div>
<!--            <div class="span3">-->
<!--                <a href="javascript:void(0);" class="btn_nav unlink" id="contact_us_button_2">-->
<!--                    <svg class="svg svg-support"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-support_write"></use></svg>-->
<!--                    --><!--                </a>-->
<!--                <a href="javascript:void(0);" class="btn_nav unlink --><!--" id="show_call_numbers_button">-->
<!--                    <svg class="svg svg-support svg-call"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-support_call" class="change-stroke"></use></svg>-->
<!--                    --><!--                </a>-->
<!--                <a href="javascript:void(0);" class="btn_nav unlink --><!--" id="call_ticket_form_button">-->
<!--                    <svg class="svg svg-support svg-call"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-support_call" class="change-stroke"></use></svg>-->
<!--                    --><!--                </a>-->
<!--            </div>-->
        </div>
    </div>
</div>

<footer class="app-footer">
    <div class="container">
        <div class="copyright">
			<i class="logo-ria-svg"></i> <span class="grey size16">RIA.com © 2014-2024</span>
        </div>
    </div>
    <script>

        $('#desktop-lang-ru').on('click', function(){
           document.cookie='lang_id=2;path=/;domain=ria.com;';
           $('body').addClass('preloader');
           change_lang("ru");
        });
        $('#desktop-lang-uk').on('click', function(){
           document.cookie='lang_id=4;path=/;domain=ria.com;';
           $('body').addClass('preloader');
           change_lang("uk");
        });

        function change_lang(lang){
            var href = window.location.href;
            if (lang == "ru") href = href.replace("/uk/", "/ru/");
            else href = href.replace("/ru/", "/uk/");

            if(window.location.href == href) location.reload();
            else window.location.href=href;
        }

        $( "a" ).click(function(event) {
          let chatButtonsIds = ['viber_link_button', 'viber_link_button_h','telegram_link_button','telegram_link_button_h','show_online_chat_0','show_online_chat_1','show_online_chat_2']
          if (!chatButtonsIds.includes(event.target.id) && typeof(event.target.href) == 'string') {
            if(document.cookie.indexOf('lang_id=4')+1 && event.target.href &&!(event.target.href.indexOf('/uk/')+1)){  //uk
              if(event.target.href.indexOf('/ru/')+1)  event.target.href = event.target.href.replace('/ru/','/uk/');
              else event.target.href = event.target.href.replace(event.target.origin, event.target.origin + '/uk');
            }else if(document.cookie.indexOf('lang_id=2')+1 && event.target.href &&  !(event.target.href.indexOf('/ru/')+1)) {   //ru
              if(event.target.href.indexOf('/uk/')+1)  event.target.href = event.target.href.replace('/uk/','/ru/');
              else event.target.href = event.target.href.replace(event.target.origin, event.target.origin + '/ru')
            } else if(event.target.href && !(event.target.href.indexOf('/ru/')+1) && (window.location.href.indexOf('/ru/')+1)){
                event.target.href = event.target.href.replace(event.target.origin, event.target.origin + '/ru');
            }
          }
        });
    </script>
</footer>

    
<div id="call_ticket_form_id" class="hide">
    <div class="error loading hide">
        <i class="alert-error"></i>
        <div class="message">
            <strong>Вибачте</strong>, під час відправки сталася помилка, спробуйте, будь ласка, ще раз.
        </div>
    </div>

    <div class="modal-scrollable">
        <div class="modal fade in" style="margin-top: -300px; width: 332px; margin-left: -166px;">
            <div class="modal-header">
                <a href="javascript:void(0);" class="close" onclick="$('#call_ticket_form_id').toggleClass('hide');">× <span class="dhide">Назад</span></a>
                <h3 class="modal-title">Зворотній дзвінок</h3>
            </div>
            <div class="modal-content empty">
                <div class="modal-body">
                    <div class="error loading hide">
                        <i class="alert-error"></i>
                        <div class="message">
                            <strong>Вибачте</strong>, під час відправки сталася помилка, спробуйте, будь ласка, ще раз.
                        </div>
                    </div>

                    <form method="post" action="https://help.ria.com/index.php?/FormValidation/Index" name="SubmitTicketForm"
                          enctype="multipart/form-data" autocomplete="off" id="requestCallForm" class="grid size16">
                        <input type="hidden" name="ticketsubject" id="ticketsubject_call" value="Клиент заказал звонок">
                        <input type="hidden" name="ticketfullname" size="25" class="swifttextlarge" value="Клиент">
                        <input type="hidden" name="user_id" value="">
                        <input type="hidden" name="ticketemail" value="request.call@ria.com"/>
                        <input type="hidden" name="departmentid" value="1">
                        <input type="hidden" name="browser_info" class="browser_info" value="" />
                        <input type="hidden" name="_redirectAction" value="/index.php">
                        <input type="hidden" name="_csrf" value="cTI5R2h2b3MjUws2Kiw/H0RTYSsFDxtKN1p6PSUFIwcpZXdzKUUAQw==" />

                        <div style="color: salmon; display:none;" id="phone2-error">
                            Невірний номер телефону                        </div>
                        <div class="rows clearfix">
                                                        <input name="ticketphone" type="tel" size="45" class="swifttextwide swifttexterror w100 "
                                   value="" placeholder="Телефон*"
                                   id="ticketphone2_id" >
                                                    </div>
                        <div class="rows clearfix">
                            <select name="ticketcategory" id="ticketcategory" required class="false_input_select w100 size16 " style="color: gray;" onchange="changeOption(this);" >
                                <option value="0" style="display: none;"  selected>Виберіть тему звернення</option>
                                <option value="1">Питання по сайту</option>
                                <option value="2">Питання по модерації</option>
                                <option value="3">Скарга на оголошення</option>
                                <option value="4">Інше</option>
                            </select>
                        </div>
                        <div class="rows">
                            <textarea class="w100 no-resize" placeholder="Введіть Ваше запитання" rows="7" name="ticketmessage"></textarea>
                        </div>
                        <div class="rows">
                            <div style="color: salmon; display:none;" id="recaptcha2-error">
                                Ви невірно ввели каптчу                            </div>
                            <input type="hidden" name="g-recaptcha-response" id="recaptcha_tocken_call">
<!--                            <div class="g-recaptcha" id="recaptcha2" data-sitekey="6LfjywkTAAAAAH4cxNEJv61WqwKdlTP8Qy_5CIYp"></div>-->
                        </div>
                        <input type='submit' value="Замовити дзвінок" name="call_submit" class="button large w100" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop"></div>
</div>
    <div id="contacts" class="hide">
    <div class="modal-scrollable">
        <div class="modal fade in" style="margin-top: -300px; width: 332px; margin-left: -166px;">
            <div class="modal-header">
                <a href="javascript:void(0)" class="close" onclick="$('#contacts').toggleClass('hide'); $('#modal-header-only').addClass('hide'); _gaq.push(['_trackEvent', 'help_footer', 'click_mail_close', 'help_footer_popup']);">×</a>
                <h3 class="modal-title">Написати</h3>
            </div>
            <div class="modal-content empty">
                <div class="modal-body">
					<div id="modal-header-only" class="modal-header-only error--new hide">
						<i class="alert-error"></i>
						<div class="message">
							На жаль, зараз не зможемо відповісти на дзвінок. Щоб залишити своє звернення, скористайтесь формою нижче або напишіть в Facebook, messenger чи telegram или напишите в Facebook, messenger или telegram.						</div>
					</div>

                    <div class="error loading hide">
                        <i class="alert-error"></i>
                        <div class="message">
                            <strong>Вибачте</strong>, під час відправки сталася помилка, спробуйте, будь ласка, ще раз.
                        </div>
                    </div>

                    <form class="grid size16" method="post" action="https://help.ria.com/index.php?/FormValidation/Index"
                          name="SubmitTicketForm" enctype="multipart/form-data" autocomplete="off" id="SubmitTicketForm" onSubmit="createObject();">
                        <input type="hidden" name="user_id" value="">
                        <input type="hidden" name="browser_info" class="browser_info" value=""/>
                        <input type="hidden" name="_redirectAction" value="/index.php">
                        <input type="hidden" name="ticketfullname" id="ticketfullname" value="Клиент">
                        <input type="hidden" name="_csrf" value="cTI5R2h2b3MjUws2Kiw/H0RTYSsFDxtKN1p6PSUFIwcpZXdzKUUAQw==" />
                        <input type="hidden" name="departmentid" value="1"/>
                        <input type="hidden" name="ticketsubject" size="45" class="swifttextwide swifttexterror" id="ticketsubject" value="">
                        <input type="hidden" name="webId" class="webId" id="webId" value="">
                                                <div style="color: salmon; display:none;" id="email-error">
                            Некоректний email                        </div>
                        <div class="rows clearfix">
                            
                            <input name="ticketemail" type="email" size="45" class="swifttextwide swifttexterror w100 "
                                   value=""
                                   placeholder="Ваш e-mail" id="ticketemail1_id"  required>

                            <div class="grey size13 lh1_2 mt-5">*Обовʼязково для заповнення. На вказаний e-mail буде надіслано відповідь.</div>

                        </div>

                                                                        <div style="color: salmon; display:none;" id="phone-error">
                            Невірний номер телефону                        </div>
                        <div class="rows clearfix">
                                                        <input name="ticketphone" type="tel" size="45" class="swifttextwide swifttexterror  w100 "
                                   value="" placeholder="Телефон*"
                                   id="ticketphone1_id" >
                                                    </div>
                                                <!-- <div style="color: salmon; display:none;" id="category-error">
                            Вкажіть тему звернення                        </div> -->
                        <!-- <div class="rows clearfix">
                                <select name="ticketcategory" required class="false_input_select w100 size16 " style="color: gray;" onchange="changeOption(this);" id="ticketecategory1_id">
                                    <option value="0" style="display: none;"  selected>Виберіть тему звернення</option>
                                    <option value="7">Питання по сайту</option>
                                    <option value="3">Питання по модерації</option>
                                    <option value="1">Скарга на оголошення</option>
                                    <option value="6">Інше</option>
                                </select>
                        </div> -->
                                                <div style="color: salmon; display:none;" id="message-error">
                            Занадто коротке повідомлення                        </div>

                        <div class="rows">
                                <textarea class="w100 no-resize" placeholder="Введіть Ваше запитання" style="overflow: auto"
                                          rows="7" name="ticketmessage" id="ticketmessage1_id"></textarea>
                        </div>
                                                						<div class="rows">
							<div class="w100" style="color: salmon; display:none;" id="recaptcha-error">
								Ви невірно ввели каптчу							</div>
                            <input type="hidden" name="g-recaptcha-response" id="recaptcha_tocken_ticket">
<!--							<div class="g-recaptcha w100" id="recaptcha1" data-sitekey="6LfjywkTAAAAAH4cxNEJv61WqwKdlTP8Qy_5CIYp"></div>-->
						</div>
                        
                                                <div class="rows">
							<div id="input-file-container" class="input-file-container size13">
                                <span id="tickerfilelabel" class="file_name" style="width: 100%;"></span>
                                <!-- <span class="symbol-remove" title="Удалить">×</span> -->

								<!-- <input type="file" name="tickerfile0" id="tickerfile0" class="tickerfile_input" onchange="fileCounter(this.id)" accept=".jpg, .jpeg, .png, .pdf"/> -->
                                <p>
                                    <label for="tickerfile0" id="label_tickerfile" class="tickerfile_label" onclick="addFirstInput()"><svg class="svg size20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i20_add_file"></use></svg>Прикріпити файл</label>
                                </p>
							</div>
							<span id="error_file" class="boxed m_error size13 hide">Файл не добавлен</span>
                        </div>
                        

                        <input id="kayako_submit" type='submit' name="kayako_submit" value="Надіслати запитання" class="button large w100" onclick="_gaq.push(['_trackEvent', 'help_footer', 'click_sendmail', 'help_footer_sendrequest']);"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop"></div>
</div>
    
<div id="success_ticket_message" class="success-ticket-message hide">
    <div class="modal-scrollable">
        <div class="modal fade in" style="margin-top: -300px; width: 320px; margin-left: -160px;">
            <div class="modal-header">
                <a href="javascript:void(0)" class="close" onclick="$('#success_ticket_message').toggleClass('hide');">×</a>
                <h3 class="modal-title"> Дякуємо!</h3>
            </div>
            <div class="modal-content empty">
                <div class="modal-body">
					<div class="text-c">
						<img src="knowledgebase/web/images/icons/icon/success_request.png" alt="" class="box-panel"/>
						<p>
															Ваше звернення відправлено і буде розглянуто найближчим часом.
													</p>
					</div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop"></div>
</div>    <div id="contact_info_phones" class="hide">
    <div class="modal-scrollable">
        <div class="modal fade in" style="margin-top: -300px; width: 460px; margin-left: -230px;">
            <div class="modal-header">
                <a href="javascript:void(0);" class="close" onclick="$('#contact_info_phones').toggleClass('hide'); _gaq.push(['_trackEvent', 'help_footer', 'click_call_close', 'help_popup']);">× <span class="dhide">Назад</span></a>
                <h3 class="modal-title">Подзвонити</h3>
            </div>
            <div class="modal-content empty">
                <div class="modal-body">
                    <div class="call-modal">
						<picture class="avatar">
							<source srcset="https://help.ria.com/app/assets/images/manager/care_common.webp?v=0.01" type="image/webp">
							<img src="https://help.ria.com/app/assets/images/manager/care_common.png?v=0.01" alt="Служба турботи про користувачів RIA.com" width="85" height="85">
						</picture>
                        <div class="data">
							<div class="size16 lh24">
								<span class="bold size18"> Служба турботи</span> <br>
                                                                про користувачів RIA.com 24/7
							</div>

                            <div class="phone-wrap">
								<span class="s-phone">
                                    <a href="tel:+38(067) 431 82 29" class="size18 bold">(067) 431 82 29</a>								</span>
								<span class="s-phone">
                                    <a href="tel:+38(050) 416 86 88" class="size18 bold">(050) 416 86 88</a>								</span>
								<span class="s-phone">
                                    <a href="tel:0 (800) 21 00 12" class="size18 bold">0 (800) 21 00 12</a>								</span>
									<span class="s-phone">
                                         <a href="tel:+38(093) 170 77 40" class="size18 bold">(093) 170 77 40</a>								</span>
								<span class="s-phone">
									<a href="tel:(372) 698 04 66" class="size18 bold" >(372) 698 04 66</a> <span class="i-block grey size13 ml10">(естонський офіс)</span>
								</span>
                            </div>
                        </div>
                        <a href="javascript:void(0)" class="refine-search" onclick="$('#contact_info_phones').toggleClass('hide'); _gaq.push(['_trackEvent', 'help_footer', 'click_call_cancel', 'help_popup']);"><span class="size16">Закрити</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop"></div>
</div>
            
            <div id="beesender-chat"></div>
<script>
    window.beesenderchatconfig = {};
    window.beesenderchatconfig.channelId = 'bb28da17-ffa5-4abe-9b55-3cf58c6ccb12';
    window.beesenderchatconfig.connectorUrl = 'https://balance.beesender.com';
    window.beesenderchatconfig.sendInitialMessageOnWidgetButtonClick = true;
    window.beesenderchatconfig.initialMessageText = "#[UserInfo]# Клиент открыл виджет";
    // window.beesenderchatconfig.welcomeMessage = { text: "Вітаю! Чим можу Вам допомогти?" };
    window.beesenderchatconfig.clientId = "";
    window.beesenderchatconfig.title = "Служба турботи про користувачів";
    window.beesenderchatconfig.headerImageSrc = "https://help.ria.com/app/assets/images/common/logo-ria.svg";
    window.beesenderchatconfig.footerTitle = " ";
    window.beesenderchatconfig.enableFileUpload = true;
    window.beesenderchatconfig.fileServerUrl = 'https://bpmfiles.ria.com';
</script>

<script src="https://widget.beesender.com/3.0/widget.js" async></script>
<script src="https://widget.beesender.com/3.0/chunk-vendors.js" async></script>

<script type="text/javascript">
    jQuery(document).on('ready', function(){
        jQuery('#show_online_chat_0').on('click', function (ev) {
            // $('#beesenderchat-widget-startbutton').click();
            showJivoChat();
        });
        jQuery('#show_online_chat_1').on('click', function (ev) {
            // $('#beesenderchat-widget-startbutton').click();
            showJivoChat();
        });
        jQuery('#show_online_chat_2').on('click', function (ev) {
            // $('#beesenderchat-widget-startbutton').click();
            showJivoChat();
        });
    });

    function showJivoChat() {
      let item = document.getElementsByTagName("JDIV")[2];
      if (item) {
        item.classList.remove('hide');
        jivo_api.open();
      }
    }
</script>
    



    <script type="text/javascript">
        function setBeesenderChat(){
            var a = $('#beesenderchat');
            if(a){
                $($('.main-page')[0]).removeClass("preloader");
                $('#beesenderchat-widget-startbutton').click();
            }else{
                setTimeout(setBeesenderChat, 500);
            }
        }
        jQuery(document).on('ready', function(){
            var hash = window.location.hash.substr(1);
            var is_successed = false;
            if(hash == 'contact_us' && !is_successed){
                $('#contacts').removeClass('hide');
            }
            // else if(hash == 'chat'){
                // $($('.main-page')[0]).addClass("preloader");
            // }
            else if(hash == 'viber_chat'){
                                    window.location = "viber://pa?chatURI=auto.ria";
                    $('#viber_link_button').click();
                            }else if(hash == 'back_call'){
                $('#call_ticket_form_button').click();
            }else if(hash == 'call_us'){
                $('#show_call_numbers_button').click();
            }
        });
        jQuery('#mobile_category_select').on('change', function (ev) {
            $(location).attr('href', jQuery('#mobile_category_select').val());
        });
        jQuery('#contact_us_button_1').on('click', function(ev){
            $('#contacts').removeClass('hide');
        });
        jQuery('#contact_us_button_2').on('click', function(ev){
            $('#contacts').removeClass('hide');
        });
        jQuery('#call_ticket_form_button').on('click', function (ev) {
                            $('#call_ticket_form_id').removeClass('hide');
                    });
        jQuery('#show_call_numbers_button').on('click', function(ev){
                            var isMobile = false; //initiate as false
                // device detection
                if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
                    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
                    isMobile = true;
                }
                if (isMobile) {
                    $('.show-contacts-popup')[0].click();
                } else {
                    $('#contact_info_phones').toggleClass('hide');
                }
                    });
        jQuery('#show_mobile_call_numbers_button').on('click', function(ev){
            $('.show-contacts-popup')[0].click();
        });

        function changeOption(elem){
    //            console.log('change');
            if(elem.value == elem.options[elem.options.length - 1].value){
                elem.nextElementSibling.value='';
    //                elem.nextElementSibling.focus();
                elem.nextElementSibling.readOnly = false;
            }else if(elem.nextElementSibling){
                elem.nextElementSibling.value=elem.value;
                elem.nextElementSibling.readOnly = true;
            }
        }
        function showLinkFrom(link) {
            var l = jQuery(link);
            var show_block = l.attr('showBlock');
            var hide_block = l.attr('hideBlock');
            jQuery(".nav-sections .a-tabs").each(function (index) {
                $(this).removeClass('active');
            });
            l.addClass('active');
            if (hide_block) {
                jQuery('.success_support').each(function (index) {
                    $(this).addClass('hide');
                });
                var h_b = jQuery("#" + hide_block).addClass('hide');
            }
            if (show_block) {
                var s_b = jQuery("#" + show_block).removeClass('hide');
            }
            getBrowserInfo();
        }
    </script>
		<script type="text/javascript">
			function jivo_onChangeState(state) {
				if (state == 'label' || state == 'chat/min') {
					setTimeout(function() {
						hideJivoChat()
					}, 300)
				}
			}
			function jivo_onLoadCallback() {
				var hash = window.location.hash.substr(1);
				if (hash == 'chat') {
                                            jivo_api.open();
                        $($('.main-page')[0]).removeClass("preloader");
                    				} else {
					hideJivoChat();
				}
				setAddUserData();
			}
			function hideJivoChat() {
				let item = document.getElementsByTagName("JDIV")[2];
				if (item) {
					item.classList.add('hide');
				}
			}

			function setAddUserData() {
				let user_id = '';
				let project_name = 'RIA.com';
				let info = jivo_api.getContactInfo();
				if ((info.client_name || info.email) && !info.description) {
					jivo_api.setContactInfo(
						{
						"name": info.client_name,
					    "email": info.email,
					    "phone": info.phone,
						"description": `User ID: ${user_id}
                                        Project Name: ${project_name}`
						}
					);
				}
			}
		</script>
</body>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7339XJW"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

</html>
