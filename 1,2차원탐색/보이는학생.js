function solution(a) {
    let count = 0, max =0;
    for (let i = 0; i < a.length; i++) {
        if (max < a[i]) {
            count++;
            max = a[i];
        }
    }
    return count;
}

console.log(solution([130,135,148,140,145,150,150,153]));