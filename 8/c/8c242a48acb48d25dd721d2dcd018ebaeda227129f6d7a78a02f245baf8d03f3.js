var aria = aria || {};

/**
 * @desc
 *  Key code constants
 */
aria.KeyCode = {
  BACKSPACE: 8,
  TAB: 9,
  RETURN: 13,
  SHIFT: 16,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46,
};

function checkboxKeydown(evt) {
  var key = evt.which || evt.keyCode;

  switch (key) {
    case aria.KeyCode.RETURN:
      if (this.getAttribute("checked") === "checked") {
        this.removeAttribute("checked");
      } else {
        this.setAttribute("checked", "checked");
      }
      break;
  }
}

window.onload = function () {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (i = 0; i < checkboxes.length; i++) {
    var cb = checkboxes[i];
    cb.addEventListener("keydown", checkboxKeydown);
  }
};

function repositionSubmenus() {
  // adapt position of desktop nav submenus to prevent crossing the right boundary of the screen
  const allSubmenus = Array.from(document.querySelectorAll(".secondary-list--ul"));
  allSubmenus.forEach(function (submenu){
    submenu.style.visibility = 'hidden';
    submenu.style.display = 'block';
    const boundingBox = submenu.getBoundingClientRect();
    rightSpace = window.innerWidth - boundingBox.right;
    if (rightSpace < 0){
      computedRight = Number(window.getComputedStyle(submenu).right.slice(0,-2));
      submenu.style.right = (computedRight - rightSpace + 20) + 'px';
    }
    submenu.style.removeProperty('display');
    submenu.style.removeProperty('visibility');
  });
}

function resizeSubmenus(list) {
  const button = list.querySelector('.menu-expand-btn');
  const controlledList = document.getElementById(button.getAttribute('aria-controls'));
  
  const minHeight = controlledList.offsetHeight + button.parentElement.offsetTop + 32;
  const submenu = button.parentElement.parentElement;
  submenu.style.minHeight = minHeight + 'px';
}

