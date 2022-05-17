"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    // html += '<div class="hidden">' + coffee.id + '</div>';
    html += '<div class="coffee-name"><h2>' + coffee.name + '</h2></div>';
    html += '<div class="coffee-roast">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = "";

    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if(selectedRoast === 'all'){
        for (const coffee of coffees) {
            filteredCoffees.push(coffee);
        }
    }else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }
    filteredCoffees = filteredCoffees.filter((coffee) => {
        let coffeeName = coffee.name.toLowerCase();
        let filterRoastVal = filterRoast.value.toLowerCase();
        return coffeeName.includes(filterRoastVal);
    });

    main.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let main = document.querySelector('#coffee-list');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

let filterRoast = document.querySelector('#filter-roast');

filterRoast.addEventListener('keyup', updateCoffees);
roastSelection.addEventListener('change', updateCoffees)

main.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);