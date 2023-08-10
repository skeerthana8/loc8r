var express = require('express');
var router = express.Router();
var ctrllocations=require('../controller/locations')
var ctrlothers=require('../controller/others')
router.get('/',ctrllocations.homelist);
router.get('/location',ctrllocations.locationInfo);
router.get('/location/review/new',ctrllocations.addReview);
router.get('/about',ctrlothers.about);
module.exports=router;