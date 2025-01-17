import React, { useState } from 'react';
import './AdicionarProduto.css';

const AdicionarProduto = () => {
  const [formData, setFormData] = useState({
    nome: '',
    categoria: '',
    fornecedor: '',
    validade: '',
    descricao: '',
    precoVenda: '',
    precoCusto: '',
    desconto: '',
    impostos: '',
    notasInternas: '',
    codigoFiscal: '',
    garantia: '',
    palavrasChave: '',
    localizacao: '',
    estoqueAtual: '',
    estoqueMax: '',
    estoqueMin: '',
    sku: '',
    codigoBarras: '',
    peso: '',
    altura: '',
    largura: '',
    comprimento: '',
    imagem1: null,
    imagem2: null,
    imagem3: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Produto:', formData);
    alert('Produto adicionado com sucesso!');
  };

  return (
    <div className="adicionar-produto-container">
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div className="card-container">
          {/* CARD: GERAL */}
          <div className="card">
            <h3>Geral</h3>
            <div className="form-group">
              <label>Nome do Produto</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Categoria</label>
              <input
                type="text"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Fornecedor</label>
              <input
                type="text"
                name="fornecedor"
                value={formData.fornecedor}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Validade</label>
              <input
                type="date"
                name="validade"
                value={formData.validade}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Descrição</label>
              <textarea
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* CARD: PREÇO */}
          <div className="card">
            <h3>Preço</h3>
            <div className="form-group">
              <label>Preço de Venda</label>
              <input
                type="number"
                name="precoVenda"
                value={formData.precoVenda}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Preço de Custo</label>
              <input
                type="number"
                name="precoCusto"
                value={formData.precoCusto}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Desconto (%)</label>
              <input
                type="number"
                name="desconto"
                value={formData.desconto}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Impostos</label>
              <input
                type="number"
                name="impostos"
                value={formData.impostos}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* CARD: INFORMAÇÕES */}
          <div className="card">
            <h3>Informações</h3>
            <div className="form-group">
              <label>Notas Internas</label>
              <textarea
                name="notasInternas"
                value={formData.notasInternas}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Código Fiscal</label>
              <input
                type="text"
                name="codigoFiscal"
                value={formData.codigoFiscal}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Garantia (em meses)</label>
              <input
                type="number"
                name="garantia"
                value={formData.garantia}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Palavras-chave</label>
              <input
                type="text"
                name="palavrasChave"
                value={formData.palavrasChave}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Localização no Estoque</label>
              <input
                type="text"
                name="localizacao"
                value={formData.localizacao}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* CARD: ESTOQUE */}
          <div className="card">
            <h3>Estoque</h3>
            <div className="form-group">
              <label>Quantidade em Estoque</label>
              <input
                type="number"
                name="estoqueAtual"
                value={formData.estoqueAtual}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Estoque Máximo</label>
              <input
                type="number"
                name="estoqueMax"
                value={formData.estoqueMax}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Estoque Mínimo</label>
              <input
                type="number"
                name="estoqueMin"
                value={formData.estoqueMin}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>SKU</label>
              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Código de Barras</label>
              <input
                type="text"
                name="codigoBarras"
                value={formData.codigoBarras}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* CARD: IMAGENS */}
          <div className="card">
            <h3>Imagens</h3>
            <div className="form-group">
              <label>Imagem 1</label>
              <input
                type="file"
                name="imagem1"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Imagem 2</label>
              <input
                type="file"
                name="imagem2"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Imagem 3</label>
              <input
                type="file"
                name="imagem3"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* CARD: MEDIDAS */}
          <div className="card">
            <h3>Medidas</h3>
            <div className="form-group">
              <label>Peso (kg)</label>
              <input
                type="number"
                name="peso"
                value={formData.peso}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Altura (cm)</label>
              <input
                type="number"
                name="altura"
                value={formData.altura}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Largura (cm)</label>
              <input
                type="number"
                name="largura"
                value={formData.largura}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Comprimento (cm)</label>
              <input
                type="number"
                name="comprimento"
                value={formData.comprimento}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn-submit">Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AdicionarProduto;
