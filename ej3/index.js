const logplease = require("logplease");
const numeros = require("./numeros");

const logger = logplease.create("Ejercicio-3");
const numberGroup = [2, 3, 101, 201, 202, 100];

numberGroup.forEach((numero) => {
  if (numeros(numero)) {
    logger.info(`El numero ${numero} es par`);
  } else {
    logger.error(`El numero ${numero} no es par`);
  }
});
