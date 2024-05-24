// IncremententListener('fetch', event => onFetch(event));


//! IMPORTANT : the onInstall event only accurs when the service worker is first installed.
// So don't set global variable in there, because if you clause the page, and then reopen it again, the onInstall won't occured, so the  global variable won't be set
function onInstall(event) {
    event.waitUntil(
        (async () => {
            try {
                var assetsRequests = await getOfflineAssetsRequests();
                const cache = await caches.open(CACHE_NAME);
                await cache.addAll(assetsRequests);
            } catch (e) {
                console.error('Service Worker Error =>', e);
            }
        })()
    );
    // Force the waiting service worker to become the active service worker.
    self.skipWaiting();
}

function onActivate(event) {
    event.waitUntil(
        (async () => {

            // Enable navigation preload if it's supported (to avoid service worker boot-up delay before network response).
            // See https://developers.google.com/web/updates/2017/02/navigation-preload
            if ("navigationPreload" in self.registration) {
                await self.registration.navigationPreload.enable();
            }

            // Delete unused caches
            const cacheKeys = await caches.keys();
            await Promise.all(cacheKeys
                .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
                .map(key => caches.delete(key)));

            // Tell the active service worker to take control of the page immediately.
            self.clients.claim();

            return;
        })()
    );
}

function onFetch(event) {
    // We only want to call event.respondWith() if this is a navigation request for an HTML page.
    if (event.request.mode === "navigate" || (event.request.method === 'GET' && event.request.headers.get("Accept").includes("text/html"))) {
        event.respondWith(
            (async () => {
                try {
                    // First, try to use the navigation preload response if it's supported.
                    const preloadResponse = await event.preloadResponse;
                    if (preloadResponse) {
                        return preloadResponse;
                    }

                    // If it's not supported or there is no preload, try the network first.
                    const networkResponse = await fetch(event.request);
                    return networkResponse;
                } catch (error) {
                    // catch is only triggered if an exception is thrown, which is likely due to a network error (ie no Internet).
                    // If fetch() returns a valid HTTP response with a response code in the 4xx or 5xx range, the catch() will NOT be called.

                    // So if the website is offline, we want to show the offline view instead of the requested page
                    // NB : the angular navigation doesn't trigger a request in mode === navigate,
                    // so if the network is disconnected and the user tries to navigate with angular, the offline view won't appears, until he reloads the page
                    const cache = await caches.open(CACHE_NAME);
                    var cachedOffLineResponse = await cache.match(OFFLINE_URL);
                    return cachedOffLineResponse;
                }
            })()
        );
    }

    else if (event.request.method === "GET" && event.request.destination === "image") {
        event.respondWith(
            (async () => {
                try {
                    // First, try to use the navigation preload response if it's supported.
                    const preloadResponse = await event.preloadResponse;
                    if (preloadResponse) {
                        return preloadResponse;
                    }

                    // If it's not supported or there is no preload, try the network first.
                    const networkResponse = await fetch(event.request);
                    return networkResponse;

                } catch (error) {
                    const cache = await caches.open(CACHE_NAME);
                    var cachedOffLineResponse = await cache.match(event.request.url);
                    return cachedOffLineResponse;
                }
            })()
        );
    }

    // If our if() condition is false, then this fetch handler won't intercept the
    // request. If there are any other fetch handlers registered, they will get a
    // chance to call event.respondWith(). If no fetch handlers call
    // event.respondWith(), the request will be handled by the browser as if there
    // were no service worker involvement.

}

//#region helper

async function getOfflineAssetsRequests() {
    var offlinePageAssets = await (await fetch(OFFLINE_ASSETS_URL)).json();
    var assetsRequests = [];
    if (offlinePageAssets != null) {
        if (offlinePageAssets.images != null && offlinePageAssets.images.length > 0) {
            assetsRequests = offlinePageAssets.images;
        }
    }
    assetsRequests.push(new Request(OFFLINE_URL));
    return assetsRequests;
}

