function solution(){
    let answer = '';

    let bfs = [1];
    while(bfs.length){
        console.log(bfs);
        let v = bfs.shift();
        answer += v + ' ';
        for(let nv of [v*2 , v*2+1]){
            if(nv > 7) continue;
            bfs.push(nv); 
        }
    }
    

    return answer;
}


console.log(solution());