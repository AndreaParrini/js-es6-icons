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

generateIconsBox(icons);

const allBoxEl = document.querySelectorAll('.box');

document.getElementById('show').addEventListener('click', function () {
    const typeIcon = document.getElementById('typeicons').value;

    if (typeIcon === 'user') {
        allBoxEl.forEach(element => {
            if (element.classList.contains('vegetable') || element.classList.contains('animal')) {
                element.classList.add('d-none')
            } else if (element.classList.contains('user')) {
                element.classList.remove('d-none')
            }
        });
    } else if (typeIcon === 'vegetable') {
        allBoxEl.forEach(element => {
            if (element.classList.contains('user') || element.classList.contains('animal')) {
                element.classList.add('d-none')
            } else if (element.classList.contains('vegetable')) {
                element.classList.remove('d-none')
            }
        });
    } else if (typeIcon === 'animal') {
        allBoxEl.forEach(element => {
            if (element.classList.contains('user') || element.classList.contains('vegetable')) {
                element.classList.add('d-none')
            } else if (element.classList.contains('animal')) {
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
        <div class="col">
            <div class="box text-center ${icon.type} d-none">
                <i class="fa-solid fa-2xl ${icon.prefix}${icon.name} p-4" style="color: ${icon.color};"></i>
                <span class="d-block">${icon.name}</span>
            </div>
        </div>
        `
        document.querySelector('.row').insertAdjacentHTML('beforeend', boxMarkup);
    });
}