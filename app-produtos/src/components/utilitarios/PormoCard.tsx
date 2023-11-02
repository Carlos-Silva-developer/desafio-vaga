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
        <section className='flex flex-col mb-10 pt-5 items-center justify-end h-36 ms-6 align-bottom '>
            <Image 
                className='max-h-24'
                src={props.src}
                width={props.width ? props.width : 120}
                height={props.height ? props.height : 0}
                alt={props.alt}
                />                
           <h2 className='font-bold'>$ {props.valor}</h2>
        </section>
    )
}