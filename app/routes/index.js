import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //return this.store.findAll('card')
    return [
      {
        profilepicture: "http://www.lvms.com/images/most-interesting-man-in-the-world-lg.jpg",
        username: "austineady",
        url: "http://blogs-images.forbes.com/insertcoin/files/2015/03/skyrim1.jpg",
        description: "Excited to get back into playing Skyrim"
      },
      {
        profilepicture: "http://www.lvms.com/images/most-interesting-man-in-the-world-lg.jpg",
        username: "austineady",
        url: "http://blogs-images.forbes.com/insertcoin/files/2015/03/skyrim1.jpg",
        description: "Excited to get back into playing Skyrim"
      },
      {
        profilepicture: "http://www.lvms.com/images/most-interesting-man-in-the-world-lg.jpg",
        username: "austineady",
        url: "http://blogs-images.forbes.com/insertcoin/files/2015/03/skyrim1.jpg",
        description: "Excited to get back into playing Skyrim"
      },
      {
        profilepicture: "http://www.lvms.com/images/most-interesting-man-in-the-world-lg.jpg",
        username: "austineady",
        url: "http://blogs-images.forbes.com/insertcoin/files/2015/03/skyrim1.jpg",
        description: "Excited to get back into playing Skyrim"
      }
    ];
  }
});
