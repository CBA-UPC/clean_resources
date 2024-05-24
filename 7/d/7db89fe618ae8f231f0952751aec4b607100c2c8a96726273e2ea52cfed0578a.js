/**
 * 多语言系统接口
 * @version 当前版本: 1.4.1
 * @description 多语言自适应Playable，所有处理接口管理器
 * @author JingBin.Zhu
 */
var languagesMgr;

(function (languagesMgr) {

    /** 版本号 */
    languagesMgr.version = "1.4.1";

    /** 打印版本信息 */
    var args = [
        '%c %c %c languagesMgr v' + languagesMgr.version + ' %c %c ',
        'background: #6fbf64',
        'background: #4aa23e',
        'color: #ffffff; background: #0f7817;',
        'background: #4aa23e',
        'background: #6fbf64'
    ];
    console.log.apply(console, args);

    /**
     * 获取浏览器链接，查询参数值
     * @method getQueryString
     * @param {string} name 需要查询的参数
     * @returns {string} 查询到的参数值
     */
    languagesMgr.getQueryString = function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r)
            return r[2];
    };

    /** 当前使用语言 */
    Object.defineProperty(languagesMgr, "language", {
        get: function () {
            var urlLang = languagesMgr.getQueryString('lang');
            var language = urlLang ? urlLang : (window.MW_LIVE_PREVIEW_LANGUAGE ? window.MW_LIVE_PREVIEW_LANGUAGE : window.navigator.language);
            return (language + '').toLowerCase();
        },
        enumerable: false,
        configurable: true
    });

    /**
     * 当前兜底语言
     * @private
     */
    languagesMgr._fallbackLocale = "";

    /** 当前兜底语言 */
    Object.defineProperty(languagesMgr, "fallbackLocale", {
        get: function () {
            var language = languagesMgr._fallbackLocale;
            if (!language) {
                var res = languagesMgr.getRes();
                language = languagesMgr._fallbackLocale = (res.fallbackLocale + '').toLowerCase();
            }
            return language;
        },
        enumerable: false,
        configurable: true
    });

    /**
     * 资源接口异常警告
     * @method _notFoundResWarn
     * @returns {void}
     * @private
     */
    languagesMgr._notFoundResWarn = function () {
        if (languagesMgr.language.search("zh") !== -1) {
            console.warn('未找到获取JSON资源接口函数！');
        } else {
            console.warn('The fetch JSON resource interface function was not found!');
        }
    };

    /**
     * 配置中Key异常警告
     * @method _notCfgForKeyWarn
     * @param {string} lang 当前语言
	 * @param {string} key 对应文案，配置中的key
     * @returns {void}
     * @private
     */
    languagesMgr._notCfgForKeyWarn = function (lang, key) {
        if (lang.search("zh") != -1) {
            console.warn('没有对应“' + lang + '”语言配置有误！请检查配置文件中 Key 为 ' + key + ' 的配置。');
        } else {
            console.warn('There is no corresponding "' + lang + '" language configuration error! Please check the configuration file for Key ' + key + '.');
        }
    };

    /**
     * 图片资源URL或Key异常警告
     * @method _notImgForUrlWarn
     * @param {string} lang 当前语言
	 * @param {string} url 当前语言图片资源URL或Key
     * @returns {void}
     * @private
     */
    languagesMgr._notImgForUrlWarn = function (lang, url) {
        if (lang.search("zh") != -1) {
            console.warn('没有兜底语言“' + languagesMgr.fallbackLocale + '”图片！请检查资源' + url + ' 是否存在 或 命名是否正确！');
        } else {
            console.warn('No language "' + languagesMgr.fallbackLocale + '" picture! Please check the resources ' + url + ' exists or naming is correct!');
        }
    };

    /**
     * 配置中无对应语言信息打印
     * @method _notLangCfgInfo
     * @param {string} lang 当前语言
	 * @param {string} _lang 备用语言
     * @returns {void}
     * @private
     */
    languagesMgr._notLangCfgInfo = function (lang, _lang) {
        if (lang.search("zh") !== -1) {
            console.info('没有对应“' + lang + '”语言配置！尝试使用“' + _lang + '”语言配置');
        } else {
            console.info('There is no corresponding "' + lang + '" language configuration! Try to use the "' + _lang + '" language configuration.');
        }
    };

    /**
     * 配置中无对应语言，使用兜底语言信息打印
     * @method _notLangUseFallbackInfo
     * @param {string} lang 当前语言
     * @returns {void}
     * @private
     */
    languagesMgr._notLangUseFallbackInfo = function (lang) {
        if (lang.search("zh") != -1) {
            console.info('没有对应“' + lang + '”语言配置，或配置有误！使用兜底语言“' + languagesMgr.fallbackLocale + '“配置。');
        } else {
            console.info('There is no corresponding "' + lang + '" language configuration, or the configuration is wrong! Use the fallback Locale language configuration "' + languagesMgr.fallbackLocale + '".');
        }
    };

	/**
	 * 获取多语言配置
     * @method getRes
     * @returns {Object} 当前多语言配置
	 */
    languagesMgr.getRes = function () {
        var res;
        if (window["RES"] && RES.getRes) {
            //Egret
            res = RES.getRes("languages_json");
        } else if (window["Laya"] && Laya.loader && Laya.loader.getRes) {
            //Laya
            res = Laya.loader.getRes("resource/config/languages.json");
        } else if (window["game"] && game.cache && game.cache.getJSON) {
            //PlaySmart | Phaser
            res = game.cache.getJSON("languages");
        } else {
            languagesMgr._notFoundResWarn();
        }
        return res;
    };

	/** 
	 * 获取当前使用语言
     * @method getLang
     * @param {srting} lang 指定语言，一版用于调试，如有传值，优先使用该语言
     * @param {boolean} hasLog 是否需要打印日志提示，默认为：false
     * @returns {string} 当前使用语言
	 */
    languagesMgr.getLang = function (lang, hasLog) {
        if (hasLog === void 0) { hasLog = false; }
        var language = lang || languagesMgr.language;
        var res = languagesMgr.getRes();

        if (!res) {
            return;
        }
        var languages = res.languages;
        if (!languages) {
            return;
        }
        var cfg = languages[language];
        if (!cfg) {
            //使用简写语言
            var idx = language.indexOf("-");
            if (idx !== -1) {
                //使用简写语言
                //截取简写语言，如：cn-zh ==> cn
                var _lang = language.slice(0, idx);

                if (hasLog) {
                    languagesMgr._notLangCfgInfo(language, _lang);
                }

                language = _lang;
                cfg = languages[language];
            }
        }
        if (!cfg) {
            if (hasLog) {
                languagesMgr._notLangUseFallbackInfo(language);
            }
            return languagesMgr.fallbackLocale;
        }
        return language;
    };

	/** 
	 * 获取对应语言版本配置
     * @method getLangCfg
	 * @param {string} key 对应文案，配置中的key
     * @param {string} lang 语言
     * @param {boolean} hasLog 是否需要打印日志提示，默认为：false
     * @returns {Object} 对应语言版本配置
	 */
    languagesMgr.getLangCfg = function (key, lang, hasLog) {
        if (hasLog === void 0) { hasLog = false; }
        var res = languagesMgr.getRes();

        if (!res) {
            return;
        }
        var languages = res.languages;
        if (!languages) {
            return;
        }
        var cfg = languages[lang];
        if (!cfg) {
            //使用简写语言
            var idx = lang.indexOf("-");
            if (idx !== -1) {
                //使用简写语言
                //截取简写语言，如：zh-cn ==> zh
                var _lang = lang.slice(0, idx);

                if (hasLog) {
                    languagesMgr._notLangCfgInfo(lang, _lang);
                }

                cfg = languages[_lang];
            }
        }
        if (!cfg) {
            return;
        }
        return cfg[key];
    };

	/** 
	 * 获取当前语言版本配置
     * @method getCfg
	 * @param {string} key 对应文案，配置中的key
     * @param {boolean} hasLog 是否需要打印日志提示，默认为：false
     * @param {srting} lang 指定语言，一版用于调试，如有传值，优先使用该语言
     * @returns {Object} 当前语言版本配置
	 */
    languagesMgr.getCfg = function (key, hasLog, lang) {
        if (hasLog === void 0) { hasLog = fa   }
        var cfg = languagesMgr.getLangCfg(key, _lang, hasLog);

        if (!cfg) {
            //使用兜底语言
            if (hasLog) {
                var language = lang || languagesMgr.language;
                languagesMgr._notLangUseFallbackInfo(language);
            }

            cfg = languagesMgr.getLangCfg(key, languagesMgr.fallbackLocale, hasLog);
        }
        if (!cfg || typeof cfg !== "object") {
            if (hasLog) {
                var language = lang || languagesMgr.language;
                languagesMgr._notCfgForKeyWarn(language, key);
            }
            return;
        }
        return cfg;
    };

    /**
     * 返回指定单个颜色通道值的16进制字符串。
     * @method componentToHex
     * @param {number} color - 要获取的16进制值的颜色通道，范围必须是 0 到 255 之间
     * @returns {string} 长度为 2 个字符的字符串，即 255 = ff，100 = 64
     */
    languagesMgr.componentToHex = function (color) {
        var hex = color.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };

    /**
     * 格式化Hex值
     * @method _formatHex
     * @param {string} hex - 16进制颜色，格式为：rgb | rgba | #rgb | #argb
     * @returns {string} 少位补0，最多位只取前面8位。格式为：#rgb | #argb
     * #faa         -> #000faa
     * #ffaaa       -> #0ffaaa
     * #0fffaaa     -> #00fffaaa
     * #fffaaa000   -> #fffaaa00
     * @private
     */
    languagesMgr._formatHex = function (hex) {
        if (!hex || hex.length <= 0) hex = '#000000';
        if (hex[0] === '#') hex = hex.substr(1, hex.length - 1);

        if (hex.length > 6 && hex.length <= 8) {
            while (hex.length < 8) hex = '0' + hex;
        }
        while (hex.length < 6) hex = '0' + hex;
        var _hex = languagesMgr.componentToHex(languagesMgr._hexTo16(hex.substr(0, 2))) +
            languagesMgr.componentToHex(languagesMgr._hexTo16(hex.substr(2, 2))) +
            languagesMgr.componentToHex(languagesMgr._hexTo16(hex.substr(4, 2)));
        if (hex.length > 6) {
            _hex += languagesMgr.componentToHex(languagesMgr._hexTo16(hex.substr(6, 2)));
        }
        return '#' + _hex.slice(0, Math.min(_hex.length, 8));
    };

    /**
     * 格式化Alpha值
     * @method _formatAlpha
     * @param {number} alpha - 待格式化Alpha值
     * @returns {number} 格式化后的Alpha值，范围：0 ~ 1
     * @private
     */
    languagesMgr._formatAlpha = function (alpha) {
        alpha = alpha || 0;
        if (alpha <= 0) alpha = 0;
        else if (alpha >= 255) {
            alpha = 1;
        } else {
            if (alpha > 1 && alpha < 255) {
                alpha /= 255;
            }
            //保留4位小数
            var square = Math.pow(10, 4);
            alpha = Math.round(alpha * square) / square;
        }
        return alpha;
    };

    /**
     * Hex值转换16进制数值
     * @method _hexTo16
     * @param {string} hex - 待转换Hex值
     * @returns {number} 转换后的Hex值，范围：0 ~ 255
     * @private
     */
    languagesMgr._hexTo16 = function (hex) {
        var v = parseInt(hex, 16);
        // v = isNaN(v) || (v >= 10 && v < 16) ? 255 : v;
        return v || 0;
    };

    /**
     * 转换16进制的字符串为rgba
     * @method _hexToColor
     * @param {string} hex - 16进制颜色，格式为：#rgb | #argb
     * @returns {{ r: number, g: number, b: number, a?: number }} 如：{r: 255, g: 255, b: 255, a: 1}
     * @private
     */
    languagesMgr._hexToColor = function (hex) {
        if (hex.length <= 0 || hex[0] !== '#') return { r: 0, g: 0, b: 0, a: 1 };

        hex = languagesMgr._formatHex(hex);
        hex = hex.substr(1, hex.length - 1);
        var hasAlpha = hex.length > 6 && hex.length <= 8;
        var a = 1;
        var i = 0;
        if (hasAlpha) {
            a = languagesMgr._hexTo16(hex.substr(i, 2));
            a = languagesMgr._formatAlpha(a);
            i += 2;
        }
        var r = languagesMgr._hexTo16(hex.substr(i, 2));
        i += 2;
        var g = languagesMgr._hexTo16(hex.substr(i, 2));
        i += 2;
        var b = languagesMgr._hexTo16(hex.substr(i, 2));

        return { r: r, g: g, b: b, a: a };
    };

    /**
     * 颜色值转换
     * '0xrgb'  -> 0xFFFFFF
     * '#rgb'   -> #FFFFFF
     * '#argb'  -> #80FFFFFF
     * '#rgba'  -> #FFFFFF80
     * 'rgb'    -> RGB(100, 100, 100)
     * 'rgba'   -> RGBA(100, 100, 100, 0.5)
     * @method colorTransform
     * @param {string|number[]} color 待转换颜色值
     * color 支持以下格式：
     * FFFFFF
     * #FFFFFF
     * [100, 100, 100]
     * [100, 100, 100, 0.5]
     * @param {'0xrgb'|'#rgb'|'#rgba'|'#argb'|'rgb'|'rgba'} patten 转换格式
     * @return {string|number} 颜色值对应格式转换结果
     */
    languagesMgr.colorTransform = function (color, patten) {
        if (typeof color === 'string') {
            // 字符串格式：FFFFFF  |  #FFFFFF
            var color = languagesMgr._formatHex(color);
            var a = 1;

            switch (patten) {
                case '0xrgb':
                    return parseInt(color.slice(1), 16);
                case '#rgb':
                    return color.slice(0, Math.min(color.length, 7));
                case '#argb':
                    if (color.length > 8) {
                        return color;
                    } else {
                        return '#' + languagesMgr.componentToHex(Math.round(a * 255)) + color.slice(1);
                    }
                case '#rgba':
                    if (color.length > 8) {
                        return '#' + color.slice(3) + color.slice(1, 3);
                    } else {
                        return color + languagesMgr.componentToHex(Math.round(a * 255));
                    }
                case 'rgb':
                case 'rgba':
                    var rgba = languagesMgr._hexToColor(color);
                    if (patten === 'rgb') {
                        return 'rgb(' + rgba.r + ', ' + rgba.g + ', ' + rgba.b + ')';
                    } else {
                        return 'rgb(' + rgba.r + ', ' + rgba.g + ', ' + rgba.b + ', ' + rgba.a + ')';
                    }
            }
        } else if (Array.isArray(color)) {
            // 数组格式：[100, 100, 100]  |  [100, 100, 100, 0.5]
            var r = Math.max(Math.min(color[0], 255), 0);
            var g = Math.max(Math.min(color[1], 255), 0);
            var b = Math.max(Math.min(color[2], 255), 0);
            var a = color[3] || 1;
            a = languagesMgr._formatAlpha(a);

            switch (patten) {
                case '0xrgb':
                    return parseInt(
                        languagesMgr.componentToHex(r) +
                        languagesMgr.componentToHex(g) +
                        languagesMgr.componentToHex(b)
                        , 16);
                case '#rgb':
                    return '#' +
                        languagesMgr.componentToHex(r) +
                        languagesMgr.componentToHex(g) +
                        languagesMgr.componentToHex(b);
                case '#rgba':
                    return '#' +
                        languagesMgr.componentToHex(r) +
                        languagesMgr.componentToHex(g) +
                        languagesMgr.componentToHex(b) +
                        languagesMgr.componentToHex(Math.round(a * 255));
                case '#argb':
                    return '#' +
                        languagesMgr.componentToHex(Math.round(a * 255)) +
                        languagesMgr.componentToHex(r) +
                        languagesMgr.componentToHex(g) +
                        languagesMgr.componentToHex(b);
                case 'rgb':
                    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
                case 'rgba':
                    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
            }
        }
    };

    /**
     * 根据配置中的key，更新当前文本控件
     * @method updateLabel
     * @param {eui.Label|Laya.Label|laya.display.Text|qc.UIText|Phaser.Text} label 需要更新的文本控件
     * @param {string} key 对应文案，配置中的key
     * @param {boolean} hasLog 是否需要打印日志提示，默认为：false
     * @param {srting} lang 指定语言，一版用于调试，如有传值，优先使用该语言
     * @returns {boolean} 是否更新成功
     */
    languagesMgr.updateLabel = function (label, key, hasLog, lang) {
        if (hasLog === void 0) { hasLog = false; }
        if (!label) {
            return;
        }
        var cfg = languagesMgr.getCfg(key, hasLog, lang);
        if (!cfg) {
            return;
        }

        /* =========== 文本值-start =========== */
        //Egret | Laya | PlaySmart | Phaser
        label.text = cfg.value;
        /* =========== 文本值-end =========== */

        /* =========== 文本样式-start =========== */
        var style = cfg.style;
        if (!style) {
            return;
        }

        //字体大小
        var fontSize = style.fontSize;
        if (fontSize != void 0) {
            fontSize = Math.max(fontSize, 0);
            if (typeof label.size === "number") {
                //Egret
                label.size = fontSize;
            } else if (typeof label.fontSize === "number") {
                //Laya | PlaySmart | Phaser
                label.fontSize = fontSize;
            }
        }
        //字体透明度
        var alpha = style.alpha;
        if (alpha != void 0) {
            if (typeof label.alpha === "number") {
                //Egret | Laya | PlaySmart | Phaser
                alpha = languagesMgr._formatAlpha(style.alpha);
                label.alpha = alpha;
            }
        }
        //字体颜色
        var color = style.color;
        if (color != void 0) {
            if (typeof label.textColor === "number") {
                //Egret
                label.textColor = languagesMgr.colorTransform(color, '0xrgb');
            } else if (typeof label.color === "string") {
                //Laya
                label.color = languagesMgr.colorTransform(color, '#rgb');
            } else if (typeof label.color === "object" && qc && qc.Color) {
                //PlaySmart
                label.color = new qc.Color(color);
            } else if (typeof label.fill === "string") {
                //Phaser
                label.fill = color;
            }
        }
        //边框大小
        var stroke = style.stroke;
        if (stroke != void 0) {
            stroke = Math.max(stroke, 0);
            if (typeof label.stroke === "number") {
                //Egret | Laya
                label.stroke = stroke;
            } else if (typeof label.strokeThickness === "number") {
                //PlaySmart | Phaser
                label.strokeThickness = stroke;
            }
        }
        //边框颜色
        var strokeColor = style.strokeColor;
        if (strokeColor != void 0) {
            if (typeof label.strokeColor === "number") {
                //Egret
                label.strokeColor = languagesMgr.colorTransform(strokeColor, '0xrgb');
            } else if (typeof label.strokeColor === "string") {
                //Laya
                label.strokeColor = languagesMgr.colorTransform(strokeColor, '#rgb');
            } else if (typeof label.stroke === "object" && qc && qc.Color) {
                //PlaySmart
                label.stroke = new qc.Color(strokeColor);
            } else if (typeof label.stroke === "string") {
                //Phaser
                label.stroke = strokeColor;
            }
        }
        //是否为粗体
        var bold = style.bold;
        if (bold != void 0) {
            bold = !!bold;
            if (typeof label.bold === "boolean") {
                //Egret | Laya | PlaySmart
                label.bold = bold;
            } else if (typeof label.fontWeight === "string") {
                //Phaser
                label.fontWeight = bold ? "bold" : "normal";
            }
        }
        //是否为斜体
        var italic = style.italic;
        if (italic != void 0) {
            italic = !!italic;
            if (typeof label.italic === "boolean") {
                //Egret | Laya
                label.italic = italic;
            } else if (typeof label.fontStyle === "string") {
                //Phaser
                label.fontStyle = italic ? "italic" : "normal";
            } else {
                //PlaySmart
                if (label.phaser && label.phaser.children && label.phaser.children.length > 0 && typeof label.phaser.children[0].fontStyle === "string") {
                    label.phaser.children[0].fontStyle = italic ? "italic" : "normal";
                }
                if (label.textPhaser && typeof label.textPhaser.fontStyle === "string") {
                    label.textPhaser.fontStyle = italic ? "italic" : "normal";
                }
                if (italic) {
                    label.text = ' ' + cfg.value + ' ';
                } else {
                    label.text = cfg.value;
                }
            }
        }
        //是否启用阴影
        var enableShadow = style.enableShadow;
        if (enableShadow != void 0) {
            enableShadow = !!enableShadow;
            if (typeof label.enableShadow === "boolean") {
                //PlaySmart
                label.enableShadow = enableShadow;
                // } else {
                //Egret | Laya | Phaser
                //暂无支持此功能
            }
        }
        //阴影颜色
        var shadowColor = style.shadowColor;
        if (shadowColor != void 0) {
            if (typeof label.shadowColor === "object" && qc && qc.Color) {
                //PlaySmart
                label.shadowColor = new qc.Color(shadowColor);
            } else if (typeof label.shadowColor === "string") {
                //Phaser
                label.shadowColor = languagesMgr.colorTransform(shadowColor, "rgba");
                // } else {
                //Egret | Laya
                //暂无支持此功能
            }
        }
        //阴影模糊大小
        var shadowBlur = style.shadowBlur;
        if (shadowBlur != void 0) {
            if (typeof label.shadowBlur === "number") {
                //PlaySmart | Phaser
                label.shadowBlur = shadowBlur;
                // } else {
                //Egret | Laya
                //暂无支持此功能
            }
        }
        //阴影偏移量X
        var shadowOffsetX = style.shadowOffsetX;
        if (shadowOffsetX != void 0) {
            if (typeof label.shadowOffsetX === "number") {
                //PlaySmart | Phaser
                label.shadowOffsetX = shadowOffsetX;
                // } else {
                //Egret | Laya
                //暂无支持此功能
            }
        }
        //阴影偏移量Y
        var shadowOffsetY = style.shadowOffsetY;
        if (shadowOffsetY != void 0) {
            if (typeof label.shadowOffsetY === "number") {
                //PlaySmart | Phaser
                label.shadowOffsetY = shadowOffsetY;
                // } else {
                //Egret | Laya
                //暂无支持此功能
            }
        }
        //是否启用渐变叠加
        var gradient = style.gradient;
        if (gradient != void 0) {
            gradient = !!gradient;
            if (typeof label.gradient === "boolean") {
                //PlaySmart
                label.gradient = gradient;
                // } else {
                //Egret | Laya | Phaser
                //暂无支持此功能
            }
        }
        //渐变开始颜色
        var startColor = style.startColor;
        if (startColor != void 0) {
            if (typeof label.startColor === "object" && qc && qc.Color) {
                //PlaySmart
                label.startColor = new qc.Color(startColor);
                // } else {
                //Egret | Laya | Phaser
                //暂无支持此功能
            }
        }
        //渐变结束颜色
        var endColor = style.endColor;
        if (endColor != void 0) {
            if (typeof label.endColor === "object" && qc && qc.Color) {
                //PlaySmart
                label.endColor = new qc.Color(endColor);
                // } else {
                //Egret | Laya | Phaser
                //暂无支持此功能
            }
        }
        //是否启用外发光
        var enableGlow = style.enableGlow;
        if (enableGlow != void 0) {
            enableGlow = !!enableGlow;
            if (typeof label.enableGlow === "boolean") {
                //PlaySmart（Canvas模式不支持）
                label.enableGlow = enableGlow;
                // } else {
                //Egret | Laya | Phaser
                //暂无支持此功能
            }
        }
        //外发光颜色
        var glowColor = style.glowColor;
        if (glowColor != void 0) {
            if (typeof label.glowColor === "object" && qc && qc.Color) {
                //PlaySmart（Canvas模式不支持）
                label.glowColor = new qc.Color(glowColor);
                // } else {
                //Egret | Laya | Phaser
                //暂无支持此功能
            }
        }
        //外发光模糊大小
        var glowBlur = style.glowBlur;
        if (glowBlur != void 0) {
            if (typeof label.glowBlur === "number") {
                //PlaySmart（Canvas模式不支持）
                label.glowBlur = glowBlur;
                // } else {
                //Egret | Laya | Phaser
                //暂无支持此功能
            }
        }

        return true;
        /* =========== 文本样式-end =========== */
    };

    /**
     * 根据图片名称前缀，更新当前图片控件
     * @method updateImage
     * @param {eui.Image|Laya.Image} image 需要更新的图片控件
     * @param {boolean} hasLog 是否需要打印日志提示，默认为：false
     * @param {srting} lang 指定语言，一版用于调试，如有传值，优先使用该语言
     * @returns {boolean} 是否更新成功
     */
    languagesMgr.updateImage = function (image, hasLog, lang) {
        if (hasLog === void 0) { hasLog = false; }
        if (!image) {
            return;
        }
        var _lang = languagesMgr.getLang(lang, hasLog);
        if (!_lang) {
            return;
        }

        var name;

        /* =========== 图片纹理-start =========== */
        if (typeof image.source === "string" && window["RES"] && RES.getRes) {
            //Egret
            name = image.source;

            var before = name; //名称前缀

            var afterIdx = name.lastIndexOf("_");
            var after = ''; //名称后缀
            if (afterIdx !== -1) {
                after = name.slice(afterIdx, name.length);
                before = name.slice(0, afterIdx);
            }
            var beforeIdx = name.indexOf("-");
            if (beforeIdx !== -1) {
                before = name.slice(0, beforeIdx);
            }

            //当前语言图片资源URL或Key
            var url = before + "-" + _lang + after;

            if (!RES.getRes(url)) {
                //没有当前语言资源，使用兜底语言
                if (hasLog) {
                    var language = lang || languagesMgr.language;
                    languagesMgr._notLangUseFallbackInfo(language);
                }
                url = before + "-" + languagesMgr.fallbackLocale + after;
                if (!RES.getRes(url)) {
                    if (hasLog) {
                        languagesMgr._notImgForUrlWarn(language, url);
                    }
                    return;
                }
            }
            //更新对应语言图片控件纹理
            image.source = url;
        } else if (typeof image.skin === "string" && window["Laya"] && Laya.loader && Laya.loader.getRes) {
            //Laya
            name = image.skin;

            var before = name; //名称前缀

            var afterIdx = name.lastIndexOf(".");
            var after = ''; //名称后缀
            if (afterIdx !== -1) {
                after = name.slice(afterIdx, name.length);
                before = name.slice(0, afterIdx);
            }
            var beforeIdx = name.indexOf("-");
            if (beforeIdx !== -1) {
                before = name.slice(0, beforeIdx);
            }

            //当前语言图片资源URL或Key
            var url = before + "-" + _lang + after;

            if (!Laya.loader.getRes(url)) {
                //没有当前语言资源，使用兜底语言
                if (hasLog) {
                    var language = lang || languagesMgr.language;
                    languagesMgr._notLangUseFallbackInfo(language);
                }
                url = before + "-" + languagesMgr.fallbackLocale + after;
                if (!Laya.loader.getRes(url)) {
                    if (hasLog) {
                        languagesMgr._notImgForUrlWarn(language, url);
                    }
                    return;
                }
            }
            //更新对应语言图片控件纹理
            image.skin = url;
        } else if (window["qc_game"] && qc_game.assets && qc_game.assets.load) {
            //PlaySmart
            name = image.texture.atlas.url;

            var before = name; //名称前缀

            var afterIdx = name.lastIndexOf(".");
            var after = ''; //名称后缀
            if (afterIdx !== -1) {
                after = name.slice(afterIdx, name.length);
                before = name.slice(0, afterIdx);
            }
            var beforeIdx = name.indexOf("-");
            if (beforeIdx !== -1) {
                before = name.slice(0, beforeIdx);
            }

            //当前语言图片资源URL或Key
            var url = before + "-" + _lang + after;

            if (!qc_game.assets.find(url)) {
                //没有当前语言资源，使用兜底语言
                if (hasLog) {
                    var language = lang || languagesMgr.language;
                    languagesMgr._notLangUseFallbackInfo(language);
                }
                url = before + "-" + languagesMgr.fallbackLocale + after;
                if (!qc_game.assets.find(url)) {
                    if (hasLog) {
                        languagesMgr._notImgForUrlWarn(language, url);
                    }
                    return;
                }
            }

            qc_game.assets.load(url, function (atlas) {
                if (atlas) {
                    //更新对应语言图片控件纹理
                    image.texture = new qc.Texture(atlas);
                    image.resetNativeSize();
                }
            })
        } else {
            //Phaser
            //暂无支持此功能
            return false;
        }

        return true;
        /* =========== 图片纹理-end =========== */
    };

})(languagesMgr || (languagesMgr = {}));