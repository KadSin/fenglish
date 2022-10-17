import lettersMap from './letters-map'

export class ToFenglish {
	#text
	#fenglish
	#position
	#previous
	#current
	#next
	#word

	constructor(text) {
		this.#text = text
	}

	convert() {
		const words = this.#text.split(' ')
		let fenglishWords = []

		for(let word of words) {
			this.#word = word
			this.#byWord()

			fenglishWords.push(this.#fenglish)
		}

		return fenglishWords.join(' ')
	}

	#byWord() {
		this.#fenglish = ''

		for(this.#position = 1; this.#position <= this.#word.length; this.#position++) {
			this.#previous = this.#word[this.#position - 2]
			this.#current = this.#word[this.#position - 1]
			this.#next = this.#word[this.#position]

			if(this.#isVowel(this.#next)) {
				this.#onNextLetterIsVowel()
			} else {
				this.#onNextLetterIsNotVowel()
			}
		}
	}

	/** @summary is it one of `an`, `en`, `on`, `a`, `e`, `o`? */
	#isVowel(char) {
		return ['ً', 'ٍ', 'ٌ', 'َ', 'ِ', 'ُ'].includes(char)
	}

	#onNextLetterIsVowel() {
		if(this.#isAlef(this.#current)) {
			this.#current = this.#next
			this.#position++
		}

		this.#translateCurrentLetter()
	}

	#onNextLetterIsNotVowel() {
		if(this.#position == 2) {
			if(this.#isAlef(this.#current) && this.#word.length == 3) {
				this.#fenglish = this.#fenglish + 'a'
			}

			if(this.#isAlef(this.#previous) && this.#isAlef(this.#next) && this.#word.length == 4) {
				this.#fenglish = 'a' + this.#fenglishLetter(this.#current) + 'a'
				return
			}
		}

		this.#translateCurrentLetter()
	}

	#isAlef(char) {
		return ['آ', 'ا'].includes(char)
	}

	#translateCurrentLetter() {
		this.#fenglish = this.#fenglish + this.#fenglishLetter(this.#current)
	}

	#fenglishLetter(letter) {
		return lettersMap[letter] || letter
	}
}
