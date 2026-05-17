let balance = 0;

const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balanceDisplay = document.getElementById("balance");

incomeBtn.addEventListener("click", () => handleTransaction("Inkomst", incomeList));
expenseBtn.addEventListener("click", () => handleTransaction("Utgift", expenseList));

function handleTransaction(type, list) {
  const description = descInput.value.trim();
  const amountStr = amountInput.value.trim();

  if (description === "" || amountStr === "") {
    return;
  }

  const amount = Number(amountStr);
  if (isNaN(amount) || amount <= 0) {
    return;
  }

  if (type === "Inkomst") {
    balance += amount;
  } else if (type === "Utgift") {
    balance -= amount;
  }

  const listItem = document.createElement("li");
  listItem.textContent = `${description} - ${amount} kr (${type})`;
  list.appendChild(listItem);

  balanceDisplay.textContent = balance;

  descInput.value = "";
  amountInput.value = "";
}
