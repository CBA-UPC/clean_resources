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
 * you're going to have to update the code that uses this library as well.
 * It's all wrapped up in a function called `atCompleteInit`.
 */


(function() {
  (function(factory) {
    if (typeof define === 'function' && define.amd) {
      return define(['jquery'], factory);
    } else {
      return factory(window.jQuery);
    }
  })(function($) {
    "use strict";
    ////var EditableCaret, InputCaret, Mirror, Utils, methods, pluginName;
    var EditableCaret, InputCaret, Mirror, Utils, methods, pluginName, cWin;

    pluginName = 'caret';
    EditableCaret = (function() {
      function EditableCaret($inputor) {
        this.$inputor = $inputor;
        this.det.prototype.setPos = function(pos) {
        return this.domInputor;
      };

      EditableCaret.prototype.getIEPosition = function() {
        return $.noop();
      };

      EditableCaret.prototype.getPosition = function() {
 "EndToEnd", textRange);
        return preCaretTextRange.text.length;
      };

      EditableCaret.prototype.getPos = function() {
        var clonedRange, pos, range;

        if (range = this.range()) {
          clonedRange = range.cloneRange();
          clonedRange.selectNodeContents(this.domInputor);
          clonedRange.setEnd(range.endContainer, range.endOffset);
          pos = clonedRange.toString().length;
          clonedRange.detach();
          return pos;
        } else if (document.selection) {
          return this.getOct.top,
          left: rect.left,
         ;
        }
        return Utils.adjustO sel.getRangeAt(0);
        } else {
          return null;: y,
          hei.$mirror.remove();
        return rect(window).scrollLeft() + nputor[0].contentEditable && $inputPos(pos);
      );
        } else {
          return this.getPosition(pos);
        }
      },
      offset: function(pos) {
        return this.getOffset(.error("Method " + method + " does not exist on jQuery.caret");
      }
    };
    $.fn.caret.EditableCaret = EditableCaret;
    $.fn.caret.InputCaret = InputCaret;
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
    var $CONTAINER, Api, App, Atwho, Controllers = {};
        this.$inputor =ction(at) {
        return this.controll= function(at) {
        thiler;
        }
        controller.init(setting);
        return this;
      };

      App.prototype.listen = function() {
        var _this = this;
        return this.$inputor.on('keyup.atwho', function(e) {
          return _this.on_keyup(e);
        }).on('keydown.atwho', funcrn (_ref = _this.c      return c.view.hide(c.get_opt("display          return _this.set_context_for(c.at);
          }
        });
      };

      App.prototype.on_keyup = function(e) {
        var _ref;
        switch (e.keyCode) {
          case KEY_CODE.ESC:
          case KEY_CODE.TAB:
          case KEY_CODE.ENTER:
            e.preventDefault();
            if ((_ref = this.controller()) != null) {
              _ref.view.hide();
            }
            break;
          case KEY_CODE.DOWN:
          case KEY_CODE.UP:
            $.noop();
            break;
          default:
            this.dispatch();
        }
      };

      App.prototype.on_keydown = function(e) {
        var view, _ref;
        view = (_ref = this.controller()) != null ? _ref.view : void 0;
        if (!(view && view.visible())) {
          return;
        }
        switch (e.keyCode) {
          case KEY_CODE.ESC:
            e.preventDefault();
            view.hide();
            break;
          case KEY_CODE.UP:
            e.preventDefault();
            view.prev();
            break;
          case KEY_CODE.DOWN:
            e.preventDefault();
            view.next();
            break;
          case KEY_CODE.TAB:
          case KEY_CODE.ENTER:
            if (!view.visible()) {
              return;
            }
            e.preventDefault();
            view.choose();
            break;
          default:
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
          return null;
        }
      };

      Controller.prototype.content = function() {
        if (this.$inputor.is('textarea, input')) {
          return this.$inputor.val();
        } else {
          return this.$inputor.text();
        }
      };

      Controller.prototype.catch_query = function() {
        var caret_pos, content, end, query, start, subtext;
        content = this.content();
        ////caret_pos = this.$inputor.caret('pos');
        caret_pos = this.$inputor.caret('pos', this.setting.cWindow);
        subtext = content.slice(0, caret_pos);
        query = this.callbacks("matcher").call(this, this.at, subtext, this.get_opt('start_with_space'));
        if (typeof query === "string" && query.length <= this.get_opt('max_len', 20)) {
          start = caret_pos - query.length;
          end = start + query.length;
          this.pos = start;
          query = {
            'text': query.toLowerCase(),
            'head_pos': start,
            'end_pos': end
          };
          this.trigger("matched", [this.at, query.text]);
        } else {
          this.view.hide();
        }
 : c.top,
          bottom: c.top + c.heighable') === 'true') {
          return this
        return this.range = this.get_rangerototype.clear_range = function() {
        return this.range = null;
      };

      Controller.prototype.get_range = function() {
        ////return this.range || (window.getSelection ? window.getSelection().getRangeAt(0) : void 0);


         var thisWin = this.setting.cWindow;
         //////return this.range || (thisWin.getSelection ? thisWin.getSelection().getRangeAt(0) : void 0);
         return thisWin.getSelection ? thisWin.getSelection().getRangeAt(0) : || (document.selection ? document.selection.creat });
        return this.callbacks("tpl_eval").call(this, tpl, data);
      };

      Controller.prototype.insert = function(content, $li) {
        ////var $inputor, $insert_node, class_name, content_node, insert_node, pos, range, sel, source, start_str, text;

        //////////var $inputor, $insert_node, class_name, content_node, insert_node, pos, range, sel, source, start_str, text, thisWin;
        var $inputor, $insert_node, class_name, content_editable, content_node, insert_node, pos, range, sel, source, start_str, text;
        $inputor = this.$inputor;

        if ($inputor.attr('contentEditable') === 'true') {
          //////////
          content_editable = '' + /firefox/i.test(navigator.userAgent);

          //class_name = "atwho-view-flag atwho-view-flag-" + (this.get_opt('alias') || this.at);
          class_name = "vanilla-mention-" + (this.get_opt('alias') || this.at);
          //////////content_node = "" + content + "<span contenteditable='false'>&nbsp;<span>";
          //////////insert_node = "<span contenteditable='false' class='" + class_name + "'>" + content_node + "</span>";
          //content_node = ("" + content + "<span contenteditable='") + content_editable + "'>&nbsp;<span>";
          content_node = "" + content + "&nbsp;";
          //content_node = "" + content;

          //insert_node = "<span contenteditable='" + content_editable + ("' class='" + class_name + "'>" + content_node + "</span>");
          insert_node = '<span class="' + class_name + '">' + content_node + '</span>';

          $insert_node = $(insert_node).data('atwho-data-item', $li.data('item-data'));
          if (document.selection) {
            $insert_node = $("<span contenteditable='true'></span>").html($insert_node);
          }
        }

        if ($inputor.is('textarea, input')) {
          content = '' + content;
          source = $inputor.val();
          start_str = source.slice(0, Math.max(this.query.head_pos - this.at.length, 0));
          text = "" + start_str + content + " " + (source.slice(this.query['end_pos'] || 0));
          $inputor.val(text);
          ////$inputor.caret('pos', start_str.length + content.length + 1);
          $inputor.caret('pos', this.setting.cWindow, start_str.length + content.length + 1);
        } else if (range = this.get_range()) {
          ////
          thisWin = this.setting.cWindow;

          pos = range.startOffset - (this.query.end_pos - this.query.head_pos) - this.at.length;
          range.setStart(range.endContainer, Math.max(pos, 0));
          range.setEnd(range.endContainer, range.endOffset);
          range.deleteContents();
          range.insertNode($insert_node[0]);
          range.collapse(false);

          ////sel = window.getSelection();
          sel = thisWin.getSelection();

          sel.removeAllRanges();
          sel.addRange(range);
        } else if (range = this.get_ie_range()) {
          range.moveStart('character', this.query.end_pos - this.query.head_pos - this.at.length);
          ///////
          range.pasteHTML($insert_node[0]);
          range.collapse(false);
          range.select();
        }
        $inputor.focus();
              return this.view.render(data.sliel.query(query.text, $.proxy(_callback, this));
          return this.save(data);
             this.context.$el.appe   return this.$el.attr({
          'id': "at-view-" + id
        });
      };

      View.prototype.bind_event = function() {
        var $menu,
          _this = this;
       eClass('cur')e) {
          _this.choose();
          return e.preventDefault();
        });
        return this.$el.on('mouseenter.atwho-view', 'ul', function(e) {
          re, 'ul', function(e) {
          return _thitotype.visible = function() {
        return this.$el.is(":visible");
      };

      View.prototype.choose = function() {
        var $li, content;
        $li = this.$el.find(".cur");
        content = this.context.insert_content_for($li);
        this.context.insert(this.context.callbacks("before_insert").call(this.context, content, $li), $li);
        this.context.trigger("inserted", [$offset);
        return this.context.trigger("reposition", [offset]);
      };

      View.prototype.next = function() {
        var cur, next;
        cur = this.$el.find('.cur').removeClass('cur');
        next = cur.next();
        if (!next.length) {
          next = this.$el.find('li:first');
       s.$el.find('li:last');
       s.context.rect()) {
                 return this.timeout_id =     this.show();
        return $ul.find("li:first").addClass("cur");
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
