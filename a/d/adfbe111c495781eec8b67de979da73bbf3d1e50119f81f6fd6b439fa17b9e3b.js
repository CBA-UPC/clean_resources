<!DOCTYPE html>


<html lang=en>
<head>
  <meta charset=utf-8>
  <title>ns</title>
</head>
<body>
  

  

  
  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

























































































</body></html>
    eventValue: value,
      nonInteractive: true,
    });
  }

  if (window.gtag) {
    gtag("event", action, {
      category: "Menu",
      label: label || null,
      value: value,
    });
  }
};

/**
 * Botão que abre e fecha o menu principal
 */
const mainMenuOpen = (e) => {
  let body = document.body;
  if (body.classList.contains("main-menu-open")) return false;

  gaEvent("mainMenuOpen", "Menu principal aberto");

  body.classList.add("main-menu-open");
  document.addEventListener("keyup", mainMenuClose);
  document.querySelector("#main-menu").classList.add("animate-in");
  setTimeout(() => {
    // e.target.closest('.open-menu').classList.add('is-active');
    document.querySelector("#main-menu").classList.add("animate-in");
  }, 850);
};
document.querySelectorAll("#main-header .open-menu").forEach(function (item) {
  item.addEventListener("click", mainMenuOpen);
});

const mainMenuClose = (e) => {
  let body = document.body;
  if (!body.classList.contains("main-menu-open")) return false;

  gaEvent("mainMenuClose", "Menu principal fechado");

  document.querySelector("#main-menu").classList.add("animate-out");
  document
    .querySelector("#main-menu #menu-navbar")
    .classList.add("animate-out");
  // e.target.closest('.open-menu').classList.remove('is-active');
  document.removeEventListener("keyup", mainMenuClose);
  setTimeout(() => {
    body.classList.remove("main-menu-open");
    document.querySelector("#main-menu").classList.remove("animate-out");
    document
      .querySelector("#main-menu #menu-navbar")
      .classList.remove("animate-out");
  }, 1000);
};
document.querySelectorAll("#main-menu .close-menu").forEach((item) => {
  item.addEventListener("click", mainMenuClose);
});

/**
 * Menu Lateral - Clique nos itens
 */
const mainSubmenuOpen = (e) => {
  if (e.target.nodeName !== "LI" && !e.target.closest("li")) return;

  let actived = document.querySelector("#menu-navbar ul .active");
  actived.classList.remove("active");

  const target = e.target.nodeName == "LI" ? e.target : e.target.closest("li");
  target.classList.add("active");

  let menu = target.classList.item(0);
  const base = "#main-menu .menu-body .menu-tab";
  let selector = `${base}.${menu}`;
  let remove = `${base}.tab-active`;

  /**
   * Desativa o que está ativo
   */
  document.querySelector(remove).classList.remove("tab-active");

  /**
   * Ativa o novo item selecionado
   */
  document.querySelector(selector).classList.add("tab-active");
};
document
  .querySelector("#menu-navbar")
  .addEventListener("click", mainSubmenuOpen);

/**
 * Fecha o FAB clicando no fundo branco
 */
const fabCloseEsc = (event) => {
  if (event.key !== "Escape" && event.keyCode !== 27) return;
  fabClose();
};

/**
 * Dispara evento do GA quando um item do FAB é clicado
 */
const onFabItemClick = (event) => {
  const target = event.target.classList.contains("trbfab__item__action")
    ? event.target
    : event.target.closest(".trbfab__item__action");
  const dataEvent = JSON.parse(target.getAttribute("data-ga-event"));
  gaEvent(dataEvent.action, dataEvent.label);
};

/**
 * Botão que abre e fecha o FAB
 */
const fabOpen = (e) => {
  let body = document.body;
  if (body.classList.contains("fab-open")) return;

  gaEvent("fabOpen", "Menu FAB aberto");

  const fabg = document.querySelector("#trbfab-backlight");
  const fab = document.querySelector("#trbfab");

  const fabErrorLink = document.querySelector("#fabErrorLink");
  fabErrorLink.href = fabErrorLink.href.replace(
    /{{FAB_ERROR_LOCATION}}/g,
    encodeURIComponent(window.location.href)
  );

  body.classList.add("fab-open");
  fabg.classList.add("animate-in");
  fab.classList.add("animate-in");
  setTimeout(() => {
    // e.target.closest('.open-menu').classList.add('is-active');
    fabg.classList.add("animate-in");
    fab.classList.add("animate-in");
  }, 850);

  document
    .querySelector("#trbfab-backlight")
    .addEventListener("click", fabClose);
  document.querySelector("#trb-fab-close").addEventListener("click", fabClose);
  document.addEventListener("keyup", fabCloseEsc);
  document
    .querySelectorAll("#trbfab .trbfab__list .trbfab__item a")
    .forEach((item) => {
      item.addEventListener("click", onFabItemClick);
    });
};
const fabElement = document.querySelector("#trb-fab-button");
if (fabElement) fabElement.addEventListener("click", fabOpen);

const fabClose = (e) => {
  let body = document.body;
  if (!body.classList.contains("fab-open")) return;

  gaEvent("fabClose", "Menu FAB fechado");

  const fabg = document.querySelector("#trbfab-backlight");
  const fab = document.querySelector("#trbfab");

  fab.classList.add("animate-out");
  fabg.classList.add("animate-out");
  document.querySelector("#trbfab .trbfab__list").classList.add("animate-out");
  setTimeout(() => {
    body.classList.remove("fab-open");
    fab.classList.remove("animate-out");
    fabg.classList.remove("animate-out");
    document
      .querySelector("#trbfab .trbfab__list")
      .classList.remove("animate-out");
  }, 700);

  document.removeEventListener("keyup", fabCloseEsc);
  document
    .querySelector("#trbfab-backlight")
    .removeEventListener("click", fabClose);
  document
    .querySelector("#trb-fab-close")
    .removeEventListener("click", fabClose);
  document
    .querySelectorAll("#trbfab .trbfab__list .trbfab__item a")
    .forEach((item) => {
      item.removeEventListener("click", onFabItemClick);
    });
};