//#endregion helper
[{
   "CD7" : "production",
   "CD37" : "offres::recherche::liste",
   "CD64" : "d",
   "CD63" : "web",
   "CD2" : "0",
   "CD83" : [{"classement":0,"id":"156392798699985439"},{"classement":1,"id":"156392784129993399"},{"classement":2,"id":"156392773334996996"},{"classement":3,"id":"156392699543991632"},{"classement":4,"id":"156392699542949040"},{"classement":5,"id":"156392699517949145"},{"classement":6,"id":"156392699345996863"},{"classement":7,"id":"156392699043981584"},{"classement":8,"id":"156392699042958487"},{"classement":9,"id":"156392689999979752"},{"classement":10,"id":"156392689937961971"},{"classement":11,"id":"156392686489978546"},{"classement":12,"id":"156392686479951798"},{"classement":13,"id":"156392652050976014"},{"classement":14,"id":"156392648290967908"},{"classement":15,"id":"156392646831913594"},{"classement":16,"id":"156392646830997668"},{"classement":17,"id":"156392645366995043"},{"classement":18,"id":"156392642002951995"},{"classement":19,"id":"156392641138983434"},{"classement":20,"id":"156392641137965799"},{"classement":21,"id":"156392633786937608"},{"classement":22,"id":"156392630631985995"},{"classement":23,"id":"156392630612986356"},{"classement":24,"id":"156392630001957883"}],
   "CD84" : [],
   "CD85" : [],
   "CD86" : "",
   "CD87" : [{"dept":"44","libelle":"Loire Atlantique"}],
   "CD88" : [],
   "CD89" : {},
   "CD90" : 1175,
   "CD91" : 1,
   "CD92" : "2",
   "CD102" : {"classique":25,"gb":0,"scrap_g":0,"tp":0,"scrap_f":0}
}];
        </script>
    

    
        <!-- Google Tag Manager -->
        <script>
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
              'gtm.start':
                new Date().getTime(), event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-MZKFFW5');
        </script>
        <!-- End Google Tag Manager -->

    
    <script>
    const customConfig = {"isPubActive":true,"criteresRecherchePub":{"codesFonctions":[],"codesRegions":[]},"selectedContrats":[],"selectedFonctions":[],"selectedSecteurs":[],"selectedLocalisation":{"city":"Nantes","slug":"nantes-44","department":{"label":"Loire Atlantique","code":"44","isoCode":"FR-44"},"region":{"label":"Pays-de-la-Loire","code":18,"isoCode":"FR-R"},"distanceInKm":10,"neighborDepartments":[],"type":"ville"},"selectedRegions":[],"selectedDepartements":[],"selectedSalaireMin":0,"pageCourante":1,"doitUtiliserPaginationAjax":false,"moteurRechercheConfiguration":{"page":"liste-offre","isNewMoteurVue":false,"contratsPourRecherche":[{"code":1,"label":"CDI"},{"code":2,"label":"CDD"},{"code":9,"label":"Franchises"},{"code":7,"label":"Indépendant / Freelance"},{"code":5,"label":"Statutaire"},{"code":8,"label":"Stage"},{"code":13,"label":"Apprentissage/Alternance"}],"fonctionsPourRecherche":[{"code":10500,"label":"Juridique Fiscal","subLevels":[{"code":10501,"label":"Direction Juridique"},{"code":10502,"label":"Cadres Juridiques toutes spécialités"},{"code":10503,"label":"Conseil Juridique - Avocat"},{"code":10504,"label":"Fiscaliste"},{"code":10505,"label":"Services Contentieux"},{"code":10506,"label":"Expertise"}]},{"code":10600,"label":"Ressources Humaines - Personnel - Formation","subLevels":[{"code":10601,"label":"DRH"},{"code":10602,"label":"RRH - Chef du personnel"},{"code":10603,"label":"Formation"},{"code":10604,"label":"Gestion de carrières"},{"code":10605,"label":"Gestion du personnel - Paie"},{"code":10606,"label":"Recrutement"},{"code":10607,"label":"Relations sociales"},{"code":10608,"label":"Rémunération"}]},{"code":20400,"label":"Production - Maintenance - Qualité - Sécurité - Environnement","subLevels":[{"code":20401,"label":"Direction d'Usine"},{"code":20402,"label":"Direction Industrielle"},{"code":20403,"label":"Direction Production"},{"code":20404,"label":"Direction Technique"},{"code":20405,"label":"Chef de Fabrication - Production"},{"code":20406,"label":"Contrôle - Assurance Qualité"},{"code":20407,"label":"Environnement - Sécurité"},{"code":20408,"label":"Gestion de Production"},{"code":20409,"label":"Maintenance - Entretien"},{"code":20410,"label":"Méthodes - Process - Industrialisation"},{"code":20411,"label":"Production"},{"code":20412,"label":"S.A.V."},{"code":20413,"label":"Travaux Neufs - Chantiers"}]},{"code":30400,"label":"Export","subLevels":[{"code":30401,"label":"Direction Export - Dir. internationale"},{"code":30402,"label":"Area manager"},{"code":30403,"label":"Chef de zone export"}]},{"code":10200,"label":"Gestion - Comptabilité - Finance","subLevels":[{"code":10201,"label":"DAF - Directeur Financier"},{"code":10202,"label":"Directeur Comptable - Expert Comptable"},{"code":10203,"label":"Analyse Financière"},{"code":10205,"label":"Comptable"},{"code":10206,"label":"Consolidation"},{"code":10207,"label":"Contrôleur de Gestion - Contrôleur interne ou général"},{"code":10208,"label":"Credit management"},{"code":10209,"label":"Organisation comptable"},{"code":10210,"label":"Trésorier - Analyste Crédit - Risk Manager"},{"code":10211,"label":"Cambiste - Trader - Front"},{"code":10212,"label":"Cadre Bancaire"},{"code":10213,"label":"Fiscaliste - Gestion patrimoniale"},{"code":10214,"label":"Middle - Back Office"}]},{"code":20300,"label":"Logistique - Achat - Stock - Transport","subLevels":[{"code":20301,"label":"Direction Logistique - Transport"},{"code":20302,"label":"Direction Achats"},{"code":20303,"label":"Achats - Approvisionnements"},{"code":20304,"label":"Gestion de stocks - Magasins"},{"code":20305,"label":"Logisticien"},{"code":20306,"label":"Ordonnancement - Planning"},{"code":20307,"label":"Organisation Industrielle"}]},{"code":30800,"label":"Communication - Création","subLevels":[{"code":30801,"label":"Direction de la communication"},{"code":30802,"label":"Direction Clientèle"},{"code":30803,"label":"Chef de Publicité"},{"code":30804,"label":"Communication interne"},{"code":30805,"label":"Presse"},{"code":30806,"label":"Communication Externe"},{"code":30807,"label":"Direction Artistique"},{"code":30808,"label":"Direction Création"},{"code":30809,"label":"Conception - Rédaction"},{"code":30810,"label":"Création - Graphisme - PAO"},{"code":30811,"label":"Journalisme"},{"code":30812,"label":"Relations Presse - Relations Publiques"},{"code":30813,"label":"Traduction - Interprétariat"}]},{"code":10400,"label":"Conseil","subLevels":[{"code":10401,"label":"Conseil en Droit - Fiscalité"},{"code":10402,"label":"Conseil en Finances"},{"code":10403,"label":"Conseil en Management - Stratégie"},{"code":10404,"label":"Conseil en Marketing - Commercial - Communication"},{"code":10405,"label":"Conseil aux PME - PMI"},{"code":10406,"label":"Conseil en RH"},{"code":10407,"label":"Conseil en Stratégie NTIC - Nouvelle économie"},{"code":10408,"label":"Conseil en Système d'Information - Organisation"}]},{"code":30100,"label":"Commercial - Vente","subLevels":[{"code":30101,"label":"Direction commerciale - Dvlpt - Stratégie"},{"code":30102,"label":"Direction des ventes - Chef des ventes"},{"code":30103,"label":"Administration des ventes"},{"code":30104,"label":"Assistanat Commercial"},{"code":30105,"label":"Chef d'agence - Resp. magasin"},{"code":30106,"label":"Chef de rayon - Chef de Secteur"},{"code":30107,"label":"Commercial"},{"code":30108,"label":"Grands-Comptes"},{"code":30109,"label":"Ingénieur d'affaires"},{"code":30110,"label":"Télévente"},{"code":30111,"label":"Ingénieur commercial"},{"code":30112,"label":"Technico-commercial"},{"code":30113,"label":"Commercial - Ingénieur Technico-Commercial"},{"code":30114,"label":"Vente"}]},{"code":10100,"label":"Administration - Services généraux","subLevels":[{"code":10101,"label":"Documentaliste"},{"code":10102,"label":"Secrétaire - Assistante de Direction"},{"code":10103,"label":"Services Généraux"}]},{"code":10300,"label":"Audit","subLevels":[{"code":10301,"label":"Audit Externe"},{"code":10302,"label":"Audit Interne"}]},{"code":20500,"label":"Systèmes d'informations - Télécom","subLevels":[{"code":20501,"label":"Direction Systèmes d'informations - Télécom"},{"code":20503,"label":"Chef de Projet - MOE"},{"code":20504,"label":"Consultant - Audit - AMOA"},{"code":20505,"label":"Analyste Programmeur"},{"code":20507,"label":"Exploitation - Production"},{"code":20510,"label":"Système - Réseaux - Base de Données"},{"code":20514,"label":"Service utilisateurs - Hotliner"},{"code":20517,"label":"Ingénieur Avant vente"},{"code":20518,"label":"Ingénieur Etudes - Développement"},{"code":20519,"label":"Architecture - Urbanisme"},{"code":20520,"label":"Directeur de Projet - MOA"},{"code":20521,"label":"Ingénieur Télécom"},{"code":20522,"label":"Qualité - Méthodes"},{"code":20523,"label":"Sécurité"}]},{"code":40000,"label":"Direction générale - Direction centre de profits","subLevels":[{"code":40001,"label":"P.D.G."},{"code":40002,"label":"D.G. - D.G.A."},{"code":40003,"label":"Direction Filiale - Centre de Profits"},{"code":40004,"label":"Secrétaire Général"}]},{"code":20230,"label":"Santé (Médical) - Social","subLevels":[{"code":20209,"label":"Médecin du travail"},{"code":20231,"label":"Direction d'établissement"},{"code":20232,"label":"Activités sociales"},{"code":20233,"label":"Infirmier - Infirmière"},{"code":20234,"label":"Dentiste"},{"code":20235,"label":"Médecin - Chirurgien généraliste"},{"code":20236,"label":"Médecin - Chirurgien spécialiste"},{"code":20238,"label":"Paramédical de soin"},{"code":20239,"label":"Paramédicale de rééducation"},{"code":20240,"label":"Paramédical médico-technique"},{"code":20241,"label":"Pharmacien"},{"code":20242,"label":"Sage-femme"},{"code":20243,"label":"Vétérinaire - soins animaliers"},{"code":20244,"label":"Autres"}]},{"code":30500,"label":"Marketing","subLevels":[{"code":30501,"label":"Direction Marketing"},{"code":30502,"label":"Chef de Groupe - Marché"},{"code":30503,"label":"Chef de Produit"},{"code":30504,"label":"Marketing Direct"},{"code":30505,"label":"Marketing Etudes"},{"code":30506,"label":"Marketing opérationnel - Promo ventes"},{"code":30507,"label":"Relation clients - Consommateurs - SAV"}]},{"code":20100,"label":"Etudes - Recherche","subLevels":[{"code":20101,"label":"Direction R & D"},{"code":20102,"label":"Direction Scientifique"},{"code":20103,"label":"Brevets - Marques"},{"code":20104,"label":"Chef de Projet - Ingénierie"},{"code":20105,"label":"Etudes - Bureau d'Etudes"},{"code":20106,"label":"Ingénieur R & D - Chercheur"},{"code":20107,"label":"Recherche - Laboratoire"},{"code":20108,"label":"Statistiques"}]},{"code":20700,"label":"Internet - e-Commerce","subLevels":[{"code":20701,"label":"Direction Internet - e-Commerce"},{"code":20703,"label":"Contenus - Partenariats"},{"code":20704,"label":"Webmaster - Webdesign"},{"code":20706,"label":"Référencement - Traffic Management"},{"code":20708,"label":"Webplanner"}]},{"code":20260,"label":"Santé (Industrie)","subLevels":[{"code":20203,"label":"Affaires Réglementaires"},{"code":20207,"label":"Médico-Marketing"},{"code":20208,"label":"Information Médicale - Formation - Pharmacovigilance"},{"code":20261,"label":"Direction Santé (Industrie)"},{"code":20264,"label":"Recherche & Développement clinique"},{"code":20267,"label":"Prix - Remboursement - Economie"},{"code":20268,"label":"Qualité"},{"code":20270,"label":"Autres"}]}],"secteursPourRecherche":[{"code":20000,"label":"Banque - Assurance - Finance","subLevels":[{"code":20001,"label":"Banque - Etablissement financier - Crédit Bail ..."},{"code":20002,"label":"Bourse"},{"code":20003,"label":"Capital Risque"},{"code":20004,"label":"Compagnie Assurance - Courtier"}]},{"code":10000,"label":"Construction BTP","subLevels":[{"code":10002,"label":"Gros oeuvre"},{"code":10001,"label":"Génie Civil - TP"},{"code":10003,"label":"Maisons individuelles"},{"code":10004,"label":"Production matériaux construction"},{"code":10005,"label":"Second oeuvre"},{"code":10006,"label":"Société immobilière - Promoteur"}]},{"code":30000,"label":"Distribution","subLevels":[{"code":30001,"label":"Automobile - Moto"},{"code":30002,"label":"Bricolage - Jardin - Décoration - Ameublement"},{"code":30003,"label":"Centrale d'achats"},{"code":30004,"label":"Commerce alimentaire"},{"code":30005,"label":"Disques - Livres"},{"code":30006,"label":"Habillement - Produit Luxe - Mode - Sport"},{"code":30007,"label":"HiFi - Vidéo - Informatique - Micro - Telecom..."},{"code":30008,"label":"Hyper - Super - Grand Magasin"},{"code":30009,"label":"Import - Export"},{"code":30010,"label":"Négoce - Commerce gros industriel"},{"code":30011,"label":"V.P.C."}]},{"code":15000,"label":"Immobilier","subLevels":[{"code":15004,"label":"Habitation - Gestion locative"},{"code":15002,"label":"Promoteur"},{"code":15003,"label":"SCPI (Société Civile de Placement Immobilier)"},{"code":15001,"label":"Société immobilière"}]},{"code":60000,"label":"Industries","subLevels":[{"code":60002,"label":"Agriculture"},{"code":60003,"label":"Agroalimentaire"},{"code":60004,"label":"Armement"},{"code":60005,"label":"Art de la table - Décoration"},{"code":60006,"label":"Auto-Moto-Cycles"},{"code":60001,"label":"Aéronautique - Spatial"},{"code":60007,"label":"Biens d'équipement de la maison"},{"code":60008,"label":"Bureautique"},{"code":60009,"label":"Chimie - Parachimie"},{"code":60010,"label":"Construction Navale"},{"code":60011,"label":"Cosmétique - Parfumerie - Produit d'hygiène"},{"code":60012,"label":"Disque - Ciné - Vidéo - Radio - Photo - TV"},{"code":60013,"label":"Eau - Gaz - Electricité - Chauffage"},{"code":60014,"label":"Edition - Imprimerie"},{"code":60015,"label":"Electricité"},{"code":60016,"label":"Electromécanique"},{"code":60017,"label":"Electroménager"},{"code":60018,"label":"Electronique"},{"code":60019,"label":"Emballage"},{"code":60020,"label":"Energie Nucléaire"},{"code":60021,"label":"Environnement"},{"code":60022,"label":"Equipement industriel"},{"code":60023,"label":"Equipementier auto-moto-cycles"},{"code":60024,"label":"Extraction - Mines"},{"code":60025,"label":"Ferroviaire"},{"code":60026,"label":"Horlogerie - Joaillerie - Bijouterie"},{"code":60027,"label":"Instrumentation"},{"code":60029,"label":"Matériel Médical  -  Diagnostic"},{"code":60028,"label":"Matériel d'éclairage"},{"code":60032,"label":"Meuble - Travail du Bois"},{"code":60030,"label":"Mécanique - Machine Outil"},{"code":60031,"label":"Métallurgie"},{"code":60033,"label":"Optique"},{"code":60034,"label":"Papier - Carton"},{"code":60035,"label":"Peinture - Encre"},{"code":60037,"label":"Pharmacie - Parapharmacie - Biotechnologie"},{"code":60038,"label":"Plasturgie - Plastique - Composite"},{"code":60039,"label":"Presse"},{"code":60041,"label":"Produits d'entretien - Détergents"},{"code":60040,"label":"Produits de Loisir - Jouets - Jeux"},{"code":60036,"label":"Pétrole (production - distribution)"},{"code":60042,"label":"Robotique"},{"code":60043,"label":"Sidérurgie"},{"code":60044,"label":"Tabac"},{"code":60045,"label":"Textile - Habillement - Chaussure"},{"code":60046,"label":"Verre - Céramique"}]},{"code":40000,"label":"Informatique - Télécom - Internet","subLevels":[{"code":40006,"label":"Conseil - Audit"},{"code":40001,"label":"Constructeur"},{"code":40002,"label":"Editeur de logiciels"},{"code":40003,"label":"Internet"},{"code":40004,"label":"Opérateur - Infogérance - Hébergeur - FAI"},{"code":40005,"label":"Services Informatiques"}]},{"code":70000,"label":"Services","subLevels":[{"code":70001,"label":"Agence pub - Marketing Direct - Communication"},{"code":70002,"label":"Association"},{"code":70004,"label":"Autres Services aux Particuliers"},{"code":70003,"label":"Autres Services aux collectivités - Entreprises"},{"code":70005,"label":"Cabinet Comptable - Audit"},{"code":70007,"label":"Conseil Juridique - Cabinet d'avocats"},{"code":70006,"label":"Conseil aux entreprises"},{"code":70008,"label":"Hôtellerie - Restauration"},{"code":70009,"label":"Ingénierie - Bureau d'Etudes"},{"code":70010,"label":"Intérim"},{"code":70011,"label":"Location Véhicules - Diverse"},{"code":70012,"label":"Loisirs - Culture - Cinéma"},{"code":70013,"label":"Maintenance industrielle"},{"code":70014,"label":"Nettoyage industriel - Sécurité"},{"code":70016,"label":"Recherche"},{"code":70017,"label":"Salons - Congrès - Manifestations"},{"code":70015,"label":"Services santé - Cliniques"},{"code":70018,"label":"Tourisme - Voyages"},{"code":70019,"label":"Transports - Messagerie Express"}]},{"code":50000,"label":"Services publics - Administrations","subLevels":[{"code":50002,"label":"Administrations - Institutions"},{"code":50009,"label":"Affaires culturelles"},{"code":50006,"label":"Affaires étrangères - International"},{"code":50001,"label":"Armée - Défense - Sécurité"},{"code":50019,"label":"Autres"},{"code":50003,"label":"Collectivités locales - Territoriales"},{"code":50011,"label":"Droit - Justice"},{"code":50007,"label":"Dévelop.t économique - Commerce - Organisme Consulaire"},{"code":50012,"label":"Economie - Finances"},{"code":50004,"label":"Enseignement - Animation - Recherche"},{"code":50013,"label":"Environnement - Agriculture"},{"code":50014,"label":"Industries - Energies"},{"code":50015,"label":"Informatique - Télécommunications"},{"code":50016,"label":"Politique de la ville - Logement"},{"code":50017,"label":"Restauration collective"},{"code":50010,"label":"Services Techniques"},{"code":50008,"label":"Services santé - Action sociale"},{"code":50018,"label":"Sport - Loisirs - Tourisme"}]}]},"doitAfficherOffreSponso":true,"isRankingActif":false,"isUserConnected":false,"isOffreEntreprisePriorisee":false,"doitAfficherBlocIncitationVisibiliteCvtheque":false,"doitAfficherBlocIncitationCompletionProfil":false,"doitAfficherBlocIncitationCompletionProfilIncomplet":false,"configurationCreationAlerte":{"criteres":"Loire-Atlantique","ouvrirToaster":false,"isAlerteExistante":false}};

    window.jsConfig = {
            'document': document,
            'window': window,
            'screen': screen,
            'navigator': navigator,
            'ceVersion': '24.01.1',
            'sessionData': '{"loggedIn":false,"identified":false,"responsableAutoLoggedIn":false,"nbOffresMemorisees":0,"hasAlerteEmail":false,"hasCv":false,"isHomePage":false,"displayResearch":false}',
            ...customConfig}
</script>

    <link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/icomoon-5d533622.woff" as="font"/ type="font/woff" crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/zepto-23be857e.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/9911b16f.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/initHeaderFooter-37bd9238.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/fetch-c0e0d414.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/moteur_top-88516802.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/7afb3d63.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/jquery.throttledScroll-3db0c33a.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/tracking_offres_reco-7fe55a42.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/tracking_offres_perf-52b761c9.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/lightbox_confirmation_candidature-08601ecc.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/index-71103670.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/remodal-2bfc81e4.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/depotcv1click-e86c9990.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/mentions_legales-0218244e.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/smooth_scroll-0d34ac30.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/ce-front-components-lib.esm-d50c392a.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/nouislider-5e15b0d4.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/globalScope-fbf7c2ea.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/js.cookie-bc74c13b.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/uniqueId-449ed241.js" as="script"/ crossorigin>
