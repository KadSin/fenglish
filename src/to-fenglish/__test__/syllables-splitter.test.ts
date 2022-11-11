import { syllablesSplitter } from '../syllables-splitter'

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

	test.skip('ToDo: Should split words which contains <Consonant + YE + Vowel> syllables', () => {
		expectWordsHaveSyllablles(
			['قُسطَنتَنیِه', 'کُلیات', 'روحانیون'],
			['قُس*طَن*تَ*نی*یِه', 'کُ*لی*یات', 'رو*حا*نی*یون'],
		)
	})
})

function expectWordsHaveSyllablles(words: string[], syllables: string[]) {
	words.forEach((word, i) => {
		expect(syllablesSplitter(word))
			.toEqual(syllables[i].split('*'))
	})
}