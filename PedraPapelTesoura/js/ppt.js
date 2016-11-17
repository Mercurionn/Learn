var userChoise;
var computerChoise;

function jogar(id) {
    userChoise = id;
    computerChoise = computerPlay();
    resulta(computerChoise, userChoise);
};


// Jogada do computador
function computerPlay() {
    computerChoise = Math.random();

    if (computerChoise <= 0.33) {
        return "pedra";
    } else if (computerChoise <= 0.66) {
        return "papel";
    } else {
        return "tesoura";
    }
};

// Condição de vitória
function resulta(computerChoise, userChoise) {
    switch (userChoise) {
    case 'pedra':
        if (computerChoise == 'tesoura') {
            alert('Jogador venceu!');
        } else if (computerChoise == 'papel') {
            alert('Computador venceu!');
        } else {
            alert('Empate!');
        }
        break;
    case 'papel':
        if (computerChoise == 'pedra') {
            alert('Jogador venceu!');
        } else if (computerChoise == 'tesoura') {
            alert('Computador venceu!');
        } else {
            alert('Empate!');
        }
        break;
    case 'tesoura':
        if (computerChoise == 'papel') {
            alert('Jogador venceu!');
        } else if (computerChoise == 'pedra') {
            alert('Computador venceu!');
        } else {
            alert('Empate!');
        }
        break;
    }

};