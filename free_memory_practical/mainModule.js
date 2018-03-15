const memoryInfoModule = require('./memoryInfoModule.js');


memoryInfoModule.registerForAlerts((message) => {
    console.log(message);
});

memoryInfoModule.start();

setTimeout (() => {memoryInfoModule.stop()}
, 10000);