// For license information, see `https://assets.adobedtm.com/ccc66c06b30b/dec9e8a112d6/05828be5cb90/RC92583cbc4f8c4aaaabdea41d2e1256ac-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/ccc66c06b30b/dec9e8a112d6/05828be5cb90/RC92583cbc4f8c4aaaabdea41d2e1256ac-source.min.js', "!function(){function a(a){window.adobeDataLayer.push(a)}function e(a=!1){window.adobeDataLayer.push({event:a?\"stBeaconReady\":\"stlBeaconReady\"})}function n(e,n){a({event:\"globalDL\",site:{name:o,country:e||c},user:n})}function t(){return document.getElementsByTagName(\"html\")[0].getAttribute(\"lang\").split(\"-\")[0]}function r(a,e,n,t,r){const i=n.substring(1).split(\"/\"),o=(i[0]||\"\").toLowerCase(),u=s.get(o)??c;let l=n;u!==c&&(l=n.substring(o.length+1));return{name:l,section:((u===c?i[0]:i[1])||\"\").toLowerCase(),language:a,country:u,url:e,referrer:t,title:r}}function i(){const i=r(t(),window.location.href,window.location.pathname,document.referrer,document.title),o={type:\"visitor\",loginStatus:\"no\"};n(i.country,o);a({event:\"pageView\",page:i,user:o}),e(!0)}const o=\"news\",s=new Map([[\"latinamerica\",\"lao\"],[\"brazil\",\"br\"],[\"canada\",\"ca\"],[\"canada-fr\",\"cafr\"],[\"australia\",\"au\"],[\"china\",\"cn\"],[\"hk\",\"hk\"],[\"india\",\"in\"],[\"sea\",\"apj\"],[\"japan\",\"jp\"],[\"cis\",\"cis\"],[\"korea\",\"kr\"],[\"westbalkans\",\"wbk\"],[\"germany\",\"de\"],[\"belgique\",\"befr\"],[\"belgie\",\"be\"],[\"bulgaria\",\"bg\"],[\"croatia\",\"hr\"],[\"cz\",\"cz\"],[\"denmark\",\"dk\"],[\"finland\",\"fi\"],[\"france\",\"fr\"],[\"greece\",\"gr\"],[\"hungary\",\"hu\"],[\"uk\",\"uk\"],[\"italy\",\"it\"],[\"netherlands\",\"nl\"],[\"norway\",\"no\"],[\"poland\",\"pl\"],[\"portugal\",\"pt\"],[\"romania\",\"ro\"],[\"sk\",\"sk\"],[\"slovenia\",\"si\"],[\"spain\",\"es\"],[\"sweden\",\"se\"],[\"swiss\",\"ch\"],[\"suisse\",\"chfr\"],[\"turkey\",\"tr\"],[\"ukraine\",\"ua\"],[\"africa\",\"afr\"],[\"mena\",\"mna\"],[\"americas\",\"ams\"],[\"asia\",\"apj\"],[\"austria\",\"at\"],[\"baltics\",\"blt\"],[\"bolivia\",\"bo\"],[\"caribe\",\"crb\"],[\"centralamerica\",\"cam\"],[\"cyprus\",\"cy\"],[\"estonia\",\"ee\"],[\"lithuania\",\"lt\"],[\"maghreb\",\"mag\"],[\"mena-ar\",\"mnar\"],[\"paraguay\",\"py\"],[\"serbia\",\"rs\"],[\"taiwan\",\"tw\"],[\"uruguay\",\"uy\"],[\"vietnam\",\"vn\"]]);window.adobeDataLayer=window.adobeDataLayer||[];const c=\"glo\";i()}();");