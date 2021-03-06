/**
 * Pdf creation command abstraction
 *
 * Created by Dmitry Grachikov on 20.06.15.
 */

var GlobalOptions = require('./options/GlobalOptions'),
    TOCOptions = require('./options/TOCOptions'),
    OutlineOptions = require('./options/OutlineOptions'),
    HeadersAndFooterOptions = require('./options/HeadersAndFooterOptions'),
    OptionsToString = require('./options/OptionsToString'),
    OptionsToList = require('./options/OptionsToList'),
    Page = require('./request_parts/Page');

function CreateRequest(data) {
    var options = data || {};

    /**
     * @type {Page[]}
     */
    var pages = options.pages || [];
    this.pages = pages.map(function(page) {
        return new Page(page);
    });

    /**
     * @type {GlobalOptions}
     */
    this.globalOptions = new GlobalOptions(options.globalOptions || {});

    /**
     * Table of contents options
     *
     * @type {TOCOptions}
     */
    this.tocOptions = options.tocOptions ? new TOCOptions(options.tocOptions) : null;

    /**
     * Bookmark options
     *
     * @type {OutlineOptions}
     */
    this.outlineOptions = new OutlineOptions(options.outlineOptions || {});

    /**
     * @type {HeadersAndFooterOptions}
     */
    this.headersAndFooterOptions = new HeadersAndFooterOptions(options.headersAndFooterOptions || {});

    this.debug = options.debug || false;
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
     * Disables table of contents
     *
     * @returns {CreateRequest}
     */
    disableToc: function() {
        this.tocOptions = null;
        return this;
    },

    /**
     * Enables table of contents
     *
     * @returns {CreateRequest}
     */
    enableToc: function() {
        this.tocOptions = new TOCOptions();
        return this;
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

    /**
     * @returns {boolean}
     */
    getDebug: function() {
        return this.debug;
    },

    /**
     * Enable/disable debug mode. In debug mode more output is provided
     * @param debug
     * @returns {CreateRequest}
     */
    setDebug: function(debug) {
        this.debug = debug;
        return this;
    },

    toString: function() {
        var globalOptionsCommand = OptionsToString(this.globalOptions),

            tocOptionsCommand = this.tocOptions !== null ? OptionsToString(this.tocOptions) : '',
            tocCommand = this.tocOptions !== null ? 'toc ' + tocOptionsCommand : '',

            outlineCommand = OptionsToString(this.outlineOptions),

            headerAndFooterCommand = OptionsToString(this.headersAndFooterOptions),

            pageCommands = this.pages.map(function(page) {
                return page.toString();
            });
        return globalOptionsCommand + ' ' + headerAndFooterCommand + ' ' + pageCommands.join(' ') + ' ' + tocCommand
            + ' ' + outlineCommand;
    },

    toList: function() {
        var globalOptionsCommand = OptionsToList(this.globalOptions),

            tocCommandOptionsCommand = this.tocOptions !== null ? ['toc'].concat(OptionsToList(this.tocOptions)) : [],

            outlineCommand = OptionsToList(this.outlineOptions),

            headerAndFooterCommand = OptionsToList(this.headersAndFooterOptions),

            pageCommands = this.pages.map(function(page) {
                return page.toList();
            });

        var commandOptions = [];
        commandOptions = commandOptions.concat(globalOptionsCommand);
        commandOptions = commandOptions.concat(tocCommandOptionsCommand);
        commandOptions = commandOptions.concat(outlineCommand);
        commandOptions = commandOptions.concat(headerAndFooterCommand);
        pageCommands.forEach(function(pageCommand) {
            commandOptions = commandOptions.concat(pageCommand);
        });

        return commandOptions;
    },

    toObject: function() {
        return {
            pages: this.pages.map(function(page) {
                return {
                    input: page.input,
                    options: page.options.options,
                    headersAndFooterOptions: page.headersAndFooterOptions.options
                };
            }),
            globalOptions: this.globalOptions.options,
            tocOptions: this.tocOptions !== null ? this.tocOptions.options : null,
            outlineOptions: this.outlineOptions.options,
            headersAndFooterOptions: this.headersAndFooterOptions.options,
            debug: this.debug
        };
    }
};

module.exports = CreateRequest;
