firstFor: for (let num = 0; num < 3; num++) {
    for (let size = 0; size < 4; size++) {
        if(size==2){
            continue firstFor;
        }
        console.log (size);
    }
}
let big = 1;
console.log(big)