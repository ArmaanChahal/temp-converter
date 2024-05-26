let temperature = document.getElementById("inputtemp");
const tocelc = document.getElementById("tocelcius");
const tofahr = document.getElementById("toFahrenheit");
const sub = document.getElementById("submitForm");
const output = document.getElementById("outputtemp");
const outputMessage = document.getElementById("outputMessage");

function getMessage(celsius) {
    if (celsius > 40) return "Wow, it's hot today!";
    if (celsius > 35) return "Need the AC on.";
    if (celsius > 30) return "Just about bearable.";
    if (celsius > 25) return "Perfect time to go to the beach.";
    if (celsius > 20) return "Nice weather for a walk.";
    if (celsius > 15) return "A bit chilly, but still nice.";
    if (celsius > 10) return "Getting cold, wear a jacket.";
    if (celsius > 5) return "Quite cold, bundle up.";
    if (celsius > 0) return "Freezing! Stay warm.";
    return "Below freezing! Extreme cold.";
}

function convert() {
    let tempValue = parseFloat(temperature.value);
    let convertedTemp, message;

    if (tocelc.checked) {
        convertedTemp = (tempValue - 32) * 5 / 9;
        output.value = convertedTemp.toFixed(2) + " °C";
        message = getMessage(convertedTemp);
    } 
    if (tofahr.checked) {
        convertedTemp = (tempValue * 9 / 5) + 32;
        output.value = convertedTemp.toFixed(2) + " °F";
        message = getMessage((convertedTemp - 32) * 5 / 9);
    }

    outputMessage.textContent = message;
}

sub.addEventListener("click", convert);
