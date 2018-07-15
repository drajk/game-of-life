import { prompt } from 'inquirer';
import {
    TerminalInput,
    Stats,
    RoomPosition,
    Directions,
    MoveResult
} from './models';
import Utils from './utils';
import { DirectionsPrompt } from './direction-prompt';

export default class App {
    private initialHealth: number = 5;
    private singleLine: string = '\n';
    private doubleLine: string = '\n\n';
    private playerStats: Stats;

    private currentPosition: RoomPosition;

    constructor() {
        this.initialiseGame();
    }

    public initialiseGame(): void {
        // Initialise player
        this.playerStats = {
            health: this.initialHealth,
            score: 0
        };

        // Initialise position
        this.currentPosition = {
            x: 0,
            y: 0
        };
    }

    public BeginOrContinueGame() {
        prompt(DirectionsPrompt).then((userInput: TerminalInput) => {
            let { direction } = userInput;

            console.log(this.doubleLine);

            if (direction === 'Exit') {
                console.log('Goodbye. See you again.');
                console.log(this.doubleLine);
                return;
            }

            let moveResult = Utils.movePlayer(
                this.currentPosition,
                this.playerStats,
                direction
            );

            if (moveResult.newStats.health <= 0) {
                console.log(`You found Monster.`);
                console.log(this.doubleLine);
                console.log(
                    'You dont have any health points left. You die. The end.'
                );
                console.log(this.doubleLine);
                return;
            }

            this.displayStats(moveResult);
            this.BeginOrContinueGame();
        });
    }

    private displayStats(result: MoveResult): void {
        let { roomContent } = result;
        this.currentPosition = result.newPosition;
        this.playerStats = result.newStats;

        console.log(`You found ${roomContent.toString()}.`);
        console.log(this.singleLine);
        console.log(`You score is ${this.playerStats.score}.`);
        console.log(this.singleLine);
        console.log(`You have ${this.playerStats.health} health left.`);
        console.log(this.doubleLine);
    }
}
