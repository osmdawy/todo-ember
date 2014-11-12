import DS from 'ember-data';
var Book = DS.Model.extend({

  title: DS.attr('string'),
  type: DS.attr('string'),
  publish_date: DS.attr('date'),
  content: DS.attr('string'),
  author_id: DS.attr('string'),
  author: DS.belongsTo('author',{ async: true })
});
export default DS.RESTSerializer
                       .extend(DS.EmbeddedRecordsMixin)
                       .extend({
                         attrs: {
                           // thanks EmbeddedRecordsMixin!
                           author: {serialize: 'id', deserialize: 'id'}
                         }
                       });
Book.reopenClass({
  // all: function() {
  //     return $.getJSON("http://localhost:3000/books.json").then(function(response) {
         
  //       var items = [];
         
  //       response.collection.forEach( function (item) {          
  //         items.push( DS.Store.create(item) );
  //       });
 
  //         return items;
  //     });
  //   },
    // show: function(id){
    //   console.log("---------------------------");
    //   console.log(id);
    //   return $.getJSON("http://localhost:3000/books/"+id+".json").then(function(response) {
                
    //       return DS.Store.find(response);
    
    //   });
    // }
});

export default Book;