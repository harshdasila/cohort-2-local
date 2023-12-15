function callPromsise(n){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve(console.log("resolved"));
        },n*1000)
    })
    return p;
}

var n=4;
const ans = callPromsise(n);
console.log(ans);
ans.then();