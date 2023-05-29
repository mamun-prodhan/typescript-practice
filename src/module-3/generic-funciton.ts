// // arrow function
// const createArray = (param: string): string[] => {
//     return [param];
// };

// const createArray1 = <T>(param: T): T[] =>{
//     return [param];
// }

// const createArrayTuple = <X, Y>(param1: X, param2: Y) : [X, Y] =>{
//     return [param1, param2];
// }

// const result1 = createArrayTuple<string, string>("Bangladesh", "Pakistan");

// const result2 = createArrayTuple<boolean, Array<string>>(false, ["USA"]);

// const result3 = createArray1<{name: string}>({name: 'Bangladesh'});



// arrow function
const createArray = <T>(param: T): T[] =>{
    return[param];
};

const resultt = createArray<string>("Bangladesh");
const resultt2 = createArray<boolean> (true);

// spread operator
const crush = "kate winslet";
const myInfo = {
    name: "Mamun Prodhan",
    age: 100,
    salary: 90000
};

const crushMind = <T>(myInfo: T) => {
    const crush = "kate winslet";
    const newData = {...myInfo, crush};
    return newData;
};

const result5 = crushMind(myInfo);
console.log(result5);