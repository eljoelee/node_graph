var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('mongoose-double')(mongoose);

var Schema = mongoose.Schema;

var tempSchema = new Schema({
  date: String,
  temp: mongoose.Schema.Types.Double
}, {
  collection: 'temp_posts'
});

var temp = mongoose.model('temp', tempSchema);

var dustSchema = new Schema({
  date: String,
  temp: Number
}, {
  collection: 'dust_posts'
});

var dust = mongoose.model('dust', dustSchema);

var discomSchema = new Schema({
  date: String,
  discomfort: Number
}, {
  collection: 'discom_posts'
});

var discom = mongoose.model('discom', discomSchema);

module.exports = {
  temp: temp,
  dust: dust,
  discom: discom
};
