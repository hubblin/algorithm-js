//송아지 찾기 강의보기

function solution(s,e){
    let answer =0;

    let bfs = [s];
    let ch=Array.from({length:10001}, ()=>0);
    let dis=Array.from({length:10001}, ()=>0);
    ch[s] = 1;
    
    while(bfs.length){
        let v = bfs.shift();
        for(let vx of [v-1, v+1, v+5]){
            if(vx === 0) continue;
            if(vx > 0 && vx <= 10000 && ch[vx] === 0){
                ch[vx] = 1;
                bfs.push(vx);
                dis[vx] = dis[v] + 1
            }
        }
    }
    
    console.log(dis[e])
    return answer;
}

console.log(solution(5, 14));