var GlobalOptions = require('../src/entity/options/GlobalOptions');

describe('GlobalOptions tests', function() {
    it('tests constructor', function() {
        var options = new GlobalOptions({
            collate: '',
            'no-collate': 0,
            'cookie-jar': 'cookie.path',
            'copies': null
        });

        expect(options.isCollateEnabled()).toBeTruthy();
        expect(options.options['no-collate']).toBe(0);
        expect(options.options['cookie-jar']).toBe('cookie.path');
        expect(options.getCopies()).toBeNull();
        expect(options.getDpi()).toBeNull();
        expect(options.isExtendedHelpEnabled()).toBeFalsy();
    });

    it('tests setters/getters', function() {
        var options = new GlobalOptions();

        options.enableCollate();
        expect(options.isCollateEnabled()).toBeTruthy();
        options.disableCollate();
        expect(options.isCollateEnabled()).toBeFalsy();

        options.setCopies(10);
        expect(options.getCopies()).toBe(10);

        expect(options.getTitle()).toBe(null);
    });
});