import { LetterChecker } from './letter-checker'
const { isYe, isConsonant, isVowel } = LetterChecker

const KHAA = 'خا'
const KHAVA = 'خوا'
const YE = 'ی'

export class Syllables {
	private remaining:string
	private syllables:string[] = []

	constructor(word: string) {
		this.remaining = word
	}

	public split() {
		const hasKhaa = this.remaining.includes(KHAVA)
		if(hasKhaa) {
			this.remaining = this.remaining.replace(KHAVA, KHAA)
		}

		while(this.remaining.length > 0) {
			if(this.chunkBySyllable('cv') || this.chunkBySyllable('cvc')) {
				if(hasKhaa && this.syllables[0].includes(KHAA)) {
					this.syllables[0] = this.syllables[0].replace(KHAA, KHAVA)
				}

				if(this.remaining.length > 0) {
					if(!isVowel(this.remaining.slice(-1)) && isYe(this.syllables[0][0]) && isVowel(this.syllables[0][1])) {
						this.remaining += YE
					}
				}

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
		const amount = syllable.length * -1
		const chunk = this.remaining.slice(amount)

		for(let i = 0;i < syllable.length;i++) {
			const isValid = syllable[i] == 'c' ? isConsonant(chunk[i]) : isVowel(chunk[i])

			if(!isValid) {
				return false
			}
		}

		this.syllables.unshift(chunk)
		this.remaining = this.remaining.slice(0, amount)
		return true
	}
}
