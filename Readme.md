# Repositorio para la práctica de refactorización 💻
## LaunchX : Mision-Backend 🚀 

### Fizzbuzz 🐝
Se desea saber el score que tiene cada uno de los explorers, en caso de que el score sea *divisible entre 3* el score tomará un valor de *FIZZ*, en caso de que sea *divisble entre 5* el score tomará un valor de *BUZZ*, en caso de que *sea divisible entre 3 y 5* el score tomará un valor de *FIZZBUZZ*, por último, el caso de que no sea divisible entre 3 y/o 5 el score no tendrá un valor modificado.

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
3) Correr el servidor para poder probar la aplicación
```
npm run server
```
4) Revisa los endpoints

Descripción | Endpoints |  Request 
------------- |:-------------:|:-------------:|
Welcome | ```http://localhost:3000/``` | |
Filtrar por misión | ```/v1/explorers/:mission``` | ```/v1/explorers/node``` <br> ```/v1/explorers/java``` |
Obtener la cantidad de explorers por misión | ```/v1/explorers/amount/:mission``` | ```/v1/explorers/amount/node``` ```/v1/explorers/amount/java``` |
Obtener los usernames de github de explorers | ```/v1/explorers/usernames/:mission``` | ```/v1/explorers/usernames/node``` ```/v1/explorers/usernames/java```|
Fizzbuzz | ```/v1/explorers/fizzbuzz/:number``` | ```/v1/explorers/fizzbuzz/30```|

5) Documentación en Postman y la colección
- Descarga la colección [aquí](https://www.getpostman.com/collections/e758e689b43f718d93ef)

### Bot Telegram:
Ahora puedes consultar la funcionabilidad de FizzBuzz y los alumnos por misión en un [bot de Telegram](https://t.me/FizzBuzz_LX_bot).
### Temas vistos:
- Refactorización de código 💻
  - Modularización
  - Uso de clases
  - Separación por carpetas
- Importación y exportación de módulos 📦
- Desarrollo a base de requerimentos 📑
- Dependencias 🎯
  - [ExpressJs](https://expressjs.com/es/) Para el servidor y endpoints
  - [Jest](https://jestjs.io/) Para realizar pruebas unitarias
  - [Linter](https://eslint.org/) Analiza y corrige problemas de sintaxis

Playbook: [Mis prácticas](https://github.com/dev-LuisSM/playbook)
