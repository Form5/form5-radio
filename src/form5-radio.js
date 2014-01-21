
(function () {
  'use strict';
  var pluginName = 'radio',
    defaults = {
      toggle: function () {},
      init: function () {},
      debug: false
    };

  $[pluginName] = function (element, options) {
    this.element = element;
    this.el = {
      radio: $(element)
    };

    this.options = $.extend({}, defaults, options);
    this.debug = this.options.debug;

    this._defaults = defaults;
    this._name = pluginName;

    var initCB = $.Callbacks('stopOnFalse');
    initCB.add($.proxy(this.initialize,this));
    if (typeof this.options.init === 'function') {
      initCB.add($.proxy(this.options.init,this));
    }
    initCB.fire();
  };

  $[pluginName].prototype = {
    initialize: function () {
      if (this.debug) console.log('initialize()', this);

      this.createElements();
      this.compile();
      this.attachEvents();
    },

    createElements: function () {
      this.el.wrap = $('<radio />');

      if (this.debug) this.el.wrap.attr('debug',true);

      $.each(this.el.radio.prop('attributes'),$.proxy(function(index,item) {
        this.el.wrap.attr(item.name, item.value);
      },this));
    },

    compile: function (){
      this.el.radio.before(this.el.wrap);
      this.el.wrap.append(this.el.radio);
    },

    attachEvents: function (){

      this.el.wrap.on('click',$.proxy(function(){
        if (this.debug) console.log('check new radio button');

        $('radio[name="'+this.el.wrap.attr('name')+'"]').attr('checked',false);
        this.el.radio.prop('checked',true);
        this.el.wrap.attr('checked',true);

        if (typeof this.options.toggle === 'function') {
          this.options.toggle(this.el.wrap);
        }
      },this));
    },

    destroy: function (){
      if (this.debug) console.log('destroying radio',this);

      this.el.radio.detach().insertAfter(this.el.wrap);
      this.el.wrap.remove();
    }
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$(this).data(pluginName)) {
        if (options === 'destroy') return;
        $(this).data(pluginName, new $[pluginName](this, options));
      } else {
        var $form5Radio = $(this).data(pluginName);
        switch (options) {
          case 'destroy':
            $form5Radio.destroy();
            $(this).removeData(pluginName);
            break;
          default:
            return;
        }
      }
    });
  };

}).call(this);