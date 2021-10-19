function solution(n,m,arr) {
    let answer = 0;
    let tmp = [];


    for (let i = 0; i < n ; i++){
        for (let j = i+1; j < n; j++){
            for (let k = j + 1; k < n; k++){
                tmp.push(arr[i] + arr[j] + arr[k]);
            }
        }
        
    }


    tmp.sort(function (a, b) {
        return b - a;
    })

    
    let cnt = 0;
    for (let i = 0; i < tmp.length; i++){
        if (tmp[i] !== 0 && tmp[i - 1] !== tmp[i]) cnt++;
        if (cnt === m) {
            answer = tmp[i];
            break;
        }
    }
    

    return answer;
}
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));