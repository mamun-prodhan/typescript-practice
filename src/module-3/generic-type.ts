type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<string, string> = ['Mamun', 'Rashmika Mandana'];

type relationWithSalaryType = {name: string; salary: number};

const relationWithSalary: GenericTuple<relationWithSalaryType, string> = [
    { 
        name: 'Mamun',
        salary: 12000
    },
    "Kate Winslet",
];


 
type GenericArray<T> = Array<T>;

const rollNumbers10: GenericArray<number> = [44, 55, 20];
const allNames: GenericArray<string> = ['dipu', 'drupal', 'disha'];
const isStudent: GenericArray<boolean> = [true, false, true, false];

type NameRollType = {name: string; roll: number};

const userNameAndRollNumbers: GenericArray<NameRollType> = [
    {
        name: 'mamun pro',
        roll: 1,
    },
    {
        name: 'shovon sk',
        roll: 2,
    }
]
