import { parseDateString, calculateDate } from "./dates.js"

// main date calculator events listeners
const dateCalcInputs = document.querySelectorAll(".dateCalc input")
const dateCalcInputDate = document.getElementById("date-input")
dateCalcInputs.forEach(input => {
	input.addEventListener("keyup", e => {
		// guard clause: if date-input length is not > 10
		/* 		if (
			e.target.id === dateCalcInputDate.id &&
			e.target.value.length < 10
		) {
			return
		} */

		// let inputDate = dateCalcInputDate.value

		let inputDate = "3/6/1999"
		inputDate = parseDateString(inputDate)
		// console.log(inputDate)

		if (!inputDate) {
			console.log("bad Date")
			return
		}
		console.log("good date")

		const dateIntervals = {
			days: 0,
			months: 0,
			years: 0,
		}

		console.log(calculateDate(inputDate, dateIntervals))


	})
})
