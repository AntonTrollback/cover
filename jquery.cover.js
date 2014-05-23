/*! Cover v1.1.0 | MIT License | github.com/antontrollback/cover */

;(function ($) {

  var pluginName = "cover";

  function Cover (element, options) {
    this.element = $(element);

    $.extend(this, {
      container: this.element.parent(),
      ratio: this.element.height() / this.element.width()
    }, options);

    this.set();
  }

  Cover.prototype = {
    set: function () {
      var height = this.container.height();
      var width = this.container.width();
      var shouldFillWidth = this.ratio >= (height / width);

      if (shouldFillWidth) {
        if (!this.fillingWidth) {
          this.element.css('width', '100%').css('height', 'auto');
          this.fillingWidth = true;
        }
      } else {
        if (this.fillingWidth) {
          this.element.css('width', 'auto').css('height', '100%');
          this.fillingWidth = false;
        }
      }
    }
  };

  // Wrapper preventing multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Cover(this, options));
      }

      // Allow access to 'set' method
      if (options === 'set') {
        cover = $.data(this, 'plugin_' + pluginName).set();
      }
    });
  };

})(jQuery);