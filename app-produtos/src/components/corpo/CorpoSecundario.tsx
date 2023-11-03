import { PromoVitrineDireita, PromoVitrineEsquerda } from "../utilitarios/PromoVitrine";

export default function CorpoSecundario({listaProdutos}: any) {

    let promocaoEsquerda = listaProdutos.find((produtoBanco: any) => produtoBanco.nome === "maca")
    let promocaoDireita = listaProdutos.find((produtoBanco: any) => produtoBanco.nome === "agua")

    return (
        <section className="flex w-full justify-center mt-8">
            {
                promocaoEsquerda
                ?   <PromoVitrineEsquerda
                        src={promocaoEsquerda.src}
                        texto={promocaoEsquerda.texto}
                        textoBotao="BUY NOW"
                        descricao="cheap and powerfull remedy for long term haeling"
                        alt="Promoção do dia"
                        valor={promocaoEsquerda.valor} />
                : null
            }
            {
                promocaoDireita
                ?   <PromoVitrineDireita
                        src={promocaoDireita.src}
                        titulo="BEST DRINK"
                        texto={promocaoDireita.texto}
                        textoBotao="click here and join us with these magical benefits"
                        alt={promocaoDireita.alt}
                        valor="FOR FREE" />
                : null
            }

            {!promocaoEsquerda && !promocaoDireita ? <p>Não há promoções disponíveis</p> : null}
        </section>
    )
}