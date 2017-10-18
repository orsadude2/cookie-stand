'use strict';

console.log('Hello owner Pat...');//Greeting the owner
// Putting the store hours in an array
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
// Instead of making each store its own separate object, making all of the stores locations
// an object of the variable stores
var stores = [
  {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
  },{
    name: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
  },{
    name: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
  },{
    name: 'Capitol Hill',
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
  },{
    name: 'Alki',
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    rndhourandCust: [],
    avcookysoldperhour: [],
    totalCookys: [],
  }
];

//Create a function that every time it iterates, it creates the random # of customers (per store) for that hour,
//it takes that random # of customers and appends it to the randomhourandcustomer array,
//it multiplies that random # by 6.3 to get average cookies sold per hour,
//it increases the hour by 1, it appends the average cookies sold per hour into the total cookies array,
//it creates a variable sum that is assigned that stores average number of cookes + itself (which basically is totaling
// the number of cookies per hour)
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

    // shows in the console the random # of people it calculated, the average # of cookies sold per hour and the total
    // of all cookies per store
    console.log('The random # of people is ' + store.rndhourandCust[j]);
    console.log(' The average # of cookies needed for ' + storeHour[j] + ' is ' + avcookysoldperhour);
    console.log(' total # of cookies so far is ' + sum);
    console.log('                 ');

    j++;

  }
}
// create a function renderStore to pass the DIV, H2 and List headings to the HTML. First it creates all of the elements
// Next it creates a text and entry variable. The text variable is the placeholder for the iteration of the store hour
// and total number of cookies for that hour. The entry variable is the place holder for text information to be stored
// in the list format
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
