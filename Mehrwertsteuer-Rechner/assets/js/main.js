"use strict";

function check(event) {
	event.preventDefault();

	if (document.getElementById("netto").checked) {
		document.querySelector(".betrag-change").innerHTML =
			"Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro <span>*</span>";
	} else if (document.getElementById("brutto").checked) {
		document.querySelector(".betrag-change").innerHTML =
			"Nettobetrag (Preis ohne Mehrwertsteuer) in Euro <span>*</span>";
	}
}

// function check2(event) {
// 	event.preventDefault();
// 	let getInput2 = document.getElementById("input").value;
// 	getInput2 = getInput2.value.toFixed(2);
// }

function berechneMWS(event) {
	event.preventDefault();

	const resultBrutto = document.querySelector(".mws-gesammt");
	const resultSteuer = document.querySelector(".mws-betrag");

	let statusRadioBrutto = document.getElementById("brutto").checked;
	let statusRadioNetto = document.getElementById("netto").checked;
	let statusRadio19 = document.getElementById("mws19").checked;
	let statusRadio7 = document.getElementById("mws7").checked;
	let getInput = document.getElementById("input").value;
	let mwsBetrag = 0;
	let mwsBrutto = 0;
	let mwsNetto = 0;

	if (statusRadioBrutto && statusRadio19) {
		mwsBetrag = (getInput * 19) / 100;
		mwsBrutto = Number(getInput) + mwsBetrag;

		console.log(mwsBetrag, mwsBrutto);

		resultSteuer.innerHTML = `${String(mwsBetrag.toFixed(2)).replace(
			".",
			","
		)} €`;
		resultBrutto.innerHTML = `${String(mwsBrutto.toFixed(2)).replace(
			".",
			","
		)} €`;
	} else if (statusRadioBrutto && statusRadio7) {
		mwsBetrag = (getInput * 7) / 100;
		mwsBrutto = Number(getInput) + mwsBetrag;

		console.log(mwsBetrag, mwsBrutto);

		resultSteuer.innerHTML = `${String(mwsBetrag.toFixed(2)).replace(
			".",
			","
		)} €`;
		resultBrutto.innerHTML = `${String(mwsBrutto.toFixed(2)).replace(
			".",
			","
		)} €`;
	} else if (statusRadioNetto && statusRadio19) {
		mwsBetrag = (Number(getInput) / 119) * 19;
		mwsNetto = Number(getInput) - mwsBetrag;

		console.log(mwsBetrag, mwsNetto);

		resultSteuer.innerHTML = `${String(mwsBetrag.toFixed(2)).replace(
			".",
			","
		)} €`;
		resultBrutto.innerHTML = `${String(mwsNetto.toFixed(2)).replace(
			".",
			","
		)} €`;
	} else if (statusRadioNetto && statusRadio7) {
		mwsBetrag = (Number(getInput) / 107) * 7;
		mwsNetto = Number(getInput) - mwsBetrag;

		console.log(mwsBetrag, mwsNetto);

		resultSteuer.innerHTML = `${String(mwsBetrag.toFixed(2)).replace(
			".",
			","
		)} €`;
		resultBrutto.innerHTML = `${String(mwsNetto.toFixed(2)).replace(
			".",
			","
		)} €`;
	}
}
