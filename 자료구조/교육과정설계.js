function solution(s1, s2) {
    let answer = 'YES';

    let arr = s1.split('');
    for (let x of s2) {
        if (arr.includes(x)) {
            if (x !== arr.shift()) return 'NO';
        }
    }

    if (arr.length > 0) {
        return 'NO';
    }

    return answer;
}
let s1 = 'CBA';
let s2 = 'CBDAGE';
console.log(solution(s1,s2));