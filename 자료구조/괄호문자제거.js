function solution(s) {
    let answer = '';
    let tmp = [];
    for (let x of s) {
        if (x === ')') {
            while (tmp.pop() !== '(');
        } else tmp.push(x);

    }
    answer = tmp.join('');

    return answer;
}
let s = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(s));