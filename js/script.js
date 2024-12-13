const login = document.getElementById('email');
const senha = document.getElementById('pass');

function validarUsuario()
{
    console.log(login.value + senha.value);
    window.location.href = 
    '../view/cadastro.html';
}