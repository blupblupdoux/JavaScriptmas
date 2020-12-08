let app = {
    
    dice: document.querySelector('.dice'),
    faces: {
        1: ['xxx','xox','xxx'],
        2: ['oxx','xxx','xxo'],
        3: ['oxx','xox','xxo'],
        4: ['oxo','xxx','oxo'],
        5: ['oxo','xox','oxo'],
        6: ['oxo','oxo','oxo'],
    },
    faceToDisplay: 1,
    
    init: function() {
        app.dice.addEventListener('click', app.handleClickOnDice);
        app.displayDot(app.faceToDisplay);
    },
    
    displayDot: function(face){
        app.dice.innerHTML = "";
        app.faces[face].forEach(row => {
            [...row].forEach(key => {
                let div = document.createElement('div');
                key == 'o' ? div.classList.add('dot') : div.classList.add('blank');
                app.dice.appendChild(div);
            })
        });
    },
    handleClickOnDice: function() {
        app.faceToDisplay = Math.floor(Math.random() * 6) + 1;
        app.displayDot(app.faceToDisplay);
    }
}

document.addEventListener('DOMContentLoaded', app.init);
