function* numberIterator(){
    let array = [1,2,3,4,5,3,4,5,6,7,7];
    for(let i=0; i< array.length; i++) {
        yield array[i];
        console.log(`SEND ELEMENT : ${array[i]} \n`);
    }
}

let iterator = numberIterator();
let el = iterator.next().value;
while(el != undefined) {
    console.log(`REQUEST NEXT ELEMENT : ${el} \n`);
    el = iterator.next().value;
}
