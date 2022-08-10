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

function collect() {
    while (Number.isInteger(intInput) == true) {

        if(intInput >= 0) {
            list.push(intInput);
            ask();
        }else if ( intInput < 0) {
            if(list.length == 0) {
                alert("For the list 0 the average is 0, the minimum is 0, and the maximum is 0")
            }
            displaystat(list);
            break;
        }
    }
}

list = [];
ask();
collect();
while(Number.isInteger(intInput) == false) {
    ask();
    collect();
}