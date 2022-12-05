const RandomKey = (): string => {
	const genAlpahbet = (): string[] => {
		const alpha = Array.from(Array(26)).map((e, i) => i + 65);
		const alphabet = alpha.map(x => String.fromCharCode(x));
		const lowerCaseAlphabet = alphabet.map(letter => letter.toLowerCase());
		return [...alphabet, ...lowerCaseAlphabet];
	};

	const randomInRange = (min: number, max: number): number => {
		return Math.random() * (max - min) + min;
	};

	const numOne: number = randomInRange(0, 100);
	const numTwo: number = randomInRange(0, 1000);
	const numThree: number = randomInRange(0, 3456);
	const numFour: number = randomInRange(0, 2346);

	const firstLEtter = genAlpahbet()[randomInRange(0, genAlpahbet().length)];
	const secondLEtter = genAlpahbet()[randomInRange(0, genAlpahbet().length)];
	const thirdLEtter = genAlpahbet()[randomInRange(0, genAlpahbet().length)];
	const lastLEtter = genAlpahbet()[randomInRange(0, genAlpahbet().length)];

	return `${numOne}${firstLEtter}${numTwo}${secondLEtter}${numThree}${thirdLEtter}${numFour}${lastLEtter}`;
};

export default RandomKey;
