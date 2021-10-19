function solution(participant, completion){
    const myMap = new Map();
    let answer = '';

    for(const pt of participant){
        if(!myMap.get(pt)){
            myMap.set(pt, 1);
        }else{
            myMap.set(pt, myMap.get(pt) +1);
        }
    }

    for(const cl of completion){
        if(myMap.get(cl)){
            myMap.set(cl, myMap.get(cl) -1)
        }
    }

    for(const pt of participant){
        if(myMap.get(pt) && myMap.get(pt) >=1){
            answer = pt;
        }
    }


    return answer;
}


let participant = ["mislav", "stanko", "mislav", "ana"]
let completion = ["stanko", "ana", "mislav"]

console.log(solution(participant, completion))