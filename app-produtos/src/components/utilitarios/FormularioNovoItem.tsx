import React, { useState } from "react";

export default function FormularioNovoItem({ novoProduto }: any) {
    const [novoProdutoEditado, setNovoProdutoEditado] = useState({nome: "", valor: "", src: "", alt: ""});

    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setNovoProdutoEditado({ ...novoProdutoEditado, [name]: value })
    };

    const handleSubmit = (e: any, novoProdutoEditado: any) => {
        e.preventDefault()
        novoProduto(novoProdutoEditado)
    }

  return (
    <div>
      <h2>Novo Produto</h2>
      <form onSubmit={(e) =>handleSubmit(e, novoProdutoEditado)}>
        <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={novoProdutoEditado.nome}
            onChange={handleInputChange} />

        <input
            type="text"
            name="valor"
            placeholder="Valor"
            value={novoProdutoEditado.valor}
            onChange={handleInputChange} />

        <input
            type="text"
            name="src"
            placeholder="src"
            value={novoProdutoEditado.src}
            onChange={handleInputChange} />

        <input
            type="text"
            name="alt"
            placeholder="alt"
            value={novoProdutoEditado.alt}
            onChange={handleInputChange} />

        <button type="submit">Salvar Novo Produto</button>
      </form>
    </div>
  );
}
