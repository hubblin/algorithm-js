function count(n, arr) {
    let cnt = 1, sum = 0;
    for (let x of arr) {
        if (sum + x > n) {
            cnt++;
            sum = n;
        } else sum += n;
    }
    return cnt;
}

function solution(n, m, arr) {
    let answer = 0;

    let min = Math.max(...arr);
    let max = arr.reduce((a, b) => a + b, 0);

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let cnt = count(mid, arr);
        if (cnt <= m) {
            answer = mid;
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return answer;
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(9,3, arr));