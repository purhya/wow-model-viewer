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
                    var r = new XMLHttpRequest
                      , s = t.url
                      , n = t.type
                      , a = t.responseType || "blob"
                      , o = t.data || null;
                    t.renderer && r.addEventListener("progress", (function(e) {
                        e.lengthComputable && (t.renderer.downloads[this.responseURL] ? t.renderer.downloads[this.responseURL].loaded = e.loaded : t.renderer.downloads[this.responseURL] = {
                            loaded: e.loaded,
                            total: e.total
                        },
                        t.renderer.updateProgress())
                    }
                    )),
                    r.addEventListener("load", (function() {
                        t.renderer && (delete t.renderer.downloads[this.responseURL],
                        t.renderer.updateProgress());
                        var e = {};
                        e[t.dataType] = r.response,
                        i(r.status, r.statusText, e, r.getAllResponseHeaders())
                    }
                    )),
                    r.open(n, s, !0),
                    r.responseType = a,
                    r.send(o)
                },
                abort: function() {
                    i.abort()
                }
            }
    }
    ))) : (t = $.httpData,
    $.httpData = function(e, i, r) {
        return "binary" == i ? e.response : t(e, i, r)
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
    function r(t, e, r) {
        const s = new i(3);
        return t && (s[0] = t),
        e && (s[1] = e),
        r && (s[2] = r),
        s
    }
    function s(t, e, r) {
        return (r = r || new i(3))[0] = t[0] + e[0],
        r[1] = t[1] + e[1],
        r[2] = t[2] + e[2],
        r
    }
    function n(t, e, r) {
        return (r = r || new i(3))[0] = t[0] * e[0],
        r[1] = t[1] * e[1],
        r[2] = t[2] * e[2],
        r
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
          , r = t[1]
          , s = t[2]
          , n = t[3]
          , o = t[4]
          , h = t[5]
          , l = t[6]
          , u = t[7]
          , c = t[8]
          , f = t[9]
          , d = t[10]
          , g = t[11]
          , b = t[12]
          , _ = t[13]
          , p = t[14]
          , m = t[15]
          , v = d * m
          , x = p * g
          , T = l * m
          , w = p * u
          , y = l * g
          , A = d * u
          , E = s * m
          , M = p * n
          , C = s * g
          , S = d * n
          , k = s * u
          , F = l * n
          , I = c * _
          , D = b * f
          , U = o * _
          , R = b * h
          , O = o * f
          , B = c * h
          , P = i * _
          , z = b * r
          , N = i * f
          , G = c * r
          , L = i * h
          , H = o * r
          , j = v * h + w * f + y * _ - (x * h + T * f + A * _)
          , q = x * r + E * f + S * _ - (v * r + M * f + C * _)
          , V = T * r + M * h + k * _ - (w * r + E * h + F * _)
          , X = A * r + C * h + F * f - (y * r + S * h + k * f)
          , W = 1 / (i * j + o * q + c * V + b * X);
        return e[0] = W * j,
        e[1] = W * q,
        e[2] = W * V,
        e[3] = W * X,
        e[4] = W * (x * o + T * c + A * b - (v * o + w * c + y * b)),
        e[5] = W * (v * i + M * c + C * b - (x * i + E * c + S * b)),
        e[6] = W * (w * i + E * o + F * b - (T * i + M * o + k * b)),
        e[7] = W * (y * i + S * o + k * c - (A * i + C * o + F * c)),
        e[8] = W * (I * u + R * g + O * m - (D * u + U * g + B * m)),
        e[9] = W * (D * n + P * g + G * m - (I * n + z * g + N * m)),
        e[10] = W * (U * n + z * u + L * m - (R * n + P * u + H * m)),
        e[11] = W * (B * n + N * u + H * g - (O * n + G * u + L * g)),
        e[12] = W * (U * d + B * p + D * l - (O * p + I * l + R * d)),
        e[13] = W * (N * p + I * s + z * d - (P * d + G * p + D * s)),
        e[14] = W * (P * l + H * p + R * s - (L * p + U * s + z * l)),
        e[15] = W * (L * d + O * s + G * l - (N * l + H * d + B * s)),
        e
    }
    function l(t, e, i) {
        i = i || r();
        const s = e[0]
          , n = e[1]
          , a = e[2]
          , o = s * t[3] + n * t[7] + a * t[11] + t[15];
        return i[0] = (s * t[0] + n * t[4] + a * t[8] + t[12]) / o,
        i[1] = (s * t[1] + n * t[5] + a * t[9] + t[13]) / o,
        i[2] = (s * t[2] + n * t[6] + a * t[10] + t[14]) / o,
        i
    }
    function u(t, e, i) {
        i = i || r();
        const s = e[0]
          , n = e[1]
          , a = e[2];
        return i[0] = s * t[0] + n * t[4] + a * t[8],
        i[1] = s * t[1] + n * t[5] + a * t[9],
        i[2] = s * t[2] + n * t[6] + a * t[10],
        i
    }
    const c = 5120
      , f = 5121
      , d = 5122
      , g = 5123
      , b = 5124
      , _ = 5125
      , p = 5126
      , m = {};
    {
        const t = m;
        t[c] = Int8Array,
        t[f] = Uint8Array,
        t[d] = Int16Array,
        t[g] = Uint16Array,
        t[b] = Int32Array,
        t[_] = Uint32Array,
        t[p] = Float32Array,
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
    function v(t) {
        if (t instanceof Int8Array)
            return c;
        if (t instanceof Uint8Array)
            return f;
        if (t instanceof Uint8ClampedArray)
            return f;
        if (t instanceof Int16Array)
            return d;
        if (t instanceof Uint16Array)
            return g;
        if (t instanceof Int32Array)
            return b;
        if (t instanceof Uint32Array)
            return _;
        if (t instanceof Float32Array)
            return p;
        throw new Error("unsupported typed array type")
    }
    function x(t) {
        if (t === Int8Array)
            return c;
        if (t === Uint8Array)
            return f;
        if (t === Uint8ClampedArray)
            return f;
        if (t === Int16Array)
            return d;
        if (t === Uint16Array)
            return g;
        if (t === Int32Array)
            return b;
        if (t === Uint32Array)
            return _;
        if (t === Float32Array)
            return p;
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
        let r = i.get(t);
        if (void 0 === r) {
            const s = Object.prototype.toString.call(t);
            r = s.substring(8, s.length - 1) === e,
            i.set(t, r)
        }
        return r
    }
    function M(t, e) {
        return "undefined" != typeof WebGLTexture && E(e, "WebGLTexture")
    }
    const C = 35044
      , S = 34962
      , k = 34963
      , F = 34660
      , I = 5120
      , D = 5121
      , U = 5122
      , R = 5123
      , O = 5124
      , B = 5125
      , P = 5126
      , z = {
        attribPrefix: ""
    };
    function N(t, e, i, r, s) {
        t.bindBuffer(e, i),
        t.bufferData(e, r, s || C)
    }
    function G(t, e, i, r) {
        if (s = e,
        "undefined" != typeof WebGLBuffer && E(s, "WebGLBuffer"))
            return e;
        var s;
        i = i || S;
        const n = t.createBuffer();
        return N(t, i, n, e, r),
        n
    }
    function L(t) {
        return "indices" === t
    }
    function H(t) {
        return t.length ? t : t.data
    }
    const j = /coord|texture/i
      , q = /color|colour/i;
    function V(t, e, i) {
        return t.numComponents || t.size || function(t, e) {
            let i;
            if (i = j.test(t) ? 2 : q.test(t) ? 4 : 3,
            e % i > 0)
                throw new Error(`Can not guess numComponents for attribute '${t}'. Tried ${i} but ${e} values is not evenly divisible by ${i}. You should specify it.`);
            return i
        }(e, i || H(t).length)
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
        return i || (i = L(e) ? Uint16Array : Float32Array),
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
            "number" == typeof i ? i : i ? x(i) : P),
            arrayType: W(e.type)
        };
        var i
    }
    function Z(t, e) {
        const i = e.data || e
          , r = W(e.type)
          , s = i * r.BYTES_PER_ELEMENT
          , n = t.createBuffer();
        return t.bindBuffer(S, n),
        t.bufferData(S, s, e.drawType || C),
        {
            buffer: n,
            numValues: i,
            type: x(r),
            arrayType: r
        }
    }
    function K(t, e, i) {
        const r = X(e, i);
        return {
            arrayType: r.constructor,
            buffer: G(t, r, void 0, e.drawType),
            type: v(r),
            numValues: 0
        }
    }
    function J(t, e) {
        const i = {};
        return Object.keys(e).forEach((function(r) {
            if (!L(r)) {
                const n = e[r]
                  , a = n.attrib || n.name || n.attribName || z.attribPrefix + r;
                if (n.value) {
                    if (!Array.isArray(n.value) && !w(n.value))
                        throw new Error("array.value is not array or typedarray");
                    i[a] = {
                        value: n.value
                    }
                } else {
                    let e;
                    e = n.buffer && n.buffer instanceof WebGLBuffer ? Y : "number" == typeof n || "number" == typeof n.data ? Z : K;
                    const {buffer: o, type: h, numValues: l, arrayType: u} = e(t, n, r)
                      , c = void 0 !== n.normalize ? n.normalize : (s = u) === Int8Array || s === Uint8Array
                      , f = V(n, r, l);
                    i[a] = {
                        buffer: o,
                        numComponents: f,
                        type: h,
                        normalize: c,
                        stride: n.stride || 0,
                        offset: n.offset || 0,
                        divisor: void 0 === n.divisor ? void 0 : n.divisor,
                        drawType: n.drawType
                    }
                }
            }
            var s
        }
        )),
        t.bindBuffer(S, null),
        i
    }
    const Q = ["position", "positions", "a_position"];
    function tt(t, e) {
        let i, r;
        for (r = 0; r < Q.length && (i = Q[r],
        !(i in e)) && (i = z.attribPrefix + i,
        !(i in e)); ++r)
            ;
        r === Q.length && (i = Object.keys(e)[0]);
        const s = e[i];
        if (!s.buffer)
            return 1;
        t.bindBuffer(S, s.buffer);
        const n = t.getBufferParameter(S, F);
        t.bindBuffer(S, null);
        var a;
        const o = n / ((a = s.type) === I || a === D ? 1 : a === U || a === R ? 2 : a === O || a === B || a === P ? 4 : 0)
          , h = s.numComponents || s.size
          , l = o / h;
        if (l % 1 != 0)
            throw new Error(`numComponents ${h} not correct for length ${length}`);
        return l
    }
    function et(t, e, i) {
        const r = J(t, e)
          , s = Object.assign({}, i || {});
        s.attribs = Object.assign({}, i ? i.attribs : {}, r);
        const n = e.indices;
        if (n) {
            const e = X(n, "indices");
            s.indices = G(t, e, k),
            s.numElements = e.length,
            s.elementType = v(e)
        } else
            s.numElements || (s.numElements = tt(t, s.attribs));
        return s
    }
    function it(t, e, i) {
        const r = "indices" === i ? k : S;
        return G(t, X(e, i), r)
    }
    function rt(t, e) {
        const i = {};
        return Object.keys(e).forEach((function(r) {
            i[r] = it(t, e[r], r)
        }
        )),
        e.indices ? (i.numElements = e.indices.length,
        i.elementType = v(X(e.indices))) : i.numElements = function(t) {
            let e, i;
            for (i = 0; i < Q.length && (e = Q[i],
            !(e in t)); ++i)
                ;
            i === Q.length && (e = Object.keys(t)[0]);
            const r = t[e]
              , s = H(r).length;
            if (void 0 === s)
                return 1;
            const n = V(r, e)
              , a = s / n;
            if (s % n > 0)
                throw new Error(`numComponents ${n} not correct for length ${s}`);
            return a
        }(e),
        i
    }
    function st(t, e) {
        let i = 0;
        return t.push = function() {
            for (let e = 0; e < arguments.length; ++e) {
                const r = arguments[e];
                if (r instanceof Array || w(r))
                    for (let e = 0; e < r.length; ++e)
                        t[i++] = r[e];
                else
                    t[i++] = r
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
        return st(new (i || Float32Array)(t * e), t)
    }
    function at(t, e, i) {
        const r = t.length
          , s = new Float32Array(3);
        for (let n = 0; n < r; n += 3)
            i(e, [t[n], t[n + 1], t[n + 2]], s),
            t[n] = s[0],
            t[n + 1] = s[1],
            t[n + 2] = s[2]
    }
    function ot(t, e, i) {
        i = i || r();
        const s = e[0]
          , n = e[1]
          , a = e[2];
        return i[0] = s * t[0] + n * t[1] + a * t[2],
        i[1] = s * t[4] + n * t[5] + a * t[6],
        i[2] = s * t[8] + n * t[9] + a * t[10],
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
            const r = t[i];
            i.indexOf("pos") >= 0 ? ut(r, e) : i.indexOf("tan") >= 0 || i.indexOf("binorm") >= 0 ? ht(r, e) : i.indexOf("norm") >= 0 && lt(r, e)
        }
        )),
        t
    }
    function ft(t, e, i) {
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
    function dt(t, e, i, r, s) {
        t = t || 1,
        e = e || 1,
        i = i || 1,
        r = r || 1,
        s = s || o();
        const n = (i + 1) * (r + 1)
          , a = nt(3, n)
          , h = nt(3, n)
          , l = nt(2, n);
        for (let s = 0; s <= r; s++)
            for (let n = 0; n <= i; n++) {
                const o = n / i
                  , u = s / r;
                a.push(t * o - .5 * t, 0, e * u - .5 * e),
                h.push(0, 1, 0),
                l.push(o, u)
            }
        const u = i + 1
          , c = nt(3, i * r * 2, Uint16Array);
        for (let t = 0; t < r; t++)
            for (let e = 0; e < i; e++)
                c.push((t + 0) * u + e, (t + 1) * u + e, (t + 0) * u + e + 1),
                c.push((t + 1) * u + e, (t + 1) * u + e + 1, (t + 0) * u + e + 1);
        return ct({
            position: a,
            normal: h,
            texcoord: l,
            indices: c
        }, s)
    }
    function gt(t, e, i, r, s, n, a) {
        if (e <= 0 || i <= 0)
            throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
        r = r || 0,
        n = n || 0;
        const o = (s = s || Math.PI) - r
          , h = (a = a || 2 * Math.PI) - n
          , l = (e + 1) * (i + 1)
          , u = nt(3, l)
          , c = nt(3, l)
          , f = nt(2, l);
        for (let s = 0; s <= i; s++)
            for (let a = 0; a <= e; a++) {
                const l = a / e
                  , d = s / i
                  , g = h * l + n
                  , b = o * d + r
                  , _ = Math.sin(g)
                  , p = Math.cos(g)
                  , m = Math.sin(b)
                  , v = p * m
                  , x = Math.cos(b)
                  , T = _ * m;
                u.push(t * v, t * x, t * T),
                c.push(v, x, T),
                f.push(1 - l, d)
            }
        const d = e + 1
          , g = nt(3, e * i * 2, Uint16Array);
        for (let t = 0; t < e; t++)
            for (let e = 0; e < i; e++)
                g.push((e + 0) * d + t, (e + 0) * d + t + 1, (e + 1) * d + t),
                g.push((e + 1) * d + t, (e + 0) * d + t + 1, (e + 1) * d + t + 1);
        return {
            position: u,
            normal: c,
            texcoord: f,
            indices: g
        }
    }
    const bt = [[3, 7, 5, 1], [6, 2, 0, 4], [6, 7, 3, 2], [0, 1, 5, 4], [7, 6, 4, 5], [2, 3, 1, 0]];
    function _t(t) {
        const e = (t = t || 1) / 2
          , i = [[-e, -e, -e], [+e, -e, -e], [-e, +e, -e], [+e, +e, -e], [-e, -e, +e], [+e, -e, +e], [-e, +e, +e], [+e, +e, +e]]
          , r = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]
          , s = [[1, 0], [0, 0], [0, 1], [1, 1]]
          , n = nt(3, 24)
          , a = nt(3, 24)
          , o = nt(2, 24)
          , h = nt(3, 12, Uint16Array);
        for (let t = 0; t < 6; ++t) {
            const e = bt[t];
            for (let h = 0; h < 4; ++h) {
                const l = i[e[h]]
                  , u = r[t]
                  , c = s[h];
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
    function pt(t, e, i, r, s, n, a) {
        if (r < 3)
            throw new Error("radialSubdivisions must be 3 or greater");
        if (s < 1)
            throw new Error("verticalSubdivisions must be 1 or greater");
        const o = void 0 === n || n
          , h = void 0 === a || a
          , l = (o ? 2 : 0) + (h ? 2 : 0)
          , u = (r + 1) * (s + 1 + l)
          , c = nt(3, u)
          , f = nt(3, u)
          , d = nt(2, u)
          , g = nt(3, r * (s + l / 2) * 2, Uint16Array)
          , b = r + 1
          , _ = Math.atan2(t - e, i)
          , p = Math.cos(_)
          , m = Math.sin(_)
          , v = s + (h ? 2 : 0);
        for (let n = o ? -2 : 0; n <= v; ++n) {
            let a, o = n / s, h = i * o;
            n < 0 ? (h = 0,
            o = 1,
            a = t) : n > s ? (h = i,
            o = 1,
            a = e) : a = t + n / s * (e - t),
            -2 !== n && n !== s + 2 || (a = 0,
            o = 0),
            h -= i / 2;
            for (let t = 0; t < b; ++t) {
                const e = Math.sin(t * Math.PI * 2 / r)
                  , i = Math.cos(t * Math.PI * 2 / r);
                c.push(e * a, h, i * a),
                n < 0 ? f.push(0, -1, 0) : n > s ? f.push(0, 1, 0) : 0 === a ? f.push(0, 0, 0) : f.push(e * p, m, i * p),
                d.push(t / r, 1 - o)
            }
        }
        for (let t = 0; t < s + l; ++t)
            if (!(1 === t && o || t === s + l - 2 && h))
                for (let e = 0; e < r; ++e)
                    g.push(b * (t + 0) + 0 + e, b * (t + 0) + 1 + e, b * (t + 1) + 1 + e),
                    g.push(b * (t + 0) + 0 + e, b * (t + 1) + 1 + e, b * (t + 1) + 0 + e);
        return {
            position: c,
            normal: f,
            texcoord: d,
            indices: g
        }
    }
    function mt(t, e) {
        e = e || [];
        const i = [];
        for (let r = 0; r < t.length; r += 4) {
            const s = t[r]
              , n = t.slice(r + 1, r + 4);
            n.push.apply(n, e);
            for (let t = 0; t < s; ++t)
                i.push.apply(i, n)
        }
        return i
    }
    function vt() {
        const t = [0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, 30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, 30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, 0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, 30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30, 30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30, 0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30, 100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30, 30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0, 30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30, 30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30, 67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30, 30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0, 30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30, 0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0, 0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0]
          , e = mt([18, 0, 0, 1, 18, 0, 0, -1, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, -1, 0, 0])
          , i = mt([18, 200, 70, 120, 18, 80, 70, 200, 6, 70, 200, 210, 6, 200, 200, 70, 6, 210, 100, 70, 6, 210, 160, 70, 6, 70, 180, 210, 6, 100, 70, 210, 6, 76, 210, 100, 6, 140, 210, 80, 6, 90, 130, 110, 6, 160, 160, 220], [255])
          , r = t.length / 3
          , s = {
            position: nt(3, r),
            texcoord: nt(2, r),
            normal: nt(3, r),
            color: nt(4, r, Uint8Array),
            indices: nt(3, r / 3, Uint16Array)
        };
        s.position.push(t),
        s.texcoord.push([.22, .19, .22, .79, .34, .19, .22, .79, .34, .79, .34, .19, .34, .19, .34, .31, .62, .19, .34, .31, .62, .31, .62, .19, .34, .43, .34, .55, .49, .43, .34, .55, .49, .55, .49, .43, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0]),
        s.normal.push(e),
        s.color.push(i);
        for (let t = 0; t < r; ++t)
            s.indices.push(t);
        return s
    }
    function xt(t, e, i, r, a, o, h) {
        if (a <= 0)
            throw new Error("subdivisionDown must be > 0");
        const l = (h = h || 1) - (o = o || 0)
          , u = 2 * (a + 1) * 4
          , c = nt(3, u)
          , f = nt(3, u)
          , d = nt(2, u);
        function g(t, e, i) {
            return t + (e - t) * i
        }
        function b(e, i, h, u, b, _) {
            for (let p = 0; p <= a; p++) {
                const m = i / 1
                  , v = p / a
                  , x = 2 * (m - .5)
                  , T = (o + v * l) * Math.PI
                  , w = Math.sin(T)
                  , y = Math.cos(T)
                  , A = g(t, e, w)
                  , E = x * r
                  , M = y * t
                  , C = w * A;
                c.push(E, M, C);
                const S = s(n([0, w, y], h), u);
                f.push(S),
                d.push(m * b + _, v)
            }
        }
        for (let t = 0; t < 2; t++) {
            const r = 2 * (t / 1 - .5);
            b(e, t, [1, 1, 1], [0, 0, 0], 1, 0),
            b(e, t, [0, 0, 0], [r, 0, 0], 0, 0),
            b(i, t, [1, 1, 1], [0, 0, 0], 1, 0),
            b(i, t, [0, 0, 0], [r, 0, 0], 0, 1)
        }
        const _ = nt(3, 2 * a * 4, Uint16Array);
        function p(t, e) {
            for (let i = 0; i < a; ++i)
                _.push(t + i + 0, t + i + 1, e + i + 0),
                _.push(t + i + 1, e + i + 1, e + i + 0)
        }
        const m = a + 1;
        return p(0 * m, 4 * m),
        p(5 * m, 7 * m),
        p(6 * m, 2 * m),
        p(3 * m, 1 * m),
        {
            position: c,
            normal: f,
            texcoord: d,
            indices: _
        }
    }
    function Tt(t, e, i, r, s, n) {
        return pt(t, t, e, i, r, s, n)
    }
    function wt(t, e, i, r, s, n) {
        if (i < 3)
            throw new Error("radialSubdivisions must be 3 or greater");
        if (r < 3)
            throw new Error("verticalSubdivisions must be 3 or greater");
        s = s || 0;
        const a = (n = n || 2 * Math.PI) - s
          , o = i + 1
          , h = r + 1
          , l = o * h
          , u = nt(3, l)
          , c = nt(3, l)
          , f = nt(2, l)
          , d = nt(3, i * r * 2, Uint16Array);
        for (let n = 0; n < h; ++n) {
            const h = n / r
              , l = h * Math.PI * 2
              , d = Math.sin(l)
              , g = t + d * e
              , b = Math.cos(l)
              , _ = b * e;
            for (let t = 0; t < o; ++t) {
                const e = t / i
                  , r = s + e * a
                  , n = Math.sin(r)
                  , o = Math.cos(r)
                  , l = n * g
                  , p = o * g
                  , m = n * d
                  , v = o * d;
                u.push(l, _, p),
                c.push(m, b, v),
                f.push(e, 1 - h)
            }
        }
        for (let t = 0; t < r; ++t)
            for (let e = 0; e < i; ++e) {
                const i = 1 + e
                  , r = 1 + t;
                d.push(o * t + e, o * r + e, o * t + i),
                d.push(o * r + e, o * r + i, o * t + i)
            }
        return {
            position: u,
            normal: c,
            texcoord: f,
            indices: d
        }
    }
    function yt(t, e, i, r, s) {
        if (e < 3)
            throw new Error("divisions must be at least 3");
        s = s || 1,
        r = r || 0;
        const n = (e + 1) * ((i = i || 1) + 1)
          , a = nt(3, n)
          , o = nt(3, n)
          , h = nt(2, n)
          , l = nt(3, i * e * 2, Uint16Array);
        let u = 0;
        const c = t - r
          , f = e + 1;
        for (let t = 0; t <= i; ++t) {
            const n = r + c * Math.pow(t / i, s);
            for (let r = 0; r <= e; ++r) {
                const s = 2 * Math.PI * r / e
                  , c = n * Math.cos(s)
                  , d = n * Math.sin(s);
                if (a.push(c, 0, d),
                o.push(0, 1, 0),
                h.push(1 - r / e, t / i),
                t > 0 && r !== e) {
                    const t = u + (r + 1)
                      , e = u + r
                      , i = u + r - f
                      , s = u + (r + 1) - f;
                    l.push(t, e, i),
                    l.push(t, i, s)
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
            return rt(e, t.apply(this, Array.prototype.slice.call(arguments, 1)))
        }
    }
    function Et(t) {
        return function(e) {
            return et(e, t.apply(null, Array.prototype.slice.call(arguments, 1)))
        }
    }
    Et(vt),
    At(vt),
    Et(_t),
    At(_t),
    Et(dt),
    At(dt),
    Et(gt),
    At(gt),
    Et(pt),
    At(pt),
    Et(ft),
    At(ft),
    Et(xt),
    At(xt),
    Et(Tt),
    At(Tt),
    Et(wt),
    At(wt),
    Et(yt),
    At(yt);
    function Mt(t) {
        return !!t.texStorage2D
    }
    const Ct = function() {
        const t = {}
          , e = {};
        return function(i, r) {
            return function(i) {
                const r = i.constructor.name;
                if (!t[r]) {
                    for (const t in i)
                        if ("number" == typeof i[t]) {
                            const r = e[i[t]];
                            e[i[t]] = r ? `${r} | ${t}` : t
                        }
                    t[r] = !0
                }
            }(i),
            e[r] || ("number" == typeof r ? `0x${r.toString(16)}` : r)
        }
    }();
    new Uint8Array([128, 192, 255, 255]),
    function() {
        let t
    }();
    const St = 6406
      , kt = 6407
      , Ft = 6408
      , It = 6409
      , Dt = 6410
      , Ut = 6402
      , Rt = 34041
      , Ot = 33319
      , Bt = 33320
      , Pt = 6403
      , zt = 36244
      , Nt = 36248
      , Gt = 36249
      , Lt = {};
    {
        const t = Lt;
        t[St] = {
            numColorComponents: 1
        },
        t[It] = {
            numColorComponents: 1
        },
        t[Dt] = {
            numColorComponents: 2
        },
        t[kt] = {
            numColorComponents: 3
        },
        t[Ft] = {
            numColorComponents: 4
        },
        t[Pt] = {
            numColorComponents: 1
        },
        t[zt] = {
            numColorComponents: 1
        },
        t[Ot] = {
            numColorComponents: 2
        },
        t[Bt] = {
            numColorComponents: 2
        },
        t[kt] = {
            numColorComponents: 3
        },
        t[Nt] = {
            numColorComponents: 3
        },
        t[Ft] = {
            numColorComponents: 4
        },
        t[Gt] = {
            numColorComponents: 4
        },
        t[Ut] = {
            numColorComponents: 1
        },
        t[Rt] = {
            numColorComponents: 2
        }
    }
    const Ht = y;
    function jt(t) {
        return "undefined" != typeof document && document.getElementById ? document.getElementById(t) : null
    }
    const qt = 33984
      , Vt = 34962
      , Xt = 35713
      , Wt = 35714
      , Yt = 35632
      , Zt = 35633
      , Kt = 35981
      , $t = 35718
      , Jt = 35721
      , Qt = 35971
      , te = 35382
      , ee = 35396
      , ie = 35398
      , re = 35392
      , se = 35395
      , ne = 5126
      , ae = 5124
      , oe = 5125
      , he = 3553
      , le = 34067
      , ue = 32879
      , ce = 35866
      , fe = {};
    function de(t, e) {
        return fe[e].bindPoint
    }
    function ge(t, e) {
        return function(i) {
            t.uniform1i(e, i)
        }
    }
    function be(t, e) {
        return function(i) {
            t.uniform1iv(e, i)
        }
    }
    function _e(t, e) {
        return function(i) {
            t.uniform2iv(e, i)
        }
    }
    function pe(t, e) {
        return function(i) {
            t.uniform3iv(e, i)
        }
    }
    function me(t, e) {
        return function(i) {
            t.uniform4iv(e, i)
        }
    }
    function ve(t, e, i, r) {
        const s = de(0, e);
        return Mt(t) ? function(e) {
            let n, a;
            !e || M(0, e) ? (n = e,
            a = null) : (n = e.texture,
            a = e.sampler),
            t.uniform1i(r, i),
            t.activeTexture(qt + i),
            t.bindTexture(s, n),
            t.bindSampler(i, a)
        }
        : function(e) {
            t.uniform1i(r, i),
            t.activeTexture(qt + i),
            t.bindTexture(s, e)
        }
    }
    function xe(t, e, i, r, s) {
        const n = de(0, e)
          , a = new Int32Array(s);
        for (let t = 0; t < s; ++t)
            a[t] = i + t;
        return Mt(t) ? function(e) {
            t.uniform1iv(r, a),
            e.forEach((function(e, r) {
                let s, o;
                t.activeTexture(qt + a[r]),
                !e || M(0, e) ? (s = e,
                o = null) : (s = e.texture,
                o = e.sampler),
                t.bindSampler(i, o),
                t.bindTexture(n, s)
            }
            ))
        }
        : function(e) {
            t.uniform1iv(r, a),
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
        const r = i.size
          , s = i.count;
        return function(i) {
            t.bindBuffer(Vt, i.buffer);
            const n = i.size || i.numComponents || r
              , a = n / s
              , o = i.type || ne
              , h = fe[o].size * n
              , l = i.normalize || !1
              , u = i.offset || 0
              , c = h / s;
            for (let r = 0; r < s; ++r)
                t.enableVertexAttribArray(e + r),
                t.vertexAttribPointer(e + r, a, o, l, h, u + c * r),
                t.vertexAttribDivisor && t.vertexAttribDivisor(e + r, i.divisor || 0)
        }
    }
    fe[5126] = {
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
    fe[35664] = {
        Type: Float32Array,
        size: 8,
        setter: function(t, e) {
            return function(i) {
                t.uniform2fv(e, i)
            }
        },
        cols: 2
    },
    fe[35665] = {
        Type: Float32Array,
        size: 12,
        setter: function(t, e) {
            return function(i) {
                t.uniform3fv(e, i)
            }
        },
        cols: 3
    },
    fe[35666] = {
        Type: Float32Array,
        size: 16,
        setter: function(t, e) {
            return function(i) {
                t.uniform4fv(e, i)
            }
        },
        cols: 4
    },
    fe[ae] = {
        Type: Int32Array,
        size: 4,
        setter: ge,
        arraySetter: be
    },
    fe[35667] = {
        Type: Int32Array,
        size: 8,
        setter: _e,
        cols: 2
    },
    fe[35668] = {
        Type: Int32Array,
        size: 12,
        setter: pe,
        cols: 3
    },
    fe[35669] = {
        Type: Int32Array,
        size: 16,
        setter: me,
        cols: 4
    },
    fe[5125] = {
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
    fe[36294] = {
        Type: Uint32Array,
        size: 8,
        setter: function(t, e) {
            return function(i) {
                t.uniform2uiv(e, i)
            }
        },
        cols: 2
    },
    fe[36295] = {
        Type: Uint32Array,
        size: 12,
        setter: function(t, e) {
            return function(i) {
                t.uniform3uiv(e, i)
            }
        },
        cols: 3
    },
    fe[36296] = {
        Type: Uint32Array,
        size: 16,
        setter: function(t, e) {
            return function(i) {
                t.uniform4uiv(e, i)
            }
        },
        cols: 4
    },
    fe[35670] = {
        Type: Uint32Array,
        size: 4,
        setter: ge,
        arraySetter: be
    },
    fe[35671] = {
        Type: Uint32Array,
        size: 8,
        setter: _e,
        cols: 2
    },
    fe[35672] = {
        Type: Uint32Array,
        size: 12,
        setter: pe,
        cols: 3
    },
    fe[35673] = {
        Type: Uint32Array,
        size: 16,
        setter: me,
        cols: 4
    },
    fe[35674] = {
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
    fe[35675] = {
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
    fe[35676] = {
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
    fe[35685] = {
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
    fe[35686] = {
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
    fe[35687] = {
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
    fe[35688] = {
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
    fe[35689] = {
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
    fe[35690] = {
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
    fe[35678] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: he
    },
    fe[35680] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: le
    },
    fe[35679] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: ue
    },
    fe[35682] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: he
    },
    fe[36289] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: ce
    },
    fe[36292] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: ce
    },
    fe[36293] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: le
    },
    fe[36298] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: he
    },
    fe[36299] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: ue
    },
    fe[36300] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: le
    },
    fe[36303] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: ce
    },
    fe[36306] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: he
    },
    fe[36307] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: ue
    },
    fe[36308] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
        bindPoint: le
    },
    fe[36311] = {
        Type: null,
        size: 0,
        setter: ve,
        arraySetter: xe,
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
    const Me = /ERROR:\s*\d+:(\d+)/gi;
    const Ce = /^[ \t]*\n/;
    function Se(t) {
        let e = 0;
        return Ce.test(t) && (e = 1,
        t = t.replace(Ce, "")),
        {
            lineOffset: e,
            shaderSource: t
        }
    }
    function ke(t, e) {
        return t.errorCallback(e),
        t.callback && setTimeout(( () => {
            t.callback(`${e}\n${t.errors.join("\n")}`)
        }
        )),
        null
    }
    function Fe(t, e, i, r) {
        r = r || Ht;
        if (!t.getShaderParameter(i, Xt)) {
            const s = t.getShaderInfoLog(i)
              , {lineOffset: n, shaderSource: a} = Se(t.getShaderSource(i))
              , o = `${function(t, e="", i=0) {
                const r = [...e.matchAll(Me)]
                  , s = new Map(r.map(( (t, i) => {
                    const s = parseInt(t[1])
                      , n = r[i + 1]
                      , a = n ? n.index : e.length;
                    return [s - 1, e.substring(t.index, a)]
                }
                )));
                return t.split("\n").map(( (t, e) => {
                    const r = s.get(e);
                    return `${e + 1 + i}: ${t}${r ? `\n\n^^^ ${r}` : ""}`
                }
                )).join("\n")
            }(a, s, n)}\nError compiling ${Ct(t, e)}: ${s}`;
            return r(o),
            o
        }
        return ""
    }
    function Ie(t, e, i) {
        let r, s, n;
        if ("function" == typeof e && (i = e,
        e = void 0),
        "function" == typeof t)
            i = t,
            t = void 0;
        else if (t && !Array.isArray(t)) {
            const e = t;
            i = e.errorCallback,
            t = e.attribLocations,
            r = e.transformFeedbackVaryings,
            s = e.transformFeedbackMode,
            n = e.callback
        }
        const a = i || Ht
          , o = []
          , h = {
            errorCallback(t, ...e) {
                o.push(t),
                a(t, ...e)
            },
            transformFeedbackVaryings: r,
            transformFeedbackMode: s,
            callback: n,
            errors: o
        };
        {
            let i = {};
            Array.isArray(t) ? t.forEach((function(t, r) {
                i[t] = e ? e[r] : r
            }
            )) : i = t || {},
            h.attribLocations = i
        }
        return h
    }
    const De = ["VERTEX_SHADER", "FRAGMENT_SHADER"];
    const Ue = (t=0) => new Promise((e => setTimeout(e, t)));
    function Re(t, e, i) {
        const r = t.createProgram()
          , {attribLocations: s, transformFeedbackVaryings: n, transformFeedbackMode: a} = Ie(i);
        for (let i = 0; i < e.length; ++i) {
            let s = e[i];
            if ("string" == typeof s) {
                const e = jt(s)
                  , n = e ? e.text : s;
                let a = t[De[i]];
                e && e.type && (a = ((o = e.type).indexOf("frag") >= 0 ? Yt : o.indexOf("vert") >= 0 ? Zt : void 0) || a),
                s = t.createShader(a),
                t.shaderSource(s, Se(n).shaderSource),
                t.compileShader(s),
                t.attachShader(r, s)
            }
        }
        var o;
        Object.entries(s).forEach(( ([e,i]) => t.bindAttribLocation(r, i, e)));
        {
            let e = n;
            e && (e.attribs && (e = e.attribs),
            Array.isArray(e) || (e = Object.keys(e)),
            t.transformFeedbackVaryings(r, e, a || Kt))
        }
        return t.linkProgram(r),
        r
    }
    function Oe(t, e, i, r, s) {
        const n = Ie(i, r, s)
          , a = new Set(e)
          , o = Re(t, e, n);
        function h(t, e) {
            const i = ze(t, e, n.errorCallback);
            return i && function(t, e, i) {
                const r = t.getAttachedShaders(e);
                for (const e of r)
                    i.has(e) && t.deleteShader(e);
                t.deleteProgram(e)
            }(t, e, a),
            i
        }
        if (!n.callback)
            return h(t, o) ? void 0 : o;
        Pe(t, o).then(( () => {
            const e = h(t, o);
            n.callback(e, e ? void 0 : o)
        }
        ))
    }
    function Be(t) {
        return function(e, i, ...r) {
            return new Promise(( (s, n) => {
                const a = Ie(...r);
                a.callback = (t, e) => {
                    t ? n(t) : s(e)
                }
                ,
                t(e, i, a)
            }
            ))
        }
    }
    Be(Oe),
    Be(Je);
    async function Pe(t, e) {
        const i = t.getExtension("KHR_parallel_shader_compile")
          , r = i ? (t, e) => t.getProgramParameter(e, i.COMPLETION_STATUS_KHR) : () => !0;
        let s = 0;
        do {
            await Ue(s),
            s = 1e3 / 60
        } while (!r(t, e))
    }
    function ze(t, e, i) {
        i = i || Ht;
        if (!t.getProgramParameter(e, Wt)) {
            const r = t.getProgramInfoLog(e);
            i(`Error in program linking: ${r}`);
            return `${r}\n${t.getAttachedShaders(e).map((e => Fe(t, t.getShaderParameter(e, t.SHADER_TYPE), e, i))).filter((t => t)).join("\n")}`
        }
    }
    function Ne(t, e, i, r, s) {
        return Oe(t, e, i, r, s)
    }
    function Ge(t) {
        const e = t.name;
        return e.startsWith("gl_") || e.startsWith("webgl_")
    }
    const Le = /(\.|\[|]|\w+)/g
      , He = t => t >= "0" && t <= "9";
    function je(t, e, i, r) {
        const s = t.split(Le).filter((t => "" !== t));
        let n = 0
          , a = "";
        for (; ; ) {
            const t = s[n++];
            a += t;
            const o = He(t[0])
              , h = o ? parseInt(t) : t;
            o && (a += s[n++]);
            if (n === s.length) {
                i[h] = e;
                break
            }
            {
                const t = s[n++]
                  , e = "[" === t
                  , o = i[h] || (e ? [] : {});
                i[h] = o,
                i = o,
                r[a] = r[a] || function(t) {
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
        function r(e, r, s) {
            const n = r.name.endsWith("[0]")
              , a = r.type
              , o = fe[a];
            if (!o)
                throw new Error(`unknown type: 0x${a.toString(16)}`);
            let h;
            if (o.bindPoint) {
                const e = i;
                i += r.size,
                h = n ? o.arraySetter(t, a, e, s, r.size) : o.setter(t, a, e, s, r.size)
            } else
                h = o.arraySetter && n ? o.arraySetter(t, s) : o.setter(t, s);
            return h.location = s,
            h
        }
        const s = {}
          , n = {}
          , a = t.getProgramParameter(e, $t);
        for (let i = 0; i < a; ++i) {
            const a = t.getActiveUniform(e, i);
            if (Ge(a))
                continue;
            let o = a.name;
            o.endsWith("[0]") && (o = o.substr(0, o.length - 3));
            const h = t.getUniformLocation(e, a.name);
            if (h) {
                const t = r(0, a, h);
                s[o] = t,
                je(o, t, n, s)
            }
        }
        return s
    }
    function Ve(t, e) {
        const i = {}
          , r = t.getProgramParameter(e, Qt);
        for (let s = 0; s < r; ++s) {
            const r = t.getTransformFeedbackVarying(e, s);
            i[r.name] = {
                index: s,
                type: r.type,
                size: r.size
            }
        }
        return i
    }
    function Xe(t, e) {
        const i = t.getProgramParameter(e, $t)
          , r = []
          , s = [];
        for (let n = 0; n < i; ++n) {
            s.push(n),
            r.push({});
            const i = t.getActiveUniform(e, n);
            r[n].name = i.name
        }
        [["UNIFORM_TYPE", "type"], ["UNIFORM_SIZE", "size"], ["UNIFORM_BLOCK_INDEX", "blockNdx"], ["UNIFORM_OFFSET", "offset"]].forEach((function(i) {
            const n = i[0]
              , a = i[1];
            t.getActiveUniforms(e, s, t[n]).forEach((function(t, e) {
                r[e][a] = t
            }
            ))
        }
        ));
        const n = {}
          , a = t.getProgramParameter(e, te);
        for (let i = 0; i < a; ++i) {
            const r = t.getActiveUniformBlockName(e, i)
              , s = {
                index: t.getUniformBlockIndex(e, r),
                usedByVertexShader: t.getActiveUniformBlockParameter(e, i, ee),
                usedByFragmentShader: t.getActiveUniformBlockParameter(e, i, ie),
                size: t.getActiveUniformBlockParameter(e, i, re),
                uniformIndices: t.getActiveUniformBlockParameter(e, i, se)
            };
            s.used = s.usedByVertexShader || s.usedByFragmentShader,
            n[r] = s
        }
        return {
            blockSpecs: n,
            uniformData: r
        }
    }
    function We(t, e) {
        for (const i in e) {
            const r = t[i];
            "function" == typeof r ? r(e[i]) : We(t[i], e[i])
        }
    }
    function Ye(t, ...e) {
        const i = t.uniformSetters || t
          , r = e.length;
        for (let t = 0; t < r; ++t) {
            const r = e[t];
            if (Array.isArray(r)) {
                const t = r.length;
                for (let e = 0; e < t; ++e)
                    Ye(i, r[e])
            } else
                for (const t in r) {
                    const e = i[t];
                    e && e(r[t])
                }
        }
    }
    function Ze(t, e) {
        const i = {}
          , r = t.getProgramParameter(e, Jt);
        for (let s = 0; s < r; ++s) {
            const r = t.getActiveAttrib(e, s);
            if (Ge(r))
                continue;
            const n = t.getAttribLocation(e, r.name)
              , a = Ee[r.type]
              , o = a.setter(t, n, a);
            o.location = n,
            i[r.name] = o
        }
        return i
    }
    function Ke(t, e) {
        const i = {
            program: e,
            uniformSetters: qe(t, e),
            attribSetters: Ze(t, e)
        };
        return Mt(t) && (i.uniformBlockSpec = Xe(t, e),
        i.transformFeedbackInfo = Ve(t, e)),
        i
    }
    const $e = /\s|{|}|;/;
    function Je(t, e, i, r, s) {
        const n = Ie(i, r, s)
          , a = [];
        if (e = e.map((function(t) {
            if (!$e.test(t)) {
                const e = jt(t);
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
            return ke(n, "");
        const o = n.callback;
        o && (n.callback = (e, i) => {
            o(e, e ? void 0 : Ke(t, i))
        }
        );
        const h = Ne(t, e, n);
        return h ? Ke(t, h) : null
    }
    function Qe(t, e, i, r, s) {
        for (const [n,a] of Object.entries(e)) {
            const o = {
                ...s
            }
              , h = i[n];
            Array.isArray(h) || Object.assign(o, h);
            const l = ze(t, a, o.errorCallback);
            if (l) {
                for (const i of Object.values(e)) {
                    const e = t.getAttachedShaders(i);
                    t.deleteProgram(i);
                    for (const i of e)
                        r.has(i) || t.deleteShader(i)
                }
                return l
            }
        }
    }
    function ti(t, e, i={}) {
        const r = new Set
          , s = Object.fromEntries(Object.entries(e).map(( ([e,s]) => {
            const n = {
                ...i
            }
              , a = Array.isArray(s) ? s : s.shaders;
            return Array.isArray(s) || Object.assign(n, s),
            a.forEach(r.add, r),
            [e, Re(t, a, n)]
        }
        )));
        if (i.callback)
            return void async function(t, e) {
                for (const i of Object.values(e))
                    await Pe(t, i)
            }(t, s).then(( () => {
                const n = Qe(t, s, e, r, i);
                i.callback(n, n ? void 0 : s)
            }
            ));
        return Qe(t, s, e, r, i) ? void 0 : s
    }
    function ei(t, e, i) {
        function r(t, e) {
            return Object.fromEntries(Object.entries(e).map(( ([e,i]) => [e, Ke(t, i)])))
        }
        const s = (i = Ie(i)).callback;
        s && (i.callback = (e, i) => {
            s(e, e ? void 0 : r(t, i))
        }
        );
        const n = ti(t, e, i);
        if (!s && n)
            return r(t, n)
    }
    Be(ti),
    Be(ei);
    const ii = 36096
      , ri = 33306
      , si = {};
    si[34041] = ri,
    si[6401] = 36128,
    si[36168] = 36128,
    si[6402] = ii,
    si[33189] = ii,
    si[33190] = ii,
    si[36012] = ii,
    si[35056] = ri,
    si[36013] = ri;
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
            for (let s in e) {
                var r = e[s];
                void 0 !== r.loc && (void 0 === this.attribs[r.loc] && t.enableVertexAttribArray(r.loc),
                t.vertexAttribPointer(r.loc, r.size, r.type, !1, r.stride, r.offset),
                i[r.loc] = r.loc,
                this.attribs[s] = null)
            }
            for (let t in this.attribs)
                ;
            this.attribs = i
        }
    }
    class ui {
        static CreateProgramAttributes(t, e) {
            var i = {}
              , r = 0;
            for (let a in e) {
                var s = e[a]
                  , n = oi[a];
                i[s] = {
                    type: t.FLOAT,
                    size: n,
                    offset: 4 * r
                },
                r += n
            }
            for (let t in i)
                i[t].stride = 4 * r;
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
        static GetProgram(t, e, i, r) {
            var s = hi[e]
              , n = "";
            for (var a in i)
                n += a + ":" + i[a] + "-";
            if (!s) {
                var o = e.split(".")
                  , h = ai[o[0]][o[1]];
                h && (s = ui.RegisterProgram(e, h))
            }
            if (!s)
                throw "Program not registered: " + o;
            s.programInfo || (s.programInfo = {}),
            s.programInfo[n] = ui.CompileProgram(t, s.shaders, i),
            r = r || s.attributes && ui.CreateProgramAttributes(t, s.attributes);
            var l = s.programInfo[n];
            if (r)
                for (var a in r) {
                    var u = l.attribSetters[a];
                    u && (r[a] = r[a] || {},
                    r[a].loc = u.location)
                }
            return l.attributes = r,
            l
        }
        static CompileProgram(t, e, i, r) {
            var s = "";
            for (var n in i) {
                var a = i[n];
                s = "#define " + n + " " + (null === a ? "" : a) + "\n"
            }
            var o = {};
            const h = Je(t, [s + e[0], s + e[1]], null, null);
            if (r)
                for (var n in r) {
                    var l = h.attribSetters[n];
                    l && (r[n] = r[n] || {},
                    r[n].loc = l.location)
                }
            for (var n in h.uniformSetters)
                o[n] = h.uniformSetters[n].location;
            return h.uniforms = o,
            h
        }
    }
    var ci = new ui
      , fi = 1e-6
      , di = "undefined" != typeof Float32Array ? Float32Array : Array;
    Math.random;
    Math.PI;
    function gi() {
        var t = new di(3);
        return di != Float32Array && (t[0] = 0,
        t[1] = 0,
        t[2] = 0),
        t
    }
    function bi(t) {
        var e = t[0]
          , i = t[1]
          , r = t[2];
        return Math.hypot(e, i, r)
    }
    function _i(t, e, i) {
        var r = new di(3);
        return r[0] = t,
        r[1] = e,
        r[2] = i,
        r
    }
    function pi(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t
    }
    function mi(t, e, i, r) {
        return t[0] = e,
        t[1] = i,
        t[2] = r,
        t
    }
    function vi(t, e, i) {
        return t[0] = e[0] + i[0],
        t[1] = e[1] + i[1],
        t[2] = e[2] + i[2],
        t
    }
    function xi(t, e, i) {
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
    function Ei(t, e, i, r) {
        return t[0] = e[0] + i[0] * r,
        t[1] = e[1] + i[1] * r,
        t[2] = e[2] + i[2] * r,
        t
    }
    function Mi(t) {
        var e = t[0]
          , i = t[1]
          , r = t[2];
        return e * e + i * i + r * r
    }
    function Ci(t, e) {
        return t[0] = -e[0],
        t[1] = -e[1],
        t[2] = -e[2],
        t
    }
    function Si(t, e) {
        var i = e[0]
          , r = e[1]
          , s = e[2]
          , n = i * i + r * r + s * s;
        return n > 0 && (n = 1 / Math.sqrt(n)),
        t[0] = e[0] * n,
        t[1] = e[1] * n,
        t[2] = e[2] * n,
        t
    }
    function ki(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }
    function Fi(t, e, i) {
        var r = e[0]
          , s = e[1]
          , n = e[2]
          , a = i[0]
          , o = i[1]
          , h = i[2];
        return t[0] = s * h - n * o,
        t[1] = n * a - r * h,
        t[2] = r * o - s * a,
        t
    }
    function Ii(t, e, i, r) {
        var s = e[0]
          , n = e[1]
          , a = e[2];
        return t[0] = s + r * (i[0] - s),
        t[1] = n + r * (i[1] - n),
        t[2] = a + r * (i[2] - a),
        t
    }
    function Di(t, e, i) {
        var r = e[0]
          , s = e[1]
          , n = e[2]
          , a = i[3] * r + i[7] * s + i[11] * n + i[15];
        return a = a || 1,
        t[0] = (i[0] * r + i[4] * s + i[8] * n + i[12]) / a,
        t[1] = (i[1] * r + i[5] * s + i[9] * n + i[13]) / a,
        t[2] = (i[2] * r + i[6] * s + i[10] * n + i[14]) / a,
        t
    }
    function Ui(t, e, i) {
        var r = e[0]
          , s = e[1]
          , n = e[2];
        return t[0] = r * i[0] + s * i[3] + n * i[6],
        t[1] = r * i[1] + s * i[4] + n * i[7],
        t[2] = r * i[2] + s * i[5] + n * i[8],
        t
    }
    Math.hypot || (Math.hypot = function() {
        for (var t = 0, e = arguments.length; e--; )
            t += arguments[e] * arguments[e];
        return Math.sqrt(t)
    }
    );
    var Ri, Oi = xi, Bi = bi;
    Ri = gi();
    function Pi() {
        var t = new di(16);
        return di != Float32Array && (t[1] = 0,
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
    function Ni(t, e, i, r, s, n, a, o, h, l, u, c, f, d, g, b) {
        var _ = new di(16);
        return _[0] = t,
        _[1] = e,
        _[2] = i,
        _[3] = r,
        _[4] = s,
        _[5] = n,
        _[6] = a,
        _[7] = o,
        _[8] = h,
        _[9] = l,
        _[10] = u,
        _[11] = c,
        _[12] = f,
        _[13] = d,
        _[14] = g,
        _[15] = b,
        _
    }
    function Gi(t) {
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
    function Li(t, e) {
        if (t === e) {
            var i = e[1]
              , r = e[2]
              , s = e[3]
              , n = e[6]
              , a = e[7]
              , o = e[11];
            t[1] = e[4],
            t[2] = e[8],
            t[3] = e[12],
            t[4] = i,
            t[6] = e[9],
            t[7] = e[13],
            t[8] = r,
            t[9] = n,
            t[11] = e[14],
            t[12] = s,
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
    function Hi(t, e) {
        var i = e[0]
          , r = e[1]
          , s = e[2]
          , n = e[3]
          , a = e[4]
          , o = e[5]
          , h = e[6]
          , l = e[7]
          , u = e[8]
          , c = e[9]
          , f = e[10]
          , d = e[11]
          , g = e[12]
          , b = e[13]
          , _ = e[14]
          , p = e[15]
          , m = i * o - r * a
          , v = i * h - s * a
          , x = i * l - n * a
          , T = r * h - s * o
          , w = r * l - n * o
          , y = s * l - n * h
          , A = u * b - c * g
          , E = u * _ - f * g
          , M = u * p - d * g
          , C = c * _ - f * b
          , S = c * p - d * b
          , k = f * p - d * _
          , F = m * k - v * S + x * C + T * M - w * E + y * A;
        return F ? (F = 1 / F,
        t[0] = (o * k - h * S + l * C) * F,
        t[1] = (s * S - r * k - n * C) * F,
        t[2] = (b * y - _ * w + p * T) * F,
        t[3] = (f * w - c * y - d * T) * F,
        t[4] = (h * M - a * k - l * E) * F,
        t[5] = (i * k - s * M + n * E) * F,
        t[6] = (_ * x - g * y - p * v) * F,
        t[7] = (u * y - f * x + d * v) * F,
        t[8] = (a * S - o * M + l * A) * F,
        t[9] = (r * M - i * S - n * A) * F,
        t[10] = (g * w - b * x + p * m) * F,
        t[11] = (c * x - u * w - d * m) * F,
        t[12] = (o * E - a * C - h * A) * F,
        t[13] = (i * C - r * E + s * A) * F,
        t[14] = (b * v - g * T - _ * m) * F,
        t[15] = (u * T - c * v + f * m) * F,
        t) : null
    }
    function ji(t, e, i) {
        var r = e[0]
          , s = e[1]
          , n = e[2]
          , a = e[3]
          , o = e[4]
          , h = e[5]
          , l = e[6]
          , u = e[7]
          , c = e[8]
          , f = e[9]
          , d = e[10]
          , g = e[11]
          , b = e[12]
          , _ = e[13]
          , p = e[14]
          , m = e[15]
          , v = i[0]
          , x = i[1]
          , T = i[2]
          , w = i[3];
        return t[0] = v * r + x * o + T * c + w * b,
        t[1] = v * s + x * h + T * f + w * _,
        t[2] = v * n + x * l + T * d + w * p,
        t[3] = v * a + x * u + T * g + w * m,
        v = i[4],
        x = i[5],
        T = i[6],
        w = i[7],
        t[4] = v * r + x * o + T * c + w * b,
        t[5] = v * s + x * h + T * f + w * _,
        t[6] = v * n + x * l + T * d + w * p,
        t[7] = v * a + x * u + T * g + w * m,
        v = i[8],
        x = i[9],
        T = i[10],
        w = i[11],
        t[8] = v * r + x * o + T * c + w * b,
        t[9] = v * s + x * h + T * f + w * _,
        t[10] = v * n + x * l + T * d + w * p,
        t[11] = v * a + x * u + T * g + w * m,
        v = i[12],
        x = i[13],
        T = i[14],
        w = i[15],
        t[12] = v * r + x * o + T * c + w * b,
        t[13] = v * s + x * h + T * f + w * _,
        t[14] = v * n + x * l + T * d + w * p,
        t[15] = v * a + x * u + T * g + w * m,
        t
    }
    function qi(t, e, i) {
        var r, s, n, a, o, h, l, u, c, f, d, g, b = i[0], _ = i[1], p = i[2];
        return e === t ? (t[12] = e[0] * b + e[4] * _ + e[8] * p + e[12],
        t[13] = e[1] * b + e[5] * _ + e[9] * p + e[13],
        t[14] = e[2] * b + e[6] * _ + e[10] * p + e[14],
        t[15] = e[3] * b + e[7] * _ + e[11] * p + e[15]) : (r = e[0],
        s = e[1],
        n = e[2],
        a = e[3],
        o = e[4],
        h = e[5],
        l = e[6],
        u = e[7],
        c = e[8],
        f = e[9],
        d = e[10],
        g = e[11],
        t[0] = r,
        t[1] = s,
        t[2] = n,
        t[3] = a,
        t[4] = o,
        t[5] = h,
        t[6] = l,
        t[7] = u,
        t[8] = c,
        t[9] = f,
        t[10] = d,
        t[11] = g,
        t[12] = r * b + o * _ + c * p + e[12],
        t[13] = s * b + h * _ + f * p + e[13],
        t[14] = n * b + l * _ + d * p + e[14],
        t[15] = a * b + u * _ + g * p + e[15]),
        t
    }
    function Vi(t, e, i) {
        var r = i[0]
          , s = i[1]
          , n = i[2];
        return t[0] = e[0] * r,
        t[1] = e[1] * r,
        t[2] = e[2] * r,
        t[3] = e[3] * r,
        t[4] = e[4] * s,
        t[5] = e[5] * s,
        t[6] = e[6] * s,
        t[7] = e[7] * s,
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
        var r = Math.sin(i)
          , s = Math.cos(i)
          , n = e[4]
          , a = e[5]
          , o = e[6]
          , h = e[7]
          , l = e[8]
          , u = e[9]
          , c = e[10]
          , f = e[11];
        return e !== t && (t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15]),
        t[4] = n * s + l * r,
        t[5] = a * s + u * r,
        t[6] = o * s + c * r,
        t[7] = h * s + f * r,
        t[8] = l * s - n * r,
        t[9] = u * s - a * r,
        t[10] = c * s - o * r,
        t[11] = f * s - h * r,
        t
    }
    function Wi(t, e, i) {
        var r = Math.sin(i)
          , s = Math.cos(i)
          , n = e[0]
          , a = e[1]
          , o = e[2]
          , h = e[3]
          , l = e[4]
          , u = e[5]
          , c = e[6]
          , f = e[7];
        return e !== t && (t[8] = e[8],
        t[9] = e[9],
        t[10] = e[10],
        t[11] = e[11],
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15]),
        t[0] = n * s + l * r,
        t[1] = a * s + u * r,
        t[2] = o * s + c * r,
        t[3] = h * s + f * r,
        t[4] = l * s - n * r,
        t[5] = u * s - a * r,
        t[6] = c * s - o * r,
        t[7] = f * s - h * r,
        t
    }
    function Yi(t, e, i) {
        var r = e[0]
          , s = e[1]
          , n = e[2]
          , a = e[3]
          , o = r + r
          , h = s + s
          , l = n + n
          , u = r * o
          , c = r * h
          , f = r * l
          , d = s * h
          , g = s * l
          , b = n * l
          , _ = a * o
          , p = a * h
          , m = a * l;
        return t[0] = 1 - (d + b),
        t[1] = c + m,
        t[2] = f - p,
        t[3] = 0,
        t[4] = c - m,
        t[5] = 1 - (u + b),
        t[6] = g + _,
        t[7] = 0,
        t[8] = f + p,
        t[9] = g - _,
        t[10] = 1 - (u + d),
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
    function Ki(t, e) {
        var i = e[0]
          , r = e[1]
          , s = e[2]
          , n = e[4]
          , a = e[5]
          , o = e[6]
          , h = e[8]
          , l = e[9]
          , u = e[10];
        return t[0] = Math.hypot(i, r, s),
        t[1] = Math.hypot(n, a, o),
        t[2] = Math.hypot(h, l, u),
        t
    }
    var $i = function(t, e, i, r, s) {
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
        null != s && s !== 1 / 0 ? (n = 1 / (r - s),
        t[10] = (s + r) * n,
        t[14] = 2 * s * r * n) : (t[10] = -1,
        t[14] = -2 * r),
        t
    };
    var Ji = ji;
    const Qi = {
        2: "Wowhead",
        3: "LolKing",
        6: "HeroKing",
        7: "DestinyDB"
    };
    class tr {
        constructor(t) {
            window.model = this
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
            this.renderer = new Hl(this),
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
            t ? tr.requestFullscreen(this.renderer.canvas[0]) : tr.exitFullscreen()
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
    const er = tr;
    const ir = class {
        constructor(t, e, i) {
            this.ba = t,
            this.f = e,
            this.dc = i,
            this.e = !1,
            this.g = t.createBuffer(),
            this.f = 0
        }
        a(t) {
            const e = this.ba;
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.g),
            !this.e || this.f < t.byteLength ? (e.bufferData(e.ELEMENT_ARRAY_BUFFER, t, this.dc ? e.DYNAMIC_DRAW : e.STATIC_DRAW),
            this.f = t.byteLength,
            this.e = !0) : e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, 0, t),
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null)
        }
        b() {
            return this.f
        }
        c() {
            const t = this.ba;
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.g)
        }
        d() {
            const t = this.ba;
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null)
        }
    }
    ;
    const rr = class {
        constructor(t, e, i) {
            this.dc = t,
            this.e = e,
            this.g = i,
            this.ba = !1,
            this.f = t.createBuffer(),
            this.e = 0
        }
        c() {
            const t = this.dc;
            t.bindBuffer(t.ARRAY_BUFFER, this.f)
        }
        d() {
            const t = this.dc;
            t.bindBuffer(t.ARRAY_BUFFER, null)
        }
        a(t) {
            const e = this.dc;
            e.bindBuffer(e.ARRAY_BUFFER, this.f),
            !this.ba || this.e < t.byteLength ? (e.bufferData(e.ARRAY_BUFFER, t, this.g ? e.DYNAMIC_DRAW : e.STATIC_DRAW),
            this.ba = !0,
            this.e = t.byteLength) : e.bufferSubData(e.ARRAY_BUFFER, 0, t),
            e.bindBuffer(e.ARRAY_BUFFER, null)
        }
        b() {
            return this.e
        }
    }
    ;
    var sr;
    !function(t) {
        t[t.GFLOAT = 0] = "GFLOAT",
        t[t.GUNSIGNED_BYTE = 1] = "GUNSIGNED_BYTE"
    }(sr || (sr = {}));
    class nr {
        constructor(t, e, i, r, s, n) {
            this.c = t,
            this.d = e,
            this.e = i,
            this.a = r,
            this.b = s,
            this.f = n
        }
    }
    function ar(t, e) {
        switch (e) {
        case sr.GFLOAT:
            return t.FLOAT;
        case sr.GUNSIGNED_BYTE:
            return t.UNSIGNED_BYTE
        }
    }
    const or = class {
        constructor(t, e) {
            this.f = t,
            this.e = e,
            this.dc = null,
            this.ba = [],
            this.dc = e.createVertexArrayOES()
        }
        d(t) {
            this.f;
            this.a(),
            t.c(),
            this.c(),
            this.ba.push(t)
        }
        b(t, e) {
            const i = this.f;
            this.a(),
            t.c();
            for (const t of e)
                i.enableVertexAttribArray(t.c),
                i.vertexAttribPointer(t.c, t.d, ar(i, t.e), t.a, t.b, t.f);
            this.c(),
            this.ba.push(t)
        }
        a() {
            this.e.bindVertexArrayOES(this.dc)
        }
        c() {
            this.e.bindVertexArrayOES(null)
        }
    }
    ;
    const hr = class {
        constructor(t, e) {
            this.dc = t,
            this.ba = e,
            this.e = []
        }
        d(t) {
            this.f = t
        }
        b(t, e) {
            this.e.push({
                buffer: t,
                bindings: e
            })
        }
        a() {
            const t = this.dc;
            this.f.c();
            const e = this.ba.a();
            for (const e of this.e) {
                e.a.c();
                for (const i of e.b)
                    this.ba.e(i.c),
                    t.vertexAttribPointer(i.c, i.d, ar(t, i.e), i.a, i.b, i.f)
            }
            this.ba.c(e)
        }
        c() {}
    }
    ;
    class lr {
    }
    class ur {
        constructor(t, e, i, r) {
            this.a = t,
            this.b = e,
            this.d = i,
            this.c = r
        }
    }
    class cr {
        constructor(t, e) {
            this.b = t,
            this.a = e
        }
    }
    class fr {
        constructor(t, e) {
            this.b = t,
            this.a = e
        }
    }
    class dr extends lr {
    }
    const gr = class extends dr {
        constructor(t, e, i, r) {
            super(),
            this.d = t,
            this.cba = e,
            this.e = i,
            this.ba = r
        }
        b() {
            return this.e.b
        }
        a(t) {
            const e = this.e;
            t.g(this.cba),
            t.d(e.b),
            t.j(e.f),
            t.f(e.a),
            t.c(e.d),
            t.b(e.e),
            t.e(e.c),
            Ye(this.cba.c(), this.ba)
        }
    }
    ;
    const br = class {
        constructor(t, e, i, r) {
            if (this.d = t,
            this.ba = Je(t, [i, r], Object.keys(e), null),
            !this.ba)
                throw "Failed to create program"
        }
        a() {
            this.d.useProgram(this.ba.program)
        }
        c() {
            return this.ba
        }
    }
    ;
    class _r {
        static c(t) {
            const e = 32767 & t;
            return e < pr.length ? pr[e] : (WH.debug("Unknown shader effect:", e),
            ["PS_Combiners_Opaque", "VS_Diffuse_T1"])
        }
        static b(t, e) {
            let i = "";
            if (-1e3 == t && 3 == e)
                return "Skin";
            if (32768 & t)
                return _r.c(t)[0];
            if (1 == e)
                i = 112 & t ? "PS_Combiners_Mod" : "PS_Combiners_Opaque";
            else {
                i = (112 & t ? "PS_Combiners_Mod" : "PS_Combiners_Opaque") + "_" + (112 & t ? ["Opaque", "Mod", "Mod", "Add", "Mod2x", "Mod", "Mod2xNA", "AddNA"] : ["Opaque", "Mod", "Mod", "AddAlpha", "Mod2x", "Mod", "Mod2xNA", "AddAlpha"])[7 & t]
            }
            return i
        }
        static d(t, e) {
            let i = "";
            if (-1e3 == t && 3 == e)
                i = "T1_T1_T1";
            else {
                if (32768 & t)
                    return _r.c(t)[1];
                i = 1 == e ? 128 & t ? "Env" : 16384 & t ? "T2" : "T1" : 128 & t ? 8 & t ? "Env_Env" : "Env_T1" : 8 & t ? "T1_Env" : 16384 & t ? "T1_T2" : "T1_T1"
            }
            return "VS_Diffuse_" + i
        }
        static e(t, e, i) {
            const r = _r.b(t, e)
              , s = _r.d(t, e)
              , n = "Wow." + s + "_" + r;
            if (ui._GetProgram(n))
                return {
                    name: n
                };
            const a = {
                shaders: [_r.a(s, i), _r.f(s, r, !1)],
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
        static h(t) {
            const e = {}
              , i = {
                texcoord1: function(t, e) {
                    t.INPUT_TEXCOORD1 = "aTexCoord" + e
                }
            };
            for (let r in t.options) {
                const s = t.options[r];
                i[r](e, s)
            }
            return {
                name: "Wow." + t.name,
                config: e
            }
        }
        static g(t) {
            var e = "";
            if (e += "lTexCoord1 = (uTextureMatrix1 * vec4(vTexCoord1, 0, 1)).st;\n",
            e += "lTexCoord2 = (uTextureMatrix2 * vec4(vTexCoord2, 0, 1)).st;\n",
            "VS" === t.slice(0, 2)) {
                let i = (t = t.slice(3)).split("_")
                  , r = i[0];
                if ("Diffuse" === r || "Color" === r) {
                    e = "",
                    i.splice(0, 1);
                    let r = {
                        T1: ["uTextureMatrix1", "vTexCoord1"],
                        T2: ["uTextureMatrix2", "vTexCoord2"],
                        T3: ["", "aTexCoord2"],
                        Env: ["", "texEnv"]
                    }
                      , s = 1;
                    for (let n in i)
                        r[i[n]] ? (r[i[n]][0] && "texEnv" != r[i[n]][1] ? e += "lTexCoord" + s + " = (" + r[i[n]][0] + " * vec4(" + r[i[n]][1] + ", 0, 1)).st;\n" : "texEnv" == r[i[n]][1] ? e += "lTexCoord" + s + " = texEnv;\n" : e += "lTexCoord" + s + " = (uTextureMatrix" + s + " * vec4(" + r[i[n]][1] + ", 0, 1)).st;\n",
                        s++) : WH.debug("Missing vertex shader def?", t)
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
        static f(t, e, i) {
            let r = mr[e];
            r || (WH.debug("Missing pixel shader def", e),
            r = mr[e = "PS_Combiners_Opaque_Mod"]);
            let s = "\t\t" + r.slice(1, r.length).join("\n\t\t");
            for (let t = 0; t < r[0]; t++) {
                let e = t + 1;
                s = "vec4 tex" + t + " = texture2D(uTexture" + e + ", lTexCoord" + e + ".st);\n" + s
            }
            let n = this.g(t);
            var a;
            return "precision mediump float;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying vec2 vTexCoord3;\nvarying vec2 vTexCoord4;\nuniform bool uHasAlpha;\nuniform bool uHasSpecEmiss;\nuniform bool uHasEmissiveGlowing;\nuniform int uBlendMode;\nuniform bool uUnlit;\nuniform vec4 uColor;\nuniform vec4 uAmbientColor;\nuniform vec4 uDiffuseColor;\nuniform vec4 uPrimaryColor;\nuniform vec4 uSecondaryColor;\nuniform vec3 uLightDir1;\nuniform vec3 uLightDir2;\nuniform vec3 uLightDir3;\nuniform mat4 uTextureMatrix1;\nuniform mat4 uTextureMatrix2;\nuniform mat4 uTextureMatrix3;\nuniform mat4 uTextureMatrix4;\nuniform sampler2D uTexture1;\nuniform sampler2D uTexture2;\nuniform sampler2D uTexture3;\nuniform sampler2D uTexture4;\nuniform sampler2D uAlpha;\nuniform vec4 uTexSampleAlpha;\n" + ((a = {
                EXCERPT_TEX_COORD: n,
                EXCERPT_BASE: s,
                GRADIENT: i
            }).GRADIENT ? "uniform vec4 u_gradGradientColors_0;\nuniform vec4 u_gradGradientColors_1;\nuniform vec4 u_gradGradientColors_2;\nuniform vec4 u_gradEdgeColor;\nuniform vec4 u_gradBoundingBox;\nuniform vec4 u_gradUpVec;\nuniform vec4 u_gradFlags;\nuniform vec4 u_mulLum_OpaqMat;\n" : "") + "vec2 sphereMap(vec3 vertex, vec3 normal) {\nvec3 normPos = (normalize(vertex.xyz));\nvec3 reflection = reflect(normPos, normalize(normal));\nreflection = vec3(reflection.x, reflection.y, reflection.z + 1.0);\nvec2 texCoord = ((normalize(reflection).xy * 0.5) + vec2(0.5));\nreturn texCoord;\n}\nvoid main(void) {\nvec2 lTexCoord1 = vec2(0.0);\nvec2 lTexCoord2 = vec2(0.0);\nvec2 lTexCoord3 = vec2(0.0);\nvec4 _output = vec4(1.0);\nvec4 _input = uColor;\nvec3 _specular = vec3(0.0);\nvec2 texEnv = sphereMap(vPosition.xyz,normalize(vNormal.xyz));\n" + (a.EXCERPT_TEX_COORD ? a.EXCERPT_TEX_COORD : "") + (a.EXCERPT_BASE ? a.EXCERPT_BASE : "") + "_output.a = _output.a * uDiffuseColor.a;\nif (uBlendMode == 13) {\n_output.a = _output.a * _input.a;\n} else if (uBlendMode == 1) {\nif (_output.a < (128.0/255.0))\ndiscard;\n_output.a = _input.a;\n} else if (uBlendMode == 0) {\n_output.a = _input.a;\n} else {\n_output.a = _output.a * _input.a;\n}\nif (!uUnlit) {\nvec4 litColor = uAmbientColor;\nvec3 normal = normalize(vNormal);\nfloat dp = max(0.0, dot(normal, uLightDir1));\nlitColor += uPrimaryColor * dp;\ndp = max(0.0, dot(normal, uLightDir2));\nlitColor += uSecondaryColor * dp;\ndp = max(0.0, dot(normal, uLightDir3));\nlitColor += uSecondaryColor * dp;\nlitColor = clamp(litColor, vec4(0,0,0,0), vec4(1,1,1,1));\n_output.rgb *= (litColor * uDiffuseColor).rgb;\n}\n_output += vec4(_specular, 0.0);\n" + (a.GRADIENT ? "float power = u_gradEdgeColor.w;\nfloat midValue = u_gradGradientColors_2.w;\nfloat opaqueMaterial = u_mulLum_OpaqMat.y;\nfloat lum = clamp(dot(_output.xyz, vec3(0.212599993, 0.715200007, 0.0722000003)), 0.0, 1.0);\nfloat val0 = 0.0;\nfloat val1 = midValue;\nif (lum > midValue) {\nval0 = midValue;\nval1 = 1.0;\n}\nfloat lerpValue = clamp(((lum - val0) / (val1 - val0)), 0.0, 1.0);\nvec3 gradColor0 = u_gradGradientColors_0.xyz;\nvec3 gradColor1 = u_gradGradientColors_1.xyz;\nif (lum > midValue) {\ngradColor0 = u_gradGradientColors_1.xyz;\ngradColor1 = u_gradGradientColors_2.xyz;\n}\nvec3 gradientColor = mix(gradColor0, gradColor1, vec3(lerpValue));\nbool flipNormal = ((u_gradGradientColors_0.w > 0.0) && (vNormal.z > 0.0));\nvec3 normal = flipNormal ? -vNormal.xyz : vNormal.xyz;\nvec2 term = vec2(dot(-(vPosition.xyz), normal), dot(normalize(-(vPosition.xyz)), (normal * vec3(0.05, 0.05, 1.0))));\nvec2 invTerm = (vec2(1.0) - clamp(term, 0.0, 1.0));\nvec2 f = (invTerm * invTerm);\nfloat fresnel_rim = pow((f.x + f.y), power);\nbool disableHeightFade = bool(u_gradFlags.x);\nfloat visMod = 0.0;\nvec4 res = _output;\nvec3 distVecTest = vec3(0,0,0);\nif (!(disableHeightFade))\n{\nvec3 distVec = (vPosition - u_gradBoundingBox.xyz);\nfloat _dot = dot(distVec, u_gradUpVec.xyz);\nfloat relHeight = (_dot * u_gradBoundingBox.w);\nbool invertHeightFade = bool(u_gradFlags.w);\ndistVecTest = vec3(relHeight);\nrelHeight = invertHeightFade ? clamp((1.0 - relHeight), 0.0, 1.0) : relHeight;\nfloat visMod = clamp((relHeight * 1.66666663), 0.0, 0.899999976);\nvisMod = (visMod * visMod);\nres = vec4(_output.r, _output.g, _output.b, (_output.w * visMod));\n}\nvec3 lerp = mix(gradientColor, u_gradEdgeColor.xyz, vec3(fresnel_rim));\nfloat multiplyLum = u_mulLum_OpaqMat.x;\nif (bool(multiplyLum))\n{\nres = vec4(lerp.xyz, (res.w * lum));\n}\nelse\n{\nres = vec4(lerp.xyz, res.w);\n}\n_output = mix(_output, res, vec4(u_gradFlags.y));\n_output = vec4(_output.xyz, res.a * _output.a);\n" : "") + "gl_FragColor = _output;\n}\n"
        }
    }
    const pr = [["PS_Combiners_Opaque_Mod2xNA_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_AddAlpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_AddAlpha_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_Add", "VS_Diffuse_T1_Env_T1", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_AddAlpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_AddAlpha", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_AddAlpha", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_AddAlpha_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Alpha_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_3s", "VS_Diffuse_T1_Env_T1", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Opaque_AddAlpha_Wgt", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_Add_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_ModNA_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_AddAlpha_Wgt", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_AddAlpha_Wgt", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_AddAlpha_Wgt", "VS_Diffuse_T1_T2", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod_Add_Wgt", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_UnshAlpha", "VS_Diffuse_T1_Env_T1", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_Dual_Crossfade", "VS_Diffuse_T1", "HS_T1", "DS_T1"], ["PS_Combiners_Mod_Depth", "VS_Diffuse_EdgeFade_T1", "HS_T1", "DS_T1"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_Alpha", "VS_Diffuse_T1_Env_T2", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_Mod", "VS_Diffuse_EdgeFade_T1_T2", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_Masked_Dual_Crossfade", "VS_Diffuse_T1_T2", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Alpha", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_UnshAlpha", "VS_Diffuse_T1_Env_T2", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_Depth", "VS_Diffuse_EdgeFade_Env", "HS_T1", "DS_T1"], ["PS_Guild", "VS_Diffuse_T1_T2_T1", "HS_T1_T2_T3", "DS_T1_T2"], ["PS_Guild_NoBorder", "VS_Diffuse_T1_T2", "HS_T1_T2", "DS_T1_T2_T3"], ["PS_Guild_Opaque", "VS_Diffuse_T1_T2_T1", "HS_T1_T2_T3", "DS_T1_T2"], ["PS_Illum", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_Mod_Mod_Const", "VS_Diffuse_T1_T2_T3", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_Mod_Mod_Const", "VS_Color_T1_T2_T3", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Opaque", "VS_Diffuse_T1", "HS_T1", "DS_T1"], ["PS_Combiners_Mod_Mod2x", "VS_Diffuse_EdgeFade_T1_T2", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod", "VS_Diffuse_EdgeFade_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_Mod_Depth", "VS_Diffuse_EdgeFade_T1_T2", "HS_T1_T2", "DS_T1_T2"]]
      , mr = {
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
      , vr = _r;
    const xr = class {
        constructor(t) {
            this.b = t,
            this.d = new Set
        }
        a() {
            const t = this.d;
            return this.d = new Set,
            t
        }
        e(t) {
            this.d.has(t) || (this.b.enableVertexAttribArray(t),
            this.d.add(t))
        }
        c(t) {
            const e = this.b;
            [...t].filter((t => !this.d.has(t))).forEach((t => e.disableVertexAttribArray(t)))
        }
    }
    ;
    const Tr = class {
    }
    ;
    const wr = class {
    }
    ;
    const yr = class extends wr {
    }
    ;
    function Ar() {
        var t = new di(4);
        return di != Float32Array && (t[0] = 0,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0),
        t
    }
    function Er(t, e, i, r) {
        var s = new di(4);
        return s[0] = t,
        s[1] = e,
        s[2] = i,
        s[3] = r,
        s
    }
    function Mr(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t
    }
    function Cr(t, e, i, r, s) {
        return t[0] = e,
        t[1] = i,
        t[2] = r,
        t[3] = s,
        t
    }
    function Sr(t, e, i) {
        return t[0] = e[0] + i[0],
        t[1] = e[1] + i[1],
        t[2] = e[2] + i[2],
        t[3] = e[3] + i[3],
        t
    }
    function kr(t, e, i) {
        return t[0] = e[0] - i[0],
        t[1] = e[1] - i[1],
        t[2] = e[2] - i[2],
        t[3] = e[3] - i[3],
        t
    }
    function Fr(t, e, i) {
        return t[0] = e[0] * i,
        t[1] = e[1] * i,
        t[2] = e[2] * i,
        t[3] = e[3] * i,
        t
    }
    function Ir(t) {
        var e = t[0]
          , i = t[1]
          , r = t[2]
          , s = t[3];
        return Math.hypot(e, i, r, s)
    }
    function Dr(t, e) {
        var i = e[0]
          , r = e[1]
          , s = e[2]
          , n = e[3]
          , a = i * i + r * r + s * s + n * n;
        return a > 0 && (a = 1 / Math.sqrt(a)),
        t[0] = i * a,
        t[1] = r * a,
        t[2] = s * a,
        t[3] = n * a,
        t
    }
    function Ur(t, e, i) {
        var r = e[0]
          , s = e[1]
          , n = e[2]
          , a = e[3];
        return t[0] = i[0] * r + i[4] * s + i[8] * n + i[12] * a,
        t[1] = i[1] * r + i[5] * s + i[9] * n + i[13] * a,
        t[2] = i[2] * r + i[6] * s + i[10] * n + i[14] * a,
        t[3] = i[3] * r + i[7] * s + i[11] * n + i[15] * a,
        t
    }
    var Rr = Ir;
    !function() {
        var t = Ar()
    }();
    const Or = class extends yr {
        constructor(t, e) {
            super(),
            this.j = e,
            this.h = gi(),
            this.g = _i(0, 0, 0),
            this.f = Ar(),
            this.ed = Er(0, 0, 0, 0),
            this.i = new rr(t,40 * e.length / 4,!0),
            this.dc(e)
        }
        ba(t, e) {
            const i = this.cba;
            let r = this.j.length;
            for (let s = 0; s < r; ++s) {
                if (!e.has(s))
                    continue;
                mi(this.g, 0, 0, 0),
                Cr(this.ed, 0, 0, 0, 0);
                const r = this.j[s];
                let n = !1;
                for (let e = 0; e < 4; ++e) {
                    const i = r.f[e] / 255;
                    if (i > 0) {
                        const s = t[r.c[e]];
                        Di(this.h, r.h, s.k),
                        Ur(this.f, r.g, s.u),
                        this.g[0] = this.g[0] + this.h[0] * i,
                        this.g[1] = this.g[1] + this.h[1] * i,
                        this.g[2] = this.g[2] + this.h[2] * i,
                        this.ed[0] = this.ed[0] + this.f[0] * i,
                        this.ed[1] = this.ed[1] + this.f[1] * i,
                        this.ed[2] = this.ed[2] + this.f[2] * i,
                        n = !0
                    }
                }
                if (n) {
                    let t = 10 * s;
                    i[t++] = this.g[0],
                    i[t++] = this.g[1],
                    i[t++] = this.g[2],
                    i[t++] = this.ed[0],
                    i[t++] = this.ed[1],
                    i[t++] = this.ed[2]
                }
            }
            this.i.a(this.cba)
        }
        dc(t) {
            const e = 40 * t.length / 4;
            this.cba = new Float32Array(e);
            const i = this.cba
              , r = t;
            let s = 0;
            for (let t = 0; t < r.length; ++t)
                i[s++] = r[t].h[0],
                i[s++] = r[t].h[1],
                i[s++] = r[t].h[2],
                i[s++] = r[t].g[0],
                i[s++] = r[t].g[1],
                i[s++] = r[t].g[2],
                i[s++] = r[t].e,
                i[s++] = r[t].a,
                i[s++] = r[t].i,
                i[s++] = r[t].d;
            this.i.a(this.cba)
        }
        a(t) {
            this.i.a(t)
        }
        b() {
            return this.i.b()
        }
        c() {
            this.i.c()
        }
        d() {
            this.i.d()
        }
    }
    ;
    const Br = class extends yr {
        constructor(t, e) {
            super(),
            this.f = e,
            this.cba = new rr(t,48 * e.length,!0),
            this.dc(e)
        }
        ba(t, e) {}
        dc(t) {
            const e = 48 * t.length;
            this.ed = new Uint8Array(e);
            let i = new DataView(this.ed.buffer);
            const r = t;
            let s = 0;
            for (let t = 0; t < r.length; ++t)
                i.setFloat32(s, r[t].h[0], !0),
                s += 4,
                i.setFloat32(s, r[t].h[1], !0),
                s += 4,
                i.setFloat32(s, r[t].h[2], !0),
                s += 4,
                i.setFloat32(s, r[t].g[0], !0),
                s += 4,
                i.setFloat32(s, r[t].g[1], !0),
                s += 4,
                i.setFloat32(s, r[t].g[2], !0),
                s += 4,
                i.setUint8(s, r[t].c[0]),
                s += 1,
                i.setUint8(s, r[t].c[1]),
                s += 1,
                i.setUint8(s, r[t].c[2]),
                s += 1,
                i.setUint8(s, r[t].c[3]),
                s += 1,
                i.setUint8(s, r[t].f[0]),
                s += 1,
                i.setUint8(s, r[t].f[1]),
                s += 1,
                i.setUint8(s, r[t].f[2]),
                s += 1,
                i.setUint8(s, r[t].f[3]),
                s += 1,
                i.setFloat32(s, r[t].e, !0),
                s += 4,
                i.setFloat32(s, r[t].a, !0),
                s += 4,
                i.setFloat32(s, r[t].i, !0),
                s += 4,
                i.setFloat32(s, r[t].d, !0),
                s += 4;
            this.cba.a(this.ed)
        }
        a(t) {
            this.cba.a(t)
        }
        b() {
            return this.cba.b()
        }
        c() {
            this.cba.c()
        }
        d() {
            this.cba.d()
        }
    }
    ;
    const Pr = class {
        a() {
            return {}
        }
        b(t) {}
    }
    ;
    const zr = class {
        constructor(t, e) {
            this.d = t,
            this.c = e,
            this.c = 256,
            this.ba = new Float32Array(16 * this.c),
            this.e = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.e),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            t.bindTexture(t.TEXTURE_2D, null)
        }
        a() {
            return {
                uBoneMatricesTex: this.e
            }
        }
        b(t) {
            const e = Math.min(256, t.length);
            for (let i = 0; i < e; i++)
                this.ba.set(t[i].k, 16 * i);
            const i = this.d;
            i.bindTexture(i.TEXTURE_2D, this.e),
            i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, 4, this.c, 0, i.RGBA, i.FLOAT, this.ba),
            i.bindTexture(i.TEXTURE_2D, null)
        }
    }
    ;
    var Nr;
    !function(t) {
        t[t.aPosition = 0] = "aPosition",
        t[t.aNormal = 1] = "aNormal",
        t[t.aTexCoord0 = 2] = "aTexCoord0",
        t[t.aTexCoord1 = 3] = "aTexCoord1"
    }(Nr || (Nr = {}));
    const Gr = {
        aPosition: Nr.aPosition,
        aNormal: Nr.aNormal,
        aTexCoord0: Nr.aTexCoord0,
        aTexCoord1: Nr.aTexCoord1
    }
      , Lr = [new nr(Nr.aPosition,3,sr.GFLOAT,!1,40,0), new nr(Nr.aNormal,3,sr.GFLOAT,!1,40,12), new nr(Nr.aTexCoord0,2,sr.GFLOAT,!1,40,24), new nr(Nr.aTexCoord1,2,sr.GFLOAT,!1,40,32)];
    var Hr;
    !function(t) {
        t[t.aPosition = 0] = "aPosition",
        t[t.aNormal = 1] = "aNormal",
        t[t.aBones = 2] = "aBones",
        t[t.aBoneWeights = 3] = "aBoneWeights",
        t[t.aTexCoord0 = 4] = "aTexCoord0",
        t[t.aTexCoord1 = 5] = "aTexCoord1"
    }(Hr || (Hr = {}));
    const jr = {
        aPosition: Hr.aPosition,
        aNormal: Hr.aNormal,
        aBones: Hr.aBones,
        aBoneWeights: Hr.aBoneWeights,
        aTexCoord0: Hr.aTexCoord0,
        aTexCoord1: Hr.aTexCoord1
    }
      , qr = [new nr(Hr.aPosition,3,sr.GFLOAT,!1,48,0), new nr(Hr.aNormal,3,sr.GFLOAT,!1,48,12), new nr(Hr.aBones,4,sr.GUNSIGNED_BYTE,!1,48,24), new nr(Hr.aBoneWeights,4,sr.GUNSIGNED_BYTE,!0,48,28), new nr(Hr.aTexCoord0,2,sr.GFLOAT,!1,48,32), new nr(Hr.aTexCoord1,2,sr.GFLOAT,!1,48,40)];
    var Vr;
    !function(t) {
        t[t.aPosition = 0] = "aPosition",
        t[t.aColor = 1] = "aColor",
        t[t.aTexcoord0 = 2] = "aTexcoord0",
        t[t.aTexcoord1 = 3] = "aTexcoord1",
        t[t.aTexcoord2 = 4] = "aTexcoord2",
        t[t.aAlphaCutoff = 5] = "aAlphaCutoff"
    }(Vr || (Vr = {}));
    const Xr = {
        [Vr.aPosition]: Vr.aPosition,
        [Vr.aColor]: Vr.aColor,
        [Vr.aTexcoord0]: Vr.aTexcoord0,
        [Vr.aTexcoord1]: Vr.aTexcoord1,
        [Vr.aTexcoord2]: Vr.aTexcoord2,
        [Vr.aAlphaCutoff]: Vr.aAlphaCutoff
    }
      , Wr = [new nr(Vr.aPosition,3,sr.GFLOAT,!1,56,0), new nr(Vr.aColor,4,sr.GFLOAT,!1,56,12), new nr(Vr.aTexcoord0,2,sr.GFLOAT,!1,56,28), new nr(Vr.aTexcoord1,2,sr.GFLOAT,!1,56,36), new nr(Vr.aTexcoord2,2,sr.GFLOAT,!1,56,44), new nr(Vr.aAlphaCutoff,1,sr.GFLOAT,!1,56,52)];
    var Yr;
    !function(t) {
        t[t.aPosition = 0] = "aPosition",
        t[t.aColor = 1] = "aColor",
        t[t.aTexcoord0 = 2] = "aTexcoord0"
    }(Yr || (Yr = {}));
    const Zr = {
        [Yr.aPosition]: Yr.aPosition,
        [Yr.aColor]: Yr.aColor,
        [Yr.aTexcoord0]: Yr.aTexcoord0
    }
      , Kr = [new nr(Yr.aPosition,3,sr.GFLOAT,!1,36,0), new nr(Yr.aColor,4,sr.GFLOAT,!1,36,12), new nr(Yr.aTexcoord0,2,sr.GFLOAT,!1,36,28)];
    const $r = class {
        constructor(t, e) {
            this.ba = t,
            this.lk = e,
            this.hg = new Map,
            this.fe = new xr(t.j());
            const i = t.j();
            this.ji = i.createTexture(),
            i.bindTexture(i.TEXTURE_2D, this.ji),
            i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])),
            i.bindTexture(i.TEXTURE_2D, null)
        }
        dc() {
            throw new Error("Method not implemented.")
        }
        f() {
            return this.ba
        }
        d(t) {
            return new ir(this.ba.j(),t,!1)
        }
        b(t) {
            return this.ba.k ? new Br(this.ba.j(),t) : new Or(this.ba.j(),t)
        }
        l(t) {
            return new rr(this.ba.j(),t,!0)
        }
        a(t) {
            return new rr(this.ba.j(),t,!0)
        }
        c(t, e) {
            const i = this.ba.h()
              , r = i ? new or(this.ba.j(),i) : new hr(this.ba.j(),this.fe)
              , s = this.ba.k ? qr : Lr;
            return r.b(t, s),
            r.d(e),
            r
        }
        j(t, e) {
            const i = this.ba.h()
              , r = i ? new or(this.ba.j(),i) : new hr(this.ba.j(),this.fe);
            return r.d(e),
            r.b(t, Wr),
            r
        }
        o(t, e) {
            const i = this.ba.h()
              , r = i ? new or(this.ba.j(),i) : new hr(this.ba.j(),this.fe);
            return r.d(e),
            r.b(t, Kr),
            r
        }
        i(t, e, i, r) {
            return this.ba.k ? new zr(this.ba.j(),t) : new Pr
        }
        k(t, e, i) {
            const r = vr.b(i.a, i.b.length)
              , s = vr.d(i.a, i.b.length)
              , n = "Wow." + s + "_" + r + (i.c ? "_gradient" : "");
            let a;
            this.hg.has(n) ? a = this.hg.get(n) : (a = new br(this.ba.j(),this.ba.k ? jr : Gr,vr.a(s, this.ba.k),vr.f(s, r, i.c)),
            this.hg.set(n, a));
            const o = Object.assign(Object.assign(Object.assign({}, this.lk), t.a()), i.d);
            for (let t = 0; t < Math.max(i.b.length, 4); t++) {
                let e = t < i.b.length ? i.b[t].h : this.ji;
                o["uTexture" + (t + 1).toString()] = e
            }
            return new gr(this.ba.j(),a,e,o)
        }
        h(t, e, i) {
            const r = Object.assign(Object.assign(Object.assign({}, this.lk), t.a()), i.a);
            let s;
            const n = "ParticleShader";
            this.hg.has(n) ? s = this.hg.get(n) : (s = new br(this.ba.j(),Xr,"attribute vec3 aPosition;\r\nattribute vec4 aColor;\r\nattribute vec2 aTexcoord0;\r\nattribute vec2 aTexcoord1;\r\nattribute vec2 aTexcoord2;\r\nattribute float aAlphaCutoff;\r\n\r\nvarying vec4 vColor;\r\nvarying vec2 vTexcoord0;\r\nvarying vec2 vTexcoord1;\r\nvarying vec2 vTexcoord2;\r\nvarying float vAlphaCutoff;\r\n\r\nuniform mat4 uModelMatrix;\r\nuniform mat4 uViewMatrix;\r\nuniform mat4 uProjMatrix;\r\n\r\nvoid main(void) {\r\n    vec4 pos = vec4(aPosition, 1);\r\n\r\n    gl_Position = uProjMatrix * pos;\r\n\r\n    vColor = aColor;\r\n    vTexcoord0 = aTexcoord0;\r\n    vTexcoord1 = aTexcoord1;\r\n    vTexcoord2 = aTexcoord2;\r\n    vAlphaCutoff = aAlphaCutoff;\r\n}","precision mediump float;\r\n\r\nvarying vec4 vColor;\r\nvarying vec2 vTexcoord0;\r\nvarying vec2 vTexcoord1;\r\nvarying vec2 vTexcoord2;\r\nvarying float vAlphaCutoff;\r\n\r\nuniform bool uHasTexture;\r\nuniform bool uHasTexture2;\r\nuniform bool uHasTexture3;\r\nuniform bool uHasAlpha;\r\nuniform int uBlendMode;\r\nuniform int uPixelShader;\r\nuniform sampler2D uTexture0;\r\nuniform sampler2D uTexture1;\r\nuniform sampler2D uTexture2;\r\nuniform float uAlphaTreshold;\r\n\r\nuniform float alphaMult;\r\nuniform float colorMult;\r\n\r\nvoid main(void) {\r\n    float lo_thresh = 0.01;\r\n    vec4 color = vec4(1, 1, 1, 1);\r\n    vec4 tex = vec4(1, 1, 1, 1);\r\n    vec4 tex2 = vec4(1, 1, 1, 1);\r\n    vec4 tex3 = vec4(1, 1, 1, 1);\r\n    if (uHasTexture) {\r\n        tex = texture2D(uTexture0, vTexcoord0).rgba;\r\n    }\r\n    if (uHasTexture2) {\r\n        tex2 = texture2D(uTexture1, vTexcoord1).rgba;\r\n    }\r\n    if (uHasTexture3) {\r\n        tex3 = texture2D(uTexture2, vTexcoord2).rgba;\r\n    }\r\n    vec4 finalColor = vec4((tex * vColor ).rgb, tex.a*vColor.a );\r\n    vec3 matDiffuse = vec3(1.0);\r\n    float opacity = 1.0;\r\n    if (uPixelShader == 0) {\r\n        matDiffuse = vColor.xyz * tex.rgb;\r\n        opacity = tex.a*vColor.a;\r\n    } else if (uPixelShader == 1) {\r\n        vec4 textureMod = tex*tex2;\r\n        float texAlpha = (textureMod.w * tex3.w);\r\n        opacity = texAlpha*vColor.a;\r\n        matDiffuse = vColor.xyz * 4.0 * textureMod.rgb;\r\n    } else if (uPixelShader == 2) {\r\n        vec4 textureMod = tex*tex2*tex3;\r\n        float texAlpha = (textureMod.w);\r\n        opacity = texAlpha*vColor.a;\r\n        matDiffuse = vColor.xyz * textureMod.rgb;\r\n    } else if (uPixelShader == 3) {\r\n        vec4 textureMod = tex*tex2*tex3;\r\n        float texAlpha = (textureMod.w);\r\n        opacity = texAlpha*vColor.a;\r\n\r\n        matDiffuse = vColor.xyz * textureMod.rgb;\r\n    } else if (uPixelShader == 4) {\r\n        discard;\r\n    }\r\n\r\n    finalColor = vec4(matDiffuse.rgb * colorMult, opacity * alphaMult);\r\n\r\n    if (finalColor.a < vAlphaCutoff ) discard;\r\n    if (finalColor.a < uAlphaTreshold ) discard;\r\n    gl_FragColor = finalColor;\r\n}\r\n"),
            this.hg.set(n, s));
            for (let t = 0; t < i.b.length; t++)
                i.b[t] && (r["uTexture" + t.toString()] = i.b[t].h);
            return new gr(this.ba.j(),s,e,r)
        }
        m(t, e, i) {
            const r = Object.assign(Object.assign(Object.assign({}, this.lk), t.a()), i.a);
            let s;
            const n = "RibbonShader";
            return this.hg.has(n) ? s = this.hg.get(n) : (s = new br(this.ba.j(),Zr,"attribute vec3 aPosition;\r\nattribute vec4 aColor;\r\nattribute vec2 aTexcoord0;\r\n\r\nuniform mat4 uViewMatrix;\r\nuniform mat4 uProjMatrix;\r\n\r\nvarying vec4 vColor;\r\nvarying vec2 vTexcoord0;\r\n\r\nvoid main() {\r\n    vec4 aPositionVec4 = vec4(aPosition, 1);\r\n    vColor = aColor;\r\n    vTexcoord0 = aTexcoord0;\r\n\r\n    gl_Position = uProjMatrix * uViewMatrix * aPositionVec4;\r\n}\r\n\r\n\r\n","precision mediump float;\r\n\r\nvarying vec4 vColor;\r\nvarying vec2 vTexcoord0;\r\nuniform sampler2D uTexture;\r\n\r\nvoid main() {\r\n    vec4 tex = texture2D(uTexture, vTexcoord0).rgba;\r\n    gl_FragColor = vec4((vColor.rgb*tex.rgb), tex.a * vColor.a );\r\n}\r\n"),
            this.hg.set(n, s)),
            r["uTexture".toString()] = i.b[0].h,
            new gr(this.ba.j(),s,e,r)
        }
        e(t, e, i, r) {
            const s = this.ba.j();
            let n = new Tr;
            return n.b = e,
            n.c = t.b,
            n.g = s.TRIANGLES,
            n.h = t.c,
            n.e = t.a,
            n.f = r,
            n.d = i,
            n
        }
        n(t, e, i, r) {
            const s = this.ba.j();
            let n = new Tr;
            return n.b = e,
            n.c = t.b,
            n.g = s.TRIANGLE_STRIP,
            n.h = t.c,
            n.e = t.a,
            n.f = r,
            n.d = i,
            n
        }
        g(t) {
            const e = this.ba.j()
              , i = e.createTexture();
            function r(t) {
                return 0 == (t & t - 1)
            }
            e.bindTexture(e.TEXTURE_2D, i),
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
            r(t.width) && r(t.height) ? e.generateMipmap(e.TEXTURE_2D) : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR));
            const s = this.ba.g;
            return s && e.texParameteri(e.TEXTURE_2D, s.TEXTURE_MAX_ANISOTROPY_EXT, this.ba.fe),
            i
        }
    }
    ;
    var Jr;
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
    }(Jr || (Jr = {}));
    const Qr = Jr;
    const ts = class {
        constructor(t) {
            this.q = t,
            this.l = -1,
            this.s = -1,
            this.n = -1,
            this.ba = -1,
            this.r = -1,
            this.t = Qr.GxBlend_UNDEFINED,
            this.fe = null,
            this.p = null,
            this.hg = null,
            this.ji = null,
            this.o = null
        }
        dc() {
            this.l = -1,
            this.s = -1,
            this.n = -1,
            this.ba = -1,
            this.r = -1,
            this.t = Qr.GxBlend_UNDEFINED,
            this.fe = null,
            this.p = null,
            this.hg = null,
            this.ji = null,
            this.o = null
        }
        d(t) {
            this.t != t && (this.k(t),
            this.t = t)
        }
        f(t) {
            const e = t ? 1 : 0;
            if (e != this.l) {
                //this.q.depthMask(t);
                this.l = e;
            }
        }
        j(t) {
            const e = t ? 1 : 0;
            e != this.s && (t ? this.q.enable(this.q.DEPTH_TEST) : this.q.disable(this.q.DEPTH_TEST),
            this.s = e)
        }
        c(t) {
            const e = t ? 1 : 0;
            e != this.n && (t ? this.q.enable(this.q.CULL_FACE) : this.q.disable(this.q.CULL_FACE),
            this.n = e)
        }
        e(t) {
            const e = t ? 1 : 0;
            e != this.ba && (t ? this.q.frontFace(this.q.CCW) : this.q.frontFace(this.q.CW),
            this.ba = e)
        }
        b(t) {
            this.r != t && (this.q.colorMask((1 & t) > 0, (2 & t) > 0, (4 & t) > 0, (8 & t) > 0),
            this.r = t)
        }
        a(t) {
            this.p != t && (t ? t.c() : t.d(),
            this.p = t)
        }
        h(t) {
            this.fe != t && (t ? t.c() : t.d(),
            this.fe = t)
        }
        i(t) {
            this.hg != t && (t ? t.a() : this.hg.c(),
            this.hg = t,
            this.fe = null,
            this.p = null)
        }
        g(t) {
            t != this.ji && (t && t.a(),
            this.ji = t)
        }
        k(t) {
            const e = this.q;
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
        m(t) {
            this.o != t && (t.a(this),
            this.o = t)
        }
    }
    ;
    const es = class {
        constructor(t, e) {
            this.i = t,
            this.l = e,
            this.dc = !1,
            this.k = !1,
            this.m = t.getExtension("OES_vertex_array_object"),
            this.g = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),
            this.g ? (this.fe = t.getParameter(this.g.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
            WH.debug("Texture anisotropy enabled", this.fe)) : WH.debug("Texture anisotropy disabled (not supported)"),
            this.dc = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0,
            this.o = t.getExtension("OES_texture_float"),
            this.k = this.dc && null != this.o,
            this.k ? WH.debug("(float texture) Skinning in shader is supported") : WH.debug("(float texture) Skinning in shader is (not supported) "),
            this.n = new $r(this,e),
            this.ba = new ts(t)
        }
        j() {
            return this.i
        }
        h() {
            return this.m
        }
        d() {
            return this.n
        }
        b(t) {
            const e = this.ba
              , i = this.j();
            e.i(t.c),
            e.m(t.b),
            i.drawElements(t.g, t.e, i.UNSIGNED_SHORT, t.h)
        }
        e() {
            this.ba.dc()
        }
        a() {
            this.ba.i(null)
        }
        c(t) {
            this.e(),
            t.forEach((t => {
                this.b(t)
            }
            )),
            this.a()
        }
    }
    ;
    const is = class {
        constructor(t, e) {
            this.a = t,
            this.k = e,
            this.h = null,
            this.f = !1,
            this.d = 0,
            this.g = 0,
            0 != e && (this.l = t.options.contentPath + "textures/" + e + WH.WebP.getImageExtension(),
            this.j = new Image,
            this.j.onload = () => {
                this.e();
                model.onLoadedSource();
            }
            ,
            this.j.onerror = () => {
                this.j = null
            }
            ,
            model.onBeforeLoadSource(),
            this.i(this.j, this.l))
        }
        i(t, e) {
            var i = new XMLHttpRequest;
            i.open("GET", e, !0),
            i.responseType = "arraybuffer",
            i.onload = e => {
                var r = new Blob([i.response]);
                t.src = window.URL.createObjectURL(r)
            }
            ,
            i.addEventListener("progress", (t => {
                const i = this.a;
                i && t.lengthComputable && (i.downloads[e] ? i.downloads[e].loaded = t.loaded : i.downloads[e] = {
                    loaded: t.loaded,
                    total: t.total
                },
                i.updateProgress())
            }
            )),
            i.addEventListener("load", ( () => {
                const t = this.a;
                t && (delete t.downloads[e],
                t.updateProgress())
            }
            )),
            i.send()
        }
        b() {
            return this.f
        }
        c() {
            this.h = null
        }
        e() {
            this.d = this.j.width,
            this.g = this.j.height,
            this.h = this.a.renderer.g(this.j),
            this.f = !0,
            this.j = null
        }
    }
      , rs = {
        147259: !0
    }
      , ss = [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 2, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      , ns = {
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
      , as = {
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
      , os = [0, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 21, 22, 22, 16, 21, 0, 19, 5, 21, 22, 22, 0, 21, 21, 27]
      , hs = [0, 16, 0, 15, 1, 7, 10, 5, 6, 6, 8, 0, 0, 17, 18, 19, 14, 20, 0, 9, 7, 21, 22, 23, 0, 24, 25, 0]
      , ls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      , us = [0, 2, 0, 4, 128, 128, 128, 128, 128, 128, 128, 0, 0, 1, 1, 1, 128, 1, 0, 128, 128, 1, 1, 1, 0, 1, 1, 2]
      , cs = [13, 14, 15, 16, 17, 88, 89]
      , fs = [8, 9, 10, 11, 12, 86, 87]
      , ds = {
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
      , gs = {
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
      , bs = {
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
      , _s = 5300
      , ps = "precision mediump float;\r\n\r\nuniform float x;\r\nuniform float y;\r\nuniform float width;\r\nuniform float height;\r\n\r\nattribute vec2 aTextCoord;\r\nvarying vec2 vTextCoords;\r\nvoid main() {\r\n    vTextCoords = aTextCoord;\r\n\r\n    vec2 pos = vec2(\r\n        (x + aTextCoord.x*width)* 2.0 - 1.0,\r\n        (y + aTextCoord.y*height)* 2.0 - 1.0\r\n    );\r\n\r\n    gl_Position = vec4(pos.x, pos.y, 0, 1);\r\n}";
    class ms {
        constructor() {
            this.d = null,
            this.b = null,
            this.e = null
        }
        a() {
            null != this.d && this.d.c(),
            null != this.b && this.b.c(),
            null != this.e && this.e.c()
        }
        c() {
            return !(this.d && !this.d.b()) && (!(this.b && !this.b.b()) && !(this.e && !this.e.b()))
        }
    }
    class vs {
        constructor() {
            this.d = null,
            this.b = null,
            this.e = null,
            this.h = {},
            this.j = new li,
            this.f = null,
            this.i = null
        }
    }
    const xs = {
        uDiffuseTexture: null,
        uSpecularTexture: null,
        uEmissiveTexture: null
    };
    class Ts {
        constructor(t, e, i) {
            this.f = e,
            this.n = i,
            this.p = null,
            this.i = null,
            this.l = null,
            this.h = null,
            this.m = null,
            this.a = !1,
            this.b = t,
            this.m = function(t) {
                let e = t.createTexture();
                t.bindTexture(t.TEXTURE_2D, e),
                t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])),
                t.bindTexture(t.TEXTURE_2D, null);
                let i = t.createTexture();
                t.bindTexture(t.TEXTURE_2D, i),
                t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])),
                t.bindTexture(t.TEXTURE_2D, null);
                let r = new vs;
                return r.f = e,
                r.i = i,
                r.d = Je(t, [ps, "precision mediump float;\r\n\r\nvarying vec2 vTextCoords;\r\nuniform sampler2D uDiffuseTexture;\r\nuniform sampler2D uSpecularTexture;\r\nuniform sampler2D uEmissiveTexture;\r\nuniform sampler2D renderResultTexture;\r\nuniform int uBlendMode;\r\nuniform vec2 screenResolution;\r\nuniform int layer;\r\n\r\nuniform float diffuseTexWidth;\r\nuniform float diffuseTexHeight;\r\n\r\nfloat overlayBlend(float a, float b) {\r\n    if (b > 0.5) {\r\n        return (1.0 - (1.0 - 2.0 * (a - 0.5)) * (1.0 - b));\r\n    } else {\r\n        return ((2.0 * a) * b);\r\n    }\r\n}\r\n\r\nfloat alphaStraightBlend(float a, float b, float alpha) {\r\n    return (a * alpha) + (b * (1.0 - alpha));\r\n}\r\n\r\nvoid main() {\r\n    vec2 l_texCoord = vTextCoords.xy;\r\n\r\n\r\n    l_texCoord.x = max(min(l_texCoord.x, (diffuseTexWidth-0.5)/diffuseTexWidth), 0.5/diffuseTexWidth);\r\n    l_texCoord.y = max(min(l_texCoord.y, (diffuseTexHeight-0.5)/diffuseTexHeight), 0.5/diffuseTexHeight);\r\n\r\n    vec4 diffuse = texture2D( uDiffuseTexture, l_texCoord );\r\n    vec4 backGround = texture2D( renderResultTexture, gl_FragCoord.xy / screenResolution );\r\n\r\n    if (uBlendMode == 1) {\r\n        // Blit (we do nothing?)\r\n        //if (diffuse.a < 0.001) discard;\r\n\r\n        //vec4 finalColor = diffuse;\r\n\r\n        //diffuse = vec4(finalColor.rgb, finalColor.a);\r\n    } else if (uBlendMode == 2) {\r\n        // Multiply\r\n        if (diffuse.a < 0.001) discard;\r\n\r\n        vec4 multTexture = diffuse;\r\n        vec3 finalColor = (backGround.rgb * multTexture.rgb);\r\n\r\n        diffuse = vec4(finalColor.rgb, 1.0);\r\n    } else if (uBlendMode == 3) {\r\n        // Overlay\r\n        if (diffuse.a < 0.001) discard;\r\n\r\n        vec4 overlayTex = diffuse;\r\n\r\n        vec3 finalColor = vec3(\r\n            overlayBlend(overlayTex.r, backGround.r),\r\n            overlayBlend(overlayTex.g, backGround.g),\r\n            overlayBlend(overlayTex.b, backGround.b)\r\n        );\r\n\r\n        vec3 mainTexVisible = backGround.rgb * (1.0 - overlayTex.a);\r\n        vec3 overlayTexVisible = finalColor.rgb * (overlayTex.a);\r\n        finalColor = (mainTexVisible + overlayTexVisible);\r\n\r\n        diffuse = vec4(finalColor, backGround.a);\r\n    } else if (uBlendMode == 5) {\r\n        // AlphaStraight\r\n        vec4 overlayTex = diffuse;\r\n\r\n        //float alphaMult = 1.0;\r\n        //vec3 finalColor = vec3(\r\n        //    alphaStraightBlend(overlayTex.r, backGround.r, alphaMult*overlayTex.a),\r\n        //    alphaStraightBlend(overlayTex.g, backGround.g, alphaMult*overlayTex.a),\r\n        //    alphaStraightBlend(overlayTex.b, backGround.b, alphaMult*overlayTex.a)\r\n        //);\r\n        vec3 finalColor = overlayTex.rgb * overlayTex.a + backGround.rgb * (1.0 - overlayTex.a);\r\n\r\n        diffuse = vec4(finalColor.rgb, 1.0);\r\n    } else if (uBlendMode == 0 || uBlendMode == 4 || uBlendMode == 6 || uBlendMode == 7) {\r\n        // default, Screen, InferAlphaBlend, Unknown1\r\n        if (diffuse.a < 0.001) discard;\r\n\r\n        vec3 finalColor = mix(backGround.rgb, diffuse.rgb, diffuse.a);\r\n\r\n        diffuse = vec4(finalColor.rgb, 1.0);\r\n    }\r\n\r\n    gl_FragColor = diffuse;\r\n}"], null, null),
                r.b = Je(t, [ps, "precision mediump float;\r\n\r\nvarying vec2 vTextCoords;\r\nuniform sampler2D uDiffuseTexture;\r\nuniform sampler2D uSpecularTexture;\r\nuniform sampler2D uEmissiveTexture;\r\nuniform sampler2D renderResultTexture;\r\nuniform int uBlendMode;\r\n\r\nvoid main() {\r\n    vec4 diffuse = texture2D( uDiffuseTexture, vTextCoords.xy );\r\n    vec4 specular = texture2D( uSpecularTexture, vTextCoords.xy );\r\n    if (diffuse.a < 0.001) discard;\r\n    gl_FragColor = vec4(specular.rgb, 1.0);\r\n}"], null, null),
                r.e = Je(t, [ps, "precision mediump float;\r\n\r\nvarying vec2 vTextCoords;\r\nuniform sampler2D uDiffuseTexture;\r\nuniform sampler2D uSpecularTexture;\r\nuniform sampler2D uEmissiveTexture;\r\nuniform sampler2D renderResultTexture;\r\nuniform int uBlendMode;\r\nuniform vec2 screenResolution;\r\nuniform float emissiveAlphaOverride;\r\nuniform int layer;\r\n\r\nvoid main() {\r\n    vec4 diffuse = texture2D( uDiffuseTexture, vTextCoords.xy );\r\n    vec4 emissive = texture2D( uEmissiveTexture, vTextCoords.xy );\r\n    vec4 backGround = texture2D( renderResultTexture, gl_FragCoord.xy / screenResolution );\r\n\r\n    if (diffuse.a < 0.001) discard;\r\n//    if (emissive.a < 0.001) discard;\r\n\r\n    //TODO: This is a hack from what was observed in Nightborne texture customization with tatoos.\r\n    //TODO: But Maybe switch should be over layer or something else instead of blend\r\n    float alpha = 1.0;\r\n\r\n    if (emissiveAlphaOverride > -1.0) {\r\n        alpha = emissiveAlphaOverride;\r\n    } else if (layer <= 1) {\r\n        alpha = 0.0;\r\n    } else {\r\n        alpha = emissive.a;\r\n    }\r\n\r\n    gl_FragColor = vec4(emissive.rgb, alpha);\r\n}"], null, null),
                r.h = {},
                r.a = t.createBuffer(),
                t.bindBuffer(t.ARRAY_BUFFER, r.a),
                t.bufferData(t.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), t.STATIC_DRAW),
                t.bindBuffer(t.ARRAY_BUFFER, null),
                r.k = t.createBuffer(),
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r.k),
                t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Int16Array([0, 1, 2, 1, 3, 2]), t.STATIC_DRAW),
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null),
                r.g = t.createFramebuffer(),
                r.c = {
                    loc: t.getAttribLocation(r.d.program, "aTextCoord"),
                    type: t.FLOAT,
                    size: 2,
                    offset: 0,
                    stride: 0
                },
                r
            }(t)
        }
        o() {
            let t = this.b;
            this.h || (this.h = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.h),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.f, this.n, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR)),
            this.p || (this.p = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.p),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.f, this.n, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR)),
            this.i || (this.i = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.i),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.f, this.n, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR)),
            this.l || (this.l = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.l),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.f, this.n, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
            t.bindTexture(t.TEXTURE_2D, null)),
            t.bindFramebuffer(t.FRAMEBUFFER, this.m.g),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.p, 0),
            t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.i, 0),
            t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.l, 0),
            t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
            t.useProgram(this.m.b.program),
            t.bindBuffer(t.ARRAY_BUFFER, this.m.a),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.m.k),
            this.m.j.disableAll(),
            this.m.j.enable(t, [this.m.c]),
            t.viewport(0, 0, this.f, this.n)
        }
        g(t, e, i, r, s, n, a, o) {
            let h = this.b;
            this.m.h.x = e,
            this.m.h.y = i,
            this.m.h.width = r,
            this.m.h.height = s,
            this.m.h.diffuseTexWidth = t.d.d,
            this.m.h.diffuseTexHeight = t.d.g,
            null == t.b && null == t.e || (this.a = !0);
            let l = 0;
            1 == n ? l = 1 : 4 == n ? l = 2 : 6 == n ? l = 3 : 7 == n ? l = 4 : 9 == n ? l = 5 : 15 == n ? l = 6 : 16 == n && (l = 7),
            this.m.h.uBlendMode = l,
            this.m.h.screenResolution = new Float32Array([this.f, this.n]),
            this.m.h.uDiffuseTexture = null != t.d ? t.d.h : this.m.f,
            this.m.h.uSpecularTexture = null != t.b ? t.b.h : this.m.f,
            this.m.h.uEmissiveTexture = null != t.e ? t.e.h : this.m.i,
            this.m.h.renderResultTexture = null != this.h ? this.h : this.m.f,
            this.m.h.layer = a,
            this.m.h.emissiveAlphaOverride = o,
            h.disable(h.CULL_FACE),
            h.disable(h.DEPTH_TEST),
            h.disable(h.BLEND),
            h.useProgram(this.m.d.program),
            h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, this.p, 0),
            h.bindTexture(h.TEXTURE_2D, this.h),
            h.copyTexImage2D(h.TEXTURE_2D, 0, h.RGBA, 0, 0, this.f, this.n, 0),
            h.bindTexture(h.TEXTURE_2D, null),
            Ye(this.m.d, this.m.h),
            h.drawElements(h.TRIANGLES, 6, h.UNSIGNED_SHORT, 0),
            Ye(this.m.d, xs),
            h.useProgram(this.m.b.program),
            h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, this.i, 0),
            h.bindTexture(h.TEXTURE_2D, this.h),
            h.copyTexImage2D(h.TEXTURE_2D, 0, h.RGBA, 0, 0, this.f, this.n, 0),
            h.bindTexture(h.TEXTURE_2D, null),
            Ye(this.m.b, this.m.h),
            h.drawElements(h.TRIANGLES, 6, h.UNSIGNED_SHORT, 0),
            Ye(this.m.b, xs),
            h.useProgram(this.m.e.program),
            h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, this.l, 0),
            h.bindTexture(h.TEXTURE_2D, this.h),
            h.copyTexImage2D(h.TEXTURE_2D, 0, h.RGBA, 0, 0, this.f, this.n, 0),
            h.bindTexture(h.TEXTURE_2D, null),
            Ye(this.m.e, this.m.h),
            h.drawElements(h.TRIANGLES, 6, h.UNSIGNED_SHORT, 0),
            Ye(this.m.e, xs),
            h.useProgram(null)
        }
        c() {
            let t = this.b;
            t.bindFramebuffer(t.FRAMEBUFFER, null),
            t.bindTexture(t.TEXTURE_2D, null),
            t.enable(t.CULL_FACE),
            t.enable(t.DEPTH_TEST)
        }
        j(t) {
            if (0 == t)
                return this.p;
            if (1 == t)
                return this.i;
            if (2 == t)
                return this.l;
            throw new Error("unknown usage " + t)
        }
        k(t) {
            let e = null;
            return e = {
                h: t,
                d: this.f,
                g: this.n,
                f: !0
            },
            e
        }
        d() {
            let t = this.b;
            this.h && t.deleteTexture(this.h),
            this.p && t.deleteTexture(this.p),
            this.i && t.deleteTexture(this.i),
            this.l && t.deleteTexture(this.l),
            this.p = null,
            this.i = null,
            this.l = null,
            this.h = null,
            this.m = null,
            this.b = null
        }
        e(t) {
            switch (t) {
            case 0:
                return this.k(this.p);
            case 1:
                return this.k(this.i);
            case 2:
                return this.k(this.l);
            default:
                return null
            }
        }
    }
    function ws() {
        var t = new di(2);
        return di != Float32Array && (t[0] = 0,
        t[1] = 0),
        t
    }
    function ys(t, e) {
        var i = new di(2);
        return i[0] = t,
        i[1] = e,
        i
    }
    function As(t, e, i) {
        return t[0] = e,
        t[1] = i,
        t
    }
    function Es(t, e, i) {
        return t[0] = e[0] * i[0],
        t[1] = e[1] * i[1],
        t
    }
    function Ms(t, e, i) {
        return t[0] = e[0] * i,
        t[1] = e[1] * i,
        t
    }
    !function() {
        var t = ws()
    }();
    function Cs() {
        var t = new di(9);
        return di != Float32Array && (t[1] = 0,
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
    function Ss(t, e) {
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
    function ks(t, e, i) {
        var r = e[0]
          , s = e[1]
          , n = e[2]
          , a = e[3]
          , o = e[4]
          , h = e[5]
          , l = e[6]
          , u = e[7]
          , c = e[8]
          , f = i[0]
          , d = i[1]
          , g = i[2]
          , b = i[3]
          , _ = i[4]
          , p = i[5]
          , m = i[6]
          , v = i[7]
          , x = i[8];
        return t[0] = f * r + d * a + g * l,
        t[1] = f * s + d * o + g * u,
        t[2] = f * n + d * h + g * c,
        t[3] = b * r + _ * a + p * l,
        t[4] = b * s + _ * o + p * u,
        t[5] = b * n + _ * h + p * c,
        t[6] = m * r + v * a + x * l,
        t[7] = m * s + v * o + x * u,
        t[8] = m * n + v * h + x * c,
        t
    }
    function Fs() {
        var t = new di(4);
        return di != Float32Array && (t[0] = 0,
        t[1] = 0,
        t[2] = 0),
        t[3] = 1,
        t
    }
    function Is(t, e, i) {
        i *= .5;
        var r = Math.sin(i);
        return t[0] = r * e[0],
        t[1] = r * e[1],
        t[2] = r * e[2],
        t[3] = Math.cos(i),
        t
    }
    function Ds(t, e, i, r) {
        var s, n, a, o, h, l = e[0], u = e[1], c = e[2], f = e[3], d = i[0], g = i[1], b = i[2], _ = i[3];
        return (n = l * d + u * g + c * b + f * _) < 0 && (n = -n,
        d = -d,
        g = -g,
        b = -b,
        _ = -_),
        1 - n > fi ? (s = Math.acos(n),
        a = Math.sin(s),
        o = Math.sin((1 - r) * s) / a,
        h = Math.sin(r * s) / a) : (o = 1 - r,
        h = r),
        t[0] = o * l + h * d,
        t[1] = o * u + h * g,
        t[2] = o * c + h * b,
        t[3] = o * f + h * _,
        t
    }
    var Us, Rs, Os, Bs, Ps, zs, Ns = Mr, Gs = Cr, Ls = Dr;
    Us = gi(),
    Rs = _i(1, 0, 0),
    Os = _i(0, 1, 0),
    Bs = Fs(),
    Ps = Fs(),
    zs = Cs();
    class Hs {
        constructor() {
            this.d = -1,
            this.c = null,
            this.a = 0,
            this.b = -1,
            this.e = !1
        }
    }
    class js {
        constructor() {
            this.e = new Hs,
            this.d = new Hs,
            this.b = new Hs,
            this.a = 0,
            this.c = 1,
            this.f = !1
        }
    }
    class qs {
        i() {
            var t = this;
            if (t.d)
                for (var e = 0; e < t.d.length; ++e)
                    t.d[e] = null;
            return t.b = null,
            t.d = null,
            null
        }
        l(t, e, i, r) {
            let s = this;
            if (null == r && (r = this.f()),
            this.c >= 0 && (t = this.c < e.length ? e[this.c] : e[0]),
            0 != s.e || s.d.length > 1) {
                if (s.b.length > 1) {
                    for (var n = -1, a = s.b.length - 1, o = 0; o < a; ++o)
                        if (t >= s.b[o] && t <= s.b[o + 1]) {
                            n = o;
                            break
                        }
                    if (-1 == n && (n = s.b.length - 1),
                    1 == s.e) {
                        var h = s.b[n]
                          , l = s.b[n + 1]
                          , u = 0;
                        return t > l ? (u = 1,
                        console.log("time > t2")) : h != l && (u = (t - h) / (l - h)),
                        u = Math.max(0, Math.min(1, u)),
                        s.h(s.d[n], s.d[n + 1], u, r)
                    }
                    return r = s.a(r, s.d[n])
                }
                return s.d.length > 0 ? r = s.a(r, s.d[0]) : i
            }
            return 0 == s.d.length ? r : r = s.a(r, s.d[0])
        }
        k(t) {
            var e, i = this;
            i.e = t.getInt16(),
            i.c = t.getInt16(),
            i.g = t.getBool();
            var r = t.getInt32();
            for (i.b = new Array(r),
            e = 0; e < r; ++e)
                i.b[e] = t.getInt32();
            var s = t.getInt32();
            for (i.d = new Array(s),
            e = 0; e < s; ++e)
                i.d[e] = i.j(t)
        }
    }
    class Vs extends qs {
        constructor(t) {
            super();
            this.ba = gi(),
            this.k(t)
        }
        f() {
            return gi()
        }
        h(t, e, i, r) {
            return Ii(r, t, e, i)
        }
        a(t, e) {
            return pi(t, e),
            t
        }
        j(t) {
            return mi(gi(), t.getFloat(), t.getFloat(), t.getFloat())
        }
    }
    class Xs extends qs {
        constructor(t) {
            super();
            this.k(t),
            this.ba = Fs()
        }
        f() {
            return Fs()
        }
        h(t, e, i, r) {
            return Ds(r, t, e, i)
        }
        a(t, e) {
            return Ns(t, e),
            t
        }
        j(t) {
            let e = t.getFloat()
              , i = t.getFloat()
              , r = t.getFloat()
              , s = t.getFloat();
            const n = Gs(Fs(), -e, -i, -r, s);
            return Ls(n, n),
            n
        }
    }
    class Ws extends qs {
        constructor(t) {
            super();
            this.k(t)
        }
        j(t) {
            return t.getUint16()
        }
        f() {
            return 0
        }
        h(t, e, i, r) {
            return t + (e - t) * i
        }
        a(t, e) {
            return e
        }
    }
    class Ys extends Ws {
        j(t) {
            return t.getFloat()
        }
    }
    class Zs extends Ws {
        j(t) {
            return t.getUint8()
        }
    }
    class Ks {
        g() {
            for (var t = this, e = 0; e < t.c.length; ++e)
                t.c[e] = null;
            return t.h = null,
            t.c = null,
            t.e = null,
            null
        }
        i(t, e, i, r) {
            let s = this;
            i || (i = this.b());
            let n = r || s.c;
            if (s.c.length > 1 && s.h.length > 1) {
                for (var a = -1, o = s.h.length, h = 0; h < o - 1; ++h)
                    if (t >= s.h[h] && t <= s.h[h + 1]) {
                        a = h;
                        break
                    }
                -1 == a && (a = s.h.length - 1);
                var l = s.h[a]
                  , u = s.h[a + 1]
                  , c = 0;
                return l != u && (c = (t - l) / (u - l)),
                s.d(n[a], n[a + 1], c, i)
            }
            return n.length > 0 ? i = s.a(i, n[0]) : e
        }
        f(t) {
            var e, i = this, r = t.getInt32();
            for (i.h = new Array(r),
            e = 0; e < r; ++e)
                i.h[e] = t.getInt16() / 32767;
            var s = t.getInt32();
            for (i.c = new Array(s),
            e = 0; e < s; ++e)
                i.c[e] = i.j(t)
        }
    }
    class $s extends Ks {
        constructor(t) {
            super();
            this.ba = ws(),
            this.f(t)
        }
        b() {
            return ws()
        }
        d(t, e, i, r) {
            return s = r,
            a = e,
            o = i,
            h = (n = t)[0],
            l = n[1],
            s[0] = h + o * (a[0] - h),
            s[1] = l + o * (a[1] - l),
            s;
            var s, n, a, o, h, l
        }
        a(t, e) {
            var i, r;
            return r = e,
            (i = t)[0] = r[0],
            i[1] = r[1],
            t
        }
        j(t) {
            return As(ws(), t.getFloat(), t.getFloat())
        }
    }
    class Js extends Ks {
        constructor(t) {
            super();
            this.f(t)
        }
        b() {
            return gi()
        }
        d(t, e, i, r) {
            return Ii(r, t, e, i)
        }
        a(t, e) {
            return pi(t, e),
            t
        }
        j(t) {
            return mi(gi(), t.getFloat(), t.getFloat(), t.getFloat())
        }
    }
    class Qs extends Ks {
        constructor(t) {
            super();
            this.f(t)
        }
        b() {
            return 0
        }
        d(t, e, i, r) {
            return t + (e - t) * i
        }
        a(t, e) {
            return t
        }
        j(t) {
            return t.getUint16()
        }
    }
    class tn {
        constructor(t, e) {
            this.e(t, e)
        }
        e(t, e) {
            var i = t.getInt32();
            this.c = new Array(i);
            for (let r = 0; r < i; ++r)
                this.c[r] = new e(t)
        }
        a(t) {
            return !(!this.c || 0 == this.c.length) && (t >= this.c.length && (t = 0),
            this.c[t].g)
        }
        b(t, e, i, r) {
            if (!this.c || 0 == this.c.length)
                return i;
            let s = t.d.d;
            s >= this.c.length && (s = 0);
            let n = this.c[s].l(t.d.a, e, i, r);
            if (t.a > 0 && t.a < 1) {
                let r = this.c[0].f()
                  , s = t.b.d;
                s >= this.c.length && (s = 0);
                let a = this.c[s].l(t.b.a, e, i, r);
                a || (a = r),
                r = this.c[0].f(),
                n = a
            }
            return n
        }
        d() {
            if (this.c && 0 != this.c.length) {
                for (var t = 0; t < this.c.length; ++t)
                    this.c[t].i(),
                    this.c[t] = null;
                return null
            }
        }
    }
    function en(t, e) {
        return Er(t[4 * e + 0], t[4 * e + 1], t[4 * e + 2], 0)
    }
    function rn(t, e, i) {
        for (let r = 0; r < 4; r++)
            t[4 * e + r] = i[r]
    }
    const sn = class {
        constructor(t, e, i) {
            this.m = t,
            this.b = i,
            this.l = null,
            this.h = null,
            this.n = null,
            this.f = Pi(),
            this.c = Pi(),
            this.x = Pi();
            const r = this;
            r.v = e,
            r.r = gi(),
            r.k = Pi(),
            r.z = Pi(),
            r.u = Pi(),
            r.j = gi(),
            r.o = Fs(),
            r.i = Pi(),
            r.s = !1,
            r.q = !1,
            r.d = !1
        }
        a() {
            var t = this;
            t.r = null,
            t.k = null,
            t.j = null,
            t.o = null,
            t.i = null
        }
        y() {
            this.s = !0;
            for (var t = 0; t < 16; ++t)
                this.k[t] = 0
        }
        e(t) {
            t ? (null == this.l && (this.l = new js),
            this.m.aN(t, this.l)) : this.l = null;
            let e = this.m.aA[this.v];
            for (let i = 0; i < e.length; i++)
                this.m.af[e[i]].e(t)
        }
        A(t) {
            t ? (null == this.h && (this.h = new js),
            this.m.aN(t, this.h)) : this.h = null;
            let e = this.m.aA[this.v];
            for (let i = 0; i < e.length; i++)
                this.m.af[e[i]].A(t)
        }
        w(t) {
            const e = this.b;
            var i = this;
            if (i.s)
                return void i.y();
            if (null != this.l && this.m.V(this.l, t),
            i.q || i.d)
                return;
            if (i.q = !0,
            !i.m)
                return;
            Gi(i.k);
            var r = i.m.aw;
            if (!r)
                return;
            let s = this.c;
            if (Gi(s),
            ji(s, s, this.m.U.viewMatrix),
            ji(s, s, this.m.Q),
            ji(i.k, i.k, s),
            e.d > -1) {
                i.m.af[e.d].w(t);
                let r = this.x;
                if (zi(r, i.m.af[e.d].k),
                ji(r, s, r),
                1 & e.e || 2 & e.e || 4 & e.e) {
                    if (4 & e.e && 2 & e.e)
                        rn(r, 0, en(s, 0)),
                        rn(r, 1, en(s, 1)),
                        rn(r, 2, en(s, 2));
                    else if (4 & e.e) {
                        {
                            let t = en(s, 0)
                              , e = Ir(t);
                            Fr(t, t, Ir(en(r, 0)) / e),
                            rn(r, 0, t)
                        }
                        {
                            let t = en(s, 1)
                              , e = Ir(t);
                            Fr(t, t, Ir(en(r, 1)) / e),
                            rn(r, 1, t)
                        }
                        {
                            let t = en(s, 2)
                              , e = Ir(t);
                            Fr(t, t, Ir(en(r, 2)) / e),
                            rn(r, 2, t)
                        }
                    } else if (2 & e.e) {
                        {
                            let t = en(s, 0);
                            Fr(t, t, 1 / Ir(en(r, 0))),
                            Fr(t, t, Ir(en(s, 0))),
                            rn(r, 0, t)
                        }
                        {
                            let t = en(s, 1);
                            Fr(t, t, 1 / Ir(en(r, 1))),
                            Fr(t, t, Ir(en(s, 1))),
                            rn(r, 1, t)
                        }
                        {
                            let t = en(s, 2);
                            Fr(t, t, 1 / Ir(en(r, 2))),
                            Fr(t, t, Ir(en(s, 2))),
                            rn(r, 2, t)
                        }
                    }
                    if (1 & e.e)
                        rn(r, 3, en(s, 3));
                    else {
                        let t = Er(e.i[0], e.i[1], e.i[2], 1)
                          , n = Ar();
                        Mr(n, t),
                        n[3] = 0;
                        let a = Ar()
                          , o = Ar();
                        Ur(a, t, i.m.af[i.b.d].k),
                        Ur(a, a, s),
                        Ur(o, n, r),
                        kr(a, a, o),
                        a[3] = 1,
                        rn(r, 3, a)
                    }
                }
                let n = this.f;
                Hi(n, s),
                ji(r, n, r),
                ji(i.k, i.k, r)
            }
            let n = null;
            if (null != this.l) {
                let t = this.p(this.l);
                this.m.as || (this.t = t),
                this.m.at || (n = this.m.as ? this.t : t)
            } else {
                let t = this.p(r);
                this.m.as || (this.t = t),
                this.m.at || (n = this.m.as ? this.t : t)
            }
            let a = null;
            if (null != this.h) {
                let t = this.p(this.h);
                this.m.as || (this.g = t),
                a = this.m.as ? this.g : t
            }
            let o = null != n || null != a
              , h = Pi();
            o && (null != n && ji(h, h, n),
            null != a && ji(h, h, a)),
            null != this.n && (qi(h, h, this.b.i),
            ji(h, h, this.n),
            qi(h, h, Ci(this.j, this.b.i))),
            ji(i.k, i.k, h);
            let l = 120 & e.e;
            if (l) {
                let t = Pi();
                zi(t, i.k);
                let e = i.k
                  , r = gi();
                Ki(r, i.k);
                let s = Ar();
                if (16 == l) {
                    let t = en(i.k, 0);
                    Fr(t, t, 1 / bi(t)),
                    rn(i.k, 0, t);
                    let r = Er(e[4], -e[0], 0, 0);
                    rn(e, 1, Dr(r, r)),
                    Fi(s, r, t),
                    s[3] = 0,
                    rn(e, 2, s)
                } else if (l > 16) {
                    if (32 == l) {
                        let t = en(e, 1);
                        Fr(t, t, 1 / Ir(t)),
                        rn(i.k, 1, t);
                        let r = Er(-e[5], e[1], 0, 0);
                        rn(e, 0, Dr(r, r)),
                        s[3] = 0,
                        rn(e, 2, s)
                    } else if (64 == l) {
                        let t = en(e, 2);
                        Dr(t, t),
                        rn(e, 2, t);
                        let i = Er(t[1], -t[0], 0, 0);
                        Dr(i, i),
                        rn(e, 1, i),
                        Fi(s, t, i),
                        s[3] = 0,
                        rn(e, 0, s)
                    }
                } else if (8 == l) {
                    let t = this.m.isMirrored;
                    if (o) {
                        let i = en(h, 0);
                        i = Er(i[1], i[2], -i[0], 0),
                        Dr(i, i),
                        rn(e, 0, i);
                        let r = en(h, 1);
                        r = Er(t ? -r[1] : r[1], t ? -r[2] : r[2], t ? r[0] : -r[0], 0),
                        Dr(r, r),
                        rn(e, 1, r);
                        let s = en(h, 2);
                        s = Er(s[1], s[2], -s[0], 0),
                        Dr(s, s),
                        rn(e, 2, s)
                    } else {
                        rn(e, 0, Er(0, 0, -1, 0)),
                        rn(e, 1, Er(t ? -1 : 1, 0, 0, 0)),
                        rn(e, 2, Er(0, 1, 0, 0))
                    }
                }
                let n = Er(this.b.i[0], this.b.i[1], this.b.i[2], 1)
                  , a = Er(this.b.i[0], this.b.i[1], this.b.i[2], 0)
                  , u = en(e, 0)
                  , c = en(e, 1)
                  , f = en(e, 2);
                Fr(u, u, r[0]),
                Fr(c, c, r[1]),
                Fr(f, f, r[2]),
                rn(e, 0, u),
                rn(e, 1, c),
                rn(e, 2, f),
                Ur(n, n, t),
                Ur(a, a, e);
                let d = Ar();
                kr(d, n, a),
                d[3] = 1,
                rn(e, 3, d)
            }
            Hi(s, s),
            ji(i.k, s, i.k),
            Hi(i.z, i.k),
            Li(i.u, i.z),
            Di(i.r, i.b.i, i.k)
        }
        p(t) {
            const e = this.b;
            var i = e.g.a(t.d.d)
              , r = e.f.a(t.d.d)
              , s = e.a.a(t.d.d);
            if (0 != (640 & e.e)) {
                let y = Pi();
                return Gi(y),
                qi(y, y, this.b.i),
                i && (this.j = e.g.b(t, this.m.aq),
                qi(y, y, this.j)),
                r && (this.o = e.f.b(t, this.m.aq, Fs()),
                n = this.i,
                a = this.o,
                o = a[0],
                h = a[1],
                l = a[2],
                u = a[3],
                g = o * (c = o + o),
                b = h * c,
                _ = h * (f = h + h),
                p = l * c,
                m = l * f,
                v = l * (d = l + l),
                x = u * c,
                T = u * f,
                w = u * d,
                n[0] = 1 - _ - v,
                n[1] = b + w,
                n[2] = p - T,
                n[3] = 0,
                n[4] = b - w,
                n[5] = 1 - g - v,
                n[6] = m + x,
                n[7] = 0,
                n[8] = p + T,
                n[9] = m - x,
                n[10] = 1 - g - _,
                n[11] = 0,
                n[12] = 0,
                n[13] = 0,
                n[14] = 0,
                n[15] = 1,
                ji(y, y, this.i)),
                s && (this.j = e.a.b(t, this.m.aq),
                Vi(y, y, this.j)),
                qi(y, y, Ci(this.j, this.b.i)),
                y
            }
            var n, a, o, h, l, u, c, f, d, g, b, _, p, m, v, x, T, w;
            return null
        }
    }
    ;
    const nn = class {
        constructor(t) {
            this.a = t,
            this.e = 267320826 ^ t;
            let e = new ArrayBuffer(4);
            this.d = new DataView(e)
        }
        b() {
            let t = this.e;
            return t ^= t << 13,
            t ^= t >> 17,
            t ^= t << 5,
            this.e = t,
            t
        }
        f() {
            let t, e = this.b();
            return this.d.setInt32(0, 1065353216 | 8388607 & e),
            t = 2147483648 & e ? 2 - this.d.getFloat32(0) : this.d.getFloat32(0) - 2,
            t
        }
        c() {
            let t = this.b();
            return this.d.setInt32(0, 1065353216 | 8388607 & t),
            this.d.getFloat32(0) - 1
        }
    }
    ;
    const an = class {
        constructor() {
            this.f = 0,
            this.a = 0,
            this.g = 0,
            this.h = 0,
            this.e = gi(),
            this.c = 0,
            this.j = 0,
            this.b = 0,
            this.i = 0,
            this.d = 0
        }
    }
    ;
    const on = class {
        constructor(t, e) {
            this.h = t,
            this.a = e,
            this.e = new an
        }
        f() {
            return this.e.h + this.h.f() * this.a.h
        }
        d() {
            return this.e.h + this.a.h
        }
        i() {
            return this.e.g + this.a.W
        }
        g(t) {
            return this.e.g + 30518509e-12 * t * this.a.W
        }
        b() {
            let t = this.e.f;
            return t *= 1 + this.e.a * this.h.f(),
            t
        }
        k() {
            return this.e
        }
        c(t) {
            pi(t, this.e.e)
        }
    }
    ;
    const hn = class extends on {
        j(t, e) {
            let i, r = e * this.h.c(), s = this.h.f();
            i = s < 1 ? s > -1 ? Math.trunc(32767 * s + .5) : -32767 : 32767,
            t.g = i;
            let n = this.g(i);
            n < .001 && (n = .001),
            t.f = function(t, e) {
                let i = Math.abs(t)
                  , r = Math.abs(e);
                return Number((i - Math.floor(i / r) * r).toPrecision(8)) * Math.sign(t)
            }(r, n),
            t.a = 65535 & this.h.b(),
            mi(t.e, this.h.f() * this.e.j * .5, this.h.f() * this.e.b * .5, 0);
            let a = this.b()
              , o = this.e.c;
            if (o < .001) {
                let e = this.e.i * this.h.f()
                  , i = this.e.d * this.h.f()
                  , r = Math.sin(e)
                  , s = Math.sin(i)
                  , n = Math.cos(e)
                  , o = Math.cos(i);
                mi(t.c, o * r * a, s * r * a, n * a)
            } else {
                let e = gi();
                pi(e, t.e),
                e[2] = e[2] - o,
                bi(e) > 1e-4 && (Si(e, e),
                Ai(t.c, e, a))
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
            let i, r = e * this.h.c(), s = this.h.f();
            i = s < 1 ? s > -1 ? Math.trunc(32767 * s + .5) : -32767 : 32767,
            t.g = i;
            let n = this.g(i);
            n < .001 && (n = .001),
            t.f = function(t, e) {
                let i = Math.abs(t)
                  , r = Math.abs(e);
                return Number((i - Math.floor(i / r) * r).toPrecision(8)) * Math.sign(t)
            }(r, n),
            t.a = 65535 & this.h.b();
            let a = this.e.b - this.e.j
              , o = this.e.j + a * this.h.c()
              , h = this.e.i * this.h.f()
              , l = this.e.d * this.h.f()
              , u = Math.cos(h)
              , c = _i(u * Math.cos(l), u * Math.sin(l), Math.sin(h));
            Ai(t.e, c, o);
            let f = this.b()
              , d = this.e.c
              , g = _i(.5, .5, .5);
            0 == d ? this.ba ? mi(g, 0, 0, 1) : mi(g, u * Math.cos(l), u * Math.sin(l), Math.sin(h)) : (mi(g, 0, 0, d),
            xi(g, t.e, g),
            bi(g) > 1e-4 && Si(g, g)),
            Ai(t.c, g, f)
        }
    }
    ;
    const un = class {
        constructor() {
            this.e = gi(),
            this.f = 0,
            this.c = gi(),
            this.g = 0,
            this.a = 2147483647 * Math.random() >> 0,
            this.d = [ws(), ws()],
            this.b = [ws(), ws()]
        }
    }
    ;
    const cn = class {
        constructor(t, e, i, r, s, n) {
            this.d = t,
            this.c = e,
            this.b = i,
            this.f = r,
            this.a = s,
            this.e = n
        }
    }
    ;
    const fn = class {
        constructor(t, e, i) {
            this.b = t,
            this.c = e,
            this.a = i
        }
    }
    ;
    let dn = new Array(128);
    for (let t = 0; t < 128; t++)
        dn[t] = Math.random();
    const gn = Ni(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      , bn = 1e3;
    class _n {
    }
    class pn {
        constructor() {
            this.a = gi(),
            this.b = 0,
            this.c = {
                f: ws(),
                d: gi(),
                c: 0,
                e: 0,
                b: 1,
                a: 0
            }
        }
    }
    function mn(t) {
        return Er((t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t >> 0 & 255) / 255, (t >> 24 & 255) / 255)
    }
    const vn = [0, 0, 1, 2, 3, 4];
    const xn = class {
        constructor(t, e) {
            this.Y = t,
            this.l = e,
            this.ag = null,
            this.ad = 0,
            this.m = !0,
            this.av = null,
            this.at = (new Date).getTime(),
            this.r = e,
            this.v = Pi(),
            this.Z = Pi(),
            this.ak = Pi(),
            this.e = Pi(),
            this.B = Ar(),
            this.q = Cs(),
            this.an = gi(),
            this.d = 1,
            this.ai = gi(),
            this.h = 0,
            this.ac = gi(),
            this.aq = gi(),
            this.o = [],
            this.ae = gi(),
            this.R = 0,
            this.D = 0,
            this.k = 0,
            this.ap = 0,
            this.O = gi(),
            this.aa = gi(),
            this.g = 0,
            this.H = 0,
            this.n = 0,
            this.x = 0,
            this.A = 0,
            this.L = 0,
            this.N = 0,
            this.E = [],
            this.M = [];
            for (let t = 0; t < bn; t++)
                this.M.push(4 * t + 0),
                this.M.push(4 * t + 1),
                this.M.push(4 * t + 2),
                this.M.push(4 * t + 3),
                this.M.push(4 * t + 2),
                this.M.push(4 * t + 1);
            switch (this.X = new nn(2147483647 * Math.random() >> 0),
            this.r.r) {
            case 1:
                this.p = new hn(this.X,e);
                break;
            case 2:
                this.p = new ln(this.X,e,0 != (256 & this.r.t));
                break;
            default:
                this.p = null,
                WH.debug("Found unimplemented generator ", this.r.r)
            }
            const i = this.r.R - this.r.v;
            0 != i ? (this.D = (this.r.D - this.r.k) / i,
            this.k = this.r.k - this.r.v * this.D) : (this.D = 0,
            this.k = 0);
            let r = this.r.G;
            r <= 0 && (r = 1);
            let s = this.r.aa;
            s <= 0 && (s = 1),
            this.H = r * s - 1,
            this.n = 0;
            let n = r
              , a = -1;
            do {
                ++a,
                n >>= 1
            } while (n);
            if (this.x = a,
            this.A = r - 1,
            this.n = 0,
            (32768 & this.r.t) > 0) {
                let t = (this.H + 1) * this.X.b();
                this.n = t / 4294967296 | 0
            }
            this.L = 1 / r,
            this.N = 1 / s;
            let o = !1;
            (269484032 & this.r.t) > 0 ? (o = 0 != (1 & this.r.t >> 28),
            this.R = o ? 2 : 3) : this.R = 0;
            let h = !1
              , l = !1;
            (268435456 & this.r.t) > 0 ? l = (1073741824 & this.r.t) > 0 : 0 == (1048576 & this.r.t) && (h = 0 == (1 & this.r.t)),
            2 == this.R || 4 == this.R && o ? this.C = l ? 3 : 2 : 3 == this.R ? this.C = 5 : this.C = h ? 1 : 0,
            this.U = e.L > 1,
            this.c = this.Y.aM.l(224e3),
            this.i = this.Y.aM.d(8e3),
            this.P = this.Y.aM.j(this.c, this.i)
        }
        z() {
            var t = this;
            t.r.c = null,
            t.r.O = null,
            t.r.d = null,
            t.r.f = t.r.f.d(),
            t.r.z = t.r.z.d(),
            t.r.e = t.r.e.d(),
            t.r.J = t.r.J.d(),
            t.r.T = t.r.T.d(),
            t.r.S = t.r.S.d(),
            t.r.N = t.r.N.d(),
            t.r.K = t.r.K.d(),
            t.r.M = t.r.M.d(),
            t.r.w = t.r.w.d(),
            t.r.b = t.r.b.d(),
            t.r.E = t.r.E.g(),
            t.r.Z = t.r.Z.g(),
            t.r.i = t.r.i.g(),
            t.r.Y = t.r.Y.g(),
            t.r.u = t.r.u.g(),
            t.o = null
        }
        u(t) {
            const e = this.l;
            e.n >= 11 && e.n <= 13 && t && (this.V = [Ar(), Ar(), Ar()],
            Mr(this.V[0], mn(t.Start[e.n - 11])),
            Mr(this.V[1], mn(t.Mid[e.n - 11])),
            Mr(this.V[2], mn(t.End[e.n - 11])))
        }
        w(t) {
            this.ag = t
        }
        G() {
            if (this.av)
                return;
            this.Y.U.context;
            if (!this.af)
                if (this.af = [null, null, null],
                0 != (268435456 & this.r.t))
                    for (let t = 0; t < this.r.y.length; t++) {
                        const e = this.r.y[t];
                        e > -1 && e < this.Y.e.length && (this.af[t] = this.Y.e[e])
                    }
                else
                    this.r.l > -1 && this.r.l < this.Y.e.length && (this.af[0] = this.Y.e[this.r.l]);
            let t = !0;
            for (let e of this.af)
                t = t && (!e || e.b && e.b.f);
            if (!t)
                return;
            const e = this.Y.aM;
            let i = this.r.L;
            4 == i && (i = 3);
            let r = {};
            r.uViewMatrix = this.Y.U.viewMatrix,
            r.uProjMatrix = this.Y.U.projMatrix,
            r.uBlendMode = this.r.L,
            r.uPixelShader = vn[this.C],
            r.colorMult = this.ag ? this.ag.a : 1,
            r.alphaMult = this.ag ? this.ag.c : 1;
            let s = [this.af[0] && this.af[0].b && this.af[0].b.f, this.af[1] && this.af[1].b && this.af[1].b.f, this.af[2] && this.af[2].b && this.af[2].b.f];
            r.uTexture = this.af[0].b.h,
            r.uTexture2 = s[1] ? this.af[1].b.h : null,
            r.uTexture3 = s[2] ? this.af[2].b.h : null,
            r.uHasTexture = s[0] ? 1 : 0,
            r.uHasTexture2 = s[1] ? 1 : 0,
            r.uHasTexture3 = s[2] ? 1 : 0;
            let n = -1;
            1 == i ? n = .501960814 : i > 1 && (n = 1 / 255),
            r.uAlphaTreshold = n;
            const a = e.h(this.Y.W, new cn(!1,!this.Y.ab,i,!0,!1,15), new cr(this.af.map((t => t && t.b)),r));
            this.av = e.e(new fn(this.P,0,0), a, 0, this.r.U)
        }
        S(t, e) {
            if (!this.p)
                return;
            let i = Pi()
              , r = this.p.k()
              , s = !0;
            this.r.b.a(t.d.d) && (s = this.r.b.b(t, this.Y.aq) > 0),
            this.aj = s;
            const n = _i(0, 0, 0);
            s && (r.f = this.r.f.b(t, this.Y.aq, 0),
            r.a = this.r.z.b(t, this.Y.aq, 0),
            r.i = this.r.e.b(t, this.Y.aq, 0),
            r.d = this.r.J.b(t, this.Y.aq, 0),
            this.r.T.b(t, this.Y.aq, n, r.e),
            r.g = this.r.S.b(t, this.Y.aq, 0),
            r.h = this.r.N.b(t, this.Y.aq, 0),
            r.b = this.r.M.b(t, this.Y.aq, 0),
            r.j = this.r.K.b(t, this.Y.aq, 0),
            this.ag ? r.c = this.ag.b : r.c = this.r.w.b(t, this.Y.aq, 0)),
            ji(i, i, this.Y.Q),
            ji(i, i, this.Y.af[this.r.s].k);
            let a = Pi();
            var o, h;
            o = a,
            h = _i(this.r.c[0], this.r.c[1], this.r.c[2]),
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
            ji(i, i, a),
            ji(i, i, gn);
            let l = Pi()
              , u = gi();
            Hi(l, this.Y.U.viewMatrix),
            Zi(u, l),
            this.s(e, i, u, null, this.Y.U.viewMatrix),
            this.W(this.Y.U.viewMatrix),
            this.c.a(new Float32Array(this.E)),
            this.i.a(new Uint16Array(this.M)),
            this.av && (this.av.e = 6 * this.ad >> 0,
            this.av.h = 0)
        }
        I(t) {
            if (this.o.length <= 0)
                return;
            if (this.av || this.G(),
            !this.av)
                return;
            if (!t && this.av.b.b() > Qr.GxBlend_AlphaKey)
                return;
            this.Y.aM.f().b(this.av)
        }
        T(t, e) {
            if (0 == (16 & this.r.t))
                for (let i = 0; i < this.o.length; i++) {
                    const r = this.o[i];
                    Di(r.e, r.e, t),
                    Ui(r.c, r.c, e)
                }
        }
        s(t, e, i, r, s) {
            if (null == this.p)
                return;
            if (this.Y.as)
                return;
            Zi(this.ai, this.v);
            let n = Ar();
            Zi(n, e),
            n[3] = 1,
            Ur(n, n, s),
            this.h = n[2];
            let a = gi();
            if (Zi(a, s),
            this.ah(e, a, r),
            t > 0) {
                let e = gi();
                if (Zi(e, this.v),
                16384 & this.r.t) {
                    xi(this.aq, e, this.ai);
                    let i = this.D * (bi(this.aq) / t) + this.k;
                    i >= 0 && (i = Math.min(i, 1)),
                    Ai(this.ac, this.aq, i)
                }
                if (64 & this.r.t) {
                    this.ap += t;
                    let i = .03;
                    if (this.ap > i)
                        if (this.ap = 0,
                        0 == this.o.length) {
                            let t = i / this.ap
                              , r = gi();
                            xi(r, e, this.ai);
                            let s = t * this.r.j;
                            Ti(this.O, r, _i(s, s, s))
                        } else
                            mi(this.O, 0, 0, 0)
                }
                this.ao(t)
            }
        }
        ah(t, e, i) {
            if (pi(this.aa, e),
            null == i || 16 & this.r.t)
                zi(this.v, t);
            else {
                let e = Pi();
                Hi(e, i),
                ji(this.v, e, t)
            }
            let r = gi();
            Ki(r, t),
            this.d = r[0]
        }
        ao(t) {
            if ((t = Math.max(t, 0)) < .1)
                pi(this.ac, this.aq);
            else {
                let e = Math.floor(t / .1);
                t = -.1 * e + t;
                let i = Math.min(Math.floor(this.p.k().g / .1), e)
                  , r = i + 1
                  , s = 1;
                s = r < 0 ? (1 & r | r >> 1) + (1 & r | r >> 1) : r,
                Ai(this.ac, this.aq, 1 / s);
                for (let t = 0; t < i; t++)
                    this.j(.1)
            }
            this.j(t)
        }
        j(t) {
            let e = new _n;
            if (t < 0)
                return;
            this.r.t,
            this.ar(e, t),
            this.am(t);
            let i = 0;
            for (; i < this.o.length; ) {
                let r = this.o[i];
                r.f = r.f + t,
                r.f > Math.max(this.p.g(r.a), .001) ? (this.K(i),
                i--) : this.F(r, t, e) || (this.K(i),
                i--),
                i++
            }
        }
        ar(t, e) {
            t.b = gi(),
            t.a = gi(),
            t.c = gi(),
            t.d = 0;
            let i = _i(e, e, e)
              , r = e * e * .5
              , s = _i(r, r, r);
            Ti(t.b, this.r.B, i);
            let n = gi();
            this.p.c(n),
            Ti(t.a, n, i),
            Ti(t.c, n, s),
            t.d = this.r.H * e
        }
        am(t) {
            if (!this.aj && this.m)
                return;
            let e = this.p.f();
            for (this.g = this.g + t * e; this.g > 1; )
                this.t(t),
                this.g -= 1
        }
        t(t) {
            let e = this.y();
            if (this.p.j(e, t),
            !(16 & this.r.t)) {
                let t = Er(e.e[0], e.e[1], e.e[2], 1)
                  , i = Er(e.c[0], e.c[1], e.c[2], 0);
                Ur(t, t, this.v),
                Ur(i, i, this.v),
                pi(e.e, t),
                pi(e.c, i),
                8192 & this.r.t && (e.e[2] = 0)
            }
            if (64 & this.r.t) {
                let t = 1 + this.p.k().a * this.X.f()
                  , i = gi();
                Ai(i, this.O, t),
                vi(e.c, e.c, i)
            }
            if (this.R >= 2)
                for (let t = 0; t < 2; t++) {
                    e.d[t][0] = this.X.c(),
                    e.d[t][1] = this.X.c();
                    let n = ws();
                    Ms(n, this.r.A[t], this.X.f()),
                    i = e.b[t],
                    r = n,
                    s = this.r.V[t],
                    i[0] = r[0] + s[0],
                    i[1] = r[1] + s[1]
                }
            var i, r, s
        }
        y() {
            let t = new un;
            return this.o.push(t),
            t
        }
        K(t) {
            this.o.splice(t, 1)
        }
        F(t, e, i) {
            if (this.R >= 2)
                for (let i = 0; i < 2; i++) {
                    let r = t.d[i][0] + e * t.b[i][0];
                    t.d[i][0] = r - Math.floor(r),
                    r = t.d[i][1] + e * t.b[i][1],
                    t.d[i][1] = r - Math.floor(r)
                }
            vi(t.c, t.c, i.b),
            16384 & this.r.t && 2 * e < t.f && vi(t.e, t.e, this.ac);
            let r = _i(e, e, e)
              , s = gi();
            if (Ti(s, t.c, r),
            vi(t.c, t.c, i.a),
            Ai(t.c, t.c, 1 - i.d),
            vi(t.e, t.e, s),
            vi(t.e, t.e, i.c),
            2 == this.r.r && 128 & this.r.t) {
                let e = gi();
                if (pi(e, t.e),
                16 & this.r.t) {
                    if (ki(e, s) > 0)
                        return !1
                } else {
                    let i = gi();
                    if (Zi(i, this.v),
                    xi(e, t.e, i),
                    ki(e, s) > 0)
                        return !1
                }
            }
            return !0
        }
        W(t) {
            if (this.E.length = 0,
            0 == this.o.length && null != this.p)
                return;
            Hi(this.ak, t),
            Ss(Cs(), t),
            this.Q(null, t);
            let e = 0;
            for (let t = 0; t < this.o.length; t++) {
                let i = this.o[t]
                  , r = new pn;
                if (this.f(i, r) && (131072 & this.r.t && (this.ab(i, r),
                e++),
                262144 & this.r.t && (this.J(i, r),
                e++)),
                e >= bn)
                    break
            }
            this.ad = e
        }
        Q(t, e) {
            var i, r, s;
            16 & this.r.t ? ji(this.e, e, this.v) : null != t ? ji(this.e, e, t) : zi(this.e, e),
            Zi(this.B, e),
            4096 & this.r.t && (Ss(this.q, this.e),
            16 & this.r.t && Math.abs(this.d) > 0 && (i = this.q,
            r = this.q,
            s = 1 / this.d,
            i[0] = r[0] * s,
            i[1] = r[1] * s,
            i[2] = r[2] * s,
            i[3] = r[3] * s,
            i[4] = r[4] * s,
            i[5] = r[5] * s,
            i[6] = r[6] * s,
            i[7] = r[7] * s,
            i[8] = r[8] * s),
            mi(this.an, this.q[6], this.q[7], this.q[8]),
            Mi(this.an) <= 2.3841858e-7 ? mi(this.an, 0, 0, 1) : Si(this.an, this.an))
        }
        b(t) {
            let e = 0
              , i = 0;
            if (0 != this.r.P || 0 != this.r.a) {
                let r = new nn(t.a);
                e = 0 == this.r.m ? this.r.P : this.r.P + r.f() * this.r.m,
                i = 0 == this.r.a ? this.r.Q : this.r.Q + r.f() * this.r.a
            } else
                e = this.r.P,
                i = this.r.Q;
            return {
                deltaSpin: i,
                baseSpin: e
            }
        }
        f(t, e) {
            let i = this.r.C
              , r = this.r.q
              , s = r[0]
              , n = r[1] - s
              , a = 0
              , o = t.a
              , h = t.f;
            if ((i < 1 || 0 != n) && (a = 127 & h * this.r.F + o),
            i < dn[a])
                return 0;
            this.al(t, e, o);
            let l = n * dn[a] + s;
            Ms(e.c.f, e.c.f, l),
            32 & this.r.t && Ms(e.c.f, e.c.f, this.d);
            let u = Er(t.e[0], t.e[1], t.e[2], 1);
            return Ur(u, u, this.e),
            pi(e.a, u),
            e.b = 1,
            1
        }
        al(t, e, i) {
            let r = t.f / this.p.i()
              , s = new nn(i);
            Math.min(r, 1) <= 0 ? r = 0 : r >= 1 && (r = 1);
            let n = _i(255, 255, 255)
              , a = ys(1, 1)
              , o = 1
              , h = e.c;
            this.r.E.i(r, n, h.d, this.V),
            this.V || Ai(h.d, h.d, 1 / 255),
            this.r.i.i(r, a, h.f),
            h.b = this.r.Z.i(r, 32767) / 32767,
            this.ag ? h.a = this.ag.d.i(r, 0) / 32767 : h.a = 0;
            let l = 0;
            this.r.Y.h.length > 0 ? (o = 0,
            h.c = this.r.Y.i(r, o),
            h.c = this.H & h.c + this.n) : 65536 & this.r.t ? (l = (this.H + 1) * s.b(),
            h.c = l / 4294967296 | 0) : h.c = 0,
            o = 0,
            h.e = this.r.u.i(r, o),
            h.e = h.e + this.n & this.H;
            let u = 1;
            524288 & this.r.t ? (u = Math.max(1 + s.f() * this.r.x[1], 99999997e-12),
            h.f[0] = Math.max(1 + s.f() * this.r.x[0], 99999997e-12) * h.f[0]) : (u = Math.max(1 + s.f() * this.r.x[0], 99999997e-12),
            h.f[0] = u * h.f[0]),
            h.f[1] = u * h.f[1]
        }
        ab(t, e) {
            let i = ys((e.c.c & this.A) * this.L, (e.c.c >> this.x) * this.N)
              , r = 0
              , s = 0
              , n = this.b(t);
            r = n.baseSpin,
            s = n.deltaSpin;
            let a = 0
              , o = _i(0, 0, 0)
              , h = _i(0, 0, 0)
              , l = !1
              , u = !1;
            if (4 & this.r.t && Mi(t.c) > 2.3841858e-7)
                if (a = 1,
                4096 & this.r.t)
                    l = !0;
                else {
                    let i = Er(-t.c[0], -t.c[1], -t.c[2], 0);
                    Ur(i, i, this.e);
                    let r = gi();
                    pi(r, i);
                    let s = 0
                      , n = Mi(r);
                    s = n <= 2.3841858e-7 ? 0 : 1 / Math.sqrt(n);
                    let a = gi();
                    pi(a, r),
                    Ai(a, a, s),
                    pi(o, a),
                    Ai(o, o, e.c.f[0]),
                    h = _i(a[1], -a[0], 0),
                    Ai(h, h, e.c.f[1]),
                    u = !0,
                    l = !1
                }
            if ((4096 & this.r.t || l) && !u) {
                let i = Cs();
                c = i,
                f = this.q,
                c[0] = f[0],
                c[1] = f[1],
                c[2] = f[2],
                c[3] = f[3],
                c[4] = f[4],
                c[5] = f[5],
                c[6] = f[6],
                c[7] = f[7],
                c[8] = f[8];
                let n = e.c.f[0];
                if (a) {
                    let r = 0
                      , s = _i(-t.c[0], -t.c[1], -t.c[2])
                      , a = Mi(s);
                    r = a <= 2.3841858e-7 ? 0 : 1 / Math.sqrt(a),
                    ks(i, this.q, function(t, e, i, r, s, n, a, o, h) {
                        var l = new di(9);
                        return l[0] = t,
                        l[1] = e,
                        l[2] = i,
                        l[3] = r,
                        l[4] = s,
                        l[5] = n,
                        l[6] = a,
                        l[7] = o,
                        l[8] = h,
                        l
                    }(s[0] * r, s[1] * r, 0, -s[1] * r, s[0] * r, 0, 0, 0, 1)),
                    r > 2.3841858e-7 && (n = e.c.f[0] * (1 / Math.sqrt(Mi(t.c)) / r))
                }
                if (this.R,
                mi(o, i[0], i[1], i[2]),
                Ai(o, o, n),
                mi(h, i[3], i[4], i[5]),
                Ai(h, h, e.c.f[1]),
                s = h[0],
                u = !0,
                0 != this.r.Q || 0 != this.r.a) {
                    let e = r + s * t.f;
                    512 & this.r.t && 1 & t.a && (e = -e);
                    let i = gi();
                    pi(i, this.an),
                    this.R;
                    let n = Cs()
                      , a = Fs();
                    Is(a, i, e),
                    function(t, e) {
                        var i = e[0]
                          , r = e[1]
                          , s = e[2]
                          , n = e[3]
                          , a = i + i
                          , o = r + r
                          , h = s + s
                          , l = i * a
                          , u = r * a
                          , c = r * o
                          , f = s * a
                          , d = s * o
                          , g = s * h
                          , b = n * a
                          , _ = n * o
                          , p = n * h;
                        t[0] = 1 - c - g,
                        t[3] = u - p,
                        t[6] = f + _,
                        t[1] = u + p,
                        t[4] = 1 - l - g,
                        t[7] = d - b,
                        t[2] = f - _,
                        t[5] = d + b,
                        t[8] = 1 - l - c
                    }(n, a),
                    Ui(o, o, n),
                    mi(h, s, h[1], h[2]),
                    Ui(h, h, n)
                }
            }
            var c, f;
            if (!u)
                if (0 != this.r.Q || 0 != this.r.a) {
                    let i = r + s * t.f;
                    512 & this.r.t && 1 & t.a && (i = -i);
                    let n = Math.cos(i)
                      , a = Math.sin(i);
                    mi(o, n, a, 0),
                    Ai(o, o, e.c.f[0]),
                    mi(h, -a, n, 0),
                    Ai(h, h, e.c.f[1]),
                    134217728 & this.r.t && vi(e.a, e.a, _i(h[0], h[1], 0))
                } else
                    mi(o, e.c.f[0], 0, 0),
                    mi(h, 0, e.c.f[1], 0);
            return this.a(o, h, e.a, e.c.d, e.c.b, e.c.a, i[0], i[1], t.d),
            0
        }
        J(t, e) {
            let i = ys((e.c.e & this.A) * this.L, (e.c.e >> this.x) * this.N)
              , r = _i(0, 0, 0)
              , s = _i(0, 0, 0)
              , n = this.r.X;
            1024 & this.r.t && (n = Math.min(t.f, n));
            let a = Ar();
            Ai(a, t.c, -1),
            a[3] = 0,
            Ur(a, a, this.e),
            Ai(a, a, n);
            let o = _i(a[0], a[1], 0);
            if (ki(o, o) > 1e-4) {
                let t = 1 / bi(o);
                Ms(e.c.f, e.c.f, t),
                Es(o, o, e.c.f),
                s = _i(-o[1], o[0], 0),
                Ai(r, a, .5),
                vi(e.a, e.a, r)
            } else
                r = _i(.05 * e.c.f[0], 0, 0),
                s = _i(0, .05 * e.c.f[1], 0);
            return this.a(r, s, e.a, e.c.d, e.c.b, e.c.a, i[0], i[1], t.d),
            1
        }
        a(t, e, i, r, s, n, a, o, h) {
            const l = [-1, -1, 1, 1]
              , u = [1, -1, 1, -1]
              , c = [0, 0, 1, 1]
              , f = [0, 1, 0, 1];
            let d = gi()
              , g = ws()
              , b = ws()
              , _ = ws();
            for (let p = 0; p < 4; p++)
                mi(d, 0, 0, 0),
                Ei(d, d, t, l[p]),
                Ei(d, d, e, u[p]),
                vi(d, d, i),
                As(g, c[p] * this.L + a, f[p] * this.N + o),
                As(b, c[p] * this.r.o[0] + h[0][0], f[p] * this.r.o[0] + h[0][1]),
                As(_, c[p] * this.r.o[1] + h[1][0], f[p] * this.r.o[1] + h[1][1]),
                this.E.push(d[0]),
                this.E.push(d[1]),
                this.E.push(d[2]),
                this.E.push(r[0]),
                this.E.push(r[1]),
                this.E.push(r[2]),
                this.E.push(s),
                this.E.push(g[0]),
                this.E.push(g[1]),
                this.E.push(b[0]),
                this.E.push(b[1]),
                this.E.push(_[0]),
                this.E.push(_[1]),
                this.E.push(n)
        }
    }
    ;
    class Tn {
        constructor() {
            this.a = gi(),
            this.b = Ar(),
            this.c = ws()
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
            this.l = t,
            this.I = e,
            this.b = gi(),
            this.L = gi(),
            this.e = new wn,
            this.i = gi(),
            this.v = gi(),
            this.al = gi(),
            this.aj = gi(),
            this.V = gi(),
            this.Y = gi(),
            this.O = gi(),
            this.f = gi(),
            this.U = gi(),
            this.av = gi(),
            this.p = gi(),
            this.a = gi(),
            this.y = gi(),
            this.N = t.U.context,
            this.r = new Array(e.r.length),
            this.d = new Array(e.r.length);
            for (let i = 0; i < e.r.length; i++)
                this.d[i] = t.ar.o[e.r[i]];
            let i = Er(255, 255, 255, 255)
              , r = new wn;
            r.c = 0,
            r.a = 0,
            r.d = 1,
            r.b = 1,
            this.q(e.q, e.c, i, r, e.l, e.m),
            this.ae(e.b),
            this.H(!1)
        }
        H(t) {
            this.h = t,
            this.h || (this.X = !1)
        }
        ae(t) {
            this.o = t
        }
        s() {
            return this.W == this.ao
        }
        u(t) {
            this.ab = t
        }
        ar(t) {
            this.aa = t
        }
        T(t) {
            this.ai[3] = Math.max(t, 0)
        }
        x() {
            let t = gi();
            Oi(t, this.b, this.y);
            let e = Mi(t);
            Ai(t, this.i, this.ab),
            xi(this.O, this.b, t),
            Ai(t, this.v, this.ab),
            xi(this.f, this.y, t),
            Ai(t, this.i, this.aa),
            vi(this.U, this.b, t),
            Ai(t, this.v, this.aa),
            vi(this.av, this.y, t),
            Ai(this.V, this.al, e),
            Ai(this.Y, this.aj, e)
        }
        m(t, e, i) {
            let r;
            if (this.G && this.h) {
                r = t;
                let i = gi();
                Zi(i, r),
                vi(i, i, e),
                pi(this.L, e),
                this.X ? (pi(this.b, this.y),
                pi(this.al, this.aj),
                pi(this.i, this.v)) : (pi(this.b, i),
                this.al = An(r, 2),
                this.i = An(r, 1),
                this.ah = 0,
                this.X = !0),
                this.y = i,
                this.aj = An(r, 2),
                this.v = An(r, 1)
            }
        }
        D(t) {
            var e = Cs();
            Ss(e, t),
            this.al = Ui(this.al, this.al, e),
            this.i = Ui(this.i, this.i, e),
            this.aj = Ui(this.aj, this.aj, e),
            this.v = Ui(this.v, this.v, e),
            this.b = Di(this.b, this.b, t),
            this.y = Di(this.y, this.y, t);
            for (var i = 0; i < this.c.length; i++)
                Di(this.c[i].a, this.c[i].a, t)
        }
        Z(t, e, i) {
            this.ai[2] = i,
            this.ai[1] = e,
            this.ai[0] = t
        }
        at(t) {
            if (this.R != t) {
                this.R = t;
                let e = t % this.ak
                  , i = e;
                0 != (2147483648 & e) && (i = (1 & e | e >> 1) + (1 & e | e >> 1));
                let r = i * this.Q + this.S.a;
                this.e.a = r;
                let s = t / this.ak
                  , n = s;
                0 != (2147483648 & s) && (s = 1 & s | s >> 1,
                n = s + s,
                r = this.e.a);
                let a = n * this.af + this.S.c;
                this.e.c = a,
                this.e.b = r + this.Q,
                this.e.d = a + this.af
            }
        }
        z(t, e, i) {
            let r, s = this.c[2 * this.ao], n = this.c[2 * this.ao + 1], a = gi();
            Ai(a, this.Y, 1 - e),
            xi(a, this.f, a),
            Ai(s.a, a, e),
            Ai(a, this.V, e),
            vi(a, this.O, a),
            Ai(a, a, 1 - e),
            vi(s.a, s.a, a),
            Ai(a, this.Y, 1 - e),
            xi(a, this.av, a),
            Ai(n.a, a, e),
            Ai(a, this.V, e),
            vi(a, this.U, a),
            Ai(a, a, 1 - e),
            vi(n.a, n.a, a),
            this.J[this.ao] = t,
            r = i,
            this.ao = this.ao + r,
            this.ao >= this.J.length && (this.ao -= this.J.length)
        }
        C(t, e) {
            if (this.l.as)
                return;
            let i = gi()
              , r = 1;
            i = this.I.n.b(t, this.l.aq, i),
            r = this.I.a.b(t, this.l.aq),
            this.Z(i[0], i[1], i[2]),
            this.T(r / 32767);
            let s = this.I.g.b(t, this.l.aq);
            this.ar(s);
            let n = this.I.i.b(t, this.l.aq);
            this.u(n);
            let a = this.I.j.b(t, this.l.aq);
            this.at(a);
            let o = this.I.e.b(t, this.l.aq, 1);
            this.H(0 != o);
            let h = Pi();
            Ji(h, this.l.Q, this.l.af[this.I.o].k),
            qi(h, h, this.I.d);
            let l = gi();
            this.m(h, l, null),
            this.M(e, !1)
        }
        M(t, e) {
            let i, r, s, n, a, o, h, l, u, c, f, d, g, b, _, p, m, v, x, T, w, y, A, E, M, C, S, k, F, I, D, U, R, O, B, P, z, N, G, L, H, j, q, V, X, W, Y, Z;
            for (this.au || this.ac > 0 && (t = 1 / this.ac + 99999997e-12),
            t >= 0 ? this.A <= t && (t = this.A) : t = 0,
            v = this.W; v != this.ao && !(t + this.J[v] <= this.A); v = this.W)
                this.W = this.K(this.W, 1);
            if (!e && this.G && this.h && this.X) {
                D = t * this.ac + this.ah,
                Z = this.ai,
                this.x();
                let e = !1;
                if (O = 0,
                D < 1 ? e = !0 : (Y = this.ah,
                R = 1 / (D - Y),
                m = Math.floor(D - 1),
                O = Math.ceil(Math.max(m, 0))),
                -1 == O || e)
                    ;
                else
                    for (U = 1,
                    v = 1; I = this.ao,
                    N = this.c.length,
                    this.c[2 * I].b = Z,
                    x = 2 * this.ao + 1,
                    G = this.c.length,
                    this.c[x].b = Z,
                    this.z((v - Y) * R * -t, (v - Y) * R, 1),
                    -1 != --O; v = U)
                        U += 1,
                        Y = this.ah;
                T = Math.floor(D),
                this.ah = D - T,
                this.z(0, 1, 0),
                F = this.ao,
                L = this.c.length,
                w = this.c[2 * F],
                y = this.e.a,
                w.c[1] = this.e.c,
                w.c[0] = y,
                A = 2 * this.ao + 1,
                H = this.c.length,
                E = this.c[A],
                M = this.e.a,
                E.c[1] = this.e.d,
                E.c[0] = M,
                k = this.ao,
                j = this.c.length,
                this.c[2 * k].b = Z,
                C = 2 * this.ao + 1,
                q = this.c.length,
                this.c[C].b = Z
            }
            this.p[2] = 34028235e31,
            this.p[1] = 34028235e31,
            this.p[0] = 34028235e31,
            this.a[2] = -34028235e31,
            this.a[1] = -34028235e31,
            this.a[0] = -34028235e31,
            B = this.W;
            for (let e = this.W; e != this.ao; B = e)
                p = 2 * e,
                W = this.c.length,
                S = B,
                z = this.c[2 * e],
                i = p + 1,
                r = this.c[2 * e + 1],
                s = (this.o + this.o) * this.J[S] * t + t * this.o * t,
                z.a[2] = z.a[2] + s,
                r.a[2] = s + r.a[2],
                n = z.a[0],
                a = this.p[0],
                a > z.a[0] && (a = z.a[0],
                this.p[0] = n,
                n = z.a[0]),
                o = z.a[1],
                h = this.p[1],
                h > o && (h = z.a[1],
                this.p[1] = o,
                o = z.a[1]),
                l = z.a[2],
                u = this.p[2],
                u > l && (u = z.a[2],
                this.p[2] = l,
                l = z.a[2]),
                n > this.a[0] && (this.a[0] = n),
                o > this.a[1] && (this.a[1] = o),
                l > this.a[2] && (this.a[2] = l),
                c = r.a[0],
                a > r.a[0] && (this.p[0] = c,
                c = r.a[0]),
                f = r.a[1],
                h > f && (this.p[1] = f,
                f = r.a[1]),
                d = r.a[2],
                u > d && (this.p[2] = d,
                d = r.a[2]),
                c > this.a[0] && (this.a[0] = c),
                f > this.a[1] && (this.a[1] = f),
                d > this.a[2] && (this.a[2] = d),
                V = this.J.length,
                this.J[S] = t + this.J[S],
                g = this.Q,
                X = this.J.length,
                b = g * this.J[S] * this.w + this.e.a,
                z.c[1] = this.e.c,
                z.c[0] = b,
                r.c[1] = this.e.d,
                r.c[0] = b,
                _ = this.J.length,
                P = B + 1,
                e = P - _,
                _ > P && (e = P);
            this.au = !0
        }
        K(t, e) {
            let i = e + t;
            t = i;
            let r = this.J.length;
            return i >= r && (t = i - r),
            t
        }
        q(t, e, i, r, s, n) {
            let a, o, h, l, u, c, f, d;
            f = Math.ceil(t),
            d = Math.max(.25, e),
            a = Math.ceil(d * f),
            o = Math.ceil(Math.max(a + 1 + 1, 0)),
            this.J = new Array(o),
            this.W = 0,
            this.ao = 0,
            this.ah = 0,
            this.X = !1,
            this.c = new Array(2 * o);
            for (let t = 0; t < this.c.length; t++) {
                this.c[t] = new Tn;
                let e = this.c[t];
                e.a[0] = 0,
                e.a[1] = 0,
                e.a[2] = 0,
                e.b = Er(0, 0, 0, 0),
                e.c[0] = 0,
                e.c[1] = 0
            }
            this.n = new Array(4 * o);
            for (let t = 0; t < this.n.length; t++)
                this.n[t] = t % (2 * o);
            this.w = 1 / d,
            h = n,
            0 != (2147483648 & n) && (h = (1 & n | n >> 1) + (1 & n | n >> 1)),
            this.Q = (r.b - r.a) / h,
            l = s,
            0 != (2147483648 & s) && (l = (1 & s | s >> 1) + (1 & s | s >> 1)),
            this.af = (r.d - r.c) / l,
            this.ap = 1 / this.Q,
            this.g = 1 / this.af,
            this.ac = f,
            this.A = d,
            Fr(i, i, 1 / 255),
            this.ai = i,
            this.S = r,
            this.as = s,
            this.ak = n,
            this.R = 0,
            u = 0 * this.Q + this.S.a,
            this.e.a = u,
            c = 0 * this.af + this.S.c,
            this.e.c = c,
            this.e.b = u + this.Q,
            this.e.d = c + this.af,
            this.aa = 10,
            this.ab = 10,
            this.o = 0,
            this.G = !0,
            this.h = !0,
            this.ag = !0,
            this.j = this.l.aM.a(0),
            this.aq = this.l.aM.d(0),
            this.t = this.l.aM.o(this.j, this.aq)
        }
        B() {
            let t = new Array(this.c.length);
            for (let e = 0, i = 0; e < this.c.length; ++e)
                t[i++] = this.c[e].a[0],
                t[i++] = this.c[e].a[1],
                t[i++] = this.c[e].a[2],
                t[i++] = this.c[e].b[0],
                t[i++] = this.c[e].b[1],
                t[i++] = this.c[e].b[2],
                t[i++] = this.c[e].b[3],
                t[i++] = this.c[e].c[0],
                t[i++] = this.c[e].c[1];
            this.s() || (this.j.a(new Float32Array(t)),
            this.aq.a(new Uint16Array(this.n)))
        }
        an(t) {
            const e = this.l.aM;
            var i = this.I.p[t];
            if (i <= -1 || i > this.l.e.length)
                return null;
            let r = this.l.e[i];
            if (!r.b || !r.b.f)
                return null;
            let s = t;
            s >= this.I.r.length && (s = 0);
            let n = this.l.ar.o[this.I.r[s]]
              , a = Object.assign({}, this.l.aE);
            const o = e.m(this.l.W, new cn(!1,!this.l.ab,yn[n.c],!0,!1,15), new fr([r.b],a));
            return e.n(new fn(this.t,0,0), o, 0, 0)
        }
        k(t) {
            if (this.s())
                return;
            const e = this.l.aM.f();
            for (let i = 0; i < this.I.p.length; i++) {
                if (this.r[i] || (this.r[i] = this.an(i)),
                !this.r[i])
                    continue;
                if (!t && this.r[i].b.b() > Qr.GxBlend_AlphaKey)
                    continue;
                let r = this.ao > this.W ? 2 * (this.ao - this.W) + 2 : 2 * (this.J.length + this.ao - this.W) + 2;
                this.r[i].e = r,
                this.r[i].h = 2 * this.W * 2,
                e.b(this.r[i])
            }
        }
    }
    ;
    const Mn = class {
        constructor(t) {
            var e = this;
            e.h = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            e.g = Er(t.getFloat(), t.getFloat(), t.getFloat(), 0),
            e.e = t.getFloat(),
            e.a = t.getFloat(),
            e.i = t.getFloat(),
            e.d = t.getFloat(),
            e.f = [t.getUint8(), t.getUint8(), t.getUint8(), t.getUint8()],
            e.c = [t.getUint8(), t.getUint8(), t.getUint8(), t.getUint8()]
        }
        b() {
            var t = this;
            t.h = null,
            t.g = null,
            t.f = null,
            t.c = null
        }
    }
    ;
    const Cn = class {
        constructor(t) {
            var e = this;
            e.b = t.getUint16(),
            e.c = t.getUint16(),
            e.i = t.getUint16(),
            e.j = t.getUint16(),
            e.k = t.getUint16() + 65536 * e.c,
            e.h = t.getUint16(),
            e.g = t.getUint16(),
            e.f = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            e.a = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            e.d = t.getFloat()
        }
        e() {
            this.f = null,
            this.a = null
        }
    }
    ;
    const Sn = class {
        constructor(t) {
            this.a = t.getUint16(),
            this.c = t.getUint16()
        }
        static b(t) {
            const e = t.u.ar
              , i = t.v;
            e.o && i.l < e.o.length ? t.B = e.o[i.l] : t.B = {
                a: 0,
                c: 0
            },
            t.x = 0 != (1 & t.B.a),
            t.r = 0 == (4 & t.B.a),
            t.k = 0 != (16 & t.B.a)
        }
    }
    ;
    const kn = class {
        constructor(t) {
            this.d = new tn(t,Vs),
            this.c = new tn(t,Xs),
            this.a = new tn(t,Vs)
        }
        b() {
            var t = this;
            t.d && (t.d.d(),
            t.d = null),
            t.c && (t.c.d(),
            t.c = null),
            t.a && (t.a.d(),
            t.a = null)
        }
    }
    ;
    const Fn = class {
        constructor(t) {
            var e = this;
            e.c = t.getInt32(),
            e.d = t.getInt32(),
            e.a = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            e.b = -1
        }
        e() {
            this.a = null
        }
    }
    ;
    const In = class {
        constructor(t) {
            this.g = new tn(t,Vs),
            this.d = new tn(t,Ws)
        }
        e() {
            var t = this;
            t.g && t.g.d(),
            t.d && t.d.d()
        }
        a(t) {
            return !!this.g && this.g.a(t)
        }
        c(t) {
            return !!this.d && this.d.a(t)
        }
        b(t) {
            return this.a(t) || this.c(t)
        }
        f(t, e, i) {
            var r = this;
            i ? i[0] = i[1] = i[2] = i[3] = 1 : i = Er(1, 1, 1, 1);
            let s = _i(1, 1, 1);
            return r.a(t.d.d) && r.g.b(t, e, s, s),
            r.c(t.d.d) && (i[3] = r.d.b(t, e, 32767) / 32767),
            i[0] = s[0],
            i[1] = s[1],
            i[2] = s[2],
            i
        }
    }
    ;
    const Dn = class {
        constructor(t) {
            this.d = new tn(t,Ws)
        }
        c() {
            this.d.d(),
            this.d = null
        }
        a(t) {
            return this.d.a(t)
        }
        b(t, e) {
            var i = 1;
            this.a(t.d.d) && (i = this.d.b(t, e, i) / 32767);
            return i > 1 ? i = 1 : i < 0 && (i = 0),
            i
        }
    }
    ;
    const Un = class {
        constructor(t) {
            var e = this;
            e.b = t.getFloat(),
            e.a = t.getFloat(),
            e.c = t.getFloat(),
            e.d = new Qs(t)
        }
    }
    ;
    const Rn = class {
        constructor(t) {
            this.I = t.getInt32(),
            this.t = t.getUint32(),
            this.c = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            this.s = t.getInt16(),
            this.l = t.getInt16(),
            0 != (268435456 & this.t) && (this.y = [0, 0, 0],
            this.y[0] = 31 & this.l,
            this.y[1] = this.l >> 5 & 31,
            this.y[2] = this.l >> 10 & 31),
            this.L = t.getUint8(),
            this.r = t.getUint8(),
            this.n = t.getUint16(),
            this.U = t.getUint16(),
            this.aa = t.getUint16(),
            this.G = t.getUint16(),
            this.f = new tn(t,Ys),
            this.z = new tn(t,Ys),
            this.e = new tn(t,Ys),
            this.J = new tn(t,Ys),
            this.T = new tn(t,Vs),
            this.S = new tn(t,Ys),
            this.W = t.getFloat(),
            this.N = new tn(t,Ys),
            this.h = t.getFloat(),
            this.K = new tn(t,Ys),
            this.M = new tn(t,Ys),
            this.w = new tn(t,Ys),
            this.E = new Js(t),
            this.Z = new Qs(t),
            this.i = new $s(t),
            this.x = [t.getFloat(), t.getFloat()],
            this.Y = new Qs(t),
            this.u = new Qs(t),
            this.X = t.getFloat(),
            this.F = t.getFloat(),
            this.C = t.getFloat(),
            this.q = [t.getFloat(), t.getFloat()],
            this.j = t.getFloat(),
            this.H = t.getFloat(),
            this.P = t.getFloat(),
            this.m = t.getFloat(),
            this.Q = t.getFloat(),
            this.a = t.getFloat(),
            this.O = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            this.d = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            this.B = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            this.g = t.getFloat(),
            this.v = t.getFloat(),
            this.k = t.getFloat(),
            this.R = t.getFloat(),
            this.D = t.getFloat();
            var e = t.getInt32();
            this.p = new Array(e);
            for (var i = 0; i < e; i++)
                this.p[i] = _i(t.getFloat(), t.getFloat(), t.getFloat());
            this.b = new tn(t,Zs),
            this.o = ys(t.getFloat(), t.getFloat()),
            this.V = [ys(t.getFloat(), t.getFloat()), ys(t.getFloat(), t.getFloat())],
            this.A = [ys(t.getFloat(), t.getFloat()), ys(t.getFloat(), t.getFloat())]
        }
    }
    ;
    class On {
        constructor(t) {
            this.h = t.getInt32(),
            this.e = t.getUint32(),
            this.d = t.getInt16(),
            this.c = t.getUint16(),
            this.b = t.getUint32(),
            this.i = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            this.g = new tn(t,Vs),
            this.f = new tn(t,Xs),
            this.a = new tn(t,Vs)
        }
    }
    const Bn = class {
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
    function Pn(t) {
        let e = t.length;
        for (; --e >= 0; )
            t[e] = 0
    }
    const zn = 256
      , Nn = 286
      , Gn = 30
      , Ln = 15
      , Hn = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
      , jn = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
      , qn = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
      , Vn = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
      , Xn = new Array(576);
    Pn(Xn);
    const Wn = new Array(60);
    Pn(Wn);
    const Yn = new Array(512);
    Pn(Yn);
    const Zn = new Array(256);
    Pn(Zn);
    const Kn = new Array(29);
    Pn(Kn);
    const $n = new Array(Gn);
    function Jn(t, e, i, r, s) {
        this.static_tree = t,
        this.extra_bits = e,
        this.extra_base = i,
        this.elems = r,
        this.max_length = s,
        this.has_stree = t && t.length
    }
    let Qn, ta, ea;
    function ia(t, e) {
        this.dyn_tree = t,
        this.max_code = 0,
        this.stat_desc = e
    }
    Pn($n);
    const ra = t => t < 256 ? Yn[t] : Yn[256 + (t >>> 7)]
      , sa = (t, e) => {
        t.pending_buf[t.pending++] = 255 & e,
        t.pending_buf[t.pending++] = e >>> 8 & 255
    }
      , na = (t, e, i) => {
        t.bi_valid > 16 - i ? (t.bi_buf |= e << t.bi_valid & 65535,
        sa(t, t.bi_buf),
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
        const r = new Array(16);
        let s, n, a = 0;
        for (s = 1; s <= Ln; s++)
            a = a + i[s - 1] << 1,
            r[s] = a;
        for (n = 0; n <= e; n++) {
            let e = t[2 * n + 1];
            0 !== e && (t[2 * n] = oa(r[e]++, e))
        }
    }
      , la = t => {
        let e;
        for (e = 0; e < Nn; e++)
            t.dyn_ltree[2 * e] = 0;
        for (e = 0; e < Gn; e++)
            t.dyn_dtree[2 * e] = 0;
        for (e = 0; e < 19; e++)
            t.bl_tree[2 * e] = 0;
        t.dyn_ltree[512] = 1,
        t.opt_len = t.static_len = 0,
        t.sym_next = t.matches = 0
    }
      , ua = t => {
        t.bi_valid > 8 ? sa(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
        t.bi_buf = 0,
        t.bi_valid = 0
    }
      , ca = (t, e, i, r) => {
        const s = 2 * e
          , n = 2 * i;
        return t[s] < t[n] || t[s] === t[n] && r[e] <= r[i]
    }
      , fa = (t, e, i) => {
        const r = t.heap[i];
        let s = i << 1;
        for (; s <= t.heap_len && (s < t.heap_len && ca(e, t.heap[s + 1], t.heap[s], t.depth) && s++,
        !ca(e, r, t.heap[s], t.depth)); )
            t.heap[i] = t.heap[s],
            i = s,
            s <<= 1;
        t.heap[i] = r
    }
      , da = (t, e, i) => {
        let r, s, n, a, o = 0;
        if (0 !== t.sym_next)
            do {
                r = 255 & t.pending_buf[t.sym_buf + o++],
                r += (255 & t.pending_buf[t.sym_buf + o++]) << 8,
                s = t.pending_buf[t.sym_buf + o++],
                0 === r ? aa(t, s, e) : (n = Zn[s],
                aa(t, n + zn + 1, e),
                a = Hn[n],
                0 !== a && (s -= Kn[n],
                na(t, s, a)),
                r--,
                n = ra(r),
                aa(t, n, i),
                a = jn[n],
                0 !== a && (r -= $n[n],
                na(t, r, a)))
            } while (o < t.sym_next);
        aa(t, 256, e)
    }
      , ga = (t, e) => {
        const i = e.dyn_tree
          , r = e.stat_desc.static_tree
          , s = e.stat_desc.has_stree
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
            s && (t.static_len -= r[2 * h + 1]);
        for (e.max_code = l,
        a = t.heap_len >> 1; a >= 1; a--)
            fa(t, i, a);
        h = n;
        do {
            a = t.heap[1],
            t.heap[1] = t.heap[t.heap_len--],
            fa(t, i, 1),
            o = t.heap[1],
            t.heap[--t.heap_max] = a,
            t.heap[--t.heap_max] = o,
            i[2 * h] = i[2 * a] + i[2 * o],
            t.depth[h] = (t.depth[a] >= t.depth[o] ? t.depth[a] : t.depth[o]) + 1,
            i[2 * a + 1] = i[2 * o + 1] = h,
            t.heap[1] = h++,
            fa(t, i, 1)
        } while (t.heap_len >= 2);
        t.heap[--t.heap_max] = t.heap[1],
        ( (t, e) => {
            const i = e.dyn_tree
              , r = e.max_code
              , s = e.stat_desc.static_tree
              , n = e.stat_desc.has_stree
              , a = e.stat_desc.extra_bits
              , o = e.stat_desc.extra_base
              , h = e.stat_desc.max_length;
            let l, u, c, f, d, g, b = 0;
            for (f = 0; f <= Ln; f++)
                t.bl_count[f] = 0;
            for (i[2 * t.heap[t.heap_max] + 1] = 0,
            l = t.heap_max + 1; l < 573; l++)
                u = t.heap[l],
                f = i[2 * i[2 * u + 1] + 1] + 1,
                f > h && (f = h,
                b++),
                i[2 * u + 1] = f,
                u > r || (t.bl_count[f]++,
                d = 0,
                u >= o && (d = a[u - o]),
                g = i[2 * u],
                t.opt_len += g * (f + d),
                n && (t.static_len += g * (s[2 * u + 1] + d)));
            if (0 !== b) {
                do {
                    for (f = h - 1; 0 === t.bl_count[f]; )
                        f--;
                    t.bl_count[f]--,
                    t.bl_count[f + 1] += 2,
                    t.bl_count[h]--,
                    b -= 2
                } while (b > 0);
                for (f = h; 0 !== f; f--)
                    for (u = t.bl_count[f]; 0 !== u; )
                        c = t.heap[--l],
                        c > r || (i[2 * c + 1] !== f && (t.opt_len += (f - i[2 * c + 1]) * i[2 * c],
                        i[2 * c + 1] = f),
                        u--)
            }
        }
        )(t, e),
        ha(i, l, t.bl_count)
    }
      , ba = (t, e, i) => {
        let r, s, n = -1, a = e[1], o = 0, h = 7, l = 4;
        for (0 === a && (h = 138,
        l = 3),
        e[2 * (i + 1) + 1] = 65535,
        r = 0; r <= i; r++)
            s = a,
            a = e[2 * (r + 1) + 1],
            ++o < h && s === a || (o < l ? t.bl_tree[2 * s] += o : 0 !== s ? (s !== n && t.bl_tree[2 * s]++,
            t.bl_tree[32]++) : o <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++,
            o = 0,
            n = s,
            0 === a ? (h = 138,
            l = 3) : s === a ? (h = 6,
            l = 3) : (h = 7,
            l = 4))
    }
      , _a = (t, e, i) => {
        let r, s, n = -1, a = e[1], o = 0, h = 7, l = 4;
        for (0 === a && (h = 138,
        l = 3),
        r = 0; r <= i; r++)
            if (s = a,
            a = e[2 * (r + 1) + 1],
            !(++o < h && s === a)) {
                if (o < l)
                    do {
                        aa(t, s, t.bl_tree)
                    } while (0 != --o);
                else
                    0 !== s ? (s !== n && (aa(t, s, t.bl_tree),
                    o--),
                    aa(t, 16, t.bl_tree),
                    na(t, o - 3, 2)) : o <= 10 ? (aa(t, 17, t.bl_tree),
                    na(t, o - 3, 3)) : (aa(t, 18, t.bl_tree),
                    na(t, o - 11, 7));
                o = 0,
                n = s,
                0 === a ? (h = 138,
                l = 3) : s === a ? (h = 6,
                l = 3) : (h = 7,
                l = 4)
            }
    }
    ;
    let pa = !1;
    const ma = (t, e, i, r) => {
        na(t, 0 + (r ? 1 : 0), 3),
        ua(t),
        sa(t, i),
        sa(t, ~i),
        i && t.pending_buf.set(t.window.subarray(e, e + i), t.pending),
        t.pending += i
    }
    ;
    var va = t => {
        pa || (( () => {
            let t, e, i, r, s;
            const n = new Array(16);
            for (i = 0,
            r = 0; r < 28; r++)
                for (Kn[r] = i,
                t = 0; t < 1 << Hn[r]; t++)
                    Zn[i++] = r;
            for (Zn[i - 1] = r,
            s = 0,
            r = 0; r < 16; r++)
                for ($n[r] = s,
                t = 0; t < 1 << jn[r]; t++)
                    Yn[s++] = r;
            for (s >>= 7; r < Gn; r++)
                for ($n[r] = s << 7,
                t = 0; t < 1 << jn[r] - 7; t++)
                    Yn[256 + s++] = r;
            for (e = 0; e <= Ln; e++)
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
            t = 0; t < Gn; t++)
                Wn[2 * t + 1] = 5,
                Wn[2 * t] = oa(t, 5);
            Qn = new Jn(Xn,Hn,257,Nn,Ln),
            ta = new Jn(Wn,jn,0,Gn,Ln),
            ea = new Jn(new Array(0),qn,0,19,7)
        }
        )(),
        pa = !0),
        t.l_desc = new ia(t.dyn_ltree,Qn),
        t.d_desc = new ia(t.dyn_dtree,ta),
        t.bl_desc = new ia(t.bl_tree,ea),
        t.bi_buf = 0,
        t.bi_valid = 0,
        la(t)
    }
      , xa = (t, e, i, r) => {
        let s, n, a = 0;
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
            for (ba(t, t.dyn_ltree, t.l_desc.max_code),
            ba(t, t.dyn_dtree, t.d_desc.max_code),
            ga(t, t.bl_desc),
            e = 18; e >= 3 && 0 === t.bl_tree[2 * Vn[e] + 1]; e--)
                ;
            return t.opt_len += 3 * (e + 1) + 5 + 5 + 4,
            e
        }
        )(t),
        s = t.opt_len + 3 + 7 >>> 3,
        n = t.static_len + 3 + 7 >>> 3,
        n <= s && (s = n)) : s = n = i + 5,
        i + 4 <= s && -1 !== e ? ma(t, e, i, r) : 4 === t.strategy || n === s ? (na(t, 2 + (r ? 1 : 0), 3),
        da(t, Xn, Wn)) : (na(t, 4 + (r ? 1 : 0), 3),
        ( (t, e, i, r) => {
            let s;
            for (na(t, e - 257, 5),
            na(t, i - 1, 5),
            na(t, r - 4, 4),
            s = 0; s < r; s++)
                na(t, t.bl_tree[2 * Vn[s] + 1], 3);
            _a(t, t.dyn_ltree, e - 1),
            _a(t, t.dyn_dtree, i - 1)
        }
        )(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1),
        da(t, t.dyn_ltree, t.dyn_dtree)),
        la(t),
        r && ua(t)
    }
      , Ta = (t, e, i) => (t.pending_buf[t.sym_buf + t.sym_next++] = e,
    t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8,
    t.pending_buf[t.sym_buf + t.sym_next++] = i,
    0 === e ? t.dyn_ltree[2 * i]++ : (t.matches++,
    e--,
    t.dyn_ltree[2 * (Zn[i] + zn + 1)]++,
    t.dyn_dtree[2 * ra(e)]++),
    t.sym_next === t.sym_end)
      , wa = {
        _tr_init: va,
        _tr_stored_block: ma,
        _tr_flush_block: xa,
        _tr_tally: Ta,
        _tr_align: t => {
            na(t, 2, 3),
            aa(t, 256, Xn),
            (t => {
                16 === t.bi_valid ? (sa(t, t.bi_buf),
                t.bi_buf = 0,
                t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf,
                t.bi_buf >>= 8,
                t.bi_valid -= 8)
            }
            )(t)
        }
    };
    var ya = (t, e, i, r) => {
        let s = 65535 & t | 0
          , n = t >>> 16 & 65535 | 0
          , a = 0;
        for (; 0 !== i; ) {
            a = i > 2e3 ? 2e3 : i,
            i -= a;
            do {
                s = s + e[r++] | 0,
                n = n + s | 0
            } while (--a);
            s %= 65521,
            n %= 65521
        }
        return s | n << 16 | 0
    }
    ;
    const Aa = new Uint32Array(( () => {
        let t, e = [];
        for (var i = 0; i < 256; i++) {
            t = i;
            for (var r = 0; r < 8; r++)
                t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
            e[i] = t
        }
        return e
    }
    )());
    var Ea = (t, e, i, r) => {
        const s = Aa
          , n = r + i;
        t ^= -1;
        for (let i = r; i < n; i++)
            t = t >>> 8 ^ s[255 & (t ^ e[i])];
        return -1 ^ t
    }
      , Ma = {
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
      , Ca = {
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
    const {_tr_init: Sa, _tr_stored_block: ka, _tr_flush_block: Fa, _tr_tally: Ia, _tr_align: Da} = wa
      , {Z_NO_FLUSH: Ua, Z_PARTIAL_FLUSH: Ra, Z_FULL_FLUSH: Oa, Z_FINISH: Ba, Z_BLOCK: Pa, Z_OK: za, Z_STREAM_END: Na, Z_STREAM_ERROR: Ga, Z_DATA_ERROR: La, Z_BUF_ERROR: Ha, Z_DEFAULT_COMPRESSION: ja, Z_FILTERED: qa, Z_HUFFMAN_ONLY: Va, Z_RLE: Xa, Z_FIXED: Wa, Z_DEFAULT_STRATEGY: Ya, Z_UNKNOWN: Za, Z_DEFLATED: Ka} = Ca
      , $a = 258
      , Ja = 262
      , Qa = 42
      , to = 113
      , eo = 666
      , io = (t, e) => (t.msg = Ma[e],
    e)
      , ro = t => 2 * t - (t > 4 ? 9 : 0)
      , so = t => {
        let e = t.length;
        for (; --e >= 0; )
            t[e] = 0
    }
      , no = t => {
        let e, i, r, s = t.w_size;
        e = t.hash_size,
        r = e;
        do {
            i = t.head[--r],
            t.head[r] = i >= s ? i - s : 0
        } while (--e);
        e = s,
        r = e;
        do {
            i = t.prev[--r],
            t.prev[r] = i >= s ? i - s : 0
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
        Fa(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e),
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
      , co = (t, e, i, r) => {
        let s = t.avail_in;
        return s > r && (s = r),
        0 === s ? 0 : (t.avail_in -= s,
        e.set(t.input.subarray(t.next_in, t.next_in + s), i),
        1 === t.state.wrap ? t.adler = ya(t.adler, e, s, i) : 2 === t.state.wrap && (t.adler = Ea(t.adler, e, s, i)),
        t.next_in += s,
        t.total_in += s,
        s)
    }
      , fo = (t, e) => {
        let i, r, s = t.max_chain_length, n = t.strstart, a = t.prev_length, o = t.nice_match;
        const h = t.strstart > t.w_size - Ja ? t.strstart - (t.w_size - Ja) : 0
          , l = t.window
          , u = t.w_mask
          , c = t.prev
          , f = t.strstart + $a;
        let d = l[n + a - 1]
          , g = l[n + a];
        t.prev_length >= t.good_match && (s >>= 2),
        o > t.lookahead && (o = t.lookahead);
        do {
            if (i = e,
            l[i + a] === g && l[i + a - 1] === d && l[i] === l[n] && l[++i] === l[n + 1]) {
                n += 2,
                i++;
                do {} while (l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && l[++n] === l[++i] && n < f);
                if (r = $a - (f - n),
                n = f - $a,
                r > a) {
                    if (t.match_start = e,
                    a = r,
                    r >= o)
                        break;
                    d = l[n + a - 1],
                    g = l[n + a]
                }
            }
        } while ((e = c[e & u]) > h && 0 != --s);
        return a <= t.lookahead ? a : t.lookahead
    }
      , go = t => {
        const e = t.w_size;
        let i, r, s;
        do {
            if (r = t.window_size - t.lookahead - t.strstart,
            t.strstart >= e + (e - Ja) && (t.window.set(t.window.subarray(e, e + e - r), 0),
            t.match_start -= e,
            t.strstart -= e,
            t.block_start -= e,
            t.insert > t.strstart && (t.insert = t.strstart),
            no(t),
            r += e),
            0 === t.strm.avail_in)
                break;
            if (i = co(t.strm, t.window, t.strstart + t.lookahead, r),
            t.lookahead += i,
            t.lookahead + t.insert >= 3)
                for (s = t.strstart - t.insert,
                t.ins_h = t.window[s],
                t.ins_h = ao(t, t.ins_h, t.window[s + 1]); t.insert && (t.ins_h = ao(t, t.ins_h, t.window[s + 3 - 1]),
                t.prev[s & t.w_mask] = t.head[t.ins_h],
                t.head[t.ins_h] = s,
                s++,
                t.insert--,
                !(t.lookahead + t.insert < 3)); )
                    ;
        } while (t.lookahead < Ja && 0 !== t.strm.avail_in)
    }
      , bo = (t, e) => {
        let i, r, s, n = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5, a = 0, o = t.strm.avail_in;
        do {
            if (i = 65535,
            s = t.bi_valid + 42 >> 3,
            t.strm.avail_out < s)
                break;
            if (s = t.strm.avail_out - s,
            r = t.strstart - t.block_start,
            i > r + t.strm.avail_in && (i = r + t.strm.avail_in),
            i > s && (i = s),
            i < n && (0 === i && e !== Ba || e === Ua || i !== r + t.strm.avail_in))
                break;
            a = e === Ba && i === r + t.strm.avail_in ? 1 : 0,
            ka(t, 0, 0, a),
            t.pending_buf[t.pending - 4] = i,
            t.pending_buf[t.pending - 3] = i >> 8,
            t.pending_buf[t.pending - 2] = ~i,
            t.pending_buf[t.pending - 1] = ~i >> 8,
            oo(t.strm),
            r && (r > i && (r = i),
            t.strm.output.set(t.window.subarray(t.block_start, t.block_start + r), t.strm.next_out),
            t.strm.next_out += r,
            t.strm.avail_out -= r,
            t.strm.total_out += r,
            t.block_start += r,
            i -= r),
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
        a ? 4 : e !== Ua && e !== Ba && 0 === t.strm.avail_in && t.strstart === t.block_start ? 2 : (s = t.window_size - t.strstart,
        t.strm.avail_in > s && t.block_start >= t.w_size && (t.block_start -= t.w_size,
        t.strstart -= t.w_size,
        t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0),
        t.matches < 2 && t.matches++,
        s += t.w_size,
        t.insert > t.strstart && (t.insert = t.strstart)),
        s > t.strm.avail_in && (s = t.strm.avail_in),
        s && (co(t.strm, t.window, t.strstart, s),
        t.strstart += s,
        t.insert += s > t.w_size - t.insert ? t.w_size - t.insert : s),
        t.high_water < t.strstart && (t.high_water = t.strstart),
        s = t.bi_valid + 42 >> 3,
        s = t.pending_buf_size - s > 65535 ? 65535 : t.pending_buf_size - s,
        n = s > t.w_size ? t.w_size : s,
        r = t.strstart - t.block_start,
        (r >= n || (r || e === Ba) && e !== Ua && 0 === t.strm.avail_in && r <= s) && (i = r > s ? s : r,
        a = e === Ba && 0 === t.strm.avail_in && i === r ? 1 : 0,
        ka(t, t.block_start, i, a),
        t.block_start += i,
        oo(t.strm)),
        a ? 3 : 1)
    }
      , _o = (t, e) => {
        let i, r;
        for (; ; ) {
            if (t.lookahead < Ja) {
                if (go(t),
                t.lookahead < Ja && e === Ua)
                    return 1;
                if (0 === t.lookahead)
                    break
            }
            if (i = 0,
            t.lookahead >= 3 && (t.ins_h = ao(t, t.ins_h, t.window[t.strstart + 3 - 1]),
            i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
            t.head[t.ins_h] = t.strstart),
            0 !== i && t.strstart - i <= t.w_size - Ja && (t.match_length = fo(t, i)),
            t.match_length >= 3)
                if (r = Ia(t, t.strstart - t.match_start, t.match_length - 3),
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
                r = Ia(t, 0, t.window[t.strstart]),
                t.lookahead--,
                t.strstart++;
            if (r && (ho(t, !1),
            0 === t.strm.avail_out))
                return 1
        }
        return t.insert = t.strstart < 2 ? t.strstart : 2,
        e === Ba ? (ho(t, !0),
        0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (ho(t, !1),
        0 === t.strm.avail_out) ? 1 : 2
    }
      , po = (t, e) => {
        let i, r, s;
        for (; ; ) {
            if (t.lookahead < Ja) {
                if (go(t),
                t.lookahead < Ja && e === Ua)
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
            0 !== i && t.prev_length < t.max_lazy_match && t.strstart - i <= t.w_size - Ja && (t.match_length = fo(t, i),
            t.match_length <= 5 && (t.strategy === qa || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)),
            t.prev_length >= 3 && t.match_length <= t.prev_length) {
                s = t.strstart + t.lookahead - 3,
                r = Ia(t, t.strstart - 1 - t.prev_match, t.prev_length - 3),
                t.lookahead -= t.prev_length - 1,
                t.prev_length -= 2;
                do {
                    ++t.strstart <= s && (t.ins_h = ao(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                    i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                    t.head[t.ins_h] = t.strstart)
                } while (0 != --t.prev_length);
                if (t.match_available = 0,
                t.match_length = 2,
                t.strstart++,
                r && (ho(t, !1),
                0 === t.strm.avail_out))
                    return 1
            } else if (t.match_available) {
                if (r = Ia(t, 0, t.window[t.strstart - 1]),
                r && ho(t, !1),
                t.strstart++,
                t.lookahead--,
                0 === t.strm.avail_out)
                    return 1
            } else
                t.match_available = 1,
                t.strstart++,
                t.lookahead--
        }
        return t.match_available && (r = Ia(t, 0, t.window[t.strstart - 1]),
        t.match_available = 0),
        t.insert = t.strstart < 2 ? t.strstart : 2,
        e === Ba ? (ho(t, !0),
        0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (ho(t, !1),
        0 === t.strm.avail_out) ? 1 : 2
    }
    ;
    function mo(t, e, i, r, s) {
        this.good_length = t,
        this.max_lazy = e,
        this.nice_length = i,
        this.max_chain = r,
        this.func = s
    }
    const vo = [new mo(0,0,0,0,bo), new mo(4,4,8,4,_o), new mo(4,5,16,8,_o), new mo(4,6,32,32,_o), new mo(4,4,16,16,po), new mo(8,16,32,32,po), new mo(8,16,128,128,po), new mo(8,32,128,256,po), new mo(32,128,258,1024,po), new mo(32,258,258,4096,po)];
    function xo() {
        this.strm = null,
        this.status = 0,
        this.pending_buf = null,
        this.pending_buf_size = 0,
        this.pending_out = 0,
        this.pending = 0,
        this.wrap = 0,
        this.gzhead = null,
        this.gzindex = 0,
        this.method = Ka,
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
        so(this.dyn_ltree),
        so(this.dyn_dtree),
        so(this.bl_tree),
        this.l_desc = null,
        this.d_desc = null,
        this.bl_desc = null,
        this.bl_count = new Uint16Array(16),
        this.heap = new Uint16Array(573),
        so(this.heap),
        this.heap_len = 0,
        this.heap_max = 0,
        this.depth = new Uint16Array(573),
        so(this.depth),
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
            return io(t, Ga);
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
        so(i.head),
        i.max_lazy_match = vo[i.level].max_lazy,
        i.good_match = vo[i.level].good_length,
        i.nice_match = vo[i.level].nice_length,
        i.max_chain_length = vo[i.level].max_chain,
        i.strstart = 0,
        i.block_start = 0,
        i.lookahead = 0,
        i.insert = 0,
        i.match_length = i.prev_length = 2,
        i.match_available = 0,
        i.ins_h = 0),
        e
    }
      , Ao = (t, e, i, r, s, n) => {
        if (!t)
            return Ga;
        let a = 1;
        if (e === ja && (e = 6),
        r < 0 ? (a = 0,
        r = -r) : r > 15 && (a = 2,
        r -= 16),
        s < 1 || s > 9 || i !== Ka || r < 8 || r > 15 || e < 0 || e > 9 || n < 0 || n > Wa || 8 === r && 1 !== a)
            return io(t, Ga);
        8 === r && (r = 9);
        const o = new xo;
        return t.state = o,
        o.strm = t,
        o.status = Qa,
        o.wrap = a,
        o.gzhead = null,
        o.w_bits = r,
        o.w_size = 1 << o.w_bits,
        o.w_mask = o.w_size - 1,
        o.hash_bits = s + 7,
        o.hash_size = 1 << o.hash_bits,
        o.hash_mask = o.hash_size - 1,
        o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3),
        o.window = new Uint8Array(2 * o.w_size),
        o.head = new Uint16Array(o.hash_size),
        o.prev = new Uint16Array(o.w_size),
        o.lit_bufsize = 1 << s + 6,
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
        if (To(t) || e > Pa || e < 0)
            return t ? io(t, Ga) : Ga;
        const i = t.state;
        if (!t.output || 0 !== t.avail_in && !t.input || i.status === eo && e !== Ba)
            return io(t, 0 === t.avail_out ? Ha : Ga);
        const r = i.last_flush;
        if (i.last_flush = e,
        0 !== i.pending) {
            if (oo(t),
            0 === t.avail_out)
                return i.last_flush = -1,
                za
        } else if (0 === t.avail_in && ro(e) <= ro(r) && e !== Ba)
            return io(t, Ha);
        if (i.status === eo && 0 !== t.avail_in)
            return io(t, Ha);
        if (i.status === Qa && 0 === i.wrap && (i.status = to),
        i.status === Qa) {
            let e = Ka + (i.w_bits - 8 << 4) << 8
              , r = -1;
            if (r = i.strategy >= Va || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3,
            e |= r << 6,
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
                  , r = (65535 & i.gzhead.extra.length) - i.gzindex;
                for (; i.pending + r > i.pending_buf_size; ) {
                    let s = i.pending_buf_size - i.pending;
                    if (i.pending_buf.set(i.gzhead.extra.subarray(i.gzindex, i.gzindex + s), i.pending),
                    i.pending = i.pending_buf_size,
                    i.gzhead.hcrc && i.pending > e && (t.adler = Ea(t.adler, i.pending_buf, i.pending - e, e)),
                    i.gzindex += s,
                    oo(t),
                    0 !== i.pending)
                        return i.last_flush = -1,
                        za;
                    e = 0,
                    r -= s
                }
                let s = new Uint8Array(i.gzhead.extra);
                i.pending_buf.set(s.subarray(i.gzindex, i.gzindex + r), i.pending),
                i.pending += r,
                i.gzhead.hcrc && i.pending > e && (t.adler = Ea(t.adler, i.pending_buf, i.pending - e, e)),
                i.gzindex = 0
            }
            i.status = 73
        }
        if (73 === i.status) {
            if (i.gzhead.name) {
                let e, r = i.pending;
                do {
                    if (i.pending === i.pending_buf_size) {
                        if (i.gzhead.hcrc && i.pending > r && (t.adler = Ea(t.adler, i.pending_buf, i.pending - r, r)),
                        oo(t),
                        0 !== i.pending)
                            return i.last_flush = -1,
                            za;
                        r = 0
                    }
                    e = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0,
                    lo(i, e)
                } while (0 !== e);
                i.gzhead.hcrc && i.pending > r && (t.adler = Ea(t.adler, i.pending_buf, i.pending - r, r)),
                i.gzindex = 0
            }
            i.status = 91
        }
        if (91 === i.status) {
            if (i.gzhead.comment) {
                let e, r = i.pending;
                do {
                    if (i.pending === i.pending_buf_size) {
                        if (i.gzhead.hcrc && i.pending > r && (t.adler = Ea(t.adler, i.pending_buf, i.pending - r, r)),
                        oo(t),
                        0 !== i.pending)
                            return i.last_flush = -1,
                            za;
                        r = 0
                    }
                    e = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0,
                    lo(i, e)
                } while (0 !== e);
                i.gzhead.hcrc && i.pending > r && (t.adler = Ea(t.adler, i.pending_buf, i.pending - r, r))
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
        if (0 !== t.avail_in || 0 !== i.lookahead || e !== Ua && i.status !== eo) {
            let r = 0 === i.level ? bo(i, e) : i.strategy === Va ? ( (t, e) => {
                let i;
                for (; ; ) {
                    if (0 === t.lookahead && (go(t),
                    0 === t.lookahead)) {
                        if (e === Ua)
                            return 1;
                        break
                    }
                    if (t.match_length = 0,
                    i = Ia(t, 0, t.window[t.strstart]),
                    t.lookahead--,
                    t.strstart++,
                    i && (ho(t, !1),
                    0 === t.strm.avail_out))
                        return 1
                }
                return t.insert = 0,
                e === Ba ? (ho(t, !0),
                0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (ho(t, !1),
                0 === t.strm.avail_out) ? 1 : 2
            }
            )(i, e) : i.strategy === Xa ? ( (t, e) => {
                let i, r, s, n;
                const a = t.window;
                for (; ; ) {
                    if (t.lookahead <= $a) {
                        if (go(t),
                        t.lookahead <= $a && e === Ua)
                            return 1;
                        if (0 === t.lookahead)
                            break
                    }
                    if (t.match_length = 0,
                    t.lookahead >= 3 && t.strstart > 0 && (s = t.strstart - 1,
                    r = a[s],
                    r === a[++s] && r === a[++s] && r === a[++s])) {
                        n = t.strstart + $a;
                        do {} while (r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && s < n);
                        t.match_length = $a - (n - s),
                        t.match_length > t.lookahead && (t.match_length = t.lookahead)
                    }
                    if (t.match_length >= 3 ? (i = Ia(t, 1, t.match_length - 3),
                    t.lookahead -= t.match_length,
                    t.strstart += t.match_length,
                    t.match_length = 0) : (i = Ia(t, 0, t.window[t.strstart]),
                    t.lookahead--,
                    t.strstart++),
                    i && (ho(t, !1),
                    0 === t.strm.avail_out))
                        return 1
                }
                return t.insert = 0,
                e === Ba ? (ho(t, !0),
                0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (ho(t, !1),
                0 === t.strm.avail_out) ? 1 : 2
            }
            )(i, e) : vo[i.level].func(i, e);
            if (3 !== r && 4 !== r || (i.status = eo),
            1 === r || 3 === r)
                return 0 === t.avail_out && (i.last_flush = -1),
                za;
            if (2 === r && (e === Ra ? Da(i) : e !== Pa && (ka(i, 0, 0, !1),
            e === Oa && (so(i.head),
            0 === i.lookahead && (i.strstart = 0,
            i.block_start = 0,
            i.insert = 0))),
            oo(t),
            0 === t.avail_out))
                return i.last_flush = -1,
                za
        }
        return e !== Ba ? za : i.wrap <= 0 ? Na : (2 === i.wrap ? (lo(i, 255 & t.adler),
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
      , Mo = (t, e) => {
        let i = e.length;
        if (To(t))
            return Ga;
        const r = t.state
          , s = r.wrap;
        if (2 === s || 1 === s && r.status !== Qa || r.lookahead)
            return Ga;
        if (1 === s && (t.adler = ya(t.adler, e, i, 0)),
        r.wrap = 0,
        i >= r.w_size) {
            0 === s && (so(r.head),
            r.strstart = 0,
            r.block_start = 0,
            r.insert = 0);
            let t = new Uint8Array(r.w_size);
            t.set(e.subarray(i - r.w_size, i), 0),
            e = t,
            i = r.w_size
        }
        const n = t.avail_in
          , a = t.next_in
          , o = t.input;
        for (t.avail_in = i,
        t.next_in = 0,
        t.input = e,
        go(r); r.lookahead >= 3; ) {
            let t = r.strstart
              , e = r.lookahead - 2;
            do {
                r.ins_h = ao(r, r.ins_h, r.window[t + 3 - 1]),
                r.prev[t & r.w_mask] = r.head[r.ins_h],
                r.head[r.ins_h] = t,
                t++
            } while (--e);
            r.strstart = t,
            r.lookahead = 2,
            go(r)
        }
        return r.strstart += r.lookahead,
        r.block_start = r.strstart,
        r.insert = r.lookahead,
        r.lookahead = 0,
        r.match_length = r.prev_length = 2,
        r.match_available = 0,
        t.next_in = a,
        t.input = o,
        t.avail_in = n,
        r.wrap = s,
        za
    }
      , Co = {
        deflateInit: (t, e) => Ao(t, e, Ka, 15, 8, Ya),
        deflateInit2: Ao,
        deflateReset: yo,
        deflateResetKeep: wo,
        deflateSetHeader: (t, e) => To(t) || 2 !== t.state.wrap ? Ga : (t.state.gzhead = e,
        za),
        deflate: Eo,
        deflateEnd: t => {
            if (To(t))
                return Ga;
            const e = t.state.status;
            return t.state = null,
            e === to ? io(t, La) : za
        }
        ,
        deflateSetDictionary: Mo,
        deflateInfo: "pako deflate (from Nodeca project)"
    };
    const So = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var ko = {
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
            for (let i = 0, r = t.length; i < r; i++)
                e += t[i].length;
            const i = new Uint8Array(e);
            for (let e = 0, r = 0, s = t.length; e < s; e++) {
                let s = t[e];
                i.set(s, r),
                r += s.length
            }
            return i
        }
    };
    let Fo = !0;
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (t) {
        Fo = !1
    }
    const Io = new Uint8Array(256);
    for (let t = 0; t < 256; t++)
        Io[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
    Io[254] = Io[254] = 1;
    var Do = {
        string2buf: t => {
            if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
                return (new TextEncoder).encode(t);
            let e, i, r, s, n, a = t.length, o = 0;
            for (s = 0; s < a; s++)
                i = t.charCodeAt(s),
                55296 == (64512 & i) && s + 1 < a && (r = t.charCodeAt(s + 1),
                56320 == (64512 & r) && (i = 65536 + (i - 55296 << 10) + (r - 56320),
                s++)),
                o += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
            for (e = new Uint8Array(o),
            n = 0,
            s = 0; n < o; s++)
                i = t.charCodeAt(s),
                55296 == (64512 & i) && s + 1 < a && (r = t.charCodeAt(s + 1),
                56320 == (64512 & r) && (i = 65536 + (i - 55296 << 10) + (r - 56320),
                s++)),
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
            let r, s;
            const n = new Array(2 * i);
            for (s = 0,
            r = 0; r < i; ) {
                let e = t[r++];
                if (e < 128) {
                    n[s++] = e;
                    continue
                }
                let a = Io[e];
                if (a > 4)
                    n[s++] = 65533,
                    r += a - 1;
                else {
                    for (e &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && r < i; )
                        e = e << 6 | 63 & t[r++],
                        a--;
                    a > 1 ? n[s++] = 65533 : e < 65536 ? n[s++] = e : (e -= 65536,
                    n[s++] = 55296 | e >> 10 & 1023,
                    n[s++] = 56320 | 1023 & e)
                }
            }
            return ( (t, e) => {
                if (e < 65534 && t.subarray && Fo)
                    return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
                let i = "";
                for (let r = 0; r < e; r++)
                    i += String.fromCharCode(t[r]);
                return i
            }
            )(n, s)
        }
        ,
        utf8border: (t, e) => {
            (e = e || t.length) > t.length && (e = t.length);
            let i = e - 1;
            for (; i >= 0 && 128 == (192 & t[i]); )
                i--;
            return i < 0 || 0 === i ? e : i + Io[t[i]] > e ? i : e
        }
    };
    var Uo = function() {
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
    const Ro = Object.prototype.toString
      , {Z_NO_FLUSH: Oo, Z_SYNC_FLUSH: Bo, Z_FULL_FLUSH: Po, Z_FINISH: zo, Z_OK: No, Z_STREAM_END: Go, Z_DEFAULT_COMPRESSION: Lo, Z_DEFAULT_STRATEGY: Ho, Z_DEFLATED: jo} = Ca;
    function qo(t) {
        this.options = ko.assign({
            level: Lo,
            method: jo,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: Ho
        }, t || {});
        let e = this.options;
        e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
        this.err = 0,
        this.msg = "",
        this.ended = !1,
        this.chunks = [],
        this.strm = new Uo,
        this.strm.avail_out = 0;
        let i = Co.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
        if (i !== No)
            throw new Error(Ma[i]);
        if (e.header && Co.deflateSetHeader(this.strm, e.header),
        e.dictionary) {
            let t;
            if (t = "string" == typeof e.dictionary ? Do.string2buf(e.dictionary) : "[object ArrayBuffer]" === Ro.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary,
            i = Co.deflateSetDictionary(this.strm, t),
            i !== No)
                throw new Error(Ma[i]);
            this._dict_set = !0
        }
    }
    function Vo(t, e) {
        const i = new qo(e);
        if (i.push(t, !0),
        i.err)
            throw i.msg || Ma[i.err];
        return i.result
    }
    qo.prototype.push = function(t, e) {
        const i = this.strm
          , r = this.options.chunkSize;
        let s, n;
        if (this.ended)
            return !1;
        for (n = e === ~~e ? e : !0 === e ? zo : Oo,
        "string" == typeof t ? i.input = Do.string2buf(t) : "[object ArrayBuffer]" === Ro.call(t) ? i.input = new Uint8Array(t) : i.input = t,
        i.next_in = 0,
        i.avail_in = i.input.length; ; )
            if (0 === i.avail_out && (i.output = new Uint8Array(r),
            i.next_out = 0,
            i.avail_out = r),
            (n === Bo || n === Po) && i.avail_out <= 6)
                this.onData(i.output.subarray(0, i.next_out)),
                i.avail_out = 0;
            else {
                if (s = Co.deflate(i, n),
                s === Go)
                    return i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)),
                    s = Co.deflateEnd(this.strm),
                    this.onEnd(s),
                    this.ended = !0,
                    s === No;
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
        t === No && (this.result = ko.flattenChunks(this.chunks)),
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
        constants: Ca
    };
    const Wo = 16209;
    var Yo = function(t, e) {
        let i, r, s, n, a, o, h, l, u, c, f, d, g, b, _, p, m, v, x, T, w, y, A, E;
        const M = t.state;
        i = t.next_in,
        A = t.input,
        r = i + (t.avail_in - 5),
        s = t.next_out,
        E = t.output,
        n = s - (e - t.avail_out),
        a = s + (t.avail_out - 257),
        o = M.dmax,
        h = M.wsize,
        l = M.whave,
        u = M.wnext,
        c = M.window,
        f = M.hold,
        d = M.bits,
        g = M.lencode,
        b = M.distcode,
        _ = (1 << M.lenbits) - 1,
        p = (1 << M.distbits) - 1;
        t: do {
            d < 15 && (f += A[i++] << d,
            d += 8,
            f += A[i++] << d,
            d += 8),
            m = g[f & _];
            e: for (; ; ) {
                if (v = m >>> 24,
                f >>>= v,
                d -= v,
                v = m >>> 16 & 255,
                0 === v)
                    E[s++] = 65535 & m;
                else {
                    if (!(16 & v)) {
                        if (0 == (64 & v)) {
                            m = g[(65535 & m) + (f & (1 << v) - 1)];
                            continue e
                        }
                        if (32 & v) {
                            M.mode = 16191;
                            break t
                        }
                        t.msg = "invalid literal/length code",
                        M.mode = Wo;
                        break t
                    }
                    x = 65535 & m,
                    v &= 15,
                    v && (d < v && (f += A[i++] << d,
                    d += 8),
                    x += f & (1 << v) - 1,
                    f >>>= v,
                    d -= v),
                    d < 15 && (f += A[i++] << d,
                    d += 8,
                    f += A[i++] << d,
                    d += 8),
                    m = b[f & p];
                    i: for (; ; ) {
                        if (v = m >>> 24,
                        f >>>= v,
                        d -= v,
                        v = m >>> 16 & 255,
                        !(16 & v)) {
                            if (0 == (64 & v)) {
                                m = b[(65535 & m) + (f & (1 << v) - 1)];
                                continue i
                            }
                            t.msg = "invalid distance code",
                            M.mode = Wo;
                            break t
                        }
                        if (T = 65535 & m,
                        v &= 15,
                        d < v && (f += A[i++] << d,
                        d += 8,
                        d < v && (f += A[i++] << d,
                        d += 8)),
                        T += f & (1 << v) - 1,
                        T > o) {
                            t.msg = "invalid distance too far back",
                            M.mode = Wo;
                            break t
                        }
                        if (f >>>= v,
                        d -= v,
                        v = s - n,
                        T > v) {
                            if (v = T - v,
                            v > l && M.sane) {
                                t.msg = "invalid distance too far back",
                                M.mode = Wo;
                                break t
                            }
                            if (w = 0,
                            y = c,
                            0 === u) {
                                if (w += h - v,
                                v < x) {
                                    x -= v;
                                    do {
                                        E[s++] = c[w++]
                                    } while (--v);
                                    w = s - T,
                                    y = E
                                }
                            } else if (u < v) {
                                if (w += h + u - v,
                                v -= u,
                                v < x) {
                                    x -= v;
                                    do {
                                        E[s++] = c[w++]
                                    } while (--v);
                                    if (w = 0,
                                    u < x) {
                                        v = u,
                                        x -= v;
                                        do {
                                            E[s++] = c[w++]
                                        } while (--v);
                                        w = s - T,
                                        y = E
                                    }
                                }
                            } else if (w += u - v,
                            v < x) {
                                x -= v;
                                do {
                                    E[s++] = c[w++]
                                } while (--v);
                                w = s - T,
                                y = E
                            }
                            for (; x > 2; )
                                E[s++] = y[w++],
                                E[s++] = y[w++],
                                E[s++] = y[w++],
                                x -= 3;
                            x && (E[s++] = y[w++],
                            x > 1 && (E[s++] = y[w++]))
                        } else {
                            w = s - T;
                            do {
                                E[s++] = E[w++],
                                E[s++] = E[w++],
                                E[s++] = E[w++],
                                x -= 3
                            } while (x > 2);
                            x && (E[s++] = E[w++],
                            x > 1 && (E[s++] = E[w++]))
                        }
                        break
                    }
                }
                break
            }
        } while (i < r && s < a);
        x = d >> 3,
        i -= x,
        d -= x << 3,
        f &= (1 << d) - 1,
        t.next_in = i,
        t.next_out = s,
        t.avail_in = i < r ? r - i + 5 : 5 - (i - r),
        t.avail_out = s < a ? a - s + 257 : 257 - (s - a),
        M.hold = f,
        M.bits = d
    };
    const Zo = 15
      , Ko = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0])
      , $o = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78])
      , Jo = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0])
      , Qo = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    var th = (t, e, i, r, s, n, a, o) => {
        const h = o.bits;
        let l, u, c, f, d, g, b = 0, _ = 0, p = 0, m = 0, v = 0, x = 0, T = 0, w = 0, y = 0, A = 0, E = null;
        const M = new Uint16Array(16)
          , C = new Uint16Array(16);
        let S, k, F, I = null;
        for (b = 0; b <= Zo; b++)
            M[b] = 0;
        for (_ = 0; _ < r; _++)
            M[e[i + _]]++;
        for (v = h,
        m = Zo; m >= 1 && 0 === M[m]; m--)
            ;
        if (v > m && (v = m),
        0 === m)
            return s[n++] = 20971520,
            s[n++] = 20971520,
            o.bits = 1,
            0;
        for (p = 1; p < m && 0 === M[p]; p++)
            ;
        for (v < p && (v = p),
        w = 1,
        b = 1; b <= Zo; b++)
            if (w <<= 1,
            w -= M[b],
            w < 0)
                return -1;
        if (w > 0 && (0 === t || 1 !== m))
            return -1;
        for (C[1] = 0,
        b = 1; b < Zo; b++)
            C[b + 1] = C[b] + M[b];
        for (_ = 0; _ < r; _++)
            0 !== e[i + _] && (a[C[e[i + _]]++] = _);
        if (0 === t ? (E = I = a,
        g = 20) : 1 === t ? (E = Ko,
        I = $o,
        g = 257) : (E = Jo,
        I = Qo,
        g = 0),
        A = 0,
        _ = 0,
        b = p,
        d = n,
        x = v,
        T = 0,
        c = -1,
        y = 1 << v,
        f = y - 1,
        1 === t && y > 852 || 2 === t && y > 592)
            return 1;
        for (; ; ) {
            S = b - T,
            a[_] + 1 < g ? (k = 0,
            F = a[_]) : a[_] >= g ? (k = I[a[_] - g],
            F = E[a[_] - g]) : (k = 96,
            F = 0),
            l = 1 << b - T,
            u = 1 << x,
            p = u;
            do {
                u -= l,
                s[d + (A >> T) + u] = S << 24 | k << 16 | F | 0
            } while (0 !== u);
            for (l = 1 << b - 1; A & l; )
                l >>= 1;
            if (0 !== l ? (A &= l - 1,
            A += l) : A = 0,
            _++,
            0 == --M[b]) {
                if (b === m)
                    break;
                b = e[i + a[_]]
            }
            if (b > v && (A & f) !== c) {
                for (0 === T && (T = v),
                d += p,
                x = b - T,
                w = 1 << x; x + T < m && (w -= M[x + T],
                !(w <= 0)); )
                    x++,
                    w <<= 1;
                if (y += 1 << x,
                1 === t && y > 852 || 2 === t && y > 592)
                    return 1;
                c = A & f,
                s[c] = v << 24 | x << 16 | d - n | 0
            }
        }
        return 0 !== A && (s[d + A] = b - T << 24 | 64 << 16 | 0),
        o.bits = v,
        0
    }
    ;
    const {Z_FINISH: eh, Z_BLOCK: ih, Z_TREES: rh, Z_OK: sh, Z_STREAM_END: nh, Z_NEED_DICT: ah, Z_STREAM_ERROR: oh, Z_DATA_ERROR: hh, Z_MEM_ERROR: lh, Z_BUF_ERROR: uh, Z_DEFLATED: ch} = Ca
      , fh = 16180
      , dh = 16190
      , gh = 16191
      , bh = 16192
      , _h = 16194
      , ph = 16199
      , mh = 16200
      , vh = 16206
      , xh = 16209
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
        return !e || e.strm !== t || e.mode < fh || e.mode > 16211 ? 1 : 0
    }
      , Ah = t => {
        if (yh(t))
            return oh;
        const e = t.state;
        return t.total_in = t.total_out = e.total = 0,
        t.msg = "",
        e.wrap && (t.adler = 1 & e.wrap),
        e.mode = fh,
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
        sh
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
      , Mh = (t, e) => {
        let i;
        if (yh(t))
            return oh;
        const r = t.state;
        return e < 0 ? (i = 0,
        e = -e) : (i = 5 + (e >> 4),
        e < 48 && (e &= 15)),
        e && (e < 8 || e > 15) ? oh : (null !== r.window && r.wbits !== e && (r.window = null),
        r.wrap = i,
        r.wbits = e,
        Eh(t))
    }
      , Ch = (t, e) => {
        if (!t)
            return oh;
        const i = new wh;
        t.state = i,
        i.strm = t,
        i.window = null,
        i.mode = fh;
        const r = Mh(t, e);
        return r !== sh && (t.state = null),
        r
    }
    ;
    let Sh, kh, Fh = !0;
    const Ih = t => {
        if (Fh) {
            Sh = new Int32Array(512),
            kh = new Int32Array(32);
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
            th(2, t.lens, 0, 32, kh, 0, t.work, {
                bits: 5
            }),
            Fh = !1
        }
        t.lencode = Sh,
        t.lenbits = 9,
        t.distcode = kh,
        t.distbits = 5
    }
      , Dh = (t, e, i, r) => {
        let s;
        const n = t.state;
        return null === n.window && (n.wsize = 1 << n.wbits,
        n.wnext = 0,
        n.whave = 0,
        n.window = new Uint8Array(n.wsize)),
        r >= n.wsize ? (n.window.set(e.subarray(i - n.wsize, i), 0),
        n.wnext = 0,
        n.whave = n.wsize) : (s = n.wsize - n.wnext,
        s > r && (s = r),
        n.window.set(e.subarray(i - r, i - r + s), n.wnext),
        (r -= s) ? (n.window.set(e.subarray(i - r, i), 0),
        n.wnext = r,
        n.whave = n.wsize) : (n.wnext += s,
        n.wnext === n.wsize && (n.wnext = 0),
        n.whave < n.wsize && (n.whave += s))),
        0
    }
    ;
    var Uh = (t, e) => {
        let i, r, s, n, a, o, h, l, u, c, f, d, g, b, _, p, m, v, x, T, w, y, A = 0;
        const E = new Uint8Array(4);
        let M, C;
        const S = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (yh(t) || !t.output || !t.input && 0 !== t.avail_in)
            return oh;
        i = t.state,
        i.mode === gh && (i.mode = bh),
        a = t.next_out,
        s = t.output,
        h = t.avail_out,
        n = t.next_in,
        r = t.input,
        o = t.avail_in,
        l = i.hold,
        u = i.bits,
        c = o,
        f = h,
        y = sh;
        t: for (; ; )
            switch (i.mode) {
            case fh:
                if (0 === i.wrap) {
                    i.mode = bh;
                    break
                }
                for (; u < 16; ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += r[n++] << u,
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
                    i.mode = xh;
                    break
                }
                if ((15 & l) !== ch) {
                    t.msg = "unknown compression method",
                    i.mode = xh;
                    break
                }
                if (l >>>= 4,
                u -= 4,
                w = 8 + (15 & l),
                0 === i.wbits && (i.wbits = w),
                w > 15 || w > i.wbits) {
                    t.msg = "invalid window size",
                    i.mode = xh;
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
                    l += r[n++] << u,
                    u += 8
                }
                if (i.flags = l,
                (255 & i.flags) !== ch) {
                    t.msg = "unknown compression method",
                    i.mode = xh;
                    break
                }
                if (57344 & i.flags) {
                    t.msg = "unknown header flags set",
                    i.mode = xh;
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
                    l += r[n++] << u,
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
                    l += r[n++] << u,
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
                        l += r[n++] << u,
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
                if (1024 & i.flags && (d = i.length,
                d > o && (d = o),
                d && (i.head && (w = i.head.extra_len - i.length,
                i.head.extra || (i.head.extra = new Uint8Array(i.head.extra_len)),
                i.head.extra.set(r.subarray(n, n + d), w)),
                512 & i.flags && 4 & i.wrap && (i.check = Ea(i.check, r, d, n)),
                o -= d,
                n += d,
                i.length -= d),
                i.length))
                    break t;
                i.length = 0,
                i.mode = 16186;
            case 16186:
                if (2048 & i.flags) {
                    if (0 === o)
                        break t;
                    d = 0;
                    do {
                        w = r[n + d++],
                        i.head && w && i.length < 65536 && (i.head.name += String.fromCharCode(w))
                    } while (w && d < o);
                    if (512 & i.flags && 4 & i.wrap && (i.check = Ea(i.check, r, d, n)),
                    o -= d,
                    n += d,
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
                    d = 0;
                    do {
                        w = r[n + d++],
                        i.head && w && i.length < 65536 && (i.head.comment += String.fromCharCode(w))
                    } while (w && d < o);
                    if (512 & i.flags && 4 & i.wrap && (i.check = Ea(i.check, r, d, n)),
                    o -= d,
                    n += d,
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
                        l += r[n++] << u,
                        u += 8
                    }
                    if (4 & i.wrap && l !== (65535 & i.check)) {
                        t.msg = "header crc mismatch",
                        i.mode = xh;
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
                    l += r[n++] << u,
                    u += 8
                }
                t.adler = i.check = Th(l),
                l = 0,
                u = 0,
                i.mode = dh;
            case dh:
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
                if (e === ih || e === rh)
                    break t;
            case bh:
                if (i.last) {
                    l >>>= 7 & u,
                    u -= 7 & u,
                    i.mode = vh;
                    break
                }
                for (; u < 3; ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += r[n++] << u,
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
                    if (Ih(i),
                    i.mode = ph,
                    e === rh) {
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
                    i.mode = xh
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
                    l += r[n++] << u,
                    u += 8
                }
                if ((65535 & l) != (l >>> 16 ^ 65535)) {
                    t.msg = "invalid stored block lengths",
                    i.mode = xh;
                    break
                }
                if (i.length = 65535 & l,
                l = 0,
                u = 0,
                i.mode = _h,
                e === rh)
                    break t;
            case _h:
                i.mode = 16195;
            case 16195:
                if (d = i.length,
                d) {
                    if (d > o && (d = o),
                    d > h && (d = h),
                    0 === d)
                        break t;
                    s.set(r.subarray(n, n + d), a),
                    o -= d,
                    n += d,
                    h -= d,
                    a += d,
                    i.length -= d;
                    break
                }
                i.mode = gh;
                break;
            case 16196:
                for (; u < 14; ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += r[n++] << u,
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
                    i.mode = xh;
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
                        l += r[n++] << u,
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
                M = {
                    bits: i.lenbits
                },
                y = th(0, i.lens, 0, 19, i.lencode, 0, i.work, M),
                i.lenbits = M.bits,
                y) {
                    t.msg = "invalid code lengths set",
                    i.mode = xh;
                    break
                }
                i.have = 0,
                i.mode = 16198;
            case 16198:
                for (; i.have < i.nlen + i.ndist; ) {
                    for (; A = i.lencode[l & (1 << i.lenbits) - 1],
                    _ = A >>> 24,
                    p = A >>> 16 & 255,
                    m = 65535 & A,
                    !(_ <= u); ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[n++] << u,
                        u += 8
                    }
                    if (m < 16)
                        l >>>= _,
                        u -= _,
                        i.lens[i.have++] = m;
                    else {
                        if (16 === m) {
                            for (C = _ + 2; u < C; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                l += r[n++] << u,
                                u += 8
                            }
                            if (l >>>= _,
                            u -= _,
                            0 === i.have) {
                                t.msg = "invalid bit length repeat",
                                i.mode = xh;
                                break
                            }
                            w = i.lens[i.have - 1],
                            d = 3 + (3 & l),
                            l >>>= 2,
                            u -= 2
                        } else if (17 === m) {
                            for (C = _ + 3; u < C; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                l += r[n++] << u,
                                u += 8
                            }
                            l >>>= _,
                            u -= _,
                            w = 0,
                            d = 3 + (7 & l),
                            l >>>= 3,
                            u -= 3
                        } else {
                            for (C = _ + 7; u < C; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                l += r[n++] << u,
                                u += 8
                            }
                            l >>>= _,
                            u -= _,
                            w = 0,
                            d = 11 + (127 & l),
                            l >>>= 7,
                            u -= 7
                        }
                        if (i.have + d > i.nlen + i.ndist) {
                            t.msg = "invalid bit length repeat",
                            i.mode = xh;
                            break
                        }
                        for (; d--; )
                            i.lens[i.have++] = w
                    }
                }
                if (i.mode === xh)
                    break;
                if (0 === i.lens[256]) {
                    t.msg = "invalid code -- missing end-of-block",
                    i.mode = xh;
                    break
                }
                if (i.lenbits = 9,
                M = {
                    bits: i.lenbits
                },
                y = th(1, i.lens, 0, i.nlen, i.lencode, 0, i.work, M),
                i.lenbits = M.bits,
                y) {
                    t.msg = "invalid literal/lengths set",
                    i.mode = xh;
                    break
                }
                if (i.distbits = 6,
                i.distcode = i.distdyn,
                M = {
                    bits: i.distbits
                },
                y = th(2, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, M),
                i.distbits = M.bits,
                y) {
                    t.msg = "invalid distances set",
                    i.mode = xh;
                    break
                }
                if (i.mode = ph,
                e === rh)
                    break t;
            case ph:
                i.mode = mh;
            case mh:
                if (o >= 6 && h >= 258) {
                    t.next_out = a,
                    t.avail_out = h,
                    t.next_in = n,
                    t.avail_in = o,
                    i.hold = l,
                    i.bits = u,
                    Yo(t, f),
                    a = t.next_out,
                    s = t.output,
                    h = t.avail_out,
                    n = t.next_in,
                    r = t.input,
                    o = t.avail_in,
                    l = i.hold,
                    u = i.bits,
                    i.mode === gh && (i.back = -1);
                    break
                }
                for (i.back = 0; A = i.lencode[l & (1 << i.lenbits) - 1],
                _ = A >>> 24,
                p = A >>> 16 & 255,
                m = 65535 & A,
                !(_ <= u); ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += r[n++] << u,
                    u += 8
                }
                if (p && 0 == (240 & p)) {
                    for (v = _,
                    x = p,
                    T = m; A = i.lencode[T + ((l & (1 << v + x) - 1) >> v)],
                    _ = A >>> 24,
                    p = A >>> 16 & 255,
                    m = 65535 & A,
                    !(v + _ <= u); ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[n++] << u,
                        u += 8
                    }
                    l >>>= v,
                    u -= v,
                    i.back += v
                }
                if (l >>>= _,
                u -= _,
                i.back += _,
                i.length = m,
                0 === p) {
                    i.mode = 16205;
                    break
                }
                if (32 & p) {
                    i.back = -1,
                    i.mode = gh;
                    break
                }
                if (64 & p) {
                    t.msg = "invalid literal/length code",
                    i.mode = xh;
                    break
                }
                i.extra = 15 & p,
                i.mode = 16201;
            case 16201:
                if (i.extra) {
                    for (C = i.extra; u < C; ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[n++] << u,
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
                p = A >>> 16 & 255,
                m = 65535 & A,
                !(_ <= u); ) {
                    if (0 === o)
                        break t;
                    o--,
                    l += r[n++] << u,
                    u += 8
                }
                if (0 == (240 & p)) {
                    for (v = _,
                    x = p,
                    T = m; A = i.distcode[T + ((l & (1 << v + x) - 1) >> v)],
                    _ = A >>> 24,
                    p = A >>> 16 & 255,
                    m = 65535 & A,
                    !(v + _ <= u); ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[n++] << u,
                        u += 8
                    }
                    l >>>= v,
                    u -= v,
                    i.back += v
                }
                if (l >>>= _,
                u -= _,
                i.back += _,
                64 & p) {
                    t.msg = "invalid distance code",
                    i.mode = xh;
                    break
                }
                i.offset = m,
                i.extra = 15 & p,
                i.mode = 16203;
            case 16203:
                if (i.extra) {
                    for (C = i.extra; u < C; ) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[n++] << u,
                        u += 8
                    }
                    i.offset += l & (1 << i.extra) - 1,
                    l >>>= i.extra,
                    u -= i.extra,
                    i.back += i.extra
                }
                if (i.offset > i.dmax) {
                    t.msg = "invalid distance too far back",
                    i.mode = xh;
                    break
                }
                i.mode = 16204;
            case 16204:
                if (0 === h)
                    break t;
                if (d = f - h,
                i.offset > d) {
                    if (d = i.offset - d,
                    d > i.whave && i.sane) {
                        t.msg = "invalid distance too far back",
                        i.mode = xh;
                        break
                    }
                    d > i.wnext ? (d -= i.wnext,
                    g = i.wsize - d) : g = i.wnext - d,
                    d > i.length && (d = i.length),
                    b = i.window
                } else
                    b = s,
                    g = a - i.offset,
                    d = i.length;
                d > h && (d = h),
                h -= d,
                i.length -= d;
                do {
                    s[a++] = b[g++]
                } while (--d);
                0 === i.length && (i.mode = mh);
                break;
            case 16205:
                if (0 === h)
                    break t;
                s[a++] = i.length,
                h--,
                i.mode = mh;
                break;
            case vh:
                if (i.wrap) {
                    for (; u < 32; ) {
                        if (0 === o)
                            break t;
                        o--,
                        l |= r[n++] << u,
                        u += 8
                    }
                    if (f -= h,
                    t.total_out += f,
                    i.total += f,
                    4 & i.wrap && f && (t.adler = i.check = i.flags ? Ea(i.check, s, f, a - f) : ya(i.check, s, f, a - f)),
                    f = h,
                    4 & i.wrap && (i.flags ? l : Th(l)) !== i.check) {
                        t.msg = "incorrect data check",
                        i.mode = xh;
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
                        l += r[n++] << u,
                        u += 8
                    }
                    if (4 & i.wrap && l !== (4294967295 & i.total)) {
                        t.msg = "incorrect length check",
                        i.mode = xh;
                        break
                    }
                    l = 0,
                    u = 0
                }
                i.mode = 16208;
            case 16208:
                y = nh;
                break t;
            case xh:
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
        (i.wsize || f !== t.avail_out && i.mode < xh && (i.mode < vh || e !== eh)) && Dh(t, t.output, t.next_out, f - t.avail_out),
        c -= t.avail_in,
        f -= t.avail_out,
        t.total_in += c,
        t.total_out += f,
        i.total += f,
        4 & i.wrap && f && (t.adler = i.check = i.flags ? Ea(i.check, s, f, t.next_out - f) : ya(i.check, s, f, t.next_out - f)),
        t.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === gh ? 128 : 0) + (i.mode === ph || i.mode === _h ? 256 : 0),
        (0 === c && 0 === f || e === eh) && y === sh && (y = uh),
        y
    }
      , Rh = {
        inflateReset: Eh,
        inflateReset2: Mh,
        inflateResetKeep: Ah,
        inflateInit: t => Ch(t, 15),
        inflateInit2: Ch,
        inflate: Uh,
        inflateEnd: t => {
            if (yh(t))
                return oh;
            let e = t.state;
            return e.window && (e.window = null),
            t.state = null,
            sh
        }
        ,
        inflateGetHeader: (t, e) => {
            if (yh(t))
                return oh;
            const i = t.state;
            return 0 == (2 & i.wrap) ? oh : (i.head = e,
            e.done = !1,
            sh)
        }
        ,
        inflateSetDictionary: (t, e) => {
            const i = e.length;
            let r, s, n;
            return yh(t) ? oh : (r = t.state,
            0 !== r.wrap && r.mode !== dh ? oh : r.mode === dh && (s = 1,
            s = ya(s, e, i, 0),
            s !== r.check) ? hh : (n = Dh(t, e, i, i),
            n ? (r.mode = 16210,
            lh) : (r.havedict = 1,
            sh)))
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
    const Bh = Object.prototype.toString
      , {Z_NO_FLUSH: Ph, Z_FINISH: zh, Z_OK: Nh, Z_STREAM_END: Gh, Z_NEED_DICT: Lh, Z_STREAM_ERROR: Hh, Z_DATA_ERROR: jh, Z_MEM_ERROR: qh} = Ca;
    function Vh(t) {
        this.options = ko.assign({
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
        this.strm = new Uo,
        this.strm.avail_out = 0;
        let i = Rh.inflateInit2(this.strm, e.windowBits);
        if (i !== Nh)
            throw new Error(Ma[i]);
        if (this.header = new Oh,
        Rh.inflateGetHeader(this.strm, this.header),
        e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = Do.string2buf(e.dictionary) : "[object ArrayBuffer]" === Bh.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)),
        e.raw && (i = Rh.inflateSetDictionary(this.strm, e.dictionary),
        i !== Nh)))
            throw new Error(Ma[i])
    }
    function Xh(t, e) {
        const i = new Vh(e);
        if (i.push(t),
        i.err)
            throw i.msg || Ma[i.err];
        return i.result
    }
    Vh.prototype.push = function(t, e) {
        const i = this.strm
          , r = this.options.chunkSize
          , s = this.options.dictionary;
        let n, a, o;
        if (this.ended)
            return !1;
        for (a = e === ~~e ? e : !0 === e ? zh : Ph,
        "[object ArrayBuffer]" === Bh.call(t) ? i.input = new Uint8Array(t) : i.input = t,
        i.next_in = 0,
        i.avail_in = i.input.length; ; ) {
            for (0 === i.avail_out && (i.output = new Uint8Array(r),
            i.next_out = 0,
            i.avail_out = r),
            n = Rh.inflate(i, a),
            n === Lh && s && (n = Rh.inflateSetDictionary(i, s),
            n === Nh ? n = Rh.inflate(i, a) : n === jh && (n = Lh)); i.avail_in > 0 && n === Gh && i.state.wrap > 0 && 0 !== t[i.next_in]; )
                Rh.inflateReset(i),
                n = Rh.inflate(i, a);
            switch (n) {
            case Hh:
            case jh:
            case Lh:
            case qh:
                return this.onEnd(n),
                this.ended = !0,
                !1
            }
            if (o = i.avail_out,
            i.next_out && (0 === i.avail_out || n === Gh))
                if ("string" === this.options.to) {
                    let t = Do.utf8border(i.output, i.next_out)
                      , e = i.next_out - t
                      , s = Do.buf2string(i.output, t);
                    i.next_out = e,
                    i.avail_out = r - e,
                    e && i.output.set(i.output.subarray(t, t + e), 0),
                    this.onData(s)
                } else
                    this.onData(i.output.length === i.next_out ? i.output : i.output.subarray(0, i.next_out));
            if (n !== Nh || 0 !== o) {
                if (n === Gh)
                    return n = Rh.inflateEnd(this.strm),
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
        t === Nh && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = ko.flattenChunks(this.chunks)),
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
        constants: Ca
    };
    const {Deflate: Yh, deflate: Zh, deflateRaw: Kh, gzip: $h} = Xo
      , {Inflate: Jh, inflate: Qh, inflateRaw: tl, ungzip: el} = Wh;
    var il = Qh;
    class rl {
        constructor(t) {
            var e = this;
            e.h = t.getUint16(),
            e.f = t.getUint16(),
            e.b = t.getUint32(),
            e.k = t.getUint32(),
            e.j = t.getUint16(),
            e.d = t.getUint16(),
            e.a = t.getUint16(),
            e.c = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            e.i = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            e.g = t.getInt16(),
            e.l = t.getUint16(),
            t.getBool() && (e.m = t.getString())
        }
        e() {}
    }
    class sl {
        constructor(t) {
            var e;
            if (this.f = t.getInt32(),
            this.o = t.getInt32(),
            this.d = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            (e = t.getInt32()) > 0) {
                this.p = new Array(e);
                for (let i = 0; i < e; ++i)
                    this.p[i] = t.getInt16()
            }
            if ((e = t.getInt32()) > 0) {
                this.r = new Array(e);
                for (let i = 0; i < e; ++i)
                    this.r[i] = t.getInt16()
            }
            this.n = new tn(t,Vs),
            this.a = new tn(t,Ws),
            this.g = new tn(t,Ys),
            this.i = new tn(t,Ys),
            this.q = t.getFloat(),
            this.c = t.getFloat(),
            this.b = t.getFloat(),
            this.m = t.getInt16(),
            this.l = t.getInt16(),
            this.j = new tn(t,Ws),
            this.e = new tn(t,Zs),
            this.k = t.getInt16()
        }
    }
    class nl {
        constructor(t) {
            this.a = t.getInt32(),
            this.c = t.getUint32(),
            this.b = t.getUint32()
        }
    }
    class al {
        constructor(t) {
            this.b = t.getUint8(),
            this.d = t.getInt8(),
            this.f = t.getUint16(),
            this.e = t.getUint16(),
            this.j = t.getUint16(),
            this.h = t.getInt16(),
            this.l = t.getUint16(),
            this.k = t.getUint16(),
            this.g = t.getUint16(),
            this.a = t.getInt16(),
            this.m = t.getUint16(),
            this.c = t.getInt16(),
            this.i = t.getInt16()
        }
    }
    class ol {
        constructor(t) {
            this.j = t.getInt16(),
            this.c = t.getInt16(),
            this.f = _i(t.getFloat(), t.getFloat(), t.getFloat()),
            this.d = new tn(t,Vs),
            this.g = new tn(t,Ys),
            this.a = new tn(t,Vs),
            this.h = new tn(t,Ys),
            this.e = new tn(t,Ys),
            this.i = new tn(t,Ys),
            this.b = new tn(t,Zs)
        }
    }
    const hl = class {
        constructor(t) {
            var e = this;
            e.b = t.getInt16(),
            e.a = t.getFloat(),
            e.d = t.getFloat(),
            e.e = t.getUint16(),
            e.c = t.getUint32()
        }
    }
    ;
    class ll {
        constructor(t) {
            if (this.h = [],
            this.z = [],
            this.F = [],
            this.v = [],
            this.L = [],
            this.w = [],
            this.g = [],
            this.b = [],
            this.y = [],
            this.k = [],
            this.K = [],
            this.e = [],
            this.H = [],
            this.B = [],
            this.t = [],
            this.E = [],
            this.J = [],
            this.i = [],
            this.x = [],
            this.I = [],
            this.C = [],
            this.d = [],
            this.m = [],
            this.c = [],
            this.f = [],
            this.a = [],
            this.l = [],
            this.r = [],
            this.A = [],
            this.n = [],
            !t)
                return void console.error("Bad buffer for DataView");
            let e = new Bn(t);
            if (604210112 != e.getUint32())
                return void console.log("Bad magic value");
            if (e.getUint32() < 2e3)
                return void console.log("Bad version");
            this.u = e.getUint32();
            var i = e.getUint32()
              , r = e.getUint32()
              , s = e.getUint32()
              , n = e.getUint32()
              , a = e.getUint32()
              , o = e.getUint32()
              , h = e.getUint32()
              , l = e.getUint32()
              , u = e.getUint32()
              , c = e.getUint32()
              , f = e.getUint32()
              , d = e.getUint32()
              , g = e.getUint32()
              , b = e.getUint32()
              , _ = e.getUint32()
              , p = e.getUint32()
              , m = e.getUint32()
              , v = e.getUint32()
              , x = e.getUint32()
              , T = e.getUint32()
              , w = e.getUint32()
              , y = e.getUint32()
              , A = e.getUint32()
              , E = e.getUint32()
              , M = e.getUint32()
              , C = e.getUint32()
              , S = e.getUint32()
              , k = e.getUint32()
              , F = e.getUint32()
              , I = e.getUint32()
              , D = e.getUint32()
              , U = e.getUint32()
              , R = e.getUint32();
            let O = new Uint8Array(t,e.position)
              , B = null;
            try {
                B = il(O)
            } catch (t) {
                return void console.log("Decompression error: " + t)
            }
            if (B.length < R)
                console.log("Unexpected data size", B.length, R);
            else {
                e = new Bn(B.buffer),
                e.position = i;
                var P = e.getInt32();
                if (P > 0) {
                    this.h = new Array(P);
                    for (let t = 0; t < P; ++t)
                        this.h[t] = new Mn(e)
                }
                e.position = r;
                var z = e.getInt32();
                if (z > 0) {
                    this.z = new Array(z);
                    for (let t = 0; t < z; ++t)
                        this.z[t] = e.getUint16()
                }
                e.position = s;
                var N = e.getInt32();
                if (N > 0) {
                    this.F = new Array(N);
                    for (let t = 0; t < N; ++t)
                        this.F[t] = e.getUint32()
                }
                e.position = n;
                var G = e.getInt32();
                if (G > 0) {
                    this.v = new Array(G);
                    for (let t = 0; t < G; ++t)
                        this.v[t] = new rl(e)
                }
                e.position = a;
                var L = e.getInt32();
                if (L > 0) {
                    this.L = new Array(L);
                    for (let t = 0; t < L; ++t)
                        this.L[t] = e.getInt16()
                }
                e.position = o;
                var H = e.getInt32();
                if (H > 0) {
                    this.w = new Array(H);
                    for (let t = 0; t < H; ++t)
                        this.w[t] = new On(e)
                }
                e.position = h;
                var j = e.getInt32();
                if (j > 0) {
                    this.g = new Array(j);
                    for (let t = 0; t < j; ++t)
                        this.g[t] = e.getInt16()
                }
                e.position = l;
                var q = e.getInt32();
                if (q > 0) {
                    this.b = new Array(q);
                    for (let t = 0; t < q; ++t)
                        this.b[t] = e.getInt16()
                }
                e.position = u;
                var V = e.getInt32();
                if (V > 0) {
                    this.y = new Array(V);
                    for (let t = 0; t < V; ++t)
                        this.y[t] = new Cn(e)
                }
                e.position = c;
                var X = e.getInt32();
                if (X > 0) {
                    this.k = new Array(X);
                    for (let t = 0; t < X; ++t)
                        this.k[t] = new al(e)
                }
                e.position = f;
                var W = e.getInt32();
                if (W > 0) {
                    this.K = new Array(W);
                    for (let t = 0; t < W; ++t)
                        this.K[t] = e.getInt16()
                }
                e.position = d;
                var Y = e.getInt32();
                if (Y > 0) {
                    this.o = new Array(Y);
                    for (let t = 0; t < Y; ++t)
                        this.o[t] = new Sn(e)
                }
                e.position = g;
                var Z = e.getInt32();
                if (Z > 0) {
                    this.e = new Array(Z);
                    for (let t = 0; t < Z; ++t)
                        this.e[t] = new nl(e)
                }
                e.position = b;
                var K = e.getInt32();
                if (K > 0) {
                    this.H = new Array(K);
                    for (let t = 0; t < K; ++t)
                        this.H[t] = e.getInt16()
                }
                e.position = _;
                var $ = e.getInt32();
                if ($ > 0) {
                    this.J = new Array($);
                    for (let t = 0; t < $; ++t)
                        this.J[t] = new kn(e)
                }
                e.position = p;
                var J = e.getInt32();
                if (J > 0) {
                    this.i = new Array(J);
                    for (let t = 0; t < J; ++t)
                        this.i[t] = e.getInt16()
                }
                e.position = m,
                this.s = _i(e.getFloat(), e.getFloat(), e.getFloat()),
                this.D = _i(e.getFloat(), e.getFloat(), e.getFloat()),
                this.q = e.getFloat(),
                this.G = _i(e.getFloat(), e.getFloat(), e.getFloat()),
                this.j = _i(e.getFloat(), e.getFloat(), e.getFloat()),
                this.p = e.getFloat(),
                e.position = v;
                var Q = e.getInt32();
                if (Q > 0) {
                    this.B = new Array(Q);
                    for (let t = 0; t < Q; ++t)
                        this.B[t] = e.getUint16()
                }
                e.position = x;
                var tt = e.getInt32();
                if (tt > 0) {
                    this.t = new Array(tt);
                    for (let t = 0; t < tt; ++t)
                        this.t[t] = _i(e.getFloat(), e.getFloat(), e.getFloat())
                }
                e.position = T;
                var et = e.getInt32();
                if (et > 0) {
                    this.E = new Array(et);
                    for (let t = 0; t < et; ++t)
                        this.E[t] = _i(e.getFloat(), e.getFloat(), e.getFloat())
                }
                e.position = w;
                var it = e.getInt32();
                if (it > 0) {
                    this.x = new Array(it);
                    for (let t = 0; t < it; ++t)
                        this.x[t] = e.getInt16()
                }
                e.position = y;
                var rt = e.getInt32();
                if (rt > 0) {
                    this.I = new Array(rt);
                    for (let t = 0; t < rt; ++t)
                        this.I[t] = new Fn(e)
                }
                e.position = A;
                var st = e.getInt32();
                if (st > 0) {
                    this.C = new Array(st);
                    for (let t = 0; t < st; ++t)
                        this.C[t] = e.getInt16()
                }
                e.position = E;
                var nt = e.getInt32();
                if (nt > 0) {
                    this.d = new Array(nt);
                    for (let t = 0; t < nt; ++t)
                        this.d[t] = new In(e)
                }
                e.position = M;
                var at = e.getInt32();
                if (at > 0) {
                    this.m = new Array(at);
                    for (let t = 0; t < at; ++t)
                        this.m[t] = new Dn(e)
                }
                e.position = C;
                var ot = e.getInt32();
                if (ot > 0) {
                    this.c = new Array(ot);
                    for (let t = 0; t < ot; ++t)
                        this.c[t] = e.getInt16()
                }
                e.position = S;
                var ht = e.getInt32();
                if (ht > 0) {
                    this.f = new Array(ht);
                    for (let t = 0; t < ht; ++t)
                        this.f[t] = new ol(e)
                }
                e.position = k;
                var lt = e.getInt32();
                if (lt > 0) {
                    this.a = new Array(lt);
                    for (let t = 0; t < lt; ++t)
                        this.a[t] = new Rn(e)
                }
                e.position = I;
                var ut = e.getInt32();
                if (ut > 0) {
                    this.r = new Array(ut);
                    for (let t = 0; t < ut; ++t)
                        this.r[t] = new Un(e)
                }
                e.position = D;
                var ct = e.getInt32();
                if (ct > 0) {
                    this.A = new Array(ct);
                    for (let t = 0; t < ut; ++t)
                        this.A[t] = e.getInt16()
                }
                e.position = U;
                var ft = e.getInt32();
                if (ft > 0) {
                    this.n = new Array(ft);
                    for (let t = 0; t < ft; ++t)
                        this.n[t] = new hl(e)
                }
                e.position = F;
                var dt = e.getInt32();
                if (dt > 0) {
                    this.l = new Array(dt);
                    for (let t = 0; t < dt; ++t)
                        this.l[t] = new sl(e)
                }
            }
        }
    }
    const ul = class {
        constructor(t) {
            this.v = t,
            this.h = new Float32Array([1, 1, 1, 1]),
            this.d = !1,
            this.F = !0,
            this.u = null,
            this.q = null,
            this.z = 0,
            this.B = null,
            this.p = [],
            this.l = [],
            this.y = new Array,
            this.C = null,
            this.g = [],
            this.c = t.f,
            this.A = t.g,
            this.x = !1,
            this.r = !1,
            this.k = !1,
            this.n = Ar(),
            this.w = gi(),
            this.b = Fs()
        }
        m(t) {
            this.u = t;
            const e = t.ar
              , i = this.v;
            this.q = e.y[this.v.e],
            this.z = this.q.b,
            Sn.b(this);
            let r = e.H[i.a];
            1 == i.g && r > -1 && 1 == e.e[r].a && (this.c = -1e3,
            this.A = 3);
            for (let r = 0; r < this.A; r++) {
                if (i.a > -1 && i.a < e.H.length) {
                    let s = e.H[i.a + r];
                    s > -1 && s < e.e.length && this.p.splice(r, 0, t.e[s])
                }
                if (i.i > -1 && i.i < e.i.length) {
                    let t = e.i[i.i + r];
                    t > -1 && e.J && t < e.J.length ? this.l.splice(r, 0, e.J[t]) : this.l.splice(r, 0, null)
                }
                if (i.c > -1 && i.c < e.c.length) {
                    let t = e.c[i.c + r];
                    t > -1 && t < e.m.length ? this.g.splice(r, 0, e.m[t]) : this.g.splice(r, 0, null)
                }
            }
            this.y = new Array(this.l.length);
            for (let t = 0; t < this.y.length; t++)
                this.y[t] = Pi();
            e.d && i.h > -1 && i.h < e.d.length && (this.C = e.d[i.h])
        }
        o() {
            this.u.ar;
            let t = Er(this.q.a[0], this.q.a[1], this.q.a[2], 1)
              , e = this.u.af[this.q.g].k
              , i = Pi();
            ji(i, i, this.u.U.viewMatrix),
            ji(i, i, this.u.Q),
            ji(i, i, e),
            Ur(t, t, i),
            t[3] = 0;
            let r = Rr(t);
            if ((3 & this.v.b) > 0) {
                let e = Ar();
                r > 0 ? Fr(e, t, 1 / r) : Mr(e, t),
                Fr(e, e, bi(_i(i[8], i[9], i[10])) * this.q.d),
                1 & this.v.b ? kr(e, t, e) : Sr(e, t, e),
                r = Ir(e)
            }
            return r
        }
        a() {
            this.u,
            this.u.U.context;
            const t = this.u.aw;
            if (this.n[0] = this.n[1] = this.n[2] = this.n[3] = 1,
            this.C && this.C.f(t, this.u.aq, this.n),
            this.g[0] && (this.n[3] *= this.g[0].b(t, this.u.aq)),
            this.n[3] *= this.u.ag[3],
            !(this.n[3] <= .001)) {
                for (let e = 0; e < this.g.length; e++) {
                    const i = this.g[e];
                    i && (this.h[e] = i.b(t, this.u.aq))
                }
                if (!this.d || this.u.aG) {
                    const t = this.s();
                    let e = !0;
                    for (const i of t) {
                        const t = i.h;
                        e = e && null != t
                    }
                    if (this.d = e,
                    !e)
                        return;
                    this.j = this.f(!1, !1),
                    this.E = this.f(!0, !1),
                    this.e = this.f(!1, !0)
                }
                if (this.l.forEach(( (e, i) => {
                    if (!this.u.as && (Gi(this.y[i]),
                    this.l[i])) {
                        let e = !1
                          , r = !1;
                        this.l[i].d && this.l[i].d.a(t.d.d) ? (this.w = this.l[i].d.b(t, this.u.aq),
                        r = !0) : mi(this.w, 0, 0, 0),
                        this.l[i].c && this.l[i].c.a(t.d.d) ? (this.b = this.l[i].c.b(t, this.u.aq),
                        e = !0) : Gs(this.b, 0, 0, 0, 1);
                        let s, n = !1;
                        if (this.l[i].a && this.l[i].a.a(t.d.d) && (s = this.l[i].a.b(t, this.u.aq),
                        n = !0),
                        Gi(this.y[i]),
                        qi(this.y[i], this.y[i], _i(.5, .5, 0)),
                        n && Vi(this.y[i], this.y[i], s),
                        e) {
                            let t = Pi();
                            Yi(t, this.b, [0, 0, 0]),
                            ji(this.y[i], this.y[i], t)
                        }
                        r && qi(this.y[i], this.y[i], this.w),
                        qi(this.y[i], this.y[i], _i(-.5, -.5, 0))
                    }
                }
                )),
                this.d) {
                    (this.n[3] < 1 ? this.E : this.j).a = this.o()
                }
            }
        }
        i(t, e) {
            if (!this.j)
                return;
            const i = this.u.aM.f();
            if (e)
                i.b(this.e);
            else {
                const e = this.j.b.b() <= Qr.GxBlend_AlphaKey
                  , r = null != this.u.gradientEffect
                  , s = this.n[3] < 1;
                t && e && (s || r) ? (i.b(this.e),
                i.b(this.E)) : (!t && e || t && !e) && i.b(this.j)
            }
        }
        f(t, e) {
            const i = this
              , r = t && i.B.c < 2 ? Qr.GxBlend_Alpha : i.B.c
              , s = [0, 1, 2, 10, 3, 4, 5, 13]
              , n = s[r]
              , a = this.u.aM
              , o = this.u
              , h = Object.assign(Object.assign({}, this.u.aE), this.u.I);
            for (let t = 0; t < this.l.length; t++)
                h["uTextureMatrix" + (t + 1).toString()] = this.y[t];
            h.uColor = this.n,
            h.uTexSampleAlpha = this.h,
            h.uBlendMode = n,
            h.uHasSpecEmiss = o.av[0] && o.av[1],
            h.uHasEmissiveGlowing = o.P,
            h.uUnlit = this.x ? 1 : 0,
            this.u.gradientEffect && (h.u_mulLum_OpaqMat = [0, 1, 0, 0]);
            let l = !this.u.ab;
            const u = a.k(this.u.W, new cn(i.r,l,s[r],!0,!i.k,e ? 0 : 15), new ur(this.c,i.s(),h,null != this.u.gradientEffect && r <= 2));
            return a.e(new fn(o.aj,2 * i.q.k,i.q.h), u, this.v.k, this.v.d)
        }
        t() {
            return this.p
        }
        s() {
            const t = []
              , e = this.u;
            return this.p.forEach(( (i, r) => {
                let s = null;
                i && (-1e3 == this.c ? e.av ? (s = e.av[r],
                s || (s = {
                    h: null,
                    f: !1
                })) : s = {
                    h: null,
                    f: !1
                } : s = 0 == i.c.a ? i.b : i.c.a > 0 && this.u.A[i.c.a] ? this.u.A[i.c.a] : {
                    h: null,
                    f: !1
                },
                s || (this.p[r].e || (WH.debug("can't find texture for material", r, "type", this.p[r].type, "index", this.p[r].a),
                this.p[r].e = !0),
                s = {
                    h: this.u.U.greenPixelTexture
                })),
                t[r] = s
            }
            )),
            t
        }
        get show() {
            return this.F
        }
        set show(t) {
            this.F = t
        }
        get meshId() {
            return this.z
        }
        D() {
            this.u = null,
            this.q = null,
            this.B = null,
            this.p = null,
            this.l = null,
            this.C = null,
            this.g = null,
            this.n = null,
            this.y = null,
            this.w = null,
            this.b = null
        }
    }
    ;
    class cl {
        constructor(t, e) {
            this.c = e,
            this.a = t,
            this.b = null,
            this.e = !1
        }
        d() {
            this.b && this.b.c(),
            this.b = null
        }
        f(t) {
            0 != this.c.b && (this.b || (this.b = t.getTexture(this.c.b)))
        }
        get type() {
            return this.c.a
        }
    }
    const fl = function(t, e) {
        const i = Math.abs(t)
          , r = Math.abs(e);
        return Number((i - Math.floor(i / r) * r).toPrecision(8)) * Math.sign(t)
    }
      , dl = "DressingRoom"
      , gl = "Stand";
    class bl {
        constructor() {
            this.c = null,
            this.b = -1,
            this.a = Pi(),
            this.d = 1
        }
    }
    class _l {
        constructor(t, e, i) {
            this.U = t,
            this.aM = e,
            this.C = i,
            this.r = !1,
            this.aq = [],
            this.ab = !1,
            this.R = !0,
            this.ao = !0,
            this.as = !1,
            this.ay = !1,
            this.aw = new js,
            this.s = null,
            this.aB = 0,
            this.aK = null,
            this.aL = null,
            this.A = {},
            this.av = [],
            this.P = !1,
            this.aG = !1,
            this.v = 1,
            this.L = gi(),
            this.X = gi(),
            this.a = null,
            this.M = null,
            this.ae = new Set,
            this.aj = null,
            this.Q = Pi(),
            this.S = Pi(),
            this.y = Pi(),
            this.n = Pi(),
            this.ag = Er(1, 1, 1, 1),
            this.N = null,
            this.I = {},
            this.m = -1,
            this.at = !1,
            this.ah = Pi(),
            this.G = gi(),
            this.d = gi(),
            this.B = Ar(),
            this.aD = Ar(),
            this.c = !1,
            this.q = null,
            this.D = [],
            this.aw.a = 0,
            this.aw.d.d = -1,
            this.l(i)
        }
        F(t) {
            this.D.push(t)
        }
        l(t) {
            const e = this.U.options.contentPath + "mo3/" + t + ".mo3";
            model.onBeforeLoadSource();
            $.ajax({
                url: e,
                type: "GET",
                dataType: "binary",
                responseType: "arraybuffer",
                processData: !1,
                renderer: this.U,
                success: t => {
                    this.j(t);
                    model.onLoadedSource();
                }
                ,
                error: function(t, e, i) {
                    console.log(i)
                }
            })
        }
        j(t) {
            this.ar = new ll(t),
            this.aJ()
        }
        h(t) {
            this.v = t
        }
        aJ() {
            const t = this.ar
              , e = t.e.length
              , i = t.w.length
              , r = t.F.length
              , s = t.a.length
              , n = t.l.length;
            this.aq = new Array(r);
            for (let t = 0; t < r; ++t)
                this.aq[t] = 0;
            if (i > 0) {
                this.af = new Array(i);
                for (let e = 0; e < i; e++)
                    this.af[e] = new sn(this,e,t.w[e]);
                this.aA = new Array(i);
                for (let e = 0; e < i; e++) {
                    this.aA[e] = [];
                    for (let r = 0; r < i; r++)
                        t.w[r].d == e && this.aA[e].push(r)
                }
            }
            this.e = new Array;
            for (let i = 0; i < e; i++)
                this.e[i] = new cl(i,t.e[i]),
                this.e[i].f(this.U);
            this.t = new Array(s);
            for (let e = 0; e < s; e++)
                this.t[e] = new xn(this,t.a[e]),
                t.r && t.r.length && e < t.r.length && this.t[e].w(t.r[e]);
            this.Z = new Array(n);
            for (let e = 0; e < n; e++)
                this.Z[e] = new En(this,t.l[e]);
            if (this.s && this.an(this.s),
            t.k) {
                const e = t.k.length;
                this.ac = new Array(e);
                for (let i = 0; i < e; ++i)
                    this.ac[i] = new ul(t.k[i]),
                    this.ac[i].m(this);
                this.w = this.ac.concat()
            }
            this.ar.h && t.z && (this.a = this.aM.b(t.h),
            this.M = this.aM.d(t.z.length),
            this.aj = this.aM.c(this.a, this.M),
            this.M.a(new Uint16Array(t.z))),
            this.W = this.aM.i(t.w.length, t.d.length, t.m.length, t.J.length),
            this.aE = {
                uInvTranspViewModelMat: this.n,
                uModelMatrix: this.Q,
                uDiffuseColor: this.ag
            },
            this.E("Stand");
            for (let t of this.D)
                t();
            this.D = [],
            mi(this.d, this.v, this.v, this.v),
            Gi(this.Q),
            this.c && Wi(this.Q, this.Q, Math.PI / 2),
            Vi(this.Q, this.Q, this.d),
            this.U.doUpdateBounds = !0,
            this.r = !0
        }
        k() {
            this.c = !0
        }
        p(t) {
            const e = this.ar;
            return e && e.v && t > -1 && t < e.v.length ? e.v[t].m : t == e.v.length ? dl : ""
        }
        Y() {
            this.E(gl)
        }
        get isMirrored() {
            return this.ap
        }
        set isMirrored(t) {
            this.aG = this.ap != t,
            this.ap = t
        }
        aO(t, e, i, r=1) {
            null != t || null != i ? (this.q || (this.q = new bl),
            this.q.c = t,
            this.q.b = e,
            i ? zi(this.q.a, i) : Gi(this.q.a),
            this.q.d = r,
            this.U.doUpdateBounds = !0) : this.q = null
        }
        ai() {
            this.U.context;
            this.ar.h && this.ar.z && this.m != this.U.currFrame && (this.a && this.a.ba(this.af, this.ae),
            this.W.b(this.af),
            this.m = this.U.currFrame)
        }
        u(t, e, i) {
            const r = [_i(t[0], t[1], t[2]), _i(t[0], t[1], e[2]), _i(t[0], e[1], t[2]), _i(t[0], e[1], e[2]), _i(e[0], t[1], t[2]), _i(e[0], t[1], e[2]), _i(e[0], e[1], t[2]), _i(e[0], e[1], e[2])].map((t => {
                const e = gi();
                return Di(e, t, i),
                e
            }
            ))
              , s = _i(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)
              , n = _i(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
            return r.forEach((t => {
                wi(s, s, t),
                yi(n, n, t)
            }
            )),
            [s, n]
        }
        i() {
            var t, e, i, r, s, n;
            if (!this.ac)
                return null;
            let a = this.L
              , o = this.X;
            return mi(a, 9999, 9999, 999),
            mi(o, -9999, -9999, -9999),
            wi(a, a, null === (i = null === (e = null === (t = this.aw) || void 0 === t ? void 0 : t.d) || void 0 === e ? void 0 : e.c) || void 0 === i ? void 0 : i.c),
            yi(o, o, null === (n = null === (s = null === (r = this.aw) || void 0 === r ? void 0 : r.d) || void 0 === s ? void 0 : s.c) || void 0 === n ? void 0 : n.i),
            this.u(a, o, this.Q)
        }
        z() {
            const t = this.ar;
            if (!this.r)
                return;
            if (this.q) {
                mi(this.d, this.v, this.v, this.v);
                const t = this.q.c
                  , r = this.q;
                if (!t.r)
                    return;
                Ai(this.d, this.d, r.d),
                e = this.Q,
                i = this.d,
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
                ji(this.Q, r.a, this.Q),
                r.b >= 0 && r.b < t.af.length && ji(this.Q, t.af[r.b].k, this.Q),
                ji(this.Q, t.Q, this.Q)
            }
            var e, i;
            ji(this.S, this.U.viewMatrix, this.Q),
            Hi(this.y, this.S),
            Li(this.n, this.y),
            this.gradientEffect && this.aC();
            let r = 1e3 * this.U.delta;
            if (!this.as && this.aw.d.d > -1) {
                let e = r;
                for (let i = 0; i < this.aq.length; i++)
                    this.aq[i] += e,
                    t.F[i] > 0 && (this.aq[i] %= t.F[i]);
                this.V(this.aw, e)
            }
            let s = this.ac ? this.ac.length : 0;
            this.ae.clear();
            for (let t = 0; t < s; ++t) {
                let e = this.ac[t];
                if (!e.show)
                    continue;
                let i = e.q.h
                  , r = e.q.k;
                for (let t = 0; t < i; ++t)
                    this.ae.add(this.ar.z[r + t])
            }
            let n = t.w.length;
            if (this.af) {
                for (let t = 0; t < n; ++t)
                    this.af[t].q = !1;
                for (let t = 0; t < n; ++t)
                    this.af[t].w(r);
                this.ai()
            }
            if (this.ac && this.ac.forEach((t => t.a())),
            this.w && this.w.sort((function(t, e) {
                return t.v.d != e.v.d ? t.v.d - e.v.d : t.meshId - e.meshId
            }
            )),
            this.aG = !1,
            this.t && this.R)
                for (let t = 0; t < this.t.length; ++t)
                    this.t[t].S(this.aw, this.U.delta);
            if (this.Z && this.ao)
                for (let t = 0; t < this.Z.length; ++t)
                    this.Z[t].C(this.aw, this.U.delta),
                    this.Z[t].B()
        }
        T(t, e) {
            this.A[t] = e,
            this.aG = !0
        }
        o(t, e, i) {
            this.av = [t, e, i],
            this.aG = !0
        }
        J(t) {
            this.P = t
        }
        ad(t) {
            this.ay = !!t
        }
        O(t) {
            this.R = !!t
        }
        aH(t) {
            this.ao = !!t
        }
        b(t, e) {
            const i = this;
            if (!i.r)
                return;
            let r = 100 * e
              , s = r + ss[e] + t
              , n = i.ac.some((t => t.meshId == s));
            s = n ? s : 100 * e + 1,
            i.H(r, r + 99, !1),
            i.H(s, s, !0)
        }
        H(t, e, i) {
            const r = this.ar;
            if (!this.ac || 0 == this.ac.length)
                return !1;
            for (let r = 0; r < this.ac.length; ++r) {
                const s = this.ac[r];
                s.meshId >= t && s.meshId <= e && (s.show = i)
            }
            if (r.A && r.A.length > 0)
                for (let s = 0; s < r.A.length; ++s) {
                    let n = r.A[s];
                    n >= t && n <= e && (this.t[s].m = i)
                }
            return !0
        }
        au(t, e) {
            if (!this.ac)
                return;
            const i = e + 1;
            let r = t > 0 ? e + t : -2 == t ? e + 0 : i
              , s = this.ac.some((t => t.meshId == r));
            r = s || -2 == t ? r : i,
            this.H(r, r, !0)
        }
        ak(t) {
            this.as = t
        }
        aa(t) {
            this.ar.v && (this.aN(t, this.aw),
            this.aw.f = !1,
            this.aw.d.e = !1,
            this.aw.d.a = 0)
        }
        V(t, e) {
            const i = this.ar;
            if (t.d.a += e,
            t.b.d < 0 && !this.ay && !t.f)
                if (t.d.c.g > -1) {
                    let e = 32767 * Math.random()
                      , r = 0
                      , s = t.d.d
                      , n = i.v[s];
                    for (r += n.j; r < e && n.g > -1; )
                        s = n.g,
                        n = i.v[s],
                        r += n.j;
                    t.b.d = s,
                    t.b.c = i.v[s],
                    t.b.a = 0
                } else {
                    let e = i.v.find((e => e.h == t.d.c.h && 0 == e.f));
                    e && (t.b.d = e.l,
                    t.b.c = e,
                    t.b.a = 0)
                }
            let r = t.d
              , s = t.b
              , n = r.c.b - r.a
              , a = 0
              , o = null;
            if (s.d > -1 && (o = i.v[s.d],
            a = o.d),
            a > 0 && n < a ? (s.a = fl(a - n, o.b),
            t.a = n / a) : t.a = 1,
            t.c > 0) {
                let i = e / 1e3;
                t.e.a += e,
                t.c -= i / this.U.crossFadeDuration
            }
            if (r.a >= r.c.b)
                if (s.d > -1 && !r.e) {
                    if (s.d > -1)
                        for (; 0 == (32 & i.v[s.d].k) && (64 & i.v[s.d].k) > 0 && (s.d = i.v[s.d].l,
                        s.c = i.v[s.d],
                        !(s.d < 0)); )
                            ;
                    t.d = s,
                    t.b = new Hs,
                    t.a = 1
                } else
                    r.c.b > 0 && (r.a = fl(r.a, r.c.b))
        }
        E(t, e=!0) {
            this.aN(t, this.aw, e)
        }
        aN(t, e, i=!0) {
            const r = this.ar;
            let s = !1
              , n = !1;
            const a = t == dl;
            a && (t = gl,
            this.ad(!0));
            for (let o = 0; o < r.v.length; ++o) {
                const h = r.v[o];
                if (h.m && (h.m == t && 0 == h.f)) {
                    s = !0,
                    i && null != e.d && (null != e.e && (e.c = 1),
                    e.e = new Hs,
                    e.e.d = e.d.d,
                    e.e.c = e.d.c,
                    e.e.a = e.d.a),
                    n = e.d.d != o,
                    e.d.d = o,
                    e.d.c = h,
                    e.d.a = 0,
                    e.b = new Hs,
                    e.a = 0,
                    e.f = a,
                    WH.debug("Set animation to", h.h, h.m);
                    break
                }
            }
            return t == gl || s ? n : this.aN(gl, e)
        }
        al(t) {
            this.at = t
        }
        g(t) {
            const e = this.ar;
            let i = null;
            if (!e.C || !e.C.length)
                return null;
            if (t < e.C.length)
                i = e.I[e.C[t]];
            else
                for (let t = 0; t < e.C.length; t++) {
                    const r = e.C[t];
                    if (-1 != r) {
                        i = e.I[r];
                        break
                    }
                }
            return i
        }
        get gradientEffect() {
            return this.N
        }
        set gradientEffect(t) {
            this.aG = !0,
            this.N = t,
            this.ax()
        }
        am(t) {
            if (this.q) {
                if (!this.q.c.r)
                    return
            }
            if (this.a && this.w)
                if (this.gradientEffect) {
                    if (t)
                        for (let t = 0; t < this.w.length; ++t)
                            this.w[t].show && this.w[t].i(!1, !0);
                    for (let e = 0; e < this.w.length; ++e)
                        this.w[e].show && this.w[e].i(t, !1)
                } else
                    for (let e = 0; e < this.w.length; ++e)
                        this.w[e].show && this.w[e].i(t, !1);
            if (this.t && this.R)
                for (let e = 0; e < this.t.length; ++e)
                    this.t[e].I(t);
            if (this.Z && this.ao)
                for (let e = 0; e < this.Z.length; ++e)
                    this.Z[e].k(t)
        }
        az(t) {
            if (this.aB == t)
                return;
            if (this.r)
                for (let t = 0; t < this.af.length; t++)
                    this.af[t].n = null;
            if (this.aB = t,
            t <= 0)
                return;
            let e = this.U.options.contentPath + "bone/" + t + ".bone"
              , i = this;
            $.ajax({
                url: e,
                type: "GET",
                dataType: "binary",
                responseType: "arraybuffer",
                processData: !1,
                renderer: this.U,
                success: function(t) {
                    i.f(t)
                },
                error: function(t, e, i) {
                    console.log(i)
                }
            })
        }
        f(t) {
            let e = new Bn(t);
            e.getInt32();
            for (; e.position < e.buffer.byteLength; ) {
                let t = String.fromCharCode(e.getUint8(), e.getUint8(), e.getUint8(), e.getUint8())
                  , i = e.getUint32();
                if ("BIDA" == t) {
                    let t = i / 2;
                    this.aK = new Array(t);
                    for (let i = 0; i < t; i++)
                        this.aK[i] = e.getUint16()
                }
                if ("BOMT" == t) {
                    let t = i / 64;
                    this.aL = new Array(t);
                    for (let i = 0; i < t; i++) {
                        let t = Ni(e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat());
                        this.aL[i] = t
                    }
                }
            }
            this.r && this.aI()
        }
        aI() {
            if (!(this.aB <= 0) && this.aK && this.aK.length)
                for (let t = 0; t < this.aK.length; t++)
                    this.af[this.aK[t]].n = this.aL[t]
        }
        ax() {
            if (!this.gradientEffect)
                return;
            const t = this.gradientEffect
              , e = this.I;
            e.u_gradGradientColors_0 = [...t.Colors0, 0],
            e.u_gradGradientColors_1 = [...t.Colors1, 0],
            e.u_gradGradientColors_2 = [...t.Colors2, t.Alpha[0]],
            e.u_gradEdgeColor = [...t.EdgeColor, t.Alpha[1]],
            e.u_gradBoundingBox = [this.B[0], this.B[1], this.B[2], 1 / (this.X[2] - this.L[2])],
            e.u_gradUpVec = [this.d[0], this.d[1], this.d[2], 0],
            e.u_gradFlags = [(1 & t.gradFlags) > 0 ? 1 : 0, .7, (4 & t.gradFlags) > 0 ? 1 : 0, (8 & t.gradFlags) > 0 ? 1 : 0]
        }
        aC() {
            if (!this.gradientEffect)
                return;
            this.gradientEffect;
            const t = this.I;
            Cr(this.B, this.L[2], this.L[2], this.L[2], 1),
            Ur(this.B, this.B, this.S),
            Cr(this.aD, 0, 0, 1, 0),
            Ur(this.aD, this.aD, this.n),
            mi(this.d, this.aD[0], this.aD[1], this.aD[2]),
            Si(this.d, this.d),
            t.u_gradBoundingBox[0] = this.B[0],
            t.u_gradBoundingBox[1] = this.B[1],
            t.u_gradBoundingBox[2] = this.B[2],
            t.u_gradBoundingBox[3] = 1 / (this.X[2] - this.L[2]),
            t.u_gradUpVec[0] = this.d[0],
            t.u_gradUpVec[1] = this.d[1],
            t.u_gradUpVec[2] = this.d[2]
        }
        x(t) {
            let e = Cs();
            if (Ss(e, t),
            this.t)
                for (let i = 0; i < this.t.length; i++)
                    this.t[i].T(t, e);
            if (this.Z)
                for (let e = 0; e < this.Z.length; e++)
                    this.Z[e].D(t)
        }
        aF() {
            return this.q
        }
        an(t) {
            if (this.t)
                for (let e = 0; e < this.t.length; e++)
                    this.t[e].u(t);
            this.s = t
        }
    }
    class pl {
        static c(t, e, i) {
            const r = ds[e];
            if (r) {
                const e = i ? 4 : 0;
                return r.slice(2 * t + e, 2 * t + e + 2)
            }
        }
        static a(t, e, i, r) {
            let s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
                let f = 1;
                if (i > 0 && h == i)
                    f = 0;
                else if (h > 0)
                    continue;
                let d = 1;
                if (r > 0 && l == r)
                    d = 0;
                else if (l > 0)
                    continue;
                s[u + 3 * (d + 2 * (c + f))] = a.FileDataId
            }
            for (let t = 0; t < 2; t++)
                for (let e = 0; e < 2; e++)
                    for (let i = 0; i < 2; i++) {
                        let r = 3 * (t + 2 * (e + 2 * i));
                        if (s[r] > 0) {
                            let t;
                            return t = {
                                b: s[r],
                                c: s[r + 1],
                                a: s[r + 2]
                            },
                            t
                        }
                    }
            const n = pl.c(e, r, !0);
            return n && 0 != n[0] ? (r = n[0],
            e = n[1],
            pl.a(t, e, i, r)) : null
        }
        static b(t, e, i, r, s) {
            let n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let a = 0; a < t.length; a++) {
                let o = t[a]
                  , h = o.Gender
                  , l = o.Class
                  , u = o.Race
                  , c = o.ExtraData
                  , f = 0;
                if (i > 1 || h != i) {
                    if (h < 2)
                        continue;
                    f = 0
                } else
                    f = 2;
                let d = 1;
                if (r > 0 && l == r)
                    d = 0;
                else if (l > 0)
                    continue;
                let g = 1;
                if (s > 0 && u == s)
                    g = 0;
                else if (u > 0)
                    continue;
                let b = 1;
                if (-1 == e || c != e) {
                    if (-1 != c && -1 != e)
                        continue
                } else
                    b = 0;
                n[b + 2 * (g + 2 * (f + d))] = o.FileDataId
            }
            for (let t = 0; t < 2; t++)
                for (let e = 0; e < 2; e++)
                    for (let i = 0; i < 2; i++)
                        for (let r = 0; r < 2; r++) {
                            let s = r + 2 * (t + 2 * (e + 2 * i));
                            if (n[s])
                                return n[s]
                        }
            const a = pl.c(i, s, !1);
            return a && 0 != a[0] ? (s = a[0],
            i = a[1],
            pl.b(t, e, i, r, s)) : 0
        }
    }
    class ml {
        constructor() {
            this.c = !1,
            this.g = []
        }
        get loaded() {
            let t = !!this.f && this.f.r;
            if (t && this.g.length > 0) {
                for (let t of this.g)
                    t();
                this.g = []
            }
            return t
        }
        isLoaded() {
            return this.loaded
        }
        d(t) {
            this.g.push(t)
        }
        a() {
            return this.f
        }
        b(t) {
            t.c(this.f, this.c)
        }
        getNumAnimations() {
            var t;
            return (null === (t = this.f) || void 0 === t ? void 0 : t.r) ? this.f.ar.v.length : 0
        }
        getAnimation(t) {
            var e;
            return (null === (e = this.f) || void 0 === e ? void 0 : e.r) ? this.f.p(t) : ""
        }
        resetAnimation() {
            var t;
            if (null === (t = this.f) || void 0 === t ? void 0 : t.r)
                return this.f.Y()
        }
        setAnimPaused(t) {
            var e;
            if (null === (e = this.f) || void 0 === e ? void 0 : e.r)
                return this.f.ak(t)
        }
        setTPose(t) {
            var e;
            if (null === (e = this.f) || void 0 === e ? void 0 : e.r)
                return this.f.al(t)
        }
        setAnimation(t, e) {
            var i;
            (null === (i = this.f) || void 0 === i ? void 0 : i.r) && this.f.E(t, !!e)
        }
        setParticlesEnabled(t) {
            var e;
            (null === (e = this.f) || void 0 === e ? void 0 : e.r) && this.f.O(t)
        }
        setRibbonsEnabled(t) {
            var e;
            (null === (e = this.f) || void 0 === e ? void 0 : e.r) && this.f.aH(t)
        }
        getTexUnits() {
            var t;
            return (null === (t = this.f) || void 0 === t ? void 0 : t.r) ? this.f.ac : null
        }
        setAnimNoSubAnim(t) {
            this.f && this.f.ad(t)
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
    class vl extends ml {
        constructor(t, e, i, r, s, n) {
            super(),
            this.k = t,
            this.hg = e,
            this.i = i,
            this.j = r,
            this.dc = s,
            this.c = n
        }
        get fileDataId() {
            return this.f ? this.f.C : 0
        }
        get modelInstance() {
            return this.f
        }
        fe(t, e, i) {
            this.f && this.f.aO(t, e, i)
        }
        ba(t, e) {
            this.f && this.f.b(t, e)
        }
        l(t, e, i) {
            this.f && this.f.H(t, e, i)
        }
        setParticlesEnabled(t) {
            this.f && this.f.O(t)
        }
        get winding() {
            return !!this.f && this.f.ab
        }
        set winding(t) {
            this.f && (this.f.ab = t)
        }
        get isMirrored() {
            return !!this.f && this.f.isMirrored
        }
        set isMirrored(t) {
            this.f && (this.f.isMirrored = t)
        }
        getBounds() {
            return this.modelInstance.r ? this.modelInstance.i() : [null, null]
        }
        e() {
            this.f && this.f.z()
        }
        h(t) {
            this.f && this.f.am(t)
        }
    }
    class xl extends vl {
        constructor(t, e, i, r) {
            if (super(t, null, 0, 0, 0, r),
            this.f = new _l(t,t.renderer,e),
            i)
                for (let e in i)
                    0 != i[e] && this.f.T(+e, t.getTexture(i[e]))
        }
    }
    class Tl {
        constructor() {
            this.c = !1
        }
    }
    const wl = class {
        constructor(t, e) {
            this.m = t,
            this.n = [],
            this.k = !1,
            this.g = !1,
            this.h = e
        }
        c(t) {
            for (let e = 0; e < this.h.length; e++)
                this.n[e] && this.n[e].b && this.n[e].b.loaded && this.n[e].b.a().E(t)
        }
        i(t) {
            this.k = t
        }
        b() {
            if (this.m.loaded)
                for (let t = 0; t < this.h.length; t++)
                    switch (this.h[t].EffectType) {
                    case 1:
                        this.f(t);
                        break;
                    case 2:
                        this.j(t);
                        break;
                    case 6:
                    case 7:
                    case 11:
                    case 12:
                    case 13:
                        break;
                    case 16:
                        this.e(t)
                    }
        }
        f(t) {
            let e = this.m.a();
            if (1 == this.h[t].ProcEffectType) {
                let i = this.h[t].Value[0];
                e.ag = Er((i >> 16 & 255) / 255, (i >> 8 & 255) / 255, (255 & i) / 255, e.ag[3])
            } else if (14 == this.h[t].ProcEffectType) {
                let i = Math.min(Math.max(this.h[t].Value[0], 0), 1);
                e.ag[3] = i
            } else if (22 == this.h[t].ProcEffectType) {
                let i = this.h[t].Value[3];
                e.ag = Er((i >> 16 & 255) / 255, (i >> 8 & 255) / 255, (255 & i) / 255, e.ag[3])
            }
        }
        j(t) {
            if (!this.m)
                return;
            if (!this.m.loaded)
                return;
            let e = this.m.a();
            if (!this.n[t]) {
                const i = new Tl;
                if (this.n[t] = i,
                0 == this.h[t].ModelType) {
                    const r = new xl(e.U,this.h[t].Model,{
                        2: this.h[t].Texture
                    },!1);
                    i.b = r
                } else
                    1 == this.h[t].ModelType || 2 == this.h[t].ModelType && Ll.b(e.U, as.NPC, this.h[t].Model).then((t => {
                        i.b = t
                    }
                    ))
            }
            const i = this.n[t];
            if (!i.c) {
                if (!i.b && !i.a)
                    return;
                if (i.b && !i.b.loaded)
                    return;
                if (i.a && !i.a.r)
                    return;
                let _ = this.h[t].AttachmentID;
                this.h[t].Positioner > -1 && (_ = this.h[t].Positioner),
                _ < 0 && (_ = 19);
                let p = e.g(_);
                const m = p ? p.d : -1;
                let v = Pi();
                if (p) {
                    let t = p.a;
                    qi(v, v, _i(t[0], t[1], t[2]))
                }
                if (qi(v, v, _i(this.h[t].Offset[0], -this.h[t].Offset[1], this.h[t].Offset[2])),
                Wi(v, v, -this.h[t].Yaw),
                r = v,
                s = v,
                n = this.h[t].Pitch,
                a = Math.sin(n),
                o = Math.cos(n),
                h = s[0],
                l = s[1],
                u = s[2],
                c = s[3],
                f = s[8],
                d = s[9],
                g = s[10],
                b = s[11],
                s !== r && (r[4] = s[4],
                r[5] = s[5],
                r[6] = s[6],
                r[7] = s[7],
                r[12] = s[12],
                r[13] = s[13],
                r[14] = s[14],
                r[15] = s[15]),
                r[0] = h * o - f * a,
                r[1] = l * o - d * a,
                r[2] = u * o - g * a,
                r[3] = c * o - b * a,
                r[8] = h * a + f * o,
                r[9] = l * a + d * o,
                r[10] = u * a + g * o,
                r[11] = c * a + b * o,
                Xi(v, v, this.h[t].Roll),
                Vi(v, v, [this.h[t].Scale1, this.h[t].Scale1, this.h[t].Scale1]),
                Vi(v, v, [this.h[t].Scale2, this.h[t].Scale2, this.h[t].Scale2]),
                i.b) {
                    const e = i.b.a();
                    e.ak(this.k),
                    this.h[t].ModelAlpha && (e.ag[3] = this.h[t].ModelAlpha),
                    e.aO(this.m.a(), m, v)
                }
                this.n[t].c = !0
            }
            var r, s, n, a, o, h, l, u, c, f, d, g, b;
            this.n[t].b && this.n[t].b.e(),
            this.n[t].a && this.n[t].a.g()
        }
        e(t) {
            const e = this.m.a();
            e.gradientEffect || (e.gradientEffect = this.h[t])
        }
        a(t) {
            for (const e of this.n)
                e && e.c && (e.b && e.b.h(t),
                e.a && e.a.s(t))
        }
        d() {
            for (const t of this.n)
                t && (t.c = !1,
                t.b && t.b.loaded && t.b.a().aO(null, -1, null),
                t.a && t.a && t.a.m())
        }
        l(t) {
            this.n.forEach((e => {
                e.b && e.b.b(t),
                e.a && e.a.t(t)
            }
            ))
        }
    }
    ;
    class yl extends ml {
        constructor(t, e) {
            super(),
            this.ba = t,
            this.i = e,
            this.C = !1,
            this.u = !1,
            this.o = !1,
            this.x = -1,
            this.fe = -1,
            this.m = [],
            this.l = {},
            this.q = [],
            this.k = !1,
            this.hg = null,
            this.v = 0,
            this.j(e)
        }
        j(t) {
            if (this.k)
                return;
            this.ba.options;
            if (t.StateKit && this.q.push(new wl(this,t.StateKit.effects)),
            t.Creature && (this.hg = t.Creature.CreatureGeosetData,
            this.v = t.Creature.CreatureGeosetDataID),
            t.Model && (this.f = new _l(this.ba,this.ba.renderer,t.Model),
            this.f.k(),
            t.Creature && t.Creature.ParticleColor && this.f.an(t.Creature.ParticleColor),
            t.Scale && this.f.h(t.Scale)),
            this.i.Creature && this.i.Creature.Texture && (this.p = this.s(-1, pl.a(this.i.TextureFiles[this.i.Creature.Texture], 3, 0, 0)),
            this.f.o(this.p.d, this.p.b, this.p.e)),
            t.Textures)
                for (let e in t.Textures)
                    0 != t.Textures[e] && this.f.T(+e, this.ba.getTexture(t.Textures[e]));
            this.o = !0,
            this.n()
        }
        s(t, e) {
            let i = new ms;
            return e.b > 0 && (i.d = this.ba.getTexture(e.b)),
            e.c > 0 && (i.b = this.ba.getTexture(e.c)),
            e.a > 0 && (i.e = this.ba.getTexture(e.a)),
            i
        }
        n() {
            this.k || (this.o = !0,
            this.p || (this.u = !0))
        }
        B(t) {
            this.r = null,
            t <= 0 || (this.C = !1,
            Ll.b(this.ba, as.NPC, t).then((t => {
                t instanceof yl && (this.r = t)
            }
            )))
        }
        dc() {
            this.f,
            this.r
        }
        setAnimation(t, e=!0) {
            this.r && (this.r.setAnimation(t),
            t = "Mount"),
            this.f ? this.f.E(t, e) : this.d(( () => {
                var i;
                null === (i = this.f) || void 0 === i || i.E(t, e)
            }
            ))
        }
        y() {
            const t = this.f;
            if (t.H(0, 0, !0),
            0 != this.v && (t.H(1, 1699, !1),
            this.hg))
                for (let e of this.hg) {
                    let i = 100 * (e.GeosetIndex + 1)
                      , r = i + e.GeosetValue;
                    t.H(i, i + 99, !1),
                    t.H(r, r, !0)
                }
        }
        w() {
            this.y()
        }
        t() {
            const t = this.f;
            t.r && this.o && t.ac && 0 != t.ac.length && (this.w(),
            this.o = !1)
        }
        setParticlesEnabled(t) {
            this.f && this.f.O(t)
        }
        getBounds() {
            if (this.f && this.f.r) {
                const [t,e] = this.f.i();
                if (this.r && this.r.loaded && this.C) {
                    const [i,r] = this.r.getBounds();
                    yi(i, i, _i(0, 0, 0)),
                    wi(t, t, i),
                    yi(e, e, r)
                }
                return [t, e]
            }
            return [null, null]
        }
        e() {
            if (!this.k && this.loaded) {
                if (!this.C && this.f && this.r && this.r.loaded) {
                    const t = this.r.f.ar
                      , e = t.I[t.C[0]]
                      , i = Pi();
                    qi(i, i, e.a),
                    this.f.aO(this.r.f, e.d, i, 1 / this.r.f.v),
                    this.f.E("Mount", !1),
                    this.C = !0
                }
                this.A && this.A.e(),
                this.r && this.r.e(),
                this.q && this.q.forEach((t => t.b())),
                this.t(),
                this.f.z()
            }
        }
        h(t) {
            this.f.am(t),
            this.r && this.r.h(t),
            this.q && this.q.forEach((e => e.a(t)))
        }
        b(t) {
            super.b(t),
            this.r && this.r.b(t),
            this.A && this.A.b(t),
            this.q && this.q.forEach((e => e.l(t)))
        }
    }
    function Al(t) {
        return new Promise(( (e, i) => {
            $.getJSON(t).done((function(t) {
                e(t)
            }
            )).fail((function(t, e, r) {
                let s = e + ", " + r;
                console.log("Error loading metadata: " + s),
                i(e)
            }
            ))
        }
        ))
    }
    function El(t, e, i) {
        let r;
        return e == as.HELM ? Ml(t, 1, i) : e == as.SHOULDER ? Ml(t, 3, i) : e == as.ITEM ? Ml(t, -1, i) : (e == as.NPC || e == as.HUMANOIDNPC ? r = "meta/npc/" : e == as.OBJECT ? r = "meta/object/" : e == as.CHARACTER ? r = "meta/character/" : e == as.ITEMVISUAL && (r = "meta/itemvisual/"),
        Al(t + r + i + ".json"))
    }
    function Ml(t, e, i) {
        let r = "meta/item/";
        return 1 != e && 3 != e && 4 != e && 5 != e && 6 != e && 7 != e && 8 != e && 9 != e && 10 != e && 16 != e && 19 != e && 20 != e || (r = "meta/armor/" + e + "/"),
        Al(t + r + i + ".json")
    }
    class Cl {
        constructor() {
            this.a = null,
            this.d = 1,
            this.c = 0,
            this.e = -1,
            this.b = !1
        }
    }
    class Sl {
        constructor(t, e) {
            this.a = t,
            this.b = e
        }
    }
    class kl extends Cl {
        constructor() {
            super(...arguments),
            this.ba = []
        }
    }
    class Fl {
        constructor(t, e) {
            this.a = t,
            this.b = e
        }
    }
    function Il(t, e) {
        return t == e || !!t && (!!e && (t.b == e.b && (t.a == e.a || !!t.a && (!!e.a && (t.a.b == e.a.b && (t.a.a == e.a.a && t.a.c == e.a.c))))))
    }
    class Dl {
        constructor(t, e) {
            this.a = t,
            this.e = [],
            this.b = e,
            this.f = {},
            this.j = {}
        }
        h() {
            const t = [];
            for (let e of this.b.Options)
                for (let i of e.Choices)
                    for (let e of i.Elements)
                        e.SkinnedModel && t.push(e.SkinnedModel.CollectionFileDataID);
            const e = new Set(t)
              , i = this.a.ba;
            i.renderer;
            if (0 != e.size)
                for (let t of e) {
                    const e = new kl;
                    e.a = new xl(i,t,{},!0),
                    this.a.gf[t] = e
                }
        }
        d(t) {
            return pl.a(this.b.TextureFiles[t], this.a.E, this.a.O, this.a.kj)
        }
        g(t) {
            WH.debug("applyCustomization options", t),
            this.e = [],
            this.a.m = [];
            for (const t in this.a.gf) {
                this.a.gf[t].ba = []
            }
            let e = 0
              , i = {}
              , r = {};
            for (let s = 0; s < t.length; s++) {
                let n = this.b.Options.find((e => e.Id == t[s].optionId));
                if (WH.debug("option", n),
                n) {
                    let a = n.Choices.find((e => e.Id == t[s].choiceId));
                    if (WH.debug("choice", a),
                    a) {
                        let s = a.Elements.filter((e => e.BoneSet && e.BoneSet.BoneFileDataID && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID)))));
                        s.length > 0 && (e = s[0].BoneSet.BoneFileDataID);
                        let o = a.Elements.filter((e => e.Material && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID)))));
                        o.sort(( (t, e) => e.VariationChoiceID - t.VariationChoiceID)),
                        o.forEach((t => {
                            WH.debug("element material", t);
                            let e = this.d(t.Material.MaterialResourcesID);
                            if (!e)
                                return void WH.debug("element material: can't get texture files for material", t);
                            let s = this.b.TextureLayers.find((e => e.ChrModelTextureTargetID == t.Material.TextureTarget));
                            if (!s)
                                return void WH.debug("element material: can't get texture layer for material", t);
                            const n = new Fl(e,s.TextureType);
                            Il(n, this.j[t.Material.TextureTarget]) ? (i[t.Material.TextureTarget] = this.f[t.Material.TextureTarget],
                            r[t.Material.TextureTarget] = this.j[t.Material.TextureTarget]) : (i[t.Material.TextureTarget] = this.a.s(s.TextureType, e),
                            r[t.Material.TextureTarget] = n)
                        }
                        )),
                        a.Elements.filter((e => e.Geoset && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID))))).sort(( (t, e) => t.Geoset.GeosetType - e.Geoset.GeosetType || t.Geoset.GeosetID - e.Geoset.GeosetID)).forEach((t => {
                            WH.debug("element geoset", t),
                            this.e.push(100 * t.Geoset.GeosetType + t.Geoset.GeosetID)
                        }
                        )),
                        a.Elements.filter((e => e.SkinnedModel && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID))))).forEach((t => {
                            WH.debug("element skinnedmodel", t),
                            t.ChrCustItemGeoModifyID;
                            const e = this.a.gf[t.SkinnedModel.CollectionFileDataID];
                            t.SkinnedModel.GeosetID < 100 && e.ba.push(new Sl(100 * t.SkinnedModel.GeosetType + t.SkinnedModel.GeosetID,(1 & t.SkinnedModel.Flags) > 0))
                        }
                        ));
                        let h = a.Elements.find((e => 0 != e.CondModelFileDataId && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID)))));
                        24 != n.Id && 353 != n.Id || (h && !this.a.overrideModelFile ? this.a.overrideModelFile = h.CondModelFileDataId : !h && this.a.overrideModelFile && (this.a.overrideModelFile = 0)),
                        a.Elements.filter((e => e.ChrCustItemGeoModifyID && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID))))).forEach((t => {
                            WH.debug("element ChrCustItemGeoModify", t),
                            this.a && this.a.m.push(t.ChrCustItemGeoModifyID)
                        }
                        ))
                    }
                }
            }
            if (!this.f[10]) {
                let e = this.b.Options.find((t => t.Id == this.b.HairStyleOptionId));
                if (e) {
                    let s = e.Choices[1];
                    if (s) {
                        let e = s.Elements.filter((e => e.Material && 10 == e.Material.TextureTarget && (0 == e.VariationChoiceID || t.some((t => t.choiceId == e.VariationChoiceID)))));
                        if (e.length > 0) {
                            let t = this.d(e[0].Material.MaterialResourcesID);
                            if (t) {
                                const s = new Fl(t,0);
                                Il(s, this.j[e[0].Material.TextureTarget]) ? (i[e[0].Material.TextureTarget] = this.f[e[0].Material.TextureTarget],
                                r[e[0].Material.TextureTarget] = this.j[e[0].Material.TextureTarget]) : (i[e[0].Material.TextureTarget] = this.a.s(6, t),
                                r[e[0].Material.TextureTarget] = s)
                            }
                        }
                    }
                }
            }
            this.f = i,
            this.j = r,
            this.a.a().az(e),
            this.a.u = !0
        }
        i() {
            let t = [];
            for (let e = 0; e < this.b.Options.length; e++) {
                let i = this.b.Options[e];
                if (i) {
                    let e = i.Choices[0];
                    e && t.push({
                        optionId: i.Id,
                        choiceId: e.Id
                    })
                }
            }
            this.g(t)
        }
        c(t) {
            let e = {
                options: t,
                sheathMain: -1,
                sheathOff: -1
            };
            for (let t of this.b.Options)
                e.options.some((e => e.optionId == t.Id)) || e.options.push({
                    optionId: t.Id,
                    choiceId: t.Choices[0].Id
                });
            return e
        }
    }
    class Ul {
        constructor() {
            this.b = null,
            this.a = 1,
            this.c = !1
        }
    }
    const Rl = class {
        constructor(t, e, i) {
            this.d = t,
            this.l = e,
            this.i = [],
            this.a = !1,
            this.h = [],
            i && this.m(i)
        }
        k() {}
        m(t) {
            this.e = t;
            El(this.d.k.options.contentPath, as.ITEMVISUAL, t).then((t => {
                this.j(t)
            }
            ))
        }
        j(t) {
            if (this.i = new Array(7),
            t.ItemEffects)
                for (let e = 0; e < t.ItemEffects.length; ++e) {
                    let i = t.ItemEffects[e];
                    if (-1 == i.SubClass || this.l == i.SubClass) {
                        if (i.Model) {
                            const t = new Ul;
                            this.i[i.Slot - 1] = t,
                            t.b = new _l(this.d.k,this.d.k.renderer,i.Model),
                            t.a = i.Scale && 1 != i.Scale ? i.Scale : 1
                        }
                        if (i.kit) {
                            const t = new wl(this.d,i.kit.effects);
                            this.h.push(t)
                        }
                    }
                }
            for (var e = 0; e < this.i.length; ++e)
                t.Equipment[e] && null == this.i[e] && (this.i[e] = new Ul,
                this.i[e].b = new _l(this.d.k,this.d.k.renderer,t.Equipment[e]));
            this.a = !0
        }
        f(t) {
            for (let e = 0; e < this.i.length; e++) {
                const i = this.i[e];
                i && i.c && i.b.am(t)
            }
        }
        b(t) {
            for (let e = 0; e < this.i.length; e++) {
                const i = this.i[e];
                i && i.c && (i.b && i.b.r && t.c(i.b, !1))
            }
        }
        g(t, e, i) {
            if (t.c)
                return;
            if (!i.loaded)
                return;
            if (!t.b || !t.b.r)
                return;
            const r = i.modelInstance.ar;
            let s = null;
            if (e < 5) {
                if (!r.I[e])
                    return;
                s = r.I[e]
            } else
                s = i.modelInstance.g(19);
            let n = Pi();
            qi(n, n, s.a),
            Vi(n, n, _i(t.a, t.a, t.a)),
            t.b.aO(i.modelInstance, s.d, n),
            t.c = !0
        }
        c() {
            if (this.d.loaded) {
                for (const t of this.h)
                    t && t.b();
                for (let t = 0; t < this.i.length; t++) {
                    const e = this.i[t];
                    e && (this.g(e, t, this.d),
                    e.b.z())
                }
            }
        }
    }
    ;
    class Ol {
        constructor(t, e, i) {
            this.v = t,
            this.z = [],
            this.r = !1,
            this.j = null,
            this.c = [],
            this.C = Pi(),
            WH.debug("Creating item", i),
            this.l = e,
            this.f = i,
            this.G = t.kj,
            this.p = t.E,
            this.L = t.O,
            this.q = os[e],
            this.b = hs[e],
            this.K = null,
            this.o = null,
            this.w = null,
            this.y = 0,
            this.n = 0,
            this.r = !1,
            this.a = !1,
            this.i = 0,
            this.u = 3,
            this.E = 0,
            i && this.A()
        }
        H() {
            var t = this;
            if (t.z) {
                for (let e = 0; e < t.z.length; ++e)
                    t.z[e] && (t.z[e].a = null,
                    t.z[e] = null);
                t.z = null
            }
            if (t.K) {
                for (let e = 0; e < t.K.length; ++e)
                    t.K[e].texture && t.K[e].texture.c(),
                    t.K[e].texture = null,
                    t.K[e] = null;
                t.K = null
            }
            if (t.o = null,
            t.w = null,
            t.c) {
                for (let e = 0; e < t.c.length; e++)
                    t.c[e].k();
                t.c = null
            }
            t.r = !1,
            WH.debug("Destroyed item", this.f)
        }
        A() {
            let t = this
              , e = this.v.ba.options;
            WH.debug("Loading item", this.f),
            Ml(e.contentPath, this.l, this.f).then((t => {
                this.D(t)
            }
            )).catch(( () => {
                t.a = !0
            }
            ))
        }
        D(t) {
            if (!this.v)
                return void WH.debug("Char model was destroyed before it was loaded", this.f);
            const e = this.v.ba
              , i = (e.options,
            this.p)
              , r = this.G
              , s = this.L;
            if (this.n = t.Item.Flags,
            this.y = t.Item.InventoryType,
            this.h = t.Item.ItemClass,
            this.e = t.Item.ItemSubClass,
            t.ComponentTextures) {
                this.K = [];
                for (let n in t.ComponentTextures) {
                    const a = parseInt(n)
                      , o = pl.a(t.TextureFiles[t.ComponentTextures[n]], i, s, r);
                    if (o) {
                        let t;
                        t = {
                            region: a,
                            gender: this.p,
                            file: o.b,
                            texture: null
                        },
                        12 != a ? t.texture = e.getTexture(o.b) : 16 == this.l && this.v.a().T(2, e.getTexture(o.b)),
                        this.K.push(t)
                    }
                }
            }
            this.o = t.Item.GeosetGroup,
            this.w = t.Item.AttachGeosetGroup,
            this.E = t.Item.GeosetGroupOverride,
            1 == this.l && (0 == i ? this.I = t.Item.HideGeosetMale : this.J = t.Item.HideGeosetFemale);
            let n = 0;
            if (3 == this.l ? n = 2 : us[this.l] != as.ARMOR && (n = 1),
            n > 0 && t.ComponentModels)
                for (let i = 0; i < n; ++i) {
                    let r = Ll.c(e, t, us[this.l], this.G, this.p, this.L);
                    if (3 == this.l && r.ed(i + 1),
                    null == r.modelInstance)
                        continue;
                    const s = new Cl;
                    s.a = r,
                    s.c = i,
                    t.Item && t.Item.ParticleColor && s.a.modelInstance.an(t.Item.ParticleColor),
                    this.z.push(s)
                }
            if ((6 == this.l || 16 == this.l) && t.ComponentModels) {
                let n = 0;
                if (16 == this.l && (n = 1),
                t.ComponentModels[n]) {
                    const a = t.ComponentModels[n]
                      , o = pl.b(t.ModelFiles[a], -1, i, s, r)
                      , h = new Cl
                      , l = 0 == n ? t.Textures : t.Textures2;
                    h.a = new xl(e,o,l,!1),
                    this.z = [h]
                }
            }
            const a = this.l;
            if ((4 == a || 5 == a || 20 == a || 6 == a || 7 == a || 10 == a || 8 == a || 1 == a || 9 == a || 19 == a || 16 == a) && t.ComponentModels) {
                let n = 0;
                if (1 != a && 6 != a || (n = 1),
                t.ComponentModels[n]) {
                    const a = t.ComponentModels[n];
                    if (a && t.ModelFiles && t.ModelFiles[a]) {
                        const o = pl.b(t.ModelFiles[a], -1, i, s, r);
                        if (o) {
                            const i = 0 == n ? t.Textures : t.Textures2;
                            this.j = new Cl,
                            this.j.a = new xl(e,o,i,!0),
                            this.j.a.d(( () => {
                                this.v.o = !0
                            }
                            ))
                        }
                    }
                }
            }
            7 == a && this.o[2] > 0 && (this.b += 2);
            const o = 0 != this.i ? this.i : 0 != t.Item.ItemVisual ? t.Item.ItemVisual : 0;
            if (0 != o) {
                const t = 2 == this.h ? this.e : -1;
                for (let e = 0; e < this.z.length; e++)
                    this.c.push(new Rl(this.z[e].a,t,o))
            }
            this.r = !0,
            WH.debug("Loaded item:", "DisplayId", this.f, "InventoryType", this.y),
            this.v.o = !0
        }
        d(t) {
            for (let t = 0; t < this.c.length; t++)
                this.c[t].k();
            this.c = [],
            this.i = t
        }
        F(t) {
            this.u = t
        }
        x(t) {
            if (3 == this.l) {
                const e = t.a.shoulderIndex;
                if (1 == e && 0 == (1 & this.u))
                    return !0;
                if (2 == e && 0 == (2 & this.u))
                    return !0
            }
            return !1
        }
        s(t) {
            for (let e = 0; e < this.c.length; ++e)
                this.c[e] && this.c[e].f(t);
            for (let e = 0; e < this.z.length; ++e) {
                const i = this.z[e];
                if (i && i.a) {
                    if (this.x(i))
                        continue;
                    i.a.h(t)
                }
            }
        }
        m() {
            if (this.z)
                for (let t = 0; t < this.z.length; ++t)
                    this.z[t].b = !1,
                    this.z[t].a && this.z[t].a.fe(null, -1, null);
            this.j && (this.j.b = !1)
        }
        B(t, e, i) {
            if (!t)
                return;
            if (!t.a)
                return;
            if (!t.a.modelInstance.r)
                return;
            const r = t.c;
            if (r < i.length) {
                let s = e.I[i[r]];
                if (t.b && s.d == t.e)
                    return;
                let n = !1
                  , a = rs[t.a.fileDataId]
                  , o = gi()
                  , h = Pi();
                if (Gi(h),
                a && (mi(o, 1, 1, -1),
                Vi(h, h, o),
                n = !0),
                22 != this.l && 23 != this.l && 22 != this.q || 0 == (256 & this.n) || (mi(o, 1, -1, 1),
                Vi(h, h, o),
                n = !0,
                t.a.isMirrored = !0),
                t.a.winding = n,
                5 == this.v.x && 26 == this.l && 2 == this.h && 18 == this.e && (Gi(h),
                Xi(h, h, -Math.PI / 2)),
                qi(h, h, s.a),
                ji(h, h, this.C),
                27 == this.l) {
                    let e = t.a.hg.Scale;
                    mi(o, e, e, e),
                    Vi(h, h, o)
                }
                t.a.fe(this.v.a(), s.d, h),
                t.b = !0,
                t.e = s.d
            }
            t.b = !0
        }
        k(t) {
            zi(this.C, t);
            for (let t = 0; t < this.z.length; ++t)
                this.z[t].b = !1
        }
        g() {
            if (!this.v.loaded)
                return;
            const t = this.v.a().ar
              , e = this.v.wv(this.q, this);
            for (let i = 0; i < this.z.length; ++i)
                this.B(this.z[i], t, e),
                this.c[i] && this.c[i].c();
            this.j && this.v.M(this.j);
            for (let t = 0; t < this.z.length; ++t) {
                const e = this.z[t];
                if (e && e.a) {
                    if (this.x(e))
                        continue;
                    e.a.e()
                }
            }
        }
        t(t) {
            this.z.forEach((e => {
                e.a.b(t)
            }
            )),
            this.j && this.j.a.b(t)
        }
    }
    class Bl extends yl {
        constructor(t, e) {
            super(t, e),
            this.sr = new Map,
            this.H = [],
            this.gf = {},
            this.qp = null,
            t.options.charCustomization && (this.ml = t.options.charCustomization),
            this.N = new Array(52);
            for (let t = 0; t < 52; t++)
                this.N[t] = 100 * t + ss[t]
        }
        get overrideModelFile() {
            return this.K
        }
        set overrideModelFile(t) {
            const e = this.K;
            this.K = t,
            e != t && (this.ed(),
            this.on(),
            this.o = !0)
        }
        ed() {
            let t = this.K ? this.K : this.Az.Model;
            this.f = new _l(this.ba,this.ba.renderer,t),
            this.f.k(),
            this.f.J(27 == this.kj || 30 == this.kj),
            this.qp = null,
            this.o = !0
        }
        j(t) {
            const e = this.ba.options;
            this.kj = t.Character.Race,
            this.E = t.Character.Gender,
            this.O = e.cls ? e.cls : 0;
            const i = e && e.items;
            El(e.contentPath, as.CHARACTER, t.Character.ChrModelId).then((r => {
                var s, n;
                this.Az = r,
                this.ed(),
                (s = e.contentPath,
                n = t.Character.ChrModelId,
                new Promise(( (t, e) => {
                    const i = s + "meta/charactercustomization/" + n + ".json";
                    $.getJSON(i, (function(e) {
                        t(e)
                    }
                    ))
                }
                ))).then((e => {
                    var r, s;
                    if (WH.debug("Got customization data v2", e),
                    this.L = new Dl(this,e),
                    null === (r = this.CB) || void 0 === r || r.call(this, this.L.b),
                    this.L.h(),
                    this.ml)
                        this.setAppearance(this.ml);
                    else if (t.Character.Race > 0 && (null === (s = null == t ? void 0 : t.Creature) || void 0 === s ? void 0 : s.CreatureCustomizations)) {
                        let e = this.L.c(t.Creature.CreatureCustomizations);
                        this.setAppearance(e)
                    } else
                        this.L.i();
                    this.u && this.n(),
                    t.Equipment && this.D(t.Equipment),
                    i && this.D(i)
                }
                ))
            }
            )),
            this.u = !0
        }
        on() {
            for (const [t,e] of this.sr)
                e.m();
            for (const t in this.gf) {
                this.gf[t].b = !1
            }
            for (const t of this.q)
                t.d()
        }
        cba(t, e, i) {
            if (!this.sr)
                return;
            if (3 == t && this.H && this.H[0])
                return;
            let r = new Ol(this,t,e);
            i && r.d(i);
            let s = r.q
              , n = ls[t];
            this.sr.get(s) && 0 != n ? (r.q = n,
            this.sr.set(n, r)) : this.sr.set(s, r)
        }
        F(t) {
            var e = this.sr.get(t);
            e || (t = os[t],
            e = this.sr.get(t)),
            e && (this.sr.delete(t),
            e.H())
        }
        wv(t, e) {
            const i = this.f.ar
              , r = []
              , s = {
                14: t => [0],
                26: t => 2 == t.h && 18 == t.e ? [1] : null
            };
            if (i.I && i.C) {
                const n = {
                    1: t => [11],
                    3: t => [6, 5],
                    22: t => {
                        var e;
                        return (null === (e = s[t.l]) || void 0 === e ? void 0 : e.call(s, t)) || [2]
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
                    const s = n[t](e);
                    for (let n = 0; n < s.length; ++n) {
                        let a = s[n];
                        (this.x >= 0 || this.fe >= 0 || this.r) && gs[t] && (a = gs[t]),
                        this.x >= 0 && 21 == t && bs[this.x][t] && (a = bs[this.x][t]),
                        this.fe >= 0 && 22 == t && bs[this.fe][t] && (a = bs[this.fe][t]),
                        15 == e.y && this.fe >= 0 && 22 == t && bs[this.fe][e.l] && (a = bs[this.fe][e.l]),
                        a >= i.C.length || -1 == i.C[a] || r.push(i.C[a])
                    }
                }
            }
            return r
        }
        D(t) {
            if ($.isArray(t))
                for (let e = 0; e < t.length; ++e)
                    this.cba(t[e][0], t[e][1], t[e][2]);
            else
                for (let e in t)
                    this.cba(parseInt(e), t[e]);
            this.o = !0,
            this.P()
        }
        G(t, e, i) {
            for (const r in this.gf) {
                this.gf[r].a.l(t, e, i)
            }
        }
        w() {
            var t;
            const e = this.f;
            for (let t = 0; t < 52; t++)
                this.N[t] = 100 * t + ss[t];
            for (const e of (null === (t = this.L) || void 0 === t ? void 0 : t.e) || [])
                e >= 0 && (this.N[Math.floor(e / 100)] = e);
            for (const t in this.gf) {
                const e = this.gf[t].ba
                  , i = this.gf[t].a;
                i.l(0, _s, !1);
                for (const t of e)
                    i.l(t.a, t.a, !0),
                    this.N[Math.floor(t.a / 100)] = t.a
            }
            e.H(0, _s, !1),
            e.H(0, 0, !0);
            for (let t = 0; t < this.N.length; t++)
                e.H(this.N[t], this.N[t], !0);
            let i = this.sr.get(1)
              , r = this.sr.get(3)
              , s = this.sr.get(4)
              , n = this.sr.get(5)
              , a = this.sr.get(6)
              , o = this.sr.get(7)
              , h = this.sr.get(8)
              , l = this.sr.get(9)
              , u = this.sr.get(10)
              , c = this.sr.get(19)
              , f = this.sr.get(16)
              , d = !1
              , g = !1;
            n && n.o && n.o[2] ? g = !0 : o && o.o && o.o[2] && (d = !0);
            let b = g || d;
            this.sr.forEach((t => {
                if (t && t.r && t.j) {
                    let e = t.j.a.modelInstance;
                    if (!e.r)
                        return;
                    e.H(0, _s, !1),
                    1 == t.l ? (e.au(t.o[0], 2700),
                    e.au(t.o[1], 2100)) : 3 == t.l ? e.au(t.o[0], 2600) : 4 == t.l ? (e.au(t.o[0], 800),
                    e.au(t.o[1], 1e3)) : 5 == t.l || 20 == t.l ? (u && u.r && u.o[0] ? e.au(-2, 800) : e.au(t.o[0], 800),
                    e.au(t.o[1], 1e3),
                    b && e.au(t.o[2], 1300),
                    e.au(t.o[3], 2200),
                    e.au(t.o[4], 2800)) : 6 == t.l ? e.au(t.o[0], 1800) : 7 == t.l ? (e.au(t.o[0], 1100),
                    e.au(t.o[1], 900),
                    b && e.au(t.o[2], 1300)) : 8 == t.l ? (e.au(t.o[0], 500),
                    e.au(t.o[1], 2e3)) : 10 == t.l ? (0 == t.o[0] && n && n.r && n.o[0] ? e.au(-2, 400) : e.au(t.o[0], 400),
                    e.au(t.o[1], 2300)) : 16 == t.l ? e.au(t.o[0], 1500) : 19 == t.l ? e.au(t.o[0], 1200) : 9 == t.l && (u && u.r && u.o[0] || null != (null == u ? void 0 : u.j) || n && n.r && n.o[2] && n.o[0] > 0 ? e.au(-2, 2300) : e.au(t.o[0], 2300))
                }
            }
            )),
            this.H.forEach((t => {
                if (t && t.j) {
                    const e = t.j.a.modelInstance;
                    e.H(0, _s, !1),
                    e.au(t.o[0], 2600)
                }
            }
            )),
            this.sr.forEach((t => {
                if (t && t.r && t.z)
                    for (let e of t.z) {
                        if (!e)
                            continue;
                        let i = e.a;
                        1 == t.l ? (i.ba(t.w[0], 27),
                        i.ba(t.w[1], 21)) : 3 == t.l ? i.ba(t.w[0], 26) : 4 == t.l ? (i.ba(t.w[0], 8),
                        i.ba(t.w[1], 10)) : 5 == t.l || 20 == t.l ? (i.ba(t.w[0], 8),
                        i.ba(t.w[1], 10),
                        i.ba(t.w[2], 13),
                        i.ba(t.w[3], 22),
                        i.ba(t.w[4], 28)) : 6 == t.l ? i.ba(t.w[0], 18) : 7 == t.l ? (i.ba(t.w[0], 11),
                        i.ba(t.w[1], 9),
                        i.ba(t.w[2], 13)) : 8 == t.l ? (i.ba(t.w[0], 5),
                        i.ba(t.w[1], 20)) : 10 == t.l ? (i.ba(t.w[0], 4),
                        i.ba(t.w[1], 23)) : 16 == t.l ? i.ba(t.w[0], 15) : 19 == t.l ? i.ba(t.w[0], 12) : 9 == t.l && i.ba(t.w[0], 23)
                    }
            }
            )),
            this.H.forEach((t => {
                if (t && t.z)
                    for (let e of t.z) {
                        let i = e.a;
                        i.ba(t.w[0], 26),
                        t.E > 0 && (i.l(2600, 2699, !1),
                        i.ba(t.E, 26))
                    }
            }
            ));
            if (i && i.r) {
                const t = i.j || i.z[0]
                  , r = this.kj
                  , s = 0 == this.E ? i.I : i.J;
                if (t && s)
                    for (let t = 0; t < s.length; t++)
                        if (s[t].RaceId == r) {
                            const i = s[t].GeosetGroup;
                            if (5 == r && (1 == i || 2 == i))
                                continue;
                            if (i < 52)
                                if (0 == i)
                                    e.H(1, 99, !1);
                                else {
                                    const t = 100 * i;
                                    e.H(t, t + 99, !1)
                                }
                        }
            }
            if (i && i.z && i.E > 0)
                for (let t of i.z) {
                    let e = t.a;
                    e.l(2600, 2799, !1),
                    e.ba(i.E, 27)
                }
            if (r && r.z && r.E > 0)
                for (let t of r.z) {
                    let e = t.a;
                    e.l(2600, 2699, !1),
                    e.ba(r.E, 26)
                }
            if (a && a.z && a.E > 0)
                for (let t of a.z) {
                    let e = t.a;
                    e.l(1800, 1899, !1),
                    e.ba(a.E, 18)
                }
            let _ = 0;
            if (c && (_ |= 16),
            u && u.r && u.o && u.o[0]) {
                let t = 401 + u.o[0];
                e.H(401, 499, !1),
                e.H(t, t, !0)
            } else if (n && n.r && n.o && n.o[0]) {
                let t = 801 + n.o[0];
                e.H(t, t, !0),
                u && u.o && 0 == u.o[0] && (u.b = 7,
                n.b = 8,
                WH.debug("updating sorting for chest/gloves"))
            }
            if (!(n || a || l) && s && s.r && s.o && s.o[0]) {
                let t = 801 + s.o[0];
                e.H(t, t, !0)
            }
            if (c && c.r)
                0 == (1048576 & c.n) && (e.H(2200, 2299, !1),
                e.H(2202, 2202, !0));
            else if (n && n.r && n.o && n.o[3]) {
                let t = 2201 + n.o[3];
                e.H(2200, 2299, !1),
                e.H(t, t, !0)
            }
            let p, m = !1;
            if (a && a.r && a.o && a.o[0] && (m = 0 != (512 & a.n)),
            g) {
                e.H(501, 599, !1),
                e.H(902, 999, !1),
                e.H(1100, 1199, !1),
                e.H(1300, 1399, !1);
                let t = 1301 + n.o[2];
                e.H(t, t, !0)
            } else if (d) {
                e.H(501, 599, !1),
                e.H(902, 999, !1),
                e.H(1100, 1199, !1),
                e.H(1300, 1399, !1);
                let t = 1301 + o.o[2];
                e.H(t, t, !0)
            } else if (h && h.r && h.o && h.o[0]) {
                e.H(501, 599, !1),
                e.H(901, 901, !0);
                let t = 501 + h.o[0];
                e.H(t, t, !0)
            } else {
                let t;
                t = o && o.r && o.o && o.o[1] ? 901 + o.o[1] : 901,
                e.H(t, t, !0)
            }
            p = h && h.r && h.o && h.o[1] ? 2e3 + h.o[1] : h && h.r && 0 == (1048576 & h.n) ? 2002 : 2001,
            e.H(2001, 2099, !1),
            e.H(p, p, !0);
            let v = !1;
            if (!b && c && c.r && c.o && c.o[0]) {
                let t;
                v = !1,
                m ? (v = !0,
                t = 1203) : (v = !0,
                t = 1201 + c.o[0]),
                e.H(t, t, !0)
            } else
                16 & _ && (e.H(1201, 1201, !0),
                b || (e.H(1202, 1202, !0),
                v = !0));
            if (!v && !g)
                if (n && n.r && n.o && n.o[1]) {
                    let t = 1001 + n.o[1];
                    e.H(t, t, !0)
                } else if (s && s.r && s.o && s.o[1]) {
                    let t = 1001 + s.o[1];
                    e.H(t, t, !0)
                }
            if (!g && o && o.r && o.o && o.o[0]) {
                let t = o.o[0]
                  , i = 1101 + t
                  , r = e.ac.some((t => t.meshId == i));
                t > 2 ? (e.H(1300, 1399, !1),
                r ? e.H(i, i, !0) : e.H(1301, 1301, !0)) : v || e.H(i, i, !0)
            }
            if (c && c.r && c.o && c.o[0] && this.m.length > 0)
                for (let t of this.m) {
                    const i = ns[t];
                    if (i && 12 == i.GeosetType && i.Original == c.o[0] + 1) {
                        e.H(1200, 1299, !1);
                        let t = 1200 + i.Override;
                        e.H(t, t, !0);
                        break
                    }
                }
            if (f && f.r && f.o && f.o[0]) {
                e.H(1500, 1599, !1);
                let t = 1501 + f.o[0];
                if (this.m.length > 0)
                    for (let e of this.m) {
                        const i = ns[e];
                        if (i && 15 == i.GeosetType && i.Original == f.o[0] + 1) {
                            t = 1500 + i.Override;
                            break
                        }
                    }
                e.H(t, t, !0)
            }
            if (a && a.r && a.o && a.o[0]) {
                e.H(1800, 1899, !1);
                let t = 1801 + a.o[0];
                e.H(t, t, !0)
            }
            o || g || d || v || m ? e.H(1400, 1499, !1) : e.H(1401, 1401, !0)
        }
        setParticlesEnabled(t) {
            super.setParticlesEnabled(t),
            this.sr.forEach((e => {
                if (e.z)
                    for (let i = 0; i < e.z.length; ++i)
                        e.z[i] && e.z[i].a.setParticlesEnabled(t)
            }
            ))
        }
        n() {}
        J() {
            if (!this.u)
                return;
            let t = !1;
            if (this.sr.forEach((e => {
                if (e.r || e.a) {
                    if (e.K)
                        for (let i = 0; i < e.K.length; ++i)
                            if (e.K[i].texture && !e.K[i].texture.b())
                                return void (t = !0)
                } else
                    t = !0
            }
            )),
            t)
                return;
            if (!this.L)
                return;
            const e = this.L.b.Materials
              , i = this.L.b.TextureLayers
              , r = this.L.b.TextureSections;
            let s = !0
              , n = !0;
            15 != this.kj && 21 != this.kj || (n = !1),
            this.sr.forEach((t => {
                let e = t.q;
                4 != e && 5 != e && 19 != e || (s = !1,
                null == t.K && (s = !0)),
                7 == e && (n = !1,
                null == t.K && (n = !0))
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
                    const e = this.L.f[t.ChrModelTextureTargetID];
                    if (e && !e.c())
                        return
                }
            }
            for (const t in o) {
                const i = o[t]
                  , h = i[0].TextureType;
                if (!this.l[t]) {
                    const i = e.find((t => t.TextureType == h));
                    if (!i) {
                        WH.debug("unable to find material info", h);
                        continue
                    }
                    this.l[t] = new Ts(this.ba.context,i.Width,i.Height)
                }
                const l = this.l[t];
                l.o();
                for (const t of i) {
                    let e = -1;
                    t.Layer == a && (e = 0);
                    const i = this.L.f[t.ChrModelTextureTargetID];
                    if (!i)
                        continue;
                    const o = t.TextureSection;
                    if (3 != o && 5 != o || s && 3 == o || n && 5 == o) {
                        let s = 0
                          , n = 0
                          , a = 1
                          , h = 1;
                        if (-1 != o && r) {
                            const t = r.find((t => t.SectionType == o));
                            if (!t) {
                                WH.debug("can't find texture section data", o);
                                continue
                            }
                            s = t.X,
                            n = t.Y,
                            a = t.Width,
                            h = t.Height
                        }
                        l.g(i, s, n, a, h, t.BlendMode, t.Layer, e)
                    }
                }
                1 == h && 52 != this.kj && 70 != this.kj && this.yx(l),
                26 != h || 52 != this.kj && 70 != this.kj || this.yx(l),
                l.c()
            }
            this.ut(this.f);
            for (let t in this.gf) {
                const e = this.gf[t];
                e.a && e.a.loaded && this.ut(e.a.a())
            }
            this.u = !1
        }
        ut(t) {
            if (this.l[1]) {
                const e = this.l[1];
                t.o(e.e(0), e.e(1), e.e(2))
            }
            for (let e in this.l) {
                this.l[e];
                t.T(e, this.l[e].e(0))
            }
        }
        yx(t) {
            const e = [];
            this.sr.forEach((t => {
                e.push(t)
            }
            )),
            e.sort((function(t, e) {
                return t.b - e.b
            }
            ));
            const i = this.L.b.TextureSections;
            for (let r = 0; r < e.length; r++) {
                const s = e[r];
                if (s.K)
                    for (let e = 0; e < s.K.length; e++) {
                        const r = s.K[e];
                        if (r.gender == this.E && r.texture && r.texture.b() && 12 != r.region) {
                            if (0 != (1 & this.i.Character.ChrModelFlags) && 7 == r.region)
                                continue;
                            const e = i.find((t => t.SectionType == r.region));
                            if (!e) {
                                WH.debug("can't find texture section data", r.region);
                                continue
                            }
                            const s = new ms;
                            s.d = r.texture,
                            t.g(s, e.X, e.Y, e.Width, e.Height, 0, -1, -1)
                        }
                    }
            }
        }
        setAppearance(t) {
            var e;
            this.ml = t,
            this.x = t.sheathMain,
            this.fe = t.sheathOff,
            null === (e = this.L) || void 0 === e || e.g(t.options),
            this.u = !0,
            this.o = !0,
            this.n(),
            this.P()
        }
        setCustomizationsLoadedCallback(t) {
            this.CB = t
        }
        setItems(t) {
            const e = this.ba.options;
            WH.debug("setItems", t);
            const i = [];
            for (let e = 0; e < t.length; e++)
                i.push([t[e].slot, t[e].display, t[e].visual]);
            i.forEach((t => {
                const i = [parseInt(t[0]), parseInt(t[1])];
                e.items.push(i)
            }
            )),
            this.D(i),
            this.u = !0
        }
        attachList(t) {
            const e = this.ba.options;
            WH.debug("attachList", t);
            const i = t.split(",")
              , r = [];
            for (let t = 0; t < i.length; t += 2)
                r.push([i[t], i[t + 1]]);
            r.forEach((t => {
                const i = [parseInt(t[0]), parseInt(t[1])];
                e.items.push(i)
            }
            )),
            this.D(r),
            this.u = !0
        }
        clearSlots(t) {
            const e = this.ba.options;
            WH.debug("clearSlots", t);
            const i = t.split(",");
            for (let t = 0; t < i.length; ++t) {
                this.F(parseInt(i[t]));
                const r = [];
                e.items.forEach((i => {
                    0 != e.items[t].indexOf(parseInt(i)) && r.push(i)
                }
                )),
                e.items = r
            }
            this.P(),
            this.u = !0
        }
        setShouldersOverride(t) {
            if (WH.debug("setShouldersOverride", t),
            !t || 2 != t.length)
                return;
            for (let t = 0; t < 2; t++) {
                const e = this.H[t];
                e && e.H(),
                this.H[t] = null
            }
            for (let e = 0; e < 2; e++)
                if (null != t[e]) {
                    const i = new Ol(this,3,t[e]);
                    let r = 0;
                    r = 0 == e ? 1 : 2,
                    i.F(r),
                    this.H[e] = i
                }
            const e = this.sr.get(3);
            if (e) {
                let t = 3;
                for (let e = 0; e < 2; e++)
                    this.H[e] && (t &= ~(1 << e));
                e.F(t)
            }
            this.H && (this.H[0] || this.H[1]) && this.F(3)
        }
        setSheath(t, e) {
            this.x = t,
            this.fe = e,
            this.P()
        }
        P() {
            if (!this.loaded)
                return;
            const t = this.f;
            let e = (-1 == this.fe || !this.fe) && null != this.sr.get(22)
              , i = !(-1 != this.x && this.x || null == this.sr.get(13) && null == this.sr.get(21));
            for (let i of cs) {
                let r = t.ar.b[i];
                r > 0 && r < t.af.length && this.f.af[r].e(e ? "HandsClosed" : "")
            }
            for (let e of fs) {
                let r = t.ar.b[e];
                r > 0 && r < t.af.length && t.af[r].e(i ? "HandsClosed" : "")
            }
        }
        M(t) {
            const e = this.f;
            if (!e.r)
                return;
            const i = t.a.modelInstance;
            if (!i || !i.r)
                return;
            t.b || (i.aO(e, -1, null),
            t.b = !0);
            let r = i.af;
            if (r) {
                for (let t = 0; t < r.length; t++) {
                    let i = r[t]
                      , s = this.qp[i.b.b];
                    if ("number" != typeof s)
                        continue;
                    let n = r[t].k
                      , a = e.af[s].k;
                    r[t].d = !0,
                    zi(n, a)
                }
                i.z()
            }
        }
        ih() {
            const t = this.f;
            let e = {};
            for (let i = 0; i < t.af.length; i++)
                e[t.af[i].b.b] = i;
            this.qp = e
        }
        e() {
            if (this.f && this.f.r) {
                this.qp || (this.ih(),
                this.P()),
                super.e();
                for (const t in this.gf) {
                    const e = this.gf[t];
                    this.M(e)
                }
                this.sr.forEach((t => {
                    if (t) {
                        if (2 == t.h && 13 == t.e) {
                            if (21 == t.q && -1 != this.x)
                                return;
                            if (22 == t.q && -1 != this.fe)
                                return
                        }
                        t.g()
                    }
                }
                )),
                this.H.forEach((t => {
                    t && t.z && t.g()
                }
                )),
                this.J()
            }
        }
        static I(t, e) {
            const i = t.a;
            if (!i.loaded)
                return;
            const r = i.modelInstance;
            if (!r || !r.r)
                return;
            r.af && r.am(e)
        }
        h(t) {
            if (this.f && this.f.r) {
                super.h(t);
                for (const e in this.gf) {
                    const i = this.gf[e];
                    Bl.I(i, t)
                }
                if (this.sr.forEach((e => {
                    if (e) {
                        if (2 == e.h && 13 == e.e) {
                            if (21 == e.q && -1 != this.x)
                                return;
                            if (22 == e.q && -1 != this.fe)
                                return
                        }
                        e.s(t)
                    }
                }
                )),
                this.H.forEach((e => {
                    e && e.z && e.s(t)
                }
                )),
                this.z)
                    for (let e = 0; e < this.z.length; e++) {
                        let i = this.z[e];
                        i.r && i.am(t)
                    }
                this.sr.forEach((e => {
                    e && e.j && e.j.a && e.j.b && Bl.I(e.j, t)
                }
                ))
            }
        }
        b(t) {
            super.b(t);
            for (const e in this.gf) {
                const i = this.gf[e];
                i.b && (i.a && i.a.loaded && i.a.b(t))
            }
            if (this.sr.forEach((e => {
                if (e) {
                    if (2 == e.h && 13 == e.e) {
                        if (21 == e.q && -1 != this.x)
                            return;
                        if (22 == e.q && -1 != this.fe)
                            return
                    }
                    e.t(t)
                }
            }
            )),
            this.H.forEach((e => {
                e && e.z && e.t(t)
            }
            )),
            this.z)
                for (let e = 0; e < this.z.length; e++) {
                    let i = this.z[e];
                    i.r && t.c(i, !1)
                }
        }
    }
    class Pl extends vl {
        constructor(t, e, i, r, s, n) {
            super(t, e, i, r, s, n),
            this.cba()
        }
        cba() {
            let t = this.i;
            const e = this.j
              , i = this.dc
              , r = this.hg;
            if (r.ComponentModels) {
                let s = r.ComponentModels[0] || r.ComponentModels[1];
                s && r.ModelFiles && r.ModelFiles[s] && (27 == r.Item.InventoryType ? this.f = new _l(this.k,this.k.renderer,r.ModelFiles[s][0].FileDataId) : this.f = new _l(this.k,this.k.renderer,pl.b(r.ModelFiles[s], -1, e, i, t)),
                this.f.k()),
                this.f && r.Item.AttachGeosetGroup && (this.f.b(r.Item.AttachGeosetGroup[0], 27),
                this.f.b(r.Item.AttachGeosetGroup[1], 21))
            }
            if (r.Textures)
                for (let t in r.Textures)
                    0 != r.Textures[t] && this.f.T(parseInt(t), this.k.getTexture(r.Textures[t]))
        }
    }
    class zl extends vl {
        constructor(t, e, i, r, s, n) {
            super(t, e, i, r, s, n),
            this.cba = 0,
            this.gf()
        }
        get shoulderIndex() {
            return this.cba
        }
        ed(t) {
            this.cba != t && (this.cba = t,
            this.gf())
        }
        gf() {
            this.f = null;
            let t = this.i;
            const e = this.j
              , i = this.dc
              , r = this.hg;
            if (r.ComponentModels) {
                let s = r.ComponentModels[0]
                  , n = r.ComponentModels[1];
                if (!s || 1 != this.cba && 0 != this.cba) {
                    if (n && (2 == this.cba || 0 == this.cba) && (n && r.ModelFiles[n] && (this.f = new _l(this.k,this.k.renderer,pl.b(r.ModelFiles[n], 1, e, i, t)),
                    this.f.k()),
                    r.Textures2 && this.f))
                        for (let t in r.Textures2)
                            0 != r.Textures2[t] && this.f.T(+t, this.k.getTexture(r.Textures2[t]))
                } else if (s && r.ModelFiles[s] && (this.f = new _l(this.k,this.k.renderer,pl.b(r.ModelFiles[s], 0, e, i, t)),
                this.f.k()),
                this.f && r.Textures)
                    for (let t in r.Textures)
                        0 != r.Textures[t] && this.f.T(+t, this.k.getTexture(r.Textures[t]))
            }
            this.f && r.Item.AttachGeosetGroup && this.f.b(r.Item.AttachGeosetGroup[0], 26)
        }
        e() {
            this.f.z()
        }
        h(t) {
            this.f.am(t)
        }
    }
    class Nl extends vl {
        constructor(t, e, i, r, s, n) {
            super(t, e, i, r, s, n),
            this.cba()
        }
        cba() {
            let t = this.i;
            const e = this.j
              , i = this.dc
              , r = this.hg;
            if (r.ComponentModels) {
                let s = r.ComponentModels[0];
                s && r.ModelFiles && r.ModelFiles[s] && (this.f = new _l(this.k,this.k.renderer,pl.b(r.ModelFiles[s], -1, e, i, t)))
            }
            if (this.f && r.Textures)
                for (let t in r.Textures)
                    0 != r.Textures[t] && (this.f.A[+t] = this.k.getTexture(r.Textures[t]))
        }
    }
    class Gl extends ml {
        constructor(t, e) {
            super(),
            this.ba = t,
            this.fe = e,
            this.dc()
        }
        dc() {
            this.f = new _l(this.ba,this.ba.renderer,this.fe.Model),
            this.f.h(1 | this.fe.Scale)
        }
        e() {
            this.f && this.f.z()
        }
        getBounds() {
            return this.f.r ? this.f.i() : [null, null]
        }
        h(t) {
            this.f && this.f.am(t)
        }
    }
    class Ll {
        static a(t, e, i) {
            if (e.Character || i == as.CHARACTER)
                return new Bl(t,e);
            if (i == as.NPC || i == as.HUMANOIDNPC)
                return new yl(t,e);
            if (i == as.HELM || i == as.SHOULDER || i == as.ITEM)
                return Ll.c(t, e, i, 1, 0, 0);
            if (i == as.OBJECT)
                return new Gl(t,e);
            throw "Couldn't create actor"
        }
        static c(t, e, i, r, s, n) {
            if (i == as.HELM)
                return new Pl(t,e,r,s,n,!1);
            if (i == as.SHOULDER)
                return new zl(t,e,r,s,n,!1);
            if (i == as.ITEM)
                return new Nl(t,e,r,s,n,!1);
            throw "Couldn't create item actor"
        }
        static b(t, e, i) {
            return e == as.PATH ? new Promise(( (e, r) => {
                e(new xl(t,i,{},!1))
            }
            )) : El(t.options.contentPath, e, i).then((i => Ll.a(t, i, e)))
        }
    }
    const Hl = class {
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
            e.projMatrix = Pi(),
            e.viewMatrix = Pi(),
            e.panningMatrix = Pi(),
            e.viewOffset = gi(),
            this.addedCss || (this.addedCss = !0,
            $("head").append('<link rel="stylesheet" href="//wow.zamimg.com/modelviewer/viewer/viewer.css" type="text/css" />'))
        }
        updateProgress() {
            if (!this.stop) {
                var t = this
                  , e = 0
                  , i = 0;
                for (var r in t.downloads)
                    e += t.downloads[r].total,
                    i += t.downloads[r].loaded;
                if (e <= 0)
                    t.progressShown && (t.progressBg.hide(),
                    t.progressBar.hide(),
                    t.progressShown = !1);
                else {
                    t.progressShown || (t.progressBg.show(),
                    t.progressBar.show(),
                    t.progressShown = !0);
                    var s = i / e;
                    t.progressBar.width(Math.round(t.width * s) + "px")
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
                    const r = i[t];
                    if (r)
                        return r.apply(i, e),
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
            t = 700
            var e, i = this, r = i.context;
            if (i.delta = .001 * (t - i.time),
            i.time = t,
            i.currFrame++,
            this.doUpdateBounds && i.actors.length > 0) {
                let[t,r] = [gi(), gi()];
                for (e = 0; e < i.actors.length; ++e) {
                    const [s,n] = i.actors[e].getBounds();
                    s && wi(t, t, s),
                    n && yi(r, r, n)
                }
                const s = gi()
                  , n = gi();
                xi(s, r, t),		// s 为 bound
                Ei(n, t, s, .5);	// n 为中心点坐标
                let a = s[2]		// a 为高度
                  , o = s[0]		// o 为宽度
                  , h = s[1];		// h 为厚度
                const l = this.width / this.height	// l 为 viewport 宽高比
                  , u = 2 * Math.tan(this.fov / 2 * .0174532925)	// u 为投影大小 / 镜头距离.
                  , c = 1.2 * a / u 		// 放置多远时刚好占满屏幕.
                  , f = 1.2 * o / (u * l);	// 放置多远时宽度刚好占满屏幕.

                this.distance = Math.max(Math.max(c, f), 2 * h) * 1.25,
                mi(this.translationFromModel, n[0], -n[2], 0),
                this.doUpdateBounds = !1
            }
            for (i.updateCamera(),
            r.bindFramebuffer(r.FRAMEBUFFER, null),
            r.viewport(0, 0, i.width, i.height),
            r.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], 0),
            r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT),
            i.bgTexture && i.program && (r.useProgram(i.program),
            r.activeTexture(r.TEXTURE0),
            r.bindTexture(r.TEXTURE_2D, i.bgTexture),
            r.uniform1i(i.uTexture, 0),
            r.uniform4f(i.uBGTransform, i.viewer.options.bgPosition[0] || 0, i.viewer.options.bgPosition[1] || 0, i.viewer.options.bgScale[0] || 1, i.viewer.options.bgScale[1] || 1),
            i.options.backgroundRotatation && (r.uniform1f(i.uRotation, i.options.backgroundRotatation),
            r.uniform2f(i.uResolution, i.width, i.height)),
            r.bindBuffer(r.ARRAY_BUFFER, i.vb),
            r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, null),
            r.enableVertexAttribArray(i.aPosition),
            r.vertexAttribPointer(i.aPosition, 2, r.FLOAT, !1, 16, 0),
            r.enableVertexAttribArray(i.aTexCoord),
            r.vertexAttribPointer(i.aTexCoord, 2, r.FLOAT, !1, 16, 8),
            r.depthMask(!1),
            r.disable(r.CULL_FACE),
            r.blendFunc(r.ONE, r.ZERO),
            r.drawArrays(r.TRIANGLE_STRIP, 0, 4),
            r.blendFunc(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA),
            r.enable(r.CULL_FACE),
            r.depthMask(!0),
            r.disableVertexAttribArray(i.aPosition),
            r.disableVertexAttribArray(i.aTexCoord)),
            e = 0; e < i.actors.length; ++e)
                i.actors[e].e();
            for (r.viewport(0, 0, i.width, i.height),
            this.gxDevice.e(),
            e = 0; e < i.actors.length; ++e)
                i.actors[e].h(!1);
            for (e = 0; e < i.actors.length; ++e)
                i.actors[e].h(!0);
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
              , r = t.zenith;
            1 == t.up[2] ? (t.eye[0] = -e * Math.sin(r) * Math.cos(i) + t.target[0],
            t.eye[1] = -e * Math.sin(r) * Math.sin(i) + t.target[1],
            t.eye[2] = -e * Math.cos(r) + t.target[2]) : (t.eye[0] = -e * Math.sin(r) * Math.cos(i) + t.target[0],
            t.eye[1] = -e * Math.cos(r) + t.target[1],
            t.eye[2] = -e * Math.sin(r) * Math.sin(i) + t.target[2]),
            xi(t.lookDir, t.target, t.eye),
            Si(t.lookDir, t.lookDir),
            function(t, e, i, r) {
                var s, n, a, o, h, l, u, c, f, d, g = e[0], b = e[1], _ = e[2], p = r[0], m = r[1], v = r[2], x = i[0], T = i[1], w = i[2];
                Math.abs(g - x) < fi && Math.abs(b - T) < fi && Math.abs(_ - w) < fi ? Gi(t) : (u = g - x,
                c = b - T,
                f = _ - w,
                s = m * (f *= d = 1 / Math.hypot(u, c, f)) - v * (c *= d),
                n = v * (u *= d) - p * f,
                a = p * c - m * u,
                (d = Math.hypot(s, n, a)) ? (s *= d = 1 / d,
                n *= d,
                a *= d) : (s = 0,
                n = 0,
                a = 0),
                o = c * a - f * n,
                h = f * s - u * a,
                l = u * n - c * s,
                (d = Math.hypot(o, h, l)) ? (o *= d = 1 / d,
                h *= d,
                l *= d) : (o = 0,
                h = 0,
                l = 0),
                t[0] = s,
                t[1] = o,
                t[2] = u,
                t[3] = 0,
                t[4] = n,
                t[5] = h,
                t[6] = c,
                t[7] = 0,
                t[8] = a,
                t[9] = l,
                t[10] = f,
                t[11] = 0,
                t[12] = -(s * g + n * b + a * _),
                t[13] = -(o * g + h * b + l * _),
                t[14] = -(u * g + c * b + f * _),
                t[15] = 1)
            }(t.viewMatrix, t.eye, t.target, t.up),
            Gi(t.panningMatrix),
            1 == t.up[2] ? mi(t.viewOffset, t.translation[0], -t.translation[1], 0) : mi(t.viewOffset, t.translation[0], 0, t.translation[1]),
            vi(t.viewOffset, t.viewOffset, this.translationFromModel),
            qi(t.panningMatrix, t.panningMatrix, t.viewOffset),
            ji(t.viewMatrix, t.panningMatrix, t.viewMatrix)
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
            $i(e.projMatrix, .0174532925 * e.fov, e.viewer.aspect, .1, 500),
            e.updateCamera(),
            i.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], 0),
            i.enable(i.DEPTH_TEST),
            i.depthFunc(i.LEQUAL),
            i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA),
            i.enable(i.BLEND),
            e.options.models || e.options.items) {
                e.actorPromises = [];
                var r = [].concat(e.options.models);
                if (r.length > 0) {
                    const i = e.options.mount
                      , s = e.options.shouldersOverride;
                    for (t = 0; t < r.length; ++t) {
                        const n = Ll.b(this, r[t].type, r[t].id).then((t => (i && i.id && t instanceof yl && t.B(i.id),
                        t instanceof Bl && t.setShouldersOverride(s),
                        e.actors.push(t),
                        t))).then((t => t));
                        e.actorPromises.push(n)
                    }
                }
            }
            !function t() {
                if (!e.stop && (window.requestAnimationFrame(t),
                e.gxDevice)) {
                    var r = e.getTime();
                    if (!1 !== e.makeDataURL) {
                        if (e.canvas[0].toDataURL) {
                            var s = e.clearColor
                              , n = e.bgTexture;
                            e.options.transparent && (e.bgTexture = null,
                            e.clearColor = _i(0, 0, 0)),
                            e.draw(r);
                            var a = e.width * e.height * 4
                              , o = new Uint8Array(a);
                            i.readPixels(0, 0, e.width, e.height, i.RGBA, i.UNSIGNED_BYTE, o);
                            let t = null;
                            e.options.transparent ? (e.clearColor = _i(1, 1, 1),
                            e.draw(r),
                            t = new Uint8Array(a),
                            i.readPixels(0, 0, e.width, e.height, i.RGBA, i.UNSIGNED_BYTE, t)) : t = o;
                            for (var h = new Uint8Array(a), l = 0, u = e.height - 1; u >= 0; u--)
                                for (var c = 0; c < e.width; c++) {
                                    var f = 4 * (u * e.width + c)
                                      , d = 255 - (t[l + 0] - o[l + 0])
                                      , g = o[l + 0]
                                      , b = o[l + 1]
                                      , _ = o[l + 2];
                                    o[l + 3];
                                    h[f + 0] = g,
                                    h[f + 1] = b,
                                    h[f + 2] = _,
                                    h[f + 3] = d,
                                    l += 4
                                }
                            var p = document.createElement("canvas")
                              , m = p.getContext("2d");
                            p.width = e.width,
                            p.height = e.height;
                            var v = m.createImageData(e.width, e.height);
                            v.data.set(h),
                            m.putImageData(v, 0, 0),
                            e.screenshotDataURL = p.toDataURL.apply(p, e.makeDataURL),
                            e.screenshotCallback && (e.screenshotCallback(),
                            e.screenshotCallback = null),
                            e.clearColor = s,
                            e.bgTexture = n
                        }
                        e.makeDataURL = !1
                    }
                    e.draw(r)
                }
            }()
        }
        onDoubleClick(t) {
            er.isFullscreen() ? er.exitFullscreen() : er.requestFullscreen(this.canvas[0])
        }
        onFullscreen(t) {
            let e = this;
            if (e.viewer.container)
                if (!e.fullscreen && er.isFullscreen() || this.addaptiveMode) {
                    if (e.restoreWidth = e.width,
                    e.restoreHeight = e.height,
                    e.fullscreen = !0,
                    er.isFullscreen()) {
                        var i = $(window);
                        let t = window.screen.width || i.width()
                          , e = window.screen.height || i.height();
                        this.onResize(t, e, t / e)
                    } else if (this.addaptiveMode) {
                        var r = e.viewer.container;
                        this.onResize(r.width(), r.height(), r.width() / r.height())
                    }
                } else
                    e.fullscreen && !er.isFullscreen() && (e.fullscreen = !1,
                    this.onResize(e.restoreWidth, e.restoreHeight, e.viewer.aspect))
        }
        onResize(t, e, i) {
            this.resize(t, e),
            $i(this.projMatrix, .0174532925 * this.fov, i, .1, 5e3)
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
                var i, r;
                "touchmove" == t.type ? (i = t.originalEvent.touches[0].clientX,
                r = t.originalEvent.touches[0].clientY) : (i = t.clientX,
                r = t.clientY);
                var s = (i - e.mouseX) / e.width * Math.PI * 2
                  , n = (r - e.mouseY) / e.width * Math.PI * 2;
                if (e.mouseDown) {
                    1 == e.up[2] ? e.azimuth -= s : e.azimuth += s,
                    e.zenith += n;
                    for (var a = 2 * Math.PI; e.azimuth < 0; )
                        e.azimuth += a;
                    for (; e.azimuth > a; )
                        e.azimuth -= a;
                    e.zenith < 1e-4 && (e.zenith = 1e-4),
                    e.zenith >= Math.PI && (e.zenith = Math.PI - 1e-4)
                } else
                    e.translation[0] += s,
                    e.translation[1] += n;
                e.mouseX = i,
                e.mouseY = r,
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
                        preserveDrawingBuffer: true,
                    }) || i.canvas[0].getContext("experimental-webgl", {
                        alpha: !0,
                        premultipliedAlpha: !1,
                        preserveDrawingBuffer: true,
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
                    const r = [.35, .35, .35, 1]
                      , s = [1, 1, 1, 1]
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
                        uAmbientColor: r,
                        uPrimaryColor: s,
                        uSecondaryColor: n,
                        uLightDir1: a,
                        uLightDir2: o,
                        uLightDir3: h
                    };
                    this.gxDevice = new es(i.context,l),
                    this.renderer = this.gxDevice.d(),
                    i.canvas.on("mousedown touchstart", i.onMouseDown.bind(i)).on("wheel", i.onMouseWheel.bind(i)).on("dblclick", i.onDoubleClick.bind(i)).on("contextmenu", i.onContextMenu.bind(i));
                    let u = 0
                      , c = 0
                      , f = 0;
                    i.canvas.on("touchend", (function(t) {
                        const e = t.originalEvent;
                        if (!e || 1 !== e.changedTouches.length)
                            return;
                        const r = e.changedTouches[0]
                          , s = (new Date).getTime()
                          , n = s - u
                          , a = r.clientX - c
                          , o = r.clientY - f
                          , h = Math.sqrt(a * a + o * o);
                        u = s,
                        c = r.clientX,
                        f = r.clientY,
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
                var i, r = t.compileShader(e.VERTEX_SHADER, "    attribute vec2 aPosition;    attribute vec2 aTexCoord;        varying vec2 vTexCoord;        void main(void) {        vTexCoord = aTexCoord;        gl_Position = vec4(aPosition, 0, 1);    }    ");
                i = t.options.backgroundRotatation ? t.compileShader(e.FRAGMENT_SHADER, "\tprecision mediump float;    varying vec2 vTexCoord;    uniform sampler2D uTexture;    uniform vec2 uResolution;    uniform vec4 uBGTransform;    uniform float uRotation;    mat3 getTransform(vec2 pos, vec2 scale, float rotation, vec2 center) {        float c = cos(rotation);        float s = sin(rotation);        return mat3(            scale.x * c, scale.x * s, - scale.x * ( c * center.x + s * center.y ) + center.x + pos.x,            -scale.y * s, scale.y * c, - scale.y * ( - s * center.x + c * center.y ) + center.y + pos.y,            0.0, 0.0, 1.0        );    }    void main(void) {        vec2 uv = gl_FragCoord.xy / uResolution.xy;        mat3 transform = getTransform(uBGTransform.xy, uBGTransform.zw, uRotation, vec2(0.5));        uv = (vec3(uv, 1.0) * transform).xy;        gl_FragColor = texture2D(uTexture, uv);\t}") : t.compileShader(e.FRAGMENT_SHADER, "    precision mediump float;    varying vec2 vTexCoord;        uniform sampler2D uTexture;    uniform vec4 uBGTransform;        void main(void) {        gl_FragColor = texture2D(uTexture, vTexCoord.xy * uBGTransform.zw + uBGTransform.xy);    }    ");
                var s = e.createProgram();
                e.attachShader(s, r),
                e.attachShader(s, i),
                e.linkProgram(s),
                e.getProgramParameter(s, e.LINK_STATUS) ? (t.vs = r,
                t.fs = i,
                t.program = s,
                t.uTexture = e.getUniformLocation(s, "uTexture"),
                t.aPosition = e.getAttribLocation(s, "aPosition"),
                t.aTexCoord = e.getAttribLocation(s, "aTexCoord"),
                t.uBGTransform = e.getUniformLocation(s, "uBGTransform"),
                t.uRotation = e.getUniformLocation(s, "uRotation"),
                t.uResolution = e.getUniformLocation(s, "uResolution")) : console.error("Error linking shaders")
            }
              , r = function() {
                var i = t.width / t.bgImg.width
                  , r = t.height / t.bgImg.height;
                const s = [-1, -1, 0, r, 1, -1, i, r, -1, 1, 0, 0, 1, 1, i, 0];
                e.bindBuffer(e.ARRAY_BUFFER, t.vb),
                e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(s))
            };
            t.bgImg ? t.bgImg.loaded && (t.vb || i(),
            r()) : (t.bgImg = new Image,
            t.bgImg.crossOrigin = "",
            t.bgImg.onload = function() {
                var s;
                null === (s = t.bgImg) || void 0 === s || (s.loaded = !0),
                t.bgImg && (t.bgTexture = e.createTexture(),
                e.bindTexture(e.TEXTURE_2D, t.bgTexture),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.bgImg),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
                t.vb || i(),
                r(),
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
              , r = i.createShader(t);
            if (i.shaderSource(r, e),
            i.compileShader(r),
            !i.getShaderParameter(r, i.COMPILE_STATUS))
                throw "Shader compile error: " + i.getShaderInfoLog(r);
            return r
        }
        getTexture(t) {
            if (this.textureCache.has(t)) {
                var e = this.textureCache.get(t);
                if (e.j || e.h)
                    return e
            }
            const i = new is(this,t);
            return this.textureCache.set(t, i),
            i
        }
    }
    ;
    let jl = {
        Types: as
    };
    const ql = Object.assign(er, {
        Tools: ci,
        WebGL: Hl,
        WEBGL: 1,
        WOW: 2,
        FLASH: 2,
        Wow: jl
    });
    window.ZamModelViewer = ql
}
)();
//# sourceMappingURL=viewer.min.js.map
