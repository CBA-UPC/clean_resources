(function(w){
  var mappedFields = ["firstname","lastname","jobtitle","company","website","clearbit_industry","company_size","clearbit_street_address","clearbit_city","clearbit_state","clearbit_country","clearbit_postal_code","clearbit_alexa_rank","clearbit_alexa_rank_global","clearbit___tech_tag","clearbit_tech___marketing_automation","clearbit___employee_count","cleartbit___annual_revenue","clearbit___industry_group","clearbit___sub_industry","clearbit___company_tag","clearbit_job_role_v2","clearbit_seniority"];
  var formShorteningEnabled = true;
  if (typeof w.jQuery === "undefined") {
    console.error("Clearbit for HubSpot Error: Cannot find jQuery library loaded on page.");
    return;
  }
  var $ = w.jQuery;

  w.ClearbitForHubspot.formEls = [];

  w.ClearbitForHubspot.initialize = function(){
    while (w.ClearbitForHubspot.forms.length > 0) {
      var form = w.ClearbitForHubspot.forms.pop();
      w.ClearbitForHubspot.onFormReady(form);
    };
  };

  var preventSubmitOnEnter = 

  var shouldShortenField = 

  var onEnterEmail = debounce(function(event){
    var element = event.target;
    var email = element.value;
    if (!email || (email && String(email).length == 0)) {
      return false;
    };

    var emailRegex = /^.+@.+\..+$/;
    if (!(emailRegex.test(String(email)))) {
      return false;
    };

    var hostUrl = "hubspot.clearbit.com/v1";
    var protocol = ("https:" === document.location.protocol ? "https://" : "http://");

    $(element.form)
      .on("keypress", "input", preventSubmitOnEnter)
      .on("click", "input[type=submit]", false);

    var script  = document.createElement("script");
    script.type = "text/javascript";
    script.src  = `${protocol}${hostUrl}/forms/pk_9415c8479821cf16a4d72ed1e72f20ee/person.js?email=${encodeURIComponent(email)}`;
    script.onerror = function() {
      $(element.form)
        .off("keypress", "input", preventSubmitOnEnter)
        .off("click", "input[type=submit]", false);

      if (element.value === email) {
        w.ClearbitForHubspot.onResult(email, {});
      }
    };

    document.body.appendChild(script);
  }, 250);

  w.ClearbitForHubspot.onFormReady = function(formEl){
    var fields = {};
    var inputs = {};

    formEl.querySelectorAll("input.hs-input, select.hs-input, textarea.hs-input").forEach(function(inputEl) {
      var key = inputEl.name;

      var fieldEl = inputEl.closest("div.hs-form-field");
      inputs[key] = inputEl;
      fields[key] = fieldEl;

      if (key == "email") {
        inputEl.addEventListener("input", onEnterEmail);
      } else if (shouldShortenField(key)) {
        fieldEl.style.display = "none";
      }
    });

    w.ClearbitForHubspot.formEls.push({
      form: formEl,
      fields: fields,
      inputs: inputs,
    });
  };

  w.ClearbitForHubspot.onResult = function(email, resultAttributes){
    w.ClearbitForHubspot.formEls.forEach(function(form){
      var emailVal = form.inputs['email'].value;
      if (email !== emailVal) {
        return false;
      };

      var hubspotFormState = getHubSpotFormState(form.form)

      mappedFields.forEach(function(key){
        if (!form.inputs.hasOwnProperty(key)) {
          return false;
        };

        var hubspotField = hubspotFormState.fields[key]

        var input = form.inputs[key],
            $input = $(input);
            $field = $input.closest("div.hs-form-field");

        if (resultAttributes.hasOwnProperty(key)) {
          if (input.type === 'checkbox') {
            $input.
              parents('ul').
              find(":checked").
              trigger('click')

            while (hubspotField.value.length > 0) {
              hubspotField.value.pop();
            }

            $.makeArray(resultAttributes[key]).forEach(function(value) {
              if (hubspotField.field.options.find(function(option) {
                return option.value === value;
              })) {
                hubspotField.errors = []
                hubspotField.value.push(value);

                $input.
                  parents('ul').
                  find("[value='" + value + "']").
                  trigger('click');
              }
            });
          } else if (input.type === 'radio') {
            hubspotField.field.value = '';

            $input.
              parents('ul').
              find(":checked").
              trigger('click')

            $.makeArray(resultAttributes[key]).forEach(function(value) {
              if (hubspotField.field.options.find() {
                hubspotField.errors = []
                hubspotField.value = value;
              }
            });
          } else {
            hubspotFormState.fields[key].value = resultAttributes[key];
            $input.val(resultAttributes[key]);
            $input.change();

            // https://github.com/clearbit/clearbit-x/commit/9790b8dc8a78ca3992d89d2e2eb8afddfd783dc5
            // the jquery focusout/trigger method would not trigger the desired behavior
            // apparently the bubbles param is key
            input.dispatchEvent(new Event('focusout', { bubbles: true }));
          }

          if (shouldShortenField(key)) {
            $field.hide();
          }
        } else {
          if ($input.val() && $input.val() !== ''){
            $input.val('').change();
          }
          $field.show();
        }
      });

      $(form.form)
        .off("keypress", "input", preventSubmitOnEnter)
        .off("click", "input[type=submit]", false);
    });
  };

  
  function debounce(func, time) {
    var timeout;

    return function() {
      var args = arguments;
      var context = this;
      var thisTime = time || 250;

      clearTimeout(timeout);

      timeout = setTimeout( thisTime);
    };
  };

  w.ClearbitForHubspot.initialize()
}(window));
