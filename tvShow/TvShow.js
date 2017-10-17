class TvShow{
    constructor(id, name, genre){
        this.id=id;
        this.name=name;
        this.genre=genre;
    }
}
//makes this module public so we can use it in server.js
module.exports=TvShow;