import { expect, test } from 'vitest'
import Encoder from './encoder.js'

test('encode string', () => {
	let value = 'asdf';
	let encoded = Encoder.encode(value);
	let decoded = Encoder.decode(encoded);
	expect(decoded).toBe(value);
});