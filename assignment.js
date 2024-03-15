"use strict";
//object
let obj = {
    myBioData: {
        name: "Hamza",
        fname: "Javed",
        age: 20,
        education: 'undergarduate',
        involvein: 'IT initiative program',
    },
};
console.log(" name:", obj.myBioData.name, " fname:", obj.myBioData.fname, " age:", obj.myBioData.age, " education:", obj.myBioData.education, " involvein:", obj.myBioData.involvein);
//we can call whole object direct aswell
console.log(obj.myBioData);
//we can make multiple objects and arrays in one object and can make arrays in arrays
let user = {
    usersbio: {
        name: "hamza",
        age: 20,
        cellno: 1238649699,
    },
    usersfatherbio: {
        fname: "javed",
        age: 60,
        cellno: 1234566778,
    },
    userhobbies: ["cricket", "study", "gathering with friends"]
};
console.log(user.usersbio);
console.log(user.usersfatherbio);
console.log("userhobbies:", user.userhobbies[0], user.userhobbies[1], user.userhobbies[2]);
