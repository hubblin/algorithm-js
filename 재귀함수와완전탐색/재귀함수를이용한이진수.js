let answer = '';
function solution(n){
    if(n <= 1){
        if(n === 0){
            return;
        }else{
            answer = answer + n;
            return;
        }
    }else{
        solution(Math.floor(n/2));
        answer = answer + n%2;
    }
    
    return answer;
}

console.log(solution(11));