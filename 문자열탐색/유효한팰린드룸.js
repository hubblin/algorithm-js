function solution(a) {
    let s = a.toLowerCase().replace(/[^a-z]/g, '');
    
    if (s.split().reverse().join() !== s) return 'NO';
    return 'YES';
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));