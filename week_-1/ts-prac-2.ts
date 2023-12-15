//assignment 2
function swapTwo<T>(a:T,b:T){
    let c = a;
    a = b;
    b = c;
    console.log(a,b);
}

swapTwo(1,2);
swapTwo("abs","nfg");
swapTwo(false , true);