// Sections
let activeSection;
const gamewindow = document.querySelector('.game_window');

///////////////////////////
/////// Navigation ////////
///////////////////////////

// Opening
setTimeout(() => {
    gamewindow.classList.toggle('shrunk');
})

// Sélecteurs DOM
const linkButtons = document.getElementsByClassName("link");
const menu = document.querySelector('.menu');
const rulesSection = document.querySelector('.rules');
const optionsSection = document.querySelector('.options');
const newGame = document.querySelector('.newGame');
const chevrons = document.querySelectorAll('.chevron');
chevrons.forEach((chevron) => {
    chevron.addEventListener('click', browseGames);
})
const gamesTitles = document.querySelectorAll('.titre-jeu');

// Sélection du jeu
let currentGame = 1;
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

// Fonction d'affichage des sections
for(let i=0; i<linkButtons.length; i++) {
    linkButtons[i].addEventListener('click', (e) => {
        displaySection(e);
    });
}

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
                rulesSection.classList.toggle('hidden');
                break;
            case "Options":
                optionsSection.classList.toggle('hidden');
                break;
        }
        menu.classList.toggle('hidden');
        gamewindow.classList.toggle('shrunk')
    }, 300);
}

/////////////////////////
////// OBJETS JEUX //////
/////////////////////////

///// OPTIONS

// Sélecteurs DOM
const chronoButtons = document.querySelectorAll(".chrono");
const clueButtons = document.querySelectorAll('.indices');
const difficultyButtons = document.querySelectorAll(".difficulte");

// Objet
const options = {
    clues: ["Définitions","Images","Proverbes et citations"],
    chrono: true,
    difficulty: "Normal",
    updateChrono: function() {
        for(let i=0; i<chronoButtons.length; i++) {
            chronoButtons[i].classList.toggle('active');
        }
        this.chrono = !this.chrono;
    },
    updateClues: function(e) {
        if (this.clues.length > 1 || !e.target.classList.contains('active')) {
            e.target.classList.toggle('active');
            if(this.clues.indexOf(e.target.textContent) > -1) {
                this.clues.splice(this.clues.indexOf(e.target.textContent),1);
            } else {
                this.clues.push(e.target.textContent);
            }
        }
    },
    updateDifficulty: function(e) {
        for(let i=0; i<difficultyButtons.length;i++) {
            if(difficultyButtons[i].classList.contains('active')) {
                difficultyButtons[i].classList.toggle('active');
            }
        }
        e.target.classList.toggle('active');
        this.difficulty = e.target.textContent;
    },
};

/// Event listeners
for(let i=0; i<clueButtons.length; i++) { clueButtons[i].addEventListener('click', (e) => { options.updateClues(e); }) };
for(let i=0; i<difficultyButtons.length; i++) { difficultyButtons[i].addEventListener('click', (e) => { options.updateDifficulty(e); }) };
for(let i=0; i<chronoButtons.length; i++) { chronoButtons[i].addEventListener('click', () => { options.updateChrono(); }) };

///////// TIMER
const timer = {
    time: 0,
    interval: 0,
    startTimer: function(timeset=30) {
        if (this.interval == 0) {
            this.time = timeset;
            this.displayTimer();
            timerPlaceholderContainer.classList.add('started');
            this.interval = setInterval(() => {
                this.time--;
                this.displayTimer();
                if (this.time <= 0) this.stopTimer();
            },1000);
        }
    },
    stopTimer: function() {
        clearInterval(this.interval);
        this.interval = 0;
        timerPlaceholderContainer.classList.remove('started');
    },
    addTime: function(timegain=3) {
        this.time = this.time + timegain;
        this.displayTimer();
    },
    displayTimer: function() {
        timerPlaceholder.textContent = this.time < 10 ? `0${this.time}`:`${this.time}`;
    },
};
