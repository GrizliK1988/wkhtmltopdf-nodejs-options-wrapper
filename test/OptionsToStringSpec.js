var GlobalOptions = require('../src/entity/options/GlobalOptions'),
    PageOptions = require('../src/entity/options/PageOptions'),
    OptionsToString = require('../src/entity/options/OptionsToString');

describe('Options to string converting', function() {
    it('tests converting', function() {
        var emptyOptions = new GlobalOptions();
        expect(OptionsToString(emptyOptions).trim()).toBe('');

        var options = new GlobalOptions();

        options.setCopies(10);
        expect(OptionsToString(options).trim()).toContain('--copies 10');

        options.enableCollate();
        expect(OptionsToString(options).trim()).toContain('--collate');

        var pageOptions = new PageOptions();

        pageOptions.addAllow('path_1');
        pageOptions.addAllow('path_2');
        expect(OptionsToString(pageOptions).trim()).toContain('--allow path_1');
        expect(OptionsToString(pageOptions).trim()).toContain('--allow path_2');

        pageOptions.addCookie('key_1', 'value_1');
        pageOptions.addCookie('key_2', 'value_2');
        expect(OptionsToString(pageOptions).trim()).toContain('--cookie key_1 value_1');
        expect(OptionsToString(pageOptions).trim()).toContain('--cookie key_2 value_2');
    });
});