"use strict";
!(function (t) {
    function e(e) {
        (this.input = e),
            "password" == e.attr("type") && this.handlePassword(),
            t(e[0].form).submit(function () {
                e.hasClass("placeholder") && e[0].value == e.attr("placeholder") && (e[0].value = "");
            });
    }
    e.prototype = {
        show: function (t) {
            if ("" === this.input[0].value || (t && this.valueIsPlaceholder())) {
                if (this.isPassword)
                    try {
                        this.input[0].setAttribute("type", "text");
                    } catch (t) {
                        this.input.before(this.fakePassword.show()).hide();
                    }
                this.input.addClass("placeholder"), (this.input[0].value = this.input.attr("placeholder"));
            }
        },
        hide: function () {
            if (this.valueIsPlaceholder() && this.input.hasClass("placeholder") && (this.input.removeClass("placeholder"), (this.input[0].value = ""), this.isPassword)) {
                try {
                    this.input[0].setAttribute("type", "password");
                } catch (t) {}
                this.input.show(), this.input[0].focus();
            }
        },
        valueIsPlaceholder: function () {
            return this.input[0].value == this.input.attr("placeholder");
        },
        handlePassword: function () {
            var e = this.input;
            if ((e.attr("realType", "password"), (this.isPassword = !0), t.browser.msie && e[0].outerHTML)) {
                var s = t(e[0].outerHTML.replace(/type=(['"])?password\1/gi, "type=$1text$1"));
                (this.fakePassword = s
                    .val(e.attr("placeholder"))
                    .addClass("placeholder")
                    .focus(function () {
                        e.trigger("focus"), t(this).hide();
                    })),
                    t(e[0].form).submit(function () {
                        s.remove(), e.show();
                    });
            }
        },
    };
    var s = !!("placeholder" in document.createElement("input"));
    t.fn.placeholder = function () {
        return s
            ? this
            : this.each(function () {
                  var s = t(this),
                      i = new e(s);
                  i.show(!0),
                      s.focus(function () {
                          i.hide();
                      }),
                      s.blur(function () {
                          i.show(!1);
                      }),
                      t.browser.msie &&
                          (t(window).load(function () {
                              s.val() && s.removeClass("placeholder"), i.show(!0);
                          }),
                          s.focus(function () {
                              if ("" == this.value) {
                                  var t = this.createTextRange();
                                  t.collapse(!0), t.moveStart("character", 0), t.select();
                              }
                          }));
              });
    };
})(jQuery);
