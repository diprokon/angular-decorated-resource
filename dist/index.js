!function (e, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports["angular-decorated-resource"] = r() : e["angular-decorated-resource"] = r()
}(this, function () {
    return function (e) {
        function r(t) {
            if (n[t])return n[t].exports;
            var o = n[t] = {i: t, l: !1, exports: {}};
            return e[t].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }

        var n = {};
        return r.m = e, r.c = n, r.i = function (e) {
            return e
        }, r.d = function (e, n, t) {
            r.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: t})
        }, r.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(n, "a", n), n
        }, r.o = function (e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }, r.p = "", r(r.s = 3)
    }([function (e, r, n) {
        "use strict";
        function t(e, r) {
            var n = function () {
                return e.apply(r, arguments)
            };
            return n.__origFn = e, n
        }

        function o(e) {
            return e.__origFn || e
        }

        function u(e, r) {
            return e = e || [], e = angular.isArray(e) ? e : [e], e.concat(r)
        }

        function c(e, r) {
            Object.keys(e).forEach(function (n) {
                return r(e[n], n)
            })
        }

        Object.defineProperty(r, "__esModule", {value: !0}), r.bind = t, r.unbind = o, r.appendTransform = u, r.each = c
    }, function (e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {value: !0});
        var t = function () {
            function e(e, r) {
                var n = [], t = !0, o = !1, u = void 0;
                try {
                    for (var c, a = e[Symbol.iterator](); !(t = (c = a.next()).done) && (n.push(c.value), !r || n.length !== r); t = !0);
                } catch (e) {
                    o = !0, u = e
                } finally {
                    try {
                        !t && a.return && a.return()
                    } finally {
                        if (o)throw u
                    }
                }
                return n
            }

            return function (r, n) {
                if (Array.isArray(r))return r;
                if (Symbol.iterator in Object(r))return e(r, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        r.default = function (e) {
            function r(e, r) {
                "ngInject";
                function n(e, n, c, a) {
                    var s = this, i = void 0, f = void 0;
                    c = angular.merge({}, u, c), f = [e, n, c, a], this.paramsDecorators.forEach(function (e) {
                        return f = e(f)
                    });
                    var d = f, p = t(d, 4);
                    return e = p[0], n = p[1], c = p[2], a = p[3], (0, o.each)(c, function (e, r) {
                        return s.decorators.forEach(function (n) {
                            return n(e, r)
                        })
                    }), i = r(e, n, c, a), (0, o.each)(this.resourceMethods, function (e, r) {
                        return i[r] = e.bind(i)
                    }), i
                }

                var u = {
                    get: {method: "GET"},
                    save: {method: "POST"},
                    update: {method: "PUT"},
                    query: {method: "GET", isArray: !0},
                    remove: {method: "DELETE"},
                    delete: {method: "DELETE"}
                };
                return e(n, {resource: n, decorators: [], resourceMethods: [], paramsDecorators: []}), n.decorate()
            }

            r.$inject = ["resourceExtend", "$resource"], e.factory("dResource", r)
        };
        var o = n(0)
    }, function (e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {value: !0}), r.default = function (e) {
            function r(e) {
                "ngInject";
                function r(e, r) {
                    angular.merge(e, {decorate: n.bind(r), interceptAction: o, transformAction: u})
                }

                function n() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    e = angular.isArray(e) ? e : [e];
                    var u = {
                        paramsDecorators: this.paramsDecorators.concat(n),
                        decorators: this.decorators.concat(e),
                        resourceMethods: angular.merge({}, this.resourceMethods, o)
                    }, c = (0, t.bind)((0, t.unbind)(this.resource), u);
                    return u.resource = c, r(c, u), c
                }

                function o(r, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (r.interceptor || (r.interceptor = {}), n.response) {
                        var o = r.interceptor.response || e.resolve;
                        r.interceptor.response = t ? function () {
                            return e.when(o.apply(null, arguments)).then(n.response)
                        } : function () {
                            return e.when(n.response.apply(null, arguments)).then(o)
                        }
                    }
                    if (n.responseError) {
                        var u = r.interceptor.responseError || e.reject;
                        r.interceptor.responseError = t ? function () {
                            return e.when(u.apply(null, arguments)).catch(n.responseError)
                        } : function () {
                            return e.when(n.responseError.apply(null, arguments)).catch(u)
                        }
                    }
                }

                function u(e, r) {
                    r.request && (e.transformRequest = (0, t.appendTransform)(e.transformRequest, r.request)), r.response && (e.transformResponse = (0, t.appendTransform)(e.transformResponse, r.response))
                }

                return r
            }

            r.$inject = ["$q"], e.factory("resourceExtend", r)
        };
        var t = n(0)
    }, function (e, r, n) {
        "use strict";
        var t = angular.module("dResource.utils", []);
        n(2)(t);
        var o = angular.module("dResource", ["ngResource", "dResource.utils"]);
        n(1)(o), e.exports = o.name
    }])
});
