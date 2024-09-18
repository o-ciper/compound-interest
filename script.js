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
	document.getElementById('result').textContent = `Total: $${interest.toFixed(2)}`;
});
