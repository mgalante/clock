function main() {
    var x = 5;
    var clock = document.getElementById("clock");
    setInterval(function () {
        clock.innerHTML = getTime();
    }, 1000);
}
function getTime() {
    var date = new Date();
    return lpad(date.getHours()) + ":" +
        lpad(date.getMinutes()) + ":" +
        lpad(date.getSeconds());
}
function lpad(number) {
    var paddedNumber = number.toString();
    if (paddedNumber.length === 1) {
        paddedNumber = "0" + paddedNumber;
    }
    return paddedNumber;
}

main();