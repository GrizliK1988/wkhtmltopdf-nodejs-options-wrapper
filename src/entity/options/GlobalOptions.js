/**
 * This file is generated from wkhtmltopdf documentation at 13:52:12 of 19.07.2015
 */
var extend = require('extend');
/* istanbul ignore next */
function GlobalOptions(data) {
    this.options = {};
    this.options['collate'] = null;
    this.options['no-collate'] = null;
    this.options['cookie-jar'] = null;
    this.options['copies'] = null;
    this.options['dpi'] = null;
    this.options['extended-help'] = null;
    this.options['grayscale'] = null;
    this.options['help'] = null;
    this.options['htmldoc'] = null;
    this.options['image-dpi'] = null;
    this.options['image-quality'] = null;
    this.options['license'] = null;
    this.options['lowquality'] = null;
    this.options['manpage'] = null;
    this.options['margin-bottom'] = null;
    this.options['margin-left'] = null;
    this.options['margin-right'] = null;
    this.options['margin-top'] = null;
    this.options['orientation'] = null;
    this.options['page-height'] = null;
    this.options['page-size'] = null;
    this.options['page-width'] = null;
    this.options['no-pdf-compression'] = null;
    this.options['quiet'] = null;
    this.options['read-args-from-stdin'] = null;
    this.options['readme'] = null;
    this.options['title'] = null;
    this.options['version'] = null;
    this.options = extend(this.options, data || {})
}

