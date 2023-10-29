import { PromoVitrineDireita, PromoVitrineEsquerda } from "../utilitarios/PromoVitrine";

export default function CorpoSecundario() {
    return (
        <section className="flex w-full border-4 justify-between p-10">
            <PromoVitrineEsquerda
                src="/img/maca.png"
                height={0}
                width={300}
                titulo="titulo"
                texto="Healty power pills most healthy for u"
                textoBotao="BUY NOW"
                descricao="cheap and powerfull remedy for long term haeling"
                alt="Promoção secundaria"
                valor={0.22}
            />

            <PromoVitrineDireita
                src="/img/jarra-de-agua.png"
                height={0}
                width={300}
                titulo="BEST DRINK"
                texto="long term health"
                textoBotao="click here and join us with these magical benefits"
                alt="Promoção secundaria"
                valor="FOR FREE"
            />
        </section>
    )
}