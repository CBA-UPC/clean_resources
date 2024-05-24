	'use strict';
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? : 

;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(function ($) {
    "use strict";
    var pluginName = "tinyscrollbar",
        defaults = {
            axis: 'y',
            wheel: true,
            wheelSpeed: 40,
            wheelLock: true,
            touchLock: true,
            trackSize: false,
            thumbSize: false,
            thumbSizeMin: 20,
            highlight:false,//是否有高亮
            once:true//是否首次调用
        };


    function Plugin($container, options) {
        /**
         * The options of the carousel extend with the defaults.
         *
         * @property options
         * @type Object
         */
        this.options = $.extend({}, defaults, options);

        /**
         * @property _defaults
         * @type Object
         * @private
         * @default defaults
         */
        this._defaults = defaults;

        /**
         * @property _name
         * @type String
         * @private
         * @final
         * @default 'tinyscrollbar'
         */
        this._name = pluginName;

        var self = this,
            $viewport = $container.find(".viewport"),
            $overview = $container.find(".overview"),
            $scrollbar = $container.find(".scrollbar"),
            $track = $scrollbar.find(".track"),
            $thumb = $scrollbar.find(".thumb"),
            $liCur =parseInt($overview.find("ul li.cur").index()),//20200401
            $ulid = $overview.find("li.cur").parents(".main02").index(".main02"),
            $liLeng = $overview.find("ul li").length,//20200326
            $curHide=$viewport.find(".hide"),
            $hideHeight = $overview.siblings(".hide").outerHeight(true),
            $liHeight = $overview.find("ul li").outerHeight(true),//20200401
            $curJHeight,//当前cur距离滚动条顶部的距离  //20200401
            hasTouchEvents = "ontouchstart" in document.documentElement,
            wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
        document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
        "DOMMouseScroll" // let's assume that remaining browsers are older Firefox
        ,
            isHorizontal = this.options.axis === 'x',
            sizeLabel = isHorizontal ? "width" : "height",
            posiLabel = isHorizontal ? "left" : "top",
            highlight = this.options.highlight ? true : false,//高亮
            once = this.options.once ? true : false,//首次调用
            mousePosition = 0;
            if(highlight){
                $curJHeight= $overview.find("ul li.cur").offset().top-$overview.offset().top+$liHeight;
            }

            if($ulid=="1"){
            	$liCur=$overview.find(".main02").eq(1).find("li").length+$liCur;
            	
           	 }
            
 			  if($overview.find("ul li.cur").length>0 && $(".playingVideo .video_right .module .left").length>0){
 			  	
            	 $curJHeight=$overview.find("ul li.cur").offset().top-$(".playingVideo .video_right .module .left").offset().top;//当前cur距离滚动条顶部的距离 770
          	 }
 			 
 			  if($(".video_right #tabNav").length>0){
 			  	$curJHeight=$curJHeight-45;
 			  }//tabNav存在时删除tabNav的高度
        /**
         * The position of the content relative to the viewport.
         *
         * @property contentPosition
         * @type Number
         */
        this.contentPosition = 0;
        
        /**
         * The height or width of the viewport.
         *
         * @property viewportSize
         * @type Number
         */
        this.viewportSize = 0;

        /**
         * The height or width of the content.
         *
         * @property contentSize
         * @type Number
         */
        this.contentSize = 0;

        /**
         * The ratio of the content size relative to the viewport size.
         *
         * @property contentRatio
         * @type Number
         */
        this.contentRatio = 0;

        /**
         * The height or width of the content.
         *
         * @property trackSize
         * @type Number
         */
        this.trackSize = 0;

        /**
         * The size of the track relative to the size of the content.
         *
         * @property trackRatio
         * @type Number
         */
        this.trackRatio = 0;

        /**
         * The height or width of the thumb.
         *
         * @property thumbSize
         * @type Number
         */
        this.thumbSize = 0;

        /**
         * The position of the thumb relative to the track.
         *
         * @property thumbPosition
         * @type Number
         */
        this.thumbPosition = 0;

        /**
         * Will be true if there is content to scroll.
         *
         * @property hasContentToSroll
         * @type Boolean
         */
        this.hasContentToSroll = false;

        /**
         * @method _initialize
         * @private
         */
        function _initialize() {
            _setEvents();
            self.update();
            return self;
        }
        /**
         * You can use the update method to adjust the scrollbar to new content or to move the scrollbar to a certain point.
         *
         * @method update
         * @chainable
         * @param {Number|String} [scrollTo] Number in pixels or the values "relative" or "bottom". If you dont specify a parameter it will default to top
         */
        this.update = function (scrollTo) {
          
            //首次加载li.cur滚动至可视区域的中间,切换标签后滚动条滚动为0
            if(typeof(scrollTo) =="undefined" && highlight && once){//首次加载，有高亮
                //点击切换标签之后重新获取当前.cur距离顶部的距离,以及新的长度  20200401
                $curJHeight=$overview.find("ul li.cur").offset().top-$overview.offset().top+$liHeight;
                $liLeng = $overview.find("ul li").length;
            
            }else{//再次调用
                 once=false;
                if($overview.find("ul li").hasClass("cur")){//有高亮
                    highlight=true;
                    $curJHeight=$overview.find("ul li.cur").offset().top-$overview.offset().top+$liHeight;
                    $liLeng = $overview.find("ul li").length;
                }else{
                    highlight=false;//无高亮
                }

            }
            
            


            var sizeLabelCap = sizeLabel.charAt(0).toUpperCase() + sizeLabel.slice(1).toLowerCase();
            this.viewportSize = $viewport[0]['offset' + sizeLabelCap];//viewport可视高度
            this.contentSize = $overview[0]['scroll' + sizeLabelCap];//overview滚动内容高度
            this.contentRatio = this.viewportSize / this.contentSize;
            this.trackSize = this.options.trackSize || this.viewportSize;
            this.thumbSize = Math.min(this.trackSize, Math.max(this.options.thumbSizeMin, this.options.thumbSize || this.trackSize * this.contentRatio));
            this.trackRatio = (this.contentSize - this.viewportSize) / (this.trackSize - this.thumbSize);
            this.hasContentToSroll = this.contentRatio < 1,
                $scrollbar.toggleClass("disable", !this.hasContentToSroll);

            switch (scrollTo) {//计算滚动时top的初始值，默认执行第三个
                case "bottom":
                    this.contentPosition = Math.max(this.contentSize - this.viewportSize, 0);
                    break;

                case "relative":
                    this.contentPosition = Math.min(Math.max(this.contentSize - this.viewportSize, 0), Math.max(0, this.contentPosition));
                    break;

                default:
                    if(once){
                        if( $curJHeight < this.viewportSize/2+$liHeight/2 ){//前半屏可视高度
                            this.contentPosition = parseInt(scrollTo, 10) || 0;

                        }else if( (this.contentSize-this.viewportSize/2) < $curJHeight  && $curJHeight  <= this.contentSize){//后半屏可视高度
                            this.contentPosition = parseInt(scrollTo, 10) || (this.contentSize-this.viewportSize );
                        }else{
                            this.contentPosition = parseInt(scrollTo, 10) || ($curJHeight- (this.viewportSize/2)-$liHeight/2);
                        }
                    }else{
                        this.contentPosition = parseInt(scrollTo, 10) || 0;
                    }



            }
            this.thumbPosition = this.contentPosition / this.trackRatio;

            _setCss();

            return self;



        };

        /**
         * @method _setCss
         * @private
         */
        function _setCss() {
            $thumb.css(posiLabel, self.thumbPosition);
            $overview.css(posiLabel, -self.contentPosition);
            $scrollbar.css(sizeLabel, self.trackSize);
            $track
         */
        function _setEvents() {
           if (1 === event.touches.length) {
    _start(event.touches[0]);
                    }
                };
            }
            $thumb.bind("mousedown", function (event) {
                event.stopPropagation();
                _start(event);
            });
            $track.bind("mousedown", function (event) {
                _start(event, true);
            });


// 2019 7.15

            $overview.css(posiLabel, -self.contentPosition);

            0].addEventListener(wheelEvent, _wheel, false);
            } else if (self.options.whthod _isAtBegin
         * @private
         */
        function _isAtBegin() {
            return self.contentPosition > 0;
        }

        /**
         * @method _isAtEnd
         * @private
         */
        function _isAtEnd() {
            return self.contentPosition <= self.contentSize - self.viewportSize - 5;
        }

        /**
         * @method _start
         * @private
         */
        function _start(event, gotoMouse) {
            if (self.hasContentToSroll) {
                $("body").addClass("noSelect");

                mousePosition = gotoMouse ? $thumb.offset()[posiLabel] : isHorizontal ? event.pageX : event.pageY;

                if (hasTouchEvents) {
                    document.ontouchmove = function (event) {
                        if (self.options.touchLock || _isAtBegin() && _isAtEnd()) {
                            event.preventDefault();
                        }
                        event.touches[0][pluginName + "Touch"] = 1;

                        _drag(event.touches[0]);
                    };
                    document.ontouchend = _end;
                }

                $(document).bind("mousemove", _drag);//鼠标移动
                $(document).bind("mouseup", _end);//鼠标松开
                $thumb.bind("mouseup", _end);
                $track.bind("mouseup", _end);

                _drag(event);
            }
        }

        /**
         * @method _wheel
         * @private
         */
        var scrollAnima = true;//滚动条滚动
		var scrollAnima01 = true;
		var scrollAnima02 = true;
        function _wheel(event) {

            if (self.hasContentToSroll) {
                // Trying to make sense of all the different wheel event implementations..
                //
                var evntObj = event || window.event,
                    wheelDelta = -(evntObj.deltaY || evntObj.detail || -1 / 1 * evntObj.wheelDelta) / 100,
                    multiply = evntObj.deltaMode === 1 ? self.options.wheelSpeed : 1;//判断滚动方向，1向上，-1向下

                self.contentPosition -= wheelDelta * multiply * self.options.wheelSpeed;
                self.contentPosition = Math.min(self.contentSize - self.viewportSize, Math.max(0, self.contentPosition));
                self.thumbPosition = self.contentPosition / self.trackRatio;

              
                /**
                 * The move event will trigger when the carousel slides to a new slide.
                 *
                 * @event move
                 */
                $container.trigger("move");

                $thumb.css(posiLabel, self.thumbPosition);
                $overview.css(posiLabel, -self.contentPosition);

                if (self.options.wheelLock || _isAtBegin() && _isAtEnd()) {
                    evntObj = $.event.fix(evntObj);
                    evntObj.preventDefault();
                }
                //自定义20190702
                if(highlight){
					if(wheelDelta < 0){//向下
                        if(scrollAnima){
    
                            if( $curJHeight <= self.contentPosition){
                                scrollAnima = false;
                                if(scrollAnima01){$curHide.stop(true,false).animate({"top":0},350); scrollAnima01=false;scrollAnima02=true;}
                               	//console.log("滚下01:show")
                            }else{
                                //console.log("滚下02:hide")
                                if(scrollAnima02){$curHide.stop(false, true).animate({"top":-$hideHeight+"px"},350); scrollAnima01=true; scrollAnima02=false;}
                                scrollAnima=false;
                            }
                        }else{
                            if( ($curJHeight-self.viewportSize-$liHeight) > self.contentPosition){
								//console.log("滚下03:show")
                               	if(scrollAnima01){$curHide.stop(true,false).animate({"top":0},350); scrollAnima01=false;scrollAnima02=true;}
                            } else{
                                //console.log("滚下04:hide");
                                scrollAnima=true;
                            }
                        }
					}else if(wheelDelta > 0){//向上
						if( self.contentPosition < $curJHeight &&  self.contentPosition > ($curJHeight-self.viewportSize-$liHeight)){
							//console.log("滚上01：hide")
                           if(scrollAnima02){ $curHide.stop().animate({"top":-$hideHeight+"px"},350); scrollAnima01=true; scrollAnima02=false;}
						}else{

                            if(self.contentPosition==0){
                                //console.log("滚上02：hide");
                                scrollAnima = false;
                               	if(scrollAnima02){ $curHide.stop().animate({"top":-$hideHeight+"px"},350); scrollAnima01=true;scrollAnima02=false;}
                            }else{
                                //console.log("滚上03：show");
                                if(scrollAnima01){$curHide.stop().animate({"top":0},350); scrollAnima01=false;scrollAnima02=true;}

                            }

						}

					}

                }else{//无高亮
                    if(wheelDelta < 0){//向下
                        if(scrollAnima01){$curHide.stop(true,false).animate({"top":0},350); scrollAnima01=false;scrollAnima02=true;}
                        //提示框一直show
                    }else if(wheelDelta > 0){//向上
                        if(self.contentPosition==0){
                            scrollAnima = false;
                            if(scrollAnima02){ $curHide.stop().animate({"top":-$hideHeight+"px"},350); scrollAnima01=true;scrollAnima02=false;}
                        }else{
                            if(scrollAnima01){$curHide.stop().animate({"top":0},350); scrollAnima01=false;scrollAnima02=true;}
                        }
                    }

                }


            }
        }

        /**
         * @method _drag
         * @private
         */
        function _drag(event) {
            if (self.hasContentToSroll) {
                var mousePositionNew = isHorizontal ? event.pageX : event.pageY,
                    thumbPositionDelta = event[pluginName + "Touch"] ? mousePosition - mousePositionNew : mousePositionNew - mousePosition,//拖拽方向
                    thumbPositionNew = Math.min(self.trackSize - self.thumbSize, Math.max(0, self.thumbPosition + thumbPositionDelta));//拖拽的距离
                self.contentPosition = thumbPositionNew * self.trackRatio;
                $container.trigger("move");
                $thumb.css(posiLabel, thumbPositionNew);
                $overview.css(posiLabel, -self.contentPosition);

            
                //自定义20190702
                if(highlight){//有高亮.cur

                    if(thumbPositionDelta >0){//向下
                        if(scrollAnima){

                            if( $curJHeight <= self.contentPosition){

                                if(scrollAnima01){$curHide.stop(true,false).animate({"top":0},350); scrollAnima01=false;scrollAnima02=true;}
                                //console.log("拖下01:show")
                            }else{
                                //console.log("拖下02:hide")
                                if(scrollAnima02){$curHide.stop(false, true).animate({"top":-$hideHeight+"px"},350); scrollAnima01=true; scrollAnima02=false;}
                                scrollAnima=false;
                            }

                        }else{
                            if( ($curJHeight-self.viewportSize-$liHeight) > self.contentPosition){
                                //console.log("拖下03:show")
                                if(scrollAnima01){$curHide.stop(true,false).animate({"top":0},350); scrollAnima01=false;scrollAnima02=true;}
                                scrollAnima=false;
                            } else{
                                //console.log("拖下04:hide")
                                scrollAnima=true;
                            }
                        }

                    }else if(thumbPositionDelta < 0){//向上

                        if( self.contentPosition < $curJHeight &&  self.contentPosition > ($curJHeight-self.viewportSize-$liHeight) ){
                            //console.log("拖上01：hide")
                            if(scrollAnima02){ $curHide.stop().animate({"top":-$hideHeight+"px"},350);scrollAnima01=true;scrollAnima02=false;}
                        }else{

                            if(self.contentPosition==0){//20200326add
                                //console.log("拖上02：hide");
                                //scrollAnima = false;
                                if(scrollAnima02){
                                    $curHide.stop().animate({"top":-$hideHeight+"px"},350);scrollAnima01=true;scrollAnima02=false;}
                            }else{
                                //console.log("拖上03：show");
                                if(scrollAnima01){$curHide.stop().animate({"top":0},350); scrollAnima01=false;scrollAnima02=true;}
                            }
                        }
                    }




                }else{
                    if(thumbPositionDelta >0){//向下
                        if(scrollAnima01){$curHide.stop(true,false).animate({"top":0},350); scrollAnima01=false;scrollAnima02=true;}
                        //提示框一直show
                    }else if(thumbPositionDelta < 0){//向上
                        if(self.contentPosition==0){
                            scrollAnima = false;
                            if(scrollAnima02){ $curHide.stop().animate({"top":-$hideHeight+"px"},350); scrollAnima01=true;scrollAnima02=false;}
                        }else{
                            if(scrollAnima01){$curHide.stop().animate({"top":0},350); scrollAnima01=false;scrollAnima02=true;}
                        }
                    }

                }

            }
        }

        /**
         * @method _end
         * @private
         */
        function _end() {
            self.thumbPosition = parseInt($thumb.css(posiLabel), 10) || 0;
            $("body").removeClass("noSelect");
            $(document).unbind("mousemove", _drag);
            $(document).unbind("mouseup", _end);
            $thumb.unbind("mouseup", _end);
            $track.unbind("mouseup", _end);
            document.ontouchmove = document.ontouchend = null;

        }

        return _initialize();
    }

    /**
    * @class tinyscrollbar
    * @constructor
    * @param {Object} options
        @param {String} [options.axis='y'] Vertical or horizontal scroller? ( x || y ).
        @param {Boolean} [options.wheel=true] Enable or disable the mousewheel.
        @param {Boolean} [options.wheelSpeed=40] How many pixels must the mouswheel scroll at a time.
        @param {Boolean} [options.wheelLock=true] Lock default window wheel scrolling when there is no more content to or a fixed number.
        @param {Boolean|Number} [options.thumbSize=false] Set the size of the thumb to auto(false) or a fixed number
        @param {Boolean} [options.thumbSizeMin=20] Minimum thumb size.
        @param {Boolean} [options.highlight=false] Fixed current highlight.
    */
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin($(this), options));
            }
        });
    };
});