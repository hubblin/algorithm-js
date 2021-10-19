function solution(arr1,arr2) {
    let newarr = arr1.concat(arr2);
    return newarr.sort();
}
let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));