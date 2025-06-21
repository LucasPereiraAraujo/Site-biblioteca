document.addEventListener("DOMContentLoaded", function () {

    // Busca de livros
    const campoBusca = document.getElementById("campoBusca");
    const botaoBuscar = document.getElementById("botaoBuscar");
    const listaLivros = document.querySelector(".lista-livros");

    if (campoBusca && botaoBuscar && listaLivros) {
        botaoBuscar.addEventListener("click", function () {
            const termo = campoBusca.value.trim().toLowerCase();
            const livros = listaLivros.querySelectorAll(".item-livro");

            livros.forEach(function (livro) {
                const texto = livro.textContent.toLowerCase();
                livro.style.display = texto.includes(termo) ? "block" : "none";
            });
        });

        campoBusca.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                botaoBuscar.click();
            }
        });
    }

    // Página de detalhes do livro
    const tituloLivro = document.getElementById("tituloLivro");
    const autorLivro = document.getElementById("autorLivro");
    const categoriaLivro = document.getElementById("categoriaLivro");
    const publicacaoLivro = document.getElementById("publicacaoLivro");
    const edicaoLivro = document.getElementById("edicaoLivro");
    const sinopseLivro = document.getElementById("sinopseLivro");
    const capaLivro = document.querySelector(".capa-detalhe");

    if (tituloLivro && autorLivro) {
        const livros = {
            "1": {
                titulo: "O Grande Gatsby",
                autor: "F. Scott Fitzgerald",
                categoria: "Romance",
                publicacao: "1925",
                edicao: "Primeira",
                sinopse: "Uma história sobre o sonho americano, amor e tragédia nos anos 20."
            },
            "2": {
                titulo: "1984",
                autor: "George Orwell",
                categoria: "Distopia",
                publicacao: "1949",
                edicao: "Bolso",
                sinopse: "Um futuro sombrio onde tudo é controlado pelo governo."
            },
            "3": {
                titulo: "Dom Quixote",
                autor: "Miguel de Cervantes",
                categoria: "Clássico",
                publicacao: "1605",
                edicao: "Comemorativa",
                sinopse: "As aventuras de um homem que se acha um cavaleiro."
            },
            "4": {
                titulo: "Orgulho e Preconceito",
                autor: "Jane Austen",
                categoria: "Romance",
                publicacao: "1813",
                edicao: "Luxo",
                sinopse: "A história de Elizabeth Bennet e Sr. Darcy na Inglaterra do século XIX."
            },
            "5": {
                titulo: "O Pequeno Príncipe",
                autor: "Antoine de Saint-Exupéry",
                categoria: "Infantil",
                publicacao: "1943",
                edicao: "Ilustrada",
                sinopse: "Um príncipe que viaja por planetas e aprende lições da vida."
            }
        };

        const url = new URLSearchParams(window.location.search);
        const id = url.get("id");

        if (id && livros[id]) {
            const livro = livros[id];
            tituloLivro.textContent = livro.titulo;
            autorLivro.textContent = livro.autor;
            categoriaLivro.textContent = livro.categoria;
            publicacaoLivro.textContent = livro.publicacao;
            edicaoLivro.textContent = livro.edicao;
            sinopseLivro.textContent = livro.sinopse;

            if (capaLivro) {
                capaLivro.src = `imagens/capa_livro_${id}.jpg`;
            }
        } else {
            tituloLivro.textContent = "Livro Não Encontrado";
            sinopseLivro.textContent = "O livro procurado não está disponível.";
        }
    }

    // Formulário de contato
    const formulario = document.getElementById("formularioContato");

    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const motivo = document.getElementById("motivo").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem || !motivo) {
                alert("Preencha todos os campos obrigatórios.");
            } else if (!email.includes("@") || !email.includes(".")) {
                alert("Digite um e-mail válido.");
            } else {
                alert("Mensagem enviada com sucesso!");
                formulario.reset();
            }
        });
    }

});