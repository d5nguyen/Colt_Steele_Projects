//each movie is an object
//have or haven't watched - boolean
//must include rating

var movies = [ 
{ movie: "Titanic",
  seen: false,
  rating: 5
},
{ movie: "Forrest Gump",
  seen: true,
  rating: 4.5
},
{ movie: "Dumb and Dumber",
  seen: true,
  rating: 4
}
]

function movieRating(movies){
for(var i = 0; i < movies.length; i++) {
    if(movies[i].seen === false){
        console.log("I haven't seen " + movies[i].movie + " - " + movies[i].rating + " stars.")
    } else {
        console.log("I have seen " + movies[i].movie + " - " + movies[i].rating + " stars.")
    }
}
}




