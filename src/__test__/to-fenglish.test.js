import { toFenglish } from '../to-fenglish'

/**
 * @description `X` point to `Consonant` and `Y` point to `Vowel`
 */

describe('toFenglish for ALEF', () => {
	it('Should overwrite the alef by next vowel', () => {
		expectPersianIsFenglish(
			['اَشکال', 'اَبرها', 'اِشتِها', 'اِجرا', 'اَسب'],
			['ashkal', 'abrha', 'eshteha', 'ejra', 'asb'],
		)
	})

	it('Word with <A_BA_KOLAH + Consonant + vowel> format should be `aXY`', () => {
		expectPersianIsFenglish(
			['آذَر', 'آدَم', 'آرَش', 'آسِمان', 'آشِکار'],
			['azar', 'adam', 'arash', 'aseman', 'ashekar'],
		)
	})

	it('Word with <Consonant + ALEF vowel + Consonant> format should be `XaaX`', () => {
		expectPersianIsFenglish(
			['خام', 'بام', 'فال', 'طاق', 'راز', 'لات'],
			['khaam', 'baam', 'faal', 'taagh', 'raaz', 'laat'],
		)
	})

	it('Word with <A_BA_KOLAH + Consonant + ALEF vowel(long vowel)> format should be `aXaa`', () => {
		expectPersianIsFenglish(
			['آثار', 'آزار', 'آرام', 'آباد', 'آداب'],
			['asaar', 'azaar', 'araam', 'abaad', 'adaab'],
		)
	})
})

function expectPersianIsFenglish(persian, fenglish) {
	persian.forEach(
		(word, i) => expect(toFenglish(word)).toEqual(fenglish[i]),
	)
}