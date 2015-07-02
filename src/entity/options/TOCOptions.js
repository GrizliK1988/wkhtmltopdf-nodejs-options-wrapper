/**
 * This file is generated from wkhtmltopdf documentation at 11:13:05 of 27.06.2015
 */
function TOCOptions() {
    this.options = {};
    this.options['disable-dotted-lines'] = null;
    this.options['toc-header-text'] = null;
    this.options['toc-level-indentation'] = null;
    this.options['disable-toc-links'] = null;
    this.options['toc-text-size-shrink'] = null;
    this.options['xsl-style-sheet'] = null;
}

TOCOptions.prototype = {
    /**
     * Do not use dotted lines in the toc
     * 
     * @returns {boolean}
     */
    isDisableDottedLinesEnabled: function() {
        return this.options['disable-dotted-lines'] === '';
    },

    /**
     * Do not use dotted lines in the toc
     * 
     * @returns {TOCOptions}
     */
    enableDisableDottedLines: function() {
        this.options['disable-dotted-lines'] = '';
        return this;
    },

    /**
     * Do not use dotted lines in the toc
     * 
     * @returns {TOCOptions}
     */
    disableDisableDottedLines: function() {
        this.options['disable-dotted-lines'] = null;
        return this;
    },

    /**
     * The header text of the toc (default Table
     * of Contents)
     * 
     * @returns {null|string}
     */
    getTocHeaderText: function() {
        return this.options['toc-header-text'];
    },

    /**
     * The header text of the toc (default Table
     * of Contents)
     * 
     * @returns {TOCOptions}
     */
    setTocHeaderText: function(text) {
        this.options['toc-header-text'] = text;
        return this;
    },

    /**
     * For each level of headings in the toc
     * indent by this length (default 1em)
     * 
     * @returns {null|string}
     */
    getTocLevelIndentation: function() {
        return this.options['toc-level-indentation'];
    },

    /**
     * For each level of headings in the toc
     * indent by this length (default 1em)
     * 
     * @returns {TOCOptions}
     */
    setTocLevelIndentation: function(width) {
        this.options['toc-level-indentation'] = width;
        return this;
    },

    /**
     * Do not link from toc to sections
     * 
     * @returns {boolean}
     */
    isDisableTocLinksEnabled: function() {
        return this.options['disable-toc-links'] === '';
    },

    /**
     * Do not link from toc to sections
     * 
     * @returns {TOCOptions}
     */
    enableDisableTocLinks: function() {
        this.options['disable-toc-links'] = '';
        return this;
    },

    /**
     * Do not link from toc to sections
     * 
     * @returns {TOCOptions}
     */
    disableDisableTocLinks: function() {
        this.options['disable-toc-links'] = null;
        return this;
    },

    /**
     * For each level of headings in the toc the
     * font is scaled by this factor (default
     * 0.8)
     * 
     * @returns {null|string}
     */
    getTocTextSizeShrink: function() {
        return this.options['toc-text-size-shrink'];
    },

    /**
     * For each level of headings in the toc the
     * font is scaled by this factor (default
     * 0.8)
     * 
     * @returns {TOCOptions}
     */
    setTocTextSizeShrink: function(real) {
        this.options['toc-text-size-shrink'] = real;
        return this;
    },

    /**
     * Use the supplied xsl style sheet for
     * printing the table of content
     * 
     * @returns {null|string}
     */
    getXslStyleSheet: function() {
        return this.options['xsl-style-sheet'];
    },

    /**
     * Use the supplied xsl style sheet for
     * printing the table of content
     * 
     * @returns {TOCOptions}
     */
    setXslStyleSheet: function(file) {
        this.options['xsl-style-sheet'] = file;
        return this;
    }

};

TOCOptions.prototype.toString = require('./Base').toString;

module.exports = TOCOptions;