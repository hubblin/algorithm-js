function solution(arr){
    let MAX = Number.MIN_SAFE_INTEGER;
    let sum1 = 0, sum2 =0;
    for (let i = 0; i < arr.length; i++){
        sum1 = 0;
        sum2 = 0;
        for (let j = 0; j < arr.length; j++){
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        if (sum1 > MAX) MAX = sum1;
        else if (sum2 > MAX) MAX = sum2;
    }
    sum1 = 0;
    sum2 = 0;
    for (let i = 0; i < arr.length; i++){
        sum1 += arr[i][i];
        sum2 += arr[i][arr.length - i - 1];
    }
    if (sum1 > MAX) MAX = sum1;
    else if (sum2 > MAX) MAX = sum2;
    return MAX;
}
let myinput = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]]

console.log(solution(myinput))