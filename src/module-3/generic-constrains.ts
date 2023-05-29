const addMetoCrush = <T extends {name: string, age: number, salary: number}>(myInfo: T) =>{
    const crush = "kate winslet";
    const newData = {...myInfo, crush};
    return newData;
};

type MyInfoType = {
    name: string;
    age: number;
    salary: number;
    gender: string;
    other: number;
}

const myInfo:MyInfoType = {
    name: "Mamun",
    age: 100,
    salary: 100000,
    gender: "male",
    other: 565464
};

const result6 = addMetoCrush<MyInfoType>(myInfo);
console.log(result6);