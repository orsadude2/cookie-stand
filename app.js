'use strict';
console.log('hello owner beth...');
var store1 = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  hourandCust: [ ],
  avcookyperhour: [ ],
};
var j = 0;
function calcCust(min,max){
  while (j < 15) {
    var rannum = (Math.floor(Math.random() * (max - min + 1) + min)).toFixed(2);
    store1.hourandCust.push(rannum);
    var avcook = rannum * 6.3;
    var hour = 1 + j;
    store1.avcookyperhour.push(avcook);
    console.log('The random # of people is ' + store1.hourandCust[j]);
    console.log(' The average # of cookies needed for hour ' + hour + ' is ' + avcook);
    j++;

  }
}
calcCust(23, 65);
