/**
 * Pdf creation command abstraction
 *
 * Created by Dmitry Grachikov on 20.06.15.
 */

var GlobalOptions = require('./options/GlobalOptions'),
    TOCOptions = require('./options/TOCOptions'),
    OutlineOptions = require('./options/OutlineOptions'),
    HeadersAndFooterOptions = require('./options/HeadersAndFooterOptions');

function CreateRequest() {
    /**
     * @type {Page[]}
     */
    this.pages = [];

    /**
     * @type {GlobalOptions}
     */
    this.globalOptions = new GlobalOptions();

    /**
     * Table of contents options
     *
     * @type {TOCOptions}
     */
    this.tocOptions = new TOCOptions();

    /**
     * Bookmark options
     *
     * @type {OutlineOptions}
     */
    this.outlineOptions = new OutlineOptions();

    /**
     * @type {HeadersAndFooterOptions}
     */
    this.headersAndFooterOptions = new HeadersAndFooterOptions();
}

CreateRequest.prototype = {
    /**
     * Add new page to request
     *
     * @param {Page} page
     * @returns {CreateRequest}
     */
    addPage: function(page) {
        this.pages.push(page);
        return this;
    },

    /**
     * Remove all pages from request
     *
     * @returns {CreateRequest}
     */
    clearPages: function() {
        this.pages = [];
        return this;
    },

    /**
     * Get pages in request
     *
     * @returns {Page[]}
     */
    getPages: function() {
        return this.pages;
    },

    /**
     * Set Global Options
     *
     * @param {GlobalOptions} globalOptions
     * @returns {CreateRequest}
     */
    setGlobalOptions: function(globalOptions) {
        this.globalOptions = globalOptions;
        return this;
    },

    /**
     * Return Global Options
     *
     * @returns {GlobalOptions|null}
     */
    getGlobalOptions: function() {
        return this.globalOptions;
    },

    /**
     * Set Table of Contents Options
     *
     * @param {TOCOptions} tocOptions
     * @returns {CreateRequest}
     */
    setTOCOptions: function(tocOptions) {
        this.tocOptions = tocOptions;
        return this;
    },

    /**
     * Return Table of Contents Options
     *
     * @returns {TOCOptions|null}
     */
    getTOCOptions: function() {
        return this.tocOptions;
    },

    /**
     * Set Outline Options (bookmark options)
     *
     * @param {OutlineOptions} outlineOptions
     * @returns {CreateRequest}
     */
    setOutlineOptions: function(outlineOptions) {
        this.outlineOptions = outlineOptions;
        return this;
    },

    /**
     * Return Outline Options (bookmark options)
     *
     * @returns {OutlineOptions|null}
     */
    getOutlineOptions: function() {
        return this.outlineOptions;
    },

    /**
     * Headers and footer options
     *
     * @returns {HeadersAndFooterOptions|null}
     */
    getHeadersAndFooterOptions: function() {
        return this.headersAndFooterOptions;
    },

    /**
     * Set Headers and footer options
     * @param {HeadersAndFooterOptions} headersAndFooterOptions
     * @returns {CreateRequest}
     */
    setHeadersAndFooterOptions: function(headersAndFooterOptions) {
        this.headersAndFooterOptions = headersAndFooterOptions;
        return this;
    },

    toString: function() {
        var globalOptionsCommand = this.globalOptions.toString(),

            tocOptionsCommand = this.tocOptions.toString(),
            tocCommand = tocOptionsCommand ? 'toc ' + tocOptionsCommand : '',

            outlineCommand = this.outlineOptions.toString(),

            headerAndFooterCommand = this.headersAndFooterOptions.toString(),

            pageCommands = this.pages.map(function(page) {
                return page.toString();
            });
        return globalOptionsCommand + ' ' + headerAndFooterCommand + ' ' + pageCommands.join(' ') + ' ' + tocCommand
            + ' ' + outlineCommand;
    }
};

module.exports = CreateRequest;
