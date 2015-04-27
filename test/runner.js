/*global mocha, mochaPhantomJS, require */
mocha.ui('bdd');
mocha.reporter('html');

require([
    'test/knockout-editable.spec'
], function () {
    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }
});
