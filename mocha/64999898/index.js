module.exports.homeDog = function(req, res) {
  var db = req.db;
  var collection = db.collection('dogs');
  collection.find().toArray(function(err, dogsArray) {
      if (dogsArray) {
          res.render('index', {
              title: 'Dogs',
              path: req.path,
              dogs: dogsArray
          });
      }
      else {
          res.render('index', {
              title: 'No Dogs Found'
          });
      }
  });
};