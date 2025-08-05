const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sEmail = document.querySelector('#m-email');
const sTelefone = document.querySelector('#m-telefone');
const btnSalvar = document.querySelector('#btnSalvar');

let itens = [];
let id;

// Função para inserir item na tabela
function insertItem(item, index) {
  let tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.email}</td>
    <td>+55 ${item.telefone}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit'></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbody.appendChild(tr);
}

// Função para salvar o formulário
btnSalvar.onclick = e => {
  e.preventDefault();

  if (sNome.value === '' || sEmail.value === '' || sTelefone.value === '') {
    alert('Por favor, preencha todos os campos');
    return;
  }

  if (id !== undefined) {
    itens[id].nome = sNome.value;
    itens[id].email = sEmail.value;
    itens[id].telefone = sTelefone.value;
  } else {
    itens.push({ 'nome': sNome.value, 'email': sEmail.value, 'telefone': sTelefone.value });
  }

  setItensBD();
  loadItens();
  resetForm();
};

// Função para carregar itens do localStorage
function loadItens() {
  itens = getItensBD();
  tbody.innerHTML = '';
  itens.forEach((item, index) => {
    insertItem(item, index);
  });
}

// Função para resetar o formulário
function resetForm() {
  sNome.value = '';
  sEmail.value = '';
  sTelefone.value = '';
  id = undefined;
}

// Funções para salvar e recuperar itens no localStorage
const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? [];
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens));

// Inicializar a tabela
loadItens();
