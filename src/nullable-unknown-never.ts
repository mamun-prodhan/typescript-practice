// nullable types
const searchName = (value: string | null) => {
    if(value === null){
        console.log("There is noting to search");
    }
    else{
        console.log("searching the name of developer");
    }
}

// searchName(null);


// unknown types
const getMyCarSpeed = (speed: unknown) => {
    if(typeof speed  === "number"){
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if(typeof speed === 'string'){
        const [value, unit] = speed.split(" ");
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My converted speed is ${convertedSpeed}`);
        // const convertedSpeed = (value * 1000) / 3600;
        // console.log(`My converted speed is ${convertedSpeed}`)
    }
    else{
        console.log("There is wrong type");
    }
}

getMyCarSpeed(10);
getMyCarSpeed("10 kmh^-1");
getMyCarSpeed(true);


// never type in typescript
function throwError(message: string){
    throw new Error(message);
}

throwError("404 not found");


function throwError2(message: string){
    throw new Error(message);
}

throwError2("File not found");
