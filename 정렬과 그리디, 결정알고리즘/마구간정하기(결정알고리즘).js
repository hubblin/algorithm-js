function count(arr, mid) {
    let cnt = 1, ed = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - ed >= mid) {
            cnt++;
            ed = arr[i];
        } 
    }
    return cnt;
}
//중간보다 크면 넣는다?
function solution(n, m, arr) {
    let answer = 0;

    arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (count(arr, mid) >= m) {
            answer = mid;
            start = mid +1;
        } else {
            end = mid - 1;
        }
    }
    

    return answer;
}

let arr = [1, 2, 8, 4, 9];

console.log(solution(5,3,arr));