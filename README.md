# Apuntes clase 22/9

# Visual Studio Code
`CTRL + SHIFT + P` Buscar comandos
`CTRL +`` `  ó `CTRL +ñ` Abre la consola`

Trabajamos siempre sobre una carpeta considerando que esa carpeta es el proyecto. Dicha carpeta deberia ser el root del repo de GIT.

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

dependencias del producto en sí: ej. un Widget
`yarn add --save NOMBRE_DEL_PAQUETE` 

dependencias para desarrollar: ej. typescript
`yarn add --dev NOMBRE_DEL_PAQUETE`


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