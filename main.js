import "./dates.js"

const dateCalcInputs = document.querySelectorAll(".dateCalc input")
const dateCalcInputDate = document.getElementById("date-input")
dateCalcInputs.forEach(input => {
	input.addEventListener("keyup", e => {
		// guard clause: if date-input length is not > 10
		if (
			e.target.id === dateCalcInputDate.id &&
			e.target.value.length < 10
		) {
			return
		}

		const inputDate = dateCalcInputDate.value

		const dateIntervals = {
			days: 0,
			months: 0,
			years: 0,
		}
	})
})
