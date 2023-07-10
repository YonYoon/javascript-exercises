const sumAll = function(firstNum, secondNum) {
    if (firstNum < 0 || secondNum < 0) {
        return "ERROR"
    } else if (typeof firstNum != "number" || typeof secondNum != "number") {
        return "ERROR"
    }
    
    larger = 0;
    smaller = 0;
    
    if (secondNum > firstNum) {
        larger = secondNum
        smaller = firstNum
    } else {
        larger = firstNum
        smaller = secondNum
    }
    
    let array = [larger];
    sum = 0;
    
    while (larger != smaller) {
        larger -= 1
        array.push(larger)
    }
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
