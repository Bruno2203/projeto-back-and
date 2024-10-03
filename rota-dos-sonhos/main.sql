-- Tabela Cliente
CREATE TABLE cliente (
  cliente_id INT PRIMARY KEY,
  nome VARCHAR(100),
  cpf VARCHAR(11),
  endereco VARCHAR(255),
  nacionalidade VARCHAR(50),
  numero_cartao VARCHAR(16),
  cvv VARCHAR(4),
  data_nascimento DATE,
  email VARCHAR(100),
  telefone VARCHAR(15),
  documento_identidade VARCHAR(20)
);

-- Tabela Pacote
CREATE TABLE pacote (
  pacote_id INT PRIMARY KEY,
  cliente_id INT,
  nome VARCHAR(100),
  destino_id INT,
  preco DECIMAL(10, 2),
  duracao INT, -- Duração em dias
  descricao TEXT,
  data_reserva DATE,
  status VARCHAR(20), -- Substituindo ENUM por VARCHAR
  horario TIME,
  FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id),
  FOREIGN KEY (destino_id) REFERENCES destino(id_destino)
);

-- Tabela Funcionario
CREATE TABLE funcionario (
  funcionario_id INT PRIMARY KEY,
  nome VARCHAR(100),
  cpf VARCHAR(11),
  cargo VARCHAR(50),
  data_admissao DATE,
  telefone VARCHAR(15),
  email VARCHAR(100),
  salario DECIMAL(10, 2),
  status VARCHAR(20), -- Substituindo ENUM por VARCHAR
  contrato VARCHAR(255) -- Detalhes do contrato ou caminho do arquivo
);

-- Tabela PacoteDestinos
CREATE TABLE pacote_destinos (
  id_pacote_destino INT PRIMARY KEY,
  id_pacote INT, 
  id_destino INT, 
  contrato_destino TEXT NOT NULL,
  funcionario TEXT NOT NULL,
  FOREIGN KEY (id_pacote) REFERENCES pacote(pacote_id), 
  FOREIGN KEY (id_destino) REFERENCES destino(id_destino)
);

-- Tabela Destino
CREATE TABLE destino (
  id_destino INT PRIMARY KEY,
  nome VARCHAR(100),
  descricao TEXT NOT NULL,
  continente VARCHAR(50),
  pais VARCHAR(50)
);

-- Tabela Van
CREATE TABLE van (
  id_van INT PRIMARY KEY,
  modelo VARCHAR(100),
  placa VARCHAR(10),
  capacidade INT,
  status VARCHAR(20)
);

-- Tabela Reserva_Van
CREATE TABLE reserva_van (
  id_reserva INT PRIMARY KEY,
  id_van INT NOT NULL,
  id_pacote INT NOT NULL,
  data_reserva DATE NOT NULL,
  data_utilizacao DATE NOT NULL,
  FOREIGN KEY (id_van) REFERENCES van(id_van),
  FOREIGN KEY (id_pacote) REFERENCES pacote(pacote_id)
);

-- Tabela Funcao
CREATE TABLE funcao (
  id_funcao INT PRIMARY KEY,
  descricao VARCHAR(100)
);

-- Tabela Funcionario_Funcao
CREATE TABLE funcionario_funcao (
  id_funcionario INT NOT NULL,
  id_funcao INT NOT NULL,
  data_atribuicao DATE NOT NULL,
  PRIMARY KEY (id_funcionario, id_funcao),
  FOREIGN KEY (id_funcionario) REFERENCES funcionario(funcionario_id),
  FOREIGN KEY (id_funcao) REFERENCES funcao(id_funcao)
);
