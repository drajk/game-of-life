import { Directions } from './models';

export const DirectionsPrompt = {
    type: 'list',
    name: 'direction',
    message: 'Which direction would you like to go?\n',
    choices: [
        Directions.East,
        Directions.West,
        Directions.North,
        Directions.South,
        'Exit'
    ]
};
