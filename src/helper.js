function copyText(text) {
	if (text.length === 0) {
		return
	}
	navigator.clipboard.writeText(text).then(
		onDone => {
			console.log(`Copied ${text} to clipboard`)
		},
		onError => {
			console.log("Unable to copy contents to clipboard")
		}
	)
}

function dispCopyMessage(element) {
	const originalContent = element.innerHTML
	if (!originalContent) {
		return
	}
	element.innerHTML = "COPIED!"
	setTimeout(() => {
		element.innerHTML = originalContent
	}, 1000)
}

module.exports = {
	copyText,
	dispCopyMessage,
}
