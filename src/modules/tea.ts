import { randomNumberBetween } from './random';
import { hasCommand } from './util';

const teaList = [
  'branco',
  'mate',
  'preto',
  'verde',
  'de alecrim',
  'de amora',
  'de anis estrelado',
  'de boldo',
  'de camomila',
  'de canela',
  'de capim limão',
  'de carqueja',
  'de cavalinha',
  'de dente-de-leão',
  'de erva-cidreira',
  'de erva-doce',
  'de espinheira santa',
  'de eucalipto',
  'de gengibre',
  'de graviola',
  'de guaco',
  'de hibisco',
  'de hortelã',
  'de malva',
  'de melissa',
  'de menta',
  'de oliveira',
  'de sálvia',
  'de sete ervas',
];

export function getTeaMessage(username: string): string {
  const tea = teaList[Math.floor(Math.random() * teaList.length)];

  const size = randomNumberBetween(50, 1000);

  const message = `${username}, você recebeu um chá ${tea} de ${size}ml.`;

  if (size === 50) return `${message} BibleThump`;
  if (size <= 250) return `${message} MiniK`
  if (size <= 500) return `${message} Kappa`;
  if (size <= 750) return `${message} KappaHD`;
  if (size < 1000) return `${message} HolidayCookie`;
  return `${message} KappaPride`;
}

export function hasTeaCommand(message: string): boolean {
  return hasCommand(message.toLowerCase(), ['cha', 'chá', 'chà']);
}
