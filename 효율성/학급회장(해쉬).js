function solution(n, s) {
    let answer = '', max = 0;
    const map = new Map();
    map.set('A', 0);
    map.set('B', 0);
    map.set('C', 0);
    map.set('D', 0);
    map.set('E', 0);


    for (let x of s) {
        map.set(x, map.get(x) + 1);
        if (max < map.get(x)) {
            answer = x;
            max = Math.max(max, map.get(x));
        }
    }


    return answer;
    
}
let s = 'BACBACCACCBDEDE'
console.log(solution(15, s));