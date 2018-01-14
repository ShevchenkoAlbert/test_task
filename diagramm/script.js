"use strict";
var blocks = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];
var list = document.getElementById('diagramm');
var factor = 15;

blocks.forEach(function (x) {
  var bar = document.createElement('div');
  var value = document.createElement('h6');
  var block = document.createElement('div');
  var color = void 0;

  if (x < 6) color = '#68f24f';
  if (x > 5 && x < 11) color = '#fff45e';
  if (x > 10) color = '#dd2a16';

  value.textContent = x + ' %';
  bar.setAttribute('style', 'height: ' + x * factor + 'px; width: 30px; background: ' + color);

  block.appendChild(value);
  block.appendChild(bar);
  list.appendChild(block);
});