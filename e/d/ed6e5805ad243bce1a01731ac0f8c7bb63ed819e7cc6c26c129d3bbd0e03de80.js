(() => {
  // 07/02
  "use strict";
  // add Ticker Container
  var referrerPage = top.window.document.referrer;
  top.window.verifyTM;
  var newTicker = document.createElement("div");
  newTicker.setAttribute("id", "ticker");
  document.body.appendChild(newTicker);
  newTicker.style.position = "fixed";
  newTicker.style.bottom = "0";
  newTicker.style.zIndex = "40000000";
  var userCounterMethod;
  const startedDate30Days = new Date(2022, 9, 17);
  var actuallyTalker30Days;
  var productContent;
  // Global -------------------------------------------------------------------
  const model = {
    cookie: {
      bolsa: "timeoutBolsa",
      bbb: "timeoutBBB",
      breakingNews: "timeoutBreakingNews",
      talkerBBB: "timeoutTalkerBBB",
      talkerBBBVote: "timeoutTalkerBBBVote",
      talkerEnqueteAssinantes: "timeoutTalkerEnqueteAssinantes",
      conversacionalTimes: "timeoutConversacionalTimes",
      default: "timeout",
      economiaLevante: "timeoutEconomia",
      olharApurado: "timeoutOlharApurado",
      cardapioAssinante: "timeoutCardapioAssinante",
      cardapioSemCadastroNaoAssinante: "timeoutCardapioSemCadastroNaoAssinante",
      cardapioComCadastroNaoAssinante: "timeoutCardapioComCadastroNaoAssinante",
    },
    data: {
      ticker: {
        breakingNews: null,
        economiaLevante: null,
        olharApurado: null,
      },
      datalake: null,
      time: null,
      user: null,
    },
    days: null,
    minutesExpireBN: 30,
    secondsCheckBN: 60,
    username: null,
    breakingNewsEnabled: true,
    breakingNewsTestPage:
      "https://www.uol.com.br/vivabem/noticias/redacao/2021/12/04/raquete-de-tenis-iniciante-avancado-como-escolher.htm",
    selector: {
      container: "#ticker",
      iframe: "#ticker iframe",
    },
  };
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
  const verifyLastPage = () => {
    if (window.verifyTM == undefined) {
      if (
        referrerPage.search(
          /https:\/\/www\.uol\.com\.br\/vivabem\/dietas-para-emagrecer\/$/gm
        ) == 0
      ) {
        top.window.verifyTM = "tmAtivo";
        return true;
      } else {
        top.window.verifyTM = "tmAtivo";
        return false;
      }
    }
  };
  const isDebug = 
  const setCookie = (cookieName, cookieValue, days) => {
    const today = new Date();
    const expire = new Date();
    // teste
    const domain = isDebug() ? "uol.com.br" : "uol.com.br";
    // prod
    // const domain = isDebug() ? "t.dynad.net" : "uol.com.br";
    expire.setTime(today.getTime() + 3600000 * 24 * days);
    document.cookie = ""
      .concat(cookieName, "=")
      .concat(encodeURI(cookieValue), ";expires=")
      .concat(expire.toGMTString(), ";path=/;domain=" + domain);
  };
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
  const verifyAnchorAdsInPage = () => {
    var talkerContainerDiv = document.querySelector("#talker-container");
    var anchorAdsContainer = document.querySelector(".up-floating");
    var tickerContainerDiv = document.querySelector(".ticker-body");
    var tickerEconomia = document.querySelector(".ticker-financial-market");
    var tickerCopaDoMundo;
    if (anchorAdsContainer) {
      setInterval(() => {
        if (window.showAnchorAds == true && !isMobile) {
          talkerContainerDiv.style.bottom = "100px";
        } else if (window.showAnchorAds == true && isMobile) {
          talkerContainerDiv.style.bottom = "140px";
        } else {
          talkerContainerDiv.style.bottom = "0px";
        }
      }, 500);
    }
    if (tickerContainerDiv) {
      setInterval(() => {
        if (!isMobile) {
          talkerContainerDiv.style.bottom = "86px";
        } else if (
          isMobile &&
          tickerContainerDiv.classList.contains("opened")
        ) {
          talkerContainerDiv.style.bottom = "183px";
        } else if (
          isMobile &&
          tickerContainerDiv.classList.contains("closed")
        ) {
          talkerContainerDiv.style.bottom = "45px";
        }
      }, 500);
    }
    if (tickerEconomia) {
      setInterval(() => {
        if (!isMobile) {
          talkerContainerDiv.style.bottom = "86px";
        } else if (isMobile) {
          talkerContainerDiv.style.bottom = "90px";
        }
      }, 500);
    }
    setInterval(() => {
      tickerCopaDoMundo = document.querySelector(
        "#worldcup-2022-ticker .ticker-container"
      );
      if (tickerCopaDoMundo) {
        if (!isMobile && tickerCopaDoMundo.classList.contains("is-open")) {
          talkerContainerDiv.style.bottom = "53px";
        } else if (
          isMobile &&
          tickerCopaDoMundo.classList.contains("is-open")
        ) {
          talkerContainerDiv.style.bottom = "135px";
        } else if (
          !isMobile &&
          !tickerCopaDoMundo.classList.contains("is-open")
        ) {
          talkerContainerDiv.style.bottom = "40px";
        } else if (
          isMobile &&
          !tickerCopaDoMundo.classList.contains("is-open")
        ) {
          talkerContainerDiv.style.bottom = "76px";
        }
      }
    }, 100);
    if (
      isMobile &&
      !tickerContainerDiv &&
      !anchorAdsContainer &&
      !tickerEconomia &&
      !document.querySelector("#worldcup-2022-ticker")
    ) {
      talkerContainerDiv.style.bottom = "50px";
    }
  };
  const breakingNewsTestPage = (testPage) => (page == testPage ? true : false);
  const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
  const verifyUsername = () => {
    if (
      window.widgetProfile &&
      window.widgetProfile.Login &&
      window.widgetProfile.Login.getUserData() &&
      window.widgetProfile.Login.getUserData().namPerson != null
    ) {
      model.username = widgetProfile.Login.getUserData()
        .namPerson.split(" ")[0]
        .toLowerCase();
      model.username = capitalize(model.username);
      return true;
    } else {
      return false;
    }
  };
  const sleep = 
  const initBreakingNews = async () => {
    await sleep(model.secondsCheckBN * 1000);
    model.data.ticker.breakingNews = await checkBreakingNews();
    if (tickerAdManager.isDebug()) {
      model.data.ticker.breakingNews.active = true;
      model.data.ticker.breakingNews.id = "20220307163300";
    }
    if (
      model.data.ticker.breakingNews &&
      !model.data.ticker.breakingNews.active
    ) {
      model.data.ticker.breakingNews = [];
    } else {
      model.data.ticker.breakingNews = [
        {
          sku: model.data.ticker.breakingNews.id,
          name: model.data.ticker.breakingNews.title,
          link: model.data.ticker.breakingNews.url,
          description: model.data.ticker.breakingNews.kicker,
          active: model.data.ticker.breakingNews.active,
        },
      ];
    }
    if (hasBreakingNews()) {
      // console.log("Ticker:", "Has BN Close");
      // add Ticker Container
      // console.log("Ticker:", "Add Div BN");
      window.UOLPD.TagManager.DfpAsync.removeAds(["ticker"]);
      var newTicker = document.createElement("div");
      newTicker.setAttribute("id", "ticker");
      document.body.appendChild(newTicker);
      newTicker.style.position = "fixed";
      newTicker.style.bottom = "0";
      newTicker.style.zIndex = "9999999";
      submitStage("breaking-news");
    } else {
      // console.log("Ticker:", "No BN");
      initBreakingNews();
    }
  };
  const gaEvents = async (event) => {
    userCounterMethod =
      userCounterMethod == undefined ? "deslizante" : userCounterMethod;
    var event = event.split("/");
    var sendEvent =
      window.universal_variable.aud.ga.filename == "uolestacoes"
        ? "uolestacoes.event"
        : "event";
    if (event[0] === "olharApurado" || event[0] === "economiaLevante") {
      switch (event[1]) {
        case "impressao":
          break;
        case "clique":
        case "fechar":
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "conversacionalMTA") {
      // console.log("Talker:", event);
      switch (event[1]) {
        case "selecionar":
          fetch(
            "https://udr.uol.com.br/store?scope=meu-time&data=time:" +
              event[2] +
              ";origem:uol-talker-meu-time-agora",
            { credentials: "include" }
          );
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-meu-time-agora",
            action: "clique",
            label: "selecionar-" + event[2],
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          break;
        case "baixar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-meu-time-agora",
            action: "clique",
            label: event[1] + "-" + event[2],
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        case "acessar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-meu-time-agora",
            action: "clique",
            label: event[1] + "-" + event[2],
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        case "seguir":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-meu-time-agora",
            action: "clique",
            label: "seguir-" + event[2],
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-meu-time-agora",
            action: "impressao",
            label: "componente-visualizado",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
          });
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-meu-time-agora",
            action: "clique",
            label: "fechar",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "breakingNews") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "modal-content-ticker",
            action: "impressao",
            label: "componente-visualizado",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
          });
          break;
        case "fechar":
          window.activeBreakingNews = false;
          window.uolAnalytics(sendEvent, {
            category: "modal-content-ticker",
            action:
              window.tickerAdManager.model.data.ticker.breakingNews[0].link,
            label: "fechar-ticker",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        case "clickText":
          window.activeBreakingNews = false;
          window.uolAnalytics(sendEvent, {
            category: "modal-content-ticker",
            action:
              window.tickerAdManager.model.data.ticker.breakingNews[0].link,
            label: "texto-acessar",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        case "clickCta":
          window.activeBreakingNews = false;
          window.uolAnalytics(sendEvent, {
            category: "modal-content-ticker",
            action:
              window.tickerAdManager.model.data.ticker.breakingNews[0].link,
            label: "botao-acessar",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "talkerBBB") {
      // console.log("Ticker:", event);
      switch (event[1]) {
        case "acessar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-comunica-assinante",
            action: "clique",
            label: "acesso-enquete-bbb",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-comunica-assinante",
            action: "impressao",
            label: "componente-visualizado-enquete-bbb",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
          });
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-comunica-assinante",
            action: "clique",
            label: "fechar-enquete-bbb",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-cardapios-para-emagrecer-naocadastrado") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-cardapios-para-emagrecer-naocadastrado",
            action: "impressao",
            label: "componente-visualizado",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
          });
          break;
        case "assinar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-cardapios-para-emagrecer-naocadastrado",
            action:
              "https://assine.uol.com.br/?utm_source=uol.com.br&utm_medium=talker&utm_campaign=cardapios-para-emagrecer&utm_content=assine",
            label: "botao-assine",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-cardapios-para-emagrecer-naocadastrado",
            action: "clique",
            label: "fechar",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-cardapios-para-emagrecer-cadastrado") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-cardapios-para-emagrecer-cadastrado",
            action: "impressao",
            label: "componente-visualizado",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
          });
          break;
        case "assinar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-cardapios-para-emagrecer-cadastrado",
            action:
              "https://assine.uol.com.br/?utm_source=uol.com.br&utm_medium=talker&utm_campaign=cardapios-para-emagrecer&utm_content=assine",
            label: "botao-navegue",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-cardapios-para-emagrecer-cadastrado",
            action: "clique",
            label: "fechar",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-cardapios-para-emagrecer-assinante") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-cardapios-para-emagrecer-assinante",
            action: "impressao",
            label: "componente-visualizado",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
          });
          break;
        case "navegar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-cardapios-para-emagrecer-assinante",
            action: "https://www.uol.com.br/vivabem/dietas-para-emagrecer/",
            label: "botao-conheca",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-cardapios-para-emagrecer-assinante",
            action: "clique",
            label: "fechar",
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-30-dias-enquetes") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "impressao",
            label:
              "componente-visualizado-enquetes-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
            abTest20: productContent,
          });
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "fechar",
            label:
              "clique-enquetes-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        case "navegar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: decodeURIComponent(event[2]),
            label:
              "clique-enquetes-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-30-dias-meu-time-agora") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "impressao",
            label:
              "componente-visualizado-esporte-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
            abTest20: productContent,
          });
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "fechar",
            label:
              "clique-esporte-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        case "navegar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: decodeURIComponent(event[2]),
            label:
              "clique-esporte-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-30-dias-colunas") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "impressao",
            label:
              "componente-visualizado-colunas-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
            abTest20: productContent,
          });
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "fechar",
            label:
              "clique-colunas-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        case "navegar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: decodeURIComponent(event[2]),
            label:
              "clique-colunas-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-30-dias-investimentos") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "impressao",
            label:
              "componente-visualizado-investimentos-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
            abTest20: productContent,
          });
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "fechar",
            label:
              "clique-investimentos-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        case "navegar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: decodeURIComponent(event[2]),
            label:
              "clique-investimentos-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
    if (event[0] === "uol-talker-30-dias-generica") {
      switch (event[1]) {
        case "impressao":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "impressao",
            label:
              "componente-visualizado-generica-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            nonInteraction: true,
            abTest20: productContent,
          });
          break;
        case "fechar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: "fechar",
            label:
              "clique-generica-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        case "navegar":
          window.uolAnalytics(sendEvent, {
            category: "uol-talker-" + userCounterMethod + "-jornada-30-dias",
            action: decodeURIComponent(event[2]),
            label:
              "clique-generica-d" +
              parseFloat(localStorage.getItem("acessoRegua30Dias")),
            central: window.universal_variable.aud.central,
            canal: window.universal_variable.aud.channel,
            tags: window.universal_variable.aud.tags,
            abTest20: productContent,
          });
          initBreakingNews();
          break;
        default:
          break;
      }
    }
  };
  const checkSkuLists = (listSku, dataSku) => {
    if (listSku.indexOf(dataSku) === -1) {
      listSku.push(dataSku);
    }
    return listSku.toString();
  };
  window.tickerAdManager = {
    model: model,
    cancelRequest: false,
    getCookie: getCookie,
    setCookie: setCookie,
    gaEvents: gaEvents,
    isDebug: isDebug,
    isMobile: isMobile,
    initBreakingNews: initBreakingNews,
    breakingNewsTestPage: breakingNewsTestPage,
    checkSkuLists: checkSkuLists,
    capitalize: capitalize,
  };
  // Main ---------------------------------------------------------------------
  let page = window.location.href;
  // const checkTeamPage = () => {
  //   // teste
  //   // page = "https://www.uol.com.br/esporte/ao-vivo/futebol/corinthians-agora/";
  //   if (
  //     page == "https://www.uol.com.br/esporte/ao-vivo/futebol/palmeiras-agora/"
  //   ) {
  //     return "palmeiras";
  //   } else if (
  //     page == "https://www.uol.com.br/esporte/ao-vivo/futebol/sao-paulo-agora/"
  //   ) {
  //     return "saopaulo";
  //   } else if (
  //     page ==
  //     "https://www.uol.com.br/esporte/ao-vivo/futebol/corinthians-agora/"
  //   ) {
  //     return "corinthians";
  //   } else if (
  //     page == "https://www.uol.com.br/esporte/ao-vivo/futebol/santos-agora/"
  //   ) {
  //     return "santos";
  //   } else if (
  //     page == "https://www.uol.com.br/esporte/ao-vivo/futebol/flamengo-agora/"
  //   ) {
  //     return "flamengo";
  //   } else {
  //     return false;
  //   }
  // };
  const checkSubscriber = (datalake) => {
    var arrayAssinantes = ["Assinante", "Assinante em período trial"];
    if (
      datalake &&
      datalake.data &&
      datalake.data["base-assinantes"] != null &&
      arrayAssinantes.includes(
        datalake.data["base-assinantes"].status_assinante
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
  const checkSubscriberFromMeuTimeAgora = (datalake) => {
    if (
      datalake &&
      datalake.data &&
      datalake.data["base-assinantes"] != null &&
      (datalake.data["base-assinantes"].produto == "COMBO NORDESTE" ||
        datalake.data["base-assinantes"].produto == "MTA")
    ) {
      return true;
    } else {
      return false;
    }
  };
  const checkSubscriberFromEconomia = (datalake) => {
    if (
      datalake &&
      datalake.data &&
      datalake.data["base-assinantes"] != null &&
      datalake.data["base-assinantes"].status_assinante == "Assinante" &&
      (datalake.data["base-assinantes"].produto == "INVESTIMENTOS" ||
        datalake.data["base-assinantes"].estacao == "UOL ECONOMIA")
    ) {
      return true;
    } else {
      return false;
    }
  };
  const checkSubscriberFromColunas = (datalake) => {
    if (
      datalake &&
      datalake.data &&
      datalake.data["base-assinantes"] != null &&
      datalake.data["base-assinantes"].status_assinante == "Assinante" &&
      (datalake.data["base-assinantes"].produto == "BLOGS" ||
        datalake.data["base-assinantes"].estacao == "BLOGS")
    ) {
      return true;
    } else {
      return false;
    }
  };
  const checkSubscriberFromEnquetes = (datalake) => {
    if (
      datalake &&
      datalake.data &&
      datalake.data["base-assinantes"] != null &&
      datalake.data["base-assinantes"].status_assinante == "Assinante" &&
      (datalake.data["base-assinantes"].produto == "ENQUETES" ||
        datalake.data["base-assinantes"].estacao == "ENQUETES")
    ) {
      return true;
    } else {
      return false;
    }
  };
  const checkCountAccess = (counterAccessDataLake) => {
    if (
      window.tickerAdManager.model.data.datalake.data[counterAccessDataLake] &&
      window.tickerAdManager.model.data.datalake.data[counterAccessDataLake]
        .contagem_centrais &&
      window.tickerAdManager.model.data.datalake.data[counterAccessDataLake]
        .contagem_centrais.totais &&
      window.tickerAdManager.model.data.datalake.data[counterAccessDataLake]
        .contagem_centrais.totais.total_hits > 0
    ) {
      return window.tickerAdManager.model.data.datalake.data[
        counterAccessDataLake
      ].contagem_centrais.totais.total_hits;
    } else {
      return false;
    }
  };
  const frequency30Days = (acessoAtual) => {
    var contador = localStorage.getItem("30DaysFrequencyDay");
    var numeroContador = localStorage.getItem("numeroContador");
    if (Number(contador) == 3 && acessoAtual == numeroContador) {
      // mesmo dia de acesso, acesso maximo alcançado
      return false;
    }
    if (contador == null && numeroContador == null) {
      localStorage.setItem("numeroContador", String(acessoAtual));
      return true;
    }
    if (Number(contador) < 3 && acessoAtual == numeroContador) {
      return true;
    }
    if (acessoAtual != numeroContador) {
      localStorage.removeItem("numeroContador");
      // talker ja vai setar pra 1 a frequencia de acesso no dia
      localStorage.removeItem("30DaysFrequencyDay");
      localStorage.setItem("numeroContador", String(acessoAtual));
      return true;
    }
  };
  const counterDays = (userDataAccess) => {
    if (
      userDataAccess["base-assinantes"] &&
      userDataAccess["base-assinantes"].dt_venda
    ) {
      productContent = userDataAccess["base-assinantes"].produto;
      const dateSellSubscription = new Date(
        userDataAccess["base-assinantes"].dt_venda
      );
      var counter30DaysDataLake;
      if (dateSellSubscription < startedDate30Days) {
        //oneshot
        userCounterMethod = "oneshot";
        counter30DaysDataLake = checkCountAccess(
          "daily-access-counter-oneshot"
        );
        if (!frequency30Days(counter30DaysDataLake)) {
          return false;
        }
        if (!counter30DaysDataLake) {
          return false;
        }
        counter30DaysDataLake = counter30DaysDataLake + 1;
        if (
          (actuallyTalker30Days == "economia" ||
            actuallyTalker30Days == "generico") &&
          counter30DaysDataLake >= 36
        ) {
          return false;
        } else if (counter30DaysDataLake >= 31) {
          return false;
        }
        localStorage.setItem("acessoRegua30Dias", counter30DaysDataLake);
        return true;
      } else {
        //deslizante
        userCounterMethod = "deslizante";
        counter30DaysDataLake = checkCountAccess("daily-access-counter");
        if (!frequency30Days(counter30DaysDataLake)) {
          return false;
        }
        if (!counter30DaysDataLake) {
          return false;
        }
        var aux30Dias = localStorage.getItem("aux30Dias");
        var counter30Days = localStorage.getItem("acessoRegua30Dias");
        localStorage.setItem("acessoRegua30Dias", counter30DaysDataLake);
        if (aux30Dias && counter30Days && aux30Dias != counter30DaysDataLake) {
          localStorage.setItem("aux30Dias", String(counter30DaysDataLake));
          var local30Days = parseInt(counter30Days);
          local30Days++;
          localStorage.setItem("acessoRegua30Dias", String(local30Days));
        }
        if (!aux30Dias) {
          localStorage.setItem("aux30Dias", String(counter30DaysDataLake));
        }
        if (!counter30Days) {
          localStorage.setItem("acessoRegua30Dias", "1");
        }
        if (
          (actuallyTalker30Days == "economia" ||
            actuallyTalker30Days == "generico") &&
          parseInt(counter30Days) >= 36
        ) {
          return false;
        }
        if (counter30DaysDataLake >= 31) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      return false;
    }
  };
  const checkTag = (tag, counter) => {
    if (
      window.tickerAdManager.model.data.datalake.data &&
      window.tickerAdManager.model.data.datalake.data.tags &&
      window.tickerAdManager.model.data.datalake.data.tags.tags
    ) {
      var tags = window.tickerAdManager.model.data.datalake.data.tags.tags;
      var thisTag = Object.entries(tags).filteg);
      if (thisTag.length > 0 && thisTag[0][1] >= counter) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const checkTagHR = (tag, counter) => {
    if (
      counter != 0 &&
      window.tickerAdManager.model.data.datalakeHR &&
      window.tickerAdManager.model.data.datalakeHR.tags &&
      window.tickerAdManager.model.data.datalakeHR.tags.length > 0
    ) {
      var tags = window.tickerAdManager.model.data.datalakeHR.tags;
      var thisTag = tags.filter((x) => x.key == tag && x.count >= counter);
      if (thisTag.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const isNotHome = () => !page.match(/http(s):\/\/\www\.uol\.com\.br(\/)$/);
  const referrerIsNotHome );
  const isNotEconomia );
  const viewedThisTicker = () => {
    const currentSkuList =
      tickerAdManager.getCookie(tickerAdManager.model.cookie.breakingNews) ||
      "";
    return currentSkuList.match(model.data.ticker.breakingNews[0].sku)
      ? true
      : false;
  };
  const samePage = (data) => {
    if (data && data.length > 0) {
      return page.match(data[0].link) ? true : false;
    }
  };
  const segment = {
    carros: "carros",
    noticias: "noticias",
    economia: "economia",
    esporte: "esporte",
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
      return ["uol", "com", "br", "videos"].every);
    });
    return category.length > 0 ? category[0] : "home";
  };
  const getPage = (pageUrl) => {
    const url = pageUrl.replace(/http(s)?:\/\/(www.)?/, "");
    const treatedUrl = url.split(/(\.|\/)/).filte1);
    return segment[getCategory(treatedUrl)];
  };
  let pageName = getPage(window.location.href);
  const submitStage = async (ns) => {
    var keyword = null;
    switch (ns) {
      case "breaking-news":
        keyword = "ticker-breaking-news";
        if (window.changeAnchorAds) {
          window.activeBreakingNews = true;
          window.changeAnchorAds();
        }
        break;
      case "talkerMTA":
        keyword = "talker-mta-teste";
        break;
      case "talkerEnqueteAssinantes":
        keyword = "talker-enquete-assinantes";
        break;
      case "talker-cardapio-sem-cadastro-nao-assinante":
        keyword = "talker_nao_logado_nao_assinante";
        break;
      case "talker-cardapio-com-cadastro-nao-assinante":
        keyword = "talker_logado_nao_assinante";
        break;
      case "talker-cardapio-assinante":
        keyword = "talker_assinante";
        break;
      case "talker-30-dias-meu-time-agora":
        keyword = "talker-mta-30-dias";
        break;
      case "talker-30-dias-enquetes":
        keyword = "talker-enquete-30-dias";
        break;
      case "talker-30-dias-investimento":
        keyword = "talker-investimentos-30-dias";
        break;
      case "talker-30-dias-colunas":
        keyword = "talker-colunas-30-dias";
        break;
      case "talker-30-dias-generica":
        keyword = "talker-generica-30-dias";
        break;
      // case "economiaLevante":
      //   keyword = "ticker-levante";
      //   break;
      // case "olharApurado":
      //   keyword = "ticker-olhar-apurado";
      //   break;
      // case "talkerBBB":
      //   keyword = "talker-bbb";
      //   break;
    }
    if (keyword != null) {
      if (page && page.match(/testeTalker/)) {
        console.log(
          "testing",
          "criativo a ser chamado",
          keyword,
          "acesso a ser mostrado",
          localStorage.getItem("acessoRegua30Dias")
        );
        console.log("talker", keyword);
      }
      verifyAnchorAdsInPage();
      window.uolads &&
        window.uolads.push({
          id: "ticker",
          keyword: keyword,
          pos: "ticker",
        });
    }
  };
  Date.prototype.expirationDate = function () {
    // hora atual - 30 min
    this.setMinutes(this.getMinutes() - model.minutesExpireBN);
    const yyyy = this.getFullYear();
    const mm =
      this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : this.getMonth() + 1; // getMonth() is zero-based
    const dd = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
    const hh = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
    const min =
      this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
    const ss =
      this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();
    return ""
      .concat(yyyy)
      .concat(mm)
      .concat(dd)
      .concat(hh)
      .concat(min)
      .concat(ss);
  };
  const date = new Date();
  const expireBreakingNews = date.expirationDate();
  const timeEscolhido = () => {
    if (getCookie("meuTime")) {
      return true;
    } else if (
      model.data.datalake.data &&
      model.data.datalake.data["user-preferences"] &&
      model.data.datalake.data["user-preferences"].preferencias[
        "bloco-customizado-esporte"
      ] != null
    ) {
      return true;
    } else if (localStorage.getItem("conversacionalTime") != null) {
      return true;
    } else {
      return false;
    }
  };
  const hasBreakingNews = () => {
    if (
      window.location.href.match(/testeAnchorBreaking/) &&
      model.data.ticker.breakingNews.length > 0 &&
      model.data.ticker.breakingNews[0].active &&
      !samePage(model.data.ticker.breakingNews) &&
      isNotHome()
    ) {
      return true;
    } else if (
      model.breakingNewsEnabled &&
      // breakingNewsTestPage(model.breakingNewsTestPage) &&
      model.data.ticker.breakingNews.length > 0 &&
      model.data.ticker.breakingNews[0].active &&
      model.data.ticker.breakingNews[0].sku > expireBreakingNews &&
      !samePage(model.data.ticker.breakingNews) &&
      isNotHome() &&
      !viewedThisTicker()
    ) {
      return true;
    }
  };
  // const hasEconomiaLevante = () => {
  //   if (
  //     checkSubscriberEconomia(window.tickerAdManager.model.data.datalake) &&
  //     !window.tickerAdManager.getCookie(
  //       window.tickerAdManager.model.cookie.economiaLevante
  //     ) &&
  //     model.data.ticker.economiaLevante.length > 0 &&
  //     !samePage(model.data.ticker.economiaLevante)
  //   ) {
  //     return true;
  //   }
  // };
  const hasConversacionalMTA = () => {
    // condições para mostrar alert no teste
    if (window.location.href.match(/teste_ticker_2022/)) {
      var hasDatalakeTeam;
      var showTalkerMta;
      var isSportPage = pageName == "esporte" ? "Sim" : "Não";
      var hasCookieMeuTime = getCookie("meuTime") ? "Sim" : "Não";
      var hasFootballTag =
        universal_variable.aud.tags.match(/15308/) || checkTagHR(15308, 1)
          ? "Sim"
          : "Não";
      var hasLocalStorageteam =
        localStorage.getItem("conversacionalTime") != null ? "Sim" : "Não";
      if (
        model.data.datalake.data &&
        model.data.datalake.data["user-preferences"] &&
        model.data.datalake.data["user-preferences"].preferencias[
          "bloco-customizado-esporte"
        ] != null
      ) {
        hasDatalakeTeam = "Sim";
      } else {
        hasDatalakeTeam = "Não";
      }
      var timeoutCookieMta = window.tickerAdManager.getCookie(
        window.tickerAdManager.model.cookie.conversacionalTimes
      )
        ? "Sim"
        : "Não";
      if (
        isSportPage == "Sim" &&
        hasFootballTag == "Sim" &&
        hasCookieMeuTime == "Não" &&
        hasLocalStorageteam == "Não" &&
        hasDatalakeTeam == "Não" &&
        timeoutCookieMta == "Não"
      ) {
        showTalkerMta = "O talker MTA deve ser exibido";
      } else {
        showTalkerMta = "O talker MTA não deverá ser exibido";
      }
window.alert(`${showTalkerMta} \n
Seu usuário:
1. Está numa página de esporte: ${isSportPage}
2. Tem a tag de Futebol nº 15308: ${hasFootballTag}
3. Tem o cookie de meu time: ${hasCookieMeuTime}
4. Tem o time salvo no Local Storage: ${hasLocalStorageteam}
5. Tem o time salvo no Datalake: ${hasDatalakeTeam}
6. Está com o talker suspenso por 3 dias por ter sido fechado: ${timeoutCookieMta} \n
Se o item 1 ou 2 retornar *Não*, o Talker não será mostrado
Se algum item a partir do 3 retornar *Sim*, o Talker não será mostrado`);
    }
    // condições normais
    if (
      window.location.href.match(/teste_ticker_2022/) &&
      pageName == "esporte" &&
      !timeEscolhido() &&
      !window.tickerAdManager.getCookie(
        window.tickerAdManager.model.cookie.conversacionalTimes
      ) &&
      (universal_variable.aud.tags.match(/15308/) || checkTagHR(15308, 1))
    ) {
      return true;
    }
  };
  // const hasTalkerBBB = () => {
  //   if (
  //     pageName == "splash" &&
  //     checkTagHR(80557, 1) &&
  //     verifyUsername() &&
  //     !window.tickerAdManager.getCookie(
  //       window.tickerAdManager.model.cookie.talkerBBB
  //     ) &&
  //     !window.tickerAdManager.getCookie(
  //       window.tickerAdManager.model.cookie.talkerBBBVote
  //     )
  //   ) {
  //     return true;
  //   }
  // };
  // const hasOlharApurado = () => {
  //   if (
  //     isNotEconomia() &&
  //     checkSubscriberBlogs(window.tickerAdManager.model.data.datalake) &&
  //     !window.tickerAdManager.getCookie(
  //       window.tickerAdManager.model.cookie.olharApurado
  //     ) &&
  //     model.data.ticker.olharApurado.length > 0 &&
  //     !samePage(model.data.ticker.olharApurado)
  //   ) {
  //     return true;
  //   }
  // };
  const hasTalkerEnqueteAssinantes = () => {
    if (
      isNotHome() &&
      referrerIsNotHome() &&
      verifyUsername() &&
      !window.tickerAdManager.getCookie(
        window.tickerAdManager.model.cookie.hasTalkerEnqueteAssinantes
      )
    ) {
      return true;
    }
  };
  const hasCardapiosParaEmagrecerSemCadastroNaoAssinante = () => {
    if (
      !verifyLastPage() &&
      pageName == "vivabem" &&
      !verifyUsername() &&
      !window.tickerAdManager.getCookie(
        window.tickerAdManager.model.cookie.cardapioSemCadastroNaoAssinante
      )
    ) {
      return true;
    }
  };
  const hasCardapiosParaEmagrecerComCadastroNaoAssinante = () => {
    if (
      !verifyLastPage() &&
      pageName == "vivabem" &&
      verifyUsername() &&
      !checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      !window.tickerAdManager.getCookie(
        window.tickerAdManager.model.cookie.cardapioComCadastroNaoAssinante
      )
    ) {
      return true;
    }
  };
  const hasCardapiosParaEmagrecerAssinante = () => {
    if (
      !verifyLastPage() &&
      pageName == "vivabem" &&
      verifyUsername() &&
      checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      !window.tickerAdManager.getCookie(
        window.tickerAdManager.model.cookie.cardapioAssinante
      )
    ) {
      return true;
    }
  };
  const has30diasMeuTimeAgora = () => {
    actuallyTalker30Days = "mta";
    if (
      //verifica se é assinante E se é assinante pelo meu time agora
      checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      checkSubscriberFromMeuTimeAgora(
        window.tickerAdManager.model.data.datalake
      ) &&
      counterDays(window.tickerAdManager.model.data.datalake.data)
    ) {
      return true;
    }
  };
  const has30diasEconomia = () => {
    actuallyTalker30Days = "economia";
    if (
      //verifica se é assinante E se é assinante pelo meu time agora
      checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      checkSubscriberFromEconomia(window.tickerAdManager.model.data.datalake) &&
      counterDays(window.tickerAdManager.model.data.datalake.data)
    ) {
      return true;
    }
  };
  const has30diasEnquetes = () => {
    actuallyTalker30Days = "enquetes";
    if (
      checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      checkSubscriberFromEnquetes(window.tickerAdManager.model.data.datalake) &&
      counterDays(window.tickerAdManager.model.data.datalake.data)
    ) {
      return true;
    }
  };
  const has30diasColunas = () => {
    actuallyTalker30Days = "colunas";
    if (
      checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      checkSubscriberFromColunas(window.tickerAdManager.model.data.datalake) &&
      counterDays(window.tickerAdManager.model.data.datalake.data)
    ) {
      return true;
    }
  };
  const has30diasGenerico = () => {
    actuallyTalker30Days = "generico";
    if (
      checkSubscriber(window.tickerAdManager.model.data.datalake) &&
      counterDays(window.tickerAdManager.model.data.datalake.data)
    ) {
      return true;
    }
  };
  const checkTickersData = () => {
    if (model.data.ticker) {
      var intervalTalker = setInterval(() => {
        if (document.readyState === "complete") {
          // Breaking News
          if (hasBreakingNews()) {
            submitStage("breaking-news");
          }
          //   else if (has30diasMeuTimeAgora()) {
          //     submitStage("talker-30-dias-meu-time-agora");
          //   }
          //   else if (has30diasEnquetes()) {
          //     submitStage("talker-30-dias-enquetes");
          //   }
          //   else if (has30diasEconomia()) {
          //     submitStage("talker-30-dias-investimento");
          //   }
          //   else if (has30diasColunas()) {
          //     submitStage("talker-30-dias-colunas");
          //   }
          //   else if (has30diasGenerico()) {
          //     submitStage("talker-30-dias-generica");
          //   }
          // // Conversacional Times
          else if (hasConversacionalMTA()) {
            submitStage("talkerMTA");
          }
          // // Cardapios Sem Cadastro Nao Assinante
          // else if (hasCardapiosParaEmagrecerSemCadastroNaoAssinante()) {
          //   submitStage("talker-cardapio-sem-cadastro-nao-assinante");
          // }
          // // // Cardapios Com Cadastro Nao Assinante
          // else if (hasCardapiosParaEmagrecerComCadastroNaoAssinante()) {
          //   submitStage("talker-cardapio-com-cadastro-nao-assinante");
          // }
          // // // Cardapios Assinante
          // else if (hasCardapiosParaEmagrecerAssinante()) {
          //   submitStage("talker-cardapio-assinante");
          // }
          // Talker Enquete Assinantes
          // else if (hasTalkerEnqueteAssinantes()) {
          //   submitStage("talkerEnqueteAssinantes");
          // }
          // Economia - Levante
          // else if (hasEconomiaLevante()) {
          //   submitStage("economiaLevante");
          // }
          // // Talker BBB
          // else if (hasTalkerBBB()) {
          //   submitStage("talkerBBB");
          // }
          // Olhar Apurado
          // else if (hasOlharApurado()) {
          //   submitStage("olharApurado");
          // }
          clearInterval(intervalTalker);
        }
      }, 1000);
    }
  };
  const hasCacheBuster = async (url) =>
    (url +=
      url.indexOf("?") != -1
        ? "&cachebuster=" + Date.now()
        : "?cachebuster=" + Date.now());
  const checkBreakingNews = async () => {
    var urlBreakingNews =
      "https://c.jsuol.com.br/service/?loadComponent=latest-news-dynad&data=%7b%22format%22:%22json%22,%22slug%22:%22breaking-news%22%7d";
    var breakingData = await fetch(urlBreakingNews);
    breakingData = await breakingData.json();
    return breakingData;
  };
  const makeJson = async () => {
    // xyz
    // var urlUserData =
    // "https://udr.uol.com.br?ui=e91094aa-0136-4781-9bb5-be86963cf64c&scopes=user-preferences,tags,base-assinantes,daily-access-counter-oneshot,daily-access-counter";
    //   // "https://udr.uol.com.br?ui=2d116097-3e4f-4d21-909e-eefed271f836&scopes=user-preferences,tags,base-assinantes";
    // model.data.datalake = await fetch(urlUserData);
    var urlUserData =
      "https://udr.uol.com.br?scopes=user-preferences,tags,base-assinantes,daily-access-counter-oneshot,daily-access-counter";
    model.data.datalake = await fetch(urlUserData, {
      credentials: "include",
    });
    model.data.datalake = await model.data.datalake.json();
    let userId = tickerAdManager.isDebug()
      ? "951510644.1623094097"
      : tickerAdManager.getCookie("_ga");
    userId = userId ? userId.replace(/^([^.]+\.){2}/, "") : "";
    if (userId) {
      var urlDatalake =
        "https://history.recommendation.uol.com.br/get_tags_info?user_id=" +
        userId;
      model.data.datalakeHR = await fetch(urlDatalake);
      model.data.datalakeHR = await model.data.datalakeHR.json();
      // teste - force blog subscriber
      // model.data.datalakeHR.assinaturas = [
      //   {
      //     servico: "BLOG",
      //     produto: "PAYWALL",
      //     data_atualizacao: "20210330",
      //     data_inscricao: "20200423",
      //   },
      // ];
    }
    // var urlBR = "https://sna.dynad.net/eval/1000109";
    // var brData = await fetch(urlBR);
    // brData = await brData.json();
    // if (brData != null) {
    //   model.data.ticker.economiaLevante = brData.economiaLevante;
    //   model.data.ticker.olharApurado = brData.olharApurado;
    // }
    model.data.ticker.breakingNews = await checkBreakingNews();
    if (tickerAdManager.isDebug()) {
      model.data.ticker.breakingNews.active = true;
      model.data.ticker.breakingNews.id = "20220307163300";
    }
    if (
      model.data.ticker.breakingNews &&
      !model.data.ticker.breakingNews.active
    ) {
      model.data.ticker.breakingNews = [];
    } else {
      model.data.ticker.breakingNews = [
        {
          sku: model.data.ticker.breakingNews.id,
          name: model.data.ticker.breakingNews.title,
          link: model.data.ticker.breakingNews.url,
          description: model.data.ticker.breakingNews.kicker,
          active: model.data.ticker.breakingNews.active,
        },
      ];
    }
    checkTickersData();
  };
  makeJson();
})();
