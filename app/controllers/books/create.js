import Ember from 'ember';
export default Ember.Controller.extend({
	authors: function() {
     return this.store.find('author');
   }.property('model.authors'),
	actions: {
		createBook: function () {
			var _this = this;
		
			var author = this.store.getById('author',_this.get('author_id'));
			var book =  this.store.createRecord('book', {
			  title: _this.get('title') ,
			  type: _this.get('type') , 
			  publish_date:  _this.get('publish_date'),
			  author: author,
			  author_id: _this.get('author_id')
			});
			// this.store.find('author',_this.get('authorid')).then(function(author) {
			//   book.set('author_id', author.id);
			//   book.save();
			// });
		book.save();
			
			
			this.transitionToRoute("books.index");
		 }
	}
});