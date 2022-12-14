import { Syllables } from '../syllables'

describe('syllablesSplitter', () => {
	it('Should split words which contains <Consonant + Vowel + Consonant> syllables', () => {
		expectWordsHaveSyllablles(
			['کَر', 'فَن', 'رَم', 'ماچ', 'اَصغَر', 'مَستَم', 'دَفتَر', 'اَشکان', 'مَشکوک'],
			['کَر', 'فَن', 'رَم', 'ماچ', 'اَص*غَر', 'مَس*تَم', 'دَف*تَر', 'اَش*کان', 'مَش*کوک'],
		)
	})

	it('Should split words which contains <Consonant + Vowel> syllables', () => {
		expectWordsHaveSyllablles(
			['بابا', 'دَدی', 'ماری', 'دیواری', 'ریکا', 'مینا', 'ساری', 'سَری', 'یوهَنا'],
			['با*با', 'دَ*دی', 'ما*ری', 'دی*وا*ری', 'ری*کا', 'می*نا', 'سا*ری', 'سَ*ری', 'یو*هَ*نا'],
		)
	})

	it('Should split words which contains <Consonant + Vowel + Consonant + Consonant> syllables', () => {
		expectWordsHaveSyllablles(
			['جَنگ', 'خِنگ', 'پارت', 'رَشت', 'چِرکشِرک'],
			['جَنگ', 'خِنگ', 'پارت', 'رَشت', 'چِرک*شِرک'],
		)
	})

	it('Should split words which contains all syllables types', () => {
		expectWordsHaveSyllablles(
			['حُسِین', 'مامان', 'راه', 'روحانی', 'کالبُد', 'مِعراج', 'گُستَرِش', 'نیرومَند'],
			['حُ*سِین', 'ما*مان', 'راه', 'رو*حا*نی', 'کال*بُد', 'مِع*راج', 'گُس*تَ*رِش', 'نی*رو*مَند'],
		)
	})

	it('Should split words which start with <A_BA_KOLAH> format', () => {
		expectWordsHaveSyllablles(
			['آرامگاه', 'آسایِشگاه', 'آدَم', 'آژانس'],
			['آ*رام*گاه', 'آ*سا*یِش*گاه', 'آ*دَم', 'آ*ژانس'],
		)
	})

	it('Should split words which contains <KHAA> format', () => {
		expectWordsHaveSyllablles(
			['خوابیدَن', 'خواب', 'خوانایی', 'مَخواب', 'خواهِشا', 'خواستَن'],
			['خوا*بی*دَن', 'خواب', 'خوا*نا*یی', 'مَ*خواب', 'خوا*هِ*شا', 'خواس*تَن'],
		)
	})

	it('Should split words which contains <Consonant + YE + Vowel> syllables', () => {
		expectWordsHaveSyllablles(
			['قُسطَنتَنیِه', 'کُلیات', 'روحانیون', 'سیاسَتمَدار'],
			['قُس*طَن*تَ*نی*یِه', 'کُ*لی*یات', 'رو*حا*نی*یون', 'سی*یا*سَت*مَ*دار'],
		)
	})

	it('Should split word syllables which have two sequenced long vowel', () => {
		expectWordsHaveSyllablles(
			['آیینِه', 'دایی', 'چایی', 'داوود', 'کاووس'],
			['آ*یی*نِه', 'دا*یی', 'چا*یی', 'دا*وود', 'کا*ووس'],
		)
	})
})

function expectWordsHaveSyllablles(words: string[], syllables: string[]) {
	words.forEach((word, i) => {
		expect(new Syllables(word).split())
			.toEqual(syllables[i].split('*'))
	})
}