//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos a lista 
function adicionarAmigo() {

    //Pegar o valor do campo de entrada
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim(); // O método .trim() remove espaços extras do começo e do final

    //Se o campo estiver vazio, exibe um alerta 
    if (nome === '') {
        Swal.fire({
            title: 'Atenção!',
            text: 'Por favor, digite um nome válido!',
            icon: 'warning',  // Ícone de alert
            confirmButtonText: 'Entendido',  // Texto personalizado no botão
            confirmButtonColor: '#4B69FD'  // Cor personalizada do botão
          });
        return; //Impede de adicionar um nome vazio
    }

    // Se o nome for válido, adiciona o nome ao array "amigos"
    amigos.push(nome);

    //Chama a função atualizarLista para atualizar a lista visual na página
    atualizarLista();

    //Limpa o campo de entrada(input) após adicionar o nome
    nomeInput.value = '';

}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    // Pega a referência do elemento <ul> onde a lista de amigos será exibida
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpa a lista antes de adicionar os novos nomes
    listaAmigos.innerHTML = '';

    // Para cada nome na array "amigos", cria um item de lista (<li>) e o adiciona ao <ul>
    amigos.forEach(amigo => {
        const li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = amigo; // Define o texto do <li> como o nome do amigo 
        listaAmigos.appendChild(li); //Adiciona o <li> a <ul> 
    });
}

//Função para sortear um amigo secreto
function sortearAmigo() {
     // Verifica se há pelo menos dois amigos na lista
     if (amigos.length < 2) {
        Swal.fire({
            title: 'Atenção!',
            text: 'É necessário pelo menos dois amigos para sortear',
            icon: 'warning',  // Ícone de alerta
            confirmButtonText: 'Entendido',  // Texto personalizado no botão
            confirmButtonColor: '#4B69FD'  // Cor personalizada do botão
          });
        return; // Impede o sorteio se não houver pelo menos dois amigos
    }
    //sorteia um índice aleatório dentro do array "amigos"
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio]; //pega o nome do amigo sorteado

    //Pega o elemento <ul> onde o resultado do sorteio será exibido
    const resultado = document.getElementById('resultado');

    //Limpa qualquer resultado de sorteio anterior 
    resultado.innerHTML = '';

    //Cria um novo elemento <li> para exibir o resultado
    const li = document.createElement('li');
    li.textContent =  `Seu amigo secreto é: ${amigoSorteado}`; // Exibe o nome sorteado

    // adicona o <li> com o resultado à lista de resultados
    resultado.appendChild(li);
}

//Função para reiniciar o jogo
function reiniciarJogo() {
    amigos = []; 
    listaAmigos.innerHTML = ''; 
    resultado.innerHTML = '';
    nomeInput.value = '';
}