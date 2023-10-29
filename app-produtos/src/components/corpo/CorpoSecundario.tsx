import Promocao from "../utilitarios/Promocao";

export default function CorpoSecundario() {
    return (
        <section className="flex">
            <Promocao
                src="/img/maca.png"
                width={300}
                height={300}
                alt="Promoção secundaria"
            />

            <Promocao
                src="/img/jarra-de-agua.png"
                width={300}
                height={300}
                alt="Promoção secundaria"
            />
        </section>
    )
}