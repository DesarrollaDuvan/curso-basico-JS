let user = {
    id:1,
    email: 'Nicolas@gmail.com',
    name: 'John',
    activo: true,
    recuperarClave: function(){
        console.log('recuperando clave...');
    },
};

function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Nicolas', 'nico@gmail.com');
let user2 = crearUsuario('felipe', 'felipe@gmail.com');
let user3 = crearUsuario('juan', 'juan@gmail.com');

console.log(user1, user2, user3);