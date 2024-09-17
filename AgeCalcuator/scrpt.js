


function cal() {
    const inputField = document.querySelector("#input").value;

    // Check if input is empty
    if (inputField === "") {
        alert("Please enter your birthday");
    } else {
        const inputDate = new Date(inputField);
        const currentDate = new Date();

        // Calculate the current age based on year difference
        let currentAge = currentDate.getFullYear() - inputDate.getFullYear();

        // Check if the birthday has not occurred yet this year
        const monthDiff = currentDate.getMonth() - inputDate.getMonth();
        const dayDiff = currentDate.getDate() - inputDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            currentAge = 0; // If birthday hasn't occurred yet, subtract one year
        }

        // Display the calculated age
        document.querySelector("#age").innerHTML = `You're ${currentAge} years old`;
    }
}
