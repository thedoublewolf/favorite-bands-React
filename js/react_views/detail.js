import React from 'react';

export default React.createClass({

  render() {

    let data = this.props.data;

    let backButton = this.props.backButton;

    let editButton = this.props.editButton;

    return (
      <div className="app-container">
        <div className="band">
          <h1 className="name">{data.Name}</h1>
          <img src={data.imageUrl}/>
          <p className="fav">Favorite Album:</p>
          <p className="favname"><i class="fa fa-music"></i> {data.favoriteAlbum}</p>
          <p className="why">Why I like them:</p>
          <p className="desc"><i class="fa fa-quote-right"></i> {data.Description}</p>
          <button className="back-button" onClick={() => backButton(home)}>
            <i className="fa fa-arrow-left"></i>
          </button>
          <button className="edit-button" onClick={() => editButton(edit)}>
            Edit Band
          </button>
        </div>
      </div>
    );
  }

});