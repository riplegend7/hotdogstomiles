document.getElementById("submit").onclick = function() {
    const milesInput = document.getElementById("milesAmount");
    const value = document.getElementById("value");

    // Check if the input is valid according to HTML5 constraints
    if (milesInput.checkValidity()) {
        const miles = parseFloat(milesInput.value); // Convert to number if valid
        let hotdogsinamile = 10560
        let answer = 0
        answer = miles * hotdogsinamile;
        console.log(answer)
        value.innerText = value.textContent = answer;
    } else {
        // If not valid, the browser usually shows a built-in error message
        // You can also log a custom message if needed
        console.log("Error: Please enter a valid number (HTML5 validation failed).");
        // Optionally trigger the browser's default validation message:
        // milesInput.reportValidity();
    }
}