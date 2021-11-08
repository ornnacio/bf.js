let arrMem = Array(30000), index = 0, output = '';

for (let i = 0; i < arrMem.length; i++) {
    arrMem[i] = 0; //populates the array
}

function interpret(code, input){

    for (let step = 0; step < code.length; step++) {

        switch(code[step]){
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
                if(arrMem[index] == 0){
                    var unmatched = 1;
                    while(unmatched){
                        if (code[++step] === "]") unmatched--;
                        if (code[step] === "[") unmatched++;
                    }
                }
                break;
            case "]":
                if (arrMem[index] > 0) {
                    var unmatched = 1;
                    while (unmatched) {
                        if (code[--step] === "[") unmatched--;
                        if (code[step] === "]") unmatched++;
                    }
                }
                break;
        }
    };

    return output;    
}

let string = `
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.
`

console.log(interpret(string, []))