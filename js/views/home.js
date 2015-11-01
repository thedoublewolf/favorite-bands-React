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
    <div class="band-name">
      ${processData(data)}
    </div>
  `;
}


    // <button class="add-button"><i class="fa fa-plus"></i> New Band</button>