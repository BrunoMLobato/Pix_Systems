import React from 'react';
import './PDV.css'; // Arquivo CSS

function PDV() {
  return (
    <div className="pdv-container">
      <header className="pdv-header">
        <div className="pdv-logo">PIX SYSTEMS</div>
        <div className="pdv-user">Fulano <img src="/path/to/user-image.jpg" alt="Usuário" className="user-avatar" /></div>
      </header>

      <main className="pdv-main">
        <section className="pdv-products">
          <div className="product-header">
            <span>Produto</span>
            <span>Preço (R$)</span>
            <span>Qtde</span>
            <span>Total</span>
          </div>

          <div className="product-item">
            <span>5051644024025</span>
            <span>Cartão Nintendo Pokemon Eevee</span>
            <span>299,00</span>
            <span>1,000</span>
            <span>299,00</span>
          </div>
        </section>

        <section className="pdv-details">
          <div className="details-header">5051644024025</div>
          <div className="details-content">
            <div>
              <span>Cartão Nintendo Pokemon Eevee</span>
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

      <footer className="pdv-footer">
        <div className="total-container">
          <span>Total (R$)</span>
          <span>299,00</span>
        </div>
        <div className="keyboard-hint">
          Utilize as setas ↑ e ↓ do teclado para selecionar um item
        </div>
      </footer>
    </div>
  );
}

export default PDV;
