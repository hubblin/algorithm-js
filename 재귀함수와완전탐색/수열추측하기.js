function solution(n,m){
    let answer, flag =0;
    let ch = Array.from(Array(11), () => Array(11)).fill(0);
    let ch2 = Array.from({length: n}, () => 0);
    let d = Array.from({length: n}, () => 0);
    let p = Array.from({length: n}, () => 0);

    function combi(n,r){
        if(ch[n][r] !== 0) return ch[n][r];
        if(n === r || r === 0){
            return 1
        }else{
            return ch[n][r] = combi(n-1, r-1) + combi(n-1,r);
        }
    }

    function DFS(L,sum){
        if(flag === 1) return;
        if(L === n && sum === m){
            flag = 1;
            answer = p.slice();
        }else{
            for(let i =1 ; i <= n; i++){
                if(ch2[i] === 0){
                    ch2[i] =1;
                    p[L] = i;
                    DFS(L+1, sum + (d[L] * p[L]));
                    ch2[i] = 0;
                }
            }
        }
    }

    for(let i =0; i < n; i++){
        d[i] = combi(n -1, i);
    }

    DFS(0,0);

    return answer;
}

console.log(solution(4, 16));