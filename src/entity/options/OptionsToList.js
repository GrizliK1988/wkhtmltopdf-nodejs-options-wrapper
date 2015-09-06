function quoteStringWithSpaces(input) {
    if (input.toString().indexOf(' ') !== -1) {
        return '"' + input + '"';
    } else {
        return input;
    }
}

module.exports = function(optionsObject) {
    var result = [],
        options = optionsObject.options;
    for (var optionName in options) {
        if (options.hasOwnProperty(optionName) && options[optionName] !== null) {
            var optionCommand = '';
            switch (Array.isArray(options[optionName])) {
                case false:
                    optionCommand = '--' + optionName + ' ' + quoteStringWithSpaces(options[optionName]);
                    break;
                case true:
                    var optionStringList = options[optionName].map(function(option) {
                        return '--' + optionName + ' ' + (Array.isArray(option) ? option.join(' ') : quoteStringWithSpaces(option));
                    });
                    optionCommand = optionStringList.join(' ');
                    break;
            }
            if (optionCommand.trim()) {
                result.push(optionCommand.trim());
            }
        }
    }
    return result;
};
