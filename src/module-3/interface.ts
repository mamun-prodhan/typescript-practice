type User = {
    name: string;
    age: number;
};

interface IUser {
    name: string;
    age: number;
};

const userWithTypeAlias: User = {
    name: "Type Alias",
    age: 32
};

const userWithInterface: IUser = {
    name: "Interface",
    age: 200,
};