/*
 * @file
 * Utility class to remove browser styles, especially for button.
 */

.reset-appearance {
  margin: 0;
  padding: 0;
  border: 0 none;
  background: transparent;
  line-height: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
 (env) {
        var form = $(env.parameters.form);
        setTimeout(function(){
          form.find('.eac-captcha-message').show();
        }, 3000);
      });
      // Captcha dialog box.
      var captchaStartList = [];
      $('.webform-button--submit').each(function(index){
        var form = $(this).parents('form');
        var captcha = form.find('.eac-captcha-element');
        var id = form.attr('id');
        captchaStartList[id] = false;
        if (captcha.length > 0) {
          $(this).click(function (env){
            form = $(this).parents('form');
            var id = form.attr('id');
            if (!captchaStartList[id]) {
              env.preventDefault();
              let html = '<div id="dialog" title="Captcha"><p>' + Drupal.t('Please, solve captcha before submition.')+ '</p></div>';
              $(html).dialog();
            }
          });
        }
      });
      window.addEventListener("wtCaptchaReady", function (evt) {
        var form = $(evt.parameters.form);
        var captchaSlider = form.find('.wt-captcha__slider-slider');
        var id = form.attr('id');
        var submitButton = form.find('webform-button--submit');
        if (captchaSlider.length > 0) {
          captchaSlider.change(function(event){
            submitButton.removeAttr('disabled');
            captchaStartList[id] = true;
          });
        }
      })
    },
    
  };
})(jQuery, Drupal);
