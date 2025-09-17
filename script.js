// Captura o formulário de orçamento
const formOrcamento = document.querySelector("#form-orcamento");

if (formOrcamento) {
  formOrcamento.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const servico = document.querySelector("#servico").value;
    const mensagem = document.querySelector("#mensagem").value;

    alert(`Pedido recebido!\n\nNome: ${nome}\nServiço: ${servico}\nMensagem: ${mensagem}`);
    
    // Aqui futuramente podemos salvar em um banco ou enviar via API
    formOrcamento.reset();
  });
}
