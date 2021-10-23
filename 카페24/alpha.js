// 문제 설명
// 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성

// 길이가 짧은 것 부터
// 길이가 같으면 사전 역순으로
// 입력
// N 개의 알파벳 소문자로 이루어진 단어

// 기대값
// 조건에 따라 정렬하여 단어 리턴.
// 단, 같은 단어가 여러 번 입력된 경우에는 한 번만 포함하여 리턴.

function solution(arr) {
    let answer = [];
    let tmp = [[]];
    for (let x of arr) {
        while(tmp.length <= x.length) {
            tmp.push([]);
        }
        if(!tmp[x.length].includes(x)) tmp[x.length].push(x);
    }

    for (let i = 0; i < tmp.length; i++){
        answer = answer.concat(tmp[i].sort().reverse());
    }

    return answer
}
let arr = ["a", "aaa", "bb", "ab", "cc", "cba", "a"]
console.log(solution(arr));

//["a", "cc", "bb", "ab", "cba", "aaa"]