function addListitemRole() {
  const swipers = document.querySelectorAll(".swiper-slide");
  swipers.forEach(;
}

window.addEventListener("resize", ;

document.addEventListener("DOMContentLoaded", () => {
  addListitemRole();
  repositionSubmenus();
  
  // Handle events of the header: Language and navigation menu

  // Mobile language switch
  var mobile_lang_toggle = document.getElementById('site-header--lang-toggle');
  var mobile_lang_icon = document.getElementById('site-header--lang-globe');
  var mobile_lang_list = document.getElementById('lang-switch-list-mobile');

  function openCloseLang(event, status){
    if (status == undefined) {
      status = event.target.ariaExpanded === 'true' ? 'false' : 'true';
    }
    event.target.ariaExpanded = status;
    if (status === 'true') {
      mobile_lang_list.classList.add('block');
      mobile_lang_list.classList.remove('hidden');
    } else {
      mobile_lang_list.classList.remove('block');
      mobile_lang_list.classList.add('hidden');
    }
  }

  mobile_lang_toggle.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    openCloseLang(e);
    //mobile_lang_icon.style.outline = "none";
  });
  
  mobile_lang_toggle.addEventListener("keydown", function (e) {
    e.stopImmediatePropagation();  
    if (e.key === "Enter") openCloseLang(e);
    if (e.key === "Escape") openCloseLang(e, 'false');
  });

  mobile_lang_toggle.addEventListener("mouseover", function () {
    mobile_lang_icon.style.outline = "solid 2px black";
  });
  mobile_lang_toggle.addEventListener("mouseout", function () {
    mobile_lang_icon.style.outline = "none";
  });
  mobile_lang_toggle.addEventListener("focus", function () {
    mobile_lang_icon.style.outline = "solid 2px black";
  });  
  mobile_lang_toggle.addEventListener("blur", function () {
    mobile_lang_icon.style.outline = "none";
  });
  
  // Mobile navigation menu

  // Menu button: Show or hide mobile navigation
  const mobile_menu_toggle = document.getElementById('site-header--nav-toggle');
  const mobile_menu_icon = document.getElementById('site-header--nav-icon');
  const mobile_menu_label = document.querySelector("label#hamb-menu-label");
  const mobile_menu_list = document.getElementById('site-header--nav-mobile');

  // param status is optional, if null it is toggled
  function openCloseMenu(event, status) {
    if (status == undefined) {
      status = event.target.ariaExpanded === 'true' ? 'false' : 'true';
    }
    event.target.ariaExpanded = status;
    if (status === 'true') {
      mobile_menu_list.classList.add('block');
      mobile_menu_list.classList.remove('hidden');
      mobile_menu_label.innerHTML = "Collapse main navigation";
    } else {
      mobile_menu_list.classList.remove('block');
      mobile_menu_list.classList.add('hidden');
      mobile_menu_label.innerHTML = "Expand main navigation";
    }
  }
  
  mobile_menu_toggle.addEventListener('click', ;

  mobile_menu_toggle.addEventListener("keydown", function (e) {
    e.stopImmediatePropagation();  
    if (e.key === "Enter") openCloseMenu(e);
    if (e.key === "Escape") openCloseMenu(e, 'false');
  });

  mobile_menu_toggle.addEventListener("mouseover", function () {
    mobile_menu_icon.style.outline = "solid 2px black";
  });
  mobile_menu_toggle.addEventListener("mouseout", function () {
    mobile_menu_icon.style.outline = "none";
  });
  mobile_menu_toggle.addEventListener("focus", ;
  mobile_menu_toggle.addEventListener("blur", function () {
    mobile_menu_icon.style.outline = "none";
  });


  // Chevron-buttons: Expand or collapse secondary and tertiary navigation

  const mobileMenuButtonsAll = Array.from(document.querySelectorAll(".menu-expand-btn-mobile"));
  const mobileMenuButtonsPrimary = Array.from(document.querySelectorAll(".primary-list-mobile--li > .menu-expand-btn-mobile"));

  let selectedButtonPrimaryMobile = null;
  let selectedButtonSecondaryMobile = null;

  function mobileMenuExpand(button, status) {
    const isPrimary = mobileMenuButtonsPrimary.indexOf(button) != -1;
    const controlledList = document.getElementById(button.getAttribute('aria-controls'));
    if (status == undefined) {
      status = button.ariaExpanded === 'true' ? 'false' : 'true';
    }    
    if (status === 'true') {
      controlledList.classList.add('block');
      controlledList.classList.remove('hidden');
      if (isPrimary){
        selectedButtonPrimaryMobile && selectedButtonPrimaryMobile !== button && mobileMenuExpand(selectedButtonPrimaryMobile, false);
        selectedButtonSecondaryMobile && mobileMenuExpand(selectedButtonSecondaryMobile, false);
        selectedButtonPrimaryMobile = button;
      } else {
        selectedButtonSecondaryMobile && selectedButtonSecondaryMobile !== button && mobileMenuExpand(selectedButtonSecondaryMobile, false);
        selectedButtonSecondaryMobile = button;
      }
    } else {
      controlledList.classList.remove('block');
      controlledList.classList.add('hidden');
    }
    button.ariaExpanded = status;
  }
  
  mobileMenuButtonsAll.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      mobileMenuExpand(e.target);
    });
    button.addEventListener("keydown", function (e) {
      e.stopImmediatePropagation();  
      if (e.key === "Escape") mobileMenuExpand(e.target, 'false');
    });
  });


  // Desktop language switch
  
  var lang_checkbox = document.getElementById('chk-lang-selector');
  var lang_div = document.getElementById('desktop-lang-selector');
  var lang_list_desktop = document.getElementById('lst-lang-selector');

  function openLangDesktop(e){
    if (e.type === 'mouseover'){
      lang_list_desktop.classList.remove('hidden');
      lang_checkbox.checked = true;
    } else if (e.type === 'mouseout'){
      lang_list_desktop.classList.add('hidden');
      lang_checkbox.checked = false;
    } else {
      lang_list_desktop.classList.toggle('hidden');
    }
  }

  lang_checkbox.addEventListener("keydown", function (e) {
     e.stopImmediatePropagation();
    if (e.key === "Enter") openLangDesktop(e);
  });

  lang_checkbox.addEventListener("click", openLangDesktop);

  lang_div.addEventListener("mouseover", openLangDesktop);

  lang_div.addEventListener("mouseout", openLangDesktop);

  
  
  // Desktop navigation menu

  const dektop_menu_buttons_all = Array.from(document.querySelectorAll(".menu-expand-btn"));
  const dektop_menu_buttons_primary = Array.from(document.querySelectorAll(".primary-list--li > .menu-expand-btn"));

  const AllListLi = Array.from(document.querySelectorAll(".primary-list--li,.secondary-list--li"));
  const secondaryListLi = Array.from(document.querySelectorAll(".secondary-list--li"));

  let selectedButtonPrimaryDesktop = null;
  let selectedButtonSecondaryDesktop = null;

  function showDesktopMenu (button, status) {
    const isPrimary = dektop_menu_buttons_primary.indexOf(button) != -1;
    const controlledList = document.getElementById(button.getAttribute('aria-controls'));
    if (status == undefined) {
      status = button.ariaExpanded === 'true' ? 'false' : 'true';
    }    
    if (status === 'true') {
      controlledList.classList.add('block');
      controlledList.classList.remove('hidden');
      if (isPrimary){
        selectedButtonPrimaryDesktop && selectedButtonPrimaryDesktop !== button && showDesktopMenu(selectedButtonPrimaryDesktop, false);
        selectedButtonSecondaryDesktop && showDesktopMenu(selectedButtonSecondaryDesktop, false);
        selectedButtonPrimaryDesktop = button;
        
      } else {
        selectedButtonSecondaryDesktop && selectedButtonSecondaryDesktop !== button && showDesktopMenu(selectedButtonSecondaryDesktop, false);
        selectedButtonSecondaryDesktop = button;
        // adapt height of submenu for expanding tertiary list
        resizeSubmenus(button.parentElement);
      }
    } else {
      controlledList.classList.remove('block');
      controlledList.classList.add('hidden');
      if (isPrimary){
      } else {
        const submenu = button.parentElement.parentElement;
        submenu.style.minHeight = '0';
      }
    }
    button.ariaExpanded = status;
  }

  dektop_menu_buttons_all.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      showDesktopMenu(e.target);
    });
    button.addEventListener("keydown", function (e) {
      e.stopImmediatePropagation();  
      if (e.key === "Escape") showDesktopMenu(e.target, 'false');
    });

    secondaryListLi.forEach(function (list){
      if (list.querySelector('.menu-expand-btn') !== null){
        list.addEventListener("mouseover", 
      }
    });
    AllListLi.forEach(function (list){
      list.addEventListener("mouseover", function(e){
        e.stopImmediatePropagation();
        if (selectedButtonPrimaryDesktop){
          showDesktopMenu(selectedButtonPrimaryDesktop, false);
          selectedButtonPrimaryDesktop.blur();
          selectedButtonPrimaryDesktop = null;
        }
        if (selectedButtonSecondaryDesktop){
          showDesktopMenu(selectedButtonSecondaryDesktop, false);
          selectedButtonSecondaryDesktop.blur();
          selectedButtonSecondaryDesktop = null;
        }
      })
    });
  });


  // Mobile footer
  const labels = document.querySelectorAll("div.label");

  labels.forEach((label) => {
    label.addEventListener("mouseover", function () {
      label.style.outline = "solid 2px black";
    });
    label.addEventListener("mouseout", function () {
      label.style.outline = "none";
    });
    label.addEventListener("focus", function () {
      label.style.outline = "solid 2px black";
    });
    label.addEventListener("blur", function () {
      label.style.outline = "none";
    });
  });  

  function expandFooterLinks (button, status) {
    const footerAccordionBtns = document.querySelectorAll(".footer-accordion-button");
    const controlledList = document.getElementById(button.getAttribute('aria-controls'));
    const checkbox = document.getElementById(button.getAttribute("data-label-for"));
    if (status == undefined) {
      status = button.ariaExpanded === 'true' ? 'false' : 'true';
    }    
    if (status === 'true') {
      controlledList.classList.add('block');
      controlledList.classList.remove('hidden');
      checkbox.setAttribute("checked", "checked");
      footerAccordionBtns.forEach(function(otherButton){
        if (otherButton !== button){
          expandFooterLinks(otherButton, 'false');
        }
      });
    } else {
      controlledList.classList.remove('block');
      controlledList.classList.add('hidden');
      checkbox.removeAttribute("checked");
    }
    button.ariaExpanded = status;
  }
  
  setTimeout(() => {
    const footerAccordionBtns = document.querySelectorAll(".footer-accordion-button");

    footerAccordionBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        expandFooterLinks(e.target.parentElement);
      });
      button.addEventListener("keydown", function (e) {
        e.stopImmediatePropagation();  
        if (e.key === "Enter") expandFooterLinks(e.target);
        if (e.key === "Escape") expandFooterLinks(e.target, 'false');
      });
    });
  }, 1500);


  // Different A11Y Issues

  // Carousel Live Region
  const liveRegion = document.querySelector(".carousel-lr");
  const targetNode = document.querySelectorAll(".swiper-pagination-bullet");

  
  setInterval(() => {
    if (!liveRegion) return;
    const currentSlide = liveRegion.innerHTML;
    targetNode &&
      targetNode.forEach((node, idx) => {
        const nextSlide = `Showing slide ${idx + 1} of ${targetNode.length}`;
        if (
          currentSlide !== nextSlide &&
          node.classList.contains("swiper-pagination-bullet-active")
        )
          workOnClassAdd(idx + 1, targetNode.length);
      });
  }, 100);

});

