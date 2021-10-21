function solution(s) {
    let stack = [];
    for (let x of s) {
        if (x === '*' || x === '/' || x === '+' || x === '-') {
            let b = stack.pop();
            let a = stack.pop();
            let t = x;
            stack.push(cal(a, b, t));
        } else stack.push(Number(x));
    }

    

    return stack[0];
}

function cal(a, b, x) {
    switch (x) {
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '+':
            return a + b;
        case '-':
            return a - b;
    }
}
let s = '352+*9-';
console.log(solution(s));