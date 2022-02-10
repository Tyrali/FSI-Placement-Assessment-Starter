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


const credit = document.querySelector('#credit')

let gbPlusBtn = document.querySelector("#add-gb");
    gbPlusBtn.addEventListener('click', function() {
    gb++; 
    updateQuantity(`${gb}`);
    totalQuantity(`${gb+cc+sugar}`);
});


let gbMinusBtn = document.querySelector("#minus-gb");
    gbMinusBtn.addEventListener('click', function() {
    if(gb>0){
    gb--; }
    updateQuantity(`${gb}`);
    totalQuantity(`${gb+cc+sugar}`);
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
    totalQuantity(`${gb+cc+sugar}`);
});


let ccMinusBtn = document.querySelector("#minus-cc");
    ccMinusBtn.addEventListener('click', function() {
    if(cc>0){
    cc--; }
    updateCcQuantity(`${cc}`);
    totalQuantity(`${gb+cc+sugar}`);
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
    totalQuantity(`${gb+cc+sugar}`);
});


let sugarMinusBtn = document.querySelector("#minus-sugar");
    sugarMinusBtn.addEventListener('click', function() {
    if(sugar>0){
    sugar--; }
    updateSugarQuantity(`${sugar}`);
    totalQuantity(`${gb+cc+sugar}`);
});


//---------------------------------------


function totalQuantity(displayTotalQuantity) {
    let totalQuantity = document.querySelector("#qty-total");
    totalQuantity.textContent = displayTotalQuantity;
    };
    
    
// Code to update name display
credit.textContent = `Created by ${yourName}`;
    
