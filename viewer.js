/*! For license information please see viewer.min.js.LICENSE.txt */
( () => {
    "use strict";
    var t, e;
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, e) {
        window.setTimeout(t, 1e3 / 60)
    }
    ,
    jQuery.support.cors = !0,
    $.ajaxTransport ? ($.ajaxSetup({
        flatOptions: {
            renderer: !0
        }
    }),
    $.ajaxTransport("+binary", (function(t, e, i) {
        if (window.FormData && (t.dataType && "binary" == t.dataType || t.data && (window.ArrayBuffer && t.data instanceof ArrayBuffer || window.Blob && t.data instanceof Blob)))
            return {
                send: function(e, i) {
                    var s = new XMLHttpRequest
                      , r = t.url
                      , n = t.type
                      , a = t.responseType || "blob"
                      , o = t.data || null;
                    t.renderer && s.addEventListener("progress", (function(e) {
                        e.lengthComputable && (t.renderer.downloads[this.responseURL] ? t.renderer.downloads[this.responseURL].loaded = e.loaded : t.renderer.downloads[this.responseURL] = {
                            loaded: e.loaded,
                            total: e.total
                        },
                        t.renderer.updateProgress())
                    }
                    )),
                    s.addEventListener("load", (function() {
                        t.renderer && (delete t.renderer.downloads[this.responseURL],
                        t.renderer.updateProgress());
                        var e = {};
                        e[t.dataType] = s.response,
                        i(s.status, s.statusText, e, s.getAllResponseHeaders())
                    }
                    )),
                    s.open(n, r, !0),
                    s.responseType = a,
                    s.send(o)
                },
                abort: function() {
                    i.abort()
                }
            }
    }
    ))) : (t = $.httpData,
    $.httpData = function(e, i, s) {
        return "binary" == i ? e.response : t(e, i, s)
    }
    ,
    $.ajaxSetup({
        beforeSend: function(t, e) {
            "binary" == e.dataType && (t.responseType = e.responseType || "arraybuffer",
            t.addEventListener("progress", (function(t) {
                e.renderer && t.lengthComputable && (e.renderer.downloads[this.responseURL] ? e.renderer.downloads[this.responseURL].loaded = t.loaded : e.renderer.downloads[this.responseURL] = {
                    loaded: t.loaded,
                    total: t.total
                },
                e.renderer.updateProgress())
            }
            ), !1),
            t.addEventListener("load", (function() {
                e.renderer && (delete e.renderer.downloads[this.responseURL],
                e.renderer.updateProgress())
            }
            ), !1))
        }
    })),
    Math.randomInt = Math.randomInt || function(t, e) {
        return Math.floor(Math.random() * (e - t)) + t
    }
    ,
    "function" != typeof Object.create && (Object.create = (e = function() {}
    ,
    function(t) {
        if (arguments.length > 1)
            throw Error("Second argument not supported");
        if ("object" != typeof t)
            throw TypeError("Argument must be an object");
        e.prototype = t;
        var i = new e;
        return e.prototype = null,
        i
    }
    )),
    window.console = window.console || {
        log: function() {},
        error: function() {},
        warn: function() {}
    };
    let i = Float32Array;
    function s(t, e, s) {
        const r = new i(3);
        return t && (r[0] = t),
        e && (r[1] = e),
        s && (r[2] = s),
        r
    }
    function r(t, e, s) {
        return (s = s || new i(3))[0] = t[0] + e[0],
        s[1] = t[1] + e[1],
        s[2] = t[2] + e[2],
        s
    }
    function n(t, e, s) {
        return (s = s || new i(3))[0] = t[0] * e[0],
        s[1] = t[1] * e[1],
        s[2] = t[2] * e[2],
        s
    }
    let a = Float32Array;
    function o(t) {
        return (t = t || new a(16))[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = 1,
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[10] = 1,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        t
    }
    function h(t, e) {
        e = e || new a(16);
        const i = t[0]
          , s = t[1]
          , r = t[2]
          , n = t[3]
          , o = t[4]
          , h = t[5]
          , l = t[6]
          , u = t[7]
          , c = t[8]
          , d = t[9]
          , f = t[10]
          , g = t[11]
          , p = t[12]
          , _ = t[13]
          , b = t[14]
          , m = t[15]
          , x = f * m
          , v = b * g
          , T = l * m
          , w = b * u
          , y = l * g
          , A = f * u
          , E = r * m
          , C = b * n
          , M = r * g
          , S = f * n
          , F = r * u
          , I = l * n
          , D = c * _
          , k = p * d
          , R = o * _
          , U = p * h
          , O = o * d
          , P = c * h
          , B = i * _
          , z = p * s
          , N = i * d
          , L = c * s
          , G = i * h
          , j = o * s
          , H = x * h + w * d + y * _ - (v * h + T * d + A * _)
          , q = v * s + E * d + S * _ - (x * s + C * d + M * _)
          , V = T * s + C * h + F * _ - (w * s + E * h + I * _)
          , X = A * s + M * h + I * d - (y * s + S * h + F * d)
          , W = 1 / (i * H + o * q + c * V + p * X);
        return e[0] = W * H,
        e[1] = W * q,
        e[2] = W * V,
        e[3] = W * X,
        e[4] = W * (v * o + T * c + A * p - (x * o + w * c + y * p)),
        e[5] = W * (x * i + C * c + M * p - (v * i + E * c + S * p)),
        e[6] = W * (w * i + E * o + I * p - (T * i + C * o + F * p)),
        e[7] = W * (y * i + S * o + F * c - (A * i + M * o + I * c)),
        e[8] = W * (D * u + U * g + O * m - (k * u + R * g + P * m)),
        e[9] = W * (k * n + B * g + L * m - (D * n + z * g + N * m)),
        e[10] = W * (R * n + z * u + G * m - (U * n + B * u + j * m)),
        e[11] = W * (P * n + N * u + j * g - (O * n + L * u + G * g)),
        e[12] = W * (R * f + P * b + k * l - (O * b + D * l + U * f)),
        e[13] = W * (N * b + D * r + z * f - (B * f + L * b + k * r)),
        e[14] = W * (B * l + j * b + U * r - (G * b + R * r + z * l)),
        e[15] = W * (G * f + O * r + L * l - (N * l + j * f + P * r)),
        e
    }
    function l(t, e, i) {
        i = i || s();
        const r = e[0]
          , n = e[1]
          , a = e[2]
          , o = r * t[3] + n * t[7] + a * t[11] + t[15];
        return i[0] = (r * t[0] + n * t[4] + a * t[8] + t[12]) / o,
        i[1] = (r * t[1] + n * t[5] + a * t[9] + t[13]) / o,
        i[2] = (r * t[2] + n * t[6] + a * t[10] + t[14]) / o,
        i
    }
    function u(t, e, i) {
        i = i || s();
        const r = e[0]
          , n = e[1]
          , a = e[2];
        return i[0] = r * t[0] + n * t[4] + a * t[8],
        i[1] = r * t[1] + n * t[5] + a * t[9],
        i[2] = r * t[2] + n * t[6] + a * t[10],
        i
    }
    const c = 5120
      , d = 5121
      , f = 5122
      , g = 5123
      , p = 5124
      , _ = 5125
      , b = 5126
      , m = {};
    {
        const t = m;
        t[c] = Int8Array,
        t[d] = Uint8Array,
        t[f] = Int16Array,
        t[g] = Uint16Array,
        t[p] = Int32Array,
        t[_] = Uint32Array,
        t[b] = Float32Array,
        t[32819] = Uint16Array,
        t[32820] = Uint16Array,
        t[33635] = Uint16Array,
        t[5131] = Uint16Array,
        t[33640] = Uint32Array,
        t[35899] = Uint32Array,
        t[35902] = Uint32Array,
        t[36269] = Uint32Array,
        t[34042] = Uint32Array
    }
    function x(t) {
        if (t instanceof Int8Array)
            return c;
        if (t instanceof Uint8Array)
            return d;
        if (t instanceof Uint8ClampedArray)
            return d;
        if (t instanceof Int16Array)
            return f;
        if (t instanceof Uint16Array)
            return g;
        if (t instanceof Int32Array)
            return p;
        if (t instanceof Uint32Array)
            return _;
        if (t instanceof Float32Array)
            return b;
        throw new Error("unsupported typed array type")
    }
    function v(t) {
        if (t === Int8Array)
            return c;
        if (t === Uint8Array)
            return d;
        if (t === Uint8ClampedArray)
            return d;
        if (t === Int16Array)
            return f;
        if (t === Uint16Array)
            return g;
        if (t === Int32Array)
            return p;
        if (t === Uint32Array)
            return _;
        if (t === Float32Array)
            return b;
        throw new Error("unsupported typed array type")
    }
    function T(t) {
        const e = m[t];
        if (!e)
            throw new Error("unknown gl type");
        return e
    }
    const w = "undefined" != typeof SharedArrayBuffer ? function(t) {
        return t && t.buffer && (t.buffer instanceof ArrayBuffer || t.buffer instanceof SharedArrayBuffer)
    }
    : function(t) {
        return t && t.buffer && t.buffer instanceof ArrayBuffer
    }
    ;
    function y(...t) {
        console.error(...t)
    }
    const A = new Map;
    function E(t, e) {
        if (!t || "object" != typeof t)
            return !1;
        let i = A.get(e);
        i || (i = new WeakMap,
        A.set(e, i));
        let s = i.get(t);
        if (void 0 === s) {
            const r = Object.prototype.toString.call(t);
            s = r.substring(8, r.length - 1) === e,
            i.set(t, s)
        }
        return s
    }
    function C(t, e) {
        return "undefined" != typeof WebGLTexture && E(e, "WebGLTexture")
    }
    const M = 35044
      , S = 34962
      , F = 34963
      , I = 34660
      , D = 5120
      , k = 5121
      , R = 5122
      , U = 5123
      , O = 5124
      , P = 5125
      , B = 5126
      , z = {
        attribPrefix: ""
    };
    function N(t, e, i, s, r) {
        t.bindBuffer(e, i),
        t.bufferData(e, s, r || M)
    }
    function L(t, e, i, s) {
        if (r = e,
        "undefined" != typeof WebGLBuffer && E(r, "WebGLBuffer"))
            return e;
        var r;
        i = i || S;
        const n = t.createBuffer();
        return N(t, i, n, e, s),
        n
    }
    function G(t) {
        return "indices" === t
    }
    function j(t) {
        return t.length ? t : t.data
    }
    const H = /coord|texture/i
      , q = /color|colour/i;
    function V(t, e, i) {
        return t.numComponents || t.size || function(t, e) {
            let i;
            if (i = H.test(t) ? 2 : q.test(t) ? 4 : 3,
            e % i > 0)
                throw new Error(`Can not guess numComponents for attribute '${t}'. Tried ${i} but ${e} values is not evenly divisible by ${i}. You should specify it.`);
            return i
        }(e, i || j(t).length)
    }
    function X(t, e) {
        if (w(t))
            return t;
        if (w(t.data))
            return t.data;
        Array.isArray(t) && (t = {
            data: t
        });
        let i = t.type ? W(t.type) : void 0;
        return i || (i = G(e) ? Uint16Array : Float32Array),
        new i(t.data)
    }
    function W(t) {
        return "number" == typeof t ? T(t) : t || Float32Array
    }
    function Y(t, e) {
        return {
            buffer: e.buffer,
            numValues: 24,
            type: (i = e.type,
            "number" == typeof i ? i : i ? v(i) : B),
            arrayType: W(e.type)
        };
        var i
    }
    function Z(t, e) {
        const i = e.data || e
          , s = W(e.type)
          , r = i * s.BYTES_PER_ELEMENT
          , n = t.createBuffer();
        return t.bindBuffer(S, n),
        t.bufferData(S, r, e.drawType || M),
        {
            buffer: n,
            numValues: i,
            type: v(s),
            arrayType: s
        }
    }
    function J(t, e, i) {
        const s = X(e, i);
        return {
            arrayType: s.constructor,
            buffer: L(t, s, void 0, e.drawType),
            type: x(s),
            numValues: 0
        }
    }
    function K(t, e) {
        const i = {};
        return Object.keys(e).forEach((function(s) {
            if (!G(s)) {
                const n = e[s]
                  , a = n.attrib || n.name || n.attribName || z.attribPrefix + s;
                if (n.value) {
                    if (!Array.isArray(n.value) && !w(n.value))
                        throw new Error("array.value is not array or typedarray");
                    i[a] = {
                        value: n.value
                    }
                } else {
                    let e;
                    e = n.buffer && n.buffer instanceof WebGLBuffer ? Y : "number" == typeof n || "number" == typeof n.data ? Z : J;
                    const {buffer: o, type: h, numValues: l, arrayType: u} = e(t, n, s)
                      , c = void 0 !== n.normalize ? n.normalize : (r = u) === Int8Array || r === Uint8Array
                      , d = V(n, s, l);
                    i[a] = {
                        buffer: o,
                        numComponents: d,
                        type: h,
                        normalize: c,
                        stride: n.stride || 0,
                        offset: n.offset || 0,
                        divisor: void 0 === n.divisor ? void 0 : n.divisor,
                        drawType: n.drawType
                    }
                }
            }
            var r
        }
        )),
        t.bindBuffer(S, null),
        i
    }
    const Q = ["position", "positions", "a_position"];
    function tt(t, e) {
        let i, s;
        for (s = 0; s < Q.length && (i = Q[s],
        !(i in e)) && (i = z.attribPrefix + i,
        !(i in e)); ++s)
            ;
        s === Q.length && (i = Object.keys(e)[0]);
        const r = e[i];
        if (!r.buffer)
            return 1;
        t.bindBuffer(S, r.buffer);
        const n = t.getBufferParameter(S, I);
        t.bindBuffer(S, null);
        var a;
        const o = n / ((a = r.type) === D || a === k ? 1 : a === R || a === U ? 2 : a === O || a === P || a === B ? 4 : 0)
          , h = r.numComponents || r.size
          , l = o / h;
        if (l % 1 != 0)
            throw new Error(`numComponents ${h} not correct for length ${length}`);
        return l
    }
    function et(t, e, i) {
        const s = K(t, e)
          , r = Object.assign({}, i || {});
        r.attribs = Object.assign({}, i ? i.attribs : {}, s);
        const n = e.indices;
        if (n) {
            const e = X(n, "indices");
            r.indices = L(t, e, F),
            r.numElements = e.length,
            r.elementType = x(e)
        } else
            r.numElements || (r.numElements = tt(t, r.attribs));
        return r
    }
    function it(t, e, i) {
        const s = "indices" === i ? F : S;
        return L(t, X(e, i), s)
    }
    function st(t, e) {
        const i = {};
        return Object.keys(e).forEach((function(s) {
            i[s] = it(t, e[s], s)
        }
        )),
        e.indices ? (i.numElements = e.indices.length,
        i.elementType = x(X(e.indices))) : i.numElements = function(t) {
            let e, i;
            for (i = 0; i < Q.length && (e = Q[i],
            !(e in t)); ++i)
                ;
            i === Q.length && (e = Object.keys(t)[0]);
            const s = t[e]
              , r = j(s).length;
            if (void 0 === r)
                return 1;
            const n = V(s, e)
              , a = r / n;
            if (r % n > 0)
                throw new Error(`numComponents ${n} not correct for length ${r}`);
            return a
        }(e),
        i
    }
    function rt(t, e) {
        let i = 0;
        return t.push = function() {
            for (let e = 0; e < arguments.length; ++e) {
                const s = arguments[e];
                if (s instanceof Array || w(s))
                    for (let e = 0; e < s.length; ++e)
                        t[i++] = s[e];
                else
                    t[i++] = s
            }
        }
        ,
        t.reset = function(t) {
            i = t || 0
        }
        ,
        t.numComponents = e,
        Object.defineProperty(t, "numElements", {
            get: function() {
                return this.length / this.numComponents | 0
            }
        }),
        t
    }
    function nt(t, e, i) {
        return rt(new (i || Float32Array)(t * e), t)
    }
    function at(t, e, i) {
        const s = t.length
          , r = new Float32Array(3);
        for (let n = 0; n < s; n += 3)
            i(e, [t[n], t[n + 1], t[n + 2]], r),
            t[n] = r[0],
            t[n + 1] = r[1],
            t[n + 2] = r[2]
    }
    function ot(t, e, i) {
        i = i || s();
        const r = e[0]
          , n = e[1]
          , a = e[2];
        return i[0] = r * t[0] + n * t[1] + a * t[2],
        i[1] = r * t[4] + n * t[5] + a * t[6],
        i[2] = r * t[8] + n * t[9] + a * t[10],
        i
    }
    function ht(t, e) {
        return at(t, e, u),
        t
    }
    function lt(t, e) {
        return at(t, h(e), ot),
        t
    }
    function ut(t, e) {
        return at(t, e, l),
        t
    }
    function ct(t, e) {
        return Object.keys(t).forEach((function(i) {
            const s = t[i];
            i.indexOf("pos") >= 0 ? ut(s, e) : i.indexOf("tan") >= 0 || i.indexOf("binorm") >= 0 ? ht(s, e) : i.indexOf("norm") >= 0 && lt(s, e)
        }
        )),
        t
    }
    function dt(t, e, i) {
        return t = t || 2,
        {
            position: {
                numComponents: 2,
                data: [(e = e || 0) + -1 * (t *= .5), (i = i || 0) + -1 * t, e + 1 * t, i + -1 * t, e + -1 * t, i + 1 * t, e + 1 * t, i + 1 * t]
            },
            normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
            texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
            indices: [0, 1, 2, 2, 1, 3]
        }
    }
    function ft(t, e, i, s, r) {
        t = t || 1,
        e = e || 1,
        i = i || 1,
        s = s || 1,
        r = r || o();
        const n = (i + 1) * (s + 1)
          , a = nt(3, n)
          , h = nt(3, n)
          , l = nt(2, n);
        for (let r = 0; r <= s; r++)
            for (let n = 0; n <= i; n++) {
                const o = n / i
                  , u = r / s;
                a.push(t * o - .5 * t, 0, e * u - .5 * e),
                h.push(0, 1, 0),
                l.push(o, u)
            }
        const u = i + 1
          , c = nt(3, i * s * 2, Uint16Array);
        for (let t = 0; t < s; t++)
            for (let e = 0; e < i; e++)
                c.push((t + 0) * u + e, (t + 1) * u + e, (t + 0) * u + e + 1),
                c.push((t + 1) * u + e, (t + 1) * u + e + 1, (t + 0) * u + e + 1);
        return ct({
            position: a,
            normal: h,
            texcoord: l,
            indices: c
        }, r)
    }
    function gt(t, e, i, s, r, n, a) {
        if (e <= 0 || i <= 0)
            throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
        s = s || 0,
        n = n || 0;
        const o = (r = r || Math.PI) - s
          , h = (a = a || 2 * Math.PI) - n
          , l = (e + 1) * (i + 1)
          , u = nt(3, l)
          , c = nt(3, l)
          , d = nt(2, l);
        for (let r = 0; r <= i; r++)
            for (let a = 0; a <= e; a++) {
                const l = a / e
                  , f = r / i
                  , g = h * l + n
                  , p = o * f + s
                  , _ = Math.sin(g)
                  , b = Math.cos(g)
                  , m = Math.sin(p)
                  , x = b * m
                  , v = Math.cos(p)
                  , T = _ * m;
                u.push(t * x, t * v, t * T),
                c.push(x, v, T),
                d.push(1 - l, f)
            }
        const f = e + 1
          , g = nt(3, e * i * 2, Uint16Array);
        for (let t = 0; t < e; t++)
            for (let e = 0; e < i; e++)
                g.push((e + 0) * f + t, (e + 0) * f + t + 1, (e + 1) * f + t),
                g.push((e + 1) * f + t, (e + 0) * f + t + 1, (e + 1) * f + t + 1);
        return {
            position: u,
            normal: c,
            texcoord: d,
            indices: g
        }
    }
    const pt = [[3, 7, 5, 1], [6, 2, 0, 4], [6, 7, 3, 2], [0, 1, 5, 4], [7, 6, 4, 5], [2, 3, 1, 0]];
    function _t(t) {
        const e = (t = t || 1) / 2
          , i = [[-e, -e, -e], [+e, -e, -e], [-e, +e, -e], [+e, +e, -e], [-e, -e, +e], [+e, -e, +e], [-e, +e, +e], [+e, +e, +e]]
          , s = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]
          , r = [[1, 0], [0, 0], [0, 1], [1, 1]]
          , n = nt(3, 24)
          , a = nt(3, 24)
          , o = nt(2, 24)
          , h = nt(3, 12, Uint16Array);
        for (let t = 0; t < 6; ++t) {
            const e = pt[t];
            for (let h = 0; h < 4; ++h) {
                const l = i[e[h]]
                  , u = s[t]
                  , c = r[h];
                n.push(l),
                a.push(u),
                o.push(c)
            }
            const l = 4 * t;
            h.push(l + 0, l + 1, l + 2),
            h.push(l + 0, l + 2, l + 3)
        }
        return {
            position: n,
            normal: a,
            texcoord: o,
            indices: h
        }
    }
    function bt(t, e, i, s, r, n, a) {
        if (s < 3)
            throw new Error("radialSubdivisions must be 3 or greater");
        if (r < 1)
            throw new Error("verticalSubdivisions must be 1 or greater");
        const o = void 0 === n || n
          , h = void 0 === a || a
          , l = (o ? 2 : 0) + (h ? 2 : 0)
          , u = (s + 1) * (r + 1 + l)
          , c = nt(3, u)
          , d = nt(3, u)
          , f = nt(2, u)
          , g = nt(3, s * (r + l / 2) * 2, Uint16Array)
          , p = s + 1
          , _ = Math.atan2(t - e, i)
          , b = Math.cos(_)
          , m = Math.sin(_)
          , x = r + (h ? 2 : 0);
        for (let n = o ? -2 : 0; n <= x; ++n) {
            let a, o = n / r, h = i * o;
            n < 0 ? (h = 0,
            o = 1,
            a = t) : n > r ? (h = i,
            o = 1,
            a = e) : a = t + n / r * (e - t),
            -2 !== n && n !== r + 2 || (a = 0,
            o = 0),
            h -= i / 2;
            for (let t = 0; t < p; ++t) {
                const e = Math.sin(t * Math.PI * 2 / s)
                  , i = Math.cos(t * Math.PI * 2 / s);
                c.push(e * a, h, i * a),
                n < 0 ? d.push(0, -1, 0) : n > r ? d.push(0, 1, 0) : 0 === a ? d.push(0, 0, 0) : d.push(e * b, m, i * b),
                f.push(t / s, 1 - o)
            }
        }
        for (let t = 0; t < r + l; ++t)
            if (!(1 === t && o || t === r + l - 2 && h))
                for (let e = 0; e < s; ++e)
                    g.push(p * (t + 0) + 0 + e, p * (t + 0) + 1 + e, p * (t + 1) + 1 + e),
                    g.push(p * (t + 0) + 0 + e, p * (t + 1) + 1 + e, p * (t + 1) + 0 + e);
        return {
            position: c,
            normal: d,
            texcoord: f,
            indices: g
        }
    }
    function mt(t, e) {
        e = e || [];
        const i = [];
        for (let s = 0; s < t.length; s += 4) {
            const r = t[s]
              , n = t.slice(s + 1, s + 4);
            n.push.apply(n, e);
            for (let t = 0; t < r; ++t)
                i.push.apply(i, n)
        }
        return i
    }
    function xt() {
        const t = [0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, 30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, 30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, 0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, 30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30, 30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30, 0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30, 100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30, 30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0, 30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30, 30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30, 67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30, 30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0, 30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30, 0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0, 0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0]
          , e = mt([18, 0, 0, 1, 18, 0, 0, -1, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, -1, 0, 0])
          , i = mt([18, 200, 70, 120, 18, 80, 70, 200, 6, 70, 200, 210, 6, 200, 200, 70, 6, 210, 100, 70, 6, 210, 160, 70, 6, 70, 180, 210, 6, 100, 70, 210, 6, 76, 210, 100, 6, 140, 210, 80, 6, 90, 130, 110, 6, 160, 160, 220], [255])
          , s = t.length / 3
          , r = {
            position: nt(3, s),
            texcoord: nt(2, s),
            normal: nt(3, s),
            color: nt(4, s, Uint8Array),
            indices: nt(3, s / 3, Uint16Array)
        };
        r.position.push(t),
        r.texcoord.push([.22, .19, .22, .79, .34, .19, .22, .79, .34, .79, .34, .19, .34, .19, .34, .31, .62, .19, .34, .31, .62, .31, .62, .19, .34, .43, .34, .55, .49, .43, .34, .55, .49, .55, .49, .43, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0]),
        r.normal.push(e),
        r.color.push(i);
        for (let t = 0; t < s; ++t)
            r.indices.push(t);
        return r
    }
    function vt(t, e, i, s, a, o, h) {
        if (a <= 0)
            throw new Error("subdivisionDown must be > 0");
        const l = (h = h || 1) - (o = o || 0)
          , u = 2 * (a + 1) * 4
          , c = nt(3, u)
          , d = nt(3, u)
          , f = nt(2, u);
        function g(t, e, i) {
            return t + (e - t) * i
        }
        function p(e, i, h, u, p, _) {
            for (let b = 0; b <= a; b++) {
                const m = i / 1
                  , x = b / a
                  , v = 2 * (m - .5)
                  , T = (o + x * l) * Math.PI
                  , w = Math.sin(T)
                  , y = Math.cos(T)
                  , A = g(t, e, w)
                  , E = v * s
                  , C = y * t
                  , M = w * A;
                c.push(E, C, M);
                const S = r(n([0, w, y], h), u);
                d.push(S),
                f.push(m * p + _, x)
            }
        }
        for (let t = 0; t < 2; t++) {
            const s = 2 * (t / 1 - .5);
            p(e, t, [1, 1, 1], [0, 0, 0], 1, 0),
            p(e, t, [0, 0, 0], [s, 0, 0], 0, 0),
            p(i, t, [1, 1, 1], [0, 0, 0], 1, 0),
            p(i, t, [0, 0, 0], [s, 0, 0], 0, 1)
        }
        const _ = nt(3, 2 * a * 4, Uint16Array);
        function b(t, e) {
            for (let i = 0; i < a; ++i)
                _.push(t + i + 0, t + i + 1, e + i + 0),
                _.push(t + i + 1, e + i + 1, e + i + 0)
        }
        const m = a + 1;
        return b(0 * m, 4 * m),
        b(5 * m, 7 * m),
        b(6 * m, 2 * m),
        b(3 * m, 1 * m),
        {
            position: c,
            normal: d,
            texcoord: f,
            indices: _
        }
    }
    function Tt(t, e, i, s, r, n) {
        return bt(t, t, e, i, s, r, n)
    }
    function wt(t, e, i, s, r, n) {
        if (i < 3)
            throw new Error("radialSubdivisions must be 3 or greater");
        if (s < 3)
            throw new Error("verticalSubdivisions must be 3 or greater");
        r = r || 0;
        const a = (n = n || 2 * Math.PI) - r
          , o = i + 1
          , h = s + 1
          , l = o * h
          , u = nt(3, l)
          , c = nt(3, l)
          , d = nt(2, l)
          , f = nt(3, i * s * 2, Uint16Array);
        for (let n = 0; n < h; ++n) {
            const h = n / s
              , l = h * Math.PI * 2
              , f = Math.sin(l)
              , g = t + f * e
              , p = Math.cos(l)
              , _ = p * e;
            for (let t = 0; t < o; ++t) {
                const e = t / i
                  , s = r + e * a
                  , n = Math.sin(s)
                  , o = Math.cos(s)
                  , l = n * g
                  , b = o * g
                  , m = n * f
                  , x = o * f;
                u.push(l, _, b),
                c.push(m, p, x),
                d.push(e, 1 - h)
            }
        }
        for (let t = 0; t < s; ++t)
            for (let e = 0; e < i; ++e) {
                const i = 1 + e
                  , s = 1 + t;
                f.push(o * t + e, o * s + e, o * t + i),
                f.push(o * s + e, o * s + i, o * t + i)
            }
        return {
            position: u,
            normal: c,
            texcoord: d,
            indices: f
        }
    }
    function yt(t, e, i, s, r) {
        if (e < 3)
            throw new Error("divisions must be at least 3");
        r = r || 1,
        s = s || 0;
        const n = (e + 1) * ((i = i || 1) + 1)
          , a = nt(3, n)
          , o = nt(3, n)
          , h = nt(2, n)
          , l = nt(3, i * e * 2, Uint16Array);
        let u = 0;
        const c = t - s
          , d = e + 1;
        for (let t = 0; t <= i; ++t) {
            const n = s + c * Math.pow(t / i, r);
            for (let s = 0; s <= e; ++s) {
                const r = 2 * Math.PI * s / e
                  , c = n * Math.cos(r)
                  , f = n * Math.sin(r);
                if (a.push(c, 0, f),
                o.push(0, 1, 0),
                h.push(1 - s / e, t / i),
                t > 0 && s !== e) {
                    const t = u + (s + 1)
                      , e = u + s
                      , i = u + s - d
                      , r = u + (s + 1) - d;
                    l.push(t, e, i),
                    l.push(t, i, r)
                }
            }
            u += e + 1
        }
        return {
            position: a,
            normal: o,
            texcoord: h,
            indices: l
        }
    }
    function At(t) {
        return function(e) {
            return st(e, t.apply(this, Array.prototype.slice.call(arguments, 1)))
        }
    }
    function Et(t) {
        return function(e) {
            return et(e, t.apply(null, Array.prototype.slice.call(arguments, 1)))
        }
    }
    Et(xt),
    At(xt),
    Et(_t),
    At(_t),
    Et(ft),
    At(ft),
    Et(gt),
    At(gt),
    Et(bt),
    At(bt),
    Et(dt),
    At(dt),
    Et(vt),
    At(vt),
    Et(Tt),
    At(Tt),
    Et(wt),
    At(wt),
    Et(yt),
    At(yt);
    function Ct(t) {
        return !!t.texStorage2D
    }
    const Mt = function() {
        const t = {}
          , e = {};
        return function(i, s) {
            return function(i) {
                const s = i.constructor.name;
                if (!t[s]) {
                    for (const t in i)
                        if ("number" == typeof i[t]) {
                            const s = e[i[t]];
                            e[i[t]] = s ? `${s} | ${t}` : t
                        }
                    t[s] = !0
                }
            }(i),
            e[s] || ("number" == typeof s ? `0x${s.toString(16)}` : s)
        }
    }();
    new Uint8Array([128, 192, 255, 255]),
    function() {
        let t
    }();
    const St = 6406
      , Ft = 6407
      , It = 6408
      , Dt = 6409
      , kt = 6410
      , Rt = 6402
      , Ut = 34041
      , Ot = 33319
      , Pt = 33320
      , Bt = 6403
      , zt = 36244
      , Nt = 36248
      , Lt = 36249
      , Gt = {};
    {
        const t = Gt;
        t[St] = {
            numColorComponents: 1
        },
        t[Dt] = {
            numColorComponents: 1
        },
        t[kt] = {
            numColorComponents: 2
        },
        t[Ft] = {
            numColorComponents: 3
        },
        t[It] = {
            numColorComponents: 4
        },
        t[Bt] = {
            numColorComponents: 1
        },
        t[zt] = {
            numColorComponents: 1
        },
        t[Ot] = {
            numColorComponents: 2
        },
        t[Pt] = {
            numColorComponents: 2
        },
        t[Ft] = {
            numColorComponents: 3
        },
        t[Nt] = {
            numColorComponents: 3
        },
        t[It] = {
            numColorComponents: 4
        },
        t[Lt] = {
            numColorComponents: 4
        },
        t[Rt] = {
            numColorComponents: 1
        },
        t[Ut] = {
            numColorComponents: 2
        }
    }
    const jt = y;
    function Ht(t) {
        return "undefined" != typeof document && document.getElementById ? document.getElementById(t) : null
    }
    const qt = 33984
      , Vt = 34962
      , Xt = 35713
      , Wt = 35714
      , Yt = 35632
      , Zt = 35633
      , Jt = 35981
      , Kt = 35718
      , $t = 35721
      , Qt = 35971
      , te = 35382
      , ee = 35396
      , ie = 35398
      , se = 35392
      , re = 35395
      , ne = 5126
      , ae = 5124
      , oe = 5125
      , he = 3553
      , le = 34067
      , ue = 32879
      , ce = 35866
      , de = {};
    function fe(t, e) {
        return de[e].bindPoint
    }
    function ge(t, e) {
        return function(i) {
            t.uniform1i(e, i)
        }
    }
    function pe(t, e) {
        return function(i) {
            t.uniform1iv(e, i)
        }
    }
    function _e(t, e) {
        return function(i) {
            t.uniform2iv(e, i)
        }
    }
    function be(t, e) {
        return function(i) {
            t.uniform3iv(e, i)
        }
    }
    function me(t, e) {
        return function(i) {
            t.uniform4iv(e, i)
        }
    }
    function xe(t, e, i, s) {
        const r = fe(0, e);
        return Ct(t) ? function(e) {
            let n, a;
            !e || C(0, e) ? (n = e,
            a = null) : (n = e.texture,
            a = e.sampler),
            t.uniform1i(s, i),
            t.activeTexture(qt + i),
            t.bindTexture(r, n),
            t.bindSampler(i, a)
        }
        : function(e) {
            t.uniform1i(s, i),
            t.activeTexture(qt + i),
            t.bindTexture(r, e)
        }
    }
    function ve(t, e, i, s, r) {
        const n = fe(0, e)
          , a = new Int32Array(r);
        for (let t = 0; t < r; ++t)
            a[t] = i + t;
        return Ct(t) ? function(e) {
            t.uniform1iv(s, a),
            e.forEach((function(e, s) {
                let r, o;
                t.activeTexture(qt + a[s]),
                !e || C(0, e) ? (r = e,
                o = null) : (r = e.texture,
                o = e.sampler),
                t.bindSampler(i, o),
                t.bindTexture(n, r)
            }
            ))
        }
        : function(e) {
            t.uniform1iv(s, a),
            e.forEach((function(e, i) {
                t.activeTexture(qt + a[i]),
                t.bindTexture(n, e)
            }
            ))
        }
    }
    function Te(t, e) {
        return function(i) {
            if (i.value)
                switch (t.disableVertexAttribArray(e),
                i.value.length) {
                case 4:
                    t.vertexAttrib4fv(e, i.value);
                    break;
                case 3:
                    t.vertexAttrib3fv(e, i.value);
                    break;
                case 2:
                    t.vertexAttrib2fv(e, i.value);
                    break;
                case 1:
                    t.vertexAttrib1fv(e, i.value);
                    break;
                default:
                    throw new Error("the length of a float constant value must be between 1 and 4!")
                }
            else
                t.bindBuffer(Vt, i.buffer),
                t.enableVertexAttribArray(e),
                t.vertexAttribPointer(e, i.numComponents || i.size, i.type || ne, i.normalize || !1, i.stride || 0, i.offset || 0),
                t.vertexAttribDivisor && t.vertexAttribDivisor(e, i.divisor || 0)
        }
    }
    function we(t, e) {
        return function(i) {
            if (i.value) {
                if (t.disableVertexAttribArray(e),
                4 !== i.value.length)
                    throw new Error("The length of an integer constant value must be 4!");
                t.vertexAttrib4iv(e, i.value)
            } else
                t.bindBuffer(Vt, i.buffer),
                t.enableVertexAttribArray(e),
                t.vertexAttribIPointer(e, i.numComponents || i.size, i.type || ae, i.stride || 0, i.offset || 0),
                t.vertexAttribDivisor && t.vertexAttribDivisor(e, i.divisor || 0)
        }
    }
    function ye(t, e) {
        return function(i) {
            if (i.value) {
                if (t.disableVertexAttribArray(e),
                4 !== i.value.length)
                    throw new Error("The length of an unsigned integer constant value must be 4!");
                t.vertexAttrib4uiv(e, i.value)
            } else
                t.bindBuffer(Vt, i.buffer),
                t.enableVertexAttribArray(e),
                t.vertexAttribIPointer(e, i.numComponents || i.size, i.type || oe, i.stride || 0, i.offset || 0),
                t.vertexAttribDivisor && t.vertexAttribDivisor(e, i.divisor || 0)
        }
    }
    function Ae(t, e, i) {
        const s = i.size
          , r = i.count;
        return function(i) {
            t.bindBuffer(Vt, i.buffer);
            const n = i.size || i.numComponents || s
              , a = n / r
              , o = i.type || ne
              , h = de[o].size * n
              , l = i.normalize || !1
              , u = i.offset || 0
              , c = h / r;
            for (let s = 0; s < r; ++s)
                t.enableVertexAttribArray(e + s),
                t.vertexAttribPointer(e + s, a, o, l, h, u + c * s),
                t.vertexAttribDivisor && t.vertexAttribDivisor(e + s, i.divisor || 0)
        }
    }
    de[5126] = {
        Type: Float32Array,
        size: 4,
        setter: function(t, e) {
            return function(i) {
                t.uniform1f(e, i)
            }
        },
        arraySetter: function(t, e) {
            return function(i) {
                t.uniform1fv(e, i)
            }
        }
    },
    de[35664] = {
        Type: Float32Array,
        size: 8,
        setter: function(t, e) {
            return function(i) {
                t.uniform2fv(e, i)
            }
        },
        cols: 2
    },
    de[35665] = {
        Type: Float32Array,
        size: 12,
        setter: function(t, e) {
            return function(i) {
                t.uniform3fv(e, i)
            }
        },
        cols: 3
    },
    de[35666] = {
        Type: Float32Array,
        size: 16,
        setter: function(t, e) {
            return function(i) {
                t.uniform4fv(e, i)
            }
        },
        cols: 4
    },
    de[ae] = {
        Type: Int32Array,
        size: 4,
        setter: ge,
        arraySetter: pe
    },
    de[35667] = {
        Type: Int32Array,
        size: 8,
        setter: _e,
        cols: 2
    },
    de[35668] = {
        Type: Int32Array,
        size: 12,
        setter: be,
        cols: 3
    },
    de[35669] = {
        Type: Int32Array,
        size: 16,
        setter: me,
        cols: 4
    },
    de[5125] = {
        Type: Uint32Array,
        size: 4,
        setter: function(t, e) {
            return function(i) {
                t.uniform1ui(e, i)
            }
        },
        arraySetter: function(t, e) {
            return function(i) {
                t.uniform1uiv(e, i)
            }
        }
    },
    de[36294] = {
        Type: Uint32Array,
        size: 8,
        setter: function(t, e) {
            return function(i) {
                t.uniform2uiv(e, i)
            }
        },
        cols: 2
    },
    de[36295] = {
        Type: Uint32Array,
        size: 12,
        setter: function(t, e) {
            return function(i) {
                t.uniform3uiv(e, i)
            }
        },
        cols: 3
    },
    de[36296] = {
        Type: Uint32Array,
        size: 16,
        setter: function(t, e) {
            return function(i) {
                t.uniform4uiv(e, i)
            }
        },
        cols: 4
    },
    de[35670] = {
        Type: Uint32Array,
        size: 4,
        setter: ge,
        arraySetter: pe
    },
    de[35671] = {
        Type: Uint32Array,
        size: 8,
        setter: _e,
        cols: 2
    },
    de[35672] = {
        Type: Uint32Array,
        size: 12,
        setter: be,
        cols: 3
    },
    de[35673] = {
        Type: Uint32Array,
        size: 16,
        setter: me,
        cols: 4
    },
    de[35674] = {
        Type: Float32Array,
        size: 32,
        setter: function(t, e) {
            return function(i) {
                t.uniformMatrix2fv(e, !1, i)
            }
        },
        rows: 2,
        cols: 2
    },
    de[35675] = {
        Type: Float32Array,
        size: 48,
        setter: function(t, e) {
            return function(i) {
                t.uniformMatrix3fv(e, !1, i)
            }
        },
        rows: 3,
        cols: 3
    },
    de[35676] = {
        Type: Float32Array,
        size: 64,
        setter: function(t, e) {
            return function(i) {
                t.uniformMatrix4fv(e, !1, i)
            }
        },
        rows: 4,
        cols: 4
    },
    de[35685] = {
        Type: Float32Array,
        size: 32,
        setter: function(t, e) {
            return function(i) {
                t.uniformMatrix2x3fv(e, !1, i)
            }
        },
        rows: 2,
        cols: 3
    },
    de[35686] = {
        Type: Float32Array,
        size: 32,
        setter: function(t, e) {
            return function(i) {
                t.uniformMatrix2x4fv(e, !1, i)
            }
        },
        rows: 2,
        cols: 4
    },
    de[35687] = {
        Type: Float32Array,
        size: 48,
        setter: function(t, e) {
            return function(i) {
                t.uniformMatrix3x2fv(e, !1, i)
            }
        },
        rows: 3,
        cols: 2
    },
    de[35688] = {
        Type: Float32Array,
        size: 48,
        setter: function(t, e) {
            return function(i) {
                t.uniformMatrix3x4fv(e, !1, i)
            }
        },
        rows: 3,
        cols: 4
    },
    de[35689] = {
        Type: Float32Array,
        size: 64,
        setter: function(t, e) {
            return function(i) {
                t.uniformMatrix4x2fv(e, !1, i)
            }
        },
        rows: 4,
        cols: 2
    },
    de[35690] = {
        Type: Float32Array,
        size: 64,
        setter: function(t, e) {
            return function(i) {
                t.uniformMatrix4x3fv(e, !1, i)
            }
        },
        rows: 4,
        cols: 3
    },
    de[35678] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: he
    },
    de[35680] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: le
    },
    de[35679] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: ue
    },
    de[35682] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: he
    },
    de[36289] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: ce
    },
    de[36292] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: ce
    },
    de[36293] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: le
    },
    de[36298] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: he
    },
    de[36299] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: ue
    },
    de[36300] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: le
    },
    de[36303] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: ce
    },
    de[36306] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: he
    },
    de[36307] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: ue
    },
    de[36308] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: le
    },
    de[36311] = {
        Type: null,
        size: 0,
        setter: xe,
        arraySetter: ve,
        bindPoint: ce
    };
    const Ee = {};
    Ee[5126] = {
        size: 4,
        setter: Te
    },
    Ee[35664] = {
        size: 8,
        setter: Te
    },
    Ee[35665] = {
        size: 12,
        setter: Te
    },
    Ee[35666] = {
        size: 16,
        setter: Te
    },
    Ee[ae] = {
        size: 4,
        setter: we
    },
    Ee[35667] = {
        size: 8,
        setter: we
    },
    Ee[35668] = {
        size: 12,
        setter: we
    },
    Ee[35669] = {
        size: 16,
        setter: we
    },
    Ee[5125] = {
        size: 4,
        setter: ye
    },
    Ee[36294] = {
        size: 8,
        setter: ye
    },
    Ee[36295] = {
        size: 12,
        setter: ye
    },
    Ee[36296] = {
        size: 16,
        setter: ye
    },
    Ee[35670] = {
        size: 4,
        setter: we
    },
    Ee[35671] = {
        size: 8,
        setter: we
    },
    Ee[35672] = {
        size: 12,
        setter: we
    },
    Ee[35673] = {
        size: 16,
        setter: we
    },
    Ee[35674] = {
        size: 4,
        setter: Ae,
        count: 2
    },
    Ee[35675] = {
        size: 9,
        setter: Ae,
        count: 3
    },
    Ee[35676] = {
        size: 16,
        setter: Ae,
        count: 4
    };
    const Ce = /ERROR:\s*\d+:(\d+)/gi;
    const Me = /^[ \t]*\n/;
    function Se(t) {
        let e = 0;
        return Me.test(t) && (e = 1,
        t = t.replace(Me, "")),
        {
            lineOffset: e,
            shaderSource: t
        }
    }
    function Fe(t, e) {
        return t.errorCallback(e),
        t.callback && setTimeout(( () => {
            t.callback(`${e}\n${t.errors.join("\n")}`)
        }
        )),
        null
    }
    function Ie(t, e, i, s) {
        s = s || jt;
        if (!t.getShaderParameter(i, Xt)) {
            const r = t.getShaderInfoLog(i)
              , {lineOffset: n, shaderSource: a} = Se(t.getShaderSource(i))
              , o = `${function(t, e="", i=0) {
                const s = [...e.matchAll(Ce)]
                  , r = new Map(s.map(( (t, i) => {
                    const r = parseInt(t[1])
                      , n = s[i + 1]
                      , a = n ? n.index : e.length;
                    return [r - 1, e.substring(t.index, a)]
                }
                )));
                return t.split("\n").map(( (t, e) => {
                    const s = r.get(e);
                    return `${e + 1 + i}: ${t}${s ? `\n\n^^^ ${s}` : ""}`
                }
                )).join("\n")
            }(a, r, n)}\nError compiling ${Mt(t, e)}: ${r}`;
            return s(o),
            o
        }
        return ""
    }
    function De(t, e, i) {
        let s, r, n;
        if ("function" == typeof e && (i = e,
        e = void 0),
        "function" == typeof t)
            i = t,
            t = void 0;
        else if (t && !Array.isArray(t)) {
            const e = t;
            i = e.errorCallback,
            t = e.attribLocations,
            s = e.transformFeedbackVaryings,
            r = e.transformFeedbackMode,
            n = e.callback
        }
        const a = i || jt
          , o = []
          , h = {
            errorCallback(t, ...e) {
                o.push(t),
                a(t, ...e)
            },
            transformFeedbackVaryings: s,
            transformFeedbackMode: r,
            callback: n,
            errors: o
        };
        {
            let i = {};
            Array.isArray(t) ? t.forEach((function(t, s) {
                i[t] = e ? e[s] : s
            }
            )) : i = t || {},
            h.attribLocations = i
        }
        return h
    }
    const ke = ["VERTEX_SHADER", "FRAGMENT_SHADER"];
    const Re = (t=0) => new Promise((e => setTimeout(e, t)));
    function Ue(t, e, i) {
        const s = t.createProgram()
          , {attribLocations: r, transformFeedbackVaryings: n, transformFeedbackMode: a} = De(i);
        for (let i = 0; i < e.length; ++i) {
            let r = e[i];
            if ("string" == typeof r) {
                const e = Ht(r)
                  , n = e ? e.text : r;
                let a = t[ke[i]];
                e && e.type && (a = ((o = e.type).indexOf("frag") >= 0 ? Yt : o.indexOf("vert") >= 0 ? Zt : void 0) || a),
                r = t.createShader(a),
                t.shaderSource(r, Se(n).shaderSource),
                t.compileShader(r),
                t.attachShader(s, r)
            }
        }
        var o;
        Object.entries(r).forEach(( ([e,i]) => t.bindAttribLocation(s, i, e)));
        {
            let e = n;
            e && (e.attribs && (e = e.attribs),
            Array.isArray(e) || (e = Object.keys(e)),
            t.transformFeedbackVaryings(s, e, a || Jt))
        }
        return t.linkProgram(s),
        s
    }
    function Oe(t, e, i, s, r) {
        const n = De(i, s, r)
          , a = new Set(e)
          , o = Ue(t, e, n);
        function h(t, e) {
            const i = ze(t, e, n.errorCallback);
            return i && function(t, e, i) {
                const s = t.getAttachedShaders(e);
                for (const e of s)
                    i.has(e) && t.deleteShader(e);
                t.deleteProgram(e)
            }(t, e, a),
            i
        }
        if (!n.callback)
            return h(t, o) ? void 0 : o;
        Be(t, o).then(( () => {
            const e = h(t, o);
            n.callback(e, e ? void 0 : o)
        }
        ))
    }
    function Pe(t) {
        return function(e, i, ...s) {
            return new Promise(( (r, n) => {
                const a = De(...s);
                a.callback = (t, e) => {
                    t ? n(t) : r(e)
                }
                ,
                t(e, i, a)
            }
            ))
        }
    }
    Pe(Oe),
    Pe($e);
    async function Be(t, e) {
        const i = t.getExtension("KHR_parallel_shader_compile")
          , s = i ? (t, e) => t.getProgramParameter(e, i.COMPLETION_STATUS_KHR) : () => !0;
        let r = 0;
        do {
            await Re(r),
            r = 1e3 / 60
        } while (!s(t, e))
    }
    function ze(t, e, i) {
        i = i || jt;
        if (!t.getProgramParameter(e, Wt)) {
            const s = t.getProgramInfoLog(e);
            i(`Error in program linking: ${s}`);
            return `${s}\n${t.getAttachedShaders(e).map((e => Ie(t, t.getShaderParameter(e, t.SHADER_TYPE), e, i))).filter((t => t)).join("\n")}`
        }
    }
    function Ne(t, e, i, s, r) {
        return Oe(t, e, i, s, r)
    }
    function Le(t) {
        const e = t.name;
        return e.startsWith("gl_") || e.startsWith("webgl_")
    }
    const Ge = /(\.|\[|]|\w+)/g
      , je = t => t >= "0" && t <= "9";
    function He(t, e, i, s) {
        const r = t.split(Ge).filter((t => "" !== t));
        let n = 0
          , a = "";
        for (; ; ) {
            const t = r[n++];
            a += t;
            const o = je(t[0])
              , h = o ? parseInt(t) : t;
            o && (a += r[n++]);
            if (n === r.length) {
                i[h] = e;
                break
            }
            {
                const t = r[n++]
                  , e = "[" === t
                  , o = i[h] || (e ? [] : {});
                i[h] = o,
                i = o,
                s[a] = s[a] || function(t) {
                    return function(e) {
                        We(t, e)
                    }
                }(o),
                a += t
            }
        }
    }
    function qe(t, e) {
        let i = 0;
        function s(e, s, r) {
            const n = s.name.endsWith("[0]")
              , a = s.type
              , o = de[a];
            if (!o)
                throw new Error(`unknown type: 0x${a.toString(16)}`);
            let h;
            if (o.bindPoint) {
                const e = i;
                i += s.size,
                h = n ? o.arraySetter(t, a, e, r, s.size) : o.setter(t, a, e, r, s.size)
            } else
                h = o.arraySetter && n ? o.arraySetter(t, r) : o.setter(t, r);
            return h.location = r,
            h
        }
        const r = {}
          , n = {}
          , a = t.getProgramParameter(e, Kt);
        for (let i = 0; i < a; ++i) {
            const a = t.getActiveUniform(e, i);
            if (Le(a))
                continue;
            let o = a.name;
            o.endsWith("[0]") && (o = o.substr(0, o.length - 3));
            const h = t.getUniformLocation(e, a.name);
            if (h) {
                const t = s(0, a, h);
                r[o] = t,
                He(o, t, n, r)
            }
        }
        return r
    }
    function Ve(t, e) {
        const i = {}
          , s = t.getProgramParameter(e, Qt);
        for (let r = 0; r < s; ++r) {
            const s = t.getTransformFeedbackVarying(e, r);
            i[s.name] = {
                index: r,
                type: s.type,
                size: s.size
            }
        }
        return i
    }
    function Xe(t, e) {
        const i = t.getProgramParameter(e, Kt)
          , s = []
          , r = [];
        for (let n = 0; n < i; ++n) {
            r.push(n),
            s.push({});
            const i = t.getActiveUniform(e, n);
            s[n].name = i.name
        }
        [["UNIFORM_TYPE", "type"], ["UNIFORM_SIZE", "size"], ["UNIFORM_BLOCK_INDEX", "blockNdx"], ["UNIFORM_OFFSET", "offset"]].forEach((function(i) {
            const n = i[0]
              , a = i[1];
            t.getActiveUniforms(e, r, t[n]).forEach((function(t, e) {
                s[e][a] = t
            }
            ))
        }
        ));
        const n = {}
          , a = t.getProgramParameter(e, te);
        for (let i = 0; i < a; ++i) {
            const s = t.getActiveUniformBlockName(e, i)
              , r = {
                index: t.getUniformBlockIndex(e, s),
                usedByVertexShader: t.getActiveUniformBlockParameter(e, i, ee),
                usedByFragmentShader: t.getActiveUniformBlockParameter(e, i, ie),
                size: t.getActiveUniformBlockParameter(e, i, se),
                uniformIndices: t.getActiveUniformBlockParameter(e, i, re)
            };
            r.used = r.usedByVertexShader || r.usedByFragmentShader,
            n[s] = r
        }
        return {
            blockSpecs: n,
            uniformData: s
        }
    }
    function We(t, e) {
        for (const i in e) {
            const s = t[i];
            "function" == typeof s ? s(e[i]) : We(t[i], e[i])
        }
    }
    function Ye(t, ...e) {
        const i = t.uniformSetters || t
          , s = e.length;
        for (let t = 0; t < s; ++t) {
            const s = e[t];
            if (Array.isArray(s)) {
                const t = s.length;
                for (let e = 0; e < t; ++e)
                    Ye(i, s[e])
            } else
                for (const t in s) {
                    const e = i[t];
                    e && e(s[t])
                }
        }
    }
    function Ze(t, e) {
        const i = {}
          , s = t.getProgramParameter(e, $t);
        for (let r = 0; r < s; ++r) {
            const s = t.getActiveAttrib(e, r);
            if (Le(s))
                continue;
            const n = t.getAttribLocation(e, s.name)
              , a = Ee[s.type]
              , o = a.setter(t, n, a);
            o.location = n,
            i[s.name] = o
        }
        return i
    }
    function Je(t, e) {
        const i = {
            program: e,
            uniformSetters: qe(t, e),
            attribSetters: Ze(t, e)
        };
        return Ct(t) && (i.uniformBlockSpec = Xe(t, e),
        i.transformFeedbackInfo = Ve(t, e)),
        i
    }
    const Ke = /\s|{|}|;/;
    function $e(t, e, i, s, r) {
        const n = De(i, s, r)
          , a = [];
        if (e = e.map((function(t) {
            if (!Ke.test(t)) {
                const e = Ht(t);
                if (e)
                    t = e.text;
                else {
                    const e = `no element with id: ${t}`;
                    n.errorCallback(e),
                    a.push(e)
                }
            }
            return t
        }
        )),
        a.length)
            return Fe(n, "");
        const o = n.callback;
        o && (n.callback = (e, i) => {
            o(e, e ? void 0 : Je(t, i))
        }
        );
        const h = Ne(t, e, n);
        return h ? Je(t, h) : null
    }
    function Qe(t, e, i, s, r) {
        for (const [n,a] of Object.entries(e)) {
            const o = {
                ...r
            }
              , h = i[n];
            Array.isArray(h) || Object.assign(o, h);
            const l = ze(t, a, o.errorCallback);
            if (l) {
                for (const i of Object.values(e)) {
                    const e = t.getAttachedShaders(i);
                    t.deleteProgram(i);
                    for (const i of e)
                        s.has(i) || t.deleteShader(i)
                }
                return l
            }
        }
    }
    function ti(t, e, i={}) {
        const s = new Set
          , r = Object.fromEntries(Object.entries(e).map(( ([e,r]) => {
            const n = {
                ...i
            }
              , a = Array.isArray(r) ? r : r.shaders;
            return Array.isArray(r) || Object.assign(n, r),
            a.forEach(s.add, s),
            [e, Ue(t, a, n)]
        }
        )));
        if (i.callback)
            return void async function(t, e) {
                for (const i of Object.values(e))
                    await Be(t, i)
            }(t, r).then(( () => {
                const n = Qe(t, r, e, s, i);
                i.callback(n, n ? void 0 : r)
            }
            ));
        return Qe(t, r, e, s, i) ? void 0 : r
    }
    function ei(t, e, i) {
        function s(t, e) {
            return Object.fromEntries(Object.entries(e).map(( ([e,i]) => [e, Je(t, i)])))
        }
        const r = (i = De(i)).callback;
        r && (i.callback = (e, i) => {
            r(e, e ? void 0 : s(t, i))
        }
        );
        const n = ti(t, e, i);
        if (!r && n)
            return s(t, n)
    }
    Pe(ti),
    Pe(ei);
    const ii = 36096
      , si = 33306
      , ri = {};
    ri[34041] = si,
    ri[6401] = 36128,
    ri[36168] = 36128,
    ri[6402] = ii,
    ri[33189] = ii,
    ri[33190] = ii,
    ri[36012] = ii,
    ri[35056] = si,
    ri[36013] = si;
    const ni = {};
    ni[32854] = !0,
    ni[32855] = !0,
    ni[36194] = !0,
    ni[34041] = !0,
    ni[33189] = !0,
    ni[6401] = !0,
    ni[36168] = !0;
    var ai = {};
    const oi = {
        position: 3,
        normal: 3,
        tangent: 3,
        texcoord: 2,
        texcoord0: 2,
        texcoord1: 2,
        texcoord2: 2
    };
    var hi = {};
    class li {
        constructor() {
            this.attribs = {}
        }
        disableAll() {
            for (let t in this.attribs)
                this.gl.disableVertexAttribArray(this.attribs[t]);
            this.attribs = {}
        }
        enable(t, e) {
            this.gl = t;
            var i = {};
            for (let r in e) {
                var s = e[r];
                void 0 !== s.loc && (void 0 === this.attribs[s.loc] && t.enableVertexAttribArray(s.loc),
                t.vertexAttribPointer(s.loc, s.size, s.type, !1, s.stride, s.offset),
                i[s.loc] = s.loc,
                this.attribs[r] = null)
            }
            for (let t in this.attribs)
                ;
            this.attribs = i
        }
    }
    class ui {
        static CreateProgramAttributes(t, e) {
            var i = {}
              , s = 0;
            for (let a in e) {
                var r = e[a]
                  , n = oi[a];
                i[r] = {
                    type: t.FLOAT,
                    size: n,
                    offset: 4 * s
                },
                s += n
            }
            for (let t in i)
                i[t].stride = 4 * s;
            return i
        }
        CleanUpPrograms() {
            hi = {}
        }
        ReleaseProgram(t) {}
        static _GetProgram(t) {
            return hi[t]
        }
        static RegisterProgram(t, e) {
            if (!hi[t]) {
                var i = e.shaders;
                hi[t] = {
                    shaders: [i[0], i[1]],
                    attributes: e.attributes
                }
            }
            return hi[t]
        }
        static GetProgram(t, e, i, s) {
            var r = hi[e]
              , n = "";
            for (var a in i)
                n += a + ":" + i[a] + "-";
            if (!r) {
                var o = e.split(".")
                  , h = ai[o[0]][o[1]];
                h && (r = ui.RegisterProgram(e, h))
            }
            if (!r)
                throw "Program not registered: " + o;
            r.programInfo || (r.programInfo = {}),
            r.programInfo[n] = ui.CompileProgram(t, r.shaders, i),
            s = s || r.attributes && ui.CreateProgramAttributes(t, r.attributes);
            var l = r.programInfo[n];
            if (s)
                for (var a in s) {
                    var u = l.attribSetters[a];
                    u && (s[a] = s[a] || {},
                    s[a].loc = u.location)
                }
            return l.attributes = s,
            l
        }
        static CompileProgram(t, e, i, s) {
            var r = "";
            for (var n in i) {
                var a = i[n];
                r = "#define " + n + " " + (null === a ? "" : a) + "\n"
            }
            var o = {};
            const h = $e(t, [r + e[0], r + e[1]], null, null);
            if (s)
                for (var n in s) {
                    var l = h.attribSetters[n];
                    l && (s[n] = s[n] || {},
                    s[n].loc = l.location)
                }
            for (var n in h.uniformSetters)
                o[n] = h.uniformSetters[n].location;
            return h.uniforms = o,
            h
        }
    }
    var ci = new ui
      , di = 1e-6
      , fi = "undefined" != typeof Float32Array ? Float32Array : Array;
    Math.random;
    Math.PI;
    function gi() {
        var t = new fi(3);
        return fi != Float32Array && (t[0] = 0,
        t[1] = 0,
        t[2] = 0),
        t
    }
    function pi(t) {
        var e = t[0]
          , i = t[1]
          , s = t[2];
        return Math.hypot(e, i, s)
    }
    function _i(t, e, i) {
        var s = new fi(3);
        return s[0] = t,
        s[1] = e,
        s[2] = i,
        s
    }
    function bi(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t
    }
    function mi(t, e, i, s) {
        return t[0] = e,
        t[1] = i,
        t[2] = s,
        t
    }
    function xi(t, e, i) {
        return t[0] = e[0] + i[0],
        t[1] = e[1] + i[1],
        t[2] = e[2] + i[2],
        t
    }
    function vi(t, e, i) {
        return t[0] = e[0] - i[0],
        t[1] = e[1] - i[1],
        t[2] = e[2] - i[2],
        t
    }
    function Ti(t, e, i) {
        return t[0] = e[0] * i[0],
        t[1] = e[1] * i[1],
        t[2] = e[2] * i[2],
        t
    }
    function wi(t, e, i) {
        return t[0] = Math.min(e[0], i[0]),
        t[1] = Math.min(e[1], i[1]),
        t[2] = Math.min(e[2], i[2]),
        t
    }
    function yi(t, e, i) {
        return t[0] = Math.max(e[0], i[0]),
        t[1] = Math.max(e[1], i[1]),
        t[2] = Math.max(e[2], i[2]),
        t
    }
    function Ai(t, e, i) {
        return t[0] = e[0] * i,
        t[1] = e[1] * i,
        t[2] = e[2] * i,
        t
    }
    function Ei(t, e, i, s) {
        return t[0] = e[0] + i[0] * s,
        t[1] = e[1] + i[1] * s,
        t[2] = e[2] + i[2] * s,
        t
    }
    function Ci(t) {
        var e = t[0]
          , i = t[1]
          , s = t[2];
        return e * e + i * i + s * s
    }
    function Mi(t, e) {
        return t[0] = -e[0],
        t[1] = -e[1],
        t[2] = -e[2],
        t
    }
    function Si(t, e) {
        var i = e[0]
          , s = e[1]
          , r = e[2]
          , n = i * i + s * s + r * r;
        return n > 0 && (n = 1 / Math.sqrt(n)),
        t[0] = e[0] * n,
        t[1] = e[1] * n,
        t[2] = e[2] * n,
        t
    }
    function Fi(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }
    function Ii(t, e, i) {
        var s = e[0]
          , r = e[1]
          , n = e[2]
          , a = i[0]
          , o = i[1]
          , h = i[2];
        return t[0] = r * h - n * o,
        t[1] = n * a - s * h,
        t[2] = s * o - r * a,
        t
    }
    function Di(t, e, i, s) {
        var r = e[0]
          , n = e[1]
          , a = e[2];
        return t[0] = r + s * (i[0] - r),
        t[1] = n + s * (i[1] - n),
        t[2] = a + s * (i[2] - a),
        t
    }
    function ki(t, e, i) {
        var s = e[0]
          , r = e[1]
          , n = e[2]
          , a = i[3] * s + i[7] * r + i[11] * n + i[15];
        return a = a || 1,
        t[0] = (i[0] * s + i[4] * r + i[8] * n + i[12]) / a,
        t[1] = (i[1] * s + i[5] * r + i[9] * n + i[13]) / a,
        t[2] = (i[2] * s + i[6] * r + i[10] * n + i[14]) / a,
        t
    }
    function Ri(t, e, i) {
        var s = e[0]
          , r = e[1]
          , n = e[2];
        return t[0] = s * i[0] + r * i[3] + n * i[6],
        t[1] = s * i[1] + r * i[4] + n * i[7],
        t[2] = s * i[2] + r * i[5] + n * i[8],
        t
    }
    Math.hypot || (Math.hypot = function() {
        for (var t = 0, e = arguments.length; e--; )
            t += arguments[e] * arguments[e];
        return Math.sqrt(t)
    }
    );
    var Ui, Oi = vi, Pi = pi;
    Ui = gi();
    function Bi() {
        var t = new fi(16);
        return fi != Float32Array && (t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0),
        t[0] = 1,
        t[5] = 1,
        t[10] = 1,
        t[15] = 1,
        t
    }
    function zi(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4],
        t[5] = e[5],
        t[6] = e[6],
        t[7] = e[7],
        t[8] = e[8],
        t[9] = e[9],
        t[10] = e[10],
        t[11] = e[11],
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15],
        t
    }
    function Ni(t, e, i, s, r, n, a, o, h, l, u, c, d, f, g, p) {
        var _ = new fi(16);
        return _[0] = t,
        _[1] = e,
        _[2] = i,
        _[3] = s,
        _[4] = r,
        _[5] = n,
        _[6] = a,
        _[7] = o,
        _[8] = h,
        _[9] = l,
        _[10] = u,
        _[11] = c,
        _[12] = d,
        _[13] = f,
        _[14] = g,
        _[15] = p,
        _
    }
    function Li(t) {
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = 1,
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[10] = 1,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        t
    }
    function Gi(t, e) {
        if (t === e) {
            var i = e[1]
              , s = e[2]
              , r = e[3]
              , n = e[6]
              , a = e[7]
              , o = e[11];
            t[1] = e[4],
            t[2] = e[8],
            t[3] = e[12],
            t[4] = i,
            t[6] = e[9],
            t[7] = e[13],
            t[8] = s,
            t[9] = n,
            t[11] = e[14],
            t[12] = r,
            t[13] = a,
            t[14] = o
        } else
            t[0] = e[0],
            t[1] = e[4],
            t[2] = e[8],
            t[3] = e[12],
            t[4] = e[1],
            t[5] = e[5],
            t[6] = e[9],
            t[7] = e[13],
            t[8] = e[2],
            t[9] = e[6],
            t[10] = e[10],
            t[11] = e[14],
            t[12] = e[3],
            t[13] = e[7],
            t[14] = e[11],
            t[15] = e[15];
        return t
    }
    function ji(t, e) {
        var i = e[0]
          , s = e[1]
          , r = e[2]
          , n = e[3]
          , a = e[4]
          , o = e[5]
          , h = e[6]
          , l = e[7]
          , u = e[8]
          , c = e[9]
          , d = e[10]
          , f = e[11]
          , g = e[12]
          , p = e[13]
          , _ = e[14]
          , b = e[15]
          , m = i * o - s * a
          , x = i * h - r * a
          , v = i * l - n * a
          , T = s * h - r * o
          , w = s * l - n * o
          , y = r * l - n * h
          , A = u * p - c * g
          , E = u * _ - d * g
          , C = u * b - f * g
          , M = c * _ - d * p
          , S = c * b - f * p
          , F = d * b - f * _
          , I = m * F - x * S + v * M + T * C - w * E + y * A;
        return I ? (I = 1 / I,
        t[0] = (o * F - h * S + l * M) * I,
        t[1] = (r * S - s * F - n * M) * I,
        t[2] = (p * y - _ * w + b * T) * I,
        t[3] = (d * w - c * y - f * T) * I,
        t[4] = (h * C - a * F - l * E) * I,
        t[5] = (i * F - r * C + n * E) * I,
        t[6] = (_ * v - g * y - b * x) * I,
        t[7] = (u * y - d * v + f * x) * I,
        t[8] = (a * S - o * C + l * A) * I,
        t[9] = (s * C - i * S - n * A) * I,
        t[10] = (g * w - p * v + b * m) * I,
        t[11] = (c * v - u * w - f * m) * I,
        t[12] = (o * E - a * M - h * A) * I,
        t[13] = (i * M - s * E + r * A) * I,
        t[14] = (p * x - g * T - _ * m) * I,
        t[15] = (u * T - c * x + d * m) * I,
        t) : null
    }
    function Hi(t, e, i) {
        var s = e[0]
          , r = e[1]
          , n = e[2]
          , a = e[3]
          , o = e[4]
          , h = e[5]
          , l = e[6]
          , u = e[7]
          , c = e[8]
          , d = e[9]
          , f = e[10]
          , g = e[11]
          , p = e[12]
          , _ = e[13]
          , b = e[14]
          , m = e[15]
          , x = i[0]
          , v = i[1]
          , T = i[2]
          , w = i[3];
        return t[0] = x * s + v * o + T * c + w * p,
        t[1] = x * r + v * h + T * d + w * _,
        t[2] = x * n + v * l + T * f + w * b,
        t[3] = x * a + v * u + T * g + w * m,
        x = i[4],
        v = i[5],
        T = i[6],
        w = i[7],
        t[4] = x * s + v * o + T * c + w * p,
        t[5] = x * r + v * h + T * d + w * _,
        t[6] = x * n + v * l + T * f + w * b,
        t[7] = x * a + v * u + T * g + w * m,
        x = i[8],
        v = i[9],
        T = i[10],
        w = i[11],
        t[8] = x * s + v * o + T * c + w * p,
        t[9] = x * r + v * h + T * d + w * _,
        t[10] = x * n + v * l + T * f + w * b,
        t[11] = x * a + v * u + T * g + w * m,
        x = i[12],
        v = i[13],
        T = i[14],
        w = i[15],
        t[12] = x * s + v * o + T * c + w * p,
        t[13] = x * r + v * h + T * d + w * _,
        t[14] = x * n + v * l + T * f + w * b,
        t[15] = x * a + v * u + T * g + w * m,
        t
    }
    function qi(t, e, i) {
        var s, r, n, a, o, h, l, u, c, d, f, g, p = i[0], _ = i[1], b = i[2];
        return e === t ? (t[12] = e[0] * p + e[4] * _ + e[8] * b + e[12],
        t[13] = e[1] * p + e[5] * _ + e[9] * b + e[13],
        t[14] = e[2] * p + e[6] * _ + e[10] * b + e[14],
        t[15] = e[3] * p + e[7] * _ + e[11] * b + e[15]) : (s = e[0],
        r = e[1],
        n = e[2],
        a = e[3],
        o = e[4],
        h = e[5],
        l = e[6],
        u = e[7],
        c = e[8],
        d = e[9],
        f = e[10],
        g = e[11],
        t[0] = s,
        t[1] = r,
        t[2] = n,
        t[3] = a,
        t[4] = o,
        t[5] = h,
        t[6] = l,
        t[7] = u,
        t[8] = c,
        t[9] = d,
        t[10] = f,
        t[11] = g,
        t[12] = s * p + o * _ + c * b + e[12],
        t[13] = r * p + h * _ + d * b + e[13],
        t[14] = n * p + l * _ + f * b + e[14],
        t[15] = a * p + u * _ + g * b + e[15]),
        t
    }
    function Vi(t, e, i) {
        var s = i[0]
          , r = i[1]
          , n = i[2];
        return t[0] = e[0] * s,
        t[1] = e[1] * s,
        t[2] = e[2] * s,
        t[3] = e[3] * s,
        t[4] = e[4] * r,
        t[5] = e[5] * r,
        t[6] = e[6] * r,
        t[7] = e[7] * r,
        t[8] = e[8] * n,
        t[9] = e[9] * n,
        t[10] = e[10] * n,
        t[11] = e[11] * n,
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15],
        t
    }
    function Xi(t, e, i) {
        var s = Math.sin(i)
          , r = Math.cos(i)
          , n = e[4]
          , a = e[5]
          , o = e[6]
          , h = e[7]
          , l = e[8]
          , u = e[9]
          , c = e[10]
          , d = e[11];
        return e !== t && (t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15]),
        t[4] = n * r + l * s,
        t[5] = a * r + u * s,
        t[6] = o * r + c * s,
        t[7] = h * r + d * s,
        t[8] = l * r - n * s,
        t[9] = u * r - a * s,
        t[10] = c * r - o * s,
        t[11] = d * r - h * s,
        t
    }
    function Wi(t, e, i) {
        var s = Math.sin(i)
          , r = Math.cos(i)
          , n = e[0]
          , a = e[1]
          , o = e[2]
          , h = e[3]
          , l = e[4]
          , u = e[5]
          , c = e[6]
          , d = e[7];
        return e !== t && (t[8] = e[8],
        t[9] = e[9],
        t[10] = e[10],
        t[11] = e[11],
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15]),
        t[0] = n * r + l * s,
        t[1] = a * r + u * s,
        t[2] = o * r + c * s,
        t[3] = h * r + d * s,
        t[4] = l * r - n * s,
        t[5] = u * r - a * s,
        t[6] = c * r - o * s,
        t[7] = d * r - h * s,
        t
    }
    function Yi(t, e, i) {
        var s = e[0]
          , r = e[1]
          , n = e[2]
          , a = e[3]
          , o = s + s
          , h = r + r
          , l = n + n
          , u = s * o
          , c = s * h
          , d = s * l
          , f = r * h
          , g = r * l
          , p = n * l
          , _ = a * o
          , b = a * h
          , m = a * l;
        return t[0] = 1 - (f + p),
        t[1] = c + m,
        t[2] = d - b,
        t[3] = 0,
        t[4] = c - m,
        t[5] = 1 - (u + p),
        t[6] = g + _,
        t[7] = 0,
        t[8] = d + b,
        t[9] = g - _,
        t[10] = 1 - (u + f),
        t[11] = 0,
        t[12] = i[0],
        t[13] = i[1],
        t[14] = i[2],
        t[15] = 1,
        t
    }
    function Zi(t, e) {
        return t[0] = e[12],
        t[1] = e[13],
        t[2] = e[14],
        t
    }
    function Ji(t, e) {
        var i = e[0]
          , s = e[1]
          , r = e[2]
          , n = e[4]
          , a = e[5]
          , o = e[6]
          , h = e[8]
          , l = e[9]
          , u = e[10];
        return t[0] = Math.hypot(i, s, r),
        t[1] = Math.hypot(n, a, o),
        t[2] = Math.hypot(h, l, u),
        t
    }
    var Ki = function(t, e, i, s, r) {
        var n, a = 1 / Math.tan(e / 2);
        return t[0] = a / i,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = a,
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[11] = -1,
        t[12] = 0,
        t[13] = 0,
        t[15] = 0,
        null != r && r !== 1 / 0 ? (n = 1 / (s - r),
        t[10] = (r + s) * n,
        t[14] = 2 * r * s * n) : (t[10] = -1,
        t[14] = -2 * s),
        t
    };
    var $i = Hi;
    const Qi = {
        2: "Wowhead",
        3: "LolKing",
        6: "HeroKing",
        7: "DestinyDB"
    };
    class ts {
        constructor(t) {
            window.model = this; // 初始化 model 
            if (!t.type || !Qi[t.type])
                throw "Viewer error: Bad viewer type given";
            if (!t.container)
                throw "Viewer error: Bad container given";
            if (!t.aspect)
                throw "Viewer error: Bad aspect ratio given";
            if (!t.contentPath)
                throw "Viewer error: No content path given";
            console.log("Creating viewer with options", t),
            this.type = t.type,
            this.container = t.container,
            this.aspect = parseFloat(t.aspect),
            this.renderer = null,
            this.options = t;
            const e = this.container.width()
              , i = Math.round(e / this.aspect);
            this.init(e, i)
        }
        destroy() {
            this.renderer && this.renderer.destroy(),
            this.options = null,
            this.container = null
        }
        init(t, e) {
            if (void 0 !== typeof window.Uint8Array && void 0 !== typeof window.DataView)
                try {
                    const t = document.createElement("canvas");
                    if (!(t.getContext("webgl", {
                        alpha: !1
                    }) || t.getContext("experimental-webgl", {
                        alpha: !1
                    })))
                        return void console.log("viewer init failed")
                } catch (t) {
                    return void console.log("viewer init failed")
                }
            this.mode = 1,
            this.renderer = new jl(this),
            this.renderer.resize(t, e),
            this.renderer.init()
        }
        setAdaptiveMode(t) {
            this.renderer.setAdaptiveMode(t)
        }
        setZoom(t) {
            this.renderer.zoom.target = t
        }
        setOffset(t, e) {
            this.renderer.setTranslation(t, e, 0)
        }
        setFullscreen(t) {
            t ? ts.requestFullscreen(this.renderer.canvas[0]) : ts.exitFullscreen()
        }
        method(t, e) {
            return void 0 === e && (e = []),
            this.renderer ? this.renderer.method(t, [].concat(e)) : null
        }
        option(t, e) {
            return void 0 !== e && (this.options[t] = e),
            this.options[t]
        }
        static isFullscreen() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
        }
        static requestFullscreen(t) {
            document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || (t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen())
        }
        static exitFullscreen() {
            (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen())
        }
    }
    const es = ts;
    const is = class {
        constructor(t, e, i) {
            this.g = t,
            this.ba = e,
            this.f = i,
            this.e = !1,
            this.dc = t.createBuffer(),
            this.ba = 0
        }
        b(t) {
            const e = this.g;
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.dc),
            !this.e || this.ba < t.byteLength ? (e.bufferData(e.ELEMENT_ARRAY_BUFFER, t, this.f ? e.DYNAMIC_DRAW : e.STATIC_DRAW),
            this.ba = t.byteLength,
            this.e = !0) : e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, 0, t),
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null)
        }
        d() {
            return this.ba
        }
        c() {
            const t = this.g;
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.dc)
        }
        a() {
            const t = this.g;
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null)
        }
    }
    ;
    const ss = class {
        constructor(t, e, i) {
            this.ba = t,
            this.f = e,
            this.dc = i,
            this.g = !1,
            this.e = t.createBuffer(),
            this.f = 0
        }
        c() {
            const t = this.ba;
            t.bindBuffer(t.ARRAY_BUFFER, this.e)
        }
        a() {
            const t = this.ba;
            t.bindBuffer(t.ARRAY_BUFFER, null)
        }
        b(t) {
            const e = this.ba;
            e.bindBuffer(e.ARRAY_BUFFER, this.e),
            !this.g || this.f < t.byteLength ? (e.bufferData(e.ARRAY_BUFFER, t, this.dc ? e.DYNAMIC_DRAW : e.STATIC_DRAW),
            this.g = !0,
            this.f = t.byteLength) : e.bufferSubData(e.ARRAY_BUFFER, 0, t),
            e.bindBuffer(e.ARRAY_BUFFER, null)
        }
        d() {
            return this.f
        }
    }
    ;
    var rs;
    !function(t) {
        t[t.GFLOAT = 0] = "GFLOAT",
        t[t.GUNSIGNED_BYTE = 1] = "GUNSIGNED_BYTE"
    }(rs || (rs = {}));
    class ns {
        constructor(t, e, i, s, r, n) {
            this.f = t,
            this.a = e,
            this.c = i,
            this.d = s,
            this.e = r,
            this.b = n
        }
    }
    function as(t, e) {
        switch (e) {
        case rs.GFLOAT:
            return t.FLOAT;
        case rs.GUNSIGNED_BYTE:
            return t.UNSIGNED_BYTE
        }
    }
    const os = class {
        constructor(t, e) {
            this.dc = t,
            this.ba = e,
            this.f = null,
            this.e = [],
            this.f = e.createVertexArrayOES()
        }
        a(t) {
            this.dc;
            this.c(),
            t.c(),
            this.b(),
            this.e.push(t)
        }
        d(t, e) {
            const i = this.dc;
            this.c(),
            t.c();
            for (const t of e)
                i.enableVertexAttribArray(t.f),
                i.vertexAttribPointer(t.f, t.a, as(i, t.c), t.d, t.e, t.b);
            this.b(),
            this.e.push(t)
        }
        c() {
            this.ba.bindVertexArrayOES(this.f)
        }
        b() {
            this.ba.bindVertexArrayOES(null)
        }
    }
    ;
    const hs = class {
        constructor(t, e) {
            this.ba = t,
            this.dc = e,
            this.e = []
        }
        a(t) {
            this.f = t
        }
        d(t, e) {
            this.e.push({
                buffer: t,
                bindings: e
            })
        }
        c() {
            const t = this.ba;
            this.f.c();
            const e = this.dc.e();
            for (const e of this.e) {
                e.b.c();
                for (const i of e.a)
                    this.dc.c(i.f),
                    t.vertexAttribPointer(i.f, i.a, as(t, i.c), i.d, i.e, i.b)
            }
            this.dc.d(e)
        }
        b() {}
    }
    ;
    class ls {
    }
    class us {
        constructor(t, e, i, s) {
            this.b = t,
            this.c = e,
            this.a = i,
            this.d = s
        }
    }
    class cs {
        constructor(t, e) {
            this.a = t,
            this.b = e
        }
    }
    class ds {
        constructor(t, e) {
            this.b = t,
            this.a = e
        }
    }
    class fs extends ls {
    }
    const gs = class extends fs {
        constructor(t, e, i, s) {
            super(),
            this.d = t,
            this.e = e,
            this.cba = i,
            this.ba = s
        }
        b() {
            return this.cba.a
        }
        a(t) {
            const e = this.cba;
            t.a(this.e),
            t.e(e.a),
            t.d(e.f),
            t.b(e.e),
            t.j(e.b),
            t.g(e.c),
            t.c(e.d),
            Ye(this.e.d(), this.ba)
        }
    }
    ;
    const ps = class {
        constructor(t, e, i, s) {
            if (this.ba = t,
            this.c = $e(t, [i, s], Object.keys(e), null),
            !this.c)
                throw "Failed to create program"
        }
        a() {
            this.ba.useProgram(this.c.program)
        }
        d() {
            return this.c
        }
    }
    ;
    class _s {
        static e(t) {
            const e = 32767 & t;
            return e < bs.length ? bs[e] : (WH.debug("Unknown shader effect:", e),
            ["PS_Combiners_Opaque", "VS_Diffuse_T1"])
        }
        static f(t, e) {
            let i = "";
            if (-1e3 == t && 3 == e)
                return "Skin";
            if (32768 & t)
                return _s.e(t)[0];
            if (1 == e)
                i = 112 & t ? "PS_Combiners_Mod" : "PS_Combiners_Opaque";
            else {
                i = (112 & t ? "PS_Combiners_Mod" : "PS_Combiners_Opaque") + "_" + (112 & t ? ["Opaque", "Mod", "Mod", "Add", "Mod2x", "Mod", "Mod2xNA", "AddNA"] : ["Opaque", "Mod", "Mod", "AddAlpha", "Mod2x", "Mod", "Mod2xNA", "AddAlpha"])[7 & t]
            }
            return i
        }
        static c(t, e) {
            let i = "";
            if (-1e3 == t && 3 == e)
                i = "T1_T1_T1";
            else {
                if (32768 & t)
                    return _s.e(t)[1];
                i = 1 == e ? 128 & t ? "Env" : 16384 & t ? "T2" : "T1" : 128 & t ? 8 & t ? "Env_Env" : "Env_T1" : 8 & t ? "T1_Env" : 16384 & t ? "T1_T2" : "T1_T1"
            }
            return "VS_Diffuse_" + i
        }
        static d(t, e, i) {
            const s = _s.f(t, e)
              , r = _s.c(t, e)
              , n = "Wow." + r + "_" + s;
            if (ui._GetProgram(n))
                return {
                    name: n
                };
            const a = {
                shaders: [_s.a(r, i), _s.g(r, s, !1)],
                attributes: {
                    position: "aPosition",
                    normal: "aNormal",
                    texcoord0: "aTexCoord0",
                    texcoord1: "aTexCoord1"
                }
            };
            return ui.RegisterProgram(n, a),
            {
                name: n
            }
        }
        static b(t) {
            const e = {}
              , i = {
                texcoord1: function(t, e) {
                    t.INPUT_TEXCOORD1 = "aTexCoord" + e
                }
            };
            for (let s in t.options) {
                const r = t.options[s];
                i[s](e, r)
            }
            return {
                name: "Wow." + t.name,
                config: e
            }
        }
        static h(t) {
            var e = "";
            if (e += "lTexCoord1 = (uTextureMatrix1 * vec4(vTexCoord1, 0, 1)).st;\n",
            e += "lTexCoord2 = (uTextureMatrix2 * vec4(vTexCoord2, 0, 1)).st;\n",
            "VS" === t.slice(0, 2)) {
                let i = (t = t.slice(3)).split("_")
                  , s = i[0];
                if ("Diffuse" === s || "Color" === s) {
                    e = "",
                    i.splice(0, 1);
                    let s = {
                        T1: ["uTextureMatrix1", "vTexCoord1"],
                        T2: ["uTextureMatrix2", "vTexCoord2"],
                        T3: ["", "aTexCoord2"],
                        Env: ["", "texEnv"]
                    }
                      , r = 1;
                    for (let n in i)
                        s[i[n]] ? (s[i[n]][0] && "texEnv" != s[i[n]][1] ? e += "lTexCoord" + r + " = (" + s[i[n]][0] + " * vec4(" + s[i[n]][1] + ", 0, 1)).st;\n" : "texEnv" == s[i[n]][1] ? e += "lTexCoord" + r + " = texEnv;\n" : e += "lTexCoord" + r + " = (uTextureMatrix" + r + " * vec4(" + s[i[n]][1] + ", 0, 1)).st;\n",
                        r++) : WH.debug("Missing vertex shader def?", t)
                }
            }
            return e
        }
        static a(t, e) {
            var i;
            return "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord0;\nattribute vec2 aTexCoord1;\nattribute vec3 aColor;\n" + ((i = {
                SKINNING: e
            }).SKINNING ? "attribute vec4 aBoneWeights;\nattribute vec4 aBones;\n" : "") + "varying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nuniform mat4 uModelMatrix;\nuniform mat4 uPanningMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uInvTranspViewModelMat;\nuniform mat4 uProjMatrix;\nuniform vec3 uCameraPos;\n" + (i.SKINNING ? "uniform sampler2D uBoneMatricesTex;\n#define ROW0_U ((0.5 + 0.0) / 4.)\n#define ROW1_U ((0.5 + 1.0) / 4.)\n#define ROW2_U ((0.5 + 2.0) / 4.)\n#define ROW3_U ((0.5 + 3.0) / 4.)\nconst float numBones = 256.0;\nmat4 getBoneMatrix(float boneNdx) {\nfloat v = (boneNdx + 0.5) / numBones;\nreturn mat4(\ntexture2D(uBoneMatricesTex, vec2(ROW0_U, v)),\ntexture2D(uBoneMatricesTex, vec2(ROW1_U, v)),\ntexture2D(uBoneMatricesTex, vec2(ROW2_U, v)),\ntexture2D(uBoneMatricesTex, vec2(ROW3_U, v))\n);\n}\nhighp mat4 transpose(in highp mat4 inMatrix) {\nhighp vec4 i0 = inMatrix[0];\nhighp vec4 i1 = inMatrix[1];\nhighp vec4 i2 = inMatrix[2];\nhighp vec4 i3 = inMatrix[3];\nhighp mat4 outMatrix = mat4(\nvec4(i0.x, i1.x, i2.x, i3.x),\nvec4(i0.y, i1.y, i2.y, i3.y),\nvec4(i0.z, i1.z, i2.z, i3.z),\nvec4(i0.w, i1.w, i2.w, i3.w)\n);\nreturn outMatrix;\n}\nmat4 inverse(mat4 m) {\nfloat\na00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],\na10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],\na20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],\na30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3],\nb00 = a00 * a11 - a01 * a10,\nb01 = a00 * a12 - a02 * a10,\nb02 = a00 * a13 - a03 * a10,\nb03 = a01 * a12 - a02 * a11,\nb04 = a01 * a13 - a03 * a11,\nb05 = a02 * a13 - a03 * a12,\nb06 = a20 * a31 - a21 * a30,\nb07 = a20 * a32 - a22 * a30,\nb08 = a20 * a33 - a23 * a30,\nb09 = a21 * a32 - a22 * a31,\nb10 = a21 * a33 - a23 * a31,\nb11 = a22 * a33 - a23 * a32,\ndet = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;\nreturn mat4(\na11 * b11 - a12 * b10 + a13 * b09,\na02 * b10 - a01 * b11 - a03 * b09,\na31 * b05 - a32 * b04 + a33 * b03,\na22 * b04 - a21 * b05 - a23 * b03,\na12 * b08 - a10 * b11 - a13 * b07,\na00 * b11 - a02 * b08 + a03 * b07,\na32 * b02 - a30 * b05 - a33 * b01,\na20 * b05 - a22 * b02 + a23 * b01,\na10 * b10 - a11 * b08 + a13 * b06,\na01 * b08 - a00 * b10 - a03 * b06,\na30 * b04 - a31 * b02 + a33 * b00,\na21 * b02 - a20 * b04 - a23 * b00,\na11 * b07 - a10 * b09 - a12 * b06,\na00 * b09 - a01 * b07 + a02 * b06,\na31 * b01 - a30 * b03 - a32 * b00,\na20 * b03 - a21 * b01 + a22 * b00) / det;\n}\n" : "") + "void main(void) {\nmat4 boneTransformMat =  mat4(1.0);\n" + (i.SKINNING ? "if (length(aBoneWeights) > 0.0) {\nboneTransformMat =  mat4(0.0);\nfor (int i = 0; i < 4; i++) {\nboneTransformMat += getBoneMatrix(aBones[i]) * aBoneWeights[i];\n}\n}\nmat4 viewModelMat = uViewMatrix * uModelMatrix * boneTransformMat;\nmat4 invTranspViewModelMat = transpose(inverse(viewModelMat));\n" : "mat4 viewModelMat = uViewMatrix * uModelMatrix;\nmat4 invTranspViewModelMat = uInvTranspViewModelMat;\n") + "vec4 pos = viewModelMat * vec4(aPosition, 1);\nvPosition = pos.rgb;\ngl_Position = uProjMatrix * pos;\nvTexCoord1 = aTexCoord0;\nvTexCoord2 = aTexCoord1;\nvNormal = normalize((invTranspViewModelMat * vec4(aNormal, 0.0)).xyz);\n}\n"
        }
        static g(t, e, i) {
            let s = ms[e];
            s || (WH.debug("Missing pixel shader def", e),
            s = ms[e = "PS_Combiners_Opaque_Mod"]);
            let r = "\t\t" + s.slice(1, s.length).join("\n\t\t");
            for (let t = 0; t < s[0]; t++) {
                let e = t + 1;
                r = "vec4 tex" + t + " = texture2D(uTexture" + e + ", lTexCoord" + e + ".st);\n" + r
            }
            let n = this.h(t);
            var a;
            return "precision mediump float;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying vec2 vTexCoord3;\nvarying vec2 vTexCoord4;\nuniform bool uHasAlpha;\nuniform bool uHasSpecEmiss;\nuniform bool uHasEmissiveGlowing;\nuniform int uBlendMode;\nuniform bool uUnlit;\nuniform vec4 uColor;\nuniform vec4 uAmbientColor;\nuniform vec4 uDiffuseColor;\nuniform vec4 uPrimaryColor;\nuniform vec4 uSecondaryColor;\nuniform vec3 uLightDir1;\nuniform vec3 uLightDir2;\nuniform vec3 uLightDir3;\nuniform mat4 uTextureMatrix1;\nuniform mat4 uTextureMatrix2;\nuniform mat4 uTextureMatrix3;\nuniform mat4 uTextureMatrix4;\nuniform sampler2D uTexture1;\nuniform sampler2D uTexture2;\nuniform sampler2D uTexture3;\nuniform sampler2D uTexture4;\nuniform sampler2D uAlpha;\nuniform vec4 uTexSampleAlpha;\n" + ((a = {
                EXCERPT_TEX_COORD: n,
                EXCERPT_BASE: r,
                GRADIENT: i
            }).GRADIENT ? "uniform vec4 u_gradGradientColors_0;\nuniform vec4 u_gradGradientColors_1;\nuniform vec4 u_gradGradientColors_2;\nuniform vec4 u_gradEdgeColor;\nuniform vec4 u_gradBoundingBox;\nuniform vec4 u_gradUpVec;\nuniform vec4 u_gradFlags;\nuniform vec4 u_mulLum_OpaqMat;\n" : "") + "vec2 sphereMap(vec3 vertex, vec3 normal) {\nvec3 normPos = (normalize(vertex.xyz));\nvec3 reflection = reflect(normPos, normalize(normal));\nreflection = vec3(reflection.x, reflection.y, reflection.z + 1.0);\nvec2 texCoord = ((normalize(reflection).xy * 0.5) + vec2(0.5));\nreturn texCoord;\n}\nvoid main(void) {\nvec2 lTexCoord1 = vec2(0.0);\nvec2 lTexCoord2 = vec2(0.0);\nvec2 lTexCoord3 = vec2(0.0);\nvec4 _output = vec4(1.0);\nvec4 _input = uColor;\nvec3 _specular = vec3(0.0);\nvec2 texEnv = sphereMap(vPosition.xyz,normalize(vNormal.xyz));\n" + (a.EXCERPT_TEX_COORD ? a.EXCERPT_TEX_COORD : "") + (a.EXCERPT_BASE ? a.EXCERPT_BASE : "") + "_output.a = _output.a * uDiffuseColor.a;\nif (uBlendMode == 13) {\n_output.a = _output.a * _input.a;\n} else if (uBlendMode == 1) {\nif (_output.a < (128.0/255.0))\ndiscard;\n_output.a = _input.a;\n} else if (uBlendMode == 0) {\n_output.a = _input.a;\n} else {\n_output.a = _output.a * _input.a;\n}\nif (!uUnlit) {\nvec4 litColor = uAmbientColor;\nvec3 normal = normalize(vNormal);\nfloat dp = max(0.0, dot(normal, uLightDir1));\nlitColor += uPrimaryColor * dp;\ndp = max(0.0, dot(normal, uLightDir2));\nlitColor += uSecondaryColor * dp;\ndp = max(0.0, dot(normal, uLightDir3));\nlitColor += uSecondaryColor * dp;\nlitColor = clamp(litColor, vec4(0,0,0,0), vec4(1,1,1,1));\n_output.rgb *= (litColor * uDiffuseColor).rgb;\n}\n_output += vec4(_specular, 0.0);\n" + (a.GRADIENT ? "float power = u_gradEdgeColor.w;\nfloat midValue = u_gradGradientColors_2.w;\nfloat opaqueMaterial = u_mulLum_OpaqMat.y;\nfloat lum = clamp(dot(_output.xyz, vec3(0.212599993, 0.715200007, 0.0722000003)), 0.0, 1.0);\nfloat val0 = 0.0;\nfloat val1 = midValue;\nif (lum > midValue) {\nval0 = midValue;\nval1 = 1.0;\n}\nfloat lerpValue = clamp(((lum - val0) / (val1 - val0)), 0.0, 1.0);\nvec3 gradColor0 = u_gradGradientColors_0.xyz;\nvec3 gradColor1 = u_gradGradientColors_1.xyz;\nif (lum > midValue) {\ngradColor0 = u_gradGradientColors_1.xyz;\ngradColor1 = u_gradGradientColors_2.xyz;\n}\nvec3 gradientColor = mix(gradColor0, gradColor1, vec3(lerpValue));\nbool flipNormal = ((u_gradGradientColors_0.w > 0.0) && (vNormal.z > 0.0));\nvec3 normal = flipNormal ? -vNormal.xyz : vNormal.xyz;\nvec2 term = vec2(dot(-(vPosition.xyz), normal), dot(normalize(-(vPosition.xyz)), (normal * vec3(0.05, 0.05, 1.0))));\nvec2 invTerm = (vec2(1.0) - clamp(term, 0.0, 1.0));\nvec2 f = (invTerm * invTerm);\nfloat fresnel_rim = pow((f.x + f.y), power);\nbool disableHeightFade = bool(u_gradFlags.x);\nfloat visMod = 0.0;\nvec4 res = _output;\nvec3 distVecTest = vec3(0,0,0);\nif (!(disableHeightFade))\n{\nvec3 distVec = (vPosition - u_gradBoundingBox.xyz);\nfloat _dot = dot(distVec, u_gradUpVec.xyz);\nfloat relHeight = (_dot * u_gradBoundingBox.w);\nbool invertHeightFade = bool(u_gradFlags.w);\ndistVecTest = vec3(relHeight);\nrelHeight = invertHeightFade ? clamp((1.0 - relHeight), 0.0, 1.0) : relHeight;\nfloat visMod = clamp((relHeight * 1.66666663), 0.0, 0.899999976);\nvisMod = (visMod * visMod);\nres = vec4(_output.r, _output.g, _output.b, (_output.w * visMod));\n}\nvec3 lerp = mix(gradientColor, u_gradEdgeColor.xyz, vec3(fresnel_rim));\nfloat multiplyLum = u_mulLum_OpaqMat.x;\nif (bool(multiplyLum))\n{\nres = vec4(lerp.xyz, (res.w * lum));\n}\nelse\n{\nres = vec4(lerp.xyz, res.w);\n}\n_output = mix(_output, res, vec4(u_gradFlags.y));\n_output = vec4(_output.xyz, res.a * _output.a);\n" : "") + "gl_FragColor = _output;\n}\n"
        }
    }
    const bs = [["PS_Combiners_Opaque_Mod2xNA_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_AddAlpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_AddAlpha_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_Add", "VS_Diffuse_T1_Env_T1", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_AddAlpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_AddAlpha", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_AddAlpha", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_AddAlpha_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Alpha_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_3s", "VS_Diffuse_T1_Env_T1", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Opaque_AddAlpha_Wgt", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_Add_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_ModNA_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_AddAlpha_Wgt", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_AddAlpha_Wgt", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_AddAlpha_Wgt", "VS_Diffuse_T1_T2", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod_Add_Wgt", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_UnshAlpha", "VS_Diffuse_T1_Env_T1", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_Dual_Crossfade", "VS_Diffuse_T1", "HS_T1", "DS_T1"], ["PS_Combiners_Mod_Depth", "VS_Diffuse_EdgeFade_T1", "HS_T1", "DS_T1"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_Alpha", "VS_Diffuse_T1_Env_T2", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_Mod", "VS_Diffuse_EdgeFade_T1_T2", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_Masked_Dual_Crossfade", "VS_Diffuse_T1_T2", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Alpha", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_UnshAlpha", "VS_Diffuse_T1_Env_T2", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_Depth", "VS_Diffuse_EdgeFade_Env", "HS_T1", "DS_T1"], ["PS_Guild", "VS_Diffuse_T1_T2_T1", "HS_T1_T2_T3", "DS_T1_T2"], ["PS_Guild_NoBorder", "VS_Diffuse_T1_T2", "HS_T1_T2", "DS_T1_T2_T3"], ["PS_Guild_Opaque", "VS_Diffuse_T1_T2_T1", "HS_T1_T2_T3", "DS_T1_T2"], ["PS_Illum", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_Mod_Mod_Const", "VS_Diffuse_T1_T2_T3", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_Mod_Mod_Const", "VS_Color_T1_T2_T3", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Opaque", "VS_Diffuse_T1", "HS_T1", "DS_T1"], ["PS_Combiners_Mod_Mod2x", "VS_Diffuse_EdgeFade_T1_T2", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod", "VS_Diffuse_EdgeFade_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_Mod_Depth", "VS_Diffuse_EdgeFade_T1_T2", "HS_T1_T2", "DS_T1_T2"]]
      , ms = {
        PS_Combiners_Add: [1, "_output.rgb = _input.rgb + tex0.rgb;", "_output.a = _input.a + tex0.a;"],
        PS_Combiners_Decal: [1, "_output.rgb = mix(_input.rgb, tex0.rgb, _input.a);", "_output.a = _input.a;"],
        PS_Combiners_Fade: [1, "_output.rgb = mix(tex0.rgb, _input.rgb, _input.a);", "_output.a = _input.a;"],
        PS_Combiners_Mod: [1, "_output.rgb = _input.rgb * tex0.rgb;", "_output.a = tex0.a;"],
        PS_Combiners_Mod2x: [1, "_output.rgb = _input.rgb * tex0.rgb * 2.0;", "_output.a = tex0.a * 2.0;"],
        PS_Combiners_Opaque: [1, "_output.rgb = _input.rgb * tex0.rgb;", "_output.a = 1.0;"],
        PS_Combiners_Add_Add: [2, "_output.rgb = (_input.rgb + tex0.rgb) + tex1.rgb;", "_output.a = (_input.a + tex0.a) + tex1.a;"],
        PS_Combiners_Add_Mod: [2, "_output.rgb = (_input.rgb + tex0.rgb) * tex1.rgb;", "_output.a = (_input.a + tex0.a) * tex1.a;"],
        PS_Combiners_Add_Mod2x: [2, "_output.rgb = (_input.rgb + tex0.rgb) * tex1.rgb * 2.0;", "_output.a = (_input.a + tex0.a) * tex1.a * 2.0;"],
        PS_Combiners_Add_Opaque: [2, "_output.rgb = (_input.rgb + tex0.rgb) * tex1.rgb;", "_output.a = _input.a + tex0.a;"],
        PS_Combiners_Mod_AddNA: [2, "_output.rgb = (_input.rgb * tex0.rgb);", "_output.a = tex0.a;", "_specular = tex1.rgb;"],
        PS_Combiners_Mod_Mod: [2, "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb;", "_output.a = tex0.a * tex1.a;"],
        PS_Combiners_Mod_Mod2x: [2, "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb * 2.0;", "_output.a = tex0.a * tex1.a * 2.0;"],
        PS_Combiners_Mod_Add: [2, "_output.rgb = (_input.rgb * tex0.rgb);", "_output.a = tex0.a + tex1.a;", "_specular = tex1.rgb;"],
        PS_Combiners_Mod_Mod2xNA: [2, "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb * 2.0;", "_output.a = tex0.a;"],
        PS_Combiners_Mod_Opaque: [2, "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb;", "_output.a = tex0.a;"],
        PS_Combiners_Mod2x_Add: [2, "_output.rgb = (_input.rgb * tex0.rgb) * 2.0 + tex1.rgb;", "_output.a = (tex0.a) * 2.0 + tex1.a;"],
        PS_Combiners_Mod2x_Mod2x: [2, "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb * 4.0;", "_output.a = (tex0.a) * tex1.a * 4.0;"],
        PS_Combiners_Mod2x_Opaque: [2, "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb * 2.0;", "_output.a = tex0.a * 2.0;"],
        PS_Combiners_Opaque_Add: [2, "_output.rgb = (_input.rgb * tex0.rgb) + tex1.rgb;", "_output.a = _input.a + tex1.a;"],
        PS_Combiners_Opaque_AddAlpha: [2, "_output.rgb = (_input.rgb * tex0.rgb);", "_specular = (tex1.rgb * tex1.a);"],
        PS_Combiners_Opaque_AddAlpha_Wgt: [2, "_output.rgb = (_input.rgb * tex0.rgb);", "_specular = (tex1.rgb * tex1.a) * uTexSampleAlpha.g;"],
        PS_Combiners_Opaque_AddAlpha_Alpha: [2, "_output.rgb = (_input.rgb * tex0.rgb);", "_specular = (tex1.rgb * tex1.a * (1.0 - tex0.a));"],
        PS_Combiners_Opaque_AddNA: [2, "_output.rgb = (_input.rgb * tex0.rgb) + tex1.rgb;", "_output.a = _input.a;"],
        PS_Combiners_Opaque_Mod: [2, "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb;", "_output.a = tex1.a;"],
        PS_Combiners_Opaque_Mod2x: [2, "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb * 2.0;", "_output.a = tex1.a * 2.0;"],
        PS_Combiners_Opaque_Mod2xNA: [2, "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb * 2.0;", ""],
        PS_Combiners_Opaque_Mod2xNA_Alpha: [2, "_output.rgb = _input.rgb * mix(tex0.rgb * tex1.rgb * 2.0, tex0.rgb, vec3(tex0.a));", ""],
        PS_Combiners_Opaque_Opaque: [2, "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb;", ""],
        PS_Combiners_Opaque_Mod2xNA_Alpha_Add: [3, "_output.rgb = _input.rgb * mix(tex0.rgb * tex1.rgb * 2.0, tex0.rgb, vec3(tex0.a));", "_specular = tex2.rgb * tex2.a * uTexSampleAlpha.b;"],
        PS_Combiners_Mod_Mod_Mod_Const: [3, "_output.rgb = _input.rgb * (tex0 * tex1 * tex2).rgb;", "_output.a = (tex0 * tex1 * tex2).a;"],
        PS_Combiners_Mod_AddAlpha: [2, "_output.rgb = (_input.rgb * tex0.rgb);", "_output.a = tex0.a;", "_specular = tex1.rgb * tex1.a;"],
        PS_Combiners_Mod_AddAlpha_Wgt: [2, "_output.rgb = (_input.rgb * tex0.rgb);", "_output.a = tex0.a;", "_specular = tex1.rgb * tex1.a * uTexSampleAlpha.g;"],
        PS_Combiners_Mod_AddAlpha_Alpha: [2, "_output.rgb = _input.rgb * tex0.rgb;", "_output.a = (tex0.a + tex1.a * (0.3 * tex1.r + 0.59 * tex1.g + 0.11 * tex1.b));", "_specular = tex1.rgb * tex1.a * (1.0 - tex0.a);"],
        PS_Combiners_Opaque_Mod_Add_Wgt: [2, "_output.rgb = _input.rgb * mix(tex0.rgb, tex1.rgb, vec3(tex1.a));", "_specular = (tex0.rgb * tex0.a) * uTexSampleAlpha.r;"],
        PS_Guild: [3, "_output.rgb = _input.rgb * mix(tex0.rgb * mix(vec3(1.0, 1.0, 1.0), tex1.rgb * vec3(1.0, 1.0, 1.0), vec3(tex1.a)), tex2.rgb * vec3(1.0, 1.0, 1.0), vec3(tex2.a));", "_output.a = tex0.a;"],
        PS_Guild_Opaque: [3, "_output.rgb = _input.rgb * mix(tex0.rgb * mix(vec3(1.0, 1.0, 1.0), tex1.rgb * vec3(1.0, 1.0, 1.0), vec3(tex1.a)), tex2.rgb * vec3(1.0, 1.0, 1.0), vec3(tex2.a));", ""],
        PS_Guild_NoBorder: [2, "_output.rgb = _input.rgb * tex0.rgb * mix(vec3(1.0, 1.0, 1.0), tex1.rgb * vec3(1.0, 1.0, 1.0), vec3(tex1.a));", "_output.a = tex0.a;"],
        PS_Combiners_Opaque_Alpha_Alpha: [2, "_output.rgb = _input.rgb * mix(mix(tex0.rgb, tex1.rgb, vec3(tex1.a)), tex0.rgb, vec3(tex0.a));", ""],
        PS_Combiners_Opaque_Mod2xNA_Alpha_3s: [3, "_output.rgb = _input.rgb * mix(tex0.rgb * tex1.rgb * 2.0, tex2.rgb, vec3(tex2.a));"],
        PS_Combiners_Mod_Add_Alpha: [2, "_output.rgb = _input.rgb * tex0.rgb;", "_output.a = (tex0.a + tex1.a);", "_specular = tex1.rgb * (1.0 - tex0.a);"],
        PS_Combiners_Opaque_ModNA_Alpha: [2, "_output.rgb = _input.rgb * mix(tex0.rgb * tex1.rgb, tex0.rgb, vec3(tex0.a));", ""],
        PS_Combiners_Opaque_Mod2xNA_Alpha_UnshAlpha: [3, "float glowOpacity = clamp((tex2.a * vec4(1.0, 1.0, 1.0, 1.0).z), 0.0, 1.0); _output.rgb = _input.rgb * mix(tex0.rgb * tex1.rgb * 2.000000, tex0.rgb, vec3(tex0.a)) * (1.0 - glowOpacity);", "_specular = tex2.rgb * glowOpacity;"],
        PS_Combiners_Opaque_Mod2xNA_Alpha_Alpha: [3, "_output.rgb = _input.rgb * mix(mix(tex0.rgb * tex1.rgb * 2.000000, tex2.rgb, vec3(tex2.a)), tex0.rgb, vec3(tex0.a));", ""],
        PS_Combiners_Mod_Depth: [1, "_output.rgb = _input.rgb * tex0.rgb;", "_output.a = tex0.a;"],
        PS_Combiners_Opaque_Alpha: [2, "_output.rgb = _input.rgb * mix(tex0.rgb, tex1.rgb, vec3(tex1.a));", ""],
        Skin: [3, "//Fresnel Rim\r\nif (uHasSpecEmiss) {\r\n    vec3 emissiveColor = tex2.rgb;\r\n    vec3 emissiveTerm = tex2.rgb;\r\n    if (uHasEmissiveGlowing) {\r\n        vec3 eyeVec_120 = vPosition.xyz;\r\n        vec3 t121 = -(eyeVec_120);\r\n        vec2 term_126 = vec2(dot(t121, vNormal), dot(normalize(t121), (vNormal * vec3(0.0500000007, 0.0500000007, 1.0))));\r\n        vec2 invTerm_128 = (vec2(1.0) - clamp(term_126, 0.0, 1.0));\r\n        vec2 f_129 = (invTerm_128 * invTerm_128);\r\n        float fresnel_rim_133 = pow((f_129.x + f_129.y), 0.600000024);\r\n        vec3 t136 = (tex2.rgb /*+ ((vec3(0.0500000007, 0.0, 0.400000006) * 1.0) * fresnel_rim_133)*/);\r\n        emissiveColor = vec3(t136.r, tex2.g, t136.b);\r\n\r\n        float t267 = dot(normalize(vNormal),  normalize(-(vPosition.xyz)));\r\n        emissiveTerm = mix(vec3(0.0), 2.0*emissiveColor, vec3(pow(clamp(t267, 0.0, 1.0), (( 128.0 * (tex2.a)) + 9.99999975e-006))));\r\n    }\r\n\r\n    _output.rgb = _input.rgb * tex0.rgb + tex1.rgb + emissiveTerm.rgb;\r\n} else {\r\n    _output.rgb = _input.rgb * tex0.rgb;\r\n}\r\n_output.a = tex0.a; //\r\n"],
        PS_Combiners_Mod_Dual_Crossfade: [3, "_output.rgb = _input.rgb * mix(mix(tex0, texture2D(uTexture2,vTexCoord1), vec4(clamp(uTexSampleAlpha.g, 0.000000, 1.000000))), texture2D(uTexture3,vTexCoord1), vec4(clamp(uTexSampleAlpha.b, 0.000000, 1.000000))).rgb;", "_output.a = mix(mix(tex0, texture2D(uTexture2,vTexCoord1), vec4(clamp(uTexSampleAlpha.g, 0.000000, 1.000000))), texture2D(uTexture3,vTexCoord1), vec4(clamp(uTexSampleAlpha.b, 0.000000, 1.000000))).a;"],
        PS_Combiners_Mod_Masked_Dual_Crossfade: [4, "_output.rgb = _input.rgb * mix(mix(tex0, texture2D(uTexture2,texCoord), vec4(clamp(uTexSampleAlpha.g, 0.000000, 1.000000))), texture2D(uTexture3,texCoord), vec4(clamp(uTexSampleAlpha.b, 0.000000, 1.000000))).rgb;", "_output.a = mix(mix(tex0, texture2D(uTexture2,texCoord), vec4(clamp(uTexSampleAlpha.g, 0.000000, 1.000000))), texture2D(uTexture3,texCoord), vec4(clamp(uTexSampleAlpha.b, 0.000000, 1.000000))).a * texture(uTexture4,texCoord2).a;"],
        PS_Combiners_Mod_Mod_Depth: [2, "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb;", "_output.a = tex0.a * tex1.a;"]
    }
      , xs = _s;
    const vs = class {
        constructor(t) {
            this.b = t,
            this.a = new Set
        }
        e() {
            const t = this.a;
            return this.a = new Set,
            t
        }
        c(t) {
            this.a.has(t) || (this.b.enableVertexAttribArray(t),
            this.a.add(t))
        }
        d(t) {
            const e = this.b;
            [...t].filter((t => !this.a.has(t))).forEach((t => e.disableVertexAttribArray(t)))
        }
    }
    ;
    const Ts = class {
    }
    ;
    const ws = class {
    }
    ;
    const ys = class extends ws {
    }
    ;
    function As() {
        var t = new fi(4);
        return fi != Float32Array && (t[0] = 0,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0),
        t
    }
    function Es(t, e, i, s) {
        var r = new fi(4);
        return r[0] = t,
        r[1] = e,
        r[2] = i,
        r[3] = s,
        r
    }
    function Cs(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t
    }
    function Ms(t, e, i, s, r) {
        return t[0] = e,
        t[1] = i,
        t[2] = s,
        t[3] = r,
        t
    }
    function Ss(t, e, i) {
        return t[0] = e[0] + i[0],
        t[1] = e[1] + i[1],
        t[2] = e[2] + i[2],
        t[3] = e[3] + i[3],
        t
    }
    function Fs(t, e, i) {
        return t[0] = e[0] - i[0],
        t[1] = e[1] - i[1],
        t[2] = e[2] - i[2],
        t[3] = e[3] - i[3],
        t
    }
    function Is(t, e, i) {
        return t[0] = e[0] * i,
        t[1] = e[1] * i,
        t[2] = e[2] * i,
        t[3] = e[3] * i,
        t
    }
    function Ds(t) {
        var e = t[0]
          , i = t[1]
          , s = t[2]
          , r = t[3];
        return Math.hypot(e, i, s, r)
    }
    function ks(t, e) {
        var i = e[0]
          , s = e[1]
          , r = e[2]
          , n = e[3]
          , a = i * i + s * s + r * r + n * n;
        return a > 0 && (a = 1 / Math.sqrt(a)),
        t[0] = i * a,
        t[1] = s * a,
        t[2] = r * a,
        t[3] = n * a,
        t
    }
    function Rs(t, e, i) {
        var s = e[0]
          , r = e[1]
          , n = e[2]
          , a = e[3];
        return t[0] = i[0] * s + i[4] * r + i[8] * n + i[12] * a,
        t[1] = i[1] * s + i[5] * r + i[9] * n + i[13] * a,
        t[2] = i[2] * s + i[6] * r + i[10] * n + i[14] * a,
        t[3] = i[3] * s + i[7] * r + i[11] * n + i[15] * a,
        t
    }
    var Us = Ds;
    !function() {
        var t = As()
    }();
    const Os = class extends ys {
        constructor(t, e) {
            super(),
            this.j = e,
            this.ed = gi(),
            this.i = _i(0, 0, 0),
            this.f = As(),
            this.g = Es(0, 0, 0, 0),
            this.h = new ss(t,40 * e.length / 4,!0),
            this.ba(e)
        }
        dc(t, e) {
            const i = this.cba;
            let s = this.j.length;
            for (let r = 0; r < s; ++r) {
                if (!e.has(r))
                    continue;
                mi(this.i, 0, 0, 0),
                Ms(this.g, 0, 0, 0, 0);
                const s = this.j[r];
                let n = !1;
                for (let e = 0; e < 4; ++e) {
                    const i = s.f[e] / 255;
                    if (i > 0) {
                        const r = t[s.d[e]];
                        ki(this.ed, s.g, r.q),
                        Rs(this.f, s.c, r.h),
                        this.i[0] = this.i[0] + this.ed[0] * i,
                        this.i[1] = this.i[1] + this.ed[1] * i,
                        this.i[2] = this.i[2] + this.ed[2] * i,
                        this.g[0] = this.g[0] + this.f[0] * i,
                        this.g[1] = this.g[1] + this.f[1] * i,
                        this.g[2] = this.g[2] + this.f[2] * i,
                        n = !0
                    }
                }
                if (n) {
                    let t = 10 * r;
                    i[t++] = this.i[0],
                    i[t++] = this.i[1],
                    i[t++] = this.i[2],
                    i[t++] = this.g[0],
                    i[t++] = this.g[1],
                    i[t++] = this.g[2]
                }
            }
            this.h.b(this.cba)
        }
        ba(t) {
            const e = 40 * t.length / 4;
            this.cba = new Float32Array(e);
            const i = this.cba
              , s = t;
            let r = 0;
            for (let t = 0; t < s.length; ++t)
                i[r++] = s[t].g[0],
                i[r++] = s[t].g[1],
                i[r++] = s[t].g[2],
                i[r++] = s[t].c[0],
                i[r++] = s[t].c[1],
                i[r++] = s[t].c[2],
                i[r++] = s[t].i,
                i[r++] = s[t].a,
                i[r++] = s[t].b,
                i[r++] = s[t].e;
            this.h.b(this.cba)
        }
        b(t) {
            this.h.b(t)
        }
        d() {
            return this.h.d()
        }
        c() {
            this.h.c()
        }
        a() {
            this.h.a()
        }
    }
    ;
    const Ps = class extends ys {
        constructor(t, e) {
            super(),
            this.cba = e,
            this.f = new ss(t,48 * e.length,!0),
            this.ba(e)
        }
        dc(t, e) {}
        ba(t) {
            const e = 48 * t.length;
            this.ed = new Uint8Array(e);
            let i = new DataView(this.ed.buffer);
            const s = t;
            let r = 0;
            for (let t = 0; t < s.length; ++t)
                i.setFloat32(r, s[t].g[0], !0),
                r += 4,
                i.setFloat32(r, s[t].g[1], !0),
                r += 4,
                i.setFloat32(r, s[t].g[2], !0),
                r += 4,
                i.setFloat32(r, s[t].c[0], !0),
                r += 4,
                i.setFloat32(r, s[t].c[1], !0),
                r += 4,
                i.setFloat32(r, s[t].c[2], !0),
                r += 4,
                i.setUint8(r, s[t].d[0]),
                r += 1,
                i.setUint8(r, s[t].d[1]),
                r += 1,
                i.setUint8(r, s[t].d[2]),
                r += 1,
                i.setUint8(r, s[t].d[3]),
                r += 1,
                i.setUint8(r, s[t].f[0]),
                r += 1,
                i.setUint8(r, s[t].f[1]),
                r += 1,
                i.setUint8(r, s[t].f[2]),
                r += 1,
                i.setUint8(r, s[t].f[3]),
                r += 1,
                i.setFloat32(r, s[t].i, !0),
                r += 4,
                i.setFloat32(r, s[t].a, !0),
                r += 4,
                i.setFloat32(r, s[t].b, !0),
                r += 4,
                i.setFloat32(r, s[t].e, !0),
                r += 4;
            this.f.b(this.ed)
        }
        b(t) {
            this.f.b(t)
        }
        d() {
            return this.f.d()
        }
        c() {
            this.f.c()
        }
        a() {
            this.f.a()
        }
    }
    ;
    const Bs = class {
        b() {
            return {}
        }
        a(t) {}
    }
    ;
    const zs = class {
        constructor(t, e) {
            this.e = t,
            this.d = e,
            this.d = 256,
            this.ba = new Float32Array(16 * this.d),
            this.c = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.c),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            t.bindTexture(t.TEXTURE_2D, null)
        }
        b() {
            return {
                uBoneMatricesTex: this.c
            }
        }
        a(t) {
            const e = Math.min(256, t.length);
            for (let i = 0; i < e; i++)
                this.ba.set(t[i].q, 16 * i);
            const i = this.e;
            i.bindTexture(i.TEXTURE_2D, this.c),
            i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, 4, this.d, 0, i.RGBA, i.FLOAT, this.ba),
            i.bindTexture(i.TEXTURE_2D, null)
        }
    }
    ;
    var Ns;
    !function(t) {
        t[t.aPosition = 0] = "aPosition",
        t[t.aNormal = 1] = "aNormal",
        t[t.aTexCoord0 = 2] = "aTexCoord0",
        t[t.aTexCoord1 = 3] = "aTexCoord1"
    }(Ns || (Ns = {}));
    const Ls = {
        aPosition: Ns.aPosition,
        aNormal: Ns.aNormal,
        aTexCoord0: Ns.aTexCoord0,
        aTexCoord1: Ns.aTexCoord1
    }
      , Gs = [new ns(Ns.aPosition,3,rs.GFLOAT,!1,40,0), new ns(Ns.aNormal,3,rs.GFLOAT,!1,40,12), new ns(Ns.aTexCoord0,2,rs.GFLOAT,!1,40,24), new ns(Ns.aTexCoord1,2,rs.GFLOAT,!1,40,32)];
    var js;
    !function(t) {
        t[t.aPosition = 0] = "aPosition",
        t[t.aNormal = 1] = "aNormal",
        t[t.aBones = 2] = "aBones",
        t[t.aBoneWeights = 3] = "aBoneWeights",
        t[t.aTexCoord0 = 4] = "aTexCoord0",
        t[t.aTexCoord1 = 5] = "aTexCoord1"
    }(js || (js = {}));
    const Hs = {
        aPosition: js.aPosition,
        aNormal: js.aNormal,
        aBones: js.aBones,
        aBoneWeights: js.aBoneWeights,
        aTexCoord0: js.aTexCoord0,
        aTexCoord1: js.aTexCoord1
    }
      , qs = [new ns(js.aPosition,3,rs.GFLOAT,!1,48,0), new ns(js.aNormal,3,rs.GFLOAT,!1,48,12), new ns(js.aBones,4,rs.GUNSIGNED_BYTE,!1,48,24), new ns(js.aBoneWeights,4,rs.GUNSIGNED_BYTE,!0,48,28), new ns(js.aTexCoord0,2,rs.GFLOAT,!1,48,32), new ns(js.aTexCoord1,2,rs.GFLOAT,!1,48,40)];
    var Vs;
    !function(t) {
        t[t.aPosition = 0] = "aPosition",
        t[t.aColor = 1] = "aColor",
        t[t.aTexcoord0 = 2] = "aTexcoord0",
        t[t.aTexcoord1 = 3] = "aTexcoord1",
        t[t.aTexcoord2 = 4] = "aTexcoord2",
        t[t.aAlphaCutoff = 5] = "aAlphaCutoff"
    }(Vs || (Vs = {}));
    const Xs = {
        [Vs.aPosition]: Vs.aPosition,
        [Vs.aColor]: Vs.aColor,
        [Vs.aTexcoord0]: Vs.aTexcoord0,
        [Vs.aTexcoord1]: Vs.aTexcoord1,
        [Vs.aTexcoord2]: Vs.aTexcoord2,
        [Vs.aAlphaCutoff]: Vs.aAlphaCutoff
    }
      , Ws = [new ns(Vs.aPosition,3,rs.GFLOAT,!1,56,0), new ns(Vs.aColor,4,rs.GFLOAT,!1,56,12), new ns(Vs.aTexcoord0,2,rs.GFLOAT,!1,56,28), new ns(Vs.aTexcoord1,2,rs.GFLOAT,!1,56,36), new ns(Vs.aTexcoord2,2,rs.GFLOAT,!1,56,44), new ns(Vs.aAlphaCutoff,1,rs.GFLOAT,!1,56,52)];
    var Ys;
    !function(t) {
        t[t.aPosition = 0] = "aPosition",
        t[t.aColor = 1] = "aColor",
        t[t.aTexcoord0 = 2] = "aTexcoord0"
    }(Ys || (Ys = {}));
    const Zs = {
        [Ys.aPosition]: Ys.aPosition,
        [Ys.aColor]: Ys.aColor,
        [Ys.aTexcoord0]: Ys.aTexcoord0
    }
      , Js = [new ns(Ys.aPosition,3,rs.GFLOAT,!1,36,0), new ns(Ys.aColor,4,rs.GFLOAT,!1,36,12), new ns(Ys.aTexcoord0,2,rs.GFLOAT,!1,36,28)];
    const Ks = class {
        constructor(t, e) {
            this.ba = t,
            this.hg = e,
            this.fe = new Map,
            this.ji = new vs(t.j());
            const i = t.j();
            this.lk = i.createTexture(),
            i.bindTexture(i.TEXTURE_2D, this.lk),
            i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])),
            i.bindTexture(i.TEXTURE_2D, null)
        }
        dc() {
            throw new Error("Method not implemented.")
        }
        o() {
            return this.ba
        }
        b(t) {
            return new is(this.ba.j(),t,!1)
        }
        a(t) {
            return this.ba.o ? new Ps(this.ba.j(),t) : new Os(this.ba.j(),t)
        }
        c(t) {
            return new ss(this.ba.j(),t,!0)
        }
        h(t) {
            return new ss(this.ba.j(),t,!0)
        }
        f(t, e) {
            const i = this.ba.fe()
              , s = i ? new os(this.ba.j(),i) : new hs(this.ba.j(),this.ji)
              , r = this.ba.o ? qs : Gs;
            return s.d(t, r),
            s.a(e),
            s
        }
        j(t, e) {
            const i = this.ba.fe()
              , s = i ? new os(this.ba.j(),i) : new hs(this.ba.j(),this.ji);
            return s.a(e),
            s.d(t, Ws),
            s
        }
        l(t, e) {
            const i = this.ba.fe()
              , s = i ? new os(this.ba.j(),i) : new hs(this.ba.j(),this.ji);
            return s.a(e),
            s.d(t, Js),
            s
        }
        m(t, e, i, s) {
            return this.ba.o ? new zs(this.ba.j(),t) : new Bs
        }
        d(t, e, i) {
            const s = xs.f(i.b, i.c.length)
              , r = xs.c(i.b, i.c.length)
              , n = "Wow." + r + "_" + s + (i.d ? "_gradient" : "");
            let a;
            this.fe.has(n) ? a = this.fe.get(n) : (a = new ps(this.ba.j(),this.ba.o ? Hs : Ls,xs.a(r, this.ba.o),xs.g(r, s, i.d)),
            this.fe.set(n, a));
            const o = Object.assign(Object.assign(Object.assign({}, this.hg), t.b()), i.a);
            for (let t = 0; t < Math.max(i.c.length, 4); t++) {
                let e = t < i.c.length ? i.c[t].c : this.lk;
                o["uTexture" + (t + 1).toString()] = e
            }
            return new gs(this.ba.j(),a,e,o)
        }
        k(t, e, i) {
            const s = Object.assign(Object.assign(Object.assign({}, this.hg), t.b()), i.b);
            let r;
            const n = "ParticleShader";
            this.fe.has(n) ? r = this.fe.get(n) : (r = new ps(this.ba.j(),Xs,"attribute vec3 aPosition;\r\nattribute vec4 aColor;\r\nattribute vec2 aTexcoord0;\r\nattribute vec2 aTexcoord1;\r\nattribute vec2 aTexcoord2;\r\nattribute float aAlphaCutoff;\r\n\r\nvarying vec4 vColor;\r\nvarying vec2 vTexcoord0;\r\nvarying vec2 vTexcoord1;\r\nvarying vec2 vTexcoord2;\r\nvarying float vAlphaCutoff;\r\n\r\nuniform mat4 uModelMatrix;\r\nuniform mat4 uViewMatrix;\r\nuniform mat4 uProjMatrix;\r\n\r\nvoid main(void) {\r\n    vec4 pos = vec4(aPosition, 1);\r\n\r\n    gl_Position = uProjMatrix * pos;\r\n\r\n    vColor = aColor;\r\n    vTexcoord0 = aTexcoord0;\r\n    vTexcoord1 = aTexcoord1;\r\n    vTexcoord2 = aTexcoord2;\r\n    vAlphaCutoff = aAlphaCutoff;\r\n}","precision mediump float;\r\n\r\nvarying vec4 vColor;\r\nvarying vec2 vTexcoord0;\r\nvarying vec2 vTexcoord1;\r\nvarying vec2 vTexcoord2;\r\nvarying float vAlphaCutoff;\r\n\r\nuniform bool uHasTexture;\r\nuniform bool uHasTexture2;\r\nuniform bool uHasTexture3;\r\nuniform bool uHasAlpha;\r\nuniform int uBlendMode;\r\nuniform int uPixelShader;\r\nuniform sampler2D uTexture0;\r\nuniform sampler2D uTexture1;\r\nuniform sampler2D uTexture2;\r\nuniform float uAlphaTreshold;\r\n\r\nuniform float alphaMult;\r\nuniform float colorMult;\r\n\r\nvoid main(void) {\r\n    float lo_thresh = 0.01;\r\n    vec4 color = vec4(1, 1, 1, 1);\r\n    vec4 tex = vec4(1, 1, 1, 1);\r\n    vec4 tex2 = vec4(1, 1, 1, 1);\r\n    vec4 tex3 = vec4(1, 1, 1, 1);\r\n    if (uHasTexture) {\r\n        tex = texture2D(uTexture0, vTexcoord0).rgba;\r\n    }\r\n    if (uHasTexture2) {\r\n        tex2 = texture2D(uTexture1, vTexcoord1).rgba;\r\n    }\r\n    if (uHasTexture3) {\r\n        tex3 = texture2D(uTexture2, vTexcoord2).rgba;\r\n    }\r\n    vec4 finalColor = vec4((tex * vColor ).rgb, tex.a*vColor.a );\r\n    vec3 matDiffuse = vec3(1.0);\r\n    float opacity = 1.0;\r\n    if (uPixelShader == 0) {\r\n        matDiffuse = vColor.xyz * tex.rgb;\r\n        opacity = tex.a*vColor.a;\r\n    } else if (uPixelShader == 1) {\r\n        vec4 textureMod = tex*tex2;\r\n        float texAlpha = (textureMod.w * tex3.w);\r\n        opacity = texAlpha*vColor.a;\r\n        matDiffuse = vColor.xyz * 4.0 * textureMod.rgb;\r\n    } else if (uPixelShader == 2) {\r\n        vec4 textureMod = tex*tex2*tex3;\r\n        float texAlpha = (textureMod.w);\r\n        opacity = texAlpha*vColor.a;\r\n        matDiffuse = vColor.xyz * textureMod.rgb;\r\n    } else if (uPixelShader == 3) {\r\n        vec4 textureMod = tex*tex2*tex3;\r\n        float texAlpha = (textureMod.w);\r\n        opacity = texAlpha*vColor.a;\r\n\r\n        matDiffuse = vColor.xyz * textureMod.rgb;\r\n    } else if (uPixelShader == 4) {\r\n        discard;\r\n    }\r\n\r\n    finalColor = vec4(matDiffuse.rgb * colorMult, opacity * alphaMult);\r\n\r\n    if (finalColor.a < vAlphaCutoff ) discard;\r\n    if (finalColor.a < uAlphaTreshold ) discard;\r\n    gl_FragColor = finalColor;\r\n}\r\n"),
            this.fe.set(n, r));
            for (let t = 0; t < i.a.length; t++)
                i.a[t] && (s["uTexture" + t.toString()] = i.a[t].c);
            return new gs(this.ba.j(),r,e,s)
        }
        e(t, e, i) {
            const s = Object.assign(Object.assign(Object.assign({}, this.hg), t.b()), i.a);
            let r;
            const n = "RibbonShader";
            return this.fe.has(n) ? r = this.fe.get(n) : (r = new ps(this.ba.j(),Zs,"attribute vec3 aPosition;\r\nattribute vec4 aColor;\r\nattribute vec2 aTexcoord0;\r\n\r\nuniform mat4 uViewMatrix;\r\nuniform mat4 uProjMatrix;\r\n\r\nvarying vec4 vColor;\r\nvarying vec2 vTexcoord0;\r\n\r\nvoid main() {\r\n    vec4 aPositionVec4 = vec4(aPosition, 1);\r\n    vColor = aColor;\r\n    vTexcoord0 = aTexcoord0;\r\n\r\n    gl_Position = uProjMatrix * uViewMatrix * aPositionVec4;\r\n}\r\n\r\n\r\n","precision mediump float;\r\n\r\nvarying vec4 vColor;\r\nvarying vec2 vTexcoord0;\r\nuniform sampler2D uTexture;\r\n\r\nvoid main() {\r\n    vec4 tex = texture2D(uTexture, vTexcoord0).rgba;\r\n    gl_FragColor = vec4((vColor.rgb*tex.rgb), tex.a * vColor.a );\r\n}\r\n"),
            this.fe.set(n, r)),
            s["uTexture".toString()] = i.b[0].c,
            new gs(this.ba.j(),r,e,s)
        }
        n(t, e, i, s) {
            const r = this.ba.j();
            let n = new Ts;
            return n.f = e,
            n.b = t.b,
            n.h = r.TRIANGLES,
            n.e = t.c,
            n.g = t.a,
            n.c = s,
            n.a = i,
            n
        }
        g(t, e, i, s) {
            const r = this.ba.j();
            let n = new Ts;
            return n.f = e,
            n.b = t.b,
            n.h = r.TRIANGLE_STRIP,
            n.e = t.c,
            n.g = t.a,
            n.c = s,
            n.a = i,
            n
        }
        i(t) {
            const e = this.ba.j()
              , i = e.createTexture();
            function s(t) {
                return 0 == (t & t - 1)
            }
            e.bindTexture(e.TEXTURE_2D, i),
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
            s(t.width) && s(t.height) ? e.generateMipmap(e.TEXTURE_2D) : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR));
            const r = this.ba.dc;
            return r && e.texParameteri(e.TEXTURE_2D, r.TEXTURE_MAX_ANISOTROPY_EXT, this.ba.i),
            i
        }
    }
    ;
    var $s;
    !function(t) {
        t[t.GxBlend_UNDEFINED = -1] = "GxBlend_UNDEFINED",
        t[t.GxBlend_Opaque = 0] = "GxBlend_Opaque",
        t[t.GxBlend_AlphaKey = 1] = "GxBlend_AlphaKey",
        t[t.GxBlend_Alpha = 2] = "GxBlend_Alpha",
        t[t.GxBlend_Add = 3] = "GxBlend_Add",
        t[t.GxBlend_Mod = 4] = "GxBlend_Mod",
        t[t.GxBlend_Mod2x = 5] = "GxBlend_Mod2x",
        t[t.GxBlend_ModAdd = 6] = "GxBlend_ModAdd",
        t[t.GxBlend_InvSrcAlphaAdd = 7] = "GxBlend_InvSrcAlphaAdd",
        t[t.GxBlend_InvSrcAlphaOpaque = 8] = "GxBlend_InvSrcAlphaOpaque",
        t[t.GxBlend_SrcAlphaOpaque = 9] = "GxBlend_SrcAlphaOpaque",
        t[t.GxBlend_NoAlphaAdd = 10] = "GxBlend_NoAlphaAdd",
        t[t.GxBlend_ConstantAlpha = 11] = "GxBlend_ConstantAlpha",
        t[t.GxBlend_Screen = 12] = "GxBlend_Screen",
        t[t.GxBlend_BlendAdd = 13] = "GxBlend_BlendAdd",
        t[t.GxBlend_MAX = 14] = "GxBlend_MAX"
    }($s || ($s = {}));
    const Qs = $s;
    const tr = class {
        constructor(t) {
            this.k = t,
            this.ba = -1,
            this.ji = -1,
            this.r = -1,
            this.t = -1,
            this.hg = -1,
            this.s = Qs.GxBlend_UNDEFINED,
            this.dc = null,
            this.fe = null,
            this.o = null,
            this.l = null,
            this.m = null
        }
        q() {
            this.ba = -1,
            this.ji = -1,
            this.r = -1,
            this.t = -1,
            this.hg = -1,
            this.s = Qs.GxBlend_UNDEFINED,
            this.dc = null,
            this.fe = null,
            this.o = null,
            this.l = null,
            this.m = null
        }
        e(t) {
            this.s != t && (this.n(t),
            this.s = t)
        }
        b(t) {
            const e = t ? 1 : 0;
            e != this.ba && (//this.k.depthMask(t), //删除此代码以防止渲染错误
            this.ba = e)
        }
        d(t) {
            const e = t ? 1 : 0;
            e != this.ji && (t ? this.k.enable(this.k.DEPTH_TEST) : this.k.disable(this.k.DEPTH_TEST),
            this.ji = e)
        }
        j(t) {
            const e = t ? 1 : 0;
            e != this.r && (t ? this.k.enable(this.k.CULL_FACE) : this.k.disable(this.k.CULL_FACE),
            this.r = e)
        }
        c(t) {
            const e = t ? 1 : 0;
            e != this.t && (t ? this.k.frontFace(this.k.CCW) : this.k.frontFace(this.k.CW),
            this.t = e)
        }
        g(t) {
            this.hg != t && (this.k.colorMask((1 & t) > 0, (2 & t) > 0, (4 & t) > 0, (8 & t) > 0),
            this.hg = t)
        }
        h(t) {
            this.fe != t && (t ? t.c() : t.a(),
            this.fe = t)
        }
        i(t) {
            this.dc != t && (t ? t.c() : t.a(),
            this.dc = t)
        }
        f(t) {
            this.o != t && (t ? t.c() : this.o.b(),
            this.o = t,
            this.dc = null,
            this.fe = null)
        }
        a(t) {
            t != this.l && (t && t.a(),
            this.l = t)
        }
        n(t) {
            const e = this.k;
            switch (0 == t ? e.disable(e.BLEND) : (e.enable(e.BLEND),
            e.blendEquation(e.FUNC_ADD)),
            t) {
            case 0:
                break;
            case 1:
                e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ONE);
                break;
            case 2:
                e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE);
                break;
            case 3:
                e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
                break;
            case 4:
                e.blendFuncSeparate(e.DST_COLOR, e.ZERO, e.ONE, e.ONE);
                break;
            case 5:
                e.blendFuncSeparate(e.DST_COLOR, e.SRC_COLOR, e.ONE, e.ONE);
                break;
            case 6:
                e.blendFuncSeparate(e.DST_COLOR, e.ONE, e.ONE, e.ONE);
                break;
            case 10:
                e.blendFunc(e.ONE, e.ONE);
                break;
            case 7:
                e.blendFuncSeparate(e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE, e.ONE);
                break;
            case 8:
                e.blendFuncSeparate(e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE, e.ONE);
                break;
            case 13:
                e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE);
                break;
            default:
                throw 3735927486
            }
        }
        p(t) {
            this.m != t && (t.a(this),
            this.m = t)
        }
    }
    ;
    const er = class {
        constructor(t, e) {
            this.m = t,
            this.h = e,
            this.n = !1,
            this.o = !1,
            this.ba = t.getExtension("OES_vertex_array_object"),
            this.dc = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),
            this.dc ? (this.i = t.getParameter(this.dc.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
            WH.debug("Texture anisotropy enabled", this.i)) : WH.debug("Texture anisotropy disabled (not supported)"),
            this.n = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0,
            this.k = t.getExtension("OES_texture_float"),
            this.o = this.n && null != this.k,
            this.o ? WH.debug("(float texture) Skinning in shader is supported") : WH.debug("(float texture) Skinning in shader is (not supported) "),
            this.l = new Ks(this,e),
            this.g = new tr(t)
        }
        j() {
            return this.m
        }
        fe() {
            return this.ba
        }
        c() {
            return this.l
        }
        d(t) {
            const e = this.g
              , i = this.j();
            e.f(t.b),
            e.p(t.f),
            i.drawElements(t.h, t.g, i.UNSIGNED_SHORT, t.e)
        }
        b() {
            this.g.q()
        }
        a() {
            this.g.f(null)
        }
        e(t) {
            this.b(),
            t.forEach((t => {
                this.d(t)
            }
            )),
            this.a()
        }
    }
    ;
    const ir = class {
        constructor(t, e) {
            this.j = t,
            this.a = e,
            this.c = null,
            this.f = !1,
            this.e = 0,
            this.h = 0,
            0 != e && (this.g = t.options.contentPath + "textures/" + e + WH.WebP.getImageExtension(),
            this.l = new Image,
            this.l.onload = () => {
                this.d();
                model.onLoadedSource();
            }
            ,
            this.l.onerror = () => {
                this.l = null
            }
            ,
            model.onBeforeLoadSource(),
            this.i(this.l, this.g))
        }
        i(t, e) {
            var i = new XMLHttpRequest;
            i.open("GET", e, !0),
            i.responseType = "arraybuffer",
            i.onload = e => {
                var s = new Blob([i.response]);
                t.src = window.URL.createObjectURL(s)
            }
            ,
            i.addEventListener("progress", (t => {
                const i = this.j;
                i && t.lengthComputable && (i.downloads[e] ? i.downloads[e].loaded = t.loaded : i.downloads[e] = {
                    loaded: t.loaded,
                    total: t.total
                },
                i.updateProgress())
            }
            )),
            i.addEventListener("load", ( () => {
                const t = this.j;
                t && (delete t.downloads[e],
                t.updateProgress())
            }
            )),
            i.send()
        }
        k() {
            return this.f
        }
        b() {
            this.c = null
        }
        d() {
            this.e = this.l.width,
            this.h = this.l.height,
            this.c = this.j.renderer.i(this.l),
            this.f = !0,
            this.l = null
        }
    }
      , sr = {
        147259: !0
    }
      , rr = [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 2, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      , nr = {
        2: {
            GeosetType: 15,
            Original: 2,
            Override: 11
        },
        3: {
            GeosetType: 15,
            Original: 3,
            Override: 12
        },
        4: {
            GeosetType: 15,
            Original: 4,
            Override: 13
        },
        5: {
            GeosetType: 15,
            Original: 5,
            Override: 14
        },
        6: {
            GeosetType: 15,
            Original: 6,
            Override: 15
        },
        7: {
            GeosetType: 15,
            Original: 7,
            Override: 16
        },
        8: {
            GeosetType: 15,
            Original: 8,
            Override: 17
        },
        9: {
            GeosetType: 15,
            Original: 9,
            Override: 18
        },
        10: {
            GeosetType: 15,
            Original: 10,
            Override: 19
        },
        11: {
            GeosetType: 12,
            Original: 2,
            Override: 0
        },
        12: {
            GeosetType: 12,
            Original: 3,
            Override: 0
        },
        13: {
            GeosetType: 12,
            Original: 1,
            Override: 5
        },
        14: {
            GeosetType: 12,
            Original: 2,
            Override: 3
        },
        15: {
            GeosetType: 12,
            Original: 2,
            Override: 2
        },
        16: {
            GeosetType: 22,
            Original: 2,
            Override: 1
        },
        17: {
            GeosetType: 22,
            Original: 1,
            Override: 2
        },
        18: {
            GeosetType: 22,
            Original: 1,
            Override: 3
        },
        19: {
            GeosetType: 22,
            Original: 2,
            Override: 3
        },
        20: {
            GeosetType: 12,
            Original: 1,
            Override: 1
        },
        21: {
            GeosetType: 12,
            Original: 1,
            Override: 9
        },
        22: {
            GeosetType: 12,
            Original: 2,
            Override: 10
        },
        23: {
            GeosetType: 12,
            Original: 2,
            Override: 6
        },
        24: {
            GeosetType: 12,
            Original: 1,
            Override: 5
        },
        25: {
            GeosetType: 27,
            Original: 0,
            Override: 1
        },
        26: {
            GeosetType: 27,
            Original: 0,
            Override: 1
        },
        27: {
            GeosetType: 27,
            Original: 0,
            Override: 1
        },
        28: {
            GeosetType: 13,
            Original: 1,
            Override: 0
        },
        31: {
            GeosetType: 12,
            Original: 1,
            Override: 13
        },
        32: {
            GeosetType: 12,
            Original: 2,
            Override: 14
        },
        33: {
            GeosetType: 42,
            Original: 11,
            Override: 1
        },
        38: {
            GeosetType: 20,
            Original: 1,
            Override: 9
        }
    }
      , ar = {
        ITEM: 1,
        HELM: 2,
        SHOULDER: 4,
        NPC: 8,
        CHARACTER: 16,
        HUMANOIDNPC: 32,
        OBJECT: 64,
        ARMOR: 128,
        PATH: 256,
        ITEMVISUAL: 512,
        COLLECTION: 1024
    }
      , or = [0, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 21, 22, 22, 16, 21, 0, 19, 5, 21, 22, 22, 0, 21, 21, 27]
      , hr = [0, 16, 0, 15, 1, 7, 10, 5, 6, 6, 8, 0, 0, 17, 18, 19, 14, 20, 0, 9, 7, 21, 22, 23, 0, 24, 25, 0]
      , lr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      , ur = [0, 2, 0, 4, 128, 128, 128, 128, 128, 128, 128, 0, 0, 1, 1, 1, 128, 1, 0, 128, 128, 1, 1, 1, 0, 1, 1, 2]
      , cr = [13, 14, 15, 16, 17, 88, 89]
      , dr = [8, 9, 10, 11, 12, 86, 87]
      , fr = {
        86: [4, 0, 4, 1, 4, 0, 4, 1],
        85: [84, 0, 84, 1, 84, 0, 84, 1],
        84: [3, 0, 3, 1, 3, 0, 3, 1],
        77: [5, 1, 0, -1, 5, 0, 0, -1],
        76: [10, 0, 1, 1, 10, 0, 1, 1],
        75: [10, 0, 1, 1, 10, 0, 1, 1],
        74: [5, 1, 0, -1, 5, 0, 0, -1],
        73: [5, 1, 0, -1, 5, 0, 0, -1],
        72: [5, 1, 0, -1, 5, 0, 0, -1],
        71: [5, 1, 0, -1, 5, 0, 0, -1],
        37: [7, 0, 7, 1, 7, 0, 7, 1],
        36: [2, 0, 2, 1, 2, 0, 2, 1],
        34: [3, 0, 3, 1, 3, 0, 3, 1],
        33: [5, 1, 0, -1, 5, 0, 0, -1],
        31: [0, -1, 8, 1, 0, -1, 8, 1],
        30: [11, 0, 11, 1, 11, 0, 11, 1],
        29: [10, 0, 10, 1, 10, 0, 10, 1],
        28: [6, 0, 6, 1, 6, 0, 6, 1],
        27: [4, 0, 4, 1, 4, 0, 4, 1],
        26: [24, 0, 24, 1, 24, 0, 24, 1],
        25: [24, 0, 24, 1, 24, 0, 24, 1],
        23: [1, 0, 1, 1, 1, 0, 1, 1],
        15: [5, 0, 5, 1, 5, 0, 5, 1],
        1: [0, -1, 0, -1, 0, -1, 0, 3]
    }
      , gr = {
        21: 26,
        22: 27,
        15: 28,
        17: 26,
        25: 32,
        13: 32,
        23: 33,
        14: 28,
        26: 26
    }
      , pr = {
        0: {
            21: 26,
            22: 27
        },
        1: {
            21: 26,
            22: 27
        },
        2: {
            21: 30,
            22: 31
        },
        3: {
            21: 32,
            22: 33
        },
        4: {
            21: 26,
            22: 27,
            15: 28
        },
        5: {
            21: 26
        },
        6: {
            21: 26,
            22: 27
        },
        7: {
            21: 26,
            22: 27
        },
        8: {
            21: 26,
            22: 27
        },
        9: {
            21: 33,
            22: 28
        }
    }
      , _r = 5300
      , br = "precision mediump float;\r\n\r\nuniform float x;\r\nuniform float y;\r\nuniform float width;\r\nuniform float height;\r\n\r\nattribute vec2 aTextCoord;\r\nvarying vec2 vTextCoords;\r\nvoid main() {\r\n    vTextCoords = aTextCoord;\r\n\r\n    vec2 pos = vec2(\r\n        (x + aTextCoord.x*width)* 2.0 - 1.0,\r\n        (y + aTextCoord.y*height)* 2.0 - 1.0\r\n    );\r\n\r\n    gl_Position = vec4(pos.x, pos.y, 0, 1);\r\n}";
    class mr {
        constructor() {
            this.a = null,
            this.d = null,
            this.b = null
        }
        c() {
            null != this.a && this.a.b(),
            null != this.d && this.d.b(),
            null != this.b && this.b.b()
        }
        e() {
            return !(this.a && !this.a.k()) && (!(this.d && !this.d.k()) && !(this.b && !this.b.k()))
        }
    }
    class xr {
        constructor() {
            this.g = null,
            this.c = null,
            this.e = null,
            this.h = {},
            this.i = new li,
            this.d = null,
            this.f = null
        }
    }
    const vr = {
        uDiffuseTexture: null,
        uSpecularTexture: null,
        uEmissiveTexture: null
    };
    class Tr {
        constructor(t, e, i) {
            this.e = e,
            this.d = i,
            this.h = null,
            this.a = null,
            this.j = null,
            this.n = null,
            this.p = null,
            this.f = !1,
            this.o = t,
            this.p = function(t) {
                let e = t.createTexture();
                t.bindTexture(t.TEXTURE_2D, e),
                t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])),
                t.bindTexture(t.TEXTURE_2D, null);
                let i = t.createTexture();
                t.bindTexture(t.TEXTURE_2D, i),
                t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])),
                t.bindTexture(t.TEXTURE_2D, null);
                let s = new xr;
                return s.d = e,
                s.f = i,
                s.g = $e(t, [br, "precision mediump float;\r\n\r\nvarying vec2 vTextCoords;\r\nuniform sampler2D uDiffuseTexture;\r\nuniform sampler2D uSpecularTexture;\r\nuniform sampler2D uEmissiveTexture;\r\nuniform sampler2D renderResultTexture;\r\nuniform int uBlendMode;\r\nuniform vec2 screenResolution;\r\nuniform int layer;\r\n\r\nuniform float diffuseTexWidth;\r\nuniform float diffuseTexHeight;\r\n\r\nfloat overlayBlend(float a, float b) {\r\n    if (b > 0.5) {\r\n        return (1.0 - (1.0 - 2.0 * (a - 0.5)) * (1.0 - b));\r\n    } else {\r\n        return ((2.0 * a) * b);\r\n    }\r\n}\r\n\r\nfloat alphaStraightBlend(float a, float b, float alpha) {\r\n    return (a * alpha) + (b * (1.0 - alpha));\r\n}\r\n\r\nvoid main() {\r\n    vec2 l_texCoord = vTextCoords.xy;\r\n\r\n\r\n    l_texCoord.x = max(min(l_texCoord.x, (diffuseTexWidth-0.5)/diffuseTexWidth), 0.5/diffuseTexWidth);\r\n    l_texCoord.y = max(min(l_texCoord.y, (diffuseTexHeight-0.5)/diffuseTexHeight), 0.5/diffuseTexHeight);\r\n\r\n    vec4 diffuse = texture2D( uDiffuseTexture, l_texCoord );\r\n    vec4 backGround = texture2D( renderResultTexture, gl_FragCoord.xy / screenResolution );\r\n\r\n    if (uBlendMode == 1) {\r\n        // Blit (we do nothing?)\r\n        //if (diffuse.a < 0.001) discard;\r\n\r\n        //vec4 finalColor = diffuse;\r\n\r\n        //diffuse = vec4(finalColor.rgb, finalColor.a);\r\n    } else if (uBlendMode == 2) {\r\n        // Multiply\r\n        if (diffuse.a < 0.001) discard;\r\n\r\n        vec4 multTexture = diffuse;\r\n        vec3 finalColor = (backGround.rgb * multTexture.rgb);\r\n\r\n        diffuse = vec4(finalColor.rgb, 1.0);\r\n    } else if (uBlendMode == 3) {\r\n        // Overlay\r\n        if (diffuse.a < 0.001) discard;\r\n\r\n        vec4 overlayTex = diffuse;\r\n\r\n        vec3 finalColor = vec3(\r\n            overlayBlend(overlayTex.r, backGround.r),\r\n            overlayBlend(overlayTex.g, backGround.g),\r\n            overlayBlend(overlayTex.b, backGround.b)\r\n        );\r\n\r\n        vec3 mainTexVisible = backGround.rgb * (1.0 - overlayTex.a);\r\n        vec3 overlayTexVisible = finalColor.rgb * (overlayTex.a);\r\n        finalColor = (mainTexVisible + overlayTexVisible);\r\n\r\n        diffuse = vec4(finalColor, backGround.a);\r\n    } else if (uBlendMode == 5) {\r\n        // AlphaStraight\r\n        vec4 overlayTex = diffuse;\r\n\r\n        //float alphaMult = 1.0;\r\n        //vec3 finalColor = vec3(\r\n        //    alphaStraightBlend(overlayTex.r, backGround.r, alphaMult*overlayTex.a),\r\n        //    alphaStraightBlend(overlayTex.g, backGround.g, alphaMult*overlayTex.a),\r\n        //    alphaStraightBlend(overlayTex.b, backGround.b, alphaMult*overlayTex.a)\r\n        //);\r\n        vec3 finalColor = overlayTex.rgb * overlayTex.a + backGround.rgb * (1.0 - overlayTex.a);\r\n\r\n        diffuse = vec4(finalColor.rgb, 1.0);\r\n    } else if (uBlendMode == 0 || uBlendMode == 4 || uBlendMode == 6 || uBlendMode == 7) {\r\n        // default, Screen, InferAlphaBlend, Unknown1\r\n        if (diffuse.a < 0.001) discard;\r\n\r\n        vec3 finalColor = mix(backGround.rgb, diffuse.rgb, diffuse.a);\r\n\r\n        diffuse = vec4(finalColor.rgb, 1.0);\r\n    }\r\n\r\n    gl_FragColor = diffuse;\r\n}"], null, null),
                s.c = $e(t, [br, "precision mediump float;\r\n\r\nvarying vec2 vTextCoords;\r\nuniform sampler2D uDiffuseTexture;\r\nuniform sampler2D uSpecularTexture;\r\nuniform sampler2D uEmissiveTexture;\r\nuniform sampler2D renderResultTexture;\r\nuniform int uBlendMode;\r\n\r\nvoid main() {\r\n    vec4 diffuse = texture2D( uDiffuseTexture, vTextCoords.xy );\r\n    vec4 specular = texture2D( uSpecularTexture, vTextCoords.xy );\r\n    if (diffuse.a < 0.001) discard;\r\n    gl_FragColor = vec4(specular.rgb, 1.0);\r\n}"], null, null),
                s.e = $e(t, [br, "precision mediump float;\r\n\r\nvarying vec2 vTextCoords;\r\nuniform sampler2D uDiffuseTexture;\r\nuniform sampler2D uSpecularTexture;\r\nuniform sampler2D uEmissiveTexture;\r\nuniform sampler2D renderResultTexture;\r\nuniform int uBlendMode;\r\nuniform vec2 screenResolution;\r\nuniform float emissiveAlphaOverride;\r\nuniform int layer;\r\n\r\nvoid main() {\r\n    vec4 diffuse = texture2D( uDiffuseTexture, vTextCoords.xy );\r\n    vec4 emissive = texture2D( uEmissiveTexture, vTextCoords.xy );\r\n    vec4 backGround = texture2D( renderResultTexture, gl_FragCoord.xy / screenResolution );\r\n\r\n    if (diffuse.a < 0.001) discard;\r\n//    if (emissive.a < 0.001) discard;\r\n\r\n    //TODO: This is a hack from what was observed in Nightborne texture customization with tatoos.\r\n    //TODO: But Maybe switch should be over layer or something else instead of blend\r\n    float alpha = 1.0;\r\n\r\n    if (emissiveAlphaOverride > -1.0) {\r\n        alpha = emissiveAlphaOverride;\r\n    } else if (layer <= 1) {\r\n        alpha = 0.0;\r\n    } else {\r\n        alpha = emissive.a;\r\n    }\r\n\r\n    gl_FragColor = vec4(emissive.rgb, alpha);\r\n}"], null, null),
                s.h = {},
                s.j = t.createBuffer(),
                t.bindBuffer(t.ARRAY_BUFFER, s.j),
                t.bufferData(t.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), t.STATIC_DRAW),
                t.bindBuffer(t.ARRAY_BUFFER, null),
                s.a = t.createBuffer(),
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, s.a),
                t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Int16Array([0, 1, 2, 1, 3, 2]), t.STATIC_DRAW),
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null),
                s.k = t.createFramebuffer(),
                s.b = {
                    loc: t.getAttribLocation(s.g.program, "aTextCoord"),
                    type: t.FLOAT,
                    size: 2,
                    offset: 0,
                    stride: 0
                },
                s
            }(t)
        }
        b() {
            let t = this.o;
            this.n || (this.n = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.n),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.e, this.d, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR)),
            this.h || (this.h = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.h),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.e, this.d, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR)),
            this.a || (this.a = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.a),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.e, this.d, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR)),
            this.j || (this.j = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.j),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.e, this.d, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
            t.bindTexture(t.TEXTURE_2D, null)),
            t.bindFramebuffer(t.FRAMEBUFFER, this.p.k),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.h, 0),
            t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.a, 0),
            t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.j, 0),
            t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
            t.useProgram(this.p.c.program),
            t.bindBuffer(t.ARRAY_BUFFER, this.p.j),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.p.a),
            this.p.i.disableAll(),
            this.p.i.enable(t, [this.p.b]),
            t.viewport(0, 0, this.e, this.d)
        }
        m(t, e, i, s, r, n, a, o) {
            let h = this.o;
            this.p.h.x = e,
            this.p.h.y = i,
            this.p.h.width = s,
            this.p.h.height = r,
            this.p.h.diffuseTexWidth = t.a.e,
            this.p.h.diffuseTexHeight = t.a.h,
            null == t.d && null == t.b || (this.f = !0);
            let l = 0;
            1 == n ? l = 1 : 4 == n ? l = 2 : 6 == n ? l = 3 : 7 == n ? l = 4 : 9 == n ? l = 5 : 15 == n ? l = 6 : 16 == n && (l = 7),
            this.p.h.uBlendMode = l,
            this.p.h.screenResolution = new Float32Array([this.e, this.d]),
            this.p.h.uDiffuseTexture = null != t.a ? t.a.c : this.p.d,
            this.p.h.uSpecularTexture = null != t.d ? t.d.c : this.p.d,
            this.p.h.uEmissiveTexture = null != t.b ? t.b.c : this.p.f,
            this.p.h.renderResultTexture = null != this.n ? this.n : this.p.d,
            this.p.h.layer = a,
            this.p.h.emissiveAlphaOverride = o,
            h.disable(h.CULL_FACE),
            h.disable(h.DEPTH_TEST),
            h.disable(h.BLEND),
            h.useProgram(this.p.g.program),
            h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, this.h, 0),
            h.bindTexture(h.TEXTURE_2D, this.n),
            h.copyTexImage2D(h.TEXTURE_2D, 0, h.RGBA, 0, 0, this.e, this.d, 0),
            h.bindTexture(h.TEXTURE_2D, null),
            Ye(this.p.g, this.p.h),
            h.drawElements(h.TRIANGLES, 6, h.UNSIGNED_SHORT, 0),
            Ye(this.p.g, vr),
            h.useProgram(this.p.c.program),
            h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, this.a, 0),
            h.bindTexture(h.TEXTURE_2D, this.n),
            h.copyTexImage2D(h.TEXTURE_2D, 0, h.RGBA, 0, 0, this.e, this.d, 0),
            h.bindTexture(h.TEXTURE_2D, null),
            Ye(this.p.c, this.p.h),
            h.drawElements(h.TRIANGLES, 6, h.UNSIGNED_SHORT, 0),
            Ye(this.p.c, vr),
            h.useProgram(this.p.e.program),
            h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, this.j, 0),
            h.bindTexture(h.TEXTURE_2D, this.n),
            h.copyTexImage2D(h.TEXTURE_2D, 0, h.RGBA, 0, 0, this.e, this.d, 0),
            h.bindTexture(h.TEXTURE_2D, null),
            Ye(this.p.e, this.p.h),
            h.drawElements(h.TRIANGLES, 6, h.UNSIGNED_SHORT, 0),
            Ye(this.p.e, vr),
            h.useProgram(null)
        }
        l() {
            let t = this.o;
            t.bindFramebuffer(t.FRAMEBUFFER, null),
            t.bindTexture(t.TEXTURE_2D, null),
            t.enable(t.CULL_FACE),
            t.enable(t.DEPTH_TEST)
        }
        i(t) {
            if (0 == t)
                return this.h;
            if (1 == t)
                return this.a;
            if (2 == t)
                return this.j;
            throw new Error("unknown usage " + t)
        }
        g(t) {
            let e = null;
            return e = {
                c: t,
                e: this.e,
                h: this.d,
                f: !0
            },
            e
        }
        c() {
            let t = this.o;
            this.n && t.deleteTexture(this.n),
            this.h && t.deleteTexture(this.h),
            this.a && t.deleteTexture(this.a),
            this.j && t.deleteTexture(this.j),
            this.h = null,
            this.a = null,
            this.j = null,
            this.n = null,
            this.p = null,
            this.o = null
        }
        k(t) {
            switch (t) {
            case 0:
                return this.g(this.h);
            case 1:
                return this.g(this.a);
            case 2:
                return this.g(this.j);
            default:
                return null
            }
        }
    }
    function wr() {
        var t = new fi(2);
        return fi != Float32Array && (t[0] = 0,
        t[1] = 0),
        t
    }
    function yr(t, e) {
        var i = new fi(2);
        return i[0] = t,
        i[1] = e,
        i
    }
    function Ar(t, e, i) {
        return t[0] = e,
        t[1] = i,
        t
    }
    function Er(t, e, i) {
        return t[0] = e[0] * i[0],
        t[1] = e[1] * i[1],
        t
    }
    function Cr(t, e, i) {
        return t[0] = e[0] * i,
        t[1] = e[1] * i,
        t
    }
    !function() {
        var t = wr()
    }();
    function Mr() {
        var t = new fi(9);
        return fi != Float32Array && (t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[5] = 0,
        t[6] = 0,
        t[7] = 0),
        t[0] = 1,
        t[4] = 1,
        t[8] = 1,
        t
    }
    function Sr(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[4],
        t[4] = e[5],
        t[5] = e[6],
        t[6] = e[8],
        t[7] = e[9],
        t[8] = e[10],
        t
    }
    function Fr(t, e, i) {
        var s = e[0]
          , r = e[1]
          , n = e[2]
          , a = e[3]
          , o = e[4]
          , h = e[5]
          , l = e[6]
          , u = e[7]
          , c = e[8]
          , d = i[0]
          , f = i[1]
          , g = i[2]
          , p = i[3]
          , _ = i[4]
          , b = i[5]
          , m = i[6]
          , x = i[7]
          , v = i[8];
        return t[0] = d * s + f * a + g * l,
        t[1] = d * r + f * o + g * u,
        t[2] = d * n + f * h + g * c,
        t[3] = p * s + _ * a + b * l,
        t[4] = p * r + _ * o + b * u,
        t[5] = p * n + _ * h + b * c,
        t[6] = m * s + x * a + v * l,
        t[7] = m * r + x * o + v * u,
        t[8] = m * n + x * h + v * c,
        t
    }
    function Ir() {
        var t = new fi(4);
        return fi != Float32Array && (t[0] = 0,
        t[1] = 0,
        t[2] = 0),
        t[3] = 1,
        t
    }
    function Dr(t, e, i) {
        i *= .5;
        var s = Math.sin(i);
        return t[0] = s * e[0],
        t[1] = s * e[1],
        t[2] = s * e[2],
        t[3] = Math.cos(i),
        t
    }
    function kr(t, e, i, s) {
        var r, n, a, o, h, l = e[0], u = e[1], c = e[2], d = e[3], f = i[0], g = i[1], p = i[2], _ = i[3];
        return (n = l * f + u * g + c * p + d * _) < 0 && (n = -n,
        f = -f,
        g = -g,
        p = -p,
        _ = -_),
        1 - n > di ? (r = Math.acos(n),
        a = Math.sin(r),
        o = Math.sin((1 - s) * r) / a,
        h = Math.sin(s * r) / a) : (o = 1 - s,
        h = s),
        t[0] = o * l + h * f,
        t[1] = o * u + h * g,
        t[2] = o * c + h * p,
        t[3] = o * d + h * _,
        t
    }
    var Rr, Ur, Or, Pr, Br, zr, Nr = Cs, Lr = Ms, Gr = ks;
    Rr = gi(),
    Ur = _i(1, 0, 0),
    Or = _i(0, 1, 0),
    Pr = Ir(),
    Br = Ir(),
    zr = Mr();
    class jr {
        constructor() {
            this.d = -1,
            this.a = null,
            this.e = 0,
            this.b = -1,
            this.c = !1
        }
    }
    class Hr {
        constructor() {
            this.f = new jr,
            this.e = new jr,
            this.d = new jr,
            this.b = 0,
            this.c = 1,
            this.a = !1
        }
    }
    class qr {
        e() {
            var t = this;
            if (t.c)
                for (var e = 0; e < t.c.length; ++e)
                    t.c[e] = null;
            return t.j = null,
            t.c = null,
            null
        }
        i(t, e, i, s) {
            let r = this;
            if (null == s && (s = this.k()),
            this.g >= 0 && (t = this.g < e.length ? e[this.g] : e[0]),
            0 != r.a || r.c.length > 1) {
                if (r.j.length > 1) {
                    for (var n = -1, a = r.j.length - 1, o = 0; o < a; ++o)
                        if (t >= r.j[o] && t <= r.j[o + 1]) {
                            n = o;
                            break
                        }
                    if (-1 == n && (n = r.j.length - 1),
                    1 == r.a) {
                        var h = r.j[n]
                          , l = r.j[n + 1]
                          , u = 0;
                        return t > l ? (u = 1,
                        console.log("time > t2")) : h != l && (u = (t - h) / (l - h)),
                        u = Math.max(0, Math.min(1, u)),
                        r.f(r.c[n], r.c[n + 1], u, s)
                    }
                    return s = r.l(s, r.c[n])
                }
                return r.c.length > 0 ? s = r.l(s, r.c[0]) : i
            }
            return 0 == r.c.length ? s : s = r.l(s, r.c[0])
        }
        h(t) {
            var e, i = this;
            i.a = t.getInt16(),
            i.g = t.getInt16(),
            i.b = t.getBool();
            var s = t.getInt32();
            for (i.j = new Array(s),
            e = 0; e < s; ++e)
                i.j[e] = t.getInt32();
            var r = t.getInt32();
            for (i.c = new Array(r),
            e = 0; e < r; ++e)
                i.c[e] = i.d(t)
        }
    }
    class Vr extends qr {
        constructor(t) {
            super();
            this.ba = gi(),
            this.h(t)
        }
        k() {
            return gi()
        }
        f(t, e, i, s) {
            return Di(s, t, e, i)
        }
        l(t, e) {
            return bi(t, e),
            t
        }
        d(t) {
            return mi(gi(), t.getFloat(), t.getFloat(), t.getFloat())
        }
    }
    class Xr extends qr {
        constructor(t) {
            super();
            this.h(t),
            this.ba = Ir()
        }
        k() {
            return Ir()
        }
        f(t, e, i, s) {
            return kr(s, t, e, i)
        }
        l(t, e) {
            return Nr(t, e),
            t
        }
        d(t) {
            let e = t.getFloat()
              , i = t.getFloat()
              , s = t.getFloat()
              , r = t.getFloat();
            const n = Lr(Ir(), -e, -i, -s, r);
            return Gr(n, n),
            n
        }
    }
    class Wr extends qr {
        constructor(t) {
            super();
            this.h(t)
        }
        d(t) {
            return t.getUint16()
        }
        k() {
            return 0
        }
        f(t, e, i, s) {
            return t + (e - t) * i
        }
        l(t, e) {
            return e
        }
    }
    class Yr extends Wr {
        d(t) {
            return t.getFloat()
        }
    }
    class Zr extends Wr {
        d(t) {
            return t.getUint8()
        }
    }
    class Jr {
        f() {
            for (var t = this, e = 0; e < t.h.length; ++e)
                t.h[e] = null;
            return t.i = null,
            t.h = null,
            t.c = null,
            null
        }
        j(t, e, i, s) {
            let r = this;
            i || (i = this.d());
            let n = s || r.h;
            if (r.h.length > 1 && r.i.length > 1) {
                for (var a = -1, o = r.i.length, h = 0; h < o - 1; ++h)
                    if (t >= r.i[h] && t <= r.i[h + 1]) {
                        a = h;
                        break
                    }
                -1 == a && (a = r.i.length - 1);
                var l = r.i[a]
                  , u = r.i[a + 1]
                  , c = 0;
                return l != u && (c = (t - l) / (u - l)),
                r.b(n[a], n[a + 1], c, i)
            }
            return n.length > 0 ? i = r.e(i, n[0]) : e
        }
        g(t) {
            var e, i = this, s = t.getInt32();
            for (i.i = new Array(s),
            e = 0; e < s; ++e)
                i.i[e] = t.getInt16() / 32767;
            var r = t.getInt32();
            for (i.h = new Array(r),
            e = 0; e < r; ++e)
                i.h[e] = i.a(t)
        }
    }
    class Kr extends Jr {
        constructor(t) {
            super();
            this.ba = wr(),
            this.g(t)
        }
        d() {
            return wr()
        }
        b(t, e, i, s) {
            return r = s,
            a = e,
            o = i,
            h = (n = t)[0],
            l = n[1],
            r[0] = h + o * (a[0] - h),
            r[1] = l + o * (a[1] - l),
            r;
            var r, n, a, o, h, l
        }
        e(t, e) {
            var i, s;
            return s = e,
            (i = t)[0] = s[0],
            i[1] = s[1],
            t
        }
        a(t) {
            return Ar(wr(), t.getFloat(), t.getFloat())
        }
    }
    class $r extends Jr {
        constructor(t) {
            super();
            this.g(t)
        }
        d() {
            return gi()
        }
        b(t, e, i, s) {
            return Di(s, t, e, i)
        }
        e(t, e) {
            return bi(t, e),
            t
        }
        a(t) {
            return mi(gi(), t.getFloat(), t.getFloat(), t.getFloat())
        }
    }
    class Qr extends Jr {
        constructor(t) {
            super();
            this.g(t)
        }
        d() {
            return 0
        }
        b(t, e, i, s) {
            return t + (e - t) * i
        }
        e(t, e) {
            return t
        }
        a(t) {
            return t.getUint16()
        }
    }
    class tn {
        constructor(t, e) {
            this.b(t, e)
        }
        b(t, e) {
            var i = t.getInt32();
            this.a = new Array(i);
            for (let s = 0; s < i; ++s)
                this.a[s] = new e(t)
        }
        d(t) {
            return !(!this.a || 0 == this.a.length) && (t >= this.a.length && (t = 0),
            this.a[t].b)
        }
        c(t, e, i, s) {
            if (!this.a || 0 == this.a.length)
                return i;
            let r = t.e.d;
            r >= this.a.length && (r = 0);
            let n = this.a[r].i(t.e.e, e, i, s);
            if (t.b > 0 && t.b < 1) {
                let s = this.a[0].k()
                  , r = t.d.d;
                r >= this.a.length && (r = 0);
                let a = this.a[r].i(t.d.e, e, i, s);
                a || (a = s),
                s = this.a[0].k(),
                n = a
            }
            return n
        }
        e() {
            if (this.a && 0 != this.a.length) {
                for (var t = 0; t < this.a.length; ++t)
                    this.a[t].e(),
                    this.a[t] = null;
                return null
            }
        }
    }
    function en(t, e) {
        return Es(t[4 * e + 0], t[4 * e + 1], t[4 * e + 2], 0)
    }
    function sn(t, e, i) {
        for (let s = 0; s < 4; s++)
            t[4 * e + s] = i[s]
    }
    const rn = class {
        constructor(t, e, i) {
            this.m = t,
            this.i = i,
            this.z = null,
            this.n = null,
            this.a = null,
            this.k = Bi(),
            this.f = Bi(),
            this.d = Bi();
            const s = this;
            s.p = e,
            s.c = gi(),
            s.q = Bi(),
            s.t = Bi(),
            s.h = Bi(),
            s.o = gi(),
            s.A = Ir(),
            s.e = Bi(),
            s.v = !1,
            s.w = !1,
            s.l = !1
        }
        j() {
            var t = this;
            t.c = null,
            t.q = null,
            t.o = null,
            t.A = null,
            t.e = null
        }
        x() {
            this.v = !0;
            for (var t = 0; t < 16; ++t)
                this.q[t] = 0
        }
        g(t) {
            t ? (null == this.z && (this.z = new Hr),
            this.m.aI(t, this.z)) : this.z = null;
            let e = this.m.F[this.p];
            for (let i = 0; i < e.length; i++)
                this.m.aJ[e[i]].g(t)
        }
        y(t) {
            t ? (null == this.n && (this.n = new Hr),
            this.m.aI(t, this.n)) : this.n = null;
            let e = this.m.F[this.p];
            for (let i = 0; i < e.length; i++)
                this.m.aJ[e[i]].y(t)
        }
        r(t) {
            const e = this.i;
            var i = this;
            if (i.v)
                return void i.x();
            if (null != this.z && this.m.aG(this.z, t),
            i.w || i.l)
                return;
            if (i.w = !0,
            !i.m)
                return;
            Li(i.q);
            var s = i.m.r;
            if (!s)
                return;
            let r = this.f;
            if (Li(r),
            Hi(r, r, this.m.aO.viewMatrix),
            Hi(r, r, this.m.O),
            Hi(i.q, i.q, r),
            e.a > -1) {
                i.m.aJ[e.a].r(t);
                let s = this.d;
                if (zi(s, i.m.aJ[e.a].q),
                Hi(s, r, s),
                1 & e.i || 2 & e.i || 4 & e.i) {
                    if (4 & e.i && 2 & e.i)
                        sn(s, 0, en(r, 0)),
                        sn(s, 1, en(r, 1)),
                        sn(s, 2, en(r, 2));
                    else if (4 & e.i) {
                        {
                            let t = en(r, 0)
                              , e = Ds(t);
                            Is(t, t, Ds(en(s, 0)) / e),
                            sn(s, 0, t)
                        }
                        {
                            let t = en(r, 1)
                              , e = Ds(t);
                            Is(t, t, Ds(en(s, 1)) / e),
                            sn(s, 1, t)
                        }
                        {
                            let t = en(r, 2)
                              , e = Ds(t);
                            Is(t, t, Ds(en(s, 2)) / e),
                            sn(s, 2, t)
                        }
                    } else if (2 & e.i) {
                        {
                            let t = en(r, 0);
                            Is(t, t, 1 / Ds(en(s, 0))),
                            Is(t, t, Ds(en(r, 0))),
                            sn(s, 0, t)
                        }
                        {
                            let t = en(r, 1);
                            Is(t, t, 1 / Ds(en(s, 1))),
                            Is(t, t, Ds(en(r, 1))),
                            sn(s, 1, t)
                        }
                        {
                            let t = en(r, 2);
                            Is(t, t, 1 / Ds(en(s, 2))),
                            Is(t, t, Ds(en(r, 2))),
                            sn(s, 2, t)
                        }
                    }
                    if (1 & e.i)
                        sn(s, 3, en(r, 3));
                    else {
                        let t = Es(e.e[0], e.e[1], e.e[2], 1)
                          , n = As();
                        Cs(n, t),
                        n[3] = 0;
                        let a = As()
                          , o = As();
                        Rs(a, t, i.m.aJ[i.i.a].q),
                        Rs(a, a, r),
                        Rs(o, n, s),
                        Fs(a, a, o),
                        a[3] = 1,
                        sn(s, 3, a)
                    }
                }
                let n = this.k;
                ji(n, r),
                Hi(s, n, s),
                Hi(i.q, i.q, s)
            }
            let n = null;
            if (null != this.z) {
                let t = this.s(this.z);
                this.m.u || (this.b = t),
                this.m.y || (n = this.m.u ? this.b : t)
            } else {
                let t = this.s(s);
                this.m.u || (this.b = t),
                this.m.y || (n = this.m.u ? this.b : t)
            }
            let a = null;
            if (null != this.n) {
                let t = this.s(this.n);
                this.m.u || (this.u = t),
                a = this.m.u ? this.u : t
            }
            let o = null != n || null != a
              , h = Bi();
            o && (null != n && Hi(h, h, n),
            null != a && Hi(h, h, a)),
            null != this.a && (qi(h, h, this.i.e),
            Hi(h, h, this.a),
            qi(h, h, Mi(this.o, this.i.e))),
            Hi(i.q, i.q, h);
            let l = 120 & e.i;
            if (l) {
                let t = Bi();
                zi(t, i.q);
                let e = i.q
                  , s = gi();
                Ji(s, i.q);
                let r = As();
                if (16 == l) {
                    let t = en(i.q, 0);
                    Is(t, t, 1 / pi(t)),
                    sn(i.q, 0, t);
                    let s = Es(e[4], -e[0], 0, 0);
                    sn(e, 1, ks(s, s)),
                    Ii(r, s, t),
                    r[3] = 0,
                    sn(e, 2, r)
                } else if (l > 16) {
                    if (32 == l) {
                        let t = en(e, 1);
                        Is(t, t, 1 / Ds(t)),
                        sn(i.q, 1, t);
                        let s = Es(-e[5], e[1], 0, 0);
                        sn(e, 0, ks(s, s)),
                        r[3] = 0,
                        sn(e, 2, r)
                    } else if (64 == l) {
                        let t = en(e, 2);
                        ks(t, t),
                        sn(e, 2, t);
                        let i = Es(t[1], -t[0], 0, 0);
                        ks(i, i),
                        sn(e, 1, i),
                        Ii(r, t, i),
                        r[3] = 0,
                        sn(e, 0, r)
                    }
                } else if (8 == l) {
                    let t = this.m.isMirrored;
                    if (o) {
                        let i = en(h, 0);
                        i = Es(i[1], i[2], -i[0], 0),
                        ks(i, i),
                        sn(e, 0, i);
                        let s = en(h, 1);
                        s = Es(t ? -s[1] : s[1], t ? -s[2] : s[2], t ? s[0] : -s[0], 0),
                        ks(s, s),
                        sn(e, 1, s);
                        let r = en(h, 2);
                        r = Es(r[1], r[2], -r[0], 0),
                        ks(r, r),
                        sn(e, 2, r)
                    } else {
                        sn(e, 0, Es(0, 0, -1, 0)),
                        sn(e, 1, Es(t ? -1 : 1, 0, 0, 0)),
                        sn(e, 2, Es(0, 1, 0, 0))
                    }
                }
                let n = Es(this.i.e[0], this.i.e[1], this.i.e[2], 1)
                  , a = Es(this.i.e[0], this.i.e[1], this.i.e[2], 0)
                  , u = en(e, 0)
                  , c = en(e, 1)
                  , d = en(e, 2);
                Is(u, u, s[0]),
                Is(c, c, s[1]),
                Is(d, d, s[2]),
                sn(e, 0, u),
                sn(e, 1, c),
                sn(e, 2, d),
                Rs(n, n, t),
                Rs(a, a, e);
                let f = As();
                Fs(f, n, a),
                f[3] = 1,
                sn(e, 3, f)
            }
            ji(r, r),
            Hi(i.q, r, i.q),
            ji(i.t, i.q),
            Gi(i.h, i.t),
            ki(i.c, i.i.e, i.q)
        }
        s(t) {
            const e = this.i;
            var i = e.d.d(t.e.d)
              , s = e.b.d(t.e.d)
              , r = e.h.d(t.e.d);
            if (0 != (640 & e.i)) {
                let y = Bi();
                return Li(y),
                qi(y, y, this.i.e),
                i && (this.o = e.d.c(t, this.m.C),
                qi(y, y, this.o)),
                s && (this.A = e.b.c(t, this.m.C, Ir()),
                n = this.e,
                a = this.A,
                o = a[0],
                h = a[1],
                l = a[2],
                u = a[3],
                g = o * (c = o + o),
                p = h * c,
                _ = h * (d = h + h),
                b = l * c,
                m = l * d,
                x = l * (f = l + l),
                v = u * c,
                T = u * d,
                w = u * f,
                n[0] = 1 - _ - x,
                n[1] = p + w,
                n[2] = b - T,
                n[3] = 0,
                n[4] = p - w,
                n[5] = 1 - g - x,
                n[6] = m + v,
                n[7] = 0,
                n[8] = b + T,
                n[9] = m - v,
                n[10] = 1 - g - _,
                n[11] = 0,
                n[12] = 0,
                n[13] = 0,
                n[14] = 0,
                n[15] = 1,
                Hi(y, y, this.e)),
                r && (this.o = e.h.c(t, this.m.C),
                Vi(y, y, this.o)),
                qi(y, y, Mi(this.o, this.i.e)),
                y
            }
            var n, a, o, h, l, u, c, d, f, g, p, _, b, m, x, v, T, w;
            return null
        }
    }
    ;
    const nn = class {
        constructor(t) {
            this.b = t,
            this.d = 267320826 ^ t;
            let e = new ArrayBuffer(4);
            this.c = new DataView(e)
        }
        e() {
            let t = this.d;
            return t ^= t << 13,
            t ^= t >> 17,
            t ^= t << 5,
            this.d = t,
            t
        }
        f() {
            let t, e = this.e();
            return this.c.setInt32(0, 1065353216 | 8388607 & e),
            t = 2147483648 & e ? 2 - this.c.getFloat32(0) : this.c.getFloat32(0) - 2,
            t
        }
        a() {
            let t = this.e();
            return this.c.setInt32(0, 1065353216 | 8388607 & t),
            this.c.getFloat32(0) - 1
        }
    }
    ;
    const an = class {
        constructor() {
            this.a = 0,
            this.h = 0,
            this.f = 0,
            this.e = 0,
            this.i = gi(),
            this.j = 0,
            this.g = 0,
            this.c = 0,
            this.d = 0,
            this.b = 0
        }
    }
    ;
    const on = class {
        constructor(t, e) {
            this.c = t,
            this.d = e,
            this.i = new an
        }
        f() {
            return this.i.e + this.c.f() * this.d.J
        }
        e() {
            return this.i.e + this.d.J
        }
        a() {
            return this.i.f + this.d.N
        }
        h(t) {
            return this.i.f + 30518509e-12 * t * this.d.N
        }
        g() {
            let t = this.i.a;
            return t *= 1 + this.i.h * this.c.f(),
            t
        }
        k() {
            return this.i
        }
        b(t) {
            bi(t, this.i.i)
        }
    }
    ;
    const hn = class extends on {
        j(t, e) {
            let i, s = e * this.c.a(), r = this.c.f();
            i = r < 1 ? r > -1 ? Math.trunc(32767 * r + .5) : -32767 : 32767,
            t.a = i;
            let n = this.h(i);
            n < .001 && (n = .001),
            t.c = function(t, e) {
                let i = Math.abs(t)
                  , s = Math.abs(e);
                return Number((i - Math.floor(i / s) * s).toPrecision(8)) * Math.sign(t)
            }(s, n),
            t.e = 65535 & this.c.e(),
            mi(t.d, this.c.f() * this.i.g * .5, this.c.f() * this.i.c * .5, 0);
            let a = this.g()
              , o = this.i.j;
            if (o < .001) {
                let e = this.i.d * this.c.f()
                  , i = this.i.b * this.c.f()
                  , s = Math.sin(e)
                  , r = Math.sin(i)
                  , n = Math.cos(e)
                  , o = Math.cos(i);
                mi(t.f, o * s * a, r * s * a, n * a)
            } else {
                let e = gi();
                bi(e, t.d),
                e[2] = e[2] - o,
                pi(e) > 1e-4 && (Si(e, e),
                Ai(t.f, e, a))
            }
        }
    }
    ;
    const ln = class extends on {
        constructor(t, e, i) {
            super(t, e),
            this.ba = i
        }
        j(t, e) {
            let i, s = e * this.c.a(), r = this.c.f();
            i = r < 1 ? r > -1 ? Math.trunc(32767 * r + .5) : -32767 : 32767,
            t.a = i;
            let n = this.h(i);
            n < .001 && (n = .001),
            t.c = function(t, e) {
                let i = Math.abs(t)
                  , s = Math.abs(e);
                return Number((i - Math.floor(i / s) * s).toPrecision(8)) * Math.sign(t)
            }(s, n),
            t.e = 65535 & this.c.e();
            let a = this.i.c - this.i.g
              , o = this.i.g + a * this.c.a()
              , h = this.i.d * this.c.f()
              , l = this.i.b * this.c.f()
              , u = Math.cos(h)
              , c = _i(u * Math.cos(l), u * Math.sin(l), Math.sin(h));
            Ai(t.d, c, o);
            let d = this.g()
              , f = this.i.j
              , g = _i(.5, .5, .5);
            0 == f ? this.ba ? mi(g, 0, 0, 1) : mi(g, u * Math.cos(l), u * Math.sin(l), Math.sin(h)) : (mi(g, 0, 0, f),
            vi(g, t.d, g),
            pi(g) > 1e-4 && Si(g, g)),
            Ai(t.f, g, d)
        }
    }
    ;
    const un = class {
        constructor() {
            this.d = gi(),
            this.c = 0,
            this.f = gi(),
            this.a = 0,
            this.e = 2147483647 * Math.random() >> 0,
            this.g = [wr(), wr()],
            this.b = [wr(), wr()]
        }
    }
    ;
    const cn = class {
        constructor(t, e, i, s, r, n) {
            this.b = t,
            this.d = e,
            this.a = i,
            this.f = s,
            this.e = r,
            this.c = n
        }
    }
    ;
    const dn = class {
        constructor(t, e, i) {
            this.b = t,
            this.c = e,
            this.a = i
        }
    }
    ;
    let fn = new Array(128);
    for (let t = 0; t < 128; t++)
        fn[t] = Math.random();
    const gn = Ni(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      , pn = 1e3;
    class _n {
    }
    class bn {
        constructor() {
            this.b = gi(),
            this.c = 0,
            this.a = {
                b: wr(),
                d: gi(),
                f: 0,
                a: 0,
                e: 1,
                c: 0
            }
        }
    }
    function mn(t) {
        return Es((t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t >> 0 & 255) / 255, (t >> 24 & 255) / 255)
    }
    const xn = [0, 0, 1, 2, 3, 4];
    const vn = class {
        constructor(t, e) {
            this.ah = t,
            this.aj = e,
            this.Q = null,
            this.af = 0,
            this.ap = !0,
            this.C = null,
            this.S = (new Date).getTime(),
            this.p = e,
            this.L = Bi(),
            this.G = Bi(),
            this.T = Bi(),
            this.an = Bi(),
            this.g = As(),
            this.d = Mr(),
            this.ai = gi(),
            this.I = 1,
            this.O = gi(),
            this.au = 0,
            this.l = gi(),
            this.w = gi(),
            this.X = [],
            this.ad = gi(),
            this.Z = 0,
            this.e = 0,
            this.ag = 0,
            this.r = 0,
            this.K = gi(),
            this.N = gi(),
            this.am = 0,
            this.n = 0,
            this.ao = 0,
            this.Y = 0,
            this.o = 0,
            this.h = 0,
            this.M = 0,
            this.b = [],
            this.R = [];
            for (let t = 0; t < pn; t++)
                this.R.push(4 * t + 0),
                this.R.push(4 * t + 1),
                this.R.push(4 * t + 2),
                this.R.push(4 * t + 3),
                this.R.push(4 * t + 2),
                this.R.push(4 * t + 1);
            switch (this.y = new nn(2147483647 * Math.random() >> 0),
            this.p.r) {
            case 1:
                this.F = new hn(this.y,e);
                break;
            case 2:
                this.F = new ln(this.y,e,0 != (256 & this.p.e));
                break;
            default:
                this.F = null,
                WH.debug("Found unimplemented generator ", this.p.r)
            }
            const i = this.p.Z - this.p.T;
            0 != i ? (this.e = (this.p.aa - this.p.u) / i,
            this.ag = this.p.u - this.p.T * this.e) : (this.e = 0,
            this.ag = 0);
            let s = this.p.x;
            s <= 0 && (s = 1);
            let r = this.p.c;
            r <= 0 && (r = 1),
            this.n = s * r - 1,
            this.ao = 0;
            let n = s
              , a = -1;
            do {
                ++a,
                n >>= 1
            } while (n);
            if (this.Y = a,
            this.o = s - 1,
            this.ao = 0,
            (32768 & this.p.e) > 0) {
                let t = (this.n + 1) * this.y.e();
                this.ao = t / 4294967296 | 0
            }
            this.h = 1 / s,
            this.M = 1 / r;
            let o = !1;
            (269484032 & this.p.e) > 0 ? (o = 0 != (1 & this.p.e >> 28),
            this.Z = o ? 2 : 3) : this.Z = 0;
            let h = !1
              , l = !1;
            (268435456 & this.p.e) > 0 ? l = (1073741824 & this.p.e) > 0 : 0 == (1048576 & this.p.e) && (h = 0 == (1 & this.p.e)),
            2 == this.Z || 4 == this.Z && o ? this.ac = l ? 3 : 2 : 3 == this.Z ? this.ac = 5 : this.ac = h ? 1 : 0,
            this.P = e.q > 1,
            this.al = this.ah.H.c(224e3),
            this.m = this.ah.H.b(8e3),
            this.J = this.ah.H.j(this.al, this.m)
        }
        aq() {
            var t = this;
            t.p.k = null,
            t.p.Q = null,
            t.p.O = null,
            t.p.P = t.p.P.e(),
            t.p.p = t.p.p.e(),
            t.p.H = t.p.H.e(),
            t.p.K = t.p.K.e(),
            t.p.i = t.p.i.e(),
            t.p.a = t.p.a.e(),
            t.p.o = t.p.o.e(),
            t.p.R = t.p.R.e(),
            t.p.W = t.p.W.e(),
            t.p.F = t.p.F.e(),
            t.p.Y = t.p.Y.e(),
            t.p.w = t.p.w.f(),
            t.p.M = t.p.M.f(),
            t.p.A = t.p.A.f(),
            t.p.z = t.p.z.f(),
            t.p.g = t.p.g.f(),
            t.X = null
        }
        v(t) {
            const e = this.aj;
            e.b >= 11 && e.b <= 13 && t && (this.at = [As(), As(), As()],
            Cs(this.at[0], mn(t.Start[e.b - 11])),
            Cs(this.at[1], mn(t.Mid[e.b - 11])),
            Cs(this.at[2], mn(t.End[e.b - 11])))
        }
        z(t) {
            this.Q = t
        }
        as() {
            if (this.C)
                return;
            this.ah.aO.context;
            if (!this.ae)
                if (this.ae = [null, null, null],
                0 != (268435456 & this.p.e))
                    for (let t = 0; t < this.p.f.length; t++) {
                        const e = this.p.f[t];
                        e > -1 && e < this.ah.aD.length && (this.ae[t] = this.ah.aD[e])
                    }
                else
                    this.p.C > -1 && this.p.C < this.ah.aD.length && (this.ae[0] = this.ah.aD[this.p.C]);
            let t = !0;
            for (let e of this.ae)
                t = t && (!e || e.c && e.c.f);
            if (!t)
                return;
            const e = this.ah.H;
            let i = this.p.q;
            4 == i && (i = 3);
            let s = {};
            s.uViewMatrix = this.ah.aO.viewMatrix,
            s.uProjMatrix = this.ah.aO.projMatrix,
            s.uBlendMode = this.p.q,
            s.uPixelShader = xn[this.ac],
            s.colorMult = this.Q ? this.Q.a : 1,
            s.alphaMult = this.Q ? this.Q.c : 1;
            let r = [this.ae[0] && this.ae[0].c && this.ae[0].c.f, this.ae[1] && this.ae[1].c && this.ae[1].c.f, this.ae[2] && this.ae[2].c && this.ae[2].c.f];
            s.uTexture = this.ae[0].c.c,
            s.uTexture2 = r[1] ? this.ae[1].c.c : null,
            s.uTexture3 = r[2] ? this.ae[2].c.c : null,
            s.uHasTexture = r[0] ? 1 : 0,
            s.uHasTexture2 = r[1] ? 1 : 0,
            s.uHasTexture3 = r[2] ? 1 : 0;
            let n = -1;
            1 == i ? n = .501960814 : i > 1 && (n = 1 / 255),
            s.uAlphaTreshold = n;
            const a = e.k(this.ah.I, new cn(!1,!this.ah.aH,i,!0,!1,15), new cs(this.ae.map((t => t && t.c)),s));
            this.C = e.n(new dn(this.J,0,0), a, 0, this.p.U)
        }
        W(t, e) {
            if (!this.F)
                return;
            let i = Bi()
              , s = this.F.k()
              , r = !0;
            this.p.Y.d(t.e.d) && (r = this.p.Y.c(t, this.ah.C) > 0),
            this.s = r;
            const n = _i(0, 0, 0);
            r && (s.a = this.p.P.c(t, this.ah.C, 0),
            s.h = this.p.p.c(t, this.ah.C, 0),
            s.d = this.p.H.c(t, this.ah.C, 0),
            s.b = this.p.K.c(t, this.ah.C, 0),
            this.p.i.c(t, this.ah.C, n, s.i),
            s.f = this.p.a.c(t, this.ah.C, 0),
            s.e = this.p.o.c(t, this.ah.C, 0),
            s.c = this.p.W.c(t, this.ah.C, 0),
            s.g = this.p.R.c(t, this.ah.C, 0),
            this.Q ? s.j = this.Q.b : s.j = this.p.F.c(t, this.ah.C, 0)),
            Hi(i, i, this.ah.O),
            Hi(i, i, this.ah.aJ[this.p.d].q);
            let a = Bi();
            var o, h;
            o = a,
            h = _i(this.p.k[0], this.p.k[1], this.p.k[2]),
            o[0] = 1,
            o[1] = 0,
            o[2] = 0,
            o[3] = 0,
            o[4] = 0,
            o[5] = 1,
            o[6] = 0,
            o[7] = 0,
            o[8] = 0,
            o[9] = 0,
            o[10] = 1,
            o[11] = 0,
            o[12] = h[0],
            o[13] = h[1],
            o[14] = h[2],
            o[15] = 1,
            Hi(i, i, a),
            Hi(i, i, gn);
            let l = Bi()
              , u = gi();
            ji(l, this.ah.aO.viewMatrix),
            Zi(u, l),
            this.U(e, i, u, null, this.ah.aO.viewMatrix),
            this.E(this.ah.aO.viewMatrix),
            this.al.b(new Float32Array(this.b)),
            this.m.b(new Uint16Array(this.R)),
            this.C && (this.C.g = 6 * this.af >> 0,
            this.C.e = 0)
        }
        j(t) {
            if (this.X.length <= 0)
                return;
            if (this.C || this.as(),
            !this.C)
                return;
            if (!t && this.C.f.b() > Qs.GxBlend_AlphaKey)
                return;
            this.ah.H.o().d(this.C)
        }
        V(t, e) {
            if (0 == (16 & this.p.e))
                for (let i = 0; i < this.X.length; i++) {
                    const s = this.X[i];
                    ki(s.d, s.d, t),
                    Ri(s.f, s.f, e)
                }
        }
        U(t, e, i, s, r) {
            if (null == this.F)
                return;
            if (this.ah.u)
                return;
            Zi(this.O, this.L);
            let n = As();
            Zi(n, e),
            n[3] = 1,
            Rs(n, n, r),
            this.au = n[2];
            let a = gi();
            if (Zi(a, r),
            this.ak(e, a, s),
            t > 0) {
                let e = gi();
                if (Zi(e, this.L),
                16384 & this.p.e) {
                    vi(this.w, e, this.O);
                    let i = this.e * (pi(this.w) / t) + this.ag;
                    i >= 0 && (i = Math.min(i, 1)),
                    Ai(this.l, this.w, i)
                }
                if (64 & this.p.e) {
                    this.r += t;
                    let i = .03;
                    if (this.r > i)
                        if (this.r = 0,
                        0 == this.X.length) {
                            let t = i / this.r
                              , s = gi();
                            vi(s, e, this.O);
                            let r = t * this.p.L;
                            Ti(this.K, s, _i(r, r, r))
                        } else
                            mi(this.K, 0, 0, 0)
                }
                this.x(t)
            }
        }
        ak(t, e, i) {
            if (bi(this.N, e),
            null == i || 16 & this.p.e)
                zi(this.L, t);
            else {
                let e = Bi();
                ji(e, i),
                Hi(this.L, e, t)
            }
            let s = gi();
            Ji(s, t),
            this.I = s[0]
        }
        x(t) {
            if ((t = Math.max(t, 0)) < .1)
                bi(this.l, this.w);
            else {
                let e = Math.floor(t / .1);
                t = -.1 * e + t;
                let i = Math.min(Math.floor(this.F.k().f / .1), e)
                  , s = i + 1
                  , r = 1;
                r = s < 0 ? (1 & s | s >> 1) + (1 & s | s >> 1) : s,
                Ai(this.l, this.w, 1 / r);
                for (let t = 0; t < i; t++)
                    this.k(.1)
            }
            this.k(t)
        }
        k(t) {
            let e = new _n;
            if (t < 0)
                return;
            this.p.e,
            this.i(e, t),
            this.a(t);
            let i = 0;
            for (; i < this.X.length; ) {
                let s = this.X[i];
                s.c = s.c + t,
                s.c > Math.max(this.F.h(s.e), .001) ? (this.t(i),
                i--) : this.aa(s, t, e) || (this.t(i),
                i--),
                i++
            }
        }
        i(t, e) {
            t.c = gi(),
            t.b = gi(),
            t.d = gi(),
            t.a = 0;
            let i = _i(e, e, e)
              , s = e * e * .5
              , r = _i(s, s, s);
            Ti(t.c, this.p.n, i);
            let n = gi();
            this.F.b(n),
            Ti(t.b, n, i),
            Ti(t.d, n, r),
            t.a = this.p.v * e
        }
        a(t) {
            if (!this.s && this.ap)
                return;
            let e = this.F.f();
            for (this.am = this.am + t * e; this.am > 1; )
                this.A(t),
                this.am -= 1
        }
        A(t) {
            let e = this.ar();
            if (this.F.j(e, t),
            !(16 & this.p.e)) {
                let t = Es(e.d[0], e.d[1], e.d[2], 1)
                  , i = Es(e.f[0], e.f[1], e.f[2], 0);
                Rs(t, t, this.L),
                Rs(i, i, this.L),
                bi(e.d, t),
                bi(e.f, i),
                8192 & this.p.e && (e.d[2] = 0)
            }
            if (64 & this.p.e) {
                let t = 1 + this.F.k().h * this.y.f()
                  , i = gi();
                Ai(i, this.K, t),
                xi(e.f, e.f, i)
            }
            if (this.Z >= 2)
                for (let t = 0; t < 2; t++) {
                    e.g[t][0] = this.y.a(),
                    e.g[t][1] = this.y.a();
                    let n = wr();
                    Cr(n, this.p.D[t], this.y.f()),
                    i = e.b[t],
                    s = n,
                    r = this.p.V[t],
                    i[0] = s[0] + r[0],
                    i[1] = s[1] + r[1]
                }
            var i, s, r
        }
        ar() {
            let t = new un;
            return this.X.push(t),
            t
        }
        t(t) {
            this.X.splice(t, 1)
        }
        aa(t, e, i) {
            if (this.Z >= 2)
                for (let i = 0; i < 2; i++) {
                    let s = t.g[i][0] + e * t.b[i][0];
                    t.g[i][0] = s - Math.floor(s),
                    s = t.g[i][1] + e * t.b[i][1],
                    t.g[i][1] = s - Math.floor(s)
                }
            xi(t.f, t.f, i.c),
            16384 & this.p.e && 2 * e < t.c && xi(t.d, t.d, this.l);
            let s = _i(e, e, e)
              , r = gi();
            if (Ti(r, t.f, s),
            xi(t.f, t.f, i.b),
            Ai(t.f, t.f, 1 - i.a),
            xi(t.d, t.d, r),
            xi(t.d, t.d, i.d),
            2 == this.p.r && 128 & this.p.e) {
                let e = gi();
                if (bi(e, t.d),
                16 & this.p.e) {
                    if (Fi(e, r) > 0)
                        return !1
                } else {
                    let i = gi();
                    if (Zi(i, this.L),
                    vi(e, t.d, i),
                    Fi(e, r) > 0)
                        return !1
                }
            }
            return !0
        }
        E(t) {
            if (this.b.length = 0,
            0 == this.X.length && null != this.F)
                return;
            ji(this.T, t),
            Sr(Mr(), t),
            this.av(null, t);
            let e = 0;
            for (let t = 0; t < this.X.length; t++) {
                let i = this.X[t]
                  , s = new bn;
                if (this.q(i, s) && (131072 & this.p.e && (this.B(i, s),
                e++),
                262144 & this.p.e && (this.f(i, s),
                e++)),
                e >= pn)
                    break
            }
            this.af = e
        }
        av(t, e) {
            var i, s, r;
            16 & this.p.e ? Hi(this.an, e, this.L) : null != t ? Hi(this.an, e, t) : zi(this.an, e),
            Zi(this.g, e),
            4096 & this.p.e && (Sr(this.d, this.an),
            16 & this.p.e && Math.abs(this.I) > 0 && (i = this.d,
            s = this.d,
            r = 1 / this.I,
            i[0] = s[0] * r,
            i[1] = s[1] * r,
            i[2] = s[2] * r,
            i[3] = s[3] * r,
            i[4] = s[4] * r,
            i[5] = s[5] * r,
            i[6] = s[6] * r,
            i[7] = s[7] * r,
            i[8] = s[8] * r),
            mi(this.ai, this.d[6], this.d[7], this.d[8]),
            Ci(this.ai) <= 2.3841858e-7 ? mi(this.ai, 0, 0, 1) : Si(this.ai, this.ai))
        }
        u(t) {
            let e = 0
              , i = 0;
            if (0 != this.p.I || 0 != this.p.G) {
                let s = new nn(t.e);
                e = 0 == this.p.X ? this.p.I : this.p.I + s.f() * this.p.X,
                i = 0 == this.p.G ? this.p.t : this.p.t + s.f() * this.p.G
            } else
                e = this.p.I,
                i = this.p.t;
            return {
                deltaSpin: i,
                baseSpin: e
            }
        }
        q(t, e) {
            let i = this.p.B
              , s = this.p.l
              , r = s[0]
              , n = s[1] - r
              , a = 0
              , o = t.e
              , h = t.c;
            if ((i < 1 || 0 != n) && (a = 127 & h * this.p.m + o),
            i < fn[a])
                return 0;
            this.c(t, e, o);
            let l = n * fn[a] + r;
            Cr(e.a.b, e.a.b, l),
            32 & this.p.e && Cr(e.a.b, e.a.b, this.I);
            let u = Es(t.d[0], t.d[1], t.d[2], 1);
            return Rs(u, u, this.an),
            bi(e.b, u),
            e.c = 1,
            1
        }
        c(t, e, i) {
            let s = t.c / this.F.a()
              , r = new nn(i);
            Math.min(s, 1) <= 0 ? s = 0 : s >= 1 && (s = 1);
            let n = _i(255, 255, 255)
              , a = yr(1, 1)
              , o = 1
              , h = e.a;
            this.p.w.j(s, n, h.d, this.at),
            this.at || Ai(h.d, h.d, 1 / 255),
            this.p.A.j(s, a, h.b),
            h.e = this.p.M.j(s, 32767) / 32767,
            this.Q ? h.c = this.Q.d.j(s, 0) / 32767 : h.c = 0;
            let l = 0;
            this.p.z.i.length > 0 ? (o = 0,
            h.f = this.p.z.j(s, o),
            h.f = this.n & h.f + this.ao) : 65536 & this.p.e ? (l = (this.n + 1) * r.e(),
            h.f = l / 4294967296 | 0) : h.f = 0,
            o = 0,
            h.a = this.p.g.j(s, o),
            h.a = h.a + this.ao & this.n;
            let u = 1;
            524288 & this.p.e ? (u = Math.max(1 + r.f() * this.p.y[1], 99999997e-12),
            h.b[0] = Math.max(1 + r.f() * this.p.y[0], 99999997e-12) * h.b[0]) : (u = Math.max(1 + r.f() * this.p.y[0], 99999997e-12),
            h.b[0] = u * h.b[0]),
            h.b[1] = u * h.b[1]
        }
        B(t, e) {
            let i = yr((e.a.f & this.o) * this.h, (e.a.f >> this.Y) * this.M)
              , s = 0
              , r = 0
              , n = this.u(t);
            s = n.baseSpin,
            r = n.deltaSpin;
            let a = 0
              , o = _i(0, 0, 0)
              , h = _i(0, 0, 0)
              , l = !1
              , u = !1;
            if (4 & this.p.e && Ci(t.f) > 2.3841858e-7)
                if (a = 1,
                4096 & this.p.e)
                    l = !0;
                else {
                    let i = Es(-t.f[0], -t.f[1], -t.f[2], 0);
                    Rs(i, i, this.an);
                    let s = gi();
                    bi(s, i);
                    let r = 0
                      , n = Ci(s);
                    r = n <= 2.3841858e-7 ? 0 : 1 / Math.sqrt(n);
                    let a = gi();
                    bi(a, s),
                    Ai(a, a, r),
                    bi(o, a),
                    Ai(o, o, e.a.b[0]),
                    h = _i(a[1], -a[0], 0),
                    Ai(h, h, e.a.b[1]),
                    u = !0,
                    l = !1
                }
            if ((4096 & this.p.e || l) && !u) {
                let i = Mr();
                c = i,
                d = this.d,
                c[0] = d[0],
                c[1] = d[1],
                c[2] = d[2],
                c[3] = d[3],
                c[4] = d[4],
                c[5] = d[5],
                c[6] = d[6],
                c[7] = d[7],
                c[8] = d[8];
                let n = e.a.b[0];
                if (a) {
                    let s = 0
                      , r = _i(-t.f[0], -t.f[1], -t.f[2])
                      , a = Ci(r);
                    s = a <= 2.3841858e-7 ? 0 : 1 / Math.sqrt(a),
                    Fr(i, this.d, function(t, e, i, s, r, n, a, o, h) {
                        var l = new fi(9);
                        return l[0] = t,
                        l[1] = e,
                        l[2] = i,
                        l[3] = s,
                        l[4] = r,
                        l[5] = n,
                        l[6] = a,
                        l[7] = o,
                        l[8] = h,
                        l
                    }(r[0] * s, r[1] * s, 0, -r[1] * s, r[0] * s, 0, 0, 0, 1)),
                    s > 2.3841858e-7 && (n = e.a.b[0] * (1 / Math.sqrt(Ci(t.f)) / s))
                }
                if (this.Z,
                mi(o, i[0], i[1], i[2]),
                Ai(o, o, n),
                mi(h, i[3], i[4], i[5]),
                Ai(h, h, e.a.b[1]),
                r = h[0],
                u = !0,
                0 != this.p.t || 0 != this.p.G) {
                    let e = s + r * t.c;
                    512 & this.p.e && 1 & t.e && (e = -e);
                    let i = gi();
                    bi(i, this.ai),
                    this.Z;
                    let n = Mr()
                      , a = Ir();
                    Dr(a, i, e),
                    function(t, e) {
                        var i = e[0]
                          , s = e[1]
                          , r = e[2]
                          , n = e[3]
                          , a = i + i
                          , o = s + s
                          , h = r + r
                          , l = i * a
                          , u = s * a
                          , c = s * o
                          , d = r * a
                          , f = r * o
                          , g = r * h
                          , p = n * a
                          , _ = n * o
                          , b = n * h;
                        t[0] = 1 - c - g,
                        t[3] = u - b,
                        t[6] = d + _,
                        t[1] = u + b,
                        t[4] = 1 - l - g,
                        t[7] = f - p,
                        t[2] = d - _,
                        t[5] = f + p,
                        t[8] = 1 - l - c
                    }(n, a),
                    Ri(o, o, n),
                    mi(h, r, h[1], h[2]),
                    Ri(h, h, n)
                }
            }
            var c, d;
            if (!u)
                if (0 != this.p.t || 0 != this.p.G) {
                    let i = s + r * t.c;
                    512 & this.p.e && 1 & t.e && (i = -i);
                    let n = Math.cos(i)
                      , a = Math.sin(i);
                    mi(o, n, a, 0),
                    Ai(o, o, e.a.b[0]),
                    mi(h, -a, n, 0),
                    Ai(h, h, e.a.b[1]),
                    134217728 & this.p.e && xi(e.b, e.b, _i(h[0], h[1], 0))
                } else
                    mi(o, e.a.b[0], 0, 0),
                    mi(h, 0, e.a.b[1], 0);
            return this.H(o, h, e.b, e.a.d, e.a.e, e.a.c, i[0], i[1], t.g),
            0
        }
        f(t, e) {
            let i = yr((e.a.a & this.o) * this.h, (e.a.a >> this.Y) * this.M)
              , s = _i(0, 0, 0)
              , r = _i(0, 0, 0)
              , n = this.p.j;
            1024 & this.p.e && (n = Math.min(t.c, n));
            let a = As();
            Ai(a, t.f, -1),
            a[3] = 0,
            Rs(a, a, this.an),
            Ai(a, a, n);
            let o = _i(a[0], a[1], 0);
            if (Fi(o, o) > 1e-4) {
                let t = 1 / pi(o);
                Cr(e.a.b, e.a.b, t),
                Er(o, o, e.a.b),
                r = _i(-o[1], o[0], 0),
                Ai(s, a, .5),
                xi(e.b, e.b, s)
            } else
                s = _i(.05 * e.a.b[0], 0, 0),
                r = _i(0, .05 * e.a.b[1], 0);
            return this.H(s, r, e.b, e.a.d, e.a.e, e.a.c, i[0], i[1], t.g),
            1
        }
        H(t, e, i, s, r, n, a, o, h) {
            const l = [-1, -1, 1, 1]
              , u = [1, -1, 1, -1]
              , c = [0, 0, 1, 1]
              , d = [0, 1, 0, 1];
            let f = gi()
              , g = wr()
              , p = wr()
              , _ = wr();
            for (let b = 0; b < 4; b++)
                mi(f, 0, 0, 0),
                Ei(f, f, t, l[b]),
                Ei(f, f, e, u[b]),
                xi(f, f, i),
                Ar(g, c[b] * this.h + a, d[b] * this.M + o),
                Ar(p, c[b] * this.p.s[0] + h[0][0], d[b] * this.p.s[0] + h[0][1]),
                Ar(_, c[b] * this.p.s[1] + h[1][0], d[b] * this.p.s[1] + h[1][1]),
                this.b.push(f[0]),
                this.b.push(f[1]),
                this.b.push(f[2]),
                this.b.push(s[0]),
                this.b.push(s[1]),
                this.b.push(s[2]),
                this.b.push(r),
                this.b.push(g[0]),
                this.b.push(g[1]),
                this.b.push(p[0]),
                this.b.push(p[1]),
                this.b.push(_[0]),
                this.b.push(_[1]),
                this.b.push(n)
        }
    }
    ;
    class Tn {
        constructor() {
            this.b = gi(),
            this.a = As(),
            this.c = wr()
        }
    }
    class wn {
    }
    const yn = [0, 1, 2, 10, 3, 4, 5, 13];
    function An(t, e) {
        return _i(t[4 * e + 0], t[4 * e + 1], t[4 * e + 2])
    }
    const En = class {
        constructor(t, e) {
            this.ai = t,
            this.v = e,
            this.G = gi(),
            this.af = gi(),
            this.L = new wn,
            this.q = gi(),
            this.Y = gi(),
            this.j = gi(),
            this.d = gi(),
            this.M = gi(),
            this.ab = gi(),
            this.r = gi(),
            this.B = gi(),
            this.S = gi(),
            this.A = gi(),
            this.ag = gi(),
            this.ad = gi(),
            this.au = gi(),
            this.a = t.aO.context,
            this.e = new Array(e.a.length),
            this.T = new Array(e.a.length);
            for (let i = 0; i < e.a.length; i++)
                this.T[i] = t.c.I[e.a[i]];
            let i = Es(255, 255, 255, 255)
              , s = new wn;
            s.d = 0,
            s.a = 0,
            s.b = 1,
            s.c = 1,
            this.t(e.i, e.r, i, s, e.j, e.k),
            this.s(e.d),
            this.R(!1)
        }
        R(t) {
            this.am = t,
            this.am || (this.c = !1)
        }
        s(t) {
            this.y = t
        }
        F() {
            return this.m == this.i
        }
        k(t) {
            this.aj = t
        }
        H(t) {
            this.l = t
        }
        n(t) {
            this.N[3] = Math.max(t, 0)
        }
        ah() {
            let t = gi();
            Oi(t, this.G, this.au);
            let e = Ci(t);
            Ai(t, this.q, this.aj),
            vi(this.r, this.G, t),
            Ai(t, this.Y, this.aj),
            vi(this.B, this.au, t),
            Ai(t, this.q, this.l),
            xi(this.S, this.G, t),
            Ai(t, this.Y, this.l),
            xi(this.A, this.au, t),
            Ai(this.M, this.j, e),
            Ai(this.ab, this.d, e)
        }
        U(t, e, i) {
            let s;
            if (this.P && this.am) {
                s = t;
                let i = gi();
                Zi(i, s),
                xi(i, i, e),
                bi(this.af, e),
                this.c ? (bi(this.G, this.au),
                bi(this.j, this.d),
                bi(this.q, this.Y)) : (bi(this.G, i),
                this.j = An(s, 2),
                this.q = An(s, 1),
                this.Z = 0,
                this.c = !0),
                this.au = i,
                this.d = An(s, 2),
                this.Y = An(s, 1)
            }
        }
        o(t) {
            var e = Mr();
            Sr(e, t),
            this.j = Ri(this.j, this.j, e),
            this.q = Ri(this.q, this.q, e),
            this.d = Ri(this.d, this.d, e),
            this.Y = Ri(this.Y, this.Y, e),
            this.G = ki(this.G, this.G, t),
            this.au = ki(this.au, this.au, t);
            for (var i = 0; i < this.O.length; i++)
                ki(this.O[i].b, this.O[i].b, t)
        }
        an(t, e, i) {
            this.N[2] = i,
            this.N[1] = e,
            this.N[0] = t
        }
        Q(t) {
            if (this.al != t) {
                this.al = t;
                let e = t % this.b
                  , i = e;
                0 != (2147483648 & e) && (i = (1 & e | e >> 1) + (1 & e | e >> 1));
                let s = i * this.h + this.ae.a;
                this.L.a = s;
                let r = t / this.b
                  , n = r;
                0 != (2147483648 & r) && (r = 1 & r | r >> 1,
                n = r + r,
                s = this.L.a);
                let a = n * this.aa + this.ae.d;
                this.L.d = a,
                this.L.c = s + this.h,
                this.L.b = a + this.aa
            }
        }
        E(t, e, i) {
            let s, r = this.O[2 * this.i], n = this.O[2 * this.i + 1], a = gi();
            Ai(a, this.ab, 1 - e),
            vi(a, this.B, a),
            Ai(r.b, a, e),
            Ai(a, this.M, e),
            xi(a, this.r, a),
            Ai(a, a, 1 - e),
            xi(r.b, r.b, a),
            Ai(a, this.ab, 1 - e),
            vi(a, this.A, a),
            Ai(n.b, a, e),
            Ai(a, this.M, e),
            xi(a, this.S, a),
            Ai(a, a, 1 - e),
            xi(n.b, n.b, a),
            this.ac[this.i] = t,
            s = i,
            this.i = this.i + s,
            this.i >= this.ac.length && (this.i -= this.ac.length)
        }
        aq(t, e) {
            if (this.ai.u)
                return;
            let i = gi()
              , s = 1;
            i = this.v.n.c(t, this.ai.C, i),
            s = this.v.m.c(t, this.ai.C),
            this.an(i[0], i[1], i[2]),
            this.n(s / 32767);
            let r = this.v.q.c(t, this.ai.C);
            this.H(r);
            let n = this.v.e.c(t, this.ai.C);
            this.k(n);
            let a = this.v.p.c(t, this.ai.C);
            this.Q(a);
            let o = this.v.l.c(t, this.ai.C, 1);
            this.R(0 != o);
            let h = Bi();
            $i(h, this.ai.O, this.ai.aJ[this.v.b].q),
            qi(h, h, this.v.h);
            let l = gi();
            this.U(h, l, null),
            this.p(e, !1)
        }
        p(t, e) {
            let i, s, r, n, a, o, h, l, u, c, d, f, g, p, _, b, m, x, v, T, w, y, A, E, C, M, S, F, I, D, k, R, U, O, P, B, z, N, L, G, j, H, q, V, X, W, Y, Z;
            for (this.z || this.ao > 0 && (t = 1 / this.ao + 99999997e-12),
            t >= 0 ? this.at <= t && (t = this.at) : t = 0,
            x = this.m; x != this.i && !(t + this.ac[x] <= this.at); x = this.m)
                this.m = this.C(this.m, 1);
            if (!e && this.P && this.am && this.c) {
                k = t * this.ao + this.Z,
                Z = this.N,
                this.ah();
                let e = !1;
                if (O = 0,
                k < 1 ? e = !0 : (Y = this.Z,
                U = 1 / (k - Y),
                m = Math.floor(k - 1),
                O = Math.ceil(Math.max(m, 0))),
                -1 == O || e)
                    ;
                else
                    for (R = 1,
                    x = 1; D = this.i,
                    N = this.O.length,
                    this.O[2 * D].a = Z,
                    v = 2 * this.i + 1,
                    L = this.O.length,
                    this.O[v].a = Z,
                    this.E((x - Y) * U * -t, (x - Y) * U, 1),
                    -1 != --O; x = R)
                        R += 1,
                        Y = this.Z;
                T = Math.floor(k),
                this.Z = k - T,
                this.E(0, 1, 0),
                I = this.i,
                G = this.O.length,
                w = this.O[2 * I],
                y = this.L.a,
                w.c[1] = this.L.d,
                w.c[0] = y,
                A = 2 * this.i + 1,
                j = this.O.length,
                E = this.O[A],
                C = this.L.a,
                E.c[1] = this.L.b,
                E.c[0] = C,
                F = this.i,
                H = this.O.length,
                this.O[2 * F].a = Z,
                M = 2 * this.i + 1,
                q = this.O.length,
                this.O[M].a = Z
            }
            this.ag[2] = 34028235e31,
            this.ag[1] = 34028235e31,
            this.ag[0] = 34028235e31,
            this.ad[2] = -34028235e31,
            this.ad[1] = -34028235e31,
            this.ad[0] = -34028235e31,
            P = this.m;
            for (let e = this.m; e != this.i; P = e)
                b = 2 * e,
                W = this.O.length,
                S = P,
                z = this.O[2 * e],
                i = b + 1,
                s = this.O[2 * e + 1],
                r = (this.y + this.y) * this.ac[S] * t + t * this.y * t,
                z.b[2] = z.b[2] + r,
                s.b[2] = r + s.b[2],
                n = z.b[0],
                a = this.ag[0],
                a > z.b[0] && (a = z.b[0],
                this.ag[0] = n,
                n = z.b[0]),
                o = z.b[1],
                h = this.ag[1],
                h > o && (h = z.b[1],
                this.ag[1] = o,
                o = z.b[1]),
                l = z.b[2],
                u = this.ag[2],
                u > l && (u = z.b[2],
                this.ag[2] = l,
                l = z.b[2]),
                n > this.ad[0] && (this.ad[0] = n),
                o > this.ad[1] && (this.ad[1] = o),
                l > this.ad[2] && (this.ad[2] = l),
                c = s.b[0],
                a > s.b[0] && (this.ag[0] = c,
                c = s.b[0]),
                d = s.b[1],
                h > d && (this.ag[1] = d,
                d = s.b[1]),
                f = s.b[2],
                u > f && (this.ag[2] = f,
                f = s.b[2]),
                c > this.ad[0] && (this.ad[0] = c),
                d > this.ad[1] && (this.ad[1] = d),
                f > this.ad[2] && (this.ad[2] = f),
                V = this.ac.length,
                this.ac[S] = t + this.ac[S],
                g = this.h,
                X = this.ac.length,
                p = g * this.ac[S] * this.W + this.L.a,
                z.c[1] = this.L.d,
                z.c[0] = p,
                s.c[1] = this.L.b,
                s.c[0] = p,
                _ = this.ac.length,
                B = P + 1,
                e = B - _,
                _ > B && (e = B);
            this.z = !0
        }
        C(t, e) {
            let i = e + t;
            t = i;
            let s = this.ac.length;
            return i >= s && (t = i - s),
            t
        }
        t(t, e, i, s, r, n) {
            let a, o, h, l, u, c, d, f;
            d = Math.ceil(t),
            f = Math.max(.25, e),
            a = Math.ceil(f * d),
            o = Math.ceil(Math.max(a + 1 + 1, 0)),
            this.ac = new Array(o),
            this.m = 0,
            this.i = 0,
            this.Z = 0,
            this.c = !1,
            this.O = new Array(2 * o);
            for (let t = 0; t < this.O.length; t++) {
                this.O[t] = new Tn;
                let e = this.O[t];
                e.b[0] = 0,
                e.b[1] = 0,
                e.b[2] = 0,
                e.a = Es(0, 0, 0, 0),
                e.c[0] = 0,
                e.c[1] = 0
            }
            this.av = new Array(4 * o);
            for (let t = 0; t < this.av.length; t++)
                this.av[t] = t % (2 * o);
            this.W = 1 / f,
            h = n,
            0 != (2147483648 & n) && (h = (1 & n | n >> 1) + (1 & n | n >> 1)),
            this.h = (s.c - s.a) / h,
            l = r,
            0 != (2147483648 & r) && (l = (1 & r | r >> 1) + (1 & r | r >> 1)),
            this.aa = (s.b - s.d) / l,
            this.ar = 1 / this.h,
            this.I = 1 / this.aa,
            this.ao = d,
            this.at = f,
            Is(i, i, 1 / 255),
            this.N = i,
            this.ae = s,
            this.f = r,
            this.b = n,
            this.al = 0,
            u = 0 * this.h + this.ae.a,
            this.L.a = u,
            c = 0 * this.aa + this.ae.d,
            this.L.d = c,
            this.L.c = u + this.h,
            this.L.b = c + this.aa,
            this.l = 10,
            this.aj = 10,
            this.y = 0,
            this.P = !0,
            this.am = !0,
            this.ak = !0,
            this.V = this.ai.H.h(0),
            this.K = this.ai.H.b(0),
            this.D = this.ai.H.l(this.V, this.K)
        }
        w() {
            let t = new Array(this.O.length);
            for (let e = 0, i = 0; e < this.O.length; ++e)
                t[i++] = this.O[e].b[0],
                t[i++] = this.O[e].b[1],
                t[i++] = this.O[e].b[2],
                t[i++] = this.O[e].a[0],
                t[i++] = this.O[e].a[1],
                t[i++] = this.O[e].a[2],
                t[i++] = this.O[e].a[3],
                t[i++] = this.O[e].c[0],
                t[i++] = this.O[e].c[1];
            this.F() || (this.V.b(new Float32Array(t)),
            this.K.b(new Uint16Array(this.av)))
        }
        u(t) {
            const e = this.ai.H;
            var i = this.v.c[t];
            if (i <= -1 || i > this.ai.aD.length)
                return null;
            let s = this.ai.aD[i];
            if (!s.c || !s.c.f)
                return null;
            let r = t;
            r >= this.v.a.length && (r = 0);
            let n = this.ai.c.I[this.v.a[r]]
              , a = Object.assign({}, this.ai.R);
            const o = e.e(this.ai.I, new cn(!1,!this.ai.aH,yn[n.a],!0,!1,15), new ds([s.c],a));
            return e.g(new dn(this.D,0,0), o, 0, 0)
        }
        X(t) {
            if (this.F())
                return;
            const e = this.ai.H.o();
            for (let i = 0; i < this.v.c.length; i++) {
                if (this.e[i] || (this.e[i] = this.u(i)),
                !this.e[i])
                    continue;
                if (!t && this.e[i].f.b() > Qs.GxBlend_AlphaKey)
                    continue;
                let s = this.i > this.m ? 2 * (this.i - this.m) + 2 : 2 * (this.ac.length + this.i - this.m) + 2;
                this.e[i].g = s,
                this.e[i].e = 2 * this.m * 2,
                e.d(this.e[i])
            }
        }
    }
    ;
    const Cn = class {
        constructor(t) {
            var e = this;
            e.g = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            e.c = Es(t.getFloat(), t.getFloat(), t.getFloat(), 0),
            e.i = t.getFloat(),
            e.a = t.getFloat(),
            e.b = t.getFloat(),
            e.e = t.getFloat(),
            e.f = [t.getUint8(), t.getUint8(), t.getUint8(), t.getUint8()],
            e.d = [t.getUint8(), t.getUint8(), t.getUint8(), t.getUint8()]
        }
        h() {
            var t = this;
            t.g = null,
            t.c = null,
            t.f = null,
            t.d = null
        }
    }
    ;
    const Mn = class {
        constructor(t) {
            var e = this;
            e.d = t.getUint16(),
            e.k = t.getUint16(),
            e.g = t.getUint16(),
            e.e = t.getUint16(),
            e.f = t.getUint16() + 65536 * e.k,
            e.b = t.getUint16(),
            e.c = t.getUint16(),
            e.a = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            e.j = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            e.h = t.getFloat()
        }
        i() {
            this.a = null,
            this.j = null
        }
    }
    ;
    const Sn = class {
        constructor(t) {
            this.b = t.getUint16(),
            this.a = t.getUint16()
        }
        static c(t) {
            const e = t.u.c
              , i = t.F;
            e.I && i.i < e.I.length ? t.e = e.I[i.i] : t.e = {
                b: 0,
                a: 0
            },
            t.v = 0 != (1 & t.e.b),
            t.l = 0 == (4 & t.e.b),
            t.w = 0 != (16 & t.e.b)
        }
    }
    ;
    const Fn = class {
        constructor(t) {
            this.b = new tn(t,Vr),
            this.c = new tn(t,Xr),
            this.a = new tn(t,Vr)
        }
        d() {
            var t = this;
            t.b && (t.b.e(),
            t.b = null),
            t.c && (t.c.e(),
            t.c = null),
            t.a && (t.a.e(),
            t.a = null)
        }
    }
    ;
    const In = class {
        constructor(t) {
            var e = this;
            e.d = t.getInt32(),
            e.a = t.getInt32(),
            e.c = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            e.b = -1
        }
        e() {
            this.c = null
        }
    }
    ;
    const Dn = class {
        constructor(t) {
            this.g = new tn(t,Vr),
            this.a = new tn(t,Wr)
        }
        d() {
            var t = this;
            t.g && t.g.e(),
            t.a && t.a.e()
        }
        e(t) {
            return !!this.g && this.g.d(t)
        }
        f(t) {
            return !!this.a && this.a.d(t)
        }
        b(t) {
            return this.e(t) || this.f(t)
        }
        c(t, e, i) {
            var s = this;
            i ? i[0] = i[1] = i[2] = i[3] = 1 : i = Es(1, 1, 1, 1);
            let r = _i(1, 1, 1);
            return s.e(t.e.d) && s.g.c(t, e, r, r),
            s.f(t.e.d) && (i[3] = s.a.c(t, e, 32767) / 32767),
            i[0] = r[0],
            i[1] = r[1],
            i[2] = r[2],
            i
        }
    }
    ;
    const kn = class {
        constructor(t) {
            this.b = new tn(t,Wr)
        }
        d() {
            this.b.e(),
            this.b = null
        }
        a(t) {
            return this.b.d(t)
        }
        c(t, e) {
            var i = 1;
            this.a(t.e.d) && (i = this.b.c(t, e, i) / 32767);
            return i > 1 ? i = 1 : i < 0 && (i = 0),
            i
        }
    }
    ;
    const Rn = class {
        constructor(t) {
            var e = this;
            e.b = t.getFloat(),
            e.a = t.getFloat(),
            e.c = t.getFloat(),
            e.d = new Qr(t)
        }
    }
    ;
    const Un = class {
        constructor(t) {
            this.S = t.getInt32(),
            this.e = t.getUint32(),
            this.k = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            this.d = t.getInt16(),
            this.C = t.getInt16(),
            0 != (268435456 & this.e) && (this.f = [0, 0, 0],
            this.f[0] = 31 & this.C,
            this.f[1] = this.C >> 5 & 31,
            this.f[2] = this.C >> 10 & 31),
            this.q = t.getUint8(),
            this.r = t.getUint8(),
            this.b = t.getUint16(),
            this.U = t.getUint16(),
            this.c = t.getUint16(),
            this.x = t.getUint16(),
            this.P = new tn(t,Yr),
            this.p = new tn(t,Yr),
            this.H = new tn(t,Yr),
            this.K = new tn(t,Yr),
            this.i = new tn(t,Vr),
            this.a = new tn(t,Yr),
            this.N = t.getFloat(),
            this.o = new tn(t,Yr),
            this.J = t.getFloat(),
            this.R = new tn(t,Yr),
            this.W = new tn(t,Yr),
            this.F = new tn(t,Yr),
            this.w = new $r(t),
            this.M = new Qr(t),
            this.A = new Kr(t),
            this.y = [t.getFloat(), t.getFloat()],
            this.z = new Qr(t),
            this.g = new Qr(t),
            this.j = t.getFloat(),
            this.m = t.getFloat(),
            this.B = t.getFloat(),
            this.l = [t.getFloat(), t.getFloat()],
            this.L = t.getFloat(),
            this.v = t.getFloat(),
            this.I = t.getFloat(),
            this.X = t.getFloat(),
            this.t = t.getFloat(),
            this.G = t.getFloat(),
            this.Q = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            this.O = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            this.n = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            this.E = t.getFloat(),
            this.T = t.getFloat(),
            this.u = t.getFloat(),
            this.Z = t.getFloat(),
            this.aa = t.getFloat();
            var e = t.getInt32();
            this.h = new Array(e);
            for (var i = 0; i < e; i++)
                this.h[i] = _i(t.getFloat(), t.getFloat(), t.getFloat());
            this.Y = new tn(t,Zr),
            this.s = yr(t.getFloat(), t.getFloat()),
            this.V = [yr(t.getFloat(), t.getFloat()), yr(t.getFloat(), t.getFloat())],
            this.D = [yr(t.getFloat(), t.getFloat()), yr(t.getFloat(), t.getFloat())]
        }
    }
    ;
    class On {
        constructor(t) {
            this.g = t.getInt32(),
            this.i = t.getUint32(),
            this.a = t.getInt16(),
            this.f = t.getUint16(),
            this.c = t.getUint32(),
            this.e = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            this.d = new tn(t,Vr),
            this.b = new tn(t,Xr),
            this.h = new tn(t,Vr)
        }
    }
    const Pn = class {
        constructor(t) {
            this.buffer = new DataView(t),
            this.position = 0
        }
        getBool() {
            var t = 0 != this.buffer.getUint8(this.position);
            return this.position += 1,
            t
        }
        getUint8() {
            var t = this.buffer.getUint8(this.position);
            return this.position += 1,
            t
        }
        getInt8() {
            var t = this.buffer.getInt8(this.position);
            return this.position += 1,
            t
        }
        getUint16() {
            var t = this.buffer.getUint16(this.position, !0);
            return this.position += 2,
            t
        }
        getInt16() {
            var t = this.buffer.getInt16(this.position, !0);
            return this.position += 2,
            t
        }
        getUint32() {
            var t = this.buffer.getUint32(this.position, !0);
            return this.position += 4,
            t
        }
        getInt32() {
            var t = this.buffer.getInt32(this.position, !0);
            return this.position += 4,
            t
        }
        getFloat() {
            var t = this.buffer.getFloat32(this.position, !0);
            return this.position += 4,
            t
        }
        getString(t) {
            void 0 === t && (t = this.getUint16());
            for (var e = "", i = 0; i < t; ++i)
                e += String.fromCharCode(this.getUint8());
            return e
        }
        setBool(t) {
            this.buffer.setUint8(this.position, t ? 1 : 0),
            this.position += 1
        }
        setUint8(t) {
            this.buffer.setUint8(this.position, t),
            this.position += 1
        }
        setInt8(t) {
            this.buffer.setInt8(this.position, t),
            this.position += 1
        }
        setUint16(t) {
            this.buffer.setUint16(this.position, t, !0),
            this.position += 2
        }
        setInt16(t) {
            this.buffer.setInt16(this.position, t, !0),
            this.position += 2
        }
        setUint32(t) {
            this.buffer.setUint32(this.position, t, !0),
            this.position += 4
        }
        setInt32(t) {
            this.buffer.setInt32(this.position, t, !0),
            this.position += 4
        }
        setFloat(t) {
            this.buffer.setFloat32(this.position, t, !0),
            this.position += 4
        }
    }
    ;
    function Bn(t) {
        let e = t.length;
        for (; --e >= 0; )
            t[e] = 0
    }
    const zn = 256
      , Nn = 286
      , Ln = 30
      , Gn = 15
      , jn = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
      , Hn = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
      , qn = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
      , Vn = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
      , Xn = new Array(576);
    Bn(Xn);
    const Wn = new Array(60);
    Bn(Wn);
    const Yn = new Array(512);
    Bn(Yn);
    const Zn = new Array(256);
    Bn(Zn);
    const Jn = new Array(29);
    Bn(Jn);
    const Kn = new Array(Ln);
    function $n(t, e, i, s, r) {
        this.static_tree = t,
        this.extra_bits = e,
        this.extra_base = i,
        this.elems = s,
        this.max_length = r,
        this.has_stree = t && t.length
    }
    let Qn, ta, ea;
    function ia(t, e) {
        this.dyn_tree = t,
        this.max_code = 0,
        this.stat_desc = e
    }
    Bn(Kn);
    const sa = t => t < 256 ? Yn[t] : Yn[256 + (t >>> 7)]
      , ra = (t, e) => {
        t.pending_buf[t.pending++] = 255 & e,
        t.pending_buf[t.pending++] = e >>> 8 & 255
    }
      , na = (t, e, i) => {
        t.bi_valid > 16 - i ? (t.bi_buf |= e << t.bi_valid & 65535,
        ra(t, t.bi_buf),
        t.bi_buf = e >> 16 - t.bi_valid,
        t.bi_valid += i - 16) : (t.bi_buf |= e << t.bi_valid & 65535,
        t.bi_valid += i)
    }
      , aa = (t, e, i) => {
        na(t, i[2 * e], i[2 * e + 1])
    }
      , oa = (t, e) => {
        let i = 0;
        do {
            i |= 1 & t,
            t >>>= 1,
            i <<= 1
        } while (--e > 0);
        return i >>> 1
    }
      , ha = (t, e, i) => {
        const s = new Array(16);
        let r, n, a = 0;
        for (r = 1; r <= Gn; r++)
            a = a + i[r - 1] << 1,
            s[r] = a;
        for (n = 0; n <= e; n++) {
            let e = t[2 * n + 1];
            0 !== e && (t[2 * n] = oa(s[e]++, e))
        }
    }
      , la = t => {
        let e;
        for (e = 0; e < Nn; e++)
            t.dyn_ltree[2 * e] = 0;
        for (e = 0; e < Ln; e++)
            t.dyn_dtree[2 * e] = 0;
        for (e = 0; e < 19; e++)
            t.bl_tree[2 * e] = 0;
        t.dyn_ltree[512] = 1,
        t.opt_len = t.static_len = 0,
        t.sym_next = t.matches = 0
    }
      , ua = t => {
        t.bi_valid > 8 ? ra(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
        t.bi_buf = 0,
        t.bi_valid = 0
    }
      , ca = (t, e, i, s) => {
        const r = 2 * e
          , n = 2 * i;
        return t[r] < t[n] || t[r] === t[n] && s[e] <= s[i]
    }
      , da = (t, e, i) => {
        const s = t.heap[i];
        let r = i << 1;
        for (; r <= t.heap_len && (r < t.heap_len && ca(e, t.heap[r + 1], t.heap[r], t.depth) && r++,
        !ca(e, s, t.heap[r], t.depth)); )
            t.heap[i] = t.heap[r],
            i = r,
            r <<= 1;
        t.heap[i] = s
    }
      , fa = (t, e, i) => {
        let s, r, n, a, o = 0;
        if (0 !== t.sym_next)
            do {
                s = 255 & t.pending_buf[t.sym_buf + o++],
                s += (255 & t.pending_buf[t.sym_buf + o++]) << 8,
                r = t.pending_buf[t.sym_buf + o++],
                0 === s ? aa(t, r, e) : (n = Zn[r],
                aa(t, n + zn + 1, e),
                a = jn[n],
                0 !== a && (r -= Jn[n],
                na(t, r, a)),
                s--,
                n = sa(s),
                aa(t, n, i),
                a = Hn[n],
                0 !== a && (s -= Kn[n],
                na(t, s, a)))
            } while (o < t.sym_next);
        aa(t, 256, e)
    }
      , ga = (t, e) => {
        const i = e.dyn_tree
          , s = e.stat_desc.static_tree
          , r = e.stat_desc.has_stree
          , n = e.stat_desc.elems;
        let a, o, h, l = -1;
        for (t.heap_len = 0,
        t.heap_max = 573,
        a = 0; a < n; a++)
            0 !== i[2 * a] ? (t.heap[++t.heap_len] = l = a,
            t.depth[a] = 0) : i[2 * a + 1] = 0;
        for (; t.heap_len < 2; )
            h = t.heap[++t.heap_len] = l < 2 ? ++l : 0,
            i[2 * h] = 1,
            t.depth[h] = 0,
            t.opt_len--,
            r && (t.static_len -= s[2 * h + 1]);
        for (e.max_code = l,
        a = t.heap_len >> 1; a >= 1; a--)
            da(t, i, a);
        h = n;
        do {
            a = t.heap[1],
            t.heap[1] = t.heap[t.heap_len--],
            da(t, i, 1),
            o = t.heap[1],
            t.heap[--t.heap_max] = a,
            t.heap[--t.heap_max] = o,
            i[2 * h] = i[2 * a] + i[2 * o],
            t.depth[h] = (t.depth[a] >= t.depth[o] ? t.depth[a] : t.depth[o]) + 1,
            i[2 * a + 1] = i[2 * o + 1] = h,
            t.heap[1] = h++,
            da(t, i, 1)
        } while (t.heap_len >= 2);
        t.heap[--t.heap_max] = t.heap[1],
        ( (t, e) => {
            const i = e.dyn_tree
              , s = e.max_code
              , r = e.stat_desc.static_tree
              , n = e.stat_desc.has_stree
              , a = e.stat_desc.extra_bits
              , o = e.stat_desc.extra_base
              , h = e.stat_desc.max_length;
            let l, u, c, d, f, g, p = 0;
            for (d = 0; d <= Gn; d++)
                t.bl_count[d] = 0;
            for (i[2 * t.heap[t.heap_max] + 1] = 0,
            l = t.heap_max + 1; l < 573; l++)
                u = t.heap[l],
                d = i[2 * i[2 * u + 1] + 1] + 1,
                d > h && (d = h,
                p++),
                i[2 * u + 1] = d,
                u > s || (t.bl_count[d]++,
                f = 0,
                u >= o && (f = a[u - o]),
                g = i[2 * u],
                t.opt_len += g * (d + f),
                n && (t.static_len += g * (r[2 * u + 1] + f)));
            if (0 !== p) {
                do {
                    for (d = h - 1; 0 === t.bl_count[d]; )
                        d--;
                    t.bl_count[d]--,
                    t.bl_count[d + 1] += 2,
                    t.bl_count[h]--,
                    p -= 2
                } while (p > 0);
                for (d = h; 0 !== d; d--)
                    for (u = t.bl_count[d]; 0 !== u; )
                        c = t.heap[--l],
                        c > s || (i[2 * c + 1] !== d && (t.opt_len += (d - i[2 * c + 1]) * i[2 * c],
                        i[2 * c + 1] = d),
                        u--)
            }
        }
        )(t, e),
        ha(i, l, t.bl_count)
    }
      , pa = (t, e, i) => {
        let s, r, n = -1, a = e[1], o = 0, h = 7, l = 4;
        for (0 === a && (h = 138,
        l = 3),
        e[2 * (i + 1) + 1] = 65535,
        s = 0; s <= i; s++)
            r = a,
            a = e[2 * (s + 1) + 1],
            ++o < h && r === a || (o < l ? t.bl_tree[2 * r] += o : 0 !== r ? (r !== n && t.bl_tree[2 * r]++,
            t.bl_tree[32]++) : o <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++,
            o = 0,
            n = r,
            0 === a ? (h = 138,
            l = 3) : r === a ? (h = 6,
            l = 3) : (h = 7,
            l = 4))
    }
      , _a = (t, e, i) => {
        let s, r, n = -1, a = e[1], o = 0, h = 7, l = 4;
        for (0 === a && (h = 138,
        l = 3),
        s = 0; s <= i; s++)
            if (r = a,
            a = e[2 * (s + 1) + 1],
            !(++o < h && r === a)) {
                if (o < l)
                    do {
                        aa(t, r, t.bl_tree)
                    } while (0 != --o);
                else
                    0 !== r ? (r !== n && (aa(t, r, t.bl_tree),
                    o--),
                    aa(t, 16, t.bl_tree),
                    na(t, o - 3, 2)) : o <= 10 ? (aa(t, 17, t.bl_tree),
                    na(t, o - 3, 3)) : (aa(t, 18, t.bl_tree),
                    na(t, o - 11, 7));
                o = 0,
                n = r,
                0 === a ? (h = 138,
                l = 3) : r === a ? (h = 6,
                l = 3) : (h = 7,
                l = 4)
            }
    }
    ;
    let ba = !1;
    const ma = (t, e, i, s) => {
        na(t, 0 + (s ? 1 : 0), 3),
        ua(t),
        ra(t, i),
        ra(t, ~i),
        i && t.pending_buf.set(t.window.subarray(e, e + i), t.pending),
        t.pending += i
    }
    ;
    var xa = t => {
        ba || (( () => {
            let t, e, i, s, r;
            const n = new Array(16);
            for (i = 0,
            s = 0; s < 28; s++)
                for (Jn[s] = i,
                t = 0; t < 1 << jn[s]; t++)
                    Zn[i++] = s;
            for (Zn[i - 1] = s,
            r = 0,
            s = 0; s < 16; s++)
                for (Kn[s] = r,
                t = 0; t < 1 << Hn[s]; t++)
                    Yn[r++] = s;
            for (r >>= 7; s < Ln; s++)
                for (Kn[s] = r << 7,
                t = 0; t < 1 << Hn[s] - 7; t++)
                    Yn[256 + r++] = s;
            for (e = 0; e <= Gn; e++)
                n[e] = 0;
            for (t = 0; t <= 143; )
                Xn[2 * t + 1] = 8,
                t++,
                n[8]++;
            for (; t <= 255; )
                Xn[2 * t + 1] = 9,
                t++,
                n[9]++;
            for (; t <= 279; )
                Xn[2 * t + 1] = 7,
                t++,
                n[7]++;
            for (; t <= 287; )
                Xn[2 * t + 1] = 8,
                t++,
                n[8]++;
            for (ha(Xn, 287, n),
            t = 0; t < Ln; t++)
                Wn[2 * t + 1] = 5,
                Wn[2 * t] = oa(t, 5);
            Qn = new $n(Xn,jn,257,Nn,Gn),
            ta = new $n(Wn,Hn,0,Ln,Gn),
            ea = new $n(new Array(0),qn,0,19,7)
        }
        )(),
        ba = !0),
        t.l_desc = new ia(t.dyn_ltree,Qn),
        t.d_desc = new ia(t.dyn_dtree,ta),
        t.bl_desc = new ia(t.bl_tree,ea),
        t.bi_buf = 0,
        t.bi_valid = 0,
        la(t)
    }
      , va = (t, e, i, s) => {
        let r, n, a = 0;
        t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = (t => {
            let e, i = 4093624447;
            for (e = 0; e <= 31; e++,
            i >>>= 1)
                if (1 & i && 0 !== t.dyn_ltree[2 * e])
                    return 0;
            if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26])
                return 1;
            for (e = 32; e < zn; e++)
                if (0 !== t.dyn_ltree[2 * e])
                    return 1;
            return 0
        }
        )(t)),
        ga(t, t.l_desc),
        ga(t, t.d_desc),
        a = (t => {
            let e;
            for (pa(t, t.dyn_ltree, t.l_desc.max_code),
            pa(t, t.dyn_dtree, t.d_desc.max_code),
            ga(t, t.bl_desc),
            e = 18; e >= 3 && 0 === t.bl_tree[2 * Vn[e] + 1]; e--)
                ;
            return t.opt_len += 3 * (e + 1) + 5 + 5 + 4,
            e
        }
        )(t),
        r = t.opt_len + 3 + 7 >>> 3,
        n = t.static_len + 3 + 7 >>> 3,
        n <= r && (r = n)) : r = n = i + 5,
        i + 4 <= r && -1 !== e ? ma(t, e, i, s) : 4 === t.strategy || n === r ? (na(t, 2 + (s ? 1 : 0), 3),
        fa(t, Xn, Wn)) : (na(t, 4 + (s ? 1 : 0), 3),
        ( (t, e, i, s) => {
            let r;
            for (na(t, e - 257, 5),
            na(t, i - 1, 5),
            na(t, s - 4, 4),
            r = 0; r < s; r++)
                na(t, t.bl_tree[2 * Vn[r] + 1], 3);
            _a(t, t.dyn_ltree, e - 1),
            _a(t, t.dyn_dtree, i - 1)
        }
        )(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1),
        fa(t, t.dyn_ltree, t.dyn_dtree)),
        la(t),
        s && ua(t)
    }
      , Ta = (t, e, i) => (t.pending_buf[t.sym_buf + t.sym_next++] = e,
    t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8,
    t.pending_buf[t.sym_buf + t.sym_next++] = i,
    0 === e ? t.dyn_ltree[2 * i]++ : (t.matches++,
    e--,
    t.dyn_ltree[2 * (Zn[i] + zn + 1)]++,
    t.dyn_dtree[2 * sa(e)]++),
    t.sym_next === t.sym_end)
      , wa = {
        _tr_init: xa,
        _tr_stored_block: ma,
        _tr_flush_block: va,
        _tr_tally: Ta,
        _tr_align: t => {
            na(t, 2, 3),
            aa(t, 256, Xn),
            (t => {
                16 === t.bi_valid ? (ra(t, t.bi_buf),
                t.bi_buf = 0,
                t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf,
                t.bi_buf >>= 8,
                t.bi_valid -= 8)
            }
            )(t)
        }
    };
    var ya = (t, e, i, s) => {
        let r = 65535 & t | 0
          , n = t >>> 16 & 65535 | 0
          , a = 0;
        for (; 0 !== i; ) {
            a = i > 2e3 ? 2e3 : i,
            i -= a;
            do {
                r = r + e[s++] | 0,
                n = n + r | 0
            } while (--a);
            r %= 65521,
            n %= 65521
        }
        return r | n << 16 | 0
    }
    ;
    const Aa = new Uint32Array(( () => {
        let t, e = [];
        for (var i = 0; i < 256; i++) {
            t = i;
            for (var s = 0; s < 8; s++)
                t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
            e[i] = t
        }
        return e
    }
    )());
    var Ea = (t, e, i, s) => {
        const r = Aa
          , n = s + i;
        t ^= -1;
        for (let i = s; i < n; i++)
            t = t >>> 8 ^ r[255 & (t ^ e[i])];
        return -1 ^ t
    }
      , Ca = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    }
      , Ma = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
    };
    const {_tr_init: Sa, _tr_stored_block: Fa, _tr_flush_block: Ia, _tr_tally: Da, _tr_align: ka} = wa
      , {Z_NO_FLUSH: Ra, Z_PARTIAL_FLUSH: Ua, Z_FULL_FLUSH: Oa, Z_FINISH: Pa, Z_BLOCK: Ba, Z_OK: za, Z_STREAM_END: Na, Z_STREAM_ERROR: La, Z_DATA_ERROR: Ga, Z_BUF_ERROR: ja, Z_DEFAULT_COMPRESSION: Ha, Z_FILTERED: qa, Z_HUFFMAN_ONLY: Va, Z_RLE: Xa, Z_FIXED: Wa, Z_DEFAULT_STRATEGY: Ya, Z_UNKNOWN: Za, Z_DEFLATED: Ja} = Ma
      , Ka = 258
      , $a = 262
      , Qa = 42
      , to = 113
      , eo = 666
      , io = (t, e) => (t.msg = Ca[e],
    e)
      , so = t => 2 * t - (t > 4 ? 9 : 0)
      , ro = t => {
        let e = t.length;
        for (; --e >= 0; )
            t[e] = 0
    }
      , no = t => {
        let e, i, s, r = t.w_size;
        e = t.hash_size,
        s = e;
        do {
            i = t.head[--s],
            t.head[s] = i >= r ? i - r : 0
        } while (--e);
        e = r,
        s = e;
        do {
            i = t.prev[--s],
            t.prev[s] = i >= r ? i - r : 0
        } while (--e)
    }
    ;
    let ao = (t, e, i) => (e << t.hash_shift ^ i) & t.hash_mask;
    const oo = t => {
        const e = t.state;
        let i = e.pending;
        i > t.avail_out && (i = t.avail_out),
        0 !== i && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + i), t.next_out),
        t.next_out += i,
        e.pending_out += i,
        t.total_out += i,
        t.avail_out -= i,
        e.pending -= i,
        0 === e.pending && (e.pending_out = 0))
    }
      , ho = (t, e) => {
        Ia(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e),
        t.block_start = t.strstart,
        oo(t.strm)
    }
      , lo = (t, e) => {
        t.pending_buf[t.pending++] = e
    }
      , uo = (t, e) => {
        t.pending_buf[t.pending++] = e >>> 8 & 255,
        t.pending_buf[t.pending++] = 255 & e
    }
      , co = (t, e, i, s) => {
        let r = t.avail_in;
        return r > s && (r = s),
        0 === r ? 0 : (t.avail_in -= r,
        e.set(t.input.subarray(t.next_in, t.next_in + r), i),
        1 === t.state.wrap ? t.adler = ya(t.adler, e, r, i) : 2 === t.state.wrap && (t.adler = Ea(t.adler, e, r, i)),
        t.next_in += r,
        t.total_in += r,
        r)
    }
      , fo = (t, e) => {
        let i, s, r = t.max_chain_length, n = t.strstart, a = t.prev_length, o = t.nice_match;
        const h = t.strstart > t.w_size - $a ? t.strstart - (t.w_size - $a) : 0
          , l = t.window
          , u = t.w_mask
          , c = t.prev
          , d = t.strstart + Ka;
        let f = l[n + a - 1]
          , g = l[n + a];
        t.prev_length >= t.good_match && (r >>= 2),
        o > t.lookahead && (o = t.lookahead);
        do {
            if (i = e,
            l[i + a] === g && l[i + a - 1] === f && l[i] === l[n] && l[++i] === l[n + 1]) {
                n += 2,
                i++;
                do {} while (l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && n < d);
                if (s = Ka - (d - n),
                n = d - Ka,
                s > a) {
                    if (t.match_start = e,
                    a = s,
                    s >= o)
                        break;
                    f = l[n + a - 1],
                    g = l[n + a]
                }
            }
        } while ((e = c[e & u]) > h && 0 != --r);
        return a <= t.lookahead ? a : t.lookahead
    }
      , go = t => {
        const e = t.w_size;
        let i, s, r;
        do {
            if (s = t.window_size - t.lookahead - t.strstart,
            t.strstart >= e + (e - $a) && (t.window.set(t.window.subarray(e, e + e - s), 0),
            t.match_start -= e,
            t.strstart -= e,
            t.block_start -= e,
            t.insert > t.strstart && (t.insert = t.strstart),
            no(t),
            s += e),
            0 === t.strm.avail_in)
                break;
            if (i = co(t.strm, t.window, t.strstart + t.lookahead, s),
            t.lookahead += i,
            t.lookahead + t.insert >= 3)
                for (r = t.strstart - t.insert,
                t.ins_h = t.window[r],
                t.ins_h = ao(t, t.ins_h, t.window[r + 1]); t.insert && (t.ins_h = ao(t, t.ins_h, t.window[r + 3 - 1]),
                t.prev[r & t.w_mask] = t.head[t.ins_h],
                t.head[t.ins_h] = r,
                r++,
                t.insert--,
                !(t.lookahead + t.insert < 3)); )
                    ;
        } while (t.lookahead < $a && 0 !== t.strm.avail_in)
    }
      , po = (t, e) => {
        let i, s, r, n = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5, a = 0, o = t.strm.avail_in;
        do {
            if (i = 65535,
            r = t.bi_valid + 42 >> 3,
            t.strm.avail_out < r)
                break;
            if (r = t.strm.avail_out - r,
            s = t.strstart - t.block_start,
            i > s + t.strm.avail_in && (i = s + t.strm.avail_in),
            i > r && (i = r),
            i < n && (0 === i && e !== Pa || e === Ra || i !== s + t.strm.avail_in))
                break;
            a = e === Pa && i === s + t.strm.avail_in ? 1 : 0,
            Fa(t, 0, 0, a),
            t.pending_buf[t.pending - 4] = i,
            t.pending_buf[t.pending - 3] = i >> 8,
            t.pending_buf[t.pending - 2] = ~i,
            t.pending_buf[t.pending - 1] = ~i >> 8,
            oo(t.strm),
            s && (s > i && (s = i),
            t.strm.output.set(t.window.subarray(t.block_start, t.block_start + s), t.strm.next_out),
            t.strm.next_out += s,
            t.strm.avail_out -= s,
            t.strm.total_out += s,
            t.block_start += s,
            i -= s),
            i && (co(t.strm, t.strm.output, t.strm.next_out, i),
            t.strm.next_out += i,
            t.strm.avail_out -= i,
            t.strm.total_out += i)
        } while (0 === a);
        return o -= t.strm.avail_in,
        o && (o >= t.w_size ? (t.matches = 2,
        t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0),
        t.strstart = t.w_size,
        t.insert = t.strstart) : (t.window_size - t.strstart <= o && (t.strstart -= t.w_size,
        t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0),
        t.matches < 2 && t.matches++,
        t.insert > t.strstart && (t.insert = t.strstart)),
        t.window.set(t.strm.input.subarray(t.strm.next_in - o, t.strm.next_in), t.strstart),
        t.strstart += o,
        t.insert += o > t.w_size - t.insert ? t.w_size - t.insert : o),
        t.block_start = t.strstart),
        t.high_water < t.strstart && (t.high_water = t.strstart),
        a ? 4 : e !== Ra && e !== Pa && 0 === t.strm.avail_in && t.strstart === t.block_start ? 2 : (r = t.window_size - t.strstart,
        t.strm.avail_in > r && t.block_start >= t.w_size && (t.block_start -= t.w_size,
        t.strstart -= t.w_size,
        t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0),
        t.matches < 2 && t.matches++,
        r += t.w_size,
        t.insert > t.strstart && (t.insert = t.strstart)),
        r > t.strm.avail_in && (r = t.strm.avail_in),
        r && (co(t.strm, t.window, t.strstart, r),
        t.strstart += r,
        t.insert += r > t.w_size - t.insert ? t.w_size - t.insert : r),
        t.high_water < t.strstart && (t.high_water = t.strstart),
        r = t.bi_valid + 42 >> 3,
        r = t.pending_buf_size - r > 65535 ? 65535 : t.pending_buf_size - r,
        n = r > t.w_size ? t.w_size : r,
        s = t.strstart - t.block_start,
        (s >= n || (s || e === Pa) && e !== Ra && 0 === t.strm.avail_in && s <= r) && (i = s > r ? r : s,
        a = e === Pa && 0 === t.strm.avail_in && i === s ? 1 : 0,
        Fa(t, t.block_start, i, a),
        t.block_start += i,
        oo(t.strm)),
        a ? 3 : 1)
    }
      , _o = (t, e) => {
        let i, s;
        for (; ; ) {
            if (t.lookahead < $a) {
                if (go(t),
                t.lookahead < $a && e === Ra)
                    return 1;
                if (0 === t.lookahead)
                    break
            }
            if (i = 0,
            t.lookahead >= 3 && (t.ins_h = ao(t, t.ins_h, t.window[t.strstart + 3 - 1]),
            i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
            t.head[t.ins_h] = t.strstart),
            0 !== i && t.strstart - i <= t.w_size - $a && (t.match_length = fo(t, i)),
            t.match_length >= 3)
                if (s = Da(t, t.strstart - t.match_start, t.match_length - 3),
                t.lookahead -= t.match_length,
                t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
                    t.match_length--;
                    do {
                        t.strstart++,
                        t.ins_h = ao(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                        i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                        t.head[t.ins_h] = t.strstart
                    } while (0 != --t.match_length);
                    t.strstart++
                } else
                    t.strstart += t.match_length,
                    t.match_length = 0,
                    t.ins_h = t.window[t.strstart],
                    t.ins_h = ao(t, t.ins_h, t.window[t.strstart + 1]);
            else
                s = Da(t, 0, t.window[t.strstart]),
                t.lookahead--,
                t.strstart++;
            if (s && (ho(t, !1),
            0 === t.strm.avail_out))
                return 1
        }
        return t.insert = t.strstart < 2 ? t.strstart : 2,
        e === Pa ? (ho(t, !0),
        0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (ho(t, !1),
        0 === t.strm.avail_out) ? 1 : 2
    }
      , bo = (t, e) => {
        let i, s, r;
        for (; ; ) {
            if (t.lookahead < $a) {
                if (go(t),
                t.lookahead < $a && e === Ra)
                    return 1;
                if (0 === t.lookahead)
                    break
            }
            if (i = 0,
            t.lookahead >= 3 && (t.ins_h = ao(t, t.ins_h, t.window[t.strstart + 3 - 1]),
            i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
            t.head[t.ins_h] = t.strstart),
            t.prev_length = t.match_length,
            t.prev_match = t.match_start,
            t.match_length = 2,
            0 !== i && t.prev_length < t.max_lazy_match && t.strstart - i <= t.w_size - $a && (t.match_length = fo(t, i),
            t.match_length <= 5 && (t.strategy === qa || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)),
            t.prev_length >= 3 && t.match_length <= t.prev_length) {
                r = t.strstart + t.lookahead - 3,
                s = Da(t, t.strstart - 1 - t.prev_match, t.prev_length - 3),
                t.lookahead -= t.prev_length - 1,
                t.prev_length -= 2;
                do {
                    ++t.strstart <= r && (t.ins_h = ao(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                    i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                    t.head[t.ins_h] = t.strstart)
                } while (0 != --t.prev_length);
                if (t.match_available = 0,
                t.match_length = 2,
                t.strstart++,
                s && (ho(t, !1),
                0 === t.strm.avail_out))
                    return 1
            } else if (t.match_available) {
                if (s = Da(t, 0, t.window[t.strstart - 1]),
                s && ho(t, !1),
                t.strstart++,
                t.lookahead--,
                0 === t.strm.avail_out)
                    return 1
            } else
                t.match_available = 1,
                t.strstart++,
                t.lookahead--
        }
        return t.match_available && (s = Da(t, 0, t.window[t.strstart - 1]),
        t.match_available = 0),
        t.insert = t.strstart < 2 ? t.strstart : 2,
        e === Pa ? (ho(t, !0),
        0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (ho(t, !1),
        0 === t.strm.avail_out) ? 1 : 2
    }
    ;
    function mo(t, e, i, s, r) {
        this.good_length = t,
        this.max_lazy = e,
        this.nice_length = i,
        this.max_chain = s,
        this.func = r
    }
    const xo = [new mo(0,0,0,0,po), new mo(4,4,8,4,_o), new mo(4,5,16,8,_o), new mo(4,6,32,32,_o), new mo(4,4,16,16,bo), new mo(8,16,32,32,bo), new mo(8,16,128,128,bo), new mo(8,32,128,256,bo), new mo(32,128,258,1024,bo), new mo(32,258,258,4096,bo)];
    function vo() {
        this.strm = null,
        this.status = 0,
        this.pending_buf = null,
        this.pending_buf_size = 0,
        this.pending_out = 0,
        this.pending = 0,
        this.wrap = 0,
        this.gzhead = null,
        this.gzindex = 0,
        this.method = Ja,
        this.last_flush = -1,
        this.w_size = 0,
        this.w_bits = 0,
        this.w_mask = 0,
        this.window = null,
        this.window_size = 0,
        this.prev = null,
        this.head = null,
        this.ins_h = 0,
        this.hash_size = 0,
        this.hash_bits = 0,
        this.hash_mask = 0,
        this.hash_shift = 0,
        this.block_start = 0,
        this.match_length = 0,
        this.prev_match = 0,
        this.match_available = 0,
        this.strstart = 0,
        this.match_start = 0,
        this.lookahead = 0,
        this.prev_length = 0,
        this.max_chain_length = 0,
        this.max_lazy_match = 0,
        this.level = 0,
        this.strategy = 0,
        this.good_match = 0,
        this.nice_match = 0,
        this.dyn_ltree = new Uint16Array(1146),
        this.dyn_dtree = new Uint16Array(122),
        this.bl_tree = new Uint16Array(78),
        ro(this.dyn_ltree),
        ro(this.dyn_dtree),
        ro(this.bl_tree),
        this.l_desc = null,
        this.d_desc = null,
        this.bl_desc = null,
        this.bl_count = new Uint16Array(16),
        this.heap = new Uint16Array(573),
        ro(this.heap),
        this.heap_len = 0,
        this.heap_max = 0,
        this.depth = new Uint16Array(573),
        ro(this.depth),
        this.sym_buf = 0,
        this.lit_bufsize = 0,
        this.sym_next = 0,
        this.sym_end = 0,
        this.opt_len = 0,
        this.static_len = 0,
        this.matches = 0,
        this.insert = 0,
        this.bi_buf = 0,
        this.bi_valid = 0
    }
    const To = t => {
        if (!t)
            return 1;
        const e = t.state;
        return !e || e.strm !== t || e.status !== Qa && 57 !== e.status && 69 !== e.status && 73 !== e.status && 91 !== e.status && 103 !== e.status && e.status !== to && e.status !== eo ? 1 : 0
    }
      , wo = t => {
        if (To(t))
            return io(t, La);
        t.total_in = t.total_out = 0,
        t.data_type = Za;
        const e = t.state;
        return e.pending = 0,
        e.pending_out = 0,
        e.wrap < 0 && (e.wrap = -e.wrap),
        e.status = 2 === e.wrap ? 57 : e.wrap ? Qa : to,
        t.adler = 2 === e.wrap ? 0 : 1,
        e.last_flush = -2,
        Sa(e),
        za
    }
      , yo = t => {
        const e = wo(t);
        var i;
        return e === za && ((i = t.state).window_size = 2 * i.w_size,
        ro(i.head),
        i.max_lazy_match = xo[i.level].max_lazy,
        i.good_match = xo[i.level].good_length,
        i.nice_match = xo[i.level].nice_length,
        i.max_chain_length = xo[i.level].max_chain,
        i.strstart = 0,
        i.block_start = 0,
        i.lookahead = 0,
        i.insert = 0,
        i.match_length = i.prev_length = 2,
        i.match_available = 0,
        i.ins_h = 0),
        e
    }
      , Ao = (t, e, i, s, r, n) => {
        if (!t)
            return La;
        let a = 1;
        if (e === Ha && (e = 6),
        s < 0 ? (a = 0,
        s = -s) : s > 15 && (a = 2,
        s -= 16),
        r < 1 || r > 9 || i !== Ja || s < 8 || s > 15 || e < 0 || e > 9 || n < 0 || n > Wa || 8 === s && 1 !== a)
            return io(t, La);
        8 === s && (s = 9);
        const o = new vo;
        return t.state = o,
        o.strm = t,
        o.status = Qa,
        o.wrap = a,
        o.gzhead = null,
        o.w_bits = s,
        o.w_size = 1 << o.w_bits,
        o.w_mask = o.w_size - 1,
        o.hash_bits = r + 7,
        o.hash_size = 1 << o.hash_bits,
        o.hash_mask = o.hash_size - 1,
        o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3),
        o.window = new Uint8Array(2 * o.w_size),
        o.head = new Uint16Array(o.hash_size),
        o.prev = new Uint16Array(o.w_size),
        o.lit_bufsize = 1 << r + 6,
        o.pending_buf_size = 4 * o.lit_bufsize,
        o.pending_buf = new Uint8Array(o.pending_buf_size),
        o.sym_buf = o.lit_bufsize,
        o.sym_end = 3 * (o.lit_bufsize - 1),
        o.level = e,
        o.strategy = n,
        o.method = i,
        yo(t)
    }
    ;
    var Eo = (t, e) => {
        if (To(t) || e > Ba || e < 0)
            return t ? io(t, La) : La;
        const i = t.state;
        if (!t.output || 0 !== t.avail_in && !t.input || i.status === eo && e !== Pa)
            return io(t, 0 === t.avail_out ? ja : La);
        const s = i.last_flush;
        if (i.last_flush = e,
        0 !== i.pending) {
            if (oo(t),
            0 === t.avail_out)
                return i.last_flush = -1,
                za
        } else if (0 === t.avail_in && so(e) <= so(s) && e !== Pa)
            return io(t, ja);
        if (i.status === eo && 0 !== t.avail_in)
            return io(t, ja);
        if (i.status === Qa && 0 === i.wrap && (i.status = to),
        i.status === Qa) {
            let e = Ja + (i.w_bits - 8 << 4) << 8
              , s = -1;
            if (s = i.strategy >= Va || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3,
            e |= s << 6,
            0 !== i.strstart && (e |= 32),
            e += 31 - e % 31,
            uo(i, e),
            0 !== i.strstart && (uo(i, t.adler >>> 16),
            uo(i, 65535 & t.adler)),
            t.adler = 1,
            i.status = to,
            oo(t),
            0 !== i.pending)
                return i.last_flush = -1,
                za
        }
        if (57 === i.status)
            if (t.adler = 0,
            lo(i, 31),
            lo(i, 139),
            lo(i, 8),
            i.gzhead)
                lo(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)),
                lo(i, 255 & i.gzhead.time),
                lo(i, i.gzhead.time >> 8 & 255),
                lo(i, i.gzhead.time >> 16 & 255),
                lo(i, i.gzhead.time >> 24 & 255),
                lo(i, 9 === i.level ? 2 : i.strategy >= Va || i.level < 2 ? 4 : 0),
                lo(i, 255 & i.gzhead.os),
                i.gzhead.extra && i.gzhead.extra.length && (lo(i, 255 & i.gzhead.extra.length),
                lo(i, i.gzhead.extra.length >> 8 & 255)),
                i.gzhead.hcrc && (t.adler = Ea(t.adler, i.pending_buf, i.pending, 0)),
                i.gzindex = 0,
                i.status = 69;
            else if (lo(i, 0),
            lo(i, 0),
            lo(i, 0),
            lo(i, 0),
            lo(i, 0),
            lo(i, 9 === i.level ? 2 : i.strategy >= Va || i.level < 2 ? 4 : 0),
            lo(i, 3),
            i.status = to,
            oo(t),
            0 !== i.pending)
                return i.last_flush = -1,
                za;
        if (69 === i.status) {
            if (i.gzhead.extra) {
                let e = i.pending
                  , s = (65535 & i.gzhead.extra.length) - i.gzindex;
                for (; i.pending + s > i.pending_buf_size; ) {
                    let r = i.pending_buf_size - i.pending;
                    if (i.pending_buf.set(i.gzhead.extra.subarray(i.gzindex, i.gzindex + r), i.pending),
                    i.pending = i.pending_buf_size,
                    i.gzhead.hcrc && i.pending > e && (t.adler = Ea(t.adler, i.pending_buf, i.pending - e, e)),
                    i.gzindex += r,
                    oo(t),
                    0 !== i.pending)
                        return i.last_flush = -1,
                        za;
                    e = 0,
                    s -= r
                }
                let r = new Uint8Array(i.gzhead.extra);
                i.pending_buf.set(r.subarray(i.gzindex, i.gzindex + s), i.pending),
                i.pending += s,
                i.gzhead.hcrc && i.pending > e && (t.adler = Ea(t.adler, i.pending_buf, i.pending - e, e)),
                i.gzindex = 0
            }
            i.status = 73
        }
        if (73 === i.status) {
            if (i.gzhead.name) {
                let e, s = i.pending;
                do {
                    if (i.pending === i.pending_buf_size) {
                        if (i.gzhead.hcrc && i.pending > s && (t.adler = Ea(t.adler, i.pending_buf, i.pending - s, s)),
                        oo(t),
                        0 !== i.pending)
                            return i.last_flush = -1,
                            za;
                        s = 0
                    }
                    e = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0,
                    lo(i, e)
                } while (0 !== e);
                i.gzhead.hcrc && i.pending > s && (t.adler = Ea(t.adler, i.pending_buf, i.pending - s, s)),
                i.gzindex = 0
            }
            i.status = 91
        }
        if (91 === i.status) {
            if (i.gzhead.comment) {
                let e, s = i.pending;
                do {
                    if (i.pending === i.pending_buf_size) {
                        if (i.gzhead.hcrc && i.pending > s && (t.adler = Ea(t.adler, i.pending_buf, i.pending - s, s)),
                        oo(t),
                        0 !== i.pending)
                            return i.last_flush = -1,
                            za;
                        s = 0
                    }
                    e = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0,
                    lo(i, e)
                } while (0 !== e);
                i.gzhead.hcrc && i.pending > s && (t.adler = Ea(t.adler, i.pending_buf, i.pending - s, s))
            }
            i.status = 103
        }
        if (103 === i.status) {
            if (i.gzhead.hcrc) {
                if (i.pending + 2 > i.pending_buf_size && (oo(t),
                0 !== i.pending))
                    return i.last_flush = -1,
                    za;
                lo(i, 255 & t.adler),
                lo(i, t.adler >> 8 & 255),
                t.adler = 0
            }
            if (i.status = to,
            oo(t),
            0 !== i.pending)
                return i.last_flush = -1,
                za
        }
        if (0 !== t.avail_in || 0 !== i.lookahead || e !== Ra && i.status !== eo) {
            let s = 0 === i.level ? po(i, e) : i.strategy === Va ? ( (t, e) => {
                let i;
                for (; ; ) {
                    if (0 === t.lookahead && (go(t),
                    0 === t.lookahead)) {
                        if (e === Ra)
                            return 1;
                        break
                    }
                    if (t.match_length = 0,
                    i = Da(t, 0, t.window[t.strstart]),
                    t.lookahead--,
                    t.strstart++,
                    i && (ho(t, !1),
                    0 === t.strm.avail_out))
                        return 1
                }
                return t.insert = 0,
                e === Pa ? (ho(t, !0),
                0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (ho(t, !1),
                0 === t.strm.avail_out) ? 1 : 2
            }
            )(i, e) : i.strategy === Xa ? ( (t, e) => {
                let i, s, r, n;
                const a = t.window;
                for (; ; ) {
                    if (t.lookahead <= Ka) {
                        if (go(t),
                        t.lookahead <= Ka && e === Ra)
                            return 1;
                        if (0 === t.lookahead)
                            break
                    }
                    if (t.match_length = 0,
                    t.lookahead >= 3 && t.strstart > 0 && (r = t.strstart - 1,
                    s = a[r],
                    s === a[++r] && s === a[++r] && s === a[++r])) {
                        n = t.strstart + Ka;
                        do {} while (s === a[++r] && s === a[++r] && s === a[++r] && s === a[++r] && s === a[++r] && s === a[++r] && s === a[++r] && s === a[++r] && r < n);
                        t.match_length = Ka - (n - r),
                        t.match_length > t.lookahead && (t.match_length = t.lookahead)
                    }
                    if (t.match_length >= 3 ? (i = Da(t, 1, t.match_length - 3),
                    t.lookahead -= t.match_length,
                    t.strstart += t.match_length,
                    t.match_length = 0) : (i = Da(t, 0, t.window[t.strstart]),
                    t.lookahead--,
                    t.strstart++),
                    i && (ho(t, !1),
                    0 === t.strm.avail_out))
                        return 1
                }
                return t.insert = 0,
                e === Pa ? (ho(t, !0),
                0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (ho(t, !1),
                0 === t.strm.avail_out) ? 1 : 2
            }
            )(i, e) : xo[i.level].func(i, e);
            if (3 !== s && 4 !== s || (i.status = eo),
            1 === s || 3 === s)
                return 0 === t.avail_out && (i.last_flush = -1),
                za;
            if (2 === s && (e === Ua ? ka(i) : e !== Ba && (Fa(i, 0, 0, !1),
            e === Oa && (ro(i.head),
            0 === i.lookahead && (i.strstart = 0,
            i.block_start = 0,
            i.insert = 0))),
            oo(t),
            0 === t.avail_out))
                return i.last_flush = -1,
                za
        }
        return e !== Pa ? za : i.wrap <= 0 ? Na : (2 === i.wrap ? (lo(i, 255 & t.adler),
        lo(i, t.adler >> 8 & 255),
        lo(i, t.adler >> 16 & 255),
        lo(i, t.adler >> 24 & 255),
        lo(i, 255 & t.total_in),
        lo(i, t.total_in >> 8 & 255),
        lo(i, t.total_in >> 16 & 255),
        lo(i, t.total_in >> 24 & 255)) : (uo(i, t.adler >>> 16),
        uo(i, 65535 & t.adler)),
        oo(t),
        i.wrap > 0 && (i.wrap = -i.wrap),
        0 !== i.pending ? za : Na)
    }
      , Co = (t, e) => {
        let i = e.length;
        if (To(t))
            return La;
        const s = t.state
          , r = s.wrap;
        if (2 === r || 1 === r && s.status !== Qa || s.lookahead)
            return La;
        if (1 === r && (t.adler = ya(t.adler, e, i, 0)),
        s.wrap = 0,
        i >= s.w_size) {
            0 === r && (ro(s.head),
            s.strstart = 0,
            s.block_start = 0,
            s.insert = 0);
            let t = new Uint8Array(s.w_size);
            t.set(e.subarray(i - s.w_size, i), 0),
            e = t,
            i = s.w_size
        }
        const n = t.avail_in
          , a = t.next_in
          , o = t.input;
        for (t.avail_in = i,
        t.next_in = 0,
        t.input = e,
        go(s); s.lookahead >= 3; ) {
            let t = s.strstart
              , e = s.lookahead - 2;
            do {
                s.ins_h = ao(s, s.ins_h, s.window[t + 3 - 1]),
                s.prev[t & s.w_mask] = s.head[s.ins_h],
                s.head[s.ins_h] = t,
                t++
            } while (--e);
            s.strstart = t,
            s.lookahead = 2,
            go(s)
        }
        return s.strstart += s.lookahead,
        s.block_start = s.strstart,
        s.insert = s.lookahead,
        s.lookahead = 0,
        s.match_length = s.prev_length = 2,
        s.match_available = 0,
        t.next_in = a,
        t.input = o,
        t.avail_in = n,
        s.wrap = r,
        za
    }
      , Mo = {
        deflateInit: (t, e) => Ao(t, e, Ja, 15, 8, Ya),
        deflateInit2: Ao,
        deflateReset: yo,
        deflateResetKeep: wo,
        deflateSetHeader: (t, e) => To(t) || 2 !== t.state.wrap ? La : (t.state.gzhead = e,
        za),
        deflate: Eo,
        deflateEnd: t => {
            if (To(t))
                return La;
            const e = t.state.status;
            return t.state = null,
            e === to ? io(t, Ga) : za
        }
        ,
        deflateSetDictionary: Co,
        deflateInfo: "pako deflate (from Nodeca project)"
    };
    const So = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var Fo = {
        assign: function(t) {
            const e = Array.prototype.slice.call(arguments, 1);
            for (; e.length; ) {
                const i = e.shift();
                if (i) {
                    if ("object" != typeof i)
                        throw new TypeError(i + "must be non-object");
                    for (const e in i)
                        So(i, e) && (t[e] = i[e])
                }
            }
            return t
        },
        flattenChunks: t => {
            let e = 0;
            for (let i = 0, s = t.length; i < s; i++)
                e += t[i].length;
            const i = new Uint8Array(e);
            for (let e = 0, s = 0, r = t.length; e < r; e++) {
                let r = t[e];
                i.set(r, s),
                s += r.length
            }
            return i
        }
    };
    let Io = !0;
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (t) {
        Io = !1
    }
    const Do = new Uint8Array(256);
    for (let t = 0; t < 256; t++)
        Do[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
    Do[254] = Do[254] = 1;
    var ko = {
        string2buf: t => {
            if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
                return (new TextEncoder).encode(t);
            let e, i, s, r, n, a = t.length, o = 0;
            for (r = 0; r < a; r++)
                i = t.charCodeAt(r),
                55296 == (64512 & i) && r + 1 < a && (s = t.charCodeAt(r + 1),
                56320 == (64512 & s) && (i = 65536 + (i - 55296 << 10) + (s - 56320),
                r++)),
                o += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
            for (e = new Uint8Array(o),
            n = 0,
            r = 0; n < o; r++)
                i = t.charCodeAt(r),
                55296 == (64512 & i) && r + 1 < a && (s = t.charCodeAt(r + 1),
                56320 == (64512 & s) && (i = 65536 + (i - 55296 << 10) + (s - 56320),
                r++)),
                i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = 192 | i >>> 6,
                e[n++] = 128 | 63 & i) : i < 65536 ? (e[n++] = 224 | i >>> 12,
                e[n++] = 128 | i >>> 6 & 63,
                e[n++] = 128 | 63 & i) : (e[n++] = 240 | i >>> 18,
                e[n++] = 128 | i >>> 12 & 63,
                e[n++] = 128 | i >>> 6 & 63,
                e[n++] = 128 | 63 & i);
            return e
        }
        ,
        buf2string: (t, e) => {
            const i = e || t.length;
            if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
                return (new TextDecoder).decode(t.subarray(0, e));
            let s, r;
            const n = new Array(2 * i);
            for (r = 0,
            s = 0; s < i; ) {
                let e = t[s++];
                if (e < 128) {
                    n[r++] = e;
                    continue
                }
                let a = Do[e];
                if (a > 4)
                    n[r++] = 65533,
                    s += a - 1;
                else {
                    for (e &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && s < i; )
                        e = e << 6 | 63 & t[s++],
                        a--;
                    a > 1 ? n[r++] = 65533 : e < 65536 ? n[r++] = e : (e -= 65536,
                    n[r++] = 55296 | e >> 10 & 1023,
                    n[r++] = 56320 | 1023 & e)
                }
            }
            return ( (t, e) => {
                if (e < 65534 && t.subarray && Io)
                    return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
                let i = "";
                for (let s = 0; s < e; s++)
                    i += String.fromCharCode(t[s]);
                return i
            }
            )(n, r)
        }
        ,
        utf8border: (t, e) => {
            (e = e || t.length) > t.length && (e = t.length);
            let i = e - 1;
            for (; i >= 0 && 128 == (192 & t[i]); )
                i--;
            return i < 0 || 0 === i ? e : i + Do[t[i]] > e ? i : e
        }
    };
    var Ro = function() {
        this.input = null,
        this.next_in = 0,
        this.avail_in = 0,
        this.total_in = 0,
        this.output = null,
        this.next_out = 0,
        this.avail_out = 0,
        this.total_out = 0,
        this.msg = "",
        this.state = null,
        this.data_type = 2,
        this.adler = 0
    };
    const Uo = Object.prototype.toString
      , {Z_NO_FLUSH: Oo, Z_SYNC_FLUSH: Po, Z_FULL_FLUSH: Bo, Z_FINISH: zo, Z_OK: No, Z_STREAM_END: Lo, Z_DEFAULT_COMPRESSION: Go, Z_DEFAULT_STRATEGY: jo, Z_DEFLATED: Ho} = Ma;
    function qo(t) {
        this.options = Fo.assign({
            level: Go,
            method: Ho,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: jo
        }, t || {});
        let e = this.options;
        e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
        this.err = 0,
        this.msg = "",
        this.ended = !1,
        this.chunks = [],
        this.strm = new Ro,
        this.strm.avail_out = 0;
        let i = Mo.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
        if (i !== No)
            throw new Error(Ca[i]);
        if (e.header && Mo.deflateSetHeader(this.strm, e.header),
        e.dictionary) {
            let t;
            if (t = "string" == typeof e.dictionary ? ko.string2buf(e.dictionary) : "[object ArrayBuffer]" === Uo.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary,
            i = Mo.deflateSetDictionary(this.strm, t),
            i !== No)
                throw new Error(Ca[i]);
            this._dict_set = !0
        }
    }
    function Vo(t, e) {
        const i = new qo(e);
        if (i.push(t, !0),
        i.err)
            throw i.msg || Ca[i.err];
        return i.result
    }
    qo.prototype.push = function(t, e) {
        const i = this.strm
          , s = this.options.chunkSize;
        let r, n;
        if (this.ended)
            return !1;
        for (n = e === ~~e ? e : !0 === e ? zo : Oo,
        "string" == typeof t ? i.input = ko.string2buf(t) : "[object ArrayBuffer]" === Uo.call(t) ? i.input = new Uint8Array(t) : i.input = t,
        i.next_in = 0,
        i.avail_in = i.input.length; ; )
            if (0 === i.avail_out && (i.output = new Uint8Array(s),
            i.next_out = 0,
            i.avail_out = s),
            (n === Po || n === Bo) && i.avail_out <= 6)
                this.onData(i.output.subarray(0, i.next_out)),
                i.avail_out = 0;
            else {
                if (r = Mo.deflate(i, n),
                r === Lo)
                    return i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)),
                    r = Mo.deflateEnd(this.strm),
                    this.onEnd(r),
                    this.ended = !0,
                    r === No;
                if (0 !== i.avail_out) {
                    if (n > 0 && i.next_out > 0)
                        this.onData(i.output.subarray(0, i.next_out)),
                        i.avail_out = 0;
                    else if (0 === i.avail_in)
                        break
                } else
                    this.onData(i.output)
            }
        return !0
    }
    ,
    qo.prototype.onData = function(t) {
        this.chunks.push(t)
    }
    ,
    qo.prototype.onEnd = function(t) {
        t === No && (this.result = Fo.flattenChunks(this.chunks)),
        this.chunks = [],
        this.err = t,
        this.msg = this.strm.msg
    }
    ;
    var Xo = {
        Deflate: qo,
        deflate: Vo,
        deflateRaw: function(t, e) {
            return (e = e || {}).raw = !0,
            Vo(t, e)
        },
        gzip: function(t, e) {
            return (e = e || {}).gzip = !0,
            Vo(t, e)
        },
        constants: Ma
    };
    const Wo = 16209;
    var Yo = function(t, e) {
        let i, s, r, n, a, o, h, l, u, c, d, f, g, p, _, b, m, x, v, T, w, y, A, E;
        const C = t.state;
        i = t.next_in,
        A = t.input,
        s = i + (t.avail_in - 5),
        r = t.next_out,
        E = t.output,
        n = r - (e - t.avail_out),
        a = r + (t.avail_out - 257),
        o = C.dmax,
        h = C.wsize,
        l = C.whave,
        u = C.wnext,
        c = C.window,
        d = C.hold,
        f = C.bits,
        g = C.lencode,
        p = C.distcode,
        _ = (1 << C.lenbits) - 1,
        b = (1 << C.distbits) - 1;
        t: do {
            f < 15 && (d += A[i++] << f,
            f += 8,
            d += A[i++] << f,
            f += 8),
            m = g[d & _];
            e: for (; ; ) {
                if (x = m >>> 24,
                d >>>= x,
                f -= x,
                x = m >>> 16 & 255,
                0 === x)
                    E[r++] = 65535 & m;
                else {
                    if (!(16 & x)) {
                        if (0 == (64 & x)) {
                            m = g[(65535 & m) + (d & (1 << x) - 1)];
                            continue e
                        }
                        if (32 & x) {
                            C.mode = 16191;
                            break t
                        }
                        t.msg = "invalid literal/length code",
                        C.mode = Wo;
                        break t
                    }
                    v = 65535 & m,
                    x &= 15,
                    x && (f < x && (d += A[i++] << f,
                    f += 8),
                    v += d & (1 << x) - 1,
                    d >>>= x,
                    f -= x),
                    f < 15 && (d += A[i++] << f,
                    f += 8,
                    d += A[i++] << f,
                    f += 8),
                    m = p[d & b];
                    i: for (; ; ) {
                        if (x = m >>> 24,
                        d >>>= x,
                        f -= x,
                        x = m >>> 16 & 255,
                        !(16 & x)) {
                            if (0 == (64 & x)) {
                                m = p[(65535 & m) + (d & (1 << x) - 1)];
                                continue i
                            }
                            t.msg = "invalid distance code",
                            C.mode = Wo;
                            break t
                        }
                        if (T = 65535 & m,
                        x &= 15,
                        f < x && (d += A[i++] << f,
                        f += 8,
                        f < x && (d += A[i++] << f,
                        f += 8)),
                        T += d & (1 << x) - 1,
                        T > o) {
                            t.msg = "invalid distance too far back",
                            C.mode = Wo;
                            break t
                        }
                        if (d >>>= x,
                        f -= x,
                        x = r - n,
                        T > x) {
                            if (x = T - x,
                            x > l && C.sane) {
                                t.msg = "invalid distance too far back",
                                C.mode = Wo;
                                break t
                            }
                            if (w = 0,
                            y = c,
                            0 === u) {
                                if (w += h - x,
                                x < v) {
                                    v -= x;
                                    do {
                                        E[r++] = c[w++]
                                    } while (--x);
                                    w = r - T,
                                    y = E
                                }
                            } else if (u < x) {
                                if (w += h + u - x,
                                x -= u,
                                x < v) {
                                    v -= x;
                                    do {
                                        E[r++] = c[w++]
                                    } while (--x);
                                    if (w = 0,
                                    u < v) {
                                        x = u,
                                        v -= x;
                                        do {
                                            E[r++] = c[w++]
                                        } while (--x);
                                        w = r - T,
                                        y = E
                                    }
                                }
                            } else if (w += u - x,
                            x < v) {
                                v -= x;
                                do {
                                    E[r++] = c[w++]
                                } while (--x);
                                w = r - T,
                                y = E
                            }
                            for (; v > 2; )
                                E[r++] = y[w++],
                                E[r++] = y[w++],
                                E[r++] = y[w++],
                                v -= 3;
                            v && (E[r++] = y[w++],
                            v > 1 && (E[r++] = y[w++]))
                        } else {
                            w = r - T;
                            do {
                                E[r++] = E[w++],
                                E[r++] = E[w++],
                                E[r++] = E[w++],
                                v -= 3
                            } while (v > 2);
                            v && (E[r++] = E[w++],
                            v > 1 && (E[r++] = E[w++]))
                        }
                        break
                    }
                }
                break
            }
        } while (i < s && r < a);
        v = f >> 3,
        i -= v,
        f -= v << 3,
        d &= (1 << f) - 1,
        t.next_in = i,
        t.next_out = r,
        t.avail_in = i < s ? s - i + 5 : 5 - (i - s),
        t.avail_out = r < a ? a - r + 257 : 257 - (r - a),
        C.hold = d,
        C.bits = f
    };
    const Zo = 15
      , Jo = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0])
      , Ko = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78])
      , $o = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0])
      , Qo = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    var th = (t, e, i, s, r, n, a, o) => {
        const h = o.bits;
        let l, u, c, d, f, g, p = 0, _ = 0, b = 0, m = 0, x = 0, v = 0, T = 0, w = 0, y = 0, A = 0, E = null;
        const C = new Uint16Array(16)
          , M = new Uint16Array(16);
        let S, F, I, D = null;
        for (p = 0; p <= Zo; p++)
            C[p] = 0;
        for (_ = 0; _ < s; _++)
            C[e[i + _]]++;
        for (x = h,
        m = Zo; m >= 1 && 0 === C[m]; m--)
            ;
        if (x > m && (x = m),
        0 === m)
            return r[n++] = 20971520,
            r[n++] = 20971520,
            o.bits = 1,
            0;
        for (b = 1; b < m && 0 === C[b]; b++)
            ;
        for (x < b && (x = b),
        w = 1,
        p = 1; p <= Zo; p++)
            if (w <<= 1,
            w -= C[p],
            w < 0)
                return -1;
        if (w > 0 && (0 === t || 1 !== m))
            return -1;
        for (M[1] = 0,
        p = 1; p < Zo; p++)
            M[p + 1] = M[p] + C[p];
        for (_ = 0; _ < s; _++)
            0 !== e[i + _] && (a[M[e[i + _]]++] = _);
        if (0 === t ? (E = D = a,
        g = 20) : 1 === t ? (E = Jo,
        D = Ko,
        g = 257) : (E = $o,
        D = Qo,
        g = 0),
        A = 0,
        _ = 0,
        p = b,
        f = n,
        v = x,
        T = 0,
        c = -1,
        y = 1 << x,
        d = y - 1,
        1 === t && y > 852 || 2 === t && y > 592)
            return 1;
        for (; ; ) {
            S = p - T,
            a[_] + 1 < g ? (F = 0,
            I = a[_]) : a[_] >= g ? (F = D[a[_] - g],
            I = E[a[_] - g]) : (F = 96,
            I = 0),
            l = 1 << p - T,
            u = 1 << v,
            b = u;
            do {
                u -= l,
                r[f + (A >> T) + u] = S << 24 | F << 16 | I | 0
            } while (0 !== u);
            for (l = 1 << p - 1; A & l; )
                l >>= 1;
            if (0 !== l ? (A &= l - 1,
            A += l) : A = 0,
            _++,
            0 == --C[p]) {
                if (p === m)
                    break;
                p = e[i + a[_]]
            }
            if (p > x && (A & d) !== c) {
                for (0 === T && (T = x),
                f += b,
                v = p - T,
                w = 1 << v; v + T < m && (w -= C[v + T],
                !(w <= 0)); )
                    v++,
                    w <<= 1;
                if (y += 1 << v,
                1 === t && y > 852 || 2 === t && y > 592)
                    return 1;
                c = A & d,
                r[c] = x << 24 | v << 16 | f - n | 0
            }
        }
        return 0 !== A && (r[f + A] = p - T << 24 | 64 << 16 | 0),
        o.bits = x,
        0
    }
    ;
    const {Z_FINISH: eh, Z_BLOCK: ih, Z_TREES: sh, Z_OK: rh, Z_STREAM_END: nh, Z_NEED_DICT: ah, Z_STREAM_ERROR: oh, Z_DATA_ERROR: hh, Z_MEM_ERROR: lh, Z_BUF_ERROR: uh, Z_DEFLATED: ch} = Ma
      , dh = 16180
      , fh = 16190
      , gh = 16191
      , ph = 16192
      , _h = 16194
      , bh = 16199
      , mh = 16200
      , xh = 16206
      , vh = 16209
      , Th = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
    function wh() {
        this.strm = null,
        this.mode = 0,
        this.last = !1,
        this.wrap = 0,
        this.havedict = !1,
        this.flags = 0,
        this.dmax = 0,
        this.check = 0,
        this.total = 0,
        this.head = null,
        this.wbits = 0,
        this.wsize = 0,
        this.whave = 0,
        this.wnext = 0,
        this.window = null,
        this.hold = 0,
        this.bits = 0,
        this.length = 0,
        this.offset = 0,
        this.extra = 0,
        this.lencode = null,
        this.distcode = null,
        this.lenbits = 0,
        this.distbits = 0,
        this.ncode = 0,
        this.nlen = 0,
        this.ndist = 0,
        this.have = 0,
        this.next = null,
        this.lens = new Uint16Array(320),
        this.work = new Uint16Array(288),
        this.lendyn = null,
        this.distdyn = null,
        this.sane = 0,
        this.back = 0,
        this.was = 0
    }
    const yh = t => {
        if (!t)
            return 1;
        const e = t.state;
        return !e || e.strm !== t || e.mode < dh || e.mode > 16211 ? 1 : 0
    }
      , Ah = t => {
        if (yh(t))
            return oh;
        const e = t.state;
        return t.total_in = t.total_out = e.total = 0,
        t.msg = "",
        e.wrap && (t.adler = 1 & e.wrap),
        e.mode = dh,
        e.last = 0,
        e.havedict = 0,
        e.flags = -1,
        e.dmax = 32768,
        e.head = null,
        e.hold = 0,
        e.bits = 0,
        e.lencode = e.lendyn = new Int32Array(852),
        e.distcode = e.distdyn = new Int32Array(592),
        e.sane = 1,
        e.back = -1,
        rh
    }
      , Eh = t => {
        if (yh(t))
            return oh;
        const e = t.state;
        return e.wsize = 0,
        e.whave = 0,
        e.wnext = 0,
        Ah(t)
    }
      , Ch = (t, e) => {
        let i;
        if (yh(t))
            return oh;
        const s = t.state;
        return e < 0 ? (i = 0,
        e = -e) : (i = 5 + (e >> 4),
        e < 48 && (e &= 15)),
        e && (e < 8 || e > 15) ? oh : (null !== s.window && s.wbits !== e && (s.window = null),
        s.wrap = i,
        s.wbits = e,
        Eh(t))
    }
      , Mh = (t, e) => {
        if (!t)
            return oh;
        const i = new wh;
        t.state = i,
        i.strm = t,
        i.window = null,
        i.mode = dh;
        const s = Ch(t, e);
        return s !== rh && (t.state = null),
        s
    }
    ;
    let Sh, Fh, Ih = !0;
    const Dh = t => {
        if (Ih) {
            Sh = new Int32Array(512),
            Fh = new Int32Array(32);
            let e = 0;
            for (; e < 144; )
                t.lens[e++] = 8;
            for (; e < 256; )
                t.lens[e++] = 9;
            for (; e < 280; )
                t.lens[e++] = 7;
            for (; e < 288; )
                t.lens[e++] = 8;
            for (th(1, t.lens, 0, 288, Sh, 0, t.work, {
                bits: 9
            }),
            e = 0; e < 32; )
                t.lens[e++] = 5;
            th(2, t.lens, 0, 32, Fh, 0, t.work, {
                bits: 5
            }),
            Ih = !1
        }
        t.lencode = Sh,
        t.lenbits = 9,
        t.distcode = Fh,
        t.distbits = 5
    }
      , kh = (t, e, i, s) => {
        let r;
        const n = t.state;
        return null === n.window && (n.wsize = 1 << n.wbits,
        n.wnext = 0,
        n.whave = 0,
        n.window = new Uint8Array(n.wsize)),
        s >= n.wsize ? (n.window.set(e.subarray(i - n.wsize, i), 0),
        n.wnext = 0,
        n.whave = n.wsize) : (r = n.wsize - n.wnext,
        r > s && (r = s),
        n.window.set(e.subarray(i - s, i - s + r), n.wnext),
        (s -= r) ? (n.window.set(e.subarray(i - s, i), 0),
        n.wnext = s,
        n.whave = n.wsize) : (n.wnext += r,
        n.wnext === n.wsize && (n.wnext = 0),
        n.whave < n.wsize && (n.whave += r))),
        0
    }
    ;
    var Rh = (t, e) => {
        let i, s, r, n, a, o, h, l, u, c, d, f, g, p, _, b, m, x, v, T, w, y, A = 0;
        const E = new Uint8Array(4);
        let C, M;
        const S = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (yh(t) || !t.output || !t.input && 0 !== t.avail_in)
            return oh;
        i = t.state,
        i.mode === gh && (i.mode = ph),
        a = t.next_out,
        r = t.output,
        h = t.avail_out,
        n = t.next_in,
        s = t.input,
        o = t.avail_in,
        l = i.hold,
        u = i.bits,
        c = o,
        d = h,
        y = rh;
        t: for (; ; )
            switch (i.mode) {
            case dh:
                if (0 === i.wrap) {
                    i.mode = ph;
                    break
                }
                for (; u < 16; ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += s[n++] << u,
                    u += 8
                }
                if (2 & i.wrap && 35615 === l) {
                    0 === i.wbits && (i.wbits = 15),
                    i.check = 0,
                    E[0] = 255 & l,
                    E[1] = l >>> 8 & 255,
                    i.check = Ea(i.check, E, 2, 0),
                    l = 0,
                    u = 0,
                    i.mode = 16181;
                    break
                }
                if (i.head && (i.head.done = !1),
                !(1 & i.wrap) || (((255 & l) << 8) + (l >> 8)) % 31) {
                    t.msg = "incorrect header check",
                    i.mode = vh;
                    break
                }
                if ((15 & l) !== ch) {
                    t.msg = "unknown compression method",
                    i.mode = vh;
                    break
                }
                if (l >>>= 4,
                u -= 4,
                w = 8 + (15 & l),
                0 === i.wbits && (i.wbits = w),
                w > 15 || w > i.wbits) {
                    t.msg = "invalid window size",
                    i.mode = vh;
                    break
                }
                i.dmax = 1 << i.wbits,
                i.flags = 0,
                t.adler = i.check = 1,
                i.mode = 512 & l ? 16189 : gh,
                l = 0,
                u = 0;
                break;
            case 16181:
                for (; u < 16; ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += s[n++] << u,
                    u += 8
                }
                if (i.flags = l,
                (255 & i.flags) !== ch) {
                    t.msg = "unknown compression method",
                    i.mode = vh;
                    break
                }
                if (57344 & i.flags) {
                    t.msg = "unknown header flags set",
                    i.mode = vh;
                    break
                }
                i.head && (i.head.text = l >> 8 & 1),
                512 & i.flags && 4 & i.wrap && (E[0] = 255 & l,
                E[1] = l >>> 8 & 255,
                i.check = Ea(i.check, E, 2, 0)),
                l = 0,
                u = 0,
                i.mode = 16182;
            case 16182:
                for (; u < 32; ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += s[n++] << u,
                    u += 8
                }
                i.head && (i.head.time = l),
                512 & i.flags && 4 & i.wrap && (E[0] = 255 & l,
                E[1] = l >>> 8 & 255,
                E[2] = l >>> 16 & 255,
                E[3] = l >>> 24 & 255,
                i.check = Ea(i.check, E, 4, 0)),
                l = 0,
                u = 0,
                i.mode = 16183;
            case 16183:
                for (; u < 16; ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += s[n++] << u,
                    u += 8
                }
                i.head && (i.head.xflags = 255 & l,
                i.head.os = l >> 8),
                512 & i.flags && 4 & i.wrap && (E[0] = 255 & l,
                E[1] = l >>> 8 & 255,
                i.check = Ea(i.check, E, 2, 0)),
                l = 0,
                u = 0,
                i.mode = 16184;
            case 16184:
                if (1024 & i.flags) {
                    for (; u < 16; ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += s[n++] << u,
                        u += 8
                    }
                    i.length = l,
                    i.head && (i.head.extra_len = l),
                    512 & i.flags && 4 & i.wrap && (E[0] = 255 & l,
                    E[1] = l >>> 8 & 255,
                    i.check = Ea(i.check, E, 2, 0)),
                    l = 0,
                    u = 0
                } else
                    i.head && (i.head.extra = null);
                i.mode = 16185;
            case 16185:
                if (1024 & i.flags && (f = i.length,
                f > o && (f = o),
                f && (i.head && (w = i.head.extra_len - i.length,
                i.head.extra || (i.head.extra = new Uint8Array(i.head.extra_len)),
                i.head.extra.set(s.subarray(n, n + f), w)),
                512 & i.flags && 4 & i.wrap && (i.check = Ea(i.check, s, f, n)),
                o -= f,
                n += f,
                i.length -= f),
                i.length))
                    break t;
                i.length = 0,
                i.mode = 16186;
            case 16186:
                if (2048 & i.flags) {
                    if (0 === o)
                        break t;
                    f = 0;
                    do {
                        w = s[n + f++],
                        i.head && w && i.length < 65536 && (i.head.name += String.fromCharCode(w))
                    } while (w && f < o);
                    if (512 & i.flags && 4 & i.wrap && (i.check = Ea(i.check, s, f, n)),
                    o -= f,
                    n += f,
                    w)
                        break t
                } else
                    i.head && (i.head.name = null);
                i.length = 0,
                i.mode = 16187;
            case 16187:
                if (4096 & i.flags) {
                    if (0 === o)
                        break t;
                    f = 0;
                    do {
                        w = s[n + f++],
                        i.head && w && i.length < 65536 && (i.head.comment += String.fromCharCode(w))
                    } while (w && f < o);
                    if (512 & i.flags && 4 & i.wrap && (i.check = Ea(i.check, s, f, n)),
                    o -= f,
                    n += f,
                    w)
                        break t
                } else
                    i.head && (i.head.comment = null);
                i.mode = 16188;
            case 16188:
                if (512 & i.flags) {
                    for (; u < 16; ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += s[n++] << u,
                        u += 8
                    }
                    if (4 & i.wrap && l !== (65535 & i.check)) {
                        t.msg = "header crc mismatch",
                        i.mode = vh;
                        break
                    }
                    l = 0,
                    u = 0
                }
                i.head && (i.head.hcrc = i.flags >> 9 & 1,
                i.head.done = !0),
                t.adler = i.check = 0,
                i.mode = gh;
                break;
            case 16189:
                for (; u < 32; ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += s[n++] << u,
                    u += 8
                }
                t.adler = i.check = Th(l),
                l = 0,
                u = 0,
                i.mode = fh;
            case fh:
                if (0 === i.havedict)
                    return t.next_out = a,
                    t.avail_out = h,
                    t.next_in = n,
                    t.avail_in = o,
                    i.hold = l,
                    i.bits = u,
                    ah;
                t.adler = i.check = 1,
                i.mode = gh;
            case gh:
                if (e === ih || e === sh)
                    break t;
            case ph:
                if (i.last) {
                    l >>>= 7 & u,
                    u -= 7 & u,
                    i.mode = xh;
                    break
                }
                for (; u < 3; ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += s[n++] << u,
                    u += 8
                }
                switch (i.last = 1 & l,
                l >>>= 1,
                u -= 1,
                3 & l) {
                case 0:
                    i.mode = 16193;
                    break;
                case 1:
                    if (Dh(i),
                    i.mode = bh,
                    e === sh) {
                        l >>>= 2,
                        u -= 2;
                        break t
                    }
                    break;
                case 2:
                    i.mode = 16196;
                    break;
                case 3:
                    t.msg = "invalid block type",
                    i.mode = vh
                }
                l >>>= 2,
                u -= 2;
                break;
            case 16193:
                for (l >>>= 7 & u,
                u -= 7 & u; u < 32; ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += s[n++] << u,
                    u += 8
                }
                if ((65535 & l) != (l >>> 16 ^ 65535)) {
                    t.msg = "invalid stored block lengths",
                    i.mode = vh;
                    break
                }
                if (i.length = 65535 & l,
                l = 0,
                u = 0,
                i.mode = _h,
                e === sh)
                    break t;
            case _h:
                i.mode = 16195;
            case 16195:
                if (f = i.length,
                f) {
                    if (f > o && (f = o),
                    f > h && (f = h),
                    0 === f)
                        break t;
                    r.set(s.subarray(n, n + f), a),
                    o -= f,
                    n += f,
                    h -= f,
                    a += f,
                    i.length -= f;
                    break
                }
                i.mode = gh;
                break;
            case 16196:
                for (; u < 14; ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += s[n++] << u,
                    u += 8
                }
                if (i.nlen = 257 + (31 & l),
                l >>>= 5,
                u -= 5,
                i.ndist = 1 + (31 & l),
                l >>>= 5,
                u -= 5,
                i.ncode = 4 + (15 & l),
                l >>>= 4,
                u -= 4,
                i.nlen > 286 || i.ndist > 30) {
                    t.msg = "too many length or distance symbols",
                    i.mode = vh;
                    break
                }
                i.have = 0,
                i.mode = 16197;
            case 16197:
                for (; i.have < i.ncode; ) {
                    for (; u < 3; ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += s[n++] << u,
                        u += 8
                    }
                    i.lens[S[i.have++]] = 7 & l,
                    l >>>= 3,
                    u -= 3
                }
                for (; i.have < 19; )
                    i.lens[S[i.have++]] = 0;
                if (i.lencode = i.lendyn,
                i.lenbits = 7,
                C = {
                    bits: i.lenbits
                },
                y = th(0, i.lens, 0, 19, i.lencode, 0, i.work, C),
                i.lenbits = C.bits,
                y) {
                    t.msg = "invalid code lengths set",
                    i.mode = vh;
                    break
                }
                i.have = 0,
                i.mode = 16198;
            case 16198:
                for (; i.have < i.nlen + i.ndist; ) {
                    for (; A = i.lencode[l & (1 << i.lenbits) - 1],
                    _ = A >>> 24,
                    b = A >>> 16 & 255,
                    m = 65535 & A,
                    !(_ <= u); ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += s[n++] << u,
                        u += 8
                    }
                    if (m < 16)
                        l >>>= _,
                        u -= _,
                        i.lens[i.have++] = m;
                    else {
                        if (16 === m) {
                            for (M = _ + 2; u < M; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                l += s[n++] << u,
                                u += 8
                            }
                            if (l >>>= _,
                            u -= _,
                            0 === i.have) {
                                t.msg = "invalid bit length repeat",
                                i.mode = vh;
                                break
                            }
                            w = i.lens[i.have - 1],
                            f = 3 + (3 & l),
                            l >>>= 2,
                            u -= 2
                        } else if (17 === m) {
                            for (M = _ + 3; u < M; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                l += s[n++] << u,
                                u += 8
                            }
                            l >>>= _,
                            u -= _,
                            w = 0,
                            f = 3 + (7 & l),
                            l >>>= 3,
                            u -= 3
                        } else {
                            for (M = _ + 7; u < M; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                l += s[n++] << u,
                                u += 8
                            }
                            l >>>= _,
                            u -= _,
                            w = 0,
                            f = 11 + (127 & l),
                            l >>>= 7,
                            u -= 7
                        }
                        if (i.have + f > i.nlen + i.ndist) {
                            t.msg = "invalid bit length repeat",
                            i.mode = vh;
                            break
                        }
                        for (; f--; )
                            i.lens[i.have++] = w
                    }
                }
                if (i.mode === vh)
                    break;
                if (0 === i.lens[256]) {
                    t.msg = "invalid code -- missing end-of-block",
                    i.mode = vh;
                    break
                }
                if (i.lenbits = 9,
                C = {
                    bits: i.lenbits
                },
                y = th(1, i.lens, 0, i.nlen, i.lencode, 0, i.work, C),
                i.lenbits = C.bits,
                y) {
                    t.msg = "invalid literal/lengths set",
                    i.mode = vh;
                    break
                }
                if (i.distbits = 6,
                i.distcode = i.distdyn,
                C = {
                    bits: i.distbits
                },
                y = th(2, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, C),
                i.distbits = C.bits,
                y) {
                    t.msg = "invalid distances set",
                    i.mode = vh;
                    break
                }
                if (i.mode = bh,
                e === sh)
                    break t;
            case bh:
                i.mode = mh;
            case mh:
                if (o >= 6 && h >= 258) {
                    t.next_out = a,
                    t.avail_out = h,
                    t.next_in = n,
                    t.avail_in = o,
                    i.hold = l,
                    i.bits = u,
                    Yo(t, d),
                    a = t.next_out,
                    r = t.output,
                    h = t.avail_out,
                    n = t.next_in,
                    s = t.input,
                    o = t.avail_in,
                    l = i.hold,
                    u = i.bits,
                    i.mode === gh && (i.back = -1);
                    break
                }
                for (i.back = 0; A = i.lencode[l & (1 << i.lenbits) - 1],
                _ = A >>> 24,
                b = A >>> 16 & 255,
                m = 65535 & A,
                !(_ <= u); ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += s[n++] << u,
                    u += 8
                }
                if (b && 0 == (240 & b)) {
                    for (x = _,
                    v = b,
                    T = m; A = i.lencode[T + ((l & (1 << x + v) - 1) >> x)],
                    _ = A >>> 24,
                    b = A >>> 16 & 255,
                    m = 65535 & A,
                    !(x + _ <= u); ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += s[n++] << u,
                        u += 8
                    }
                    l >>>= x,
                    u -= x,
                    i.back += x
                }
                if (l >>>= _,
                u -= _,
                i.back += _,
                i.length = m,
                0 === b) {
                    i.mode = 16205;
                    break
                }
                if (32 & b) {
                    i.back = -1,
                    i.mode = gh;
                    break
                }
                if (64 & b) {
                    t.msg = "invalid literal/length code",
                    i.mode = vh;
                    break
                }
                i.extra = 15 & b,
                i.mode = 16201;
            case 16201:
                if (i.extra) {
                    for (M = i.extra; u < M; ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += s[n++] << u,
                        u += 8
                    }
                    i.length += l & (1 << i.extra) - 1,
                    l >>>= i.extra,
                    u -= i.extra,
                    i.back += i.extra
                }
                i.was = i.length,
                i.mode = 16202;
            case 16202:
                for (; A = i.distcode[l & (1 << i.distbits) - 1],
                _ = A >>> 24,
                b = A >>> 16 & 255,
                m = 65535 & A,
                !(_ <= u); ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += s[n++] << u,
                    u += 8
                }
                if (0 == (240 & b)) {
                    for (x = _,
                    v = b,
                    T = m; A = i.distcode[T + ((l & (1 << x + v) - 1) >> x)],
                    _ = A >>> 24,
                    b = A >>> 16 & 255,
                    m = 65535 & A,
                    !(x + _ <= u); ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += s[n++] << u,
                        u += 8
                    }
                    l >>>= x,
                    u -= x,
                    i.back += x
                }
                if (l >>>= _,
                u -= _,
                i.back += _,
                64 & b) {
                    t.msg = "invalid distance code",
                    i.mode = vh;
                    break
                }
                i.offset = m,
                i.extra = 15 & b,
                i.mode = 16203;
            case 16203:
                if (i.extra) {
                    for (M = i.extra; u < M; ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += s[n++] << u,
                        u += 8
                    }
                    i.offset += l & (1 << i.extra) - 1,
                    l >>>= i.extra,
                    u -= i.extra,
                    i.back += i.extra
                }
                if (i.offset > i.dmax) {
                    t.msg = "invalid distance too far back",
                    i.mode = vh;
                    break
                }
                i.mode = 16204;
            case 16204:
                if (0 === h)
                    break t;
                if (f = d - h,
                i.offset > f) {
                    if (f = i.offset - f,
                    f > i.whave && i.sane) {
                        t.msg = "invalid distance too far back",
                        i.mode = vh;
                        break
                    }
                    f > i.wnext ? (f -= i.wnext,
                    g = i.wsize - f) : g = i.wnext - f,
                    f > i.length && (f = i.length),
                    p = i.window
                } else
                    p = r,
                    g = a - i.offset,
                    f = i.length;
                f > h && (f = h),
                h -= f,
                i.length -= f;
                do {
                    r[a++] = p[g++]
                } while (--f);
                0 === i.length && (i.mode = mh);
                break;
            case 16205:
                if (0 === h)
                    break t;
                r[a++] = i.length,
                h--,
                i.mode = mh;
                break;
            case xh:
                if (i.wrap) {
                    for (; u < 32; ) {
                        if (0 === o)
                            break t;
                        o--,
                        l |= s[n++] << u,
                        u += 8
                    }
                    if (d -= h,
                    t.total_out += d,
                    i.total += d,
                    4 & i.wrap && d && (t.adler = i.check = i.flags ? Ea(i.check, r, d, a - d) : ya(i.check, r, d, a - d)),
                    d = h,
                    4 & i.wrap && (i.flags ? l : Th(l)) !== i.check) {
                        t.msg = "incorrect data check",
                        i.mode = vh;
                        break
                    }
                    l = 0,
                    u = 0
                }
                i.mode = 16207;
            case 16207:
                if (i.wrap && i.flags) {
                    for (; u < 32; ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += s[n++] << u,
                        u += 8
                    }
                    if (4 & i.wrap && l !== (4294967295 & i.total)) {
                        t.msg = "incorrect length check",
                        i.mode = vh;
                        break
                    }
                    l = 0,
                    u = 0
                }
                i.mode = 16208;
            case 16208:
                y = nh;
                break t;
            case vh:
                y = hh;
                break t;
            case 16210:
                return lh;
            default:
                return oh
            }
        return t.next_out = a,
        t.avail_out = h,
        t.next_in = n,
        t.avail_in = o,
        i.hold = l,
        i.bits = u,
        (i.wsize || d !== t.avail_out && i.mode < vh && (i.mode < xh || e !== eh)) && kh(t, t.output, t.next_out, d - t.avail_out),
        c -= t.avail_in,
        d -= t.avail_out,
        t.total_in += c,
        t.total_out += d,
        i.total += d,
        4 & i.wrap && d && (t.adler = i.check = i.flags ? Ea(i.check, r, d, t.next_out - d) : ya(i.check, r, d, t.next_out - d)),
        t.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === gh ? 128 : 0) + (i.mode === bh || i.mode === _h ? 256 : 0),
        (0 === c && 0 === d || e === eh) && y === rh && (y = uh),
        y
    }
      , Uh = {
        inflateReset: Eh,
        inflateReset2: Ch,
        inflateResetKeep: Ah,
        inflateInit: t => Mh(t, 15),
        inflateInit2: Mh,
        inflate: Rh,
        inflateEnd: t => {
            if (yh(t))
                return oh;
            let e = t.state;
            return e.window && (e.window = null),
            t.state = null,
            rh
        }
        ,
        inflateGetHeader: (t, e) => {
            if (yh(t))
                return oh;
            const i = t.state;
            return 0 == (2 & i.wrap) ? oh : (i.head = e,
            e.done = !1,
            rh)
        }
        ,
        inflateSetDictionary: (t, e) => {
            const i = e.length;
            let s, r, n;
            return yh(t) ? oh : (s = t.state,
            0 !== s.wrap && s.mode !== fh ? oh : s.mode === fh && (r = 1,
            r = ya(r, e, i, 0),
            r !== s.check) ? hh : (n = kh(t, e, i, i),
            n ? (s.mode = 16210,
            lh) : (s.havedict = 1,
            rh)))
        }
        ,
        inflateInfo: "pako inflate (from Nodeca project)"
    };
    var Oh = function() {
        this.text = 0,
        this.time = 0,
        this.xflags = 0,
        this.os = 0,
        this.extra = null,
        this.extra_len = 0,
        this.name = "",
        this.comment = "",
        this.hcrc = 0,
        this.done = !1
    };
    const Ph = Object.prototype.toString
      , {Z_NO_FLUSH: Bh, Z_FINISH: zh, Z_OK: Nh, Z_STREAM_END: Lh, Z_NEED_DICT: Gh, Z_STREAM_ERROR: jh, Z_DATA_ERROR: Hh, Z_MEM_ERROR: qh} = Ma;
    function Vh(t) {
        this.options = Fo.assign({
            chunkSize: 65536,
            windowBits: 15,
            to: ""
        }, t || {});
        const e = this.options;
        e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits,
        0 === e.windowBits && (e.windowBits = -15)),
        !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32),
        e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15),
        this.err = 0,
        this.msg = "",
        this.ended = !1,
        this.chunks = [],
        this.strm = new Ro,
        this.strm.avail_out = 0;
        let i = Uh.inflateInit2(this.strm, e.windowBits);
        if (i !== Nh)
            throw new Error(Ca[i]);
        if (this.header = new Oh,
        Uh.inflateGetHeader(this.strm, this.header),
        e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = ko.string2buf(e.dictionary) : "[object ArrayBuffer]" === Ph.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)),
        e.raw && (i = Uh.inflateSetDictionary(this.strm, e.dictionary),
        i !== Nh)))
            throw new Error(Ca[i])
    }
    function Xh(t, e) {
        const i = new Vh(e);
        if (i.push(t),
        i.err)
            throw i.msg || Ca[i.err];
        return i.result
    }
    Vh.prototype.push = function(t, e) {
        const i = this.strm
          , s = this.options.chunkSize
          , r = this.options.dictionary;
        let n, a, o;
        if (this.ended)
            return !1;
        for (a = e === ~~e ? e : !0 === e ? zh : Bh,
        "[object ArrayBuffer]" === Ph.call(t) ? i.input = new Uint8Array(t) : i.input = t,
        i.next_in = 0,
        i.avail_in = i.input.length; ; ) {
            for (0 === i.avail_out && (i.output = new Uint8Array(s),
            i.next_out = 0,
            i.avail_out = s),
            n = Uh.inflate(i, a),
            n === Gh && r && (n = Uh.inflateSetDictionary(i, r),
            n === Nh ? n = Uh.inflate(i, a) : n === Hh && (n = Gh)); i.avail_in > 0 && n === Lh && i.state.wrap > 0 && 0 !== t[i.next_in]; )
                Uh.inflateReset(i),
                n = Uh.inflate(i, a);
            switch (n) {
            case jh:
            case Hh:
            case Gh:
            case qh:
                return this.onEnd(n),
                this.ended = !0,
                !1
            }
            if (o = i.avail_out,
            i.next_out && (0 === i.avail_out || n === Lh))
                if ("string" === this.options.to) {
                    let t = ko.utf8border(i.output, i.next_out)
                      , e = i.next_out - t
                      , r = ko.buf2string(i.output, t);
                    i.next_out = e,
                    i.avail_out = s - e,
                    e && i.output.set(i.output.subarray(t, t + e), 0),
                    this.onData(r)
                } else
                    this.onData(i.output.length === i.next_out ? i.output : i.output.subarray(0, i.next_out));
            if (n !== Nh || 0 !== o) {
                if (n === Lh)
                    return n = Uh.inflateEnd(this.strm),
                    this.onEnd(n),
                    this.ended = !0,
                    !0;
                if (0 === i.avail_in)
                    break
            }
        }
        return !0
    }
    ,
    Vh.prototype.onData = function(t) {
        this.chunks.push(t)
    }
    ,
    Vh.prototype.onEnd = function(t) {
        t === Nh && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Fo.flattenChunks(this.chunks)),
        this.chunks = [],
        this.err = t,
        this.msg = this.strm.msg
    }
    ;
    var Wh = {
        Inflate: Vh,
        inflate: Xh,
        inflateRaw: function(t, e) {
            return (e = e || {}).raw = !0,
            Xh(t, e)
        },
        ungzip: Xh,
        constants: Ma
    };
    const {Deflate: Yh, deflate: Zh, deflateRaw: Jh, gzip: Kh} = Xo
      , {Inflate: $h, inflate: Qh, inflateRaw: tl, ungzip: el} = Wh;
    var il = Qh;
    class sl {
        constructor(t) {
            var e = this;
            e.i = t.getUint16(),
            e.g = t.getUint16(),
            e.b = t.getUint32(),
            e.l = t.getUint32(),
            e.h = t.getUint16(),
            e.c = t.getUint16(),
            e.m = t.getUint16(),
            e.a = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            e.e = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            e.d = t.getInt16(),
            e.f = t.getUint16(),
            t.getBool() && (e.k = t.getString())
        }
        j() {}
    }
    class rl {
        constructor(t) {
            var e;
            if (this.g = t.getInt32(),
            this.b = t.getInt32(),
            this.h = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            (e = t.getInt32()) > 0) {
                this.c = new Array(e);
                for (let i = 0; i < e; ++i)
                    this.c[i] = t.getInt16()
            }
            if ((e = t.getInt32()) > 0) {
                this.a = new Array(e);
                for (let i = 0; i < e; ++i)
                    this.a[i] = t.getInt16()
            }
            this.n = new tn(t,Vr),
            this.m = new tn(t,Wr),
            this.q = new tn(t,Yr),
            this.e = new tn(t,Yr),
            this.i = t.getFloat(),
            this.r = t.getFloat(),
            this.d = t.getFloat(),
            this.k = t.getInt16(),
            this.j = t.getInt16(),
            this.p = new tn(t,Wr),
            this.l = new tn(t,Zr),
            this.f = t.getInt16()
        }
    }
    class nl {
        constructor(t) {
            this.c = t.getInt32(),
            this.b = t.getUint32(),
            this.a = t.getUint32()
        }
    }
    class al {
        constructor(t) {
            this.h = t.getUint8(),
            this.j = t.getInt8(),
            this.l = t.getUint16(),
            this.f = t.getUint16(),
            this.g = t.getUint16(),
            this.a = t.getInt16(),
            this.i = t.getUint16(),
            this.e = t.getUint16(),
            this.k = t.getUint16(),
            this.d = t.getInt16(),
            this.b = t.getUint16(),
            this.c = t.getInt16(),
            this.m = t.getInt16()
        }
    }
    class ol {
        constructor(t) {
            this.g = t.getInt16(),
            this.i = t.getInt16(),
            this.e = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            this.f = new tn(t,Vr),
            this.a = new tn(t,Yr),
            this.b = new tn(t,Vr),
            this.j = new tn(t,Yr),
            this.c = new tn(t,Yr),
            this.h = new tn(t,Yr),
            this.d = new tn(t,Zr)
        }
    }
    const hl = class {
        constructor(t) {
            var e = this;
            e.e = t.getInt16(),
            e.c = t.getFloat(),
            e.d = t.getFloat(),
            e.a = t.getUint16(),
            e.b = t.getUint32()
        }
    }
    ;
    class ll {
        constructor(t) {
            if (this.e = [],
            this.j = [],
            this.c = [],
            this.y = [],
            this.P = [],
            this.v = [],
            this.w = [],
            this.s = [],
            this.m = [],
            this.F = [],
            this.i = [],
            this.C = [],
            this.f = [],
            this.n = [],
            this.O = [],
            this.o = [],
            this.q = [],
            this.N = [],
            this.t = [],
            this.u = [],
            this.z = [],
            this.D = [],
            this.p = [],
            this.d = [],
            this.x = [],
            this.M = [],
            this.b = [],
            this.J = [],
            this.L = [],
            this.r = [],
            this.Q = [],
            this.A = [],
            this.l = [],
            this.E = [],
            this.G = [],
            !t)
                return void console.error("Bad buffer for DataView");
            let e = new Pn(t);
            if (604210112 != e.getUint32())
                return void console.log("Bad magic value");
            if (e.getUint32() < 2e3)
                return void console.log("Bad version");
            this.h = e.getUint32();
            var i = e.getUint32()
              , s = e.getUint32()
              , r = e.getUint32()
              , n = e.getUint32()
              , a = e.getUint32()
              , o = e.getUint32()
              , h = e.getUint32()
              , l = e.getUint32()
              , u = e.getUint32()
              , c = e.getUint32()
              , d = e.getUint32()
              , f = e.getUint32()
              , g = e.getUint32()
              , p = e.getUint32()
              , _ = e.getUint32()
              , b = e.getUint32()
              , m = e.getUint32()
              , x = e.getUint32()
              , v = e.getUint32()
              , T = e.getUint32()
              , w = e.getUint32()
              , y = e.getUint32()
              , A = e.getUint32()
              , E = e.getUint32()
              , C = e.getUint32()
              , M = e.getUint32()
              , S = e.getUint32()
              , F = e.getUint32()
              , I = e.getUint32()
              , D = e.getUint32()
              , k = e.getUint32()
              , R = e.getUint32()
              , U = e.getUint32()
              , O = e.getUint32()
              , P = e.getUint32();
            let B = new Uint8Array(t,e.position)
              , z = null;
            try {
                z = il(B)
            } catch (t) {
                return void console.log("Decompression error: " + t)
            }
            if (z.length < P)
                console.log("Unexpected data size", z.length, P);
            else {
                e = new Pn(z.buffer),
                e.position = i;
                var N = e.getInt32();
                if (N > 0) {
                    this.e = new Array(N);
                    for (let t = 0; t < N; ++t)
                        this.e[t] = new Cn(e)
                }
                e.position = s;
                var L = e.getInt32();
                if (L > 0) {
                    this.j = new Array(L);
                    for (let t = 0; t < L; ++t)
                        this.j[t] = e.getUint16()
                }
                e.position = r;
                var G = e.getInt32();
                if (G > 0) {
                    this.c = new Array(G);
                    for (let t = 0; t < G; ++t)
                        this.c[t] = e.getUint32()
                }
                e.position = n;
                var j = e.getInt32();
                if (j > 0) {
                    this.y = new Array(j);
                    for (let t = 0; t < j; ++t)
                        this.y[t] = new sl(e)
                }
                e.position = a;
                var H = e.getInt32();
                if (H > 0) {
                    this.P = new Array(H);
                    for (let t = 0; t < H; ++t)
                        this.P[t] = e.getInt16()
                }
                e.position = o;
                var q = e.getInt32();
                if (q > 0) {
                    this.v = new Array(q);
                    for (let t = 0; t < q; ++t)
                        this.v[t] = new On(e)
                }
                e.position = h;
                var V = e.getInt32();
                if (V > 0) {
                    this.w = new Array(V);
                    for (let t = 0; t < V; ++t)
                        this.w[t] = e.getInt16()
                }
                e.position = l;
                var X = e.getInt32();
                if (X > 0) {
                    this.s = new Array(X);
                    for (let t = 0; t < X; ++t)
                        this.s[t] = e.getInt16()
                }
                e.position = u;
                var W = e.getInt32();
                if (W > 0) {
                    this.m = new Array(W);
                    for (let t = 0; t < W; ++t)
                        this.m[t] = new Mn(e)
                }
                e.position = c;
                var Y = e.getInt32();
                if (Y > 0) {
                    this.F = new Array(Y);
                    for (let t = 0; t < Y; ++t)
                        this.F[t] = new al(e)
                }
                e.position = d;
                var Z = e.getInt32();
                if (Z > 0) {
                    this.i = new Array(Z);
                    for (let t = 0; t < Z; ++t)
                        this.i[t] = e.getInt16()
                }
                e.position = f;
                var J = e.getInt32();
                if (J > 0) {
                    this.I = new Array(J);
                    for (let t = 0; t < J; ++t)
                        this.I[t] = new Sn(e)
                }
                e.position = g;
                var K = e.getInt32();
                if (K > 0) {
                    this.C = new Array(K);
                    for (let t = 0; t < K; ++t)
                        this.C[t] = new nl(e)
                }
                e.position = p;
                var $ = e.getInt32();
                if ($ > 0) {
                    this.f = new Array($);
                    for (let t = 0; t < $; ++t)
                        this.f[t] = e.getInt16()
                }
                e.position = _;
                var Q = e.getInt32();
                if (Q > 0) {
                    this.q = new Array(Q);
                    for (let t = 0; t < Q; ++t)
                        this.q[t] = new Fn(e)
                }
                e.position = b;
                var tt = e.getInt32();
                if (tt > 0) {
                    this.N = new Array(tt);
                    for (let t = 0; t < tt; ++t)
                        this.N[t] = e.getInt16()
                }
                e.position = m,
                this.R = _i(e.getFloat(), e.getFloat(), e.getFloat()),
                this.H = _i(e.getFloat(), e.getFloat(), e.getFloat()),
                this.g = e.getFloat(),
                this.B = _i(e.getFloat(), e.getFloat(), e.getFloat()),
                this.k = _i(e.getFloat(), e.getFloat(), e.getFloat()),
                this.a = e.getFloat(),
                e.position = x;
                var et = e.getInt32();
                if (et > 0) {
                    this.n = new Array(et);
                    for (let t = 0; t < et; ++t)
                        this.n[t] = e.getUint16()
                }
                e.position = v;
                var it = e.getInt32();
                if (it > 0) {
                    this.O = new Array(it);
                    for (let t = 0; t < it; ++t)
                        this.O[t] = _i(e.getFloat(), e.getFloat(), e.getFloat())
                }
                e.position = T;
                var st = e.getInt32();
                if (st > 0) {
                    this.o = new Array(st);
                    for (let t = 0; t < st; ++t)
                        this.o[t] = _i(e.getFloat(), e.getFloat(), e.getFloat())
                }
                e.position = w;
                var rt = e.getInt32();
                if (rt > 0) {
                    this.t = new Array(rt);
                    for (let t = 0; t < rt; ++t)
                        this.t[t] = e.getInt16()
                }
                e.position = y;
                var nt = e.getInt32();
                if (nt > 0) {
                    this.u = new Array(nt);
                    for (let t = 0; t < nt; ++t)
                        this.u[t] = new In(e)
                }
                e.position = A;
                var at = e.getInt32();
                if (at > 0) {
                    this.z = new Array(at);
                    for (let t = 0; t < at; ++t)
                        this.z[t] = e.getInt16()
                }
                e.position = E;
                var ot = e.getInt32();
                if (ot > 0) {
                    this.D = new Array(ot);
                    for (let t = 0; t < ot; ++t)
                        this.D[t] = new Dn(e)
                }
                e.position = C;
                var ht = e.getInt32();
                if (ht > 0) {
                    this.p = new Array(ht);
                    for (let t = 0; t < ht; ++t)
                        this.p[t] = new kn(e)
                }
                e.position = M;
                var lt = e.getInt32();
                if (lt > 0) {
                    this.d = new Array(lt);
                    for (let t = 0; t < lt; ++t)
                        this.d[t] = e.getInt16()
                }
                e.position = S;
                var ut = e.getInt32();
                if (ut > 0) {
                    this.x = new Array(ut);
                    for (let t = 0; t < ut; ++t)
                        this.x[t] = new ol(e)
                }
                e.position = F;
                var ct = e.getInt32();
                if (ct > 0) {
                    this.M = new Array(ct);
                    for (let t = 0; t < ct; ++t)
                        this.M[t] = new Un(e)
                }
                e.position = D;
                var dt = e.getInt32();
                if (dt > 0) {
                    this.J = new Array(dt);
                    for (let t = 0; t < dt; ++t)
                        this.J[t] = new Rn(e)
                }
                e.position = k;
                var ft = e.getInt32();
                if (ft > 0) {
                    this.L = new Array(ft);
                    for (let t = 0; t < dt; ++t)
                        this.L[t] = e.getInt16()
                }
                e.position = R;
                var gt = e.getInt32();
                if (gt > 0) {
                    this.r = new Array(gt);
                    for (let t = 0; t < gt; ++t)
                        this.r[t] = new hl(e)
                }
                if (U > 0) {
                    e.position = U;
                    if (e.getUint32()) {
                        const t = e.position
                          , i = e.getInt32()
                          , s = e.getUint32()
                          , r = e.getInt32()
                          , n = e.getUint32()
                          , a = e.getInt32()
                          , o = e.getUint32()
                          , h = e.getInt32()
                          , l = e.getUint32();
                        let u = e.position;
                        e.position = t + s;
                        for (let t = 0; t < i; t++)
                            this.Q.push(_i(e.getFloat(), e.getFloat(), e.getFloat()));
                        e.position = t + n;
                        for (let t = 0; t < r; t++)
                            this.A.push(_i(e.getFloat(), e.getFloat(), e.getFloat()));
                        e.position = t + o;
                        for (let t = 0; t < a; t++)
                            this.l.push(e.getUint16());
                        e.position = t + l;
                        for (let t = 0; t < h; t++)
                            this.E.push(e.getUint16());
                        e.position = u
                    }
                }
                if (O > 0) {
                    e.position = O;
                    if (e.getUint32()) {
                        this.K = _i(e.getFloat(), e.getFloat(), e.getFloat()),
                        this.G = [];
                        for (let t = 0; t < 5; t++)
                            this.G.push(e.getInt32())
                    }
                }
                e.position = I;
                var pt = e.getInt32();
                if (pt > 0) {
                    this.b = new Array(pt);
                    for (let t = 0; t < pt; ++t)
                        this.b[t] = new rl(e)
                }
            }
        }
    }
    const ul = class {
        constructor(t) {
            this.F = t,
            this.t = new Float32Array([1, 1, 1, 1]),
            this.k = !1,
            this.A = !0,
            this.u = null,
            this.o = null,
            this.h = 0,
            this.e = null,
            this.n = [],
            this.j = [],
            this.D = new Array,
            this.B = null,
            this.z = [],
            this.s = t.l,
            this.x = t.k,
            this.v = !1,
            this.l = !1,
            this.w = !1,
            this.C = As(),
            this.p = gi(),
            this.y = Ir()
        }
        r(t) {
            this.u = t;
            const e = t.c
              , i = this.F;
            this.o = e.m[this.F.f],
            this.h = this.o.d,
            Sn.c(this);
            let s = e.f[i.d];
            1 == i.k && s > -1 && 1 == e.C[s].c && (this.s = -1e3,
            this.x = 3);
            for (let s = 0; s < this.x; s++) {
                if (i.d > -1 && i.d < e.f.length) {
                    let r = e.f[i.d + s];
                    r > -1 && r < e.C.length && this.n.splice(s, 0, t.aD[r])
                }
                if (i.m > -1 && i.m < e.N.length) {
                    let t = e.N[i.m + s];
                    t > -1 && e.q && t < e.q.length ? this.j.splice(s, 0, e.q[t]) : this.j.splice(s, 0, null)
                }
                if (i.c > -1 && i.c < e.d.length) {
                    let t = e.d[i.c + s];
                    t > -1 && t < e.p.length ? this.z.splice(s, 0, e.p[t]) : this.z.splice(s, 0, null)
                }
            }
            this.D = new Array(this.j.length);
            for (let t = 0; t < this.D.length; t++)
                this.D[t] = Bi();
            e.D && i.a > -1 && i.a < e.D.length && (this.B = e.D[i.a])
        }
        b() {
            this.u.c;
            let t = Es(this.o.j[0], this.o.j[1], this.o.j[2], 1)
              , e = this.u.aJ[this.o.c].q
              , i = Bi();
            Hi(i, i, this.u.aO.viewMatrix),
            Hi(i, i, this.u.O),
            Hi(i, i, e),
            Rs(t, t, i),
            t[3] = 0;
            let s = Us(t);
            if ((3 & this.F.h) > 0) {
                let e = As();
                s > 0 ? Is(e, t, 1 / s) : Cs(e, t),
                Is(e, e, pi(_i(i[8], i[9], i[10])) * this.o.h),
                1 & this.F.h ? Fs(e, t, e) : Ss(e, t, e),
                s = Ds(e)
            }
            return s
        }
        i() {
            this.u,
            this.u.aO.context;
            const t = this.u.r;
            if (this.C[0] = this.C[1] = this.C[2] = this.C[3] = 1,
            this.B && this.B.c(t, this.u.C, this.C),
            this.z[0] && (this.C[3] *= this.z[0].c(t, this.u.C)),
            this.C[3] *= this.u.aq[3],
            !(this.C[3] <= .001)) {
                for (let e = 0; e < this.z.length; e++) {
                    const i = this.z[e];
                    i && (this.t[e] = i.c(t, this.u.C))
                }
                if (!this.k || this.u.B) {
                    const t = this.d();
                    let e = !0;
                    for (const i of t) {
                        const t = i.c;
                        e = e && null != t
                    }
                    if (this.k = e,
                    !e)
                        return;
                    this.g = this.a(!1, !1),
                    this.f = this.a(!0, !1),
                    this.E = this.a(!1, !0)
                }
                if (this.j.forEach(( (e, i) => {
                    if (!this.u.u && (Li(this.D[i]),
                    this.j[i])) {
                        let e = !1
                          , s = !1;
                        this.j[i].b && this.j[i].b.d(t.e.d) ? (this.p = this.j[i].b.c(t, this.u.C),
                        s = !0) : mi(this.p, 0, 0, 0),
                        this.j[i].c && this.j[i].c.d(t.e.d) ? (this.y = this.j[i].c.c(t, this.u.C),
                        e = !0) : Lr(this.y, 0, 0, 0, 1);
                        let r, n = !1;
                        if (this.j[i].a && this.j[i].a.d(t.e.d) && (r = this.j[i].a.c(t, this.u.C),
                        n = !0),
                        Li(this.D[i]),
                        qi(this.D[i], this.D[i], _i(.5, .5, 0)),
                        n && Vi(this.D[i], this.D[i], r),
                        e) {
                            let t = Bi();
                            Yi(t, this.y, [0, 0, 0]),
                            Hi(this.D[i], this.D[i], t)
                        }
                        s && qi(this.D[i], this.D[i], this.p),
                        qi(this.D[i], this.D[i], _i(-.5, -.5, 0))
                    }
                }
                )),
                this.k) {
                    (this.C[3] < 1 ? this.f : this.g).d = this.b()
                }
            }
        }
        q(t, e) {
            if (!this.g)
                return;
            const i = this.u.H.o();
            if (e)
                i.d(this.E);
            else {
                const e = this.g.f.b() <= Qs.GxBlend_AlphaKey
                  , s = null != this.u.gradientEffect
                  , r = this.C[3] < 1;
                t && e && (r || s) ? (i.d(this.E),
                i.d(this.f)) : (!t && e || t && !e) && i.d(this.g)
            }
        }
        a(t, e) {
            const i = this
              , s = t && i.e.a < 2 ? Qs.GxBlend_Alpha : i.e.a
              , r = [0, 1, 2, 10, 3, 4, 5, 13]
              , n = r[s]
              , a = this.u.H
              , o = this.u
              , h = Object.assign(Object.assign({}, this.u.R), this.u.ap);
            for (let t = 0; t < this.j.length; t++)
                h["uTextureMatrix" + (t + 1).toString()] = this.D[t];
            h.uColor = this.C,
            h.uTexSampleAlpha = this.t,
            h.uBlendMode = n,
            h.uHasSpecEmiss = o.az[0] && o.az[1],
            h.uHasEmissiveGlowing = o.P,
            h.uUnlit = this.v ? 1 : 0,
            this.u.gradientEffect && (h.u_mulLum_OpaqMat = [0, 1, 0, 0]);
            let l = !this.u.aH;
            const u = a.d(this.u.I, new cn(i.l,l,r[s],!0,!i.w,e ? 0 : 15), new us(this.s,i.d(),h,null != this.u.gradientEffect && s <= 2));
            return a.n(new dn(o.ai,2 * i.o.f,i.o.b), u, this.F.e, this.F.j)
        }
        c() {
            return this.n
        }
        d() {
            const t = []
              , e = this.u;
            return this.n.forEach(( (i, s) => {
                let r = null;
                i && (-1e3 == this.s ? e.az ? (r = e.az[s],
                r || (r = {
                    c: null,
                    f: !1
                })) : r = {
                    c: null,
                    f: !1
                } : r = 0 == i.d.c ? i.c : i.d.c > 0 && this.u.G[i.d.c] ? this.u.G[i.d.c] : {
                    c: null,
                    f: !1
                },
                r || (this.n[s].e || (WH.debug("can't find texture for material", s, "type", this.n[s].type, "index", this.n[s].f),
                this.n[s].e = !0),
                r = {
                    c: this.u.aO.greenPixelTexture
                })),
                t[s] = r
            }
            )),
            t
        }
        get show() {
            return this.A
        }
        set show(t) {
            this.A = t
        }
        get meshId() {
            return this.h
        }
        m() {
            this.u = null,
            this.o = null,
            this.e = null,
            this.n = null,
            this.j = null,
            this.B = null,
            this.z = null,
            this.C = null,
            this.D = null,
            this.p = null,
            this.y = null
        }
    }
    ;
    class cl {
        constructor(t, e) {
            this.d = e,
            this.f = t,
            this.c = null,
            this.e = !1
        }
        a() {
            this.c && this.c.b(),
            this.c = null
        }
        b(t) {
            0 != this.d.a && (this.c || (this.c = t.getTexture(this.d.a)))
        }
        get type() {
            return this.d.c
        }
    }
    const dl = function(t, e) {
        const i = Math.abs(t)
          , s = Math.abs(e);
        return Number((i - Math.floor(i / s) * s).toPrecision(8)) * Math.sign(t)
    }
      , fl = "DressingRoom"
      , gl = "Stand";
    class pl {
        constructor() {
            this.b = null,
            this.a = -1,
            this.c = Bi(),
            this.d = 1
        }
    }
    class _l {
        constructor(t, e, i) {
            this.aO = t,
            this.H = e,
            this.aA = i,
            this.ar = !1,
            this.C = [],
            this.aH = !1,
            this.aL = !0,
            this.x = !0,
            this.u = !1,
            this.f = !1,
            this.r = new Hr,
            this.E = null,
            this.D = 0,
            this.at = null,
            this.aC = null,
            this.G = {},
            this.az = [],
            this.P = !1,
            this.B = !1,
            this.n = 1,
            this.ad = gi(),
            this.af = gi(),
            this.i = null,
            this.W = null,
            this.aN = new Set,
            this.ai = null,
            this.O = Bi(),
            this.e = Bi(),
            this.aB = Bi(),
            this.au = Bi(),
            this.aq = Es(1, 1, 1, 1),
            this.N = null,
            this.ap = {},
            this.L = -1,
            this.y = !1,
            this.h = Bi(),
            this.aa = gi(),
            this.J = gi(),
            this.ax = As(),
            this.m = As(),
            this.ag = !1,
            this.T = null,
            this.an = [],
            this.r.b = 0,
            this.r.e.d = -1,
            this.as(i)
        }
        ao(t) {
            this.an.push(t)
        }
        as(t) {
            const e = this.aO.options.contentPath + "mo3/" + t + ".mo3";
            model.onBeforeLoadSource();
            $.ajax({
                url: e,
                type: "GET",
                dataType: "binary",
                responseType: "arraybuffer",
                processData: !1,
                renderer: this.aO,
                success: t => {
                    this.aj(t);
                    model.onLoadedSource();
                }
                ,
                error: function(t, e, i) {
                    console.log(i)
                }
            })
        }
        aj(t) {
            this.c = new ll(t),
            this.ah()
        }
        d(t) {
            this.n = t
        }
        ah() {
            const t = this.c
              , e = t.C.length
              , i = t.v.length
              , s = t.c.length
              , r = t.M.length
              , n = t.b.length;
            this.C = new Array(s);
            for (let t = 0; t < s; ++t)
                this.C[t] = 0;
            if (i > 0) {
                this.aJ = new Array(i);
                for (let e = 0; e < i; e++)
                    this.aJ[e] = new rn(this,e,t.v[e]);
                this.F = new Array(i);
                for (let e = 0; e < i; e++) {
                    this.F[e] = [];
                    for (let s = 0; s < i; s++)
                        t.v[s].a == e && this.F[e].push(s)
                }
            }
            this.aD = new Array;
            for (let i = 0; i < e; i++)
                this.aD[i] = new cl(i,t.C[i]),
                this.aD[i].b(this.aO);
            this.Q = new Array(r);
            for (let e = 0; e < r; e++)
                this.Q[e] = new vn(this,t.M[e]),
                t.J && t.J.length && e < t.J.length && this.Q[e].z(t.J[e]);
            this.K = new Array(n);
            for (let e = 0; e < n; e++)
                this.K[e] = new En(this,t.b[e]);
            if (this.E && this.X(this.E),
            t.F) {
                const e = t.F.length;
                this.am = new Array(e);
                for (let i = 0; i < e; ++i)
                    this.am[i] = new ul(t.F[i]),
                    this.am[i].r(this);
                this.a = this.am.concat()
            }
            this.c.e && t.j && (this.i = this.H.a(t.e),
            this.W = this.H.b(t.j.length),
            this.ai = this.H.f(this.i, this.W),
            this.W.b(new Uint16Array(t.j))),
            this.I = this.H.m(t.v.length, t.D.length, t.p.length, t.q.length),
            this.R = {
                uInvTranspViewModelMat: this.au,
                uModelMatrix: this.O,
                uDiffuseColor: this.aq
            },
            this.w("Stand");
            for (let t of this.an)
                t();
            this.an = [],
            mi(this.J, this.n, this.n, this.n),
            Li(this.O),
            this.ag && Wi(this.O, this.O, Math.PI / 2),
            Vi(this.O, this.O, this.J),
            this.aO.doUpdateBounds = !0,
            this.ar = !0
        }
        j() {
            this.ag = !0
        }
        A(t) {
            const e = this.c;
            return e && e.y && t > -1 && t < e.y.length ? e.y[t].k : t == e.y.length ? fl : ""
        }
        al() {
            this.w(gl)
        }
        get isMirrored() {
            return this.ab
        }
        set isMirrored(t) {
            this.B = this.ab != t,
            this.ab = t
        }
        S(t, e, i, s=1) {
            null != t || null != i ? (this.T || (this.T = new pl),
            this.T.b = t,
            this.T.a = e,
            i ? zi(this.T.c, i) : Li(this.T.c),
            this.T.d = s,
            this.aO.doUpdateBounds = !0) : this.T = null
        }
        aM() {
            this.aO.context;
            this.c.e && this.c.j && this.L != this.aO.currFrame && (this.i && this.i.dc(this.aJ, this.aN),
            this.I.a(this.aJ),
            this.L = this.aO.currFrame)
        }
        t(t, e, i) {
            const s = [_i(t[0], t[1], t[2]), _i(t[0], t[1], e[2]), _i(t[0], e[1], t[2]), _i(t[0], e[1], e[2]), _i(e[0], t[1], t[2]), _i(e[0], t[1], e[2]), _i(e[0], e[1], t[2]), _i(e[0], e[1], e[2])].map((t => {
                const e = gi();
                return ki(e, t, i),
                e
            }
            ))
              , r = _i(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)
              , n = _i(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
            return s.forEach((t => {
                wi(r, r, t),
                yi(n, n, t)
            }
            )),
            [r, n]
        }
        z() {
            var t, e, i, s, r, n;
            if (!this.am)
                return null;
            let a = this.ad
              , o = this.af;
            return mi(a, 9999, 9999, 999),
            mi(o, -9999, -9999, -9999),
            wi(a, a, null === (i = null === (e = null === (t = this.r) || void 0 === t ? void 0 : t.e) || void 0 === e ? void 0 : e.a) || void 0 === i ? void 0 : i.a),
            yi(o, o, null === (n = null === (r = null === (s = this.r) || void 0 === s ? void 0 : s.e) || void 0 === r ? void 0 : r.a) || void 0 === n ? void 0 : n.e),
            this.t(a, o, this.O)
        }
        k() {
            const t = this.c;
            if (!this.ar)
                return;
            if (this.T) {
                mi(this.J, this.n, this.n, this.n);
                const t = this.T.b
                  , s = this.T;
                if (!t.ar)
                    return;
                Ai(this.J, this.J, s.d),
                e = this.O,
                i = this.J,
                e[0] = i[0],
                e[1] = 0,
                e[2] = 0,
                e[3] = 0,
                e[4] = 0,
                e[5] = i[1],
                e[6] = 0,
                e[7] = 0,
                e[8] = 0,
                e[9] = 0,
                e[10] = i[2],
                e[11] = 0,
                e[12] = 0,
                e[13] = 0,
                e[14] = 0,
                e[15] = 1,
                Hi(this.O, s.c, this.O),
                s.a >= 0 && s.a < t.aJ.length && Hi(this.O, t.aJ[s.a].q, this.O),
                Hi(this.O, t.O, this.O)
            }
            var e, i;
            Hi(this.e, this.aO.viewMatrix, this.O),
            ji(this.aB, this.e),
            Gi(this.au, this.aB),
            this.gradientEffect && this.Y();
            let s = 1e3 * this.aO.delta;
            if (!this.u && this.r.e.d > -1) {
                let e = s;
                for (let i = 0; i < this.C.length; i++)
                    this.C[i] += e,
                    t.c[i] > 0 && (this.C[i] %= t.c[i]);
                this.aG(this.r, e)
            }
            let r = this.am ? this.am.length : 0;
            this.aN.clear();
            for (let t = 0; t < r; ++t) {
                let e = this.am[t];
                if (!e.show)
                    continue;
                let i = e.o.b
                  , s = e.o.f;
                for (let t = 0; t < i; ++t)
                    this.aN.add(this.c.j[s + t])
            }
            let n = t.v.length;
            if (this.aJ) {
                for (let t = 0; t < n; ++t)
                    this.aJ[t].w = !1;
                for (let t = 0; t < n; ++t)
                    this.aJ[t].r(s);
                this.aM()
            }
            if (this.am && this.am.forEach((t => t.i())),
            this.a && this.a.sort((function(t, e) {
                return t.F.j != e.F.j ? t.F.j - e.F.j : t.meshId - e.meshId
            }
            )),
            this.B = !1,
            this.Q && this.aL)
                for (let t = 0; t < this.Q.length; ++t)
                    this.Q[t].W(this.r, this.aO.delta);
            if (this.K && this.x)
                for (let t = 0; t < this.K.length; ++t)
                    this.K[t].aq(this.r, this.aO.delta),
                    this.K[t].w()
        }
        aF(t, e) {
            this.G[t] = e,
            this.B = !0
        }
        s(t, e, i) {
            this.az = [t, e, i],
            this.B = !0
        }
        aw(t) {
            this.P = t
        }
        ae(t) {
            this.f = !!t
        }
        ac(t) {
            this.aL = !!t
        }
        av(t) {
            this.x = !!t
        }
        M(t, e) {
            const i = this;
            if (!i.ar)
                return;
            let s = 100 * e
              , r = s + rr[e] + t
              , n = i.am.some((t => t.meshId == r));
            r = n ? r : 100 * e + 1,
            i.g(s, s + 99, !1),
            i.g(r, r, !0)
        }
        g(t, e, i) {
            const s = this.c;
            if (!this.am || 0 == this.am.length)
                return !1;
            for (let s = 0; s < this.am.length; ++s) {
                const r = this.am[s];
                r.meshId >= t && r.meshId <= e && (r.show = i)
            }
            if (s.L && s.L.length > 0)
                for (let r = 0; r < s.L.length; ++r) {
                    let n = s.L[r];
                    n >= t && n <= e && (this.Q[r].ap = i)
                }
            return !0
        }
        l(t, e) {
            if (!this.am)
                return;
            const i = e + 1;
            let s = t > 0 ? e + t : -2 == t ? e + 0 : i
              , r = this.am.some((t => t.meshId == s));
            s = r || -2 == t ? s : i,
            this.g(s, s, !0)
        }
        U(t) {
            this.u = t
        }
        aE(t) {
            this.c.y && (this.aI(t, this.r),
            this.r.a = !1,
            this.r.e.c = !1,
            this.r.e.e = 0)
        }
        aG(t, e) {
            const i = this.c;
            if (t.e.e += e,
            t.d.d < 0 && !this.f && !t.a)
                if (t.e.a.d > -1) {
                    let e = 32767 * Math.random()
                      , s = 0
                      , r = t.e.d
                      , n = i.y[r];
                    for (s += n.h; s < e && n.d > -1; )
                        r = n.d,
                        n = i.y[r],
                        s += n.h;
                    t.d.d = r,
                    t.d.a = i.y[r],
                    t.d.e = 0
                } else {
                    let e = i.y.find((e => e.i == t.e.a.i && 0 == e.g));
                    e && (t.d.d = e.f,
                    t.d.a = e,
                    t.d.e = 0)
                }
            let s = t.e
              , r = t.d
              , n = s.a.b - s.e
              , a = 0
              , o = null;
            if (r.d > -1 && (o = i.y[r.d],
            a = o.c),
            a > 0 && n < a ? (r.e = dl(a - n, o.b),
            t.b = n / a) : t.b = 1,
            t.c > 0) {
                let i = e / 1e3;
                t.f.e += e,
                t.c -= i / this.aO.crossFadeDuration
            }
            if (s.e >= s.a.b)
                if (r.d > -1 && !s.c) {
                    if (r.d > -1)
                        for (; 0 == (32 & i.y[r.d].l) && (64 & i.y[r.d].l) > 0 && (r.d = i.y[r.d].f,
                        r.a = i.y[r.d],
                        !(r.d < 0)); )
                            ;
                    t.e = r,
                    t.d = new jr,
                    t.b = 1
                } else
                    s.a.b > 0 && (s.e = dl(s.e, s.a.b))
        }
        w(t, e=!0) {
            this.aI(t, this.r, e)
        }
        aI(t, e, i=!0) {
            const s = this.c;
            let r = !1
              , n = !1;
            const a = t == fl;
            a && (t = gl,
            this.ae(!0));
            for (let o = 0; o < s.y.length; ++o) {
                const h = s.y[o];
                if (h.k && (h.k == t && 0 == h.g)) {
                    r = !0,
                    i && null != e.e && (null != e.f && (e.c = 1),
                    e.f = new jr,
                    e.f.d = e.e.d,
                    e.f.a = e.e.a,
                    e.f.e = e.e.e),
                    n = e.e.d != o,
                    e.e.d = o,
                    e.e.a = h,
                    e.e.e = 0,
                    e.d = new jr,
                    e.b = 0,
                    e.a = a,
                    WH.debug("Set animation to", h.i, h.k);
                    break
                }
            }
            return t == gl || r ? n : this.aI(gl, e)
        }
        ak(t) {
            this.y = t
        }
        b(t) {
            const e = this.c;
            let i = null;
            if (!e.z || !e.z.length)
                return null;
            if (t < e.z.length)
                i = e.u[e.z[t]];
            else
                for (let t = 0; t < e.z.length; t++) {
                    const s = e.z[t];
                    if (-1 != s) {
                        i = e.u[s];
                        break
                    }
                }
            return i
        }
        get gradientEffect() {
            return this.N
        }
        set gradientEffect(t) {
            this.B = !0,
            this.N = t,
            this.v()
        }
        q(t) {
            if (this.T) {
                if (!this.T.b.ar)
                    return
            }
            if (this.i && this.a)
                if (this.gradientEffect) {
                    if (t)
                        for (let t = 0; t < this.a.length; ++t)
                            this.a[t].show && this.a[t].q(!1, !0);
                    for (let e = 0; e < this.a.length; ++e)
                        this.a[e].show && this.a[e].q(t, !1)
                } else
                    for (let e = 0; e < this.a.length; ++e)
                        this.a[e].show && this.a[e].q(t, !1);
            if (this.Q && this.aL)
                for (let e = 0; e < this.Q.length; ++e)
                    this.Q[e].j(t);
            if (this.K && this.x)
                for (let e = 0; e < this.K.length; ++e)
                    this.K[e].X(t)
        }
        aK(t) {
            if (this.D == t)
                return;
            if (this.ar)
                for (let t = 0; t < this.aJ.length; t++)
                    this.aJ[t].a = null;
            if (this.D = t,
            t <= 0)
                return;
            let e = this.aO.options.contentPath + "bone/" + t + ".bone"
              , i = this;
            $.ajax({
                url: e,
                type: "GET",
                dataType: "binary",
                responseType: "arraybuffer",
                processData: !1,
                renderer: this.aO,
                success: function(t) {
                    i.Z(t)
                },
                error: function(t, e, i) {
                    console.log(i)
                }
            })
        }
        Z(t) {
            let e = new Pn(t);
            e.getInt32();
            for (; e.position < e.buffer.byteLength; ) {
                let t = String.fromCharCode(e.getUint8(), e.getUint8(), e.getUint8(), e.getUint8())
                  , i = e.getUint32();
                if ("BIDA" == t) {
                    let t = i / 2;
                    this.at = new Array(t);
                    for (let i = 0; i < t; i++)
                        this.at[i] = e.getUint16()
                }
                if ("BOMT" == t) {
                    let t = i / 64;
                    this.aC = new Array(t);
                    for (let i = 0; i < t; i++) {
                        let t = Ni(e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat());
                        this.aC[i] = t
                    }
                }
            }
            this.ar && this.ay()
        }
        ay() {
            if (!(this.D <= 0) && this.at && this.at.length)
                for (let t = 0; t < this.at.length; t++)
                    this.aJ[this.at[t]].a = this.aC[t]
        }
        v() {
            if (!this.gradientEffect)
                return;
            const t = this.gradientEffect
              , e = this.ap;
            e.u_gradGradientColors_0 = [...t.Colors0, 0],
            e.u_gradGradientColors_1 = [...t.Colors1, 0],
            e.u_gradGradientColors_2 = [...t.Colors2, t.Alpha[0]],
            e.u_gradEdgeColor = [...t.EdgeColor, t.Alpha[1]],
            e.u_gradBoundingBox = [this.ax[0], this.ax[1], this.ax[2], 1 / (this.af[2] - this.ad[2])],
            e.u_gradUpVec = [this.J[0], this.J[1], this.J[2], 0],
            e.u_gradFlags = [(1 & t.gradFlags) > 0 ? 1 : 0, .7, (4 & t.gradFlags) > 0 ? 1 : 0, (8 & t.gradFlags) > 0 ? 1 : 0]
        }
        Y() {
            if (!this.gradientEffect)
                return;
            this.gradientEffect;
            const t = this.ap;
            Ms(this.ax, this.ad[2], this.ad[2], this.ad[2], 1),
            Rs(this.ax, this.ax, this.e),
            Ms(this.m, 0, 0, 1, 0),
            Rs(this.m, this.m, this.au),
            mi(this.J, this.m[0], this.m[1], this.m[2]),
            Si(this.J, this.J),
            t.u_gradBoundingBox[0] = this.ax[0],
            t.u_gradBoundingBox[1] = this.ax[1],
            t.u_gradBoundingBox[2] = this.ax[2],
            t.u_gradBoundingBox[3] = 1 / (this.af[2] - this.ad[2]),
            t.u_gradUpVec[0] = this.J[0],
            t.u_gradUpVec[1] = this.J[1],
            t.u_gradUpVec[2] = this.J[2]
        }
        o(t) {
            let e = Mr();
            if (Sr(e, t),
            this.Q)
                for (let i = 0; i < this.Q.length; i++)
                    this.Q[i].V(t, e);
            if (this.K)
                for (let e = 0; e < this.K.length; e++)
                    this.K[e].o(t)
        }
        p() {
            return this.T
        }
        X(t) {
            if (this.Q)
                for (let e = 0; e < this.Q.length; e++)
                    this.Q[e].v(t);
            this.E = t
        }
    }
    class bl {
        static a(t, e, i) {
            const s = fr[e];
            if (s) {
                const e = i ? 4 : 0;
                return s.slice(2 * t + e, 2 * t + e + 2)
            }
        }
        static c(t, e, i, s) {
            let r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            if (!t)
                return WH.debug("selectBestTexture:", "textures are null"),
                null;
            for (let n = 0; n < t.length; n++) {
                let a = t[n]
                  , o = a.Gender
                  , h = a.Class
                  , l = a.Race
                  , u = a.ExtraData
                  , c = 0;
                if (e > 1 || o != e) {
                    if (o < 2)
                        continue;
                    c = 0
                } else
                    c = 2;
                let d = 1;
                if (i > 0 && h == i)
                    d = 0;
                else if (h > 0)
                    continue;
                let f = 1;
                if (s > 0 && l == s)
                    f = 0;
                else if (l > 0)
                    continue;
                r[u + 3 * (f + 2 * (c + d))] = a.FileDataId
            }
            for (let t = 0; t < 2; t++)
                for (let e = 0; e < 2; e++)
                    for (let i = 0; i < 2; i++) {
                        let s = 3 * (t + 2 * (e + 2 * i));
                        if (r[s] > 0) {
                            let t;
                            return t = {
                                b: r[s],
                                c: r[s + 1],
                                a: r[s + 2]
                            },
                            t
                        }
                    }
            const n = bl.a(e, s, !0);
            return n && 0 != n[0] ? (s = n[0],
            e = n[1],
            bl.c(t, e, i, s)) : null
        }
        static b(t, e, i, s, r) {
            let n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let a = 0; a < t.length; a++) {
                let o = t[a]
                  , h = o.Gender
                  , l = o.Class
                  , u = o.Race
                  , c = o.ExtraData
                  , d = 0;
                if (i > 1 || h != i) {
                    if (h < 2)
                        continue;
                    d = 0
                } else
                    d = 2;
                let f = 1;
                if (s > 0 && l == s)
                    f = 0;
                else if (l > 0)
                    continue;
                let g = 1;
                if (r > 0 && u == r)
                    g = 0;
                else if (u > 0)
                    continue;
                let p = 1;
                if (-1 == e || c != e) {
                    if (-1 != c && -1 != e)
                        continue
                } else
                    p = 0;
                n[p + 2 * (g + 2 * (d + f))] = o.FileDataId
            }
            for (let t = 0; t < 2; t++)
                for (let e = 0; e < 2; e++)
                    for (let i = 0; i < 2; i++)
                        for (let s = 0; s < 2; s++) {
                            let r = s + 2 * (t + 2 * (e + 2 * i));
                            if (n[r])
                                return n[r]
                        }
            const a = bl.a(i, r, !1);
            return a && 0 != a[0] ? (r = a[0],
            i = a[1],
            bl.b(t, e, i, s, r)) : 0
        }
    }
    class ml {
        constructor() {
            this.c = !1,
            this.f = []
        }
        get loaded() {
            let t = !!this.d && this.d.ar;
            if (t && this.f.length > 0) {
                for (let t of this.f)
                    t();
                this.f = []
            }
            return t
        }
        isLoaded() {
            return this.loaded
        }
        e(t) {
            this.f.push(t)
        }
        h() {
            return this.d
        }
        g(t) {
            t.c(this.d, this.c)
        }
        getNumAnimations() {
            var t;
            return (null === (t = this.d) || void 0 === t ? void 0 : t.ar) ? 0 == this.d.c.y.length ? 0 : this.d.c.y.length + 1 : 0
        }
        getAnimation(t) {
            var e;
            return (null === (e = this.d) || void 0 === e ? void 0 : e.ar) ? this.d.A(t) : ""
        }
        resetAnimation() {
            var t;
            if (null === (t = this.d) || void 0 === t ? void 0 : t.ar)
                return this.d.al()
        }
        setAnimPaused(t) {
            var e;
            if (null === (e = this.d) || void 0 === e ? void 0 : e.ar)
                return this.d.U(t)
        }
        setTPose(t) {
            var e;
            if (null === (e = this.d) || void 0 === e ? void 0 : e.ar)
                return this.d.ak(t)
        }
        setAnimation(t, e) {
            var i;
            (null === (i = this.d) || void 0 === i ? void 0 : i.ar) && this.d.w(t, !!e)
        }
        setParticlesEnabled(t) {
            var e;
            (null === (e = this.d) || void 0 === e ? void 0 : e.ar) && this.d.ac(t)
        }
        setRibbonsEnabled(t) {
            var e;
            (null === (e = this.d) || void 0 === e ? void 0 : e.ar) && this.d.av(t)
        }
        getTexUnits() {
            var t;
            return (null === (t = this.d) || void 0 === t ? void 0 : t.ar) ? this.d.am : null
        }
        setAnimNoSubAnim(t) {
            this.d && this.d.ae(t)
        }
        attachList(t) {}
        setItems(t) {}
        clearSlots(t) {}
        setSheath(t, e) {}
        setAppearance(t) {}
        setShouldersOverride(t) {}
        setCustomizationsLoadedCallback(t) {}
        setModelLoadedCallback(t) {
            throw new Error("Method not implemented.")
        }
        setAnimationOverride(t, e) {
            throw new Error("Method not implemented.")
        }
        resetAnimationOverride(t) {
            throw new Error("Method not implemented.")
        }
        getAnimationDuration(t) {
            throw new Error("Method not implemented.")
        }
        getModelBounds() {
            throw new Error("Method not implemented.")
        }
        isRenderReady() {
            throw new Error("Method not implemented.")
        }
    }
    class xl extends ml {
        constructor(t, e, i, s, r, n) {
            super(),
            this.l = t,
            this.fe = e,
            this.k = i,
            this.j = s,
            this.hg = r,
            this.c = n
        }
        get fileDataId() {
            return this.d ? this.d.aA : 0
        }
        get modelInstance() {
            return this.d
        }
        i(t, e, i) {
            this.d && this.d.S(t, e, i)
        }
        dc(t, e) {
            this.d && this.d.M(t, e)
        }
        ba(t, e, i) {
            this.d && this.d.g(t, e, i)
        }
        setParticlesEnabled(t) {
            this.d && this.d.ac(t)
        }
        get winding() {
            return !!this.d && this.d.aH
        }
        set winding(t) {
            this.d && (this.d.aH = t)
        }
        get isMirrored() {
            return !!this.d && this.d.isMirrored
        }
        set isMirrored(t) {
            this.d && (this.d.isMirrored = t)
        }
        getBounds() {
            return this.modelInstance.ar ? this.modelInstance.z() : [null, null]
        }
        a() {
            this.d && this.d.k()
        }
        b(t) {
            this.d && this.d.q(t)
        }
    }
    class vl extends xl {
        constructor(t, e, i, s) {
            if (super(t, null, 0, 0, 0, s),
            this.d = new _l(t,t.renderer,e),
            i)
                for (let e in i)
                    0 != i[e] && this.d.aF(+e, t.getTexture(i[e]))
        }
    }
    class Tl {
        constructor() {
            this.a = !1
        }
    }
    const wl = class {
        constructor(t, e) {
            this.f = t,
            this.n = [],
            this.m = !1,
            this.k = !1,
            this.c = e
        }
        e(t) {
            for (let e = 0; e < this.c.length; e++)
                this.n[e] && this.n[e].b && this.n[e].b.loaded && this.n[e].b.h().w(t)
        }
        a(t) {
            this.m = t
        }
        b() {
            if (this.f.loaded)
                for (let t = 0; t < this.c.length; t++)
                    switch (this.c[t].EffectType) {
                    case 1:
                        this.g(t);
                        break;
                    case 2:
                        this.h(t);
                        break;
                    case 6:
                    case 7:
                    case 11:
                    case 12:
                    case 13:
                        break;
                    case 16:
                        this.i(t)
                    }
        }
        g(t) {
            let e = this.f.h();
            if (1 == this.c[t].ProcEffectType) {
                let i = this.c[t].Value[0];
                e.aq = Es((i >> 16 & 255) / 255, (i >> 8 & 255) / 255, (255 & i) / 255, e.aq[3])
            } else if (14 == this.c[t].ProcEffectType) {
                let i = Math.min(Math.max(this.c[t].Value[0], 0), 1);
                e.aq[3] = i
            } else if (22 == this.c[t].ProcEffectType) {
                let i = this.c[t].Value[3];
                e.aq = Es((i >> 16 & 255) / 255, (i >> 8 & 255) / 255, (255 & i) / 255, e.aq[3])
            }
        }
        h(t) {
            if (!this.f)
                return;
            if (!this.f.loaded)
                return;
            let e = this.f.h();
            if (!this.n[t]) {
                const i = new Tl;
                if (this.n[t] = i,
                0 == this.c[t].ModelType) {
                    const s = new vl(e.aO,this.c[t].Model,{
                        2: this.c[t].Texture
                    },!1);
                    i.b = s
                } else
                    1 == this.c[t].ModelType || 2 == this.c[t].ModelType && Gl.b(e.aO, ar.NPC, this.c[t].Model).then((t => {
                        i.b = t
                    }
                    ))
            }
            const i = this.n[t];
            if (!i.a) {
                if (!i.b && !i.c)
                    return;
                if (i.b && !i.b.loaded)
                    return;
                if (i.c && !i.c.n)
                    return;
                let _ = this.c[t].AttachmentID;
                this.c[t].Positioner > -1 && (_ = this.c[t].Positioner),
                _ < 0 && (_ = 19);
                let b = e.b(_);
                const m = b ? b.a : -1;
                let x = Bi();
                if (b) {
                    let t = b.c;
                    qi(x, x, _i(t[0], t[1], t[2]))
                }
                if (qi(x, x, _i(this.c[t].Offset[0], -this.c[t].Offset[1], this.c[t].Offset[2])),
                Wi(x, x, -this.c[t].Yaw),
                s = x,
                r = x,
                n = this.c[t].Pitch,
                a = Math.sin(n),
                o = Math.cos(n),
                h = r[0],
                l = r[1],
                u = r[2],
                c = r[3],
                d = r[8],
                f = r[9],
                g = r[10],
                p = r[11],
                r !== s && (s[4] = r[4],
                s[5] = r[5],
                s[6] = r[6],
                s[7] = r[7],
                s[12] = r[12],
                s[13] = r[13],
                s[14] = r[14],
                s[15] = r[15]),
                s[0] = h * o - d * a,
                s[1] = l * o - f * a,
                s[2] = u * o - g * a,
                s[3] = c * o - p * a,
                s[8] = h * a + d * o,
                s[9] = l * a + f * o,
                s[10] = u * a + g * o,
                s[11] = c * a + p * o,
                Xi(x, x, this.c[t].Roll),
                Vi(x, x, [this.c[t].Scale1, this.c[t].Scale1, this.c[t].Scale1]),
                Vi(x, x, [this.c[t].Scale2, this.c[t].Scale2, this.c[t].Scale2]),
                i.b) {
                    const e = i.b.h();
                    e.U(this.m),
                    this.c[t].ModelAlpha && (e.aq[3] = this.c[t].ModelAlpha),
                    e.S(this.f.h(), m, x)
                }
                this.n[t].a = !0
            }
            var s, r, n, a, o, h, l, u, c, d, f, g, p;
            this.n[t].b && this.n[t].b.a(),
            this.n[t].c && this.n[t].c.i()
        }
        i(t) {
            const e = this.f.h();
            e.gradientEffect || (e.gradientEffect = this.c[t])
        }
        d(t) {
            for (const e of this.n)
                e && e.a && (e.b && e.b.b(t),
                e.c && e.c.e(t))
        }
        j() {
            for (const t of this.n)
                t && (t.a = !1,
                t.b && t.b.loaded && t.b.h().S(null, -1, null),
                t.c && t.c && t.c.d())
        }
        l(t) {
            this.n.forEach((e => {
                e.b && e.b.g(t),
                e.c && e.c.g(t)
            }
            ))
        }
    }
    ;
    class yl extends ml {
        constructor(t, e) {
            super(),
            this.o = t,
            this.B = e,
            this.u = !1,
            this.v = !1,
            this.dc = !1,
            this.C = -1,
            this.j = -1,
            this.n = [],
            this.s = {},
            this.w = [],
            this.t = !1,
            this.A = null,
            this.fe = 0,
            this.q(e)
        }
        q(t) {
            if (this.t)
                return;
            this.o.options;
            if (t.StateKit && this.w.push(new wl(this,t.StateKit.effects)),
            t.Creature && (this.A = t.Creature.CreatureGeosetData,
            this.fe = t.Creature.CreatureGeosetDataID),
            t.Model && (this.d = new _l(this.o,this.o.renderer,t.Model),
            this.d.j(),
            t.Creature && t.Creature.ParticleColor && this.d.X(t.Creature.ParticleColor),
            t.Scale && this.d.d(t.Scale)),
            this.B.Creature && this.B.Creature.Texture && (this.z = this.x(-1, bl.c(this.B.TextureFiles[this.B.Creature.Texture], 3, 0, 0)),
            this.d.s(this.z.a, this.z.d, this.z.b)),
            t.Textures)
                for (let e in t.Textures)
                    0 != t.Textures[e] && this.d.aF(+e, this.o.getTexture(t.Textures[e]));
            this.dc = !0,
            this.l()
        }
        x(t, e) {
            let i = new mr;
            return e.b > 0 && (i.a = this.o.getTexture(e.b)),
            e.c > 0 && (i.d = this.o.getTexture(e.c)),
            e.a > 0 && (i.b = this.o.getTexture(e.a)),
            i
        }
        l() {
            this.t || (this.dc = !0,
            this.z || (this.v = !0))
        }
        hg(t) {
            this.p = null,
            t <= 0 || (this.u = !1,
            Gl.b(this.o, ar.NPC, t).then((t => {
                t instanceof yl && (this.p = t)
            }
            )))
        }
        i() {
            this.d,
            this.p
        }
        setAnimation(t, e=!0) {
            this.p && (this.p.setAnimation(t),
            t = "Mount"),
            this.d ? this.d.w(t, e) : this.e(( () => {
                var i;
                null === (i = this.d) || void 0 === i || i.w(t, e)
            }
            ))
        }
        y() {
            const t = this.d;
            if (t.g(0, 0, !0),
            0 != this.fe && (t.g(1, 1699, !1),
            this.A))
                for (let e of this.A) {
                    let i = 100 * (e.GeosetIndex + 1)
                      , s = i + e.GeosetValue;
                    t.g(i, i + 99, !1),
                    t.g(s, s, !0)
                }
        }
        ba() {
            this.y()
        }
        k() {
            const t = this.d;
            t.ar && this.dc && t.am && 0 != t.am.length && (this.ba(),
            this.dc = !1)
        }
        setParticlesEnabled(t) {
            this.d && this.d.ac(t)
        }
        getBounds() {
            if (this.d && this.d.ar) {
                const [t,e] = this.d.z();
                if (this.p && this.p.loaded && this.u) {
                    const [i,s] = this.p.getBounds();
                    yi(i, i, _i(0, 0, 0)),
                    wi(t, t, i),
                    yi(e, e, s)
                }
                return [t, e]
            }
            return [null, null]
        }
        a() {
            if (!this.t && this.loaded) {
                if (!this.u && this.d && this.p && this.p.loaded) {
                    const t = this.p.d.c
                      , e = t.u[t.z[0]]
                      , i = Bi();
                    qi(i, i, e.c),
                    this.d.S(this.p.d, e.a, i, 1 / this.p.d.n),
                    this.d.w("Mount", !1),
                    this.u = !0
                }
                this.r && this.r.a(),
                this.p && this.p.a(),
                this.w && this.w.forEach((t => t.b())),
                this.k(),
                this.d.k()
            }
        }
        b(t) {
            this.d.q(t),
            this.p && this.p.b(t),
            this.w && this.w.forEach((e => e.d(t)))
        }
        g(t) {
            super.g(t),
            this.p && this.p.g(t),
            this.r && this.r.g(t),
            this.w && this.w.forEach((e => e.l(t)))
        }
    }
    function Al(t) {
        return new Promise(( (e, i) => {
            $.getJSON(t).done((function(t) {
                e(t)
            }
            )).fail((function(t, e, s) {
                let r = e + ", " + s;
                console.log("Error loading metadata: " + r),
                i(e)
            }
            ))
        }
        ))
    }
    function El(t, e, i) {
        let s;
        return e == ar.HELM ? Cl(t, 1, i) : e == ar.SHOULDER ? Cl(t, 3, i) : e == ar.ITEM ? Cl(t, -1, i) : (e == ar.NPC || e == ar.HUMANOIDNPC ? s = "meta/npc/" : e == ar.OBJECT ? s = "meta/object/" : e == ar.CHARACTER ? s = "meta/character/" : e == ar.ITEMVISUAL && (s = "meta/itemvisual/"),
        Al(t + s + i + ".json"))
    }
    function Cl(t, e, i) {
        let s = "meta/item/";
        return 1 != e && 3 != e && 4 != e && 5 != e && 6 != e && 7 != e && 8 != e && 9 != e && 10 != e && 16 != e && 19 != e && 20 != e || (s = "meta/armor/" + e + "/"),
        Al(t + s + i + ".json")
    }
    class Ml {
        constructor() {
            this.e = null,
            this.d = 1,
            this.c = 0,
            this.b = -1,
            this.a = !1
        }
    }
    class Sl {
        constructor(t, e) {
            this.b = t,
            this.a = e
        }
    }
    class Fl extends Ml {
        constructor() {
            super(...arguments),
            this.ba = []
        }
    }
    class Il {
        constructor(t, e) {
            this.a = t,
            this.b = e
        }
    }
    function Dl(t, e) {
        return t == e || !!t && (!!e && (t.b == e.b && (t.a == e.a || !!t.a && (!!e.a && (t.a.b == e.a.b && (t.a.a == e.a.a && t.a.c == e.a.c))))))
    }
    class kl {
        constructor(t, e) {
            this.g = t,
            this.d = [],
            this.f = e,
            this.c = {},
            this.a = {}
        }
        e() {
            const t = [];
            for (let e of this.f.Options)
                for (let i of e.Choices)
                    for (let e of i.Elements)
                        e.SkinnedModel && t.push(e.SkinnedModel.CollectionFileDataID);
            const e = new Set(t)
              , i = this.g.o;
            i.renderer;
            if (0 != e.size)
                for (let t of e) {
                    const e = new Fl;
                    e.e = new vl(i,t,{},!0),
                    this.g.ed[t] = e
                }
        }
        h(t) {
            return bl.c(this.f.TextureFiles[t], this.g.gf, this.g.CB, this.g.kj)
        }
        b(t) {
            WH.debug("applyCustomization options", t),
            this.d = [],
            this.g.n = [];
            for (const t in this.g.ed) {
                this.g.ed[t].ba = []
            }
            let e = 0
              , i = {}
              , s = {};
            for (let r = 0; r < t.length; r++) {
                let n = this.f.Options.find((e => e.Id == t[r].optionId));
                if (WH.debug("option", n),
                n) {
                    let a = n.Choices.find((e => e.Id == t[r].choiceId));
                    if (WH.debug("choice", a),
                    a) {
                        let r = a.Elements.filter((e => e.BoneSet && e.BoneSet.BoneFileDataID && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID)))));
                        r.length > 0 && (e = r[0].BoneSet.BoneFileDataID);
                        let o = a.Elements.filter((e => e.Material && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID)))));
                        o.sort(( (t, e) => e.VariationChoiceID - t.VariationChoiceID)),
                        o.forEach((t => {
                            WH.debug("element material", t);
                            let e = this.h(t.Material.MaterialResourcesID);
                            if (!e)
                                return void WH.debug("element material: can't get texture files for material", t);
                            let r = this.f.TextureLayers.find((e => e.ChrModelTextureTargetID == t.Material.TextureTarget));
                            if (!r)
                                return void WH.debug("element material: can't get texture layer for material", t);
                            const n = new Il(e,r.TextureType);
                            Dl(n, this.a[t.Material.TextureTarget]) ? (i[t.Material.TextureTarget] = this.c[t.Material.TextureTarget],
                            s[t.Material.TextureTarget] = this.a[t.Material.TextureTarget]) : (i[t.Material.TextureTarget] = this.g.x(r.TextureType, e),
                            s[t.Material.TextureTarget] = n)
                        }
                        )),
                        a.Elements.filter((e => e.Geoset && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID))))).sort(( (t, e) => t.Geoset.GeosetType - e.Geoset.GeosetType || t.Geoset.GeosetID - e.Geoset.GeosetID)).forEach((t => {
                            WH.debug("element geoset", t),
                            this.d.push(100 * t.Geoset.GeosetType + t.Geoset.GeosetID)
                        }
                        )),
                        a.Elements.filter((e => e.SkinnedModel && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID))))).forEach((t => {
                            WH.debug("element skinnedmodel", t),
                            t.ChrCustItemGeoModifyID;
                            const e = this.g.ed[t.SkinnedModel.CollectionFileDataID];
                            t.SkinnedModel.GeosetID < 100 && e.ba.push(new Sl(100 * t.SkinnedModel.GeosetType + t.SkinnedModel.GeosetID,(1 & t.SkinnedModel.Flags) > 0))
                        }
                        ));
                        let h = a.Elements.find((e => 0 != e.CondModelFileDataId && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID)))));
                        24 != n.Id && 353 != n.Id || (h && !this.g.overrideModelFile ? this.g.overrideModelFile = h.CondModelFileDataId : !h && this.g.overrideModelFile && (this.g.overrideModelFile = 0)),
                        a.Elements.filter((e => e.ChrCustItemGeoModifyID && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID))))).forEach((t => {
                            WH.debug("element ChrCustItemGeoModify", t),
                            this.g && this.g.n.push(t.ChrCustItemGeoModifyID)
                        }
                        ))
                    }
                }
            }
            if (!this.c[10]) {
                let e = this.f.Options.find((t => t.Id == this.f.HairStyleOptionId));
                if (e) {
                    let r = e.Choices[1];
                    if (r) {
                        let e = r.Elements.filter((e => e.Material && 10 == e.Material.TextureTarget && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID)))));
                        if (e.length > 0) {
                            let t = this.h(e[0].Material.MaterialResourcesID);
                            if (t) {
                                const r = new Il(t,0);
                                Dl(r, this.a[e[0].Material.TextureTarget]) ? (i[e[0].Material.TextureTarget] = this.c[e[0].Material.TextureTarget],
                                s[e[0].Material.TextureTarget] = this.a[e[0].Material.TextureTarget]) : (i[e[0].Material.TextureTarget] = this.g.x(6, t),
                                s[e[0].Material.TextureTarget] = r)
                            }
                        }
                    }
                }
            }
            this.c = i,
            this.a = s,
            this.g.h().aK(e),
            this.g.v = !0
        }
        j() {
            let t = [];
            for (let e = 0; e < this.f.Options.length; e++) {
                let i = this.f.Options[e];
                if (i) {
                    let e = i.Choices[0];
                    e && t.push({
                        optionId: i.Id,
                        choiceId: e.Id
                    })
                }
            }
            this.b(t)
        }
        i(t) {
            let e = {
                options: t,
                sheathMain: -1,
                sheathOff: -1
            };
            for (let t of this.f.Options)
                e.options.some((e => e.optionId == t.Id)) || e.options.push({
                    optionId: t.Id,
                    choiceId: t.Choices[0].Id
                });
            return e
        }
    }
    class Rl {
        constructor() {
            this.c = null,
            this.a = 1,
            this.b = !1
        }
    }
    const Ul = class {
        constructor(t, e, i) {
            this.e = t,
            this.f = e,
            this.k = [],
            this.g = !1,
            this.l = [],
            i && this.d(i)
        }
        b() {}
        d(t) {
            this.i = t;
            El(this.e.l.options.contentPath, ar.ITEMVISUAL, t).then((t => {
                this.a(t)
            }
            ))
        }
        a(t) {
            if (this.k = new Array(7),
            t.ItemEffects)
                for (let e = 0; e < t.ItemEffects.length; ++e) {
                    let i = t.ItemEffects[e];
                    if (-1 == i.SubClass || this.f == i.SubClass) {
                        if (i.Model) {
                            const t = new Rl;
                            this.k[i.Slot - 1] = t,
                            t.c = new _l(this.e.l,this.e.l.renderer,i.Model),
                            t.a = i.Scale && 1 != i.Scale ? i.Scale : 1
                        }
                        if (i.kit) {
                            const t = new wl(this.e,i.kit.effects);
                            this.l.push(t)
                        }
                    }
                }
            for (var e = 0; e < this.k.length; ++e)
                t.Equipment[e] && null == this.k[e] && (this.k[e] = new Rl,
                this.k[e].c = new _l(this.e.l,this.e.l.renderer,t.Equipment[e]));
            this.g = !0
        }
        c(t) {
            for (let e = 0; e < this.k.length; e++) {
                const i = this.k[e];
                i && i.b && i.c.q(t)
            }
        }
        h(t) {
            for (let e = 0; e < this.k.length; e++) {
                const i = this.k[e];
                i && i.b && (i.c && i.c.ar && t.c(i.c, !1))
            }
        }
        m(t, e, i) {
            if (t.b)
                return;
            if (!i.loaded)
                return;
            if (!t.c || !t.c.ar)
                return;
            const s = i.modelInstance.c;
            let r = null;
            if (e < 5) {
                if (!s.u[e])
                    return;
                r = s.u[e]
            } else
                r = i.modelInstance.b(19);
            let n = Bi();
            qi(n, n, r.c),
            Vi(n, n, _i(t.a, t.a, t.a)),
            t.c.S(i.modelInstance, r.a, n),
            t.b = !0
        }
        j() {
            if (this.e.loaded) {
                for (const t of this.l)
                    t && t.b();
                for (let t = 0; t < this.k.length; t++) {
                    const e = this.k[t];
                    e && (this.m(e, t, this.e),
                    e.c.k())
                }
            }
        }
    }
    ;
    class Ol {
        constructor(t, e, i) {
            this.j = t,
            this.C = [],
            this.n = !1,
            this.L = null,
            this.A = [],
            this.a = Bi(),
            WH.debug("Creating item", i),
            this.I = e,
            this.G = i,
            this.u = t.kj,
            this.K = t.gf,
            this.l = t.CB,
            this.m = or[e],
            this.J = hr[e],
            this.k = null,
            this.f = null,
            this.c = null,
            this.y = 0,
            this.v = 0,
            this.n = !1,
            this.b = !1,
            this.F = 0,
            this.s = 3,
            this.D = 0,
            i && this.x()
        }
        p() {
            var t = this;
            if (t.C) {
                for (let e = 0; e < t.C.length; ++e)
                    t.C[e] && (t.C[e].e = null,
                    t.C[e] = null);
                t.C = null
            }
            if (t.k) {
                for (let e = 0; e < t.k.length; ++e)
                    t.k[e].texture && t.k[e].texture.b(),
                    t.k[e].texture = null,
                    t.k[e] = null;
                t.k = null
            }
            if (t.f = null,
            t.c = null,
            t.A) {
                for (let e = 0; e < t.A.length; e++)
                    t.A[e].b();
                t.A = null
            }
            t.n = !1,
            WH.debug("Destroyed item", this.G)
        }
        x() {
            let t = this
              , e = this.j.o.options;
            WH.debug("Loading item", this.G),
            Cl(e.contentPath, this.I, this.G).then((t => {
                this.o(t)
            }
            )).catch(( () => {
                t.b = !0
            }
            ))
        }
        o(t) {
            if (!this.j)
                return void WH.debug("Char model was destroyed before it was loaded", this.G);
            const e = this.j.o
              , i = (e.options,
            this.K)
              , s = this.u
              , r = this.l;
            if (this.v = t.Item.Flags,
            this.y = t.Item.InventoryType,
            this.h = t.Item.ItemClass,
            this.t = t.Item.ItemSubClass,
            t.ComponentTextures) {
                this.k = [];
                for (let n in t.ComponentTextures) {
                    const a = parseInt(n)
                      , o = bl.c(t.TextureFiles[t.ComponentTextures[n]], i, r, s);
                    if (o) {
                        let t;
                        t = {
                            region: a,
                            gender: this.K,
                            file: o.b,
                            texture: null
                        },
                        12 != a ? t.texture = e.getTexture(o.b) : 16 == this.I && this.j.h().aF(2, e.getTexture(o.b)),
                        this.k.push(t)
                    }
                }
            }
            this.f = t.Item.GeosetGroup,
            this.c = t.Item.AttachGeosetGroup,
            this.D = t.Item.GeosetGroupOverride,
            1 == this.I && (0 == i ? this.w = t.Item.HideGeosetMale : this.q = t.Item.HideGeosetFemale);
            let n = 0;
            if (3 == this.I ? n = 2 : ur[this.I] != ar.ARMOR && (n = 1),
            n > 0 && t.ComponentModels)
                for (let i = 0; i < n; ++i) {
                    let s = Gl.c(e, t, ur[this.I], this.u, this.K, this.l);
                    if (3 == this.I && s.cba(i + 1),
                    null == s.modelInstance)
                        continue;
                    const r = new Ml;
                    r.e = s,
                    r.c = i,
                    t.Item && t.Item.ParticleColor && r.e.modelInstance.X(t.Item.ParticleColor),
                    this.C.push(r)
                }
            if ((6 == this.I || 16 == this.I) && t.ComponentModels) {
                let n = 0;
                if (16 == this.I && (n = 1),
                t.ComponentModels[n]) {
                    const a = t.ComponentModels[n]
                      , o = bl.b(t.ModelFiles[a], -1, i, r, s)
                      , h = new Ml
                      , l = 0 == n ? t.Textures : t.Textures2;
                    h.e = new vl(e,o,l,!1),
                    this.C = [h]
                }
            }
            const a = this.I;
            if ((4 == a || 5 == a || 20 == a || 6 == a || 7 == a || 10 == a || 8 == a || 1 == a || 9 == a || 19 == a || 16 == a) && t.ComponentModels) {
                let n = 0;
                if (1 != a && 6 != a || (n = 1),
                t.ComponentModels[n]) {
                    const a = t.ComponentModels[n];
                    if (a && t.ModelFiles && t.ModelFiles[a]) {
                        const o = bl.b(t.ModelFiles[a], -1, i, r, s);
                        if (o) {
                            const i = 0 == n ? t.Textures : t.Textures2;
                            this.L = new Ml,
                            this.L.e = new vl(e,o,i,!0),
                            this.L.e.e(( () => {
                                this.j.dc = !0
                            }
                            ))
                        }
                    }
                }
            }
            7 == a && this.f[2] > 0 && (this.J += 2);
            const o = 0 != this.F ? this.F : 0 != t.Item.ItemVisual ? t.Item.ItemVisual : 0;
            if (0 != o) {
                const t = 2 == this.h ? this.t : -1;
                for (let e = 0; e < this.C.length; e++)
                    this.A.push(new Ul(this.C[e].e,t,o))
            }
            this.n = !0,
            WH.debug("Loaded item:", "DisplayId", this.G, "InventoryType", this.y),
            this.j.dc = !0
        }
        H(t) {
            for (let t = 0; t < this.A.length; t++)
                this.A[t].b();
            this.A = [],
            this.F = t
        }
        r(t) {
            this.s = t
        }
        z(t) {
            if (3 == this.I) {
                const e = t.e.shoulderIndex;
                if (1 == e && 0 == (1 & this.s))
                    return !0;
                if (2 == e && 0 == (2 & this.s))
                    return !0
            }
            return !1
        }
        e(t) {
            for (let e = 0; e < this.A.length; ++e)
                this.A[e] && this.A[e].c(t);
            for (let e = 0; e < this.C.length; ++e) {
                const i = this.C[e];
                if (i && i.e) {
                    if (this.z(i))
                        continue;
                    i.e.b(t)
                }
            }
        }
        d() {
            if (this.C)
                for (let t = 0; t < this.C.length; ++t)
                    this.C[t].a = !1,
                    this.C[t].e && this.C[t].e.i(null, -1, null);
            this.L && (this.L.a = !1)
        }
        B(t, e, i) {
            if (!t)
                return;
            if (!t.e)
                return;
            if (!t.e.modelInstance.ar)
                return;
            const s = t.c;
            if (s < i.length) {
                let r = e.u[i[s]];
                if (t.a && r.a == t.b)
                    return;
                let n = !1
                  , a = sr[t.e.fileDataId]
                  , o = gi()
                  , h = Bi();
                if (Li(h),
                a && (mi(o, 1, 1, -1),
                Vi(h, h, o),
                n = !0),
                22 != this.I && 23 != this.I && 22 != this.m || 0 == (256 & this.v) || (mi(o, 1, -1, 1),
                Vi(h, h, o),
                n = !0,
                t.e.isMirrored = !0),
                t.e.winding = n,
                5 == this.j.C && 26 == this.I && 2 == this.h && 18 == this.t && (Li(h),
                Xi(h, h, -Math.PI / 2)),
                qi(h, h, r.c),
                Hi(h, h, this.a),
                27 == this.I) {
                    let e = t.e.fe.Scale;
                    mi(o, e, e, e),
                    Vi(h, h, o)
                }
                t.e.i(this.j.h(), r.a, h),
                t.a = !0,
                t.b = r.a
            }
            t.a = !0
        }
        E(t) {
            zi(this.a, t);
            for (let t = 0; t < this.C.length; ++t)
                this.C[t].a = !1
        }
        i() {
            if (!this.j.loaded)
                return;
            const t = this.j.h().c
              , e = this.j.on(this.m, this);
            for (let i = 0; i < this.C.length; ++i)
                this.B(this.C[i], t, e),
                this.A[i] && this.A[i].j();
            this.L && this.j.M(this.L);
            for (let t = 0; t < this.C.length; ++t) {
                const e = this.C[t];
                if (e && e.e) {
                    if (this.z(e))
                        continue;
                    e.e.a()
                }
            }
        }
        g(t) {
            this.C.forEach((e => {
                e.e.g(t)
            }
            )),
            this.L && this.L.e.g(t)
        }
    }
    class Pl extends yl {
        constructor(t, e) {
            super(t, e),
            this.yx = new Map,
            this.ut = [],
            this.ed = {},
            this.J = null,
            t.options.charCustomization && (this.I = t.options.charCustomization),
            this.N = new Array(52);
            for (let t = 0; t < 52; t++)
                this.N[t] = 100 * t + rr[t]
        }
        get overrideModelFile() {
            return this.L
        }
        set overrideModelFile(t) {
            const e = this.L;
            this.L = t,
            e != t && (this.H(),
            this.F(),
            this.dc = !0)
        }
        H() {
            let t = this.L ? this.L : this.G.Model;
            this.d = new _l(this.o,this.o.renderer,t),
            this.d.j(),
            this.d.aw(27 == this.kj || 30 == this.kj),
            this.J = null,
            this.dc = !0
        }
        q(t) {
            const e = this.o.options;
            this.kj = t.Character.Race,
            this.gf = t.Character.Gender,
            this.CB = e.cls ? e.cls : 0;
            const i = e && e.items;
            El(e.contentPath, ar.CHARACTER, t.Character.ChrModelId).then((s => {
                var r, n;
                this.G = s,
                this.H(),
                (r = e.contentPath,
                n = t.Character.ChrModelId,
                new Promise(( (t, e) => {
                    const i = r + "meta/charactercustomization/" + n + ".json";
                    $.getJSON(i, (function(e) {
                        t(e)
                    }
                    ))
                }
                ))).then((e => {
                    var s, r;
                    if (WH.debug("Got customization data v2", e),
                    this.E = new kl(this,e),
                    null === (s = this.K) || void 0 === s || s.call(this, this.E.f),
                    this.E.e(),
                    this.I)
                        this.setAppearance(this.I);
                    else if (t.Character.Race > 0 && (null === (r = null == t ? void 0 : t.Creature) || void 0 === r ? void 0 : r.CreatureCustomizations)) {
                        let e = this.E.i(t.Creature.CreatureCustomizations);
                        this.setAppearance(e)
                    } else
                        this.E.j();
                    this.v && this.l(),
                    t.Equipment && this.P(t.Equipment),
                    i && this.P(i)
                }
                ))
            }
            )),
            this.v = !0
        }
        F() {
            for (const [t,e] of this.yx)
                e.d();
            for (const t in this.ed) {
                this.ed[t].a = !1
            }
            for (const t of this.w)
                t.j()
        }
        ih(t, e, i) {
            if (!this.yx)
                return;
            if (3 == t && this.ut && this.ut[0])
                return;
            let s = new Ol(this,t,e);
            i && s.H(i);
            let r = s.m
              , n = lr[t];
            this.yx.get(r) && 0 != n ? (s.m = n,
            this.yx.set(n, s)) : this.yx.set(r, s)
        }
        D(t) {
            var e = this.yx.get(t);
            e || (t = or[t],
            e = this.yx.get(t)),
            e && (this.yx.delete(t),
            e.p())
        }
        on(t, e) {
            const i = this.d.c
              , s = []
              , r = {
                14: t => [0],
                26: t => 2 == t.h && 18 == t.t ? [1] : null
            };
            if (i.u && i.z) {
                const n = {
                    1: t => [11],
                    3: t => [6, 5],
                    22: t => {
                        var e;
                        return (null === (e = r[t.I]) || void 0 === e ? void 0 : e.call(r, t)) || [2]
                    }
                    ,
                    21: t => [1],
                    17: t => [1],
                    15: t => [2],
                    25: t => [1],
                    13: t => [1],
                    14: t => [0],
                    23: t => [2],
                    6: t => [53],
                    26: t => [1],
                    16: t => [57],
                    27: t => [55]
                };
                if (n[t]) {
                    const r = n[t](e);
                    for (let n = 0; n < r.length; ++n) {
                        let a = r[n];
                        (this.C >= 0 || this.j >= 0 || this.p) && gr[t] && (a = gr[t]),
                        this.C >= 0 && 21 == t && pr[this.C][t] && (a = pr[this.C][t]),
                        this.j >= 0 && 22 == t && pr[this.j][t] && (a = pr[this.j][t]),
                        15 == e.y && this.j >= 0 && 22 == t && pr[this.j][e.I] && (a = pr[this.j][e.I]),
                        a >= i.z.length || -1 == i.z[a] || s.push(i.z[a])
                    }
                }
            }
            return s
        }
        P(t) {
            if ($.isArray(t))
                for (let e = 0; e < t.length; ++e)
                    this.ih(t[e][0], t[e][1], t[e][2]);
            else
                for (let e in t)
                    this.ih(parseInt(e), t[e]);
            this.dc = !0,
            this.Az()
        }
        wv(t, e, i) {
            for (const s in this.ed) {
                this.ed[s].e.ba(t, e, i)
            }
        }
        ba() {
            var t;
            const e = this.d;
            for (let t = 0; t < 52; t++)
                this.N[t] = 100 * t + rr[t];
            for (const e of (null === (t = this.E) || void 0 === t ? void 0 : t.d) || [])
                e >= 0 && (this.N[Math.floor(e / 100)] = e);
            for (const t in this.ed) {
                const e = this.ed[t].ba
                  , i = this.ed[t].e;
                i.ba(0, _r, !1);
                for (const t of e)
                    i.ba(t.b, t.b, !0),
                    this.N[Math.floor(t.b / 100)] = t.b
            }
            e.g(0, _r, !1),
            e.g(0, 0, !0);
            for (let t = 0; t < this.N.length; t++)
                e.g(this.N[t], this.N[t], !0);
            let i = this.yx.get(1)
              , s = this.yx.get(3)
              , r = this.yx.get(4)
              , n = this.yx.get(5)
              , a = this.yx.get(6)
              , o = this.yx.get(7)
              , h = this.yx.get(8)
              , l = this.yx.get(9)
              , u = this.yx.get(10)
              , c = this.yx.get(19)
              , d = this.yx.get(16)
              , f = !1
              , g = !1;
            n && n.f && n.f[2] ? g = !0 : o && o.f && o.f[2] && (f = !0);
            let p = g || f;
            this.yx.forEach((t => {
                if (t && t.n && t.L) {
                    let e = t.L.e.modelInstance;
                    if (!e.ar)
                        return;
                    e.g(0, _r, !1),
                    1 == t.I ? (e.l(t.f[0], 2700),
                    e.l(t.f[1], 2100)) : 3 == t.I ? e.l(t.f[0], 2600) : 4 == t.I ? (e.l(t.f[0], 800),
                    e.l(t.f[1], 1e3)) : 5 == t.I || 20 == t.I ? (u && u.n && u.f[0] ? e.l(-2, 800) : e.l(t.f[0], 800),
                    e.l(t.f[1], 1e3),
                    p && e.l(t.f[2], 1300),
                    e.l(t.f[3], 2200),
                    e.l(t.f[4], 2800)) : 6 == t.I ? e.l(t.f[0], 1800) : 7 == t.I ? (e.l(t.f[0], 1100),
                    e.l(t.f[1], 900),
                    p && e.l(t.f[2], 1300)) : 8 == t.I ? (e.l(t.f[0], 500),
                    e.l(t.f[1], 2e3)) : 10 == t.I ? (0 == t.f[0] && n && n.n && n.f[0] ? e.l(-2, 400) : e.l(t.f[0], 400),
                    e.l(t.f[1], 2300)) : 16 == t.I ? e.l(t.f[0], 1500) : 19 == t.I ? e.l(t.f[0], 1200) : 9 == t.I && (u && u.n && u.f[0] || null != (null == u ? void 0 : u.L) || n && n.n && n.f[2] && n.f[0] > 0 ? e.l(-2, 2300) : e.l(t.f[0], 2300))
                }
            }
            )),
            this.ut.forEach((t => {
                if (t && t.L) {
                    const e = t.L.e.modelInstance;
                    e.g(0, _r, !1),
                    e.l(t.f[0], 2600)
                }
            }
            )),
            this.yx.forEach((t => {
                if (t && t.n && t.C)
                    for (let e of t.C) {
                        if (!e)
                            continue;
                        let i = e.e;
                        1 == t.I ? (i.dc(t.c[0], 27),
                        i.dc(t.c[1], 21)) : 3 == t.I ? i.dc(t.c[0], 26) : 4 == t.I ? (i.dc(t.c[0], 8),
                        i.dc(t.c[1], 10)) : 5 == t.I || 20 == t.I ? (i.dc(t.c[0], 8),
                        i.dc(t.c[1], 10),
                        i.dc(t.c[2], 13),
                        i.dc(t.c[3], 22),
                        i.dc(t.c[4], 28)) : 6 == t.I ? i.dc(t.c[0], 18) : 7 == t.I ? (i.dc(t.c[0], 11),
                        i.dc(t.c[1], 9),
                        i.dc(t.c[2], 13)) : 8 == t.I ? (i.dc(t.c[0], 5),
                        i.dc(t.c[1], 20)) : 10 == t.I ? (i.dc(t.c[0], 4),
                        i.dc(t.c[1], 23)) : 16 == t.I ? i.dc(t.c[0], 15) : 19 == t.I ? i.dc(t.c[0], 12) : 9 == t.I && i.dc(t.c[0], 23)
                    }
            }
            )),
            this.ut.forEach((t => {
                if (t && t.C)
                    for (let e of t.C) {
                        let i = e.e;
                        i.dc(t.c[0], 26),
                        t.D > 0 && (i.ba(2600, 2699, !1),
                        i.dc(t.D, 26))
                    }
            }
            ));
            if (i && i.n) {
                const t = i.L || i.C[0]
                  , s = this.kj
                  , r = 0 == this.gf ? i.w : i.q;
                if (t && r)
                    for (let t = 0; t < r.length; t++)
                        if (r[t].RaceId == s) {
                            const i = r[t].GeosetGroup;
                            if (5 == s && (1 == i || 2 == i))
                                continue;
                            if (i < 52)
                                if (0 == i)
                                    e.g(1, 99, !1);
                                else {
                                    const t = 100 * i;
                                    e.g(t, t + 99, !1)
                                }
                        }
            }
            if (i && i.C && i.D > 0)
                for (let t of i.C) {
                    let e = t.e;
                    e.ba(2600, 2799, !1),
                    e.dc(i.D, 27)
                }
            if (s && s.C && s.D > 0)
                for (let t of s.C) {
                    let e = t.e;
                    e.ba(2600, 2699, !1),
                    e.dc(s.D, 26)
                }
            if (a && a.C && a.D > 0)
                for (let t of a.C) {
                    let e = t.e;
                    e.ba(1800, 1899, !1),
                    e.dc(a.D, 18)
                }
            let _ = 0;
            if (c && (_ |= 16),
            u && u.n && u.f && u.f[0]) {
                let t = 401 + u.f[0];
                e.g(401, 499, !1),
                e.g(t, t, !0)
            } else if (n && n.n && n.f && n.f[0]) {
                let t = 801 + n.f[0];
                e.g(t, t, !0),
                u && u.f && 0 == u.f[0] && (u.J = 7,
                n.J = 8,
                WH.debug("updating sorting for chest/gloves"))
            }
            if (!(n || a || l) && r && r.n && r.f && r.f[0]) {
                let t = 801 + r.f[0];
                e.g(t, t, !0)
            }
            if (c && c.n)
                0 == (1048576 & c.v) && (e.g(2200, 2299, !1),
                e.g(2202, 2202, !0));
            else if (n && n.n && n.f && n.f[3]) {
                let t = 2201 + n.f[3];
                e.g(2200, 2299, !1),
                e.g(t, t, !0)
            }
            let b, m = !1;
            if (a && a.n && a.f && a.f[0] && (m = 0 != (512 & a.v)),
            g) {
                e.g(501, 599, !1),
                e.g(902, 999, !1),
                e.g(1100, 1199, !1),
                e.g(1300, 1399, !1);
                let t = 1301 + n.f[2];
                e.g(t, t, !0)
            } else if (f) {
                e.g(501, 599, !1),
                e.g(902, 999, !1),
                e.g(1100, 1199, !1),
                e.g(1300, 1399, !1);
                let t = 1301 + o.f[2];
                e.g(t, t, !0)
            } else if (h && h.n && h.f && h.f[0]) {
                e.g(501, 599, !1),
                e.g(901, 901, !0);
                let t = 501 + h.f[0];
                e.g(t, t, !0)
            } else {
                let t;
                t = o && o.n && o.f && o.f[1] ? 901 + o.f[1] : 901,
                e.g(t, t, !0)
            }
            b = h && h.n && h.f && h.f[1] ? 2e3 + h.f[1] : h && h.n && 0 == (1048576 & h.v) ? 2002 : 2001,
            e.g(2001, 2099, !1),
            e.g(b, b, !0);
            let x = !1;
            if (!p && c && c.n && c.f && c.f[0]) {
                let t;
                x = !1,
                m ? (x = !0,
                t = 1203) : (x = !0,
                t = 1201 + c.f[0]),
                e.g(t, t, !0)
            } else
                16 & _ && (e.g(1201, 1201, !0),
                p || (e.g(1202, 1202, !0),
                x = !0));
            if (!x && !g)
                if (n && n.n && n.f && n.f[1]) {
                    let t = 1001 + n.f[1];
                    e.g(t, t, !0)
                } else if (r && r.n && r.f && r.f[1]) {
                    let t = 1001 + r.f[1];
                    e.g(t, t, !0)
                }
            if (!g && o && o.n && o.f && o.f[0]) {
                let t = o.f[0]
                  , i = 1101 + t
                  , s = e.am.some((t => t.meshId == i));
                t > 2 ? (e.g(1300, 1399, !1),
                s ? e.g(i, i, !0) : e.g(1301, 1301, !0)) : x || e.g(i, i, !0)
            }
            if (c && c.n && c.f && c.f[0] && this.n.length > 0)
                for (let t of this.n) {
                    const i = nr[t];
                    if (i && 12 == i.GeosetType && i.Original == c.f[0] + 1) {
                        e.g(1200, 1299, !1);
                        let t = 1200 + i.Override;
                        e.g(t, t, !0);
                        break
                    }
                }
            if (d && d.n && d.f && d.f[0]) {
                e.g(1500, 1599, !1);
                let t = 1501 + d.f[0];
                if (this.n.length > 0)
                    for (let e of this.n) {
                        const i = nr[e];
                        if (i && 15 == i.GeosetType && i.Original == d.f[0] + 1) {
                            t = 1500 + i.Override;
                            break
                        }
                    }
                e.g(t, t, !0)
            }
            if (a && a.n && a.f && a.f[0]) {
                e.g(1800, 1899, !1);
                let t = 1801 + a.f[0];
                e.g(t, t, !0)
            }
            o || g || f || x || m ? e.g(1400, 1499, !1) : e.g(1401, 1401, !0)
        }
        setParticlesEnabled(t) {
            super.setParticlesEnabled(t),
            this.yx.forEach((e => {
                if (e.C)
                    for (let i = 0; i < e.C.length; ++i)
                        e.C[i] && e.C[i].e.setParticlesEnabled(t)
            }
            ))
        }
        l() {}
        O() {
            if (!this.v)
                return;
            let t = !1;
            if (this.yx.forEach((e => {
                if (e.n || e.b) {
                    if (e.k)
                        for (let i = 0; i < e.k.length; ++i)
                            if (e.k[i].texture && !e.k[i].texture.k())
                                return void (t = !0)
                } else
                    t = !0
            }
            )),
            t)
                return;
            if (!this.E)
                return;
            const e = this.E.f.Materials
              , i = this.E.f.TextureLayers
              , s = this.E.f.TextureSections;
            let r = !0
              , n = !0;
            15 != this.kj && 21 != this.kj || (n = !1),
            this.yx.forEach((t => {
                let e = t.m;
                4 != e && 5 != e && 19 != e || (r = !1,
                null == t.k && (r = !0)),
                7 == e && (n = !1,
                null == t.k && (n = !0))
            }
            ));
            let a = -1;
            if (27 == this.kj)
                for (let t of i)
                    9 == t.BlendMode && 1 == t.TextureType && t.Layer > a && (a = t.Layer);
            const o = (h = t => t.TextureType,
            i.reduce(( (t, e) => {
                var i;
                return (t[i = h(e)] || (t[i] = [])).push(e),
                t
            }
            ), {}));
            var h;
            for (const t in o) {
                const e = o[t];
                for (const t of e) {
                    const e = this.E.c[t.ChrModelTextureTargetID];
                    if (e && !e.e())
                        return
                }
            }
            for (const t in o) {
                const i = o[t]
                  , h = i[0].TextureType;
                if (!this.s[t]) {
                    const i = e.find((t => t.TextureType == h));
                    if (!i) {
                        WH.debug("unable to find material info", h);
                        continue
                    }
                    this.s[t] = new Tr(this.o.context,i.Width,i.Height)
                }
                const l = this.s[t];
                l.b();
                for (const t of i) {
                    let e = -1;
                    t.Layer == a && (e = 0);
                    const i = this.E.c[t.ChrModelTextureTargetID];
                    if (!i)
                        continue;
                    const o = t.TextureSection;
                    if (3 != o && 5 != o || r && 3 == o || n && 5 == o) {
                        let r = 0
                          , n = 0
                          , a = 1
                          , h = 1;
                        if (-1 != o && s) {
                            const t = s.find((t => t.SectionType == o));
                            if (!t) {
                                WH.debug("can't find texture section data", o);
                                continue
                            }
                            r = t.X,
                            n = t.Y,
                            a = t.Width,
                            h = t.Height
                        }
                        l.m(i, r, n, a, h, t.BlendMode, t.Layer, e)
                    }
                }
                1 == h && 52 != this.kj && 70 != this.kj && this.qp(l),
                26 != h || 52 != this.kj && 70 != this.kj || this.qp(l),
                l.l()
            }
            this.sr(this.d);
            for (let t in this.ed) {
                const e = this.ed[t];
                e.e && e.e.loaded && this.sr(e.e.h())
            }
            this.v = !1
        }
        sr(t) {
            if (this.s[1]) {
                const e = this.s[1];
                t.s(e.k(0), e.k(1), e.k(2))
            }
            for (let e in this.s) {
                this.s[e];
                t.aF(e, this.s[e].k(0))
            }
        }
        qp(t) {
            const e = [];
            this.yx.forEach((t => {
                e.push(t)
            }
            )),
            e.sort((function(t, e) {
                return t.J - e.J
            }
            ));
            const i = this.E.f.TextureSections;
            for (let s = 0; s < e.length; s++) {
                const r = e[s];
                if (r.k)
                    for (let e = 0; e < r.k.length; e++) {
                        const s = r.k[e];
                        if (s.gender == this.gf && s.texture && s.texture.k() && 12 != s.region) {
                            if (0 != (1 & this.B.Character.ChrModelFlags) && 7 == s.region)
                                continue;
                            const e = i.find((t => t.SectionType == s.region));
                            if (!e) {
                                WH.debug("can't find texture section data", s.region);
                                continue
                            }
                            const r = new mr;
                            r.a = s.texture,
                            t.m(r, e.X, e.Y, e.Width, e.Height, 0, -1, -1)
                        }
                    }
            }
        }
        setAppearance(t) {
            var e;
            this.I = t,
            this.C = t.sheathMain,
            this.j = t.sheathOff,
            null === (e = this.E) || void 0 === e || e.b(t.options),
            this.v = !0,
            this.dc = !0,
            this.l(),
            this.Az()
        }
        setCustomizationsLoadedCallback(t) {
            this.K = t
        }
        setItems(t) {
            const e = this.o.options;
            WH.debug("setItems", t);
            const i = [];
            for (let e = 0; e < t.length; e++)
                i.push([t[e].slot, t[e].display, t[e].visual]);
            i.forEach((t => {
                const i = [parseInt(t[0]), parseInt(t[1])];
                e.items.push(i)
            }
            )),
            this.P(i),
            this.v = !0
        }
        attachList(t) {
            const e = this.o.options;
            WH.debug("attachList", t);
            const i = t.split(",")
              , s = [];
            for (let t = 0; t < i.length; t += 2)
                s.push([i[t], i[t + 1]]);
            s.forEach((t => {
                const i = [parseInt(t[0]), parseInt(t[1])];
                e.items.push(i)
            }
            )),
            this.P(s),
            this.v = !0
        }
        clearSlots(t) {
            const e = this.o.options;
            WH.debug("clearSlots", t);
            const i = t.split(",");
            for (let t = 0; t < i.length; ++t) {
                this.D(parseInt(i[t]));
                const s = [];
                e.items.forEach((i => {
                    0 != e.items[t].indexOf(parseInt(i)) && s.push(i)
                }
                )),
                e.items = s
            }
            this.Az(),
            this.v = !0
        }
        setShouldersOverride(t) {
            if (WH.debug("setShouldersOverride", t),
            !t || 2 != t.length)
                return;
            for (let t = 0; t < 2; t++) {
                const e = this.ut[t];
                e && e.p(),
                this.ut[t] = null
            }
            for (let e = 0; e < 2; e++)
                if (null != t[e]) {
                    const i = new Ol(this,3,t[e]);
                    let s = 0;
                    s = 0 == e ? 1 : 2,
                    i.r(s),
                    this.ut[e] = i
                }
            const e = this.yx.get(3);
            if (e) {
                let t = 3;
                for (let e = 0; e < 2; e++)
                    this.ut[e] && (t &= ~(1 << e));
                e.r(t)
            }
            this.ut && (this.ut[0] || this.ut[1]) && this.D(3)
        }
        setSheath(t, e) {
            this.C = t,
            this.j = e,
            this.Az()
        }
        Az() {
            if (!this.loaded)
                return;
            const t = this.d;
            let e = (-1 == this.j || !this.j) && null != this.yx.get(22)
              , i = !(-1 != this.C && this.C || null == this.yx.get(13) && null == this.yx.get(21));
            for (let i of cr) {
                let s = t.c.s[i];
                s > 0 && s < t.aJ.length && this.d.aJ[s].g(e ? "HandsClosed" : "")
            }
            for (let e of dr) {
                let s = t.c.s[e];
                s > 0 && s < t.aJ.length && t.aJ[s].g(i ? "HandsClosed" : "")
            }
        }
        M(t) {
            const e = this.d;
            if (!e.ar)
                return;
            const i = t.e.modelInstance;
            if (!i || !i.ar)
                return;
            t.a || (i.S(e, -1, null),
            t.a = !0);
            let s = i.aJ;
            if (s) {
                for (let t = 0; t < s.length; t++) {
                    let i = s[t]
                      , r = this.J[i.i.c];
                    if ("number" != typeof r)
                        continue;
                    let n = s[t].q
                      , a = e.aJ[r].q;
                    s[t].l = !0,
                    zi(n, a)
                }
                i.k()
            }
        }
        ml() {
            const t = this.d;
            let e = {};
            for (let i = 0; i < t.aJ.length; i++)
                e[t.aJ[i].i.c] = i;
            this.J = e
        }
        a() {
            if (this.d && this.d.ar) {
                this.J || (this.ml(),
                this.Az()),
                super.a();
                for (const t in this.ed) {
                    const e = this.ed[t];
                    this.M(e)
                }
                this.yx.forEach((t => {
                    if (t) {
                        if (2 == t.h && 13 == t.t) {
                            if (21 == t.m && -1 != this.C)
                                return;
                            if (22 == t.m && -1 != this.j)
                                return
                        }
                        t.i()
                    }
                }
                )),
                this.ut.forEach((t => {
                    t && t.C && t.i()
                }
                )),
                this.O()
            }
        }
        static cba(t, e) {
            const i = t.e;
            if (!i.loaded)
                return;
            const s = i.modelInstance;
            if (!s || !s.ar)
                return;
            s.aJ && s.q(e)
        }
        b(t) {
            if (this.d && this.d.ar) {
                super.b(t);
                for (const e in this.ed) {
                    const i = this.ed[e];
                    Pl.cba(i, t)
                }
                if (this.yx.forEach((e => {
                    if (e) {
                        if (2 == e.h && 13 == e.t) {
                            if (21 == e.m && -1 != this.C)
                                return;
                            if (22 == e.m && -1 != this.j)
                                return
                        }
                        e.e(t)
                    }
                }
                )),
                this.ut.forEach((e => {
                    e && e.C && e.e(t)
                }
                )),
                this.m)
                    for (let e = 0; e < this.m.length; e++) {
                        let i = this.m[e];
                        i.ar && i.q(t)
                    }
                this.yx.forEach((e => {
                    e && e.L && e.L.e && e.L.a && Pl.cba(e.L, t)
                }
                ))
            }
        }
        g(t) {
            super.g(t);
            for (const e in this.ed) {
                const i = this.ed[e];
                i.a && (i.e && i.e.loaded && i.e.g(t))
            }
            if (this.yx.forEach((e => {
                if (e) {
                    if (2 == e.h && 13 == e.t) {
                        if (21 == e.m && -1 != this.C)
                            return;
                        if (22 == e.m && -1 != this.j)
                            return
                    }
                    e.g(t)
                }
            }
            )),
            this.ut.forEach((e => {
                e && e.C && e.g(t)
            }
            )),
            this.m)
                for (let e = 0; e < this.m.length; e++) {
                    let i = this.m[e];
                    i.ar && t.c(i, !1)
                }
        }
    }
    class Bl extends xl {
        constructor(t, e, i, s, r, n) {
            super(t, e, i, s, r, n),
            this.cba()
        }
        cba() {
            let t = this.k;
            const e = this.j
              , i = this.hg
              , s = this.fe;
            if (s.ComponentModels) {
                let r = s.ComponentModels[0] || s.ComponentModels[1];
                r && s.ModelFiles && s.ModelFiles[r] && (27 == s.Item.InventoryType ? this.d = new _l(this.l,this.l.renderer,s.ModelFiles[r][0].FileDataId) : this.d = new _l(this.l,this.l.renderer,bl.b(s.ModelFiles[r], -1, e, i, t)),
                this.d.j()),
                this.d && s.Item.AttachGeosetGroup && (this.d.M(s.Item.AttachGeosetGroup[0], 27),
                this.d.M(s.Item.AttachGeosetGroup[1], 21))
            }
            if (s.Textures)
                for (let t in s.Textures)
                    0 != s.Textures[t] && this.d.aF(parseInt(t), this.l.getTexture(s.Textures[t]))
        }
    }
    class zl extends xl {
        constructor(t, e, i, s, r, n) {
            super(t, e, i, s, r, n),
            this.gf = 0,
            this.ed()
        }
        get shoulderIndex() {
            return this.gf
        }
        cba(t) {
            this.gf != t && (this.gf = t,
            this.ed())
        }
        ed() {
            this.d = null;
            let t = this.k;
            const e = this.j
              , i = this.hg
              , s = this.fe;
            if (s.ComponentModels) {
                let r = s.ComponentModels[0]
                  , n = s.ComponentModels[1];
                if (!r || 1 != this.gf && 0 != this.gf) {
                    if (n && (2 == this.gf || 0 == this.gf) && (n && s.ModelFiles[n] && (this.d = new _l(this.l,this.l.renderer,bl.b(s.ModelFiles[n], 1, e, i, t)),
                    this.d.j()),
                    s.Textures2 && this.d))
                        for (let t in s.Textures2)
                            0 != s.Textures2[t] && this.d.aF(+t, this.l.getTexture(s.Textures2[t]))
                } else if (r && s.ModelFiles[r] && (this.d = new _l(this.l,this.l.renderer,bl.b(s.ModelFiles[r], 0, e, i, t)),
                this.d.j()),
                this.d && s.Textures)
                    for (let t in s.Textures)
                        0 != s.Textures[t] && this.d.aF(+t, this.l.getTexture(s.Textures[t]))
            }
            this.d && s.Item.AttachGeosetGroup && this.d.M(s.Item.AttachGeosetGroup[0], 26)
        }
        a() {
            this.d.k()
        }
        b(t) {
            this.d.q(t)
        }
    }
    class Nl extends xl {
        constructor(t, e, i, s, r, n) {
            super(t, e, i, s, r, n),
            this.cba()
        }
        cba() {
            let t = this.k;
            const e = this.j
              , i = this.hg
              , s = this.fe;
            if (s.ComponentModels) {
                let r = s.ComponentModels[0];
                r && s.ModelFiles && s.ModelFiles[r] && (this.d = new _l(this.l,this.l.renderer,bl.b(s.ModelFiles[r], -1, e, i, t)))
            }
            if (this.d && s.Textures)
                for (let t in s.Textures)
                    0 != s.Textures[t] && (this.d.G[+t] = this.l.getTexture(s.Textures[t]))
        }
    }
    class Ll extends ml {
        constructor(t, e) {
            super(),
            this.ba = t,
            this.fe = e,
            this.dc()
        }
        dc() {
            this.d = new _l(this.ba,this.ba.renderer,this.fe.Model),
            this.d.d(1 | this.fe.Scale)
        }
        a() {
            this.d && this.d.k()
        }
        getBounds() {
            return this.d.ar ? this.d.z() : [null, null]
        }
        b(t) {
            this.d && this.d.q(t)
        }
    }
    class Gl {
        static a(t, e, i) {
            if (e.Character || i == ar.CHARACTER)
                return new Pl(t,e);
            if (i == ar.NPC || i == ar.HUMANOIDNPC)
                return new yl(t,e);
            if (i == ar.HELM || i == ar.SHOULDER || i == ar.ITEM)
                return Gl.c(t, e, i, 1, 0, 0);
            if (i == ar.OBJECT)
                return new Ll(t,e);
            throw "Couldn't create actor"
        }
        static c(t, e, i, s, r, n) {
            if (i == ar.HELM)
                return new Bl(t,e,s,r,n,!1);
            if (i == ar.SHOULDER)
                return new zl(t,e,s,r,n,!1);
            if (i == ar.ITEM)
                return new Nl(t,e,s,r,n,!1);
            throw "Couldn't create item actor"
        }
        static b(t, e, i) {
            return e == ar.PATH ? new Promise(( (e, s) => {
                e(new vl(t,i,{},!1))
            }
            )) : El(t.options.contentPath, e, i).then((i => Gl.a(t, i, e)))
        }
    }
    const jl = class {
        constructor(t) {
            this.currFrame = 0,
            this.clearColor = _i(0, 0, 0),
            this.addedCss = !1,
            this.progressShown = !1,
            this.doUpdateBounds = !1,
            this.attributeState = new li,
            this.gxDevice = null,
            this.textureCache = new Map,
            this.crossFadeDuration = .3,
            this.onContextMenu = function(t) {
                return !1
            }
            ;
            var e = this;
            e.viewer = t,
            e.options = t.options,
            e.downloads = {},
            e.context = null,
            e.bgImgLoaded = !1,
            e.width = 0,
            e.height = 0,
            e.time = 0,
            e.delta = 0,
            e.actors = [],
            e.screenshotDataURL = null,
            e.makeDataURL = !1,
            e.screenshotCallback = null,
            e.azimuth = 1.5 * Math.PI,
            e.zenith = Math.PI / 2,
            e.distance = 15,
            e.fov = 30,
            e.zoom = {
                rateStep: .1,
                rateAccelerationDecay: .4,
                interpolationRate: .3,
                range: [.3, 4],
                rateCurrent: 0,
                target: 1,
                current: 1
            },
            e.zoom.range = e.zoom.range.map((function(t) {
                return Math.log(t) / Math.log(1 + e.zoom.rateStep)
            }
            )),
            e.translation = _i(0, 0, 0),
            e.translationFromModel = _i(0, 0, 0),
            e.target = _i(0, 0, 0),
            e.eye = _i(0, 0, 0),
            e.up = _i(0, 0, 1),
            e.lookDir = gi(),
            e.fullscreen = !1,
            e.projMatrix = Bi(),
            e.viewMatrix = Bi(),
            e.panningMatrix = Bi(),
            e.viewOffset = gi(),
            this.addedCss || (this.addedCss = !0,
            $("head").append('<link rel="stylesheet" href="//wow.zamimg.com/modelviewer/viewer/viewer.css" type="text/css" />'))
        }
        updateProgress() {
            if (!this.stop) {
                var t = this
                  , e = 0
                  , i = 0;
                for (var s in t.downloads)
                    e += t.downloads[s].total,
                    i += t.downloads[s].loaded;
                if (e <= 0)
                    t.progressShown && (t.progressBg.hide(),
                    t.progressBar.hide(),
                    t.progressShown = !1);
                else {
                    t.progressShown || (t.progressBg.show(),
                    t.progressBar.show(),
                    t.progressShown = !0);
                    var r = i / e;
                    t.progressBar.width(Math.round(t.width * r) + "px")
                }
            }
        }
        destroy() {
            var t = this;
            t.stop = !0,
            t.canvas && (t.canvas.detach(),
            t.progressBg.detach(),
            t.progressBar.detach(),
            t.canvas = t.progressBg = t.progressBar = null),
            t.clearBackground(),
            t.actors = []
        }
        method(t, e) {
            if ("isBackgroundLoaded" === t)
                return this.bgImgLoaded;
            if ("setBackground" !== t) {
                if (this.actors.length > 0 && this.actors[0]) {
                    const i = this.actors[0][t];
                    return i ? i.apply(this.actors[0], e) : void WH.debug("Unknown viewer method", t, "args", e)
                }
                this.actorPromises.length > 0 && this.actorPromises[0] && (this.actorPromises[0] = this.actorPromises[0].then((i => {
                    const s = i[t];
                    if (s)
                        return s.apply(i, e),
                        i;
                    WH.debug("Unknown viewer method", t, "args", e)
                }
                )))
            } else
                this.setBackground(e[0])
        }
        getTime() {
            return window.performance && window.performance.now ? window.performance.now() : Date.now()
        }
        draw(t) {
            t = model.forceTime ?? t;
            var e, i = this, s = i.context;
            if (i.delta = .001 * (t - i.time),
            i.time = t,
            i.currFrame++,
            this.doUpdateBounds && i.actors.length > 0) {
                let[t,s] = [gi(), gi()];
                for (e = 0; e < i.actors.length; ++e) {
                    const [r,n] = i.actors[e].getBounds();
                    r && wi(t, t, r),
                    n && yi(s, s, n)
                }
                const r = gi()
                  , n = gi();
                vi(r, s, t),
                Ei(n, t, r, .5);
                let a = r[2]
                  , o = r[0]
                  , h = r[1];
                const l = this.width / this.height
                  , u = 2 * Math.tan(this.fov / 2 * .0174532925)
                  , c = 1.2 * a / u
                  , d = 1.2 * o / (u * l);
                this.distance = Math.max(Math.max(c, d), 2 * h)*1.25,   // 渲染更小以方便测试 boudns
                mi(this.translationFromModel, n[0], -n[2], 0),
                this.doUpdateBounds = !1
            }
            for (i.updateCamera(),
            s.bindFramebuffer(s.FRAMEBUFFER, null),
            s.viewport(0, 0, i.width, i.height),
            s.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], 0),
            s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT),
            i.bgTexture && i.program && (s.useProgram(i.program),
            s.activeTexture(s.TEXTURE0),
            s.bindTexture(s.TEXTURE_2D, i.bgTexture),
            s.uniform1i(i.uTexture, 0),
            s.uniform4f(i.uBGTransform, i.viewer.options.bgPosition[0] || 0, i.viewer.options.bgPosition[1] || 0, i.viewer.options.bgScale[0] || 1, i.viewer.options.bgScale[1] || 1),
            i.options.backgroundRotatation && (s.uniform1f(i.uRotation, i.options.backgroundRotatation),
            s.uniform2f(i.uResolution, i.width, i.height)),
            s.bindBuffer(s.ARRAY_BUFFER, i.vb),
            s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, null),
            s.enableVertexAttribArray(i.aPosition),
            s.vertexAttribPointer(i.aPosition, 2, s.FLOAT, !1, 16, 0),
            s.enableVertexAttribArray(i.aTexCoord),
            s.vertexAttribPointer(i.aTexCoord, 2, s.FLOAT, !1, 16, 8),
            s.depthMask(!1),
            s.disable(s.CULL_FACE),
            s.blendFunc(s.ONE, s.ZERO),
            s.drawArrays(s.TRIANGLE_STRIP, 0, 4),
            s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA),
            s.enable(s.CULL_FACE),
            s.depthMask(!0),
            s.disableVertexAttribArray(i.aPosition),
            s.disableVertexAttribArray(i.aTexCoord)),
            e = 0; e < i.actors.length; ++e)
                i.actors[e].a();
            for (s.viewport(0, 0, i.width, i.height),
            this.gxDevice.b(),
            e = 0; e < i.actors.length; ++e)
                i.actors[e].b(!1);
            for (e = 0; e < i.actors.length; ++e)
                i.actors[e].b(!0);
            this.gxDevice.a()
        }
        setAdaptiveMode(t) {
            this.addaptiveMode = t,
            t && $(window).trigger("resize")
        }
        setTranslation(t, e, i) {
            this.translation = _i(t, e, i)
        }
        setBackground(t) {
            var e = this;
            e.bgImgLoaded = !1,
            e.options.background = t,
            e.clearBackground(),
            e.loadBackground()
        }
        clearBackground() {
            var t = this;
            if (t.context) {
                var e = t.context;
                t.bgTexture && e.deleteTexture(t.bgTexture),
                t.bgTexture = null,
                t.program && e.deleteProgram(t.program),
                t.program = null,
                t.vb && e.deleteBuffer(t.vb),
                t.vs && e.deleteShader(t.vs),
                t.fs && e.deleteShader(t.fs),
                t.vb = t.vs = t.fs = null
            }
            t.bgImg && (t.bgImg = null)
        }
        updateCamera() {
            var t = this;
            t.zoom.target += t.zoom.rateCurrent,
            t.zoom.rateCurrent *= 1 - t.zoom.rateAccelerationDecay,
            t.zoom.target = -Math.max(Math.min(-t.zoom.target, t.zoom.range[1]), t.zoom.range[0]),
            t.zoom.current += (t.zoom.target - t.zoom.current) * t.zoom.interpolationRate;
            var e = t.distance * Math.pow(t.zoom.rateStep + 1, -t.zoom.current)
              , i = t.azimuth
              , s = t.zenith;
            1 == t.up[2] ? (t.eye[0] = -e * Math.sin(s) * Math.cos(i) + t.target[0],
            t.eye[1] = -e * Math.sin(s) * Math.sin(i) + t.target[1],
            t.eye[2] = -e * Math.cos(s) + t.target[2]) : (t.eye[0] = -e * Math.sin(s) * Math.cos(i) + t.target[0],
            t.eye[1] = -e * Math.cos(s) + t.target[1],
            t.eye[2] = -e * Math.sin(s) * Math.sin(i) + t.target[2]),
            vi(t.lookDir, t.target, t.eye),
            Si(t.lookDir, t.lookDir),
            function(t, e, i, s) {
                var r, n, a, o, h, l, u, c, d, f, g = e[0], p = e[1], _ = e[2], b = s[0], m = s[1], x = s[2], v = i[0], T = i[1], w = i[2];
                Math.abs(g - v) < di && Math.abs(p - T) < di && Math.abs(_ - w) < di ? Li(t) : (u = g - v,
                c = p - T,
                d = _ - w,
                r = m * (d *= f = 1 / Math.hypot(u, c, d)) - x * (c *= f),
                n = x * (u *= f) - b * d,
                a = b * c - m * u,
                (f = Math.hypot(r, n, a)) ? (r *= f = 1 / f,
                n *= f,
                a *= f) : (r = 0,
                n = 0,
                a = 0),
                o = c * a - d * n,
                h = d * r - u * a,
                l = u * n - c * r,
                (f = Math.hypot(o, h, l)) ? (o *= f = 1 / f,
                h *= f,
                l *= f) : (o = 0,
                h = 0,
                l = 0),
                t[0] = r,
                t[1] = o,
                t[2] = u,
                t[3] = 0,
                t[4] = n,
                t[5] = h,
                t[6] = c,
                t[7] = 0,
                t[8] = a,
                t[9] = l,
                t[10] = d,
                t[11] = 0,
                t[12] = -(r * g + n * p + a * _),
                t[13] = -(o * g + h * p + l * _),
                t[14] = -(u * g + c * p + d * _),
                t[15] = 1)
            }(t.viewMatrix, t.eye, t.target, t.up),
            Li(t.panningMatrix),
            1 == t.up[2] ? mi(t.viewOffset, t.translation[0], -t.translation[1], 0) : mi(t.viewOffset, t.translation[0], 0, t.translation[1]),
            xi(t.viewOffset, t.viewOffset, this.translationFromModel),
            qi(t.panningMatrix, t.panningMatrix, t.viewOffset),
            Hi(t.viewMatrix, t.panningMatrix, t.viewMatrix)
        }
        init() {
            var t, e = this, i = e.context;
            if (this.blackPixelTexture = i.createTexture(),
            i.bindTexture(i.TEXTURE_2D, this.blackPixelTexture),
            i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])),
            i.bindTexture(i.TEXTURE_2D, null),
            this.greenPixelTexture = i.createTexture(),
            i.bindTexture(i.TEXTURE_2D, this.greenPixelTexture),
            i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, new Uint8Array([0, 255, 0, 255])),
            i.bindTexture(i.TEXTURE_2D, null),
            Ki(e.projMatrix, .0174532925 * e.fov, e.viewer.aspect, .1, 500),
            e.updateCamera(),
            i.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], 0),
            i.enable(i.DEPTH_TEST),
            i.depthFunc(i.LEQUAL),
            i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA),
            i.enable(i.BLEND),
            e.options.models || e.options.items) {
                e.actorPromises = [];
                var s = [].concat(e.options.models);
                if (s.length > 0) {
                    const i = e.options.mount
                      , r = e.options.shouldersOverride;
                    for (t = 0; t < s.length; ++t) {
                        const n = Gl.b(this, s[t].type, s[t].id).then((t => (i && i.id && t instanceof yl && t.hg(i.id),
                        t instanceof Pl && t.setShouldersOverride(r),
                        e.actors.push(t),
                        t))).then((t => t));
                        e.actorPromises.push(n)
                    }
                }
            }
            !function t() {
                if (!e.stop && (window.requestAnimationFrame(t),
                e.gxDevice)) {
                    var s = e.getTime();
                    if (!1 !== e.makeDataURL) {
                        if (e.canvas[0].toDataURL) {
                            var r = e.clearColor
                              , n = e.bgTexture;
                            e.options.transparent && (e.bgTexture = null,
                            e.clearColor = _i(0, 0, 0)),
                            e.draw(s);
                            var a = e.width * e.height * 4
                              , o = new Uint8Array(a);
                            i.readPixels(0, 0, e.width, e.height, i.RGBA, i.UNSIGNED_BYTE, o);
                            let t = null;
                            e.options.transparent ? (e.clearColor = _i(1, 1, 1),
                            e.draw(s),
                            t = new Uint8Array(a),
                            i.readPixels(0, 0, e.width, e.height, i.RGBA, i.UNSIGNED_BYTE, t)) : t = o;
                            for (var h = new Uint8Array(a), l = 0, u = e.height - 1; u >= 0; u--)
                                for (var c = 0; c < e.width; c++) {
                                    var d = 4 * (u * e.width + c)
                                      , f = 255 - (t[l + 0] - o[l + 0])
                                      , g = o[l + 0]
                                      , p = o[l + 1]
                                      , _ = o[l + 2];
                                    o[l + 3];
                                    h[d + 0] = g,
                                    h[d + 1] = p,
                                    h[d + 2] = _,
                                    h[d + 3] = f,
                                    l += 4
                                }
                            var b = document.createElement("canvas")
                              , m = b.getContext("2d");
                            b.width = e.width,
                            b.height = e.height;
                            var x = m.createImageData(e.width, e.height);
                            x.data.set(h),
                            m.putImageData(x, 0, 0),
                            e.screenshotDataURL = b.toDataURL.apply(b, e.makeDataURL),
                            e.screenshotCallback && (e.screenshotCallback(),
                            e.screenshotCallback = null),
                            e.clearColor = r,
                            e.bgTexture = n
                        }
                        e.makeDataURL = !1
                    }
                    e.draw(s)
                }
            }()
        }
        onDoubleClick(t) {
            es.isFullscreen() ? es.exitFullscreen() : es.requestFullscreen(this.canvas[0])
        }
        onFullscreen(t) {
            let e = this;
            if (e.viewer.container)
                if (!e.fullscreen && es.isFullscreen() || this.addaptiveMode) {
                    if (e.restoreWidth = e.width,
                    e.restoreHeight = e.height,
                    e.fullscreen = !0,
                    es.isFullscreen()) {
                        var i = $(window);
                        let t = window.screen.width || i.width()
                          , e = window.screen.height || i.height();
                        this.onResize(t, e, t / e)
                    } else if (this.addaptiveMode) {
                        var s = e.viewer.container;
                        this.onResize(s.width(), s.height(), s.width() / s.height())
                    }
                } else
                    e.fullscreen && !es.isFullscreen() && (e.fullscreen = !1,
                    this.onResize(e.restoreWidth, e.restoreHeight, e.viewer.aspect))
        }
        onResize(t, e, i) {
            this.resize(t, e),
            Ki(this.projMatrix, .0174532925 * this.fov, i, .1, 5e3)
        }
        onMouseDown(t) {
            let e = this;
            3 == t.which || t.ctrlKey ? e.rightMouseDown = !0 : e.mouseDown = !0,
            "touchstart" == t.type ? (e.mouseX = t.originalEvent.touches[0].clientX,
            e.mouseY = t.originalEvent.touches[0].clientY) : (e.mouseX = t.clientX,
            e.mouseY = t.clientY),
            $("body").addClass("unselectable"),
            t.preventDefault()
        }
        onMouseWheel(t) {
            if (!this.options.wheelEventValidation || this.options.wheelEventValidation.call(this, t))
                return this.zoom.rateCurrent += t.originalEvent.wheelDelta > 0 ? 1 : -1,
                t.preventDefault(),
                !1
        }
        onMouseUp(t) {
            let e = this;
            (e.mouseDown || e.rightMouseDown) && ($("body").removeClass("unselectable"),
            e.mouseDown = !1,
            e.rightMouseDown = !1)
        }
        onMouseMove(t) {
            let e = this;
            if ((e.mouseDown || e.rightMouseDown) && void 0 !== e.mouseX) {
                var i, s;
                "touchmove" == t.type ? (i = t.originalEvent.touches[0].clientX,
                s = t.originalEvent.touches[0].clientY) : (i = t.clientX,
                s = t.clientY);
                var r = (i - e.mouseX) / e.width * Math.PI * 2
                  , n = (s - e.mouseY) / e.width * Math.PI * 2;
                if (e.mouseDown) {
                    1 == e.up[2] ? e.azimuth -= r : e.azimuth += r,
                    e.zenith += n;
                    for (var a = 2 * Math.PI; e.azimuth < 0; )
                        e.azimuth += a;
                    for (; e.azimuth > a; )
                        e.azimuth -= a;
                    e.zenith < 1e-4 && (e.zenith = 1e-4),
                    e.zenith >= Math.PI && (e.zenith = Math.PI - 1e-4)
                } else
                    e.translation[0] += r,
                    e.translation[1] += n;
                e.mouseX = i,
                e.mouseY = s,
                t.stopPropagation()
            }
        }
        resize(t, e) {
            var i = this;
            if (i.width !== t || i.height !== e) {
                if (i.fullscreen || i.viewer.container.css({
                    height: e + "px",
                    position: "relative"
                }),
                i.width = t,
                i.height = e,
                i.canvas)
                    i.canvas.attr({
                        width: t,
                        height: e
                    }),
                    i.canvas.css({
                        width: t + "px",
                        height: e + "px"
                    }),
                    i.context.viewport(0, 0, i.width, i.height);
                else {
                    if (i.canvas = $("<canvas/>"),
                    i.canvas.attr({
                        width: t,
                        height: e
                    }),
                    i.viewer.container.append(i.canvas),
                    i.context = i.canvas[0].getContext("webgl", {
                        alpha: !0,
                        premultipliedAlpha: !1,
                        preserveDrawingBuffer: true,    // 可以拷贝渲染内容
                    }) || i.canvas[0].getContext("experimental-webgl", {
                        alpha: !0,
                        premultipliedAlpha: !1,
                        preserveDrawingBuffer: true,    // 可以拷贝渲染内容
                    }),
                    i.progressBg = $("<div/>", {
                        css: {
                            display: "none",
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "10px",
                            backgroundColor: "#000"
                        }
                    }),
                    i.progressBar = $("<div/>", {
                        css: {
                            display: "none",
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: "10px",
                            backgroundColor: "#ccc"
                        }
                    }),
                    i.viewer.container.append(i.progressBg),
                    i.viewer.container.append(i.progressBar),
                    !i.context)
                        return alert("No WebGL support, sorry! You should totally use Chrome."),
                        i.canvas.detach(),
                        void (i.canvas = null);
                    const s = [.35, .35, .35, 1]
                      , r = [1, 1, 1, 1]
                      , n = [.35, .35, .35, 1]
                      , a = gi()
                      , o = gi()
                      , h = gi();
                    Si(a, [5, -3, 3]),
                    Si(o, [5, 5, 5]),
                    Si(h, [-5, -5, -5]);
                    const l = {
                        uCameraPos: i.eye,
                        uViewMatrix: i.viewMatrix,
                        uProjMatrix: i.projMatrix,
                        uAmbientColor: s,
                        uPrimaryColor: r,
                        uSecondaryColor: n,
                        uLightDir1: a,
                        uLightDir2: o,
                        uLightDir3: h
                    };
                    this.gxDevice = new er(i.context,l),
                    this.renderer = this.gxDevice.c(),
                    i.canvas.on("mousedown touchstart", i.onMouseDown.bind(i)).on("wheel", i.onMouseWheel.bind(i)).on("dblclick", i.onDoubleClick.bind(i)).on("contextmenu", i.onContextMenu.bind(i));
                    let u = 0
                      , c = 0
                      , d = 0;
                    i.canvas.on("touchend", (function(t) {
                        const e = t.originalEvent;
                        if (!e || 1 !== e.changedTouches.length)
                            return;
                        const s = e.changedTouches[0]
                          , r = (new Date).getTime()
                          , n = r - u
                          , a = s.clientX - c
                          , o = s.clientY - d
                          , h = Math.sqrt(a * a + o * o);
                        u = r,
                        c = s.clientX,
                        d = s.clientY,
                        n < 300 && h < 30 && (t.preventDefault(),
                        i.onDoubleClick.call(i, e))
                    }
                    )),
                    $(window).on("resize", i.onFullscreen.bind(i)),
                    $(document).on("mouseup touchend", i.onMouseUp.bind(i)).on("mousemove touchmove", i.onMouseMove.bind(i)),
                    i.onFullscreen(null)
                }
                i.options.background && i.loadBackground()
            }
        }
        loadBackground() {
            var t = this
              , e = t.context;
            const i = function() {
                t.vb = e.createBuffer(),
                e.bindBuffer(e.ARRAY_BUFFER, t.vb),
                e.bufferData(e.ARRAY_BUFFER, new Float32Array(16), e.DYNAMIC_DRAW);
                var i, s = t.compileShader(e.VERTEX_SHADER, "    attribute vec2 aPosition;    attribute vec2 aTexCoord;        varying vec2 vTexCoord;        void main(void) {        vTexCoord = aTexCoord;        gl_Position = vec4(aPosition, 0, 1);    }    ");
                i = t.options.backgroundRotatation ? t.compileShader(e.FRAGMENT_SHADER, "\tprecision mediump float;    varying vec2 vTexCoord;    uniform sampler2D uTexture;    uniform vec2 uResolution;    uniform vec4 uBGTransform;    uniform float uRotation;    mat3 getTransform(vec2 pos, vec2 scale, float rotation, vec2 center) {        float c = cos(rotation);        float s = sin(rotation);        return mat3(            scale.x * c, scale.x * s, - scale.x * ( c * center.x + s * center.y ) + center.x + pos.x,            -scale.y * s, scale.y * c, - scale.y * ( - s * center.x + c * center.y ) + center.y + pos.y,            0.0, 0.0, 1.0        );    }    void main(void) {        vec2 uv = gl_FragCoord.xy / uResolution.xy;        mat3 transform = getTransform(uBGTransform.xy, uBGTransform.zw, uRotation, vec2(0.5));        uv = (vec3(uv, 1.0) * transform).xy;        gl_FragColor = texture2D(uTexture, uv);\t}") : t.compileShader(e.FRAGMENT_SHADER, "    precision mediump float;    varying vec2 vTexCoord;        uniform sampler2D uTexture;    uniform vec4 uBGTransform;        void main(void) {        gl_FragColor = texture2D(uTexture, vTexCoord.xy * uBGTransform.zw + uBGTransform.xy);    }    ");
                var r = e.createProgram();
                e.attachShader(r, s),
                e.attachShader(r, i),
                e.linkProgram(r),
                e.getProgramParameter(r, e.LINK_STATUS) ? (t.vs = s,
                t.fs = i,
                t.program = r,
                t.uTexture = e.getUniformLocation(r, "uTexture"),
                t.aPosition = e.getAttribLocation(r, "aPosition"),
                t.aTexCoord = e.getAttribLocation(r, "aTexCoord"),
                t.uBGTransform = e.getUniformLocation(r, "uBGTransform"),
                t.uRotation = e.getUniformLocation(r, "uRotation"),
                t.uResolution = e.getUniformLocation(r, "uResolution")) : console.error("Error linking shaders")
            }
              , s = function() {
                var i = t.width / t.bgImg.width
                  , s = t.height / t.bgImg.height;
                const r = [-1, -1, 0, s, 1, -1, i, s, -1, 1, 0, 0, 1, 1, i, 0];
                e.bindBuffer(e.ARRAY_BUFFER, t.vb),
                e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(r))
            };
            t.bgImg ? t.bgImg.loaded && (t.vb || i(),
            s()) : (t.bgImg = new Image,
            t.bgImg.crossOrigin = "",
            t.bgImg.onload = function() {
                var r;
                null === (r = t.bgImg) || void 0 === r || (r.loaded = !0),
                t.bgImg && (t.bgTexture = e.createTexture(),
                e.bindTexture(e.TEXTURE_2D, t.bgTexture),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.bgImg),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
                t.vb || i(),
                s(),
                t.bgImgLoaded = !0)
            }
            ,
            t.bgImg.onerror = function() {
                t.bgImg = null
            }
            ,
            t.bgImg.src = t.options.contentPath + t.options.background,
            t.viewer.options.bgPosition = t.options.bgPosition || [0, 0],
            t.viewer.options.bgScale = t.options.bgScale || [1, 1])
        }
        compileShader(t, e) {
            var i = this.context
              , s = i.createShader(t);
            if (i.shaderSource(s, e),
            i.compileShader(s),
            !i.getShaderParameter(s, i.COMPILE_STATUS))
                throw "Shader compile error: " + i.getShaderInfoLog(s);
            return s
        }
        getTexture(t) {
            if (this.textureCache.has(t)) {
                var e = this.textureCache.get(t);
                if (e.l || e.c)
                    return e
            }
            const i = new ir(this,t);
            return this.textureCache.set(t, i),
            i
        }
    }
    ;
    let Hl = {
        Types: ar
    };
    const ql = Object.assign(es, {
        Tools: ci,
        WebGL: jl,
        WEBGL: 1,
        WOW: 2,
        FLASH: 2,
        Wow: Hl
    });
    window.ZamModelViewer = ql
}
)();
//# sourceMappingURL=viewer.min.js.map
