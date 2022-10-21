import { ToFenglish } from './to-fenglish'

export function toFenglish(text:string) {
	const toFenglish = new ToFenglish(text)
	return toFenglish.convert()
}