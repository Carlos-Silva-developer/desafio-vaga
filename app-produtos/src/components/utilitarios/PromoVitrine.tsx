import Image from 'next/image'

interface VitrineProps {
    src: string
    titulo?: string
    texto: string
    descricao?: string
    textoBotao: string
    alt: string
    valor: number | string
}

export function PromoVitrineEsquerda(props: VitrineProps) {

    return (
        <section className='flex align-middle'>
            <Image
                src={props.src}
                width={200}
                height={0}
                alt={props.alt}
                className='w-40 h-48 align-middle pt-10'
            />
            <div className='flex flex-col justify-center w-52'>
                <h1 className='text-3xl font-extrabold'>
                    ${props.valor}
                </h1>
                <p className='text-justify'>{props.texto}</p>
                <p className='font-bold text-justify'>
                    {props.descricao}
                </p>
                <button className='bg-blue-300 font-bold text-3xl h-16'>{props.textoBotao}</button>
            </div>
        </section>
    )
}

export function PromoVitrineDireita(props: VitrineProps) {

    return (
        <div>
            <section className='flex p-8 ms-5'>
                <div className='flex'>
                <Image
                    src={props.src}
                    width={140}
                    height={0}
                    alt={props.alt}
                    />
                
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-3xl font-extrabold'>{props.titulo}</h1>
                        <p className='text-2xl w-40 font-extrabold italic text-red-600 border-2 p-4'>{props.valor}</p>
                        <p >{props.texto}</p>
                        <p>{props.descricao}</p>
                       
                    </div>
                
                </div>
            </section>
            <div className='ps-6 ms-10 w-56'>
                <button>{props.textoBotao}</button>
            </div>
            
        </div>
    )
}