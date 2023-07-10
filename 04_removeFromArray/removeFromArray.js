const removeFromArray = function (array, ...numbers) {
    for (var j = 0; j < numbers.length; j++) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === numbers[j]) {
                array.splice(i, 1)
                break
            }
            else { continue }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
