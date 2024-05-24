function galaxyCathay_ajax(url,cb,fn){
	$.ajax({
		url:url,
		dataType:"jsonp",
		cache:true,
		jsonpCallback:cb,
		success:function(data){
			if (String(data.sdks) == "undefined") { 
				fn(data,"cathay");
			}else{
				getAdWEBDataFromOutside(data.sdks,fn);
			}
			if(data.eventExposure!=''){
				$("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
			}
		},
		error: 
	})
}
function getAdWEBDataFromOutside (adSdks,fn){
	var nowindex = Math.floor(Math.random()*100+1)
	var nowindexNew = 0;
	for(var i= 0; i<adSdks.length; i++){
		nowindexNew = nowindexNew + adSdks[i].pr;
		if(nowindexNew >= nowindex){
			var adid = adSdks[i].adid;
			var type = adSdks[i].type;
			if(type  == "minli"){
				$.ajax({
					type: "post",
					url: "https://rtb.otthink.cn:8080/rtb/std_json",
					data:JSON.stringify({"key":adid}),
					headers: {'Content-Type': 'application/json;charset=utf-8',},
					success: function (data){
						if(String(data.ad) != "undefined"){
							var data = JSON.parse(data.ad[0].admnative)
							var dd = "";
							miliCall(minlijiaoyan(data.impression));
							fn(data,"minli");
							
						}else{
							console.log("minli异常")
						}
					},
					err		}
				}); 
			}
			/*else if(type  == ""){

			}else if(type  == ""){

			}else if(type  == ""){

			}else if(type  == ""){

			}else{

			}*/
		}
		//return;
	}
}
function minlijiaoyan(url){
	var gob=["publicis-groupe.cn","agileadx.com","mtty.com"];
	var newurl=[];
	for(var i=0;i<url.length;i++){
		for(var j=gob.length-1;j>=0;j--){
			if(url[i].split("/")[2].indexOf(gob[j])>-1){
				newurl.push(url[i]);				
			}
		}
	}
	return newurl;
}
function miliCall(arrayList,obj){
	if(obj != undefined){
		obj.click(function(){
			$.each(arrayList,function(n,value){
				var miliCallImg = new Image();
				miliCallImg.src = value + '&' + Math.random();
				miliCallImg.onload = function(){
					//console.log(value);
				}; 
			})
		})
	}else{
		$.each(arrayList,function(n,value){
			var miliCallImg = new Image();
			miliCallImg.src = value + '&' + Math.random();
			miliCallImg.onl		}; 
		})
	}
}

/*
galaxyCathay_ajax('//galaxy.bjcathay.com/s?z=cathay&c=2113&op=1','cntvPczh_2113',bjcathay_2113);
function bjcathay_2113(data,type){
	if(type == 'cathay'){
		var clickUrl = data.clickUrl;
		var smallImg = data.smallImg;
		var title = data.title;
		var brief = data.brief;
	}
	if(type == 'minli'){
		miliCall(minlijiaoyan(data.click.monitor),$("#plantingimg ul li").last());
		miliCall(minlijiaoyan(data.click.monitor),$("#plantingtext ul li").last());
		var clickUrl = data.click.url;
		var smallImg = data.image.url;
		var title = data.title;
		var brief = data.desc;
	}
	var _html = '<div style="position: absolute; left: 0px; bottom: 0px; z-index: 999; padding: 0px 3px; font-size: 12px; line-height: 16px; color: rgb(255, 255, 255); background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5;">广告</div>';
	$("#plantingimg ul li").last().find(".img").append(_html);
	$("#plantingimg ul li").last().find(".img a").attr("href",clickUrl);
	$("#plantingimg ul li").last().find(".img a img").attr("data-src",smallImg);

	$("#plantingtext ul li").last().find(".text h2 a").attr("href",clickUrl);
	$("#plantingtext ul li").last().find(".text h2 a").html(title);
	$("#plantingtext ul li").last().find(".text span a").attr("href",clickUrl);
	$("#plantingtext ul li").last().find(".text span a").html(brief);
}

*/
