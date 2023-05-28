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
}


getMyCarSpeed(10);
getMyCarSpeed("10 kmh^-1");
