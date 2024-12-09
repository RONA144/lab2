let preventDialogs = false;

        
        const dialog = document.getElementById("circleDialog");
        const radiusInput = document.getElementById("radiusInput");
        const calculateBtn = document.getElementById("calculateBtn");
        const resultContainer = document.getElementById("resultContainer");
        const areaText = document.getElementById("areaText");
        const preventCheckbox = document.getElementById("preventCheckbox");

        
        window.onload = function() {
            dialog.classList.add("active");
        };

        
        calculateBtn.addEventListener("click", function() {
            
            const radius = parseFloat(radiusInput.value);

            if (isNaN(radius) || radius <= 0) {
                alert("Please enter a valid positive number for the radius.");
                return;
            }

            
            const area = Math.PI * Math.pow(radius, 2);

            
            areaText.textContent = `The area of the circle is: ${area.toFixed(2)}`;
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

