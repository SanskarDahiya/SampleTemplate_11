"use strict";
var _slicedToArray = function (r, t) {
  if (Array.isArray(r)) return r;
  if (("function" == typeof Symbol ? Symbol.iterator : "@@iterator") in Object(r))
    return (function (r, t) {
      var e = [],
        i = !0,
        n = !1,
        o = void 0;
      try {
        for (
          var a, f = r["function" == typeof Symbol ? Symbol.iterator : "@@iterator"]();
          !(i = (a = f.next()).done);
          i = !0
        ) {
          e.push(a.value);
          if (t && e.length === t) break;
        }
      } catch (r) {
        n = !0;
        o = r;
      } finally {
        try {
          !i && f.return && f.return();
        } finally {
          if (n) throw o;
        }
      }
      return e;
    })(r, t);
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
module.exports = {
  WrapperInstance: function (r) {
    var n = {};
    "string" == typeof r
      ? (r = (r = (r = r.replace(/\n/g, "")).trim()).split(";")).forEach(function (r) {
          if ((r = (r || "").trim())) {
            var r = r.split(":"),
              r = _slicedToArray(r, 2),
              t = r[0],
              r = r[1];
            t = (t || "").trim();
            r = (r || "").trim();
            if (t && r) {
              for (var t = t.split("-"), e = 1; e < t.length; e++)
                if (t[e] && "string" == typeof t[e]) {
                  var i = t[e].split("");
                  i[0] = i[0].toUpperCase();
                  t[e] = i.join("");
                }
              t = t.join("");
              n[t] = r;
            }
          }
        })
      : (n = r);
    return n;
  }
};
