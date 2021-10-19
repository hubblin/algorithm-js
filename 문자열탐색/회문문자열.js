function solution(m) {
    let mid = Math.floor(m.length / 2);

    for (let i = 0; i < mid; i++){
        if (m[i].toLowerCase() !== m[m.length - i - 1].toLowerCase()) {
            return 'NO';
        }
        
    }
    return 'YES';
}

console.log(solution('gooG'));