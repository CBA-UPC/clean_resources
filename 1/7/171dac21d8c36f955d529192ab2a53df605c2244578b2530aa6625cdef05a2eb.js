ORA.personalizationModule.prototype.personalizationCallback({
  "campaigns": {
    "7e82f0ea-7e52-4358-8f34-d7901c09a105": {
  "name": "News Letter SignUp",
  "blocks": {
    "c1": {
  "name": "Content 1",
  "masks": {
  "include" : [
    "https://www.khaleejtimes.com/?newsletter"
  ],
  "exclude" : [
  ]
},
  "css": "#p7e82f0ea-7e52-4358-8f34-d7901c09a105_c1.standard-lightbox-wrapper_pers {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 983564278\n}\n\n#p7e82f0ea-7e52-4358-8f34-d7901c09a105_c1 .standard-lightbox-overlay_pers {\n  background: {{it.variables.backgroundOverlayColor.value}};\n  opacity: {{it.variables.backgroundOverlayOpacity.value}};\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0\n}\n\n#p7e82f0ea-7e52-4358-8f34-d7901c09a105_c1 .standard-lightbox-container_pers {\n  box-sizing: border-box;\n  border: {{it.variables.lightboxContainerBorder.value}};\n  border-radius: {{it.variables.lightboxContainerBorderRadius.value}};\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-family: inherit;\n  -ms-flex-direction: column;\n  overflow: hidden;\n  width: {{it.variables.lightboxContainerMaxWidth.value}}\n}\n\n#p7e82f0ea-7e52-4358-8f34-d7901c09a105_c1 .standard-lightbox-content_pers {\n  background: {{it.variables.lightboxContainerBackgroundColor.value}};\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: inherit;\n  padding: 20px 20px 30px;\n  text-align: center\n}\n\n#p7e82f0ea-7e52-4358-8f34-d7901c09a105_c1 .standard-lightbox-content-title_pers {\n  align-self: normal;\n  color: {{it.variables.titleColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.titleFontWeight.value}};\n  font-size: {{it.variables.titleFontSize.value}};\n  line-height: {{it.variables.titleLineHeight.value}};\n  text-align: {{it.variables.titleAlign.value}}\n}\n\n#p7e82f0ea-7e52-4358-8f34-d7901c09a105_c1 .standard-lightbox-message_pers {\n  color: {{it.variables.messageColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.messageFontWeight.value}};\n  font-size: {{it.variables.messageFontSize.value}};\n  line-height: {{it.variables.messageLineHeight.value}}\n}\n\n#p7e82f0ea-7e52-4358-8f34-d7901c09a105_c1 .standard-lightbox-button_pers {\n  background: {{it.variables.buttonBackgroundColor.value}};\n  border-radius: {{it.variables.buttonBorderRadius.value}};\n  color: {{it.variables.buttonColor.value}};\n  cursor: pointer;\n  padding: {{it.variables.buttonPadding.value}};\n  margin-top: 15px;\n  font-family: inherit;\n  font-size: {{it.variables.buttonFontSize.value}};\n  font-weight: {{it.variables.buttonFontWeight.value}};\n  line-height: {{it.variables.buttonLineHeight.value}};\n  text-decoration: none\n}\n\n#p7e82f0ea-7e52-4358-8f34-d7901c09a105_c1 .standard-lightbox-bg-header_pers {\n  height: {{it.variables.lightboxContainerImageHeight.value}};\n  background-size: auto {{it.variables.lightboxContainerImageHeight.value}};\n  background-image: url(\"{{it.variables.lightboxContainerImage.value}}\")\n}\n\n#p7e82f0ea-7e52-4358-8f34-d7901c09a105_c1 .standard-lightbox-close-icon_pers {\n  cursor: pointer;\n  position: absolute;\n  display: {{it.variables.closeIconDisplay.value}};\n  top: {{it.variables.closeIconTopIndent.value}};\n  right: {{it.variables.closeIconRightIndent.value}};\n  padding: {{it.variables.closeIconPadding.value}}\n}",
  "html": "<div id=\"p7e82f0ea-7e52-4358-8f34-d7901c09a105_c1\" class=\"standard-lightbox-wrapper_pers\">\n  <div class=\"standard-lightbox-overlay_pers\"></div>\n  <div class=\"standard-lightbox-container_pers\">\n    <div class=\"standard-lightbox-bg-header_pers\"></div>\n    <div class=\"standard-lightbox-content_pers\">\n      <div class=\"standard-lightbox-content-title_pers\">\n        {{it.variables.titleText.value}}\n      </div>\n      <div class=\"standard-lightbox-message_pers\">\n        {{it.variables.messageText.value}}\n      </div>\n      <a class=\"standard-lightbox-button_pers\"\n         href=\"{{it.variables.buttonTarget.value}}\">{{it.variables.buttonText.value}}</a>\n      <div class=\"standard-lightbox-close-icon_pers\">\n        <svg fill=\"#05515B\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n          <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n</div>",
  "js": function (info, data) {
  let guid = 'p7e82f0ea-7e52-4358-8f34-d7901c09a105_c1';

let targetSelector = 'body';

let controls = {
  accept: '.standard-lightbox-button_pers',
  close: '.standard-lightbox-close-icon_pers',
  overlay: '.standard-lightbox-overlay_pers'
};

track('triggered');

start();

function start() {
  if (['complete','interactive'].includes(document.readyState)) {
    render();
  } else {
    document.addEventListener('DOMContentLoaded', render, { once : true });
  }
}

function track(event) {
  ORA.click({
    data: {
      'pers.acn': event,
      'pers.cmp': info.campaign.name,
      'pers.blk': info.block.name,
      'pers.prd': info.isProduction
    }
  });
}

function widget() {
  return document.querySelector('#' + guid);
}

function onclick(selector, handler) {
  widget().querySelectorAll(selector).forEach(function(node) {
    node.addEventListener('click', handler);
  });
}

function attachEvents() {
  onclick(controls.accept, function() {
    track('accepted');
  });

  onclick(controls.close, function() {
    widget().remove();
    track('dismissed');
  });

  onclick(controls.overlay, function() {
    widget().remove();
    track('dismissed');
  });

}

function render() {
  let placeholder = document.querySelector(targetSelector);
  if (placeholder) {
    const css = ORA.personalization.render(data.css, data.model);
    const html = ORA.personalization.render(data.html, data.model);
    placeholder.insertAdjacentHTML('beforeend', `<style type="text/css">${css}</style>${html}`);
    track('displayed');
    attachEvents();
  }
}

  },
  "variables": {
  "titleText": {
    "name": "Text",
    "value": "Sign Up For Breaking News Alerts",
    "group": "Title"
  },
  "titleColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Title"
  },
  "titleFontSize": {
    "name": "Font size",
    "value": "20px",
    "group": "Title"
  },
  "titleFontWeight": {
    "name": "Font weight",
    "value": "800",
    "group": "Title"
  },
  "titleLineHeight": {
    "name": "Line height",
    "value": "36px",
    "group": "Title"
  },
  "titleAlign": {
    "name": "Align",
    "value": "center",
    "group": "Title"
  },
  "messageText": {
    "name": "Text",
    "value": "Be in the know. Get the latest breaking news delivered straight to your inbox",
    "group": "Message"
  },
  "messageColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Message"
  },
  "messageFontSize": {
    "name": "Font size",
    "value": "18px",
    "group": "Message"
  },
  "messageFontWeight": {
    "name": "Font weight",
    "value": "",
    "group": "Message"
  },
  "messageLineHeight": {
    "name": "Line height",
    "value": "28px",
    "group": "Message"
  },
  "buttonTarget": {
    "name": "Target",
    "value": "https://navstage.khaleejtimes.com/",
    "group": "Button"
  },
  "buttonText": {
    "name": "Text",
    "value": "Newsletter SignUp",
    "group": "Button"
  },
  "buttonBackgroundColor": {
    "name": "Background color",
    "value": "rgba(5, 81, 91, 1)",
    "group": "Button"
  },
  "buttonBorderRadius": {
    "name": "Border radius",
    "value": "4px",
    "group": "Button"
  },
  "buttonColor": {
    "name": "Color",
    "value": "#CAF4C5",
    "group": "Button"
  },
  "buttonFontSize": {
    "name": "Font size",
    "value": "13.75px",
    "group": "Button"
  },
  "buttonFontWeight": {
    "name": "Font weight",
    "value": "600",
    "group": "Button"
  },
  "buttonLineHeight": {
    "name": "Line height",
    "value": "16px",
    "group": "Button"
  },
  "buttonPadding": {
    "name": "Padding",
    "value": "13px 16px 13px 16px",
    "group": "Button"
  },
  "backgroundOverlayColor": {
    "name": "Color",
    "value": "#000000",
    "group": "Background overlay"
  },
  "backgroundOverlayOpacity": {
    "name": "Opacity",
    "value": "0.8",
    "group": "Background overlay"
  },
  "lightboxContainerBackgroundColor": {
    "name": "Background color",
    "value": "#CAF4C5",
    "group": "Lightbox container"
  },
  "lightboxContainerBorder": {
    "name": "Border",
    "value": "3px solid #05515B",
    "group": "Lightbox container"
  },
  "lightboxContainerBorderRadius": {
    "name": "Border radius",
    "value": "10px",
    "group": "Lightbox container"
  },
  "lightboxContainerImageHeight": {
    "name": "Image height",
    "value": "200px",
    "group": "Lightbox container"
  },
  "lightboxContainerImage": {
    "name": "Image",
    "value": "data:image/jpeg;base64,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",
    "group": "Lightbox container"
  },
  "lightboxContainerMaxWidth": {
    "name": "Maximum width",
    "value": "360px",
    "group": "Lightbox container"
  },
  "closeIconDisplay": {
    "name": "Display",
    "value": "block",
    "group": "Close icon"
  },
  "closeIconPadding": {
    "name": "Padding",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconTopIndent": {
    "name": "Top indent",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconRightIndent": {
    "name": "Right indent",
    "value": "10px",
    "group": "Close icon"
  }
},
  "pages": []
}
  }
},
"553c5654-7c20-478c-aa7e-d63a28c29a37": {
  "name": "Last Article Visited",
  "blocks": {
    "C3": {
  "name": "Content 3",
  "masks": {
  "include" : [
    "*?article"
  ],
  "exclude" : [
  ]
},
  "css": "#p553c5654-7c20-478c-aa7e-d63a28c29a37_C3.standard-lightbox-wrapper_pers {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 983564278\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C3 .standard-lightbox-overlay_pers {\n  background: {{it.variables.backgroundOverlayColor.value}};\n  opacity: {{it.variables.backgroundOverlayOpacity.value}};\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C3 .standard-lightbox-container_pers {\n  box-sizing: border-box;\n  border: {{it.variables.lightboxContainerBorder.value}};\n  border-radius: {{it.variables.lightboxContainerBorderRadius.value}};\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-family: inherit;\n  -ms-flex-direction: column;\n  overflow: hidden;\n  width: {{it.variables.lightboxContainerMaxWidth.value}}\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C3 .standard-lightbox-content_pers {\n  background: {{it.variables.lightboxContainerBackgroundColor.value}};\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: inherit;\n  padding: 20px 20px 30px;\n  text-align: center\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C3 .standard-lightbox-content-title_pers {\n  align-self: normal;\n  color: {{it.variables.titleColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.titleFontWeight.value}};\n  font-size: {{it.variables.titleFontSize.value}};\n  line-height: {{it.variables.titleLineHeight.value}};\n  text-align: {{it.variables.titleAlign.value}}\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C3 .standard-lightbox-message_pers {\n  color: {{it.variables.messageColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.messageFontWeight.value}};\n  font-size: {{it.variables.messageFontSize.value}};\n  line-height: {{it.variables.messageLineHeight.value}}\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C3 .standard-lightbox-button_pers {\n  background: {{it.variables.buttonBackgroundColor.value}};\n  border-radius: {{it.variables.buttonBorderRadius.value}};\n  color: {{it.variables.buttonColor.value}};\n  cursor: pointer;\n  padding: {{it.variables.buttonPadding.value}};\n  margin-top: 15px;\n  font-family: inherit;\n  font-size: {{it.variables.buttonFontSize.value}};\n  font-weight: {{it.variables.buttonFontWeight.value}};\n  line-height: {{it.variables.buttonLineHeight.value}};\n  text-decoration: none\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C3 .standard-lightbox-bg-header_pers {\n  height: {{it.variables.lightboxContainerImageHeight.value}};\n  background-size: auto {{it.variables.lightboxContainerImageHeight.value}};\n  background-image: url(\"{{it.variables.lightboxContainerImage.value}}\")\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C3 .standard-lightbox-close-icon_pers {\n  cursor: pointer;\n  position: absolute;\n  display: {{it.variables.closeIconDisplay.value}};\n  top: {{it.variables.closeIconTopIndent.value}};\n  right: {{it.variables.closeIconRightIndent.value}};\n  padding: {{it.variables.closeIconPadding.value}}\n}",
  "html": "<div id=\"p553c5654-7c20-478c-aa7e-d63a28c29a37_C3\" class=\"standard-lightbox-wrapper_pers\">\n  <div class=\"standard-lightbox-overlay_pers\"></div>\n  <div class=\"standard-lightbox-container_pers\">\n    <div class=\"standard-lightbox-bg-header_pers\"></div>\n    <div class=\"standard-lightbox-content_pers\">\n      <div class=\"standard-lightbox-content-title_pers\">\n        {{it.variables.titleText.value}}\n      </div>\n      <div class=\"standard-lightbox-message_pers\">\n        {{it.variables.messageText.value}}\n      </div>\n      <a class=\"standard-lightbox-button_pers\"\n         href=\"{{it.variables.buttonTarget.value}}\">{{it.variables.buttonText.value}}</a>\n      <div class=\"standard-lightbox-close-icon_pers\">\n        <svg fill=\"#05515B\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n          <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n</div>",
  "js": function (info, data) {
  let guid = 'p553c5654-7c20-478c-aa7e-d63a28c29a37_C3';
let targetSelector = 'body';

let controls = {
  accept: '.standard-lightbox-button_pers',
  close: '.standard-lightbox-close-icon_pers',
  overlay: '.standard-lightbox-overlay_pers'
};

track('triggered');

if (document.querySelector('meta[property="og:type"]').content === 'article') {
  if (['complete', 'interactive'].includes(document.readyState)) {
    captureArticleMetaData();
  } else {
    document.addEventListener('DOMContentLoaded', captureArticleMetaData, { once: true });
  }
}

function captureArticleMetaData() {
  lastSeenArticle = {
    'url': location.href,
    'title': document.querySelector('h1').innerText,
    'description': document.querySelector('.preamble-nf').innerText,
    'thumbnail': document.querySelector('.article-lead-img-pan img').src
  };


  localStorage.setItem('pers-last-article', JSON.stringify(lastSeenArticle));
}

function track(event) {
  ORA.click({
    data: {
      'pers.acn': event,
      'pers.cmp': info.campaign.name,
      'pers.blk': info.block.name,
      'pers.prd': info.isProduction
    }
  });
}

function widget() {
  return document.querySelector('#' + guid);
}

function onclick(selector, handler) {
  widget().querySelectorAll(selector).forEach(function (node) {
    node.addEventListener('click', handler);
  });
}

function attachEvents() {
  onclick(controls.accept, function () {
    track('accepted');
  });

  onclick(controls.close, function () {
    widget().remove();
    track('dismissed');
  });

  onclick(controls.overlay, function () {
    widget().remove();
    track('dismissed');
  });
}

  },
  "variables": {
  "titleText": {
    "name": "Text",
    "value": "Add a compelling headline",
    "group": "Title"
  },
  "titleColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Title"
  },
  "titleFontSize": {
    "name": "Font size",
    "value": "28px",
    "group": "Title"
  },
  "titleFontWeight": {
    "name": "Font weight",
    "value": "800",
    "group": "Title"
  },
  "titleLineHeight": {
    "name": "Line height",
    "value": "36px",
    "group": "Title"
  },
  "titleAlign": {
    "name": "Align",
    "value": "center",
    "group": "Title"
  },
  "messageText": {
    "name": "Text",
    "value": "Edit your content using right panel",
    "group": "Message"
  },
  "messageColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Message"
  },
  "messageFontSize": {
    "name": "Font size",
    "value": "20px",
    "group": "Message"
  },
  "messageFontWeight": {
    "name": "Font weight",
    "value": "700",
    "group": "Message"
  },
  "messageLineHeight": {
    "name": "Line height",
    "value": "28px",
    "group": "Message"
  },
  "buttonTarget": {
    "name": "Target",
    "value": "#",
    "group": "Button"
  },
  "buttonText": {
    "name": "Text",
    "value": "Button",
    "group": "Button"
  },
  "buttonBackgroundColor": {
    "name": "Background color",
    "value": "rgba(5, 81, 91, 1)",
    "group": "Button"
  },
  "buttonBorderRadius": {
    "name": "Border radius",
    "value": "4px",
    "group": "Button"
  },
  "buttonColor": {
    "name": "Color",
    "value": "#CAF4C5",
    "group": "Button"
  },
  "buttonFontSize": {
    "name": "Font size",
    "value": "13.75px",
    "group": "Button"
  },
  "buttonFontWeight": {
    "name": "Font weight",
    "value": "600",
    "group": "Button"
  },
  "buttonLineHeight": {
    "name": "Line height",
    "value": "16px",
    "group": "Button"
  },
  "buttonPadding": {
    "name": "Padding",
    "value": "13px 16px 13px 16px",
    "group": "Button"
  },
  "backgroundOverlayColor": {
    "name": "Color",
    "value": "#000000",
    "group": "Background overlay"
  },
  "backgroundOverlayOpacity": {
    "name": "Opacity",
    "value": "0.8",
    "group": "Background overlay"
  },
  "lightboxContainerBackgroundColor": {
    "name": "Background color",
    "value": "#CAF4C5",
    "group": "Lightbox container"
  },
  "lightboxContainerBorder": {
    "name": "Border",
    "value": "3px solid #05515B",
    "group": "Lightbox container"
  },
  "lightboxContainerBorderRadius": {
    "name": "Border radius",
    "value": "10px",
    "group": "Lightbox container"
  },
  "lightboxContainerImageHeight": {
    "name": "Image height",
    "value": "208px",
    "group": "Lightbox container"
  },
  "lightboxContainerImage": {
    "name": "Image",
    "value": "https://oceintegration-oce0004.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTC8512ECF66934755A48C16E86711E3DB/native/Trees_compressed.jpg?channelToken=29497718d4964879a23b0c49895d8cfa",
    "group": "Lightbox container"
  },
  "lightboxContainerMaxWidth": {
    "name": "Maximum width",
    "value": "560px",
    "group": "Lightbox container"
  },
  "closeIconDisplay": {
    "name": "Display",
    "value": "block",
    "group": "Close icon"
  },
  "closeIconPadding": {
    "name": "Padding",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconTopIndent": {
    "name": "Top indent",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconRightIndent": {
    "name": "Right indent",
    "value": "10px",
    "group": "Close icon"
  }
},
  "pages": []
},
"C2": {
  "name": "Content 2",
  "masks": {
  "include" : [
    "*?article"
  ],
  "exclude" : [
  ]
},
  "css": "#p553c5654-7c20-478c-aa7e-d63a28c29a37_C2.stickybar-wrapper_pers {\n  position: fixed;\n  left: 0;\n  font-family: inherit;\n  box-sizing: border-box;\n  border: {{it.variables.stickybarContainerBorder.value}};\n  border-radius: {{it.variables.stickybarContainerBorderRadius.value}};\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  -ms-flex-direction: row;\n  width: {{it.variables.stickybarContainerMaximumWidth.value}};\n  background-color: {{it.variables.stickybarContainerBackgroundColor.value}};\n  height:  {{it.variables.stickybarContainerHeight.value}};\n  {{it.variables.stickybarContainerStickTo.value}}: 0;\n  z-index: 2147483646;\n  overflow: hidden;\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C2 .stickybar-container_pers {\n  display: flex;\n  overflow: hidden;\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C2 .stickybar-content_pers {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  font-family: inherit;\n  padding: 30px 20px;\n  text-align: center;\n  width: 100%;\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C2 .stickybar-content-title_pers {\n  align-self: normal;\n  color: {{it.variables.titleColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.titleFontWeight.value}};\n  font-size: {{it.variables.titleFontSize.value}};\n  line-height: {{it.variables.titleLineHeight.value}};\n  text-align: {{it.variables.titleAlign.value}};\n  margin: {{it.variables.titleMargin.value}};\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C2 .stickybar-message_pers {\n  color: {{it.variables.messageColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.messageFontWeight.value}};\n  font-size: {{it.variables.messageFontSize.value}};\n  line-height: {{it.variables.messageLineHeight.value}};\n  text-align: {{it.variables.messageAlign.value}};\n  margin: {{it.variables.messageMargin.value}};\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C2 .stickybar-buttons_pers {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C2 .stickybar-button_pers {\n  background-color: {{it.variables.buttonBackgroundColor.value}};\n  border-radius: {{it.variables.buttonBorderRadius.value}};\n  color: {{it.variables.buttonColor.value}};\n  font-size: {{it.variables.buttonFontSize.value}};\n  font-weight: {{it.variables.buttonFontWeight.value}};\n  line-height: {{it.variables.buttonLineHeight.value}};\n  padding: {{it.variables.buttonPadding.value}};\n  margin-bottom: {{it.variables.buttonBottomIndent.value}};\n  margin-right: {{it.variables.buttonRightIndent.value}};\n  text-decoration: none\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C2 .stickybar-image_pers {\n  width: {{it.variables.stickybarContainerImageWidth.value}};\n  background: url(\"{{it.variables.stickybarContainerImage.value}}\");\n  background-size: cover;\n  background-position: 50% 0%;\n  flex-shrink: 0;\n}\n\n#p553c5654-7c20-478c-aa7e-d63a28c29a37_C2 .stickybar-close-icon_pers {\n  cursor: pointer;\n  justify-content: end;\n  display: {{it.variables.closeIconDisplay.value}};\n  margin-top: {{it.variables.closeIconTopIndent.value}};\n  margin-right: {{it.variables.closeIconRightIndent.value}};\n  padding: {{it.variables.closeIconPadding.value}}\n}\n\n\n",
  "html": "<div id=\"p553c5654-7c20-478c-aa7e-d63a28c29a37_C2\" class=\"stickybar-wrapper_pers\">\n    <div class=\"stickybar-container_pers\">\n        <div class=\"stickybar-image_pers\"></div>\n    </div>\n    <div class=\"stickybar-content_pers\">\n        <div class=\"stickybar-content-title_pers\">\n            {{it.variables.titleText.value}}\n        </div>\n        <div class=\"stickybar-message_pers\">\n            {{it.variables.messageText.value}}\n        </div>\n    </div>\n    <div class=\"stickybar-buttons_pers\">\n\n        <div class=\"stickybar-close-icon_pers\">\n            <svg fill=\"#05515B\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n                <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\n                <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            </svg>\n        </div>\n\n        <a class=\"stickybar-button_pers\"\n           href=\"{{it.variables.buttonTarget.value}}\">{{it.variables.buttonText.value}}</a>\n    </div>\n</div>",
  "js": function (info, data) {
  let lastSeenArticle = localStorage.getItem('pers-last-article');
if (lastSeenArticle && document.querySelector('meta[property="og:type"]').content !== 'article'){
let guid = 'p553c5654-7c20-478c-aa7e-d63a28c29a37_C2';

let targetSelector = 'body';

let controls = {
  accept: '.stickybar-button_pers',
  close: '.stickybar-close-icon_pers'
};

track('triggered');

start();

function start() {
  if (['complete','interactive'].includes(document.readyState)) {
    render();
  } else {
    document.addEventListener('DOMContentLoaded', render, { once : true });
  }
}

function track(event) {
  ORA.click({
    data: {
      'pers.acn': event,
      'pers.cmp': info.campaign.name,
      'pers.blk': info.block.name,
      'pers.prd': info.isProduction
    }
  });
}

function widget() {
  return document.querySelector('#' + guid);
}

function onclick(selector, handler) {
  widget().querySelectorAll(selector).forEach(function(node) {
    node.addEventListener('click', handler);
  });
}

function attachEvents() {
  onclick(controls.accept, function() {
    track('accepted');
  });

  onclick(controls.close, function() {
    widget().remove();
    track('dismissed');
  });

}

function render() {
  let placeholder = document.querySelector(targetSelector);
  if (placeholder) {
     let template = data.model.variables;
      let articleData = JSON.parse(lastSeenArticle);
 
      template.titleText.value = articleData.title;
      template.messageText.value = articleData.description;
      template.stickybarContainerImage.value = articleData.thumbnail;
      template.buttonTarget.value = articleData.url;
    const css = ORA.personalization.render(data.css, data.model);
    const html = ORA.personalization.render(data.html, data.model);
    placeholder.insertAdjacentHTML('beforeend', `<style type="text/css">${css}</style>${html}`);
    track('displayed');
    attachEvents();
  }
}
        }
  },
  "variables": {
  "stickybarContainerStickTo": {
    "name": "Stick to",
    "value": "bottom",
    "group": "Sticky bar container"
  },
  "stickybarContainerBackgroundColor": {
    "name": "Background color",
    "value": "#D86454",
    "group": "Sticky bar container"
  },
  "stickybarContainerBorder": {
    "name": "Border",
    "value": "2px solid #480A1B",
    "group": "Sticky bar container"
  },
  "stickybarContainerBorderRadius": {
    "name": "Border radius",
    "value": "0px",
    "group": "Sticky bar container"
  },
  "stickybarContainerHeight": {
    "name": "Height",
    "value": "191px",
    "group": "Sticky bar container"
  },
  "stickybarContainerImage": {
    "name": "Image",
    "value": "https://oceintegration-oce0004.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONT94B6413B4C2C4098AE2A7FBBF8CD9F24/native/3becc353c798dd9f236779d950835e21.png?channelToken=29497718d4964879a23b0c49895d8cfa",
    "group": "Sticky bar container"
  },
  "stickybarContainerImageWidth": {
    "name": "Image width",
    "value": "445px",
    "group": "Sticky bar container"
  },
  "stickybarContainerMaximumWidth": {
    "name": "Maximum width",
    "value": "100%",
    "group": "Sticky bar container"
  },
  "titleText": {
    "name": "Text",
    "value": "Add a compelling headline",
    "group": "Title"
  },
  "titleColor": {
    "name": "Color",
    "value": "#480A1B",
    "group": "Title"
  },
  "titleFontSize": {
    "name": "Font size",
    "value": "28px",
    "group": "Title"
  },
  "titleFontWeight": {
    "name": "Font weight",
    "value": "800",
    "group": "Title"
  },
  "titleLineHeight": {
    "name": "Line height",
    "value": "36px",
    "group": "Title"
  },
  "titleAlign": {
    "name": "Align",
    "value": "left",
    "group": "Title"
  },
  "titleMargin": {
    "name": "Margin",
    "value": "0 0 10px 20px",
    "group": "Title"
  },
  "messageText": {
    "name": "Text",
    "value": "Edit your content using right panel",
    "group": "Message"
  },
  "messageColor": {
    "name": "Color",
    "value": "#480A1B",
    "group": "Message"
  },
  "messageFontSize": {
    "name": "Font size",
    "value": "20px",
    "group": "Message"
  },
  "messageFontWeight": {
    "name": "Font weight",
    "value": "700",
    "group": "Message"
  },
  "messageLineHeight": {
    "name": "Line height",
    "value": "28px",
    "group": "Message"
  },
  "messageMargin": {
    "name": "Margin",
    "value": "0 0 0 20px",
    "group": "Message"
  },
  "messageAlign": {
    "name": "Align",
    "value": "left",
    "group": "Message"
  },
  "buttonTarget": {
    "name": "Target",
    "value": "#",
    "group": "Button"
  },
  "buttonText": {
    "name": "Text",
    "value": "Read more",
    "group": "Button"
  },
  "buttonBackgroundColor": {
    "name": "Background color",
    "value": "#480A1B",
    "group": "Button"
  },
  "buttonBorderRadius": {
    "name": "Border radius",
    "value": "4px",
    "group": "Button"
  },
  "buttonColor": {
    "name": "Color",
    "value": "white",
    "group": "Button"
  },
  "buttonFontSize": {
    "name": "Font size",
    "value": "13.75px",
    "group": "Button"
  },
  "buttonFontWeight": {
    "name": "Font weight",
    "value": "600",
    "group": "Button"
  },
  "buttonLineHeight": {
    "name": "Line height",
    "value": "16px",
    "group": "Button"
  },
  "buttonPadding": {
    "name": "Padding",
    "value": "10px 16px 10px 16px",
    "group": "Button"
  },
  "buttonBottomIndent": {
    "name": "Bottom Indent",
    "value": "40px",
    "group": "Button"
  },
  "buttonRightIndent": {
    "name": "Bottom Indent",
    "value": "40px",
    "group": "Button"
  },
  "closeIconDisplay": {
    "name": "Display",
    "value": "flex",
    "group": "Close icon"
  },
  "closeIconPadding": {
    "name": "Padding",
    "value": "14px",
    "group": "Close icon"
  },
  "closeIconTopIndent": {
    "name": "Top indent",
    "value": "7px",
    "group": "Close icon"
  },
  "closeIconRightIndent": {
    "name": "Right indent",
    "value": "40px",
    "group": "Close icon"
  }
},
  "pages": []
}
  }
},
"b2bf97a3-5278-4818-959b-f84d5e8e1cbd": {
  "name": "Sports Page Top Article",
  "blocks": {
    "c1": {
  "name": "Content 1",
  "masks": {
  "include" : [
    "https://www.khaleejtimes.com/sports?sport"
  ],
  "exclude" : [
  ]
},
  "css": "#pb2bf97a3-5278-4818-959b-f84d5e8e1cbd_c1.stickybar-wrapper_pers {\n  position: fixed;\n  left: 0;\n  font-family: inherit;\n  box-sizing: border-box;\n  border: {{it.variables.stickybarContainerBorder.value}};\n  border-radius: {{it.variables.stickybarContainerBorderRadius.value}};\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  -ms-flex-direction: row;\n  width: {{it.variables.stickybarContainerMaximumWidth.value}};\n  background-color: {{it.variables.stickybarContainerBackgroundColor.value}};\n  height:  {{it.variables.stickybarContainerHeight.value}};\n  {{it.variables.stickybarContainerStickTo.value}}: 0;\n  z-index: 2147483646;\n  overflow: hidden;\n}\n\n#pb2bf97a3-5278-4818-959b-f84d5e8e1cbd_c1 .stickybar-container_pers {\n  display: flex;\n  overflow: hidden;\n}\n\n#pb2bf97a3-5278-4818-959b-f84d5e8e1cbd_c1 .stickybar-content_pers {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  font-family: inherit;\n  padding: 30px 20px;\n  text-align: center;\n  width: 100%;\n}\n\n#pb2bf97a3-5278-4818-959b-f84d5e8e1cbd_c1 .stickybar-content-title_pers {\n  align-self: normal;\n  color: {{it.variables.titleColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.titleFontWeight.value}};\n  font-size: {{it.variables.titleFontSize.value}};\n  line-height: {{it.variables.titleLineHeight.value}};\n  text-align: {{it.variables.titleAlign.value}};\n  margin: {{it.variables.titleMargin.value}};\n}\n\n#pb2bf97a3-5278-4818-959b-f84d5e8e1cbd_c1 .stickybar-message_pers {\n  color: {{it.variables.messageColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.messageFontWeight.value}};\n  font-size: {{it.variables.messageFontSize.value}};\n  line-height: {{it.variables.messageLineHeight.value}};\n  text-align: {{it.variables.messageAlign.value}};\n  margin: {{it.variables.messageMargin.value}};\n}\n\n#pb2bf97a3-5278-4818-959b-f84d5e8e1cbd_c1 .stickybar-buttons_pers {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n\n#pb2bf97a3-5278-4818-959b-f84d5e8e1cbd_c1 .stickybar-button_pers {\n  background-color: {{it.variables.buttonBackgroundColor.value}};\n  border-radius: {{it.variables.buttonBorderRadius.value}};\n  color: {{it.variables.buttonColor.value}};\n  font-size: {{it.variables.buttonFontSize.value}};\n  font-weight: {{it.variables.buttonFontWeight.value}};\n  line-height: {{it.variables.buttonLineHeight.value}};\n  padding: {{it.variables.buttonPadding.value}};\n  margin-bottom: {{it.variables.buttonBottomIndent.value}};\n  margin-right: {{it.variables.buttonRightIndent.value}};\n  text-decoration: none\n}\n\n#pb2bf97a3-5278-4818-959b-f84d5e8e1cbd_c1 .stickybar-image_pers {\n  width: {{it.variables.stickybarContainerImageWidth.value}};\n  background: url(\"{{it.variables.stickybarContainerImage.value}}\");\n  background-size: cover;\n  background-position: 50% 0%;\n  flex-shrink: 0;\n}\n\n#pb2bf97a3-5278-4818-959b-f84d5e8e1cbd_c1 .stickybar-close-icon_pers {\n  cursor: pointer;\n  justify-content: end;\n  display: {{it.variables.closeIconDisplay.value}};\n  margin-top: {{it.variables.closeIconTopIndent.value}};\n  margin-right: {{it.variables.closeIconRightIndent.value}};\n  padding: {{it.variables.closeIconPadding.value}}\n}\n\n\n",
  "html": "<div id=\"pb2bf97a3-5278-4818-959b-f84d5e8e1cbd_c1\" class=\"stickybar-wrapper_pers\">\n    <div class=\"stickybar-container_pers\">\n        <div class=\"stickybar-image_pers\"></div>\n    </div>\n    <div class=\"stickybar-content_pers\">\n        <div class=\"stickybar-content-title_pers\">\n            {{it.variables.titleText.value}}\n        </div>\n        <div class=\"stickybar-message_pers\">\n            {{it.variables.messageText.value}}\n        </div>\n    </div>\n    <div class=\"stickybar-buttons_pers\">\n\n        <div class=\"stickybar-close-icon_pers\">\n            <svg fill=\"#05515B\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n                <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\n                <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            </svg>\n        </div>\n\n        <a class=\"stickybar-button_pers\"\n           href=\"{{it.variables.buttonTarget.value}}\">{{it.variables.buttonText.value}}</a>\n    </div>\n</div>",
  "js": function (info, data) {
  let guid = 'pb2bf97a3-5278-4818-959b-f84d5e8e1cbd_c1';

let targetSelector = 'body';

let controls = {
  accept: '.stickybar-button_pers',
  close: '.stickybar-close-icon_pers'
};

track('triggered');

start();

function start() {
  if (['complete','interactive'].includes(document.readyState)) {
    render();
  } else {
    document.addEventListener('DOMContentLoaded', render, { once : true });
  }
}

function track(event) {
  ORA.click({
    data: {
      'pers.acn': event,
      'pers.cmp': info.campaign.name,
      'pers.blk': info.block.name,
      'pers.prd': info.isProduction
    }
  });
}

function widget() {
  return document.querySelector('#' + guid);
}

function onclick(selector, handler) {
  widget().querySelectorAll(selector).forEach(function(node) {
    node.addEventListener('click', handler);
  });
}

function attachEvents() {
  onclick(controls.accept, function() {
    track('accepted');
  });

  onclick(controls.close, function() {
    widget().remove();
    track('dismissed');
  });

}

function render() {
  let placeholder = document.querySelector(targetSelector);
  if (placeholder) {
    const css = ORA.personalization.render(data.css, data.model);
    const html = ORA.personalization.render(data.html, data.model);
    placeholder.insertAdjacentHTML('beforeend', `<style type="text/css">${css}</style>${html}`);
    track('displayed');
    attachEvents();
  }
}

  },
  "variables": {
  "stickybarContainerStickTo": {
    "name": "Stick to",
    "value": "bottom",
    "group": "Sticky bar container"
  },
  "stickybarContainerBackgroundColor": {
    "name": "Background color",
    "value": "lightblue",
    "group": "Sticky bar container"
  },
  "stickybarContainerBorder": {
    "name": "Border",
    "value": "2px solid #480A1B",
    "group": "Sticky bar container"
  },
  "stickybarContainerBorderRadius": {
    "name": "Border radius",
    "value": "0px",
    "group": "Sticky bar container"
  },
  "stickybarContainerHeight": {
    "name": "Height",
    "value": "191px",
    "group": "Sticky bar container"
  },
  "stickybarContainerImage": {
    "name": "Image",
    "value": "https://image.khaleejtimes.com/?uuid=723e7e69-d851-5316-953e-646bb8f76964&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.89286&width=500&height=281&x=1.0E-5&y=0.02976",
    "group": "Sticky bar container"
  },
  "stickybarContainerImageWidth": {
    "name": "Image width",
    "value": "445px",
    "group": "Sticky bar container"
  },
  "stickybarContainerMaximumWidth": {
    "name": "Maximum width",
    "value": "100%",
    "group": "Sticky bar container"
  },
  "titleText": {
    "name": "Text",
    "value": "India-overcome-afghanistan-in-super-over-drama-to-sweep-t20-series",
    "group": "Title"
  },
  "titleColor": {
    "name": "Color",
    "value": "#480A1B",
    "group": "Title"
  },
  "titleFontSize": {
    "name": "Font size",
    "value": "28px",
    "group": "Title"
  },
  "titleFontWeight": {
    "name": "Font weight",
    "value": "800",
    "group": "Title"
  },
  "titleLineHeight": {
    "name": "Line height",
    "value": "36px",
    "group": "Title"
  },
  "titleAlign": {
    "name": "Align",
    "value": "left",
    "group": "Title"
  },
  "titleMargin": {
    "name": "Margin",
    "value": "0 0 10px 20px",
    "group": "Title"
  },
  "messageText": {
    "name": "Text",
    "value": "",
    "group": "Message"
  },
  "messageColor": {
    "name": "Color",
    "value": "#480A1B",
    "group": "Message"
  },
  "messageFontSize": {
    "name": "Font size",
    "value": "20px",
    "group": "Message"
  },
  "messageFontWeight": {
    "name": "Font weight",
    "value": "700",
    "group": "Message"
  },
  "messageLineHeight": {
    "name": "Line height",
    "value": "28px",
    "group": "Message"
  },
  "messageMargin": {
    "name": "Margin",
    "value": "0 0 0 20px",
    "group": "Message"
  },
  "messageAlign": {
    "name": "Align",
    "value": "left",
    "group": "Message"
  },
  "buttonTarget": {
    "name": "Target",
    "value": "https://www.khaleejtimes.com/sports/cricket/india-overcome-afghanistan-in-super-over-drama-to-sweep-t20-series",
    "group": "Button"
  },
  "buttonText": {
    "name": "Text",
    "value": "Read More",
    "group": "Button"
  },
  "buttonBackgroundColor": {
    "name": "Background color",
    "value": "blue",
    "group": "Button"
  },
  "buttonBorderRadius": {
    "name": "Border radius",
    "value": "4px",
    "group": "Button"
  },
  "buttonColor": {
    "name": "Color",
    "value": "white",
    "group": "Button"
  },
  "buttonFontSize": {
    "name": "Font size",
    "value": "13.75px",
    "group": "Button"
  },
  "buttonFontWeight": {
    "name": "Font weight",
    "value": "600",
    "group": "Button"
  },
  "buttonLineHeight": {
    "name": "Line height",
    "value": "16px",
    "group": "Button"
  },
  "buttonPadding": {
    "name": "Padding",
    "value": "10px 16px 10px 16px",
    "group": "Button"
  },
  "buttonBottomIndent": {
    "name": "Bottom Indent",
    "value": "40px",
    "group": "Button"
  },
  "buttonRightIndent": {
    "name": "Bottom Indent",
    "value": "40px",
    "group": "Button"
  },
  "closeIconDisplay": {
    "name": "Display",
    "value": "flex",
    "group": "Close icon"
  },
  "closeIconPadding": {
    "name": "Padding",
    "value": "14px",
    "group": "Close icon"
  },
  "closeIconTopIndent": {
    "name": "Top indent",
    "value": "7px",
    "group": "Close icon"
  },
  "closeIconRightIndent": {
    "name": "Right indent",
    "value": "40px",
    "group": "Close icon"
  }
},
  "pages": []
}
  }
},
"b2a07a3d-79eb-434f-b6d6-130d52c670f0": {
  "name": "test case",
  "blocks": {
    "C1": {
  "name": "Content 1",
  "masks": {
  "include" : [
    "*?test"
  ],
  "exclude" : [
  ]
},
  "css": "",
  "html": "",
  "js": function (info, data) {
  // Three steps to successful implementation

const track = (event) => {
  ORA.click({
    data: {
      'pers.acn': event,
      'pers.cmp': info.campaign.name,
      'pers.blk': info.block.name,
      'pers.prd': info.isProduction
    }
  });
}

// 1. Track parameters from a webpage for reporting purposes.
// As soon as this code runs, a parameter is captured into the
// UBI Analytics. Consider tracking other parameters whenever
// an event you want to report on takes place.
track('triggered');

const when = (condition) => {
  let resolve;
  let promise = new Promise(;
  let test = condition;

  if (typeof condition === 'string') {
    test = 
  }

  const wait = () => {
    test() && resolve(test()) || setTimeout(wait, 50);
  }

  wait();

  return promise;
}

// 2. Specify the content selector you want to modify.
// The code below postpones the HTML and CSS rendering until
// the specified selector is found on the webpage. It's needed
// as the webpage renders in chunks, and the needed area where
// you want the personalized content to appear is not always
// available at the beginning.
let targetSelector = 'put-your-selector-here';
when(targetSelector).then(() => {
  // 3. Render the personalized content on a webpage.
  // You can either insert the content by appending it, or
  // replace HTML or another node. There are pre-populated
  // properties you could use in the code as described at
  // docs.oracle.com/en/cloud/saas/marketing/infinity-user/Help/personalization/web_personalization_campaign/content_code_editor.htm
  document.querySelector(targetSelector).innerHTML = `<style type="text/css">${data.css}</style>${data.html}`;
  track('displayed');
});

function captureArticleMetaData() {

    lastSeenArticle = {

        'url': location.href,

        'title': document.querySelector('h1').innerText,

        'description': document.querySelector('.preamble-nf').innerText,

        'thumbnail': document.querySelector('.article-lead-img-pan img').src

    }

 

    localStorage.setItem('pers-last-article', JSON.stringify(lastSeenArticle));

}

 

if (document.querySelector('meta[property="og:type"]').content === 'article') {

    if (['complete','interactive'].includes(document.readyState)) {

        captureArticleMetaData();

    } else {

        document.addEventListener('DOMContentLoaded', captureArticleMetaData, { once : true });

    }

}
  },
  "variables": {},
  "pages": []
},
"C2": {
  "name": "Content 2",
  "masks": {
  "include" : [
    "*?test"
  ],
  "exclude" : [
  ]
},
  "css": "#pb2a07a3d-79eb-434f-b6d6-130d52c670f0_C2.standard-lightbox-wrapper_pers {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 983564278\n}\n\n#pb2a07a3d-79eb-434f-b6d6-130d52c670f0_C2 .standard-lightbox-overlay_pers {\n  background: {{it.variables.backgroundOverlayColor.value}};\n  opacity: {{it.variables.backgroundOverlayOpacity.value}};\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0\n}\n\n#pb2a07a3d-79eb-434f-b6d6-130d52c670f0_C2 .standard-lightbox-container_pers {\n  box-sizing: border-box;\n  border: {{it.variables.lightboxContainerBorder.value}};\n  border-radius: {{it.variables.lightboxContainerBorderRadius.value}};\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-family: inherit;\n  -ms-flex-direction: column;\n  overflow: hidden;\n  width: {{it.variables.lightboxContainerMaxWidth.value}}\n}\n\n#pb2a07a3d-79eb-434f-b6d6-130d52c670f0_C2 .standard-lightbox-content_pers {\n  background: {{it.variables.lightboxContainerBackgroundColor.value}};\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: inherit;\n  padding: 20px 20px 30px;\n  text-align: center\n}\n\n#pb2a07a3d-79eb-434f-b6d6-130d52c670f0_C2 .standard-lightbox-content-title_pers {\n  align-self: normal;\n  color: {{it.variables.titleColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.titleFontWeight.value}};\n  font-size: {{it.variables.titleFontSize.value}};\n  line-height: {{it.variables.titleLineHeight.value}};\n  text-align: {{it.variables.titleAlign.value}}\n}\n\n#pb2a07a3d-79eb-434f-b6d6-130d52c670f0_C2 .standard-lightbox-message_pers {\n  color: {{it.variables.messageColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.messageFontWeight.value}};\n  font-size: {{it.variables.messageFontSize.value}};\n  line-height: {{it.variables.messageLineHeight.value}}\n}\n\n#pb2a07a3d-79eb-434f-b6d6-130d52c670f0_C2 .standard-lightbox-button_pers {\n  background: {{it.variables.buttonBackgroundColor.value}};\n  border-radius: {{it.variables.buttonBorderRadius.value}};\n  color: {{it.variables.buttonColor.value}};\n  cursor: pointer;\n  padding: {{it.variables.buttonPadding.value}};\n  margin-top: 15px;\n  font-family: inherit;\n  font-size: {{it.variables.buttonFontSize.value}};\n  font-weight: {{it.variables.buttonFontWeight.value}};\n  line-height: {{it.variables.buttonLineHeight.value}};\n  text-decoration: none\n}\n\n#pb2a07a3d-79eb-434f-b6d6-130d52c670f0_C2 .standard-lightbox-bg-header_pers {\n  height: {{it.variables.lightboxContainerImageHeight.value}};\n  background-size: auto {{it.variables.lightboxContainerImageHeight.value}};\n  background-image: url(\"{{it.variables.lightboxContainerImage.value}}\")\n}\n\n#pb2a07a3d-79eb-434f-b6d6-130d52c670f0_C2 .standard-lightbox-close-icon_pers {\n  cursor: pointer;\n  position: absolute;\n  display: {{it.variables.closeIconDisplay.value}};\n  top: {{it.variables.closeIconTopIndent.value}};\n  right: {{it.variables.closeIconRightIndent.value}};\n  padding: {{it.variables.closeIconPadding.value}}\n}",
  "html": "<div id=\"pb2a07a3d-79eb-434f-b6d6-130d52c670f0_C2\" class=\"standard-lightbox-wrapper_pers\">\n  <div class=\"standard-lightbox-overlay_pers\"></div>\n  <div class=\"standard-lightbox-container_pers\">\n    <div class=\"standard-lightbox-bg-header_pers\"></div>\n    <div class=\"standard-lightbox-content_pers\">\n      <div class=\"standard-lightbox-content-title_pers\">\n        {{it.variables.titleText.value}}\n      </div>\n      <div class=\"standard-lightbox-message_pers\">\n        {{it.variables.messageText.value}}\n      </div>\n      <a class=\"standard-lightbox-button_pers\"\n         href=\"{{it.variables.buttonTarget.value}}\">{{it.variables.buttonText.value}}</a>\n      <div class=\"standard-lightbox-close-icon_pers\">\n        <svg fill=\"#05515B\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n          <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n</div>",
  "js": function (info, data) {
  


let lastSeenArticle = localStorage.getItem('pers-last-article');
if (lastSeenArticle && document.querySelector('meta[property="og:type"]').content !== 'article'){
let guid = 'p553c5654-7c20-478c-aa7e-d63a28c29a37_C2';

let targetSelector = 'body';

let controls = {
  accept: '.stickybar-button_pers',
  close: '.stickybar-close-icon_pers'
};

track('triggered');

start();

function start() {
  if (['complete','interactive'].includes(document.readyState)) {
    render();
  } else {
    document.addEventListener('DOMContentLoaded', render, { once : true });
  }
}

function track(event) {
  ORA.click({
    data: {
      'pers.acn': event,
      'pers.cmp': info.campaign.name,
      'pers.blk': info.block.name,
      'pers.prd': info.isProduction
    }
  });
}

function widget() {
  return document.querySelector('#' + guid);
}

function onclick(selector, handler) {
  widget().querySelectorAll(selector).forEach(function(node) {
    node.addEventListener('click', handler);
  });
}

function attachEvents() {
  onclick(controls.accept, function() {
    track('accepted');
  });

  onclick(controls.close, function() {
    widget().remove();
    track('dismissed');
  });

}

function render() {
  let placeholder = document.querySelector(targetSelector);
  if (placeholder) {
     let template = data.model.variables;
      let articleData = JSON.parse(lastSeenArticle);
 
     
      template.buttonTarget.value = articleData.baseUrl;
    const css = ORA.personalization.render(data.css, data.model);
    const html = ORA.personalization.render(data.html, data.model);
    placeholder.insertAdjacentHTML('beforeend', `<style type="text/css">${css}</style>${html}`);
    track('displayed');
    attachEvents();
  }
}
        }
  },
  "variables": {
  "titleText": {
    "name": "Text",
    "value": "Add a compelling headline",
    "group": "Title"
  },
  "titleColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Title"
  },
  "titleFontSize": {
    "name": "Font size",
    "value": "28px",
    "group": "Title"
  },
  "titleFontWeight": {
    "name": "Font weight",
    "value": "800",
    "group": "Title"
  },
  "titleLineHeight": {
    "name": "Line height",
    "value": "36px",
    "group": "Title"
  },
  "titleAlign": {
    "name": "Align",
    "value": "center",
    "group": "Title"
  },
  "messageText": {
    "name": "Text",
    "value": "Edit your content using right panel",
    "group": "Message"
  },
  "messageColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Message"
  },
  "messageFontSize": {
    "name": "Font size",
    "value": "20px",
    "group": "Message"
  },
  "messageFontWeight": {
    "name": "Font weight",
    "value": "700",
    "group": "Message"
  },
  "messageLineHeight": {
    "name": "Line height",
    "value": "28px",
    "group": "Message"
  },
  "buttonTarget": {
    "name": "Target",
    "value": "#",
    "group": "Button"
  },
  "buttonText": {
    "name": "Text",
    "value": "Button",
    "group": "Button"
  },
  "buttonBackgroundColor": {
    "name": "Background color",
    "value": "rgba(5, 81, 91, 1)",
    "group": "Button"
  },
  "buttonBorderRadius": {
    "name": "Border radius",
    "value": "4px",
    "group": "Button"
  },
  "buttonColor": {
    "name": "Color",
    "value": "#CAF4C5",
    "group": "Button"
  },
  "buttonFontSize": {
    "name": "Font size",
    "value": "13.75px",
    "group": "Button"
  },
  "buttonFontWeight": {
    "name": "Font weight",
    "value": "600",
    "group": "Button"
  },
  "buttonLineHeight": {
    "name": "Line height",
    "value": "16px",
    "group": "Button"
  },
  "buttonPadding": {
    "name": "Padding",
    "value": "13px 16px 13px 16px",
    "group": "Button"
  },
  "backgroundOverlayColor": {
    "name": "Color",
    "value": "#000000",
    "group": "Background overlay"
  },
  "backgroundOverlayOpacity": {
    "name": "Opacity",
    "value": "0.8",
    "group": "Background overlay"
  },
  "lightboxContainerBackgroundColor": {
    "name": "Background color",
    "value": "#CAF4C5",
    "group": "Lightbox container"
  },
  "lightboxContainerBorder": {
    "name": "Border",
    "value": "3px solid #05515B",
    "group": "Lightbox container"
  },
  "lightboxContainerBorderRadius": {
    "name": "Border radius",
    "value": "10px",
    "group": "Lightbox container"
  },
  "lightboxContainerImageHeight": {
    "name": "Image height",
    "value": "208px",
    "group": "Lightbox container"
  },
  "lightboxContainerImage": {
    "name": "Image",
    "value": "https://oceintegration-oce0004.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTC8512ECF66934755A48C16E86711E3DB/native/Trees_compressed.jpg?channelToken=29497718d4964879a23b0c49895d8cfa",
    "group": "Lightbox container"
  },
  "lightboxContainerMaxWidth": {
    "name": "Maximum width",
    "value": "560px",
    "group": "Lightbox container"
  },
  "closeIconDisplay": {
    "name": "Display",
    "value": "block",
    "group": "Close icon"
  },
  "closeIconPadding": {
    "name": "Padding",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconTopIndent": {
    "name": "Top indent",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconRightIndent": {
    "name": "Right indent",
    "value": "10px",
    "group": "Close icon"
  }
},
  "pages": []
}
  }
},
"10150a5d-8512-45b7-b25c-ff2d6d31336b": {
  "name": "Analytics",
  "blocks": {
    "c1": {
  "name": "Content 1",
  "masks": {
  "include" : [
    "*?analytics"
  ],
  "exclude" : [
  ]
},
  "css": "#p10150a5d-8512-45b7-b25c-ff2d6d31336b_c1.standard-lightbox-wrapper_pers {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 983564278\n}\n\n#p10150a5d-8512-45b7-b25c-ff2d6d31336b_c1 .standard-lightbox-overlay_pers {\n  background: {{it.variables.backgroundOverlayColor.value}};\n  opacity: {{it.variables.backgroundOverlayOpacity.value}};\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0\n}\n\n#p10150a5d-8512-45b7-b25c-ff2d6d31336b_c1 .standard-lightbox-container_pers {\n  box-sizing: border-box;\n  border: {{it.variables.lightboxContainerBorder.value}};\n  border-radius: {{it.variables.lightboxContainerBorderRadius.value}};\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-family: inherit;\n  -ms-flex-direction: column;\n  overflow: hidden;\n  width: {{it.variables.lightboxContainerMaxWidth.value}}\n}\n\n#p10150a5d-8512-45b7-b25c-ff2d6d31336b_c1 .standard-lightbox-content_pers {\n  background: {{it.variables.lightboxContainerBackgroundColor.value}};\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: inherit;\n  padding: 20px 20px 30px;\n  text-align: center\n}\n\n#p10150a5d-8512-45b7-b25c-ff2d6d31336b_c1 .standard-lightbox-content-title_pers {\n  align-self: normal;\n  color: {{it.variables.titleColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.titleFontWeight.value}};\n  font-size: {{it.variables.titleFontSize.value}};\n  line-height: {{it.variables.titleLineHeight.value}};\n  text-align: {{it.variables.titleAlign.value}}\n}\n\n#p10150a5d-8512-45b7-b25c-ff2d6d31336b_c1 .standard-lightbox-message_pers {\n  color: {{it.variables.messageColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.messageFontWeight.value}};\n  font-size: {{it.variables.messageFontSize.value}};\n  line-height: {{it.variables.messageLineHeight.value}}\n}\n\n#p10150a5d-8512-45b7-b25c-ff2d6d31336b_c1 .standard-lightbox-button_pers {\n  background: {{it.variables.buttonBackgroundColor.value}};\n  border-radius: {{it.variables.buttonBorderRadius.value}};\n  color: {{it.variables.buttonColor.value}};\n  cursor: pointer;\n  padding: {{it.variables.buttonPadding.value}};\n  margin-top: 15px;\n  font-family: inherit;\n  font-size: {{it.variables.buttonFontSize.value}};\n  font-weight: {{it.variables.buttonFontWeight.value}};\n  line-height: {{it.variables.buttonLineHeight.value}};\n  text-decoration: none\n}\n\n#p10150a5d-8512-45b7-b25c-ff2d6d31336b_c1 .standard-lightbox-bg-header_pers {\n  height: {{it.variables.lightboxContainerImageHeight.value}};\n  background-size: auto {{it.variables.lightboxContainerImageHeight.value}};\n  background-image: url(\"{{it.variables.lightboxContainerImage.value}}\")\n}\n\n#p10150a5d-8512-45b7-b25c-ff2d6d31336b_c1 .standard-lightbox-close-icon_pers {\n  cursor: pointer;\n  position: absolute;\n  display: {{it.variables.closeIconDisplay.value}};\n  top: {{it.variables.closeIconTopIndent.value}};\n  right: {{it.variables.closeIconRightIndent.value}};\n  padding: {{it.variables.closeIconPadding.value}}\n}",
  "html": "<div id=\"p10150a5d-8512-45b7-b25c-ff2d6d31336b_c1\" class=\"standard-lightbox-wrapper_pers\">\n  <div class=\"standard-lightbox-overlay_pers\"></div>\n  <div class=\"standard-lightbox-container_pers\">\n    <div class=\"standard-lightbox-bg-header_pers\"></div>\n    <div class=\"standard-lightbox-content_pers\">\n      <div class=\"standard-lightbox-content-title_pers\">\n        {{it.variables.titleText.value}}\n      </div>\n      <div class=\"standard-lightbox-message_pers\">\n        {{it.variables.messageText.value}}\n      </div>\n      <a class=\"standard-lightbox-button_pers\"\n         href=\"{{it.variables.buttonTarget.value}}\">{{it.variables.buttonText.value}}</a>\n      <div class=\"standard-lightbox-close-icon_pers\">\n        <svg fill=\"#05515B\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n          <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n</div>",
  "js": function (info, data) {
  let guid = 'p10150a5d-8512-45b7-b25c-ff2d6d31336b_c1';
let targetSelector = 'body';
console.log('Welcome');

let controls = {
  accept: '.standard-lightbox-button_pers',
  close: '.standard-lightbox-close-icon_pers',
  overlay: '.standard-lightbox-overlay_pers',
};

track('triggered');
start();

let articleData = [];

// Check if the page is an article
if (document.querySelector('meta[property="og:type"]').content === 'article') {
  if (['complete', 'interactive'].includes(document.readyState)) {
    captureArticleMetaData();
  } else {
    document.addEventListener('DOMContentLoaded', captureArticleMetaData, { once: true });
  }
}

function captureArticleMetaData() {
  // Capture article metadata
  let articleMetadata = {
    url: location.href,
    title: document.querySelector('h1').innerText,
    description: document.querySelector('.preamble-nf').innerText,
    thumbnail: document.querySelector('.article-lead-img-pan img').src,
  };

  // Store the captured metadata in the array
  articleData.push(articleMetadata);

  // Print the captured article
  console.log(`Article ${articleData.length}: Title: ${articleMetadata.title}, URL: ${articleMetadata.url}`);

  // If you have captured metadata for 5 articles, you can stop capturing and print the top 5
  if (articleData.length === 5) {
    printTopArticles();
  }
}

function printTopArticles() {
  // If needed, you can still sort the articles based on a certain criterion here

  // Print the top 5 articles in the console
  console.log('Top 5 Articles:');
  articleData.forEach((article, index) => {
    console.log(`${index + 1}. Title: ${article.title}, URL: ${article.url}`);
  });
}



function start() {
  if (['complete','interactive'].includes(document.readyState)) {
    render();
  } else {
    document.addEventListener('DOMContentLoaded', render, { once : true });
  }
}

function track(event) {
  ORA.click({
    data: {
      'pers.acn': event,
      'pers.cmp': info.campaign.name,
      'pers.blk': info.block.name,
      'pers.prd': info.isProduction
    }
  });
}

function widget() {
  return document.querySelector('#' + guid);
}

function onclick(selector, handler) {
  widget().querySelectorAll(selector).forEach(function(node) {
    node.addEventListener('click', handler);
  });
}

function attachEvents() {
  onclick(controls.accept, function() {
    track('accepted');
  });

  onclick(controls.close, function() {
    widget().remove();
    track('dismissed');
  });

  onclick(controls.overlay, function() {
    widget().remove();
    track('dismissed');
  });

}

function render() {
  let placeholder = document.querySelector(targetSelector);
  if (placeholder) {
    const css = ORA.personalization.render(data.css, data.model);
    const html = ORA.personalization.render(data.html, data.model);
    placeholder.insertAdjacentHTML('beforeend', `<style type="text/css">${css}</style>${html}`);
    track('displayed');
    attachEvents();
  }
}

  },
  "variables": {
  "titleText": {
    "name": "Text",
    "value": "Welcome to analytics",
    "group": "Title"
  },
  "titleColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Title"
  },
  "titleFontSize": {
    "name": "Font size",
    "value": "28px",
    "group": "Title"
  },
  "titleFontWeight": {
    "name": "Font weight",
    "value": "800",
    "group": "Title"
  },
  "titleLineHeight": {
    "name": "Line height",
    "value": "36px",
    "group": "Title"
  },
  "titleAlign": {
    "name": "Align",
    "value": "center",
    "group": "Title"
  },
  "messageText": {
    "name": "Text",
    "value": "Edit your content using right panel",
    "group": "Message"
  },
  "messageColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Message"
  },
  "messageFontSize": {
    "name": "Font size",
    "value": "20px",
    "group": "Message"
  },
  "messageFontWeight": {
    "name": "Font weight",
    "value": "700",
    "group": "Message"
  },
  "messageLineHeight": {
    "name": "Line height",
    "value": "28px",
    "group": "Message"
  },
  "buttonTarget": {
    "name": "Target",
    "value": "#",
    "group": "Button"
  },
  "buttonText": {
    "name": "Text",
    "value": "Button",
    "group": "Button"
  },
  "buttonBackgroundColor": {
    "name": "Background color",
    "value": "rgba(5, 81, 91, 1)",
    "group": "Button"
  },
  "buttonBorderRadius": {
    "name": "Border radius",
    "value": "4px",
    "group": "Button"
  },
  "buttonColor": {
    "name": "Color",
    "value": "#CAF4C5",
    "group": "Button"
  },
  "buttonFontSize": {
    "name": "Font size",
    "value": "13.75px",
    "group": "Button"
  },
  "buttonFontWeight": {
    "name": "Font weight",
    "value": "600",
    "group": "Button"
  },
  "buttonLineHeight": {
    "name": "Line height",
    "value": "16px",
    "group": "Button"
  },
  "buttonPadding": {
    "name": "Padding",
    "value": "13px 16px 13px 16px",
    "group": "Button"
  },
  "backgroundOverlayColor": {
    "name": "Color",
    "value": "#000000",
    "group": "Background overlay"
  },
  "backgroundOverlayOpacity": {
    "name": "Opacity",
    "value": "0.8",
    "group": "Background overlay"
  },
  "lightboxContainerBackgroundColor": {
    "name": "Background color",
    "value": "#CAF4C5",
    "group": "Lightbox container"
  },
  "lightboxContainerBorder": {
    "name": "Border",
    "value": "3px solid #05515B",
    "group": "Lightbox container"
  },
  "lightboxContainerBorderRadius": {
    "name": "Border radius",
    "value": "10px",
    "group": "Lightbox container"
  },
  "lightboxContainerImageHeight": {
    "name": "Image height",
    "value": "208px",
    "group": "Lightbox container"
  },
  "lightboxContainerImage": {
    "name": "Image",
    "value": "https://oceintegration-oce0004.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTC8512ECF66934755A48C16E86711E3DB/native/Trees_compressed.jpg?channelToken=29497718d4964879a23b0c49895d8cfa",
    "group": "Lightbox container"
  },
  "lightboxContainerMaxWidth": {
    "name": "Maximum width",
    "value": "560px",
    "group": "Lightbox container"
  },
  "closeIconDisplay": {
    "name": "Display",
    "value": "block",
    "group": "Close icon"
  },
  "closeIconPadding": {
    "name": "Padding",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconTopIndent": {
    "name": "Top indent",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconRightIndent": {
    "name": "Right indent",
    "value": "10px",
    "group": "Close icon"
  }
},
  "pages": []
}
  }
},
"96e2634c-6e2c-43e0-86ee-2e57d76d4c22": {
  "name": "New_Vistor_Signin",
  "blocks": {
    "c1": {
  "name": "Content 1",
  "masks": {
  "include" : [
    "https://www.khaleejtimes.com/?signin"
  ],
  "exclude" : [
  ]
},
  "css": "#p96e2634c-6e2c-43e0-86ee-2e57d76d4c22_c1.standard-lightbox-wrapper_pers {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 983564278\n}\n\n#p96e2634c-6e2c-43e0-86ee-2e57d76d4c22_c1 .standard-lightbox-overlay_pers {\n  background: {{it.variables.backgroundOverlayColor.value}};\n  opacity: {{it.variables.backgroundOverlayOpacity.value}};\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0\n}\n\n#p96e2634c-6e2c-43e0-86ee-2e57d76d4c22_c1 .standard-lightbox-container_pers {\n  box-sizing: border-box;\n  border: {{it.variables.lightboxContainerBorder.value}};\n  border-radius: {{it.variables.lightboxContainerBorderRadius.value}};\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-family: inherit;\n  -ms-flex-direction: column;\n  overflow: hidden;\n  width: {{it.variables.lightboxContainerMaxWidth.value}}\n}\n\n#p96e2634c-6e2c-43e0-86ee-2e57d76d4c22_c1 .standard-lightbox-content_pers {\n  background: {{it.variables.lightboxContainerBackgroundColor.value}};\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: inherit;\n  padding: 20px 20px 30px;\n  text-align: center\n}\n\n#p96e2634c-6e2c-43e0-86ee-2e57d76d4c22_c1 .standard-lightbox-content-title_pers {\n  align-self: normal;\n  color: {{it.variables.titleColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.titleFontWeight.value}};\n  font-size: {{it.variables.titleFontSize.value}};\n  line-height: {{it.variables.titleLineHeight.value}};\n  text-align: {{it.variables.titleAlign.value}}\n}\n\n#p96e2634c-6e2c-43e0-86ee-2e57d76d4c22_c1 .standard-lightbox-message_pers {\n  color: {{it.variables.messageColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.messageFontWeight.value}};\n  font-size: {{it.variables.messageFontSize.value}};\n  line-height: {{it.variables.messageLineHeight.value}}\n}\n\n#p96e2634c-6e2c-43e0-86ee-2e57d76d4c22_c1 .standard-lightbox-button_pers {\n  background: {{it.variables.buttonBackgroundColor.value}};\n  border-radius: {{it.variables.buttonBorderRadius.value}};\n  color: {{it.variables.buttonColor.value}};\n  cursor: pointer;\n  padding: {{it.variables.buttonPadding.value}};\n  margin-top: 15px;\n  font-family: inherit;\n  font-size: {{it.variables.buttonFontSize.value}};\n  font-weight: {{it.variables.buttonFontWeight.value}};\n  line-height: {{it.variables.buttonLineHeight.value}};\n  text-decoration: none\n}\n\n#p96e2634c-6e2c-43e0-86ee-2e57d76d4c22_c1 .standard-lightbox-bg-header_pers {\n  height: {{it.variables.lightboxContainerImageHeight.value}};\n  background-size: auto {{it.variables.lightboxContainerImageHeight.value}};\n  background-image: url(\"{{it.variables.lightboxContainerImage.value}}\")\n}\n\n#p96e2634c-6e2c-43e0-86ee-2e57d76d4c22_c1 .standard-lightbox-close-icon_pers {\n  cursor: pointer;\n  position: absolute;\n  display: {{it.variables.closeIconDisplay.value}};\n  top: {{it.variables.closeIconTopIndent.value}};\n  right: {{it.variables.closeIconRightIndent.value}};\n  padding: {{it.variables.closeIconPadding.value}}\n}",
  "html": "<div id=\"p96e2634c-6e2c-43e0-86ee-2e57d76d4c22_c1\" class=\"standard-lightbox-wrapper_pers\">\n  <div class=\"standard-lightbox-overlay_pers\"></div>\n  <div class=\"standard-lightbox-container_pers\">\n    <div class=\"standard-lightbox-bg-header_pers\"></div>\n    <div class=\"standard-lightbox-content_pers\">\n      <div class=\"standard-lightbox-content-title_pers\">\n        {{it.variables.titleText.value}}\n      </div>\n      <div class=\"standard-lightbox-message_pers\">\n        {{it.variables.messageText.value}}\n      </div>\n      <a class=\"standard-lightbox-button_pers\"\n         href=\"{{it.variables.buttonTarget.value}}\">{{it.variables.buttonText.value}}</a>\n      <div class=\"standard-lightbox-close-icon_pers\">\n        <svg fill=\"#05515B\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n          <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n</div>",
  "js": function (info, data) {
  let guid = 'p96e2634c-6e2c-43e0-86ee-2e57d76d4c22_c1';

let targetSelector = 'body';

let controls = {
  accept: '.standard-lightbox-button_pers',
  close: '.standard-lightbox-close-icon_pers',
  overlay: '.standard-lightbox-overlay_pers'
};

track('triggered');

start();

function start() {
  if (['complete','interactive'].includes(document.readyState)) {
    render();
  } else {
    document.addEventListener('DOMContentLoaded', render, { once : true });
  }
}

function track(event) {
  ORA.click({
    data: {
      'pers.acn': event,
      'pers.cmp': info.campaign.name,
      'pers.blk': info.block.name,
      'pers.prd': info.isProduction
    }
  });
}

function widget() {
  return document.querySelector('#' + guid);
}

function onclick(selector, handler) {
  widget().querySelectorAll(selector).forEach(function(node) {
    node.addEventListener('click', handler);
  });
}

function attachEvents() {
  onclick(controls.accept, function() {
    track('accepted');
  });

  onclick(controls.close, function() {
    widget().remove();
    track('dismissed');
  });

  onclick(controls.overlay, function() {
    widget().remove();
    track('dismissed');
  });

}

function render() {
  let placeholder = document.querySelector(targetSelector);
  if (placeholder) {
    const css = ORA.personalization.render(data.css, data.model);
    const html = ORA.personalization.render(data.html, data.model);
    placeholder.insertAdjacentHTML('beforeend', `<style type="text/css">${css}</style>${html}`);
    track('displayed');
    attachEvents();
  }
}

  },
  "variables": {
  "titleText": {
    "name": "Text",
    "value": "Signup!! To get more interesting articles",
    "group": "Title"
  },
  "titleColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Title"
  },
  "titleFontSize": {
    "name": "Font size",
    "value": "22px",
    "group": "Title"
  },
  "titleFontWeight": {
    "name": "Font weight",
    "value": "600",
    "group": "Title"
  },
  "titleLineHeight": {
    "name": "Line height",
    "value": "36px",
    "group": "Title"
  },
  "titleAlign": {
    "name": "Align",
    "value": "center",
    "group": "Title"
  },
  "messageText": {
    "name": "Text",
    "value": "",
    "group": "Message"
  },
  "messageColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Message"
  },
  "messageFontSize": {
    "name": "Font size",
    "value": "20px",
    "group": "Message"
  },
  "messageFontWeight": {
    "name": "Font weight",
    "value": "700",
    "group": "Message"
  },
  "messageLineHeight": {
    "name": "Line height",
    "value": "28px",
    "group": "Message"
  },
  "buttonTarget": {
    "name": "Target",
    "value": "https://khaleejtimes.eu.auth0.com/login?state=hKFo2SBCUWtqMFIyMGw0by1OSTFIY0JIVndRVjJTanBtVFVWeaFupWxvZ2luo3RpZNkgc0pLRm1rSEtVeEpFbHZ0VEpTaUNQWnF5VGdTS0hFYTSjY2lk2SBxZ1RSa0k3NEZVTTZ6RkhFYW81V1ROUGsyN3o1ZndmUg&client=qgTRkI74FUM6zFHEao5WTNPk27z5fwfR&protocol=oauth2&redirect_uri=https%3A%2F%2Fwww.khaleejtimes.com%2Faccessing-account%3FreturnUrl%3Dhttps%253A%252F%252Fwww.khaleejtimes.com%252F%253F_refresh%253Dtrue&initialScreen=logIn&fromSWG=false&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=YWV1VHN4MTlZWlM5MmlYTzFObjd6Y35HM2lQblB6SzlkfjA5blJBY2o2TQ%3D%3D&code_challenge=63siX64KwUnO96mMritdm43nkUs8XVykETrgXCDF2Jc&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMjIuMSJ9",
    "group": "Button"
  },
  "buttonText": {
    "name": "Text",
    "value": "Sign Up",
    "group": "Button"
  },
  "buttonBackgroundColor": {
    "name": "Background color",
    "value": "rgba(5, 81, 91, 1)",
    "group": "Button"
  },
  "buttonBorderRadius": {
    "name": "Border radius",
    "value": "4px",
    "group": "Button"
  },
  "buttonColor": {
    "name": "Color",
    "value": "#CAF4C5",
    "group": "Button"
  },
  "buttonFontSize": {
    "name": "Font size",
    "value": "16px",
    "group": "Button"
  },
  "buttonFontWeight": {
    "name": "Font weight",
    "value": "600",
    "group": "Button"
  },
  "buttonLineHeight": {
    "name": "Line height",
    "value": "16px",
    "group": "Button"
  },
  "buttonPadding": {
    "name": "Padding",
    "value": "13px 16px 13px 16px",
    "group": "Button"
  },
  "backgroundOverlayColor": {
    "name": "Color",
    "value": "#000000",
    "group": "Background overlay"
  },
  "backgroundOverlayOpacity": {
    "name": "Opacity",
    "value": "0.8",
    "group": "Background overlay"
  },
  "lightboxContainerBackgroundColor": {
    "name": "Background color",
    "value": "#CAF4C5",
    "group": "Lightbox container"
  },
  "lightboxContainerBorder": {
    "name": "Border",
    "value": "3px solid #05515B",
    "group": "Lightbox container"
  },
  "lightboxContainerBorderRadius": {
    "name": "Border radius",
    "value": "10px",
    "group": "Lightbox container"
  },
  "lightboxContainerImageHeight": {
    "name": "Image height",
    "value": "155px",
    "group": "Lightbox container"
  },
  "lightboxContainerImage": {
    "name": "Image",
    "value": "data:image/png;base64,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",
    "group": "Lightbox container"
  },
  "lightboxContainerMaxWidth": {
    "name": "Maximum width",
    "value": "560px",
    "group": "Lightbox container"
  },
  "closeIconDisplay": {
    "name": "Display",
    "value": "block",
    "group": "Close icon"
  },
  "closeIconPadding": {
    "name": "Padding",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconTopIndent": {
    "name": "Top indent",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconRightIndent": {
    "name": "Right indent",
    "value": "10px",
    "group": "Close icon"
  }
},
  "pages": []
}
  }
},
"2b3c73eb-34a0-414d-adb0-9d615256992d": {
  "name": "Recommended Articles",
  "blocks": {
    "C1": {
  "name": "Content 1",
  "masks": {
  "include" : [
    "https://www.khaleejtimes.com/entertainment/?test"
  ],
  "exclude" : [
  ]
},
  "css": "#p2b3c73eb-34a0-414d-adb0-9d615256992d_C1.standard-lightbox-wrapper_pers {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 983564278\n}\n\n#p2b3c73eb-34a0-414d-adb0-9d615256992d_C1 .standard-lightbox-overlay_pers {\n  background: {{it.variables.backgroundOverlayColor.value}};\n  opacity: {{it.variables.backgroundOverlayOpacity.value}};\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0\n}\n\n#p2b3c73eb-34a0-414d-adb0-9d615256992d_C1 .standard-lightbox-container_pers {\n  box-sizing: border-box;\n  border: {{it.variables.lightboxContainerBorder.value}};\n  border-radius: {{it.variables.lightboxContainerBorderRadius.value}};\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-family: inherit;\n  -ms-flex-direction: column;\n  overflow: hidden;\n  width: {{it.variables.lightboxContainerMaxWidth.value}}\n}\n\n#p2b3c73eb-34a0-414d-adb0-9d615256992d_C1 .standard-lightbox-content_pers {\n  background: {{it.variables.lightboxContainerBackgroundColor.value}};\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: inherit;\n  padding: 20px 20px 30px;\n  text-align: center;\n  text-decoration:none;\n}\n#p2b3c73eb-34a0-414d-adb0-9d615256992d_C1 .standard-lightbox-content_pers:hover{\n  color:darkblue;\n  font-weight:600;\n}\n\n#p2b3c73eb-34a0-414d-adb0-9d615256992d_C1 .standard-lightbox-content-title_pers {\n  align-self: normal;\n  color: {{it.variables.titleColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.titleFontWeight.value}};\n  font-size: {{it.variables.titleFontSize.value}};\n  line-height: {{it.variables.titleLineHeight.value}};\n  text-align: {{it.variables.titleAlign.value}}\n}\n\n#p2b3c73eb-34a0-414d-adb0-9d615256992d_C1 .standard-lightbox-message_pers {\n  color: {{it.variables.messageColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.messageFontWeight.value}};\n  font-size: {{it.variables.messageFontSize.value}};\n  line-height: {{it.variables.messageLineHeight.value}}\n}\n\n#p2b3c73eb-34a0-414d-adb0-9d615256992d_C1 .standard-lightbox-button_pers {\n  background: {{it.variables.buttonBackgroundColor.value}};\n  border-radius: {{it.variables.buttonBorderRadius.value}};\n  color: {{it.variables.buttonColor.value}};\n  cursor: pointer;\n  padding: {{it.variables.buttonPadding.value}};\n  margin-top: 15px;\n  font-family: inherit;\n  font-size: {{it.variables.buttonFontSize.value}};\n  font-weight: {{it.variables.buttonFontWeight.value}};\n  line-height: {{it.variables.buttonLineHeight.value}};\n  text-decoration: none\n}\n\n#p2b3c73eb-34a0-414d-adb0-9d615256992d_C1 .standard-lightbox-bg-header_pers {\n  height: {{it.variables.lightboxContainerImageHeight.value}};\n  background-size: auto {{it.variables.lightboxContainerImageHeight.value}};\n  background-image: url(\"{{it.variables.lightboxContainerImage.value}}\")\n}\n\n#p2b3c73eb-34a0-414d-adb0-9d615256992d_C1 .standard-lightbox-close-icon_pers {\n  cursor: pointer;\n  position: absolute;\n  display: {{it.variables.closeIconDisplay.value}};\n  top: {{it.variables.closeIconTopIndent.value}};\n  right: {{it.variables.closeIconRightIndent.value}};\n  padding: {{it.variables.closeIconPadding.value}}\n}",
  "html": "<div id=\"p2b3c73eb-34a0-414d-adb0-9d615256992d_C1\" class=\"standard-lightbox-wrapper_pers\">\n  <div class=\"standard-lightbox-overlay_pers\"></div>\n  <div class=\"standard-lightbox-container_pers\">\n    <div class=\"standard-lightbox-bg-header_pers\"></div>\n    <div class=\"standard-lightbox-content_pers\">\n      <div class=\"standard-lightbox-content-title_pers\">\n        <a class=\"standard-lightbox-content_pers\"\n         href=\"{{it.variables.titleTextlink.value}}\">\n        {{it.variables.titleText.value}}\n        </a>\n      </div>\n \n         <div class=\"standard-lightbox-content-title_pers\">\n            <a class=\"standard-lightbox-content_pers\"\n         href=\"{{it.variables.titleTextlink.value}}\">\n        {{it.variables.titleText2.value}}\n        </a>\n        \n      </div>\n          <div class=\"standard-lightbox-content-title_pers\">\n             <a class=\"standard-lightbox-content_pers\"\n         href=\"{{it.variables.titleTextlink.value}}\">\n        {{it.variables.titleText3.value}}\n        </a>\n       \n      </div\n \n      <a class=\"standard-lightbox-button_pers\"\n         href=\"{{it.variables.buttonTarget.value}}\"></a>\n      <div class=\"standard-lightbox-close-icon_pers\">\n        <svg fill=\"#05515B\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n          <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n</div>\n",
  "js": function (info, data) {
  let guid = 'p2b3c73eb-34a0-414d-adb0-9d615256992d_C1';

let targetSelector = 'body';

let controls = {
  accept: '.standard-lightbox-button_pers',
  close: '.standard-lightbox-close-icon_pers',
  overlay: '.standard-lightbox-overlay_pers'
};

track('triggered');

start();

function start() {
  if (['complete','interactive'].includes(document.readyState)) {
    render();
  } else {
    document.addEventListener('DOMContentLoaded', render, { once : true });
  }
}

function track(event) {
  ORA.click({
    data: {
      'pers.acn': event,
      'pers.cmp': info.campaign.name,
      'pers.blk': info.block.name,
      'pers.prd': info.isProduction
    }
  });
}

function widget() {
  return document.querySelector('#' + guid);
}

function onclick(selector, handler) {
  widget().querySelectorAll(selector).forEach(function(node) {
    node.addEventListener('click', handler);
  });
}

function attachEvents() {
  onclick(controls.accept, function() {
    track('accepted');
  });

  onclick(controls.close, function() {
    widget().remove();
    track('dismissed');
  });

  onclick(controls.overlay, function() {
    widget().remove();
    track('dismissed');
  });

}

function render() {
  let placeholder = document.querySelector(targetSelector);
  if (placeholder) {
    const css = ORA.personalization.render(data.css, data.model);
    const html = ORA.personalization.render(data.html, data.model);
    placeholder.insertAdjacentHTML('beforeend', `<style type="text/css">${css}</style>${html}`);
    track('displayed');
    attachEvents();
  }
}

  },
  "variables": {
  "titleText": {
    "name": "Text",
    "value": "Restaurant Review: At Asil, indulge in a fusion of elegance and tradition",
    "group": "Title"
  },
  "titleText2": {
    "name": "Text",
    "value": "Strike-delayed Emmys plumb new ratings depths",
    "group": "Title"
  },
  "titleText3": {
    "name": "Text",
    "value": "Deepika Padukone reacts to Alia Bhatt's review on '12th Fail'",
    "group": "Title"
  },
  "titleTextlink": {
    "name": "Text",
    "value": "https://www.khaleejtimes.com/entertainment/restaurant-review-at-asil-indulge-in-a-fusion-of-elegance-and-tradition",
    "group": "Title"
  },
  "titleText2link": {
    "name": "Text",
    "value": "https://www.khaleejtimes.com/entertainment/strike-delayed-emmys-plumb-new-ratings-depths",
    "group": "Title"
  },
  "titleText3link": {
    "name": "Text",
    "value": "https://www.khaleejtimes.com/entertainment/deepika-padukone-reacts-to-alia-bhatts-review-on-12th-fail",
    "group": "Title"
  },
  "titleColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Title"
  },
  "titleFontSize": {
    "name": "Font size",
    "value": "24px",
    "group": "Title"
  },
  "titleFontWeight": {
    "name": "Font weight",
    "value": "500",
    "group": "Title"
  },
  "titleLineHeight": {
    "name": "Line height",
    "value": "36px",
    "group": "Title"
  },
  "titleAlign": {
    "name": "Align",
    "value": "center",
    "group": "Title"
  },
  "messageText": {
    "name": "Text",
    "value": "Edit your content using right panel",
    "group": "Message"
  },
  "messageColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Message"
  },
  "messageFontSize": {
    "name": "Font size",
    "value": "20px",
    "group": "Message"
  },
  "messageFontWeight": {
    "name": "Font weight",
    "value": "700",
    "group": "Message"
  },
  "messageLineHeight": {
    "name": "Line height",
    "value": "28px",
    "group": "Message"
  },
  "buttonTarget": {
    "name": "Target",
    "value": "https://www.khaleejtimes.com/entertainment",
    "group": "Button"
  },
  "buttonText": {
    "name": "Text",
    "value": "Button",
    "group": "Button"
  },
  "buttonBackgroundColor": {
    "name": "Background color",
    "value": "rgba(5, 81, 91, 1)",
    "group": "Button"
  },
  "buttonBorderRadius": {
    "name": "Border radius",
    "value": "4px",
    "group": "Button"
  },
  "buttonColor": {
    "name": "Color",
    "value": "#CAF4C5",
    "group": "Button"
  },
  "buttonFontSize": {
    "name": "Font size",
    "value": "13.75px",
    "group": "Button"
  },
  "buttonFontWeight": {
    "name": "Font weight",
    "value": "600",
    "group": "Button"
  },
  "buttonLineHeight": {
    "name": "Line height",
    "value": "16px",
    "group": "Button"
  },
  "buttonPadding": {
    "name": "Padding",
    "value": "13px 16px 13px 16px",
    "group": "Button"
  },
  "backgroundOverlayColor": {
    "name": "Color",
    "value": "#000000",
    "group": "Background overlay"
  },
  "backgroundOverlayOpacity": {
    "name": "Opacity",
    "value": "0.8",
    "group": "Background overlay"
  },
  "lightboxContainerBackgroundColor": {
    "name": "Background color",
    "value": "#CAF4C5",
    "group": "Lightbox container"
  },
  "lightboxContainerBorder": {
    "name": "Border",
    "value": "3px solid #05515B",
    "group": "Lightbox container"
  },
  "lightboxContainerBorderRadius": {
    "name": "Border radius",
    "value": "10px",
    "group": "Lightbox container"
  },
  "lightboxContainerImageHeight": {
    "name": "Image height",
    "value": "150px",
    "group": "Lightbox container"
  },
  "lightboxContainerImage": {
    "name": "Image",
    "value": "data:image/png;base64,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",
    "group": "Lightbox container"
  },
  "lightboxContainerMaxWidth": {
    "name": "Maximum width",
    "value": "500px",
    "group": "Lightbox container"
  },
  "closeIconDisplay": {
    "name": "Display",
    "value": "block",
    "group": "Close icon"
  },
  "closeIconPadding": {
    "name": "Padding",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconTopIndent": {
    "name": "Top indent",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconRightIndent": {
    "name": "Right indent",
    "value": "10px",
    "group": "Close icon"
  }
},
  "pages": []
}
  }
},
"d34e8e2d-531e-43a2-a28f-6ff072441a46": {
  "name": "Last View Section",
  "blocks": {
    "c1": {
  "name": "Content 1",
  "masks": {
  "include" : [
    "*?testing"
  ],
  "exclude" : [
  ]
},
  "css": "#pd34e8e2d-531e-43a2-a28f-6ff072441a46_c1.standard-lightbox-wrapper_pers {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 983564278\n}\n\n#pd34e8e2d-531e-43a2-a28f-6ff072441a46_c1 .standard-lightbox-overlay_pers {\n  background: {{it.variables.backgroundOverlayColor.value}};\n  opacity: {{it.variables.backgroundOverlayOpacity.value}};\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0\n}\n\n#pd34e8e2d-531e-43a2-a28f-6ff072441a46_c1 .standard-lightbox-container_pers {\n  box-sizing: border-box;\n  border: {{it.variables.lightboxContainerBorder.value}};\n  border-radius: {{it.variables.lightboxContainerBorderRadius.value}};\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-family: inherit;\n  -ms-flex-direction: column;\n  overflow: hidden;\n  width: {{it.variables.lightboxContainerMaxWidth.value}}\n}\n\n#pd34e8e2d-531e-43a2-a28f-6ff072441a46_c1 .standard-lightbox-content_pers {\n  background: {{it.variables.lightboxContainerBackgroundColor.value}};\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: inherit;\n  padding: 20px 20px 30px;\n  text-align: center\n}\n\n#pd34e8e2d-531e-43a2-a28f-6ff072441a46_c1 .standard-lightbox-content-title_pers {\n  align-self: normal;\n  color: {{it.variables.titleColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.titleFontWeight.value}};\n  font-size: {{it.variables.titleFontSize.value}};\n  line-height: {{it.variables.titleLineHeight.value}};\n  text-align: {{it.variables.titleAlign.value}}\n}\n\n#pd34e8e2d-531e-43a2-a28f-6ff072441a46_c1 .standard-lightbox-message_pers {\n  color: {{it.variables.messageColor.value}};\n  font-family: inherit;\n  font-weight: {{it.variables.messageFontWeight.value}};\n  font-size: {{it.variables.messageFontSize.value}};\n  line-height: {{it.variables.messageLineHeight.value}}\n}\n\n#pd34e8e2d-531e-43a2-a28f-6ff072441a46_c1 .standard-lightbox-button_pers {\n  background: {{it.variables.buttonBackgroundColor.value}};\n  border-radius: {{it.variables.buttonBorderRadius.value}};\n  color: {{it.variables.buttonColor.value}};\n  cursor: pointer;\n  padding: {{it.variables.buttonPadding.value}};\n  margin-top: 15px;\n  font-family: inherit;\n  font-size: {{it.variables.buttonFontSize.value}};\n  font-weight: {{it.variables.buttonFontWeight.value}};\n  line-height: {{it.variables.buttonLineHeight.value}};\n  text-decoration: none\n}\n\n#pd34e8e2d-531e-43a2-a28f-6ff072441a46_c1 .standard-lightbox-bg-header_pers {\n  height: {{it.variables.lightboxContainerImageHeight.value}};\n  background-size: auto {{it.variables.lightboxContainerImageHeight.value}};\n  background-image: url(\"{{it.variables.lightboxContainerImage.value}}\")\n}\n\n#pd34e8e2d-531e-43a2-a28f-6ff072441a46_c1 .standard-lightbox-close-icon_pers {\n  cursor: pointer;\n  position: absolute;\n  display: {{it.variables.closeIconDisplay.value}};\n  top: {{it.variables.closeIconTopIndent.value}};\n  right: {{it.variables.closeIconRightIndent.value}};\n  padding: {{it.variables.closeIconPadding.value}}\n}",
  "html": "<div id=\"pd34e8e2d-531e-43a2-a28f-6ff072441a46_c1\" class=\"standard-lightbox-wrapper_pers\">\n  <div class=\"standard-lightbox-overlay_pers\"></div>\n  <div class=\"standard-lightbox-container_pers\">\n    <div class=\"standard-lightbox-bg-header_pers\"></div>\n    <div class=\"standard-lightbox-content_pers\">\n      <div class=\"standard-lightbox-content-title_pers\">\n        {{it.variables.titleText.value}}\n      </div>\n      <div class=\"standard-lightbox-message_pers\">\n        {{it.variables.messageText.value}}\n      </div>\n      <a class=\"standard-lightbox-button_pers\"\n         href=\"{{it.variables.buttonTarget.value}}\">{{it.variables.buttonText.value}}</a>\n      <div class=\"standard-lightbox-close-icon_pers\">\n        <svg fill=\"#05515B\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n          <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n</div>",
  "js": function (info, data) {
  var sectionHistory = localStorage.getItem('pers-sections-visits') || '{}';
sectionHistory=JSON.parse(sectionHistory);
var mostPopularSection;

var mostPopularVisited = 2;
Object.keys(sectionHistory).forEach(function(key) {
    if (mostPopularVisited < sectionHistory[key]) {
        mostPopularSection = key;
        mostPopularVisited = sectionHistory[key];
    }
});
let guid = 'pd34e8e2d-531e-43a2-a28f-6ff072441a46_c1';

let targetSelector = 'body';

let controls = {
  accept: '.standard-lightbox-button_pers',
  close: '.standard-lightbox-close-icon_pers',
  overlay: '.standard-lightbox-overlay_pers'
};

track('triggered');

start();

function start() {
  if (['complete','interactive'].includes(document.readyState)) {
    render();
  } else {
    document.addEventListener('DOMContentLoaded', render, { once : true });
  }
}

function track(event) {
  ORA.click({
    data: {
      'pers.acn': event,
      'pers.cmp': info.campaign.name,
      'pers.blk': info.block.name,
      'pers.prd': info.isProduction
    }
  });
}


function onclick(selector, handler) {
  widget().querySelectorAll(selector).forEach(;
}

function attachEvents() {
  onclick(controls.accept, ;

  onclick(controls.close, function() {
    widget().remove();
    track('dismissed');
  });

  onclick(controls.overlay, function() {
    widget().remove();
    track('dismissed');
  });

}

function render() {
  let placeholder = document.querySelector(targetSelector);
  if (placeholder && mostPopularSection) {
   data.model.variables.titleText.value=mostPopularSection;
    const css = ORA.personalization.render(data.css, data.model);
    const html = ORA.personalization.render(data.html, data.model);
   
    placeholder.insertAdjacentHTML('beforeend', `<style type="text/css">${css}</style>${html}`);
    track('displayed');
    attachEvents();
  }
}

  },
  "variables": {
  "titleText": {
    "name": "Text",
    "value": "Sports Page",
    "group": "Title"
  },
  "titleColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Title"
  },
  "titleFontSize": {
    "name": "Font size",
    "value": "28px",
    "group": "Title"
  },
  "titleFontWeight": {
    "name": "Font weight",
    "value": "800",
    "group": "Title"
  },
  "titleLineHeight": {
    "name": "Line height",
    "value": "36px",
    "group": "Title"
  },
  "titleAlign": {
    "name": "Align",
    "value": "center",
    "group": "Title"
  },
  "messageText": {
    "name": "Text",
    "value": "Edit your content using right panel",
    "group": "Message"
  },
  "messageColor": {
    "name": "Color",
    "value": "#05515B",
    "group": "Message"
  },
  "messageFontSize": {
    "name": "Font size",
    "value": "20px",
    "group": "Message"
  },
  "messageFontWeight": {
    "name": "Font weight",
    "value": "700",
    "group": "Message"
  },
  "messageLineHeight": {
    "name": "Line height",
    "value": "28px",
    "group": "Message"
  },
  "buttonTarget": {
    "name": "Target",
    "value": "#",
    "group": "Button"
  },
  "buttonText": {
    "name": "Text",
    "value": "Button",
    "group": "Button"
  },
  "buttonBackgroundColor": {
    "name": "Background color",
    "value": "rgba(5, 81, 91, 1)",
    "group": "Button"
  },
  "buttonBorderRadius": {
    "name": "Border radius",
    "value": "4px",
    "group": "Button"
  },
  "buttonColor": {
    "name": "Color",
    "value": "#CAF4C5",
    "group": "Button"
  },
  "buttonFontSize": {
    "name": "Font size",
    "value": "13.75px",
    "group": "Button"
  },
  "buttonFontWeight": {
    "name": "Font weight",
    "value": "600",
    "group": "Button"
  },
  "buttonLineHeight": {
    "name": "Line height",
    "value": "16px",
    "group": "Button"
  },
  "buttonPadding": {
    "name": "Padding",
    "value": "13px 16px 13px 16px",
    "group": "Button"
  },
  "backgroundOverlayColor": {
    "name": "Color",
    "value": "#000000",
    "group": "Background overlay"
  },
  "backgroundOverlayOpacity": {
    "name": "Opacity",
    "value": "0.8",
    "group": "Background overlay"
  },
  "lightboxContainerBackgroundColor": {
    "name": "Background color",
    "value": "#CAF4C5",
    "group": "Lightbox container"
  },
  "lightboxContainerBorder": {
    "name": "Border",
    "value": "3px solid #05515B",
    "group": "Lightbox container"
  },
  "lightboxContainerBorderRadius": {
    "name": "Border radius",
    "value": "10px",
    "group": "Lightbox container"
  },
  "lightboxContainerImageHeight": {
    "name": "Image height",
    "value": "208px",
    "group": "Lightbox container"
  },
  "lightboxContainerImage": {
    "name": "Image",
    "value": "https://oceintegration-oce0004.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTC8512ECF66934755A48C16E86711E3DB/native/Trees_compressed.jpg?channelToken=29497718d4964879a23b0c49895d8cfa",
    "group": "Lightbox container"
  },
  "lightboxContainerMaxWidth": {
    "name": "Maximum width",
    "value": "560px",
    "group": "Lightbox container"
  },
  "closeIconDisplay": {
    "name": "Display",
    "value": "block",
    "group": "Close icon"
  },
  "closeIconPadding": {
    "name": "Padding",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconTopIndent": {
    "name": "Top indent",
    "value": "10px",
    "group": "Close icon"
  },
  "closeIconRightIndent": {
    "name": "Right indent",
    "value": "10px",
    "group": "Close icon"
  }
},
  "pages": []
},
"C2": {
  "name": "Content 2",
  "masks": {
  "include" : [
    "*?testing"
  ],
  "exclude" : [
  ]
},
  "css": "",
  "html": "",
  "js": function (info, data) {
  var sectionHistory = localStorage.getItem('pers-sections-visits') || '{}';

var currentSection = utag_data.page_section;
if(currentSection)
{
sectionHistory = JSON.parse(sectionHistory);
 
if (!sectionHistory[currentSection]) {
    sectionHistory[currentSection] = 1;
} else {
    sectionHistory[currentSection] += 1;
}
 
localStorage.setItem('pers-sections-visits', JSON.stringify(sectionHistory));
}
 


  },
  "variables": {},
  "pages": []
}
  }
}
  },
  "pages": {
    
  }
});