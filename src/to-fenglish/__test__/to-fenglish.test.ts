import { ToFenglish } from '../index'

/**
 * @description `C` points to `Consonant` and `P` points to `Vowel`
 */

describe('toFenglish', () => {
	describe('alef', () => {
		it('Should overwrite the alef by next vowel', () => {
			expectPersianIsFenglish(
				['اَشکال', 'اَبرها', 'اِشتِها', 'اِجرا', 'اَسب'],
				['ashkal', 'abrha', 'eshteha', 'ejra', 'asb'],
			)
		})

		it('Word with <A_BA_KOLAH + Consonant + vowel> format should be `aCP`', () => {
			expectPersianIsFenglish(
				['آذَر', 'آدَم', 'آرَش', 'آسِمان', 'آشِکار'],
				['azar', 'adam', 'arash', 'aseman', 'ashekar'],
			)
		})

		it('Word with <Consonant + ALEF vowel + Consonant> format should be `CaaC`', () => {
			expectPersianIsFenglish(
				['خام', 'بام', 'فال', 'طاق', 'راز', 'لات'],
				['khaam', 'baam', 'faal', 'taagh', 'raaz', 'laat'],
			)
		})

		it('Word with <A_BA_KOLAH + Consonant + ALEF vowel + Consonant> format should be `aCaa`', () => {
			expectPersianIsFenglish(
				['آثار', 'آزار', 'آرام', 'آباد', 'آداب'],
				['asaar', 'azaar', 'araam', 'abaad', 'adaab'],
			)
		})

		it('Word with <A_BA_KOLAH + Consonant + ALEF + Consonant + ...> format should be `aCaC...`', () => {
			expectPersianIsFenglish(
				['آسایِش', 'آرامِش', 'آقا', 'آژانس'],
				['asayesh', 'aramesh', 'agha', 'azhans'],
			)
		})

		it('Word with <A_BA_KOLAH + Consonant + Consonant + ALEF> format should be `aCCa`', () => {
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

		it('Should return empty on null and undefined', () => {
			expectPersianIsFenglish(
				[null, undefined],
				['', ''],
			)
		})

		it('Sentence with mix formats should be correct', () => {
			expectPersianIsFenglish(
				['بابا با داداش آرَش رازِ آزار با آرامِش دارَند'],
				['baba ba dadash arash raze azaar ba aramesh darand'],
			)
		})
	})

	describe('ayn', () => {
		it('Word with <AYN + Consonant> format should be `aynC', () => {
			expectPersianIsFenglish(
				['اِعلانات', 'مِعرات', 'مُعادِل', 'عامِل'],
				['elanat', 'merat', 'moadel', 'amel'],
			)
		})

		it('Word with <AYN + Vowel> format should be `aynV', () => {
			expectPersianIsFenglish(
				['مُعَلِم', 'عَلامَت', 'عاشِق', 'عِشق', 'عَمَل', 'عَذاب'],
				['moalem', 'alamat', 'ashegh', 'eshgh', 'amal', 'azab'],
			)
		})
	})
})

function expectPersianIsFenglish(persian: any[], fenglish: string[]) {
	persian.forEach((value, i) => {
		const translated = new ToFenglish(value).convert()
		expect(translated).toEqual(fenglish[i])
	})
}
