import DS from 'ember-data';
export default DS.Model.extend({
  name: DS.attr('string'),
  gender: DS.attr('string'),
  birth_date: DS.attr('date'),
  books: DS.hasMany('book',  {async: true})
});