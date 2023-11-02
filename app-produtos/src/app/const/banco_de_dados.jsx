    let arrayDeProdutos = [
        { nome : "suplemento1", src : "/img/pilulas.png", alt : "Imagem de suplemento vitaminico", valor: 0.22, texto: "super supplement for your health and well-being, natural and 100% functional, take advantage of this offer" },
        { nome : "maca", src : "/img/maca.png", alt : "Imagem de uma maçã", valor: 0.22, texto: "Healty power pills most healthy for u"},
        { nome : "salada_verde", src: "/img/salada-verde.png",  alt: "Imagem de uma salada verde", valor: 0.22, texto: "texto da salada verde"},
        { nome : "agua", src : "/img/jarra-de-agua.png", alt : "Imagem de um jarro transparente com agua", valor: 0.22, texto: "long term health" },
        { nome : "suplemteno2", src : "/img/vitamina.png", alt : "Imagem de vitamina em suplemento", valor: 0.22, texto: "texto da suplemento" },
        { nome : "suco_banana", src : "/img/jarra-de-agua.png", alt : "Imagem de um suco de banana", valor: 0.22, texto: "texto da laranja" },
        { nome : "suco_laranja",    src : "/img/cajusinho.png",     alt : "Imagem de um suco de laranja", valor: 0.22, texto: "texto da banara" }
    ]


    export function carregar() {
        return arrayDeProdutos
    }

    export function adicionar(nome, src, alt, valor) {
        const produtoAdicionado = {
            nome: nome,
            src: src,
            alt: alt,
            valor: valor
        }
        arrayDeProdutos.push(produtoAdicionado)
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





