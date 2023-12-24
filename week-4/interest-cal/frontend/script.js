async function calculateInterest(){
    const p = document.getElementById("principleAmount").value;
    const r = document.getElementById("rate").value;
    const t = document.getElementById("time").value;
    console.log(p,r,t);
    const response = await fetch(`http://localhost:3001/interest?principle=${p}&rate=${r}&time=${t}`);
    const data = await response.json();
    const total = data.total;
    const interest = data.interest;
    document.getElementById("result").innerHTML = "Total amount after "+t+" years will be = " +total;
    document.getElementById("result2").innerHTML = "Simple interest = "+ interest;
}