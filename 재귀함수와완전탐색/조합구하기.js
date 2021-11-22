function solution(n,m){
    let answer =[];
    let p = Array.from({length: m} , () => 0);

    function DFS(L, s){
        if(L === m){
            answer.push(p.slice())
        }else{
            for(let i =s; i<= n; i++){
                p[L] = i;
                DFS(L+1, i+1);
            }
        }
    }

    DFS(0,1)

    return answer;
}


console.log(solution(4,2));