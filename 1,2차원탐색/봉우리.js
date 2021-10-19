function solution(arr) {
    let answer = 0 , x = [-1,0,1,0], y= [0,-1,0,1];
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            let flag = 1;
            for (let k = 0; k < 4; k++){
                let dx = i + x[k];
                let dy = j + y[k];

                if (dx > -1 && dy > -1 && dx < arr.length && dy < arr.length && arr[dx][dy] > arr[i][j]) {
                    flag = 0;
                    break;
                }
            }
            answer += flag;
        }
    }
    return answer;
}


let arr = [[5, 3, 7, 2, 3],
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2]];

console.log(solution(arr));