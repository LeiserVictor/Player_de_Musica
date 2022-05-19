let musicas = [
    {titulo:'Beat It - Lofi', artista:'Dy prod. beats', src:'musics/Ｂｅａｔ _ ｉｔ － ｌｏｆｉ ｃｈｉｌｌ ｂｅａｔ _ Ｄｙ ｐｒｏｄ.mp3', img:'images/Imagem_1.jpg'},
    {titulo:'Dirty Diana - Lofi', artista:'Dy prod. beats', src:'musics/Ｄｉｒｔｙ　Ｄｉａｎａ　－　ｌｏｆｉ　ｃｈｉｌｌｈｏｐ _ Dy prod.mp3', img:'images/Imagem_2.jpg'},
    {titulo:'Smooth Criminal - Lofi', artista:'Dy prod. beats', src:'musics/Ｓｍｏｏｔｈ Ｃｒｉｍｉｎａｌ － ｌｏｆｉ ｃｈｉｌｌｏｕｔ _ Dy prod.mp3', img:'images/Imagem_3.jpg'},
];

let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim');
let indexMusica = 0;

let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos do Script
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//Funções

function renderizarMusica(index){
    musica.setAttribute('scr', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.scr = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });  
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos/60);
    let campoSegundos = segundos%60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos +':'+ campoSegundos;
}