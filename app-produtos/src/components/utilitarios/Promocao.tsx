import Image from 'next/image'

interface PromoProps {
    src: string
    width: number
    height: number
    alt: string
    valor?: number | string
    texto?: string
    textoBotao?: string
}
    
export default function Promocao(props: PromoProps) {

    const valorFormatado = props.valor?.toString().replace(".", ",")

    return (
        <section className='flex ps-3 py-3 justify-around w-auto'>
            <Image className='m-2'
                src={props.src}
                width={props.width}
                height={props.height}
                alt={props.alt}
            />
            <div className='w-6/12 pt-7 flex flex-col'>
                <h1 className='text-4xl ps-2'>$ {valorFormatado}</h1>
                <p className='font-sans font-bold'>{props.texto}</p>
                <button className='border-2 border-black w-32 h-14 text-4xl font-bold font-sans'>{props.textoBotao}</button>
            </div>
        </section>
    )
}