import Ember from 'ember';

export default Ember.ArrayController.extend({
  // setup our query params

  queryParams: ["page", "perPage"],

  // binding the property on the paged array 
  // to the query params on the controller
 
  pageBinding: "content.page",
  perPageBinding: "content.perPage",
  totalPagesBinding: "content.totalPages"
});