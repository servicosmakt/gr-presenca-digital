// Script básico
console.log('Site carregado com sucesso!');

// Adiciona ano atual no footer
const footer = document.querySelector('footer p');
if (footer) {
    const ano = new Date().getFullYear();
    footer.textContent = `© ${ano} GR Presença Digital`;
}