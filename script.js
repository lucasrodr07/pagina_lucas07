const btn = document.getElementById('mensagemBtn');
const mensagemDiv = document.getElementById('mensagem');

btn.addEventListener('click', () => {
    mensagemDiv.textContent = 'Seja bem-vindo(a)! Continue buscando seus objetivos com dedicação e foco.';
    mensagemDiv.style.textAlign = 'center';
    mensagemDiv.style.fontSize = '18px';
    mensagemDiv.style.color = '#27ae60';
    mensagemDiv.style.marginTop = '15px';
});
