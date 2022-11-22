import { LetterChecker } from './letter-checker'

export class Syllables {
	private remaining:string
	private syllables:string[] = []

	constructor(word: string) {
		this.remaining = word
	}

	public split() {
		while(this.remaining.length > 0) {
			if(this.chunkBySyllable('cv')) {
				continue
			}

			if(this.chunkBySyllable('cvc')) {
				continue
			}

			if(this.chunkBySyllable('cvcc')) {
				continue
			}

			this.syllables.unshift(this.remaining.slice(-1))
			this.remaining = this.remaining.slice(0, -1)
		}

		return this.syllables
	}

	private chunkBySyllable(syllable: string) {
		const chunkAmount = syllable.length * -1
		const chunk = this.remaining.slice(chunkAmount)

		for(let i = 0;i < syllable.length;i++) {
			const isValid = syllable[i] == 'c' ? LetterChecker.isConsonant(chunk[i]) : LetterChecker.isVowel(chunk[i])

			if(!isValid) {
				return false
			}
		}

		this.syllables.unshift(chunk)
		this.remaining = this.remaining.slice(0, chunkAmount)
		return true
	}
}
