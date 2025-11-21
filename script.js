// Função para rolar suavemente até uma seção
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Função para abrir modal com imagem ampliada
function abrirModal(img) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modal.classList.add('active');
  modalImg.src = img.src;
}

// Formulário de orçamento
document.getElementById('form-orcamento').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const servico = document.getElementById('servico').value;
  const mensagem = document.getElementById('mensagem').value;
  
  // Exibe mensagem de confirmação
  alert(`Pedido recebido com sucesso!\n\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nServiço: ${servico}\n\nEntraremos em contato em breve!`);
  
  // Limpa o formulário
  this.reset();
  
});

// Formulário de agendamento
document.getElementById('form-agenda').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = document.getElementById('nome-agenda').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  
  // Formata a data para exibição
  const dataFormatada = new Date(data + 'T00:00:00').toLocaleDateString('pt-BR');
  
  // Exibe mensagem de confirmação
  alert(`Agendamento confirmado!\n\nNome: ${nome}\nData: ${dataFormatada}\nHora: ${hora}\n\nAté breve!`);
  
  // Limpa o formulário
  this.reset();
  
});

// Smooth scroll para links do menu de navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    scrollToSection(targetId);
  });
});

// Fecha o modal ao clicar fora da imagem
document.getElementById('modal').addEventListener('click', function() {
  this.classList.remove('active');
});

// Previne que o modal feche ao clicar na imagem
document.getElementById('modal-img').addEventListener('click', function(e) {
  e.stopPropagation();
});

// Adiciona efeito de fade-in nas seções ao rolar a página
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Aplica o observer a todas as seções
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});
