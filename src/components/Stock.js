import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Stock.css';

const Stock = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      name: 'iPhone 15',
      code: 'ABCDEF',
      category: 'Celulares',
      priceSell: 'R$ 7.999,00',
      priceCost: 'R$ 2.549,00',
      quantity: 1,
      status: 'OK',
      description: 'D1',
    },
    {
      name: 'Galaxy S23',
      code: 'B4UTR9',
      category: 'Celulares',
      priceSell: 'R$ 4.799,00',
      priceCost: 'R$ 1.519,00',
      quantity: 2,
      status: 'C2',
      description: 'D2',
    },
    {
      name: 'iPhone 16',
      code: 'ABCDEG',
      category: 'Celulares',
      priceSell: 'R$ 8.799,00',
      priceCost: 'R$ 2.549,00',
      quantity: 1,
      status: 'OK',
      description: 'D1',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="stock-container">
      <h1 className="relatorio-title">Estoque</h1>
      <div className="stock-header">
        <input
          type="text"
          placeholder="Buscar produto"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="filter-button">Filtros</button>
        <button
          className="add-product-button"
          onClick={() => navigate('/AdicionarProduto', { state: { addProduct } })}
        >
          Adicionar Produto
        </button>
      </div>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Código</th>
            <th>Categoria</th>
            <th>Preço venda</th>
            <th>Preço custo</th>
            <th>Quantidade</th>
            <th>Status</th>
            <th>Descrição</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.code}</td>
              <td>{product.category}</td>
              <td>{product.priceSell}</td>
              <td>{product.priceCost}</td>
              <td>{product.quantity}</td>
              <td>
                <span
                  className={`status-indicator ${product.status === 'OK' ? 'status-ok' : 'status-alert'}`}
                >
                  {product.status}
                </span>
              </td>
              <td>{product.description}</td>
              <td>
                <button className="edit-button">✏️</button>
                <button className="delete-button">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
