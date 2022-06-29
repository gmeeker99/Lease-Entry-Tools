const parseDateString = dateString => {
	let dateArray = dateString.split("/")
	dateArray = dateArray.map(item => {
		return parseInt(item)
	})

	const parsedMonth = dateArray[0] - 1
	const parsedDay = dateArray[1]
	const parsedYear = dateArray[2]

	const jsDate = new Date(parsedYear, parsedMonth, parsedDay)

	console.log(jsDate)
}
parseDateString("3/6/1999")
