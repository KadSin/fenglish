export class LetterChecker {
	/**
	 * @summary is it one of `an`, `en`, `on`, `a`, `e`, `o`?
	 */
	public static isShortVowel(char: string) {
		return ['ً', 'ٍ', 'ٌ', 'َ', 'ِ', 'ُ'].includes(char)
	}

	public static isConsonant(char: string) {
		return !LetterChecker.isShortVowel(char)
	}

	public static isLongVowel(char: string) {
		return ['ا', 'آ', 'أ', 'و', 'ی'].includes(char)
	}

	public static isVowel(char: string) {
		return LetterChecker.isShortVowel(char) || LetterChecker.isLongVowel(char)
	}

	public static isRelatedVowels(first: string, second: string) {
		const voice: { [index :string] :string } = {
			'ا': 'a',
			'َ': 'a', // __َ_
			'ِ': 'e', // ‾‾ِ‾
			'ی': 'e',
			'ُ': 'o', // __ُ_
			'و': 'o',
		}

		return voice[first] === voice[second]
	}

	public static isE(char: string) {
		return 'ِ' == char
	}

	public static isO(char: string) {
		return 'ُ' == char
	}

	public static isAlef(char: string) {
		return ['آ', 'ا'].includes(char)
	}

	public static isAyn(char: string) {
		return 'ع' == char
	}

	public static isHamza(char: string) {
		return 'ئ' == char
	}

	public static isVaav(char: string) {
		return char == 'و'
	}

	public static isKhaa(text: string) {
		return text == 'خوا'
	}

	public static isYe(char: string) {
		return char == 'ی'
	}

	public static isH(char: string) {
		return char == 'ه'
	}
}
