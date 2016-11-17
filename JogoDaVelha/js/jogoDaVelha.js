// Variaveis Globais
var jogador = 'x';
var jogadas = 0;
//var vitoria = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// Inicia a jogada
function chkJogo(id) {
    var src = chkSrc(id);

    // Muda a imagem de acordo com o jogador
    if (src == "branco.png") {
        document.getElementById(id).src = "img/" + jogador + ".png";
        jogadas++;

        if (chkVitoria()) {
            alert("Fim do jogo! Vitória do " + jogador);
            return;
        }

        // Verifica se deu empate
        if (jogadas >= 9) {
            alert('Empate!');
            return;
        }

        if (jogador == 'x') {
            jogador = 'o';
        } else {
            jogador = 'x';
        }
    } else {
      //  alert('som erro, célula já usada');
    }

    // Verifica se é a vez do computador jogar, caso sim, o computador faz a jogada
    if (jogador == 'o') {
        chkJogo(compJogar());
    }
};

// Selecionando elemento da célulaa
function chkSrc(id) {
    var src = document.getElementById(id).src;
    return src.substring(src.length - 10, src.length);
};

// Computador realiza a sua jogada
function compJogar() {
    return Math.floor(Math.random() * 8);
}


// Condições de vitória
function chkVitoria() {
    if ((chkSrc('0') == chkSrc('1')) && (chkSrc('0') == chkSrc('2')) && chkSrc('0') != 'branco.png') {
        return true;
    }
    if ((chkSrc('3') == chkSrc('4')) && (chkSrc('3') == chkSrc('5')) && chkSrc('3') != 'branco.png') {
        return true;
    }
    if ((chkSrc('6') == chkSrc('7')) && (chkSrc('6') == chkSrc('8')) && chkSrc('6') != 'branco.png') {
        return true;
    }
    if ((chkSrc('0') == chkSrc('3')) && (chkSrc('0') == chkSrc('6')) && chkSrc('0') != 'branco.png') {
        return true;
    }
    if ((chkSrc('1') == chkSrc('4')) && (chkSrc('1') == chkSrc('7')) && chkSrc('1') != 'branco.png') {
        return true;
    }
    if ((chkSrc('2') == chkSrc('5')) && (chkSrc('2') == chkSrc('8')) && chkSrc('2') != 'branco.png') {
        return true;
    }
    if ((chkSrc('0') == chkSrc('4')) && (chkSrc('0') == chkSrc('8')) && chkSrc('0') != 'branco.png') {
        return true;
    }
    if ((chkSrc('2') == chkSrc('4')) && (chkSrc('2') == chkSrc('6')) && chkSrc('2') != 'branco.png') {
        return true;
    }
};