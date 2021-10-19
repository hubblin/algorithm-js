function solution(s1,s2) {
    const map1 = new Map();
    s1 = s1.toUpperCase();
    s2 = s2.toUpperCase();

    if (s1.length !== s2.length) return 'NO';
    for (let x of s1) {
        if (map1.has(x)) map1.set(x, map1.get(x)+1);
         else map1.set(x, 1);
    }

    for (let x of s2) {
        if (!map1.has(x) || map1.get(x) === 0) return 'NO'
        map1.set(x, map1.get(x) - 1);
    }

    return 'YES';
}
let s1 = 'abaCC';
let s2 = 'Caaab';
console.log(solution(s1,s2));