import { useState } from 'react'
import Encoder from './lib/encoder.js';
import './App.css'
import { useSearchParams } from 'react-router-dom';
import Scorer from './lib/scorer.js';

const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

function CodeScore(props) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [word, setWord] = useState('');
	const [words, setWords] = useState([]);

	let letterBoxes = [...word].map((letter, index) => (<div className="letter" key={index}>{letter}</div> ));
	let letters = Encoder.decode(props.code);

	let wordScores = words.map((word, index) => {
		return <div className="wordScore" key={index}>
			<div className="word">{word.word}</div>
			<div className="score">{word.score}</div>
		</div>;
	});


	return (
		<>
			<div>
				<div className="wordDisplay">
					{word}
				</div>
				<div className="letters">
					{alphabet.map((letter, index) => (
						<button
							key={index}
							className="letter"
							onClick={() => {
								setWord(word + letter);
							}}
						>
							{letter}
						</button>))
					}
					<button
						className="action"
						onClick={() => {
							if(word.length > 0) {
								setWord(word.substring(0, word.length - 1));
							}
						}}
					>Delete</button>
				</div>
				<div className="buttons">
					<button
						onClick={() => {
							let score = Scorer.score(word, letters);
							setWords([{word:word, score:score}, ...words]);
							setWord('');
						}}
					>Score
					</button>
				</div>
				<div className="wordScores">{wordScores}</div>
			</div>
		</>
	)
}

export default CodeScore
