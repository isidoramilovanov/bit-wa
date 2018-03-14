const figlet = require('figlet');

const output = function(){
   return figlet.textSync('Noduli :)', {
        // font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
}

module.exports = {
    output 
}