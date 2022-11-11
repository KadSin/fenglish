import { LetterChecker } from './letter-checker'
const { isConsonant, isVowel } = LetterChecker

export function syllablesSplitter(word: string) {
	let remaining = word
	const syllables = []

	while(remaining.length > 0) {
		let chunk = remaining.slice(-2)
		if(isConsonant(chunk[0]) && isVowel(chunk[1])) {
			syllables.unshift(chunk)
			remaining = remaining.slice(0, -2)
			continue
		}

		chunk = remaining.slice(-3)
		if(isConsonant(chunk[0]) && isVowel(chunk[1]) && isConsonant(chunk[2])) {
			syllables.unshift(chunk)
			remaining = remaining.slice(0, -3)
			continue
		}

		chunk = remaining.slice(-4)
		if(isConsonant(chunk[0]) && isVowel(chunk[1]) && isConsonant(chunk[2]) && isConsonant(chunk[3])) {
			syllables.unshift(chunk)
			remaining = remaining.slice(0, -4)
			continue
		}

		syllables.unshift(remaining.slice(-1))
		remaining = remaining.slice(0, -1)
	}

	return syllables
}
