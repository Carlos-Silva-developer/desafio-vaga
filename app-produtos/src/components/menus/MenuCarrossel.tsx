import PromoCard from "../utilitarios/PormoCard"

export default function MenuCarrossel() {
    return (
        <menu>
            <ul className="flex">
                <li className="p-5">
                    <PromoCard 
                        src="/img/mix-de-legumes.png" 
                        alt="cajusinho" 
                        valor={9.99}/>
                </li>
                <li className="p-5">
                    <PromoCard 
                        src="/img/picles.png" 
                        alt="cajusinho" 
                        valor={9.99}/>
                </li>
                <li className="p-5">
                    <PromoCard 
                        src="/img/cajusinho.png" 
                        alt="cajusinho" 
                        valor={9.99}/>
                </li>
                <li className="p-5">
                    <PromoCard 
                        src="/img/vitamina.png" 
                        alt="cajusinho" 
                        valor={9.99}
                        />
                </li>
            </ul>
        </menu>
    )
}