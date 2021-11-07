let arrMem = Array(30000), index = 0, output = '', inLoop = false;

for (let i = 0; i < arrMem.length; i++) {
    arrMem[i] = 0; //populates the array
}

function getLoops(s){
    var matches = s.match(/\[(.*?)\]/g);
    return(matches); //array of all loop instances, e.g.: getLoops(this [string] has [loops]) returns [[string], [loops]])
}

function interpret(code, input){

    let arr = code.split(''), counterInput = 0, counterLoop = 0;
    arr.forEach((i, step) => {
        if(!inLoop){
            switch(i){
                case '+':
                    arrMem[index] += 1;
                    break;
                case '-':
                    if(arrMem[index] > 0){
                        arrMem[index] -= 1;
                    }
                    break;
                case '>':
                    index += 1;
                    break;
                case '<': 
                    index -= 1;
                    break;
                case '.':
                    output += String.fromCharCode(arrMem[index]);
                    break;
                case ',':
                    arrMem[index] = input[counterInput];
                    counterInput += 1;
                    break;
                case '[':
                    let loop = getLoops(code)[counterLoop];
                    counterLoop += 1;
                    interpretLoop(loop);
                    inLoop = true;
                    break;
            }
        }else if(i === ']'){
            inLoop = false;
        }
    });

    return output;    
}

function interpretLoop(loop) {
    let arr = loop.split('');
    
    while(arrMem[index] != 0){
        arr.forEach((i, step) => {
            switch(i){
                case '+':
                    arrMem[index] += 1;
                    break;
                case '-':
                    if(arrMem[index] > 0){
                        arrMem[index] -= 1;
                    }
                    break;
                case '>':
                    index += 1;
                    break;
                case '<': 
                    index -= 1;
                    break;
                case '.':
                    output += String.fromCharCode(arrMem[index]);
                    break;
            }
        })
    }
}

let string = `
>>++++[<++++++>-]<[<+++++>-]<-----.>
>++[<+++++>-]<[<->-]<.
------.
++++++++.
`

console.log(interpret(string, []))