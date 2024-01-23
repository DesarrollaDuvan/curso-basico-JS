let user = {
    id: 1,
    name: 'John',
    age: 21,
};

for(let prop in user) {
    console.log(user[prop]);
}

let animales = ['chanchito feliz', 'DRagon', 'canguro'];
for(let index in animales) {
    console.log(index, animales[index]);
}