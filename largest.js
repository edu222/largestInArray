var numbers = [];

function findLargestNumber(numberArray) {
    var largest = null;
    //if numbers array is empty, then null will be returned, since numbers.length of [] is 0 and 0 is not < 0
    for (var i=0; i < numbers.length; i++){
        if( i === 0){
            largest = numbers[i];
        } else {
            if (largest < numbers[i]){
                largest = numbers[i];
            }
        }
    }
    return largest;
}

document.write(findLargestNumber(numbers));