export function hasCommand(message: string, commandNames: string[]): boolean {
  if (typeof message !== 'string') {
    return false;
  }

  if (!Array.isArray(commandNames)) {
    return false;
  }

  if (!commandNames.every((commandName) => typeof commandName === 'string')) {
    return false;
  }

  return new RegExp(`\\b(${commandNames.join('|')})\\b`, 'gi').test(message);
}
