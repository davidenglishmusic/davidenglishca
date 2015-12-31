import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr('string'),
  mdURL: DS.attr('string'),
  createdAt: DS.attr('date'),
  content: function(){
    var md = null;
    $.ajax({
        url: this.get('mdURL'),
        type: 'get',
        dataType: 'text',
        async: false,
        success: function(data) {
            md = data;
        }
     });
     return md;
  }.property('content')
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Swift's growing pains",
      mdURL: "assets/markdown/posts/1.md",
      createdAt: "November 23, 2015"
    },
    {
      id: 2,
      title: "Segues and IDE synergy",
      mdURL: "assets/markdown/posts/2.md",
      createdAt: "December 15, 2015"
    }
  ]
});

export default Post;
