import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  createdAt: DS.attr('date')
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Swift's growing pains",
      content: "I am presently taking a course in iOS development at <a href=\"http://www.bcit.ca/\">BCIT</a>. Despite our helpful and enthusiastic instructor, the class is feeling the growing pains of Apple’s still youthful Swift language. With each update of xCode, one must remain vigilant, as previously working snippets of code can often break. As part of the coursework we have been consulting some of the tutorials from <a href=\"http://www.raywenderlich.com/\">Ray Wenderlich’s site</a>. While a great resource, the frequent changes and deprecations in xCode and Swift are easily visible in the comments which accompany each article. A few evenings back we tackled Audrey Tam’s tutorial on <a href=\"http://www.raywenderlich.com/90971/introduction-mapkit-swift-tutorial\">MapKit and CoreLocation</a>. It features 7 pages of comments, many of which pose questions about code blocks which have required modification since the tutorial’s initial publication. I am thinking of writing some tutorials here with the goal of lowering the bar for other developers getting into iOS development. There was the hope that the journey into xCode would be reminiscent of <a href=\"https://en.wikipedia.org/wiki/HyperCard\">Hypercard</a> which I look back upon with fond nostalgia. I am only a few months in though and that may still end up being the case.",
      createdAt: "November 23, 2015"
    }
  ]
});

export default Post;
