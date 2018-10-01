var Zeus = require('./src/zeus');

var valid = Zeus.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if(valid)
    console.log('This is a valid address');
else
    console.log('Address INVALID');