function cadastro(){
    const nome_c = document.getElementById('nome-rs').value;
    const data = document.getElementById('data').value;
    const cpf_ = document.getElementById('cpf').value;
    const endereco_ = document.getElementById('endereco').value;
    const contato_ = document.getElementById('contato').value;
    const phone_ = document.getElementById('phone').value;
    const codigo_ = document.getElementById('codigo').value;

    document.getElementById('nome').innerText=nome_c;
    document.getElementById('data_c').innerText=data;
    document.getElementById('cpf_').innerText=cpf_;
    document.getElementById('endereco_c').innerText=endereco_;
    document.getElementById('contato_c').innerText=contato_;
    document.getElementById('phone_c').innerText=phone_;
    document.getElementById('codigo_c').innerText=codigo_;
}