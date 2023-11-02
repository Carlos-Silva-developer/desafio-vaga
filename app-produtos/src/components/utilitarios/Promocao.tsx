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
        <section className='flex ps-3 py-3 justify-center w-auto'>
            <div className="w-96">
                <Image className='mt-3 ms-2 max-h-52'
                    src={props.src}
                    width={props.width}
                    height={props.height}
                    alt={props.alt}
                />
            </div>
            <div className='w-5/12 pt-5 flex flex-col justify-around'>
                <h1 className='text-4xl ps-2'>$ {valorFormatado}</h1>
                <p className='font-sans font-bold'>{props.texto}</p>
                <button className='border-2 border-black w-32 h-14 text-4xl font-bold font-sans'>{props.textoBotao}</button>
            </div>
        </section>
    )
}