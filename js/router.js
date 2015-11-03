import Backbone from 'backbone';
import $ from 'jquery';
import ReactDom from 'react-dom';
import React from 'react';

import {
  BandModel,
  BandCollection
} from './resources';

import {
  Home,
  Detail,
  AddBand,
  Spinner,
  About,
  Contact,
  Edit,
} from './views';

import ReactDetail from './react_views/detail';
import ReactHome from './react_views/home';

export default Backbone.Router.extend({

  routes: {
    ''           : 'redirectToHome',
    'home'       : 'showHome',
    'about'      : 'showAbout',
    'contact'    : 'showContact',
    'detail/:id' : 'showDetail',
    'addBandProfile'  : 'newBandProfile',
    // 'edit'       : 'editBandProfile',
    // 'edit/:id'       : 'editBandProfile',
  },

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new BandCollection();

    this.$el.on('click', '.button-home', (event) => {
      let $div = $(event.currentTarget);
      this.navigate(`home`, {trigger: true});
    });

    this.$el.on('click', '.button-newband', (event) => {
      let $div = $(event.currentTarget);
      this.navigate(`addBandProfile`, {trigger: true});
    });

    this.$el.on('click', '.button-about', (event) => {
      let $div = $(event.currentTarget);
      this.navigate(`about`, {trigger: true});
    });

    this.$el.on('click', '.button-contact', (event) => {
      let $div = $(event.currentTarget);
      this.navigate(`contact`, {trigger: true});
    });
    // OLD CODE TRANSLATED TO REACT:
    // this.$el.on('click', '.band-name-item', (event) => {
    //   let $div = $(event.currentTarget);
    //   let bandId = $div.data('band-id');
    //   this.navigate(`detail/${bandId}`, {trigger: true});
    // });

    // this.$el.on('click', '.back-button', (event) => {
    //   let $button = $(event.currentTarget);
    //   let route = $button.data('to');
    //   this.navigate(route, {trigger: true});
    // });

    this.$el.on('click', '.add-button', (event) => {
      let $div = $(event.currentTarget);
      this.navigate(`addBandProfile`, {trigger: true});
    });

    this.$el.on('click', '.submit-band', (event) => {
      let name     = $(this.$el).find('.name').val();
      let image    = $(this.$el).find('.image').val();
      let favAlbum = $(this.$el).find('.favAlbum').val();
      let descript = $(this.$el).find('.descript').val();

      let newBand = new BandModel({
        Name: name,
        imageUrl: image,
        favoriteAlbum: favAlbum,
        Description: descript
      });

      this.collection.add(newBand);
      newBand.save().then(() => {
        alert('New band added.  Awesome Taste!');
        this.navigate(`bandName`, {trigger: true});
      });
    });
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showSpinner() {
    this.$el.html( Spinner() );
  },

  redirectToHome() {
    this.navigate('home', {
      replace: true,
      trigger: true
    });
  },

  showHome() {
    this.showSpinner();
    this.collection.fetch().then(() => {

    //OLD CODE TRANSLATED TO REACT:
      // this.$el.html(
      //   Home(
      //     this.collection.toJSON()
      //   )
      // );
    // this.$el.on('click', '.band-name-item', (event) => {
    //   let $div = $(event.currentTarget);
    //   let bandId = $div.data('band-id');
    //   this.navigate(`detail/${bandId}`, {trigger: true});
    // });

      let nativeElement = this.$el[0];

      ReactDom.render(
        <ReactHome 
          onBandSelect={id => this.navigate(`detail/${id}`, {trigger: true})} 
          data={this.collection.toJSON()}/>,
        nativeElement
      )
    });
  },

  showAbout() {
    this.showSpinner();
    this.$el.html(About());
  },

  showContact() {
    this.showSpinner();
    this.$el.html(Contact());
  },

  showDetail(id) {

    // let band = this.collection.get(id);

    // let nativeElement = this.$el[0];

    // if (band) {
    //   ReactDom.render(
    //     <ReactDetail />,
    //   )
    // } else {

    // }

    //OLD CODE TRANSLATED TO REACT:
    let band = this.collection.get(id);

    if (band) {
      this.$el.html( Detail(band.templateData()) );
    } else {
      this.showSpinner();
      band = this.collection.add({objectId: id});
      band.fetch().then(() => {
        this.$el.html( Detail( band.templateData()) );
      });
    }
  },

  newBandProfile() {
    this.showSpinner();
    this.$el.html(AddBand());
  },

});