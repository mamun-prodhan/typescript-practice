// Generic Interface
interface CrushInterface<T, U = null>{
    name: string;
    husband: T;
    wife?:U;
}

interface PersonInterface{
    name: string;
    age: number;
}

const crush4: CrushInterface<PersonInterface, PersonInterface> = {
     name: 'Kate',
     husband: {
        name: 'mamun',
        age: 24
     },
     wife: {
        name: 'winslet',
        age: 40
     }
}

const crush1: CrushInterface<boolean, string> = {
    name: 'Kate Winslet',
    husband: true,
    wife: "sokina"
}

const crush2: CrushInterface<string> = {
    name: 'purnima',
    husband: 'riaz ahamed'
}

interface IHusband{
    name: string;
    salary: number;
}

const crush3: CrushInterface<IHusband> = {
    name: 'sabnoor',
    husband: {
        name: 'Persian',
        salary: 50000
    }
}