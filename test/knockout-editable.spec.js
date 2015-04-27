define([
    'knockout',
    'lib/knockout-editable',
    '3rdparty/unexpected'
], function (ko, knockoutEditable, unexpected) {
    var expect = unexpected.clone();

    describe('initial', function () {
        it('foos', function () {
            expect(knockoutEditable, 'to be an object');
        });
    });
});
