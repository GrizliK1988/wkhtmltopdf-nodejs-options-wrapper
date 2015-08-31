var wkhtmlToPdf = require('wkhtmltopdf-nodejs-entity'),
    io = require('socket.io-client');

var socket = io('http://127.0.0.1:3000');

var page = new wkhtmlToPdf.Page(),
    request = new wkhtmlToPdf.CreateRequest();

page.setInput('http://google.com');

request.setDebug(true);
request.addPage(page);
request.getGlobalOptions().setPageSize('Letter');

socket.on('pdf:create:success', function(response) {
    console.log('Pdf created!');
    console.log(response);

    socket.emit('delete', response.handle);
});

socket.on('pdf:create:fail', function(response) {
    console.log('Pdf creation failed!');
    console.log(response);
});

socket.emit('create', request.toObject());