// Countdown 
timer = (target, date) => {
  var target = document.querySelector(target);
  var countDownDate = new Date(date).getTime();

  setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var addLeadingZeros = function(number){
      return (number < 10 && number > 0) ? '0'+number : number;
    }

    days = addLeadingZeros(days);
    hours = addLeadingZeros(hours);
    minutes = addLeadingZeros(minutes);

    target.innerHTML =
      '<span class="countdown--item"><span class="countdown--item-number">' + days + '</span>' +
      '<span class="countdown--item-text">' + "DAYS" + '</span></span>' + 
      '<span class="countdown--item"><span class="countdown--item-number">' + hours + '</span>' + 
      '<span class="countdown--item-text">' + "HOURS" + '</span></span>' + 
      '<span class="countdown--item"><span class="countdown--item-number">' + minutes + '</span>' + 
      '<span class="countdown--item-text">' + "minutes" + '</span></span>';
    
  }, 1000);
};

// Testimonial slider
if (typeof Swiper !== 'undefined'){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "1",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: "auto",
        spaceBetween: 50,
        slidesOffsetBefore: 50,
        slidesOffsetAfter: 50,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 60,
        slidesOffsetBefore: 200,
        slidesOffsetAfter: 200,
      }
    },
    slideRole: "listitem"
  });
}

/// -- FOR STAGING ONLY -- ///
/// -- Allows html includes for footer -- ///

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
    /* Make an HTTP request using the attribute value as the file name: */
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
      if (this.status == 200) {elmnt.innerHTML = this.responseText;}
      if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
      /* Remove the attribute, and call this function once more: */
      elmnt.removeAttribute("w3-include-html");
      includeHTML();
      }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
    /* Exit the function: */
    return;
    }
  }
}

/*
 * Check for marketo form success parameter in URL aliId and redirect to thank you page.
 */

function redirectToSuccess(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if(urlParams.has('aliId')){
    var formElement = document.getElementsByClassName("mktoForm")[0];
    var thankYouPage = formElement.getAttribute("data-thankyou");
    if(thankYouPage){
      window.location.href = thankYouPage;
    }
  }
}

document.addEventListener('DOMContentLoaded',  false);



