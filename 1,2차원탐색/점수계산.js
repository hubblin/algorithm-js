function solution(a) {
    let count = 1, answer = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i]) {
            if (i > 0 && a[i - 1]) {
                count++;
            } else {
                count = 1;
            }
            answer += count;
        }
    }
    return answer;
}

console.log(solution([1,0,1,1,1,0,0,1,1,0]));