import alefTestCases from './test-cases/alef'
import { toFenglish } from '../to-fenglish'

describe('toFenglish', () => {
	it('Should return exact testcases for letter `alef`', () => {
		for(let persian in alefTestCases)
			expect(toFenglish(persian))
				.toEqual(alefTestCases[persian])
	})
})