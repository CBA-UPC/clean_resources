// 2023/12/04 v1
function callOfferXingu() {
  var offerDiv = document.querySelector(".offer-notice#offer-notice-1");
  if (offerDiv) {
    offerDiv.style.marginBottom = "20px";
    // define path dfp
    function getDfpIu(type) {
      var url = window.location.href;
      var urlArray = url.split(".");
      var str = "";
      if (urlArray[0].match(/\/\/www/)) {
        str = url.replaceAll(
          /((http(s)?:)|\/\/|www|.uol(\/)?|.com(\/)?|.br(\/)?)/g,
          ""
        );
      } else {
        str = urlArray[0].replace(/http(s):\/\//g, "");
      }
      str = str
        .replace(/\/.*$/, "")
        .replace("comidasebebidas", "comidas_e_bebidas")
        .replace("vivabem", "viva_bem")
        .replace("copadomundo", "copa_do_mundo")
        .replace("tvefamosos", "tv_e_famosos");
      if (type == "offer") {
        return "/8804/uol/offer" + (str.length > 0 ? "/" + str : "");
      } else if (type == "outstream") {
        return (
          "/8804/uol/inread/" +
          (str.length > 0 ? "/" + str + "/" : "") +
          "outstream"
        );
      }
    }
        function createDivAfterOffer() {
      var newDivOffer = document.createElement("div");
      newDivOffer.setAttribute("id", "offer-ads-space");
      // inserir abaixo do offer
      insertAfter(newDivOffer, offerDiv);
      insertBannerAfterOffer();
    }
    function insertBannerAfterOffer() {
      var inArticleContainer;
      const isMobile = ((a) => {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        ) {
          return true;
        } else {
          return false;
        }
      })(navigator.userAgent || navigator.vendor || window.opera);
      function createInArticleContainerDesktop(articleContainer) {
        var divRow = document.createElement("div");
        divRow.style.display = "flex";
        divRow.style.width = "100%";
        divRow.style.height = "100%";
        divRow.style.alignItems = "center";
        divRow.style.justifyContent = "center";
        divRow.style.padding = "20px 0px";
        divRow.style.backgroundImage =
          "url(data:image/webp;base64,UklGRmwAAABXRUJQVlA4WAoAAAAQAAAABAAABAAAQUxQSBYAAAABDzAhERFCadtIbAwea/+oRfQ/GvwBVlA4IDAAAACQAQCdASoFAAUAAgA0JaQAApplHeAA/tPpPS2F/PjfDX7Mr9vZ2Xy98v/pAAAAAAA=)";
        var label = document.createElement("p");
        label.textContent = "Publicidade";
        label.style.textTransform = "uppercase";
        label.style.fontSize = "12px";
        label.style.lineHeight = "0px";
        label.style.marginBottom = "22px";
        var div1 = document.createElement("div");
        div1.style.width = "300px";
        div1.style.height = "250px";
        div1.style.margin = "0px auto";
        div1.id = "banner-300x250-outstream-area3";
        var div2 = document.createElement("div");
        div2.style.width = "300px";
        div2.style.height = "250px";
        div2.style.margin = "0px auto";
        div2.id = "banner-300x250-outstream-area4";
        articleContainer.appendChild(label);
        articleContainer.appendChild(divRow);
        divRow.appendChild(div1);
        divRow.appendChild(div2);
      }
      function createInArticleContainerMobile(articleContainer) {
        var div1 = document.createElement("div");
        var label = document.createElement("p");
        label.textContent = "Publicidade";
        label.style.textTransform = "uppercase";
        label.style.fontSize = "12px";
        label.style.lineHeight = "0px";
        label.style.marginBottom = "22px";
        div1.style.maxWidth = "100%";
        div1.style.maxHeight = "280px";
        div1.id = "banner-300x250-outstream-area3";
        div1.style.backgroundImage =
          "url(data:image/webp;base64,UklGRmwAAABXRUJQVlA4WAoAAAAQAAAABAAABAAAQUxQSBYAAAABDzAhERFCadtIbAwea/+oRfQ/GvwBVlA4IDAAAACQAQCdASoFAAUAAgA0JaQAApplHeAA/tPpPS2F/PjfDX7Mr9vZ2Xy98v/pAAAAAAA=)";
        div1.style.padding = "20px 0px";
        articleContainer.appendChild(label);
        articleContainer.appendChild(div1);
      }
      var setIntervalBannerInArticle = setInterval(function () {
        inArticleContainer = document.querySelector("#offer-ads-space");
        if (inArticleContainer) {
          clearInterval(setIntervalBannerInArticle);
          inArticleContainer.style.display = "flex";
          inArticleContainer.style.flexDirection = "column";
          inArticleContainer.style.alignItems = "center";
          inArticleContainer.style.justifyContent = "center";
          if (isMobile) {
            createInArticleContainerMobile(inArticleContainer);
            // window.uolads &&
            //   window.uolads.push({
            //     id: "banner-300x250-outstream-area3",
            //     customTargetings: { keyword: "offerposition" },
            //   });
            googletag.cmd.push(function () {
              var slotBanner = googletag
                .defineSlot(
                  window.offerAdManager.adManager.outStreamPath,
                  [[300, 250]],
                  "banner-300x250-outstream-area3"
                )
                .setTargeting("keyword", ["offerposition"])
                .setTargeting("refresh", "true")
                .addService(googletag.pubads());
              googletag.display("banner-300x250-outstream-area3");
              googletag.pubads().refresh([slotBanner]);
            });
          } else {
            createInArticleContainerDesktop(inArticleContainer);
            // window.uolads &&
            //   window.uolads.push({
            //     id: "banner-300x250-outstream-area3",
            //     customTargetings: { keyword: "offerposition" },
            //   });
            // window.uolads &&
            //   window.uolads.push({
            //     id: "banner-300x250-outstream-area4",
            //     customTargetings: { keyword: "offerposition" },
            //   });
            googletag.cmd.push(function () {
              var slotBanner = googletag
                .defineSlot(
                  window.offerAdManager.adManager.outStreamPath,
                  [[300, 250]],
                  "banner-300x250-outstream-area3"
                )
                .setTargeting("keyword", ["offerposition"])
                .setTargeting("refresh", "true")
                .addService(googletag.pubads());
              googletag.display("banner-300x250-outstream-area3");
              googletag.pubads().refresh([slotBanner]);
            });
            googletag.cmd.push(function () {
              var slotBanner = googletag
                .defineSlot(
                  window.offerAdManager.adManager.outStreamPath,
                  [[300, 250]],
                  "banner-300x250-outstream-area4"
                )
                .setTargeting("keyword", ["offerposition"])
                .setTargeting("refresh", "true")
                .addService(googletag.pubads());
              googletag.display("banner-300x250-outstream-area4");
              googletag.pubads().refresh([slotBanner]);
            });
          }
        }
      }, 100);
    }
    const getCookie = (cookieName) => {
      const data = [];
      const cookies = document.cookie.split(";");
      cookieName = RegExp("^\\s*" + cookieName + "=\\s*(.*?)\\s*$");
      cookies.forEach((cookie) => {
        const value = cookie.match(cookieName);
        value && data.push(value[1]);
      });
      return data[0];
    };
    const setCookie = (cookieName, cookieValue) => {
      const today = new Date();
      const expire = new Date();
      const domain = "uol.com.br";
      expire.setTime(today.getTime() + 3600000 * 24 * model.days);
      document.cookie = ""
        .concat(cookieName, "=")
        .concat(encodeURI(cookieValue), ";expires=")
        .concat(expire.toGMTString(), ";path=/;domain=" + domain);
    };
    const gaEvents = (ev) => {
      var event = ev.split("/");
      var sendEvent =
        window.universal_variable.aud.ga.filename == "uolestacoes"
          ? "uolestacoes.event"
          : "event";
      if (event[0] === "offer-product") {
        switch (event[1]) {
          case "impressao":
            window.uolAnalytics(sendEvent, {
              category: event[0],
              action: "impressao",
              label: "componente_visualizado_" + event[2] + "_" + event[3],
              central: window.universal_variable.aud.central,
              channel: window.universal_variable.aud.channel,
              mediaName: window.universal_variable.aud.mediaName,
              userFidelity: window.offerAdManager.data.datalake.userFidelity,
            });
            break;
          case "clique":
            window.uolAnalytics(sendEvent, {
              category: event[0],
              action: decodeURIComponent(decodeURIComponent(event[4])) || "",
              label: event[2] + "_" + event[3],
              central: window.universal_variable.aud.central,
              channel: window.universal_variable.aud.channel,
              mediaName: window.universal_variable.aud.mediaName,
              userFidelity: window.offerAdManager.data.datalake.userFidelity,
            });
            break;
        }
      }
    };
    window.offerAdManager = {
      data: {
        home: null,
        canalUol: null,
        youtube: {},
        instagram: {},
        datalake: {
          assinante: null,
          clubeSelecionado: null,
          newslettersAssinadas: null,
          newslettersNaoAssinadas: null,
          tags: null,
          signoZodiacoSelecionado: null,
          userFidelity: null,
          pwaNavigation: null,
        },
        user: null,
        newsletter: {
          stationRequest: null,
          slug: null,
          columnists: [
            // "a-companhia",
            // "daniela-pinheiro",
            "flavio-gomes",
            "jamil-chade",
            "jose-trajano",
            // "mauricio-stycer",
            // "thais-oyama",
          ],
        },
        topics: null,
        topicsRead: false,
        topicsReady: false,
      },
      showProgram: null,
      vertical: null,
      getCookie: getCookie,
      setCookie: setCookie,
      gaEvents: gaEvents,
      counterNews: 0,
      newsletterDiv: null,
      station: {
        iframe: null,
        img: null,
      },
      sort: Math.random(),
      selector: "#offer-notice-1 iframe",
      adManager: {
        offerDivId: "offer-notice-1",
        offerPath: getDfpIu("offer"),
        outStreamPath: getDfpIu("outstream"),
      },
    };
    const handleMessage = (event) => {
      if (typeof event.data != "string") {
        return;
      }
      if (
        event.data.indexOf("uolcont-pgv3") < 0 &&
        event.data.indexOf("offer-admanager") < 0
      ) {
        return;
      }
      const actions = event.data.split("/");
      switch (actions[0]) {
        case "offer-admanager":
          switch (actions[1]) {
            case "ready":
              const newsIframe = offerDiv.querySelector("iframe");
              if (newsIframe) {
                newsIframe.style.display = "none";
                newsIframe.contentWindow.postMessage(
                  "offer-admanager/init",
                  "*"
                );
              }
              break;
            case "json":
              const json = actions.slice(2).join("/");
              try {
                const newsData = JSON.parse(json);
                window.offerAdManager.counterNews++;
                loadComponent(newsData);
              } catch (err) {
                console.log("conteudo campaign error ao parsear json", json);
              }
              break;
            case "topics":
              if (
                !window.offerAdManager.data.topicsRead &&
                actions[2] &&
                actions[2] != "no-topic"
              ) {
                window.offerAdManager.data.topicsRead = true;
                if (window.location.href.match(/testeOffer/)) {
                  console.log("topics read:");
                }
                window.offerAdManager.data.topics = actions[2];
                if (window.location.href.match(/testeOffer/)) {
                  console.log("topics:", window.offerAdManager.data.topics);
                }
                window.offerAdManager.data.topicsReady = true;
              } else if (
                !window.offerAdManager.data.topicsRead &&
                actions[2] &&
                actions[2] == "no-topic"
              ) {
                window.offerAdManager.data.topics = "";
                window.offerAdManager.data.topicsRead = true;
                window.offerAdManager.data.topicsReady = true;
              }
              break;
          }
        default:
          return;
      }
    };
    var loadComponent = async function loadComponent(data) {
      if (window.offerAdManager.counterNews == 1) {
        console.log("loading componente");
        var name = data.component;
        var container = document.querySelector(data.containerSelector);
        if (!container) {
          console.log(
            "conteudo campign selector '" +
              data.containerSelector +
              "' não encontrado"
          );
          return;
        }
        // cria a área onde o componente será inserido, dentro do container
        var componentArea = document.createElement("div");
        // oculta a área, ela só sera exibida quando o js e css forem carregados
        componentArea.style.display = "none";
        // define size da área, se informado
        data.width && (componentArea.style.width = data.width);
        data.height && (componentArea.style.height = data.height);
        // obtém o markup do componente
        // css e js serão carregados após a criação do DOM
        var componentUrl = null;
        var beginUrl = null;
        if (window.location.href.match(/www.uol.com.br/)) {
          beginUrl = "https://www.uol.com.br/" + pageName + "/";
        } else {
          beginUrl = "https://" + pageName + ".uol.com.br/";
        }
        if (data.data.slug == "columnist") {
          componentUrl =
            beginUrl +
            "service/?loadComponent=" +
            name +
            "&stationRequest=columnist" +
            "&slug=" +
            data.data.stationRequest +
            "&json";
        } else {
          componentUrl =
            beginUrl +
            "service/?loadComponent=" +
            name +
            "&stationRequest=" +
            data.data.stationRequest +
            "&json";
        }
        if (window.location.href.match(/testeOffer/)) {
          console.log("Offer:", componentUrl);
        }
        var a = await fetch(componentUrl);
        a = await a.json();
        componentArea.innerHTML = a.body;
        componentArea.style.display = "";
        container.appendChild(componentArea);
        window.offerAdManager.newsletterDiv =
          document.querySelector(".news-notice");
        UOLoader([
          {
            id: name,
            path: "basics/" + name,
          },
        ]);
      }
    };
    const segment = {
      carros: "carros",
      noticias: "noticias",
      economia: "economia",
      esporte: "esporte",
      eleicoes: "eleicoes",
      splash: "splash",
      tvefamosos: "tvefamosos",
      universa: "universa",
      vivabem: "vivabem",
      tilt: "tilt",
      ecoa: "ecoa",
      nossa: "nossa",
      tab: "tab",
      start: "start",
      play: "play",
      educacao: "educacao",
      entretenimento: "entrete",
      home: "home",
      mov: "mov",
    };
    const getCategory = (url) => {
      const category = url.filter((x) => {
        return ["uol", "com", "br", "videos"].every((y) => x !== y);
      });
      return category.length > 0 ? category[0] : "home";
    };
    const getPage = (pageUrl) => {
      const url = pageUrl.replace(/http(s)?:\/\/(www.)?/, "");
      const treatedUrl = url.split(/(\.|\/)/).filter((x) => x.length > 1);
      return segment[getCategory(treatedUrl)];
    };
    let pageName = getPage(window.location.href);
    window.offerAdManager.vertical = pageName;
    const isNotHome = () =>
      !window.location.href.match(
        /http(s):\/\/\www\.uol\.com\.br(\/)(\?.*?)?$/
      );
    const referrerIsNotHome = () =>
      !window.document.referrer.match(
        /http(s):\/\/\www\.uol\.com\.br(\/)(\?.*?)?$/
      );
    const newsletters = [
      "resumo-do-dia",
      "olhar-apurado",
      "por-dentro-da-bolsa",
      "splash-tv",
      "pra-comecar-a-semana",
      "jamil-chade",
      "investimentos",
      //"na-sua-tela",
      "nos-negros",
      // "a-companhia",
      // "cardapios-para-emagrecer",
      //"jose-trajano",
      //"flavio-gomes",
      "tab",
      "olhar-olimpico",
      "vivabem",
      "horoscopo",
      "tilt",
      "carros-do-futuro",
      //"universa",
      // "uol-nas-eleicoes",
      // "thais-oyama",
      // "mauricio-stycer",
      // "daniela-pinheiro",
      // "crise-climatica",
      // "carteira-recomendada",
      // "todos-a-bordo",
      // "projeto-vivabem",
      "midia-e-marketing",
    ];
    const submitStage = (ns) => {
      switch (ns) {
        case "newsletter":
          var keywordsNews =
            offerAdManager.data.datalake.newslettersNaoAssinadas.map(
   tter-" + x
            );
          if (window.location.href.match(/testeOffer/)) {
            console.log("Offer News: Keywords enviadas", keywordsNews);
          }
          googletag.cmd.push(function () {
            var slotBanner = googletag
              .defineSlot(
                window.offerAdManager.adManager.offerPath,
                [[2, 2]],
                "offer-notice-1"
              )
              .setTargeting("keyword", keywordsNews)
              .setTargeting("refresh", "false")
              .addService(googletag.pubads());
            googletag.display("offer-notice-1");
            googletag.pubads().refresh([slotBanner]);
          });
          createDivAfterOffer();
          break;
        case "estacao":
          var keywords = [];
          var intervalTopicsReady = setInterval(() => {
            if (window.offerAdManager.data.topicsReady) {
              var topicsList = window.offerAdManager.data.topics;
              if (referrerIsNotHome() && window.offerAdManager.data.home) {
                keywords.push("offer-home");
              }
              var offerVertical = "offer-" + pageName;
              var offerSigno =
                window.offerAdManager.data.datalake.signoZodiacoSelecionado !=
                  null &&
                window.offerAdManager.data.datalake.signoZodiacoSelecionado !=
                  ""
                  ? "offer-" +
                    window.offerAdManager.data.datalake.signoZodiacoSelecionado
                  : "";
              var assinanteConteudo = window.offerAdManager.data.datalake
                .assinante
                ? "offer-assinante"
                : "offer-nao-assinante";
              if (
                window.offerAdManager.data.datalake.pwaNavigation &&
                Array.isArray(
                  window.offerAdManager.data.datalake.pwaNavigation
                ) &&
                window.offerAdManager.data.datalake.pwaNavigation.length > 0
              ) {
                window.offerAdManager.data.datalake.pwaNavigation.forEach(
                  (i) => {
                    i = i.replaceAll(" ", "-");
                    i = i.replaceAll("_", "-");
                    keywords.push("offer-pwa-" + i);
                  }
                );
              }
              if (
                window.offerAdManager.data.datalake.clubeSelecionado &&
                pageName &&
                pageName == "esporte"
              ) {
                var offerTeam =
                  "offer-" +
                  window.offerAdManager.data.datalake.clubeSelecionado;
                keywords.push(offerTeam, assinanteConteudo);
              } else {
                keywords.push(offerVertical, assinanteConteudo, offerSigno);
              }
              if (window.location.href.match(/testeOffer/)) {
                console.log("Offer: ", topicsList, keywords);
              }
              googletag.cmd.push(function () {
                var slotBanner = googletag
                  .defineSlot(
                    window.offerAdManager.adManager.offerPath,
                    [[2, 2]],
                    "offer-notice-1"
                  )
                  .setTargeting("keyword", keywords)
                  .setTargeting("refresh", "false")
                  .setTargeting("topics", topicsList)
                  .addService(googletag.pubads());
                googletag.display("offer-notice-1");
                googletag.pubads().refresh([slotBanner]);
              });
              createDivAfterOffer();
              clearInterval(intervalTopicsReady);
            }
          }, 250);
          break;
        // case "bkp":
        //   // window.uolads &&
        //   //   window.uolads.push({
        //   //     id: "offer-notice-1",
        //   //     keyword: "offer-calhau-estatico",
        //   //   });
        //   googletag.cmd.push(function () {
        //     var slotBanner = googletag
        //       .defineSlot(
        //         window.offerAdManager.adManager.offerPath,
        //         [[2, 2]],
        //         "offer-notice-1"
        //       )
        //       .setTargeting("keyword", ["offer-calhau-estatico"])
        //       .setTargeting("refresh", "false")
        //       .addService(googletag.pubads());
        //     googletag.display("offer-notice-1");
        //     googletag.pubads().refresh([slotBanner]);
        //   });
        //   break;
      }
    };
    const callNewsletter = () => {
      window.addEventListener("message", handleMessage, false);
      // window.offerAdManager.data.datalake.newslettersAssinadas = [
      //   "splash-tv",
      //   "resumo-do-dia",
      // ];
      let assinaturas =
        window.offerAdManager.data.datalake.newslettersAssinadas;
      if (assinaturas) {
        window.offerAdManager.data.datalake.newslettersNaoAssinadas =
          newslettncludes(n));
      } else {
        window.offerAdManager.data.datalake.newslettersNaoAssinadas =
          newsletters;
      }
      if (window.location.href.match(/testeOffer/)) {
        console.log(
          "Offer News: Não Assinadas",
          window.offerAdManager.data.datalake.newslettersNaoAssinadas
        );
      }
      submitStage("newsletter");
    };
    // organize data and programs
    const organizeDataLake = (userData) => {
      if (userData && userData.tags && userData.tags.tags) {
        window.offerAdManager.data.datalake.tags = userData.tags.tags;
      }
      if (
        userData &&
        userData["user-preferences"] &&
        userData["user-preferences"]["newsletter_assinaturas"] &&
        userData["user-preferences"]["newsletter_assinaturas"].length > 0
      ) {
        window.offerAdManager.data.datalake.newslettersAssinadas =
          userData["user-preferences"]["newsletter_assinaturas"];
      }
      if (
        userData &&
        userData["user-preferences"] &&
        userData["user-preferences"]["fidelidade_estacao"] &&
        userData["user-preferences"]["fidelidade_estacao"] != null
      ) {
        var entradas = Object.entries(
          userData["user-preferences"]["fidelidade_estacao"]
        );
        window.offerAdManager.data.datalake.userFidelity = entradas
          .map((x) => x[1] + "_" + x[0])
          .toString();
      }
      checkSubscriber(userData);
      checkPwaNavigation(userData);
    };
    // Consultas de Endpoints
    const addCacheBuster = (url) => {
      return new Promise((resolve) => {
        url +=
          url.indexOf("?") != -1
            ? "&cachebuster=" + Date.now()
            : "?cachebuster=" + Date.now();
        resolve(url);
      });
    };
    const checkSelectedClub = (userData) => {
      if (
        userData.data &&
        userData.data["user-preferences"] &&
        userData.data["user-preferences"].preferencias[
          "bloco-customizado-esporte"
        ] != null
      ) {
        return (window.offerAdManager.data.datalake.clubeSelecionado =
          userData.data["user-preferences"].preferencias[
            "bloco-customizado-esporte"
          ]);
      } else {
        return "";
      }
    };
    const checkSelectedZodiacsigns = (userData) => {
      if (
        userData.data &&
        userData.data["user-preferences"] &&
        userData.data["user-preferences"].preferencias[
          "bloco-customizado-mulher"
        ] != null
      ) {
        return (window.offerAdManager.data.datalake.signoZodiacoSelecionado =
          userData.data["user-preferences"].preferencias[
            "bloco-customizado-mulher"
          ]);
      } else {
        return "";
      }
    };
    const checkSubscriber = (userData) => {
      if (
        (userData &&
          userData["base-assinantes"] &&
          userData["base-assinantes"].status_assinante &&
          userData["base-assinantes"].status_assinante == "Assinante") ||
        (userData &&
          userData["base-assinantes"] &&
          userData["base-assinantes"].status_assinante &&
          userData["base-assinantes"].status_assinante ==
            "Assinante em período trial")
      ) {
        window.offerAdManager.data.datalake.assinante = true;
      } else {
        window.offerAdManager.data.datalake.assinante = false;
      }
    };
    const checkPwaNavigation = (userData) => {
      if (
        userData &&
        userData["user-preferences"] &&
        userData["user-preferences"]["pwa_navegacao"] &&
        userData["user-preferences"]["pwa_navegacao"] != {}
      ) {
        window.offerAdManager.data.datalake.pwaNavigation = Object.keys(
          userData["user-preferences"]["pwa_navegacao"]
        );
      }
    };
    const consultOfferHome = async () => {
      var urlOfferHome =
        "https://dynad-list.dynad.net/product/search?field=category&values=noticias&datasource=conteudo_offer_home&active=true";
      urlOfferHome = await addCacheBuster(urlOfferHome);
      var offerData = await fetch(urlOfferHome)
        .then((resp) => resp.json())
        .catch(() => {
          offerData = false;
        });
      return offerData;
    };
    const consultDatalakeUser = async () => {
      // Datalake Usuário
      // begin prod
      var urlUserData =
        "https://udr.uol.com.br?scopes=user-preferences,tags,base-assinantes";
      var datalakeUserData = await fetch(urlUserData, {
        credentials: "include",
      });
      // end prod
      // xyz begin
      // var urlUserData =
      // "https://udr.uol.com.br?ui=7d237ba8-4060-46df-9e43-54b8efa3329f&scopes=user-preferences,tags,base-assinantes";
      // var datalakeUserData = await fetch(urlUserData);
      // xyz end
      datalakeUserData = await datalakeUserData.json();
      if (window.location.href.match(/testeOffer/)) {
        console.log("datalake", datalakeUserData);
      }
      return datalakeUserData;
    };
    // Funções de Offers
    const offerNewsletter = async () => {
      // Datalake Usuário
      window.offerAdManager.data.user = await consultDatalakeUser();
      window.offerAdManager.data.datalake.clubeSelecionado =
        await checkSelectedClub(window.offerAdManager.data.user);
      window.offerAdManager.data.datalake.signoZodiacoSelecionado =
        await checkSelectedZodiacsigns(window.offerAdManager.data.user);
      if (
        window.offerAdManager.data.user &&
        window.offerAdManager.data.user.data
      ) {
        organizeDataLake(window.offerAdManager.data.user.data);
      }
      callNewsletter();
    };
    const offerEstacao = async () => {
      // Offer Home
      window.offerAdManager.data.home = await consultOfferHome();
      // Datalake Usuário
      window.offerAdManager.data.user = await consultDatalakeUser();
      window.offerAdManager.data.datalake.clubeSelecionado =
        await checkSelectedClub(window.offerAdManager.data.user);
      window.offerAdManager.data.datalake.signoZodiacoSelecionado =
        await checkSelectedZodiacsigns(window.offerAdManager.data.user);
      if (
        window.offerAdManager.data.user &&
        window.offerAdManager.data.user.data
      ) {
        organizeDataLake(window.offerAdManager.data.user.data);
      }
      submitStage("estacao");
    };
    if (
      window.offerAdManager.sort < 0.5 ||
      window.location.href.match(/force_news/)
    ) {
      offerNewsletter();
    } else {
      offerEstacao();
    }
  }
}
function callOfferJupiter() {
  var offerDiv = document.querySelector(".offer-notice#offer-notice-jupiter-1");
  if (offerDiv) {
    function getDfpIu(type) {
      var url = window.location.href;
      var urlArray = url.split(".");
      var str = "";
      if (urlArray[0].match(/\/\/www/)) {
        str = url.replaceAll(
          /((http(s)?:)|\/\/|www|.uol(\/)?|.com(\/)?|.br(\/)?)/g,
          ""
        );
      } else {
        str = urlArray[0].replace(/http(s):\/\//g, "");
      }
      str = str
        .replace(/\/.*$/, "")
        .replace("comidasebebidas", "comidas_e_bebidas")
        .replace("vivabem", "viva_bem")
        .replace("copadomundo", "copa_do_mundo")
        .replace("tvefamosos", "tv_e_famosos");
      if (type == "offer") {
        return "/8804/uol/offer" + (str.length > 0 ? "/" + str : "");
      } else if (type == "outstream") {
        return (
          "/8804/uol/inread/" +
          (str.length > 0 ? "/" + str + "/" : "") +
          "outstream"
        );
      }
    }
    const getCookie = (cookieName) => {
      const data = [];
      const cookies = document.cookie.split(";");
      cookieName = RegExp("^\\s*" + cookieName + "=\\s*(.*?)\\s*$");
      cookies.forEach((cookie) => {
        const value = cookie.match(cookieName);
        value && data.push(value[1]);
      });
      return data[0];
    };
    const setCookie = (cookieName, cookieValue) => {
      const today = new Date();
      const expire = new Date();
      const domain = "uol.com.br";
      expire.setTime(today.getTime() + 3600000 * 24 * model.days);
      document.cookie = ""
        .concat(cookieName, "=")
        .concat(encodeURI(cookieValue), ";expires=")
        .concat(expire.toGMTString(), ";path=/;domain=" + domain);
    };
    const gaEvents = (ev) => {
      var event = ev.split("/");
      var sendEvent =
        window.universal_variable.aud.ga.filename == "uolestacoes"
          ? "uolestacoes.event"
          : "event";
      // var sendEvent = "event";
      if (event[0] === "offer-product") {
        switch (event[1]) {
          case "impressao":
            window.uolAnalytics(sendEvent, {
              category: event[0],
              action: "impressao",
              label: "componente-visualizado-" + event[2] + "-" + event[3],
              central: window.universal_variable.aud.central,
              channel: window.universal_variable.aud.channel,
              mediaName: window.universal_variable.aud.mediaName,
              userFidelity: window.offerAdManager.data.datalake.userFidelity,
              // cd16
              //position: "-",
              // cd99
              clickType: "impressao",
              // cd98
              graphProject: "jupiter",
              // cd24
              area: window.offerAdManager.attrArea,
              // cd42
              product_slot: window.offerAdManager.attrSlot,
            });
            if (window.location.href.match(/testeOffer/)) {
              console.log("category", event[0]);
              console.log("action", "impressao");
              console.log(
                "label",
                "componente-visualizado-" + event[2] + "-" + event[3]
              );
              console.log("central", window.universal_variable.aud.central);
              console.log("channel", window.universal_variable.aud.channel);
              console.log("mediaName", window.universal_variable.aud.mediaName);
              console.log(
                "userFidelity",
                window.offerAdManager.data.datalake.userFidelity
              );
              console.log("clickType", "impressao");
              console.log("graphProject", "jupiter");
              console.log("area", window.offerAdManager.attrArea);
              console.log("product_slot", window.offerAdManager.attrSlot);
            }
            break;
          case "clique":
            window.uolAnalytics(sendEvent, {
              category: event[0],
              action: decodeURIComponent(decodeURIComponent(event[4])) || "",
              label: event[2] + "-" + event[3],
              central: window.universal_variable.aud.central,
              channel: window.universal_variable.aud.channel,
              mediaName: window.universal_variable.aud.mediaName,
              userFidelity: window.offerAdManager.data.datalake.userFidelity,
              // cd16
              //position: "-",
              // cd99
              clickType: "recirculacao",
              // cd98
              graphProject: "jupiter",
              // cd24
              area: window.offerAdManager.attrArea,
              // cd42
              product_slot: window.offerAdManager.attrSlot,
            });
            if (window.location.href.match(/testeOffer/)) {
              console.log("category", event[0]);
              console.log(
                "action",
                decodeURIComponent(decodeURIComponent(event[4])) || ""
              );
              console.log("label", event[2] + "-" + event[3]);
              console.log("central", window.universal_variable.aud.central);
              console.log("channel", window.universal_variable.aud.channel);
              console.log("mediaName", window.universal_variable.aud.mediaName);
              console.log(
                "userFidelity",
                window.offerAdManager.data.datalake.userFidelity
              );
              console.log("clickType", "recirculacao");
              console.log("graphProject", "jupiter");
              console.log("area", window.offerAdManager.attrArea);
              console.log("product_slot", window.offerAdManager.attrSlot);
            }
            break;
        }
      }
    };
    window.offerAdManager = {
      data: {
        home: null,
        canalUol: null,
        youtube: {},
        instagram: {},
        datalake: {
          assinante: null,
          clubeSelecionado: null,
          newslettersAssinadas: null,
          newslettersNaoAssinadas: null,
          tags: null,
          signoZodiacoSelecionado: null,
          userFidelity: null,
          userFidelityObj: null,
          pwaNavigation: null,
        },
        user: null,
        topics: null,
        topicsRead: false,
        topicsReady: false,
      },
      showProgram: null,
      vertical: null,
      getCookie: getCookie,
      setCookie: setCookie,
      gaEvents: gaEvents,
      attrArea: null,
      attrSlot: null,
      counterNews: 0,
      newsletterDiv: null,
      station: {
        iframe: null,
        img: null,
      },
      sort: Math.random(),
      selector: "#offer-notice-jupiter-1 iframe",
      adManager: {
        offerDivId: "offer-notice-jupiter-1",
        offerPath: getDfpIu("offer"),
      },
    };
    var element = offerDiv;
    var arrayElements = [];
    while (element && element.tagName != "BODY") {
      if (
        element.hasAttribute("data-metric-slot") ||
        element.hasAttribute("data-metric-area")
      ) {
        arrayElements.push(element);
      }
      element = element.parentNode;
      if (top.window.location.href.match(/testeOffer/)) {
        console.log("Prime elements parents:", element);
      }
    }
    if (
      arrayElements &&
      Array.isArray(arrayElements) &&
      arrayElements.length > 0
    ) {
      var areaElement = arrayElements.filter((e) =>
        e.hasAttribute("data-metric-area")
      );
      var slotElement = arrata-metric-slot")
      );
      if (areaElement) {
        window.offerAdManager.attrArea = areaElement[0].getAttribute("data-metric-area");
      }
      if (slotElement) {
        window.offerAdManager.attrSlot = slotElement[0].getAttribute("data-metric-slot");
      }
    }
    const handleMessage = (event) => {
      if (typeof event.data != "string") {
        return;
      }
      if (
        event.data.indexOf("uolcont-pgv3") < 0 &&
        event.data.indexOf("offer-admanager") < 0
      ) {
        return;
      }
      const actions = event.data.split("/");
      switch (actions[0]) {
        case "offer-admanager":
          switch (actions[1]) {
            case "topics":
              if (
                !window.offerAdManager.data.topicsRead &&
                actions[2] &&
                actions[2] != "no-topic"
              ) {
                window.offerAdManager.data.topicsRead = true;
                if (window.location.href.match(/testeOffer/)) {
                  console.log("topics read:");
                }
                window.offerAdManager.data.topics = actions[2];
                if (window.location.href.match(/testeOffer/)) {
                  console.log("topics:", window.offerAdManager.data.topics);
                }
                window.offerAdManager.data.topicsReady = true;
              } else if (
                !window.offerAdManager.data.topicsRead &&
                actions[2] &&
                actions[2] == "no-topic"
              ) {
                window.offerAdManager.data.topics = "";
                window.offerAdManager.data.topicsRead = true;
                window.offerAdManager.data.topicsReady = true;
              }
              break;
          }
        default:
          return;
      }
    };
    const segment = {
      carros: "carros",
      noticias: "noticias",
      economia: "economia",
      esporte: "esporte",
      eleicoes: "eleicoes",
      splash: "splash",
      tvefamosos: "tvefamosos",
      universa: "universa",
      vivabem: "vivabem",
      tilt: "tilt",
      ecoa: "ecoa",
      nossa: "nossa",
      tab: "tab",
      start: "start",
      play: "play",
      educacao: "educacao",
      entretenimento: "entrete",
      home: "home",
      mov: "mov",
    };
    const getCategory = (url) => {
      const category = url.filter((x) => {
        return ["uol", "com", "br"ry((y) => x !== y);
      });
      return category.length > 0 ? category[0] : "home";
    };
    const getPage = (pageUrl) => {
      const url = pageUrl.replace(/http(s)?:\/\/(www.)?/, "");
      const treatedUrl = url.split() => x.length > 1);
      return segment[getCategory(treatedUrl)];
    };
    let pageName = getPage(window.location.href);
    window.offerAdManager.vertical = pageName;
    const isNotHome = () =>
      !window.location.href.match(
        /http(s):\/\/\www\.uol\.com\.br(\/)(\?.*?)?$/
      );
    const re\?.*?)?$/
      );
    const submitStage = (ns) => {
      switch (ns) {
        case "estacao":
          var keywords = [];
          var intervalTopicsReady = setInterval(() => {
            if (window.offerAdManager.data.topicsReady) {
              var topicsList = window.offerAdManager.data.topics;
              let listTagsUser = '';
              if (
                window.offerAdManager &&
                window.offerAdManager.data &&
                window.offerAdManager.data.datalake &&
                window.offerAdManager.data.datalake.tags
              ) {
                let keysDatalakeTags = Object.keys(window.offerAdManager.data.datalake.tags);
                listTagsUser = keysDatalakeTags.join();
                keywords.push(listTagsUser);
              }
              if (referrerIsNotHome() && window.offerAdManager.data.home) {
                keywords.push("offer-home");
              }
              var offerVertical = "offer-" + pageName;
              var offerSigno =
                window.offerAdManager.data.datalake.signoZodiacoSelecionado !=
                  null &&
                window.offerAdManager.data.datalake.signoZodiacoSelecionado !=
                  ""
                  ? "offer-" +
                    window.offerAdManager.data.datalake.signoZodiacoSelecionado
                  : "";
              var assinanteConteudo = window.offerAdManager.data.datalake
                .assinante
                ? "offer-assinante"
                : "offer-nao-assinante";
              if (
                window.offerAdManager.data.datalake.userFidelityObj &&
                Array.isArray(
                  window.offerAdManager.data.datalake.userFidelityObj
                ) &&
                window.offerAdManager.data.datalake.userFidelityObj.length > 0
              ) {
                window.offerAdManager.data.datalake.us keywords.push(k)
                );
              }
              if (
                window.offerAdManager.data.datalake.pwaNavigation &&
                Array.isArray(
                  window.offerAdManager.data.datalake.pwaNavigation
                ) &&
                window.offerAdManager.data.datalake.pwaNavigation.length > 0
              ) {
                window.offerAdManager.data.datalake.pwaNavigation.forEach(
                  (i) => {
                    i = i.replaceAll(" ", "-");
                    i = i.replaceAll("_", "-");
                    keywords.push("offer-pwa-" + i);
                  }
                );
              }
              if (
                window.offerAdManager.data.datalake.clubeSelecionado
              ) {
                var offerTeam =
                  "offer-" +
                  window.offerAdManager.data.datalake.clubeSelecionado;
                keywords.push(offerTeam, assinanteConteudo, 'offer-time-escolhido');
              } else {
                keywords.push(offerVertical, assinanteConteudo, offerSigno, 'offer-sem-time-escolhido');
              }
              if (window.location.href.match(/testeOffer/)) {
                console.log("Offer Topics: ", topicsList);
                console.log("Offer Keys: ", keywords);
              }
                googletag.cmd.push(function () {
                  var slotBanner = googletag
                    .defineSlot(
                      window.offerAdManager.adManager.offerPath,
                      [[4, 4]],
                      "offer-notice-jupiter-1"
                    )
                    .setTargeting("keyword", keywords)
                    .setTargeting("refresh", "false")
                    .setTargeting("topics", topicsList)
                    .addService(googletag.pubads());
                  googletag.display("offer-notice-jupiter-1");
                  googletag.pubads().refresh([slotBanner]);
                });
              clearInterval(intervalTopicsReady);
            }
          }, 250);
          break;
      }
    };
    // organize data and programs
    const organizeDataLake = (userData) => {
      if (userData && userData.tags && userData.tags.tags) {
        window.offerAdManager.data.datalake.tags = userData.tags.tags;
      }
      if (
        userData &&
        userData["user-preferences"] &&
        userData["user-preferences"]["newsletter_assinaturas"] &&
        userData["user-preferences"]["newsletter_assinaturas"].length > 0
      ) {
        window.offerAdManager.data.datalake.newslettersAssinadas =
          userData["user-preferences"]["newsletter_assinaturas"];
      }
      if (
        userData &&
        userData["user-preferences"] &&
        userData["user-preferences"]["fidelidade_estacao"] &&
        userData["user-preferences"]["fidelidade_estacao"] != null
      ) {
        var entradas = Object.entries(
          userData["user-preferences"]["fidelidade_estacao"]
        );
        window.offerAdManager.data.datalake.userFidelity = entradx[1] + "_" + x[0])
          .toString();
        if (
          window.offerAdManager.data.datalake.userFidelity != null &&
          window.offerAdManager.data.datalake.userFidelity != ""
        ) {
          window.offerAdManager.data.datalake.userFidelityObj =
            window.offerAdManager.data.datalake.userFidelity.split(",");
        }
      }
      checkSubscriber(userData);
      checkPwaNavigation(userData);
    };
    // Consultas de Endpoints
    const addCacheBuster = (url) => {
      return new Promise((resolve) => {
        url +=
          url.indexOf("?") != -1
            ? "&cachebuster=" + Date.now()
            : "?cachebuster=" + Date.now();
        resolve(url);
      });
    };
    const checkSelectedClub = (userData) => {
      if (
        userData.data &&
        userData.data["user-preferences"] &&
        userData.data["user-preferences"].preferencias[
          "bloco-customizado-esporte"
        ] != null
      ) {
        return (window.offerAdManager.data.datalake.clubeSelecionado =
          userData.data["user-preferences"].preferencias[
            "bloco-customizado-esporte"
          ]);
      } else {
        return "";
      }
    };
    const checkSelectedZodiacsigns = (userData) => {
      if (
        userData.data &&
        userData.data["user-preferences"] &&
        userData.data["user-preferences"].preferencias[
          "bloco-customizado-mulher"
        ] != null
      ) {
        return (window.offerAdManager.data.datalake.signoZodiacoSelecionado =
          userData.data["user-preferences"].preferencias[
            "bloco-customizado-mulher"
          ]);
      } else {
        return "";
      }
    };
    const checkSubscriber = (userData) => {
      if (
        (userData &&
          userData["base-assinantes"] &&
          userData["base-assinantes"].status_assinante &&
          userData["base-assinantes"].status_assinante == "Assinante") ||
        (userData &&
          userData["base-assinantes"] &&
          userData["base-assinantes"].status_assinante &&
          userData["base-assinantes"].status_assinante ==
            "Assinante em período trial")
      ) {
        window.offerAdManager.data.datalake.assinante = true;
      } else {
        window.offerAdManager.data.datalake.assinante = false;
      }
    };
    const checkPwaNavigation = (userData) => {
      if (
        userData &&
        userData["user-preferences"] &&
        userData["user-preferences"]["pwa_navegacao"] &&
        userData["user-preferences"]["pwa_navegacao"] != {}
      ) {
        window.offerAdManager.data.datalake.pwaNavigation = Object.keys(
          userData["user-preferences"]["pwa_navegacao"]
        );
      }
    };
    const consultOfferHome = async () => {
      var urlOfferHome =
        "https://dynad-list.dynad.net/product/search?field=category&values=noticias&datasource=conteudo_offer_home&active=true";
      urlOfferHome = await addCacheBuster(urlOfferHome);
      var offerData = await fetch(urlOfferHsp) => resp.json= false;
        });
      return offerData;
    };
    const consultDatalakeUser = async () => {
      // Datalake Usuário
      // begin prod
      var urlUserData =
        "https://udr.uol.com.br?scopes=user-preferences,tags,base-assinantes";
      var datalakeUserData = await fetch(urlUserData, {
        credentials: "include",
      });
      // end prod
      // xyz begin
      // var urlUserData =
      // "https://udr.uol.com.br?ui=7d237ba8-4060-46df-9e43-54b8efa3329f&scopes=user-preferences,tags,base-assinantes";
      // var datalakeUserData = await fetch(urlUserData);
      // xyz end
      datalakeUserData = await datalakeUserData.json();
      if (window.location.href.match(/testeOffer/)) {
        console.log("datalake", datalakeUserData);
      }
      return datalakeUserData;
    };
    const offerEstacao = async () => {
      window.addEventListener("message", handleMessage, false);
      // Offer Home
      window.offerAdManager.data.home = await consultOfferHome();
      // Datalake Usuário
      window.offerAdManager.data.user = await consultDatalakeUser();
      window.offerAdManager.data.datalake.clubeSelecionado =
        await checkSelectedClub(window.offerAdManager.data.user);
      window.offerAdManager.data.datalake.signoZodiacoSelecionado =
        await checkSelectedZodiacsigns(window.offerAdManager.data.user);
      if (
        window.offerAdManager.data.user &&
        window.offerAdManager.data.user.data
      ) {
        organizeDataLake(window.offerAdManager.data.user.data);
      }
      submitStage("estacao");
    };
    offerEstacao();
  }
}
window.onload = function () {
  if (window.universal_variable.aud.graphProject === "jupiter") {
    callOfferJupiter()
  } else {
    callOfferXingu();
  }
};
