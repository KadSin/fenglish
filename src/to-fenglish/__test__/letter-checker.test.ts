import { LetterChecker } from '../letter-checker'

const { isConsonant, isShortVowel, isLongVowel, isVowel, isAlef, isO, isKhaa, isVaav, isYe, isAyn,
	isHamza, isE, isH, isRelatedVowels } = LetterChecker

const VOWEL_A_SHORT = 'َ'
const VOWEL_E_SHORT = 'ِ'
const VOWEL_O_SHORT = 'ُ'

const ALEF = 'ا'
const YE = 'ی'
const VAAV = 'و'

describe('LetterChecker', () => {
	describe('isShortVowel', () => {
		it('Should identify `an` as a `vowel`', () => {
			expect(isShortVowel('ً')).toBeTruthy()
		})

		it('Should identify `en` as a `vowel`', () => {
			expect(isShortVowel('ٍ')).toBeTruthy()
		})

		it('Should identify `on` as a `vowel`', () => {
			expect(isShortVowel('ٌ')).toBeTruthy()
		})

		it('Should identify `a` as a `vowel`', () => {
			expect(isShortVowel(VOWEL_A_SHORT)).toBeTruthy()
		})

		it('Should identify `e` as a `vowel`', () => {
			expect(isShortVowel(VOWEL_E_SHORT)).toBeTruthy()
		})

		it('Should identify `o` as a `vowel`', () => {
			expect(isShortVowel(VOWEL_O_SHORT)).toBeTruthy()
		})
	})

	describe('isLongVowel', () => {
		it('Should identify `alef ba kolah` as a `vowel`', () => {
			expect(isLongVowel('آ')).toBeTruthy()
		})

		it('Should identify `alef` as a `vowel`', () => {
			expect(isLongVowel(ALEF)).toBeTruthy()
		})

		it('Should identify `hamze` as a `vowel`', () => {
			expect(isLongVowel('أ')).toBeTruthy()
		})

		it('Should identify `ی` as a `vowel`', () => {
			expect(isLongVowel(YE)).toBeTruthy()
		})
	})

	describe('isVowel', () => {
		it('Should identify `an` as a `vowel`', () => {
			expect(isVowel('ً')).toBeTruthy()
		})

		it('Should identify `en` as a `vowel`', () => {
			expect(isVowel('ٍ')).toBeTruthy()
		})

		it('Should identify `on` as a `vowel`', () => {
			expect(isVowel('ٌ')).toBeTruthy()
		})

		it('Should identify `a` as a `vowel`', () => {
			expect(isVowel(VOWEL_A_SHORT)).toBeTruthy()
		})

		it('Should identify `e` as a `vowel`', () => {
			expect(isVowel(VOWEL_E_SHORT)).toBeTruthy()
		})

		it('Should identify `o` as a `vowel`', () => {
			expect(isVowel(VOWEL_O_SHORT)).toBeTruthy()
		})

		it('Should identify `alef ba kolah` as a `vowel`', () => {
			expect(isVowel('آ')).toBeTruthy()
		})

		it('Should identify `alef` as a `vowel`', () => {
			expect(isVowel(ALEF)).toBeTruthy()
		})

		it('Should identify `hamze` as a `vowel`', () => {
			expect(isVowel('أ')).toBeTruthy()
		})

		it('Should identify `ی` as a `vowel`', () => {
			expect(isVowel(YE)).toBeTruthy()
		})
	})

	describe('isE', () => {
		it('Should identify `e`', () => {
			expect(isE(VOWEL_E_SHORT)).toBeTruthy()
		})
	})

	describe('isO', () => {
		it('Should identify `o`', () => {
			expect(isO(VOWEL_O_SHORT)).toBeTruthy()
		})
	})

	describe('isAlef', () => {
		it('Should identify `a` as `alef`', () => {
			expect(isAlef(ALEF)).toBeTruthy()
		})

		it('Should identify `a ba kolah` as `alef`', () => {
			expect(isAlef('آ')).toBeTruthy()
		})
	})

	describe('isAyn', () => {
		it('Should identify `ayn`', () => {
			expect(isAyn('ع')).toBeTruthy()
		})
	})

	describe('isHamza', () => {
		it('Should identify `hamza`', () => {
			expect(isHamza('ئ')).toBeTruthy()
		})
	})

	describe('isVaav', () => {
		it('Should identify `vaav`', () => {
			expect(isVaav(VAAV)).toBeTruthy()
		})
	})

	describe('isKhaa', () => {
		it('Should identify `khaa`', () => {
			expect(isKhaa('خوا')).toBeTruthy()
		})
	})

	describe('isYe', () => {
		it('Should identify `ye`', () => {
			expect(isYe(YE)).toBeTruthy()
		})
	})

	describe('isH', () => {
		it('Should identify `heh`', () => {
			expect(isH('ه')).toBeTruthy()
		})
	})

	describe('isConsonant', () => {
		it('Should not identify short vowels as consonant', () => {
			const vowels = 'ًٌٍَُِ'.split('')
			vowels.forEach((v) => expect(isConsonant(v)).toBeFalsy())
		})
	})

	describe('isRelatedVowels', () => {
		it('Should identify `a` (short) and `a` (long) related', () => {
			expect(isRelatedVowels(VOWEL_A_SHORT, ALEF)).toBeTruthy()
			expect(isRelatedVowels(ALEF, VOWEL_A_SHORT)).toBeTruthy()
		})

		it('Should identify `a` (short) with it self as related', () => {
			expect(isRelatedVowels(VOWEL_A_SHORT, VOWEL_A_SHORT)).toBeTruthy()
		})

		it('Should identify `a` (long) with it self as related', () => {
			expect(isRelatedVowels(ALEF, ALEF)).toBeTruthy()
		})

		it('Should identify `e` (short) and `e` (long) related', () => {
			expect(isRelatedVowels(VOWEL_E_SHORT, YE)).toBeTruthy()
			expect(isRelatedVowels(YE, VOWEL_E_SHORT)).toBeTruthy()
		})

		it('Should identify `e` (short) with it self as related', () => {
			expect(isRelatedVowels(VOWEL_E_SHORT, VOWEL_E_SHORT)).toBeTruthy()
		})

		it('Should identify `e` (long) with it self as related', () => {
			expect(isRelatedVowels(YE, YE)).toBeTruthy()
		})

		it('Should identify `o` and `oo` (long) related', () => {
			expect(isRelatedVowels(VOWEL_O_SHORT, VAAV)).toBeTruthy()
			expect(isRelatedVowels(VAAV, VOWEL_O_SHORT)).toBeTruthy()
		})

		it('Should identify `o` with it self as related', () => {
			expect(isRelatedVowels(VOWEL_O_SHORT, VOWEL_O_SHORT)).toBeTruthy()
		})

		it('Should identify `oo` (long) with it self as related', () => {
			expect(isRelatedVowels(VAAV, VAAV)).toBeTruthy()
		})
	})
})