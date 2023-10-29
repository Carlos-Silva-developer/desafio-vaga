 import Promocao from "../utilitarios/Promocao"

export default function CorpoPrincipal() {

    return (
        <section className="align-middle">
            <Promocao 
                src="/img/cajusinho.png" 
                alt="cajusinho" 
                width={400} 
                height={500} 
                valor={5.99} 
                texto="Super sipplement for your health and well-being, natural and 100% functional, take advantage of this offer" 
                textoBotao="Buy" />
        </section>
    )
}