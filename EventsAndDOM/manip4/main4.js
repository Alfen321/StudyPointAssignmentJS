var targetList = document.getElementById('nameList');

document.getElementById('addName').addEventListener("click", function(event) {
    appendToList(document.getElementById('inputName').value);
    event.preventDefault();
})

document.getElementById('removeFirst').addEventListener("click", function(event) {
    targetList.firstChild.remove();
    event.preventDefault();
})

document.getElementById('removeLast').addEventListener("click", function(event) {
    targetList.lastChild.remove();
    event.preventDefault();
})

var names = ['James', 'Lars', 'David', 'Kurt'];

function appendToList(str) {
    console.log(str);
    targetList.innerHTML += '<li>' + str + '</li>';
}

function init() {
    names.forEach(function(name) {
        appendToList(name);
    }, this);
}

init();