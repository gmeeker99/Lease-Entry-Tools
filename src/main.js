import { parseDateString, calculateDate } from "./dates.js"
import { copyText, dispCopyMessage } from "./helper.js"

// main date calculator events listeners
const dateCalcInputs = document.querySelectorAll(".dateCalc input")
const dateCalcInputDate = document.getElementById("date-input")
const dateCalcOutputs = document.querySelectorAll(
	".dateCalc .widget__outputs-container > *"
)

// date calculator main
dateCalcInputs.forEach(input => {
	input.addEventListener("keyup", e => {
		let inputDate = dateCalcInputDate.value
		if (inputDate.length === 0) {
			dateCalcOutputs[0].innerHTML = ""
			dateCalcOutputs[1].innerHTML = ""
			return
		}
		inputDate = parseDateString(inputDate)
		if (!inputDate) {
			dateCalcOutputs[0].innerHTML = ""
			dateCalcOutputs[1].innerHTML = ""
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

// This controls the remove line breaks reset button
const rmLineBreaksResetButton = document.getElementById("rm-line-breaks-reset")
rmLineBreaksResetButton.addEventListener("click", e => {
	document.getElementById("newText").value = ""
	document.getElementById("oldText").value = ""
	document.getElementById("oldText").focus()
})

// This controls the remove line breaks copy button
const rmLineBreaksCopyButton = document.getElementById(
	"rm-line-breaks-copy-btn"
)
rmLineBreaksCopyButton.addEventListener("click", e => {
	document.getElementById("newText").select()
	copyText(document.getElementById("newText").value)
})

const copyableElements = document.querySelectorAll(".copyable")
copyableElements.forEach(element => {
	element.addEventListener("click", e => {
		copyText(e.target.innerHTML)
		dispCopyMessage(e.target)
	})
})
