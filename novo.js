async function cadastro() {
  // Obter os valores do formulário
  const nome_ = document.getElementById('nome').value;
  const cpf_ = document.getElementById('cpf').value;  
  const endereco_ = document.getElementById('endereco').value;
  const nacionalidade_ = document.getElementById('nacionalidade').value;
  const n_cartao_ = document.getElementById('n_cartao').value;
  const cvv_ = document.getElementById('cvv').value;
  const dt_nascimento_ = document.getElementById('dt_nascimento').value;
  const email_ = document.getElementById('email').value;
  const telefone_ = document.getElementById('telefone').value;
  const rg_ = document.getElementById('rg').value;

  await fetch ('/cadastro.html',{
    method: 'POST',
    headers: {'content-Type': 'application/JSON'},
    body: JSON.stringify({nome_, cpf_, endereco_, nacionalidade_, n_cartao_, cvv_, dt_nascimento_, email_, telefone_, rg_})
  })
  alert("sucesso!")
}

async function destino() {
  // Obter os valores do formulário
  const nome_pct_ = document.getElementById('nome_pct').value;
  const descricao_ = document.getElementById('descricao').value;  
  const pais_ = document.getElementById('pais').value;

  await fetch ('/cad_destino.html',{
    method: 'POST',
    headers: {'content-Type': 'application/JSON'},
    body: JSON.stringify({nome_pct_, descricao_, pais_})
  })
  alert("sucesso!")
}

async function funcionario() {
  // Obter os valores do formulário
  const nome_ = document.getElementById('nome_f').value;
  const cpf = document.getElementById('cpf_f').value;  
  const cargo = document.getElementById('cargo_f').value;
  const genero = document.getElementById('genero_f').value;
  const salario = document.getElementById('salario_f').value;
  const dt_ad = document.getElementById('dt_ad').value;
  const email_ = document.getElementById('email_f').value;
  const telefone_ = document.getElementById('telefone_f').value;
  const status = document.getElementById('status_f').value;

  await fetch ('/cad_funcionario.html',{
    method: 'POST',
    headers: {'content-Type': 'application/JSON'},
    body: JSON.stringify({nome_, cpf, cargo, genero, salario,dt_ad, email_, telefone_, status})
  })
  alert("sucesso!")
}

async function veiculo() {
  // Obter os valores do formulário
  const marca_v = document.getElementById('marca_v').value;
  const modelo_v = document.getElementById('modelo_v').value;  
  const placa_v = document.getElementById('placa_v').value;
  const lotação = document.getElementById('lotação').value;
  const ultima_manutenção = document.getElementById('ultima_manutenção').value;

  await fetch ('/cad_veiculo.html',{
    method: 'POST',
    headers: {'content-Type': 'application/JSON'},
    body: JSON.stringify({marca_v, modelo_v, placa_v, lotação, ultima_manutenção})
  })
  alert("sucesso!")
}


    const queryParams = new URLSearchParams();
    if (nome_) queryParams.append('Nome', nome_);
    if (cpf_) queryParams.append('CPF', cpf_);
    if (endereco_) queryParams.append('Endereço', endereco_);
    if (nacionalidade_) queryParams.append('Nacionalidade', nacionalidade_);
    if (n_cartao_) queryParams.append('Numero cartão', n_cartao_);
    if (cvv_) queryParams.append('CVV', cvv_);
    if (dt_nascimento_) queryParams.append('Data Nascimento',dt_nascimento_);
    if (email_) queryParams.append('E-mail', email_);
    if (telefone_) queryParams.append('Telefone', telefone_);
    if (rg_) queryParams.append('RG', rg_);

    // Faz a requisição para a rota de consulta
    const response = await fetch(`/consultar-cliente?${queryParams.toString()}`);

    // Verifica se a resposta foi bem sucedida
    if (!response.ok) {
        console.error('Erro ao consultar cliente:', response.statusText);
        return;
    }

    const cliente = await response.json();
    console.log('cliente retornados:', cliente); // Adiciona log para verificar dados retornados
    const tabelaResultados = document.getElementById('resultadoConsulta');
    const tbody = tabelaResultados.querySelector('tbody');
    tbody.innerHTML = ''; // Limpa a tabela antes de adicionar resultados

    if (alunos.length > 0) {
        tabelaResultados.style.display = 'table';
        alunos.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.nome_}</td>
                <td>${cliente.cpf_}</td>
                <td>${cliente.endereco_}</td>
                <td>${cliente.nacionalidade_}</td>
                <td>${cliente.n_cartao_}</td>
                <td>${cliente.cvv_}</td>
                <td>${cliente.dt_nascimento_}</td>
                <td>${cliente.email_}</td>
                <td>${cliente.telefone_}</td>
                <td>${cliente.rg_}</td>
                
            `;
            tbody.appendChild(row);
        });
      alert("ok");
    } else {
        tabelaResultados.style.display = 'none';
        alert('Nenhum cliente encontrado com os critérios informados.');
    }
}

async function buscarCliente() {
  const buscaCliente = document.getElementById('buscaCliente').value;

  // Se o campo de busca estiver vazio, não faz nada
  if (buscaCliente === '') return;

  // Faz a busca no servidor
  const response = await fetch(`/buscar-cliente?query=${buscaCliente}`);

  // Verifica se a resposta foi bem-sucedida
  if (response.ok) {
      const cliente = await response.json();

      // Seleciona o dropdown de cliente
      const clienteSelecionado = document.getElementById('clienteSelecionado');
      clienteSelecionado.innerHTML = '<option value="">Selecione um cliente</option>';

      // Preenche o dropdown com os resultados da busca
      cliente.forEach(cliente => {
          const option = document.createElement('option');
          option.value = cliente.cpf;
          option.textContent = `${cliente.nome} (CPF: ${cliente.cpf})`;
          clienteSelecionado.appendChild(option);
      });

  } else {
      alert('Erro ao buscar cliente. Tente novamente.');
  }
