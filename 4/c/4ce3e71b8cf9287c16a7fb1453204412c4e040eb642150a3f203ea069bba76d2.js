"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751],{22e3:function(t,c,n){n.d(c,{Kv:function(){return s},aH:function(){return g},vl:function(){return p},$i:function(){return v},RW:function(){return m},EL:function(){return b},Tj:function(){return O},uZ:function(){return U},m_:function(){return _}});var o=n(1717),a=n(27693),e=n.n(a),r=n(2251),i=n(73627),u=n(37707);r s=function(t){var c="";return t.items.forEach((function(t){if(t.type===i.tXD.HTML){var n=t;c+=(0,u.ZU)(n.html)}})),c},g=function(t){switch(t.type){case i.Rn7.VIDEO:return r.v.PLAY_CIRCLE_OUTLINE;case i.Rn7.TEXT:return r.v.TEXT_SNIPPET_OUTLINE;case i.Rn7.POLL:return r.v.POLL_OUTLINE;case i.Rn7.INSTAGRAM:return r.v.INSTAGRAM_LOGO;case i.Rn7.TWITTER:return r.v.TWITTER_X_LOGO;default:return r.v.TEXT_SNIPPET_OUTLINE}},l=function(t){return 1===t?"min":"mins"},h=p=function(t,c){var n=t.publishedAt,o=t.modifiedAt,a=t.showModifiedAt,r=t.showPublishedAt,i="DD-MMM-YYYY",u=e()(),f=e()(n),d=f.utc().format(i),s=e()(o),g=u.diff(f,"hour"),p=u.diff(f,"minute"),v=u.diff(s,"hour"),m=u.diff(s,"minute"),T=0===s.diff(f,"second");if(r&&!a)return p<=60?c?"".concat(p," ").concat(l(p)," ago"):"".concat(d," \u2022 ").concat(p," ").concat(l(p)," ago"):g<24?c?"".concat(g," ").concat(h(g)," ago"):"".concat(d," \u2022 ").concat(g," ").concat(h(g)," ago"):d;if(a&&!r)return m<=60?c?"Updated ".concat(m," ").concat(l(m)," ago"):"".concat(s.format(i)," \u2022 Updated ").concat(m," ").concat(l(m)," ago"):v<24?c?"Updated ".concat(v," ").concat(h(v)," ago"):"".concat(s.format(i)," \u2022 Updated ").concat(v," ").concat(h(v)," ago"):"Updated on ".concat(s.format(i));if(r&&a)if(g<24){if(v-g<24){if(m<=60)return c?"Updated ".concat(m," ").concat(l(m)," ago"):"".concat(d," \u2022 Updated ").concat(m," ").concat(l(m)," ago");if(v<24)return c?"Updated ".concat(v," ").concat(h(v)," ago"):"".concat(d," \u2022 Updated ").concat(v," ").concat(h(v)," ago")}if(p<=60)return c?"".concat(p," ").concat(l(p)," ago"):"".concat(d," \u2022 ").concat(p," ").concat(l(p)," ago");if(g<24)return c?"".concat(g," ").concat(h(g)," ago"):"".concat(d," \u2022 ").concat(g," ").concat(h(g)," ago")}else{if(m<=60)return c?"Updated ".concat(m," ").concat(l(m)," ago"):"".concat(d," \u2022 Updated ").concat(m," ").concat(l(m)," ago");if(v<24)return c?"Updated ".concat(v," ").concat(h(v)," ago"):"".concat(d," \u2022 Updated ").concat(v," ").concat(h(v)," ago");if(T||0===s.diff(f,"day"))return d;if(s.diff(f,"day")>0)return"".concat(d," \u2022 Updated on ").concat(s.format(i))}return""},v=function(t,c){var n=e()(),o=e()(t.publishedAt),a="DD-MMM-YYYY",r="Published ".concat(o.format(a));o.format(a)===n.format(a)&&(r="Published Today");var i="";if(c){var u=e()(c.publishedAt),f=n.diff(u,"second"),d=n.diff(u,"minute"),s=n.diff(u,"hour");i=f<60?"Updated ".concat(f," ").concat(1===f?"sec":"secs"," ago"):d<60?"Updated ".concat(d," ").concat(l(d)," ago"):s<24?"Updated ".concat(s," ").concat(h(s)," ago"):"Updated ".concat(u.format(a))}return""!==i?"".concat(i," \u2022 ").concat(r):r},m=function(t){var c=e()(),n=e()(t.publishedAt),o=c.diff(n,"hour"),a=c.diff(n,"minute"),r=c.diff(n,"second");return r<60?"".concat(r,"s ago"):a<60?"".concat(a,"m ago"):o<24?"".concat(o,"h ago"):"".concat(n.format("DD MMM YYYY, h:mm a"))},T=[{unicode:"U+1F44F",skintone:i.sU9.SKIN_TONE_NEUTRAL},{unicode:"U+2764",skintone:i.sU9.SKIN_TONE_NEUTRAL},{unicode:"U+1F525",skintone:i.sU9.SKIN_TONE_NEUTRAL},{unicode:"U+1F62D",skintone:i.sU9.SKIN_TONE_NEUTRAL}],b=function(t,c){var n={};c.forEach(();var o=[];return t.forEach((function(t){var c=d({},t),a=n[c.id];a&&a.reactionStat&&(c.reactionStat?e()(a.reactionStat.modifiedAt).valueOf()>e()(c.reactionStat.modifiedAt).valueOf()&&(c.reactionStat=a.reactionStat):c.reactionStat=a.reactionStat);o.push(c)})),o},O=function(t){var c=e()(),n=e()(t.publishedAt),o=c.diff(n,"second"),a=c.diff(n,"minute"),r=c.diff(n,"hour"),i=c.diff(n,"day"),u=c.diff(n,"month"),f=c.diff(n,"year");return o<60?"".concat(o,"s"):a<60?"".concat(a,"min"):r<24?"".concat(r,"h"):i<31?"".concat(i,"d"):u<12?"".concat(u,"m"):"".concat(f,"y")},U=function(t){var c,n=t.reactionStat;if(n){var o=[],a={};n.emojis.forEach((function(t){var c="".concat(t.unicode,"-").concat(t.skintone);a[c]=t})),T.forEach((function(t){var c="".concat(t.unicode,"-").concat(t.skintone),n=a[c];n?o.push(n):o.push({unicode:t.unicode,skintone:t.skintone,count:0})})),c=d(d({},n),{},{emojis:o})}else c={id:123,emojis:T.map((),share:0,modifiedAt:e()().toISOString()};return d(d({},t),{},{reactionStat:c})},_=function(t){return e()(t.publishedAt).utc().format("MMMM D")}},69731:function(t,c,n){n.d(c,{VY:function(){return s},Sd:function(){return g},S1:function(){return l},T:function(){return h},M2:function(){return p},f5:function(){return v},e0:function(){return m},WX:);var o=n(27693),a=n.n(o),e=n(4550),r=n(8325),i=n(92438),u=n(62882),f=n(73627),d=n(10626),s=function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,o="".concat((0,r.P_)(t),"/cricket-news"),a=[];return n&&a.push("objectId=".concat(n)),c>1&&a.push("page=".concat(c)),a.length?"".concat(o,"?").concat(a.join("&")):o},g=function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,o="".concat((0,r.P_)(t),"/cricket-features"),a=[];return n&&a.push("objectId=".concat(n)),c>1&&a.push("page=".concat(c)),a.length?"".concat(o,"?").concat(a.join("&")):o},l=function(t){var c=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(t.categoryType){case f.ux$.OTD:var n=a()(t.publishedAt).utc();return T(t.language,n.month(),n.date());case f.ux$.TCM:return"".concat(u.uu.TCM,"/story/").concat(t.objectId,"/").concat(t.slug);default:var o=t.matchMeta;if(o&&!c){if(t.genreType===f.MzU.REPORT){var e=t.day;return"".concat((0,r.P_)(t.language),"/series/").concat(o.seriesSlug,"-").concat(o.seriesObjectId,"/").concat(o.slug,"-").concat(o.objectId,"/match-report").concat(e?"-"+e:"")}if(t.genreType===f.MzU.PREVIEW)return"".concat((0,r.P_)(t.language),"/series/").concat(o.seriesSlug,"-").concat(o.seriesObjectId,"/").concat(o.slug,"-").concat(o.objectId,"/match-preview");if(t.genreType===f.MzU.LIVE_BLOG||t.isLiveBlog){var i=t.day;return"".concat((0,r.P_)(t.language),"/series/").concat(o.seriesSlug,"-").concat(o.seriesObjectId,"/").concat(o.slug,"-").concat(o.objectId,"/live-match-blog").concat(i?"-"+i:"")}return"".concat((0,r.P_)(t.language),"/story/").concat(t.slug,"-").concat(t.objectId)}return t.isLiveBlog&&!c?"".concat((0,r.P_)(t.language),"/live-blog/").concat(t.slug,"-").concat(t.objectId):"".concat((0,r.P_)(t.language),"/story/").concat(t.slug,"-").concat(t.objectId)}},h=function(t,c){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return c.id===e.Z.stories.OTDGenreId?m(t,null):(0,i.ij)("".concat((0,r.P_)(t),"/genre/").concat(c.slug,"-").concat(c.id),n)},p=function(t,c){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,i.ij)("".concat((0,r.P_)(t),"/cricket-blogs/").concat(c.slug,"-").concat(c.id),n)},v=m=function(t,c){var n="".concat((0,r.P_)(t),"/on-this-day/cricket-events");return null!==c?"".concat(n,"/").concat(d.TQ[c].long.toLowerCase()):n},T=function(t,c,n){return"".concat((0,r.P_)(t),"/on-this-day/cricket-events/").concat(d.TQ[c].long.toLowerCase(),"/").concat(n)}}}]);