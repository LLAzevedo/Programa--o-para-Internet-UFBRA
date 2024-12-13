const login = document.getElementById('email');
const senha = document.getElementById('pass');
const infoMsg = document.getElementById('info');

function autenticarUsuario(){
    if(login.value === '' || senha.value === '')
    {
        infoMsg.style.display = 'block';
        infoMsg.style.backgroundColor = 'red';
        infoMsg.innerText = "Preencha os campos corretamente.";
    } else {
        infoMsg.style.display = 'block';
        infoMsg.style.backgroundColor = 'green';
        infoMsg.innerText = "Usuário autenticado com sucesso.";

        // Colocar rotina de tempo e um efeito de 'carregando' para migrar a página inicial
        // Este efeito simulará a busca do usuário na base de dados que será implementada.
    }
}