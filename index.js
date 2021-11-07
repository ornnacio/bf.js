let arrMem = Array(30000), index = 0;

for (let i = 0; i < arrMem.length; i++) {
    arrMem[i] = 0;
}

function interpret(code, input){
    let arr = code.split('');
    arr.forEach(i => {
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
        }
    });
    console.log(arrMem);
}

console.log(interpret('++>+++>+<-', []))