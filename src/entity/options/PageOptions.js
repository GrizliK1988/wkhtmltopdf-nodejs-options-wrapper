/**
 * This file is generated from wkhtmltopdf documentation at 13:52:12 of 19.07.2015
 */
var extend = require('extend');
/* istanbul ignore next */
function PageOptions(data) {
    this.options = {};
    this.options['allow'] = [];
    this.options['background'] = null;
    this.options['no-background'] = null;
    this.options['cache-dir'] = null;
    this.options['checkbox-checked-svg'] = null;
    this.options['checkbox-svg'] = null;
    this.options['cookie'] = [];
    this.options['custom-header'] = [];
    this.options['custom-header-propagation'] = null;
    this.options['no-custom-header-propagation'] = null;
    this.options['debug-javascript'] = null;
    this.options['no-debug-javascript'] = null;
    this.options['default-header'] = null;
    this.options['encoding'] = null;
    this.options['disable-external-links'] = null;
    this.options['enable-external-links'] = null;
    this.options['disable-forms'] = null;
    this.options['enable-forms'] = null;
    this.options['images'] = null;
    this.options['no-images'] = null;
    this.options['disable-internal-links'] = null;
    this.options['enable-internal-links'] = null;
    this.options['disable-javascript'] = null;
    this.options['enable-javascript'] = null;
    this.options['javascript-delay'] = null;
    this.options['load-error-handling'] = null;
    this.options['load-media-error-handling'] = null;
    this.options['disable-local-file-access'] = null;
    this.options['enable-local-file-access'] = null;
    this.options['minimum-font-size'] = null;
    this.options['exclude-from-outline'] = null;
    this.options['include-in-outline'] = null;
    this.options['page-offset'] = null;
    this.options['password'] = null;
    this.options['disable-plugins'] = null;
    this.options['enable-plugins'] = null;
    this.options['post'] = [];
    this.options['post-file'] = [];
    this.options['print-media-type'] = null;
    this.options['no-print-media-type'] = null;
    this.options['proxy'] = null;
    this.options['radiobutton-checked-svg'] = null;
    this.options['radiobutton-svg'] = null;
    this.options['run-script'] = [];
    this.options['disable-smart-shrinking'] = null;
    this.options['enable-smart-shrinking'] = null;
    this.options['stop-slow-scripts'] = null;
    this.options['no-stop-slow-scripts'] = null;
    this.options['disable-toc-back-links'] = null;
    this.options['enable-toc-back-links'] = null;
    this.options['user-style-sheet'] = null;
    this.options['username'] = null;
    this.options['viewport-size'] = null;
    this.options['window-status'] = null;
    this.options['zoom'] = null;
    this.options = extend(this.options, data || {})
}

