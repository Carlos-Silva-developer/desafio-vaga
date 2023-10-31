 import Promocao from "../utilitarios/Promocao"
 import { BotaoEditar, BotaoApagar } from "../utilitarios/Botoes"

export function CorpoPrincipal({ imagemSelecionada }: any) {

    return (
        <section>
            <Promocao 
                src={imagemSelecionada.src}
                alt={imagemSelecionada.alt}
                width={200} 
                height={300} 
                valor={imagemSelecionada.valor} 
                texto={imagemSelecionada.texto}
                textoBotao="Buy" />
        </section>
    )
}

export function CorpoPrincipalGerencia() {
    return (
        <section className="border-4 w-10/12">
            <header className="flex m-14">
                <h1 className="border-4 border-red-400">List of product</h1>
                <button className="border-4">+ New</button>
            </header>

            <div className="mx-36">
                <table className="w-9/12 border-4">
                    <tr>
                        <td className="px-5">Red Apple</td>
                        <td>$1.99</td>
                        <td>
                            <BotaoEditar />
                        </td>
                        <td>
                            <BotaoApagar />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5">Green Salad</td>
                        <td>$4.66</td>
                        <td>
                            <BotaoEditar />
                        </td>
                        <td>
                            <BotaoApagar />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5">Water Jar</td>
                        <td>$3.66</td>
                        <td>
                            <BotaoEditar />
                        </td>
                        <td >
                            <BotaoApagar />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5">Natural Supplement 1</td>
                        <td>$7.86</td>
                        <td>
                            <BotaoEditar />
                        </td>
                        <td>
                            <BotaoApagar />
                        </td>
                    </tr> 
                    <tr>
                        <td className="px-5">Natural Supplement 2</td>
                        <td>$5.00</td>
                        <td>
                            <BotaoEditar />
                        </td>
                        <td>
                            <BotaoApagar />
                        </td>
                    </tr> 
                    <tr>
                        <td className="px-5">Banana Juice</td>
                        <td>$4.77</td>
                        <td>
                            <BotaoEditar />
                        </td>
                        <td>
                            <BotaoApagar />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5">Natural Orange Juice</td>
                        <td>$3.21</td>
                        <td>
                            <BotaoEditar />
                        </td>
                        <td>
                            <BotaoApagar />
                        </td>
                    </tr>                     
                </table>

            </div>
        </section>

    )
}