export default function(data) {
  return `
    <div class="navbar">
      <div class="button-home"></div>
      <div class="button-newband"></div>
      <div class="button-about"></div>
      <div class="button-contact"></div>
    </div>
    <div class="app-container">
      <div class="band">
        <h1 class="name">${data.Name}</h1>
        <img src="${data.imageUrl}">
        <p class="fav">Favorite Album:</p>
        <p class="favname"><i class="fa fa-music"></i> ${data.favoriteAlbum}</p>
        <p class="why">Why I like them:</p>
        <p class="desc"><i class="fa fa-quote-right"></i> ${data.Description}</p>
        <button class="back-button" data-to="home">
          <i class="fa fa-arrow-left"></i>
        </button>
      </div>
    </div>
  `;
}