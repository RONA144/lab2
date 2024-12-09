function getSortedValues() {
    
    let numbers = [];

    
    for (let i = 1; i <= 5; i++) {
        let input = prompt(`(just one numer)Enter number ${i} of 5:`);
        
        while (isNaN(input) || input === '') {
            alert("Please enter a valid number.");
            input = prompt(`Enter number ${i} of 5:`);
        }
        
        numbers.push(Number(input));
    }

    
    const output = document.createElement('div');
    output.classList.add('output');
    output.innerHTML = `<h3>You have entered the values: ${numbers.join(', ')}</h3>`;


    let ascendingOrder = [...numbers].sort((a, b) => a - b);
    output.innerHTML += `<h3>The values after being sorted in ascending order: ${ascendingOrder.join(', ')}</h3>`;

    
    let descendingOrder = [...numbers].sort((a, b) => b - a);
    output.innerHTML += `<h3>The values after being sorted in descending order: ${descendingOrder.join(', ')}</h3>`;

    
    document.body.appendChild(output);
}


getSortedValues();