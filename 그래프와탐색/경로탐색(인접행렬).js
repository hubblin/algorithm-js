function solution(n, arr){
    let answer =0;
    let graph = Array.from(Array(n+1), () => Array(n+1).fill(0));
    let path = [];
    for(let [i,j] of arr){
        graph[i][j] = 1;
    }
    
    let ch = Array.from({length: n +1}, () => 0);


    function DFS(v){
        if(v === n){
            answer++;
            console.log(path);
        }else{
            for(let i =1; i <= n; i++ ){
                if(graph[v][i] === 1 && ch[i] === 0){
                    ch[i] = 1;
                    path.push(i);
                    DFS(i);
                    ch[i] = 0;
                    path.pop();
                }
            }
        }
    }
    ch[1] = 1;
    path.push(1);
    DFS(1);


    return answer;
}

let arr = [[5,9],[1,2],[1,3],[1,4],[2,1],[2,3],[2,5],[3,4],[4,2],[4,5]];
console.log(solution(5, arr));