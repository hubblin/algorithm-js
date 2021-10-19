function answer(n, m, arr) {
    let answer = 0;
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n; j++){
            let cnt = 0;
            for (let k = 0; k < arr.length; k++){
                let di = dj = 0;
                for (let s = 0; s < arr[k].length; s++){
                    if (arr[k][s] === i) di = s;
                    else if (arr[k][s] === j) dj = s;
                }
                if (di < dj) cnt++;
            }
            if (cnt === m) answer++;
        }
    }
    return answer;
};
let arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(answer(4,3,arr));