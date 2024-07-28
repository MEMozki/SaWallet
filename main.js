let balance = 0;
let history = [];

document.getElementById('send').addEventListener('click', () => {
    const recipient = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (recipient && amount > 0) {
        balance -= amount;
        history.push(`Sent ${amount} $ to ${recipient}`);
        updateUI();
    } else {
        alert("Invalid recipient or amount");
    }
});

function updateUI() {
    document.querySelector('.balance span').innerText = `Баланс: ${balance} $`;
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        historyList.appendChild(li);
    });
}

updateUI();
