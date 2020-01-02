Feature('Directory Page');

Scenario('search results page', (I) => {
    I.amOnPage('directory/cardiologists-in-sydney-2000-nsw/');
    I.seeElement('.card');
});
