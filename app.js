// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');

console.log(addInput1.value);

const addInput2 = document.getElementById('add-input-2');

console.log(addInput2.value);

const addButton = document.getElementById('add-button');

console.log(addButton);

const addResults = document.getElementById('add-results');

console.log(addResults);


// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    
    
    const sum = value1AsNumber + value2AsNumber;

    addResults.textContent = sum;

})

