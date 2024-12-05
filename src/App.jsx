import { useState } from 'react';
import { bg1, bg2, bg3, bg4 } from './assets/images/index_fondo';
import phrases from './phrases.json';
import './assets/App.css';

const images = [bg1, bg2, bg3, bg4];

function randomIndex(max) {
	return Math.floor(Math.random() * max);
}

function App() {
	const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
	const [image, setImage] = useState(images[randomIndex(images.length)]);

	function changePhrase() {
		setPhrase(phrases[randomIndex(phrases.length)]);
		setImage(images[randomIndex(images.length)]);
	}

	return (
		<div className="wrapper" style={{ backgroundImage: `url('${image}')` }}>
			<div className="container">
				<h1 className="heading">Galletas de la Fortuna</h1>

				<div className="card">
					<div className="card_body">
						<q className="phrase">{phrase.phrase}</q> <br />
						<cite className="author">- {phrase.author}</cite>
					</div>
				</div>

				<button onClick={changePhrase} className="btn">
					Ver Otro
				</button>
			</div>
		</div>
	);
}

export default App;
