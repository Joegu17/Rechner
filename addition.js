function op() {
	var opera = document.getElementById('operation');
	rechne(opera);
}

function rechne(operation) {
	var zahl1 = document.getElementById('zahl1'),
		zahl2 =	document.getElementById('zahl2');
	switch (operation.value) {
	case 'addition':
		var summe = zahl1.valueAsNumber + zahl2.valueAsNumber;
		document.getElementById('resultat').value = summe;
		break;
	case 'subtraktion':
		var summe = zahl1.valueAsNumber - zahl2.valueAsNumber;
		document.getElementById('resultat').value = summe;
		break;
	case 'multiplikation':
		var summe = zahl1.valueAsNumber * zahl2.valueAsNumber;
		document.getElementById('resultat').value = summe;
		break;
	case 'division':
		var summe = zahl1.valueAsNumber / zahl2.valueAsNumber;
		document.getElementById('resultat').value = summe;
		break;
	}
}
document.getElementById("rechner").addEventListener("input", op);