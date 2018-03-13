let array = [];

for (let i = 0; i < 100; i++) {
    array.push(new Promise(function (resolve, reject) {
            setTimeout(() => {
                    if (i > 10) {
                        resolve(i);
                } else {
                    reject(new Error('Failed'));
            }
        }, 500 * Math.random());
        }))
}
array.map(promise => promise.then(function (x) {
    console.log(x);
}), function(error){
    console.log(error);
})

Promise.race(array).then((x) => console.log(`First completed ${x}`))

Promise.all(array).then((x) => console.log('All promises are completed.'))