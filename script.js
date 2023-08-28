var earnings, input, earnings_total, expenses_total, expenses, net_balance, balance;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

// Describe this function...
function add_earnings_expenses() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_text = document.getElementById('text');
  input = convertToNumber(document.getElementById('text').value);
  if (input > 0) {
    let element_list1 = document.getElementById('list1');
    let new_li = document.createElement('li');
    new_li.innerText = convertToNumber(document.getElementById('text').value);

    element_list1.appendChild(new_li);
    earnings.push(input);
    balance.push(input);
  } else if (input < 0) {
    let element_list2 = document.getElementById('list2');
    let new_li2 = document.createElement('li');
    new_li2.innerText = convertToNumber(document.getElementById('text').value);

    element_list2.appendChild(new_li2);
    expenses.push(input);
    balance.push(input);
  }
}

// Describe this function...
function sum_earnings() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total1 = document.getElementById('total1');
  earnings_total = earnings.reduce((a,b) => a+b, 0);
  element_total1.innerText = earnings_total;
}

// Describe this function...
function sum_expenses() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total2 = document.getElementById('total2');
  expenses_total = expenses.reduce((a,b) => a+b, 0);
  element_total2.innerText = expenses_total;
}

// Describe this function...
function find_balance() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_net = document.getElementById('net');
  net_balance = balance.reduce((a,b) => a+b, 0);
  element_net.innerText = net_balance;
}


earnings = [];
expenses = [];
balance = [];


document.getElementById('button1').addEventListener('click', (event) => {
  add_earnings_expenses();
  sum_earnings();
  sum_expenses();
  find_balance();

});

document.getElementById('button2').addEventListener('click', (event) => {
  let element_list12 = document.getElementById('list1');
  element_list12.replaceChildren();
  let element_list22 = document.getElementById('list2');
  element_list22.replaceChildren();
  let element_text2 = document.getElementById('text');
  element_text2.replaceChildren();
  while (!!earnings.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    earnings.shift();
  }
  sum_earnings();
  while (!!expenses.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    expenses.shift();
  }
  sum_expenses();
  while (!!balance.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    balance.shift();
  }
  find_balance();

});