//스택으로 풀면 풀릴 듯
function solution(s) {
    let tmp = [];
    
    for (let x of s) {
        if (tmp.length >= 0) {
            if (x === '(') {
                tmp.push(x);
            } else {
            
                tmp.pop();
            }
        } else {
            return 'NO';
        }
    }

    if (tmp.length === 0) {
        return 'YES';
    } else {
        return 'NO';
    }
}

let s = "(()(())())";
console.log(solution(s));