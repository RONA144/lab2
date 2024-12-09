function findLargestWord(str) {
    
    const words = str.split(' ');

    
    let largestWord = '';

    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > largestWord.length) {
            largestWord = words[i];
        }
    }

    
    return largestWord;
}


const input = prompt("Enter a sentence to find the largest word:");


if (input) {
    const largestWord = findLargestWord(input);

    
    const output = document.createElement('div');
    output.classList.add('output');
    output.innerHTML = `<h3>The largest word in your sentence is: <strong>${largestWord}</strong></h3>`;
    document.body.appendChild(output);
} else {
    
    alert("No input provided. Please enter a sentence.");
}