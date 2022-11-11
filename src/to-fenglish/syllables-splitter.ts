import { LetterChecker } from './letter-checker'
const { isConsonant, isVowel } = LetterChecker

export function syllablesSplitter(word: string) {
	let remaining = word
	const syllables = []

	while(remaining.length > 0) {
		let chunk = chunkWordBySyllable(remaining, 'cv')
		if(chunk) {
			syllables.unshift(chunk)
			remaining = remaining.slice(0, -2)
			continue
		}

		chunk = chunkWordBySyllable(remaining, 'cvc')
		if(chunk) {
			syllables.unshift(chunk)
			remaining = remaining.slice(0, -3)
			continue
		}

		chunk = chunkWordBySyllable(remaining, 'cvcc')
		if(chunk) {
			syllables.unshift(chunk)
			remaining = remaining.slice(0, -4)
			continue
		}

		syllables.unshift(remaining.slice(-1))
		remaining = remaining.slice(0, -1)
	}

	return syllables
}

function chunkWordBySyllable(word: string, syllable: string) {
	const chunk = word.slice(syllable.length * -1)

	for(let i = 0;i < syllable.length;i++) {
		const isValid = syllable[i] == 'c' ? isConsonant(chunk[i]) : isVowel(chunk[i])

		if(!isValid) {
			return false
		}
	}

	return chunk
}