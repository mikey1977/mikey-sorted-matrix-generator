'use strict';

function generator (rowLength, colLength) {
  var container = [];
  var numberContainer = [];
  var product = (rowLength * colLength);
  for (var h = 0; h < product; h++) {
    numberContainer.push(Math.floor( Math.random() * 100));
  }

  //sort numberContainer
  numberContainer.sort();

  for (var i = 0; i < rowLength; i++) {
    var row = [];
    container.push(row);

    for (var j = 0; j < colLength; j++) {
      var col = numberContainer.shift();

      row.push(col);

    }
  }
console.log(container);
}
console.log(generator(3, 3));