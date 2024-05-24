// jQuery(window).on("load", function(){
if (1==1) {
    jQuery(document).ready(function() {
		if (jQuery(".pmef_2018_page .short-last-news__inside__list__items").length) {
			jQuery(".pmef_2018_page .short-last-news__inside__list__items ul li")
				.css({
					'margin-bottom': '10px'
				});
		}
        if ( jQuery(window).width() > 768) {

            var anonse__list_count = jQuery(".main-events-table__inside__left .three-col-news-with-anonse__list").length
            if (anonse__list_count > 0 && 1==2)
            {
                
                setTimeout(function(){
                    var left_side_height = jQuery(".main-events-table__inside__left__content").outerHeight();
                    var live_news__wrapper_height = jQuery(".live-news__wrapper").outerHeight();
                    var short_last_news_margin_top = jQuery(".short-last-news").css("margin-top").replace("px", "");
                    var short_last_news_title = Number(jQuery(".short-last-news__inside__title").outerHeight());
                    var total_height_short_news = left_side_height - live_news__wrapper_height - short_last_news_margin_top - short_last_news_title - 2;
                    
                    jQuery(".short-last-news__inside__list__wrapper").css({"height": total_height_short_news + "px"});
                    jQuery(".short-last-news__inside__list__items").css({"height": total_height_short_news + "px"});
                    var list_items = jQuery(".short-last-news__inside__list__items").jScrollPane({
                        autoReinitialise: true
                    });
                }, 300);
            } else {
                // if (jQuery(window).widht() >= 1000) {

                    
                    // if (jQuery('.page-content.inside_page').hasClass('pmef_2018_page') == true) {
                        var left_side_height = jQuery(".main-events-table__inside__left").outerHeight();
                        var live_news__wrapper_height = jQuery(".live-news__wrapper").outerHeight();
												
                        var short_last_news_margin_top = jQuery(".short-last-news").length? jQuery(".short-last-news").css("margin-top").replace("px", "") : 0;
												
                        var short_last_news_title = Number(jQuery(".short-last-news__inside__title").outerHeight());
                        var total_height_short_news = left_side_height - live_news__wrapper_height - short_last_news_margin_top - short_last_news_title - 2;
                        jQuery(".short-last-news__inside__list").css({"height": total_height_short_news + "px"});
                        console.log('height задана');
                    // }

                    jQuery(".short-last-news__inside__list__wrapper").height(jQuery(".short-last-news__inside__list__wrapper").parent().height());

                    jQuery(".short-last-news__inside__list__items").height(jQuery(".short-last-news__inside__list__wrapper").parent().height()*3);

                    jQuery(".short-last-news__inside__list__wrapper").mouseover(function() {
                        var main = jQuery(window).height()-jQuery(".top-panel-inside__bottom").height()-jQuery(".footer__top").height()
                        var scroll_data = jQuery(".short-last-news").offset().top-jQuery(window).scrollTop();
                        
                        if (scroll_data > 0) {
                            main_height = Number(main - scroll_data) + Number(jQuery(".top-panel-inside__top").height()) - 24;
                            jQuery(".short-last-news__inside__list__items").height(main_height);
                        } else {
                            var plus_height = jQuery(window).scrollTop()-jQuery(".short-last-news").offset().top-jQuery(".short-last-news").height()
                            
                            main_height = Number(main)+Number(plus_height);
                            jQuery(".short-last-news__inside__list__items").height(main_height);
                        }
                        jQuery(".short-last-news__inside__list__wrapper").height(main_height);
                        
                    });
                    jQuery(".short-last-news__inside__list__wrapper").mouseleave(function() {
                        jQuery(".short-last-news__inside__list__wrapper").height(jQuery(".short-last-news__inside__list__wrapper").parent().height());
                        jQuery(".short-last-news__inside__list__items").height(jQuery(".short-last-news__inside__list__wrapper").parent().height()*3);
                    });

                    setTimeout(function(){
                        jQuery(".short-last-news__inside__list__items")
													.jScrollPane({
															autoReinitialise: true
													});
                    }, 300);
                // }
            }

            jQuery(window).on("load", function(){
                
                jQuery('.short-last-news').bind('mousewheel DOMMouseScroll', function(e) {
                    var scrollTo = null;
                    if (e.type == 'mousewheel') {
                        scrollTo = (e.originalEvent.wheelDelta * -1);
                    }
                    else if (e.type == 'DOMMouseScroll') {
                        scrollTo = 40 * e.originalEvent.detail;
                    }
                    if (scrollTo) {
                        e.preventDefault();
                        jQuery(this).scrollTop(scrollTo + jQuery(this).scrollTop());
                    }
                });
            });

            if (1==2) {
                
                // setInterval(function(){
                    jQuery.ajax({
                        type: "GET",
                        url: "/export/iz/rss/news/last",
                        // url: "/get_last_news.xml",
                        dataType: "xml",
                        success: xmlParserLastNews,
                        error: function(){
                            // console.log("Ошибка загрузки новостей в блок Последние новости.");
                        }
                    });
                // }, 7000);
            }


        } else {
						if (jQuery(".pmef_2018_page .short-last-news__inside__list__items").length) {
							// Прогружаем картинки, не вошедшие в lazyload
							var $owlImages = jQuery('#block-purple-content').find('img[data-src!=""]').slice(0, 4);
							$owlImages.each(function(index) {
								var $this = jQuery(this),
										attrSRC = $this.attr('src');
									if( attrSRC && attrSRC.match(/data:/) ) {
										console.log('---owlImages - attrSRC---');
										$this.attr('src', $this.data('src'));
									}
							});
						}
            // var short_news_height = 0;
            // short_news_height = Number(short_news_height) + Number(jQuery(".short-last-news__inside__list__items ul").css("padding-top").replace("px", ""));
            // var number_item = 0;
            // jQuery(".short-last-news__inside__list__items ul li").each(function(){
            //  if (number_item <=14) {
            //      short_news_height = Number(short_news_height) + Number(jQuery(this).height());
            //      short_news_height = Number(short_news_height) + Number(jQuery(this).css("padding-bottom").replace("px", ""));
            //      short_news_height = Number(short_news_height) + Number(jQuery(this).css("margin-bottom").replace("px", ""));
            //      ++number_item;
            //  }
            // });
            // jQuery(".short-last-news__inside__list__wrapper").height(short_news_height - 6);
        }

        function xmlParserLastNews(xml) {
            var items = '';
            jQuery(xml).find("item").each(function () {
                
                    var title = jQuery(this).find("title").text();
                    var link = jQuery(this).find("link").text().replace(window.location.origin, '');
                    var time = jQuery(this).find("pubDate").text().split(" ");
                    hours = time[4].split(":");
                    var item = '';
                    if ( jQuery('.short-last-news__inside__list__items li .short-last-news__inside__list__item[href="' + link+ '"]').length<=0 ) {
                        item = '' +
                        '<li class="news__inside__list__li new">'+
                            '<a href="'+link+'" class="short-last-news__inside__list__item ">'+
                                '<div class="short-last-news__inside__list__item__label">'+
                                    title+
                                '</div>'+
                                '<div class="short-last-news__inside__list__item__time">'+
                                    '<time datetime="">' + hours[0] + ':' + hours[1] + '</time>'+
                                '</div>'+
                            '</a>'+
                        '</li>';
                    setTimeout(function(){
                        jQuery(".short-last-news__inside__list__items ul").prepend(item);
                        var current_item = jQuery('.short-last-news__inside__list__items ul .short-last-news__inside__list__item[href="' + link+ '"]');
                        current_item_height = Number(current_item.height()) + Number(current_item.css("margin-bottom").replace("px", "")) + Number(current_item.css("padding-bottom").replace("px", ""));
                        current_item.parent().height(current_item_height);
                        setTimeout(function(){
                            current_item.parent().removeClass("new").css({"height": "auto"});
                        }, 1000);

                    }, 2000);
                    }
            });

        }

    });
}QgVgkgbgcg");
	this.shape_41.setTransform(52.2,69.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGAdQgTgVgFgUQgEgOACgEIAAgCIACAAIASACQAVAFAUATIAFAEIgngDIADAmgAgHAWIgDggIAgADQgQgOgQgFQgKgDgIAAQgCAZAXAag");
	this.shape_42.setTransform(47.4386,64.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgHAOIgDgqIAUAWIgDAjgAgCAMIAGAIIADgZIgMgMg");
	this.shape_43.setTransform(47.4,65.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgbgKIApAEIAFAFIAKAJIgjADgAgFAGIAZgCIgIgGIgdgDg");
	this.shape_44.setTransform(48.9,64.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgDALIADgVIAEAAIgEAVg");
	this.shape_45.setTransform(12.125,8.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgKAAIAVgDIAAAEIgVACg");
	this.shape_46.setTransform(12.125,8.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAIAqQgQgKgQgQQgPgQgKgQIgCgCIAegDIAEgeIACACQAPAJAQAQQAVAWAJATQAKAWgJAJQgEAEgHAAQgLAAgRgKgAgRgSIgbAEQAHALAQAQQAVAVATAJQATAIAGgGQAHgHgIgTQgJgTgVgVQgNgOgOgJg");
	this.shape_47.setTransform(9.5632,6.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgLAWQgSgcAMgMQALgKAcARIABABIgDAeIgfADgAgOgPQgJAJAPAZIAYgDIADgYQgPgJgKAAQgGAAgCACg");
	this.shape_48.setTransform(5.797,2.2745);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5661A0").s().p("AgQgQQAJgKAcARIgEAbIgbADQgQgbAKgKg");
	this.shape_49.setTransform(5.8113,2.2764);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgGACIAAgDIANAAIAAADg");
	this.shape_50.setTransform(18.225,9.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgWAdIAAgBIgBgGQAAghAIggIAAgGIAPAYIAQgYIABAGQAHAegBAjIAAAHIgXAUgAgSAWIAAAFIASARIAUgRIAAgFQgBgdgFgfIgOAUIgNgUQgFAfAAAdg");
	this.shape_51.setTransform(18.2,7.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgQgBIAAgBIAFgUIAXAAIAFAUIAAABIgBAAIgQAYgAgLgCIALARIAMgRIgDgPIgRAAg");
	this.shape_52.setTransform(18.225,3.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EE6B1D").s().p("AgOgBIAEgRIAVAAIAEARIgPAUg");
	this.shape_53.setTransform(18.225,3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgMAEIAagXIgBAFQgBASgGAOIgBACgAgGAEIAKAJIAEgXg");
	this.shape_54.setTransform(19.25,11.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgFASQgGgOgBgSIgBgFIAaAXIgRAQgAgDANIAKgJIgOgOQAAALAEAMg");
	this.shape_55.setTransform(17.2,11.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAAATQgJgGgHgPIAAgCIAQgPIARAPIAAACQgHAPgJAGIgBABgAgLgDQAEAKAHAHQAHgFAFgMIgMgLg");
	this.shape_56.setTransform(18.225,13.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgHAAIACgDIANADIgCAEg");
	this.shape_57.setTransform(9.95,42.875);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgfAVIAAAAIACgGQAMgdARgeIADgEIAGAbIAXgQIgBAFQgGAigLAdIgCAGIAAABIgcALgAgZAQIgCAFIANAXIAXgJIACgFQAKgcAFgeIgUAOIgFgYQgPAbgLAbg");
	this.shape_58.setTransform(10.675,40.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgQgFIAAgBIAKgPIABgBIAWAIIAAACIgDARIAAAAIAAABIgBAAIgWARgAgMgFIAGAVIARgNIABgOIgQgGg");
	this.shape_59.setTransform(12.35,36.875);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgQgDIAhgOIgCAFQgIAQgJAMIgCACgAgKgBIAHAMQAHgKAFgKg");
	this.shape_60.setTransform(10.425,45.675);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKASQgBgPAGgSIABgEIAQAeIgWAJgAgGAOIAMgFIgJgSQgDALAAAMg");
	this.shape_61.setTransform(8.1479,44.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EE6B1D").s().p("AgDgPIAMAYIgRAHQgBgNAGgSg");
	this.shape_62.setTransform(8.1179,44.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgIARQgGgJgBgQIAAgBIAVgJIAKAUIgBABQgLAMgKADIgCAAgAgLgHQAAAJAFAMQAHgDAKgKIgIgNg");
	this.shape_63.setTransform(8.6,46.95);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EE6B1D").s().p("AgNgIIASgHIAJAQQgMAMgIADQgGgIgBgQg");
	this.shape_64.setTransform(8.575,46.95);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgBAHIAAgNIADAAIAAANg");
	this.shape_65.setTransform(14.25,51.325);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAWAXQgjAAgfgGIgEgBIAXgQIgXgOIAEgBQAhgIAhABIAGAAIABAAIAVAWIgVAXgAgmgMIAUAMIgUAOQAfAGAdAAIAFAAIARgUIgRgSIgFAAQgdAAgfAGg");
	this.shape_66.setTransform(12.2,51.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgDARIgRgEIgCgBIAAgXIACgBIARgEIABAAIABABIAXAPIgYARgAgSgIIAAARIAPADIASgMIgSgLg");
	this.shape_67.setTransform(8.1,51.325);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EFB52C").s().p("AgTALIAAgVIARgEIAWAOIgWAPg");
	this.shape_68.setTransform(8,51.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgTgMIAFAAQASABAOAGIACABIgQASgAAEAHIAJgJQgKgEgNgCg");
	this.shape_69.setTransform(16.525,50.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAEgMIAQARIgCACQgQAFgQABIgFABgAgKAIQALAAAMgEIgJgKg");
	this.shape_70.setTransform(16.525,52.35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgTAAIAQgQIABAAQAOAHAHAJIABAAIgBABQgHAJgOAHIgBAAgAgNAAIALAMQAKgFAHgHQgIgHgJgEg");
	this.shape_71.setTransform(18.6,51.325);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(8.6,3.7,40.6,63.2), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApTAnIAAhNISnAAIAABNg");
	mask.setTransform(59.575,3.875);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FD8100","#FD8100"],[0,1],-41.2,0,41.3,0).s().p("ApTAnIAAhNISnAAIAABNg");
	this.shape.setTransform(59.575,3.875);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,119.2,7.8), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApTAnIAAhNISnAAIAABNg");
	mask.setTransform(59.575,3.85);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FD8100","#FD8100"],[0,1],-41.2,0,41.3,0).s().p("ApTAnIAAhNISnAAIAABNg");
	this.shape.setTransform(59.575,3.85);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,119.2,7.7), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ApTAnIAAhNISnAAIAABNg");
	mask_1.setTransform(59.575,3.85);

	// Слой_3
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#FD8100","#FD8100"],[0,1],-41.2,0,41.3,0).s().p("ApTAnIAAhNISnAAIAABNg");
	this.shape_72.setTransform(59.575,3.85);

	var maskedShapeInstanceList = [this.shape_72];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,119.2,7.7), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EgwbASwMAAAglfMBg3AAAMAAAAlfg");
	mask_2.setTransform(416.85,288.95);

	// Слой_3
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#FAEC22","#F4911E"],[0,1],-1528.3,620.1,414.7,-168.2).s().p("EhBIgNcMBj3gfsMAeZA6lMhj3Afsg");
	this.shape_73.setTransform(416.85,288.925);

	var maskedShapeInstanceList = [this.shape_73];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(106.9,169,620,240), null);


(lib.Анимация23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8300").s().p("AjsFXQhQgig8g9IJwpwQA9A8AiBQQAjBSAABaQgBC3iBCBQiBCBi3ABQhaAAhSgjg");
	this.shape.setTransform(6.45,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8300").s().p("ApNpNISbAAIkVEVQg+g9hPgiQhSgjhaAAQi3AAiBCCQiCCCABC2QgBBaAkBSQAhBQA9A9IkVEVg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-58.9,118,117.9);


(lib.Анимация22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8300").s().p("AjsFXQhQgig8g9IJwpwQA9A8AiBQQAjBSAABaQgBC3iBCBQiBCBi3ABQhaAAhSgjg");
	this.shape.setTransform(6.45,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8300").s().p("ApNpNISbAAIkVEVQg+g9hPgiQhSgjhaAAQi3AAiBCCQiCCCABC2QgBBaAkBSQAhBQA9A9IkVEVg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-58.9,118,117.9);


(lib.Анимация21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8300").s().p("AjsFXQhQgig8g9IJwpwQA9A8AiBQQAjBSAABaQgBC3iBCBQiBCBi3ABQhaAAhSgjg");
	this.shape.setTransform(6.45,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8300").s().p("ApNpNISbAAIkVEVQg+g9hPgiQhSgjhaAAQi3AAiBCCQiCCCABC2QgBBaAkBSQAhBQA9A9IkVEVg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-58.9,118,117.9);


(lib.Анимация18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAASIAAgbIgIAAIAAgIIALAAIAGAKIAAAZg");
	this.shape.setTransform(25.05,6.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAEIgFgHIAIAAIAFAHg");
	this.shape_1.setTransform(26.275,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAMQgEgEAAgJQAAgKADgEIAGALIAAADQAAAFACADQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAEAAABgEIAJAAQgCAMgMAAQgEAAgFgEg");
	this.shape_2.setTransform(22.075,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLgBQAEgEAGgBQALAAACAMIgJAAQgBgFgDAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgCAEg");
	this.shape_3.setTransform(22.275,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMASIAAgjIABAAIAIANIAAABIABAAIAEAHIgFAAIAAAGIAPAAIAAAIg");
	this.shape_4.setTransform(18.45,6.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABAEIgDgHIACAAIAEAHg");
	this.shape_5.setTransform(18.5,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKgEIAVAAIAAAIIgPAAIAAAAg");
	this.shape_6.setTransform(18.625,5.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAEIgEgHIAJAAIAAAHg");
	this.shape_7.setTransform(18.925,6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AACARIAAgEQgPgBAAgOQAAgLALgDIADAHQgFABAAAHQAAAGAGAAIAAgMIAMATIgDABIAAAEg");
	this.shape_8.setTransform(13.475,6.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAKQAFgBAAgHQAAgGgGAAIAAAMIgMgTIADgBIAAgEIAJAAIAAAEQAPABAAANQAAAMgLADg");
	this.shape_9.setTransform(14.725,6.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQgJIACgFIAgAGIgFAHIgEgCIgFAIIADADIgDAHgAAAAAIADgEIgIgCg");
	this.shape_10.setTransform(13.4,-12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTADIAEgGIANAHIgJgOIAFgHIAGAPIAUgBIgFAHIgRAAIANAIIgEAGg");
	this.shape_11.setTransform(11.625,-10.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSADIAEgGIAKAFIAEgGIgKgGIAEgGIAZAPIgEAFIgKgEIgEAFIAKAGIgEAHg");
	this.shape_12.setTransform(9.925,-7.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRgJIAEgFIAeAGIgDAHIgFgCIgFAIIADADIgDAHgAAAAAIADgEIgIgCg");
	this.shape_13.setTransform(8.6,-4.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGADIgEAGIgGgEIALgSIAFADIgDAHIAUAKIgEAHg");
	this.shape_14.setTransform(6.75,-2.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSACIAEgGIAKAFIAEgGIgKgFIAEgHIAZAQIgEAFIgKgFIgEAGIAKAGIgDAHg");
	this.shape_15.setTransform(5.4,0.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEALIgCgBQgGgEgCgEQgBgEACgFQADgEAFgBQAEgBAEADIAEACQAGADACAFQABADgDAFQgCAEgFACIgCAAQgEAAgEgDgAgHgDIAAADIAFADIACABQADADACAAIADgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBgBgEgCIgCgBIgFgCg");
	this.shape_16.setTransform(3.8219,3.0975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAOQgKgFAGgLIgDgCIAEgGIADACQAHgMAJAHQALAGgGAKIADACIgEAHIgDgCQgFAHgEAAQgEAAgEgDgAgEAIQAEADAEgEIgKgHQgDAFAFADgAgDgFIAKAFQADgEgGgDIgDgBQgCAAgCADg");
	this.shape_17.setTransform(1.975,6.1284);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhpByIgEgBIgDAAIgBAAIgDgBIgBAAIgEgBIgJgCIgBgBIgDgBIgHgDQgOgIgLgLQgMgMgIgSQgDgIgBgKIgDgSIACgRIAEgNIAGgNIABgBIABgCIAIgNIAEgEIABgBIADgDIACgBIABgCIAAAAIAKgIIAOgHQAJgEAGgBIASgDIASABQATACAPAJQALAGAHAHIgBABIAAABIAAABIgBABIgCADQgHgIgKgFQgQgJgQgCIgRgBIgQADIgOAFIgMAGIgJAHIgDACIgCACIgCADIAAAAIgBABIgCACIgBABIgKAOIgFAMIgEANQgBAHAAAIQAAAJABAIQACAGAEAKQAFAQANAMQAJAKANAHIAFACIAAAAIABABIAFABIAAABIAEABIAEABIABAAIACABIABAAIAEABIAGAAIACAAIADABIAkAAIB+jcIBkCsIgJAAIhEh0IgBADIBBBxIgJAAIg8hpIgEAGIgBABIgBACIgCADIA2BdIgJAAIgxhVIgCADIAwBSIgJAAIgrhKIhGB6IDGAAIADAHgAgUBrIADAAIBiirIgBgDgAA+hNIgBACIgCABIAAACIgBABIgBABIAAABIgBABIhkCvIAPAAIBoi1IgIgNgAg4BrIAEAAIB0jKIgCgDg");
	this.shape_18.setTransform(10,-1.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhhCIIgNgCIgBAAIgJgCIgBgBIgOgDIgBgBIgPgGQgUgLgQgQQgIgIgIgMQgIgOgEgKQgFgMgCgNQgDgOAAgLQAAgKADgNQABgLAEgKIAGgOIANgXIATgUIABgBQAFgFAJgFQARgMAZgHQAKgCAQgCIAEAAIAIAAIANACQAOABAMAEQAKADAOAIQAJAFAIAHIgCAEIAAAAIgBACIgBAAQgGgFgLgHQgLgGgLgEQgHgCgSgEIgYgBQgMABgMAEQgUAEgTANIgOAKIgBABIgFADIgNAQIgDAFIgBABIgJAPIgEAJIgBAEQgCAGgEAOIgCAWQABAKACANQADAPAEAKQAFALAGAKQAGAKAJAJQAQASATAIIANAHIACAAIAQAEIACABIAEABIABAAIANABIE+ABIAEAHg");
	this.shape_19.setTransform(9.15,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhkB+IgKgCIgCAAIgEgBIgCAAIgQgFIgGgCIgCgBIgGgDQgVgLgNgOIgPgSQgGgLgFgMQgFgLgCgLQgCgLAAgNQAAgLACgKQABgIAEgMIAIgSIAFgHIABgCIABgBIADgFIAFgGIACgDIACgBIABgCIAHgHIABgBIAOgKQATgMATgFQANgDAKAAIAFgBIAIAAIAMACQAKABAOAFQAKADALAHQAIAEAKAHIgCAFIgBAAIgBACIAAAAQgIgHgJgFQgJgFgMgEQgMgEgKgCIgXgBQgMABgKACQgTAGgRAKIgNAKIgBAAIgHAIIgBABIgBABIgCACIgCACIgGAJIgBABIgBACIgCADIgCAEIgBACIgGALIgGAWIgBAUQgBAJADANQABAJAFANQAFAMAGAIQAGALAHAHQAQAPAQAJIAOAFIALAEIAKACIABAAIAKABIE4AAIAFAIg");
	this.shape_20.setTransform(9.375,0.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhmBpIgCAAIgFgBIgDAAIgBgBIgDAAIgCgBIgDAAIgBgBIgFgBIgKgDIgCgBIgEgDQgQgHgNgNQgHgIgFgIQgFgIgEgKQgEgIgCgMQgBgJgBgKQABgIABgJQACgKADgHIABgGIAFgHIABgCIABgDIACgEIABgCIAGgHIAGgGIADgDIABgCIACgCIAMgJIAOgIIASgFQAJgEAKAAIAEAAIACAAIACAAIACAAIALABQALABAJAEQAJAEAJAEQAJAGAIAGIgDAGIgBABIAAAAQgIgIgJgEIgRgIIgSgFIgKgBIgGAAIgDABQgJAAgKACIgQAGIgNAIIgKAIIgBAAIgHAHIAAAAIgBABIgCACIgBABIgFAIIgBAAIgFAIIAAABIgFAMIgFAPIgBARIABASQACAIAEAKQADAJAGAIIALAOQAKAMAQAIIALAFIAIACIACAAIADACIABAAIAEABIAAAAIAIABIEtAAIADAHg");
	this.shape_21.setTransform(9.8,0.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAXA0Ig2hfIAEgIIA7Bng");
	this.shape_22.setTransform(20.575,-0.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AheBzIgDAAIgEAAIgKgBIgBAAIgEgBIgCAAIgOgFIgBAAIgFgCIgCgBIgGgDQgRgIgNgOQgJgJgFgIQgHgKgDgKQgEgKgDgMIgCgVIACgUQACgKADgHIAHgRIAEgHIABgCIABgBIAKgMIABgBIAJgJIAMgJQAHgFAJgEQAJgEALgDQAJgCAMgBIAWABQAMABAKAEIAUAJIASAMIgBABIgBABIgBACIAAABIgBABIAAABQgIgHgKgGQgEgDgOgFQgJgDgLgCIgWgBIgUADQgKADgIAEQgHACgHAGIgMAIIgBABIgBABIgFAFIgCACIAAABIgEADIgGAJIAAAAIgBACIgEAGIgBACIgGAOIgEARQgCAIAAAKQAAALACAJQABAKAFAKQAEALAFAIQAGAIAHAHQAOAPAPAHIALAFIABAAIAJADIACAAIAEACIAFAAIAAAAIALACIEwAAIAFAHg");
	this.shape_23.setTransform(9.575,0.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag5BhIBvjBIAEAHIhqC6g");
	this.shape_24.setTransform(11.65,-0.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AACACIgCAAIAAgBIgBgBIgBAAIgBAAIgBAAIACgCIABAAIABABIABAAIABABIABAAIABAAIABAAIgCADg");
	this.shape_25.setTransform(-19.925,-2.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAmAoIgBgBIgBAAIgBAAIgBgBIgBAAIgBgBIADgEIADgFIACgGIACgGIAAgGIAAgGIgEgLIgDgGQgHgKgLgFIgBAAIgCgBIgIgCIgKAAIgKACIgJAFQgHAFgEAHQgEAGgCAGIgBAFIgIAAIACgHQACgHAEgHQAGgJAIgFIAKgGIAMgDIAMABIAJACIABAAIADABQAOAHAHALIAEAHIAEAMIABAIIgBAHIgEAOIgEAGIgCADg");
	this.shape_26.setTransform(-22.775,-6.9583);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTBCQgLgDgGgFIgEgDIgBAAIgJgJQgEgEgFgJIgGgNIAAgBIgCgIIAAgDIAAgNIACgMIAAgBIACgFIAIAAIgCAHIgBABIAAACIgBACIAAACIAAACIgBACIAAAMIABAFIAAABIABADIAAABIABABIAEALIAIAMIAJAIIAAABIAEACIAPAHIAJACIARAAIAIgCQAIgCAIgFIADgCIAAgBIABAAIADgCIAFgGQAFgFAEgHIAEgLIABgBIAAgBIABgDIAAgBIAAgFIABgBIAAgKIgBgBIAAgEIAAgCIgBgCIAAgCIgBgBIgEgLQgFgIgEgEIgFgFIgDgCIgBgBIAAgBIgBAAIgBAAIgBgBIgBgBIgBgBIgBAAIgBgBIgGgCIgBgBIgEgBIgBgBIgDAAIgFgCIgKAAIgCAAIAAgIIAJAAIAGgBIAAAAIAEABIACAAIACAAIAAABIABAAIACAAIABABIgEACIAEABIABAAIACABIABAAIABABIABABIACAAIAAABIADABIABABIABABIABAAIABABIACABIABABIADACIAGAGQAGAHADAHIAFAMIABABIABAFIAAABIABAGIAAABIAAACIAAAHIAAACIAAABIgBAFIAAACIgBAEIgBABIgFANQgFAJgEAEIgGAGIgDADIgBAAIgEADQgHAFgKADIgUADg");
	this.shape_27.setTransform(-22.775,4.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIA7IgIgDQgHgCgIgEIgCgCIgBgBIgBgBIgCgBIgFgGQgEgDgEgIQgGgLgBgIIAAgDIAAgBIAAgGIAAgCIAAgDQABgHAEgKIAJAAIgBABQgEAJgBAIIgBADIAAAIIABABIAAABQABAIAEAJIAHAKIAFAEIACACIABABIAAAAIACACQAGADAHADIAIABIAGABIAHgBIAIgBQAHgDAFgDIADgCIAAAAIABgBIAHgGIAHgKQAEgJABgIIAAgFIABgCIgBgBIAAgFQgBgIgEgJIgMgOIgCgCIgBAAIAAgBIgGgEIAAAAIgBABIgDABIAGADIACABIABACIAHAFIAGAKQAEAIABAHIAAADIABACIAAAEIgBABIAAADQgBAHgEAJIgGAJIgHAFIgBACIgCABQgGAEgGABQgDACgEAAIgNAAIgHgCQgFgBgHgEIgCgBIgBgBIgBgBIgGgFIgGgJQgEgHgBgJIgBgCIAAgJIABgCQABgIAEgHIABgDIAJAAIgEAGQgDAGgBAIIAAAKQABAHADAGIAGAIIAGAGIAAAAIACABIAKAEIAGACIAFABIAGgBIAGgCQAFgBAFgDIACgBIAAgBIABAAIAFgFIAFgIQAEgGABgHIAAgEIAAgFIAAgBQgBgIgEgGQgBgEgEgEIgEgDIgBgBIgBgBIAAAAIgCgCQgFgDgFgBIgGgCIgEAAIgCAAIgBAAIgCAAIAAgIIADABIAAgBIACABIALgCIgMgBIgEAAIAAgIIALAAIAFgBIABAAIADABIABAAIAEABIABABIABABIgDABIADABIAEgBIABAAIABABIABAAIABABIABABIABABIABABIgDABIACABIACABIAHAIIAIAKQAFALABAJIABACIAAAFIAAADIAAAAIAAADIgBACQgBAJgFAKIgIALIgFAGIgCABIgBABIgBABIgCACQgIAEgHACIgJADg");
	this.shape_28.setTransform(-22.775,4.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMCGIgMgDQgNgEgLgHIAAAAIgJgHIgIgIQgIgJgEgIQgFgJgCgIIAAgBIgBgDIgBgDIgBgJIAAgGIgBgCIABgBIAAgJIABgFIAAgCIACgIIAAgBIAIAAIgBABIAAACIgBACIgCALIAAAFIgBAEIABADIAAAFIACAMIABACIAAABQACAJAEAGQAFAKAHAGIAMAMIADACQALAHALADIAWADIAMgBIALgCQALgDAKgHIAEgCIACgCIADgDIAIgHQAGgGAFgKQAEgIACgHIAAgBIACgIIAAgCIABgEIAAgBIAAgOIAAgCIgBgEIAAgCIgCgJIgGgPQgEgHgHgIIgJgIIgCACIAJAIQAHAHADAIQAEAGADAIIAAABIACANIAAAGIABACIgBABIABADIgBAAIAAAFIgCANIAAABIgHAPQgDAHgHAIIgIAHIgDADIAAABIgFADQgIAFgMAEIgLADIgXAAIgKgDQgMgEgIgFIgFgDIgLgLQgJgKgCgFIgGgPIAAgBIgBgCIgBgDIAAgCIgBgGIAAgBIAAgDIAAgJIAAgCIAAgBIABgGIAAgCIABgDIABgDIAAgBIAAgCIAIAAIgBAEIAAABIgBAFIgBACIAAACIAAAFIgBACIAAAIIABACIAAABIAAAEIAAACIABABIABAFIAAABIAFANQAFAIAFAGIAGAHIAEACIABABIABABIACABQAIAFAKAEIALACIAJABIALgBIAKgCQAKgDAIgGIADgCIABAAIAKgKIAKgOIAGgNIAAgBIABgFIAAgBIABgGIAAgEIAAgDIAAgDIAAgFIgBgDIAAgCIAAgCIgBgFIAAgBIgGgNIgKgNIgJgIIgCACIgBgBIgBgBIgCgBIAAAAIgCgBIgBgBIADgCIgDgBIgDACIAAgBIgBAAIgBgBIgCgBIgBAAIgCgBIgBAAIADgCIgEgCIgCAAIAAAAIgBgBIgCAAIgCAAIgFgCIgJAAIgEAAIAAgIIAEAAIAHgBIACAAIAAgBIgKgBIgDAAIAAgHIAGAAIACgBIABAAIAAAAIACgBQAGgDADgFQAEgFAAgHQAAgGgEgGQgDgEgGgEIgCAAIAAAAIgBgBIgCAAIgGAAIgEABIgFACIgGAGIgDAHIAAABIgIAAIABgDIAEgJQADgFAFgDIAGgDIAHgCIAHAAIADABIABABIABAAIACABQAIADAEAHQAFAIABAIQgBAJgFAHQgCAEgFAEIAEAAIAGgGQAFgJAAgJQAAgJgFgIQgGgJgIgDIAAAAIgCgBIAAAAIgGgBIgFgBIgCABQgFAAgDABIgHAEIgJAJQgDAFgBAEIAAAEIgIAAIABgGIAFgLQAFgIAGgDIAJgFIAJgCIAJAAIAHACIABAAIACABQALAFAGAKQAGAKABALQgBAMgGAKIgEAFIADABIABAAIABABIABAAIABABIABAAIACABIAAAAIADABIACgDIAGgNIACgQIAAgHIgCgIIgGgOQgIgMgOgHIgEgBIgBAAIgCgBIgIgCIgHAAIgFAAIgNADIgKAGQgJAGgGAJQgEAGgCAIQgCAFAAAFIgHAAIABgMQADgIAFgJQAIgLAJgGIAMgGQAGgCAJgBQAFgBAJABIAIACIADABIABAAIADABQARAJAJANIAEAIIAEAIIABAJIAAARIgBAJIgEAIIgFAKIABABIAAABIACgDIAFgIIADgJIACgJIAAgSIgCgJIgIgQQgKgPgRgIIgDgCIgBAAIgEgBIgIgCIgJAAIgGAAQgLACgEACQgIACgFAEQgLAIgGAKQgGAHgCALIgDAMIgHAAIAAgBIADgNQACgLAHgJQAHgLAMgJQAHgFAIgCQAHgDAJgBQAIgCAKACIAJACIADABIABAAIACABIADABQASAIAMARIAJATIACAUIgCAVIgFAJIgGAMIACACIAIAIQAIALADAFIAIAQIAAABIAAADIACAMIAAACIABADIAAAKIgBACIAAACIgBAHIAAACIgBADIAAADIAAABIgIARQgDAGgIALIgNALIgBABIgEADQgLAHgMAEIgNADIgNABgAAqgUIABABIABAAIACgCIgCgBIgBAAgAAUgdIADABIABAAIACABIABAAIACAAIAAABIACAAIADACIACgCIgEgCIgBgBIgBAAIgBgBIgCAAIgBAAIgDgBIAAAAg");
	this.shape_29.setTransform(-22.8,0.4625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-14,63.5,28);


(lib.Анимация17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAASIAAgbIgIAAIAAgIIALAAIAGAKIAAAZg");
	this.shape.setTransform(25.05,6.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAEIgFgHIAIAAIAFAHg");
	this.shape_1.setTransform(26.275,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAMQgEgEAAgJQAAgKADgEIAGALIAAADQAAAFACADQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAEAAABgEIAJAAQgCAMgMAAQgEAAgFgEg");
	this.shape_2.setTransform(22.075,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLgBQAEgEAGgBQALAAACAMIgJAAQgBgFgDAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgCAEg");
	this.shape_3.setTransform(22.275,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMASIAAgjIABAAIAIANIAAABIABAAIAEAHIgFAAIAAAGIAPAAIAAAIg");
	this.shape_4.setTransform(18.45,6.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABAEIgDgHIACAAIAEAHg");
	this.shape_5.setTransform(18.5,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKgEIAVAAIAAAIIgPAAIAAAAg");
	this.shape_6.setTransform(18.625,5.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAEIgEgHIAJAAIAAAHg");
	this.shape_7.setTransform(18.925,6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AACARIAAgEQgPgBAAgOQAAgLALgDIADAHQgFABAAAHQAAAGAGAAIAAgMIAMATIgDABIAAAEg");
	this.shape_8.setTransform(13.475,6.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAKQAFgBAAgHQAAgGgGAAIAAAMIgMgTIADgBIAAgEIAJAAIAAAEQAPABAAANQAAAMgLADg");
	this.shape_9.setTransform(14.725,6.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQgJIACgFIAgAGIgFAHIgEgCIgFAIIADADIgDAHgAAAAAIADgEIgIgCg");
	this.shape_10.setTransform(13.4,-12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTADIAEgGIANAHIgJgOIAFgHIAGAPIAUgBIgFAHIgRAAIANAIIgEAGg");
	this.shape_11.setTransform(11.625,-10.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSADIAEgGIAKAFIAEgGIgKgGIAEgGIAZAPIgEAFIgKgEIgEAFIAKAGIgEAHg");
	this.shape_12.setTransform(9.925,-7.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRgJIAEgFIAeAGIgDAHIgFgCIgFAIIADADIgDAHgAAAAAIADgEIgIgCg");
	this.shape_13.setTransform(8.6,-4.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGADIgEAGIgGgEIALgSIAFADIgDAHIAUAKIgEAHg");
	this.shape_14.setTransform(6.75,-2.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSACIAEgGIAKAFIAEgGIgKgFIAEgHIAZAQIgEAFIgKgFIgEAGIAKAGIgDAHg");
	this.shape_15.setTransform(5.4,0.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEALIgCgBQgGgEgCgEQgBgEACgFQADgEAFgBQAEgBAEADIAEACQAGADACAFQABADgDAFQgCAEgFACIgCAAQgEAAgEgDgAgHgDIAAADIAFADIACABQADADACAAIADgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBgBgEgCIgCgBIgFgCg");
	this.shape_16.setTransform(3.8219,3.0975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAOQgKgFAGgLIgDgCIAEgGIADACQAHgMAJAHQALAGgGAKIADACIgEAHIgDgCQgFAHgEAAQgEAAgEgDgAgEAIQAEADAEgEIgKgHQgDAFAFADgAgDgFIAKAFQADgEgGgDIgDgBQgCAAgCADg");
	this.shape_17.setTransform(1.975,6.1284);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhpByIgEgBIgDAAIgBAAIgDgBIgBAAIgEgBIgJgCIgBgBIgDgBIgHgDQgOgIgLgLQgMgMgIgSQgDgIgBgKIgDgSIACgRIAEgNIAGgNIABgBIABgCIAIgNIAEgEIABgBIADgDIACgBIABgCIAAAAIAKgIIAOgHQAJgEAGgBIASgDIAJAAIAJABQATACAPAJQALAGAHAHIgBABIAAABIAAABIgBABIgCADQgHgIgKgFQgQgJgQgCIgRgBIgQADIgOAFIgMAGIgJAHIgDACIgCACIgCADIAAAAIgBABIgCACIgBABIgGAJIgEAFIgFAMIgEANQgBAHAAAIQAAAJABAIQACAGAEAKQAFAQANAMQAJAKANAHIAFACIAAAAIABABIAFABIAAABIAEABIAEABIABAAIACABIABAAIAEABIAGAAIACAAIADABIAkAAIB+jcIBkCsIgJAAIhEh0IgBADIBBBxIgJAAIg8hpIgEAGIgBABIgBACIgCADIA2BdIgJAAIgxhVIgCADIAwBSIgJAAIgrhKIhGB6IDGAAIADAHgAgUBrIADAAIBiirIgBgDgAA+hNIgBACIgCABIAAACIgBABIgBABIAAABIgBABIAAABIhkCuIAPAAIBoi1IgIgNgAg4BrIAEAAIB0jKIgCgDg");
	this.shape_18.setTransform(10,-1.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhhCIIgNgCIgBAAIgJgCIgBgBIgOgDIgBgBIgGgCIgJgEQgUgLgQgQQgIgIgIgMQgIgOgEgKQgFgMgCgNQgDgOAAgLQAAgKADgNQABgLAEgKIAGgOIANgXIATgUIABgBQAFgFAJgFQARgMAZgHQAKgCAQgCIAEAAIAIAAIANACQAOABAMAEQAKADAOAIQAJAFAIAHIgCAEIAAAAIgBACIgBAAQgGgFgLgHQgLgGgLgEQgHgCgSgEIgMgBIgMAAQgMABgMAEQgUAEgTANIgOAKIgBABIgFADIgNAQIgDAFIgBABIgJAPIgEAJIgBAEQgCAGgEAOIgCAWQABAKACANQADAPAEAKQAFALAGAKQAGAKAJAJQAQASATAIIANAHIACAAIAQAEIACABIAEABIABAAIANABIE+ABIAEAHg");
	this.shape_19.setTransform(9.15,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhkB+IgKgCIgCAAIgEgBIgCAAIgQgFIgGgCIgCgBIgGgDQgVgLgNgOIgPgSQgGgLgFgMQgFgLgCgLQgCgLAAgNQAAgLACgKQABgIAEgMIADgIIAFgKIAFgHIABgCIABgBIADgFIAFgGIACgDIACgBIABgCIAHgHIABgBIAOgKQATgMATgFQANgDAKAAIAFgBIAIAAIAMACQAKABAOAFQAKADALAHQAIAEAKAHIgCAFIgBAAIgBACIAAAAQgIgHgJgFQgJgFgMgEQgMgEgKgCIgMgBIgLAAQgMABgKACQgTAGgRAKIgNAKIgBAAIgHAIIgBABIgBABIgCACIgCACIgGAJIgBABIgBACIgCADIgCAEIgBACIgGALIgGAWIgBAUQgBAJADANQABAJAFANQAFAMAGAIQAGALAHAHQAQAPAQAJIANAFIABAAIALAEIAKACIABAAIAKABIE4AAIAFAIg");
	this.shape_20.setTransform(9.375,0.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhmBpIgCAAIgFgBIgDAAIgBgBIgDAAIgCgBIgDAAIgBgBIgFgBIgEgBIgGgCIgCgBIgEgDQgQgHgNgNQgHgIgFgIQgFgIgEgKQgEgIgCgMQgBgJgBgKQABgIABgJQACgKADgHIABgGIAFgHIABgCIABgDIACgEIABgCIAGgHIAGgGIADgDIABgCIACgCIAMgJIAOgIIASgFQAJgEAKAAIAEAAIACAAIACAAIACAAIALABQALABAJAEQAJAEAJAEQAJAGAIAGIgDAGIgBABIAAAAQgIgIgJgEIgRgIIgSgFIgKgBIgGAAIgDABQgJAAgKACIgQAGIgNAIIgKAIIgBAAIgHAHIAAAAIgBABIgCACIgBABIgFAIIgBAAIgFAIIAAABIgFAMIgFAPIgBARIABASQACAIAEAKQADAJAGAIIALAOQAKAMAQAIIALAFIAIACIACAAIADACIABAAIAEABIAAAAIAIABIEtAAIADAHg");
	this.shape_21.setTransform(9.8,0.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAXA0Ig2hfIAEgIIA7Bng");
	this.shape_22.setTransform(20.575,-0.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AheBzIgDAAIgEAAIgKgBIgBAAIgEgBIgCAAIgOgFIgBAAIgFgCIgCgBIgGgDQgRgIgNgOQgJgJgFgIQgHgKgDgKQgEgKgDgMIgCgVIACgUQACgKADgHIAHgRIAEgHIABgCIABgBIAKgMIABgBIAJgJIAMgJQAHgFAJgEQAJgEALgDQAJgCAMgBIALAAIALABQAMABAKAEIAUAJIASAMIgBABIgBABIgBACIAAABIgBABIAAABQgIgHgKgGQgEgDgOgFQgJgDgLgCIgLgBIgLAAIgUADQgKADgIAEQgHACgHAGIgMAIIgBABIgBABIgFAFIgCACIAAABIgEADIgGAJIAAAAIgBACIgEAGIgBACIgFALIgBADIgEARQgCAIAAAKQAAALACAJQABAKAFAKQAEALAFAIQAGAIAHAHQAOAPAPAHIALAFIABAAIAJADIACAAIAEACIAFAAIAAAAIALACIEwAAIAFAHg");
	this.shape_23.setTransform(9.575,0.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag5BhIBvjBIAEAHIhqC6g");
	this.shape_24.setTransform(11.65,-0.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AACACIgCAAIAAgBIgBgBIgBAAIgBAAIgBAAIACgCIABAAIABABIABAAIABABIABAAIABAAIABAAIgCADg");
	this.shape_25.setTransform(-19.925,-2.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAmAoIgBgBIgBAAIgBAAIgBgBIgBAAIgBgBIADgEIADgFIACgGIACgGIAAgGIAAgGIgEgLIgDgGQgHgKgLgFIgBAAIgCgBIgIgCIgKAAIgKACIgJAFQgHAFgEAHQgEAGgCAGIgBAFIgIAAIACgHQACgHAEgHQAGgJAIgFIAKgGIAMgDIAMABIAJACIABAAIADABQAOAHAHALIAEAHIAEAMIABAIIgBAHIgEAOIgEAGIgCADg");
	this.shape_26.setTransform(-22.775,-6.9583);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTBCQgLgDgGgFIgEgDIgBAAIgJgJQgEgEgFgJIgGgNIAAgBIgBgEIgBgEIAAgDIAAgNIACgMIAAgBIACgFIAIAAIgCAHIgBABIAAACIgBACIAAACIAAACIgBACIAAAMIABAFIAAABIABADIAAABIABABIAEALIAIAMIAJAIIAAABIAEACIAPAHIAJACIARAAIAIgCQAIgCAIgFIADgCIAAgBIABAAIADgCIAFgGQAFgFAEgHIAEgLIABgBIAAgBIABgDIAAgBIAAgFIABgBIAAgKIgBgBIAAgEIAAgCIgBgCIAAgCIgBgBIgEgLQgFgIgEgEIgFgFIgDgCIgBgBIAAgBIgBAAIgBAAIgBgBIgBgBIgBgBIgBAAIgBgBIgGgCIgBgBIgEgBIgBgBIgDAAIgFgCIgKAAIgCAAIAAgIIAJAAIAGgBIAAAAIAEABIACAAIACAAIAAABIABAAIACAAIABABIgEACIAEABIABAAIACABIABAAIABABIABABIACAAIAAABIADABIABABIABABIABAAIABABIACABIABABIADACIAGAGQAGAHADAHIAFAMIABABIABAFIAAABIABAGIAAABIAAACIAAAHIAAACIAAABIgBAFIAAACIgBAEIgBABIgFANQgFAJgEAEIgGAGIgDADIgBAAIgEADQgHAFgKADIgUADg");
	this.shape_27.setTransform(-22.775,4.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIA7IgIgDQgHgCgIgEIgCgCIgBgBIgBgBIgCgBIgFgGQgEgDgEgIQgGgLgBgIIAAgDIAAgBIAAgGIAAgCIAAgDQABgHAEgKIAJAAIgBABQgEAJgBAIIgBADIAAAIIABABIAAABQABAIAEAJIAHAKIAFAEIACACIABABIAAAAIACACQAGADAHADIAIABIAGABIAHgBIAIgBQAHgDAFgDIADgCIAAAAIABgBIAHgGIAHgKQAEgJABgIIAAgFIABgCIgBgBIAAgFQgBgIgEgJIgMgOIgCgCIgBAAIAAgBIgGgEIAAAAIgBABIgDABIAGADIACABIABACIAHAFIAGAKQAEAIABAHIAAADIABACIAAAEIgBABIAAADQgBAHgEAJIgGAJIgHAFIgBACIgCABQgGAEgGABQgDACgEAAIgNAAIgHgCQgFgBgHgEIgCgBIgBgBIgBgBIgGgFIgGgJQgEgHgBgJIgBgCIAAgJIABgCQABgIAEgHIABgDIAJAAIgEAGQgDAGgBAIIAAAKQABAHADAGIAGAIIAGAGIAAAAIACABIAKAEIAGACIAFABIAGgBIAGgCQAFgBAFgDIACgBIAAgBIABAAIAFgFIAFgIQAEgGABgHIAAgEIAAgFIAAgBQgBgIgEgGQgBgEgEgEIgEgDIgBgBIgBgBIAAAAIgCgCQgFgDgFgBIgGgCIgEAAIgCAAIgBAAIgCAAIAAgIIADABIAAgBIACABIALgCIgMgBIgEAAIAAgIIAEAAIAHAAIAFgBIABAAIADABIABAAIAEABIABABIABABIgDABIADABIAEgBIABAAIABABIABAAIABABIABABIABABIABABIgDABIACABIACABIAHAIIAIAKQAFALABAJIABACIAAAFIAAADIAAAAIAAADIgBACQgBAJgFAKIgIALIgFAGIgCABIgBABIgBABIgCACQgIAEgHACIgJADg");
	this.shape_28.setTransform(-22.775,4.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMCGIgMgDQgNgEgLgHIAAAAIgFgDIgEgEIgIgIQgIgJgEgIQgFgJgCgIIAAgBIgBgDIgBgDIgBgJIAAgGIgBgCIABgBIAAgJIABgFIAAgCIACgIIAAgBIAIAAIgBABIAAACIgBACIgCALIAAAFIgBAEIABADIAAAFIACAIIAAAEIABACIAAABQACAJAEAGQAFAKAHAGIALAKIABACIADACQALAHALADIAWADIAMgBIALgCQALgDAKgHIAEgCIACgCIADgDIAIgHQAGgGAFgKQAEgIACgHIAAgBIACgIIAAgCIABgEIAAgBIAAgOIAAgCIgBgEIAAgCIgCgJIgGgPQgEgHgHgIIgJgIIgCACIAJAIQAHAHADAIQAEAGADAIIAAABIACANIAAAGIABACIgBABIABADIgBAAIAAAFIgCANIAAABIgHAPQgDAHgHAIIgIAHIgDADIAAABIgFADQgIAFgMAEIgLADIgXAAIgKgDQgMgEgIgFIgFgDIgBgBIgKgKQgJgKgCgFIgGgPIAAgBIgBgCIgBgDIAAgCIgBgGIAAgBIAAgDIAAgJIAAgCIAAgBIABgGIAAgCIABgDIABgDIAAgBIAAgCIAIAAIgBAEIAAABIgBAFIgBACIAAACIAAAFIgBACIAAAIIABACIAAABIAAAEIAAACIABABIABAFIAAABIAFANQAFAIAFAGIAGAHIAEACIABABIABABIACABQAIAFAKAEIALACIAJABIALgBIAKgCQAKgDAIgGIADgCIABAAIAAgBIAKgJIAKgOIAGgNIAAgBIABgFIAAgBIABgGIAAgEIAAgDIAAgDIAAgFIgBgDIAAgCIAAgCIgBgFIAAgBIgGgNIgKgNIgJgIIgCACIgBgBIgBgBIgCgBIAAAAIgCgBIgBgBIADgCIgDgBIgDACIAAgBIgBAAIgBgBIgCgBIgBAAIgCgBIgBAAIADgCIgEgCIgCAAIAAAAIgBgBIgCAAIgCAAIgFgCIgJAAIgEAAIAAgIIAEAAIAHgBIACAAIAAgBIgKgBIgDAAIAAgHIAGAAIACgBIABAAIAAAAIACgBQAGgDADgFQAEgFAAgHQAAgGgEgGQgDgEgGgEIgCAAIAAAAIgBgBIgCAAIgGAAIgEABIgFACIgGAGIgDAHIAAABIgIAAIABgDIAEgJQADgFAFgDIAGgDIAHgCIAHAAIADABIABABIABAAIACABQAIADAEAHQAFAIABAIQgBAJgFAHQgCAEgFAEIAEAAIAGgGQAFgJAAgJQAAgJgFgIQgGgJgIgDIAAAAIgCgBIAAAAIgGgBIgFgBIgCABQgFAAgDABIgHAEIgJAJQgDAFgBAEIAAAEIgIAAIABgGIAFgLQAFgIAGgDIAJgFIAJgCIAJAAIAHACIABAAIACABQALAFAGAKQAGAKABALQgBAMgGAKIgEAFIADABIABAAIABABIABAAIABABIABAAIACABIAAAAIADABIACgDIAGgNIACgQIAAgHIgCgIIgGgOQgIgMgOgHIgEgBIgBAAIgCgBIgIgCIgHAAIgFAAIgNADIgKAGQgJAGgGAJQgEAGgCAIQgCAFAAAFIgHAAIABgMQADgIAFgJQAIgLAJgGIAMgGQAGgCAJgBQAFgBAJABIAIACIADABIABAAIADABQARAJAJANIAEAIIAEAIIABAJIAAARIgBAJIgEAIIgFAKIABABIAAABIACgDIAFgIIADgJIACgJIAAgSIgCgJIgIgQQgKgPgRgIIgDgCIgBAAIgEgBIgIgCIgJAAIgGAAQgLACgEACQgIACgFAEQgLAIgGAKQgGAHgCALIgDAMIgHAAIAAgBIADgNQACgLAHgJQAHgLAMgJQAHgFAIgCQAHgDAJgBQAIgCAKACIAJACIADABIABAAIACABIADABQASAIAMARIAJATIACAUIgCAVIgFAJIgGAMIACACIAIAIQAIALADAFIAIAQIAAABIAAADIACAMIAAACIABADIAAAKIgBACIAAACIgBAHIAAACIgBADIAAADIAAABIgIARQgDAGgIALIgNALIgBABIgEADQgLAHgMAEIgNADIgNABgAAqgUIABABIABAAIACgCIgCgBIgBAAgAAUgdIADABIABAAIACABIABAAIACAAIAAABIACAAIADACIACgCIgDgCIgBAAIgBgBIgBAAIgBgBIgCAAIgBAAIgDgBIAAAAg");
	this.shape_29.setTransform(-22.8,0.4625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-14,63.5,28);


(lib.Анимация14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Ресурс5();
	this.instance.setTransform(-121,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-120,242,240);


(lib.Анимация13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Ресурс5();
	this.instance.setTransform(-121,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-120,242,240);


(lib.Анимация12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Ресурс5();
	this.instance.setTransform(-121,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-120,242,240);


(lib.Анимация11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Ресурс5();
	this.instance.setTransform(-121,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-120,242,240);


(lib.Анимация10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Ресурс6();
	this.instance.setTransform(-181,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-120,362,240);


(lib.Анимация9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Ресурс7();
	this.instance.setTransform(-240.5,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.5,-120.5,481,241);


(lib.Анимация8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Ресурс7();
	this.instance.setTransform(-240.5,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.5,-120.5,481,241);


(lib.Анимация7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Ресурс6();
	this.instance.setTransform(-181,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-120,362,240);


(lib.Анимация6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Ресурс6();
	this.instance.setTransform(-181,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-120,362,240);


(lib.Анимация20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACABIgCgBIgCABQgBADgEAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQADgDACAAQADAAACADIADAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgDAAgDgDg");
	this.shape.setTransform(-2.6,-5.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGACQgCgCgEAAQgCAAgDACQgEACgDAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQACAAADgBQAFgCACAAQAEAAAEACIAGABQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgEAAgEgCg");
	this.shape_1.setTransform(-6.35,-4.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AACABIgCgCIgCACQgCAFgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIACgCQADgFACAAQADAAACAFIACACQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAQgDAAgCgFg");
	this.shape_2.setTransform(-5.15,-13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKACQgGgFgEAAQgDAAgGAFQgGAGgGAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAFAAAEgEQAHgHAFAAQAGAAAHAHQAEAEAFAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgGAAgGgGg");
	this.shape_3.setTransform(-4.875,-1.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXALIgDgKQgCgIgCgCQgCABgBAJIgDAKQgCADgDAAQgEABgCgOQgBgJgCgBQgCACgCAIIgDAKQgBADgDAAQgEABgDgOQgCgJgCgCQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAEgBADAOIAEAKIADgKQADgOAFABQAEgBACAOIADAKIAEgKQADgOAEABQAFgBACAOIAEAKQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgDAAgBgDg");
	this.shape_4.setTransform(-4.7,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACABIgCgEIgBAEQgCAHgEAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIACgEQADgHACAAQAEAAACAHIACAEQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgEAAgCgHg");
	this.shape_5.setTransform(-2.85,-18.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFABQgCgCgDAAQgCAAgCACQgEAFgFAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQADAAACgCQAFgFADAAQAFAAADAFQAEACABAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgEAAgEgFg");
	this.shape_6.setTransform(-6.9,-16.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdALIgDgLQgEgMgBABQgCgBgDAMQgEAQgFAAQgFAAgDgQQgDgMgCABQgCgBgDAMQgDAQgGAAQgDABgCgGIgEgLQgDgMgBABQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAFAAAEAQQACAMACAAQACAAADgMIADgKQACgFAEgBQAGAAACAQQADAMACAAQACAAADgMIADgKQACgFAEgBQAFAAADAQQADAMADAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgEABgCgGg");
	this.shape_7.setTransform(-3.95,-29.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKACQgFgDgFAAQgEAAgFADQgHAEgGAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAAAQAEAAAGgDQAGgEAGAAQAIAAAEAEQAHADAEAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgHAAgGgEg");
	this.shape_8.setTransform(-4.925,14.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATABIgDgIIgEAIQgDAMgDAAQgFAAgCgMQgBgIgDAAQgBAAgCAIQgDAMgEAAQgDgBgBgDIgEgIQgBgIgCAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAEABAEALIADAIIAEgIQACgLAEgBQAFABACALQACAIACAAQABAAABgIQADgLAFgBQAEABAEALQABAIABAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBABQgEAAgDgMg");
	this.shape_9.setTransform(-4.1,10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAJACQgFgDgEAAQgDAAgEADQgGAEgFAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAEAAAEgDQAFgEAFAAQAGAAAFAEQAFADAEAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgGAAgFgEg");
	this.shape_10.setTransform(-5.75,6.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFABQgDgCgCAAQgBAAgDACQgFAFgEAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQADAAADgCQADgFAEAAQAEAAAEAFQADACACAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgDAAgFgFg");
	this.shape_11.setTransform(-2.35,-22.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAAQgBgJgDgCIgDALIgDALQgCAGgDgBQgDAAgEgQQgBgJgCgCQgDACgBAJQgDAQgFAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQACAAACgMQADgQAFAAQAFAAACAQQADALAAABIAEgMQACgQAFAAQAFAAADAQQACAMACAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgEAAgEgQg");
	this.shape_12.setTransform(11.875,-29.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAFABQgDgIgCAAQAAAAgEAIQgEALgEAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQACAAACgIQAEgLAEAAQAFAAAEALQACAIACAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgEAAgEgLg");
	this.shape_13.setTransform(-5.975,-21.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQABQgDgMgEAAQgDAAgEAMQgDAPgHAAQgGAAgFgPQgDgMgEAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAGAAAFAPQAEAMADAAQADAAAEgMQADgPAHAAQAGAAAFAPQAEAMADAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQgGAAgFgPg");
	this.shape_14.setTransform(-4.825,-9.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaABQgDgMgCAAQgCAAgDAMQgEAPgFAAQgFAAgDgPQgDgMgCAAQgCAAgDAMQgDAPgGAAQgFAAgEgPQgDgMgCAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAGgBADAQQAEANABgBQACABADgNQAEgQAFABQAFgBADAQQADANACgBQACABADgNQAEgQAFABQAFgBAEAQQADANACgBQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgFAAgEgPg");
	this.shape_15.setTransform(0.075,-13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AALAAIgCgKIgCAKQgDAQgEAAQgDAAgCgQIgDgKIgCAKQgCAQgFAAQgDAAgDgQIgDgLQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQADAAADAQIACALIADgLQACgQAEAAQAEAAADAQIABALIADgLQACgQAEAAQAEAAACAQIADALQABgDABgIQADgQAEAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgDALQgCAQgEAAQgEAAgDgQg");
	this.shape_16.setTransform(4.425,-29.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAIABQgFgGgDAAQgDAAgEAGQgFAJgGAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAEAAAEgGQAFgJAFAAQAGAAAFAJQAEAGAEAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQgHAAgEgJg");
	this.shape_17.setTransform(-5.475,-25.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBAPIAAgdIADAAIAAAdg");
	this.shape_18.setTransform(-10.9,-30.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBAxIAAhhIADAAIAABhg");
	this.shape_19.setTransform(-10.9,-22.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAzIAAgCQgKgsgBgiIAAgBIAXgUIAYAUIAAABQAAAggLAuIAAACgAgTgcQABAgAJArIATAAQAJgoABgjIgUgRg");
	this.shape_20.setTransform(-10.925,-22.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAAEIgXAcIAAgGQABgaAKgRQAGgJAFgFIABAAIABAAIALAOQALARABAaIAAAGgAAUAUQgEgggQgOQgQAPgDAfIATgWg");
	this.shape_21.setTransform(-10.9,-29.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMAFIAZgdIAAAbIgZAXgAgIAHIAAAKIARgQIAAgPg");
	this.shape_22.setTransform(-12.025,-27.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMADIAAgbIAZAdIAAABIAAAGIAAAOgAgIABIARAQIAAgKIgRgVg");
	this.shape_23.setTransform(-9.775,-27.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjOFAIAAp/IGeAAIAAJ/gAjHE3IGOAAIAApuImOAAg");
	this.shape_24.setTransform(0,-13.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgBAHIAAgNIADAAIAAANg");
	this.shape_25.setTransform(11.675,1.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbAYIgWgXIAUgXIABAAIAHAAQAegBAjAGIAFABIgXAQIAYAOIgFABQgfAIgiABgAgVgSIgGAAIgRATIASATIAGAAQAegBAegHIgWgMIAVgOQgdgEgaAAIgFAAg");
	this.shape_26.setTransform(13.75,1.3429);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AADARIgBgBIgYgPIAYgRIABAAIARAEIACAAIABAYIgCAAIgRAEIAAABgAgOAAIASAMIAPgDIgBgSIgPgDg");
	this.shape_27.setTransform(17.875,1.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPANQgRAAgOgGIgEgBIARgSIAYAZgAgNAFQAMAEAMAAIgOgPg");
	this.shape_28.setTransform(9.45,2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTgDIADgCQAOgGARgBIAFgBIgWAbgAgMgCIAKAJIANgPQgMACgLAEg");
	this.shape_29.setTransform(9.35,0.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAEAQQgJgEgHgFQgGgEAAgBIgBgBIABgBIAFgFQAHgGAJgEIABgBIAQAQIgPARgAgOABQAHAHALAFIAKgNIgLgLQgEACgNAKg");
	this.shape_30.setTransform(7.325,1.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHgHIADgCIAMARIgDACg");
	this.shape_31.setTransform(16.325,-5.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHAIIAMgRIADACIgMARg");
	this.shape_32.setTransform(16.325,-5.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag2AZIgDgBIASgYIgTgWIADgBQARgEAYgBQAcAAAWAIQAXAIAAAMQAAAMgVAIQgWAIgeABQgWAAgSgEgAgOgYQgTAAgSAFIARATIgQAVQATAEARAAQAdgBAVgHQATgIAAgJQgBgJgTgIQgWgHgYAAIgDAAg");
	this.shape_33.setTransform(13.575,-5.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAHAYIgDgBQgdgHgBgQQAAgPAggIIACAAIATAXIgTAYgAgWAAQAAAMAbAIIABAAIAQgUIgQgTQgcAIAAALg");
	this.shape_34.setTransform(7.4,-5.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgBAHIAAgNIADAAIAAANg");
	this.shape_35.setTransform(12.9,-12.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAWAYQgggBgigGIgEgBIAWgQIgWgPIAEgBQAigGAggBIAGAAIAWAXIgWAYgAgmgNIAUANIgUANQAiAHAagBIAEAAIASgTIgSgSIgEAAQggAAgcAFg");
	this.shape_36.setTransform(10.85,-12.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCARIgSgEIgBgBIAAgXIABgBIASgDIAAgBIABAAIAAABIAYAPIgYARgAgSgIIAAARIAQAEIARgNIgRgLg");
	this.shape_37.setTransform(6.7,-12.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgTgMIAFAAQASABAOAGIACABIgQARgAAEAHIAJgKQgJgDgOgCg");
	this.shape_38.setTransform(15.175,-13.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgTANIAXgZIAQARIgCABQgQAHgRAAgAgKAJQAOgCAJgDIgJgKg");
	this.shape_39.setTransform(15.175,-11.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgTAAIAQgQIABAAQAPAHAGAJIABAAIgBABQgGAJgPAHIgBAAgAgNAAIALAMQALgEAGgIQgIgHgJgEg");
	this.shape_40.setTransform(17.225,-12.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSACIAAgDIAlAAIAAADg");
	this.shape_41.setTransform(-5.175,-41.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag+ACIAAgDIB9AAIAAADg");
	this.shape_42.setTransform(5.95,-41.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgmAaIgagaIAagZIABAAQAuABA3ALIABAAIAAAbIgBAAQg/ALgmABgAg7AAIAWAWQArgBA3gLIAAgUQg6gKgogBg");
	this.shape_43.setTransform(5.925,-41.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAiAaQgigBgWgMQgOgHgCgFIgCgBIACAAQACgFAOgHQAWgMAigBIAHAAIglAZIAlAagAgiAAQATASArAEIgegWIAegVQgsAEgSARg");
	this.shape_44.setTransform(-3.3,-41.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAQAOIgJAAIAAAAIgmgbIAjAAIAcAbIgFAAgAAIAKIAPAAIgUgTIgWAAg");
	this.shape_45.setTransform(-0.65,-40.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgfAOIAmgbIAZAAIgcAbgAgTAKIAWAAIAUgTIgPAAg");
	this.shape_46.setTransform(-0.65,-42.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgBAJIAAgQIADAAIAAAQg");
	this.shape_47.setTransform(2.85,-34.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAZAcQgmgBgngHIgGgBIAcgTIgcgRIAGgBQAngIAmAAIAIAAIAZAaIgZAcgAgvgPIAYAPIgYARQAiAGAmAAIAHAAIAVgXIgVgXIgHAAQggAAgoAIg");
	this.shape_48.setTransform(0.45,-34.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDAUIgVgFIgBgBIAAgcIACAAIAUgEIABAAIABAAIAbASIgcAUgAgVgKIAAAWIASADIAWgPIgWgOg");
	this.shape_49.setTransform(-4.525,-34.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgXgOIAGAAQATAAASAIIADABIgTAUgAAEAJIANgMQgNgFgRgCg");
	this.shape_50.setTransform(5.6,-36.125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgXAPIAbgdIATAUIgDABQgSAIgTAAgAgNALQARgCANgFIgNgMg");
	this.shape_51.setTransform(5.6,-33.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgWAAIASgTIABABQARAHAIALIABAAIgBABQgIALgRAIIgBAAgAgRAAIAOAPQALgFAKgKQgKgJgLgFg");
	this.shape_52.setTransform(8.05,-34.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHgHIADgCIAMARIgDACg");
	this.shape_53.setTransform(2.475,-18.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgHAIIAMgRIADACIgMARg");
	this.shape_54.setTransform(2.475,-18.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkAUQgVgIAAgMQAAgLAVgIQAVgIAeAAQAWgBASAFIADABIgSAWIASAXIgDABQgSAEgWAAQgeABgVgJgAgigQQgTAIAAAIQAAAKATAHQAUAIAdAAQASAAASgFIgRgUIARgUQgTgDgRgBQgdABgUAHg");
	this.shape_55.setTransform(5.2,-18.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgaAAIAUgYIABABQAfAIAAAPQAAAQgfAIIgBABgAgUAAIAQATQAbgGAAgNQAAgLgbgHg");
	this.shape_56.setTransform(11.3,-18.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgBAPIAAgdIADAAIAAAdg");
	this.shape_57.setTransform(1.5,3.55);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgBAxIAAhhIADAAIAABhg");
	this.shape_58.setTransform(1.5,-5.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgXAeIAAgBQABgfAKgvIAAgBIAZAAIABABQAKAsAAAiIAAABIgYAVgAgTAcIATARIAVgRQgCgjgKgnIgSAAQgKArAAAfg");
	this.shape_59.setTransform(1.5,-5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAAfQgGgEgFgJQgLgSgBgZIAAgGIAXAcIAYgcIAAAGQgBAZgKASQgGAJgGAEIgBABgAAAAbQARgPADgfIgUAWIgTgWQAEAfAPAPg");
	this.shape_60.setTransform(1.5,2.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMgCIAZgWIAAAUIgZAdgAgIgBIAAAPIARgUIAAgKg");
	this.shape_61.setTransform(2.625,0.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgMgEIAAgBIAAgPIAAgEIAZAWIAAAbgAgIgGIARAUIAAgPIgRgPg");
	this.shape_62.setTransform(0.375,0.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgBALIAAgVIADAAIAAAVg");
	this.shape_63.setTransform(2.15,-24.675);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgBALIAAgVIADAAIAAAVg");
	this.shape_64.setTransform(3.55,-24.675);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIgIIAEgDIANAVIgDACg");
	this.shape_65.setTransform(2.85,-24.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIAKIAOgVIADADIgNAUg");
	this.shape_66.setTransform(2.85,-24.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgsAMIgOgLIAAgBIAAAAIAOgMQATgLAbAAQAaABAXADIABAAIAIATIgIAUIgBAAQgXAEgagBQgbABgTgMgAg2AAQASAUAmAAQAVgBAagDIAGgQIgGgPQgWgEgZAAQgmABgSASg");
	this.shape_67.setTransform(5,-24.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgDAAIgIgQIAEAAIATAEIAAAYIgCAAIgVAGgAACAAIgGAMIALgDIAAgRIgLgDg");
	this.shape_68.setTransform(12.6,-24.65);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgGAAIgIgUIAUAEIABABIAIAPIgIAQIgBAAIgUAFgAgCAAIgGAPIAMgCIAGgNIgGgMIgMgCg");
	this.shape_69.setTransform(11.225,-24.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgRgBIAjAAIAAADIgjAAg");
	this.shape_70.setTransform(15.35,7.925);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Ag5gBIBzgBIAAAEIhzABg");
	this.shape_71.setTransform(5.05,8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAjAYQgpAAg0gKIgBgBIAAgYIABgBQA3gKAmgBIABAAIAYAXIgYAYgAg3gIIAAASQA1AJAlABIAUgUIgVgTQgnABgyAKg");
	this.shape_72.setTransform(5.1,7.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AglAZIAigZIgigYIAHABQAeABAVAKQALAGAFAFIABABIgBABQgFAFgKAGQgWALgeACgAADAAIgaAUQAngEARgQQgTgQgmgDg");
	this.shape_73.setTransform(13.575,7.95);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgDANIgagZIAPAAIAIAAIABAAIAjAZgAgBAJIASAAIgYgRIgNAAg");
	this.shape_74.setTransform(11.175,6.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgdAOIAagaIAhAAIgkAagAgTAJIAMAAIAYgRIgSAAg");
	this.shape_75.setTransform(11.2,9.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgCALIABgVIAEAAIgBAVg");
	this.shape_76.setTransform(11.15,14.225);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgBALIAAgVIADAAIAAAVg");
	this.shape_77.setTransform(9.675,14.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgIgKIAEgBIANAVIgDADg");
	this.shape_78.setTransform(10.4,14.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgJAKIAPgVIADACIgOAVg");
	this.shape_79.setTransform(10.4,14.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgCAZQgbgBgXgEIgBAAIgIgUIAJgVIABAAQAagDAYABQAcAAAUAMQAKAGAEAFIABACIgBABIgOAMQgUAKgbAAIgCAAgAgygRIgHARIAHAQQAXAEAZAAQAYABARgIQAMgFAGgHQgSgTgogBQgcAAgVACg");
	this.shape_80.setTransform(8.2,14.1476);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAIASIgUgGIABgYIAYgFIgKARIAJASgAgHgJIAAASIALADIgFgMIAGgLg");
	this.shape_81.setTransform(0.275,13.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAMAVIgBAAIgRgEIgBAAIgIgRIAJgRIABAAIASgDIADAAIgJAUIAIAVgAgDgNIgHANIAGANIANADIgGgQIAGgPg");
	this.shape_82.setTransform(1.725,14.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgJAGIAQgOIADAEIgQANg");
	this.shape_83.setTransform(-11.35,-12.65);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJgEIACgDIARAMIgCADg");
	this.shape_84.setTransform(-11.375,-12.625);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgXA4QgEgQgBgZQAAgdAIgVQAIgXAMAAQALAAAJAWQAIAUABAeQAAAVgEAUIgBADIgYgSIgVATgAgRgiQgHAWAAAbQAAATAFASIATgSIAVARQAEgQAAgVQgBgcgHgUQgJgUgIAAQgKAAgHAUg");
	this.shape_85.setTransform(-11.3,-9.875);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgXgFIAAgBIAXgUIAYATIAAACQgHAggQAAQgQAAgIgggAgTgFQAJAcALAAQAMAAAHgcIgUgQg");
	this.shape_86.setTransform(-11.25,-3.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgKACIAAgDIAVAAIAAADg");
	this.shape_87.setTransform(-16.625,-27.825);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgKACIAAgDIAVAAIAAADg");
	this.shape_88.setTransform(-16.625,-26.35);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgLAGIAVgOIACADIgVAOg");
	this.shape_89.setTransform(-16.625,-27.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgLgFIACgDIAVAOIgCADg");
	this.shape_90.setTransform(-16.625,-27.075);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgTA2IgBgCQgDgXAAgaQAAgdALgTIAMgPIAAgBIABABIAMAPQALATAAAdQAAAagDAXIgBACIgUAIgAgLgnQgIASAAAYQAAAUADAcIAQAGIARgGQADgXAAgZQAAgYgIgSQgFgLgHgGQgGAGgFALg");
	this.shape_91.setTransform(-16.625,-24.875);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgMAMIAAgBIgFgWIARAJIASgJIgFAWIAAABgAgIAIIASAAIADgMIgNAFIgLgFg");
	this.shape_92.setTransform(-16.625,-16.975);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgQAHIAAgBIgEgVIAUAJIAVgJIgEAVIAAABIgRAJgAgMAFIAMAGIAOgGIACgNIgQAGIgPgGg");
	this.shape_93.setTransform(-16.625,-18.425);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0.7,-12.25,1,1,0,0,0,29.6,36.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("Ag8BIIgBgMIAAh4IABgHQAAgDACgDQADgGAOAAIAtAAQATAAATAOQAIAHAGALQAGANAAANQAAAOgGALQgGAMgIAGQgTAOgTAAIgaAAIgBAgQAAADgCADQgDAGgOAAQgPAAgDgIgAgWgCIAaAAQAHAAAGgEQAGgFAAgKQAAgKgGgEQgGgFgHAAIgaAAg");
	this.shape_94.setTransform(14.425,37.625);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgeBKQgOgIgHgKQgPgTgCgWIgBgMIAAhAIAAgGIAAgCIACgFQACgEAEgBQAEgCAHABQAHgBAEACQAEABACAEQACAGAAAHIAABAIABAMQACAGAEAIQADAGAHAEQAGAEAJAAQAPAAAIgMQAEgHADgJIABgMIAAhBQAAgJACgDQACgDAEgCQAEgCAHABQAGgBADACIAHACQACACAAADQABAEAAAHIAABMQgDAXgPASQgHAMgPAGQgOAIgQgBQgQABgOgIg");
	this.shape_95.setTransform(-0.55,37.75);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgSBQQgIgCgHgFQgMgHgEgGIgCgCQgGgIAAgFQAAgFAJgKQAFgFAHAAQAGAAALALQADAEAGADQAFADAFAAQATAAAAgQQAAgFgFgEQgGgDgIgBIgRgFIgSgIQgHgEgHgKQgFgKAAgOQAAgTAOgOQAOgOAZAAQAMAAALADQAMAEADADIAFAEQAHAHAAAEQAAAEgFAIQgIALgHAAQgFAAgHgFIgCgCIgEgDQgEgDgHAAQgGAAgFAEQgFADAAAGQAAAGAGAEQAEADAJACIASAEIASAGQAIAFAGAIQAFAKAAAOQAAAOgFALQgGALgJAGQgTALgTAAQgIAAgKgCg");
	this.shape_96.setTransform(-14.825,37.625);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AALATIgDgHIgPAAIgDAHIgLAAIARglIAJAAIARAlgAgEAEIAJAAIgFgMg");
	this.shape_97.setTransform(15.125,24.55);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAGATIgIgOIgEAAIAAAOIgLAAIAAglIALAAIAAAPIAFAAIAIgPIALAAIgMASIAMATg");
	this.shape_98.setTransform(11.225,24.55);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAIATIAAgPIgPAAIAAAPIgKAAIAAglIAKAAIAAAPIAPAAIAAgPIAKAAIAAAlg");
	this.shape_99.setTransform(6.8,24.55);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AALATIgDgHIgPAAIgDAHIgLAAIAQglIAKAAIARAlgAgEAEIAIAAIgEgMg");
	this.shape_100.setTransform(2.35,24.55);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgEATIAAgdIgMAAIAAgIIAhAAIAAAIIgLAAIAAAdg");
	this.shape_101.setTransform(-1.5,24.55);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAHATIAAgPIgNAAIAAAPIgLAAIAAglIALAAIAAAPIANAAIAAgPIALAAIAAAlg");
	this.shape_102.setTransform(-5.5,24.55);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgKARQgEgCgEgFQgCgFAAgFQAAgEACgFQAEgFAEgCQAGgDAEAAQAGAAAFADQAFACADAFQACAEAAAFQAAAGgCAEQgDAFgFACQgFADgGAAQgEAAgGgDgAgEgJIgEAFIgBAEIABAGIAEADIAEACIAFgCQADgBABgCQACgCAAgEQAAgCgCgCQgBgDgDgCIgFgBIgEABg");
	this.shape_103.setTransform(-10,24.55);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgEAVIAAgFQgKAAgFgEQgFgEAAgIQAAgGAFgFQAEgEALgBIAAgEIAJAAIAAAEQAKABAEAEQAGAFAAAGQAAAHgGAFQgFAEgJAAIAAAFgAAFAIQAFgBACgBQACgCAAgEQAAgCgCgDQgCgCgFgBgAgLgFQgCACAAADQAAAEACACQACACAFAAIAAgQQgGABgBACg");
	this.shape_104.setTransform(-14.875,24.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.instance},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-49,59.2,94.9);


(lib.Анимация19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACABIgCgBIgCABQgBADgEAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQADgDACAAQADAAACADIADAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgDAAgDgDg");
	this.shape.setTransform(-2.6,-5.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGACQgCgCgEAAQgCAAgDACQgEACgDAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQACAAADgBQAFgCACAAQAEAAAEACIAGABQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgEAAgEgCg");
	this.shape_1.setTransform(-6.35,-4.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AACABIgCgCIgCACQgCAFgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIACgCQADgFACAAQADAAACAFIACACQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAQgDAAgCgFg");
	this.shape_2.setTransform(-5.15,-13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKACQgGgFgEAAQgDAAgGAFQgGAGgGAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAFAAAEgEQAHgHAFAAQAGAAAHAHQAEAEAFAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgGAAgGgGg");
	this.shape_3.setTransform(-4.875,-1.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXALIgDgKQgCgIgCgCQgCABgBAJIgDAKQgCADgDAAQgEABgCgOQgBgJgCgBQgCACgCAIIgDAKQgBADgDAAQgEABgDgOQgCgJgCgCQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAEgBADAOIAEAKIADgKQADgOAFABQAEgBACAOIADAKIAEgKQADgOAEABQAFgBACAOIAEAKQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgDAAgBgDg");
	this.shape_4.setTransform(-4.7,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACABIgCgEIgBAEQgCAHgEAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIACgEQADgHACAAQAEAAACAHIACAEQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgEAAgCgHg");
	this.shape_5.setTransform(-2.85,-18.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFABQgCgCgDAAQgCAAgCACQgEAFgFAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQADAAACgCQAFgFADAAQAFAAADAFQAEACABAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgEAAgEgFg");
	this.shape_6.setTransform(-6.9,-16.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdALIgDgLQgEgMgBABQgCgBgDAMQgEAQgFAAQgFAAgDgQQgDgMgCABQgCgBgDAMQgDAQgGAAQgDABgCgGIgEgLQgDgMgBABQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAFAAAEAQQACAMACAAQACAAADgMIADgKQACgFAEgBQAGAAACAQQADAMACAAQACAAADgMIADgKQACgFAEgBQAFAAADAQQADAMADAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgEABgCgGg");
	this.shape_7.setTransform(-3.95,-29.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKACQgFgDgFAAQgEAAgFADQgHAEgGAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAAAQAEAAAGgDQAGgEAGAAQAIAAAEAEQAHADAEAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgHAAgGgEg");
	this.shape_8.setTransform(-4.925,14.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATABIgDgIIgEAIQgDAMgDAAQgFAAgCgMQgBgIgDAAQgBAAgCAIQgDAMgEAAQgDgBgBgDIgEgIQgBgIgCAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAEABAEALIADAIIAEgIQACgLAEgBQAFABACALQACAIACAAQABAAABgIQADgLAFgBQAEABAEALQABAIABAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBABQgEAAgDgMg");
	this.shape_9.setTransform(-4.1,10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAJACQgFgDgEAAQgDAAgEADQgGAEgFAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAEAAAEgDQAFgEAFAAQAGAAAFAEQAFADAEAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgGAAgFgEg");
	this.shape_10.setTransform(-5.75,6.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFABQgDgCgCAAQgBAAgDACQgFAFgEAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQADAAADgCQADgFAEAAQAEAAAEAFQADACACAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgDAAgFgFg");
	this.shape_11.setTransform(-2.35,-22.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAAQgBgJgDgCIgDALIgDALQgCAGgDgBQgDAAgEgQQgBgJgCgCQgDACgBAJQgDAQgFAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQACAAACgMQADgQAFAAQAFAAACAQQADALAAABIAEgMQACgQAFAAQAFAAADAQQACAMACAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgEAAgEgQg");
	this.shape_12.setTransform(11.875,-29.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAFABQgDgIgCAAQAAAAgEAIQgEALgEAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQACAAACgIQAEgLAEAAQAFAAAEALQACAIACAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgEAAgEgLg");
	this.shape_13.setTransform(-5.975,-21.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQABQgDgMgEAAQgDAAgEAMQgDAPgHAAQgGAAgFgPQgDgMgEAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAGAAAFAPQAEAMADAAQADAAAEgMQADgPAHAAQAGAAAFAPQAEAMADAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQgGAAgFgPg");
	this.shape_14.setTransform(-4.825,-9.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaABQgDgMgCAAQgCAAgDAMQgEAPgFAAQgFAAgDgPQgDgMgCAAQgCAAgDAMQgDAPgGAAQgFAAgEgPQgDgMgCAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAGgBADAQQAEANABgBQACABADgNQAEgQAFABQAFgBADAQQADANACgBQACABADgNQAEgQAFABQAFgBAEAQQADANACgBQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgFAAgEgPg");
	this.shape_15.setTransform(0.075,-13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AALAAIgCgKIgCAKQgDAQgEAAQgDAAgCgQIgDgKIgCAKQgCAQgFAAQgDAAgDgQIgDgLQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQADAAADAQIACALIADgLQACgQAEAAQAEAAADAQIABALIADgLQACgQAEAAQAEAAACAQIADALQABgDABgIQADgQAEAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgDALQgCAQgEAAQgEAAgDgQg");
	this.shape_16.setTransform(4.425,-29.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAIABQgFgGgDAAQgDAAgEAGQgFAJgGAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAEAAAEgGQAFgJAFAAQAGAAAFAJQAEAGAEAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQgHAAgEgJg");
	this.shape_17.setTransform(-5.475,-25.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBAPIAAgdIADAAIAAAdg");
	this.shape_18.setTransform(-10.9,-30.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBAxIAAhhIADAAIAABhg");
	this.shape_19.setTransform(-10.9,-22.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAzIAAgCQgKgsgBgiIAAgBIAXgUIAYAUIAAABQAAAggLAuIAAACgAgTgcQABAgAJArIATAAQAJgoABgjIgUgRg");
	this.shape_20.setTransform(-10.925,-22.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAAEIgXAcIAAgGQABgaAKgRQAGgJAFgFIABAAIABAAIALAOQALARABAaIAAAGgAAUAUQgEgggQgOQgQAPgDAfIATgWg");
	this.shape_21.setTransform(-10.9,-29.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMAFIAZgdIAAAbIgZAXgAgIAHIAAAKIARgQIAAgPg");
	this.shape_22.setTransform(-12.025,-27.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMADIAAgbIAZAdIAAABIAAAGIAAAOgAgIABIARAQIAAgKIgRgVg");
	this.shape_23.setTransform(-9.775,-27.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjOFAIAAp/IGeAAIAAJ/gAjHE3IGOAAIAApuImOAAg");
	this.shape_24.setTransform(0,-13.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgBAHIAAgNIADAAIAAANg");
	this.shape_25.setTransform(11.675,1.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbAYIgWgXIAUgXIABAAIAHAAQAegBAjAGIAFABIgXAQIAYAOIgFABQgfAIgiABgAgVgSIgGAAIgRATIASATIAGAAQAegBAegHIgWgMIAVgOQgdgEgaAAIgFAAg");
	this.shape_26.setTransform(13.75,1.3429);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AADARIgBgBIgYgPIAYgRIABAAIARAEIACAAIABAYIgCAAIgRAEIAAABgAgOAAIASAMIAPgDIgBgSIgPgDg");
	this.shape_27.setTransform(17.875,1.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPANQgRAAgOgGIgEgBIARgSIAYAZgAgNAFQAMAEAMAAIgOgPg");
	this.shape_28.setTransform(9.45,2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTgDIADgCQAOgGARgBIAFgBIgWAbgAgMgCIAKAJIANgPQgMACgLAEg");
	this.shape_29.setTransform(9.35,0.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAEAQQgJgEgHgFQgGgEAAgBIgBgBIABgBIAFgFQAHgGAJgEIABgBIAQAQIgPARgAgOABQAHAHALAFIAKgNIgLgLQgEACgNAKg");
	this.shape_30.setTransform(7.325,1.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHgHIADgCIAMARIgDACg");
	this.shape_31.setTransform(16.325,-5.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHAIIAMgRIADACIgMARg");
	this.shape_32.setTransform(16.325,-5.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag2AZIgDgBIASgYIgTgWIADgBQARgEAYgBQAcAAAWAIQAXAIAAAMQAAAMgVAIQgWAIgeABQgWAAgSgEgAgOgYQgTAAgSAFIARATIgQAVQATAEARAAQAdgBAVgHQATgIAAgJQgBgJgTgIQgWgHgYAAIgDAAg");
	this.shape_33.setTransform(13.575,-5.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAHAYIgDgBQgdgHgBgQQAAgPAggIIACAAIATAXIgTAYgAgWAAQAAAMAbAIIABAAIAQgUIgQgTQgcAIAAALg");
	this.shape_34.setTransform(7.4,-5.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgBAHIAAgNIADAAIAAANg");
	this.shape_35.setTransform(12.9,-12.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAWAYQgggBgigGIgEgBIAWgQIgWgPIAEgBQAigGAggBIAGAAIAWAXIgWAYgAgmgNIAUANIgUANQAiAHAagBIAEAAIASgTIgSgSIgEAAQggAAgcAFg");
	this.shape_36.setTransform(10.85,-12.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCARIgSgEIgBgBIAAgXIABgBIASgDIAAgBIABAAIAAABIAYAPIgYARgAgSgIIAAARIAQAEIARgNIgRgLg");
	this.shape_37.setTransform(6.7,-12.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgTgMIAFAAQASABAOAGIACABIgQARgAAEAHIAJgKQgJgDgOgCg");
	this.shape_38.setTransform(15.175,-13.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgTANIAXgZIAQARIgCABQgQAHgRAAgAgKAJQAOgCAJgDIgJgKg");
	this.shape_39.setTransform(15.175,-11.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgTAAIAQgQIABAAQAPAHAGAJIABAAIgBABQgGAJgPAHIgBAAgAgNAAIALAMQALgEAGgIQgIgHgJgEg");
	this.shape_40.setTransform(17.225,-12.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSACIAAgDIAlAAIAAADg");
	this.shape_41.setTransform(-5.175,-41.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag+ACIAAgDIB9AAIAAADg");
	this.shape_42.setTransform(5.95,-41.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgmAaIgagaIAagZIABAAQAuABA3ALIABAAIAAAbIgBAAQg/ALgmABgAg7AAIAWAWQArgBA3gLIAAgUQg6gKgogBg");
	this.shape_43.setTransform(5.925,-41.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAiAaQgigBgWgMQgOgHgCgFIgCgBIACAAQACgFAOgHQAWgMAigBIAHAAIglAZIAlAagAgiAAQATASArAEIgegWIAegVQgsAEgSARg");
	this.shape_44.setTransform(-3.3,-41.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAQAOIgJAAIAAAAIgmgbIAjAAIAcAbIgFAAgAAIAKIAPAAIgUgTIgWAAg");
	this.shape_45.setTransform(-0.65,-40.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgfAOIAmgbIAZAAIgcAbgAgTAKIAWAAIAUgTIgPAAg");
	this.shape_46.setTransform(-0.65,-42.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgBAJIAAgQIADAAIAAAQg");
	this.shape_47.setTransform(2.85,-34.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAZAcQgmgBgngHIgGgBIAcgTIgcgRIAGgBQAngIAmAAIAIAAIAZAaIgZAcgAgvgPIAYAPIgYARQAiAGAmAAIAHAAIAVgXIgVgXIgHAAQggAAgoAIg");
	this.shape_48.setTransform(0.45,-34.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDAUIgVgFIgBgBIAAgcIACAAIAUgEIABAAIABAAIAbASIgcAUgAgVgKIAAAWIASADIAWgPIgWgOg");
	this.shape_49.setTransform(-4.525,-34.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgXgOIAGAAQATAAASAIIADABIgTAUgAAEAJIANgMQgNgFgRgCg");
	this.shape_50.setTransform(5.6,-36.125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgXAPIAbgdIATAUIgDABQgSAIgTAAgAgNALQARgCANgFIgNgMg");
	this.shape_51.setTransform(5.6,-33.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgWAAIASgTIABABQARAHAIALIABAAIgBABQgIALgRAIIgBAAgAgRAAIAOAPQALgFAKgKQgKgJgLgFg");
	this.shape_52.setTransform(8.05,-34.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHgHIADgCIAMARIgDACg");
	this.shape_53.setTransform(2.475,-18.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgHAIIAMgRIADACIgMARg");
	this.shape_54.setTransform(2.475,-18.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkAUQgVgIAAgMQAAgLAVgIQAVgIAeAAQAWgBASAFIADABIgSAWIASAXIgDABQgSAEgWAAQgeABgVgJgAgigQQgTAIAAAIQAAAKATAHQAUAIAdAAQASAAASgFIgRgUIARgUQgTgDgRgBQgdABgUAHg");
	this.shape_55.setTransform(5.2,-18.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgaAAIAUgYIABABQAfAIAAAPQAAAQgfAIIgBABgAgUAAIAQATQAbgGAAgNQAAgLgbgHg");
	this.shape_56.setTransform(11.3,-18.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgBAPIAAgdIADAAIAAAdg");
	this.shape_57.setTransform(1.5,3.55);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgBAxIAAhhIADAAIAABhg");
	this.shape_58.setTransform(1.5,-5.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgXAeIAAgBQABgfAKgvIAAgBIAZAAIABABQAKAsAAAiIAAABIgYAVgAgTAcIATARIAVgRQgCgjgKgnIgSAAQgKArAAAfg");
	this.shape_59.setTransform(1.5,-5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAAfQgGgEgFgJQgLgSgBgZIAAgGIAXAcIAYgcIAAAGQgBAZgKASQgGAJgGAEIgBABgAAAAbQARgPADgfIgUAWIgTgWQAEAfAPAPg");
	this.shape_60.setTransform(1.5,2.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMgCIAZgWIAAAUIgZAdgAgIgBIAAAPIARgUIAAgKg");
	this.shape_61.setTransform(2.625,0.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgMgEIAAgBIAAgPIAAgEIAZAWIAAAbgAgIgGIARAUIAAgPIgRgPg");
	this.shape_62.setTransform(0.375,0.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgBALIAAgVIADAAIAAAVg");
	this.shape_63.setTransform(2.15,-24.675);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgBALIAAgVIADAAIAAAVg");
	this.shape_64.setTransform(3.55,-24.675);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIgIIAEgDIANAVIgDACg");
	this.shape_65.setTransform(2.85,-24.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIAKIAOgVIADADIgNAUg");
	this.shape_66.setTransform(2.85,-24.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgsAMIgOgLIAAgBIAAAAIAOgMQATgLAbAAQAaABAXADIABAAIAIATIgIAUIgBAAQgXAEgagBQgbABgTgMgAg2AAQASAUAmAAQAVgBAagDIAGgQIgGgPQgWgEgZAAQgmABgSASg");
	this.shape_67.setTransform(5,-24.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgDAAIgIgQIAEAAIATAEIAAAYIgCAAIgVAGgAACAAIgGAMIALgDIAAgRIgLgDg");
	this.shape_68.setTransform(12.6,-24.65);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgGAAIgIgUIAUAEIABABIAIAPIgIAQIgBAAIgUAFgAgCAAIgGAPIAMgCIAGgNIgGgMIgMgCg");
	this.shape_69.setTransform(11.225,-24.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgRgBIAjAAIAAADIgjAAg");
	this.shape_70.setTransform(15.35,7.925);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Ag5gBIBzgBIAAAEIhzABg");
	this.shape_71.setTransform(5.05,8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAjAYQgpAAg0gKIgBgBIAAgYIABgBQA3gKAmgBIABAAIAYAXIgYAYgAg3gIIAAASQA1AJAlABIAUgUIgVgTQgnABgyAKg");
	this.shape_72.setTransform(5.1,7.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AglAZIAigZIgigYIAHABQAeABAVAKQALAGAFAFIABABIgBABQgFAFgKAGQgWALgeACgAADAAIgaAUQAngEARgQQgTgQgmgDg");
	this.shape_73.setTransform(13.575,7.95);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgDANIgagZIAPAAIAIAAIABAAIAjAZgAgBAJIASAAIgYgRIgNAAg");
	this.shape_74.setTransform(11.175,6.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgdAOIAagaIAhAAIgkAagAgTAJIAMAAIAYgRIgSAAg");
	this.shape_75.setTransform(11.2,9.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgCALIABgVIAEAAIgBAVg");
	this.shape_76.setTransform(11.15,14.225);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgBALIAAgVIADAAIAAAVg");
	this.shape_77.setTransform(9.675,14.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgIgKIAEgBIANAVIgDADg");
	this.shape_78.setTransform(10.4,14.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgJAKIAPgVIADACIgOAVg");
	this.shape_79.setTransform(10.4,14.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgCAZQgbgBgXgEIgBAAIgIgUIAJgVIABAAQAagDAYABQAcAAAUAMQAKAGAEAFIABACIgBABIgOAMQgUAKgbAAIgCAAgAgygRIgHARIAHAQQAXAEAZAAQAYABARgIQAMgFAGgHQgSgTgogBQgcAAgVACg");
	this.shape_80.setTransform(8.2,14.1476);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAIASIgUgGIABgYIAYgFIgKARIAJASgAgHgJIAAASIALADIgFgMIAGgLg");
	this.shape_81.setTransform(0.275,13.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAMAVIgBAAIgRgEIgBAAIgIgRIAJgRIABAAIASgDIADAAIgJAUIAIAVgAgDgNIgHANIAGANIANADIgGgQIAGgPg");
	this.shape_82.setTransform(1.725,14.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgJAGIAQgOIADAEIgQANg");
	this.shape_83.setTransform(-11.35,-12.65);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJgEIACgDIARAMIgCADg");
	this.shape_84.setTransform(-11.375,-12.625);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgXA4QgEgQgBgZQAAgdAIgVQAIgXAMAAQALAAAJAWQAIAUABAeQAAAVgEAUIgBADIgYgSIgVATgAgRgiQgHAWAAAbQAAATAFASIATgSIAVARQAEgQAAgVQgBgcgHgUQgJgUgIAAQgKAAgHAUg");
	this.shape_85.setTransform(-11.3,-9.875);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgXgFIAAgBIAXgUIAYATIAAACQgHAggQAAQgQAAgIgggAgTgFQAJAcALAAQAMAAAHgcIgUgQg");
	this.shape_86.setTransform(-11.25,-3.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgKACIAAgDIAVAAIAAADg");
	this.shape_87.setTransform(-16.625,-27.825);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgKACIAAgDIAVAAIAAADg");
	this.shape_88.setTransform(-16.625,-26.35);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgLAGIAVgOIACADIgVAOg");
	this.shape_89.setTransform(-16.625,-27.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgLgFIACgDIAVAOIgCADg");
	this.shape_90.setTransform(-16.625,-27.075);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgTA2IgBgCQgDgXAAgaQAAgdALgTIAMgPIAAgBIABABIAMAPQALATAAAdQAAAagDAXIgBACIgUAIgAgLgnQgIASAAAYQAAAUADAcIAQAGIARgGQADgXAAgZQAAgYgIgSQgFgLgHgGQgGAGgFALg");
	this.shape_91.setTransform(-16.625,-24.875);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgMAMIAAgBIgFgWIARAJIASgJIgFAWIAAABgAgIAIIASAAIADgMIgNAFIgLgFg");
	this.shape_92.setTransform(-16.625,-16.975);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgQAHIAAgBIgEgVIAUAJIAVgJIgEAVIAAABIgRAJgAgMAFIAMAGIAOgGIACgNIgQAGIgPgGg");
	this.shape_93.setTransform(-16.625,-18.425);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0.7,-12.25,1,1,0,0,0,29.6,36.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("Ag8BIIgBgMIAAh4IABgHQAAgDACgDQADgGAOAAIAtAAQATAAATAOQAIAHAGALQAGANAAANQAAAOgGALQgGAMgIAGQgTAOgTAAIgaAAIgBAgQAAADgCADQgDAGgOAAQgPAAgDgIgAgWgCIAaAAQAHAAAGgEQAGgFAAgKQAAgKgGgEQgGgFgHAAIgaAAg");
	this.shape_94.setTransform(14.425,37.625);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgeBKQgOgIgHgKQgPgTgCgWIgBgMIAAhAIAAgGIAAgCIACgFQACgEAEgBQAEgCAHABQAHgBAEACQAEABACAEQACAGAAAHIAABAIABAMQACAGAEAIQADAGAHAEQAGAEAJAAQAPAAAIgMQAEgHADgJIABgMIAAhBQAAgJACgDQACgDAEgCQAEgCAHABQAGgBADACIAHACQACACAAADQABAEAAAHIAABMQgDAXgPASQgHAMgPAGQgOAIgQgBQgQABgOgIg");
	this.shape_95.setTransform(-0.55,37.75);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgSBQQgIgCgHgFQgMgHgEgGIgCgCQgGgIAAgFQAAgFAJgKQAFgFAHAAQAGAAALALQADAEAGADQAFADAFAAQATAAAAgQQAAgFgFgEQgGgDgIgBIgRgFIgSgIQgHgEgHgKQgFgKAAgOQAAgTAOgOQAOgOAZAAQAMAAALADQAMAEADADIAFAEQAHAHAAAEQAAAEgFAIQgIALgHAAQgFAAgHgFIgCgCIgEgDQgEgDgHAAQgGAAgFAEQgFADAAAGQAAAGAGAEQAEADAJACIASAEIASAGQAIAFAGAIQAFAKAAAOQAAAOgFALQgGALgJAGQgTALgTAAQgIAAgKgCg");
	this.shape_96.setTransform(-14.825,37.625);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AALATIgDgHIgPAAIgDAHIgLAAIARglIAJAAIARAlgAgEAEIAJAAIgFgMg");
	this.shape_97.setTransform(15.125,24.55);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAGATIgIgOIgEAAIAAAOIgLAAIAAglIALAAIAAAPIAFAAIAIgPIALAAIgMASIAMATg");
	this.shape_98.setTransform(11.225,24.55);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAIATIAAgPIgPAAIAAAPIgKAAIAAglIAKAAIAAAPIAPAAIAAgPIAKAAIAAAlg");
	this.shape_99.setTransform(6.8,24.55);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AALATIgDgHIgPAAIgDAHIgLAAIAQglIAKAAIARAlgAgEAEIAIAAIgEgMg");
	this.shape_100.setTransform(2.35,24.55);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgEATIAAgdIgMAAIAAgIIAhAAIAAAIIgLAAIAAAdg");
	this.shape_101.setTransform(-1.5,24.55);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAHATIAAgPIgNAAIAAAPIgLAAIAAglIALAAIAAAPIANAAIAAgPIALAAIAAAlg");
	this.shape_102.setTransform(-5.5,24.55);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgKARQgEgCgEgFQgCgFAAgFQAAgEACgFQAEgFAEgCQAGgDAEAAQAGAAAFADQAFACADAFQACAEAAAFQAAAGgCAEQgDAFgFACQgFADgGAAQgEAAgGgDgAgEgJIgEAFIgBAEIABAGIAEADIAEACIAFgCQADgBABgCQACgCAAgEQAAgCgCgCQgBgDgDgCIgFgBIgEABg");
	this.shape_103.setTransform(-10,24.55);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgEAVIAAgFQgKAAgFgEQgFgEAAgIQAAgGAFgFQAEgEALgBIAAgEIAJAAIAAAEQAKABAEAEQAGAFAAAGQAAAHgGAFQgFAEgJAAIAAAFgAAFAIQAFgBACgBQACgCAAgEQAAgCgCgDQgCgCgFgBgAgLgFQgCACAAADQAAAEACACQACACAFAAIAAgQQgGABgBACg");
	this.shape_104.setTransform(-14.875,24.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.instance},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-49,59.2,94.9);


(lib.Анимация15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACABIgCgBIgCABQgBADgEAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQADgDACAAQADAAACADIADAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgDAAgDgDg");
	this.shape.setTransform(-2.6,-5.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGACQgCgCgEAAQgCAAgDACQgEACgDAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQACAAADgBQAFgCACAAQAEAAAEACIAGABQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgEAAgEgCg");
	this.shape_1.setTransform(-6.35,-4.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AACABIgCgCIgCACQgCAFgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIACgCQADgFACAAQADAAACAFIACACQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAQgDAAgCgFg");
	this.shape_2.setTransform(-5.15,-13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKACQgGgFgEAAQgDAAgGAFQgGAGgGAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAFAAAEgEQAHgHAFAAQAGAAAHAHQAEAEAFAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgGAAgGgGg");
	this.shape_3.setTransform(-4.875,-1.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXALIgDgKQgCgIgCgCQgCABgBAJIgDAKQgCADgDAAQgEABgCgOQgBgJgCgBQgCACgCAIIgDAKQgBADgDAAQgEABgDgOQgCgJgCgCQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAEgBADAOIAEAKIADgKQADgOAFABQAEgBACAOIADAKIAEgKQADgOAEABQAFgBACAOIAEAKQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgDAAgBgDg");
	this.shape_4.setTransform(-4.7,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACABIgCgEIgBAEQgCAHgEAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIACgEQADgHACAAQAEAAACAHIACAEQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgEAAgCgHg");
	this.shape_5.setTransform(-2.85,-18.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFABQgCgCgDAAQgCAAgCACQgEAFgFAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQADAAACgCQAFgFADAAQAFAAADAFQAEACABAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgEAAgEgFg");
	this.shape_6.setTransform(-6.9,-16.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdALIgDgLQgEgMgBABQgCgBgDAMQgEAQgFAAQgFAAgDgQQgDgMgCABQgCgBgDAMQgDAQgGAAQgDABgCgGIgEgLQgDgMgBABQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAFAAAEAQQACAMACAAQACAAADgMIADgKQACgFAEgBQAGAAACAQQADAMACAAQACAAADgMIADgKQACgFAEgBQAFAAADAQQADAMADAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgEABgCgGg");
	this.shape_7.setTransform(-3.95,-29.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKACQgFgDgFAAQgEAAgFADQgHAEgGAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAAAQAEAAAGgDQAGgEAGAAQAIAAAEAEQAHADAEAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgHAAgGgEg");
	this.shape_8.setTransform(-4.925,14.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATABIgDgIIgEAIQgDAMgDAAQgFAAgCgMQgBgIgDAAQgBAAgCAIQgDAMgEAAQgDgBgBgDIgEgIQgBgIgCAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAEABAEALIADAIIAEgIQACgLAEgBQAFABACALQACAIACAAQABAAABgIQADgLAFgBQAEABAEALQABAIABAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBABQgEAAgDgMg");
	this.shape_9.setTransform(-4.1,10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAJACQgFgDgEAAQgDAAgEADQgGAEgFAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAEAAAEgDQAFgEAFAAQAGAAAFAEQAFADAEAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgGAAgFgEg");
	this.shape_10.setTransform(-5.75,6.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFABQgDgCgCAAQgBAAgDACQgFAFgEAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQADAAADgCQADgFAEAAQAEAAAEAFQADACACAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgDAAgFgFg");
	this.shape_11.setTransform(-2.35,-22.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAAQgBgJgDgCIgDALIgDALQgCAGgDgBQgDAAgEgQQgBgJgCgCQgDACgBAJQgDAQgFAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQACAAACgMQADgQAFAAQAFAAACAQQADALAAABIAEgMQACgQAFAAQAFAAADAQQACAMACAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgEAAgEgQg");
	this.shape_12.setTransform(11.875,-29.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAFABQgDgIgCAAQAAAAgEAIQgEALgEAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQACAAACgIQAEgLAEAAQAFAAAEALQACAIACAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgEAAgEgLg");
	this.shape_13.setTransform(-5.975,-21.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQABQgDgMgEAAQgDAAgEAMQgDAPgHAAQgGAAgFgPQgDgMgEAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAGAAAFAPQAEAMADAAQADAAAEgMQADgPAHAAQAGAAAFAPQAEAMADAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQgGAAgFgPg");
	this.shape_14.setTransform(-4.825,-9.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaABQgDgMgCAAQgCAAgDAMQgEAPgFAAQgFAAgDgPQgDgMgCAAQgCAAgDAMQgDAPgGAAQgFAAgEgPQgDgMgCAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAGgBADAQQAEANABgBQACABADgNQAEgQAFABQAFgBADAQQADANACgBQACABADgNQAEgQAFABQAFgBAEAQQADANACgBQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgFAAgEgPg");
	this.shape_15.setTransform(0.075,-13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AALAAIgCgKIgCAKQgDAQgEAAQgDAAgCgQIgDgKIgCAKQgCAQgFAAQgDAAgDgQIgDgLQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQADAAADAQIACALIADgLQACgQAEAAQAEAAADAQIABALIADgLQACgQAEAAQAEAAACAQIADALQABgDABgIQADgQAEAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgDALQgCAQgEAAQgEAAgDgQg");
	this.shape_16.setTransform(4.425,-29.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAIABQgFgGgDAAQgDAAgEAGQgFAJgGAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAEAAAEgGQAFgJAFAAQAGAAAFAJQAEAGAEAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQgHAAgEgJg");
	this.shape_17.setTransform(-5.475,-25.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBAPIAAgdIADAAIAAAdg");
	this.shape_18.setTransform(-10.9,-30.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBAxIAAhhIADAAIAABhg");
	this.shape_19.setTransform(-10.9,-22.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAzIAAgCQgKgsgBgiIAAgBIAXgUIAYAUIAAABQAAAggLAuIAAACgAgTgcQABAgAJArIATAAQAJgoABgjIgUgRg");
	this.shape_20.setTransform(-10.925,-22.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAAEIgXAcIAAgGQABgaAKgRQAGgJAFgFIABAAIABAAIALAOQALARABAaIAAAGgAAUAUQgEgggQgOQgQAPgDAfIATgWg");
	this.shape_21.setTransform(-10.9,-29.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMAFIAZgdIAAAbIgZAXgAgIAHIAAAKIARgQIAAgPg");
	this.shape_22.setTransform(-12.025,-27.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMADIAAgbIAZAdIAAABIAAAGIAAAOgAgIABIARAQIAAgKIgRgVg");
	this.shape_23.setTransform(-9.775,-27.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjOFAIAAp/IGeAAIAAJ/gAjHE3IGOAAIAApuImOAAg");
	this.shape_24.setTransform(0,-13.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgBAHIAAgNIADAAIAAANg");
	this.shape_25.setTransform(11.675,1.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbAYIgWgXIAUgXIABAAIAHAAQAegBAjAGIAFABIgXAQIAYAOIgFABQgfAIgiABgAgVgSIgGAAIgRATIASATIAGAAQAegBAegHIgWgMIAVgOQgdgEgaAAIgFAAg");
	this.shape_26.setTransform(13.75,1.3429);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AADARIgBgBIgYgPIAYgRIABAAIARAEIACAAIABAYIgCAAIgRAEIAAABgAgOAAIASAMIAPgDIgBgSIgPgDg");
	this.shape_27.setTransform(17.875,1.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPANQgRAAgOgGIgEgBIARgSIAYAZgAgNAFQAMAEAMAAIgOgPg");
	this.shape_28.setTransform(9.45,2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTgDIADgCQAOgGARgBIAFgBIgWAbgAgMgCIAKAJIANgPQgMACgLAEg");
	this.shape_29.setTransform(9.35,0.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAEAQQgJgEgHgFQgGgEAAgBIgBgBIABgBIAFgFQAHgGAJgEIABgBIAQAQIgPARgAgOABQAHAHALAFIAKgNIgLgLQgEACgNAKg");
	this.shape_30.setTransform(7.325,1.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHgHIADgCIAMARIgDACg");
	this.shape_31.setTransform(16.325,-5.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHAIIAMgRIADACIgMARg");
	this.shape_32.setTransform(16.325,-5.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag2AZIgDgBIASgYIgTgWIADgBQARgEAYgBQAcAAAWAIQAXAIAAAMQAAAMgVAIQgWAIgeABQgWAAgSgEgAgOgYQgTAAgSAFIARATIgQAVQATAEARAAQAdgBAVgHQATgIAAgJQgBgJgTgIQgWgHgYAAIgDAAg");
	this.shape_33.setTransform(13.575,-5.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAHAYIgDgBQgdgHgBgQQAAgPAggIIACAAIATAXIgTAYgAgWAAQAAAMAbAIIABAAIAQgUIgQgTQgcAIAAALg");
	this.shape_34.setTransform(7.4,-5.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgBAHIAAgNIADAAIAAANg");
	this.shape_35.setTransform(12.9,-12.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAWAYQgggBgigGIgEgBIAWgQIgWgPIAEgBQAigGAggBIAGAAIAWAXIgWAYgAgmgNIAUANIgUANQAiAHAagBIAEAAIASgTIgSgSIgEAAQggAAgcAFg");
	this.shape_36.setTransform(10.85,-12.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCARIgSgEIgBgBIAAgXIABgBIASgDIAAgBIABAAIAAABIAYAPIgYARgAgSgIIAAARIAQAEIARgNIgRgLg");
	this.shape_37.setTransform(6.7,-12.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgTgMIAFAAQASABAOAGIACABIgQARgAAEAHIAJgKQgJgDgOgCg");
	this.shape_38.setTransform(15.175,-13.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgTANIAXgZIAQARIgCABQgQAHgRAAgAgKAJQAOgCAJgDIgJgKg");
	this.shape_39.setTransform(15.175,-11.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgTAAIAQgQIABAAQAPAHAGAJIABAAIgBABQgGAJgPAHIgBAAgAgNAAIALAMQALgEAGgIQgIgHgJgEg");
	this.shape_40.setTransform(17.225,-12.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSACIAAgDIAlAAIAAADg");
	this.shape_41.setTransform(-5.175,-41.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag+ACIAAgDIB9AAIAAADg");
	this.shape_42.setTransform(5.95,-41.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgmAaIgagaIAagZIABAAQAuABA3ALIABAAIAAAbIgBAAQg/ALgmABgAg7AAIAWAWQArgBA3gLIAAgUQg6gKgogBg");
	this.shape_43.setTransform(5.925,-41.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAiAaQgigBgWgMQgOgHgCgFIgCgBIACAAQACgFAOgHQAWgMAigBIAHAAIglAZIAlAagAgiAAQATASArAEIgegWIAegVQgsAEgSARg");
	this.shape_44.setTransform(-3.3,-41.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAQAOIgJAAIAAAAIgmgbIAjAAIAcAbIgFAAgAAIAKIAPAAIgUgTIgWAAg");
	this.shape_45.setTransform(-0.65,-40.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgfAOIAmgbIAZAAIgcAbgAgTAKIAWAAIAUgTIgPAAg");
	this.shape_46.setTransform(-0.65,-42.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgBAJIAAgQIADAAIAAAQg");
	this.shape_47.setTransform(2.85,-34.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAZAcQgmgBgngHIgGgBIAcgTIgcgRIAGgBQAngIAmAAIAIAAIAZAaIgZAcgAgvgPIAYAPIgYARQAiAGAmAAIAHAAIAVgXIgVgXIgHAAQggAAgoAIg");
	this.shape_48.setTransform(0.45,-34.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDAUIgVgFIgBgBIAAgcIACAAIAUgEIABAAIABAAIAbASIgcAUgAgVgKIAAAWIASADIAWgPIgWgOg");
	this.shape_49.setTransform(-4.525,-34.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgXgOIAGAAQATAAASAIIADABIgTAUgAAEAJIANgMQgNgFgRgCg");
	this.shape_50.setTransform(5.6,-36.125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgXAPIAbgdIATAUIgDABQgSAIgTAAgAgNALQARgCANgFIgNgMg");
	this.shape_51.setTransform(5.6,-33.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgWAAIASgTIABABQARAHAIALIABAAIgBABQgIALgRAIIgBAAgAgRAAIAOAPQALgFAKgKQgKgJgLgFg");
	this.shape_52.setTransform(8.05,-34.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHgHIADgCIAMARIgDACg");
	this.shape_53.setTransform(2.475,-18.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgHAIIAMgRIADACIgMARg");
	this.shape_54.setTransform(2.475,-18.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkAUQgVgIAAgMQAAgLAVgIQAVgIAeAAQAWgBASAFIADABIgSAWIASAXIgDABQgSAEgWAAQgeABgVgJgAgigQQgTAIAAAIQAAAKATAHQAUAIAdAAQASAAASgFIgRgUIARgUQgTgDgRgBQgdABgUAHg");
	this.shape_55.setTransform(5.2,-18.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgaAAIAUgYIABABQAfAIAAAPQAAAQgfAIIgBABgAgUAAIAQATQAbgGAAgNQAAgLgbgHg");
	this.shape_56.setTransform(11.3,-18.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgBAPIAAgdIADAAIAAAdg");
	this.shape_57.setTransform(1.5,3.55);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgBAxIAAhhIADAAIAABhg");
	this.shape_58.setTransform(1.5,-5.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgXAeIAAgBQABgfAKgvIAAgBIAZAAIABABQAKAsAAAiIAAABIgYAVgAgTAcIATARIAVgRQgCgjgKgnIgSAAQgKArAAAfg");
	this.shape_59.setTransform(1.5,-5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAAfQgGgEgFgJQgLgSgBgZIAAgGIAXAcIAYgcIAAAGQgBAZgKASQgGAJgGAEIgBABgAAAAbQARgPADgfIgUAWIgTgWQAEAfAPAPg");
	this.shape_60.setTransform(1.5,2.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMgCIAZgWIAAAUIgZAdgAgIgBIAAAPIARgUIAAgKg");
	this.shape_61.setTransform(2.625,0.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgMgEIAAgBIAAgPIAAgEIAZAWIAAAbgAgIgGIARAUIAAgPIgRgPg");
	this.shape_62.setTransform(0.375,0.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgBALIAAgVIADAAIAAAVg");
	this.shape_63.setTransform(2.15,-24.675);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgBALIAAgVIADAAIAAAVg");
	this.shape_64.setTransform(3.55,-24.675);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIgIIAEgDIANAVIgDACg");
	this.shape_65.setTransform(2.85,-24.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIAKIAOgVIADADIgNAUg");
	this.shape_66.setTransform(2.85,-24.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgsAMIgOgLIAAgBIAAAAIAOgMQATgLAbAAQAaABAXADIABAAIAIATIgIAUIgBAAQgXAEgagBQgbABgTgMgAg2AAQASAUAmAAQAVgBAagDIAGgQIgGgPQgWgEgZAAQgmABgSASg");
	this.shape_67.setTransform(5,-24.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgDAAIgIgQIAEAAIATAEIAAAYIgCAAIgVAGgAACAAIgGAMIALgDIAAgRIgLgDg");
	this.shape_68.setTransform(12.6,-24.65);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgGAAIgIgUIAUAEIABABIAIAPIgIAQIgBAAIgUAFgAgCAAIgGAPIAMgCIAGgNIgGgMIgMgCg");
	this.shape_69.setTransform(11.225,-24.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgRgBIAjAAIAAADIgjAAg");
	this.shape_70.setTransform(15.35,7.925);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Ag5gBIBzgBIAAAEIhzABg");
	this.shape_71.setTransform(5.05,8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAjAYQgpAAg0gKIgBgBIAAgYIABgBQA3gKAmgBIABAAIAYAXIgYAYgAg3gIIAAASQA1AJAlABIAUgUIgVgTQgnABgyAKg");
	this.shape_72.setTransform(5.1,7.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AglAZIAigZIgigYIAHABQAeABAVAKQALAGAFAFIABABIgBABQgFAFgKAGQgWALgeACgAADAAIgaAUQAngEARgQQgTgQgmgDg");
	this.shape_73.setTransform(13.575,7.95);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgDANIgagZIAPAAIAIAAIABAAIAjAZgAgBAJIASAAIgYgRIgNAAg");
	this.shape_74.setTransform(11.175,6.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgdAOIAagaIAhAAIgkAagAgTAJIAMAAIAYgRIgSAAg");
	this.shape_75.setTransform(11.2,9.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgCALIABgVIAEAAIgBAVg");
	this.shape_76.setTransform(11.15,14.225);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgBALIAAgVIADAAIAAAVg");
	this.shape_77.setTransform(9.675,14.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgIgKIAEgBIANAVIgDADg");
	this.shape_78.setTransform(10.4,14.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgJAKIAPgVIADACIgOAVg");
	this.shape_79.setTransform(10.4,14.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgCAZQgbgBgXgEIgBAAIgIgUIAJgVIABAAQAagDAYABQAcAAAUAMQAKAGAEAFIABACIgBABIgOAMQgUAKgbAAIgCAAgAgygRIgHARIAHAQQAXAEAZAAQAYABARgIQAMgFAGgHQgSgTgogBQgcAAgVACg");
	this.shape_80.setTransform(8.2,14.1476);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAIASIgUgGIABgYIAYgFIgKARIAJASgAgHgJIAAASIALADIgFgMIAGgLg");
	this.shape_81.setTransform(0.275,13.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAMAVIgBAAIgRgEIgBAAIgIgRIAJgRIABAAIASgDIADAAIgJAUIAIAVgAgDgNIgHANIAGANIANADIgGgQIAGgPg");
	this.shape_82.setTransform(1.725,14.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgJAGIAQgOIADAEIgQANg");
	this.shape_83.setTransform(-11.35,-12.65);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJgEIACgDIARAMIgCADg");
	this.shape_84.setTransform(-11.375,-12.625);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgXA4QgEgQgBgZQAAgdAIgVQAIgXAMAAQALAAAJAWQAIAUABAeQAAAVgEAUIgBADIgYgSIgVATgAgRgiQgHAWAAAbQAAATAFASIATgSIAVARQAEgQAAgVQgBgcgHgUQgJgUgIAAQgKAAgHAUg");
	this.shape_85.setTransform(-11.3,-9.875);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgXgFIAAgBIAXgUIAYATIAAACQgHAggQAAQgQAAgIgggAgTgFQAJAcALAAQAMAAAHgcIgUgQg");
	this.shape_86.setTransform(-11.25,-3.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgKACIAAgDIAVAAIAAADg");
	this.shape_87.setTransform(-16.625,-27.825);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgKACIAAgDIAVAAIAAADg");
	this.shape_88.setTransform(-16.625,-26.35);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgLAGIAVgOIACADIgVAOg");
	this.shape_89.setTransform(-16.625,-27.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgLgFIACgDIAVAOIgCADg");
	this.shape_90.setTransform(-16.625,-27.075);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgTA2IgBgCQgDgXAAgaQAAgdALgTIAMgPIAAgBIABABIAMAPQALATAAAdQAAAagDAXIgBACIgUAIgAgLgnQgIASAAAYQAAAUADAcIAQAGIARgGQADgXAAgZQAAgYgIgSQgFgLgHgGQgGAGgFALg");
	this.shape_91.setTransform(-16.625,-24.875);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgMAMIAAgBIgFgWIARAJIASgJIgFAWIAAABgAgIAIIASAAIADgMIgNAFIgLgFg");
	this.shape_92.setTransform(-16.625,-16.975);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgQAHIAAgBIgEgVIAUAJIAVgJIgEAVIAAABIgRAJgAgMAFIAMAGIAOgGIACgNIgQAGIgPgGg");
	this.shape_93.setTransform(-16.625,-18.425);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0.7,-12.25,1,1,0,0,0,29.6,36.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("Ag8BIIgBgMIAAh4IABgHQAAgDACgDQADgGAOAAIAtAAQATAAATAOQAIAHAGALQAGANAAANQAAAOgGALQgGAMgIAGQgTAOgTAAIgaAAIgBAgQAAADgCADQgDAGgOAAQgPAAgDgIgAgWgCIAaAAQAHAAAGgEQAGgFAAgKQAAgKgGgEQgGgFgHAAIgaAAg");
	this.shape_94.setTransform(14.425,37.625);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgeBKQgOgIgHgKQgPgTgCgWIgBgMIAAhAIAAgGIAAgCIACgFQACgEAEgBQAEgCAHABQAHgBAEACQAEABACAEQACAGAAAHIAABAIABAMQACAGAEAIQADAGAHAEQAGAEAJAAQAPAAAIgMQAEgHADgJIABgMIAAhBQAAgJACgDQACgDAEgCQAEgCAHABQAGgBADACIAHACQACACAAADQABAEAAAHIAABMQgDAXgPASQgHAMgPAGQgOAIgQgBQgQABgOgIg");
	this.shape_95.setTransform(-0.55,37.75);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgSBQQgIgCgHgFQgMgHgEgGIgCgCQgGgIAAgFQAAgFAJgKQAFgFAHAAQAGAAALALQADAEAGADQAFADAFAAQATAAAAgQQAAgFgFgEQgGgDgIgBIgRgFIgSgIQgHgEgHgKQgFgKAAgOQAAgTAOgOQAOgOAZAAQAMAAALADQAMAEADADIAFAEQAHAHAAAEQAAAEgFAIQgIALgHAAQgFAAgHgFIgCgCIgEgDQgEgDgHAAQgGAAgFAEQgFADAAAGQAAAGAGAEQAEADAJACIASAEIASAGQAIAFAGAIQAFAKAAAOQAAAOgFALQgGALgJAGQgTALgTAAQgIAAgKgCg");
	this.shape_96.setTransform(-14.825,37.625);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AALATIgDgHIgPAAIgDAHIgLAAIARglIAJAAIARAlgAgEAEIAJAAIgFgMg");
	this.shape_97.setTransform(15.125,24.55);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAGATIgIgOIgEAAIAAAOIgLAAIAAglIALAAIAAAPIAFAAIAIgPIALAAIgMASIAMATg");
	this.shape_98.setTransform(11.225,24.55);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAIATIAAgPIgPAAIAAAPIgKAAIAAglIAKAAIAAAPIAPAAIAAgPIAKAAIAAAlg");
	this.shape_99.setTransform(6.8,24.55);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AALATIgDgHIgPAAIgDAHIgLAAIAQglIAKAAIARAlgAgEAEIAIAAIgEgMg");
	this.shape_100.setTransform(2.35,24.55);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgEATIAAgdIgMAAIAAgIIAhAAIAAAIIgLAAIAAAdg");
	this.shape_101.setTransform(-1.5,24.55);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAHATIAAgPIgNAAIAAAPIgLAAIAAglIALAAIAAAPIANAAIAAgPIALAAIAAAlg");
	this.shape_102.setTransform(-5.5,24.55);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgKARQgEgCgEgFQgCgFAAgFQAAgEACgFQAEgFAEgCQAGgDAEAAQAGAAAFADQAFACADAFQACAEAAAFQAAAGgCAEQgDAFgFACQgFADgGAAQgEAAgGgDgAgEgJIgEAFIgBAEIABAGIAEADIAEACIAFgCQADgBABgCQACgCAAgEQAAgCgCgCQgBgDgDgCIgFgBIgEABg");
	this.shape_103.setTransform(-10,24.55);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgEAVIAAgFQgKAAgFgEQgFgEAAgIQAAgGAFgFQAEgEALgBIAAgEIAJAAIAAAEQAKABAEAEQAGAFAAAGQAAAHgGAFQgFAEgJAAIAAAFgAAFAIQAFgBACgBQACgCAAgEQAAgCgCgDQgCgCgFgBgAgLgFQgCACAAADQAAAEACACQACACAFAAIAAgQQgGABgBACg");
	this.shape_104.setTransform(-14.875,24.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.instance},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-49,59.2,94.9);


(lib.Анимация5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FA860A").s().p("AlDoGIKHAAIqHQNg");
	this.shape.setTransform(-27.225,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA860A").s().p("ApTAnIAAhNISnAAIhTBNg");
	this.shape_1.setTransform(0,-47.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FA860A").s().p("AnkAnIAAhNIPJAAIhTBNg");
	this.shape_2.setTransform(-11.1,-27.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FA860A").s().p("Al1AnIAAhNILrAAIhTBNg");
	this.shape_3.setTransform(-22.2,-6.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FA860A").s().p("AkGAnIAAhNIINAAIhSBNg");
	this.shape_4.setTransform(-33.3,14.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FA860A").s().p("AiXAmIAAhLIEvAAIhSBLg");
	this.shape_5.setTransform(-44.375,35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FA860A").s().p("AgogmIBRAAIhRBNg");
	this.shape_6.setTransform(-55.475,55.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FA860A").s().p("ApTAnIAAhNISnAAIAABNg");
	this.shape_7.setTransform(-0.025,-55.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FA860A").s().p("ApTAmIAAhLISnAAIAABLg");
	this.shape_8.setTransform(-0.025,-34.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FA860A").s().p("ApTAnIAAhNISnAAIAABNg");
	this.shape_9.setTransform(-0.025,-14.2);

	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(0,6.6,1,1,0,0,0,59.6,3.9);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(0,27.35,1,1,0,0,0,59.6,3.9);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(0,48.05,1,1,0,0,0,59.6,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-59.5,119.2,119.1);


(lib.Анимация4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FA860A").s().p("AlDoGIKHAAIqHQNg");
	this.shape.setTransform(-27.225,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA860A").s().p("ApTAnIAAhNISnAAIhTBNg");
	this.shape_1.setTransform(0,-47.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FA860A").s().p("AnkAnIAAhNIPJAAIhTBNg");
	this.shape_2.setTransform(-11.1,-27.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FA860A").s().p("Al1AnIAAhNILrAAIhTBNg");
	this.shape_3.setTransform(-22.2,-6.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FA860A").s().p("AkGAnIAAhNIINAAIhSBNg");
	this.shape_4.setTransform(-33.3,14.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FA860A").s().p("AiXAmIAAhLIEvAAIhSBLg");
	this.shape_5.setTransform(-44.375,35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FA860A").s().p("AgogmIBRAAIhRBNg");
	this.shape_6.setTransform(-55.475,55.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FA860A").s().p("ApTAnIAAhNISnAAIAABNg");
	this.shape_7.setTransform(-0.025,-55.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FA860A").s().p("ApTAmIAAhLISnAAIAABLg");
	this.shape_8.setTransform(-0.025,-34.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FA860A").s().p("ApTAnIAAhNISnAAIAABNg");
	this.shape_9.setTransform(-0.025,-14.2);

	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(0,6.6,1,1,0,0,0,59.6,3.9);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(0,27.35,1,1,0,0,0,59.6,3.9);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(0,48.05,1,1,0,0,0,59.6,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-59.5,119.2,119.1);


// stage content:
(lib.banner_620x240_we_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sup_logo
	this.instance = new lib.Анимация19("synched",0);
	this.instance.setTransform(559.3,147.3);

	this.instance_1 = new lib.Анимация20("synched",0);
	this.instance_1.setTransform(564.3,147.3);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Анимация15("synched",0);
	this.instance_2.setTransform(559.3,147.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},119).to({state:[{t:this.instance_2}]},120).to({state:[{t:this.instance_2}]},60).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:564.3,alpha:0},119).wait(241));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(239).to({_off:false},0).to({alpha:0.9883},60).wait(61));

	// zsd_logo
	this.instance_3 = new lib.Анимация17("synched",0);
	this.instance_3.setTransform(197,179.2);

	this.instance_4 = new lib.Анимация18("synched",0);
	this.instance_4.setTransform(197,179.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},119).to({state:[{t:this.instance_4}]},180).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},119).to({_off:true,alpha:1},180).wait(61));

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADAMIAAgLIgFAAIAAALIgEAAIAAgXIAEAAIAAAKIAFAAIAAgKIAEAAIAAAXg");
	this.shape.setTransform(77.15,191.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAEAPIAAgRIgGARIgEAAIAAgYIAEAAIgBASIAGgSIAEAAIAAAYgAgDgOIACAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIADAAQgBAEgEAAQgDAAAAgEg");
	this.shape_1.setTransform(75.325,191.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADAMIgBgGIgDAAIgCAGIgEAAIAGgXIADAAIAGAXgAgBADIADAAIgCgKg");
	this.shape_2.setTransform(73.6,191.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAJIACgBQABgBAAgIIAAgKIAMAAIAAAXIgFAAIAAgUIgDAAIAAAHQAAAKgDACIgDACg");
	this.shape_3.setTransform(71.8,191.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADAMIAAgLIgFAAIAAALIgEAAIAAgXIAEAAIAAAKIAFAAIAAgKIAEAAIAAAXg");
	this.shape_4.setTransform(70.15,191.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAAQAAgMAHAAQAIAAAAAMQAAANgIAAQgHAAAAgNgAgCAAQAAAJACAAQADAAAAgJQAAgIgDAAQgCAAAAAIg");
	this.shape_5.setTransform(68.375,191.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAADIgFAAIAAAUg");
	this.shape_6.setTransform(66.325,191.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAEAAQAEAAABABQACADAAADQAAACgCACQgCADgCAAIgCAAIAAAJgAgCAAIACAAQACAAAAgEQAAgEgCAAIgCAAg");
	this.shape_7.setTransform(64.85,191.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFANIAAgEIABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIAAgBIgGgQIAEAAIADAMIAAgDIACgJIAEAAIgDALQgBAFgCAEQgBAEgDAAg");
	this.shape_8.setTransform(63.275,191.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAKAAIAAADIgHAAIAAAGIACAAQADAAACABQABACAAADQABAEgCACQgEADgDAAgAgCAJIABAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAIgBgEQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_9.setTransform(61.85,191.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAMIAAgXIAEAAQAEAAABABQACACAAAEQAAADgBABQgDADgCAAIgBAAIAAAJgAgBAAIAAAAQADAAAAgEQAAgEgCAAIgBAAg");
	this.shape_10.setTransform(60.225,191.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAADIgFAAIAAAHIAFAAIAAACIgFAAIAAAIIAFAAIAAADg");
	this.shape_11.setTransform(58.725,191.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgBAMIAAgUIgEAAIAAgDIALAAIAAADIgEAAIAAAUg");
	this.shape_12.setTransform(57.275,191.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAMIAAgXIAJAAIAAADIgFAAIAAAHIAFAAIAAACIgFAAIAAAIIAFAAIAAADg");
	this.shape_13.setTransform(55.925,191.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AADAMIAAgUIgFAAIAAAUIgEAAIAAgXIANAAIAAAXg");
	this.shape_14.setTransform(54.275,191.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDACIAAgDIAHAAIAAADg");
	this.shape_15.setTransform(52.875,191.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgBAMIAAgUIgEAAIAAgDIALAAIAAADIgEAAIAAAUg");
	this.shape_16.setTransform(51.7,191.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADAMIgBgGQgCgFgCAAIAAAAIAAALIgDAAIAAgXIADAAIAAALIAAAAIAEgLIAEAAIgFALQADAAABAFIABAHg");
	this.shape_17.setTransform(50.25,191.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AADAMIAAgLIgFAAIAAALIgEAAIAAgXIAEAAIAAAKIAFAAIAAgKIAEAAIAAAXg");
	this.shape_18.setTransform(48.45,191.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAEAMIgCgGIgDAAIgBAGIgFAAIAGgXIADAAIAGAXgAgBADIADAAIgCgKg");
	this.shape_19.setTransform(46.7,191.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFAAQAAgMAIAAIADABIAAADIgDAAQgEAAAAAIQAAAJAEAAIADAAIAAADIgEABQgHAAAAgNg");
	this.shape_20.setTransform(45.175,191.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ACpBEIAAgIIAFAAIAAhbIgFAAIAAgIIAJgBIACgBIACAAIADgBIAAALQACgEADgDQAEgEADAAQAEAAADADQAEADADAJQAEAMgBAPQAAAWgFAIQgFAJgHAAQgIgBgEgIIAAAeIAFAAIAAAIgADCgfQgDAAgCADQgDAFAAAIIAAATIAAAIQAAAJADAEQACAEADAAQACAAADgEQACgFAAgIIAAgbQAAgJgCgEQgCgDgCAAIgBAAgAj4BEIAAgIIAFAAIAAgdQgBADgDACQgDADgDAAQgKABgDgNQgCgNAAgQQABgoAOAAQACAAAEADQAEADAAAEIAAgZIgGAAIAAgIIAQgCIAAAjQACgFADgCQADgDADAAQAJAAADALQADALAAAQQABArgQAAIgGgDIgFgFIAAAdIAFAAIAAAIgAjpgPIAAAdQAAAPAIAAQADAAABgFIACgKIAAgbQAAgLgCgDQgCgDgDAAQgHAAAAAPgAj+gbQgDAEAAAIIABAjQABAJAFAAQAHAAAAgPIAAgZQAAgTgHAAQgCAAgCADgADhA/QgEgEAAgIQAAgFADgDQAAgBABAAQAAgBAAAAQABAAABgBQAAAAABAAQAAAAABAAQABABAAAAQABAAAAABQAAAAABABQACACAAAEQAAAGgCACIgBABIAAACIACABQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQADgDAAgCIADgPIABgFIgThCIgFAAIAAgIIAWAAIAAAIIgEAAIALAtIAIgtIgEAAIAAgIIARAAIAAAIIgEAAIgQBPQgDALgEAGQgFAEgEAAQgFAAgDgFgACVAkQgCgDAAgFQgBgDADgFQACgEADAAQADAAACAEQADADAAAFQAAAEgCAEQgDAEgDAAQgCAAgDgEgAB7AfIgFAFQgDADgDAAQgFAAgEgEQgEgGAAgIQgBgPAIgGQAIgHAJgDIAAgQQAAgHgFAAQgBAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgCADIABADIAAACIAAABQAAABABAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAEgCABQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgDAAgBgDQgCgCAAgGQAAgFADgEQADgFAEgCQAEgDAEAAQAGAAAFAFQAFAFAAANIAAAsIABAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIAAAHQgDABgDAAQgIgBgCgHgABuAQQgBALAGABQACAAADgDQADgEAAgHIAAgPQgLADgCAOgABMAiQgCgFAAgLIgBgLQgDgHgHABIAAAdIAFAAIAAAHIgVAAIAAgHIAFAAIAAg+IgFAAIAAgIIAVAAIAAAIIgFAAIAAAaQAFABABgDIACgGIAAgLQABgRALAAQADAAAEAEQADAEAAAHQAAAGgBACQgBAAAAABQgBAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQgCgCAAgEIABgEIABgCIAAgBIgCgCIgBABQgCABAAAFQAAAMgBAEQgBAGgEACQAOADgBASIgBAEIAAAEIACADIAEABIAAAHQgDACgEAAQgFgBgDgEgAgbAfQgCADgDACQgEADgDAAQgEAAgFgEQgEgGAAgIQgBgPAJgGQAIgIAJgCIAAgQQAAgHgGAAQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIAAADIABACIAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAADgCACQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgDAAgCgDQgBgCAAgGQAAgFACgEQAEgFADgCQAEgDAFAAQAFAAAFAFQAGAFAAANIAAAsIAAAEQABABAAAAQAAAAABAAQAAABABAAQABAAAAAAIAAAHIgHABQgHAAgCgIgAgoAQQgCALAGABQADAAADgDQADgEAAgHIAAgPQgMADgBAOgAjEAaQgGgNAAgOQAAgPAGgNQAFgNALAAQALAAAGAMQAFANAAAQQAAAQgGAMQgFAMgLAAQgLAAgFgNgAi7gcIgCAPIAAAYIACAPQACAFAFAAQAFAAACgFQACgIAAgHIAAgYQAAgHgCgIQgCgGgFAAQgFAAgCAGgAAUAlIAAgHIAFAAIAAgeIgPAAIAAAeIAFAAIAAAHIgVAAIAAgHIAFAAIAAg+IgFAAIAAgIIAVAAIAAAIIgFAAIAAAZIAPAAIAAgZIgFAAIAAgIIAVAAIAAAIIgFAAIAAA+IAFAAIAAAHgAhZAlIAAgHIAFAAIAAg+QgDAAgDADIgBAFIgBALIAAADIgHAAIAAgeIAqAAIAAAeIgIAAIAAgOIgBgFQgDgDgDAAIAAA+IAEAAIAAAHgAh+AlIAAgHIAFAAIAAgeIgPAAIAAAeIAFAAIAAAHIgVAAIAAgHIAEAAIAAg+IgEAAIAAgIIAVAAIAAAIIgFAAIAAAZIAPAAIAAgZIgFAAIAAgIIAWAAIAAAIIgFAAIAAA+IAFAAIAAAHg");
	this.shape_21.setTransform(63.525,184.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSBBQgbgGgMgTQgNgVAHghQAGgbAZgPQAagPAdAJQAwAOgFAuQgCARgLALQgKAMgNgDQgPgFgDgUIAAggQgSAHgPAOQgQAOgDARQgBAHAPgHQAQgHANgTIADAFQgVAYgUACQgLABACgIQACgQARgPQARgRAUgHQgBgLgHgDQgGgCgHAHIgLgIIAGALQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQgGADgJAOQAAABAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAFgNAHgHIgFgQIAQAIQADgEAFgBQAEgBADACQAJADADANQAUgFAOAIQAGAEgEAHQgDAGgKAFQAJAGgbALIACgHQAOgEAAgCQAAgEgMAEIABgEQAJgCAJgGQAKgHgEgDQgKgIgXAHIgCAeQABATAOAGQAIADAIgJQAJgJADgNQAJgkgjgUQgXgOgcAJQgfAKgIAdQgOAwAhATQAgASAkgYIAJALQgUAMgXAAIgQgBgAgGgXQgGgCACgFQACgGAFACQAFACgCAFQAAAEgDAAIgDAAg");
	this.shape_22.setTransform(28.1013,184.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(360));

	// sup
	this.instance_5 = new lib.Анимация13("synched",0);
	this.instance_5.setTransform(379,120);

	this.instance_6 = new lib.Анимация14("synched",0);
	this.instance_6.setTransform(379,120);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Анимация11("synched",0);
	this.instance_7.setTransform(379,120);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация12("synched",0);
	this.instance_8.setTransform(379,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},119).to({state:[{t:this.instance_7}]},60).to({state:[{t:this.instance_8}]},120).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,alpha:0},119).wait(241));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(179).to({_off:false},0).to({_off:true,alpha:1},120).wait(61));

	// txt_wt
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAzBhIAAg5Ig8AAIgmA5IgeAAIArg+QgVgGgLgRQgLgPAAgXQAAghAVgSQAVgTAkAAIBNAAIAADBgAgkg8QgNAMAAAWQAAAVANALQANALAXAAIAzAAIAAhZIgyAAQgXAAgOAMg");
	this.shape_23.setTransform(160.2,100.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA5BhIAAiUIhyCUIgaAAIAAjBIAcAAIAACUIBxiUIAaAAIAADBg");
	this.shape_24.setTransform(139.475,100.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNBhIAAipIhCAAIAAgYICfAAIAAAYIhDAAIAACpg");
	this.shape_25.setTransform(119.825,100.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABQBhIAAjBIAbAAIAADBgAhqBhIAAjBIAcAAIAABEIA5AAQAiAAARAPQATAOAAAfQAAAggTAQQgVARgjAAgAhOBLIAyAAQAZAAAMgLQANgLgBgVQAAgngxAAIgyAAg");
	this.shape_26.setTransform(97.8,100.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhOBhIAAjBICRAAIAAAYIh2AAIAAA3IA8AAQAiAAASAOQASAOAAAbQAAAcgUAQQgTAPgkAAgAgzBLIA2AAQAYAAAMgJQAMgKAAgRQABgjgxAAIg2AAg");
	this.shape_27.setTransform(74.85,100.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag0BXQgYgOgNgWQgNgYAAgbQAAgbANgXQAOgWAXgNQAZgNAbAAQAdAAAYANQAXANAOAWQANAXAAAbQAAAcgNAXQgNAWgYAOQgXAMgeAAQgcAAgYgMgAglg/QgRAJgKARQgKASAAATQAAAVAKARQAKARARAKQARAJAUAAQAWAAARgJQARgKAJgRQAKgRAAgVQAAgTgKgSQgKgQgQgKQgRgKgWAAQgUAAgRAKg");
	this.shape_28.setTransform(52.225,100.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglBXQgZgOgMgWQgNgWAAgdQAAgbANgXQANgWAYgNQAYgNAbAAQAYAAASAIQATAIANAOIgSASQgWgXggAAQgVAAgRAKQgSAJgKARQgJARAAAUQAAAWAJAQQAKARASAKQARAJAVAAQAgAAAWgWIASARQgOAQgSAGQgTAIgXAAQgcAAgXgMg");
	this.shape_29.setTransform(30.975,100.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA/BqIgBhgIguBNIgfAAIguhKIAABdIhCAAIAAjTIA7AAIBFBwIBDhwIA7AAIABDTg");
	this.shape_30.setTransform(175.775,66.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhYBqIAAjTICtAAIAAA2IhmAAIAAAYIBZAAIAAAzIhZAAIAAAcIBqAAIAAA2g");
	this.shape_31.setTransform(151.225,66.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AA2BqIgOglIhQAAIgPAlIhIAAIBcjTIBGAAIBdDTgAgUASIAoAAIgUg1g");
	this.shape_32.setTransform(127.55,66.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA9B/IAAgqIh5AAIAAAqIhBAAIAAhhIAFAAQATAAAIgXQAHgWACguIADhBIC0AAIAACcIAcAAIAABhgAgVg3QgBAhgEASQgDAUgIAOIBBAAIAAhkIgxAAg");
	this.shape_33.setTransform(101.15,68.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhgBdIAVgyQARAIAOACQAQADAOAAQARAAAKgFQALgFAAgJQABgNgWAAIg4AAIAAgzIAzAAQAJAAAEgDQAFgEAAgGQAAgHgIgEQgIgFgOAAQgMAAgQAEQgPAEgMAGIgVg1QAhgQArAAQAbAAAYAIQAWAHAPAOQAPAPAAATQAAAOgIANQgHALgOAHQASAFAJAOQAKAOAAARQAAATgOAQQgPAPgXAHQgaAIgaAAQguAAgrgTg");
	this.shape_34.setTransform(77.65,66.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag9BhQgbgOgQgZQgPgaAAggQAAgfAPgaQARgaAagNQAcgPAhAAQAiAAAcAPQAaANARAaQAPAaAAAfQAAAggPAaQgQAZgbAOQgcAPgiAAQghAAgcgPgAgXguQgMAIgFALQgHAMAAAPQAAARAHAMQAFAKAMAIQAMAHALgBQANABALgHQAMgIAFgKQAHgMAAgRQAAgPgHgMQgFgLgMgIQgKgGgOAAQgMAAgLAGg");
	this.shape_35.setTransform(55.425,66.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgwBhQgcgOgPgZQgPgZAAghQAAgfAPgaQAPgYAcgPQAbgPAhAAQAeABAZAKQAZAMAPAVIgtAoQgTgZgcAAQgVAAgOAOQgOAPAAAXQAAAZAOAOQAOAOAVAAQAbABAUgZIAtAoQgPAUgZAMQgYAKgfABQgigBgagOg");
	this.shape_36.setTransform(32.175,66.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABJBqIAAjTIBHAAIAADTgAiPBqIAAjTIBHAAIAABBIAsAAQAmAAAWASQAWASAAAhQAAAmgZAUQgYATgqAAgAhIA5IAeAAQALgBAHgGQAHgIAAgLQAAgWgZAAIgeAAg");
	this.shape_37.setTransform(66.325,33.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA+BqIAAhhIgvBOIgeAAIgvhKIAABdIhBAAIAAjTIA7AAIBEBwIBEhwIA7AAIABDTg");
	this.shape_38.setTransform(35.4,33.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(360));

	// orange
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF8300").s().p("A3qSwMAAAglfMAvVAAAMglfAlfg");
	this.shape_39.setTransform(151.5,120.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(360));

	// run3
	this.instance_9 = new lib.Анимация8("synched",0);
	this.instance_9.setTransform(303.5,120.5);
	this.instance_9.alpha = 0;

	this.instance_10 = new lib.Анимация9("synched",0);
	this.instance_10.setTransform(303.5,120.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,alpha:1},119).wait(241));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:false},119).to({startPosition:0},60).to({alpha:0},60).wait(60).to({y:121},0).wait(61));

	// velo_3
	this.instance_11 = new lib.Анимация6("synched",0);
	this.instance_11.setTransform(440,121);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.Анимация7("synched",0);
	this.instance_12.setTransform(440,121);

	this.instance_13 = new lib.Анимация10("synched",0);
	this.instance_13.setTransform(440,121);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},59).to({state:[{t:this.instance_12}]},60).to({state:[{t:this.instance_13}]},60).to({state:[{t:this.instance_13}]},60).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).to({_off:true,alpha:1},60).wait(241));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(179).to({_off:false},0).to({alpha:0},60).wait(121));

	// Слой 1
	this.instance_14 = new lib.Анимация22("synched",0);
	this.instance_14.setTransform(559.8,181);
	this.instance_14.alpha = 0;

	this.instance_15 = new lib.Анимация23("synched",0);
	this.instance_15.setTransform(559.8,181);

	this.instance_16 = new lib.Анимация21("synched",0);
	this.instance_16.setTransform(559.8,181);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},59).to({state:[{t:this.instance_16}]},240).to({state:[{t:this.instance_16}]},60).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true,alpha:1},59).wait(301));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(299).to({_off:false},0).to({alpha:0},60).wait(1));

	// Слой 7
	this.instance_17 = new lib.Анимация4("synched",0);
	this.instance_17.setTransform(560.4,60.05);
	this.instance_17.alpha = 0;

	this.instance_18 = new lib.Анимация5("synched",0);
	this.instance_18.setTransform(560.4,60.05);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true,alpha:1},59).wait(301));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:false},59).wait(240).to({startPosition:0},0).to({alpha:0},60).wait(1));

	// bg
	this.instance_19 = new lib.ClipGroup_4();
	this.instance_19.setTransform(310.05,119.95,1,1,0,0,0,416.9,288.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(59).to({x:311.05},0).wait(301));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(203.2,-48.9,524.7,457.79999999999995);
// library properties:
lib.properties = {
	id: '3E9C7C183A3EAD47A2DB83B3296E47FC',
	width: 620,
	height: 240,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"//avatars.mds.yandex.net/get-adfox-content/2774030/220225_adfox_1141210_5052361_images_New1Click_atlas_1.png/optimize.webp", id:"New1Click_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3E9C7C183A3EAD47A2DB83B3296E47FC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;