const express = require('express');
const TvShowService = require('./tvShowService');

const tvShowRouter = express.Router();


tvShowRouter.get('/', (req, res) => {
    res.json(TvShowService.getAll());
  });

module.exports=tvShowRouter;