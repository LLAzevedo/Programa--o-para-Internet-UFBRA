const nameUser = document.getElementById('name');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const pass = document.getElementById('pass');
const confPass = document.getElementById('confPass');
const infoMsg = document.getElementById('info');

function validarDadosFormulario(){
    if(nameUser.value === '' || email.value === '' || cpf.value === '' || pass.value === '' || confPass.value === '')
    {
        infoMsg.style.display = 'block';
        infoMsg.style.backgroundColor = 'red';
        infoMsg.innerText = "Preencha os campos corretamente.";
    } else if(pass.value === confPass.value) {

        cadastrarUsuario();
        
    } else {
        infoMsg.style.display = 'block';
        infoMsg.style.backgroundColor = 'red';
        infoMsg.innerText = "Você informou senhas diferentes.";
    }
}

function cadastrarUsuario(){
    window.location.href = '../view/index.html';
    console.log("Usuário salvo no banco de dados");
}