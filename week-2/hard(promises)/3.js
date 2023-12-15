/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t)
    })
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t)
    })
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t)
    })
}


async function calculateTime(t1, t2, t3) {
    const d = new Date();
    const iTime = d.getTime();
    // console.log(iTime + "teem");
    await Promise.all([wait1(t1*1000),wait2(t2*1000),wait3(t3*1000)])
    console.log("here")
    const fTime = new Date().getTime();
    // console.log(fTime + "final");
    // console.log((fTime-iTime));
    return (fTime-iTime);
    
}

calculateTime(1,2,3);

// console.log(new Date().getTime());



module.exports = calculateTime;