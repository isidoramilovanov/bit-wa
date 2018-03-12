for (let i =0; i<100; i++){
let myPromise = new Promise(function (resolve, reject){
    setTimeout(resolve(i), 500);
})
.then(function(x){
    console.log(x);
})
 }

 