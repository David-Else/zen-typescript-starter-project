/* eslint-disable @typescript-eslint/no-unused-vars */

// -----------------
// JSDom
// -----------------
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const { document } = new JSDOM(`
<!DOCTYPE html>
<html>
  <body>
    <canvas id="gameCanvas" width="650" height="650"></canvas>
  </body>
</html>
`).window;
global.document = document;
global.window = document.defaultView;

// -----------------
// Mocks
// -----------------
global.Audio = class {};
global.Image = class {};
window.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
window.HTMLCanvasElement.prototype.getContext = () => {
  return {
    fillRect: () => {},
    clearRect: () => {},
    getImageData: (x = 0, y = 0, w = 0, h = 0) => ({
      data: new Array(w * h * 4),
    }),
    setLineDash: () => {},
    getLineDash: () => [],
    measureText: (text = '') => ({
      width: 12 * (text.length || 0),
      height: 14,
    }),
    putImageData: () => {},
    createImageData: () => [],
    setTransform: () => {},
    resetTransform: () => {},
    drawImage: () => {},
    save: () => {},
    fillText: () => {},
    restore: () => {},
    beginPath: () => {},
    moveTo: () => {},
    lineTo: () => {},
    closePath: () => {},
    stroke: () => {},
    strokeRect: () => {},
    strokeText: () => {},
    t2: () => {},
    transform: () => {},
    translate: () => {},
    scale: () => {},
    rotate: () => {},
    arc: () => {},
    arcTo: () => {},
    fill: () => {},
    rect: () => {},
    quadraticCurveTo: () => {},
    createLinearGradient: () => ({
      addColorStop: () => {},
    }),
    createPattern: () => ({}),
    createRadialGradient: () => ({
      addColorStop: () => {},
    }),
    bezierCurveTo: () => {},
    drawFocusIfNeeded: () => {},
    clip: () => {},
    ellipse: () => {},
    isPointInPath: () => true,
    isPointInStroke: () => true,
  };
};
