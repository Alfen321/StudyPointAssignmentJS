var display = document.getElementById('display');
var compareStr = '+-*/';
var opsChar = ['+', '-', '*', '/'];

document.getElementById('buttons').addEventListener('click', function(event) {
    var target = event.target;
    if (target.className == 't1') {
        if (target.id == 'calculate') {
            calculate();
        } else {
            updateDisplay(target);
        }
    }
})

function updateDisplay(target) {
    var value = target.innerHTML;
    if (compareStr.includes(value)) {
        var post = true;
        if (display.innerHTML.length == 0) {
            alert('Cannot start with an operator!');
            post = false;
        }
        opsChar.forEach(function(char) {
            if (display.innerHTML.includes(char)) {
                alert('Cannot add multiple operators!');
                post = false;
            }
        }, this);
        if (post) {
            display.innerHTML += ' ' + target.innerHTML + ' ';
        }
    } else {
        display.innerHTML += target.innerHTML;
    }
}

function calculate() {
    var text = display.innerHTML;
    var arr = text.split(' ');
    var post = true;
    if (arr[2] == '') {
        alert('Illegal move');
        post = false;
    }
    var result;
    switch (arr[1]) {
        case '+':
            result = parseFloat(arr[0]) + parseFloat(arr[2]);
            break;
        case '-':
            result = parseFloat(arr[0]) - parseFloat(arr[2]);
            break;
        case '*':
            result = parseFloat(arr[0]) * parseFloat(arr[2]);
            break;
        case '/':
            if (parseFloat(arr[2]) == 0) {
                alert('You cannot divide by Zero');
                result = '';
            } else {
                result = parseFloat(arr[0]) / parseFloat(arr[2]);
            }
            break;
    }
    if (post) {
        display.innerHTML = result;
    }
}