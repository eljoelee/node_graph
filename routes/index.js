module.exports = function(app, models) {

  app.get('/', function(req, res) {
    res.render('chart.html')
  });

  app.get('/api/temps', function(req, res) {
    models.temp.find(function(err, temp) {
      if (err) return res.status(500).send({
        error: 'database failure'
      });
      res.json(temp);
    })
  });

  app.get('/api/dusts', function(req, res) {
    models.dust.find().limit(1).sort({
      $natural: -1
    }).exec(function(err, dust) {
      if (err) return res.status(500).send({
        error: 'database failure'
      });
      res.json(dust);
    })
  });

  app.get('/api/discomforts', function(req, res) {
    models.discom.find().limit(1).sort({
      $natural: -1
    }).exec(function(err, discom) {
      if (err) return res.status(500).send({
        error: 'database failure'
      });
      res.json(discom);
    })
  });
}
