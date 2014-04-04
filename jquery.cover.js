/**
 * Cover - v1.0.0
 * jQuery plugin for sizing any element just like `background-size: cover`
 * https://github.com/antontrollback/cover
 *
 * Anton Trollbäck - @antontrollback
 * MIT License
 */

;(function ($) {

  var pluginName = "cover";

  function Cover (element, options) {
    this.element = $(element);
    this.currentlyFillWidth = false;

    $.extend(this, {
      className: 'fill-width',
      container: this.element.parent(),
      ratio: this.element.height() / this.element.width()
    }, options);

    this.set();
  }

  Cover.prototype = {
    set: function () {
      var containerRatio = this.container.height() / this.container.width(),
          fillWidth = this.ratio >= containerRatio;

      if (fillWidth !== this.currentlyFillWidth) {
        if (fillWidth) {
          this.currentlyFillWidth = true;
          this.element.addClass(this.className);
        } else {
          this.currentlyFillWidth = false;
          this.element.removeClass(this.className);
        }
      }
    }
  };

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
