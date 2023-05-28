//ternary operator
const age: number = 12;

if(age >=18){
    console.log("Yes");
}
else{
    console.log("NO");
}

const isAdult = age >= 18 ? "Yes, He is Adult" : "No, Not adult";
console.log(isAdult);


// Nullish coalescing operator ??
//It will set a defalut value depending on null and undefined
const isAuthenticatedUser = "";
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest 2";
console.log({userName} , {userName2});



type Manush = {
    name: string;
    age: number;
    address: {
        city: "No city";
        road: "No Road";
        home?: "";
    };
};

const manush1: Manush = {
    name: "Mamun",
    age: 22,
    address: {
        city: "No city",
        road: "No Road",
    },
};

const home = manush1?.address?.home ?? "No Home"; //defalult "NO HOme"
console.log({home});