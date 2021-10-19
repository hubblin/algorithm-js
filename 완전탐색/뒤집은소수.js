function solution(n,arr) {
    let answer = [];

    for (let x of arr) {
        let tmp = Number(x.toString().split('').reverse().join(''));
        
        if (prime(tmp)) answer.push(tmp);
    }

    return answer;
};


function prime(n) {
    if (n === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(n)); i++){
        if (n % i === 0) return false;
    }
    return true;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(9, arr));