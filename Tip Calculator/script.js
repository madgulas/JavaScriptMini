


function calculate(){
    const bill1 = Number (document.querySelector("#bill").value);
    const tip1 = Number (document.querySelector("#tip").value); 
    let tipamount = (bill1*tip1)/100;
    let totalamount = tipamount + bill1
    document.getElementById("tipamount").innerHTML = tipamount.toFixed(2);
    document.getElementById("sum").innerHTML = totalamount.toFixed(2);
}

