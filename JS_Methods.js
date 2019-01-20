var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["Bob", "Tina"],
    add: function(x,y){
        return x + y;
    }

//Selectors and Methods
//the [0] means selecting the first entry     
document.querySelector("p"); //querySelector automatically selects the first entry
document.getElementsByTagName("p")[0];
document.getElementsById("first");
document.querySelectorAll("p")[0]; 
document.querySelector(".special")[0];

//another way to select a "p" element according to its relative position to say, an "h1" element that precedes it
document.querySelector("h1 + p");

    var lis = document.querySelectAll("li");
    for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function(){
    this.style.color = "pink";
    });
}
}