/*
    чернота
    -------
    Длина слова - 7 букв
    А
    ------а
    яяяяяяа => Слово угадано => Обновить игру
*/



function getStep(quest, guess) {
    let letter = prompt("Нужна буква для слова: " + guess);
    // trim() убирает все пробельные символы в начале и конце строки
    letter = letter.trim()[0];
    let result = "";
    for (let i = 0; i < guess.length; i++) {
        if (quest[i].toLowerCase() === letter.toLowerCase()) {
            result += letter.toLowerCase(); 
        } else {
            result += guess[i];
        }
    }
    // console.log(result);
    guess = result;
    if (guess.includes("-")) {
        guess = getStep(quest, guess);
    }
    return guess;
}

function startGame() {
    let quest = words[Math.floor(Math.random() * words.length)];
    let guess = "", length = quest.length;
    while(length--) {
        /*
            7 => 6
            "-"
            6 => 5
            "--"
            ...
            0 x
        */
        guess += "-";
    }
    guess = getStep(quest, guess);
    // Если в слове осталось - повторить еще раз
    console.log(guess);
    if (confirm("Начать еще одну игру?")) {
        startGame();
    }
}

startGame();
