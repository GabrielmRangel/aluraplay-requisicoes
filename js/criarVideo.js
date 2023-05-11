import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento){
    evento.preventDefault();

    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.ceil(Math.random() * 10).toString();

    try{
        await conectaApi.criaVideo(titulo, descricao, url, imagem);
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e);
        formulario.innerHTML = `<img src="../img/error404.jpg" class="img-error">
        <h2 class="mensagem__titulo">Não foi possível carregar o vídeo.</h2>`
        document.body.style.background = "white";
    }
}

formulario.addEventListener('submit', evento => criarVideo(evento));