/* istanbul ignore next */
PageOptions.prototype = {
    /**
     * Allow the file or files from the specified
     * folder to be loaded (repeatable)
     * 
     * @returns {null|Array}
     */
    getAllow: function() {
        return this.options['allow'];
    },

    /**
     * Allow the file or files from the specified
     * folder to be loaded (repeatable)
     * 
     * @returns {PageOptions}
     */
    addAllow: function(path) {
        this.options['allow'].push(path);
        return this;
    },

    /**
     * Allow the file or files from the specified
     * folder to be loaded (repeatable)
     * 
     * @returns {PageOptions}
     */
    clearAllow: function() {
        this.options['allow'] = [];
        return this;
    },

    /**
     * Do print background (default)
     * 
     * @returns {boolean}
     */
    isBackgroundEnabled: function() {
        return this.options['background'] === '';
    },

    /**
     * Do print background (default)
     * 
     * @returns {PageOptions}
     */
    enableBackground: function() {
        this.options['background'] = '';
        return this;
    },

    /**
     * Do print background (default)
     * 
     * @returns {PageOptions}
     */
    disableBackground: function() {
        this.options['background'] = null;
        return this;
    },

    /**
     * Do not print background
     * 
     * @returns {boolean}
     */
    isNoBackgroundEnabled: function() {
        return this.options['no-background'] === '';
    },

    /**
     * Do not print background
     * 
     * @returns {PageOptions}
     */
    enableNoBackground: function() {
        this.options['no-background'] = '';
        return this;
    },

    /**
     * Do not print background
     * 
     * @returns {PageOptions}
     */
    disableNoBackground: function() {
        this.options['no-background'] = null;
        return this;
    },

    /**
     * Web cache directory
     * 
     * @returns {null|string}
     */
    getCacheDir: function() {
        return this.options['cache-dir'];
    },

    /**
     * Web cache directory
     * 
     * @returns {PageOptions}
     */
    setCacheDir: function(path) {
        this.options['cache-dir'] = path;
        return this;
    },

    /**
     * Use this SVG file when rendering checked
     * checkboxes
     * 
     * @returns {null|string}
     */
    getCheckboxCheckedSvg: function() {
        return this.options['checkbox-checked-svg'];
    },

    /**
     * Use this SVG file when rendering checked
     * checkboxes
     * 
     * @returns {PageOptions}
     */
    setCheckboxCheckedSvg: function(path) {
        this.options['checkbox-checked-svg'] = path;
        return this;
    },

    /**
     * Use this SVG file when rendering unchecked
     * checkboxes
     * 
     * @returns {null|string}
     */
    getCheckboxSvg: function() {
        return this.options['checkbox-svg'];
    },

    /**
     * Use this SVG file when rendering unchecked
     * checkboxes
     * 
     * @returns {PageOptions}
     */
    setCheckboxSvg: function(path) {
        this.options['checkbox-svg'] = path;
        return this;
    },

    /**
     * Set an additional cookie (repeatable),
     * value should be url encoded.
     * 
     * @returns {null|Array}
     */
    getCookie: function() {
        return this.options['cookie'];
    },

    /**
     * Set an additional cookie (repeatable),
     * value should be url encoded.
     * 
     * @returns {PageOptions}
     */
    addCookie: function(name, value) {
        this.options['cookie'].push([name, value]);
        return this;
    },

    /**
     * Set an additional cookie (repeatable),
     * value should be url encoded.
     * 
     * @returns {PageOptions}
     */
    clearCookie: function() {
        this.options['cookie'] = [];
        return this;
    },

    /**
     * Set an additional HTTP header (repeatable)
     * 
     * @returns {null|Array}
     */
    getCustomHeader: function() {
        return this.options['custom-header'];
    },

    /**
     * Set an additional HTTP header (repeatable)
     * 
     * @returns {PageOptions}
     */
    addCustomHeader: function(name, value) {
        this.options['custom-header'].push([name, value]);
        return this;
    },

    /**
     * Set an additional HTTP header (repeatable)
     * 
     * @returns {PageOptions}
     */
    clearCustomHeader: function() {
        this.options['custom-header'] = [];
        return this;
    },

    /**
     * Add HTTP headers specified by
     * --custom-header for each resource request.
     * 
     * @returns {boolean}
     */
    isCustomHeaderPropagationEnabled: function() {
        return this.options['custom-header-propagation'] === '';
    },

    /**
     * Add HTTP headers specified by
     * --custom-header for each resource request.
     * 
     * @returns {PageOptions}
     */
    enableCustomHeaderPropagation: function() {
        this.options['custom-header-propagation'] = '';
        return this;
    },

    /**
     * Add HTTP headers specified by
     * --custom-header for each resource request.
     * 
     * @returns {PageOptions}
     */
    disableCustomHeaderPropagation: function() {
        this.options['custom-header-propagation'] = null;
        return this;
    },

    /**
     * Do not add HTTP headers specified by
     * --custom-header for each resource request.
     * 
     * @returns {boolean}
     */
    isNoCustomHeaderPropagationEnabled: function() {
        return this.options['no-custom-header-propagation'] === '';
    },

    /**
     * Do not add HTTP headers specified by
     * --custom-header for each resource request.
     * 
     * @returns {PageOptions}
     */
    enableNoCustomHeaderPropagation: function() {
        this.options['no-custom-header-propagation'] = '';
        return this;
    },

    /**
     * Do not add HTTP headers specified by
     * --custom-header for each resource request.
     * 
     * @returns {PageOptions}
     */
    disableNoCustomHeaderPropagation: function() {
        this.options['no-custom-header-propagation'] = null;
        return this;
    },

    /**
     * Show javascript debugging output
     * 
     * @returns {boolean}
     */
    isDebugJavascriptEnabled: function() {
        return this.options['debug-javascript'] === '';
    },

    /**
     * Show javascript debugging output
     * 
     * @returns {PageOptions}
     */
    enableDebugJavascript: function() {
        this.options['debug-javascript'] = '';
        return this;
    },

    /**
     * Show javascript debugging output
     * 
     * @returns {PageOptions}
     */
    disableDebugJavascript: function() {
        this.options['debug-javascript'] = null;
        return this;
    },

    /**
     * Do not show javascript debugging output
     * (default)
     * 
     * @returns {boolean}
     */
    isNoDebugJavascriptEnabled: function() {
        return this.options['no-debug-javascript'] === '';
    },

    /**
     * Do not show javascript debugging output
     * (default)
     * 
     * @returns {PageOptions}
     */
    enableNoDebugJavascript: function() {
        this.options['no-debug-javascript'] = '';
        return this;
    },

    /**
     * Do not show javascript debugging output
     * (default)
     * 
     * @returns {PageOptions}
     */
    disableNoDebugJavascript: function() {
        this.options['no-debug-javascript'] = null;
        return this;
    },

    /**
     * Add a default header, with the name of the
     * page to the left, and the page number to
     * the right, this is short for:
     * --header-left='[webpage]'
     * --header-right='[page]/[toPage]' --top 2cm
     * --header-line
     * 
     * @returns {boolean}
     */
    isDefaultHeaderEnabled: function() {
        return this.options['default-header'] === '';
    },

    /**
     * Add a default header, with the name of the
     * page to the left, and the page number to
     * the right, this is short for:
     * --header-left='[webpage]'
     * --header-right='[page]/[toPage]' --top 2cm
     * --header-line
     * 
     * @returns {PageOptions}
     */
    enableDefaultHeader: function() {
        this.options['default-header'] = '';
        return this;
    },

    /**
     * Add a default header, with the name of the
     * page to the left, and the page number to
     * the right, this is short for:
     * --header-left='[webpage]'
     * --header-right='[page]/[toPage]' --top 2cm
     * --header-line
     * 
     * @returns {PageOptions}
     */
    disableDefaultHeader: function() {
        this.options['default-header'] = null;
        return this;
    },

    /**
     * Set the default text encoding, for input
     * 
     * @returns {null|string}
     */
    getEncoding: function() {
        return this.options['encoding'];
    },

    /**
     * Set the default text encoding, for input
     * 
     * @returns {PageOptions}
     */
    setEncoding: function(encoding) {
        this.options['encoding'] = encoding;
        return this;
    },

    /**
     * Do not make links to remote web pages
     * 
     * @returns {boolean}
     */
    isDisableExternalLinksEnabled: function() {
        return this.options['disable-external-links'] === '';
    },

    /**
     * Do not make links to remote web pages
     * 
     * @returns {PageOptions}
     */
    enableDisableExternalLinks: function() {
        this.options['disable-external-links'] = '';
        return this;
    },

    /**
     * Do not make links to remote web pages
     * 
     * @returns {PageOptions}
     */
    disableDisableExternalLinks: function() {
        this.options['disable-external-links'] = null;
        return this;
    },

    /**
     * Make links to remote web pages (default)
     * 
     * @returns {boolean}
     */
    isEnableExternalLinksEnabled: function() {
        return this.options['enable-external-links'] === '';
    },

    /**
     * Make links to remote web pages (default)
     * 
     * @returns {PageOptions}
     */
    enableEnableExternalLinks: function() {
        this.options['enable-external-links'] = '';
        return this;
    },

    /**
     * Make links to remote web pages (default)
     * 
     * @returns {PageOptions}
     */
    disableEnableExternalLinks: function() {
        this.options['enable-external-links'] = null;
        return this;
    },

    /**
     * Do not turn HTML form fields into pdf form
     * fields (default)
     * 
     * @returns {boolean}
     */
    isDisableFormsEnabled: function() {
        return this.options['disable-forms'] === '';
    },

    /**
     * Do not turn HTML form fields into pdf form
     * fields (default)
     * 
     * @returns {PageOptions}
     */
    enableDisableForms: function() {
        this.options['disable-forms'] = '';
        return this;
    },

    /**
     * Do not turn HTML form fields into pdf form
     * fields (default)
     * 
     * @returns {PageOptions}
     */
    disableDisableForms: function() {
        this.options['disable-forms'] = null;
        return this;
    },

    /**
     * Turn HTML form fields into pdf form fields
     * 
     * @returns {boolean}
     */
    isEnableFormsEnabled: function() {
        return this.options['enable-forms'] === '';
    },

    /**
     * Turn HTML form fields into pdf form fields
     * 
     * @returns {PageOptions}
     */
    enableEnableForms: function() {
        this.options['enable-forms'] = '';
        return this;
    },

    /**
     * Turn HTML form fields into pdf form fields
     * 
     * @returns {PageOptions}
     */
    disableEnableForms: function() {
        this.options['enable-forms'] = null;
        return this;
    },

    /**
     * Do load or print images (default)
     * 
     * @returns {boolean}
     */
    isImagesEnabled: function() {
        return this.options['images'] === '';
    },

    /**
     * Do load or print images (default)
     * 
     * @returns {PageOptions}
     */
    enableImages: function() {
        this.options['images'] = '';
        return this;
    },

    /**
     * Do load or print images (default)
     * 
     * @returns {PageOptions}
     */
    disableImages: function() {
        this.options['images'] = null;
        return this;
    },

    /**
     * Do not load or print images
     * 
     * @returns {boolean}
     */
    isNoImagesEnabled: function() {
        return this.options['no-images'] === '';
    },

    /**
     * Do not load or print images
     * 
     * @returns {PageOptions}
     */
    enableNoImages: function() {
        this.options['no-images'] = '';
        return this;
    },

    /**
     * Do not load or print images
     * 
     * @returns {PageOptions}
     */
    disableNoImages: function() {
        this.options['no-images'] = null;
        return this;
    },

    /**
     * Do not make local links
     * 
     * @returns {boolean}
     */
    isDisableInternalLinksEnabled: function() {
        return this.options['disable-internal-links'] === '';
    },

    /**
     * Do not make local links
     * 
     * @returns {PageOptions}
     */
    enableDisableInternalLinks: function() {
        this.options['disable-internal-links'] = '';
        return this;
    },

    /**
     * Do not make local links
     * 
     * @returns {PageOptions}
     */
    disableDisableInternalLinks: function() {
        this.options['disable-internal-links'] = null;
        return this;
    },

    /**
     * Make local links (default)
     * 
     * @returns {boolean}
     */
    isEnableInternalLinksEnabled: function() {
        return this.options['enable-internal-links'] === '';
    },

    /**
     * Make local links (default)
     * 
     * @returns {PageOptions}
     */
    enableEnableInternalLinks: function() {
        this.options['enable-internal-links'] = '';
        return this;
    },

    /**
     * Make local links (default)
     * 
     * @returns {PageOptions}
     */
    disableEnableInternalLinks: function() {
        this.options['enable-internal-links'] = null;
        return this;
    },

    /**
     * Do not allow web pages to run javascript
     * 
     * @returns {boolean}
     */
    isDisableJavascriptEnabled: function() {
        return this.options['disable-javascript'] === '';
    },

    /**
     * Do not allow web pages to run javascript
     * 
     * @returns {PageOptions}
     */
    enableDisableJavascript: function() {
        this.options['disable-javascript'] = '';
        return this;
    },

    /**
     * Do not allow web pages to run javascript
     * 
     * @returns {PageOptions}
     */
    disableDisableJavascript: function() {
        this.options['disable-javascript'] = null;
        return this;
    },

    /**
     * Do allow web pages to run javascript
     * (default)
     * 
     * @returns {boolean}
     */
    isEnableJavascriptEnabled: function() {
        return this.options['enable-javascript'] === '';
    },

    /**
     * Do allow web pages to run javascript
     * (default)
     * 
     * @returns {PageOptions}
     */
    enableEnableJavascript: function() {
        this.options['enable-javascript'] = '';
        return this;
    },

    /**
     * Do allow web pages to run javascript
     * (default)
     * 
     * @returns {PageOptions}
     */
    disableEnableJavascript: function() {
        this.options['enable-javascript'] = null;
        return this;
    },

    /**
     * Wait some milliseconds for javascript
     * finish (default 200)
     * 
     * @returns {null|string}
     */
    getJavascriptDelay: function() {
        return this.options['javascript-delay'];
    },

    /**
     * Wait some milliseconds for javascript
     * finish (default 200)
     * 
     * @returns {PageOptions}
     */
    setJavascriptDelay: function(msec) {
        this.options['javascript-delay'] = msec;
        return this;
    },

    /**
     * Specify how to handle pages that fail to
     * load: abort, ignore or skip (default
     * abort)
     * 
     * @returns {null|string}
     */
    getLoadErrorHandling: function() {
        return this.options['load-error-handling'];
    },

    /**
     * Specify how to handle pages that fail to
     * load: abort, ignore or skip (default
     * abort)
     * 
     * @returns {PageOptions}
     */
    setLoadErrorHandling: function(handler) {
        this.options['load-error-handling'] = handler;
        return this;
    },

    /**
     * Specify how to handle media files
     * that fail to load: abort, ignore or skip
     * (default ignore)
     * 
     * @returns {null|string}
     */
    getLoadMediaErrorHandling: function() {
        return this.options['load-media-error-handling'];
    },

    /**
     * Specify how to handle media files
     * that fail to load: abort, ignore or skip
     * (default ignore)
     * 
     * @returns {PageOptions}
     */
    setLoadMediaErrorHandling: function(handler) {
        this.options['load-media-error-handling'] = handler;
        return this;
    },

    /**
     * Do not allowed conversion of a local file
     * to read in other local files, unless
     * explicitly allowed with --allow
     * 
     * @returns {boolean}
     */
    isDisableLocalFileAccessEnabled: function() {
        return this.options['disable-local-file-access'] === '';
    },

    /**
     * Do not allowed conversion of a local file
     * to read in other local files, unless
     * explicitly allowed with --allow
     * 
     * @returns {PageOptions}
     */
    enableDisableLocalFileAccess: function() {
        this.options['disable-local-file-access'] = '';
        return this;
    },

    /**
     * Do not allowed conversion of a local file
     * to read in other local files, unless
     * explicitly allowed with --allow
     * 
     * @returns {PageOptions}
     */
    disableDisableLocalFileAccess: function() {
        this.options['disable-local-file-access'] = null;
        return this;
    },

    /**
     * Allowed conversion of a local file to read
     * in other local files. (default)
     * 
     * @returns {boolean}
     */
    isEnableLocalFileAccessEnabled: function() {
        return this.options['enable-local-file-access'] === '';
    },

    /**
     * Allowed conversion of a local file to read
     * in other local files. (default)
     * 
     * @returns {PageOptions}
     */
    enableEnableLocalFileAccess: function() {
        this.options['enable-local-file-access'] = '';
        return this;
    },

    /**
     * Allowed conversion of a local file to read
     * in other local files. (default)
     * 
     * @returns {PageOptions}
     */
    disableEnableLocalFileAccess: function() {
        this.options['enable-local-file-access'] = null;
        return this;
    },

    /**
     * Minimum font size
     * 
     * @returns {null|string}
     */
    getMinimumFontSize: function() {
        return this.options['minimum-font-size'];
    },

    /**
     * Minimum font size
     * 
     * @returns {PageOptions}
     */
    setMinimumFontSize: function(int) {
        this.options['minimum-font-size'] = int;
        return this;
    },

    /**
     * Do not include the page in the table of
     * contents and outlines
     * 
     * @returns {boolean}
     */
    isExcludeFromOutlineEnabled: function() {
        return this.options['exclude-from-outline'] === '';
    },

    /**
     * Do not include the page in the table of
     * contents and outlines
     * 
     * @returns {PageOptions}
     */
    enableExcludeFromOutline: function() {
        this.options['exclude-from-outline'] = '';
        return this;
    },

    /**
     * Do not include the page in the table of
     * contents and outlines
     * 
     * @returns {PageOptions}
     */
    disableExcludeFromOutline: function() {
        this.options['exclude-from-outline'] = null;
        return this;
    },

    /**
     * Include the page in the table of contents
     * and outlines (default)
     * 
     * @returns {boolean}
     */
    isIncludeInOutlineEnabled: function() {
        return this.options['include-in-outline'] === '';
    },

    /**
     * Include the page in the table of contents
     * and outlines (default)
     * 
     * @returns {PageOptions}
     */
    enableIncludeInOutline: function() {
        this.options['include-in-outline'] = '';
        return this;
    },

    /**
     * Include the page in the table of contents
     * and outlines (default)
     * 
     * @returns {PageOptions}
     */
    disableIncludeInOutline: function() {
        this.options['include-in-outline'] = null;
        return this;
    },

    /**
     * Set the starting page number (default 0)
     * 
     * @returns {null|string}
     */
    getPageOffset: function() {
        return this.options['page-offset'];
    },

    /**
     * Set the starting page number (default 0)
     * 
     * @returns {PageOptions}
     */
    setPageOffset: function(offset) {
        this.options['page-offset'] = offset;
        return this;
    },

    /**
     * HTTP Authentication password
     * 
     * @returns {null|string}
     */
    getPassword: function() {
        return this.options['password'];
    },

    /**
     * HTTP Authentication password
     * 
     * @returns {PageOptions}
     */
    setPassword: function(password) {
        this.options['password'] = password;
        return this;
    },

    /**
     * Disable installed plugins (default)
     * 
     * @returns {boolean}
     */
    isDisablePluginsEnabled: function() {
        return this.options['disable-plugins'] === '';
    },

    /**
     * Disable installed plugins (default)
     * 
     * @returns {PageOptions}
     */
    enableDisablePlugins: function() {
        this.options['disable-plugins'] = '';
        return this;
    },

    /**
     * Disable installed plugins (default)
     * 
     * @returns {PageOptions}
     */
    disableDisablePlugins: function() {
        this.options['disable-plugins'] = null;
        return this;
    },

    /**
     * Enable installed plugins (plugins will
     * likely not work)
     * 
     * @returns {boolean}
     */
    isEnablePluginsEnabled: function() {
        return this.options['enable-plugins'] === '';
    },

    /**
     * Enable installed plugins (plugins will
     * likely not work)
     * 
     * @returns {PageOptions}
     */
    enableEnablePlugins: function() {
        this.options['enable-plugins'] = '';
        return this;
    },

    /**
     * Enable installed plugins (plugins will
     * likely not work)
     * 
     * @returns {PageOptions}
     */
    disableEnablePlugins: function() {
        this.options['enable-plugins'] = null;
        return this;
    },

    /**
     * Add an additional post field (repeatable)
     * 
     * @returns {null|Array}
     */
    getPost: function() {
        return this.options['post'];
    },

    /**
     * Add an additional post field (repeatable)
     * 
     * @returns {PageOptions}
     */
    addPost: function(name, value) {
        this.options['post'].push([name, value]);
        return this;
    },

    /**
     * Add an additional post field (repeatable)
     * 
     * @returns {PageOptions}
     */
    clearPost: function() {
        this.options['post'] = [];
        return this;
    },

    /**
     * Post an additional file (repeatable)
     * 
     * @returns {null|Array}
     */
    getPostFile: function() {
        return this.options['post-file'];
    },

    /**
     * Post an additional file (repeatable)
     * 
     * @returns {PageOptions}
     */
    addPostFile: function(name, path) {
        this.options['post-file'].push([name, path]);
        return this;
    },

    /**
     * Post an additional file (repeatable)
     * 
     * @returns {PageOptions}
     */
    clearPostFile: function() {
        this.options['post-file'] = [];
        return this;
    },

    /**
     * Use print media-type instead of screen
     * 
     * @returns {boolean}
     */
    isPrintMediaTypeEnabled: function() {
        return this.options['print-media-type'] === '';
    },

    /**
     * Use print media-type instead of screen
     * 
     * @returns {PageOptions}
     */
    enablePrintMediaType: function() {
        this.options['print-media-type'] = '';
        return this;
    },

    /**
     * Use print media-type instead of screen
     * 
     * @returns {PageOptions}
     */
    disablePrintMediaType: function() {
        this.options['print-media-type'] = null;
        return this;
    },

    /**
     * Do not use print media-type instead of
     * screen (default)
     * 
     * @returns {boolean}
     */
    isNoPrintMediaTypeEnabled: function() {
        return this.options['no-print-media-type'] === '';
    },

    /**
     * Do not use print media-type instead of
     * screen (default)
     * 
     * @returns {PageOptions}
     */
    enableNoPrintMediaType: function() {
        this.options['no-print-media-type'] = '';
        return this;
    },

    /**
     * Do not use print media-type instead of
     * screen (default)
     * 
     * @returns {PageOptions}
     */
    disableNoPrintMediaType: function() {
        this.options['no-print-media-type'] = null;
        return this;
    },

    /**
     * Use a proxy
     * 
     * @returns {null|string}
     */
    getProxy: function() {
        return this.options['proxy'];
    },

    /**
     * Use a proxy
     * 
     * @returns {PageOptions}
     */
    setProxy: function(proxy) {
        this.options['proxy'] = proxy;
        return this;
    },

    /**
     * Use this SVG file when rendering checked
     * radiobuttons
     * 
     * @returns {null|string}
     */
    getRadiobuttonCheckedSvg: function() {
        return this.options['radiobutton-checked-svg'];
    },

    /**
     * Use this SVG file when rendering checked
     * radiobuttons
     * 
     * @returns {PageOptions}
     */
    setRadiobuttonCheckedSvg: function(path) {
        this.options['radiobutton-checked-svg'] = path;
        return this;
    },

    /**
     * Use this SVG file when rendering unchecked
     * radiobuttons
     * 
     * @returns {null|string}
     */
    getRadiobuttonSvg: function() {
        return this.options['radiobutton-svg'];
    },

    /**
     * Use this SVG file when rendering unchecked
     * radiobuttons
     * 
     * @returns {PageOptions}
     */
    setRadiobuttonSvg: function(path) {
        this.options['radiobutton-svg'] = path;
        return this;
    },

    /**
     * Run this additional javascript after the
     * page is done loading (repeatable)
     * 
     * @returns {null|Array}
     */
    getRunScript: function() {
        return this.options['run-script'];
    },

    /**
     * Run this additional javascript after the
     * page is done loading (repeatable)
     * 
     * @returns {PageOptions}
     */
    addRunScript: function(js) {
        this.options['run-script'].push(js);
        return this;
    },

    /**
     * Run this additional javascript after the
     * page is done loading (repeatable)
     * 
     * @returns {PageOptions}
     */
    clearRunScript: function() {
        this.options['run-script'] = [];
        return this;
    },

    /**
     * Disable the intelligent shrinking strategy
     * used by WebKit that makes the pixel/dpi
     * ratio none constant
     * 
     * @returns {boolean}
     */
    isDisableSmartShrinkingEnabled: function() {
        return this.options['disable-smart-shrinking'] === '';
    },

    /**
     * Disable the intelligent shrinking strategy
     * used by WebKit that makes the pixel/dpi
     * ratio none constant
     * 
     * @returns {PageOptions}
     */
    enableDisableSmartShrinking: function() {
        this.options['disable-smart-shrinking'] = '';
        return this;
    },

    /**
     * Disable the intelligent shrinking strategy
     * used by WebKit that makes the pixel/dpi
     * ratio none constant
     * 
     * @returns {PageOptions}
     */
    disableDisableSmartShrinking: function() {
        this.options['disable-smart-shrinking'] = null;
        return this;
    },

    /**
     * Enable the intelligent shrinking strategy
     * used by WebKit that makes the pixel/dpi
     * ratio none constant (default)
     * 
     * @returns {boolean}
     */
    isEnableSmartShrinkingEnabled: function() {
        return this.options['enable-smart-shrinking'] === '';
    },

    /**
     * Enable the intelligent shrinking strategy
     * used by WebKit that makes the pixel/dpi
     * ratio none constant (default)
     * 
     * @returns {PageOptions}
     */
    enableEnableSmartShrinking: function() {
        this.options['enable-smart-shrinking'] = '';
        return this;
    },

    /**
     * Enable the intelligent shrinking strategy
     * used by WebKit that makes the pixel/dpi
     * ratio none constant (default)
     * 
     * @returns {PageOptions}
     */
    disableEnableSmartShrinking: function() {
        this.options['enable-smart-shrinking'] = null;
        return this;
    },

    /**
     * Stop slow running javascripts (default)
     * 
     * @returns {boolean}
     */
    isStopSlowScriptsEnabled: function() {
        return this.options['stop-slow-scripts'] === '';
    },

    /**
     * Stop slow running javascripts (default)
     * 
     * @returns {PageOptions}
     */
    enableStopSlowScripts: function() {
        this.options['stop-slow-scripts'] = '';
        return this;
    },

    /**
     * Stop slow running javascripts (default)
     * 
     * @returns {PageOptions}
     */
    disableStopSlowScripts: function() {
        this.options['stop-slow-scripts'] = null;
        return this;
    },

    /**
     * Do not Stop slow running javascripts
     * 
     * @returns {boolean}
     */
    isNoStopSlowScriptsEnabled: function() {
        return this.options['no-stop-slow-scripts'] === '';
    },

    /**
     * Do not Stop slow running javascripts
     * 
     * @returns {PageOptions}
     */
    enableNoStopSlowScripts: function() {
        this.options['no-stop-slow-scripts'] = '';
        return this;
    },

    /**
     * Do not Stop slow running javascripts
     * 
     * @returns {PageOptions}
     */
    disableNoStopSlowScripts: function() {
        this.options['no-stop-slow-scripts'] = null;
        return this;
    },

    /**
     * Do not link from section header to toc
     * (default)
     * 
     * @returns {boolean}
     */
    isDisableTocBackLinksEnabled: function() {
        return this.options['disable-toc-back-links'] === '';
    },

    /**
     * Do not link from section header to toc
     * (default)
     * 
     * @returns {PageOptions}
     */
    enableDisableTocBackLinks: function() {
        this.options['disable-toc-back-links'] = '';
        return this;
    },

    /**
     * Do not link from section header to toc
     * (default)
     * 
     * @returns {PageOptions}
     */
    disableDisableTocBackLinks: function() {
        this.options['disable-toc-back-links'] = null;
        return this;
    },

    /**
     * Link from section header to toc
     * 
     * @returns {boolean}
     */
    isEnableTocBackLinksEnabled: function() {
        return this.options['enable-toc-back-links'] === '';
    },

    /**
     * Link from section header to toc
     * 
     * @returns {PageOptions}
     */
    enableEnableTocBackLinks: function() {
        this.options['enable-toc-back-links'] = '';
        return this;
    },

    /**
     * Link from section header to toc
     * 
     * @returns {PageOptions}
     */
    disableEnableTocBackLinks: function() {
        this.options['enable-toc-back-links'] = null;
        return this;
    },

    /**
     * Specify a user style sheet, to load with
     * every page
     * 
     * @returns {null|string}
     */
    getUserStyleSheet: function() {
        return this.options['user-style-sheet'];
    },

    /**
     * Specify a user style sheet, to load with
     * every page
     * 
     * @returns {PageOptions}
     */
    setUserStyleSheet: function(url) {
        this.options['user-style-sheet'] = url;
        return this;
    },

    /**
     * HTTP Authentication username
     * 
     * @returns {null|string}
     */
    getUsername: function() {
        return this.options['username'];
    },

    /**
     * HTTP Authentication username
     * 
     * @returns {PageOptions}
     */
    setUsername: function(username) {
        this.options['username'] = username;
        return this;
    },

    /**
     * Set viewport size if you have custom
     * scrollbars or css attribute overflow to
     * emulate window size
     * 
     * @returns {null|string}
     */
    getViewportSize: function() {
        return this.options['viewport-size'];
    },

    /**
     * Set viewport size if you have custom
     * scrollbars or css attribute overflow to
     * emulate window size
     * 
     * @returns {PageOptions}
     */
    setViewportSize: function(viewportSize) {
        this.options['viewport-size'] = viewportSize;
        return this;
    },

    /**
     * Wait until window.status is equal to this
     * string before rendering page
     * 
     * @returns {null|string}
     */
    getWindowStatus: function() {
        return this.options['window-status'];
    },

    /**
     * Wait until window.status is equal to this
     * string before rendering page
     * 
     * @returns {PageOptions}
     */
    setWindowStatus: function(windowstatus) {
        this.options['window-status'] = windowstatus;
        return this;
    },

    /**
     * Use this zoom factor (default 1)
     * 
     * @returns {null|string}
     */
    getZoom: function() {
        return this.options['zoom'];
    },

    /**
     * Use this zoom factor (default 1)
     * 
     * @returns {PageOptions}
     */
    setZoom: function(float) {
        this.options['zoom'] = float;
        return this;
    }

};

module.exports = PageOptions;