const inputLogin = document.querySelector("#email");
const inputPass = document.querySelector("#pass");
const button = document.querySelector("#button");

const validarUsuario = (event) => {
    console.log(event.target);

}

button.addEventListener('input', validarUsuario);
