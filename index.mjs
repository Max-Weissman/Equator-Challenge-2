(async () => {
	const findScrapers = await import(`./scrapers/findScrapers.mjs`);
	const scrapers = await findScrapers.default()
	const findSource = await import(`./scrapers/findSource.mjs`);
	for (let i = 0; i < scrapers.length; i++){
		scrapers[i].source = await findSource.default(scrapers[i].name)
		console.log(scrapers[i])
	}
})();
