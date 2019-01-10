//var answer = prompt("Are we there yet?");
//while(answer !== "yes" && answer !== "yea") {
//    var answer = prompt("Are we there yet?");
//}
//alert("Yay, we made it!!");
//if(answer === "yes") {
//    alert("Yay, we made it!!");
//} else {}

//Version 2
var answer = prompt("Are we there yet?");
while(answer.indexOf("yea")=== -1){
    var answer = prompt("Are we there yet?");
}
alert("Yay, we made it!!");