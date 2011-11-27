define([
    "uml/generators/statements/_Describer",
    "uml/generators/statements/DescriberSupport"
],
function (_Describer, DescriberSupport) {

    return dojo.declare([_Describer, DescriberSupport], {

        canDescribe: function (obj) {
            return obj.getType() === "UML Class Item";
        },

        describe: function (clazz) {
            var result = [];

            if (clazz.getAttributes().length > 0) {
                result.push(this._createSentence("Class attributes", {
                    "class": this._pluckName(clazz),
                    "attributes": this._pluckNames(clazz.getAttributes())
                }));
            }
            if (clazz.getOperations().length > 0) {
                result.push(this._createSentence("Class operations", {
                    "class": this._pluckName(clazz),
                    "operations": this._pluckNames(clazz.getOperations(), "verb")
                }));
            }

            return result;
        }

    });
});