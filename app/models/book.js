import DS from 'ember-data';
 
var Book = DS.Model.extend({
  title: DS.attr('string'),
  type: DS.attr('string')

});

Book.reopenClass({
  all: function() {
      return $.getJSON("http://localhost:3000/books.json").then(function(response) {
      
        
         
        var items = [];
         
        response.collection.forEach( function (item) {          
          items.push( DS.Store.create(item) );
        });
 
          return items;
      });
    }
});

export default Book;