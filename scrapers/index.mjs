const scrapers = async () => {
    const findScrapers = await import(`./findScrapers.mjs`);
    const scrapers = await findScrapers.default()
    const findSource = await import(`./findSource.mjs`);
    for (let i = 0; i < scrapers.length; i++){
        scrapers[i].col3 = await findSource.default(scrapers[i].col1)
    }
    console.log(scrapers)
  }

  scrapers()