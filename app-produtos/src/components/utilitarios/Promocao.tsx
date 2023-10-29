import Image from 'next/image'

interface PromoProps {
    src: string
    width: number
    height: number
    alt: string
    valor?: number
    texto?: string
    textoBotao?: string
}
    
export default function Promocao(props: PromoProps) {

    return (
        <section className='flex p-5 border-4 justify-evenly w-max'>
            <Image className='py-2'
                src={props.src}
                width={props.width}
                height={props.height}
                alt={props.alt}
            />
            <div className='w-6/12 py-6 flex flex-col justify-around'>
                <h1 className='text-3xl'>{props.valor}</h1>
                <p>{props.texto}</p>
                <button className='bg-slate-500 w-16 text-2xl'>{props.textoBotao}</button>
            </div>
        </section>
    )
}