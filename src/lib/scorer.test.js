import { expect, test } from 'vitest'
import Scorer from './scorer.js'

test('count letters in test', () => {
	expect(Scorer.counts('test')).toStrictEqual({'t': 2, 'e': 1, 's': 1});
});

test('score test with tesabz', () => {
	let value = 'test';
	let letters = ['t', 'e', 's', 'a', 'b', 'z'];
	let score = Scorer.score(value, letters);
	expect(score).toBe(4);
});

test('score eabbq with tesabz', () => {
	let value = 'eabbq';
	let letters = ['t', 'e', 's', 'a', 'b', 'z'];
	let score = Scorer.score(value, letters);
	expect(score).toBe(8);
});

test('score eabbqz with tesabz', () => {
	let value = 'eabbqz';
	let letters = ['t', 'e', 's', 'a', 'b', 'z'];
	let score = Scorer.score(value, letters);
	expect(score).toBe(-8);
});

test('score eabbqzz with tesabz', () => {
	let value = 'eabbqzz';
	let letters = ['t', 'e', 's', 'a', 'b', 'z'];
	let score = Scorer.score(value, letters);
	expect(score).toBe(-8);
});

test('score testabbqz with tesabz', () => {
	let value = 'testabbqz';
	let letters = ['t', 'e', 's', 'a', 'b', 'z'];
	let score = Scorer.score(value, letters);
	expect(score).toBe(-32);
});
