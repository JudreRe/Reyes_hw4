const values = [3,11,7,2,9,10];

arrSum = function(values){
    return values.reduce(function(a,b) {
        return a + b
    }, 0);
}

console.log(arrSum);