import lettersMap from './letters-map'
import { A_BA_KOLAH, ALEF, VOWELS } from './constants'

export function toFenglish(text) {
	let fenglish = ''

	const first = text[0]

	for(let i = 0;i < text.length;i++) {
		const before = text[i - 1]
		let current = text[i]
		const next = text[i + 1]

		if(VOWELS.includes(next)) {
			/**
			 * @example abrha
			 * @description Replace the alef with next vowel
			 */
			if(current == ALEF) {
				current = next
				i++
			}

			/**
			 * @example azar
			 * @description The initial A_BA_KOLAH should be one `a` when format is <A_BA_KOLAH + Consonant + vowel>
			 */
			if(before == A_BA_KOLAH) {
				fenglish = fenglish.slice(0, -1)
			}
		} else {
			if(i == 1) {
				/**
				 * @example khaam
				 * @description Add additional `a` to the words with three letters with <Consonant + ALEF vowel + Consonant> format
				 */
				if(current == ALEF && text.length == 3) {
					fenglish = fenglish + 'a'
				}

				if(first == A_BA_KOLAH && next != undefined) {
					if(hasAlef(next)) {
						/**
						 * @example asaar
						 * @description The initial A_BA_KOLAH should be one `a` and second alef should be two `a` when format is
						 * <A_BA_KOLAH + Consonant + ALEF vowel(long vowel)>
						 */
						fenglish = fenglish.slice(0, -1) + (lettersMap[current] || current) + 'a'
						continue
					} else {
						/**
						 * @example astara
						 * @description The initial A_BA_KOLAH should be one `a` when format is <A_BA_KOLAH + Consonant + Consonant>
						 */
						fenglish = fenglish.slice(0, -1)
					}
				}
			}
		}

		fenglish = fenglish + lettersMap[current] || current
	}

	return fenglish
}

function hasAlef(char) {
	return [A_BA_KOLAH, ALEF].includes(char)
}