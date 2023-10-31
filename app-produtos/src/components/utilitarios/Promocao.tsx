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
        <section className='flex ms-16 ps-16 pt-6 justify-around w-auto'>
            <Image className='py-2'
                src={props.src}
                width={props.width}
                height={props.height}
                alt={props.alt}
            />
            <div className='w-6/12 py-6 flex flex-col justify-around'>
                <h1 className='text-4xl'>${props.valor}</h1>
                <p>{props.texto}</p>
                <button className='bg-slate-500 w-28 h-16 text-3xl'>{props.textoBotao}</button>
            </div>
        </section>
    )
}