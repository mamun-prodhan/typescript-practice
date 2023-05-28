//type assertion
let emni: any;
emni = "Next Level Web Dev";
console.log((emni as string).length);
<string>emni.length;


function kgToGram(param: string | number): string | number | undefined{
    if(typeof param === "string"){
        const value = parseFloat(param) * 1000;
        return `The Converted result is : ${value} gram`;
    }
    if(typeof param === "number"){
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(100) as number;
// const resultToBeNumber = <number> kgToGram(100);
const resultToBeString = <string> kgToGram(50);


type CustomErrorType = {
    message: string;
}


try{

}
catch(err){
    console.log((err as CustomErrorType).message)
}