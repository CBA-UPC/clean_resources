<?xml version="1.0" encoding="UTF-8"?>
<VAST xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd" version="2.0">
   <Ad id="451704990945">
      <InLine>
         <AdSystem>Vidoomy</AdSystem>
         <AdTitle>In-Stream Video</AdTitle>

         <Creatives>
            <Creative id="451704990945" AdID="451704990945-1" sequence="1">
               <Linear>
                  <Duration>00:00:20</Duration>
                  <TrackingEvents>
                  </TrackingEvents>

                  <VideoClicks>
                     <ClickThrough>
                        <![CDATA[https://www.ventanafamilias.es/]]>
                     </ClickThrough>
                  </VideoClicks>

                  <MediaFiles>
                     <MediaFile delivery="progressive" type="video/mp4" width="1280" height="720" bitrate="0" scalable="false" maintainAspectRatio="false" fileSize="0">
                        <![CDATA[https://video.vidoomy.com/pro/ftp-pro/297/83X53_1704990941_vast_video.mp4]]>
                     </MediaFile>
                  </MediaFiles>

               </Linear>
            </Creative>
         </Creatives>
      </InLine>
   </Ad>
</VAST>
.trim($(e).text()) == t.name) return void $(e).after('\r\n<a href="' + t.linkA + '" target="_blank" class="ad-csb-live"><img src="' + t.image + '" alt="" width="26" height="16" /></a>');
            });
        },
        "renderB": function(t) {
            $("." + this.options.advid).find("a").each(function(n, e) {
                var i = $(e);
                if ($.trim(i.text()) == t.name) {
                    var r = i.parents("li"), a = r.find(".c5"), s = a.find("a");
                    return r.find(".c4").remove(), a.css({
                        "width": "7em",
                        "text-align": "left"
                    }), s.css("margin-left", "18px").html("官网直通&raquo").attr("href", t.linkB), void (r.find(".c1").hasClass("c-red") ? (r.css({
                        "background": "#ff5c00"
                    }), r.find(".c1,.c2,.c3,.c5, a").css("color", "#fff")) : s.css({
                        "color": "#ff5c00"
                    }));
                }
            });
        },
        "play": function() {
            for (var t = this.data.games; t.length; ) {
                var n = t.shift();
                n.linkA && n.linkB ? Math.round(Math.random()) ? this.renderA(n) : this.renderB(n) : n.linkA ? this.renderA(n) : n.linkB && this.renderB(n);
            }
            this.emit(adv.ENUM.EVENTS.played);
        }
    });
} ]);
//# sourceMappingURL=production.js.map