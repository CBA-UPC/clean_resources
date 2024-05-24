<HTML><HEAD>
<TITLE>Access Denied</TITLE>
</HEAD><BODY>
<H1>Access Denied</H1>
 
You don't have permission to access "http&#58;&#47;&#47;www&#46;sap&#46;com&#47;etc&#46;clientlibs&#47;sapdx&#47;front&#45;layer&#47;dist&#47;resources&#47;sapcom&#47;9832&#46;a6d6fa3b9e27f7cda107&#46;js" on this server.<P>
Reference&#32;&#35;18&#46;24231102&#46;1706719728&#46;d42eae
</BODY>
</HTML>
     value: undefined
      };
    }
  }
  return {
    prop,
    // @ts-ignore
    value
  };
}
function registerClickOutside(component, element, callback) {
  window.addEventListener('click', (e) => {
    var _a;
    if (((_a = e.composedPath()) === null || _a === void 0 ? void 0 : _a.indexOf(element)) < 0) {
      callback.call(component);
    }
  });
}
var ActivityMapRegion;
(function (ActivityMapRegion) {
  ActivityMapRegion["Header"] = "header";
  ActivityMapRegion["SecondaryNavigation"] = "secondaryNavigation";
})(ActivityMapRegion || (ActivityMapRegion = {}));
// As the analytics script can't access the shadow DOM elements for click tracking,
// we emit an event on menuitem click which the analytics script can listen for.
function emitClickTrackerEvent(payload, customEventName) {
  const eventName = customEventName || 'cxsdsHeaderClickTracker';
  const trackerEvent = new CustomEvent(eventName, {
    detail: payload,
    bubbles: true
  });
  // Launch's custom event listener will only listen for
  // custom event broadcasts starting at document.body!
  setTimeout(() => {
    document.body.dispatchEvent(trackerEvent);
  }, 5); // Give UI time to update (e.g. open/close menus)
}
function emitCustomEvent(eventName, payload) {
  const customEvent = new CustomEvent(eventName, {
    detail: payload,
    bubbles: true
  });
  document.body.dispatchEvent(customEvent);
}
function camelCase(string) {
  const words = string
    .trim()
    .replace(/[\s_-]+/g, '-')
    .split('-');
  if (words.length === 1) {
    const word = words[0];
    if (word === word.toUpperCase()) {
      return word.toLowerCase();
    }
  }
  else {
    return words.reduce((accumulator, word, index) => {
      const currentWord = word.toLowerCase();
      return index === 0
        ? accumulator + currentWord.charAt(0).toLowerCase() + currentWord.slice(1)
        : accumulator + currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
    }, '');
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
}
function toDashCase(string) {
  const words = string
    .trim()
    .replace(/[\s_-]+/g, '-')
    .split('-');
  if (words.length === 1) {
    const word = words[0];
    if (word === word.toUpperCase()) {
      return word.toLowerCase();
    }
    else {
      return word
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase();
    }
  }
  else {
    return words.map((word) => word.toLowerCase()).join('-');
  }
}

export { ActivityMapRegion as A, emitClickTrackerEvent as a, camelCase as c, emitCustomEvent as e, jsonWatcher as j, registerClickOutside as r, toDashCase as t };

//# sourceMappingURL=utils-800c2138.js.map