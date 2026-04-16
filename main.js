function classifyConsumption() {

    // variable
    let kwh = document.getElementById("kwhInput").value;

    // convert to number
    kwh = Number(kwh);

    // ERROR CONDITION
    if (kwh <= 0 || isNaN(kwh)) {
        alert("❌ Error: Please enter a valid positive number.");
    }

    // CONDITIONS
    else if (kwh <= 100) {
        alert("✅ Lifeline Consumer\nDiscounted electricity rates");
    }

    else if (kwh <= 200) {
        alert("✅ Low Consumption\nNormal residential rate");
    }

    else if (kwh <= 300) {
        alert("✅ Average Consumption\nTypical electricity usage");
    }

    else if (kwh <= 500) {
        alert("✅ High Consumption\nHigher electricity usage");
    }

    else {
        alert("✅ Very High Consumption\nHeavy electricity usage");
    }
}