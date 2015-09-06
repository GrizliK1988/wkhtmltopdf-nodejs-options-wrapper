var OptionsToList = require('./OptionsToList');

module.exports = function(optionsObject) {
    return OptionsToList(optionsObject).join(' ');
};
