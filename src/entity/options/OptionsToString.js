/**
 * Base object for other *Options objects
 *
 * Created by Dmitry Grachikov on 26.06.15.
 */

module.exports = function(optionsObject) {
    var result = [],
        options = optionsObject.options;
    for (var optionName in options) {
        if (options.hasOwnProperty(optionName) && options[optionName] !== null) {
            var optionCommand = '';
            switch (Array.isArray(options[optionName])) {
                case false:
                    optionCommand = '--' + optionName + ' ' + options[optionName];
                    break;
                case true:
                    var optionStringList = options[optionName].map(function(option) {
                        return '--' + optionName + ' ' + (Array.isArray(option) ? option.join(' ') : option);
                    });
                    optionCommand = optionStringList.join(' ');
                    break;
            }
            if (optionCommand.trim()) {
                result.push(optionCommand.trim());
            }
        }
    }
    return result.join(' ');
};
