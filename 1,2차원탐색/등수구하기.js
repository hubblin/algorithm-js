function solution(a) {
    let answer = Array.from({ length: a.length }, v => 1);
    for (let i = 0; i < a.length; i++){
        for (let j = 0; j < a.length; j++){
            if (a[i] < a[j]) answer[i]++;
        }
    }
    return answer;
}

console.log(solution([87,89,92,100,76]));