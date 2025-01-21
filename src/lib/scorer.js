export default class Scorer {
	static score(word, letters) {
		if(letters.length < 6) {
			return;
		}
		if(!word.length){
			return;
		}

		let counts = {};
		letters.forEach((letter) => {
			counts[letter] = 0;
		});

		counts = {...counts, ...this.counts(word)};

		let score = 0;
		score += counts[letters[0]] + counts[letters[1]] + counts[letters[2]];
		score *= Math.pow(2, (counts[letters[3]] + counts[letters[4]]));
		if(counts[letters[5]]) {
			score *= -1;
		}

		return score;
	}

	static counts(word) {
		return [...word].reduce(
			(acc, b) => {
				acc[b] = (acc[b] ?? 0) + 1;
				return acc;
			},
			{});
	}
}
