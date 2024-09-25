function cadastro(){
  const codi_ = document.getElementById('nome-rs').value;
  const nome_ = document.getElementById('data').value;
  const apelido_ = document.getElementById('cpf').value;
  const cpfpj_ = document.getElementById('endereco').value;
  const end_ = document.getElementById('contato').value;
  const contatoo_ = document.getElementById('phone').value;
  const fone_ = document.getElementById('codigo').value;

  document.getElementById('codi').innerText = codi_;
  document.getElementById('nome').innerText = nome_;
  document.getElementById('apelido').innerText = apelido_
  document.getElementById('cpf/pj').innerText = cpfpj_;
  document.getElementById('end').innerText = end_;
  document.getElementById('contatop').innerText  = contatoo_;
  document.getElementById('fone').innerText = fone_
}
