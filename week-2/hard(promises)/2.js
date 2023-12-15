function makeItSleep(timeInSec){
    return new Promise(function(resolve){
        setTimeout(resolve,timeInSec)
    })
}

async function example(seconds) {
    console.log("first");
    await makeItSleep(seconds); //sleep for 5 seconds
    console.log("After 5 seconds");
}
example(5000);