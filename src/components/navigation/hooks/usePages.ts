import * as pages from '@pages/index';

const usePages = () => {
	const pagesArray = Object.keys(pages);
	return { pagesArray };
};

export default usePages;
