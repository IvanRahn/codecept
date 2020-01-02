// pass an env variable to take new screenshot
const prepareBaseImage = process.env.UPDATE_SCREENSHOT || false;
const options = {tolerance: 2, prepareBaseImage};

// specify path to put screenshots in directory folder
const path = 'directory/browser_tests/output/base_screenshots/';

Feature('Directory regression tests');

Scenario('search result page', (I) => {
    I.amOnPage('directory/cardiologists-in-sydney-2000-nsw/');
    I.saveScreenshot(`directory_results.png`);
    I.seeVisualDiff('directory_results.png', options);
});
