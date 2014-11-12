import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
  	console.log("bookssssssssssssss");
    return this.store.find('book');
  },

});

