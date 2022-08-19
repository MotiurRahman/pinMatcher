function generateRandonNumber() {


    let randomVal = Math.round(Math.random(4) * 10000);

    let checkLength = randomVal + "";

    if (checkLength.length == 4) {
        return randomVal;
    } else {
        return generateRandonNumber();
    }
}


document.getElementById('generatePin').addEventListener('click', function (e) {

    document.getElementById('pinValue').value = generateRandonNumber();

    // console.log(generateRandonNumber());

});

document.getElementById('calculator').addEventListener('click', function (e) {

    let clickVal = e.target.innerText;
    let inputVal = document.getElementById('inputField').value;

    if (isNaN(clickVal)) {
        if (clickVal == "C") {
            document.getElementById('inputField').value = '';
        }

        if (clickVal == "<") {
            let updateVal = inputVal.split('');
            updateVal.pop();
            document.getElementById('inputField').value = updateVal.join('');
            console.log(updateVal);
        }


    } else {
        document.getElementById('inputField').value = inputVal + clickVal;
    }

});


document.getElementById('pinSubmit').addEventListener('click', function () {

    let randomPin = document.getElementById('pinValue').value;
    let inputPin = document.getElementById('inputField').value;

    if (randomPin == inputPin) {
        console.log("pin Match");
        document.getElementById('notMatch').style.display = "none";
        document.getElementById('match').style.display = "block";
    } else {
        console.log("pin doesnot match");
        document.getElementById('notMatch').style.display = "block";
        document.getElementById('match').style.display = "none";
    }

});