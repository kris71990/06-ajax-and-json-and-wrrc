'use strict';

function Article (rawDataObj) {
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.body = rawDataObj.body;
  this.publishedOn = rawDataObj.publishedOn;
}

// REVIEW: Instead of a global `articles = []` array, let's attach this list of all articles directly to the constructor function. Note: it is NOT on the prototype. In JavaScript, functions are themselves objects, which means we can add properties/values to them at any time. In this case, the array relates to ALL of the Article objects, so it does not belong on the prototype, as that would only be relevant to a single instantiated Article.
Article.all = [];

// COMMENT-DONE: Why isn't this method written as an arrow function?
// PUT YOUR RESPONSE HERE
// Arrow functions do not work while using contextual this
Article.prototype.toHtml = function() {
  let template = Handlebars.compile($('#article-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);

  // COMMENT-DONE: What is going on in the line below? What do the question mark and colon represent? How have we seen this same logic represented previously?
  // Not sure? Check the docs!
  // PUT YOUR RESPONSE HERE
  // setting a property called publishStatus equal to how long ago the article has been published if it has been published; if not publishStatus = '(draft)'; this is done with a ternary operator
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  this.body = marked(this.body);

  return template(this);
};

// REVIEW: There are some other functions that also relate to all articles across the board, rather than just single instances. Object-oriented programming would call these "class-level" functions, that are relevant to the entire "class" of objects that are Articles.

// REVIEW: This function will take the rawData, how ever it is provided, and use it to instantiate all the articles. This code is moved from elsewhere, and encapsulated in a simply-named function for clarity.

// COMMENT-DONE: Where is this function called? What does 'rawData' represent now? How is this different from previous labs?
// PUT YOUR RESPONSE HERE
// This function is called in the fetch all function below
// rawData represents the data in a json file and this data is then accessed via an ajax request, rather than simply being stored in a variable
Article.loadAll = rawData => {
  rawData.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)))

  rawData.forEach(articleObject => Article.all.push(new Article(articleObject)))
  
  articleView.initIndexPage();
}

// REVIEW: This function will retrieve the data from either a local or remote source, and process it, then hand off control to the View.
Article.fetchAll = () => {
  // REVIEW: What is this 'if' statement checking for? Where was the rawData set to local storage?
  if (localStorage.rawData) {
    let articleData = JSON.parse(localStorage.getItem('rawData'));
    Article.loadAll(articleData);
    console.log(articleData);
  // COMMENT-DONE: If there is local storage then just get the JSON obj from local storage. If not, then get the JSON data using ajax and wait for the data to fully load before moving onto constructing anything.
  } else {
    $.getJSON('../data/hackerIpsum.json')
      .then(function(data) {
        localStorage.setItem('rawData', JSON.stringify(data));
        let articleData = JSON.parse(localStorage.getItem('rawData'));
        Article.loadAll(articleData);
      })
  }
}
