// ADDITION SECTION 


const addInput1 = document.getElementById('add-input-1');



const addInput2 = document.getElementById('add-input-2');

console.log(addInput2.value);

const addButton = document.getElementById('add-button');

console.log(addButton);

const addResults = document.getElementById('add-results');

console.log(addResults);



addButton.addEventListener('click', () => {
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    
    
    const sum = value1AsNumber + value2AsNumber;

    addResults.textContent = sum;

});


// SUBTRACTION SECTION


const subInput1 = document.getElementById('sub-input-1');



const subInput2 = document.getElementById('sub-input-2');

console.log(subInput2.value);

const subButton = document.getElementById('sub-button');

console.log(addButton);

const subResults = document.getElementById('sub-results');

console.log(subResults);



subButton.addEventListener('click', () => {
    const value1 = subInput1.value;
    const value2 = subInput2.value;

    
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    
    
    const subtract = value1AsNumber - value2AsNumber;

    subResults.textContent = subtract;


});

// MULTIPLY SECTION

const multInput1 = document.getElementById('mult-input-1');

const multInput2 = document.getElementById('mult-input-2');

const multButton = document.getElementById('mult-button');

const multResults = document.getElementById('mult-results');


multButton.addEventListener('click', () => {
    const value1 = multInput1.value;
    const value2 = multInput2.value;

    const multiply = value1 * value2;

    multResults.textContent = multiply;


});


// DIVIDE SECTION

const divInput1 = document.getElementById('div-input-1');

const divInput2 = document.getElementById('div-input-2');

const divButton = document.getElementById('div-button');

const divResults = document.getElementById('div-results');


divButton.addEventListener('click', () => {
    const value1 = divInput1.value;
    const value2 = divInput2.value;

    const divide = value1 / value2;

    divResults.textContent = divide;
})

