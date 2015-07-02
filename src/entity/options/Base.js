/**
 * Base object for other *Options objects
 *
 * Created by Dmitry Grachikov on 26.06.15.
 */

module.exports = {
    toString: function() {
        var result = [];
        for (var optionName in this.options) {
            if (this.options.hasOwnProperty(optionName) && this.options[optionName] !== null) {
                var optionCommand = '';
                switch (Array.isArray(this.options[optionName])) {
                    case false:
                        optionCommand = '--' + optionName + ' ' + this.options[optionName];
                        break;
                    case true:
                        var options = this.options[optionName].map(function(option) {
                            return '--' + optionName + ' ' + (Array.isArray(option) ? option.join(' ') : option);
                        });
                        optionCommand = options.join(' ');
                        break;
                }
                if (optionCommand.trim()) {
                    result.push(optionCommand.trim());
                }
            }
        }
        return result.join(' ');
    }
};