import React from 'react';
import './PDV.css';

function PDV() {
  return (
    <div className="pdv-container">
      {/* Cabeçalho */}
      <header className="pdv-header">
        <div className="pdv-logo">PONTO DE VENDA</div>
      </header>

      {/* Conteúdo Principal */}
      <main className="pdv-main">
        {/* Produtos */}
        <section className="pdv-products">
          <div className="product-header">
            <span>Produto</span>
            <span>Descrição</span>
            <span>Qtde</span>
            <span>Total (R$)</span>
          </div>

          <div className="product-item">
            <span>5051644024025</span>
            <span>Cartão Nintendo Pokemon Eevee</span>
            <span>1,000</span>
            <span>299,00</span>
          </div>
          <div className="product-item">
            <span>8096234801562</span>
            <span>Cartão PSN R$100</span>
            <span>1,000</span>
            <span>100,00</span>
          </div>
          <div className="product-item">
            <span>3457201947253</span>
            <span>Game Call of Duty: Modern Warfare II</span>
            <span>1,000</span>
            <span>349,00</span>
          </div>
          <div className="product-item">
            <span>9845123021456</span>
            <span>Assinatura Xbox Game Pass - 3 meses</span>
            <span>1,000</span>
            <span>149,00</span>
          </div>
        </section>

        {/* Detalhes */}
        <section className="pdv-details">
          <div className="details-header">5051644024025</div>
          <div className="details-content">
            <div>
              <strong>Descrição:</strong> Cartão Nintendo Pokemon Eevee
            </div>
            <div>
              <strong>Preço (R$):</strong> 299,00
            </div>
            <div>
              <strong>Quantidade:</strong> 1,000
            </div>
            <div>
              <strong>Total do Item (R$):</strong> 299,00
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="pdv-footer">
        <div className="total-container">
          <span>Total (R$)</span>
          <span>897,00</span>
        </div>
        <div className="keyboard-hint">
          Utilize as setas ↑ e ↓ do teclado para selecionar um item
        </div>
      </footer>
    </div>
  );
}

export default PDV;
