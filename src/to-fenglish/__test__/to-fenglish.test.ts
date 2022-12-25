import { ToFenglish } from '../index'

/**
 * @description `C` points to `Consonant` and `P` points to `Vowel`
 */

describe('toFenglish', () => {
	describe('Other value types', () => {
		it('Should return empty on null and undefined', () => {
			expectPersianIsFenglish(
				[null, undefined],
				['', ''],
			)
		})
	})

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
				['خام', 'بام', 'فال', 'طاق', 'راز', 'لات', 'یات', 'یار', 'رای'],
				['khaam', 'baam', 'faal', 'taagh', 'raaz', 'laat', 'yaat', 'yaar', 'raay'],
			)
		})

		it('Word with <A_BA_KOLAH + Consonant + ALEF vowel + Consonant> format should be `aCaa`', () => {
			expectPersianIsFenglish(
				['آثار', 'آزار', 'آرام', 'آباد', 'آداب', 'آیات', 'آرای'],
				['asaar', 'azaar', 'araam', 'abaad', 'adaab', 'ayaat', 'araay'],
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

		it('Sentence with mix formats should be correct', () => {
			expectPersianIsFenglish(
				['بابا با داداش آرَش رازِ آزار با آرامِش دارَند'],
				['baba ba dadash arash raze azaar ba aramesh darand'],
			)
		})
	})

	describe('ayn', () => {
		it('Word containing <AYN + Consonant> format should remove ayn', () => {
			expectPersianIsFenglish(
				['اِعلانات', 'مِعرات', 'مَعلوم', 'دَعوا', 'رَعشِه'],
				['elanat', 'merat', 'maloom', 'dava', 'rashe'],
			)
		})

		it('Word start with <AYN + ALEF> format should remove ayn', () => {
			expectPersianIsFenglish(
				['عامِل', 'عاشِق', 'عادی'],
				['amel', 'ashegh', 'adi'],
			)
		})

		it('Word containing <AYN + Vowel> format should remove ayn', () => {
			expectPersianIsFenglish(
				['مُعَلِم', 'مُعَدِل', 'عَلامَت', 'عِشق', 'عَمَل', 'عَذاب'],
				['moalem', 'moadel', 'alamat', 'eshgh', 'amal', 'azab'],
			)
		})

		it('Word containing <... + AYN + LongVowel(YE, ALEF and VAAV)> format should use related short vowel instead of ayn', () => {
			expectPersianIsFenglish(
				['مُعادِل', 'راعی', 'مُعانِدین', 'سَعید', 'مُعین', 'مَسعود'],
				['moaadel', 'raei', 'moaanedin', 'saeid', 'moein', 'masood'],
			)
		})

		it('Word containing <AYN + ShortVowel> format should remove ayn', () => {
			expectPersianIsFenglish(
				['مُعَلِم', 'عَلامَت', 'عِشق', 'عَمَل', 'عَذاب'],
				['moalem', 'alamat', 'eshgh', 'amal', 'azab'],
			)
		})
	})

	describe('hamza', () => {
		it('Word containing <HAMZA + LongVowel(YE, ALEF and VAAV)> format should use related short vowel instead of hamza', () => {
			expectPersianIsFenglish(
				['رَئوفی', 'کَدخُدائی', 'آئین', 'تِئاتر', 'رَئیس', 'زِئوس', 'کاکائو', 'رِئال', 'سورِئال'],
				['raoofi', 'kadkhodaei', 'aein', 'teatr', 'raeis', 'zeoos', 'kakaoo', 'real', 'sooreal'],
			)
		})
	})

	describe('vaav', () => {
		it('Word containing <O + VAAV> format should remove `vaav (Madoole)`', () => {
			expectPersianIsFenglish(
				['خُوردَم', 'خُوشگِل', 'خُوراک', 'خُودَم', 'دُو', 'نُوک', 'پُلُو'],
				['khordam', 'khoshgel', 'khorak', 'khodam', 'do', 'nok', 'polo'],
			)
		})

		it('Word containing <KH + VAAV + ALEF> format should remove `vaav` (Madoole)', () => {
			expectPersianIsFenglish(
				['خواب', 'خواستَم', 'خواف', 'خواهِش', 'خوان'],
				['khaab', 'khaastam', 'khaaf', 'khaahesh', 'khaan'],
			)
		})

		it('Word containing <VAAV + VAAV> format should be `oo`', () => {
			expectPersianIsFenglish(
				['کاووس', 'طاووس', 'داوود'],
				['kavoos', 'tavoos', 'davood'],
			)
		})

		it('Word containing <Consonant + VAAV + Consonant> format should be `CooC`', () => {
			expectPersianIsFenglish(
				['ماهور', 'پابوس', 'کابوس', 'کارون', 'نوح', 'روح'],
				['mahoor', 'paboos', 'kaboos', 'karoon', 'nooh', 'rooh'],
			)
		})

		it('Word containing <ALEF + VAAV> format should be `oo`', () => {
			expectPersianIsFenglish(
				['اوف', 'اون', 'اوخ', 'اوستا', 'او', 'اونجا'],
				['oof', 'oon', 'ookh', 'oosta', 'oo', 'oonja'],
			)
		})

		it('Word containing <VAAV + ...> should not get change', () => {
			expectPersianIsFenglish(
				['والا', 'وِستِرن', 'وِرد', 'واچ', 'وان', 'وَسایِل', 'وَمپایِر', 'وَقتِش', 'وُشُو'],
				['vala', 'vestern', 'verd', 'vaach', 'vaan', 'vasayel', 'vampayer', 'vaghtesh', 'vosho'],
			)
		})
	})

	describe('ye', () => {
		it('Word start with <ALEF + YE> format should be `i`', () => {
			expectPersianIsFenglish(
				['ایران', 'ایرادات', 'ایثار', 'ایمان', 'اینها', 'اینبار', 'ایشالا', 'ایستگاه', 'ایست', 'ایرَوان', 'ایشان'],
				['iran', 'iradat', 'isar', 'iman', 'inha', 'inbar', 'ishala', 'istgah', 'ist', 'iravan', 'ishan'],
			)
		})

		it('Word containing <YE + Consonant> format should be `iC`', () => {
			expectPersianIsFenglish(
				['دیر', 'شیر', 'کیش', 'ریشکا', 'میچکا', 'رَحیم', 'ماشین', 'پاچیدَم', 'چیست', 'میزارَم'],
				['dir', 'shir', 'kish', 'rishka', 'michka', 'rahim', 'mashin', 'pachidam', 'chist', 'mizaram'],
			)
		})

		it('Word ended with <Consonant + YE> format should be `Ci`', () => {
			expectPersianIsFenglish(
				['اَبریشَمی', 'اَسلَمی', 'عَلیخانی', 'رامین', 'دیوار'],
				['abrishami', 'aslami', 'alikhani', 'ramin', 'divar'],
			)
		})

		it('Word started with <YE + Vowel> format should be `yV`', () => {
			expectPersianIsFenglish(
				['یاوَر', 'یاشار', 'یَواش', 'یِکی', 'یاسِر', 'یُهَنا', 'یَزید', 'یوری'],
				['yavar', 'yashar', 'yavash', 'yeki', 'yaser', 'yohana', 'yazid', 'yoori'],
			)
		})

		it('Word contains <YE + YE> format should be `yee`', () => {
			expectPersianIsFenglish(
				['مایی', 'پایین', 'لایی', 'چایی', 'بابایی', 'آقاییم', 'زاییدی', 'آیین'],
				['mayee', 'payeen', 'layee', 'chayee', 'babayee', 'aghayeem', 'zayeedi', 'ayeen'],
			)
		})

		it('Word contains <Vowel + YE> format should be `Vy`', () => {
			expectPersianIsFenglish(
				['بَحرِین', 'کِی', 'حُسِین', 'درِیل', 'رِیل', 'شِیدا', 'شِیک', 'جِیران', 'کِیهان', 'مِیدان', 'پِیدا'],
				['bahreyn', 'key', 'hoseyn', 'dreyl', 'reyl', 'sheyda', 'sheyk', 'jeyran', 'keyhan', 'meydan', 'peyda'],
			)
		})

		it('Word contains <YE + ALEF> format should be `iya`', () => {
			expectPersianIsFenglish(
				['بیا', 'ریا', 'میام', 'شیار', 'خیار', 'نِمیام', 'سیاه'],
				['biya', 'riya', 'miyam', 'shiyar', 'khiyar', 'nemiyam', 'siyah'],
			)
		})
	})

	describe('eh', () => {
		it('Word end with <E + H> format should remove `H`', () => {
			expectPersianIsFenglish(
				['یوسُفیِه', 'مَجیدیِه', 'قُسطَنتَنیِه', 'یِکیِه', 'مُحسِنیِه', 'ذِهنیِه'],
				['yoosofiye', 'majidiye', 'ghostantaniye', 'yekiye', 'mohseniye', 'zehniye'],
			)
		})
	})

	describe('pause', () => {
		it('Add apostrophe after `Vowel` in word contains <Vowel + AYN + RelatedVowel> format', () => {
			expectPersianIsFenglish(
				['فِعیل', 'مَعانی', 'مُوعود', 'تَعَدی', 'شایِعِه', 'تَعَهُد', 'مُراعات'],
				['fe\'eil', 'ma\'aani', 'mo\'ood', 'ta\'adi', 'shaye\'e', 'ta\'ahod', 'mora\'aat'],
			)
		})
	})
})

function expectPersianIsFenglish(persian: Array<string|null|undefined>, fenglish: string[]) {
	persian.forEach((value, i) => {
		const translated = new ToFenglish(value).convert()
		expect(translated).toEqual(fenglish[i])
	})
}
