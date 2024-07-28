let balance: number = 0;
let history: string[] = [];

document.getElementById('send')?.addEventListener('click', () => {
    const recipient = (document.getElementById('recipient') as HTMLInputElement).value;
    const amount = parseFloat((document.getElementById('amount') as HTMLInputElement).value);
    
    if (recipient && amount > 0) {
        balance -= amount;
        history.push(`Sent ${amount} $ to ${recipient}`);
        updateUI();
    } else {
        alert("Invalid recipient or amount");
    }
});

function updateUI(): void {
    (document.querySelector('.balance span') as HTMLElement).innerText = `Баланс: ${balance} $`;
    const historyList = document.getElementById('history-list') as HTMLUListElement;
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        historyList.appendChild(li);
    });
}

updateUI();
