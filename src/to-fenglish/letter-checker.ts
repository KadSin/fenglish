export class LetterChecker {
	/**
	 * @summary is it one of `an`, `en`, `on`, `a`, `e`, `o`?
	 */
	public static isVowel(char: string) {
		return ['ً', 'ٍ', 'ٌ', 'َ', 'ِ', 'ُ'].includes(char)
	}

	public static isO(char: string) {
		return 'ُ' == char
	}

	public static isAlef(char: string) {
		return ['آ', 'ا'].includes(char)
	}

	public static isVaav(char: string) {
		return char == 'و'
	}

	public static isKhaa(text: string) {
		return text == 'خوا'
	}
}
