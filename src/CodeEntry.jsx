import { useState } from 'react'
import { useSearchParams } from "react-router-dom";
import Encoder from './lib/encoder.js'

const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

function CodeEntry(props) {
	const [letters, setLetters] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	//searchParams.get("__firebase_request_key")

	let letterBoxes = letters.map((letter, index) => (<div className="letter" key={index}>{letter}</div> ));
	if(letterBoxes.length < 6) {
		// Fill in blank boxes up to 6
		for(let index = letterBoxes.length; index < 6; index++) {
			letterBoxes.push(<div className="letter" key={index}> </div>);
		}
	}

	return (
		<>
			<div>
				<div className="letterDisplay">
					{letterBoxes}
				</div>
				<div className="letters">
					{alphabet.map((letter, index) => (
						<button
							key={index}
							className="letter"
							onClick={() => {
								if(letters.indexOf(letter) === -1) {
									if (letters.length < 6) {
										setLetters([...letters, letter]);
									}
								} else {
									let tempLetters = [...letters];
									tempLetters.splice(letters.indexOf(letter), 1);
									setLetters(tempLetters);
								}
							}}
						>
							{letter}
						</button>))
					}
				</div>
				<div className="buttons">
					<button
						onClick={() => {
							let encoded = Encoder.encode(letters);
							setSearchParams({code: encoded});
						}}
					>Encode</button>
				</div>
			</div>
		</>
	)
}

export default CodeEntry
