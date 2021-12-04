function solution(n, wires) {
    var answer = n;

    let arr = Array.from(Array(n+1), () => Array(n+1).fill(0));
    let ch = Array.from({length: n+1}, () => false);

    wires.map((v) =>  {
        arr[v[0]][v[1]] = 1;
        arr[v[1]][v[0]] = 1;
    })

    function dfs(v){
        
    }

    for(let i =1; i <= n; i++){
        if(!ch[i]){
            dfs(i);
        }
    }
    
    
    return answer;
}

console.log(solution(9,[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]))