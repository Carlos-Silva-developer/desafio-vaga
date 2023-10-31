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

    return (
        <section className='py-10 px-5 mt-6 flex flex-col items justify-end h-48'>
            <Image 
                src={props.src}
                width={props.width ? props.width : 100}
                height={props.height ? props.height : 0}
                alt={props.alt}
                />                
           <h2>${props.valor}</h2>
        </section>
    )
}