"use strict";
(self["webpackChunkchallenge_2"] = self["webpackChunkchallenge_2"] || []).push([["client_scrapers_findScrapers_mjs"],{

/***/ "./client/scrapers/findScrapers.mjs":
/*!******************************************!*\
  !*** ./client/scrapers/findScrapers.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cheerio */ "./node_modules/cheerio/lib/esm/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
	const results = [];
	const scrapers = await node_fetch__WEBPACK_IMPORTED_MODULE_0__(`https://github.com/Equator-Studios/scrapers/tree/main/scrapers`);
	const scraperData = await scrapers.text()
	const $ = (0,cheerio__WEBPACK_IMPORTED_MODULE_1__.load)(scraperData);

	const tableRow = $('.Box-row');

	tableRow.map((index) => {
		const name = $(`.Details-content--hidden-not-important > :nth-child(${index}) > :nth-child(${2})`).text().trim()
		if (index > 2){
			return results.push({
				id: index + 1,
				col1: name,
				col2: `https://github.com/Equator-Studios/scrapers/blob/main/scrapers/${name}`,
				col3: ''
			});
		}
	});

	return results;
});

/***/ })

}]);
//# sourceMappingURL=client_scrapers_findScrapers_mjs.bundle.js.map