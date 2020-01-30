const numberForm = document.querySelector("#number-form");
const resultTag = document.querySelector("#result");

numberForm.addEventListener("submit", (e) => {
    // Prevent default behviour of the form
    e.preventDefault();

    // Get the number
    const number = document.getElementById("number").value;

    // Check if it's harshad or not
    isHappyNumber(number);
})

const isHappyNumber = (number) => {

    // If the number is a negative number
    if (parseInt(number) < 0) {
        // Return a notification and clear the form
        document.getElementById("number").value = "";
        resultTag.innerHTML = "Both numbers must be positive";
        resultTag.className = "text-danger";
        return;
    }

    let numCharArray = number.split("");
    let sum;
    do {
        sum = 0;
        sum = sumThemUp(numCharArray);
        sum += "";
        numCharArray = sum.split("");
        sum = parseInt(sum);
        if (numCharArray.length == 1){
            break;
        }
    } while (sum != 1);

    if (sum == 1) {
        // Return a notification and clear the form
        document.getElementById("number").value = "";
        resultTag.innerHTML = "It is a happy number";
        resultTag.className = "text-success";
        return;
    } else {
        // Return a notification and clear the form
        document.getElementById("number").value = "";
        resultTag.innerHTML = "It is not a happy number";
        resultTag.className = "text-danger";
        return;
    }
}

const sumThemUp = (numCharArray) => {
    let sum = 0;
    for (let index = 0; index < numCharArray.length; index++) {
        const element = numCharArray[index];
        sum += parseInt(element) * parseInt(element);
    }
    return sum;
}