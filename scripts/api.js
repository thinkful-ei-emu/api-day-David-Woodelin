'use strict';

let api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/woodelin';
  let url = `${BASE_URL}/items`;
  function getItems(){
    let fetchedPromise = fetch(url)
    //   .then(response => {
    //     console.log('HELOOOO');
    //     return response.json();
    //   });

    return fetchedPromise;
  }
  function createItem(name){
    let newItem = JSON.stringify({name});
    let url = `${BASE_URL}/items`;
    return fetch(url,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newItem,
    });
  }
  
  
  
  return {getItems,
    createItem,


};
  
}());

// let create = (function CreateItem(name){
//   let newItem = JSON.stringify({name});
//   const BASE_URL = 'https://thinkful-list-api.herokuapp.com/woodelin';
//   let url = `${BASE_URL}/items`;
//   fetch(url,{
//     method:'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: newItem,
//   });
//   return {CreateItem};
// }());






