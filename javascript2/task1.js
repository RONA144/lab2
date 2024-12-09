
        
        function validateName(name) {
            return /^[A-Za-z]+$/.test(name);
        }

        
        function validatePhoneNumber(phone) {
            return /^\d{8}$/.test(phone);
        }

        
        function validateMobileNumber(mobile) {
            return /^(010|011|012)\d{8}$/.test(mobile);
        }

        
        function validateEmail(email) {
            return /^[a-zA-Z0-9_.+-]+@[a-zAZ0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
        }

        
        function displayWelcomeMessage(name, phone, mobile, email, colorChoice) {
            
            const colors = {
                red: 'color: red;',
                green: 'color: green;',
                blue: 'color: blue;'
            };

            const selectedColor = colors[colorChoice] || 'color: black;'; 

            
            const output = document.createElement('div');
            output.classList.add('output');
            output.innerHTML = `
                <h3 style="${selectedColor}">Welcome, ${name}!</h3>
                <p style="${selectedColor}">Phone Number: ${phone}</p>
                <p style="${selectedColor}">Mobile Number: ${mobile}</p>
                <p style="${selectedColor}">Email: ${email}</p>
            `;

            
            document.body.appendChild(output);
        }

        
        function askForUserInfo() {
            
            const name = prompt("Enter your name : ");
            if (!validateName(name)) {
                alert("Invalid name. Please enter alphabetic characters only.");
                return; 
            }

            const phone = prompt("Enter your phone number : ");
            if (!validatePhoneNumber(phone)) {
                alert("Invalid phone number. Please enter exactly 8 digits.");
                return;
            }

            const mobile = prompt("Enter your mobile number : ");
            if (!validateMobileNumber(mobile)) {
                alert("Invalid mobile number. It should be 11 digits and start with 010, 011, or 012.");
                return;
            }

            const email = prompt("Enter your email address: ");
            if (!validateEmail(email)) {
                alert("Invalid email format. Please enter a valid email (e.g., abc@123.com).");
                return;
            }

            const colorChoice = prompt(" Choose a color for the output (red, green, or blue): ");
            if (!['red', 'green', 'blue'].includes(colorChoice.toLowerCase())) {
                alert("Invalid color choice. Please choose red, green, or blue.");
                return;
            }

            
            displayWelcomeMessage(name, phone, mobile, email, colorChoice);
            
        }

    
        askForUserInfo();

