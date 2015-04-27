define([
    'knockout',
    '3rdparty/unexpected',
    'lib/knockout-editable'
], function (ko, unexpected) {
    var expect = unexpected.clone();

    describe('installation', function () {
        it('adds ko.extenders.editable', function () {
            expect(ko.extenders.editable, 'to be an object');
        });

        it('adds ko.editable', function () {
            expect(ko.extenders.editable, 'to be an object');
        });
    });
});