<link rel="preload" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/screenSize-63331b0a.js" as="script"/ crossorigin>
<link rel="stylesheet" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/listeOffres-eb3131c5.css"/>
<link rel="stylesheet" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/_button-af316814.css"/>
<link rel="stylesheet" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/_links-48185922.css"/>
<link rel="stylesheet" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/initHeaderFooter-909583ba.css"/>
<link rel="stylesheet" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/moteur_top-eb9c8754.css"/>
<link rel="stylesheet" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/jquery-2d3676a1.css"/>
<link rel="stylesheet" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/lightbox_confirmation_candidature-37e7344e.css"/>
<link rel="stylesheet" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/index-66974511.css"/>
<link rel="stylesheet" href="https://cdn-cadremploi.carriere.fcms.io/assets/dist/ce-front-components-lib-ca20b31e.css"/>
<script type="module" crossorigin src="https://cdn-cadremploi.carriere.fcms.io/assets/dist/listeOffres-8f82d003.js"></script>

    <script src="https://accounts.google.com/gsi/client" async></script>

    <script>
            var pubId = '01BYK28ENND8X5G8K0AJ2DPK9E';
      !function(h,u,b,v,i,s,o,r){function n(r){var c=console.error;function o(n){try{n(r)}catch(n){c(n)}}c(r);var n=u[h].cmd;u[h]=function(n,r,c){o(c)},u[h].cmd=n;for(var i=0;i<u[h].cmd.length;++i)o(u[h].cmd[i]);u[h].cmd={push:o}}u[h]=u[h]||function(){var n=arguments;u[h].cmd.push(function(){u[h].apply(null,n)})},u[h].cmd=u[h].cmd||[];var r=setTimeout(n.bind(null,new Error("Hubvisor loading timeout !")),s||3e3);function c(){r&&(clearTimeout(r),r=0)}var o=b.createElement(v);o.async=!0,o.src="https://cdn.hubvisor.io/wrapper/"+i+"/hubvisor.js",b.head.appendChild(o),o.addEventListener("error",function(){c(),n(new Error("Hubvisor loading failed !"))}),u[h].cmd.push(function(){c()});}('Hubvisor',window,document,'script',pubId)
    </script>
    <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>

    
    

    <meta name="robots" content="index,follow"/>

    
        <link rel="canonical" href="https://www.cadremploi.fr/emploi/liste_offres?ville=nantes-44"/>
    

    
        <meta name="description" content="D&eacute;couvrez nos offres d'emploi pour Nantes (44) en CDI et CDD. Candidatez facilement sur Cadremploi"/>
    

    
    
        <link rel="next" href="https://www.cadremploi.fr/emploi/liste_offres?ville=nantes-44&page=2"/>
    

    
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"type":"Question","name":"Quels sont les salaires moyens à Nantes ?","acceptedAnswer":{"type":"Answer","text":"En 2016, un cadre exerçant son activité professionnelle à Nantes et dans les Pays de la Loire dispose en moyenne d'un salaire net horaire de 22,90 &euro, selon les données communiquées par l'Insee...<br/><a href=\"https://www.cadremploi.fr/emploi/liste_offres?ville=nantes-44?utm_source=google&utm_medium=organic&utm_campaign=faq\">Lire la suite</a>"}},{"type":"Question","name":"Pourquoi travailler à Nantes ?","acceptedAnswer":{"type":"Answer","text":"Située à 2 h de Paris en TGV, la ville de Nantes dispose de nombreux atouts pour séduire les cadres à la recherche d'un emploi rémunérateur et d'un cadre de vie agréable...<br/><a href=\"https://www.cadremploi.fr/emploi/liste_offres?ville=nantes-44?utm_source=google&utm_medium=organic&utm_campaign=faq\">Lire la suite</a>"}},{"type":"Question","name":"Quels sont les secteurs qui recrutent le plus à Nantes ?","acceptedAnswer":{"type":"Answer","text":"Capitale européenne de l'innovation en 2019, la ville de Nantes regorge d'opportunités professionnelles dans des secteurs tels que le numérique, les services à la personne, les industries du futur ou encore la santé...<br/><a href=\"https://www.cadremploi.fr/emploi/liste_offres?ville=nantes-44?utm_source=google&utm_medium=organic&utm_campaign=faq\">Lire la suite</a>"}}]}</script>
    
    <content tag="columnDirection"></content>

</head>
<body>
    <div class="ie-banner" style="text-align: center; background-color: gold;"></div>
    <!-- Google Tag Manager (noscript) -->
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZKFFW5"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

    
        <div id="g_id_onload"
             data-client_id="715967543527-vfr33nil3ga80i31lcnsa2l07nnflfs4.apps.googleusercontent.com"
             data-context="signin"
             data-login_uri="https://www.cadremploi.fr/emploi/login/natif"
             data-cancel_on_tap_outside="false"
             data-auto_select="false">
        </div>
    

    <div class="cadremploi" id="cadremploi-namespace">
        <header id="header" class=""><div class="header-content"><button aria-label="Bouton menu mobile" aria-expanded="false" aria-controls="menu-navigation" class="cs-icon-menu-burger"></button> <div class="cadremploi-logo"><a href="/"><img src="https://cdn-cadremploi.carriere.fcms.io/assets/img/logos/ce/logo-ce-bleu.svg" width="240" height="36" alt="Cadremploi"></a></div> <button class="menu-mobile-head"><img src="https://cdn-cadremploi.carriere.fcms.io/assets/img/home/user-logge.png" width="60" height="61" alt=""> <span class="user">Me connecter</span></button> <nav id="menu-navigation" aria-label="Principale" class="menu-navigation"><ul class="categories-principales"><li data-v-e16bafd2="" class="sous-menu"><button data-v-e16bafd2="" aria-expanded="false" class="bouton"><span data-v-e16bafd2="" class="label">Offres d'emploi</span> <span data-v-e16bafd2="" aria-hidden="true" class="cs-icon-arrow-down-sign"></span></button> <div data-v-e16bafd2="" class="sous-categorie" data-v-228369e0="" style="display: none;"><div data-v-e16bafd2="" class="slot-container"><div data-ga-action="clic_header_offre_emploi" class="sous-menu-container"><div><a href="/emploi/top_recruteurs" data-ga-label="entreprises" class="niveau2">
                  Les entreprises qui recrutent
                </a> <a href="/emploi/annuaire_cabinets" data-ga-label="cabinets" class="niveau2">
                  Les cabinets de recrutement
                </a> <a href="/emploi/liste_offres" data-ga-label="tout" class="niveau2">
                  Toutes les offres d'emploi
                </a></div> <div><a href="/emploi/liste_offres?tyc=8" data-ga-label="stages" class="niveau2">
                  Offres de stages
                </a> <a href="/emploi/liste_offres?rub=_jeunes_diplomes" data-ga-label="jeunes_dip" class="niveau2">
                  Offres d'emploi jeunes diplomés
                </a> <a href="/emploi/liste_offres?tyc=7" data-ga-label="freelance" class="niveau2">
                  Missions en freelance
                </a></div></div></div></div></li> <li data-v-e16bafd2="" class="sous-menu"><button data-v-e16bafd2="" aria-expanded="false" class="bouton"><span data-v-e16bafd2="" class="label">Actualité</span> <span data-v-e16bafd2="" aria-hidden="true" class="cs-icon-arrow-down-sign"></span></button> <div data-v-e16bafd2="" class="sous-categorie" data-v-228369e0="" style="display: none;"><div data-v-e16bafd2="" class="slot-container"><div data-ga-action="clic_header_actualites" class="sous-menu-container"><div><strong class="sous-titre">S'informer sur l'emploi des cadres</strong> <a href="/editorial/actualites/actu-emploi.html" data-ga-label="derniere_actu" class="niveau2">
                  Les dernières actualités
                </a> <a href="/editorial/actualites/actu-metiers-regions.html" data-ga-label="secteur_region" class="niveau2">
                  Par secteur et par région
                </a> <a href="/editorial/actualites/edito.html" data-ga-label="edito_hebdo" class="niveau2">
                  L'édito de la semaine
                </a></div> <div><strong class="sous-titre">La Playlist Cadremploi</strong> <a href="/editorial/actualites/cadremploi-tv.html" data-ga-label="emissions" class="niveau2">
                  Regarder nos émissions
                </a></div></div></div></div></li> <li data-v-e16bafd2="" class="sous-menu"><button data-v-e16bafd2="" aria-expanded="false" class="bouton"><span data-v-e16bafd2="" class="label">Conseils</span> <span data-v-e16bafd2="" aria-hidden="true" class="cs-icon-arrow-down-sign"></span></button> <div data-v-e16bafd2="" class="sous-categorie" data-v-228369e0="" style="display: none;"><div data-v-e16bafd2="" class="slot-container"><div data-ga-action="clic_header_conseils" class="sous-menu-container"><div><strong class="sous-titre">Mieux vivre son job</strong> <a href="/editorial/conseils/conseils-carriere.html" data-ga-label="job_gestion_carriere" class="niveau2">
                  Gérer ma carrière
                </a> <a href="/editorial/conseils/salaire.html" data-ga-label="job_salaire" class="niveau2">
                  Savoir parler salaire
                </a> <a href="/editorial/conseils/droit-du-travail.html" data-ga-label="job_droits" class="niveau2">
                  Connaître ses droits au travail
                </a> <a href="/editorial/international.html" data-ga-label="job_international" class="niveau2">
                  Travailler à l'international
                </a> <a href="/editorial/podcasts.html" data-ga-label="job_podcasts" class="niveau2 rubrique-podcast"><span class="cs-icon-podcast"></span>
                  Podcasts
                </a> <a href="/editorial/conseils/conseils-carriere/coronavirus-kit-de-survie-au-travail" data-ga-action="clic_header_Hub" data-ga-label="coronavirus_et_emploi" class="niveau2 rubrique-hub ce-button button-nessie-blue">
                  Coronavirus et travail
                </a></div> <div><strong class="sous-titre">Chercher ailleurs</strong> <a href="/editorial/conseils/conseils-candidature/cv.html" data-ga-label="search_redaction_cv" class="niveau2">
                  Rédiger son CV
                </a> <a href="/editorial/conseils/conseils-candidature/lettre-de-motivation.html" data-ga-label="search_lettre_motivation" class="niveau2">
                  Assurer sa lettre de motivation
                </a> <a href="/editorial/conseils/conseils-candidature/entretien-embauche.html" data-ga-label="search_entretien" class="niveau2">
                  Préparer son entretien d'embauche
                </a> <a href="/editorial/conseils/conseils-candidature.html" data-ga-label="search_postuler" class="niveau2">
                  Postuler au bon moment
                </a> <a href="/emploi/entreprendre" data-ga-label="search_entrepreneuriat" class="niveau2">
                  Se lancer dans l'entrepreneuriat
                </a></div> <div><strong class="sous-titre">Se former</strong> <a href="/editorial/tag/management" data-ga-label="learn_management" class="niveau2">
                  Améliorer son management
                </a> <a href="/editorial/formation/conseils-secteur.html" data-ga-label="learn_decouvrir" class="niveau2">
                  Découvrir les formations par secteur
                </a> <a href="/editorial/formation/cpf-cif-vae.html" data-ga-label="learn_choisir_CPF_VAE" class="niveau2">
                  Choisir le bon dispositif CPF et VAE
                </a> <a href="/editorial/formation/mba-ms-masters.html" data-ga-label="learn_choisir_MBA_MS" class="niveau2">
                  Choisir un MBA / MS / Masters
                </a> <a href="/editorial/formation/langues.html" data-ga-label="learn_linguistiques" class="niveau2">
                  Développer ses compétences linguistiques
                </a></div> <div><strong class="sous-titre">Trouver mon premier job</strong> <a href="/editorial/conseils/fiches-metiers.html" data-ga-label="find_fiches" class="niveau2">
                  Fiches métiers
                </a></div></div></div></div></li> <li class="depot-cv"><a href="/depot-cv" data-ga-action="clic_header_depot_cv" data-ga-label="clic_header_depot_cv" class="single-menu">
                        Dépôt de CV
                    </a></li> <li class="creer-cv"><a href="/emploi/createur_cv" data-ga-action="clic_header_generateur_cv" data-ga-label="clic_header_generateur_cv" class="single-menu">
                        Créer un CV
                    </a></li></ul></nav> <div class="right"><!----> <div class="connexion-espace-perso"><a href="https://espace-recruteurs.cadremploi.fr" target="_blank" rel="noopener" data-ga-action="clic_hp_header_espace_recruteur" data-ga-label="clic_hp_header_espace_recruteur" class="lien-espace-recruteur">
            Espace recruteur
          </a> <a title="Inscrivez-vous" href="/emploi/pourquoi_inscription?todo=inscrire" data-ga-action="clic_cta_inscription_header" data-ga-label="clic_cta_inscription_header" class="lien-inscription ce-button button-blue button-sm"><span class="inscription-label">Inscription</span></a> <button aria-label="Connexion" class="lien-connexion js-connexion-espace-perso"><img src="https://cdn-cadremploi.carriere.fcms.io/assets/img/home/user-non-logge.png" width="30" height="30" alt=""> <span class="connexion-label">Connexion</span></button></div></div></div> <!----> <!----> <div data-v-3fd0fd53="" class="overlay" style="display: none;"><div data-v-3fd0fd53="" class="connection-modal"><button data-v-3fd0fd53="" class="cs-icon-cross-close close-top-right"></button> <div data-v-3fd0fd53="" class="espace-perso-login kit-ui"><span data-v-3fd0fd53="" class="title-espace-perso">Connectez-vous sur Cadremploi</span> <div data-v-3fd0fd53="" class="sub-title-espace-perso with-bold social-signup"><span data-v-3fd0fd53="" class="text-title">Je continue avec</span> <form data-v-3fd0fd53="" action="/emploi/auth/linkedin" method="POST"><button data-v-3fd0fd53="" type="submit" data-ga-action="clic_page_inscription_LinkedIn" data-ga-label="clic_page_inscription_LinkedIn" class="icones-social-signup"><span data-v-3fd0fd53="" class="background-icon-linkedin"><img data-v-3fd0fd53="" src="https://cdn-cadremploi.carriere.fcms.io/assets/img/icones/linkedin-ok.png" width="24" height="24" alt="logo LinkedIn" class="linkedin-connect"></span></button></form> <form data-v-3fd0fd53="" action="/emploi/auth/google" method="POST"><button data-v-3fd0fd53="" type="submit" data-ga-label="clic_page_inscription_Google" data-ga-action="clic_page_inscription_Google" class="icones-social-signup"><span data-v-3fd0fd53="" class="background-icon-google"><img data-v-3fd0fd53="" src="https://cdn-cadremploi.carriere.fcms.io/assets/img/icones/picto-gplus.png" width="24" height="24" alt="logo Google" class="google-connect"></span></button></form></div> <span data-v-3fd0fd53="" class="sub-title-espace-perso with-bold">ou me connecter avec mon email</span> <form data-v-3fd0fd53="" name="modaleLogin" id="modaleLogin" action="/emploi/login" method="POST"><input data-v-3fd0fd53="" type="hidden" name="urlRedirection"> <fieldset data-v-3fd0fd53="" class="login-lightbox"><input data-v-3fd0fd53="" type="email" name="email" autocomplete="username" required="required" pattern="\S+@\S+\.\S+" placeholder="Email" aria-label="email" class="emailGlobalMenu"> <input data-v-3fd0fd53="" type="password" name="password" value="" required="required" autocomplete="current-password" placeholder="Mot de passe" aria-label="mot de passe" class="passwordGlobalMenu"> <input data-v-3fd0fd53="" type="hidden" name="recaptcha_token"> <div data-v-3fd0fd53="" class="login-tools"><label data-v-3fd0fd53="" class="toolbar-remember-me"><input data-v-3fd0fd53="" type="checkbox" name="remember_me" checked="checked">
                  Rester connecté(e)
                </label> <a data-v-3fd0fd53="" href="/emploi/oubli_mdp" rel="nofollow" class="more-info">Mot de passe oublié&nbsp;?</a></div> <button data-v-3fd0fd53="" type="submit" name="bouton_global_menu_login" class="ce-button button-blue connection-button">
                Je me connecte
              </button></fieldset></form> <span data-v-3fd0fd53="" class="label-inscription">Vous n'avez pas de compte ?
            <a data-v-3fd0fd53="" title="Inscrivez-vous" href="/emploi/pourquoi_inscription?todo=inscrire"><b data-v-3fd0fd53="">Inscrivez-vous</b></a></span></div></div></div></header>
        <script>
          var cachedHeader = sessionStorage.getItem(btoa('{"loggedIn":false,"identified":false,"responsableAutoLoggedIn":false,"nbOffresMemorisees":0,"hasAlerteEmail":false,"hasCv":false,"isHomePage":false,"displayResearch":false}'));
          if (cachedHeader) {
            <!-- Si on a déjà mis en cache le header avec ces sessionData, on le récupère puis écrase le DOM -->
            document.querySelector('#header').outerHTML = cachedHeader;
          }
        </script>

        <div class="body-cadremploi">
            
