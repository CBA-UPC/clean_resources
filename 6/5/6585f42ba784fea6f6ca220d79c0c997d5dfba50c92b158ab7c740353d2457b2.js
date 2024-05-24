(function ($) {
  //jQuery time
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches
  var has_response = false;
  var next_clicked = false;

  jQuery(document).ready(function ($) {
    if(typeof next_clicked === 'undefined')
    next_clicked = false;
    if(typeof has_response === 'undefined')
    has_response = false;
    $("form.wpcf7-form").each(function (index, el) {
      var totalFieldset = 0;
      var this_form = $(el);
      var findFieldset = $(el).find("fieldset.fieldset-cf7mls");
      if (findFieldset.length > 0) {
        this_form.addClass('cf7mls')
        $.each(findFieldset, function (i2, el2) {
          if (i2 == 0) {
            $(el2).addClass("cf7mls_current_fs");
          }

          jQuery(el2).attr("data-cf7mls-order", i2);
          totalFieldset = totalFieldset + 1;
          //disable next button if the fieldset has  wpcf7-acceptance
          var acceptances = jQuery(el2).find("input:checkbox.wpcf7-acceptance");
          if (acceptances.length) {
            cf7mls_toggle_next_btn(acceptances, el2);
          }
        });
        $.each(findFieldset, function (i2, el2) {
          if (i2 == totalFieldset - 1) {
            $(el2)
              .find(".cf7mls_next")
              .remove();
          }
        });
        $(el).attr("data-count-fieldset", totalFieldset);
        //on form submit
        if(cf7mls_object.disable_submit == 'true') {
          if (cf7mls_object.disable_enter_key) {
            $(el)
              .find('[type="submit"]')
              .click(function (event) {
                var findFieldset = $(el).find(
                  "fieldset.fieldset-cf7mls.cf7mls_current_fs"
                );
                if (findFieldset.data("cf7mls-order") != totalFieldset - 1) {
                  findFieldset.find(".cf7mls_next").click();
                  return false;
                }
              });
          } else {
            $(el).submit(function (event) {
              var findFieldset = $(el).find(
                "fieldset.fieldset-cf7mls.cf7mls_current_fs"
              );
              if (findFieldset.data("cf7mls-order") != totalFieldset - 1) {
                findFieldset.find(".cf7mls_next").click();
                return false;
              }
            });
          }
        }
      }
    });

    jQuery(document).on(
      "click",
      "form.wpcf7-form input:checkbox.wpcf7-acceptance",
      function (event) {
        //event.preventDefault();
        var $this = jQuery(this);
        var parent_fieldset = $this.closest("fieldset.fieldset-cf7mls");
        if (parent_fieldset.length) {
          var acceptances = jQuery(parent_fieldset).find(
            "input:checkbox.wpcf7-acceptance"
          );
          if (acceptances.length) {
            cf7mls_toggle_next_btn(acceptances, parent_fieldset);
          }
        }
      }
    );

    $(document).on("click", ".cf7mls_next", function (event) {
      if(next_clicked == false) {
        next_clicked = true;
        event.preventDefault();
        var $this = $(this);
        $this.addClass("sending");
        current_fs = $this.closest(".fieldset-cf7mls");
        next_fs = current_fs.next();

        var form = $this.parent().closest("form.wpcf7-form");
        if(form.hasClass("sent")) {
          form.removeClass("sent");
          form.addClass("init");
          form.attr('data-status', 'init');
          if (form.find('.wpcf7-response-output').length) {
            form.find('.wpcf7-response-output').html("");
          }
        }

        //signature fields
        current_fs.find('.wpcf7-form-control-signature-global-wrap').each(function(j, wrapper){
          var f_id = $(wrapper).attr('data-field-id')
          var canvas = $(wrapper).find('canvas')
          if(typeof signatures != 'undefined') {
            $.each(signatures, function(s_i, signature){
              if(signature.canvas.id == canvas.attr('id')) {
                if (!signature.signature.isEmpty()){
                  $('input[name="'+f_id+'"]').val(signature.canvas.toDataURL())
                }else{
                  $('input[name="'+f_id+'"]').val("")
                }
                
              }
            })
          }
        });

        var fd = new FormData(form[0]);
        
        $.ajax({
            url: cf7mls_object.ajax_url + "v1/cf7mls_validation",
            type: "POST",
            crossDomain: true,
            data: fd,
            processData: false,
            contentType: false
          })
          .done(function (json) {
            $this.removeClass("sending");

            /*
            * Insert _form_data_id if 'json variable' has
            */
            if (typeof json._cf7mls_db_form_data_id != "undefined") {
              if (!form.find('input[name="_cf7mls_db_form_data_id"]').length) {
                form.append(
                  '<input type="hidden" name="_cf7mls_db_form_data_id" value="' +
                  json._cf7mls_db_form_data_id +
                  '" />'
                );
              }
            }

            if (!json.success) {
              var checkError = 0;
              var firstError = null;
              //reset error messages
              current_fs
                .find(".wpcf7-form-control-wrap")
                .removeClass("cf7mls-invalid");
              current_fs.find(".cf7mls-invalid").removeClass("cf7mls-invalid");

              current_fs
                .find(".wpcf7-form-control-wrap .wpcf7-not-valid-tip")
                .remove();

              current_fs
                .find(".wpcf7-form-control-wrap .wpcf7-not-valid")
                .removeClass("wpcf7-not-valid");

              if (has_response) {
                current_fs
                  .find(".wpcf7-response-output.wpcf7-validation-errors")
                  .removeClass("wpcf7-validation-errors");
              } else {
                current_fs
                  .find(".wpcf7-response-output.wpcf7-validation-errors")
                  .remove();
              }

              $.each(json.invalid_fields, function (index, el) {
                if (
                  current_fs.find('input[name="' + index + '"]').length ||
                  current_fs.find('input[name="' + index + '[]"]').length ||
                  current_fs.find('select[name="' + index + '"]').length ||
                  current_fs.find('select[name="' + index + '[]"]').length ||
                  current_fs.find('textarea[name="' + index + '"]').length ||
                  current_fs.find('textarea[name="' + index + '[]"]').length ||
                  current_fs.find('input[data-name="' + index + '"]').length ||
                  current_fs.find('input[data-name="' + index + '[]"]').length
                ) {
                  checkError = checkError + 1;

                  //var controlWrap = $('.wpcf7-form-control-wrap.' + index, form);
                  var controlWraps = [
                    $('[name="' + index + '"]', form).parent(),
                    $('[name="' + index + '[]"]', form).parent(),
                    $('[data-name="' + index + '"]', form).parent(),
                    $('[data-name="' + index + '[]"]', form).parent()
                  ];
                  $.each(controlWraps, function (i1, e1) {
                    if(e1.hasClass("wpcf7-form-control-wrap") || e1.parents(".wpcf7-form-control-wrap").length || e1.parents(".wpcf7-checkbox").length || e1.parents(".wpcf7-radio").length) {
                      var _c = "wpcf7-not-valid-tip";
                      if (e1.hasClass("form-group")) {
                        e1.addClass("has-error");
                        _c += " help-block";
                      }
                      if(firstError === null) {
                        firstError = e1;
                      }
                      e1.addClass("cf7mls-invalid");
                      e1.find("span.wpcf7-not-valid-tip").remove();
                      e1.find(".wpcf7-validates-as-required").addClass(
                        "wpcf7-not-valid"
                      );

                      if (e1.parents(".wpcf7-checkbox").length) {
                        e1.parents(".wpcf7-checkbox").after(
                          '<span role="alert" class="' +
                          _c +
                          '">' +
                          el.reason +
                          "</span>"
                        );
                      } else if (e1.parents(".wpcf7-radio").length) {
                        e1.parents(".wpcf7-radio").after(
                          '<span role="alert" class="' +
                          _c +
                          '">' +
                          el.reason +
                          "</span>"
                        );
                      } else if (e1.parents(".wpcf7-form-control-wrap").length) {
                        e1.parents(".wpcf7-form-control-wrap").append(
                          '<span role="alert" class="' +
                          _c +
                          '">' +
                          el.reason +
                          "</span>"
                        );
                      } else {
                        e1.append(
                          '<span role="alert" class="' +
                          _c +
                          '">' +
                          el.reason +
                          "</span>"
                        );
                      }
                    }
                  });

                  //return false;
                }
              });

              if (checkError == 0) {
                json.success = true;
                has_response = false;
                // jQuery("html, body").animate(
                //   {
                //     scrollTop: jQuery($this.closest("form")).offset().top - 110
                //   },
                //   1000
                // );
              } else {
                $('html, body').animate({
                  scrollTop: $(firstError).offset().top - 100
                }, 500);
                if (current_fs.find(".wpcf7-response-output").length) {
                  has_response = true;
                  $icon = '';
                  $icon += '<svg class="wpcf7-icon-wraning" width="18px" height="18px" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">';
                  $icon += '<g><path d="M499.9,361.6c-12.7,0-23,10.3-23,23v352.2c0,12.7,10.3,23,23,23s23-10.3,23-23V384.6C522.9,371.9,512.6,361.6,499.9,361.6z"/>';
                  $icon += '<path d="M500.1,240.2c-12.7,0-23,10.3-23,23v30.6c0,12.7,10.3,23,23,23c12.7,0,23-10.3,23-23v-30.6C523.1,250.5,512.8,240.2,500.1,240.2z"/>';
                  $icon += '<path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M500,944.1C254.8,944.1,55.9,745.2,55.9,500C55.9,254.8,254.8,55.9,500,55.9S944.1,254.8,944.1,500C944.1,745.2,745.2,944.1,500,944.1z"/></g></svg>';
                  current_fs
                    .find(".wpcf7-response-output")
                    .addClass("wpcf7-validation-errors")
                    .show()
                    .html($icon + json.message);
                } else {
                  has_response = false;
                  $icon = '';
                  $icon += '<svg class="wpcf7-icon-wraning" width="18px" height="18px" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">';
                  $icon += '<g><path d="M499.9,361.6c-12.7,0-23,10.3-23,23v352.2c0,12.7,10.3,23,23,23s23-10.3,23-23V384.6C522.9,371.9,512.6,361.6,499.9,361.6z"/>';
                  $icon += '<path d="M500.1,240.2c-12.7,0-23,10.3-23,23v30.6c0,12.7,10.3,23,23,23c12.7,0,23-10.3,23-23v-30.6C523.1,250.5,512.8,240.2,500.1,240.2z"/>';
                  $icon += '<path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M500,944.1C254.8,944.1,55.9,745.2,55.9,500C55.9,254.8,254.8,55.9,500,55.9S944.1,254.8,944.1,500C944.1,745.2,745.2,944.1,500,944.1z"/></g></svg>';

                  current_fs.append(
                    '<div class="wpcf7-response-output wpcf7-display-none wpcf7-validation-errors" style="display: block;" role="alert">' + $icon + 
                      json.message +
                    "</div>"
                  );
                }
              }
            }

            if (json.success) {
              /*
                      current_fs.fadeOut('400', function() {
                          next_fs.fadeIn('400');
                      });
                      
                      });
                      */

              //reset error messages
              current_fs
                .find(".wpcf7-form-control-wrap")
                .removeClass("cf7mls-invalid");
              current_fs.find(".cf7mls-invalid").removeClass("cf7mls-invalid");
              current_fs.find(".wpcf7-not-valid").removeClass("wpcf7-not-valid");
              current_fs
                .find(".wpcf7-form-control-wrap .wpcf7-not-valid-tip")
                .remove();

              /*
              * Instead of hiding current fs, we hide all
              */
              /*
                      current_fs.css({
                          height: '0px',
                          overflow: 'hidden',
                          opacity: '0',
                          'visibility': 'hidden'
                      }).removeClass('cf7mls_current_fs');
                      */

              form.find(".cf7mls_current_fs").addClass("cf7mls_back_fs");

              form.find(".fieldset-cf7mls").removeClass("cf7mls_current_fs");

              next_fs.addClass("cf7mls_current_fs");
              next_fs.find('input, textarea').first().focus();
              
              if (form.find(".cf7mls_progress_bar").length) {
                let allow_choose_step =  form.find('.cf7mls_progress_bar').attr('data-allow-choose-step');
                let order_cur = Number(form.find('fieldset.cf7mls-choose-step').attr('data-cf7mls-order'));
                let step_cur = Number(form.find(".cf7mls_progress_bar li.current").attr('data-counter')) - 1;
                
                // allow choose step
                if(allow_choose_step === 'on') {
                  form.find('fieldset.fieldset-cf7mls').css({display: ''});
                  form.find("fieldset.fieldset-cf7mls").removeClass("cf7mls-choose-step");
                }

                if((allow_choose_step === 'on') && 
                  ((order_cur !== step_cur) && ((order_cur === 0) || order_cur))
                ) {
                  form.find("fieldset.fieldset-cf7mls").removeClass("cf7mls_back_fs");
                  form.find("fieldset.fieldset-cf7mls").removeClass("cf7mls_current_fs");

                  form.find('fieldset.fieldset-cf7mls').each(function( index, el ) {
                    if(index > step_cur) {
                      return;
                    }
                    $(el).addClass("cf7mls_back_fs");
                    if(index === step_cur) {
                      $(el).removeClass("cf7mls_back_fs");
                      $(el).addClass("cf7mls_current_fs");
                    }
                  });
                }else {
                  var cur = form.find("fieldset.fieldset-cf7mls").index(current_fs);
                  var nex = form.find("fieldset.fieldset-cf7mls").index(next_fs);
                  // if(cf7mls_object.is_rtl == '1') {
                  //   cur = 0 - cur
                  //   nex = 0 - nex
                  // }
                }
              }
              
              dhScrollTo(form);
              return false;
            } else {}
            next_clicked = false;
          })
          .fail(function () {
            $this.removeClass("sending");
            next_clicked = false;
            // console.log("Validation error");
          })
          .always(;

        return false;
      }
    });

    $(document).on("click", ".cf7mls_back", function (event) {
      var $this = $(this);
      var form = $this.parent().closest("form.wpcf7-form");

      $(".wpcf7-response-output.wpcf7-display-none")
        .removeClass("wpcf7-validation-errors")
        .removeAttr("style")
        .html("");
      $(".wpcf7-response-output.wpcf7-display-none.wpcf7-mail-sent-ok").hide();

      current_fs = $this.closest(".fieldset-cf7mls");
      previous_fs = current_fs.prev();

      //reset error messages
      current_fs.find(".wpcf7-form-control-wrap").removeClass("cf7mls-invalid");
      current_fs.find(".cf7mls-invalid").removeClass("cf7mls-invalid");
      current_fs.find(".wpcf7-not-valid").removeClass("wpcf7-not-valid");
      current_fs.find(".wpcf7-form-control-wrap .wpcf7-not-valid-tip").remove();

      /*
       * Instead of hide current fs, we hide all
       */
      /*current_fs.css({
                height: '0px',
                overflow: 'hidden',
                opacity: '0',
                'visibility': 'hidden'
            }).removeClass('cf7mls_current_fs');*/
      form.find(".fieldset-cf7mls").removeClass("cf7mls_current_fs");

      previous_fs.addClass("cf7mls_current_fs").removeClass("cf7mls_back_fs");

      dhScrollTo(form);
      return false;
    });

    $(document).on("click", ".cf7mls-auto-next-step", function (event) {
      var $this = $(this);
      if($this.is("input")) {
        $(document).on("change", $this, function (event) {
          var currentFieldSet = $this.parent().closest("fieldset.fieldset-cf7mls");
          $(currentFieldSet).find( ".cf7mls_next" ).trigger('click');
        });
      }else {
        var currentFieldSet = $this.parent().closest("fieldset.fieldset-cf7mls");
        $(currentFieldSet).find( ".cf7mls_next" ).trigger('click');
      }
      
    });

    $(document).on("wpcf7mailsent", ".wpcf7-form.cf7mls-auto-return-first-step", function (event) {
      $(this).find(".fieldset-cf7mls-wrapper fieldset.fieldset-cf7mls").each(function(index) {
        if($(this).hasClass('cf7mls_back_fs')) {
          $(this).removeClass('cf7mls_back_fs');
        }
        
        if(index != 0) {
          if($(this).hasClass('cf7mls_current_fs')) {
            $(this).removeClass('cf7mls_current_fs');
          }
        } else {
          if(!$(this).hasClass('cf7mls_current_fs')) {
            $(this).addClass('cf7mls_current_fs');
          }
        }
      });
    });

    function dhScrollTo(el) {
      if (el.find(".fieldset-cf7mls-wrapper.no-scroll").length || el.hasClass('cf7mls-no-scroll')) {
        return;
      }
      if (cf7mls_object.scroll_step == "true") {
        $("html, body").animate({
            scrollTop: el.offset().top - 110
          },
          "slow"
        );
      } else if (cf7mls_object.scroll_step == "scroll_to_top") {
        $("html, body").animate({
            scrollTop: $("body").offset().top - 110
          },
          "slow"
        );
      }
    }

    function cf7mls_toggle_next_btn(acceptances, fieldset) {
      if (acceptances.length > 0) {
        var ii = 0;
        $.each(acceptances, function (i, v) {
          if ($(v).is(":checked")) {
            //console.log('checked');
          } else {
            ii++;
          }
        });
        if (ii > 0) {
          //console.log(ii);
          $(fieldset)
            .find(".cf7mls_next")
            .attr("disabled", "disabled");
        } else {
          $(fieldset)
            .find(".cf7mls_next")
            .removeAttr("disabled");
        }
      }
    }
  });

  

})(jQuery);