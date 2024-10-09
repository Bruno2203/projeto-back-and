import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

function cadastro() {
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
}

function destino() {
  // Obter os valores do formulário
  const nome_pct_ = document.getElementById('nome_pct').value;
  const descricao_ = document.getElementById('descricao').value;  
  const pais_ = document.getElementById('pais').value;
}

function função() {
  // Obter os valores do formulário
  const id_funcionario_ = document.getElementById('id_funcionario').value;
  const descricao = document.getElementById('descricao').value;  
}

function funcionario() {
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
}

function pacote() {
  // Obter os valores do formulário
  const nome_pct = document.getElementById('nome').value;
  const id_cliente = document.getElementById('id_cliente').value;  
  const id_destino = document.getElementById('id_destino').value;
  const preço_pct = document.getElementById('preço_pct').value;
  const duracao_pct = document.getElementById('duracao_pct').value;
  const descricao_pct = document.getElementById('descricao_pct').value;
  const dt_reserva = document.getElementById('dt_reserva').value;
  const status_pdt = document.getElementById('status_pdt').value;
  const horario_pct = document.getElementById('horario_pct').value;
}

function veiculo() {
  // Obter os valores do formulário
  const marca_v = document.getElementById('marca_v').value;
  const modelo_v = document.getElementById('modelo_v').value;  
  const placa_v = document.getElementById('placa_v').value;
  const lotação = document.getElementById('lotação').value;
  const ultima_manutenção = document.getElementById('ultima_manutenção').value;
}