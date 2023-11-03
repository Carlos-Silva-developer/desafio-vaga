import React, { useState } from "react";

export default function FormularioEdicao({ produtoEmEdicao, editarProduto }: any) {
    const [produtoEditado, setProdutoEditado] = useState(produtoEmEdicao);


    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setProdutoEditado({ ...produtoEditado, [name]: value })
    };

    const handleSubmit = (e: any, produtoEditado: any) => {
        e.preventDefault()
        editarProduto(produtoEmEdicao, produtoEditado)
    }

  return (
    <div>
      <h2>Editar Produto</h2>
      <form onSubmit={(e) =>handleSubmit(e, produtoEditado)}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={produtoEditado.nome}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="valor"
          placeholder="Valor"
          value={produtoEditado.valor}
          onChange={handleInputChange}
        />
        <button type="submit">Salvar Edição</button>
      </form>
    </div>
  );
}

