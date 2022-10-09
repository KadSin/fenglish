import lettersMap from './letters-map'

export function toFenglish(text) {
	let fenglish = []

	for(let i = 0;i < text.length;i++) {
		let current = text[i]

		fenglish.push(lettersMap[current] || current)
	}

	return fenglish.join('')
}
