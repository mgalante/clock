export function lpad(number: number): string {
	let paddedNumber: string = number.toString();
	if (paddedNumber.length === 1) {
		paddedNumber = "0" + paddedNumber;
	}
	return paddedNumber;
}


export function getTime(): string {
	let date: Date = new Date();
	return lpad(date.getHours()) + ":" +
		lpad(date.getMinutes()) + ":" +
		lpad(date.getSeconds());
}
