import { parseDateString, calculateDate } from "./dates.js"

// main date calculator events listeners
const dateCalcInputs = document.querySelectorAll(".dateCalc input")
const dateCalcInputDate = document.getElementById("date-input")
const dateCalcOutputs = document.querySelectorAll(
	".dateCalc__outputs-container > *"
)
dateCalcInputs.forEach(input => {
	input.addEventListener("keyup", e => {
		// guard clause: continue only if date is entered
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

const rmLineBreaksMainButton = document.getElementById("rm-line-breaks-btn")
rmLineBreaksMainButton.addEventListener("click", e => {
	const newTextString = document
		.getElementById("oldText")
		.value.replace(/(\r\n|\n|\r)/gm, " ")
	document.getElementById("newText").value = newTextString
})

const rmLineBreaksResetButton = document.getElementById("rm-line-breaks-reset")
rmLineBreaksResetButton.addEventListener("click", e => {
	document.getElementById("newText").value = ""
	document.getElementById("oldText").value = ""
	document.getElementById("oldText").focus()
})

const rmLineBreaksCopyButton = document.getElementById(
	"rm-line-breaks-copy-btn"
)
rmLineBreaksCopyButton.addEventListener("click", e => {
	document.getElementById("newText").select()
	const newText = document.getElementById("newText").value

	navigator.clipboard.writeText(newText).then(
		onDone => {},
		onError => {
			console.log("Unable to copy contents to clipboard")
		}
	)
})
