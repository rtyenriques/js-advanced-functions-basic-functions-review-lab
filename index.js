// Your code here
function saturdayFun(arg = "roller-skate") {
    return `This Saturday, I want to ${arg}!`
}

const mondayWork = function(arg = "go to the office") {
    return `This Monday, I will ${arg}.`
}

function wrapAdjective(argu = '*') {
    return function(arg = "special") {
        return `You are ${argu}${arg}${argu}!`
    }
}

const Calculator = {
    add: function() {
        return 1 + 3
    },
    subtract: function() {
        return 1 - 3
    },
    multiply: function() {
        return 1 * 3
    },
    divide: function() {
        return 10 / 5
    }

}

function actionApplyer(int, array) {
    return int
}