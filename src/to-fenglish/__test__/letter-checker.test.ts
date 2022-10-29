import { LetterChecker } from '../letter-checker'

const { isShortVowel, isLongVowel, isVowel, isAlef, isO, isKhaa, isVaav } = LetterChecker

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
		it('Should identify `alef` as a `vowel`', () => {
			expect(isLongVowel('ا')).toBeTruthy()
		})

		it('Should identify `hamze` as a `vowel`', () => {
			expect(isLongVowel('أ')).toBeTruthy()
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

		it('Should identify `alef` as a `vowel`', () => {
			expect(isVowel('ا')).toBeTruthy()
		})

		it('Should identify `hamze` as a `vowel`', () => {
			expect(isVowel('أ')).toBeTruthy()
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
})