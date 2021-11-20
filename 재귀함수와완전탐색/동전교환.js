function solution(n,coins, total){
    let answer =Number.MAX_SAFE_INTEGER;
    function DFS(L,sum){
        if(sum > total) return;
        if(L >= answer) return;
        if(sum === total){
            answer = Math.min(answer, L);
        }else{
            for(let i=0 ; i< n; i++){
                DFS(L+1, sum + coins[i]);
            }
        }
    }
    DFS(0,0);

    return answer;
}

let n = 3;
let coins = [1,2,5];
let total = 15;
console.log(solution(n,coins, total));