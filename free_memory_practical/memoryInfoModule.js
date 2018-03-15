const os = require('os');

let checkMemory = [];

let registerForAlerts = function (callback) {
    checkMemory.push(callback);
}

let intervalId ;
const checkInfo = function () {
  intervalId = setInterval(function () {
        let memory = os.freemem() / 1024 / 1024;
        if (memory < 1200) {
            for (let i = 0; i < checkMemory.length; i++) {
                checkMemory[i]('Memory is less then 1200MB')
            }
        } else {
            console.log(memory)
        }
    }, 1000);
};

const start = () => {
    checkInfo();
}

const stop = () => {
    clearInterval(intervalId);
}

module.exports = {
    start : start,
    stop : stop,
    registerForAlerts : registerForAlerts
}

