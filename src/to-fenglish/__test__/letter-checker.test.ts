import { LetterChecker } from '../letter-checker'

const { isConsonant, isShortVowel, isLongVowel, isVowel, isAlef, isO, isKhaa, isVaav, isYe, isAyn, isHamza } = LetterChecker

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
			expect(isShortVowel('َ')).toBeTruthy()
		})

		it('Should identify `e` as a `vowel`', () => {
			expect(isShortVowel('ِ')).toBeTruthy()
		})

		it('Should identify `o` as a `vowel`', () => {
			expect(isShortVowel('ُ')).toBeTruthy()
		})
	})

	describe('isLongVowel', () => {
		it('Should identify `alef ba kolah` as a `vowel`', () => {
			expect(isLongVowel('آ')).toBeTruthy()
		})

		it('Should identify `alef` as a `vowel`', () => {
			expect(isLongVowel('ا')).toBeTruthy()
		})

		it('Should identify `hamze` as a `vowel`', () => {
			expect(isLongVowel('أ')).toBeTruthy()
		})

		it('Should identify `ی` as a `vowel`', () => {
			expect(isLongVowel('ی')).toBeTruthy()
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
			expect(isVowel('َ')).toBeTruthy()
		})

		it('Should identify `e` as a `vowel`', () => {
			expect(isVowel('ِ')).toBeTruthy()
		})

		it('Should identify `o` as a `vowel`', () => {
			expect(isVowel('ُ')).toBeTruthy()
		})

		it('Should identify `alef ba kolah` as a `vowel`', () => {
			expect(isVowel('آ')).toBeTruthy()
		})

		it('Should identify `alef` as a `vowel`', () => {
			expect(isVowel('ا')).toBeTruthy()
		})

		it('Should identify `hamze` as a `vowel`', () => {
			expect(isVowel('أ')).toBeTruthy()
		})

		it('Should identify `ی` as a `vowel`', () => {
			expect(isVowel('ی')).toBeTruthy()
		})
	})

	describe('isO', () => {
		it('Should identify `o`', () => {
			expect(isO('ُ')).toBeTruthy()
		})
	})

	describe('isAlef', () => {
		it('Should identify `a` as `alef`', () => {
			expect(isAlef('ا')).toBeTruthy()
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
			expect(isVaav('و')).toBeTruthy()
		})
	})

	describe('isKhaa', () => {
		it('Should identify `khaa`', () => {
			expect(isKhaa('خوا')).toBeTruthy()
		})
	})

	describe('isYe', () => {
		it('Should identify `ye`', () => {
			expect(isYe('ی')).toBeTruthy()
		})
	})

	describe('isConsonant', () => {
		it('Should not identify short vowels as consonant', () => {
			const vowels = 'ًٌٍَُِ'.split('')
			vowels.forEach((v) => expect(isConsonant(v)).toBeFalsy())
		})
	})
})