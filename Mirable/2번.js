function solution(arr) {
    let answer = 0;
    arr.sort((a, b) => a - b);
    let rSum = 0, lSum = 0, end = arr.length -1;
    for (let i = arr.length - 1; i >= 1; i--){
        lSum = 0;
        rSum += arr[i];
        for (let j = i - 1; j >= 0; j--){
            lSum += arr[j];
            if (rSum === lSum) answer = Math.max(answer, rSum) ;
        }
        
        if (lSum <= rSum) {
            rSum -= arr[end];
            end--;
            lSum = 0;
            for (let j = i - 1; j >= 0; j--){
                lSum += arr[j];
                if (rSum === lSum) answer = Math.max(answer, rSum);
            }
        };
        
    }

    return answer;
}
let arr = [1,1,2,3,4];
console.log(solution(arr));