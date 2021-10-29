//다시 풀어보기
function solution(n, m, arr) {
    let answer = 0;

    let mid = 0;
    let lt = 0, rt = n - 1;
    arr.sort((a, b) => a - b);
    while (lt <= rt) {
        mid = parseInt((rt + lt) / 2);
        if (m === arr[mid]) {
            mid++;
            break;
        } else if (m < arr[mid]) rt = mid - 1
        else lt = mid + 1;
    }

    return mid;
}
let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(8,32,arr));