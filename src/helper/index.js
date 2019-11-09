export const max_number = numbers => {
	if (!numbers || numbers.length <= 0) return 0;
	return Math.max(...numbers);
};
