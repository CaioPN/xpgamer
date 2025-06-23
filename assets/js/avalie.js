const apiKey = '9c59da83beb14e51bc25827ca5a19bff'; // Substitua pela sua chave da RAWG
const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=12`;

let jogoAtual = '';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('jogos-dinamicos');
        data.results.forEach(jogo => {
            const card = document.createElement('div');
            card.className = 'bg-gray-900 rounded-lg shadow-md p-4';

            card.innerHTML = `
        <img src="${jogo.background_image}" alt="${jogo.name}" class="rounded w-full h-100 object-cover mb-3">
        <h3 class="text-xl font-semibold">${jogo.name}</h3>
        <p class="text-sm">Nota da crítica: ${jogo.rating}</p>
        <button class="mt-3 bg-green-600 px-3 py-1 rounded hover:bg-green-700 avaliar-btn" data-nome="${jogo.name}">Avaliar</button>
    `;

            container.appendChild(card);
        });


        function abrirModalAvaliacao(jogo) {
            document.getElementById('img-jogo').src = jogo.background_image;
            document.getElementById('titulo-jogo').textContent = jogo.name;
            document.getElementById('ano-jogo').textContent = new Date(jogo.released).getFullYear();
            document.getElementById('comentario').value = '';
            notaSelecionada = 0;
            renderizarEstrelas();
            document.getElementById('modal-avaliacao').classList.remove('hidden');
        }

        // Adiciona eventos aos botões de avaliação
        document.querySelectorAll('.avaliar-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                jogoAtual = e.target.dataset.nome;
                document.getElementById('modal-avaliacao').classList.remove('hidden');
            });
        });
    })
    .catch(error => console.error('Erro ao carregar jogos:', error));

// Envia avaliação
document.getElementById('btn-enviar').addEventListener('click', () => {
    const nota = document.getElementById('nota-input').value;
    if (nota >= 1 && nota <= 5) {
        alert(`Você avaliou "${jogoAtual}" com nota ${nota}. Obrigado!`);
        fecharModal();
    } else {
        alert('Digite uma nota entre 1 e 5.');
    }
});

// Fecha modal
function fecharModal() {
            document.getElementById('modal-avaliacao').classList.add('hidden');
        }

        document.getElementById('btn-fechar-modal').addEventListener('click', fecharModal);
        document.getElementById('btn-cancelar').addEventListener('click', fecharModal);

        function fecharModal() {
    document.getElementById('modal-avaliacao').classList.add('hidden');
    document.getElementById('nota-input').value = '';
}

