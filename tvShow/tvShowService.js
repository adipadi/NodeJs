const TvShow = require('./TvShow');
const createId = require('../utils/idUtils');

class TvShowService{
    constructor(){
        this.tvShows = [new TvShow(createId(),"blade runner","scifi"), new TvShow(createId(),"mall cop","comedy?"), new TvShow(createId(),"My little pony","drama")];
    }

    getAll(){
        return this.tvShows;
    }


    getById(reqId){
        return this.tvShows.find(TvShow => TvShow.id == reqId);
    }

    createTvShow(name, genre){
        const aNewTvShow= new TvShow(createId(),name,genre);
        this.tvShows.push(aNewTvShow);
        return aNewTvShow;
    }
}
module.exports = new TvShowService();