function solution(arr1, arr2) {
    let answer = 0;
    let stack = [];
    for (let x of arr2) {
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i][x - 1] !== 0) {
                let tmp = arr1[i][x - 1];
                arr1[i][x - 1] = 0;
                if (tmp === stack[stack.length - 1]) {
                    stack.pop();
                    answer += 2;
                } else stack.push(tmp);
                break;
            }
        }
    }

    return answer;
}
let arr1 = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
let arr2 = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(arr1, arr2));