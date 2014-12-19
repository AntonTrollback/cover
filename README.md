# No longer recommended

Consider using [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) with a polyfill such as [anselmh/object-fit](https://github.com/anselmh/object-fit)

# Usage

```js
var $element = $('.something');

$element.cover();

// Update on resize
$(window).resize(function() {
  $element.cover('set');
});
```

Cover also needs some styles to be added to your stylesheet:

```css
.something-container {
  position: relative;
  overflow: hidden;
}

.something {
  min-width: 100%;
  min-height: 100%;

  /* Center it, like `background-position: center` */
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
```

## Options

```js
$('.something').cover({
  // Defaults to element parent
  container: $('body'), 
  
  // Element height / width
  // Specify if dimentions aren't available on load (image, video, etc.)
  ratio: 1080 / 1920  
});
```
