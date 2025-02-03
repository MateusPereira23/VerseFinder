//pesquisa seletiva//
        document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".hero input");
    const songs = document.querySelectorAll(".song");

    input.addEventListener("input", function () {
        const filtro = input.value.toLowerCase();

        songs.forEach((song) => {
            const nome = song.textContent.toLowerCase();
            if (nome.includes(filtro)) {
                song.style.display = "block";
            } else {
                song.style.display = "none";
            }
        });
    });
});

//mostra "titulo indisponivel" caso nao encontar//
document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".hero input");
    const songs = document.querySelectorAll(".song");

    // Criar e adicionar um elemento para a mensagem de erro
    const mensagemErro = document.createElement("p");
    mensagemErro.textContent = "Título indisponível";
    mensagemErro.style.color = "#FFD700";
    mensagemErro.style.fontSize = "18px";
    mensagemErro.style.marginTop = "20px";
    mensagemErro.style.display = "none"; // Escondido por padrão
    document.querySelector(".popular-songs").appendChild(mensagemErro);

    input.addEventListener("input", function () {
        const filtro = input.value.toLowerCase();
        let encontrou = false;

        songs.forEach((song) => {
            const nome = song.textContent.toLowerCase();
            if (nome.includes(filtro)) {
                song.style.display = "block";
                encontrou = true;
            } else {
                song.style.display = "none";
            }
        });

        // Exibir mensagem se não encontrar nada
        mensagemErro.style.display = encontrou ? "none" : "block";
    });
});

        //efeito de digitação//
   document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.querySelector(".hero h1");
    const texto = "Encontre a sua música favorita";
    let index = 0;

    function digitar() {
        if (index < texto.length) {
            titulo.textContent += texto[index];
            index++;
            setTimeout(digitar, 100);
        }
    }

    titulo.textContent = "";
    digitar();
});
//modo claro//
document.addEventListener("DOMContentLoaded", function () {
    const botaoTema = document.createElement("button");
    botaoTema.textContent = "🌙";
    botaoTema.style.fontSize = "20px";
    botaoTema.style.padding = "10px";
    botaoTema.style.border = "none";
    botaoTema.style.cursor = "pointer";
    document.querySelector(".navbar").appendChild(botaoTema);

    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        botaoTema.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    });

    const style = document.createElement("style");
    style.textContent = `
        .light-mode {
            background-color: #f0f0f0;
            color: #222;
        }
        .light-mode .navbar {
            background-color: #fff;
            color: #000;
        }
        .light-mode .hero input {
            background-color: #fff;
            color: #000;
            border-color: #222;
        }
    `;
    document.head.appendChild(style);
});
//notificação ao clicar na musica {DESATIVADO} //
//document.addEventListener("DOMContentLoaded", function () {
 //   const songs = document.querySelectorAll(".song a");

  //  songs.forEach((song) => {
   //     song.addEventListener("click", function (event) {
    //        event.preventDefault();
       //     alert("Redirecionando para a letra da música!");
       //     window.location.href = song.href;
    //    });
    //});
//});
