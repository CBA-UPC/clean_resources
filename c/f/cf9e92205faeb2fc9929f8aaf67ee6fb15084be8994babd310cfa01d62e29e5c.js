{
        $el.style.margin = 'auto';
      }
      $el.setAttribute('data-url', el.src);
      if (!st.is_ie) {
        contAlign = getComputedStyle(el.parentElement).textAlign;
        if ('center' === contAlign) {
          $el.style.margin = 'auto';
        }
      }
      el.parentNode.insertBefore($el, el.nextSibling);
      return inline_buttons = st.load('inline-share-buttons', {
        alignment: alignment,
        id: id,
        enabled: true,
        networks: networks,
        padding: padding,
        radius: radius,
        size: size,
        spacing: spacing,
        onLoad: function() {
          st.addClass($el, '');
          return typeof onLoad === "function" ? onLoad() : void 0;
        }
      });
    });
  };

}).call(this);

(function(){window.__sharethis__.md5="edf92320d21b4aa3338924a9a008f883";})();