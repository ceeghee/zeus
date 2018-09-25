// console.log("hello")

var WAValidator = require('src/wallet-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if(valid)
    console.log('This is a valid address');
else
    console.log('Address INVALID');

