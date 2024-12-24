// @ts-check

const _0x36daa1 = {
    alg: "RSA-OAEP-256",
    e: "AQAB",
    ext: true,
    key_ops: ["encrypt"],
    kty: "RSA",
    n: "8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh" + "_UWTL" + "Rvoj9" + "bHFFG" + "FhRTO" + "G80zt" + "Y-aeG" + "uSeE5" + "q3k86" + "t9dgB" + "A3v-B" + "BW9u_" + "ISuOd" + "_hJvb" + "6Z8kZ" + "mheak" + "74uXR" + "FTKkj" + "O9Saw" + "Za-9c" + "KC82l" + "ucYQe" + "HPBWi" + "qg7F8" + "o15TS" + "KtBqa" + "8KD5_" + "RYel3" + "BZpUa" + "N1mdQ" + "IO0HH" + "iFbxe" + "b2lLX" + "cPlXL" + "1cSGD" + "1bOeQ" + "J75i_" + "0Sl50" + "DHI6v" + "M7SZp" + "xRYc6" + "dVO4t" + "rG05b" + "GfNoQ" + "tmbww" + "_UXzc" + "OEi4L" + "ZI-4E" + "d42oT" + "QxP3r" + "Tw"
};
async function _0x4dc979(_0x320e1f) {
    const _0x19edc6 = function () {
        let _0x14cef2 = true;
        return function (_0x58402d, _0x593152) {
            const _0x3d1ce7 = _0x14cef2 ? function () {
                if (_0x593152) {
                    const _0x3e372a = _0x593152.apply(_0x58402d, arguments);
                    _0x593152 = null;
                    return _0x3e372a;
                }
            } : function () { };
            _0x14cef2 = false;
            return _0x3d1ce7;
        };
    }();
    const _0x1e2750 = _0x19edc6(this, function () {
        const _0x2eceea = function () {
            let _0xa3a8ee;
            try {
                _0xa3a8ee = Function("return (function() {}.constructor(\"return this\")( ));")();
            } catch (_0x1128ed) {
                _0xa3a8ee = window;
            }
            return _0xa3a8ee;
        };
        const _0x3f497b = _0x2eceea();
        const _0x48f774 = _0x3f497b.console = _0x3f497b.console || {};
        const _0x52661e = ["log", "warn", "info", "error", "exception", "table", "trace"];
        for (let _0x177aa8 = 0; _0x177aa8 < _0x52661e.length; _0x177aa8++) {
            const _0x407421 = _0x19edc6.constructor.prototype.bind(_0x19edc6);
            const _0x11b9b6 = _0x52661e[_0x177aa8];
            const _0x132571 = _0x48f774[_0x11b9b6] || _0x407421;
            _0x407421.__proto__ = _0x19edc6.bind(_0x19edc6);
            _0x407421.toString = _0x132571.toString.bind(_0x132571);
            _0x48f774[_0x11b9b6] = _0x407421;
        }
    });
    _0x1e2750();
    const _0x51af79 = crypto.getRandomValues(new Uint8Array(12));
    const _0x43ecbe = {
        name: "AES-GCM",
        length: 0x100
    };
    const _0x248f16 = await crypto.subtle.generateKey(_0x43ecbe, true, ["encrypt", "decrypt"]);
    const _0x28a5d8 = await crypto["subtl" + "e"].exportKey("raw", _0x248f16);
    const _0x2ac056 = await _0x3a0d9f(_0x28a5d8, _0x36daa1);
    const _0xb15ea2 = JSON.stringify(_0x320e1f);
    const _0x3157cb = new TextEncoder().encode(_0xb15ea2);
    const _0x2201b2 = {
        name: "AES-GCM",
        iv: _0x51af79
    };
    const _0x530cff = await crypto["subtl" + "e"].encrypt(_0x2201b2, _0x248f16, _0x3157cb);
    const _0x49cdde = btoa(String.fromCharCode(...new Uint8Array(_0x530cff)));
    const _0x18f45b = btoa(String.fromCharCode(...new Uint8Array(_0x51af79)));
    const _0x4db5ae = btoa(String.fromCharCode(...new Uint8Array(_0x2ac056)));
    return [_0x49cdde, _0x18f45b, _0x4db5ae];
}
async function _0x3a0d9f(_0x4cd735, _0x2a3f96) {
    const _0x28fa55 = {
        "name": "SHA-256"
    };
    const _0x15ec17 = {
        "name": "RSA-OAEP"
    };
    _0x15ec17.hash = _0x28fa55;
    const _0x2358ee = await crypto.subtle.importKey("jwk", _0x2a3f96, _0x15ec17, true, ["encrypt"]);
    const _0x7b1865 = {
        name: "RSA-OAEP"
    };
    return await crypto["subtl" + "e"].encrypt(_0x7b1865, _0x2358ee, _0x4cd735);
}
const _0x41f1df = performance.now();
const _0x51dd0d = document.createElement("canvas");
if (typeof _0x51dd0d.getContext !== "function") { }
const _0x20122e = _0x51dd0d.getContext("webgl");
if (_0x20122e === null) { }
if (typeof _0x20122e.getParameter !== "function") { }
const _0x267ecf = _0x20122e.getParameter(_0x20122e.VENDOR);
const _0x5af2cc = _0x20122e.getParameter(_0x20122e.RENDERER);
const _0x5bdda3 = _0x20122e ? _0x20122e["getEx" + "tensi" + "on"]("WEBGL_debug_renderer_info") : null;
let _0x27d783 = null;
if (_0x5bdda3) {
    _0x27d783 = _0x20122e.getParameter(_0x5bdda3.UNMASKED_RENDERER_WEBGL);
}
const _0x57f51a = {
    vendor: _0x267ecf,
    renderer: _0x5af2cc,
    unmaskedRenderer: _0x27d783
};
_0x4dc979(_0x57f51a).then(_0x4d3de6 => {
    localStorage.setItem("t10", JSON.stringify(_0x4d3de6));
    const _0x5f32d8 = new Event("dataChanged");
    window["dispatchEv" + "ent"](_0x5f32d8);
})["catch"](() => {
});