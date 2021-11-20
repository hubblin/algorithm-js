function solution(truck, baduk){
    let answer = 0;
    let total = truck;
    let n = baduk.length;
    function DFS(L, sum){
        if(L === n){
            if(total >= sum && sum > answer) answer = sum;  
        }else{
            DFS(L + 1, sum + baduk[L]);
            DFS(L + 1, sum);
        }

    }
    DFS(0, 0);
    

    return answer;
}


let truck = 259;
let baduk = [81,58,42,33,61];
console.log(solution(truck, baduk));