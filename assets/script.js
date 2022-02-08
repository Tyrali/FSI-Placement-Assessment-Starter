// First, tell us your name
let yourName = "Hannah Nelson" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

//---------------------------------------

function updateQuantity(displayQuantity) {
    let quantity = document.querySelector("#qty-gb");
    quantity.textContent = displayQuantity;
    }

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

let gbPlusBtn = document.querySelector("#add-gb");
    gbPlusBtn.addEventListener('click', function() {
    gb++; 
    updateQuantity(`${gb}`);
});


let gbMinusBtn = document.querySelector("#minus-gb");
    gbMinusBtn.addEventListener('click', function() {
    if(gb>0){
    gb--; }
    updateQuantity(`${gb}`);
});

//---------------------------------------


function updateCcQuantity(displayCcQuantity) {
    let ccQuantity = document.querySelector("#qty-cc");
    ccQuantity.textContent = displayCcQuantity;
    }


let ccPlusBtn = document.querySelector("#add-cc");
    ccPlusBtn.addEventListener('click', function() {
    cc++; 
    updateCcQuantity(`${cc}`);
});


let ccMinusBtn = document.querySelector("#minus-cc");
    ccMinusBtn.addEventListener('click', function() {
    if(cc>0){
    cc--; }
    updateCcQuantity(`${cc}`);
});


//------------------------------

function updateSugarQuantity(displaySugarQuantity) {
    let sugarQuantity = document.querySelector("#qty-sugar");
    sugarQuantity.textContent = displaySugarQuantity;
    }


let sugarPlusBtn = document.querySelector("#add-sugar");
    sugarPlusBtn.addEventListener('click', function() {
    sugar++; 
    updateSugarQuantity(`${sugar}`);
});


let sugarMinusBtn = document.querySelector("#minus-sugar");
    sugarMinusBtn.addEventListener('click', function() {
    if(sugar>0){
    sugar--; }
    updateSugarQuantity(`${sugar}`);
});


//---------------------------------------


function totalQuantity(displayTotalQuantity) {
    let totalQuantity = document.querySelector("#qty-total");
    totalQuantity.textContent = displayTotalQuantity;
    }
    if(gb>0 && cc>0 && sugar>0){
    totalQuantity(`${gb+cc+sugar}`);
    };
    


// Code to update name display
credit.textContent = `Created by ${yourName}`;
    

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons
