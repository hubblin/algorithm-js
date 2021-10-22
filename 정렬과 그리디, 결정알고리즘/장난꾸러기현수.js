//내장 라이브러리를 이용하면 깔끔한 코드를 짤 수 있다.

function solution(n, arr) {
    let answer = [];

    let arrSort = arr.slice();
    arrSort.sort((a, b) => a - b);
    for (let i = 0; i < n; i++){
        if (arrSort[i] !== arr[i]) answer.push(i + 1);
    }

    return answer;
}
let arr = [120, 130, 150 ,150, 130, 150];
console.log(solution(9,arr));