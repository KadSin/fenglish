import lettersMap from './assets/letters-map'
import { LetterChecker } from './letter-checker'

const { isVowel, isAlef, isAyn } = LetterChecker

export class ToFenglish {
	private text: string
	private position = 1
	private fenglish = ''
	private previous = ''
	private current = ''
	private next = ''
	private word = ''

	constructor(text: string) {
		this.text = text || ''
	}

	public convert() {
		const words = this.text.split(' ')
		const fenglishWords = []

		for (const word of words) {
			this.word = word
			this.byWord()

			fenglishWords.push(this.fenglish)
		}

		return fenglishWords.join(' ')
	}

	private byWord() {
		this.fenglish = ''

		for (this.position = 1; this.position <= this.word.length; this.position++) {
			this.previous = this.word[this.position - 2]
			this.current = this.word[this.position - 1]
			this.next = this.word[this.position]

			if(isAyn(this.current)) {
				continue
			}

			if (isVowel(this.next)) {
				this.onNextLetterIsVowel()
			} else {
				this.onNextLetterIsNotVowel()
			}
		}
	}

	private onNextLetterIsVowel() {
		if (isAlef(this.current)) {
			this.current = this.next
			this.position++
		}

		this.translateCurrentLetter()
	}

	private onNextLetterIsNotVowel() {
		if (this.position == 2) {
			if (isAlef(this.current) && this.word.length == 3) {
				this.fenglish = this.fenglish + 'a'
			}

			if (isAlef(this.previous) && isAlef(this.next) && this.word.length == 4) {
				this.fenglish = 'a' + this.fenglishLetter(this.current) + 'a'
				return
			}
		}

		this.translateCurrentLetter()
	}

	private translateCurrentLetter() {
		this.fenglish = this.fenglish + this.fenglishLetter(this.current)
	}

	private fenglishLetter(letter: string) {
		return lettersMap[letter] || letter
	}
}
