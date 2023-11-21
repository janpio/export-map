import { randomCharacters } from "../../package-hack";

console.log("startup log");

export default {
	async fetch(request) {
		console.log("request log");

		const result = randomCharacters(8)

		return new Response(`${result}`);
	},
};