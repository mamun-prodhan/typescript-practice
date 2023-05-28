type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string
}

const crush1: CrushType= {
    name: "Pakhi",
    age: 22,
    profession: "Web developer",
    address: "Pakistan"
}

const crush2: CrushType= {
    name: "Jhankar",
    age: 42,
    profession: "Next level Web develper",
    address: "India"
}

type nameType = string;
const courseName: nameType = "Next level web development";


type operationType = (x: number, y: number) => number;


const calculate = (
    number1: number, 
    number2: number, 
    operation: operationType
    ) =>{
    return operation(number1, number2);
};

calculate(10, 20, (x, y)=> x + y);
calculate(10, 20, (x,y)=> x - y);
calculate(10, 20, (x,y)=> x - y);