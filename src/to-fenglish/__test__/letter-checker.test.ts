import { LetterChecker } from '../letter-checker'

describe('LetterChecker', () => {
	describe('isVowel', () => {
		it('Should identify `an` as a `vowel`', () => {
			expect(LetterChecker.isVowel('ً')).toBeTruthy()
		})

		it('Should identify `en` as a `vowel`', () => {
			expect(LetterChecker.isVowel('ٍ')).toBeTruthy()
		})

		it('Should identify `on` as a `vowel`', () => {
			expect(LetterChecker.isVowel('ٌ')).toBeTruthy()
		})

		it('Should identify `a` as a `vowel`', () => {
			expect(LetterChecker.isVowel('َ')).toBeTruthy()
		})

		it('Should identify `e` as a `vowel`', () => {
			expect(LetterChecker.isVowel('ِ')).toBeTruthy()
		})

		it('Should identify `o` as a `vowel`', () => {
			expect(LetterChecker.isVowel('ُ')).toBeTruthy()
		})
	})

	describe('isAlef', () => {
		it('Should identify `a` as `alef`', () => {
			expect(LetterChecker.isAlef('ا')).toBeTruthy()
		})

		it('Should identify `a ba kolah` as `alef`', () => {
			expect(LetterChecker.isAlef('آ')).toBeTruthy()
		})
	})
})