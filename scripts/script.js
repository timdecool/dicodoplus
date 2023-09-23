// Sections
const buttons = document.getElementsByClassName("btn");
const menu = document.querySelector('.menu');
const rules = document.querySelector('.rules');
const options = document.querySelector('.options');
const newGame = document.querySelector('.newGame');
let activeSection;

const gamewindow = document.querySelector('.game_window');

const activeButton = (e) => {
    for(let i=0; i<buttons.length;i++) {
        if(buttons[i].classList.contains('active')) {
            buttons[i].classList.toggle('active');
        }
        else if(buttons[i] == e.target && !buttons[i].classList.contains('active')) {
                e.target.classList.toggle('active');
        }
    }
}

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        displaySection(e);
        
    });
}

// Fonction d'affichage des sections
const displaySection = (e) => {
    gamewindow.classList.toggle('shrunk');
    setTimeout(() => {
        if (e.target.outerText == "Nouvelle partie" || e.target.outerText == "Règles" || e.target.outerText == "Options") {
            activeSection = e.target.outerText;
        }
        switch (activeSection) {
            case "Nouvelle partie":
                newGame.classList.toggle('hidden');
                break;
            case "Règles":
                rules.classList.toggle('hidden');
                break;
            case "Options":
                options.classList.toggle('hidden');
                break;
        }
        menu.classList.toggle('hidden');
        gamewindow.classList.toggle('shrunk')
    }, 320);
}
