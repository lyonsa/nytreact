const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "A Fox Deal Would Test Disney",
    date: new Date(Date.now()),
    url:"https://www.nytimes.com/2017/12/13/business/dealbook/disney-fox-iger.html"
  },
  {
    title: "Tour de France Winner Chris Froome Failed Doping Test",
    date: new Date(Date.now()),
    url:"https://www.nytimes.com/2017/12/13/sports/cycling/chris-froome-tour-de-france-doping.html"
  },
  {
    title: "The Best Art Books of 2017",
    date: new Date(Date.now()),
    url:"https://www.nytimes.com/2017/12/14/arts/the-best-art-books-of-2017.html"
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
