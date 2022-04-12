function showRate() {
    var rate = document.getElementById("rate");
    var element = document.getElementById("rateValue");
    element.innerHTML = parseFloat(rate.value) + "%";

}

function computeInterest() {
    let principle = parseFloat(document.getElementById("amount").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let period = parseInt(document.getElementById("period").value);
    let futureAmount = ((principle * rate * period) / 100).toFixed(2);
    let currentYear = new Date().getFullYear();

    if (!principle || principle <= 0) {
        alert("Enter a positive number");
        document.getElementById("amount").focus();
    } else {
        var messageElement = document.getElementById("message");
        messageElement.innerHTML = `If you deposit <span class="value">${principle}</span>,<br>at an interest rate of <span class="value">${rate}%</span>.<br>You will recieve an amount of <span class="value">${futureAmount}</span>,<br>in the year <span class="value">${currentYear+period}</span>`
    }
}

function numYears() {
    var option = ``;
    for (let i = 1; i <= 20; i++) {
        option += `<option value="${i}">${i}</option>`;
    }
    document.getElementById("period").innerHTML = option;
}