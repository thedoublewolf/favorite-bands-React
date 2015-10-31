import Backbone from 'backbone';
import $ from 'jquery';
// import $ ReactDom from 'react-dom';
// import $ React from 'react';

import {
  BandModel,
  BandCollection
} from './resources';

import {
  Home,
  Detail,
  AddBand,
  Spinner
} from './views';

export default Backbone.Router.extend({

  routes: {
    ''                : 'redirectToHome',
    'home'        : 'showHome',
    'detail/:id' : 'showDetail',
    'addBandProfile'  : 'newBandProfile',
  },

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new BandCollection();

    this.$el.on('click', '.band-name-item', (event) => {
      let $li = $(event.currentTarget);
      let bandId = $li.data('band-id');
      this.navigate(`detail/${bandId}`, {trigger: true});
    });

    this.$el.on('click', '.back-button', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });

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
      this.$el.html(
        Home(
          this.collection.toJSON()
        )
      );
    });
  },

  showDetail(id) {
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
  }

});