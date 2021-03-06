# Repositorio para la pr谩ctica de refactorizaci贸n 馃捇
## LaunchX : Mision-Backend 馃殌 

### Fizzbuzz 馃悵
Se desea saber el score que tiene cada uno de los explorers, en caso de que el score sea *divisible entre 3* el score tomar谩 un valor de *FIZZ*, en caso de que sea *divisble entre 5* el score tomar谩 un valor de *BUZZ*, en caso de que *sea divisible entre 3 y 5* el score tomar谩 un valor de *FIZZBUZZ*, por 煤ltimo, el caso de que no sea divisible entre 3 y/o 5 el score no tendr谩 un valor modificado.

### Prueba este proyecto
1) Clona este proyecto
```
https://github.com/dev-LuisSM/WM4_refactoring.git
```
2) Descarga las dependencias: 

- Jest - Para pruebas unitarias

- ExpressJs - Para servidor y endpoints
```
npm i --save-dev jest
```
```
npm i express --save
```
3) Correr el servidor para poder probar la aplicaci贸n
```
npm run server
```
4) Revisa los endpoints

Descripci贸n | Endpoints |  Request 
------------- |:-------------:|:-------------:|
Welcome | ```http://localhost:3000/``` | |
Filtrar por misi贸n | ```/v1/explorers/:mission``` | ```/v1/explorers/node``` <br> ```/v1/explorers/java``` |
Obtener la cantidad de explorers por misi贸n | ```/v1/explorers/amount/:mission``` | ```/v1/explorers/amount/node``` ```/v1/explorers/amount/java``` |
Obtener los usernames de github de explorers | ```/v1/explorers/usernames/:mission``` | ```/v1/explorers/usernames/node``` ```/v1/explorers/usernames/java```|
Fizzbuzz | ```/v1/explorers/fizzbuzz/:number``` | ```/v1/explorers/fizzbuzz/30```|

5) Documentaci贸n en Postman y la colecci贸n
- Descarga la colecci贸n [aqu铆](https://www.getpostman.com/collections/e758e689b43f718d93ef)

### Temas vistos:
- Refactorizaci贸n de c贸digo 馃捇
  - Modularizaci贸n
  - Uso de clases
  - Separaci贸n por carpetas
- Importaci贸n y exportaci贸n de m贸dulos 馃摝
- Desarrollo a base de requerimentos 馃搼
- Dependencias 馃幆
  - [ExpressJs](https://expressjs.com/es/) Para el servidor y endpoints
  - [Jest](https://jestjs.io/) Para realizar pruebas unitarias
  - [Linter](https://eslint.org/) Analiza y corrige problemas de sintaxis

Playbook: [Mis pr谩cticas](https://github.com/dev-LuisSM/playbook)
