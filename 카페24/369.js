function solution(n) {
    let answer = 0;

    for (let i = 1; i < n; i++){
        let tmp = (i + '').split('');
        
        tmp.map((i) => {
            if (i === '3' || i === '6' || i === '9') answer++;
        })
    }

    return answer;
}

console.log(solution(35));


//in : 10 , out : 3
//in : 35 , out : 15