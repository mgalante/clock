function main(): void  {
    let x = 5;
    let clock :HTMLElement | null = document.getElementById("clock");
    setInterval(function () {
			if(clock !== null){
				clock.innerHTML = getTime();				
			}
    }, 1000);
}
function getTime() : string {
    let date : Date = new Date();
    return lpad(date.getHours()) + ":" +
        lpad(date.getMinutes()) + ":" +
        lpad(date.getSeconds());
}
function lpad(number: number):string {
    let paddedNumber: string= number.toString();
    if (paddedNumber.length === 1) {
        paddedNumber = "0" + paddedNumber;
    }
    return paddedNumber;
}

main();