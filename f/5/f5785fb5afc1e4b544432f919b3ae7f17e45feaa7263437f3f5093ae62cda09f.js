var snappush_apiDomain = "https://push.snapfit.co.kr";
var snappush_localDomain = "<?php echo $_SERVER['HTTP_HOST']; ?>";
if(snappush_localDomain == "pushdevdb.snapfit.co.kr") snappush_apiDomain = "//pushdevdb.snapfit.co.kr";

/**
 * @auth 김경호
 * @date 2019-12-27
 * cafe24 회원가입
 */
var snappushJoinCheck = function() {
    var userID = '';            // 회원 아이디
    var isSNS = 0;              // SNS 회원가입 여부
    var userPhoneNumber = '';   // SMS 휴대전화 번호
    var userEmail = '';         // 이메일
    var userName = '';          // 회원 이름
    var storeName = '';         // store_name
    var spm_user_id_pc = snap_spm_get_spmuserid_pc();
    var spm_user_id_m = snap_spm_get_spmuserid_m();
    var spm_timestamp = Math.floor(+ new Date() / 1000);

    /**
     * 회원 이름 데이터 수집
     */
    var get_name = function (target_document) {
        var userName = '';
        if(target_document.getElementById("name") != null) {
            userName = target_document.getElementById("name").value;
        } else {
            try {
                userName = target_document.getElementById("nameContents").innerText;
            } catch(e) {}

            try {
                userName = target_document.getElementById("snsNameContents").innerText;
            } catch(e) {}
        }

        return userName;
    }

    /**
     * SMS 휴대폰번호 데이터 수집 - SMS 수신 거부일 지라도 전화 번호는 수집하고 message_reject 에 ,sms 를 추가 한다.
     * phone_type_id : hphone or etcphone
     */
    var get_hphone = function (phone_type_id, target_document) {
        var userPhoneNumber = '';
        //if(agree_check("sms", target_document) == false) return userPhoneNumber;

        if(target_document.getElementById(phone_type_id + "1") && target_document.getElementById(phone_type_id + "2") && target_document.getElementById(phone_type_id + "3")) {
            userPhoneNumber = target_document.getElementById(phone_type_id + "1").value+target_document.getElementById(phone_type_id + "2").value+target_document.getElementById(phone_type_id + "3").value;
        }
        return userPhoneNumber;
    }

    /**
     * 이메일 데이터 수집 - email 수신 거부일 지라도 전화 번호는 수집하고 message_reject 에 ,email 를 추가 한다.
     */
    var get_email = function (target_document) {
        var userEmail= '';
        //if(agree_check("email", target_document) == false) return userPhoneNumber;

        if(target_document.getElementById("email2")) {
            userEmail = target_document.getElementById("email1").value + '@' + target_document.getElementById("email2").value;
        } else {
            try {
                userEmail = target_document.getElementById("email1").value;
            } catch(e) {}
        }
        return userEmail;
    }

    /**
     * SMS or email 수잡 동의 체크
     */
    var agree_check = function (check_type, target_document) {
        if(check_type=='sms') {
            try {
                if(target_document.getElementsByName("is_sms")[0].attributes.type.value == "checkbox" && target_document.getElementsByName("is_sms")[0].checked) return true;
            } catch(e) {}
            try {
                if(target_document.getElementsByName("is_sms")[0].attributes.type.value == "radio") {
                    if(target_document.getElementsByName("is_sms")[0].value == 'T' && target_document.getElementsByName("is_sms")[0].checked) return true;
                    if(target_document.getElementsByName("is_sms")[1].value == 'T' && target_document.getElementsByName("is_sms")[1].checked) return true;
                }
            } catch(e) {}
            try {
                if(target_document.getElementsByName("is_sms")[0].attributes.type.value == "hidden" && target_document.getElementsByName("is_sms")[0].value == "T") return true;
            } catch(e) {}
        }
        if(check_type=='email') {
            try {
                if(target_document.getElementsByName("is_news_mail")[0].attributes.type.value == "checkbox" && target_document.getElementsByName("is_news_mail")[0].checked) return true;
            } catch(e) {}
            try {
                if(target_document.getElementsByName("is_news_mail")[0].attributes.type.value == "radio") {
                    if(target_document.getElementsByName("is_news_mail")[0].value == 'T' && target_document.getElementsByName("is_news_mail")[0].checked) return true;
                    if(target_document.getElementsByName("is_news_mail")[1].value == 'T' && target_document.getElementsByName("is_news_mail")[1].checked) return true;
                }
            } catch(e) {}
            try {
                if(target_document.getElementsByName("is_news_mail")[0].attributes.type.value == "hidde  } catch(e) {}    
        }
        return false;
    }

    /**
     * 회원탈퇴의 경우 푸시 쿠키 삭제
     */
    this.reset_cookie = function() {
        snap_spm_set_spmuserid_pc('');
        snap_spm_set_spmuserid_m('');
    }

    /**
     * 
     * SNS 회원 가입 submit Event 추가  
     * 0.05 초마다 ifrm_sns 가 로드되었는지 확인 하고.. onload 이벤트 추가 후에는 멈준다.
     */
    this.snapSnsSubmitEventAdd = function(addCheck) {
        if(addCheck >= 10) return true;

        setTimeout(function () {
            if(document.querySelector("#mCafe24SnsAgree #ifrm_sns") != null) {
                try {
                    /**
                     * 먼저 ifrm_sns 가 로드가 완료 되었는지 확인 후에 완료 되면 바로 click event 추가
                     * ifrm_sns 이 여러개 있을 경우을 대비하여 querySelectorAll 로 전체 ifrm_sns 이벤트 추가
                     */
                    var sns_iframe =  document.querySelectorAll('#mCafe24SnsAgree #ifrm_sns');
                    for(var key in sns_iframe){
                        var sns_elements = sns_iframe[key];
                        var sns_document = sns_elements.contentWindow.document;
                        if(sns_document.readyState == "complete") {
                            snap_sns_check = sns_elements.getAttribute("snap-data");
                            if(snap_sns_check == 'yes') continue;   // 이미 이멘트추가된 ifrm_sns 일경우 continue
                            sns_elements.setAttribute("snap-data","yes");

                            this.cafeSNSiframeInit(sns_document);
                        }
                    }
                } catch(e) { }
            }

            addCheck++;
    
            snapSnsSubmitEventAdd(addCheck);
        }, 50);
    }

    this.cafeSNSiframeInit = function(sns_document) {
        // iframe 내의  SNS 회원 가입 document
        //var sns_document = document.querySelector("#mCafe24SnsAgree #ifrm_sns").contentWindow.document;

        // SNS Iframe 에 cafe24 회원가입 수집 처리를 위한  script Load
        var scripttag = document.createElement("script");
        scripttag.type = 'text/javascript';
        scripttag.async = true;
        scripttag.src = snappush_apiDomain + '/js/push/join_cafe_init.js';
        sns_document.head.appendChild(scripttag);

        sns_document.querySelector("#agreementClick").addEventListener("click", function() {
            console.log("SNS iframe Load !!!");
            isSNS = 1;
            userName = get_name(sns_document);
            userPhoneNumber = get_hphone("mobile", sns_document);
            userEmail = get_email(sns_document);

            var ifrm = sns_document.createElement("iframe");
            ifrm.setAttribute("name","snappush-join-info");
            ifrm.setAttribute("id","snappush-join-info");
            ifrm.style.display = "none";
            ifrm.style.visibility = "hidden";
            sns_document.body.appendChild(ifrm);
            
            if(sns_document.getElementById("snappush-join-form")) {
                var form = sns_document.getElementById("snappush-join-form");
                form.innerHTML = '';
            } else {
                var form = sns_document.createElement("form");
                form.setAttribute("method", "get");
                form.setAttribute("action", snappush_apiDomain + "/Spm_Mgr/setJoinUserInfo");
                form.setAttribute("target","snappush-join-info");
                form.setAttribute("id", "snappush-join-form");
                sns_document.body.appendChild(form);
            }
            
            var message_reject = '';
            if(agree_check("sms", sns_document) == false) message_reject = ',sms';
            if(agree_check("email", sns_document) == false) message_reject = message_reject + ',email';
            
            var input = sns_document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("name", "data");
            input.setAttribute("id", "snappush-join-form-data");
            input.setAttribute("value", snappush_apiDomain + "/Spm_Mgr/setJoinUserInfo?data=" + encodeURIComponent(JSON.stringify({"storeName":storeName,"userID":userID,"userPhoneNumber":userPhoneNumber,"userEmail":userEmail,"userName":userName,"isSNS":isSNS,"spm_user_id_m":spm_user_id_m,"spm_user_id_pc":spm_user_id_pc,"spm_timestamp":spm_timestamp, "message_reject":message_reject})));
            form.appendChild(input); 
            
            // SNS 회원 가입 시점 확인
            //snappushSnsAgreemwntChange();

        });
    }


    this.init = function () {
        storeName = document.getElementById("sf_store_name").value;

        // 회원 가입
        if(document.getElementById("joinForm") != null) {
            document.getElementById("joinForm").onsubmit = function(event){
                target_document = document;
                userID = document.querySelector("#joinForm #member_id").value;
                userName = get_name(target_document);
                userPhoneNumber = get_hphone("mobile", target_document);
                userEmail = get_email(target_document);

                var message_reject = '';
                if(agree_check("sms", document) == false) message_reject = ',sms';
                if(agree_check("email", document) == false) message_reject = message_reject + ',email';
        
                var join_param = encodeURIComponent(JSON.stringify({"storeName":storeName,"userID":userID,"userPhoneNumber":userPhoneNumber,"userEmail":userEmail,"userName":userName,"spm_user_id_m":spm_user_id_m,"spm_user_id_pc":spm_user_id_pc,"spm_timestamp":spm_timestamp, "message_reject":message_reject}));
                var join_img = document.createElement("img");
                join_img.setAttribute("name","snappush-join-info");
                join_img.setAttribute("width","1");
                join_img.setAttribute("height","1");
                join_img.style.display = "none";
                join_img.setAttribute("src", snappush_apiDomain + "/Spm_Mgr/setJoinUserInfo?data="+join_param);
                document.body.appendChild(join_img);

                document.getElementById("joinForm").onsubmit = null;
                return true;
            };
        }

        // 회원 정보 수정 및 회원 탈퇴
        if(document.getElementById("editForm") != null) {
            document.getElementById("editForm").onsubmit = function(event){
                target_document = document;
                var is_user_out = 0;

                var ifrm = document.createElement("iframe");
                ifrm.setAttribute("name","snappush-member-modify");
                ifrm.style.display = "none";
                ifrm.style.visibility = "hidden";
                document.body.appendChild(ifrm);

                var form = document.createElement("form");
                form.setAttribute("method", "post");
                form.setAttribute("action", snappush_apiDomain + "/Spm_Mgr/userInfoModify");
                form.setAttribute("target","snappush-member-modify");
                document.body.appendChild(form);

                var message_reject = '';
                action_url = document.getElementById("editForm").action;
                if(action_url.indexOf("/exec/front/Member/del/") >= 0) {
                    // 회원 탈퇴의 경우
                    userID = document.querySelector("#editForm #member_id").value;
                    is_user_out = 1;
                } else {
                    // 회원 수정의 경우
                    userID = document.querySelector("#editForm #member_id").value;
                    userPhoneNumber = get_hphone("mobile", target_document);
                    userEmail = get_email(target_document);
                    is_user_out = 0;

                    if(agree_check("sms", document) == false) message_reject = ',sms';
                    if(agree_check("email", document) == false) message_reject = message_reject + ',email';
                }

                var input = document.createElement("input");
                input.setAttribute("type", "hidden");
                input.setAttribute("name", "data");
                input.setAttribute("value", encodeURIComponent(JSON.stringify({"storeName":storeName,"userID":userID,"userPhoneNumspm_user_id_pc":spm_user_id_pc,"spm_timestamp":spm_timestamp, "is_user_out":is_user_out, "message_reject":message_reject})));
                form.appendChild(input);
                form.submit();

                // 회원탈퇴의 경우 푸시 쿠키 삭제
                if(is_user_out == 1) {
                    reset_cookie();
                }

                return true;
            };
        }

        var checkSnsEvent = 0;
        // SNS 회원 가입
        setTimeout(function () {
            snapSnsSubmitEventAdd(checkSnsEvent);
        }, 2000);

    }();
}();


/**
 * 카페24 SNS 가입시 Oauth2 Ajax 통신 전달 시점 확인하여 회원 가입 처리
  */
function snappushSnsAgreemwntChange() {
    var sns_document = document.querySelector("#mCafe24SnsAgree #ifrm_sns").contentWindow.document;

    setTimeout(function () {
        if (sns_document.getElementById("agreementClick") == null) {
            document.getElementById("snappush-join-form").submit();
            return;
        }
        snappushSnsAgreemwntChange();
    }, 0);
}