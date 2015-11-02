import React from 'react';

export default React.createClass({



  processItem(item) {

    let onBandSelect = this.props.onBandSelect;

    return (
      <div className="band-name-item" onClick={() => onBandSelect(item.objectId)}>
        <div className="image band-image">
          <img src={item.imageUrl}/>
        </div>
        <p>{item.Name}</p>
      </div>
    );
  },

  processData(data) {
    return data.map(this.processItem);
  },

  render() {

    let data = this.props.data;

    return (
      <div className="app-container">
        <div className="band-name">
          {this.processData(data)}
        </div>
      </div>
    );

  }

});