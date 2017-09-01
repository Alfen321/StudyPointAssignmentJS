var selected;

document.getElementById('svg2').addEventListener('click', function(event) {
    if (selected) {
        selected.style.fill = 'rgb(192,192,192)';
    }
    selected = event.target;
    selected.style.fill = 'rgb(255,0,0)';
    getCountry(selected.id);
})

var app = document.getElementById('info');
var url = 'http://restcountries.eu/rest/v1/alpha?codes=';
var conf = { method: 'get' };

function getCountry(id) {
    if (id == 'svg2') {
        return;
    }
    if (id.includes('-')) {
        id = id.split('-')[0];
    }
    app.innerHTML = '';
    var promise = fetch(url + id, conf);
    promise.then(function(response) {
        return response.json();
    }).then(function(json) {
        for (var key in json)
            app.innerText += 'Country: ' + json[key].name + '\n' +
            'Population: ' + json[key].population + '\n' +
            'Area: ' + json[key].area + '\n' +
            'Borders: ' + json[key].borders;
    });
};