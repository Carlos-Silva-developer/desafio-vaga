import {MenuLateral} from '@/components/menus/MenuLateral'
import Cabecalho from '@/components/corpo/Cabecalho'
import Corpo from '@/components/corpo/Corpo'

export default function Home() {
  return (

        <body>
            <div className="flex flex-col w-9/12 m-auto">
                <Cabecalho texto="My Products"></Cabecalho>

                <section className="flex">
                    <div>
                        <MenuLateral />
                    </div>
                    <div>
                        <Corpo />
                    </div>                
                </section>
            </div>  
           
   

        </body>

  )
}
