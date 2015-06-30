import DS from 'ember-data';

export default DS.Model.extend({
    username: DS.attr('string'),
    url: DS.attr('string'),
    description: DS.attr('string'),
    profilepicture: DS.attr('string'),
    likes: DS.attr(),
    comments: DS.attr()
});
