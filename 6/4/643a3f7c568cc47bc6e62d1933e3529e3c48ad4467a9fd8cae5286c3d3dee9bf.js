! Title: uBlock filters – Unbreak
! Expires: 5 days
! Last modified: Sun, 14 Jan 2024 13:25:42 +0000
! Diff-Path: ../patches/2024.1.16.804.patch#ublock-unbreak
! Diff-Expires: 317 minutes
! License: https://github.com/uBlockOrigin/uAssets/blob/master/LICENSE
! *** uAssets:filters/unbreak.txt ***
||2mdn.net/instream/video/client.js$script,redirect=noopjs,domain=video.foxnews.com
||cdn.krxd.net^$script,redirect=noopjs,domain=video.foxnews.com
@@||akamaihd.net/player/*/akamai/amp/prebid/*$script,domain=static.foxnews.com
@@||global.fncstatic.com^*/ads.js$script,domain=foxnews.com
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=insider.foxnews.com
! Chrome store feedback
! To counter `top.mail.ru` in Peter Lowe's
||top.mail.ru^$badfilter
||top.mail.ru^$3p
! `amazon-adsystem.com` is blocked by Peter Lowe's. The neutered script should
! help lower chances of breakage. Examples:
! - http://www.food.com/recipe/oven-baked-sweet-plantains-80130 (slideshow controls broken)
! - [add more]
||amazon-adsystem.com/aax2/amzn_ads.js$script,redirect=amazon-adsystem.com/aax2/amzn_ads.js
||amazon-adsystem.com/aax2/amzn_ads.js$script,redirect=noopjs,domain=player.performgroup.com
! This potentially unbreaks sites broken by EasyPrivacy's `/b/ss/*&aqe=`
! Confirmed for:
! - http://www.surfline.com/video/ (links not working)
! - https://github.com/gorhill/uBlock/issues/529
! - http://www.scotrail.co.uk/check-your-journey (via https://twitter.com/andy_pee_tho/status/710508529405263872)
*/b/ss/*&aqe=$image,redirect=1x1-transparent.gif
! This unbreak video player:
! - http://www.cnet.com/videos/big-mac-survives-molten-copper-and-heats-up-internet-ep-233/
! And possibly other sites -- `taboola.com` is blocked by Peter Lowe's.
||cdn.taboola.com/libtrc/*/loader.js$script,redirect=noopjs,important,domain=cnet.com
@@||data.cnn.com/jsonp/cfg/*/videoconfig/cnn/desktop/domesticsectionconfig.json$script,domain=cnn.com
@@||cnn.com/.element/apps/cvp/3.0/cfg/spider/cnn/expansion/ad_policy.xml$xhr,domain=cnn.com
@@||z.cdn.turner.com/analytics/cnnexpan/jsmd.min.js$script,domain=cnn.com
@@||cdn.turner.com/cnn/van/resources/*/scripts/vendor/loggly.tracker.js$xhr,domain=trentonian.com
@@||cdn.cnn.com/analytics/cnn_arabic/jsmd.min.js$script,1p
@@||mssl.fwmrm.net/libs/*$script,domain=go.cnn.com
! http://www.slideshare.net/aidanajoyce/adblocking-blocking-more-than-ads
||ggwebcast.com/*/kaltura/ga/urchin.js$script,redirect=noopjs
@@||media2.intoday.in/aajtak/$script,domain=aajtak.intoday.in|indiatoday.intoday.in
@@||jimmyjohns.com/Scripts/angularytics*.js$1p,script
! This unbreaks video playback on sky.de
! To counter `analytics.edgesuite.net` and `adobedtm.com` in EasyPrivacy
@@||analytics.edgesuite.net/html5/akamaihtml5-min.js$script,domain=sky.de
@@||analytics.edgekey.net/html5/akamaihtml5-min.js$script,domain=sky.de
@@||assets.adobedtm.com^$script,domain=sky.de
! This unbreaks video playback on sfgate.com and other sites
! To counter `ensighten.com` in EasyPrivacy
@@||d29xw9s9x32j3w.cloudfront.net/players/library/*$domain=seattlepi.com|sfgate.com
@@||ensighten.com/hearst/news/Bootstrap.js$script,domain=ctpost.com|houstonchronicle.com|mysanantonio.com|newstimes.com|seattlepi.com|sfchronicle.com|sfgate.com|timesunion.com
@@||googleapis.com/js/sdkloader/ima3.js$script,domain=seattlepi.com|sfgate.com
@@||spotxcdn.com/integration/directsdk/*$script,domain=seattlepi.com|sfgate.com
@@||spotx.tv/directsdk/*$script,domain=seattlepi.com|sfgate.com
! To counter `adobedtm.com` in EasyPrivacy
@@||assets.adobedtm.com^$script,domain=rogers.com
@@||atlassian.com^*/analytics.js$script,1p
! To counter `sumo.com` in Peter Lowe's
||sumo.com^$badfilter
||sumo.com^$3p,badfilter
||sumo.com^$3p,domain=~beewits.com|~dante-ri.hr
! To counter `sumo.com`, `sumome.com` in Peter Lowe's
@@||sumo.com^$domain=shopify.com
@@||sumome.com^$domain=shopify.com
||bbci.co.uk^*/analytics.js$script,redirect=noopjs,domain=bbc.co.uk
||static.bbc.co.uk/bbcdotcom/*/adverts.js$script,1p,important,redirect=noopjs
/ga_setup.js$badfilter
||lexus.com/lexus-share/js/tracking_omn/s_code.js$script,important,1p,redirect=noopjs
pythonjobshq.com##+js(aopr, Keen)
! http://forums.mozillazine.org/viewtopic.php?f=38&t=3032369
@@||hdliveextra-a.akamaihd.net^$domain=nbcsports.com
@@||mps.nbcuni.com^$script,domain=csnne.com
@@||myaccounts.capitalone.com^$script,1p
@@||travel.capitalone.com/api/v0/tracking/event$xhr,1p
@@||cdn.ampproject.org/*/amp-geo-$script,domain=bozemandailychronicle.com|engadget.com|kmbc.com|koat.com|pilotonline.com|richmond.com|stltoday.com|amp.tmz.com|tucson.com|amp.usatoday.com|watchdog.org
@@/blockadblock.$script,domain=blockadblock.com
||carambo.la^*/getAngularLayer$script,redirect=noopjs,domain=imleagues.com
||oakley.com/_ui/dist/scripts/vendor/tealium.js$script,1p,redirect=noopjs,important
||oakleysi.com/_ui/dist/scripts/vendor/tealium.js$redirect=noopjs,important
! Reported in Chrome store: "Orange portal http://www.orange.fr/portail is freezed"
orange.fr#@##o_carrepub
orange.fr###o_carrepub:style(height: 1px; margin: 0; min-height: auto; visibility: hidden; width: 1px;)
@@||mpsnare.iesnare.com/snare.js$script,domain=costco.com
@@||thermofisher.com/*/analytics.sitecatalyst.js$script,1p
@@||citi.com/cards/*/tracking.js$script
@@||eccmp.com/*/conversen-SDK.js$script,domain=citi.com
@@||fbcdn.net/safe_image.php?$image,domain=facebook.com|facebookcorewwwi.onion|facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion
@@||googletagmanager.com/gtm.js$script,domain=fullcontact.com
@@||flightradar24.com/static/*/statistics.js$script,1p
||camping.info/*/fingerprint2.min.js$script,1p,redirect=noopjs
||static.clmbtech.com^$script,redirect=noopjs,domain=businessinsider.in
@@||businessinsider.in/analytics_js/*$script,1p
@@||smartclip.net^$script,domain=energy.de
energy.de#@##ad_home
||msavideo-a.akamaihd.net^$media,redirect=noopmp3-0.1s,domain=msn.com
@@||stats.g.doubleclick.net/dc.js$script,domain=ticketfly.com
@@||mpsnare.iesnare.com/snare.js$script,domain=citiretailservices.citibankonline.com
@@||adobedtm.com^*/satellitelib-$script,domain=comenity.net
! Reported through email: http://www.kia.ca/build-and-price-kia
@@||adobedtm.com/*/satelliteLib-$script,domain=kia.ca
@@||ensighten.com/*/prod/Bootstrap.js$script,domain=espn.com
@@||espncdn.com/redesign/*/js/espn-analytics.js$script,domain=espn.com
@@||registerdisney.go.com/*/responder/responder.js$script,domain=espn.com
! fix video player
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=espn.com
||adservex.media.net/videoAds.js$script,redirect=noopjs,domain=forbes.com
@@||recipes.timesofindia.com/*ads.cms$script
@@||honeybadger.io/*/honeybadger.min.js$script,domain=clark.de
@@||rtl.be/videos/player/vp4_webanalytics.js$script,1p
reyada.com#@#.ads_area
@@||ads.adaptv.advertising.com/*einthusan.tv*$xhr,domain=imasdk.googleapis.com
@@||js.center.io^$domain=randpac.com
||googletagservices.com/tag/js/gpt.js$script,redirect=noopjs,domain=radio-canada.ca|tvguide.com
||iworkfor.nsw.gov.au/Scripts/ga.js$script,1p,redirect=noopjs
||agkn.com/*/tag.js$script,redirect=noopjs,domain=netd.com
||dogannet.tv/*/third_party/comscore/*$script,redirect=noopjs,domain=netd.com
||gemius.pl/gplayer.js$script,redirect=noopjs,domain=netd.com
||netd.com/js/piwik-plugin.js$script,1p,redirect=noopjs
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,xhr,domain=netd.com
@@||js.duhnet.tv/*/player/html5/*/comscore/streamsense$script,xhr,domain=netd.com
! http://forums.mozillazine.org/viewtopic.php?f=47&t=3037666
@@||bom.gov.au/*/analytics.js$script,1p
||gcmgames.com.br/*/google.analytics.trackingcode.js$script,1p,redirect=noopjs
@@||visa.com/*/analytics/analytics.js$script,1p
@@||visa.com/*/analytics/ntpagetag.js$script,1p
@@||gemius.pl/xlgemius.js$script,domain=jn.pt
@@||secure.netscope.marktest.pt/netscope-gemius.js$script,domain=jn.pt
@@||gemius.pl/xlgemius.js$script,domain=dn.pt
@@||marktest.pt/netscope-gemius.js$script,domain=dn.pt
hintergrundbild.org#@#.ads1
@@||crackle.com/*/crypto-js.js$script,1p
@@/cdn-cgi/pe/bag2?*optimizely.com$domain=coindesk.com
/adstream.$badfilter
/adstream.$domain=~adstream.com|~adstream.com.ro
@@||ak.sail-horizon.com/scout/$script,domain=businessinsider.com
@@||tracker.btorrent.xyz^$websocket
@@||cloudflare.com/ajax/libs/*$script,domain=androidcentral.com
||player.ooyala.com/*/ad-plugin/pulse.min.js$script,redirect=noopjs,domain=lpga.com
@@||gemius.pl/xlgemius.js$script,domain=tsf.pt
@@||secure.netscope.marktest.pt/netscope-gemius.js$script,domain=tsf.pt
||cdn.auth0.com/*/analytics.min.js$script,redirect=noopjs,domain=tomsguide.com
@@||api.opinary.com/poll/*$xhr,domain=pressekompass.net
@@||userscloud.com/js/vendor/core/bootstrap.js$script,1p
@@||usercdn.com^$frame,domain=userscloud.com
@@||cdn.mxpnl.com/libs/mixpanel-*.min.js$script,domain=demandforce.com
@@||streamplay.to^*/manifest.mpd$xhr
@@||streamplay.to^*.mp4$xhr
@@||streamplay.to^*.m4s$xhr
||frog.wix.com/da-client$image,redirect=1x1-transparent.gif,domain=deviantart.com
@@||pages.bostonglobe.com/login/js/lib/AppMeasurement.js$script,1p
||player.ooyala.com/*/analytics-plugin/$script,redirect=noopjs
@@||code.adsales.snidigital.com/conf/ads-config.js$script,domain=foodnetwork.com
! video broken https://it.blastingnews.com/cultura-spettacoli/2018/01/video/marco-iaconianni-in-arte-dj-squalo-nello-zoo-di-105-004790175.html
@@||googletagservices.com/tag/js/gpt.js$script,domain=blastingnews.com
@@||ign.com/newsfeed-block$xhr,1p
@@||cxense.com/cx.js$script,domain=letelegramme.fr
br.de##+js(set, akamaiDisableServerIpLookup, noopFunc)
! To counter `o0bc.com` in Peter Lowe's
! unbreaks boston.com
||o0bc.com^$badfilter
||o0bc.com^$3p,domain=~boston.com|~bostonglobe.com
@@||gatesnotes.com/*/jquery.iframetracker.js$script,1p
||smartlook.com^$badfilter
||smartlook.com^$3p
@@||gemius.pl/gplayer.js$script,domain=play.tv3.lt
@@||ws-na.assoc-amazon.com^$image,domain=4tests.com
@@||ncjrs.gov/fsrscripts/*$1p
@@||cdn.boomtrain.com/analyticstrain/snopes/analyticstrain.min.js$script,domain=snopes.com
@@||boomtrain.com/identify/resolve$xhr,domain=snopes.com
||fullstory.com^$badfilter
||fullstory.com^$3p
||fullstory.com/s/fs.js$script
@@||google-analytics.com/analytics.js$script,domain=developers.google.com
||vidtech.cbsinteractive.com/*/tracking/comscore/comscore.streaming.$script,redirect=noopjs,domain=zdnet.com
cyclingnews.com##+js(aopr, MONETIZER101.init)
cyclingnews.com##+js(nano-stb, /outboundLink/)
cyclingnews.com##.global-banner
@@||login.ingbank.pl/*/vendor/dtm/*$script,1p
@@|https://api-secure.solvemedia.com^$script
@@||openx.tv/embed/$domain=m4ufree.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,domain=click2houston.com|clickondetroit.com|clickorlando.com|ksat.com|local10.com|news4jax.com|wsls.com,important
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai.js$script,domain=click2houston.com|clickondetroit.com|clickorlando.com|ksat.com|local10.com|news4jax.com|wsls.com
@@||flyertalk.com/forum/*/ckeditor/core/log.js$script,1p
@@||bikeforums.net/*/ckeditor/core/log.js$script,1p
@@||imagebam.com/assets/js/image_bootstrap.js$script,1p
/.*(\/proxy|\.wasm|\.wsm|\.wa)$/$websocket,xhr,domain=reactor.cc|sickrage.ca|sorteosrd.com|streamplay.to,badfilter
/proxy|$websocket,xhr,domain=reactor.cc|sickrage.ca|sorteosrd.com|streamplay.to
.wasm|$websocket,xhr,domain=reactor.cc|sickrage.ca|sorteosrd.com|streamplay.to
.wsm|$websocket,xhr,domain=reactor.cc|sickrage.ca|sorteosrd.com|streamplay.to
.wa|$websocket,xhr,domain=reactor.cc|sickrage.ca|sorteosrd.com|streamplay.to
avclub.com,clickhole.com,deadspin.com,earther.com,gizmodo.com,jalopnik.com,jezebel.com,kotaku.com,lifehacker.com,splinternews.com,theinventory.com,theonion.com,theroot.com,thetakeout.com#@#div[id^="dfp-ad-"]
kotaku.com#@##dfp-ad-2
kotaku.com#@##dfp-ad-1
||x.kinja-static.com/assets/packaged-js/OnionAM.$script,domain=avclub.com|clickhole.com|deadspin.com|earther.com|gizmodo.com|jalopnik.com|jezebel.com|kotaku.com|lifehacker.com|splinternews.com|theinventory.com|theonion.com|theroot.com|thetakeout.com
@@||d1xrtnyoeeet33.cloudfront.net/assets/js/lib/*$script,domain=calgaryherald.com|calgarysun.com|canoe.com|edmontonsun.com|financialpost.com|leaderpost.com|lfpress.com|montrealgazette.com|nationalpost.com|ottawacitizen.com|ottawasun.com|theprovince.com|thestarphoenix.com|torontosun.com|vancouversun.com|windsorstar.com|winnipegsun.com
@@||cbsistatic.com/*/comscore.streaming.$script,domain=cbsnews.com
@@||tealium.cbsnews.com/*/prod/utag.js$script,1p
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=cbsnews.com,redirect=google-ima.js,important
||imasdk.googleapis.com/js/sdkloader/ima3_debug.js$script,domain=cbsnews.com,redirect=google-ima.js,important
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai.js$script,domain=cbsnews.com
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai_debug.js$script,domain=cbsnews.com
@@||pandora.com/web-version/*_comscore.$script,1p
@@||pandora.com/web-version/*_googleAnalytics.$script,1p
@@||ms-mt--api-web.*/ads/*$xhr,domain=coches.net
@@||flightapi.travix.com/flight$xhr,domain=cheaptickets.nl|vayama.com
||v.embed-cdn.com/v8/player.js$script,domain=streamable.com
calgarysun.com,canoe.com,edmontonsun.com,financialpost.com,nationalpost.com,ottawasun.com,theprovince.com,torontosun.com,winnipegsun.com#@#.adsizewrapper
@@||sonycrackle.com/vendor/AdManager.js$script,1p
@@||fwlive.sonycrackle.com/ad/*$script,1p
@@||imrworldwide.com/novms/*/ggcm*.js$script,domain=sonycrackle.com
@@||travel-assets.com/datacapture/*$script,domain=expedia.co.uk
@@||btstatic.com/tag.js$script,domain=vw.com
@@/wp-content/plugins/popup-builder-$image,css,script,1p
motherless.com#@#iframe[style]
@@||static.bbc.co.uk/radio/player/*/script/logger.js$script,domain=bbc.co.uk
forbes.it#@#.ad-row
@@||api.sbs.com.au/js/tracking/ondemand.js$script,1p
! Reported in review section of AMO:
! "Homedepot.com, cannot load order history"
! "Frigidaire.com, [...] registration page refused to submit"
/analytics/analytics.$~xhr,badfilter
@@||play2.qbrick.com/framework/modules/analytics/analytics.min.js$script
britannica.com###md-media-overlay-ad
@@||cbs.wondershare.com/*pid=
@@/mma/?t$image,domain=newsblaze.com
||tag.navdmp.com/$script,redirect=noopjs,domain=globoesporte.globo.com
@@||statics.estadao.com.br/*/portal/js/comscore/$script,domain=estadao.com.br
@@||statics.estadao.com.br/*/utils/publicidade/dfp.min.js$script,domain=estadao.com.br
@@||msecnd.net/scripts/a/ai.0.js$script,domain=msropendata.com
! Clicking through photos is broken
||tagcommander.com/*/tc_$script,important,domain=n-tv.de
@@||static-olxeu.akamaized.net/static/olxbg/*/js/tracking/ninja.js$script,domain=olx.bg
! To counter `optimizely.com` in Peter Lowe's list
||optimizely.com^$badfilter
@@||cc.naver.com/cc$frame,1p
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=sbs.com.au
||src.litix.io/core/*/mux.js$script,redirect=noopjs,domain=kanald.com.tr
@@||gatr.hit.gemius.pl/gplayer.js$script,domain=kanald.com.tr
||bridgetrack.com^$badfilter
||bridgetrack.com^$3p
@@||academia.edu/*/users/*/stats/*$xhr,1p
@@||fusion.ddmcdn.com^$script,domain=ahctv.com|animalplanet.com|cookingchanneltv.com|destinationamerica.com|discovery.com|discoverylife.com|diynetwork.com|foodnetwork.com|hgtv.com|investigationdiscovery.com|motortrend.com|sciencechannel.com|tlc.com|travelchannel.com
@@||cdn.scarabresearch.com/js/*/scarab-v*.js$script,domain=remixshop.com
@@||recommender.scarabresearch.com/merchants/*$xhr,domain=remixshop.com
@@||addthis.com/js/*/addthis_widget.js$script,domain=sainsburys.jobs
||nostv.pt/Scripts/fingerprint2.min.js$script,redirect=noopjs,1p
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=iheartradio.ca
@@||iheartradio.ca^$ghide
@@||google-analytics.com/analytics.js$script,domain=umterps.com
@@||evidon.com/geo/*$script,domain=cnet.com|marieclaire.com|techrepublic.com|zdnet.com
@@||cdn.amplitude.com/libs/amplitude-*.gz.js$script,domain=letgo.com
@@||gateway.reddit.com/desktopapi/*$xhr,1p
||fuegodevida.com^$popup,3p,badfilter
@@||nxp.com/*/resources/scripts/analytics/webanalytics.js$script,1p
@@||apply.indeed.com/$frame,1p
@@||anyporn.com/key.jsx$script,1p
@@||static.iqiyi.com/js/player_v1/sdk/*$script,1p
||youboranqs01.com^$3p,badfilter
@@||usopen.org/AppMeasurement.js$script,1p
! Reported through email: many Canadian car sites broken because of
! `d2cmedia.ca` in Peter Lowe's. Examples:
||d2cmedia.ca^$badfilter
||d2cmedia.ca^$~image,~font
||youbora.com^$3p,badfilter
@@||tredir.go.com/capmon/$script,domain=disney.com
||smartsuppchat.com^$3p,badfilter
@@||discover.com/discover/reporting/AppMeasurement.js$1p
@@*$media,domain=camwhores.tv
! fix nfl.com fantasy.nfl.com site and video breakage
@@||static.parsely.com/p.js$script,domain=nfl.com
@@||a.4cdn.org/*.json$xhr,domain=4chan.org
@@||cdn.cxense.com/cx.js$script,domain=mega.cl
@@||v.fwmrm.net/ad/$script,xhr,domain=destinationamerica.com
@@||src.litix.io/core/*/mux.js$script,domain=destinationamerica.com
warszawawpigulce.pl#@#.code-block-5, .eklama, #undermenu-block, .code-block-6
warszawawpigulce.pl##.eklama
@@||ftse.com/Products/*/scripts/analytics_$script,1p
@@||geoip.nekudo.com/api/*$xhr,domain=opentable.com
@@||backend.worldoftulo.com/$script,domain=barometern.se
@@||surveywall-api.survata.com^$domain=survata.net
@@||publicwww.com/images/labels$image,1p
@@||googletagmanager.com/gtm.js$script,domain=hellofresh.com
@@||vice.com/*/AdobeAnalyticsSDK$script,1p
@@||twitter.com/*/profiles/show/*$xhr,1p
@@||twitter.com/*/status/*conversation_id$xhr,1p
@@||mssl.fwmrm.net/p/abc_live/$script,domain=abc.go.com
@@||v.fwmrm.net/ad/g/1$script,domain=abc.go.com
@@/VisitorAPI.js$script,domain=abc.go.com
@@||ajax.googleapis.com^$script,domain=dailywire.com
@@||soundcloud.com^$script,domain=dailywire.com
@@||savings.bizx.info^$domain=sourceforge.net
@@||bizx.info^$websocket,domain=sourceforge.net
! bloomberg videos
@@||cdn.gotraffic.net^$domain=bloomberg.*
@@||js.spotx.tv/directsdk/$script,domain=bloomberg.*
@@||spotxcdn.com/integration/directsdk/$script,domain=bloomberg.*
@@||search.spotxchange.com^$xhr,domain=bloomberg.*
@@||sourcepointcmp.bloomberg.com/ccpa.js$script,domain=bloomberg.*
@@||go.com/disneyid/responder$frame,1p
! linkdrop.net broken (no captcha)
@@||ajax.googleapis.com^$script,domain=linkdrop.net
@@||connect.facebook.*/*/AudienceNetworkPrebid.js$script,domain=cbssports.com
@@||javmost.com/ad*.php$frame,1p
@@||javpost.net^$frame,domain=javmost.com
@@||js.helltraffic.com/fluidplayer/$script,css,domain=tubewolf.com
||js.helltraffic.com/fluidplayer/scripts/webvtt.min.js$script,important,domain=tubewolf.com
tubewolf.com##.bnnrs-player
tubewolf.com##.bnnr
@@||mm-syringe.com^$script,domain=mysanantonio.com
@@||utility.rogersmedia.com/utility.js$domain=todaysparent.com
@@||onphpid.com^$css,1p
@@||wsj.net/*/cxense-candy.js$script,domain=wsj.com
@@||scdn.cxense.com/cx.$script,domain=wsj.com
@@||zqtk.net^$script,domain=wsj.com
@@||androidgreeve.*^$ghide
@@||github.com/*/contributors$xhr,1p
@@||gitlab.com^$xhr,1p
@@||monero.crypto-webminer.com/monero.html$frame,domain=monero-miner.com
||p.jwpcdn.com/*/vast.js$script,important,domain=timesnownews.com
@@||google-analytics.com/analytics.js$script,domain=panerabread.com
@@||googletagservices.com/tag/js/gpt.js$script,domain=pitchfork.com
@@||securepubads.g.doubleclick.net/gpt/pubads_impl$script,domain=pitchfork.com
@@||pub.247-inc.net/psp/platform/*$frame,domain=bbystatic.com
||admost.com^$script,important,domain=sahadan.com
|https://$3p,image,script,domain=damimage.com|imagedecode.com|imageteam.org,badfilter
@@||imgview.pw^$ghide
@@||imgdew.com/js/*$script,domain=imgdew.pw
pasteboard.co##+js(set, nads.createAd, trueFunc)
go.com#@#.has-ad
@@||edgedatg.com/aws/assets/cp/web/assets/js/*/AppMeasurement.js$script,domain=disneynow.go.com
@@||static.adsnative.com/static/js/render.*.js$script,domain=streamable.com
@@||litix.io/core/$script,domain=velocity.com|motortrend.com
@@||fusion.ddmcdn.com/app/*/comscore.streaming.$script,domain=velocity.com|motortrend.com
||computerworld.com/*/gpt_includes.js$script,redirect-rule=googletagservices_gpt.js
@@||adverts.ie/css/$css,1p
riderplanet-usa.com#@##ad_1
adproceed.com#@#.single-ad
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=wwm.rtl.de
hwupgrade.it#@#a[href^="https://www.amazon."][href*="tag="]
hdblog.it#@#a[href^="https://www.amazon."][href*="tag="]
@@||startpage.com^$popup,domain=msn.com
@@||ticketonline.de^$frame,domain=stage-entertainment.de
||marketo.com^$badfilter
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=classicreload.com
@@||easyweb.td.com/*/loggingService.js$script,1p
@@||plugin.intuitcdn.net/ua-parser-js/*/ua-parser.min.js$script,domain=qbo.intuit.com
@@||laola1.at/?proxy=js/build/layout$script,1p
! newser.com broken search by EasyList
@@||google.com/afsonline/*$script,domain=newser.com
@@/isomorphic/system/modules/ISC_Analytics.js$script,1p
@@||instagram.com^$popup,domain=msn.com
/performancetimer.js$badfilter
@@||ipinfo.io/?token$xhr,domain=webtv.ert.gr
@@||trbas.com/jive/$script,domain=baltimoresun.com|capitalgazette.com|chicagotribune.com|citypaper.com|dailypress.com|mcall.com|orlandosentinel.com|pacificsandiego.com|sandiegouniontribune.com|sun-sentinel.com
! broken site vidtudu . com
@@||vidtodo.com^$css,image,domain=vidtudu.com
@@||art19.com^$xhr,domain=merriam-webster.com
@@||graph.facebook.com^$xhr,domain=merriam-webster.com
tomsguide.com#@#.widget-ads
@@||static.sunmedia.tv/integrations/*$script,domain=api.gooru.live|elespanol.com|periodistadigital.tv
*$3p,script,redirect=noopjs,domain=lolalytics.com
@@||dev.visualwebsiteoptimizer.com^$script,domain=cars.usnews.com
/adlead.$domain=~adlead.com|~adlead.pro|~adlead.ru,badfilter
/adlead.$domain=~adlead.com|~adlead.pro|~adlead.ru|~adlead.immo
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=chicagotribune.com|mcall.com
! ranker.com breakage (prev / next)
@@||cdn.zidedge.com/zp/ranker/$script,domain=ranker.com
@@||petametrics.com^$script,domain=ranker.com
@@||popeyes.com/*/clicktrack?$xhr,1p
@@||adserver.pandora.com/haymaker/api/v1/serve/$xhr,1p
@@||s3.amazonaws.com/assets.sidearmsports.com/statcollector/statcollector.min.js$script,domain=bigten.org
||evergage.com^$badfilter
||ti.com/assets/js/headerfooter/$script,badfilter
@@||texasinstruments.evergage.com^$script,domain=ti.com
hawaiitribune-herald.com,thegardenisland.com,westhawaiitoday.com#@#.header-ad
@@||vshare.eu/$popup,domain=putlockers.fm
@@||adobedtm.com^*/satellitelib-$script,domain=virginmobile.ca
dday.it#@#.sponsored
@@||europarl.europa.eu/website/webanalytics/*$script,1p
@@||code.adsales.snidigital.com/conf/ads-config.js$script,domain=travelchannel.com
||tailtarget.com/profiles.js$script,redirect=noopjs,domain=superesportes.com.br,important
nypost.com,pagesix.com#@#.recirc
@@||widgets.outbrain.com/outbrain.js$script,domain=nypost.com|pagesix.com
@@||odb.outbrain.com/utils/get?url$script,domain=nypost.com|pagesix.com
||xbooru.com/script/application.js$badfilter
@@||s2.coinmarketcap.com^$image
@@||load.sumome.com^$script,domain=beewits.com
! fix goducks.com
! broken by '/js/analytics.' in EasyPrivacy
||goducks.com/components/js/analytics.js$script,1p,redirect=noopjs
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=player.radio.com
@@||live.streamtheworld.com/*banners$media,domain=player.radio.com
||tags.bluekai.com/$script,redirect=noopjs,domain=6abc.com|abc30.com|abc7.com|abc7chicago.com|abc7news.com|abc7ny.com|abc11.com|abc13.com
@@||wlne.images.worldnow.com/ads/*.jpg?auto=web$image,domain=abc6.com
@@||wlne.images.worldnow.com/ads/*.png$image,domain=abc6.com
@@||src.fedoraproject.org/static/issues_stats.js$script,1p
@@||puch-ersatzteile.at/static/*/Magento_GoogleAnalytics/*$script,1p
@@||static1.dmcdn.net/playerv5/*$script,domain=laprovence.com
@@||adobedtm.com^*/satellitelib-$script,domain=papers.ssrn.com
@@||cdn.taplytics.com/taplytics.min.js$script,domain=es.wallapop.com
! breakage caused by Yavli-filters in EasyList
@@||youtube.com/yts/jsbin/*$script,domain=breathecast.com|classicalite.com|crossmap.com|hallels.com|newseveryday.com|returnofkings.com
@@||fls-na.amazon.*/1/batch/1/OP/$image,domain=amazon.*
@@||4cdn.org^$script,domain=4chan.org
@@||api.coinmarketcap.com/$xhr,domain=unblock.net
@@||adsynth-ofx-quotewidget-prod.herokuapp.com/api/$xhr,domain=widget-yahoo.ofx.com
!#if !env_chromium
@@||player.aniview.com/script/*/AVmanager.js$domain=inquirer.net
!#endif
! fix broken links at blick.ch
! caused by EasyPrivacy
@@||da.admeira.ch/adm_signaturscript.js$script,domain=blick.ch
@@||browser.sentry-cdn.com/*/bundle.min.js$script,domain=blick.ch
@@||eastprodcdn.azureedge.net/bundles/*velaro$script
||velaro.com^$3p,badfilter
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=boo.tw|b00.tw
@@||tracking.epicgames.com/tracking.js$1p
! mattinopadova .gelocal.it broken page
@@||scripts.repubblica.it/$script,domain=gelocal.it
@@/playvideo.php$frame,domain=myvidster.com
||linetv.tw/public/scripts/ads.js$important,1p
@@||google-analytics.com/analytics.js$script,domain=linetv.tw
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=linetv.tw
@@||naver.com/adcall$xhr,script,domain=vlive.tv
@@||scripts.agilone.com^$frame,domain=davidstea.com
@@||vlscppe.microsoft.com/fp/tags.js$script,1p
@@||cdnperf.com/js/rollbar.js$script,1p
@@||perfops.net^$script,domain=cdnperf.com
||dccss.banggood.com^$badfilter
@@||9anime.*/user/ajax/$xhr,1p
@@||adswizz.com/anon.npr-mp3/*$media,domain=podbay.fm|podbean.com
@@||adswizz.com/anon.npr-podcasts/*$media,domain=podbay.fm|podbean.com
@@||player.fm^$cname
kzstock.blogspot.com#@##ad-target
@@||app.tallo.com/assets/javascripts/app/studentstats/statCount.$script,1p
@@||kolumbus.fi/cgi-bin/counter.cgi$image,1p
||olx.com.br^*/lurker.$badfilter
@@||api.deep.bi/v3/init.js$script,domain=elconfidencial.com
||hawk.pcgamer.com^$badfilter
@@||viu.tv/assets/js/comScore.*.min.js$script,1p
@@||readcomiconline.to/$xhr,1p
@@||adobedtm.com^*/satellitelib-$script,domain=skysportaustria.at
||miniusa.com/etc/designs/mini/js/vendor/tracking/*$script,1p,redirect=noopjs
@@||doubleclick.net/gampad/ads*nhl.com$xhr,domain=imasdk.googleapis.com
@@||static.adsafeprotected.com/vans-adapter-google-ima.js$script,domain=nhl.com
@@||d8rk54i4mohrb.cloudfront.net/js/video.js$script,domain=forbes.com
! scrolling broken drstevenlin .com
drstevenlin.com##html:style(overflow: auto !important;)
tele5.de##.break-ads
||exoclick.com^$doc,badfilter
||exoclick.com^$badfilter
||exoclick.com^$3p
@@||exoclick.com/privacy-and-cookies-policy/*$popup
@@||api.exoclick.com^$domain=exoclick.com
@@||lp-cdn.lastpass.com/lporcamedia/*/dist/scripts/analyticsjs.js$script,1p
detroitnews.com###partner-poster-0
@@||fontspring.com/analytics/hi.gif$image,1p
||thelibertydaily.com^$csp=script-src 'self' *.leadpages.net *.gstatic.com *.google.com *.googleapis.com *.playwire.com *.facebook.com *.bootstrapcdn.com,badfilter
||bigleaguepolitics.com^$csp=script-src 'self' *.leadpages.net *.gstatic.com *.google.com *.googleapis.com *.playwire.com *.facebook.com *.bootstrapcdn.com *.twitter.com *.spot.im,badfilter
@@||googletagmanager.com/gtm.js$script,domain=rappi.com.mx
@@||piasecznonews.pl/wp-content/plugins/wppas/$1p
@@*$media,domain=1movies.is
||acloudvideos.com/video_ads/$media,domain=1movies.is,important
@@||gstatic.com/images/branding/*/adsense$image,domain=safebrowsing.google.com
||curalate.com/api/v1/metrics/
/api/v1/metrics$badfilter
@@||nbc*.com/includes/AppMeasurement.js$script,1p
://adv.$domain=adv.asahi.com|~adv.bet|~adv.blue|~adv.cincsys.com|~adv.cryptonetlabs.it|~adv.derfunke.at|~adv.design|~adv.digimatix.ru|~adv.ec|~adv.ee|~adv.gg|~adv.lack-girl.com|~adv.michaelgat.com|~adv.msk.ru|~adv.neosystem.co.uk|~adv.rest|~adv.ru|~adv.tools|~adv.trinet.ru|~adv.ua|~adv.vg|~adv.vn.ua|~adv.works|~adv.yomiuri.co.jp|~advids.co|~farapp.com|~pracuj.pl|~r7.com|~typeform.com|~welaika.com,badfilter
://adv.$domain=adv.asahi.com|~adv.bet|~adv.blue|~adv.chunichi.co.jp|~adv.cincsys.com|~adv.cryptonetlabs.it|~adv.derfunke.at|~adv.design|~adv.digimatix.ru|~adv.ec|~adv.ee|~adv.gg|~adv.hokkaido-np.co.jp|~adv.lack-girl.com|~adv.michaelgat.com|~adv.msk.ru|~adv.neosystem.co.uk|~adv.rest|~adv.ru|~adv.tools|~adv.trinet.ru|~adv.ua|~adv.vg|~adv.vn.ua|~adv.works|~adv.yomiuri.co.jp|~advids.co|~farapp.com|~pracuj.pl|~r7.com|~typeform.com|~welaika.com
||amazonaws.com^*/funders-$domain=globalvoices.org,badfilter
calgaryherald.com#@#.local-branding
/google-analytics-$~image,badfilter
||scroll.com^$3p,badfilter
@@||ebates.com/dist/static/*/analytics/*$script,1p
@@||rakuten.com/dist/static/*/analytics/*$script,1p
! #1589 csp filters breaking injecting filters / pages
@@*$csp,domain=activistpost.com
@@||d24n15hnbwhuhn.cloudfront.net/libs/amplitude-$script,domain=gethuman.com
@@||cdnjs.cloudflare.com/ajax/libs/videojs-contrib-ads/*/videojs.ads.css$stylesheet,domain=abcya.com
@@||hyundaiusa.com/js/analytics/analytics.js$script,1p
@@||appspot.com/api/*/feed/tag$xhr,domain=apnews.com
@@||djnf6e5yyirys.cloudfront.net/js/friendbuy.min.js$script,domain=imperfectfoods.com|imperfectproduce.com
@@||friendbuy.com^$xhr,frame,domain=imperfectfoods.com|imperfectproduce.com
@@||src.litix.io/videojs/*/videojs-mux.js$script,domain=dmax.de|tlc.de
carbuzz.com##.cb-comments__create-form:style(margin-top: 30px !important;)
carbuzz.com##.cb-post-block-images-swiper .cb-post-block__comments .collapseable-comments__collapse:style(margin-bottom: 0px !important;)
carbuzz.com##.cb-post-block-images-swiper .cb-post-block__comments:style(margin-bottom: 0 !important; top: -97px !important;)
carbuzz.com##.cb-post-block-images-swiper .collapseable-comments__collapseable:style(margin-bottom: -80px !important;)
carbuzz.com##.cb-post-block__comments:style(padding-bottom: 0 !important;)
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=player.sdpg.tv
#@#a[href^="https://badoinkvr.com/"]
queerpride.de#@#.category-advertorial
@@||10minuteschool.com/wp-content/plugins/duracelltomi-google-tag-manager/js/gtm4wp-download-tracker.js$1p
||madmimi.com^$badfilter
@@||discordapp.net/external/*$image,domain=discordapp.com
@@||estaticos.*/elementosWeb/ew/js/multimedia/player/videojs-contrib-ads/videojs.ads.min.js$xhr,domain=diaridegirona.cat|diariodeibiza.es|diariodemallorca.es|diarioinformacion.com|eldia.es|emporda.info|farodevigo.es|laopinioncoruna.es|laopiniondemalaga.es|laopiniondemurcia.es|laopiniondezamora.es|laprovincia.es|levante-emv.com|lne.es|mallorcazeitung.es|regio7.cat|superdeporte.es
||assets.adobedtm.com/launch-$script,important,domain=bellinghamherald.com|bnd.com|bradenton.com|centredaily.com|charlotteobserver.com|elnuevoherald.com|fresnobee.com|heraldonline.com|heraldsun.com|idahostatesman.com|islandpacket.com|kansas.com|kansascity.com|kentucky.com|ledger-enquirer.com|macon.com|mcclatchydc.com|mercedsunstar.com|miamiherald.com|modbee.com|myrtlebeachonline.com|newsobserver.com|sacbee.com|sanluisobispo.com|star-telegram.com|sunherald.com|theolympian.com|thenewstribune.com|thestate.com|tri-cityherald.com
@@||media.nintendo.com/share/include/*/js/tracking/*$script,1p
@@||cpt-static.gannettdigital.com/*-comscore$xhr
@@||en25.com/*/DELOITTECENTRALEUROPELIMITED/*$image,css,script,domain=register.deloittece.com
||xtremetop100.com^$badfilter
||xtremetop100.com^$3p
@@||adobedtm.com/*/satelliteLib-$script,domain=manage.linkt.com.au
@@||blackberrymobile.com/emea/core/modules/*/site_tracking.js$script,1p
@@||ezoic.net/wabbit/$script,domain=gerweck.net
@@||api.unidadeditorial.es/sports/v1/events/*$xhr
@@||googleapis.com/xxx-mightyparty.appspot.com/$3p,xhr,script,frame
@@||static.lci.fr/assets/scripts/common/xiti.js$script,1p
japan-webike.*,webike.*,webike-china.cn#@#.ad_box
japan-webike.*,webike.*,webike-china.cn#@#.ad_title
codeproject.com#@#[style*="base64"]
@@||squid.gazeta.pl/bdtrck/*$frame,domain=wyborcza.pl
@@||squid.gazeta.pl/bdtrck/*$xhr,1p
@@||wallpaperplay.com^$ghide
wallpaperplay.com##.adsbygoogle
@@||imasdk.googleapis.com/pal/sdkloader/pal.js$script,domain=watch.motortrend.com
||googletagservices.com/tag/js/gpt.js$script,redirect=noopjs,domain=ladbible.com
@@||register.drupal.org/ga*.js$xhr,1p
! fix boattrader .com image gallery
@@||boatwizard.com/ads_prebid.min.js$script,domain=boattrader.com
@@||shop.bbc.com/skin/$script,1p
@@||products.wera.de^$xhr,1p
@@||alicdn.com/*/tracker$script,domain=lazada.com.my
@@||sportsnet.ca/wp-content/plugins/$script,css,1p
@@||rte.ie/djstatic/dotie/js/tracker.js$script,1p
@@||src.litix.io/theoplayer/*$script,domain=rte.ie
rte.ie##.alert.callout
rte.ie###gpt-leaderboard
@@||cloudfront.loggly.com/js/loggly.tracker-2.1.min.js$script,domain=rte.ie
@@||cdn.rawgit.com/*/jquery_lazyload/*$script,domain=javmost.com
#@#a[href^="https://laptop-updates.brave.com/download/"]
motherless.com#@#.media-linked
indoxx1.center#@#.lazy
/^https?:\/\/(35|104)\.(\d){1,3}\.(\d){1,3}\.(\d){1,3}\//$popup,3p,badfilter
@@||myreadingmanga.info/wp-content/uploads/*.jpg$image,1p
||myreadingmanga.info/wp-content/uploads/*.gif$image
||pmdstatic.net^$3p,badfilter
@@||api.infowarsmedia.com/videojs-event-tracking/$script,1p
techradar.com#@#a[href^="https://amazon."][href*="tag="]
@@||game-cdn.poki.*^$frame,1p
@@||poki-gdn.com^$frame
||api.stopad.io/link/*/pixel$image,1p,redirect=1x1.gif
@@||yimg.com/ss/rapid$script,domain=aol.com
@@||sibo.nl/catalogus/de/files/html/static/analytics.js$script,1p
@@||motika.com.mk/wp-content/plugins/ajax-hits-counter/$xhr,1p
||motika.com.mk/reklam$image
@@||d2wzl9lnvjz3bh.cloudfront.net/frosmo.easy.js$script,domain=tally-weijl.com
@@||frosmo.com/tally-weijl-product-listing/$xhr,domain=tally-weijl.com
||clustrmaps.com^$image,redirect=32x32-transparent.png,domain=motls.blogspot.com
ebay.com#@#li.s-item:has(span:has-text(SPONSORED))
@@||e-dnevnik.skole.hr^$ghide
@@||viafoura.*^$script,domain=20minutes.fr
@@||rcijeux.fr/game/20minutes/$frame,domain=20minutes.fr
@@||opgg-static.akamaized.net/*/tracker.js$script,domain=op.gg
twitter.com#@#article[role="article"]:has-text(Promoted)
! To counter the adswizz filter in Peter Lowe's list
||adswizz.com^$badfilter
||adswizz.com^$3p
@@||disqus.com/next/login/$popup
! whitelisting recaptcha .net
@@||recaptcha.net/recaptcha/
||rtl.de/pf/resources/js/videotracking.min.js$script,redirect=noopjs,1p
@@||gstatic.com/*/adwords/partnerspublic/partners_public_*/partners/main.dart.js$script
@@||en25.com^$image,domain=eloquaeditors.com
@@||googletagmanager.com/gtm.js$script,domain=carvana.com
@@||moatads.com/aolvidibleapi*$script,domain=bloombergquint.com
/thermostat.js$badfilter
/thermostat.js$script,domain=royle.com
@@||ad.admitad.com/g/*&ulp=http$doc
@@||litix.io/videojs/$script,domain=questod.co.uk
||unileversolutions.com/*/config/analytics.js$script,3p,important,redirect=noopjs
||farnell.com/*tracking.js$script,1p,redirect=noopjs
@@||x.kinja-static.com/assets/packaged-js/trackers$script
||x.kinja-static.com/assets/packaged-js/trackers$script,domain=clickhole.com|deadspin.com|gizmodo.com|jalopnik.com|jezebel.com|kotaku.com|lifehacker.com|splinternews.com|theinventory.com|theonion.com|theroot.com|thetakeout.com,important
clickhole.com,deadspin.com,gizmodo.com,jalopnik.com,jezebel.com,kotaku.com,lifehacker.com,splinternews.com,theinventory.com,theonion.com,theroot.com,thetakeout.com##+js(set, ga, noopFunc)
||ultimedia.com/api/widget/$xhr,domain=techradar.com|tomsguide.com|tomshardware.com|videogamer.com
@@||bazaarvoice.com/prod/static/*/bv-analytics.js$script,domain=chemistwarehouse.com.au
@@||authorityhacker.com/wp-content/*/plugins/duracelltomi-google-tag-manager/*$script,1p
@@||parse.ly/page-data/help/api/analytics/$xhr,1p
@@||viafoura.co^$domain=masslive.com
*/videoplayback?expire$media,redirect=noopmp3-0.1s,domain=webmd.com
@@||googletagmanager.com/gtm.js$script,domain=eclipse.org
@@||modules-prod.franklyinc.com/cml.js$script,domain=newson6.com
arstechnica.com#@#a[href^="https://www.amazon."][href*="tag="]
@@||webticketing2.cinestar.de/app/scripts/provider/GoogleTagManager.js$script,1p
@@||analytics.analytics-egain.com/onetag/$script,domain=xfinity.com
||pushengage.com^$badfilter
*/dw-tracking$script,important,redirect=noopjs,domain=techrepublic.com
||adtech.redventures.io/lib/*/bidbarrel-techrepublic-$script,important,redirect=noop.js,domain=techrepublic.com|zdnet.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,important,domain=player.earthtv.com
@@||dogtime.com/wp-content/plugins/bwp-minify/min/*-google-analytics-$script,1p
@@||los40.com^$ghide
@@||epimg.net^$image,domain=los40.com
! @@*/*slot*.js$script,xhr,domain=los40.com
@@||epimg.net/js/pbs/prebid$script,domain=los40.com
@@||epimg.net/js/comun/avisopcdidomi2.js$script,domain=los40.com
@@||doubleclick.net/tag/js/gpt.js$script,domain=los40.com
@@||doubleclick.net/gpt/pubads_impl_$script,domain=los40.com
@@||doubleclick.net/gampad/ads?$xhr,domain=los40.com
||googlesyndication.com/safeframe/*/container.html$frame,redirect-rule=noop.html,domain=los40.com
||vod.playoncenter.com/videos/*.mp4$media,domain=los40.com
||streamtheworld.com/ondemand/creative?cat=cm-preroll$xhr,redirect=nooptext,domain=los40.com
los40.com##+js(ra, class|style, div[id^="los40_gpt"])
los40.com##+js(set, huecosPBS.nstdX, null)
stories.los40.com##+js(json-prune, config.globalInteractions.[].bsData)
los40.com##[class^="advertising"]
los40.com##iframe[id^="google_ads_iframe"]:style(max-height: 1px !important;)
los40.com##div[id^="google_ads_iframe_"]:style(max-height: 1px !important;)
los40.com##.amp-animate:remove()
los40.com##.estirar.envoltorio_publi
los40.com##.publi_luto_horizontal:style(max-height: 1px !important;)
los40.com##.publi_luto_vertical
los40.com##.cont_webpush
los40.com###adunit
@@||assets.adobedtm.com/extensions/*/AppMeasurement.min.js$script,domain=los40.com
los40.com##+js(set, DTM.trackAsyncPV, noopFunc)
los40.com##+js(no-fetch-if, googlesyndication)
@@||ipinfo.io/json$xhr,domain=futbollibre.online
@@||safecurr.g2afse.com/click?pid=*&offer_id$popup
@@||tvtime.com/ga-assets/*$1p
@@||epaper.eenadu.net/Home/GetAds$xhr,1p
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,domain=epaper.eenadu.net
@@||securepubads.g.doubleclick.net/gpt/pubads_impl$script,domain=epaper.eenadu.net
@@||taboola.com^$script,domain=gizmodo.com.au|lifehacker.com.au
! chess table broken https://2700chess.com/games/vachier-lagrave-wei-r1.1-hamburg-2019-11-03
@@||2700chess.com/js/analysis.js$script,1p
||assets.adobedtm.com/*/satelliteLib$script,redirect-rule=noopjs,domain=8world.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect-rule=noopjs,domain=8world.com
||player.ooyala.com^$script,redirect-rule=noopjs,domain=8world.com
||scorecardresearch.com/*/plugins/$script,redirect=noopjs,domain=8world.com
! broken site https://www.sky.com/watch/title/series/090664e1-402f-492b-ac52-595aed218812/britannia
@@||analytics.global.sky.com/sky-tags/*/sky-tags-without-adobe.min.js$script,1p
@@||sourcepoint.vice.com^$script,xhr,domain=video.vice.com
@@||mac-torrent-download.net^$ghide
mac-torrent-download.net##[href^="//sundhopen.site/"]
@@||metacritic.com/js/omniture/uuid.js$script,1p
@@||pinpng.com^$css,1p
@@||pngfind.com^$css,1p
@@||automate-prod.s3.amazonaws.com/minified_logic.js$xhr,domain=kotaku.com.au
@@||googletagservices.com/tag/js/gpt.js$script,domain=phonearena.com
pcgamer.com#@#.hawk-widget
@@||spankmasters.com/EmbedPlayer.aspx$frame
! broken videos on reuters.com
@@||reutersmedia.net/*/js/rcom-scroll-tracker.js$script,domain=reuters.com
@@||cdn.permutive.com^$script,domain=reuters.com
@@||api.permutive.com/*/batch/$xhr,domain=reuters.com
@@||api.permutive.com/v2.0/*$xhr,domain=reuters.com
@@||googletagmanager.com/gtm.js$script,domain=reuters.com
@@||imasdk.googleapis.com/js/sdkloader/ima3_debug.js$script,domain=reuters.com
@@||pixel.adsafeprotected.com/services/pub$xhr,domain=reuters.com
@@||try.abtasty.com^$script,domain=reuters.com
||try.abtasty.com/shared/analytics$script,domain=reuters.com,important
@@||cdn.mxpnl.com/libs/mixpanel-*-latest.min.js$script,domain=groupme.com
@@||googletagmanager.com^$script,domain=subscriptions.amd.com
@@/gtm.js$script,domain=subscriptions.amd.com
@@||googletagmanager.com/gtm.js$script,domain=pochta.ru
@@||google-analytics.com/analytics.js$script,domain=pochta.ru
@@||captcha.px-cdn.net^$script
@@||perimeterx.net/api/v2/collector/ocaptcha$xhr
! fix fembed.com download button
*$script,3p,domain=fembed.com,badfilter
@@||mixdrop.co^$frame
@@||promo.com/shopify/shopify-store-script.js$script
@@||promo.local/shopify/shopify-store-script.js$script
@@||promo.com/shopify-backend/*/user-videos/public/video-urls$xhr
@@||googletagmanager.com/gtm.js$script,domain=thenorthface.com
@@||tag.rightmessage.com^$domain=conservation-careers.com
@@||tags.bkrtx.com/js/bk-coretag.js$script,domain=thequint.com
||systeme.io^$~image,3p,badfilter
@@||track.tagesanzeiger.ch^$script,1p
@@||tagger.opecloud.com^$xhr,domain=tagesanzeiger.ch
@@||tgt.tamedia.ch/*/api/$xhr,domain=tagesanzeiger.ch
@@||tdn.da-services.ch/libs/prebid$script,domain=tagesanzeiger.ch
@@||amazon.jobs/assets/analytics-$script,1p
@@||en25.com^$script,domain=oracle.com
||t.eloqua.com^$badfilter
||t.eloqua.com^$3p
@@||google-analytics.com/ga.js$script,domain=bimi.jorudan.co.jp
! broken videos at telegraph.co.uk the videos are behind a paywall
! example https://www.telegraph.co.uk/news/2020/06/18/like-churchill-de-gaulle-1940-britain-france-united-against/
@@||notice.sp-prod.net^$frame,domain=telegraph.co.uk
@@||tags.crwdcntrl.net/*/cc.js$script,domain=telegraph.co.uk
@@||privacy-mgmt.com^$script,domain=telegraph.co.uk
||adobedtm.com^*/satellitelib-$script,domain=telegraph.co.uk,important
telegraph.co.uk##+js(set, _satellite, {})
telegraph.co.uk##+js(set, _satellite.getVisitorId, noopFunc)
@@||costco.com.mx/*/js/trackermediator.js$script,1p
! fix player volume button
yugioh.com##.cookie-policy-container-invisible.cookie-policy-container
@@||google.com/js/gweb/analytics/doubletrack.js$script,1p
@@||acdn.adnxs.com/video/mediation/$script,domain=thechive.com
@@||acdn.adnxs.com/video/player/vastPlayer/VastPlayer.js$script,domain=thechive.com
@@||petametrics.com^$script,domain=thechive.com
||advertising.com^$badfilter
||advertising.com^$3p
@@||static.goolive.de/media/static/images/smileys/ad.gif$image
||gratis.com/file/*/global/gtm.min.js$script,1p,redirect=noopjs
*$3p,image,domain=rd.com,badfilter
*$3p,xhr,domain=rd.com,badfilter
@@||viu.com/*/tracking/$script,1p
||amazonaws.com^$xhr,redirect-rule=nooptext,domain=viu.com
viu.com##.ad-ph
viu.com##.banner_ad_label
viu.com##+js(no-xhr-if, mobileanalytics)
@@||ak.sail-horizon.com/spm/spm$script,domain=watch.wwe.com
@@||aliexpress.com^*?af=$3p,popup,domain=umidigi.com
qqcinema21.com#@#.headads
qqcinema21.com##a[rel="nofollow"]:has(img)
begadistrictnews.com.au,bendigoadvertiser.com.au,goulburnpost.com.au,maitlandmercury.com.au,newcastleherald.com.au##.subscribe-article .subscriber-hider:style(display:block!important)
begadistrictnews.com.au,bendigoadvertiser.com.au,goulburnpost.com.au,maitlandmercury.com.au,newcastleherald.com.au##.subscribe-article .subscribe-truncate:style(max-height:unset!important;order:unset!important;)
begadistrictnews.com.au,bendigoadvertiser.com.au,goulburnpost.com.au,maitlandmercury.com.au,newcastleherald.com.au##.subscribe-article .subscribe-truncate::before:style(background:none!important;)
||pega.com^$3p,badfilter
! whentai .com broken pages
@@||whentai.com/combine.js$script,1p
@@||googletagmanager.com/gtm.js$script,domain=kaspersky.fr
@@||google-analytics.com/analytics.js$script,domain=kaspersky.fr
@@||wikia.nocookie.net/*/abtesting,$script,domain=fandom.com
@@||nowgoal.com/Control/GetAd.aspx$script,1p
nowgoal.com##[href^="/ad/"]
@@||afcs.dellcdn.com^$css,domain=dell.com
@@||downloadgameps3.com/wp-content/plugins/*/wpdcookiejs/customcookie.js$script,1p
@@||ccdn.es/advertising-UseCases-factory-js-factory.$script,domain=coches.net
! Idealista rental listing is not shown on third-party websites
||idealista.com^$3p,domain=~idealista.com,badfilter
@@||apollo-ireland.akamaized.net/*/files/*$image,domain=otodom.pl
@@||bloomberg.com/*/captcha/captcha.js$script,1p
@@||hotelscombined.com/*/captcha/captcha.js$script,1p
@@||seekingalpha.com/*/captcha/$script,1p
@@||pxchk.net/api/*/collector/ocaptcha$xhr
@@||coreldraw.com/static/common/scripts/omni-tracking/omni-tracking.min.js$script,1p
@@||ipm.corel.com/static/common/scripts/omni-tracking/omni-tracking.min.js$script,1p
@@||securepubads.g.doubleclick.net^$script,domain=bearteach.com
bearteach.com###externalinject-gpt-passback-iframe
! broken pages / videos due to blocking recoco
@@||recoco.it^$image,xhr,domain=heavy-r.com|porngo.com|showbiz.cz|tostreamit.com|vumoo.to|bodysize.org
! as suggested https://www.reddit.com/r/uBlockOrigin/comments/esv7pe/servicehotelscom_not_working_properly_with_ublock/
@@||travel-assets.com/datacapture/$script,domain=service.hotels.com
@@||google-analytics.com/analytics.js$script,domain=payment.mts.ru
@@||src.litix.io/jwplayer/$script,domain=video.eurosport.com
@@||assets.adobedtm.com/extensions/*/AppMeasurement.min.js$script,domain=video.eurosport.com
! videos broken hideout .co
@@||services.brid.tv/player/build/plugins/adunit.js$script,domain=hideout.co
@@||hideout.*^$script,1p
@@||en25.com^$domain=plan.seek.intel.com
@@/embed/*$frame,domain=underhentai.net
@@||uiz.io/links/popad$popup
@@||mediadebrid34.site/ads1/css/*$css,1p
! ilmeteo .it broken video
@@||4strokemedia.com^$xhr,script,domain=ilmeteo.it
||imasdk.googleapis.com/js/sdkloader/ima3.js^$script,redirect-rule=noopjs,domain=ilmeteo.it
dziennikbaltycki.pl,dzienniklodzki.pl,dziennikpolski24.pl,dziennikzachodni.pl,echodnia.eu,expressbydgoski.pl,expressilustrowany.pl,gazetakrakowska.pl,gazetalubuska.pl,gazetawroclawska.pl,gk24.pl,gloswielkopolski.pl,gol24.pl,gp24.pl,gra.pl,gs24.pl,kurierlubelski.pl,motofakty.pl,naszemiasto.pl,nowiny24.pl,nowosci.com.pl,nto.pl,polskatimes.pl,pomorska.pl,poranny.pl,sportowy24.pl,strefaagro.pl,strefabiznesu.pl,stronakobiet.pl,telemagazyn.pl,to.com.pl,wspolczesna.pl#@#+js(set-constant, pp_adblock_is_off, trueFunc)
||px.moatads.com/pixel.gif$image,domain=abcya.com,redirect-rule=1x1.gif
! netaffiliation .com Peter Lowe's
||metaffiliation.com^$badfilter
||metaffiliation.com^$3p,domain=~netaffiliation.com
||netaffiliation.com^$badfilter
||netaffiliation.com^$3p
@@||jssdkcdns.mparticle.com/js/*/mparticle.js$script,domain=nbc.com
@@||gamepciso.com/wp-content/plugins/*/wpdcookiejs/customcookie.js$script,1p
@@||sourcepoint.mgr.consensu.org/$xhr,domain=spiegel.de
@@||gstatic.com^$script,domain=pornhub.com|pornhub.org|pornhub.net
@@||unifi.com.my/*/gtm.js$script,1p
||fox43.com/assets/js-libs/comscore/comscore.min.js$script,redirect=noop.js,1p
@@||qualifioapp.com^$script,frame,domain=football365.fr
||5newsonline.com/assets/*/comscore.min.js$script,1p,redirect=noopjs
||blockadblock.com^$badfilter
||blockadblock.com^$3p
@@||try.abtasty.com/$script,domain=shop.euromaster.de
@@||google-analytics.com/analytics.js$script,domain=shop.euromaster.de
@@||redfin.com/rift$xhr,1p
||cedexis.com^$3p,badfilter
! Conversation broken allthingsvegas .com
@@||pix.spot.im/api/$xhr,domain=allthingsvegas.com
amnews.com###div-gpt-ad-instory-bottom
@@||adobedtm.com^*/satellitelib-$script,domain=airtel.in
! bz-berlin.de broken video player
@@||showheroes.com/playlist/*$xhr,domain=bz-berlin.de
@@||static.showheroes.com^$script,domain=bz-berlin.de
@@||video-library.showheroes.com^$script,domain=bz-berlin.de
@@||firestonecompleteautocare.com/*/VisitorAPI.js$script,1p
@@||piwik.discoursehosting.net^$domain=forum.matomo.org
||spade.sci.twitch.tv^$badfilter
||spade.sci.twitch.tv^$3p
||ntv.io^$badfilter
||ntv.io^$3p,badfilter
||ntv.io^$3p,domain=~teslarati.com
@@||modules-prod.franklyinc.com/cml.js$script,domain=news9.com
@@||nbc29.com/*/arcAdsJS/$script,1p
@@||cloudfront.net/wp-content/themes/visualdna-com/*$css,domain=visualdna.com
@@||googletagmanager.com/gtm.js$script,domain=vier.be
@@||cdn.stat-track.com/statics/moosend-tracking.min.js$script,domain=miranpeterman.com
@@||wpfc.ml/b.gif$image,domain=uniquestream.net
@@||bamgrid.com^$domain=disneyplus.com|starplus.com
@@||googletagservices.com/tag/js/gpt.js$script,domain=abola.pt
@@||securepubads.g.doubleclick.net/gpt/pubads_impl$script,domain=abola.pt
@@||tpc.googlesyndication.com/safeframe/*/container.html$other,domain=abola.pt
@@||securepubads.g.doubleclick.net/gampad/$xhr,domain=abola.pt
! broken slide
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,domain=jn.pt|ojogo.pt|plataformamedia.com
@@||securepubads.g.doubleclick.net/gpt/pubads_impl$script,domain=jn.pt|ojogo.pt|plataformamedia.com
@@||pingjs.qq.com/h5/stats.js$script,domain=ushareit.com
@@||coral.coralproject.net^
@@||ak.sail-horizon.com/spm/spm$script,domain=cnbc.com
examiner.com.au,theadvocate.com.au,thecourier.com.au##.subscriber-hider:style(display:inherit!important)
examiner.com.au,theadvocate.com.au,thecourier.com.au##.subscribe-truncate::before:style(background:none!important)
examiner.com.au,theadvocate.com.au,thecourier.com.au##.subscribe-truncate:style(order:0!important;max-height:inherit!important)
||widgets.outbrain.com/outbrain.js$script,redirect=noopjs,domain=newsbreak.com
@@||images.digi.com.my/*/google_tag/*$script,1p
||widgets.outbrain.com/outbrain.js$script,redirect=noopjs,domain=bongino.com
mariogames.be#@##adsContainer
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=mariogames.be
! elpais.com
@@||epimg.net^$image,domain=elpais.com
@@||epimg.net/js/comun/comun.min.js$script,domain=elpais.com
@@||epimg.net/js/comun/*/lazyload.min.js$script,domain=elpais.com
||static.adsafeprotected.com/vans-adapter-google-ima.js$script,redirect=noopjs,domain=forbes.com
pornhub.com#@#a[href^="https://www.moscarossa.biz/"]
torino2006.it#@#a[href^="https://www.moscarossa.biz/"]
recensionihot.com#@#a[href^="https://www.moscarossa.biz/"]
@@||inside-graph.com^$domain=bergdorfgoodman.com|horchow.com|lastcall.com|neimanmarcus.com
@@||bounceexchange.com^$domain=thelaundress.com
! animeland .us download buttom broken
@@||animeland.us^$script,1p
@@||cdn.broadstreetads.com/init-*min.js$script,domain=vtdigger.org
@@||hcaptcha.com/captcha/$xhr
! CNAME akinator .com
@@||akinator.com.cdn.ezoic.net^$css,font,image,script,domain=akinator.com
||onemanhua.com/js/dynamicjs.js$badfilter
! nascar .com videos broken
@@||nascar.com^$xhr,domain=imsa.com|nascar.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=imsa.com,redirect-rule=google-ima.js
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=nascar.com
@@||moatads.com/nascar$script,domain=nascar.com
@@||mb.moatads.com^$script,domain=nascar.com
@@||nascar.com/tagmanager/*/prod/advertising-tags.js$script,1p
||allporncomic.com^*=$script,badfilter
@@||js.maxmind.com/js/apis/geoip2/*/geoip2.js$script,domain=12handz.com
@@||downdetector.com/*/javascript/adscript.js$script
@@||static.ziffdavis.com/sitenotice/evidon-barrier.js$script,domain=allestoringen.*|downdetector.*|xn--allestrungen-9ib.*
@@||static.ziffdavis.com/sitenotice/*/translations/$script,domain=allestoringen.*|downdetector.*|xn--allestrungen-9ib.*
@@||securepubads.g.doubleclick.net/gpt/pubads_$script,domain=allestoringen.*|downdetector.*|xn--allestrungen-9ib.*
@@||imasdk.googleapis.com/js/sdkloader/ima3$script,domain=vmf.edge-apps.net
@@||iframe.statics.space/magma/stable/libs/contribAds/*/videojs.ads.min.js$script,domain=vmf.edge-apps.net
! CNAME
@@||youtube-ui.l.google.com^$frame
@@||edgecastcdn.net^$script,frame
@@||twimg.twitter.map.fastly.net^$script
*$image,css,3p,xhr,domain=thepiratebay.org,badfilter
*$xhr,domain=thepiratebay.org,badfilter
! CNAME https://www.reddit.com/r/uBlockOrigin/comments/fzzua6/no_subtitle_on_uptostream_with_firefox/
@@||uptobox.com^$xhr,domain=uptostream.com
! CNAME https://github.com/NanoMeow/QuickReports/issues/3028#issuecomment-613626867
@@||sp-prod.net^$script,xhr,domain=spiegel.de
@@||hulkshare.com/combine/*$script,1p
@@||assets.adobedtm.com/*/satelliteLib-$script,domain=mitelcel.com
|https://$frame,3p,domain=series9.to,badfilter
! CNAME https://github.com/uBlockOrigin/uAssets/issues/7264
@@||pxys.ezoic.net^$font,domain=forum.thaivisa.com
||techsidea.website^$popup,badfilter
||onlineshopping.website^$popup,3p,badfilter
@@||quiz.stroeermediabrands.de/$script,xhr,domain=kino.de
@@||geo-targetly.com/geolocation$3p,script,domain=stache.com
! trafic .ro blocked Peter Lowe's
||trafic.ro^$badfilter
||trafic.ro^$3p
|https://$script,3p,domain=thepiratebay.org,badfilter
*$script,3p,domain=animepahe.com,badfilter
@@||google.*/search$popup
*$script,3p,domain=putlockertv.to,badfilter
@@||js.duhnet.tv/*/player/html5/$script,domain=cnnturk.com
@@||scdn.co/cdn/js/gtag.$script,domain=spotify.com
@@||spclient.wg.spotify.com/$xhr,domain=spotify.com
||d26b395fwzu5fz.cloudfront.net/keen-tracking-$script,redirect=noopjs,domain=campaign.stickr.co
||valuecommerce.com^$badfilter
||valuecommerce.com^$3p
! unbreak asianclub player
@@||asianclub.*/asset/default/player/plugins/vast$script,1p
wallpaperaccess.com#@#.ads1
wallpaperaccess.com##+js(nano-sib)
@@||svc.dynamics.com^*t/$frame
||svc.dynamics.com/f/m/
washingtonpost.com#@#.pb-md.pt-md
order-order.com#@#.tag-sponsored
! broken by french list https://github.com/uBlockOrigin/uAssets/issues/6851#issuecomment-626328180
*$frame,3p,domain=vidcloud9.com,badfilter
! unbreak clipwatching player on firefox
!#if env_firefox
@@*$csp=worker-src 'none',domain=clipwatching.com
!#endif
! CNAME broken video pornerbros .com
@@||amazonaws.com^$xhr,domain=pornerbros.com
! femmeactuelle .fr broken videos
@@||tra.scds.pmdstatic.net/advertising-core/$script,xhr,domain=femmeactuelle.fr
! moondoge.co.in unbreak timer
@@||moondoge.co.in/js/fingerprint2.js$script,1p
! unbreak cartoonth12.com player
*$script,3p,domain=cartoonth12.com,badfilter
! amazon_apstag.js
||amazon-adsystem.com/*/apstag.js$script,xhr,redirect-rule=amazon_apstag.js:5
@@||reference.medscape.com/public/vptrack_iframe.html$frame,1p
*$script,image,css,frame,3p,domain=animetrick.com,badfilter
! unblock treasuredata .com home page
||treasuredata.com^$badfilter
||treasuredata.com^$3p
@@||log.mmstat.com/eg.js$script,domain=youku.com
@@||ws.mmstat.com/ws$websocket,domain=v.youku.tv
@@||insights-collector.newrelic.com/*/events$xhr,domain=diariosur.es|diariovasco.com|elcorreo.com
||sibautomation.com^$frame,redirect=noopframe
@@||api.ipstack.com/*access_key=$xhr,domain=acehardware.com
@@||c.s-microsoft.com/mscc/statics/*$css,domain=microsoft.com
@@||pier1.com/static/*/js/analytics.bundle.js$script,1p
||streamplay.*/jquery-$badfilter
*$image,redirect-rule=1x1.gif,domain=play.cadenaser.com
@@||fmovies.to/subtitles/*$xhr
@@||googletagmanager.com/gtm.js$script,domain=movistar.es
! cb2.com, balance.vanillagift.com
@@||ssl.kaptcha.com/collect/sdk$script,xhr
@@-ad0.$domain=azure.com
@@-ad1.$domain=azure.com
@@-ad2.$domain=azure.com
@@-ad3.$domain=azure.com
@@-ad4.$domain=azure.com
@@-ad5.$domain=azure.com
@@||wcs.naver.net/wcslog.js$script,domain=happymoney.co.kr
*$script,redirect-rule=noopjs,domain=corriere.it
||cdn.parsely.com/keys/nfl.com/p.js$script,important,redirect=noop.js,domain=nfl.com
*$popup,domain=uptobox.com,badfilter
! CNAME https://forums.lanik.us/viewtopic.php?p=154928#p154928
@@||sdv.fr^$script,domain=ladepeche.fr
*$script,3p,domain=zt-za.com,badfilter
*$frame,3p,domain=zt-za.com,badfilter
*$script,3p,domain=zt-protect.com,badfilter
*$script,3p,domain=zt-protect.net,badfilter
@@||www.googletagmanager.com/gtm.js$script,domain=vw-sklep.pl
getcoloringpages.com#@#.adsBlock
*$script,redirect-rule=noopjs,domain=hopkinssports.com
/transparent.gif?ray=$badfilter
||crazyegg.com^$badfilter
||crazyegg.com^$3p
@@||media.larena.it/media/lib/cmp/quantcast.js$script,1p
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=larena.it
*$script,domain=larena.it,redirect-rule=noopjs
! unblock items on wotcheatmods
*$css,3p,domain=wotcheatmods.com,badfilter
*$script,3p,domain=wotcheatmods.com,badfilter
*$image,3p,domain=wotcheatmods.com,badfilter
@@||api.useinsider.com^$domain=lenovo.com
@@||image.useinsider.com/lenovosg/$image,domain=lenovo.com
@@||inside-graph.com^$domain=lenovo.com
@@||confirmit.com/api/$domain=lenovo.com
||opensubtitles.org^*.js|$script,domain=opensubtitles.org,badfilter
! cutcaptcha.com|filecrypt.* CNAME
@@||bullads.net^$script,frame,xhr,domain=filecrypt.co|cutcaptcha.com|filecrypt.cc
@@||static.motortrader.com.my/advert/$image,domain=motortrader.com.my
@@||choice.faktor.io^$frame,script,xhr,domain=gids.tv
! alidns.com CNAME
@@||alibaba.tanx.com^$domain=alidns.com
@@||adobedtm.com^*/satellitelib-$script,domain=finishlibrary.steelcase.com
|https://$xhr,3p,domain=kimcartoon.to,badfilter
@@||mensjournal.com.cdn.ezoic.net^$domain=mensjournal.com
! youthhealthmag broken search
|https://$script,3p,domain=youthhealthmag.com,badfilter
! vcpost broken search
|https://$script,3p,domain=vcpost.com,badfilter
! universityherald broken search
|https://$script,3p,domain=universityherald.com,badfilter
! vix .com broken page
@@||cdn.taboola.com/libtrc/$script,domain=vix.com
.net/ads/$badfilter
nfmovies.com#@#+js(aopr, $myui)
@@||nfmovies.com/static/side.jpg$xhr,1p
|https://$xhr,3p,domain=cloudvideo.tv,badfilter
|https://$css,3p,domain=cloudvideo.tv,badfilter
@@||cdn.plyr.io/*/plyr.svg$xhr,domain=mp4upload.com
arthromed.de#@##ad_3
! broken video on cookinggames .com
@@||bitent.com/lock_html5/adPlayer/v*/adPlayer.js$script,domain=cookinggames.com
! unbreak saltspringexchange .com
saltspringexchange.com#@#.single-ad
! broken videos youav .com
*$script,3p,domain=youav.com,badfilter
@@||wp.com/*/wp-content/plugins/master-slider/public/assets/css/blank.gif$image,domain=hearthstone-decks.net
! aupetitparieur .com videos broken
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=aupetitparieur.com
@@||pxys.ezoic.net^$domain=lanaciondigital.es
! themeslide .com broken
*$xhr,redirect-rule=noopjs,domain=themeslide.com
@@||front.usereserva.com/libraries/*/GTM.min.js$script,1p
@@||fhi.no^$cname
||logsss.com^$badfilter
@@||google.*^$cname
/ads1.$badfilter
! broken video player https://www.gmx.net/magazine/sport/fussball/bundesliga/transfermarkt-2020-bundesliga-coronakrise-euro-zweimal-umdrehen-34888082
@@||fluid.4strokemedia.com/www/delivery/asyncspc.php$xhr,1p
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=4strokemedia.com
@@||cand.li/api/assets/$xhr,1p
@@||cravitus.*/api/adverts/*$xhr,domain=cravitus.com|cravitus.lt
! broken videos on pornhive .tv => videobin .co/embed
*$frame,3p,domain=pornhive.tv,badfilter
@@||s0.2mdn.net/ads/studio/Enabler.js$script,domain=kabum.com.br
@@||couponcabin.com/ga.*.js$1p
||slickdeals.net/scripts/*/js-campaign-tracking.js$script,1p,redirect=noop.js
||slickdeals.net/scripts/*/SD_Analytics.js$script,1p,redirect=noop.js
@@||ezodn.com/detroitchicago/$script
@@||ezodn.com/detroitchicago/consentsettings.js
@@||ezodn.com/cmp/v2/cmp.js$script
@@||gvl.ezodn.com/gvlcache/GVL.json$xhr
@@||ezodn.com/v2/cmp.js$script
###ez-sidebar-wall-left
@@||xozilla.com^$cname
||cxense.com^$badfilter
||cxense.com^$3p
@@||api.ipstack.com/check?access_key=$xhr
||ipstack.com^$badfilter
! sedoparking .com unbreak
||sedoparking.com^$badfilter
verizon.com##+js(set, newPageViewSpeedtest, noopFunc)
! Verizon chat broken (https://www.verizon.com/support/contact-us/)
! unlock disqus stuff
*$script,3p,domain=hentaihaven.org,badfilter
humanbenchmark.com##+js(set, pubg.unload, noopFunc)
@@||t8cdn.com/js/lazyload.min.js$script,domain=tube8.*
! moviesweb .info thunbs + player broken
|https://$frame,3p,domain=moviesweb.info,badfilter
|https://$image,3p,domain=moviesweb.info,badfilter
@@||message-fra.sp-prod.net^$script,xhr,domain=manager-magazin.de
||doubleclick.net/tag/js/gpt.js$script,redirect-rule=googletagservices_gpt.js,domain=aristeguinoticias.com
@@||news12.com^$frame,1p
@@||treg.hearstnp.com/treg.js$script,domain=sfchronicle.com|sfgate.com
politico.com##+js(set, generateGalleryAd, noopFunc)
||googlevideo.com^$media,redirect=noopmp4-1s,domain=mlb.com
! CNAME science-et-vie .com broken by some "clever" regex in liste fr (imported by adguard fr)
@@||science-et-vie.com^$cname
@@||assets.adobedtm.com^*/mbox-contents-$script,domain=nsat.collegeboard.org
hubblespacetelescope.blogspot.com#@#.vertical-ads
! tegna sites broken by -tracking.js? in EasyPrviacy
*/tegna-tracking.js$script,important,1p,redirect=noop.js
@@||ogjs.infoglobo.com.br/*/scripts/templates/advertising/$script,domain=oglobo.globo.com
@@||cdn.dynamicyield.com/api/$script,domain=washingtonexaminer.com
!#if env_chromium
@@||subaru.com/guides/*/libs/adobe/AppMeasurement.js$script,1p
!#endif
@@||track.rundschau-online.de/cre-1.0/tracking/$script,1p
@@||track.rundschau-online.de/*/static/jssdk.js$script,1p
@@||track.rundschau-online.de/*/api/$xhr,1p
officedepot.co.cr##+js(set, mediator, noopFunc)
officedepot.co.cr##+js(set, Object.prototype.subscribe, noopFunc)
||groupbycloud.com/gb-tracker-client-3.min.js$domain=officedepot.co.cr,important
officedepot.co.cr##+js(set, gbTracker, {})
officedepot.co.cr##+js(set, gbTracker.sendAutoSearchEvent, noopFunc)
!#if env_firefox
||circularhub.com^$3p,badfilter
!#endif
@@||static.wellsfargo.com/tracking/main/utag.js^$script,domain=wellsfargo.com
@@||cdn-net.com/cc.js$script,domain=showroomprive.com
eslint.org#@#.sponsor-link
|https://$xhr,3p,domain=zippyshare.com,badfilter
! CNAME https://github.com/uBlockOrigin/uAssets/issues/7872
@@||privacy-mgmt.com^$script,domain=n-tv.de
! cname https://github.com/uBlockOrigin/uAssets/issues/7589#issuecomment-687312936
@@||privacy-mgmt.com^$script,domain=chip.de
praxistipps.chip.de#@#a[target][href^="https://x.chip.de/"]:upward(div[id])
@@||uid.mavencoalition.io^$xhr,domain=yogajournal.com
! cname => bild .de tweet blocked => https://www.bild. de/digital/smartphone-und-tablet/handy-und-telefon/apple-laedt-ein-iphone-12-wird-am-15-september-vorgestellt-72806876.bild.html
@@||privacy-mgmt.com^$script,domain=bild.de
@@||arthromed.de^$ghide
@@||arthromed.de/fileadmin/*$image,1p
@@||maps.googleapis.com/maps/api/*$image,domain=arthromed.de
@@||sp-prod.net/wrapperMessagingWithoutDetection.js$script,domain=bz-berlin.de
!#if env_mobile
@@||tags.crwdcntrl.net^*/cc_af_ajax.js$script,domain=pigeons.biz
!#endif
@@||sp-prod.net^$xhr,domain=sport1.de
! unbreak emedemujer.com images
@@||emedemujer.com/wp-content/plugins/dfp-ads/assets/js/google-ads.min.js$script,1p
! cname handelsblatt .com broken
@@||privacy-mgmt.com^$script,domain=handelsblatt.com
@@||geo.leadboxer.com/GeoIpEngine/$script,domain=opentracker.net
||doubleclick.net/tag/js/gpt.js$script,redirect-rule=googletagservices_gpt.js,domain=usnews.com
usnews.com##+js(set, Object.prototype.vjsPlayer.ads, noopFunc)
! cname https://github.com/uBlockOrigin/uAssets/issues/7928
@@||privacy-mgmt.com^$script,domain=faz.net|focus.de|golem.de|stern.de
@@||promotique.com.au^*/Common/ga.js$script,1p
! unbreak push home page vendigamus .com
||vendigamus.com^$badfilter
||vendigamus.com^$3p
! pornvibe .org some videos broken blocking https://ssl.p.jwpcdn.com/6/12/jwplayer.js
*$script,3p,domain=pornvibe.org,badfilter
! sun-sentinel .com today's top videos broken
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=sun-sentinel.com
! slide show broken https://www.floridatravellife.com/gallery/historic-snapshots-of-baseball-heroes-spring-training-in-florida/
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=floridatravellife.com
@@||open.spotify.com^$cname
@@||itorrents.org/torrent/$popup
@@||torrage.info/download$popup
@@||d28julafmv4ekl.cloudfront.net/*.mp3?$media,domain=imdb.com
@@||googletagmanager.com/gtm.js$script,domain=lavanguardia.com
|https://$script,3p,domain=cloudvideo.tv,badfilter
! meilleurpronostic .fr video broken
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=meilleurpronostic.fr
! imagefap unbreaking videos
|https://$xhr,3p,domain=imagefap.com,badfilter
! comments broken lequipe .fr
@@||lequipe.fr^$cname
||lequipe.fr/*/prebid.js$redirect-rule=noopjs
@@||universal-sci.com/detroitchicago/minneapolis.js$script,1p
@@||universal-sci.com/detroitchicago/rochester.js$script,1p
@@||ssl.google-analytics.com/ga.js$script,domain=universal-sci.com
||exs.pl/embed*.php$script,domain=~wgospodarce.pl|~szczecinek.com|~polityka.pl|~ototorun.pl|~natemat.pl|~plonszczak.pl,badfilter
||exs.pl/embed*.php$script,domain=~wgospodarce.pl|~szczecinek.com|~polityka.pl|~ototorun.pl|~natemat.pl|~plonszczak.pl|~24jgora.pl|~24wroclaw.pl|~brodnica-cbr.pl|~ciechanowinaczej.pl|~ddb24.pl|~e-wyszogrod.pl|~egarwolin.pl|~egorzow.pl|~ekspresjaroslawski.pl|~eprzasnysz.pl|~esiemiatycze.pl|~fakty.bialystok.pl|~galopuje.pl|~golub-cgd.pl|~gpr24.pl|~ibialoleka.pl|~ibielsk.pl|~ikampinos.pl|~imokotow.pl|~inowroclaw.info.pl|~iochota.pl|~iotwock.pl|~ipragapoludnie.pl|~iskierniewice.pl|~itvpiaseczno.pl|~izabelin24.pl|~izoliborz.pl|~izyrardow.pl|~kurierbytowski.com.pl|~kurierpodlaski.pl|~lipno-cli.pl|~lowicz24.eu|~mylomza.pl|~nolesnica.pl|~nowinynyskie.com.pl|~nswiecie.pl|~nwloclawek.pl|~olawa24.pl|~poluje.pl|~pultusk24.pl|~rypin-cry.pl|~sejny.net|~splendo.pl|~tp.com.pl|~tulegnica.pl|~twojradom.pl|~wabrzezno.pl|~wideoportal.tv|~wio.waw.pl|~wterenie.pl|~zambrow.org|~zlotowskie.pl|~zycie.pila.pl|~zyciekalisza.pl
@@||ziyu.net^$domain=tenki-yoho.com
@@||ing.pl^$cname
! cname https://github.com/NanoMeow/QuickReports/issues/4824
@@||privacy-mgmt.com^$script,domain=wunderweib.de
! CNAME https://github.com/uBlockOrigin/uAssets/issues/8033
@@||privacy-mgmt.com^$script,domain=praxisvita.de
@@||cdn.playwire.com/bolt/js/zeus/embed.js$script,domain=neopets.com
@@||lubin.pl^$cname
@@||ze.tt/wp-content/plugins/zett-cmp/dist/sourcepoint.js$script,1p
@@||sp-prod.net/wrapperMessagingWithoutDetection.js$script,domain=ze.tt
@@||cdn.privacy-mgmt.com/wrapperMessagingWithoutDetection.js$script,domain=giga.de|spieletipps.de
! thehockeywriters.com broken images
@@||ezojs.com/detroitchicago/cmbv2.js$script,domain=thehockeywriters.com
@@||google-analytics.com/analytics.js$script,domain=ads.spotify.com
@@||link.theplatform.com/*/media/*?affiliate=$xhr,domain=fox.com
! CNAME broken site https://www.netzwelt.de/
@@||privacy-mgmt.com^$script,domain=cmp.netzwelt.de
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=netzwelt.de
hwupgrade.it#@#.wrapper-xyz
@@||das-bumerang-projekt.de/*/boomerang.js$script,1p
@@||serviceyock.me/api/advertise/$xhr,domain=yock.games
@@||omggamer.com/detroitchicago/dayton.js$script,1p
! lebigdata .fr, objetconnecte .net broken by detroitchicago filter
@@||lebigdata.fr/detroitchicago/$script,1p
lebigdata.fr##.background-cover
||lebigdata.fr/wp-content/uploads/*/cote.png$image
@@||objetconnecte.net/detroitchicago/dayton.js$script,1p
||bde4.com^$csp=script-src 'self' * 'unsafe-inline',badfilter
||bde4.cc^$csp=script-src 'self' * 'unsafe-inline',badfilter
@@||javbucks.com^$css,domain=javhd.com
! Image unviewable on Vivaldi
||otaserve.net^$frame,redirect-rule=noop.html,domain=chan.sankakucomplex.com
chan.sankakucomplex.com##iframe[src^="//c.otaserve.net"]
@@||votespa.com/banners/*$image,1p
uktvplay.uktv.co.uk##.video-overlay
uktvplay.uktv.co.uk##.vjs-ad-control-bar.vjs-control-bar
store.petvalu.com##.store_locator_loading
@@||caradisiac.com^$cname
! animepahe broken images
@@||animepahe.com^$cname
hero-magazine.com###header:style(position: inherit !important;)
!#if env_firefox
@@||googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=caminogeek.com
!#endif
@@||ads.adthrive.com/sites/*/ads.min.js$script,domain=a-z-animals.com|brewerfanatic.com|northsidebaseball.com|pimylifeup.com|twinsdaily.com
@@||ads.adthrive.com/builds/core/*$script,domain=a-z-animals.com|brewerfanatic.com|northsidebaseball.com|pimylifeup.com|twinsdaily.com
pimylifeup.com##+js(no-fetch-if, marmalade)
a-z-animals.com,brewerfanatic.com,northsidebaseball.com,pimylifeup.com,twinsdaily.com#@#.adthrive
a-z-animals.com,brewerfanatic.com,northsidebaseball.com,twinsdaily.com#@#.adthrive-video-player
! egy.best broken download buttons
||cdn-static.egybest.*/packed/$badfilter
||securepubads.g.doubleclick.net/tag/js/gpt.js$script,important,redirect=noop.js,domain=indy100.com
! broken video => https://www.boysfood. com/free-porn-videos/39188768/perfect-boobs-nia-nacci-in-action
@@||googleads.github.io/videojs-ima/$css,domain=boysfood.com
! strict-blocked and broken by Peter Lowe's and anti-adb
||crypto-loot.org^$badfilter
||crypto-loot.org^$3p
@@||ssl-images-amazon.com/*/satelliteLib-$script,domain=audible.*
! unviewable subtitle https://github.com/easylist/easylist/commit/4282a904a8036cf8b7d81247ba910e99ddb063e7
digg.com##.single-story > header:style(margin-top: 40px !important)
@@||news.com.au/*/meta-analytics/$script,1p
! unlock biroads .com
||biroads.com^$badfilter
||biroads.com^$3p
@@||sensic.net^$frame,domain=hessenschau.de
businessinsider.com##+js(nosiif, setInterval)
autoblog.com###ymm-sub-nav:style(top:0px !important)
! broken page https://www.beppegrillo.it/grilloteca/
beppegrillo.it#@#a[href^="https://www.amazon."][href*="tag="]
@@||imasdk.googleapis.com/js/sdkloader/ima3$script,xhr,domain=venn.tv
*$script,3p,domain=coinmarketcap.com,badfilter
! babesxworld site blocked by french list
*$script,domain=babesxworld.com,badfilter
||go.netcraftsmen.com^$1p,frame
! allow sign-in on kitsunekko.net
@@||apis.google.com/js/platform.js$script,domain=kitsunekko.net
@@||cbsistatic.com/*/js/compiled/siteAdsBidBarrel.js$script,domain=gamespot.com
player.tubia.com#@#.companion-ads
researchgate.net##.lite-page__header-navigation--with-ad:style(top: 0 !important;)
researchgate.net##.research-resources-summary__inner.is-sticky:style(top: 0 !important;)
! darknetdiaries..com cname
@@||adserver.va3.megaphone.cloud^$media,domain=podigee.com
||data.over-blog-kiwi.com^$badfilter
! nydailynews.com TODAY'S TOP NEWS VIDEOS on article pages
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=nydailynews.com
! unbreak the site (Peter Lowe's)
||mparticle.com^$badfilter
||mparticle.com^$3p
seazon.fr##+js(no-fetch-if, url:ipapi.co)
! Fix chatbot on https://brave.com/brave-ads/ via Peter Lowes List
||targeting.api.drift.com^$badfilter
@@/wp-content/plugins/woocommerce-google-adwords-conversion-tracking-tag/*/admin$1p
@@||pch.com^$cname
@@||microcat-america.superservice.com/content/microcat-dist/js/$script,1p
||myaccount.chicagotribune.com/assets/scripts/tag-manager/googleTag.js$script,redirect=googletagmanager.com/gtm.js,important
! temporary fix https://forums.lanik.us/viewtopic.php?f=90&t=45628
druckerchannel.de#@##DCGA_CONTAINER
druckerchannel.de###DCGA
! cname issues on signup
@@||idolbucks.com^$script,domain=idols69.com|ocreampies.com
@@||calcioefinanza.it^$cname
||vrsmash.com/assets/script$badfilter
! override Peter Lowe's filter
||piano.io^$badfilter
@@||google-analytics.com/analytics.js$script,redirect-rule=google-analytics.com/analytics.js,domain=indigenousoap.com
/transparent-pixel.$badfilter
! seeitlive.co CPU spike
*$script,redirect-rule=noopjs,domain=seeitlive.co
||confiant-integrations.global.ssl.fastly.net/*/gpt_and_prebid$script,important,domain=seeitlive.co
||netdna-ssl.com/sbly-ads/sbly-prebid-$script,important,domain=seeitlive.co
@@||widget-provider.production.ippen.space/widget-components/widget-quiz.bundle.js$script,domain=buzzfeed.de
@@||widget-provider.production.ippen.space/api/widgets/*$xhr,domain=buzzfeed.de
! verhentai.top broken images
@@||a.realsrv.com/video-slider.js$script,domain=verhentai.top
@@||imasdk.googleapis.com/js/sdkloader/ima3.$script,domain=independent.co.uk
@@||cdn.permutive.com/*-web.js$domain=independent.co.uk
@@||pub.pixels.ai/wrap-independent-prebid-lib.js$script,domain=independent.co.uk
@@||static.adsafeprotected.com/iasPET.1.js$script,domain=independent.co.uk
@@||independent.co.uk/*/prebid.*.js$script,1p
independent.co.uk##+js(no-fetch-if, doubleclick)
@@||adsafeprotected.com/services/$xhr,domain=independent.co.uk
! to counter Peter Lowe's filters (breaking the site itself)
||chartbeat.com^$badfilter
||chartbeat.net^$badfilter
||chartbeat.com^$3p
||chartbeat.net^$3p
||static.adsafeprotected.com/vans-adapter-google-ima.js^$script,redirect-rule=noopjs,domain=tyla.com
@@||static-redesign.cnbcfm.com/dist/components-PcmModule-Ads-BoxInline$script,domain=cnbc.com
! blocked by PL
||blogtopsites.com^$badfilter
||blogtopsites.com^$3p
! CNAME broken comments
@@||serieslatinoamerica.tv^$cname
@@||googletagmanager.com/gtm.js$script,domain=well.ca
! adssettings.google.com blocked by PL
||ads.youtube.com^$badfilter
||ads.youtube.com^$domain=~ads.youtube.com
! up-load. io broken by french list
*$script,1p,domain=up-load.io,badfilter
*$xhr,domain=up-load.io,badfilter
||epimg.net/t.gif$image,redirect-rule=1x1.gif,domain=as.com
!#if env_mobile
||experience.tinypass.com/xbuilder/experience/execute$xhr,domain=fastcompany.com
!#endif
! revcatch. com unlock page itself (3p blocked by EP)
||revcatch.com^$badfilter
! bing reverse image search broken by EL
bing.com#@#a[href*="/aclick?ld="]
bing.com##.ins_exp.vsp
bing.com##:matches-path(~/shop) a[href*="/aclick?"]:not(.vsp_ads)
!#if env_firefox
bing.com##+js(nosiif, logQueue, 10000)
!#endif
! unlock site page cpmstar. com (Peter Lowe's)
||cpmstar.com^$badfilter
||cpmstar.com^$3p
! click-through broken by PL, 3p blocked by EP
! ex. https://app.seedapp.jp/click/v1/ad/122?site=1843&article=4454
||appsflyer.com^$badfilter
||appsflyer.com^$3p
||cdn.shopify.com/*assets/pixel.gif$image,redirect=1x1.gif,domain=metrovac.com,important
||actonsoftware.com^$badfilter
! watcho. com home page very slow loading
watcho.com##+js(nano-stb, isPeriodic, *)
||consensu.org^$badfilter
! go-links. net page broken
@@||go-links.net/stylesheets/ads.css$css,1p
! news38.de broken images
||news38.de/resources/*$image,1p,redirect-rule=1x1.gif
! histats. com unlock the site itself
||histats.com^$badfilter
||histats.com^$3p
@@||ksr-research.com^$cname
@@||bsdex.de^$cname
||go.nordvpn.net^$3p,badfilter
! ncaa.com march madness live stream broken by =728x90_ in EasyList
@@||warnermediacdn.com^$xhr,domain=ncaa.com
uschovna.cz#@#body:style(background:none !important;)
uschovna.cz##body:style(background-image:none !important)
@@||cz.mrezadosa.com^$xhr,domain=uschovna.cz
uschovna.cz##.branding:upward([target="_blank"])
||milkygoodness.xyz^$badfilter
||milkygoodness.xyz/js/optscript/
@@||garantibbva.ro/templates/analytics.html^$xhr,1p
! savethechildren. it / net / org downloading pdf is broken
@@||googletagmanager.com/gtm.js$script,domain=savethechildren.*
@@||dilbert.com/assets/$script,1p
! Fix https://golf.com/news/tour-confidential-match-play-concession-augusta-womens-am/
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,redirect-rule,domain=golf.com
! unbreak voe.sx download page
*$popup,3p,domain=voe.sx,badfilter
||3r1kwxcd.top^$popup,3p,badfilter
||3r1kwxcd.top^$popup,badfilter
@@||google.com^$font,domain=voe.sx
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect-rule=google-ima.js,domain=discoveryplus.in
! unbreak vermangasporno.com download button
vermangasporno.com#@#a[target="_blank"][rel="noopener noreferrer"] > img
@@||fundingchoicesmessages.google.com^$script,domain=bbc.com
!#if env_firefox
@@||dev.visualwebsiteoptimizer.com/j.php$domain=watch.impress.co.jp
@@||dev.visualwebsiteoptimizer.com/v.gif$domain=watch.impress.co.jp
!#endif
@@||googleads.g.doubleclick.net/ads/preferences/*/opt*?continue$doc
||thepiratebay.$script,domain=pirateproxy.live|thehiddenbay.com|thepiratebay.org,badfilter
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=rotana.net,redirect-rule=google-ima.js
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai.js$script,domain=rotana.net
@@||babiato.co/conversations/$1p
@@||shahid.mbc.net^$cname
@@||creator.zmags.com/channels.js^$script,domain=sallybeauty.com
@@||powr.io/powr.js$script,3p
@@||fluid.4strokemedia.com/www/delivery/asyncspc.php^$xhr,domain=formulapassion.it
@@||cdnb.4strokemedia.com/carousel/v4/comScore-JS-$script,domain=formulapassion.it
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=formulapassion.it,redirect-rule=google-ima.js
formulapassion.it#@#.qc-cmp2-container
formulapassion.it#@##qc-cmp2-main
formulapassion.it#@#.qc-cmp2-main
@@||movie.momo-net.com/_embed/video.php$frame
@@||stuttgarter-zeitung.de/*/tracking/$script,1p
@@||cdn.jsdelivr.net^*/js/analytics.min.js$script,domain=starfiles.co|starfiles.ml
@@_advertisement_$domain=splatoonwiki.org,script,image,css
*$script,redirect-rule=noopjs,domain=animalchannel.co|homehacks.co|parentingisnteasy.co|seeitlive.co|spotlightstories.co
! Blocked by Peter Lowe's
||baremetrics.com^$badfilter
||baremetrics.com^$3p
@@||googletagmanager.com/gtm.js$script,domain=dpoint.jp
@@||taboola.com/*/axelspringer-dieweltprojectberlin/*$script,domain=welt.de
@@||static-ppp.portalcdn.com/$script,domain=pornhub.com
pornhub.com#@#iframe[width][height*="px"]
@@||googletagmanager.com/gtm.js$script,redirect-rule,domain=bela.gifts
||smartadserver.com^$badfilter
||smartadserver.com^$3p,domain=~smartadserver.de,badfilter
||smartadserver.com^$3p,domain=~smartadserver.fr|~smartadserver.de
smartadserver.*#@#[href*=".smartadserver.com"]
smartadserver.*#@#a[href*=".smartadserver.com"]
||vidible.tv^$badfilter
! adshrink.it blocked by PL
||adshrink.it^$badfilter
||adshrink.it^$3p
! broken by RUAdlist
@@||sl.lindernman.xyz/$xhr,3p,domain=hitbits.io|pentafaucet.com
! bad filters in smed79 french list
*$xhr,3p,domain=teleriumtv.net,badfilter
*$script,3p,domain=elitegol.me,badfilter
@@||gannettdigital.com/universal-web-client/master/$xhr,domain=usatoday.com
||klaviyo.com^$badfilter
! unbreaking reddit reply email
@@||click.redditmail.com^*ref_source=email
brasilescola.uol.com.br#@#.banner
||tags.news.com.au/prod/heartbeat/*/MediaSDK.min.js$script,redirect=noop.js,important
@@||googletagmanager.com/gtm.js$script,domain=coronavirus.vic.gov.au
@@||drive.google.com/file/*/preview?*-auto-ads-$frame,domain=kntstuff.blogspot.com
@@||malwaretips.com/blogs/wp-content/uploads/*/Sponsored-Links$image,1p
@@||jep-asset.akamaized.net/jiostaticresources/*/js/adobe-analytics.js$script,domain=jio.com
||googletagmanager.com/gtag/js$script,redirect=noop.js,domain=video.isilive.ca
#@#a[href^="https://www.sheetmusicplus.com/"][href*="?aff_id="]
#@#a[href^="https://www.sheetmusicplus.com/?aff_id="]
@@||kcjervis.github.io/jervis/static/media/src/images/ships/banner/
woman.excite.co.jp##+js(ra, data-woman-ex, a[href][data-woman-ex])
demae-can.com##+js(ra, data-trm-action|data-trm-category|data-trm-label, .trm_event, stay)
@@||pluralsight.com/analytics/analytics-facade$script,1p
@@||plantuml.com^$cname
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai.js$script,domain=etonline.com
@@||media.amlg.io^$image,domain=etonline.com
@@||cloudfront.net/ad-navi/$css,image,domain=kinro.ntv.co.jp
@@||minnanokaigo.com/img/page/ad-navi/parts/$image,1p
@@||googletagmanager.com/gtm.js$script,domain=girlsnews.tv
@@||googletagmanager.com/gtm.js$script,redirect-rule,domain=lingvolive.com
@@||boots.*/wcsstore/eBootsStorefrontAssetStore/javascript/Analytics.js$xhr,1p
@@||google-analytics.com/analytics.js$script,redirect-rule=google-analytics.com/analytics.js,domain=ultimateclassicrock.com
@@||googletagmanager.com/gtm.js$script,redirect-rule=googletagmanager.com/gtm.js,domain=ultimateclassicrock.com
unito.life##^script:has-text(KeenTracking)
unito.life##+js(acs, KeenTracking)
@@||formulatv.com/js/cmp2.js$script,1p
@@||googletagmanager.com/gtm.js$script,domain=formulatv.com
||google-analytics.com/analytics.js$script,redirect-rule=noopjs,domain=hudsonvalleypost.com|seacoastcurrent.com|popcrush.com,important
||googletagmanager.com/gtm.js$script,redirect-rule=noopjs,domain=hudsonvalleypost.com|seacoastcurrent.com|popcrush.com,important
@@||google-analytics.com/analytics.js$script,3p,redirect-rule,domain=k2radio.com|kowb1290.com|koel.com|loudwire.com
@@||googletagmanager.com/gtm.js$script,3p,redirect-rule,domain=k2radio.com|kowb1290.com|koel.com|loudwire.com
@@||googletagmanager.com/gtm.js$script,domain=megacritic.ru
! Reported through email
@@||googletagmanager.com^$redirect-rule,domain=invisibleoranges.com|nj1015.com|tasteofcountry.com|wyrk.com|xxlmag.com
@@||google-analytics.com^$redirect-rule,domain=invisibleoranges.com|nj1015.com|tasteofcountry.com|wyrk.com|xxlmag.com
adyou.me##button.flleft.btn-lg.btn-warning.btn.skip:style(display:block !important)
adyou.me#@#+js(addEventListener-defuser, /^(?:click|mousedown)$/, bypassEventsInProxies)
adyou.me#@#+js(no-setInterval-if, (), 500)
@@||freebcc.org/assets/img/ad_$image
@@||weather.com/content/assets/*wxAdTargeting$script,1p
@@||ssl.p.jwpcdn.com/player/plugins/googima/$script,domain=weather.com
||imasdk.googleapis.com/js/sdkloader/ima3.js^$script,redirect-rule=noopjs,domain=weather.com
@@||jssdkcdns.mparticle.com/js/*/mparticle.js$script,domain=weather.com
@@||micro.rubiconproject.com/prebid/dynamic/$script,domain=weather.com
@@||ssl.p.jwpcdn.com/player/*/googima.js$script,domain=weather.com
coolmathgames.com##+js(set, network_user_id, '')
@@||b-cdn.net^*-adap.jpg$image,domain=techxplore.com
||hb.afl.rakuten.co.jp^$badfilter
||hb.afl.rakuten.co.jp^$3p
@@||names.org^$cname
! being blocked by PL and causes infinite calls ex. 80-e.ru,mathcats.com
||clustrmaps.com^$image,redirect-rule=1x1.gif
@@||amazon-adsystem.com/*/apstag.js$script,redirect-rule=amazon_apstag.js,domain=video.sky.it
@@||googletagmanager.com/gtm.js$script,redirect-rule=googletagmanager.com/gtm.js,domain=autotrader.ca
@@||rmwilliams.com/on/demandware.static/Sites-rmwINTL-Site/*/modules/app/app.tealium.js$script,1p
@@||player.avplayer.com/script/*/avcplayer.js$script,domain=bdnewszh.com
@@||player.avplayer.com/script/*/libs/hls.min.js$script,domain=bdnewszh.com
||ads.pinterest.com^$badfilter
||ads.pinterest.com^$3p
! fix genieesspv console
! CNAME issue by JPF
@@||console.genieesspv.jp^$domain=admin.genieessp.com
@@||tutanota.com/fr.js$1p
@@||go.pardot.com/$frame,domain=womensworldbanking.org
@@||api.ipdata.co/?api-key=$script,domain=wttw.com
@@||cdn.ampproject.org/*/amp-geo-$script,domain=9to5google.com|9to5mac.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect-rule=google-ima.js,domain=olympics.com
://ads.$popup,domain=~smartnews.com,badfilter
://ads.$popup,domain=~kakaku.com|~smartnews.com
!#if env_mobile
@@||bwb101.goo.ne.jp/b.js$domain=news.goo.ne.jp
@@||log000.goo.ne.jp/js/VLTraceDMD.js$domain=news.goo.ne.jp
!#endif
||azadify.com^$3p,badfilter
@@||googletagmanager.com/gtm.js$script,domain=giftcards.com
||smart-traffik.com^$badfilter
||googlevideo.com/videoplayback?$media,redirect=noop-1s.mp4,domain=safeframe.googlesyndication.com
safeframe.googlesyndication.com##.left-container
@@||g.doubleclick.net/pagead/images/gmob/close-circle-30x30.png$image,domain=safeframe.googlesyndication.com
@@||gstatic.com/admanager/outstream/rewarded_web_video_$script,domain=safeframe.googlesyndication.com
@@||google-analytics.com/analytics.js$domain=bihann.com|nehannn.com
||tercept.com^$badfilter
||tercept.com^$3p
! broken sportschau.de live stream
||wdr.de/*/tracker/tracker.min.js$script,redirect-rule=noop.js,domain=sportschau.de
@@||de-config.sensic.net/sui-connector.js$script,domain=sportschau.de
! unbreak https://uiz.io/QfCH from https://github.com/AdguardTeam/AdguardFilters/issues/54339
@@||bigappboi.com/captchalocker/js/popup.js.php
@@||bigappboi.com/cp/js/captcha.js.php
! fix video https://www.pussyspace.com/live/anna_lus/
@@||chaturbate.com/in/$frame,domain=cbhours.com|pussyspace.*
@@||tra.scds.pmdstatic.net/advertising-core/$script,domain=businessinsider.fr
@@||googletagmanager.com/gtm.js$script,domain=gall.nl
@@||wondrium.com/static/version1632408975/frontend/Wondrium/default/en_US/js/analytics.js$script,1p
xunta.gal#@##anuncio
@@||googletagmanager.com/gtm.js$script,redirect-rule,domain=corsair.com
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,redirect-rule,domain=gamedeveloper.com
@@tracking/ninja.js$script,domain=olx.ro,badfilter
! docs.tealium.com blocked by PL
||tealium.com^$badfilter
||tealium.com^$3p
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,redirect-rule,domain=heim.jp
@@||777partner.com^$image,media,domain=jetztlive.com
! www.23qb.net cname issue by AG Chinese/EL China
@@||cdn.cloudflare.net^$script,domain=23qb.net
! fix mf-realty.jp top image
@@||googletagmanager.com/gtm.js$script,redirect-rule,domain=mf-realty.jp
myair2.resmed.com##+js(no-xhr-if, cloudflare.com/cdn-cgi/trace)
||cloudflare.com/cdn-cgi/trace$xhr,3p,redirect-rule=noop.txt,domain=~funimation.com|~1bit.space|~1bitspace.com
@@||d2wy8f7a9ursnm.cloudfront.net/*/bugsnag.min.js$script,domain=crust.com.au
||d2r1yp2w7bby2u.cloudfront.net/js/localforage.min.js$script,redirect-rule=noopjs,domain=sonyliv.com
@@||fundingchoicesmessages.google.com^$script,domain=stooq.com|stooq.pl
@@*ad2.$image,domain=sophiabushfan.net
@@_advertisment.$image,domain=gorgeouspfeiffer.com
@@_advertisement_$image,domain=jennifer-lawrence.com
@@/advertisements_$image,domain=jessica-biel.at
@@/advertising_$image,domain=timfahlbusch.com
@@/advertisment/*$image,domain=taylorpictures.net
@@/advertisements-$image,domain=jennifer-lawrence.com
@@/ad_campaigns/*$image,domain=alicia-vikander.com
@@/adverts/*$image,domain=emily-blunt.com|isla-fisher.net|islafisher.net|reese-witherspoon.org|reesewitherspoon.org
@@||cloudflare.com/cdn-cgi/trace$xhr,domain=54647.io
! travelerdoor blocked request spam
travelerdoor.com##+js(no-xhr-if, cloudflare.com/cdn-cgi/trace)
! Store selection broken https://www.simon.com/mall/king-of-prussia/stores
@@||googletagmanager.com/gtm.js$script,redirect-rule,domain=simon.com
@@||wewon.to^$xhr,media,domain=soap2day.*
pewresearch.org##+js(set, ga, noopFunc)
@@||asset.fwcdn2.com/js/storyblock.js$script,domain=narcity.com
@@||cdn.questionpro.com^$css
@@||rdstation.com.br^*api/$xhr
! Reported internally, this unbreaks:
@@||googletagmanager.com/gtm.js$script,domain=www.shockwave.com
||videoplayerhub.com^$script,domain=shockwave.com,redirect-rule=noopjs
||natureetdecouvertes.com^$1p,image,redirect-rule=2x2.png
!#if env_mobile
||cxense.com/cx.js$script,redirect-rule=noop.js,domain=itmedia.co.jp
!#endif
ilbianconero.com##.no-scroll:style(overflow:auto!important)
@@||googletagmanager.com/gtm.js$script,domain=insideevs.com
@@||googletagmanager.com/gtm.js$script,domain=suspilne.media
@@||cdn.casamireasa.biz/deploys/www/delivery^$domain=canale.live
@@||canale.live/reclama/$1p
@@||canale.live/player-tv/$css,1p
! unbreak https://gogoplay1.com/videos/kero-kero-chime-episode-30's download popup
@@||gogoplay1.com/download?id=$popup
@@||google-analytics.com/analytics.js$script,redirect-rule,domain=nordvpn.com
||static.chotot.com/storage/js/prebid-ads.js$script,important
@@||cibng.ibanking-services.com^$cname
@@||ppl.ibanking-services.com^$cname
warscrap.io##.squareAdContainer
warscrap.io##.main-menu-bottom
warscrap.io###warscrap-io_336x280
warscrap.io###warscrap-io_728x90
@@||fmkorea.com/modules/point/icons/*$image,1p
*$script,3p,domain=animeflv.net,badfilter
kurashiru.com#@#[id^="div-gpt-ad"]:style(width:1px!important;height:1px!important;min-width:1px!important;min-height:1px!important;margin:0!important;padding:0!important;overflow:hidden!important;opacity:0!important)
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,domain=meteoetradar.com
@@||securepubads.g.doubleclick.net/gpt/pubads_impl_$script,domain=meteoetradar.com
meteoetradar.com##+js(no-xhr-if, doubleclick)
@@||explore.agilent.com/GlobalOptOut^$frame,1p
@@||p04a.hs.eloqua.com^$frame,domain=agilent.com
@@||video.repubblica.it^$cname
@@||cloudflare.com/cdn-cgi/trace$xhr,redirect-rule=noop.txt,domain=benchmarkuniverse.com
||sammobile.com^*/newrelic.js$script,1p,redirect=noop.js,important
||plausible.io/js/plausible.js$script,redirect=noopjs,important
*$script,redirect-rule=noopjs,domain=sammobile.com
@@||shakeshack.com/sites/default/files/google_tag/*$script,1p
@@||googletagmanager.com/gtm.js$script,domain=shakeshack.com
@@||googletagmanager.com/gtm.js$script,domain=microcenter.com
@@||s0.2mdn.net/instream/html5/ima3.js$script,domain=eurogamer.net
@@||cdn.vox-cdn.com/packs/js/concert_ads-*.js$script,domain=theverge.com
@@||s0.2mdn.net/instream/html5/ima3.js$script,domain=as.com
@@||nocturnetls.net^$script,1p
! cname https://github.com/uBlockOrigin/uAssets/issues/11275
@@||relay-client-c01.iocnt.net^$script,domain=www.businessinsider.de
@@||mypearson.com^*/ga.min.js
||tags.tiqcdn.com^$badfilter
@@||inbenta.io/prod/*/tracking/events$xhr,domain=knab.nl
@@||thetoc.gr/Content/images/blank.gif$image,1p
gumtree.com.au#@#.header--is-new-sticky-behaviour
gumtree.com.au#@#.ad-cnt
gumtree.com.au#@#[data-ad-name]
@@||aps.hearstnp.com/Scripts/loadAds.js$script,domain=timesunion.com
timesunion.com##div.setHeight.stickyWrapper
@@||delmarlearning.com^$1p,script
||prebid.elespectador.com^$script,redirect-rule=googletagservices_gpt.js,1p,important
@@||read.amazon.*/embed?$frame,3p,domain=goodreads.com
profit.ro##.zc_top_mobil:style(display: block !important;)
profit.ro##.zc_rectangle
profit.ro##.zc_top
himovies.to#@#a[onclick]
@@||streaming.adswizz.com^$3p,media,domain=deezer.com
@@||load.sumo.com^$script,domain=gopractice.ru
@@||sumo.com/api/$xhr,domain=gopractice.ru
@@||sumo.com/services$xhr,domain=gopractice.ru
@@||google.com/recaptcha/$frame,script
||rudaw.net/images/$image,1p,redirect-rule=1x1.gif,important
@@||google-analytics.com/analytics.js$script,redirect-rule=google-analytics.com/analytics.js,domain=layrite.com
! comment section broken by Peter Lowe’s list
@@||script.ioam.de/iam.js$script,domain=tagesspiegel.de
@@||mpsnare.iesnare.com/snare.js$script,domain=rossmann.de
! walletinvestor. com scrolling broken
walletinvestor.com##body:style(overflow: auto !important;)
walletinvestor.com###bio_ep_bg
@@||sololearn.com/api/*/comments/*$xhr,1p
@@||googletagmanager.com/gtm.js$script,redirect-rule=googletagmanager.com/gtm.js,domain=aeriagames.com
@@||ads.imprezzer.com/js/imprezzer2.min.js$script,domain=mgronline.com
@@||ads.imprezzer.com/js/multisize_responsive.js$script,domain=mgronline.com
@@||ads.imprezzer.com/js/multisize_bottompage_responsive.js$script,domain=mgronline.com
@@||ads.imprezzer.com/js/imprezzer_vip2.js$script,domain=mgronline.com
mgronline.com##[href^="https://www.hotelscombined.co.th/"]
! website, not a tracker
||lp.tfd-corp.co.jp^$badfilter
||info.neg.co.jp^$badfilter
@@||video-api.yql.yahoo.com/*/video/alias/channels/$xhr,domain=sports.yahoo.com
sports.yahoo.com#@#.H\(400px\) > .VideoPlayer
sports.yahoo.com#@#.H\(400px\).Pos\(r\)
||relish.com^$domain=seriouseats.com
@@||googletagmanager.com/gtm.js$domain=www3.nissan.co.jp
*$script,redirect-rule=noop.js,domain=nissan.co.jp
abczdrowie.pl#@#+js(aost, WP.prebid, onLoad)
@@||nexus.ensighten.com/easyjet/*/Bootstrap.js$script,domain=easyjet.com
||dan-ball.jp/*.gif$image,redirect-rule=1x1.gif
@@||cdn.stat-rock.com/player.js$script,domain=autofaucet.dutchycorp.space
@@||api.thingiverse.com/banner/*/pageAd$xhr,1p
idnes.cz#@#+js(abort-current-script, String.fromCharCode)
cyberstumble.com##.td-animation-stack-type0-1:style(opacity:1 !important)
pearsonclinical.com##.aligner
*$image,domain=asfan.as.com,redirect-rule=1x1.gif
#@##banner_ad
! mpsconline. gov.in breakage
@@||mpsconline.gov.in^$ghide
||booking.rm.dk/selvbooking/*/analytics/*$xhr,1p,redirect-rule=nooptext
@@||chanrycz.com/cdn-cgi/apps/head/*.js|$script,1p
*$script,3p,domain=mixdrop.co,badfilter
||mixpanel.com^$badfilter
||mixpanel.com^$3p
! Counters `clustrmaps.com` from Peter Lowe's List
||clustrmaps.com^$badfilter
||clustrmaps.com^$3p
@@||doci.pl/aserver/$frame,1p
@@||docer.pl/aserver/$frame,1p
@@||ovh.webshark.pl^$script,domain=doci.pl|docer.pl
@@||static.webshark.pl/$script,domain=doci.pl|adk.freedisc.pl|docer.pl
@@||static.webshark.pl/static/js/library/aserver/helper.js$script,domain=adk.musody.com|docero.de
@@||adk.docer.pl/asrv/$frame,1p
@@||doci.pl^$ghide
@@||docer.pl^$ghide
docer.pl#@##ad
docer.pl#@#[class^="ad-"]
@@||webshark.pl^$script,domain=doceru.com
@@||assets.adobedtm.com/extensions/*/AppMeasurement$script,domain=trygghansa.se
@@||cdn.mavic.com/sites/default/files/google_tag/google_tag/*$script,1p
@@||googletagmanager.com/gtm.js$script,domain=mavic.com
@@||ad.doubleclick.net/ddm/trackclk/*https://www.unieuro.it
@@||widgets.outbrain.com/outbrain.js$script,domain=welt.de
@@||mv.outbrain.com/Multivac/api/get?url=$script,domain=welt.de
@@||images.outbrainimg.com/transform/v3/$image,domain=welt.de
! The blocking exception can be removed after Apr. 5, but maybe cosmetic should be kept for future.
shiropro-re.net#@##ad_link
@@||assets.shiropro-re.net/html/image/ad5.png
||zdf.de/atinternet/live/smarttag.js$badfilter
gigantti.fi##.mat-drawer-container:style(overflow-x: auto !important)
united.no#@#.page-ads
@@||freegeoip.app/json/*$xhr,domain=hamwaves.com
@@||oasjs.kataweb.it^$script,domain=repubblica.it
! si.com breakage
si.com#@#.is-below-header-ad
@@||edge.permutive.app^$script,domain=watch.globaltv.com
@@||api.permutive.com/v*/geoip$xhr,domain=watch.globaltv.com
@@/1.gif?$image,1p,domain=kanjiku.net
@@/2.gif?$image,1p,domain=kanjiku.net
@@||dealersite4.d2cmedia.ca^$domain=schlueterhyundai.com
@@||wwwjuwanshe.pp8.com^$3p,domain=juwanshe.com
@@||googletagmanager.com/gtm.js$script,domain=all.accor.com|login.accor.com
@@||googletagmanager.com/gtag/js$script,domain=all.accor.com|login.accor.com
@@||google-analytics.com/analytics.js$script,domain=all.accor.com|login.accor.com
@@||ipapi.co^*json$xhr
@@||coinzillatag.com/lib/display.js$script,domain=ad-doge.com
@@||sentry-cdn.com^$script,domain=ad-doge.com
security-demo.extrahop.com##+js(nostif, ad blocker)
@@||app.pendo.io/data/guide.js/*$script,domain=security-demo.extrahop.com
@@||google-analytics.com/analytics.js$script,domain=reykjaviksailors.is
@@||googletagmanager.com/gtag/js$script,domain=reykjaviksailors.is
@@||kingarthurbaking.com/sites/default/files/google_tag/$script,1p
@@||googletagmanager.com/gtm.js$script,domain=kingarthurbaking.com
kingarthurbaking.com##^html > head > link[rel="canonical"]:not([href*="/recipes/"]):upward(2) script:has-text(googletagmanager)
cadenadial.com##+js(aost, History, /(^(?!.*(Function|HTMLDocument).*))/)
! cname breakage by CHN list $script,subdocument,third-party,websocket,xmlhttprequest,domain=yemancomic.com
@@||psl.2cycomic.com^$script,domain=yemancomic.com
@@||builder-assets.unbounce.com^$css,domain=duden.de
@@||builder-assets.unbounce.com/published-js/main.bundle-$script,domain=duden.de
! unbreak video
@@||ricasdelicias.online/social.php$popup,domain=animesonline.cz
! fix slide images
@@||laptopoutlet.co.uk/wysiwyg/asus/rise-up/popunder-$image,1p
@@||laptopoutlet.co.uk/wysiwyg/lenovo/*_popunder_$image,1p
! unbreak streamtape frame
@@||streamadblockplus.com^$frame,domain=streamtape.com
! fix https://eimusics.com/digital-single-yama-moonwalker/ auto close tab
@@||eimusics.com^$popunder,domain=ouo.io
! besthdgayporn. com video broken
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=besthdgayporn.com
@@||besthdgayporn.com/wp-content/plugins/$script,1p
@@||bongacash.com/js/videojs/video.js
! cname breakage by AG Spanish ||cloudfront.net^$domain=pelisplushd.net|cuevana3.*
@@||dsag3w1du2cu2.cloudfront.net^$image,domain=cuevana3.la
@@||gcdn.2mdn.net/videoplayback/$media,domain=app.plex.tv
@@||hqq.to/e/*$csp,domain=gomo.to
@@||photopea.com/promo/no_ads.png$xhr,1p
! www.divascam.com cname breakage
@@||new.xlovecam.com^$xhr,domain=divascam.com
||go.usa.gov^$badfilter
@@||assets.adobedtm.com/extensions/*/AppMeasurement$script,domain=conad.it
! override Peter Lowe's filter
||t.co^$badfilter
||lacentrale.fr/static/fragment-layout/tracking-$badfilter
@@||app.detrack.com/api/v2/tracking$xhr
@@||cdnjs.cloudflare.com/cdn-cgi/trace$xhr,domain=piliapp.com
! stern plus article links not clickable
@@||google-analytics.com/analytics.js$script,redirect-rule=google-analytics.com/analytics.js:5,domain=stern.de
@@||googletagmanager.com/gtm.js$script,redirect-rule=googletagmanager_gtm.js:5,domain=stern.de
@@||c.amazon-adsystem.com/aax2/apstag.js$script,domain=oggi.it
@@||components2.rcsobjects.it/rcs_adv/v1/distro/dfp/common/prebid$script,domain=oggi.it
@@||static.adsafeprotected.com/iasPET$script,domain=oggi.it
@@||location.api.useinsider.com^$xhr,domain=nontongp.xyz
! flix
@@||googletagmanager.com/gtm.js$script,domain=lacuracao.pe|mumzworld.com|teds.com.au|tsbohemia.cz|target.com.au
||flixsyndication.net^$3p,badfilter
||flixsyndication.net/delivery/static/tracking/$script,important
tamin.ir#@#.ads2
@@||tamin.ir/content/ads/
! voeunblock2.com break by EL regex filter
@@||voeunblock2.com^$frame,3p
job.mt.de,job.nw.de#@#^script:has-text(===):has-text(/[\w\W]{16000}/)
job.mt.de,job.nw.de#@#+js(nostif, .call(null), 10)
@@||ak-ads-ns.prisasd.com/prebid/prebid_noticias.js$script,domain=as.com
||elpais.com/t.gif$image,1p,redirect-rule=1x1.gif,important
||fwcdn2.com^$badfilter
@@||app.link/_r?sdk$script,domain=ecwid.com
@@||api2.branch.io/v1/url$xhr,domain=ecwid.com
@@||cdn.appdynamics.com/adrum/adrum-*.js$domain=santander.cl
||ads.tiktok.com^$badfilter
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,important,domain=oe24.at
@@||m.faz.net^$cname
@@||last.fm/static/js-build/tracking/tealium-utag-set.js$script,1p
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=html5.gamedistribution.com
@@||hb.improvedigital.com/pbw/headerlift.min.js$script,domain=html5.gamedistribution.com
@@||hb.improvedigital.com/pbw/prebid/*$script,domain=html5.gamedistribution.com
||tag.atom.gamedistribution.com^$xhr,redirect-rule=nooptext,1p
@@||googlesyndication.com/pagead/js/adsbygoogle.js$script,redirect-rule,domain=html5.gamedistribution.com
html5.gamedistribution.com##+js(no-fetch-if, api)
@@||cdn.cookielaw.org/*/OtAutoBlock.js$script,xhr,domain=html5.gamedistribution.com
! ||cdn.branch.io^$badfilter
@@||cdn.branch.io/branch-latest.min.js$script,domain=watch.tataplay.com
@@||ad.doubleclick.net/clk*travel*&destinationURL=$doc
! unlock legit page simpletraffic. co
||simpletraffic.co^$badfilter
||simpletraffic.co^$3p
@@||data.songstats.com/api/v1/analytics/$xhr,1p
||4strokemedia.com^$3p,badfilter
@@||4strokemedia.com^$script,xhr,domain=oasport.it
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=oasport.it
@@||secure.quantserve.com/quant.js$script,domain=oasport.it
oasport.it#@#.adv
oasport.it#@#[id^="div-gpt-ad"]:style(width:1px!important;height:1px!important;min-width:1px!important;min-height:1px!important;margin:0!important;padding:0!important;overflow:hidden!important;opacity:0!important)
@@||components2.rcsobjects.it/rcs_adv/*/distro/dfp/common/prebid$script,domain=video.gazzetta.it
@@||c.amazon-adsystem.com/aax2/apstag.js$script,domain=video.gazzetta.it
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=video.gazzetta.it,redirect-rule=google-ima.js
video.gazzetta.it##+js(set, google.ima.OmidVerificationVendor, {})
video.gazzetta.it##+js(set, Object.prototype.omidAccessModeRules, {})
! vice. com cookie banner reappear after every reload
||sourcepoint.vice.com^$badfilter
@@||tags.tiqcdn.com/utag/bluestem/main/prod/utag.sync.js$script,domain=fingerhut.com
@@||monetate.net^$script,xhr,domain=fingerhut.com
! funny.pho. to cannot switch the language
||hits.informer.com/log.php$image,domain=funny.pho.to,redirect-rule=1x1.gif
factable.com##+js(set, googletag.cmd, {})
factable.com##.puicontainer
factable.com##.pohcontainer
@@/prebid-ads/adsensebase.js$script,redirect-rule=prebid-ads.js,domain=darkreading.com
! cname unlocking stream https://www.streamonfoot.xyz/77-rmc-en-ligne.html
@@||streaming.adswizz.com^$media,domain=streamonfoot.xyz
! affiliate.rakuten.co.jp broken
||ba.afl.rakuten.co.jp^$badfilter
||ba.afl.rakuten.co.jp^$3p
beckershospitalreview.com##html,body:style(overflow: auto !important)
*$frame,domain=mcrypto.club|luckydice.net,redirect-rule=noopframe
||cryptocoinsad.com/ads/show.php$frame,redirect-rule=noop.html
thequint.com#@#._4xQrn
thequint.com##._4xQrn:style(max-height:0px)
thequint.com##span:has-text(ADVERTISEMENT)
@@||gstatic.*/recaptcha/
||wpfc.ml^$image,redirect-rule=1x1.gif,domain=thestoryexchange.org
||da-services.ch^$3p,badfilter
! privacy settings broken on kleinanzeigen.de/gdpr
@@||googletagmanager.com/gtm.js$script,redirect-rule=googletagmanager_gtm.js:5,domain=kleinanzeigen.de
@@||novelgames.com^$script,1p
@@||cdn.intergi.com^$script,domain=novelgames.com
@@||cdn.intergient.com^$domain=novelgames.com
@@||cdn.intergient.com^$1p
||novelgames.com/flashgames/*/banner_660x250.png
*$image,domain=novelgames.com,redirect-rule=1x1.gif
*$script,domain=novelgames.com,redirect-rule=noopjs
*$xhr,domain=novelgames.com,redirect-rule=nooptext
novelgames.com##+js(nano-sib, skipAdSeconds, , 0.02)
novelgames.com###gameEtTopRight.commonEt:style(height: 0 !important;)
novelgames.com###gamelistCategories:style(margin-bottom: auto !important;)
novelgames.com##.gamelistGame.commonEt
novelgames.com##div[id^="forums"][id*="Et"]
@@||scanurl.net^$ghide
scanurl.net##.adsbygoogle
||exponea.com^$badfilter
||exponea.com^$3p
||assets.springserve.com^$media,domain=app.plex.tv,redirect=noopmp3-0.1s
@@||holidaypark.de/sites/default/files/public/google_tag/*$script,1p
@@||googletagmanager.com/gtm.js$script,domain=holidaypark.de
mitula.com.br#@#.adsList
@@||mpsnare.iesnare.com/snare.js$script,domain=lenovo.com
dpp.org.tw#@#.ad_url
@@||media.sailthru.com/composer/images$image,domain=link.square-enix-games.com
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=radiomitre.cienradios.com
@@||d1z2jf7jlzjs58.cloudfront.net/p.js$script,domain=tg24.sky.it
@@||parsely.com/keys/skytg24.it$script,domain=tg24.sky.it
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,redirect-rule=googletagservices_gpt.js:5,domain=olx.pt
@@||cdn.intergi.com/hera/tyche.js$script,domain=raider.io
@@||hb.vntsm.com/v3/live/ad-manager.min.js$script,domain=raider.io
raider.io##.rio-zone--wrapper
||lastpass.com/assets/js/analyticsjs.js$script,redirect=google-analytics.com/analytics.js,important
azby.fmworld.net##+js(no-xhr-if, /recommendations.)
@@||images.taboola.com/taboola/image/fetch/$image,domain=azby.fmworld.net
nybooks.com#@#.top-ad-wrapper
nybooks.com##.ad-spacing
@@||cdn-ue1-prod.tsv2.amagi.tv/beacon$xhr,domain=watch.truecrimenetworktv.com
@@||google-analytics.com/analytics.js$script,redirect-rule=google-analytics.com/analytics.js:5,domain=xeroshoes.com
@@||googletagmanager.com/gtag/js$script,redirect-rule=googletagmanager_gtm.js:5,domain=xeroshoes.com
@@||googletagmanager.com/gtm.js$script,redirect-rule=googletagmanager_gtm.js:5,domain=xeroshoes.com
@@||googletagmanager.com/gtag/js$script,redirect-rule=googletagmanager_gtm.js:5,domain=myshows.me
/YandexAds.$badfilter
/YandexMetric.$badfilter
@@||googleads.github.io/videojs-ima/node_modules/video.js/dist/video.min.js$script,domain=climatempo.com.br
@@||googleads.github.io/videojs-ima/node_modules/video.js/dist/video-js.min.css$css,domain=climatempo.com.br
@@||googletagservices.com/tag/js/gpt.js$script,redirect-rule,domain=thedailybeast.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=ultimedia.com,redirect-rule=noopjs
tcsjerky.com##body.body-load:style(overflow: auto !important;)
filecrypt.co#@?#form > .protection.online ul > li:not(.buttons):-abp-has(> div:not(.circle_captcha))
ehftv.com##.blackPlayer
thespruceeats.com#@#[data-ad-width]
thespruceeats.com##.mntl-leaderboard-spacer
||baidu.com/*/track.gif?$image,redirect=1x1.gif,important,domain=jump2.bdimg.com
@@||assets.evolutionadv.it/violations/comingsoon.it.violations.js$script,domain=comingsoon.it
@@||ads.pubmatic.com/AdServer/js/pwt/*/3021/pwt.js$script,domain=comingsoon.it
*$script,domain=comingsoon.it,redirect-rule=noopjs
unrealengine.com##+js(no-xhr-if, /api/analytics)
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=zee5.com,redirect-rule=google-ima.js
zee5.com##+js(set, Object.prototype.setDisableFlashAds, noopFunc)
@@||assets.adobedtm.com/*source.min.js$script,domain=msds.open.ac.uk
@@||googletagmanager.com/gtag/*$script,domain=redx.com.bd
javcrave.com#@#.widget_custom_html
@@||index.hr/thirdparty/brid/*$script,1p
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=index.hr
@@||amazon-adsystem.com/aax2/apstag.js$script,domain=index.hr
||sohu.com/cityjson$script,domain=netac.com,redirect=noopjs,important
@@||soapps.net^*live/loader/counter.js$script
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,redirect-rule,domain=amachamusic.chagasi.com
@@||amazon-adsystem.com/*/apstag.js$script,redirect-rule,domain=weather.com
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,redirect-rule,domain=honestjohn.co.uk
@@||googletagmanager.com/gtag/js$script,redirect-rule,domain=contactpoints.org
@@||mxpnl.com/libs/mixpanel-*.min.js$domain=barracudanetworks.com
wco.tv##+js(no-xhr-if, api)
! palatifini. it broken
palatifini.it##.show.fade.modal-backdrop
palatifini.it##body:style(overflow: auto !important;)
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=raiplay.it
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=kotaku.com
||imasdk.googleapis.com^$frame,domain=kotaku.com,important
@@||cmp.dmgmediaprivacy.co.uk/cmp/*$script,domain=gbnews.uk
@@||cmp.dmgmediaprivacy.co.uk/*/vendor-list.json$xhr,domain=gbnews.uk
@@||cmp.dmgmediaprivacy.co.uk/gdpr/*$xhr,domain=gbnews.uk
dmzj.com##body:style(overflow: auto !important;)
@@||pnp.co.za/pnpstorefront/_ui/shared/js/analyticsmediator.js$script,1p
||encar.com/js/*/analytics.js$script,1p,redirect-rule=noop.js
@@||cdn.logrocket.io/LogRocket.min.js$script,domain=webappui.jobnimbus.com
@@||cdn.logrocket.io/logger-1.min.js$script,domain=webappui.jobnimbus.com
! z-lib home pages connections breakage
/1pixel.php$badfilter
/1pixel.php$domain=~1lib.domains|~singlelogin.app|~z-lib.org
@@||my.hrw.com/dashboard/js/workbench/utils/analytics.js$script,1p
@@||google-analytics.com/analytics.js$script,redirect-rule,domain=youtube.videodeck.net
@@||pearson.com/osbrowserchecker/prd/thirdPartyCookie.html$frame,1p
@@||xweb.instagram.com/ads/preferences/ad_topics/$frame,1p
mail.google.com#@#div[aria-label="Ads"]
@@||tra.scds.pmdstatic.net/pmd-browsertools/$script,domain=gala.fr
@@||tra.scds.pmdstatic.net/$xhr,domain=gala.fr
@@||tra.scds.pmdstatic.net/sourcepoint/$script,domain=programme-tv.net
@@||securepubads.g.doubleclick.net/gampad/ads$xhr,domain=programme-tv.net
||d1z2jf7jlzjs58.cloudfront.net/p.js$script,redirect=noopjs,domain=voici.fr
geo.fr##.ads
@@||tra.scds.pmdstatic.net/sourcepoint/*/sourcepoint.min.js$script,domain=geo.fr
@@||tra.scds.pmdstatic.net/advertising-core/*/core-ads.js$script,domain=geo.fr
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,domain=gala.fr|geo.fr|voici.fr
@@||securepubads.g.doubleclick.net/gpt/pubads_impl_$script,domain=gala.fr|geo.fr|voici.fr
gala.fr,geo.fr,voici.fr##+js(set, DD_RUM.addTiming, noopFunc)
gala.fr,geo.fr,voici.fr##+js(no-xhr-if, doubleclick)
gala.fr,geo.fr,voici.fr#@#[data-ads-core]
@@||cmp.huffingtonpost.fr/js/huffpost.min.js$script,1p
@@||cmp.huffingtonpost.fr/html/huffpost/wall-large.html?css=/css/huffpost/wall-large.min.css$xhr,1p
@@||cmp.huffingtonpost.fr/api/consent$xhr,1p
@@||cmp.lemonde.fr/js/lemonde.min.js$script,1p
@@||cmp.lemonde.fr/html/lemonde/wall-tunnel-abo-essential.html?css=/css/lemonde/wall.min.css$xhr,1p
@@||cmp.lemonde.fr/api/consent$xhr,1p
lemonde.fr#@#.gdpr-lmd-wall
@@||taximail.com/js/analytics.js$script,1p
@@||assets.adobedtm.com/*.js$script,domain=accounts.o2.co.uk
||assets.adobedtm.com/*source.min.js$script,domain=accounts.o2.co.uk,important
instagram.com#@#div[style="max-height: inherit; max-width: inherit;"]:has(span:has-text(Paid partnership with ))
||wisepops.com^$badfilter
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,3p,domain=ici.tou.tv
@@||aniview.com/api/$script,xhr,domain=gamingbible.co.uk
@@||player.avplayer.com/script/*/avcplayer.js$script,xhr,domain=gamingbible.com
@@||micro.rubiconproject.com/prebid/dynamic/$script,xhr,domain=gamingbible.com
*$script,redirect-rule=noopjs,domain=gamingbible.com
*$xhr,redirect-rule=nooptext,domain=gamingbible.com
gamingbible.com##[data-cypress="sticky-header"]
gamingbible.com##[data-cypress="sticky-ads"]
gamingbible.com##div[id] > .dfp-ad-unit:upward(1)
! shavetape. cash(streamtape alias) download blocked
*$popup,3p,domain=shavetape.cash,badfilter
gloucestershirelive.co.uk##+js(set, chameleonVideo.adDisabledRequested, true)
/^https?:\/\/[0-9a-z]{8,}\.xyz\/.*/$3p,~media,domain=apiyoutube.cc|clicknupload.to|daddyhd.com|poscitech.click|sportcast.life,badfilter
@@||abcmouse.com/*/analytics.js$script,1p
@@||argos.co.uk/utag/utag.sync.js$script,1p
||samash.com^$script,redirect-rule=noopjs
@@||google.com/adsense/search/ads.js$script,domain=diigo.com
||join.megaphonetv.com^$3p,badfilter
@@||video.qq.com/getvinfo$script,1p
filelu.com#@#.banner_ads
||arcgis.com/apps/instant/node_modules/templates-common-library/structuralFunctionality/telemetry/AppMeasurement.js$script,1p,redirect-rule=noopjs
/google-tag-manager.min.js$script,domain=511tactical.com,redirect-rule=googletagmanager_gtm.js
! herz-fuer-tiere.de images hidden
@@||herz-fuer-tiere.de^$cname
@@||wikipedia.org/api/rest*$xhr,1p
! zeenews.india.com videos broken by peter's /adguard mobile ads filter list
@@||ads.pubmatic.com/AdServer/js/pwt$script,domain=zeenews.india.com
@@||admin.thexyz.com/javascript/services/analytics.js$script,domain=admin.thexyz.com
||esputnik.com^$3p,badfilter
@@||id.flybuys.com.au/assets/scripts/fingerprint2.min.js$script,domain=id.flybuys.com.au
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,redirect-rule=googletagservices_gpt.js:5,domain=aibusiness.com
@@||nr-data.net^$domain=chaturbate.com
@@||js-agent.newrelic.com^$script,domain=chaturbate.com
! remove bait
.io/ads/$badfilter
@@||googletagmanager.com/gtm.js$domain=buhitter.com
@@||discover.com/*/visitorAPI.js$script,1p
@@||discover.com/*/AppMeasurement.js$script,1p
@@||discover.com/*/AppMeasurement.min.js$script,1p
@@||img.kleinanzeigen.de/api/$image,1p
*$script,3p,from=uqload.com,badfilter
||opsktp.com^$badfilter
@@||hub.docker.com/*/repositories/plausible/analytics/tags/$xhr,1p
||parsely.com^$badfilter
||parsely.com^$3p
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=gizmodo.com,redirect-rule=google-ima.js
! broken by Peter's Lowe
@@||mcs-va.tiktok.com/v1/user/webid$xhr
@@||tn.voyeurhit.com/contents/$image,domain=voyeurhit.tube
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect-rule=google-ima.js,domain=eitb.eus
eitb.eus##.body--onPlayer--ads:remove-class(body--onPlayer--ads)
||counter2.blog.livedoor.com^$badfilter
||counter2.blog.livedoor.com^$image
! bad filter from CZE, SVK: EasyList Czech and Slovak breaking 
! topserialy. si, sledujfilmy. io etc
#@#[id^="etarget"]
arsiv.mackolik.com##+js(set, AdmostClient, {})
@@||content.gap.com/fp/*.js$script,1p
@@||cohesion.bankrate.com/cohesion/cohesion-latest.min.js$script,1p
||mycourses.pearson.com/shared/static/*/component/ga.min.js$script,1p,redirect=google-analytics.com/analytics.js,important
/img/ads/Spinner.png$image,redirect-rule=1x1.gif
||coveo.com^$script,domain=basspro.com,redirect-rule=noopjs
! fix https://pointmall.rakuten.co.jp/gacha
@@||googletagmanager.com/gtm.js$domain=pointmall.rakuten.co.jp
@@||cdn.blueconic.net/akc.js$script,domain=akc.org
@@||akc.blueconic.net^$image,script,xhr,domain=akc.org
||permutive.com^$badfilter
||permutive.com^$3p
instagram.com#@?#article[role="presentation"] > div[style]:-abp-has(span:-abp-contains(/Anzeige|Gesponsert|Sponsored|Geborg|Sponzorováno|Sponsoreret|Χορηγούμενη|Publicidad|Sponsoroitu|Sponsorisé|Bersponsor|Sponsorizzato|広告|광고|Ditaja|Sponset|Gesponsord|Sponsorowane|Patrocinado|Реклама|Sponsrad|ได้รับการสนับสนุน|May Sponsor|Sponsorlu|赞助内容|贊助|প্রযোজিত|પ્રાયોજિત|स्पॉन्सर्ड|Sponzorirano|ಪ್ರಾಯೋಜಿತ|സ്‌പോൺസർ ചെയ്‌തത്|पुरस्‍कृत|प्रायोजित|ਪ੍ਰਾਯੋਜਿਤ|මුදල් ගෙවා ප්‍රචාරය කරන ලදි|Sponzorované|விளம்பரதாரர்கள்|స్పాన్సర్ చేసింది|Được tài trợ|Спонсорирано|Commandité|Sponsorizat|Спонзорисано/))
@@||uicdn.com/shared/sentry/*/bundle.min.js$script,domain=gmx.co.uk|gmx.com
@@||cdn.bluebillywig.com/apps/player/*/admanager$script,domain=digital-photography-school.com
@@||googletagmanager.com/gtm.js$script,domain=riteaid.com
@@||googletagmanager.com/gtag/js?id=G$script,domain=riteaid.com
riteaid.com##^html > body:not(.catalogsearch-result-index):upward(1) > head > script:has-text(googletagmanager)
@@||js.monitor.azure.com/scripts/$script,domain=efilecabinet.net
! unbreak sign up on NSFW sites
@@/signup.php?mode=async&action=show_security_code$image,1p
@@/akam/13/*$script,xhr,1p,domain=easyjet.com|ing.nl
@@||collector-*.px-client.net/b/g$xhr,domain=www.crunchbase.com
@@||googletagmanager.com/gtm.js$script,domain=www.radiox.co.uk
radiox.co.uk##^body:not(:has(#remixd-audio-player)) > script:has-text(googletagmanager)
! Home page live video breakage
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=yaktrinews.com,redirect-rule=google-ima.js
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai.js$script,domain=yaktrinews.com
||dai.google.com/*/id3-events.json
/1.gif?$badfilter
/2.gif?$badfilter
/3.gif?$badfilter
! distro.tv
||i.jsrdn.com/i/1.gif?
! www.d1spas.com
||qbk1.com/1.gif?
! news.cn
||webd.home.news.cn/1.gif?
@@||app.link^$script,domain=fluz.app
@@||api2.branch.io/v1/open$xhr,domain=fluz.app
wnynewsnow.com#@#.ez-video-wrap
@@||videosvc.ezoic.com/play$xhr,domain=wnynewsnow.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=mathgames.com,redirect-rule=google-ima.js
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=tunegenie.com,redirect-rule=google-ima.js
tunegenie.com##.adcontainer
itmedia.co.jp###ulCommentWidget[style*="display"]:style(display: block !important;)
@@||ftb.ca.gov/js/webtrends.min.js$script,1p
@@||wordcounter.icu^$cname
jacksonguitars.com##+js(set, analytics, {})
@@||manchestereveningnews.co.uk^$xhr,script,1p
@@||mirror.co.uk^$script,xhr,1p
@@/@trinitymirrordigital/withnail/*prebid$script,xhr,1p
@@||bcp.crwdcntrl.net/*/data$xhr
@@||tags.crwdcntrl.net^$script,domain=dailystar.co.uk|liverpoolecho.co.uk|football.london|devonlive.com|buzz.ie|inyourarea.co.uk|cornwalllive.com|coventrytelegraph.net|dublinlive.ie|glasgowlive.co.uk|kentlive.news|essexlive.news|lincolnshirelive.co.uk|insider.co.uk|bathchronicle.co.uk|birminghammail.co.uk|cheshire-live.co.uk|corkbeo.ie|crewechronicle.co.uk|croydonadvertiser.co.uk|dailypost.co.uk|dailyrecord.co.uk|derbytelegraph.co.uk|edinburghlive.co.uk|examinerlive.co.uk|gazettelive.co.uk|getreading.co.uk|getsurrey.co.uk|grimsbytelegraph.co.uk|hampshirelive.news|hulldailymail.co.uk|irishmirror.ie|liverpool.com|mylondon.news|nottinghampost.com|rossendalefreepress.co.uk|southportvisiter.co.uk|staffordshire-live.co.uk|stokesentinel.co.uk|walesonline.co.uk
||googleadservices.com/pagead/conversion.js$script,redirect=noop.js,domain=ncsoft.jp,important
@@||matomo.paizo.com/piwik.js$1p
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=lifehacker.com
@@||pubads.g.doubleclick.net/gampad/ads*lifehacker$xhr,domain=imasdk.googleapis.com
||googlevideo.com/videoplayback?expire$media,domain=lifehacker.com,redirect=noopmp3-0.1s
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=doubtnut.com,redirect=google-ima.js,important
||api.doubtnut.com/v2/web-landing/web-ads-info$xhr,redirect=nooptext
! Event manager
@@||ads-api.twitter.com^$xhr,domain=analytics.twitter.com
||appcdn01.xyz^$badfilter
||connatix.com^$badfilter
||connatix.com^$3p
||connatix.com^$3p,removeparam=cid
@@||cd.connatix.com/connatix.player.js$3p,script,domain=accesousa.com|accuweather.com|adweek.com|bellinghamherald.com|bnd.com|bradenton.com|centredaily.com|charlotteobserver.com|easternstandardtimes.com|elnuevoherald.com|flkeysnews.com|fresnobee.com|heraldonline.com|heraldsun.com|hollywoodreporter.com|idahostatesman.com|indiewire.com|islandpacket.com|interestingengineering.com|kansas.com|kansascity.com|kentucky.com|ledger-enquirer.com|loot.tv|macon.com|mahoningmatters.com|mcclatchydc.com|mercedsunstar.com|miamiherald.com|modbee.com|myrtlebeachonline.com|newsobserver.com|reuters.com|sacbee.com|sanluisobispo.com|star-telegram.com|sunherald.com|thenewstribune.com|theolympian.com|thestate.com|tri-cityherald.com|variety.com
hollywoodreporter.com#@#.cnx-player-wrapper
hollywoodreporter.com#@#[id^="jwplayer"]
@@||cds.connatix.com/p/*/connatix.player.$3p,script
@@||cds.connatix.com/p/*/player.css$3p,css
@@||connatix.com/elements/*/cnx-lead-style.css$3p,css
@@||capi.connatix.com/core/pls$3p,xhr
@@||img.connatix.com/pid-$3p,image
@@||vid.connatix.com/pid-$3p,media,xhr
@@||cds.connatix.com/p/*/elements.ui.$3p,script
@@||cds.connatix.com/*/hls$script,3p
@@||cds.connatix.com/p/*/cSyncRemoteEntry.js^$3p,script
#@#.wps-player-wrap
@@||img.connatix.com/*.jpg$3p,image,domain=accuweather.com
bellinghamherald.com,bnd.com,bradenton.com,centredaily.com,charlotteobserver.com,flkeysnews.com,fresnobee.com,heraldonline.com,heraldsun.com,idahostatesman.com,islandpacket.com,kansas.com,kansascity.com,kentucky.com,ledger-enquirer.com,macon.com,mahoningmatters.com,mcclatchydc.com,mercedsunstar.com,miamiherald.com,modbee.com,myrtlebeachonline.com,newsobserver.com,sacbee.com,sanluisobispo.com,star-telegram.com,sunherald.com##^html:not(:has(video)) > head > script:has-text(connatix.com)
loot.tv##^html:not(:has(#connatixPlayerID)) > head > script[src*="connatix"]
thestate.com##^html > head > script:has-text(connatix.id):upward(1) > script:has-text(window.cnx)
variety.com##^html > head > link[rel="canonical"]:not([href*="/video/"]):upward(1) > script[src*="connatix"]
! connatix.com recommended articles/videos
@@||cd.connatix.com/connatix.playspace.js^$script,3p,domain=adweek.com
@@||cds.connatix.com/p/*/connatix.playspace.dc.js^$script,3p,domain=adweek.com
@@||cds.connatix.com/p/*/connatix.playspace.css^$css,3p,domain=adweek.com
@@||connatix.com/core/story^$xhr,method=post,3p,domain=adweek.com
||adweek.com^$removeparam=traffic_source
@@||cds.connatix.com/*/cSyncRemoteEntry.js$script,domain=accuweather.com
mediaite.com#@#.adthrive-video-player
mediaite.com##.adthrive-video-player:style(padding-bottom: 0 !important;)
@@||googletagmanager.com/gtag/js$script,domain=independentespanol.com
@@||api.aws.parking.godaddy.com/v1/parking/landers/$xhr
@@||rt.rtoaster.jp/Rtoaster.js$script,domain=jreastmall.com
! unbreak sagicheck.jp - checking bad url pattern triggers strict-blocking
@@||sagicheck.jp/jp/check/$doc
||lightning.cnn.com/launch/$script,redirect-rule=noopjs
@@||catchup.thisisdax.com/*.m4a$media,domain=globalplayer.com
||scandichotels.com/Static/js/tracking/tracking-data-init.js^$script,1p,important
scandichotels.com##+js(set, datalayer, [])
muropaketti.com##body.noImages .content img:style(display: inline-block !important)
@@||sa.etp-prod.com/analytics.js/v*/analytics.min.js$script,domain=vrv.co
@@||partner-api.sddan.com/api/*/public/partner/$xhr,domain=6play.fr
! unbreaking PageViews widget on blogspot
@@||blogspot.com/b/stats$xhr,1p
! TV-Program information can't be retrieved (Lowe's list)
! @@||securepubads.g.doubleclick.net/pagead/ppub_config$xhr,domain=telsu.fi
! @@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,domain=telsu.fi
! @@||securepubads.g.doubleclick.net/gpt/pubads_impl_$script,domain=telsu.fi
@@||martech.condenastdigital.com/lib/martech.js$script,domain=newyorker.com
||trust-provider.com^*/trustlogo.js$3p,badfilter
@@||myntra.com/beacon/user-data^$xhr,1p
@@*google*$script,frame,xhr,domain=kulturalnemedia.pl
@@||api.calven.app/analytics/$xhr,domain=calven.app|calven.com
@@||googletagmanager.com/gtm.js$script,domain=nespresso.com
@@||securepubads.g.doubleclick.net/pagead/managed/js/gpt/*/pubads_impl.js$script,domain=mediaite.com
@@||cdn.viglink.com/api/$script,domain=9to5google.com
jayisgames.com##.widget-topad:style(padding-bottom: 20px !important;)
@@||fpnpmcdn.net/v*/loader$script,domain=app.writesonic.com
*$image,redirect-rule=1x1.gif,domain=go-girl.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect-rule=google-ima.js,domain=pac-12.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=vtvgiaitri.vn,redirect-rule=google-ima.js
stylist.co.uk##+js(set, Object.prototype.isInitialLoadDisabled, noopFunc)
hornoxe.com#@#div.post:has(a[href^="https://www.amazon.de/"])
hornoxe.com##.ivycat-post:has(a[href^="https://www.amazon.de/"])
@@||securepubads.g.doubleclick.net/pagead/managed/js/gpt/*/pubads_impl.js$script,domain=jn.pt
@@||securepubads.g.doubleclick.net/pagead/managed/js/gpt/*/pubads_impl.js$script,domain=scotsman.com
scotsman.com##[class*="AdContainer"]
scotsman.com##[class*="AdLoading"]
scotsman.com##[class*="Ads__Container"]
scotsman.com##[class*="Billboard__Root"]
scotsman.com##^html:not(:has([class^="Dailymotion__Wrapper"])) > head > script:has-text(gptScript)
@@||taboola.com/magazine/$domain=taboolanews.com
dark-gaming.com##+js(no-xhr-if, lr-ingest.io)
@@||user.userguiding.com/sdk/identify$xhr,domain=xaris.ai
||nettix.fi/*/nettiauto_analytics.js$script,domain=nettiauto.com,important
nettiauto.com##+js(set, listingGoogleEETracking, noopFunc)
@@||simcotools.app/assets/adsense-*.js$script,1p
||startpage.com/sp/adsense/$script,redirect-rule=noopjs
@@||api.aws.parking.godaddy.com/*/domains/*$xhr,3p
thaiairways.com##+js(set, dcsMultiTrack, noopFunc)
thaiairways.com##+js(set, urlStrArray, noopFunc)
||thaiairways.com/static/common/js/wt_js/webtrends.min.js$script,1p,important
@@||sf.ezoiccdn.com/ezoimgfmt/$image,domain=kosmofoto.com
@@||sf.ezoiccdn.com/ezossp/https/kosmofoto.com/_static/$script,domain=kosmofoto.com
@@||sf.ezoiccdn.com/ezossp/https/kosmofoto.com/wp-content/$script,domain=kosmofoto.com
@@||sf.ezoiccdn.com/ezossp/https/kosmofoto.com/wp-includes/$script,domain=kosmofoto.com
@@||miclaro.com.gt/assets/analytics.*.js$script,1p
@@||tags.bkrtx.com/js/bk-coretag.js$script,domain=miclaro.com.gt
doodle.com#@#.AdsSlot
doodle.com#@#.AdsLayout
doodle.com##.AdsLayout__top-container
||hager.com/*/youtubeblocker.js$script,1p
@@||promodarceky.sk/kategorie/reklamne*$xhr,1p
||bing.com/rewardsapp/reportactivity?$badfilter
||bing.com/geolocation/write?$badfilter
||cdn.onesignal.com^$badfilter
! sho.com broken search
||sho.com/www/sho/lib/omniture/AppMeasurement.js$xhr,1p,redirect-rule=noop.js
cerbahealthcare.it##+js(set, pa, {})
cerbahealthcare.it##+js(set, Object.prototype.setConfigurations, noopFunc)
@@||googletagmanager.com/gtm.js$script,domain=dzonline.de|marveloptics.com|wn.de
@@||securepubads.g.doubleclick.net/pagead/managed/js/gpt/*/pubads_impl.js$script,domain=today.line.me
@@||ua.indianexpress.com/api/geoip/resolve$xhr,1p
@@||googletagmanager.com/gtm.js$script,domain=radio-canada.ca
@@||static.chartbeat.com^$domain=repubblica.it
! unbreak sugoroku64.ad-link.jp (account required)
||ad-link.jp/sugoroku64/static/img/promotion_5/spacer.gif$image,redirect-rule=1x1.gif,domain=sugoroku64.ad-link.jp
securegames.iwin.com##+js(no-xhr-if, /gtm.js)
pcwelt.de#@#a[href^="https://pvn.mediamarkt.de/"]
pcwelt.de#@#a[href^="https://pvn.saturn.de/"]
! wgplayer breakages
! games
@@||scylla.wgplayer.com/f_webp/*$image
@@||universal.wgplayer.com/tag/$script,domain=brightygames.com|eminiclip.ro|sisigames.com|yoho.games
@@||wgplayer.com/*/wgAds.$script,domain=brightygames.com|eminiclip.ro|sisigames.com|yoho.games
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=brightygames.com|eminiclip.ro|sisigames.com|yoho.games
brightygames.com,yoho.games##^html > head > meta[property="og:url"]:not([content*="/games/"], [content*="/play/"]):upward(1) > script:has-text(wgplayer)
eminiclip.ro##^html:not(:has(#thegame)) > head > script:has-text(wgplayer)
sisigames.com##^#index-games:upward(html) > head > script:has-text(wgplayer)
! videos
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect-rule=google-ima.js,domain=canvids.com
@@||afv.wgplayer.com/*/wgPlayer.js$script,domain=canvids.com
@@||afv.wgplayer.com/*/conf.json$xhr,domain=canvids.com
! yollamedia breakages - games
@@||portal.cdn.yollamedia.com/storage/$script,domain=pozirk.com
pozirk.com##^html:not(:has(iframe#game)) > head > script[src*="yollamedia.com"]
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=cargames.com,redirect-rule=google-ima.js
sensacine.com##+js(aopr, JadIds)
ewrc-models.com,ewrc-results.com#@#.cardAd
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect-rule=google-ima.js,domain=news8000.com
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai.js$script,domain=news8000.com
tiendaenlinea.claro.com.ni##+js(set, Object.prototype.bk_addPageCtx, noopFunc)
tiendaenlinea.claro.com.ni##+js(set, Object.prototype.bk_doJSTag, noopFunc)
||cs.co^$badfilter
delta.com#@#.adv-container
||shop.motorolasolutions.com/msi-files/libs/dynatrace.js$script,redirect-rule=noopjs,from=shop.motorolasolutions.com
||shop.motorolasolutions.com/msi-files/page-tags/head/dynatrace-loader.js$script,redirect-rule=noopjs,from=shop.motorolasolutions.com
! To counter `statcounter.com` in Peter Lowe's
||statcounter.com^$badfilter
||statcounter.com^$3p
vindobona.org#@#.ads_footer
vindobona.org##.adZoneM
vindobona.org##.adZonePC
vindobona.org##.sponsored
@@||lngtd.com/ehftv_ros.js$script,domain=ehftv.com
@@||analytics.google.com^$domain=firebase.google.com
@@||kleinanzeigen.de^$ghide
kleinanzeigen.de###liberty-vip-billboard
/images/ad/*$badfilter
decathlon.in##body:style(opacity: 1 !important;)
hihonor.com#@#.ad-section
hihonor.com#@#.ad-wrap
@@||cacheorcheck.mopinion.com/survey/public/json-config$xhr,domain=findmystreet.co.uk
@@||collect.mopinion.com/assets/surveys/*/js/survey.min.js$script,domain=findmystreet.co.uk
@@||deploy.mopinion.com^$script,xhr,domain=findmystreet.co.uk
@@||googletagmanager.com/gtm.js$script,domain=findmystreet.co.uk
filelu.com#@#.banner_ads:not(:empty)
@@||click.allkeyshop.com/*&source=www.allkeyshop.com$doc
*$1p,inline-script,script,domain=click.allkeyshop.com
click.allkeyshop.com##+js(refresh-defuser)
@@||autocomplete.clearbit.com^$xhr
neilpatel.com##+js(no-xhr-if, ip-api)
@@||cdn.logly.co.jp^$image,domain=www.asahi.com
@@||dti.ne.jp/cgi-bin/Count.cgi?$image,1p
@@||googletagmanager.com/gtm.js$script,domain=tele2.ee
@@||tags.tiqcdn.com/utag/aaa/main/prod/utag.sync.js$script,domain=apps.calif.aaa.com
||tags.tiqcdn.com/utag/aaa/main/prod/utag.js$script,domain=aaa.com
iphoneincanada.ca#@#a[href^="https://click.linksynergy.com/fs-bin/"]
javgg.net#@#.home_iframead
javgg.net##.home_iframead > iframe:upward(1)
||braze.eu^$badfilter
@@||support.microsoft.com/supportformslib/oneds/dist/ms.analytics-web-
||success.act-on.com^$badfilter
/tagcommander.$badfilter
@@||mark.isbank.com.tr^$script,image,1p
@@||proton.me/*/google-ads-$image,1p
tieba.baidu.com##+js(set, passFingerPrint, noopFunc)
@@||analytics-*.clickdimensions.com/*/pages/$frame,domain=crm.digital.nhs.uk
@@||h-microsoft.online-metrix.net^$xhr,domain=ave9858.github.io|massgrave.dev|docs.atlasos.net
sofascore.com#@#[display^="block,none"]
sofascore.com#@#[display^="none,none"]
sofascore.com##.adUnitBox
! too broad
/mixpanel.$domain=~mixpanel.com,badfilter
linktr.ee##+js(set, DD_LOGS, noopFunc)
/webTracking.$domain=~webtracking.girard-agediss.com,badfilter
/webtracking.min.js
||qualzz.com/assets/trackingScript/webtracking.js
||webtracking.fe.union-investment.de^
@@||imasdk.googleapis.com/pal/sdkloader/pal.js$script,domain=pluto.tv
metastats.net##.col-md-6:style(height: 150px !important;)
metastats.net###page-wrapper > div.row:nth-of-type(1)
@@||4chan.org/adv/$image,domain=boards.4channel.org
! To counter `siteintercept.qualtrics.com` in PL list
||siteintercept.qualtrics.com^$badfilter
*$script,domain=abcya.com,redirect-rule=noopjs
||googletagmanager.com/gtag/js$script,redirect-rule=noop.js:10,domain=scobel.pasaz24.pl
@@||googletagmanager.com/gtm.js$script,domain=nj.com
@@||apps.sophi.io/latest/al-nj.segments.min.js$script,domain=nj.com
@@||nj.com/DG/DEFAULT/rest/rpc/$xhr,1p
www.nj.com##^html > head > :is(meta[name="subscriber_only"][content="false"], meta[property="og:url"]:not([content*=".html"])):upward(html) script:has-text(/googletagmanager|window\.sophi/)
goku.sx##.st-hidden:remove-class(st-hidden)
goku.sx##.st-btn:not(.st-first):style(display: inline-block !important; min-width: 50px !important; width: 50px !important;)
goku.sx##.st-btn > img:style(margin: auto !important; display: block !important;)
@@||cloudflare.com/cdn-cgi/trace$xhr,domain=mgnet.xyz
@@||googletagmanager.com/gtm.js$script,domain=akbank.com
@@||useinsider.com^$domain=akbank.com
||log.api.useinsider.com^$domain=akbank.com,important
||hit.api.useinsider.com^$domain=akbank.com,important
||inference.api.useinsider.com^$domain=akbank.com,important
||useinsider.com^$image,redirect-rule=2x2.png,domain=akbank.com
@@||googletagmanager.com/gtm.js$script,domain=nrj-play.fr
@@||www.googletagmanager.com/gtm.js$script,domain=nykaa.com
@@||cdn.pendo.io/agent/static/*$script,domain=recruiting.adp.com
@@||bat.bing.com/bat.js$script,domain=northwell.edu
@@||cdn.segmentify.com^$css,image,script,domain=mediamarkt.com.tr
@@||img.segmentify.com^$image,domain=mediamarkt.com.tr
@@||per2.segmentify.com^$xhr,domain=mediamarkt.com.tr
@@||googletagmanager.com/gtm.js$script,domain=mediamarkt.com.tr
||googletagmanager.com/gtm.js?*&l=dataLayer$script,domain=mediamarkt.com.tr,important
@@||vbt.io^$css,image,domain=landing.davidho.sg
@@||challenges.cloudflare.com/turnstile/$3p,script
||analytics.google.com^$badfilter
||analytics.google.com^$3p
@@||google-analytics.com^$domain=analytics.google.com
||click.aliexpress.com^$badfilter
/statspage.$badfilter
||sqrt-5041.de^$xhr,domain=joyn.de
||yext-pixel.com/store_pagespixel^$xhr,redirect=1x1.gif,domain=vippetcare.com
||googletagmanager.com/gtm.js$important,domain=fandom.com
||cdn.optimizely.com/js/$important,domain=fandom.com
fandom.com##+js(set, optimizely, {})
fandom.com##+js(set, optimizely.initialized, true)
! Wish list button doesn't work (EP and Lowe)
@@||googletagmanager.com/gtm.js$script,domain=festool.*|festoolcanada.com|festoolusa.com
uqload.co#@#+js(abort-current-script, document.createElement, break;case $.)
@@||areaclienti.generali.it/AreaClienti/plugins/dynatrace-cordova-plugin/$script,1p
eksisozluk111.com##.ad-banner:remove()
! Broken by Lowe's list
@@||googletagmanager.com/gtm.js$script,domain=aruba.it
@@||googletagmanager.com/gtm.js$script,domain=pec.it
! Lowe break content loading & customer assistant tool
@@||googletagmanager.com/gtm.js$script,domain=lippu.fi
@@||koshien-live.net/*/adtag.xml$xhr,domain=vk.sportsbull.jp
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,domain=vk.sportsbull.jp,important
/spacer.gif?$image,redirect-rule=1x1.gif
||googleoptimize.com/optimize.js$domain=grasshopper.com,important
grasshopper.com##+js(set, google_optimize, {})
grasshopper.com##+js(set, google_optimize.get, noopFunc)
||epson.com.cn/common/new/js/tracking_code.js$1p,important
epson.com.cn##+js(set, _gsq, {})
epson.com.cn##+js(set, _gsq.push, noopFunc)
consali.com,topstreamfilm.io#@#a[href^="https://consali.com/"]
yandex.*#@#+js(aopr, Object.prototype.renderDirect):matches-path(/\/(?:weather\/|pogoda\/|hava\/)/)
||script-at.iocnt.net/iam.js$domain=oe24.at,important
oe24.at##+js(set, iom, {})
oe24.at##+js(set, iom.c, noopFunc)
@@||craftaro.com/build/assets/GoogleAd-$script,1p
||nextday.media^$script,redirect-rule=noopjs,domain=gpblog.com
@@||jill.fc.yahoo.com/v1/client/js$script,domain=techcrunch.com
platform.autods.com##+js(set, _conv_q, {})
platform.autods.com##+js(set, _conv_q.push, noopFunc)
indiatimes.com#@#div:has(> div[id^="div-gpt-ad-"])
indiatimes.com##.nonAppView > div div[class]:not([id]) > div[id^="div-gpt-ad"]:upward(1)
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai.js$script,domain=kcra.com|wcvb.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect-rule=google-ima.js,domain=kcra.com|wcvb.com
kcra.com,wcvb.com##+js(set, google.ima.settings.setDisableFlashAds, noopFunc)
@@||ads.pubmatic.com/AdServer/js/pwt/*/pwt.js$script,domain=wionews.com
wionews.com##^link[rel="canonical"]:not([href^="https://www.wionews.com/videos/"]) ~ script#pwt_script
@@||securepubads.g.doubleclick.net/pagead/managed/js/gpt/*$script,domain=moviepilot.de
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,domain=filmstarts.de
@@||securepubads.g.doubleclick.net/pagead/managed/js/gpt/*/pubads_impl.js$script,domain=filmstarts.de
@@||securepubads.g.doubleclick.net/gampad/ads$xhr,domain=filmstarts.de
@@||cdn.lib.getjad.io/library/*$script,domain=filmstarts.de
@@||cdn.lib.getjad.io/prebid/*$script,domain=filmstarts.de
@@||amazon-adsystem.com/*/apstag.js$script,redirect-rule=amazon_apstag.js:5,domain=filmstarts.de
@@||hs.eloqua.com^$frame,domain=anthology.com
@@||mindbodygreen.com/ads-leaderboard-ad-$script,domain=www.mindbodygreen.com
! browsing-topics breakages
@@||cjisonline.com^$permissions=browsing-topics=()
futura-sciences.com##+js(set, pa, {})
futura-sciences.com##+js(set, pa.privacy, {})
||adobe.com/newrelic.js$script,redirect-rule=noopjs,1p
wikihow.com##+js(set, Object.prototype.getTargetingMap, noopFunc)
!#if env_chromium
@@||wikihow.com^$ghide
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,domain=www.wikihow.com
@@||securepubads.g.doubleclick.net/pagead/managed/js/gpt/*/pubads_impl.js$script,domain=www.wikihow.com
wikihow.com##ins.adsbygoogle
wikihow.com##.wh_ad_active:style(margin: 0 !important; visibility: collapse !important;)
!#endif
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect-rule=google-ima.js,domain=startrek.com
citibank.com.sg##+js(set, populateClientData4RBA, noopFunc)
@@||hikmall.com/js/sensorsdata.min.js$script,1p
mytempsms.com#@##container-ad
||dynatrace.com^$script,redirect-rule=noopjs,domain=bcbstx.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,domain=247sports.com,important
@@||mpsnare.iesnare.com/snare.js$script,domain=elgiganten.dk|elgiganten.se|elkjop.no|gigantti.fi|power.fi
@@||wurfl.io/wurfl.js$script,domain=adshnk.com
szbz.de##+js(set, iom, {})
@@||a.omappapi.com/app/campaign-views/*-optin.json$xhr,domain=app.monstercampaigns.com
@@||a.omappapi.com/users/*/images/$image,domain=app.monstercampaigns.com
@@||a.omappapi.com/app/campaign-views/*-success.json$xhr,domain=app.monstercampaigns.com
@@||googletagmanager.com/gtm.js$script,domain=villeroy-boch.fr
||tradeinsights.net^$badfilter
||tradeinsights.net^$3p
/^https?:\/\/[www.0-9a-z]{7,}\.com\/.*\/invoke\.js$/$script,3p,badfilter
api.dock.agacad.com##+js(rpnt, script, /window\.dataLayer.+?(location\.replace\(\S+?\)).*/, $1)
||tm.jsuol.com.br/uoltm.js$script,domain=uol.com.br,important
uol.com.br##+js(set, YT.ImaManager, noopFunc)
uol.com.br##+js(set, UOLPD, {})
uol.com.br##+js(set, UOLPD.dataLayer, {})
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,domain=myspace.com,important
||bauersecure.com/dist/js/prebid/$script,redirect=noopjs,important
@@||googletagmanager.com/gtm.js$script,domain=abcam.com
abcam.com##^link[rel="canonical"]:not([href*="pageconfig=contactus"]):upward(html) script.optanon-category-C0001
@@||my.petinsurance.com/assets/js/new-relic.js$script,1p
gazzetta.gr##+js(set, Adman, {})
ewybory.eu#@#.advertisment
digicol.dpm.org.cn##+js(set, dplus, {})
digicol.dpm.org.cn##+js(set, dplus.track, noopFunc)
||adobedtm.com^*/satelliteLib-$script,domain=poweredbycovermore.com,important
poweredbycovermore.com##+js(set, _satellite, {})
poweredbycovermore.com##+js(set, _satellite.track, noopFunc)
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,domain=vrsicilia.it,important
neurotray.com##+js(nano-stb, /EzoIvent|TDELAY/, 5000)
@@||sf.ezoiccdn.com/ezoimgfmt/$image,3p,domain=neurotray.com
@@||sf.ezoiccdn.com/ezossp/$script,3p,domain=neurotray.com
||sf.ezoiccdn.com/ezossp/https/neurotray.com/?local_ga_js=$script,3p,domain=neurotray.com,important
@@||go.ezodn.com^$css,image,3p,domain=neurotray.com
@@||go.ezodn.com/tardisrocinante/$script,3p,domain=neurotray.com
@@||receiita.xyz^$popup,domain=animexhd.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,important,redirect=google-ima.js:5,domain=abczdrowie.pl|animezone.pl|antyradio.pl|chillizet.pl|claudia.pl|echirurgia.pl|elevensports.pl|elle.pl|elleman.pl|fm.tuba.pl|focusnauka.pl|games.cdn.famobi.com|glamour.pl|grydladzieci.pl|ipla.tv|ipla.tv|kobieta.pl|meloradio.pl|mojegotowanie.pl|mojpieknyogrod.pl|money.pl|national-geographic.pl|parenting.pl|partner.redefine.pl|playpuls.pl|pluscdn.pl|polsatgo.pl|polsatnews.pl|polsatsport.pl|przyslijprzepis.pl|radioplus.pl|radiozet.pl|sadeczanin.info|tvokazje.pl|tvp.pl|twojapogoda.pl|video.onnetwork.tv|videotarget.pl|wp.pl|wtk.pl|interia.pl|www.polsatnews.pl|autocentrum.pl
virginmediatelevision.ie##+js(set, google.ima.dai, {})
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect-rule=google-ima.js,domain=virginmediatelevision.ie
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai.js$script,domain=virginmediatelevision.ie
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,domain=3bmeteo.com,important
3bmeteo.com##+js(nano-sib, adv, *)
! [NSFW] https://deepnude.to/ - Missing "userid" and "identifier" cookies from FingerprintJS
/fingerprint2.min.js$script,3p,redirect=fingerprint2.js,important
/fingerprint2.js$script,3p,redirect=fingerprint2.js,important
sproutgigs.com##+js(fingerprint2)
larazon.es##+js(set, gfkS2sExtension, {})
larazon.es##+js(set, gfkS2sExtension.HTML5VODExtension, noopFunc)
@@||toolbaz.com/tardisrocinante/screx.js$script,1p
@@||toolbaz.com/tardisrocinante/vitals.js$script,1p
! simple counter
||rays-counter.com^$3p,badfilter
||d347cldnsmtg5x.cloudfront.net/util/1x1.gif$image,domain=aplaceforeverything.co.uk,redirect=1x1.gif,important
||linkvertise.com^$badfilter
@@||sparrow.paramountplus.com/streamer/$xhr,1p
@@||cbc.ca/*/cbc-stats-$script,1p
! http://forum.canucks.com/topic/388440-pgt-philadelphia-flyers-at-vancouver-canucks-dec-15-2018/?page=2&tab=comments#comment-14661218
@@||ads.rogersmedia.com/cbc$frame,domain=cbc.ca
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,domain=cbc.ca|~gem.cbc.ca,important
cbc.ca##+js(aeld, click, /event_callback=function\(\){window\.location=t\.getAttribute\("href"\)/)
@@||moja-ostroleka.pl/mapa/sensorsData.json$xhr,1p
2.87.160.7$badfilter
||2.87.160.7^
||d2ma0sm7bfpafd.cloudfront.net/wcsstore/waitrosedirectstorefrontassetstore/custom/js/analyticseventtracking/$script,domain=waitrosecellar.com,important
waitrosecellar.com##+js(set, AnalyticsEventTrackingJS, {})
waitrosecellar.com##+js(set, AnalyticsEventTrackingJS.addToBasket, noopFunc)
waitrosecellar.com##+js(set, AnalyticsEventTrackingJS.trackErrorMessage, noopFunc)
@@||jobillico.com/js/vuejs/gtag/gtag.js$script,1p
@@||fpjscdn.net/*/loader_$script,domain=boomy.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=gospodari.com,redirect=google-ima.js,important
@@||googletagmanager.com/gtm.js$script,domain=freepik.com
@@||googletagmanager.com/gtag/js$script,domain=freepik.com
kicker.de##+js(set, initializeslideshow, noopFunc)
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai.js$script,domain=sonyliv.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,domain=sonyliv.com,important
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=theonion.com
||adsafeprotected.com^$script,redirect-rule=noopjs,domain=theonion.com
theonion.com##+js(nano-stb, b(), 3000)
theonion.com##+js(nano-stb, ads, *)
instapundit.com#@#.postad
instapundit.com#@#.ad-space:not(.textads)
@@||adobedtm.com^*/satelliteLib-$script,domain=costco.*
@@||googletagmanager.com/gtm.js$script,domain=aarhustech.dk
||go.xlirdr.com^$xhr,removeparam
@@||googletagmanager.com/gtag/js$script,redirect-rule=googletagmanager_gtm.js:5,domain=trovvve.com
||sonar.viously.com^$badfilter
as.com##+js(set, DTM.trackAsyncPV, noopFunc)
||cdn.usefathom.com/script.js$domain=sharpen-free-design-generator.netlify.app,important
sharpen-free-design-generator.netlify.app##+js(set, fathom, {})
sharpen-free-design-generator.netlify.app##+js(set, fathom.trackGoal, noopFunc)
buytesmart.com##body[style*="display: none"]:remove-attr(style)
||img.service.belboon.com^$badfilter
||partner.service.belboon.com^$badfilter
||ui.service.belboon.com^$badfilter
/nielsen.js$badfilter
help.cashctrl.com##+js(set, Origami, {})
help.cashctrl.com##+js(set, Origami.fastclick, noopFunc)
@@||microsoft.com/*/aria-web-telemetry$script,1p
||hbb.afl.rakuten.co.jp^$badfilter
||hbb.afl.rakuten.co.jp^$3p
! unbreak player
*$script,3p,denyallow=cloudflare.com|googleapis.com,domain=javgg.club|javgg.net,badfilter
*$script,3p,denyallow=cloudflare.com|fluidplayer.com|googleapis.com,domain=javgg.club|javgg.net
||quantcast.com^$badfilter
@@||wurfl.io/wurfl.js$script,domain=keukenatlas.nl
*.gif$image,redirect=1x1.gif,domain=holybooks.com,important
@@||src.litix.io/videojs/$script,domain=nasa.gov
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect-rule=google-ima.js,domain=moviesandtv.myvi.in
@@||moviesandtv.myvi.in/videojs/videojs-contrib-ads.min.js$script,domain=moviesandtv.myvi.in
@@||cdn.lib.getjad.io^$script,domain=vidaextra.com
@@||c.amazon-adsystem.com/aax2/apstag.js$script,domain=vidaextra.com
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$script,domain=vidaextra.com
@@||securepubads.g.doubleclick.net/pagead/managed/js/gpt/*/pubads_impl.js$script,domain=vidaextra.com
@@||securepubads.g.doubleclick.net/gampad/ads$xhr,domain=vidaextra.com
www.reddit.com,new.reddit.com##.subredditvars-r-ublockorigin [role="dialog"]>div:style(width: auto !important)
@@||static.knowledgehub.com/global/images/ping.gif?$xhr,1p
lumens.com##+js(set, _satellite, {})
lumens.com##+js(set, _satellite.track, noopFunc)
||analytics.skroutz.gr/analytics.min.js^$script,1p,redirect-rule=noop.js
@@||hdblog.it/new_files/ajax/bf_new.php$frame,1p
@@||worker.clerkprod-cloudflare.net^$xhr,domain=qiwi.gg
@@||cdns.brsrvr.com/v1/br-trk-*.js^$script,3p,domain=uncommongoods.com
@@||ads.viralize.tv/player/$domain=automoto.it|moto.it|ilrestodelcarlino.it|quotidiano.net
@@||ads.viralize.tv/display/$domain=automoto.it|moto.it|ilrestodelcarlino.it|quotidiano.net
@@||ads.viralize.tv/t-bid-opportunity/$domain=automoto.it|moto.it
@@||ads.viralize.tv/d-vast/$domain=automoto.it|moto.it
@@||ads.viralize.tv^|$domain=automoto.it|moto.it
@@||monetize-static.viralize.tv/prebid.min.$domain=automoto.it|moto.it
@@||npttech.com/advertising.js$domain=independent.co.uk
||inmobi.com^$badfilter
@@||twinkie.xyz/cdn-cgi/apps/$script,1p
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,3p,redirect-rule=google-ima.js,domain=androidpolice.com
@@||cdn.adsninja.ca/adsninja_client$css,script,3p,domain=androidpolice.com
@@||androidpolice.com^$ghide
androidpolice.com##.adsninja-ad-zone:not(.adsninja-valstream)
! Override EasyList Germany exceptions
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,important,redirect=google-ima.js,domain=atv.at|autobild.de|chip.de|computerbild.de|gentside.de|oe24.at|ohmymag.de|phonostar.de|schwaebische.de|spielaffe.de|sport.sky.de|wetteronline.de
||jsrdn.com^$badfilter
! cname https://github.com/uBlockOrigin/uAssets/issues/21297#issuecomment-1848938391
@@||geo.dailymotion.com^$cname
||munchkin.marketo.net/munchkin.js$script,important,redirect=noop.js,domain=st.com
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,3p,redirect=google-ima3,domain=humix.com|mistergadget.tech,important
meijer.com#@#.product-grid__product:has(.product-tile__sponsored)
/web-vitals.$script,redirect-rule=noopjs,domain=amazon.com
@@||amazonwebservicesinc.tt.omtrdc.net/m2/amazonwebservicesinc/ubox/raw$xhr,3p,domain=aws.amazon.com
||amazonwebservicesinc.tt.omtrdc.net/m2/amazonwebservicesinc/ubox/raw$xhr,3p,removeparam,domain=aws.amazon.com
||cdnwebonplay.gviet.vn/public/js/player/ads/ima3.js$script,3p,redirect=google-ima.js,domain=vtvcab.vn,important
@@||amazon.*/action-impressions/1/OP/$xhr,1p
msn.com#@#.intra-article-module
#@#[id^="adv-"]:not(#adv-settings)
commande.rhinov.pro##+js(set, Sentry, {})
commande.rhinov.pro##+js(set, Sentry.init, noopFunc)
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,3p,redirect-rule=google-ima.js,domain=thethings.com
@@||cdn.adsninja.ca/adsninja_client$css,script,3p,domain=thethings.com
@@||thethings.com^$ghide
thethings.com##.adsninja-ad-zone:not(.adsninja-valstream)
||awswaf.com^*/telemetry$badfilter
@@||cdn.pendo.io/agent/static/*/pendo.js$script,domain=netsecure.adp.com
@@||googletagmanager.com/gtm.js$script,3p,domain=syracuse.com
@@||apps.sophi.io/latest/al-syracuse.segments.min.js$script,3p,domain=syracuse.com
@@||syracuse.com/DG/DEFAULT/rest/rpc/$script,1p
!#if env_chromium
||community.ipinfo.io^$csp=worker-src 'none'
!#endif
! remove once the above commit comes to stable
@@||agoda.com/*/book/$removeparam
