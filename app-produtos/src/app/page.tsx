import {MenuLateral} from '@/components/menus/MenuLateral'
import Cabecalho from '@/components/corpo/Cabecalho'
import Corpo from '@/components/corpo/Corpo'
import Rodape  from '@/components/corpo/Rodape'

export default function Home() {
  return (

        <body className="flex flex-col w11/12">
            <Cabecalho texto="My Products"></Cabecalho>

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

  )
}
