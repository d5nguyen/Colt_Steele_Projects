var num = -10;
while( num <= 19){
    console.log(num);
    num++
}
console.log("even numbers between 10 and 40");
var evenNumber = 10;
while(evenNumber <=40) {
    console.log(evenNumber);
    evenNumber+=2;
}
console.log("Odd numbers between 300 and 333");
var oddNumber = 300;
while(oddNumber <=333) {
    if(oddNumber % 2 !== 0) {
    console.log(oddNumber);
    } 
    oddNumber++;
}
console.log("divisible numbers between 5 and 50");
var counter = 5;

while(counter <= 50) {
    if ((counter % 5 === 0) && (counter %3 === 0)) {
    console.log(counter);
    counter++;
}
}
