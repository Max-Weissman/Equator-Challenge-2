import fetch from 'node-fetch';
import { load } from 'cheerio';

export default async () => {
	const results = [];
	const scrapers = await fetch(`https://github.com/Equator-Studios/scrapers/tree/main/scrapers`);
	const scraperData = await scrapers.text()
	const $ = load(scraperData);

	const tableRow = $('.Box-row');

	tableRow.map((index) => {
		const name = $(`.Details-content--hidden-not-important > :nth-child(${index}) > :nth-child(${2})`).text().trim()
		if (index > 2){
			return results.push({
				name
			});
		}
	});

	return results;
};
