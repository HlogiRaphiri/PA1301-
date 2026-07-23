
        
        const showButton = document.getElementById("showButton");
        const userInput = document.getElementById("userInput");
        const inputMessage = document.getElementById("inputMessage");

        showButton.addEventListener("click", function () {
            inputMessage.textContent = "You entered: " + userInput.value;
        });