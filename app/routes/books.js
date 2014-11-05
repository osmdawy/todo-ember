import Ember from 'ember';
import Book from '../models/book' ;
export default Ember.Route.extend({
  model: function() {
    return Book.all();
  }

});