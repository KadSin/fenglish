import lettersMap from './letters-map'

export function toFenglish(text) {
	const words = text.split(' ')
	let fenglishWords = []

	for(let word of words) {
		let fenglish = ''

		for(let position = 1; position <= word.length; position++) {
			const previous = word[position - 2]
			let current = word[position - 1]
			const next = word[position]

			if(isVowel(next)) {
				if(isAlef(current)) {
					current = next
					position++
				}
			} else {
				if(position == 2) {
					if(isAlef(current) && word.length == 3) {
						fenglish = fenglish + 'a'
					}

					if(isAlef(previous) && isAlef(next) && word.length == 4) {
						fenglish = 'a' + fenglishLetter(current) + 'a'
						continue
					}
				}
			}

			fenglish = fenglish + fenglishLetter(current)
		}

		fenglishWords.push(fenglish)
	}

	return fenglishWords.join(' ')
}

/** @summary is one of `an`, `en`, `on`, `a`, `e`, `o` */
const isVowel = (char) => ['ً', 'ٍ', 'ٌ', 'َ', 'ِ', 'ُ'].includes(char)

const isAlef = (char) => ['آ', 'ا'].includes(char)

function fenglishLetter(letter) {
	return lettersMap[letter] || letter
}