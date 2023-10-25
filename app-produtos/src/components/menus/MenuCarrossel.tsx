import Promocao from "../utilitarios/Promocao"

export default function MenuCarrossel() {
    return (
        <menu>
            <ul className="flex">
                <li className="px-5">
                    <Promocao src="/img/mix-de-legumes.png" alt="cajusinho" width={150} height={150} />
                </li>
                <li className="px-5">
                    <Promocao src="/img/picles.png" alt="cajusinho" width={150} height={100} />
                </li>
                <li className="px-5">
                    <Promocao src="/img/cajusinho.png" alt="cajusinho" width={150} height={150} />
                </li>
                <li className="px-5">
                    <Promocao 
                        src="/img/vitamina.png" 
                        alt="cajusinho" 
                        width={150} 
                        height={150} 
                        texto="blablavla"
                        valor={500.9}
                        textoBotao="Buy"
                        />
                </li>
            </ul>
        </menu>
    )
}