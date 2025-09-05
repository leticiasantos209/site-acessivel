// Atualiza automaticamente o ano no rodapé
document.addEventListener('DOMContentLoaded', () => {
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
});
