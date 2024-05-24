
    CamsWidgetScript = function () {
      var that = this;
      that.debug = false;

      that.ln = function () {
        var e = new Error();
        if (!e.stack) try {
          // IE requires the Error to actually be throw or else the Error's 'stack'
          // property is undefined.
          throw e;
        } catch (e) {
          if (!e.stack) {
            return 0; // IE < 10, likely
          }
        }
        var stack = e.stack.toString().split(/\r\n|\n/);
        // We want our caller's frame. It's index into |stack| depends on the
        // browser and browser version, so we need to search for the second frame:
        var frameRE = /:(\d+):(?:\d+)[^\d]*$/;
        do {
          var frame = stack.shift();
        } while (!frameRE.exec(frame) && stack.length);
        return parseInt(frameRE.exec(stack.shift())[1], 10) + 4;
      }

      that.log = 
      that.getCSSUnit = function (string) {
        var unit = string.replace(parseFloat(string), '');
        return unit.length > 3 ? 'calc' : unit;
      }

      that.isUnitType = 
      that.serialize = function (obj) {
        var str = [];
        for (var p in obj) {
          if (obj.hasOwnProperty(p) && obj[p] !== null) {
            if (typeof obj[p].join === 'function') {
              str.push((encodeURIComponent(p) + "=" + encodeURIComponent(obj[p].join(','))).split('%2C').join(','));
            } else if (typeof obj[p] === 'object') {
              str.push((encodeURIComponent(p) + "=" + encodeURIComponent(JSON.stringify(obj[p]))).split('%2C').join(','));
            } else {
              str.push((encodeURIComponent(p) + "=" + encodeURIComponent(obj[p])).split('%2C').join(','));
            }
          }
        }

        return str.join("&");
      };

      that.setHeight = function () {
        var query = '//www.cbmiocw.com/?' + that.serialize(that.cwSettings);

        if (that.lastQuery !== query) {
          that.lastQuery = query;
          that.iframe.src = query;
        }

        var number = that.cwSettings.number;
        var cols = typeof that.cwSettings.cols !== 'undefined' ? that.cwSettings.cols : '';
        var rows = typeof that.cwSettings.rows !== 'undefined' ? that.cwSettings.rows : (typeof cols !== 'object'
          ? Math.floor(number / cols) : '');
        that.log(that.ln(), ['cols', cols, 'rows', rows]);
        var verticalSpace = typeof that.cwSettings.verticalSpace !== 'undefined'
          ? (that.cwSettings.verticalSpace === '0' ? '0px' : that.cwSettings.verticalSpace) : '10px';
        var horizontalSpace = typeof that.cwSettings.horizontalSpace !== 'undefined'
          ? (that.cwSettings.horizontalSpace === '0' ? '0px' : that.cwSettings.horizontalSpace) : '10px';
        var ratio = parseFloat(typeof that.cwSettings.ratio !== 'undefined' && parseFloat(that.cwSettings.ratio) > 0
          ? parseFloat(that.cwSettings.ratio) : 4 / 3);
        var thumbsWidth = typeof that.cwSettings.thumbsWidth !== 'undefined' ? that.cwSettings.thumbsWidth : '';
        var thumbsHeight = typeof that.cwSettings.thumbsHeight !== 'undefined' ? that.cwSettings.thumbsHeight : '';
        var width = typeof that.cwSettings.iframeWidth !== 'undefined' && that.cwSettings.iframeWidth !== ''
          ? that.cwSettings.iframeWidth : '100%';
        var height = typeof that.cwSettings.iframeHeight !== 'undefined' && that.cwSettings.iframeHeight !== ''
          ? that.cwSettings.iframeHeight : '';
        var fontSize = typeof that.cwSettings.fontSize !== 'undefined' && that.cwSettings.fontSize !== ''
          ? that.cwSettings.fontSize : '12px';
        var infoTopBarHeight = typeof that.cwSettings.infoTopPos !== 'undefined'
          && that.cwSettings.infoTopPos === 'outside' ? that.cwSettings.infoTopHeight : '0px';
        var infoBottomBarHeight = typeof that.cwSettings.infoBottomPos !== 'undefined'
          && that.cwSettings.infoBottomPos === 'outside' ? that.cwSettings.infoBottomHeight : '0px';
        var cardsBorderTop = typeof that.cwSettings.cardsBorderTop !== 'undefined'
          && that.cwSettings.cardsBorderTop !== '' ? that.cwSettings.cardsBorderTop : '0px';
        var thumbsBorderTop = typeof that.cwSettings.thumbsBorderTop !== 'undefined'
          && that.cwSettings.thumbsBorderTop !== '' ? that.cwSettings.thumbsBorderTop : '0px';
        var cardsBorderLeft = typeof that.cwSettings.cardsBorderLeft !== 'undefined'
          && that.cwSettings.cardsBorderLeft !== '' ? that.cwSettings.cardsBorderLeft : '0px';
        var thumbsBorderLeft = typeof that.cwSettings.thumbsBorderLeft !== 'undefined'
          && that.cwSettings.thumbsBorderLeft !== '' ? that.cwSettings.thumbsBorderLeft : '0px';
        var cardsBorderRight = typeof that.cwSettings.cardsBorderRight !== 'undefined'
          && that.cwSettings.cardsBorderRight !== '' ? that.cwSettings.cardsBorderRight : '0px';
        var thumbsBorderRight = typeof that.cwSettings.thumbsBorderRight !== 'undefined'
          && that.cwSettings.thumbsBorderRight !== '' ? that.cwSettings.thumbsBorderRight : '0px';
        var cardsBorderBottom = typeof that.cwSettings.cardsBorderBottom !== 'undefined'
          && that.cwSettings.cardsBorderBottom !== '' ? that.cwSettings.cardsBorderBottom : '0px';
        var thumbsBorderBottom = typeof that.cwSettings.thumbsBorderBottom !== 'undefined'
          && that.cwSettings.thumbsBorderBottom !== '' ? that.cwSettings.thumbsBorderBottom : '0px';
        var bordersWidth = '(' + cardsBorderLeft + ' + ' + cardsBorderRight + ' + ' + thumbsBorderLeft + ' + ' + thumbsBorderRight + ')';
        var bordersHeight = '(' + cardsBorderTop + ' + '  + cardsBorderBottom + ' + ' + thumbsBorderTop + ' + ' + thumbsBorderBottom + ')';
        var containerWidth = parseInt(that.isUnitType(that.cwSettings.iframeWidth, 'px')
          ? that.cwSettings.iframeWidth : that.div.parentNode.clientWidth, 10);

        if (typeof cols === 'object') {
          var dynamicCols = 1;
          that.log(that.ln(), ['cols is set to responsive']);
          if (thumbsWidth === '' || !that.isUnitType(thumbsWidth, 'px')) {
            that.log(that.ln(), ['thumbsWidth is not set in pixels -> Responsive cols']);
            var colsBreakpoints = cols;
            Object.keys(colsBreakpoints).forEach(function (breakpoint) {
              if (parseInt(breakpoint, 10) < containerWidth) {
                dynamicCols = colsBreakpoints[breakpoint];
              }
            })
          } else {
            that.log(that.ln(), [
              'thumbsWidth is set in pixels -> set dynamicCols to the maximum number of cols in the widtyh available'
            ]);
            dynamicCols = Math.floor((containerWidth + parseInt(horizontalSpace, 10)) / (parseInt(thumbsWidth, 10)
              + parseInt(horizontalSpace, 10)));
          }

          if (dynamicCols > number) {
            dynamicCols = number;
          }

          cols = dynamicCols;
          that.log(that.ln(), ['cols', cols, 'rows', rows]);
          if (typeof rows !== 'object' && rows > Math.floor(number / cols)) {
            that.log(that.ln(), [
              'Too many rows for number of responsive cols',
              'rows', rows,
              'Math.floor(number / cols)', Math.floor(number / cols)
            ]);
            cols = Math.floor(number / rows);
            that.log(that.ln(), ['cols', cols, 'rows', rows]);
          }

          that.log(that.ln(), ['dynamicCols', dynamicCols, 'cols', cols]);
        }

        /**
         * if the number of columns is defined and thumbsWidth and horizontalSpace are defined in pixels BUT iframeWidth
         * isn't defined, set containerWidth to the expected size
         */
        if (that.isUnitType(thumbsWidth, 'px') && that.isUnitType(horizontalSpace, 'px')
          && that.cwSettings.iframeWidth === '' && typeof cols !== 'object' && typeof cols !== 'undefined') {
          that.log(that.ln(), ['Adjust container width based on thumb width']);
          containerWidth = cols * parseInt(thumbsWidth, 10) + (cols - 1) * parseInt(horizontalSpace, 10) + cols
            * parseInt(bordersWidth, 10);
        }

        /**
         * if the number of columns and ratio are defined and thumbsHeight and horizontalSpace are defined in pixels BUT
         * iframeWidth isn't defined, set containerWidth to the expected size
         */
        if (that.isUnitType(thumbsHeight, 'px') && ratio && that.isUnitType(horizontalSpace, 'px')
          && that.cwSettings.iframeWidth === '' && typeof cols !== 'object' && typeof cols !== 'undefined') {
          that.log(that.ln(), ['Adjust container width based on thumb height']);
          containerWidth = cols * parseInt(thumbsHeight, 10) * ratio + (cols - 1) * parseInt(horizontalSpace, 10) + cols
            * parseInt(bordersWidth, 10);
        }

        if (typeof rows === 'object') {
          that.log(that.ln(), ['Responsive rows']);
          var rowsBreakpoints = rows;
          var dynamicRows = 1;

          Object.keys(rowsBreakpoints).forEach(function (breakpoint) {
            if (parseInt(breakpoint, 10) < containerWidth) {
              dynamicRows = rowsBreakpoints[breakpoint];
            }
          })

          if (dynamicRows > Math.floor(number / cols)) {
            that.log(that.ln(), ['Too many rows for number of responsive cols']);
            dynamicRows = Math.floor(number / cols);
          }

          if (dynamicRows === 0) {
            dynamicRows = 1;
          }

          rows = dynamicRows;
          that.log(that.ln(), ['cols', cols, 'rows', rows]);

          that.log(that.ln(), ['dynamicRows', dynamicRows]);
        } else if (rows === '' && cols !== '') {
          that.log(that.ln(), ['cols and rows are still not set']);
          rows = number / cols;
        }

        if (cols === '') {
          that.log(that.ln(), ['cols not defined', cols]);
        }

        if (typeof that.cwSettings.rows !== 'undefined' && parseInt(that.cwSettings.rows, 10)) {
          that.log(that.ln(), ['rows is a set number', that.cwSettings.rows]);
          rows = that.cwSettings.rows;
          that.log(that.ln(), ['cols', cols, 'rows', rows]);
        }

        if (rows * cols > number) {
          that.log(that.ln(), ['too many rows * cols', rows * cols, number, cols, rows]);
          rows = Math.floor(number / cols);
          if (rows === 0) {
            rows = 1;
          }
        }

        if (cols === 0 || rows === 0) {
          that.log(that.ln(), ['rows AND/OR cols set to 0', rows * cols, number, cols, rows]);
          cols = Math.floor(Math.sqrt(number));
          rows = Math.floor(number / cols);
        }

        if (that.isUnitType(infoTopBarHeight, 'em') || parseFloat(infoTopBarHeight) + '' === infoTopBarHeight) {
          that.log(that.ln(), ['create the string to calculate the height of the infoBar']);
          infoTopBarHeight = '(' + parseFloat(infoTopBarHeight) + ' * ' + fontSize + ')';
        }

        if (that.isUnitType(infoBottomBarHeight, 'em') || parseFloat(infoBottomBarHeight) + '' === infoBottomBarHeight) {
          that.log(that.ln(), ['create the string to calculate the height of the infoBar']);
          infoBottomBarHeight = '(' + parseFloat(infoBottomBarHeight) + ' * ' + fontSize + ')';
        }

        if (that.getCSSUnit(thumbsWidth) === that.getCSSUnit(thumbsHeight) && that.getCSSUnit(thumbsWidth) !== 'calc'
          && that.getCSSUnit(thumbsWidth) !== '') {
          that.log(that.ln(), ['thumbsWidth and thumbsHeight define ratio -> generate ratio']);
          ratio = parseInt(thumbsHeight, 10) / parseInt(thumbsWidth, 10);
          that.log(that.ln(), ['generated ratio', ratio]);
        }

        if (ratio) {
          that.log(that.ln(), ['has ratio', ratio]);

          if (thumbsWidth !== '' && thumbsHeight === '') {
            that.log(that.ln(), ['has thumbsWidth but no thumbsHeight -> generate thumbsHeight using ratio']);
            thumbsHeight = '(' + thumbsWidth + ' / ' + ratio + ' + ' + infoTopBarHeight + ' + ' + infoBottomBarHeight + ' + ' + bordersWidth + ')';
          }

          if (thumbsHeight !== '' && thumbsWidth === '') {
            that.log(that.ln(), ['has thumbsHeight but no thumbsWidth -> generate thumbsWidth using ratio']);
            thumbsWidth = '(' + thumbsHeight + ' / ' + ratio + ')';
          }
        } else if (height !== '') {
          that.log(that.ln(), ['has no ratio but has a set height -> generate thumbsHeight']);
          thumbsHeight = '(' + height + ' / ' + rows + ')';
        }

        that.log(that.ln(), ['thumbsHeight', thumbsHeight, 'thumbsWidth', thumbsWidth]);

        if (ratio && (thumbsWidth === '' || !that.isUnitType(thumbsWidth, 'px'))) {
          that.log(that.ln(), ['has ratio and thumbsWidth in pixels or no thumbsWidth:', thumbsWidth]);
          //if the ratio is 0 (auto) and the thumb's width is not set nor set in pixels
          if (height === '') {
            that.log(that.ln(), ['no height -> set height', 'width', width]);
            height = '(((' + width + ' - (' + (cols - 1) + ' * ' + horizontalSpace + ') - (' + cols + ' * '
              + bordersWidth + ')) / ' + cols + ') / ' + ratio + ' * ' + rows + ' + (' + (rows - 1) + ' * ('
              + verticalSpace + ') + (' + rows + ' * ' + bordersHeight + '))';
            that.log(that.ln(), ['height ', height, 'ratio', ratio, 'rows', rows, 'cols', cols]);
          } else if (that.cwSettings.iframeWidth === '') {
            that.log(that.ln(), ['iframeheight is set and not iframeWidth',
              'height:', height,
              'that.cwSettings.ratio', that.cwSettings.ratio,
              'ratio', ratio
            ]);

            if (parseFloat(that.cwSettings.ratio) > 0) {
              that.log(that.ln(), [
                'Enforced ratio -> figure out ideal number of rows for set generate width from height',
                that.cwSettings.ratio
              ]);
              rows = Math.round(cols * ratio);
              that.log(that.ln(), ['cols', cols, 'rows', rows]);

              if (rows * cols > number) {
                rows = Math.floor(number / cols);
              }

              that.log(that.ln(), ['cols', cols, 'rows', rows]);
              width = '(((' + height + ' - (' + (rows - 1) + ' * ' + verticalSpace + ') - (' + rows + ' * '
                + bordersHeight + ')) / ' + rows + ') * ' + ratio + ' * ' + cols + ' + (' + (cols - 1) + ' * ('
                + horizontalSpace + ')) + (' + cols + ' * ' + bordersWidth + '))';
              that.log(that.ln(), ['width', width]);
            } else if (0 && cols > 0) {
              that.log(that.ln(), ['cols', cols, 'rows', rows]);
              width = '(((' + height + ' - (' + (rows - 1) + ' * ' + verticalSpace + ') - (' + rows + ' * '
                + bordersHeight + ')) / ' + rows + ') * ' + ratio * cols + ' + (' + (cols - 1) + ' * ('
                + horizontalSpace + ')) + (' + cols + ' * ' + bordersWidth + '))';
            } else {
              that.log(that.ln(), ['no forced ratio']);
              width = '100%';
            }
          }
        } else {
          that.log(that.ln(), [
            'no ratio OR thumbsWidth is set in pixels',
            'ratio', ratio,
            'thumbsWidth', thumbsWidth,
            'width', width
          ]);

          if (that.cwSettings.iframeWidth === '' && thumbsWidth !== '') {
            that.log(that.ln(), ['no set iframeWidth but thumbWidth is set-> set width']);
            width = '(' + thumbsWidth + ' * ' + cols + ' + (' + horizontalSpace + ' * ' + (cols - 1) + ') + ('
              + bordersWidth + ' * ' + cols + '))';
            that.log(that.ln(), ['width', width]);
          }

          if (that.cwSettings.iframeHeight === '') {
            that.log(that.ln(), ['iframeHeight is not set']);
            if (!ratio) {
              that.log(that.ln(), ['ratio is not set']);
              ratio = 4 / 3;
            }

            if (thumbsHeight === '') {
              that.log(that.ln(), ['thumbsHeight is not set -> set height', 'thumbsHeight', thumbsHeight]);
              height = '(((' + width + ' - (' + (cols - 1) + ' * ' + horizontalSpace + ') - (' + cols + ' * '
                + bordersWidth + ')) / ' + cols + ') / ' + ratio + ' * ' + rows + ' + (' + (rows - 1) + ' * ('
                + verticalSpace + ')) + (' + rows + ' * (' + bordersHeight + ')))';
            } else {
              that.log(that.ln(), ['thumbsHeight is set -> set height', 'thumbsHeight', thumbsHeight]);
              height = '(' + thumbsHeight + ' * ' + rows + ' + ' + (rows - 1) + ' * ' + verticalSpace + ' + ' + rows
                + ' * ' + bordersHeight + ')';
              that.log(that.ln(), ['height ', height]);
            }
          }
        }

        that.div.style.width = 'calc(' + width + ')';
        that.div.style.paddingTop = 'calc(' + height + ')';
        that.iframe.src = query + '#' + cols + ',' + rows;
        that.log(that.ln(), ['DONE', 'width ', width, 'height', height, 'cols', cols, 'rows', rows]);
      };

      that.init = function (cwSettings) {
        var token = 'cw-' + Math.round(Math.random() * 1000000);
        var tokenDiv = document.createElement('div')
        tokenDiv.setAttribute('id', token);
        if (document.currentScript.parentNode !== document.head) {
          document.currentScript.insertAdjacentElement('afterend', tokenDiv);
        } else {
          window.addEventListener('load', function(){
            if (document.body === null) {
              var body = document.createElement('body');
              document.documentElement.appendChild(body);
            }
            document.body.appendChild(tokenDiv);
          });
        }

        that.cwSettings = cwSettings;

        that.div = tokenDiv;

        that.div.style.overflow = 'hidden';
        that.div.style.position = 'relative';
        that.div.style.paddingTop = '200px';
        that.div.style.margin = that.cwSettings.containerAlignment === 'center' ? 'center' : '';
        that.lastQuery = '';
        that.iframe = document.createElement('iframe');
        that.iframe.style.width = '100%';
        that.iframe.style.height = '100%';
        that.iframe.style.position = 'absolute';
        that.iframe.style.top = 0;
        that.iframe.style.left = 0;
        that.iframe.style.border = 0;
        that.iframe.frameborder = 0;
        that.iframe.scrolling = 'no';

        that.div.appendChild(that.iframe);

        that.completeText = 'categories: ' + (typeof that.cwSettings.categories !== 'undefined'
          ? that.cwSettings.categories.join(' ') : '') + ' CONTENT: ';

        window.addEventListener('resize', that.setHeight);

        if (that.cwSettings.categoriesSearch) {
          window.addEventListener('load', that.getKeywords);
        }

        that.lastWidth = 0;
        that.lastHeight = 0;
        that.lastCategories = [];

        that.responsiveInterval = setInterval(function () {
          if (that.lastWidth !== that.div.parentNode.clientWidth || that.cwSettings.categories !== that.lastCategories) {
            that.lastWidth = that.div.parentNode.clientWidth;
            that.lastHeight = that.div.parentNode.clientHeight;
            that.lastCategories = that.cwSettings.categories;
            that.setHeight();
          }
        }, 100)
      };

      that.compileText = function (el) {
        if (el != null && typeof el.childNodes !== 'undefined' && el.childNodes.length) {
          Object.keys(el.childNodes).forEach(function (k) {
            if (el.childNodes[k].nodeName === '#text' && el.childNodes[k].nodeValue.split('\n').join(' ').split('\r')
              .join(' ').split('  ').join(' ').length > 3) {
              that.completeText += ' ' + el.childNodes[k].nodeValue.split('\n').join(' ').split('\r').join(' ')
                .split('  ').join(' ');
            } else if (['script', 'style', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'label', 'textarea', 'head', 'label',
              'blockquote', 'input', 'select', 'nav'].indexOf(el.childNodes[k].nodeName.toLowerCase()) === -1) {
              that.compileText(el.childNodes[k]);
            }
          });
        }
      };

      that.getKeywords = function () {
        that.compileText(document);

        var re = new RegExp('\\b(anal|arabic|asian|athletic|bbw|bigass|bigtits|blonde|blowjob|booty|brunette|caucasian|curvaceous|dance|dark|dyed|ebony|feet|ginger|hairy|hispanic|latina|lovense|masturbation|middle east|milf|muscular|native american|oral|oriental|petite|redhead|romantic|slim|tattoo|teen|toys)\\b', 'gi');

        var m;
        that.keywords = [];
        do {
          m = re.exec(that.completeText);
          if (m) {
            var tag = m[0].toLowerCase();

            if (that.keywords.indexOf(tag) === -1) {
              that.keywords.push(tag);
            }
          }
        } while (m);

        that.keywords.sort();

        that.cwSettings.categories = that.keywords;
      };
    };

    var cws = new CamsWidgetScript();

    cws.init({"skin":"0","verticalSpace":"10px","horizontalSpace":"10px","infoTopLeftContent":"-","infoTopRightContent":"-","infoBottomLeftContent":"name","infoBottomRightContent":"age,gender","infoWritePos":"after","infoPos":"inside","infoBackgroundColor":"rgba(0, 0, 0, .6)","infoTextColor":"#fff","infoHeight":"1.2em","infoTopWritePos":"after","infoTopPos":"inside","infoTopBackgroundColor":"rgba(0, 0, 0, .6)","infoTopTextColor":"#fff","infoTopHeight":"1.2em","infoTopLineHeight":"1.2em","infoBottomWritePos":"after","infoBottomPos":"inside","infoBottomBackgroundColor":"rgba(0, 0, 0, .6)","infoBottomTextColor":"#fff","infoBottomHeight":"1.2em","infoBottomLineHeight":"1.2em","fontFamily":"sans-serif","fontFamilyQuery":"","fontSize":"12px","showOnline":true,"background":"transparent","ratio":1,"targetResponsiveWidth":200,"thumbsWidth":"","thumbsHeight":"","containerAlignment":"center","iframeWidth":"160px","iframeHeight":"120px","cardsBorderTop":"0px","cardsBorderLeft":"0px","cardsBorderRight":"0px","cardsBorderBottom":"0px","cardsBorderRadius":"0px","cardsBorderColor":"rgba(0, 0, 0, 0)","thumbsBorderTop":"0px","thumbsBorderLeft":"0px","thumbsBorderRight":"0px","thumbsBorderBottom":"0px","thumbsBorderRadius":"0px","thumbsBorderColor":"rgba(0, 0, 0, 0)","CTAContent":"","CTABottom":"","CTABackground":"","CTAColor":"","CTABackgroundHover":"","CTAColorHover":"","CTABorderRadius":"","CTAWidth":"","CTAHeight":"","CTAFontSize":"","CTAFontWeight":"","genderStyle":"long","bubblePos":0.75,"desktopsz":60,"tabletsz":60,"mobilesz":60,"desktopy":-1,"tablety":0.75,"mobiley":0.75,"canHide":false,"msg1":"Hey there!","msg2":"I'm live now! Join my room if you want to talk with me","chatCtaText":"JOIN CHAT ROOM","lang":"en","genderColor":"#fff","useFeed":true,"animateFeed":true,"smoothAnimation":true,"animationSpeed":500,"colorFilter":false,"colorFilterStrength":0,"providers":"mfc","refererFile":"script/js.ejs","muted":0,"modelLang":false,"vlm":false,"vlmi":false,"vlmd":"v.vfgta.com","vlmcid":"","isLive":true,"url":"http://www.cbmiocw.com","autoReloadChaturbate":false,"cols":1,"rows":1,"number":1,"categories":[],"genders":"f,ff","generator":"camswidget","token":"d9419e90-5da7-11eb-ad52-abdf3bf2a314","aff_sub2":"PUB_unspecified;BLOC_CamsWidget"});
    