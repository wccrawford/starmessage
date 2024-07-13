export default class Encoder {
	static encode(value) {
		return btoa(JSON.stringify({
			// date: Date.now(),
			value: value
		}));
	}

	static decode(value) {
		let decoded = atob(value);
		let json = JSON.parse(decoded);
		return json.value;
	}
}
