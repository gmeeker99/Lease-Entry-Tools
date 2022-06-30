import { add, isValid, format } from "date-fns"

const parseDateString = dateString => {
	let dateArray = dateString.split("/")
	dateArray = dateArray.map(item => {
		return parseInt(item)
	})

	const parsedMonth = dateArray[0] - 1
	const parsedDay = dateArray[1]
	const parsedYear = dateArray[2]

	const jsDate = new Date(parsedYear, parsedMonth, parsedDay)

	if (isValid(jsDate)) {
		return jsDate
	}
	return
}

const calculateDate = (date, intervals) => {
	const result = add(date, {
		days: intervals.days || 0,
		months: intervals.months || 0,
		years: intervals.years || 0,
	})

	const dateObj = {
		resultJSDate: result,
		formattedDate: format(result, "MM/dd/yyyy")
	}

	return dateObj
}

module.exports = {
	parseDateString,
	calculateDate,
}
