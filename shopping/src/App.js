import React from "react";

function App() {
  const addItem = () => {
    const itemName = document.getElementById("item").value;
    const itemAmount = document.getElementById("amount").value;
    const list = document.getElementById("list");
    const modal = document.getElementById("modal");

    if (itemName && itemAmount) {
      const newItem = document.createElement("li");
      newItem.textContent = `${itemName} - Quantidade: ${itemAmount}`;
      list.appendChild(newItem);

      document.getElementById("item").value = "";
      document.getElementById("amount").value = "";
    } else {
      modal.style.display = "block";
    }
  };

  const clearList = () => {
    const listShopping = document.getElementById("list");
    listShopping.innerHTML = "";
  };

  const limitQuantity = (event) => {
    const quantityPurchases = event.target.value;
    if (quantityPurchases.length > 30) {
      event.target.value = quantityPurchases.slice(0, 30);
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  };
  return (
    <div className="container">
      <h1>Lista de Compras de Hortifruti</h1>

      <input type="text" id="item" placeholder="Nome do item" maxLength={30} />

      <input
        type="number"
        id="amount"
        placeholder="Quantidade"
        onInput={limitQuantity}
      />

      <button onClick={addItem}>Adicionar</button>

      <button onClick={clearList}>Limpar Lista</button>

      <ul id="list"></ul>
      <div id="modal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <p>Por favor, preencha o nome e a quantidade do item.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
