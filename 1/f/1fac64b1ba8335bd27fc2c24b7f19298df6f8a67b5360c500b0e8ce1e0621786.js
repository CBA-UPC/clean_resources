![Adblock Plus 2.0]
! Checksum: GC+pjsaq20diwMaNmAFG9A
! Diff-Path: ../patches/9/9-s-1705397843-3600.patch
! Title: AdGuard Spanish/Portuguese filter
! Description: Filter list that specifically removes ads on websites in Spanish, Portuguese, and Brazilian Portuguese languages.
! Version: 2.0.22.87
! TimeUpdated: 2024-01-16T09:34:09+00:00
! Expires: 5 days (update frequency)
! Homepage: https://github.com/AdguardTeam/AdGuardFilters
! License: https://github.com/AdguardTeam/AdguardFilters/blob/master/LICENSE
!
!---------------------------------------------------------------------------!
!-------------- General JS API ---------------------------------------------!
!---------------------------------------------------------------------------!
! JS API START
!
! AG_removeCookie
! Examples: AG_removeCookie('/REGEX/') or AG_removeCookie('part of the cookie name')
!
!
! AG_defineProperty
! See https://github.com/AdguardTeam/deep-override
!
!
! AG_abortOnPropertyWrite(property, debug)
! Aborts execution of a script when it attempts to write the specified property.
! Based on AG_defineProperty (https://github.com/AdguardTeam/deep-override)
!
! Examples:
! AG_abortOnPropertyWrite('String.fromCharCode');
!
! @param property property or properties chain
! @param debug optional, if true - we will print warning when script is aborted.
!
!
! AG_abortOnPropertyRead(property, debug)
! Aborts execution of a script when it attempts to read the specified property.
! Based on AG_defineProperty (https://github.com/AdguardTeam/deep-override)
!
! Examples:
! AG_abortOnPropertyRead('String.fromCharCode');
!
! @param property property or properties chain
! @param debug optional, if true - we will print warning when script is aborted.
!
!
! AG_abortInlineScript(regex, property, debug)
! Aborts execution of an inline script when it attempts to access the specified property
! AND content of the <script> element matches specified regular expression.
! Based on AG_defineProperty (https://github.com/AdguardTeam/deep-override)
!
! Examples:
! AG_abortInlineScript(/zfgloadedpopup|zfgloadedpushopt/, 'String.fromCharCode');
!
! @param regex regular expression that the inline script contents must match
! @param property property or properties chain
! @param debug optional, if true - we will print warning when script is aborted.
!
!
! AG_setConstant('property.chain', 'true') // defines boolean (true), same for false;
! AG_setConstant('property.chain', '123') // defines Number 123;
! AG_setConstant('property.chain', 'noopFunc') // defines function(){};
! AG_setConstant('property.chain', 'trueFunc') // defines function(){return true};
! AG_setConstant('property.chain', 'falseFunc') // defines function(){return false};
!
! JS API FINISH
!---------------------------------------------------------------------------!
!---------------------------------------------------------------------------!
!-------------- Advertising networks ---------------------------------------!
!---------------------------------------------------------------------------!
!
! This section contains the list of third-party advertising networks domains.
! Note, that we only put rules that block full domains here and not URL parts (there's `general_url.txt` for that). Also, it must be domains that are used in a third-party context.
!
! Good: ||doubleclick.net^$third-party
! Bad: /banner.jpg (should be in general_url.txt)
! Bad: ||adssubdomain.legitwebsite.com^ (should be in adservers_firstparty.txt)
!
!
! https://forum.adguard.com/index.php?threads/ivoox-com-podcasts-issues.29530/
! ||addevweb.com^$third-party
!
||nobeta.com.br^$third-party
||bcgame.top^$popup
||ads.impulsosocial.online^$all
||adsocy.com^$third-party
||cirsoiddanize.com^
||bowedcounty.com^
||fuegodevida.com^$third-party
||admasters.media^$third-party
||spacelala.com^
||pitors.com^
||texamp.com^
||mucmoapa.com^
||cibgphkiqbjk.com^
||sgbm.info^$third-party
||unblockia.com^$third-party
||publi.atresmediapublicidad.com^
||landings.hopghpfa.com^
||landings.zcoptry.com^
||banners.inforchannel.com.br^
||popunder.online^$third-party
||juicebarads.com^$third-party
||adcains.com^$third-party
||usounoul.com^
||lspzhtvstux.com^
||xfkkvjabbogciwl.top^
||cameracaseira.com^$third-party
||bloco.top^$third-party
||fireadsone.com^$third-party
||xwktyiydn.com^
||pwjwgrtznpl.com^
||embedplayerbooyah.com^$third-party
||clubesaudedeassinatura.com.br^$third-party
||lyricslocusvaried.com^$third-party
||viamariller.com^$third-party
||zcp.zwame.pt^
||adserver*.euroweeklynews.com^
||roulediana.com^$third-party
||ads.enrt.eu^
||19bk5lo5q2.com^$third-party
||adsrv.eacdn.com^$third-party
||videoo.tv^$third-party
||eru5tdmbuwxm.com^
||gyh1lh20owj.ru^
||25haich4342.ru^
||byfoongusor.com^
||v2b.nucleo.online^
||loboclick.com^$third-party
||bserver.gp-guia.net^
||widgets.informars.com^
||richaudience.com^$third-party
||potu.xyz^
||whoutsog.net^$third-party
||oahaurti.com^$third-party
||afiliados.hostgator.com.br^$third-party
||ymonetize.com^$third-party
||nucleo.ml^$third-party
||phoenix-widget.com^$third-party
||c9p7at3pctmprvb5ecq66vvd.ml^$third-party
||premiumads.com.br^$third-party
||subdo.torrentrapid.com^
||sunmedia.tv^$third-party
||lzrikate.com^$third-party
||redemw.com^$third-party
||grupoemidia.com.br^$third-party
||tckn-code.com^$third-party
||zona1.at.ua^$third-party
||qebodu.com^$third-party
||adw.sapo.pt^
||midan.io^$third-party
||lojapremio.com.br^$third-party
||boudja.com^$third-party
||adsnetworkbr.ml^$third-party
||sworatio.co^$third-party
||crazyhell.com^$popup
||waycash.net^$third-party
||184.106.248.76^
||200.72.40.46^$third-party
||actualtrade.eu^$third-party
||ad-pub.terra.com.br^
||ad.batanga.com^$third-party
||ad.correioweb.com.br^
||ad.harrenmedianetwork.com^$third-party
||ad.jamba.pt^$third-party
||ad.pt.doubleclick.net^$third-party
||ad.terra.com.mx^
||ad.terra.com^
||adbasket.net^$third-party
||adcell.de^$third-party
||adfueling.com^
||adnetwork.com.br^$third-party
||ads.adpv.com^$third-party
||ads.celldorado.com^
||ads.dgabcsolutions.com.br^$third-party
||ads.elpais.com.uy^
||ads.eorezo.com^
||ads.gamavirtual.com^
||ads.gazetaesportiva.net^
||ads.grupozeta.es^$third-party
||ads.lomadee.com^
||ads.mercadoclics.com^
||ads.olx.com^
||ads.periodistadigital.com^
||ads.prisacom.com^$third-party
||adserver.clix.pt^$third-party
||adsmwt.com^
||adsroute.com^
||adultoafiliados.com.br^$third-party
||affilired.com^$third-party
||afilio.com.br^$third-party
||analytics.teleclal.com^$third-party
||antevenio.com^$third-party
||astrolabio.net^$third-party
||blogspot.com^*/MEGATVNOPC-$third-party
||bn.imguol.com^$third-party
||box.zap.com.br^$third-party
||bpiexpressoimobiliario.pt^$subdocument,third-party
||buxim.com^$third-party
||catho.com.br/parceiros/ad/$third-party
||cliquemidia.com^$third-party
||coguan.com^$third-party
||comprafacil.com.br/images/$third-party
||contadordevisitas.es^$third-party
||contadores.miarroba.es^$third-party
||contadorgratis.com^$third-party
||contadorgratis.es^$third-party
||contadorgratis.web-kit.org^$third-party
||controlsgc.prisacom.com^$third-party
||coolmobile.es^$third-party
||datatech.es^$object,third-party
||de17a.com^$third-party
||detectca.easysol.net^$third-party
||direcionando.baixedetudo.net^$third-party
||diximedia.es^$third-party
||epartner.es^$third-party
||fgcash.com.br^$third-party
||foneclick.com.br^$third-party
||freemeteo.com^*/log.asp$third-party
||hotwords.com.br^$third-party
||hotwords.com.mx^$third-party
||hotwords.es^$third-party
||idealista.com^$third-party,domain=~idealista.com
||ieurop.net^$third-party
||img.netaffiliation.com^$third-party
||intrastats.com^$third-party
||italianos.it/2008/Tim/$third-party
||kontextua.com^$third-party
||linkeasy.org^$third-party
||logs.eresmas.com^$third-party
||lomadee.com^$third-party
||maik.ff-bt.net^$third-party
||maispremium.com.br^$third-party
||manuaisadultos.com.br^$third-party
||metaffiliation.com^$third-party
||metododinheiro.pt^$third-party
||miarroba.info^$third-party
||micodigo.com^$third-party
||mipagerank.com^$third-party
||muyviajero.com^$third-party
||navdmp.com^
||netfilia.com^$third-party
||new-down.com^$third-party
||newstogram.com^$third-party
||nspmotion.com^$third-party
||nuevaq.net^$third-party
||offers.motime.com.br^$third-party
||opromo.com^$third-party
||pelicula20.com^$third-party
||planetup.com^$third-party
||pmssrv.mercadolibre.com.mx^$third-party
||pmssrv.mercadolibre.com.ve^$third-party
||pmssrv.mercadolivre.com.br^$third-party
||probabilidades.net^$third-party
||publicidad.net^
||publicidees.com^$third-party
||publipagos.com^
||refblock.com^$third-party
||say.ac^$third-party
||seomaster.com.br^$third-party
||smartclip.net^$third-party
||softclick.com.br^
||solution911.com^
||spamtheweb.com/ul/$third-party
||spublicidad.net^
||swi-adserver.com^$third-party
||templates.buscape.com^$third-party
||todoanimes.com^$script,third-party
||tracking.fsjmp.com^$third-party
||urlcash.net^$third-party
||ver-pelis.net^$third-party
||xclk-integracion.com^$third-party
||yestorrents.org^$third-party
||zebestof.com^$third-party
!
!
! This section contains the list of advertising networks domains, which are hosted on non advertising sites as subdomains.
! Note, that we only put rules that block full subdomains here and not URL parts (there's `general_url.txt` for that).
!
! Good: ||ad.doubleclick.net^
! Bad: /banner.jpg (should be in general_url.txt)
! Bad: ||legitwebsite.com^$third-party (should be in adservers.txt)
!
!
||adclient-uol.lp.uol.com.br^
||adv.r7.com^
!---------------------------------------------------------------------------!
!-------------- Anti-adblock rules -----------------------------------------!
!---------------------------------------------------------------------------!
!
! First of all, this section has common rules that prevent most known ad block detections. In that case domain should be added to the common rules.
! The section contains the list of the rules are against all kinds of ads reinjection or ad-blocking circumvention scripts. If such a script does not cripple the website, we add rules to the Annoyances filter.
! Rules should generally be domain-specific. In some exceptional cases, it's allowed to add generic ones, but this should be approved by most of the maintainers.
!
! Good: ||example.org/adblock/detect.js
! Good: @@/adblocker/detect.js$domain=example.org
! Bad: ||ad.doubleclick.net^ (should be in adservers.txt)
!
!
!
! https://github.com/AdguardTeam/AdguardFilters/issues/170650
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,redirect=googlesyndication.com/adsbygoogle.js,domain=tv0800.tv
! https://github.com/AdguardTeam/AdguardFilters/issues/169886
biobiochile.cl#@#[id^="google_ads_iframe"]
biobiochile.cl##+js(no-setTimeout-if, window.getComputedStyle)
||biobiochile.cl/assets/js/block/bbcl-annoying-block.es.js
! https://github.com/AdguardTeam/AdguardFilters/issues/169746
depor.com#$#div#detect.adsbox.doubleclick { display: block !important; }
depor.com##+js(addEventListener-defuser, load, banner-ads)
! https://github.com/AdguardTeam/AdguardFilters/issues/169126
! https://github.com/AdguardTeam/AdguardFilters/issues/169287
techdiniz.com,trueliketop.org##+js(set-cookie, force_ad, 2)
! https://github.com/AdguardTeam/AdguardFilters/issues/169277
seriesemcena.com.br##+js(no-requestAnimationFrame-if, .clientHeight)
! https://github.com/AdguardTeam/AdguardFilters/issues/168718
||agregalink.net/js/adblock
! https://github.com/AdguardTeam/AdguardFilters/issues/168376
ggames.com.br##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/168358
elespanol.com##+js(abort-on-property-read, setNptTechAdblockerCookie)
! https://github.com/AdguardTeam/AdguardFilters/issues/167053
gamesteelstudioplus.blogspot.com,gamesteelstudio.blogspot.com###antiAdBlock
gamesteelstudioplus.blogspot.com,gamesteelstudio.blogspot.com##+js(abort-current-script, EventTarget.prototype.addEventListener, adsbygoogle.js)
! https://github.com/AdguardTeam/AdguardFilters/issues/166992
agroplanet.es##.popup430wrap
! https://github.com/AdguardTeam/AdguardFilters/issues/166967
aqualapp.com##+js(no-xhr-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/166715
mundodonghua.com##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/166474
receitasoncaseiras.online##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/165935
infohojeonline.blogspot.com###antiAdBlock
infohojeonline.blogspot.com##+js(abort-current-script, EventTarget.prototype.addEventListener, adsbygoogle.js)
! https://github.com/AdguardTeam/AdguardFilters/issues/165941
mundodevalor.me##+js(abort-on-property-read, possivelAdblockDetectado)
! https://github.com/AdguardTeam/AdguardFilters/issues/165465
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=dicasvalores.com
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,redirect=googlesyndication.com/adsbygoogle.js,important,domain=dicasvalores.com
! https://github.com/AdguardTeam/AdguardFilters/issues/165846
! https://github.com/AdguardTeam/AdguardFilters/issues/165412
aquiyahorajuegos.net#@#.adsBanner
aquiyahorajuegos.net##+js(abort-on-property-read, eazyAdUnBlockerHttp)
! https://github.com/AdguardTeam/AdguardFilters/issues/165264
receitasdochico.life,dicasdefinancas.net,dicasfinanceirasbr.com#@#.ad-1
receitasdochico.life,dicasdefinancas.net,dicasfinanceirasbr.com#@#.ads-2
dicasdevalor.net##+js(abort-current-script, jQuery, AdblockDetector)
receitasdochico.life,dicasdefinancas.net,dicasfinanceirasbr.com##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/165192
||tudosobrefinancas.com/avan/ads_anuncio.js
tudosobrefinancas.com#$#body div[id].ads.adsbox.doubleclick { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/164545
expertplay.net##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/164377
manga-crab.com##div[uncopy-anti-adblocker]
manga-crab.com##+js(abort-on-property-read, antiAdBlockerStyle)
! https://github.com/AdguardTeam/AdguardFilters/issues/164082
sempreupdate.com.br#@#[id^="google_ads_iframe"]
sempreupdate.com.br##+js(no-setTimeout-if, placebo.height())
! https://github.com/AdguardTeam/AdguardFilters/issues/164047
||peliculas8k.com/TV/encriptador/cierrapues.js
peliculas8k.com##+js(no-setTimeout-if, Promise[\'all\'](urls)
peliculas8k.com##+js(no-fetch-if, /googlesyndication\.com|iubenda\.com|unblockia\.com|bannersnack\.com|mopinion\.com/)
! https://github.com/AdguardTeam/AdguardFilters/issues/163384
alarmadefraude.com##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/162478
modescanlator.com##+js(no-fetch-if, ads_block.txt)
! https://github.com/AdguardTeam/AdguardFilters/issues/162260
||cdn.jsdelivr.net/gh/MuriloWalker/javascript@main/AntiAdblock.js
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$redirect=googlesyndication.com/adsbygoogle.js,domain=xerifetech.com,xmlhttprequest,script
! https://github.com/AdguardTeam/AdguardFilters/issues/161608
||bluf.online/js/adblock
! https://github.com/AdguardTeam/AdguardFilters/issues/161248
sabornutritivo.com##+js(set-cookie, visited, 1)
sabornutritivo.com##+js(no-fetch-if, pagead2.googlesyndication.com)
sabornutritivo.com##+js(adjust-setTimeout, .html(, *, 0.001)
! https://github.com/AdguardTeam/AdguardFilters/issues/161247
||financasdeouro.com/*/js/adblock.js
financasdeouro.com##+js(set-cookie, visited, 1)
financasdeouro.com##+js(set-constant, antiAdBlockerHandler, noopFunc)
financasdeouro.com##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/161243
guiacripto.online##+js(set-cookie, visited, 1)
guiacripto.online##+js(no-setTimeout-if, /adBlock|\.height\(\)/)
guiacripto.online##+js(adjust-setTimeout, playFunction, *, 0.001)
! https://github.com/AdguardTeam/AdguardFilters/issues/164466
! https://github.com/AdguardTeam/AdguardFilters/issues/160806
southparkstudios.com.br,southpark.lat##+js(no-fetch-if, imasdk.googleapis.com)
||imasdk.googleapis.com/pal/sdkloader/pal.js$script,redirect=noop.js,domain=southparkstudios.com.br|southpark.lat
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,domain=southparkstudios.com.br|southpark.lat
! https://github.com/AdguardTeam/AdguardFilters/issues/160498
animeszone.net#@#.ads-box
animeszone.net##.detectadb
animeszone.net##.bodyc
animeszone.net##+js(abort-current-script, jQuery, /adblock/i)
animeszone.net##+js(set-constant, detectAdBlock, noopFunc)
animeszone.net##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/uBlockOrigin/uAssets/pull/19481
nodo313.net#@#.banner_728x90
! https://github.com/AdguardTeam/AdguardFilters/issues/160122
megacanaisonline.me##div[id][class^="popup"][class$="wrap"][style]
megacanaisonline.me##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/159034
qwanturankpro.com,desbloquea.me,mega-enlace.com##+js(no-fetch-if, method:HEAD)
! https://github.com/uBlockOrigin/uAssets/issues/19312
softwareany.net##+js(addEventListener-defuser, load, detect-modal)
softwareany.net#@#ins.adsbygoogle
softwareany.net##ins.adsbygoogle:not(.ad-slot)
! https://github.com/AdguardTeam/AdguardFilters/issues/160783
! https://github.com/AdguardTeam/AdguardFilters/issues/158732
repretel.com,redbolivision.tv.bo##+js(set-constant, googletag._loaded_, true)
repretel.com,redbolivision.tv.bo##+js(no-fetch-if, securepubads.g.doubleclick.net/pagead/ppub_config)
||securepubads.g.doubleclick.net/tag/js/gpt.js$script,redirect-rule=noop.js,domain=redbolivision.tv.bo|repretel.com
||securepubads.g.doubleclick.net/pagead/ppub_config$xmlhttprequest,redirect-rule=noop.txt,domain=redbolivision.tv.bo|repretel.com
! https://github.com/AdguardTeam/AdguardFilters/issues/159624
animesonline.nz##.detectadb
animesonline.nz##.cleitao
animesonline.nz#@#.ads-box
animesonline.nz##+js(set-constant, AdblockDetector, {})
animesonline.nz##+js(no-fetch-if, pagead2.googlesyndication.com)
! image not shown
@@||olimposcans.com^*_prebid-ads.$script,~third-party
! https://github.com/AdguardTeam/AdguardFilters/issues/157526
downloads.sayrodigital.com##+js(no-fetch-if, adsbygoogle)
! https://github.com/AdguardTeam/AdguardFilters/issues/157050
@@||mdr.ar/static/plugins/ads-prebid.js
mdr.ar##+js(set-constant, canRunAds, true)
! https://github.com/AdguardTeam/AdguardFilters/issues/156973
enlacito.com##+js(no-fetch-if, method:HEAD)
! https://github.com/AdguardTeam/AdguardFilters/issues/156826
teleculinaria.pt##+js(no-fetch-if, adsbygoogle)
! https://github.com/AdguardTeam/AdguardFilters/issues/156578
meocloud.pt##.adblock_warning
meocloud.pt#$#body .adblock_warning:not(#style_important) { position: absolute !important; left: -3000px !important; }
meocloud.pt##+js(set-constant, blockAdBlock._options, noopFunc)
! https://github.com/uBlockOrigin/uAssets/issues/18907
verasoul.com##+js(no-setTimeout-if, placebo)
verasoul.com#@#[id^="google_ads_iframe"]
! https://github.com/AdguardTeam/AdguardFilters/issues/153847
los40.com##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/152019
zona-leros.com#$#.iframeDiv > center > a[target="_blank"] { position: absolute !important; left: -3000px !important; }
zona-leros.com##+js(no-setTimeout-if, checkAdblockUser)
! https://github.com/AdguardTeam/AdguardFilters/issues/150604
raulprietofernandez.net##+js(no-xhr-if, pagead2.googlesyndication.com)
! https://www.reddit.com/r/uBlockOrigin/comments/13c9rw1/
canalnatelinhaonline.blogspot.com##+js(abort-current-script, addEventListener, displayMessage)
canalnatelinhaonline.blogspot.com#@##ads-menu
canalnatelinhaonline.blogspot.com#@##adtech_1
canalnatelinhaonline.blogspot.com#@##adv_config
canalnatelinhaonline.blogspot.com#@##rightAdsDiv
! https://github.com/AdguardTeam/AdguardFilters/issues/150073
fichajes.com##+js(set-constant, adManagerBlocked, undefined)
! https://github.com/AdguardTeam/AdguardFilters/issues/149775
acortame-esto.com##+js(no-fetch-if, method:HEAD)
! https://github.com/uBlockOrigin/uAssets/issues/17645
negociosecommerce.com,puromarketing.com,todostartups.com##+js(no-fetch-if, pagead2.googlesyndication.com)
negociosecommerce.com,puromarketing.com,todostartups.com##+js(no-fetch-if, call-zone-adxs)
negociosecommerce.com,puromarketing.com,todostartups.com#@#.adxs-vertisements
! https://github.com/AdguardTeam/AdguardFilters/issues/162380
! https://github.com/AdguardTeam/AdguardFilters/issues/148011
hinatasoul.com##+js(abort-on-property-read, adBlockFunction)
hinatasoul.com##+js(abort-current-script, document.getElementsByTagName, adsbygoogle.js)
!+ NOT_PLATFORM(windows, mac, android)
$script,redirect-rule=noop.js,domain=hinatasoul.com
! https://github.com/AdguardTeam/AdguardFilters/issues/146455
niusdiario.es#@#.sponsored_ad
niusdiario.es##+js(set-constant, $MICROSITE_INFO.blockAdBlock, false)
! https://github.com/AdguardTeam/AdguardFilters/issues/145474
xerifetech.com##+js(no-setTimeout-if, _0x)
xerifetech.com##+js(addEventListener-defuser, , _0x)
xerifetech.com##+js(set-constant, adblock.check, noopFunc)
xerifetech.com#$#body div.adsbox.doubleclick.ad-placement[id]:not(#style_important) { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/144342
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$xmlhttprequest,script,redirect=noop.js,domain=tipsdesalud.tips|saludmasya.com
tipsdesalud.tips,saludmasya.com#@#.ad_content
tipsdesalud.tips,saludmasya.com#@#.ad_body
tipsdesalud.tips,saludmasya.com#@#.ad_main
tipsdesalud.tips,saludmasya.com#@#.ad_title
! https://github.com/AdguardTeam/AdguardFilters/issues/144188
independentespanol.com##+js(no-fetch-if, securepubads.g.doubleclick.net/pagead/ppub_config)
@@||pub.pixels.ai/wrap-independent-no-prebid-lib.js$domain=independentespanol.com
@@||static.adsafeprotected.com/iasPET.1.js$domain=independentespanol.com
! https://github.com/AdguardTeam/AdguardFilters/issues/144328
@@||mantrazscan.com/wp-content/plugins/dh-anti-adblocker/
mantrazscan.com#$#.jconfirm { display: none !important; }
mantrazscan.com#$#body { overflow: auto !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/144312
buscalinks.xyz,gamesviatorrent.top#$##pbt { display: none !important; }
buscalinks.xyz,gamesviatorrent.top#$#body { overflow: auto !important; }
buscalinks.xyz,gamesviatorrent.top##+js(abort-current-script, document.createElement, Adblock)
! https://github.com/AdguardTeam/AdguardFilters/issues/143695
inuyashadowns.com.br##+js(abort-current-script, document.createElement, adblock)
! https://github.com/AdguardTeam/AdguardFilters/issues/143169
netmentor.es#$#.modal-backdrop.show { display: none !important; }
netmentor.es#$#.modal-open .modal { display: none !important; }
netmentor.es#$#.op-body { overflow: auto !important; }
! https://github.com/uBlockOrigin/uAssets/issues/16746
futbolfantasy.com#@#.adsBanner
! https://github.com/AdguardTeam/AdguardFilters/issues/142756
nptmedia.tv##+js(no-fetch-if, /pagead2\.googlesyndication\.com|ads-api\.twitter\.com/)
! https://github.com/AdguardTeam/AdguardFilters/issues/168950
! https://github.com/AdguardTeam/AdguardFilters/issues/142951
! https://github.com/AdguardTeam/AdguardFilters/issues/142462
netcine3.la##+js(abort-on-stack-trace, alert, eval)
netcine3.la##+js(abort-on-stack-trace, history.go, eval)
! https://github.com/AdguardTeam/AdguardFilters/issues/142265
antoniomote.com#$#[id].adsbox.doubleclick.ad-placement { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/142266
oliberal.com##+js(abort-current-script, $, blockWall)
! https://github.com/AdguardTeam/AdguardFilters/issues/141995
aiyumangascanlation.com#@#.ad-placement
aiyumangascanlation.com#@#.ad-placeholder
aiyumangascanlation.com#@#.body-top-ads
aiyumangascanlation.com#@#.c-ads
aiyumangascanlation.com#@#.wall-ads-control
aiyumangascanlation.com#@#.wall-ads-right
! https://github.com/AdguardTeam/AdguardFilters/issues/141256
||tag.easycontent.com/app.js
! https://github.com/AdguardTeam/AdguardFilters/issues/141370
olhonaviagem.com##+js(nano-setInterval-booster, .style.display, *, 0.02)
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,redirect=googlesyndication.com/adsbygoogle.js,domain=olhonaviagem.com
! https://github.com/AdguardTeam/AdguardFilters/issues/141100
investnewsbrazil.com,ricettafitness.com###adblockbyspider
/traduzidocode.min.js$domain=investnewsbrazil.com|ricettafitness.com
! https://github.com/AdguardTeam/AdguardFilters/issues/140890
pobre.wtf##+js(set-constant, adBlockerActive, false)
pobre.wtf##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/158243
! https://github.com/AdguardTeam/AdguardFilters/issues/139850
@@||suaurl.com^$generichide
@@||reidoplacar.com^$generichide
@@||suaads.com^$generichide
$xmlhttprequest,redirect-rule=noop.txt,domain=suaurl.com|reidoplacar.com|suaads.com
suaads.com,reidoplacar.com,suaurl.com##+js(no-fetch-if, /^(?!.*(chrome-extension:)).*$/ method:HEAD)
suaads.com,reidoplacar.com,suaurl.com##+js(no-setTimeout-if, Por favor\, desative)
suaads.com,reidoplacar.com,suaurl.com##+js(no-setInterval-if, /adblock|Por favor\, desative|adsbygoogle\.js/)
suaads.com,reidoplacar.com,suaurl.com##+js(set-constant, cdo, 0)
suaads.com,reidoplacar.com,suaurl.com##+js(abort-current-script, document.addEventListener, .innerHTML)
!+ NOT_PLATFORM(ios, ext_android_cb, ext_safari)
||suaads.com/peel1-ad-300x250.js
! https://github.com/AdguardTeam/AdguardFilters/issues/138441
impactoespananoticias.com##+js(set-constant, canRunAds, true)
@@||impactoespananoticias.com/static/plugins/ads-prebid.js
! https://github.com/AdguardTeam/AdguardFilters/issues/137471
! https://github.com/AdguardTeam/AdguardFilters/issues/137450
gamestorrents.one#$##pbt { display: none !important; }
gamestorrents.one#$#body { overflow: auto !important; }
gamestorrents.one##+js(abort-current-script, document.createElement, adsbygoogle.js)
! https://github.com/AdguardTeam/AdguardFilters/issues/136826
legendei.net#@#.adsBanner
legendei.net##+js(set-constant, eazy_ad_unblocker_msg_var, '')
! https://github.com/AdguardTeam/AdguardFilters/issues/136480
@@||phoenixkiller.com/assets/js/ad-provider.js$domain=csrevo.com
csrevo.com##+js(abort-current-script, $, !document.getElementById()
! https://github.com/AdguardTeam/AdguardFilters/issues/136557
costumbresmexico.com,desbloqueador.site##+js(no-fetch-if, ads-twitter.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/136572
@@||acortalo.net^$generichide
acortalo.net##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/135094
link-descarga.site##.adp
link-descarga.site##.adp-underlay
link-descarga.site##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/134647
meutimao.com.br##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/134928
mangacrab.com##div[uncopy-anti-adblocker]
/wp-content/plugins/uncopy/frontend/js/uncopy-frontend.min.js$domain=mangacrab.com
mangacrab.com##+js(set-constant, antiAdBlockerStyle, noopFunc)
! https://github.com/AdguardTeam/AdguardFilters/issues/134511
discografias.net##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/134429
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,important,redirect=noop.js,domain=juegos.news
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js|$domain=juegos.news
! https://github.com/AdguardTeam/AdguardFilters/issues/133583
||ipify.org^$domain=comando.la
! https://github.com/AdguardTeam/AdguardFilters/issues/133933
pcworld.es##+js(abort-on-property-read, Object.prototype.autoRecov)
! fix antiadblock
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=antena2.com
! https://github.com/AdguardTeam/AdguardFilters/issues/132493
||listas.pro/go/detecta.js
listas.pro##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/160361
! https://github.com/AdguardTeam/AdguardFilters/issues/132054
guianoticiario.net#@#.ads-box
guianoticiario.net###detectadb
guianoticiario.net#$##player { display: block !important; }
guianoticiario.net#$#.ads.ad.adsbox.ad-placement.carbon-ads { display: block !important; }
guianoticiario.net#$#body .ads-box { display: block !importnat; }
guianoticiario.net##+js(no-setTimeout-if, /Adblock|\.height\(\)/)
guianoticiario.net##+js(abort-current-script, jQuery, /Adblock|dummy|detect/)
! https://github.com/AdguardTeam/AdguardFilters/issues/131773
resenhasglobais.com##+js(no-setTimeout-if, ]]=== 0)
resenhasglobais.com#$#.ads.ad.adsbox.ad-placement.carbon-ads { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/131519
minhaconexao.com.br##+js(no-xhr-if, securepubads.g.doubleclick.net/pagead/ppub_config)
! https://github.com/AdguardTeam/AdguardFilters/issues/131238
escplus.es##.background-aviso-adblock
escplus.es##+js(no-setTimeout-if, .adsbygoogle)
! https://github.com/AdguardTeam/AdguardFilters/issues/130539
emperorscan.com##+js(no-fetch-if, pagead2.googlesyndication.com)
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js|$xmlhttprequest,domain=emperorscan.com
! https://github.com/AdguardTeam/AdguardFilters/issues/129242
||lavoz.com.ar/pf/resources/js/adsUtils.js
||lavoz.com.ar/pf/resources/js/a-block.js
! https://github.com/AdguardTeam/AdguardFilters/issues/167863
! https://github.com/AdguardTeam/AdguardFilters/issues/128774
@@||documaniatv.com/templates/echo/js/*.js
documaniatv.com##+js(set-constant, DeRunAds, true)
! AdRegain
tunovelaligera.com##+js(abort-on-property-write, adregain_wall)
tunovelaligera.com##+js(abort-on-property-read, ad_nodes)
! https://github.com/AdguardTeam/AdguardFilters/issues/128099
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=aristeguinoticias.com
! https://github.com/AdguardTeam/AdguardFilters/issues/125852
genshinpro.com.br##+js(no-setTimeout-if, adsbygoogle)
! https://github.com/AdguardTeam/AdguardFilters/issues/125496
@@||static.ads-twitter.com/uwt.js$domain=notipostingt.com
notipostingt.com##+js(no-fetch-if, static.ads-twitter.com)
! https://github.com/uBlockOrigin/uAssets/issues/14099
raulprietofernandez.net##ins.adsbygoogle
! https://github.com/uBlockOrigin/uAssets/issues/13696
20minutos.es##+js(abort-on-property-read, hb_now)
! https://github.com/AdguardTeam/AdguardFilters/issues/120512
||tecword.info/milionario/knust.js
tecword.info##+js(no-setTimeout-if, ]]=== 0)
tecword.info#$#.ads.ad.adsbox.ad-placement.carbon-ads { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/118918
receitasdalu.net#@#.ad-1
! https://github.com/uBlockOrigin/uAssets/issues/12772#issuecomment-1125434557
cadenaser.com##+js(set-constant, Object.prototype.adblockerEnabled, false)
! https://github.com/uBlockOrigin/uAssets/issues/13062
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=radiopanamericana.com
radiopanamericana.com#@##adContainer
radiopanamericana.com#@#.adclass
! https://github.com/AdguardTeam/AdguardFilters/issues/117300
||smartdoing.tech/jet/taste.js
smartdoing.tech##+js(no-setTimeout-if, ]]=== 0)
smartdoing.tech#$#.ads.ad.adsbox.ad-placement.carbon-ads { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/116744
oceans14.com.br##+js(abort-current-script, EventTarget.prototype.addEventListener, adblock)
oceans14.com.br#$#body div[id].ads.adsbox.doubleclick { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/116287
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=letrasdemusicas.org
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,redirect=noop.js,domain=letrasdemusicas.org,important
! https://github.com/AdguardTeam/AdguardFilters/issues/116265
! https://github.com/AdguardTeam/AdguardFilters/issues/116085
manchetehoje.xyz##+js(no-setTimeout-if, 0=== _0x)
manchetehoje.xyz#$#.ads.ad.adsbox.ad-placement.carbon-ads { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/116064
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=kepahoo.com
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,important,redirect=googlesyndication.com/adsbygoogle.js,domain=kepahoo.com
! https://github.com/AdguardTeam/AdguardFilters/issues/116027
vivercomsaude.online##+js(no-setTimeout-if, ]]=== 0)
vivercomsaude.online#$#.ads.ad.adsbox.ad-placement.carbon-ads { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/113777
texto.kom.gt##+js(set-constant, adsbygoogle.loaded, true)
! https://github.com/AdguardTeam/AdguardFilters/issues/111805
tivify.tv##+js(no-fetch-if, www3.doubleclick.net)
! https://github.com/AdguardTeam/AdguardFilters/issues/111554
@@||paky3.me/wp-content/plugins/wordpress-popup/assets/js/adb.min.js
! https://github.com/AdguardTeam/AdguardFilters/issues/111042
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,redirect=googlesyndication.com/adsbygoogle.js,important,domain=monarcamanga.com
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js|$domain=monarcamanga.com
! https://github.com/uBlockOrigin/uAssets/issues/11586
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=marcaclaro.com
! https://github.com/AdguardTeam/AdguardFilters/issues/106023
it-swarm-es.com##+js(no-setTimeout-if, adsbygoogle)
! https://github.com/AdguardTeam/AdguardFilters/issues/105079
oplanetatv.clickgratis.com.br#@#.ads-block
oplanetatv.clickgratis.com.br#$#.ads.ads-block.prebid { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/106112
daemon-hentai.com#@#.publicite
! https://github.com/AdguardTeam/AdguardFilters/issues/103332
@@||diariodenavarra.es/images/logo_dn_mini.png?v=*&ad$image
! https://github.com/AdguardTeam/AdguardFilters/issues/101503
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=sudoroot.net
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$redirect=noop.js,domain=sudoroot.net,important,script
! https://github.com/AdguardTeam/AdguardFilters/issues/101956
comando.to##+js(abort-on-property-read, adblock)
||aj1907.online^$xmlhttprequest,redirect=noop.txt,domain=comando.to
! https://github.com/AdguardTeam/AdguardFilters/issues/101325
@@||4klinks.site^$generichide
! Few other similar websites, found on: megapeliculasrip.net, cinemaniahdd.net, compucalitv.com
! https://github.com/AdguardTeam/AdguardFilters/issues/101319
@@||latinomg.live^$generichide
!+ NOT_PLATFORM(ios, android)
! https://github.com/AdguardTeam/AdguardFilters/issues/101528
||lavanguardia.com/suscripciones/dab-notifier
! https://github.com/AdguardTeam/AdguardFilters/issues/101140
@@||infojobs.com.br/*/ads-prebid.js
infojobs.com.br##+js(set-constant, adBlockCheck, true)
! https://github.com/AdguardTeam/AdguardFilters/issues/101269
! https://github.com/AdguardTeam/AdguardFilters/issues/101512
! https://github.com/AdguardTeam/AdguardFilters/issues/100867
canarias7.es,hoy.es,lasprovincias.es#$#.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links { display: block !important; }
||static.vocstatic.com/dab/latest/strategy.js
! https://github.com/AdguardTeam/AdguardFilters/issues/99609
maringapost.com.br##+js(set-constant, pp_show_popupmessage, noopFunc)
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=noop.js,domain=maringapost.com.br
! https://github.com/AdguardTeam/AdguardFilters/issues/100152
||cdn.tinypass.com/api/tinypass.min.js$domain=eltiempo.com
! https://github.com/AdguardTeam/AdguardFilters/issues/99218
ouniversodatv.com#$#.ads.ads-block.prebid { display: block !important; }
ouniversodatv.com##+js(set-constant, easySettings.adblock, 0)
! https://github.com/AdguardTeam/AdguardFilters/issues/99201
@@||animefire.net/js/blockadblock.*.min.js
! https://github.com/AdguardTeam/AdguardFilters/issues/99094
||ads-twitter.com/uwt.js$xmlhttprequest,redirect=noop.txt,domain=recetasdelaabuela.me,important
@@||ads-twitter.com/uwt.js$xmlhttprequest,domain=recetasdelaabuela.me
! https://github.com/AdguardTeam/AdguardFilters/issues/98360
@@||pobre.tv/wp-banners.js
! https://github.com/AdguardTeam/AdguardFilters/issues/97525
@@||illamadas.es/public/javascripts/wp-banners.js
illamadas.es##+js(abort-current-script, onload, AdBlock)
! https://github.com/AdguardTeam/AdguardFilters/issues/97340
link.baixedetudo.net.br##+js(abort-current-script, document.createElement, adblock)
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,redirect=noop.js,domain=baixedetudo.net.br
! https://github.com/AdguardTeam/AdguardFilters/issues/96912
! TODO: use "prevent-xhr" scriptlet when it will be available
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,redirect=noop.js,domain=stardeos.com
! https://github.com/AdguardTeam/AdguardFilters/issues/94485
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=netmovies.com.br
netmovies.com.br##+js(no-fetch-if, /adsbygoogle.js)
! https://github.com/AdguardTeam/AdguardFilters/issues/94446
@@||2link.live^$generichide
@@||dxmlinks.site^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/92484
@@||tpc.googlesyndication.com/safeframe/*/html/container.html$domain=muyhistoria.es|marie-claire.es|miarevista.es|muynegociosyeconomia.es|muyinteresante.es
! https://github.com/AdguardTeam/AdguardFilters/issues/90442
@@||tpc.googlesyndication.com/safeframe/*/html/container.html$domain=serpadres.es
! https://github.com/AdguardTeam/AdguardFilters/issues/88674
||static.vocento.com/dab/latest/strategy.js$script,redirect=noop.js,important,domain=elcorreo.com
! https://github.com/AdguardTeam/AdguardFilters/issues/88401
porno-japones.top##div[class^="adde_"]
! porno-japones.top - antiadblock
porno-japones.top##div[id^="adde_modal-"]
porno-japones.top##+js(abort-on-property-read, adsBlocked)
! https://github.com/AdguardTeam/AdguardFilters/issues/85703
lawebdelprogramador.com##+js(no-fetch-if, pagead2.googlesyndication.com)
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,redirect=noop.js,domain=lawebdelprogramador.com
! https://github.com/AdguardTeam/AdguardFilters/issues/86177
skynovels.net##+js(set-constant, canRunAds, true)
@@||skynovels.net/assets/ads-prebid.js
! https://github.com/AdguardTeam/AdguardFilters/issues/85705
tvplusgratis.com###divadblock
tvplusgratis.com##+js(abort-on-property-read, adblockDetected)
! https://github.com/AdguardTeam/AdguardFilters/issues/85301
tribunaavila.com##+js(set-constant, onload, null)
! https://github.com/AdguardTeam/AdguardFilters/issues/84752
! player opens by popup in new tab
receitasdamama.net,financaspratudo.com#@#.ad-placement
@@||g.facebruek.online/ad_status.js$domain=receitasdamama.net|financaspratudo.com
! https://github.com/AdguardTeam/AdguardFilters/issues/83793
unsurcoenlasombra.com##+js(no-setTimeout-if, blocker)
! https://github.com/AdguardTeam/AdguardFilters/issues/83594
@@||mrpiracy.top/js/ads-prebid.js
! https://github.com/AdguardTeam/AdguardFilters/issues/82776
@@||pagead2.googlesyndication.com/pagead/show_ads.js$domain=netcine.biz
! https://github.com/AdguardTeam/AdguardFilters/issues/82941
||raw.githack.com/Ashwathnrayana/SpiderBlogging/main/antiadblock/*/code.min.js
! https://github.com/AdguardTeam/AdguardFilters/issues/81503
seriesretro.com#$#.publicite.text-ad.adsbox { display: block !important; }
seriesretro.com##+js(abort-on-property-read, gothamBatAdblock)
! https://github.com/AdguardTeam/AdguardFilters/issues/80724
audiotools.in##div[id^="chp_ads_blocker-"]
audiotools.in##+js(abort-current-script, EventTarget.prototype.addEventListener, blocker_detector)
! https://github.com/AdguardTeam/AdguardFilters/issues/157756
! Link from anitube.vip
dicasgostosas.com##+js(no-fetch-if, pagead2.googlesyndication.com)
! https://github.com/AdguardTeam/AdguardFilters/issues/79720
! https://github.com/AdguardTeam/AdguardFilters/issues/79653
! From anitube.site, meusanimes.com, boxfilmes.net, animesup.biz
receitasdomundo.site,flashreceitas.com,tudoemprego.online,tecnologiaonline.site,muitasreceitas.site,fazendorendaextra.xyz,bellareceitas.com,globalnoticias.online,culinariadochef.net,gameszoom.net,grandnoticias.com#@#.ad-placement
/saddan/bitch.js$domain=fazendorendaextra.xy|flashreceitas.com
||receitasdomundo.site/dean/etten.js
||globalnoticias.online/run/fun.js
||gameszoom.net/jayA/djay.js
||culinariadochef.net/revoada/boca.js
! https://github.com/AdguardTeam/AdguardFilters/issues/77453
cozinha.minhasdelicias.com##+js(abort-on-property-read, Bl0ckAdBl0ckCo)
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,redirect=noop.js,domain=cozinha.minhasdelicias.com
! https://github.com/AdguardTeam/AdguardFilters/issues/74103
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,redirect=googlesyndication.com/adsbygoogle.js,important,domain=forum.lfspro.net
! guideautoweb.com - anti adb
guideautoweb.com##+js(addEventListener-defuser, detectAdBlock)
! diariodegoias.com.br - anti adb
diariodegoias.com.br##+js(abort-on-property-read, ppAdblocks)
@@||tags.premiumads.com.br/ads/advertisement.js
! https://github.com/AdguardTeam/AdguardFilters/issues/75372
! https://github.com/AdguardTeam/AdguardFilters/issues/72368
lacalleochotv.org##+js(abort-current-script, document.getElementById, block)
@@||vergranhermano.com/player/ads.js
! https://github.com/AdguardTeam/AdguardFilters/issues/75110
@@||todopolicia.com/foro/js/siropu/am/ads.min.js$domain=todopolicia.com
! https://github.com/AdguardTeam/AdguardFilters/issues/74115
deportealdia.live##+js(set-constant, adblockDetector.init, noopFunc)
! https://github.com/AdguardTeam/AdguardFilters/issues/74026
@@||mahimeta.com/networks/ad_code.php$domain=1f1.in|1i1.in
||mahimeta.com/networks/ad_code.php$xmlhttprequest,redirect=noop.txt
1f1.in,1i1.in##+js(abort-on-property-read, mMCheckAgainBlock)
! https://github.com/AdguardTeam/AdguardFilters/issues/71820
@@||forum.outerspace.com.br/js/siropu/am/ads.min.js
! https://github.com/AdguardTeam/AdguardFilters/issues/71853
hobbugs.com##+js(abort-on-property-read, adblockDetected)
! https://github.com/AdguardTeam/AdguardFilters/issues/71147
@@||adblockanalytics.com/ads.js$domain=manga-mx.com
@@||adblockanalytics.com/adblocker.js$domain=manga-mx.com
manga-mx.com##+js(abort-on-property-write, adblock)
! https://github.com/AdguardTeam/AdguardFilters/issues/70250
! https://github.com/AdguardTeam/AdguardFilters/issues/72794
! https://github.com/AdguardTeam/AdguardFilters/issues/72801
elquintobeatle.com,empregoestagios.com,satcesc.com##+js(addEventListener-defuser, load, daadb_get_data)
elquintobeatle.com,empregoestagios.com,satcesc.com##+js(set-constant, adsbygoogle.length, undefined)
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,redirect=googlesyndication.com/adsbygoogle.js,domain=elquintobeatle.com|empregoestagios.com|satcesc.com
! https://github.com/AdguardTeam/AdguardFilters/issues/69530
||atlantapictures.net/f10-1.js
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,redirect=noop.js,domain=xkekos.tv
! https://github.com/AdguardTeam/AdguardFilters/issues/69528
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,redirect=noop.js,domain=haddoz.net
! https://github.com/AdguardTeam/AdguardFilters/issues/69527
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,redirect=noop.js,domain=fantasy.lu
! https://github.com/AdguardTeam/AdguardFilters/issues/68638
@@||kuork.org/wordpress/wp-content/themes/novelpiper_theme/assets/js/libs/ads.js
! https://github.com/AdguardTeam/AdguardFilters/issues/67988
@@||affiliate.api.espn.com/affiliateApi/$domain=espn.com.mx
! https://github.com/AdguardTeam/AdguardFilters/issues/67054
@@||pclinks.site^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/66187
@@||playtemporal.xyz/js/*/fuckadblock.js
! https://github.com/AdguardTeam/AdguardFilters/issues/65649
applesfera.com,bebesymas.com,compradiccion.com,diariodelviajero.com,directoalpaladar.com,elblogsalmon.com,espinof.com,genbeta.com,motorpasion.com,motorpasionmoto.com,pymesyautonomos.com,trendencias.com,trendenciashombre.com,vidaextra.com,vitonica.com,xataka.com,xatakaciencia.com,xatakafoto.com,xatakahome.com,xatakamovil.com,xatakandroid.com,xatakawindows.com##+js(set-constant, WSL2.config.enableAdblockEcommerce, 0)
! https://github.com/AdguardTeam/AdguardFilters/issues/162442
! https://github.com/AdguardTeam/AdguardFilters/issues/129540
! https://github.com/AdguardTeam/AdguardFilters/issues/65579
docer.com.ar,doceru.com,docero.com.br#$?#iframe#doublebillboard-1 { remove: true; }
docer.com.ar,doceru.com,docero.com.br##+js(set-constant, ads_unblocked, true)
! https://github.com/AdguardTeam/AdguardFilters/issues/64208
outerspace.com.br##+js(abort-on-property-read, ppAdblocks)
! https://github.com/AdguardTeam/AdguardFilters/issues/63889
||googletagmanager.com/gtm.js$domain=lapatilla.com
! https://github.com/AdguardTeam/AdguardFilters/issues/64046
@@||assistiranime.biz/css/adsplay.css
@@||assistiranime.biz/player/jwp/*?
! https://github.com/AdguardTeam/AdguardFilters/issues/63856
@@||animeshd.online/css/adsplay.css
@@||animeshd.online/jwp/*?
! https://github.com/AdguardTeam/AdguardFilters/issues/63149
@@||formulatv.com/js/gpt.js
@@||ecartelera.com/js/gpt.js
ecartelera.com##+js(abort-current-script, $, Adblock)
! https://github.com/AdguardTeam/AdguardFilters/issues/61476
@@||arnett-frz.ml/popads.js
! https://github.com/AdguardTeam/AdguardFilters/issues/60205
meuwindows.com##+js(abort-on-property-write, ai_front)
! https://github.com/AdguardTeam/AdguardFilters/issues/60999
||cdn.jsdelivr.net/*/dist/js/wgd-core.min.js
! https://github.com/AdguardTeam/AdguardFilters/issues/59758
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=anihub.tv
||st.bebi.com/bebi_v*.js$script,redirect=noop.js,domain=anihub.tv
! https://github.com/AdguardTeam/AdguardFilters/issues/57785
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$xmlhttprequest,redirect=googlesyndication.com/adsbygoogle.js,important,domain=funzen.net
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=funzen.net
! https://github.com/AdguardTeam/AdguardFilters/issues/58975
hartico.com#@#.ad-placement
hartico.com#$##ablockercheck { display: block!important; }
hartico.com##+js(no-setTimeout-if, cicklow_)
! https://github.com/AdguardTeam/AdguardFilters/issues/58962
@@||v.fwmrm.net/ad/g/1?$domain=dplay.es
! https://github.com/AdguardTeam/AdguardFilters/issues/57292
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,redirect=noop.js,domain=geeksweb.net,important
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=geeksweb.net
! https://github.com/AdguardTeam/AdguardFilters/issues/57124
pcbolsa.com#$##Publi300600xaa { height: 1px!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/56791
@@||tags.premiumads.com.br/ads/advertisement.js$domain=bandab.com.br
bandab.com.br##+js(set-constant, pp_show_popupmessage, noopFunc)
! https://github.com/AdguardTeam/AdguardFilters/issues/56392
comandotorrents.org#$#[style="text-align: center; display: none;"] { display: block !important; }
comandotorrents.org#$#.adblock_detect { display: none !important; }
@@||comandotorrents.org/wp-content/uploads/*/adblock.js
comandotorrents.org##+js(set-constant, adblock, true)
! https://github.com/AdguardTeam/AdguardFilters/issues/55148
@@||aniplay.site/assets/ads.js
! https://github.com/AdguardTeam/AdguardFilters/issues/54733
lacapital.com.ar###prestitial_layer
! https://github.com/AdguardTeam/AdguardFilters/issues/55042
/loskatchorros\.com\.br\/forum\/uploads\/set_resources_\d+\/[a-z0-9]+_[a-zA-Z0-9]+\.js/
! https://github.com/AdguardTeam/AdguardFilters/issues/54454
anicchan.net#@#afs_ads
@@||anicchan.net/popad/popads.js
! https://github.com/AdguardTeam/AdguardFilters/issues/54366
@@||tunovelaligera.com/wp-content/plugins/*/js/ads*.min.js
! https://github.com/AdguardTeam/AdguardFilters/issues/53660
animesonehd.xyz##.rteam_antiadb
||animesonehd.xyz/wp-content/themes/animesonehd/js/rteam_detect.js
! https://github.com/AdguardTeam/AdguardFilters/issues/53425
@@||adslayuda.com/wp-content/plugins/better-adsmanager/js/advertising.min.js
adslayuda.com##+js(set-constant, better_ads_adblock, true)
! https://github.com/AdguardTeam/AdguardFilters/issues/52992
uppers.es,yasss.es,radioset.es,bemad.es,cuatro.com,divinity.es,eltiempohoy.es,energytv.es,factoriadeficcion.com,mtmad.es,telecinco.es##div[class^="adsInfo__container"]
! https://github.com/AdguardTeam/AdguardFilters/issues/52976
journaldemontreal.com#$?#.popup-adblocker { display: none !important; }
journaldemontreal.com#$?#body { overflow: visible !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/51161
@@||botinnifit.com/*/adsbygoogle.js
botinnifit.com##+js(set-constant, canRunAds, true)
! https://github.com/AdguardTeam/AdguardFilters/issues/50736
@@||outerspace.com.br/js/siropu/am/ads.min.js
outerspace.com.br##+js(set-constant, adBlockDetected, false)
! https://github.com/AdguardTeam/AdguardFilters/issues/50290
@@||libremercado.com/*_.ad.json
@@||libertaddigital.com/*_.ad.json
! https://github.com/AdguardTeam/AdguardFilters/issues/50157
doramasmp4.com##+js(set-constant, isAdsDisplayed, true)
! https://github.com/AdguardTeam/AdguardFilters/issues/49174
@@||animeshd.biz/css/adsplay.css
@@||animeshd.biz/player/$domain=animeshd.biz
! https://github.com/AdguardTeam/AdguardFilters/issues/47777
@@||minhasdelicias.com/*/adsbygoogle.js
minhasdelicias.com##+js(set-constant, canRunAds, true)
! https://github.com/AdguardTeam/AdguardFilters/issues/47640
@@||mastercoria.com/js/ad_serve.js
! https://github.com/AdguardTeam/AdguardFilters/issues/47555
!+ NOT_PLATFORM(windows, mac, android, ext_chromium, ext_ff, ext_opera)
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=profesor10demates.com
! https://github.com/AdguardTeam/AdguardFilters/issues/58375
! https://github.com/AdguardTeam/AdguardFilters/issues/47337
@@||anitube.*/*advert*.js
@@||cdn.anicdn.net/*.js$domain=anitube.*
anitube.*##+js(set-constant, ATESTADO, 1)
! https://github.com/AdguardTeam/AdguardFilters/issues/46694
@@||luchaonline.com/*/js/adsbygoogle.js
luchaonline.com##+js(set-constant, canRunAds, true)
! https://github.com/AdguardTeam/AdguardFilters/issues/46603
@@||p.jwpcdn.com/player/*/googima.js$domain=13.cl
! https://github.com/AdguardTeam/AdguardFilters/issues/45254
@@||neoteo.com/wp-content/plugins/*/adblock-detector/advertisement.js
! https://github.com/AdguardTeam/AdguardFilters/issues/41215
@@||file4go.net/ads.js
file4go.net##+js(set-constant, Lata, 1)
! https://github.com/AdguardTeam/AdguardFilters/issues/39171
hobba.tv#@##ad-block
hobba.tv#@##ad-box
! https://github.com/AdguardTeam/AdguardFilters/issues/35418
@@||cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js$domain=animeyt2.tv
! https://github.com/AdguardTeam/AdguardFilters/issues/35166
! https://github.com/AdguardTeam/AdguardFilters/issues/34848
!+ PLATFORM(ext_ff, ext_opera, ext_edge, ios, ext_android_cb, ext_safari, ext_ublock)
@@||projetomotog.blogspot.com^$generichide
!+ PLATFORM(ext_ff, ext_opera, ext_edge, ios, ext_android_cb, ext_safari, ext_ublock)
@@.jpg#$domain=projetomotog.blogspot.com
! https://github.com/AdguardTeam/AdguardFilters/issues/34601
!+ PLATFORM(ext_ff, ext_opera, ext_edge, ios, ext_android_cb, ext_safari, ext_ublock)
@@||rlinstall.tech^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/34582
!+ NOT_PLATFORM(windows, mac, android)
@@||torrentmegafilme.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/34477
radiotormentamx.com#$##ad { position: absolute!important; left: -3000px!important; }
radiotormentamx.com#$##adsdiv  { position: absolute!important; left: -3000px!important; }
@@||radiotormentamx.com^$generichide
@@||radiotormentamx.com/images/*.jpg#
@@.png#$domain=radiotormentamx.com
! https://github.com/AdguardTeam/AdguardFilters/issues/34267
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,redirect=noop.js,important,domain=g1novelas.online
! https://github.com/AdguardTeam/AdguardFilters/issues/34221
iptvvall.com#$#div#ad { position: absolute!important; left: -3000px!important; }
@@||iptvvall.com^$generichide
@@||tv.iptvvall.com/images/*.jpg#
@@.png#$domain=iptvvall.com
! https://github.com/AdguardTeam/AdguardFilters/issues/34205
asialiveaction.com##.ms_ga.dblock
asialiveaction.com#$#body .adsbygoogle { display: block!important; position: absolute!important; left: -3000px!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/33432
!+ PLATFORM(ios, ext_android_cb, ext_safari, ext_ublock)
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=tabonitobrasil.video
! https://github.com/AdguardTeam/AdguardFilters/issues/32516
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_safari, ext_ublock)
@@||pokexgames-tutoriais.blogspot.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/99149
sudoroot.net#$#.content #loading { display: none !important; }
sudoroot.net#$#.content #video { display: block !important; }
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,xmlhttprequest,redirect=noop.js,domain=sudoroot.net
! https://github.com/AdguardTeam/AdguardFilters/issues/108698
sejasaudavel.net#?#.content > div[id]:has(> center > b:contains(DESATIVE O ADBLOCK))
sejasaudavel.net#$?#.content > div[id]:has(> center > #src_iframe) { display: block !important; }
sejasaudavel.net#$#.content #src_iframe { display: block !important; }
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,redirect=noop.js,domain=sejasaudavel.net
! https://github.com/AdguardTeam/AdguardFilters/issues/49399
! https://github.com/AdguardTeam/AdguardFilters/issues/46190
! https://github.com/AdguardTeam/AdguardFilters/issues/43447
! https://github.com/AdguardTeam/AdguardFilters/issues/39889
! https://github.com/AdguardTeam/AdguardFilters/issues/32467
@@/adb_detector.$domain=animeshouse.net
@@/adblockpopup.$domain=animeshouse.net
@@/adblockkiller.$domain=animeshouse.net
@@/adblock.js$domain=animeshouse.net
@@/cnads.js$domain=animeshouse.net
@@/adscript.js$domain=animeshouse.net
@@/delivery.ads.js$domain=animeshouse.net
@@/adsbygoogle.js$script,domain=animeshouse.net
@@/ad.min.js$domain=animeshouse.net
@@/ads/ad*.js$domain=animeshouse.net|feralhosting.com
@@||bernstein-ah.ml/popads.js
@@|http*://*.sh/*.$script,other,domain=animeshouse.net|lockharte-ah.gq|ganessa-ah.ga|4hentais.com|animeshd.org|yayanimes.net
@@|http*://*.casa/*.$script,other,domain=animeshouse.net|lockharte-ah.gq|ganessa-ah.ga|4hentais.com|animeshd.org|yayanimes.net
@@|http*://*.ml/*.$script,other,domain=animeshouse.net|lockharte-ah.gq|ganessa-ah.ga|4hentais.com|animeshd.org|yayanimes.net
@@|http*://*.gq/*.$script,other,domain=animeshouse.net|lockharte-ah.gq|ganessa-ah.ga|4hentais.com|animeshd.org|yayanimes.net
@@|http*://*.ga/*.$script,other,domain=animeshouse.net|lockharte-ah.gq|ganessa-ah.ga|4hentais.com|animeshd.org|yayanimes.net
@@|http*://*.cf/*.$script,other,domain=animeshouse.net|lockharte-ah.gq|ganessa-ah.ga|4hentais.com|animeshd.org|yayanimes.net
@@|http*://*.tk/*.$script,other,domain=animeshouse.net|lockharte-ah.gq|ganessa-ah.ga|4hentais.com|animeshd.org|yayanimes.net
@@||tatsumaki.cf/$script,domain=animeshouse.net|feralhosting.com
@@||satellizer-ah.cf/adblocker.js
@@||animeshouse.net/*/ads.js
@@||player*.animeshouse.net^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/32439
||buenamusica.com/js/noadsblock.js
! https://github.com/AdguardTeam/AdguardFilters/issues/32132
||static.criteo.net/js/px.js?ch=$redirect=noop.txt,important,domain=jovempan.uol.com.br,image,media,subdocument,stylesheet,script,xmlhttprequest,other
||cas.criteo.com/delivery/ajs.php$redirect=noop.txt,important,domain=jovempan.uol.com.br,image,media,subdocument,stylesheet,script,xmlhttprequest,other
||jacksonburghomosassa.lampeleoti.com^$domain=jovempan.uol.com.br
! https://github.com/AdguardTeam/AdguardFilters/issues/32170
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,redirect=noop.js,important,domain=g1novelas.org
! https://github.com/AdguardTeam/AdguardFilters/issues/31876
@@||eldaryasolutiongame.blogspot.com^$generichide
@@.jpg#$domain=eldaryasolutiongame.blogspot.com
@@.png#$domain=eldaryasolutiongame.blogspot.com
! https://github.com/AdguardTeam/AdguardFilters/issues/31717
liketvw.com###divadblock
@@||cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js$domain=liketvw.com
! https://github.com/AdguardTeam/AdguardFilters/issues/31415
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_safari, ext_ublock)
@@||stiffgamerdown.com^$generichide
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_safari, ext_ublock)
@@||stiffgamerdown.com/wp-content/uploads/*.png#/
! https://github.com/AdguardTeam/AdguardFilters/issues/35154
! https://github.com/AdguardTeam/AdguardFilters/issues/33633
! https://github.com/AdguardTeam/AdguardFilters/issues/33539
! https://github.com/AdguardTeam/AdguardFilters/issues/31398
@@||animesonline.cz^$~third-party,script
@@||anitube.cz/*advert*.js
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=anitube.cz|animesonline.cz
||cdn.adtrue.com/rtb/async.js$script,redirect=noop.js,important,domain=anitube.cz|animesonline.cz
||cdn.onesignal.com/sdks/OneSignalSDK.js$script,redirect=noop.js,important,domain=anitube.cz|animesonline.cz
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_safari, ext_ublock)
@@||anitube.cz^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/37241
! https://github.com/AdguardTeam/AdguardFilters/issues/31793
! https://github.com/AdguardTeam/AdguardFilters/issues/30778
@@||televallweb.site^$generichide
@@||televallweb.site/images/*#/*adtest
@@||televall.website^$generichide
@@.png#$domain=televall.website
@@||televall.website/images/*#/*adtest
televall.website#$##ad { position: absolute!important; left: -3000px!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/30727
@@||cdn.jsdelivr.net/npm/fuckadblock@3.2.1/fuckadblock.min.js$domain=tecnotutoshd.net
! https://github.com/AdguardTeam/AdguardFilters/issues/29743
@@||area-documental.com/advertisement.js
! https://github.com/AdguardTeam/AdguardFilters/issues/29775
@@||cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js$domain=doramasmp4.com
! https://github.com/AdguardTeam/AdguardFilters/issues/29574
||torrentbrazil.org/adbclk.js
! https://github.com/AdguardTeam/AdguardFilters/issues/29427
animeshouse.net##+js(abort-current-script, document.addEventListener, /;return \{clear:function\(\)\{/)
! https://github.com/AdguardTeam/AdguardFilters/issues/28812
!+ NOT_PLATFORM(windows, mac, android)
@@||grupovalltv.net^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/28732
3djuegos.com#@#.bottomAd
3djuegos.com#@#.ad_300x250
! https://github.com/AdguardTeam/AdguardFilters/issues/28092
! https://github.com/AdguardTeam/AdguardFilters/issues/27987
! https://github.com/AdguardTeam/AdguardFilters/issues/27351
! https://github.com/AdguardTeam/AdguardFilters/issues/27112
@@||espaebook.org/adblock.js
! https://github.com/AdguardTeam/AdguardFilters/issues/28150
! https://github.com/AdguardTeam/AdguardFilters/issues/27761
! https://github.com/AdguardTeam/AdguardFilters/issues/26647
@@.js?ad=banner*_adsense_*.json$domain=pokyun.tv
@@||c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js$domain=pokyun.tv
@@||ima3vpaid.appspot.com/?adTagUrl=$domain=pokyun.tv
@@||an.facebook.com/v*/instream/vast.xml?*pokyun.tv$domain=pokyun.tv
||scontent-*.xx.fbcdn.net/v/*.mp4?$media,domain=pokyun.tv
! https://github.com/AdguardTeam/AdguardFilters/issues/28145
! https://github.com/AdguardTeam/AdguardFilters/issues/25954
@@||visioncloud.ga/js/$~third-party,script
@@||visioncloud.ga/*/advert*.js
! https://github.com/AdguardTeam/AdguardFilters/issues/25687
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||turiver.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/25436
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||enfermeria.gnomio.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/80943
! https://github.com/AdguardTeam/AdguardFilters/issues/58479
! https://github.com/AdguardTeam/AdguardFilters/issues/57518
! https://github.com/AdguardTeam/AdguardFilters/issues/25455
seriesdonghua.com,mundodonghua.com##+js(no-setTimeout-if, /Tamamo_Blocker|aadb_recheck/)
@@||seriesdonghua.com/*banner.gif
@@||mundodonghua.com/*banner.gif
@@||mundodonghua.com/js/adsbygoogle.js
seriesdonghua.com,mundodonghua.com##+js(set-constant, loadingAds, true)
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||static.doubleclick.net/instream/ad_status.js$domain=significadoswords.com
! https://github.com/AdguardTeam/AdguardFilters/issues/24749
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||allsoftwarefull.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/24732
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||somosbinarios.es^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/24385
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||novelasymangasjpo.blogspot.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/23534
sapo.pt#@#.adslot
! https://github.com/AdguardTeam/AdguardFilters/issues/22555
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||bludvfilmes.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/21896
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||eurogamer.pt^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/22178
||hilariouszinc.com^
! https://github.com/AdguardTeam/AdguardFilters/issues/22053
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||futeboltvgratis.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/22068
@@||cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js$domain=animeyt.tv
! https://github.com/AdguardTeam/AdguardFilters/issues/21579
! https://github.com/AdguardTeam/AdguardFilters/issues/21733
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||static.logrosxbox.com/js/fuckadblock.js
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||logrosxbox.com/ad/banner/*.ad.json$~third-party
! https://github.com/AdguardTeam/AdguardFilters/issues/21618
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||megafilmestorrenthd.net^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/21623
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||letras2.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/21278
@@||gamersboard.com.br/uploads/*adframe.js
! https://github.com/AdguardTeam/AdguardFilters/issues/21170
@@||progamingstudio.com/js/siropu/am/ads.min.js
! https://github.com/AdguardTeam/AdguardFilters/issues/20851
@@||visioncloud.info^$generichide
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||amtonline.com.br^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/20773
@@||simsvip.com.br^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/20735
@@||cdnjs.cloudflare.com/ajax/libs/fuckadblock^$domain=torrentdosfilmeshd.net
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||torrentdosfilmeshd.net^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/20635
@@||animesvision.net/ads/adsbygoogle.js
@@||animesvision.net/ads/advertisement.js
! https://github.com/AdguardTeam/AdguardFilters/issues/20512
!+ NOT_PLATFORM(windows, mac, android)
@@.png#$domain=tv-onlinehd.com
!+ NOT_PLATFORM(windows, mac, android)
@@||tv-onlinehd.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/20259
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||textflix.us^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/20041
@@/advert.js$domain=gamevicio.com
! https://github.com/AdguardTeam/AdguardFilters/issues/20407
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||majesy.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/20425
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||dompl3.info^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/20092
! https://github.com/AdguardTeam/AdguardFilters/issues/19393
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||latornamesa.blogspot.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/19311
@@||damelibros.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/19253
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||micinehd.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/19258
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||lapumiafilmes.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/18925
@@||televall.info/js/advertisement.js
! https://github.com/AdguardTeam/AdguardFilters/issues/19151
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||acienciasgalilei.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/20409
! https://github.com/AdguardTeam/AdguardFilters/issues/18500
@@||superanimes.site/js/adsbygoogle.js
superanimes.site#$##bannerGames { height: 2px!important; }
superanimes.site#$#.adstopo { position: absolute!important; left: -3000px!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/18340
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||2cheat.net^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/18326
!+ PLATFORM(ios, ext_android_cb, ext_ublock)
@@||zonasports.es^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/17184
!+ PLATFORM(ios, ext_android_cb, ext_ublock)
@@||dvdgayonline.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/18036
@@||purohigueyano.com.do/wp-content/themes/purotheme/js/advertisement.js
! https://github.com/AdguardTeam/AdguardFilters/issues/17844
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||pajaslocas.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/17611
@@||animeyt.tv/js/adsbygoogle.js
! https://github.com/AdguardTeam/AdguardFilters/issues/17298
! https://github.com/AdguardTeam/AdguardFilters/issues/17290
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||andaluciainformacion.es^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/17291
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||yoututosjeff.es^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/17299
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||anime-extremo.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/16990
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||seriesgato.net^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/16188
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||gigadownloads.co^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/16414
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||androidaba.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/16470
@@||adwhi.com/js/fuckadblock.js
! https://github.com/AdguardTeam/AdguardFilters/issues/25021
! https://github.com/AdguardTeam/AdguardFilters/issues/25017
! https://github.com/AdguardTeam/AdguardFilters/issues/17566
! https://github.com/AdguardTeam/AdguardFilters/issues/16087
@@||tugaflix.*/tema/blockadblock.js
! https://github.com/AdguardTeam/AdguardFilters/issues/16193
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||seriesgato.tv^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/16162
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||cinemafacil.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/16185
@@||assistir-tv.online/stream/advertisement.js
! https://github.com/AdguardTeam/AdguardFilters/issues/15964
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||mixmods.com.br^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/15841
! animeflv.net
@@||animeflv.net/js/adsbygoogle.js
! https://github.com/AdguardTeam/AdguardFilters/issues/15963
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||nuevos-mu.ucoz.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/15386
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||parasitipedia.net^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/15404
@@||fantasy.li^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/15630
! https://github.com/AdguardTeam/AdguardFilters/issues/15573
! https://github.com/AdguardTeam/AdguardFilters/issues/70674
globo.com###detecta-adblock
! https://github.com/AdguardTeam/AdguardFilters/issues/15186
! https://github.com/AdguardTeam/AdguardFilters/issues/15208
@@||acienciasgalilei.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/14827
! https://github.com/AdguardTeam/AdguardFilters/issues/14875
! https://github.com/AdguardTeam/AdguardFilters/issues/14707
@@||sakuraanimes.com/ANAD/advertisement.js
! https://github.com/AdguardTeam/AdguardFilters/issues/14234
@@||shares.enetres.net/ads.js.php?*&show_ad_&video_ads_&smart_ad_$domain=shares.enetres.net
! https://github.com/AdguardTeam/AdguardFilters/issues/14234
@@||shares.enetres.net/ads.js.php?*&show_ad_&video_ads_&smart_ad_$domain=shares.enetres.net
! https://github.com/AdguardTeam/AdguardFilters/issues/14188
! https://github.com/AdguardTeam/AdguardFilters/issues/13849
! https://github.com/AdguardTeam/AdguardFilters/issues/22884
! https://github.com/AdguardTeam/AdguardFilters/issues/13748
@@||sync.smartadserver.com/getuid?url=*vmf.edge-apps.net*res*smartads_cookie.html$domain=vmf.edge-apps.net
@@||imasdk.googleapis.com/js/sdkloader/ima3*.js$domain=vmf.edge-apps.net
@@||iframe.statics.space/magma/stable/libs/contribAds/*/videojs.ads.$domain=vmf.edge-apps.net
@@||pubads.g.doubleclick.net/ssai/event/*/streams$domain=vmf.edge-apps.net
! https://github.com/AdguardTeam/AdguardFilters/issues/13527
! https://github.com/AdguardTeam/AdguardFilters/issues/12987
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||gamesandroidhvga.net^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/12656
! https://github.com/AdguardTeam/AdguardFilters/issues/72851
! https://github.com/AdguardTeam/AdguardFilters/issues/12613
@@||adpass.atresmedia.com/*/*$domain=atresplayer.com
!+ NOT_PLATFORM(windows, mac, android)
@@||googleadservices.com/pagead/conversion_async.js$xmlhttprequest,domain=atresplayer.com
! https://github.com/uBlockOrigin/uAssets/issues/1639
||static.vocento.com/dab/*.js
! https://github.com/AdguardTeam/AdguardFilters/issues/12323
@@||latinoweb-tv.com/assets/js/adblocker.js
! from foreign filter
@@||minhatec.com/noticiadestaque/adsense.js
@@||ads.clubedohardware.com.br/
clubedohardware.com.br##.caixa_topo
! https://github.com/AdguardTeam/AdguardFilters/issues/11966
@@||universoformulas.com/js/adsbygoogle.js
! https://github.com/AdguardTeam/AdguardFilters/issues/11545
! https://github.com/AdguardTeam/AdguardFilters/issues/11384
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||novelasd.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/158672
! https://github.com/AdguardTeam/AdguardFilters/issues/33396
! https://github.com/AdguardTeam/AdguardFilters/issues/11279
playview.io##+js(set-constant, runningAdsAllowed, true)
@@||playview.io//ab/ads-prebid-wp-banners.js
@@/fuckadblock.js$domain=playview.io
! https://github.com/AdguardTeam/AdguardFilters/issues/11255
@@||nmn900.com/js/adsbygoogle.js
! https://github.com/AdguardTeam/AdguardFilters/issues/11045
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||guia27.com.br^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/10865
! https://github.com/AdguardTeam/AdguardFilters/issues/10873
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||urlcero.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/10879
@@||tufutbolpro.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/10730
@@||atresplayer.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/10733
@@||eestatic.com/assets_js/dyn/adsiframe.js
! https://github.com/AdguardTeam/AdguardFilters/issues/9973
@@||elconfidencial.com/javascript/v*/class/requireModules/ads/adsbygoogle.js
! https://github.com/AdguardTeam/AdguardFilters/issues/9922
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||alt-torrent.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/9812
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||animesgo.net^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/9801
! https://github.com/AdguardTeam/AdguardFilters/issues/9802
||corporacionwarez.com/wp-content/uploads/*/*.js?ver=
! https://github.com/AdguardTeam/AdguardFilters/issues/9742
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||futeboltv.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/9018
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||eusouandroid.co^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/9739
@@||tv-en-vivo.org/js/advertisement.js
! https://github.com/AdguardTeam/AdguardFilters/issues/7888
@@||deportesmax.info^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/8160
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||megafilmestorrents.net^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/8121
!+ NOT_OPTIMIZED PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||urlcloud.us^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/7701
||okdiario.com/app/*/js/check-blocker.js
! https://github.com/AdguardTeam/AdguardFilters/issues/7422
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||sharecool.us^$generichide
! https://forum.adguard.com/index.php?threads/26487/
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||netflink.top^$generichide
!
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||deportesmax.info^$generichide
! https://forum.adguard.com/index.php?threads/resolved-www-vivo-tv-com-anti-adblock.25892/
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||vivo-tv.com^$generichide
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||vivotvhd.com^$generichide
! https://forum.adguard.com/index.php?threads/26037/
||skidrow-games.com/wp-content/plugins/pause-adblocker/inc/pause-front.js
! https://github.com/AdguardTeam/AdguardFilters/issues/65422
@@||adservice.google.es/adsid/integrator.js$domain=muyinteresante.es
! https://forum.adguard.com/index.php?threads/25538/
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||latinohentai.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/6778
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=artesacro.org
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||pagead2.googlesyndication.com/pagead/js/r*/show_ads_impl.js$domain=artesacro.org
! https://github.com/AdguardTeam/AdguardFilters/issues/6788
||lavozdealmeria.es/js/addblock.js
! https://github.com/AdguardTeam/AdguardFilters/issues/6766
uol.com.br#$##banner_b { display: block !important; }
uol.com.br#$#iframe#google_ads_iframe_b { display: block !important; }
uol.com.br#$#iframe#google_ads_iframe_123_bait { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/6666
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||wakfutemporada2subs.blogspot.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/6586
@@/servicios/ads/dfp.js$~third-party,domain=diaridegirona.cat|diariodeibiza.es|diarioinformacion.com|emporda.info|laopinioncoruna.es|laopiniondemalaga.es|laopiniondemurcia.es|laopiniondezamora.es|laprovincia.es|mallorcazeitung.es|regio7.cat|superdeporte.es
@@||lne.es/elementosWeb/js/dfp.js
||tinypass.com^$domain=laopinion.es
! https://forum.adguard.com/index.php?threads/24933/
@@||seriesgato.com^$generichide
! https://forum.adguard.com/index.php?threads/24934/
@@||animextre.me/js/fuckadblock.js
! https://forum.adguard.com/index.php?threads/iptvbin.24706/
@@||iptvbin.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/6403
@@||vsports.pt/video/js/adsense.js
! https://github.com/AdguardTeam/AdguardFilters/issues/6398
||esmas.com/wp/assets/js/adblock/kw-pqr_.js
! https://forum.adguard.com/index.php?threads/24619/
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||inmanga.com^$generichide
@@||inmanga.com/Scripts/fuckadblock.js
@@||cdnjs.cloudflare.com/ajax/libs/fuckadblock^$domain=inmanga.com
! https://forum.adguard.com/index.php?threads/24620/
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||olimpo.link^$generichide
! https://forum.adguard.com/index.php?threads/habboin-net.24436/
@@||habboin.net/public/js/fuckadblock.js
! https://github.com/AdguardTeam/AdguardFilters/issues/6326
! https://github.com/AdguardTeam/AdguardFilters/issues/6305
vizer.tv#@#.banner_ads
! https://github.com/AdguardTeam/AdguardFilters/issues/12421
@@||gamersclub.com.br^*/ads.js
! https://github.com/AdguardTeam/AdguardFilters/issues/6175
! https://github.com/AdguardTeam/AdguardFilters/issues/6152
! https://github.com/AdguardTeam/AdguardFilters/issues/28090
! https://github.com/AdguardTeam/AdguardFilters/issues/6061
expansion.com#@#div[id^="div-gpt-ad"]
@@||expansion.com$generichide
@@||securepubads.g.doubleclick.net/gpt/pubads_impl_$domain=expansion.com
! https://github.com/AdguardTeam/AdguardFilters/issues/35168
! https://github.com/AdguardTeam/AdguardFilters/issues/15231
! https://github.com/AdguardTeam/AdguardFilters/issues/7400
!+ NOT_OPTIMIZED
@@/adjs.js$domain=bemad.es|cuatro.com|divinity.es|eltiempohoy.es|energytv.es|factoriadeficcion.com|mitele.es|mtmad.es|telecinco.es
!+ NOT_OPTIMIZED
@@/fuckadblock.js$domain=bemad.es|cuatro.com|divinity.es|eltiempohoy.es|energytv.es|factoriadeficcion.com|mitele.es|mtmad.es|telecinco.es
!+ NOT_OPTIMIZED
@@||mitele.es^$generichide
!+ NOT_OPTIMIZED
@@||mitele.es/vendor/*ad$xmlhttprequest,domain=mitele.es
!+ NOT_OPTIMIZED
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=mitele.es
! https://github.com/AdguardTeam/AdguardFilters/issues/129932
! NOTE: `@@||mitele.es^$generichide` in not supported [19.09.2022]
! TODO: Test with the next releases without following rules
mitele.es#@#[id^="google_ads_iframe"]
! https://github.com/AdguardTeam/AdguardFilters/issues/34683
! https://github.com/AdguardTeam/AdguardFilters/issues/6079
@@||minhaconexao.com.br/*/ads_detect.js
! https://github.com/AdguardTeam/AdguardFilters/issues/6052
! https://github.com/AdguardTeam/AdguardFilters/issues/11162
@@||hdstatic.net/holadoctor/*/js/default-rsp/common/adblock/adsbygoogle.js$domain=holadoctor.com
! https://github.com/AdguardTeam/AdguardFilters/issues/5709
maisgasolina.com#@##adblock
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||maisgasolina.com/ajax.php?loadData=1&banner_id=ublock&someSoup=1
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=maisgasolina.com
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
@@||pagead2.googlesyndication.com/pagead/js/*/show_ads_impl.js$domain=maisgasolina.com
!
! https://github.com/AdguardTeam/AdguardFilters/issues/10858
@@||televalltv.net/js/advertisement.js
! https://github.com/AdguardTeam/AdguardFilters/issues/10859
@@||golrojadirecta.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/5548
@@||farodevigo.es/servicios/ads/dfp.js^
! https://github.com/AdguardTeam/AdguardFilters/issues/5480
@@||levante-emv.com/servicios/ads/dfp.js^
! uol.com.br antiadblock
||uol.com.br/camaleao/assets/web/javascript/detectadblock/detectadblock.js$important
! https://forum.adguard.com/index.php?threads/21090/
@@||connect-trojan.net^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/4538
@@||tabletsesmartphones.org^$generichide
! https://forum.adguard.com/index.php?threads/18891/
||tinypass.com/xbuilder/experience/load?$script,domain=abril.com.br
! https://forum.adguard.com/index.php?threads/18397/
@@||diariovasco.com/comun/js/*/adfrm.js
! https://github.com/AdguardTeam/AdguardFilters/issues/3199
@@||comandofilmes.net^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/3198
@@||dtorrent.com.br^$generichide
! https://github.com/AdguardTeam/AdguardDNS/issues/23
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=vmf.edge-apps.net|americatv.com.ar
! https://forum.adguard.com/index.php?threads/11320/
@@||static.folha.uol.com.br/paywall/*/publicidade.ads.js
! https://github.com/AdguardTeam/AdguardFilters/issues/2316
peru21.pe#@#.adstop
! https://github.com/AdguardTeam/AdguardFilters/issues/2269
||folha.uol.com.br/folha/furniture/paywall/loader.js
! https://forum.adguard.com/index.php?threads/10139/
||folha.uol.com.br/folha/furniture/paywall/
||static.folha.com.br/paywall/
! https://github.com/AdguardTeam/ExperimentalFilter/issues/2041
||tugahd.com/modules/mod_adblockdetector/
! https://github.com/AdguardTeam/ExperimentalFilter/issues/1162
! https://github.com/AdguardTeam/ExperimentalFilter/issues/1114
@@||autonocion.com/js/advertisement.js
! https://github.com/AdguardTeam/ExperimentalFilter/issues/1021
@@||subedlc.com^$elemhide
!---------------------------------------------------------------------------!
!-------------- General element hiding rules -------------------------------!
!---------------------------------------------------------------------------!
!
! This section contains generic element hiding rules that block ads.
!
! Good: ##.adv
! Bad: example.org##.adv (should be in specific.txt)
!
!
##a[href*="/jump/next.php"][id="gpujs_link"]
##a[href^="https://ads.impulsosocial.online/"]
##.pubContainer
##.cnt-publi
##.dfp-tag-wrapper-container
##.voc-advertising
##.publicity-content
##.publicidad
###PublicidadCentro
###PublicidadSuperior
###Publicidade
###ad-230x100-1
###ad-300x40-5
###ad-635x40-1
###ad4
###ad_publicidad
###adhome
###ads_top
###adsense2
###adsense2pos
###adsensePreCuerpo
###adsensepo
###adv_bottom_1
###adv_left_1
###adv_middle
###adv_middle_2
###adv_position_1
###adv_position_4
###adv_top_1
###adv_top_right
###advertising_header
###anunciosGoogle
###avazu_ads_slide
###barraPublicidade
###liBannerDireita
###liPublicidadeAdsense
###pmocntr2
###publiEspecial
###publicidad-02
###publicidad-contextual
###publicidad-top
###publicidadTop
###publicidad_button_home
###publicidade-topo
###publicidadeIsland
###publicidade_not
###publicidades_top
###publicidadhead
###publicidadheadernota
###publicidadsky
###publicidadtop_content
###queTooltip
###topopublicidade
##.AdsPot
##.Publicidade
##.PublicidadeSidebarSuperior
##.ad-superbanner
##.arriba-publicidad
##.bannerBox
##.bb-lt-adv
##.bb-pub-120_600
##.bb-pub-300_250
##.ctn-advertising
##.esp_publicidad
##.google-ads-obj
##.google-ads-rodape
##.googleAdFoot
##.hpPublicidadTop
##.lomadee-wp-related-offers
##.lv24hpublicidad
##.main-ads
##.publicidad-bg
##.publicidad-ct
##.publicidadMiddle
##.publicidadSuperior
##.publicidad_big
##.publicidad_especial
##.publicidad_top
##.publicidade
##.publicidade-abre_padrao
##.publicidade-dotted
##.publicidade_superbanner
##.publicidades
##.publicidadright
##.publicidadtxt
##.standard-ad
##.video_ads_overdiv
!---------------------------------------------------------------------------!
!-------------- General javascript, CSS and HTML extensions ----------------!
!---------------------------------------------------------------------------!
!
! This section contains the list of ad blocking rules that fall under "advanced" category.
!
! Bad: example.org###rek (should be in specific.txt)
!
!--------------------------------------!
!------- JS rules ---------------------!
!--------------------------------------!
!
! https://github.com/uBlockOrigin/uAssets/issues/21747
pulpulyy.club##+js(window.open-defuser, , 10)
! https://github.com/AdguardTeam/AdguardFilters/issues/166619
vix.com##+js(m3u-prune, type=ad, .m3u8)
vix.com#@#+js(xml-prune, xpath(//*[name()="Period"][.//*[name()="AdaptationSet"][@contentType="video"]]), , .m3u8)
! https://github.com/AdguardTeam/AdguardFilters/issues/165935
infohojeonline.blogspot.com##+js(nano-setInterval-booster, getid, *, 0.001)
! https://github.com/AdguardTeam/AdguardFilters/issues/166224
movidy.lat##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/165940
guiasaude.info##+js(set-cookie, Ads, 2)
! https://github.com/AdguardTeam/AdguardFilters/issues/165934
warezstream.net##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/165638
embedder.net##+js(abort-on-property-read, initPu)
! https://github.com/AdguardTeam/AdguardFilters/issues/164868
forodecostarica.com##+js(no-setTimeout-if, adJsView)
! https://github.com/AdguardTeam/AdguardFilters/issues/162520
beautyskincarebrasil.com##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/161356
receitasdafazenda.com##+js(set-local-storage-item, last_ads, yes)
modsimuladores.com,assistirfilmesdaluna.com,vejaideias.com.br,jogoscompleto.xyz##+js(adjust-setTimeout, atualizar, *, 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/161249
fazercurriculo.online,usandoapp.com##+js(adjust-setTimeout, .delay, *, 0.001)
! https://github.com/AdguardTeam/AdguardFilters/issues/161246
1i1.in##+js(set-cookie, clicked_ads, 2)
playerflix.com##+js(nano-setInterval-booster, myInterval, *, 0.001)
! animesbr.cc - popup in player
animesbr.cc##+js(abort-on-property-write, redirectpage)
! https://github.com/AdguardTeam/AdguardFilters/issues/165193
! https://github.com/AdguardTeam/AdguardFilters/issues/158831
assistirfilmeshdgratis.*##+js(remove-attr, href, a[href]#clickfakeplayer)
! https://github.com/AdguardTeam/AdguardFilters/issues/157557
sub100.com.br##+js(json-prune, *, *.media.*.advertisement_id)
! https://github.com/uBlockOrigin/uAssets/issues/18828#issuecomment-1639561464
suaurl.com##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/156217
megafire.net##+js(set-constant, contadorClics, 1)
! https://github.com/AdguardTeam/AdguardFilters/issues/155430
playpaste.com##+js(abort-current-script, $, window.open)
playpaste.com##+js(abort-current-script, enlace, document.write)
! https://github.com/AdguardTeam/AdguardFilters/issues/153969
directvxx.com##+js(abort-current-script, document.oncontextmenu, location.replace)
! https://www.reddit.com/r/uBlockOrigin/comments/13zza6x/opening_popup_when_click_on_the_player/
animesgratis.org##+js(remove-attr, href, a[href]#clickfakeplayer)
! https://github.com/uBlockOrigin/uAssets/issues/18329
g37.com.br##+js(addEventListener-defuser, DOMContentLoaded, document.write)
! https://github.com/AdguardTeam/AdguardFilters/issues/152382
piratefilmeshd.net##+js(abort-current-script, decodeURIComponent, 0x)
! https://github.com/AdguardTeam/AdguardFilters/issues/151483
gnula.club##+js(remove-attr, href, li[onclick^="go_to_player"] > a[target="_blank"][href])
! https://github.com/AdguardTeam/AdguardFilters/issues/151449
elmundo.es##+js(set-constant, Object.prototype.adSlot, '')
! https://github.com/AdguardTeam/AdguardFilters/issues/149757
! https://github.com/AdguardTeam/AdguardFilters/issues/146455
niusdiario.es##+js(set-constant, google.ima.OmidVerificationVendor, {})
! https://github.com/AdguardTeam/AdguardFilters/issues/145476
superhq.net##+js(abort-on-property-write, exopop)
hentaikai.com,superhq.net##+js(abort-on-property-write, protData)
! https://github.com/AdguardTeam/AdguardFilters/issues/142854
cuevana.biz,cuevana.run##+js(window.open-defuser)
cuevana.biz,cuevana.run##+js(abort-on-property-read, cJsEdge)
! https://github.com/AdguardTeam/AdguardFilters/issues/142855
repelispluss.tv##+js(abort-on-property-read, _pop)
! https://github.com/AdguardTeam/AdguardFilters/issues/140890
pobre.wtf##+js(set-constant, ads, false)
! https://github.com/AdguardTeam/AdguardFilters/issues/139850
suaurl.com##+js(set-constant, acdl, undefined)
suaurl.com##+js(no-setTimeout-if, window.location.href)
suaurl.com##+js(abort-current-script, $, notficationAd)
suaurl.com##+js(abort-current-script, open, document.getElementById)
! https://github.com/AdguardTeam/AdguardFilters/issues/139603
estacio.br##+js(set-cookie, modal_promo, 1)
! https://github.com/AdguardTeam/AdguardFilters/issues/167657
! https://github.com/AdguardTeam/AdguardFilters/issues/159461
adclicker.info,adclicker.io##+js(set-constant, global.noobMaxTry, 0)
! https://github.com/AdguardTeam/AdguardFilters/issues/159665
! https://github.com/AdguardTeam/AdguardFilters/issues/159538
! https://github.com/AdguardTeam/AdguardFilters/issues/159034
! https://github.com/AdguardTeam/AdguardFilters/issues/156973
! https://github.com/AdguardTeam/AdguardFilters/issues/138774
! https://github.com/AdguardTeam/AdguardFilters/issues/138773
! https://github.com/AdguardTeam/AdguardFilters/issues/152316
! https://github.com/AdguardTeam/AdguardFilters/issues/136572
! https://github.com/uBlockOrigin/uAssets/issues/13159#issuecomment-1320248188
geeknetic.es##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/151620
safepc.online,solopc.net##+js(set-constant, global.noobMaxTry, 0)
! https://github.com/AdguardTeam/AdguardFilters/issues/146895
! https://github.com/AdguardTeam/AdguardFilters/issues/144257
! https://github.com/AdguardTeam/AdguardFilters/issues/140034
! https://github.com/AdguardTeam/AdguardFilters/issues/138379
! https://github.com/AdguardTeam/AdguardFilters/issues/138941
! https://github.com/AdguardTeam/AdguardFilters/issues/134511
! https://github.com/AdguardTeam/AdguardFilters/issues/133825
player.hentaistube.com##+js(set-constant, player.preroll, noopFunc)
! leftover at the top
canalnet.tv##+js(remove-class, _theme-banner-upper, html)
! https://github.com/AdguardTeam/AdguardFilters/issues/126458
fiuxy2.com##+js(abort-on-property-read, lolaop)
! https://github.com/AdguardTeam/AdguardFilters/issues/127552
animeblix.com##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/126442
servernew.xyz,servertwo.xyz,megaseriesonline.pro##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/125382
pelisplushd.site##+js(remove-attr, href, a[href^="https://adalites.site/"])
! https://github.com/uBlockOrigin/uAssets/issues/14099#issuecomment-1192722375
raulprietofernandez.net##+js(abort-on-property-write, pUrlArray)
! https://github.com/AdguardTeam/AdguardFilters/issues/123894
beachcam.meo.pt##+js(remove-class, bgPartners2019, .videoContainer > div.beachPartners + div)
! https://github.com/AdguardTeam/AdguardFilters/issues/122276
chinesetubex.com.es##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/119040
netcine.*##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/118915
seriesgratis.biz##+js(no-setTimeout-if, adsdirect)
arnolds.com.br##+js(adjust-setTimeout, videoliberado, *, 0.02)
playnewserie.xyz##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/118601
playnewserie.xyz##+js(set-constant, anunciotag, noopFunc)
! https://github.com/AdguardTeam/AdguardFilters/issues/117301
desenhosanimados.site##+js(window.open-defuser)
desenhosanimados.site##+js(addEventListener-defuser, , popunder)
! https://github.com/AdguardTeam/AdguardFilters/issues/116948
sejasaudavel.net##+js(nano-setInterval-booster, .style.display, *, 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/117122
descargarhentaimf.xyz##+js(addEventListener-defuser, click, loadXMLDoc)
! https://github.com/AdguardTeam/AdguardFilters/issues/116262
vizer.vip##+js(set-constant, _mvnxp, noopFunc)
! https://github.com/AdguardTeam/AdguardFilters/issues/116218
mundotec.pro##+js(nano-setInterval-booster, player, , 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/116187
! https://github.com/AdguardTeam/AdguardFilters/issues/116183
! https://github.com/AdguardTeam/AdguardFilters/issues/116088
receitasoncaseiras.online##+js(set-cookie, visited, yes)
receitasoncaseiras.online##+js(adjust-setTimeout, PLAYER, *, 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/116087
automotivocarros.com,portecnologia.com,cartaocreditoplatinum.org##+js(set-cookie, CLI_02_Dxxxxxxxxxxxxxxx, 1)
automotivocarros.com,portecnologia.com,cartaocreditoplatinum.org##+js(adjust-setTimeout, liberaDownload, *, 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/115300
guialocaliza.club##+js(adjust-setTimeout, videoliberado, *, 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/115230
! https://github.com/AdguardTeam/AdguardFilters/issues/115229
empregonews.online##+js(remove-class, hided, #framed > div)
! https://github.com/AdguardTeam/AdguardFilters/issues/111701
pelispedia-v2.wtf##+js(window.open-defuser)
pelispedia-v2.wtf##+js(nano-setInterval-booster, Loading player, , 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/111554
paky3.me,pelismart.com,pelismarthd.com##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/111452
tiohentai.xyz##+js(set-constant, loadingAds, undefined)
tiohentai.xyz##+js(abort-current-script, document.addEventListener, create_)
! https://github.com/AdguardTeam/AdguardFilters/issues/111261
! https://github.com/AdguardTeam/AdguardFilters/issues/109027
pelispedia-v1.wtf##+js(window.open-defuser)
pelispedia-v1.wtf##+js(nano-setInterval-booster, Loading player, , 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/110168
atomohd.com,atomtt.com,atomixhq.*##+js(window.open-defuser, !/download\/|link|atomtt\.com\//)
! https://github.com/AdguardTeam/AdguardFilters/issues/109967
! https://github.com/AdguardTeam/AdguardFilters/issues/102624
pelispop.me##+js(abort-on-property-read, adk_pdisp)
! https://github.com/AdguardTeam/AdguardFilters/issues/102845
criarjogosandroid.com##+js(adjust-setTimeout, contador, , 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/100382
cuevana-3.wtf##+js(window.open-defuser)
cuevana-3.wtf##+js(nano-setInterval-booster, Loading..., , 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/100233
! https://github.com/AdguardTeam/AdguardFilters/issues/100439
pelisplus.icu##+js(abort-on-property-read, __clientAHV)
! https://github.com/AdguardTeam/AdguardFilters/issues/98360
! https://github.com/AdguardTeam/AdguardFilters/issues/96396
baixartorrents.org##+js(abort-on-property-read, redirectpage)
baixartorrents.org##+js(abort-on-property-read, initPopunder)
! popup
muyzorras.com##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/115304
topflix.*##+js(nano-setInterval-booster, adsHandle_noclick, , 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/91363
app.prende.tv##+js(json-prune, ads breaks cuepoints times, ads)
! https://github.com/AdguardTeam/AdguardFilters/issues/88357
maxitorrent.com##+js(window.open-defuser, ?sid=)
! https://github.com/AdguardTeam/AdguardFilters/issues/85982
eusaudavel.net##+js(remove-class, hided, div#player)
! https://github.com/AdguardTeam/AdguardFilters/issues/83429
palaygo.site##+js(abort-current-script, onbeforeunload, popit)
! nutricaohoje.website - unblock video player
nutricaohoje.website##+js(set-cookie, visited, yes)
nutricaohoje.website##+js(adjust-setTimeout, PLAYER LIBERADO, 10000, 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/82848
vernaruto.tv##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/80523
pctmix1.com##+js(abort-on-property-read, _cpp)
! https://github.com/AdguardTeam/AdguardFilters/issues/79561
allfeeds.live##+js(abort-on-property-read, popurl)
! https://github.com/AdguardTeam/AdguardFilters/issues/53114
superflix.net##+js(addEventListener-defuser, mousedown, touchend)
! https://github.com/AdguardTeam/AdguardFilters/issues/77492
! https://github.com/AdguardTeam/AdguardFilters/issues/75965#issuecomment-787037804
cinecalidad2.*##+js(abort-on-property-read, the_crakien)
cine-calidad.*##+js(abort-on-property-read, allclick_Public)
! https://github.com/AdguardTeam/AdguardFilters/issues/75969
clickhouse.xyz##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/75368
grantorrent.nl##+js(abort-on-property-read, zoneSett)
! hentaistube.com popunder
hentaistube.com##+js(abort-on-property-read, checkCookieClick)
! https://github.com/AdguardTeam/AdguardFilters/issues/75370
! https://github.com/AdguardTeam/AdguardFilters/issues/74483
movidy.*##+js(abort-current-script, document.getElementsByTagName, onclick)
! https://github.com/AdguardTeam/AdguardFilters/issues/73993
pctreload1.com##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/74115
deportealdia.live##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/73146
libertinga.net##+js(abort-on-property-read, _0x4e52)
! https://github.com/AdguardTeam/AdguardFilters/issues/72362
repelis.io##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/71858
serieslatinoamerica.tv##+js(remove-attr, href, a[href]#clickfakeplayer)
! https://github.com/AdguardTeam/AdguardFilters/issues/70684
mrpiracy.top##+js(abort-on-property-read, Redirecionar)
mrpiracy.top##+js(abort-on-property-write, pfcu1)
! https://github.com/AdguardTeam/AdguardFilters/issues/70252
pepeliculas.org##+js(remove-attr, href, a[href]#clickfakeplayer)
! https://github.com/AdguardTeam/AdguardFilters/issues/69883
verdragonball.online##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/130882
otakustv.com##+js(set-constant, click, 1)
otakustv.com##+js(set-constant, clickd, 1)
otakustv.com##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/69050
comicspornohentai.com##+js(noeval-if, _impspcabe)
! https://github.com/AdguardTeam/AdguardFilters/issues/67763
pornolandia.xxx##+js(set-constant, xxxStore, undefined)
! https://github.com/AdguardTeam/AdguardFilters/issues/67586
irmaosdotados.net##+js(addEventListener-defuser, load, /_0x[\s\S]*?parentNode[\s\S]*?appendChild/)
! https://github.com/AdguardTeam/AdguardFilters/issues/67519
hentaiporno.xxx##+js(set-constant, vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads, '')
! https://github.com/AdguardTeam/AdguardFilters/issues/149775
! https://github.com/AdguardTeam/AdguardFilters/issues/147864
! https://github.com/AdguardTeam/AdguardFilters/issues/67054
! https://github.com/AdguardTeam/AdguardFilters/issues/66187
! https://github.com/AdguardTeam/AdguardFilters/issues/70107
! https://gist.github.com/AdamWr/baad2e6e9cf8ea4eabcf9a4cf9a2fa37
temparchive.com##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/66106
megadescarga.net##+js(set-constant, clicked, true)
megadescarga.net##+js(set-constant, eClicked, true)
megadescarga.net##+js(set-constant, number, 0)
megadescarga.net##+js(set-constant, sync, true)
! https://github.com/AdguardTeam/AdguardFilters/issues/116141
lectulandia.*##+js(adjust-setTimeout, redirect, *, 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/60106
compartiendofull.net##+js(remove-attr, href, .leaving-message center > a.btn[onclick^="window.open"][href*="/ads.html"])
! https://github.com/AdguardTeam/AdguardFilters/issues/59587
animeblix.com##+js(json-prune, rot_url pop_type)
! https://github.com/AdguardTeam/AdguardFilters/issues/59484
pasfox.com##+js(abort-current-script, $, ads_enabled)
pasfox.com##+js(abort-current-script, enlace, document.write)
! https://github.com/AdguardTeam/AdguardFilters/issues/57235
repelisgt.net##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/57811
comandotorrents.org,lapumia.org##+js(addEventListener-defuser, DOMContentLoaded, videoTag)
! https://github.com/AdguardTeam/AdguardFilters/issues/57080
animeblix.com##+js(window.open-defuser, passeura)
! https://github.com/AdguardTeam/AdguardFilters/issues/56441
movieknowing.com##+js(window.open-defuser, /^https?:\/\/movieknowing\.com\/$/, trueFunc)
! https://github.com/AdguardTeam/AdguardFilters/issues/55952
seireshd.com##+js(abort-on-property-read, scriptwz_url)
seireshd.com##+js(abort-current-script, host, window.btoa)
! https://github.com/AdguardTeam/AdguardFilters/issues/55155
cinetux.to##+js(abort-on-property-read, smrtSB)
cinetux.to##+js(abort-on-property-read, asgPopScript)
cinetux.to##+js(remove-attr, href, a[href]#clickfakeplayer)
! https://github.com/AdguardTeam/AdguardFilters/issues/53005
hentai-id.tv##+js(abort-current-script, $, .one("click")
! https://github.com/AdguardTeam/AdguardFilters/issues/52616
! https://github.com/AdguardTeam/AdguardFilters/issues/51462
! https://github.com/AdguardTeam/AdguardFilters/issues/51052
holanime.com##+js(abort-on-property-read, Object.prototype.Focm)
! https://github.com/AdguardTeam/AdguardFilters/issues/49711
receitastops.ga##+js(adjust-setTimeout, contador, , 0.02)
! pirlotv.es - popups
pirlotv.es##+js(abort-on-property-read, smrtSP)
! https://github.com/AdguardTeam/AdguardFilters/issues/48208
adrenalinagames.com##+js(adjust-setTimeout, contador, , 0.02)
! https://github.com/AdguardTeam/AdguardFilters/issues/47860
aquariumgays.com##+js(abort-on-property-read, _cpp)
! https://github.com/AdguardTeam/AdguardFilters/issues/39547
fakings.com##+js(set-constant, a_consola, noopFunc)
! https://github.com/AdguardTeam/AdguardFilters/issues/45935
! https://github.com/AdguardTeam/AdguardFilters/issues/45783
repelisplus.vip##+js(abort-on-property-read, adbClick)
! https://github.com/AdguardTeam/AdguardFilters/issues/45492
descargaranimehentai.com##+js(abort-on-property-read, pub)
! https://github.com/AdguardTeam/AdguardFilters/issues/44237
redirdx.in##+js(window.open-defuser, redirdx.in/go/)
! https://github.com/AdguardTeam/AdguardFilters/issues/41643
! https://github.com/AdguardTeam/AdguardFilters/issues/42381
playpaste.com##+js(window.open-defuser)
! https://github.com/AdguardTeam/AdguardFilters/issues/40879
tuhentaionline.com##+js(abort-on-property-read, Pub2)
! https://github.com/AdguardTeam/AdguardFilters/issues/38339
! https://github.com/AdguardTeam/AdguardFilters/issues/33854
! https://github.com/AdguardTeam/AdguardFilters/issues/33092
! https://github.com/AdguardTeam/AdguardFilters/issues/22053
! https://github.com/AdguardTeam/AdguardFilters/issues/21977
! https://github.com/AdguardTeam/AdguardFilters/issues/15842
! https://github.com/AdguardTeam/AdguardFilters/issues/12258
! https://github.com/AdguardTeam/AdguardFilters/issues/10865
! https://github.com/AdguardTeam/AdguardFilters/issues/7559
!+ NOT_PLATFORM(windows, mac, android)
! https://forum.adguard.com/index.php?threads/26449/
!
!--------------------------------------!
!------- CSS fixes --------------------!
!--------------------------------------!
!
! https://github.com/AdguardTeam/AdguardFilters/issues/166777
portugues.com.br#$#.area-publi { height: 0 !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/165936
vidasaudavel.bio#$#.hided { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/165940
guiasaude.info#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/165640
receitasdodia.fun#$#.hided { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/165264
receitasdochico.life,dicasdefinancas.net,dicasfinanceirasbr.com,dicasdevalor.net#$##player { display: block !important; }
dicasvalores.com#$#.content-box { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/165265
ldicas.com.br#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/165263
investfacil.org#$#.hided { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/165266
criptoreal.site#$#.hided { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/165239
tempo.pt#$#.pie-pagina { margin-bottom: 0 !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/162781
geometriaanalitica.info#$#span[data-ez-ph-id] { position: absolute !important; left: -3000px !important; }
! https://github.com/uBlockOrigin/uAssets/issues/19849
3djuegos.com#$#.ad-lat2 { height: 0 !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; visibility: collapse !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/161428
anroll.net#$#.modal-backdrop { display: none !important; }
anroll.net#$#.modal[style^="backdrop-filter"] { display: none !important; }
anroll.net#$#body { overflow: auto !important; padding-right: 0 !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/159239
informacion.es#$#.footer { padding-bottom: 0 !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/158832
felizemforma.com#$#body > #box { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/144260
radioagricultura.cl#$#body { overflow: auto !important; }
radioagricultura.cl#$##welcome-ad { display: none !important; }
! ad at the top
lecturas.com#$#.add990x90 { min-height: 0 !important; }
lecturas.com#$#.add990x90 div { height: 0 !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/139066
todalamusica.es#$#aside > div > .goqpfsl { visibility: hidden !important; height: 1px !important; }
! https://github.com/uBlockOrigin/uAssets/issues/13159#issuecomment-1320248188
geeknetic.es#$#.dat-menu-container { cursor: auto !important; }
geeknetic.es#$#body[style^="background"] { background: none !important; }
! ad popup
jornaleconomico.pt#$#.wow-modal-overlay { display: none!important; }
jornaleconomico.pt#$#html { overflow: auto!important; }
jornaleconomico.pt#$#body { overflow: auto!important; }
! leftovers at the top
infobae.com#$#.top-home { margin-top: 60px!important; }
infobae.com#$#.page-container.top { margin-top: 60px!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/131573
estadao.com.br#$#div[class^="skin-premium"] { display: none!important; }
estadao.com.br#$#.navbar-container { margin-top: 0!important; }
estadao.com.br#$##fusion-app { margin-top: 0!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/130463
inforchannel.com.br#$#.modal__banner { display: none !important; }
inforchannel.com.br#$#.modal-backdrop { display: none !important; }
inforchannel.com.br#$#body { overflow: auto !important; padding-right: 0 !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/130240
diariodepernambuco.com.br#$#.main__corpo { margin-top: 160px!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/128048
jc.ne10.uol.com.br#$##header-bar.header-bar { padding-top: 0 !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/127237
climaaovivo.com.br#$#.containerMapAndBanner > .contentMap { height: 100% !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/122606
adrenaline.com.br#$#.body { background-image: none!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/122401
mundoconectado.com.br#$#body[style*="url"] { background-image: none !important; }
mundoconectado.com.br#$#body[style*="url"] .trending-light[style^="margin-top:"] { margin-top: 20px !important; }
mundoconectado.com.br#$#.block-wrapper[style*="url"] { background: none !important; }
mundoconectado.com.br#$#.block-wrapper[style*="url"] > .container > .row { margin-top: 0 !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/120395
cienradios.com#$#.navBar { height: auto !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/78507
20minutos.es#$##axds-Top { min-height: 0 !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/118916
dicadesaude.online#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/118918
receitasdalu.net#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/118602
bolsadevalores.club#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/118600
cheirinhobao.com#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/118491
dicasfinanceirasbr.com#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/118489
dicasgostosas.com#$##player { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/117306
decorabolos.net#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/116797
guiafinancas.net#$##player { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/116265
clubinvest.top#$#div[id^="src_iframe_"] { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/116218
mundotec.pro#$#.player { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/116091
receitasdochico.life#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/115519
knightnoscanlation.com#$##manga-title { height: unset !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/115299
futlances.net#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/115301
receitasdaora.online#$##player { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/115228
gastronomiabrasileira.net#$##colunas { display: block !important; }
! https://github.com/uBlockOrigin/uAssets/issues/12640
elchapuzasinformatico.com#$#body { background-image: none !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/114881
legacyfun.site#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/112205
oantagonista.uol.com.br#$#div[id^="div-gpt-"] { display: none !important; }
oantagonista.uol.com.br#$##div-gpt-leaderboard ~ #page { margin-top: 30px !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/108294
blog.clarocombomais.com.br#$#body { overflow: auto !important; }
blog.clarocombomais.com.br#$##progressModal { display: none !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/106118
decorardicas.com.br,loucasporcabelos.com.br#$#.play { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/97544
receitasdahora.online,adrianeboneck.com.br#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/96283
infoescola.com#$##article-header { min-height: 0 !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/96396
androidapktop.com#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/94435
hardware.com.br#$#.is_advertising .site-advertising { margin: 5px auto 0 !important; }
hardware.com.br#$#.hd-ad--background { display: none !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/83741
gamevicio.com#$#.hasBgApb { margin-top: 0 !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/81534
infobae.com#$#.content_section > .top { margin-top: 100px !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/76850
resenhasglobais.com,tecword.info,manualdamulher.net,noticiasfitness.online,smartdoing.tech,manchetehoje.xyz,noticiastecnologica.online,vivercomsaude.online,empregovaga.com,financashoje.online,receitasdamamae.online,blotz.me,cardapiodavovo.online,financasnow.online,vidadeatletas.com,belezaedieta.net,receitasdomundo.site,flashreceitas.com,tudoemprego.online,blogdatecnologia.net,diariodecasamento.com,eusaudavel.net,modaestiloeafins.com,portalmundocurioso.com,turismoeviagem.com,receitasabores.com#$##framed > #player { display: block !important; }
resenhasglobais.com,tecword.info,manualdamulher.net,noticiasfitness.online,smartdoing.tech,manchetehoje.xyz,noticiastecnologica.online,vivercomsaude.online,empregovaga.com,financashoje.online,receitasdamamae.online,blotz.me,cardapiodavovo.online,financasnow.online,vidadeatletas.com,belezaedieta.net,receitasdomundo.site,flashreceitas.com,tudoemprego.online,blogdatecnologia.net,diariodecasamento.com,eusaudavel.net,modaestiloeafins.com,portalmundocurioso.com,turismoeviagem.com,receitasabores.com,tecnologiaonline.site,muitasreceitas.site,fazendorendaextra.xyz,bellareceitas.com,globalnoticias.online,culinariadochef.net,gameszoom.net,grandnoticias.com#$##framed { display: block !important; }
resenhasglobais.com,tecword.info,manualdamulher.net,noticiasfitness.online,smartdoing.tech,manchetehoje.xyz,noticiastecnologica.online,vivercomsaude.online,empregovaga.com,financashoje.online,receitasdamamae.online,blotz.me,cardapiodavovo.online,financasnow.online,vidadeatletas.com,belezaedieta.net,receitasdomundo.site,flashreceitas.com,tudoemprego.online,blogdatecnologia.net,diariodecasamento.com,eusaudavel.net,modaestiloeafins.com,portalmundocurioso.com,turismoeviagem.com,receitasabores.com,tecnologiaonline.site,muitasreceitas.site,fazendorendaextra.xyz,bellareceitas.com,globalnoticias.online,culinariadochef.net,gameszoom.net,grandnoticias.com#$#.content > #el-02 { display: none !important; }
empregovaga.com,financashoje.online,financasnow.online#$#.content > div[id^="el-02"] { display: none !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/75367
osmtecnologico.com#$##colunas { display: block !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/74030
mundotecnologias.com#$##framed > #player { display: block !important; }
mundotecnologias.com#$##framed > #txt { display: none !important; }
mundotecnologias.com#$##framed > #timer { display: none !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/67978
tudogostoso.com.br#$#body { padding-top: 0 !important; }
tudogostoso.com.br#$#body > header { top: 0 !important; }
tudogostoso.com.br#$#.tgad-top { display: none !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/66910
folhadoslagos.com#$#html.fancybox-margin { margin-right: 0 !important; }
folhadoslagos.com#$#html.fancybox-lock > body { overflow: auto !important; }
folhadoslagos.com#$#.fancybox-overlay { display: none !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/63149
formulatv.com#$#.col-anu + div.col-cnt > div.columna { width: 34% !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/62906
tecnoblog.net#$#body #fullbanner-container { height: 1px !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/58103
expressodaspraias.com.br#$#.gafancybox-overlay { display: none!important; }
expressodaspraias.com.br#$#html { overflow: visible !important; }
expressodaspraias.com.br#$#body { overflow: visible !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/54191
lavoz.com.ar#$#div[class^="block-ads-"] { visibility: hidden !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/51734
clavejuegos.com#$#.banner { visibility: hidden !important; }
! mastercuriosidadesbr.com - skip timer
mastercuriosidadesbr.com#$#iframe.video { display: block!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/41813
diariodoiguacu.com.br#$#div[class="vc_row wpb_row td-pb-row"][style^="padding-top: 1"] { padding-top: 0 !important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/34146
goovie.co#$#.alert-message > #fake { display: none!important; }
goovie.co#$#.alert-message > #informacion { display: block!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/33854
zonammorpg.com#$#body { background-image: none!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/25954
visioncloud.ga#$#body.modal-open[style="padding-right: 17px;"] { overflow: visible!important; padding-right: 0px!important; }
visioncloud.ga#$#div[class="modal fade in"][id][data-backdrop="static"][style="display: block; padding-right: 17px;"] { display: none!important; }
visioncloud.ga#$#div[class="modal fade in"][id][data-backdrop="static"][style="display: block; padding-right: 17px;"] ~ div.modal-backdrop.fade { display: none!important; }
! foros.3dgames.com.ar - ads
foros.3dgames.com.ar#$#.ad_block_shadowed { position: absolute!important; left: -3000px!important; }
foros.3dgames.com.ar#$#.ad_block_non_shadowed { position: absolute!important; left: -3000px!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/22805
profesionalreview.com#$#body { background-image:none!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/20163
lavanguardia.com#$#.lv-publi-box { position: absolute!important; left: -3000px!important; }
lavanguardia.com#$#.megabanner-adv { position: absolute!important; left: -3000px!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/12753
depor.com#$#.ads-300x300 {position: absolute!important; left: -3000px!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/9654
seodiv.com#$#.container.have-brand { margin-top: 0!important; }
! https://forum.adguard.com/index.php?threads/identi-li-pop-up.27296/
navegacom.com#$#.series-indeti { display: block!important; }
! https://forum.adguard.com/index.php?threads/25456/
adslzone.tv,androidayuda.com,softzone.es,hardzone.es,gamerzona.com#$##NEWS_RELATED { position: absolute!important; left: -3000px!important; }
androidayuda.com,adslzone.tv,androidayuda.com#$##ROBAPAGINAS_INLINE_LEFT { position: absolute!important; left: -3000px!important; }
! https://github.com/AdguardTeam/AdguardFilters/issues/6780
kshowes.net#$##hide { display: block!important; }
kshowes.net#$#.buttonlink#contador { display: none!important; }
! https://forum.adguard.com/index.php?threads/24929/
tu.tv#$#div#banner300x250 { display: none!important; }
! https://forum.adguard.com/index.php?threads/24654/
windowsblogitalia.com#$#.sidebar > div.tile-top.tile { height: auto!important; }
!--------------------------------------!
!------- Content filtering rules ------!
!--------------------------------------!
!
!---------------------------------------------------------------------------!
!-------------- General URL blocking rules ---------------------------------!
!---------------------------------------------------------------------------!
!
! This section contains the list of generic blocking rules.
!
! Good: .org/ads/
! Bad: .org/ads/$domain=example.org (for instance, should be in speficic.txt)
!
!
/imagenes_publicidad/*
-publicidad-
-publicidad/
-publicidade.
.br/ads/
.br/adx.js
.br/afiliados/$domain=~mercadolivre.com.br
.br/banner.aspx?
.br/banners/$domain=~colombo.com.br
.br/imagensdb/banners/
.br/metrics/
.br/swf/banners/
.cl/ads3/
.clickafiliados.
.com/adssrv/
.com/afiliados/
.cv/images/pubs/
.cv/pub/
.es/ads/
.es/Cnt/$domain=~ebay.es
.es/Cnt2/
.es/imagenesDDN/banners/
.es/traffic/?
.mx/ads/
.net.ar/ads/
.pt/images/banners/
.publicidade.
//adclient-
//adware.
/_publicidad/*
/ad_lomadee.
/ad_tpl.
/adfactor_
/adjuntos/imagenes/*.swf?link
/adrequisitor-
/ads/contextual
/ads/creatives/*
/adshotbrasil1.
/adsligados.
/banner300x80.
/Bannerctgineses.
/bannerWoo.
/bannerwoopos4.
/dixioforyoursite/*
/ficheiros/banners/*
/find.gl/js.php?
/iframe-banners.
/igbarra.js
/imagem/urchin.gif?
/img_banner/*
/imgcontador.php?
/linksPatGoogle.
/ml.track.me?p=
/mrec.aspx?
/mrec.html?
/nflads.
/planetup_
/publi.js
/publi/banner_
/publicidad-
/publicidad.
/publicidad1.
/publicidad160600.
/publicidadb.
/publicidadcolumnaderecha.
/publicidade-
/publicidade.
/publicidade_
/publicidades/*
/publicidadevertical.
/publicidadgoogle.
/publicidadinterior.
/publicidadtopbanner.
/publitab.
/recursos/banners/*
/suse468x60-
/ulisesAnalytics.
/visita.php
/wpublicidad/*
/Zoinke.Pt.
/zonasadserver/*
_fullbanner_balanca_
_publicidad.
_publicidad2.
_publicidad_
_publicidade.
_publicidade_
_publicitario.
http://adw.
!
! perimeterx.com
/lJuB4eTB/init.js
!---------------------------------------------------------------------------!
!------------------ Content replacement rules ------------------------------!
!---------------------------------------------------------------------------!
!
! This section contains the list of the content replacement rules that block ads. Rules must be domain-specific.
!
! Bad:  ||example.org/video-links (should be in specific.txt)
!
! https://github.com/AdguardTeam/AdguardFilters/issues/166619
! https://github.com/AdguardTeam/AdguardFilters/issues/91363
! https://github.com/AdguardTeam/AdguardFilters/issues/59758
! https://github.com/AdguardTeam/AdguardFilters/issues/58962
! https://github.com/AdguardTeam/AdguardFilters/issues/21452
!---------------------------------------------------------------------------!
!-------------- Rules for specific websites --------------------------------!
!---------------------------------------------------------------------------!
!
! This section contains the list of domain-specific rules that block ads.
!
! Good: example.org###rek; ||example.com/ads/
! Bad: example.org#$##rek { display: none !important; } (for instance, should be in general_extensions.txt)
!
!
! For URL shorteners or simple sites with frequently changed ad servers.
! Incorrectly blocked domains can be excluded using regex(synchronize this regexp in all filters)
/^(?!.*(statically.io|sharecast.ws|bunnycdn.ru|bootstrapcdn.com|cdn.ampproject.org|cloudflare.com|cdn.staticfile.org|disqus.com|disquscdn.com|dmca.com|ebacdn.com|facebook.net|fastlylb.net|fbcdn.net|fluidplayer.com|fontawesome.com|github.io|google.com|googleapis.com|googletagmanager.com|gstatic.com|jquery.com|jsdelivr.net|jwpcdn.com|jwplatform.com|polyfill.io|recaptcha.net|shrink.pe|twitter.com|ulogin.ru|unpkg.com|userapi.com|vidazoo.com|vk.com|yandex.|yastatic.net|ytimg.com|zencdn.net|player|youtube.com|cackle.me|googleoptimize.com|vuukle.com|chatango.com|twimg.com|google-analytics.com|hcaptcha.com|raincaptcha.com|media-imdb.com|blogger.com|hwcdn.net|instagram.com|wp.com|imgsmail.ru)).*$/$third-party,script,_____,domain=thepiratefilmestorrent.biz|serieslatinoamerica.tv|pelispoptv.com|superflix.net|mangatigre.net
! Similar to regexp above, but using the denyallow modifier
$script,third-party,denyallow=fastly.net|statically.io|sharecast.ws|bunnycdn.ru|bootstrapcdn.com|cdn.ampproject.org|cloudflare.com|cdn.staticfile.org|disqus.com|disquscdn.com|dmca.com|ebacdn.com|facebook.net|fastlylb.net|fbcdn.net|fluidplayer.com|fontawesome.com|github.io|google.com|googleapis.com|googletagmanager.com|gstatic.com|jquery.com|jsdelivr.net|jwpcdn.com|jwplatform.com|polyfill.io|recaptcha.net|shrink.pe|twitter.com|ulogin.ru|unpkg.com|userapi.com|vidazoo.com|vk.com|yastatic.net|ytimg.com|zencdn.net|youtube.com|cackle.me|googleoptimize.com|vuukle.com|chatango.com|twimg.com|google-analytics.com|hcaptcha.com|raincaptcha.com|media-imdb.com|blogger.com|hwcdn.net|instagram.com|wp.com|fastcomments.com|plyr.io,_____,domain=anroll.net|monoschinos2.com|animeyt.es|leercapitulo.com|pelisflix2.green
!
! ##.ad
elcorreogallego.es,3djuegos.lat,xatakandroid.com,nsctotal.com.br,noticiasdenavarra.com,informacion.es,applesfera.com,xatakamovil.com,espinof.com,mundoxiaomi.com,vidaextra.com,mediotiempo.com,elpais.com,olhardigital.com.br,atribuna.com.br,jovemnerd.com.br,laopiniondemurcia.es,larazon.es,dicio.com.br,band.uol.com.br,xataka.com,onyxplay.com,genbeta.com,vagalume.com.br,xatakandroid.com,abril.com.br##.ad
! ##.ads
gaz.com.br,placar.com.br,futebolinterior.com.br,tvhistoria.com.br,tribunapr.uol.com.br,diariodonordeste.verdesmares.com.br,sbt.com.br,link.estadao.com.br,atomixhq.*,jc.ne10.uol.com.br,internetpasoapaso.com,acidadeon.com,leouve.com.br,larazon.es,infoescola.com,cbn.globoradio.globo.com,maxitorrent.com,abril.com.br,odia.ig.com.br,especiais.g1.globo.com,tribunapr.com.br,novelasd.com,anime-tube.tv##.ads
! ##body .banner
ahoragranada.com,correio24horas.com.br,cnnespanol.cnn.com,motociclismo.es,sub100.com.br,theenemy.com.br,manhwas.net,rpp.pe,ambito.com,economipedia.com,informador.mx,elinformador.com.co,cronista.com,rionegro.com.ar,diariodecuyo.com.ar,voydeviaje.com.ar,guarda14.com,viapais.com.ar,agazeta.com.br,eleconomista.com.mx,metropolitanafm.com.br,tycsports.com,elespectador.com,bnews.com.br,migalhas.com.br,losandes.com.ar,lavoz.com.ar,mundo.sputniknews.com,omelete.com.br,lapoliticaonline.*,mundotecnologias.com,valenciaplaza.com,veneapp.com,dalealbo.cl,globo.com,defesanet.com.br,mibrujula.com,lyon.kim,26noticias.com.ar,auniao.com,clickpb.com.br,emagister.com,lanacion.com.ar,parana-online.com.br,r7.com,toxico-pc.com,uol.com.br##body .banner
!
mundoeducacao.uol.com.br#?#.main_home-right > div[style]:has(> div[style] > div[id^="banner-"])
dgabc.com.br##div[class*="Banner_"]
dgabc.com.br##div[class^="_arroba"]
trampos.co##.dblclkbox
atelevisao.com##div[id^="ads-boost"]
adrenaline.com.br##div[id^="ad_conteudo_"]
reclameaqui.com.br#?#div[role="banner"]:has(> #ads-card-tooltip)
reclameaqui.com.br#?#div[class^="go"] > div[class^="sc-"]:has(> div[id^="div-gpt-ad"])
metropoles.com###taboola-mid-article-reco-reel
clickpb.com.br#?#body > div[style]:has(> a[href^="https://record.nsxafiliados.com/"])
clickpb.com.br##.adsHorizontal
depor.com##div[class^="showTds"]
visortmo.com#?##pills-populars > div.row > div.element:has(> a[target*="_blank"][rel*="nofollow"])
visortmo.com##a[target*="_blank"][rel*="nofollow"] > img
yugenmangas.net.br##.ads-flot
gartic.com.br###shopIntUm
vrum.com.br##.ad-banner
vrum.com.br#?#.category-list-post:has(> .ad-banner)
cnnbrasil.com.br##.ads__list__item
poder360.com.br##.box-carousel-sponsor__banner
amyscans.com##.code-block-10
tecmundo.com.br##.tec--ad--default
forum.outerspace.com.br##.p-body-sidebar > div:not([data-widget-key])
primicias.ec##.banner_large
infopedia.pt##body .googleAdsWidget
||infopedia.pt/assets/Ads/
temporeal.lance.com.br##.tl-item[data-evento="publicidade"]
fulltv.com.mx,fulltv.com.ar##.toptext1
fulltv.com.mx,fulltv.com.ar##.toptext2
fulltv.com.mx,fulltv.com.ar##.toptext5
fulltv.com.mx,fulltv.com.ar##.pie:empty
fulltv.com.mx,fulltv.com.ar##.social > div[class^="top"]
fulltv.com.mx,fulltv.com.ar##div[class^="pub336"]
fulltv.com.mx,fulltv.com.ar##.publicidad-728-top
||full.video^$domain=fulltv.com.ar|fulltv.com.mx
||documaniatv.com/player/plugins/vast/v/*/vast.js
tudogostoso.com.br##.ads-pholder
tudogostoso.com.br##.sticky-column-slot
||lancebetting.com^$domain=lance.com.br
lance.com.br##.topBannerDiv
cokitos.com##div[class$="-billboard-atf"]
cokitos.com##div[class$="-billboard-btf"]
vercomicsporno.com##iframe[src*="//go.xlivrdr.com/"]
vercomicsporno.com##iframe[src*="//tsyndicate.com/"]
vercomicsporno.com##iframe[src*="//creative.bbrdbr.com/"]
formulatv.com##.pub-suptop
formulatv.com##div[class^="pub-box-"]
cerisescan.net,sinensisscan.net##a[href="https://receita-fit.com"]
cerisescan.net,sinensisscan.net#?#.widget_custom_html:has(a[href="https://receita-fit.com"])
tviplayer.iol.pt##.billboardxlWrapper
jornalopcao.com.br##.template-part-component-google-ad
canaltech.com.br###truvidPos
canaltech.com.br#?##content-news > div[class]:has(> div[data-ad])
superembeds.com##.pppx
superembeds.com###adStop
||superembeds.com/*.xml
||p.jwpcdn.com/*/vast.js$important,domain=superembeds.com
biologianet.com##.pub-center
biologianet.com##.area-publi-topo
biologianet.com##div[class^="publi-"]
biologianet.com##div[class^="pub_insert_content"]
receitasdodia.fun##div[id^="el-02"]
noticiasaominuto.com##.placeholder
gamestorrents.fm##.landar center > a[target="_blank"] > img
gamestorrents.fm#?#.tab-pane > div[class*="-movie-gride-agile"]:has(> a[href*="?offer_id="][target="_blank"] > img)
juegosonlinegratis.com.mx,juegosonline.com.co,juegosonline.cl,jeuxgratuitjeux.com,culga.com,juegosonlinegratis.com.es,jogosnainternet.com.br##.horizontal-pub
visortmo.com##.pbl_top
gamestorrents.fm,visortmo.com##a[href*="offer_id="][target="_blank"] > img
||forodecostarica.com/skokka/
||forodecostarica.com/data/siropu/aml/
||visortmo.com/images/ch-*.jpg
jornalopcao.com.br##div[id^="nw_anuncio"]
midianews.com.br###ban_header
midianews.com.br##.col-sm-3 div[style="height: 280px;"]
manga-crab.com##.anunciopublicitario
okdiario.com##aside.ad-slot-ph
okdiario.com##.ad-slot-ph::before
elsalvador.com##body > #top-bar
obemdito.com.br##.adsDesktop1
olympusv2.gg##div[class="min-h-120 !rounded-none"]
forocoches.com##div[style^="min-height:250px;"]
forocoches.com##section[style^="min-width: 300px;"]
arkhamscan.com###floatcenter
diariodocomercio.com.br##[id^="ad"]
agroclima.climatempo.com.br##div[data-type="ad_space"]
/sdkpop.js$script,domain=beautyskincarebrasil.com
cnnbrasil.com.br##.ad__area
maisesports.com.br##a[href*="&offer="][target="_blank"] img
||maisesports.com.br/_next/image/?url=*elasticbeanstalk-*.amazonaws.com*strapi-uploads*300x600_stake_*.gif
poder360.com.br##.box-skeleton--banner-rectangle-2
clarin.com##.bannerTopHeader
clarin.com##.dbshwl
clarin.com##.sticky-banner
anroll.net###GGBetContent
||dj91.hostingnuclear.com/8014/stream$domain=animegafirex.com
||images.lun.com/luncontents/Banners/
lun.com###uctNoticesBanner_divbanner
gazetadopovo.com.br##div[data-ads]
nsctotal.com.br##.ad-single
nsctotal.com.br###floater_2
opopular.com.br##.classi-search-widget
opopular.com.br##.classi
opopular.com.br##div[id^="POP_HOME_SMT_"]
uol.com.br##.uolpd-video-inarticle
correio24horas.com.br##div[id^="single_"][id$="_piano"]
umdoisesportes.com.br##.banner-principal
abc.es##[class^="voc-header"] > a[data-voc-vtm-id="comienzoSuscripcionON"]
abc.es##.voc-ob-wrapper
||static.vocstatic.com/vam/*/vam.js
elmundo.es##div[class*="ue-c-main-header__subscription"]
||e00-elmundo.uecdn.es/js/pbmu.js
derechadiario.com.ar##a[href="https://www.zbl-legal.com/"] > img
revistaoeste.com,diariodorio.com##.autozep-outer
ahnegao.com.br###global_topo
atelevisao.com,ahnegao.com.br##.code-block
ahnegao.com.br##.sidebar-main > aside.ai_widget
midiamax.uol.com.br###fixed-banner
coleccionmovie.com##a[href*="?key="][target="_blank"]
letras.com,letras.mus.br##.anSpaceTop
newtral.es##div[class*="nwtpubli"]
orchidcommerce.com##a[href^="https://ibest.vote/"]
orchidcommerce.com##.responsive-slider
agazeta.com.br##.intext
agazeta.com.br##.intext_bottom
sabervivirtv.com##aside[class^="ad"]
||elcordillerano.com.ar/api/adserver/
||archivos.legisrn.gov.ar/legisv.html$domain=elcordillerano.com.ar
heraldo.es##.free-content.board
informacion.es##div[data-bbnx-slot-type="slots.article-sidebar.slot"]
theobjective.com##.tno-banner
eleconomista.com.ar##.bnc
elindependiente.com##.top-desktop
uol.com.br##.jupiter-share
uol.com.br##.jupiter-ads
elcorreogallego.es,elperiodicoextremadura.com,laopiniondemalaga.es##._mo_recs_vi
autobild.es##div[class*="ad-slot_"]
autobild.es##.hueco-publicidad
elcorreogallego.es,noticiasdenavarra.com,autobild.es##.megabanner
autobild.es##div[class^="river_gridPosition__"]
laopiniondemalaga.es##[data-ad-position-baldomero]
descargaseriestv.com###block-13
descargaseriestv.com###block-38
descargaseriestv.com###block-48
descargaseriestv.com##.widget_recent_comments ~ aside.widget
globo.com##div[data-type="advertise"]
hdpastes.com##center > a[target="_blank"] > video
futecell.com###HTML28
futecell.com###HTML27
felizemforma.com##.ad970x250
genbeta.com###editorialRecommendedPosts
||recantodasletras.com.br/vitrine/vitrine.php
repretel.com,redbolivision.tv.bo##html ned-ad
repretel.com,redbolivision.tv.bo##body .layout-rev
metsul.com##.ad-wide-antes
metsul.com##.metsu-adlabel
metsul.com###header2_alright
larazon.es###floorad__portada
jotdown.es##div[align="center"] > a.gofollow > img
oportaln10.com.br,aeiou.pt##div[class^="code-block code-block-"][style*="margin: 8px auto; text-align: center;"]
aeiou.pt##div[data-insertion-no-dbg]
dinheirovivo.pt##aside[class^="t-pubbox-"]
tvi.iol.pt,selfie.iol.pt##.patrocinado_section
tvi.iol.pt##.adwrap-pub
atelevisao.com###BelowHeaderAd
atelevisao.com##div[id^="AfterParagraph"]
timeout.pt##div[class^="_inlineAd_"]
timeout.pt##div[class^="_footer_ad_wrap_"]
timeout.pt##div[class^="_inlineAdWrapper_"]
cnnportugal.iol.pt##.patrocinadosWrapper
cnnportugal.iol.pt##.pubWrapper
cnnportugal.iol.pt##.pub-outer-wrapper
||cdn.iol.pt/js/utils/Modules/IOLComercial/dist/iol.comercial.js
luxwoman.pt##.theiaStickySidebar
luxwoman.pt##.feat-ad-wrap
concursosnobrasil.com.br,concursosnobrasil.com##div[class^="concur-prebid-lendo-"]
exame.com##div[id^="aside_ad_"]
exame.com##div[id^="native-home-"]:empty
lance.com.br##div[class*="styles_ad"]
lance.com.br##.w-full.h-\[100px\]
futebolinterior.com.br##.most-bet
futebolinterior.com.br##.ads--ordered
futebolinterior.com.br##.ads--ordered + div[id^="borg-elm-"]:empty
esdiario.com##div[class*="publi-"]
neo2.com##.postDosRow
milenio.com##aside[id^="taboola"]
diariosur.es,elcomercio.es##.voc-area-container--head-adv
elpais.com##.outbrain
neomotor.epe.es##div[style="min-height: 700px"]
epe.es##div[data-recs]
udgtv.com##a[href="https://velpay.com.mx/"] > img
superluchas.com###custom_html-22
||rondoniaovivo.com/imagensPublicidades/
||wook.pt^$domain=contaspoupanca.pt
suaurl.com##.mt-2.mb-5.text-center
suaurl.com##.mt-5.text-center
teleculinaria.pt##.up_comments
teleculinaria.pt##.teleculinaria_meio_conteudo_receitas
teleculinaria.pt##.akcelo-wrapper
razoesparaacreditar.com##.ads-inline-content
observatoriodosfamosos.uol.com.br##.obx-spots
observatoriodosfamosos.uol.com.br##.BannerDisneyPlay__Container
metropoles.com##section[class^="PublicidadesWrapper-"]
profesionalreview.com###background-stream-cover
ibahia.com##.ib-ad
ibahia.com###uolpd-video-inarticle:empty
cuarteldelmetal.com###sb
cuarteldelmetal.com###mvp-wallpaper
playpaste.com##.flex-center > a[target="_blank"] > img
eltiempo.com##.cont_pauta_vivamos
estadao.com.br##.container-pub-selo
principal.cat##.ppa
revistacromos.com.co##.Ads_megaBannerTopContainer
eldebate.com##.content-add
eldebate.com##.module-free-html-ads
semana.com##.publish-box
jn.pt##.pub-container
ps3hengames.site##div > .separator > a[target="_blank"]:not([href*="://stfly.me/"]) > img
noticiasaominuto.com##.ultima-hora > a[href^="https://www.flytap.com"]
noticiasaominuto.com##.escolha-consumidor-badge
lance.com.br##div[class*="styles_advertisingVert__"]
lance.com.br##div[class^="styles_quadradoArroba__"]
observador.pt##.obs-ad-placeholder
cba24n.com.ar##tadevel-ad
cba24n.com.ar##div[id^="random-"]
lance.com.br##div[class^="styles_stickySlot__"]
lance.com.br##div[class^="styles_advertising__"]
editalconcursosbrasil.com.br##div[class^="ads_conteudo_"]
editalconcursosbrasil.com.br##.conteudo_ads
estadao.com.br##.publi--spacing_news_htopo
los40.com##.c-pub
animeflv.net##div[class^="div"][style]:empty
65ymas.com,elplural.com##cs-ads
elplural.com##iframe[class^="smarty-"]
abril.com.br##.ads-bilboards
otempo.com.br###pub-sidebar
bahianoticias.com.br##div[id^="gcma_ads_zone_"]
||cdn.bahianoticias.com.br/arquivos/gcma_publi_banners/
campograndenews.com.br##body .ads-600
campograndenews.com.br##.banner-pattern
olhardigital.com.br##div[id^="denakop-ad-"]
jcconcursos.com.br##.banner-lg
jcconcursos.com.br##.banner_lateral
jcconcursos.com.br##.injected_arroba
jcconcursos.com.br##div[id][data-mobile="300x250"]
pciconcursos.com.br##.ads30
forum.adrenaline.com.br##div[id^="forum-ad-fixo-"]
pelando.com.br##div[data-testid*="/site/feed_"]
metropoles.com##div[class^="Publicidade"]
dicionariocriativo.com.br##.clarice-banner-container
airedesantafe.com.ar##.banner-libre
airedesantafe.com.ar##.banner-custom
canaln.pe##div[class^="AdsSlot_"]
zona-leros.com##.content_store
estadao.com.br##div[style="width: 100%; overflow: hidden;"]
motor.es##.secundaria .hueco-publicidad
motor.es##section[data-provider="taboola"]
motor.es##div[class^="megabanner"]
motor.es##div[class$=" "].hueco-publicidad
europafm.com##.addContainer
mhscans.com##.c-top-sidebar
mxcity.mx##.ads_citi
mxcity.mx###banner-top
autobild.es##div[class^="wrapper_mega_"]
autobild.es##.ad-smart
autobild.es##.block-as-sunmedia
eldiariony.com##.ad_paragraphs_desktop_container
eltiempo.pe##div[id^="testADS-"]
eltiempo.pe###carr
proddigital.com.br##div[align="center"] > a[target="_blank"] > img
||mangas.in/pub/hub/ads.html
mangas.in##iframe[src="https://mangas.in/pub/hub/ads.html"]
animeflv.net##a[href^="https://www.twitch.tv/merchivt/"]
mantrazscan.com###fixedbanner
megantorrents.com.br##.afc_popup
recetasderechupete.com##.mrf-adv__wrapper
miarevista.es,muyinteresante.es##.c-add
mangacrab.com###fixedban2
futemax.app##.alertWS
knightnoscanlation.com##div[id^="teaser"]
knightnoscanlation.com##.c-sidebar
fichajes.com##div[data-triplelift-id^="Adversport_"]
exitosanoticias.pe##div[id^="billboard"]
exitosanoticias.pe##.publicidad_footer_sticky
exitosanoticias.pe###top[style^="min-width: 300px;"]
exitosanoticias.pe##div[style="min-width: 300px; min-height: 250px;"]
lanacion.com.ar##.ln-banner-container
lanacion.com.ar##.lay-container > aside.ln-aside
||abola.pt/Scripts/slotsPublicidade/
||abola.pt/Scripts/ads_v*.js
||abola.pt/Scripts/videojs.ads.min.js
sapo.pt##.fugly-ads
sapo.pt##.spnsr
ideal.es,leonoticias.com,eldiariomontanes.es,lasprovincias.es,laverdad.es,elcomercio.es,diariosur.es,elcorreo.com,hoy.es##.v-adv
brothersdoaz.com.br##.chw-widget
elperiodico.cat##.following-ad-parent
elperiodico.cat##body .following-ad-container
larazon.es##.henneoHB
player.pelisgratishd.io,repelis24.rs###hidea
elperiodico.cat##.adLoaded:not(body)
huffingtonpost.es##div[data-adtype]
computerhoy.com##div[class^="home_containerAdSlot"]
aquitemfofoca.com.br##.cm-popup-modal
putinho.net##.stream-item
||pontogay.com/frontEnd/theme/assets/js/publi/
hacertest.com###adssup
vanitatis.elconfidencial.com##.revUnit
niusdiario.es###MEGASUPERIOR
niusdiario.es##div[class^="ads__ad_container-"]
olhardigital.com.br##.diagonal-strip
xataka.com,applesfera.com,xatakamovil.com,genbeta.com,espinof.com###stories_container:empty
computerhoy.com,businessinsider.es##div[class^="ad-slot_"]
businessinsider.es##div[class^="ad-catfish_"]
||apiv2-prd.anroll.net/service/p.js
meumundogay.net###custom_html-16
meumundogay.net###custom_html-17
||superhq.net/pop/
superhq.net##body .banner-750x250-single
hentaikai.com##a[href^="https://www.tufos.com.br/"]
peru21.pe###spc_home_stories:empty
peru21.pe,diariocorreo.pe###spc_post_stories:empty
spdiario.com.br###interna_banner_side
spdiario.com.br##div[id$="_banner_quadrado"]
jbox.com.br##.jbox-publi-fullwidth
independentespanol.com###top-banner-wrapper
metroworldnews.com,metroecuador.com.ec,fayerwayer.com##.arcad-container
metroworldnews.com,metroecuador.com.ec,fayerwayer.com##div[id^="arcad-feature-"][class^="default__StyledAdUnit-"]
gasteizhoy.com##.banclick
gasteizhoy.com##.macrobanblock
universohq.com##.barAds
istoe.com.br##div[style^="width: 100%; min-height: 250px;"]
laopinion.com.co##div[class^="pauta"]
/edgeSystem*.js$domain=cuevana.biz|cuevana.run
ffcv.es##.hidden-xs.zn_section
dw-anime.net###custom_html-60
autoscout24.es##.hf-top-old
maisgasolina.com###homeBlock
maisgasolina.com###stationBlock
pelisgratishd.io##body > a[onclick][target="_blank"]
oliberal.com##.bgbanner
oliberal.com###bgbanner
oliberal.com##.banner-container-sticky
futebolatino.lance.com.br##.elementor-widget-container a[data-wpel-link="external"] > img
aiyumangascanlation.com##.c-container-fluid > div.c-row
noblessetranslations.com###hades-push-slideup
noblessetranslations.com###adsBottomFixed
tangerina.uol.com.br##div[class*="_AdsWrapper"]
eleconomista.es##.b300
popnow.com.br##.mvp-content-main > h6 > a
emol.com###publi_right
globo.com##div[data-block-type="ads"]
lun.com###dvVideo1
tudn.com,univision.com##div[data-widget-type="Outbrain"]
tudn.com,univision.com##div[data-widget-type="Advertisement"]
theyucatantimes.com##.widget_cyclone-slider-widget
theyucatantimes.com##img[width="300"][height="300"]
ge.globo.com###banner_slb_topo
sdpnoticias.com##.sdp-ad
sdpnoticias.com##.sdp-block
forbes.com.mx##.set__ads--component
forbes.com.mx##placements-block
los40.com##div[class^="centrar_publicidad"]
diario.mx##.publicidad_basica
diario.mx##amp-img[width="200"][height="77"]
||elsiglodetorreon.com.mx/plantillas/adsPortada.js
vanguardia.com.mx##.cab_ads
excelsior.com.mx###region-aperture
excelsior.com.mx##.node_bottom_ads
excelsior.com.mx###PorqueLeisteAds
excelsior.com.mx##.items-publicidad
excelsior.com.mx###Caliente
excelsior.com.mx###at-moment-Ad
excelsior.com.mx##.imx-mas-recientes-publicidad
||excelsior.com.mx/gigigo/Component/widget_calientemx.html
||cloud.mail.ru/weblink/view/*?adVideo$media,redirect=noop-0.1s.mp3,domain=pobre.wtf
elpilon.com.co##div[style^="width: 300px;"][style*="height: 250px"]
||eluniversal.com.co/mcm/publicidad/dfp-sb/publicidad_internas_*.js
eluniversal.com.co###tg-adhesion
sonoticiaboa.com.br##.w300xh250
sonoticiaboa.com.br##.w300xh360
sonoticiaboa.com.br##.w320xh50-w970xh250
sonoticiaboa.com.br##.w320xh100-w970xh250
||sc.r7.com/ads/ad.js
||sc.r7.com/r7/js/adPartner.min.js
emtempo.com.br###ad-fixed
emtempo.com.br##.aet-ads-top-home
emtempo.com.br##.ads-category-page-desktop
emtempo.com.br##div[style="margin: 30px auto 30px; min-height:250px;"]
colombia.com##body > div.top
colombia.com###espacio-teads
colombia.com##.espacio-banner
colombia.com##div[class*="div-gpt-ad-"]
colombia.com##.alto
gamestorrents.fm##a[href^="https://sTartGAMIng.net/"] > img
kienyke.com##.contendo-relacionado-por-columnas
ccma.cat###contenidor_megabanner
ccma.cat##[data-ad-type]
principal.cat##.publi-principal
estandarte.com##.ad-p
elrellano.com##.inside-right-sidebar
eltiempo.com##div[class^="gpt-slot-"]
eltiempo.com##.ad-container-hor
occidente.co###id-custom_banner
audiotools.in,lanacion.com.co##.widget_custom_html
laarena.com.ar##.cont-publis-home
laarena.com.ar##.container-spot
laarena.com.ar##.container__publi
cronista.com##div[class^="piecesponsor"]
contextotucuman.com##.sidebar > div[class^="divide"]
rionegro.com.ar##ads-component
diariopanorama.com##.sponsor
anitube.biz##ins[style*="width:300px"]
tiodonghua.com##button[onclick="loadAd();"]
plateamagazine.com##.banneritem
plateamagazine.com###g-aside > .g-grid > .g-block.center.hidden-phone
beckmesser.com##.fusion-widget-area .widget > a[target="_blank"][class^="banner-"]:not([href^="https://docs.google.com/"])
pulzo.com##div[style*="max-height: 900px;"][style*="min-height: 600px;"]
pulzo.com##.pulzo-ad
trome.pe##div[class^="content_gpt_caja"]
estadiodeportivo.com##aside[name="publicidad"]
cronica.com.ar##.pre-home-banner-box
lacapital.com.ar,cronica.com.ar##.banner-box
cronica.com.ar##.bottom-sticky-banner-box
eldia.com##.mensaje_suscripcion_nota
eldia.com##.motores
diarioregistrado.com##.centered-content
lavoz.com.ar##.sponsor-block-cards
misionesonline.net##aside[class*="extendedwopts-"]
marieclaire.perfil.com##.suscripciones-accion
180.com.uy##.c180-home-banners-container
180.com.uy##.streaming-box
180.com.uy##.lomas-banner
180.com.uy##.delsol-wrapper
180.com.uy##.mgsl--iframe-box
||cdn.180.com.uy//banner/
diarionecochea.com###block-63
diarionecochea.com###block-49
meumundogay.net,diarionecochea.com###text-30
diarionecochea.com###text-36
diarionecochea.com###text-15
diarionecochea.com###block-118
diarionecochea.com###block-107
diarionecochea.com##img[width="650"][height="150"]
diarionecochea.com##.diari-cannata
diarionecochea.com##a[href="https://www.casasilvia.com/"] > img
diarionecochea.com##img[width="1070"][height="150"]
diarionecochea.com##img[width="300"][height="200"]
diarionecochea.com##img[width="300"][height="170"]
diarionecochea.com##img[width="300"][height="139"]
diarionecochea.com##img[width="300"][height="215"]
diarionecochea.com##img[width="300"][height="350"]
ladiaria.com.uy###header-pub
lr21.com.uy##.zone-adsense
espectador.com##.karen-relleno
espectador.com##.articulo--foto::after
elobservador.com.uy##.modulo_publi
elpais.com.uy##.Page-above
suaurl.com##div[style="height: 600px; width: 100%;"]
suaurl.com##div[id][onclick$="();"][style^="position: fixed; z-index:"]
||aulasdeinglesgratis.net/wp-content/uploads/*/banner-
aulasdeinglesgratis.netd##div[style*=" "].code-block
legendei.net,grupormultimedio.com,suasaudeonline.xyz,aulasdeinglesgratis.net###custom_html-2
legendei.net###custom_html-3
grupormultimedio.com###after-header
scherzo.es##.bannerListWidget
noticias.uol.com.br##.itemAds
noticias.uol.com.br###uolpd-video-inarticle
todalamusica.es##.aoqpfsl-single
todalamusica.es##*:not(aside) > div > .goqpfsl
todalamusica.es##.pt-cv-page > div[data-pid^="ad-"]
publimetro.*##.arcad-feature[class*="default__StyledAdUnit"]
sapo.pt##.block-pub
sapo.pt##.tin-pub-inner
impactoespananoticias.com###flotante-pie
||mssl.fwmrm.net/libs/adm/*/AdManager.js$domain=atresplayer.com,important
papinho.com###divAnuncios
||saturnus.app/Anuncio
braziljournal.com##.post-wrapmkt-adds
novelasligeras.net##.widget_woocommerce_product_search_widget ~ section[id^="block-"]
novelasligeras.net##div[class*="wam-ad-"]
novelasligeras.net##.wpb_wrapper > div[style] > center
sapo.pt##.special-ctn
visao.sapo.pt#$##TinAdPopup { display: none !important; }
visao.sapo.pt#$#.modal-open { overflow: auto !important; }
ferplei.com##div[id^="arcad-feature"]
pressdigital.es##.openx
dafiti.com.br###ad-placements
eleconomista.es##.banners-superiores2
eleconomista.es##.bannerInferior
eleconomista.es##.bannerIntermedio
eleconomista.es##.adsLinicom
letras-lyrics.com.br##div[class^="pub"]
poder360.com.br##.advertisement
poder360.com.br##div[class^="box-banner-footer"]
/freewheel-adManager-$script,domain=antena3.com|lasexta.com
/googleAdServer.$script,domain=antena3.com|lasexta.com
||sogatinhas.net/out/$image
sogatinhas.net##.catfish
acordacidade.com.br##.publi-base
revistacromos.com.co,lasestrellas.tv##.Ads
consultaremedios.com.br,elcomercio.com##.banner-wrapper
elcomercio.com##ned-ad
||streamtheworld.com/ondemand/ars?type=preroll$domain=cadenaser.com
||geeknetic.es/ajax/renderads.asp
||hardmob.com.br/clientscript/init.js
letras.mus.br##.an-pub
||player.hentaistube.com/cdn/videojs-preroll.
||baixarhentais.com/*/*-Pre-Roll-*.mp4$media,redirect=noop-0.1s.mp3,domain=player.hentaistube.com
elespanol.com##.div_publi
elespanol.com##.ofrecidopor
elespanol.com##div[id^="publi_intext"]
vandal.elespanol.com###carril_derecho1
vandal.elespanol.com##div[class^="publi_"]
elespanol.com##div[id^="placeholderpubli"]
record.com.mx##li[id^="publicDFP-"]
record.com.mx##.publicidadBoxBanner300x75
lacuerda.net##div[id^="ban"]:not([class])
||cdn.lacuerda.net/UTIL/pb*.js
tempo.com,tiempo.com,meteored.com.ar##.meteored-ads
/js/adsUtils.js$domain=voydeviaje.com|viapais.com.ar|guarda14.com|losandes.com.ar
depor.com##div[class^="content_gpt"]
depor.com##.container-publicidad
bolavip.com##.home-poll-block__ad
antena2.com##.mgid-pauta
promiedos.com.ar###pub728
nationalgeographic.com.es##.sticky-subscription
16valvulas.com.ar##div[style^="text-align:center;"][style*="margin:0;"][style*="width:100%"]
canalnet.tv##.the-banner
web-ole.lilax.io,ole.com.ar##div[class^="sc-ade"]
aristeguinoticias.com###topleader
caras.uol.com.br##div[id^="banner-"][id$="-area"]
correio24horas.com.br,agazeta.com.br##.ads-paragrafo
elcomercio.es##.voc-animated-modal-bottom
habitaclia.com##.publig
cope.es##.toolbar-directo__advertisment
expansion.com##a[href="http://www.caixabank.es"] > img
publico.es##.faldon-suscriptores
publico.es##.subscription-claim-footer
lavozdegalicia.es##.adpos
libremercado.com,libertaddigital.com##.dfp
milanuncios.com##.has-advertisement
telecinco.es###megaSuperior_multisite
telecinco.es##div[class^="ads__"]
elconfidencial.com##.articleAside__module--isSticky
20minutos.es##.banner-header
elespanol.com##.article-adv__content
elespanol.com##.container__outbrain
eltiempo.es##.cls-publi-height
eltiempo.es##.v-banner
||cdn.eltiempo.es/dist/appAd.*.js
eltiempo.es##div[style="min-height:600px;"]
elpais.com##div[id^="ad-"]
||static.elpais.com/dist/resources/js/*/ENP-outbrain.js
elmundo.es##.ue-c-subscription-ad
mhscans.com,listas.pro###orquidea-slideup
ouniversodatv.com,animerikosuper.blogspot.com###HTML1
animerikosuper.blogspot.com###HTML260
tecnoscann.com,mhscans.com,animerikosuper.blogspot.com##div[class^="fixed-"][class$="Sd"]
sabornamesa.com.br###mcontent-ads
sabornamesa.com.br##.mh-ads
noticiasmoviles.com##.theiaStickySidebar > #block-6
vagalume.com.br##iframe[height="65px"]
clubedohardware.com.br###ipsLayout_mainArea > div[style="text-align: center; height: 100px;"]
olhardigital.com.br##div[style^="max-width:100%;width:300px;height:250px;"]
olhardigital.com.br##.intext-denakop
olhardigital.com.br##.post-content > div[style^="max-width:calc( 100% - 10px );height:286px;"]
tribunademinas.com.br##.ad-single-container
minhavida.com.br##.mvn-announcement
ouniversodatv.com###nxt-ad
ouniversodatv.com###prev-ad
ouniversodatv.com###HTML2
ouniversodatv.com###HTML8
ouniversodatv.com###HTML10
meteorologiaenred.com,androidayuda.com###abn_singlestealer
minhaconexao.com.br##section a[target="_blank"] > img
minhaconexao.com.br##section iframe[src^="https://melhorplano.net/"]
webmotors.com.br##.BannerDfp
webmotors.com.br##.Prebid-media-short
tribunapr.uol.com.br##body > #__next > footer ~ .fixed.bottom-0
especiaisg1.globo##.banner-publicidade
g1.globo.com##.apuracao-outros-locais-ads
hola.com##body[data-pub] div[data-js-ad-manager-slot]
elcorreogallego.es,elperiodicoextremadura.com,laopiniondemalaga.es,elperiodico.com##._mo_recs_cti
epe.es,elperiodico.cat,cope.es,sport.es,elperiodico.com##.add
otakustv.com###result_server > .playing:empty
bloomberglinea.com,bloomberglinea.com.br##.arcad-feature-custom
meteorologiaenred.com###text-8
||diariodonordeste.verdesmares.com.br/static/assets/scripts/advertisingSticky.js
emperorscan.com###custom_html-31
ig.com.br##[id*="ad_mrec"]
ig.com.br##.iGh__small-ad
ig.com.br##.iG_componente_taboola_containerTitulo
||cuevana.fm/register$all
cuevana.fm##a[href^="/register"]
inforchannel.com.br##body .height-ads
inforchannel.com.br##iframe[src^="https://banners.inforchannel.com.br/"]
folhavitoria.com.br##.card-advertising
uol.com.br##.up-floating
redesuldenoticias.com.br##div[id="modal-noticias"][visualizacoes="69502"]
redesuldenoticias.com.br##.modal-backdrop
diariodepernambuco.com.br##.PubTopo
androidsis.com##.publi:not(.video-intext)
odigital.sapo.pt##.odigi-adlabel
e-konomista.pt##.c-publicity
newtral.es##div[class^="c-nwtpubli-"]
guiadosquadrinhos.com###box_banner
contigo.uol.com.br##.uol_placeholder
spinoff.com.br###Position_Top
spinoff.com.br##div[id^="Position_Content"]
brasilescola.uol.com.br##div[id^="area-flutuante-artigo-"]
serviporno.com##.abbcn-footer
serviporno.com###video-right > .video-relacionado
meutimao.com.br##.pbmt
meutimao.com.br##.bloco_horizotal_duplo
meutimao.com.br##.bloco_horizotal_triplo
||cdn.jwplayer.com/videos/$media,domain=ubeat.tv
desdelinux.net###text-23
desdelinux.net##.widget_abn_admanager_sidestealer
preparaenem.com##div[class^="publicidade"]
||cdn.com.do/wp-content/themes/cdn/assets/js/javascript-custom.js
cdn.com.do###top-banner-wrap
cdn.com.do###banner_medio_medio_html
bolavip.com##.boxbanner_container
gauchazh.clicrbs.com.br##.ads-section-area
gauchazh.clicrbs.com.br##.ad-parallax-container
clicrbs.com.br##.clic-advertising
elcolombiano.com,paginasiete.bo##.adcontainer-portlet
@@||v.fwmrm.net/ad/g/1?*_html5_live$domain=atresplayer.com,badfilter
poringa.net###banner-layer
poringa.net###banner-overlay
||o1.t26.net/poringa/tvmart/$domain=poringa.net
climaaovivo.com.br##.overlay
climaaovivo.com.br##.contentBanner
climaaovivo.com.br##div[class*="__DivStick"]
||obj-gravscale.zadarazios.com/v*/*/propagandas/*.mp4$domain=climaaovivo.com.br
publico.pt##.rmp-ad-outstream
dicionario.priberam.org##div[class*="pb-pub-"]:not(.pb-pub-6)
servernew.xyz,servertwo.xyz,megaseriesonline.pro##div[style^="position: absolute;"][style*="z-index:"][onclick*="anunciotag"]
eldiadezamora.es##.baterybanner
eldiadezamora.es##.BANNER-image
||genshinpro.com.br/wp-content/uploads/*/*/Exit-lag-*x*-*.gif
mangapt.com##.body-wrap > .c-top-sidebar
kimovil.com###user-sidebar div.kau
raulprietofernandez.net###k2Container > div[class^="item"] div[style*="background-color"]
beachcam.meo.pt##.beachPartners
beachcam.meo.pt##.dealer-block
beachcam.meo.pt##.liveCamInfoContainer > div.sponsorContainer + div
brasil247.com##.adBackground
brasil247.com##.textPublicidade
rbtv.com.br##div[class^="div03-banner-"]
||descargasdd.net/images/amazon.gif
||enfasys.net/wp-content/uploads/*.gif
mixmods.com.br##.customadimg
eltiempo.com##.adunit-googleadmanager
||adrenaline.com.br/uploads/personalizacao/TEMPLATE-ADRENALINE-*.jpg
||chineseporn.xyz/*.php
||chinesetubex.com.es/vidsx/*.php
||megaporn.com.es/alf/spot.php
chinesetubex.com.es##a[target="_blank"][onmouseup]
sporcle.com###top-unit
sporcle.com##.ad__slot
sporcle.com##.temp-300x250-unit
einvestidor.estadao.com.br##.publi-sticky-banner-container
einvestidor.estadao.com.br##.publi-area
||mundoconectado.com.br/uploads/personalizacao/tech-trends-bg-mundo-conectado*.jpg
moneytimes.com.br##div[id^="banner-top-"]
elespectador.com##div[class^="Ads"]
elespectador.com###pianoContainer
semana.com##.box-fixed-ads
exame.com##div[id^="related-news-"][id$="-ad"]
exame.com##div[id^="noticias_relacionadas"]
top10mais.org##div[style="height:300px;"]
fungoepigeo.eu##div[style*="width:300px;height:250px;"]
cienradios.com##.navBarAd
cienradios.com##.d-grid > div[class*="Caja-"]
pelisplus.one##.e3lan
elperiodicoextremadura.com##[data-ad-position-baldomero]:not([data-bbnx-module])
oglobo.globo.com,techtudo.com.br###ad-container-top-placeholder
em.com.br##.containerads
pelando.com.br##div[aria-label="anúncio patrocinado"]
bioguia.com##.am-slot
bioguia.com##.margin-banner-menu
exame.com##div[class*=" ad-pos-"]
exame.com##div[id^="home-native-ad-"]
exame.com##div[id^="veja_tambem_pos_"]
exame.com##footer ~ div > .container-fluid > .anchor-ad
exame.com##footer ~ div > .container-fluid > button.anchor-button
colegioweb.com.br###colegioweb_header
odia.ig.com.br###text-intext-ads
odia.ig.com.br##.intext-ads
coches.net##.mt-AdvertisingRoadblock-top
||img.auroraservers.re/ad/*.js
||netcine.*/ad/*.js$domain=netcine.*
||netcine.*/first.js$domain=netcine.*
computerhoy.com##.dfp-position
playnewserie.xyz##div[style][onclick*="anunciotag()"]
||receitasdalu.net/js/burn.min.js
cadenaser.com##.c-s > div:not([class]):first-child
natelinha.uol.com.br##.banner_conteudo
sbt.com.br##.notices-ads
receitanatureba.com##.natureba-lazyloadingads
geeknetic.es##.geekads
webarcondicionado.com.br##.axd-inner
webarcondicionado.com.br###enveloping
||verfutebol.tv/icons/160x600
buscape.com.br##div[class^="Hits_SponsoredWrapper__"]
brasilescola.uol.com.br##.publi-dir
brasilescola.uol.com.br##.corpoPubli
mundoeducacao.uol.com.br,brasilescola.uol.com.br##.area-publi
economia.ig.com.br##div[class^="maislidas"]
verfutebol.net,verfutebol.tv###superderbi
opopular.com.br###bannerMateriaAbertaMeiaPagina
r7.com##.toolkit-ad-shell
r7.com##div[id^="taboola-mid-article-category-"]
||radiopanamericana.com/images/*/BANNER_COM_
radiopanamericana.com##.module-publicidad
cuevana3.*##p[align="center"] > a[target="_blank"] > img
||animesonlineup.com/codigo_de_pop.js
canaistv.top###sticky-banner1
player.repelis24.rs##body > a[target="_blank"]
exame.com##div[class^="AdContainer-"]
exame.com##div[class^="Footer__FooterAnchorAd-"]
animesgratisbr.biz##.anuncios a:not([href^="https://discord.gg/"]) > img
||animesonlinep.com/img/superhentai_b.png
hugogloss.uol.com.br##.header-banner
hugogloss.uol.com.br##body .box-banner
hugogloss.uol.com.br##.cleverads
centraldeanime.biz##.adsContainer
centraldeanime.biz##iframe[data-src^="//ad.a-ads.com/"]
centraldeanime.biz##.right > .mbottom
mundotec.pro##.box.xx
mangacrab.com##.anunciofooter
estadao.com.br##div[class*="AdPlaceholder"]
zona-militar.com###custom_html-9
zona-militar.com##div[data-dest="placeholder"]
emais.estadao.com.br##.wrap-publicidade
ofuxico.com.br##.page-ad-wrapper
ofuxico.com.br##.banner-728x90-area
ofuxico.com.br##div[id^="page-ad-v-"]
ofuxico.com.br##div[id^="banner-300x"]
fazercurriculo.online,usandoapp.com,arnolds.com.br,guialocaliza.club##div[id^="adx"]
empregonews.online##div[id^="bloco"]
akumanimes.com##.Sright > .widgets > .akuma-widget
akumanimes.com##img[src^="/wp-content/uploads/ads/"]
elchapuzasinformatico.com##.bg-ad
||elchapuzasinformatico.com/wp-content/uploads/*/Sk1n-*.jpg
||elchapuzasinformatico.com/wp-content/uploads/*/B4nner-*.jpg
caracoltv.com,bluradio.com##.GoogleDfpAd-Float-Content
animesonehd.xyz###block-7
||noticiadesaude.club^$subdocument,domain=animesonehd.xyz
dicionarioinformal.com.br##div[style="height:322px;"]
somosche.com,dicionarioinformal.com.br##div[style="height:90px;"]
jovemnerd.com.br###Position_TopFixed
elpais.com.uy##.ads-under-header
autobild.es,computerhoy.com##div[class^="wrapper_roba_"]
||latino69.fun/nb/
observatoriodatv.uol.com.br##.LinguetaApple
formulatv.com##.pub-top
formulatv.com##.pub-mid
formulatv.com##.pub-btfm
universoformulas.com##span[style="font-size: 6pt"]
uol.com.br##.model-base-bnr
uol.com.br##.slot-m + #magazine-cover
uol.com.br##.bannersticky-wrapper.fixed
||futbolfullenvivo.com/logos/barnerfull.png
marca.com##.news-item ~ section.row-layout:empty
oantagonista.uol.com.br##.container_assine
okdiario.com##.ad-slot-ph
pelispedia-v2.wtf##.fg1 > a[target="_blank"].snd
jovempan.com.br##div[style="margin:10px auto; text-align:center"]
jovempan.com.br##div[style="margin: 0px auto 10px auto; text-align:center"]
||hentaila.ml/random.js
culturageek.com.ar##.g-dyn > p[align="center"] > a[data-track][target="_blank"] > img
vitoriadaconquistanoticias.com.br###webtivaFloating
vitoriadaconquistanoticias.com.br##.adcontainer
vitoriadaconquistanoticias.com.br##.bsac-float-center
hackstore.la,atomixhq.*##a[href^="https://startgaming.net/"]
atomtt.com##.ddl > ul > li.slide
||tcloudbase.com/access?
||pelistorrent.org/wp-content/uploads/*/pandabanner.png
blog.clarocombomais.com.br###block-10
cambio21.cl###fullpageadd
gamestorrents.fm##a[target="_blank"] > img[style="width: 100%;"]
olimpicos.marcaclaro.com##.banner-leader
lostiempos.com###takeover-desktop-counter
legiaodosherois.com.br##.bg-ad-wrapper
legiaodosherois.com.br##.widget--adsense
peru21.pe,diariocorreo.pe,gestion.pe,elcomercio.pe##div[class^="content_gpt_"]
dual1080p.blogspot.com##.sidebar #HTML5
dual1080p.blogspot.com##.sidebar #Image1
it-swarm-es.com##.adnet
||it-swarm-es.com/bnet/
otempo.com.br##div[id^="BTF_"]
letras2.com,simsvip.com.br,majesy.com,damelibros.com,androidaba.com,eusouandroid.co,tabletsesmartphones.org,vivo-tv.com,vivotvhd.com##.adsbygoogle
decorardicas.com.br,loucasporcabelos.com.br##.blue
decorardicas.com.br,loucasporcabelos.com.br##div[style*="width:100%;"][style*="background:#FFF;"][style*="overflow:"]
rd1.com.br##div[class^="code-block code-block-"][style^="margin: 8px"] > div[id^="Position_"]
oplanetatv.clickgratis.com.br##.-ads
oplanetatv.clickgratis.com.br##.block-ads-wrapper
oplanetatv.clickgratis.com.br##.ads:not(.prebid)
oplanetatv.clickgratis.com.br##.ads-block:not(.prebid)
comoacaba.com##.aawp
nexoscans.com##.text-left > br
nexoscans.com##.wp-manga.c-top-sidebar
nexoscans.com##.page-break > a[target="_blank"]
nexoscans.com##a[href^="https://www.amazon.com"] > img
nexoscans.com##center > a[target="_blank"]:not([href*="discord.gg"]) > img
nexoscans.com#?#.text-left > center:contains(/^Publicidade$/)
nexoscans.com#?#.page-break > center:contains(/^Publicidade$/)
nexoscans.com#?#.page-break > center:contains(/^Publicidade$/) + br
nexoscans.com#?#.page-break > center:contains(/^Publicidade$/) + div[id^="bg-ssp-"]
nexoscans.com#?#.c-top-sidebar  .row > .widget_custom_html:has(> .widget_text > .widget_text > .textwidget > *:is([id^="teaser"], .adsbygoogle, [id^="bg-ssp-"]))
yugenmangas.com##.site-header + .c-top-second-sidebar
mangapt.com,yugenmangas.com##.body-wrap > .c-bottom-sidebar
mangapt.com##.body-wrap > .c-top-second-sidebar
diariodenavarra.es##.sticky_horizontal
melhoresdestinos.com.br##div[class*="banner"]
escolakids.uol.com.br##.wrapper-bnr
preparaenem.com,escolakids.uol.com.br##div[class^="pub_"]
espornohd.com##.DvrCn
puraciudad.com.ar##div[class*="-pubadban"]
puraciudad.com.ar###sidebar-primary-sidebar > .primary-sidebar-widget
boainformacao.com.br##div[class*="sidebar"] .textwidget > p > a[href]:not([href*="boainformacao.com.br"]) > img
boainformacao.com.br##div[class*="sidebar"] .textwidget > p ~ a[href]:not([href*="boainformacao.com.br"]) > img
jornaldeitapetininga.com.br##div[id^="banner_"]
yapo.cl,ratingcero.com,ambito.com##.banner-container
tupornogratis.xxx##.lst_ft_bn
globo.com##div[id^="banner_home"]
globo.com###banner_vitrine_container
alfabeta.net###banner_flotante
alfabeta.net###flotante
alfabeta.net###home2
alfabeta.net##a.publimg
alfabeta.net##td.pieimg
ar.kairosweb.com##.spu-bg
ar.kairosweb.com##.spu-box
ar.kairosweb.com##.spu-content
||ar.kairosweb.com/wp-content/uploads/*.gif
ar.kairosweb.com##.banner-190
ar.kairosweb.com##.g-4
fisicalab.com##.adsense_div
fisicalab.com##.cContainerAd
fisicalab.com##.cAdLatContainer
fisicalab.com##.cAdResponsiveInsideCardContainer
comando.to##.entry-content center > a[rel="noopener"] > img
||comando.to/wp-content/uploads/*/video.js
rollingstone.com.co###elementor-popup-modal-31279
rollingstone.com.co##.elementor-location-header div.elementor-widget-slides
noticiasdenavarra.com,informacion.es,laopiniondemurcia.es##.commercial-up-full
nsctotal.com.br##.top-smad
nsctotal.com.br##.StyledDigitalPremiumAdWrapper
valorinveste.globo.com##.banner-fix-cls
bahia.ba##div[class^="publicidade-"]
bahia.ba##.chamada .g-single > a > img[src*="cloudfront.net/wp-content/uploads/"][src*="/BAN" i]
||cloudfront.net/wp-content/uploads/*/BAN-300X250PX-RETOMADA.gif$domain=bahia.ba
||cloudfront.net/wp-content/uploads/*/BANNER-NOVEMBRO-NEGRO-728X90PX.jpg$domain=bahia.ba
palcomp3.com.br,cifraclub.com.br##div[id^="pub-cc-"]
jc.ne10.uol.com.br##.desktop-banner
fiuxy2.com##center > p > a[target="_blank"] > img
pelisplus2.io##div[style] > a[target="_blank"] > img
||pelisplus2.io/d.png
||cantabrialiberal.com/banner/
superesportes.com.br##.se-publicidade-rasgado-1-container
superesportes.com.br##.se-publicidade-rasgado-1-top
||cuevana-3.wtf/wp-content/uploads/*/Sin-titulo-1.jpg
cuevana-3.wtf##.sidebar section.widget_block > a[target="_blank"] > img
oglobo.globo.com##[data-oglobo-advertising-format]
oglobo.globo.com##.block__subpane--esp-pub
elespanol.com##div[class^="article-inline"]
comandotorrent.tv##center > a[target*="_blank"] > img
pampaporno.com##.resumecard__banner
pampaporno.com##.abcnn_
||cloudfront.net^$domain=cuevana3.*|pelisplushd.net
||amazonaws.com^$domain=cuevana3.*|pelisplushd.net
tecnoblog.net###sidebanner_single
shock.co##div[class^="GoogleDfpAd-"]
elpais.com##.ad-giga
||cdn.acritica.net/upload/dn_banner
shmoop.com##.ff-dad
eluniverso.com##.feature-taboola
eluniverso.com##.table.pb-2.border
latercera.com##div[class^="spm |"]
aztecapornohd.xxx##.dvcss
aztecapornohd.xxx###videoss > section:not([class])
cronista.com##iframe[src^="https://ads01."]
cronista.com##iframe[vsmsrc^="https://ads01."]
cronista.com##.banner-sticky-wrapper
otempo.com.br##div.cf.slot-item.count-2.slot-count-20
otempo.com.br##div[id^="ATF_"]
||elsiglodetorreon.com.mx/desplegados/banners/
reforma.com##div[id^="zonapublicidad"]
jcconcursos.uol.com.br,contigo.uol.com.br,tycsports.com,tvpop.com.br,midiamax.uol.com.br##div[id^="banner-"]
atresplayer.com##.adpause
minha.exame.com##div[class^="AdContainer"]
arquitecturaydiseno.es##.header-megabanner > *
elperiodico.com#$?#.tp-modal:has(> div.tp-iframe-wrapper > iframe[id^="offer_"]) { display: none!important; }
elperiodico.com#$#.tp-backdrop { display: none!important; }
elperiodico.com#$#body { overflow: visible!important; }
clarin.com###b-main-footer-cerrar
ole.com.ar,clarin.com##.banner-border
clarin.com##.box-adv
mundodeportivo.com##.ads-sticky
lavanguardia.com,mundodeportivo.com##.module-box-ads
yapo.cl,migalhas.com.br##app-banner
migalhas.com.br##.topico__body > p > span > a[href^="https://s.migalhas.com.br/"]
losandes.com.ar,lavoz.com.ar###subscription-cta-body-bottom
losandes.com.ar,lavoz.com.ar###suscription-header
larazon.es##.content__ad
larazon.es###outbrain-id
gmconline.com.br##.banner-item
gmconline.com.br##.section-banner-topo
xchica.com##td[width="360"] > center
escolhasegura.com##.adsense
pobre.wtf,pobre.tv##.generalModal
pobre.tv##a[href^="https://btt-pt.toldmeroc.com/"]
||pobre.tv/images/bettilt-*.png
||landings.toldmeroc.com^$domain=pobre.tv
||pobre.tv/videos/BT.mp4$media,redirect=noop-0.1s.mp3
tecnoscann.com,mhscans.com,aiyumangascanlation.com,mangacrab.com,ahstudios.net,animerikosuper.blogspot.com,emperorscan.com,taurusfansub.com,miauscan.com,knightnoscanlation.com,pelisplaygratis.info###fixedban
pelisplaygratis.info##.mvic-btn > a.btn-successful
uol.com.br##.obx-ad
observatoriodatv.uol.com.br##.BannerUOLPlay__Container
||ubembed.com^$domain=muylinux.com
||elesquiu.com/u/banners/
elperiodico.com##.minHeightLong
elperiodico.com###contactPlan
elperiodico.com##.site-header__promos-conte
casaevideo.com.br##.preheader > .box-banner
tecmundo.com.br###listaMegaCurioso
stardeos.com##.at-addcontent
stardeos.com##.at-addthumbnail
stardeos.com##div[class^="left-menu_layout_adsense-"]
animeactua.com##.jeg_midbar
/apu.php?zoneid=$domain=pelisplus.so
pelisplus.so##body ~ iframe[style*="width:"][style*="opacity:"][style*="z-index:"][style*="position:"]:not([src])
futemax.gratis##.alertWS
ig.com.br##.ig-ad
ig.com.br##.betOrBillboard
ig.com.br##.container-publicidade-mrec1
jkhentai.net##.jk-300
infoescola.com##div[id^="index-banner300x250-"]
dodmagazine.es##.addbox
dodmagazine.es##a[href^="https://bit.ly/"].gofollow > img
dodmagazine.es##div[id^="_header_row-3-"][style="opacity: 1;"]
significadoes.com##.nr1
significadoes.com##.an1
significadoes.com##.an2
significadoes.com##.an3
||videoszoofilia.net/wp-content/uploads/*/banner$image
jornaldocarro.estadao.com.br##body div.post-horizontal-ad
tvprime.ig.com.br##div[class^="tvpri"]
uol.com.br##.cardAd
uol.com.br##.advertisementArea--showLabel
||baixartorrents.org/subs/popup.js
biologianet.com,portugues.com.br##.pub-left
preparaenem.com,portugues.com.br##.pub-300x250
portugues.com.br##.pub_insert_content
portugues.com.br##.publicidade-cima-container
gazetadopovo.com.br##.ads-fixed
estadao.com.br##.ajuste-banner
em.com.br##.ads-ancorads
sonovinhasbr.com##.lateral > aside[id^="custom_html-"]
seudinheiro.com##.single__footer-banner
seudinheiro.com##.banner-inArticle
moneytimes.com.br,seudinheiro.com##.cotbar__ad
actiludis.com##.publicidad_start_post
novinhasdozapzap.com##p > a[target="_blank"] > img:not([height^="6"])
||naoconto.com/wp-content/uploads/2021/09/CameraHot-
theyucatantimes.com,naoconto.com##img[width="300"][height="250"]
areah.com.br##div[class^="banner_footer"]
areah.com.br##div[id^="div-ad-"]
videosdesuavizinha.com##aside >div[id^="custom_html-"]
gamezfull.com##center > a[target="_blank"][href^="http"]:not([href^="https://www.gamezfull.com/"])
blizzboygames.net##div[class*="vc_btn3"] > a[href^="https://bit.ly/"][target="_blank"]
mulheresafoder.com###aumento
mulheresafoder.com###sexdate
discoverybrasil.com##.ads-light
||pernambuconoticias.com.br/wp-content/plugins/bravepopup-pro/*/brave.js
pernambuconoticias.com.br##div[class^="perna-conteudo"]
quizcovery.com.br##.adunitContainer
idescargar.com##div[class^="banner-descarga"]
||muacknet.ipower.com/blanco.php
gazetadopovo.com.br,umdoisesportes.com.br##.banner-topo
semprefamilia.com.br##.box-ads-header-home
semprefamilia.com.br##.banner-flying
catracalivre.com.br##div[id^="dmp-v-par"]
catracalivre.com.br##.continue-lendo ~ p
ahount.com##.site-content > div[style="height:300px"]
||ledgerwallet.com/affiliate/
ahount.com##.inside-right-sidebar > aside[id^="custom_html-"]
||plantaomaringa.com/fotos/anuncios
elpais.com###paywallOfferSmall
elpais.com###cta-button-container
adrenaline.com.br,ncultura.pt,animesdigital.org,wwwhatsnew.com,descargaseriestv.com,lifeder.com,elrellano.com,elintransigente.com,comando.la,remender.pe,noticiasautomotivas.com.br,idinheiro.com.br,diariodocomercio.com.br##body .code-block
g37.com.br,anitube.biz,otvfoco.com.br##div[class^="code-block code-block-"][style^="margin: 8px"]
bracontece.com.br##.testad
aeiou.pt,noticiast.com##div[style="margin: 8px 0; clear: both;"]
comidinhasdochef.com##.wrap-banner
heraldo.es###top_ads_container
worlwidestream.net##[id^="player"] ~ div[onclick*="remove"]
sportzonline.co###html1
vivoplay.sigue.la##div[class*="faux"]:not(.fauxborder-left):not(.fauxcolumns)
calcular.onlinegratis.tv##td[class="style6"][style="height: 53px"]
lawebdelprogramador.com##.publi_sky
naointendo.com.br##.Ad
||topflix.*/js/prot*.js
globo.com##.bstn-feed-ad
serpadres.es##div[id].henneoHB
calculadorasonline.com##div[class="Anuncio1"]
||i.imgur.com/MoMGEEA.png
serpadres.es##a[href^="https://www.marie-claire.es/"] > img
serpadres.es##div[class^="roba"]
noticiasaominuto.com##.pub-space
promobit.com.br##.card-banner
climatempo.com.br##.container > div[class="row"] > div[class="col-lg-4"] > div[class="_margin-t-20"]
larepublica.pe##.aside-ads-top
||pelispop.net/asset/*.min.js?*=*&
odia.ig.com.br##.vitrine-ofertas-odia
animeflv.net##div[style^="width:300px"][style*="height:600px"]
elcorreo.com##.aviso-inferior-trial
homepedia.com.br##.publicity-area
porno-japones.top##.happy-section
dicio.com.br##div[id^="gooad_palavra"]
folha.uol.com.br##.c-advertising__banner-area
stockrom.net##.theiaStickySidebar > #custom_html-16
stockrom.net##.stream-item-below-post > div[align="center"] > span[style="font-size: 10pt;"]
goyabu.com,animesvision.biz##.bf
||manjiroinflu.com^$domain=animesvision.biz
flatout.com.br##.gg-ad-home
baixaki.com.br##.ad-text-centered
baixaki.com.br##tr[id^="tr-ads_bxk_search_native-"]
||baixaki.com.br/parceiros/cross-promotion.htm
megacurioso.com.br##.ad-halfpage-placeholder
megacurioso.com.br##.ad-leaderboard-placeholder
ciudad.com.ar,oficinadanet.com.br##div[class^="banner-"]
concursosnobrasil.com.br##.label-publicidade
65ymas.com,motociclismo.es,elnacional.cat##.c-banner
galeriadaarquitetura.com.br###bannerheader
galeriadaarquitetura.com.br###publicidade-banner
definicionabc.com##.analisis > div[class^="abc-"]
ovaciondigital.com.uy,elpais.com.uy##div[class*="category-secondary-ad"]
elpais.com.uy##.editorial-ads
||lh*.googleusercontent.com/*/grantorrent.gif
odia.ig.com.br###taboola
hentaienesp.com###banner_float
hentaienesp.com###new_ads
softzone.es,movilzona.es,adslzone.net,oantagonista.com##.leaderboard
oantagonista.com##.banners_content_home
olx.com.br###top-main-content
eusaudavel.net##.banner + div.box
climatempo.com.br##.wrapper-banner
psicocode.com##img[width="336"][height="250"]
psicocode.com##img[width="336"][height="300"]
culturageek.com.ar###sidebar div.theiaStickySidebar
businessinsider.es##div[class^="mega__BackgroundAds-"]
metropoles.com##.m-banner-wrap
lawebdelprogramador.com##.publi_robapaginas
yugenmangas.com###teaser2
||tribunaavila.com/uploads/advertisings/
maxitorrent.com##.bgshadow
maxitorrent.com##.boxintersitial
soportugues.com.br,somatematica.com.br,sobiologia.com.br,sofisica.com.br,sohistoria.com.br,sogeografia.com.br,soq.com.br,soliteratura.com.br,pedagogia.com.br,sonutricao.com.br,solinguainglesa.com.br,soespanhol.com.br,soitaliano.com.br,sorusso.com.br,soxadrez.com.br,socontabilidade.com.br,soturismo.com.br###anuncioRodape
enmimaquinafunciona.com##.snippet-parragraph > a[style^="display: inline-block; float: left;"] > img
enmimaquinafunciona.com##div[style="display: flex; justify-content: center; align-items: center;"] > a
epocanegocios.globo.com##div[class^="container-adv"]
revistaquem.globo.com,epocanegocios.globo.com##.adv-item
epocanegocios.globo.com###pub-banner-audima
epocanegocios.globo.com###pub-shopping
acidadeon.com##.slb0
acidadeon.com###opec
ovaciondigital.com.uy,elpais.com.uy##.module1colAds
elpais.com.uy##.ads-container
es.charla.motor.narkive.com##div[onimpression="nk_playbuzz_impression"]
ordenador.online##div[class^="escomad"]
enmimaquinafunciona.com##.big-square-inline
enmimaquinafunciona.com##.intro-top
mundoeducacao.uol.com.br##.pb_inner_content
mundoeducacao.uol.com.br##div[style="height:250px; width:300px;"]
mundoeducacao.uol.com.br##.entry > div[style^="display: flex; align-items: center; justify-content: center;"]
mundoeducacao.uol.com.br##div[id^="area_flutuante_"]
brasilescola.uol.com.br##.br-grid-1-publicidade
natelinha.uol.com.br##[id^="banner"]
natelinha.uol.com.br##.arroba-texto
natelinha.uol.com.br##.publicidade-label
lanacion.com.ar##.--ads
lanacionar-la-nacion-ar-prod.cdn.arcpublishing.com,lanacion.com.ar##.mod-banner
||animefenix.com/script.js
hentai-asia.top##.player__happy-inside
||juegoscocinarpasteleria.org/wp-content/uploads/*/google-play-spoticatolico.png
oanhanguera.com.br##div[id-banner]
oanhanguera.com.br##div[rel="container_banner_meio_noticia"]
gamevicio.com##.slice-ad-footer
gamevicio.com##[class^="bgApbContent"]
forum.zwame.pt###adslot-side-mrec
forum.zwame.pt###adslot-top-lead
portal.zwame.pt##.theiaStickySidebar > #custom_html-2
elconfidencial.com##.revUnit--placeholder
scherzo.es,noticiasdatv.uol.com.br##.banner_wrapper
noticiasdatv.uol.com.br##div[id^="banner-300x250-"]
mrpiracy.top##center > a[class^="super-r-button"] > img
||mrpiracy.top/assets/refleczomrpiracy.gif
lasexta.com##.show-ads
||blog.facialix.com/wp-content/uploads/*/hostinger*.jpg
diariodelnorte.net,otvfoco.com.br,facialix.com##.ai_widget
legendas.co##[id^="publicidade_"]
correiobraziliense.com.br##.pub-hor
||webglobal.com.br/banner/$third-party
techtudo.com.br##.black_banner_prop_desk
lapoliticaonline.*###header-banner-wrapper
1001juegos.com##div[style="height:250px;width:100%;display:block"]
1001juegos.com##div[style="height: 250px; width: 100%; display: block;"]
1001juegos.com##div[style="height: 90px; width: 100%; display: block;"]
onepieceex.net##.banner-resposivo
tecmundo.com.br##p > a[href^="https://bit.ly/"][target="_blank"] > span > img
||img.ibxk.com.br/*/banner-*.png$domain=tecmundo.com.br
tuasaude.com,yugenmangas.org,yugenmangas.net.br,globo.com,eltiempo.com,gauchazh.clicrbs.com.br,hobbyconsolas.com,larepublica.pe,vozpopuli.com##.ad-container
vozpopuli.com##.home_1_ad
infobae.com##.d23-navbar-ad-container
infobae.com##.navbar-ad-container
conhecimentolivre.net##.inside-right-sidebar > #custom_html-2
downloadcursos.top##.inside-right-sidebar > #custom_html-4
downloadcursos.top##.inside-header > a[target="blank"] > img
audiotools.in###sidebar > #custom_html-6
folhabv.com.br,jornalnh.com.br##div[id^="pub"]
allfeeds.live###overlay
muyhistoria.es,marie-claire.es,miarevista.es,muynegociosyeconomia.es,serpadres.es,muyinteresante.es##.mega1
muyhistoria.es,marie-claire.es,miarevista.es,muynegociosyeconomia.es,serpadres.es,muyinteresante.es###roba1
muyhistoria.es,marie-claire.es,miarevista.es,muynegociosyeconomia.es,serpadres.es,muyinteresante.es###roba2
muyhistoria.es,marie-claire.es,miarevista.es,muynegociosyeconomia.es,serpadres.es,muyinteresante.es##.mega2
muyhistoria.es,marie-claire.es,miarevista.es,muynegociosyeconomia.es,serpadres.es,muyinteresante.es##.gallery--mega
muyhistoria.es,marie-claire.es,miarevista.es,muynegociosyeconomia.es,serpadres.es,muyinteresante.es##div[id^="mega2_"]
bibliatodo.com##.publicidad-topmenu
||voglioporno.com/nb.js
voglioporno.com###video-right
voglioporno.com###footer-iframe
20minutos.es##.axds > div.henneoHB
||vermangasporno.com/wp-content/cache/min/*/sdk/v*/p.js
vermangasporno.com##a[target="_blank"][rel="noopener noreferrer"] > img
vermangasporno.com###mainmain
||grantorrent.uno/wp-content/uploads/*/*300x104.png
soydemac.com##.post-content > p:empty::before
elheraldo.co##.pauta
elespanol.com##.comments-adv
elespanol.com##.article-body__adv
infomoney.com.br##div[class="container row border-t py-5 mt-5"]
marketplace.magazineluiza.com.br##.rock-convert-banner
||juegoscocinarpasteleria.org/wp-content/uploads/2020/10/google-play-spoticatolico.png$domain=applexgen.com
elcomercio.pe,peru21.pe##[data-ads-name]
espacioarcade.com###overlayVid
espacioarcade.com##div[class$="-game-ad"]
diariorp.com.br##.td-banner-wrap-full
/wp-content/uploads/angwp/*$domain=diariorp.com.br
elabueloeduca.com###pRectGA
enrt.eu##a[href^="https://ads.enrt.eu/"]
||bp.blogspot.com$image,domain=enrt.eu
independentespanol.com##.bnePEP
canalrural.com.br##div[class$="-anuncio-dfp"]
pdfslide.tips##div[class*="gg_ads"]
zonarutoppuden.com##.publibox
lacuarta.com##.lateralads
lacuarta.com##.centralads
noticialdia.com###widget_A
noticialdia.com##.widget_execphp
puraciudad.com.ar##.oxte-pubadban
puraciudad.com.ar##div[data-adid]
puraciudad.com.ar##.sidebar > div.widget_oxte
nsctotal.com.br##[class*="AdUnit"]
mundoconectado.com.br##.entry-content > center.mt-xlg.mb-xlg
||ijuinews.com.br/upload/banners/
ijuinews.com.br###fundo
ijuinews.com.br##.text-justify > p img[style="height:104px; width:500px"]
perfil.com##div[style^="width: 100%;"][style*="align-items: center;"]
clickhouse.xyz##div[style^="width:300px;height:250px;display: inline-block;"]
adrenaline.com.br##center.mb-4.mt-2 > small
adrenaline.com.br##.section__publicidade
tribunapr.uol.com.br##div[class^="ads"]
elotrolado.net##.anno
elotrolado.net##.dfp-queue
elotrolado.net##div.news-ad
mejortorrents1.*##iframe[src^="publi"]
||mejortorrents1.*/bannner_footer.php
||mejortorrents1.*/publi_*_*.php$subdocument
||grantorrent.nl/wp-content/*/atag.js
pplware.sapo.pt##div[id^="ws_widget__ad_"]
todopolicia.com##.samBannerUnit
/tghr.js$script,redirect=noop.js,domain=serieslatinoamerica.tv
||hentaistube.com/hentaistubepop.js
primedeportes.es###yuio
||primedeportes.es/lado.php
eldiario.es##body div.edi-advertising
eldiario.es##.news-sponsored-content
eldiario.es##.bbnx-module
forum.lfspro.net##iframe[id^="aswift_"]
bibliotecahispana.com##.sidebar > div[id^="custom_html-"]
mulheres18.com##a[href^="https://k.digital2cloud.com/"]
studylib.es##.above-content
studylib.es##.below-content
studylib.es##.sidebar-top-content
studylib.es##.sidebar-bottom-content
uol.com.br##.native-vitrine
mundotecnologias.com###el-02
numero.wiki##div[style="margin-top:.5em;min-height:312px"]
numero.wiki##.adorshop
uol.com.br##.moduloBanner
globaltvapp.net##.dmPhotoGalleryResp a[href="https://calentadores.shoptena.com/"]
television-envivo.com###publicidad-video
||frml.tv/rbw/?v=f$domain=formulatv.com
jornalvs.com.br,oglobo.globo.com,cifraclub.com##div[id^="pub-"]
||vermangasporno.com/wp-content/cache/min/*/static/adManager-*.js
||vermangasporno.com/wp-content/cache/min/*/sdk/v*/p-*.js
repelis.io###ads
ouvirmusica.com.br##.an-full
draft5.gg##div[class^="AdmUnit_"]
tuasaude.com###footerWidgets
tuasaude.com##.taboola-container
correiobraziliense.com.br##div[id^="cb-publicidade-"]
vandal.elespanol.com###publifooter
vandal.elespanol.com###publi400
zonamixs.com##.show-load-ad
/zubby.com\/[a-z-]+-\d+\/\?_=/$script,domain=zubby.com
zubby.com##.recommended-widget
zubby.com##.SsdAS2
uol.com.br##.shopping-produtos-uol
uol.com.br##.label-produtos
uol.com.br##.ecommerce-produtos-container
||hentaiporno.xxx/wp-content/plugins/modal-window/
preguntandroid.com,iteramos.com###bottom-bar-floating
||wp.com/*donghuanosekai.com/wp-content/uploads/*/anuncia-aqui-0.png$domain=donghuanosekai.com
auto10.com##.ad-boton-full-mega
||fadadosexo.com/wp-content/themes/fadadosexo-responsivo/banners/
fadadosexo.com###publicidade-invideo
fadadosexo.com##.links-legais
fadadosexo.com##.parceiros
fadadosexo.com##div[id^="scroller"]
tusubtitulo.com##div[class^="contenedorAdcentrado"]
||connatix.com^$domain=tusubtitulo.com
mrpiracy.top##a[class^="reserve-button"][target="_blank"] > img
||mrpiracy.top/images/imagec1.gif
mangamovil.net##.publi_arriba
jkhentai.net,tuhentaionline.com,mangamovil.net###banner_deslizante
||mangamovil.net/publi/
d.arede.info##div[id^="publicidade-"]
d.arede.info##.cont-publicidade-cat
d.arede.info##.container-autosImoveis
d.arede.info##.container-editoria-maisLidas
d.arede.info##article[class$="-pub"]
d.arede.info##.container-post-pub-comentarios
d.arede.info##[class^="container-publicidade"]
d.arede.info##div[class^="publicidade-"]
d.arede.info##.topo-banner
||d.arede.info/themes/*/img/FundoTopBanner.jpg
||goku.mx/wp-content/plugins/all-click/public/js/allclick-functions.js
||hentaila.com/files/functions.js
puraciudad.com.ar##.hlymgdwv
puraciudad.com.ar##.widget_hlymgdwv
animefenix.com###radioisekai
meucarronovo.com.br##[class^="container banner"]
kbb.com.br##div[data-adloc-par="1"]
buscape.com.br##div[class^="Advertisement"]
||giromarilia.com.br/img/banner/
animeflv.net##div[style="width:300px;height:600px"]
animeflv.net##div[style="width:728px;height:90px"]
||animeflv.net/assets/animeflv/img/triviataku.jpg
nestoria.com.br###afscontent2
tudogostoso.com.br##.showcase-box[data-iab-tag^="content_mpu"]
preguntandroid.com,iteramos.com,enmimaquinafunciona.com##.intro-top > .mh-280
||pornolandia.xxx/static/player/preroll.js
pcprogramasymas.net##a[href][target="_blank"] > img
nightlifeporn.com##.close-text
||nightlifeporn.com/restless-frost-
||morritastube.xxx/iframe.php
morritastube.xxx##.mt_ad
cabezanews.com##.tw-ads
irmaosdotados.net##body > iframe[class][style^="border:"][style*="z-index:"]:not([src])
lun.com##div[style="top:-1px;width:33%;float:left; vertical-align:top;"]
hentaiporno.xxx###text-19
||hentaiporno.xxx/wp-content/uploads/*/*_video.mp4.mp4$media,redirect=noop-1s.mp4
muacknet.ipower.com###cse-search-box + iframe[src]
muacknet.ipower.com###pie
||muacknet.ipower.com/blanco.png
canarias7.es##.voc-sponsored-related
dinheirovivo.pt,tsf.pt,dn.pt##.mrec-status
descargaspcpro.net###stickyb
||baladain.com.br/wp-content/uploads/*/banner-
baladain.com.br##.bn-header__banner-item
baladain.com.br##.bn-Flutuante
||setelagoas.com.br/images/banners/
acritica.net,folhadoslagos.com##.squareBanner
folhadoslagos.com##.supperBanner
folhadoslagos.com##.billboardBanner
folhadoslagos.com##.container_16 > .billboardBanner + .clear + .spacer60
||cdn.folhadoslagos.com/upload/dn_banner/
boadiversao.com.br##.publicidade-bd
ofuxico.com.br###sidebar > .rel-news
nationalgeographic.com.es,cuerpomente.com,clara.es##.add990x90
globo.com##.container-adv
psicologiaymente.com##body .banner-module
psicologiaymente.com##.facebook-ads-square
||wp.com/diariodoestadogo.com.br/wp-content/uploads/*/banner300x600.gif$domain=diariodoestadogo.com.br
||verepeliculas.com/dowload/MusicaBANNER.gif
verepeliculas.com##div[class^="ano_"]
verepeliculas.com##.textb
mtlnovel.com##amp-iframe[src^="https://ads.mtlnovel.com/"]
nartag.com,fenixscan.com##.body-wrap > div.c-sidebar.wp-manga
||animetw.net/js/atag.js
noticiasaominuto.com,noticiasaominuto.com.br##.pub-container
trendencias.com,vidaextra.com##.sticky-sidebar-container .m-desvio-ecommerce
tuhentaionline.com###clck_ntv
tuhentaionline.com###nuevo_publi
||tuhentaionline.com/publi/
tuhentaionline.com##iframe[src^="https://www.tuhentaionline.com/publi/"]
wikicharlie.cl###mw-panel > .advertisements
forodecostarica.com##div[class^="contenedorPublicidad"]
tn.com.ar##div[id^="parent-arcAds-"]
letras.com,letras.mus.br##.cnt-space-top
jornalvs.com.br,cifraclub.com.br,letras.com,letras.mus.br##div[id^="pub_"]
mangatigre.com##.chapter-content > div.bottom-bloc
hipertextual.com##.wrapperBanner
||cdn.romanews.com.br/upload/dn_banner/
||app.upee.online/ad/
criptonizando.com##.adupee
formulatv.com##.col-anu
zdescargas.org##center > a[href][target="_blank"]
gazetadopovo.com.br##div[class^="box-ads-header"]
emedemujer.com##.box-intext-ad
||thepiratefilmestorrent.uk/random.js
tecmundo.com.br##.tec--ad
lectulandia.*###rightPromo
lectulandia.*##.perfbtns2
lectulandia.*##.bloky > a > img
canalporno.com##.publis-bottom
canalporno.com##div[class^="right-player-"]
verpornocomic.com###sidebar > #custom_html-2
verpornocomic.com##iframe[src^="https://a.adtng.com/"]
chochox.com##.adsGeek
||chochox.com/wp-content/uploads/*/RealPornStar.$media
||chochox.com/wp-content/uploads/*/ProjectQTCandleGirl.$media
||chochox.com/wp-content/uploads/*/BootyFarmHarley.$media
||taxofcnym.com.ar/wp-content/cache/*/plus/bg.htm
taxofcnym.com.ar##.wallpaper
animesvision.biz###sidebar > .discord-image > center > a[href^="https://bit.ly/"][target="_blank"] > img
animesvision.biz###main-content > div[style^="margin-bottom:"] > a[href^="https://bit.ly/"][target="_blank"] > img
seriesanimadas.org##a[href^="https://ladsanz.com/"]
pastepvp.org##center > div.separator
awdescargas.com###generic-btn-premium
diariorp.com.br,folhaonline.es,correiodeitapetininga.com.br##div[class^="angwp_"]
||correiodeitapetininga.com.br/site/wp-content/uploads/*/banner-
maxmodapk.com,moddescargar.com##.ad-wap
animeblix.com##iframe[data-glx][style*="z-index"]
lasexta.com##.mod-ligatus
lasexta.com##.mod-ad-middle
lasexta.com,europafm.com##.publi_horizontal
lasexta.com##.sticky-wrap-publi
lasexta.com##aside[class^="mod-ad-top"]
pasfox.com##.adversiment
||allguiderecipes.info^$domain=mangatigre.com
flatout.com.br###penci_custom_html-4
dplay.es##div[class^="controls-"] > div[class^="outer-"] > div[class^="slot-"]
administradores.com.br##.tobecontinuedBlock
administradores.com.br##.fixed-banner
jornalznorte.com.br##.faixa-banner .columns > a[href][target="_blank"] > img
jornalznorte.com.br##.columns.medium-4 > .text-center > a[href][target="_blank"] > img
superhq.net##.shq-ads
olx.com.br###adsense-slot
ibtimes.com.br,tecnoblog.net###fullbanner
tecnoblog.net###sidebanner
tecnoblog.net###portalfullblock-desktop
||tm.jsuol.com.br/uoltm.js$domain=uol.com.br
/images/banners/*$domain=aurora-israel.co.il|globalasia.es|mariosegura.com|toxico-pc.com|net-empregos.com|b92.net|expressodaspraias.com.br
dragonbounbd.foroactivo.com##div[style*="height:90px"][style*="min-width: 728px"]
expressodaspraias.com.br##.flexbannergroup
||fcporto.ws/scripts/interstitial.js
formulatv.com##p[class="isec i-news"]
mitele.es##div[class^="coreCarousel__advertisementBox-"]
vogue.globo.com###box-globomais
expatsportugal.com##.wpforo-ad
||repelisgt.net/propelloders.js
||repelisgt.net/srv-pv/tag-
pcbolsa.com###ContenidoPubliCotizax
||slinkway.com^$domain=pcbolsa.com
||aviacionline.com/wp-content/uploads/*/banner_letsfly_
||aviacionline.com/wp-content/uploads/*/Shell-Banner-
saberprogramas.com##.widget_et_ads
||catve.com/portal/img/parceiros/
||catve.akamaized.net/portal/img/parceiros/
||catve.com/*/assets/img/parceiros/
catve.com##.label_publicidade
||thepiratefilmes.ml/random.js
||thepiratefilmes.ml/sandbox.js
metropoles.com,20minutos.es##.OUTBRAIN
20minutos.es##.axds-lane
minutouno.com##.banner[data-banner-size]
correiobraziliense.com.br##small[class="hidden-print txt-no-serif"]
em.com.br,correiobraziliense.com.br##.ads__with-bg
gazetadopovo.com.br##.c-ads
||animeshouse.biz/asset/sostress.js
||bludv.uk/random.js
||bludv.uk/sandbox.js
/images/banner/*$domain=laverdad.com|visaonoticias.com
visaonoticias.com##a[href^="link.php?id="]
||anitube.uk/random.js
anicchan.net##.paineld > a.pp
||anicchan.net/player/plugins/vast/v/*/vast.js
tunovelaligera.com##.sidebar-col #text-72
tunovelaligera.com##.sidebar-col #text-74
tunovelaligera.com##.sidebar-col #text-76
forowarez.net##.p-body-pageContent > center > a[target="_blank"] > img
||i.imgur.com/W3ihSRi.png
naoconto.com##a[href^="https://loboclick.com/"]
naoconto.com##a[rel="nofollow noopener"] > img
dvdgayonline.com###clickfakeplayer
dvdgayonline.com##.asgdc
dvdgayonline.com##.custom-html-widget > a[rel="noopener noreferrer"] > img
pornocarioca.com##.list > #postnativesingle
xnalgas.com##.container > .native
xnalgas.com##.sectionWrapper > .container > .media.sidebar.visible-lg
adslayuda.com##body ins.adsbygoogle
download3k.es###dl_google_1
followmanga.com##.jumbotron
niusdiario.es##div[class^="cards__card_ad-"]
shopping.uol.com.br##.tp-sponsored.tp-offer
hentaila.com##iframe[src^="//ads2.contentabc.com/"]
isladejuegos.es###bannerLeaderboardTop
isladejuegos.es##div[id^="bannerAdmeen"]
isladejuegos.es##div[id^="bannerGameSkyscraper"]
isladejuegos.es###bannerAdmeenRectangleTopContainer
||isladejuegos.es/bfb/game_*.php$subdocument
playpaste.com##a[href^="https://track.wg-aff.com/"]
paisdelosjuegos.es,paisdelosjuegos.com.pe##div[class*="advertisement-"]
juegosdechicas.com,juegos.com##.game-page-sidebar
cdiscount.com##div[class^="regBloc"]
1001juegos.com##.MuiGrid-container > div.MuiGrid-item > div.HalfPage > div[style="min-height: 250px;"]
jumpmanclubbrasil.com.br###ads-blog-content
jumpmanclubbrasil.com.br##a[href^="http://www.geragera.com.br/?ref="]
jumpmanclubbrasil.com.br##a[href^="http://www.hipercontas.com.br/bit-share.php?id="]
holanime.com##div[class^="glx-slider-container-"][style*="z-index:"]
juegos.games##.Ad-Under-Game
juegos.games##aside[id^="adace_ads_widget-"]
||eliteacompanhantes.com.br/bnr/
||anunciogp.clubmodel.com.br/banner_cliente_iframe.php
1v.to##.enlace_descarga
libertaddigital.com,libremercado.com###mega-atf
ole.com.ar###homeBannerSchneider
/\/img\/(160600|72890)\.png/$domain=iptvnow.top
||engeplus.com.br/anuncios/
engeplus.com.br##.break-com-texto
lanacion.com.ar##div[class^="content-bnhoy"]
ultimasnoticias.com.ve##div[class^="ultim-"]
ultimasnoticias.com.ve##.ultim-adlabel + a[rel="nofollow"]
elmundo.es##.ue-c-ad--sticky
lanacion.com.ar###bn-lateral
lanacion.com.ar##.temas > div.titulares-del-dia
||fakings.com/images/revive/pepeporn/
tv.fakings.com##.separabot2 > .centrado
tv.fakings.com###banners_footer
minhasdelicias.com##.TextAnuncio
gnula.co##.buttons-p
terra.com.br###advRuller2--wrapper
luchaonline.com##.Anuncios
13.cl##.center-banner
online-dvdrip.com##.mvic-btn > a.btn-successful[target="_blank"]
||hoy21.com^$domain=animeflv.net
repelisplus.vip###adxx
||descargaranimehentai.com/unrmnewzpt.php
||goyabu.uk/random.js
cifraclub.com.br##.floatingBottomAd
elnuevodia.com##div[class^="advertising"]
elnuevodia.com##.highlight-box-header-partner
elnuevodia.com##.highlight-box-header-partner + div.tabs-gold
revistamonet.globo.com##.middle-banner
globo.com##li[data-item-type="advertising"]
||wp.com/afiliados.hostgator.com.br^$domain=neemias.info
||magazinevoce.com.br/js/banner.js
||magazinevoce.com.br/neemiasinfo/banner^$domain=neemias.info
neemias.info##.widget_themoneytizer_widget
neemias.info###text-7
sexomoda.com##iframe[src^="https://adserver.juicyads.com/"]
||lcgsr.seuseriado.com/js/
seuseriado.com##.itfbppl_overlay
||harpiacode.com/gen.php
viajenaviagem.com##.block.kayak
uol.com.br###responsive-vitrine-publicidade-vitrine-1
downloadcursos.net###wrapper > center > div[class] > div[class] > a[target*="_blank"] > img
moneytimes.com.br##.ad-banner-inarticle
||static.chapeco.org/banners/
odia.ig.com.br##.billboard_2
abc.es##.publi-articulo
abc.es##.creatividad
r7.com##.r7-flex-adv__placeholder
||descargaonline.xyz/ads$domain=subdivx.com
||diariodoiguacu.com.br/static/img/anuncios/
diariodoiguacu.com.br###my_popup_wrapper
diariodoiguacu.com.br###my_popup_background
playpaste.com##.row > div.justify-content-center > a[target="_blank"] > img
andro4all.com##.ad_featured
||ivpaste.com/*/ads_down_captcha.png
||ivpaste.com/*/pub-install_captcha.php
file4go.com,file4go.net##.banner300b
file4go.net###conteudo_download > .lateral
||tuhentaionline.com/qysfqwtqvcdg.php
||insurances.tips/insurances.html
||libros4.com/randomadm.php
||bit.ly^$subdocument,domain=libros4.com
canalbpv.com##.td-header-sp-recs
dade68.com##img[class^="responsive_ads_"]
||futebolatino.lance.com.br/wp-content/uploads/Banner-
aulafacil.com##.af-adsense
futebolatino.lance.com.br##div[class*="mpp-container-position-middle-"]
tudogostoso.com.br##.home-taboola
racingdealma.com.ar##.racin-widget
||wp.com/www.racingdealma.com.ar/wp-content/uploads/*/banner
||dade68.com/imgc/center/c_10.gif
heavenmanga.com##iframe[src="http://inkanime.com/taboola.php"]
superflix.net##aside.widget-area > #custom_html-16
||sdks.shopifycdn.com^$domain=superflix.net
mastercuriosidadesbr.com##.conteudo[id^="adx"]
||ticotimes.net/*/*Banner*
ticotimes.net##a[href^="https://ticotimes.net/linkout/"]
recetasviaje.com,recetascuriosas.com,cocinarporelmundo.com,cocinaconlupita.com,worldrecipesu.com,planetaneperiano.com,chefac.com,recipesandcooker.com,fashioncomplements.com,recipeski.com,cyclingrute.com,recipesnk.com,motornk.com,worldmangas.com,mangalong.com,mistermanga.com,anitoc.com,enginepassion.com,mangaready.com,otakuteca.com##.pbl
lavoz.com.ar##.bloque-ads
lavoz.com.ar##.block-banner
pivigames.blog##a[href="https://pivigames.blog/descargar.php"]
pelis24tv.co###custom_html-26
mercadolivre.com.br##.menu-myml-ads
enrt.eu##.banner-inner
enrt.eu###link-view  > a[href][rel="nofollow"] > img
tioanime.com##.sidebar .banner
mwpaste.com##.tab_content > p[style="text-align: center;"] > a.button
lagacetadesalamanca.es###slider-oferplan
tsf.pt##.t-a-pub-1
tsf.pt##.t-pubbox-mrec-1
tsf.pt##.t-pubbox-bb-1
||series24.to/realtime/*.js?_=
||cdn.inkabet.pe/*/default/*_banner_*
verpeliculasultra.com##.fstory-rating-left > a[rel="nofollow"]
||t.co^$domain=pelis28.tv
vidcorn.tv##a[href^="/play/"]
peliculaswarez.net###this-pays-for-bandwidth-container-hor
||blizzboygames.net/iframe.html
||blizzpaste.com/Download-Servidores$image
||fc.lc/CustomTheme/img/refb728.png
megawarez.org##.post-content > div[style=" margin:12px; text-align:center"] > a[rel="nofollow"]
supertelevisionhd.com##div[id="anuncio"]
||peliculas-dvdrip.com/wp-content/uploads/*descargar$image
peliculas-dvdrip.com##.posts a[href*="/offer?"]
mangatigre.net,fiuxy2.com,mega-mkv.com##center > a[target="_blank"] > img
mkv-paste.com##p[style="text-align: center;"] > a[rel="noopener"] > img
clubedohardware.com.br##.ipsModal
clubedohardware.com.br##.ipsDialog_narrow
doramashd.com##.contentt
||blogspot.com/*/cerrar.gif$domain=doramashd.com
soy502.com###fixed_ads
gamesfull.org##.TpRwCont > aside > div.widget_text
gamesfull.org##.TpRwCont > aside > div.ai_widget
pastesgamesfull.org##a[href^="//mellowads.com/"]
pivigames.blog##.gp-sidebar > #text-7
pivigames.blog##.theiaStickySidebar > #text-7
pivigames.blog##.gp-sidebar > #html_javascript_adder-3
pivigames.blog##.theiaStickySidebar > #html_javascript_adder-3
zonammorpg.com##body > a[href*="?af_id="][target="_blank"][style^="z-index:"]
||zonammorpg.com/wp-content/uploads/*/enefonmay12.jpg
calistenia.net##.entry-content > div[style^="float: none;"] > a[href][target="_blank"] > img
tabonitobrasil.video##a[href^="https://bit.ly/"] > img
estadao.com.br##.row-media-lab
nsctotal.com.br##.StyledAdWrapper
cablegratis.tv###firstClick
||cablegratis.tv/js/firstclick.js
fullpeliculashd.me##.btnpubli
zerozero.pt##.pubframe
mg.superesportes.com.br##.hidden-xs > .showcase.no-negative-xs
||domainpctn.pctnew.com/*/ad/*/*.js
g1novelas.online,g1novelas.org##center > a[href^="https://bit.ly/"][rel="noopener"] > img
librosgratisxd.com##center > a[href^="https://tinyurl.com/"] > img
||peruanazotv.com/publi/
install.lctutors.com.br##.e3lan-top > a[href][target="_blank"] > img
||install.lctutors.com.br/wp-content/uploads/*/PohFHt_Q.png
||d30p9ca83oqyng.cloudfront.net/defesanet/site/upload/banners/
em.com.br##.container > small[class="txt-no-serif hidden-print"]
infojobs.com.br##.advisor-promo-banners
infojobs.com.br##.headerSEO
infojobs.com.br##.publicity
estadao.com.br##article[class^="destaque-default -patrocinado"]
anbariloche.com.ar##.contenedor_banner_popup
oantagonista.com##.container-banner-single
gazetadopovo.com.br##.c-publi
correiodopovo.com.br##.adsplaceholder
correiodopovo.com.br##p[style="color: #dddddd; font-size: .6em; margin-bottom: 0px; text-transform: uppercase;"]
doramasmp4.com##body > a[href^="https://bit.ly/"][target="_blank"][id]
expansion.mx##.GoogleDfpAd-wrap
expansion.mx##.ArticlePage-stickyAd
coisosonthego.com##.rodape-afiliados
solitarios-online.com###leftpane
solitarios-online.com###rightpane
otempo.com.br###seminovossuper
publico.pt##.stack__ads
/img/publicity/*$domain=portaldacidade.com
||portaldacidade.com/banner
portaldacidade.com##.popup
3djuegos.com###dst_pub_728
bhaz.com.br##.theiaStickySidebar > div[id^="bdaia-widget-e3-"]
||static-cdn.pokyun.tv/ad/animesync/async-player-vast-*.xml
r7.com##.single-trend-island
r7.com##.banner_publicidade_trends
gauchazh.clicrbs.com.br##.m-advertising
nerdmaldito.com##.widget-content .adsbygoogle ~ a[href^="http://bit.ly/"][target="_blank"] > img
nerdmaldito.com##.widget-content .adsbygoogle ~ a[href^="https://amzn.to/"][target="_blank"] > img
diariodepernambuco.com.br##.publicity__bx
||imgur.com/*.gif$image,domain=vitoriadaconquistanoticias.com.br
espaebook.org##a.descarga_href_big
vitoriadaconquistanoticias.com.br##.post-header > a > img[src*="imgur.com/"]
vitoriadaconquistanoticias.com.br##.post-header > br
vitoriadaconquistanoticias.com.br##.single-container > div[align="center"] > div#wrapper
daemonanime.net,vitoriadaconquistanoticias.com.br###custom_html-5
genshinpro.com.br,jav-asia.top,universoformulas.com,daemon-hentai.com,mundodebolso.me,publico.es,vitoriadaconquistanoticias.com.br###custom_html-4
em.com.br##.container > small[class="hidden-print txt-no-serif"]
torrentrapid.com,tvsinpagar.com,descargas2020.com##.pub728x90
anbariloche.com.ar##.zona_banners
visioncloud.ga##.table-grids > div[id][style="width:728px;height:90px;"]:empty
visioncloud.ga##.table-grids > div[id][style="width:336px;height:280px;"]:empty
visioncloud.ga##div[align="center"] > [id][style="width:970px;height:250px;"]
||otempo.com.br/rest-services/ads-service
otempo.com.br##.publicidade-article
otempo.com.br##div[id^="ads-"]
foros.3dgames.com.ar###posts > li.postcontainer[id^="yui-gen"]
as.com##.publi-vertical
as.com##.slider-producto
seriesdonghua.com,mundodonghua.com##.info-player > .banner-blue
tudotv.tv##.ParceirosLink
tecmundo.com.br###ads-square
significadoswords.com###divBotaoDownload + div[id][style^="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: black; opacity: 0.8;"]
||pornozinhostorrent.com/rec.js
||tufos.com.br^$popup,domain=anitubebr.biz|anitube.info
||playcinenews.info/600novo.php
||playcinenews.info/300novo.php
masbeneficios.life##.theiaStickySidebar > aside[id="text-2"]
allsoftwarefull.com###header-banner468
diolinux.com.br##.widget-content > a[href$="&utm_content=bannersite"] > img
diolinux.com.br###sidebar > .widget > .widget-content > a[href^="https://bit.ly/"] > img
sayrodigital.com##a[href^="https://www.deltafinanceiro.com.br/aff.php"]
brupload.net###content > center > a[href][target="_blank"] > img
||baixarturbo.com/downloadbanner.png
sogatinhas.net,g1novelas.org###ads-foda-fx
bestfilmeshd.com,g1novelas.org##a[href^="https://goo.gl/"][rel="nofollow"] > img
g1novelas.org##a[href^="javascript:void(centerpopup('https://bit.ly/"][rel="nofollow"]
g1novelas.org##a[href^="javascript:void(centerpopup('https://goo.gl/"][rel="nofollow"]
||intoxianime.ml/big.php
||intoxianime.ml/rand2.php
||intoxianime.ml/300.php
16valvulas.com.ar##.sidebar-content > div[id^="text-"]
oglobo.globo.com##.teaser__submodule
oglobo.globo.com##.block__subpane--advertising
oglobo.globo.com##.block--advertising
extra.globo.com##div[data-notice="Publicidade"]
gratisprogramas.co##center > p > a[href][target="_blank"] > img
catracalivre.com.br##.bloco-anuncios
gazetadopovo.com.br##.especial-patrocinado
||andaluciainformacion.es/*banner
||proxytools.us^$popup,domain=urlcloud.es
||profesionalreview.com/wp-content/uploads/*/skin*PR
cdn.chatytvgratis.net,vagos.es,vergol.com###interVeil
cdn.chatytvgratis.net,vergol.com###interContainer
||vergol.com/live/interstitial.js
||vergol.com/vergol.php
||bludvfilmes.com/barra.php
torrentrapid.com##div[style="float:left;width:620px;height:250px;margin:auto;"]
||subdo.torrentrapid.com^
||pornolandia.xxx/webmaster/videoroll^
pornolandia.xxx##.ad-bodyvideo
elespanol.com##.container > .homeNormalNoMobile
elespanol.com##.container div[id^="homeMPU"]
elespanol.com###homeBillboard
torrentdosfilmeshd.net##a[href^="http://www.tradeadexchange.com/"]
allsoftwarefull.com##.post-outer > div[style]:not([class]):not([id]) a
allsoftwarefull.com###inPopUp
allsoftwarefull.com###framePopUp
anitube.info,anitubebr.biz##iframe[width="300px"][height="250px"]
anitube.info,anitubebr.biz##iframe[width="970px"][height="250px"]
apurogol.net##.entry :not(#player) iframe:not([src])
xrivonet.info##span[style="font-weight:bold;"]
xrivonet.info##span[style="font-weight: bold;"]
jaffmisshwedd.com###contenedor
vertelevision.tv###capa2
||vercanalestv1.com/publimia.html
||vertelevision.tv/reproad300.html
||teleriumads-x64zcsqq.netdna-ssl.com/livestreaming.html
||fgnoticias.ml/728.php
||fgnoticias.ml/300C.php
||fgnoticias.ml/big2.php
atresplayer.com##main[class] > div > aside.s1ksqqi8-2
||torrentdosfilmeshd.ga/random.js
torrentdosfilmeshd.net###dm_topbar
animesvision.net##.area_conteudo_news_fala > div[align="center"] > div[id][style="width: 336px; height: 280px;"]
animesvision.net###area_conteudo_secoes > .paginador_numerico_A > div[align="center"] > div[id][style="width: 336px; height: 280px;"]
jkanime.net##.side-300
europapress.es###SMNativeMainContainer
jn.pt,dn.pt##.tg-adhesion-bar
meutimao.com.br##.banner_triplo
meutimao.com.br##.arroba_banner_sidebar
meutimao.com.br##.half_page_banner
meutimao.com.br##.publicidade_300x250
meutimao.com.br##.adsense_colado
meutimao.com.br##.publicidade_970x90
file4go.net,file4go.biz##body > #divbox[style^="position:"]
file4go.net,file4go.biz##body > #divmodal[style^="position:"]
peruanazotv.com,vercanalestv1.com,tv-onlinehd.com###capa1
peruanazotv.com,vercanalestv1.com,tv-onlinehd.com###closeX1
||tv-onlinehd.com/publi/publi
||tv-onlinehd.com/publi/cerrar
dn.pt##.t-pubbox-ct-1
||videoszoofiliahd.com/embed/bit.js
compucalitv.com###text-11
compucalitv.com##a[href^="https://goo.gl"] > img
/qvncc.tvcanales.cf\/js\/[_-a-zA-Z0-9]{5,}.js/$domain=tvcanales.cf
publico.es,noticiasautomotivas.com.br,mundodebolso.me,segredosdomundo.r7.com,blogdoiphone.com###custom_html-6
genshinpro.com.br,noticiasautomotivas.com.br###custom_html-7
blogdoiphone.com###text-html-widget-15
medianetto.com##.toppic > a[target="_blank"]
superanimes.site##.adsInfo
superanimes.site##.adsLateral
||superanimes.site/img/300x300.gif
zonasports.es##div[id^="M"][id*="ScriptRoot"]
zonasports.es##a[href^="http://www.hibids10.com"]
zonasports.es###headlineatas
kbb.sapo.pt##div[id^="pubText_"]
kbb.sapo.pt##.pubTextInfo
conmishijos.com###sidebar > [class="widget"][style="min-height:250px; text-align: center;"]
trendenciashombre.com,bebesymas.com##.ad-cen
trendenciashombre.com,bebesymas.com##div[class^="ad ad-lat"]
dn.pt##div[class^="t-modsys-pub"]
anitube.info,anitubebr.biz##.well.z-body
dvdgayonline.com##.content > .load_modules
yoututosjeff.es###HTML3
||abril.lojaabril.com^*/abrilcom/$third-party
redecanais.info,redecanais.link###yb_mm
redecanais.info,redecanais.link###yb_bb
tvsinpagar.com##.pub300x250
torrentrapid.com,tvsinpagar.com##.gray[style="width:100%;height:98px;"]
tvsinpagar.com##div[style="float:left;width:100%;height:90px;"]
tvsinpagar.com##div[style="float:left;width:100%;height:100px;"]
tvsinpagar.com##div[style="width:620px;height:250px;margin:20px auto;"]
exabytetv.info###flyingBottomAd
imperiodefamosas.com###fg_popup
imperiodefamosas.com###photos > a[rel="nofollow"]
||fuegodevida.com/webmasters/*.php$third-party
imperiodefamosas.com###publi2
androidaba.com##a[href*="goo.gl"] > img
androidaba.com###widget_sp_image-2
seriesgato.tv##a[href^="https://ocio.leadzutw.com/"]
seriesgato.tv##.TPlayerNv > .Button.STPb[data-tplayernv="Opt0"]
torrentrapid.com##.box-publi-left
megapastes.com##div[align="center"] > div > [style="position:relative; width:280px; height:95px; border:none !important; background:none; margin:auto; clear:both;"]
peliculas-mp4.com##.post > div[align="center"] > div
raulprietofernandez.net,elinformador.com.co,setelagoas.com.br,parasitipedia.net##.bannergroup
globo.com##iframe[src^="/dinamico/get_oas_advertisement/?"]
oglobo.globo.com##.publicidade
animeskai.com##.row-ads
animeskai.com##a[href^="https://goo.gl/"][rel="noopener"] > img
||h1.otpokemon.com/images/banners/v1.gif
verpeliculasenlatino.com##.pfake
verpeliculasenlatino.com##.adsmovie
verpeliculasenlatino.com##div[align="center"] > #player2
verpeliculasenlatino.com##a[href="javascript:void(0);"][onclick^="window.open('http://bit.ly/"][rel="nofollow"]
seucinema.net##a[href^="https://goo.gl"]
tudotv.tv,seucinema.net##body > iframe[src="about:blank"]
winphonemetro.com##.sidebar > #fixed_bar
||mediaserver.emol.cl/au_creatives_au_elements/elements^
emol.com##a[href*="trk_cid"]
androidescomplicado.blogspot.com###ads-top
androidescomplicado.blogspot.com###ads-home
androidescomplicado.blogspot.com###ads-title
publico.pt##.ad-slot
cinemaniahdd.com,solowarez.org##a[href^="//mellowads.com"]
economia3.com##.banner_eco3
economia3.com##.cont_publicidad
||economia3.com/wp-content/uploads/*/*banner*.
||economia3.com/wp-content/uploads/*/*970x90.gif
animeskai.com##body > div[id][style*="position: fixed"][style*="z-index"][style*="height:"][style*="height:"]:not(#container)
animeskai.com##a[href^="https://www.aniclube.com"]
flagrasamadores.net##.divbanner
||flagrasamadores.net/ai1.js^
||flagrasamadores.net/monetizze
||flagrasamadores.net/xs2.jpg
||somosxbox.com/wp-content/uploads/2018/04/bloquebanggood.gif
hola.com###promoHola
hola.com##.sponsored-news
ddmix.net##a[href^="//trisxisys.com/afu.php"]
ddmix.net##a[href^="//goo.gl/"][target="_blank"] > img
xrivonet.info###HTML2 > .widget-content
xrivonet.info###HTML3 > .widget-content > span[style="font-weight: bold;"]
xrivonet.info##.post-body > span[style="font-weight: bold;"]
xrivonet.info##.sidebar > #HTML1 > .widget-content [style="font-weight:bold;"]
||capodeportes.net/extremotv/abajo.php
||capodeportes.net/extremotv/arriba.php
||capodeportes.net/extremotv/lateral.php
capodeportes.net##[id^="floatLayer"]
tvplusgratis.com,xnalgas.com,televisiongratishd.com,liketvw.com,jaffmisshwedd.com,tvcanales.cf###ventana-flotante
rojadirectaonlinetv.com,extremotvplay.com##.sidebar > .encabezados:nth-child(2)
||drylnk.com/apu.php?zoneid=
desdesoria.es###publitop
desdesoria.es###headertop > div[style="width:138px; float:left;"]+div a[rel="nofollow"] > img
desdesoria.es###publiheader
desdesoria.es###columnapublicidad
desdesoria.es###mediacolumna
desdesoria.es##.advertising-corte-interstitial
||pelispedia.tv/Native.html
tvfree.me###sp-above_body_1
tvfree.me###sp-left > .module
tvfree.me##.row-fluid > #sp-content1
tribogamer.com##.olPopup
tribogamer.com##div[class^="floatad-"]
htforum.com##li[id^="post-"] > div > div[style="text-align: center; font-size: 75%;"]
htforum.com##li[id^="post-"] > div > div[style="text-align: center; font-size: 75%;"] + a > img
htforum.com##.mainContent > div[style="text-align: center; font-size: 75%;"]
vanguardia.com##a[href^="http://www.clubvital.com.co"]
vanguardia.com##div[style*="font-size: 0.8em; text-align: left; color:"]
descargasdd.com##body > p > span[style*="color:"][style*="text-align:center"]:not([class]):not([id])
||carambo.la^$domain=androidpit.com.br
androidpit.com.br##.cbola-box
||voitto.com.br^$third-party
||renatoalves.com.br/images/banners^
||baixartorrent.info/wp-content/uploads*/a0*b-
baixartorrent.info###secondary > #text-5
dn.pt##div[class^="t-pub-"]
depor.com##.ads-300x600
gamersclub.com.br##.bglink
vertelevision.tv,vertelevisor.com###closeX
vertelevisor.com##div[id^="capa"]
latinoweb-tv.com##[id^="floatLayer"]
||vertelevisor.com/publivertelevisor.html
||animextre.me*js/script_uoio.js
animespace.tv##.DvrAbs
||crypto-forums.net/modal/assets/js/slickModal.min.js
anitube.biz###sombra
anitube.biz###bannerMontado
anitube.biz##a > img[alt^="banner-"]
webcheats.com.br###bg_trasp
peliculaonlinehd.com,tufutbolpro.com,webcheats.com.br##a[href^="http://bit.ly/"]
webcheats.com.br##.node_529
||epg.svrtv.me/xnotificationbar.js
||aovivonatv.com/tema/js/nowpobjs.js
aovivonatv.com##body > section.gnBig
universoformulas.com###anuncios-amp
universoformulas.com##.sidebar-content > #text-5
universoformulas.com##.content > .pad > span[style="font-size: 6pt"]
universoformulas.com##.post-inner > div[style="margin: 0 0 25px 0"] > span[style="font-size: 6pt"]
torrentbrazil.org##a[href^="https://goo.gl/"] > img
jn.pt##div[class^="t-pub-box-"]
televalltv.net###floatLayer6
elconfidencial.com##.hide-div
antena3.com,elindependiente.com,culturageek.com.ar,clarin.com,poder360.com.br,globo.com,elespanol.com##.adv
elespanol.com##.article-adv
atresplayer.com##.mod_ad_top
atresplayer.com###bannerTop
europafm.com,atresplayer.com##.mod_roba
atresplayer.com##.mod_blanco
infojobs.com.br##.bottomBannerInside
infojobs.com.br##.advisor-banner-container
futeboltvgratis.com,aovivo.gratis,futeboltv.com###anuncio
futeboltvgratis.com,futeboltv.com###adstab01
extremotv.info##iframe[src^="http://extremotv"][src*=".php"]:not([src*="lateral.php"])
eusouandroid.co##body .td-header-style-10 .td-g-rec-id-header .adsbygoogle
animesorion.tv##body > center
animesorion.tv###sidebarGeral > .sidebar:first-child
animesorion.tv###content > .contentBox + center
megafilmestorrents.net##a[href^="https://goo.gl/"]
||megafilmestorrents.net/barra.php
||literaturanocinema.com.br^$third-party
voxel.com.br##.widget-taboola
voxel.com.br##.widget-shopping
voxel.com.br##.ad-leaderboard-wrapper
deportes.televisa.com##.prime-banner
||theonecdn.com^$domain=tv-porinternet.com
||moneymakercdn.com^$domain=tv-porinternet.com
teknofilo.com##a[href="https://www.teknofilo.com/sorteo-lg-g6/"]
||r.pornburn.com/*/js/ftl.js
||mzsimg.com/js/x.js.pagespeed.jm.*.js
||r.pornburn.com/saimre.php
muyzorras.com##.pd.pbf
videospornosos.com##.publicidadactriz
okdiario.com##.aux-col > .widget_aawp_widget_bestseller
pornogratisdiario.com##.bnfo
mundoeducacao.uol.com.br,pornogratisdiario.com##.bnr
embed.videosdemadurasx.com###floating-bn
3dgames.com.ar###sponsor_image
cine-online.eu##body #expandirBotones
cine-online.eu##body > .add
verepeliculas.com,cine-online.eu##.fake_player
||animalog.biz/barra.php
mkv-paste.com,comandotorrents.com,pelispedia.tv##center > a[href][target="_blank"] > img
televisionparatodos.tv##p > a[href][rel="noopener"][target="_blank"] > img
||televisionparatodos.tv/wp-content/uploads/*/verenvivo.jpg
elgrantv.com###floatLayer[style]
elgrantv.com##tr[bgcolor="#0A0545"] > td[valign="middle"]
elgrantv.com##a[href^="http://elgrantv.com/"][href*="Premium"]
elgrantv.com##a[href^="http://www.verfutbol.net"]
elgrantv.com##a[href="http://tuning-mix.com"]
elgrantv.com##a[href="http://elgrancine.com"]
||elgrantv.com/cine.gif
||elgrantv.com/gordosucio.gif
lyon.kim##.layer
eurogamer.pt##.advert
tarjetaroja-tv.net##iframe[src="about:blank"]
||tarjetarojaonline.info/rojatv.php
||tarjetarojaonline.net/plug.php
||tarjetarojaonline.info/js/adsrojo.js
||pirlotv.net/js/anuncios.js
||rojatv.tarjetaroja-tv.net/img/logo-roja.png
||tarjetarojaonline.info/rojadirecta.php
||tarjetaroja-tv.net/img/logo-rojo.png
||tarjetaroja-tv.net/js/xnotificationbar.js
television-envivo.com,iptvvall.com,televall.website,deportesmax.info###adsdiv
deportesmax.info##td[width="300"][align="center"][valign="top"] > div[align="center"]
deportesmax.info##td[width="729"][align="center"][valign="top"]
torrentrapid.com,newpct1.com##div[style="float:left;width:100%;height:160px;"]
newpct1.com###box-ads-trailer
/^https:\/\/(ddmix.net)\/[a-z0-9_]*\.js/$script,domain=ddmix.net
/^https:\/\/(ddmix.net)\/js\/[a-z0-9_]*\.js/$script,domain=ddmix.net
ddmix.net##.textwidget > a[rel="nofollow"] > img
||cameraprive.com^$domain=cnnamador.com
cnnamador.com##.g-row-banner >div.g-col-sidebar
||mujeres-desnudas.com/*_*.js|
comidinhasdochef.com,mujeres-desnudas.com###sidebar > div[id^="text-"]
repelis.net##.div-banner-popup-event
/imagenes/banners/*$domain=forobeta.com
noticias3d.com##body > div#skin
||cnnamador.com/pop/*.js
||alosafada.com/barra-disksexo/
cnnamador.com##center > a[rel="nofollow"] > img
||linhaquente.com/skokka/*/banner-
marca.com##.content-ad
marca.com##.aside-outbrain
marca.com##.aside-ad
marca.com##.gallery-slide-ad
||midan.io^$domain=animalog.biz
||nypaste.com/uno.php$domain=heavenmanga.com
||heavenmanga.com/200x200.php
heavenmanga.com###floatLayer3
seriesgato.com##.TPlayer > div.TPlayerTb > div > a[rel="nofollow"]
televisionparatodos.tv##a[href^="http://www.portablemusic.mobi/"]
||televisionparatodos.tv/wp-content/uploads/*/reproductor.gif
||televisionparatodos.tv/wp-content/uploads/*/padrongif.gif
xn--hentaienespaol-1nb.net##.post-body > div[style="width: 1183px;height: 160px;"]
tuporno.tv##iframe[width="220"]
||bit.ly^$domain=adshort.co
||dailymotion.com/embed/video/$domain=adshort.co
tribunavalladolid.com##[class*="advertising"]
||tribunavalladolid.com/uploads/advertisings/
yourupload.com###header-leaderboard
animeflv.co##.avm
animeflv.co##.episodeList > div > div:empty
animeflv.co##.episodeList > div > div[style="float: left;"]
xn--hentaienespaol-1nb.net##.pr-widget
||hentai-heroes.com/deaf/mo_script.php
muyinteresante.es##.size_static.mega1
muyinteresante.es###sidebar > [class^="roba"]
||i0.wp.com/autoblog.com.ar/wp-content/uploads/2015/03/*800x100*.gif?resize=800%2C100
autoblog.com.ar##.ad-header-right
blizzboygames.net,animeflv.net,espaebook.org,verestrenos.net,autoblog.com.ar##a[href^="http://bit.ly/"] > img
||erohentai.net/wp-content/themes/erohentai/biu_yi.js
doramashd.com,bludvfilmes.com,fulltvhd.fi,megafilmestorrents.net,erohentai.net###floatLayer2
erohentai.net###secondary > #text-2
sxmanga.com,ddhentaid.net##.bloque_ads
hentaixtremist.com###player > #ap
redeszone.net###NEWS_RELATED
pelisr.com###text-6.widget_text
popfilmeshd.net,pelisr.com###playerads
peliculaxd.com,latinohentai.com,popfilmeshd.net,pelisr.com,pepeliculas.com##.contadorads
peliculaxd.com,pepeliculas.com,latinohentai.com,playview.io##.ads_player
redeszone.net,tabletzona.es,movilzona.es,adslzone.net,adslzone.tv,androidayuda.com,softzone.es,hardzone.es,gamerzona.com###GLOBAL_BD_TOP
redeszone.net,tabletzona.es,movilzona.es,adslzone.tv,androidayuda.com,softzone.es,hardzone.es,gamerzona.com###NEWS_BODY
adslzone.tv,androidayuda.com,softzone.es,hardzone.es,gamerzona.com##.news-item > div.visible-md.visible-lg
solowrestling.com##.publiD
solowrestling.com##.blochomeIbanner
solowrestling.com##.blochomeD > .blochomeDp
solowrestling.com##.internewnew
solowrestling.com##.thenew > .newclients[style="margin-top:20px"]
abc.es,marca.com,expansion.com,mp3xd.mom,escuchasmusica.com,goomusica.com##.publicidad
||serviporno.com/js/compiled/custom-vendor.js
serviporno.com##.banner-160x600
||noddus.com/javascripts/card_loader.js^$third-party
gamezfull.com##center > a[target="_blank"] > img[style*="height:60px;"]
20minutos.es##.ad-fixed
20minutos.es##.editorial-banner
||rs.20m.es/js2/third-parts/criteo.js^
submanga.com##.s818
submanga.com##body > #w > #f.f
naruho.do##.pub728
tu.tv###cointainerBanner300
||webimg.hispavista.com/autobl/*728_ab.gif
||webimg.hispavista.com/autobl/*300_ab.gif
seriesypelis24.com##a[rel="nofollow"] > img
musicaanime.info###contendor-right-publicidad
musicaanime.info##body > div[style="z-index:3; display:block"]#players
anime-latino.net###left > div.cto
||ainder.club/*/code.php^
pepeliculas.com##.module_single_ads
inkanime.com##iframe[height="105"][width="700"]
anime-latino.net##iframe[name="Pub300"]
windowsblogitalia.com##div[id^="ppsPopup"]
windowsblogitalia.com##.sidebar > div.tile-top > div[class="tile-content"]
masmusicacristiana.club##.nuevos-anuncios
seriesytv.tv,animeytv.tv,peliculasytv.com##.a728
seriesytv.tv,animeytv.tv,peliculasytv.com##.main > center > a[target="_blank"] > img
animesorion.org###content > div.contentBox+center
animesorion.org##.garotaslindas
habboin.net###client_ads
bmwfaq.org##ol#messageList > li.message:not([id]):not([data-author])
skanime.net##.tabads
masmusicacristiana.club##.nat-publi
bateriafina.net###banDe
bateriafina.net###fblike
musicasvip.com###tiGen+div:not([id]):not([class]) > div.movil
musicasvip.com###tiGen+div:not([id]):not([class]) > div.pc
musicasvip.com###docosas > div#Pub1
lastmusica.net,mp3xd.mom,goomusica.com,escuchasmusica.com###cuerpo > div.derecha
remusica.biz,musicaeu.com###baNwan
remusica.biz,musicaeu.com###banIz
foxmusicagratis.com##.box-publicidad
foxmusicagratis.com###contenido > div.bright > div[style="margin: 5px 0;"]
vizer.tv##body > .vizerNewBox.adsByVizer
bemad.es,cuatro.com,divinity.es,eltiempohoy.es,energytv.es,factoriadeficcion.com,mtmad.es,telecinco.es##.cards__card_ad-3gZy
mitele.es##.ad-wrapper
tudotv.tv##.Publicidade728
holadoctor.com##.banner_cubo_space
tempo.pt,lasestrellas.tv,auto10.com,abril.com.br##div[id^="ad_"]
abril.com.br##.ad-sense
abril.com.br##.widget-superbanner
||mocosoft.com/cialis.jpg
||mocosoft.com/cpiu.gif
mocosoft.com##table[bgcolor="red"]
||mocosoft.com/prope.jpg
||youtube.com/v/^$domain=mocosoft.com
programaswebfull.net##.topad
marca.com##.content > iframe[src^="http://91.116.142.114"]
||91.116.142.114/iframe$domain=marca.com
tabletsesmartphones.org##.banner-336x280
ig.com.br###BF6F388D-5A38-457D-991A-A827E8F29D58
bandaancha.eu###BandaAncha_160x600
bandaancha.eu###BandaAncha_Roba_300x250_Sec
globo.com###BannerTopo
ig.com.br###C5E63B4A-2E0E-47A9-A1CA-8C6719CFA8CB
emol.com###CajaFarox2
tomadivx.org###DESCARGAslidein
terra.com.br###HeaderBannerContainer
territoriodigital.com,territoriodigital.com.ar###HiperLibertad
newpct.com,pctestrenos.com,tumejortv.com###Layer1
mercadolibre.com.ar###MClicsQCatAdImg
sapo.pt###MREC2
magisnet.com###MSC
ig.com.br###PPA03406
taringamp3.com###Pluginbarraa
diariodenavarra.es###PubDesplegable01
ebuddy.pt###Rectangle
mail.yahoo.com###SKY
globo.com###Sky
r7.com###Square_Island
elcorillord.com###TB_iframeContent
elcorillord.com,taringamp3.com,teledeporteshd.com###TB_overlay
elcorillord.com,taringamp3.com,teledeporteshd.com###TB_window
hispashare.com###TOPGLOBE
abril.com.br###abrVitrine
adrenaline.com.br###ad-300x250-noticia
hastlegames.com###ad_global_below_navbar
informador.com.mx###adsTop
revistasgratis.ws###adsacumulada
revistasgratis.ws###adsalosexo
revistasgratis.ws###adscamerasex
revistasgratis.ws###adsempire
tvthudinha.net###adsensecima
revistasgratis.ws###adsmp
revistasgratis.ws###adsoriginal
revistasgratis.ws###adspb
cruzeirodosul.inf.br###adsverticalmenu
baixaki.com.br###adtopDet
laguiatv.com###adv-top
ibtimes.com.br###advertisement
ig.com.br###advertising
comunio.es###advertising-top
revistamonet.com.br###advertisingA
esradio.fm###adw_1
emol.com###adx_p
revistasgratis.ws###amigos
clubic.com###annonce_pub2
tvgol.biz###anuncio1
seriesyonkis.com###auto_banner
lanacion.com.py###ba_avanza
lanacion.com.py###ba_interbanco
ijuinews.com.br,peladas69.com,animeflv.net,cadenasuper.com,rcmpharma.com,terra.com.br###banner
braziliantimes.com###banner-topo
vanguardia.com###banner0
eleconomista.es,tudorondonia.com###banner1
terra.es###banner300
diariolibre.com###banner600x30space
aeiou.expresso.pt,sapo.pt###bannerFooter
aeiou.expresso.pt,sapo.pt,visao.pt###bannerMrec
diariolibre.com###bannerRight
tecmundo.com.br###bannerTopo
mundonick.com###bannerTurboNick
123.cl###banner_160_600
futnet.com.br###banner_dhtml
ipcdigital.com###banner_dir_cima
newpct.com###banner_header
gizmodo.com.br###banner_meio
meneame.net###banner_right
areah.com.br,canal13.cl,plus.es###banner_top
aquiacontece.com.br###banner_topo
clb1.com###bannerbox
diariolibre.com###bannermiddle728x90
clickpb.com.br###bannersDireita
jmonline.com.br###bannersTopo
diariodenavarra.es###banners_arriba
cadenaser.com###banners_header
terra.com.br###barraM.varejo
milenio.com###block-block-12
milenio.com###block-block-13
milenio.com###block-block-188
milenio.com###block-block-208
autobild.es###block-block-23
autobild.es###block-views-sales_admin-block_2
cruzeirodosul.inf.br###bnrfull
guiasp.com.br###box-ad-topo
clicrbs.com.br###box-clicshop
facilisimo.com###boxPubli2
estadao.com.br###box_zapimoveis
brasilportais.com.br###bp-superbanner-cont
forum.ad###branding-content > div#sidebar_header
infobierzo.com###cab_publi
elimparcial.es###cabecera_banners
lanacion.com.ar###cajaEspeciales
baixefilmesgratis.org###cboxOverlay
compucalitv.com###centrado
vkmag.com###clickbg
abril.com.br###cnOfertas
baixefilmesgratis.org###colorbox
abril.com.br###containerBanner
emol.com###contenedor_vivedescuentos
terra.cl###ctn-content-sharer-bottom
terra.cl###ctn-content-sharer-top
terra.com###ctn-tgm-right
flyordie.com###d_adsky
tomadivx.org###ddbar
braziliantimes.com###direita
rededownload.com###divErroFundo
gsmspain.com###div_banner728
pheu.net###div_video_ads
cinetube.es###dtos-banner
cinetube.es###dtos-overlay
terra.cl###dual-experience-tabs
band.com.br###dv_arroba
estilourbanord.com###dynabar
diariodopara.com.br###edicao-eletronica
filmesubtitrate.info###empty_tyo
ig.com.br###enqueteLayer
3djuegos.com###eyeDiv
bp7.net,filmesubtitrate.info###fadeinbox
titinet.com.br###fauxadsense
parana-online.com.br###floater_fold_banner
cadenasuper.com###footer
aurora-israel.co.il###fourthColBanners
diario.iol.pt###frase2
filmeshd.tv###frutuante
olhardireto.com.br###fullBanner
gazetaesportiva.net###ge-gadget-shop
diariosur.es,elcorreo.com,larioja.com###gebruiker_shadow
globo.com###globocom
terra.com.br###grandeS
rumbo.es###group-bottom
iol.pt###halfbanner
hazmeelchingadofavor.com###header-top-banner
acorianooriental.pt###headerPub
lared.cl###headerabajo
cdf.cl###homepagetop2
cdf.cl###homepagetop3
cdf.cl###homepagetop5
cdf.cl###homepagetop_side
es.msn.com###ie8
terra.com.br###ilha
elpais.com###imarket6042
ibtimes.com.br###ing
telecinco.es###instaladorSL
justin.tv###iphone_banner
estadao.com.br###jogos
acorianooriental.pt###lastPubPub
cinetube.es###lateral_descuentos
dnoticias.pt###leaderboard-pub
impre.com###leaderboardPlaceholder
aurora-israel.co.il###leftBanners
phonehouse.es###lightbox
phonehouse.es###lightbox_fade
lancenet.com.br###linkpatrocinados
globo.com###linksPatGoogle
terra.cl###live-alerts
edreams.es###m3
edreams.es###m6
edreams.es###m9
xl.pt###magazine_modules_receivenewsletter
mega.cl###mainrightbottom
mega.cl###mainrightmiddle
mega.cl###mainrighttop
es.msn.com###marketingbanne
mforos.com###matb_adszone
google.cl,google.com.ar,google.com.br,google.com.co,google.com.ec,google.com.mx,google.com.ni,google.com.pe,google.es,google.pt###mbEnd
rumbo.es###mega
terra.com.br###megabanner
abc.es,diariosur.es,elcorreo.com,larioja.com###mensenwat
terra.cl###mod-adv
baixemp3gratis.net###movido
totaldescargas.com###movie-advertising
iol.pt,rr.pt,sapo.pt###mrec
braziliantimes.com###newsletter
tvthudinha.net###nossiga
mercadolibre.com.mx###oasTOP
band.com.br###ofertas
ono.com###ono_banner_bar
totallycrap.es###oursponsors
tuenti.com###overlaysContainer
elpais.com.co###pauta-top-home
globo.com###pbright
telecinco.es###popUpContainer
futbolme.com###pop_upHI
dealante.com###poster2
globo.com###prePagina
cruzeirodosul.inf.br###propaganda
tabascohoy.com###ptd_c_pubheader
tabascohoy.com###ptd_encabezado_degradado
tabascohoy.com###ptd_encabezado_publicidad
ig.com.br###pub-Position
ig.com.br###pub-Right
ig.com.br###pub-island
expansion.com###pub200x400
expansion.com###pub234x60b
sapo.ao,sapo.cv,sapo.mz,sapo.pt###pub300x250
sapo.pt###pub728x90ifrm
ultimosegundo.ig.com.br###pubRight
oreporter.com###pubTopo
yucatan.com.mx###pubhead
ig.com.br###publateral
imperiodefamosas.com,animeflv.net###publi
antena3.com###publi1
imperiodefamosas.com###publi3
emprendedores.es###publiBottom
cope.es###publiHeader
emprendedores.es###publiRight
as.com###publi_3columnas
marca.com###publi_sup
lacerca.com###publicidad_frontpage_medio
lacerca.com###publicidad_superior
gabarite.com.br,destakjornal.com.br,diariodopara.com.br,ig.com.br###publicidade
globo.com###publicidade01
soitu.es###publicidadsuperior
ondacero.es###publicity
interviu.es###publireportaje
ig.com.br###pubmasterbox
vanguardia.com###pubprime
ig.com.br###pubsidebar
ig.com.br###pubsidebar2
ig.com.br###pubtop
tvportugalhd.com###r6f8
cdf.cl###r_sidebar
ibtimes.com.br###rectangle_banner
spartoo.es###redirect_langue_flou
publico.es###robapaginasCont
bandaancha.eu###robapaginas_300x250
mail.yahoo.com###scAdContainer_i51_52
vanguardia.com###seccionpauta1
vanguardia.com###seccionpauta2
folha.uol.com.br,r7.com###shopping
br.msn.com###shoppingmodule
kidownload.com###sidebar_top
folha.com.br###skyBanner
band.com.br,terra.com.br###skyscraper
spartoo.es###spartooday
peru.com###stAd_MegaBoton1
submanga.com###sup
ig.com.br###super-banner
globo.com###superBanner
emprendedores.es###superHeader
aristeguinoticias.com,clicrbs.com.br,diariodepernambuco.com.br,edreams.es###superbanner
miau.pt###table50
abril.com.br###tbBanner
abril.com.br###tbBannerRight
ipcdigital.com###temp_banner_left
ipcdigital.com###temp_banner_right
androidsis.com,easydown11.wordpress.com###text-3
terra.com.ni###tgm-bar1_1280
terra.com.ni###tgm-bar2_1280
terra.com,terra.com.br###tgm-bottom
terra.com.ni###tgm-pagesponsor
terra.es###tgm-ppi
terra.com.br,terra.com.ni,terra.es###tgm-right
terra.es###tgm-right-2
programasfull.com###theLayer
iol.pt###topPub
cinefilmesonline.net,elrincondelmovil.com,elrincondelsymbian.com,htcmania.com,nerdyfilmes.com,saludalia.com,sonidodance.net###topbar
piratatuga.ws,piratatugas.net,tuga-filmes.com###topbar2
acorianooriental.pt###topoPUBsidebar
diariodopara.com.br###topodoodle
opovo.com.br###tpPublicidade
terra.cl###trr-bar
msn.com###upgrade
descargardvdrip.com###vlc
newpct.com###vlcb
globo.com###widget_shopping_49051
aeiou.pt###zahirflut
elcolombiano.com###zonaComercial
gshort.cf,gigadownloads.co,elreloj.com##.Banner
elimpulso.com##.BannerHorizontalCopiaTOP
eluniversal.com##.BannersTop
eluniverso.com##.BnMid
eluniverso.com##.BnRig
eluniverso.com##.BnTop
elperiodicodearagon.com##.BottomLeft
sapo.pt##.BoxPub300x250
damepc.com##.ComentariosDD720x90
elimpulso.com##.Cuadro300x250
damepc.com##.Der350Portada
damepc.com##.FaceForDer160x600
damepc.com##.FaceForIzq160x600
orkut.com.br##.GIAX5IEDAN.GIAX5IEDE1B
rtp.pt##.GooglePub300_250
infobolsa.es##.Home_Pub_Box.Home_Pub_BoxShadow
infobolsa.es##.Home_TopDcha
damepc.com##.Izq350Portada
mercadolibre.com.ar##.MClics-bottom
publico.es##.Noticias_300x250
orkut.com.br##.O-PN
sapo.pt##.PagInicialPub2
rtp.pt##.PubGoogle300
damepc.com##.Publitop
baboo.com.br##.RgtColTopImg
infobolsa.es##.Web_Banner
animeflv.net,anime-latino.net,animeid.com##.a160
animeflv.net##.a300x250
inkanime.com,elanimeflv.com,animeyt.org,jkanimeonline.com,elanimeonline.net,animeflv.net,animeid.com##.a728
letras.mus.br##.ad-full
telecinco.es##.ad-top
ondacero.es##.adContainer1
informador.com.mx##.adHz
informador.com.mx##.adSt
informador.com.mx##.adVl
brasilportais.com.br##.ads-lateral
impre.com##.ads125BackTexture
elnuevodiario.com.ni##.ads728_90
ticotimes.net##.ads_by_tico
cinetube.es##.adsb
inkanime.com,todoanimeshd.com,anime-latino.net,animeflv.net##.adspl
cinetube.es##.adst
intereconomia.com##.adv-top
atribuna.com.br,lance.com.br,larazon.es,folha.uol.com.br,tribunaavila.com,terra.com.ni,totaldescargas.com##.advertising
lanacion.cl##.advs1
lanacion.cl##.advs2
lanacion.cl##.advs3
thephoneclub.net##.angular_advertisement
todoanimes.com##.anime-pub
tecnologia.ig.com.br##.anugoogle.ver
redesuldenoticias.com.br,cbnmaringa.com.br,melissabenoist.com.br,botinnifit.com,engeplus.com.br,libertaddigital.tv##.anuncio
elcolombiano.com##.anuncioPrincipal
desenhosanimados.site,zoofilia.gratis,esradio.fm,libertaddigital.com,libertaddigital.tv##.anuncios
futnet.com.br##.area_anuncios_topo
futnet.com.br##.area_banner_125x125
futnet.com.br##.area_banner_arroba
futnet.com.br##.area_banner_botao
futnet.com.br##.area_banner_full
futnet.com.br##.area_banner_half
futnet.com.br##.area_banner_selo_grande
futnet.com.br##.area_banner_sky_grande
futnet.com.br##.area_banner_texto
dementia.pt##.artfundpub
adn.es##.av.clearfix
lared.cl##.aviso220x90
lared.cl##.aviso300x250
lared.cl##.aviso728x90
laprensa.com.ni##.baner_centro
laprensa.com.ni##.baner_superior
terra.es##.bann
iol.pt##.banner-area
series-br.com##.banner-home
ionline.pt##.banner-obj
brasilportais.com.br##.banner-vitrine
noticiasmvs.com##.banner.marginBottom
123.cl##.banner300x160
123.cl,autocity.com##.banner300x250
ipcdigital.com##.banner320_270
toxico-pc.com##.bannerCENTER
noticiasmvs.com##.bannerGeneral
noticiasmvs.com##.bannerLateral
infobae.com##.bannerLibre
sapo.pt##.bannerMrec
correiomanha.pt##.bannerPub
toxico-pc.com##.bannerTOP
diariodepernambuco.com.br##.bannerTopo
elsolonline.com##.banner_680
emagister.com##.banner_blhome
destinia.com##.banner_doubleclick
fcparma.com##.banner_fondo
destinia.com##.banner_konouz
r7.com##.banner_miolo
terra.com.br##.banner_propaganda_dir
as.com##.banner_sup
futnet.com.br,gizmodo.com.br##.banner_super
canal13.cl,elpais.com,los40.com,uol.com.br##.banner_top
lacerca.com##.banner_zona_9
gmconline.com.br,novanews.com.br,aquiacontece.com.br,elotrolado.net,xvideoz.es##.banners
olhardireto.com.br##.bannersButton
eluniversal.com##.bannersTop
lacartadelabolsa.com##.banners_cab
geovisites.com##.bg_flash
oxe7.com##.bg_rek_on
globo.com##.bi
autobild.es##.big_banner
somosche.com##.blAdd
axn.es##.block-spti_operativ
animax.es,setenveo.es##.block-spti_operative
titinet.com.br##.bloco-adsense
diariodenavarra.es##.bloque_infopublicidad
aeiou.pt##.bn300x250
aeiou.pt##.bn300x75
aeiou.pt##.box-border
abril.com.br##.boxBN
tvazteca.com##.boxBanner
procurandovagas.org##.box_gr
elespectador.com##.box_pauta_top
ig.com.br##.box_publicidade
aristeguinoticias.com##.boxbanner_notaterminal2
video2mp3.net##.bubble_light
r7.com##.cidades_banner
cinemainterativo.com##.cloudbanner
elcorreogallego.es##.cntBannVertArriba
iol.pt##.col-google
futandres.ml##.column-right-outer
sapo.pt##.comentariosPag
millenniumbcp.pt##.commBanners
wareztuga.tv##.comments-pub
tribuna.net##.con_publi
lacartadelabolsa.com##.cont_banner300
lacartadelabolsa.com##.cont_banner468
clicrbs.com.br##.contemPublicidadeRetangulomedio
clicrbs.com.br##.contemPublicidadeSuperbanner
elcolombiano.com##.contenedorAnuncio
europasur.es##.contenedor_publicidad
lacerca.com##.contenedor_publicidad_lateral
gamerstek.com##.content-width.content-container.pub-table
terra.cl##.ctn-tgm
terra.com,terra.com.br##.ctn-tgm-advertising
terra.cl,terra.com##.ctn-tgm-bottom-holder
internautas.org##.cuad01
sapo.pt##.cx-iniciativas-pub
clarin.com##body .des-adv[data-name="advert"]
filmixt.com##.detalleftbanner
vagos.es##.dhtmlwindow
futnet.com.br##.divbloco
unam.mx##.dixio-banner
superesportes.com.br##.doisbannertopo
estadao.com.br##.dvBannerX08
europasur.es##.ePubli1
entremujeres.com##.emj-it-adv
entremujeres.com##.emj-it-advright
futandres.ml##.entry-content > center > b
easyviajar.com##.esv-pub-300-250
saludalia.com##.etiquetaPublicidadNueva
futandres.ml##.fauxcolumn-right-outer
orange.es##.fdo_banner
latribuna.hn##.featuredtop2
seriescoco.com##.filenium
lavozlibre.com##.flash_element
terra.com.br##.float_right_container
elcomercio.com##.fn_googlePubliCenter
elcomercio.com##.fn_googlePubliLeft
elcomercio.com##.fn_googlePubliRight
noroeste.com.mx##.fondo
superperolas.com##.full_banner
gazetaesportiva.net##.ge-gadget.cornerHeaderLG[style="width: 210px;"]
gazetaesportiva.net##.ge-gadget.cornerHeaderLG[style="width:210px;"]
globo.com##.glb-opec
jornaldigital.com##.glidecontent
ono.com##.grid_5.modulo_correo_2
yesfilmes.org##.header
baboo.com.br##.headerBanner
impulsonegocios.com##.header_top
internautas.org##.headpub
peru.com##.hpActualidad-IcoNorm2
peru.com##.hpPrincipal-Cont2-Nav2
peru.com##.hpVideos-Cont2-Cont6
ig.com.br##.ig-shopping
esportes.br.msn.com##.imglinkabslist13
r7.com##.include_shopping
lavozdegalicia.es##.interst
ticotimes.net##.jcarousel-skin-anuncio
cinetube.es##.large
abril.com.br##.linksPatrocinados
paper.li##.m-ib
filmixt.com##.m_add_one
adn.es##.m_advertiser
adn.es##.m_promo
tvazteca.com##.main950
saludalia.com##.marcoBannerGde
peru.com##.marcopublicidad320250
cadenaser.com##.marketplace2
r7.com##.materia_coluna
unam.mx##.medium-rectangle
muyinteresante.es,correiomanha.pt##.megaBanner
filmixt.com##.midtopadd
infobae.com##.mod-banner_300x50
infobae.com##.mod-banner_650
infobae.com##.mod-banner_650x150
infobae.com##.mod-banner_984
infobierzo.com##.moduletable
diariocoimbra.pt##.moduletable_publicidade
vanguardia.com##.moduletable_pubtexto
marca.com##.modulo_orbyt
aeiou.pt##.mon_td_glb
wareztuga.tv##.movies-pub
elcomercio.com##.mp_publiContenedor
caras.pt,exameinformatica.pt,xl.pt##.mrec
torrentazos.com##.mybanner
infocoches.com##.navi_right
clicrbs.com.br##.nivelA-tipo6
clicrbs.com.br##.nivelA-tipo8
clicrbs.com.br##.nivelB-modB-tipo1
gaceta.es##.notFondo
antronio.com##.openx_afterafter
antronio.com##.openx_postinside728x90dos
peru21.pe##.orbitslider
caracoltv.com##.pautafacil_caracoltv_home
abril.com.br##.pbc-patrocinio
abril.com.br##.pbc-right1
antronio.com##.post_wrap_kmn
ig.com.br##.previsaoTempoBox
kiosko.net##.promo
hotelius.com##.promocines
planetadeagostini.es##.promocion
flip.pt,elsiglodetorreon.com.mx,cifraclub.com.br,clix.pt,destak.pt,iol.pt,lavozdegalicia.es,publico.pt,sapo.pt,wareztuga.tv##.pub
ig.com.br##.pub-island.fl
telanon.info##.pub-large
iol.pt##.pub-line
telanon.info##.pub-medium
pelicula20.com##.pub-single-160x600
pelicula20.com##.pub-single-300x250
clix.pt##.pub-textads
ig.com.br##.pub-ticker.fl
punch-fansub.com.br,tiinside.com.br##.pub1
estadao.com.br##.pub157x27
internautas.org##.pub60
telanon.info,xl.pt##.pubBlock
clix.pt,publico.pt##.pubHeader
clix.pt,publico.pt##.pubTextual
animeflv.net##.pub_728
iol.pt##.pub_full
iol.pt##.pub_half
yucatan.com.mx##.pubcuad
abril.com.br##.publSquare
impactoespananoticias.com,meteorologiaenred.com,desdelinux.net,lawebdelprogramador.com,soydemac.com,as.com,cadenaser.com,cincodias.com,destinia.com,elpais.com,lavozlibre.com,marca.com##.publi
infochannel.com.mx##.publi-int-cuadro
marca.com##.publi-resultados
jornalagora.com.br##.publi178_2
clarin.com##.publi183_90
antena3.com,marca.com##.publi2
antena3.com##.publi3
telecinco.es##.publi300
antena3.com##.publi5
abc.es##.publiABC
antena3.com##.publiRoba
abc.es##.publiTextlink
diariovasco.com##.publiTop[id^="megabanner_"]
cinetube.es##.publi_1
marca.com##.publi_630_noticia
telecinco.es##.publi_bg
elcomercio.com##.publi_box
elpais.com##.publi_h
jornalagora.com.br##.public
soitu.es##.publicidad40
tvn.cl##.publicidad_728x90
lasextadeportes.com##.publicidad_banner_right
globo.com##.publicidade_c
terra.com.br##.publicidade_lg
lavanguardia.es##.publicitat1
yucatan.com.mx##.publoque9
eleconomista.es##.punteado
elperiodicodearagon.com##.recomendados
elespectador.com##.relpauta
filmixt.com##.rightbanner1
diariovasco.com##.roba
abc.es,interviu.es,lavanguardia.com,muyinteresante.es,que.es##.robapaginas
abril.com.br##.rodape-verao
mail.yahoo.com##.scAdvertisement
r7.com##.side-banner-container
hayatbul.org##.sidebaha[style^="background-color:"]
forum.ad##.simple_overlay
abril.com.br##.skyBanner
laflecha.net##.slogan.bottom
tuenti.com##.sponsoredEvents
prodigy.msn.com##.sponsorship
xl.pt##.stk_666
gazetaonline.com.br,estadao.com.br##.superBanner
extra.globo.com,muyinteresante.es##.superbanner
elespectador.com##.suscripciones
cocinayhogar.com,manualidadyhogar.com,plantasyhogar.com##.table_port_7
itweb.com.br##.texto_cinzaclaro_10
cinetube.es##.top_jueg
infocoches.com##.topnavtd
videoaltadefinicion.com##.ui-dialog
videoaltadefinicion.com##.ui-widget-overlay
todocvcd.com##.vbanner
todocvcd.com##.vbanner2
oxe7.com##.viewn_r
globo.com##.vitrine_banner
globo.com##.widget-shopping
autocity.com##.zonaGoogle
caracoltv.com##.zona_comercial
record.pt##[align="right"][width="348"]
impulsonegocios.com##[class^="list_table_banner"]
record.pt##[height="76"][width="8"]
itweb.com.br,record.pt##[height="90"][width="728"]
sapo.pt##[style="WIDTH:300px; margin-bottom:10px; TEXT-ALIGN:right"]
expressomt.com.br##[style="clear: both; position:relative;	top: 0px; 	width: 990px; border: 1px solid #c1c1c1; padding-left: 5px; padding-bottom: 5px; padding-top: 5px; height:100px"]
gazetaesportiva.net##[style="float:left; padding-right:0px; width:130px; display:inline;"]
gazetaesportiva.net##[style="float:left; padding-right:0px; width:475px; display:inline;"]
impre.com##[style="height: 100px; padding: 0px;"]
finalsports.com.br##[style="height: 105px; width: 1000px; background-color: #04290A; padding-top: 10px;"]
finalsports.com.br##[style="height: 105px; width: 1000px; background-color: rgb(4, 41, 10); padding-top: 10px;"]
impre.com##[style="height: 125px; width: 125px; float: left; padding-left: 10px;"]
impre.com##[style="height: 125px; width: 125px; margin-left: 10px; float: left; padding-right: 10px;"]
impre.com##[style="height: 250px; padding: 0px;"]
impre.com##[style="height: 600px; padding: 0px;"]
impre.com##[style="height:100px;padding:0px;"]
impre.com##[style="height:125px;width:125px;float:left;padding-left:10px"]
impre.com##[style="height:250px;padding:0px;"]
impre.com##[style="height:600px;padding:0px;"]
impre.com##[style="height:90px;padding:0px;"]
sapo.pt##[style="padding: 20px 0px; text-align: center; height: 90px;"]
sapo.pt##[style="padding:20px 0px; text-align:center; height:90px"]
orange.es##[style="width: 300px; height: 264px;"]
sapo.pt##[style="width: 300px; margin-bottom: 10px; text-align: right;"]
eladelantado.com##[style="width: 330px; margin-top: 4px; margin-bottom: 4px; float: left; background-color: rgb(238, 240, 237); padding-top: 13px; padding-bottom: 5px; background-image: url(\"imagenes/bannerFichero/publicidadHorizontal.gif\"); background-repeat: no-repeat; background-position: center top;"]
sapo.pt##[style="width: 527px; height: 150px; float: right;"]
capitalnews.com.br##[style="width: 738px; height: 90px; margin-top: 5px;"]
capitalnews.com.br##[style="width: 738px; height: 90px;"]
trivela.com##[style="width: 748px; margin-bottom: 8px;"]
publimetro.com.mx##[style="width: 995px; height: 90px;"]
vagos.es##[style="width:120px !important;height:800px !important;width:122px;height:802px;background:#F1F1F1;border:1px solid black;margin-top:255px;padding:0;position:relative"]
autosport.aeiou.pt##[style="width:300px;height:250px;overflow:hidden;position:relative;"]
autosport.aeiou.pt##[style="width:300px;height:250px;overflow:visible;z-index:0;"]
eladelantado.com##[style="width:330px; margin-top:4px; margin-bottom:4px; background-color:#eef0ed; padding-top:13px; padding-bottom:5px; background-image:url(imagenes/bannerFichero/publicidadHorizontal.gif); background-repeat:no-repeat; background-position:top;"]
sapo.pt##[style="width:527px; height:150px; float:right"]
vagos.es##[style="width:906px !important;height:98px !important;width:908px;height:100px;background:#F1F1F1;border:1px solid #9F6A1E;margin-left:auto;margin-right:auto;padding:0;position:relative"]
itweb.com.br##[width="300"]
univision.com##[width="320"][align="left"]
tuga-filmes.com##a[href="http://www.brigtek.com"]
oxe7.com##a[href="http://www.maiores18.com/"]
degracaemaisgostoso.org##a[href="http://www.primecursos.com.br/"]
cinetube.es##a[href^="/ver_contenido_link.php?c="]
jornaldenegocios.pt##a[href^="http://ad.doubleclick.net/"]
abc.es##a[href^="http://ad.doubleclick.net/clk"]
3djuegos.com##a[href^="http://adserver.adtech.de/"]
assistatvonline.com##a[href^="http://atvon.ourtoolbar.com"]
publico.pt##a[href^="http://bs.serving-sys.com/"]
ipjornal.com##a[href^="http://clk.tradedoubler.com/click?p"]
gsmspain.com##a[href^="http://grupolidertel.com/affiliates/"]
degracaemaisgostoso.org,yesfilmes.org##a[href^="http://tocarviolao.com.br/"]
yesfilmes.org##a[href^="http://todaoferta.uol.com.br/"]
territoriodigital.com,territoriodigital.com.ar##a[href^="http://www.clubelterritorio.com.ar/Suscriptor/Inscripcion?utm_source="]
piratatugas.net,tuga-filmes.com##a[href^="http://www.metodoroleta.com/"]
tvperuana.us##a[href^="http://www.neobux.com/"]
tuga-filmes.com##a[href^="http://www.pokerstars.com/"]
www.forumchaves.com.br##a[target="_blank"][href^="http://www.forumchaves.com.br/viewforum.php?f="]
mail.yahoo.com##body[onload="stopAdTimer()"]
bigbangnews.com##div[class$="b300x250"]
tuenti.com##div[id$="ad_container"]
diariovasco.com##div[id*="publicidad"]
tuenti.com##div[id*="sponsor"]
exame.com,elcorreo.com##div[id^="ads_"]
tv-en-vivo.org,brasilligado.org,filmessemlimite.com.br,jogossemlimite.com.br##div[id^="floatLayer"]
yucatan.com.mx##div[style="background:#CCC; width:310; height:280; float:left"]
01net.com##div[style="border:solid 1px black;text-align:center; margin:10px 0 10px 0;"]
baixaki.com.br##div[style="float:left; padding:0 10px 10px 0; width:300px;"]
facilisimo.com##div[style="float:right; position:relative; margin:-110px -247px 0 5px; width:300px; height:250px;"]
meneame.net##div[style="height: 252px; margin: 10px 0 4px 80px;white-space:nowrap;overflow:hidden;text-align:center"]
meneame.net##div[style="height: 65px; border-top: 1px solid #aaa; padding-top: 3px; border-bottom: 1px solid #aaa; margin: 10px 0 4px 80px;white-space:nowrap;overflow:hidden"]
meneame.net##div[style="height: 95px; border-top: 1px solid #aaa; padding-top: 4px; border-bottom: 1px solid #aaa; margin: 10px 0 4px 80px;white-space:nowrap;overflow:hidden"]
vagos.es##div[style="margin-left:20px;width:300px;height:250px;margin-left:20px;"]
filmessemlimite.com.br##div[style="margin:0;padding:0;position:absolute;left:188px;top:15px;width:755px;height:100px;text-align:left;z-index:4;"]
todoanimes.com##div[style="position:fixed; left:20%; bottom:0; width:732px; height:94px; z-index:99999; background:#3b5998; "]
autosport.aeiou.pt##div[style="width: 300px; height: 250px; overflow: hidden; position: relative;"]
autosport.aeiou.pt##div[style="width: 300px; height: 250px; overflow: visible; z-index: 0;"]
canarias7.es##div[style="width: 310px;margin: 2px 5px 0 0;float: left;clear: left;"]
rapifutbol.com##div[style="width:300px;height:250px;"]
cuantarazon.com##div[style="width:300px;height:250px;display:block;clear:both;overflow:hidden"]
elpais.com.uy##div[style="width:300px;padding:4px;margin:8px;float:left;border:0px solid #eeeeee;"]
peru.com##div[style="width:728px; height:90px; background-color:#000000; float:left"]
aristeguinoticias.com##div[style="width:728px;height:90px;margin:0 auto;"]
aristeguinoticias.com##div[style="width:728px;height:90px;margin:0 auto;padding: 0 0 5px 0;"]
damepc.com##div[style="width:950px;margin-left:auto;margin-right:auto;"]
peliculas-flv.com##div[style^="position:fixed; left:50%; top:50%"]
tomadivx.org##iframe[height="600"]
tomadivx.org##iframe[width="130"]
tomadivx.org##iframe[width="300"]
tomadivx.org##iframe[width="728"]
baixeturbo.org##img[style="border: 0px solid; width: 300px; height: 250px;"]
tuga-filmes.com##img[style="width: 125px; height: 125px;"]
internetcine.com##img[width="350"][height="225"]
futbolme.com##img[width="468"]
tvportugalhd.com##noscript + [id^="r"]
eleconomista.es##p[style="font-size:11px; padding:5px"]
forumchaves.com.br##p[style="line-height: 150%;"]
tvportugalhd.com##script + i[id^="r"]
forocoches.com##span[style="border: solid #FAFAFA; border-left: 10px solid #DADADA; PADDING-LEFT: 5px; padding:5px; margin: 1px; float: right; width: 301px; height: 251px;"]
burbuja.info##span[style="float: right; width: 300px; height: 260px;"]
guiadasemana.com.br##table[bgcolor="#808080"]
24horasnews.com.br##table[cellpadding="1"][width="640"]
sapo.pt##table[cellpadding="5"][width="641"]
elfolladero.com##table[height="19"][width="98%"][id="AutoNumber4"]
vagos.es##table[height="250px"][width="700px"]
elfolladero.com##table[height="368"][width="1000"][id="AutoNumber1"]
elcorillord.com,ultradownloads.uol.com.br##table[height="600"]
vagos.es##table[style="border:0px width:1010px;height:250px;margin-left:auto;margin-right:auto;margin-top:10px;margin-bottom:10px;"]
portalangop.co.ao##table[style="padding-left: 8px; padding-top: 8px; padding-bottom: 0px;"]
portalangop.co.ao##table[style="padding-left:8px;padding-top:8px;padding-bottom:0px;"]
ultimahora.com##table[summary="banner"]
minutodigital.com##table[width="335"][height="260"]
facilisimo.com##table[width="336"]
24horasnews.com.br##table[width="468"]
elcorillord.com##table[width="600"]
omelete.com.br##table[width="768"]
r7.com##td[align="center"][height="110"]
guiadasemana.com.br##td[bgcolor="#dcdcdc"]
juegosypelis.ws##td[height="630"]
saludalia.com##td[style="height:110px;width:760px;padding-left:25px;padding-top:5px;"]
forum.clubedohardware.com.br##td[width="20%"]
orapois.com.br##td[width="300"]
infonegocios.tv##td[width="961"][height="60"]
||184.154.142.242/download.aspx?
||187.6.64.32/especialdenatal/home/produto_
||91.116.142.114/iframeNOTICIA2016/
||abc.com.py/banners/
||abc.es/imag/480x030
||ac.viatecla.pt/?
||ads.regiedepub.com^
||ads.sapo.pt^
||ads.terra.es^
||ads.tvtuga.com^
||ads.webme.com^
||ads.xl.pt^
||aeiou.pt/i/pub/casino_
||afiliads.com/bloco
||analytic.337.com^
||andaluciainformacion.es/banners/banners-
||andaluciainformacion.es/publicarpeta/
||animeflv.net/cpm.html
||animeflv.net/cpm728.html
||animeflv.net/cpx.html
||animeflv.net/publi.php
||anunciospatrocinados.com^
||aquiacontece.com.br/_BANNER/
||autobild.es^*/bannertext.png
||azdsl.es/banners_links.
||baboo.com.br/wp-content/uploads/*_envelope
||baixanet.org/popup/
||baixeturbo.org/images/*.gif
||bajateloz.com/images/banner_
||bancomer.com/ts/ts.js
||banners.emol.com^
||banners.todoconsolas.com^
||barra.xl.pt/barra.
||belasmensagens.com.br/posthaus
||bilibio.com.br/fotoBanner/
||blog.br/action/tools/coMesWin
||blogspot.com/-nKUp5KU2cWo/*/Banner.jpg
||bol.com.br/campanha/
||bolsadesantiago.com/*.swf
||bolsantiago.cl/*.swf
||botones.blogalaxia.com/img/blogalaxia1.gif
||bufeo.com^*/banners_
||cadenaser.com/est.pl?
||cadenaser.com/img/promos/
||canal10nicaragua.com^*/files/swf/
||canarias7.es/i/temp/$image
||capitalnews.com.br/system/fotosPub/$object
||cartamaior.com/petrobras/
||cb.cl/NewCBCL/*Banner
||cdnrbs.com.br/js/csUDM_
||celldorado.com/ads/
||certifica.com/cert/hit.dll?
||chacas.com.ar/comercial/
||cinetube.es/descuentos.gif
||cinetube.es/img/banner_
||clb1.com/abp/
||clb1.com/banners/
||cliccabanner.com^
||clicks.abril.com.br^
||clicrbs.com.br/buscape/
||clicrbs.com.br/js/PublicidadeSmartClicRbs.
||compras.periodistadigital.com^
||consolasatope.com/imagenes/CATTX.gif
||criticadigital.com/files/banners
||dci.com.br/Banners
||dealante.com/upload/banners
||dealante.com^*.swf|
||degracaemaisgostoso.org^*/degraca.js
||dejavu.mlapps.com/jm/
||descargardvdrip.com/cpx
||destinia.com^*/banner_
||destinia.com^*/banners/
||diariodeavisos.com/wp-content/*/banner-
||diariodopara.com.br/add/
||diariodopara.com.br/ban-
||diariodopara.com.br/capa.swf
||diariodopara.com.br/img/$object
||diariodopara.com.br/noticiafull_
||diariolibre.com/banners_new/
||diariolibre.com/skinbkdl/
||diarioti.com/sisimg/banners/
||domisfera.com/img/patrocinadores/
||downgratis.com/tvnopc2.js
||ebuddy.com/web_banners/
||economico.pt^*/banners/
||eladelantado.com/imagenes/banner
||elbierzodigital.com/banner/
||elcorreo.com/acceso.php?
||eleximg.com/*/js/ga.js
||elimparcial.es/images/uploads/$object
||elimpulsohost.com/BannerImpulso/
||elmundo.es/banners
||elotrolado.net/styles/estiloeol/imageset/banner_
||elpais.com/uploads/images*/skin_
||elreloj.com/nkads/
||elsoldearica.com/Banner/
||elsolonline.com/archivos/banners/
||enviosinfonegocios.com.ar^*/Banners/
||espirito-indomavel.com/sp.js
||esquemaouro.com.br/arquivos/$script
||estadisticas.lanacion.com.ar^
||estaticos.soitu.es^
||estilourbanord.com^*/banners/
||expressomt.com.br/adminPortal/modBan/
||facua.org/es/$object
||filmannex.com^*/banners/
||filmes-e-seriados.blogspot.com^$popup,third-party
||filmeseroticos.org/anuncio.js
||filmesonlinedublado.tv^*/protetor.js
||finalsports.com.br^*/boo_box.
||flogs.orange.es^
||gazetaesportiva.net/js/banners/
||guiadasemana.com.br/buscape.
||guiadasemana.com.br/dove/banner.
||guiadasemana.com.br/images/tit_pub_
||h.s.sl.pt/pub/$subdocument
||habboin.com^$popup,third-party
||hard-planet.net/wp-content/uploads/$object
||hotelius.com/images/banner_
||hqdesexo.com/banner486.jpg
||idg.com.br^*.gif?rnd=
||ig.com/metricas/metricas.
||igossip.es^$popup,third-party
||imagenar.com/blank.gif
||imagens.climatempo.com.br/site/imagens/bg_
||imageshack.us^*/160x320.
||impreso.elfinanciero.com.mx^
||impulsonegocios.com/resources/original/banners/
||internetcine.com^*/stats?
||itau.com.br/framemail/ITMContab.aspx?
||jmonline.com.br/novo/banner_
||jmonline.com.br/uploads/banners/
||jornalagora.com.br/uploads/banners/
||jornaldigital.com/pub/
||juegosypelis.ws/1_6.gif
||juegosypelis.ws/banners/
||kabum.com.br^*/email/leitura.cgi?
||kboing.com.br/banner-google.htm
||kboing.com.br/banner.htm
||kboing.com.br/brancopubli.htm
||kebarato.es/banners/
||l.yimg.com^*_backgrounnd.$domain=ar.yahoo.com
||labsk.net/banners/
||lajornadanet.com^*/ads/
||lapcra.org/banners/
||laregion.es/imagenes/banners/
||lavanguardia.es/flash/
||lojademulher.com.br/images/
||lusa.pt/banners/$object
||madridpress.com/anuncios/
||magisnet.com/anuncios/
||maisseries.com/popjsmais.js
||manerasdevivir.com/pics/publi/
||marca.com^*/pixel.gif?n=
||mariosegura.com/multimedia/especiales/
||maxima.xl.pt/pubs/credial/
||miapuesta.com^*/newsletter/eblast/
||miau.pt/platform/banners
||ncs.es/banner/
||newpct.com/casinoking.gif
||nicaraguahoy.info/Banners/
||nike.com*/neo.js
||nossanoite.com.br//includebanners/
||noticias.sapo.pt/hit.html
||ojo.com.pe/cargar.php?
||ojo.com.pe/flash/
||olhardireto.com.br/imgsite/banners/
||orange.es/js/logs.js
||orapois.com.br/www/images/
||oxe7.com^*/js/pub.js
||p.lasexta.com^
||papeleriadelasofertas.com/img/banners/
||parceria.americanas.com.br^
||peliculas4.net^$popup,third-party
||perfilunico.com/ads/
||peru.com/noticias/images/bot_*.swf
||planetadeagostini.es/uploads/promociones/
||politraductor.com/images/12
||pontoperdido.com/js/webmessenger.js
||portalms.com.br/banner/
||ppi.terra.com.br^
||pub.lacuerda.net^
||pub.sapo.pt/vast.php
||publi.forum.ad^$image
||pubs.xl.pt^
||punch-fansub.com.br^*-banner.swf
||rankia.com/promo
||revistasgratis.ws/150x115.radon.meuprazer.js
||revistasgratis.ws/amigos/
||revistasgratis.ws/js/*.aumento.inc.js
||revistasgratis.ws/js/*.firstclick.inc.js
||revistasgratis.ws/js/*_alosexo_msn.js
||rpds-download.com/ir/protector.js
||rpds-download.net/scripts/mcfilmes.js
||rubias19.com/trackeo/
||sapo.pt/banner.swf
||sapo.pt/images_banner/
||sapo.pt/pub/zone.html
||sapo.pt/t2.asp$subdocument
||seguro.via-rs.net^
||series-br.com/js/popup_
||sexobis.com.br/banners*.js
||sl.pt/wa.gif?
||sol.pt/flash/banner_
||stats.adn.es^
||stats.folha.com.br^
||stats.milenio.com^
||t26.net/ads/$script
||t26.net/images/anunciantes/
||t26.net/mkt_assets/banners/poringa/$domain=poringa.net
||tabascohoy.com/eid/images/
||tagmanfe.terra.com.br/ShowArea
||telanon.info/wp-content/uploads/$object
||teledeporteshd.com/b/stats?
||terra.com.mx/js/metrics_
||terra.com.mx^*?bstat=
||territoriodigital.com.ar/bannerspanorama/
||territoriodigital.com/bannerspanorama/
||thenews.com.mx/uploads/TBL_BANLAT_
||ticotimes.net/viewcount/
||tiodosfilmes.com/tdfexit.js
||todovenganzas.com/popupnew/
||track.brafiliados.com.br^
||track.es.sitebro.net^
||trincheraonline.com^*/originales/$object
||trivela.com/Banner.aspx?
||tugapirata.org/banners/
||tumejorjuego.com/tmjlayer2.jpg
||tvgente.com/adsover/
||ummilhao.com.br/1mil
||uv.terra.com.br^
||vagos.es/banners/$script
||vitrine.lugarcerto.com.br^
||vitrines.globo.com^
||vooz.com.br/imagem/banners/
||webstats.sapo.pt^
||wigetmedia.com/tags/serieonline.net.js
||wigetmedia.com^*/hispashare.com.js
||xl.pt/images/pub_banner_
||xl.pt/molduras/record/producao/
||yucatan.com.mx/cuponazo
||zahir2.aeiou.pt^
||zahirx.aeiou.pt^
||zap.com.br/parceiros/
||zura.com.br/ztrack.jpeg
donghualife.com#?#aside > div[id^="block"]:has(> .adsbygoogle)
donghualife.com#?#aside > div[id^="block"]:has(> p > .adsbygoogle)
nsctotal.com.br#?##home > div.container:has(> .row h2:contains(Conteúdo Publicitário))
opopular.com.br#?#div[class^="PJLV"][class$="SlotContainer"] div.MainContent > div:has(img[alt="Logo Classi.com.br"])
ahnegao.com.br#?#div[class^="astra-advanced-hook"]:has(> div[id^="M"])
uol.com.br#?#.uolpd-video-inarticle:has(> #uolpd-banner-inarticle:only-child)
orchidcommerce.com#?#.row > div[class]:has(> link#feedzy-rss-feeds-css)
agazeta.com.br#?#body > div.destaque:has(> div#ad_article_destaque)
autobild.es#?#article > aside:has(> div[class^="outbrain_"])
autobild.es#?#div[class^="columns"] > aside[class^="columns_columnAside"]:has(> div[class^="columns_sticky"] > div[class^="ad-slot"])
henaojara.com#?#.widget-area > div[id^="custom_html"]:not(:has(> div.textwidget > iframe[src^="https://discord.com/"]))
jotdown.es#?##sidebar > .widget:has(div[align="center"] > a.gofollow > img)
cofense.com#?#div[data-elementor-type="single-post"] section.elementor-section:has(.elementor-widget-share-buttons)
epe.es#?#.col-md-4 > div.visible-md:has(> div.minHeightLong > div.following-ad-container)
contaspoupanca.pt#?#.et_pb_column:has(> div.et_pb_with_border > div.et_pb_module_inner > h4 > span[class]:contains(Publicidade))
contaspoupanca.pt#?#p:has(> iframe[src^="https://afiliados.wook.pt/"])
plog.com.br#?#.text-center > .panel:has(> .panel-body > ins[data-revive-zoneid])
app.kultivi.com#?#.react-multi-carousel-track > li.react-multi-carousel-item:has(> div.MuiBox-root img[src="https://cdn-kultivi.s3.amazonaws.com/campaigns/1685391938255_desk_CKYcgEWzNV.webp"])
app.kultivi.com#?#main > div.MuiBox-root > div.MuiBox-root:has(> div[align="center"] > div.MuiBox-root:contains(Publicidade))
lance.com.br#?#.main > div > div.container:has(> div.divFrame)
multicanais.fans#?#.textwidget > p:has(> a[href="https://1.1.1.1/"])
otempo.com.br#?#.header > .menu-sites:has(> #adv_topo_header:only-child)
fotogramas.es#?#section > div[class*="css-"]:has(> div[id^="gpt-ad-"])
motor.es#?#.secundaria .divisor:has(~ .hueco-publicidad)
motor.es#?#.secundaria .divisor:has(.robapaginas-portada)
climadobrasil.com.br#?#.wrapper > .block_full:has(> div.cls-publi-height)
eltiempo.pe#?#div:not([class]) > div[style]:has(> small + div ins.adsbygoogle)
ole.com.ar#?#div[class^="sc-"]:has(> div > div[id^="div-gpt-"])
elperiodico.cat#?#.col-md-4 > .hidden-xs:has(> .minHeightLong > .following-ad-container)
computerhoy.com#?#.container-region-aside > aside[class^="region-section"]:has(> div[class^="region-section"] > div[class^="ad-slot"])
hentaikai.com#?#.main > .card-serie:has(> a[href^="https://www.tufos.com.br/"])
superhq.net#?#.post-list-grade > .item-post-grade:has(> .entry-featured-media > a > .selos > .ad)
diariofutrono.cl#?#.row > div#body_right > div.row:has(> script[src^="/base/printadv/"])
tudn.com,univision.com#?#article > div[class] > div[class]:has(> div.OUTBRAIN)
univision.com#?#div:not([class]) > div[class]:has(> div[id^="div-gpt-ad-"])
24-horas.mx#?#.entry-content > div.is-layout-flex:has(> div.is-layout-flow > div.code-block > div[id^="sas_"])
sinembargo.mx#?#body > div.container-fluid:has(> div.row > div.container > div.row > div > div[id^="div-gpt-ad-"])
razon.com.mx#?#body > div[style]:has(> button#stickyad-close)
elsiglodetorreon.com.mx#?#.col-4 > div.bg-light:has(> div.pub)
elnorte.com,reforma.com#?#div[style]:has(> div.mdl > div[id*="orden"])
reforma.com#?##zonanoticias > div[style]:has(> script:contains(grVista))
elnorte.com,reforma.com#?##zonanoticias > div[style]:has(> div#hubAristegui)
elpilon.com.co#?#body > div.text-center:has(> div[id^="div-gpt-ad-"])
eluniversal.com.co#?#.grid-x > div.cell:has(> div[id^="pub-news-"])
estandarte.com#?#aside > div.mod:has(> div.ad-p)
elespectador.com#?#.pure-u-1:has(> div.Widget-fullHeight > div[id^="Personalizado"])
lavoz.com.ar#?#.flex > div.col:has(> div.s-banner-container)
caras.perfil.com##div[style^="width"]:has(> div.ads-space)
novelasligeras.net#?#.wpb-content-wrapper > div.vc_row:has(> div.wpb_column div.wpb_wrapper > a[href="https://novelasligeras.net/index.php/nuestras-suscripciones/"])
lavoz.com.ar#?#.bottom-section > div.container:has(> div.main-content > div > div.banner)
promiedos.com.ar#?##accordian > ul > :has(a[href^="publicidad.php?"])
thecourier.com.au,thesenior.com.au#?##story-body > div.relative > div.items-center:has(> button > span:contains(Share))
buscape.com.br#?#div[class^="Hits_Wrapper__"] > div[aria-labelledby^="product-card-"]:has(> a[target="_blank"])
mundodeportivo.com#?#li > ul > li.module-box:has(> div.modulo-container > span.ad-unit)
elmundo.es#?#main > div.ue-l-article:has(> div.ue-l-article__inner > div.ue-l-article__row > div.ue-l-article__main-column-extra > aside > div[id^="taboola-"])
marca.com#?#main > div.ue-l-article + div.ue-l-article:has(> div.ue-l-article__inner > div.ue-l-article__row > div.ue-l-article__secondary-column-extra > div.ue-l-article__secondary-column-item > div.ue-c-ad)
marca.com#?#main > div.ue-l-article:has(> div.ue-l-article__inner > div.ue-l-article__mega > div.ue-c-ad)
marca.com#?#main > div.ue-l-article:has(> div.ue-l-article__inner > div.ue-l-article__row > div.ue-l-article__main-column-extra div[id^="taboola"])
marca.com#?#main > div.ue-l-cover-grid[data-flex-name="row_headline"]:has(> div.ue-l-cover-grid__inner > div.ue-l-cover-grid__body > div.ue-l-cover-grid__block > div.ue-l-cover-grid__row > div.ue-l-cover-grid__unit:only-child > div.ue-c-ad)
vagalume.com.br#?#.newsList > li:has(> div.OUTBRAIN)
clubedohardware.com.br#?##ipsLayout_contentArea ins.adsbygoogle:upward(1)
clubedohardware.com.br#?#.ipsBox:has(> center > ins.adsbygoogle)
minhaconexao.com.br#?#section > div > div> div[class] > div[class][id] > div[id^="div-gpt-"]:upward(2)
inforchannel.com.br#?#.col-md-4 > .height-item:has(> .img-fluid > iframe[src^="https://banners.inforchannel.com.br/"])
inforchannel.com.br#?#.sidebar-secondary > .height-item:has(> .img-fluid > iframe[src^="https://banners.inforchannel.com.br/"])
inforchannel.com.br#?##main-content_home > div > .height-size-sidebar:has(> .img-fluid > iframe[src^="https://banners.inforchannel.com.br/"])
odigital.sapo.pt#?#div[id^="odigi"] > div.odigi-adlabel:upward(1)
taurusfansub.com#?#.body-wrap > .c-top-sidebar:not(:has(.widget-manga-popular-slider))
gauchazh.clicrbs.com.br#?#.gzh-content > section:has(> div.l-row > div.ads-area)
climaaovivo.com.br#?#.MuiGrid-root > div[class^="style__Container"]:has(> span:contains(Publicidade))
climaaovivo.com.br#?#.MuiGrid-root > div[style] >div[class^="style__Container-sc-"]:has(> span.vertical:contains(Publicidade))
genshinpro.com.br#?#.vc_col-sm-4 .wpb_wrapper > .sc_content_bordered:has(a[href="http://exitl.ag/genshinpro"])
mangapt.com#?#div[id^="block-"]:has(> .widget__inner > .widget-content > .adsbygoogle)
mangapt.com#?#div[id^="custom_html-"]:has(> .widget__inner > .widget-content > .textwidget > .adsbygoogle)
adrenaline.com.br#?#.main > div[style*="height: 250px;"]
adrenaline.com.br#?#.text-center > small:contains(/Publicidade|publicidade/)
estadao.com.br#?#div[class^="styles__Container-"]:has(> p.ads-placeholder-label)
obutecodanet.ig.com.br#?#.elementor-section-wrap > .elementor-section:has(:is(div[id^="ad_"][id*="_bb_"], div[id^="ad_"][id$="_sticky"]))
obutecodanet.ig.com.br#?#.elementor-section-wrap > .elementor-section .elementor-element-populated > .elementor-element.elementor-widget-html:has(> .elementor-widget-container > div[id^="ad_"][id*="mrec_"])
animesonlinep.com#?##sidebarGeral > .sidebar:has(> #tituloSidebar > center:contains(Patrocinadores))
shoptime.com.br,submarino.com.br#?#div[class^="aspect-ratio"] > div[id^="div-gpt-"]:upward(1)
minhaconexao.com.br#?#body > section[class^="c"]:has(> div[class] > div[class] > div[id] > div[style^="height:"])
hugogloss.uol.com.br#?#.posts-related-content > .box:has(> div[id^="bloco-native"])
arthurscan.xyz,knightnoscanlation.com#?##main-sidebar > .widget_text:has(.adsbygoogle)
estadao.com.br#?#.wrap-content .row > div[class^="col-"]:has(> div.wrap-publicidade)
animesonehd.xyz#?#.container > div[style$="z-index:9999999999999999999!important;"]:upward(1)
universoformulas.com#?#.entry-content > p:has(> span:contains(ANUNCIOS))
sub100.com.br#?#.container > div[class]:has(> div.separator:contains(Publicidade))
universoformulas.com#?#h4.heading:contains(QUIZÁS TAMBIÉN)
marca.com#?#.ue-l-article__secondary-column > div.ue-l-article__secondary-column-item:has(> div.ue-c-ad)
marca.com#?#.news-item > div.row-layout:has(> aside > div[id^="taboola-"])
hackstore.la#?#.block-container > #widget > .movie-thumbnail:has(> .movie-back > h3 > :is(a[href$="/netflix-premium/"], a[href$="/spotify-premium/"], a[title="Disney Premium"]))
atomixhq.*#?#.featured-slides > li.slide:not([id]):has(a[href^="https://startgaming.net/"])
hojeemdia.com.br#?#div[class^="Block__Component-"]:has(> label:contains(/^Publicidade$/))
reforma.com#?#div[style^="height:250px;"]:has(> div > div#registroNuevoNL)
cronista.com#?#.section > .block > .zone.zleft.z33ml:has(> .banner)
reforma.com#?##contenido div[style^="height:250px;"]:has(script:contains(grAnuncio.DisplayAds) + div)
separarensilabas.com#?#body > center > nav ~ center:has(> div#antiBannersGigantes)
observatoriodatv.uol.com.br#?#.elementor-section-wrap > section.elementor-section-boxed > .elementor-column-gap-default > .elementor-row > .elementor-top-column:has(> .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > div[id^="banner-native-lateral-"])
elperiodico.com#?#.row-center > div.col-sm-4:has(> div.following-ad-container)
timeout.com#?#section > div[class]:has(> div[class^="_content_"] > a.social_share__facebook)
anitube.cx#?#.well.z-body > .ad-title:upward(1)
telesintese.com.br#?#.theiaStickySidebar > div.widget_text:has(script[src^="https://mkt.momentoeditorial.com.br/revive/www/delivery/ajs.php?zoneid="])
telesintese.com.br#?#.theiaStickySidebar > div.widget_text:has(script[src^="https://pagead2.googlesyndication.com/"])
naointendo.com.br#?#.sidebar > .sidebar-item[style] > iframe[src^="https://assets.naointendo.com.br/banners/"]:upward(1)
homepedia.com.br#$?#.slick-track > .slick-slide > a[href*="?utm_campaign=homepedia:banner"]:upward(1) { remove: true; }
porno-japones.top#?#.row > div.order-1:has(> div.video-block-happy)
folha.uol.com.br#?#.col-fixed--md-300 > div.row > div.col:has(> div > a[href^="https://prosas.com.br/"])
mundodonghua.com#?#.sm-row > div.row > center > ins.adsbygoogle:upward(div.row)
definicionabc.com#?#.adsbygoogle:upward(1)
hardware.com.br#$?#.hd-ad--background { remove: true; }
noticiasdatv.uol.com.br#?#.automaticas-canais > .leia_tambem_principal > .native_wrapper:upward(1)
noticiasdatv.uol.com.br#?#.automaticas-canais > .justify-content-center > .banner_wrapper:upward(1)
palaygo.site#?#aside#secondary > .widget > h2.widget-title:contains(Publicidad):upward(1)
palaygo.site#?#.web-log-post-grid > .post > .post-wrapper > .post-content-wrapper > .entry-content > script:first-child:contains(ad_idzone):upward(4)
paisdelosjuegos.com.co,paisdelosjuegos.com.pe#?#div[class*=" "] > div[class] > div[style^="height:"] + div[class]:contains(/^Anuncio$/):upward(2)
bibliatodo.com#?#fieldset:has(> legend:contains(Advertisement))
bibliatodo.com#?#.columns.ends > div.row:contains(Advertisement)
aulafacil.com#?#.row > div.d-none:has(> div.adsense-pineado ins.adsbygoogle)
aulafacil.com#?#.col > div.row:has(> div > div.menu-col-abajo)
lanacion.com.ar#?#.lay-sidebar > .sidebar__aside > .com-banner:upward(1)
lanacion.com.ar#?#.lay-sidebar > .sidebar__aside > .mod-banner:only-child:upward(1)
fdr.com.br#?#.code-block:has(> div[id^="Position_Content"])
rojadirectatv.pro#?#div.encabezados:has(> h3:contains(Publicidad))
pirlotvonlinehd.com#?#div.encabezados:has(> h2:contains(PUBLICIDAD))
noticialdia.com#?#ul[class^="widgets"] > li.widget:has(> div.textwidget ins.adsbygoogle)
primedeportes.es#?#p[align="center"] > font:contains(/^advertising/)
forum.lfspro.net#?##ipsLayout_mainArea > section:has(> ol > li > h2 > a:contains(LFSPro Ads))
forum.lfspro.net#?#.ipsList_reset > li.ipsWidget:has(> h3:contains(LFSPro Ads))
forum.lfspro.net#?##ipsLayout_mainArea > .ipsBox:has(> h2 > a:contains(LFSPro Ads))
forum.lfspro.net#?##elPostFeed > form > center:has(> ins.adsbygoogle)
deportealdia.live#?##secondary section.widget_text:has(> h3.widget-title:contains(Publicidad))
globaltvapp.net#?#.dmPhotoGalleryResp .photogallery-column > .photoGalleryThumbs a[href="https://calentadores.shoptena.com/"]:upward(.photogallery-column)
verdragonball.online#?#.main-posts > .general-content > div[id^="container-ac"]:only-child:upward(1)
pornolandia.xxx#?#a[href^="https://www.pornolandia.xxx/webmaster/ref/"]:upward(1)
hentaiporno.xxx#?#.sidebar-content-inner > div.widget:has(> div.widget_text > div.textwidget > iframe[name^="spot_id"])
hentaiporno.xxx#?#.sidebar-content-inner > div.widget:has(> div.widget-item-wrap > h2.widget-title > span.title-wrap:contains(Publicidad))
descargaspcpro.net#?##sidebarbtop > div.widget:has(> div.widget-content > ins.adsbygoogle)
setelagoas.com.br#?#[id^="gk"] > div[class^="box"][class$="nomargin"]:has(> .content:only-child > .bannergroup:only-child)
forocoches.com#?#td[align="middle"] > div[align="center"]:has(> table[width] div[id^="optidigital-adslot-"])
verepeliculas.com#?#.player_nav > ul[class] > li:has(> a[href]:contains(Ads))
mangatigre.com#?#.chapter-content div.bloc:has(> div[id^="gpt-"])
animetw.net#?#.container > h2.section__header:has(> span:contains(/^ANUNCIOS$/))
forum.politz.com.br#?#.p-sidebar-inner > div.block:has(> div > h3:contains(/Patrocínio|Publicidade/))
forum.politz.com.br#?#.p-body-inner > div.block:has(> div > h3:contains(/Patrocínio|Publicidade/))
fcporto.ws#?#.uix_sidebarInner div.widget_text:has(> div.widget_text h3:contains(Publicidade))
economiasc.com#?#.sidebar > div.widget:has(> div.section-heading > span:contains(Publicidade))
correiobraziliense.com.br#?#div[data-tb-region-item]:has(> div.news-box > a > span > strong > em:contains(conteúdo patrocinado))
correiobraziliense.com.br#?#div[class="row mb-25"] > div.col-md-12:has(> header.pb-15 > h3 > a[href="https://www.correiobraziliense.com.br/especiais/"])
atresplayer.com#?##root main[class] > div[class] > section[class] + aside[class]:has(> div[class] > p[class]:contains(PUBLICIDAD))
bcnoticias.com.br#?#.theiaStickySidebar > div.widget:has(> div.textwidget > div[align="center"] a[href])
seriesdonghua.com,mundodonghua.com#?#.container > .col-md-3 > .row.mt-10:has(> .adsbygoogle)
seriesdonghua.com,mundodonghua.com#?#.content-player > .mb-10:has(> .adsbygoogle)
seriesdonghua.com,mundodonghua.com#?#.container > .col-md-9 > .mt-10:has(> .adsbygoogle)
seriesdonghua.com,mundodonghua.com#?#.container > .col-md-9 > .mb-10:has(> .adsbygoogle)
seriesdonghua.com,mundodonghua.com#?#.container > .row > .col-md-8 > .mb-10:has(> .adsbygoogle)
seriesdonghua.com,mundodonghua.com#?#.container > .row > .col-md-4 > .row.mt-10:has(> center > .adsbygoogle)
dol.com.br#?#.mw-flex:has(> div[id^="id_ad_"])
cokitos.com#?#.theiaStickySidebar > div.widget_text:has(> div.textwidget ins.adsbygoogle)
foro.elhacker.net#?#body > table:has(> tbody > tr > td > div.publi_sponsor)
muchohentai.com#$?##content > div.type-post > div[id^="_"] { remove: true; }
animesonline.cz#?#.well.z-body:has(> .ad-title)
libertaddigital.com,libremercado.com#?#.interior > section.conpubli:has(> div > .OUTBRAIN)
modagamers.com#?#.sidebar aside.widget:has(> div.textwidget > ins.adsbygoogle)
terra.com.br#?#.table-related-content-new:has(> #related-bellow-news > .taboola-placeholder)
animeflv.net#?#.Container section.WdgtCn:has(> center > a[href="https://www.patreon.com/somoskudasai"] > img)
animeflv.net#?#.Container div.WdgtCn:has(> div[style] > center > script[src^="//server.cpmstar.com/"])
animeflv.net#?#.Container section.WdgtCn:has(> .OUTBRAIN)
sexomoda.com#?#.column.middle > article:has(> span#ze)
paginasiete.bo#?##main-content > .region > .fila > .container > .row[id] > .col-md-4.p33:has(> .cleft:only-child > .bnn > div[id^="div-gpt-ad"])
r7.com#?#.column > div > div[class="box rw flex show-box-flex"]:has(> div > div.proporcinal4columns a[href^="http://pubads.g.doubleclick.net/"])
subdivx.com#?#td[style="padding-right:15px;"] > font:contains(/^Espacio publicitario$/)
diariodoiguacu.com.br#?##td-outer-wrap > div[class="vc_row wpb_row td-pb-row"] > div.td-pb-border-top:has(> div > div[style$="max-width: 1188px; max-height: 150px;"])
andro4all.com#?#.sidebar > #fixed_bar > .sidebar_item:has(> h3:contains(/^Publicidad$/))
tuasaude.com#$?#.ad { remove: true; }
tudogostoso.com.br#?#.tdg-main > div[class]:has(> div.ads-super-footer)
imperiodefamosas.com#?#.col-md-8 > section > div.row > div[class^="col-"]:has(> div.grid-item > p > a[rel="nofollow"] > img)
jornaldestaquebaixada.com#?#.sidebar > .widget:has(> div > .adsbygoogle)
nsctotal.com.br#?#.StyledDiv > .Title:contains(publicidade)
meupc.net#?#.listagem-content > .table > tbody > tr > .table-responsive-fullwidth > .th-wrap > .is-vcentered > span.is-warning:contains(Anúncio):upward(4)
em.com.br#?#div[class*="col-"]:has(> div.ads)
gamersboard.com.br#?#.ipsList_reset > .ipsWidget.ipsWidget_horizontal[data-blocktitle="Custom Blocks"]:has(> h3.ipsType_reset:contains(Publicidade))
tudotv.tv#?##Lateral > .Titulo:contains(Publicidade)
superanimes.site#?##lateral > .conteudoBox:has(> .sideBarAds)
superanimes.site#?##lateral > .conteudoBox:has(> .adsLateral)
sakuraanimes.com#?#.module-surround > div:contains(Publicidade SA)
vos.lavoz.com.ar#?#.container > div.columnas > section > div.panel-instanciado > div.panel:has(> div.banner)
rojadirectaonlinetv.com,extremotvplay.com#?#.sidebar > .encabezados:has(>h2:contains(NOTICIAS SUGERIDAS))
aovivonatv.com#?#.Conteudo > .Lateral > .Titulo:contains(Publicidade)
extremotv.info#?#.sidebar > .encabezados > h3:contains(Publicidad)
tv-porinternet.com#?#.widget-area-right > aside.widget_custom_html:has(> div.textwidget > center:contains(Publicidad))
seriesgato.com#?#.TPlayerNv > li.Button:has(> span:contains(Publicidad))
! https://github.com/AdguardTeam/AdguardFilters/issues/24801
yahoo.com#?#ul[class^="Mb(0)"] > li.js-stream-content:has(> div > a[rel="nofollow noopener noreferrer"]+div:contains(Patrocinado))
!
! START: uol.com.br
uol.com.br##.box-publicidade-topo
uol.com.br##.publicidade-content
uol.com.br##.pub_insert_content
uol.com.br###bloco-native-rodape
uol.com.br##.pub_insert_content_titulo
uol.com.br##.bannersticky-base
jovempan.uol.com.br##.banner-container
jovempan.uol.com.br##.taboola-middle-text
escolakids.uol.com.br##.interna-publicidade-topo
uol.com.br##.wrapper-banner
uol.com.br###uoltm-float-push
mundoeducacao.bol.uol.com.br###conteudo-texto > div > div[style="height:250px; width:300px;"]
mundoeducacao.bol.uol.com.br##div[class^="pub_insert_content"]
mundoeducacao.bol.uol.com.br###bloco-native-rodape
mundoeducacao.bol.uol.com.br###area_flutuante_1
eleicoes.uol.com.br##.banner-area
uol.com.br##.mod-publieditorial
uol.com.br##.label-publicidade::before
folha.uol.com.br##.row.drops > .livraria
folha.uol.com.br##.ads-livrariadafolha
uol.com.br##.bannersticky-top-container
uol.com.br##.lista-ecommerce
uol.com.br###banner-stick
uol.com.br###ad-120x600-other
uol.com.br###banner-120x240
uol.com.br###banner-120x240-area
uol.com.br###banner-125x125
uol.com.br###banner-125x125-2
uol.com.br###banner-125x125-2-area
uol.com.br###banner-125x125-area
uol.com.br###banner-155x260-area
uol.com.br###banner-200x446-6-Area
uol.com.br###banner-200x78-3-Area
uol.com.br###banner-300x250-12-Area
uol.com.br###banner-300x250-5-Area
uol.com.br###banner-300x250-area
uol.com.br###banner-468x60-1-area
uol.com.br###banner-468x60-area
uol.com.br###banner-608x90-area
uol.com.br###banner-728x90-area
uol.com.br###banner-top
uol.com.br###banners120x36
bol.uol.com.br###bxShoppingLateral
folha.uol.com.br###classified
uol.com.br###corpoEsquerdaEcommerce
uol.com.br###divShoppingMod1Canvas
uol.com.br###folha_shopping
folha.uol.com.br###fourth_column[style="display: block;"]
bol.uol.com.br###game_super
uol.com.br###marketplaceTelecom
uol.com.br###mod-shopping
uol.com.br###moduloBanner728x90
uol.com.br###nbusiness
uol.com.br###pub_noticia
uol.com.br###publicidade_topo
uol.com.br###shop-canhoto
uol.com.br###shop2
uol.com.br###shopnow-coldir
bol.uol.com.br###super_top
uol.com.br###to
folha.uol.com.br###todaOferta
maputo.co.mz,uol.com.br###top-banner
idgnow.uol.com.br###viewlet-blog
uol.com.br##.banner_topo
folha.uol.com.br##.bookstore
uol.com.br##.cyrela_wrap
uol.com.br##.google
uol.com.br##.mod-servicos-box
uol.com.br##.mod-uol-host
uol.com.br##div[style="height: 90px;"]
ultradownloads.uol.com.br##tr[height="90"]
uol.com.br##ul.produtos
||uol.com.br/flash/banner_
||uol.com.br/pub_
||uol.com.br/upload/banner/
||uol.com.br/*/banners/
||uol.com.br/*/sortear_
! END: uol.com.br
!
! https://github.com/AdguardTeam/AdguardFilters/issues/165937
! Rule $referrerpolicy is required for apps, becasue source of vast.js is not detected and due to this it's not blocked
! https://github.com/AdguardTeam/AdguardFilters/issues/38330
! https://github.com/AdguardTeam/AdguardFilters/issues/30298
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_safari, ext_ublock)
lctutors.com.br##.adsbygoogle
! https://github.com/AdguardTeam/AdguardFilters/issues/28150
! https://github.com/AdguardTeam/AdguardFilters/issues/28092
! https://github.com/AdguardTeam/AdguardFilters/issues/27987
! https://github.com/AdguardTeam/AdguardFilters/issues/27351
! https://github.com/AdguardTeam/AdguardFilters/issues/23541
! https://github.com/AdguardTeam/AdguardFilters/issues/18340
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
2cheat.net##.adsbygoogle
! https://github.com/AdguardTeam/AdguardFilters/issues/17298
! https://github.com/AdguardTeam/AdguardFilters/issues/15967
!+ PLATFORM(ext_opera, ios, ext_android_cb, ext_ublock)
techmoviles.com##.adsbygoogle
! https://github.com/AdguardTeam/AdguardFilters/issues/15993
!+ PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
urlcero.com##.banner
! urlcloud.us
!+ NOT_OPTIMIZED PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
urlcloud.us##.adsbygoogle
!+ NOT_OPTIMIZED PLATFORM(ext_ff, ext_opera, ios, ext_android_cb, ext_ublock)
urlcloud.us##.banner
!
! Special rules for AdGuard websites' test pages. The only purpose of these
! rules is to make test pages work so that users could verify that AdGuard
! is properly working.
!
!+ NOT_OPTIMIZED
adguard.info,adguard.com,adguard.app##.hello_from_adguard_spanish
!
!---------------------------------------------------------------------------!
!-------------- Fixing filtration errors (false-positive) ------------------!
!---------------------------------------------------------------------------!
!
! This section contains the list of rules that fix incorrect blocking. Rules must be domain-specific.
!
! Good: example.org#@#.ad
! Bad:  @@||example.org^$stealth (should be in AdGuard Base - allowlist_stealth.txt)
!
!
! https://github.com/AdguardTeam/AdguardFilters/issues/165603
@@||lms.ev.org.br/mpls/WebAds/
! https://github.com/AdguardTeam/AdguardFilters/issues/166457
@@||cmp.inmobi.com/choice/*/choice.js$domain=tviplayer.iol.pt
@@||cmp.inmobi.com/tcfv2/*.js$domain=tviplayer.iol.pt
@@||cmp.inmobi.com/*/cmp-list.json$domain=tviplayer.iol.pt
@@||cmp.inmobi.com/*/vendor-list-*.json$domain=tviplayer.iol.pt
! https://github.com/AdguardTeam/AdguardFilters/issues/166288
@@||cmp.inmobi.com/choice/*/choice.js$domain=beachcam.meo.pt
@@||cmp.inmobi.com/tcfv2/*.js$domain=beachcam.meo.pt
@@||cmp.inmobi.com/*/vendor-list-*.json$domain=beachcam.meo.pt
! https://github.com/AdguardTeam/AdguardFilters/issues/164086
okdiario.com#@#.ad-slot-ph
! https://github.com/AdguardTeam/AdguardFilters/issues/162827
@@||bradmax.com/client/embed-player/$subdocument,domain=teletica.com
! https://github.com/AdguardTeam/AdguardFilters/issues/162781
@@||geometriaanalitica.info/tardisrocinante/screx.js
@@||geometriaanalitica.info/tardisrocinante/lazy_load.js
@@||geometriaanalitica.info/tardisrocinante/css_onload.js
! https://github.com/uBlockOrigin/uAssets/issues/19849
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$domain=3djuegos.com
@@||securepubads.g.doubleclick.net/pagead/managed/js/gpt/*/pubads_impl.js$domain=3djuegos.com
@@||securepubads.g.doubleclick.net/gampad/ads$xmlhttprequest,domain=3djuegos.com
@@||cdn.lib.getjad.io/library/$script,domain=3djuegos.com
@@||cdn.lib.getjad.io/prebid/$script,domain=3djuegos.com
3djuegos.com#@#div[id^="div-gpt-"]
3djuegos.com#@#.ad-box:not(#ad-banner)
3djuegos.com#@#.ad-lat2
! https://github.com/AdguardTeam/AdguardFilters/issues/161245
cozinhandofitness.com#@##ads2
! https://github.com/AdguardTeam/AdguardFilters/issues/160254
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=descargaseriestv.com
||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,redirect=googlesyndication.com/adsbygoogle.js,important,domain=descargaseriestv.com
@@||descargaseriestv.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/153857
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=mdstrm.com
! https://github.com/AdguardTeam/AdguardFilters/issues/146455
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,domain=niusdiario.es
! https://github.com/AdguardTeam/AdguardFilters/issues/145203
! https://github.com/uBlockOrigin/uAssets/issues/9807#issuecomment-1450692386
@@||static.adsafeprotected.com/iasPET.1.js$domain=independentespanol.com
@@||permutive.app/*web.js$domain=independentespanol.com
@@||cdn.permutive.com^$xmlhttprequest,domain=independentespanol.com
@@||api.permutive.com^$xmlhttprequest,domain=independentespanol.com
@@||pub.pixels.ai/wrap-independent-no-prebid-lib.js$domain=independentespanol.com
! https://github.com/AdguardTeam/AdguardFilters/issues/135573
nebrija.com#@##publicidad
@@||nebrija.com/images/cabeceras/titulaciones/fast/*-publicidad-*.webp
! https://github.com/AdguardTeam/AdguardFilters/issues/131251
elsuperfullhd.com#@#.vertical-ads
! https://github.com/AdguardTeam/AdguardFilters/issues/117538
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=noop.js,domain=r7.com
! https://github.com/AdguardTeam/AdguardFilters/issues/116121
flatout.com.br#@#.penci-google-adsense
flatout.com.br#@#.penci_single_ad_before_content
! https://github.com/uBlockOrigin/uAssets/issues/12701
@@||ecuavisa.com/widget/*/catalog/mm_publicidad_$xmlhttprequest,~third-party
! https://github.com/AdguardTeam/AdguardFilters/issues/112205
oantagonista.uol.com.br#@#div[id^="div-gpt-"]
! https://github.com/AdguardTeam/AdguardFilters/issues/103893
@@||movistarplus.es/js/yomvi/player/publi.js
! https://github.com/AdguardTeam/AdguardFilters/issues/95508
||securepubads.g.doubleclick.net/tag/js/gpt.js$script,redirect=googletagservices_gpt.js,domain=jn.pt
! https://github.com/AdguardTeam/AdguardFilters/issues/92632
@@||jangboja.godohosting.com/shop/external/fix/IMG_BANNER/
! https://github.com/AdguardTeam/AdguardFilters/issues/91363
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai.js$domain=app.prende.tv
@@||pubads.g.doubleclick.net/ssai/event/*/streams$domain=app.prende.tv
@@||pubads.g.doubleclick.net/ondemand/hls/content/*/vid/*/streams$domain=app.prende.tv
@@||dice-live-us.akamaized.net/ads-*/*/hls/live/$domain=app.prende.tv
@@||dice-live-us.akamaized.net/ads-*/*/hls/*/event/*/master.m3u8$domain=app.prende.tv
@@||dve-streams.akamaized.net/ads-*/*/dio/$domain=app.prende.tv
@@||dve-streams.akamaized.net/ads-*/*/audio/$domain=app.prende.tv
@@||dve-streams.akamaized.net/ads-*/*/video/$domain=app.prende.tv
@@||dve-streams.akamaized.net/ads-*/*/ondemand/hls/content/*/master.m3u8$domain=app.prende.tv
! https://github.com/AdguardTeam/AdguardFilters/issues/88435
@@||files.windelivery-services.com/banners/$domain=fostershollywood.es
! https://github.com/AdguardTeam/AdguardFilters/issues/87691
@@||portal-algartelecom-files.s3.amazonaws.com/banners/imgs/$domain=algartelecom.com.br
! https://github.com/AdguardTeam/AdguardFilters/issues/73962
@@||adhandler.kissfmradio.cires21.com/get_link?url=$domain=hitfm.es
! https://github.com/AdguardTeam/AdguardFilters/issues/71530
@@||sunmedia.tv/integrations/*.js$domain=vandal.elespanol.com
@@||static.sunmedia.tv/AdBlockDetection/adblockDetector.min.js*iframevideo$domain=vandal.elespanol.com
!
! https://github.com/uBlockOrigin/uAssets/issues/8471
@@.m3u8$xmlhttprequest,domain=videos.memedeportes.com|videos.cuantarazon.com|videos.vistoenlasredes.com|videos.vrutal.com|videos.humorenserie.com
@@||imasdk.googleapis.com/js/sdkloader/ima3_debug.js$script,domain=videos.memedeportes.com|videos.cuantarazon.com|videos.vistoenlasredes.com|videos.vrutal.com|videos.humorenserie.com
@@||gvt1.com/videoplayback/$media,domain=videos.memedeportes.com|videos.cuantarazon.com|videos.vistoenlasredes.com|videos.vrutal.com|videos.humorenserie.com
@@||tpc.googlesyndication.com^$script,stylesheet,domain=videos.memedeportes.com|videos.cuantarazon.com|videos.vistoenlasredes.com|videos.vrutal.com|videos.humorenserie.com
@@||tpc.googlesyndication.com/pageadimg/imgad$image,media,domain=videos.memedeportes.com|videos.cuantarazon.com|videos.vistoenlasredes.com|videos.vrutal.com|videos.humorenserie.com
@@||tpc.googlesyndication.com/pimgad/$image,media,domain=videos.memedeportes.com|videos.cuantarazon.com|videos.vistoenlasredes.com|videos.vrutal.com|videos.humorenserie.com
@@||googletagservices.com/tag/js/gpt.js$domain=videos.memedeportes.com|videos.cuantarazon.com|videos.vistoenlasredes.com|videos.vrutal.com|videos.humorenserie.com
@@||securepubads.g.doubleclick.net/gpt/pubads_impl_*.js$domain=videos.memedeportes.com|videos.cuantarazon.com|videos.vistoenlasredes.com|videos.vrutal.com|videos.humorenserie.com
@@||securepubads.g.doubleclick.net/gampad/ads?gdfp_req=1$domain=videos.memedeportes.com|videos.cuantarazon.com|videos.vistoenlasredes.com|videos.vrutal.com|videos.humorenserie.com
@@||ads.ampliffy.com/gampad/$domain=videos.memedeportes.com|videos.cuantarazon.com|videos.vistoenlasredes.com|videos.vrutal.com|videos.humorenserie.com
!#safari_cb_affinity(general,privacy)
@@||securepubads.g.doubleclick.net/tag/js/gpt.js$domain=videos.memedeportes.com|videos.cuantarazon.com|videos.vistoenlasredes.com|videos.vrutal.com|videos.humorenserie.com
!#safari_cb_affinity
!
! https://github.com/AdguardTeam/AdguardFilters/issues/163936
! https://github.com/AdguardTeam/AdguardFilters/issues/89176
||securepubads.g.doubleclick.net/tag/js/gpt.js$script,redirect=googletagservices_gpt.js,domain=suamusica.com.br
||imasdk.googleapis.com/js/sdkloader/ima3.js$script,redirect=google-ima.js,domain=suamusica.com.br
! https://github.com/AdguardTeam/AdguardFilters/issues/87302
gczs.gldjc.com#@#.bannerBox
! https://github.com/uBlockOrigin/uAssets/issues/9405
brasilescola.uol.com.br#@#.banner
! https://github.com/AdguardTeam/AdguardFilters/issues/79885
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=esradio.libertaddigital.com
! https://github.com/AdguardTeam/AdguardFilters/issues/71230
@@||fadadosexo.com/wp-content/uploads/useful_banner_manager_banners/*.jpg
! https://github.com/AdguardTeam/AdguardFilters/issues/70804
ordescargas.xyz#@#[href^="http://raboninco.com/"]
! https://github.com/AdguardTeam/AdguardFilters/issues/68257
programasdixguel.blogspot.com#@#[href^="http://raboninco.com/"]
! https://github.com/AdguardTeam/AdguardFilters/issues/68098
@@||securepubads.g.doubleclick.net/gpt/pubads_impl_*.js$domain=downdetector.com.br
@@||googletagservices.com/tag/js/gpt.js$domain=downdetector.com.br
||googletagservices.com/tag/js/gpt.js$script,redirect=googletagservices_gpt.js,domain=downdetector.com.br,important
! https://github.com/AdguardTeam/AdguardFilters/issues/67969
crazygamer.epizy.com#@#[href^="http://raboninco.com/"]
! https://github.com/AdguardTeam/AdguardFilters/issues/67827
@@||googletagmanager.com/gtm.js$domain=odia.ig.com.br
! https://github.com/AdguardTeam/AdguardFilters/issues/67388
olx.com.br#@#div[class^="AdCard_"]
! https://github.com/AdguardTeam/AdguardFilters/issues/65425
@@||img.wikicharlie.cl^$~third-party
! https://github.com/AdguardTeam/AdguardFilters/issues/63720
@@||laprovincia.es/elementosWeb/*/multimedia/player/videojs-contrib-ads/videojs.ads.min.js
! https://github.com/AdguardTeam/AdguardFilters/issues/62524
charmingescortsamsterdam.com#@#.bannerBox
! https://github.com/AdguardTeam/AdguardFilters/issues/61205
@@||sascdn.com/diff/video/current/libs/js/controller.js$domain=ubeat.tv
! https://github.com/AdguardTeam/AdguardFilters/issues/59034
flatout.com.br#@#div[id^="div-gpt-ad"]
! https://github.com/AdguardTeam/AdguardFilters/issues/59006
vvale.com.br#@#.publicidade
! https://github.com/AdguardTeam/AdguardFilters/issues/56398
@@||poki.com/assets/client.*-exp-prebid.*.js$domain=paisdelosjuegos.es
! https://github.com/AdguardTeam/AdguardFilters/issues/51457
@@||movilzona.es/app/themes/mykonos-child/assets/js/stickyAds.min.js
! https://github.com/AdguardTeam/AdguardFilters/issues/50188
@@||ver.movistarplus.es/js/yomvi/scripts/publi.js$domain=ver.movistarplus.es
! https://github.com/AdguardTeam/AdguardFilters/issues/49849
@@||adservice.google.com.ua^$domain=ucicinemas.pt
@@||securepubads.g.doubleclick.net/gpt/pubads_impl_*.js$domain=ucicinemas.pt
@@||googletagservices.com/tag/js/gpt.js$domain=ucicinemas.pt
! https://github.com/AdguardTeam/AdguardFilters/issues/50157
@@||jwpcdn.com/player/plugins/vast/*/vast.js$domain=doramasmp4.com
! https://github.com/AdguardTeam/AdguardFilters/issues/47494
! https://github.com/AdguardTeam/AdguardFilters/issues/46603
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=13.cl
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai.js$domain=13.cl
@@||pubads.g.doubleclick.net/ssai/event/*/streams$domain=13.cl
! rapidotorrents.net - fixes incorrectly blocked images
@@||i.imgur.com^$domain=rapidotorrents.net
! https://github.com/AdguardTeam/AdguardFilters/issues/44371
@@||glbimg.com/*/300x250/smart/$domain=revistamonet.globo.com
! https://github.com/AdguardTeam/AdguardFilters/issues/43603
@@||hentaihd.xyz/repro/ads/ads.php
! https://github.com/AdguardTeam/AdguardFilters/issues/37782
@@||imasdk.googleapis.com/js/sdkloader/outstream.js$domain=mundoprimaria.com
! https://forum.adguard.com/index.php?threads/adslzone-net-breakage.33430/
@@||disqus.com/count-data.js^
@@||disqus.com/embed/comments^
@@||adslzone.net/20*/*/*/*/
! https://github.com/AdguardTeam/AdguardFilters/issues/42389
@@||images.vertele.eldiario.es/*/noticias/
! https://github.com/AdguardTeam/AdguardFilters/issues/25654
@@||pubads.g.doubleclick.net/ssai/event/*/streams$domain=mitele.es
@@||imasdk.googleapis.com/js/sdkloader/ima3_dai.js$domain=mitele.es
! https://github.com/AdguardTeam/AdguardFilters/issues/21452
@@||videoplaza.tv/proxy/distributor/*Atresplayer$domain=atresplayer.com
@@||statics.atresmedia.com/atresplayer/assets/web/videoplaza/advertisement.js$domain=atresplayer.com
! https://github.com/AdguardTeam/AdguardFilters/issues/19041
@@||hispasonic.com/index.php?controller=
! https://github.com/AdguardTeam/AdguardFilters/issues/18561
@@||blogdoiphone.com/20
! https://github.com/AdguardTeam/AdguardFilters/issues/17735
@@||animeflv.net/efire.php^
! https://github.com/AdguardTeam/AdguardFilters/issues/16813
@@||static.vodgc.net/player^
! https://github.com/AdguardTeam/AdguardFilters/issues/16087
@@||content.fruithosted.net/externsub^
@@||peanut-butter-fruit.fruithosted.net/dl^$media
! https://github.com/AdguardTeam/AdguardFilters/issues/15333
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=api.vodgc.net
! https://github.com/AdguardTeam/AdguardFilters/issues/14326
@@||fayerwayer.com/*/*/*publicidad
! https://github.com/AdguardTeam/AdguardFilters/issues/10438
@@||hashavuabogota.com^$generichide
! https://github.com/AdguardTeam/AdguardFilters/issues/3267
@@||partner.googleadservices.com/gpt/pubads_impl_$domain=simple.ripley.com.pe
@@||securepubads.g.doubleclick.net/gampad/ads$domain=simple.ripley.com.pe
@@||tpc.googlesyndication.com/simgad/*$domain=simple.ripley.com.pe
simple.ripley.com.pe#@#.dfp-ad-unit
! https://github.com/AdguardTeam/AdguardFilters/issues/7660
@@||geekland.eu/wp-content/uploads/*-publicidad-$image
! https://github.com/AdguardTeam/AdguardFilters/issues/6118
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=bemad.es|cuatro.com|divinity.es|eltiempohoy.es|energytv.es|factoriadeficcion.com|mtmad.es|telecinco.es|uppers.es|yasss.es
! http://forum.adguard.com/showthread.php?6420
@@||calcularindemnizacion.es^$elemhide
! Fixing links on marca.com
@@||b.scorecardresearch.com^$domain=marca.com
!
@@||seur.com^$document
@@/publicidad.$domain=tn.com.ar
@@||ads.e-planning.net^*/PreRoll?
@@||ads.globo.com/RealMedia/ads/adstream_jx.ads/g1/*videos
@@||ads.globo.com/RealMedia/ads/adstream_mjx.ads/g1/home/
@@||ads.globo.com/RealMedia/ads/adstream_nx.ads/g1/home/
@@||ads.smowtion.com/ad.js
@@||ads.telecinco.es^*/PM_test_video/crossdomain.xml
@@||adserver.cl/crossdomain.xml$domain=cooperativa.cl
@@||adserver.cl/videos.xml?$domain=cooperativa.cl
@@||adserver.ig.com.br/crossdomain.xml$domain=ig.com.br
@@||adswizz.com/www/components/$domain=esradio.fm
@@||adswizz.com/www/delivery/swfIndex.php?$domain=esradio.fm
@@||antena3.com/adserver/flv2/$domain=larazon.es
@@||autoscout24.es^*/adbanner.css
@@||avisooportunoexpress.mx/ajax_core.php*&adtype?$domain=avisooportunoexpress.mx
@@||cdn.smartclip.net/easyroll/player.swf
@@||ads.e-planning.net^$domain=ole.com.ar,object
@@||diariosigloxxi.com/banners/logo_
@@||e-planning.net/esb/*.swf?clickTag$domain=ole.com.ar
@@||extraconfidencial.com/js/*$object
@@||f.i.uol.com.br/folha/publicidade/images/$domain=folha.uol.com.br
@@||forolockerz.com/advertisement.js
@@||freelibros.com/wp-content/plugins/no-adblock/$script
@@||izigo.pt/*/adsearch?
@@||izigo.pt/AdPictures/
@@||lanacion.com.ar^*/publicidad/
@@||larazon.es/videos/publicidad_
@@||prisacom.com/RealMedia/ads/*/eplayer/$domain=as.com
@@||punch-fansub.com.br/banners/
@@||t26.net/ads/yahooads.css
@@||tvn.cl/include/ads/zona.js
@@||zpag.es/ads/$xmlhttprequest