function solution(s) {
    let answer = '', cnt = 1;
    for (let i = 1; i <= s.length; i++){
        if (s[i - 1] === s[i]) {
            cnt++;
        } else {
            if (cnt > 1) answer += s[i - 1] + cnt;
            else answer += s[i - 1];
            cnt = 1;
        }
    }
    return answer;
}

console.log(solution('KKHSSSSSSSE'));