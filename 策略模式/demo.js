
const strategy = {
    'A': (salary) => {
        return salary * 2;
    },

    'B': (salary) => {
        return salary * 3;
    },

    'C': (salary) => {
        return salary * 4;
    }
}

const calculateBonus = (level, salary) => {
    return strategy[level](salary)
}

const A = calculateBonus('A', 10000);
console.log(A); // 20000

// 暴露方法
export default {
    calculateBonus
}
