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
    name: 'First and Pike',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
  },{
    name: 'Third and Pike',
    minCust: 12,
    maxCust: 55,
    avgCookieSale: 5.1,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
  },{
    name: 'Fourth and Pike',
    minCust: 12,
    maxCust: 55,
    avgCookieSale: 5.1,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
  }
];



function calcCust(store) {
  
  var j = 0;
  var sum = j;
  
  while (j < 15) {
    
    var rannum = (Math.floor(Math.random() * (store.maxCust - store.minCust + 1) + store.minCust)).toFixed(2);
    
    store.rndhourandCust.push(rannum);
    
    var avcookysoldperhour = rannum * 6.3;
    
    var hour = 1 + j;
    
    store.avcookysoldperhour.push(avcookysoldperhour);
    store.totalCookys.push(avcookysoldperhour);
    
    sum = sum + store.avcookysoldperhour[j];
    
    console.log('The random # of people is ' + store.rndhourandCust[j]);
    console.log(' The average # of cookies needed for ' + storeHour[j] + ' is ' + avcookysoldperhour);
    console.log(' total # of cookies so far is ' + sum);
    
    j++;

 }
}

function renderStore(store) {
  var container = cre('div');
  var title = cre('h2', store.name);
  
  var list = cre('ul');
  
  for (var i = 0; i < storeHour.length; i++) {
    var text = storeHour[i] + ': ' + Math.ceil(store.totalCookys[i]) + ' coookies';
    var entry = cre('li', text);
    list.appendChild(entry);
  }
  
  container.appendChild(title);
  container.appendChild(list);
  
  document.body.appendChild(container);
}
  



function cre(name, children) {
  
  var el = document.createElement(name);
  
  if (children) {
    if (typeof children === 'string') {
      var child = document.createTextNode(children);
      el.appendChild(child);
    } else {
      for (var i = 0; i < children.length; i++) {
        el.appendChild(children[i]);
      }
    }
  }
  
  return el;
}



stores.forEach(calcCust);
stores.forEach(renderStore);

console.log(stores);



