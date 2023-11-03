import {MenuLateral} from '@/components/menus/MenuLateral'
import {Cabecalho} from '@/components/corpo/Cabecalho'
import Corpo from '@/components/corpo/Corpo'

export default function Home() {
  return (
        <section className="flex flex-col w-9/12 m-auto">
            <Cabecalho texto="My Products" />

            <div className="flex w-full justify-between">
                <div className="w-[25%]">
                    <MenuLateral />
                </div>
                <div className="w-[75%]">
                    <Corpo />
                </div>                
            </div>
        </section>
  )
}
