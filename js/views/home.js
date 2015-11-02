// import React from 'react';

// export default React.createClass({

//   render: function() {
//     return <div>
//       { this.

//       }
//   }

function processData(data) {
  return data.map(function(item){
    return `
      <div class="band-name-item" data-band-id='${item.objectId}'>
        <div class="image band-image">
          <img src="${item.imageUrl}">
        </div>
        <p>${item.Name}</p>
      </div>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="navbar">
      <div class="button-home"></div>
      <div class="button-newband"></div>
      <div class="button-about"></div>
      <div class="button-contact"></div>
    </div>
    <div class="app-container">
      <div class="band-name">
        ${processData(data)}
      </div>
    </div>
  `;
}