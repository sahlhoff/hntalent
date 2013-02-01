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


module.exports = mongoose.model('September2012', jobSchema, 'September2012');
module.exports = mongoose.model('October2012', jobSchema, 'October2012');
module.exports = mongoose.model('November2012', jobSchema, 'November2012');
module.exports = mongoose.model('December2012', jobSchema, 'December2012');
module.exports = mongoose.model('January2013', jobSchema, 'January2013');