/* istanbul ignore next */
GlobalOptions.prototype = {
    /**
     * Collate when printing multiple copies
     * (default)
     * 
     * @returns {boolean}
     */
    isCollateEnabled: function() {
        return this.options['collate'] === '';
    },

    /**
     * Collate when printing multiple copies
     * (default)
     * 
     * @returns {GlobalOptions}
     */
    enableCollate: function() {
        this.options['collate'] = '';
        return this;
    },

    /**
     * Collate when printing multiple copies
     * (default)
     * 
     * @returns {GlobalOptions}
     */
    disableCollate: function() {
        this.options['collate'] = null;
        return this;
    },

    /**
     * Do not collate when printing multiple
     * copies
     * 
     * @returns {boolean}
     */
    isNoCollateEnabled: function() {
        return this.options['no-collate'] === '';
    },

    /**
     * Do not collate when printing multiple
     * copies
     * 
     * @returns {GlobalOptions}
     */
    enableNoCollate: function() {
        this.options['no-collate'] = '';
        return this;
    },

    /**
     * Do not collate when printing multiple
     * copies
     * 
     * @returns {GlobalOptions}
     */
    disableNoCollate: function() {
        this.options['no-collate'] = null;
        return this;
    },

    /**
     * Read and write cookies from and to the
     * supplied cookie jar file
     * 
     * @returns {null|string}
     */
    getCookieJar: function() {
        return this.options['cookie-jar'];
    },

    /**
     * Read and write cookies from and to the
     * supplied cookie jar file
     * 
     * @returns {GlobalOptions}
     */
    setCookieJar: function(path) {
        this.options['cookie-jar'] = path;
        return this;
    },

    /**
     * Number of copies to print into the pdf
     * file (default 1)
     * 
     * @returns {null|string}
     */
    getCopies: function() {
        return this.options['copies'];
    },

    /**
     * Number of copies to print into the pdf
     * file (default 1)
     * 
     * @returns {GlobalOptions}
     */
    setCopies: function(number) {
        this.options['copies'] = number;
        return this;
    },

    /**
     * Change the dpi explicitly (this has no
     * effect on X11 based systems)
     * 
     * @returns {null|string}
     */
    getDpi: function() {
        return this.options['dpi'];
    },

    /**
     * Change the dpi explicitly (this has no
     * effect on X11 based systems)
     * 
     * @returns {GlobalOptions}
     */
    setDpi: function(dpi) {
        this.options['dpi'] = dpi;
        return this;
    },

    /**
     * Display more extensive help, detailing
     * less common command switches
     * 
     * @returns {boolean}
     */
    isExtendedHelpEnabled: function() {
        return this.options['extended-help'] === '';
    },

    /**
     * Display more extensive help, detailing
     * less common command switches
     * 
     * @returns {GlobalOptions}
     */
    enableExtendedHelp: function() {
        this.options['extended-help'] = '';
        return this;
    },

    /**
     * Display more extensive help, detailing
     * less common command switches
     * 
     * @returns {GlobalOptions}
     */
    disableExtendedHelp: function() {
        this.options['extended-help'] = null;
        return this;
    },

    /**
     * PDF will be generated in grayscale
     * 
     * @returns {boolean}
     */
    isGrayscaleEnabled: function() {
        return this.options['grayscale'] === '';
    },

    /**
     * PDF will be generated in grayscale
     * 
     * @returns {GlobalOptions}
     */
    enableGrayscale: function() {
        this.options['grayscale'] = '';
        return this;
    },

    /**
     * PDF will be generated in grayscale
     * 
     * @returns {GlobalOptions}
     */
    disableGrayscale: function() {
        this.options['grayscale'] = null;
        return this;
    },

    /**
     * Display help
     * 
     * @returns {boolean}
     */
    isHelpEnabled: function() {
        return this.options['help'] === '';
    },

    /**
     * Display help
     * 
     * @returns {GlobalOptions}
     */
    enableHelp: function() {
        this.options['help'] = '';
        return this;
    },

    /**
     * Display help
     * 
     * @returns {GlobalOptions}
     */
    disableHelp: function() {
        this.options['help'] = null;
        return this;
    },

    /**
     * Output program html help
     * 
     * @returns {boolean}
     */
    isHtmldocEnabled: function() {
        return this.options['htmldoc'] === '';
    },

    /**
     * Output program html help
     * 
     * @returns {GlobalOptions}
     */
    enableHtmldoc: function() {
        this.options['htmldoc'] = '';
        return this;
    },

    /**
     * Output program html help
     * 
     * @returns {GlobalOptions}
     */
    disableHtmldoc: function() {
        this.options['htmldoc'] = null;
        return this;
    },

    /**
     * When embedding images scale them down to
     * this dpi (default 600)
     * 
     * @returns {null|string}
     */
    getImageDpi: function() {
        return this.options['image-dpi'];
    },

    /**
     * When embedding images scale them down to
     * this dpi (default 600)
     * 
     * @returns {GlobalOptions}
     */
    setImageDpi: function(integer) {
        this.options['image-dpi'] = integer;
        return this;
    },

    /**
     * When jpeg compressing images use this
     * quality (default 94)
     * 
     * @returns {null|string}
     */
    getImageQuality: function() {
        return this.options['image-quality'];
    },

    /**
     * When jpeg compressing images use this
     * quality (default 94)
     * 
     * @returns {GlobalOptions}
     */
    setImageQuality: function(integer) {
        this.options['image-quality'] = integer;
        return this;
    },

    /**
     * Output license information and exit
     * 
     * @returns {boolean}
     */
    isLicenseEnabled: function() {
        return this.options['license'] === '';
    },

    /**
     * Output license information and exit
     * 
     * @returns {GlobalOptions}
     */
    enableLicense: function() {
        this.options['license'] = '';
        return this;
    },

    /**
     * Output license information and exit
     * 
     * @returns {GlobalOptions}
     */
    disableLicense: function() {
        this.options['license'] = null;
        return this;
    },

    /**
     * Generates lower quality pdf/ps. Useful to
     * shrink the result document space
     * 
     * @returns {boolean}
     */
    isLowqualityEnabled: function() {
        return this.options['lowquality'] === '';
    },

    /**
     * Generates lower quality pdf/ps. Useful to
     * shrink the result document space
     * 
     * @returns {GlobalOptions}
     */
    enableLowquality: function() {
        this.options['lowquality'] = '';
        return this;
    },

    /**
     * Generates lower quality pdf/ps. Useful to
     * shrink the result document space
     * 
     * @returns {GlobalOptions}
     */
    disableLowquality: function() {
        this.options['lowquality'] = null;
        return this;
    },

    /**
     * Output program man page
     * 
     * @returns {boolean}
     */
    isManpageEnabled: function() {
        return this.options['manpage'] === '';
    },

    /**
     * Output program man page
     * 
     * @returns {GlobalOptions}
     */
    enableManpage: function() {
        this.options['manpage'] = '';
        return this;
    },

    /**
     * Output program man page
     * 
     * @returns {GlobalOptions}
     */
    disableManpage: function() {
        this.options['manpage'] = null;
        return this;
    },

    /**
     * Set the page bottom margin
     * 
     * @returns {null|string}
     */
    getMarginBottom: function() {
        return this.options['margin-bottom'];
    },

    /**
     * Set the page bottom margin
     * 
     * @returns {GlobalOptions}
     */
    setMarginBottom: function(unitreal) {
        this.options['margin-bottom'] = unitreal;
        return this;
    },

    /**
     * Set the page left margin (default 10mm)
     * 
     * @returns {null|string}
     */
    getMarginLeft: function() {
        return this.options['margin-left'];
    },

    /**
     * Set the page left margin (default 10mm)
     * 
     * @returns {GlobalOptions}
     */
    setMarginLeft: function(unitreal) {
        this.options['margin-left'] = unitreal;
        return this;
    },

    /**
     * Set the page right margin (default 10mm)
     * 
     * @returns {null|string}
     */
    getMarginRight: function() {
        return this.options['margin-right'];
    },

    /**
     * Set the page right margin (default 10mm)
     * 
     * @returns {GlobalOptions}
     */
    setMarginRight: function(unitreal) {
        this.options['margin-right'] = unitreal;
        return this;
    },

    /**
     * Set the page top margin
     * 
     * @returns {null|string}
     */
    getMarginTop: function() {
        return this.options['margin-top'];
    },

    /**
     * Set the page top margin
     * 
     * @returns {GlobalOptions}
     */
    setMarginTop: function(unitreal) {
        this.options['margin-top'] = unitreal;
        return this;
    },

    /**
     * Set orientation to Landscape or Portrait
     * (default Portrait)
     * 
     * @returns {null|string}
     */
    getOrientation: function() {
        return this.options['orientation'];
    },

    /**
     * Set orientation to Landscape or Portrait
     * (default Portrait)
     * 
     * @returns {GlobalOptions}
     */
    setOrientation: function(orientation) {
        this.options['orientation'] = orientation;
        return this;
    },

    /**
     * Page height
     * 
     * @returns {null|string}
     */
    getPageHeight: function() {
        return this.options['page-height'];
    },

    /**
     * Page height
     * 
     * @returns {GlobalOptions}
     */
    setPageHeight: function(unitreal) {
        this.options['page-height'] = unitreal;
        return this;
    },

    /**
     * Set paper size to: A4, Letter, etc.
     * (default A4)
     * 
     * @returns {null|string}
     */
    getPageSize: function() {
        return this.options['page-size'];
    },

    /**
     * Set paper size to: A4, Letter, etc.
     * (default A4)
     * 
     * @returns {GlobalOptions}
     */
    setPageSize: function(size) {
        this.options['page-size'] = size;
        return this;
    },

    /**
     * Page width
     * 
     * @returns {null|string}
     */
    getPageWidth: function() {
        return this.options['page-width'];
    },

    /**
     * Page width
     * 
     * @returns {GlobalOptions}
     */
    setPageWidth: function(unitreal) {
        this.options['page-width'] = unitreal;
        return this;
    },

    /**
     * Do not use lossless compression on pdf
     * objects
     * 
     * @returns {boolean}
     */
    isNoPdfCompressionEnabled: function() {
        return this.options['no-pdf-compression'] === '';
    },

    /**
     * Do not use lossless compression on pdf
     * objects
     * 
     * @returns {GlobalOptions}
     */
    enableNoPdfCompression: function() {
        this.options['no-pdf-compression'] = '';
        return this;
    },

    /**
     * Do not use lossless compression on pdf
     * objects
     * 
     * @returns {GlobalOptions}
     */
    disableNoPdfCompression: function() {
        this.options['no-pdf-compression'] = null;
        return this;
    },

    /**
     * Be less verbose
     * 
     * @returns {boolean}
     */
    isQuietEnabled: function() {
        return this.options['quiet'] === '';
    },

    /**
     * Be less verbose
     * 
     * @returns {GlobalOptions}
     */
    enableQuiet: function() {
        this.options['quiet'] = '';
        return this;
    },

    /**
     * Be less verbose
     * 
     * @returns {GlobalOptions}
     */
    disableQuiet: function() {
        this.options['quiet'] = null;
        return this;
    },

    /**
     * Read command line arguments from stdin
     * 
     * @returns {boolean}
     */
    isReadArgsFromStdinEnabled: function() {
        return this.options['read-args-from-stdin'] === '';
    },

    /**
     * Read command line arguments from stdin
     * 
     * @returns {GlobalOptions}
     */
    enableReadArgsFromStdin: function() {
        this.options['read-args-from-stdin'] = '';
        return this;
    },

    /**
     * Read command line arguments from stdin
     * 
     * @returns {GlobalOptions}
     */
    disableReadArgsFromStdin: function() {
        this.options['read-args-from-stdin'] = null;
        return this;
    },

    /**
     * Output program readme
     * 
     * @returns {boolean}
     */
    isReadmeEnabled: function() {
        return this.options['readme'] === '';
    },

    /**
     * Output program readme
     * 
     * @returns {GlobalOptions}
     */
    enableReadme: function() {
        this.options['readme'] = '';
        return this;
    },

    /**
     * Output program readme
     * 
     * @returns {GlobalOptions}
     */
    disableReadme: function() {
        this.options['readme'] = null;
        return this;
    },

    /**
     * The title of the generated pdf file (The
     * title of the first document is used if not
     * specified)
     * 
     * @returns {null|string}
     */
    getTitle: function() {
        return this.options['title'];
    },

    /**
     * The title of the generated pdf file (The
     * title of the first document is used if not
     * specified)
     * 
     * @returns {GlobalOptions}
     */
    setTitle: function(text) {
        this.options['title'] = text;
        return this;
    },

    /**
     * Output version information and exit
     * 
     * @returns {boolean}
     */
    isVersionEnabled: function() {
        return this.options['version'] === '';
    },

    /**
     * Output version information and exit
     * 
     * @returns {GlobalOptions}
     */
    enableVersion: function() {
        this.options['version'] = '';
        return this;
    },

    /**
     * Output version information and exit
     * 
     * @returns {GlobalOptions}
     */
    disableVersion: function() {
        this.options['version'] = null;
        return this;
    }

};

module.exports = GlobalOptions;