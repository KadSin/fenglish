import lettersMap from './assets/letters-map'
import { LetterChecker } from './letter-checker'

const { isVowel, isO, isAlef, isVaav, isKhaa } = LetterChecker

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

		// if word's format is <ALEF (may exists) + LETTER + ALEF + LETTER>
		if(/^(آ|ا){0,1}.(آ|ا).$/.test(this.word)) {
			this.onWordShouldHaveTwoA()
			return
		}

		for (this.position = 1; this.position <= this.word.length; this.position++) {
			this.previous = this.word[this.position - 2]
			this.current = this.word[this.position - 1]
			this.next = this.word[this.position]

			if(isAlef(this.current)) {
				this.onCurrentLetterIsAlef()
				continue
			}

			if(isVaav(this.current)) {
				this.onCurrentLetterIsVaav()
				continue
			}

			this.translateCurrentLetter()
		}
	}

	private onWordShouldHaveTwoA() {
		const firstLetter = 'a'.repeat(this.word.length - 3)

		const fenglishLetterIndexOf = (index:number) => this.fenglishLetter(this.word.substring(index, index + 1))
		const firstNonAlef = fenglishLetterIndexOf(this.word.length - 3)
		const secondNonAlef = fenglishLetterIndexOf(this.word.length - 1)

		this.fenglish = `${ firstLetter }${ firstNonAlef }aa${ secondNonAlef }`
	}

	private onCurrentLetterIsAlef() {
		if (isVowel(this.next)) {
			this.current = this.next
			this.position++
		}

		this.translateCurrentLetter()
	}

	private onCurrentLetterIsVaav() {
		if(isVaav(this.previous)) {
			this.fenglish = this.fenglish + 'oo'
			return
		}

		if(isKhaa(this.previous + this.current + this.next)) {
			this.fenglish = this.fenglish + 'a'
			return
		}

		if(isO(this.previous)) {
			return
		}

		this.translateCurrentLetter()
	}

	private translateCurrentLetter() {
		this.fenglish = this.fenglish + this.fenglishLetter(this.current)
	}

	private fenglishLetter(letter: string) {
		const translated = lettersMap[letter]
		return translated == undefined ? letter : translated
	}
}
