export function hasCommand(message: string, commandNames: string[]): boolean {
  if (!!commandNames.length) {
    for (let i = 0; i < commandNames.length; i++) {
      const commandName = commandNames[i];
      if (
        message === commandName ||
        message.startsWith(`!${commandName} `) ||
        message.endsWith(` !${commandName}`) ||
        message.includes(` !${commandName} `) ||
        message.startsWith(`${commandName} `) ||
        message.endsWith(` ${commandName}`) ||
        message.includes(` ${commandName} `)
      ) {
        return true;
      }
    }
  }
  return false;
}
