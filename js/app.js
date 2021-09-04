function getPin() {
    const pin = Math.round(Math.random() * 10000);
    // console.log(pin)
    // checking whether pin is 4 digit or not. 
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit pin and calling again', pin);
        return getPin();
    }
}



function generatePin() {
    const pin = getPin();
    // console.log(pin);
    // display pin in input section
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    // To get clicked number on key pad
    const number = event.target.innerText;
    // console.log(number)
    // To get input from input box
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        // console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        // To check preious typed number
        const previousNumber = calcInput.value;
        // To add next numbers
        const newNumber = previousNumber + number;
        // showing all typed numbers in input field
        calcInput.value = newNumber;
    }

});
function verifyPin() {
    // console.log('going to verify');
    const generatedPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const successMsg = document.getElementById('notify-success');
    const failedError = document.getElementById('notify-fail');
    if (generatedPin == typedPin) {
        // console.log('pin matched');
        successMsg.style.display = 'block';
        failedError.style.display = 'none';
    }
    else {
        // console.log('oops pin doesnot match')

        failedError.style.display = 'block';
        successMsg.style.display = 'none';
    }
}