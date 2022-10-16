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

	it('Word with <A_BA_KOLAH + Consonant + ALEF vowel + Consonant> format should be `aXaa`', () => {
		expectPersianIsFenglish(
			['آثار', 'آزار', 'آرام', 'آباد', 'آداب'],
			['asaar', 'azaar', 'araam', 'abaad', 'adaab'],
		)
	})

	it('Word with <A_BA_KOLAH + Consonant + ALEF + Consonant + ...> format should be `aXaX...`', () => {
		expectPersianIsFenglish(
			['آسایِش', 'آرامِش', 'آقا', 'آژانس'],
			['asayesh', 'aramesh', 'agha', 'azhans'],
		)
	})

	it('Word with <A_BA_KOLAH + Consonant + Consonant + ALEF> format should be `aXXa`', () => {
		expectPersianIsFenglish(
			['آستارا', 'آبراهام', 'آفتاب', 'آرمان'],
			['astara', 'abraham', 'aftab', 'arman'],
		)
	})

	it('Word with other formats should be correct', () => {
		expectPersianIsFenglish(
			['بابا', 'داداش', 'بَرادَر', 'باران', 'آب', 'بَها', 'مأوا', 'راشِد', 'کاتِر', 'داماد', 'رَوان'],
			['baba', 'dadash', 'baradar', 'baran', 'ab', 'baha', 'ma\'va', 'rashed', 'kater', 'damad', 'ravan'],
		)
	})

	it('Sentence with mix formats should be correct', () => {
		expectPersianIsFenglish(
			['بابا با داداش آرَش رازِ آزار با آرامِش دارَند'],
			['baba ba dadash arash raze azaar ba aramesh darand'],
		)
	})
})

function expectPersianIsFenglish(persian, fenglish) {
	persian.forEach(
		(word, i) => expect(toFenglish(word)).toEqual(fenglish[i]),
	)
}