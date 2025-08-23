//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    let input = document.querySelector("input");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
    limparResultado();
}

// Função para atualizar a lista na tela
function atualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function(amigo, index) {
        let li = document.createElement("li");
        li.textContent = amigo;
        li.style.cursor = "pointer";
        li.title = "Clique para remover";

        // Ao clicar no nome, ele é removido da lista
        li.onclick = function() {
            if (confirm(`Deseja remover ${amigo}?`)) {
                amigos.splice(index, 1);
                atualizarLista();
                limparResultado();
            }
        };

        lista.appendChild(li);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    document.querySelector("#resultado").innerHTML = "🎉 Amigo sorteado: " + amigoSorteado;
}

// Função para limpar o resultado quando necessário
function limparResultado() {
    document.querySelector("#resultado").innerHTML = "";
}
