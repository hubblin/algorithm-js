//저 스위치 하는 부분 설명 듣기 
function solution(n, arr) {
    let answer = arr;

    for (let i = 0; i < arr.length; i++){
        let idx = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[idx]) idx = j;
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
    return answer;
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(6, arr));