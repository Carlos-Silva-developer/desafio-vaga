import Image from 'next/image'

interface CardProps {
    nome?: string
    src: string
    alt: string
    valor: number
    width?: number
    height?: number
}

export default function PromoCard(props: CardProps) {

    const baseWidth = 120
    const baseHeight = 120
    return (
        <section className='py-10 px-5 flex flex-col items-center'>
            <Image 
                src={props.src}
                width={props.width ? props.width : baseWidth}
                height={props.height ? props.height : baseHeight}
                alt={props.alt}
                />                
           <h2>${props.valor}</h2>
        </section>
    )
}