const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const registerPanelBtn = document.getElementById('register-panel');
const loginPanelBtn = document.getElementById('login-panel');

// Mostrar painel de cadastro
registerBtn.addEventListener('click', () => {
  container.classList.add('container-active');
});
registerPanelBtn.addEventListener('click', () => {
  container.classList.add('container-active');
});

// Voltar para login
loginBtn.addEventListener('click', () => {
  container.classList.remove('container-active');
});
loginPanelBtn.addEventListener('click', () => {
  container.classList.remove('container-active');
});
