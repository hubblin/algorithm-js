//LRU(Least Recently Used)

function solution(n, m, arr) {
    let answer = Array.from({length: 5}, x => 0);
    let rt = 0;
    for (let i = 0; i < m; i++) {
        let tmp = arr[i], j;
        if (answer.includes(arr[i])) {
            for (j = rt - 1; j >= 0; j--){
                answer[j + 1] = answer[j];
            }
            answer[j + 1] = tmp;
        } else {
            answer.unshift(arr[i]);
            answer.pop();
            rt++;
        }
        console.log(answer);
    }

    return answer;
}
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5,9,arr));