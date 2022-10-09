import lettersMap from './letters-map'
import { ALEF, VOWELS } from './constants'

export function toFenglish(text) {
	let fenglish = ''

	for(let i = 0;i < text.length;i++) {
		let current = text[i]
		const next = text[i + 1]

		if(VOWELS.includes(next) && current == ALEF) {
			current = next
			i++
		}

		if(i == 1 && text.length == 3 && current == ALEF) {
			fenglish = fenglish + 'a'
		}

		fenglish = fenglish + lettersMap[current] || current
	}

	return fenglish
}