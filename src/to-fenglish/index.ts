import lettersMap from './letters-map.json'

interface LetterMap {
	[index: string]: string
}

export class ToFenglish {
	private text: string
	private position = 1
	private fenglish = ''
	private previous = ''
	private current = ''
	private next = ''
	private word = ''

	constructor(text: string) {
		this.text = text
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

			if (this.isVowel(this.next)) {
				this.onNextLetterIsVowel()
			} else {
				this.onNextLetterIsNotVowel()
			}
		}
	}

	/** @summary is it one of `an`, `en`, `on`, `a`, `e`, `o`? */
	private isVowel(char: string) {
		return ['ً', 'ٍ', 'ٌ', 'َ', 'ِ', 'ُ'].includes(char)
	}

	private onNextLetterIsVowel() {
		if (this.isAlef(this.current)) {
			this.current = this.next
			this.position++
		}

		this.translateCurrentLetter()
	}

	private onNextLetterIsNotVowel() {
		if (this.position == 2) {
			if (this.isAlef(this.current) && this.word.length == 3) {
				this.fenglish = this.fenglish + 'a'
			}

			if (this.isAlef(this.previous) && this.isAlef(this.next) && this.word.length == 4) {
				this.fenglish = 'a' + this.fenglishLetter(this.current) + 'a'
				return
			}
		}

		this.translateCurrentLetter()
	}

	private isAlef(char: string) {
		return ['آ', 'ا'].includes(char)
	}

	private translateCurrentLetter() {
		this.fenglish = this.fenglish + this.fenglishLetter(this.current)
	}

	private fenglishLetter(letter: string) {
		return (<LetterMap>lettersMap)[letter] || letter
	}
}
