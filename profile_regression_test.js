// pass an env variable to take new screenshot
const prepareBaseImage = process.env.UPDATE_SCREENSHOT || false;
const options = {tolerance: 2, prepareBaseImage};
// specify path to put screenshots in directory folder
const path = 'directory/browser_tests/output/';
const profilePageUrl = '/profile/professional/110949-dr-tony-gianduzzo/';


Feature('CSS regression on profile');

Scenario('Overview', (I) => {
    I.amOnPage(profilePageUrl);

    I.saveScreenshot(`profile_overview_desktop.png`);
    I.seeVisualDiff('profile_overview_desktop.png', options);
    I.seeVisualDiffForElement(
        '.foot',
        'profile_overview_desktop.png',
        options
    );

    I.scrollPageToTop();
    I.resizeWindow(720, 1680);
    I.saveScreenshot(`profile_overview_tablet.png`);
    I.seeVisualDiff('profile_overview_tablet.png', options);

    I.scrollPageToBottom();
    I.saveScreenshot(`profile_overview_tablet_bottom.png`);
    I.seeVisualDiff(
        'profile_overview_tablet_bottom.png',
        options
    );

    I.scrollPageToTop();
    I.resizeWindow(480, 1680);
    I.saveScreenshot(`profile_overview_mobile.png`);
    I.seeVisualDiff('profile_overview_mobile.png', options);

    I.scrollPageToBottom();
    I.saveScreenshot(`profile_overview_mobile_bottom.png`);
    I.seeVisualDiff(
        'profile_overview_mobile_bottom.png',
        options
    );
});

Scenario('Fees', (I) => {
    I.amOnPage(`${profilePageUrl}#fees`);
    I.resizeWindow(1440, 1680);

    I.selectOption({css: '.fund-picker select'}, 'HCF');

    I.saveScreenshot(`profile_fees_desktop.png`);
    I.seeVisualDiff('profile_fees_desktop.png', options);

    I.scrollPageToBottom();
    I.saveScreenshot(`profile_fees_desktop_bottom.png`);
    I.seeVisualDiff(
        'profile_fees_desktop_bottom.png',
        options
    );

    I.scrollPageToTop();
    I.resizeWindow(720, 1680);
    I.saveScreenshot(`profile_fees_tablet.png`);
    I.seeVisualDiff('profile_fees_tablet.png', options);

    I.scrollPageToBottom();
    I.saveScreenshot(`profile_fees_tablet_bottom.png`);
    I.seeVisualDiff(
        'profile_fees_tablet_bottom.png',
        options
    );

    I.scrollPageToTop();
    I.resizeWindow(480, 1680);
    I.saveScreenshot(`profile_fees_mobile.png`);
    I.seeVisualDiff('profile_fees_mobile.png', options);

    I.scrollPageToBottom();
    I.saveScreenshot(`profile_fees_mobile_bottom.png`);
    I.seeVisualDiff(
        'profile_fees_mobile_bottom.png',
        options
    );
});

Scenario('Q&A', (I) => {
    I.amOnPage(`${profilePageUrl}#qa`);
    I.resizeWindow(1440, 1680);

    I.saveScreenshot(`profile_qa_desktop.png`);
    I.seeVisualDiff('profile_qa_desktop.png', options);

    I.scrollPageToBottom();
    I.saveScreenshot(`profile_qa_desktop_bottom.png`);
    I.seeVisualDiff(
        'profile_qa_desktop_bottom.png',
        options
    );

    I.scrollPageToTop();
    I.resizeWindow(720, 1680);
    I.saveScreenshot(`profile_qa_tablet.png`);
    I.seeVisualDiff(
        'profile_qa_tablet.png',
        options
    );

    I.scrollPageToBottom();
    I.saveScreenshot(`profile_qa_tablet_bottom.png`);
    I.seeVisualDiff('profile_qa_tablet_bottom.png', options);

    I.scrollPageToTop();
    I.resizeWindow(480, 1680);
    I.saveScreenshot(`profile_qa_mobile.png`);
    I.seeVisualDiff('profile_qa_mobile.png', options);

    I.scrollPageToBottom();
    I.saveScreenshot(`profile_qa_mobile_bottom.png`);
    I.seeVisualDiff('profile_qa_mobile_bottom.png', options);
});

Scenario('ratings', (I) => {
    I.amOnPage(`${profilePageUrl}#ratings`);
    I.resizeWindow(1440, 1680);

    I.saveScreenshot(`profile_ratings_desktop.png`);
    I.seeVisualDiff('profile_ratings_desktop.png', options);

    I.scrollPageToTop();
    I.resizeWindow(720, 1680);
    I.saveScreenshot(`profile_ratings_tablet.png`);
    I.seeVisualDiff('profile_ratings_tablet.png', options);

    I.scrollPageToTop();
    I.resizeWindow(480, 1680);
    I.saveScreenshot(`profile_ratings_mobile.png`);
    I.seeVisualDiff('profile_ratings_mobile.png', options);
});

Scenario('BP integration', (I) => {
    I.amOnPage('/referrals/?client=bp');
    I.resizeWindow(663, 501);
    I.saveScreenshot(`BP_referrals.png`);
    I.seeVisualDiff('BP_referrals.png', options);
    I.amOnPage(profilePageUrl);

    I.saveScreenshot(`BP_profile.png`);
    I.seeVisualDiff('BP_profile.png', options);
});

Scenario('Menu', (I) => {
    I.amOnPage('/directory/find-a-health-professional/');
    I.click('Account');
    I.saveScreenshot(`home_page_menu.png`);
    I.seeVisualDiff('home_page_menu.png', options);
    I.amOnPage(profilePageUrl);
    I.click('Account');
    I.saveScreenshot(`profile_page_menu.png`);
    I.seeVisualDiff('profile_page_menu.png', options);
});
