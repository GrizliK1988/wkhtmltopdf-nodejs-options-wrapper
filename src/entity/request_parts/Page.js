/**
 * Describes "page" command part to wkhtmltopdf
 * Created by Dmitry Grachikov on 20.06.15.
 */

var PageOptionsEntity = require('../options/PageOptions'),
    HeadersAndFooterOptions = require('../options/HeadersAndFooterOptions');

function Page(input) {
    /**
     * @type {string|null}
     */
    this.input = input || null;

    /**
     * @type {PageOptions}
     */
    this.options = new PageOptionsEntity();

    /**
     * @type {HeadersAndFooterOptions}
     */
    this.headersAndFooterOptions = new HeadersAndFooterOptions();
}

Page.prototype = {
    /**
     * Input url / file name
     *
     * @returns {string|null}
     */
    getInput: function() {
        return this.input;
    },

    /**
     * Set input url / file name
     *
     * @param input
     * @returns {Page}
     */
    setInput: function(input) {
        this.input = input;
        return this;
    },

    /**
     * Page options
     *
     * @returns {PageOptions|null}
     */
    getOptions: function() {
        return this.options;
    },

    /**
     * Set page options
     * @param {PageOptions} options
     * @returns {Page}
     */
    setOptions: function(options) {
        this.options = options;
        return this;
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
     * @returns {Page}
     */
    setHeadersAndFooterOptions: function(headersAndFooterOptions) {
        this.headersAndFooterOptions = headersAndFooterOptions;
        return this;
    },

    toString: function() {
        var command = 'page ' + this.getInput();
        if (this.options.toString()) {
            command += ' ' + this.options.toString();
        }
        if (this.headersAndFooterOptions.toString()) {
            command += ' ' + this.headersAndFooterOptions.toString();
        }
        return command;
    }
};

module.exports = Page;
