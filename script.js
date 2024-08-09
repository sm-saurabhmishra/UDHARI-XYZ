let moneyList = [];
displayItem();

function addItem() {
  let inputElement = document.querySelector('#input-item');
  let quantityElement = document.querySelector('#input-quantity');
  let amountElement = document.querySelector('#input-amount');
  let dateElement = document.querySelector('#input-date');

  let addAccount = inputElement.value;
  let quantity = quantityElement.value;
  let amount = amountElement.value;
  let borrowDate = dateElement.value;

  // Ensure all fields are filled before adding the item
  if (addAccount && quantity && amount && borrowDate) {
    moneyList.push({
      item: addAccount,
      quantity: quantity,
      amount: amount,
      date: borrowDate,
    });

    // Clear the input fields after adding the item
    inputElement.value = '';
    quantityElement.value = '';
    amountElement.value = '';
    dateElement.value = '';

    displayItem();
  } else {
    alert("Please fill in all fields");
  }
}

function displayItem() {
  let containerElement = document.querySelector('#borrow-contain');
  containerElement.innerHTML = '';

  for (let i = 0; i < moneyList.length; i++) {
    let item = moneyList[i].item;
    let quantity = moneyList[i].quantity;
    let amount = moneyList[i].amount;
    let date = moneyList[i].date;

    let newHtml = `
    <div class="item-container">
        <span>${item}</span>
        <span>: ${quantity}</span>
        <span>₹${amount}</span>
        <span>${date}</span>
        <button id = "deleteButton" onclick="deleteItem(${i})">delete</button>
    </div>
    `;
    

    containerElement.innerHTML += newHtml;
  }
}

function deleteItem(index) {
  moneyList.splice(index, 1);
  displayItem();
}
