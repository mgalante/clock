import {lpad, getTime} from "./utils"

function main(): void {
	let x = 5;
	let clock: HTMLElement | null = document.getElementById("clock");
	setInterval(function () {
		if (clock !== null) {
			clock.innerHTML = getTime();
		}
	}, 1000);
}


main();
export function getMax(number1:number, number2:number): number
export function getMax(numbers: number[]): number 
export function getMax(param1: number|number[], param2?:number)	{
	let numbers : number[];
	if(arguments.length == 2)
	{
		numbers = [<number>param1, <number>param2];
	}else{
		numbers = (param1 as number[]);
	}

	let sortedNumbers = numbers.sort((x, y) => {
		if (x == y)
			return 0;
		if (x > y)
			return 1;
		return -1;
	});
	return sortedNumbers[sortedNumbers.length - 1];
}

let max = getMax([5, 1]);
console.log(max)
type currency = "$"|"U$S";


function showAmount(amount: Amount){
	let text = `${amount.sign} ${amount.price}`
	console.log(text);
}

interface Amount {
	price: number;
	sign: currency;
}

var amount :Amount = {
	price: 5,
	sign: "$"
}

showAmount(amount)


function indentity<T>(x: T){
	return x;
}

enum Direccion {
	ADELANTE = "Adelante",
	ATRAS =  "Atras",
	IZQUIERDA = "Izquierda",
	DERECHA = "Derecha",
}

class Auto {
	private _velocidad :number = 10;
	estado : string = "Mi velocidad es 10";	
	direccion : Direccion|string; //Adelante, Atras, Izquierda, Derecha

	set velocidad(velocidad: number){
		this._velocidad = velocidad;
		this.estado = `Mi velocidad es ${velocidad}`;
	}
	get velocidad():number {
		return this._velocidad;
	}
}



let auto:Auto = new Auto();
auto.velocidad = 200;
console.log(auto.estado)
auto.direccion = Direccion.IZQUIERDA