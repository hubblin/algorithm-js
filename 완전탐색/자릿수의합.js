function solution(n ,arr) {
    let answer , max = Number.MIN_SAFE_INTEGER;

    for (let x of arr) {
        let sum =0,tmp = x;
        while (tmp > 0){
            sum += Math.floor(tmp % 10);
            tmp = Math.floor(tmp / 10);
        }
        if (sum > max) {
            max = sum;
            answer = x;
        } else if (sum === max) {
            answer = Math.max(answer, x);
        }
    }

    return answer;
}

let arr = [128,460, 603, 40, 521,137,123]
console.log(solution(7,arr));