interface UserCustomMessages {
    username: string;
    messages: string[];
}

const usersCustomMessages: UserCustomMessages[] = [
    {
        username: 'brearts',
        messages: [
            'Alpinista de meio fio',
            'Carcereira de gaiola',
            'Tenista de pingue-pongue',
            'Tarzan da Samambaia',
            'Salva vidas de aquário',
            'Pirata de aquário',
            'Pintor de rodapé',
            'Paraquedista de meio-fio',
            'Lenhadora de Bonsai',
            'Goleira de futebol de botão',
            'Escaladora de meio-fio',
            'Arquiteta de Lego',
            'Agricultora de Farmrville',
        ],
    },
]

export function userHasCustomMessages(username: string): boolean {
    return !!usersCustomMessages.find(obj => obj.username === username);
}

export function getUserCustomMessage(username: string): string | undefined {
    const userCustomMessages: UserCustomMessages | undefined = usersCustomMessages.find(obj => obj.username === username);
    if (!!userCustomMessages) {
        return userCustomMessages.messages[Math.floor(Math.random() * userCustomMessages.messages.length)];
    }
}