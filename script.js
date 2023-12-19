const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];


modifyColor(icons);

console.log(icons);

generateIconsBox(icons);
generateOptionValue(icons);

const allBoxEl = document.querySelectorAll('.box');

/* 
            METODO CLASSI
Metodo con visualizzazione delle classi di ogni box e aggiunta della classe d-none
Con questo metodoo serve aggiungere ${icon.type} tra le classi del box quando viene generato il markup
Così che aggiungo la classe d-none ai box che non contengono la classe del tipo selezionato dall'utente.
*/
/* document.getElementById('typeicons').addEventListener('change', function () {
    const typeIcon = this.value;
    console.log(typeIcon);
    if (typeIcon === 'user') {
        allBoxEl.forEach(element => {
            if (!element.classList.contains('user')) {
                element.classList.add('d-none')
            } else {
                element.classList.remove('d-none')
            }
        });
    } else if (typeIcon === 'vegetable') {
        allBoxEl.forEach(element => {
            if (!element.classList.contains('vegetable')) {
                element.classList.add('d-none')
            } else {
                element.classList.remove('d-none')
            }
        });
    } else if (typeIcon === 'animal') {
        allBoxEl.forEach(element => {
            if (!element.classList.contains('animal')) {
                element.classList.add('d-none')
            } else {
                element.classList.remove('d-none')
            }
        });
    } else {
        allBoxEl.forEach(element => {
            element.classList.remove('d-none')
        });
    }
}) */


/*  METODO FILTER
Metodo con filter, per ogni scelta dell'utente, creo un array nuovo con solo le icone di quel tipo
Poi richiamo la funzione per generare i box e gli passo solo l'array che contiene quelle icone.
*/
document.getElementById('typeicons').addEventListener('change', function () {
    const typeIcon = this.value;
    console.log(typeIcon);

    //creo un nuovo array, contenente solo le icone del tipo selezionato
    const iconFilter = icons.filter((element => element.type === typeIcon || typeIcon === 'all'))
    // azzero l'html all'interno di row
    document.querySelector('.row').innerHTML = "";
    // richiamo la funzione e gli passo l'array con solo le icone user
    generateIconsBox(iconFilter);

    /*  UTILLIZZO DELL'IF
        con l'if andavo a vedere cosa selezionava l'utente e poi filtravo le icone di quel tipo
    
        if (typeIcon === 'user') {
        // se l'utente ha selezionato il valore user, con il metodo filter creo un nuovo array, contenente solo le icone del tipo selezionato
        const userIcon = icons.filter((element => element.type === typeIcon))
        // azzero l'html all'interno di row
        document.querySelector('.row').innerHTML = "";
        // richiamo la funzione e gli passo l'array con solo le icone user
        generateIconsBox(userIcon);

    } else if (typeIcon === 'vegetable') {
        // se l'utente ha selezionato il valore user, con il metodo filter creo un nuovo array, contenente solo le icone del tipo selezionato
        const vegetableIcon = icons.filter((element => element.type === typeIcon))
        // azzero l'html all'interno di row
        document.querySelector('.row').innerHTML = "";
        // richiamo la funzione e gli passo l'array con solo le icone selezionate
        generateIconsBox(vegetableIcon);

    } else if (typeIcon === 'animal') {
        // se l'utente ha selezionato il valore user, con il metodo filter creo un nuovo array, contenente solo le icone del tipo selezionato
        const animalIcon = icons.filter((element => element.type === typeIcon))
        // azzero l'html all'interno di row
        document.querySelector('.row').innerHTML = "";
        // richiamo la funzione e gli passo l'array con solo le icone selezionate
        generateIconsBox(animalIcon);

    } else {
        // azzero l'html all'interno di row
        document.querySelector('.row').innerHTML = "";
        // richiamo la funzione e gli passo l'array con tutte le icone in quanto l'utente non seleziona nessuna tipologia in particolare
        generateIconsBox(icons);

    } */
})


/**
 * Function to generate all icon's box
 * @param {Array} icons insert the array who contain the icons
 */
function generateIconsBox(icons) {
    icons.forEach(icon => {
        const boxMarkup = `
        <div class="col-3 d-flex justify-content-center">
            <div class="box card text-center w-75 mb-4 p-3 rounded-4 shadow">
                <i class="fa-solid fa-2xl ${icon.prefix}${icon.name} p-4" style="color: ${icon.color}; font-size: 3rem;"></i>
                <span class="d-block text-uppercase fs-6 fw-bold mt-2">${icon.name}</span>
            </div>
        </div>
        `
        document.querySelector('.row').insertAdjacentHTML('beforeend', boxMarkup);
    });
}

/**
 * Function to create option in tag select 
 * @param {array} icons insert array whit all icon
 */
function generateOptionValue(icons) {

    // creo un nuovo array che contiene tutte le tipologie delle icone
    // con la funzione *new set* mi crea un array con solo valori unici senza duplicati così da avere un array con tutte le tipolgie
    const typesOfIcon = new Set(icons.map(icon => icon.type));

    //scorro l'array per creare il value 
    typesOfIcon.forEach(type => {
        const optionMarkup = `
        <option value="${type}">${type}</option>
        `
        document.getElementById('typeicons').insertAdjacentHTML('beforeend', optionMarkup);
    });
}

/**
 * function to generate a random color 
 * @returns a string of color
 */
function generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const color = "#" + randomColor;
    return color;
}

/**
 * Function to modify random color
 * @param {array} icons array of all icons
 */
function modifyColor(icons) {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    const color3 = generateRandomColor();

    icons.forEach(icon => {
        if (icon.color === 'orange') {
            icon.color = color1;
        } else if (icon.color === 'blue') {
            icon.color = color2;
        } else {
            icon.color = color3;
        }
    })
}