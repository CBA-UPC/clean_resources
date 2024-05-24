/*
  Implement Github like autocomplete mentions
  http://ichord.github.com/At.js

  Copyright (c) 2013 chord.luo@gmail.com
  Licensed under the MIT license.
*/


/*
本插件操作 textarea 或者 input 内的插入符
只实现了获得插入符在文本框中的位置，我设置
插入符的位置.
*/

/**
 * --------------------
 * Vanilla Forums NOTE:
 * --------------------
 *
 * This file has been highly modified to work with iframes, as well
 * as custom username handling with quotation marks and spaces for Vanilla.
 * Do not just replace with a more current version. At the time of
 * development there was no support for iframes, or spaces in names.
 * This may have changed, so if you do decide to upgrade this library,
 * you're going to have to update the code that uses this library 
    $.fn.caret.Utils = Utils;
    return $.fn.caret.apis = methods;
  });

}).call(this);


/*
  Implement Github like autocomplete mentions
  http://ichord.github.com/At.js

  Copyright (c) 2013 chord.luo@gmail.com
  Licuery'], factory);
    } else {
      return factory(window.jQuery);
    }
  })(function($) {
    var $CONTAINER, Api,  default:
            $.noop();
        }
      };

      return App;

    })();
    Cont     _uuid = 0;

      uuid = function() {
        return _uuid += 1;
      };

      function Controller(app, at) {
        this.app = app;
        this.at = at;
        this.$inputor = this.app.$inputor;
        this.id = this.$inputor[0].id || uuid();
        this.setting = null;
        this.query = null;
        this.pos = 0;
        this.cur_rect = null;
        this.range = null;
        $CONTAINER.append(this.$el = $("<div id='atwho-ground-" + this.id + "'></div>"));
        this.model = new Model(this);
 his.view.init();
        return this.model.ror + " Or maybe At.js doesn't have funce + ".atwho";
        return this.$inputothis.get_opt("callbacks")[func_name] ||s.setting[at];
        } catch (e) {
    result.content = textNode.text();
              this.view.hide();
        }
 : c.top,
          bottom: c.top + c.heighable') === 'true') {
          return this
        return this.range = this.get_rangerototype.clear_range = function() {
     0);
        } else {
          return this.r || (document.selection ? document.selection.creat });
        return this.callbacks("tp        }
        $inputor.focus();
              return this.view.render(data.sliel.query(query.text, $.proxy(_callback, this));
          return thurn $ul.find("li:first").addClass("cur");
      };

      return View;

    })();
    KEY_CODE = {
      DOWN: 40,
      UP: 38,
      ESC: 27,
    : item
         tch[2] || match  _results.push(item);
          }
       n(a, b) {
                });
       rn '> ' + $1 + '<stron },
      before_insert: functithis.controller(at)) {
             }
          return data;
        });
        return [ids, items];
      },
      getInsertedItems: function(at) {
        return Apit) {
       [0];
      },
      run: function
        }
        app.reg(options.at, options);
        return this;
      }
  ist on jQuery.caret");
        }
      });
      return result || this;
    };
    return $.fn.atwho["default"] = {
      at: void 0,
      alias: void 0,
      data: null,
      tpl: "<li data-value='${atwho-at}${name}'>${name}</li>",
      insert_tpl: "<span>${atwho-data-value}</span>",
      callbacks: DEFAULT_CALLBACKS,
      search_key: "name",
      start_with_space: true,
      limit: 5,
      max_len: 20,
      display_timeout: 300,
      ////
      cWindow: window
    };
  });

}).call(this);
