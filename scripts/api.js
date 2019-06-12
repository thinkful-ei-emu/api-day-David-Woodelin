'use strict';

let api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/woodelin';
  let url = `${BASE_URL}/items`;
  function getItems(){
    // return Promise.resolve('A successful response!');
    let myPromise = fetch(url)
      .then(response => {
        // console.log('HELOOOO');
        return response.json();
      });
      
    return myPromise;
  }
  return {getItems, url};
  
}());
