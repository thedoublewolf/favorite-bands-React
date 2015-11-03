import React from 'react';

export default React.createClass({

  navigateHome() {
    this.props.onNavigate('home');
  },

  navigateNewBand() {
    this.props.onNavigate('addBandProfile');
  },

  navigateAbout() {
    this.props.onNavigate('about');
  },

  navigateContact() {
    this.props.onNavigate('contact');
  },


  render() {
    return (
      <div className="navbar">
        <div onClick={this.navigateHome} className="button-home"></div>
        <div onClick={this.navigateNewBand} className="button-newband"></div>
        <div onClick={this.navigateAbout} className="button-about"></div>
        <div onClick={this.navigateContact} className="button-contact"></div>
      </div>
    );
  }

});