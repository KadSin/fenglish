import lettersMap from './assets/letters-map'
import { LetterChecker } from './letter-checker'

const { isShortVowel, isVowel, isO, isAlef, isVaav, isKhaa, isYe } = LetterChecker

export class ToFenglish {
	private text: string
	private position = 1
	private fenglish = ''
	private previous = ''
	private current = ''
	private next = ''
	private word = ''

	constructor(text: string|null|undefined) {
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

			if(isVaav(this.current) && this.position !== 1) {
				this.onCurrentLetterIsVaav()
				continue
			}

			if(isYe(this.current)) {
				this.onCurrentLetterIsYe()
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
		if (
			isShortVowel(this.next) ||
			(isYe(this.next) && this.position == 1)
		) {
			return
		}

		this.translateCurrentLetter()
	}

	private onCurrentLetterIsVaav() {
		if(isO(this.previous)) {
			return
		}

		if(isKhaa(this.previous + this.current + this.next)) {
			this.fenglish += 'a'
			return
		}

		if(
			isVaav(this.previous) ||
			!(isVowel(this.previous) && isVowel(this.next))
		) {
			this.fenglish += 'oo'
			return
		}

		this.translateCurrentLetter()
	}

	private onCurrentLetterIsYe() {
		if (isYe(this.next)) {
			this.fenglish += 'yee'
			this.position++
			return
		}

		if (!isVowel(this.next)) {
			this.fenglish += 'i'
			return
		}

		this.translateCurrentLetter()
	}

	private translateCurrentLetter() {
		this.fenglish += this.fenglishLetter(this.current)
	}

	private fenglishLetter(letter: string) {
		const translated = lettersMap[letter]
		return translated == undefined ? letter : translated
	}
}
