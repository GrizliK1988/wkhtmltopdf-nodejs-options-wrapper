/**
 * This file is generated from wkhtmltopdf documentation at 13:52:12 of 19.07.2015
 */
var extend = require('extend');
/* istanbul ignore next */
function OutlineOptions(data) {
    this.options = {};
    this.options['dump-default-toc-xsl'] = null;
    this.options['dump-outline'] = null;
    this.options['outline'] = null;
    this.options['no-outline'] = null;
    this.options['outline-depth'] = null;
    this.options = extend(this.options, data || {})
}

/* istanbul ignore next */
OutlineOptions.prototype = {
    /**
     * Dump the default TOC xsl style sheet to
     * stdout
     * 
     * @returns {boolean}
     */
    isDumpDefaultTocXslEnabled: function() {
        return this.options['dump-default-toc-xsl'] === '';
    },

    /**
     * Dump the default TOC xsl style sheet to
     * stdout
     * 
     * @returns {OutlineOptions}
     */
    enableDumpDefaultTocXsl: function() {
        this.options['dump-default-toc-xsl'] = '';
        return this;
    },

    /**
     * Dump the default TOC xsl style sheet to
     * stdout
     * 
     * @returns {OutlineOptions}
     */
    disableDumpDefaultTocXsl: function() {
        this.options['dump-default-toc-xsl'] = null;
        return this;
    },

    /**
     * Dump the outline to a file
     * 
     * @returns {null|string}
     */
    getDumpOutline: function() {
        return this.options['dump-outline'];
    },

    /**
     * Dump the outline to a file
     * 
     * @returns {OutlineOptions}
     */
    setDumpOutline: function(file) {
        this.options['dump-outline'] = file;
        return this;
    },

    /**
     * Put an outline into the pdf (default)
     * 
     * @returns {boolean}
     */
    isOutlineEnabled: function() {
        return this.options['outline'] === '';
    },

    /**
     * Put an outline into the pdf (default)
     * 
     * @returns {OutlineOptions}
     */
    enableOutline: function() {
        this.options['outline'] = '';
        return this;
    },

    /**
     * Put an outline into the pdf (default)
     * 
     * @returns {OutlineOptions}
     */
    disableOutline: function() {
        this.options['outline'] = null;
        return this;
    },

    /**
     * Do not put an outline into the pdf
     * 
     * @returns {boolean}
     */
    isNoOutlineEnabled: function() {
        return this.options['no-outline'] === '';
    },

    /**
     * Do not put an outline into the pdf
     * 
     * @returns {OutlineOptions}
     */
    enableNoOutline: function() {
        this.options['no-outline'] = '';
        return this;
    },

    /**
     * Do not put an outline into the pdf
     * 
     * @returns {OutlineOptions}
     */
    disableNoOutline: function() {
        this.options['no-outline'] = null;
        return this;
    },

    /**
     * Set the depth of the outline (default 4)
     * 
     * @returns {null|string}
     */
    getOutlineDepth: function() {
        return this.options['outline-depth'];
    },

    /**
     * Set the depth of the outline (default 4)
     * 
     * @returns {OutlineOptions}
     */
    setOutlineDepth: function(level) {
        this.options['outline-depth'] = level;
        return this;
    }

};

module.exports = OutlineOptions;