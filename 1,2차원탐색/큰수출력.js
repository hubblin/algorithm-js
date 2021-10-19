function solution(a) {
    let answer = [];
    for (let i = 0; i < a.length; i++) {
        if (i == 0) {
            answer.push(a[i]);
        } else if ( a[i-1] < a[i]) {
            answer.push(a[i]);
        }
    }
    return answer;
}

console.log(solution([7,3,9,5,6,12]));