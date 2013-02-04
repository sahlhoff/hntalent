var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var jobSchema = new Schema({
      _uid: String
    , listing: String
    , cities: Array
    , skills: Array
    , joblinks: String
    , lifestyles: Array
    , comments: String
});


module.exports = mongoose.model('december2012', jobSchema, 'december2012');