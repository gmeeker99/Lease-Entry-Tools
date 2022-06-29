import { parseDateString, calculateDate } from "./dates.js"

// main date calculator events listeners
const dateCalcInputs = document.querySelectorAll(".dateCalc input")
const dateCalcInputDate = document.getElementById("date-input")
const dateCalcOutputs = document.querySelectorAll(".dateCalc__outputs > *")
dateCalcInputs.forEach(input => {
	input.addEventListener("keyup", e => {
		// guard clause: if date-input length is not > 10
		if (
			e.target.id === dateCalcInputDate.id &&
			e.target.value.length < 10
		) {
			return
		}

		let inputDate = dateCalcInputDate.value
		inputDate = parseDateString(inputDate)

		if (!inputDate) {
			console.log("bad Date")
			return
		}

		const daysInput = dateCalcInputs[1].value
		const monthsInput = dateCalcInputs[2].value
		const yearsInput = dateCalcInputs[3].value

		const dateIntervals = {
			days: daysInput || 0,
			months: monthsInput || 0,
			years: yearsInput || 0,
		}

		const dateResult = calculateDate(inputDate, dateIntervals)
		const dateResultMinusOne = calculateDate(dateResult.resultJSDate, {
			days: -1,
		})

		const dateCalcResult = dateCalcOutputs[0]
		const dateCalcResultMinusOne = dateCalcOutputs[1]

		dateCalcResult.innerHTML = dateResult.formattedDate
		dateCalcResultMinusOne.innerHTML = dateResultMinusOne.formattedDate
	})
})
