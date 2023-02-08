import fetch from 'node-fetch';
import { load } from 'cheerio';

export default async (scraper) => {
	const source = await fetch(`https://github.com/Equator-Studios/scrapers/blob/main/scrapers/${scraper}`);
	const sourceData = await source.text()
	const $ = load(sourceData);
	const table = $('tbody').text();
	const url = table.slice(table.indexOf('http'))
	return url.slice(0, url.indexOf('\''))
};
