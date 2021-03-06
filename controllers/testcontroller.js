var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

router.post('/one', function(req, res) {
    res.send("Got a post request.")
});

router.post('/two', function(req, res) {
    let testData = "Test data for endpoint two.";

    TestModel
        .create({
            testdata: testData
        }).then(dataFromDatabase => {
            res.send("Test two went through.")
        })
});

router.post('/three', function(req, res) {
    var testData = req.body.testdata.item;

    TestModel
        .create({
            testdata: testData
        })
    res.send("Test three went through.")
    console.log("Test three went through.")
});
router.post('/four', function(req, res){
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message() {
                res.send("Test 4 went through.")
            }
        );
});

router.post('/five', function(req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(data) {
                res.send(data);
            }
        );
});
router.post('/six', function (req, res){
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(testdata) {
                res.json({
                    testdata: testdata
                });
            }
        );
});
router.post('/seven', function(req, res){
    var testData = req.body.testdata.item;

    TestModel
        .create({
            testdata: testData
        })
        .then(
            function createSuccess(testdata){
                res.json({
                    testdata: testdata
                });
            },
            function createError(err){
                res.send(500, err.message);
            }
        );
});

module.exports = router;