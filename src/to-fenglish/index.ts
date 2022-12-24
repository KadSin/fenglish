import lettersMap from './assets/letters-map.json'
import { LetterChecker } from './letter-checker'
import { Syllables } from './syllables'

const { isLongVowel, isShortVowel, isRelatedVowels, isVowel, isO, isE,
	isConsonant, isAlef, isAyn, isVaav, isKhaa, isYe, isHamza, isH } = LetterChecker

export class ToFenglish {
	private text: string
	private position = 1
	private positionInWord = 0
	private fenglish = ''
	private previous = ''
	private current = ''
	private next = ''
	private word = ''
	private syllable = ''

	constructor(text: string|null|undefined) {
		this.text = text || ''
	}

	public convert() {
		const words = this.text.split(' ')
		const fenglishWords = []

		for (this.word of words) {
			this.byWord()
			fenglishWords.push(this.fenglish)
		}

		return fenglishWords.join(' ')
	}

	private byWord() {
		// if word's format is <ALEF (may exists) + LETTER + ALEF + LETTER>
		if(/^([آا]?).([آا]).$/.test(this.word)) {
			this.onWordShouldHaveTwoA(this.word)
			return
		}

		this.fenglish = ''
		for(this.syllable of new Syllables(this.word).split()) {
			this.bySyllable()
		}
	}

	private bySyllable() {
		for (this.position = 1; this.position <= this.syllable.length; this.position++, this.positionInWord++) {
			this.previous = this.syllable[this.position - 2]
			this.current = this.syllable[this.position - 1]
			this.next = this.syllable[this.position]

			if(isAlef(this.current)) {
				this.onCurrentLetterIsAlef()
				continue
			}

			if(isAyn(this.current)) {
				this.onCurrentLetterIsAyn()
				continue
			}

			if(isHamza(this.current)) {
				this.onCurrentLetterIsHamza()
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

			if(this.next == undefined && isE(this.previous) && isH(this.current)) {
				break
			}

			this.translateCurrentLetter()
		}
	}

	private onWordShouldHaveTwoA(word: string) {
		const firstLetter = 'a'.repeat(word.length - 3)

		const fenglishLetterIndexOf = (index:number) => this.fenglishLetter(word.substring(index, index + 1))
		const firstNonAlef = fenglishLetterIndexOf(word.length - 3)
		const secondNonAlef = fenglishLetterIndexOf(word.length - 1)

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

	private onCurrentLetterIsAyn() {
		if(this.positionInWord > 1) {
			if(isRelatedVowels(
				this.word[this.positionInWord - 1],
				this.word[this.positionInWord + 1],
			)) {
				this.fenglish += '\''
			}

			if(isAlef(this.next)) {
				this.fenglish += 'a'
				return
			}

			if(isYe(this.next)) {
				this.fenglish += 'e'
				return
			}
		}
	}

	private onCurrentLetterIsHamza() {
		if(isYe(this.next)) {
			this.fenglish += 'e'
		}
	}

	private onCurrentLetterIsVaav() {
		if(isO(this.previous)) {
			return
		}

		if(isKhaa(this.previous + this.current + this.next)) {
			this.fenglish += 'a'
			return
		}

		if(isAlef(this.previous) && !isVowel(this.next)) {
			this.fenglish = this.fenglish.substring(0, this.position - 2) + 'oo'
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

		if (
			(isLongVowel(this.next) && this.position != 1) ||
			(!isVowel(this.next) && isConsonant(this.previous))
		) {
			this.fenglish += 'i'
			return
		}

		this.translateCurrentLetter()
	}

	private translateCurrentLetter() {
		this.fenglish += this.fenglishLetter(this.current)
	}

	private fenglishLetter(letter: string) {
		return (<{ [index :string] :string }> lettersMap)[letter] || letter
	}
}
