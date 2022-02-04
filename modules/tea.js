const { milliliters } = require("./random");
const { hasCommand } = require("./util");

const teaList = [
  "branco",
  "mate",
  "preto",
  "verde",
  "de alecrim",
  "de amora",
  "de anis estrelado",
  "de boldo",
  "de camomila",
  "de canela",
  "de capim limão",
  "de carqueja",
  "de cavalinha",
  "de dente-de-leão",
  "de erva-cidreira",
  "de erva-doce",
  "de espinheira santa",
  "de eucalipto",
  "de graviola",
  "de guaco",
  "de hibisco",
  "de hortelã",
  "de gengibre",
  "de malva",
  "de melissa",
  "de menta",
  "de sete ervas",
  "de oliveira",
  "de sálvia",
];


/**
 * @param {string} username
 */
function getTeaMessage(username) {
  const tea = teaList[Math.floor(Math.random() * teaList.length)];

  const size = milliliters();

  const message = `${username}, você recebeu um chá ${tea} de ${size}ml.`;

  if (size === 50) {
    return `${message} BibleThump`;
  } else if (size > 50 && size <= 250) {
    return `${message} MiniK`;
  } else if (size > 250 && size <= 500) {
    return `${message} Kappa`;
  } else if (size > 500 && size <= 750) {
    return `${message} KappaHD`;
  } else if (size > 750 && size < 1000) {
    return `${message} HolidayCookie`;
  } else {
    return `${message} KappaPride`;
  }
}

/**
 * @param {string} message
 */
function hasTeaCommand(message) {
  return hasCommand(message.toLowerCase(), ["cha", "chá", "chà"]);
}

module.exports = Object.freeze({ getTeaMessage, hasTeaCommand });
