//투 포인트 알고리즘으로 풀어볼까

function solution(n, m, arr) {
    let answer = 0, sum = 0;

    for (let rt = 0; rt < arr.length; rt++){
        sum += arr[rt];
        
        if (rt > 2) {
            
            sum -= arr[rt - 3];
        }
       if(rt >=2 ) answer = Math.max(answer, sum);
    }

    return answer;
}
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(10,3,arr));