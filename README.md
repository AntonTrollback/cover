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
  width: 100%;
  height: 100%;
}

.something {
  min-width: 100%;
  min-height: 100%;

  /* Center it */
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
```

## Options
- **container** $(element), defaults to parent element
- **ratio** Integer, defaults to element `height / width`. Specify if dimentions aren't available on load (image, video, etc.)