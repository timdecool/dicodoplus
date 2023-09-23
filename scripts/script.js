const buttons = document.getElementsByClassName("btn");

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
        activeButton(e);
        
    });
}