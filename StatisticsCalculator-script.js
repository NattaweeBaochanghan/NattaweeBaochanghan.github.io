function displaystat(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0]; //changed from original post
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
        average = sum/arr.length;
    }
    alert("For the list " + arr + " the average is " + average + ", the minimum is " + min + ", and the maximum is " + max)
}

function ask() {
    let inputNumber = prompt("Enter a positive integer");
    intInput = parseFloat(inputNumber);
}
list = [];
ask();

while(Number.isInteger(intInput) == false) {
    ask();

    while (Number.isInteger(intInput) == true && intInput >= 0) {
        list.push(intInput);
        ask();

        if (Number.isInteger(intInput) == true && intInput < 0) {
            displaystat(list);
            break;
        }

    } 
}
