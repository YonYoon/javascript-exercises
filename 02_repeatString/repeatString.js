const repeatString = function(word, number) {
    if (number < 0) {
        return 'ERROR'
    }
    else {
        answer = ''
        for (i = 0; i < number; i++) {
            answer += word
        }
        return answer
    }
    
};

// Do not edit below this line
module.exports = repeatString;
