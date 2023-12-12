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

const color1 = generateRandomColor();
const color2 = generateRandomColor();
const color3 = generateRandomColor();

icons.forEach(icon => {
    if(icon.color === 'orange'){
        icon.color = color1;
    }else if(icon.color === 'blue'){
        icon.color = color2;
    }else{
        icon.color = color3;
    }
})

generateIconsBox(icons);

const allBoxEl = document.querySelectorAll('.box');

document.getElementById('show').addEventListener('click', function () {
    const typeIcon = document.getElementById('typeicons').value; 
    if (typeIcon === 'user') {
        allBoxEl.forEach(element => {
            if (element.classList.contains('vegetable') || element.classList.contains('animal')) {
                element.classList.add('d-none')
            } else {
                element.classList.remove('d-none')
            }
        });
    } else if (typeIcon === 'vegetable') {
        allBoxEl.forEach(element => {
            if (element.classList.contains('user') || element.classList.contains('animal')) {
                element.classList.add('d-none')
            } else {
                element.classList.remove('d-none')
            }
        });
    } else if (typeIcon === 'animal') {
        allBoxEl.forEach(element => {
            if (element.classList.contains('user') || element.classList.contains('vegetable')) {
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
})


/**
 * Function to generate all icon's box
 * @param {Array} icons insert the array who contain the icons
 */
function generateIconsBox(icons) {
    icons.forEach(icon => {
        const boxMarkup = `
        <div class="col-3">
            <div class="box card text-center ${icon.type} mb-4 p-3 w-75 rounded-4 shadow">
                <i class="fa-solid fa-2xl ${icon.prefix}${icon.name} p-4" style="color: ${icon.color}; font-size: 3rem;"></i>
                <span class="d-block text-uppercase fs-6 fw-bold mt-2">${icon.name}</span>
            </div>
        </div>
        `
        document.querySelector('.row').insertAdjacentHTML('beforeend', boxMarkup);
    });
}

/**
 * function to generate a random color 
 * @returns a string of color
 */
function generateRandomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const color = "#" + randomColor;
    return color;
}


