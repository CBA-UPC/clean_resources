(function($) {
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a256 = '',
        r64 = [256],
        r256 = [256],
        i = 0;
    var UTF8 = {
        encode: function(strUni) {
            var strUtf = strUni.replace(/[\u0080-\u07ff]/g,
            function(c) {
                var cc = c.charCodeAt(0);
                return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
            })
            .replace(/[\u0800-\uffff]/g,
            function(c) {
                var cc = c.charCodeAt(0);
                return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
            });
            return strUtf;
        },
        decode: function(strUtf) {
            var strUni = strUtf.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, // 3-byte chars
            function(c) {
                var cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
                return String.fromCharCode(cc);
            })
            .replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,
            function(c) {
                var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
                return String.fromCharCode(cc);
            });
            return strUni;
        }
    };
    while(i < 256) {
        var c = String.fromCharCode(i);
        a256 += c;
        r256[i] = i;
        r64[i] = b64.indexOf(c);
        ++i;
    }
    function code(s, discard, alpha, beta, w1, w2) {
        s = String(s);
        var buffer = 0,
            i = 0,
            length = s.length,
            result = '',
            bitsInBuffer = 0;

        while(i < length) {
            var c = s.charCodeAt(i);
            c = c < 256 ? alpha[c] : -1;

            buffer = (buffer << w1) + c;
            bitsInBuffer += w1;

            while(bitsInBuffer >= w2) {
                bitsInBuffer -= w2;
                var tmp = buffer >> bitsInBuffer;
                result += beta.charAt(tmp);
                buffer ^= tmp << bitsInBuffer;
            }
            ++i;
        }
        if(!discard && bitsInBuffer > 0) result += beta.charAt(buffer << (w2 - bitsInBuffer));
        return result;
    }
    var Plugin = $.base64 = function(dir, input, encode) {
            return input ? Plugin[dir](input, encode) : dir ? null : this;
        };
    Plugin.btoa = Plugin.encode = function(plain, utf8encode) {
        plain = Plugin.raw === false || Plugin.utf8encode || utf8encode ? UTF8.encode(plain) : plain;
        plain = code(plain, false, r256, b64, 8, 6);
        return plain + '===='.slice((plain.length % 4) || 4);
    };
    Plugin.atob = Plugin.decode = function(coded, utf8decode) {
        coded = String(coded).split('=');
        var i = coded.length;
        do {--i;
            coded[i] = code(coded[i], true, r64, a256, 6, 8);
        } while (i > 0);
        coded = coded.join('');
        return Plugin.raw === false || Plugin.utf8decode || utf8decode ? UTF8.decode(coded) : coded;
    };
}(jQuery));l-proofing-badge-title:after{top:auto;bottom:0;border-top:none;border-bottom:.8em solid #A90067}.social-proofing-badgeV2-title{height:18px!important;border-radius:3px 0 0 3px;margin-bottom:0!important;display:inline-block;padding-right:.3em;margin-right:.8em;position:relative;text-align:center;vertical-align:middle;line-height:1;color:#fff;background:#D9D9D9}.social-proofing-badgeV2-title-text{color:#373D3E;margin-left:7px;margin-right:2px;font-weight:500}.social-proofing-badgeV2-additional-text{color:#000;font-weight:400}.social-proofing-badgeV2-title:after,.social-proofing-badgeV2-title:before{content:"";width:0;height:0;border-right:.7em solid transparent;right:-.5em;position:absolute;top:0;border-top:.8em solid #D9D9D9}.social-proofing-badgeV2-title:after{top:auto;bottom:0;border-top:none;border-bottom:.8em solid #D9D9D9}
/* ******** */
.social-proofing-faceout{margin:auto;display:flex;align-items:center}.social-proofing-faceout-title{display:inline-block;position:relative;vertical-align:middle}.social-proofing-faceout-title-text{color:#0B0C0C;font-weight:400}.social-proofing-faceoutV2-title{display:inline-block;position:relative;vertical-align:middle}.social-proofing-faceoutV2-title-text{color:#A90067;font-weight:400}
/* ******** */
#amznStoresBylineLogoTextContainer{margin-left:8px}#amznStoresBylineLogoImageContainer{flex-shrink:0}#amznStoresBylineLogoImage{border-radius:50%;border:1px solid #f0f0f0}.amznStoresTruncateSingleLine{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.amznStoresVerticallyCenterContents{display:flex;align-items:center}
/* ******** */
.ssf-share-trigger{cursor:pointer;display:inline-block;background-size:cover;outline:0}.ssf-share-trigger.ssf-no-style{background-image:none!important;height:auto!important;width:auto!important;display:block}.ssf-noclick{pointer-events:none}.ssf-background{border:1px solid #ddd;border-radius:50%;display:flex;align-items:center;justify-content:center;top:10px;right:10px;z-index:1;background-color:#fff;width:calc(24px * 1.4);height:calc(24px * 1.4);position:absolute}.ssf-background.ssf-bg-count{border:none}.ssf-background-float{border:1px solid #ddd;border-radius:50%;display:flex;align-items:center;justify-content:center;top:10px;right:10px;z-index:1;background-color:#fff;width:calc(24px * 1.4);height:calc(24px * 1.4);float:right}.ssf-background-float.ssf-bg-count{border:none}.ssf-share-btn{right:8px;top:8px;z-index:1;position:absolute}.ssf-share-btn-float{right:8px;top:8px;z-index:1;float:right}.link-section,.ssf-channel{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ssf-channel-v{padding:.5em}.ssf-channel-v:not(:last-child){border-bottom:1px #ddd solid}.ssf-channel-v span{margin-left:.5em}.ssf-channel-v a{display:block;word-break:break-all}.ssf-channel-v a:hover{text-decoration:none}.ssf-channel-h i,.ssf-channel-v i{background-size:cover;background-repeat:no-repeat;display:inline-block;vertical-align:middle;width:24px;height:24px}.ssf-channel-popover-icon{background-size:cover;background-repeat:no-repeat;display:inline-block;vertical-align:middle;width:24px;height:24px;background-size:contain;padding-right:30px}.ssf-h-icons{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:center;gap:20px}.ssf-channel-h{display:flex;flex-flow:column nowrap;align-items:center}.ssf-channel-h a{padding:1em;border:1px solid #ddd;border-radius:50%}.ssf-channel-h i{width:40px;height:40px}.ssf-copy-section{display:flex;align-items:center;gap:10px}.link-section{flex:1 0}
/* ******** */
