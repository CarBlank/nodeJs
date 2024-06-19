const Logger = require("logplease");
const logger = Logger.create("utils");
logger.debug(`Hola Mundo de Node`);
logger.log(`This is a log message`); // alias for debug()
logger.info(`Noticias de última hora, Node.js me encanta!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!!`);
