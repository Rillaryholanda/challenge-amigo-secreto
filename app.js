//Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos a lista 
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome === '') {
        Swal.fire({
            title: 'Atenção!',
            text: 'Por favor, digite um nome válido!',
            icon: 'warning', 
            confirmButtonText: 'Entendido',  
            confirmButtonColor: '#4B69FD', 
            backdrop: false,
          });
        return; 
    }

    amigos.push(nome);
    atualizarLista();
    nomeInput.value = '';
    nomeInput.focus();

}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li'); 
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

//Função para sortear um amigo secreto
function sortearAmigo() {
     if (amigos.length < 2) {
        Swal.fire({
            title: 'Atenção!',
            text: 'É necessário pelo menos dois amigos para sortear',
            icon: 'warning',  
            confirmButtonText: 'Entendido',  
            confirmButtonColor: '#4B69FD',  
            backdrop: false,

          });
        return; 
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio]; 


    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const li = document.createElement('li');
    li.textContent =  `Seu amigo secreto é: ${amigoSorteado}`; 
    resultado.appendChild(li);
}

//Função para reiniciar o jogo
function reiniciarJogo() {
    amigos = []; 
    listaAmigos.innerHTML = ''; 
    resultado.innerHTML = '';
    nomeInput.value = '';
}