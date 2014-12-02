import Ember from 'ember';
export default Ember.ObjectController.extend({
		authors: function() {
     return this.store.find('author');
   }.property('model.authors'),
	actions: {
		update: function(params) {
     var author = this.store.getById('author', this.get('author_id'));
     var _this = this;
     
     this.store.find('book', params).then(function (book) {
       book.set("title",_this.get('title'));
        book.set("type",_this.get('type'));
       book.set("author_id",_this.get('author_id'));
       book.set("author",author);
       book.save();

     });
   }
	}
});