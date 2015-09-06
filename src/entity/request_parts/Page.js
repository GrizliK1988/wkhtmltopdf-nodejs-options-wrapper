/**
 * Describes "page" command part to wkhtmltopdf
 * Created by Dmitry Grachikov on 20.06.15.
 */

var PageOptionsEntity = require('../options/PageOptions'),
    HeadersAndFooterOptions = require('../options/HeadersAndFooterOptions'),
    OptionsToString = require('../options/OptionsToString'),
    OptionsToList = require('../options/OptionsToList');

function Page(data) {
    var options = data || {};

    /**
     * @type {string|null}
     */
    this.input = options.input || null;

    /**
     * @type {PageOptions}
     */
    this.options = new PageOptionsEntity(options.options || {});

    /**
     * @type {HeadersAndFooterOptions}
     */
    this.headersAndFooterOptions = new HeadersAndFooterOptions(options.headersAndFooterOptions || {});
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
        if (OptionsToString(this.options)) {
            command += ' ' + OptionsToString(this.options);
        }
        if (OptionsToString(this.headersAndFooterOptions)) {
            command += ' ' + OptionsToString(this.headersAndFooterOptions);
        }
        return command;
    },

    toList: function() {
        var command = ['page ' + this.getInput()];
        if (OptionsToString(this.options)) {
            command = command.concat(OptionsToList(this.options));
        }
        if (OptionsToString(this.headersAndFooterOptions)) {
            command = command.concat(OptionsToList(this.headersAndFooterOptions));
        }
        return command;
    }
};

module.exports = Page;
