    let arrayDeProdutos = [
        { nome : "suplemento1", src : "/img/pilulas.png", alt : "Imagem de suplemento vitaminico", valor: 7.86, texto: "Super supplement for your health and well-being, natural and 100% functional, take advantage of this offer" },
        { nome : "maca", src : "/img/maca.png", alt : "Imagem de uma maçã", valor: 1.99, texto: "Healty power pills most healthy for u"},
        { nome : "salada_verde", src: "/img/salada-verde.png",  alt: "Imagem de uma salada verde", valor: 4.66, texto: "Salada leve excelente para prevenir a obesidade"},
        { nome : "agua", src : "/img/jarra-de-agua.png", alt : "Imagem de um jarro transparente com agua", valor: 3.66, texto: "Saude e bem estar em capsulas" },
        { nome : "suplemteno2", src : "/img/vitamina.png", alt : "Imagem de vitamina em suplemento", valor: 5.00, texto: "Saude e bem estar em capsulas" },
        { nome : "suco_banana", src : "/img/suco-de-banana.png", alt : "Imagem de um suco de banana", valor: 4.77, texto: "Bebida rica em vitamina C, excelente para tomar bem gelada" },
        { nome : "suco_laranja",    src : "/img/suco-de-laranja.png", alt : "Imagem de um suco de laranja", valor: 3.21, texto: "Bebida rica em potassio, ótima para combater cãibras" }
    ]


    export function carregarInicial() {
        return arrayDeProdutos
    }

    export function carregar() {
            localStorage.setItem("produtos", JSON.stringify(arrayDeProdutos));
    }

    export function adicionar(nome, src, alt, valor) {
        const produtoAdicionado = {
            nome: nome,
            src: src,
            alt: alt,
            valor: valor
        }
        arrayDeProdutos.push(produtoAdicionado)
        localStorage.setItem("produtos", JSON.stringify(arrayDeProdutos))
    }

    export function remover(nome) {
        const id = buscarIdPorNome(nome)
        arrayDeProdutos.splice(id, 1)
    } 

    export function buscarPorNome(nome) {
        for(let produto in arrayDeProdutos) {
            if(arrayDeProdutos[produto].nome === nome)
                return produto
        }
    }

    export function buscarPorId(id) {
        for(let produto in arrayDeProdutos) {
            if(produto === id)
                return arrayDeProdutos[produto]
        }
    }





