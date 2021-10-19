function * generate(){
    yield 1;
    yield 2;
    return 3;
}

let generator = generate();

let one = generator.next();

console.log(one)