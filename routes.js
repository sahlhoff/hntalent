  september2012 = require('./models/september2012')
, october2012 = require('./models/october2012')
, november2012 = require('./models/november2012')
, december2012 = require('./models/december2012')
, january2013 = require('./models/january2013')
, february2013 = require('./models/february2013')
, mongoose = require('mongoose');



module.exports = function (app) {


	app.get('/', function (req, res) {
		res.render('index', {title: 'HNTalent'})
	});

	app.get('/february2013', function (req, res) {
		var jobQuery = february2013.find({});
		jobQuery.exec(function(err, jobs) {
			if (err){
				console.log(err)
			}
			res.send({jobs:jobs})
		})
	})


	app.get('/september2012', function (req, res) {
		var jobQuery = september2012.find({});
		jobQuery.exec(function(err, jobs) {
			if (err){
				console.log(err)
			}
			res.send({jobs:jobs})
		})
	})

	app.get('/october2012', function (req, res) {
		console.log('in October')
		var jobQuery = october2012.find({});
		jobQuery.exec(function(err, jobs) {
			if (err){
				console.log(err)
			}
			res.send({jobs:jobs})
		})
	})

	app.get('/november2012', function (req, res) {
		var jobQuery = november2012.find({});
		jobQuery.exec(function(err, jobs) {
			if (err){
				console.log(err)
			}
			res.send({jobs:jobs})
		})
	})

	app.get('/december2012', function (req, res) {
		var jobQuery = december2012.find({});
		jobQuery.exec(function(err, jobs) {
			if (err){
				console.log(err)
			}
			res.send({jobs:jobs})
		})
	})

	app.get('/january2013', function (req, res) {
		var jobQuery = january2013.find({});
		jobQuery.exec(function(err, jobs) {
			if (err){
				console.log(err)
			}
			res.send({jobs:jobs})
		})
	})

}