var express = require('express');
var router = express.Router();
var controller = require('../controller/controller');


router.route('/t3/createUser')
    .post(controller.createUser);

router.route('/t3/getAllUsers')
      .get(controller.getAllUsers);

router.route('/t3/getUser/:email')
    .get(controller.getUser);

router.route('/t3/insertMovie')
    .post(controller.insertMovie);

router.route('/t3/insertTv')
    .post(controller.insertTv);

router.route('/t3/getAllMovies')
    .get(controller.getAllMovie);

router.route('/t3/getAllTv')
    .get(controller.getAllTv);


router.route('/t3/deleteMovie/:name')
    .delete(controller.deleteMovie);

router.route('/t3/deleteTv/:name')
    .delete(controller.deleteTv);

router.route('/t3/deleteEpisode/:name')
    .delete(controller.deleteEpisode);


module.exports = router;
