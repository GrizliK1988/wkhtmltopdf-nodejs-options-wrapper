var Page = require('../src/entity/request_parts/Page'),
    PageOptions = require('../src/entity/options/PageOptions'),
    HeadersAndFooterOptions = require('../src/entity/options/HeadersAndFooterOptions');

describe('Page entity tests', function() {
    it('tests constructor', function() {
        var page = new Page();
        expect(page.getInput()).toBeNull();

        var pageOptionsStringActual = JSON.stringify(page.getOptions().options),
            pageOptionsStringExpected = JSON.stringify((new PageOptions()).options);
        expect(pageOptionsStringActual).toBe(pageOptionsStringExpected);

        var headerFooterOptionsStringActual = JSON.stringify(page.getHeadersAndFooterOptions().options),
            headerFooterOptionsStringExpected = JSON.stringify((new HeadersAndFooterOptions()).options);
        expect(headerFooterOptionsStringActual).toBe(headerFooterOptionsStringExpected);

        page = new Page({
            input: 'http://test',
            options: {
                background: '',
                encoding: 'utf'
            },
            headersAndFooterOptions: {
                'footer-center': 'text'
            }
        });
        expect(page.getInput()).toBe('http://test');
        expect(page.getOptions().isBackgroundEnabled()).toBeTruthy();
        expect(page.getOptions().getEncoding()).toBe('utf');
        expect(page.getHeadersAndFooterOptions().getFooterCenter()).toBe('text');

        var string = page.toString();
        expect(string).toContain('page http://test');
        expect(string).toContain('--background');
        expect(string).toContain('--encoding utf');
        expect(string).toContain('--footer-center text');
    });

    it('tests getter/setter', function() {
        var page = new Page();
        page.setInput('test');
        expect(page.getInput()).toBe('test');

        page.setOptions(new PageOptions({background: ''}));
        expect(page.getOptions().isBackgroundEnabled()).toBeTruthy();

        page.setHeadersAndFooterOptions(new HeadersAndFooterOptions({'footer-center': 'text'}));
        expect(page.getHeadersAndFooterOptions().getFooterCenter()).toBe('text');
    });
});