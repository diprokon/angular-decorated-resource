export function bind(origFn, context) {
    if (origFn.__origFn) {
        origFn = unbind(origFn);
    }

    let fn = function () {
        return origFn.apply(context, arguments);
    };
    fn.__origFn = origFn;
    return fn;
}

export function unbind(fn) {
    return fn.__origFn || fn;
}

export function concat(defaults = [], items) {
    // We can't guarantee that the default is an array
    defaults = angular.isArray(defaults) ? defaults : [defaults];

    // Append the new elements to the defaults
    return defaults.concat(items);
}

export function each(obj, callback) {
    Object.keys(obj)
        .forEach(key => callback(obj[key], key));
}
