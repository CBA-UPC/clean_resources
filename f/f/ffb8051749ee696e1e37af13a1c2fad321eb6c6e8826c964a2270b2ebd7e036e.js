try { 
	webengage.survey.onComplete(function (data) {
    if (data.surveyId === "33l1ii5") {
      var Email;
      var Interest;
      var NewsLetter;
     // console.log(data);
      
        for (var i = 0; i < data.questionResponses.length; i++) {
            if (
                Object.prototype.toString.call(
                    data.questionResponses[i].value.values
                ) == "[object Object]"
            ) {
                for (var keys in data.questionResponses[i].value.values) {
                  if (keys == "Enter Your Email") {
                        Email = data.questionResponses[i].value.values[keys];
                    }    
                }       
            }
            if (Object.prototype.toString.call(data.questionResponses[i].value.values) == "[object Array]") {
              //  console.log("array");
                for (var j = 0; j < data.questionResponses[i].value.values.length; j++) {
                    var item = data.questionResponses[i].value.values;
                   if (data.questionResponses[i].questionId == "~qj13a4") {
                      Interest  = item;
                    }
               }
            } 
        }
   
     if (data.surveyId === '33l1ii5') 
     {
        webengage.user.setAttribute('we_email_opt_in', true);
       
       NewsLetter="YES";
       
    }
     
      else{
       NewsLetter="NO";
      }
      
      // console.log("we_Email", Email);
    //  console.log("Interest ", Interest);
      //  console.log("Interest ", NewsLetter);
      var Int = Interest.join(', ');
        if (
            webengage &&
            webengage.state &&
            typeof webengage.state.getForever === "function" &&
            (webengage.state.getForever().cuid === null ||
                webengage.state.getForever().cuid === undefined) &&
            Email !== null
        ) {
            //webengage.user.login(Email);
            webengage.user.setAttribute({               
              "we_email":Email,
              "Interest": Int,
                "NewsLetter": NewsLetter
            });
          
          webengage.track('lead submit', {
               "we_email":Email,
               "Interest": Int,
               "NewsLetter": NewsLetter
               });
        }
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~f05d58e');
	 }
 }
red_collap_wrap__9InQS .appliedFiltered_filtered_content_wrap__tvJNm ul::-webkit-scrollbar-thumb{border-radius:10px;background-color:#a39f9f}.appliedFiltered_filtered_collap_wrap__9InQS .appliedFiltered_filtered_content_wrap__tvJNm ul::-webkit-scrollbar-track{padding:2px 0;background-color:var(--adsBg)}.breadcrumbsWidget_breadcumbsWidget__wKvmM{width:100%;height:auto}.breadcrumbsWidget_breadcumbsWidget__wKvmM ul{width:100%;height:auto;display:flex;flex-wrap:wrap}.breadcrumbsWidget_breadcumbsWidget__wKvmM ul li{position:relative;padding-left:10px;padding-right:10px}.breadcrumbsWidget_breadcumbsWidget__wKvmM ul li,.breadcrumbsWidget_breadcumbsWidget__wKvmM ul li a{color:var(--breadCrumbCol);font-size:16px;line-height:20px}.breadcrumbsWidget_breadcumbsWidget__wKvmM ul li:after{content:"/";position:absolute;right:-5px;color:var(--breadCrumbCol)}.breadcrumbsWidget_breadcumbsWidget__wKvmM ul li:last-child{color:var(--breadCrumbCol)}.breadcrumbsWidget_breadcumbsWidget__wKvmM ul li:last-child:after{content:""}.ads_ads_container__O2N1n{min-width:300px;min-height:250px;background:var(--adsBg);margin:20px auto;padding:0;text-align:center}.ads_ads_container__O2N1n .ads_adtext__I4t7L{font-size:11px;color:#323232;line-height:16px;text-align:center;text-transform:uppercase}.ads_rhs_ads_wrapper__fuF_u{min-width:300px;max-width:300px;min-height:250px;border:1px solid var(--adsBorder);padding:5px 0 10px;background:var(--adsBg);text-align:center;margin:0 auto 20px}.ads_rhs_ads_wrapper__fuF_u .ads_ad_text__x6W84{font-size:11px;color:#323232;line-height:16px;text-align:center;text-transform:uppercase}@media(min-width:730px){.ads_ads_container__O2N1n{min-width:728px;min-height:90px;margin-top:30px;margin-bottom:30px;border:1px solid var(--adsBorder);padding:5px 0 10px;display:table}}