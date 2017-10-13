'use strict';
console.log('hello');
var firstnPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  hourandCust: [ ],
  avcookyperhour: [ ],
};
var j = 0;
function calcCust(min,max){
  while (j < 15) {
    var rannum = Math.floor(Math.random() * (max - min + 1) + min);
    firstnPike.hourandCust.push(rannum);
    var avcook = rannum * 6.3;
    firstnPike.avcookyperhour.push(avcook);
    console.log('The random # of people is ' + firstnPike.hourandCust[j]);
    console.log(' The average # of cookies needed per hour is ' + avcook);
    j++;

  }
}
calcCust(23, 65);
