'use strict';
console.log('Hello owner Pat...');
var storeHour = [
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
  '8:00 pm'
];

var stores = [
  {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
    dailycookie: 0,
  },{
    name: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
    dailycookie: 0,
  },{
    name: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
    dailycookie: 0,
  },{
    name: 'Capitol Hill',
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
    dailycookie: 0,
  },{
    name: 'Alki',
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
    dailycookie: 0,
  }
];

function calcCust(store) {
  var j = 0;
  var sum = j;

  while (j < 15) {
    var rannum = Math.random() * (store.maxCust - store.minCust + 1) + store.minCust;
    var avcookysoldperhour = Math.floor(rannum * 6.3);
    var hour = 1 + j;

    store.rndhourandCust.push(rannum);
    store.avcookysoldperhour.push(avcookysoldperhour);
    store.totalCookys.push(avcookysoldperhour);
    sum = sum + store.avcookysoldperhour[j];

    j++;
  }
  store.dailycookie = sum;
}
var container = document.getElementById('sales');

var makeStore = function(store) {

  var storeUL = document.createElement('ul');
  container.appendChild(storeUL);

  var storeName = document.createElement('li');
  storeName.textContent = store.name;
  storeUL.appendChild(storeName);

  for (var i = 0; i < store.avcookysoldperhour.length; i++) {
    var storeName = document.createElement('li');
    storeName.textContent = storeHour[i] + ':' + store.totalCookys[i];
    console.log(storeName);
    storeUL.appendChild(storeName);
  }

  var dailyCookieEl = document.createElement('li');
  dailyCookieEl.textContent = 'Total: ' + store.dailycookie;
  storeUL.appendChild(dailyCookieEl);
};
calcCust(stores[0]);
makeStore(stores[0]);
calcCust(stores[1]);
makeStore(stores[1]);
calcCust(stores[2]);
makeStore(stores[2]);
calcCust(stores[3]);
makeStore(stores[3]);
calcCust(stores[4]);
makeStore(stores[4]);
