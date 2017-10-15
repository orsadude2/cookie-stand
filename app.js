'use strict';

console.log('Hello owner Pat...');
var storeHour = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm]'];
var store1 = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  rndhourandCust: [ ],
  avcookysoldperhour: [ ],
  totalCookys: 0,
};
var j = 0;
function calcCust(min,max){
  while (j < 15) {
    var rannum = (Math.floor(Math.random() * (max - min + 1) + min)).toFixed(2);
    store1.rndhourandCust.push(rannum);
    var avcookysoldperhour = rannum * 6.3;
    var hour = 1 + j;
    store1.avcookysoldperhour.push(avcookysoldperhour);
    console.log('The random # of people is ' + store1.rndhourandCust[j]);
    console.log(' The average # of cookies needed for ' + storeHour[j] + ' is ' + avcookysoldperhour);
    j++;

  }
}
calcCust(23, 65);
