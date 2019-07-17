document.querySelector('.heading').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');});

var person = {};
document.querySelector('.reg').addEventListener('click', function(e) {
    e.preventDefault();
    var name = document.querySelector('#name').value;
    var password = document.querySelector('#pass').value;
    if(name && password) {
        if(!(name in person)) {
            person[name] = password;
            var p = document.createElement('p');
            p.innerText = 'Name - ' + name + ' / ' + 'Password - ' + password;
            document.querySelector('.users').appendChild(p);
            document.querySelector('#name').value = '';
            document.querySelector('#pass').value = '';
        }
    }
});
document.querySelector('.autor').addEventListener('click', function(e) {
    e.preventDefault();
    var name = document.querySelector('#name').value;
    var password = document.querySelector('#pass').value;
    console.log(person)
    if(name && password) {
        if ((name in person) && (password === person[name])) {
            var p = document.createElement('p');
            p.innerText = 'User - ' + name + ' logged in';
            document.querySelector('.users').appendChild(p);
            document.querySelector('#name').value = '';
            document.querySelector('#pass').value = '';
        }
    }
});