function consultarCep() {
    const cep = document.getElementById('cep').value;
  
    if (cep.length !== 8 ) {
      alert("Por favor, insira um CEP válido de 8 dígitos.");
      return;
    }
  
    const url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url)
      .then(function(response) {
        if (!response.ok) {
          alert("Erro ao consultar o CEP.");
          limparCampos();
          return;
        }
        return response.json();
      })
      .then(function(data) {
        if (data.erro) {
          alert("CEP não encontrado!");
          limparCampos();
          return;
        }
  
       
        document.getElementById('rua').textContent = data.logradouro || 'Não disponível';
        document.getElementById('bairro').textContent = data.bairro || 'Não disponível';
        document.getElementById('cidade').textContent = data.localidade || 'Não disponível';
        document.getElementById('estado').textContent = data.uf || 'Não disponível';
      })
      .catch(function(error) {
        alert("Erro na consulta do CEP.");
        console.error(error);
        limparCampos();
      });
  }
  
  function limparCampos() {
    document.getElementById('rua').textContent = '';
    document.getElementById('bairro').textContent = '';
    document.getElementById('cidade').textContent = '';
    document.getElementById('estado').textContent = '';
  }
  