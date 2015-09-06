module.exports = function(optionsObject) {
    var result = [],
        options = optionsObject.options;
    for (var optionName in options) {
        if (options.hasOwnProperty(optionName) && options[optionName] !== null) {
            var optionCommand = [];
            switch (Array.isArray(options[optionName])) {
                case false:
                    optionCommand.push('--' + optionName);
                    optionCommand.push(options[optionName]);
                    break;
                case true:
                    options[optionName].forEach(function(option) {
                        optionCommand.push('--' + optionName);
                        optionCommand.push(Array.isArray(option) ? option.join(' ') : option);
                    });
                    break;
            }
            if (optionCommand.length > 0) {
                result = result.concat(optionCommand);
            }
        }
    }
    return result;
};
