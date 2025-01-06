export const slugify = (text: string): string => {
	const slugged = text
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
	if (slugged === 'home') return '';
	return slugged;
};
