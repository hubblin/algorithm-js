//투 포인터 알고리즘
function solution(n, m, arr) {
    let answer = 0, sum = 0, lt = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
        while (sum > m) {
            sum -= arr[lt++];
        }
        answer += (i - lt + 1);
    }
    return answer;
}

let arr = [1, 3, 1, 2, 3];
console.log(solution(5,6,arr));