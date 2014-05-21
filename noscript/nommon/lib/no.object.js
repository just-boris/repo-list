var no = no || require('./no.base.js');

//  ---------------------------------------------------------------------------------------------------------------  //

no.object = {};

//  ---------------------------------------------------------------------------------------------------------------  //

no.object.map = function(object, callback) {
    var r = {};

    for (var key in object) {
        var value = callback( object[key], key );

        if (value !== undefined) {
            r[key] = value;
        }
    }

    return r;
};

//  ---------------------------------------------------------------------------------------------------------------  //
