import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr('string'),
  mdURL: DS.attr('string'),
  createdAt: DS.attr('date'),
  md: DS.attr('string'),
  initGetMD: function() {
    var self = this;
    getMD(this.get('mdURL')).then(function(md) {
      // On success
      self.set('md', md);
    }, function(reason) {
      // On fail
    });
  }.property('content')
});

function getMD(url) {
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.onreadystatechange = handler;
    xhr.responseType = 'text';
    xhr.setRequestHeader('Accept', 'application/text');
    xhr.send();

    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error('getMD: `' + url + '` failed with status: [' + this.status + ']'));
        }
      }
    }
  });
}

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
    },
    {
      id: 3,
      title: "Secret Santa and the importance of iteration",
      mdURL: "assets/markdown/posts/3.md",
      createdAt: "January 1, 2016"
    }
  ]
});

export default Post;
