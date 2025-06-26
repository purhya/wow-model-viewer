!function(t) {
    function e(n) {
        if (r[n])
            return r[n].exports;
        var i = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, e),
        i.l = !0,
        i.exports
    }
    var r = {};
    e.m = t,
    e.c = r,
    e.d = function(t, r, n) {
        e.o(t, r) || Object.defineProperty(t, r, {
            enumerable: !0,
            get: n
        })
    }
    ,
    e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    e.t = function(t, r) {
        if (1 & r && (t = e(t)),
        8 & r)
            return t;
        if (4 & r && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (e.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & r && "string" != typeof t)
            for (var i in t)
                e.d(n, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return n
    }
    ,
    e.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(r, "a", r),
        r
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 20)
}([function(t, e) {
    "use strict";
    function r(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
    e.assign = function(t) {
        for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
            var n = e.shift();
            if (n) {
                if ("object" != typeof n)
                    throw new TypeError(n + "must be non-object");
                for (var i in n)
                    r(n, i) && (t[i] = n[i])
            }
        }
        return t
    }
    ,
    e.shrinkBuf = function(t, e) {
        return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e,
        t)
    }
    ;
    var i = {
        arraySet: function(t, e, r, n, i) {
            if (e.subarray && t.subarray)
                t.set(e.subarray(r, r + n), i);
            else
                for (var a = 0; a < n; a++)
                    t[i + a] = e[r + a]
        },
        flattenChunks: function(t) {
            var e, r, n, i, a, o;
            for (n = 0,
            e = 0,
            r = t.length; e < r; e++)
                n += t[e].length;
            for (o = new Uint8Array(n),
            i = 0,
            e = 0,
            r = t.length; e < r; e++)
                a = t[e],
                o.set(a, i),
                i += a.length;
            return o
        }
    }
      , a = {
        arraySet: function(t, e, r, n, i) {
            for (var a = 0; a < n; a++)
                t[i + a] = e[r + a]
        },
        flattenChunks: function(t) {
            return [].concat.apply([], t)
        }
    };
    e.setTyped = function(t) {
        t ? (e.Buf8 = Uint8Array,
        e.Buf16 = Uint16Array,
        e.Buf32 = Int32Array,
        e.assign(e, i)) : (e.Buf8 = Array,
        e.Buf16 = Array,
        e.Buf32 = Array,
        e.assign(e, a))
    }
    ,
    e.setTyped(n)
}
, function(t) {
    "use strict";
    t.exports = {
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
}
, function(t) {
    "use strict";
    t.exports = function(t, e, r, n) {
        for (var i = 0 | 65535 & t, a = 0 | 65535 & t >>> 16, o = 0; 0 !== r; ) {
            r -= o = 2e3 < r ? 2e3 : r;
            do {
                a = 0 | a + (i = 0 | i + e[n++])
            } while (--o);
            i %= 65521,
            a %= 65521
        }
        return i | a << 16 | 0
    }
}
, function(t) {
    "use strict";
    var e = function() {
        for (var t, e = [], r = 0; 256 > r; r++) {
            t = r;
            for (var n = 0; 8 > n; n++)
                t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
            e[r] = t
        }
        return e
    }();
    t.exports = function(t, r, n, i) {
        t ^= -1;
        for (var a = i; a < i + n; a++)
            t = t >>> 8 ^ e[255 & (t ^ r[a])];
        return -1 ^ t
    }
}
, function(t, e, r) {
    "use strict";
    function n(t, e) {
        if (65534 > e && (t.subarray && s || !t.subarray && o))
            return i.apply(null, a.shrinkBuf(t, e));
        for (var r = "", n = 0; n < e; n++)
            r += i(t[n]);
        return r
    }
    var i = String.fromCharCode
      , a = r(0)
      , o = !0
      , s = !0;
    try {
        i.apply(null, [0])
    } catch (t) {
        o = !1
    }
    try {
        i.apply(null, new Uint8Array(1))
    } catch (t) {
        s = !1
    }
    for (var u = new a.Buf8(256), l = 0; 256 > l; l++)
        u[l] = 252 <= l ? 6 : 248 <= l ? 5 : 240 <= l ? 4 : 224 <= l ? 3 : 192 <= l ? 2 : 1;
    u[254] = u[254] = 1,
    e.string2buf = function(t) {
        var e, r, n, i, o, s = t.length, u = 0;
        for (i = 0; i < s; i++)
            55296 == (64512 & (r = t.charCodeAt(i))) && i + 1 < s && (56320 == (64512 & (n = t.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320),
            i++)),
            u += 128 > r ? 1 : 2048 > r ? 2 : 65536 > r ? 3 : 4;
        for (e = new a.Buf8(u),
        o = 0,
        i = 0; o < u; i++)
            55296 == (64512 & (r = t.charCodeAt(i))) && i + 1 < s && (56320 == (64512 & (n = t.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320),
            i++)),
            128 > r ? e[o++] = r : 2048 > r ? (e[o++] = 192 | r >>> 6,
            e[o++] = 128 | 63 & r) : 65536 > r ? (e[o++] = 224 | r >>> 12,
            e[o++] = 128 | 63 & r >>> 6,
            e[o++] = 128 | 63 & r) : (e[o++] = 240 | r >>> 18,
            e[o++] = 128 | 63 & r >>> 12,
            e[o++] = 128 | 63 & r >>> 6,
            e[o++] = 128 | 63 & r);
        return e
    }
    ,
    e.buf2binstring = function(t) {
        return n(t, t.length)
    }
    ,
    e.binstring2buf = function(t) {
        for (var e = new a.Buf8(t.length), r = 0, n = e.length; r < n; r++)
            e[r] = t.charCodeAt(r);
        return e
    }
    ,
    e.buf2string = function(t, e) {
        var r, i, a, o, s = e || t.length, l = Array(2 * s);
        for (i = 0,
        r = 0; r < s; )
            if (128 > (a = t[r++]))
                l[i++] = a;
            else if (4 < (o = u[a]))
                l[i++] = 65533,
                r += o - 1;
            else {
                for (a &= 2 === o ? 31 : 3 === o ? 15 : 7; 1 < o && r < s; )
                    a = a << 6 | 63 & t[r++],
                    o--;
                1 < o ? l[i++] = 65533 : 65536 > a ? l[i++] = a : (a -= 65536,
                l[i++] = 55296 | 1023 & a >> 10,
                l[i++] = 56320 | 1023 & a)
            }
        return n(l, i)
    }
    ,
    e.utf8border = function(t, e) {
        var r;
        for ((e = e || t.length) > t.length && (e = t.length),
        r = e - 1; 0 <= r && 128 == (192 & t[r]); )
            r--;
        return 0 > r || 0 === r ? e : r + u[t[r]] > e ? r : e
    }
}
, function(t) {
    "use strict";
    t.exports = function() {
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
    }
}
, function(t) {
    "use strict";
    t.exports = {
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
    }
}
, function(t, e, r) {
    "use strict";
    var n = {};
    (0,
    r(0).assign)(n, r(12), r(15), r(6)),
    t.exports = n
}
, , , , function() {
    var t = Math.randomInt;
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
        window.setTimeout(t, 1e3 / 60)
    }
    ,
    jQuery.support.cors = !0,
    $.ajaxTransport ? ($.ajaxSetup({
        flatOptions: {
            renderer: !0
        }
    }),
    $.ajaxTransport("+binary", (function(t, e, r) {
        if (window.FormData && (t.dataType && "binary" == t.dataType || t.data && (window.ArrayBuffer && t.data instanceof ArrayBuffer || window.Blob && t.data instanceof Blob)))
            return {
                send: function(e, r) {
                    var n = new XMLHttpRequest
                      , i = t.url
                      , a = t.type
                      , o = t.responseType || "blob"
                      , s = t.data || null;
                    t.renderer && n.addEventListener("progress", (function(e) {
                        e.lengthComputable && (t.renderer.downloads[this.responseURL] ? t.renderer.downloads[this.responseURL].loaded = e.loaded : t.renderer.downloads[this.responseURL] = {
                            loaded: e.loaded,
                            total: e.total
                        },
                        t.renderer.updateProgress())
                    }
                    )),
                    n.addEventListener("load", (function() {
                        t.renderer && (delete t.renderer.downloads[this.responseURL],
                        t.renderer.updateProgress());
                        var e = {};
                        e[t.dataType] = n.response,
                        r(n.status, n.statusText, e, n.getAllResponseHeaders())
                    }
                    )),
                    n.open(a, i, !0),
                    n.responseType = o,
                    n.send(s)
                },
                abort: function() {
                    r.abort()
                }
            }
    }
    ))) : (function() {
        var t = $.httpData;
        $.httpData = function(e, r, n) {
            return "binary" == r ? e.response : t(e, r, n)
        }
    }(),
    $.ajaxSetup({
        beforeSend: function(t, e) {
            "binary" == e.dataType && (t.responseType = e.responseType || "arraybuffer",
            t.addEventListener("progress", (function(t) {
                !e.renderer || t.lengthComputable && (e.renderer.downloads[this.responseURL] ? e.renderer.downloads[this.responseURL].loaded = t.loaded : e.renderer.downloads[this.responseURL] = {
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
    t = t || function(t, e) {
        return Math.floor(Math.random() * (e - t)) + t
    }
    ,
    "function" != typeof Object.create && (Object.create = function() {
        var t = function() {};
        return function(e) {
            if (1 < arguments.length)
                throw Error("Second argument not supported");
            if ("object" != typeof e)
                throw TypeError("Argument must be an object");
            t.prototype = e;
            var r = new t;
            return t.prototype = null,
            r
        }
    }()),
    window.console = window.console || {
        log: function() {},
        error: function() {},
        warn: function() {}
    }
}
, function(t, e, r) {
    "use strict";
    function n(t) {
        if (!(this instanceof n))
            return new n(t);
        this.options = o.assign({
            level: f,
            method: b,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: d,
            to: ""
        }, t || {});
        var e = this.options;
        e.raw && 0 < e.windowBits ? e.windowBits = -e.windowBits : e.gzip && 0 < e.windowBits && 16 > e.windowBits && (e.windowBits += 16),
        this.err = 0,
        this.msg = "",
        this.ended = !1,
        this.chunks = [],
        this.strm = new l,
        this.strm.avail_out = 0;
        var r = a.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
        if (r !== h)
            throw new Error(u[r]);
        if (e.header && a.deflateSetHeader(this.strm, e.header),
        e.dictionary) {
            var i;
            if (i = "string" == typeof e.dictionary ? s.string2buf(e.dictionary) : "[object ArrayBuffer]" === c.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary,
            (r = a.deflateSetDictionary(this.strm, i)) !== h)
                throw new Error(u[r]);
            this._dict_set = !0
        }
    }
    function i(t, e) {
        var r = new n(e);
        if (r.push(t, !0),
        r.err)
            throw r.msg || u[r.err];
        return r.result
    }
    var a = r(13)
      , o = r(0)
      , s = r(4)
      , u = r(1)
      , l = r(5)
      , c = Object.prototype.toString
      , h = 0
      , f = -1
      , d = 0
      , b = 8;
    n.prototype.push = function(t, e) {
        var r, n, i = this.strm, u = this.options.chunkSize;
        if (this.ended)
            return !1;
        n = e === ~~e ? e : !0 === e ? 4 : 0,
        i.input = "string" == typeof t ? s.string2buf(t) : "[object ArrayBuffer]" === c.call(t) ? new Uint8Array(t) : t,
        i.next_in = 0,
        i.avail_in = i.input.length;
        do {
            if (0 === i.avail_out && (i.output = new o.Buf8(u),
            i.next_out = 0,
            i.avail_out = u),
            1 !== (r = a.deflate(i, n)) && r !== h)
                return this.onEnd(r),
                this.ended = !0,
                !1;
            (0 === i.avail_out || 0 === i.avail_in && (4 === n || 2 === n)) && ("string" === this.options.to ? this.onData(s.buf2binstring(o.shrinkBuf(i.output, i.next_out))) : this.onData(o.shrinkBuf(i.output, i.next_out)))
        } while ((0 < i.avail_in || 0 === i.avail_out) && 1 !== r);
        return 4 === n ? (r = a.deflateEnd(this.strm),
        this.onEnd(r),
        this.ended = !0,
        r === h) : 2 !== n || (this.onEnd(h),
        i.avail_out = 0,
        !0)
    }
    ,
    n.prototype.onData = function(t) {
        this.chunks.push(t)
    }
    ,
    n.prototype.onEnd = function(t) {
        t === h && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)),
        this.chunks = [],
        this.err = t,
        this.msg = this.strm.msg
    }
    ,
    e.Deflate = n,
    e.deflate = i,
    e.deflateRaw = function(t, e) {
        return (e = e || {}).raw = !0,
        i(t, e)
    }
    ,
    e.gzip = function(t, e) {
        return (e = e || {}).gzip = !0,
        i(t, e)
    }
}
, function(t, e, r) {
    "use strict";
    function n(t, e) {
        return t.msg = F[e],
        e
    }
    function i(t) {
        return (t << 1) - (4 < t ? 9 : 0)
    }
    function a(t) {
        for (var e = t.length; 0 <= --e; )
            t[e] = 0
    }
    function o(t) {
        var e = t.state
          , r = e.pending;
        r > t.avail_out && (r = t.avail_out),
        0 === r || (w.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out),
        t.next_out += r,
        e.pending_out += r,
        t.total_out += r,
        t.avail_out -= r,
        e.pending -= r,
        0 === e.pending && (e.pending_out = 0))
    }
    function s(t, e) {
        A._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, e),
        t.block_start = t.strstart,
        o(t.strm)
    }
    function u(t, e) {
        t.pending_buf[t.pending++] = e
    }
    function l(t, e) {
        t.pending_buf[t.pending++] = 255 & e >>> 8,
        t.pending_buf[t.pending++] = 255 & e
    }
    function c(t, e, r, n) {
        var i = t.avail_in;
        return i > n && (i = n),
        0 === i ? 0 : (t.avail_in -= i,
        w.arraySet(e, t.input, t.next_in, i, r),
        1 === t.state.wrap ? t.adler = E(t.adler, e, i, r) : 2 === t.state.wrap && (t.adler = S(t.adler, e, i, r)),
        t.next_in += i,
        t.total_in += i,
        i)
    }
    function h(t, e) {
        var r, n, i = t.max_chain_length, a = t.strstart, o = t.prev_length, s = t.nice_match, u = t.strstart > t.w_size - Q ? t.strstart - (t.w_size - Q) : 0, l = t.window, c = t.w_mask, h = t.prev, f = t.strstart + K, d = l[a + o - 1], b = l[a + o];
        t.prev_length >= t.good_match && (i >>= 2),
        s > t.lookahead && (s = t.lookahead);
        do {
            if (l[(r = e) + o] === b && l[r + o - 1] === d && l[r] === l[a] && l[++r] === l[a + 1]) {
                a += 2,
                r++;
                do {} while (l[++a] === l[++r] && l[++a] === l[++r] && l[++a] === l[++r] && l[++a] === l[++r] && l[++a] === l[++r] && l[++a] === l[++r] && l[++a] === l[++r] && l[++a] === l[++r] && a < f);
                if (n = K - (f - a),
                a = f - K,
                n > o) {
                    if (t.match_start = e,
                    o = n,
                    n >= s)
                        break;
                    d = l[a + o - 1],
                    b = l[a + o]
                }
            }
        } while ((e = h[e & c]) > u && 0 != --i);
        return o <= t.lookahead ? o : t.lookahead
    }
    function f(t) {
        var e, r, n, i, a, o = t.w_size;
        do {
            if (i = t.window_size - t.lookahead - t.strstart,
            t.strstart >= o + (o - Q)) {
                w.arraySet(t.window, t.window, o, o, 0),
                t.match_start -= o,
                t.strstart -= o,
                t.block_start -= o,
                e = r = t.hash_size;
                do {
                    n = t.head[--e],
                    t.head[e] = n >= o ? n - o : 0
                } while (--r);
                e = r = o;
                do {
                    n = t.prev[--e],
                    t.prev[e] = n >= o ? n - o : 0
                } while (--r);
                i += o
            }
            if (0 === t.strm.avail_in)
                break;
            if (r = c(t.strm, t.window, t.strstart + t.lookahead, i),
            t.lookahead += r,
            t.lookahead + t.insert >= J)
                for (a = t.strstart - t.insert,
                t.ins_h = t.window[a],
                t.ins_h = (t.ins_h << t.hash_shift ^ t.window[a + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[a + J - 1]) & t.hash_mask,
                t.prev[a & t.w_mask] = t.head[t.ins_h],
                t.head[t.ins_h] = a,
                a++,
                t.insert--,
                !(t.lookahead + t.insert < J)); )
                    ;
        } while (t.lookahead < Q && 0 !== t.strm.avail_in)
    }
    function d(t, e) {
        for (var r, n; ; ) {
            if (t.lookahead < Q) {
                if (f(t),
                t.lookahead < Q && e === k)
                    return st;
                if (0 === t.lookahead)
                    break
            }
            if (r = 0,
            t.lookahead >= J && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + J - 1]) & t.hash_mask,
            r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
            t.head[t.ins_h] = t.strstart),
            0 !== r && t.strstart - r <= t.w_size - Q && (t.match_length = h(t, r)),
            t.match_length >= J)
                if (n = A._tr_tally(t, t.strstart - t.match_start, t.match_length - J),
                t.lookahead -= t.match_length,
                t.match_length <= t.max_lazy_match && t.lookahead >= J) {
                    t.match_length--;
                    do {
                        t.strstart++,
                        t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + J - 1]) & t.hash_mask,
                        r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                        t.head[t.ins_h] = t.strstart
                    } while (0 != --t.match_length);
                    t.strstart++
                } else
                    t.strstart += t.match_length,
                    t.match_length = 0,
                    t.ins_h = t.window[t.strstart],
                    t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
            else
                n = A._tr_tally(t, 0, t.window[t.strstart]),
                t.lookahead--,
                t.strstart++;
            if (n && (s(t, !1),
            0 === t.strm.avail_out))
                return st
        }
        return t.insert = t.strstart < J - 1 ? t.strstart : J - 1,
        e === R ? (s(t, !0),
        0 === t.strm.avail_out ? lt : ct) : t.last_lit && (s(t, !1),
        0 === t.strm.avail_out) ? st : ut
    }
    function b(t, e) {
        for (var r, n, i; ; ) {
            if (t.lookahead < Q) {
                if (f(t),
                t.lookahead < Q && e === k)
                    return st;
                if (0 === t.lookahead)
                    break
            }
            if (r = 0,
            t.lookahead >= J && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + J - 1]) & t.hash_mask,
            r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
            t.head[t.ins_h] = t.strstart),
            t.prev_length = t.match_length,
            t.prev_match = t.match_start,
            t.match_length = J - 1,
            0 !== r && t.prev_length < t.max_lazy_match && t.strstart - r <= t.w_size - Q && (t.match_length = h(t, r),
            5 >= t.match_length && (t.strategy === O || t.match_length === J && 4096 < t.strstart - t.match_start) && (t.match_length = J - 1)),
            t.prev_length >= J && t.match_length <= t.prev_length) {
                i = t.strstart + t.lookahead - J,
                n = A._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - J),
                t.lookahead -= t.prev_length - 1,
                t.prev_length -= 2;
                do {
                    ++t.strstart <= i && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + J - 1]) & t.hash_mask,
                    r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                    t.head[t.ins_h] = t.strstart)
                } while (0 != --t.prev_length);
                if (t.match_available = 0,
                t.match_length = J - 1,
                t.strstart++,
                n && (s(t, !1),
                0 === t.strm.avail_out))
                    return st
            } else if (t.match_available) {
                if ((n = A._tr_tally(t, 0, t.window[t.strstart - 1])) && s(t, !1),
                t.strstart++,
                t.lookahead--,
                0 === t.strm.avail_out)
                    return st
            } else
                t.match_available = 1,
                t.strstart++,
                t.lookahead--
        }
        return t.match_available && (n = A._tr_tally(t, 0, t.window[t.strstart - 1]),
        t.match_available = 0),
        t.insert = t.strstart < J - 1 ? t.strstart : J - 1,
        e === R ? (s(t, !0),
        0 === t.strm.avail_out ? lt : ct) : t.last_lit && (s(t, !1),
        0 === t.strm.avail_out) ? st : ut
    }
    function m(t, e) {
        for (var r, n, i, a, o = t.window; ; ) {
            if (t.lookahead <= K) {
                if (f(t),
                t.lookahead <= K && e === k)
                    return st;
                if (0 === t.lookahead)
                    break
            }
            if (t.match_length = 0,
            t.lookahead >= J && 0 < t.strstart && ((n = o[i = t.strstart - 1]) === o[++i] && n === o[++i] && n === o[++i])) {
                a = t.strstart + K;
                do {} while (n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && i < a);
                t.match_length = K - (a - i),
                t.match_length > t.lookahead && (t.match_length = t.lookahead)
            }
            if (t.match_length >= J ? (r = A._tr_tally(t, 1, t.match_length - J),
            t.lookahead -= t.match_length,
            t.strstart += t.match_length,
            t.match_length = 0) : (r = A._tr_tally(t, 0, t.window[t.strstart]),
            t.lookahead--,
            t.strstart++),
            r && (s(t, !1),
            0 === t.strm.avail_out))
                return st
        }
        return t.insert = 0,
        e === R ? (s(t, !0),
        0 === t.strm.avail_out ? lt : ct) : t.last_lit && (s(t, !1),
        0 === t.strm.avail_out) ? st : ut
    }
    function p(t, e) {
        for (var r; ; ) {
            if (0 === t.lookahead && (f(t),
            0 === t.lookahead)) {
                if (e === k)
                    return st;
                break
            }
            if (t.match_length = 0,
            r = A._tr_tally(t, 0, t.window[t.strstart]),
            t.lookahead--,
            t.strstart++,
            r && (s(t, !1),
            0 === t.strm.avail_out))
                return st
        }
        return t.insert = 0,
        e === R ? (s(t, !0),
        0 === t.strm.avail_out ? lt : ct) : t.last_lit && (s(t, !1),
        0 === t.strm.avail_out) ? st : ut
    }
    function g(t, e, r, n, i) {
        this.good_length = t,
        this.max_lazy = e,
        this.nice_length = r,
        this.max_chain = n,
        this.func = i
    }
    function _() {
        this.strm = null,
        this.status = 0,
        this.pending_buf = null,
        this.pending_buf_size = 0,
        this.pending_out = 0,
        this.pending = 0,
        this.wrap = 0,
        this.gzhead = null,
        this.gzindex = 0,
        this.method = j,
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
        this.dyn_ltree = new w.Buf16(2 * W),
        this.dyn_dtree = new w.Buf16(2 * (2 * X + 1)),
        this.bl_tree = new w.Buf16(2 * (2 * Y + 1)),
        a(this.dyn_ltree),
        a(this.dyn_dtree),
        a(this.bl_tree),
        this.l_desc = null,
        this.d_desc = null,
        this.bl_desc = null,
        this.bl_count = new w.Buf16(Z + 1),
        this.heap = new w.Buf16(2 * G + 1),
        a(this.heap),
        this.heap_len = 0,
        this.heap_max = 0,
        this.depth = new w.Buf16(2 * G + 1),
        a(this.depth),
        this.l_buf = 0,
        this.lit_bufsize = 0,
        this.last_lit = 0,
        this.d_buf = 0,
        this.opt_len = 0,
        this.static_len = 0,
        this.matches = 0,
        this.insert = 0,
        this.bi_buf = 0,
        this.bi_valid = 0
    }
    function v(t) {
        var e;
        return t && t.state ? (t.total_in = t.total_out = 0,
        t.data_type = H,
        (e = t.state).pending = 0,
        e.pending_out = 0,
        0 > e.wrap && (e.wrap = -e.wrap),
        e.status = e.wrap ? tt : at,
        t.adler = 2 === e.wrap ? 0 : 1,
        e.last_flush = k,
        A._tr_init(e),
        I) : n(t, B)
    }
    function x(t) {
        var e = v(t);
        return e === I && function(t) {
            t.window_size = 2 * t.w_size,
            a(t.head),
            t.max_lazy_match = T[t.level].max_lazy,
            t.good_match = T[t.level].good_length,
            t.nice_match = T[t.level].nice_length,
            t.max_chain_length = T[t.level].max_chain,
            t.strstart = 0,
            t.block_start = 0,
            t.lookahead = 0,
            t.insert = 0,
            t.match_length = t.prev_length = J - 1,
            t.match_available = 0,
            t.ins_h = 0
        }(t.state),
        e
    }
    function y(t, e, r, i, a, o) {
        if (!t)
            return B;
        var s = 1;
        if (e === z && (e = 6),
        0 > i ? (s = 0,
        i = -i) : 15 < i && (s = 2,
        i -= 16),
        1 > a || a > q || r !== j || 8 > i || 15 < i || 0 > e || 9 < e || 0 > o || o > N)
            return n(t, B);
        8 === i && (i = 9);
        var u = new _;
        return t.state = u,
        u.strm = t,
        u.wrap = s,
        u.gzhead = null,
        u.w_bits = i,
        u.w_size = 1 << u.w_bits,
        u.w_mask = u.w_size - 1,
        u.hash_bits = a + 7,
        u.hash_size = 1 << u.hash_bits,
        u.hash_mask = u.hash_size - 1,
        u.hash_shift = ~~((u.hash_bits + J - 1) / J),
        u.window = new w.Buf8(2 * u.w_size),
        u.head = new w.Buf16(u.hash_size),
        u.prev = new w.Buf16(u.w_size),
        u.lit_bufsize = 1 << a + 6,
        u.pending_buf_size = 4 * u.lit_bufsize,
        u.pending_buf = new w.Buf8(u.pending_buf_size),
        u.d_buf = 1 * u.lit_bufsize,
        u.l_buf = 3 * u.lit_bufsize,
        u.level = e,
        u.strategy = o,
        u.method = r,
        x(t)
    }
    var T, w = r(0), A = r(14), E = r(2), S = r(3), F = r(1), k = 0, C = 1, D = 3, R = 4, M = 5, I = 0, P = 1, B = -2, U = -5, z = -1, O = 1, L = 2, V = 3, N = 4, H = 2, j = 8, q = 9, G = 286, X = 30, Y = 19, W = 2 * G + 1, Z = 15, J = 3, K = 258, Q = K + J + 1, $ = 32, tt = 42, et = 69, rt = 73, nt = 91, it = 103, at = 113, ot = 666, st = 1, ut = 2, lt = 3, ct = 4, ht = 3;
    T = [new g(0,0,0,0,(function(t, e) {
        var r = 65535;
        for (r > t.pending_buf_size - 5 && (r = t.pending_buf_size - 5); ; ) {
            if (1 >= t.lookahead) {
                if (f(t),
                0 === t.lookahead && e === k)
                    return st;
                if (0 === t.lookahead)
                    break
            }
            t.strstart += t.lookahead,
            t.lookahead = 0;
            var n = t.block_start + r;
            if ((0 === t.strstart || t.strstart >= n) && (t.lookahead = t.strstart - n,
            t.strstart = n,
            s(t, !1),
            0 === t.strm.avail_out))
                return st;
            if (t.strstart - t.block_start >= t.w_size - Q && (s(t, !1),
            0 === t.strm.avail_out))
                return st
        }
        return t.insert = 0,
        e === R ? (s(t, !0),
        0 === t.strm.avail_out ? lt : ct) : (t.strstart > t.block_start && (s(t, !1),
        t.strm.avail_out),
        st)
    }
    )), new g(4,4,8,4,d), new g(4,5,16,8,d), new g(4,6,32,32,d), new g(4,4,16,16,b), new g(8,16,32,32,b), new g(8,16,128,128,b), new g(8,32,128,256,b), new g(32,128,258,1024,b), new g(32,258,258,4096,b)],
    e.deflateInit = function(t, e) {
        return y(t, e, j, 15, 8, 0)
    }
    ,
    e.deflateInit2 = y,
    e.deflateReset = x,
    e.deflateResetKeep = v,
    e.deflateSetHeader = function(t, e) {
        return t && t.state && 2 === t.state.wrap ? (t.state.gzhead = e,
        I) : B
    }
    ,
    e.deflate = function(t, e) {
        var r, s, c, h;
        if (!t || !t.state || e > M || 0 > e)
            return t ? n(t, B) : B;
        if (s = t.state,
        !t.output || !t.input && 0 !== t.avail_in || s.status === ot && e !== R)
            return n(t, 0 === t.avail_out ? U : B);
        if (s.strm = t,
        r = s.last_flush,
        s.last_flush = e,
        s.status === tt)
            if (2 === s.wrap)
                t.adler = 0,
                u(s, 31),
                u(s, 139),
                u(s, 8),
                s.gzhead ? (u(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)),
                u(s, 255 & s.gzhead.time),
                u(s, 255 & s.gzhead.time >> 8),
                u(s, 255 & s.gzhead.time >> 16),
                u(s, 255 & s.gzhead.time >> 24),
                u(s, 9 === s.level ? 2 : s.strategy >= L || 2 > s.level ? 4 : 0),
                u(s, 255 & s.gzhead.os),
                s.gzhead.extra && s.gzhead.extra.length && (u(s, 255 & s.gzhead.extra.length),
                u(s, 255 & s.gzhead.extra.length >> 8)),
                s.gzhead.hcrc && (t.adler = S(t.adler, s.pending_buf, s.pending, 0)),
                s.gzindex = 0,
                s.status = et) : (u(s, 0),
                u(s, 0),
                u(s, 0),
                u(s, 0),
                u(s, 0),
                u(s, 9 === s.level ? 2 : s.strategy >= L || 2 > s.level ? 4 : 0),
                u(s, ht),
                s.status = at);
            else {
                var f = j + (s.w_bits - 8 << 4) << 8;
                f |= (s.strategy >= L || 2 > s.level ? 0 : 6 > s.level ? 1 : 6 === s.level ? 2 : 3) << 6,
                0 !== s.strstart && (f |= $),
                f += 31 - f % 31,
                s.status = at,
                l(s, f),
                0 !== s.strstart && (l(s, t.adler >>> 16),
                l(s, 65535 & t.adler)),
                t.adler = 1
            }
        if (s.status === et)
            if (s.gzhead.extra) {
                for (c = s.pending; s.gzindex < (65535 & s.gzhead.extra.length) && (s.pending !== s.pending_buf_size || (s.gzhead.hcrc && s.pending > c && (t.adler = S(t.adler, s.pending_buf, s.pending - c, c)),
                o(t),
                c = s.pending,
                s.pending !== s.pending_buf_size)); )
                    u(s, 255 & s.gzhead.extra[s.gzindex]),
                    s.gzindex++;
                s.gzhead.hcrc && s.pending > c && (t.adler = S(t.adler, s.pending_buf, s.pending - c, c)),
                s.gzindex === s.gzhead.extra.length && (s.gzindex = 0,
                s.status = rt)
            } else
                s.status = rt;
        if (s.status === rt)
            if (s.gzhead.name) {
                c = s.pending;
                do {
                    if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > c && (t.adler = S(t.adler, s.pending_buf, s.pending - c, c)),
                    o(t),
                    c = s.pending,
                    s.pending === s.pending_buf_size)) {
                        h = 1;
                        break
                    }
                    h = s.gzindex < s.gzhead.name.length ? 255 & s.gzhead.name.charCodeAt(s.gzindex++) : 0,
                    u(s, h)
                } while (0 !== h);
                s.gzhead.hcrc && s.pending > c && (t.adler = S(t.adler, s.pending_buf, s.pending - c, c)),
                0 === h && (s.gzindex = 0,
                s.status = nt)
            } else
                s.status = nt;
        if (s.status === nt)
            if (s.gzhead.comment) {
                c = s.pending;
                do {
                    if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > c && (t.adler = S(t.adler, s.pending_buf, s.pending - c, c)),
                    o(t),
                    c = s.pending,
                    s.pending === s.pending_buf_size)) {
                        h = 1;
                        break
                    }
                    h = s.gzindex < s.gzhead.comment.length ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++) : 0,
                    u(s, h)
                } while (0 !== h);
                s.gzhead.hcrc && s.pending > c && (t.adler = S(t.adler, s.pending_buf, s.pending - c, c)),
                0 === h && (s.status = it)
            } else
                s.status = it;
        if (s.status === it && (s.gzhead.hcrc ? (s.pending + 2 > s.pending_buf_size && o(t),
        s.pending + 2 <= s.pending_buf_size && (u(s, 255 & t.adler),
        u(s, 255 & t.adler >> 8),
        t.adler = 0,
        s.status = at)) : s.status = at),
        0 !== s.pending) {
            if (o(t),
            0 === t.avail_out)
                return s.last_flush = -1,
                I
        } else if (0 === t.avail_in && i(e) <= i(r) && e !== R)
            return n(t, U);
        if (s.status === ot && 0 !== t.avail_in)
            return n(t, U);
        if (0 !== t.avail_in || 0 !== s.lookahead || e !== k && s.status !== ot) {
            var d = s.strategy === L ? p(s, e) : s.strategy === V ? m(s, e) : T[s.level].func(s, e);
            if ((d === lt || d === ct) && (s.status = ot),
            d === st || d === lt)
                return 0 === t.avail_out && (s.last_flush = -1),
                I;
            if (d === ut && (e === C ? A._tr_align(s) : e !== M && (A._tr_stored_block(s, 0, 0, !1),
            e === D && (a(s.head),
            0 === s.lookahead && (s.strstart = 0,
            s.block_start = 0,
            s.insert = 0))),
            o(t),
            0 === t.avail_out))
                return s.last_flush = -1,
                I
        }
        return e === R ? 0 >= s.wrap ? P : (2 === s.wrap ? (u(s, 255 & t.adler),
        u(s, 255 & t.adler >> 8),
        u(s, 255 & t.adler >> 16),
        u(s, 255 & t.adler >> 24),
        u(s, 255 & t.total_in),
        u(s, 255 & t.total_in >> 8),
        u(s, 255 & t.total_in >> 16),
        u(s, 255 & t.total_in >> 24)) : (l(s, t.adler >>> 16),
        l(s, 65535 & t.adler)),
        o(t),
        0 < s.wrap && (s.wrap = -s.wrap),
        0 === s.pending ? P : I) : I
    }
    ,
    e.deflateEnd = function(t) {
        var e;
        return t && t.state ? (e = t.state.status) !== tt && e !== et && e !== rt && e !== nt && e !== it && e !== at && e !== ot ? n(t, B) : (t.state = null,
        e === at ? n(t, -3) : I) : B
    }
    ,
    e.deflateSetDictionary = function(t, e) {
        var r, n, i, o, s, u, l, c, h = e.length;
        if (!t || !t.state)
            return B;
        if (2 === (o = (r = t.state).wrap) || 1 === o && r.status !== tt || r.lookahead)
            return B;
        for (1 === o && (t.adler = E(t.adler, e, h, 0)),
        r.wrap = 0,
        h >= r.w_size && (0 === o && (a(r.head),
        r.strstart = 0,
        r.block_start = 0,
        r.insert = 0),
        c = new w.Buf8(r.w_size),
        w.arraySet(c, e, h - r.w_size, r.w_size, 0),
        e = c,
        h = r.w_size),
        s = t.avail_in,
        u = t.next_in,
        l = t.input,
        t.avail_in = h,
        t.next_in = 0,
        t.input = e,
        f(r); r.lookahead >= J; ) {
            n = r.strstart,
            i = r.lookahead - (J - 1);
            do {
                r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + J - 1]) & r.hash_mask,
                r.prev[n & r.w_mask] = r.head[r.ins_h],
                r.head[r.ins_h] = n,
                n++
            } while (--i);
            r.strstart = n,
            r.lookahead = J - 1,
            f(r)
        }
        return r.strstart += r.lookahead,
        r.block_start = r.strstart,
        r.insert = r.lookahead,
        r.lookahead = 0,
        r.match_length = r.prev_length = J - 1,
        r.match_available = 0,
        t.next_in = u,
        t.input = l,
        t.avail_in = s,
        r.wrap = o,
        I
    }
    ,
    e.deflateInfo = "pako deflate (from Nodeca project)"
}
, function(t, e, r) {
    "use strict";
    function n(t) {
        for (var e = t.length; 0 <= --e; )
            t[e] = 0
    }
    function i(t, e, r, n, i) {
        this.static_tree = t,
        this.extra_bits = e,
        this.extra_base = r,
        this.elems = n,
        this.max_length = i,
        this.has_stree = t && t.length
    }
    function a(t, e) {
        this.dyn_tree = t,
        this.max_code = 0,
        this.stat_desc = e
    }
    function o(t) {
        return 256 > t ? q[t] : q[256 + (t >>> 7)]
    }
    function s(t, e) {
        t.pending_buf[t.pending++] = 255 & e,
        t.pending_buf[t.pending++] = 255 & e >>> 8
    }
    function u(t, e, r) {
        t.bi_valid > M - r ? (t.bi_buf |= 65535 & e << t.bi_valid,
        s(t, t.bi_buf),
        t.bi_buf = e >> M - t.bi_valid,
        t.bi_valid += r - M) : (t.bi_buf |= 65535 & e << t.bi_valid,
        t.bi_valid += r)
    }
    function l(t, e, r) {
        u(t, r[2 * e], r[2 * e + 1])
    }
    function c(t, e) {
        var r = 0;
        do {
            r |= 1 & t,
            t >>>= 1,
            r <<= 1
        } while (0 < --e);
        return r >>> 1
    }
    function h(t, e, r) {
        var n, i, a = Array(R + 1), o = 0;
        for (n = 1; n <= R; n++)
            a[n] = o = o + r[n - 1] << 1;
        for (i = 0; i <= e; i++) {
            var s = t[2 * i + 1];
            0 !== s && (t[2 * i] = c(a[s]++, s))
        }
    }
    function f(t) {
        var e;
        for (e = 0; e < F; e++)
            t.dyn_ltree[2 * e] = 0;
        for (e = 0; e < k; e++)
            t.dyn_dtree[2 * e] = 0;
        for (e = 0; e < C; e++)
            t.bl_tree[2 * e] = 0;
        t.dyn_ltree[2 * P] = 1,
        t.opt_len = t.static_len = 0,
        t.last_lit = t.matches = 0
    }
    function d(t) {
        8 < t.bi_valid ? s(t, t.bi_buf) : 0 < t.bi_valid && (t.pending_buf[t.pending++] = t.bi_buf),
        t.bi_buf = 0,
        t.bi_valid = 0
    }
    function b(t, e, r, n) {
        var i = 2 * e
          , a = 2 * r;
        return t[i] < t[a] || t[i] === t[a] && n[e] <= n[r]
    }
    function m(t, e, r) {
        for (var n = t.heap[r], i = r << 1; i <= t.heap_len && (i < t.heap_len && b(e, t.heap[i + 1], t.heap[i], t.depth) && i++,
        !b(e, n, t.heap[i], t.depth)); )
            t.heap[r] = t.heap[i],
            r = i,
            i <<= 1;
        t.heap[r] = n
    }
    function p(t, e, r) {
        var n, i, a, s, c = 0;
        if (0 !== t.last_lit)
            do {
                n = t.pending_buf[t.d_buf + 2 * c] << 8 | t.pending_buf[t.d_buf + 2 * c + 1],
                i = t.pending_buf[t.l_buf + c],
                c++,
                0 === n ? l(t, i, e) : (l(t, (a = G[i]) + S + 1, e),
                0 !== (s = O[a]) && u(t, i -= X[a], s),
                l(t, a = o(--n), r),
                0 !== (s = L[a]) && u(t, n -= Y[a], s))
            } while (c < t.last_lit);
        l(t, P, e)
    }
    function g(t, e) {
        var r, n, i, a = e.dyn_tree, o = e.stat_desc.static_tree, s = e.stat_desc.has_stree, u = e.stat_desc.elems, l = -1;
        for (t.heap_len = 0,
        t.heap_max = D,
        r = 0; r < u; r++)
            0 === a[2 * r] ? a[2 * r + 1] = 0 : (t.heap[++t.heap_len] = l = r,
            t.depth[r] = 0);
        for (; 2 > t.heap_len; )
            a[2 * (i = t.heap[++t.heap_len] = 2 > l ? ++l : 0)] = 1,
            t.depth[i] = 0,
            t.opt_len--,
            s && (t.static_len -= o[2 * i + 1]);
        for (e.max_code = l,
        r = t.heap_len >> 1; 1 <= r; r--)
            m(t, a, r);
        i = u;
        do {
            r = t.heap[1],
            t.heap[1] = t.heap[t.heap_len--],
            m(t, a, 1),
            n = t.heap[1],
            t.heap[--t.heap_max] = r,
            t.heap[--t.heap_max] = n,
            a[2 * i] = a[2 * r] + a[2 * n],
            t.depth[i] = (t.depth[r] >= t.depth[n] ? t.depth[r] : t.depth[n]) + 1,
            a[2 * r + 1] = a[2 * n + 1] = i,
            t.heap[1] = i++,
            m(t, a, 1)
        } while (2 <= t.heap_len);
        t.heap[--t.heap_max] = t.heap[1],
        function(t, e) {
            var r, n, i, a, o, s, u = e.dyn_tree, l = e.max_code, c = e.stat_desc.static_tree, h = e.stat_desc.has_stree, f = e.stat_desc.extra_bits, d = e.stat_desc.extra_base, b = e.stat_desc.max_length, m = 0;
            for (a = 0; a <= R; a++)
                t.bl_count[a] = 0;
            for (u[2 * t.heap[t.heap_max] + 1] = 0,
            r = t.heap_max + 1; r < D; r++)
                (a = u[2 * u[2 * (n = t.heap[r]) + 1] + 1] + 1) > b && (a = b,
                m++),
                u[2 * n + 1] = a,
                !(n > l) && (t.bl_count[a]++,
                o = 0,
                n >= d && (o = f[n - d]),
                s = u[2 * n],
                t.opt_len += s * (a + o),
                h && (t.static_len += s * (c[2 * n + 1] + o)));
            if (0 != m) {
                do {
                    for (a = b - 1; 0 === t.bl_count[a]; )
                        a--;
                    t.bl_count[a]--,
                    t.bl_count[a + 1] += 2,
                    t.bl_count[b]--,
                    m -= 2
                } while (0 < m);
                for (a = b; 0 !== a; a--)
                    for (n = t.bl_count[a]; 0 !== n; )
                        !((i = t.heap[--r]) > l) && (u[2 * i + 1] !== a && (t.opt_len += (a - u[2 * i + 1]) * u[2 * i],
                        u[2 * i + 1] = a),
                        n--)
            }
        }(t, e),
        h(a, l, t.bl_count)
    }
    function _(t, e, r) {
        var n, i, a = -1, o = e[1], s = 0, u = 7, l = 4;
        for (0 === o && (u = 138,
        l = 3),
        e[2 * (r + 1) + 1] = 65535,
        n = 0; n <= r; n++)
            i = o,
            o = e[2 * (n + 1) + 1],
            ++s < u && i === o || (s < l ? t.bl_tree[2 * i] += s : 0 === i ? 10 >= s ? t.bl_tree[2 * U]++ : t.bl_tree[2 * z]++ : (i !== a && t.bl_tree[2 * i]++,
            t.bl_tree[2 * B]++),
            s = 0,
            a = i,
            0 === o ? (u = 138,
            l = 3) : i === o ? (u = 6,
            l = 3) : (u = 7,
            l = 4))
    }
    function v(t, e, r) {
        var n, i, a = -1, o = e[1], s = 0, c = 7, h = 4;
        for (0 === o && (c = 138,
        h = 3),
        n = 0; n <= r; n++)
            if (i = o,
            o = e[2 * (n + 1) + 1],
            !(++s < c && i === o)) {
                if (s < h)
                    do {
                        l(t, i, t.bl_tree)
                    } while (0 != --s);
                else
                    0 === i ? 10 >= s ? (l(t, U, t.bl_tree),
                    u(t, s - 3, 3)) : (l(t, z, t.bl_tree),
                    u(t, s - 11, 7)) : (i !== a && (l(t, i, t.bl_tree),
                    s--),
                    l(t, B, t.bl_tree),
                    u(t, s - 3, 2));
                s = 0,
                a = i,
                0 === o ? (c = 138,
                h = 3) : i === o ? (c = 6,
                h = 3) : (c = 7,
                h = 4)
            }
    }
    function x(t, e, r, n) {
        u(t, (A << 1) + (n ? 1 : 0), 3),
        function(t, e, r, n) {
            d(t),
            n && (s(t, r),
            s(t, ~r)),
            y.arraySet(t.pending_buf, t.window, e, r, t.pending),
            t.pending += r
        }(t, e, r, !0)
    }
    var y = r(0)
      , T = 0
      , w = 1
      , A = 0
      , E = 29
      , S = 256
      , F = S + 1 + E
      , k = 30
      , C = 19
      , D = 2 * F + 1
      , R = 15
      , M = 16
      , I = 7
      , P = 256
      , B = 16
      , U = 17
      , z = 18
      , O = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
      , L = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
      , V = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
      , N = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
      , H = Array(2 * (F + 2));
    n(H);
    var j = Array(2 * k);
    n(j);
    var q = Array(512);
    n(q);
    var G = Array(256);
    n(G);
    var X = Array(E);
    n(X);
    var Y = Array(k);
    n(Y);
    var W, Z, J, K = !1;
    e._tr_init = function(t) {
        K || (function() {
            var t, e, r, n, a, o = Array(R + 1);
            for (r = 0,
            n = 0; n < E - 1; n++)
                for (X[n] = r,
                t = 0; t < 1 << O[n]; t++)
                    G[r++] = n;
            for (G[r - 1] = n,
            a = 0,
            n = 0; 16 > n; n++)
                for (Y[n] = a,
                t = 0; t < 1 << L[n]; t++)
                    q[a++] = n;
            for (a >>= 7; n < k; n++)
                for (Y[n] = a << 7,
                t = 0; t < 1 << L[n] - 7; t++)
                    q[256 + a++] = n;
            for (e = 0; e <= R; e++)
                o[e] = 0;
            for (t = 0; 143 >= t; )
                H[2 * t + 1] = 8,
                t++,
                o[8]++;
            for (; 255 >= t; )
                H[2 * t + 1] = 9,
                t++,
                o[9]++;
            for (; 279 >= t; )
                H[2 * t + 1] = 7,
                t++,
                o[7]++;
            for (; 287 >= t; )
                H[2 * t + 1] = 8,
                t++,
                o[8]++;
            for (h(H, F + 1, o),
            t = 0; t < k; t++)
                j[2 * t + 1] = 5,
                j[2 * t] = c(t, 5);
            W = new i(H,O,S + 1,F,R),
            Z = new i(j,L,0,k,R),
            J = new i([],V,0,C,I)
        }(),
        K = !0),
        t.l_desc = new a(t.dyn_ltree,W),
        t.d_desc = new a(t.dyn_dtree,Z),
        t.bl_desc = new a(t.bl_tree,J),
        t.bi_buf = 0,
        t.bi_valid = 0,
        f(t)
    }
    ,
    e._tr_stored_block = x,
    e._tr_flush_block = function(t, e, r, n) {
        var i, a, o = 0;
        0 < t.level ? (2 === t.strm.data_type && (t.strm.data_type = function(t) {
            var e, r = 4093624447;
            for (e = 0; 31 >= e; e++,
            r >>>= 1)
                if (1 & r && 0 !== t.dyn_ltree[2 * e])
                    return T;
            if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26])
                return w;
            for (e = 32; e < S; e++)
                if (0 !== t.dyn_ltree[2 * e])
                    return w;
            return T
        }(t)),
        g(t, t.l_desc),
        g(t, t.d_desc),
        o = function(t) {
            var e;
            for (_(t, t.dyn_ltree, t.l_desc.max_code),
            _(t, t.dyn_dtree, t.d_desc.max_code),
            g(t, t.bl_desc),
            e = C - 1; 3 <= e && 0 === t.bl_tree[2 * N[e] + 1]; e--)
                ;
            return t.opt_len += 3 * (e + 1) + 5 + 5 + 4,
            e
        }(t),
        i = t.opt_len + 3 + 7 >>> 3,
        (a = t.static_len + 3 + 7 >>> 3) <= i && (i = a)) : i = a = r + 5,
        r + 4 <= i && -1 !== e ? x(t, e, r, n) : 4 === t.strategy || a === i ? (u(t, 2 + (n ? 1 : 0), 3),
        p(t, H, j)) : (u(t, 4 + (n ? 1 : 0), 3),
        function(t, e, r, n) {
            var i;
            for (u(t, e - 257, 5),
            u(t, r - 1, 5),
            u(t, n - 4, 4),
            i = 0; i < n; i++)
                u(t, t.bl_tree[2 * N[i] + 1], 3);
            v(t, t.dyn_ltree, e - 1),
            v(t, t.dyn_dtree, r - 1)
        }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1),
        p(t, t.dyn_ltree, t.dyn_dtree)),
        f(t),
        n && d(t)
    }
    ,
    e._tr_tally = function(t, e, r) {
        return t.pending_buf[t.d_buf + 2 * t.last_lit] = 255 & e >>> 8,
        t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e,
        t.pending_buf[t.l_buf + t.last_lit] = 255 & r,
        t.last_lit++,
        0 === e ? t.dyn_ltree[2 * r]++ : (t.matches++,
        e--,
        t.dyn_ltree[2 * (G[r] + S + 1)]++,
        t.dyn_dtree[2 * o(e)]++),
        t.last_lit === t.lit_bufsize - 1
    }
    ,
    e._tr_align = function(t) {
        u(t, 2, 3),
        l(t, P, H),
        function(t) {
            16 === t.bi_valid ? (s(t, t.bi_buf),
            t.bi_buf = 0,
            t.bi_valid = 0) : 8 <= t.bi_valid && (t.pending_buf[t.pending++] = 255 & t.bi_buf,
            t.bi_buf >>= 8,
            t.bi_valid -= 8)
        }(t)
    }
}
, function(t, e, r) {
    "use strict";
    function n(t) {
        if (!(this instanceof n))
            return new n(t);
        this.options = o.assign({
            chunkSize: 16384,
            windowBits: 0,
            to: ""
        }, t || {});
        var e = this.options;
        e.raw && 0 <= e.windowBits && 16 > e.windowBits && (e.windowBits = -e.windowBits,
        0 === e.windowBits && (e.windowBits = -15)),
        0 <= e.windowBits && 16 > e.windowBits && !(t && t.windowBits) && (e.windowBits += 32),
        15 < e.windowBits && 48 > e.windowBits && 0 == (15 & e.windowBits) && (e.windowBits |= 15),
        this.err = 0,
        this.msg = "",
        this.ended = !1,
        this.chunks = [],
        this.strm = new c,
        this.strm.avail_out = 0;
        var r = a.inflateInit2(this.strm, e.windowBits);
        if (r !== u.Z_OK)
            throw new Error(l[r]);
        if (this.header = new h,
        a.inflateGetHeader(this.strm, this.header),
        e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = s.string2buf(e.dictionary) : "[object ArrayBuffer]" === f.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)),
        e.raw && (r = a.inflateSetDictionary(this.strm, e.dictionary)) !== u.Z_OK))
            throw new Error(l[r])
    }
    function i(t, e) {
        var r = new n(e);
        if (r.push(t, !0),
        r.err)
            throw r.msg || l[r.err];
        return r.result
    }
    var a = r(16)
      , o = r(0)
      , s = r(4)
      , u = r(6)
      , l = r(1)
      , c = r(5)
      , h = r(19)
      , f = Object.prototype.toString;
    n.prototype.push = function(t, e) {
        var r, n, i, l, c, h = this.strm, d = this.options.chunkSize, b = this.options.dictionary, m = !1;
        if (this.ended)
            return !1;
        n = e === ~~e ? e : !0 === e ? u.Z_FINISH : u.Z_NO_FLUSH,
        h.input = "string" == typeof t ? s.binstring2buf(t) : "[object ArrayBuffer]" === f.call(t) ? new Uint8Array(t) : t,
        h.next_in = 0,
        h.avail_in = h.input.length;
        do {
            if (0 === h.avail_out && (h.output = new o.Buf8(d),
            h.next_out = 0,
            h.avail_out = d),
            (r = a.inflate(h, u.Z_NO_FLUSH)) === u.Z_NEED_DICT && b && (r = a.inflateSetDictionary(this.strm, b)),
            r === u.Z_BUF_ERROR && 1 == m && (r = u.Z_OK,
            m = !1),
            r !== u.Z_STREAM_END && r !== u.Z_OK)
                return this.onEnd(r),
                this.ended = !0,
                !1;
            h.next_out && (0 === h.avail_out || r === u.Z_STREAM_END || 0 === h.avail_in && (n === u.Z_FINISH || n === u.Z_SYNC_FLUSH)) && ("string" === this.options.to ? (i = s.utf8border(h.output, h.next_out),
            l = h.next_out - i,
            c = s.buf2string(h.output, i),
            h.next_out = l,
            h.avail_out = d - l,
            l && o.arraySet(h.output, h.output, i, l, 0),
            this.onData(c)) : this.onData(o.shrinkBuf(h.output, h.next_out))),
            0 === h.avail_in && 0 === h.avail_out && (m = !0)
        } while ((0 < h.avail_in || 0 === h.avail_out) && r !== u.Z_STREAM_END);
        return r === u.Z_STREAM_END && (n = u.Z_FINISH),
        n === u.Z_FINISH ? (r = a.inflateEnd(this.strm),
        this.onEnd(r),
        this.ended = !0,
        r === u.Z_OK) : n !== u.Z_SYNC_FLUSH || (this.onEnd(u.Z_OK),
        h.avail_out = 0,
        !0)
    }
    ,
    n.prototype.onData = function(t) {
        this.chunks.push(t)
    }
    ,
    n.prototype.onEnd = function(t) {
        t === u.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)),
        this.chunks = [],
        this.err = t,
        this.msg = this.strm.msg
    }
    ,
    e.Inflate = n,
    e.inflate = i,
    e.inflateRaw = function(t, e) {
        return (e = e || {}).raw = !0,
        i(t, e)
    }
    ,
    e.ungzip = i
}
, function(t, e, r) {
    "use strict";
    function n(t) {
        return (255 & t >>> 24) + (65280 & t >>> 8) + ((65280 & t) << 8) + ((255 & t) << 24)
    }
    function i() {
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
        this.lens = new b.Buf16(320),
        this.work = new b.Buf16(288),
        this.lendyn = null,
        this.distdyn = null,
        this.sane = 0,
        this.back = 0,
        this.was = 0
    }
    function a(t) {
        var e;
        return t && t.state ? (e = t.state,
        t.total_in = t.total_out = e.total = 0,
        t.msg = "",
        e.wrap && (t.adler = 1 & e.wrap),
        e.mode = w,
        e.last = 0,
        e.havedict = 0,
        e.dmax = 32768,
        e.head = null,
        e.hold = 0,
        e.bits = 0,
        e.lencode = e.lendyn = new b.Buf32(E),
        e.distcode = e.distdyn = new b.Buf32(S),
        e.sane = 1,
        e.back = -1,
        y) : T
    }
    function o(t) {
        var e;
        return t && t.state ? ((e = t.state).wsize = 0,
        e.whave = 0,
        e.wnext = 0,
        a(t)) : T
    }
    function s(t, e) {
        var r, n;
        return t && t.state ? (n = t.state,
        0 > e ? (r = 0,
        e = -e) : (r = 1 + (e >> 4),
        48 > e && (e &= 15)),
        e && (8 > e || 15 < e) ? T : (null !== n.window && n.wbits !== e && (n.window = null),
        n.wrap = r,
        n.wbits = e,
        o(t))) : T
    }
    function u(t, e) {
        var r, n;
        return t ? (n = new i,
        t.state = n,
        n.window = null,
        (r = s(t, e)) !== y && (t.state = null),
        r) : T
    }
    function l(t) {
        if (F) {
            var e;
            for (h = new b.Buf32(512),
            f = new b.Buf32(32),
            e = 0; 144 > e; )
                t.lens[e++] = 8;
            for (; 256 > e; )
                t.lens[e++] = 9;
            for (; 280 > e; )
                t.lens[e++] = 7;
            for (; 288 > e; )
                t.lens[e++] = 8;
            for (_(v, t.lens, 0, 288, h, 0, t.work, {
                bits: 9
            }),
            e = 0; 32 > e; )
                t.lens[e++] = 5;
            _(x, t.lens, 0, 32, f, 0, t.work, {
                bits: 5
            }),
            F = !1
        }
        t.lencode = h,
        t.lenbits = 9,
        t.distcode = f,
        t.distbits = 5
    }
    function c(t, e, r, n) {
        var i, a = t.state;
        return null === a.window && (a.wsize = 1 << a.wbits,
        a.wnext = 0,
        a.whave = 0,
        a.window = new b.Buf8(a.wsize)),
        n >= a.wsize ? (b.arraySet(a.window, e, r - a.wsize, a.wsize, 0),
        a.wnext = 0,
        a.whave = a.wsize) : ((i = a.wsize - a.wnext) > n && (i = n),
        b.arraySet(a.window, e, r - n, i, a.wnext),
        (n -= i) ? (b.arraySet(a.window, e, r - n, n, 0),
        a.wnext = n,
        a.whave = a.wsize) : (a.wnext += i,
        a.wnext === a.wsize && (a.wnext = 0),
        a.whave < a.wsize && (a.whave += i))),
        0
    }
    var h, f, d = String.fromCharCode, b = r(0), m = r(2), p = r(3), g = r(17), _ = r(18), v = 1, x = 2, y = 0, T = -2, w = 1, A = 12, E = 852, S = 592, F = !0;
    e.inflateReset = o,
    e.inflateReset2 = s,
    e.inflateResetKeep = a,
    e.inflateInit = function(t) {
        return u(t, 15)
    }
    ,
    e.inflateInit2 = u,
    e.inflate = function(t, e) {
        var r, i, a, o, s, u, h, f, E, S, F, k, C, D, R, M, I, P, B, U, z, O, L, V, N = 0, H = new b.Buf8(4), j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in)
            return T;
        (r = t.state).mode === A && (r.mode = 13),
        s = t.next_out,
        a = t.output,
        h = t.avail_out,
        o = t.next_in,
        i = t.input,
        u = t.avail_in,
        f = r.hold,
        E = r.bits,
        S = u,
        F = h,
        O = y;
        t: for (; ; )
            switch (r.mode) {
            case w:
                if (0 === r.wrap) {
                    r.mode = 13;
                    break
                }
                for (; 16 > E; ) {
                    if (0 === u)
                        break t;
                    u--,
                    f += i[o++] << E,
                    E += 8
                }
                if (2 & r.wrap && 35615 === f) {
                    r.check = 0,
                    H[0] = 255 & f,
                    H[1] = 255 & f >>> 8,
                    r.check = p(r.check, H, 2, 0),
                    f = 0,
                    E = 0,
                    r.mode = 2;
                    break
                }
                if (r.flags = 0,
                r.head && (r.head.done = !1),
                !(1 & r.wrap) || (((255 & f) << 8) + (f >> 8)) % 31) {
                    t.msg = "incorrect header check",
                    r.mode = 30;
                    break
                }
                if (8 != (15 & f)) {
                    t.msg = "unknown compression method",
                    r.mode = 30;
                    break
                }
                if (E -= 4,
                z = 8 + (15 & (f >>>= 4)),
                0 === r.wbits)
                    r.wbits = z;
                else if (z > r.wbits) {
                    t.msg = "invalid window size",
                    r.mode = 30;
                    break
                }
                r.dmax = 1 << z,
                t.adler = r.check = 1,
                r.mode = 512 & f ? 10 : A,
                f = 0,
                E = 0;
                break;
            case 2:
                for (; 16 > E; ) {
                    if (0 === u)
                        break t;
                    u--,
                    f += i[o++] << E,
                    E += 8
                }
                if (r.flags = f,
                8 != (255 & r.flags)) {
                    t.msg = "unknown compression method",
                    r.mode = 30;
                    break
                }
                if (57344 & r.flags) {
                    t.msg = "unknown header flags set",
                    r.mode = 30;
                    break
                }
                r.head && (r.head.text = 1 & f >> 8),
                512 & r.flags && (H[0] = 255 & f,
                H[1] = 255 & f >>> 8,
                r.check = p(r.check, H, 2, 0)),
                f = 0,
                E = 0,
                r.mode = 3;
            case 3:
                for (; 32 > E; ) {
                    if (0 === u)
                        break t;
                    u--,
                    f += i[o++] << E,
                    E += 8
                }
                r.head && (r.head.time = f),
                512 & r.flags && (H[0] = 255 & f,
                H[1] = 255 & f >>> 8,
                H[2] = 255 & f >>> 16,
                H[3] = 255 & f >>> 24,
                r.check = p(r.check, H, 4, 0)),
                f = 0,
                E = 0,
                r.mode = 4;
            case 4:
                for (; 16 > E; ) {
                    if (0 === u)
                        break t;
                    u--,
                    f += i[o++] << E,
                    E += 8
                }
                r.head && (r.head.xflags = 255 & f,
                r.head.os = f >> 8),
                512 & r.flags && (H[0] = 255 & f,
                H[1] = 255 & f >>> 8,
                r.check = p(r.check, H, 2, 0)),
                f = 0,
                E = 0,
                r.mode = 5;
            case 5:
                if (1024 & r.flags) {
                    for (; 16 > E; ) {
                        if (0 === u)
                            break t;
                        u--,
                        f += i[o++] << E,
                        E += 8
                    }
                    r.length = f,
                    r.head && (r.head.extra_len = f),
                    512 & r.flags && (H[0] = 255 & f,
                    H[1] = 255 & f >>> 8,
                    r.check = p(r.check, H, 2, 0)),
                    f = 0,
                    E = 0
                } else
                    r.head && (r.head.extra = null);
                r.mode = 6;
            case 6:
                if (1024 & r.flags && ((k = r.length) > u && (k = u),
                k && (r.head && (z = r.head.extra_len - r.length,
                !r.head.extra && (r.head.extra = Array(r.head.extra_len)),
                b.arraySet(r.head.extra, i, o, k, z)),
                512 & r.flags && (r.check = p(r.check, i, k, o)),
                u -= k,
                o += k,
                r.length -= k),
                r.length))
                    break t;
                r.length = 0,
                r.mode = 7;
            case 7:
                if (2048 & r.flags) {
                    if (0 === u)
                        break t;
                    k = 0;
                    do {
                        z = i[o + k++],
                        r.head && z && 65536 > r.length && (r.head.name += d(z))
                    } while (z && k < u);
                    if (512 & r.flags && (r.check = p(r.check, i, k, o)),
                    u -= k,
                    o += k,
                    z)
                        break t
                } else
                    r.head && (r.head.name = null);
                r.length = 0,
                r.mode = 8;
            case 8:
                if (4096 & r.flags) {
                    if (0 === u)
                        break t;
                    k = 0;
                    do {
                        z = i[o + k++],
                        r.head && z && 65536 > r.length && (r.head.comment += d(z))
                    } while (z && k < u);
                    if (512 & r.flags && (r.check = p(r.check, i, k, o)),
                    u -= k,
                    o += k,
                    z)
                        break t
                } else
                    r.head && (r.head.comment = null);
                r.mode = 9;
            case 9:
                if (512 & r.flags) {
                    for (; 16 > E; ) {
                        if (0 === u)
                            break t;
                        u--,
                        f += i[o++] << E,
                        E += 8
                    }
                    if (f !== (65535 & r.check)) {
                        t.msg = "header crc mismatch",
                        r.mode = 30;
                        break
                    }
                    f = 0,
                    E = 0
                }
                r.head && (r.head.hcrc = 1 & r.flags >> 9,
                r.head.done = !0),
                t.adler = r.check = 0,
                r.mode = A;
                break;
            case 10:
                for (; 32 > E; ) {
                    if (0 === u)
                        break t;
                    u--,
                    f += i[o++] << E,
                    E += 8
                }
                t.adler = r.check = n(f),
                f = 0,
                E = 0,
                r.mode = 11;
            case 11:
                if (0 === r.havedict)
                    return t.next_out = s,
                    t.avail_out = h,
                    t.next_in = o,
                    t.avail_in = u,
                    r.hold = f,
                    r.bits = E,
                    2;
                t.adler = r.check = 1,
                r.mode = A;
            case A:
                if (5 === e || 6 === e)
                    break t;
            case 13:
                if (r.last) {
                    f >>>= 7 & E,
                    E -= 7 & E,
                    r.mode = 27;
                    break
                }
                for (; 3 > E; ) {
                    if (0 === u)
                        break t;
                    u--,
                    f += i[o++] << E,
                    E += 8
                }
                switch (r.last = 1 & f,
                E -= 1,
                3 & (f >>>= 1)) {
                case 0:
                    r.mode = 14;
                    break;
                case 1:
                    if (l(r),
                    r.mode = 20,
                    6 === e) {
                        f >>>= 2,
                        E -= 2;
                        break t
                    }
                    break;
                case 2:
                    r.mode = 17;
                    break;
                case 3:
                    t.msg = "invalid block type",
                    r.mode = 30
                }
                f >>>= 2,
                E -= 2;
                break;
            case 14:
                for (f >>>= 7 & E,
                E -= 7 & E; 32 > E; ) {
                    if (0 === u)
                        break t;
                    u--,
                    f += i[o++] << E,
                    E += 8
                }
                if ((65535 & f) != (65535 ^ f >>> 16)) {
                    t.msg = "invalid stored block lengths",
                    r.mode = 30;
                    break
                }
                if (r.length = 65535 & f,
                f = 0,
                E = 0,
                r.mode = 15,
                6 === e)
                    break t;
            case 15:
                r.mode = 16;
            case 16:
                if (k = r.length) {
                    if (k > u && (k = u),
                    k > h && (k = h),
                    0 === k)
                        break t;
                    b.arraySet(a, i, o, k, s),
                    u -= k,
                    o += k,
                    h -= k,
                    s += k,
                    r.length -= k;
                    break
                }
                r.mode = A;
                break;
            case 17:
                for (; 14 > E; ) {
                    if (0 === u)
                        break t;
                    u--,
                    f += i[o++] << E,
                    E += 8
                }
                if (r.nlen = 257 + (31 & f),
                f >>>= 5,
                E -= 5,
                r.ndist = 1 + (31 & f),
                f >>>= 5,
                E -= 5,
                r.ncode = 4 + (15 & f),
                f >>>= 4,
                E -= 4,
                286 < r.nlen || 30 < r.ndist) {
                    t.msg = "too many length or distance symbols",
                    r.mode = 30;
                    break
                }
                r.have = 0,
                r.mode = 18;
            case 18:
                for (; r.have < r.ncode; ) {
                    for (; 3 > E; ) {
                        if (0 === u)
                            break t;
                        u--,
                        f += i[o++] << E,
                        E += 8
                    }
                    r.lens[j[r.have++]] = 7 & f,
                    f >>>= 3,
                    E -= 3
                }
                for (; 19 > r.have; )
                    r.lens[j[r.have++]] = 0;
                if (r.lencode = r.lendyn,
                r.lenbits = 7,
                L = {
                    bits: r.lenbits
                },
                O = _(0, r.lens, 0, 19, r.lencode, 0, r.work, L),
                r.lenbits = L.bits,
                O) {
                    t.msg = "invalid code lengths set",
                    r.mode = 30;
                    break
                }
                r.have = 0,
                r.mode = 19;
            case 19:
                for (; r.have < r.nlen + r.ndist; ) {
                    for (; M = 255 & (N = r.lencode[f & (1 << r.lenbits) - 1]) >>> 16,
                    I = 65535 & N,
                    !((R = N >>> 24) <= E); ) {
                        if (0 === u)
                            break t;
                        u--,
                        f += i[o++] << E,
                        E += 8
                    }
                    if (16 > I)
                        f >>>= R,
                        E -= R,
                        r.lens[r.have++] = I;
                    else {
                        if (16 === I) {
                            for (V = R + 2; E < V; ) {
                                if (0 === u)
                                    break t;
                                u--,
                                f += i[o++] << E,
                                E += 8
                            }
                            if (f >>>= R,
                            E -= R,
                            0 === r.have) {
                                t.msg = "invalid bit length repeat",
                                r.mode = 30;
                                break
                            }
                            z = r.lens[r.have - 1],
                            k = 3 + (3 & f),
                            f >>>= 2,
                            E -= 2
                        } else if (17 === I) {
                            for (V = R + 3; E < V; ) {
                                if (0 === u)
                                    break t;
                                u--,
                                f += i[o++] << E,
                                E += 8
                            }
                            E -= R,
                            z = 0,
                            k = 3 + (7 & (f >>>= R)),
                            f >>>= 3,
                            E -= 3
                        } else {
                            for (V = R + 7; E < V; ) {
                                if (0 === u)
                                    break t;
                                u--,
                                f += i[o++] << E,
                                E += 8
                            }
                            E -= R,
                            z = 0,
                            k = 11 + (127 & (f >>>= R)),
                            f >>>= 7,
                            E -= 7
                        }
                        if (r.have + k > r.nlen + r.ndist) {
                            t.msg = "invalid bit length repeat",
                            r.mode = 30;
                            break
                        }
                        for (; k--; )
                            r.lens[r.have++] = z
                    }
                }
                if (30 === r.mode)
                    break;
                if (0 === r.lens[256]) {
                    t.msg = "invalid code -- missing end-of-block",
                    r.mode = 30;
                    break
                }
                if (r.lenbits = 9,
                L = {
                    bits: r.lenbits
                },
                O = _(v, r.lens, 0, r.nlen, r.lencode, 0, r.work, L),
                r.lenbits = L.bits,
                O) {
                    t.msg = "invalid literal/lengths set",
                    r.mode = 30;
                    break
                }
                if (r.distbits = 6,
                r.distcode = r.distdyn,
                L = {
                    bits: r.distbits
                },
                O = _(x, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, L),
                r.distbits = L.bits,
                O) {
                    t.msg = "invalid distances set",
                    r.mode = 30;
                    break
                }
                if (r.mode = 20,
                6 === e)
                    break t;
            case 20:
                r.mode = 21;
            case 21:
                if (6 <= u && 258 <= h) {
                    t.next_out = s,
                    t.avail_out = h,
                    t.next_in = o,
                    t.avail_in = u,
                    r.hold = f,
                    r.bits = E,
                    g(t, F),
                    s = t.next_out,
                    a = t.output,
                    h = t.avail_out,
                    o = t.next_in,
                    i = t.input,
                    u = t.avail_in,
                    f = r.hold,
                    E = r.bits,
                    r.mode === A && (r.back = -1);
                    break
                }
                for (r.back = 0; M = 255 & (N = r.lencode[f & (1 << r.lenbits) - 1]) >>> 16,
                I = 65535 & N,
                !((R = N >>> 24) <= E); ) {
                    if (0 === u)
                        break t;
                    u--,
                    f += i[o++] << E,
                    E += 8
                }
                if (M && 0 == (240 & M)) {
                    for (P = R,
                    B = M,
                    U = I; M = 255 & (N = r.lencode[U + ((f & (1 << P + B) - 1) >> P)]) >>> 16,
                    I = 65535 & N,
                    !(P + (R = N >>> 24) <= E); ) {
                        if (0 === u)
                            break t;
                        u--,
                        f += i[o++] << E,
                        E += 8
                    }
                    f >>>= P,
                    E -= P,
                    r.back += P
                }
                if (f >>>= R,
                E -= R,
                r.back += R,
                r.length = I,
                0 === M) {
                    r.mode = 26;
                    break
                }
                if (32 & M) {
                    r.back = -1,
                    r.mode = A;
                    break
                }
                if (64 & M) {
                    t.msg = "invalid literal/length code",
                    r.mode = 30;
                    break
                }
                r.extra = 15 & M,
                r.mode = 22;
            case 22:
                if (r.extra) {
                    for (V = r.extra; E < V; ) {
                        if (0 === u)
                            break t;
                        u--,
                        f += i[o++] << E,
                        E += 8
                    }
                    r.length += f & (1 << r.extra) - 1,
                    f >>>= r.extra,
                    E -= r.extra,
                    r.back += r.extra
                }
                r.was = r.length,
                r.mode = 23;
            case 23:
                for (; M = 255 & (N = r.distcode[f & (1 << r.distbits) - 1]) >>> 16,
                I = 65535 & N,
                !((R = N >>> 24) <= E); ) {
                    if (0 === u)
                        break t;
                    u--,
                    f += i[o++] << E,
                    E += 8
                }
                if (0 == (240 & M)) {
                    for (P = R,
                    B = M,
                    U = I; M = 255 & (N = r.distcode[U + ((f & (1 << P + B) - 1) >> P)]) >>> 16,
                    I = 65535 & N,
                    !(P + (R = N >>> 24) <= E); ) {
                        if (0 === u)
                            break t;
                        u--,
                        f += i[o++] << E,
                        E += 8
                    }
                    f >>>= P,
                    E -= P,
                    r.back += P
                }
                if (f >>>= R,
                E -= R,
                r.back += R,
                64 & M) {
                    t.msg = "invalid distance code",
                    r.mode = 30;
                    break
                }
                r.offset = I,
                r.extra = 15 & M,
                r.mode = 24;
            case 24:
                if (r.extra) {
                    for (V = r.extra; E < V; ) {
                        if (0 === u)
                            break t;
                        u--,
                        f += i[o++] << E,
                        E += 8
                    }
                    r.offset += f & (1 << r.extra) - 1,
                    f >>>= r.extra,
                    E -= r.extra,
                    r.back += r.extra
                }
                if (r.offset > r.dmax) {
                    t.msg = "invalid distance too far back",
                    r.mode = 30;
                    break
                }
                r.mode = 25;
            case 25:
                if (0 === h)
                    break t;
                if (k = F - h,
                r.offset > k) {
                    if ((k = r.offset - k) > r.whave && r.sane) {
                        t.msg = "invalid distance too far back",
                        r.mode = 30;
                        break
                    }
                    k > r.wnext ? (k -= r.wnext,
                    C = r.wsize - k) : C = r.wnext - k,
                    k > r.length && (k = r.length),
                    D = r.window
                } else
                    D = a,
                    C = s - r.offset,
                    k = r.length;
                k > h && (k = h),
                h -= k,
                r.length -= k;
                do {
                    a[s++] = D[C++]
                } while (--k);
                0 === r.length && (r.mode = 21);
                break;
            case 26:
                if (0 === h)
                    break t;
                a[s++] = r.length,
                h--,
                r.mode = 21;
                break;
            case 27:
                if (r.wrap) {
                    for (; 32 > E; ) {
                        if (0 === u)
                            break t;
                        u--,
                        f |= i[o++] << E,
                        E += 8
                    }
                    if (F -= h,
                    t.total_out += F,
                    r.total += F,
                    F && (t.adler = r.check = r.flags ? p(r.check, a, F, s - F) : m(r.check, a, F, s - F)),
                    F = h,
                    (r.flags ? f : n(f)) !== r.check) {
                        t.msg = "incorrect data check",
                        r.mode = 30;
                        break
                    }
                    f = 0,
                    E = 0
                }
                r.mode = 28;
            case 28:
                if (r.wrap && r.flags) {
                    for (; 32 > E; ) {
                        if (0 === u)
                            break t;
                        u--,
                        f += i[o++] << E,
                        E += 8
                    }
                    if (f !== (4294967295 & r.total)) {
                        t.msg = "incorrect length check",
                        r.mode = 30;
                        break
                    }
                    f = 0,
                    E = 0
                }
                r.mode = 29;
            case 29:
                O = 1;
                break t;
            case 30:
                O = -3;
                break t;
            case 31:
                return -4;
            case 32:
            default:
                return T
            }
        return t.next_out = s,
        t.avail_out = h,
        t.next_in = o,
        t.avail_in = u,
        r.hold = f,
        r.bits = E,
        (r.wsize || F !== t.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== e)) && c(t, t.output, t.next_out, F - t.avail_out) ? (r.mode = 31,
        -4) : (S -= t.avail_in,
        F -= t.avail_out,
        t.total_in += S,
        t.total_out += F,
        r.total += F,
        r.wrap && F && (t.adler = r.check = r.flags ? p(r.check, a, F, t.next_out - F) : m(r.check, a, F, t.next_out - F)),
        t.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === A ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0),
        (0 === S && 0 === F || 4 === e) && O === y && (O = -5),
        O)
    }
    ,
    e.inflateEnd = function(t) {
        if (!t || !t.state)
            return T;
        var e = t.state;
        return e.window && (e.window = null),
        t.state = null,
        y
    }
    ,
    e.inflateGetHeader = function(t, e) {
        var r;
        return t && t.state ? 0 == (2 & (r = t.state).wrap) ? T : (r.head = e,
        e.done = !1,
        y) : T
    }
    ,
    e.inflateSetDictionary = function(t, e) {
        var r, n = e.length;
        return t && t.state ? 0 !== (r = t.state).wrap && 11 !== r.mode ? T : 11 === r.mode && m(1, e, n, 0) !== r.check ? -3 : c(t, e, n, n) ? (r.mode = 31,
        -4) : (r.havedict = 1,
        y) : T
    }
    ,
    e.inflateInfo = "pako inflate (from Nodeca project)"
}
, function(t) {
    "use strict";
    t.exports = function(t, e) {
        var r, n, i, a, o, s, u, l, c, h, f, d, b, m, p, g, _, v, x, y, T, w, A, E, S;
        r = t.state,
        n = t.next_in,
        E = t.input,
        i = n + (t.avail_in - 5),
        a = t.next_out,
        S = t.output,
        o = a - (e - t.avail_out),
        s = a + (t.avail_out - 257),
        u = r.dmax,
        l = r.wsize,
        c = r.whave,
        h = r.wnext,
        f = r.window,
        d = r.hold,
        b = r.bits,
        m = r.lencode,
        p = r.distcode,
        g = (1 << r.lenbits) - 1,
        _ = (1 << r.distbits) - 1;
        t: do {
            15 > b && (d += E[n++] << b,
            b += 8,
            d += E[n++] << b,
            b += 8),
            v = m[d & g];
            e: for (; ; ) {
                if (d >>>= x = v >>> 24,
                b -= x,
                0 === (x = 255 & v >>> 16))
                    S[a++] = 65535 & v;
                else {
                    if (!(16 & x)) {
                        if (0 == (64 & x)) {
                            v = m[(65535 & v) + (d & (1 << x) - 1)];
                            continue e
                        }
                        if (32 & x) {
                            r.mode = 12;
                            break t
                        }
                        t.msg = "invalid literal/length code",
                        r.mode = 30;
                        break t
                    }
                    y = 65535 & v,
                    (x &= 15) && (b < x && (d += E[n++] << b,
                    b += 8),
                    y += d & (1 << x) - 1,
                    d >>>= x,
                    b -= x),
                    15 > b && (d += E[n++] << b,
                    b += 8,
                    d += E[n++] << b,
                    b += 8),
                    v = p[d & _];
                    r: for (; ; ) {
                        if (d >>>= x = v >>> 24,
                        b -= x,
                        !(16 & (x = 255 & v >>> 16))) {
                            if (0 == (64 & x)) {
                                v = p[(65535 & v) + (d & (1 << x) - 1)];
                                continue r
                            }
                            t.msg = "invalid distance code",
                            r.mode = 30;
                            break t
                        }
                        if (T = 65535 & v,
                        b < (x &= 15) && (d += E[n++] << b,
                        (b += 8) < x && (d += E[n++] << b,
                        b += 8)),
                        (T += d & (1 << x) - 1) > u) {
                            t.msg = "invalid distance too far back",
                            r.mode = 30;
                            break t
                        }
                        if (d >>>= x,
                        b -= x,
                        T > (x = a - o)) {
                            if ((x = T - x) > c && r.sane) {
                                t.msg = "invalid distance too far back",
                                r.mode = 30;
                                break t
                            }
                            if (w = 0,
                            A = f,
                            0 === h) {
                                if (w += l - x,
                                x < y) {
                                    y -= x;
                                    do {
                                        S[a++] = f[w++]
                                    } while (--x);
                                    w = a - T,
                                    A = S
                                }
                            } else if (h < x) {
                                if (w += l + h - x,
                                (x -= h) < y) {
                                    y -= x;
                                    do {
                                        S[a++] = f[w++]
                                    } while (--x);
                                    if (w = 0,
                                    h < y) {
                                        y -= x = h;
                                        do {
                                            S[a++] = f[w++]
                                        } while (--x);
                                        w = a - T,
                                        A = S
                                    }
                                }
                            } else if (w += h - x,
                            x < y) {
                                y -= x;
                                do {
                                    S[a++] = f[w++]
                                } while (--x);
                                w = a - T,
                                A = S
                            }
                            for (; 2 < y; )
                                S[a++] = A[w++],
                                S[a++] = A[w++],
                                S[a++] = A[w++],
                                y -= 3;
                            y && (S[a++] = A[w++],
                            1 < y && (S[a++] = A[w++]))
                        } else {
                            w = a - T;
                            do {
                                S[a++] = S[w++],
                                S[a++] = S[w++],
                                S[a++] = S[w++],
                                y -= 3
                            } while (2 < y);
                            y && (S[a++] = S[w++],
                            1 < y && (S[a++] = S[w++]))
                        }
                        break
                    }
                }
                break
            }
        } while (n < i && a < s);
        return n -= y = b >> 3,
        d &= (1 << (b -= y << 3)) - 1,
        t.next_in = n,
        t.next_out = a,
        t.avail_in = n < i ? i - n + 5 : 5 - (n - i),
        t.avail_out = a < s ? s - a + 257 : 257 - (a - s),
        r.hold = d,
        void (r.bits = b)
    }
}
, function(t, e, r) {
    "use strict";
    var n = r(0)
      , i = 15
      , a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]
      , o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]
      , s = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]
      , u = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
    t.exports = function(t, e, r, l, c, h, f, d) {
        var b, m, p, g, _, v, x, y, T, w = d.bits, A = 0, E = 0, S = 0, F = 0, k = 0, C = 0, D = 0, R = 0, M = 0, I = 0, P = null, B = 0, U = new n.Buf16(16), z = new n.Buf16(16), O = null, L = 0;
        for (A = 0; A <= i; A++)
            U[A] = 0;
        for (E = 0; E < l; E++)
            U[e[r + E]]++;
        for (k = w,
        F = i; 1 <= F && 0 === U[F]; F--)
            ;
        if (k > F && (k = F),
        0 == F)
            return c[h++] = 20971520,
            c[h++] = 20971520,
            d.bits = 1,
            0;
        for (S = 1; S < F && 0 === U[S]; S++)
            ;
        for (k < S && (k = S),
        R = 1,
        A = 1; A <= i; A++)
            if (R <<= 1,
            0 > (R -= U[A]))
                return -1;
        if (0 < R && (0 === t || 1 != F))
            return -1;
        for (z[1] = 0,
        A = 1; A < i; A++)
            z[A + 1] = z[A] + U[A];
        for (E = 0; E < l; E++)
            0 !== e[r + E] && (f[z[e[r + E]]++] = E);
        if (0 === t ? (P = O = f,
        v = 19) : 1 === t ? (P = a,
        B -= 257,
        O = o,
        L -= 257,
        v = 256) : (P = s,
        O = u,
        v = -1),
        I = 0,
        E = 0,
        A = S,
        _ = h,
        C = k,
        D = 0,
        p = -1,
        g = (M = 1 << k) - 1,
        1 === t && M > 852 || 2 === t && M > 592)
            return 1;
        for (; ; ) {
            x = A - D,
            f[E] < v ? (y = 0,
            T = f[E]) : f[E] > v ? (y = O[L + f[E]],
            T = P[B + f[E]]) : (y = 96,
            T = 0),
            b = 1 << A - D,
            S = m = 1 << C;
            do {
                c[_ + (I >> D) + (m -= b)] = x << 24 | y << 16 | T | 0
            } while (0 !== m);
            for (b = 1 << A - 1; I & b; )
                b >>= 1;
            if (0 === b ? I = 0 : (I &= b - 1,
            I += b),
            E++,
            0 == --U[A]) {
                if (A === F)
                    break;
                A = e[r + f[E]]
            }
            if (A > k && (I & g) !== p) {
                for (0 == D && (D = k),
                _ += S,
                R = 1 << (C = A - D); C + D < F && !(0 >= (R -= U[C + D])); )
                    C++,
                    R <<= 1;
                if (M += 1 << C,
                1 === t && M > 852 || 2 === t && M > 592)
                    return 1;
                c[p = I & g] = k << 24 | C << 16 | _ - h | 0
            }
        }
        return 0 != I && (c[_ + I] = 4194304 | A - D << 24),
        d.bits = k,
        0
    }
}
, function(t) {
    "use strict";
    t.exports = function() {
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
    }
}
, function(t, e, r) {
    "use strict";
    function n(t, e, r) {
        const n = new Oa(3);
        return t && (n[0] = t),
        e && (n[1] = e),
        r && (n[2] = r),
        n
    }
    function i(t, e, r) {
        return (r = r || new Oa(3))[0] = t[0] + e[0],
        r[1] = t[1] + e[1],
        r[2] = t[2] + e[2],
        r
    }
    function a(t, e, r) {
        return (r = r || new Oa(3))[0] = t[0] - e[0],
        r[1] = t[1] - e[1],
        r[2] = t[2] - e[2],
        r
    }
    function o(t, e, r) {
        r = r || new Oa(3);
        const n = t[2] * e[0] - t[0] * e[2]
          , i = t[0] * e[1] - t[1] * e[0];
        return r[0] = t[1] * e[2] - t[2] * e[1],
        r[1] = n,
        r[2] = i,
        r
    }
    function s(t, e) {
        e = e || new Oa(3);
        const r = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
          , n = Fa(r);
        return 1e-5 < n ? (e[0] = t[0] / n,
        e[1] = t[1] / n,
        e[2] = t[2] / n) : (e[0] = 0,
        e[1] = 0,
        e[2] = 0),
        e
    }
    function u(t, e, r) {
        return (r = r || new Oa(3))[0] = t[0] * e[0],
        r[1] = t[1] * e[1],
        r[2] = t[2] * e[2],
        r
    }
    function l(t, e) {
        return (e = e || new Ha(16))[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e[3] = t[3],
        e[4] = t[4],
        e[5] = t[5],
        e[6] = t[6],
        e[7] = t[7],
        e[8] = t[8],
        e[9] = t[9],
        e[10] = t[10],
        e[11] = t[11],
        e[12] = t[12],
        e[13] = t[13],
        e[14] = t[14],
        e[15] = t[15],
        e
    }
    function c(t) {
        return (t = t || new Ha(16))[0] = 1,
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
        e = e || new Ha(16);
        const r = t[0]
          , n = t[1]
          , i = t[2]
          , a = t[3]
          , o = t[4]
          , s = t[5]
          , u = t[6]
          , l = t[7]
          , c = t[8]
          , h = t[9]
          , f = t[10]
          , d = t[11]
          , b = t[12]
          , m = t[13]
          , p = t[14]
          , g = t[15]
          , _ = f * g
          , v = p * d
          , x = u * g
          , y = p * l
          , T = u * d
          , w = f * l
          , A = i * g
          , E = p * a
          , S = i * d
          , F = f * a
          , k = i * l
          , C = u * a
          , D = c * m
          , R = b * h
          , M = o * m
          , I = b * s
          , P = o * h
          , B = c * s
          , U = r * m
          , z = b * n
          , O = r * h
          , L = c * n
          , V = r * s
          , N = o * n
          , H = _ * s + y * h + T * m - (v * s + x * h + w * m)
          , j = v * n + A * h + F * m - (_ * n + E * h + S * m)
          , q = x * n + E * s + k * m - (y * n + A * s + C * m)
          , G = w * n + S * s + C * h - (T * n + F * s + k * h)
          , X = 1 / (r * H + o * j + c * q + b * G);
        return e[0] = X * H,
        e[1] = X * j,
        e[2] = X * q,
        e[3] = X * G,
        e[4] = X * (v * o + x * c + w * b - (_ * o + y * c + T * b)),
        e[5] = X * (_ * r + E * c + S * b - (v * r + A * c + F * b)),
        e[6] = X * (y * r + A * o + C * b - (x * r + E * o + k * b)),
        e[7] = X * (T * r + F * o + k * c - (w * r + S * o + C * c)),
        e[8] = X * (D * l + I * d + P * g - (R * l + M * d + B * g)),
        e[9] = X * (R * a + U * d + L * g - (D * a + z * d + O * g)),
        e[10] = X * (M * a + z * l + V * g - (I * a + U * l + N * g)),
        e[11] = X * (B * a + O * l + N * d - (P * a + L * l + V * d)),
        e[12] = X * (M * f + B * p + R * u - (P * p + D * u + I * f)),
        e[13] = X * (O * p + D * i + z * f - (U * f + L * p + R * i)),
        e[14] = X * (U * u + N * p + I * i - (V * p + M * i + z * u)),
        e[15] = X * (V * f + P * i + L * u - (O * u + N * f + B * i)),
        e
    }
    function f(t, e, r) {
        r = r || n();
        const i = e[0]
          , a = e[1]
          , o = e[2]
          , s = i * t[3] + a * t[7] + o * t[11] + t[15];
        return r[0] = (i * t[0] + a * t[4] + o * t[8] + t[12]) / s,
        r[1] = (i * t[1] + a * t[5] + o * t[9] + t[13]) / s,
        r[2] = (i * t[2] + a * t[6] + o * t[10] + t[14]) / s,
        r
    }
    function d(t, e, r) {
        r = r || n();
        const i = e[0]
          , a = e[1]
          , o = e[2];
        return r[0] = i * t[0] + a * t[4] + o * t[8],
        r[1] = i * t[1] + a * t[5] + o * t[9],
        r[2] = i * t[2] + a * t[6] + o * t[10],
        r
    }
    function b(t) {
        if (t instanceof Int8Array)
            return ja;
        if (t instanceof Uint8Array)
            return qa;
        if (t instanceof Uint8ClampedArray)
            return qa;
        if (t instanceof Int16Array)
            return Ga;
        if (t instanceof Uint16Array)
            return Xa;
        if (t instanceof Int32Array)
            return Ya;
        if (t instanceof Uint32Array)
            return Wa;
        if (t instanceof Float32Array)
            return Za;
        throw new Error("unsupported typed array type")
    }
    function m(t) {
        if (t === Int8Array)
            return ja;
        if (t === Uint8Array)
            return qa;
        if (t === Uint8ClampedArray)
            return qa;
        if (t === Int16Array)
            return Ga;
        if (t === Uint16Array)
            return Xa;
        if (t === Int32Array)
            return Ya;
        if (t === Uint32Array)
            return Wa;
        if (t === Float32Array)
            return Za;
        throw new Error("unsupported typed array type")
    }
    function p(t) {
        const e = Ja[t];
        if (!e)
            throw new Error("unknown gl type");
        return e
    }
    function g(t, e) {
        Object.keys(e).forEach((function(r) {
            e.hasOwnProperty(r) && t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ))
    }
    function _(...t) {
        console.error(...t)
    }
    function v(t, e) {
        return "undefined" != typeof WebGLRenderbuffer && e instanceof WebGLRenderbuffer
    }
    function x(t, e) {
        return "undefined" != typeof WebGLShader && e instanceof WebGLShader
    }
    function y(t, e) {
        return "undefined" != typeof WebGLTexture && e instanceof WebGLTexture
    }
    function T(t, e, r, n, i) {
        t.bindBuffer(e, r),
        t.bufferData(e, n, i || Qa)
    }
    function w(t, e, r, n) {
        if (function(t, e) {
            return "undefined" != typeof WebGLBuffer && e instanceof WebGLBuffer
        }(0, e))
            return e;
        r = r || $a;
        const i = t.createBuffer();
        return T(t, r, i, e, n),
        i
    }
    function A(t) {
        return "indices" === t
    }
    function E(t) {
        return t.length ? t : t.data
    }
    function S(t, e) {
        let r;
        if (r = co.test(t) ? 2 : ho.test(t) ? 4 : 3,
        0 < e % r)
            throw new Error(`Can not guess numComponents for attribute '${t}'. Tried ${r} but ${e} values is not evenly divisible by ${r}. You should specify it.`);
        return r
    }
    function F(t, e) {
        return t.numComponents || t.size || S(e, E(t).length)
    }
    function k(t, e) {
        if (Ka(t))
            return t;
        if (Ka(t.data))
            return t.data;
        Array.isArray(t) && (t = {
            data: t
        });
        let r = t.type;
        return r || (r = A(e) ? Uint16Array : Float32Array),
        new r(t.data)
    }
    function C(t, e) {
        const r = {};
        return Object.keys(e).forEach((function(n) {
            if (!A(n)) {
                const i = e[n]
                  , a = i.attrib || i.name || i.attribName || lo.attribPrefix + n;
                if (i.value) {
                    if (!Array.isArray(i.value) && !Ka(i.value))
                        throw new Error("array.value is not array or typedarray");
                    r[a] = {
                        value: i.value
                    }
                } else {
                    let e, o, s, u;
                    if (i.buffer && i.buffer instanceof WebGLBuffer)
                        e = i.buffer,
                        u = i.numComponents || i.size,
                        o = i.type,
                        s = i.normalize;
                    else if ("number" == typeof i || "number" == typeof i.data) {
                        const r = i.data || i
                          , a = i.type || Float32Array
                          , l = r * a.BYTES_PER_ELEMENT;
                        o = m(a),
                        s = void 0 === i.normalize ? function(t) {
                            return !(t !== Int8Array && t !== Uint8Array)
                        }(a) : i.normalize,
                        u = i.numComponents || i.size || S(n, r),
                        e = t.createBuffer(),
                        t.bindBuffer($a, e),
                        t.bufferData($a, l, i.drawType || Qa)
                    } else {
                        const r = k(i, n);
                        e = w(t, r, void 0, i.drawType),
                        o = b(r),
                        s = void 0 === i.normalize ? function(t) {
                            return !!(t instanceof Int8Array) || !!(t instanceof Uint8Array)
                        }(r) : i.normalize,
                        u = F(i, n)
                    }
                    r[a] = {
                        buffer: e,
                        numComponents: u,
                        type: o,
                        normalize: s,
                        stride: i.stride || 0,
                        offset: i.offset || 0,
                        divisor: void 0 === i.divisor ? void 0 : i.divisor,
                        drawType: i.drawType
                    }
                }
            }
        }
        )),
        t.bindBuffer($a, null),
        r
    }
    function D(t, e) {
        let r, n;
        for (n = 0; n < fo.length && (r = fo[n],
        !(r in e)) && (r = lo.attribPrefix + r,
        !(r in e)); ++n)
            ;
        n === fo.length && (r = Object.keys(e)[0]);
        const i = e[r];
        t.bindBuffer($a, i.buffer);
        const a = t.getBufferParameter($a, eo);
        t.bindBuffer($a, null);
        const o = function(t, e) {
            return e === ro || e === no ? 1 : e === io || e === ao ? 2 : e === oo || e === so || e === uo ? 4 : 0
        }(0, i.type)
          , s = i.numComponents || i.size
          , u = a / o / s;
        if (0 != u % 1)
            throw new Error(`numComponents ${s} not correct for length ${length}`);
        return u
    }
    function R(t, e, r) {
        const n = C(t, e)
          , i = Object.assign({}, r || {});
        i.attribs = Object.assign({}, r ? r.attribs : {}, n);
        const a = e.indices;
        if (a) {
            const e = k(a, "indices");
            i.indices = w(t, e, to),
            i.numElements = e.length,
            i.elementType = b(e)
        } else
            i.numElements || (i.numElements = D(t, i.attribs));
        return i
    }
    function M(t, e, r) {
        const n = "indices" === r ? to : $a;
        return w(t, k(e, r), n)
    }
    function I(t, e) {
        const r = {};
        return Object.keys(e).forEach((function(n) {
            r[n] = M(t, e[n], n)
        }
        )),
        e.indices ? (r.numElements = e.indices.length,
        r.elementType = b(k(e.indices))) : r.numElements = function(t) {
            let e, r;
            for (r = 0; r < fo.length && (e = fo[r],
            !(e in t)); ++r)
                ;
            r === fo.length && (e = Object.keys(t)[0]);
            const n = t[e]
              , i = E(n).length
              , a = F(n, e);
            if (0 < i % a)
                throw new Error(`numComponents ${a} not correct for length ${i}`);
            return i / a
        }(e),
        r
    }
    function P(t, e) {
        let r = 0;
        return t.push = function() {
            for (let e = 0; e < arguments.length; ++e) {
                const n = arguments[e];
                if (n instanceof Array || Ka(n))
                    for (let e = 0; e < n.length; ++e)
                        t[r++] = n[e];
                else
                    t[r++] = n
            }
        }
        ,
        t.reset = function(t) {
            r = t || 0
        }
        ,
        t.numComponents = e,
        Object.defineProperty(t, "numElements", {
            get: function() {
                return 0 | this.length / this.numComponents
            }
        }),
        t
    }
    function B(t, e, r) {
        return P(new (r || Float32Array)(t * e), t)
    }
    function U(t) {
        return "indices" !== t
    }
    function z(t, e, r) {
        const n = t.length
          , i = new Float32Array(3);
        for (let a = 0; a < n; a += 3)
            r(e, [t[a], t[a + 1], t[a + 2]], i),
            t[a] = i[0],
            t[a + 1] = i[1],
            t[a + 2] = i[2]
    }
    function O(t, e, r) {
        r = r || n();
        const i = e[0]
          , a = e[1]
          , o = e[2];
        return r[0] = i * t[0] + a * t[1] + o * t[2],
        r[1] = i * t[4] + a * t[5] + o * t[6],
        r[2] = i * t[8] + a * t[9] + o * t[10],
        r
    }
    function L(t, e) {
        return z(t, e, d),
        t
    }
    function V(t, e) {
        return z(t, h(e), O),
        t
    }
    function N(t, e) {
        return z(t, e, f),
        t
    }
    function H(t, e) {
        return Object.keys(t).forEach((function(r) {
            const n = t[r];
            0 <= r.indexOf("pos") ? N(n, e) : 0 <= r.indexOf("tan") || 0 <= r.indexOf("binorm") ? L(n, e) : 0 <= r.indexOf("norm") && V(n, e)
        }
        )),
        t
    }
    function j(t, e, r) {
        return t = t || 2,
        {
            position: {
                numComponents: 2,
                data: [(e = e || 0) + -1 * (t *= .5), (r = r || 0) + -1 * t, e + 1 * t, r + -1 * t, e + -1 * t, r + 1 * t, e + 1 * t, r + 1 * t]
            },
            normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
            texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
            indices: [0, 1, 2, 2, 1, 3]
        }
    }
    function q(t, e, r, n, i) {
        t = t || 1,
        e = e || 1,
        r = r || 1,
        n = n || 1,
        i = i || c();
        const a = (r + 1) * (n + 1)
          , o = B(3, a)
          , s = B(3, a)
          , u = B(2, a);
        for (let i = 0; i <= n; i++)
            for (let a = 0; a <= r; a++) {
                const l = a / r
                  , c = i / n;
                o.push(t * l - .5 * t, 0, e * c - .5 * e),
                s.push(0, 1, 0),
                u.push(l, c)
            }
        const l = r + 1
          , h = B(3, r * n * 2, Uint16Array);
        for (let t = 0; t < n; t++)
            for (let e = 0; e < r; e++)
                h.push((t + 0) * l + e, (t + 1) * l + e, (t + 0) * l + e + 1),
                h.push((t + 1) * l + e, (t + 1) * l + e + 1, (t + 0) * l + e + 1);
        return H({
            position: o,
            normal: s,
            texcoord: u,
            indices: h
        }, i)
    }
    function G(t, e, r, n, i, a, o) {
        if (0 >= e || 0 >= r)
            throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
        const s = (i = i || Sa) - (n = n || 0)
          , u = (o = o || 2 * Sa) - (a = a || 0)
          , l = (e + 1) * (r + 1)
          , c = B(3, l)
          , h = B(3, l)
          , f = B(2, l);
        for (let i = 0; i <= r; i++)
            for (let o = 0; o <= e; o++) {
                const l = o / e
                  , d = i / r
                  , b = u * l + a
                  , m = s * d + n
                  , p = wa(b)
                  , g = Aa(b)
                  , _ = wa(m)
                  , v = g * _
                  , x = Aa(m)
                  , y = p * _;
                c.push(t * v, t * x, t * y),
                h.push(v, x, y),
                f.push(1 - l, d)
            }
        const d = e + 1
          , b = B(3, e * r * 2, Uint16Array);
        for (let t = 0; t < e; t++)
            for (let e = 0; e < r; e++)
                b.push((e + 0) * d + t, (e + 0) * d + t + 1, (e + 1) * d + t),
                b.push((e + 1) * d + t, (e + 0) * d + t + 1, (e + 1) * d + t + 1);
        return {
            position: c,
            normal: h,
            texcoord: f,
            indices: b
        }
    }
    function X(t) {
        const e = (t = t || 1) / 2
          , r = [[-e, -e, -e], [+e, -e, -e], [-e, +e, -e], [+e, +e, -e], [-e, -e, +e], [+e, -e, +e], [-e, +e, +e], [+e, +e, +e]]
          , n = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]
          , i = [[1, 0], [0, 0], [0, 1], [1, 1]]
          , a = B(3, 24)
          , o = B(3, 24)
          , s = B(2, 24)
          , u = B(3, 12, Uint16Array);
        for (let t = 0; 6 > t; ++t) {
            const e = mo[t];
            for (let u = 0; 4 > u; ++u) {
                const l = r[e[u]]
                  , c = n[t]
                  , h = i[u];
                a.push(l),
                o.push(c),
                s.push(h)
            }
            const l = 4 * t;
            u.push(l + 0, l + 1, l + 2),
            u.push(l + 0, l + 2, l + 3)
        }
        return {
            position: a,
            normal: o,
            texcoord: s,
            indices: u
        }
    }
    function Y(t, e, r, n, i, a, o) {
        if (3 > n)
            throw new Error("radialSubdivisions must be 3 or greater");
        if (1 > i)
            throw new Error("verticalSubdivisions must be 1 or greater");
        const s = !(void 0 !== a) || a
          , u = !(void 0 !== o) || o
          , l = (s ? 2 : 0) + (u ? 2 : 0)
          , c = (n + 1) * (i + 1 + l)
          , h = B(3, c)
          , f = B(3, c)
          , d = B(2, c)
          , b = B(3, n * (i + l / 2) * 2, Uint16Array)
          , m = n + 1
          , p = Ta(t - e, r)
          , g = Aa(p)
          , _ = wa(p)
          , v = i + (u ? 2 : 0);
        for (let a = a ? -2 : 0; a <= v; ++a) {
            let o, s = a / i, u = r * s;
            0 > a ? (u = 0,
            s = 1,
            o = t) : a > i ? (u = r,
            s = 1,
            o = e) : o = t + a / i * (e - t),
            (-2 == a || a === i + 2) && (o = 0,
            s = 0),
            u -= r / 2;
            for (let t = 0; t < m; ++t) {
                const e = wa(t * Sa * 2 / n)
                  , r = Aa(t * Sa * 2 / n);
                h.push(e * o, u, r * o),
                0 > a ? f.push(0, -1, 0) : a > i ? f.push(0, 1, 0) : 0 === o ? f.push(0, 0, 0) : f.push(e * g, _, r * g),
                d.push(t / n, 1 - s)
            }
        }
        for (let t = 0; t < i + l; ++t)
            if (!(1 === t && s || t === i + l - 2 && u))
                for (let e = 0; e < n; ++e)
                    b.push(m * (t + 0) + 0 + e, m * (t + 0) + 1 + e, m * (t + 1) + 1 + e),
                    b.push(m * (t + 0) + 0 + e, m * (t + 1) + 1 + e, m * (t + 1) + 0 + e);
        return {
            position: h,
            normal: f,
            texcoord: d,
            indices: b
        }
    }
    function W(t, e) {
        e = e || [];
        const r = [];
        for (let n = 0; n < t.length; n += 4) {
            const i = t[n]
              , a = t.slice(n + 1, n + 4);
            a.push.apply(a, e);
            for (let t = 0; t < i; ++t)
                r.push.apply(r, a)
        }
        return r
    }
    function Z() {
        const t = [0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, 30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, 30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, 0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, 30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30, 30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30, 0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30, 100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30, 30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0, 30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30, 30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30, 67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30, 30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0, 30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30, 0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0, 0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0]
          , e = W([18, 0, 0, 1, 18, 0, 0, -1, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, -1, 0, 0])
          , r = W([18, 200, 70, 120, 18, 80, 70, 200, 6, 70, 200, 210, 6, 200, 200, 70, 6, 210, 100, 70, 6, 210, 160, 70, 6, 70, 180, 210, 6, 100, 70, 210, 6, 76, 210, 100, 6, 140, 210, 80, 6, 90, 130, 110, 6, 160, 160, 220], [255])
          , n = t.length / 3
          , i = {
            position: B(3, n),
            texcoord: B(2, n),
            normal: B(3, n),
            color: B(4, n, Uint8Array),
            indices: B(3, n / 3, Uint16Array)
        };
        i.position.push(t),
        i.texcoord.push([.22, .19, .22, .79, .34, .19, .22, .79, .34, .79, .34, .19, .34, .19, .34, .31, .62, .19, .34, .31, .62, .31, .62, .19, .34, .43, .34, .55, .49, .43, .34, .55, .49, .55, .49, .43, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0]),
        i.normal.push(e),
        i.color.push(r);
        for (let t = 0; t < n; ++t)
            i.indices.push(t);
        return i
    }
    function J(t, e, r, n, a, o, s) {
        function l(t, e, r) {
            return t + (e - t) * r
        }
        function c(e, r, s, c, h, b) {
            for (let _ = 0; _ <= a; _++) {
                const v = r / (f - 1)
                  , x = _ / a
                  , y = (o + x * d) * Sa
                  , T = wa(y)
                  , w = Aa(y)
                  , A = l(t, e, T);
                m.push(2 * (v - .5) * n, w * t, T * A);
                const E = i(u([0, T, w], s), c);
                p.push(E),
                g.push(v * h + b, x)
            }
        }
        function h(t, e) {
            for (let r = 0; r < a; ++r)
                _.push(t + r + 0, t + r + 1, e + r + 0),
                _.push(t + r + 1, e + r + 1, e + r + 0)
        }
        if (0 >= a)
            throw new Error("subdivisionDown must be > 0");
        const f = 2
          , d = (s = s || 1) - (o = o || 0)
          , b = 2 * (a + 1) * (2 + f)
          , m = B(3, b)
          , p = B(3, b)
          , g = B(2, b);
        for (let t = 0; t < f; t++) {
            const n = 2 * (t / (f - 1) - .5);
            c(e, t, [1, 1, 1], [0, 0, 0], 1, 0),
            c(e, t, [0, 0, 0], [n, 0, 0], 0, 0),
            c(r, t, [1, 1, 1], [0, 0, 0], 1, 0),
            c(r, t, [0, 0, 0], [n, 0, 0], 0, 1)
        }
        const _ = B(3, 2 * a * (2 + f), Uint16Array)
          , v = a + 1;
        return h(0 * v, 4 * v),
        h(5 * v, 7 * v),
        h(6 * v, 2 * v),
        h(3 * v, 1 * v),
        {
            position: m,
            normal: p,
            texcoord: g,
            indices: _
        }
    }
    function K(t, e, r, n, i, a) {
        return Y(t, t, e, r, n, i, a)
    }
    function Q(t, e, r, n, i, a) {
        if (3 > r)
            throw new Error("radialSubdivisions must be 3 or greater");
        if (3 > n)
            throw new Error("verticalSubdivisions must be 3 or greater");
        const o = (a = a || 2 * Sa) - (i = i || 0)
          , s = r + 1
          , u = n + 1
          , l = s * u
          , c = B(3, l)
          , h = B(3, l)
          , f = B(2, l)
          , d = B(3, r * n * 2, Uint16Array);
        for (let a = 0; a < u; ++a) {
            const u = a / n
              , l = u * Sa * 2
              , d = wa(l)
              , b = t + d * e
              , m = Aa(l);
            for (let t = 0; t < s; ++t) {
                const n = t / r
                  , a = i + n * o
                  , s = wa(a)
                  , l = Aa(a);
                c.push(s * b, m * e, l * b),
                h.push(s * d, m, l * d),
                f.push(n, 1 - u)
            }
        }
        for (let t = 0; t < n; ++t)
            for (let e = 0; e < r; ++e) {
                const r = 1 + e
                  , n = 1 + t;
                d.push(s * t + e, s * n + e, s * t + r),
                d.push(s * n + e, s * n + r, s * t + r)
            }
        return {
            position: c,
            normal: h,
            texcoord: f,
            indices: d
        }
    }
    function tt(t, e, r, n, i) {
        if (3 > e)
            throw new Error("divisions must be at least 3");
        i = i || 1,
        n = n || 0;
        const a = (e + 1) * ((r = r || 1) + 1)
          , o = B(3, a)
          , s = B(3, a)
          , u = B(2, a)
          , l = B(3, r * e * 2, Uint16Array);
        let c = 0;
        const h = t - n
          , f = e + 1;
        for (let t = 0; t <= r; ++t) {
            const a = n + h * ya(t / r, i);
            for (let n = 0; n <= e; ++n) {
                const i = 2 * Sa * n / e
                  , h = a * Aa(i)
                  , d = a * wa(i);
                if (o.push(h, 0, d),
                s.push(0, 1, 0),
                u.push(1 - n / e, t / r),
                0 < t && n !== e) {
                    const t = c + (n + 1)
                      , e = c + n
                      , r = c + n - f
                      , i = c + (n + 1) - f;
                    l.push(t, e, r),
                    l.push(t, r, i)
                }
            }
            c += e + 1
        }
        return {
            position: o,
            normal: s,
            texcoord: u,
            indices: l
        }
    }
    function et(t) {
        return function(e) {
            const r = t.apply(this, Array.prototype.slice.call(arguments, 1));
            return I(e, r)
        }
    }
    function rt(t) {
        return function(e) {
            const r = t.apply(null, Array.prototype.slice.call(arguments, 1));
            return R(e, r)
        }
    }
    function nt(t, e, r, n) {
        n = n || 0;
        const i = t.length;
        for (let a = 0; a < i; ++a)
            e[r + a] = t[a] + n
    }
    function it(t, e) {
        const r = bo(t)
          , n = new r.constructor(e);
        let i = n;
        return r.numComponents && r.numElements && P(n, r.numComponents),
        t.data && (i = {
            data: n
        },
        function(t, e, r) {
            t.forEach((function(t) {
                const n = e[t];
                void 0 !== n && (r[t] = n)
            }
            ))
        }(po, t, i)),
        i
    }
    function at(t) {
        return !!t.texStorage2D
    }
    function ot(t) {
        if (!Zu) {
            const t = {};
            t[No] = {
                textureFormat: No,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [1, 2, 2, 4],
                type: [Su, Bu, Uu, Ru]
            },
            t[qo] = {
                textureFormat: qo,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [1, 2, 2, 4],
                type: [Su, Bu, Uu, Ru]
            },
            t[Go] = {
                textureFormat: Go,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [2, 4, 4, 8],
                type: [Su, Bu, Uu, Ru]
            },
            t[Ho] = {
                textureFormat: Ho,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [3, 6, 6, 12, 2],
                type: [Su, Bu, Uu, Ru, Pu]
            },
            t[jo] = {
                textureFormat: jo,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [4, 8, 8, 16, 2, 2],
                type: [Su, Bu, Uu, Ru, Mu, Iu]
            },
            t[Xo] = {
                textureFormat: Xo,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [2, 4],
                type: [Du, ku]
            },
            t[Es] = {
                textureFormat: qu,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [1],
                type: [Su]
            },
            t[Ss] = {
                textureFormat: qu,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [1],
                type: [Eu]
            },
            t[Fs] = {
                textureFormat: qu,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [4, 2],
                type: [Ru, Bu]
            },
            t[ks] = {
                textureFormat: qu,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [Ru]
            },
            t[Cs] = {
                textureFormat: Gu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [1],
                type: [Su]
            },
            t[Ds] = {
                textureFormat: Gu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [1],
                type: [Eu]
            },
            t[Ns] = {
                textureFormat: Gu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [2],
                type: [ku]
            },
            t[Hs] = {
                textureFormat: Gu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [2],
                type: [Fu]
            },
            t[js] = {
                textureFormat: Gu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [Du]
            },
            t[qs] = {
                textureFormat: Gu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [Cu]
            },
            t[Bs] = {
                textureFormat: Hu,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [2],
                type: [Su]
            },
            t[Us] = {
                textureFormat: Hu,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [2],
                type: [Eu]
            },
            t[zs] = {
                textureFormat: Hu,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [8, 4],
                type: [Ru, Bu]
            },
            t[Os] = {
                textureFormat: Hu,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [8],
                type: [Ru]
            },
            t[Ls] = {
                textureFormat: ju,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [2],
                type: [Su]
            },
            t[Vs] = {
                textureFormat: ju,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [2],
                type: [Eu]
            },
            t[Rs] = {
                textureFormat: ju,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [ku]
            },
            t[Ms] = {
                textureFormat: ju,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [Fu]
            },
            t[Is] = {
                textureFormat: ju,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [8],
                type: [Du]
            },
            t[Ps] = {
                textureFormat: ju,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [8],
                type: [Cu]
            },
            t[Gs] = {
                textureFormat: Ho,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [3],
                type: [Su]
            },
            t[Xs] = {
                textureFormat: Ho,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [3],
                type: [Su]
            },
            t[Ys] = {
                textureFormat: Ho,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [3, 2],
                type: [Su, Pu]
            },
            t[Ws] = {
                textureFormat: Ho,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [3],
                type: [Eu]
            },
            t[Zs] = {
                textureFormat: Ho,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [12, 6, 4],
                type: [Ru, Bu, Ou]
            },
            t[Js] = {
                textureFormat: Ho,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [12, 6, 4],
                type: [Ru, Bu, Lu]
            },
            t[Ks] = {
                textureFormat: Ho,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [12, 6],
                type: [Ru, Bu]
            },
            t[Qs] = {
                textureFormat: Ho,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [12],
                type: [Ru]
            },
            t[$s] = {
                textureFormat: Xu,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [3],
                type: [Su]
            },
            t[tu] = {
                textureFormat: Xu,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [3],
                type: [Eu]
            },
            t[eu] = {
                textureFormat: Xu,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [6],
                type: [ku]
            },
            t[ru] = {
                textureFormat: Xu,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [6],
                type: [Fu]
            },
            t[nu] = {
                textureFormat: Xu,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [12],
                type: [Du]
            },
            t[iu] = {
                textureFormat: Xu,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [12],
                type: [Cu]
            },
            t[au] = {
                textureFormat: jo,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [4],
                type: [Su]
            },
            t[ou] = {
                textureFormat: jo,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [4],
                type: [Su]
            },
            t[su] = {
                textureFormat: jo,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [4],
                type: [Eu]
            },
            t[uu] = {
                textureFormat: jo,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [4, 2, 4],
                type: [Su, Iu, zu]
            },
            t[lu] = {
                textureFormat: jo,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [4, 2],
                type: [Su, Mu]
            },
            t[cu] = {
                textureFormat: jo,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [4],
                type: [zu]
            },
            t[hu] = {
                textureFormat: jo,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [16, 8],
                type: [Ru, Bu]
            },
            t[fu] = {
                textureFormat: jo,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [16],
                type: [Ru]
            },
            t[du] = {
                textureFormat: Yu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [Su]
            },
            t[bu] = {
                textureFormat: Yu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [Eu]
            },
            t[mu] = {
                textureFormat: Yu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [zu]
            },
            t[pu] = {
                textureFormat: Yu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [8],
                type: [ku]
            },
            t[gu] = {
                textureFormat: Yu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [8],
                type: [Fu]
            },
            t[_u] = {
                textureFormat: Yu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [16],
                type: [Cu]
            },
            t[vu] = {
                textureFormat: Yu,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [16],
                type: [Du]
            },
            t[xu] = {
                textureFormat: Xo,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [2, 4],
                type: [ku, Du]
            },
            t[yu] = {
                textureFormat: Xo,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [Du]
            },
            t[Tu] = {
                textureFormat: Xo,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [Ru]
            },
            t[Au] = {
                textureFormat: Yo,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [Nu]
            },
            t[wu] = {
                textureFormat: Yo,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [Vu]
            },
            Object.keys(t).forEach((function(e) {
                const r = t[e];
                r.bytesPerElementMap = {},
                r.bytesPerElement.forEach((function(t, e) {
                    const n = r.type[e];
                    r.bytesPerElementMap[n] = t
                }
                ))
            }
            )),
            Zu = t
        }
        return Zu[t]
    }
    function st(t, e) {
        const r = ot(t);
        if (!r)
            throw "unknown internal format";
        const n = r.bytesPerElementMap[e];
        if (void 0 === n)
            throw "unknown internal format";
        return n
    }
    function ut(t) {
        const e = ot(t);
        if (!e)
            throw "unknown internal format";
        return {
            format: e.textureFormat,
            type: e.type[0]
        }
    }
    function lt(t) {
        return 0 == (t & t - 1)
    }
    function ct(t, e, r, n) {
        if (!at(t))
            return lt(e) && lt(r);
        const i = ot(n);
        if (!i)
            throw "unknown internal format";
        return i.colorRenderable && i.textureFilterable
    }
    function ht(t) {
        const e = ot(t);
        if (!e)
            throw "unknown internal format";
        return e.textureFilterable
    }
    function ft(t, e, r) {
        return Lo(e) ? b(e) : r || Su
    }
    function dt(t, e, r, n, i) {
        if (0 != i % 1)
            throw "can't guess dimensions";
        if (r || n) {
            if (n) {
                if (!r && (r = i / n) % 1)
                    throw "can't guess dimensions"
            } else if ((n = i / r) % 1)
                throw "can't guess dimensions"
        } else {
            const t = Fa(i / (e === Qo ? 6 : 1));
            0 == t % 1 ? (r = t,
            n = t) : (r = i,
            n = 1)
        }
        return {
            width: r,
            height: n
        }
    }
    function bt(t) {
        Oo.textureColor = new Uint8Array([255 * t[0], 255 * t[1], 255 * t[2], 255 * t[3]])
    }
    function mt(t, e) {
        void 0 !== e.colorspaceConversion && (Ju.colorspaceConversion = t.getParameter(Ts),
        t.pixelStorei(Ts, e.colorspaceConversion)),
        void 0 !== e.premultiplyAlpha && (Ju.premultiplyAlpha = t.getParameter(ws),
        t.pixelStorei(ws, e.premultiplyAlpha)),
        void 0 !== e.flipY && (Ju.flipY = t.getParameter(As),
        t.pixelStorei(As, e.flipY))
    }
    function pt(t, e) {
        void 0 !== e.colorspaceConversion && t.pixelStorei(Ts, Ju.colorspaceConversion),
        void 0 !== e.premultiplyAlpha && t.pixelStorei(ws, Ju.premultiplyAlpha),
        void 0 !== e.flipY && t.pixelStorei(As, Ju.flipY)
    }
    function gt(t) {
        Ju.unpackAlignment = t.getParameter(ps),
        at(t) && (Ju.unpackRowLength = t.getParameter(gs),
        Ju.unpackImageHeight = t.getParameter(_s),
        Ju.unpackSkipPixels = t.getParameter(vs),
        Ju.unpackSkipRows = t.getParameter(xs),
        Ju.unpackSkipImages = t.getParameter(ys))
    }
    function _t(t) {
        t.pixelStorei(ps, Ju.unpackAlignment),
        at(t) && (t.pixelStorei(gs, Ju.unpackRowLength),
        t.pixelStorei(_s, Ju.unpackImageHeight),
        t.pixelStorei(vs, Ju.unpackSkipPixels),
        t.pixelStorei(xs, Ju.unpackSkipRows),
        t.pixelStorei(ys, Ju.unpackSkipImages))
    }
    function vt(t, e, r, n) {
        n.minMag && (r.call(t, e, ss, n.minMag),
        r.call(t, e, us, n.minMag)),
        n.min && r.call(t, e, ss, n.min),
        n.mag && r.call(t, e, us, n.mag),
        n.wrap && (r.call(t, e, ls, n.wrap),
        r.call(t, e, cs, n.wrap),
        (e === $o || function(t, e) {
            return "undefined" != typeof WebGLSampler && e instanceof WebGLSampler
        }(0, e)) && r.call(t, e, hs, n.wrap)),
        n.wrapR && r.call(t, e, hs, n.wrapR),
        n.wrapS && r.call(t, e, ls, n.wrapS),
        n.wrapT && r.call(t, e, cs, n.wrapT),
        n.minLod && r.call(t, e, fs, n.minLod),
        n.maxLod && r.call(t, e, ds, n.maxLod),
        n.baseLevel && r.call(t, e, bs, n.baseLevel),
        n.maxLevel && r.call(t, e, ms, n.maxLevel)
    }
    function xt(t, e, r) {
        const n = r.target || Ko;
        t.bindTexture(n, e),
        vt(t, n, t.texParameteri, r)
    }
    function yt(t, e, r) {
        vt(t, e, t.samplerParameteri, r)
    }
    function Tt(t, e) {
        const r = t.createSampler();
        return yt(t, r, e),
        r
    }
    function wt(t, e, r, n, i, a) {
        r = r || Oo.textureOptions,
        a = a || jo;
        const o = r.target || Ko;
        if (n = n || r.width,
        i = i || r.height,
        t.bindTexture(o, e),
        ct(t, n, i, a))
            t.generateMipmap(o);
        else {
            const e = ht(a) ? Jo : Zo;
            t.texParameteri(o, ss, e),
            t.texParameteri(o, us, e),
            t.texParameteri(o, ls, Wo),
            t.texParameteri(o, cs, Wo)
        }
    }
    function At(t) {
        return !0 === t.auto || void 0 === t.auto && void 0 === t.level
    }
    function Et(t, e) {
        return (e = e || {}).cubeFaceOrder || [es, rs, ns, is, as, os]
    }
    function St(t, e) {
        const r = Et(0, e).map((function(t, e) {
            return {
                face: t,
                ndx: e
            }
        }
        ));
        return r.sort((function(t, e) {
            return t.face - e.face
        }
        )),
        r
    }
    function Ft(t, e, r, n) {
        const i = (n = n || Oo.textureOptions).target || Ko
          , a = n.level || 0;
        let o = r.width
          , s = r.height;
        const u = n.internalFormat || n.format || jo
          , l = ut(u)
          , c = n.format || l.format
          , h = n.type || l.type;
        if (mt(t, n),
        t.bindTexture(i, e),
        i === Qo) {
            const l = r.width
              , f = r.height;
            let d, b;
            if (l / 6 === f)
                d = f,
                b = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
            else if (f / 6 === l)
                d = l,
                b = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
            else if (l / 3 == f / 2)
                d = l / 3,
                b = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
            else {
                if (l / 2 != f / 3)
                    throw "can't figure out cube map from element: " + (r.src ? r.src : r.nodeName);
                d = l / 2,
                b = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2]
            }
            const m = Vo();
            m ? (m.canvas.width = d,
            m.canvas.height = d,
            o = d,
            s = d,
            St(0, n).forEach((function(e) {
                const n = b[2 * e.ndx + 0] * d
                  , i = b[2 * e.ndx + 1] * d;
                m.drawImage(r, n, i, d, d, 0, 0, d, d),
                t.texImage2D(e.face, a, u, c, h, m.canvas)
            }
            )),
            m.canvas.width = 1,
            m.canvas.height = 1) : "undefined" != typeof createImageBitmap && (o = d,
            s = d,
            St(0, n).forEach((function(l) {
                const f = b[2 * l.ndx + 0] * d
                  , m = b[2 * l.ndx + 1] * d;
                t.texImage2D(l.face, a, u, d, d, 0, c, h, null),
                createImageBitmap(r, f, m, d, d, {
                    premultiplyAlpha: "none",
                    colorSpaceConversion: "none"
                }).then((function(r) {
                    mt(t, n),
                    t.bindTexture(i, e),
                    t.texImage2D(l.face, a, u, c, h, r),
                    pt(t, n),
                    At(n) && wt(t, e, n, o, s, u)
                }
                ))
            }
            )))
        } else if (i === $o || i === ts) {
            const e = ka(r.width, r.height)
              , n = Ca(r.width, r.height)
              , o = n / e;
            if (0 != o % 1)
                throw "can not compute 3D dimensions of element";
            const s = r.width === n ? 1 : 0
              , l = r.height === n ? 1 : 0;
            gt(t),
            t.pixelStorei(ps, 1),
            t.pixelStorei(gs, r.width),
            t.pixelStorei(_s, 0),
            t.pixelStorei(ys, 0),
            t.texImage3D(i, a, u, e, e, e, 0, c, h, null);
            for (let n = 0; n < o; ++n) {
                const o = n * e * s
                  , u = n * e * l;
                t.pixelStorei(vs, o),
                t.pixelStorei(xs, u),
                t.texSubImage3D(i, a, 0, 0, n, e, e, 1, c, h, r)
            }
            _t(t)
        } else
            t.texImage2D(i, a, u, c, h, r);
        pt(t, n),
        At(n) && wt(t, e, n, o, s, u),
        xt(t, e, n)
    }
    function kt() {}
    function Ct(t, e) {
        return void 0 !== e || function(t) {
            if ("undefined" != typeof document) {
                const e = document.createElement("a");
                return e.href = t,
                e.hostname === location.hostname && e.port === location.port && e.protocol === location.protocol
            }
            {
                const e = new URL(location.href).origin;
                return new URL(t,location.href).origin === e
            }
        }(t) ? e : "anonymous"
    }
    function Dt(t) {
        return "undefined" != typeof ImageBitmap && t instanceof ImageBitmap || "undefined" != typeof ImageData && t instanceof ImageData || "undefined" != typeof HTMLElement && t instanceof HTMLElement
    }
    function Rt(t, e, r) {
        return Dt(t) ? (setTimeout((function() {
            r(null, t)
        }
        )),
        t) : function(t, e, r) {
            let n;
            if (r = r || kt,
            e = void 0 === e ? Oo.crossOrigin : e,
            e = Ct(t, e),
            "undefined" != typeof Image) {
                n = new Image,
                void 0 !== e && (n.crossOrigin = e);
                const i = function() {
                    n.removeEventListener("error", a),
                    n.removeEventListener("load", o),
                    n = null
                }
                  , a = function() {
                    const e = "couldn't load image: " + t;
                    _(e),
                    r(e, n),
                    i()
                }
                  , o = function() {
                    r(null, n),
                    i()
                };
                return n.addEventListener("error", a),
                n.addEventListener("load", o),
                n.src = t,
                n
            }
            if ("undefined" != typeof ImageBitmap) {
                let i, a;
                const o = function() {
                    r(i, a)
                }
                  , s = {};
                e && (s.mode = "cors"),
                fetch(t, s).then((function(t) {
                    if (!t.ok)
                        throw t;
                    return t.blob()
                }
                )).then((function(t) {
                    return createImageBitmap(t, {
                        premultiplyAlpha: "none",
                        colorSpaceConversion: "none"
                    })
                }
                )).then((function(t) {
                    a = t,
                    setTimeout(o)
                }
                )).catch((function(t) {
                    i = t,
                    setTimeout(o)
                }
                )),
                n = null
            }
            return n
        }(t, e, r)
    }
    function Mt(t, e, r) {
        const n = (r = r || Oo.textureOptions).target || Ko;
        if (t.bindTexture(n, e),
        !1 !== r.color) {
            const e = function(t) {
                return t = t || Oo.textureColor,
                Lo(t) ? t : new Uint8Array([255 * t[0], 255 * t[1], 255 * t[2], 255 * t[3]])
            }(r.color);
            if (n === Qo)
                for (let r = 0; 6 > r; ++r)
                    t.texImage2D(es + r, 0, jo, 1, 1, 0, jo, Su, e);
            else
                n === $o || n === ts ? t.texImage3D(n, 0, jo, 1, 1, 1, 0, jo, Su, e) : t.texImage2D(n, 0, jo, 1, 1, 0, jo, Su, e)
        }
    }
    function It(t, e, r, n) {
        n = n || kt,
        r = r || Oo.textureOptions,
        Mt(t, e, r);
        return Rt((r = Object.assign({}, r)).src, r.crossOrigin, (function(i, a) {
            i ? n(i, e, a) : (Ft(t, e, a, r),
            n(null, e, a))
        }
        ))
    }
    function Pt(t, e, r, n) {
        const i = (n = n || Oo.textureOptions).target || Ko;
        t.bindTexture(i, e);
        let a = n.width
          , o = n.height
          , s = n.depth;
        const u = n.level || 0
          , l = n.internalFormat || n.format || jo
          , c = ut(l)
          , h = n.format || c.format
          , f = n.type || ft(0, r, c.type);
        if (Lo(r))
            r instanceof Uint8ClampedArray && (r = new Uint8Array(r.buffer));
        else {
            const t = p(f);
            r = new t(r)
        }
        const d = st(l, f)
          , b = r.byteLength / d;
        if (b % 1)
            throw "length wrong size for format: " + zo(t, h);
        let m;
        if (i !== $o && i !== ts)
            m = dt(0, i, a, o, b),
            a = m.width,
            o = m.height;
        else if (a || o || s)
            !a || o && s ? !o || a && s ? (m = dt(0, i, a, o, b / s),
            a = m.width,
            o = m.height) : (m = dt(0, i, a, s, b / o),
            a = m.width,
            s = m.height) : (m = dt(0, i, o, s, b / a),
            o = m.width,
            s = m.height);
        else {
            const t = Math.cbrt(b);
            if (0 != t % 1)
                throw "can't guess cube size of array of numElements: " + b;
            a = t,
            o = t,
            s = t
        }
        if (gt(t),
        t.pixelStorei(ps, n.unpackAlignment || 1),
        mt(t, n),
        i === Qo) {
            const e = b / 6 * (d / r.BYTES_PER_ELEMENT);
            St(0, n).forEach(n => {
                const i = e * n.ndx
                  , s = r.subarray(i, i + e);
                t.texImage2D(n.face, u, l, a, o, 0, h, f, s)
            }
            )
        } else
            i === $o || i === ts ? t.texImage3D(i, u, l, a, o, s, 0, h, f, r) : t.texImage2D(i, u, l, a, o, 0, h, f, r);
        return pt(t, n),
        _t(t),
        {
            width: a,
            height: o,
            depth: s,
            type: f
        }
    }
    function Bt(t, e, r) {
        const n = r.target || Ko;
        t.bindTexture(n, e);
        const i = r.level || 0
          , a = r.internalFormat || r.format || jo
          , o = ut(a)
          , s = r.format || o.format
          , u = r.type || o.type;
        if (mt(t, r),
        n === Qo)
            for (let e = 0; 6 > e; ++e)
                t.texImage2D(es + e, i, a, r.width, r.height, 0, s, u, null);
        else
            n === $o || n === ts ? t.texImage3D(n, i, a, r.width, r.height, r.depth, 0, s, u, null) : t.texImage2D(n, i, a, r.width, r.height, 0, s, u, null);
        pt(t, r)
    }
    function Ut(t, e, r) {
        r = r || kt,
        e = e || Oo.textureOptions;
        const n = t.createTexture()
          , i = e.target || Ko;
        let a = e.width || 1
          , o = e.height || 1;
        const s = e.internalFormat || jo;
        t.bindTexture(i, n),
        i === Qo && (t.texParameteri(i, ls, Wo),
        t.texParameteri(i, cs, Wo));
        let u = e.src;
        if (u)
            if ("function" == typeof u && (u = u(t, e)),
            "string" == typeof u)
                It(t, n, e, r);
            else if (Lo(u) || Array.isArray(u) && ("number" == typeof u[0] || Array.isArray(u[0]) || Lo(u[0]))) {
                const r = Pt(t, n, u, e);
                a = r.width,
                o = r.height
            } else
                Array.isArray(u) && ("string" == typeof u[0] || Dt(u[0])) ? i === Qo ? function(t, e, r, n) {
                    function i(i) {
                        return function(a, u) {
                            --f,
                            a ? d.push(a) : u.width === u.height ? (mt(t, r),
                            t.bindTexture(h, e),
                            5 === f ? Et().forEach((function(e) {
                                t.texImage2D(e, o, s, l, c, u)
                            }
                            )) : t.texImage2D(i, o, s, l, c, u),
                            pt(t, r),
                            At(r) && t.generateMipmap(h)) : d.push("cubemap face img is not a square: " + u.src),
                            0 === f && n(d.length ? d : void 0, e, m)
                        }
                    }
                    n = n || kt;
                    const a = r.src;
                    if (6 !== a.length)
                        throw "there must be 6 urls for a cubemap";
                    const o = r.level || 0
                      , s = r.internalFormat || r.format || jo
                      , u = ut(s)
                      , l = r.format || u.format
                      , c = r.type || Su
                      , h = r.target || Ko;
                    if (h !== Qo)
                        throw "target must be TEXTURE_CUBE_MAP";
                    Mt(t, e, r),
                    r = Object.assign({}, r);
                    let f = 6;
                    const d = []
                      , b = Et(0, r);
                    let m = a.map((function(t, e) {
                        return Rt(t, r.crossOrigin, i(b[e]))
                    }
                    ))
                }(t, n, e, r) : function(t, e, r, n) {
                    function i(i) {
                        return function(a, s) {
                            if (--h,
                            a)
                                f.push(a);
                            else {
                                if (mt(t, r),
                                t.bindTexture(c, e),
                                _) {
                                    _ = !1,
                                    m = r.width || s.width,
                                    p = r.height || s.height,
                                    t.texImage3D(c, b, o, m, p, g, 0, u, l, null);
                                    for (let e = 0; e < g; ++e)
                                        t.texSubImage3D(c, b, 0, 0, e, m, p, 1, u, l, s)
                                } else {
                                    let e, r = s;
                                    (s.width !== m || s.height !== p) && (e = Vo(),
                                    r = e.canvas,
                                    e.canvas.width = m,
                                    e.canvas.height = p,
                                    e.drawImage(s, 0, 0, m, p)),
                                    t.texSubImage3D(c, b, 0, 0, i, m, p, 1, u, l, r),
                                    e && r === e.canvas && (e.canvas.width = 0,
                                    e.canvas.height = 0)
                                }
                                pt(t, r),
                                At(r) && t.generateMipmap(c)
                            }
                            0 === h && n(f.length ? f : void 0, e, d)
                        }
                    }
                    n = n || kt;
                    const a = r.src
                      , o = r.internalFormat || r.format || jo
                      , s = ut(o)
                      , u = r.format || s.format
                      , l = r.type || Su
                      , c = r.target || ts;
                    if (c !== $o && c !== ts)
                        throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
                    Mt(t, e, r),
                    r = Object.assign({}, r);
                    let h = a.length;
                    const f = [];
                    let d;
                    const b = r.level || 0;
                    let m = r.width
                      , p = r.height;
                    const g = a.length;
                    let _ = !0;
                    d = a.map((function(t, e) {
                        return Rt(t, r.crossOrigin, i(e))
                    }
                    ))
                }(t, n, e, r) : (Ft(t, n, u, e),
                a = u.width,
                o = u.height);
        else
            Bt(t, n, e);
        return At(e) && wt(t, n, e, a, o, s),
        xt(t, n, e),
        n
    }
    function zt(t, e, r, n, i, a) {
        n = n || r.width,
        i = i || r.height,
        a = a || r.depth;
        const o = r.target || Ko;
        t.bindTexture(o, e);
        const s = r.level || 0
          , u = r.internalFormat || r.format || jo
          , l = ut(u)
          , c = r.format || l.format;
        let h;
        const f = r.src;
        if (h = f && (Lo(f) || Array.isArray(f) && "number" == typeof f[0]) ? r.type || ft(0, f, l.type) : r.type || l.type,
        o === Qo)
            for (let e = 0; 6 > e; ++e)
                t.texImage2D(es + e, s, u, n, i, 0, c, h, null);
        else
            o === $o || o === ts ? t.texImage3D(o, s, u, n, i, a, 0, c, h, null) : t.texImage2D(o, s, u, n, i, 0, c, h, null)
    }
    function Ot(t) {
        return "undefined" != typeof document && document.getElementById ? document.getElementById(t) : null
    }
    function Lt(t, e) {
        return Tl[e].bindPoint
    }
    function Vt(t, e) {
        return function(r) {
            t.uniform1i(e, r)
        }
    }
    function Nt(t, e) {
        return function(r) {
            t.uniform1iv(e, r)
        }
    }
    function Ht(t, e) {
        return function(r) {
            t.uniform2iv(e, r)
        }
    }
    function jt(t, e) {
        return function(r) {
            t.uniform3iv(e, r)
        }
    }
    function qt(t, e) {
        return function(r) {
            t.uniform4iv(e, r)
        }
    }
    function Gt(t, e, r, n) {
        const i = Lt(0, e);
        return at(t) ? function(e) {
            let a, o;
            y(0, e) ? (a = e,
            o = null) : (a = e.texture,
            o = e.sampler),
            t.uniform1i(n, r),
            t.activeTexture($u + r),
            t.bindTexture(i, a),
            t.bindSampler(r, o)
        }
        : function(e) {
            t.uniform1i(n, r),
            t.activeTexture($u + r),
            t.bindTexture(i, e)
        }
    }
    function Xt(t, e, r, n, i) {
        const a = Lt(0, e)
          , o = new Int32Array(i);
        for (let t = 0; t < i; ++t)
            o[t] = r + t;
        return at(t) ? function(e) {
            t.uniform1iv(n, o),
            e.forEach((function(e, n) {
                let i, s;
                t.activeTexture($u + o[n]),
                y(0, e) ? (i = e,
                s = null) : (i = e.texture,
                s = e.sampler),
                t.bindSampler(r, s),
                t.bindTexture(a, i)
            }
            ))
        }
        : function(e) {
            t.uniform1iv(n, o),
            e.forEach((function(e, r) {
                t.activeTexture($u + o[r]),
                t.bindTexture(a, e)
            }
            ))
        }
    }
    function Yt(t, e) {
        return function(r) {
            if (r.value)
                switch (t.disableVertexAttribArray(e),
                r.value.length) {
                case 4:
                    t.vertexAttrib4fv(e, r.value);
                    break;
                case 3:
                    t.vertexAttrib3fv(e, r.value);
                    break;
                case 2:
                    t.vertexAttrib2fv(e, r.value);
                    break;
                case 1:
                    t.vertexAttrib1fv(e, r.value);
                    break;
                default:
                    throw new Error("the length of a float constant value must be between 1 and 4!")
                }
            else
                t.bindBuffer(tl, r.buffer),
                t.enableVertexAttribArray(e),
                t.vertexAttribPointer(e, r.numComponents || r.size, r.type || gl, r.normalize || !1, r.stride || 0, r.offset || 0),
                void 0 !== r.divisor && t.vertexAttribDivisor(e, r.divisor)
        }
    }
    function Wt(t, e) {
        return function(r) {
            if (r.value) {
                if (t.disableVertexAttribArray(e),
                4 !== r.value.length)
                    throw new Error("The length of an integer constant value must be 4!");
                t.vertexAttrib4iv(e, r.value)
            } else
                t.bindBuffer(tl, r.buffer),
                t.enableVertexAttribArray(e),
                t.vertexAttribIPointer(e, r.numComponents || r.size, r.type || _l, r.stride || 0, r.offset || 0),
                void 0 !== r.divisor && t.vertexAttribDivisor(e, r.divisor)
        }
    }
    function Zt(t, e) {
        return function(r) {
            if (r.value) {
                if (t.disableVertexAttribArray(e),
                4 !== r.value.length)
                    throw new Error("The length of an unsigned integer constant value must be 4!");
                t.vertexAttrib4uiv(e, r.value)
            } else
                t.bindBuffer(tl, r.buffer),
                t.enableVertexAttribArray(e),
                t.vertexAttribIPointer(e, r.numComponents || r.size, r.type || vl, r.stride || 0, r.offset || 0),
                void 0 !== r.divisor && t.vertexAttribDivisor(e, r.divisor)
        }
    }
    function Jt(t, e, r) {
        const n = r.size
          , i = r.count;
        return function(r) {
            t.bindBuffer(tl, r.buffer);
            const a = r.size || r.numComponents || n
              , o = r.type || gl
              , s = Tl[o].size * a
              , u = r.normalize || !1
              , l = r.offset || 0;
            for (let n = 0; n < i; ++n)
                t.enableVertexAttribArray(e + n),
                t.vertexAttribPointer(e + n, a / i, o, u, s, l + s / i * n),
                void 0 !== r.divisor && t.vertexAttribDivisor(e + n, r.divisor)
        }
    }
    function Kt(t, e, r, n) {
        const i = t.createShader(r);
        let a = 0;
        Al.test(e) && (a = 1,
        e = e.replace(Al, "")),
        t.shaderSource(i, e),
        t.compileShader(i);
        if (!t.getShaderParameter(i, il)) {
            const r = t.getShaderInfoLog(i);
            return (n || Ku)(function(t, e) {
                return e = e || 0,
                ++e,
                t.split("\n").map((function(t, r) {
                    return r + e + ": " + t
                }
                )).join("\n")
            }(e, a) + "\n*** Error compiling shader: " + r),
            t.deleteShader(i),
            null
        }
        return i
    }
    function Qt(t, e, r) {
        let n, i;
        if ("function" == typeof e && (r = e,
        e = void 0),
        "function" == typeof t)
            r = t,
            t = void 0;
        else if (t && !Array.isArray(t)) {
            if (t.errorCallback)
                return t;
            const e = t;
            r = e.errorCallback,
            t = e.attribLocations,
            n = e.transformFeedbackVaryings,
            i = e.transformFeedbackMode
        }
        const a = {
            errorCallback: r || Ku,
            transformFeedbackVaryings: n,
            transformFeedbackMode: i
        };
        if (t) {
            let r = {};
            Array.isArray(t) ? t.forEach((function(t, n) {
                r[t] = e ? e[n] : n
            }
            )) : r = t,
            a.attribLocations = r
        }
        return a
    }
    function $t(t, e) {
        return 0 <= e.indexOf("frag") ? ol : 0 <= e.indexOf("vert") ? sl : void 0
    }
    function te(t, e) {
        e.forEach((function(e) {
            t.deleteShader(e)
        }
        ))
    }
    function ee(t, e, r, n, i) {
        const a = Qt(r, n, i)
          , o = []
          , s = [];
        for (let r, n = 0; n < e.length; ++n) {
            if (r = e[n],
            "string" == typeof r) {
                const e = Ot(r)
                  , i = e ? e.text : r;
                let o = t[El[n]];
                e && e.type && (o = $t(0, e.type) || o),
                r = Kt(t, i, o, a.errorCallback),
                s.push(r)
            }
            x(0, r) && o.push(r)
        }
        if (o.length !== e.length)
            return a.errorCallback("not enough shaders for program"),
            te(t, s),
            null;
        const u = t.createProgram();
        o.forEach((function(e) {
            t.attachShader(u, e)
        }
        )),
        a.attribLocations && Object.keys(a.attribLocations).forEach((function(e) {
            t.bindAttribLocation(u, a.attribLocations[e], e)
        }
        ));
        let l = a.transformFeedbackVaryings;
        l && (l.attribs && (l = l.attribs),
        !Array.isArray(l) && (l = Object.keys(l)),
        t.transformFeedbackVaryings(u, l, a.transformFeedbackMode || ul)),
        t.linkProgram(u);
        if (!t.getProgramParameter(u, al)) {
            const e = t.getProgramInfoLog(u);
            return a.errorCallback("Error in program linking:" + e),
            t.deleteProgram(u),
            te(t, s),
            null
        }
        return u
    }
    function re(t, e, r, n) {
        let i = "";
        const a = Ot(e);
        if (!a)
            throw new Error("unknown script element: " + e);
        i = a.text;
        const o = r || $t(0, a.type);
        if (!o)
            throw new Error("unknown shader type");
        return Kt(t, i, o, n)
    }
    function ne(t, e, r, n, i) {
        const a = Qt(r, n, i)
          , o = [];
        for (let r = 0; r < e.length; ++r) {
            const n = Kt(t, e[r], t[El[r]], a.errorCallback);
            if (!n)
                return null;
            o.push(n)
        }
        return ee(t, o, a)
    }
    function ie(t) {
        const e = t.name;
        return e.startsWith("gl_") || e.startsWith("webgl_")
    }
    function ae(t, e) {
        function r(e, r, i) {
            const a = 1 < r.size && "[0]" === r.name.substr(-3)
              , o = r.type
              , s = Tl[o];
            if (!s)
                throw new Error("unknown type: 0x" + o.toString(16));
            let u;
            if (s.bindPoint) {
                const e = n;
                n += r.size,
                u = a ? s.arraySetter(t, o, e, i, r.size) : s.setter(t, o, e, i, r.size)
            } else
                u = s.arraySetter && a ? s.arraySetter(t, i) : s.setter(t, i);
            return u.location = i,
            u
        }
        let n = 0;
        const i = {}
          , a = t.getProgramParameter(e, ll);
        for (let n = 0; n < a; ++n) {
            const a = t.getActiveUniform(e, n);
            if (ie(a))
                continue;
            let o = a.name;
            "[0]" === o.substr(-3) && (o = o.substr(0, o.length - 3));
            const s = t.getUniformLocation(e, a.name);
            s && (i[o] = r(0, a, s))
        }
        return i
    }
    function oe(t, e) {
        const r = {}
          , n = t.getProgramParameter(e, hl);
        for (let i = 0; i < n; ++i) {
            const n = t.getTransformFeedbackVarying(e, i);
            r[n.name] = {
                index: i,
                type: n.type,
                size: n.size
            }
        }
        return r
    }
    function se(t, e, r) {
        for (const n in e.transformFeedbackInfo && (e = e.transformFeedbackInfo),
        r.attribs && (r = r.attribs),
        r) {
            const i = e[n];
            if (i) {
                const e = r[n];
                e.offset ? t.bindBufferRange(nl, i.index, e.buffer, e.offset, e.size) : t.bindBufferBase(nl, i.index, e.buffer)
            }
        }
    }
    function ue(t, e) {
        const r = t.getProgramParameter(e, ll)
          , n = []
          , i = [];
        for (let a = 0; a < r; ++a) {
            i.push(a),
            n.push({});
            const r = t.getActiveUniform(e, a);
            if (ie(r))
                break;
            n[a].name = r.name
        }
        [["UNIFORM_TYPE", "type"], ["UNIFORM_SIZE", "size"], ["UNIFORM_BLOCK_INDEX", "blockNdx"], ["UNIFORM_OFFSET", "offset"]].forEach((function(r) {
            const a = r[0]
              , o = r[1];
            t.getActiveUniforms(e, i, t[a]).forEach((function(t, e) {
                n[e][o] = t
            }
            ))
        }
        ));
        const a = {}
          , o = t.getProgramParameter(e, fl);
        for (let r = 0; r < o; ++r) {
            const n = t.getActiveUniformBlockName(e, r)
              , i = {
                index: t.getUniformBlockIndex(e, n),
                usedByVertexShader: t.getActiveUniformBlockParameter(e, r, dl),
                usedByFragmentShader: t.getActiveUniformBlockParameter(e, r, bl),
                size: t.getActiveUniformBlockParameter(e, r, ml),
                uniformIndices: t.getActiveUniformBlockParameter(e, r, pl)
            };
            i.used = i.usedByVertexShader || i.usedByFragmentShader,
            a[n] = i
        }
        return {
            blockSpecs: a,
            uniformData: n
        }
    }
    function le(t, e, r, n) {
        const i = r.blockSpecs
          , a = r.uniformData
          , o = i[n];
        if (!o)
            return Qu("no uniform block object named:", n),
            {
                name: n,
                uniforms: {}
            };
        const s = new ArrayBuffer(o.size)
          , u = t.createBuffer()
          , l = o.index;
        t.bindBuffer(rl, u),
        t.uniformBlockBinding(e, o.index, l);
        let c = n + ".";
        Sl.test(c) && (c = c.replace(Sl, "."));
        const h = {};
        return o.uniformIndices.forEach((function(t) {
            const e = a[t]
              , r = Tl[e.type]
              , n = r.Type
              , i = e.size * r.size;
            let o = e.name;
            o.substr(0, c.length) === c && (o = o.substr(c.length)),
            h[o] = new n(s,e.offset,i / n.BYTES_PER_ELEMENT)
        }
        )),
        {
            name: n,
            array: s,
            asFloat: new Float32Array(s),
            buffer: u,
            uniforms: h
        }
    }
    function ce(t, e, r) {
        const n = (e.uniformBlockSpec || e).blockSpecs[r.name];
        if (n) {
            const e = n.index;
            return t.bindBufferRange(rl, e, r.buffer, r.offset || 0, r.array.byteLength),
            !0
        }
        return !1
    }
    function he(t) {
        const e = t.uniformSetters || t
          , r = arguments.length;
        for (let t = 1; t < r; ++t) {
            const r = arguments[t];
            if (Array.isArray(r)) {
                const t = r.length;
                for (let n = 0; n < t; ++n)
                    he(e, r[n])
            } else
                for (const t in r) {
                    const n = e[t];
                    n && n(r[t])
                }
        }
    }
    function fe(t, e) {
        const r = {}
          , n = t.getProgramParameter(e, cl);
        for (let i = 0; i < n; ++i) {
            const n = t.getActiveAttrib(e, i);
            if (ie(n))
                continue;
            const a = t.getAttribLocation(e, n.name)
              , o = wl[n.type]
              , s = o.setter(t, a, o);
            s.location = a,
            r[n.name] = s
        }
        return r
    }
    function de(t, e) {
        for (const r in e) {
            const n = t[r];
            n && n(e[r])
        }
    }
    function be(t, e, r) {
        r.vertexArrayObject ? t.bindVertexArray(r.vertexArrayObject) : (de(e.attribSetters || e, r.attribs),
        r.indices && t.bindBuffer(el, r.indices))
    }
    function me(t, e) {
        const r = {
            program: e,
            uniformSetters: ae(t, e),
            attribSetters: fe(t, e)
        };
        return at(t) && (r.uniformBlockSpec = ue(t, e),
        r.transformFeedbackInfo = oe(t, e)),
        r
    }
    function pe(t, e, r, n, i) {
        const a = Qt(r, n, i);
        let o = !0;
        if (e = e.map((function(t) {
            if (0 > t.indexOf("\n")) {
                const e = Ot(t);
                e ? t = e.text : (a.errorCallback("no element with id: " + t),
                o = !1)
            }
            return t
        }
        )),
        !o)
            return null;
        const s = ne(t, e, a);
        return s ? me(t, s) : null
    }
    function ge(t, e, r, n, i, a) {
        r = void 0 === r ? Fl : r;
        const o = e.indices
          , s = e.elementType
          , u = void 0 === n ? e.numElements : n;
        i = void 0 === i ? 0 : i,
        s || o ? void 0 === a ? t.drawElements(r, u, void 0 === s ? kl : e.elementType, i) : t.drawElementsInstanced(r, u, void 0 === s ? kl : e.elementType, i, a) : void 0 === a ? t.drawArrays(r, i, u) : t.drawArraysInstanced(r, i, u, a)
    }
    function _e(t, e, r, n) {
        const i = t.createVertexArray();
        return t.bindVertexArray(i),
        de(e, r),
        n && t.bindBuffer(Il, n),
        t.bindVertexArray(null),
        i
    }
    function ve() {
        var t = new Nl(9);
        return Nl != Float32Array && (t[1] = 0,
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
    function xe(t, e) {
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
    function ye(t) {
        var e = new Nl(9);
        return e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e[3] = t[3],
        e[4] = t[4],
        e[5] = t[5],
        e[6] = t[6],
        e[7] = t[7],
        e[8] = t[8],
        e
    }
    function Te(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4],
        t[5] = e[5],
        t[6] = e[6],
        t[7] = e[7],
        t[8] = e[8],
        t
    }
    function we(t, e, r, n, i, a, o, s, u) {
        var l = new Nl(9);
        return l[0] = t,
        l[1] = e,
        l[2] = r,
        l[3] = n,
        l[4] = i,
        l[5] = a,
        l[6] = o,
        l[7] = s,
        l[8] = u,
        l
    }
    function Ae(t, e, r, n, i, a, o, s, u, l) {
        return t[0] = e,
        t[1] = r,
        t[2] = n,
        t[3] = i,
        t[4] = a,
        t[5] = o,
        t[6] = s,
        t[7] = u,
        t[8] = l,
        t
    }
    function Ee(t) {
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 1,
        t[5] = 0,
        t[6] = 0,
        t[7] = 0,
        t[8] = 1,
        t
    }
    function Se(t, e) {
        if (t === e) {
            var r = e[1]
              , n = e[2]
              , i = e[5];
            t[1] = e[3],
            t[2] = e[6],
            t[3] = r,
            t[5] = e[7],
            t[6] = n,
            t[7] = i
        } else
            t[0] = e[0],
            t[1] = e[3],
            t[2] = e[6],
            t[3] = e[1],
            t[4] = e[4],
            t[5] = e[7],
            t[6] = e[2],
            t[7] = e[5],
            t[8] = e[8];
        return t
    }
    function Fe(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = e[3]
          , o = e[4]
          , s = e[5]
          , u = e[6]
          , l = e[7]
          , c = e[8]
          , h = c * o - s * l
          , f = -c * a + s * u
          , d = l * a - o * u
          , b = r * h + n * f + i * d;
        return b ? (b = 1 / b,
        t[0] = h * b,
        t[1] = (-c * n + i * l) * b,
        t[2] = (s * n - i * o) * b,
        t[3] = f * b,
        t[4] = (c * r - i * u) * b,
        t[5] = (-s * r + i * a) * b,
        t[6] = d * b,
        t[7] = (-l * r + n * u) * b,
        t[8] = (o * r - n * a) * b,
        t) : null
    }
    function ke(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = e[3]
          , o = e[4]
          , s = e[5]
          , u = e[6]
          , l = e[7]
          , c = e[8];
        return t[0] = o * c - s * l,
        t[1] = i * l - n * c,
        t[2] = n * s - i * o,
        t[3] = s * u - a * c,
        t[4] = r * c - i * u,
        t[5] = i * a - r * s,
        t[6] = a * l - o * u,
        t[7] = n * u - r * l,
        t[8] = r * o - n * a,
        t
    }
    function Ce(t) {
        var e = t[0]
          , r = t[1]
          , n = t[2]
          , i = t[3]
          , a = t[4]
          , o = t[5]
          , s = t[6]
          , u = t[7]
          , l = t[8];
        return e * (l * a - o * u) + r * (-l * i + o * s) + n * (u * i - a * s)
    }
    function De(t, e, r) {
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = e[3]
          , s = e[4]
          , u = e[5]
          , l = e[6]
          , c = e[7]
          , h = e[8]
          , f = r[0]
          , d = r[1]
          , b = r[2]
          , m = r[3]
          , p = r[4]
          , g = r[5]
          , _ = r[6]
          , v = r[7]
          , x = r[8];
        return t[0] = f * n + d * o + b * l,
        t[1] = f * i + d * s + b * c,
        t[2] = f * a + d * u + b * h,
        t[3] = m * n + p * o + g * l,
        t[4] = m * i + p * s + g * c,
        t[5] = m * a + p * u + g * h,
        t[6] = _ * n + v * o + x * l,
        t[7] = _ * i + v * s + x * c,
        t[8] = _ * a + v * u + x * h,
        t
    }
    function Re(t, e, r) {
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = e[3]
          , s = e[4]
          , u = e[5]
          , l = e[6]
          , c = e[7]
          , h = e[8]
          , f = r[0]
          , d = r[1];
        return t[0] = n,
        t[1] = i,
        t[2] = a,
        t[3] = o,
        t[4] = s,
        t[5] = u,
        t[6] = f * n + d * o + l,
        t[7] = f * i + d * s + c,
        t[8] = f * a + d * u + h,
        t
    }
    function Me(t, e, r) {
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = e[3]
          , s = e[4]
          , u = e[5]
          , l = e[6]
          , c = e[7]
          , h = e[8]
          , f = wa(r)
          , d = Aa(r);
        return t[0] = d * n + f * o,
        t[1] = d * i + f * s,
        t[2] = d * a + f * u,
        t[3] = d * o - f * n,
        t[4] = d * s - f * i,
        t[5] = d * u - f * a,
        t[6] = l,
        t[7] = c,
        t[8] = h,
        t
    }
    function Ie(t, e, r) {
        var n = r[0]
          , i = r[1];
        return t[0] = n * e[0],
        t[1] = n * e[1],
        t[2] = n * e[2],
        t[3] = i * e[3],
        t[4] = i * e[4],
        t[5] = i * e[5],
        t[6] = e[6],
        t[7] = e[7],
        t[8] = e[8],
        t
    }
    function Pe(t, e) {
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 1,
        t[5] = 0,
        t[6] = e[0],
        t[7] = e[1],
        t[8] = 1,
        t
    }
    function Be(t, e) {
        var r = wa(e)
          , n = Aa(e);
        return t[0] = n,
        t[1] = r,
        t[2] = 0,
        t[3] = -r,
        t[4] = n,
        t[5] = 0,
        t[6] = 0,
        t[7] = 0,
        t[8] = 1,
        t
    }
    function Ue(t, e) {
        return t[0] = e[0],
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = e[1],
        t[5] = 0,
        t[6] = 0,
        t[7] = 0,
        t[8] = 1,
        t
    }
    function ze(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = 0,
        t[3] = e[2],
        t[4] = e[3],
        t[5] = 0,
        t[6] = e[4],
        t[7] = e[5],
        t[8] = 1,
        t
    }
    function Oe(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = e[3]
          , o = r + r
          , s = n + n
          , u = i + i
          , l = r * o
          , c = n * o
          , h = n * s
          , f = i * o
          , d = i * s
          , b = i * u
          , m = a * o
          , p = a * s
          , g = a * u;
        return t[0] = 1 - h - b,
        t[3] = c - g,
        t[6] = f + p,
        t[1] = c + g,
        t[4] = 1 - l - b,
        t[7] = d - m,
        t[2] = f - p,
        t[5] = d + m,
        t[8] = 1 - l - h,
        t
    }
    function Le(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = e[3]
          , o = e[4]
          , s = e[5]
          , u = e[6]
          , l = e[7]
          , c = e[8]
          , h = e[9]
          , f = e[10]
          , d = e[11]
          , b = e[12]
          , m = e[13]
          , p = e[14]
          , g = e[15]
          , _ = r * s - n * o
          , v = r * u - i * o
          , x = r * l - a * o
          , y = n * u - i * s
          , T = n * l - a * s
          , w = i * l - a * u
          , A = c * m - h * b
          , E = c * p - f * b
          , S = c * g - d * b
          , F = h * p - f * m
          , k = h * g - d * m
          , C = f * g - d * p
          , D = _ * C - v * k + x * F + y * S - T * E + w * A;
        return D ? (D = 1 / D,
        t[0] = (s * C - u * k + l * F) * D,
        t[1] = (u * S - o * C - l * E) * D,
        t[2] = (o * k - s * S + l * A) * D,
        t[3] = (i * k - n * C - a * F) * D,
        t[4] = (r * C - i * S + a * E) * D,
        t[5] = (n * S - r * k - a * A) * D,
        t[6] = (m * w - p * T + g * y) * D,
        t[7] = (p * x - b * w - g * v) * D,
        t[8] = (b * T - m * x + g * _) * D,
        t) : null
    }
    function Ve(t, e, r) {
        return t[0] = 2 / e,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = -2 / r,
        t[5] = 0,
        t[6] = -1,
        t[7] = 1,
        t[8] = 1,
        t
    }
    function Ne(t) {
        return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
    }
    function He(t) {
        return va(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
    }
    function je(t, e, r) {
        return t[0] = e[0] + r[0],
        t[1] = e[1] + r[1],
        t[2] = e[2] + r[2],
        t[3] = e[3] + r[3],
        t[4] = e[4] + r[4],
        t[5] = e[5] + r[5],
        t[6] = e[6] + r[6],
        t[7] = e[7] + r[7],
        t[8] = e[8] + r[8],
        t
    }
    function qe(t, e, r) {
        return t[0] = e[0] - r[0],
        t[1] = e[1] - r[1],
        t[2] = e[2] - r[2],
        t[3] = e[3] - r[3],
        t[4] = e[4] - r[4],
        t[5] = e[5] - r[5],
        t[6] = e[6] - r[6],
        t[7] = e[7] - r[7],
        t[8] = e[8] - r[8],
        t
    }
    function Ge(t, e, r) {
        return t[0] = e[0] * r,
        t[1] = e[1] * r,
        t[2] = e[2] * r,
        t[3] = e[3] * r,
        t[4] = e[4] * r,
        t[5] = e[5] * r,
        t[6] = e[6] * r,
        t[7] = e[7] * r,
        t[8] = e[8] * r,
        t
    }
    function Xe(t, e, r, n) {
        return t[0] = e[0] + r[0] * n,
        t[1] = e[1] + r[1] * n,
        t[2] = e[2] + r[2] * n,
        t[3] = e[3] + r[3] * n,
        t[4] = e[4] + r[4] * n,
        t[5] = e[5] + r[5] * n,
        t[6] = e[6] + r[6] * n,
        t[7] = e[7] + r[7] * n,
        t[8] = e[8] + r[8] * n,
        t
    }
    function Ye(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
    }
    function We(t, e) {
        var r = t[0]
          , n = t[1]
          , i = t[2]
          , a = t[3]
          , o = t[4]
          , s = t[5]
          , u = t[6]
          , l = t[7]
          , c = t[8]
          , h = e[0]
          , f = e[1]
          , d = e[2]
          , b = e[3]
          , m = e[4]
          , p = e[5]
          , g = e[6]
          , _ = e[7]
          , v = e[8];
        return xa(r - h) <= Vl * Ca(1, xa(r), xa(h)) && xa(n - f) <= Vl * Ca(1, xa(n), xa(f)) && xa(i - d) <= Vl * Ca(1, xa(i), xa(d)) && xa(a - b) <= Vl * Ca(1, xa(a), xa(b)) && xa(o - m) <= Vl * Ca(1, xa(o), xa(m)) && xa(s - p) <= Vl * Ca(1, xa(s), xa(p)) && xa(u - g) <= Vl * Ca(1, xa(u), xa(g)) && xa(l - _) <= Vl * Ca(1, xa(l), xa(_)) && xa(c - v) <= Vl * Ca(1, xa(c), xa(v))
    }
    function Ze() {
        var t = new Nl(16);
        return Nl != Float32Array && (t[1] = 0,
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
    function Je(t) {
        var e = new Nl(16);
        return e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e[3] = t[3],
        e[4] = t[4],
        e[5] = t[5],
        e[6] = t[6],
        e[7] = t[7],
        e[8] = t[8],
        e[9] = t[9],
        e[10] = t[10],
        e[11] = t[11],
        e[12] = t[12],
        e[13] = t[13],
        e[14] = t[14],
        e[15] = t[15],
        e
    }
    function Ke(t, e) {
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
    function Qe(t, e, r, n, i, a, o, s, u, l, c, h, f, d, b, m) {
        var p = new Nl(16);
        return p[0] = t,
        p[1] = e,
        p[2] = r,
        p[3] = n,
        p[4] = i,
        p[5] = a,
        p[6] = o,
        p[7] = s,
        p[8] = u,
        p[9] = l,
        p[10] = c,
        p[11] = h,
        p[12] = f,
        p[13] = d,
        p[14] = b,
        p[15] = m,
        p
    }
    function $e(t, e, r, n, i, a, o, s, u, l, c, h, f, d, b, m, p) {
        return t[0] = e,
        t[1] = r,
        t[2] = n,
        t[3] = i,
        t[4] = a,
        t[5] = o,
        t[6] = s,
        t[7] = u,
        t[8] = l,
        t[9] = c,
        t[10] = h,
        t[11] = f,
        t[12] = d,
        t[13] = b,
        t[14] = m,
        t[15] = p,
        t
    }
    function tr(t) {
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
    function er(t, e) {
        if (t === e) {
            var r = e[1]
              , n = e[2]
              , i = e[3]
              , a = e[6]
              , o = e[7]
              , s = e[11];
            t[1] = e[4],
            t[2] = e[8],
            t[3] = e[12],
            t[4] = r,
            t[6] = e[9],
            t[7] = e[13],
            t[8] = n,
            t[9] = a,
            t[11] = e[14],
            t[12] = i,
            t[13] = o,
            t[14] = s
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
    function rr(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = e[3]
          , o = e[4]
          , s = e[5]
          , u = e[6]
          , l = e[7]
          , c = e[8]
          , h = e[9]
          , f = e[10]
          , d = e[11]
          , b = e[12]
          , m = e[13]
          , p = e[14]
          , g = e[15]
          , _ = r * s - n * o
          , v = r * u - i * o
          , x = r * l - a * o
          , y = n * u - i * s
          , T = n * l - a * s
          , w = i * l - a * u
          , A = c * m - h * b
          , E = c * p - f * b
          , S = c * g - d * b
          , F = h * p - f * m
          , k = h * g - d * m
          , C = f * g - d * p
          , D = _ * C - v * k + x * F + y * S - T * E + w * A;
        return D ? (D = 1 / D,
        t[0] = (s * C - u * k + l * F) * D,
        t[1] = (i * k - n * C - a * F) * D,
        t[2] = (m * w - p * T + g * y) * D,
        t[3] = (f * T - h * w - d * y) * D,
        t[4] = (u * S - o * C - l * E) * D,
        t[5] = (r * C - i * S + a * E) * D,
        t[6] = (p * x - b * w - g * v) * D,
        t[7] = (c * w - f * x + d * v) * D,
        t[8] = (o * k - s * S + l * A) * D,
        t[9] = (n * S - r * k - a * A) * D,
        t[10] = (b * T - m * x + g * _) * D,
        t[11] = (h * x - c * T - d * _) * D,
        t[12] = (s * E - o * F - u * A) * D,
        t[13] = (r * F - n * E + i * A) * D,
        t[14] = (m * v - b * y - p * _) * D,
        t[15] = (c * y - h * v + f * _) * D,
        t) : null
    }
    function nr(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = e[3]
          , o = e[4]
          , s = e[5]
          , u = e[6]
          , l = e[7]
          , c = e[8]
          , h = e[9]
          , f = e[10]
          , d = e[11]
          , b = e[12]
          , m = e[13]
          , p = e[14]
          , g = e[15];
        return t[0] = s * (f * g - d * p) - h * (u * g - l * p) + m * (u * d - l * f),
        t[1] = -(n * (f * g - d * p) - h * (i * g - a * p) + m * (i * d - a * f)),
        t[2] = n * (u * g - l * p) - s * (i * g - a * p) + m * (i * l - a * u),
        t[3] = -(n * (u * d - l * f) - s * (i * d - a * f) + h * (i * l - a * u)),
        t[4] = -(o * (f * g - d * p) - c * (u * g - l * p) + b * (u * d - l * f)),
        t[5] = r * (f * g - d * p) - c * (i * g - a * p) + b * (i * d - a * f),
        t[6] = -(r * (u * g - l * p) - o * (i * g - a * p) + b * (i * l - a * u)),
        t[7] = r * (u * d - l * f) - o * (i * d - a * f) + c * (i * l - a * u),
        t[8] = o * (h * g - d * m) - c * (s * g - l * m) + b * (s * d - l * h),
        t[9] = -(r * (h * g - d * m) - c * (n * g - a * m) + b * (n * d - a * h)),
        t[10] = r * (s * g - l * m) - o * (n * g - a * m) + b * (n * l - a * s),
        t[11] = -(r * (s * d - l * h) - o * (n * d - a * h) + c * (n * l - a * s)),
        t[12] = -(o * (h * p - f * m) - c * (s * p - u * m) + b * (s * f - u * h)),
        t[13] = r * (h * p - f * m) - c * (n * p - i * m) + b * (n * f - i * h),
        t[14] = -(r * (s * p - u * m) - o * (n * p - i * m) + b * (n * u - i * s)),
        t[15] = r * (s * f - u * h) - o * (n * f - i * h) + c * (n * u - i * s),
        t
    }
    function ir(t) {
        var e = t[0]
          , r = t[1]
          , n = t[2]
          , i = t[3]
          , a = t[4]
          , o = t[5]
          , s = t[6]
          , u = t[7]
          , l = t[8]
          , c = t[9]
          , h = t[10]
          , f = t[11]
          , d = t[12]
          , b = t[13]
          , m = t[14]
          , p = t[15];
        return (e * o - r * a) * (h * p - f * m) - (e * s - n * a) * (c * p - f * b) + (e * u - i * a) * (c * m - h * b) + (r * s - n * o) * (l * p - f * d) - (r * u - i * o) * (l * m - h * d) + (n * u - i * s) * (l * b - c * d)
    }
    function ar(t, e, r) {
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = e[3]
          , s = e[4]
          , u = e[5]
          , l = e[6]
          , c = e[7]
          , h = e[8]
          , f = e[9]
          , d = e[10]
          , b = e[11]
          , m = e[12]
          , p = e[13]
          , g = e[14]
          , _ = e[15]
          , v = r[0]
          , x = r[1]
          , y = r[2]
          , T = r[3];
        return t[0] = v * n + x * s + y * h + T * m,
        t[1] = v * i + x * u + y * f + T * p,
        t[2] = v * a + x * l + y * d + T * g,
        t[3] = v * o + x * c + y * b + T * _,
        v = r[4],
        x = r[5],
        y = r[6],
        T = r[7],
        t[4] = v * n + x * s + y * h + T * m,
        t[5] = v * i + x * u + y * f + T * p,
        t[6] = v * a + x * l + y * d + T * g,
        t[7] = v * o + x * c + y * b + T * _,
        v = r[8],
        x = r[9],
        y = r[10],
        T = r[11],
        t[8] = v * n + x * s + y * h + T * m,
        t[9] = v * i + x * u + y * f + T * p,
        t[10] = v * a + x * l + y * d + T * g,
        t[11] = v * o + x * c + y * b + T * _,
        v = r[12],
        x = r[13],
        y = r[14],
        T = r[15],
        t[12] = v * n + x * s + y * h + T * m,
        t[13] = v * i + x * u + y * f + T * p,
        t[14] = v * a + x * l + y * d + T * g,
        t[15] = v * o + x * c + y * b + T * _,
        t
    }
    function or(t, e, r) {
        var n, i, a, o, s, u, l, c, h, f, d, b, m = r[0], p = r[1], g = r[2];
        return e === t ? (t[12] = e[0] * m + e[4] * p + e[8] * g + e[12],
        t[13] = e[1] * m + e[5] * p + e[9] * g + e[13],
        t[14] = e[2] * m + e[6] * p + e[10] * g + e[14],
        t[15] = e[3] * m + e[7] * p + e[11] * g + e[15]) : (n = e[0],
        i = e[1],
        a = e[2],
        o = e[3],
        s = e[4],
        u = e[5],
        l = e[6],
        c = e[7],
        h = e[8],
        f = e[9],
        d = e[10],
        b = e[11],
        t[0] = n,
        t[1] = i,
        t[2] = a,
        t[3] = o,
        t[4] = s,
        t[5] = u,
        t[6] = l,
        t[7] = c,
        t[8] = h,
        t[9] = f,
        t[10] = d,
        t[11] = b,
        t[12] = n * m + s * p + h * g + e[12],
        t[13] = i * m + u * p + f * g + e[13],
        t[14] = a * m + l * p + d * g + e[14],
        t[15] = o * m + c * p + b * g + e[15]),
        t
    }
    function sr(t, e, r) {
        var n = r[0]
          , i = r[1]
          , a = r[2];
        return t[0] = e[0] * n,
        t[1] = e[1] * n,
        t[2] = e[2] * n,
        t[3] = e[3] * n,
        t[4] = e[4] * i,
        t[5] = e[5] * i,
        t[6] = e[6] * i,
        t[7] = e[7] * i,
        t[8] = e[8] * a,
        t[9] = e[9] * a,
        t[10] = e[10] * a,
        t[11] = e[11] * a,
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15],
        t
    }
    function ur(t, e, r, n) {
        var i, a, o, s, u, l, c, h, f, d, b, m, p, g, _, v, x, y, T, w, A, E, S, F, k = n[0], C = n[1], D = n[2], R = va(k, C, D);
        return R < Vl ? null : (k *= R = 1 / R,
        C *= R,
        D *= R,
        i = wa(r),
        o = 1 - (a = Aa(r)),
        s = e[0],
        u = e[1],
        l = e[2],
        c = e[3],
        h = e[4],
        f = e[5],
        d = e[6],
        b = e[7],
        m = e[8],
        p = e[9],
        g = e[10],
        _ = e[11],
        v = k * k * o + a,
        x = C * k * o + D * i,
        y = D * k * o - C * i,
        T = k * C * o - D * i,
        w = C * C * o + a,
        A = D * C * o + k * i,
        E = k * D * o + C * i,
        S = C * D * o - k * i,
        F = D * D * o + a,
        t[0] = s * v + h * x + m * y,
        t[1] = u * v + f * x + p * y,
        t[2] = l * v + d * x + g * y,
        t[3] = c * v + b * x + _ * y,
        t[4] = s * T + h * w + m * A,
        t[5] = u * T + f * w + p * A,
        t[6] = l * T + d * w + g * A,
        t[7] = c * T + b * w + _ * A,
        t[8] = s * E + h * S + m * F,
        t[9] = u * E + f * S + p * F,
        t[10] = l * E + d * S + g * F,
        t[11] = c * E + b * S + _ * F,
        e !== t && (t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15]),
        t)
    }
    function lr(t, e, r) {
        var n = wa(r)
          , i = Aa(r)
          , a = e[4]
          , o = e[5]
          , s = e[6]
          , u = e[7]
          , l = e[8]
          , c = e[9]
          , h = e[10]
          , f = e[11];
        return e !== t && (t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15]),
        t[4] = a * i + l * n,
        t[5] = o * i + c * n,
        t[6] = s * i + h * n,
        t[7] = u * i + f * n,
        t[8] = l * i - a * n,
        t[9] = c * i - o * n,
        t[10] = h * i - s * n,
        t[11] = f * i - u * n,
        t
    }
    function cr(t, e, r) {
        var n = wa(r)
          , i = Aa(r)
          , a = e[0]
          , o = e[1]
          , s = e[2]
          , u = e[3]
          , l = e[8]
          , c = e[9]
          , h = e[10]
          , f = e[11];
        return e !== t && (t[4] = e[4],
        t[5] = e[5],
        t[6] = e[6],
        t[7] = e[7],
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15]),
        t[0] = a * i - l * n,
        t[1] = o * i - c * n,
        t[2] = s * i - h * n,
        t[3] = u * i - f * n,
        t[8] = a * n + l * i,
        t[9] = o * n + c * i,
        t[10] = s * n + h * i,
        t[11] = u * n + f * i,
        t
    }
    function hr(t, e, r) {
        var n = wa(r)
          , i = Aa(r)
          , a = e[0]
          , o = e[1]
          , s = e[2]
          , u = e[3]
          , l = e[4]
          , c = e[5]
          , h = e[6]
          , f = e[7];
        return e !== t && (t[8] = e[8],
        t[9] = e[9],
        t[10] = e[10],
        t[11] = e[11],
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15]),
        t[0] = a * i + l * n,
        t[1] = o * i + c * n,
        t[2] = s * i + h * n,
        t[3] = u * i + f * n,
        t[4] = l * i - a * n,
        t[5] = c * i - o * n,
        t[6] = h * i - s * n,
        t[7] = f * i - u * n,
        t
    }
    function fr(t, e) {
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
        t[12] = e[0],
        t[13] = e[1],
        t[14] = e[2],
        t[15] = 1,
        t
    }
    function dr(t, e) {
        return t[0] = e[0],
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = e[1],
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[10] = e[2],
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        t
    }
    function br(t, e, r) {
        var n, i, a, o = r[0], s = r[1], u = r[2], l = va(o, s, u);
        return l < Vl ? null : (o *= l = 1 / l,
        s *= l,
        u *= l,
        n = wa(e),
        a = 1 - (i = Aa(e)),
        t[0] = o * o * a + i,
        t[1] = s * o * a + u * n,
        t[2] = u * o * a - s * n,
        t[3] = 0,
        t[4] = o * s * a - u * n,
        t[5] = s * s * a + i,
        t[6] = u * s * a + o * n,
        t[7] = 0,
        t[8] = o * u * a + s * n,
        t[9] = s * u * a - o * n,
        t[10] = u * u * a + i,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        t)
    }
    function mr(t, e) {
        var r = wa(e)
          , n = Aa(e);
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = n,
        t[6] = r,
        t[7] = 0,
        t[8] = 0,
        t[9] = -r,
        t[10] = n,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        t
    }
    function pr(t, e) {
        var r = wa(e)
          , n = Aa(e);
        return t[0] = n,
        t[1] = 0,
        t[2] = -r,
        t[3] = 0,
        t[4] = 0,
        t[5] = 1,
        t[6] = 0,
        t[7] = 0,
        t[8] = r,
        t[9] = 0,
        t[10] = n,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        t
    }
    function gr(t, e) {
        var r = wa(e)
          , n = Aa(e);
        return t[0] = n,
        t[1] = r,
        t[2] = 0,
        t[3] = 0,
        t[4] = -r,
        t[5] = n,
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
    function _r(t, e, r) {
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = e[3]
          , s = n + n
          , u = i + i
          , l = a + a
          , c = n * s
          , h = n * u
          , f = n * l
          , d = i * u
          , b = i * l
          , m = a * l
          , p = o * s
          , g = o * u
          , _ = o * l;
        return t[0] = 1 - (d + m),
        t[1] = h + _,
        t[2] = f - g,
        t[3] = 0,
        t[4] = h - _,
        t[5] = 1 - (c + m),
        t[6] = b + p,
        t[7] = 0,
        t[8] = f + g,
        t[9] = b - p,
        t[10] = 1 - (c + d),
        t[11] = 0,
        t[12] = r[0],
        t[13] = r[1],
        t[14] = r[2],
        t[15] = 1,
        t
    }
    function vr(t, e) {
        var r = new Nl(3)
          , n = -e[0]
          , i = -e[1]
          , a = -e[2]
          , o = e[3]
          , s = e[4]
          , u = e[5]
          , l = e[6]
          , c = e[7]
          , h = n * n + i * i + a * a + o * o;
        return 0 < h ? (r[0] = 2 * (s * o + c * n + u * a - l * i) / h,
        r[1] = 2 * (u * o + c * i + l * n - s * a) / h,
        r[2] = 2 * (l * o + c * a + s * i - u * n) / h) : (r[0] = 2 * (s * o + c * n + u * a - l * i),
        r[1] = 2 * (u * o + c * i + l * n - s * a),
        r[2] = 2 * (l * o + c * a + s * i - u * n)),
        _r(t, e, r),
        t
    }
    function xr(t, e) {
        return t[0] = e[12],
        t[1] = e[13],
        t[2] = e[14],
        t
    }
    function yr(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = e[4]
          , o = e[5]
          , s = e[6]
          , u = e[8]
          , l = e[9]
          , c = e[10];
        return t[0] = va(r, n, i),
        t[1] = va(a, o, s),
        t[2] = va(u, l, c),
        t
    }
    function Tr(t, e) {
        var r = new Nl(3);
        yr(r, e);
        var n = 1 / r[0]
          , i = 1 / r[1]
          , a = 1 / r[2]
          , o = e[0] * n
          , s = e[1] * i
          , u = e[2] * a
          , l = e[4] * n
          , c = e[5] * i
          , h = e[6] * a
          , f = e[8] * n
          , d = e[9] * i
          , b = e[10] * a
          , m = o + c + b
          , p = 0;
        return 0 < m ? (p = 2 * Fa(m + 1),
        t[3] = .25 * p,
        t[0] = (h - d) / p,
        t[1] = (f - u) / p,
        t[2] = (s - l) / p) : o > c && o > b ? (p = 2 * Fa(1 + o - c - b),
        t[3] = (h - d) / p,
        t[0] = .25 * p,
        t[1] = (s + l) / p,
        t[2] = (f + u) / p) : c > b ? (p = 2 * Fa(1 + c - o - b),
        t[3] = (f - u) / p,
        t[0] = (s + l) / p,
        t[1] = .25 * p,
        t[2] = (h + d) / p) : (p = 2 * Fa(1 + b - o - c),
        t[3] = (s - l) / p,
        t[0] = (f + u) / p,
        t[1] = (h + d) / p,
        t[2] = .25 * p),
        t
    }
    function wr(t, e, r, n) {
        var i = e[0]
          , a = e[1]
          , o = e[2]
          , s = e[3]
          , u = i + i
          , l = a + a
          , c = o + o
          , h = i * u
          , f = i * l
          , d = i * c
          , b = a * l
          , m = a * c
          , p = o * c
          , g = s * u
          , _ = s * l
          , v = s * c
          , x = n[0]
          , y = n[1]
          , T = n[2];
        return t[0] = (1 - (b + p)) * x,
        t[1] = (f + v) * x,
        t[2] = (d - _) * x,
        t[3] = 0,
        t[4] = (f - v) * y,
        t[5] = (1 - (h + p)) * y,
        t[6] = (m + g) * y,
        t[7] = 0,
        t[8] = (d + _) * T,
        t[9] = (m - g) * T,
        t[10] = (1 - (h + b)) * T,
        t[11] = 0,
        t[12] = r[0],
        t[13] = r[1],
        t[14] = r[2],
        t[15] = 1,
        t
    }
    function Ar(t, e, r, n, i) {
        var a = e[0]
          , o = e[1]
          , s = e[2]
          , u = e[3]
          , l = a + a
          , c = o + o
          , h = s + s
          , f = a * l
          , d = a * c
          , b = a * h
          , m = o * c
          , p = o * h
          , g = s * h
          , _ = u * l
          , v = u * c
          , x = u * h
          , y = n[0]
          , T = n[1]
          , w = n[2]
          , A = i[0]
          , E = i[1]
          , S = i[2]
          , F = (1 - (m + g)) * y
          , k = (d + x) * y
          , C = (b - v) * y
          , D = (d - x) * T
          , R = (1 - (f + g)) * T
          , M = (p + _) * T
          , I = (b + v) * w
          , P = (p - _) * w
          , B = (1 - (f + m)) * w;
        return t[0] = F,
        t[1] = k,
        t[2] = C,
        t[3] = 0,
        t[4] = D,
        t[5] = R,
        t[6] = M,
        t[7] = 0,
        t[8] = I,
        t[9] = P,
        t[10] = B,
        t[11] = 0,
        t[12] = r[0] + A - (F * A + D * E + I * S),
        t[13] = r[1] + E - (k * A + R * E + P * S),
        t[14] = r[2] + S - (C * A + M * E + B * S),
        t[15] = 1,
        t
    }
    function Er(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = e[3]
          , o = r + r
          , s = n + n
          , u = i + i
          , l = r * o
          , c = n * o
          , h = n * s
          , f = i * o
          , d = i * s
          , b = i * u
          , m = a * o
          , p = a * s
          , g = a * u;
        return t[0] = 1 - h - b,
        t[1] = c + g,
        t[2] = f - p,
        t[3] = 0,
        t[4] = c - g,
        t[5] = 1 - l - b,
        t[6] = d + m,
        t[7] = 0,
        t[8] = f + p,
        t[9] = d - m,
        t[10] = 1 - l - h,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        t
    }
    function Sr(t, e, r, n, i, a, o) {
        var s = 1 / (r - e)
          , u = 1 / (i - n)
          , l = 1 / (a - o);
        return t[0] = 2 * a * s,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = 2 * a * u,
        t[6] = 0,
        t[7] = 0,
        t[8] = (r + e) * s,
        t[9] = (i + n) * u,
        t[10] = (o + a) * l,
        t[11] = -1,
        t[12] = 0,
        t[13] = 0,
        t[14] = o * a * 2 * l,
        t[15] = 0,
        t
    }
    function Fr(t, e, r, n, i) {
        var a, o = 1 / Ea(e / 2);
        return t[0] = o / r,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = o,
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[11] = -1,
        t[12] = 0,
        t[13] = 0,
        t[15] = 0,
        null != i && i !== 1 / 0 ? (a = 1 / (n - i),
        t[10] = (i + n) * a,
        t[14] = 2 * i * n * a) : (t[10] = -1,
        t[14] = -2 * n),
        t
    }
    function kr(t, e, r, n) {
        var i = Ea(e.upDegrees * Sa / 180)
          , a = Ea(e.downDegrees * Sa / 180)
          , o = Ea(e.leftDegrees * Sa / 180)
          , s = Ea(e.rightDegrees * Sa / 180)
          , u = 2 / (o + s)
          , l = 2 / (i + a);
        return t[0] = u,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = l,
        t[6] = 0,
        t[7] = 0,
        t[8] = -(o - s) * u * .5,
        t[9] = (i - a) * l * .5,
        t[10] = n / (r - n),
        t[11] = -1,
        t[12] = 0,
        t[13] = 0,
        t[14] = n * r / (r - n),
        t[15] = 0,
        t
    }
    function Cr(t, e, r, n, i, a, o) {
        var s = 1 / (e - r)
          , u = 1 / (n - i)
          , l = 1 / (a - o);
        return t[0] = -2 * s,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = -2 * u,
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[10] = 2 * l,
        t[11] = 0,
        t[12] = (e + r) * s,
        t[13] = (i + n) * u,
        t[14] = (o + a) * l,
        t[15] = 1,
        t
    }
    function Dr(t, e, r, n) {
        var i, a, o, s, u, l, c, h, f, d, b = e[0], m = e[1], p = e[2], g = n[0], _ = n[1], v = n[2], x = r[0], y = r[1], T = r[2];
        return xa(b - x) < Vl && xa(m - y) < Vl && xa(p - T) < Vl ? tr(t) : (d = 1 / va(c = b - x, h = m - y, f = p - T),
        (d = va(i = _ * (f *= d) - v * (h *= d), a = v * (c *= d) - g * f, o = g * h - _ * c)) ? (i *= d = 1 / d,
        a *= d,
        o *= d) : (i = 0,
        a = 0,
        o = 0),
        (d = va(s = h * o - f * a, u = f * i - c * o, l = c * a - h * i)) ? (s *= d = 1 / d,
        u *= d,
        l *= d) : (s = 0,
        u = 0,
        l = 0),
        t[0] = i,
        t[1] = s,
        t[2] = c,
        t[3] = 0,
        t[4] = a,
        t[5] = u,
        t[6] = h,
        t[7] = 0,
        t[8] = o,
        t[9] = l,
        t[10] = f,
        t[11] = 0,
        t[12] = -(i * b + a * m + o * p),
        t[13] = -(s * b + u * m + l * p),
        t[14] = -(c * b + h * m + f * p),
        t[15] = 1,
        t)
    }
    function Rr(t, e, r, n) {
        var i = e[0]
          , a = e[1]
          , o = e[2]
          , s = n[0]
          , u = n[1]
          , l = n[2]
          , c = i - r[0]
          , h = a - r[1]
          , f = o - r[2]
          , d = c * c + h * h + f * f;
        0 < d && (c *= d = 1 / Fa(d),
        h *= d,
        f *= d);
        var b = u * f - l * h
          , m = l * c - s * f
          , p = s * h - u * c;
        return 0 < (d = b * b + m * m + p * p) && (b *= d = 1 / Fa(d),
        m *= d,
        p *= d),
        t[0] = b,
        t[1] = m,
        t[2] = p,
        t[3] = 0,
        t[4] = h * p - f * m,
        t[5] = f * b - c * p,
        t[6] = c * m - h * b,
        t[7] = 0,
        t[8] = c,
        t[9] = h,
        t[10] = f,
        t[11] = 0,
        t[12] = i,
        t[13] = a,
        t[14] = o,
        t[15] = 1,
        t
    }
    function Mr(t) {
        return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
    }
    function Ir(t) {
        return va(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
    }
    function Pr(t, e, r) {
        return t[0] = e[0] + r[0],
        t[1] = e[1] + r[1],
        t[2] = e[2] + r[2],
        t[3] = e[3] + r[3],
        t[4] = e[4] + r[4],
        t[5] = e[5] + r[5],
        t[6] = e[6] + r[6],
        t[7] = e[7] + r[7],
        t[8] = e[8] + r[8],
        t[9] = e[9] + r[9],
        t[10] = e[10] + r[10],
        t[11] = e[11] + r[11],
        t[12] = e[12] + r[12],
        t[13] = e[13] + r[13],
        t[14] = e[14] + r[14],
        t[15] = e[15] + r[15],
        t
    }
    function Br(t, e, r) {
        return t[0] = e[0] - r[0],
        t[1] = e[1] - r[1],
        t[2] = e[2] - r[2],
        t[3] = e[3] - r[3],
        t[4] = e[4] - r[4],
        t[5] = e[5] - r[5],
        t[6] = e[6] - r[6],
        t[7] = e[7] - r[7],
        t[8] = e[8] - r[8],
        t[9] = e[9] - r[9],
        t[10] = e[10] - r[10],
        t[11] = e[11] - r[11],
        t[12] = e[12] - r[12],
        t[13] = e[13] - r[13],
        t[14] = e[14] - r[14],
        t[15] = e[15] - r[15],
        t
    }
    function Ur(t, e, r) {
        return t[0] = e[0] * r,
        t[1] = e[1] * r,
        t[2] = e[2] * r,
        t[3] = e[3] * r,
        t[4] = e[4] * r,
        t[5] = e[5] * r,
        t[6] = e[6] * r,
        t[7] = e[7] * r,
        t[8] = e[8] * r,
        t[9] = e[9] * r,
        t[10] = e[10] * r,
        t[11] = e[11] * r,
        t[12] = e[12] * r,
        t[13] = e[13] * r,
        t[14] = e[14] * r,
        t[15] = e[15] * r,
        t
    }
    function zr(t, e, r, n) {
        return t[0] = e[0] + r[0] * n,
        t[1] = e[1] + r[1] * n,
        t[2] = e[2] + r[2] * n,
        t[3] = e[3] + r[3] * n,
        t[4] = e[4] + r[4] * n,
        t[5] = e[5] + r[5] * n,
        t[6] = e[6] + r[6] * n,
        t[7] = e[7] + r[7] * n,
        t[8] = e[8] + r[8] * n,
        t[9] = e[9] + r[9] * n,
        t[10] = e[10] + r[10] * n,
        t[11] = e[11] + r[11] * n,
        t[12] = e[12] + r[12] * n,
        t[13] = e[13] + r[13] * n,
        t[14] = e[14] + r[14] * n,
        t[15] = e[15] + r[15] * n,
        t
    }
    function Or(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
    }
    function Lr(t, e) {
        var r = t[0]
          , n = t[1]
          , i = t[2]
          , a = t[3]
          , o = t[4]
          , s = t[5]
          , u = t[6]
          , l = t[7]
          , c = t[8]
          , h = t[9]
          , f = t[10]
          , d = t[11]
          , b = t[12]
          , m = t[13]
          , p = t[14]
          , g = t[15]
          , _ = e[0]
          , v = e[1]
          , x = e[2]
          , y = e[3]
          , T = e[4]
          , w = e[5]
          , A = e[6]
          , E = e[7]
          , S = e[8]
          , F = e[9]
          , k = e[10]
          , C = e[11]
          , D = e[12]
          , R = e[13]
          , M = e[14]
          , I = e[15];
        return xa(r - _) <= Vl * Ca(1, xa(r), xa(_)) && xa(n - v) <= Vl * Ca(1, xa(n), xa(v)) && xa(i - x) <= Vl * Ca(1, xa(i), xa(x)) && xa(a - y) <= Vl * Ca(1, xa(a), xa(y)) && xa(o - T) <= Vl * Ca(1, xa(o), xa(T)) && xa(s - w) <= Vl * Ca(1, xa(s), xa(w)) && xa(u - A) <= Vl * Ca(1, xa(u), xa(A)) && xa(l - E) <= Vl * Ca(1, xa(l), xa(E)) && xa(c - S) <= Vl * Ca(1, xa(c), xa(S)) && xa(h - F) <= Vl * Ca(1, xa(h), xa(F)) && xa(f - k) <= Vl * Ca(1, xa(f), xa(k)) && xa(d - C) <= Vl * Ca(1, xa(d), xa(C)) && xa(b - D) <= Vl * Ca(1, xa(b), xa(D)) && xa(m - R) <= Vl * Ca(1, xa(m), xa(R)) && xa(p - M) <= Vl * Ca(1, xa(p), xa(M)) && xa(g - I) <= Vl * Ca(1, xa(g), xa(I))
    }
    function Vr() {
        var t = new Nl(3);
        return Nl != Float32Array && (t[0] = 0,
        t[1] = 0,
        t[2] = 0),
        t
    }
    function Nr(t) {
        var e = new Nl(3);
        return e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e
    }
    function Hr(t) {
        var e = t[0]
          , r = t[1]
          , n = t[2];
        return va(e, r, n)
    }
    function jr(t, e, r) {
        var n = new Nl(3);
        return n[0] = t,
        n[1] = e,
        n[2] = r,
        n
    }
    function qr(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t
    }
    function Gr(t, e, r, n) {
        return t[0] = e,
        t[1] = r,
        t[2] = n,
        t
    }
    function Xr(t, e, r) {
        return t[0] = e[0] + r[0],
        t[1] = e[1] + r[1],
        t[2] = e[2] + r[2],
        t
    }
    function Yr(t, e, r) {
        return t[0] = e[0] - r[0],
        t[1] = e[1] - r[1],
        t[2] = e[2] - r[2],
        t
    }
    function Wr(t, e, r) {
        return t[0] = e[0] * r[0],
        t[1] = e[1] * r[1],
        t[2] = e[2] * r[2],
        t
    }
    function Zr(t, e, r) {
        return t[0] = e[0] / r[0],
        t[1] = e[1] / r[1],
        t[2] = e[2] / r[2],
        t
    }
    function Jr(t, e) {
        return t[0] = _a(e[0]),
        t[1] = _a(e[1]),
        t[2] = _a(e[2]),
        t
    }
    function Kr(t, e) {
        return t[0] = Da(e[0]),
        t[1] = Da(e[1]),
        t[2] = Da(e[2]),
        t
    }
    function Qr(t, e, r) {
        return t[0] = ka(e[0], r[0]),
        t[1] = ka(e[1], r[1]),
        t[2] = ka(e[2], r[2]),
        t
    }
    function $r(t, e, r) {
        return t[0] = Ca(e[0], r[0]),
        t[1] = Ca(e[1], r[1]),
        t[2] = Ca(e[2], r[2]),
        t
    }
    function tn(t, e) {
        return t[0] = ga(e[0]),
        t[1] = ga(e[1]),
        t[2] = ga(e[2]),
        t
    }
    function en(t, e, r) {
        return t[0] = e[0] * r,
        t[1] = e[1] * r,
        t[2] = e[2] * r,
        t
    }
    function rn(t, e, r, n) {
        return t[0] = e[0] + r[0] * n,
        t[1] = e[1] + r[1] * n,
        t[2] = e[2] + r[2] * n,
        t
    }
    function nn(t, e) {
        var r = e[0] - t[0]
          , n = e[1] - t[1]
          , i = e[2] - t[2];
        return va(r, n, i)
    }
    function an(t, e) {
        var r = e[0] - t[0]
          , n = e[1] - t[1]
          , i = e[2] - t[2];
        return r * r + n * n + i * i
    }
    function on(t) {
        var e = t[0]
          , r = t[1]
          , n = t[2];
        return e * e + r * r + n * n
    }
    function sn(t, e) {
        return t[0] = -e[0],
        t[1] = -e[1],
        t[2] = -e[2],
        t
    }
    function un(t, e) {
        return t[0] = 1 / e[0],
        t[1] = 1 / e[1],
        t[2] = 1 / e[2],
        t
    }
    function ln(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = r * r + n * n + i * i;
        return 0 < a && (a = 1 / Fa(a)),
        t[0] = e[0] * a,
        t[1] = e[1] * a,
        t[2] = e[2] * a,
        t
    }
    function cn(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }
    function hn(t, e, r) {
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = r[0]
          , s = r[1]
          , u = r[2];
        return t[0] = i * u - a * s,
        t[1] = a * o - n * u,
        t[2] = n * s - i * o,
        t
    }
    function fn(t, e, r, n) {
        var i = e[0]
          , a = e[1]
          , o = e[2];
        return t[0] = i + n * (r[0] - i),
        t[1] = a + n * (r[1] - a),
        t[2] = o + n * (r[2] - o),
        t
    }
    function dn(t, e, r, n, i, a) {
        var o = a * a
          , s = o * (2 * a - 3) + 1
          , u = o * (a - 2) + a
          , l = o * (a - 1)
          , c = o * (3 - 2 * a);
        return t[0] = e[0] * s + r[0] * u + n[0] * l + i[0] * c,
        t[1] = e[1] * s + r[1] * u + n[1] * l + i[1] * c,
        t[2] = e[2] * s + r[2] * u + n[2] * l + i[2] * c,
        t
    }
    function bn(t, e, r, n, i, a) {
        var o = 1 - a
          , s = o * o
          , u = a * a
          , l = s * o
          , c = 3 * a * s
          , h = 3 * u * o
          , f = u * a;
        return t[0] = e[0] * l + r[0] * c + n[0] * h + i[0] * f,
        t[1] = e[1] * l + r[1] * c + n[1] * h + i[1] * f,
        t[2] = e[2] * l + r[2] * c + n[2] * h + i[2] * f,
        t
    }
    function mn(t, e) {
        e = e || 1;
        var r = 2 * Hl() * Sa
          , n = 2 * Hl() - 1
          , i = Fa(1 - n * n) * e;
        return t[0] = Aa(r) * i,
        t[1] = wa(r) * i,
        t[2] = n * e,
        t
    }
    function pn(t, e, r) {
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = r[3] * n + r[7] * i + r[11] * a + r[15];
        return o = o || 1,
        t[0] = (r[0] * n + r[4] * i + r[8] * a + r[12]) / o,
        t[1] = (r[1] * n + r[5] * i + r[9] * a + r[13]) / o,
        t[2] = (r[2] * n + r[6] * i + r[10] * a + r[14]) / o,
        t
    }
    function gn(t, e, r) {
        var n = e[0]
          , i = e[1]
          , a = e[2];
        return t[0] = n * r[0] + i * r[3] + a * r[6],
        t[1] = n * r[1] + i * r[4] + a * r[7],
        t[2] = n * r[2] + i * r[5] + a * r[8],
        t
    }
    function _n(t, e, r) {
        var n = r[0]
          , i = r[1]
          , a = r[2]
          , o = r[3]
          , s = e[0]
          , u = e[1]
          , l = e[2]
          , c = i * l - a * u
          , h = a * s - n * l
          , f = n * u - i * s
          , d = i * f - a * h
          , b = a * c - n * f
          , m = n * h - i * c
          , p = 2 * o;
        return c *= p,
        h *= p,
        f *= p,
        d *= 2,
        b *= 2,
        m *= 2,
        t[0] = s + c + d,
        t[1] = u + h + b,
        t[2] = l + f + m,
        t
    }
    function vn(t, e, r, n) {
        var i = []
          , a = [];
        return i[0] = e[0] - r[0],
        i[1] = e[1] - r[1],
        i[2] = e[2] - r[2],
        a[0] = i[0],
        a[1] = i[1] * Aa(n) - i[2] * wa(n),
        a[2] = i[1] * wa(n) + i[2] * Aa(n),
        t[0] = a[0] + r[0],
        t[1] = a[1] + r[1],
        t[2] = a[2] + r[2],
        t
    }
    function xn(t, e, r, n) {
        var i = []
          , a = [];
        return i[0] = e[0] - r[0],
        i[1] = e[1] - r[1],
        i[2] = e[2] - r[2],
        a[0] = i[2] * wa(n) + i[0] * Aa(n),
        a[1] = i[1],
        a[2] = i[2] * Aa(n) - i[0] * wa(n),
        t[0] = a[0] + r[0],
        t[1] = a[1] + r[1],
        t[2] = a[2] + r[2],
        t
    }
    function yn(t, e, r, n) {
        var i = []
          , a = [];
        return i[0] = e[0] - r[0],
        i[1] = e[1] - r[1],
        i[2] = e[2] - r[2],
        a[0] = i[0] * Aa(n) - i[1] * wa(n),
        a[1] = i[0] * wa(n) + i[1] * Aa(n),
        a[2] = i[2],
        t[0] = a[0] + r[0],
        t[1] = a[1] + r[1],
        t[2] = a[2] + r[2],
        t
    }
    function Tn(t, e) {
        var r = t[0]
          , n = t[1]
          , i = t[2]
          , a = e[0]
          , o = e[1]
          , s = e[2]
          , u = Fa(r * r + n * n + i * i) * Fa(a * a + o * o + s * s)
          , l = u && cn(t, e) / u;
        return pa(ka(Ca(l, -1), 1))
    }
    function wn(t) {
        return t[0] = 0,
        t[1] = 0,
        t[2] = 0,
        t
    }
    function An(t) {
        return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
    }
    function En(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
    }
    function Sn(t, e) {
        var r = t[0]
          , n = t[1]
          , i = t[2]
          , a = e[0]
          , o = e[1]
          , s = e[2];
        return xa(r - a) <= Vl * Ca(1, xa(r), xa(a)) && xa(n - o) <= Vl * Ca(1, xa(n), xa(o)) && xa(i - s) <= Vl * Ca(1, xa(i), xa(s))
    }
    function Fn() {
        var t = new Nl(4);
        return Nl != Float32Array && (t[0] = 0,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0),
        t
    }
    function kn(t) {
        var e = new Nl(4);
        return e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e[3] = t[3],
        e
    }
    function Cn(t, e, r, n) {
        var i = new Nl(4);
        return i[0] = t,
        i[1] = e,
        i[2] = r,
        i[3] = n,
        i
    }
    function Dn(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t
    }
    function Rn(t, e, r, n, i) {
        return t[0] = e,
        t[1] = r,
        t[2] = n,
        t[3] = i,
        t
    }
    function Mn(t, e, r) {
        return t[0] = e[0] + r[0],
        t[1] = e[1] + r[1],
        t[2] = e[2] + r[2],
        t[3] = e[3] + r[3],
        t
    }
    function In(t, e, r) {
        return t[0] = e[0] - r[0],
        t[1] = e[1] - r[1],
        t[2] = e[2] - r[2],
        t[3] = e[3] - r[3],
        t
    }
    function Pn(t, e, r) {
        return t[0] = e[0] * r[0],
        t[1] = e[1] * r[1],
        t[2] = e[2] * r[2],
        t[3] = e[3] * r[3],
        t
    }
    function Bn(t, e, r) {
        return t[0] = e[0] / r[0],
        t[1] = e[1] / r[1],
        t[2] = e[2] / r[2],
        t[3] = e[3] / r[3],
        t
    }
    function Un(t, e) {
        return t[0] = _a(e[0]),
        t[1] = _a(e[1]),
        t[2] = _a(e[2]),
        t[3] = _a(e[3]),
        t
    }
    function zn(t, e) {
        return t[0] = Da(e[0]),
        t[1] = Da(e[1]),
        t[2] = Da(e[2]),
        t[3] = Da(e[3]),
        t
    }
    function On(t, e, r) {
        return t[0] = ka(e[0], r[0]),
        t[1] = ka(e[1], r[1]),
        t[2] = ka(e[2], r[2]),
        t[3] = ka(e[3], r[3]),
        t
    }
    function Ln(t, e, r) {
        return t[0] = Ca(e[0], r[0]),
        t[1] = Ca(e[1], r[1]),
        t[2] = Ca(e[2], r[2]),
        t[3] = Ca(e[3], r[3]),
        t
    }
    function Vn(t, e) {
        return t[0] = ga(e[0]),
        t[1] = ga(e[1]),
        t[2] = ga(e[2]),
        t[3] = ga(e[3]),
        t
    }
    function Nn(t, e, r) {
        return t[0] = e[0] * r,
        t[1] = e[1] * r,
        t[2] = e[2] * r,
        t[3] = e[3] * r,
        t
    }
    function Hn(t, e, r, n) {
        return t[0] = e[0] + r[0] * n,
        t[1] = e[1] + r[1] * n,
        t[2] = e[2] + r[2] * n,
        t[3] = e[3] + r[3] * n,
        t
    }
    function jn(t, e) {
        var r = e[0] - t[0]
          , n = e[1] - t[1]
          , i = e[2] - t[2]
          , a = e[3] - t[3];
        return va(r, n, i, a)
    }
    function qn(t, e) {
        var r = e[0] - t[0]
          , n = e[1] - t[1]
          , i = e[2] - t[2]
          , a = e[3] - t[3];
        return r * r + n * n + i * i + a * a
    }
    function Gn(t) {
        var e = t[0]
          , r = t[1]
          , n = t[2]
          , i = t[3];
        return va(e, r, n, i)
    }
    function Xn(t) {
        var e = t[0]
          , r = t[1]
          , n = t[2]
          , i = t[3];
        return e * e + r * r + n * n + i * i
    }
    function Yn(t, e) {
        return t[0] = -e[0],
        t[1] = -e[1],
        t[2] = -e[2],
        t[3] = -e[3],
        t
    }
    function Wn(t, e) {
        return t[0] = 1 / e[0],
        t[1] = 1 / e[1],
        t[2] = 1 / e[2],
        t[3] = 1 / e[3],
        t
    }
    function Zn(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = e[3]
          , o = r * r + n * n + i * i + a * a;
        return 0 < o && (o = 1 / Fa(o)),
        t[0] = r * o,
        t[1] = n * o,
        t[2] = i * o,
        t[3] = a * o,
        t
    }
    function Jn(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
    }
    function Kn(t, e, r, n) {
        var i = r[0] * n[1] - r[1] * n[0]
          , a = r[0] * n[2] - r[2] * n[0]
          , o = r[0] * n[3] - r[3] * n[0]
          , s = r[1] * n[2] - r[2] * n[1]
          , u = r[1] * n[3] - r[3] * n[1]
          , l = r[2] * n[3] - r[3] * n[2]
          , c = e[0]
          , h = e[1]
          , f = e[2]
          , d = e[3];
        return t[0] = h * l - f * u + d * s,
        t[1] = -c * l + f * o - d * a,
        t[2] = c * u - h * o + d * i,
        t[3] = -c * s + h * a - f * i,
        t
    }
    function Qn(t, e, r, n) {
        var i = e[0]
          , a = e[1]
          , o = e[2]
          , s = e[3];
        return t[0] = i + n * (r[0] - i),
        t[1] = a + n * (r[1] - a),
        t[2] = o + n * (r[2] - o),
        t[3] = s + n * (r[3] - s),
        t
    }
    function $n(t, e) {
        var r, n, i, a, o, s;
        e = e || 1;
        do {
            o = (r = 2 * Hl() - 1) * r + (n = 2 * Hl() - 1) * n
        } while (1 <= o);
        do {
            s = (i = 2 * Hl() - 1) * i + (a = 2 * Hl() - 1) * a
        } while (1 <= s);
        var u = Fa((1 - o) / s);
        return t[0] = e * r,
        t[1] = e * n,
        t[2] = e * i * u,
        t[3] = e * a * u,
        t
    }
    function ti(t, e, r) {
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = e[3];
        return t[0] = r[0] * n + r[4] * i + r[8] * a + r[12] * o,
        t[1] = r[1] * n + r[5] * i + r[9] * a + r[13] * o,
        t[2] = r[2] * n + r[6] * i + r[10] * a + r[14] * o,
        t[3] = r[3] * n + r[7] * i + r[11] * a + r[15] * o,
        t
    }
    function ei(t, e, r) {
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = r[0]
          , s = r[1]
          , u = r[2]
          , l = r[3]
          , c = l * n + s * a - u * i
          , h = l * i + u * n - o * a
          , f = l * a + o * i - s * n
          , d = -o * n - s * i - u * a;
        return t[0] = c * l + d * -o + h * -u - f * -s,
        t[1] = h * l + d * -s + f * -o - c * -u,
        t[2] = f * l + d * -u + c * -s - h * -o,
        t[3] = e[3],
        t
    }
    function ri(t) {
        return t[0] = 0,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t
    }
    function ni(t) {
        return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
    }
    function ii(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
    }
    function ai(t, e) {
        var r = t[0]
          , n = t[1]
          , i = t[2]
          , a = t[3]
          , o = e[0]
          , s = e[1]
          , u = e[2]
          , l = e[3];
        return xa(r - o) <= Vl * Ca(1, xa(r), xa(o)) && xa(n - s) <= Vl * Ca(1, xa(n), xa(s)) && xa(i - u) <= Vl * Ca(1, xa(i), xa(u)) && xa(a - l) <= Vl * Ca(1, xa(a), xa(l))
    }
    function oi() {
        var t = new Nl(4);
        return Nl != Float32Array && (t[0] = 0,
        t[1] = 0,
        t[2] = 0),
        t[3] = 1,
        t
    }
    function si(t) {
        return t[0] = 0,
        t[1] = 0,
        t[2] = 0,
        t[3] = 1,
        t
    }
    function ui(t, e, r) {
        var n = wa(r *= .5);
        return t[0] = n * e[0],
        t[1] = n * e[1],
        t[2] = n * e[2],
        t[3] = Aa(r),
        t
    }
    function li(t, e) {
        var r = 2 * pa(e[3])
          , n = wa(r / 2);
        return n > Vl ? (t[0] = e[0] / n,
        t[1] = e[1] / n,
        t[2] = e[2] / n) : (t[0] = 1,
        t[1] = 0,
        t[2] = 0),
        r
    }
    function ci(t, e) {
        var r = pc(t, e);
        return pa(2 * r * r - 1)
    }
    function hi(t, e, r) {
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = e[3]
          , s = r[0]
          , u = r[1]
          , l = r[2]
          , c = r[3];
        return t[0] = n * c + o * s + i * l - a * u,
        t[1] = i * c + o * u + a * s - n * l,
        t[2] = a * c + o * l + n * u - i * s,
        t[3] = o * c - n * s - i * u - a * l,
        t
    }
    function fi(t, e, r) {
        r *= .5;
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = e[3]
          , s = wa(r)
          , u = Aa(r);
        return t[0] = n * u + o * s,
        t[1] = i * u + a * s,
        t[2] = a * u - i * s,
        t[3] = o * u - n * s,
        t
    }
    function di(t, e, r) {
        r *= .5;
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = e[3]
          , s = wa(r)
          , u = Aa(r);
        return t[0] = n * u - a * s,
        t[1] = i * u + o * s,
        t[2] = a * u + n * s,
        t[3] = o * u - i * s,
        t
    }
    function bi(t, e, r) {
        r *= .5;
        var n = e[0]
          , i = e[1]
          , a = e[2]
          , o = e[3]
          , s = wa(r)
          , u = Aa(r);
        return t[0] = n * u + i * s,
        t[1] = i * u - n * s,
        t[2] = a * u + o * s,
        t[3] = o * u - a * s,
        t
    }
    function mi(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2];
        return t[0] = r,
        t[1] = n,
        t[2] = i,
        t[3] = Fa(xa(1 - r * r - n * n - i * i)),
        t
    }
    function pi(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = e[3]
          , o = Fa(r * r + n * n + i * i)
          , s = Math.exp(a)
          , u = 0 < o ? s * wa(o) / o : 0;
        return t[0] = r * u,
        t[1] = n * u,
        t[2] = i * u,
        t[3] = s * Aa(o),
        t
    }
    function gi(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = e[3]
          , o = Fa(r * r + n * n + i * i)
          , s = 0 < o ? Ta(o, a) / o : 0;
        return t[0] = r * s,
        t[1] = n * s,
        t[2] = i * s,
        t[3] = .5 * ma(r * r + n * n + i * i + a * a),
        t
    }
    function _i(t, e, r) {
        return gi(t, e),
        mc(t, t, r),
        pi(t, t),
        t
    }
    function vi(t, e, r, n) {
        var i, a, o, s, u, l = e[0], c = e[1], h = e[2], f = e[3], d = r[0], b = r[1], m = r[2], p = r[3];
        return 0 > (a = l * d + c * b + h * m + f * p) && (a = -a,
        d = -d,
        b = -b,
        m = -m,
        p = -p),
        1 - a > Vl ? (i = pa(a),
        o = wa(i),
        s = wa((1 - n) * i) / o,
        u = wa(n * i) / o) : (s = 1 - n,
        u = n),
        t[0] = s * l + u * d,
        t[1] = s * c + u * b,
        t[2] = s * h + u * m,
        t[3] = s * f + u * p,
        t
    }
    function xi(t) {
        var e = Hl()
          , r = Hl()
          , n = Hl()
          , i = Fa(1 - e)
          , a = Fa(e);
        return t[0] = i * wa(2 * Sa * r),
        t[1] = i * Aa(2 * Sa * r),
        t[2] = a * wa(2 * Sa * n),
        t[3] = a * Aa(2 * Sa * n),
        t
    }
    function yi(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , a = e[3]
          , o = r * r + n * n + i * i + a * a
          , s = o ? 1 / o : 0;
        return t[0] = -r * s,
        t[1] = -n * s,
        t[2] = -i * s,
        t[3] = a * s,
        t
    }
    function Ti(t, e) {
        return t[0] = -e[0],
        t[1] = -e[1],
        t[2] = -e[2],
        t[3] = e[3],
        t
    }
    function wi(t, e) {
        var r, n = e[0] + e[4] + e[8];
        if (0 < n)
            r = Fa(n + 1),
            t[3] = .5 * r,
            r = .5 / r,
            t[0] = (e[5] - e[7]) * r,
            t[1] = (e[6] - e[2]) * r,
            t[2] = (e[1] - e[3]) * r;
        else {
            var i = 0;
            e[4] > e[0] && (i = 1),
            e[8] > e[3 * i + i] && (i = 2);
            var a = (i + 1) % 3
              , o = (i + 2) % 3;
            r = Fa(e[3 * i + i] - e[3 * a + a] - e[3 * o + o] + 1),
            t[i] = .5 * r,
            r = .5 / r,
            t[3] = (e[3 * a + o] - e[3 * o + a]) * r,
            t[a] = (e[3 * a + i] + e[3 * i + a]) * r,
            t[o] = (e[3 * o + i] + e[3 * i + o]) * r
        }
        return t
    }
    function Ai(t, e, r, n) {
        var i = .5 * Sa / 180;
        r *= i,
        n *= i;
        var a = wa(e *= i)
          , o = Aa(e)
          , s = wa(r)
          , u = Aa(r)
          , l = wa(n)
          , c = Aa(n);
        return t[0] = a * u * c - o * s * l,
        t[1] = o * s * c + a * u * l,
        t[2] = o * u * l - a * s * c,
        t[3] = o * u * c + a * s * l,
        t
    }
    function Ei(t) {
        return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
    }
    function Si() {
        var t = new Nl(2);
        return Nl != Float32Array && (t[0] = 0,
        t[1] = 0),
        t
    }
    function Fi(t) {
        var e = new Nl(2);
        return e[0] = t[0],
        e[1] = t[1],
        e
    }
    function ki(t, e) {
        var r = new Nl(2);
        return r[0] = t,
        r[1] = e,
        r
    }
    function Ci(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t
    }
    function Di(t, e, r) {
        return t[0] = e,
        t[1] = r,
        t
    }
    function Ri(t, e, r) {
        return t[0] = e[0] + r[0],
        t[1] = e[1] + r[1],
        t
    }
    function Mi(t, e, r) {
        return t[0] = e[0] - r[0],
        t[1] = e[1] - r[1],
        t
    }
    function Ii(t, e, r) {
        return t[0] = e[0] * r[0],
        t[1] = e[1] * r[1],
        t
    }
    function Pi(t, e, r) {
        return t[0] = e[0] / r[0],
        t[1] = e[1] / r[1],
        t
    }
    function Bi(t, e) {
        return t[0] = _a(e[0]),
        t[1] = _a(e[1]),
        t
    }
    function Ui(t, e) {
        return t[0] = Da(e[0]),
        t[1] = Da(e[1]),
        t
    }
    function zi(t, e, r) {
        return t[0] = ka(e[0], r[0]),
        t[1] = ka(e[1], r[1]),
        t
    }
    function Oi(t, e, r) {
        return t[0] = Ca(e[0], r[0]),
        t[1] = Ca(e[1], r[1]),
        t
    }
    function Li(t, e) {
        return t[0] = ga(e[0]),
        t[1] = ga(e[1]),
        t
    }
    function Vi(t, e, r) {
        return t[0] = e[0] * r,
        t[1] = e[1] * r,
        t
    }
    function Ni(t, e, r, n) {
        return t[0] = e[0] + r[0] * n,
        t[1] = e[1] + r[1] * n,
        t
    }
    function Hi(t, e) {
        var r = e[0] - t[0]
          , n = e[1] - t[1];
        return va(r, n)
    }
    function ji(t, e) {
        var r = e[0] - t[0]
          , n = e[1] - t[1];
        return r * r + n * n
    }
    function qi(t) {
        var e = t[0]
          , r = t[1];
        return va(e, r)
    }
    function Gi(t) {
        var e = t[0]
          , r = t[1];
        return e * e + r * r
    }
    function Xi(t, e) {
        return t[0] = -e[0],
        t[1] = -e[1],
        t
    }
    function Yi(t, e) {
        return t[0] = 1 / e[0],
        t[1] = 1 / e[1],
        t
    }
    function Wi(t, e) {
        var r = e[0]
          , n = e[1]
          , i = r * r + n * n;
        return 0 < i && (i = 1 / Fa(i)),
        t[0] = e[0] * i,
        t[1] = e[1] * i,
        t
    }
    function Zi(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }
    function Ji(t, e, r) {
        var n = e[0] * r[1] - e[1] * r[0];
        return t[0] = t[1] = 0,
        t[2] = n,
        t
    }
    function Ki(t, e, r, n) {
        var i = e[0]
          , a = e[1];
        return t[0] = i + n * (r[0] - i),
        t[1] = a + n * (r[1] - a),
        t
    }
    function Qi(t, e) {
        e = e || 1;
        var r = 2 * Hl() * Sa;
        return t[0] = Aa(r) * e,
        t[1] = wa(r) * e,
        t
    }
    function $i(t, e, r) {
        var n = e[0]
          , i = e[1];
        return t[0] = r[0] * n + r[2] * i,
        t[1] = r[1] * n + r[3] * i,
        t
    }
    function ta(t, e, r) {
        var n = e[0]
          , i = e[1];
        return t[0] = r[0] * n + r[2] * i + r[4],
        t[1] = r[1] * n + r[3] * i + r[5],
        t
    }
    function ea(t, e, r) {
        var n = e[0]
          , i = e[1];
        return t[0] = r[0] * n + r[3] * i + r[6],
        t[1] = r[1] * n + r[4] * i + r[7],
        t
    }
    function ra(t, e, r) {
        var n = e[0]
          , i = e[1];
        return t[0] = r[0] * n + r[4] * i + r[12],
        t[1] = r[1] * n + r[5] * i + r[13],
        t
    }
    function na(t, e, r, n) {
        var i = e[0] - r[0]
          , a = e[1] - r[1]
          , o = wa(n)
          , s = Aa(n);
        return t[0] = i * s - a * o + r[0],
        t[1] = i * o + a * s + r[1],
        t
    }
    function ia(t, e) {
        var r = t[0]
          , n = t[1]
          , i = e[0]
          , a = e[1]
          , o = Fa(r * r + n * n) * Fa(i * i + a * a);
        return pa(ka(Ca(o && (r * i + n * a) / o, -1), 1))
    }
    function aa(t) {
        return t[0] = 0,
        t[1] = 0,
        t
    }
    function oa(t) {
        return "vec2(" + t[0] + ", " + t[1] + ")"
    }
    function sa(t, e) {
        return t[0] === e[0] && t[1] === e[1]
    }
    function ua(t, e) {
        var r = t[0]
          , n = t[1]
          , i = e[0]
          , a = e[1];
        return xa(r - i) <= Vl * Ca(1, xa(r), xa(i)) && xa(n - a) <= Vl * Ca(1, xa(n), xa(a))
    }
    function la(t, e) {
        return Ba.fromValues(t[4 * e + 0], t[4 * e + 1], t[4 * e + 2], 0)
    }
    function ca(t, e, r) {
        for (let n = 0; 4 > n; n++)
            t[4 * e + n] = r[n]
    }
    function ha(t) {
        return Ba.fromValues((255 & t >> 16) / 255, (255 & t >> 8) / 255, (255 & t >> 0) / 255, (255 & t >> 24) / 255)
    }
    function fa(t, e) {
        return Pa.fromValues(t[4 * e + 0], t[4 * e + 1], t[4 * e + 2])
    }
    var da = Math.trunc
      , ba = Math.sign
      , ma = Math.log
      , pa = Math.acos
      , ga = Math.round
      , _a = Math.ceil
      , va = Math.hypot
      , xa = Math.abs
      , ya = Math.pow
      , Ta = Math.atan2
      , wa = Math.sin
      , Aa = Math.cos
      , Ea = Math.tan
      , Sa = Math.PI
      , Fa = Math.sqrt
      , ka = Math.min
      , Ca = Math.max
      , Da = Math.floor
      , Ra = String.fromCharCode;
    r.r(e);
    var Ma = {};
    r.r(Ma),
    r.d(Ma, "create", (function() {
        return ve
    }
    )),
    r.d(Ma, "fromMat4", (function() {
        return xe
    }
    )),
    r.d(Ma, "clone", (function() {
        return ye
    }
    )),
    r.d(Ma, "copy", (function() {
        return Te
    }
    )),
    r.d(Ma, "fromValues", (function() {
        return we
    }
    )),
    r.d(Ma, "set", (function() {
        return Ae
    }
    )),
    r.d(Ma, "identity", (function() {
        return Ee
    }
    )),
    r.d(Ma, "transpose", (function() {
        return Se
    }
    )),
    r.d(Ma, "invert", (function() {
        return Fe
    }
    )),
    r.d(Ma, "adjoint", (function() {
        return ke
    }
    )),
    r.d(Ma, "determinant", (function() {
        return Ce
    }
    )),
    r.d(Ma, "multiply", (function() {
        return De
    }
    )),
    r.d(Ma, "translate", (function() {
        return Re
    }
    )),
    r.d(Ma, "rotate", (function() {
        return Me
    }
    )),
    r.d(Ma, "scale", (function() {
        return Ie
    }
    )),
    r.d(Ma, "fromTranslation", (function() {
        return Pe
    }
    )),
    r.d(Ma, "fromRotation", (function() {
        return Be
    }
    )),
    r.d(Ma, "fromScaling", (function() {
        return Ue
    }
    )),
    r.d(Ma, "fromMat2d", (function() {
        return ze
    }
    )),
    r.d(Ma, "fromQuat", (function() {
        return Oe
    }
    )),
    r.d(Ma, "normalFromMat4", (function() {
        return Le
    }
    )),
    r.d(Ma, "projection", (function() {
        return Ve
    }
    )),
    r.d(Ma, "str", (function() {
        return Ne
    }
    )),
    r.d(Ma, "frob", (function() {
        return He
    }
    )),
    r.d(Ma, "add", (function() {
        return je
    }
    )),
    r.d(Ma, "subtract", (function() {
        return qe
    }
    )),
    r.d(Ma, "multiplyScalar", (function() {
        return Ge
    }
    )),
    r.d(Ma, "multiplyScalarAndAdd", (function() {
        return Xe
    }
    )),
    r.d(Ma, "exactEquals", (function() {
        return Ye
    }
    )),
    r.d(Ma, "equals", (function() {
        return We
    }
    )),
    r.d(Ma, "mul", (function() {
        return jl
    }
    )),
    r.d(Ma, "sub", (function() {
        return ql
    }
    ));
    var Ia = {};
    r.r(Ia),
    r.d(Ia, "create", (function() {
        return Ze
    }
    )),
    r.d(Ia, "clone", (function() {
        return Je
    }
    )),
    r.d(Ia, "copy", (function() {
        return Ke
    }
    )),
    r.d(Ia, "fromValues", (function() {
        return Qe
    }
    )),
    r.d(Ia, "set", (function() {
        return $e
    }
    )),
    r.d(Ia, "identity", (function() {
        return tr
    }
    )),
    r.d(Ia, "transpose", (function() {
        return er
    }
    )),
    r.d(Ia, "invert", (function() {
        return rr
    }
    )),
    r.d(Ia, "adjoint", (function() {
        return nr
    }
    )),
    r.d(Ia, "determinant", (function() {
        return ir
    }
    )),
    r.d(Ia, "multiply", (function() {
        return ar
    }
    )),
    r.d(Ia, "translate", (function() {
        return or
    }
    )),
    r.d(Ia, "scale", (function() {
        return sr
    }
    )),
    r.d(Ia, "rotate", (function() {
        return ur
    }
    )),
    r.d(Ia, "rotateX", (function() {
        return lr
    }
    )),
    r.d(Ia, "rotateY", (function() {
        return cr
    }
    )),
    r.d(Ia, "rotateZ", (function() {
        return hr
    }
    )),
    r.d(Ia, "fromTranslation", (function() {
        return fr
    }
    )),
    r.d(Ia, "fromScaling", (function() {
        return dr
    }
    )),
    r.d(Ia, "fromRotation", (function() {
        return br
    }
    )),
    r.d(Ia, "fromXRotation", (function() {
        return mr
    }
    )),
    r.d(Ia, "fromYRotation", (function() {
        return pr
    }
    )),
    r.d(Ia, "fromZRotation", (function() {
        return gr
    }
    )),
    r.d(Ia, "fromRotationTranslation", (function() {
        return _r
    }
    )),
    r.d(Ia, "fromQuat2", (function() {
        return vr
    }
    )),
    r.d(Ia, "getTranslation", (function() {
        return xr
    }
    )),
    r.d(Ia, "getScaling", (function() {
        return yr
    }
    )),
    r.d(Ia, "getRotation", (function() {
        return Tr
    }
    )),
    r.d(Ia, "fromRotationTranslationScale", (function() {
        return wr
    }
    )),
    r.d(Ia, "fromRotationTranslationScaleOrigin", (function() {
        return Ar
    }
    )),
    r.d(Ia, "fromQuat", (function() {
        return Er
    }
    )),
    r.d(Ia, "frustum", (function() {
        return Sr
    }
    )),
    r.d(Ia, "perspective", (function() {
        return Fr
    }
    )),
    r.d(Ia, "perspectiveFromFieldOfView", (function() {
        return kr
    }
    )),
    r.d(Ia, "ortho", (function() {
        return Cr
    }
    )),
    r.d(Ia, "lookAt", (function() {
        return Dr
    }
    )),
    r.d(Ia, "targetTo", (function() {
        return Rr
    }
    )),
    r.d(Ia, "str", (function() {
        return Mr
    }
    )),
    r.d(Ia, "frob", (function() {
        return Ir
    }
    )),
    r.d(Ia, "add", (function() {
        return Pr
    }
    )),
    r.d(Ia, "subtract", (function() {
        return Br
    }
    )),
    r.d(Ia, "multiplyScalar", (function() {
        return Ur
    }
    )),
    r.d(Ia, "multiplyScalarAndAdd", (function() {
        return zr
    }
    )),
    r.d(Ia, "exactEquals", (function() {
        return Or
    }
    )),
    r.d(Ia, "equals", (function() {
        return Lr
    }
    )),
    r.d(Ia, "mul", (function() {
        return Gl
    }
    )),
    r.d(Ia, "sub", (function() {
        return Xl
    }
    ));
    var Pa = {};
    r.r(Pa),
    r.d(Pa, "create", (function() {
        return Vr
    }
    )),
    r.d(Pa, "clone", (function() {
        return Nr
    }
    )),
    r.d(Pa, "length", (function() {
        return Hr
    }
    )),
    r.d(Pa, "fromValues", (function() {
        return jr
    }
    )),
    r.d(Pa, "copy", (function() {
        return qr
    }
    )),
    r.d(Pa, "set", (function() {
        return Gr
    }
    )),
    r.d(Pa, "add", (function() {
        return Xr
    }
    )),
    r.d(Pa, "subtract", (function() {
        return Yr
    }
    )),
    r.d(Pa, "multiply", (function() {
        return Wr
    }
    )),
    r.d(Pa, "divide", (function() {
        return Zr
    }
    )),
    r.d(Pa, "ceil", (function() {
        return Jr
    }
    )),
    r.d(Pa, "floor", (function() {
        return Kr
    }
    )),
    r.d(Pa, "min", (function() {
        return Qr
    }
    )),
    r.d(Pa, "max", (function() {
        return $r
    }
    )),
    r.d(Pa, "round", (function() {
        return tn
    }
    )),
    r.d(Pa, "scale", (function() {
        return en
    }
    )),
    r.d(Pa, "scaleAndAdd", (function() {
        return rn
    }
    )),
    r.d(Pa, "distance", (function() {
        return nn
    }
    )),
    r.d(Pa, "squaredDistance", (function() {
        return an
    }
    )),
    r.d(Pa, "squaredLength", (function() {
        return on
    }
    )),
    r.d(Pa, "negate", (function() {
        return sn
    }
    )),
    r.d(Pa, "inverse", (function() {
        return un
    }
    )),
    r.d(Pa, "normalize", (function() {
        return ln
    }
    )),
    r.d(Pa, "dot", (function() {
        return cn
    }
    )),
    r.d(Pa, "cross", (function() {
        return hn
    }
    )),
    r.d(Pa, "lerp", (function() {
        return fn
    }
    )),
    r.d(Pa, "hermite", (function() {
        return dn
    }
    )),
    r.d(Pa, "bezier", (function() {
        return bn
    }
    )),
    r.d(Pa, "random", (function() {
        return mn
    }
    )),
    r.d(Pa, "transformMat4", (function() {
        return pn
    }
    )),
    r.d(Pa, "transformMat3", (function() {
        return gn
    }
    )),
    r.d(Pa, "transformQuat", (function() {
        return _n
    }
    )),
    r.d(Pa, "rotateX", (function() {
        return vn
    }
    )),
    r.d(Pa, "rotateY", (function() {
        return xn
    }
    )),
    r.d(Pa, "rotateZ", (function() {
        return yn
    }
    )),
    r.d(Pa, "angle", (function() {
        return Tn
    }
    )),
    r.d(Pa, "zero", (function() {
        return wn
    }
    )),
    r.d(Pa, "str", (function() {
        return An
    }
    )),
    r.d(Pa, "exactEquals", (function() {
        return En
    }
    )),
    r.d(Pa, "equals", (function() {
        return Sn
    }
    )),
    r.d(Pa, "sub", (function() {
        return Yl
    }
    )),
    r.d(Pa, "mul", (function() {
        return Wl
    }
    )),
    r.d(Pa, "div", (function() {
        return Zl
    }
    )),
    r.d(Pa, "dist", (function() {
        return Jl
    }
    )),
    r.d(Pa, "sqrDist", (function() {
        return Kl
    }
    )),
    r.d(Pa, "len", (function() {
        return Ql
    }
    )),
    r.d(Pa, "sqrLen", (function() {
        return $l
    }
    )),
    r.d(Pa, "forEach", (function() {
        return tc
    }
    ));
    var Ba = {};
    r.r(Ba),
    r.d(Ba, "create", (function() {
        return Fn
    }
    )),
    r.d(Ba, "clone", (function() {
        return kn
    }
    )),
    r.d(Ba, "fromValues", (function() {
        return Cn
    }
    )),
    r.d(Ba, "copy", (function() {
        return Dn
    }
    )),
    r.d(Ba, "set", (function() {
        return Rn
    }
    )),
    r.d(Ba, "add", (function() {
        return Mn
    }
    )),
    r.d(Ba, "subtract", (function() {
        return In
    }
    )),
    r.d(Ba, "multiply", (function() {
        return Pn
    }
    )),
    r.d(Ba, "divide", (function() {
        return Bn
    }
    )),
    r.d(Ba, "ceil", (function() {
        return Un
    }
    )),
    r.d(Ba, "floor", (function() {
        return zn
    }
    )),
    r.d(Ba, "min", (function() {
        return On
    }
    )),
    r.d(Ba, "max", (function() {
        return Ln
    }
    )),
    r.d(Ba, "round", (function() {
        return Vn
    }
    )),
    r.d(Ba, "scale", (function() {
        return Nn
    }
    )),
    r.d(Ba, "scaleAndAdd", (function() {
        return Hn
    }
    )),
    r.d(Ba, "distance", (function() {
        return jn
    }
    )),
    r.d(Ba, "squaredDistance", (function() {
        return qn
    }
    )),
    r.d(Ba, "length", (function() {
        return Gn
    }
    )),
    r.d(Ba, "squaredLength", (function() {
        return Xn
    }
    )),
    r.d(Ba, "negate", (function() {
        return Yn
    }
    )),
    r.d(Ba, "inverse", (function() {
        return Wn
    }
    )),
    r.d(Ba, "normalize", (function() {
        return Zn
    }
    )),
    r.d(Ba, "dot", (function() {
        return Jn
    }
    )),
    r.d(Ba, "cross", (function() {
        return Kn
    }
    )),
    r.d(Ba, "lerp", (function() {
        return Qn
    }
    )),
    r.d(Ba, "random", (function() {
        return $n
    }
    )),
    r.d(Ba, "transformMat4", (function() {
        return ti
    }
    )),
    r.d(Ba, "transformQuat", (function() {
        return ei
    }
    )),
    r.d(Ba, "zero", (function() {
        return ri
    }
    )),
    r.d(Ba, "str", (function() {
        return ni
    }
    )),
    r.d(Ba, "exactEquals", (function() {
        return ii
    }
    )),
    r.d(Ba, "equals", (function() {
        return ai
    }
    )),
    r.d(Ba, "sub", (function() {
        return ec
    }
    )),
    r.d(Ba, "mul", (function() {
        return rc
    }
    )),
    r.d(Ba, "div", (function() {
        return nc
    }
    )),
    r.d(Ba, "dist", (function() {
        return ic
    }
    )),
    r.d(Ba, "sqrDist", (function() {
        return ac
    }
    )),
    r.d(Ba, "len", (function() {
        return oc
    }
    )),
    r.d(Ba, "sqrLen", (function() {
        return sc
    }
    )),
    r.d(Ba, "forEach", (function() {
        return uc
    }
    ));
    var Ua = {};
    r.r(Ua),
    r.d(Ua, "create", (function() {
        return oi
    }
    )),
    r.d(Ua, "identity", (function() {
        return si
    }
    )),
    r.d(Ua, "setAxisAngle", (function() {
        return ui
    }
    )),
    r.d(Ua, "getAxisAngle", (function() {
        return li
    }
    )),
    r.d(Ua, "getAngle", (function() {
        return ci
    }
    )),
    r.d(Ua, "multiply", (function() {
        return hi
    }
    )),
    r.d(Ua, "rotateX", (function() {
        return fi
    }
    )),
    r.d(Ua, "rotateY", (function() {
        return di
    }
    )),
    r.d(Ua, "rotateZ", (function() {
        return bi
    }
    )),
    r.d(Ua, "calculateW", (function() {
        return mi
    }
    )),
    r.d(Ua, "exp", (function() {
        return pi
    }
    )),
    r.d(Ua, "ln", (function() {
        return gi
    }
    )),
    r.d(Ua, "pow", (function() {
        return _i
    }
    )),
    r.d(Ua, "slerp", (function() {
        return vi
    }
    )),
    r.d(Ua, "random", (function() {
        return xi
    }
    )),
    r.d(Ua, "invert", (function() {
        return yi
    }
    )),
    r.d(Ua, "conjugate", (function() {
        return Ti
    }
    )),
    r.d(Ua, "fromMat3", (function() {
        return wi
    }
    )),
    r.d(Ua, "fromEuler", (function() {
        return Ai
    }
    )),
    r.d(Ua, "str", (function() {
        return Ei
    }
    )),
    r.d(Ua, "clone", (function() {
        return lc
    }
    )),
    r.d(Ua, "fromValues", (function() {
        return cc
    }
    )),
    r.d(Ua, "copy", (function() {
        return hc
    }
    )),
    r.d(Ua, "set", (function() {
        return fc
    }
    )),
    r.d(Ua, "add", (function() {
        return dc
    }
    )),
    r.d(Ua, "mul", (function() {
        return bc
    }
    )),
    r.d(Ua, "scale", (function() {
        return mc
    }
    )),
    r.d(Ua, "dot", (function() {
        return pc
    }
    )),
    r.d(Ua, "lerp", (function() {
        return gc
    }
    )),
    r.d(Ua, "length", (function() {
        return _c
    }
    )),
    r.d(Ua, "len", (function() {
        return vc
    }
    )),
    r.d(Ua, "squaredLength", (function() {
        return xc
    }
    )),
    r.d(Ua, "sqrLen", (function() {
        return yc
    }
    )),
    r.d(Ua, "normalize", (function() {
        return Tc
    }
    )),
    r.d(Ua, "exactEquals", (function() {
        return wc
    }
    )),
    r.d(Ua, "equals", (function() {
        return Ac
    }
    )),
    r.d(Ua, "rotationTo", (function() {
        return Ec
    }
    )),
    r.d(Ua, "sqlerp", (function() {
        return Sc
    }
    )),
    r.d(Ua, "setAxes", (function() {
        return Fc
    }
    ));
    var za = {};
    r.r(za),
    r.d(za, "create", (function() {
        return Si
    }
    )),
    r.d(za, "clone", (function() {
        return Fi
    }
    )),
    r.d(za, "fromValues", (function() {
        return ki
    }
    )),
    r.d(za, "copy", (function() {
        return Ci
    }
    )),
    r.d(za, "set", (function() {
        return Di
    }
    )),
    r.d(za, "add", (function() {
        return Ri
    }
    )),
    r.d(za, "subtract", (function() {
        return Mi
    }
    )),
    r.d(za, "multiply", (function() {
        return Ii
    }
    )),
    r.d(za, "divide", (function() {
        return Pi
    }
    )),
    r.d(za, "ceil", (function() {
        return Bi
    }
    )),
    r.d(za, "floor", (function() {
        return Ui
    }
    )),
    r.d(za, "min", (function() {
        return zi
    }
    )),
    r.d(za, "max", (function() {
        return Oi
    }
    )),
    r.d(za, "round", (function() {
        return Li
    }
    )),
    r.d(za, "scale", (function() {
        return Vi
    }
    )),
    r.d(za, "scaleAndAdd", (function() {
        return Ni
    }
    )),
    r.d(za, "distance", (function() {
        return Hi
    }
    )),
    r.d(za, "squaredDistance", (function() {
        return ji
    }
    )),
    r.d(za, "length", (function() {
        return qi
    }
    )),
    r.d(za, "squaredLength", (function() {
        return Gi
    }
    )),
    r.d(za, "negate", (function() {
        return Xi
    }
    )),
    r.d(za, "inverse", (function() {
        return Yi
    }
    )),
    r.d(za, "normalize", (function() {
        return Wi
    }
    )),
    r.d(za, "dot", (function() {
        return Zi
    }
    )),
    r.d(za, "cross", (function() {
        return Ji
    }
    )),
    r.d(za, "lerp", (function() {
        return Ki
    }
    )),
    r.d(za, "random", (function() {
        return Qi
    }
    )),
    r.d(za, "transformMat2", (function() {
        return $i
    }
    )),
    r.d(za, "transformMat2d", (function() {
        return ta
    }
    )),
    r.d(za, "transformMat3", (function() {
        return ea
    }
    )),
    r.d(za, "transformMat4", (function() {
        return ra
    }
    )),
    r.d(za, "rotate", (function() {
        return na
    }
    )),
    r.d(za, "angle", (function() {
        return ia
    }
    )),
    r.d(za, "zero", (function() {
        return aa
    }
    )),
    r.d(za, "str", (function() {
        return oa
    }
    )),
    r.d(za, "exactEquals", (function() {
        return sa
    }
    )),
    r.d(za, "equals", (function() {
        return ua
    }
    )),
    r.d(za, "len", (function() {
        return kc
    }
    )),
    r.d(za, "sub", (function() {
        return Cc
    }
    )),
    r.d(za, "mul", (function() {
        return Dc
    }
    )),
    r.d(za, "div", (function() {
        return Rc
    }
    )),
    r.d(za, "dist", (function() {
        return Mc
    }
    )),
    r.d(za, "sqrDist", (function() {
        return Ic
    }
    )),
    r.d(za, "sqrLen", (function() {
        return Pc
    }
    )),
    r.d(za, "forEach", (function() {
        return Bc
    }
    )),
    r(11);
    let Oa = Float32Array;
    Object.freeze({
        __proto__: null,
        add: i,
        copy: function(t, e) {
            return (e = e || new Oa(3))[0] = t[0],
            e[1] = t[1],
            e[2] = t[2],
            e
        },
        create: n,
        cross: o,
        distance: function(t, e) {
            const r = t[0] - e[0]
              , n = t[1] - e[1]
              , i = t[2] - e[2];
            return Fa(r * r + n * n + i * i)
        },
        distanceSq: function(t, e) {
            const r = t[0] - e[0]
              , n = t[1] - e[1]
              , i = t[2] - e[2];
            return r * r + n * n + i * i
        },
        divide: function(t, e, r) {
            return (r = r || new Oa(3))[0] = t[0] / e[0],
            r[1] = t[1] / e[1],
            r[2] = t[2] / e[2],
            r
        },
        divScalar: function(t, e, r) {
            return (r = r || new Oa(3))[0] = t[0] / e,
            r[1] = t[1] / e,
            r[2] = t[2] / e,
            r
        },
        dot: function(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
        },
        lerp: function(t, e, r, n) {
            return (n = n || new Oa(3))[0] = t[0] + r * (e[0] - t[0]),
            n[1] = t[1] + r * (e[1] - t[1]),
            n[2] = t[2] + r * (e[2] - t[2]),
            n
        },
        lerpV: function(t, e, r, n) {
            return (n = n || new Oa(3))[0] = t[0] + r[0] * (e[0] - t[0]),
            n[1] = t[1] + r[1] * (e[1] - t[1]),
            n[2] = t[2] + r[2] * (e[2] - t[2]),
            n
        },
        length: function(t) {
            return Fa(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
        },
        lengthSq: function(t) {
            return t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
        },
        max: function(t, e, r) {
            return (r = r || new Oa(3))[0] = Ca(t[0], e[0]),
            r[1] = Ca(t[1], e[1]),
            r[2] = Ca(t[2], e[2]),
            r
        },
        min: function(t, e, r) {
            return (r = r || new Oa(3))[0] = ka(t[0], e[0]),
            r[1] = ka(t[1], e[1]),
            r[2] = ka(t[2], e[2]),
            r
        },
        mulScalar: function(t, e, r) {
            return (r = r || new Oa(3))[0] = t[0] * e,
            r[1] = t[1] * e,
            r[2] = t[2] * e,
            r
        },
        multiply: u,
        negate: function(t, e) {
            return (e = e || new Oa(3))[0] = -t[0],
            e[1] = -t[1],
            e[2] = -t[2],
            e
        },
        normalize: s,
        setDefaultType: function(t) {
            const e = Oa;
            return Oa = t,
            e
        },
        subtract: a
    });
    let La, Va, Na, Ha = Float32Array;
    Object.freeze({
        __proto__: null,
        axisRotate: function(t, e, r, n) {
            n = n || new Ha(16);
            let i = e[0]
              , a = e[1]
              , o = e[2];
            const s = Fa(i * i + a * a + o * o);
            i /= s,
            a /= s,
            o /= s;
            const u = i * i
              , l = a * a
              , c = o * o
              , h = Aa(r)
              , f = wa(r)
              , d = 1 - h
              , b = u + (1 - u) * h
              , m = i * a * d + o * f
              , p = i * o * d - a * f
              , g = i * a * d - o * f
              , _ = l + (1 - l) * h
              , v = a * o * d + i * f
              , x = i * o * d + a * f
              , y = a * o * d - i * f
              , T = c + (1 - c) * h
              , w = t[0]
              , A = t[1]
              , E = t[2]
              , S = t[3]
              , F = t[4]
              , k = t[5]
              , C = t[6]
              , D = t[7]
              , R = t[8]
              , M = t[9]
              , I = t[10]
              , P = t[11];
            return n[0] = b * w + m * F + p * R,
            n[1] = b * A + m * k + p * M,
            n[2] = b * E + m * C + p * I,
            n[3] = b * S + m * D + p * P,
            n[4] = g * w + _ * F + v * R,
            n[5] = g * A + _ * k + v * M,
            n[6] = g * E + _ * C + v * I,
            n[7] = g * S + _ * D + v * P,
            n[8] = x * w + y * F + T * R,
            n[9] = x * A + y * k + T * M,
            n[10] = x * E + y * C + T * I,
            n[11] = x * S + y * D + T * P,
            t !== n && (n[12] = t[12],
            n[13] = t[13],
            n[14] = t[14],
            n[15] = t[15]),
            n
        },
        axisRotation: function(t, e, r) {
            r = r || new Ha(16);
            let n = t[0]
              , i = t[1]
              , a = t[2];
            const o = Fa(n * n + i * i + a * a);
            n /= o,
            i /= o,
            a /= o;
            const s = n * n
              , u = i * i
              , l = a * a
              , c = Aa(e)
              , h = wa(e)
              , f = 1 - c;
            return r[0] = s + (1 - s) * c,
            r[1] = n * i * f + a * h,
            r[2] = n * a * f - i * h,
            r[3] = 0,
            r[4] = n * i * f - a * h,
            r[5] = u + (1 - u) * c,
            r[6] = i * a * f + n * h,
            r[7] = 0,
            r[8] = n * a * f + i * h,
            r[9] = i * a * f - n * h,
            r[10] = l + (1 - l) * c,
            r[11] = 0,
            r[12] = 0,
            r[13] = 0,
            r[14] = 0,
            r[15] = 1,
            r
        },
        copy: l,
        frustum: function(t, e, r, n, i, a, o) {
            const s = e - t
              , u = n - r
              , l = i - a;
            return (o = o || new Ha(16))[0] = 2 * i / s,
            o[1] = 0,
            o[2] = 0,
            o[3] = 0,
            o[4] = 0,
            o[5] = 2 * i / u,
            o[6] = 0,
            o[7] = 0,
            o[8] = (t + e) / s,
            o[9] = (n + r) / u,
            o[10] = a / l,
            o[11] = -1,
            o[12] = 0,
            o[13] = 0,
            o[14] = i * a / l,
            o[15] = 0,
            o
        },
        getAxis: function(t, e, r) {
            const i = 4 * e;
            return (r = r || n())[0] = t[i + 0],
            r[1] = t[i + 1],
            r[2] = t[i + 2],
            r
        },
        getTranslation: function(t, e) {
            return (e = e || n())[0] = t[12],
            e[1] = t[13],
            e[2] = t[14],
            e
        },
        identity: c,
        inverse: h,
        lookAt: function(t, e, r, i) {
            return i = i || new Ha(16),
            La = La || n(),
            Va = Va || n(),
            Na = Na || n(),
            s(a(t, e, Na), Na),
            s(o(r, Na, La), La),
            s(o(Na, La, Va), Va),
            i[0] = La[0],
            i[1] = La[1],
            i[2] = La[2],
            i[3] = 0,
            i[4] = Va[0],
            i[5] = Va[1],
            i[6] = Va[2],
            i[7] = 0,
            i[8] = Na[0],
            i[9] = Na[1],
            i[10] = Na[2],
            i[11] = 0,
            i[12] = t[0],
            i[13] = t[1],
            i[14] = t[2],
            i[15] = 1,
            i
        },
        multiply: function(t, e, r) {
            r = r || new Ha(16);
            const n = t[0]
              , i = t[1]
              , a = t[2]
              , o = t[3]
              , s = t[4]
              , u = t[5]
              , l = t[6]
              , c = t[7]
              , h = t[8]
              , f = t[9]
              , d = t[10]
              , b = t[11]
              , m = t[12]
              , p = t[13]
              , g = t[14]
              , _ = t[15]
              , v = e[0]
              , x = e[1]
              , y = e[2]
              , T = e[3]
              , w = e[4]
              , A = e[5]
              , E = e[6]
              , S = e[7]
              , F = e[8]
              , k = e[9]
              , C = e[10]
              , D = e[11]
              , R = e[12]
              , M = e[13]
              , I = e[14]
              , P = e[15];
            return r[0] = n * v + s * x + h * y + m * T,
            r[1] = i * v + u * x + f * y + p * T,
            r[2] = a * v + l * x + d * y + g * T,
            r[3] = o * v + c * x + b * y + _ * T,
            r[4] = n * w + s * A + h * E + m * S,
            r[5] = i * w + u * A + f * E + p * S,
            r[6] = a * w + l * A + d * E + g * S,
            r[7] = o * w + c * A + b * E + _ * S,
            r[8] = n * F + s * k + h * C + m * D,
            r[9] = i * F + u * k + f * C + p * D,
            r[10] = a * F + l * k + d * C + g * D,
            r[11] = o * F + c * k + b * C + _ * D,
            r[12] = n * R + s * M + h * I + m * P,
            r[13] = i * R + u * M + f * I + p * P,
            r[14] = a * R + l * M + d * I + g * P,
            r[15] = o * R + c * M + b * I + _ * P,
            r
        },
        negate: function(t, e) {
            return (e = e || new Ha(16))[0] = -t[0],
            e[1] = -t[1],
            e[2] = -t[2],
            e[3] = -t[3],
            e[4] = -t[4],
            e[5] = -t[5],
            e[6] = -t[6],
            e[7] = -t[7],
            e[8] = -t[8],
            e[9] = -t[9],
            e[10] = -t[10],
            e[11] = -t[11],
            e[12] = -t[12],
            e[13] = -t[13],
            e[14] = -t[14],
            e[15] = -t[15],
            e
        },
        ortho: function(t, e, r, n, i, a, o) {
            return (o = o || new Ha(16))[0] = 2 / (e - t),
            o[1] = 0,
            o[2] = 0,
            o[3] = 0,
            o[4] = 0,
            o[5] = 2 / (n - r),
            o[6] = 0,
            o[7] = 0,
            o[8] = 0,
            o[9] = 0,
            o[10] = 2 / (i - a),
            o[11] = 0,
            o[12] = (e + t) / (t - e),
            o[13] = (n + r) / (r - n),
            o[14] = (a + i) / (i - a),
            o[15] = 1,
            o
        },
        perspective: function(t, e, r, n, i) {
            i = i || new Ha(16);
            const a = Ea(.5 * Sa - .5 * t)
              , o = 1 / (r - n);
            return i[0] = a / e,
            i[1] = 0,
            i[2] = 0,
            i[3] = 0,
            i[4] = 0,
            i[5] = a,
            i[6] = 0,
            i[7] = 0,
            i[8] = 0,
            i[9] = 0,
            i[10] = (r + n) * o,
            i[11] = -1,
            i[12] = 0,
            i[13] = 0,
            i[14] = r * n * o * 2,
            i[15] = 0,
            i
        },
        rotateX: function(t, e, r) {
            r = r || new Ha(16);
            const n = t[4]
              , i = t[5]
              , a = t[6]
              , o = t[7]
              , s = t[8]
              , u = t[9]
              , l = t[10]
              , c = t[11]
              , h = Aa(e)
              , f = wa(e);
            return r[4] = h * n + f * s,
            r[5] = h * i + f * u,
            r[6] = h * a + f * l,
            r[7] = h * o + f * c,
            r[8] = h * s - f * n,
            r[9] = h * u - f * i,
            r[10] = h * l - f * a,
            r[11] = h * c - f * o,
            t !== r && (r[0] = t[0],
            r[1] = t[1],
            r[2] = t[2],
            r[3] = t[3],
            r[12] = t[12],
            r[13] = t[13],
            r[14] = t[14],
            r[15] = t[15]),
            r
        },
        rotateY: function(t, e, r) {
            r = r || new Ha(16);
            const n = t[0]
              , i = t[1]
              , a = t[2]
              , o = t[3]
              , s = t[8]
              , u = t[9]
              , l = t[10]
              , c = t[11]
              , h = Aa(e)
              , f = wa(e);
            return r[0] = h * n - f * s,
            r[1] = h * i - f * u,
            r[2] = h * a - f * l,
            r[3] = h * o - f * c,
            r[8] = h * s + f * n,
            r[9] = h * u + f * i,
            r[10] = h * l + f * a,
            r[11] = h * c + f * o,
            t !== r && (r[4] = t[4],
            r[5] = t[5],
            r[6] = t[6],
            r[7] = t[7],
            r[12] = t[12],
            r[13] = t[13],
            r[14] = t[14],
            r[15] = t[15]),
            r
        },
        rotateZ: function(t, e, r) {
            r = r || new Ha(16);
            const n = t[0]
              , i = t[1]
              , a = t[2]
              , o = t[3]
              , s = t[4]
              , u = t[5]
              , l = t[6]
              , c = t[7]
              , h = Aa(e)
              , f = wa(e);
            return r[0] = h * n + f * s,
            r[1] = h * i + f * u,
            r[2] = h * a + f * l,
            r[3] = h * o + f * c,
            r[4] = h * s - f * n,
            r[5] = h * u - f * i,
            r[6] = h * l - f * a,
            r[7] = h * c - f * o,
            t !== r && (r[8] = t[8],
            r[9] = t[9],
            r[10] = t[10],
            r[11] = t[11],
            r[12] = t[12],
            r[13] = t[13],
            r[14] = t[14],
            r[15] = t[15]),
            r
        },
        rotationX: function(t, e) {
            e = e || new Ha(16);
            const r = Aa(t)
              , n = wa(t);
            return e[0] = 1,
            e[1] = 0,
            e[2] = 0,
            e[3] = 0,
            e[4] = 0,
            e[5] = r,
            e[6] = n,
            e[7] = 0,
            e[8] = 0,
            e[9] = -n,
            e[10] = r,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            e
        },
        rotationY: function(t, e) {
            e = e || new Ha(16);
            const r = Aa(t)
              , n = wa(t);
            return e[0] = r,
            e[1] = 0,
            e[2] = -n,
            e[3] = 0,
            e[4] = 0,
            e[5] = 1,
            e[6] = 0,
            e[7] = 0,
            e[8] = n,
            e[9] = 0,
            e[10] = r,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            e
        },
        rotationZ: function(t, e) {
            e = e || new Ha(16);
            const r = Aa(t)
              , n = wa(t);
            return e[0] = r,
            e[1] = n,
            e[2] = 0,
            e[3] = 0,
            e[4] = -n,
            e[5] = r,
            e[6] = 0,
            e[7] = 0,
            e[8] = 0,
            e[9] = 0,
            e[10] = 1,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            e
        },
        scale: function(t, e, r) {
            r = r || new Ha(16);
            const n = e[0]
              , i = e[1]
              , a = e[2];
            return r[0] = n * t[0],
            r[1] = n * t[1],
            r[2] = n * t[2],
            r[3] = n * t[3],
            r[4] = i * t[4],
            r[5] = i * t[5],
            r[6] = i * t[6],
            r[7] = i * t[7],
            r[8] = a * t[8],
            r[9] = a * t[9],
            r[10] = a * t[10],
            r[11] = a * t[11],
            t !== r && (r[12] = t[12],
            r[13] = t[13],
            r[14] = t[14],
            r[15] = t[15]),
            r
        },
        scaling: function(t, e) {
            return (e = e || new Ha(16))[0] = t[0],
            e[1] = 0,
            e[2] = 0,
            e[3] = 0,
            e[4] = 0,
            e[5] = t[1],
            e[6] = 0,
            e[7] = 0,
            e[8] = 0,
            e[9] = 0,
            e[10] = t[2],
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            e
        },
        setAxis: function(t, e, r, n) {
            n !== t && (n = l(t, n));
            const i = 4 * r;
            return n[i + 0] = e[0],
            n[i + 1] = e[1],
            n[i + 2] = e[2],
            n
        },
        setDefaultType: function(t) {
            const e = Ha;
            return Ha = t,
            e
        },
        setTranslation: function(t, e, r) {
            return t !== (r = r || c()) && (r[0] = t[0],
            r[1] = t[1],
            r[2] = t[2],
            r[3] = t[3],
            r[4] = t[4],
            r[5] = t[5],
            r[6] = t[6],
            r[7] = t[7],
            r[8] = t[8],
            r[9] = t[9],
            r[10] = t[10],
            r[11] = t[11]),
            r[12] = e[0],
            r[13] = e[1],
            r[14] = e[2],
            r[15] = 1,
            r
        },
        transformDirection: d,
        transformNormal: function(t, e, r) {
            r = r || n();
            const i = h(t)
              , a = e[0]
              , o = e[1]
              , s = e[2];
            return r[0] = a * i[0] + o * i[1] + s * i[2],
            r[1] = a * i[4] + o * i[5] + s * i[6],
            r[2] = a * i[8] + o * i[9] + s * i[10],
            r
        },
        transformPoint: f,
        translate: function(t, e, r) {
            r = r || new Ha(16);
            const n = e[0]
              , i = e[1]
              , a = e[2]
              , o = t[0]
              , s = t[1]
              , u = t[2]
              , l = t[3]
              , c = t[4]
              , h = t[5]
              , f = t[6]
              , d = t[7]
              , b = t[8]
              , m = t[9]
              , p = t[10]
              , g = t[11]
              , _ = t[12]
              , v = t[13]
              , x = t[14]
              , y = t[15];
            return t !== r && (r[0] = o,
            r[1] = s,
            r[2] = u,
            r[3] = l,
            r[4] = c,
            r[5] = h,
            r[6] = f,
            r[7] = d,
            r[8] = b,
            r[9] = m,
            r[10] = p,
            r[11] = g),
            r[12] = o * n + c * i + b * a + _,
            r[13] = s * n + h * i + m * a + v,
            r[14] = u * n + f * i + p * a + x,
            r[15] = l * n + d * i + g * a + y,
            r
        },
        translation: function(t, e) {
            return (e = e || new Ha(16))[0] = 1,
            e[1] = 0,
            e[2] = 0,
            e[3] = 0,
            e[4] = 0,
            e[5] = 1,
            e[6] = 0,
            e[7] = 0,
            e[8] = 0,
            e[9] = 0,
            e[10] = 1,
            e[11] = 0,
            e[12] = t[0],
            e[13] = t[1],
            e[14] = t[2],
            e[15] = 1,
            e
        },
        transpose: function(t, e) {
            if ((e = e || new Ha(16)) === t) {
                let r;
                return r = t[1],
                t[1] = t[4],
                t[4] = r,
                r = t[2],
                t[2] = t[8],
                t[8] = r,
                r = t[3],
                t[3] = t[12],
                t[12] = r,
                r = t[6],
                t[6] = t[9],
                t[9] = r,
                r = t[7],
                t[7] = t[13],
                t[13] = r,
                r = t[11],
                t[11] = t[14],
                t[14] = r,
                e
            }
            const r = t[0]
              , n = t[1]
              , i = t[2]
              , a = t[3]
              , o = t[4]
              , s = t[5]
              , u = t[6]
              , l = t[7]
              , c = t[8]
              , h = t[9]
              , f = t[10]
              , d = t[11]
              , b = t[12]
              , m = t[13]
              , p = t[14]
              , g = t[15];
            return e[0] = r,
            e[1] = o,
            e[2] = c,
            e[3] = b,
            e[4] = n,
            e[5] = s,
            e[6] = h,
            e[7] = m,
            e[8] = i,
            e[9] = u,
            e[10] = f,
            e[11] = p,
            e[12] = a,
            e[13] = l,
            e[14] = d,
            e[15] = g,
            e
        }
    });
    const ja = 5120
      , qa = 5121
      , Ga = 5122
      , Xa = 5123
      , Ya = 5124
      , Wa = 5125
      , Za = 5126
      , Ja = {};
    {
        const t = Ja;
        t[ja] = Int8Array,
        t[qa] = Uint8Array,
        t[Ga] = Int16Array,
        t[Xa] = Uint16Array,
        t[Ya] = Int32Array,
        t[Wa] = Uint32Array,
        t[Za] = Float32Array,
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
    const Ka = "undefined" == typeof SharedArrayBuffer ? function(t) {
        return t && t.buffer && t.buffer instanceof ArrayBuffer
    }
    : function(t) {
        return t && t.buffer && (t.buffer instanceof ArrayBuffer || t.buffer instanceof SharedArrayBuffer)
    }
    ;
    Object.freeze({
        __proto__: null,
        getGLTypeForTypedArray: b,
        getGLTypeForTypedArrayType: m,
        getTypedArrayTypeForGLType: p,
        isArrayBuffer: Ka
    });
    const Qa = 35044
      , $a = 34962
      , to = 34963
      , eo = 34660
      , ro = 5120
      , no = 5121
      , io = 5122
      , ao = 5123
      , oo = 5124
      , so = 5125
      , uo = 5126
      , lo = {
        attribPrefix: ""
    }
      , co = /coord|texture/i
      , ho = /color|colour/i
      , fo = ["position", "positions", "a_position"];
    Object.freeze({
        __proto__: null,
        createAttribsFromArrays: C,
        createBuffersFromArrays: I,
        createBufferFromArray: M,
        createBufferFromTypedArray: w,
        createBufferInfoFromArrays: R,
        setAttribInfoBufferFromArray: function(t, e, r, n) {
            r = k(r),
            void 0 === n ? T(t, $a, e.buffer, r, e.drawType) : (t.bindBuffer($a, e.buffer),
            t.bufferSubData($a, n, r))
        },
        setAttributePrefix: function(t) {
            lo.attribPrefix = t
        },
        setAttributeDefaults_: function(t) {
            g(t, lo)
        },
        getNumComponents_: F,
        getArray_: E
    });
    const bo = E
      , mo = [[3, 7, 5, 1], [6, 2, 0, 4], [6, 7, 3, 2], [0, 1, 5, 4], [7, 6, 4, 5], [2, 3, 1, 0]]
      , po = ["numComponents", "size", "type", "normalize", "stride", "offset", "attrib", "name", "attribName"]
      , go = rt(Z)
      , _o = et(Z)
      , vo = rt(X)
      , xo = et(X)
      , yo = rt(q)
      , To = et(q)
      , wo = rt(G)
      , Ao = et(G)
      , Eo = rt(Y)
      , So = et(Y)
      , Fo = rt(j)
      , ko = et(j)
      , Co = rt(J)
      , Do = et(J)
      , Ro = rt(K)
      , Mo = et(K)
      , Io = rt(Q)
      , Po = et(Q)
      , Bo = rt(tt)
      , Uo = et(tt);
    Object.freeze({
        __proto__: null,
        create3DFBufferInfo: go,
        create3DFBuffers: _o,
        create3DFVertices: Z,
        createAugmentedTypedArray: B,
        createCubeBufferInfo: vo,
        createCubeBuffers: xo,
        createCubeVertices: X,
        createPlaneBufferInfo: yo,
        createPlaneBuffers: To,
        createPlaneVertices: q,
        createSphereBufferInfo: wo,
        createSphereBuffers: Ao,
        createSphereVertices: G,
        createTruncatedConeBufferInfo: Eo,
        createTruncatedConeBuffers: So,
        createTruncatedConeVertices: Y,
        createXYQuadBufferInfo: Fo,
        createXYQuadBuffers: ko,
        createXYQuadVertices: j,
        createCresentBufferInfo: Co,
        createCresentBuffers: Do,
        createCresentVertices: J,
        createCrescentBufferInfo: Co,
        createCrescentBuffers: Do,
        createCrescentVertices: J,
        createCylinderBufferInfo: Ro,
        createCylinderBuffers: Mo,
        createCylinderVertices: K,
        createTorusBufferInfo: Io,
        createTorusBuffers: Po,
        createTorusVertices: Q,
        createDiscBufferInfo: Bo,
        createDiscBuffers: Uo,
        createDiscVertices: tt,
        deindexVertices: function(t) {
            const e = t.indices
              , r = {}
              , n = e.length;
            return Object.keys(t).filter(U).forEach((function(i) {
                const a = t[i]
                  , o = a.numComponents
                  , s = B(o, n, a.constructor);
                for (let t = 0; t < n; ++t) {
                    const r = e[t];
                    for (let t = 0; t < o; ++t)
                        s.push(a[r * o + t])
                }
                r[i] = s
            }
            )),
            r
        },
        flattenNormals: function(t) {
            if (t.indices)
                throw new Error("can not flatten normals of indexed vertices. deindex them first");
            const e = t.normal
              , r = e.length;
            for (let t = 0; t < r; t += 9) {
                const r = e[t + 0]
                  , n = e[t + 1]
                  , i = e[t + 2]
                  , a = e[t + 3]
                  , o = e[t + 4]
                  , s = e[t + 5];
                let u = r + a + e[t + 6]
                  , l = n + o + e[t + 7]
                  , c = i + s + e[t + 8];
                const h = Fa(u * u + l * l + c * c);
                u /= h,
                l /= h,
                c /= h,
                e[t + 0] = u,
                e[t + 1] = l,
                e[t + 2] = c,
                e[t + 3] = u,
                e[t + 4] = l,
                e[t + 5] = c,
                e[t + 6] = u,
                e[t + 7] = l,
                e[t + 8] = c
            }
            return t
        },
        makeRandomVertexColors: function(t, e) {
            e = e || {};
            const r = t.position.numElements
              , n = B(4, r, Uint8Array)
              , i = e.rand || function(t, e) {
                return 3 > e ? function(t) {
                    return 0 | Math.random() * t
                }(256) : 255
            }
            ;
            if (t.color = n,
            t.indices)
                for (let t = 0; t < r; ++t)
                    n.push(i(t, 0), i(t, 1), i(t, 2), i(t, 3));
            else {
                const t = e.vertsPerColor || 3;
                for (let e = 0; e < r / t; ++e) {
                    const r = [i(e, 0), i(e, 1), i(e, 2), i(e, 3)];
                    for (let e = 0; e < t; ++e)
                        n.push(r)
                }
            }
            return t
        },
        reorientDirections: L,
        reorientNormals: V,
        reorientPositions: N,
        reorientVertices: H,
        concatVertices: function(t) {
            function e(e) {
                let r, n = 0;
                for (let i = 0; i < t.length; ++i) {
                    const a = t[i][e];
                    n += bo(a).length,
                    (!r || a.data) && (r = a)
                }
                return {
                    length: n,
                    spec: r
                }
            }
            function r(e, r, n) {
                let i = 0
                  , a = 0;
                for (let o = 0; o < t.length; ++o) {
                    const s = t[o][e]
                      , u = bo(s);
                    "indices" === e ? (nt(u, n, a, i),
                    i += r[o]) : nt(u, n, a),
                    a += u.length
                }
            }
            const n = {};
            let i;
            for (let e = 0; e < t.length; ++e) {
                const r = t[e];
                Object.keys(r).forEach((function(t) {
                    n[t] || (n[t] = []),
                    i || "indices" === t || (i = t);
                    const e = r[t]
                      , a = F(e, t)
                      , o = bo(e).length / a;
                    n[t].push(o)
                }
                ))
            }
            const a = n[i]
              , o = {};
            return Object.keys(n).forEach((function(t) {
                const n = e(t)
                  , i = it(n.spec, n.length);
                r(t, a, bo(i)),
                o[t] = i
            }
            )),
            o
        },
        duplicateVertices: function(t) {
            const e = {};
            return Object.keys(t).forEach((function(r) {
                const n = t[r]
                  , i = bo(n)
                  , a = it(n, i.length);
                nt(i, bo(a), 0),
                e[r] = a
            }
            )),
            e
        }
    });
    const zo = function() {
        function t(t) {
            const n = t.constructor.name;
            if (!e[n]) {
                for (const e in t)
                    if ("number" == typeof t[e]) {
                        const n = r[t[e]];
                        r[t[e]] = n ? `${n} | ${e}` : e
                    }
                e[n] = !0
            }
        }
        const e = {}
          , r = {};
        return function(e, n) {
            return t(e),
            r[n] || "0x" + n.toString(16)
        }
    }();
    Object.freeze({
        __proto__: null,
        glEnumToString: zo,
        isWebGL1: function(t) {
            return !t.texStorage2D
        },
        isWebGL2: at
    });
    const Oo = {
        textureColor: new Uint8Array([128, 192, 255, 255]),
        textureOptions: {},
        crossOrigin: void 0
    }
      , Lo = Ka
      , Vo = function() {
        let t;
        return function() {
            return t = t || ("undefined" != typeof document && document.createElement ? document.createElement("canvas").getContext("2d") : null),
            t
        }
    }()
      , No = 6406
      , Ho = 6407
      , jo = 6408
      , qo = 6409
      , Go = 6410
      , Xo = 6402
      , Yo = 34041
      , Wo = 33071
      , Zo = 9728
      , Jo = 9729
      , Ko = 3553
      , Qo = 34067
      , $o = 32879
      , ts = 35866
      , es = 34069
      , rs = 34070
      , ns = 34071
      , is = 34072
      , as = 34073
      , os = 34074
      , ss = 10241
      , us = 10240
      , ls = 10242
      , cs = 10243
      , hs = 32882
      , fs = 33082
      , ds = 33083
      , bs = 33084
      , ms = 33085
      , ps = 3317
      , gs = 3314
      , _s = 32878
      , vs = 3316
      , xs = 3315
      , ys = 32877
      , Ts = 37443
      , ws = 37441
      , As = 37440
      , Es = 33321
      , Ss = 36756
      , Fs = 33325
      , ks = 33326
      , Cs = 33330
      , Ds = 33329
      , Rs = 33338
      , Ms = 33337
      , Is = 33340
      , Ps = 33339
      , Bs = 33323
      , Us = 36757
      , zs = 33327
      , Os = 33328
      , Ls = 33336
      , Vs = 33335
      , Ns = 33332
      , Hs = 33331
      , js = 33334
      , qs = 33333
      , Gs = 32849
      , Xs = 35905
      , Ys = 36194
      , Ws = 36758
      , Zs = 35898
      , Js = 35901
      , Ks = 34843
      , Qs = 34837
      , $s = 36221
      , tu = 36239
      , eu = 36215
      , ru = 36233
      , nu = 36209
      , iu = 36227
      , au = 32856
      , ou = 35907
      , su = 36759
      , uu = 32855
      , lu = 32854
      , cu = 32857
      , hu = 34842
      , fu = 34836
      , du = 36220
      , bu = 36238
      , mu = 36975
      , pu = 36214
      , gu = 36232
      , _u = 36226
      , vu = 36208
      , xu = 33189
      , yu = 33190
      , Tu = 36012
      , wu = 36013
      , Au = 35056
      , Eu = 5120
      , Su = 5121
      , Fu = 5122
      , ku = 5123
      , Cu = 5124
      , Du = 5125
      , Ru = 5126
      , Mu = 32819
      , Iu = 32820
      , Pu = 33635
      , Bu = 5131
      , Uu = 36193
      , zu = 33640
      , Ou = 35899
      , Lu = 35902
      , Vu = 36269
      , Nu = 34042
      , Hu = 33319
      , ju = 33320
      , qu = 6403
      , Gu = 36244
      , Xu = 36248
      , Yu = 36249
      , Wu = {};
    {
        const t = Wu;
        t[No] = {
            numColorComponents: 1
        },
        t[qo] = {
            numColorComponents: 1
        },
        t[Go] = {
            numColorComponents: 2
        },
        t[Ho] = {
            numColorComponents: 3
        },
        t[jo] = {
            numColorComponents: 4
        },
        t[qu] = {
            numColorComponents: 1
        },
        t[Gu] = {
            numColorComponents: 1
        },
        t[Hu] = {
            numColorComponents: 2
        },
        t[ju] = {
            numColorComponents: 2
        },
        t[Ho] = {
            numColorComponents: 3
        },
        t[Xu] = {
            numColorComponents: 3
        },
        t[jo] = {
            numColorComponents: 4
        },
        t[Yu] = {
            numColorComponents: 4
        },
        t[Xo] = {
            numColorComponents: 1
        },
        t[Yo] = {
            numColorComponents: 2
        }
    }
    let Zu;
    const Ju = {};
    Object.freeze({
        __proto__: null,
        setTextureDefaults_: function(t) {
            g(t, Oo),
            t.textureColor && bt(t.textureColor)
        },
        createSampler: Tt,
        createSamplers: function(t, e) {
            const r = {};
            return Object.keys(e).forEach((function(n) {
                r[n] = Tt(t, e[n])
            }
            )),
            r
        },
        setSamplerParameters: yt,
        createTexture: Ut,
        setEmptyTexture: Bt,
        setTextureFromArray: Pt,
        loadTextureFromUrl: It,
        setTextureFromElement: Ft,
        setTextureFilteringForSize: wt,
        setTextureParameters: xt,
        setDefaultTextureColor: bt,
        createTextures: function(t, e, r) {
            function n() {
                0 === i && setTimeout((function() {
                    r(a.length ? a : void 0, o, s)
                }
                ), 0)
            }
            r = r || kt;
            let i = 0;
            const a = []
              , o = {}
              , s = {};
            return Object.keys(e).forEach((function(r) {
                const u = e[r];
                let l;
                (function(t) {
                    return "string" == typeof t || Array.isArray(t) && "string" == typeof t[0]
                }
                )(u.src) && (l = function(t, e, o) {
                    s[r] = o,
                    --i,
                    t && a.push(t),
                    n()
                }
                ,
                ++i),
                o[r] = Ut(t, u, l)
            }
            )),
            n(),
            o
        },
        resizeTexture: zt,
        canGenerateMipmap: ct,
        canFilter: ht,
        getNumComponentsForFormat: function(t) {
            const e = Wu[t];
            if (!e)
                throw "unknown format: " + t;
            return e.numColorComponents
        },
        getBytesPerElementForInternalFormat: st,
        getFormatAndTypeForInternalFormat: ut
    });
    const Ku = _
      , Qu = function(...t) {
        console.warn(...t)
    }
      , $u = 33984
      , tl = 34962
      , el = 34963
      , rl = 35345
      , nl = 35982
      , il = 35713
      , al = 35714
      , ol = 35632
      , sl = 35633
      , ul = 35981
      , ll = 35718
      , cl = 35721
      , hl = 35971
      , fl = 35382
      , dl = 35396
      , bl = 35398
      , ml = 35392
      , pl = 35395
      , gl = 5126
      , _l = 5124
      , vl = 5125
      , xl = 34067
      , yl = 35866
      , Tl = {};
    Tl[gl] = {
        Type: Float32Array,
        size: 4,
        setter: function(t, e) {
            return function(r) {
                t.uniform1f(e, r)
            }
        },
        arraySetter: function(t, e) {
            return function(r) {
                t.uniform1fv(e, r)
            }
        }
    },
    Tl[35664] = {
        Type: Float32Array,
        size: 8,
        setter: function(t, e) {
            return function(r) {
                t.uniform2fv(e, r)
            }
        }
    },
    Tl[35665] = {
        Type: Float32Array,
        size: 12,
        setter: function(t, e) {
            return function(r) {
                t.uniform3fv(e, r)
            }
        }
    },
    Tl[35666] = {
        Type: Float32Array,
        size: 16,
        setter: function(t, e) {
            return function(r) {
                t.uniform4fv(e, r)
            }
        }
    },
    Tl[_l] = {
        Type: Int32Array,
        size: 4,
        setter: Vt,
        arraySetter: Nt
    },
    Tl[35667] = {
        Type: Int32Array,
        size: 8,
        setter: Ht
    },
    Tl[35668] = {
        Type: Int32Array,
        size: 12,
        setter: jt
    },
    Tl[35669] = {
        Type: Int32Array,
        size: 16,
        setter: qt
    },
    Tl[vl] = {
        Type: Uint32Array,
        size: 4,
        setter: function(t, e) {
            return function(r) {
                t.uniform1ui(e, r)
            }
        },
        arraySetter: function(t, e) {
            return function(r) {
                t.uniform1uiv(e, r)
            }
        }
    },
    Tl[36294] = {
        Type: Uint32Array,
        size: 8,
        setter: function(t, e) {
            return function(r) {
                t.uniform2uiv(e, r)
            }
        }
    },
    Tl[36295] = {
        Type: Uint32Array,
        size: 12,
        setter: function(t, e) {
            return function(r) {
                t.uniform3uiv(e, r)
            }
        }
    },
    Tl[36296] = {
        Type: Uint32Array,
        size: 16,
        setter: function(t, e) {
            return function(r) {
                t.uniform4uiv(e, r)
            }
        }
    },
    Tl[35670] = {
        Type: Uint32Array,
        size: 4,
        setter: Vt,
        arraySetter: Nt
    },
    Tl[35671] = {
        Type: Uint32Array,
        size: 8,
        setter: Ht
    },
    Tl[35672] = {
        Type: Uint32Array,
        size: 12,
        setter: jt
    },
    Tl[35673] = {
        Type: Uint32Array,
        size: 16,
        setter: qt
    },
    Tl[35674] = {
        Type: Float32Array,
        size: 16,
        setter: function(t, e) {
            return function(r) {
                t.uniformMatrix2fv(e, !1, r)
            }
        }
    },
    Tl[35675] = {
        Type: Float32Array,
        size: 36,
        setter: function(t, e) {
            return function(r) {
                t.uniformMatrix3fv(e, !1, r)
            }
        }
    },
    Tl[35676] = {
        Type: Float32Array,
        size: 64,
        setter: function(t, e) {
            return function(r) {
                t.uniformMatrix4fv(e, !1, r)
            }
        }
    },
    Tl[35685] = {
        Type: Float32Array,
        size: 24,
        setter: function(t, e) {
            return function(r) {
                t.uniformMatrix2x3fv(e, !1, r)
            }
        }
    },
    Tl[35686] = {
        Type: Float32Array,
        size: 32,
        setter: function(t, e) {
            return function(r) {
                t.uniformMatrix2x4fv(e, !1, r)
            }
        }
    },
    Tl[35687] = {
        Type: Float32Array,
        size: 24,
        setter: function(t, e) {
            return function(r) {
                t.uniformMatrix3x2fv(e, !1, r)
            }
        }
    },
    Tl[35688] = {
        Type: Float32Array,
        size: 48,
        setter: function(t, e) {
            return function(r) {
                t.uniformMatrix3x4fv(e, !1, r)
            }
        }
    },
    Tl[35689] = {
        Type: Float32Array,
        size: 32,
        setter: function(t, e) {
            return function(r) {
                t.uniformMatrix4x2fv(e, !1, r)
            }
        }
    },
    Tl[35690] = {
        Type: Float32Array,
        size: 48,
        setter: function(t, e) {
            return function(r) {
                t.uniformMatrix4x3fv(e, !1, r)
            }
        }
    },
    Tl[35678] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: 3553
    },
    Tl[35680] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: xl
    },
    Tl[35679] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: 32879
    },
    Tl[35682] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: 3553
    },
    Tl[36289] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: yl
    },
    Tl[36292] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: yl
    },
    Tl[36293] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: xl
    },
    Tl[36298] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: 3553
    },
    Tl[36299] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: 32879
    },
    Tl[36300] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: xl
    },
    Tl[36303] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: yl
    },
    Tl[36306] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: 3553
    },
    Tl[36307] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: 32879
    },
    Tl[36308] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: xl
    },
    Tl[36311] = {
        Type: null,
        size: 0,
        setter: Gt,
        arraySetter: Xt,
        bindPoint: yl
    };
    const wl = {};
    wl[gl] = {
        size: 4,
        setter: Yt
    },
    wl[35664] = {
        size: 8,
        setter: Yt
    },
    wl[35665] = {
        size: 12,
        setter: Yt
    },
    wl[35666] = {
        size: 16,
        setter: Yt
    },
    wl[_l] = {
        size: 4,
        setter: Wt
    },
    wl[35667] = {
        size: 8,
        setter: Wt
    },
    wl[35668] = {
        size: 12,
        setter: Wt
    },
    wl[35669] = {
        size: 16,
        setter: Wt
    },
    wl[vl] = {
        size: 4,
        setter: Zt
    },
    wl[36294] = {
        size: 8,
        setter: Zt
    },
    wl[36295] = {
        size: 12,
        setter: Zt
    },
    wl[36296] = {
        size: 16,
        setter: Zt
    },
    wl[35670] = {
        size: 4,
        setter: Wt
    },
    wl[35671] = {
        size: 8,
        setter: Wt
    },
    wl[35672] = {
        size: 12,
        setter: Wt
    },
    wl[35673] = {
        size: 16,
        setter: Wt
    },
    wl[35674] = {
        size: 4,
        setter: Jt,
        count: 2
    },
    wl[35675] = {
        size: 9,
        setter: Jt,
        count: 3
    },
    wl[35676] = {
        size: 16,
        setter: Jt,
        count: 4
    };
    const Al = /^[ \t]*\n/
      , El = ["VERTEX_SHADER", "FRAGMENT_SHADER"]
      , Sl = /\[\d+\]\.$/;
    Object.freeze({
        __proto__: null,
        createAttributeSetters: fe,
        createProgram: ee,
        createProgramFromScripts: function(t, e, r, n, i) {
            const a = Qt(r, n, i)
              , o = [];
            for (let r = 0; r < e.length; ++r) {
                const n = re(t, e[r], t[El[r]], a.errorCallback);
                if (!n)
                    return null;
                o.push(n)
            }
            return ee(t, o, a)
        },
        createProgramFromSources: ne,
        createProgramInfo: pe,
        createProgramInfoFromProgram: me,
        createUniformSetters: ae,
        createUniformBlockSpecFromProgram: ue,
        createUniformBlockInfoFromProgram: le,
        createUniformBlockInfo: function(t, e, r) {
            return le(t, e.program, e.uniformBlockSpec, r)
        },
        createTransformFeedback: function(t, e, r) {
            const n = t.createTransformFeedback();
            return t.bindTransformFeedback(36386, n),
            t.useProgram(e.program),
            se(t, e, r),
            t.bindTransformFeedback(36386, null),
            n
        },
        createTransformFeedbackInfo: oe,
        bindTransformFeedbackInfo: se,
        setAttributes: de,
        setBuffersAndAttributes: be,
        setUniforms: he,
        setUniformsAndBindTextures: he,
        setUniformBlock: function(t, e, r) {
            ce(t, e, r) && t.bufferData(rl, r.array, 35048)
        },
        setBlockUniforms: function(t, e) {
            const r = t.uniforms;
            for (const t in e) {
                const n = r[t];
                if (n) {
                    const r = e[t];
                    r.length ? n.set(r) : n[0] = r
                }
            }
        },
        bindUniformBlock: ce
    });
    const Fl = 4
      , kl = 5123;
    Object.freeze({
        __proto__: null,
        drawBufferInfo: ge,
        drawObjectList: function(t, e) {
            let r = null
              , n = null;
            e.forEach((function(e) {
                if (!1 === e.active)
                    return;
                const i = e.programInfo
                  , a = e.vertexArrayInfo || e.bufferInfo;
                let o = !1;
                const s = void 0 === e.type ? Fl : e.type;
                i !== r && (r = i,
                t.useProgram(i.program),
                o = !0),
                (o || a !== n) && (n && n.vertexArrayObject && !a.vertexArrayObject && t.bindVertexArray(null),
                n = a,
                be(t, i, a)),
                he(i, e.uniforms),
                ge(t, a, s, e.count, e.offset, e.instanceCount)
            }
            )),
            n && n.vertexArrayObject && t.bindVertexArray(null)
        }
    });
    const Cl = 36161
      , Dl = [{
        format: 6408,
        type: 5121,
        min: 9729,
        wrap: 33071
    }, {
        format: 34041
    }]
      , Rl = {
        34041: 33306,
        6401: 36128,
        36168: 36128,
        6402: 36096,
        33189: 36096
    }
      , Ml = {
        32854: !0,
        32855: !0,
        36194: !0,
        34041: !0,
        33189: !0,
        6401: !0,
        36168: !0
    };
    Object.freeze({
        __proto__: null,
        bindFramebufferInfo: function(t, e, r) {
            r = r || 36160,
            e ? (t.bindFramebuffer(r, e.framebuffer),
            t.viewport(0, 0, e.width, e.height)) : (t.bindFramebuffer(r, null),
            t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight))
        },
        createFramebufferInfo: function(t, e, r, n) {
            const i = 36160
              , a = t.createFramebuffer();
            t.bindFramebuffer(i, a),
            r = r || t.drawingBufferWidth,
            n = n || t.drawingBufferHeight;
            let o = 0;
            const s = {
                framebuffer: a,
                attachments: [],
                width: r,
                height: n
            };
            return (e = e || Dl).forEach((function(e) {
                let a = e.attachment;
                const u = e.format;
                let l = function(t) {
                    return Rl[t]
                }(u);
                if (l || (l = 36064 + o++),
                !a)
                    if (function(t) {
                        return Ml[t]
                    }(u))
                        a = t.createRenderbuffer(),
                        t.bindRenderbuffer(Cl, a),
                        t.renderbufferStorage(Cl, u, r, n);
                    else {
                        const i = Object.assign({}, e);
                        i.width = r,
                        i.height = n,
                        void 0 === i.auto && (i.auto = !1,
                        i.min = i.min || i.minMag || 9729,
                        i.mag = i.mag || i.minMag || 9729,
                        i.wrapS = i.wrapS || i.wrap || 33071,
                        i.wrapT = i.wrapT || i.wrap || 33071),
                        a = Ut(t, i)
                    }
                if (v(0, a))
                    t.framebufferRenderbuffer(i, l, Cl, a);
                else {
                    if (!y(0, a))
                        throw new Error("unknown attachment type");
                    void 0 === e.layer ? t.framebufferTexture2D(i, l, e.target || 3553, a, e.level || 0) : t.framebufferTextureLayer(i, l, a, e.level || 0, e.layer)
                }
                s.attachments.push(a)
            }
            )),
            s
        },
        resizeFramebufferInfo: function(t, e, r, n, i) {
            n = n || t.drawingBufferWidth,
            i = i || t.drawingBufferHeight,
            e.width = n,
            e.height = i,
            (r = r || Dl).forEach((function(r, a) {
                const o = e.attachments[a]
                  , s = r.format;
                if (v(0, o))
                    t.bindRenderbuffer(Cl, o),
                    t.renderbufferStorage(Cl, s, n, i);
                else {
                    if (!y(0, o))
                        throw new Error("unknown attachment type");
                    zt(t, o, r, n, i)
                }
            }
            ))
        }
    });
    const Il = 34963;
    Object.freeze({
        __proto__: null,
        createVertexArrayInfo: function(t, e, r) {
            const n = t.createVertexArray();
            return t.bindVertexArray(n),
            e.length || (e = [e]),
            e.forEach((function(e) {
                be(t, e, r)
            }
            )),
            t.bindVertexArray(null),
            {
                numElements: r.numElements,
                elementType: r.elementType,
                vertexArrayObject: n
            }
        },
        createVAOAndSetAttributes: _e,
        createVAOFromBufferInfo: function(t, e, r) {
            return _e(t, e.attribSetters || e, r.attribs, r.indices)
        }
    });
    var Pl = {};
    const Bl = {
        position: 3,
        normal: 3,
        tangent: 3,
        texcoord: 2,
        texcoord0: 2,
        texcoord1: 2,
        texcoord2: 2
    };
    var Ul = {};
    class zl {
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
            var r = {};
            for (let i in e) {
                var n = e[i];
                void 0 === n.loc || (void 0 === this.attribs[n.loc] && t.enableVertexAttribArray(n.loc),
                t.vertexAttribPointer(n.loc, n.size, n.type, !1, n.stride, n.offset),
                r[n.loc] = n.loc,
                this.attribs[i] = null)
            }
            for (let t in this.attribs)
                ;
            this.attribs = r
        }
    }
    class Ol {
        static CreateProgramAttributes(t, e) {
            var r = {}
              , n = 0;
            for (let o in e) {
                var i = e[o]
                  , a = Bl[o];
                r[i] = {
                    type: t.FLOAT,
                    size: a,
                    offset: 4 * n
                },
                n += a
            }
            for (let t in r)
                r[t].stride = 4 * n;
            return r
        }
        CleanUpPrograms() {
            Ul = {}
        }
        ReleaseProgram() {}
        static _GetProgram(t) {
            return Ul[t]
        }
        static RegisterProgram(t, e) {
            if (!Ul[t]) {
                var r = e.shaders;
                Ul[t] = {
                    shaders: [r[0], r[1]],
                    attributes: e.attributes
                }
            }
            return Ul[t]
        }
        static GetProgram(t, e, r, n) {
            var i = Ul[e]
              , a = "";
            for (var o in r)
                a += o + ":" + r[o] + "-";
            if (!i) {
                var s = e.split(".")
                  , u = Pl[s[0]][s[1]];
                u && (i = Ol.RegisterProgram(e, u))
            }
            if (!i)
                throw "Program not registered: " + s;
            i.programInfo || (i.programInfo = {}),
            i.programInfo[a] = Ol.CompileProgram(t, i.shaders, r),
            n = n || i.attributes && Ol.CreateProgramAttributes(t, i.attributes);
            var l = i.programInfo[a];
            if (n)
                for (var o in n) {
                    var c = l.attribSetters[o];
                    c && (n[o] = n[o] || {},
                    n[o].loc = c.location)
                }
            return l.attributes = n,
            l
        }
        static CompileProgram(t, e, r, n) {
            var i = "";
            for (var a in r) {
                var o = r[a];
                i = "#define " + a + " " + (null === o ? "" : o) + "\n"
            }
            var s = {};
            const u = pe(t, [i + e[0], i + e[1]], null, null);
            if (n)
                for (var a in n) {
                    var l = u.attribSetters[a];
                    l && (n[a] = n[a] || {},
                    n[a].loc = l.location)
                }
            for (var a in u.uniformSetters)
                s[a] = u.uniformSetters[a].location;
            return u.uniforms = s,
            u
        }
    }
    var Ll = new Ol
      , Vl = 1e-6
      , Nl = "undefined" == typeof Float32Array ? Array : Float32Array
      , Hl = Math.random;
    va || (va = function() {
        for (var t = 0, e = arguments.length; e--; )
            t += arguments[e] * arguments[e];
        return Fa(t)
    }
    );
    var jl = De
      , ql = qe
      , Gl = ar
      , Xl = Br
      , Yl = Yr
      , Wl = Wr
      , Zl = Zr
      , Jl = nn
      , Kl = an
      , Ql = Hr
      , $l = on
      , tc = function() {
        var t = Vr();
        return function(e, r, n, i, a, o) {
            var s, u;
            for (r || (r = 3),
            n || (n = 0),
            u = i ? ka(i * r + n, e.length) : e.length,
            s = n; s < u; s += r)
                t[0] = e[s],
                t[1] = e[s + 1],
                t[2] = e[s + 2],
                a(t, t, o),
                e[s] = t[0],
                e[s + 1] = t[1],
                e[s + 2] = t[2];
            return e
        }
    }()
      , ec = In
      , rc = Pn
      , nc = Bn
      , ic = jn
      , ac = qn
      , oc = Gn
      , sc = Xn
      , uc = function() {
        var t = Fn();
        return function(e, r, n, i, a, o) {
            var s, u;
            for (r || (r = 4),
            n || (n = 0),
            u = i ? ka(i * r + n, e.length) : e.length,
            s = n; s < u; s += r)
                t[0] = e[s],
                t[1] = e[s + 1],
                t[2] = e[s + 2],
                t[3] = e[s + 3],
                a(t, t, o),
                e[s] = t[0],
                e[s + 1] = t[1],
                e[s + 2] = t[2],
                e[s + 3] = t[3];
            return e
        }
    }()
      , lc = kn
      , cc = Cn
      , hc = Dn
      , fc = Rn
      , dc = Mn
      , bc = hi
      , mc = Nn
      , pc = Jn
      , gc = Qn
      , _c = Gn
      , vc = _c
      , xc = Xn
      , yc = xc
      , Tc = Zn
      , wc = ii
      , Ac = ai
      , Ec = function() {
        var t = Vr()
          , e = jr(1, 0, 0)
          , r = jr(0, 1, 0);
        return function(n, i, a) {
            var o = cn(i, a);
            return -.999999 > o ? (hn(t, e, i),
            1e-6 > Ql(t) && hn(t, r, i),
            ln(t, t),
            ui(n, t, Math.PI),
            n) : .999999 < o ? (n[0] = 0,
            n[1] = 0,
            n[2] = 0,
            n[3] = 1,
            n) : (hn(t, i, a),
            n[0] = t[0],
            n[1] = t[1],
            n[2] = t[2],
            n[3] = 1 + o,
            Tc(n, n))
        }
    }()
      , Sc = function() {
        var t = oi()
          , e = oi();
        return function(r, n, i, a, o, s) {
            return vi(t, n, o, s),
            vi(e, i, a, s),
            vi(r, t, e, 2 * s * (1 - s)),
            r
        }
    }()
      , Fc = function() {
        var t = ve();
        return function(e, r, n, i) {
            return t[0] = n[0],
            t[3] = n[1],
            t[6] = n[2],
            t[1] = i[0],
            t[4] = i[1],
            t[7] = i[2],
            t[2] = -r[0],
            t[5] = -r[1],
            t[8] = -r[2],
            Tc(e, wi(e, t))
        }
    }()
      , kc = qi
      , Cc = Mi
      , Dc = Ii
      , Rc = Pi
      , Mc = Hi
      , Ic = ji
      , Pc = Gi
      , Bc = function() {
        var t = Si();
        return function(e, r, n, i, a, o) {
            var s, u;
            for (r || (r = 2),
            n || (n = 0),
            u = i ? ka(i * r + n, e.length) : e.length,
            s = n; s < u; s += r)
                t[0] = e[s],
                t[1] = e[s + 1],
                a(t, t, o),
                e[s] = t[0],
                e[s + 1] = t[1];
            return e
        }
    }();
    const Uc = {
        147259: !0
    }
      , zc = {
        28060: !0,
        28063: !0,
        28082: !0,
        41903: !0,
        42147: !0,
        44808: !0,
        45271: !0
    }
      , Oc = {
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
        }
    }
      , Lc = {
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
      , Vc = {
        MALE: 0,
        FEMALE: 1,
        0: "male",
        1: "female"
    }
      , Nc = 5
      , Hc = 15
      , jc = 21
      , qc = {
        1: "human",
        2: "orc",
        3: "dwarf",
        4: "nightelf",
        5: "scourge",
        6: "tauren",
        7: "gnome",
        8: "troll",
        9: "goblin",
        10: "bloodelf",
        11: "draenei",
        12: "felorc",
        13: "naga_",
        14: "broken",
        15: "skeleton",
        16: "vrykul",
        17: "tuskarr",
        18: "foresttroll",
        19: "taunka",
        20: "northrendskeleton",
        21: "icetroll",
        22: "worgen",
        23: "gilnean",
        24: "pandaren",
        25: "pandarena",
        26: "pandarenh",
        27: "nightborne",
        28: "highmountaintauren",
        29: "voidelf",
        30: "lightforgeddraenei",
        31: "zandalaritroll",
        32: "kultiran",
        33: "thinhuman",
        34: "darkirondwarf",
        35: "vulpera",
        36: "magharorc",
        37: "mechagnome"
    }
      , Gc = [0, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 21, 22, 22, 16, 21, 0, 19, 5, 21, 22, 22, 0, 21, 21, 27]
      , Xc = [0, 16, 0, 15, 1, 8, 10, 5, 6, 6, 7, 0, 0, 17, 18, 19, 14, 20, 0, 9, 8, 21, 22, 23, 0, 24, 25, 0]
      , Yc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      , Wc = [0, 2, 0, 4, 128, 128, 128, 128, 128, 128, 128, 0, 0, 1, 1, 1, 128, 1, 0, 128, 128, 1, 1, 1, 0, 1, 1, 2]
      , Zc = 1
      , Jc = 3
      , Kc = 4
      , Qc = 5
      , $c = 6
      , th = 7
      , eh = 8
      , rh = 9
      , nh = 10
      , ih = 13
      , ah = 14
      , oh = 15
      , sh = 16
      , uh = 19
      , lh = 20
      , ch = 21
      , hh = 22
      , fh = 23
      , dh = 26
      , bh = 1
      , mh = 10
      , ph = [13, 14, 15, 16, 17, 88, 89]
      , gh = [8, 9, 10, 11, 12, 86, 87]
      , _h = 3
      , vh = 5
      , xh = 7
      , yh = 12
      , Th = [{
        x: 0,
        y: 0,
        w: .5,
        h: .25
    }, {
        x: 0,
        y: .25,
        w: .5,
        h: .25
    }, {
        x: 0,
        y: .5,
        w: .5,
        h: .125
    }, {
        x: .5,
        y: 0,
        w: .5,
        h: .25
    }, {
        x: .5,
        y: .25,
        w: .5,
        h: .125
    }, {
        x: .5,
        y: .375,
        w: .5,
        h: .25
    }, {
        x: .5,
        y: .625,
        w: .5,
        h: .25
    }, {
        x: .5,
        y: .875,
        w: .5,
        h: .125
    }, {}, {
        x: 0,
        y: .625,
        w: .5,
        h: .125
    }, {
        x: 0,
        y: .75,
        w: .5,
        h: .25
    }, {}, {
        x: 0,
        y: 0,
        w: 1,
        h: 1
    }, {
        x: 0,
        y: 0,
        w: 1,
        h: 1
    }]
      , wh = [{
        x: 0,
        y: 0,
        w: .25,
        h: .25
    }, {
        x: 0,
        y: .25,
        w: .25,
        h: .25
    }, {
        x: 0,
        y: .5,
        w: .25,
        h: .125
    }, {
        x: .25,
        y: 0,
        w: .25,
        h: .25
    }, {
        x: .25,
        y: .25,
        w: .25,
        h: .125
    }, {
        x: .25,
        y: .375,
        w: .25,
        h: .25
    }, {
        x: .25,
        y: .625,
        w: .25,
        h: .25
    }, {
        x: .25,
        y: .875,
        w: .25,
        h: .125
    }, {
        x: .75,
        y: .75,
        w: .25,
        h: .25
    }, {
        x: .5,
        y: 0,
        w: .5,
        h: 1
    }, {
        x: .5,
        y: 0,
        w: .5,
        h: 1
    }, {
        x: .5,
        y: 0,
        w: .5,
        h: 1
    }, {
        x: 0,
        y: 0,
        w: .5,
        h: 1
    }, {
        x: 0,
        y: 0,
        w: 1,
        h: 1
    }, {
        x: 0,
        y: 0,
        w: .5,
        h: 1
    }]
      , Ah = {
        40: [5, 0, 5, 1, 5, 0, 5, 1],
        37: [7, 0, 7, 1, 7, 0, 7, 1],
        36: [2, 0, 2, 1, 2, 0, 2, 1],
        35: [9, 0, 9, 1, 9, 0, 9, 1],
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
        15: [5, 0, 5, 1, 5, 0, 5, 1]
    }
      , Eh = {
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
      , Sh = {
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
    };
    var Fh = class {
        constructor(t) {
            var e = this;
            e.a = Pa.fromValues(t.getFloat(), t.getFloat(), t.getFloat()),
            e.b = Ba.fromValues(t.getFloat(), t.getFloat(), t.getFloat(), 0),
            e.c = t.getFloat(),
            e.d = t.getFloat(),
            e.e = t.getFloat(),
            e.f = t.getFloat(),
            e.g = [t.getUint8(), t.getUint8(), t.getUint8(), t.getUint8()],
            e.h = [t.getUint8(), t.getUint8(), t.getUint8(), t.getUint8()],
            e.i = Pa.clone(e.a),
            e.j = Ba.clone(e.b)
        }
        l() {
            var t = this;
            t.a = null,
            t.b = null,
            t.g = null,
            t.h = null,
            t.i = null,
            t.j = null
        }
    }
      , kh = class {
        constructor(t) {
            var e = this;
            e.a = t.getUint16(),
            e.b = t.getUint16(),
            e.g = t.getUint32(),
            e.c = t.getUint32(),
            e.d = t.getUint16(),
            e.e = t.getUint16(),
            e.f = t.getUint16(),
            e.h = t.getInt16(),
            e.i = t.getUint16(),
            t.getBool() && (e.j = t.getString())
        }
        k() {}
    }
    ;
    class Ch {
        constructor() {
            this.a = -1,
            this.b = null,
            this.c = 0
        }
    }
    class Dh {
        constructor() {
            this.a = new Ch,
            this.b = new Ch,
            this.c = 0,
            this.d = !1
        }
    }
    class Rh {
        f() {
            var t = this;
            if (t.b)
                for (var e = 0; e < t.b.length; ++e)
                    t.b[e] = null;
            return t.a = null,
            t.b = null,
            null
        }
        k(t, e, r, n) {
            let i = this;
            if (null == n && (n = this.g()),
            0 <= this.d && (t = this.d < e.length ? e[this.d] : e[0]),
            0 != i.c || 1 < i.b.length) {
                if (1 < i.a.length) {
                    var a = i.a[i.a.length - 1];
                    0 < a && t > a && 0 > this.d && (t %= a);
                    for (var o = 0, s = i.a.length, u = 0; u < s; ++u)
                        if (t >= i.a[u] && t < i.a[u + 1]) {
                            o = u;
                            break
                        }
                    var l = i.a[o]
                      , c = i.a[o + 1]
                      , h = 0;
                    return l != c && (h = (t - l) / (c - l)),
                    1 == i.c ? i.h(i.b[o], i.b[o + 1], h, n) : n = i.i(n, i.b[o])
                }
                return 0 < i.b.length ? n = i.i(n, i.b[0]) : r
            }
            return 0 == i.b.length || (n = i.i(n, i.b[0])),
            n
        }
        l(t) {
            var e, r = this;
            r.c = t.getInt16(),
            r.d = t.getInt16(),
            r.e = t.getBool();
            var n = t.getInt32();
            for (r.a = Array(n),
            e = 0; e < n; ++e)
                r.a[e] = t.getInt32();
            var i = t.getInt32();
            for (r.b = Array(i),
            e = 0; e < i; ++e)
                r.b[e] = r.j(t)
        }
    }
    class Mh extends Rh {
        constructor(t) {
            super();
            this.ba = Pa.create(),
            this.l(t)
        }
        g() {
            return Pa.create()
        }
        h(t, e, r, n) {
            return Pa.lerp(n, t, e, r)
        }
        i(t, e) {
            return Pa.copy(t, e),
            t
        }
        j(t) {
            return Pa.set(Pa.create(), t.getFloat(), t.getFloat(), t.getFloat())
        }
    }
    class Ih extends Rh {
        constructor(t) {
            super();
            this.l(t),
            this.ba = Ua.create()
        }
        g() {
            return Ua.create()
        }
        h(t, e, r, n) {
            return Ua.slerp(n, t, e, r)
        }
        i(t, e) {
            return Ua.copy(t, e),
            t
        }
        j(t) {
            return Ua.set(Ua.create(), -t.getFloat(), -t.getFloat(), -t.getFloat(), t.getFloat())
        }
    }
    class Ph extends Rh {
        constructor(t) {
            super();
            this.l(t)
        }
        j(t) {
            return t.getUint16()
        }
        g() {
            return 0
        }
        h(t, e, r) {
            return t + (e - t) * r
        }
        i(t, e) {
            return e
        }
    }
    class Bh extends Ph {
        j(t) {
            return t.getFloat()
        }
    }
    class Uh extends Ph {
        j(t) {
            return t.getUint8()
        }
    }
    class zh {
        d() {
            for (var t = this, e = 0; e < t.b.length; ++e)
                t.b[e] = null;
            return t.a = null,
            t.b = null,
            t.c = null,
            null
        }
        i(t, e, r, n) {
            let i = this;
            r || (r = this.e());
            let a = n || i.b;
            if (1 < i.b.length && 1 < i.a.length) {
                var o = i.a[i.a.length - 1];
                0 < o && t > o && (t %= o);
                for (var s = 0, u = i.a.length, l = 0; l < u - 1; ++l)
                    if (t > i.a[l] && t <= i.a[l + 1]) {
                        s = l;
                        break
                    }
                var c = i.a[s]
                  , h = i.a[s + 1]
                  , f = 0;
                return c != h && (f = (t - c) / (h - c)),
                i.f(a[s], a[s + 1], f, r)
            }
            return 0 < a.length ? r = i.g(r, a[0]) : e
        }
        j(t) {
            var e, r = this, n = t.getInt32();
            for (r.a = Array(n),
            e = 0; e < n; ++e)
                r.a[e] = t.getInt16() / 32767;
            var i = t.getInt32();
            for (r.b = Array(i),
            e = 0; e < i; ++e)
                r.b[e] = r.h(t)
        }
    }
    class Oh extends zh {
        constructor(t) {
            super();
            this.ba = za.create(),
            this.j(t)
        }
        e() {
            return za.create()
        }
        f(t, e, r, n) {
            return za.lerp(n, t, e, r)
        }
        g(t, e) {
            return za.copy(t, e),
            t
        }
        h(t) {
            return za.set(za.create(), t.getFloat(), t.getFloat())
        }
    }
    class Lh extends zh {
        constructor(t) {
            super();
            this.j(t)
        }
        e() {
            return Pa.create()
        }
        f(t, e, r, n) {
            return Pa.lerp(n, t, e, r)
        }
        g(t, e) {
            return Pa.copy(t, e),
            t
        }
        h(t) {
            return Pa.set(Pa.create(), t.getFloat(), t.getFloat(), t.getFloat())
        }
    }
    class Vh extends zh {
        constructor(t) {
            super();
            this.j(t)
        }
        e() {
            return 0
        }
        f(t, e, r) {
            return t + (e - t) * r
        }
        g(t) {
            return t
        }
        h(t) {
            return t.getUint16()
        }
    }
    class Nh {
        constructor(t, e) {
            this.b(t, e)
        }
        b(t, e) {
            var r = t.getInt32();
            this.a = Array(r);
            for (let n = 0; n < r; ++n)
                this.a[n] = new e(t)
        }
        c(t) {
            return !(!this.a || 0 == this.a.length) && (t >= this.a.length && (t = 0),
            this.a[t].e)
        }
        d(t, e, r, n) {
            if (!this.a || 0 == this.a.length)
                return r;
            let i = t.a.a;
            i >= this.a.length && (i = 0);
            let a = this.a[i].k(t.a.c, e, r, n);
            if (0 < t.c && 1 > t.c) {
                let i = this.a[0].g()
                  , o = t.b.a;
                o >= this.a.length && (o = 0);
                let s = this.a[o].k(t.b.c, e, r, i);
                s || (s = i),
                i = this.a[0].g(),
                a = this.a[0].h(s, a, t.c, i),
                n && this.a[0].i(n, i)
            }
            return a
        }
        e() {
            if (this.a && 0 != this.a.length) {
                for (var t = 0; t < this.a.length; ++t)
                    this.a[t].f(),
                    this.a[t] = null;
                return null
            }
        }
    }
    var Hh = class {
        constructor(t, e, r) {
            this.t = null,
            this.u = null,
            this.v = null;
            var n = this;
            n.a = t,
            n.b = e,
            n.c = r.getInt32(),
            n.d = r.getUint32(),
            n.e = r.getInt16(),
            n.f = r.getUint16(),
            n.g = r.getUint32(),
            n.h = Pa.fromValues(r.getFloat(), r.getFloat(), r.getFloat()),
            n.i = new Nh(r,Mh),
            n.j = new Nh(r,Ih),
            n.k = new Nh(r,Mh),
            n.l = Pa.create(),
            n.m = Ia.create(),
            n.n = Pa.create(),
            n.o = Ua.create(),
            n.p = Ia.create(),
            n.q = !1,
            n.r = !1,
            n.s = !1
        }
        y() {
            var t = this;
            t.a = null,
            t.h = null,
            t.l = null,
            t.m = null,
            t.n = null,
            t.o = null,
            t.p = null,
            t.i.e(),
            t.j.e(),
            t.k.e(),
            t.i = null,
            t.j = null,
            t.k = null
        }
        z() {
            this.q = !0;
            for (var t = 0; 16 > t; ++t)
                this.m[t] = 0
        }
        A(t) {
            t ? (null == this.t && (this.t = new Dh),
            this.a.bs(t, this.t)) : this.t = null;
            let e = this.a.ah[this.b];
            for (let r = 0; r < e.length; r++)
                this.a.ao[e[r]].A(t)
        }
        B(t) {
            t ? (null == this.u && (this.u = new Dh),
            this.a.bs(t, this.u)) : this.u = null;
            let e = this.a.ah[this.b];
            for (let r = 0; r < e.length; r++)
                this.a.ao[e[r]].B(t)
        }
        C(t) {
            var e = this;
            if (e.q)
                return void e.z();
            if (null != this.t && this.a.bW(this.t, t),
            e.r || e.s)
                return;
            if (e.r = !0,
            !e.a)
                return;
            Ia.identity(e.m);
            var r = e.a.Q;
            if (!r)
                return;
            let n = Ia.create();
            if (Ia.multiply(n, n, this.a.aS.viewMatrix),
            Ia.multiply(n, n, this.a.T),
            Ia.multiply(e.m, e.m, n),
            -1 < e.e) {
                e.a.ao[e.e].C(t);
                let r = Ia.create();
                if (Ia.copy(r, e.a.ao[e.e].m),
                Ia.multiply(r, n, r),
                1 & e.d || 2 & e.d || 4 & e.d) {
                    if (4 & e.d && 2 & e.d)
                        ca(r, 0, la(n, 0)),
                        ca(r, 1, la(n, 1)),
                        ca(r, 2, la(n, 2));
                    else if (4 & e.d) {
                        {
                            let t = la(n, 0)
                              , e = Ba.length(t);
                            Ba.scale(t, t, Ba.length(la(r, 0)) / e),
                            ca(r, 0, t)
                        }
                        {
                            let t = la(n, 1)
                              , e = Ba.length(t);
                            Ba.scale(t, t, Ba.length(la(r, 1)) / e),
                            ca(r, 1, t)
                        }
                        {
                            let t = la(n, 2)
                              , e = Ba.length(t);
                            Ba.scale(t, t, Ba.length(la(r, 2)) / e),
                            ca(r, 2, t)
                        }
                    } else if (2 & e.d) {
                        {
                            let t = la(n, 0)
                              , e = Ba.length(la(r, 0));
                            Ba.scale(t, t, 1 / e),
                            Ba.scale(t, t, Ba.length(la(n, 0))),
                            ca(r, 0, t)
                        }
                        {
                            let t = la(n, 1)
                              , e = Ba.length(la(r, 1));
                            Ba.scale(t, t, 1 / e),
                            Ba.scale(t, t, Ba.length(la(n, 1))),
                            ca(r, 1, t)
                        }
                        {
                            let t = la(n, 2)
                              , e = Ba.length(la(r, 2));
                            Ba.scale(t, t, 1 / e),
                            Ba.scale(t, t, Ba.length(la(n, 2))),
                            ca(r, 2, t)
                        }
                    }
                    if (1 & e.d)
                        ca(r, 3, la(n, 3));
                    else {
                        let t = Ba.fromValues(e.h[0], e.h[1], e.h[2], 1)
                          , i = Ba.create();
                        Ba.copy(i, t),
                        i[3] = 0;
                        let a = Ba.create()
                          , o = Ba.create();
                        Ba.transformMat4(a, t, e.a.ao[e.e].m),
                        Ba.transformMat4(a, a, n),
                        Ba.transformMat4(o, i, r),
                        Ba.subtract(a, a, o),
                        a[3] = 1,
                        ca(r, 3, a)
                    }
                }
                let i = Ia.create();
                Ia.invert(i, n),
                Ia.multiply(r, i, r),
                Ia.multiply(e.m, e.m, r)
            }
            let i = null;
            if (null != this.t) {
                let t = this.D(this.t);
                this.a.R || (this.w = t),
                i = this.a.R ? this.w : t
            } else {
                let t = this.D(r);
                this.a.R || (this.w = t),
                i = this.a.R ? this.w : t
            }
            let a = null;
            if (null != this.u) {
                let t = this.D(this.u);
                this.a.R || (this.x = t),
                a = this.a.R ? this.x : t
            }
            let o = null != i || null != a
              , s = Ia.create();
            o && (null != i && Ia.multiply(s, s, i),
            null != a && Ia.multiply(s, s, a)),
            null != this.v && (Ia.translate(s, s, this.h),
            Ia.multiply(s, s, this.v),
            Ia.translate(s, s, Pa.negate(this.n, this.h))),
            Ia.multiply(e.m, e.m, s);
            let u = 120 & e.d;
            if (u) {
                let t = Ia.create();
                Ia.copy(t, e.m);
                let r = e.m
                  , n = Pa.create();
                Ia.getScaling(n, e.m);
                let i = Ba.create();
                if (16 == u) {
                    let t = la(e.m, 0)
                      , n = Pa.length(t);
                    Ba.scale(t, t, 1 / n),
                    ca(e.m, 0, t);
                    let a = Ba.fromValues(r[4], -r[0], 0, 0);
                    ca(r, 1, Ba.normalize(a, a)),
                    Pa.cross(i, a, t),
                    i[3] = 0,
                    ca(r, 2, i)
                } else if (16 < u) {
                    if (32 == u) {
                        let t = la(r, 1)
                          , n = Ba.length(t);
                        Ba.scale(t, t, 1 / n),
                        ca(e.m, 1, t);
                        let a = Ba.fromValues(-r[5], r[1], 0, 0);
                        ca(r, 0, Ba.normalize(a, a)),
                        i[3] = 0,
                        ca(r, 2, i)
                    } else if (64 == u) {
                        let t = la(r, 2);
                        Ba.normalize(t, t),
                        ca(r, 2, t);
                        let e = Ba.fromValues(t[1], -t[0], 0, 0);
                        Ba.normalize(e, e),
                        ca(r, 1, e),
                        Pa.cross(i, t, e),
                        i[3] = 0,
                        ca(r, 0, i)
                    }
                } else if (8 == u) {
                    let t = this.a.h;
                    if (o) {
                        let e = la(s, 0);
                        e = Ba.fromValues(e[1], e[2], -e[0], 0),
                        Ba.normalize(e, e),
                        ca(r, 0, e);
                        let n = la(s, 1);
                        n = Ba.fromValues(t ? -n[1] : n[1], t ? -n[2] : n[2], t ? n[0] : -n[0], 0),
                        Ba.normalize(n, n),
                        ca(r, 1, n);
                        let i = la(s, 2);
                        i = Ba.fromValues(i[1], i[2], -i[0], 0),
                        Ba.normalize(i, i),
                        ca(r, 2, i)
                    } else {
                        ca(r, 0, Ba.fromValues(0, 0, -1, 0)),
                        ca(r, 1, Ba.fromValues(t ? -1 : 1, 0, 0, 0)),
                        ca(r, 2, Ba.fromValues(0, 1, 0, 0))
                    }
                }
                let a = Ba.fromValues(this.h[0], this.h[1], this.h[2], 1)
                  , l = Ba.fromValues(this.h[0], this.h[1], this.h[2], 0)
                  , c = la(r, 0)
                  , h = la(r, 1)
                  , f = la(r, 2);
                Ba.scale(c, c, n[0]),
                Ba.scale(h, h, n[1]),
                Ba.scale(f, f, n[2]),
                ca(r, 0, c),
                ca(r, 1, h),
                ca(r, 2, f),
                Ba.transformMat4(a, a, t),
                Ba.transformMat4(l, l, r);
                let d = Ba.create();
                Ba.subtract(d, a, l),
                d[3] = 1,
                ca(r, 3, d)
            }
            Ia.invert(n, n),
            Ia.multiply(e.m, n, e.m),
            Pa.transformMat4(e.l, e.h, e.m)
        }
        D(t) {
            var e = this.i.c(t.a.a)
              , r = this.j.c(t.a.a)
              , n = this.k.c(t.a.a);
            if (0 != (640 & this.d)) {
                let i = Ia.create();
                return Ia.identity(i),
                Ia.translate(i, i, this.h),
                e && (this.n = this.i.d(t, this.a.aX),
                Ia.translate(i, i, this.n)),
                r && (this.o = this.j.d(t, this.a.aX, Ua.create()),
                Ia.fromQuat(this.p, this.o),
                Ia.multiply(i, i, this.p)),
                n && (this.n = this.k.d(t, this.a.aX),
                Ia.scale(i, i, this.n)),
                Ia.translate(i, i, Pa.negate(this.n, this.h)),
                i
            }
            return null
        }
    }
      , jh = class {
        constructor(t) {
            var e = this;
            e.a = t.getUint16(),
            e.b = t.getUint16(),
            e.c = t.getUint16(),
            e.d = t.getUint16(),
            e.e = t.getUint16() + 65536 * e.b,
            e.f = t.getUint16(),
            e.g = t.getUint16(),
            e.h = Pa.fromValues(t.getFloat(), t.getFloat(), t.getFloat()),
            e.i = Pa.fromValues(t.getFloat(), t.getFloat(), t.getFloat()),
            e.j = t.getFloat()
        }
        k() {
            this.h = null,
            this.i = null
        }
    }
      , qh = r(7)
      , Gh = class {
        constructor(t) {
            this.a = t.getUint16(),
            this.b = t.getUint16()
        }
        static c(t) {
            t.E = !1,
            t.r = t.o.au && t.g < t.o.au.length ? t.o.au[t.g] : {
                a: 0,
                b: 0
            },
            t.x = 0 != (1 & t.r.a),
            t.y = 0 == (4 & t.r.a),
            t.z = 0 != (16 & t.r.a)
        }
    }
    ;
    class Xh {
        static a(t) {
            const e = 32767 & t;
            return e < Yh.length ? Yh[e] : (WH.debug("Unknown shader effect:", e),
            ["PS_Combiners_Opaque", "VS_Diffuse_T1"])
        }
        static b(t, e) {
            var r = "";
            if (-1e3 == t && 3 == e)
                return "Skin";
            if (32768 & t)
                return Xh.a(t)[0];
            1 == e ? r = 112 & t ? "PS_Combiners_Mod" : "PS_Combiners_Opaque" : r = (112 & t ? "PS_Combiners_Mod" : "PS_Combiners_Opaque") + "_" + (112 & t ? ["Opaque", "Mod", "Mod", "Add", "Mod2x", "Mod", "Mod2xNA", "AddNA"] : ["Opaque", "Mod", "Mod", "AddAlpha", "Mod2x", "Mod", "Mod2xNA", "AddAlpha"])[7 & t];
            return r
        }
        static c(t, e) {
            var r = "";
            if (-1e3 == t && 3 == e)
                r = "T1_T1_T1";
            else {
                if (32768 & t)
                    return Xh.a(t)[1];
                r = 1 == e ? 128 & t ? "Env" : 16384 & t ? "T2" : "T1" : 128 & t ? 8 & t ? "Env_Env" : "Env_T1" : 8 & t ? "T1_Env" : 16384 & t ? "T1_T2" : "T1_T1"
            }
            return "VS_Diffuse_" + r
        }
        static d(t, e, r) {
            var n = Xh.b(t, e)
              , i = Xh.c(t, e)
              , a = "Wow." + i + "_" + n;
            if (Ol._GetProgram(a))
                return {
                    name: a
                };
            var o = {
                shaders: [Xh.f(i), Xh.g(n, r)],
                attributes: {
                    position: "aPosition",
                    normal: "aNormal",
                    texcoord0: "aTexCoord0",
                    texcoord1: "aTexCoord1"
                }
            };
            return Ol.RegisterProgram(a, o),
            {
                name: a
            }
        }
        static e(t) {
            var e = {}
              , r = {
                texcoord1: function(t, e) {
                    t.INPUT_TEXCOORD1 = "aTexCoord" + e
                }
            };
            for (var n in t.options) {
                var i = t.options[n];
                r[n](e, i)
            }
            return {
                name: "Wow." + t.name,
                config: e
            }
        }
        static f(t) {
            var e = "";
            if (e += "vTexCoord1 = (uTextureMatrix1 * vec4(aTexCoord0, 0, 1)).st;\n",
            e += "vTexCoord2 = (uTextureMatrix2 * vec4(aTexCoord1, 0, 1)).st;\n",
            "VS" === t.substr(0, 2)) {
                var r = (t = t.substr(3)).split("_")
                  , n = r[0];
                if ("Diffuse" === n || "Color" === n) {
                    e = "",
                    r.splice(0, 1);
                    var i = {
                        T1: ["uTextureMatrix1", "aTexCoord0"],
                        T2: ["uTextureMatrix2", "aTexCoord1"],
                        T3: ["", "aTexCoord2"],
                        Env: ["", "texEnv"]
                    }
                      , a = 1;
                    for (var o in r)
                        i[r[o]] ? (e += i[r[o]][0] && "texEnv" != i[r[o]][1] ? "vTexCoord" + a + " = (" + i[r[o]][0] + " * vec4(" + i[r[o]][1] + ", 0, 1)).st;\n" : "texEnv" == i[r[o]][1] ? "vTexCoord" + a + " = texEnv;\n" : "vTexCoord" + a + " = (uTextureMatrix" + a + " * vec4(" + i[r[o]][1] + ", 0, 1)).st;\n",
                        a++) : WH.debug("Missing vertex shader def?", t)
                }
            }
            return "            attribute vec3 aPosition;\n            attribute vec3 aNormal;\n            attribute vec2 aTexCoord0;\n            attribute vec2 aTexCoord1;\n            attribute vec3 aColor;\n            \n            varying vec3 vPosition;\n            varying vec3 vNormal;\n            varying vec2 vTexCoord1;\n            varying vec2 vTexCoord2;\n            varying vec2 vTexCoord3;\n            varying vec2 vTexCoord4;\n            \n            uniform mat4 uModelMatrix;\n            uniform mat4 uPanningMatrix;\n            uniform mat4 uViewMatrix;\n            uniform mat4 uProjMatrix;\n            uniform mat4 uTextureMatrix1;\n            uniform mat4 uTextureMatrix2;\n            uniform mat4 uTextureMatrix3;\n            uniform mat4 uTextureMatrix4;\n            uniform vec3 uCameraPos;\n            uniform bool uHasTexture1;\n            uniform bool uHasTexture2;\n            uniform bool uHasTexture3;\n            uniform bool uHasTexture4;\n            \n            vec2 sphereMap(vec3 vertex, vec3 normal)\n            {\n               vec3 normPos = -(normalize(vertex.xyz));\n               vec3 temp = (normPos - (normal * (2.0 * dot(normPos, normal))));\n               temp = vec3(temp.x, temp.y, temp.z + 1.0);\n               vec2 texCoord = ((normalize(temp).xy * 0.5) + vec2(0.5));\n               return texCoord;\n            }\n            void main(void) {\n              vec4 pos = uViewMatrix * uModelMatrix * vec4(aPosition, 1);\n              vPosition = pos.rgb;\n              vNormal = normalize(mat3(uViewMatrix * uModelMatrix) * aNormal);\n              vec2 texEnv = sphereMap(pos.xyz,vNormal.xyz);\n              gl_Position = uProjMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1);\n            \n            " + e + "\n              vNormal = mat3(uViewMatrix * uModelMatrix) * aNormal;            }"
        }
        static g(t) {
            var e = Wh[t];
            e || (WH.debug("Missing pixel shader def", t),
            e = Wh[t = "PS_Combiners_Opaque_Mod"]);
            for (var r, n = "\t\t" + e.slice(1, e.length).join("\n\t\t"), i = 0; i < e[0]; i++)
                n = "vec4 tex" + i + " = texture2D(uTexture" + (r = i + 1) + ", vTexCoord" + r + ".st);\n" + n;
            return "            precision mediump float;            \n            varying vec3 vPosition;\n            varying vec3 vNormal;\n            varying vec2 vTexCoord1;\n            varying vec2 vTexCoord2;\n            varying vec2 vTexCoord3;\n            varying vec2 vTexCoord4;\n            \n            uniform bool uHasTexture1;\n            uniform bool uHasTexture2;\n            uniform bool uHasTexture3;\n            uniform bool uHasTexture4;\n            uniform bool uHasAlpha;\n            uniform bool uHasSpecEmiss;\n            uniform int uBlendMode;\n            uniform bool uUnlit;\n            uniform vec4 uColor;\n            uniform vec4 uAmbientColor;\n            uniform vec4 uDiffuseColor;\n            uniform vec4 uPrimaryColor;\n            uniform vec4 uSecondaryColor;\n            uniform vec3 uLightDir1;\n            uniform vec3 uLightDir2;\n            uniform vec3 uLightDir3;\n            uniform sampler2D uTexture1;\n            uniform sampler2D uTexture2;\n            uniform sampler2D uTexture3;\n            uniform sampler2D uTexture4;\n            uniform sampler2D uAlpha;\n            uniform vec4 uTexSampleAlpha;\n            \n            void main(void) {\n            vec4 _output = vec4(1.0);\n            vec4 _input = uColor;\n            vec3 _specular = vec3(0.0);            " + n + "\n            \n            if (uBlendMode == 13) {\n                _output.a = _output.a * _input.a;\n            } else if (uBlendMode == 1) {\n                if (_output.a < (128.0/255.0))\n                    discard;\n                _output.a = _input.a;\n            } else if (uBlendMode == 0) {\n                _output.a = _input.a;\n            } else {\n                _output.a = _output.a * _input.a;\n            }\n            // if (uBlendMode > 1) {\n            //     if (_output.a < (1.0/255.0)) {\n            //         discard;\n            //     }\n            // }\n            if (!uUnlit) {                vec4 litColor = uAmbientColor;                vec3 normal = normalize(vNormal);                                float dp = max(0.0, dot(normal, uLightDir1));                litColor += uPrimaryColor * dp;                                dp = max(0.0, dot(normal, uLightDir2));                litColor += uSecondaryColor * dp;                                dp = max(0.0, dot(normal, uLightDir3));                litColor += uSecondaryColor * dp;                                litColor = clamp(litColor, vec4(0,0,0,0), vec4(1,1,1,1));                _output *= (litColor * uDiffuseColor);            }            _output += vec4(_specular, 0.0);            gl_FragColor = _output.xyzw;\n            }"
        }
    }
    const Yh = [["PS_Combiners_Opaque_Mod2xNA_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_AddAlpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_AddAlpha_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_Add", "VS_Diffuse_T1_Env_T1", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_AddAlpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_AddAlpha", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_AddAlpha", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_AddAlpha_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Alpha_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_3s", "VS_Diffuse_T1_Env_T1", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Opaque_AddAlpha_Wgt", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_Add_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_ModNA_Alpha", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_AddAlpha_Wgt", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_AddAlpha_Wgt", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_AddAlpha_Wgt", "VS_Diffuse_T1_T2", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod_Add_Wgt", "VS_Diffuse_T1_Env", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_UnshAlpha", "VS_Diffuse_T1_Env_T1", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_Dual_Crossfade", "VS_Diffuse_T1", "HS_T1", "DS_T1"], ["PS_Combiners_Mod_Depth", "VS_Diffuse_EdgeFade_T1", "HS_T1", "DS_T1"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_Alpha", "VS_Diffuse_T1_Env_T2", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_Mod", "VS_Diffuse_EdgeFade_T1_T2", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_Masked_Dual_Crossfade", "VS_Diffuse_T1_T2", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Alpha", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Opaque_Mod2xNA_Alpha_UnshAlpha", "VS_Diffuse_T1_Env_T2", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_Depth", "VS_Diffuse_EdgeFade_Env", "HS_T1", "DS_T1"], ["PS_Guild", "VS_Diffuse_T1_T2_T1", "HS_T1_T2_T3", "DS_T1_T2"], ["PS_Guild_NoBorder", "VS_Diffuse_T1_T2", "HS_T1_T2", "DS_T1_T2_T3"], ["PS_Guild_Opaque", "VS_Diffuse_T1_T2_T1", "HS_T1_T2_T3", "DS_T1_T2"], ["PS_Illum", "VS_Diffuse_T1_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod_Mod_Mod_Const", "VS_Diffuse_T1_T2_T3", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Mod_Mod_Mod_Const", "VS_Color_T1_T2_T3", "HS_T1_T2_T3", "DS_T1_T2_T3"], ["PS_Combiners_Opaque", "VS_Diffuse_T1", "HS_T1", "DS_T1"], ["PS_Combiners_Mod_Mod2x", "VS_Diffuse_EdgeFade_T1_T2", "HS_T1_T2", "DS_T1_T2"], ["PS_Combiners_Mod", "VS_Diffuse_EdgeFade_T1", "HS_T1_T2", "DS_T1_T2"], ["PS_Unknown_34821", "VS_Diffuse_EdgeFade_T1_T2", "HS_T1_T2", "DS_T1_T2"]]
      , Wh = {
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
        PS_Combiners_Opaque_Mod2xNA_Alpha_Add: [3, "_output.rgb = _input.rgb * mix(tex0.rgb * tex1.rgb * 2.0, tex0.rgb, vec3(tex0.a));", "_specular = tex2.rgb * tex2.a * uTexSampleAlpha.b; "],
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
        Skin: [3, "if (uHasSpecEmiss) {vec3 eyeVec_120 = vPosition.xyz;\nvec3 t121 = -(eyeVec_120);\nvec2 term_126 = vec2(dot(t121, vNormal), dot(normalize(t121), (vNormal * vec3(0.0500000007, 0.0500000007, 1.0))));\nvec2 invTerm_128 = (vec2(1.0) - clamp(term_126, 0.0, 1.0));\nvec2 f_129 = (invTerm_128 * invTerm_128);\nfloat fresnel_rim_133 = pow((f_129.x + f_129.y), 0.600000024);\nvec3 t136 = (tex2.rgb + ((vec3(0.0500000007, 0.0, 0.400000006) * 1.0) * fresnel_rim_133));\nvec3 t142 = t136;float t267 = dot(normalize(vNormal),  normalize(-(vPosition.xyz)));vec3 emissiveTerm_351 = mix(vec3(0.0), 2.0*t142, vec3(pow(clamp(t267, 0.0, 1.0), (( 128.0) + 9.99999975e-006))));_output.rgb = _input.rgb * tex0.rgb + tex1.rgb + emissiveTerm_351.rgb; } else {_output.rgb = _input.rgb * tex0.rgb; }", "_output.a = tex0.a;"],
        PS_Combiners_Mod_Dual_Crossfade: [3, "_output.rgb = _input.rgb * mix(mix(tex0, texture2D(uTexture2,vTexCoord1), vec4(clamp(uTexSampleAlpha.g, 0.000000, 1.000000))), texture2D(uTexture3,vTexCoord1), vec4(clamp(uTexSampleAlpha.b, 0.000000, 1.000000))).rgb;", "_output.a = mix(mix(tex0, texture2D(uTexture2,vTexCoord1), vec4(clamp(uTexSampleAlpha.g, 0.000000, 1.000000))), texture2D(uTexture3,vTexCoord1), vec4(clamp(uTexSampleAlpha.b, 0.000000, 1.000000))).a;"],
        PS_Combiners_Mod_Masked_Dual_Crossfade: [4, "_output.rgb = _input.rgb * mix(mix(tex0, texture2D(uTexture2,texCoord), vec4(clamp(uTexSampleAlpha.g, 0.000000, 1.000000))), texture2D(uTexture3,texCoord), vec4(clamp(uTexSampleAlpha.b, 0.000000, 1.000000))).rgb;", "_output.a = mix(mix(tex0, texture2D(uTexture2,texCoord), vec4(clamp(uTexSampleAlpha.g, 0.000000, 1.000000))), texture2D(uTexture3,texCoord), vec4(clamp(uTexSampleAlpha.b, 0.000000, 1.000000))).a * texture(uTexture4,texCoord2).a;"],
        PS_Unknown_34821: [2, "_output.rgb = (_input.rgb * tex0.rgb) * tex1.rgb;", "_output.a = tex0.a * tex1.a;"]
    };
    var Zh = class {
        constructor() {
            this.h = !1,
            this.i = !0
        }
    }
    ;
    const Jh = [0, 1, 2, 10, 3, 4, 5, 13];
    class Kh {
        constructor(t) {
            this.E = !1,
            this.F = !1;
            var e = this;
            e.a = t.getUint8(),
            e.b = t.getInt8(),
            e.c = t.getUint16(),
            e.d = t.getUint16(),
            e.e = t.getUint16(),
            e.f = t.getInt16(),
            e.g = t.getUint16(),
            e.h = t.getUint16(),
            e.i = t.getUint16(),
            e.j = t.getInt16(),
            e.k = t.getUint16(),
            e.l = t.getInt16(),
            e.m = t.getInt16(),
            e.n = !0,
            e.o = null,
            e.p = null,
            e.q = 0,
            e.r = null,
            e.s = [],
            e.t = [],
            e.u = [],
            e.v = null,
            e.w = [],
            e.x = !1,
            e.y = !1,
            e.z = !1,
            e.A = Ba.create(),
            e.B = Pa.create(),
            e.C = Ua.create()
        }
        K(t) {
            var e = this;
            e.o = t,
            e.p = t.ar[e.d],
            e.q = e.p.a,
            Gh.c(e);
            let r = this.o.aw[e.j];
            1 == this.i && -1 < r && 1 == this.o.av[r].c && (this.c = -1e3,
            this.i = 3);
            const n = Xh.d(e.c, e.i, e.r);
            e.H = n;
            for (let r = 0; r < e.i; r++) {
                if (-1 < e.j && e.j < t.aw.length) {
                    let n = t.aw[e.j + r];
                    -1 < n && n < t.av.length && e.s.splice(r, 0, t.av[n])
                }
                if (-1 < e.m && e.m < t.ay.length) {
                    let n = t.ay[e.m + r];
                    -1 < n && t.ax && n < t.ax.length ? e.t.splice(r, 0, t.ax[n]) : e.t.splice(r, 0, null)
                }
                if (-1 < e.l && e.l < t.aE.length) {
                    let n = t.aE[e.l + r];
                    -1 < n && n < t.aD.length ? e.w.splice(r, 0, t.aD[n]) : e.w.splice(r, 0, null)
                }
            }
            this.u = Array(e.t.length);
            for (let t = 0; t < this.u.length; t++)
                this.u[t] = Ia.create();
            e.E && (e.s = e.s.reverse(),
            e.t = e.t.reverse()),
            t.aC && -1 < e.f && e.f < t.aC.length && (e.v = t.aC[e.f]),
            e.D = 1 < this.r.b
        }
        L() {
            const t = this
              , e = t.o.aS.context
              , r = Ol.GetProgram(e, t.H.name, t.H.config);
            t.G = r,
            t.H = r.program,
            t.I = r.uniforms
        }
        M() {
            let t = Ba.fromValues(this.p.i[0], this.p.i[1], this.p.i[2], 1)
              , e = this.o.ao[this.p.g].m
              , r = Ia.create();
            Ia.multiply(r, r, this.o.aW.uViewMatrix),
            Ia.multiply(r, r, this.o.T),
            Ia.multiply(r, r, e),
            Ba.transformMat4(t, t, r),
            t[3] = 0;
            let n = Ba.len(t);
            if (0 < (3 & this.a)) {
                let e = Ba.create();
                0 < n ? Ba.scale(e, t, 1 / n) : Ba.copy(e, t);
                let i = Pa.fromValues(r[8], r[9], r[10])
                  , a = Pa.length(i) * this.p.j;
                Ba.scale(e, e, a),
                1 & this.a ? Ba.subtract(e, t, e) : Ba.add(e, t, e),
                n = Ba.length(e)
            }
            return n
        }
        N(t) {
            const e = this
              , r = e.o
              , n = e.o.aS.context
              , i = e.o.Q;
            if (e.G || e.L(),
            !e.G.program)
                return;
            if (this.J || (this.J = new Zh,
            this.J.a = e.G,
            this.J.b = Object.assign({}, r.aW)),
            this.J.c = r.aU,
            this.J.d = r.aV,
            this.J.b = Object.assign({}, r.aW),
            e.A[0] = e.A[1] = e.A[2] = e.A[3] = 1,
            e.v && e.v.g(i, e.o.aX, e.A),
            e.w[0] && (e.A[3] *= e.w[0].d(i, e.o.aX)),
            .001 >= e.A[3])
                return;
            let a = e.r.b;
            const o = [0, 0, 0];
            for (let t = 0; t < e.w.length; t++) {
                const r = e.w[t];
                r && (o[t] = r.d(i, e.o.aX))
            }
            this.J.b.uColor = e.A,
            this.J.b.uTexSampleAlpha = Ba.fromValues(o[0], o[1], o[2], 0),
            this.J.b.uBlendMode = a,
            this.J.b.uHasSpecEmiss = r.aI && r.aI.h,
            this.J.e = Jh[a],
            this.J.i = !this.o.aY,
            this.J.b.uUnlit = e.x ? 1 : 0,
            this.J.n = this.M(),
            this.J.m = this.b,
            this.J.o = this.h;
            const s = this.O();
            let u = !0;
            for (const t in s) {
                const e = s[t]
                  , r = e.a && e.a.d;
                u = u && (null == e.a || null != r),
                r && (this.J.b[e.c] = r)
            }
            u && !e.F && (e.F = !0),
            e.t.forEach( (t, r) => {
                if (!e.o.R && (Ia.identity(e.u[r]),
                e.t[r])) {
                    let t = !1
                      , n = !1;
                    e.t[r].a && e.t[r].a.c(i.a.a) ? (e.B = e.t[r].a.d(i, e.o.aX),
                    n = !0) : Pa.set(e.B, 0, 0, 0),
                    e.t[r].b && e.t[r].b.c(i.a.a) ? (e.C = e.t[r].b.d(i, e.o.aX),
                    t = !0) : Ua.set(e.C, 0, 0, 0, 1);
                    let a, o = !1;
                    if (e.t[r].c && e.t[r].c.c(i.a.a) && (a = e.t[r].c.d(i, e.o.aX),
                    o = !0),
                    Ia.identity(e.u[r]),
                    Ia.translate(e.u[r], e.u[r], Pa.fromValues(.5, .5, 0)),
                    o && Ia.scale(e.u[r], e.u[r], a),
                    t) {
                        let t = Ia.create();
                        Ia.fromRotationTranslation(t, e.C, [0, 0, 0]),
                        Ia.multiply(e.u[r], e.u[r], t)
                    }
                    n && Ia.translate(e.u[r], e.u[r], e.B),
                    Ia.translate(e.u[r], e.u[r], Pa.fromValues(-.5, -.5, 0))
                }
                this.J.b["uTextureMatrix" + (r + 1).toString()] = e.u[r]
            }
            ),
            this.J.h = e.y,
            this.J.f = !e.z,
            this.J.j = n.TRIANGLES,
            this.J.l = 2 * e.p.e,
            this.J.k = e.p.f,
            t.push(this.J)
        }
        O() {
            let t = 0;
            const e = [];
            this.s.forEach( (r, n) => {
                const i = n;
                let a = null;
                if (this.s[i])
                    if (this.s[0] && 1 == this.s[0].c && 0 < n)
                        1 == n ? a = this.o.aI && this.o.aI.b ? {
                            d: this.o.aI.b
                        } : {
                            d: this.o.aS.blackPixelTexture
                        } : 2 == n && (a = this.o.aI && this.o.aI.c ? {
                            d: this.o.aI.c
                        } : {
                            d: this.o.aS.blackPixelTexture
                        });
                    else if (1 == this.s[i].c)
                        this.o.aJ ? a = this.o.aJ.a : this.o.aI && this.o.aI.a && (a = {
                            d: this.o.aI.a
                        });
                    else if (this.s[i].f)
                        a = this.s[i].f;
                    else if (((8 > this.o.a.type || 32 < this.o.a.type) && 2 == this.s[i].c || [2, 11, 12, 13].includes(this.s[i].c)) && this.o.A[this.s[i].b])
                        a = this.o.A[this.s[i].b];
                    else if (-1 != this.s[i].c && this.o.A[this.s[i].c])
                        a = this.o.A[this.s[i].c];
                    else if (-1 != this.s[i].c && this.o.B[this.s[i].c][i])
                        a = this.o.B[this.s[i].c][i].a;
                    else if (8 == this.s[i].c && this.o.v)
                        a = this.o.v.B[this.s[i].c][0].a;
                    else if (!this.s[i].e && this.j + t < this.o.av.length) {
                        let e = this.o.av[this.j + t];
                        e && e.f && (a = e.f)
                    } else
                        this.s[i].g || WH.debug("can't find texture for material", i, "type", this.s[i].c),
                        this.s[i].g = !0;
                e[i] = a,
                t++
            }
            );
            const r = {};
            for (let n = 0; n < t; n++)
                r["Texture" + (n + 1)] = {
                    a: e[n],
                    b: n,
                    c: "uTexture" + (n + 1),
                    d: "TEXTURE" + n
                };
            return r
        }
        get show() {
            return this.n
        }
        set show(t) {
            this.n = t
        }
        get meshId() {
            return this.q
        }
        P() {
            this.o = null,
            this.p = null,
            this.r = null,
            this.s = null,
            this.t = null,
            this.v = null,
            this.w = null,
            this.A = null,
            this.u = null,
            this.B = null,
            this.C = null
        }
    }
    var Qh = class {
        constructor(t, e, r) {
            var n = this;
            t.aS.context;
            0 == r && console.log("Texture file is 0"),
            n.b = t,
            n.c = t.k.contentPath + "textures/" + r + ".png",
            n.d = null,
            n.f = !1,
            function(t) {
                t.a = new Image,
                t.a.crossOrigin = "",
                t.a.onload = function() {
                    t.i()
                }
                ,
                t.a.onerror = function() {
                    t.a = null
                }
                ,
                t.a.src = t.c
            }(n)
        }
        g() {
            return this.f
        }
        h() {
            var t = this;
            if (t.b) {
                var e = t.b.aS.context;
                t.d && e.deleteTexture(t.d),
                t.d = null,
                t.b = null
            }
        }
        i() {
            function t(t) {
                return 0 == (t & t - 1)
            }
            var e = this;
            if (e.b) {
                var r = e.b.aS.context;
                e.d = r.createTexture(),
                r.bindTexture(r.TEXTURE_2D, e.d),
                r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, e.a),
                t(e.a.width) && t(e.a.height) ? r.generateMipmap(r.TEXTURE_2D) : (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR));
                var n = e.b.aS.aniFilterExt;
                n && r.texParameteri(r.TEXTURE_2D, n.TEXTURE_MAX_ANISOTROPY_EXT, e.b.aS.aniFilterMax),
                e.f = !0
            }
        }
    }
      , $h = class {
        constructor(t, e, r) {
            var n = this;
            n.a = t,
            n.b = e,
            n.c = r.getInt32(),
            n.d = r.getUint32(),
            n.e = r.getUint32(),
            n.f = null,
            n.g = !1,
            n.i()
        }
        h() {
            var t = this;
            t.a = null,
            t.f && t.f.h(),
            t.f = null
        }
        i() {
            var t = this;
            0 == t.e || (t.f = new Qh(t.a,0,t.e))
        }
    }
      , tf = class {
        constructor(t) {
            this.a = new Nh(t,Mh),
            this.b = new Nh(t,Ih),
            this.c = new Nh(t,Mh)
        }
        d() {
            var t = this;
            t.a && (t.a.e(),
            t.a = null),
            t.b && (t.b.e(),
            t.b = null),
            t.c && (t.c.e(),
            t.c = null)
        }
    }
      , ef = class {
        constructor(t) {
            var e = this;
            e.a = t.getInt32(),
            e.b = t.getInt32(),
            e.c = Pa.fromValues(t.getFloat(), t.getFloat(), t.getFloat()),
            e.d = -1
        }
        e() {
            this.c = null
        }
    }
      , rf = class {
        constructor(t) {
            this.a = new Nh(t,Mh),
            this.b = new Nh(t,Ph)
        }
        c() {
            var t = this;
            t.a && t.a.e(),
            t.b && t.b.e()
        }
        d(t) {
            return !!this.a && this.a.c(t)
        }
        e(t) {
            return !!this.b && this.b.c(t)
        }
        f(t) {
            return this.d(t) || this.e(t)
        }
        g(t, e, r) {
            var n = this;
            r ? r[0] = r[1] = r[2] = r[3] = 1 : r = Ba.fromValues(1, 1, 1, 1);
            let i = Pa.fromValues(1, 1, 1);
            return n.d(t.a.a) && n.a.d(t, e, i, i),
            n.e(t.a.a) && (r[3] = n.b.d(t, e, r[3]) / 32767),
            r[0] = i[0],
            r[1] = i[1],
            r[2] = i[2],
            r
        }
    }
      , nf = class {
        constructor(t) {
            this.a = new Nh(t,Ph)
        }
        b() {
            this.a.e(),
            this.a = null
        }
        c(t) {
            return this.a.c(t)
        }
        d(t, e) {
            var r = 1;
            this.c(t.a.a) && (r = this.a.d(t, e, r) / 32767);
            return 1 < r ? r = 1 : 0 > r && (r = 0),
            r
        }
    }
      , af = class {
        constructor() {
            this.a = 0,
            this.b = 0,
            this.c = -1,
            this.d = null,
            this.e = null
        }
    }
    ;
    class of extends af {
    }
    var sf = class {
        constructor(t, e) {
            this.d = !1,
            this.a = t,
            this.b = e,
            this.c = Array(e.length)
        }
        e(t) {
            for (let e = 0; e < this.b.length; e++)
                this.c[e] && this.c[e].e && this.c[e].e.setAnimation(t)
        }
        f(t) {
            this.d = t
        }
        g(t) {
            for (let e = 0; e < this.b.length; e++)
                switch (this.b[e].EffectType) {
                case 1:
                    if (1 == this.b[e].ProcEffectType) {
                        let t = this.b[e].Value[0];
                        this.a.U = Ba.fromValues((255 & t >> 16) / 255, (255 & t >> 8) / 255, (255 & t) / 255, this.a.U[3])
                    } else if (14 == this.b[e].ProcEffectType) {
                        let t = ka(Ca(this.b[e].Value[0], 0), 1);
                        this.a.U[3] = t
                    } else if (22 == this.b[e].ProcEffectType) {
                        let t = this.b[e].Value[3];
                        this.a.U = Ba.fromValues((255 & t >> 16) / 255, (255 & t >> 8) / 255, (255 & t) / 255, this.a.U[3])
                    }
                    break;
                case 2:
                    this.h(e, t)
                }
        }
        h(t, e) {
            if (this.a && this.a.d) {
                if (!this.c[t]) {
                    let e = this.b[t].AttachmentID;
                    -1 < this.b[t].Positioner && (e = this.b[t].Positioner),
                    0 > e && (e = 19);
                    let r = this.a.bU(e);
                    if (this.c[t] = new of,
                    this.c[t].d = r,
                    this.c[t].c = r ? r.b : -1,
                    0 == this.b[t].ModelType) {
                        let e = {
                            type: Lc.PATH,
                            id: this.b[t].Model,
                            parent: this.a,
                            shoulder: -1
                        };
                        this.c[t].e = new Nf(this.a.aS,this.a.k,e,0,!1,!0,!1)
                    } else if (1 == this.b[t].ModelType) {
                        let e = 0 < this.a.n ? this.a.n : 1
                          , r = -1 == this.a.o ? 0 : this.a.o;
                        this.a.n = e,
                        this.a.o = r,
                        this.c[t].ba = new cf(this.a,this.b[t].InvType,this.b[t].Model,e,r)
                    } else if (2 == this.b[t].ModelType) {
                        let e = {
                            type: Lc.NPC,
                            id: this.b[t].Model,
                            parent: this.a,
                            shoulder: -1
                        };
                        this.c[t].e = new Nf(this.a.aS,this.a.k,e,0,!1,!0,!1)
                    }
                }
                if ((0 != this.b[t].ModelType || this.c[t].e && this.c[t].e.d) && (1 != this.b[t].ModelType || this.c[t].ba && this.c[t].ba.m) && (2 != this.b[t].ModelType || this.c[t].e && this.c[t].e.d)) {
                    let r = Ia.create();
                    Ia.rotateZ(r, r, -this.b[t].Yaw),
                    Ia.rotateY(r, r, this.b[t].Pitch),
                    Ia.rotateX(r, r, this.b[t].Roll),
                    Ia.scale(r, r, [this.b[t].Scale1, this.b[t].Scale1, this.b[t].Scale1]),
                    Ia.scale(r, r, [this.b[t].Scale2, this.b[t].Scale2, this.b[t].Scale2]);
                    let n = Ia.create();
                    if (this.c[t].d) {
                        let e = this.c[t].d.c
                          , r = this.a.ao[this.c[t].c].m;
                        Ia.multiply(n, n, r),
                        Ia.translate(n, n, Pa.fromValues(e[0], e[1], e[2]))
                    }
                    if (Ia.translate(n, n, Pa.fromValues(this.b[t].Offset[0], -this.b[t].Offset[1], this.b[t].Offset[2])),
                    Ia.multiply(n, n, r),
                    0 == this.b[t].ModelType) {
                        let r = this.c[t].e;
                        r.setAnimPaused(this.d),
                        r.br(this.a.T, n, null, null),
                        r.bX(e)
                    } else if (1 == this.b[t].ModelType)
                        for (let r, i = 0; i < this.c[t].ba.i.length; i++)
                            r = this.c[t].ba.i[i].e,
                            r.d && (r.setAnimPaused(this.d),
                            r.br(this.a.T, n, null, null),
                            r.bX(e));
                    else if (2 == this.b[t].ModelType) {
                        let r = this.c[t].e;
                        r.setAnimPaused(this.d),
                        r.br(this.a.T, n, null, null),
                        r.bX(e)
                    }
                }
            }
        }
    }
      , uf = class {
        constructor(t, e, r) {
            var n = this;
            n.a = t,
            n.d = e,
            n.b = [],
            n.c = !1,
            n.f = [],
            r && n.h(r)
        }
        g() {
            var t = this;
            if (t.a = null,
            t.b) {
                for (var e, r = 0; r < t.b.length; ++r)
                    (e = t.b[r]) && (e.e && e.e.ba(),
                    e.e = null,
                    e.d = null,
                    t.b[r] = null);
                t.b = null
            }
        }
        h(t) {
            var e = this;
            e.e = t;
            var r = e.a.k.contentPath + "meta/itemvisual/" + e.e + ".json";
            $.getJSON(r, (function(t) {
                e.i(t)
            }
            ))
        }
        i(t) {
            var e = this;
            if (e.b = Array(7),
            t.ItemEffects)
                for (let n, i = 0; i < t.ItemEffects.length; ++i)
                    if (n = t.ItemEffects[i],
                    -1 == n.SubClass || this.d == n.SubClass) {
                        if (n.Model) {
                            e.b[n.Slot - 1] = new af;
                            var r = {
                                type: Lc.PATH,
                                id: n.Model,
                                parent: e.a,
                                shoulder: -1
                            };
                            e.b[n.Slot - 1].e = new Nf(e.a.aS,e.a.k,r,0,!1,!0,!1)
                        }
                        n.kit && (this.a.D,
                        this.a.D.push(new sf(this.a,n.kit.effects)))
                    }
            for (var n = 0; n < e.b.length; ++n)
                if (t.Equipment[n] && null == e.b[n]) {
                    e.b[n] = new af;
                    r = {
                        type: Lc.PATH,
                        id: t.Equipment[n],
                        parent: e.a,
                        shoulder: -1
                    };
                    e.b[n].e = new Nf(e.a.aS,e.a.k,r,n,!1,!0,!1)
                }
            e.c = !0,
            e.a.bG()
        }
        j(t) {
            if (this.a.d) {
                for (var e = 0; e < this.f.length; e++)
                    this.f[e].g(t);
                for (var r, n = 0; n < this.b.length; n++)
                    if (r = this.b[n]) {
                        let e = Pa.fromValues(0, 0, 0);
                        if (5 <= n || r && r.d && (e = r.d.c),
                        -1 != r.c) {
                            let n = this.a.ao[r.c].m;
                            r.e.br(this.a.T, n, e, null),
                            r.e.bX(t)
                        }
                    }
            }
        }
    }
    ;
    class lf {
        static a(t, e, r, n, i) {
            let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            if (!e)
                return WH.debug("selectBestTexture:", "textures are null"),
                null;
            for (let t = 0; t < e.length; t++) {
                let o = e[t]
                  , s = o.Gender
                  , u = o.Class
                  , l = o.Race
                  , c = o.ExtraData
                  , h = 0;
                if (1 < r || s != r) {
                    if (2 > s)
                        continue;
                    h = 0
                } else
                    h = 2;
                let f = 1;
                if (0 < n && u == n)
                    f = 0;
                else if (0 < u)
                    continue;
                let d = 1;
                if (0 < i && l == i)
                    d = 0;
                else if (0 < l)
                    continue;
                a[c + 3 * (d + 2 * (h + f))] = o.FileDataId
            }
            for (let t = 0; 2 > t; t++)
                for (let e = 0; 2 > e; e++)
                    for (let r, n = 0; 2 > n; n++)
                        if (r = 3 * (t + 2 * (e + 2 * n)),
                        0 < a[r]) {
                            let t;
                            return t = {
                                a: a[r],
                                b: a[r + 1],
                                c: a[r + 2]
                            },
                            t
                        }
            if (t) {
                let a = t.bQ(r, i, !0);
                if (a && 0 != a[0])
                    return i = a[0],
                    r = a[1],
                    lf.a(t, e, r, n, i)
            }
            return null
        }
        static b(t, e, r, n, i, a) {
            let o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let t = 0; t < e.length; t++) {
                let s = e[t]
                  , u = s.Gender
                  , l = s.Class
                  , c = s.Race
                  , h = s.ExtraData
                  , f = 0;
                if (1 < n || u != n) {
                    if (2 > u)
                        continue;
                    f = 0
                } else
                    f = 2;
                let d = 1;
                if (0 < i && l == i)
                    d = 0;
                else if (0 < l)
                    continue;
                let b = 1;
                if (0 < a && c == a)
                    b = 0;
                else if (0 < c)
                    continue;
                let m = 1;
                if (-1 != r && h == r)
                    m = 0;
                else if (-1 != h && -1 != r)
                    continue;
                o[m + 2 * (b + 2 * (f + d))] = s.FileDataId
            }
            for (let t = 0; 2 > t; t++)
                for (let e = 0; 2 > e; e++)
                    for (let r = 0; 2 > r; r++)
                        for (let n, i = 0; 2 > i; i++)
                            if (n = i + 2 * (t + 2 * (e + 2 * r)),
                            o[n])
                                return o[n];
            if (t) {
                var s = t.bQ(n, a, !1);
                if (s && 0 != s[0])
                    return a = s[0],
                    n = s[1],
                    lf.b(t, e, r, n, i, a)
            }
            return 0
        }
    }
    var cf = class {
        constructor(t, e, r, n, i) {
            this.p = null,
            this.q = [],
            this.a = t,
            this.b = e,
            this.e = Gc[e],
            this.f = Xc[e],
            this.i = null,
            this.j = null,
            this.k = null,
            this.g = 0,
            this.h = 0,
            this.m = !1,
            this.n = !1,
            this.o = 0,
            r && this.x(r, n, i)
        }
        w() {
            var t = this;
            if (t.i) {
                for (let e = 0; e < t.i.length; ++e)
                    t.i[e].e && t.i[e].e.ba(),
                    t.i[e].e = null,
                    t.i[e].d = null,
                    t.i[e] = null;
                t.i = null
            }
            if (t.j) {
                for (let e = 0; e < t.j.length; ++e)
                    t.j[e].texture && t.j[e].texture.h(),
                    t.j[e].texture = null,
                    t.j[e] = null;
                t.j = null
            }
            if (t.k = null,
            t.l = null,
            t.q) {
                for (let e = 0; e < t.q.length; e++)
                    t.q[e].g();
                t.q = null
            }
            t.m = !1,
            t.p && (t.p.aP = !0,
            t.p = null),
            t.a && (t.a.bA(),
            t.a = null)
        }
        x(t, e, r) {
            let n = this;
            n.r = t,
            n.s = e,
            n.t = r;
            let i = "meta/item/";
            const a = this.b;
            (a == Zc || a == Jc || a == Kc || a == Qc || a == $c || a == th || a == eh || a == rh || a == nh || a == sh || a == uh || a == lh) && (i = "meta/armor/" + a + "/");
            let o = n.a.k.contentPath + i + n.r + ".json";
            $.getJSON(o).done((function(t) {
                n.y(t)
            }
            )).fail((function(t, e, r) {
                console.log("Item:load Error loading metadata: " + e + ", " + r),
                n.n = !0
            }
            ))
        }
        y(t) {
            if (this.h = parseInt(t.Item.Flags),
            this.b = parseInt(t.Item.InventoryType),
            this.g = parseInt(t.Item.InventoryType),
            this.c = parseInt(t.Item.ItemClass),
            this.d = parseInt(t.Item.ItemSubClass),
            t.ComponentTextures)
                for (let e in this.j = [],
                t.ComponentTextures) {
                    const r = parseInt(e)
                      , n = lf.a(this.a, t.TextureFiles[t.ComponentTextures[e]], this.a.o, this.a.p, this.a.n);
                    if (n) {
                        let t;
                        t = {
                            region: r,
                            gender: this.a.o,
                            file: n.a,
                            texture: null
                        },
                        r == yh ? this.b == sh && (this.a.A[2] = new Qh(this.a,2,n.a)) : t.texture = new Qh(this.a,r,n.a),
                        this.j.push(t)
                    }
                }
            if (this.k = t.Item.GeosetGroup,
            this.l = t.Item.AttachGeosetGroup,
            this.b == Zc) {
                0 == this.a.o ? this.u = t.Item.HideGeosetMale : this.v = t.Item.HideGeosetFemale
            }
            if (this.b == Jc ? this.i = [, , ] : Wc[this.b] != Lc.ARMOR && (this.i = [, ]),
            this.i)
                for (let e = 0; e < this.i.length; ++e) {
                    const r = {
                        race: this.s,
                        gender: this.t,
                        bone: -1,
                        attachment: null,
                        model: null
                    }
                      , n = {
                        type: Wc[this.b],
                        id: this.r,
                        parent: this.a,
                        shoulder: 0
                    };
                    this.b == Jc && (n.shoulder = e + 1),
                    r.e = new Nf(this.a.aS,this.a.k,n,e,!1,!1,!0),
                    r.e.n = this.s,
                    r.e.o = this.t,
                    r.e.bR(t, n.type),
                    this.i[e] = r
                }
            if ((this.b == $c || this.b == sh) && t.ComponentModels) {
                let e = 0;
                if (this.b == sh && (e = 1),
                t.ComponentModels[e]) {
                    const r = {
                        type: Wc[this.b],
                        id: this.r,
                        parent: this.a,
                        shoulder: 0
                    }
                      , n = new Nf(this.a.aS,this.a.k,r,0,!1,!1,!0);
                    n.u = t;
                    const i = {
                        race: 0,
                        gender: 0,
                        bone: -1,
                        attachment: null,
                        model: null
                    };
                    i.e = n,
                    this.i = [i];
                    let a = 1
                      , o = 0
                      , s = 1;
                    this.a && (a = this.a.n,
                    o = this.a.o,
                    s = this.a.p);
                    const u = t.ComponentModels[e]
                      , l = lf.b(n, t.ModelFiles[u], -1, o, s, a);
                    if (l) {
                        n.bP(Lc.PATH, l);
                        const r = 0 == e ? t.Textures : t.Textures2;
                        if (r)
                            for (let t in r)
                                0 != r[t] && (n.A[+t] = new Qh(n,parseInt(t),r[t]))
                    }
                }
            }
            const e = this.b;
            if ((e == Kc || e == Qc || e == lh || e == $c || e == th || e == nh || e == eh || e == Zc || e == sh) && t.ComponentModels) {
                let r = 0;
                if ((e == Zc || e == $c) && (r = 1),
                t.ComponentModels[r]) {
                    const n = t.ComponentModels[r];
                    if (n && t.ModelFiles && t.ModelFiles[n]) {
                        const i = {
                            type: Wc[e],
                            id: this.r,
                            parent: this.a,
                            shoulder: 0
                        }
                          , a = new Nf(this.a.aS,this.a.k,i,0,!1,!1,!0);
                        a.u = t,
                        a.aP = !0;
                        let o = 1
                          , s = 0
                          , u = 1;
                        this.a && (o = this.a.n,
                        s = this.a.o,
                        u = this.a.p);
                        const l = lf.b(a, t.ModelFiles[n], -1, s, u, o);
                        if (l) {
                            this.a ? this.a.y[l] ? this.p = this.a.y[l] : (this.a.y[l] = a,
                            this.p = a,
                            a.bP(Lc.PATH, l)) : a.bP(Lc.PATH, l);
                            const e = 0 == r ? t.Textures : t.Textures2;
                            if (e)
                                for (let t in e)
                                    0 != e[t] && (a.A[+t] = new Qh(a,parseInt(t),e[t]))
                        }
                    }
                }
            }
            if (e == th && 0 < this.k[2] && (this.f += 2),
            0 != this.o) {
                const t = 2 == this.c ? this.d : -1;
                for (let e = 0; e < this.i.length; e++)
                    this.q.push(new uf(this.i[e].e,t,this.o))
            }
            this.m = !0,
            this.a.bG()
        }
        z(t) {
            for (let t = 0; t < this.q.length; t++)
                this.q[t].g();
            this.q = [],
            this.o = t
        }
        A(t) {
            if (this.i) {
                if (this.a.d) {
                    const t = this.a.bM(this.e, this);
                    for (let e = 0; e < this.i.length; ++e)
                        if (this.i[e] && t.length > e) {
                            let r = this.a.aA[t[e]];
                            if (this.i[e].c = r.b,
                            this.i[e].d = r,
                            this.q[e] && this.q[e].b) {
                                const t = this.i[e].e;
                                for (let n = 0; n < this.q[e].b.length; n++)
                                    if (t.aA && this.q[e].b[n]) {
                                        if (5 > n) {
                                            if (!t.aA[n])
                                                continue;
                                            r = t.aA[n]
                                        } else
                                            r = t.bU(19);
                                        this.q[e].b[n].c = r.b,
                                        this.q[e].b[n].d = r
                                    }
                            }
                        }
                }
                let e = Ia.create()
                  , r = Pa.create();
                for (let n = 0; n < this.i.length; ++n) {
                    const i = this.i[n];
                    if (i && i.e && -1 < i.c && i.c < this.a.ao.length) {
                        this.q[n] && i.e.d && this.q[n].j(t);
                        let a = !1
                          , o = Uc[i.e.a.id];
                        if (Ia.identity(e),
                        o && (Pa.set(r, 1, 1, -1),
                        Ia.scale(e, e, r),
                        a = !0),
                        (this.b == hh || this.b == fh || this.e == hh) && 0 != (256 & this.h) && (Pa.set(r, 1, -1, 1),
                        Ia.scale(e, e, r),
                        a = !0,
                        i.e.h = !0),
                        i.e.aY = a,
                        5 == this.a.G && this.b == dh && 2 == this.c && 18 == this.d && (Ia.identity(e),
                        Ia.rotateX(e, e, -Sa / 2)),
                        27 == this.b) {
                            let t = i.e.u.Scale;
                            Pa.set(r, t, t, t),
                            Ia.scale(e, e, r)
                        }
                        i.e.br(this.a.T, this.a.ao[i.c].m, i.d.c, e),
                        i.e.bV(),
                        i.e.bX(t)
                    } else
                        i && i.e && -1 == i.c && this.a.bF(i.e, t)
                }
            }
        }
    }
      , hf = class {
        constructor(t) {
            this.c = t,
            this.b = 267320826 ^ t;
            let e = new ArrayBuffer(4);
            this.a = new DataView(e)
        }
        d() {
            let t = this.b;
            return t ^= t << 13,
            t ^= t >> 17,
            t ^= t << 5,
            this.b = t,
            t
        }
        e() {
            let t, e = this.d();
            return this.a.setInt32(0, 1065353216 | 8388607 & e),
            t = 2147483648 & e ? 2 - this.a.getFloat32(0) : this.a.getFloat32(0) - 2,
            t
        }
        f() {
            let t = this.d();
            return this.a.setInt32(0, 1065353216 | 8388607 & t),
            this.a.getFloat32(0) - 1
        }
    }
      , ff = class {
        constructor(t, e) {
            this.b = t,
            this.c = e,
            this.a = new class {
                constructor() {
                    this.a = 0,
                    this.b = 0,
                    this.c = 0,
                    this.d = 0,
                    this.e = Pa.create(),
                    this.f = 0,
                    this.g = 0,
                    this.h = 0,
                    this.i = 0,
                    this.j = 0
                }
            }
        }
        d() {
            return this.a.d + this.b.e() * this.c.u
        }
        e() {
            return this.a.d + this.c.u
        }
        f() {
            return this.a.c + this.c.s
        }
        g(t) {
            return this.a.c + 30518509e-12 * t * this.c.s
        }
        h() {
            let t = this.a.a;
            return t *= 1 + this.a.b * this.b.e(),
            t
        }
        i() {
            return this.a
        }
        j(t) {
            Pa.copy(t, this.a.e)
        }
    }
    ;
    var df = class extends ff {
        k(t, e) {
            let r, n = e * this.b.f(), i = this.b.e();
            r = 1 > i ? -1 < i ? da(32767 * i + .5) : -32767 : 32767,
            t.d = r;
            let a = this.g(r);
            .001 > a && (a = .001),
            t.b = function(t, e) {
                let r = xa(t)
                  , n = xa(e);
                return +(r - Da(r / n) * n).toPrecision(8) * ba(t)
            }(n, a),
            t.e = 65535 & this.b.d(),
            Pa.set(t.a, this.b.e() * this.a.g * .5, this.b.e() * this.a.h * .5, 0);
            let o = this.h()
              , s = this.a.f;
            if (.001 > s) {
                let e = this.a.i * this.b.e()
                  , r = this.a.j * this.b.e()
                  , n = wa(e)
                  , i = wa(r)
                  , a = Aa(e)
                  , s = Aa(r);
                Pa.set(t.c, s * n * o, i * n * o, a * o)
            } else {
                let e = Pa.create();
                Pa.copy(e, t.a),
                e[2] -= s,
                1e-4 < Pa.length(e) && (Pa.normalize(e, e),
                Pa.scale(t.c, e, o))
            }
        }
    }
    ;
    var bf = class extends ff {
        constructor(t, e, r) {
            super(t, e),
            this.ba = r
        }
        k(t, e) {
            let r, n = e * this.b.f(), i = this.b.e();
            r = 1 > i ? -1 < i ? da(32767 * i + .5) : -32767 : 32767,
            t.d = r;
            let a = this.g(r);
            .001 > a && (a = .001),
            t.b = function(t, e) {
                let r = xa(t)
                  , n = xa(e);
                return +(r - Da(r / n) * n).toPrecision(8) * ba(t)
            }(n, a),
            t.e = 65535 & this.b.d();
            let o = this.a.h - this.a.g
              , s = this.a.g + o * this.b.f()
              , u = this.a.i * this.b.e()
              , l = this.a.j * this.b.e()
              , c = Aa(u)
              , h = Pa.fromValues(c * Aa(l), c * wa(l), wa(u));
            Pa.scale(t.a, h, s);
            let f = this.h()
              , d = this.a.f
              , b = Pa.fromValues(.5, .5, .5);
            0 == d ? this.ba ? Pa.set(b, 0, 0, 1) : Pa.set(b, c * Aa(l), c * wa(l), wa(u)) : (Pa.set(b, 0, 0, d),
            Pa.subtract(b, t.a, b),
            1e-4 < Pa.length(b) && Pa.normalize(b, b)),
            Pa.scale(t.c, b, f)
        }
    }
    ;
    let mf = Array(128);
    for (let t = 0; 128 > t; t++)
        mf[t] = Math.random();
    const pf = Ia.fromValues(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    class gf {
    }
    class _f {
        constructor() {
            this.a = Pa.create(),
            this.b = 0,
            this.c = {
                a: za.create(),
                b: Pa.create(),
                c: 0,
                d: 0,
                e: 0
            }
        }
    }
    var vf = class {
        constructor(t, e) {
            this.E = 0,
            this.U = !1,
            this.a = (new Date).getTime(),
            this.b = t;
            let r = new class {
                constructor(t) {
                    this.a = t.getInt32(),
                    this.b = t.getUint32(),
                    this.c = Pa.fromValues(t.getFloat(), t.getFloat(), t.getFloat()),
                    this.d = t.getInt16(),
                    this.e = t.getInt16(),
                    0 != (268435456 & this.b) && (this.f = [0, 0, 0],
                    this.f[0] = 31 & this.e,
                    this.f[1] = 31 & this.e >> 5,
                    this.f[2] = 31 & this.e >> 10),
                    this.g = t.getUint8(),
                    this.h = t.getUint8(),
                    this.i = t.getUint16(),
                    this.j = t.getUint16(),
                    this.k = t.getUint16(),
                    this.l = t.getUint16(),
                    this.m = new Nh(t,Bh),
                    this.n = new Nh(t,Bh),
                    this.o = new Nh(t,Bh),
                    this.p = new Nh(t,Bh),
                    this.q = new Nh(t,Mh),
                    this.r = new Nh(t,Bh),
                    this.s = t.getFloat(),
                    this.t = new Nh(t,Bh),
                    this.u = t.getFloat(),
                    this.v = new Nh(t,Bh),
                    this.w = new Nh(t,Bh),
                    this.x = new Nh(t,Bh),
                    this.y = new Lh(t),
                    this.z = new Vh(t),
                    this.A = new Oh(t),
                    this.B = [t.getFloat(), t.getFloat()],
                    this.C = new Vh(t),
                    this.D = new Vh(t),
                    this.E = t.getFloat(),
                    this.F = t.getFloat(),
                    this.G = t.getFloat(),
                    this.H = [t.getFloat(), t.getFloat()],
                    this.I = t.getFloat(),
                    this.J = t.getFloat(),
                    this.K = t.getFloat(),
                    this.L = t.getFloat(),
                    this.M = t.getFloat(),
                    this.N = t.getFloat(),
                    this.O = Pa.fromValues(t.getFloat(), t.getFloat(), t.getFloat()),
                    this.P = Pa.fromValues(t.getFloat(), t.getFloat(), t.getFloat()),
                    this.Q = Pa.fromValues(t.getFloat(), t.getFloat(), t.getFloat()),
                    this.R = t.getFloat(),
                    this.S = t.getFloat(),
                    this.T = t.getFloat(),
                    this.U = t.getFloat(),
                    this.V = t.getFloat();
                    var e = t.getInt32();
                    this.W = Array(e);
                    for (var r = 0; r < e; r++)
                        this.W[r] = Pa.fromValues(t.getFloat(), t.getFloat(), t.getFloat());
                    this.X = new Nh(t,Uh),
                    this.Y = za.fromValues(t.getFloat(), t.getFloat()),
                    this.Z = [za.fromValues(t.getFloat(), t.getFloat()), za.fromValues(t.getFloat(), t.getFloat())],
                    this.aa = [za.fromValues(t.getFloat(), t.getFloat()), za.fromValues(t.getFloat(), t.getFloat())]
                }
            }
            (e);
            if (11 <= r.i && 13 >= r.i) {
                let e;
                t.u.Item && t.u.Item.ParticleColor ? e = t.u.Item.ParticleColor : t.u.Creature && t.u.Creature.ParticleColor && (e = t.u.Creature.ParticleColor),
                e && (this.H = [Ba.create(), Ba.create(), Ba.create()],
                Ba.copy(this.H[0], ha(e.Start[r.i - 11])),
                Ba.copy(this.H[1], ha(e.Mid[r.i - 11])),
                Ba.copy(this.H[2], ha(e.End[r.i - 11])))
            }
            this.c = r,
            this.d = Ia.create(),
            this.e = Ia.create(),
            this.f = Ia.create(),
            this.g = Ia.create(),
            this.h = Ba.create(),
            this.i = Ma.create(),
            this.j = Pa.create(),
            this.k = 1,
            this.l = Pa.create(),
            this.m = 0,
            this.n = Pa.create(),
            this.o = Pa.create(),
            this.p = [],
            this.q = Pa.create(),
            this.r = 0,
            this.s = 0,
            this.t = 0,
            this.u = 0,
            this.v = Pa.create(),
            this.w = Pa.create(),
            this.x = 0,
            this.y = 0,
            this.z = 0,
            this.A = 0,
            this.B = 0,
            this.C = 0,
            this.D = 0,
            this.F = [],
            this.G = [];
            for (let t = 0; t < 1e3; t++)
                this.G.push(4 * t + 0),
                this.G.push(4 * t + 1),
                this.G.push(4 * t + 2),
                this.G.push(4 * t + 3),
                this.G.push(4 * t + 2),
                this.G.push(4 * t + 1);
            switch (this.J = new hf(2147483647 * Math.random() >> 0),
            this.c.h) {
            case 1:
                this.I = new df(this.J,r);
                break;
            case 2:
                this.I = new bf(this.J,r,0 != (256 & this.c.b));
                break;
            default:
                this.I = null,
                WH.debug("Found unimplemented generator ", this.c.h)
            }
            const n = this.c.U - this.c.S;
            0 == n ? (this.s = 0,
            this.t = 0) : (this.s = (this.c.V - this.c.T) / n,
            this.t = this.c.T - this.c.S * this.s);
            let i = this.c.l;
            0 >= i && (i = 1);
            let a = this.c.k;
            0 >= a && (a = 1),
            this.y = i * a - 1,
            this.z = 0;
            let o = i
              , s = -1;
            do {
                ++s,
                o >>= 1
            } while (o);
            if (this.A = s,
            this.B = i - 1,
            this.z = 0,
            0 < (32768 & this.c.b)) {
                let t = (this.y + 1) * this.J.d();
                this.z = 0 | t / 4294967296
            }
            if (this.C = 1 / i,
            this.D = 1 / a,
            0 < (269484032 & this.c.b)) {
                const t = 0 != (1 & this.c.b >> 28);
                this.r = t ? 2 : 3
            } else
                this.r = 0;
            this.K = 1 < r.g
        }
        W() {
            var t = this;
            t.b = null,
            t.c.c = null,
            t.c.O = null,
            t.c.P = null,
            t.c.m = t.c.m.e(),
            t.c.n = t.c.n.e(),
            t.c.o = t.c.o.e(),
            t.c.p = t.c.p.e(),
            t.c.q = t.c.q.e(),
            t.c.r = t.c.r.e(),
            t.c.t = t.c.t.e(),
            t.c.v = t.c.v.e(),
            t.c.w = t.c.w.e(),
            t.c.x = t.c.x.e(),
            t.c.X = t.c.X.e(),
            t.c.y = t.c.y.d(),
            t.c.z = t.c.z.d(),
            t.c.A = t.c.A.d(),
            t.c.C = t.c.C.d(),
            t.c.D = t.c.D.d(),
            t.p = null
        }
        X(t, e, r) {
            if (!this.I)
                return;
            let n = Ia.create()
              , i = this.I.i()
              , a = !0;
            this.c.X.c(t.a.a) && (a = 0 < this.c.X.d(t, this.b.aX)),
            this.T = a;
            const o = Pa.fromValues(0, 0, 0);
            a && (i.a = this.c.m.d(t, this.b.aX, 0),
            i.b = this.c.n.d(t, this.b.aX, 0),
            i.i = this.c.o.d(t, this.b.aX, 0),
            i.j = this.c.p.d(t, this.b.aX, 0),
            this.c.q.d(t, this.b.aX, o, i.e),
            i.c = this.c.r.d(t, this.b.aX, 0),
            i.d = this.c.t.d(t, this.b.aX, 0),
            i.h = this.c.w.d(t, this.b.aX, 0),
            i.g = this.c.v.d(t, this.b.aX, 0),
            i.f = r ? r.a : this.c.x.d(t, this.b.aX, 0)),
            Ia.multiply(n, n, this.b.T),
            Ia.multiply(n, n, this.b.ao[this.c.d].m);
            let s = Ia.create();
            Ia.fromTranslation(s, Pa.fromValues(this.c.c[0], this.c.c[1], this.c.c[2])),
            Ia.multiply(n, n, s),
            Ia.multiply(n, n, pf);
            let u = Ia.create()
              , l = Pa.create();
            Ia.invert(u, this.b.aS.viewMatrix),
            Ia.getTranslation(l, u),
            this.aa(e, n, l, null, this.b.aS.viewMatrix),
            this.ak(this.b.aS.viewMatrix);
            let c = this.b.aS.context;
            this.L ? (c.bindBuffer(c.ARRAY_BUFFER, this.L),
            c.bufferData(c.ARRAY_BUFFER, new Float32Array(this.F), c.DYNAMIC_DRAW)) : (this.L = c.createBuffer(),
            c.bindBuffer(c.ARRAY_BUFFER, this.L),
            c.bufferData(c.ARRAY_BUFFER, new Float32Array(this.F), c.DYNAMIC_DRAW)),
            this.M || (this.M = c.createBuffer(),
            c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.M),
            c.bufferData(c.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.G), c.DYNAMIC_DRAW))
        }
        Y(t) {
            if (0 >= this.p.length)
                return;
            const e = this.b.aS.context;
            if (this.V || (this.V = new Zh,
            this.V.a = pe(e, ["        attribute vec3 aPosition;\n        attribute vec4 aColor;        attribute vec2 aTexcoord0;        attribute vec2 aTexcoord1;        attribute vec2 aTexcoord2;                varying vec4 vColor;        varying vec2 vTexcoord0;        varying vec2 vTexcoord1;        varying vec2 vTexcoord2;                uniform mat4 uModelMatrix;        uniform mat4 uViewMatrix;        uniform mat4 uProjMatrix;                void main(void) {            vec4 pos = vec4(aPosition, 1);                        gl_Position = uProjMatrix * pos;                    vColor = aColor;        vTexcoord0 = aTexcoord0;        vTexcoord1 = aTexcoord1;        vTexcoord2 = aTexcoord2;        }    ", "        precision mediump float;\n                varying vec4 vColor;        varying vec2 vTexcoord0;        varying vec2 vTexcoord1;        varying vec2 vTexcoord2;                uniform bool uHasTexture;        uniform bool uHasTexture2;        uniform bool uHasTexture3;        uniform bool uHasAlpha;        uniform int uBlendMode;        uniform int uPixelShader;        uniform sampler2D uTexture;        uniform sampler2D uTexture2;        uniform sampler2D uTexture3;        uniform float uAlphaTreshold;                void main(void) {            float lo_thresh = 0.01;            vec4 color = vec4(1, 1, 1, 1);            vec4 tex = vec4(1, 1, 1, 1);            vec4 tex2 = vec4(1, 1, 1, 1);            vec4 tex3 = vec4(1, 1, 1, 1);            if (uHasTexture) {                tex = texture2D(uTexture, vTexcoord0).rgba;            }            if (uHasTexture2) {                tex2 = texture2D(uTexture2, vTexcoord1).rgba;            }            if (uHasTexture3) {                tex3 = texture2D(uTexture3, vTexcoord2).rgba;            }            vec4 finalColor = vec4((tex * vColor ).rgb, tex.a*vColor.a );            if (uPixelShader == 0) {                 vec3 matDiffuse = vColor.xyz * tex.rgb;                finalColor = vec4(matDiffuse.rgb, tex.a*vColor.a);            } else if (uPixelShader == 1) {             vec4 textureMod = tex*tex2;             float texAlpha = (textureMod.w * tex3.w);             float opacity = texAlpha*vColor.a;             vec3 matDiffuse = vColor.xyz * textureMod.rgb;             finalColor = vec4(matDiffuse.rgb, opacity);            } else if (uPixelShader == 2) {              vec4 textureMod = tex*tex2*tex3;             float texAlpha = (textureMod.w);             float opacity = texAlpha*vColor.a;             vec3 matDiffuse = vColor.xyz * textureMod.rgb;             finalColor = vec4(matDiffuse.rgb, opacity);            } else if (uPixelShader == 3) {              vec4 textureMod = tex*tex2*tex3;             float texAlpha = (textureMod.w);             float opacity = texAlpha*vColor.a;             vec3 matDiffuse = vColor.xyz * textureMod.rgb;             finalColor = vec4(matDiffuse.rgb, opacity);            };            if (finalColor.a < uAlphaTreshold ) discard;            gl_FragColor = finalColor;        }    "], null, null),
            this.V.b = {},
            this.V.a.attributes = [{
                loc: e.getAttribLocation(this.V.a.program, "aPosition"),
                type: e.FLOAT,
                size: 3,
                offset: 0,
                stride: 52
            }, {
                loc: e.getAttribLocation(this.V.a.program, "aColor"),
                type: e.FLOAT,
                size: 4,
                offset: 12,
                stride: 52
            }, {
                loc: e.getAttribLocation(this.V.a.program, "aTexcoord0"),
                type: e.FLOAT,
                size: 2,
                offset: 28,
                stride: 52
            }, {
                loc: e.getAttribLocation(this.V.a.program, "aTexcoord1"),
                type: e.FLOAT,
                size: 2,
                offset: 36,
                stride: 52
            }, {
                loc: e.getAttribLocation(this.V.a.program, "aTexcoord2"),
                type: e.FLOAT,
                size: 2,
                offset: 44,
                stride: 52
            }],
            this.V.c = this.L,
            this.V.d = this.M,
            this.V.m = this.c.j),
            !this.S)
                if (this.S = [null, null, null],
                0 != (268435456 & this.c.b)) {
                    WH.debug("multitexture particle", this.c.f[0], this.c.f[1], this.c.f[2], this);
                    for (let t = 0; t < this.c.f.length; t++) {
                        const e = this.c.f[t];
                        -1 < e && e < this.b.av.length && (this.S[t] = this.b.av[e])
                    }
                } else
                    -1 < this.c.e && this.c.e < this.b.av.length && (this.S[0] = this.b.av[this.c.e]);
            if (!this.S[0].f || !this.S[0].f.f)
                return;
            this.V.b.uViewMatrix = this.b.aS.viewMatrix,
            this.V.b.uProjMatrix = this.b.aS.projMatrix,
            this.V.b.uBlendMode = this.c.g,
            this.V.b.uPixelShader = 1 < this.r ? this.r - 1 : 0;
            let r = [this.S[0] && this.S[0].f && this.S[0].f.f, this.S[1] && this.S[1].f && this.S[1].f.f, this.S[2] && this.S[2].f && this.S[2].f.f];
            this.V.b.uTexture = this.S[0].f.d,
            this.V.b.uTexture2 = r[1] ? this.S[1].f.d : null,
            this.V.b.uTexture3 = r[2] ? this.S[2].f.d : null,
            this.V.b.uHasTexture = r[0] ? 1 : 0,
            this.V.b.uHasTexture2 = r[1] ? 1 : 0,
            this.V.b.uHasTexture3 = r[2] ? 1 : 0;
            let n = this.c.g;
            4 == n && (n = 3),
            this.V.e = n,
            this.V.i = !this.b.aY;
            let i = -1;
            1 == n ? i = .501960814 : 1 < n && (i = 1 / 255),
            this.V.b.uAlphaTreshold = i,
            this.V.h = !1,
            this.V.f = !1,
            this.V.j = e.TRIANGLES,
            this.V.k = 6 * this.E >> 0,
            this.V.l = 0,
            t.push(this.V)
        }
        Z(t, e) {
            if (0 == (16 & this.c.b))
                for (let r = 0; r < this.p.length; r++) {
                    const n = this.p[r];
                    Pa.transformMat4(n.a, n.a, t),
                    Pa.transformMat3(n.c, n.c, e)
                }
        }
        aa(t, e, r, n, i) {
            if (null != this.I && !this.b.R) {
                Ia.getTranslation(this.l, this.d);
                let r = Ba.create();
                Ia.getTranslation(r, e),
                r[4] = 1,
                Ba.transformMat4(r, r, i),
                this.m = r[2];
                let a = Pa.create();
                if (Ia.getTranslation(a, i),
                this.ab(e, a, n),
                0 < t) {
                    let e = Pa.create();
                    if (Ia.getTranslation(e, this.d),
                    16384 & this.c.b) {
                        Pa.subtract(this.o, e, this.l);
                        let r = this.s * (Pa.length(this.o) / t) + this.t;
                        0 <= r && (r = ka(r, 1)),
                        Pa.scale(this.n, this.o, r)
                    }
                    if (64 & this.c.b) {
                        this.u += t;
                        let r = .03;
                        if (this.u > r)
                            if (this.u = 0,
                            0 == this.p.length) {
                                let t = r / this.u
                                  , n = Pa.create();
                                Pa.subtract(n, e, this.l);
                                let i = t * this.c.I;
                                Pa.multiply(this.v, n, Pa.fromValues(i, i, i))
                            } else
                                Pa.set(this.v, 0, 0, 0)
                    }
                    this.ac(t)
                }
            }
        }
        ab(t, e, r) {
            if (Pa.copy(this.w, e),
            null == r || 16 & this.c.b)
                Ia.copy(this.d, t);
            else {
                let e = Ia.create();
                Ia.invert(e, r),
                Ia.multiply(this.d, e, t)
            }
            let n = Pa.create();
            Ia.getScaling(n, t),
            this.k = n[0]
        }
        ac(t) {
            if (.1 > (t = Ca(t, 0)))
                Pa.copy(this.n, this.o);
            else {
                let e = Da(t / .1);
                t = -.1 * e + t;
                let r = ka(Da(this.I.i().lifespan / .1), e)
                  , n = r + 1
                  , i = 1;
                i = 0 > n ? (1 & n | n >> 1) + (1 & n | n >> 1) : n,
                Pa.scale(this.n, this.o, 1 / i);
                for (let t = 0; t < r; t++)
                    this.ad(.1)
            }
            this.ad(t)
        }
        ad(t) {
            let e = new gf;
            if (!(0 > t)) {
                this.c.b,
                this.ae(e, t),
                this.af(t);
                for (let r, n = 0; n < this.p.length; )
                    r = this.p[n],
                    r.b += t,
                    (r.b > Ca(this.I.g(r.e), .001) || !this.aj(r, t, e)) && (this.ai(n),
                    n--),
                    n++
            }
        }
        ae(t, e) {
            t.a = Pa.create(),
            t.b = Pa.create(),
            t.c = Pa.create(),
            t.d = 0;
            let r = Pa.fromValues(e, e, e)
              , n = e * e * .5
              , i = Pa.fromValues(n, n, n);
            Pa.multiply(t.a, this.c.Q, r);
            let a = Pa.create();
            this.I.j(a),
            Pa.multiply(t.b, a, r),
            Pa.multiply(t.c, a, i),
            t.d = this.c.J * e
        }
        af(t) {
            if (this.T) {
                let e = this.I.d();
                for (this.x += t * e; 1 < this.x; )
                    this.ag(t),
                    this.x -= 1
            }
        }
        ag(t) {
            let e = this.ah();
            if (this.I.k(e, t),
            !(16 & this.c.b)) {
                let t = Ba.fromValues(e.a[0], e.a[1], e.a[2], 1)
                  , r = Ba.fromValues(e.c[0], e.c[1], e.c[2], 0);
                Ba.transformMat4(t, t, this.d),
                Ba.transformMat4(r, r, this.d),
                Pa.copy(e.a, t),
                Pa.copy(e.c, r),
                8192 & this.c.b && (e.a[2] = 0)
            }
            if (64 & this.c.b) {
                let t = 1 + this.I.i().speedVariation * this.J.e()
                  , r = Pa.create();
                Pa.scale(r, this.v, t),
                Pa.add(e.c, e.c, r)
            }
            if (2 <= this.r)
                for (let t = 0; 2 > t; t++) {
                    e.f[t][0] = this.J.f(),
                    e.f[t][1] = this.J.f();
                    let r = za.create();
                    za.scale(r, this.c.aa[t], this.J.e()),
                    za.add(e.g[t], r, this.c.Z[t])
                }
        }
        ah() {
            let t = new class {
                constructor() {
                    this.a = Pa.create(),
                    this.b = 0,
                    this.c = Pa.create(),
                    this.d = 0,
                    this.e = 2147483647 * Math.random() >> 0,
                    this.f = [za.create(), za.create()],
                    this.g = [za.create(), za.create()]
                }
            }
            ;
            return this.p.push(t),
            t
        }
        ai(t) {
            this.p.splice(t, 1)
        }
        aj(t, e, r) {
            if (2 <= this.r)
                for (let r, n = 0; 2 > n; n++)
                    r = t.f[n][0] + e * t.g[n][0],
                    t.f[n][0] = r - Da(r),
                    r = t.f[n][1] + e * t.g[n][1],
                    t.f[n][1] = r - Da(r);
            Pa.add(t.c, t.c, r.a),
            16384 & this.c.b && 2 * e < t.b && Pa.add(t.a, t.a, this.n);
            let n = Pa.fromValues(e, e, e)
              , i = Pa.create();
            if (Pa.multiply(i, t.c, n),
            Pa.add(t.c, t.c, r.b),
            Pa.scale(t.c, t.c, 1 - r.d),
            Pa.add(t.a, t.a, i),
            Pa.add(t.a, t.a, r.c),
            2 == this.c.h && 128 & this.c.b) {
                let e = Pa.create();
                if (Pa.copy(e, t.a),
                16 & this.c.b) {
                    if (0 < Pa.dot(e, i))
                        return !1
                } else {
                    let r = Pa.create();
                    if (Ia.getTranslation(r, this.d),
                    Pa.subtract(e, t.a, r),
                    0 < Pa.dot(e, i))
                        return !1
                }
            }
            return !0
        }
        ak(t) {
            if (this.F.length = 0,
            0 != this.p.length || null == this.I) {
                Ia.invert(this.f, t);
                let e = Ma.create();
                Ma.fromMat4(e, t),
                this.al(null, t);
                let r = 0;
                for (let t = 0; t < this.p.length; t++) {
                    let e = this.p[t]
                      , n = new _f;
                    if (this.an(e, n) && (131072 & this.c.b && (this.ap(e, n),
                    r++),
                    262144 & this.c.b && (this.aq(e, n),
                    r++)),
                    r >= 1e3)
                        break
                }
                this.E = r
            }
        }
        al(t, e) {
            16 & this.c.b ? Ia.multiply(this.g, e, this.d) : null == t ? Ia.copy(this.g, e) : Ia.multiply(this.g, e, t),
            Ia.getTranslation(this.h, e),
            4096 & this.c.b && (Ma.fromMat4(this.i, this.g),
            16 & this.c.b && 0 < xa(this.k) && Ma.multiplyScalar(this.i, this.i, 1 / this.k),
            Pa.set(this.j, this.i[6], this.i[7], this.i[8]),
            2.3841858e-7 >= Pa.squaredLength(this.j) ? Pa.set(this.j, 0, 0, 1) : Pa.normalize(this.j, this.j))
        }
        am(t) {
            let e = 0
              , r = 0;
            if (0 != this.c.K || 0 != this.c.N) {
                let n = new hf(t.e);
                e = 0 == this.c.L ? this.c.K : this.c.K + n.e() * this.c.L,
                r = 0 == this.c.N ? this.c.M : this.c.M + n.e() * this.c.N
            } else
                e = this.c.K,
                r = this.c.M;
            return {
                deltaSpin: r,
                baseSpin: e
            }
        }
        an(t, e) {
            let r = this.c.G
              , n = this.c.H
              , i = n[0]
              , a = n[1] - i
              , o = 0
              , s = t.e
              , u = t.b;
            if ((1 > r || 0 != a) && (o = 127 & u * this.c.F + s),
            r < mf[o])
                return 0;
            this.ao(t, e, s);
            let l = a * mf[o] + i;
            za.scale(e.c.a, e.c.a, l),
            32 & this.c.b && za.scale(e.c.a, e.c.a, this.k);
            let c = Ba.fromValues(t.a[0], t.a[1], t.a[2], 1);
            return Ba.transformMat4(c, c, this.g),
            Pa.copy(e.a, c),
            e.b = 1,
            1
        }
        ao(t, e, r) {
            let n = t.b / this.I.f()
              , i = new hf(r);
            0 >= ka(n, 1) ? n = 0 : 1 <= n && (n = 1);
            let a = Pa.fromValues(255, 255, 255)
              , o = za.fromValues(1, 1)
              , s = 1
              , u = e.c;
            this.c.y.i(n, a, u.b, this.H),
            this.H || Pa.scale(u.b, u.b, 1 / 255),
            this.c.A.i(n, o, u.a),
            u.e = this.c.z.i(n, 1) / 32767;
            let l = 0;
            0 < this.c.C.a.length ? (s = 0,
            u.c = this.c.C.i(n, s),
            u.c = this.y & u.c + this.z) : 65536 & this.c.b ? (l = (this.y + 1) * i.d(),
            u.c = 0 | l / 4294967296) : u.c = 0,
            s = 0,
            u.d = this.c.D.i(n, s),
            u.d = u.d + this.z & this.y;
            let c = 1;
            524288 & this.c.b ? (c = Ca(1 + i.e() * this.c.B[1], 99999997e-12),
            u.a[0] = Ca(1 + i.e() * this.c.B[0], 99999997e-12) * u.a[0]) : (c = Ca(1 + i.e() * this.c.B[0], 99999997e-12),
            u.a[0] = c * u.a[0]),
            u.a[1] = c * u.a[1]
        }
        ap(t, e) {
            let r = za.fromValues((e.c.c & this.B) * this.C, (e.c.c >> this.A) * this.D)
              , n = 0
              , i = 0
              , a = this.am(t);
            n = a.baseSpin,
            i = a.deltaSpin;
            let o = 0
              , s = Pa.fromValues(0, 0, 0)
              , u = Pa.fromValues(0, 0, 0)
              , l = !1
              , c = !1;
            if (4 & this.c.b && 2.3841858e-7 < Pa.squaredLength(t.c))
                if (o = 1,
                4096 & this.c.b)
                    l = !0;
                else {
                    let r = Ba.fromValues(-t.c[0], -t.c[1], -t.c[2], 0);
                    Ba.transformMat4(r, r, this.g);
                    let n = Pa.create();
                    Pa.copy(n, r);
                    let i = 0
                      , a = Pa.squaredLength(n);
                    i = 2.3841858e-7 >= a ? 0 : 1 / Fa(a);
                    let o = Pa.create();
                    Pa.copy(o, n),
                    Pa.scale(o, o, i),
                    Pa.copy(s, o),
                    Pa.scale(s, s, e.c.a[0]),
                    u = Pa.fromValues(o[1], -o[0], 0),
                    Pa.scale(u, u, e.c.a[1]),
                    c = !0,
                    l = !1
                }
            if ((4096 & this.c.b || l) && !c) {
                let r = Ma.create();
                Ma.copy(r, this.i);
                let a = e.c.a[0];
                if (o) {
                    let n = 0
                      , i = Pa.fromValues(-t.c[0], -t.c[1], -t.c[2])
                      , o = Pa.squaredLength(i);
                    n = 2.3841858e-7 >= o ? 0 : 1 / Fa(o),
                    Ma.multiply(r, this.i, Ma.fromValues(i[0] * n, i[1] * n, 0, -i[1] * n, i[0] * n, 0, 0, 0, 1)),
                    2.3841858e-7 < n && (a = e.c.a[0] * (1 / Fa(Pa.squaredLength(t.c)) / n))
                }
                if (this.r,
                Pa.set(s, r[0], r[1], r[2]),
                Pa.scale(s, s, a),
                Pa.set(u, r[4], r[5], r[6]),
                Pa.scale(u, u, e.c.a[1]),
                i = u[0],
                c = !0,
                0 != this.c.M || 0 != this.c.N) {
                    let e = n + i * t.b;
                    512 & this.c.b && 1 & t.e && (e = -e);
                    let r = Pa.create();
                    Pa.copy(r, this.j),
                    this.r;
                    let a = Ma.create()
                      , o = Ua.create();
                    Ua.setAxisAngle(o, r, e),
                    Ma.fromQuat(a, o),
                    Pa.transformMat3(s, s, a),
                    Pa.set(u, i, u[1], u[2]),
                    Pa.transformMat3(u, u, a)
                }
            }
            if (!c)
                if (0 != this.c.M || 0 != this.c.N) {
                    let r = n + i * t.b;
                    512 & this.c.b && 1 & t.e && (r = -r);
                    let a = Aa(r)
                      , o = wa(r);
                    Pa.set(s, a, o, 0),
                    Pa.scale(s, s, e.c.a[0]),
                    Pa.set(u, -o, a, 0),
                    Pa.scale(u, u, e.c.a[1]),
                    134217728 & this.c.b && Pa.add(e.a, e.a, Pa.fromValues(u[0], u[1], 0))
                } else
                    Pa.set(s, e.c.a[0], 0, 0),
                    Pa.set(u, 0, e.c.a[1], 0);
            return this.ar(s, u, e.a, e.c.b, e.c.e, r[0], r[1], t.f),
            0
        }
        aq(t, e) {
            let r = za.fromValues((e.c.d & this.B) * this.C, (e.c.d >> this.A) * this.D)
              , n = Pa.fromValues(0, 0, 0)
              , i = Pa.fromValues(0, 0, 0)
              , a = this.c.E;
            1024 & this.c.b && (a = ka(t.b, a));
            let o = Ba.create();
            Pa.scale(o, t.c, -1),
            o[3] = 0,
            Ba.transformMat4(o, o, this.g),
            Pa.scale(o, o, a);
            let s = Pa.fromValues(o[0], o[1], 0);
            if (1e-4 < Pa.dot(s, s)) {
                let t = 1 / Pa.length(s);
                za.scale(e.c.a, e.c.a, t),
                za.multiply(s, s, e.c.a),
                i = Pa.fromValues(-s[1], s[0], 0),
                Pa.scale(n, o, .5),
                Pa.add(e.a, e.a, n)
            } else
                n = Pa.fromValues(.05 * e.c.a[0], 0, 0),
                i = Pa.fromValues(0, .05 * e.c.a[1], 0);
            return this.ar(n, i, e.a, e.c.b, e.c.e, r[0], r[1], t.f),
            1
        }
        ar(t, e, r, n, i, a, o, s) {
            const u = [-1, -1, 1, 1]
              , l = [1, -1, 1, -1]
              , c = [0, 0, 1, 1]
              , h = [0, 1, 0, 1];
            let f = Pa.create()
              , d = za.create()
              , b = za.create()
              , m = za.create();
            for (let p = 0; 4 > p; p++)
                Pa.set(f, 0, 0, 0),
                Pa.scaleAndAdd(f, f, t, u[p]),
                Pa.scaleAndAdd(f, f, e, l[p]),
                Pa.add(f, f, r),
                za.set(d, c[p] * this.C + a, h[p] * this.D + o),
                za.set(b, c[p] * this.c.Y[0] + s[0][0], h[p] * this.c.Y[0] + s[0][1]),
                za.set(m, c[p] * this.c.Y[1] + s[1][0], h[p] * this.c.Y[1] + s[1][1]),
                this.F.push(f[0]),
                this.F.push(f[1]),
                this.F.push(f[2]),
                this.F.push(n[0]),
                this.F.push(n[1]),
                this.F.push(n[2]),
                this.F.push(i),
                this.F.push(d[0]),
                this.F.push(d[1]),
                this.F.push(b[0]),
                this.F.push(b[1]),
                this.F.push(m[0]),
                this.F.push(m[1])
        }
    }
      , xf = class {
        constructor(t) {
            this.a = t.getFloat()
        }
    }
      , yf = class {
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
            for (var e = "", r = 0; r < t; ++r)
                e += Ra(this.getUint8());
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
    class Tf {
        constructor() {
            this.a = Pa.create(),
            this.b = Ba.create(),
            this.c = za.create()
        }
    }
    class wf {
    }
    const Af = [0, 1, 2, 10, 3, 4, 5, 13];
    class Ef {
    }
    var Sf = class {
        constructor(t, e) {
            this.g = Pa.create(),
            this.h = Pa.create(),
            this.p = new wf,
            this.q = Pa.create(),
            this.r = Pa.create(),
            this.s = Pa.create(),
            this.t = Pa.create(),
            this.u = Pa.create(),
            this.v = Pa.create(),
            this.w = Pa.create(),
            this.x = Pa.create(),
            this.y = Pa.create(),
            this.z = Pa.create(),
            this.A = Pa.create(),
            this.B = Pa.create(),
            this.O = Pa.create(),
            this.V = t.aS.context,
            this.a = t;
            let r = new Ef;
            var n;
            if (r.a = e.getInt32(),
            r.b = e.getInt32(),
            r.c = Pa.fromValues(e.getFloat(), e.getFloat(), e.getFloat()),
            0 < (n = e.getInt32())) {
                r.j = Array(n);
                for (let t = 0; t < n; ++t)
                    r.j[t] = e.getInt16()
            }
            if (0 < (n = e.getInt32())) {
                r.k = Array(n);
                for (let t = 0; t < n; ++t)
                    r.k[t] = e.getInt16()
            }
            r.l = new Nh(e,Mh),
            r.m = new Nh(e,Ph),
            r.n = new Nh(e,Bh),
            r.o = new Nh(e,Bh),
            r.d = e.getFloat(),
            r.e = e.getFloat(),
            r.f = e.getFloat(),
            r.g = e.getInt16(),
            r.h = e.getInt16(),
            r.p = new Nh(e,Ph),
            r.q = new Nh(e,Uh),
            r.r = e.getInt16(),
            this.U = r,
            this.ab = Array(r.k.length),
            this.ae = Array(r.k.length);
            for (let e = 0; e < r.k.length; e++)
                this.ae[e] = t.au[r.k[e]];
            let i = Ba.fromValues(255, 255, 255, 255)
              , a = new wf;
            a.a = 0,
            a.b = 0,
            a.c = 1,
            a.d = 1,
            this.au(r.d, r.e, i, a, r.h, r.g),
            this.ag(r.f),
            this.af(!1)
        }
        af(t) {
            this.L = t,
            this.L || (this.J = !1)
        }
        ag(t) {
            this.S = t
        }
        ah() {
            return !1
        }
        ai(t) {
            this.R = t
        }
        aj(t) {
            this.Q = t
        }
        ak(t) {
            this.F[3] = Ca(t, 0)
        }
        al() {
            let t = Pa.create();
            Pa.sub(t, this.g, this.O);
            let e = Pa.squaredLength(t);
            Pa.scale(t, this.q, this.R),
            Pa.subtract(this.w, this.g, t),
            Pa.scale(t, this.r, this.R),
            Pa.subtract(this.x, this.O, t),
            Pa.scale(t, this.q, this.Q),
            Pa.add(this.y, this.g, t),
            Pa.scale(t, this.r, this.Q),
            Pa.add(this.z, this.O, t),
            Pa.scale(this.u, this.s, e),
            Pa.scale(this.v, this.t, e)
        }
        am(t, e) {
            let r;
            if (this.M && this.L) {
                r = t;
                let n = Pa.create();
                Ia.getTranslation(n, r),
                Pa.add(n, n, e),
                Pa.copy(this.h, e),
                this.J ? (Pa.copy(this.g, this.O),
                Pa.copy(this.s, this.t),
                Pa.copy(this.q, this.r)) : (Pa.copy(this.g, n),
                this.s = fa(r, 2),
                this.q = fa(r, 1),
                this.f = 0,
                this.J = !0),
                this.O = n,
                this.t = fa(r, 2),
                this.r = fa(r, 1)
            }
        }
        an(t) {
            var e = Ma.create();
            Ma.fromMat4(e, t),
            this.s = Pa.transformMat3(this.s, this.s, e),
            this.q = Pa.transformMat3(this.q, this.q, e),
            this.t = Pa.transformMat3(this.t, this.t, e),
            this.r = Pa.transformMat3(this.r, this.r, e),
            this.g = Pa.transformMat4(this.g, this.g, t),
            this.O = Pa.transformMat4(this.O, this.O, t);
            for (var r = 0; r < this.i.length; r++)
                Pa.transformMat4(this.i[r].a, this.i[r].a, t)
        }
        ao(t, e, r) {
            this.F[2] = r,
            this.F[1] = e,
            this.F[0] = t
        }
        ap(t) {
            if (this.P != t) {
                this.P = t;
                let e = t % this.I
                  , r = e;
                0 != (2147483648 & e) && (r = (1 & e | e >> 1) + (1 & e | e >> 1));
                let n = r * this.l + this.G.b;
                this.p.b = n;
                let i = t / this.I
                  , a = i;
                0 != (2147483648 & i) && (i = 1 & i | i >> 1,
                a = i + i,
                n = this.p.b);
                let o = a * this.m + this.G.a;
                this.p.a = o,
                this.p.d = n + this.l,
                this.p.c = o + this.m
            }
        }
        aq(t, e, r) {
            let n, i = this.i[2 * this.d], a = this.i[2 * this.d + 1], o = Pa.create();
            Pa.scale(o, this.v, 1 - e),
            Pa.subtract(o, this.x, o),
            Pa.scale(i.a, o, e),
            Pa.scale(o, this.u, e),
            Pa.add(o, this.w, o),
            Pa.scale(o, o, 1 - e),
            Pa.add(i.a, i.a, o),
            Pa.scale(o, this.v, 1 - e),
            Pa.subtract(o, this.z, o),
            Pa.scale(a.a, o, e),
            Pa.scale(o, this.u, e),
            Pa.add(o, this.y, o),
            Pa.scale(o, o, 1 - e),
            Pa.add(a.a, a.a, o),
            this.c[this.d] = t,
            n = r,
            this.d += n,
            this.d >= this.c.length && (this.d -= this.c.length)
        }
        ar(t, e) {
            if (this.a.R)
                return;
            let r = Pa.create()
              , n = 1;
            r = this.U.l.d(t, this.a.aX, r),
            n = this.U.m.d(t, this.a.aX),
            this.ao(r[0], r[1], r[2]),
            this.ak(n / 32767);
            let i = this.U.n.d(t, this.a.aX);
            this.aj(i);
            let a = this.U.o.d(t, this.a.aX);
            this.ai(a);
            let o = this.U.p.d(t, this.a.aX);
            this.ap(o);
            let s = this.U.q.d(t, this.a.aX, 1);
            this.af(0 != s);
            let u = Ia.create();
            Ia.mul(u, this.a.T, this.a.ao[this.U.b].m),
            Ia.translate(u, u, this.U.c);
            let l = Pa.create();
            this.am(u, l, null),
            this.as(e, !1)
        }
        as(t, e) {
            let r, n, i, a, o, s, u, l, c, h, f, d, b, m, p, g, _, v, x, y, T, w, A, E, S, F, k, C, D, R, M, I, P, B, U, z, O, L, V, N, H, j, q, G, X, Y, W, Z;
            for (!this.N && 0 < this.C && (t = 1 / this.C + 99999997e-12),
            0 <= t ? this.D <= t && (t = this.D) : t = 0,
            v = this.e; v != this.d && !(t + this.c[v] <= this.D); v = this.e)
                this.e = this.at(this.e, 1);
            if (!e && this.M && this.L && this.J) {
                M = t * this.C + this.f,
                Z = this.F,
                this.al();
                let e = !1;
                if (B = 0,
                1 > M ? e = !0 : (W = this.f,
                P = 1 / (M - W),
                _ = Da(M - 1),
                B = _a(Ca(_, 0))),
                -1 == B || e)
                    ;
                else
                    for (I = 1,
                    v = 1; R = this.d,
                    L = this.i.length,
                    this.i[2 * R].b = Z,
                    x = 2 * this.d + 1,
                    V = this.i.length,
                    this.i[x].b = Z,
                    this.aq((v - W) * P * -t, (v - W) * P, 1),
                    -1 != --B; v = I)
                        ++I,
                        W = this.f;
                y = Da(M),
                this.f = M - y,
                this.aq(0, 1, 0),
                D = this.d,
                N = this.i.length,
                T = this.i[2 * D],
                w = this.p.b,
                T.c[1] = this.p.a,
                T.c[0] = w,
                A = 2 * this.d + 1,
                H = this.i.length,
                E = this.i[A],
                S = this.p.b,
                E.c[1] = this.p.c,
                E.c[0] = S,
                C = this.d,
                j = this.i.length,
                this.i[2 * C].b = Z,
                F = 2 * this.d + 1,
                q = this.i.length,
                this.i[F].b = Z
            }
            this.A[2] = 34028235e31,
            this.A[1] = 34028235e31,
            this.A[0] = 34028235e31,
            this.B[2] = -34028235e31,
            this.B[1] = -34028235e31,
            this.B[0] = -34028235e31,
            U = this.e;
            for (let e = this.e; e != this.d; U = e)
                g = 2 * e,
                Y = this.i.length,
                k = U,
                O = this.i[2 * e],
                r = g + 1,
                n = this.i[2 * e + 1],
                i = (this.S + this.S) * this.c[k] * t + t * this.S * t,
                O.a[2] += i,
                n.a[2] = i + n.a[2],
                a = O.a[0],
                o = this.A[0],
                o > O.a[0] && (o = O.a[0],
                this.A[0] = a,
                a = O.a[0]),
                s = O.a[1],
                u = this.A[1],
                u > s && (u = O.a[1],
                this.A[1] = s,
                s = O.a[1]),
                l = O.a[2],
                c = this.A[2],
                c > l && (c = O.a[2],
                this.A[2] = l,
                l = O.a[2]),
                a > this.B[0] && (this.B[0] = a),
                s > this.B[1] && (this.B[1] = s),
                l > this.B[2] && (this.B[2] = l),
                h = n.a[0],
                o > n.a[0] && (this.A[0] = h,
                h = n.a[0]),
                f = n.a[1],
                u > f && (this.A[1] = f,
                f = n.a[1]),
                d = n.a[2],
                c > d && (this.A[2] = d,
                d = n.a[2]),
                h > this.B[0] && (this.B[0] = h),
                f > this.B[1] && (this.B[1] = f),
                d > this.B[2] && (this.B[2] = d),
                G = this.c.length,
                this.c[k] = t + this.c[k],
                b = this.l,
                X = this.c.length,
                m = b * this.c[k] * this.k + this.p.b,
                O.c[1] = this.p.a,
                O.c[0] = m,
                n.c[1] = this.p.c,
                n.c[0] = m,
                p = this.c.length,
                z = U + 1,
                e = z - p,
                p > z && (e = z);
            this.N = !0
        }
        at(t, e) {
            let r = e + t;
            t = r;
            let n = this.c.length;
            return r >= n && (t = r - n),
            t
        }
        au(t, e, r, n, i, a) {
            let o, s, u, l, c, h, f, d;
            f = _a(t),
            d = Ca(.25, e),
            o = _a(d * f),
            s = _a(Ca(o + 1 + 1, 0)),
            this.c = Array(s),
            this.e = 0,
            this.d = 0,
            this.f = 0,
            this.J = !1,
            this.i = Array(2 * s);
            for (let t = 0; t < this.i.length; t++) {
                this.i[t] = new Tf;
                let e = this.i[t];
                e.a[0] = 0,
                e.a[1] = 0,
                e.a[2] = 0,
                e.b = Ba.fromValues(0, 0, 0, 0),
                e.c[0] = 0,
                e.c[1] = 0
            }
            this.j = Array(4 * s);
            for (let t = 0; t < this.j.length; t++)
                this.j[t] = t % (2 * s);
            this.k = 1 / d,
            u = a,
            0 != (2147483648 & a) && (u = (1 & a | a >> 1) + (1 & a | a >> 1)),
            this.l = (n.d - n.b) / u,
            l = i,
            0 != (2147483648 & i) && (l = (1 & i | i >> 1) + (1 & i | i >> 1)),
            this.m = (n.c - n.a) / l,
            this.n = 1 / this.l,
            this.o = 1 / this.m,
            this.C = f,
            this.D = d,
            Ba.scale(r, r, 1 / 255),
            this.F = r,
            this.G = n,
            this.H = i,
            this.I = a,
            this.P = 0,
            c = 0 * this.l + this.G.b,
            this.p.b = c,
            h = 0 * this.m + this.G.a,
            this.p.a = h,
            this.p.d = c + this.l,
            this.p.c = h + this.m,
            this.Q = 10,
            this.R = 10,
            this.S = 0,
            this.M = !0,
            this.L = !0,
            this.K = !0
        }
        av() {
            let t = Array(this.i.length);
            for (let e = 0, r = 0; e < this.i.length; ++e)
                t[r++] = this.i[e].a[0],
                t[r++] = this.i[e].a[1],
                t[r++] = this.i[e].a[2],
                t[r++] = this.i[e].b[0],
                t[r++] = this.i[e].b[1],
                t[r++] = this.i[e].b[2],
                t[r++] = this.i[e].b[3],
                t[r++] = this.i[e].c[0],
                t[r++] = this.i[e].c[1];
            if (!this.ah()) {
                let e = this.V;
                this.W ? (e.bindBuffer(e.ARRAY_BUFFER, this.W),
                e.bufferData(e.ARRAY_BUFFER, new Float32Array(t), e.DYNAMIC_DRAW)) : (this.W = e.createBuffer(),
                e.bindBuffer(e.ARRAY_BUFFER, this.W),
                e.bufferData(e.ARRAY_BUFFER, new Float32Array(t), e.DYNAMIC_DRAW)),
                this.X ? (e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.X),
                e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.j), e.DYNAMIC_DRAW)) : (this.X = e.createBuffer(),
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.X),
                e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.j), e.DYNAMIC_DRAW))
            }
        }
        aw(t) {
            if (!this.ah()) {
                let r = this.V;
                for (let n = 0; n < this.U.j.length; n++) {
                    if (!this.ab[n]) {
                        let t = new Zh;
                        t.a = pe(r, ["        attribute vec3 aPosition;\n        attribute vec4 aColor;\n        attribute vec2 aTexcoord0;\n        uniform mat4 uViewMatrix;\n        uniform mat4 uProjMatrix;\n        varying vec4 vColor;\n        varying vec2 vTexcoord0;\n        void main() {\n            vec4 aPositionVec4 = vec4(aPosition, 1);\n            vColor = aColor;\n            vTexcoord0 = aTexcoord0;\n            gl_Position = uProjMatrix * uViewMatrix * aPositionVec4;\n        }", "    precision mediump float;    varying vec4 vColor;\n    varying vec2 vTexcoord0;\n    uniform sampler2D uTexture;\n    void main() {\n        vec4 tex = texture2D(uTexture, vTexcoord0).rgba;\n        gl_FragColor = vec4((vColor.rgb*tex.rgb), tex.a * vColor.a );\n    }"], null, null),
                        t.b = {},
                        t.a.attributes = [{
                            loc: r.getAttribLocation(t.a.program, "aPosition"),
                            type: r.FLOAT,
                            size: 3,
                            offset: 0,
                            stride: 36
                        }, {
                            loc: r.getAttribLocation(t.a.program, "aColor"),
                            type: r.FLOAT,
                            size: 4,
                            offset: 12,
                            stride: 36
                        }, {
                            loc: r.getAttribLocation(t.a.program, "aTexcoord0"),
                            type: r.FLOAT,
                            size: 2,
                            offset: 28,
                            stride: 36
                        }],
                        t.c = this.W,
                        t.d = this.X,
                        this.ab[n] = t
                    }
                    var e = this.U.j[n];
                    if (-1 >= e || e > this.a.av.length)
                        continue;
                    let i = this.a.av[e];
                    if (!i.f || !i.f.f)
                        continue;
                    let a = n;
                    a >= this.U.k.length && (a = 0);
                    let o = this.a.au[this.U.k[a]];
                    this.ab[n].b.uViewMatrix = this.a.aS.viewMatrix,
                    this.ab[n].b.uProjMatrix = this.a.aS.projMatrix,
                    this.ab[n].b.uTexture = i.f.d,
                    this.ab[n].h = !1,
                    this.ab[n].f = !1,
                    this.ab[n].e = Af[o.b],
                    this.ab[n].i = !this.a.aY;
                    let s = this.d > this.e ? 2 * (this.d - this.e) + 2 : 2 * (this.c.length + this.d - this.e) + 2;
                    this.ab[n].j = r.TRIANGLE_STRIP,
                    this.ab[n].k = s,
                    this.ab[n].l = 2 * this.e * 2,
                    t.push(this.ab[n])
                }
            }
        }
    }
      , Ff = "uniform float x;\r\nuniform float y;\r\nuniform float width;\r\nuniform float height;\r\n\r\nattribute vec2 aTextCoord;\r\nvarying vec2 vTextCoords;\r\nvoid main() {\r\n    vTextCoords = aTextCoord;\r\n\r\n    vec2 pos = vec2(\r\n        (x + aTextCoord.x*width)* 2.0 - 1.0,\r\n        (y + aTextCoord.y*height)* 2.0 - 1.0\r\n    );\r\n\r\n    gl_Position = vec4(pos.x, pos.y, 0, 1);\r\n}"
      , kf = "precision mediump float;\r\nvarying vec2 vTextCoords;\r\nuniform sampler2D uDiffuseTexture;\r\nuniform sampler2D uSpecularTexture;\r\nuniform sampler2D uEmissiveTexture;\r\nuniform sampler2D renderResultTexture;\r\nuniform int uBlendMode;\r\nuniform vec2 screenResolution;\r\n\r\nfloat overlayBlend(float a, float b) {\r\n    if (b <= 0.5) {\r\n        return 2.0 * a * b;\r\n    } else {\r\n        return 1.0 - ((2.0 * (1.0 - a) * (1.0 - b)));\r\n//        return (1.0 - (1.0 - 2.0 * (a - 0.5)) * (1.0 - b));\r\n    }\r\n}\r\n\r\nvoid main() {\r\n    vec4 diffuse = texture2D( uDiffuseTexture, vTextCoords.xy );\r\n    if (diffuse.a < 0.001) discard;\r\n    if (uBlendMode == 1) {\r\n        // Multiply blending //\r\n        vec4 multTexture = diffuse;\r\n        vec4 backGround = texture2D( renderResultTexture, gl_FragCoord.xy / screenResolution );\r\n\r\n        vec3 finalColor = (diffuse.rgb * backGround.rgb);\r\n\r\n        diffuse  = vec4(finalColor.rgb, 1.0);\r\n    }  else if (uBlendMode == 2) {\r\n        // Overlay Blending //\r\n        vec4 overlayTex = diffuse;\r\n        vec4 background = texture2D( renderResultTexture, gl_FragCoord.xy / screenResolution );\r\n\r\n        vec3 finalColor = vec3(\r\n            overlayBlend(overlayTex.r, background.r),\r\n            overlayBlend(overlayTex.g, background.g),\r\n            overlayBlend(overlayTex.b, background.b)\r\n        );\r\n\r\n        diffuse  = vec4(finalColor, overlayTex.a);\r\n//        diffuse  = vec4(finalColor.rgb, overlayTex.a);\r\n    }\r\n\r\n    gl_FragColor = diffuse;\r\n}"
      , Cf = "precision mediump float;\r\n\r\nvarying vec2 vTextCoords;\r\nuniform sampler2D uDiffuseTexture;\r\nuniform sampler2D uSpecularTexture;\r\nuniform sampler2D uEmissiveTexture;\r\nuniform sampler2D renderResultTexture;\r\nuniform int uBlendMode;\r\n\r\nvoid main() {\r\n    vec4 diffuse = texture2D( uDiffuseTexture, vTextCoords.xy );\r\n    vec4 specular = texture2D( uSpecularTexture, vTextCoords.xy );\r\n    if (diffuse.a < 0.001) discard;\r\n    gl_FragColor = vec4(specular.rgb, 1.0);\r\n}"
      , Df = "precision mediump float;\r\n\r\nvarying vec2 vTextCoords;\r\nuniform sampler2D uDiffuseTexture;\r\nuniform sampler2D uSpecularTexture;\r\nuniform sampler2D uEmissiveTexture;\r\nuniform sampler2D renderResultTexture;\r\nuniform int uBlendMode;\r\n\r\nvoid main() {\r\n    vec4 diffuse = texture2D( uDiffuseTexture, vTextCoords.xy );\r\n    vec4 emissive = texture2D( uEmissiveTexture, vTextCoords.xy );\r\n    if (diffuse.a < 0.001) discard;\r\n    gl_FragColor = vec4(emissive.rgb, 1.0);\r\n}";
    class Rf {
        constructor() {
            this.a = null,
            this.b = null,
            this.c = null
        }
        d() {
            null != this.a && this.a.h(),
            null != this.b && this.b.h(),
            null != this.c && this.c.h()
        }
        e() {
            return (!this.a || this.a.g()) && (!this.b || this.b.g()) && (!this.c || this.c.g())
        }
    }
    class Mf {
        constructor() {
            this.a = null,
            this.b = null,
            this.c = null,
            this.d = {},
            this.i = new zl
        }
    }
    let If = null
      , Pf = null;
    class Bf {
        constructor(t, e, r) {
            this.h = !1,
            this.e = t,
            this.f = e,
            this.g = r,
            function(t) {
                Pf = t.createTexture(),
                t.bindTexture(t.TEXTURE_2D, Pf),
                t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 1])),
                t.bindTexture(t.TEXTURE_2D, null),
                If = new Mf;
                let e = If;
                e.a = pe(t, [Ff, kf], null, null),
                e.b = pe(t, [Ff, Cf], null, null),
                e.c = pe(t, [Ff, Df], null, null),
                e.d = {},
                e.f = t.createBuffer(),
                t.bindBuffer(t.ARRAY_BUFFER, e.f),
                t.bufferData(t.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), t.STATIC_DRAW),
                t.bindBuffer(t.ARRAY_BUFFER, null),
                e.e = t.createBuffer(),
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e.e),
                t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Int16Array([0, 1, 2, 1, 3, 2]), t.STATIC_DRAW),
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null),
                e.g = t.createFramebuffer(),
                e.h = {
                    loc: t.getAttribLocation(e.a.program, "aTextCoord"),
                    type: t.FLOAT,
                    size: 2,
                    offset: 0,
                    stride: 0
                }
            }(t)
        }
        i() {
            let t = this.e;
            this.d && t.deleteTexture(this.d),
            this.a && t.deleteTexture(this.a),
            this.b && t.deleteTexture(this.b),
            this.c && t.deleteTexture(this.c),
            this.d = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.d),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.f, this.g, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
            this.a = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.a),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.f, this.g, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
            this.b = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.b),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.f, this.g, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
            this.c = t.createTexture(),
            t.bindTexture(t.TEXTURE_2D, this.c),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.f, this.g, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
            t.bindTexture(t.TEXTURE_2D, null),
            t.bindFramebuffer(t.FRAMEBUFFER, If.g),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.a, 0),
            t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.b, 0),
            t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.c, 0),
            t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
            t.useProgram(If.b.program),
            t.bindBuffer(t.ARRAY_BUFFER, If.f),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, If.e),
            If.i.disableAll(),
            If.i.enable(t, [If.h]),
            t.viewport(0, 0, this.f, this.g)
        }
        j(t, e, r, n, i, a) {
            let o = this.e;
            If.d.x = e,
            If.d.y = r,
            If.d.width = n,
            If.d.height = i,
            (null != t.b || null != t.c) && (this.h = !0);
            let s = 0;
            "multiply" == a ? s = 1 : "overlay" == a && (s = 2),
            If.d.uBlendMode = s,
            If.d.screenResolution = new Float32Array([this.f, this.g]),
            If.d.uDiffuseTexture = null == t.a ? Pf : t.a.d,
            If.d.uSpecularTexture = null == t.b ? Pf : t.b.d,
            If.d.uEmissiveTexture = null == t.c ? Pf : t.c.d,
            If.d.renderResultTexture = null == this.d ? Pf : this.d,
            o.disable(o.CULL_FACE),
            o.disable(o.DEPTH_TEST),
            o.enable(o.BLEND),
            o.blendEquation(o.FUNC_ADD),
            o.blendFuncSeparate(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA, o.ONE, o.ONE),
            o.useProgram(If.a.program),
            o.framebufferTexture2D(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, this.a, 0),
            "" != a && (o.bindTexture(o.TEXTURE_2D, this.d),
            o.copyTexImage2D(o.TEXTURE_2D, 0, o.RGBA, 0, 0, this.f, this.g, 0),
            o.bindTexture(o.TEXTURE_2D, null)),
            he(If.a, If.d),
            o.drawElements(o.TRIANGLES, 6, o.UNSIGNED_SHORT, 0),
            o.useProgram(If.b.program),
            o.framebufferTexture2D(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, this.b, 0),
            "" != a && (o.bindTexture(o.TEXTURE_2D, this.d),
            o.copyTexImage2D(o.TEXTURE_2D, 0, o.RGBA, 0, 0, this.f, this.g, 0),
            o.bindTexture(o.TEXTURE_2D, null)),
            he(If.b, If.d),
            o.drawElements(o.TRIANGLES, 6, o.UNSIGNED_SHORT, 0),
            o.useProgram(If.c.program),
            o.framebufferTexture2D(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, this.c, 0),
            "" != a && (o.bindTexture(o.TEXTURE_2D, this.d),
            o.copyTexImage2D(o.TEXTURE_2D, 0, o.RGBA, 0, 0, this.f, this.g, 0),
            o.bindTexture(o.TEXTURE_2D, null)),
            he(If.c, If.d),
            o.drawElements(o.TRIANGLES, 6, o.UNSIGNED_SHORT, 0),
            o.useProgram(null)
        }
        k() {
            let t = this.e;
            t.bindFramebuffer(t.FRAMEBUFFER, null),
            t.enable(t.CULL_FACE),
            t.enable(t.DEPTH_TEST)
        }
    }
    class Uf {
        constructor(t, e) {
            this.a = t,
            this.b = e
        }
        c() {
            const t = [];
            for (let e of this.b.Options)
                for (let r of e.Choices)
                    for (let e of r.Elements)
                        e.SkinnedModel && t.push(e.SkinnedModel.CollectionFileDataID);
            const e = new Set(t);
            if (0 != e.size) {
                1 < e.size && WH.debug("more than 1 skinned model detected!");
                let r = t[0]
                  , n = {
                    type: Lc.PATH,
                    id: r,
                    parent: this.a,
                    shoulder: 0
                };
                this.a.aR = new Nf(this.a.aS,this.a.k,n,0,!1,!1,!1)
            }
        }
        d(t) {
            return lf.a(this.a, this.b.TextureFiles[t], this.a.o, this.a.p, this.a.n)
        }
        e(t) {
            WH.debug("applyCustomization options", t),
            this.a.L = [],
            this.a.bt(0);
            for (let t = 0; t < this.a.J.length; t++)
                this.a.J[t] = -1;
            if (this.a.aR)
                for (let t = 0; t < this.a.aR.J.length; t++)
                    this.a.aR.J[t] = -1;
            for (let e, r = 0; r < t.length; r++)
                if (e = this.b.Options.find(e => e.Id == t[r].optionId),
                WH.debug("option", e),
                e) {
                    let n = e.Choices.find(e => e.Id == t[r].choiceId);
                    if (WH.debug("choice", n),
                    n) {
                        let r = n.Elements.filter(e => e.BoneSet && e.BoneSet.BoneFileDataID && (0 == e.VariationChoiceID || t.some(t => t.choiceId == e.VariationChoiceID)));
                        0 < r.length && this.a.bt(r[0].BoneSet.BoneFileDataID),
                        n.Elements.filter(e => e.Material && (0 == e.VariationChoiceID || t.some(t => t.choiceId == e.VariationChoiceID))).forEach(t => {
                            WH.debug("element material", t);
                            let e = this.d(t.Material.MaterialResourcesID);
                            if (!e)
                                return void WH.debug("element material: can't get texture files for material", t);
                            let r = this.b.TextureLayers.find(e => e.ChrModelTextureTargetID == t.Material.TextureTarget);
                            return r ? void (1 == r.TextureType ? t.Material.TextureTarget == bh ? this.a.B[1][0] = this.a.bz(1, e) : (-1 == r.TextureSection && (r.TextureSection = 13),
                            this.a.C[t.Material.TextureTarget] = this.a.bz(r.TextureSection, e)) : 6 == r.TextureType ? this.a.B[6][0] = this.a.bz(6, e) : 8 == r.TextureType ? this.a.B[8][0] = this.a.bz(8, e) : 10 == r.TextureType ? this.a.B[10][0] = this.a.bz(10, e) : 19 == r.TextureType ? this.a.B[19][0] = this.a.bz(19, e) : 20 == r.TextureType ? this.a.B[20][0] = this.a.bz(20, e) : 21 == r.TextureType ? this.a.B[21][0] = this.a.bz(21, e) : 22 == r.TextureType ? this.a.B[22][0] = this.a.bz(22, e) : WH.debug("unhandled texture type", r.TextureType, "target", t.Material.TextureTarget)) : void WH.debug("element material: can't get texture layer for material", t)
                        }
                        ),
                        n.Elements.filter(e => e.Geoset && (0 == e.VariationChoiceID || t.some(t => t.choiceId == e.VariationChoiceID))).forEach(t => {
                            WH.debug("element geoset", t),
                            this.a.bC(t.Geoset)
                        }
                        ),
                        n.Elements.filter(e => e.SkinnedModel && (0 == e.VariationChoiceID || t.some(t => t.choiceId == e.VariationChoiceID))).forEach(t => {
                            WH.debug("element skinnedmodel", t),
                            this.a.aR && this.a.aR.bC(t.SkinnedModel)
                        }
                        );
                        let i = n.Elements.find(e => 0 != e.CondModelFileDataId && (0 == e.VariationChoiceID || t.some(t => t.choiceId == e.VariationChoiceID)));
                        if (24 == e.Id || 353 == e.Id)
                            if (i && !this.a.c) {
                                WH.debug("element condModel", i);
                                let e = this.a.aS
                                  , r = this.a.a
                                  , n = e.models.indexOf(this.a);
                                if (-1 < n) {
                                    e.models.splice(n, 1),
                                    WH.debug("test 1!", t, e.options, r),
                                    e.options.charCustomization = this.a.q;
                                    let a = new Nf(e,e.options,r,n,!0,!1,!1,i.CondModelFileDataId);
                                    return a.q = this.a.q,
                                    e.models.push(a),
                                    void this.a.ba()
                                }
                            } else if (!i && this.a.c) {
                                let e = this.a.aS
                                  , r = this.a.a
                                  , n = e.models.indexOf(this.a);
                                if (-1 < n) {
                                    e.models.splice(n, 1),
                                    WH.debug("test 2!", t, e.options, r),
                                    e.options.charCustomization = this.a.q;
                                    let i = new Nf(e,e.options,r,n,!0,!1,!1);
                                    return i.q = this.a.q,
                                    e.models.push(i),
                                    void this.a.ba()
                                }
                            }
                        n.Elements.filter(e => e.ChrCustItemGeoModifyID && (0 == e.VariationChoiceID || t.some(t => t.choiceId == e.VariationChoiceID))).forEach(t => {
                            WH.debug("element ChrCustItemGeoModify", t),
                            this.a && this.a.L.push(t.ChrCustItemGeoModifyID)
                        }
                        )
                    }
                }
            if (!this.a.B[6][0]) {
                let e = this.b.Options.find(t => t.Id == this.b.HairStyleOptionId);
                if (e) {
                    let r = e.Choices[1];
                    if (r) {
                        let e = r.Elements.filter(e => e.Material && e.Material.TextureTarget == mh && (!(0 != e.VariationChoiceID) || t.some(t => t.choiceId == e.VariationChoiceID)));
                        if (0 < e.length) {
                            let t = this.d(e[0].Material.MaterialResourcesID);
                            t && (this.a.B[6][0] = this.a.bz(6, t))
                        }
                    }
                }
            }
        }
        f() {
            let t = [];
            for (let e, r = 0; r < this.b.Options.length; r++)
                if (e = this.b.Options[r],
                e) {
                    let r = e.Choices[0];
                    r && t.push({
                        optionId: e.Id,
                        choiceId: r.Id
                    })
                }
            this.e(t)
        }
        g(t) {
            let e = {
                options: t,
                sheathMain: -1,
                sheathOff: -1
            };
            for (let t of this.b.Options)
                e.options.some(e => e.optionId == t.Id) || e.options.push({
                    optionId: t.Id,
                    choiceId: t.Choices[0].Id
                });
            return e
        }
    }
    const zf = function(t, e) {
        const r = xa(t)
          , n = xa(e);
        return +(r - Da(r / n) * n).toPrecision(8) * ba(t)
    }
      , Of = "DressingRoom"
      , Lf = "Stand";
    class Vf {
        constructor(t, e, r, n, i, a, o, s) {
            this.e = !1,
            this.r = 0,
            this.s = null,
            this.t = null,
            this.D = [],
            this.L = [],
            this.Q = new Dh,
            this.S = !1,
            this.am = [],
            this.aF = [],
            this.aG = [],
            this.aI = null,
            this.aP = !1,
            this.aQ = !1,
            this.aT = null,
            this.aU = null,
            this.aV = null,
            this.aX = [],
            this.aY = !1;
            var u = this;
            if (u.e = i,
            u.aS = t,
            u.a = r,
            u.b = n,
            u.c = s,
            u.d = !1,
            u.f = !0,
            u.g = !0,
            this.h = !1,
            u.ac = a,
            u.k = e,
            "classic" == u.k.gameDataEnv ? (Gc[14] = 14,
            Gc[15] = 15) : (Gc[14] = 22,
            Gc[15] = 22),
            u.i = null,
            u.l = u.k.mount && u.k.mount.type == Lc.NPC && u.k.mount.id == u.a.id,
            u.j = null,
            u.m = u.k.pet && u.k.pet.type == Lc.NPC && u.k.pet.id == u.a.id,
            u.a.type == Lc.CHARACTER && u.k.mount && u.k.mount.type == Lc.NPC && u.k.mount.id && (u.k.mount.parent = u,
            u.i = new Vf(t,e,u.k.mount,0,!1,!1,!1)),
            u.a.type == Lc.CHARACTER && u.k.pet && u.k.pet.type == Lc.NPC && u.k.pet.id && (u.k.pet.parent = u,
            u.j = new Vf(t,e,u.k.pet,0,!1,!1,!1)),
            u.k.extraModels && !u.a.parent) {
                u.z = [];
                const r = u.k.extraModels;
                if ($.isArray(r))
                    for (let n = 0; n < r.length; ++n) {
                        const i = {
                            type: Lc.PATH,
                            id: r[n][0],
                            parent: u,
                            shoulder: -1
                        };
                        u.z.push(new Vf(t,e,i,0,!1,!1,!1))
                    }
            }
            u.n = 0,
            u.o = -1,
            u.p = u.k.cls ? parseInt(u.k.cls) : 0,
            u.u = null,
            u.v = u.a.parent || null,
            u.x = new Map,
            u.y = {},
            u.w = !1,
            u.A = {},
            u.aI = null,
            u.aJ = null,
            u.B = [];
            for (let t = 0; 25 > t; t++)
                u.B.push({});
            u.C = {},
            u.G = -1,
            u.H = -1,
            u.I = Array(42),
            u.J = Array(42),
            u.K = [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            u.M = null,
            u.N = 0;
            for (let t = 0; t < 42; t++)
                u.I[t] = 100 * t + u.K[t];
            u.O = 0,
            u.P = 0,
            u.Q.c = 0,
            u.Q.a.a = -1,
            u.R = !1,
            u.T = Ia.create(),
            u.U = Ba.fromValues(1, 1, 1, 1),
            u.V = [.35, .35, .35, 1],
            u.W = [1, 1, 1, 1],
            u.X = [.35, .35, .35, 1],
            u.Y = Pa.create(),
            u.Z = Pa.create(),
            u.aa = Pa.create(),
            Pa.normalize(u.Y, [5, -3, 3]),
            Pa.normalize(u.Z, [5, 5, 5]),
            Pa.normalize(u.aa, [-5, -5, -5]),
            u.ab = !1,
            u.ad = Pa.fromValues(0, 0, 0),
            u.ae = Pa.fromValues(0, 0, 0),
            u.af = Pa.fromValues(0, 0, 0),
            u.boundsSize = Pa.fromValues(0, 0, 0),
            u.aj = null,
            u.ak = null,
            u.am = null,
            u.an = null,
            u.ao = null,
            u.ap = null,
            u.aq = null,
            u.ar = null,
            u.as = null,
            u.at = null,
            u.au = null,
            u.av = null,
            u.aw = null,
            u.ax = null,
            u.ay = null,
            u.az = null,
            u.aA = null,
            u.aB = null,
            u.aC = null,
            u.aD = null,
            u.aE = null,
            u.aF = null,
            u.aG = null,
            u.aL = Ia.create(),
            u.aM = Pa.create(),
            u.aN = Pa.create(),
            u.aO = Ba.create(),
            o || u.bO()
        }
        bZ(t) {
            if (this[t]) {
                for (var e = this[t], r = 0; r < e.length; ++r)
                    e[r] && e[r].destroy && e[r].destroy(),
                    e[r] = null;
                this[t] = null
            }
        }
        ba() {
            var t = this;
            if (this.aQ = !0,
            this.d = !1,
            t.aJ && t.aJ.d(),
            t.B)
                for (let e = 0; e < t.B.length; ++e)
                    for (const r in t.B[e])
                        t.B[e][r].d();
            if (t.A)
                for (const e in t.A)
                    t.A[e].h();
            if (t.ak && (t.ak = null),
            t.an && (t.an = null),
            t.ap && (t.ap = null),
            t.aq && (t.aq = null),
            t.at && (t.at = null),
            t.aw && (t.aw = null),
            t.ay && (t.ay = null),
            t.az && (t.az = null),
            t.aB && (t.aB = null),
            t.aE && (t.aE = null),
            t.au)
                for (let e = 0; e < t.au.length; ++e)
                    t.au[e] = null;
            if (t.au = null,
            this.bZ("vertices"),
            this.bZ("animations"),
            this.bZ("bones"),
            this.bZ("meshes"),
            this.bZ("texUnits"),
            this.bZ("materials"),
            this.bZ("textureAnims"),
            this.bZ("attachments"),
            this.bZ("colors"),
            this.bZ("alphas"),
            this.bZ("particleEmitters"),
            this.bZ("ribbonEmitters"),
            this.bZ("skins"),
            this.bZ("faces"),
            this.bZ("hairs"),
            this.am = null,
            t.x && t.x.forEach( (e, r) => {
                e.w(),
                t.x.set(r, null)
            }
            ),
            t.y)
                for (const e in t.y)
                    t.y[e].ba(),
                    t.y[e] = null;
            t.i && t.i.ba(),
            t.i = null,
            t.j && t.j.ba(),
            t.j = null,
            t.aR && t.aR.ba(),
            t.aR = null,
            t.a = null,
            t.x = null,
            t.y = null,
            t.A = null,
            t.B = null,
            t.I = null,
            t.T = null,
            t.V = null,
            t.W = null,
            t.X = null,
            t.Y = null,
            t.Z = null,
            t.aa = null,
            t.ad = null,
            t.ae = null,
            t.af = null,
            t.boundsSize = null,
            t.aL = null,
            t.aM = null,
            t.aN = null,
            t.aO = null
        }
        getNumAnimations() {
            const t = this.i ? this.i : this;
            return t.am ? t.am.length + 1 : 0
        }
        getAnimation(t) {
            const e = this.i ? this.i : this;
            return e.am && -1 < t && t < e.am.length ? e.am[t].j : t == e.am.length ? Of : ""
        }
        resetAnimation() {
            (this.i ? this.i : this).setAnimation(Lf)
        }
        setAnimPaused(t) {
            var e;
            this.R = t,
            null === (e = this.i) || void 0 === e || e.setAnimPaused(t),
            this.D.forEach(e => e.f(t))
        }
        setAnimNoSubAnim(t) {
            this.S = t
        }
        bg(t) {
            var e;
            null === (e = this.j) || void 0 === e || e.setAnimation(t)
        }
        setItems(t) {
            const e = [];
            for (let r = 0; r < t.length; r++)
                e.push([t[r].slot, t[r].display, t[r].visual]);
            e.forEach(t => {
                const e = [parseInt(t[0]), parseInt(t[1])];
                this.k.items.push(e)
            }
            ),
            this.bJ(e),
            this.w = !0
        }
        attachList(t) {
            const e = t.split(",")
              , r = [];
            for (let t = 0; t < e.length; t += 2)
                r.push([e[t], e[t + 1]]);
            r.forEach(t => {
                const e = [parseInt(t[0]), parseInt(t[1])];
                this.k.items.push(e)
            }
            ),
            this.bJ(r),
            this.w = !0
        }
        clearSlots(t) {
            const e = t.split(",");
            for (let t = 0; t < e.length; ++t) {
                this.bL(parseInt(e[t]));
                const r = [];
                this.k.items.forEach(e => {
                    0 != this.k.items[t].indexOf(parseInt(e)) && r.push(e)
                }
                ),
                this.k.items = r
            }
            this.bI(),
            this.w = !0
        }
        setSheath(t, e) {
            this.G = t,
            this.H = e,
            this.bI()
        }
        setAppearance(t) {
            var e;
            const r = function(t, e) {
                t[e].d(),
                delete t[e]
            };
            if (this.B[1][0] && r(this.B[1], 0),
            this.B[6][0] && r(this.B[6], 0),
            this.B[8][0] && r(this.B[8], 0),
            this.B[19][0] && r(this.B[19], 0),
            this.B[19][1] && r(this.B[19], 1),
            this.C)
                for (const t in this.C)
                    this.C[t].d(),
                    delete this.C[t];
            this.q = t,
            this.G = t.sheathMain,
            this.H = t.sheathOff,
            null === (e = this.E) || void 0 === e || e.e(t.options),
            this.w = !0,
            this.bA(),
            this.bI()
        }
        setCustomizationsLoadedCallback(t) {
            this.F = t
        }
        isLoaded() {
            return this.i ? this.i.d && this.d : this.d
        }
        setParticlesEnabled(t) {
            this.f = t,
            this.x.forEach((function(e) {
                if (e.i)
                    for (let r = 0; r < e.i.length; ++r)
                        if (e.i[r] && (e.i[r].e.setParticlesEnabled(t),
                        e.q[r] && e.q[r].b)) {
                            const n = e.i[r].e;
                            for (let i = 0; i < e.q[r].b.length; i++)
                                n.aA && n.aA[i] && e.q[r].b[i] && e.q[r].b[i].e.setParticlesEnabled(t)
                        }
            }
            ))
        }
        setRibbonsEnabled(t) {
            this.g = t
        }
        getTexUnits() {
            return this.aK
        }
        br(t, e, r, n) {
            Ia.copy(this.T, t),
            Ia.multiply(this.T, this.T, e),
            r && Ia.translate(this.T, this.T, r),
            n && Ia.multiply(this.T, this.T, n)
        }
        bs(t, e) {
            let r = !1;
            const n = t == Of;
            n && (t = Lf);
            for (let i = 0; i < this.am.length; ++i) {
                const a = this.am[i];
                if (a.j && a.j == t && 0 == a.b) {
                    r = !0,
                    e.a.a = i,
                    e.a.b = a,
                    e.a.c = 0,
                    e.b = new Ch,
                    e.c = 0,
                    e.d = n,
                    WH.debug("Set animation to", a.a, a.j);
                    break
                }
            }
            t == Lf || r || this.bs(Lf, e)
        }
        bt(t) {
            if (this.r == t)
                return;
            if (this.d)
                for (let t = 0; t < this.ao.length; t++)
                    this.ao[t].v = null;
            if (this.r = t,
            0 >= t)
                return;
            let e = this.k.contentPath + "bone/" + t + ".bone"
              , r = this;
            $.ajax({
                url: e,
                type: "GET",
                dataType: "binary",
                responseType: "arraybuffer",
                processData: !1,
                renderer: this.aS,
                success: function(t) {
                    r.bu(t)
                },
                error: function(t, e, r) {
                    console.log(r)
                }
            })
        }
        bu(t) {
            let e = new yf(t);
            e.getInt32();
            for (; e.position < e.buffer.byteLength; ) {
                let t = Ra(e.getUint8(), e.getUint8(), e.getUint8(), e.getUint8())
                  , r = e.getUint32();
                if ("BIDA" == t) {
                    let t = r / 2;
                    this.s = Array(t);
                    for (let r = 0; r < t; r++)
                        this.s[r] = e.getUint16()
                }
                if ("BOMT" == t) {
                    let t = r / 64;
                    this.t = Array(t);
                    for (let r, n = 0; n < t; n++)
                        r = Ia.fromValues(e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat(), e.getFloat()),
                        this.t[n] = r
                }
            }
            this.d && this.bv()
        }
        bv() {
            if (!(0 >= this.r) && this.s && this.s.length)
                for (let t = 0; t < this.s.length; t++)
                    this.ao[this.s[t]].v = this.t[t]
        }
        setAnimation(t) {
            this.am && (this.i && (this.i.setAnimation(t),
            t = zc[this.i.a.id] ? "StealthStand" : "Mount"),
            this.bs(t, this.Q),
            this.x.forEach(e => {
                if (e.i)
                    for (let r = 0; r < e.i.length; r++)
                        e.i[r].e.setAnimation(t)
            }
            ),
            this.D && this.D.forEach(e => e.e(t)))
        }
        bx(t) {
            let e = this
              , r = e.aS.context;
            if (e.aj && e.ak) {
                const a = 10 * e.aj.length;
                if (e.aT || (e.aT = new Float32Array(a)),
                t) {
                    var n = e.aT
                      , i = e.aj;
                    for (let t = 0, e = 0; t < a; ++e)
                        n[t + 0] = i[e].i[0],
                        n[t + 1] = i[e].i[1],
                        n[t + 2] = i[e].i[2],
                        n[t + 3] = i[e].j[0],
                        n[t + 4] = i[e].j[1],
                        n[t + 5] = i[e].j[2],
                        n[t + 6] = i[e].c,
                        n[t + 7] = i[e].d,
                        n[t + 8] = i[e].e,
                        n[t + 9] = i[e].f,
                        t += 10
                }
                e.aU ? (r.bindBuffer(r.ARRAY_BUFFER, e.aU),
                r.bufferSubData(r.ARRAY_BUFFER, 0, e.aT)) : (e.aU = r.createBuffer(),
                r.bindBuffer(r.ARRAY_BUFFER, e.aU),
                r.bufferData(r.ARRAY_BUFFER, e.aT, r.DYNAMIC_DRAW),
                e.aV = r.createBuffer(),
                r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.aV),
                r.bufferData(r.ELEMENT_ARRAY_BUFFER, new Uint16Array(e.ak), r.STATIC_DRAW))
            }
        }
        by() {
            let t, e = this, r = Ba.fromValues(1, 1, 1, 1), n = e.ad, i = e.ae, a = e.aM;
            if (Pa.set(n, 9999, 9999, 999),
            Pa.set(i, -9999, -9999, -9999),
            !e.as)
                return Ia.identity(e.T),
                e.v || (e.aS.distance = 1),
                !1;
            for (let a, o = 0; o < e.as.length; ++o) {
                if (a = e.as[o],
                !a.show)
                    continue;
                if (r[0] = r[1] = r[2] = r[3] = 1,
                0 < e.Q.a.a && (a.v && (r = a.v.g(e.Q, this.aX)),
                a.w[0] && (r[3] *= a.w[0].d(e.Q, this.aX))),
                .01 > r[3])
                    continue;
                let s = a.p;
                for (let r = 0; r < s.f; ++r)
                    t = e.aj[e.ak[s.e + r]].i,
                    Pa.min(n, n, t),
                    Pa.max(i, i, t)
            }
            const o = e.aR;
            if (o && o.d && o.as && 0 < o.as.length)
                for (let e, r = 0; r < o.as.length; ++r) {
                    if (e = o.as[r],
                    !e.show)
                        continue;
                    let a = e.p;
                    for (let e = 0; e < a.f; ++e)
                        t = o.aj[o.ak[a.e + e]].i,
                        Pa.min(n, n, t),
                        Pa.max(i, i, t)
                }
            e.i && e.i.d && e.i.by() && (Pa.copy(n, Pa.scale(n, e.i.ad, 1.1)),
            Pa.copy(i, Pa.scale(i, e.i.ae, 1.1)),
            i[2] *= 1.75),
            e.a.type == Lc.NPC && (Pa.scale(n, n, e.u.Scale),
            Pa.scale(i, i, e.u.Scale)),
            Pa.subtract(e.boundsSize, i, n),
            Pa.scaleAndAdd(e.af, n, e.boundsSize, .5);
            let s, u, l = e.boundsSize[2];
            const c = e.u && e.u.Scale ? e.u.Scale : 1;
            if (e.a.type == Lc.ITEM ? (s = e.boundsSize[0],
            u = e.boundsSize[1]) : (s = e.boundsSize[1],
            u = e.boundsSize[0]),
            !e.v) {

				// 现在希望显示头部的 1:1 的区域, 但是至少显示整个身体的一半.
				let width = e.boundsSize[0]
				let height = e.boundsSize[2]
				let ratio = width / height

				// 比较窄, 显示上面的部分.
				if (ratio < 1) {
					let newHeight = Math.max(width, height / 2)
					e.boundsSize[2] += newHeight - height
					l = e.boundsSize[2]
					e.af[2] += (height - newHeight) / 2
				}

				// 停止动画播放.
				requestAnimationFrame(() => window.model.method('setAnimPaused', true))


                const t = e.aS.width / e.aS.height
                  , r = 2 * Ea(e.aS.fov / 2 * .0174532925)
                  , n = 1.2 * s / (r * t);
                e.aS.distance = Ca(Ca(1.2 * l / r, n), 2 * u)
            }
            return Ia.identity(e.T),
            e.a.type != Lc.ITEM && Ia.rotateZ(e.T, e.T, Sa / 2),
            Ia.translate(e.T, e.T, Pa.negate(a, e.af)),
            Pa.set(e.aM, c, c, c),
            Ia.scale(e.T, e.T, e.aM),
            !0
        }
        bz(t, e) {
            let r = new Rf;
            return 0 < e.a && (r.a = new Qh(this,t,e.a)),
            0 < e.b && (r.b = new Qh(this,t,e.b)),
            0 < e.c && (r.c = new Qh(this,t,e.c)),
            r
        }
        bA() {
            return this.aQ ? void 0 : this.a.type != Lc.CHARACTER && this.a.type != Lc.NPC && this.a.type != Lc.HUMANOIDNPC || 1 > this.n ? void this.bE() : (this.bG(),
            void (!this.aJ && (this.w = !0)))
        }
        bB(t) {
            t && (this.I[t.geosetType] = 100 * t.geosetType + t.geosetID)
        }
        bC(t) {
            t && (this.J[t.GeosetType] = 100 * t.GeosetType + t.GeosetID)
        }
        bD(t, e, r) {
            if (!this.as || 0 == this.as.length)
                return !1;
            let n;
            for (let i = 0; i < this.as.length; ++i)
                n = this.as[i],
                n.meshId >= t && n.meshId <= e && (n.show = r);
            return !0
        }
        bE() {
            if (this.bD(0, 0, !0),
            0 != this.N && (this.bD(1, 1699, !1),
            this.M))
                for (let t of this.M) {
                    let e = 100 * (t.GeosetIndex + 1)
                      , r = e + t.GeosetValue;
                    this.bD(e, e + 99, !1),
                    this.bD(r, r, !0)
                }
        }
        bF(t, e) {
            let r = [];
            for (let t = 0; t < this.ao.length; t++)
                r[this.ao[t].g] = t;
            let n = t.ao;
            if (n) {
                for (let t = 0; t < n.length; t++) {
                    let e = r[n[t].g];
                    if ("number" != typeof e)
                        continue;
                    let i = n[t].m
                      , a = this.ao[e].m;
                    n[t].s = !0,
                    Ia.copy(i, a)
                }
                Ia.identity(this.aL),
                t.br(this.T, this.aL),
                t.bV(),
                t.bX(e)
            }
        }
        bG() {
            function t(t, e, r) {
                if (!t.as)
                    return;
                let n = r + 1
                  , i = 0 < e ? r + e : n
                  , a = t.as.some(t => t.meshId == i);
                i = a ? i : n,
                t.bD(i, i, !0)
            }
            function e(t, e, r) {
                if (t.as) {
                    let n = 100 * r
                      , i = n + t.K[r] + e;
                    t.bD(n, n + 99, !1),
                    t.bD(i, i, !0)
                }
            }
            var r = this;
            if (!r.as || 0 == r.as.length)
                return;
            for (let t = 0; t < 42; t++)
                r.I[t] = 100 * t + r.K[t];
            r.bD(0, 4200, !1),
            r.bD(0, 0, !0);
            for (let t = 0; t < r.J.length; t++)
                -1 != this.J[t] && (this.I[t] = this.J[t]);
            for (let t = 0; t < r.I.length; t++)
                r.bD(r.I[t], r.I[t], !0);
            let n = r.x.get(Zc)
              , i = r.x.get(Kc)
              , a = r.x.get(Qc)
              , o = r.x.get($c)
              , s = r.x.get(th)
              , u = r.x.get(eh)
              , l = r.x.get(rh)
              , c = r.x.get(nh)
              , h = r.x.get(uh)
              , f = r.x.get(sh);
            for (const t in r.y) {
                let e = r.y[t];
                e.aP && e.bD(0, 4200, !1) && (e.aP = !1)
            }
            if (r.x.forEach(e => {
                if (e && e.p) {
                    let r = e.p;
                    e.b == Zc ? (t(r, e.k[0], 2700),
                    t(r, e.k[1], 2100)) : e.b == Jc ? t(r, e.k[0], 2600) : e.b == Kc ? (t(r, e.k[0], 800),
                    t(r, e.k[1], 1e3)) : e.b == Qc || e.b == lh ? (t(r, e.k[0], 800),
                    t(r, e.k[1], 1e3),
                    t(r, e.k[2], 1300),
                    t(r, e.k[3], 2200),
                    t(r, e.k[4], 2800)) : e.b == $c ? t(r, e.k[0], 1800) : e.b == th ? (t(r, e.k[0], 1100),
                    t(r, e.k[1], 900),
                    t(r, e.k[2], 1300)) : e.b == eh ? (t(r, e.k[0], 500),
                    t(r, e.k[1], 2e3)) : e.b == nh ? (t(r, e.k[0], 400),
                    t(r, e.k[1], 2300)) : e.b == sh ? t(r, e.k[0], 1500) : e.b == uh && t(r, e.k[0], 1200)
                }
            }
            ),
            r.x.forEach(t => {
                if (t && t.i)
                    for (let r of t.i) {
                        let n = r.e;
                        t.b == Zc ? (e(n, t.l[0], 27),
                        e(n, t.l[1], 21)) : t.b == Jc ? e(n, t.l[0], 26) : t.b == Kc ? (e(n, t.l[0], 8),
                        e(n, t.l[1], 10)) : t.b == Qc || t.b == lh ? (e(n, t.l[0], 8),
                        e(n, t.l[1], 10),
                        e(n, t.l[2], 13),
                        e(n, t.l[3], 22),
                        e(n, t.l[4], 28)) : t.b == $c ? e(n, t.l[0], 18) : t.b == th ? (e(n, t.l[0], 11),
                        e(n, t.l[1], 9),
                        e(n, t.l[2], 13)) : t.b == eh ? (e(n, t.l[0], 5),
                        e(n, t.l[1], 20)) : t.b == nh ? (e(n, t.l[0], 4),
                        e(n, t.l[1], 23)) : t.b == sh ? e(n, t.l[0], 15) : t.b == uh && e(n, t.l[0], 12)
                    }
            }
            ),
            n) {
                const t = r.n
                  , e = r.o == Vc.MALE ? n.u : n.v;
                if (e)
                    for (let n = 0; n < e.length; n++)
                        if (e[n].RaceId == t) {
                            const i = e[n].GeosetGroup;
                            if (t == Nc && (1 == i || 2 == i))
                                continue;
                            if (i < 42)
                                if (0 == i)
                                    r.bD(1, 99, !1);
                                else {
                                    const t = 100 * i;
                                    r.bD(t, t + 99, !1)
                                }
                        }
            }
            let d = 0;
            if (h && (d |= 16),
            c && c.k && c.k[0]) {
                let t = 401 + c.k[0];
                r.bD(401, 499, !1),
                r.bD(t, t, !0),
                c.f += 2
            } else if (a && a.k && a.k[0]) {
                let t = 801 + a.k[0];
                r.bD(t, t, !0)
            }
            if (!(a || o || l) && i && i.k && i.k[0]) {
                let t = 801 + i.k[0];
                r.bD(t, t, !0)
            }
            if (h)
                0 == (1048576 & h.h) && (r.bD(2200, 2299, !1),
                r.bD(2202, 2202, !0));
            else if (a && a.k && a.k[3]) {
                let t = 2201 + a.k[3];
                r.bD(2200, 2299, !1),
                r.bD(t, t, !0)
            }
            let b = !1;
            o && o.k && o.k[0] && (b = 0 != (512 & o.h));
            let m, p = !1, g = !1;
            if (a && a.k && a.k[2]) {
                g = !0,
                r.bD(501, 599, !1),
                r.bD(902, 999, !1),
                r.bD(1100, 1199, !1),
                r.bD(1300, 1399, !1);
                let t = 1301 + a.k[2];
                r.bD(t, t, !0)
            } else if (s && s.k && s.k[2]) {
                p = !0,
                r.bD(501, 599, !1),
                r.bD(902, 999, !1),
                r.bD(1100, 1199, !1),
                r.bD(1300, 1399, !1);
                let t = 1301 + s.k[2];
                r.bD(t, t, !0)
            } else if (u && u.k && u.k[0]) {
                r.bD(501, 599, !1),
                r.bD(901, 901, !0);
                let t = 501 + u.k[0];
                r.bD(t, t, !0)
            } else {
                let t;
                t = s && s.k && s.k[1] ? 901 + s.k[1] : 901,
                r.bD(t, t, !0)
            }
            m = u && u.k && u.k[1] ? 2e3 + u.k[1] : u && 0 == (1048576 & u.h) ? 2002 : 2001,
            r.bD(2001, 2099, !1),
            r.bD(m, m, !0);
            let _ = !1
              , v = g || p;
            if (!v && h && h.k && h.k[0]) {
                let t;
                _ = !1,
                b ? (_ = !0,
                t = 1203) : (_ = !0,
                t = 1201 + h.k[0]),
                r.bD(t, t, !0)
            } else
                16 & d && (r.bD(1201, 1201, !0),
                v || (r.bD(1202, 1202, !0),
                _ = !0));
            if (!_ && !g)
                if (a && a.k && a.k[1]) {
                    let t = 1001 + a.k[1];
                    r.bD(t, t, !0)
                } else if (i && i.k && i.k[1]) {
                    let t = 1001 + i.k[1];
                    r.bD(t, t, !0)
                }
            if (!g && s && s.k && s.k[0]) {
                let t = s.k[0]
                  , e = 1101 + t;
                2 < t ? (r.bD(1300, 1399, !1),
                r.bD(e, e, !0)) : !_ && r.bD(e, e, !0)
            }
            if (f && f.k && f.k[0]) {
                r.bD(1500, 1599, !1);
                let t = 1501 + f.k[0];
                if (0 < this.L.length)
                    for (let e of this.L) {
                        const r = Oc[e];
                        r && 15 == r.a && r.b == f.k[0] + 1 && (t = 1500 + r.c)
                    }
                r.bD(t, t, !0)
            }
            if (o && o.k && o.k[0]) {
                r.bD(1800, 1899, !1);
                let t = 1801 + o.k[0];
                r.bD(t, t, !0)
            }
            if (s || g || p || _ || b ? r.bD(1400, 1499, !1) : r.bD(1401, 1401, !0),
            r.aR) {
                let t = r.aR;
                t.bD(0, 4200, !1);
                for (let e = 0; e < t.J.length; e++)
                    if (t.bD(t.J[e], t.J[e], !0),
                    t.as) {
                        let r = t.J[e];
                        if (t.as.some(t => t.meshId == r)) {
                            let t = 100 * e;
                            this.bD(t, t + 99, !1)
                        }
                    }
            }
        }
        bH() {
            var t = this;
            let e = !1;
            if (t.x.forEach(t => {
                if (t.m || t.n) {
                    if (t.j)
                        for (let r = 0; r < t.j.length; ++r)
                            t.j[r].texture && !t.j[r].texture.g() && (e = !0)
                } else
                    e = !0
            }
            ),
            e)
                return;
            if (!t.B[1][0] || t.B[1][0] && !t.B[1][0].e())
                return;
            if (!this.aI) {
                var r = t.B[1][0].a
                  , n = r.a.width
                  , i = r.a.height;
                this.aI = new Bf(t.aS.context,n,i)
            }
            let a = this.aI;
            a.i();
            let o, s = Th;
            a.f != a.g && (s = wh);
            let u = !0
              , l = !0;
            (t.n == Hc || t.n == jc) && (l = !1),
            t.x.forEach(t => {
                let e = t.e;
                (e == Kc || e == Qc || e == uh) && (u = !1),
                e == th && (l = !1)
            }
            );
            let c = this.E.b.TextureLayers;
            for (let e of c) {
                if (1 != e.TextureType)
                    continue;
                if (0 == e.Layer) {
                    a.j(t.B[1][0], 0, 0, 1, 1, "");
                    continue
                }
                let r = this.C[e.ChrModelTextureTargetID];
                if (r) {
                    if (!r.e())
                        return void WH.debug("texture target", e.ChrModelTextureTargetID, "layer", e.Layer, "not ready!");
                    let t = e.TextureSection;
                    -1 == t ? WH.debug("regionIndex invalid!") : (t != _h && t != vh || u && t == _h || l && t == vh) && (o = s[t],
                    4 == e.field10 ? a.j(r, o.x, o.y, o.w, o.h, "multiply") : 6 == e.field10 ? a.j(r, o.x, o.y, o.w, o.h, "overlay") : a.j(r, o.x, o.y, o.w, o.h, ""))
                }
            }
            let h = [];
            t.x.forEach(t => {
                h.push(t)
            }
            ),
            h.sort((function(t, e) {
                return t.f - e.f
            }
            ));
            for (let e, r = 0; r < h.length; ++r)
                if (e = h[r],
                e.j)
                    for (let r, n = 0; n < e.j.length; ++n)
                        if (r = e.j[n],
                        r.gender == t.o && r.texture && r.texture.g() && r.region != yh) {
                            if (0 != (2 & t.u.RaceFlags) && r.region == xh)
                                continue;
                            o = s[r.region];
                            let e = new Rf;
                            e.a = r.texture,
                            a.j(e, o.x, o.y, o.w, o.h, "")
                        }
            a.k(),
            t.w = !1
        }
        bI() {
            if (this.d) {
                let t = (-1 == this.H || !this.H) && null != this.x.get(hh)
                  , e = !(-1 != this.G && this.G || null == this.x.get(ih) && null == this.x.get(ch));
                for (let e of ph) {
                    let r = this.aq[e];
                    0 < r && r < this.ao.length && this.ao[r].A(t ? "HandsClosed" : "")
                }
                for (let t of gh) {
                    let r = this.aq[t];
                    0 < r && r < this.ao.length && this.ao[r].A(e ? "HandsClosed" : "")
                }
            }
        }
        bJ(t) {
            if ($.isArray(t))
                for (let e = 0; e < t.length; ++e)
                    this.bK(t[e][0], t[e][1], t[e][2]);
            else
                for (let e in t)
                    this.bK(parseInt(e), t[e]);
            this.bI()
        }
        bK(t, e, r) {
            var n = this
              , i = new cf(n,t,e,n.n,n.o);
            r && i.z(r);
            var a = i.e
              , o = Yc[t];
            n.x.get(a) && 0 != o ? (i.e = o,
            n.x.set(o, i)) : n.x.set(a, i)
        }
        bL(t) {
            var e = this.x.get(t);
            e || (t = Gc[t],
            e = this.x.get(t)),
            e && (this.x.delete(t),
            e.w())
        }
        bM(t, e) {
            const r = []
              , n = {
                [ah]: () => [0],
                [dh]: t => 2 == t.c && 18 == t.d ? [1] : null
            };
            if (this.aA && this.aB) {
                const i = {
                    1: () => [11],
                    3: () => [6, 5],
                    22: t => {
                        var e;
                        return (null === (e = n[t.b]) || void 0 === e ? void 0 : e.call(n, t)) || [2]
                    }
                    ,
                    21: () => [1],
                    17: () => [1],
                    15: () => [2],
                    25: () => [1],
                    13: () => [1],
                    14: () => [0],
                    23: () => [2],
                    6: () => [53],
                    26: () => [1],
                    16: () => [57],
                    27: () => [55]
                };
                if (i[t]) {
                    const n = i[t](e);
                    for (let i, a = 0; a < n.length; ++a)
                        i = n[a],
                        (0 <= this.G || 0 <= this.H || this.i) && Eh[t] && (i = Eh[t]),
                        0 <= this.G && t == ch && Sh[this.G][t] && (i = Sh[this.G][t]),
                        0 <= this.H && t == hh && Sh[this.H][t] && (i = Sh[this.H][t]),
                        e.g == oh && 0 <= this.H && t == hh && Sh[this.H][e.b] && (i = Sh[this.H][e.b]),
                        i >= this.aB.length || -1 == this.aB[i] || r.push(this.aB[i])
                }
            }
            return r
        }
        bN() {
            if (this.as) {
                for (let t = 0; t < this.as.length; ++t)
                    this.as[t].K(this);
                this.aK = this.as.concat()
            }
            this.setAnimation(Lf),
            this.bx(!0),
            this.by(),
            this.bA(),
            this.d = !0,
            this.bv(),
            this.bI(),
            this.l && this.v.d && this.v.by(),
            this.m && this.v.d && this.v.by(),
            this.v && this.v.d && !this.ac && this.v.bG()
        }
        bO() {
            this.a && this.a.type && this.a.id && this.bP(this.a.type, this.a.id)
        }
        bP(t, e) {
            let r, n = this;
            t == Lc.ITEM ? r = "meta/item/" : t == Lc.HELM ? r = "meta/armor/1/" : t == Lc.SHOULDER ? r = "meta/armor/3/" : t == Lc.NPC || t == Lc.HUMANOIDNPC ? r = "meta/npc/" : t == Lc.OBJECT ? r = "meta/object/" : t == Lc.CHARACTER ? r = "meta/character/" : t == Lc.ITEMVISUAL && (r = "meta/itemvisual/"),
            r ? (r = this.k.contentPath + r + e + ".json",
            function(t) {
                $.getJSON(r).done((function(e) {
                    n.bR(e, t)
                }
                )).fail((function(t, e, r) {
                    console.log("Model:_load Error loading metadata: " + e + ", " + r)
                }
                ))
            }(t)) : t == Lc.PATH && (!this.u && (this.u = {}),
            r = this.k.contentPath + "mo3/" + e + ".mo3",
            $.ajax({
                url: r,
                type: "GET",
                dataType: "binary",
                responseType: "arraybuffer",
                processData: !1,
                renderer: this.aS,
                success: function(t) {
                    n.bS(t)
                },
                error: function(t, e, r) {
                    console.log(r)
                }
            }))
        }
        bQ(t, e, r) {
            const n = Ah[e];
            if (n) {
                const e = r ? 4 : 0;
                return n.slice(2 * t + e, 2 * t + e + 2)
            }
        }
        bR(t, e) {
            var r, n, i = this;
            if (e || (e = i.a.type),
            i.u || (i.u = t),
            e == Lc.CHARACTER) {
                let e = this.c ? this.c : t.Model;
                i.n = t.Race,
                i.o = t.Gender,
                i.k.cls && (i.p = parseInt(i.k.cls));
                let a = i.k.contentPath + "meta/charactercustomization2/" + t.Race + "_" + t.Gender + ".json";
                if ($.getJSON(a, (function(t) {
                    var e, r, n;
                    if (WH.debug("Got customization data v2", t),
                    i.E = new Uf(i,t),
                    null === (e = i.F) || void 0 === e || e.call(i, i.E.b),
                    i.E.c(),
                    i.q)
                        i.setAppearance(i.q);
                    else if (i.a.type != Lc.CHARACTER && 0 < i.u.Race && (null === (n = null === (r = i.u) || void 0 === r ? void 0 : r.Creature) || void 0 === n ? void 0 : n.CreatureCustomizations)) {
                        let t = i.E.g(i.u.Creature.CreatureCustomizations);
                        i.setAppearance(t)
                    } else
                        i.E.f();
                    i.w && i.bA()
                }
                )),
                i.u.Creature && i.u.Creature.Texture && (i.aJ = this.bz(-1, lf.a(null, i.u.TextureFiles[i.u.Creature.Texture], 3, 0, 0))),
                i.bP(Lc.PATH, e),
                i.u.Equipment && i.bJ(i.u.Equipment),
                i.k.items && i.bJ(i.k.items),
                i.a.type != Lc.CHARACTER && 0 < i.u.Race) {
                    if (i.E && (null === (n = null === (r = i.u) || void 0 === r ? void 0 : r.Creature) || void 0 === n ? void 0 : n.CreatureCustomizations)) {
                        let t = i.E.g(i.u.Creature.CreatureCustomizations);
                        i.q = t
                    }
                } else
                    i.k.charCustomization && (i.q = i.k.charCustomization)
            } else if (e == Lc.HELM) {
                let e = 1
                  , r = 0
                  , n = 1;
                if (i.v && (e = i.v.n,
                r = i.v.o,
                n = i.v.p),
                t.ComponentModels) {
                    let a = t.ComponentModels[0];
                    a && t.ModelFiles && t.ModelFiles[a] && (27 == t.Item.InventoryType ? i.bP(Lc.PATH, t.ModelFiles[a][0].FileDataId) : (!i.v && !t.ModelFiles[a].some(t => t.Race == e) && (e = t.ModelFiles[a][0].Race),
                    i.bP(Lc.PATH, lf.b(i, t.ModelFiles[a], -1, r, n, e))))
                }
                if (t.Textures)
                    for (let e in t.Textures)
                        0 != t.Textures[e] && (i.A[parseInt(e)] = new Qh(i,parseInt(e),t.Textures[e]))
            } else if (e == Lc.SHOULDER) {
                let e = 1
                  , r = 0
                  , n = 1;
                i.v && (e = i.v.n,
                r = i.v.o,
                n = i.v.p);
                let a = t.ComponentModels[0]
                  , o = t.ComponentModels[1];
                if (1 == i.a.shoulder || void 0 === i.a.shoulder && a) {
                    if (a && t.ModelFiles[a] && i.bP(Lc.PATH, lf.b(i, t.ModelFiles[a], 0, r, n, e)),
                    t.Textures)
                        for (let e in t.Textures)
                            0 != t.Textures[e] && (i.A[+e] = new Qh(i,parseInt(e),t.Textures[e]))
                } else if ((2 == i.a.shoulder || void 0 === i.a.shoulder && o) && (o && t.ModelFiles[o] && i.bP(Lc.PATH, lf.b(i, t.ModelFiles[o], 1, r, n, e)),
                t.Textures2))
                    for (let e in t.Textures2)
                        0 != t.Textures2[e] && (i.A[+e] = new Qh(i,parseInt(e),t.Textures2[e]))
            } else if (e == Lc.ITEMVISUAL)
                i.bP(Lc.PATH, t.Equipment[i.b]);
            else if (e == Lc.ITEM) {
                let e = 1
                  , r = 0
                  , n = 1;
                if (i.v && (e = i.v.n,
                r = i.v.o,
                n = i.v.p),
                t.ComponentModels) {
                    let a = t.ComponentModels[0];
                    a && t.ModelFiles && t.ModelFiles[a] && i.bP(Lc.PATH, lf.b(i, t.ModelFiles[a], -1, r, n, e))
                }
                if (t.Textures)
                    for (let e in t.Textures)
                        0 != t.Textures[e] && (i.A[+e] = new Qh(i,parseInt(e),t.Textures[e]))
            } else {
                if (t.stateKit && this.D.push(new sf(this,t.stateKit.effects)),
                t.Creature && (i.M = t.Creature.CreatureGeosetData,
                i.N = t.Creature.CreatureGeosetDataID),
                t.Textures)
                    for (let e in t.Textures)
                        0 != t.Textures[e] && (i.A[+e] = new Qh(i,parseInt(e),t.Textures[e]));
                else if (t.ComponentTextures && i.v) {
                    let e = i.v.o;
                    for (let r in t.ComponentTextures) {
                        let n = t.TextureFiles[t.ComponentTextures[r]];
                        for (let t, a = 0; a < n.length; a++)
                            t = n[a],
                            (t.Gender == e || 3 == t.Gender) && (i.A[+r] = new Qh(i,parseInt(r),t.FileDataId))
                    }
                }
                if (t.Model)
                    i.bP(Lc.PATH, t.Model);
                else if (0 < t.Race) {
                    const e = qc[t.Race] + Vc[t.Gender];
                    i.n = t.Race,
                    i.o = t.Gender,
                    i.bP(Lc.CHARACTER, e)
                }
            }
        }
        bS(t) {
            if (!t)
                return void console.error("Bad buffer for DataView");
            let e = this
              , r = new yf(t);
            if (604210112 != r.getUint32())
                return void console.log("Bad magic value");
            if (2e3 > r.getUint32())
                return void console.log("Bad version");
            e.ai = r.getUint32();
            var n = r.getUint32()
              , i = r.getUint32()
              , a = r.getUint32()
              , o = r.getUint32()
              , s = r.getUint32()
              , u = r.getUint32()
              , l = r.getUint32()
              , c = r.getUint32()
              , h = r.getUint32()
              , f = r.getUint32()
              , d = r.getUint32()
              , b = r.getUint32()
              , m = r.getUint32()
              , p = r.getUint32()
              , g = r.getUint32()
              , _ = r.getUint32()
              , v = r.getUint32()
              , x = r.getUint32()
              , y = r.getUint32()
              , T = r.getUint32()
              , w = r.getUint32()
              , A = r.getUint32()
              , E = r.getUint32()
              , S = r.getUint32()
              , F = r.getUint32()
              , k = r.getUint32();
            let C = new Uint8Array(t,r.position)
              , D = null;
            try {
                D = Object(qh.inflate)(C)
            } catch (t) {
                return void console.log("Decompression error: " + t)
            }
            if (D.length < k)
                console.log("Unexpected data size", D.length, k);
            else {
                r = new yf(D.buffer),
                r.position = n;
                var R, M = r.getInt32();
                if (0 < M) {
                    e.aj = Array(M);
                    for (let t = 0; t < M; ++t)
                        e.aj[t] = new Fh(r)
                }
                if (r.position = i,
                0 < (R = r.getInt32())) {
                    e.ak = Array(R);
                    for (let t = 0; t < R; ++t)
                        e.ak[t] = r.getUint16()
                }
                if (r.position = a,
                0 < (R = r.getInt32())) {
                    e.al = Array(R),
                    e.aX = Array(R);
                    for (let t = 0; t < R; ++t)
                        e.al[t] = r.getUint32(),
                        e.aX[t] = 0
                }
                r.position = o;
                var I = r.getInt32();
                if (0 < I) {
                    e.am = Array(I);
                    for (let t = 0; t < I; ++t)
                        e.am[t] = new kh(r)
                }
                r.position = s;
                var P = r.getInt32();
                if (0 < P) {
                    e.an = Array(P);
                    for (let t = 0; t < P; ++t)
                        e.an[t] = r.getInt16()
                }
                r.position = u;
                var B = r.getInt32();
                if (0 < B) {
                    e.ao = Array(B);
                    for (let t = 0; t < B; ++t)
                        e.ao[t] = new Hh(e,t,r);
                    this.ah = Array(B);
                    for (let t = 0; t < B; t++) {
                        this.ah[t] = [];
                        for (let r = 0; r < B; r++)
                            e.ao[r].e == t && this.ah[t].push(r)
                    }
                }
                r.position = l;
                var U = r.getInt32();
                if (0 < U) {
                    e.ap = Array(U);
                    for (let t = 0; t < U; ++t)
                        e.ap[t] = r.getInt16()
                }
                r.position = c;
                var z = r.getInt32();
                if (0 < z) {
                    e.aq = Array(z);
                    for (let t = 0; t < z; ++t)
                        e.aq[t] = r.getInt16()
                }
                r.position = h;
                var O = r.getInt32();
                if (0 < O) {
                    e.ar = Array(O);
                    for (let t = 0; t < O; ++t)
                        e.ar[t] = new jh(r)
                }
                r.position = f;
                var L = r.getInt32();
                if (0 < L) {
                    e.as = Array(L);
                    for (let t = 0; t < L; ++t)
                        e.as[t] = new Kh(r)
                }
                r.position = d;
                var V = r.getInt32();
                if (0 < V) {
                    e.at = Array(V);
                    for (let t = 0; t < V; ++t)
                        e.at[t] = r.getInt16()
                }
                r.position = b;
                var N = r.getInt32();
                if (0 < N) {
                    e.au = Array(N);
                    for (let t = 0; t < N; ++t)
                        e.au[t] = new Gh(r)
                }
                r.position = m;
                var H = r.getInt32();
                if (0 < H) {
                    e.av = Array(H);
                    for (let t = 0; t < H; ++t)
                        e.av[t] = new $h(e,t,r)
                }
                r.position = p;
                var j = r.getInt32();
                if (0 < j) {
                    e.aw = Array(j);
                    for (let t = 0; t < j; ++t)
                        e.aw[t] = r.getInt16()
                }
                r.position = g;
                var q = r.getInt32();
                if (0 < q) {
                    e.ax = Array(q);
                    for (let t = 0; t < q; ++t)
                        e.ax[t] = new tf(r)
                }
                r.position = _;
                var G = r.getInt32();
                if (0 < G) {
                    e.ay = Array(G);
                    for (let t = 0; t < G; ++t)
                        e.ay[t] = r.getInt16()
                }
                r.position = v;
                var X = r.getInt32();
                if (0 < X) {
                    e.az = Array(X);
                    for (let t = 0; t < X; ++t)
                        e.az[t] = r.getInt16()
                }
                r.position = x;
                var Y = r.getInt32();
                if (0 < Y) {
                    e.aA = Array(Y);
                    for (let t = 0; t < Y; ++t)
                        e.aA[t] = new ef(r)
                }
                r.position = y;
                var W = r.getInt32();
                if (0 < W) {
                    e.aB = Array(W);
                    for (let t = 0; t < W; ++t)
                        e.aB[t] = r.getInt16()
                }
                r.position = T;
                var Z = r.getInt32();
                if (0 < Z) {
                    e.aC = Array(Z);
                    for (let t = 0; t < Z; ++t)
                        e.aC[t] = new rf(r)
                }
                r.position = w;
                var J = r.getInt32();
                if (0 < J) {
                    e.aD = Array(J);
                    for (let t = 0; t < J; ++t)
                        e.aD[t] = new nf(r)
                }
                r.position = A;
                var K = r.getInt32();
                if (0 < K) {
                    e.aE = Array(K);
                    for (let t = 0; t < K; ++t)
                        e.aE[t] = r.getInt16()
                }
                r.position = E;
                var Q = r.getInt32();
                if (0 < Q) {
                    e.aF = Array(Q);
                    for (let t = 0; t < Q; ++t)
                        e.aF[t] = new vf(e,r)
                }
                r.position = F;
                var $ = r.getInt32();
                if (0 < $ && 0 < F) {
                    e.aH = Array($);
                    for (let t = 0; t < $; ++t)
                        e.aH[t] = new xf(r)
                }
                r.position = S;
                var tt = r.getInt32();
                if (0 < tt) {
                    e.aG = Array(tt);
                    for (let t = 0; t < tt; ++t)
                        e.aG[t] = new Sf(e,r)
                }
                e.bN()
            }
        }
        bT(t) {
            var e = Ma.create();
            if (Ma.fromMat4(e, t),
            this.aF)
                for (var r = 0; r < this.aF.length; r++)
                    this.aF[r].Z(t, e);
            if (this.aG)
                for (r = 0; r < this.aG.length; r++)
                    this.aG[r].an(t)
        }
        bU(t) {
            let e = null;
            return this.aB && this.aB.length ? (e = t < this.aB.length ? this.aA[this.aB[t]] : this.aA[this.aB[0]],
            e) : null
        }
        bV() {
            const t = this;
            if (!t.d)
                return;
            t.P++;
            let e = t.aS.time - t.O;
            if (0 < e && (t.O = t.aS.time),
            this.e && this.Q.a && this.Q.a.b) {
                let r = Pa.create();
                -1 < [5, 143, 234, 524, 525, 540, 541, 556, 557].indexOf(this.Q.a.b.a) ? r = Pa.fromValues(0, -5 * e / 1e3, 0) : -1 < [4, 119, 233, 242, 348, 526, 527, 544, 545].indexOf(this.Q.a.b.a) && (r = Pa.fromValues(0, -3 * e / 1e3, 0));
                let n = Ia.create();
                if (Ia.fromTranslation(n, r),
                this.bT(n),
                this.i && this.i.bT(n),
                this.aR && this.aR.bT(n),
                t.z)
                    for (let e = 0; e < t.z.length; e++)
                        this.aR.bT(n)
            }
            if (!this.R && -1 < t.Q.a.a) {
                let t = e;
                for (let e = 0; e < this.aX.length; e++)
                    this.aX[e] += t,
                    0 < this.al[e] && (this.aX[e] %= this.al[e]);
                this.bW(this.Q, t)
            }
            let r, n, i, a = t.as ? t.as.length : 0;
            for (let e = 0; e < a; ++e)
                if (i = t.as[e],
                i.show) {
                    r = i.p.f,
                    n = i.p.e;
                    for (let e = 0; e < r; ++e)
                        t.aj[t.ak[n + e]].k = t.P
                }
            t.aK && t.aK.sort((function(t, e) {
                return t.b == e.b ? t.meshId - e.meshId : t.b - e.b
            }
            ));
            let o = t.ao.length
              , s = t.aT;
            if (t.ao && t.am) {
                for (let e = 0; e < o; ++e)
                    t.ao[e].r = !1;
                for (let r = 0; r < o; ++r)
                    t.ao[r].C(e);
                if (t.aj) {
                    let e, r, n, i, a = t.aj.length, o = t.aN, u = t.aO;
                    for (let l = 0; l < a; ++l)
                        if (e = t.aj[l],
                        e.k == t.P) {
                            i = 10 * l,
                            s[i] = s[i + 1] = s[i + 2] = s[i + 3] = s[i + 4] = s[i + 5] = 0;
                            for (let a = 0; 4 > a; ++a)
                                n = e.g[a] / 255,
                                0 < n && (r = t.ao[e.h[a]],
                                Pa.transformMat4(o, e.a, r.m),
                                Ba.transformMat4(u, e.b, r.m),
                                s[i + 0] += o[0] * n,
                                s[i + 1] += o[1] * n,
                                s[i + 2] += o[2] * n,
                                s[i + 3] += u[0] * n,
                                s[i + 4] += u[1] * n,
                                s[i + 5] += u[2] * n);
                            e.i[0] = s[i + 0],
                            e.i[1] = s[i + 1],
                            e.i[2] = s[i + 2],
                            e.j[0] = s[i + 3],
                            e.j[1] = s[i + 4],
                            e.j[2] = s[i + 5]
                        }
                    t.bx(!1),
                    t.ab || (t.ab = !0,
                    t.by())
                }
            }
            if (t.i && t.i.d) {
                const e = t.i.aA[t.i.aB[0]]
                  , r = 1 / t.i.u.Scale;
                Pa.set(t.aM, r, r, r),
                Ia.identity(t.aL),
                Ia.scale(t.aL, t.aL, t.aM),
                t.br(t.i.T, t.i.ao[e.b].m, e.c, t.aL)
            }
            if (t.j && t.j.d) {
                const e = t.aA[t.aB[19]]
                  , r = t.k.pet.scale || .2 / t.j.u.Scale;
                Pa.set(t.aM, r, r, r),
                Ia.identity(t.aL),
                Ia.scale(t.aL, t.aL, t.aM);
                const n = Pa.clone(e.c)
                  , i = t.k.pet.offset || Pa.fromValues(0, -1.25, 0);
                Pa.add(n, n, i),
                t.j.br(t.T, t.ao[e.b].m, n, t.aL)
            }
            Uc[t.a.id] && !t.v && (Ia.identity(t.T),
            Pa.set(t.aM, 1, 1, -1),
            Ia.scale(t.T, t.T, t.aM)),
            t.w && t.bH()
        }
        bW(t, e) {
            if (t.a.c += e,
            0 > t.b.a && !this.S && !t.d)
                if (-1 < t.a.b.h) {
                    let e = 32767 * Math.random()
                      , r = 0
                      , n = t.a.a
                      , i = this.am[n];
                    for (r += i.d; r < e && -1 < i.h; )
                        n = i.h,
                        i = this.am[n],
                        r += i.d;
                    t.b.a = n,
                    t.b.b = this.am[n],
                    t.b.c = 0
                } else {
                    let e = this.am.find(e => e.a == t.a.b.a && 0 == e.b);
                    e && (t.b.a = e.i,
                    t.b.b = e,
                    t.b.c = 0)
                }
            let r = t.a
              , n = t.b
              , i = r.b.g - r.c
              , a = 0
              , o = null;
            if (-1 < n.a && (o = this.am[n.a],
            a = o.e),
            0 < a && i < a ? (n.c = zf(a - i, o.g),
            t.c = i / a) : t.c = 1,
            r.c >= r.b.g)
                if (-1 < n.a) {
                    if (-1 < n.a)
                        for (; 0 == (32 & this.am[n.a].c) && 0 < (64 & this.am[n.a].c) && (n.a = this.am[n.a].i,
                        n.b = this.am[n.a],
                        !(0 > n.a)); )
                            ;
                    t.a = n,
                    t.b = new Ch,
                    t.c = 1
                } else
                    0 < r.b.g && (r.c = zf(r.c, r.b.g))
        }
        bX(t) {
            var e = this;
            if (this.v ? Ba.copy(e.U, this.v.U) : e.U = Ba.fromValues(1, 1, 1, 1),
            e.i && e.i.bX(t),
            e.d) {
                if (e.j && e.j.bX(t),
                e.bV(),
                this.D && this.D.forEach(e => e.g(t)),
                e.aW = {
                    uModelMatrix: e.T,
                    uViewMatrix: e.aS.viewMatrix,
                    uProjMatrix: e.aS.projMatrix,
                    uCameraPos: e.aS.eye,
                    uAmbientColor: e.V,
                    uDiffuseColor: e.U,
                    uPrimaryColor: e.W,
                    uSecondaryColor: e.X,
                    uLightDir1: e.Y,
                    uLightDir2: e.Z,
                    uLightDir3: e.aa
                },
                e.aU && e.aK)
                    for (let r = 0; r < e.aK.length; ++r)
                        e.aK[r].show && e.aK[r].N(t);
                if (e.aF && e.f)
                    for (let r, n = 0; n < e.aF.length; ++n)
                        r = e.aH ? e.aH[n] : null,
                        e.aF[n].X(e.Q, e.aS.delta, r),
                        e.aF[n].Y(t);
                if (e.aG && e.g)
                    for (let r = 0; r < e.aG.length; ++r)
                        e.aG[r].ar(e.Q, e.aS.delta),
                        e.aG[r].av(),
                        e.aG[r].aw(t);
                if (e.aR && e.bF(e.aR, t),
                e.x.forEach(r => {
                    if (r && r.i) {
                        if (2 == r.c && 13 == r.d) {
                            if (r.e == ch && -1 != e.G)
                                return;
                            if (r.e == hh && -1 != e.H)
                                return
                        }
                        r.A(t)
                    }
                }
                ),
                e.z)
                    for (let r = 0; r < e.z.length; r++)
                        for (let r, n = 0; n < e.z.length; n++) {
                            if (r = e.z[n],
                            !r.d)
                                continue;
                            let i = e.aB[e.k.extraModels[n][1]];
                            if (-1 == i) {
                                console.log("invalid extra model attachment", e.k.extraModels[n][1]);
                                continue
                            }
                            let a = e.aA[i]
                              , o = e.k.extraModels[n][2];
                            Pa.set(e.aM, o, o, o),
                            Ia.identity(e.aL),
                            Ia.scale(e.aL, e.aL, e.aM),
                            Ia.rotateX(e.aL, e.aL, e.k.extraModels[n][3]),
                            Ia.rotateY(e.aL, e.aL, e.k.extraModels[n][4]),
                            Ia.rotateZ(e.aL, e.aL, e.k.extraModels[n][5]),
                            r.br(e.T, e.ao[a.b].m, a.c, e.aL),
                            r.bV(),
                            r.bX(t)
                        }
                for (const r in e.y)
                    e.y[r] && e.bF(e.y[r], t)
            }
        }
    }
    var Nf = Vf;
    const Hf = {
        2: "Wowhead",
        3: "LolKing",
        6: "HeroKing",
        7: "DestinyDB"
    };
    class jf {
        constructor(t) {
            if (!t.type || !Hf[t.type])
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
              , r = ga(e / this.aspect);
            this.init(e, r)
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
                } catch (e) {
                    return void console.log("viewer init failed")
                }
            this.mode = 1,
            this.renderer = new Gf(this),
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
            t ? jf.requestFullscreen(this.renderer.canvas[0]) : jf.exitFullscreen()
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
    var qf = jf
      , Gf = class {
        constructor(t) {
            this.currFrame = 0,
            this.clearColor = Pa.fromValues(0, 0, 0),
            this.addedCss = !1,
            this.progressShown = !1,
            this.attributeState = new zl,
            this.onContextMenu = function() {
                return !1
            }
            ;
            var e = this;
            e.viewer = t,
            e.options = t.options,
            e.downloads = {},
            e.context = null,
            e.width = 0,
            e.height = 0,
            e.time = 0,
            e.delta = 0,
            e.models = [],
            e.screenshotDataURL = null,
            e.makeDataURL = !1,
            e.screenshotCallback = null,
            e.azimuth = 1.5 * Sa,
            e.zenith = Sa / 2,
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
                return ma(t) / ma(1 + e.zoom.rateStep)
            }
            )),
            e.translation = Pa.fromValues(0, 0, 0),
            e.target = Pa.fromValues(0, 0, 0),
            e.eye = Pa.fromValues(0, 0, 0),
            e.up = Pa.fromValues(0, 0, 1),
            e.lookDir = Pa.create(),
            e.fullscreen = !1,
            e.projMatrix = Ia.create(),
            e.viewMatrix = Ia.create(),
            e.panningMatrix = Ia.create(),
            e.viewOffset = Pa.create(),
            e.aniFilterExt = null,
            e.aniFilterMax = 0,
            this.addedCss || (this.addedCss = !0,
            $("head").append('<link rel="stylesheet" href="//wow.zamimg.com/modelviewer/viewer/viewer.css" type="text/css" />'))
        }
        updateProgress() {
            var t = this
              , e = 0
              , r = 0;
            for (var n in t.downloads)
                e += t.downloads[n].total,
                r += t.downloads[n].loaded;
            if (0 >= e)
                t.progressShown && (t.progressBg.hide(),
                t.progressBar.hide(),
                t.progressShown = !1);
            else {
                t.progressShown || (t.progressBg.show(),
                t.progressBar.show(),
                t.progressShown = !0);
                var i = r / e;
                t.progressBar.width(ga(t.width * i) + "px")
            }
        }
        destroy() {
            var t = this;
            if (t.stop = !0,
            t.canvas && (t.canvas.detach(),
            t.progressBg.detach(),
            t.progressBar.detach(),
            t.canvas.off("mousedown touchstart", t.onMouseDown).off("DOMMouseScroll", t.onMouseScroll).off("mousewheel", t.onMouseWheel).off("dblclick", t.onDoubleClick).off("contextmenu", t.onContextMenu),
            $(window).off("resize", t.onFullscreen),
            $(document).off("mouseup touchend", t.onMouseUp).off("mousemove touchmove", t.onMouseMove),
            t.canvas = t.progressBg = t.progressBar = null),
            t.context) {
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
            t.bgImg && (t.bgImg = null);
            for (var r = 0; r < t.models.length; ++r)
                t.models[r].ba(),
                t.models[r] = null;
            t.models = []
        }
        method(t, e) {
            if (0 < this.models.length && this.models[0]) {
                const r = this.models[0][t];
                return r ? r.apply(this.models[0], e) : void WH.debug("Unknown viewer method", t, "args", e)
            }
        }
        getTime() {
            return window.performance && window.performance.now ? window.performance.now() : Date.now()
        }
        draw(t) {
            var e, r = this, n = r.context;
            r.delta = .001 * (t - r.time),
            r.time = t,
            r.currFrame++,
            r.updateCamera(),
            n.bindFramebuffer(n.FRAMEBUFFER, null),
            n.viewport(0, 0, r.width, r.height),
            n.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], 0),
            n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT),
            r.bgTexture && r.program && (n.useProgram(r.program),
            n.activeTexture(n.TEXTURE0),
            n.bindTexture(n.TEXTURE_2D, r.bgTexture),
            n.uniform1i(r.uTexture, 0),
            n.bindBuffer(n.ARRAY_BUFFER, r.vb),
            n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, null),
            n.enableVertexAttribArray(r.aPosition),
            n.vertexAttribPointer(r.aPosition, 2, n.FLOAT, !1, 16, 0),
            n.enableVertexAttribArray(r.aTexCoord),
            n.vertexAttribPointer(r.aTexCoord, 2, n.FLOAT, !1, 16, 8),
            n.depthMask(!1),
            n.disable(n.CULL_FACE),
            n.blendFunc(n.ONE, n.ZERO),
            n.drawArrays(n.TRIANGLE_STRIP, 0, 4),
            n.blendFunc(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA),
            n.enable(n.CULL_FACE),
            n.depthMask(!0),
            n.disableVertexAttribArray(r.aPosition),
            n.disableVertexAttribArray(r.aTexCoord));
            let i = [];
            for (e = 0; e < r.models.length; ++e)
                r.models[e].bX(i);
            i.sort( (t, e) => {
                let r = 1 < t.e
                  , n = 1 < e.e;
                return r > n ? 1 : r < n ? -1 : t.m == e.m ? t.n > e.n ? -1 : t.n < e.n ? 1 : e.o == t.o ? e.e == t.e ? 0 : t.e < e.e ? -1 : 1 : e.o < t.o ? 1 : -1 : e.m > t.m ? -1 : 1
            }
            ),
            n.viewport(0, 0, r.width, r.height),
            this.attributeState.disableAll(),
            i.forEach(t => {
                n.useProgram(t.a.program),
                n.bindBuffer(n.ARRAY_BUFFER, t.c),
                n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.d),
                this.attributeState.enable(n, t.a.attributes),
                he(t.a, t.b),
                t.h ? n.enable(n.CULL_FACE) : n.disable(n.CULL_FACE),
                t.i ? n.frontFace(n.CCW) : n.frontFace(n.CW),
                this.setBlendMode(n, t.e),
                n.depthMask(t.f),
                n.drawElements(t.j, t.k, n.UNSIGNED_SHORT, t.l)
            }
            ),
            this.attributeState.disableAll()
        }
        setAdaptiveMode(t) {
            this.addaptiveMode = t,
            t && $(window).trigger("resize")
        }
        setTranslation(t, e, r) {
            this.translation = Pa.fromValues(t, e, r)
        }
        setBlendMode(t, e) {
            switch (0 == e ? t.disable(t.BLEND) : (t.enable(t.BLEND),
            t.blendEquation(t.FUNC_ADD)),
            e) {
            case 0:
                break;
            case 1:
                t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ONE);
                break;
            case 2:
                t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE);
                break;
            case 3:
                t.blendFuncSeparate(t.SRC_ALPHA, t.ONE, t.ONE, t.ONE);
                break;
            case 4:
                t.blendFuncSeparate(t.DST_COLOR, t.ZERO, t.ONE, t.ONE);
                break;
            case 5:
                t.blendFuncSeparate(t.DST_COLOR, t.SRC_COLOR, t.ONE, t.ONE);
                break;
            case 6:
                t.blendFuncSeparate(t.DST_COLOR, t.ONE, t.ONE, t.ONE);
                break;
            case 10:
                t.blendFunc(t.ONE, t.ONE);
                break;
            case 7:
                t.blendFuncSeparate(t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE, t.ONE);
                break;
            case 8:
                t.blendFuncSeparate(t.ONE_MINUS_SRC_ALPHA, t.ZERO, t.ONE, t.ONE);
                break;
            case 13:
                t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE);
                break;
            default:
                throw 3735927486
            }
        }
        updateCamera() {
            var t = this;
            t.zoom.target += t.zoom.rateCurrent,
            t.zoom.rateCurrent *= 1 - t.zoom.rateAccelerationDecay,
            t.zoom.target = -Ca(ka(-t.zoom.target, t.zoom.range[1]), t.zoom.range[0]),
            t.zoom.current += (t.zoom.target - t.zoom.current) * t.zoom.interpolationRate;
            var e = t.distance * ya(t.zoom.rateStep + 1, -t.zoom.current)
              , r = t.azimuth
              , n = t.zenith;
            1 == t.up[2] ? (t.eye[0] = -e * wa(n) * Aa(r) + t.target[0],
            t.eye[1] = -e * wa(n) * wa(r) + t.target[1],
            t.eye[2] = -e * Aa(n) + t.target[2]) : (t.eye[0] = -e * wa(n) * Aa(r) + t.target[0],
            t.eye[1] = -e * Aa(n) + t.target[1],
            t.eye[2] = -e * wa(n) * wa(r) + t.target[2]),
            Pa.subtract(t.lookDir, t.target, t.eye),
            Pa.normalize(t.lookDir, t.lookDir),
            Ia.lookAt(t.viewMatrix, t.eye, t.target, t.up),
            Ia.identity(t.panningMatrix),
            1 == t.up[2] ? Pa.set(t.viewOffset, t.translation[0], -t.translation[1], 0) : Pa.set(t.viewOffset, t.translation[0], 0, t.translation[1]),
            Ia.translate(t.panningMatrix, t.panningMatrix, t.viewOffset),
            Ia.multiply(t.viewMatrix, t.panningMatrix, t.viewMatrix)
        }
        init() {
            var t, e = this, r = e.context;
            this.blackPixelTexture = r.createTexture(),
            r.bindTexture(r.TEXTURE_2D, this.blackPixelTexture),
            r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 1])),
            r.bindTexture(r.TEXTURE_2D, null),
            Ia.perspective(e.projMatrix, .0174532925 * e.fov, e.viewer.aspect, .1, 5e3),
            e.updateCamera(),
            r.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], 0),
            r.enable(r.DEPTH_TEST),
            r.depthFunc(r.LEQUAL),
            r.blendFunc(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA),
            r.enable(r.BLEND);
            var n = null;
            switch (e.viewer.type) {
            case 2:
                n = Nf
            }
            if ((e.options.models || e.options.items) && n) {
                var i = [].concat(e.options.models);
                if (0 < i.length)
                    for (t = 0; t < i.length; ++t)
                        e.models.push(new n(e,e.options,i[t],t,!0,!1,!1))
            }
            !function t() {
                if (!e.stop) {
                    window.requestAnimationFrame(t);
                    var n = e.getTime();
                    if (!1 !== e.makeDataURL) {
                        if (e.canvas[0].toDataURL) {
                            var i = e.clearColor
                              , a = e.bgTexture;
                            e.options.transparent && (e.bgTexture = null,
                            e.clearColor = Pa.fromValues(0, 0, 0)),
                            e.draw(n);
                            var o = e.width * e.height * 4
                              , s = new Uint8Array(o);
                            r.readPixels(0, 0, e.width, e.height, r.RGBA, r.UNSIGNED_BYTE, s);
                            let t = null;
                            e.options.transparent ? (e.clearColor = Pa.fromValues(1, 1, 1),
                            e.draw(n),
                            t = new Uint8Array(o),
                            r.readPixels(0, 0, e.width, e.height, r.RGBA, r.UNSIGNED_BYTE, t)) : t = s;
                            for (var u = new Uint8Array(o), l = 0, c = e.height - 1; 0 <= c; c--)
                                for (var h = 0; h < e.width; h++) {
                                    var f = 4 * (c * e.width + h)
                                      , d = 255 - (t[l + 0] - s[l + 0])
                                      , b = s[l + 0]
                                      , m = s[l + 1]
                                      , p = s[l + 2];
                                    s[l + 3];
                                    u[f + 0] = b,
                                    u[f + 1] = m,
                                    u[f + 2] = p,
                                    u[f + 3] = d,
                                    l += 4
                                }
                            var g = document.createElement("canvas")
                              , _ = g.getContext("2d");
                            g.width = e.width,
                            g.height = e.height;
                            var v = _.createImageData(e.width, e.height);
                            v.data.set(u),
                            _.putImageData(v, 0, 0),
                            e.screenshotDataURL = g.toDataURL.apply(g, e.makeDataURL),
                            e.screenshotCallback && (e.screenshotCallback(),
                            e.screenshotCallback = null),
                            e.clearColor = i,
                            e.bgTexture = a
                        }
                        e.makeDataURL = !1
                    }
                    e.draw(n)
                }
            }()
        }
        onDoubleClick() {
            qf.isFullscreen() ? qf.exitFullscreen() : qf.requestFullscreen(this.canvas[0])
        }
        onFullscreen() {
            let t = this;
            if (t.viewer.container)
                if (!t.fullscreen && qf.isFullscreen() || this.addaptiveMode) {
                    if (t.restoreWidth = t.width,
                    t.restoreHeight = t.height,
                    t.fullscreen = !0,
                    qf.isFullscreen()) {
                        var e = $(window);
                        let t = window.screen.width || e.width()
                          , r = window.screen.height || e.height();
                        this.onResize(t, r, t / r)
                    } else if (this.addaptiveMode) {
                        var r = t.viewer.container;
                        this.onResize(r.width(), r.height(), r.width() / r.height())
                    }
                } else
                    t.fullscreen && !qf.isFullscreen() && (t.fullscreen = !1,
                    this.onResize(t.restoreWidth, t.restoreHeight, t.viewer.aspect))
        }
        onResize(t, e, r) {
            this.resize(t, e),
            Ia.perspective(this.projMatrix, .0174532925 * this.fov, r, .1, 5e3)
        }
        onMouseDown(t) {
            let e = this;
            3 == t.which || t.ctrlKey ? e.rightMouseDown = !0 : e.mouseDown = !0,
            "touchstart" == t.type ? (e.mouseX = t.originalEvent.touches[0].clientX,
            e.mouseY = t.originalEvent.touches[0].clientY) : (e.mouseX = t.clientX,
            e.mouseY = t.clientY),
            $("body").addClass("unselectable")
        }
        onMouseScroll(t) {
            return this.zoom.rateCurrent += 0 < t.originalEvent.detail ? 1 : -1,
            t.preventDefault(),
            !1
        }
        onMouseWheel(t) {
            if (!this.options.wheelEventValidation || this.options.wheelEventValidation.call(this, t))
                return this.zoom.rateCurrent += 0 < t.originalEvent.wheelDelta ? 1 : -1,
                t.preventDefault(),
                !1
        }
        onMouseUp() {
            let t = this;
            (t.mouseDown || t.rightMouseDown) && ($("body").removeClass("unselectable"),
            t.mouseDown = !1,
            t.rightMouseDown = !1)
        }
        onMouseMove(t) {
            let e = this;
            if ((e.mouseDown || e.rightMouseDown) && void 0 !== e.mouseX) {
                var r, n;
                "touchmove" == t.type ? (t.preventDefault(),
                r = t.originalEvent.touches[0].clientX,
                n = t.originalEvent.touches[0].clientY) : (r = t.clientX,
                n = t.clientY);
                var i = (r - e.mouseX) / e.width * Sa * 2
                  , a = (n - e.mouseY) / e.width * Sa * 2;
                if (e.mouseDown) {
                    1 == e.up[2] ? e.azimuth -= i : e.azimuth += i,
                    e.zenith += a;
                    for (var o = 2 * Sa; 0 > e.azimuth; )
                        e.azimuth += o;
                    for (; e.azimuth > o; )
                        e.azimuth -= o;
                    1e-4 > e.zenith && (e.zenith = 1e-4),
                    e.zenith >= Sa && (e.zenith = Sa - 1e-4)
                } else
                    e.translation[0] += i,
                    e.translation[1] += a;
                e.mouseX = r,
                e.mouseY = n
            }
        }
        resize(t, e) {
            var r = this;
            if (r.width !== t || r.height !== e) {
                if (r.fullscreen || r.viewer.container.css({
                    height: e + "px",
                    position: "relative"
                }),
                r.width = t,
                r.height = e,
                r.canvas)
                    r.canvas.attr({
                        width: t,
                        height: e
                    }),
                    r.canvas.css({
                        width: t + "px",
                        height: e + "px"
                    }),
                    r.context.viewport(0, 0, r.width, r.height);
                else {
                    if (r.canvas = $("<canvas/>"),
                    r.canvas.attr({
                        width: t,
                        height: e
                    }),
                    r.viewer.container.append(r.canvas),
                    r.context = r.canvas[0].getContext("webgl", {
                        alpha: !0,
                        premultipliedAlpha: !1
                    }) || r.canvas[0].getContext("experimental-webgl", {
                        alpha: !0,
                        premultipliedAlpha: !1
                    }),
                    r.progressBg = $("<div/>", {
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
                    r.progressBar = $("<div/>", {
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
                    r.viewer.container.append(r.progressBg),
                    r.viewer.container.append(r.progressBar),
                    !r.context)
                        return alert("No WebGL support, sorry! You should totally use Chrome."),
                        r.canvas.detach(),
                        void (r.canvas = null);
                    const n = r.context.getExtension("EXT_texture_filter_anisotropic") || r.context.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.context.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    n ? (r.aniFilterExt = n,
                    r.aniFilterMax = r.context.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
                    WH.debug("Texture anisotropy enabled", r.aniFilterMax)) : WH.debug("Texture anisotropy disabled (not supported)"),
                    r.canvas.on("mousedown touchstart", r.onMouseDown.bind(r)).on("DOMMouseScroll", r.onMouseScroll.bind(r)).on("mousewheel", r.onMouseWheel.bind(r)).on("dblclick", r.onDoubleClick.bind(r)).on("contextmenu", r.onContextMenu.bind(r)),
                    $(window).on("resize", r.onFullscreen.bind(r)),
                    $(document).on("mouseup touchend", r.onMouseUp.bind(r)).on("mousemove touchmove", r.onMouseMove.bind(r)),
                    r.onFullscreen(null)
                }
                r.options.background && r.loadBackground()
            }
        }
        loadBackground() {
            var t = this
              , e = t.context;
            const r = function() {
                t.vb = e.createBuffer(),
                e.bindBuffer(e.ARRAY_BUFFER, t.vb),
                e.bufferData(e.ARRAY_BUFFER, new Float32Array(16), e.DYNAMIC_DRAW);
                var r = t.compileShader(e.VERTEX_SHADER, "    attribute vec2 aPosition;    attribute vec2 aTexCoord;        varying vec2 vTexCoord;        void main(void) {        vTexCoord = aTexCoord;        gl_Position = vec4(aPosition, 0, 1);    }    ")
                  , n = t.compileShader(e.FRAGMENT_SHADER, "    precision mediump float;    varying vec2 vTexCoord;        uniform sampler2D uTexture;        void main(void) {        gl_FragColor = texture2D(uTexture, vTexCoord);    }    ")
                  , i = e.createProgram();
                return e.attachShader(i, r),
                e.attachShader(i, n),
                e.linkProgram(i),
                e.getProgramParameter(i, e.LINK_STATUS) ? (t.vs = r,
                t.fs = n,
                t.program = i,
                t.uTexture = e.getUniformLocation(i, "uTexture"),
                t.aPosition = e.getAttribLocation(i, "aPosition"),
                void (t.aTexCoord = e.getAttribLocation(i, "aTexCoord"))) : void console.error("Error linking shaders")
            }
              , n = function() {
                var r = t.width / t.bgImg.width
                  , n = t.height / t.bgImg.height;
                e.bindBuffer(e.ARRAY_BUFFER, t.vb),
                e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array([-1, -1, 0, n, 1, -1, r, n, -1, 1, 0, 0, 1, 1, r, 0]))
            };
            t.bgImg ? t.bgImg.loaded && (!t.vb && r(),
            n()) : (t.bgImg = new Image,
            t.bgImg.crossOrigin = "",
            t.bgImg.onload = function() {
                t.bgImg.loaded = !0,
                t.bgTexture = e.createTexture(),
                e.bindTexture(e.TEXTURE_2D, t.bgTexture),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.bgImg),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
                t.vb || r(),
                n()
            }
            ,
            t.bgImg.onerror = function() {
                t.bgImg = null
            }
            ,
            t.bgImg.src = t.options.contentPath + t.options.background)
        }
        compileShader(t, e) {
            var r = this.context
              , n = r.createShader(t);
            if (r.shaderSource(n, e),
            r.compileShader(n),
            !r.getShaderParameter(n, r.COMPILE_STATUS))
                throw "Shader compile error: " + r.getShaderInfoLog(n);
            return n
        }
    }
    ;
    let Xf = Object.assign(qf, {
        Tools: Ll,
        WebGL: Gf,
        WEBGL: 1,
        WOW: 2,
        FLASH: 2,
        Wow: {
            Types: Lc
        }
    });
    window.ZamModelViewer = Xf
}
]);
//# sourceMappingURL=viewer.min.js.map
