function solution(n, arr) {
    let answer = arr;

    for (let i = 0; i < n-1; i++){
        for (let j = i; j < n; j++){
            if (answer[i] > answer[j]) {
                let tmp = answer[i];
                answer[i] = answer[j];
                answer[j] = tmp;
            }
        }
    }

    return answer;
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(6, arr));