<div class="page-liste-offres">
    
    <div class="moteur-top-liste js-moteur-top-liste">
    <div class="close-modal-header">
        <a href="#" class="close-modal js-close-modal">
            <span class="icon-left-arrow"></span>
        </a>
        <span>Ma recherche</span>
    </div>
    <div class="moteur-content">
        <div class="moteur-principal">
            <div class="block-section center-column">
                <div class="row">
                    <div class="col-lg-6 col-md-5 searchbar-container">
                        <div class="mot-cle js-mot-cle">
                            <span class="icon-search icon-mots-cles-mobile"></span>
                            <input id="js-mobile-monochamps-recherche"
                                   class="motsCles-top js-motsCles-top"
                                   type="search"
                                   placeholder="Métier, secteur, mots-clé"
                                   aria-label="Métier, secteur, mots-clé"
                                   autocomplete="off"/>
                            <span class="rappel-criteres-mots-cles hidden js-rappel-criteres-mots-cles">
                                <span class="js-rappel-criteres"></span>
                                <span class="rappel-criteres-loc js-rappel-criteres-loc"></span>
                            </span>
                            <div class="js-suggestions-autocomplete-container suggestions-autocomplete-container js-liste-criteres">
                            </div>
                        </div>

                        
                    </div>
                    <div class="col-lg-4 col-md-5 spaced-input searchbar-container">
                        <div xtclib="Form_localisation" class="localisation-selector">
                            <span class="icon-geolocalisation"></span>
                            <div class="elargir-recherche js-elargir-recherche-container">
                                <span class="elargir-recherche-text js-elargir-recherche">&Eacute;largir ma recherche</span>
                                <fieldset class="elargir-recherche-options elargir-recherche-selector js-elargir-recherche-selector js-liste-criteres">
                                </fieldset>
                            </div>
                            <div class="localisation-recherche js-localisation-recherche ">
                                <input class="localisation-trigger js-localisation-trigger suggestion-localisation-input"
                                       type="search" placeholder="Ville, département, région"/>
                                <fieldset class="localisation-options js-localisation-options localisation-dropdown-selector js-liste-criteres">
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1 spaced-input moteur-search-button">
                        <div class="cta-search-desktop js-cta-search-desktop">
                            <button class="moteur-top-button js-moteur-top-submit" aria-label="Rechercher">
    <div class="moteur-loader-search js-moteur-loader-search">
        <div class="loading-animation"></div>
    </div>
    <span xtclib="Form_rechercher" class="icon-search"></span>
    <span class="lancer-recherche">Rechercher</span>
</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        
        <div class="moteur-plus-de-criteres">
    <div class="block-section center-column kit-ui">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-8 flex flex-wrap items-center text-left criteria-container">
                <div class="liste-criteres liste-criteres-extensible critere-item js-liste-criteres js-fonctions-tab">
                    <div class="critere js-critere">
                        <div class="open-critere js-open-critere">Fonction</div>
                        <span class="icon-critere icon-arrow-top"></span>
                    </div>
                    <fieldset class="js-fonctions-moteur-liste"></fieldset>
                </div>

                <div class="liste-criteres liste-criteres-extensible critere-item js-liste-criteres js-contrats-tab">
                    <div class="critere js-critere">
                        <div class="open-critere js-open-critere">Contrat</div>
                        <span class="icon-critere icon-arrow-top"></span>
                    </div>
                    <fieldset class="js-contrats-moteur-liste"></fieldset>
                </div>

                <div class="liste-criteres liste-criteres-extensible critere-item js-liste-criteres js-salaire-min-tab">
                    <div class="critere js-critere">
                        <div class="open-critere js-open-critere">Salaire</div>
                        <span class="icon-critere icon-arrow-top"></span>
                    </div>
                    <fieldset class="salaire-min-moteur">
                        <div class="salary-value"><span class="salary-value-label">Salaire minimum</span> <span
                                class="js-salaire-min-value">0K&euro;</span>
                        </div>
                        <div class="salary-slider">
                            <span>0&nbsp;K&euro;</span>
                            <input min="0" max="200000" step="10000" type="range" value="0" style="--percentage: 0%" class="salary-slider-input js-salary-slider-input"/>
                            <span>200&nbsp;K&euro;</span>
                        </div>
                    </fieldset>
                    <fieldset class="salaire-min-moteur-mobile-fieldset">
                        <div class="salaire-min-moteur-mobile">
                            <label for="salaire-min-mobile" class="salaire-label">Salaire minimum</label>
                            <select id="salaire-min-mobile" class="salaire-min-mobile js-salaire-min-mobile">
                                <option value="" selected>Indifférent</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                                <option value="50">50</option>
                                <option value="60">60</option>
                                <option value="70">70</option>
                                <option value="80">80</option>
                                <option value="90">90</option>
                                <option value="100">100</option>
                                <option value="110">110</option>
                                <option value="120">120</option>
                                <option value="130">130</option>
                                <option value="140">140</option>
                                <option value="150">150</option>
                                <option value="160">160</option>
                                <option value="170">170</option>
                                <option value="180">180</option>
                                <option value="190">190</option>
                                <option value="200">200</option>
                            </select>
                            <span>K&euro;</span>
                        </div>
                    </fieldset>
                </div>

                <div class="liste-criteres liste-criteres-extensible critere-item js-liste-criteres js-secteurs-tab">
                    <div class="critere js-critere">
                        <div class="open-critere js-open-critere">Secteur</div>
                        <span class="icon-critere icon-arrow-top"></span>
                    </div>
                    <fieldset class="js-secteurs-moteur-liste"></fieldset>
                </div>
                <div class="liste-criteres filtrer-criteres critere-item js-filtrer-criteres">
                    <span class="label-filtrer">Filtrer la recherche</span>
                    <span class="label-modifier">Modifier les filtres</span>
                    <span class="icon-critere icon-arrow-top"></span>
                </div>
            </div>

            <div class="col-xs-12 col-sm-5 col-md-4 flex flex-wrap items-center text-left criteria-container mobile-reverse">
                <div class="wrapper-alerte-effacer-criteres">
                    <div class="liste-criteres effacer-criteres critere-item hidden js-effacer-criteres">
                        <span>Effacer les filtres</span>
                        <span class="icon-critere icon-cross"></span>
                    </div>

                    <div class="wrapper-alerte critere-item hidden js-creer-alerte">
                        <a class="ce-button button-sm button-green modif-alert hidden p-1 w-200 js-alerte-activee">
                            <span class="icon-alerte"></span> Alerte activée !
                        </a>
                        <a class="ce-button button-sm button-red button-glow btn-creer-alerte hidden js-btn-creer-alerte">
                            <span class="icon-alerte"></span> Activer l'alerte
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


        <div class="cta-search-mobile js-cta-search-mobile col-md-12">
            <button class="moteur-top-button js-moteur-top-submit" aria-label="Rechercher">
    <div class="moteur-loader-search js-moteur-loader-search">
        <div class="loading-animation"></div>
    </div>
    <span xtclib="Form_rechercher" class="icon-search"></span>
    <span class="lancer-recherche">Rechercher</span>
</button>

        </div>
    </div>

    <div class="rappel-criteres-scroll js-rappel-criteres-scroll-activation">
        <div class="center-column">
            <div class="rappel-criteres-wrapper js-rappel-criteres-scroll">
                <a href="#cadremploi-namespace" class="rappel-criteres">
                    <span class="icon-search"></span>
                    <span class="ma-recherche-label"><strong>Ma recherche : </strong></span>
                    <span class="rappel-criteres-content js-rappel-criteres"></span>
                    <span class="js-rappel-criteres-loc be-ellipsis"></span>
                </a>
                <div class="wrapper-alerte js-creer-alerte hidden kit-ui">
                    <a class="ce-button button-sm button-green action-button modif-alert hidden js-alerte-activee">
                        <span class="icon-alerte"></span> Alerte activée !
                    </a>
                    <a class="ce-button button-sm button-red action-button btn-creer-alerte hidden js-btn-creer-alerte">
                        <span class="icon-alerte"></span> Activer l'alerte
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

    


    
        
        
            <div class="center-column">
                <div class="js-page-liste-offres">
                        
                    <div class="row">
    <div class="col-lg-8">
        <div class="row">
            
            
            
            
        </div>
        <div class="row">
            <div class="col-xs-12 bloc-annonce js-bloc-annonce">
                














<div class="row nopadding-nomargin-horizontal">
    
        <h1 class="titre-specifique">Offres d'emploi
            <span>Nantes</span>
        </h1>
        <p class="bloc-chapo">Premier pôle d'activité du Grand Ouest, la ville de Nantes multiplie les atouts pour attirer les cadres. Couplées à une qualité de vie, l'offre et la richesse économiques de la métropole nantaise contribuent à un marché de l'emploi à Nantes dynamique et tourné vers l'avenir. Les industries du futur, les secteurs de la transition énergétique, du numérique et du high-tech participent en particulier à la transformation du <strong>marché du travail à Nantes</strong>. En 2020, une étude Cadremploi montrait d'ailleurs tout l'intérêt des cadres pour la ville de Nantes, classée deuxième ville préférée des personnes interrogées pour une installation en dehors de la capitale.</p>
    
    <div class="compteur-offres-et-tri col-lg-12">
        <div class="compteur-offres-container">
                
                    
                        <h2 class="ce-title title-md text-left mb-1">1&nbsp;175 offres d'emploi
                            
                                <span class="titre-seo-specifique">Nantes</span>
                            
                        </h2>
                    
                    
                
        </div>

        
            <div class="tri-date-pertinence">
                <select name="tri" class="small liste__tri js-tri" dir="rtl" title="tri de liste">
                    <option name="tri" value="" selected="selected">
                        Tri par pertinence
                    </option>
                    <option name="tri" value="DATE_PUBLICATION"
                            >
                        Tri par date
                    </option>
                </select>
                <span class="icon-arrow-top"></span>
            </div>
        
    </div>
</div>





    <div class="row nopadding-nomargin-horizontal">
        <div class="col-lg-12">
            <div id="offreSponso" class="pub-native row"></div>
        </div>
    </div>
    


