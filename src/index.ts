import * as readline from 'readline';
import { Player } from './interface/player';
import { players } from './data/players';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const options = [
    '1. Goles',
    '2. Disparos',
    '3. Pases',
    '4. Asistencias',
    '5. Recuperaciones',
    '6. Tarjetas amarillas',
    '7. Tarjetas rojas',
    '8. Faltas',
    '9. Salir'
];

function showMenu() {
    console.log('Por favor, elige una opción:');
    console.log(options.join('\n'));
}

export function handleOption(option: string): boolean {
    switch (option) {
        case '1':
            showTopPlayer('goles', 'Goles');
            break;
        case '2':
            showTopPlayer('disparos', 'Disparos');
            break;
        case '3':
            showTopPlayer('pases', 'Pases');
            break;
        case '4':
            showTopPlayer('asistencias', 'Asistencias');
            break;
        case '5':
            showTopPlayer('recuperaciones', 'Recuperaciones');
            break;
        case '6':
            showTopPlayer('am', 'Tarjetas amarillas');
            break;
        case '7':
            showTopPlayer('roj', 'Tarjetas rojas');
            break;
        case '8':
            showTopPlayer('faltas', 'Faltas');
            break;
        case '9':
            console.log('Saliendo del programa...');
            rl.close();
            return false;
        default:
            console.log('Opción no válida.');
    }
    return true;
}

export function showTopPlayer(stat: keyof Player, statName: string) {
    const topPlayer = players.reduce((prev, current) => {
        return (current[stat] > prev[stat]) ? current : prev;
    });

    if (topPlayer[stat] === 0) {
        console.log(`No se encontraron jugadoras con ${statName || stat}.`);
    } else {
        console.log(`La jugadora con más ${statName || stat} es ${topPlayer.nombre} con ${topPlayer[stat]}.`);
    }
}


function main() {
    console.log('Bienvenido al programa de estadísticas de jugadoras de Barsa.');
    const playerNames = players.map(player => player.nombre).join(' - ');
    console.log(playerNames);
    showMenu();
    //escuchador de eventos para capturar la entrada del usuario desde la consola
    rl.on('line', (input) => {
        const keepRunning = handleOption(input.trim());
        if (keepRunning) {
            showMenu();
        }
    });
}

main();
