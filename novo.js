function cadastro() {
  // Obter os valores do formulário
  const codi = document.getElementById('codigo').value;
  const nome = document.getElementById('nome').value;
  const apelido = document.getElementById('fantasia').value;
  const cpfpj = document.getElementById('cpf-cnpj').value;
  const end = document.getElementById('endereco').value;
  const contato = document.getElementById('contato').value;
  const telefone = document.getElementById('telefone').value;

  // Armazenar os dados no LocalStorage
  localStorage.setItem('codigo', codi);
  localStorage.setItem('nome', nome);
  localStorage.setItem('apelido', apelido);
  localStorage.setItem('cpfpj', cpfpj);
  localStorage.setItem('endereco', end);
  localStorage.setItem('contato', contato);
  localStorage.setItem('telefone', telefone);

  // Exibir os dados na tela
  document.getElementById('codi').innerText = codi;
  document.getElementById('nome-exibir').innerText = nome;
  document.getElementById('apelido-exibir').innerText = apelido;
  document.getElementById('cpfpj-exibir').innerText = cpfpj;
  document.getElementById('end-exibir').innerText = end;
  document.getElementById('contato-exibir').innerText = contato;
  document.getElementById('fone-exibir').innerText = telefone;

  alert("Dados cadastrados com sucesso!");
}

// Função para carregar os dados do LocalStorage ao carregar a página
function carregarDados() {
  const codi = localStorage.getItem('codigo');
  const nome = localStorage.getItem('nome');
  const apelido = localStorage.getItem('apelido');
  const cpfpj = localStorage.getItem('cpfpj');
  const end = localStorage.getItem('endereco');
  const contato = localStorage.getItem('contato');
  const telefone = localStorage.getItem('telefone');

  if (codi || nome || apelido || cpfpj || end || contato || telefone) {
      document.getElementById('codi').innerText = codi;
      document.getElementById('nome-exibir').innerText = nome;
      document.getElementById('apelido-exibir').innerText = apelido;
      document.getElementById('cpfpj-exibir').innerText = cpfpj;
      document.getElementById('end-exibir').innerText = end;
      document.getElementById('contato-exibir').innerText = contato;
      document.getElementById('fone-exibir').innerText = telefone;
  }
}

// Chamar a função ao carregar a página
window.onload = carregarDados;


document.getElementById('meuformulario').addEventListener('submit', function(Event))
{
  Event.preventDefault
}
function salvar_pct(){

}