<div class="row nopadding-nomargin-horizontal">
    <div class="col-lg-12 liste-offres-wrapper js-liste-offre">
        
        
            <ul id="liste-postuler" class="liste-offres nopadding-nomargin-horizontal">
                
                    <div data-index="0" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392798699985439"
                               data-value="156392798699985439"
                               data-index="0"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Consultant-formateur en management et relations humaines IMPULSION CONSULTING ® H/F</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392798699985439">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/b50cd367-9ca3-494f-d0fe-1b9a69442900/logo100"
                                                 alt="IMPULSION CONSULTING">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">IMPULSION CONSULTING</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">Indépendant / Freelance</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                    <div class="col-sm-8">
                                        <a class="js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392798699985439">
                                            <p class="extrait-offre">Sur un marché de la formation et de l'accompagnement de plusieurs milliards d'euros annuels et dans le cadre de notre développement en France, Suisse, Belgique et Luxembourg, nous recherchons des consultants-formateurs (H/F) indépendants désireux de créer ou de développer une ...</p>
                                        </a>
                                    </div>

                                    
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="nopadding-nomargin-horizontal offre">
                                            <div class="video-page-entreprise"
                                                 style="background: url(https://lh3.googleusercontent.com/eEGVXsykG3cl28l5ftTVqVo85Gonsv7rDNkQKP-6Wv3ewl3D9bLjOCioS41XpZiTvv_3p5R2XA6zAzJH7vS7FbDB8WG0LKE1=s1000)">
                                                <a class="vjs-big-play-button"
                                                   href='/emploi/detail_offre?offreId=156392798699985439#modal-cover-video-entreprise'></a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392798699985439"
                               aria-label="Consultant-formateur en management et relations humaines IMPULSION CONSULTING ® H/F">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392798699985439" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392798699985439#js-annonce-wrapper"
                                                           data-value="156392798699985439">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392798699985439"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392798699985439"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392798699985439" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392798699985439">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="1" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392784129993399"
                               data-value="156392784129993399"
                               data-index="1"
                               data-type-candidature="redirection">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Agent Commercial Automobile H/F</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392784129993399">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/f009e1f5-d0d4-4314-62d4-a26154053f00/logo100"
                                                 alt="LGHA AUTO">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">LGHA AUTO</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Rez&eacute;</span>
                                            
                                            
                                                <span class="localisation">Télétravail</span>
                                            
                                            <span class="js-type-contrat-offre">Indépendant / Freelance</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                    <div class="col-sm-8">
                                        <a class="js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392784129993399">
                                            <p class="extrait-offre">Changez de vie, devenez Agent CapCar !  Rejoignez le réseau d'agents indépendants CapCar pour aider les 6 millions de Français qui chaque année vendent et achètent une voiture d'occasion. Notre société affiche une croissance de 200% sur l'année écoulée, bénéficiez-en !  Le sec...</p>
                                        </a>
                                    </div>

                                    
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="nopadding-nomargin-horizontal offre">
                                            <div class="video-page-entreprise"
                                                 style="background: url(https://lh3.googleusercontent.com/tJ1xYSsOXvYw1HfHMp3NR5ThqzKOSYX3AuA-gQcxqgNmW_ZCeI4MR-le41FGSibsw3a7u43W2MhUgjIvpzQKJAi1Gi9fk_37=s1000)">
                                                <a class="vjs-big-play-button"
                                                   href='/emploi/detail_offre?offreId=156392784129993399#modal-cover-video-entreprise'></a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392784129993399"
                               aria-label="Agent Commercial Automobile H/F">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392784129993399" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    

                                        
                                    <button id="sent-156392784129993399"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392784129993399"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392784129993399" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392784129993399">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                        <div id="js-completion-profil-placeholder" class="widget-completion-profil-mobile visible-xs">
                            






















                        </div>
                    
                
                    <div data-index="2" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392773334996996"
                               data-value="156392773334996996"
                               data-index="2"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Chargé des ressources humaines H/F</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392773334996996">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/d5924517-bb23-4fb6-0ba8-2d59287b1400/logo100"
                                                 alt="FED HUMAN">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">FED HUMAN</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392773334996996">
                                        <p class="extrait-offre">Évoluez au sein d'une entreprise dynamique en tant que Chargé des ressources humaines !  Mélissa SEGOUIN, Consultante en recrutement au sein du cabinet Fed Human, spécialisé sur les métiers des RH et de la paie. Je recrute pour le compte de mon client un profil Chargé des ress...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392773334996996"
                               aria-label="Chargé des ressources humaines H/F">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                        <span class="icon-play-button"></span>
                                        <span class="voir-la-video">Voir la vidéo</span>
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392773334996996" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392773334996996#js-annonce-wrapper"
                                                           data-value="156392773334996996">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392773334996996"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392773334996996"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392773334996996" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392773334996996">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="3" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699543991632"
                               data-value="156392699543991632"
                               data-index="3"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Responsable activité hydraulique h/f</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392699543991632">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">LE MERCATO DE L'EMPLOI</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Saint-Herblain</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699543991632">
                                        <p class="extrait-offre"> En tant que Responsable Technique d'Activité Hydraulique, vous serez le garant de l'expertise technique dans ce domaine.  Votre rôle sera d'assurer la gestion, le développement et le suivi des projets hydrauliques auprès de nos clients industriels.  Vous collaborerez étroitem...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699543991632"
                               aria-label="Responsable activité hydraulique h/f">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper no-photo">
                            <div id="offre-156392699543991632" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392699543991632#js-annonce-wrapper"
                                                           data-value="156392699543991632">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392699543991632"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392699543991632"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392699543991632" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392699543991632">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="4" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699542949040"
                               data-value="156392699542949040"
                               data-index="4"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Responsable activité automation h/f</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392699542949040">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">LE MERCATO DE L'EMPLOI</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Saint-Herblain</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699542949040">
                                        <p class="extrait-offre"> En tant que Responsable Technique Activité Automation, vous serez le garant de l'expertise technique dans le domaine de l'automation, de la motion control, du négoce de composants électriques, électroniques et d'automatismes.   Votre rôle consistera à assurer la gestion, le d...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699542949040"
                               aria-label="Responsable activité automation h/f">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper no-photo">
                            <div id="offre-156392699542949040" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392699542949040#js-annonce-wrapper"
                                                           data-value="156392699542949040">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392699542949040"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392699542949040"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392699542949040" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392699542949040">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                            <a href="/emploi/createur_cv" target="_blank" class="bloc-cv-builder row offre-wrapper kit-ui">
                                <div class="bloc-cv-builder__bloc">
                                    <div class="bloc-cv-builder__bloc-title">
                                        <div class="bloc-cv-builder__title">Besoin d&apos;un CV ?</div>
                                        <img alt="" src="https://cdn-cadremploi.carriere.fcms.io/assets/img/creer-cv/sunny.svg" class="bloc-cv-builder__sunny-img" />
                                    </div>
                                    <p class="bloc-cv-builder__paragraph">
                                        Gagnez du temps : cr&eacute;ez votre CV avec Cadremploi et postulez en un clic. C&apos;est gratuit !
                                    </p>
                                    <p class="bloc-cv-builder__paragraph__mobile">Cr&eacute;ez gratuitement le CV parfait pour votre job</p>
                                    <button class="ce-cvbuilder-btn bloc-cv-builder__button card__4">Cr&eacute;er mon CV en ligne</button>
                                </div>
                                <div class="bloc-cv-builder__frame">
                                    <img alt="cv-builder" class="bloc-cv-builder__templates-image" src="https://cdn-cadremploi.carriere.fcms.io/assets/img/creer-cv/templates.png" />
                                    <img alt="cv-builder" class="bloc-cv-builder__templates-image__mobile" src="https://cdn-cadremploi.carriere.fcms.io/assets/img/creer-cv/templates-mobile.png" />
                                </div>
                            </a>
                        
                    </div>
                    
                
                    <div data-index="5" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699517949145"
                               data-value="156392699517949145"
                               data-index="5"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Conseiller en Gestion de Patrimoine (H/F)</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392699517949145">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">LE MERCATO DE L'EMPLOI</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">Indépendant / Freelance</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699517949145">
                                        <p class="extrait-offre"> En tant que Conseiller en Gestion du Patrimoine, vous serez responsable d'accompagner les clients et prospects dans la personnalisation de solutions dans les domaines de l'épargne, la retraite, la prévoyance et l'immobilier. Vos missions comprendront:  - l'analyse du patrimoi...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699517949145"
                               aria-label="Conseiller en Gestion de Patrimoine (H/F)">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper no-photo">
                            <div id="offre-156392699517949145" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392699517949145#js-annonce-wrapper"
                                                           data-value="156392699517949145">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392699517949145"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392699517949145"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392699517949145" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392699517949145">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="6" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699345996863"
                               data-value="156392699345996863"
                               data-index="6"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Chargé d'Affaires Maintenance H/F</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392699345996863">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">LE MERCATO DE L'EMPLOI</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699345996863">
                                        <p class="extrait-offre"> Sous la direction éclairée du responsable du pôle maintenance, vous prendrez en main un portefeuille de contrats de maintenance pour des clients Industriels et Tertiaires et vous développerez l'activité en manageant une équipe de Techniciens de Maintenance Frigoristes et Plom...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699345996863"
                               aria-label="Chargé d'Affaires Maintenance H/F">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper no-photo">
                            <div id="offre-156392699345996863" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392699345996863#js-annonce-wrapper"
                                                           data-value="156392699345996863">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392699345996863"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392699345996863"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392699345996863" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392699345996863">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="7" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699043981584"
                               data-value="156392699043981584"
                               data-index="7"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Responsable activité hydraulique h/f</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392699043981584">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">LE MERCATO DE L'EMPLOI</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Saint-Herblain</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699043981584">
                                        <p class="extrait-offre"> En tant que Responsable Technique d'Activité Hydraulique, vous serez le garant de l'expertise technique dans ce domaine. Votre rôle sera d'assurer la gestion, le développement et le suivi des projets hydrauliques auprès de nos clients industriels. Vous collaborerez étroitemen...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699043981584"
                               aria-label="Responsable activité hydraulique h/f">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper no-photo">
                            <div id="offre-156392699043981584" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392699043981584#js-annonce-wrapper"
                                                           data-value="156392699043981584">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392699043981584"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392699043981584"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392699043981584" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392699043981584">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="8" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699042958487"
                               data-value="156392699042958487"
                               data-index="8"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Responsable activité automation h/f</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392699042958487">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">LE MERCATO DE L'EMPLOI</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Saint-Herblain</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699042958487">
                                        <p class="extrait-offre"> En tant que Responsable Technique Activité Automation, vous serez le garant de l'expertise technique dans le domaine de l'automation, de la motion control, du négoce de composants électriques, électroniques et d'automatismes.  Votre rôle consistera à assurer la gestion, le dé...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392699042958487"
                               aria-label="Responsable activité automation h/f">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper no-photo">
                            <div id="offre-156392699042958487" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392699042958487#js-annonce-wrapper"
                                                           data-value="156392699042958487">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392699042958487"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392699042958487"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392699042958487" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392699042958487">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="9" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392689999979752"
                               data-value="156392689999979752"
                               data-index="9"
                               data-type-candidature="redirection">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Attaché Commercial H/F en alternance</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392689999979752">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/06241907-e94a-452a-00c4-eb1570dde000/logo100"
                                                 alt="OPENCLASSROOMS">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">OPENCLASSROOMS</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">Apprentissage/Alternance</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392689999979752">
                                        <p class="extrait-offre">Apprenez un métier d'avenir en alternance avec OpenClassrooms. OpenClassrooms recherche un COMMERCIAL TERRAIN F/H/X en contrat d'apprentissage pour un de nos partenaires dans la ville de Lille, pour préparer une formation diplômante reconnue par l'État d'Attaché(e) Commercial(...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392689999979752"
                               aria-label="Attaché Commercial H/F en alternance">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392689999979752" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    

                                        
                                    <button id="sent-156392689999979752"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392689999979752"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392689999979752" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392689999979752">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="10" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392689937961971"
                               data-value="156392689937961971"
                               data-index="10"
                               data-type-candidature="redirection">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Alternance - Architecte cybersécurité H/F Malakoff 92</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392689937961971">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/06241907-e94a-452a-00c4-eb1570dde000/logo100"
                                                 alt="OPENCLASSROOMS">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">OPENCLASSROOMS</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">Apprentissage/Alternance</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392689937961971">
                                        <p class="extrait-offre">Apprenez un métier d'avenir en alternance avec OpenClassrooms. OpenClassrooms recherche un Architecte Cybersécurité H/F en contrat d'apprentissage pour l'un de nos partenaires. Vous souhaitez préparer le parcours Administrateur systèmes, réseaux et sécurité  Avec OpenClassroom...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392689937961971"
                               aria-label="Alternance - Architecte cybersécurité H/F Malakoff 92">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392689937961971" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    

                                        
                                    <button id="sent-156392689937961971"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392689937961971"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392689937961971" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392689937961971">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="11" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392686489978546"
                               data-value="156392686489978546"
                               data-index="11"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Safety Process Engineer - Lor2 H/F</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392686489978546">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/820d278c-1e45-4994-d5f9-e4ae590f3800/logo100"
                                                 alt="ALDEBARAN GROUP">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">ALDEBARAN GROUP</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                    <div class="col-sm-8">
                                        <a class="js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392686489978546">
                                            <p class="extrait-offre">RECAPITULATIF  Dans le cadre du renforcement de nos équipes Sécurité Industrielle, nous recherchons un Ingénieur en sécurité des procédés (Safety Process Engineer) pour définir, dimensionner et spécifier les systèmes de sécurité des installations.  Rejoignez l'aventure d'ALDEB...</p>
                                        </a>
                                    </div>

                                    
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="nopadding-nomargin-horizontal offre">
                                            <div class="video-page-entreprise"
                                                 style="background: url(https://lh3.googleusercontent.com/g-Lsk8FU1qzQzxZf6cOudFox2BKoiA1Bm_IDsvQvtQ670sIK3ycg5t3tj-x7uGqHSIfYmycW6CWgIrte48XDRro2l_7n7HuB=s1000)">
                                                <a class="vjs-big-play-button"
                                                   href='/emploi/detail_offre?offreId=156392686489978546#modal-cover-video-entreprise'></a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392686489978546"
                               aria-label="Safety Process Engineer - Lor2 H/F">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392686489978546" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392686489978546#js-annonce-wrapper"
                                                           data-value="156392686489978546">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392686489978546"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392686489978546"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392686489978546" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392686489978546">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="12" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392686479951798"
                               data-value="156392686479951798"
                               data-index="12"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Ingénieur Génie Civil - ref. JOB-1188 H/F</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392686479951798">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/820d278c-1e45-4994-d5f9-e4ae590f3800/logo100"
                                                 alt="ALDEBARAN GROUP">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">ALDEBARAN GROUP</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                    <div class="col-sm-8">
                                        <a class="js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392686479951798">
                                            <p class="extrait-offre">RECAPITULATIF :  Nous recherchons un ingénieur en génie civil pour rejoindre notre équipe passionnée et innovante. En tant que chargé d'affaires en génie civil, vous serez responsable de la réalisation de diverses tâches clés liées à l'ingénierie civile. Vous travaillerez sur ...</p>
                                        </a>
                                    </div>

                                    
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="nopadding-nomargin-horizontal offre">
                                            <div class="video-page-entreprise"
                                                 style="background: url(https://lh3.googleusercontent.com/g-Lsk8FU1qzQzxZf6cOudFox2BKoiA1Bm_IDsvQvtQ670sIK3ycg5t3tj-x7uGqHSIfYmycW6CWgIrte48XDRro2l_7n7HuB=s1000)">
                                                <a class="vjs-big-play-button"
                                                   href='/emploi/detail_offre?offreId=156392686479951798#modal-cover-video-entreprise'></a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392686479951798"
                               aria-label="Ingénieur Génie Civil - ref. JOB-1188 H/F">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392686479951798" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392686479951798#js-annonce-wrapper"
                                                           data-value="156392686479951798">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392686479951798"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392686479951798"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392686479951798" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392686479951798">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="13" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392652050976014"
                               data-value="156392652050976014"
                               data-index="13"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Tech Lead H/F</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392652050976014">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/a8313ae0-caa6-455c-4c1b-eae071317500/logo100"
                                                 alt="MICHAEL PAGE">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">MICHAEL PAGE</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392652050976014">
                                        <p class="extrait-offre">Rattaché au DSI, vous avez en charge de mener les projets techniques et informatique de l'entreprise.  Pour cela, vous avez pour principales missions :   * Organiser l'équipe de développement (diviser les rôles, encadrer coordonner et former),  * Étudier, chiffrer et budgétise...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392652050976014"
                               aria-label="Tech Lead H/F">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392652050976014" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392652050976014#js-annonce-wrapper"
                                                           data-value="156392652050976014">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392652050976014"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392652050976014"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392652050976014" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392652050976014">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="14" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392648290967908"
                               data-value="156392648290967908"
                               data-index="14"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Conducteur de Travaux TCE H/F</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392648290967908">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/bbaea74d-8209-4056-89f9-1c90c1492100/logo100"
                                                 alt="PAGE PERSONNEL">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">PAGE PERSONNEL</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Saint-Herblain</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392648290967908">
                                        <p class="extrait-offre">En tant que Conducteur de Travaux TCE, vous êtes rattaché au Responsable d'Agence et vous participez au suivi de l'exécution de votre chantier.  Vous êtes le responsable d'un ou plusieurs lots et participez au bon déroulement des chantiers.  Pour cela, vos missions sont :    *...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392648290967908"
                               aria-label="Conducteur de Travaux TCE H/F">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392648290967908" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392648290967908#js-annonce-wrapper"
                                                           data-value="156392648290967908">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392648290967908"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392648290967908"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392648290967908" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392648290967908">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="15" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392646831913594"
                               data-value="156392646831913594"
                               data-index="15"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Manager Audit H/F</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392646831913594">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/fe9d7c01-2391-4b16-9fe8-7568da0b7b00/logo100"
                                                 alt="FED FINANCE">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">FED FINANCE</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392646831913594">
                                        <p class="extrait-offre">Vincent FERRON, consultant en recrutement chez FED, recherche pour son client, un Cabinet comptable et d'Audit , un Manager Audit H/F, pour un poste en CDI a Nantes !  Le cabinet est composé aujourd'hui de 45 collaborateurs dont 4 personnes en Audit sur le site de Nantes.    V...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392646831913594"
                               aria-label="Manager Audit H/F">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                        <span class="icon-play-button"></span>
                                        <span class="voir-la-video">Voir la vidéo</span>
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392646831913594" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392646831913594#js-annonce-wrapper"
                                                           data-value="156392646831913594">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392646831913594"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392646831913594"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392646831913594" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392646831913594">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                            <a href="/emploi/createur_cv" target="_blank" class="bloc-cv-builder row offre-wrapper kit-ui">
                                <div class="bloc-cv-builder__bloc">
                                    <div class="bloc-cv-builder__bloc-title">
                                        <div class="bloc-cv-builder__title">Besoin d&apos;un CV ?</div>
                                        <img alt="" src="https://cdn-cadremploi.carriere.fcms.io/assets/img/creer-cv/sunny.svg" class="bloc-cv-builder__sunny-img" />
                                    </div>
                                    <p class="bloc-cv-builder__paragraph">
                                        Gagnez du temps : cr&eacute;ez votre CV avec Cadremploi et postulez en un clic. C&apos;est gratuit !
                                    </p>
                                    <p class="bloc-cv-builder__paragraph__mobile">Cr&eacute;ez gratuitement le CV parfait pour votre job</p>
                                    <button class="ce-cvbuilder-btn bloc-cv-builder__button card__15">Cr&eacute;er mon CV en ligne</button>
                                </div>
                                <div class="bloc-cv-builder__frame">
                                    <img alt="cv-builder" class="bloc-cv-builder__templates-image" src="https://cdn-cadremploi.carriere.fcms.io/assets/img/creer-cv/templates.png" />
                                    <img alt="cv-builder" class="bloc-cv-builder__templates-image__mobile" src="https://cdn-cadremploi.carriere.fcms.io/assets/img/creer-cv/templates-mobile.png" />
                                </div>
                            </a>
                        
                    </div>
                    
                
                    <div data-index="16" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392646830997668"
                               data-value="156392646830997668"
                               data-index="16"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Chef de mission comptable H/F</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392646830997668">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/fe9d7c01-2391-4b16-9fe8-7568da0b7b00/logo100"
                                                 alt="FED FINANCE">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">FED FINANCE</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392646830997668">
                                        <p class="extrait-offre">Vincent FERRON, consultant en recrutement chez FED, recherche pour son client , cabinet d'expertise comptable , un Chef de mission comptable H/F, en CDI à Nantes (nord).  Cabinet d'expertise comptable composé d'une vingtaine de collaborateurs recherche son futur Chef de missio...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392646830997668"
                               aria-label="Chef de mission comptable H/F">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                        <span class="icon-play-button"></span>
                                        <span class="voir-la-video">Voir la vidéo</span>
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392646830997668" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392646830997668#js-annonce-wrapper"
                                                           data-value="156392646830997668">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392646830997668"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392646830997668"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392646830997668" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392646830997668">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="17" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392645366995043"
                               data-value="156392645366995043"
                               data-index="17"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Technicien sav h/f</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392645366995043">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/bb7cc3e9-3205-4a58-1084-b6dd00825e00/logo100"
                                                 alt="HAYS">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">HAYS</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392645366995043">
                                        <p class="extrait-offre">En qualité de Technicien SAV itinérant, vous êtes chargé d'assurer l'entretien et le bon fonctionnement des équipements. A ce titre, vous avez pour missions : vous réalisez les opérations de maintenance mécanique et électrique (préventive et corrective) des machines d'usinage ...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392645366995043"
                               aria-label="Technicien sav h/f">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392645366995043" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392645366995043#js-annonce-wrapper"
                                                           data-value="156392645366995043">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392645366995043"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392645366995043"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392645366995043" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392645366995043">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="18" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392642002951995"
                               data-value="156392642002951995"
                               data-index="18"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Responsable logistique h/f</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392642002951995">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/cd5d29d1-451e-4bbe-317f-9475dde92f00/logo100"
                                                 alt="BASTIDE GROUPE">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">BASTIDE GROUPE</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392642002951995">
                                        <p class="extrait-offre">1 RESPONSABLE LOGISTIQUE H/F en CDI pour notre division Nutrition Perfusion à Nantes. Vous intervenez, en tant que manager de votre équipe logistique, afin de garantir la gestion des stocks et la disponibilité des marchandises à la vente et à la location destinés à nos patient...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392642002951995"
                               aria-label="Responsable logistique h/f">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392642002951995" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392642002951995#js-annonce-wrapper"
                                                           data-value="156392642002951995">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392642002951995"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392642002951995"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392642002951995" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392642002951995">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="19" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392641138983434"
                               data-value="156392641138983434"
                               data-index="19"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Technicien pi&d (h/f)</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392641138983434">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/800405e5-2f02-49e6-7f36-efab99299e00/logo100"
                                                 alt="NEO2">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">NEO2</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392641138983434">
                                        <p class="extrait-offre">Pour le compte de l'un de nos client, acteur majeur dans l'étude en Energie et le Naval nous recherchons un "Préparateur PI&D".  - Créer et mettre à jour les schémas PI&D conformément aux spécifications du projet. - Collaborer avec les ingénieurs et autres parties prenantes po...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392641138983434"
                               aria-label="Technicien pi&d (h/f)">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392641138983434" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392641138983434#js-annonce-wrapper"
                                                           data-value="156392641138983434">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392641138983434"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392641138983434"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392641138983434" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392641138983434">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="20" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392641137965799"
                               data-value="156392641137965799"
                               data-index="20"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Technicien études Process (H/F)</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392641137965799">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/800405e5-2f02-49e6-7f36-efab99299e00/logo100"
                                                 alt="NEO2">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">NEO2</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392641137965799">
                                        <p class="extrait-offre">Pour le compte de l'un de nos client, acteur majeur dans l'étude en Energie et le Naval nous recherchons un "Technicien études Process".  - Participer à la réalisation d'études techniques liées aux processus de production. - Analyser les données opérationnelles pour identifier...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392641137965799"
                               aria-label="Technicien études Process (H/F)">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392641137965799" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392641137965799#js-annonce-wrapper"
                                                           data-value="156392641137965799">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392641137965799"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392641137965799"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392641137965799" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392641137965799">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="21" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392633786937608"
                               data-value="156392633786937608"
                               data-index="21"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Responsable recrutement et marque employeur H/F</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392633786937608">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/91700e1c-22f2-44b7-c26e-47d470c12a00/logo100"
                                                 alt="VIDAL ASSOCIATES">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">VIDAL ASSOCIATES</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392633786937608">
                                        <p class="extrait-offre">Afin d'accompagner son développement, nous recrutons un(e):  Responsable Recrutement et Marque Employeur - H/F Poste en CDI Basé à Nantes (ou Laval)  En lien avec les différentes Directions des Ressources Humaines et les managers aux différents niveaux de l'organisation, vous ...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392633786937608"
                               aria-label="Responsable recrutement et marque employeur H/F">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392633786937608" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392633786937608#js-annonce-wrapper"
                                                           data-value="156392633786937608">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392633786937608"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392633786937608"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392633786937608" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392633786937608">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="22" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392630631985995"
                               data-value="156392630631985995"
                               data-index="22"
                               data-type-candidature="formulaire">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Commercial GMS rayon bazard H/F</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392630631985995">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/02f25bec-67da-4005-2107-f2dd95465e00/logo100"
                                                 alt="ABC FOR VALUE">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">ABC FOR VALUE</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                
                                    <a class="col-xs-12 js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392630631985995">
                                        <p class="extrait-offre">Rattaché au directeur de la région ouest basé à Fougère, vous avez pour mission de visiter tous les points de vente GMs de votre secteur. Pour se faire, vous vous appuyez sur un existant, des salons spéciaux pour présenter votre offre.  travaillant en home office un jour par s...</p>
                                    </a>
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392630631985995"
                               aria-label="Commercial GMS rayon bazard H/F">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392630631985995" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    
                                        
                                            
                                            
                                            
                                                
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        <a class="ce-button button-sm button-red button-glow action-button postuler-rapidement js-postuler-directly"
                                                           href="/emploi/detail_offre?offreId=156392630631985995#js-annonce-wrapper"
                                                           data-value="156392630631985995">
                                                            <span class="ce-button-icon icon-ic-postuler-rapidement icon-postuler-rapide "></span>
                                                            <span>Candidature rapide</span>
                                                        </a>
                                                    
                                                    
                                                
                                            
                                        
                                    

                                        
                                    <button id="sent-156392630631985995"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392630631985995"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392630631985995" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392630631985995">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="23" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392630612986356"
                               data-value="156392630612986356"
                               data-index="23"
                               data-type-candidature="redirection">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Product Owner / Business Analyst Banque Assurance F/H</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392630612986356">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/6dcc8680-7b6d-4e18-4433-50877b68b400/logo100"
                                                 alt="CGI">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">CGI</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                    <div class="col-sm-8">
                                        <a class="js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392630612986356">
                                            <p class="extrait-offre">Vous rejoignez CGI, leader mondial du conseil et des services numériques à Nantes et accompagnez nos clients des secteurs banque et assurance.  Open Banking et plateformes, paiement, gouvernance de la donnée, automatisation, réglementation et finance durable, cyberprotection.....</p>
                                        </a>
                                    </div>

                                    
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="nopadding-nomargin-horizontal offre">
                                            <div class="video-page-entreprise"
                                                 style="background: url(https://lh3.googleusercontent.com/GLLJ9Qxq10tA5pgb9OWaw74FKFBuVBsDGMH3wTbMEXfYzOkj41ZZUNjyaWyYzv_W3CsSbGNP30asVt59WBV-2BglpeR8gOg=s1000)">
                                                <a class="vjs-big-play-button"
                                                   href='/emploi/detail_offre?offreId=156392630612986356#modal-cover-video-entreprise'></a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392630612986356"
                               aria-label="Product Owner / Business Analyst Banque Assurance F/H">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392630612986356" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    

                                        
                                    <button id="sent-156392630612986356"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392630612986356"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392630612986356" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392630612986356">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
                    <div data-index="24" class="row offre-wrapper kit-ui">
                        <li class="offre-card">
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392630001957883"
                               data-value="156392630001957883"
                               data-index="24"
                               data-type-candidature="redirection">
                                <div class="col-xs-12 titre-offre-container">
                                        <div class="mb-3">
                                             
                                                 
                                                     <h3 class="ce-link link-title d-inline-block text-left mr-1 mb-0">Développeur(euse) Front-end Javascript/NodeJS F/H</h3>
                                                 
                                                 
                                             
                                            
                                                <span class="ce-label label-new d-inline">
                                                    <span id="js-label-mea-156392630001957883">Nouveau</span>
                                                </span>
                                            
                                        </div>
                                </div>
                                <div class="col-xs-12 premiere-ligne">
                                    
                                        <div class="logo-recruteur">
                                            <img class="ce-img img-logo-list"
                                                 src="https://imagedelivery.net/BN-U87wrUjbdYBHZwNH6NA/6dcc8680-7b6d-4e18-4433-50877b68b400/logo100"
                                                 alt="CGI">
                                        </div>
                                    
                                    <div class="infos-offre">
                                        <div class="nom-recruteur-et-notes type-liste-offre">
                                            
                                                <span class="nom-recruteur be-ellipsis">CGI</span>
                                            
                                            
                                        </div>
                                        <div>
                                            
                                                <span class="localisation">Nantes</span>
                                            
                                            
                                            <span class="js-type-contrat-offre">CDI</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="row video-snippet-container">
                                
                                    <div class="col-sm-8">
                                        <a class="js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392630001957883">
                                            <p class="extrait-offre">Développement front-end, Back-end, Fullstack,... Ca vous parle ? Nous rejoindre, c'est intégrer une communauté technique animée aussi bien par le défi de répondre aux enjeux de nos clients en proposant des solutions innovantes, que le partage entre pairs autour des dernières t...</p>
                                        </a>
                                    </div>

                                    
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="nopadding-nomargin-horizontal offre">
                                            <div class="video-page-entreprise"
                                                 style="background: url(https://lh3.googleusercontent.com/GLLJ9Qxq10tA5pgb9OWaw74FKFBuVBsDGMH3wTbMEXfYzOkj41ZZUNjyaWyYzv_W3CsSbGNP30asVt59WBV-2BglpeR8gOg=s1000)">
                                                <a class="vjs-big-play-button"
                                                   href='/emploi/detail_offre?offreId=156392630001957883#modal-cover-video-entreprise'></a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                
                                
                            </div>
                            <a class="row js-lien-detail-offre offre" href="/emploi/detail_offre?offreId=156392630001957883"
                               aria-label="Développeur(euse) Front-end Javascript/NodeJS F/H">
                                <div class="col-xs-12 derniere-ligne">
                                    
                                    <time class="date-publication">
                                            Publiée il y a moins de 24h
                                    </time>
                                </div>
                            </a>
                        </li>

                        <div class="postuler-button-wrapper">
                            <div id="offre-156392630001957883" class="postuler">
                                <div class="postuler-1-clic js-postuler-1-clic d-flex flex-col">
                                    

                                        
                                    <button id="sent-156392630001957883"
                                            class="ce-button button-sm button-green action-button" style="display: none;"
                                            disabled>Envoyé <span class="ml-2 icon-checkmark"></span></button>
                                        
                                    <a id="retry-156392630001957883"
                                       class="ce-button button-sm button-red action-button js-postuler-retry"
                                       data-value="156392630001957883" style="display: none;">Ré-essayer ?</a>
                                </div>
                                <a class="ce-link link-sm link-arrow-right voir-annonce js-voir-annonce-offre-card"
                                   href="/emploi/detail_offre?offreId=156392630001957883">Voir l'annonce</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                
            </ul>




        
        
    <nav class="pagination">
        <div class="pagination-current">
            
            <div>
                
                    
                        
                            <span class="lien-page page-courante">1</span>
                        
                        
                    
                
                    
                        
                        
                            <a class="lien-page" href="/emploi/liste_offres?ville=nantes-44&page=2">
                                <span class="js-lien-pagination">2</span>
                            </a>
                        
                    
                
                    
                        
                        
                            <a class="lien-page" href="/emploi/liste_offres?ville=nantes-44&page=3">
                                <span class="js-lien-pagination">3</span>
                            </a>
                        
                    
                
                    
                        
                        
                            <a class="lien-page" href="/emploi/liste_offres?ville=nantes-44&page=4">
                                <span class="js-lien-pagination">4</span>
                            </a>
                        
                    
                
                    
                        
                        
                            <a class="lien-page" href="/emploi/liste_offres?ville=nantes-44&page=5">
                                <span class="js-lien-pagination">5</span>
                            </a>
                        
                    
                
                    
                        
                        
                            <a class="lien-page" href="/emploi/liste_offres?ville=nantes-44&page=6">
                                <span class="js-lien-pagination">6</span>
                            </a>
                        
                    
                
                    
                        
                        
                            <a class="lien-page" href="/emploi/liste_offres?ville=nantes-44&page=7">
                                <span class="js-lien-pagination">7</span>
                            </a>
                        
                    
                
                    
                        
                        
                            <a class="lien-page" href="/emploi/liste_offres?ville=nantes-44&page=8">
                                <span class="js-lien-pagination">8</span>
                            </a>
                        
                    
                
                    
                        
                        
                            <a class="lien-page" href="/emploi/liste_offres?ville=nantes-44&page=9">
                                <span class="js-lien-pagination">9</span>
                            </a>
                        
                    
                
            </div>
            
                <a class="suivant" href="/emploi/liste_offres?ville=nantes-44&page=2">
                    <span class="js-lien-pagination-next">Suivant&nbsp;<em>&gt;</em></span>
                </a>
            
        </div>
        <div class="pagination-seo">
            
                <a class="lien-page" href="/emploi/liste_offres?ville=nantes-44&page=10">
                    <span class="js-lien-pagination">10</span>
                </a>
            
                <a class="lien-page" href="/emploi/liste_offres?ville=nantes-44&page=20">
                    <span class="js-lien-pagination">20</span>
                </a>
            
                <a class="lien-page" href="/emploi/liste_offres?ville=nantes-44&page=30">
                    <span class="js-lien-pagination">30</span>
                </a>
            
                <a class="lien-page" href="/emploi/liste_offres?ville=nantes-44&page=40">
                    <span class="js-lien-pagination">40</span>
                </a>
            
        </div>
    </nav>



        
            <div class="bloc-text">
                <h2 class="bloc-titre">Les infos à connaître lors de sa recherche d'emploi à Nantes</h2>

                <h3 class="bloc-sous-titre">Quels sont les salaires moyens à Nantes ?</h3>
                <p>En 2016, un cadre exerçant son activité professionnelle à Nantes et dans les Pays de la Loire dispose en moyenne d'un salaire net horaire de 22,90 &euro;, selon les données communiquées par l'Insee. Toujours selon l'Institut de statistiques, un cadre nantais émarge à 4 171 &euro; net mensuel, soit un peu plus de 50 000 &euro; sur une année. C'est un peu plus que la moyenne nationale, et beaucoup plus que le salaire moyen dans la région toutes professions confondues (31 444 &euro; de revenus en moyenne pour les habitants de Nantes). Comme dans le reste de la France, le salaire moyen d'un cadre à Nantes est très souvent composé d'une part variable, étroitement liée aux résultats économiques de l'entreprise dans laquelle il est employé. Avec le jeu des diverses primes, un cadre nantais performant et expérimenté peut légitimement prétendre gagner plus de 50 000 &euro; voire 60 000 &euro; nets par an.</p>

                <h3 class="bloc-sous-titre">Pourquoi travailler à Nantes ?</h3>
                <p>Située à 2 h de Paris en TGV, la ville de Nantes dispose de nombreux atouts pour séduire les cadres à la recherche d'un emploi rémunérateur et d'un cadre de vie agréable. Sur le plan géographique, la préfecture des Pays de la Loire offre un panel de sites touristiques naturels exceptionnels, avec un ensemble de stations balnéaires. Sur le plan culturel et sportif, la ville de Nantes est régulièrement animée par des festivités et des évènements qui en font l'un des poumons touristiques de la région. Dotée de son propre terroir, la ville de Nantes propose également une multitude de découvertes gustatives. Ajoutez-y un taux de chômage inférieur à la moyenne nationale, et un marché de l'emploi dynamique (près de 10 000 créations nettes d'emplois à Nantes dans le secteur privé en 2018), et vous obtenez les principales raisons de l'attractivité de la ville de Nantes.</p>

                <h3 class="bloc-sous-titre">Quels sont les secteurs qui recrutent le plus à Nantes ?</h3>
                <p>Capitale européenne de l'innovation en 2019, la ville de Nantes regorge d'opportunités professionnelles dans des secteurs tels que le numérique, les services à la personne, les industries du futur ou encore la santé. Les <strong>offres d'emploi à Nantes</strong> sont également légion dans l'agroalimentaire, dans le BTP, ou encore dans le tourisme. À noter que les cadres disposant de compétences dans l'économie bleue font partie des profils les plus recherchés pour un travail à Nantes, en lien direct avec les enjeux de la transition énergétique. Les cadres et chefs de projets informatiques figurent eux aussi parmi les cibles des recruteurs. La culture occupant une place prépondérante dans la ville, les offres d'emploi à Nantes dans le domaine de l'industrie culturelle, mais aussi du design et de la création artistique sont enfin, elles aussi, très nombreuses.</p>
            </div>
        

        
            
                <div id="ResponsivePubBanniereListe" class="ad-container js-autofit-iframe"></div>
            
        
    </div>
</div>

<div class="block-section center-column">
    
</div>

            </div>
        </div>
    </div>
    <div class="col-lg-4" style="padding-top: 23px">
        
        <div class="hidden-xs">
            






















        </div>

        

        
        
            <div class="depot-cv-global-right">
                <div class="js-depotcv1click depotcv1click">
                    <div class="depot-cv-head">
                        <div class="baseline-depot-cv">
                            <span>Faites-vous remarquer,</span>
                            <span>15&nbsp;000 recruteurs vous attendent</span>
                        </div>

                        <div class="cv-area">
                            <p class="je-depose-mon-cv">Je dépose mon CV dans la CV-thèque</p>
                            <span class="icon-cloud-picker"></span>
                            <p class="depot-dv-docs">Doc, Docx, rtf, pdf (3 Mo. max)</p>
                        </div>
                    </div>
                </div>
            </div>
        
        

        
        <div class="recruteurs-a-la-une js-recruteurs-une">
            <div class="">
                <span class="titre-colonne-droite">Les recruteurs à la une</span>
                <div id="ResponsivePubRecruteurListe1"
                     class="recruteurs-item ad-container">
                </div>
                <div id="ResponsivePubRecruteurListe2"
                     class="recruteurs-item ad-container"></div>
                <div id="ResponsivePubRecruteurListe3"
                     class="recruteurs-item ad-container"></div>
                <div id="ResponsivePubRecruteurListe4" class="ad-container"></div>
            </div>
        </div>
        

        
        
    <div class="liste-offres-colonne-seo js-liste-offres-colonne-seo">
        <div class="row">
            <div class="col-lg-12 nopadding-nomargin-horizontal">
                <h3 class="titre-colonne-seo">Vous recherchez...</h3>

                
                    <span class="titre-liste-seo">Une fonction ?</span>
                    <ul class="liste-seo">
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?fct=30100&ville=nantes-44">Vente</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?fct=20100&ville=nantes-44">Direction R &amp; D</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?fct=2&ville=nantes-44">Production - Maintenance - Qualit&eacute; - S&eacute;curit&eacute; - Environnement</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?fct=10200&ville=nantes-44">Middle - Back Office</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?fct=20400&ville=nantes-44">S.A.V.</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?fct=20500&ville=nantes-44">S&eacute;curit&eacute;</a>
                            </li>
                        
                    </ul>
                

                

                

                
                    <span class="titre-liste-seo">Un secteur ?</span>
                    <ul class="liste-seo">
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?sct=70000&ville=nantes-44">Services</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?sct=60000&ville=nantes-44">Industries</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?sct=10000&ville=nantes-44">Construction BTP</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?sct=50000&ville=nantes-44">Services publics - Administrations</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?sct=40000&ville=nantes-44">Informatique - T&eacute;l&eacute;com - Internet</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?sct=15000&ville=nantes-44">Immobilier</a>
                            </li>
                        
                    </ul>
                

                
                    <span class="titre-liste-seo">Une entreprise ?</span>
                    <ul class="liste-seo">
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?entrepriseId=15003936692886084">NEO2</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?entrepriseId=150751247780525">LHH Recruitment Solutions-</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?entrepriseId=150352977385546">FORTIL</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?entrepriseId=150560535388716">IMAGREEN </a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?entrepriseId=150823492152780525">ISCOD</a>
                            </li>
                        
                    </ul>
                

                
                    <span class="titre-liste-seo">Un contrat ?</span>
                    <ul class="liste-seo">
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?tyc=1&ville=nantes-44">CDI</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?tyc=2&ville=nantes-44">CDD</a>
                            </li>
                        
                            <li>
                                <a href="https://www.cadremploi.fr/emploi/liste_offres?tyc=8&ville=nantes-44">Stage</a>
                            </li>
                        
                    </ul>
                
            </div>
        </div>
    </div>


        

    </div>
</div>



                </div>
            </div>
            
    <div class="footer-seo js-footer-seo">
        <div class="titre-liste-seo">
            <span>Offres d'emploi par ville</span>
        </div>
        <div class="liste-seo">
            
                
                    <div>
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=saint-nazaire-44">Saint-Nazaire</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=saint-herblain-44">Saint-Herblain</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=carquefou-44">Carquefou</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=orvault-44">Orvault</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=montoir-de-bretagne-44">Montoir-de-Bretagne</a>

                
                    </div>
                
            
                
                    <div>
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=ancenis-44">Ancenis</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=reze-44">Rez&eacute;</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=la-chapelle-sur-erdre-44">La Chapelle-sur-Erdre</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=treillieres-44">Treilli&egrave;res</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=pornichet-44">Pornichet</a>

                
                    </div>
                
            
                
                    <div>
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=basse-goulaine-44">Basse-Goulaine</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=bouguenais-44">Bouguenais</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=chateaubriant-44">Ch&acirc;teaubriant</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=pornic-44">Pornic</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=coueron-44">Cou&euml;ron</a>

                
                    </div>
                
            
                
                    <div>
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=trignac-44">Trignac</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=les-sorinieres-44">Les Sorini&egrave;res</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=saint-sebastien-sur-loire-44">Saint-S&eacute;bastien-sur-Loire</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=vertou-44">Vertou</a>

                
            
                

                <a href="https://www.cadremploi.fr/emploi/liste_offres?ville=haute-goulaine-44">Haute-Goulaine</a>

                
                    </div>
                
            
            
        </div>
    </div>


            
            
                <div class="fil-ariane-seo">
                    <div class="center-column">
                        <ol class="center-column" itemscope itemtype="http://schema.org/BreadcrumbList">
                            
                                
                                    
                                    
                                        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                                            <a itemprop="item" href="/">
                                        <span itemprop="name"
                                              class="fil-ariane-label">Accueil</span>
                                            </a>
                                            <meta itemprop="position" content="0"/>
                                            <span class="arrow-fil"> > </span>
                                        </li>
                                    
                                
                            
                                
                                    
                                    
                                        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                                            <a itemprop="item" href="/emploi/liste_offres">
                                        <span itemprop="name"
                                              class="fil-ariane-label">Offre d'emploi</span>
                                            </a>
                                            <meta itemprop="position" content="1"/>
                                            <span class="arrow-fil"> > </span>
                                        </li>
                                    
                                
                            
                                
                                    
                                    
                                        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                                            <a itemprop="item" href="/emploi/liste_offres?reg=FR-R">
                                        <span itemprop="name"
                                              class="fil-ariane-label">Pays-de-la-Loire</span>
                                            </a>
                                            <meta itemprop="position" content="2"/>
                                            <span class="arrow-fil"> > </span>
                                        </li>
                                    
                                
                            
                                
                                    
                                    
                                        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                                            <a itemprop="item" href="/emploi/liste_offres?dep=44">
                                        <span itemprop="name"
                                              class="fil-ariane-label">Loire Atlantique</span>
                                            </a>
                                            <meta itemprop="position" content="3"/>
                                            <span class="arrow-fil"> > </span>
                                        </li>
                                    
                                
                            
                                
                                    
                                        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                                            <a itemprop="item" href="/emploi/liste_offres?ville=nantes-44">
                                    <span itemprop="name"
                                          class="fil-ariane-label fil-ariane-label--last">Nantes</span>
                                            </a>
                                            <meta itemprop="position" content="4"/>
                                        </li>
                                    
                                    
                                
                            
                        </ol>
                    </div>
                </div>
            
        
    


</div>


<div class="block-section center-column">
    <div class="cadremploi toaster-creation-alerte-container">
    <div class="toaster toaster-creation-alerte js-toaster-creation-alerte">
        <div class="toaster-alert-first-part">
            <div class="bkg-pattern red"></div>
            <button class="icon-cross-close close-top-right js-close-toaster-creation-alerte" id="js-toaster-creation-alerte-close-btn" aria-label="Fermer"></button>
            <span class="titre">Soyez le premier prévenu !</span>
            <p class="sous-titre">Recevez les offres correspondant à la recherche</p>
            <p class="rappel-criteres-alerte js-rappel-criteres-alerte"></p>
            <form class="js-toaster-creation-alerte-form toaster-creation-alerte-form" method="POST">
                
                    
                    
                        <input class="js-toaster-creation-alerte-email"
                               required
                               placeholder="Email"
                               type="email"
                               pattern="\S+@\S+\.\S+"
                               name="email"
                               value=""
                               aria-label="Email"/>
                        <button class="bouton-creer-alerte" id="js-toaster-creation-alerte-submit-btn">
                            M'alerter
                        </button>
                    
                

            </form>
            <p class="alerte-cgu">En créant votre alerte, vous acceptez les
                <a target="_blank" href="https://www.cadremploi.fr/emploi/conditions-generales-utilisation">conditions d'utilisation</a>
            </p>
        </div>
        <div class="texte-legal">
            <span class="ce-title title-sm">Protection de vos données personnelles</span>
        </div>
        <div class="texte-legal">
    <p class="texte-legal-contenu">Nous recueillons vos données à caractère personnel afin de vous fournir les
        services auxquels vous
        souscrivez et notamment : assurer la création et la gestion de votre compte, vous proposer des
        entreprises et offres d'emploi susceptibles de vous intéresser, vous adresser nos newsletters
        d'information et autres services souscrits. Nous les utiliserons également, sous réserve des options
        souscrites, à des fins de ciblage publicitaire et de prospection commerciale au sein de notre Groupe,
        ainsi qu'avec nos partenaires commerciaux (salons, formation continue, cours de langue, service CV,
        invitations, etc.). Vous disposez à tout moment d'un droit d'accès, de rectification, de suppression et
        d'opposition relativement aux données vous concernant dans les limites prévues par la loi. Vous pouvez
        également à tout moment revoir vos options en matière de prospection commerciale et de ciblage. Ces
        droits peuvent être exercés à tout moment en écrivant à l'adresse <a href="/cdn-cgi/l/email-protection#d490849b8bb7b5b0a6b1b9a4b8bbbd94b2bdb3b5a6bbb7b9a7fab2a6"><span class="__cf_email__" data-cfemail="5b1f0b1404383a3f293e362b3734321b3d323c3a2934383628753d29">[email&#160;protected]</span></a>.
        Cadremploi est un service fourni par la société Figaro Classifieds.
        Pour en savoir plus sur la confidentialité et la protection des données que vous nous communiquez,
        <a target="_blank" href="/emploi/html?page=5">cliquez ici</a></p>
    <a href="#" class="lire-plus js-lire-plus" aria-label="Lire plus">
        <span class="lire-plus-texte"></span>
        <span class="icon-arrow-top"></span>
    </a>
</div>

    </div>

    

    <div class="toaster toaster-validation-alerte js-toaster-validation-alerte">
        <div class="bkg-pattern green"></div>
        <button class="js-close-toaster-creation-alerte icon-cross-close close-top-right" aria-label="Fermer"></button>
        <span class="titre">Alerte active</span>
        <img src="https://cdn-cadremploi.carriere.fcms.io/assets/img/details_offre/ic-alerteactive.png" class="validation-icon" width="78" height="72" alt="">
        <span class="sous-titre">Vous recevrez par email les offres correspondant à la recherche</span>
        <p class="rappel-criteres-alerte js-rappel-criteres-alerte"></p>
        <a class="alert-link js-toaster-validation-alerte-lien-gestion-alertes" href="#" target="_blank">
            Gérer mes alertes
        </a>
    </div>


    <div class="toaster toaster-closed-alerte inactive js-open-toaster-creation-alerte hidden-xs">
        <div class="bkg-pattern red small"></div>
        <span class="bell-bubble red icon-ic-alertemini"></span>
        <p class="recap-criteres">
            Activer l'alerte : <span class="criteres-alerte js-rappel-criteres-alerte"></span>
        </p>
    </div>
    <div class="toaster toaster-closed-alerte activated js-open-toaster-creation-alerte hidden-xs">
        <div class="bkg-pattern green small"></div>
        <span class="bell-bubble green icon-ic-alertemini"></span>
        <p class="recap-criteres">
            Alerte activée : <span class="criteres-alerte js-rappel-criteres-alerte"></span>
        </p>
    </div>



    <div class="bubble-closed-alerte js-open-toaster-creation-alerte inactive visible-xs">
        <span class="icon-ic-alertemoboffre icon-mobile red"></span>
    </div>
    <div class="bubble-closed-alerte js-open-toaster-creation-alerte activated visible-xs">
        <span class="icon-ic-alertemoboffre green"></span>
    </div>


</div>

</div>



            
                
            
        </div>

        <footer id="footer" data-server-rendered="true" class="footer-cadremploi_new"><div class="top-footer"><div class="container wrapper-logo"><a href="/"><img src="https://cdn-cadremploi.carriere.fcms.io/assets/img/logos/logo-cadremploi-bl.svg" title="Cadremploi" alt="Logo Cadremploi" height="32" width="300" class="logo"></a> <span class="baseline">Ayez l'ambition d'être heureux.</span></div></div> <div class="bottom-footer"><div class="container"><div class="ordered-sections"><div data-ga-action="clic_footer_aide"><div class="titre">Besoin d'aide ?</div> <a href="/emploi/contact" data-ga-label="contact">Contactez-nous</a> <a href="https://fcms.zendesk.com/hc/fr" target="_blank" rel="noopener" data-ga-label="faq" class="lien-footer-besoin-aide-faq">
            Questions fréquentes
          </a> <a href="/emploi/conditions-generales-utilisation" data-ga-label="conditions_generales_utilisation">Conditions Générales d'Utilisation</a> <a href="/emploi/html?page=5" data-ga-label="politique_confidentialite">Politique de confidentialité</a> <a href="/emploi/html?page=10" data-ga-label="infos_cookies">Informations sur les cookies</a> <button data-ga-label="parametrer_cookies" class="cmp-button">Paramétrer les cookies</button></div> <div data-ga-action="clic_footer_plan_site"><div class="titre">Plan du site</div> <a href="/emploi/createur_cv" data-ga-label="createur_cv">Créer CV en ligne</a> <a href="/emploi/plan_site/metiers" data-ga-label="offres_metiers">Les offres d'emploi par métier</a> <a href="/emploi/plan_site/localites" data-ga-label="offres_regions">Les offres d'emploi par région</a> <a href="/emploi/plan_site/secteurs" data-ga-label="offres_secteurs">Les offres d'emploi par secteurs</a> <a href="/emploi/plan_site/entreprises" data-ga-label="entreprises_recrutent">Toutes les entreprises qui
            recrutent</a> <a href="/emploi/plan_site/hubs">Les dossiers édito</a></div> <div data-ga-action="clic_footer_qui_sommes_nous"><div class="titre">Qui sommes-nous ?</div> <a href="/emploi/a-propos" data-ga-label="a_propos_de">A propos de Cadremploi</a> <a href="/emploi/html?page=7" data-ga-label="mentions_legales">Mentions légales</a> <a href="https://classifieds.lefigaro.fr/tag/cadremploi/" target="_blank" rel="noopener" data-ga-label="espace_presse">Espace presse</a> <a href="/emploi/liste_offres?entrepriseId=15013938431686061,150443475789277" data-ga-label="rejoignez_nous">Rejoignez-nous</a></div> <div data-ga-action="clic_footer_recruteurs"><div class="titre">Vous êtes recruteurs ?</div> <a href="https://espace-recruteurs.cadremploi.fr" data-ga-label="deposer">Déposer une offre d'emploi</a></div> <div class="reseaux-sociaux"><div class="titre follow-us">
            Suivez-nous sur les réseaux sociaux
          </div> <a href="https://fr-fr.facebook.com/Cadremploi" target="_blank" title="Cadremploi sur Facebook" rel="noopener"><span class="cs-icon-facebook"></span></a> <a href="https://twitter.com/cadremploi" target="_blank" title="Cadremploi sur Twitter" rel="noopener"><span class="cs-icon-twitter-footer"></span></a> <a href="https://www.instagram.com/cadremploi" target="_blank" title="Cadremploi sur Instagram" rel="noopener"><span class="cs-icon-instagram"></span></a> <a href="https://www.youtube.com/channel/UCoOHw1a7sPOBQ0_RaLVzYQA" target="_blank" title="Cadremploi sur YouTube" rel="noopener"><span class="cs-icon-youtube"></span></a></div> <div class="telechargement-appli-store"><div class="titre">Téléchargez notre appli</div> <a href="https://itunes.apple.com/app/apple-store/id383089648?pt=318717&amp;ct=footerCadremploi&amp;mt=8" target="_blank" rel="noopener" aria-label="Application sur l'App Store"><img src="https://cdn-cadremploi.carriere.fcms.io/assets/img/home/app-store.svg" loading="lazy" width="130" height="35" alt="App Store"></a> <a href="https://play.google.com/store/apps/details?id=com.adenclassifieds.android.cadremploi&amp;hl=en" target="_blank" rel="noopener" aria-label="Application sur Google Play"><img src="https://cdn-cadremploi.carriere.fcms.io/assets/img/home/google-play.svg" loading="lazy" width="130" height="35" alt="Google Play"></a></div></div></div></div> <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="application/javascript" src="//rum-static.pingdom.net/pa-5bac91097e84eb0016000173.js" async="async"></script></footer>

        
        <script id="fcmsDeviceTrackingJsId" type="text/javascript" src="https://cdn-fca.carriere.fcms.io/device-tracking/device-tracking.min.js" async></script>
        <script>
            let fcmsDeviceTrackingJs = document.querySelector('#fcmsDeviceTrackingJsId');
            if(fcmsDeviceTrackingJs) {
                fcmsDeviceTrackingJs.addEventListener('load', function () {
                    if(_INTERNAUTE_ID !== '') {
                        // fcms-device-tracker add cookie to allow soft login with token
                        if (window.trackDevice) {
                            window.trackDevice();
                        }
                    }
                });
            }
        </script>

        <script>
            var showBrowserAlert = (function () {
                var is_IE = /Trident\/|MSIE/.test(window.navigator.userAgent);

                if (is_IE) {
                    var ieBanner = document.querySelector('.ie-banner')
                    if (ieBanner) {
                        ieBanner.innerHTML = '<b>Votre navigateur n\'est pas supporté</b>. Certaines fonctionnalités pourraient ne pas fonctionner. Veuillez utiliser <a href="https://bestvpn.org/outdatedbrowser/fr" target="_blank">un navigateur récent</a> pour naviguer sur le site dans les meilleures conditions.';
                        ieBanner.style.padding = '2rem';
                    }
                }
            });
            document.addEventListener('DOMContentLoaded', showBrowserAlert);
        </script>
    </div>

    
<script>(function(){var js = "window['__CF$cv$params']={r:'846dccef7af62f88',t:'MTcwNTQ4NjE0NS4xNTIwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script></body>
</html>
<!-- decorator : layout.nouveau.decorator -->
<!--v//24.01.1-->
<!--e//production-->
<!--p// liste_offres works!--> 


