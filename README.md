# wkhtmltopdf-nodejs-options-wrapper

A wrapper of wkhtmltopdf options.

# Usage

It can be used in a client for **wkhtmltopdf-nodejs-ws-server** (it has to be started) with webpack like following:

**1. Install from npm:**

- **webpack**,
- **wkhtmltopdf-nodejs-options-wrapper**,
- **socket.io-client**.
    
**2. Create client.js file with contents:**

```
var wkhtmlToPdf = require('wkhtmltopdf-nodejs-options-wrapper'),
    io = require('socket.io-client');

var socket = io('http://127.0.0.1:3000'); //<-address of websocket server.

var page = new wkhtmlToPdf.Page(),
    request = new wkhtmlToPdf.CreateRequest();

//let's generate pdf from google page
page.setInput('http://google.com');

//we want to revieve debug out from server. it is useful if errors happen.
request.setDebug(true);
request.addPage(page);
//pdf page size is A4 by default
request.getGlobalOptions().setPageSize('Letter');

socket.on('pdf:create:success', function(response) {
    console.log('Pdf created!');
    console.log(response);
    console.log('Pdf is here: http://127.0.0.1:3000/result_' + response.handle + '.js');
    socket.emit('delete', response.handle);
});

socket.on('pdf:create:fail', function(response) {
    console.log('Pdf creation failed!');
    console.log(response);
});

socket.emit('create', request.toObject());
```

**3. Create webpack.config.js** file with webpack configuration:

```
module.exports = {
    entry: "./client.js",
    output: {
        path: __dirname,
        filename: "compiled.js"
    }
};
```

**4. Compile client.js**

Run **webpack** command from the folder where client.js and webpack.config.js are located. It will create **compiled.js**
file that ca be used in html script tag.

**5. Finish**

Include compiled.js script to any html file and open it in any brower.

After steps 1-5 are done pdf with google page will be generated and you will see link to it in js debugger.

# Running tests

To run unit tests you can use **npm test** command.
