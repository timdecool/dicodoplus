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
let activeSection;

const gamewindow = document.querySelector('.game_window');

// OPENING
setTimeout(() => {
    gamewindow.classList.toggle('shrunk');
})

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
        console.log(indices,chrono,difficulte);
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
