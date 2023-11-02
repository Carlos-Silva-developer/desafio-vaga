import React, { useState } from "react";

export default function FormularioEdicao({ produtoEmEdicao, listaDeProdutos, setListaDeProdutos }: any) {
  const [produtoEditado, setProdutoEditado] = useState(produtoEmEdicao);
    

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setProdutoEditado({ ...produtoEditado, [name]: value })
  };

  const handleSubmit = (produtoEditado: any) => {
    const {nome, valor} = produtoEditado.target
    
    setListaDeProdutos(...listaDeProdutos, [nome], [valor])
  }

  return (
    <div>
      <h2>Editar Produto</h2>
      <form onSubmit={() =>handleSubmit(produtoEditado)}>
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

