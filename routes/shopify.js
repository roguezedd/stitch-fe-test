var express = require('express');
var request = require('request');
var router = express.Router();

var API_KEY = 'c703c03944b7928c3c4c40fcd8fe54da';
var PASSWD = '2569347cd7d2f04406a5ef164fb087f5';
var STORE_NAME = 'stich-labs-jai';

router.get('/get', function(req, res) {

	var path
		, url
		;

	path = req.query.path;

	res.set({'Content-Type': 'application/json'});

	url = 'https://' + API_KEY + ':' + PASSWD + '@' + STORE_NAME + '.myshopify.com' + path;

	console.log('req: ' + url);

	request(url
		, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				res.status(200).send(body);
			} else {
				console.log(error);
				console.log(response.statusCode);
				res.status(response.statusCode).send(body);
			}
		}
	);

});

router.post('/post', function(req, res){

	var path = req.query.path
		, requestData = req.body
		;

	console.log(requestData);

	request({
		url: 'https://' + API_KEY + ':' + PASSWD + '@' + STORE_NAME + '.myshopify.com' + path
		, method: "POST"
		, json: true
		, headers: {
			"content-type": "application/json"
		}
		, body: JSON.stringify(requestData)
	}
	, function (error, response, body) {

			console.log(response.statusCode);

			if (!error && response.statusCode === 200 || response.statusCode === 201) {
				res.status(200).send(body);
			} else {
				console.log(error);
				//console.log(response);
				res.status(500).send(body);
			}
	});
});

module.exports = router;
