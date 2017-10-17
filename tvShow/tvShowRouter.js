const express = require('express');
const TvShowService = require('./tvShowService');

const tvShowRouter = express.Router();


tvShowRouter.get('/', (req, res) => {
    res.json(TvShowService.getAll());
  });

tvShowRouter.route('/:tvShowId').get((req,res)=>{
    const tvShowId = req.params.tvShowId;
    console.log('fetching th show with id: '+ tvShowId);
    res.json(TvShowService.getById(tvShowId));
});

tvShowRouter.post('/', (req, res) => {
  const name= req.body.name;
  const genre = req.body.genre;
  console.log('name: '+ name + " genre:"+genre);
  const newTvShow = TvShowService.createTvShow(name, genre);
  res.json(newTvShow);
  
  });

module.exports=tvShowRouter;