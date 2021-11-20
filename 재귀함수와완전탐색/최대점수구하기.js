function solution(n,m, arr){
    let answer = 0;
    let pn = arr.map(v => v[0]);
    let pt = arr.map(v => v[1]);

    function DFS(L, sum , T){
        if(T > m) return;
        if(L === n){
            answer = Math.max(answer, sum);
        }else{
            DFS(L+1, sum + pn[L] , T + pt[L]);
            DFS(L+1, sum ,T);
        }
    }
    DFS(0,0,0);

    return answer;

}

let arr = [[10,5], [25,12], [15,8], [6,3], [7,4]];
console.log(solution(5,20,arr));