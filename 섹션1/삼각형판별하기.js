function solution(a,b,c){
    let answer ='YES', max;

    let tot = a+b+c;
    if(a > b) {
        max = a;
    }else if(b >a){
        max = b;
    }
    if(c > max){
        max = c;
    }
    if((tot - max) <= max) answer = "NO"
    return answer;
}

console.log(solution(6,7,11));