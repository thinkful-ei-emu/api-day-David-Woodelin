'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars


$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
});

// store.items.push(Item.create('apples'));

// api.getItems()
//   .then(res => {
//     console.log(res);
//   });

// api.createItem('pears')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items) => {
//     console.log(items);
//   });





// fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .then(console.log('I am David'));