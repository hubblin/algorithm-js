function solution(n, arr) {
    let answer = arr;

    for (let i = 0; i < n-1; i++){
        let idx = i;
        for (let j = i + 1; j < n; j++){
            if (arr[j] < 0) {
                idx = j;
                break;
            }else if (arr[j] < arr[idx]) idx = j;
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }

    return answer;
}
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(8, arr));