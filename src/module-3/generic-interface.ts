// Generic Interface
interface CrushInterface<T>{
    name: string;
    husband: T;
}

const crush1: CrushInterface<boolean> = {
    name: 'Kate Winslet',
    husband: true
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