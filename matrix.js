'use strict';

function generator (rowLength, colLength) {
  var container = [];

  for (var i = 0; i < rowLength; i++) {
    var row = [];
    container.push(row);
      for (var j = 0; j < colLength; j++) {
    var col = Math.floor( Math.random() * 100);

    row.push(col);
  }
  for (var k = 0; k < container.length; k++) {
    row.sort();
  }
 }
console.log(container);
}
generator(3, 3);