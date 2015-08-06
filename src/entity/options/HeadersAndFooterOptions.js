/**
 * This file is generated from wkhtmltopdf documentation at 13:52:12 of 19.07.2015
 */
var extend = require('extend');
/* istanbul ignore next */
function HeadersAndFooterOptions(data) {
    this.options = {};
    this.options['footer-center'] = null;
    this.options['footer-font-name'] = null;
    this.options['footer-font-size'] = null;
    this.options['footer-html'] = null;
    this.options['footer-left'] = null;
    this.options['footer-line'] = null;
    this.options['no-footer-line'] = null;
    this.options['footer-right'] = null;
    this.options['footer-spacing'] = null;
    this.options['header-center'] = null;
    this.options['header-font-name'] = null;
    this.options['header-font-size'] = null;
    this.options['header-html'] = null;
    this.options['header-left'] = null;
    this.options['header-line'] = null;
    this.options['no-header-line'] = null;
    this.options['header-right'] = null;
    this.options['header-spacing'] = null;
    this.options['replace'] = [];
    this.options = extend(this.options, data || {})
}

/* istanbul ignore next */
HeadersAndFooterOptions.prototype = {
    /**
     * Centered footer text
     * 
     * @returns {null|string}
     */
    getFooterCenter: function() {
        return this.options['footer-center'];
    },

    /**
     * Centered footer text
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setFooterCenter: function(text) {
        this.options['footer-center'] = text;
        return this;
    },

    /**
     * Set footer font name (default Arial)
     * 
     * @returns {null|string}
     */
    getFooterFontName: function() {
        return this.options['footer-font-name'];
    },

    /**
     * Set footer font name (default Arial)
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setFooterFontName: function(name) {
        this.options['footer-font-name'] = name;
        return this;
    },

    /**
     * Set footer font size (default 12)
     * 
     * @returns {null|string}
     */
    getFooterFontSize: function() {
        return this.options['footer-font-size'];
    },

    /**
     * Set footer font size (default 12)
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setFooterFontSize: function(size) {
        this.options['footer-font-size'] = size;
        return this;
    },

    /**
     * Adds a html footer
     * 
     * @returns {null|string}
     */
    getFooterHtml: function() {
        return this.options['footer-html'];
    },

    /**
     * Adds a html footer
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setFooterHtml: function(url) {
        this.options['footer-html'] = url;
        return this;
    },

    /**
     * Left aligned footer text
     * 
     * @returns {null|string}
     */
    getFooterLeft: function() {
        return this.options['footer-left'];
    },

    /**
     * Left aligned footer text
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setFooterLeft: function(text) {
        this.options['footer-left'] = text;
        return this;
    },

    /**
     * Display line above the footer
     * 
     * @returns {boolean}
     */
    isFooterLineEnabled: function() {
        return this.options['footer-line'] === '';
    },

    /**
     * Display line above the footer
     * 
     * @returns {HeadersAndFooterOptions}
     */
    enableFooterLine: function() {
        this.options['footer-line'] = '';
        return this;
    },

    /**
     * Display line above the footer
     * 
     * @returns {HeadersAndFooterOptions}
     */
    disableFooterLine: function() {
        this.options['footer-line'] = null;
        return this;
    },

    /**
     * Do not display line above the footer
     * (default)
     * 
     * @returns {boolean}
     */
    isNoFooterLineEnabled: function() {
        return this.options['no-footer-line'] === '';
    },

    /**
     * Do not display line above the footer
     * (default)
     * 
     * @returns {HeadersAndFooterOptions}
     */
    enableNoFooterLine: function() {
        this.options['no-footer-line'] = '';
        return this;
    },

    /**
     * Do not display line above the footer
     * (default)
     * 
     * @returns {HeadersAndFooterOptions}
     */
    disableNoFooterLine: function() {
        this.options['no-footer-line'] = null;
        return this;
    },

    /**
     * Right aligned footer text
     * 
     * @returns {null|string}
     */
    getFooterRight: function() {
        return this.options['footer-right'];
    },

    /**
     * Right aligned footer text
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setFooterRight: function(text) {
        this.options['footer-right'] = text;
        return this;
    },

    /**
     * Spacing between footer and content in mm
     * (default 0)
     * 
     * @returns {null|string}
     */
    getFooterSpacing: function() {
        return this.options['footer-spacing'];
    },

    /**
     * Spacing between footer and content in mm
     * (default 0)
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setFooterSpacing: function(real) {
        this.options['footer-spacing'] = real;
        return this;
    },

    /**
     * Centered header text
     * 
     * @returns {null|string}
     */
    getHeaderCenter: function() {
        return this.options['header-center'];
    },

    /**
     * Centered header text
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setHeaderCenter: function(text) {
        this.options['header-center'] = text;
        return this;
    },

    /**
     * Set header font name (default Arial)
     * 
     * @returns {null|string}
     */
    getHeaderFontName: function() {
        return this.options['header-font-name'];
    },

    /**
     * Set header font name (default Arial)
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setHeaderFontName: function(name) {
        this.options['header-font-name'] = name;
        return this;
    },

    /**
     * Set header font size (default 12)
     * 
     * @returns {null|string}
     */
    getHeaderFontSize: function() {
        return this.options['header-font-size'];
    },

    /**
     * Set header font size (default 12)
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setHeaderFontSize: function(size) {
        this.options['header-font-size'] = size;
        return this;
    },

    /**
     * Adds a html header
     * 
     * @returns {null|string}
     */
    getHeaderHtml: function() {
        return this.options['header-html'];
    },

    /**
     * Adds a html header
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setHeaderHtml: function(url) {
        this.options['header-html'] = url;
        return this;
    },

    /**
     * Left aligned header text
     * 
     * @returns {null|string}
     */
    getHeaderLeft: function() {
        return this.options['header-left'];
    },

    /**
     * Left aligned header text
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setHeaderLeft: function(text) {
        this.options['header-left'] = text;
        return this;
    },

    /**
     * Display line below the header
     * 
     * @returns {boolean}
     */
    isHeaderLineEnabled: function() {
        return this.options['header-line'] === '';
    },

    /**
     * Display line below the header
     * 
     * @returns {HeadersAndFooterOptions}
     */
    enableHeaderLine: function() {
        this.options['header-line'] = '';
        return this;
    },

    /**
     * Display line below the header
     * 
     * @returns {HeadersAndFooterOptions}
     */
    disableHeaderLine: function() {
        this.options['header-line'] = null;
        return this;
    },

    /**
     * Do not display line below the header
     * (default)
     * 
     * @returns {boolean}
     */
    isNoHeaderLineEnabled: function() {
        return this.options['no-header-line'] === '';
    },

    /**
     * Do not display line below the header
     * (default)
     * 
     * @returns {HeadersAndFooterOptions}
     */
    enableNoHeaderLine: function() {
        this.options['no-header-line'] = '';
        return this;
    },

    /**
     * Do not display line below the header
     * (default)
     * 
     * @returns {HeadersAndFooterOptions}
     */
    disableNoHeaderLine: function() {
        this.options['no-header-line'] = null;
        return this;
    },

    /**
     * Right aligned header text
     * 
     * @returns {null|string}
     */
    getHeaderRight: function() {
        return this.options['header-right'];
    },

    /**
     * Right aligned header text
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setHeaderRight: function(text) {
        this.options['header-right'] = text;
        return this;
    },

    /**
     * Spacing between header and content in mm
     * (default 0)
     * 
     * @returns {null|string}
     */
    getHeaderSpacing: function() {
        return this.options['header-spacing'];
    },

    /**
     * Spacing between header and content in mm
     * (default 0)
     * 
     * @returns {HeadersAndFooterOptions}
     */
    setHeaderSpacing: function(real) {
        this.options['header-spacing'] = real;
        return this;
    },

    /**
     * Replace [name] with value in header and
     * footer (repeatable)
     * 
     * @returns {null|Array}
     */
    getReplace: function() {
        return this.options['replace'];
    },

    /**
     * Replace [name] with value in header and
     * footer (repeatable)
     * 
     * @returns {HeadersAndFooterOptions}
     */
    addReplace: function(name, value) {
        this.options['replace'].push([name, value]);
        return this;
    },

    /**
     * Replace [name] with value in header and
     * footer (repeatable)
     * 
     * @returns {HeadersAndFooterOptions}
     */
    clearReplace: function() {
        this.options['replace'] = [];
        return this;
    }

};

module.exports = HeadersAndFooterOptions;