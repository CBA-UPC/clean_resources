/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);
n": "italiaonline.web.business.ioladm",
            "v": "^\\/business\\/ioladm\\/"
        },
        {
            "t": "url",
            "n": "italiaonline.web.business.sitiweb.vetrina.contratto",
            "v": "\\/business\\/siti-web\\/sito-fai-da-te\\/\\?[a-zA-Z0-9&=%]*hide=true"
        },
        {
            "t": "path",
            "n": "italiaonline.web.business.sitiweb.vetrina.others",
            "v": "\\/business\\/siti-web\\/sito-fai-da-te\\/"
        },
        {
            "t": "path",
            "n": "italiaonline.web.business.sitiweb.others",
            "v": "^\\/business\\/siti-web\\/"
        },
        {
            "t": "path",
            "n": "italiaonline.web.business.ecommerce",
            "v": "^\\/business\\/ecommerce\\/"
        },
        {
            "t": "path",
            "n": "italiaonline.web.business.scheda-gratis",
            "v": "^\\/business\\/scheda-gratis\\/"
        },
        {
            "t": "path",
            "n": "italiaonline.web.business.contatti",
            "v": "^\\/business\\/contatti\\/"
        },
        {
            "t": "path",
            "n": "italiaonline.web.business.crm",
            "v": "^\\/business\\/crm"
        },
        {
            "t": "path",
            "n": "italiaonline.web.aiuto.others",
            "v": "^\\/aiuto\\/"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.step2",
            "v": "provisStep2"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.step3",
            "v": "provisStep3"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.step4",
            "v": "provisStep4"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.step5",
            "v": "provisStep5"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.step6",
            "v": "provisStep6"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.step7",
            "v": "provisStep7"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.step1",
            "v": "^\\/provisioning\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.risorse.eventi.hp",
            "v": "^\\/risorse\\/eventi\\/"
        },
        {
            "t": "dom",
            "n": "italiaonline.web.risorse.eventi.articolo",
            "v": "\"name\":\"Eventi\"",
            "id": "ld-breadcrumb"
        },
        {
            "t": "path",
            "n": "italiaonline.web.risorse.bandi.hp",
            "v": "^\\/risorse\\/bandi\\/"
        },
        {
            "t": "dom",
            "n": "italiaonline.web.risorse.bandi.articolo",
            "v": "\"name\":\"Bandi e Finanza\"",
            "id": "ld-breadcrumb"
        },
        {
            "t": "path",
            "n": "italiaonline.web.risorse.guide.hp",
            "v": "^\\/risorse\\/guide\\/"
        },
        {
            "t": "dom",
            "n": "italiaonline.web.risorse.guide.articolo",
            "v": "\"name\":\"Guide\"",
            "id": "ld-breadcrumb"
        },
        {
            "t": "path",
            "n": "italiaonline.web.risorse.blog.hp",
            "v": "^\\/risorse\\/blog\\/"
        },
        {
            "t": "dom",
            "n": "italiaonline.web.risorse.blog.articolo",
            "v": "\"name\":\"Blog\"",
            "id": "ld-breadcrumb"
        },
        {
            "t": "path",
            "n": "italiaonline.web.risorse.hp",
            "v": "^\\/risorse\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.risorse.others",
            "v": "^\\/risorse\\/"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.basket.register",
            "v": "register"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.basket.pay",
            "v": "pay"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.basket.confirm",
            "v": "confirm"
        },
        {
            "t": "path",
            "n": "italiaonline.web.basket.hp",
            "v": "^\\/basket\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.basket.others",
            "v": "^\\/basket\\/"
        },
        {
            "t": "path",
            "n": "italiaonline.web.corporate.others",
            "v": "^\\/corporate\\/"
        },
        {
            "t": "path",
            "n": "italiaonline.web.web-agency.others",
            "v": "^\\/web-agency\\/"
        },
        {
            "t": "path",
            "n": "italiaonline.web.iol_advertising.others",
            "v": "^\\/iol-advertising\\/"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.pgcasa_step1",
            "v": "\\/casaStep1"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.pgcasa_step2",
            "v": "\\/casaStep2"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.pgcasa_step3",
            "v": "\\/casaStep3"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.pgcasa_step4",
            "v": "\\/casaStep4"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.pgcasa_step5",
            "v": "\\/casaStep5"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.pgcasa_step6",
            "v": "\\/casaStep6"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.provisioning.pgcasa_step7",
            "v": "\\/casaStep7"
        },
        {
            "t": "path",
            "n": "italiaonline.web.promozioni.others",
            "v": "^\\/promozioni\\/"
        },
        {
            "t": "path",
            "n": "italiaonline.web.contattaci.others",
            "v": "^\\/contattaci\\/"
        },
        {
            "t": "hash",
            "n": "italiaonline.web.business.registrazione.step1_client_identification",
            "v": "\\/regStep1"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgcasa.snodo",
            "v": "^\\/self\\/pgcasa\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgcasa.categorie",
            "v": "^\\/self\\/pgcasa\\/categorie\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgcasa.province",
            "v": "^\\/self\\/pgcasa\\/province\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgcasa.dati",
            "v": "^\\/self\\/pgcasa\\/dati\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgcasa.contatti",
            "v": "^\\/self\\/pgcasa\\/contatti\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgcasa.registrazione",
            "v": "^\\/self\\/pgcasa\\/registrazione\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgcasa.verifica",
            "v": "^\\/self\\/pgcasa\\/verifica\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgcasa.conferma",
            "v": "^\\/self\\/pgcasa\\/conferma\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.promozioni_pagine_gialle_casa_a",
            "v": "^\\/promozioni-pagine-gialle-casa-a\\/"
        },
        {
            "t": "path",
            "n": "italiaonline.web.promozioni_pagine_gialle_casa_b",
            "v": "^\\/promozioni-pagine-gialle-casa-b\\/"
        },
        {
            "t": "path",
            "n": "italiaonline.web.servizi.paginegialle_casa",
            "v": "^\\/servizi\\/paginegialle-casa\\/"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgit.crea_profilo_azienda",
            "v": "^\\/self\\/pgit\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgit.contatti",
            "v": "^\\/self\\/pgit\\/contatti\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgit.indirizzo",
            "v": "^\\/self\\/pgit\\/indirizzo\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgit.registrazione",
            "v": "^\\/self\\/pgit\\/registrazione\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgit.verifica",
            "v": "^\\/self\\/pgit\\/verifica\\/?$"
        },
        {
            "t": "path",
            "n": "italiaonline.web.provisioning.pgit.conferma",
            "v": "^\\/self\\/pgit\\/conferma\\/?$"
        }
    ]
};