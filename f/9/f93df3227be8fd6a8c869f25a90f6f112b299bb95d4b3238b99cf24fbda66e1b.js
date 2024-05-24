(function (window, $, undefined) {
	'use strict';
	var slide = {}
	slide.install = function(){
		var privateData = {
			Html : [],
			insertObj : undefined,
			count : 0,
			page : 0,
			nextPage : 0,
			course : 'next',
			maxPage : 0,
			motionSize : 0,
			status : 'stop',
			mouseStatus : false,
			autoSlideTimer : null,
			settingMargin : 0
		}

		var pcimp = function(){
			$('.rb_body img:visible').each(function(){
//                  console.log($(this).attr('imp'), $(this).attr('pcimp'))
                  if($(this).attr('imp') == '0' && $(this).attr('pcimp') != ''){
                      $(this).attr('imp', '1');
                      $('body').append('<img src="'+$(this).attr('pcimp')+'" style="display:none" />');
                  }
              });
		}

		var optout = function(creative){
			if(creative.pc_imp != ''){
				var urls = creative.click.split('?');
                		var param = $.base64('decode', urls[1]);
                		var res = /shop_id=(\w+)/.exec(param);
                		$("#slide_banner_iad a").attr("href","http://netad.ednplus.com/info/powerclick/"+res[1]);
				$('#slide_banner_iad').show();
			}
		};

		var clickEve = function(obj,target){
			if(privateData.status !== 'stop'){return false};
			var course = target.hasClass('next');
			if(course){
				privateData.nextPage = (privateData.page == privateData.maxPage-1)?0:(privateData.page+1);
				privateData.course = 'next';
			}else{
				privateData.nextPage = (privateData.page == 0)?privateData.maxPage-1:(privateData.page-1);
				privateData.course = 'prev';
			};
			obj.insertHtm();
			pcimp();
		}
		var autoSlide = function(obj){
			if(obj.autoStart != undefined && !obj.autoStart) return;
			if(privateData.autoSlideTimer === null && privateData.mouseStatus === false){
				privateData.autoSlideTimer = setInterval(5000)
			}else{
				if(privateData.autoSlideTimer !== null){
					clearInterval(privateData.autoSlideTimer);
					privateData.autoSlideTimer = null;
				}
			}
		}
		this.Data = {
			json : null, // �곹뭹 DATA
			$obj : null, // 踰좊꼫 理쒖긽�� 諛뺤뒪
			Class : null, // 異붽��� �대옒�ㅻ챸
			moveType : null, // 紐⑥뀡 ����(vertical, horizon��)
			width : 0, // 諛뺤뒪 媛�濡쒗룺
			height : 0, // 諛뺤뒪 �몃줈��
			viewLength : 2, // �붾㈃�� 蹂댁뿬吏��� 踰좊꼫 媛�닔
			MarginLeft : 4,				// 肄붾뵫蹂� ul �붿냼�� 留덉쭊媛믪씠 �щ씪��...
			MarginTop : 0,				// 肄붾뵫蹂� ul �붿냼�� 留덉쭊媛믪씠 �щ씪��...
			borderClick : 0				// 蹂대뜑�쇱씤 �대┃�� �대┃ �� �곹뭹(醫뚯륫 �뱀� �곷떒 遺���)
		};

		this.motion = function(){
			var outputThis = this;

			if(privateData.course === 'next'){
				if(this.Data.moveType === 'vertical'){
					privateData.insertObj.find('li').eq(this.Data.viewLength).show()
					privateData.insertObj.animate({
						'margin-left' : -(privateData.motionSize-privateData.settingMargin)
					},'normal',function(){
						privateData.insertObj
							.find('li:last').after(privateData.insertObj.find('li:first'))
							.end()
							.find('li:last').hide()
							.end()
							.css('margin-left',privateData.settingMargin);
						privateData.page = privateData.nextPage;
						privateData.status = 'stop';
					})
				}else{
					privateData.insertObj.find('li').eq(this.Data.viewLength).show()
					privateData.insertObj.animate({
						'margin-top' : -(privateData.motionSize - privateData.settingMargin)
					},'normal',function(){
						privateData.insertObj
							.find('li:last').after(privateData.insertObj.find('li:first'))
							.end()
							.find('li:last').hide()
							.end()
							.css('margin-top',privateData.settingMargin);
						privateData.page = privateData.nextPage;
						privateData.status = 'stop';
					})
				}
			}else{
				if(this.Data.moveType === 'vertical'){
					privateData.insertObj
						.find('li:first').before(privateData.insertObj.find('li:last'))
						.end()
						.find('li:first').show()
						.end()
						.css('margin-left',-(privateData.motionSize-privateData.settingMargin));
					privateData.insertObj.animate({
						'margin-left' : privateData.settingMargin
					},'normal',function(){
						privateData.insertObj.find('li').eq(outputThis.Data.viewLength).hide();
						privateData.page = privateData.nextPage;
						privateData.status = 'stop';
					})
				}else{
					privateData.insertObj
						.find('li:first').before(privateData.insertObj.find('li:last'))
						.end()
						.find('li:first').show()
						.end()
						.css('margin-top',-(privateData.motionSize-privateData.settingMargin));
					privateData.insertObj.animate({
						'margin-top' : privateData.settingMargin
					},'normal',function(){
						privateData.insertObj.find('li').eq(outputThis.Data.viewLength).hide();
						privateData.page = privateData.nextPage;
						privateData.status = 'stop';
					})
				}
			}
		}
		this.insertHtm = function(){
			var tmpHtm = '',
				i,
				loadCounter = 0;
			if(privateData.count === 0){
				privateData.status = 'work';
				for(i=0;i<this.Data.viewLength;i++){
					tmpHtm += privateData.Html[i];
					privateData.Html[i] = 'insert';
				};
				privateData.insertObj.html(tmpHtm);
				privateData.count = this.Data.viewLength;
				if(this.Data.moveType == 'vertical'){
					privateData.motionSize = privateData.insertObj.find('li:first').width();
					privateData.insertObj.css('width',privateData.motionSize*(this.Data.viewLength+1))
				}else{
					privateData.motionSize = privateData.insertObj.find('li:first').height();
					privateData.insertObj.css('height',privateData.motionSize*(this.Data.viewLength+1))
				}
				
				privateData.status = 'stop';
			}else{
				privateData.status = 'work';
				var checkerHtml = (privateData.course === 'next')?(privateData.page + this.Data.viewLength):privateData.nextPage;
				if(checkerHtml > privateData.maxPage-1 || privateData.Html[checkerHtml] == 'insert'){
					this.motion();
				}else{
					if(privateData.course === 'next'){
						privateData.insertObj.find('li.'+this.Data.Class+'_item__'+(checkerHtml-1)).after(privateData.Html[checkerHtml]);
						privateData.Html[checkerHtml] = 'insert';
					}else{
						privateData.insertObj.find('li:last').after(privateData.Html[checkerHtml]);
						privateData.Html[checkerHtml] = 'insert';
					}
					this.motion();
				}
			};
			return this;
		};
		
		this.setting = function(){
			// data checker
			var thisData = this.Data,
				outputThis = this;
			if(thisData.json === null || thisData.$obj === null || thisData.Class === null || thisData.moveType ===null || thisData.width === 0 || thisData.height === 0){
				throw new Error('Data 媛� �щ컮瑜닿쾶 �뺤쓽�섏� �딆븯�듬땲��.');
				return;
			}else{
				$.each(thisData.json,function(index){
//console.log(this.pc_imp);
					privateData.Html[index] = '<li class="'+thisData.Class+'_item__'+index+'"><a href="'+this.click+'" onclick=pclick("'+this.pc_click+'") target="_blank"><span class="img_area"><img src="'+this.src+'" alt="" pcimp="'+this.pc_imp+'" imp="0"/></span><span class="txt"><em>'+this.txt+'</em></span></a></li>'
					if(this.pc_imp != '') thisData.autoStart = false;
				});
				thisData.$obj
					.addClass(thisData.Class)
					.on('mouseenter',function(){
						$(this).addClass('enterArea');
						privateDat			.on('mouseleave',function(){
						$(this).removeClass('enterArea');
						privateData.mouseStatus = false;
						autoSlide(thisData);
					})
					.find('div.svgArea').on('mouseenter',function(){
						$(this).addClass('svgHover');
					})
					.on('mouseleave',function(){
						$(this).removeClass('svgHover');ass((thisData.moveType === 'vertical')?'list_h':'list_v')
					.html('<ul '+ ((thisData.moveType == 'vertical')?'style="margin-left:'+thisData.MarginLeft+'px"':'style="margin-top:'+thisData.MarginTop+'px"') +'></ul>')
					.end()
					.find('a.next, a.prev').on('click',function(){
						clickEve(outputThis,$(this));
					})
					.end()
					.find('a.frame').on('click',function(){
						var tmpHref = thisData.$obj.find('div.prod_list li').eq(thisData.borderClick).find('a').attr('href');
						var evt = thisData.$obj.find('div.prod_list li').eq(thisData.borderClick).find('a').attr('onclick');
						$(this).attr('href',tmpHref);
						eval(evt);
					})
				privateData.insertObj = thisData.$obj.find('div.prod_list ul');
				privateData.maxPage = thisData.json.length;
				privateData.settingMargin = (thisData.moveType == 'vertical')?thisData.MarginLeft:thisData.MarginTop;
				this.insertHtm();
				autoSlide(thisData);
				pcimp();
				optout(thisData.json[0]);
			};
		};

	}
	window.slide = slide;
}(this, this.jQuery));
