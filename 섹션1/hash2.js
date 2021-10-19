function solution(clothes) {
    var answer = 1;
    const myMap = new Map();

    for(const cl of clothes){
        if(!myMap.get(cl[1])){
            myMap.set(cl[1], 1);
        }else{
            myMap.set(cl[1], myMap.get(cl[1])+1);
        }
    }

    for(const i of myMap.values()){
        answer = answer * (i +1)
    }
    

    return (answer -1);
}


console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));