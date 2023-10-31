import PromoCard from "../utilitarios/PormoCard"
import { carregar } from '../../app/const/banco_de_dados'
import { useRef, useState, useEffect } from "react"

export default function MenuCarrossel({ produtos, setImagemPrincipal }: any) {  
    const listaProdutos =  carregar()
    const larguraMaxima = useRef(0)
    const[indice, setIndice] = useState(0)
    const carrossel = useRef<HTMLInputElement>(null)  

    function menuVoltar() {
        if (indice > 0) {
            setIndice(()=> indice - 1)
        }
        console.log("carrossel current:::" + carrossel.current)
        console.log("clicou voltar")
    }

    function menuAvancar() {
        if (carrossel.current !== null && 
            carrossel.current.offsetWidth * indice <= larguraMaxima.current)
        setIndice(()=>indice + 1 )

        console.log("carrossel current:::" + carrossel.current)
        console.log("indice:::" + indice)
        console.log("clicou avançar")
    }

    function selecionar(produto: any) {
        const produtoSelecionado = listaProdutos.find((produtoBanco) => produto.src === produtoBanco.src)
        setImagemPrincipal(produtoSelecionado)
    }

    useEffect(() => {
        if (carrossel !== null && carrossel.current !== null) {
            carrossel.current.scrollLeft = carrossel.current.offsetWidth * indice
        }
    }, [indice])

    useEffect(() => {
        larguraMaxima.current = carrossel.current 
        ? carrossel.current.scrollWidth - carrossel.current.offsetWidth 
        : 0
    }, [])


    const produto = produtos.map((produto: any) => {
        return (
            <li key={produto.nome} onClick={() => selecionar(produto)}>
                <PromoCard nome={produto.nome} src={produto.src} alt={produto.alt} valor={produto.valor} />
            </li>
        )
    })
    return (
        <menu className="flex border-2 m-5 mx-auto">
            <button onClick={()=>menuVoltar()}>botão esquerda</button>
            <div className="flex flex-wrap h-56 gap-5 overflow-hidden carousel-container snap-x align-middle justify-evenly" >
                {produto}
            </div>
            <button onClick={()=>menuAvancar()}>botão direita</button>
        </menu>
    )
}