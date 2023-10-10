// Options
const optionButtons = document.getElementsByClassName("option");
const chronoButtons = document.getElementsByClassName("chrono");
const difficulteButtons = document.getElementsByClassName("difficulte");
let indices = ["Définitions","Images","Proverbes et citations"];
let chrono = true;
let difficulte = "Normal";

// Sections
const linkButtons = document.getElementsByClassName("link");
const menu = document.querySelector('.menu');
const rules = document.querySelector('.rules');
const options = document.querySelector('.options');
const newGame = document.querySelector('.newGame');
const chevrons = document.querySelectorAll('.chevron');
chevrons.forEach((chevron) => {
    chevron.addEventListener('click', browseGames);
})
const gamesTitles = document.querySelectorAll('.titre-jeu');
let currentGame = 1;
let activeSection;
const gamewindow = document.querySelector('.game_window');

function browseGames (e) {
    gamesTitles[currentGame].classList.add("hidden");
    if(e.target.classList.contains("chevron-left")) {
        currentGame--;
        if(currentGame < 0) currentGame = gamesTitles.length-1;
    } else {
        currentGame++;
        if(currentGame == gamesTitles.length) currentGame = 0;
    }
    gamesTitles[currentGame].classList.remove("hidden");
}

// OPENING
setTimeout(() => {
    gamewindow.classList.toggle('shrunk');
}, 210);

const activeButton = (e) => {
    for(let i=0; i<linkButtons.length;i++) {
        if(linkButtons[i].classList.contains('active')) {
            linkButtons[i].classList.toggle('active');
        }
        else if(linkButtons[i] == e.target && !linkButtons[i].classList.contains('active')) {
                e.target.classList.toggle('active');
        }
    }
}

for(let i=0; i<linkButtons.length; i++) {
    linkButtons[i].addEventListener('click', (e) => {
        displaySection(e);
        
    });
}

for(let i=0; i<optionButtons.length; i++) {
    optionButtons[i].addEventListener('click', (e) => {
        if(e.target.classList.contains('chrono')) {
            for(let i=0; i<chronoButtons.length; i++) {
                chronoButtons[i].classList.toggle('active');
            }
            chrono = !chrono;
        } 
        else if(e.target.classList.contains('indices')) {
            if (indices.length > 1 || !e.target.classList.contains('active')) {
                e.target.classList.toggle('active');
                if(indices.indexOf(e.target.outerText) > -1) {
                    indices.splice(indices.indexOf(e.target.outerText),1);
                } else {
                    indices.push(e.target.outerText);
                }
            }
        }
        else if(e.target.classList.contains('difficulte')) {
            for(let i=0; i<difficulteButtons.length;i++) {
                if(difficulteButtons[i].classList.contains('active')) {
                    difficulteButtons[i].classList.toggle('active');
                }
            }
            e.target.classList.toggle('active');
            difficulte = e.target.outerText;
        }
    })
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
    }, 300);
}
