export class LetterChecker {
	/** @summary is it one of `an`, `en`, `on`, `a`, `e`, `o`? */
	public static isVowel(char: string) {
		return ['ً', 'ٍ', 'ٌ', 'َ', 'ِ', 'ُ'].includes(char)
	}
}
