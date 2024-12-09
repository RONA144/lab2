     
     let preventDialogs = false;

     
     const dialog = document.getElementById("squareRootDialog");
     const numberInput = document.getElementById("numberInput");
     const calculateBtn = document.getElementById("calculateBtn");
     const resultContainer = document.getElementById("resultContainer");
     const squareRootResult = document.getElementById("squareRootResult");
     const preventCheckbox = document.getElementById("preventCheckbox");

     
     window.onload = function() {
         dialog.classList.add("active");
     };

     
     calculateBtn.addEventListener("click", function() {
         
         const number = parseFloat(numberInput.value);

         if (isNaN(number) || number < 0) {
             alert("Please enter a valid positive number.");
             return;
         }

         
         const squareRoot = Math.sqrt(number);

         
         squareRootResult.textContent = `The square root of ${number} is: ${squareRoot.toFixed(2)}`;
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