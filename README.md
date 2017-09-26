# Apuntes clase TypeScript

# Visual Studio Code
`CTRL + SHIFT + P` Buscar comandos
`CTRL +`` `  ó `CTRL +ñ` Abre la consola`

Trabajamos siempre sobre una carpeta considerando que esa carpeta es el proyecto. Dicha carpeta deberia ser el root del repo de GIT.

# GIT
Es un software de control de versiones distribuido. Eso signica que vamos a tener una copia del repositorio completo con toda su historia en nuestra máquina y poder trabajar offline de manera efeciente. Además podemos trabajar con múltiples repositorios remotos.

## Configuracion de GIT
Para accender a repositorios externos al banco hay que configurar el proxy:
```bash
git config --global http.proxy http://arbueproxy:80
```

## Algunos comandos Básicos
Luego que está seteado el proxy, podemos clonar un repo remoto, por ejemplo:
```bash
git clone https://github.com/mgalante/clock.git
```
opcionalmente podemos elegir la CARPETA de destino

```bash
git clone https://github.com/mgalante/clock.git CARPETA
``` 

Para actualizar nuestro repo local:
```bash
git pull
```


# Node JS 
Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.

## Configuración

1. Modificar el PATH del sistema para que node esté al principio
1. Ejecutar en la consola:
`npm config set proxy http://arbueproxy:80`
`npm config set https-proxy http://arbueproxy:80`

## NPM
Vamos a usarlo sólo para instalar paquetes de forma global. Al hacerlo dejamos disponible en la consola nuevos comandos. Para todo lo demás usaremos yarn.

`npm install -g NOMBRE_DEL_PAQUETE`

## Yarn
Es una alternativa mas eficiente a NPM (el gestor de paquetes de Node)

### Instalación
`npm install -g yarn`

### Uso:
Crear el package.json original:
`yarn init`

Para agregar dependecias:

dependencias del producto en sí: ej. un Widget, jQuery o Angular
`yarn add NOMBRE_DEL_PAQUETE` 

dependencias para desarrollar: ej. typescript
`yarn add --dev NOMBRE_DEL_PAQUETE`

Si ya tenemos un package.json o bajamos una actualizacion del repo y queremos instalar las dependencias listadas en el mismo: typescript
`yarn install` 


## package.json 
guardará la información del paquete, los scripts necesarios par la gestion y sus dependencias de desarrollo y de ejecución.

## Scripts de ejecución
agregar a package.json un propiedad ejemplo:

`"scripts": {
    "build": "webpack",
    "start": "webpack-dev-server"
}`

ejecución de un script
`yarn build ` ó `yarn start`

# TypeScript
Lenguaje de programación y Compilador escrito en TypeScript.
Como puede ser posible ? https://stackoverflow.com/questions/193560/writing-a-compiler-in-its-own-language

Mas allá de lo explicado en este tutorial, la documentación oficial está muy bien armada, es clara y completa: https://www.typescriptlang.org/


## Instalación

A nivel global:
`npm install -g typescript`

a nivel proyecto:
`yarn add --dev typescript`

## Configuración
Crear tsconfig.json inicial
`tsc --init`


## Compilar:
`tsc`
CCompila una vez

`tsc -w`
Compila y queda corriendo esperando cambios
Por lo general vamos a usarlo indirectamente con webpack

# WebPack
webpack es un empaquetador de modulos para aplicaciones de JavaScript Modernas. Además agrega un runtime para levantar los modulos desde el browser

## Concpetos Basicos
* Entry:
Puntos de partida para levantar el grafo de dependecias

* Output: 
Salida (archivos generados)

* Loaders:
Transforman los archivos de entrada para poder ser incluidos en el grafo de dependencias

* Plugins:
Tiene acceso a todo. Se usan para todo lo que un loader no puede hacer.

## Instalación
`yarn add --dev webpack`

Tambien vamos a necesitar:
`yarn add --dev webpack-dev-server awesome-typescript-loader`

crear un archivo
`webpack.config.js`


# Repaso Javascript

## Tipos de javascript
### Basicos
`string` cadenas de caracteres
`number` numeros enteros y de punto flotante
`boolean` true/false
`null` elementos sin valor
`undefined` elementos no definidos

### Compuestos
`function`
`class`
`array`

## Variables:
En lugar de usar var debemos usar:
`let` es como var pero respeta el scope de los { }
`const` solo se puede asignar en el momento de la declaración de la variable

### Tipado de variables
```typescript
let miNumbero: number = 5;
let texto = "hola" //TS infiere que texto es del tipo string
texto = 5; //ERROR!
```

### Tipos mixtos (Union types)
```typescript
let x: number|null = 5;
x = null;
```

## Funciones
### Tipado básico de funciones
```typescript
function repeatText(x:string, times: number):string{
    let repeatedText : string = "";
    for(let i:number = 0; i<times;i++){
        repeatedText += x;
    }
    return x;
}
```

### Parametros opcionales
Se puede indicar que un parametro no es requerido con un ?. 
```typescript
function getArea(heigth: number, width?: number) : number{
	//...
}
```

### Patametros con valor default:
```typescript
function calcularPeso(masa: number, gravedad: number=9.8){
	return masa * gravedad;
}
```

### Sobrecarga de funciones

La idea es que una funcion pueda tener mas de una firma para dar mas claridad al que la consume.
Sin embargo en runtime solo se tiene en cuenta la firma real (la última) y en el cuerpo de la funcion se debe deducir cual firma quizo utilizar el que la invocó.

```typescript
function suma(x: number, y:number):number
function suma(numbers: number[]): number
function suma(param1: nubmer | number[], param2?: number) : number{
	if(typeof parm1 === "array"){
		let numbers = param1 as numbers[];
		return numbers[0] + numbers[1];
	}

	let x = param1 as number;
	let y = param2 as number;
	return x + y
}
```

