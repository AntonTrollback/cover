# Usage
```js
var $element = $('.cover');

$element.cover();

// Update on resize
$(window).resize(function() {
  $element.cover('set');
});
```
Cover also needs some styles to be added to your stylesheet:
```css
.cover-container {
  position: relative;
  overflow: hidden;
}

.cover {
  display: block;
  min-width: 100%;
  min-height: 100%;

  /* Defaults to fill height */
  width: auto;
  height: 100%;

  /* Center it */
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.cover.fill-width {
  width: 100%;
  height: auto;
}
```

## Options
- **className** String, defaults to `fill-width`
- **container** $(element), defaults to parent
- **ratio** Integer, defaults to element `height / width`. Specify if dimentions aren't available on load (images and videos)