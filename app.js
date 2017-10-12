'use strict';
console.log('hello');
var firstnPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  hourandCust: [ ],
  salesperhour: [ ],
};
var j = 0;
function calcCust(min,max){
  while (j < 15) {
    var rannum = Math.floor(Math.random() * (max - min + 1) + min);
    firstnPike.hourandCust.push(rannum);
    var sales = rannum * 6.3;
    firstnPike.salesperhour.push(sales);
    console.log('The random # of people is ' + firstnPike.hourandCust[j]);
    console.log(' The average sales per ' + (j + 1) + ' hour  is ' + sales);
    j++;

  }
}
calcCust(23, 65);
