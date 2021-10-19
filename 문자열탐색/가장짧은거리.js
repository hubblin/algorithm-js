function solution(s,a) {
    let p = 1000;
    let answer = [];
    for (let x of s) {
        if (x === a) {
            p = 0;
            answer.push(p);
        }

        else {
            p++;
            answer.push(p);
        }
    }

    p = 1000;
    for (let i = s.length -1; i >= 0; i--){
        if (s[i] === a) p = 0;
        else {
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }

    return answer;
}

console.log(solution('teachermode', 'e'));