function solution(n,m,arr,hap){
    let answer =0;
    let p = Array.from({length: m} , () => 0);

    function DFS(L,s){
        if(L === m){
            if(Math.floor(p.reduce((a,b) => a+b,0)% hap) === 0) answer++;
        }else{
            for(let i = s; i < n; i++){
                p[L] = arr[i];
                DFS(L+1, i +1);
            }
        }
    }

    DFS(0,0);

    return answer;
}

let arr = [2,4,5,8,12];
console.log(solution(5,3,arr,6));