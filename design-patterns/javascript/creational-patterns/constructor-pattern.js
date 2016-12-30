// Contructor pattern ECMAScript 5 


Movie = function (title, releaseYear){
    this.title = title;
    this.releaseYear = releaseYear;
}

// Use prototype to avoid multiple creation of the same 'class' function

Movie.prototype.details = function(){
    return this.title + ' realeased in year ' + this.releaseYear;
}

movie = new Movie('Bastille Day', 2016);
movie_two = new Movie('Suicide Squad', 2016);
console.log(movie.details());
console.log(movie_two.details());
