const buttons = document.getElementsByClassName("btn");

const game_window = document.querySelector('.game_window');
const menu = document.querySelector('.menu');
const rules = document.querySelector('.rules');
const header = document.querySelector('.header');

const activeButton = (e) => {
    for(let i=0; i<buttons.length;i++) {
        if(buttons[i].classList.contains('active')) {
            buttons[i].classList.toggle('active');
        }
        else if(buttons[i] == e.target && !buttons[i].classList.contains('active')) {
                e.target.classList.toggle('active');
        }
    }

    if(e.target.id == 'rulesButton' || e.target.classList.contains('back-menu')) {
        displayRules();
    }
}

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        activeButton(e);
        
    });
}

const displayRules = () => {
    menu.classList.toggle('hidden');
    rules.classList.toggle('hidden');
}

