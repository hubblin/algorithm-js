function solution(T, S) {
    let answer = 0;
    const map1 = new Map();
    const map2 = new Map();

    for (let x of S) {
        if (map1.has(x)) map1.set(x, map1.get(x) + 1);
        else map1.set(x, 1);
    }

    for (let i = 0; i < S.length - 1; i++){
        if (map2.has(T[i])) map2.set(T[i], map2.get(T[i]) + 1);
        else map2.set(T[i], 1);
    }
    let lt = 0;
    for (let i = S.length -1; i < T.length; i++){
        if (map2.has(T[i])) map2.set(T[i], map2.get(T[i]) + 1);
        else map2.set(T[i], 1);

        if (check(map1, map2)) answer++;
        map2.set(T[lt], map2.get(T[lt]) - 1);
        if (map2.get(T[lt]) === 0) map2.delete(T[lt]);
        lt++;
    }

    return answer;
}



function check(map1, map2) {
    for (let [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) !== value) return false;
    }
    return true;
}
let T = 'bacaAacba';
let S = 'abc';
console.log(solution(T, S));