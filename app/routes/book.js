import Ember from 'ember';
export default Ember.Route.extend({
  model: function(params) {
  	
  	var my_book = this.store.find('book',params.book_id);
  	console.log("book");
    return my_book;
  }


});
