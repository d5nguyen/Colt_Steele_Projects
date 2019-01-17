//printReverse
console.log("printReverse array");
function printReverse(array){
for(var i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
    }
}
printReverse([1, 2, 3, 4, 5, 6, 7])

console.log("isUniform problem");
function isUniform(arr){
    var first = arr[0];
for(var i = 1; i < arr.length; i++){
    if(arr[i] !== first){
        return false; 
        } 
    }
    return true;
    }


//sumArray

console.log("sumArray");
function sumArray(arr){
var answer = 0; 
    for(i = 0; i < arr.length - 1; i++){
    answer += arr[i];
    }
    return answer;
}

//max
console.log(max);
function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
 }
return max;
}
//        
//        
//
//
//
//
