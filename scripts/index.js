'use strict';
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars
const store = {
  items: [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ],
  hideCheckedItems: false,
  searchTerm: ''
};

function main() {
  shoppingList.bindEventListeners();
  shoppingList.render();
}

$(main);

// fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
//   .then(res => res.json())
//   .then(data => console.log(data));

//   console.log('Hi im woodelin');