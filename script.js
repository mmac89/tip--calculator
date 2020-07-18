document.getElementById('results').style.display = "none";

function calculateTip() {
    let billAmount = Number(document.getElementById('billTotal').value);

    let numOfGuests = Number(document.getElementById('numGuests').value);

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
    if( tipPercent == 0){
        document.getElementById('tip').textContent = tipPercent;
        let total = billAmount;
        document.getElementById('total').textContent = total;
        document.getElementById('tipPP').textContent = tipPercent;
        document.getElementById('totalPP').textContent = (total /numOfGuests);
    }else{
        let tipAmount = billAmount * tipPercent;
        tipAmount = tipAmount.toFixed(2);
        document.getElementById('tip').textContent = tipAmount;
        let total= 0;
        total= billAmount * ( 1 + tipPercent);
        total = total.toFixed(2);
        document.getElementById('total').textContent = total;
        
        document.getElementById('tipPP').textContent = (tipAmount/ numOfGuests);
        document.getElementById('totalPP').textContent = (total /numOfGuests);
        document.getElementById('results').style.display = "block";
    }
    
}

document.getElementById('tipButton').addEventListener("click", calculateTip);