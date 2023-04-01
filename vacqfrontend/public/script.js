function displaySum() {
    let firstNumber = Number(document.getElementById("firstNum").innerHTML);
    let secondNumber = Number(document.getElementById("secondNum").innerHTML);

    let total = firstNumber + secondNumber;
    document.getElementById('answer').innerHTML = `${firstNumber} + ${secondNumber} = equals to ${total}`;
}

document.getElementById('sumButton').addEventListener('click', displaySum);