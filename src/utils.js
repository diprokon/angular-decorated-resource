export function bind(origFn, context) {
    let fn = function () {
        return origFn.apply(context, arguments);
    };
    fn.__origFn = origFn;
    return fn;
}

export function unbind(fn) {
    return fn.__origFn || fn;
}

export function appendTransform(defaults, transform) {
    // We can't guarantee that the default transformation is an array
    defaults = defaults ? defaults : [];
    defaults = angular.isArray(defaults) ? defaults : [defaults];

    // Append the new transformation to the defaults
    return defaults.concat(transform);
}

export function each(obj, callback) {
    Object.keys(obj)
        .forEach(key => callback(obj[key], key));
}
