function solution(n,arr) {
    let answer = Number.MIN_SAFE_INTEGER;

    let tmp = [];
    arr.map((v) => {
        tmp.push([v[0], 's']);
        tmp.push([v[1], 'e']);
    })

    tmp.sort((a, b) => {
        if (a[0] === b[0]) return (a[1].charCodeAt() - b[1].charCodeAt()) 
        else return a[0] - b[0];
    })

    let cnt = 0;

    tmp.map((v) => {
        if (v[1] === 's') cnt++;
        else cnt--;
        answer = Math.max(answer, cnt);
    })

    
    return answer;
}

let arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(5,arr));