/**
 * @type {CreateRequest|function}
 */
module.exports.CreateRequest = require('./src/entity/CreateRequest');

/**
 * @type {Page|function}
 */
module.exports.Page = require('./src/entity/request_parts/Page');

/**
 * @type {GlobalOptions|function}
 */
module.exports.GlobalOptions = require('./src/entity/options/GlobalOptions');

/**
 * @type {HeadersAndFooterOptions|function}
 */
module.exports.HeadersAndFooterOptions = require('./src/entity/options/HeadersAndFooterOptions');

/**
 * @type {OutlineOptions|function}
 */
module.exports.OutlineOptions = require('./src/entity/options/OutlineOptions');

/**
 * @type {PageOptions|function}
 */
module.exports.PageOptions = require('./src/entity/options/PageOptions');

/**
 * @type {TOCOptions|function}
 */
module.exports.TOCOptions = require('./src/entity/options/TOCOptions');

/**
 * @type {OptionsToString|function}
 */
module.exports.OptionsToString = require('./src/entity/options/OptionsToString');
