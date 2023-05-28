type User = {
    name: string;
    age: number;
};
type extendedUser2 = User & {
    role: string;
};

interface IUser {
    name: string;
    age: number;
};

interface IExtendedUser extends IUser{
    role: string;
}

const extendedUser: IExtendedUser = {
    name: "Mamun",
    age: 32,
    role: "admin"
}
const extendedUsers: extendedUser2 = {
    name: "dipu",
    age: 33,
    role: "student"
}

const userWithTypeAlias: User = {
    name: "Type Alias",
    age: 32
};

const userWithInterface: IUser = {
    name: "Interface",
    age: 200,
};


type addNumbersType = (num1: number, num2: number) => number;
const addNumbers:addNumbersType = (num1, num2) => num1 + num2;
console.log(addNumbers(10,20));

interface IAddNumbers{
    (num1: number, num2: number): number;
}

const addNumbers2:IAddNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(20,20));



type rollType = number[]
interface IRollNumbers{
    [index:number]: number;
}
const rollNumbers2: IRollNumbers = [1, 4, 2];