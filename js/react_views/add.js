import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="app-container">
        <div className='add-band'>
          <h1 className="addheader">Add Band</h1>
          <form>
            <label>Name: <input type="text" className="name"></label>
            <label>Image URL: <input type="text" className="image"></label>
            <label>Favorite Album: <input type="text" className="favAlbum"></label>
            <label>Why I like them: <textarea className="descript"></textarea></label>
          </form>
          <button onClick={() => } className="submit-band">Add Band</button>
        </div>
      </div>
    );
  }

});