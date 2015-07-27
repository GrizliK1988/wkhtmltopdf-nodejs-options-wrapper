var OptionsToString = require('../src/entity/options/OptionsToString'),
    TOCOptions = require('../src/entity/options/TOCOptions'),
    HeadersAndFooterOptions = require('../src/entity/options/HeadersAndFooterOptions'),
    OutlineOptions = require('../src/entity/options/OutlineOptions'),
    GlobalOptions = require('../src/entity/options/GlobalOptions'),
    Page = require('../src/entity/request_parts/Page'),
    CreateRequest = require('../src/entity/CreateRequest');

describe('CreateRequest tests', function() {
    it('tests accessor methods', function() {
        var request = new CreateRequest();
        expect(request.getPages().length).toBe(0);

        request.addPage(new Page({
            input: 'http://test'
        }));
        expect(request.getPages().length).toBe(1);
        expect(request.getPages()[0].getInput()).toBe('http://test');

        request.clearPages();
        expect(request.getPages().length).toBe(0);
    });

    it('tests constructor', function() {
        var request = new CreateRequest({
            pages: [{input: 'http://test'}],
            globalOptions: {dpi: 300},
            tocOptions: {'toc-header-text': 'text'},
            outlineOptions: {'outline-depth': 3},
            headersAndFooterOptions: {'footer-left': 'footer-text'}
        });

        expect(request.getPages().length).toBe(1);
        expect(request.getPages()[0].getInput()).toBe('http://test');
        expect(request.getGlobalOptions().getDpi()).toBe(300);
        expect(request.getTOCOptions().getTocHeaderText()).toBe('text');
        expect(request.getOutlineOptions().getOutlineDepth()).toBe(3);
        expect(request.getHeadersAndFooterOptions().getFooterLeft()).toBe('footer-text');

        request = new CreateRequest();
        expect(request.getTOCOptions()).toBeNull();
    });

    it('tests toString method', function() {
        var request = new CreateRequest();
        expect(request.toString().trim()).toBe('');

        var page = new Page({input: 'http://test'});
        request.addPage(page);
        expect(request.toString()).toContain(page.toString());

        expect(request.toString()).not.toContain('toc');
        request.enableToc();
        expect(request.toString()).toContain('toc');
        request.disableToc();
        expect(request.toString()).not.toContain('toc');
        var tocOptions = new TOCOptions({'toc-header-text': 'text'});
        request.setTOCOptions(tocOptions);
        expect(request.toString()).toContain(OptionsToString(tocOptions));

        var outlineOptions = new OutlineOptions();
        outlineOptions.setOutlineDepth(5);
        request.setOutlineOptions(outlineOptions);
        expect(request.toString()).toContain(OptionsToString(outlineOptions));

        var headerFooterOptions = new HeadersAndFooterOptions();
        headerFooterOptions.setFooterCenter('text');
        request.setHeadersAndFooterOptions(headerFooterOptions);
        expect(request.toString()).toContain(OptionsToString(headerFooterOptions));

        var globalOptions = new GlobalOptions();
        globalOptions.setCopies(15);
        request.setGlobalOptions(globalOptions);
        expect(request.toString()).toContain(OptionsToString(globalOptions));
    });

    it('tests toObject method', function() {
        var _ = require('underscore'),
            request = new CreateRequest();

        expect(_.isEqual(request.toObject(), {
            pages: [],
            globalOptions: (new GlobalOptions()).options,
            tocOptions: null,
            outlineOptions: (new OutlineOptions()).options,
            headersAndFooterOptions: (new HeadersAndFooterOptions()).options
        })).toBeTruthy();

        request.addPage(new Page({input: 'test'}));
        request.getGlobalOptions().setCopies(5).enableCollate();
        request.getOutlineOptions().enableOutline();
        request.enableToc();

        expect(_.isEqual(request.toObject(), {
            pages: [(new Page({input: 'test'})).options],
            globalOptions: (new GlobalOptions({copies: 5, collate: ''})).options,
            tocOptions: (new TOCOptions()).options,
            outlineOptions: (new OutlineOptions({outline: ''})).options,
            headersAndFooterOptions: (new HeadersAndFooterOptions()).options
        })).toBeTruthy();
    });
});