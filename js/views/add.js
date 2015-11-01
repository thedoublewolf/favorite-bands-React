export default function() {
  return `
    <div class="navbar">
      <div class="button-home"></div>
      <div class="button-newband"></div>
      <div class="button-about"></div>
      <div class="button-contact"></div>
    </div>
    <div class="app-container">
      <div class='add-band'>
        <h1 class="addheader">Add Band</h1>
        <form>
          <label>Name:            <input type="text" class="name"></label>
          <label>Image URL:         <input type="text" class="image"></label>
          <label>Favorite Album:  <input type="text" class="favAlbum"></label>
          <label>Why I like them: <textarea class="descript"></textarea></label>
        </form>
        <button class="submit-band">Add Band</button>
      </div>
    </div>
  `;
}