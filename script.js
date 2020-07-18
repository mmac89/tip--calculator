//document.getElementById('results').style.display = "none";

function calculateTip() {
    let billAmount = document.getElementById('billTotal').value;

    let numOfGuests = document.getElementById('numGuests').value;

    let serviceQuality = document.getElementById('service').value;
    let tipPercent = 0;
    if (serviceQuality === "veryGood") {
        tipPercent = .20;
    } else if (serviceQuality === "good") {
        tipPercent = .15;
    } else if (serviceQuality === "fair") {
        tipPercent = .10;
    } else if(serviceQuality === "poor"){
        tipPercent = .05;
    }
    console.log(tipPercent);
    if( tipPercent == 0){
        console.log(billAmount);
        let total = billAmount;
    }else{
        let tipAmount = billAmount * tipPercent;
        tipAmount = tipAmount.toFixed(2);
        document.getElementById('tip').innerHTML = tipAmount;
        let total= 0;
        total= billAmount * ( 1 + tipPercent);
        total = total.toFixed(2);
        document.getElementById('total').innerHTML = total;
    }

}

document.getElementById('tipButton').addEventListener("click", calculateTip);