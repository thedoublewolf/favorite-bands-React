import Backbone from 'backbone';
import Band from './band';
import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({

  url: APP_URL,
  
  model: Band,

  parse(data) {
    return data.results;
  }

});