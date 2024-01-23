const user = { id: 1 };

user.name = "Nicolas";
user.guardar = function () {
  console.log("Guardado", user.name);
};

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

const user1 = Object.freeze({ id: 1}); //para que no se puedan modiuficar las propiedades
const user2 = Object.seal({ id: 1});//si queremos que las propiedades esten fijas pero que los valores se puedan cambiar
