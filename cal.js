const display = document.getElementById('display');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// toggle theme
themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    // Update background color based on the theme
    if (body.classList.contains('dark')) {
        body.style.backgroundColor = 'rgba(63,61,61,1)'; // Dark background
        document.querySelector('.theme-toggle span').textContent = 'Switch to Light';
    } else {
        body.style.backgroundColor = '#f0f0f0'; // Light background
        document.querySelector('.theme-toggle span').textContent = 'Switch to Dark';
    }
});

// Append value to display
function appendValue(value) {
    if (display.textContent === '0') {
        display.textContent = value;

    } else {
        if (value === '%') {
            display.textContent /= 100;
        }
        else {
            display.textContent += value;
        }
    }
}


// Clear the display
function clearDisplay() {
    display.textContent = '0';
}

// delete the last value
function deleteValue() {
    const delLast = display.textContent;
    if (delLast.length === 1) {
        display.textContent = '0';
    } else {
        display.textContent = delLast.slice(0, -1);
    }
}

// Calculate the result
function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (e) {
        display.textContent = 'Error';
    }
}

 // Calculate the square root
 function calculateSquareRoot() {
    const currentValue = parseFloat(display.textContent);
    if (!isNaN(currentValue) && currentValue >= 0) {
        display.textContent = Math.sqrt(currentValue);
    } else {
        display.textContent = 'Error';
    }
}
