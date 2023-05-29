const addMetoCrush = <T>(myInfo: T) =>{
    const crush = "kate winslet";
    const newData = {...myInfo, crush};
    return newData;
};

const myInfo = {
    name: "Mamun",
    age: 100,
    salary: 100000,
};

const result6 = addMetoCrush(myInfo);
console.log(result6);