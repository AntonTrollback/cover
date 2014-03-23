/*
 *  Cover - v1.0.0
 *  jQuery plugin for sizing any element just like `background-size: cover`
 *  https://github.com/antontrollback/cover
 *
 *  Made by Anton Trollbäck
 *  Under MIT License
 */

;(function ($) {

  // Defaults
  var pluginName = "cover";

  // Plugin constructor
  function Cover (element, options) {
    this.$el = $(element);
    this.$container = this.$el.parent();
    this.currentlyFillWidth = false;

    var defaults = {
      ratio: this.$el.height() / this.$el.width(),
      className: 'fill-width'
    }
    this.options = $.extend({}, defaults, options);

    this.set();
  }

  Cover.prototype = {
    set: function () {
      var viewportRatio = this.$container.height() / this.$container.width(),
          fillWidth = this.options.ratio >= viewportRatio;

      if (fillWidth !== this.currentlyFillWidth) {
        if (fillWidth) {
          this.currentlyFillWidth = true;
          this.$el.addClass(this.options.className);
        } else {
          this.currentlyFillWidth = false;
          this.$el.removeClass(this.options.className);
        }
      }
    }
  };

  // Plugin wrapper preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Cover(this, options));
      }

      if (options === 'set') {
        cover = $.data(this, 'plugin_' + pluginName).set();
      }
    });
  };

})(jQuery);