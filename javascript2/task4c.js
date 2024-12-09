let preventDialogs = false;


const dialog = document.getElementById("cosineDialog");
const angleInput = document.getElementById("angleInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultContainer = document.getElementById("resultContainer");
const cosineResult = document.getElementById("cosineResult");
const preventCheckbox = document.getElementById("preventCheckbox");


window.onload = function() {
    dialog.classList.add("active");
};


calculateBtn.addEventListener("click", function() {

    const angle = parseFloat(angleInput.value);

    if (isNaN(angle)) {
        alert("Please enter a valid number for the angle.");
        return;
    }

    
    const angleInRadians = angle * (Math.PI / 180);

    
    const cosineValue = Math.cos(angleInRadians);

    
    cosineResult.textContent = `The cosine of ${angle}° is: ${cosineValue.toFixed(4)}`;
    resultContainer.style.display = "block";

    
    preventDialogs = preventCheckbox.checked;
});


preventCheckbox.addEventListener("change", function() {
    preventDialogs = this.checked;
});


window.onload = function() {
    if (!preventDialogs) {
        dialog.classList.add("active");
    }
};