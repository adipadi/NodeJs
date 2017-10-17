const TvShow = require('./TvShow');

class TvShowService{
    constructor(){
        this.tvShows = [new TvShow(1,"blade runner","scifi")];
    }

    getAll(){
        return this.tvShows;
    }
}
module.exports = new TvShowService();