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

  const categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3']; // Exemplos de categorias
  const fornecedores = ['Fornecedor A', 'Fornecedor B', 'Fornecedor C']; // Exemplos de fornecedores

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
              <span>Nome do Produto</span>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <span>Categoria</span>
              <select
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                required
              >
                <option value="">Selecione uma categoria</option>
                {categorias.map((categoria, index) => (
                  <option key={index} value={categoria}>{categoria}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <span>Fornecedor</span>
              <select
                name="fornecedor"
                value={formData.fornecedor}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um fornecedor</option>
                {fornecedores.map((fornecedor, index) => (
                  <option key={index} value={fornecedor}>{fornecedor}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <span>Validade</span>
              <input
                type="date"
                name="validade"
                value={formData.validade}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <span>Descrição</span>
              <textarea
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* CARD: PREÇO */}
          <div className="card">
            <h3>Preço</h3>
            <div className="form-group">
              <span>Preço de Venda</span>
              <input
                type="number"
                name="precoVenda"
                value={formData.precoVenda}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <span>Preço de Custo</span>
              <input
                type="number"
                name="precoCusto"
                value={formData.precoCusto}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <span>Desconto (%)</span>
              <input
                type="number"
                name="desconto"
                value={formData.desconto}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Impostos</span>
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
              <span>Notas Internas</span>
              <textarea
                name="notasInternas"
                value={formData.notasInternas}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Código Fiscal</span>
              <input
                type="text"
                name="codigoFiscal"
                value={formData.codigoFiscal}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Garantia (em meses)</span>
              <input
                type="number"
                name="garantia"
                value={formData.garantia}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Palavras-chave</span>
              <input
                type="text"
                name="palavrasChave"
                value={formData.palavrasChave}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Localização no Estoque</span>
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
              <span>Quantidade em Estoque</span>
              <input
                type="number"
                name="estoqueAtual"
                value={formData.estoqueAtual}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <span>Estoque Máximo</span>
              <input
                type="number"
                name="estoqueMax"
                value={formData.estoqueMax}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <span>Estoque Mínimo</span>
              <input
                type="number"
                name="estoqueMin"
                value={formData.estoqueMin}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <span>SKU</span>
              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <span>Código de Barras</span>
              <input
                type="text"
                name="codigoBarras"
                value={formData.codigoBarras}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* CARD: IMAGENS */}
          <div className="card">
            <h3>Imagens</h3>
            <div className="form-group">
              <span>Imagem 1</span>
              <input
                type="file"
                name="imagem1"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Imagem 2</span>
              <input
                type="file"
                name="imagem2"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Imagem 3</span>
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
              <span>Peso (kg)</span>
              <input
                type="number"
                name="peso"
                value={formData.peso}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <span>Altura (cm)</span>
              <input
                type="number"
                name="altura"
                value={formData.altura}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <span>Largura (cm)</span>
              <input
                type="number"
                name="largura"
                value={formData.largura}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <span>Comprimento (cm)</span>
              <input
                type="number"
                name="comprimento"
                value={formData.comprimento}
                onChange={handleChange}
                required
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
