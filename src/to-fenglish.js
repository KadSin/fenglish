import lettersMap from './letters-map'
import { A_BA_KOLAH, ALEF, VOWELS } from './constants'

export function toFenglish(text) {
	let fenglish = ''

	for(let i = 0;i < text.length;i++) {
		const before = text[i - 1]
		let current = text[i]
		const next = text[i + 1]

		if(VOWELS.includes(next)) {
			if(current == ALEF) {
				current = next
				i++
			}

			if(before == A_BA_KOLAH) {
				fenglish = fenglish.slice(0, -1)
			}
		}else{
			if(current == ALEF && text.length == 3) {
				fenglish = fenglish + 'a'
			}

			if(i == 1 && before == A_BA_KOLAH && next == ALEF) {
				fenglish = 'a' + fenglishLetter(current) + 'a'
				continue
			}
		}

		fenglish = fenglish + fenglishLetter(current)
	}

	return fenglish
}

function fenglishLetter(letter) {
	return lettersMap[letter] || letter
}