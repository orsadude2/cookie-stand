// 'use strict';
//
// console.log('Hello owner Pat...');
// var storeHour = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm]'];
// var store1 = {
//   name: 'First and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   rndhourandCust: [ ],
//   avcookysoldperhour: [ ],
//   totalCookys: [ ],
// };
// var j = 0;
// var sum = j;
// function calcCust(min,max){
//   while (j < 15) {
//     var rannum = (Math.floor(Math.random() * (max - min + 1) + min)).toFixed(2);
//     store1.rndhourandCust.push(rannum);
//     var avcookysoldperhour = rannum * 6.3;
//     var hour = 1 + j;
//     store1.avcookysoldperhour.push(avcookysoldperhour);
//     store1.totalCookys.push(avcookysoldperhour);
//     sum = sum + store1.avcookysoldperhour[j];
//     console.log('The random # of people is ' + store1.rndhourandCust[j]);
//     console.log(' The average # of cookies needed for ' + storeHour[j] + ' is ' + avcookysoldperhour);
//     console.log(' total # of cookies so far is ' + sum.toFixed(2));
//     j++;
//
//   }
// }
// calcCust(23, 65);
//
// render: function() {
//   var firstandpike = document.getElementByID('FirstandPike');
//   var store1 = document.getElementByID('store1');
//
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.name;
//   store1.appendChild(h2El);
//   for(var k =0; k < storeHour.length;k++){
//     var liEL = document.createElement('li');
//     liEL.textContent = storeHour[k] + ': ' + this.avcookysoldperhour[k] + ' cookies';
//     console.log(liEL);
//     firstandpike.appendChild(liEL);
//   }
// }
// };
// firstandpike.render();
