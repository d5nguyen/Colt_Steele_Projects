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
console.log("divisible #'s between 5 and 10");
var divisible = 5;
while(divisible <= 10) {
    if ((divisible % 5 === 0) && (divisible %3 ===0)) {
    console.log(divisible);
    divisible++;
}
}