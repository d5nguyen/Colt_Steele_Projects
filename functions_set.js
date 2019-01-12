function isEven(number) {
    if(number %2 === 0){
    return true;
    } else {
        return false;
    }
}

function factorial(num){
    if(num === 0 || num === 1)
        return 1;
    for (var i = num-1; i >=1; i--) {
        num*=i;
    }
    return num;
}

function repString(string){
    var rep = string.replace("-", "_");
    return rep;
}