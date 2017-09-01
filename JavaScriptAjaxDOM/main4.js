var msgbox = document.getElementById('app');
document.getElementById('north').addEventListener('click', function(event) {
    msgbox.innerHTML = 'North';
})
document.getElementById('south').addEventListener('click', function(event) {
    msgbox.innerHTML = 'South';
})
document.getElementById('east').addEventListener('click', function(event) {
    msgbox.innerHTML = 'East';
})
document.getElementById('west').addEventListener('click', function(event) {
    msgbox.innerHTML = 'West';
})