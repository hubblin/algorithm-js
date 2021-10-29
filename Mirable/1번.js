

function solution(arr1, arr2) {
    let answer = 0;

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => b-a);
    let end = arr2.length -1;
    for (let i = 0; i < arr1.length; i++){
        while (end >=0 && arr1[i] >= arr2[end]) {
            end--;
        }
        if (end < 0) break;
        answer++;
        end--;
    }

    return answer;
}
let arr1 = [5, 1, 3, 7];
let arr2 = [2, 2, 6, 8];
console.log(solution(arr1, arr2));