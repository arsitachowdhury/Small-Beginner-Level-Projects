const display = document.getElementById('display');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const historyDiv = document.getElementById('history');

// Toggle theme
themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    document.querySelector('.theme-toggle span').textContent = 
        body.classList.contains('dark') ? 'Switch to Light' : 'Switch to Dark';
});

// Append value to display
function appendValue(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Clear the display
function clearDisplay() {
    display.textContent = '0';
}

// Calculate the result and save to history
function calculate() {
    try {
        const expression = display.textContent;
        const result = eval(expression);

        // Display the result
        display.textContent = result;

        // Add calculation to history
        addToHistory(expression, result);
    } catch (e) {
        display.textContent = 'Error';
    }
}

// Add calculation to history
function addToHistory(expression, result) {
    const historyItem = document.createElement('p');
    historyItem.textContent = `${expression} = ${result}`;
    historyDiv.prepend(historyItem); // Add to the top of the history
}
