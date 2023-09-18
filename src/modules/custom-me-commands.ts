interface UserCustomMessages {
    username: string;
    messages: string[];
}

const usersCustomMessages: UserCustomMessages[] = [
    {
        username: 'brearts',
        messages: [
            'Agricultora de Farmrville',
            'Alpinista de meio fio',
            'Arquiteta de Lego',
            'Carcereira de gaiola',
            'Escaladora de meio-fio',
            'Goleira de futebol de botão',
            'Lenhadora de Bonsai',
            'Paraquedista de meio-fio',
            'Pintora de rodapé',
            'Pirata de aquário',
            'Salva vidas de aquário',
            'Tarzan da Samambaia',
            'Tenista de pingue-pongue',
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