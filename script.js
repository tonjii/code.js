function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Guilherme', 'Admin');
usuarios.set('Patrick', 'User');

console.log(getAdmins(usuarios));
