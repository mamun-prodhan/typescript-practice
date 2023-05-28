type NoobDeveloper = {
    name: string;
};

// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number;
// };

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
}

// enum Level{
//     junior = 'junior',
//     mid = 'mid',
//     senior = 'senior'
// }


type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: "junior" | "mid" | "senior";
};

const developer: NextLevelDeveloper = {
    name: "Mamun Prodhan",
    expertise: "TypeScript",
    experience: 4,
    leadershipExperience: 4,
    // level: Level.mid,
    level: "mid"
}


const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Mamun Prodhan",
    expertise: "JavaScript",
    experience: 1,
}