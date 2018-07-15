import App from './app';

console.log(`
_____          __  __ ______       ____  ______      _      _____ ______ ______ 
/ ____|   /\   |  \/  |  ____|     / __ \|  ____|    | |    |_   _|  ____|  ____|
| |  __   /  \  | \  / | |__       | |  | | |__      | |      | | | |__  | |__   
| | |_ | / /\ \ | |\/| |  __|      | |  | |  __|     | |      | | |  __| |  __|  
| |__| |/ ____ \| |  | | |____     | |__| | |        | |____ _| |_| |    | |____ 
\_____/_/    \_\_|   |_|______|    \____/|_|         |______|_____|_|    |______|
                                                                                                                  
`);

console.log('Welcome to Game Of Life - A text adventure game.');
console.log('\n\n');

console.log(
    'Move through an endless grid fighting monsters and collecting gold.'
);
console.log('\n\n');

// Begin game
let gameOfLife = new App();
gameOfLife.BeginOrContinueGame();
