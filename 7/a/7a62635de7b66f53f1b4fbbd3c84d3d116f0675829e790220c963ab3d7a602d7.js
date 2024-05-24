// (c) 2000-2008 by Gemius SA

function gemius_parameters() {
 	        var d=document;
 	        var href=new String(d.location.href);
 	        var ref;
 	        var f=0;
 	        var fv='-';
 	        if (d.referrer) { ref = new String(d.referrer); } else { ref = ""; }
 	        if(typeof(Error)!='undefined') {
 	                eval("try { f=(d==top.document)?1:2; if (typeof(top.document.referrer)=='string') { ref = top.document.referrer } } catch(gemius_ex) {f=3;}");
 	                eval('try { fv = navigator.plugins["Shockwave Flash"].description; } catch (e) {}');
 	                eval('try { fv = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"); } catch (e) {}');
 	        }
 	        var url='&fr='+f+'&fv='+escape(fv)+'&tz='+(new Date()).getTimezoneOffset()+'&href='+escape(href.substring(0,499))+'&ref='+escape(ref.substring(0,499));
 	        if (screen) {
 	                var s=screen;
 	                if (s.width) url+='&screen='+s.width+'x'+s.height;
 	                if (s.colorDepth) url+='&col='+s.colorDepth;
 	        }
 	        return url;
}
 	
function gemius_hit_int(list,rfrom,rto) {
 	        var gp = (document.location && document.location.protocol && document.location.protocol=='https:')?'https://':'http://';
 	        var gh,go;
 	        if (typeof gemius_hitcollector=='undefined') {
 	                gh = 'pro.hit.gemius.pl';
 	        } else {
 	                gh = gemius_hitcollector;
 	        }
 	        var gu = gp+gh+'/_'+(new Date()).getTime()+'/redot.gif?';
 	        if (typeof window.gemius_cnt == 'undefined') {
 	                window.gemius_cnt=0;
 	        }
 	        if (typeof gemius_hit_cnt == 'undefined') {
 	                gemius_hit_cnt=0;
 	        }
 	        if (window.gemius_cnt<=gemius_hit_cnt) {
 	                go=1;
 	                window.gemius_cnt++;
 	        } else {
 	                go=0;
 	        }
 	        gemius_hit_cnt++;
 	        if (rfrom==0 && rto==0) {
 	                gu += 'l=20&id='+list;
 	        } else {
 	                gu += 'l=21';
 	                for (var i=rfrom ; i<rto ; i++) {
 	                        gu += '&id='+list[i];
 	                }
 	        }
 	        gu += gemius_parameters();
 	        if (typeof window.gemius_hit_images == 'undefined') {
 	                window.gemius_hit_images = new Array();
 	        }
 	        var gl = window.gemius_hit_images.length;
 	        window.gemius_hit_images[gl]=new Image();
 	        if (go) {
 	                window.gemius_hit_images[gl].src = gu;
 	        } else {
 	                window.gemius_hit_images[gl].src = gu.replace(/id=/,"id=DBL_");
 	        }
}
 	
function gemius_hit() {
 	        for (i=0 ; i<arguments.length ; i+=5) {
 	                if (i+5<arguments.length) {
 	                        gemius_hit_int(arguments,i,i+5);
 	                } else {
 	                        gemius_hit_int(arguments,i,arguments.length);
 	                }
 	        }
}
 	
if (typeof gemius_identifier != 'undefined') {
 	        gemius_hit_int(gemius_identifier,0,0);
 	        gemius_identifier = 'USED_'+gemius_identifier;
}
