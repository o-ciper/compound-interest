const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");

document.getElementById('calculate-interest').addEventListener('submit', function(e) {
	e.preventDefault();

	const principal = parseFloat(document.getElementById('principal').value);
	const rate = parseFloat(document.getElementById('rate').value / 100);
	const days = parseInt(document.getElementById('days').value);
	if (isNaN(principal) || isNaN(rate) || isNaN(days)) {
		alert('Please enter valid numbers for principal, rate, and number of days.');
		return;
	}
	const interest = principal * Math.pow(rate + 1, days);
	document.getElementById('result').innerHTML = `
		<div class="amount-container"><div>Kâr: </div><div class="amount" id="total-profit">${(interest - principal).toFixed(4)}</div></div>
		<div class="amount-container"><div>Bakiye:</div><div class="amount" id="total-amount">${interest.toFixed(4)}</div></div>
	`;
})

function formatCurrency(input) {
	console.log(input);
	// Remove any non-numeric characters except for decimal points
	input.value = input.value.replace(/[^\d.]/g, '');

	// Ensure only one decimal point
	input.value = input.value.replace(/\.(?=.*\.)/g, '');

	// Format the value with commas and two decimal places
	input.value = parseFloat(input.value).toFixed(2).replace(/\d(?=(\d{3})+$)/g, '$&,');
}


principalInput.addEventListener('input', (event) => {
	let value = event.target.value;

	// Replace any commas with dots for consistency
	value = value.replace(',', '.');

	// Remove all characters except digits and a single decimal point
	value = value.replace(/[^0-9.]/g, '');

	// Prevent more than one decimal point
	const decimalIndex = value.indexOf('.');
	if (decimalIndex !== -1) {
		const beforeDecimal = value.slice(0, decimalIndex);
		const afterDecimal = value.slice(decimalIndex + 1, decimalIndex + 4 + 1);
		value = beforeDecimal + '.' + afterDecimal;
	}

	// Update the input field with the formatted value
	event.target.value = value;
});

// Enforce two decimal places on blur (when the user leaves the input)
principalInput.addEventListener('blur', (event) => {
	let value = event.target.value.replace(',', '.'); // Handle comma as decimal point

	// Convert to a float and format to 2 decimal places
	value = parseFloat(value).toFixed(4);

	// If input is invalid or empty, reset to "0.00"
	if (isNaN(value)) {
		value = '0.0000';
	}

	event.target.value = value;
});


rateInput.addEventListener('input', (event) => {
	let value = event.target.value;

	// Replace any commas with dots for consistency
	value = value.replace(',', '.');

	// Remove all characters except digits and a single decimal point
	value = value.replace(/[^0-9.]/g, '');

	// Prevent more than one decimal point
	const decimalIndex = value.indexOf('.');
	if (decimalIndex !== -1) {
		const beforeDecimal = value.slice(0, decimalIndex);
		const afterDecimal = value.slice(decimalIndex + 1, decimalIndex + 4 + 1);
		value = beforeDecimal + '.' + afterDecimal;
	}

	// Update the input field with the formatted value
	event.target.value = value;
});

// Enforce two decimal places on blur (when the user leaves the input)
rateInput.addEventListener('blur', (event) => {
	let value = event.target.value.replace(',', '.'); // Handle comma as decimal point

	// Convert to a float and format to 2 decimal places
	value = parseFloat(value).toFixed(3);

	// If input is invalid or empty, reset to "0.00"
	if (isNaN(value)) {
		value = '0.000';
	}

	event.target.value = value;
});

//principalInput.addEventListener("input", (e) => formatCurrency(e.target));

