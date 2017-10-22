'use strict';

var totalCookys = [];
var allLocations = [];

function CreateNewStore (name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.rndhourandCust = [];
  this.avcookysoldperhour = [];
  this.dailycookie = 0;
  this.calcCust = function() {
    var j = 0;
    var sum = j;

    while (j < 15) {
      var rannum = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
      this.avcookysoldperhour.push(Math.floor(rannum * this.avgCookieSale));
      var hour = 1 + j;

      this.rndhourandCust.push(rannum);
      totalCookys.push(this.avcookysoldperhour);
      sum = sum + this.avcookysoldperhour[j];

      j++;
    }
    this.dailycookie = sum;
  };
}

// var alki = new CreateNewStore ('Alki', 4, 43, 5);
// console.log (alki.name);

// console.log('Hello owner Pat...');
var storeHour = [
  '',
  '6:00 am',
  '7:00 am',
  '8:00 am',
  '9:00 am',
  '10:00 am',
  '11:00 am',
  '12:00 pm',
  '1:00 pm',
  '2:00 pm',
  '3:00 pm',
  '4:00 pm',
  '5:00 pm',
  '6:00 pm',
  '7:00 pm',
  '8:00 pm',
  'Daily Total'
];

var stores = [];
var firstAndPike = new CreateNewStore ('1st and Pike', 23, 65, 6.3);
stores.push(firstAndPike);
var seaTac = new CreateNewStore ('SeaTac Airport', 3, 24, 1.2);
stores.push(seaTac);
var seattlecenter = new CreateNewStore ('Seattle Center', 11, 38, 3.7);
stores.push(seattlecenter);
var capitolhill = new CreateNewStore ('Capitol Hill', 20, 38, 2.3);
stores.push(capitolhill);
var alki = new CreateNewStore ('Alki', 2, 16, 4.6);
stores.push(alki);

console.log('before calc cust is run ' + stores[0].dailycookie);
stores[0].calcCust();
console.log('after calc cust is run ' + stores[0].dailycookie);
console.log(stores);

function createheader() {
  var thead = document.getElementById('thead');
  var trow = document.createElement('tr');
  for (var i = 0; i < storeHour.length;i++) {
    var tdata = document.createElement('td');
    var text = document.createTextNode(storeHour[i]);
    tdata.appendChild(text);
    trow.appendChild(tdata);
  }
  thead.appendChild(trow);
}
createheader();

function createbody() {
  var tbody = document.getElementById('tbody');
  var trow = document.createElement('tr');
  for (var i = 0; i < storeHour.length;i++) {
    var tdata = document.createElement('td');
    var text = document.createTextNode(avcookysoldperhour[i]);
    tdata.appendChild(text);
    trow.appendChild(tdata);
  }
  thead.appendChild(trow);
}
createbody();
// var container = document.getElementById('sales');
//
// var makeStore = function(store) {
//
//   var storeUL = document.createElement('ul');
//   container.appendChild(storeUL);
//
//   var storeName = document.createElement('li');
//   storeName.textContent = store.name;
//   storeUL.appendChild(storeName);
//
//   for (var i = 0; i < store.avcookysoldperhour.length; i++) {
//     var storeName = document.createElement('li');
//     storeName.textContent = storeHour[i] + ':' + store.totalCookys[i];
//     console.log(storeName);
//     storeUL.appendChild(storeName);
//   }
//
//   var dailyCookieEl = document.createElement('li');
//   dailyCookieEl.textContent = 'Total: ' + store.dailycookie;
//   storeUL.appendChild(dailyCookieEl);
// };
// calcCust(stores[0]);
// makeStore(stores[0]);
// calcCust(stores[1]);
// makeStore(stores[1]);
// calcCust(stores[2]);
// makeStore(stores[2]);
// calcCust(stores[3]);
// makeStore(stores[3]);
// calcCust(stores[4]);
// makeStore(stores[4]);
