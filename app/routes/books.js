import Ember from 'ember';

import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  // optional. default is 10
  perPage: 3,
  model: function(params) {
    // todo is your model name
    // returns a PagedRemoteArray
    console.log(params);
    return this.findPaged('book',params);
  }
});