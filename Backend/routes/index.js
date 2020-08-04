var express = require('express');
var router = express.Router();
var axios = require('axios');
var secrets = require('../secrets.json');
// const { response } = require('../app');


router.get('/search', function (req, res, nex) {
  const title = req.query.title;
  console.log(title);
  const url = `http://www.omdbapi.com/?t=${title}&apikey=${secrets.key}`;
  axios.get(url)
    .then(response => {
      res.send(response.data);
    });
  // .catch (err=> {
  // res.send(err);
  // });
});
// example :http://localhost:3000/imdb/tt2693892
router.get('/imdb/:ImdbID', function (req, res, nex) {
  const id = req.params.ImdbID;
  const url = `http://www.omdbapi.com/?i=${id}&apikey=${secrets.key}`;
  axios.get(url)
    .then(response => {
      res.send(response.data);
    });
  //   .catch (err=> {
  //   res.send(err);
  // });
});


/* GET home page. */
router.get('/', function (req, res, next) {
  //next get on the chain to next 
  // next();
  res.send('Hello world');

  //send index page
  // res.render('index', { title: 'Express' });
});

// router.get('/', function (req, res, next) {
//   //next get on the chain to next 
//   // next();
//   res.send('I am Next');

//   //send index page
//   // res.render('index', { title: 'Express' });
// });

module.exports = router;
