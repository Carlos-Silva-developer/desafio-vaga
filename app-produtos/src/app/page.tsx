import MenuLateral from '@/components/menus/MenuLateral'
import Cabecalho from '@/components/corpo/Cabecalho'
import Corpo from '@/components/corpo/Corpo'
import Rodape  from '@/components/corpo/Rodape'

export default function Home() {
  return (
    <>
        <body className="flex flex-col">
            <header className="flex flex-col items-center justify-between border-gray-300 border">
                <Cabecalho texto="My Products"></Cabecalho>
                <p>borda cinza  remover</p> 
            </header>
            <section className="flex">
                <div>
                    <MenuLateral />
                </div>
                <div>
                    <Corpo />
                    <div>
                        <Rodape />
                    </div>
                </div>
                
            </section>
   

        </body>
    </>
  )
}
