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
  function Cover (element, ratio) {
    this.element = element;
    this.ratio = ratio;
    this.init();
  }

  Cover.prototype = {
    init: function () {
      this.currentlyFillWidth = false;
      this.$el = $(this.element);
      this.$container = this.$el.parent();

      this.set();
    },
    set: function () {
      var viewportRatio = this.$container.height() / this.$container.width(),
          fillWidth = this.ratio >= viewportRatio;

      if (fillWidth !== this.currentlyFillWidth) {
        if (fillWidth) {
          this.currentlyFillWidth = true;
          this.$el.addClass('fill-width');
        } else {
          this.currentlyFillWidth = false;
          this.$el.removeClass('fill-width');
        }
      }
    }
  };

  // Plugin wrapper preventing against multiple instantiations
  $.fn[pluginName] = function (args) {
    return this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Cover(this, args));
      }

      if (args === 'set') {
        cover = $.data(this, 'plugin_' + pluginName).set();
      }
    });
  };

})(jQuery);