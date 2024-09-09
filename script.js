let tarefas = [];

document.getElementById('adicionar-btn').addEventListener('click', function() {
  const novaTarefaInput = document.getElementById('nova-tarefa');
  const tarefa = novaTarefaInput.value;

  if (tarefa) {
    tarefas.push(tarefa);
    novaTarefaInput.value = '';
    salvarTarefas();
    renderizarTarefas();
  }
});

function renderizarTarefas() {
  const lista = document.getElementById('lista-tarefas');
  lista.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    li.textContent = tarefa;

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.className = 'remove-btn';
    btnRemover.addEventListener('click', function() {
      removerTarefa(index);
    });

    li.appendChild(btnRemover);
    lista.appendChild(li);
  });
}

function removerTarefa(index) {
  tarefas.splice(index, 1);
  salvarTarefas();
  renderizarTarefas();
}

function salvarTarefas() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
  const tarefasSalvas = localStorage.getItem('tarefas');
  if (tarefasSalvas) {
    tarefas = JSON.parse(tarefasSalvas);
    renderizarTarefas();
  }
}

document.getElementById('share-btn').addEventListener('click', function() {
  const listaCompartilhar = tarefas.map(tarefa => `- ${tarefa}`).join('\n');

  if (navigator.share) {
    navigator.share({
      title: 'Minha Lista de Tarefas',
      text: listaCompartilhar,
    }).then(() => {
      console.log('Compartilhamento realizado com sucesso');
    }).catch((error) => {
      console.error('Erro ao compartilhar:', error);
    });
  } else {
    alert('Compartilhamento não suportado neste dispositivo.');
  }
});

// Carregar tarefas ao iniciar
carregarTarefas();
