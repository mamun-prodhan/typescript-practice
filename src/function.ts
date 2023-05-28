// default perameter
function add(num1:number, num2:number = 10):number {
    return num1 + num2;
}
const result = add(20);
console.log(result);


//spread operator
const myFriends = ['Arjun', 'Shovon', 'Shohagh'];
const newFriends = ['Billal', 'Jeshan', 'ross'];

myFriends.push(...newFriends);
console.log(myFriends);


//rest operator
const greetFriends = (friend1: string, friend2: string, friend3: string): void => 
console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}\n`);

const greetResult = greetFriends('Mamun', 'Shohagh', 'Billal');






const addArrow = (num1:number, num2:number):number => num1 + num2;

const arr = [1, 4, 5]

const newArray = arr.map((elem:number) => elem*elem);

const persons:{
    name:string,
    balance: number,
    addBalance(money:number):void,
} = {
    name: 'Mamun Prodhan',
    balance: 5,
    addBalance(money: number){
        console.log(`My new Balance is ${this.balance + money}`);
    },
}