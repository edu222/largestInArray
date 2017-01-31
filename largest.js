var numbers = [50, 22, 34, 2, -6, 7, 9, 20, 25];

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

document.write('Largest: ' + findLargestNumber(numbers));